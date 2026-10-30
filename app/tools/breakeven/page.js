"use client";
import { useState } from "react";
import Link from "next/link";

function monthlyPayment(principal, annualRate, years) {
  const r = annualRate / 12 / 100;
  const n = years * 12;
  if (!principal || !n) return 0;
  if (r === 0) return principal / n;
  return principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
}

function beGrade(be) {
  if (be <= 75) return { label: "Strong Cushion", color: "text-green-400", detail: "The property can lose a quarter of its income and still cover expenses and debt" };
  if (be <= 85) return { label: "Healthy", color: "text-blue-400", detail: "Within the range most lenders and investors consider acceptable" };
  if (be <= 95) return { label: "Thin Margin", color: "text-yellow-400", detail: "A small rise in vacancy or expenses turns cash flow negative" };
  if (be <= 100) return { label: "At Risk", color: "text-orange-400", detail: "Needs near-full occupancy just to cover costs" };
  return { label: "Negative at Full Occupancy", color: "text-red-400", detail: "Even 100% occupancy does not cover expenses and debt service" };
}

const fmt = (n) => "$" + Math.round(n).toLocaleString();

export default function BreakEvenCalculator() {
  const [rent, setRent] = useState(3800);
  const [opex, setOpex] = useState(950);
  const [loanAmount, setLoanAmount] = useState(337500);
  const [rate, setRate] = useState(6.5);
  const [amort, setAmort] = useState(30);

  const monthlyDebt = monthlyPayment(loanAmount, rate, amort);
  const monthlyCosts = opex + monthlyDebt;
  const beOcc = rent > 0 ? (monthlyCosts / rent) * 100 : null;
  const opOnlyOcc = rent > 0 ? (opex / rent) * 100 : null;
  const g = beOcc !== null ? beGrade(beOcc) : null;
  const cushion = rent - monthlyCosts;

  return (
    <main className="min-h-screen px-4 py-12 md:px-16 max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Break-Even Occupancy Calculator",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Web Browser",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description: "Free break-even occupancy and break-even rent calculator for rental and multifamily property, including operating expenses and debt service.",
          url: "https://www.realestate-analytics.ai/tools/breakeven",
        }),
      }} />

      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-300">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-blue-300">Tools</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">Break-Even Calculator</span>
      </nav>

      <h1 className="text-4xl font-bold mb-3">Break-Even Occupancy Calculator</h1>
      <p className="text-slate-300 text-lg mb-4 max-w-2xl">
        Break-even occupancy is the share of a property&apos;s potential rent you must collect to cover
        operating expenses and debt service. Break-Even Occupancy = (Operating Expenses + Debt Service) ÷ Gross Potential Rent.
      </p>
      <p className="text-slate-400 mb-10 max-w-2xl">
        Enter your numbers below to see the occupancy and the minimum rent at which the deal stops losing money.
      </p>

      <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-8 mb-12 shadow-xl">
        <h2 className="text-xl font-semibold mb-6 text-blue-300">Calculate Break-Even Instantly</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { label: "Gross Monthly Rent (100% occupied)", val: rent, set: setRent, step: 50, hint: "All units at market rent, before vacancy" },
            { label: "Monthly Operating Expenses", val: opex, set: setOpex, step: 25, hint: "Taxes, insurance, repairs, management, utilities. Excludes debt" },
            { label: "Loan Amount", val: loanAmount, set: setLoanAmount, step: 5000, hint: "Set to 0 for an all-cash purchase" },
            { label: "Interest Rate (%)", val: rate, set: setRate, step: 0.05 },
            { label: "Amortization (Years)", val: amort, set: setAmort, step: 1 },
          ].map((f) => (
            <div key={f.label}>
              <label className="block text-slate-300 text-sm font-semibold mb-2">{f.label}</label>
              <input type="number" step={f.step} value={f.val} onChange={(e) => f.set(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white text-lg focus:border-blue-400 outline-none" />
              {f.hint && <p className="text-slate-500 text-xs mt-1">{f.hint}</p>}
            </div>
          ))}
        </div>

        {g && (
          <div className="space-y-4">
            <div className="bg-slate-800/80 rounded-xl p-6 text-center border border-slate-600">
              <p className="text-slate-400 text-sm mb-1">Break-Even Occupancy</p>
              <p className="text-6xl font-bold text-white mb-2">{beOcc.toFixed(1)}<span className="text-2xl">%</span></p>
              <p className={`text-xl font-semibold ${g.color}`}>{g.label}</p>
              <p className="text-slate-400 text-sm mt-2">{g.detail}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700">
                <p className="text-slate-400 text-xs">Break-Even Rent / mo</p>
                <p className="text-white font-bold">{fmt(monthlyCosts)}</p>
              </div>
              <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700">
                <p className="text-slate-400 text-xs">Monthly Debt Service</p>
                <p className="text-white font-bold">{fmt(monthlyDebt)}</p>
              </div>
              <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700">
                <p className="text-slate-400 text-xs">Operating Break-Even</p>
                <p className="text-white font-bold">{opOnlyOcc.toFixed(1)}%</p>
              </div>
              <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700">
                <p className="text-slate-400 text-xs">Cushion at 100% / mo</p>
                <p className={`font-bold ${cushion >= 0 ? "text-green-400" : "text-red-400"}`}>{fmt(cushion)}</p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <a href="https://www.realestate-analytics.ai/#try-it"
            className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition-all">
            Run Full Deal Analysis: IRR, Cap Rate, DSCR &amp; 10-Year Cash Flow →
          </a>
        </div>
      </div>

      <article className="prose prose-invert max-w-none text-slate-300 space-y-6">
        <h2 className="text-2xl font-bold text-white">How Do You Calculate Break-Even Occupancy?</h2>
        <div className="bg-slate-800 rounded-xl px-6 py-4 font-mono text-blue-300 text-center text-lg">
          Break-Even Occupancy = (Operating Expenses + Annual Debt Service) ÷ Gross Potential Rent
        </div>
        <ol className="space-y-2 list-decimal pl-6">
          <li>Add up a year of operating expenses (taxes, insurance, repairs, management, utilities).</li>
          <li>Add the annual mortgage payments, principal plus interest.</li>
          <li>Divide by gross potential rent: the rent collected if every unit were leased all year.</li>
        </ol>

        <h2 className="text-2xl font-bold text-white">Worked Example</h2>
        <p>A $450,000 rental leases for $3,800/month, or $45,600/year at full occupancy. Operating expenses
          run $950/month ($11,400/year). With 25% down, the $337,500 loan at 6.5% over 30 years costs about
          $2,133/month ($25,598/year).</p>
        <p>Break-even occupancy = ($11,400 + $25,598) ÷ $45,600 = <strong className="text-white">81.1%</strong></p>
        <p>The property covers all costs as long as it collects at least 81% of potential rent, about $3,083/month.
          That leaves room for roughly 2.3 months of vacancy per year before cash flow turns negative.</p>

        <h2 className="text-2xl font-bold text-white">What Is a Good Break-Even Occupancy?</h2>
        <ul className="space-y-2">
          <li><strong className="text-white">Under 75%:</strong> Strong. Survives a serious downturn or a long lease-up.</li>
          <li><strong className="text-white">75–85%:</strong> The range most commercial lenders and experienced investors are comfortable with.</li>
          <li><strong className="text-white">85–95%:</strong> Thin. One extended vacancy or an insurance increase wipes out cash flow.</li>
          <li><strong className="text-white">Over 95%:</strong> The deal depends on near-perfect occupancy. Renegotiate price or terms.</li>
        </ul>
        <p>For comparison, stabilized U.S. multifamily typically runs in the mid-90s on occupancy. A break-even well below the
          market&apos;s actual occupancy is what gives a deal its margin of safety.</p>

        <h2 className="text-2xl font-bold text-white">Break-Even Occupancy vs. DSCR</h2>
        <p>Both measure the same risk from different sides. DSCR asks how many times NOI covers the loan payment;
          break-even occupancy asks how much income you can lose before you can&apos;t pay it. A 1.25x DSCR deal
          with 5% vacancy and a 25% expense ratio has a break-even near 81%. Lenders quote DSCR; investors who
          have lived through a vacancy usually watch break-even.</p>

        <h2 className="text-2xl font-bold text-white">What Is the Break-Even Rent?</h2>
        <p>Break-even rent is the same calculation expressed in dollars: monthly operating expenses plus the
          monthly mortgage payment. If market rent for the unit is below that number, the property needs a larger
          down payment, a lower price, or lower expenses to cash-flow.</p>

        <h2 className="text-2xl font-bold text-white">Related Tools</h2>
        <div className="grid md:grid-cols-2 gap-4 not-prose">
          {[
            { href: "/tools/dscr-calculator", label: "DSCR Calculator", desc: "Lender debt coverage qualification" },
            { href: "/tools/cap-rate-calculator", label: "Cap Rate Calculator", desc: "NOI ÷ price — property yield" },
            { href: "/tools/cash-on-cash-calculator", label: "Cash-on-Cash Calculator", desc: "Annual levered yield on equity" },
            { href: "/tools/irr-calculator", label: "IRR Calculator", desc: "Total return over hold period" },
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
