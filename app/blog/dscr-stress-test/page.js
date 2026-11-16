import Link from "next/link";

const URL = "https://www.realestate-analytics.ai/blog/dscr-stress-test";
const H1 = "How Do You Stress-Test DSCR on a Rental Property?";

export const metadata = {
  title: "DSCR Stress Test: How to Test a Rental Deal",
  description:
    "Stress-test DSCR for lower rents, higher vacancy, rising expenses and higher rates. Worked 6-unit example with exact numbers and lender thresholds.",
  alternates: { canonical: URL },
  openGraph: { title: H1, url: URL, type: "article" },
};

const FAQ = [
  { q: "What is a DSCR stress test?", a: "A DSCR stress test recalculates the debt service coverage ratio after worsening one or more assumptions, such as lower rents, higher vacancy, higher expenses or a higher interest rate. It shows how much room the deal has before it can't cover its loan payments." },
  { q: "How do you calculate DSCR?", a: "Divide net operating income by annual debt service. A property with $112,493 of NOI and $87,225 of annual loan payments has a DSCR of 1.29, meaning income covers the debt 1.29 times." },
  { q: "What DSCR do lenders require?", a: "Most lenders want at least 1.20–1.25x for multifamily and commercial loans. DSCR loan programs for residential investors can go as low as 1.0x, usually with a higher rate or larger down payment." },
  { q: "What scenarios should a DSCR stress test include?", a: "Test rents 10% lower, vacancy at 10%, expenses 10% higher and a rate 1 point higher, one at a time and then all together. Add a refinance-rate test if the loan is floating or due before your planned exit." },
  { q: "What happens if DSCR falls below 1.0?", a: "The property no longer covers its loan payments from operations, so you fund the shortfall from reserves or other income. On a commercial loan it can also trigger a covenant breach or a cash sweep." },
  { q: "How much can NOI drop before DSCR fails?", a: "Divide annual debt service by NOI and subtract the result from one. In the example on this page, NOI can fall about 7% before DSCR drops below 1.20 and about 22.5% before it falls below 1.0." },
];

const INPUTS = [
  ["Property", "6 units at $2,600/month"],
  ["Gross potential rent", "$187,200/yr"],
  ["Other income", "$3,600/yr (laundry, parking)"],
  ["Vacancy", "5%"],
  ["Operating expenses", "$68,947/yr (38% of effective gross income)"],
  ["Loan", "$1,150,000 at 6.5%, 30-year ($7,269/month)"],
];

const RESULTS = [
  ["Base case", "$112,493", "$87,225", "1.29", "$25,267"],
  ["Rents 10% lower", "$94,709", "$87,225", "1.09", "$7,483"],
  ["Vacancy at 10%", "$103,133", "$87,225", "1.18", "$15,907"],
  ["Expenses 10% higher", "$105,598", "$87,225", "1.21", "$18,373"],
  ["Rate 1 point higher (7.5%)", "$112,493", "$96,492", "1.17", "$16,001"],
  ["All four together", "$79,390", "$96,492", "0.82", "–$17,102"],
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
      { "@type": "ListItem", position: 3, name: "DSCR Stress Test", item: URL },
    ] },
  ];

  return (
    <main className="min-h-screen px-4 py-12 md:px-16 max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-300">Home</Link><span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-300">Blog</Link><span className="mx-2">/</span>
        <span className="text-slate-200">DSCR Stress Test</span>
      </nav>

      <div className="mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-green-300 bg-green-400/10 border border-green-400/20 px-3 py-1 rounded-full">Underwriting</span>
      </div>

      <h1 className="text-4xl font-bold mb-4">{H1}</h1>
      <p className="text-slate-400 text-sm mb-10">By Masoud Arouni — NorCal CCIM Member, Bay Area Investor · Published <time dateTime="2026-11-15">November 15, 2026</time></p>

      <article className="prose prose-invert max-w-none text-slate-300 space-y-8">
        <p className="text-xl text-slate-200 leading-relaxed">
          <strong className="text-white">To stress-test DSCR, recalculate NOI ÷ annual debt service after lowering rents, raising vacancy,
          raising expenses and raising the interest rate, one at a time and then all together.</strong>{" "}
          If DSCR stays above your lender&apos;s minimum (usually 1.20–1.25x) in the realistic downside cases, the deal can carry its loan.
        </p>

        <h2 className="text-2xl font-bold text-white">What is DSCR?</h2>
        <p>Debt service coverage ratio is net operating income divided by annual loan payments (principal and interest). A DSCR of
          1.25 means the property earns $1.25 for every $1.00 of debt payments. Below 1.0, the property can&apos;t cover its loan from
          operations.</p>

        <h2 className="text-2xl font-bold text-white">Worked example: a 6-unit building</h2>
        <div className="not-prose overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b border-slate-700">
              <th className="text-left py-3 px-3 text-slate-300 font-semibold">Input</th>
              <th className="text-left py-3 px-3 text-slate-300 font-semibold">Value</th>
            </tr></thead>
            <tbody>{INPUTS.map(([k, v]) => (
              <tr key={k} className="border-b border-slate-800">
                <td className="py-3 px-3 text-slate-200">{k}</td>
                <td className="py-3 px-3 text-blue-300 font-semibold">{v}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white">How does DSCR change under stress?</h2>
        <div className="not-prose overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b border-slate-700">
              {["Scenario", "NOI", "Debt service", "DSCR", "Cash flow"].map((h) => (
                <th key={h} className="text-left py-3 px-3 text-slate-300 font-semibold">{h}</th>
              ))}
            </tr></thead>
            <tbody>{RESULTS.map(([s, n, d, r, c]) => (
              <tr key={s} className="border-b border-slate-800">
                <td className="py-3 px-3 text-slate-200">{s}</td>
                <td className="py-3 px-3 text-slate-300">{n}</td>
                <td className="py-3 px-3 text-slate-300">{d}</td>
                <td className={`py-3 px-3 font-semibold ${parseFloat(r) < 1.2 ? "text-orange-300" : "text-green-300"}`}>{r}</td>
                <td className="py-3 px-3 text-slate-300">{c}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <p>The base case passes at 1.29. A 10% rent drop takes DSCR to 1.09, below most lender minimums, and the combined case goes
          negative at 0.82. This deal has only about a 7% NOI cushion before it falls under 1.20, so it needs either a smaller loan or
          a plan for the combined downside, such as 6–12 months of reserves.</p>

        <h2 className="text-2xl font-bold text-white">Which stresses matter most?</h2>
        <ul className="space-y-2">
          <li><strong className="text-white">Rents:</strong> the biggest lever. Test 10% lower, and 20% lower for a severe case.</li>
          <li><strong className="text-white">Vacancy:</strong> use 10% even if the T-12 shows full occupancy.</li>
          <li><strong className="text-white">Expenses:</strong> insurance and property taxes have risen fastest; test 10% higher.</li>
          <li><strong className="text-white">Rate:</strong> matters if the loan is floating, adjusts, or has to be refinanced before you sell.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white">Why use fixed formulas for a stress test?</h2>
        <p>A stress test is only useful if every scenario is calculated the same way. A chatbot can return a different DSCR each time
          you ask. A deterministic calculator gives the same answer for the same inputs, so you can compare scenarios with confidence.
          See <Link href="/blog/deterministic-vs-ai-underwriting" className="text-blue-300 hover:text-blue-200 underline">deterministic vs AI underwriting</Link>.</p>

        <div className="bg-slate-800/60 border border-blue-400/20 rounded-xl p-6 my-6 text-center not-prose">
          <p className="text-lg font-bold text-white mb-2">Stress-Test Your Deal</p>
          <p className="text-slate-300 text-sm mb-4">Change rent, vacancy, expenses and rate and watch DSCR update instantly.</p>
          <Link href="/tools/dscr-calculator" className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition-all">
            Open the DSCR Calculator →
          </Link>
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
            { href: "/tools/dscr-calculator", label: "DSCR Calculator", desc: "Lender debt coverage check" },
            { href: "/tools/breakeven", label: "Break-Even Occupancy", desc: "Occupancy needed to cover the loan" },
            { href: "/blog/how-to-analyze-multifamily-deal", label: "Multifamily Analysis Guide", desc: "7-step CCIM underwriting framework" },
            { href: "/blog/load-t12", label: "Load Your T-12", desc: "Start the stress test from actual NOI" },
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
