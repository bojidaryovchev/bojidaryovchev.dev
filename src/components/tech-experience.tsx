"use client";

import type { Technology } from "@/types/technology.interface";
import { motion } from "motion/react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

interface Props {
  technologies: Technology[];
  maxYears: number;
}

const TechExperience: React.FC<Props> = ({ technologies, maxYears }) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Optional: Stop observing after the first intersection
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before the component is fully visible
      },
    );

    const elementRef = componentRef.current;

    if (elementRef) {
      observer.observe(elementRef);
    }

    return () => {
      if (elementRef) {
        observer.unobserve(elementRef);
      }
    };
  }, []);

  const getExperienceText = (years: number) => {
    if (years < 1) return "Less than a year";
    if (years === 1) return "1 year";
    return `${years} years`;
  };

  const getProgressValue = (years: number) => {
    return Math.min((years / maxYears) * 100, 100);
  };

  const getProgressColor = (years: number) => {
    if (years < 1) return "bg-gray-500";
    if (years < 2) return "bg-blue-500";
    if (years < 4) return "bg-green-500";
    return "bg-purple-500";
  };

  const sortedByExperience = technologies.slice().sort((a, b) => b.years - a.years);

  return (
    <div
      ref={componentRef}
      className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-800"
    >
      <div className="space-y-6">
        {sortedByExperience.map((tech, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">{tech.icon}</div>
                <span className="font-medium text-gray-900 dark:text-gray-100">{tech.name}</span>
              </div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {getExperienceText(tech.years)}
              </div>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
              <motion.div
                className={`h-full ${getProgressColor(tech.years)} rounded-full`}
                initial={{ width: 0 }}
                animate={isVisible ? { width: `${getProgressValue(tech.years)}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechExperience;
