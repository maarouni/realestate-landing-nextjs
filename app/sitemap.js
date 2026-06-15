// app/sitemap.js — drop this into your Next.js app/ folder
// It replaces or supplements your existing sitemap.js

export default function sitemap() {
  const base = "https://www.realestate-analytics.ai";
  const now = new Date().toISOString();

  return [
    // Core
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/workshop`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Tools
    { url: `${base}/tools`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/cap-rate-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/irr-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/dscr-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/cash-on-cash-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/tenant-credit`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tools/lease-type`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Blog
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog/how-to-analyze-multifamily-deal`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/what-is-a-good-cap-rate-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/zipcode-market-analysis`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/load-your-om`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/load-t12`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
