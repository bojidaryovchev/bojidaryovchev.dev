import type { MetadataRoute } from "next";

/**
 * The site is intentionally kept out of all search indexes.
 *
 * Crawling is deliberately *allowed* here: a `Disallow` would stop crawlers from
 * ever fetching the pages and therefore from ever seeing the `noindex` directive,
 * which leaves already-known URLs indexable from external links alone. The actual
 * de-indexing is done by the `noindex` robots meta tag (src/app/layout.tsx) and the
 * `X-Robots-Tag` response header (next.config.ts), which crawlers must fetch to read.
 *
 * LLM / AI crawlers get a hard `Disallow` instead, since they do not honour `noindex`.
 */
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "meta-externalagent",
  "Amazonbot",
  "cohere-ai",
];

const robots = (): MetadataRoute.Robots => {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: aiCrawlers,
        disallow: "/",
      },
    ],
  };
};

export default robots;
