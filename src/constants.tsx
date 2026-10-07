import AlgoliaIcon from "@/components/icons/algolia-icon";
import AngularIcon from "@/components/icons/angular-icon";
import AngularJSIcon from "@/components/icons/angularjs-icon";
import AWSIcon from "@/components/icons/aws-icon";
import BigQueryIcon from "@/components/icons/bigquery-icon";
import CSharpIcon from "@/components/icons/csharp-icon";
import CSSIcon from "@/components/icons/css-icon";
import CypressIcon from "@/components/icons/cypress-icon";
import DockerIcon from "@/components/icons/docker-icon";
import DotnetIcon from "@/components/icons/dotnet-icon";
import DotNetCoreIcon from "@/components/icons/dotnetcore-icon";
import DrizzleIcon from "@/components/icons/drizzle-icon";
import ElasticSearchIcon from "@/components/icons/elasticsearch-icon";
import ExpressJSIcon from "@/components/icons/expressjs-icon";
import FastAPIIcon from "@/components/icons/fastapi-icon";
import FigmaIcon from "@/components/icons/figma-icon";
import GitHubActionsIcon from "@/components/icons/githubactions-icon";
import GoogleCloudIcon from "@/components/icons/googlecloud-icon";
import GraphQLIcon from "@/components/icons/graphql-icon";
import HTMLIcon from "@/components/icons/html-icon";
import JasmineIcon from "@/components/icons/jasmine-icon";
import JavaScriptIcon from "@/components/icons/javascript-icon";
import JestIcon from "@/components/icons/jest-icon";
import KubernetesIcon from "@/components/icons/kubernetes-icon";
import MochaIcon from "@/components/icons/mocha-icon";
import MongoDBIcon from "@/components/icons/mongodb-icon";
import MongooseIcon from "@/components/icons/mongoose-icon";
import MSWJSIcon from "@/components/icons/mswjs-icon";
import NestJSIcon from "@/components/icons/nestjs-icon";
import NextJSIcon from "@/components/icons/nextjs-icon";
import NodeJSIcon from "@/components/icons/nodejs-icon";
import PlaywrightIcon from "@/components/icons/playwright-icon";
import PostgresIcon from "@/components/icons/postgres-icon";
import PrismaIcon from "@/components/icons/prisma-icon";
import ProtractorIcon from "@/components/icons/protractor-icon";
import PulumiIcon from "@/components/icons/pulumi-icon";
import PythonIcon from "@/components/icons/python-icon";
import ReactIcon from "@/components/icons/react-icon";
import RedisIcon from "@/components/icons/redis-icon";
import SassIcon from "@/components/icons/sass-icon";
import SolidityIcon from "@/components/icons/solidity-icon";
import SQLIcon from "@/components/icons/sql-icon";
import SSTIcon from "@/components/icons/sst-icon";
import TailwindCSSIcon from "@/components/icons/tailwindcss-icon";
import TerraformIcon from "@/components/icons/terraform-icon";
import TypeScriptIcon from "@/components/icons/typescript-icon";
import VueIcon from "@/components/icons/vue-icon";
import { CaseStudy } from "@/types/case-study.interface";
import { Education } from "@/types/education.interface";
import { Skill } from "@/types/skill.interface";
import { TechCategory } from "@/types/tech-category.interface";
import { TechnologyType } from "@/types/technology-type.enum";
import { Technology } from "@/types/technology.interface";
import { WorkingExperience } from "@/types/working-experience.interface";
import { Cloud, GitPullRequest, Globe, Network, Server } from "lucide-react";

export const yearsOfExperience = 10;

/** Opening profile: rendered in the hero and as the Summary of the printed CV. */
export const profileSummary: string[] = [
  `Software architect and senior full-stack engineer with ${yearsOfExperience}+ years of professional experience designing and building web platforms end to end. I take product and business requirements and work out the system behind them: service boundaries, data model, APIs, cloud infrastructure and delivery. Then I build it.`,
  "I weigh scalability, reliability, maintainability and running cost against what the product actually needs, and choose technology to fit the problem, not the other way around. Frontend is where I started and is still a strength, but today it is one layer of the systems I own rather than the whole job.",
];

export const technologyByType: Record<TechnologyType, Technology> = {
  [TechnologyType.JAVASCRIPT]: {
    name: "JavaScript",
    icon: (
      <>
        <JavaScriptIcon />
      </>
    ),
    years: 10,
  },
  [TechnologyType.TYPESCRIPT]: {
    name: "TypeScript",
    icon: (
      <>
        <TypeScriptIcon />
      </>
    ),
    years: 9,
  },
  [TechnologyType.CSHARP]: {
    name: "C#",
    icon: (
      <>
        <CSharpIcon />
      </>
    ),
    years: 3,
  },
  [TechnologyType.PYTHON]: {
    name: "Python",
    icon: (
      <>
        <PythonIcon />
      </>
    ),
    years: 2,
  },
  [TechnologyType.SOLIDITY]: {
    name: "Solidity",
    icon: (
      <>
        <SolidityIcon />
      </>
    ),
    years: 1,
  },
  [TechnologyType.HTML]: {
    name: "HTML5",
    icon: (
      <>
        <HTMLIcon />
      </>
    ),
    years: 10,
  },
  [TechnologyType.CSS]: {
    name: "CSS3",
    icon: (
      <>
        <CSSIcon />
      </>
    ),
    years: 10,
  },
  [TechnologyType.SCSS]: {
    name: "SCSS",
    icon: (
      <>
        <SassIcon />
      </>
    ),
    years: 7,
  },
  [TechnologyType.REACT]: {
    name: "React",
    icon: (
      <>
        <ReactIcon />
      </>
    ),
    years: 7,
  },
  [TechnologyType.NEXTJS]: {
    name: "Next.js",
    icon: (
      <>
        <NextJSIcon />
      </>
    ),
    years: 6,
  },
  [TechnologyType.ANGULAR]: {
    name: "Angular",
    icon: (
      <>
        <AngularIcon />
      </>
    ),
    years: 7,
  },
  [TechnologyType.ANGULARJS]: {
    name: "AngularJS",
    icon: (
      <>
        <AngularJSIcon />
      </>
    ),
    years: 2,
  },
  [TechnologyType.VUE]: {
    name: "Vue",
    icon: (
      <>
        <VueIcon />
      </>
    ),
    years: 2,
  },
  [TechnologyType.TAILWINDCSS]: {
    name: "Tailwind CSS",
    icon: (
      <>
        <TailwindCSSIcon />
      </>
    ),
    years: 5,
  },
  [TechnologyType.REACT_NATIVE]: {
    name: "React Native",
    icon: (
      <>
        <ReactIcon />
      </>
    ),
    years: 1,
  },
  [TechnologyType.FIGMA]: {
    name: "Figma",
    icon: (
      <>
        <FigmaIcon />
      </>
    ),
    years: 5,
  },
  [TechnologyType.NODEJS]: {
    name: "Node.js",
    icon: (
      <>
        <NodeJSIcon />
      </>
    ),
    years: 8,
  },
  [TechnologyType.NESTJS]: {
    name: "NestJS",
    icon: (
      <>
        <NestJSIcon />
      </>
    ),
    years: 4,
  },
  [TechnologyType.EXPRESSJS]: {
    name: "Express.js",
    icon: (
      <>
        <ExpressJSIcon />
      </>
    ),
    years: 5,
  },
  [TechnologyType.GRAPHQL]: {
    name: "GraphQL",
    icon: (
      <>
        <GraphQLIcon />
      </>
    ),
    years: 2,
  },
  [TechnologyType.DOTNET]: {
    name: ".NET",
    icon: (
      <>
        <DotnetIcon />
      </>
    ),
    years: 2,
  },
  [TechnologyType.DOTNET_CORE]: {
    name: ".NET Core",
    icon: (
      <>
        <DotNetCoreIcon />
      </>
    ),
    years: 2,
  },
  [TechnologyType.FASTAPI]: {
    name: "FastAPI",
    icon: (
      <>
        <FastAPIIcon />
      </>
    ),
    years: 2,
  },
  [TechnologyType.ELASTICSEARCH]: {
    name: "Elasticsearch",
    icon: (
      <>
        <ElasticSearchIcon />
      </>
    ),
    years: 0.5,
  },
  [TechnologyType.ALGOLIA]: {
    name: "Algolia",
    icon: (
      <>
        <AlgoliaIcon />
      </>
    ),
    years: 1,
  },
  [TechnologyType.MONGODB]: {
    name: "MongoDB",
    icon: (
      <>
        <MongoDBIcon />
      </>
    ),
    years: 2,
  },
  [TechnologyType.MONGOOSE]: {
    name: "Mongoose",
    icon: (
      <>
        <MongooseIcon />
      </>
    ),
    years: 0.5,
  },
  [TechnologyType.POSTGRESQL]: {
    name: "PostgreSQL",
    icon: (
      <>
        <PostgresIcon />
      </>
    ),
    years: 1,
  },
  [TechnologyType.SQL]: {
    name: "SQL",
    icon: (
      <>
        <SQLIcon />
      </>
    ),
    years: 5,
  },
  [TechnologyType.PRISMA]: {
    name: "Prisma",
    icon: (
      <>
        <PrismaIcon />
      </>
    ),
    years: 1,
  },
  [TechnologyType.JEST]: {
    name: "Jest",
    icon: (
      <>
        <JestIcon />
      </>
    ),
    years: 3,
  },
  [TechnologyType.PLAYWRIGHT]: {
    name: "Playwright",
    icon: (
      <>
        <PlaywrightIcon />
      </>
    ),
    years: 2,
  },
  [TechnologyType.CYPRESS]: {
    name: "Cypress",
    icon: (
      <>
        <CypressIcon />
      </>
    ),
    years: 1,
  },
  [TechnologyType.MOCHA]: {
    name: "Mocha",
    icon: (
      <>
        <MochaIcon />
      </>
    ),
    years: 0.5,
  },
  [TechnologyType.JASMINE]: {
    name: "Jasmine",
    icon: (
      <>
        <JasmineIcon />
      </>
    ),
    years: 0.5,
  },
  [TechnologyType.PROTRACTOR]: {
    name: "Protractor",
    icon: (
      <>
        <ProtractorIcon />
      </>
    ),
    years: 0.5,
  },
  [TechnologyType.MSWJS]: {
    name: "msw.js",
    icon: (
      <>
        <MSWJSIcon />
      </>
    ),
    years: 1,
  },
  [TechnologyType.AWS]: {
    name: "AWS",
    icon: (
      <>
        <AWSIcon />
      </>
    ),
    years: 3,
  },
  [TechnologyType.GCP]: {
    name: "GCP",
    icon: (
      <>
        <GoogleCloudIcon />
      </>
    ),
    years: 2,
  },
  [TechnologyType.AZURE]: {
    name: "Azure",
    // Microsoft does not license its logo for this use; a neutral cloud in Azure blue stands in.
    icon: (
      <>
        <Cloud size="1em" color="#0078D4" aria-hidden="true" />
      </>
    ),
    years: 2,
  },
  [TechnologyType.GITHUB_ACTIONS]: {
    name: "GitHub Actions",
    icon: (
      <>
        <GitHubActionsIcon />
      </>
    ),
    years: 3,
  },
  [TechnologyType.REDIS]: {
    name: "Redis",
    icon: (
      <>
        <RedisIcon />
      </>
    ),
    years: 1,
  },
  [TechnologyType.BIGQUERY]: {
    name: "BigQuery",
    icon: (
      <>
        <BigQueryIcon />
      </>
    ),
    years: 1,
  },
  [TechnologyType.DOCKER]: {
    name: "Docker",
    icon: (
      <>
        <DockerIcon />
      </>
    ),
    years: 3,
  },
  [TechnologyType.TERRAFORM]: {
    name: "Terraform",
    icon: (
      <>
        <TerraformIcon />
      </>
    ),
    years: 1,
  },
  [TechnologyType.PULUMI]: {
    name: "Pulumi",
    icon: (
      <>
        <PulumiIcon />
      </>
    ),
    years: 1,
  },
  [TechnologyType.SST]: {
    name: "SST",
    icon: (
      <>
        <SSTIcon />
      </>
    ),
    years: 1,
  },
  [TechnologyType.DRIZZLE]: {
    name: "Drizzle",
    icon: (
      <>
        <DrizzleIcon />
      </>
    ),
    years: 1,
  },
  [TechnologyType.KUBERNETES]: {
    name: "Kubernetes",
    icon: (
      <>
        <KubernetesIcon />
      </>
    ),
    years: 2,
  },
};

/** A competency or practice rather than a product, so it carries no icon or year count. */
const concept = (name: string): Skill => ({ name });

/**
 * Skills, ordered as a hierarchy: architecture first, then the layers it is built on.
 * Rendered as the Expertise section on the site and the Skills section of the printed CV.
 */
export const techCategories: TechCategory[] = [
  {
    title: "Architecture & System Design",
    icon: <Network className="h-6 w-6" />,
    featured: true,
    description:
      "Working from requirements to a design: where the service boundaries go, how data is modeled and moved, what runs synchronously and what goes through a queue, how the system fails and recovers, and what it costs to run.",
    technologies: [
      concept("Distributed Systems"),
      concept("Modular Monoliths & Microservices"),
      concept("Event-Driven Architecture"),
      concept("Queues & Pub/Sub"),
      concept("API Design (REST, GraphQL)"),
      concept("Realtime & WebSockets"),
      concept("Data Modeling"),
      concept("Caching"),
      concept("Authentication & Authorization"),
      concept("Scalability & Performance"),
      concept("Reliability & Failure Handling"),
      concept("Cost Optimization"),
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: <Cloud className="h-6 w-6" />,
    description:
      "Infrastructure defined as code and shipped through CI/CD. Serverless or containers depending on the workload, and managed services where they remove operational work.",
    technologies: [
      technologyByType[TechnologyType.AWS],
      technologyByType[TechnologyType.GCP],
      technologyByType[TechnologyType.AZURE],
      technologyByType[TechnologyType.TERRAFORM],
      technologyByType[TechnologyType.PULUMI],
      technologyByType[TechnologyType.SST],
      technologyByType[TechnologyType.DOCKER],
      technologyByType[TechnologyType.KUBERNETES],
      concept("Serverless"),
      concept("Infrastructure as Code"),
      concept("CI/CD"),
      technologyByType[TechnologyType.GITHUB_ACTIONS],
    ],
  },
  {
    title: "Backend & Data",
    icon: <Server className="h-6 w-6" />,
    description:
      "APIs and services in Node.js, Python and .NET. Relational modeling in PostgreSQL by default, adding caching, search or document storage where access patterns call for it.",
    technologies: [
      technologyByType[TechnologyType.NODEJS],
      technologyByType[TechnologyType.NESTJS],
      technologyByType[TechnologyType.EXPRESSJS],
      technologyByType[TechnologyType.PYTHON],
      technologyByType[TechnologyType.FASTAPI],
      technologyByType[TechnologyType.CSHARP],
      technologyByType[TechnologyType.DOTNET],
      technologyByType[TechnologyType.GRAPHQL],
      technologyByType[TechnologyType.POSTGRESQL],
      technologyByType[TechnologyType.SQL],
      technologyByType[TechnologyType.MONGODB],
      technologyByType[TechnologyType.REDIS],
      technologyByType[TechnologyType.BIGQUERY],
      technologyByType[TechnologyType.PRISMA],
      technologyByType[TechnologyType.DRIZZLE],
      technologyByType[TechnologyType.ELASTICSEARCH],
      technologyByType[TechnologyType.ALGOLIA],
    ],
  },
  {
    title: "Frontend",
    icon: <Globe className="h-6 w-6" />,
    description:
      "A decade of production frontend work across React, Angular and Vue, from component architecture to framework migrations.",
    technologies: [
      technologyByType[TechnologyType.TYPESCRIPT],
      technologyByType[TechnologyType.JAVASCRIPT],
      technologyByType[TechnologyType.REACT],
      technologyByType[TechnologyType.NEXTJS],
      technologyByType[TechnologyType.ANGULAR],
      technologyByType[TechnologyType.VUE],
      technologyByType[TechnologyType.REACT_NATIVE],
      technologyByType[TechnologyType.TAILWINDCSS],
      technologyByType[TechnologyType.SCSS],
    ],
  },
  {
    title: "Engineering Practice",
    icon: <GitPullRequest className="h-6 w-6" />,
    description: "Automated tests as a merge gate, code review, modernization of legacy codebases, and mentoring.",
    technologies: [
      concept("Unit & E2E Testing"),
      technologyByType[TechnologyType.JEST],
      technologyByType[TechnologyType.PLAYWRIGHT],
      technologyByType[TechnologyType.CYPRESS],
      technologyByType[TechnologyType.MSWJS],
      concept("Code Review"),
      concept("Mentoring"),
      concept("Design Patterns"),
      concept("Data Structures & Algorithms"),
    ],
  },
];

export const experiences: WorkingExperience[] = [
  {
    company: "Freelance",
    role: "Software Architect & Full-Stack Engineer",
    location: "Remote",
    period: "December 2020 – Present",
    description:
      "Client projects where I own the technical side end to end: requirements, architecture, infrastructure, implementation and delivery. My default stack is React/Next.js and PostgreSQL on AWS, provisioned with SST and Pulumi, but the requirements decide.",
    highlights: [
      "Run discovery sessions with clients and turn business requirements into a technical design: system boundaries, data model, APIs and infrastructure.",
      "Choose the architecture and managed services by weighing expected load, operational complexity and running cost, keeping each system as simple as its requirements allow.",
      "Provision cloud infrastructure as code with SST, Pulumi and Terraform, so environments are reproducible and changes are reviewable.",
      "Build the whole system myself: backend APIs and services, relational and document data models, and frontends in Next.js/React, Angular or Vue as the project calls for.",
      "Own deployment and delivery, with unit and end-to-end tests and consistent engineering standards across the codebase.",
    ],
    technologies: [
      "AWS",
      "SST",
      "Pulumi",
      "Terraform",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "MongoDB Atlas",
      "Next.js",
      "React",
      "Angular",
      "Vue",
    ],
  },
  {
    company: "IKEA",
    role: "Software Engineer",
    location: "Remote",
    period: "May 2023 – December 2024",
    description:
      "ROIT (Range Offer Input Tool), an internal application for optimizing the range of articles exposed in physical stores against key performance indicators.",
    highlights: [
      "Assessed the inherited codebase, identified the structural problems and technical debt that made it hard to change, and rewrote both the Vue frontend and the Python/FastAPI backend into a maintainable, extensible design. The rewrite was complete by the time I left.",
      "Joined on the frontend and ended up owning the features I delivered end to end: the UI, the FastAPI service and the data layer (CloudSQL, BigQuery, Redis).",
      "Worked in a containerized GCP environment (Docker, Kubernetes, infrastructure in Terraform) and contributed on the infrastructure side when needed.",
      "Wrote unit (Jest) and end-to-end (Cypress with msw.js) tests that ran as a required check on every pull request in GitHub Actions.",
      "Shaped solutions with the Product Owner, UI, Data and engineering; reviewed pull requests and supported teammates.",
    ],
    technologies: [
      "GCP",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Python",
      "FastAPI",
      "CloudSQL",
      "BigQuery",
      "Redis",
      "SQL",
      "Vue",
      "Jest",
      "Cypress",
      "msw.js",
      "GitHub Actions",
    ],
  },
  {
    company: "LogicFlow",
    role: "Software Engineer",
    location: "Remote",
    period: "February 2022 – April 2023",
    description: "Client engagement on banking software: migrating its AngularJS frontend to Angular v12+.",
    highlights: [
      "Moved application code from AngularJS to Angular v12+, porting the existing unit and end-to-end tests and writing new ones to protect behavior through the migration.",
      "Worked directly with the client's developers to keep migrated functionality aligned with business requirements.",
      "Delivered through Bitbucket Pipelines, with the test suite gating pull requests to main; reviewed pull requests and supported teammates.",
    ],
    technologies: [
      "Angular",
      "AngularJS",
      "TypeScript",
      "JavaScript",
      "Jest",
      "Mocha",
      "Protractor",
      "Bitbucket Pipelines",
    ],
  },
  {
    company: "Taxback International",
    role: "Software Engineer",
    location: "Remote",
    period: "February 2021 – January 2022",
    description:
      "In-house Angular application at Taxback Group, a family of companies providing tax and VAT management tools.",
    highlights: [
      "Implemented client-side response caching on IndexedDB to avoid redundant network requests, alongside UI extensions and bug fixes.",
      "Proposed React Native for bringing the application to mobile; the team lead agreed and we started building the port.",
      "Worked with the tech lead on architectural changes and system design; mentored teammates and reviewed pull requests.",
    ],
    technologies: ["Angular", "TypeScript", "JavaScript", "React Native", "IndexedDB"],
  },
  {
    company: "WeTrack",
    role: "Full-Stack Developer",
    location: "Remote",
    period: "July 2017 – December 2020",
    description:
      "Project and risk management platform on Azure, built with Angular, .NET Core, Entity Framework and SQL Server, later adding Ionic for PWA support and touch gestures on mobile.",
    highlights: [
      "Built a substantial part of the Angular frontend, including a large set of custom components implemented from Zeplin designs.",
      "Delivered backend features in .NET Core and Entity Framework, such as a filtered Gantt chart view, and contributed to refactoring the backend architecture.",
      "Worked directly with the CTO, who also acted as product owner and designer, to turn business requirements into technical solutions.",
      "Mentored junior developers and reviewed pull requests.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "SCSS",
      "Ionic",
      "C#",
      ".NET Core",
      "Entity Framework",
      "SQL Server",
      "Azure",
    ],
  },
  {
    company: "Oxxy",
    role: "JavaScript Developer",
    location: "Sofia, Bulgaria (on-site)",
    period: "June 2016 – April 2017",
    description: "First professional role, at a website builder platform similar to Wix.",
    highlights: [
      "Built editor features in vanilla JavaScript, such as widget rotation and proportional scaling for mobile layouts.",
      "Implemented e-commerce store creation on the frontend with Angular and Vue.",
    ],
    technologies: ["JavaScript", "TypeScript", "Angular", "Vue", "Webpack"],
  },
];

export const education: Education[] = [
  {
    institution: "Software University (SoftUni)",
    program: "Software Engineering",
    location: "Sofia, Bulgaria (remote)",
    note: "Studied remotely while in high school; started my first developer role two weeks after graduating.",
  },
];

/**
 * Architecture case studies. Empty for now: add entries here and an "Architecture Case Studies"
 * section appears on the site and a "Selected Architecture Work" section in the printed CV.
 */
export const caseStudies: CaseStudy[] = [];
