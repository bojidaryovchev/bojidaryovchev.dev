import ExperienceCard from "@/components/experience-card";
import GithubIcon from "@/components/icons/github-icon";
import TechStack from "@/components/tech-stack";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import type React from "react";

const Home: React.FC = () => {
  const experiences = [
    {
      company: "IKEA",
      role: "Software Engineer",
      location: "Remote",
      period: "May, 2023 - December, 2024",
      description:
        "The project I worked on while at IKEA was the so-called ROIT - Range Offer Input Tool - which was a tool to allow users to optimize their range of articles exposed in physical stores based on key performance indicators (KPIs). When I joined the project, I discovered that their codebase did not follow most best practices and they had a lot of technical debt. Since the project itself was not that big, I decided to push myself and rewrite their entire frontend and backend in order to become easier to modify and extend. Before I left the project, everything was written to the best of my ability. Our tech stack involved GCP for cloud services, Docker, Kubernetes and Terraform for IaC, BigQuery, CloudSQL and Redis for database storage, a uvicorn Python server with FastAPI on the backend, Vue on the frontend, Jest for unit tests and Cypress with msw.js for end-to-end tests. We were using Github with Github Actions as our CI/CD pipelines so the tests were being run upon a pull request as a sort of an acceptance criterion. I was initially hired as a frontend developer, however I ended up doing fullstack development, so I had complete ownership of the features I delivered.",
      technologies: [
        "GCP",
        "Docker",
        "Kubernetes",
        "Terraform",
        "BigQuery",
        "CloudSQL",
        "SQL",
        "uvicorn",
        "Python",
        "FastAPI",
        "Vue",
        "Jest",
        "Cypress",
        "msw.js",
      ],
    },
    {
      company: "LogicFlow",
      role: "Software Engineer",
      location: "Remote",
      period: "February, 2022 - April, 2023",
      description:
        "While at LogicFlow, I did not actually work on their core product. Instead, I was onboarded on a project of a client of theirs which was basically a banking software written in AngularJS on the frontend and Java on the backend. My role there involved migrating the AngularJS part to Angular v12+ as well as writing unit tests to cover the functionality. We were using BitBucket pipelines for CI/CD so the tests were being executed upon a pull request towards the main branch.",
      technologies: ["Angular", "AngularJS", "JavaScript", "TypeScript", "Mocha", "Protractor", "Jest"],
    },
    {
      company: "Taxback International",
      role: "Software Engineer",
      location: "Remote",
      period: "February, 2021 - January, 2022",
      description:
        "Taxback Group is a family of companies providing tools for tax and VAT management. While there, I worked on an in-house project with Angular where I had to implement response caching on the client side using IndexedDB as well as extend their existing UI and work on bug fixing. Later on we began building a React Native application to basically port that project to mobile (I was the one who suggested React Native and my tech lead liked the idea so we went for it). I am not entirely sure about their overall tech stack as I did not get entirely involved in it.",
      technologies: ["Angular", "JavaScript", "TypeScript", "React Native"],
    },
    {
      company: "Freelance",
      role: "Software Engineer",
      location: "Remote",
      period: "December, 2020 - Present",
      description:
        "I have been working as a freelancer on the side whenever I have enough capacity. My favorite stack is React with Next.js, MongoDB Atlas, SST and Pulumi for IaC and AWS for cloud service, I've also been using Angular, Vue, Node.js and NestJS, depending on the project requirements.",
      technologies: [
        "React",
        "Next.js",
        "MongoDB Atlas",
        "SST",
        "Pulumi",
        "AWS",
        "Angular",
        "Vue",
        "Node.js",
        "NestJS",
      ],
    },
    {
      company: "WeTrack",
      role: "FullStack Developer",
      location: "Remote",
      period: "July, 2017 - December, 2020",
      description:
        "WeTrack is a platform that provides project and risk management solutions. I implemented a substantial part of their user interface using Angular v2+. We had designs for everything which were provided to us in Zeplin, and this meant creating a whole bunch of custom components to properly adhere to said designs, which gave me the opportunity to get my hands really dirty building all of them thus gaining quite some expertise in building components from scratch. Even though I was more involved on the frontend, I also did some backend work for certain features (one of which involved a filtered Gantt chart view) and I also help for the backend refactoring when we decided to do that. Our tech stack consisted of Azure for cloud services, .NET Core with Entity Framework on the backend, SQL Server for our database and Angular v2+ on the frontend, and later on we started using Ionic in order to implement PWA capabilities with proper gestures on mobile.",
      technologies: ["Angular", "JavaScript", "TypeScript", "SCSS", "C#", ".NET Core", "Entity Framework", "Azure"],
    },
    {
      company: "Oxxy",
      role: "JavaScript Developer",
      location: "On-site - Sofia, Bulgaria",
      period: "June, 2016 - April, 2017",
      description:
        "Oxxy is a site builder like Wix. We wrote mostly vanilla JavaScript and later on we started using Angular and Vue to implement e-commerce store functionality. On the backend they were using PHP with Laravel, however I never worked on it as I was just starting off and did not have any experience to be able to tackle those.",
      technologies: ["JavaScript", "TypeScript", "Angular", "Vue", "Webpack"],
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
                  I am a software engineer with over 9 years of professional experience. I believe in being
                  self-sufficient and I always try to stay up-to-date with the technologies I use. I think that as
                  software engineers, we are there to solve problems, and we should be able to quickly learn and adapt
                  to whatever is required in order to complete the task.
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
              <Button variant="outline" asChild>
                <a href="https://github.com/bojidaryovchev" target="_blank" rel="noopener noreferrer">
                  <GithubIcon />
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
            <p className="text-lg text-slate-600 dark:text-slate-300">My professional journey over the years</p>
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
          <p className="text-slate-400">© 2025 Bojidar Yovchev. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
