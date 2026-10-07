import { cn } from "@/lib/utils";
import { siteConfig } from "@/site-config";
import type { CaseStudy } from "@/types/case-study.interface";
import type { Education } from "@/types/education.interface";
import type { TechCategory } from "@/types/tech-category.interface";
import type { WorkingExperience } from "@/types/working-experience.interface";
import Image from "next/image";
import type React from "react";

interface Props {
  title: string;
  focusAreas: readonly string[];
  summary: readonly string[];
  skills: TechCategory[];
  experiences: WorkingExperience[];
  caseStudies?: CaseStudy[];
  education?: Education[];
  className?: string;
}

const withoutProtocol = (url: string) => url.replace(/^https?:\/\//, "");

/**
 * Printable CV, built from the same data as the page. Everything is real text so the
 * exported PDF stays selectable and ATS-readable. It is hidden on screen; the print
 * styles in globals.css (`.cv*`) swap it in for the site, so "Download CV" and Ctrl+P
 * produce the same document.
 */
const CvDocument: React.FC<Props> = ({
  title,
  focusAreas,
  summary,
  skills,
  experiences,
  caseStudies = [],
  education = [],
  className,
}) => {
  return (
    <article className={cn("cv", className)}>
      <header className="cv-header">
        <Image src="/me.png" alt="" width={128} height={128} loading="eager" className="cv-photo" />
        <div>
          <h1 className="cv-name">{siteConfig.name}</h1>
          <p className="cv-title">{title}</p>
          <p className="cv-focus">{focusAreas.join(" · ")}</p>
          <p className="cv-contact">
            {siteConfig.location.city}, {siteConfig.location.country}
            {" · "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            {" · "}
            <a href={siteConfig.url}>{withoutProtocol(siteConfig.url)}</a>
            {" · "}
            <a href={siteConfig.profiles.github}>{withoutProtocol(siteConfig.profiles.github)}</a>
          </p>
        </div>
      </header>

      <section className="cv-section">
        <h2>Summary</h2>
        {summary.map((paragraph) => (
          <p key={paragraph} className="cv-summary">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="cv-section">
        <h2>Skills</h2>
        <dl className="cv-skills">
          {skills.map((category) => (
            // Label and values share one line of text so PDF parsers keep them together.
            <div key={category.title} className="cv-skill-row">
              <dt>{category.title}:</dt>{" "}
              <dd>{category.technologies.map((technology) => technology.name).join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="cv-section">
        <h2>Experience</h2>
        {experiences.map((experience) => (
          <div key={`${experience.company}-${experience.period}`} className="cv-entry">
            <div className="cv-entry-head">
              <h3>
                {experience.company} — <span className="cv-entry-role">{experience.role}</span>
              </h3>
              <p className="cv-entry-meta">
                {experience.period} · {experience.location}
              </p>
            </div>
            <p className="cv-entry-description">{experience.description}</p>
            <ul>
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <p className="cv-entry-tech">Technologies: {experience.technologies.join(" · ")}</p>
          </div>
        ))}
      </section>

      {caseStudies.length > 0 && (
        <section className="cv-section">
          <h2>Selected Architecture Work</h2>
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.title} className="cv-entry">
              <div className="cv-entry-head">
                <h3>{caseStudy.title}</h3>
                {caseStudy.url && (
                  <p className="cv-entry-meta">
                    <a href={caseStudy.url}>{withoutProtocol(caseStudy.url)}</a>
                  </p>
                )}
              </div>
              <p className="cv-entry-description">{caseStudy.context}</p>
              <ul>
                {caseStudy.decisions.map((decision) => (
                  <li key={decision}>{decision}</li>
                ))}
              </ul>
              <p className="cv-entry-tech">Technologies: {caseStudy.technologies.join(" · ")}</p>
            </div>
          ))}
        </section>
      )}

      {education.length > 0 && (
        <section className="cv-section">
          <h2>Education</h2>
          {education.map((item) => (
            <div key={item.institution} className="cv-entry">
              <div className="cv-entry-head">
                <h3>
                  {item.institution} — <span className="cv-entry-role">{item.program}</span>
                </h3>
                <p className="cv-entry-meta">{item.location}</p>
              </div>
              {item.note && <p className="cv-entry-description">{item.note}</p>}
            </div>
          ))}
        </section>
      )}
    </article>
  );
};

export default CvDocument;
