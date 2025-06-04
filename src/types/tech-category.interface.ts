import { Technology } from "@/types/technology.interface";
import { JSX } from "react";

export interface TechCategory {
  title: string;
  icon: JSX.Element;
  technologies: Technology[];
}
