import { cn } from "@/lib/utils";
import { locationLabel, siteConfig } from "@/site-config";
import type { CvMode, ResolvedCv } from "@/types/cv-profile.interface";
import Image from "next/image";
import React from "react";

interface Props {
  cv: ResolvedCv;
  mode?: CvMode;
  className?: string;
}

/**
 * A4 with the margins the CV is laid out for. It is rendered with the document rather than
 * kept in globals.css so that it applies only on pages that contain a CV, in every browser.
 */
const pageStyle = "@media print { @page { size: A4; margin: 13mm 15mm; } }";

const withoutProtocol = (url: string) => url.replace(/^https?:\/\//, "");

interface InlineListProps {
  items: React.ReactNode[];
  /** Follows every item but the last, e.g. " ·" or ",". */
  separator: string;
}

/**
 * A run of items on one or more lines. Each item is kept whole together with its
 * separator, so a line can only break between items: never inside "Infrastructure as Code"
 * and never with a separator at the start of a line.
 */
const InlineList: React.FC<InlineListProps> = ({ items, separator }) => {
  return (
    <>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className="cv-item">
            {item}
            {index < items.length - 1 && separator}
          </span>{" "}
        </React.Fragment>
      ))}
    </>
  );
};

interface EntryHeadProps {
  mode: CvMode;
  organization: string;
  role: string;
  meta: string[];
}

/** Visual: "Company — Role" with the dates set to the right. ATS: role, then company and dates on a plain line. */
const EntryHead: React.FC<EntryHeadProps> = ({ mode, organization, role, meta }) => {
  if (mode === "ats") {
    return (
      <div className="cv-entry-head">
        <h3>{role}</h3>
        <p className="cv-entry-meta">
          <InlineList items={[organization, ...meta]} separator=" |" />
        </p>
      </div>
    );
  }

  return (
    <div className="cv-entry-head">
      <h3>
        {organization} — <span className="cv-entry-role">{role}</span>
      </h3>
      <p className="cv-entry-meta">
        <InlineList items={meta} separator=" ·" />
      </p>
    </div>
  );
};

/**
 * The CV, built from a profile applied to the canonical data. Everything is real text, so
 * the exported PDF stays selectable and machine-readable in both modes:
 *
 * - visual: the designed two-page CV (photo, colour, dates set to the right);
 * - ats: the same content as plain single-column text for applicant tracking systems
 *   (no photo, conventional headings, explicit URLs, comma-separated lists).
 *
 * Print styles live in globals.css (`.cv*`). Roles are never split across pages.
 */
const CvDocument: React.FC<Props> = ({ cv, mode = "visual", className }) => {
  const { profile, skills, experiences, caseStudies, education } = cv;
  const isAts = mode === "ats";
  const listSeparator = isAts ? "," : " ·";
  const lineSeparator = isAts ? " |" : " ·";
  // Parsers read a plain hyphen in date ranges more reliably than an en dash.
  const period = (value: string) => (isAts ? value.replace("–", "-") : value);

  const links = [
    { label: "Email", href: `mailto:${siteConfig.email}`, text: siteConfig.email },
    { label: "Website", href: siteConfig.url, text: isAts ? siteConfig.url : withoutProtocol(siteConfig.url) },
    {
      label: "GitHub",
      href: siteConfig.profiles.github,
      text: isAts ? siteConfig.profiles.github : withoutProtocol(siteConfig.profiles.github),
    },
  ];

  const technologies = (items: string[]) => (
    <p className="cv-entry-tech">
      {isAts && "Technologies: "}
      <InlineList items={items} separator={listSeparator} />
    </p>
  );

  return (
    <article className={cn("cv", isAts && "cv-ats", className)}>
      <style>{pageStyle}</style>

      <header className="cv-header">
        {!isAts && <Image src="/me.png" alt="" width={128} height={128} loading="eager" className="cv-photo" />}
        <div>
          <h1 className="cv-name">{siteConfig.name}</h1>
          <p className="cv-title">{profile.title}</p>
          <p className="cv-focus">
            <InlineList items={profile.focusAreas} separator={listSeparator} />
          </p>
          <p className="cv-contact">
            <InlineList items={[locationLabel, ...siteConfig.availability]} separator={lineSeparator} />
          </p>
          <p className="cv-contact">
            <InlineList
              items={links.map(({ label, href, text }) => (
                <>
                  {isAts && `${label}: `}
                  <a href={href}>{text}</a>
                </>
              ))}
              separator={lineSeparator}
            />
          </p>
        </div>
      </header>

      <section className="cv-section">
        <h2>Summary</h2>
        {profile.summary.map((paragraph) => (
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
              <dd>
                <InlineList items={category.technologies.map(({ name }) => name)} separator={listSeparator} />
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="cv-section">
        <h2>Experience</h2>
        {experiences.map((experience) => (
          <div key={`${experience.company}-${experience.period}`} className="cv-entry">
            <EntryHead
              mode={mode}
              organization={experience.company}
              role={experience.role}
              meta={[period(experience.period), experience.location]}
            />
            <p className="cv-entry-description">{experience.description}</p>
            <ul>
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            {technologies(experience.technologies)}
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
                    <a href={caseStudy.url}>{isAts ? caseStudy.url : withoutProtocol(caseStudy.url)}</a>
                  </p>
                )}
              </div>
              <p className="cv-entry-description">{caseStudy.context}</p>
              <ul>
                {caseStudy.decisions.map((decision) => (
                  <li key={decision}>{decision}</li>
                ))}
              </ul>
              {technologies(caseStudy.technologies)}
            </div>
          ))}
        </section>
      )}

      {education.length > 0 && (
        <section className="cv-section">
          <h2>Education</h2>
          {education.map((item) => (
            <div key={item.institution} className="cv-entry">
              <EntryHead mode={mode} organization={item.institution} role={item.program} meta={[item.location]} />
              {item.note && <p className="cv-entry-description">{item.note}</p>}
            </div>
          ))}
        </section>
      )}
    </article>
  );
};

export default CvDocument;
