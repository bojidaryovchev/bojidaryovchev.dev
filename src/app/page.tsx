import ExperienceCard from "@/components/experience-card";
import TechStack from "@/components/tech-stack";
import { Button } from "@/components/ui/button";
import { Github, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import type React from "react";

const Home: React.FC = () => {
  const experiences = [
    {
      company: "IKEA",
      role: "Software Engineer",
      location: "Remote",
      period: "2023 - 2024",
      description:
        "Built a tool to allow users to optimize their range of articles exposed in physical stores based on key performance indicators (KPIs). Used BigQuery, Python and Vue. Did mostly fullstack development with Python and Vue and had the majority of the code ownership.",
      technologies: ["Python", "Vue", "BigQuery"],
    },
    {
      company: "LogicFlow",
      role: "Software Engineer",
      location: "Remote",
      period: "2022 - 2023",
      description:
        "LogicFlow is an AI-assisted low-code testing platform, allowing users to easily create tests without having development knowledge. My role involved migrating AngularJS to Angular and implementing new features.",
      technologies: ["Angular", "AngularJS", "TypeScript"],
    },
    {
      company: "Taxback International",
      role: "Software Engineer",
      location: "Remote",
      period: "2021 - 2022",
      description:
        "Taxback Group is a family of companies providing tools for tax and VAT management. Worked on various in-house solutions using Angular and React Native.",
      technologies: ["Angular", "React Native", "TypeScript"],
    },
    {
      company: "Freelance",
      role: "Software Engineer",
      location: "Remote",
      period: "2020 - Present",
      description:
        "Working as a freelancer on the side whenever I have enough capacity. Mainly using React, Next.js, Angular, Vue, Node.js and NestJS.",
      technologies: ["React", "Next.js", "Angular", "Vue", "Node.js", "NestJS"],
    },
    {
      company: "WeTrack",
      role: "FrontEnd Developer",
      location: "Remote",
      period: "2017 - 2020",
      description:
        "WeTrack is a platform that provides project and risk management solutions. Implemented a substantial part of their UI using Angular. Most of the UI was provided by a designer in Zeplin.",
      technologies: ["Angular", "JavaScript", "CSS"],
    },
    {
      company: "Oxxy",
      role: "JavaScript Developer",
      location: "On-site - Sofia, Bulgaria",
      period: "2016 - 2017",
      description:
        "Oxxy is a site builder like Wix. Wrote mostly vanilla JavaScript and later started using Angular and Vue to implement e-commerce store functionality.",
      technologies: ["JavaScript", "Angular", "Vue"],
    },
  ];

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
                  alt="A picture of me"
                  width={128}
                  height={128}
                  priority
                  className="rounded-full bg-cover"
                />
              </div>

              <h1 className="mb-4 text-5xl font-bold text-slate-900 md:text-6xl dark:text-white">Bojidar Yovchev</h1>
              <p className="mb-6 text-2xl font-semibold text-blue-600 dark:text-blue-400">Software Engineer</p>
              <div className="mx-auto max-w-4xl space-y-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                <p>
                  I am a software engineer with 8 years of professional experience. I believe in being self-sufficient
                  and I always try to stay up-to-date with the technologies I use. I think that as software engineers,
                  we are there to solve problems, and we should be able to quickly learn and adapt to whatever is
                  required in order to complete the task.
                </p>
                <p>
                  I studied software engineering at the Software University in Sofia, Bulgaria during high school
                  (remotely) and landed my first job at Oxxy just 2 weeks after graduation. My main area of expertise is
                  fullstack web development with Angular, React, Next.js, Vue and Node.js. I&apos;ve also used React
                  Native and a bit of Ionic. Throughout the years I&apos;ve had the pleasure to work on various
                  projects, getting exposed to a wide variety of technologies which I believe is really beneficial as it
                  expands one&apos;s grasp.
                </p>
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
                href="mailto:bojidaryovchev1@gmail.com"
                className="flex items-center gap-2 text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300"
              >
                <Mail className="h-5 w-5" />
                <span>bojidaryovchev1@gmail.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/bojidaryovchev" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">Tech Stack</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">Technologies I work with on a regular basis</p>
          </div>
          <TechStack />
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">Experience</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">My professional journey over the past 8 years</p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-slate-400">© 2024 Bojidar Yovchev. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
