"use client";
import { useState } from "react";
import Link from "next/link";

const CREDIT_TIERS = [
  { min: 750, label: "Excellent", color: "text-green-400", risk: "Very Low", note: "Approve immediately. Minimal deposit required." },
  { min: 700, label: "Good", color: "text-blue-400", risk: "Low", note: "Standard approval. 1-month deposit typical." },
  { min: 650, label: "Fair", color: "text-yellow-400", risk: "Moderate", note: "Conditional approval. Consider co-signer or larger deposit." },
  { min: 600, label: "Poor", color: "text-orange-400", risk: "High", note: "Higher deposit or co-signer required. Verify income carefully." },
  { min: 0, label: "Very Poor", color: "text-red-400", risk: "Very High", note: "Decline or require substantial deposit plus co-signer." },
];

function getCreditTier(score) {
  return CREDIT_TIERS.find((t) => score >= t.min);
}

export default function TenantCredit() {
  const [score, setScore] = useState(710);
  const [income, setIncome] = useState(7500);
  const [rent, setRent] = useState(2200);
  const [debtPayments, setDebtPayments] = useState(500);

  const tier = getCreditTier(score);
  const rentToIncome = income > 0 ? ((rent / income) * 100).toFixed(1) : null;
  const dti = income > 0 ? (((rent + debtPayments) / income) * 100).toFixed(1) : null;

  function rtGrade(rt) {
    if (rt <= 28) return { label: "Excellent", color: "text-green-400" };
    if (rt <= 33) return { label: "Acceptable", color: "text-blue-400" };
    if (rt <= 40) return { label: "Borderline", color: "text-yellow-400" };
    return { label: "Too High", color: "text-red-400" };
  }
  const rtg = rentToIncome ? rtGrade(parseFloat(rentToIncome)) : null;

  return (
    <main className="min-h-screen px-4 py-12 md:px-16 max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Tenant Credit Analysis Tool",
          applicationCategory: "FinanceApplication",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description: "Free tenant credit and income analysis tool for landlords and property managers. Rent-to-income ratio, DTI, and credit tier scoring.",
          url: "https://www.realestate-analytics.ai/tools/tenant-credit",
        }),
      }} />

      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-300">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-blue-300">Tools</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">Tenant Credit Analysis</span>
      </nav>

      <h1 className="text-4xl font-bold mb-3">Tenant Credit Analysis Tool</h1>
      <p className="text-slate-300 text-lg mb-10 max-w-2xl">
        Qualify rental applicants instantly. Analyze credit score tier, rent-to-income ratio,
        and debt-to-income ratio to make data-driven leasing decisions — used by landlords,
        property managers, and multifamily operators.
      </p>

      <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-8 mb-12 shadow-xl">
        <h2 className="text-xl font-semibold mb-6 text-blue-300">Analyze Applicant Instantly</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { label: "Credit Score", val: score, set: setScore, hint: "FICO score from credit report (300–850)" },
            { label: "Monthly Gross Income", val: income, set: setIncome, hint: "Pre-tax monthly income (verify with pay stubs)" },
            { label: "Monthly Rent", val: rent, set: setRent, hint: "Target unit rent amount" },
            { label: "Other Monthly Debt Payments", val: debtPayments, set: setDebtPayments, hint: "Car payments, student loans, credit cards" },
          ].map((f) => (
            <div key={f.label}>
              <label className="block text-slate-300 text-sm font-semibold mb-2">{f.label}</label>
              <input type="number" value={f.val} onChange={(e) => f.set(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white text-lg focus:border-blue-400 outline-none" />
              <p className="text-slate-500 text-xs mt-1">{f.hint}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-800/80 rounded-xl p-5 text-center border border-slate-600">
            <p className="text-slate-400 text-sm mb-1">Credit Tier</p>
            <p className={`text-3xl font-bold ${tier.color}`}>{tier.label}</p>
            <p className="text-slate-400 text-xs mt-1">Risk: {tier.risk}</p>
            <p className="text-slate-300 text-xs mt-2">{tier.note}</p>
          </div>
          <div className="bg-slate-800/80 rounded-xl p-5 text-center border border-slate-600">
            <p className="text-slate-400 text-sm mb-1">Rent-to-Income</p>
            <p className={`text-3xl font-bold ${rtg?.color || "text-white"}`}>{rentToIncome}%</p>
            <p className={`text-sm font-semibold mt-1 ${rtg?.color}`}>{rtg?.label}</p>
            <p className="text-slate-400 text-xs mt-1">Target: ≤ 30%</p>
          </div>
          <div className="bg-slate-800/80 rounded-xl p-5 text-center border border-slate-600">
            <p className="text-slate-400 text-sm mb-1">Total DTI</p>
            <p className={`text-3xl font-bold ${parseFloat(dti) <= 43 ? "text-blue-400" : "text-red-400"}`}>{dti}%</p>
            <p className="text-slate-400 text-xs mt-1">Rent + all debt ÷ income</p>
            <p className="text-slate-400 text-xs">Target: ≤ 43%</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="https://www.realestate-analytics.ai/#try-it"
            className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition-all">
            Analyze Your Full Investment Property →
          </a>
        </div>
      </div>

      <article className="prose prose-invert max-w-none text-slate-300 space-y-6">
        <h2 className="text-2xl font-bold text-white">How to Qualify a Tenant in 2026</h2>
        <p>Professional landlords and property managers use three metrics to screen tenants: credit score
          tier, rent-to-income ratio, and debt-to-income ratio. Using all three together reduces eviction
          risk significantly compared to relying on credit score alone.</p>

        <h2 className="text-2xl font-bold text-white">The 30% Rule — Rent-to-Income</h2>
        <p>The industry standard is that rent should not exceed 30% of gross monthly income. At 33%,
          most experienced landlords will still approve with no other red flags. Above 40%, the applicant
          is considered housing cost-burdened and the eviction risk rises substantially.</p>

        <h2 className="text-2xl font-bold text-white">Related Tools</h2>
        <div className="grid md:grid-cols-2 gap-4 not-prose">
          {[
            { href: "/tools/lease-type", label: "Lease Type Analyzer", desc: "NNN vs Gross vs Modified Gross" },
            { href: "/tools/dscr-calculator", label: "DSCR Calculator", desc: "Does the property cover its debt?" },
            { href: "/blog/zipcode-market-analysis", label: "ZIP Code Market Analysis", desc: "Vacancy and rent trends by market" },
            { href: "/tools/cap-rate-calculator", label: "Cap Rate Calculator", desc: "Property-level yield analysis" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="block bg-slate-800/60 border border-slate-700 rounded-xl p-4 hover:border-blue-400 transition-all">
              <p className="text-blue-300 font-semibold">{l.label}</p>
              <p className="text-slate-400 text-sm">{l.desc}</p>
            </Link>
          ))}
        </div>
      </article>

      <article className="prose prose-invert max-w-none text-slate-300 space-y-6 mt-12">
        <h2 className="text-2xl font-bold text-white">Tenant Credit Deep Dive: Value Impact, Diligence Checklist &amp; 2026 Context</h2>

        <h2 className="text-2xl font-bold text-white">How Tenant Credit Moves Value</h2>
        <p>Because value = NOI ÷ cap rate, certainty commands a premium. Investment-grade tenants
          (rated BBB−/Baa3 or better by S&P/Moody's) on long NNN leases trade at meaningfully lower cap
          rates than identical properties with unrated local tenants — the same dollar of rent is
          worth more when it's near-certain. Weak credit shows up as a higher cap rate, a wider lender
          spread, or both.</p>

        <h2 className="text-2xl font-bold text-white">What Professionals Check</h2>
        <ul className="space-y-2">
          <li><strong className="text-white">Rated tenants:</strong> the actual credit rating and
            outlook (public for large corporations).</li>
          <li><strong className="text-white">Unrated/local tenants:</strong> business financials
            (2–3 years), rent-to-revenue ratio (retail rule of thumb: rent under ~10% of store sales
            is sustainable, over ~15% is strained), time in business, personal guarantees, and
            security deposit strength.</li>
          <li><strong className="text-white">For any tenant:</strong> lease term remaining, renewal
            options, co-tenancy clauses, and — for franchisees — whether the guarantee is corporate
            or the individual operator.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white">Concentration Risk</h2>
        <p>A single-tenant property is a bond wearing a building costume: one credit, one lease,
          binary outcome. Multi-tenant properties diversify credit but add rollover management.
          Underwriting a single-tenant deal without reading the tenant's financial condition is
          underwriting blind.</p>

        <h2 className="text-2xl font-bold text-white">The 2026 Context</h2>
        <p>Elevated rates have widened the gap between credit and non-credit pricing, and stress in
          some retail and office categories makes tenant-level diligence the difference between a
          durable income stream and a vacancy in year two. This tool structures that assessment
          before you trust the rent roll.</p>

        <p className="text-slate-400 text-sm italic">
          Data sources for market context:{" "}
          <a href="https://fred.stlouisfed.org" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">Federal Reserve (FRED)</a>,{" "}
          <a href="https://www.census.gov/programs-surveys/acs" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">U.S. Census ACS</a>,{" "}
          <a href="https://www.huduser.gov/portal/datasets/fmr.html" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">HUD Fair Market Rents</a>.
        </p>
      </article>
    </main>
  );
}
