"use client";

import { siteConfig } from "@/site-config";
import { sreExperiences, sreSummary, sreTagline, sreTechCategories, sreTitle } from "@/sre-constants";
import { Download } from "lucide-react";
import Image from "next/image";
import { forwardRef, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "./ui/button";

interface SREPDFExportProps {
  className?: string;
}

const SREPDFContent = forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} className="sre-pdf">
    {/* Header */}
    <div className="sre-pdf-header">
      <Image src="/me.png" alt="Bojidar Yovchev" width={92} height={92} className="rounded-full" />
      <div className="sre-pdf-headline">
        <h1>Bojidar Yovchev</h1>
        <p className="sre-pdf-role">{sreTitle}</p>
        <p className="sre-pdf-tagline">{sreTagline}</p>
        <p className="sre-pdf-contact">
          {siteConfig.location.city}, {siteConfig.location.country} · {siteConfig.email} ·{" "}
          {siteConfig.profiles.github.replace("https://", "")}
        </p>
      </div>
    </div>

    {/* Summary */}
    <section className="sre-pdf-section">
      <h2>Summary</h2>
      {sreSummary.map((paragraph, index) => (
        <p key={index} className="sre-pdf-summary">
          {paragraph}
        </p>
      ))}
    </section>

    {/* Core Skills */}
    <section className="sre-pdf-section">
      <h2>Core Skills</h2>
      <div className="sre-pdf-skills">
        {sreTechCategories.map((category, index) => (
          <div key={index} className="sre-pdf-skill-row">
            <span className="sre-pdf-skill-label">{category.title}</span>
            <span className="sre-pdf-skill-values">
              {category.technologies.map((technology) => technology.name).join(" · ")}
            </span>
          </div>
        ))}
      </div>
    </section>

    {/* Experience */}
    <section className="sre-pdf-section">
      <h2>Experience</h2>
      {sreExperiences.map((experience, index) => (
        <div key={index} className="sre-pdf-experience">
          <div className="sre-pdf-experience-head">
            <span className="sre-pdf-company">
              {experience.company} — <span className="sre-pdf-position">{experience.role}</span>
            </span>
            <span className="sre-pdf-period">
              {experience.period} · {experience.location}
            </span>
          </div>
          <ul className="sre-pdf-bullets">
            {experience.highlights.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
          <p className="sre-pdf-tech">{experience.technologies.join(" · ")}</p>
        </div>
      ))}
    </section>
  </div>
));

SREPDFContent.displayName = "SREPDFContent";

export const SREPDFExport: React.FC<SREPDFExportProps> = ({ className }) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Bojidar_Yovchev_DevOps_SRE_CV",
    pageStyle: `
      @page {
        size: A4;
        margin: 14mm 16mm;
      }

      .sre-pdf {
        font-family: 'Arial', 'Helvetica', sans-serif;
        color: #1a1a1a;
        font-size: 10.5px;
        line-height: 1.45;
      }

      .sre-pdf-header {
        display: flex;
        align-items: center;
        gap: 16px;
        border-bottom: 2px solid #1a73e8;
        padding-bottom: 12px;
        margin-bottom: 14px;
      }

      .sre-pdf-header img {
        border-radius: 9999px;
      }

      .sre-pdf-headline h1 {
        font-size: 22px;
        font-weight: 700;
        margin: 0;
        color: #111;
      }

      .sre-pdf-role {
        font-size: 13px;
        font-weight: 600;
        color: #1a73e8;
        margin: 2px 0 0;
      }

      .sre-pdf-tagline {
        font-size: 10px;
        color: #555;
        margin: 1px 0 0;
        letter-spacing: 0.02em;
      }

      .sre-pdf-contact {
        font-size: 9.5px;
        color: #444;
        margin: 6px 0 0;
      }

      .sre-pdf-section {
        margin-bottom: 13px;
        break-inside: avoid;
      }

      .sre-pdf-section h2 {
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: #1a73e8;
        border-bottom: 1px solid #d8d8d8;
        padding-bottom: 3px;
        margin: 0 0 7px;
      }

      .sre-pdf-summary {
        margin: 0 0 5px;
        text-align: justify;
      }

      .sre-pdf-skills {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }

      .sre-pdf-skill-row {
        display: flex;
        gap: 8px;
      }

      .sre-pdf-skill-label {
        flex: 0 0 165px;
        font-weight: 700;
        color: #222;
      }

      .sre-pdf-skill-values {
        flex: 1;
        color: #333;
      }

      .sre-pdf-experience {
        margin-bottom: 10px;
        break-inside: avoid;
      }

      .sre-pdf-experience-head {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 12px;
      }

      .sre-pdf-company {
        font-weight: 700;
        font-size: 11.5px;
        color: #111;
      }

      .sre-pdf-position {
        font-weight: 600;
        color: #1a73e8;
      }

      .sre-pdf-period {
        font-size: 9.5px;
        color: #666;
        white-space: nowrap;
      }

      .sre-pdf-bullets {
        margin: 4px 0 4px;
        padding-left: 16px;
        list-style: disc;
      }

      .sre-pdf-bullets li {
        margin-bottom: 1.5px;
      }

      .sre-pdf-tech {
        font-size: 9px;
        color: #666;
        margin: 2px 0 0;
        font-style: italic;
      }

      @media print {
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
      }
    `,
  });

  return (
    <>
      <Button variant="outline" onClick={handlePrint} className={className}>
        <Download className="mr-2 h-4 w-4" />
        Download CV (PDF)
      </Button>

      {/* Hidden content for PDF generation */}
      <div style={{ display: "none" }}>
        <SREPDFContent ref={componentRef} />
      </div>
    </>
  );
};

export default SREPDFExport;
