import { useEffect } from "react";
import { baseUrl, brand, faqs, phone, testimonials } from "../data/siteData";

function upsertMeta(selector, attrs) {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    document.head.appendChild(tag);
  }
  Object.entries(attrs).forEach(([key, value]) => tag.setAttribute(key, value));
}

export function Seo({ title, description, path = "/", localPage }) {
  useEffect(() => {
    const url = `${baseUrl}${path}`;
    document.title = title;
    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: `${baseUrl}/assets/hero-pool.jpg` });
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, path]);

  const jsonLd = buildJsonLd({ title, description, path, localPage });

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

function buildJsonLd({ title, description, path, localPage }) {
  const url = `${baseUrl}${path}`;
  const address = localPage?.address || "Ankara, Türkiye";

  const business = {
    "@type": ["LocalBusiness", "SportsActivityLocation", "EducationalOrganization"],
    "@id": `${baseUrl}/#business`,
    name: brand,
    url,
    image: `${baseUrl}/assets/hero-pool.jpg`,
    telephone: phone,
    description,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: "Ankara",
      addressCountry: "TR",
    },
    sameAs: ["https://www.instagram.com/"],
  };

  const faq = {
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  const review = testimonials.map((item) => ({
    "@type": "Review",
    author: { "@type": "Person", name: item.name },
    reviewBody: item.text,
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    itemReviewed: { "@id": `${baseUrl}/#business` },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      business,
      {
        "@type": "WebPage",
        name: title,
        url,
        description,
        mainEntity: { "@id": `${baseUrl}/#business` },
      },
      faq,
      ...review,
    ],
  };
}
