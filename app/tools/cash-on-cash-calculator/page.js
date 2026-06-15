"use client";
import { useState } from "react";
import Link from "next/link";

export default function CashOnCashCalculator() {
  const [annualCF, setAnnualCF] = useState(18000);
  const [downPayment, setDownPayment] = useState(250000);
  const [closingCosts, setClosingCosts] = useState(15000);
  const [repairs, setRepairs] = useState(10000);

  const totalEquity = downPayment + closingCosts + repairs;
  const coc = totalEquity > 0 ? ((annualCF / totalEquity) * 100).toFixed(2) : null;

  function grade(c) {
    if (c >= 10) return { label: "Excellent", color: "text-green-400" };
    if (c >= 7) return { label: "Good", color: "text-blue-400" };
    if (c >= 5) return { label: "Acceptable", color: "text-yellow-400" };
    return { label: "Below Target", color: "text-red-400" };
  }
  const g = coc ? grade(parseFloat(coc)) : null;

  return (
    <main className="min-h-screen px-4 py-12 md:px-16 max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Cash-on-Cash Return Calculator",
          applicationCategory: "FinanceApplication",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description: "Free cash-on-cash return calculator for real estate investors. Includes all equity inputs: down payment, closing costs, and repair reserves.",
          url: "https://www.realestate-analytics.ai/tools/cash-on-cash-calculator",
        }),
      }} />

      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-300">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-blue-300">Tools</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">Cash-on-Cash Calculator</span>
      </nav>

      <h1 className="text-4xl font-bold mb-3">Cash-on-Cash Return Calculator</h1>
      <p className="text-slate-300 text-lg mb-10 max-w-2xl">
        Calculate your actual annual yield on invested equity — including down payment, closing costs,
        and initial repairs. The most honest measure of year-one levered performance for any rental property.
      </p>

      <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-8 mb-12 shadow-xl">
        <h2 className="text-xl font-semibold mb-6 text-blue-300">Calculate Cash-on-Cash Return</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { label: "Annual Cash Flow (after debt service)", val: annualCF, set: setAnnualCF, hint: "NOI minus mortgage payments" },
            { label: "Down Payment", val: downPayment, set: setDownPayment, hint: "Your equity contribution at purchase" },
            { label: "Closing Costs", val: closingCosts, set: setClosingCosts, hint: "Title, escrow, lender fees, etc." },
            { label: "Initial Repairs / CapEx", val: repairs, set: setRepairs, hint: "Any immediate fix-up costs" },
          ].map((f) => (
            <div key={f.label}>
              <label className="block text-slate-300 text-sm font-semibold mb-2">{f.label}</label>
              <input type="number" value={f.val} onChange={(e) => f.set(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white text-lg focus:border-blue-400 outline-none" />
              <p className="text-slate-500 text-xs mt-1">{f.hint}</p>
            </div>
          ))}
        </div>

        {coc && (
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-800/80 rounded-xl p-6 text-center border border-slate-600">
              <p className="text-slate-400 text-sm mb-1">Cash-on-Cash Return</p>
              <p className="text-6xl font-bold text-white">{coc}<span className="text-2xl">%</span></p>
              <p className={`text-xl font-semibold mt-1 ${g.color}`}>{g.label}</p>
            </div>
            <div className="bg-slate-800/80 rounded-xl p-6 text-center border border-slate-600">
              <p className="text-slate-400 text-sm mb-1">Total Equity Deployed</p>
              <p className="text-4xl font-bold text-white">${totalEquity.toLocaleString()}</p>
              <p className="text-slate-400 text-sm mt-2">Generating ${annualCF.toLocaleString()}/yr</p>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <a href="https://www.realestate-analytics.ai/#try-it"
            className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition-all">
            Run Full Deal Analysis — IRR, Cap Rate, DSCR & More →
          </a>
        </div>
      </div>

      <article className="prose prose-invert max-w-none text-slate-300 space-y-6">
        <h2 className="text-2xl font-bold text-white">What Is Cash-on-Cash Return?</h2>
        <p>Cash-on-cash (CoC) return measures the annual pre-tax cash flow you receive relative to the
          total cash you invested — including down payment, closing costs, and any initial repairs.
          Unlike cap rate, it accounts for your financing. Unlike IRR, it only measures year-one performance.</p>

        <h2 className="text-2xl font-bold text-white">What Is a Good Cash-on-Cash Return?</h2>
        <ul className="space-y-2">
          <li><strong className="text-white">Below 5%:</strong> Common in appreciation markets (Bay Area, NYC). You're buying equity growth, not income.</li>
          <li><strong className="text-white">5–8%:</strong> Acceptable in most markets. Covers carry with modest upside.</li>
          <li><strong className="text-white">8–12%:</strong> Strong cash flow. Typical target for serious rental investors.</li>
          <li><strong className="text-white">12%+:</strong> Exceptional. Usually found in secondary/tertiary markets or value-add plays.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white">Related Tools</h2>
        <div className="grid md:grid-cols-2 gap-4 not-prose">
          {[
            { href: "/tools/cap-rate-calculator", label: "Cap Rate Calculator", desc: "Unlevered property yield" },
            { href: "/tools/irr-calculator", label: "IRR Calculator", desc: "Total return over hold period" },
            { href: "/tools/dscr-calculator", label: "DSCR Calculator", desc: "Lender debt coverage ratio" },
            { href: "/blog/how-to-analyze-multifamily-deal", label: "Multifamily Deal Analysis Guide", desc: "CCIM framework step-by-step" },
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
