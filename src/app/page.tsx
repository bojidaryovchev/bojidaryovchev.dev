import CaseStudies from "@/components/case-studies";
import CvDocument from "@/components/cv-document";
import ExperienceCard from "@/components/experience-card";
import GithubIcon from "@/components/icons/github-icon";
import PDFExport from "@/components/pdf-export";
import StructuredData from "@/components/structured-data";
import TechExperience from "@/components/tech-experience";
import TechStack from "@/components/tech-stack";
import { Button } from "@/components/ui/button";
import { technologyByType, yearsOfExperience } from "@/constants";
import { cvFileName, defaultCvProfile, resolveCv } from "@/cv-profiles";
import { locationLabel, siteConfig } from "@/site-config";
import { Briefcase, GraduationCap, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import type React from "react";

// The homepage is the default CV profile; the other profiles live under /cv.
const cv = resolveCv(defaultCvProfile);
const { caseStudies, education } = cv;

const Home: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 print:hidden">
        <StructuredData />
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b bg-white dark:bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-8">
                <div className="mb-6 flex justify-center">
                  <Image
                    src="/me.png"
                    alt={`Portrait of ${siteConfig.name}`}
                    width={128}
                    height={128}
                    preload
                    className="rounded-full bg-cover"
                  />
                </div>

                <h1 className="mb-4 text-5xl font-bold text-slate-900 md:text-6xl dark:text-white">
                  {siteConfig.name}
                </h1>
                <p className="mb-4 text-2xl font-semibold text-blue-600 dark:text-blue-400">{siteConfig.jobTitle}</p>
                {/* A 2×2 grid on narrow screens, so a wrapped line never starts with a separator */}
                <ul
                  aria-label="Focus areas"
                  className="mb-8 grid grid-cols-[auto_auto] justify-center gap-x-6 gap-y-1 text-sm font-medium tracking-wide text-slate-500 uppercase md:flex md:gap-x-3 dark:text-slate-400"
                >
                  {siteConfig.focusAreas.map((area, index) => (
                    <li key={area} className="flex items-center justify-center gap-3">
                      {index > 0 && (
                        <span aria-hidden="true" className="hidden md:inline">
                          ·
                        </span>
                      )}
                      {area}
                    </li>
                  ))}
                </ul>
                <div className="mx-auto max-w-3xl space-y-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  {cv.profile.summary.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <MapPin className="h-5 w-5" />
                  <span>{locationLabel}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <Briefcase className="h-5 w-5" />
                  <span>{siteConfig.availability.join(" · ")}</span>
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300"
                >
                  <Mail className="h-5 w-5" />
                  <span>{siteConfig.email}</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild>
                  <a href={siteConfig.profiles.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon />
                    GitHub
                  </a>
                </Button>
                <PDFExport fileName={cvFileName(defaultCvProfile)} />
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">Expertise</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                From architecture and cloud infrastructure down to the UI
              </p>
            </div>
            <TechStack categories={cv.skills} columns={2} />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-white py-20 dark:bg-slate-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">Experience</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">Roles and client work, most recent first</p>
            </div>

            <div className="space-y-8">
              {cv.experiences.map((experience) => (
                <ExperienceCard key={`${experience.company}-${experience.period}`} {...experience} />
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section — renders once entries are added to `caseStudies` */}
        {caseStudies.length > 0 && (
          <section id="case-studies" className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-16 text-center">
                <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">Architecture Case Studies</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  Systems I designed and built, and the trade-offs behind them
                </p>
              </div>
              <CaseStudies caseStudies={caseStudies} />
            </div>
          </section>
        )}

        {/* Technology Depth Section */}
        <section id="technology" className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">Technology Depth</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Approximate years of hands-on use per technology
              </p>
            </div>
            <TechExperience technologies={Object.values(technologyByType)} maxYears={yearsOfExperience} />
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="bg-white py-20 dark:bg-slate-900">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-4xl font-bold text-slate-900 dark:text-white">Education</h2>
            <div className="space-y-6">
              {education.map((item) => (
                <div
                  key={item.institution}
                  className="flex gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-800"
                >
                  <div className="h-fit rounded-lg bg-blue-100 p-2 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.institution}</h3>
                    <p className="font-medium text-blue-600 dark:text-blue-400">{item.program}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.location}</p>
                    {item.note && (
                      <p className="mt-3 leading-relaxed text-slate-700 dark:text-slate-300">{item.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 py-12 text-white">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Bojidar Yovchev. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>

      {/* Printing the homepage prints the CV instead of the site. */}
      <CvDocument cv={cv} className="hidden print:block" />
    </>
  );
};

export default Home;
