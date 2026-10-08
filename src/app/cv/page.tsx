import { cvPath, cvProfiles } from "@/cv-profiles";
import { cvPageMetadata } from "@/lib/cv-route";
import { siteConfig } from "@/site-config";
import { ArrowLeft, FileText } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type React from "react";

export const metadata: Metadata = cvPageMetadata(
  `${siteConfig.name} — Curriculum Vitae`,
  `CV of ${siteConfig.name}, framed for different roles.`,
  "/cv",
);

const linkClassName =
  "inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600";

const CvIndexPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-blue-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Portfolio
        </Link>

        <h1 className="mt-6 mb-3 text-4xl font-bold text-slate-900">Curriculum Vitae</h1>
        <p className="mb-10 text-lg text-slate-600">
          One history, framed for the role. Each version comes in the designed layout and as plain, ATS-friendly text.
        </p>

        <ul className="space-y-4">
          {cvProfiles.map((profile) => (
            <li
              key={profile.id}
              className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-lg sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-slate-900">{profile.title}</h2>
                <p className="mt-1 text-sm text-slate-500">{profile.focusAreas.join(" · ")}</p>
              </div>
              <div className="flex shrink-0 gap-2">
                <Link href={cvPath(profile, "visual")} className={linkClassName}>
                  <FileText className="h-4 w-4" />
                  Visual
                </Link>
                <Link href={cvPath(profile, "ats")} className={linkClassName}>
                  <FileText className="h-4 w-4" />
                  ATS
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default CvIndexPage;
