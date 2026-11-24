import Link from "next/link";

const URL = "https://www.realestate-analytics.ai/blog/best-ai-underwriting-tools-2026";
const H1 = "How to Choose AI Underwriting Software for Real Estate (2026)";

export const metadata = {
  title: "How to Choose AI Underwriting Software (2026)",
  description:
    "The main types of AI underwriting tools for real estate compared: who each is for, what it reads, and where the math runs.",
  alternates: { canonical: URL },
  openGraph: { title: H1, url: URL, type: "article" },
};

const TOOLS = [
  { name: "Lender and private-credit platforms", for: "CRE lenders and private credit teams",
    reads: "OMs, rent rolls, T-12s, borrower financials, loan agreements",
    math: "Applies the firm's own credit criteria and Excel models, embedded during implementation",
    note: "Typically cite each extracted value to its source with a confidence score, and often cover covenant monitoring after close." },
  { name: "T-12 and rent roll analyzers", for: "Institutional CRE finance teams",
    reads: "T-12s and rent rolls",
    math: "Normalize statements and map them to the client's chart of accounts",
    note: "Add anomaly detection and market benchmarks to statement review." },
  { name: "Enterprise underwriting suites", for: "Lenders and institutional investors",
    reads: "OMs, rent rolls, T-12s, leases",
    math: "Return preliminary NOI and DSCR inside the platform",
    note: "Built for large lenders with dedicated implementation." },
  { name: "Syndicator and sponsor tools", for: "Syndicators and sponsors",
    reads: "Rent rolls, T-12s, OMs",
    math: "Feed parsed data into the platform's own underwriting model",
    note: "Let you review and reclassify parsed line items and save those classifications." },
  { name: "OM extraction tools", for: "Acquisition teams screening deal flow",
    reads: "OMs, rent rolls, cash flows",
    math: "Flow extracted data into deal financials",
    note: "Return source-cited deal data and may accept OMs forwarded by email." },
  { name: "General document-AI platforms", for: "Analysts and private equity",
    reads: "OMs, rent rolls, operating statements, floor plans",
    math: "Insert extracted data into the firm's own model, keeping its formulas",
    note: "General-purpose document AI with real estate agents." },
  { name: "Multifamily underwriting platforms", for: "Multifamily owners, brokers and lenders",
    reads: "Rent rolls and operating statements",
    math: "Their own multifamily underwriting platform",
    note: "Long-established deal analysis platforms for multifamily." },
  { name: "Property IQ Deal Analyzer (ours)", url: "https://www.realestate-analytics.ai/pricing", for: "Investors, agents, loan officers and lenders, residential and CRE",
    reads: "MLS listings, OMs, T-12s, rent rolls",
    math: "Fixed, deterministic CCIM-grade engine; AI never computes",
    note: "Same engine runs inside Claude, ChatGPT and Microsoft Copilot; includes Deal Radar prospecting. $45/month." },
];

const FAQ = [
  { q: "What is the best AI underwriting tool for real estate?", a: "It depends on who you are. Institutional lenders usually need a platform that plugs into their own credit models, built for lenders. Individual investors, agents and loan officers usually need fast, auditable deal math without an enterprise rollout." },
  { q: "Can AI underwrite a real estate deal?", a: "AI can read the documents and pull out the figures, which saves most of the data-entry time. The calculations should still run on fixed formulas, and a person should check the extracted numbers before relying on them." },
  { q: "What documents do AI underwriting tools read?", a: "Most read offering memorandums, T-12 operating statements and rent rolls. Lender-focused platforms also read loan agreements, borrower financials and appraisals." },
  { q: "What should I look for in AI underwriting software?", a: "Check whether every number traces to a source document, whether the math is deterministic, whether you can review and correct extracted data, which asset types it supports, and whether it fits your workflow without a long implementation." },
  { q: "Is there AI underwriting software for small investors?", a: "Yes. Most platforms in this space sell to institutions. The Property IQ Deal Analyzer is built for individual investors, agents and loan officers as well as lenders, at $45 a month, and also runs inside Claude and ChatGPT." },
];

export default function Page() {
  const ld = [
    {
      "@context": "https://schema.org", "@type": "Article", headline: H1, url: URL, mainEntityOfPage: URL,
      datePublished: "2026-11-15", dateModified: "2026-11-24",
      author: { "@type": "Person", name: "Masoud Arouni", url: "https://www.realestate-analytics.ai/about" },
      publisher: { "@type": "Organization", name: "RealEstate-Analytics.ai", url: "https://www.realestate-analytics.ai" },
    },
    { "@context": "https://schema.org", "@type": "ItemList", name: H1,
      itemListElement: TOOLS.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name })) },
    { "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.realestate-analytics.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.realestate-analytics.ai/blog" },
      { "@type": "ListItem", position: 3, name: "Choosing AI Underwriting Software", item: URL },
    ] },
  ];

  return (
    <main className="min-h-screen px-4 py-12 md:px-16 max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-300">Home</Link><span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-300">Blog</Link><span className="mx-2">/</span>
        <span className="text-slate-200">Choosing AI Underwriting Software</span>
      </nav>

      <div className="mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full">Guide · 2026</span>
      </div>

      <h1 className="text-4xl font-bold mb-4">{H1}</h1>
      <p className="text-slate-400 text-sm mb-10">By Masoud Arouni — NorCal CCIM Member, Bay Area Investor · Published <time dateTime="2026-11-15">November 15, 2026</time> · Updated <time dateTime="2026-11-24">November 24, 2026</time></p>

      <article className="prose prose-invert max-w-none text-slate-300 space-y-8">
        <p className="text-xl text-slate-200 leading-relaxed">
          <strong className="text-white">The right AI underwriting tool depends on who you are.</strong>{" "}
          Institutional lenders need platforms that plug into their own credit models. Individual investors, agents and loan officers
          need fast deal math they can audit. The biggest difference between tools isn&apos;t how they read documents; it&apos;s
          where the math runs and whether you can trust it.
        </p>
        <p className="text-sm text-slate-400">Disclosure: we make the Property IQ Deal Analyzer, listed last. The other entries describe types of tools, not specific vendors.</p>

        <h2 className="text-2xl font-bold text-white">How do the main types of AI underwriting tools compare?</h2>
        <div className="not-prose overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b border-slate-700">
              {["Type", "Best for", "Reads", "Where the math runs"].map((h) => (
                <th key={h} className="text-left py-3 px-3 text-slate-300 font-semibold">{h}</th>
              ))}
            </tr></thead>
            <tbody>{TOOLS.map((t) => (
              <tr key={t.name} className="border-b border-slate-800 align-top">
                <td className="py-3 px-3 text-white font-semibold">{t.name}</td>
                <td className="py-3 px-3 text-slate-300">{t.for}</td>
                <td className="py-3 px-3 text-slate-300">{t.reads}</td>
                <td className="py-3 px-3 text-slate-300">{t.math}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white">What does each type do best?</h2>
        <div className="space-y-6">
          {TOOLS.map((t) => (
            <div key={t.name}>
              <h3 className="text-lg font-semibold text-white">{t.name}</h3>
              <p className="mt-1"><strong className="text-slate-200">For:</strong> {t.for}. {t.note}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white">How should you choose?</h2>
        <ul className="space-y-2">
          <li><strong className="text-white">Can you trace every number?</strong> Each figure should link to the page it came from.</li>
          <li><strong className="text-white">Is the math deterministic?</strong> Same inputs should give the same answer. See{" "}
            <Link href="/blog/deterministic-vs-ai-underwriting" className="text-blue-300 hover:text-blue-200 underline">deterministic vs AI underwriting</Link>.</li>
          <li><strong className="text-white">Can you correct the extraction?</strong> You should be able to fix a misread line before it reaches the model.</li>
          <li><strong className="text-white">Does it fit your size?</strong> Enterprise platforms need implementation; small teams need something they can use today.</li>
          <li><strong className="text-white">Where do you work?</strong> If you already use Claude, ChatGPT or Copilot, a tool that runs inside them saves a step.</li>
        </ul>

        <div className="bg-slate-800/60 border border-blue-400/20 rounded-xl p-6 my-6 text-center not-prose">
          <p className="text-lg font-bold text-white mb-2">Try Deterministic Deal Math</p>
          <p className="text-slate-300 text-sm mb-4">Free analyzer on the web, or the Property IQ Deal Analyzer for OM, T-12 and rent roll import.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/#quick-analyzer" className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition-all">Try the Free Analyzer →</a>
            <Link href="/pricing" className="inline-block px-8 py-3 rounded-full border border-slate-500 hover:border-blue-400 text-white font-semibold transition-all">See Pro Pricing</Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white">Frequently asked questions</h2>
        <div className="space-y-6">
          {FAQ.map((f) => (
            <div key={f.q}>
              <h3 className="text-lg font-semibold text-white">{f.q}</h3>
              <p className="mt-1">{f.a}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white">Related resources</h2>
        <div className="grid md:grid-cols-2 gap-4 not-prose">
          {[
            { href: "/blog/deterministic-vs-ai-underwriting", label: "Deterministic vs AI Underwriting", desc: "Which to trust with deal math" },
            { href: "/blog/rent-roll-analysis", label: "Rent Roll Analysis", desc: "Extract and verify a rent roll" },
            { href: "/blog/load-t12", label: "Load Your T-12", desc: "Actual NOI from trailing statements" },
            { href: "/integrations", label: "AI Integrations", desc: "Claude, ChatGPT and Copilot" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="block bg-slate-800/60 border border-slate-700 rounded-xl p-4 hover:border-blue-400 transition-all">
              <p className="text-blue-300 font-semibold">{l.label}</p>
              <p className="text-slate-400 text-sm">{l.desc}</p>
            </Link>
          ))}
        </div>
      </article>
    </main>
  );
}
