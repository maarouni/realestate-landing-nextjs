// Pings IndexNow (Bing, Yandex, Seznam, Naver...) with pages changed in a production deploy.
// Usage: node indexnow.mjs <changed-file> ...   (paths relative to repo root)
import { readFileSync } from "node:fs";

const HOST = "www.realestate-analytics.ai";
const KEY = "24c5d9c314ad99ae9e4d69137a9417e5";
const BASE = `https://${HOST}`;
const files = process.argv.slice(2);

// Every URL the site publishes, read from app/sitemap.js
const sitemapSrc = readFileSync("app/sitemap.js", "utf8");
const all = [...new Set([...sitemapSrc.matchAll(/\$\{base\}([^`]*)`/g)].map((m) => BASE + (m[1] || "/")))];
if (!all.includes(BASE + "/")) all.push(BASE + "/");

const SITEWIDE = ["app/layout.js", "app/globals.css", "app/NavLink.js", "app/sitemap.js", "public/llms.txt"];
const sitewide = files.some((f) => SITEWIDE.includes(f));
let urls;
if (sitewide) urls = all;
else {
  urls = new Set();
  for (const f of files) {
    if (f === "app/page.js") { urls.add(BASE + "/"); continue; }
    const m = f.match(/^app\/(.+?)\/(?:page|layout|[A-Z]\w*)\.js$/);
    if (m) urls.add(`${BASE}/${m[1]}`);
  }
  urls = [...urls].filter((u) => all.includes(u));
}
if (!urls.length) { console.log("No public pages changed; nothing to submit."); process.exit(0); }

console.log(`Submitting ${urls.length} URL(s):\n` + urls.join("\n"));
const res = process.env.DRY ? {status:0,statusText:"dry run"} : await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${BASE}/${KEY}.txt`, urlList: urls }),
});
console.log(`IndexNow response: ${res.status} ${res.statusText}`);
if (res.status >= 400 && res.status !== 429) process.exit(1);
