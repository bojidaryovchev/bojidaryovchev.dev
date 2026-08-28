import { experiences } from "@/constants";
import { sameAs, siteConfig } from "@/site-config";
import type React from "react";

/**
 * Person + WebSite JSON-LD structured data. Helps search engines build a
 * Knowledge Panel entity and improves eligibility for AI / rich results.
 */
const StructuredData: React.FC = () => {
  const employers = Array.from(new Set(experiences.map((experience) => experience.company))).filter(
    (company) => company.toLowerCase() !== "freelance",
  );

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
    worksFor: employers.map((name) => ({ "@type": "Organization", name })),
    knowsAbout: siteConfig.keywords.filter((keyword) => keyword !== siteConfig.name),
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
