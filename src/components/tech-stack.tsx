import { Badge } from "@/components/ui/badge";
import {
  Box,
  Braces,
  Cloud,
  Code,
  Cpu,
  Database,
  FileCode,
  GitBranch,
  Globe,
  Layers,
  Palette,
  Server,
  Smartphone,
  Terminal,
  TestTube,
  Zap,
} from "lucide-react";
import type React from "react";

const TechStack: React.FC = () => {
  const techCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      technologies: [
        { name: "JavaScript", icon: <FileCode className="h-5 w-5" /> },
        { name: "TypeScript", icon: <FileCode className="h-5 w-5" /> },
        { name: "C#", icon: <Code className="h-5 w-5" /> },
        { name: "Python", icon: <Code className="h-5 w-5" /> },
        { name: "Solidity", icon: <Code className="h-5 w-5" /> },
      ],
    },
    {
      title: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      technologies: [
        { name: "HTML5", icon: <Code className="h-5 w-5" /> },
        { name: "CSS3", icon: <Palette className="h-5 w-5" /> },
        { name: "SCSS", icon: <Palette className="h-5 w-5" /> },
        { name: "React", icon: <Layers className="h-5 w-5" /> },
        { name: "Next.js", icon: <Layers className="h-5 w-5" /> },
        { name: "Angular", icon: <Layers className="h-5 w-5" /> },
        { name: "AngularJS", icon: <Layers className="h-5 w-5" /> },
        { name: "Vue", icon: <Layers className="h-5 w-5" /> },
        { name: "TailwindCSS", icon: <Palette className="h-5 w-5" /> },
        { name: "React Native", icon: <Smartphone className="h-5 w-5" /> },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      technologies: [
        { name: "Node.js", icon: <Server className="h-5 w-5" /> },
        { name: "NestJS", icon: <Server className="h-5 w-5" /> },
        { name: "ExpressJS", icon: <Server className="h-5 w-5" /> },
        { name: "GraphQL", icon: <GitBranch className="h-5 w-5" /> },
      ],
    },
    {
      title: "Database & ORM",
      icon: <Database className="h-6 w-6" />,
      technologies: [
        { name: "MongoDB", icon: <Database className="h-5 w-5" /> },
        { name: "Mongoose", icon: <Database className="h-5 w-5" /> },
        { name: "PostgreSQL", icon: <Database className="h-5 w-5" /> },
        { name: "SQL", icon: <Database className="h-5 w-5" /> },
        { name: "Prisma", icon: <Database className="h-5 w-5" /> },
      ],
    },
    {
      title: "Testing",
      icon: <TestTube className="h-6 w-6" />,
      technologies: [
        { name: "Jest", icon: <TestTube className="h-5 w-5" /> },
        { name: "Playwright", icon: <TestTube className="h-5 w-5" /> },
        { name: "msw.js", icon: <TestTube className="h-5 w-5" /> },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      technologies: [
        { name: "AWS", icon: <Cloud className="h-5 w-5" /> },
        { name: "Docker", icon: <Box className="h-5 w-5" /> },
        { name: "Terraform", icon: <Terminal className="h-5 w-5" /> },
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
                {tech.icon}
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
