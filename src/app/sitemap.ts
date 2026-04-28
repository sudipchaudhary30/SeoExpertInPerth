import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://sudipchaudhary101.com.np", lastModified: new Date(), priority: 1 },
    { url: "https://sudipchaudhary101.com.np/about", lastModified: new Date(), priority: 0.85 },
    { url: "https://sudipchaudhary101.com.np/portfolio", lastModified: new Date(), priority: 0.9 },
    { url: "https://sudipchaudhary101.com.np/blog", lastModified: new Date(), priority: 0.8 },
    { url: "https://sudipchaudhary101.com.np/contact", lastModified: new Date(), priority: 0.75 },
  ];
}