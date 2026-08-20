import Link from "next/link";

export const metadata = {
  title: "Free Real Estate Analysis Tools | RealEstate-Analytics.ai",
  description:
    "Free CCIM-level real estate calculators: cap rate, IRR, DSCR, cash-on-cash, tenant credit, lease type analysis. No signup, instant results.",
};

const TOOLS = [
  { href: "/tools/cap-rate-calculator", label: "Cap Rate Calculator", desc: "NOI ÷ price. Instant cap rate with deal grading and 2026 market benchmarks.", badge: "Most Popular" },
  { href: "/tools/irr-calculator", label: "IRR Calculator", desc: "Internal rate of return over any hold period. Newton-Raphson solver with equity multiple.", badge: null },
  { href: "/tools/dscr-calculator", label: "DSCR Calculator", desc: "Debt service coverage ratio. Calculates monthly payment and lender qualification.", badge: null },
  { href: "/tools/cash-on-cash-calculator", label: "Cash-on-Cash Calculator", desc: "Annual levered yield on invested equity including closing costs and repairs.", badge: null },
  { href: "/tools/tenant-credit", label: "Tenant Credit Analysis", desc: "Credit tier, rent-to-income ratio, and DTI scoring for rental applicants.", badge: null },
  { href: "/tools/lease-type", label: "Lease Type Analyzer", desc: "NNN vs Gross vs Modified Gross — expense responsibility and cap rate implications.", badge: null },
];

export default function ToolsIndex() {
  return (
    <main className="min-h-screen px-4 py-12 md:px-16 max-w-5xl mx-auto">
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-300">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">Tools</span>
      </nav>

      <h1 className="text-4xl font-bold mb-3">Free Real Estate Analysis Tools</h1>
      <p className="text-slate-300 text-lg mb-12 max-w-2xl">
        CCIM-level calculators for investors, agents, lenders, and property managers.
        No signup. No spreadsheets. Instant results in your browser.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {TOOLS.map((t) => (
          <Link key={t.href} href={t.href}
            className="block bg-slate-900/60 border border-slate-700 rounded-2xl p-6 hover:border-blue-400 transition-all shadow-lg group">
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">{t.label}</h2>
              {t.badge && (
                <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 border border-blue-400/20 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                  {t.badge}
                </span>
              )}
            </div>
            <p className="text-slate-400 text-sm">{t.desc}</p>
            <p className="text-blue-400 text-sm font-semibold mt-4 group-hover:translate-x-1 transition-transform">Open Tool →</p>
          </Link>
        ))}
      </div>

      <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Quick Deal Analyzer — Free Version</h2>
        <p className="text-slate-300 mb-6 max-w-xl mx-auto">
          All metrics in one place — cap rate, IRR, DSCR, cash-on-cash, equity multiple,
          10-year projections, stress testing, and AI-generated PDF report.
        </p>
        <a href="https://www.realestate-analytics.ai/#try-it"
          className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition-all">
          Try the Full Analyzer — Free →
        </a>
      </div>
    </main>
  );
}
