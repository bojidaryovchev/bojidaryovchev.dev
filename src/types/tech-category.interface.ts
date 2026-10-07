import { Skill } from "@/types/skill.interface";
import { JSX } from "react";

export interface TechCategory {
  title: string;
  icon: JSX.Element;
  /** Short framing shown under the title on the site (omitted from the printed CV). */
  description?: string;
  /** Featured categories render full width, above the regular grid. */
  featured?: boolean;
  technologies: Skill[];
}
