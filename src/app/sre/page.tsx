import ExperienceCard from "@/components/experience-card";
import GithubIcon from "@/components/icons/github-icon";
import SREPDFExport from "@/components/sre-pdf-export";
import TechStack from "@/components/tech-stack";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/site-config";
import { sreExperiences, sreSummary, sreTagline, sreTechCategories, sreTitle } from "@/sre-constants";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

export const metadata: Metadata = {
  title: `Bojidar Yovchev — ${sreTitle}`,
  description: `${sreTitle} with 10 years of engineering experience across AWS, GCP, Terraform, Docker, Kubernetes and CI/CD, focused on reliability, automation and observability.`,
  alternates: {
    canonical: "/sre",
  },
  // Targeted application variant — kept out of search indexes on purpose.
  robots: {
    index: false,
    follow: false,
  },
};

const SREPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-white dark:bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/me.png"
                  alt="Bojidar Yovchev, DevOps / Platform Engineer"
                  width={128}
                  height={128}
                  priority
                  className="rounded-full bg-cover"
                />
              </div>

              <h1 className="mb-4 text-5xl font-bold text-slate-900 md:text-6xl dark:text-white">Bojidar Yovchev</h1>
              <p className="mb-2 text-2xl font-semibold text-blue-600 dark:text-blue-400">{sreTitle}</p>
              <p className="mb-6 text-sm font-medium tracking-wide text-slate-500 uppercase dark:text-slate-400">
                {sreTagline}
              </p>
              <div className="mx-auto max-w-4xl space-y-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                {sreSummary.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="mb-8 flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <MapPin className="h-5 w-5" />
                <span>Plovdiv, Bulgaria</span>
              </div>
              <a
                href="tel:+359896013900"
                className="flex items-center gap-2 text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300"
              >
                <Phone className="h-5 w-5" />
                <span>+359896013900</span>
              </a>
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
              <SREPDFExport />
            </div>

            <div className="mt-6">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400"
              >
                <ArrowLeft className="h-4 w-4" />
                View full portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">Core Skills</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Cloud, infrastructure, delivery and reliability
            </p>
          </div>
          <TechStack categories={sreTechCategories} />
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">Experience</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">Cloud, platform and delivery work across teams</p>
          </div>

          <div className="space-y-8">
            {sreExperiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
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
  );
};

export default SREPage;
