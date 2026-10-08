import AWSIcon from "@/components/icons/aws-icon";
import DockerIcon from "@/components/icons/docker-icon";
import GithubIcon from "@/components/icons/github-icon";
import JavaScriptIcon from "@/components/icons/javascript-icon";
import MongoDBIcon from "@/components/icons/mongodb-icon";
import NodeJSIcon from "@/components/icons/nodejs-icon";
import PostgresIcon from "@/components/icons/postgres-icon";
import PulumiIcon from "@/components/icons/pulumi-icon";
import PythonIcon from "@/components/icons/python-icon";
import SQLIcon from "@/components/icons/sql-icon";
import SSTIcon from "@/components/icons/sst-icon";
import TerraformIcon from "@/components/icons/terraform-icon";
import TypeScriptIcon from "@/components/icons/typescript-icon";
import { experiences, yearsOfExperience } from "@/constants";
import { TechCategory } from "@/types/tech-category.interface";
import { Technology } from "@/types/technology.interface";
import { WorkingExperience } from "@/types/working-experience.interface";
import { Activity, Cloud, Code, Database, Gauge, Network, Workflow } from "lucide-react";
import { JSX } from "react";

/**
 * SRE / DevOps-tailored variant of the CV content.
 *
 * Everything here is a REFRAME of the same real experience captured in
 * `constants.tsx` — the emphasis is shifted toward cloud infrastructure,
 * IaC, CI/CD, reliability and observability so the profile reads for a
 * Site Reliability / Platform / DevOps role. No employer titles are
 * inflated; the reliability framing is carried by the bullets and skills.
 */

export const sreTitle = "DevOps / Platform Engineer";

export const sreTagline = "Cloud Infrastructure · IaC · CI/CD · Reliability";

export const sreSummary: string[] = [
  `DevOps / Platform Engineer with ${yearsOfExperience} years of engineering experience building, shipping and operating cloud systems on AWS and GCP. I work across the whole delivery lifecycle — infrastructure as code with Terraform and Pulumi, containerized workloads on Docker and Kubernetes, and CI/CD pipelines that make deployments fast and safe — with a focus on reliability, automation and observability.`,
  "I like owning problems end to end: standing up networking, compute and managed data services in the cloud, wiring up the pipelines that ship to them, and keeping the running system healthy and debuggable. Because I've also built the applications on top, I understand systems from the Linux host and the VPC all the way up to the API — which makes root-causing incidents and reducing operational toil come naturally.",
];

/** Small helper to keep the category definitions readable. */
const tech = (name: string, icon: JSX.Element = <></>, years = 1): Technology => ({ name, icon, years });

export const sreTechCategories: TechCategory[] = [
  {
    title: "Cloud & Infrastructure",
    icon: <Cloud className="h-6 w-6" />,
    technologies: [
      tech(
        "AWS",
        <>
          <AWSIcon />
        </>,
        3,
      ),
      tech("GCP", <></>, 2),
      tech("Azure", <></>, 2),
      tech(
        "Terraform",
        <>
          <TerraformIcon />
        </>,
        1,
      ),
      tech(
        "Pulumi",
        <>
          <PulumiIcon />
        </>,
        1,
      ),
      tech(
        "Docker",
        <>
          <DockerIcon />
        </>,
        3,
      ),
      tech("Kubernetes", <></>, 2),
      tech(
        "SST",
        <>
          <SSTIcon />
        </>,
        1,
      ),
    ],
  },
  {
    title: "CI/CD & Automation",
    icon: <Workflow className="h-6 w-6" />,
    technologies: [
      tech(
        "GitHub Actions",
        <>
          <GithubIcon />
        </>,
        3,
      ),
      tech("BitBucket Pipelines", <></>, 1),
      tech("Infrastructure as Code", <></>, 3),
      tech("Bash / Shell", <></>, 3),
      tech(
        "Python automation",
        <>
          <PythonIcon />
        </>,
        2,
      ),
      tech(
        "Docker builds",
        <>
          <DockerIcon />
        </>,
        3,
      ),
    ],
  },
  {
    title: "Observability & Reliability",
    icon: <Activity className="h-6 w-6" />,
    technologies: [
      tech("CloudWatch", <></>, 2),
      tech("Prometheus", <></>, 1),
      tech("Grafana", <></>, 1),
      tech("OpenTelemetry", <></>, 1),
      tech("Logging & Tracing", <></>, 2),
      tech("Alerting", <></>, 2),
      tech("SLIs / SLOs / Error Budgets", <></>, 1),
    ],
  },
  {
    title: "Operating Systems & Networking",
    icon: <Network className="h-6 w-6" />,
    technologies: [
      tech("Linux", <></>, 5),
      tech("Bash", <></>, 3),
      tech("Networking (TCP/IP · DNS · TLS)", <></>, 3),
      tech("VPC / Load Balancing", <></>, 3),
      tech("Nginx", <></>, 2),
    ],
  },
  {
    title: "Languages & Scripting",
    icon: <Code className="h-6 w-6" />,
    technologies: [
      tech(
        "Python",
        <>
          <PythonIcon />
        </>,
        2,
      ),
      tech("Bash", <></>, 3),
      tech(
        "TypeScript",
        <>
          <TypeScriptIcon />
        </>,
        9,
      ),
      tech(
        "JavaScript",
        <>
          <JavaScriptIcon />
        </>,
        10,
      ),
      tech(
        "Node.js",
        <>
          <NodeJSIcon />
        </>,
        8,
      ),
      tech(
        "SQL",
        <>
          <SQLIcon />
        </>,
        5,
      ),
    ],
  },
  {
    title: "Databases & Data",
    icon: <Database className="h-6 w-6" />,
    technologies: [
      tech(
        "PostgreSQL",
        <>
          <PostgresIcon />
        </>,
        1,
      ),
      tech("CloudSQL", <></>, 1),
      tech("BigQuery", <></>, 1),
      tech("Redis", <></>, 1),
      tech(
        "MongoDB",
        <>
          <MongoDBIcon />
        </>,
        2,
      ),
      tech(
        "SQL Server",
        <>
          <SQLIcon />
        </>,
        3,
      ),
    ],
  },
  {
    title: "SRE Practices",
    icon: <Gauge className="h-6 w-6" />,
    technologies: [
      tech("Incident Response & On-call", <></>),
      tech("Root Cause Analysis", <></>),
      tech("Blameless Postmortems", <></>),
      tech("Disaster Recovery", <></>),
      tech("Toil Reduction & Automation", <></>),
      tech("System Design & Architecture", <></>),
    ],
  },
];

/**
 * How each role is framed for an SRE / DevOps reader. Employers, official titles, dates and
 * locations are not repeated here: they come from the canonical history in constants.tsx.
 * A role without an entry falls back to its canonical description.
 */
const sreFraming: Record<string, Partial<WorkingExperience>> = {
  Freelance: {
    role: "Software Engineer · Cloud & Infrastructure",
    description:
      "Independent engineering work centred on cloud infrastructure and delivery. I design and provision AWS environments as infrastructure as code with Terraform, Pulumi and SST, build the CI/CD around them, and architect systems to be reliable and cost-efficient. A typical engagement means standing up networking, compute and managed data services on AWS, containerizing workloads with Docker, wiring up deployment pipelines, and then building the application layer (Next.js / Node.js / PostgreSQL) on top — so I own and understand the system end to end.",
    highlights: [
      "Designing and provisioning AWS infrastructure as code with Terraform, Pulumi and SST",
      "Architecting reliable, cost-efficient systems from networking and compute through to managed data services",
      "Building CI/CD pipelines for fast, safe, repeatable deployments",
      "Containerizing workloads with Docker and automating provisioning and configuration",
      "Applying least-privilege IAM and security best practices across environments",
      "Owning systems end to end — infrastructure, backend APIs and the application layer",
    ],
    technologies: [
      "AWS",
      "Terraform",
      "Pulumi",
      "SST",
      "Docker",
      "Linux",
      "Bash",
      "CI/CD",
      "Node.js",
      "Next.js",
      "PostgreSQL",
    ],
  },
  IKEA: {
    description:
      "I worked on ROIT (Range Offer Input Tool), a data-driven platform that helps stores optimize the range of articles they expose against key performance indicators, and I owned features end to end across infrastructure, backend and frontend. The platform ran on GCP with workloads containerized in Docker and orchestrated on Kubernetes, provisioned through Terraform, and backed by BigQuery, CloudSQL and Redis, with a Python / FastAPI service on the backend. CI/CD ran on GitHub Actions, with the automated test suite gating every pull request as a release criterion. Alongside application code I regularly worked on the infrastructure and delivery side, which gave me hands-on ownership of how the service was built, deployed and kept healthy — including rewriting a debt-laden codebase to a maintainable, reliable state.",
    highlights: [
      "Running containerized workloads on Kubernetes, provisioned as code with Terraform on GCP",
      "Maintaining GitHub Actions CI/CD pipelines with automated tests gating every release",
      "Working across managed cloud data services — BigQuery, CloudSQL and Redis",
      "Building and supporting a Python / FastAPI backend service",
      "Improving reliability and maintainability by rewriting a debt-laden codebase to best practices",
      "Owning features end to end, from infrastructure and backend through to the UI",
      "Collaborating with Product, Data and engineering to design solutions end to end",
    ],
    technologies: [
      "GCP",
      "Kubernetes",
      "Docker",
      "Terraform",
      "BigQuery",
      "CloudSQL",
      "Redis",
      "Python",
      "FastAPI",
      "Linux",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  LogicFlow: {
    description:
      "Worked on a client's banking platform, leading the migration of a large AngularJS frontend to modern Angular and building out automated test coverage to protect the migration. Delivery ran through BitBucket Pipelines, with the test suite executed on every pull request to main as an acceptance gate before code could be merged.",
    highlights: [
      "Delivering through BitBucket Pipelines CI/CD with automated test gating on every pull request",
      "Migrating a large banking frontend from AngularJS to modern Angular",
      "Writing and migrating unit and end-to-end tests to protect the migration",
      "Collaborating with the client's engineers to meet business requirements",
      "Reviewing pull requests and supporting teammates",
    ],
    technologies: ["BitBucket Pipelines", "CI/CD", "Angular", "TypeScript", "JavaScript", "Jest"],
  },
  "Taxback International": {
    description:
      "Built and extended an internal Angular application, implementing client-side response caching with IndexedDB to cut redundant network calls and improve responsiveness, and initiated a React Native port to mobile. Focused on the performance and reliability of the client experience while collaborating closely with product, UI and QA.",
    highlights: [
      "Implementing client-side response caching with IndexedDB to improve performance and resilience",
      "Extending an internal Angular application and fixing production issues",
      "Proposing and starting a React Native port to bring the tool to mobile",
      "Working with the tech lead on architectural changes and system design",
      "Working with QA to address issues and inconsistencies",
    ],
    technologies: ["Angular", "TypeScript", "React Native", "IndexedDB"],
  },
  WeTrack: {
    description:
      "Built a large part of a project and risk management platform hosted on Azure, working primarily in Angular on the frontend with .NET Core and Entity Framework on the backend and SQL Server for storage. Contributed to a backend architecture refactor and extended backend features, gaining early exposure to running an application in a managed cloud environment.",
    highlights: [
      "Extending and developing backend features with .NET Core and Entity Framework on Azure",
      "Helping to refactor the backend architecture for maintainability",
      "Developing custom frontend components from design specs using Angular",
      "Mentoring junior developers and reviewing pull requests",
    ],
    technologies: ["Azure", ".NET Core", "C#", "Entity Framework", "SQL Server", "Angular"],
  },
  Oxxy: {
    description:
      "First professional role at a website-builder platform, working mostly in vanilla JavaScript and later Angular and Vue to implement e-commerce store functionality. Where I learned to build software properly in a team and ship features to real users.",
    highlights: [
      "Implementing interactive builder features (widget rotation, proportional mobile scaling) in pure JavaScript",
      "Implementing e-commerce store creation capabilities on the frontend",
      "Collaborating with the team lead and teammates on bug fixing and codebase improvements",
    ],
    technologies: ["JavaScript", "TypeScript", "Angular", "Vue", "Webpack"],
  },
};

export const sreExperiences: WorkingExperience[] = experiences.map((experience) => ({
  ...experience,
  highlights: experience.highlights.map(({ text }) => text),
  ...sreFraming[experience.company],
}));
