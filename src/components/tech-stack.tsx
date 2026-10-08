import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { TechCategory } from "@/types/tech-category.interface";
import React, { JSX } from "react";

interface Props {
  categories: TechCategory[];
  /** Columns for the regular (non-featured) categories on large screens. */
  columns?: 2 | 3;
}

const gridColumns = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
} as const;

/** Icons are wrapped in fragments; an empty fragment means the skill has no icon. */
const hasIcon = (icon?: JSX.Element): icon is JSX.Element => !!icon && React.Children.count(icon.props.children) > 0;

const CategoryCard: React.FC<{ category: TechCategory }> = ({ category }) => {
  const { featured = false } = category;

  return (
    <div
      className={cn(
        "rounded-xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-800",
        featured &&
          "border-blue-200 bg-gradient-to-br from-white via-white to-blue-50 lg:grid lg:grid-cols-[2fr_3fr] lg:gap-10 lg:p-8 dark:border-blue-900 dark:from-slate-800 dark:via-slate-800 dark:to-blue-950",
      )}
    >
      <div>
        <div className={cn("flex items-center gap-3", category.description ? "mb-3" : "mb-6")}>
          <div className="rounded-lg bg-blue-100 p-2 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
            {category.icon}
          </div>
          <h3 className={cn("font-semibold text-slate-900 dark:text-white", featured ? "text-2xl" : "text-xl")}>
            {category.title}
          </h3>
        </div>

        {category.description && (
          <p
            className={cn(
              "mb-6 leading-relaxed text-slate-600 dark:text-slate-300",
              featured ? "text-base lg:mb-0 lg:text-lg" : "text-sm",
            )}
          >
            {category.description}
          </p>
        )}
      </div>

      <ul className="flex flex-wrap content-start gap-2">
        {category.technologies.map((tech) => (
          <li key={tech.name}>
            <Badge
              variant="secondary"
              className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 text-slate-700 transition-colors hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
            >
              {hasIcon(tech.icon) && <span className="text-[1.25rem]">{tech.icon}</span>}
              {tech.name}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TechStack: React.FC<Props> = ({ categories, columns = 3 }) => {
  const featured = categories.filter((category) => category.featured);
  const regular = categories.filter((category) => !category.featured);

  return (
    <div className="space-y-8">
      {featured.map((category) => (
        <CategoryCard key={category.title} category={category} />
      ))}

      <div className={cn("grid grid-cols-1 gap-8", gridColumns[columns])}>
        {regular.map((category) => (
          <CategoryCard key={category.title} category={category} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
