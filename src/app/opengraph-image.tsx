import { renderOgImage } from "@/lib/og-image";
import { ogImageSize, siteConfig } from "@/site-config";

export const alt = siteConfig.title;
export const size = ogImageSize;
export const contentType = "image/png";

const OpengraphImage = () => renderOgImage(siteConfig.jobTitle, siteConfig.focusAreas.join(" · "));

export default OpengraphImage;
