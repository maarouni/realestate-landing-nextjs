import Link from "next/link";

export const metadata = {
  title: "How to Analyze a Multifamily Deal — CCIM Framework | RealEstate-Analytics.ai",
  description:
    "Step-by-step guide to analyzing a multifamily investment property. Cap rate, IRR, DSCR, cash-on-cash, stress testing — the complete CCIM underwriting framework.",
};

export default function HowToAnalyzeMultifamily() {
  return (
    <main className="min-h-screen px-4 py-12 md:px-16 max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How to Analyze a Multifamily Deal — CCIM Framework",
          author: { "@type": "Person", name: "Masoud Arouni", jobTitle: "CCIM Candidate, Founder RealEstate-Analytics.ai" },
          publisher: { "@type": "Organization", name: "RealEstate-Analytics.ai" },
          url: "https://www.realestate-analytics.ai/blog/how-to-analyze-multifamily-deal",
          description: "Complete CCIM-level framework for analyzing multifamily investment properties including cap rate, IRR, DSCR, and stress testing.",
        }),
      }} />

      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-300">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-300">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">How to Analyze a Multifamily Deal</span>
      </nav>

      <div className="mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-400/10 border border-blue-400/20 px-3 py-1 rounded-full">
          CCIM Framework
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-4">How to Analyze a Multifamily Deal — The Complete CCIM Framework</h1>
      <p className="text-slate-400 text-sm mb-10">By Masoud Arouni — CCIM Candidate, Bay Area Investor since 2018 · Updated June 2026</p>

      <article className="prose prose-invert max-w-none text-slate-300 space-y-8">

        <p className="text-xl text-slate-200 leading-relaxed">
          Most investors analyze a multifamily deal wrong. They look at the asking price, estimate the rent,
          subtract the mortgage, and call it cash flow. That's not analysis — that's hope with a calculator.
          Here's the framework CCIM-trained analysts actually use.
        </p>

        <h2 className="text-2xl font-bold text-white">Step 1: Build the Rent Roll</h2>
        <p>Start with the actual unit mix and current rents — not pro forma. Pull the T-12 (trailing
          12-month income statement) and verify rent against market comps. The gap between actual rents
          and market rents is your value-add upside — but don't underwrite it until you have a clear path
          to closing that gap.</p>
        <ul className="space-y-2">
          <li>Total units × average rent = Gross Potential Rent (GPR)</li>
          <li>Apply vacancy factor (market rate: 5–8% for stabilized assets)</li>
          <li>Add other income: laundry, parking, pet fees, storage</li>
          <li>Result: Effective Gross Income (EGI)</li>
        </ul>

        <h2 className="text-2xl font-bold text-white">Step 2: Calculate NOI</h2>
        <p>Net Operating Income = EGI − All Operating Expenses. Operating expenses typically run
          35–50% of EGI for multifamily. The seller's T-12 will understate expenses — always
          normalize for management (8–10% if not currently managed), realistic CapEx reserves
          ($100–200/unit/year), and property taxes at post-sale assessed value.</p>
        <div className="bg-slate-800 rounded-xl px-6 py-4 font-mono text-blue-300 text-sm">
          NOI = EGI − (Property Tax + Insurance + Management + Maintenance + Utilities + CapEx Reserve)
        </div>

        <h2 className="text-2xl font-bold text-white">Step 3: Calculate Cap Rate</h2>
        <p>Cap Rate = NOI ÷ Purchase Price. This is your baseline yield metric, unaffected by financing.
          In 2026, Bay Area multifamily trades at 4–5.5%. Secondary California markets (Sacramento,
          Fresno, Inland Empire) run 5.5–7%. Compare your subject property's cap rate to traded comps
          — not to the seller's asking cap rate, which is almost always based on inflated pro forma NOI.</p>

        <div className="bg-slate-800/60 border border-blue-400/20 rounded-xl p-5 my-6">
          <p className="text-blue-300 font-semibold mb-2">Run the Cap Rate Now</p>
          <p className="text-slate-300 text-sm mb-3">Plug in your NOI and price for an instant cap rate and deal grade.</p>
          <Link href="/tools/cap-rate-calculator"
            className="inline-block px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all">
            Cap Rate Calculator →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-white">Step 4: Run the DSCR</h2>
        <p>Before you can close, your lender will underwrite the DSCR. Standard minimum is 1.20–1.25x
          for agency multifamily loans (Fannie/Freddie). Run DSCR at your target loan amount and rate
          before you go under contract — if the deal doesn't support the financing, you'll find out
          at the lender's appraisal instead of at your desk.</p>

        <h2 className="text-2xl font-bold text-white">Step 5: Model the IRR</h2>
        <p>IRR is the ultimate performance metric because it captures both cash flow during the hold
          AND appreciation at exit. Model a 5-year and 7-year hold with a realistic exit cap rate.
          If you're buying at a 5.5% cap, don't model an exit at 5.5% — use 6% or 6.5% to stress
          the return. If IRR is still above 12–15% with a compressed exit, the deal holds up.</p>

        <h2 className="text-2xl font-bold text-white">Step 6: Stress Test</h2>
        <p>Run three scenarios: base case (current rents, market vacancy), downside (10% rent decline,
          10% vacancy increase), and severe (20% rent decline, 20% vacancy). The deal should cash-flow
          in the base case and survive — not go underwater — in the downside scenario.
          If the severe scenario produces negative cash flow, make sure your reserves can cover it
          for 6–12 months.</p>

        <h2 className="text-2xl font-bold text-white">Step 7: Analyze the Full Deal in 60 Seconds</h2>
        <p>The framework above is what institutional analysts do in Argus Enterprise — which takes
          months to learn and costs hundreds per month. The RealEstate-Analytics.ai platform runs the
          same CCIM-level framework — cap rate, IRR, DSCR, cash-on-cash, equity multiple, 10-year
          projections, and stress testing — in under 60 seconds, free, in your browser.</p>

        <div className="bg-slate-800/60 border border-blue-400/20 rounded-xl p-6 my-6 text-center">
          <p className="text-xl font-bold text-white mb-2">Run This Framework on Your Deal Now</p>
          <p className="text-slate-300 text-sm mb-4">No spreadsheets. No signup. Full CCIM-level output in 60 seconds.</p>
          <a href="https://www.realestate-analytics.ai/#try-it"
            className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition-all">
            Try the Free Deal Analyzer →
          </a>
        </div>

        <h2 className="text-2xl font-bold text-white">Related Tools & Resources</h2>
        <div className="grid md:grid-cols-2 gap-4 not-prose">
          {[
            { href: "/tools/cap-rate-calculator", label: "Cap Rate Calculator", desc: "Step 3 — NOI ÷ price" },
            { href: "/tools/dscr-calculator", label: "DSCR Calculator", desc: "Step 4 — lender qualification" },
            { href: "/tools/irr-calculator", label: "IRR Calculator", desc: "Step 5 — total return modeling" },
            { href: "/blog/load-t12", label: "Load Your T-12", desc: "AI extraction of trailing income statements" },
            { href: "/blog/what-is-a-good-cap-rate-2026", label: "Good Cap Rate in 2026", desc: "Market benchmarks by metro" },
            { href: "/blog/zipcode-market-analysis", label: "ZIP Code Market Analysis", desc: "Rent trends and vacancy by market" },
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
