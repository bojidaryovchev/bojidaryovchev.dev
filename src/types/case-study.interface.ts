export interface CaseStudy {
  title: string;
  /** The problem and the constraints that shaped the design. */
  context: string;
  /** Architectural decisions and the trade-offs behind them. */
  decisions: string[];
  technologies: string[];
  /** Repository, write-up or live system. */
  url?: string;
}
