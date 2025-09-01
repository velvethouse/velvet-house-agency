import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://velvethouseagency.com";
  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/live` },
    { url: `${base}/vip` },
    { url: `${base}/gifts` },
    { url: `${base}/dashboard` },
    { url: `${base}/legal` }
  ];
}
