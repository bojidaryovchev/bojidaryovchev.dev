import { cvExports } from "@/cv-profiles";

// Read by scripts/export-cv.mjs, so the list of CVs and file names lives in one place.
export const dynamic = "force-static";

export const GET = () => Response.json(cvExports);
