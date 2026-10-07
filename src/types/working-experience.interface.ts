export interface WorkingExperience {
  company: string;
  role: string;
  location: string;
  period: string;
  /** One or two sentences of context: the product and the scope of the role. */
  description: string;
  /** Evidence of ownership and decisions, not a list of duties. */
  highlights: string[];
  technologies: string[];
}
