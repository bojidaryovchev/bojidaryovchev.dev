import type { NextConfig } from "next";

/**
 * Site-wide `noindex`. The robots meta tag in src/app/layout.tsx only covers
 * rendered HTML, so this header carries the same directive on every response —
 * images, the OpenGraph image, the manifest, generated PDFs and static assets
 * included, none of which can carry a meta tag.
 */
const noIndexHeaderValue = "noindex, nofollow, noarchive, nosnippet, noimageindex, notranslate, max-image-preview:none";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: noIndexHeaderValue,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
