import type { WorkingExperience } from "@/types/working-experience.interface";

/** What a bullet is evidence of. CV profiles use these to decide which bullets lead a role. */
export type HighlightTheme = "frontend" | "backend" | "infrastructure" | "testing";

export interface ExperienceHighlight {
  text: string;
  themes?: HighlightTheme[];
}

/**
 * A role as recorded once, for every CV profile. Profiles may reorder its highlights
 * but never change them; rendering code receives the resolved WorkingExperience.
 */
export interface Experience extends Omit<WorkingExperience, "highlights"> {
  highlights: ExperienceHighlight[];
}
