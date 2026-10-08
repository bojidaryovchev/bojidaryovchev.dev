import { renderOgImage } from "@/lib/og-image";
import { locationLabel, ogImageSize, siteConfig } from "@/site-config";

export const alt = `${siteConfig.name} — Curriculum Vitae`;
export const size = ogImageSize;
export const contentType = "image/png";

/**
 * One card for every CV page. It names no role on purpose: the profile's own headline is
 * in the page title, so a shared link to any variant never shows another variant's title.
 */
const CvOpengraphImage = () =>
  renderOgImage("Curriculum Vitae", [locationLabel, ...siteConfig.availability].join(" · "));

export default CvOpengraphImage;
