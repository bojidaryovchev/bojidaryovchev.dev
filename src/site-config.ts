import { yearsOfExperience } from "@/constants";

/** Subject areas, fed into the meta keywords and Person.knowsAbout. */
const topics = [
  "Software Architecture",
  "System Design",
  "Distributed Systems",
  "Cloud Infrastructure",
  "AWS",
  "GCP",
  "Terraform",
  "Kubernetes",
  "Node.js",
  "NestJS",
  "Python",
  "PostgreSQL",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
];

/**
 * Centralized site metadata. Used by the App Router metadata, sitemap, robots,
 * manifest, OpenGraph image, JSON-LD structured data and the printed CV so everything stays in sync.
 */
export const siteConfig = {
  name: "Bojidar Yovchev",
  jobTitle: "Software Architect & Senior Full-Stack Engineer",
  title: "Bojidar Yovchev — Software Architect & Senior Full-Stack Engineer",
  /** Shown under the job title; mirrors the order of the skill hierarchy. */
  focusAreas: ["System Design", "Cloud Infrastructure", "Backend & Data", "Frontend"],
  /** Used as the OpenGraph/social tagline and meta description. */
  description: `Hands-on software architect and senior full-stack engineer with ${yearsOfExperience}+ years designing and building web platforms, from system design and cloud to the UI.`,
  /** Production origin. No trailing slash. */
  url: "https://bojidaryovchev.dev",
  locale: "en_US",
  location: {
    city: "Plovdiv",
    country: "Bulgaria",
  },
  email: "bojidaryovchev1@gmail.com",
  /** Profiles fed into Person.sameAs for structured data and social discovery. */
  profiles: {
    github: "https://github.com/bojidaryovchev",
  },
  topics,
  keywords: ["Bojidar Yovchev", "Software Architect", "Senior Full-Stack Engineer", ...topics],
} as const;

export const sameAs: string[] = Object.values(siteConfig.profiles);
