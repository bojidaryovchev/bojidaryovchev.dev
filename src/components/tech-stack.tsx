import AngularIcon from "@/components/icons/angular-icon";
import AngularJSIcon from "@/components/icons/angularjs-icon";
import AWSIcon from "@/components/icons/aws-icon";
import CSharpIcon from "@/components/icons/csharp-icon";
import CSSIcon from "@/components/icons/css-icon";
import DockerIcon from "@/components/icons/docker-icon";
import ExpressJSIcon from "@/components/icons/expressjs-icon";
import GraphQLIcon from "@/components/icons/graphql-icon";
import HTMLIcon from "@/components/icons/html-icon";
import JavaScriptIcon from "@/components/icons/javascript-icon";
import JestIcon from "@/components/icons/jest-icon";
import MongoDBIcon from "@/components/icons/mongodb-icon";
import MongooseIcon from "@/components/icons/mongoose-icon";
import NestJSIcon from "@/components/icons/nestjs-icon";
import NextJSIcon from "@/components/icons/nextjs-icon";
import NodeJSIcon from "@/components/icons/nodejs-icon";
import PlaywrightIcon from "@/components/icons/playwright-icon";
import PostgresIcon from "@/components/icons/postgres-icon";
import PrismaIcon from "@/components/icons/prisma-icon";
import PythonIcon from "@/components/icons/python-icon";
import ReactIcon from "@/components/icons/react-icon";
import SassIcon from "@/components/icons/sass-icon";
import SolidityIcon from "@/components/icons/solidity-icon";
import TailwindCSSIcon from "@/components/icons/tailwindcss-icon";
import TerraformIcon from "@/components/icons/terraform-icon";
import TypeScriptIcon from "@/components/icons/typescript-icon";
import VueIcon from "@/components/icons/vue-icon";
import { Badge } from "@/components/ui/badge";
import { Braces, Cloud, Code, Cpu, Database, Globe, Server, Smartphone, Terminal, TestTube, Zap } from "lucide-react";
import type React from "react";

const TechStack: React.FC = () => {
  const techCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      technologies: [
        { name: "JavaScript", icon: <JavaScriptIcon /> },
        { name: "TypeScript", icon: <TypeScriptIcon /> },
        { name: "C#", icon: <CSharpIcon /> },
        { name: "Python", icon: <PythonIcon /> },
        { name: "Solidity", icon: <SolidityIcon /> },
      ],
    },
    {
      title: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      technologies: [
        { name: "HTML5", icon: <HTMLIcon /> },
        { name: "CSS3", icon: <CSSIcon /> },
        { name: "SCSS", icon: <SassIcon /> },
        { name: "React", icon: <ReactIcon /> },
        { name: "Next.js", icon: <NextJSIcon /> },
        { name: "Angular", icon: <AngularIcon /> },
        { name: "AngularJS", icon: <AngularJSIcon /> },
        { name: "Vue", icon: <VueIcon /> },
        { name: "TailwindCSS", icon: <TailwindCSSIcon /> },
        { name: "React Native", icon: <Smartphone className="h-5 w-5" /> },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      technologies: [
        { name: "Node.js", icon: <NodeJSIcon /> },
        { name: "NestJS", icon: <NestJSIcon /> },
        { name: "ExpressJS", icon: <ExpressJSIcon /> },
        { name: "GraphQL", icon: <GraphQLIcon /> },
      ],
    },
    {
      title: "Database & ORM",
      icon: <Database className="h-6 w-6" />,
      technologies: [
        { name: "MongoDB", icon: <MongoDBIcon /> },
        { name: "Mongoose", icon: <MongooseIcon /> },
        { name: "PostgreSQL", icon: <PostgresIcon /> },
        { name: "SQL", icon: <Database className="h-5 w-5" /> },
        { name: "Prisma", icon: <PrismaIcon /> },
      ],
    },
    {
      title: "Testing",
      icon: <TestTube className="h-6 w-6" />,
      technologies: [
        { name: "Jest", icon: <JestIcon /> },
        { name: "Playwright", icon: <PlaywrightIcon /> },
        { name: "msw.js", icon: <TestTube className="h-5 w-5" /> },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      technologies: [
        { name: "AWS", icon: <AWSIcon /> },
        { name: "Docker", icon: <DockerIcon /> },
        { name: "Terraform", icon: <TerraformIcon /> },
        { name: "Pulumi", icon: <Terminal className="h-5 w-5" /> },
        { name: "SST", icon: <Zap className="h-5 w-5" /> },
      ],
    },
    {
      title: "Computer Science",
      icon: <Cpu className="h-6 w-6" />,
      technologies: [
        { name: "Design Patterns", icon: <Braces className="h-5 w-5" /> },
        { name: "Data Structures", icon: <Cpu className="h-5 w-5" /> },
        { name: "Algorithms", icon: <Cpu className="h-5 w-5" /> },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {techCategories.map((category, index) => (
        <div
          key={index}
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-800"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-blue-100 p-2 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
              {category.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{category.title}</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {category.technologies.map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="secondary"
                className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 text-slate-700 transition-colors hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
              >
                <span className="text-[1.25rem]">{tech.icon}</span>
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
