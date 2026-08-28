import { yearsOfExperience } from "@/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { PropsWithChildren } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bojidar Yovchev - Software Engineer Portfolio",
  description: `Software Engineer with over ${yearsOfExperience} years of professional experience specializing in fullstack web development with React, Next.js, Angular, Vue, and Node.js.`,
  keywords:
    "Software Engineer, Full-Stack Developer, React, Next.js, Angular, Angular.js, Vue, Node.js, Express.js, Nest.js, TypeScript, JavaScript, Python, C#, Solidity, .NET Core, SQL, PostgreSQL, MongoDB Atlas",
  authors: [{ name: "Bojidar Yovchev" }],
  openGraph: {
    title: "Bojidar Yovchev - Software Engineer Portfolio",
    description: `Software Engineer with over ${yearsOfExperience} years of professional experience specializing in fullstack web development.`,
    type: "website",
  },
  // The whole site is kept out of search indexes on purpose. Inherited by every
  // route unless a page overrides it; mirrored as an X-Robots-Tag header in
  // next.config.ts so non-HTML responses are covered too.
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
      noimageindex: true,
      "max-image-preview": "none",
      "max-snippet": 0,
      "max-video-preview": 0,
    },
  },
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
