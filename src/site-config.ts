import { yearsOfExperience } from "@/constants";

/**
 * Centralized site metadata. Used by the App Router metadata, sitemap, robots,
 * manifest, OpenGraph image and JSON-LD structured data so everything stays in sync.
 */
export const siteConfig = {
  name: "Bojidar Yovchev",
  jobTitle: "Software Engineer",
  title: "Bojidar Yovchev — Software Engineer Portfolio",
  /** Used as the OpenGraph/social tagline and meta description. */
  description: `Software Engineer with over ${yearsOfExperience} years of professional experience specializing in fullstack web development with AWS, Pulumi, React, Next.js, Node.js and PostgreSQL.`,
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
  keywords: [
    "Bojidar Yovchev",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Angular",
    "AngularJS",
    "Vue",
    "Node.js",
    "Express.js",
    "Nest.js",
    "TypeScript",
    "JavaScript",
    "Python",
    "C#",
    "Solidity",
    ".NET Core",
    "SQL",
    "PostgreSQL",
    "MongoDB Atlas",
  ],
} as const;

export const sameAs: string[] = Object.values(siteConfig.profiles);
