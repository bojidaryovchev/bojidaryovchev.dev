import type { CaseStudy } from "@/types/case-study.interface";
import type { Education } from "@/types/education.interface";
import type { HighlightTheme } from "@/types/experience.interface";
import type { TechCategory } from "@/types/tech-category.interface";
import type { WorkingExperience } from "@/types/working-experience.interface";

export type SkillCategoryId = "architecture" | "cloud" | "backend" | "frontend" | "practice";

/** Visual: the designed two-page CV. ATS: plain single-column text for applicant tracking systems. */
export type CvMode = "visual" | "ats";

/**
 * A role-specific framing of the one canonical history. A profile chooses the headline,
 * the summary and what leads; it cannot add, remove or reword any fact.
 */
export interface CvProfile {
  /** URL segment: /cv/<id>. */
  id: string;
  /** Short name used in the CV index. */
  label: string;
  /** Headline under the name. */
  title: string;
  focusAreas: string[];
  summary: string[];
  /** Skill categories this profile leads with; the remaining ones follow in canonical order. */
  skillOrder: SkillCategoryId[];
  /** Bullet themes surfaced first within each role. Empty keeps the canonical order. */
  emphasis: HighlightTheme[];
  /** PDF file name, without extension. */
  fileName: string;
}

/** A profile applied to the canonical data: everything a CV renderer needs. */
export interface ResolvedCv {
  profile: CvProfile;
  skills: TechCategory[];
  experiences: WorkingExperience[];
  caseStudies: CaseStudy[];
  education: Education[];
}
