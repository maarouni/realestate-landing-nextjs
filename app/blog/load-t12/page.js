import Link from "next/link";

export const metadata = {
  title: "Load Your T-12 — AI Trailing 12-Month Income Statement Analysis | RealEstate-Analytics.ai",
  description:
    "Upload a T-12 trailing income statement and get instant NOI, expense ratio, and deal metrics. AI-powered extraction for multifamily and CRE investors.",
};

export default function LoadT12() {
  return (
    <main className="min-h-screen px-4 py-12 md:px-16 max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Load Your T-12 — AI Trailing 12-Month Income Statement Analysis",
          author: { "@type": "Person", name: "Masoud Arouni" },
          publisher: { "@type": "Organization", name: "RealEstate-Analytics.ai" },
          url: "https://www.realestate-analytics.ai/blog/load-t12",
        }),
      }} />

      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-300">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-300">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">Load Your T-12</span>
      </nav>

      <div className="mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-400/10 border border-purple-400/20 px-3 py-1 rounded-full">
          AI-Powered Feature
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-4">Load Your T-12 — AI Extracts Actual NOI from Trailing Income Statements</h1>
      <p className="text-slate-400 text-sm mb-10">By Masoud Arouni — Founder, RealEstate-Analytics.ai · June 2026</p>

      <article className="prose prose-invert max-w-none text-slate-300 space-y-8">

        <p className="text-xl text-slate-200 leading-relaxed">
          The T-12 — trailing 12-month income statement — is the most important document in any
          CRE acquisition. It's the only place you'll find what the property actually earned,
          not what the broker says it could earn. AI T-12 extraction turns a 30-minute manual
          process into 10 seconds.
        </p>

        <h2 className="text-2xl font-bold text-white">What Is a T-12?</h2>
        <p>A T-12 is a month-by-month income and expense statement for the trailing 12 months of
          property operations. It shows actual collected rent (not scheduled rent), actual vacancies,
          actual operating expenses, and actual NOI. Unlike the broker's pro forma, the T-12 is based
          on real operations — it's the financial truth of the asset.</p>

        <h2 className="text-2xl font-bold text-white">T-12 vs. Pro Forma: Why It Matters</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-3 text-slate-300 font-semibold">Metric</th>
                <th className="text-left py-3 px-3 text-slate-300 font-semibold">T-12 (Actual)</th>
                <th className="text-left py-3 px-3 text-slate-300 font-semibold">Pro Forma (Broker)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Gross Income", "Actual collected rent", "Market rent × 100% occupancy"],
                ["Vacancy", "Real empty units", "Usually 5% (optimistic)"],
                ["Management Fee", "What owner actually pays", "Often omitted or understated"],
                ["Repairs/Maintenance", "Actual costs incurred", "Normalized lower number"],
                ["NOI", "Real trailing number", "15–25% higher on average"],
                ["Cap Rate", "Conservative / realistic", "Overstated to justify price"],
              ].map(([m, t, p], i) => (
                <tr key={i} className="border-b border-slate-800">
                  <td className="py-3 px-3 text-slate-200 font-medium">{m}</td>
                  <td className="py-3 px-3 text-green-400">{t}</td>
                  <td className="py-3 px-3 text-yellow-400">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white">How to Read a T-12</h2>
        <p>T-12s come in various formats — property management software exports (AppFolio, Buildium,
          Yardi), QuickBooks exports, or custom spreadsheets. The key numbers to extract:</p>
        <ul className="space-y-2">
          <li><strong className="text-white">Gross Collected Rent:</strong> What tenants actually paid, month by month. Sum of 12 months.</li>
          <li><strong className="text-white">Vacancy/Credit Loss:</strong> The difference between scheduled and collected rent.</li>
          <li><strong className="text-white">Other Income:</strong> Laundry, parking, late fees, pet fees — real numbers.</li>
          <li><strong className="text-white">Operating Expenses:</strong> Every line item. Watch for missing management fees, deferred maintenance, or abnormally low repair costs in a sale year.</li>
          <li><strong className="text-white">Trailing NOI:</strong> Total income minus total operating expenses. This is your underwriting baseline.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white">AI T-12 Extraction in the Platform</h2>
        <p>The RealEstate-Analytics.ai Income Property Analyzer uses PDF.js with position-aware
          text reconstruction to extract T-12 data from PDF exports. Upload the document,
          and the AI identifies income and expense line items, maps them to standard categories,
          calculates trailing NOI, and populates the deal analyzer automatically. It handles
          AppFolio, Buildium, Yardi, and QuickBooks PDF formats.</p>

        <h2 className="text-2xl font-bold text-white">Red Flags in a T-12</h2>
        <ul className="space-y-2">
          <li><strong className="text-white">Missing management fee:</strong> Owner-managed properties often don't show management cost. Add 8–10% before underwriting.</li>
          <li><strong className="text-white">Low repair costs in the sale year:</strong> Sellers defer maintenance before listing. Normalize CapEx reserves at $100–200/unit/year.</li>
          <li><strong className="text-white">Unusual income spikes:</strong> One-time settlements, insurance proceeds, or back-rent collections inflate trailing income. Normalize these out.</li>
          <li><strong className="text-white">Utilities not broken out:</strong> If utilities are owner-paid and buried in a lump sum, get the utility bills separately.</li>
        </ul>

        <div className="bg-slate-800/60 border border-purple-400/20 rounded-xl p-6 my-6 text-center not-prose">
          <p className="text-lg font-bold text-white mb-2">Upload Your T-12 Now</p>
          <p className="text-slate-300 text-sm mb-4">AI extracts NOI and populates the deal analyzer automatically.</p>
          <a href="https://www.realestate-analytics.ai/#try-it"
            className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition-all">
            Open the Income Property Analyzer →
          </a>
        </div>

        <h2 className="text-2xl font-bold text-white">Related Resources</h2>
        <div className="grid md:grid-cols-2 gap-4 not-prose">
          {[
            { href: "/blog/load-your-om", label: "Load Your OM", desc: "AI extraction from Offering Memorandums" },
            { href: "/tools/cap-rate-calculator", label: "Cap Rate Calculator", desc: "Apply actual NOI to get true cap rate" },
            { href: "/blog/how-to-analyze-multifamily-deal", label: "Multifamily Analysis Guide", desc: "Full CCIM underwriting framework" },
            { href: "/tools/dscr-calculator", label: "DSCR Calculator", desc: "Lender qualification with real NOI" },
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
