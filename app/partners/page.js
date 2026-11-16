import Link from "next/link";

const URL = "https://www.realestate-analytics.ai/partners";

export const metadata = {
  title: "Partners & Advertising | RealEstate-Analytics.ai",
  description:
    "Sponsored placements, integrations and referral partnerships with RealEstate-Analytics.ai. Rates, terms and how to reach us.",
  alternates: { canonical: URL },
  openGraph: { title: "Partners & Advertising", url: URL, type: "website" },
};

const PARTNER_TYPES = [
  ["Integrations", "Use our deterministic calculation engine in your product through MCP or API, or embed our calculators."],
  ["Referrals", "Send us investors, agents or loan officers who need deal analysis, or receive referrals from our users for services we don't offer."],
  ["Co-created content", "Joint guides, webinars and case studies for investors, lenders and agents."],
  ["Workshops and events", "Investor and agent education sessions with lenders, title companies and brokerages."],
];

const FAQ = [
  { q: "Do you accept sponsored placements?", a: "Yes, in articles where the product is genuinely relevant to readers. Sponsored links carry rel=\"sponsored\", and we keep final approval of the wording so it matches the rest of the article." },
  { q: "Do you do link exchanges?", a: "We consider them case by case, only for relevant real estate or finance sites, and the link must come from the partner's own domain and existing content." },
  { q: "Can a sponsor change your comparison or review pages?", a: "No. Comparison pages are editorial and are not for sale. Vendors can send factual corrections, which we review." },
];

export default function Page() {
  const ld = [
    { "@context": "https://schema.org", "@type": "WebPage", name: "Partners & Advertising", url: URL,
      publisher: { "@type": "Organization", name: "RealEstate-Analytics.ai", url: "https://www.realestate-analytics.ai" } },
    { "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.realestate-analytics.ai" },
      { "@type": "ListItem", position: 2, name: "Partners", item: URL },
    ] },
  ];

  return (
    <main className="min-h-screen px-4 py-12 md:px-16 max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-300">Home</Link><span className="mx-2">/</span>
        <span className="text-slate-200">Partners &amp; Advertising</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4">Partners &amp; Advertising</h1>
      <p className="text-xl text-slate-300 mb-10 leading-relaxed">
        RealEstate-Analytics.ai publishes deterministic deal analysis and guides read by real estate investors, agents, loan officers
        and lenders. We work with companies that serve the same audience through sponsored placements, integrations and referrals.
      </p>

      <section className="space-y-12 text-slate-300">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Sponsored placements</h2>
          <p>We accept a limited number of sponsored placements in articles where the product is genuinely relevant to our readers.
            Sponsored links are marked rel=&quot;sponsored&quot;, and we approve the final wording. Comparison and review pages are not for sale.
            Rates on request.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Partnerships</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {PARTNER_TYPES.map(([k, v]) => (
              <div key={k} className="bg-slate-800/60 border border-slate-700 rounded-xl p-5">
                <p className="text-white font-semibold mb-1">{k}</p>
                <p className="text-slate-400 text-sm">{v}</p>
              </div>
            ))}
          </div>
          <p className="mt-4">Our calculation engine already runs inside Claude, ChatGPT and Microsoft Copilot. See{" "}
            <Link href="/integrations" className="text-blue-300 hover:text-blue-200 underline">integrations</Link>.</p>
        </div>

        <div className="bg-slate-800/60 border border-blue-400/20 rounded-xl p-6 text-center">
          <p className="text-lg font-bold text-white mb-2">Talk to us</p>
          <p className="text-slate-300 text-sm mb-4">Tell us your company, the audience you want to reach and what you have in mind.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:contact@realestate-analytics.ai?subject=Partnership" className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition-all">Email contact@realestate-analytics.ai</a>
            <a href="https://calendly.com/maarouni/30min-1" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-full border border-slate-500 hover:border-blue-400 text-white font-semibold transition-all">Book a Call</a>
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
