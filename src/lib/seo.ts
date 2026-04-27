import { SITE_CONFIG } from "./config";

export function generateMetadata(options: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
}) {
  const title = options.title
    ? `${options.title} | ${SITE_CONFIG.name}`
    : SITE_CONFIG.title;
  const description = options.description || SITE_CONFIG.description;
  const image = options.image || SITE_CONFIG.ogImage;
  const url = options.url || SITE_CONFIG.url;

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title,
    description,
    keywords: [
      "SEO",
      "Flutter",
      "Web Development",
      "Digital Marketing",
      "Nepal",
    ],
    authors: [{ name: SITE_CONFIG.author }],
    creator: SITE_CONFIG.author,
    openGraph: {
      type: options.type || "website",
      locale: SITE_CONFIG.locale,
      url,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      siteName: SITE_CONFIG.name,
      ...(options.publishedTime && {
        publishedTime: options.publishedTime,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: SITE_CONFIG.social.twitter,
    },
  };
}