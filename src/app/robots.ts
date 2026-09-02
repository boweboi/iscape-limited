import type { MetadataRoute } from "next";

// TODO: replace the fallback with the real domain once one is purchased and connected.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://iscape-limited.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/contact/thank-you"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
