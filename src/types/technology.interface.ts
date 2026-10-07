import { Skill } from "@/types/skill.interface";
import { JSX } from "react";

export interface Technology extends Skill {
  icon: JSX.Element;
  years: number;
}
