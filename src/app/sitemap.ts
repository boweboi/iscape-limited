import type { MetadataRoute } from "next";

// TODO: replace the fallback with the real domain once one is purchased and connected.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://iscape-limited.vercel.app";

const routes = [
  "",
  "/about",
  "/services",
  "/services/timber-retaining-walls",
  "/services/residential-fencing",
  "/services/decks",
  "/services/ready-lawn",
  "/services/planting",
  "/services/concrete-driveways-and-paths",
  "/estimators",
  "/estimators/retaining-walls",
  "/estimators/fencing",
  "/estimators/ready-lawn",
  "/estimators/hardwood-decking",
  "/estimators/softwood-decking",
  "/estimators/concrete-work",
  "/estimators/planting",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.8 : 0.6,
  }));
}
