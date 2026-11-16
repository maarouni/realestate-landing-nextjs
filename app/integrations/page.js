import Link from "next/link";

const URL = "https://www.realestate-analytics.ai/integrations";
const MCP = "https://mcp.realestate-analytics.ai/mcp";

export const metadata = {
  title: "AI Integrations: Claude, ChatGPT, Copilot | MCP",
  description:
    "Deterministic real estate underwriting inside Claude, ChatGPT and Microsoft Copilot through one MCP server. Tools, status and partner integration options.",
  alternates: { canonical: URL },
  openGraph: { title: "RealEstate-Analytics.ai AI Integrations", url: URL, type: "website" },
};

const PLATFORMS = [
  { name: "Claude", status: "Available now", detail: "Add as a custom connector. Directory listing submitted.", href: "/claude" },
  { name: "ChatGPT", status: "Available now", detail: "Add as a custom connector. App directory listing in review.", href: "/chatgpt" },
  { name: "Microsoft 365 Copilot", status: "Team pilots", detail: "Connect the MCP server for your analysts. Copilot Agent Store listing in progress.", href: "/copilot" },
  { name: "Google Gemini", status: "Applied", detail: "Applied to Google's connected apps preview.", href: null },
  { name: "Official MCP Registry", status: "Listed", detail: "Published as ai.realestate-analytics/mcp.", href: null },
];

const TOOLS = [
  ["analyze_rental_property", "Residential rentals, single-family to small multifamily: cap rate, cash-on-cash, DSCR, IRR, equity multiple, year-by-year cash flow and a lender view"],
  ["analyze_commercial_property", "Office, retail, industrial and multifamily as CRE: NOI, credit-adjusted cap rate, DSCR, IRR, with Gross, Modified Gross and NNN leases"],
  ["stress_test_rental_property", "Runs a base case plus up to 10 what-if scenarios (rate +1%, vacancy 10%, rent –10%) side by side"],
  ["compare_comps", "Price per unit, price per SF and cap rate for each comp, plus the subject's implied value"],
  ["grade_prospect_list", "Deal Radar: grades a property list A–D for seller motivation and ranks the most likely sellers"],
];

const FAQ = [
  { q: "What is an MCP server?", a: "MCP (Model Context Protocol) is an open standard that lets AI assistants like Claude, ChatGPT and Copilot call outside tools. Our MCP server gives those assistants a deterministic real estate calculation engine instead of letting them guess at the math." },
  { q: "Does the AI do the calculations?", a: "No. The assistant sends the inputs to our engine, the engine runs fixed CCIM-grade formulas, and the assistant explains the results. The same inputs always return the same numbers." },
  { q: "How do I connect it to Claude or ChatGPT?", a: "Add a custom connector in your Claude or ChatGPT settings and paste the server URL shown on this page. Custom connectors require a paid plan. Step-by-step instructions are on our Claude and ChatGPT pages." },
  { q: "Is it free?", a: "You can run 5 analyses a day for free. The Full Deal Review plan at $45 a month gives unlimited analyses plus deal prospecting, comps and full deal reviews." },
  { q: "Can my company integrate the engine into its own product?", a: "Yes. We work with platforms, lenders and data companies on API access, white-label calculators, referrals and co-built content. Email us or book a call to discuss it." },
];

export default function Page() {
  const ld = [
    { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "RealEstate-Analytics.ai MCP Server",
      alternateName: "Property IQ Deal Analyzer", url: URL, applicationCategory: "BusinessApplication",
      operatingSystem: "Claude, ChatGPT, Microsoft 365 Copilot",
      offers: [{ "@type": "Offer", price: "0", priceCurrency: "USD", description: "5 analyses per day" },
               { "@type": "Offer", price: "45", priceCurrency: "USD", description: "Full Deal Review, monthly" }],
      publisher: { "@type": "Organization", name: "RealEstate-Analytics.ai", url: "https://www.realestate-analytics.ai" } },
    { "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.realestate-analytics.ai" },
      { "@type": "ListItem", position: 2, name: "Integrations", item: URL },
    ] },
  ];

  return (
    <main className="min-h-screen px-4 py-12 md:px-16 max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-300">Home</Link><span className="mx-2">/</span>
        <span className="text-slate-200">Integrations</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4">Deterministic Real Estate Underwriting Inside Your AI Assistant</h1>
      <p className="text-xl text-slate-300 mb-10 leading-relaxed">
        One MCP server brings the RealEstate-Analytics.ai calculation engine into Claude, ChatGPT and Microsoft Copilot.
        The assistant reads your documents and explains the deal. Our engine does every calculation, so the numbers are exact and auditable.
      </p>

      <section className="space-y-10 text-slate-300">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Where is it available?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {PLATFORMS.map((p) => {
              const body = (
                <>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white font-semibold">{p.name}</p>
                    <span className="text-xs font-semibold text-green-300 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded-full">{p.status}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{p.detail}</p>
                </>
              );
              return p.href ? (
                <Link key={p.name} href={p.href} className="block bg-slate-800/60 border border-slate-700 rounded-xl p-5 hover:border-blue-400 transition-all">{body}</Link>
              ) : (
                <div key={p.name} className="bg-slate-800/60 border border-slate-700 rounded-xl p-5">{body}</div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">What can the assistant do with it?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="border-b border-slate-700">
                <th className="text-left py-3 px-3 text-slate-300 font-semibold">Tool</th>
                <th className="text-left py-3 px-3 text-slate-300 font-semibold">What it does</th>
              </tr></thead>
              <tbody>{TOOLS.map(([k, v]) => (
                <tr key={k} className="border-b border-slate-800">
                  <td className="py-3 px-3 text-blue-300 font-mono text-xs">{k}</td>
                  <td className="py-3 px-3 text-slate-300">{v}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </div>

        <div className="bg-slate-800/60 border border-blue-400/20 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-2">Server URL</h2>
          <p className="text-sm text-slate-400 mb-3">Paste this when you add a custom connector.</p>
          <code className="block bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-blue-300 text-sm break-all">{MCP}</code>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-3">For platforms, lenders and data companies</h2>
          <p>If your product needs a deterministic calculation layer for real estate, we can work with you on API access, white-label
            calculators, referrals and co-built content. Every calculation is reproducible and traceable, which is what credit and
            compliance reviews require.</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-5">
            <a href="mailto:contact@realestate-analytics.ai?subject=Integration%20partnership" className="inline-block text-center px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition-all">Email Us About an Integration</a>
            <Link href="/partners" className="inline-block text-center px-8 py-3 rounded-full border border-slate-500 hover:border-blue-400 text-white font-semibold transition-all">Partners &amp; Advertising</Link>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Frequently asked questions</h2>
          <div className="space-y-6">
            {FAQ.map((f) => (
              <div key={f.q}>
                <h3 className="text-lg font-semibold text-white">{f.q}</h3>
                <p className="mt-1">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
