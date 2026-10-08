import { yearsOfExperience } from "@/constants";
import { defaultCvProfile } from "@/cv-profiles";

const name = "Bojidar Yovchev";

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
 * manifest, OpenGraph image, JSON-LD structured data and every CV so everything stays in sync.
 * The public positioning (job title, focus areas) is that of the default CV profile.
 */
export const siteConfig = {
  name,
  jobTitle: defaultCvProfile.title,
  title: `${name} — ${defaultCvProfile.title}`,
  /** Shown under the job title; mirrors the order of the skill hierarchy. */
  focusAreas: defaultCvProfile.focusAreas,
  /** Used as the OpenGraph/social tagline and meta description. */
  description: `Hands-on software architect and senior full-stack engineer with ${yearsOfExperience}+ years designing and building web platforms end to end. EU-based, remote, B2B/contract.`,
  /** Production origin. No trailing slash. */
  url: "https://bojidaryovchev.dev",
  locale: "en_US",
  location: {
    city: "Plovdiv",
    country: "Bulgaria",
    region: "EU",
  },
  /** Working arrangement, shown next to the location. Keep to what is actually on offer. */
  availability: ["Remote", "B2B / Contract"],
  email: "bojidaryovchev1@gmail.com",
  /** Profiles fed into Person.sameAs for structured data and social discovery. */
  profiles: {
    github: "https://github.com/bojidaryovchev",
  },
  topics,
  keywords: [name, "Software Architect", "Senior Full-Stack Engineer", ...topics],
} as const;

export const sameAs: string[] = Object.values(siteConfig.profiles);

/** Size of every generated OpenGraph image. */
export const ogImageSize = { width: 1200, height: 630 };

/** "Plovdiv, Bulgaria (EU)" */
export const locationLabel = `${siteConfig.location.city}, ${siteConfig.location.country} (${siteConfig.location.region})`;
