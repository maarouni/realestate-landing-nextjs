import Link from "next/link";

const URL = "https://www.realestate-analytics.ai/blog/texas-rentals-dont-pencil";
const H1 = "Why Texas Rentals Don't Pencil at 7.5%: Two Live Deals";
const EPISODE = "https://wp.investorfuel.com/real-estate-pros-show/why-these-rental-properties-lose-money-real-estate-deal-analysis-with-masoud-arouni/";

export const metadata = {
  title: "Why Texas Rentals Don't Pencil at 7.5% | Two Live Deals",
  description:
    "Two Texas single-family rentals, run live on the Real Estate Pros Show. At 7.5% both fail on DSCR. Exact numbers, what moves them, and how to run your own.",
  alternates: { canonical: URL },
  openGraph: { title: H1, url: URL, type: "article" },
};

const FAQ = [
  { q: "Why don't these Texas rentals cash flow?", a: "At a 7.5% rate with 25% down, the mortgage alone is $1,285 a month on the Fort Worth home and $1,390 on the Dallas home. Rent of $1,850 and $1,890 can't cover that plus taxes, insurance, management and maintenance, so debt service coverage lands below 0.5." },
  { q: "What DSCR do these two deals have?", a: "The Fort Worth home has a year-1 DSCR of 0.46 and the Dallas home 0.48. A DSCR below 1.0 means net operating income doesn't cover the loan payment." },
  { q: "What would make these deals work?", a: "Price is the biggest lever. A 20% lower price on the Fort Worth home raises DSCR from 0.46 to 0.57 and moves cash flow positive by year 6. No single change fixes year 1, which is why the purchase price and the loan terms have to be negotiated together." },
  { q: "Why do taxes and insurance matter so much in Texas?", a: "Property tax rates and insurance premiums are high relative to rent on lower-priced homes, so they take a large share of income before the mortgage. Use a current quote for the specific property and underwrite expenses at the worst case." },
  { q: "Can I run these deals myself?", a: "Yes. Enter the inputs below into the free Single Property Analyzer, which needs no signup, and you will get the same answers because the math is fixed." },
];

const INPUTS = [
  ["Price", "$245,000", "$265,000"],
  ["Monthly rent", "$1,850", "$1,890"],
  ["Monthly expenses (tax, insurance, management, maintenance)", "$1,109", "$1,076"],
  ["Down payment", "25%", "25%"],
  ["Rate / term", "7.5% / 30 yr", "7.5% / 30 yr"],
  ["Vacancy / appreciation / rent growth", "8% / 3% / 5%", "8% / 3% / 5%"],
];

const RESULTS = [
  ["Cap rate", "2.9%", "3.0%"],
  ["DSCR (year 1)", "0.46", "0.48"],
  ["Cash-on-cash (year 1)", "-13.6%", "-13.2%"],
  ["Cash flow (year 1)", "-$8,302", "-$8,723"],
  ["Monthly mortgage", "$1,285", "$1,390"],
  ["Cash flow turns positive", "Year 8", "Year 9"],
];

export default function Page() {
  const ld = [
    {
      "@context": "https://schema.org", "@type": "Article", headline: H1, url: URL, mainEntityOfPage: URL,
      datePublished: "2026-11-24", dateModified: "2026-11-24",
      author: { "@type": "Person", name: "Masoud Arouni", url: "https://www.realestate-analytics.ai/about" },
      publisher: { "@type": "Organization", name: "RealEstate-Analytics.ai", url: "https://www.realestate-analytics.ai" },
    },
    { "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.realestate-analytics.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.realestate-analytics.ai/blog" },
      { "@type": "ListItem", position: 3, name: "Texas Rentals at 7.5%", item: URL },
    ] },
  ];

  return (
    <main className="min-h-screen px-4 py-12 md:px-16 max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-300">Home</Link><span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-300">Blog</Link><span className="mx-2">/</span>
        <span className="text-slate-200">Texas Rentals at 7.5%</span>
      </nav>

      <div className="mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-green-300 bg-green-400/10 border border-green-400/20 px-3 py-1 rounded-full">Underwriting</span>
      </div>

      <h1 className="text-4xl font-bold mb-4">{H1}</h1>
      <p className="text-slate-400 text-sm mb-10">By Masoud Arouni — NorCal CCIM Member, Bay Area Investor · Published <time dateTime="2026-11-24">November 24, 2026</time></p>

      <article className="prose prose-invert max-w-none text-slate-300 space-y-8">
        <p className="text-xl text-slate-200 leading-relaxed">
          <strong className="text-white">At a 7.5% mortgage rate, two typical Texas single-family rentals, one in Fort Worth and one in Dallas, cover
          less than half of their loan payments.</strong>{" "}
          I ran both live on the Real Estate Pros Show with Scott Bursey. Here are the exact numbers, and what changes them.
        </p>

        <div className="not-prose">
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-slate-700">
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/D8GGb251lww"
              title="Why These Rental Properties Lose Money | Real Estate Deal Analysis With Masoud Arouni"
              loading="lazy"
              allow="accelerometer; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className="text-slate-400 text-sm mt-2">
            Watch the episode, or see the <a href={EPISODE} target="_blank" rel="noopener" className="text-blue-300 hover:text-blue-200 underline">episode page on Investor Fuel</a>.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white">The two deals</h2>
        <p>Both homes are three-bedroom single-family rentals. Fort Worth (76104) is priced at $245,000, and Dallas (75216) at $265,000.
          Rent, tax and insurance are market estimates. Always get a current insurance quote for the specific property.</p>
        <div className="not-prose overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b border-slate-700">
              {["Input", "Fort Worth 76104", "Dallas 75216"].map((h) => (
                <th key={h} className="text-left py-3 px-3 text-slate-300 font-semibold">{h}</th>
              ))}
            </tr></thead>
            <tbody>{INPUTS.map(([k, a, b]) => (
              <tr key={k} className="border-b border-slate-800">
                <td className="py-3 px-3 text-slate-200">{k}</td>
                <td className="py-3 px-3 text-blue-300 font-semibold">{a}</td>
                <td className="py-3 px-3 text-blue-300 font-semibold">{b}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white">What the numbers say</h2>
        <div className="not-prose overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b border-slate-700">
              {["Result", "Fort Worth", "Dallas"].map((h) => (
                <th key={h} className="text-left py-3 px-3 text-slate-300 font-semibold">{h}</th>
              ))}
            </tr></thead>
            <tbody>{RESULTS.map(([k, a, b]) => (
              <tr key={k} className="border-b border-slate-800">
                <td className="py-3 px-3 text-slate-200">{k}</td>
                <td className="py-3 px-3 text-orange-300 font-semibold">{a}</td>
                <td className="py-3 px-3 text-orange-300 font-semibold">{b}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <p>A DSCR below 1.0 means the property doesn&apos;t earn enough to pay its own loan. At 0.46 and 0.48, the owner funds the shortfall,
          about $8,300 and $8,700 in year 1. The total IRR looks positive only because of the sale after ten years, so the deal loses cash
          for the first eight to nine years.</p>

        <h2 className="text-2xl font-bold text-white">Why taxes and insurance hurt</h2>
        <p>On a lower-priced home, taxes and insurance take a large share of rent before the mortgage is paid. That is why Texas deals that
          look fine on a spreadsheet using seller numbers fail under realistic expenses. Use the current carrier quote for the specific
          property and underwrite the worst case as your default.</p>

        <h2 className="text-2xl font-bold text-white">What actually moves these deals</h2>
        <ul className="space-y-2">
          <li><strong className="text-white">Price:</strong> the biggest lever. Taking the Fort Worth home from $245,000 to $200,000 raises DSCR from 0.46 to 0.57 and moves cash flow positive in year 6.</li>
          <li><strong className="text-white">Rate:</strong> a lower rate helps, but a rate drop alone doesn&apos;t fix year 1.</li>
          <li><strong className="text-white">Rent and appreciation:</strong> they help over time, but they do little for year-1 coverage.</li>
          <li><strong className="text-white">Motivated sellers:</strong> a discount this large rarely comes from a normal listing. It comes from owners with a reason to sell.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white">Finding sellers who will discount</h2>
        <p>Owners with low-rate loans have little reason to sell, so listings stay thin and priced high. Motivated sellers are more likely to show
          the signals that matter: tax delinquency, pre-foreclosure, notice of default, absentee ownership, and long-held properties with high equity.
          Stacking those signals and checking the numbers before you reach out is how you find the price where a deal works.</p>

        <h2 className="text-2xl font-bold text-white">Why fixed formulas</h2>
        <p>The math has to return the same answer every time. A chatbot can give a different DSCR each time you ask. Fixed CCIM-based formulas do
          the arithmetic, and AI is used to read documents and rank deal signals.
          See <Link href="/blog/deterministic-vs-ai-underwriting" className="text-blue-300 hover:text-blue-200 underline">deterministic vs AI underwriting</Link>.</p>

        <div className="bg-slate-800/60 border border-blue-400/20 rounded-xl p-6 my-6 text-center not-prose">
          <p className="text-lg font-bold text-white mb-2">Run These Two Deals Yourself</p>
          <p className="text-slate-300 text-sm mb-4">Enter the inputs above into the free Single Property Analyzer. No signup, and you get the same numbers.</p>
          <a href="/#quick-analyzer" className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition-all">
            Open the Free Analyzer →
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
            { href: "/blog/dscr-stress-test", label: "How to Stress-Test DSCR", desc: "Lower rents, higher vacancy, expenses and rates" },
            { href: "/tools/dscr-calculator", label: "DSCR Calculator", desc: "Lender debt coverage check" },
            { href: "/blog/deterministic-vs-ai-underwriting", label: "Deterministic vs AI Underwriting", desc: "Why the math should be fixed" },
            { href: "/blog/is-chatgpt-accurate-for-real-estate-deal-analysis", label: "Is ChatGPT Accurate for Deal Analysis?", desc: "Why chatbots get deal math wrong" },
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
