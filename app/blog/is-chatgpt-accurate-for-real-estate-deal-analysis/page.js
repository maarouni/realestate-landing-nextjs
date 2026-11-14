import Link from "next/link";

const URL = "https://www.realestate-analytics.ai/blog/is-chatgpt-accurate-for-real-estate-deal-analysis";
const H1 = "Is It Accurate to Use ChatGPT or AI to Analyze a Real Estate Deal?";

export const metadata = {
  title: "Is ChatGPT Accurate for Real Estate Deal Analysis?",
  description:
    "AI chatbots explain real estate math well but aren't reliable calculators. See a worked 4-plex example and the safe way to use AI on a deal.",
  alternates: { canonical: URL },
  openGraph: { title: H1, url: URL, type: "article" },
};

const FAQ = [
  { q: "Can ChatGPT calculate cap rate?", a: "It can state the formula (NOI ÷ purchase price), but it can't guarantee it applied the formula correctly to your numbers. Check the result with a calculator that uses fixed formulas." },
  { q: "Is AI good for real estate market research?", a: "It's useful for background and for building a list of questions. Rent and price figures from a chatbot can be outdated or made up, so confirm them against current comps." },
  { q: "What is the most common AI mistake in deal analysis?", a: "Mixing up gross income and NOI. Using gross rent instead of NOI inflates the cap rate and can hide negative cash flow." },
  { q: "Should I trust an AI deal score?", a: "Only if you can see the formulas and inputs behind it. A score you can't audit is a guess." },
  { q: "What is the safe way to use AI on a real estate deal?", a: "Calculate with fixed, auditable formulas, then use AI to explain the results, suggest stress tests and draft questions for the seller." },
];

const INPUTS = [
  ["Purchase price", "$1,600,000"],
  ["Rents", "4 units × $2,800/mo = $134,400/yr"],
  ["Vacancy", "5%"],
  ["Operating expenses", "35% of effective gross income"],
  ["Loan", "75% LTV ($1,200,000), 6.75%, 30-year"],
  ["Cash invested", "$400,000 down + $30,000 closing"],
];
const OUTPUTS = [
  ["Effective gross income", "$127,680"],
  ["Operating expenses", "$44,688"],
  ["Net operating income (NOI)", "$82,992"],
  ["Cap rate", "5.19%"],
  ["Annual debt service", "$93,398 ($7,783/mo)"],
  ["DSCR", "0.89"],
  ["Annual cash flow", "–$10,406"],
  ["Cash-on-cash return", "–2.42%"],
];

function Table({ head, rows }) {
  return (
    <div className="not-prose overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead><tr className="border-b border-slate-700">
          {head.map((h) => <th key={h} className="text-left py-3 px-3 text-slate-300 font-semibold">{h}</th>)}
        </tr></thead>
        <tbody>{rows.map(([k, v]) => (
          <tr key={k} className="border-b border-slate-800">
            <td className="py-3 px-3 text-slate-200">{k}</td>
            <td className="py-3 px-3 text-blue-300 font-semibold">{v}</td>
          </tr>
        ))}</tbody>
      </table>
    </div>
  );
}

export default function Page() {
  const ld = [
    {
      "@context": "https://schema.org", "@type": "Article", headline: H1, url: URL,
      datePublished: "2026-11-14", dateModified: "2026-11-14",
      author: { "@type": "Person", name: "Masoud Arouni", url: "https://www.realestate-analytics.ai/about" },
      publisher: { "@type": "Organization", name: "RealEstate-Analytics.ai", url: "https://www.realestate-analytics.ai" },
    },
    { "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.realestate-analytics.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.realestate-analytics.ai/blog" },
      { "@type": "ListItem", position: 3, name: "Is ChatGPT Accurate for Deal Analysis?", item: URL },
    ] },
  ];

  return (
    <main className="min-h-screen px-4 py-12 md:px-16 max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-300">Home</Link><span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-300">Blog</Link><span className="mx-2">/</span>
        <span className="text-slate-200">ChatGPT for Deal Analysis</span>
      </nav>

      <div className="mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-purple-300 bg-purple-400/10 border border-purple-400/20 px-3 py-1 rounded-full">AI &amp; Underwriting</span>
      </div>

      <h1 className="text-4xl font-bold mb-4">{H1}</h1>
      <p className="text-slate-400 text-sm mb-10">By Masoud Arouni — CCIM Candidate, Bay Area Investor · Published November 14, 2026</p>

      <article className="prose prose-invert max-w-none text-slate-300 space-y-8">
        <p className="text-xl text-slate-200 leading-relaxed">
          <strong className="text-white">AI chatbots like ChatGPT are good at explaining real estate concepts, but they are not reliable calculators.</strong>{" "}
          They generate text instead of running formulas, so a deal can come back with different numbers each time, and a wrong
          number sounds just as confident as a right one. The safe approach: get the math from fixed formulas, then use AI to explain it.
        </p>

        <h2 className="text-2xl font-bold text-white">Why do chatbots get real estate math wrong?</h2>
        <p>A language model doesn&apos;t execute the cap rate formula. It writes text that looks like a cap rate answer. That works
          for &ldquo;what is DSCR?&rdquo; and is risky for &ldquo;what is the DSCR on this property?&rdquo; Common slips include:</p>
        <ul className="space-y-2">
          <li>Using gross rent instead of NOI to calculate cap rate</li>
          <li>Skipping vacancy, or leaving it out of expenses</li>
          <li>Estimating the mortgage payment instead of amortizing the loan</li>
          <li>Returning different results when the same question is asked again</li>
        </ul>
        <p>On a $1.6 million purchase, half a point of cap rate error isn&apos;t rounding. It changes the decision.</p>

        <h2 className="text-2xl font-bold text-white">Worked example: a Bay Area 4-plex</h2>
        <Table head={["Input", "Value"]} rows={INPUTS} />
        <Table head={["Result", "Value"]} rows={OUTPUTS} />
        <p>A 5.19% cap rate sounds acceptable. But the 6.75% loan costs more than the property yields, so the deal carries
          <strong className="text-white"> negative leverage</strong>: DSCR is 0.89 and cash flow is negative. Most lenders want a DSCR
          of at least 1.20. One slipped input, such as using gross rent as NOI, turns this into a &ldquo;decent deal&rdquo; on paper.
          A deterministic calculator can&apos;t make that mistake, because it runs the same formulas the same way every time.</p>

        <h2 className="text-2xl font-bold text-white">How should you use AI on a real estate deal?</h2>
        <ol className="space-y-2">
          <li><strong className="text-white">Calculate with formulas.</strong> Use a spreadsheet or an analyzer with fixed, auditable math.</li>
          <li><strong className="text-white">Explain with AI.</strong> Ask what the numbers mean, what to stress-test and what to ask the seller.</li>
          <li><strong className="text-white">Check one number by hand.</strong> If NOI and cap rate tie out, the rest of the model is usually sound.</li>
        </ol>
        <p>RealEstate-Analytics.ai is built this way. Every number comes from CCIM-grade formulas, and the AI layer only explains
          the results. It never produces the math itself.</p>

        <div className="bg-slate-800/60 border border-blue-400/20 rounded-xl p-6 my-6 text-center not-prose">
          <p className="text-lg font-bold text-white mb-2">Run Your Deal Through Fixed Formulas</p>
          <p className="text-slate-300 text-sm mb-4">Same inputs, same answer, every time. Cap rate, DSCR, cash-on-cash and IRR.</p>
          <a href="/#quick-analyzer" className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition-all">
            Open the Deal Analyzer →
          </a>
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
            { href: "/tools/cap-rate-calculator", label: "Cap Rate Calculator", desc: "NOI ÷ price with deal grading" },
            { href: "/tools/dscr-calculator", label: "DSCR Calculator", desc: "Lender debt coverage check" },
            { href: "/blog/how-to-analyze-multifamily-deal", label: "Multifamily Analysis Guide", desc: "7-step CCIM underwriting framework" },
            { href: "/blog/what-is-a-good-cap-rate-2026", label: "Good Cap Rate in 2026?", desc: "Benchmarks by market" },
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
