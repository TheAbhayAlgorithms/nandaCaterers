import { MetadataRoute } from "next";
import { menuCategories } from "@/data/menu";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nandacaterers.com";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/menu",
    "/contact",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const menuRoutes = menuCategories.map((cat) => ({
    url: `${baseUrl}/menu/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...menuRoutes];
}
