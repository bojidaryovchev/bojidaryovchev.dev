"use client";

import { experiences, yearsOfExperience } from "@/constants";
import { Download } from "lucide-react";
import Image from "next/image";
import { forwardRef, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface PDFExportProps {
  className?: string;
}

const PDFContent = forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} className="print-content">
    {/* Main Section - First Page */}
    <div className="pdf-page">
      <div className="pdf-header flex h-full flex-col justify-center">
        <div className="mb-8 flex items-center justify-center">
          <Image src="/me.png" alt="Bojidar Yovchev" width={120} height={120} className="rounded-full" />
        </div>

        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">Bojidar Yovchev</h1>
          <p className="mb-6 text-xl font-semibold text-blue-600">Software Engineer</p>

          <div className="mx-auto max-w-4xl space-y-4 text-base leading-relaxed text-gray-700">
            <p>
              I am a software engineer with over {yearsOfExperience} years of professional experience. I believe in
              being self-sufficient and I always try to stay up-to-date with the technologies I use. I think that as
              software engineers, we are there to solve problems, and we should be able to quickly learn and adapt to
              whatever is required in order to complete the task.
            </p>
            <p>
              I studied software engineering at the Software University in Sofia, Bulgaria during high school (remotely)
              and landed my first job at Oxxy just 2 weeks after graduation. My main area of expertise is fullstack web
              development with Angular, React, Next.js, Vue and Node.js. I&apos;ve also used React Native and a bit of
              Ionic. Throughout the years I&apos;ve had the pleasure to work on various projects, getting exposed to a
              wide variety of technologies which I believe is really beneficial as it expands one&apos;s grasp.
            </p>
          </div>
        </div>

        <div className="contact-info">
          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Plovdiv, Bulgaria</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>+359896013900</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <span>bojidaryovchev1@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔗</span>
              <span>github.com/bojidaryovchev</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Experience Pages */}
    {experiences.map((experience, index) => (
      <div key={index} className="pdf-page">
        <div className="experience-page flex h-full flex-col justify-center">
          <div className="mx-auto w-full max-w-4xl border-l-4 border-l-blue-500 pl-6">
            <div className="mb-6">
              <h2 className="mb-2 text-3xl font-bold text-gray-900">{experience.company}</h2>
              <p className="mb-4 text-xl font-medium text-blue-600">{experience.role}</p>

              <div className="mb-6 flex flex-col gap-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <span>📅</span>
                  <span className="font-medium">{experience.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <p className="mb-6 leading-relaxed text-gray-700">{experience.description}</p>

              <h3 className="mb-3 font-bold text-gray-900">Key responsibilities:</h3>
              <ul className="mb-6 list-disc space-y-2 pl-6">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="text-gray-700">
                    {responsibility}
                  </li>
                ))}
              </ul>

              <h3 className="mb-3 font-bold text-gray-900">Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="border-blue-200 bg-blue-50 text-blue-700 print:border-gray-400 print:bg-gray-100 print:text-gray-800"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
));

PDFContent.displayName = "PDFContent";

export const PDFExport: React.FC<PDFExportProps> = ({ className }) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Bojidar_Yovchev_CV",
    pageStyle: `
      @page {
        size: A4;
        margin: 20mm;
      }
      
      .pdf-page {
        page-break-after: always;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0;
      }
      
      .pdf-page:last-child {
        page-break-after: avoid;
      }
      
      .pdf-header {
        text-align: center;
      }
      
      .experience-page {
        height: 100%;
      }
      
      .contact-info {
        margin-top: auto;
        padding-top: 2rem;
      }
      
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
        
        .print-content {
          font-family: 'Arial', sans-serif;
        }
      }
    `,
  });

  return (
    <>
      <Button variant="outline" onClick={handlePrint} className={className}>
        <Download className="mr-2 h-4 w-4" />
        Export to PDF
      </Button>

      {/* Hidden content for PDF generation */}
      <div style={{ display: "none" }}>
        <PDFContent ref={componentRef} />
      </div>
    </>
  );
};

export default PDFExport;
