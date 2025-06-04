import AlgoliaIcon from "@/components/icons/algolia-icon";
import AngularIcon from "@/components/icons/angular-icon";
import AngularJSIcon from "@/components/icons/angularjs-icon";
import AWSIcon from "@/components/icons/aws-icon";
import CSharpIcon from "@/components/icons/csharp-icon";
import CSSIcon from "@/components/icons/css-icon";
import CypressIcon from "@/components/icons/cypress-icon";
import DockerIcon from "@/components/icons/docker-icon";
import DotnetIcon from "@/components/icons/dotnet-icon";
import DotNetCoreIcon from "@/components/icons/dotnetcore-icon";
import ElasticSearchIcon from "@/components/icons/elasticsearch-icon";
import ExpressJSIcon from "@/components/icons/expressjs-icon";
import FastAPIIcon from "@/components/icons/fastapi-icon";
import FigmaIcon from "@/components/icons/figma-icon";
import GraphQLIcon from "@/components/icons/graphql-icon";
import HTMLIcon from "@/components/icons/html-icon";
import JasmineIcon from "@/components/icons/jasmine-icon";
import JavaScriptIcon from "@/components/icons/javascript-icon";
import JestIcon from "@/components/icons/jest-icon";
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
import SassIcon from "@/components/icons/sass-icon";
import SolidityIcon from "@/components/icons/solidity-icon";
import SQLIcon from "@/components/icons/sql-icon";
import SSTIcon from "@/components/icons/sst-icon";
import TailwindCSSIcon from "@/components/icons/tailwindcss-icon";
import TerraformIcon from "@/components/icons/terraform-icon";
import TypeScriptIcon from "@/components/icons/typescript-icon";
import VueIcon from "@/components/icons/vue-icon";
import { TechCategory } from "@/types/tech-category.interface";
import { TechnologyType } from "@/types/technology-type.enum";
import { Technology } from "@/types/technology.interface";
import { WorkingExperience } from "@/types/working-experience.interface";
import { Cloud, Code, Cpu, Database, Globe, Server, TestTube } from "lucide-react";

export const technologyByType: Record<TechnologyType, Technology> = {
  [TechnologyType.JAVASCRIPT]: { name: "JavaScript", icon: <JavaScriptIcon />, years: 8 },
  [TechnologyType.TYPESCRIPT]: { name: "TypeScript", icon: <TypeScriptIcon />, years: 7 },
  [TechnologyType.CSHARP]: { name: "C#", icon: <CSharpIcon />, years: 3 },
  [TechnologyType.PYTHON]: { name: "Python", icon: <PythonIcon />, years: 2 },
  [TechnologyType.SOLIDITY]: { name: "Solidity", icon: <SolidityIcon />, years: 1 },
  [TechnologyType.HTML]: { name: "HTML5", icon: <HTMLIcon />, years: 8 },
  [TechnologyType.CSS]: { name: "CSS3", icon: <CSSIcon />, years: 8 },
  [TechnologyType.SCSS]: { name: "SCSS", icon: <SassIcon />, years: 7 },
  [TechnologyType.REACT]: { name: "React", icon: <ReactIcon />, years: 5 },
  [TechnologyType.NEXTJS]: { name: "Next.js", icon: <NextJSIcon />, years: 4 },
  [TechnologyType.ANGULAR]: { name: "Angular", icon: <AngularIcon />, years: 7 },
  [TechnologyType.ANGULARJS]: { name: "AngularJS", icon: <AngularJSIcon />, years: 2 },
  [TechnologyType.VUE]: { name: "Vue", icon: <VueIcon />, years: 2 },
  [TechnologyType.TAILWINDCSS]: { name: "TailwindCSS", icon: <TailwindCSSIcon />, years: 3 },
  [TechnologyType.REACT_NATIVE]: { name: "React Native", icon: <ReactIcon />, years: 1 },
  [TechnologyType.FIGMA]: { name: "Figma", icon: <FigmaIcon />, years: 3 },
  [TechnologyType.NODEJS]: { name: "Node.js", icon: <NodeJSIcon />, years: 6 },
  [TechnologyType.NESTJS]: { name: "NestJS", icon: <NestJSIcon />, years: 4 },
  [TechnologyType.EXPRESSJS]: { name: "ExpressJS", icon: <ExpressJSIcon />, years: 5 },
  [TechnologyType.GRAPHQL]: { name: "GraphQL", icon: <GraphQLIcon />, years: 2 },
  [TechnologyType.DOTNET]: { name: ".NET", icon: <DotnetIcon />, years: 2 },
  [TechnologyType.DOTNET_CORE]: { name: ".NET Core", icon: <DotNetCoreIcon />, years: 2 },
  [TechnologyType.FASTAPI]: { name: "FastAPI", icon: <FastAPIIcon />, years: 2 },
  [TechnologyType.ELASTICSEARCH]: { name: "ElasticSearch", icon: <ElasticSearchIcon />, years: 0.5 },
  [TechnologyType.ALGOLIA]: { name: "Algolia", icon: <AlgoliaIcon />, years: 0.5 },
  [TechnologyType.MONGODB]: { name: "MongoDB", icon: <MongoDBIcon />, years: 1.5 },
  [TechnologyType.MONGOOSE]: { name: "Mongoose", icon: <MongooseIcon />, years: 0.5 },
  [TechnologyType.POSTGRESQL]: { name: "PostgreSQL", icon: <PostgresIcon />, years: 0.5 },
  [TechnologyType.SQL]: { name: "SQL", icon: <SQLIcon />, years: 3 },
  [TechnologyType.PRISMA]: { name: "Prisma", icon: <PrismaIcon />, years: 1 },
  [TechnologyType.JEST]: { name: "Jest", icon: <JestIcon />, years: 3 },
  [TechnologyType.PLAYWRIGHT]: { name: "Playwright", icon: <PlaywrightIcon />, years: 2 },
  [TechnologyType.CYPRESS]: { name: "Cypress", icon: <CypressIcon />, years: 1 },
  [TechnologyType.MOCHA]: { name: "Mocha", icon: <MochaIcon />, years: 0.5 },
  [TechnologyType.JASMINE]: { name: "Jasmine", icon: <JasmineIcon />, years: 0.5 },
  [TechnologyType.PROTRACTOR]: { name: "Protractor", icon: <ProtractorIcon />, years: 0.5 },
  [TechnologyType.MSWJS]: { name: "msw.js", icon: <MSWJSIcon />, years: 1 },
  [TechnologyType.AWS]: { name: "AWS", icon: <AWSIcon />, years: 3 },
  [TechnologyType.DOCKER]: { name: "Docker", icon: <DockerIcon />, years: 3 },
  [TechnologyType.TERRAFORM]: { name: "Terraform", icon: <TerraformIcon />, years: 1 },
  [TechnologyType.PULUMI]: { name: "Pulumi", icon: <PulumiIcon />, years: 1 },
  [TechnologyType.SST]: { name: "SST", icon: <SSTIcon />, years: 1 },
};

export const techCategories: TechCategory[] = [
  {
    title: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    technologies: [
      technologyByType[TechnologyType.JAVASCRIPT],
      technologyByType[TechnologyType.TYPESCRIPT],
      technologyByType[TechnologyType.CSHARP],
      technologyByType[TechnologyType.PYTHON],
      technologyByType[TechnologyType.SOLIDITY],
    ],
  },
  {
    title: "Frontend",
    icon: <Globe className="h-6 w-6" />,
    technologies: [
      technologyByType[TechnologyType.HTML],
      technologyByType[TechnologyType.CSS],
      technologyByType[TechnologyType.SCSS],
      technologyByType[TechnologyType.REACT],
      technologyByType[TechnologyType.NEXTJS],
      technologyByType[TechnologyType.ANGULAR],
      technologyByType[TechnologyType.ANGULARJS],
      technologyByType[TechnologyType.VUE],
      technologyByType[TechnologyType.TAILWINDCSS],
      technologyByType[TechnologyType.REACT_NATIVE],
      technologyByType[TechnologyType.FIGMA],
    ],
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6" />,
    technologies: [
      technologyByType[TechnologyType.NODEJS],
      technologyByType[TechnologyType.NESTJS],
      technologyByType[TechnologyType.EXPRESSJS],
      technologyByType[TechnologyType.GRAPHQL],
      technologyByType[TechnologyType.DOTNET],
      technologyByType[TechnologyType.DOTNET_CORE],
      technologyByType[TechnologyType.FASTAPI],
      technologyByType[TechnologyType.ELASTICSEARCH],
      technologyByType[TechnologyType.ALGOLIA],
    ],
  },
  {
    title: "Database & ORM",
    icon: <Database className="h-6 w-6" />,
    technologies: [
      technologyByType[TechnologyType.MONGODB],
      technologyByType[TechnologyType.MONGOOSE],
      technologyByType[TechnologyType.POSTGRESQL],
      technologyByType[TechnologyType.SQL],
      technologyByType[TechnologyType.PRISMA],
    ],
  },
  {
    title: "Testing",
    icon: <TestTube className="h-6 w-6" />,
    technologies: [
      technologyByType[TechnologyType.JEST],
      technologyByType[TechnologyType.PLAYWRIGHT],
      technologyByType[TechnologyType.CYPRESS],
      technologyByType[TechnologyType.MOCHA],
      technologyByType[TechnologyType.JASMINE],
      technologyByType[TechnologyType.PROTRACTOR],
      technologyByType[TechnologyType.MSWJS],
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    technologies: [
      technologyByType[TechnologyType.AWS],
      technologyByType[TechnologyType.DOCKER],
      technologyByType[TechnologyType.TERRAFORM],
      technologyByType[TechnologyType.PULUMI],
      technologyByType[TechnologyType.SST],
    ],
  },
  {
    title: "Computer Science",
    icon: <Cpu className="h-6 w-6" />,
    technologies: [
      { name: "Design Patterns", icon: <></>, years: Number.POSITIVE_INFINITY },
      { name: "Data Structures", icon: <></>, years: Number.POSITIVE_INFINITY },
      { name: "Algorithms", icon: <></>, years: Number.POSITIVE_INFINITY },
    ],
  },
];

export const experiences: WorkingExperience[] = [
  {
    company: "IKEA",
    role: "Software Engineer",
    location: "Remote",
    period: "May, 2023 - December, 2024",
    description:
      "The project I worked on while at IKEA was the so-called ROIT - Range Offer Input Tool - which was a tool to allow users to optimize their range of articles exposed in physical stores based on key performance indicators (KPIs). When I joined the project, I discovered that their codebase did not follow most best practices and they had a lot of technical debt. Since the project itself was not that big, I decided to push myself and rewrite their entire frontend and backend in order to become easier to modify and extend. Before I left the project, everything was written to the best of my ability. Our tech stack involved GCP for cloud services, Docker, Kubernetes and Terraform for IaC, BigQuery, CloudSQL and Redis for database storage, a uvicorn Python server with FastAPI on the backend, Vue on the frontend, Jest for unit tests and Cypress with msw.js for end-to-end tests. We were using Github with Github Actions as our CI/CD pipelines so the tests were being run upon a pull request as a sort of an acceptance criterion. I was initially hired as a frontend developer, however I ended up doing fullstack development, so I had complete ownership of the features I delivered.",
    technologies: [
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "BigQuery",
      "CloudSQL",
      "SQL",
      "uvicorn",
      "Python",
      "FastAPI",
      "Vue",
      "Jest",
      "Cypress",
      "msw.js",
    ],
  },
  {
    company: "LogicFlow",
    role: "Software Engineer",
    location: "Remote",
    period: "February, 2022 - April, 2023",
    description:
      "While at LogicFlow, I did not actually work on their core product. Instead, I was onboarded on a project of a client of theirs which was basically a banking software written in AngularJS on the frontend and Java on the backend. My role there involved migrating the AngularJS part to Angular v12+ as well as writing unit tests to cover the functionality. We were using BitBucket pipelines for CI/CD so the tests were being executed upon a pull request towards the main branch.",
    technologies: ["Angular", "AngularJS", "JavaScript", "TypeScript", "Mocha", "Protractor", "Jest"],
  },
  {
    company: "Taxback International",
    role: "Software Engineer",
    location: "Remote",
    period: "February, 2021 - January, 2022",
    description:
      "Taxback Group is a family of companies providing tools for tax and VAT management. While there, I worked on an in-house project with Angular where I had to implement response caching on the client side using IndexedDB as well as extend their existing UI and work on bug fixing. Later on we began building a React Native application to basically port that project to mobile (I was the one who suggested React Native and my tech lead liked the idea so we went for it). I am not entirely sure about their overall tech stack as I did not get entirely involved in it.",
    technologies: ["Angular", "JavaScript", "TypeScript", "React Native"],
  },
  {
    company: "Freelance",
    role: "Software Engineer",
    location: "Remote",
    period: "December, 2020 - Present",
    description:
      "I have been working as a freelancer on the side whenever I have enough capacity. My favorite stack is React with Next.js, MongoDB Atlas, SST and Pulumi for IaC and AWS for cloud service, I've also been using Angular, Vue, Node.js and NestJS, depending on the project requirements.",
    technologies: ["React", "Next.js", "MongoDB Atlas", "SST", "Pulumi", "AWS", "Angular", "Vue", "Node.js", "NestJS"],
  },
  {
    company: "WeTrack",
    role: "FullStack Developer",
    location: "Remote",
    period: "July, 2017 - December, 2020",
    description:
      "WeTrack is a platform that provides project and risk management solutions. I implemented a substantial part of their user interface using Angular v2+. We had designs for everything which were provided to us in Zeplin, and this meant creating a whole bunch of custom components to properly adhere to said designs, which gave me the opportunity to get my hands really dirty building all of them thus gaining quite some expertise in building components from scratch. Even though I was more involved on the frontend, I also did some backend work for certain features (one of which involved a filtered Gantt chart view) and I also help for the backend refactoring when we decided to do that. Our tech stack consisted of Azure for cloud services, .NET Core with Entity Framework on the backend, SQL Server for our database and Angular v2+ on the frontend, and later on we started using Ionic in order to implement PWA capabilities with proper gestures on mobile.",
    technologies: ["Angular", "JavaScript", "TypeScript", "SCSS", "C#", ".NET Core", "Entity Framework", "Azure"],
  },
  {
    company: "Oxxy",
    role: "JavaScript Developer",
    location: "On-site - Sofia, Bulgaria",
    period: "June, 2016 - April, 2017",
    description:
      "Oxxy is a site builder like Wix. We wrote mostly vanilla JavaScript and later on we started using Angular and Vue to implement e-commerce store functionality. On the backend they were using PHP with Laravel, however I never worked on it as I was just starting off and did not have any experience to be able to tackle those.",
    technologies: ["JavaScript", "TypeScript", "Angular", "Vue", "Webpack"],
  },
];
