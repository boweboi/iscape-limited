import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.iscapelimited.co.nz";

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
  "/services/landscaping",
  "/services/hardscaping",
  "/services/garden-design",
  "/services/tree-trimming",
  "/estimators",
  "/estimators/retaining-walls",
  "/estimators/fencing",
  "/estimators/ready-lawn",
  "/estimators/hardwood-decking",
  "/estimators/softwood-decking",
  "/estimators/concrete-work",
  "/contact",
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
