import { JSX } from "react";

/** Anything listed as a skill: a concrete technology or an architectural competency. */
export interface Skill {
  name: string;
  icon?: JSX.Element;
}
