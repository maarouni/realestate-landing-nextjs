import Link from "next/link";

const URL = "https://www.realestate-analytics.ai/blog/deterministic-vs-ai-underwriting";
const H1 = "Deterministic vs AI Underwriting: Which Should You Trust With Deal Math?";

export const metadata = {
  title: "Deterministic vs AI Underwriting in Real Estate",
  description:
    "AI is great at reading OMs, T-12s and rent rolls. It shouldn't do the math. How deterministic underwriting works and how to combine the two.",
  alternates: { canonical: URL },
  openGraph: { title: H1, url: URL, type: "article" },
};

const FAQ = [
  { q: "What is deterministic underwriting?", a: "Deterministic underwriting runs every calculation through fixed formulas, so the same inputs always produce the same cap rate, DSCR, cash flow and IRR. Each number can be traced back to its inputs and checked by hand." },
  { q: "What is AI underwriting?", a: "AI underwriting uses language models to read documents, extract figures and sometimes produce the analysis itself. The extraction can save hours, but when the model also generates the math, results can vary between runs and are hard to audit." },
  { q: "Is AI accurate for real estate underwriting?", a: "AI is accurate enough for reading and summarizing documents when a person reviews the output. It isn't reliable as a calculator, because it predicts text instead of running formulas. Use it to extract and explain, not to compute." },
  { q: "Why do lenders care about deterministic math?", a: "Credit committees and auditors need to trace every number to its source and reproduce it. A result that changes when you rerun the same deal can't support a loan decision or pass a review." },
  { q: "What is the best way to combine AI and deterministic underwriting?", a: "Let AI extract data from the OM, T-12 and rent roll, have a person verify the extracted figures, run the numbers through fixed formulas, then use AI to explain the results and suggest stress tests." },
  { q: "Does RealEstate-Analytics.ai use AI for calculations?", a: "No. AI reads documents and explains results, but every number comes from a fixed CCIM-grade calculation engine. The same engine runs on our website and inside Claude, ChatGPT and Microsoft Copilot." },
];

const ROWS = [
  ["Same inputs, same answer", "Yes, every time", "Not guaranteed"],
  ["Every number traceable", "Yes, formula by formula", "Rarely"],
  ["Reads PDFs and messy documents", "No", "Yes, its main strength"],
  ["Explains results in plain English", "No", "Yes"],
  ["Fits credit and audit review", "Yes", "Only with human checks"],
  ["Best job", "The math", "Reading and explaining"],
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
      { "@type": "ListItem", position: 3, name: "Deterministic vs AI Underwriting", item: URL },
    ] },
  ];

  return (
    <main className="min-h-screen px-4 py-12 md:px-16 max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-300">Home</Link><span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-300">Blog</Link><span className="mx-2">/</span>
        <span className="text-slate-200">Deterministic vs AI Underwriting</span>
      </nav>

      <div className="mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-purple-300 bg-purple-400/10 border border-purple-400/20 px-3 py-1 rounded-full">AI &amp; Underwriting</span>
      </div>

      <h1 className="text-4xl font-bold mb-4">{H1}</h1>
      <p className="text-slate-400 text-sm mb-10">By Masoud Arouni — NorCal CCIM Member, Bay Area Investor · Published <time dateTime="2026-11-15">November 15, 2026</time></p>

      <article className="prose prose-invert max-w-none text-slate-300 space-y-8">
        <p className="text-xl text-slate-200 leading-relaxed">
          <strong className="text-white">Use AI to read the documents and fixed, deterministic formulas to do the math.</strong>{" "}
          AI is excellent at pulling numbers out of a 60-page offering memorandum. It is not a calculator: it predicts text, so the
          same deal can come back with different numbers. Deterministic underwriting gives the same answer for the same inputs, every
          time, and every number can be checked.
        </p>

        <h2 className="text-2xl font-bold text-white">How do the two approaches compare?</h2>
        <div className="not-prose overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b border-slate-700">
              {["", "Deterministic", "AI-generated"].map((h) => (
                <th key={h} className="text-left py-3 px-3 text-slate-300 font-semibold">{h}</th>
              ))}
            </tr></thead>
            <tbody>{ROWS.map(([k, d, a]) => (
              <tr key={k} className="border-b border-slate-800">
                <td className="py-3 px-3 text-slate-200">{k}</td>
                <td className="py-3 px-3 text-green-300">{d}</td>
                <td className="py-3 px-3 text-slate-300">{a}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white">Why does AI get deal math wrong?</h2>
        <p>A language model writes the most likely next words. Asked for a cap rate, it produces text that looks like a cap rate,
          which is usually right for simple cases and quietly wrong for real ones: gross rent used as NOI, vacancy skipped, a mortgage
          payment estimated instead of amortized. Our{" "}
          <Link href="/blog/is-chatgpt-accurate-for-real-estate-deal-analysis" className="text-blue-300 hover:text-blue-200 underline">worked 4-plex example</Link>{" "}
          shows how one slipped input turns a negative-cash-flow deal into a &ldquo;decent&rdquo; one.</p>

        <h2 className="text-2xl font-bold text-white">Why do lenders and institutions want deterministic math?</h2>
        <p>A credit memo has to survive a committee, an auditor and sometimes a regulator. That requires every number to trace back to a
          source document and reproduce exactly when someone reruns it. A model that can return a different DSCR tomorrow can&apos;t meet
          that bar on its own.</p>

        <h2 className="text-2xl font-bold text-white">What is the right workflow?</h2>
        <ol className="space-y-2">
          <li><strong className="text-white">Extract with AI.</strong> Pull figures from the OM, T-12 and rent roll.</li>
          <li><strong className="text-white">Verify.</strong> A person confirms the extracted numbers against the documents.</li>
          <li><strong className="text-white">Calculate with fixed formulas.</strong> Cap rate, DSCR, cash-on-cash, IRR and stress tests.</li>
          <li><strong className="text-white">Explain with AI.</strong> What the numbers mean, what to test next, what to ask the seller.</li>
        </ol>

        <h2 className="text-2xl font-bold text-white">How RealEstate-Analytics.ai does it</h2>
        <p>The Property IQ Deal Analyzer follows that workflow: AI reads OMs, T-12s and rent rolls, and a fixed CCIM-grade engine does every
          calculation. The same engine is available inside Claude, ChatGPT and Microsoft Copilot through our{" "}
          <Link href="/integrations" className="text-blue-300 hover:text-blue-200 underline">AI integrations</Link>, so the assistant
          explains the deal while the numbers stay exact.</p>

        <div className="bg-slate-800/60 border border-blue-400/20 rounded-xl p-6 my-6 text-center not-prose">
          <p className="text-lg font-bold text-white mb-2">Run a Deal on Fixed Formulas</p>
          <p className="text-slate-300 text-sm mb-4">Same inputs, same answer. Cap rate, DSCR, cash-on-cash and IRR.</p>
          <a href="/#quick-analyzer" className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition-all">
            Try the Free Deal Analyzer →
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
            { href: "/blog/best-ai-underwriting-tools-2026", label: "How to Choose AI Underwriting Software", desc: "Types of tools and what to look for" },
            { href: "/blog/is-chatgpt-accurate-for-real-estate-deal-analysis", label: "Is ChatGPT Accurate for Deals?", desc: "Worked 4-plex example" },
            { href: "/blog/dscr-stress-test", label: "DSCR Stress Test", desc: "Scenario testing with exact numbers" },
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
