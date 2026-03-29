export const baseUrl = "https://www.zianebadreddine.me";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ziane Badreddine",
  url: baseUrl,
  image: `${baseUrl}/apple-touch-icon.png`,
  jobTitle: "Full-Stack Developer",
  description:
    "Full-stack developer and Computer Science engineering student specializing in modern web applications with Next.js, React, TypeScript, and Node.js",
  email: "zianebadredddine@gmail.com",
  telephone: "+212707291630",
  sameAs: [
    "https://www.linkedin.com/in/ziane-badr-eddine",
    "https://github.com/Ziane-Badreddine",
    "https://twitter.com/EddineZian27143",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Settat",
    addressCountry: "MA",
    addressRegion: "Settat",
  },
  knowsLanguage: [
    {
      "@type": "Language",
      name: "French",
      alternateName: "Français",
    },
    {
      "@type": "Language",
      name: "English",
      alternateName: "Anglais",
    },
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Prisma ORM",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "REST APIs",
    "Full-Stack Development",
    "Web Development",
    "Frontend Development",
    "Backend Development",
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ziane Badreddine Portfolio",
  url: baseUrl,
  image: `${baseUrl}/apple-touch-icon.png`,
  description:
    "Full-stack developer portfolio showcasing modern web applications and projects",
  sameAs: [
    "https://www.linkedin.com/in/ziane-badr-eddine",
    "https://github.com/Ziane-Badreddine",
    "https://twitter.com/EddineZian27143",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "zianebadredddine@gmail.com",
    contactType: "Customer Service",
  },
};

export const breadcrumbSchema = (
  items: Array<{ name: string; url: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const projectSchema = (project: {
  name: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: project.name,
  description: project.description,
  url: project.url,
  ...(project.image && { image: project.image }),
  ...(project.datePublished && { datePublished: project.datePublished }),
  ...(project.dateModified && { dateModified: project.dateModified }),
  author: {
    "@type": "Person",
    name: project.author || "Ziane Badreddine",
  },
});
