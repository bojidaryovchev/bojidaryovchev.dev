import { education } from "@/constants";
import { sameAs, siteConfig } from "@/site-config";
import type React from "react";

/**
 * Person + WebSite JSON-LD structured data. Helps search engines build a
 * Knowledge Panel entity and improves eligibility for AI / rich results.
 *
 * Former employers are deliberately not listed: schema.org's `worksFor` means a
 * current employer, and the only ongoing work in the CV is freelance.
 */
const StructuredData: React.FC = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/me.png`,
    jobTitle: siteConfig.jobTitle,
    email: `mailto:${siteConfig.email}`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressCountry: siteConfig.location.country,
    },
    alumniOf: education.map(({ institution }) => ({ "@type": "EducationalOrganization", name: institution })),
    knowsAbout: siteConfig.topics,
    sameAs,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.title,
    url: siteConfig.url,
    author: { "@type": "Person", name: siteConfig.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  );
};

export default StructuredData;
