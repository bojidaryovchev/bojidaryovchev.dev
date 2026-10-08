#!/usr/bin/env node

import { execFile, spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, mkdtemp, readFile, rm } from "node:fs/promises";
import { createServer } from "node:net";
import { tmpdir } from "node:os";
import { join, relative, resolve } from "node:path";
import { cwd, env, execPath, exit, platform } from "node:process";
import { promisify } from "node:util";

/**
 * CV Export Script
 *
 * Exports every CV (each profile, in the visual and the ATS layout) to PDF using a
 * Chromium-based browser that is already installed, so the project needs no PDF library.
 * The PDFs are printed from the real pages, with the same print styles as "Download PDF".
 *
 * Usage:
 *   npm run build && npm run cv:pdf                      Export from the production build
 *   CV_BASE_URL=http://localhost:3000 npm run cv:pdf     Export from a server that is already running
 *
 * Environment variables:
 *   CV_BASE_URL   Origin to export from, instead of starting `next start`
 *   CHROME_PATH   Browser executable, if Chrome or Edge is not found automatically
 *   CV_OUT_DIR    Output directory (default: cv-exports)
 *
 * The list of CVs and their file names comes from /cv/manifest.json (src/cv-profiles.ts).
 * Exits with an error if any CV is longer than MAX_PAGES.
 */

const MAX_PAGES = 2;
const ROOT_DIR = cwd();
const OUT_DIR = resolve(ROOT_DIR, env.CV_OUT_DIR ?? "cv-exports");

const run = promisify(execFile);

function findBrowser() {
  const candidatesByPlatform = {
    win32: [
      [env.PROGRAMFILES, "Google/Chrome/Application/chrome.exe"],
      [env["PROGRAMFILES(X86)"], "Google/Chrome/Application/chrome.exe"],
      [env.LOCALAPPDATA, "Google/Chrome/Application/chrome.exe"],
      [env["PROGRAMFILES(X86)"], "Microsoft/Edge/Application/msedge.exe"],
      [env.PROGRAMFILES, "Microsoft/Edge/Application/msedge.exe"],
    ],
    darwin: [
      ["/Applications/Google Chrome.app/Contents/MacOS", "Google Chrome"],
      ["/Applications/Microsoft Edge.app/Contents/MacOS", "Microsoft Edge"],
      ["/Applications/Chromium.app/Contents/MacOS", "Chromium"],
    ],
    linux: [
      ["/usr/bin", "google-chrome"],
      ["/usr/bin", "google-chrome-stable"],
      ["/usr/bin", "chromium"],
      ["/usr/bin", "chromium-browser"],
      ["/snap/bin", "chromium"],
    ],
  };

  const candidates = (candidatesByPlatform[platform] ?? [])
    .filter(([directory]) => directory)
    .map(([directory, file]) => join(directory, file));

  return [env.CHROME_PATH, ...candidates].find((candidate) => candidate && existsSync(candidate));
}

function findFreePort() {
  return new Promise((resolvePort, reject) => {
    const server = createServer();
    server.once("error", reject);
    server.listen(0, () => {
      const { port } = server.address();
      server.close(() => resolvePort(port));
    });
  });
}

/**
 * Serves the production build on a free port. Next is started as a direct child of this
 * process (not through npm/npx), so stopping it cannot leave a server behind.
 */
async function startServer() {
  if (!existsSync(join(ROOT_DIR, ".next", "BUILD_ID"))) {
    throw new Error("No production build found. Run `npm run build` first, or set CV_BASE_URL.");
  }

  const port = await findFreePort();
  const server = spawn(execPath, [join(ROOT_DIR, "node_modules/next/dist/bin/next"), "start", "-p", String(port)], {
    cwd: ROOT_DIR,
    stdio: "ignore",
  });

  return { baseUrl: `http://localhost:${port}`, stop: () => server.kill() };
}

async function fetchManifest(baseUrl) {
  const url = `${baseUrl}/cv/manifest.json`;
  let lastError;

  // The server may still be starting: retry for up to 30 seconds.
  for (let attempt = 0; attempt < 60; attempt++) {
    try {
      const response = await fetch(url);
      if (response.ok) return await response.json();
      lastError = new Error(`${url} responded with ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 500));
  }

  throw new Error(`Could not load the CV manifest: ${lastError?.message}`);
}

/** Chromium writes the page tree uncompressed, so the page count can be read without a PDF parser. */
function countPages(pdf) {
  const text = pdf.toString("latin1");
  const pageTree = text.match(/\/Type\s*\/Pages\b[^>]*?\/Count\s+(\d+)/);

  return pageTree ? Number(pageTree[1]) : (text.match(/\/Type\s*\/Page\b(?!s)/g) ?? []).length;
}

async function exportCvs() {
  const browser = findBrowser();

  if (!browser) {
    throw new Error("No Chrome, Edge or Chromium found. Set CHROME_PATH to a Chromium-based browser.");
  }

  const server = env.CV_BASE_URL
    ? { baseUrl: env.CV_BASE_URL.replace(/\/$/, ""), stop: () => {} }
    : await startServer();
  const browserProfile = await mkdtemp(join(tmpdir(), "cv-export-"));
  const results = [];

  try {
    const manifest = await fetchManifest(server.baseUrl);
    await mkdir(OUT_DIR, { recursive: true });

    console.log(`Exporting ${manifest.length} CVs from ${server.baseUrl}\n`);

    for (const { path, fileName } of manifest) {
      const file = join(OUT_DIR, fileName);
      await rm(file, { force: true });

      await run(
        browser,
        [
          "--headless=new",
          "--disable-gpu",
          "--no-pdf-header-footer",
          `--user-data-dir=${browserProfile}`,
          `--print-to-pdf=${file}`,
          // Lets images and fonts finish loading before the page is printed.
          "--virtual-time-budget=5000",
          `${server.baseUrl}${path}`,
        ],
        { timeout: 60_000 },
      );

      const pages = countPages(await readFile(file));
      results.push({ fileName, pages });
      console.log(`  ${pages > MAX_PAGES ? "✗" : "✓"} ${fileName}  (${pages} ${pages === 1 ? "page" : "pages"})`);
    }
  } finally {
    server.stop();
    // The browser can hold its profile open for a moment after exiting; a leftover temp folder is harmless.
    await rm(browserProfile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 }).catch(() => {});
  }

  const tooLong = results.filter(({ pages }) => pages > MAX_PAGES);

  console.log(`\nSaved to ${relative(ROOT_DIR, OUT_DIR) || "."}`);

  if (tooLong.length > 0) {
    throw new Error(
      `${tooLong.map(({ fileName }) => fileName).join(", ")} ${tooLong.length === 1 ? "is" : "are"} longer than ${MAX_PAGES} pages. Trim the copy in src/constants.tsx or src/cv-profiles.ts.`,
    );
  }
}

exportCvs().catch((error) => {
  console.error(`\n❌ ${error.message}`);
  exit(1);
});
