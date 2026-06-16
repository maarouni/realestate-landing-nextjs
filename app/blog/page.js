import Link from "next/link";

export const metadata = {
  title: "Real Estate Investment Blog | RealEstate-Analytics.ai",
  description: "CCIM-level guides on multifamily analysis, cap rates, T-12s, and AI-powered deal tools.",
};

const POSTS = [
  { href: "/blog/how-to-analyze-multifamily-deal", title: "How to Analyze a Multifamily Deal", desc: "7-step CCIM underwriting framework — NOI, cap rate, DSCR, IRR, stress test.", tag: "Guide" },
  { href: "/blog/what-is-a-good-cap-rate-2026", title: "What Is a Good Cap Rate in 2026?", desc: "Market benchmarks by metro and asset class. Bay Area vs Sun Belt vs Midwest.", tag: "Market Analysis" },
  { href: "/blog/zipcode-market-analysis", title: "ZIP Code Market Analysis", desc: "Vacancy, rent trends, and economic data sources CCIM analysts actually use.", tag: "Research" },
  { href: "/blog/load-your-om", title: "Load Your OM", desc: "AI extracts NOI, cap rate, and rent roll from any Offering Memorandum PDF.", tag: "AI Feature" },
  { href: "/blog/load-t12", title: "Load Your T-12", desc: "AI trailing income statement extraction — red flags, normalization guide.", tag: "AI Feature" },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen px-4 py-12 md:px-16 max-w-5xl mx-auto">
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-300">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">Blog</span>
      </nav>
      <h1 className="text-4xl font-bold mb-3 text-slate-50">Real Estate Investment Blog</h1>
      <p className="text-slate-300 text-lg mb-12 max-w-2xl">
        CCIM-level guides on deal analysis, market research, and AI-powered underwriting tools.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {POSTS.map((p) => (
          <Link key={p.href} href={p.href}
            className="block bg-slate-900/60 border border-slate-700 rounded-2xl p-6 hover:border-blue-400 transition-all shadow-lg group">
            <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 border border-blue-400/20 px-2 py-1 rounded-full">
              {p.tag}
            </span>
            <h2 className="text-xl font-semibold text-white mt-3 mb-2 group-hover:text-blue-300 transition-colors">{p.title}</h2>
            <p className="text-slate-400 text-sm">{p.desc}</p>
            <p className="text-blue-400 text-sm font-semibold mt-4">Read More →</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
