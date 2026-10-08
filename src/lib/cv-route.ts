import { cvPath, cvProfiles, getCvProfile } from "@/cv-profiles";
import { ogImageSize, siteConfig } from "@/site-config";
import type { CvMode } from "@/types/cv-profile.interface";
import type { Metadata } from "next";

export interface CvRouteProps {
  params: Promise<{ profile: string }>;
}

export const cvStaticParams = () => cvProfiles.map(({ id }) => ({ profile: id }));

/**
 * Metadata shared by every page under /cv.
 *
 * CV variants are near-duplicates of each other by design, so they are always kept out of
 * search indexes (and the sitemap), whatever the site-wide setting in layout.tsx is. Each
 * points at itself as canonical rather than inheriting the homepage's, and carries its own
 * social preview so a shared link shows that variant's headline, not the homepage's.
 */
export const cvPageMetadata = (title: string, description: string, path: string): Metadata => {
  // Stated explicitly: a page-level openGraph object replaces the inherited one, image included.
  const image = { url: "/cv/opengraph-image", ...ogImageSize, alt: title };

  return {
    // Also becomes the title of a PDF exported from the page.
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    robots: { index: false, follow: false },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title,
      description,
      url: path,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
};

export const cvMetadata = (profileId: string, mode: CvMode): Metadata => {
  const profile = getCvProfile(profileId);

  if (!profile) {
    return {};
  }

  return cvPageMetadata(
    `${siteConfig.name} — ${profile.title}`,
    `CV of ${siteConfig.name}, ${profile.title}.`,
    cvPath(profile, mode),
  );
};
