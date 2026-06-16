import type { MetadataRoute } from "next";

const SITE = "https://hassannasr.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE, lastModified: now, priority: 1 },
    { url: `${SITE}/projects/arcain-voice-engine`, lastModified: now, priority: 0.9 },
    { url: `${SITE}/projects/arabic-asr-fine-tune`, lastModified: now, priority: 0.9 },
    { url: `${SITE}/projects/focusfriend`, lastModified: now, priority: 0.9 },
  ];
}
