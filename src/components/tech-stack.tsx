import { Badge } from "@/components/ui/badge";
import { techCategories } from "@/constants";
import React from "react";

const TechStack: React.FC = () => {
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
                {React.Children.count(tech.icon.props.children) > 0 && (
                  <span className="text-[1.25rem]">{tech.icon}</span>
                )}
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
