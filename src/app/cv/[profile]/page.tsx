import CvPage from "@/components/cv-page";
import { getCvProfile } from "@/cv-profiles";
import { cvMetadata, cvStaticParams, type CvRouteProps } from "@/lib/cv-route";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type React from "react";

// Only the profiles defined in cv-profiles.ts exist; anything else is a 404.
export const dynamicParams = false;

export const generateStaticParams = cvStaticParams;

export const generateMetadata = async ({ params }: CvRouteProps): Promise<Metadata> =>
  cvMetadata((await params).profile, "visual");

const CvProfilePage: React.FC<CvRouteProps> = async ({ params }) => {
  const profile = getCvProfile((await params).profile);

  if (!profile) {
    notFound();
  }

  return <CvPage profile={profile} mode="visual" />;
};

export default CvProfilePage;
