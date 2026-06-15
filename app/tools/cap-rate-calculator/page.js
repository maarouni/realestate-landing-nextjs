"use client";
import { useState } from "react";
import Link from "next/link";

function calcCapRate(noi, price) {
  if (!price || price === 0) return null;
  return ((noi / price) * 100).toFixed(2);
}

function grade(cr) {
  if (cr >= 8) return { label: "Strong Buy", color: "text-green-400" };
  if (cr >= 6) return { label: "Good Deal", color: "text-blue-400" };
  if (cr >= 4.5) return { label: "Market Rate", color: "text-yellow-400" };
  return { label: "Thin Margins", color: "text-red-400" };
}

export default function CapRateCalculator() {
  const [noi, setNoi] = useState(60000);
  const [price, setPrice] = useState(1000000);

  const cr = calcCapRate(noi, price);
  const g = cr ? grade(parseFloat(cr)) : null;

  return (
    <main className="min-h-screen px-4 py-12 md:px-16 max-w-4xl mx-auto">

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Cap Rate Calculator",
            applicationCategory: "FinanceApplication",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            description: "Free capitalization rate calculator for real estate investors. Instant NOI-based cap rate with deal grading.",
            url: "https://www.realestate-analytics.ai/tools/cap-rate-calculator",
          }),
        }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-300">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-blue-300">Tools</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">Cap Rate Calculator</span>
      </nav>

      <h1 className="text-4xl font-bold mb-3">Cap Rate Calculator</h1>
      <p className="text-slate-300 text-lg mb-10 max-w-2xl">
        Calculate the capitalization rate for any commercial or residential investment property.
        Enter your Net Operating Income (NOI) and purchase price to get an instant cap rate,
        deal grade, and market context — no spreadsheets, no signup.
      </p>

      {/* LIVE CALCULATOR */}
      <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-8 mb-12 shadow-xl">
        <h2 className="text-xl font-semibold mb-6 text-blue-300">Calculate Instantly</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <label className="block text-slate-300 text-sm font-semibold mb-2">
              Annual Net Operating Income (NOI)
            </label>
            <input
              type="number"
              value={noi}
              onChange={(e) => setNoi(Number(e.target.value))}
              className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white text-lg focus:border-blue-400 outline-none"
              placeholder="e.g. 60000"
            />
            <p className="text-slate-500 text-xs mt-1">Gross rent minus all operating expenses (excluding debt service)</p>
          </div>
          <div>
            <label className="block text-slate-300 text-sm font-semibold mb-2">
              Property Purchase Price
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white text-lg focus:border-blue-400 outline-none"
              placeholder="e.g. 1000000"
            />
          </div>
        </div>

        {cr && (
          <div className="bg-slate-800/80 rounded-xl p-6 text-center border border-slate-600">
            <p className="text-slate-400 text-sm mb-1">Your Cap Rate</p>
            <p className="text-6xl font-bold text-white mb-2">{cr}<span className="text-3xl">%</span></p>
            <p className={`text-xl font-semibold ${g.color}`}>{g.label}</p>
            <p className="text-slate-400 text-sm mt-3">
              Formula: NOI (${noi.toLocaleString()}) ÷ Price (${price.toLocaleString()}) × 100
            </p>
          </div>
        )}

        {/* Market context bar */}
        {cr && (
          <div className="mt-6">
            <p className="text-slate-400 text-sm mb-3">2026 Market Benchmarks</p>
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              {[
                { label: "SF Bay Area", range: "3.5–5%", note: "Compressed" },
                { label: "Dallas/Phoenix", range: "5–7%", note: "Balanced" },
                { label: "Midwest", range: "7–10%", note: "Cash flow" },
                { label: "Your Rate", range: `${cr}%`, note: g.label },
              ].map((m) => (
                <div key={m.label} className="bg-slate-700/50 rounded-lg p-2">
                  <p className="text-slate-300 font-semibold">{m.range}</p>
                  <p className="text-slate-400">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <a
            href="https://www.realestate-analytics.ai/#try-it"
            className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition-all duration-300"
          >
            Run Full Deal Analysis — IRR, DSCR, Cash Flow & More →
          </a>
        </div>
      </div>

      {/* SEO CONTENT */}
      <article className="prose prose-invert max-w-none text-slate-300 space-y-6">
        <h2 className="text-2xl font-bold text-white">What Is a Cap Rate?</h2>
        <p>
          The capitalization rate (cap rate) is the most fundamental metric in commercial real estate
          underwriting. It measures the annual return a property generates relative to its purchase price,
          assuming an all-cash purchase with no financing. Cap rate is calculated as:
        </p>
        <div className="bg-slate-800 rounded-xl px-6 py-4 font-mono text-blue-300 text-center text-lg">
          Cap Rate = Net Operating Income (NOI) ÷ Current Market Value × 100
        </div>

        <h2 className="text-2xl font-bold text-white">What Is a Good Cap Rate in 2026?</h2>
        <p>
          A "good" cap rate depends entirely on your market and investment strategy. In high-cost coastal
          markets like the San Francisco Bay Area, Los Angeles, or New York, cap rates of 3.5–5% are
          common because investors are buying appreciation, not yield. In cash-flow markets like the
          Midwest or Southeast, investors typically target 7–10%+ cap rates.
        </p>
        <ul className="space-y-2">
          <li><strong className="text-white">Below 4%:</strong> Compressed. Common in gateway cities. Appreciation play, not income.</li>
          <li><strong className="text-white">4–6%:</strong> Market rate for most major metros in 2026.</li>
          <li><strong className="text-white">6–8%:</strong> Strong yield. Typical in secondary markets.</li>
          <li><strong className="text-white">8%+:</strong> High yield. Common in tertiary markets or value-add deals.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white">Cap Rate vs. Cash-on-Cash Return</h2>
        <p>
          Cap rate ignores financing — it's a property-level metric. Cash-on-cash return accounts for your
          actual mortgage payments and measures the yield on your invested equity. A property with a 6% cap
          rate might produce a 9% cash-on-cash return with leverage, or a 3% return if interest rates are high.
          CCIM-trained analysts always look at both.
        </p>

        <h2 className="text-2xl font-bold text-white">Cap Rate and Interest Rates</h2>
        <p>
          Cap rates and interest rates are closely linked. When the 10-year Treasury rises, cap rates
          tend to expand (prices fall) to maintain spread. In 2022–2024, the Fed rate hike cycle compressed
          spreads significantly — many CRE assets saw cap rates below their borrowing cost, creating
          negative leverage. In 2026, normalization is underway but spreads remain tight in gateway markets.
        </p>

        <h2 className="text-2xl font-bold text-white">How to Calculate NOI</h2>
        <p>
          Net Operating Income = Gross Potential Rent − Vacancy Loss − Operating Expenses.
          Operating expenses include property taxes, insurance, maintenance, property management fees,
          and utilities (if owner-paid). NOI does NOT include mortgage payments, depreciation, or income taxes.
        </p>

        <h2 className="text-2xl font-bold text-white">Related Tools</h2>
        <div className="grid md:grid-cols-2 gap-4 not-prose">
          {[
            { href: "/tools/irr-calculator", label: "IRR Calculator", desc: "Internal rate of return over hold period" },
            { href: "/tools/dscr-calculator", label: "DSCR Calculator", desc: "Debt service coverage ratio for lenders" },
            { href: "/tools/cash-on-cash-calculator", label: "Cash-on-Cash Calculator", desc: "Levered yield on invested equity" },
            { href: "/blog/what-is-a-good-cap-rate-2026", label: "What Is a Good Cap Rate in 2026?", desc: "Full market analysis by metro" },
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
