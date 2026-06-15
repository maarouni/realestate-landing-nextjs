"use client";
import { useState } from "react";
import Link from "next/link";

export const metadata = {
  title: "IRR Calculator — Internal Rate of Return for Real Estate | RealEstate-Analytics.ai",
  description:
    "Calculate IRR for any real estate investment. Enter purchase price, annual cash flows, and exit value to get internal rate of return instantly. CCIM-level accuracy.",
};

function calcIRR(cashFlows) {
  // Newton-Raphson IRR solver
  let rate = 0.1;
  for (let i = 0; i < 100; i++) {
    let npv = 0, dnpv = 0;
    for (let t = 0; t < cashFlows.length; t++) {
      npv += cashFlows[t] / Math.pow(1 + rate, t);
      dnpv -= t * cashFlows[t] / Math.pow(1 + rate, t + 1);
    }
    const newRate = rate - npv / dnpv;
    if (Math.abs(newRate - rate) < 1e-7) return (newRate * 100).toFixed(2);
    rate = newRate;
  }
  return null;
}

function irrGrade(irr) {
  if (irr >= 20) return { label: "Exceptional", color: "text-green-400" };
  if (irr >= 15) return { label: "Strong Return", color: "text-blue-400" };
  if (irr >= 10) return { label: "Acceptable", color: "text-yellow-400" };
  return { label: "Below Hurdle", color: "text-red-400" };
}

export default function IRRCalculator() {
  const [purchase, setPurchase] = useState(1000000);
  const [annualCF, setAnnualCF] = useState(40000);
  const [exitValue, setExitValue] = useState(1400000);
  const [years, setYears] = useState(5);

  const cashFlows = [-purchase];
  for (let i = 1; i < years; i++) cashFlows.push(annualCF);
  cashFlows.push(annualCF + exitValue);

  const irr = calcIRR(cashFlows);
  const g = irr ? irrGrade(parseFloat(irr)) : null;
  const equity = exitValue - purchase + annualCF * years;
  const em = (((exitValue + annualCF * years) / purchase)).toFixed(2);

  return (
    <main className="min-h-screen px-4 py-12 md:px-16 max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "IRR Calculator — Real Estate",
          applicationCategory: "FinanceApplication",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description: "Free IRR calculator for real estate investors. Newton-Raphson solver with equity multiple and deal grading.",
          url: "https://www.realestate-analytics.ai/tools/irr-calculator",
        }),
      }} />

      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-300">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-blue-300">Tools</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">IRR Calculator</span>
      </nav>

      <h1 className="text-4xl font-bold mb-3">IRR Calculator — Real Estate</h1>
      <p className="text-slate-300 text-lg mb-10 max-w-2xl">
        Calculate the Internal Rate of Return for any real estate investment. Used by institutional
        investors, CCIM analysts, and lenders to evaluate hold-period performance across any asset class.
      </p>

      <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-8 mb-12 shadow-xl">
        <h2 className="text-xl font-semibold mb-6 text-blue-300">Calculate IRR Instantly</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { label: "Purchase Price", val: purchase, set: setPurchase, hint: "All-in acquisition cost" },
            { label: "Annual Cash Flow (NOI − Debt)", val: annualCF, set: setAnnualCF, hint: "After-debt-service cash flow per year" },
            { label: "Exit / Sale Price", val: exitValue, set: setExitValue, hint: "Projected sale price at end of hold" },
            { label: "Hold Period (Years)", val: years, set: setYears, hint: "Typical: 3, 5, 7, or 10 years" },
          ].map((f) => (
            <div key={f.label}>
              <label className="block text-slate-300 text-sm font-semibold mb-2">{f.label}</label>
              <input type="number" value={f.val} onChange={(e) => f.set(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white text-lg focus:border-blue-400 outline-none" />
              <p className="text-slate-500 text-xs mt-1">{f.hint}</p>
            </div>
          ))}
        </div>

        {irr && (
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-800/80 rounded-xl p-5 text-center border border-slate-600 md:col-span-1">
              <p className="text-slate-400 text-sm mb-1">IRR</p>
              <p className="text-5xl font-bold text-white">{irr}<span className="text-2xl">%</span></p>
              <p className={`text-lg font-semibold mt-1 ${g.color}`}>{g.label}</p>
            </div>
            <div className="bg-slate-800/80 rounded-xl p-5 text-center border border-slate-600">
              <p className="text-slate-400 text-sm mb-1">Equity Multiple</p>
              <p className="text-5xl font-bold text-white">{em}<span className="text-2xl">x</span></p>
              <p className="text-slate-400 text-sm mt-1">Total return on invested capital</p>
            </div>
            <div className="bg-slate-800/80 rounded-xl p-5 text-center border border-slate-600">
              <p className="text-slate-400 text-sm mb-1">Total Profit</p>
              <p className="text-4xl font-bold text-green-400">${equity.toLocaleString()}</p>
              <p className="text-slate-400 text-sm mt-1">Over {years}-year hold</p>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <a href="https://www.realestate-analytics.ai/#try-it"
            className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition-all duration-300">
            Run Full Deal Analysis — Cap Rate, DSCR, Cash Flow & More →
          </a>
        </div>
      </div>

      <article className="prose prose-invert max-w-none text-slate-300 space-y-6">
        <h2 className="text-2xl font-bold text-white">What Is IRR in Real Estate?</h2>
        <p>Internal Rate of Return (IRR) is the annualized discount rate that makes the net present value
          of all cash flows — including purchase, annual income, and sale proceeds — equal to zero.
          It's the single most comprehensive measure of investment performance because it accounts for
          the time value of money across the entire hold period.</p>

        <h2 className="text-2xl font-bold text-white">What Is a Good IRR for Real Estate?</h2>
        <ul className="space-y-2">
          <li><strong className="text-white">Below 10%:</strong> Below institutional hurdle rates. Typical for core/stabilized assets in gateway markets.</li>
          <li><strong className="text-white">10–15%:</strong> Acceptable for value-add deals with moderate risk.</li>
          <li><strong className="text-white">15–20%:</strong> Strong. Common target for value-add and opportunistic funds.</li>
          <li><strong className="text-white">20%+:</strong> Exceptional. Ground-up development or deep value-add with execution risk.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white">IRR vs. Cash-on-Cash vs. Cap Rate</h2>
        <p>These three metrics answer different questions. Cap rate measures property-level yield ignoring
          financing. Cash-on-cash measures annual levered yield on your equity. IRR measures total
          return over the hold period including appreciation. CCIM-trained analysts use all three together —
          a deal can have a high cap rate but poor IRR if it doesn't appreciate, or a low cap rate
          but strong IRR if purchased below market.</p>

        <h2 className="text-2xl font-bold text-white">Related Tools</h2>
        <div className="grid md:grid-cols-2 gap-4 not-prose">
          {[
            { href: "/tools/cap-rate-calculator", label: "Cap Rate Calculator", desc: "NOI-based property yield" },
            { href: "/tools/dscr-calculator", label: "DSCR Calculator", desc: "Lender debt coverage ratio" },
            { href: "/tools/cash-on-cash-calculator", label: "Cash-on-Cash Calculator", desc: "Levered annual yield" },
            { href: "/blog/how-to-analyze-multifamily-deal", label: "How to Analyze a Multifamily Deal", desc: "Step-by-step CCIM framework" },
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
