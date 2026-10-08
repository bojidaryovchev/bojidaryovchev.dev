import { caseStudies, education, experiences, skillCategories, yearsOfExperience } from "@/constants";
import type { CvMode, CvProfile, ResolvedCv, SkillCategoryId } from "@/types/cv-profile.interface";
import type { ExperienceHighlight, HighlightTheme } from "@/types/experience.interface";

const years = `${yearsOfExperience}+ years`;

/**
 * Role-specific framings of the one history in constants.tsx. The first profile is the
 * default: it is what the homepage shows. To target another kind of role, add a profile
 * here; it gets /cv/<id>, /cv/<id>/ats and a PDF export without touching the experience data.
 */
export const cvProfiles: CvProfile[] = [
  {
    id: "architect",
    label: "Software Architect",
    title: "Software Architect & Senior Full-Stack Engineer",
    focusAreas: ["System Design", "Cloud Infrastructure", "Backend & Data", "Frontend"],
    summary: [
      `Software architect and senior full-stack engineer with ${years} of professional experience designing and building web platforms end to end. I take product and business requirements and work out the system behind them: service boundaries, data model, APIs, cloud infrastructure and delivery. Then I build it.`,
      "I weigh scalability, reliability, maintainability and running cost against what the product actually needs, and choose technology to fit the problem, not the other way around. Frontend is where I started and is still a strength, but today it is one layer of the systems I own rather than the whole job.",
    ],
    skillOrder: ["architecture", "cloud", "backend", "frontend", "practice"],
    emphasis: [],
    fileName: "Bojidar_Yovchev_Software_Architect",
  },
  {
    id: "fullstack",
    label: "Full-Stack Engineer",
    title: "Senior / Lead Full-Stack Engineer",
    focusAreas: ["Frontend", "Backend & Data", "Cloud Infrastructure", "System Design"],
    summary: [
      `Senior full-stack engineer with ${years} of professional experience building web platforms end to end: React, Next.js, Angular and Vue on the frontend, Node.js, NestJS and Python on the backend, PostgreSQL underneath, AWS and GCP around it. I own what I ship, from data model and API to UI, tests and deployment.`,
      "On client projects I carry the whole technical side myself: I design the architecture, choose technology to fit the problem and its budget, and provision the infrastructure as code. In teams I review code, mentor other developers and have taken legacy systems through full rewrites and migrations.",
    ],
    skillOrder: ["frontend", "backend", "cloud", "architecture", "practice"],
    emphasis: [],
    fileName: "Bojidar_Yovchev_Full_Stack_Engineer",
  },
  {
    id: "frontend",
    label: "Frontend Engineer",
    title: "Senior / Lead Frontend Engineer",
    focusAreas: ["Frontend Architecture", "React, Angular & Vue", "Testing", "Backend & Cloud"],
    summary: [
      `Senior frontend engineer with ${years} of professional experience building production web applications in TypeScript with React, Next.js, Angular and Vue. Most of my frontend work is structural: component architecture, migrations and rewrites of legacy frontends, client-side caching, and tests that gate every merge.`,
      "I also work on the other side of the API. I design and build backends in Node.js and Python, model data in PostgreSQL and provision cloud infrastructure on AWS, so I can shape the API a UI needs instead of working around the one I am given.",
    ],
    skillOrder: ["frontend", "practice", "architecture", "backend", "cloud"],
    emphasis: ["frontend", "testing"],
    fileName: "Bojidar_Yovchev_Frontend_Engineer",
  },
  {
    id: "backend",
    label: "Backend Engineer",
    title: "Senior Backend / Full-Stack Engineer",
    focusAreas: ["Backend Services", "API Design", "Cloud Infrastructure", "System Design"],
    summary: [
      `Senior backend and full-stack engineer with ${years} of professional software engineering experience. I design and build backend services and APIs in Node.js (NestJS) and Python (FastAPI), model data in PostgreSQL, and deploy on AWS and GCP with infrastructure defined as code.`,
      "My career started on the frontend and moved toward the server side: backend features in .NET Core, a full FastAPI backend rewrite at IKEA, and client systems where I choose the architecture and managed services by load, operational complexity and cost. I still build frontends, which keeps my APIs practical to consume.",
    ],
    skillOrder: ["backend", "architecture", "cloud", "practice", "frontend"],
    emphasis: ["backend", "infrastructure"],
    fileName: "Bojidar_Yovchev_Backend_Engineer",
  },
];

export const defaultCvProfile = cvProfiles[0];

export const getCvProfile = (id: string): CvProfile | undefined => cvProfiles.find((profile) => profile.id === id);

const canonicalSkillOrder = Object.keys(skillCategories) as SkillCategoryId[];

/** Bullets carrying an emphasized theme rise; all others keep the order they were written in. */
const prioritize = (highlights: ExperienceHighlight[], emphasis: HighlightTheme[]): ExperienceHighlight[] => {
  const rank = ({ themes = [] }: ExperienceHighlight) => {
    const positions = themes.map((theme) => emphasis.indexOf(theme)).filter((position) => position >= 0);
    return positions.length > 0 ? Math.min(...positions) : emphasis.length;
  };

  return [...highlights].sort((a, b) => rank(a) - rank(b));
};

/** Applies a profile to the canonical record. Every skill category and every bullet is always present. */
export const resolveCv = (profile: CvProfile): ResolvedCv => {
  const skillOrder = [...new Set([...profile.skillOrder, ...canonicalSkillOrder])];

  return {
    profile,
    skills: skillOrder.map((id) => skillCategories[id]),
    experiences: experiences.map((experience) => ({
      ...experience,
      highlights: prioritize(experience.highlights, profile.emphasis).map(({ text }) => text),
    })),
    caseStudies,
    education,
  };
};

const cvModes: CvMode[] = ["visual", "ats"];

export const cvPath = (profile: CvProfile, mode: CvMode = "visual") =>
  `/cv/${profile.id}${mode === "ats" ? "/ats" : ""}`;

export const cvFileName = (profile: CvProfile, mode: CvMode = "visual") =>
  `${profile.fileName}${mode === "ats" ? "_ATS" : ""}`;

/** Every exportable CV: the index page, the manifest route and scripts/export-cv.mjs all read this. */
export const cvExports = cvProfiles.flatMap((profile) =>
  cvModes.map((mode) => ({
    profile: profile.id,
    mode,
    path: cvPath(profile, mode),
    fileName: `${cvFileName(profile, mode)}.pdf`,
  })),
);
