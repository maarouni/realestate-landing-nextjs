import Link from "next/link";

const URL = "https://www.realestate-analytics.ai/blog/rent-roll-analysis";
const H1 = "How Do You Analyze a Rent Roll?";

export const metadata = {
  title: "Rent Roll Analysis: Extract and Verify a Rent Roll",
  description:
    "What a rent roll shows, the fields to extract, red flags to check, and how to reconcile it against the T-12 before you underwrite a rental property.",
  alternates: { canonical: URL },
  openGraph: { title: H1, url: URL, type: "article" },
};

const FAQ = [
  { q: "What is a rent roll?", a: "A rent roll is a snapshot of every unit in a property on a given date: tenant, unit type, current rent, lease start and end dates, deposit and balance owed. It shows what the property is scheduled to collect, not what it actually collected." },
  { q: "What is the difference between a rent roll and a T-12?", a: "A rent roll lists scheduled rent for each unit today. A T-12 reports the income and expenses actually collected and paid over the past 12 months. Use the rent roll for current rents and lease terms, and the T-12 for actual NOI." },
  { q: "How do you verify a rent roll?", a: "Multiply current monthly rents by 12 and compare the total with collected rent on the T-12. Then match a sample of units against signed leases and bank deposits, and check that the unit count and mix agree with the offering memorandum." },
  { q: "What are red flags in a rent roll?", a: "Leases signed just before the sale at above-market rents, large concessions or free months, many leases expiring at once, tenants with balances owed, and vacant units listed as occupied. Each one inflates the income you'd be buying." },
  { q: "What is loss to lease?", a: "Loss to lease is the gap between market rent and the rent tenants actually pay under current leases. A large loss to lease can be value-add upside, but only if leases roll soon and the market supports the higher rent." },
  { q: "Can AI extract a rent roll from a PDF?", a: "Yes. The Property IQ Deal Analyzer extracts unit mix and rent figures from rent roll PDFs and offering memorandums so you don't retype them. Check the extracted totals against the T-12; the deal math then runs on fixed formulas." },
];

const FIELDS = [
  ["Unit and unit type", "Confirms the unit count and mix match the OM"],
  ["Current rent", "Builds gross potential rent"],
  ["Market rent", "Shows loss to lease and value-add room"],
  ["Lease start and end", "Reveals rollover risk and recent signings"],
  ["Concessions", "Free months that inflate the stated rent"],
  ["Balance owed", "Delinquency the T-12 may not show yet"],
  ["Status", "Occupied, vacant, notice, or down unit"],
];

export default function Page() {
  const ld = [
    {
      "@context": "https://schema.org", "@type": "Article", headline: H1, url: URL, mainEntityOfPage: URL,
      datePublished: "2026-11-15", dateModified: "2026-11-15",
      author: { "@type": "Person", name: "Masoud Arouni", url: "https://www.realestate-analytics.ai/about" },
      publisher: { "@type": "Organization", name: "RealEstate-Analytics.ai", url: "https://www.realestate-analytics.ai" },
    },
    { "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.realestate-analytics.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.realestate-analytics.ai/blog" },
      { "@type": "ListItem", position: 3, name: "Rent Roll Analysis", item: URL },
    ] },
  ];

  return (
    <main className="min-h-screen px-4 py-12 md:px-16 max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-300">Home</Link><span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-300">Blog</Link><span className="mx-2">/</span>
        <span className="text-slate-200">Rent Roll Analysis</span>
      </nav>

      <div className="mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-400/10 border border-purple-400/20 px-3 py-1 rounded-full">AI-Powered Feature</span>
      </div>

      <h1 className="text-4xl font-bold mb-4">{H1}</h1>
      <p className="text-slate-400 text-sm mb-10">By Masoud Arouni — NorCal CCIM Member, Bay Area Investor · Published <time dateTime="2026-11-15">November 15, 2026</time></p>

      <article className="prose prose-invert max-w-none text-slate-300 space-y-8">
        <p className="text-xl text-slate-200 leading-relaxed">
          <strong className="text-white">To analyze a rent roll, extract each unit&apos;s rent, lease dates, concessions and balance, then
          reconcile the total against the T-12.</strong>{" "}
          The rent roll tells you what the property is scheduled to collect today. The T-12 tells you what it actually collected.
          The gap between the two is where most overpaid deals hide.
        </p>

        <h2 className="text-2xl font-bold text-white">What should you extract from a rent roll?</h2>
        <div className="not-prose overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b border-slate-700">
              <th className="text-left py-3 px-3 text-slate-300 font-semibold">Field</th>
              <th className="text-left py-3 px-3 text-slate-300 font-semibold">Why it matters</th>
            </tr></thead>
            <tbody>{FIELDS.map(([k, v]) => (
              <tr key={k} className="border-b border-slate-800">
                <td className="py-3 px-3 text-slate-200">{k}</td>
                <td className="py-3 px-3 text-slate-300">{v}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white">How do you reconcile a rent roll with the T-12?</h2>
        <p>Take the current monthly rents, multiply by 12, and compare with collected rent on the T-12. Example: six units at $2,600
          a month is $187,200 of scheduled rent a year. If the T-12 shows $171,000 collected, the property lost about 8.7% to vacancy,
          concessions and bad debt. Underwrite with that real loss, not the 5% the broker assumed.</p>
        <p>If the rent roll is much higher than the T-12, ask why. Common answers: rents were raised in the last few months, leases were
          signed with free rent, or units listed as occupied aren&apos;t paying.</p>

        <h2 className="text-2xl font-bold text-white">What are the red flags?</h2>
        <ul className="space-y-2">
          <li><strong className="text-white">Recent signings at the top of the market:</strong> several leases dated in the 60–90 days before listing.</li>
          <li><strong className="text-white">Concessions:</strong> two free months on a 12-month lease turn $2,600 stated rent into about $2,167 effective rent.</li>
          <li><strong className="text-white">Rollover clusters:</strong> a large share of leases expiring in the same quarter.</li>
          <li><strong className="text-white">Balances owed:</strong> delinquent tenants the T-12 hasn&apos;t written off yet.</li>
          <li><strong className="text-white">Unit count mismatch:</strong> the rent roll, OM and T-12 don&apos;t agree on units or mix.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white">Can AI extract a rent roll?</h2>
        <p>Rent rolls arrive as PDF exports from AppFolio, Buildium, Yardi or a broker&apos;s spreadsheet, and retyping them invites errors.
          The Property IQ Deal Analyzer extracts unit mix and rents from rent roll PDFs and offering memorandums, then runs the deal on
          fixed CCIM-grade formulas. AI reads the document; it never does the math.</p>

        <div className="bg-slate-800/60 border border-purple-400/20 rounded-xl p-6 my-6 text-center not-prose">
          <p className="text-lg font-bold text-white mb-2">Load Your Rent Roll, OM or T-12</p>
          <p className="text-slate-300 text-sm mb-4">AI extracts the numbers. Fixed formulas run the deal.</p>
          <a href="https://residential.realestate-analytics.ai" target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition-all">
            Open the Property IQ Deal Analyzer (Pro) →
          </a>
          <p className="text-slate-400 text-xs mt-3">Pro plan feature · <a href="/pricing" className="text-blue-300 hover:text-blue-200 underline">See Pro pricing</a></p>
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
            { href: "/blog/load-t12", label: "Load Your T-12", desc: "Actual NOI from trailing income statements" },
            { href: "/blog/load-your-om", label: "Load Your OM", desc: "AI extraction from offering memorandums" },
            { href: "/blog/dscr-stress-test", label: "DSCR Stress Test", desc: "Test the deal against lower rents" },
            { href: "/blog/how-to-analyze-multifamily-deal", label: "Multifamily Analysis Guide", desc: "7-step CCIM underwriting framework" },
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
