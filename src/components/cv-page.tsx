import CvDocument from "@/components/cv-document";
import PDFExport from "@/components/pdf-export";
import { cvFileName, cvPath, resolveCv } from "@/cv-profiles";
import { cn } from "@/lib/utils";
import type { CvMode, CvProfile } from "@/types/cv-profile.interface";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type React from "react";

interface Props {
  profile: CvProfile;
  mode: CvMode;
}

const modes: { mode: CvMode; label: string }[] = [
  { mode: "visual", label: "Visual" },
  { mode: "ats", label: "ATS" },
];

/**
 * A CV on screen: a toolbar and a paper-sized preview. Printing drops the toolbar and the
 * sheet styling, leaving exactly the document. The sheet's padding matches the print
 * margins, so lines wrap on screen where they will on paper.
 */
const CvPage: React.FC<Props> = ({ profile, mode }) => {
  return (
    <div className="min-h-screen bg-slate-100 print:min-h-0 print:bg-white">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur print:hidden">
        <div className="mx-auto flex max-w-[210mm] flex-wrap items-center justify-between gap-3 px-4 py-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-slate-600 transition-colors hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Portfolio
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <nav aria-label="CV format" className="inline-flex rounded-md border border-slate-200 bg-slate-50 p-0.5">
              {modes.map((item) => (
                <Link
                  key={item.mode}
                  href={cvPath(profile, item.mode)}
                  aria-current={item.mode === mode ? "page" : undefined}
                  className={cn(
                    "rounded px-3 py-1 text-sm transition-colors",
                    item.mode === mode
                      ? "bg-white font-medium text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <PDFExport fileName={cvFileName(profile, mode)} label="Download PDF" />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[210mm] bg-white px-5 py-6 shadow-lg sm:my-8 sm:px-[15mm] sm:py-[13mm] print:m-0 print:max-w-none print:p-0 print:shadow-none">
        <CvDocument cv={resolveCv(profile)} mode={mode} />
      </main>
    </div>
  );
};

export default CvPage;
