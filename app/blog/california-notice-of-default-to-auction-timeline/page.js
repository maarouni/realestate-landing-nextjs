import Link from "next/link";
import NodCalculator from "./NodCalculator";

const URL = "https://www.realestate-analytics.ai/blog/california-notice-of-default-to-auction-timeline";
const H1 = "How Long After a Notice of Default Can a California Home Go to Auction?";
const leg = (s) => `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=${s}`;

export const metadata = {
  title: "California Notice of Default to Auction: Timeline",
  description:
    "In California, the earliest foreclosure sale is 3 months and 20 days after the Notice of Default is recorded. See the timeline and calculate your date.",
  alternates: { canonical: URL },
  openGraph: { title: H1, url: URL, type: "article" },
};

const FAQ = [
  { q: "How long does foreclosure take in California?", a: "From the recorded Notice of Default, the fastest possible nonjudicial foreclosure is 3 months and 20 days. Most take longer because sales are postponed. The lender also usually can't record an NOD until the loan is more than 120 days delinquent, so the full process from the first missed payment is longer still." },
  { q: "How long after a Notice of Default is a foreclosure sale in California?", a: "The earliest possible trustee's sale is 3 calendar months and 20 days after the Notice of Default is recorded (Civil Code §2924 and §2924f). Postponements often push the actual sale later." },
  { q: "Is the waiting period 90 days or 3 months?", a: "The statute says 3 months. Count calendar months from the NOD recording date, not 90 days." },
  { q: "Is the Notice of Sale period 20 or 21 days?", a: "Civil Code §2924f requires the Notice of Sale to be recorded, posted and published at least 20 days before the sale." },
  { q: "Can a California foreclosure auction be postponed?", a: "Yes. The trustee, the lender or a court can postpone the sale one or more times under Civil Code §2924g." },
  { q: "Does the clock start when the homeowner misses a payment?", a: "No. The 3-month period starts when the Notice of Default is recorded, which is often months after the first missed payment." },
  { q: "Can a homeowner stop the sale after the Notice of Sale?", a: "Generally the loan can be reinstated by paying the past-due amount and fees until 5 business days before the sale (Civil Code §2924c). Other options include paying off the loan, a loan modification or selling the home. Talk to a California real estate attorney." },
  { q: "Can you sell a house in foreclosure in California?", a: "Yes. A homeowner can usually sell at any point before the trustee's sale, through a regular sale if there is equity or a short sale if the lender agrees. Selling before the auction stops the foreclosure." },
];

export default function Page() {
  const ld = [
    {
      "@context": "https://schema.org", "@type": "Article", headline: H1, url: URL,
      datePublished: "2026-11-14", dateModified: "2026-11-14",
      author: { "@type": "Person", name: "Masoud Arouni", url: "https://www.realestate-analytics.ai/about" },
      publisher: { "@type": "Organization", name: "RealEstate-Analytics.ai", url: "https://www.realestate-analytics.ai" },
      about: "California nonjudicial foreclosure timeline",
    },
    { "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.realestate-analytics.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.realestate-analytics.ai/blog" },
      { "@type": "ListItem", position: 3, name: "California NOD to Auction Timeline", item: URL },
    ] },
  ];

  const steps = [
    ["Notice of Default (NOD) recorded", "Day zero. Starts a 3-month waiting period."],
    ["Notice of Sale (NOS) recorded", "Can be recorded up to 5 days before the 3 months end. Must be recorded, posted and published at least 20 days before the sale."],
    ["Trustee's sale (auction)", "Earliest date: NOD + 3 months + 20 days."],
    ["Postponements", "The sale can be pushed back one or more times, so the earliest date often isn't the actual one."],
  ];

  return (
    <main className="min-h-screen px-4 py-12 md:px-16 max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-300">Home</Link><span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-300">Blog</Link><span className="mx-2">/</span>
        <span className="text-slate-200">California NOD to Auction Timeline</span>
      </nav>

      <div className="mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-red-300 bg-red-400/10 border border-red-400/20 px-3 py-1 rounded-full">Foreclosure · California</span>
      </div>

      <h1 className="text-4xl font-bold mb-4">{H1}</h1>
      <p className="text-slate-400 text-sm mb-10">By Masoud Arouni — NorCal CCIM Member, Bay Area Investor · Published November 14, 2026</p>

      <article className="prose prose-invert max-w-none text-slate-300 space-y-8">
        <p className="text-xl text-slate-200 leading-relaxed">
          <strong className="text-white">In California, the earliest a home can be sold at a trustee&apos;s sale is 3 months and 20 days after the Notice of Default is recorded.</strong>{" "}
          The lender must wait out a 3-month period after the NOD, and the Notice of Sale must be recorded, posted and published at
          least 20 days before the auction (Civil Code <a href={leg("2924")} className="text-blue-300">§2924</a> and{" "}
          <a href={leg("2924f")} className="text-blue-300">§2924f</a>).
        </p>

        <NodCalculator />

        <h2 className="text-2xl font-bold text-white">What are the steps in a California foreclosure?</h2>
        <ol className="space-y-3">
          {steps.map(([t, d]) => <li key={t}><strong className="text-white">{t}.</strong> {d}</li>)}
        </ol>

        <h2 className="text-2xl font-bold text-white">What does the timeline look like with real dates?</h2>
        <div className="not-prose overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b border-slate-700">
              <th className="text-left py-3 px-3 text-slate-300 font-semibold">Event</th>
              <th className="text-left py-3 px-3 text-slate-300 font-semibold">Date</th>
            </tr></thead>
            <tbody>
              {[["NOD recorded", "March 2, 2026"], ["3-month period ends", "June 2, 2026"], ["Earliest Notice of Sale recording", "May 28, 2026"], ["Earliest possible sale", "June 22, 2026"]].map(([e, d]) => (
                <tr key={e} className="border-b border-slate-800">
                  <td className="py-3 px-3 text-slate-200">{e}</td>
                  <td className="py-3 px-3 text-blue-300 font-semibold">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>That&apos;s 112 days in this example. The count changes with the length of the months, so there is no fixed
          &ldquo;111-day&rdquo; rule: count 3 calendar months from the NOD, then add 20 days. If the NOD is recorded on the
          30th or 31st and the third month is shorter, the 3-month mark falls on that month&apos;s last day.</p>

        <h2 className="text-2xl font-bold text-white">How much time does a homeowner have to stop the sale?</h2>
        <p>A homeowner can generally reinstate the loan by paying the past-due amount, fees and costs until 5 business days before
          the sale (Civil Code <a href={leg("2924c")} className="text-blue-300">§2924c</a>). After that point, stopping the sale
          usually means paying off the loan in full. Sale dates can also be postponed under{" "}
          <a href={leg("2924g")} className="text-blue-300">§2924g</a>, so check the trustee&apos;s postponement information.</p>

        <h2 className="text-2xl font-bold text-white">Why does the NOD timeline matter to investors and agents?</h2>
        <p>The window between the NOD and the sale is when an owner has the most room to sell on their own terms, through a
          short sale, an equity sale or a listing. Conversations that start after the Notice of Sale goes out are rushed. Knowing the
          earliest sale date tells you how much time is actually left.</p>

        <div className="bg-slate-800/60 border border-blue-400/20 rounded-xl p-6 my-6 text-center not-prose">
          <p className="text-lg font-bold text-white mb-2">Find and Analyze Pre-Foreclosure Deals</p>
          <p className="text-slate-300 text-sm mb-4">Pro includes deal lead sourcing, comps and full CCIM-grade deal reviews.</p>
          <Link href="/pricing" className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition-all">
            See Pro Plans →
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

        <p className="text-sm text-slate-500">This article is general information about California law, not legal advice. Statute references:
          Civil Code §2924, §2924c, §2924f and §2924g.</p>

        <h2 className="text-2xl font-bold text-white">Related resources</h2>
        <div className="grid md:grid-cols-2 gap-4 not-prose">
          {[
            { href: "/blog/is-chatgpt-accurate-for-real-estate-deal-analysis", label: "Is ChatGPT Accurate for Deal Analysis?", desc: "Why fixed formulas beat chatbot math" },
            { href: "/tools/cap-rate-calculator", label: "Cap Rate Calculator", desc: "Run the numbers on a distressed deal" },
            { href: "/blog/how-to-analyze-multifamily-deal", label: "Multifamily Analysis Guide", desc: "7-step CCIM underwriting framework" },
            { href: "/blog/zipcode-market-analysis", label: "ZIP Code Market Analysis", desc: "Vacancy and rent trends by ZIP" },
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
