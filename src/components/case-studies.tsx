import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { CaseStudy } from "@/types/case-study.interface";
import { ExternalLink } from "lucide-react";
import type React from "react";

interface Props {
  caseStudies: CaseStudy[];
}

const CaseStudies: React.FC<Props> = ({ caseStudies }) => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {caseStudies.map((caseStudy) => (
        <Card key={caseStudy.title} className="border-t-4 border-t-purple-500">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
              <h3>{caseStudy.title}</h3>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-1 flex-col">
            <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">{caseStudy.context}</p>

            <ul className="mb-6 list-disc space-y-2 pl-6 leading-relaxed text-slate-700 dark:text-slate-300">
              {caseStudy.decisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {caseStudy.url && (
              <a
                href={caseStudy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                View project
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CaseStudies;
