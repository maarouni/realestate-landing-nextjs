import Link from "next/link";

export const metadata = {
  title: "Load Your OM — AI-Powered Offering Memorandum Extraction | RealEstate-Analytics.ai",
  description:
    "Upload a CRE Offering Memorandum and let AI extract NOI, cap rate, rent roll, and deal metrics automatically. No manual data entry.",
};

export default function LoadYourOM() {
  return (
    <main className="min-h-screen px-4 py-12 md:px-16 max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Load Your OM — AI-Powered Offering Memorandum Analysis",
          author: { "@type": "Person", name: "Masoud Arouni" },
          publisher: { "@type": "Organization", name: "RealEstate-Analytics.ai" },
          url: "https://www.realestate-analytics.ai/blog/load-your-om",
        }),
      }} />

      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-300">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-300">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">Load Your OM</span>
      </nav>

      <div className="mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-400/10 border border-purple-400/20 px-3 py-1 rounded-full">
          AI-Powered Feature
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-4">Load Your OM — AI Extracts the Numbers So You Don't Have To</h1>
      <p className="text-slate-400 text-sm mb-10">By Masoud Arouni — Founder, RealEstate-Analytics.ai · June 2026</p>

      <article className="prose prose-invert max-w-none text-slate-300 space-y-8">

        <p className="text-xl text-slate-200 leading-relaxed">
          Every broker sends you a 40-page PDF Offering Memorandum with the deal metrics buried
          somewhere between the market overview and the rent roll appendix. The old workflow:
          open the PDF, hunt for NOI, cap rate, and purchase price, manually type them into a
          spreadsheet, hope you didn't make a typo. The new workflow: upload the PDF, let AI
          extract everything in 10 seconds.
        </p>

        <h2 className="text-2xl font-bold text-white">What Is an Offering Memorandum (OM)?</h2>
        <p>An Offering Memorandum is the marketing package a broker prepares when selling a
          commercial real estate asset. It typically includes property description, location
          overview, financial summary (NOI, cap rate, gross income), rent roll, lease abstracts,
          market analysis, and the broker's pro forma projections. OMs range from 20 to 100+
          pages depending on asset complexity.</p>

        <h2 className="text-2xl font-bold text-white">The Problem with OMs</h2>
        <p>OMs are designed to sell, not to inform. The broker's NOI is almost always pro forma —
          based on market rents, normalized expenses, and zero vacancy. The actual trailing NOI
          is buried in the T-12 appendix, which is often on page 68 in a table that doesn't
          copy cleanly into Excel. Manual data entry from OMs wastes 20–30 minutes per deal
          and introduces transcription errors.</p>

        <h2 className="text-2xl font-bold text-white">What AI OM Extraction Does</h2>
        <p>The RealEstate-Analytics.ai Income Property Analyzer accepts PDF uploads and uses
          AI to extract key financial data automatically:</p>

        <ul className="space-y-2">
          <li>Purchase price and asking cap rate</li>
          <li>Gross potential rent and effective gross income</li>
          <li>Broker's pro forma NOI (and flags it as pro forma)</li>
          <li>Unit mix and rent roll summary</li>
          <li>Expense line items where listed</li>
          <li>Loan assumptions if included</li>
        </ul>

        <p>The extracted data populates the analyzer fields automatically. You verify, adjust
          for your actual underwriting assumptions, and run the full CCIM analysis — cap rate,
          IRR, DSCR, stress test — in under 60 seconds from the moment the PDF lands in your inbox.</p>

        <h2 className="text-2xl font-bold text-white">Always Verify: Pro Forma vs. Actual</h2>
        <p>AI extracts what's in the document. If the broker's OM shows a 6.2% cap rate based
          on pro forma rents, the AI will extract 6.2% — but it will flag it as pro forma.
          Always request the T-12 and rerun NOI with actual trailing income before finalizing
          your underwriting. The gap between broker pro forma and actual trailing NOI averages
          15–25% in our experience across analyzed deals.</p>

        <div className="bg-slate-800/60 border border-purple-400/20 rounded-xl p-6 my-6 text-center not-prose">
          <p className="text-lg font-bold text-white mb-2">Try the Income Property Analyzer</p>
          <p className="text-slate-300 text-sm mb-4">Upload your OM PDF and get instant deal metrics. No manual entry.</p>
          <a href="https://www.realestate-analytics.ai/#try-it"
            className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition-all">
            Open the Analyzer →
          </a>
        </div>

        <h2 className="text-2xl font-bold text-white">Related Resources</h2>
        <div className="grid md:grid-cols-2 gap-4 not-prose">
          {[
            { href: "/blog/load-t12", label: "Load Your T-12", desc: "AI extraction of trailing income statements" },
            { href: "/tools/cap-rate-calculator", label: "Cap Rate Calculator", desc: "Verify the broker's cap rate" },
            { href: "/tools/dscr-calculator", label: "DSCR Calculator", desc: "Will the deal pass lender underwriting?" },
            { href: "/blog/how-to-analyze-multifamily-deal", label: "Multifamily Analysis Guide", desc: "Full framework from OM to close" },
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
