import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import type React from "react";

interface ExperienceCardProps {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  location,
  period,
  description,
  technologies,
  responsibilities,
}) => {
  return (
    <Card className="border-l-4 border-l-blue-500 transition-shadow duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">{company}</CardTitle>
            <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">{role}</CardDescription>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <Calendar className="h-4 w-4" />
              <span className="font-medium">{period}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">{description}</p>

        <strong>Key responsibilities:</strong>

        <ul className="mt-2 mb-8 list-disc space-y-2 pl-8 leading-relaxed text-slate-700 dark:text-slate-300">
          {responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
