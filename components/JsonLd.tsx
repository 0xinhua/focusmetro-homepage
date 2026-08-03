import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const organization = {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.creator,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${siteConfig.logo}`,
    },
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
  };

  const softwareApplication = {
    "@type": "SoftwareApplication",
    "@id": `${siteConfig.url}/#app`,
    name: siteConfig.name,
    applicationCategory: "ProductivityApplication",
    operatingSystem: "iOS",
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    downloadUrl: siteConfig.appStoreUrl,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: { "@id": `${siteConfig.url}/#organization` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-US",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, softwareApplication, website],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
