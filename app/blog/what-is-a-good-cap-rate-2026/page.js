import Link from "next/link";

export const metadata = {
  title: "What Is a Good Cap Rate in 2026? Market Benchmarks by Metro | RealEstate-Analytics.ai",
  description:
    "Cap rate benchmarks for 2026 by market, asset class, and risk profile. Bay Area, Phoenix, Dallas, Midwest — what cap rate should you target and why.",
};

const MARKETS = [
  { market: "San Francisco Bay Area", type: "Multifamily", range: "3.5–5.0%", trend: "Compressed", note: "Appreciation-driven. Yields thin but rent growth strong." },
  { market: "Los Angeles", type: "Multifamily", range: "4.0–5.5%", trend: "Compressed", note: "Same coastal dynamic. AB 1482 rent control factor." },
  { market: "Phoenix / Scottsdale", type: "Multifamily", range: "5.0–6.5%", trend: "Normalizing", note: "Oversupply pressure in 2024–2025. Stabilizing in 2026." },
  { market: "Dallas / Fort Worth", type: "Multifamily", range: "5.5–7.0%", trend: "Stable", note: "Population inflow. Solid rent growth. Balanced supply." },
  { market: "Midwest (Columbus, Indianapolis)", type: "Multifamily", range: "6.5–9.0%", trend: "Cash flow", note: "High yield, lower appreciation. Strong for cash-flow buyers." },
  { market: "National — Strip Retail NNN", type: "NNN Retail", range: "5.0–7.5%", trend: "Rising", note: "Cap rate expansion with elevated rates. Credit tenant matters most." },
  { market: "National — Industrial", type: "Industrial", range: "5.5–7.0%", trend: "Normalizing", note: "Post-2022 boom normalizing. Still strong fundamentals." },
  { market: "National — Office", type: "Office", range: "7.0–10%+", trend: "Distressed", note: "Distress cycle. Remote work overhang. Class A only in select markets." },
];

export default function WhatIsGoodCapRate() {
  return (
    <main className="min-h-screen px-4 py-12 md:px-16 max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "What Is a Good Cap Rate in 2026?",
          author: { "@type": "Person", name: "Masoud Arouni" },
          publisher: { "@type": "Organization", name: "RealEstate-Analytics.ai" },
          url: "https://www.realestate-analytics.ai/blog/what-is-a-good-cap-rate-2026",
        }),
      }} />

      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-300">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-300">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">What Is a Good Cap Rate in 2026?</span>
      </nav>

      <div className="mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full">
          Market Analysis · 2026
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-4">What Is a Good Cap Rate in 2026?</h1>
      <p className="text-slate-400 text-sm mb-10">By Masoud Arouni — CCIM Candidate · Updated June 2026</p>

      <article className="prose prose-invert max-w-none text-slate-300 space-y-8">

        <p className="text-xl text-slate-200 leading-relaxed">
          There is no universal "good" cap rate. The right cap rate depends on your market, asset class,
          hold strategy, and risk tolerance. Here's a complete breakdown of where cap rates sit in 2026
          and what they mean for your underwriting.
        </p>

        <h2 className="text-2xl font-bold text-white">The Short Answer</h2>
        <ul className="space-y-2">
          <li><strong className="text-white">Coastal gateway markets (SF, LA, NYC):</strong> 3.5–5.5%. Low yield, high appreciation potential.</li>
          <li><strong className="text-white">Sun Belt growth markets (Phoenix, Dallas, Atlanta):</strong> 5–7%. Balance of yield and growth.</li>
          <li><strong className="text-white">Midwest cash-flow markets:</strong> 7–10%+. High yield, moderate appreciation.</li>
          <li><strong className="text-white">Distressed assets (office, some retail):</strong> 8–12%+. Price has fallen to compensate for risk.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white">2026 Cap Rate Benchmarks by Market</h2>
        <div className="not-prose overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-3 text-slate-300 font-semibold">Market</th>
                <th className="text-left py-3 px-3 text-slate-300 font-semibold">Asset Type</th>
                <th className="text-left py-3 px-3 text-slate-300 font-semibold">Cap Rate Range</th>
                <th className="text-left py-3 px-3 text-slate-300 font-semibold">Trend</th>
              </tr>
            </thead>
            <tbody>
              {MARKETS.map((m, i) => (
                <tr key={i} className="border-b border-slate-800 hover:bg-slate-800/40">
                  <td className="py-3 px-3 text-slate-200 font-medium">{m.market}</td>
                  <td className="py-3 px-3 text-slate-400">{m.type}</td>
                  <td className="py-3 px-3 text-blue-300 font-semibold">{m.range}</td>
                  <td className="py-3 px-3 text-slate-300">{m.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white">Why Cap Rate Isn't Enough</h2>
        <p>Cap rate tells you the property-level yield. It tells you nothing about your financing cost,
          your IRR over a 5-year hold, or whether the deal cash-flows after debt service. A 5.5% cap
          rate in Dallas with 7% financing creates negative leverage — your borrowing cost exceeds your
          yield. CCIM-trained analysts always run cap rate, DSCR, and IRR together.</p>

        <h2 className="text-2xl font-bold text-white">Cap Rate vs. Interest Rates in 2026</h2>
        <p>The relationship between cap rates and the 10-year Treasury is called the "spread." Historically,
          CRE trades at a 150–250 basis point spread over Treasuries. In 2026, with the 10-year around
          4.2–4.5%, a normalized spread would put cap rates at 5.7–6.7% nationally. Many markets are
          still below that range — meaning prices are still elevated relative to rates, and further
          price correction is possible in non-gateway markets.</p>

        <div className="bg-slate-800/60 border border-blue-400/20 rounded-xl p-6 my-6 text-center not-prose">
          <p className="text-lg font-bold text-white mb-2">Calculate Your Cap Rate Instantly</p>
          <p className="text-slate-300 text-sm mb-4">Enter NOI and price — get cap rate, deal grade, and market context in seconds.</p>
          <Link href="/tools/cap-rate-calculator"
            className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition-all">
            Open Cap Rate Calculator →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-white">Related Resources</h2>
        <div className="grid md:grid-cols-2 gap-4 not-prose">
          {[
            { href: "/tools/cap-rate-calculator", label: "Cap Rate Calculator", desc: "Instant cap rate with deal grading" },
            { href: "/tools/irr-calculator", label: "IRR Calculator", desc: "Total return over hold period" },
            { href: "/blog/how-to-analyze-multifamily-deal", label: "Multifamily Analysis Guide", desc: "Complete CCIM underwriting framework" },
            { href: "/blog/zipcode-market-analysis", label: "ZIP Code Market Analysis", desc: "Vacancy and rent trends by ZIP" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="block bg-slate-800/60 border border-slate-700 rounded-xl p-4 hover:border-blue-400 transition-all">
              <p className="text-blue-300 font-semibold">{l.label}</p>
              <p className="text-slate-400 text-sm">{l.desc}</p>
            </Link>
          ))}
        </div>
      </article>
    </main>
  );
}
