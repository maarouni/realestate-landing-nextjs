"use client";
import { useState } from "react";
import Link from "next/link";

export const metadata = {
  title: "DSCR Calculator — Debt Service Coverage Ratio | RealEstate-Analytics.ai",
  description:
    "Calculate DSCR instantly. See if your rental property qualifies for a DSCR loan. Used by lenders, underwriters, and investors. Free, no signup.",
};

function calcDSCR(noi, annualDebt) {
  if (!annualDebt) return null;
  return (noi / annualDebt).toFixed(2);
}

function dscrGrade(d) {
  if (d >= 1.5) return { label: "Lender Favorite", color: "text-green-400", detail: "Strong approval likelihood at most lenders" };
  if (d >= 1.25) return { label: "Qualifies", color: "text-blue-400", detail: "Meets standard DSCR loan requirements" };
  if (d >= 1.0) return { label: "Borderline", color: "text-yellow-400", detail: "Technically cash-flowing but lenders may require reserves" };
  return { label: "Does Not Cover", color: "text-red-400", detail: "Property cash flow insufficient to cover debt — will not qualify for DSCR loan" };
}

function monthlyPayment(principal, annualRate, years) {
  const r = annualRate / 12 / 100;
  const n = years * 12;
  if (r === 0) return principal / n;
  return principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
}

export default function DSCRCalculator() {
  const [noi, setNoi] = useState(72000);
  const [loanAmount, setLoanAmount] = useState(750000);
  const [rate, setRate] = useState(7.25);
  const [amort, setAmort] = useState(30);

  const monthly = monthlyPayment(loanAmount, rate, amort);
  const annualDebt = monthly * 12;
  const dscr = calcDSCR(noi, annualDebt);
  const g = dscr ? dscrGrade(parseFloat(dscr)) : null;

  return (
    <main className="min-h-screen px-4 py-12 md:px-16 max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "DSCR Calculator",
          applicationCategory: "FinanceApplication",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description: "Free DSCR calculator for real estate investors and lenders. Calculates debt service coverage ratio with lender qualification guidance.",
          url: "https://www.realestate-analytics.ai/tools/dscr-calculator",
        }),
      }} />

      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-300">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-blue-300">Tools</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">DSCR Calculator</span>
      </nav>

      <h1 className="text-4xl font-bold mb-3">DSCR Calculator</h1>
      <p className="text-slate-300 text-lg mb-10 max-w-2xl">
        Calculate Debt Service Coverage Ratio for any investment property. See instantly whether
        your deal meets lender minimums (typically 1.20–1.25x) and how it compares to DSCR loan
        requirements — used by private lenders, banks, and CMBS underwriters.
      </p>

      <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-8 mb-12 shadow-xl">
        <h2 className="text-xl font-semibold mb-6 text-blue-300">Calculate DSCR Instantly</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-slate-300 text-sm font-semibold mb-2">Annual NOI</label>
            <input type="number" value={noi} onChange={(e) => setNoi(Number(e.target.value))}
              className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white text-lg focus:border-blue-400 outline-none" />
            <p className="text-slate-500 text-xs mt-1">Gross rent minus operating expenses (no debt service)</p>
          </div>
          <div>
            <label className="block text-slate-300 text-sm font-semibold mb-2">Loan Amount</label>
            <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white text-lg focus:border-blue-400 outline-none" />
          </div>
          <div>
            <label className="block text-slate-300 text-sm font-semibold mb-2">Interest Rate (%)</label>
            <input type="number" step="0.05" value={rate} onChange={(e) => setRate(Number(e.target.value))}
              className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white text-lg focus:border-blue-400 outline-none" />
          </div>
          <div>
            <label className="block text-slate-300 text-sm font-semibold mb-2">Amortization (Years)</label>
            <input type="number" value={amort} onChange={(e) => setAmort(Number(e.target.value))}
              className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white text-lg focus:border-blue-400 outline-none" />
          </div>
        </div>

        {dscr && (
          <div className="space-y-4">
            <div className="bg-slate-800/80 rounded-xl p-6 text-center border border-slate-600">
              <p className="text-slate-400 text-sm mb-1">DSCR</p>
              <p className="text-6xl font-bold text-white mb-2">{dscr}<span className="text-2xl">x</span></p>
              <p className={`text-xl font-semibold ${g.color}`}>{g.label}</p>
              <p className="text-slate-400 text-sm mt-2">{g.detail}</p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700">
                <p className="text-slate-400 text-xs">Monthly Payment</p>
                <p className="text-white font-bold">${Math.round(monthly).toLocaleString()}</p>
              </div>
              <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700">
                <p className="text-slate-400 text-xs">Annual Debt Service</p>
                <p className="text-white font-bold">${Math.round(annualDebt).toLocaleString()}</p>
              </div>
              <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700">
                <p className="text-slate-400 text-xs">Annual Cash Flow</p>
                <p className={`font-bold ${noi - annualDebt > 0 ? "text-green-400" : "text-red-400"}`}>
                  ${Math.round(noi - annualDebt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <a href="https://www.realestate-analytics.ai/#try-it"
            className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition-all">
            Run Full Deal Analysis — IRR, Cap Rate, Cash Flow & More →
          </a>
        </div>
      </div>

      <article className="prose prose-invert max-w-none text-slate-300 space-y-6">
        <h2 className="text-2xl font-bold text-white">What Is DSCR?</h2>
        <p>Debt Service Coverage Ratio (DSCR) measures a property's ability to cover its loan payments
          from operating income. It's the first metric every lender looks at when underwriting a commercial
          or investment property loan. DSCR = NOI ÷ Annual Debt Service.</p>

        <h2 className="text-2xl font-bold text-white">DSCR Loan Requirements in 2026</h2>
        <ul className="space-y-2">
          <li><strong className="text-white">1.0x:</strong> Break-even. Property barely covers debt. Most lenders won't touch it.</li>
          <li><strong className="text-white">1.20x:</strong> Minimum for most conventional and portfolio lenders.</li>
          <li><strong className="text-white">1.25x:</strong> Standard SBA 504 and CMBS minimum.</li>
          <li><strong className="text-white">1.35x+:</strong> Preferred by agency lenders (Fannie/Freddie multifamily).</li>
          <li><strong className="text-white">1.50x+:</strong> Strong — gives borrower leverage to negotiate rate and terms.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white">How Lenders Use DSCR</h2>
        <p>Lenders use DSCR to size the loan. If your property's NOI doesn't support the DSCR minimum
          at the requested loan amount, the lender will reduce the loan until it does. This is called
          "debt-yield constrained" underwriting — common in today's environment when rates are elevated.</p>

        <h2 className="text-2xl font-bold text-white">Related Tools</h2>
        <div className="grid md:grid-cols-2 gap-4 not-prose">
          {[
            { href: "/tools/cap-rate-calculator", label: "Cap Rate Calculator", desc: "NOI ÷ price — property yield" },
            { href: "/tools/irr-calculator", label: "IRR Calculator", desc: "Total return over hold period" },
            { href: "/tools/cash-on-cash-calculator", label: "Cash-on-Cash Calculator", desc: "Annual levered yield on equity" },
            { href: "/blog/load-your-om", label: "Load Your OM", desc: "AI-powered OM extraction tool" },
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
