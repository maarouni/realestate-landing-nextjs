import Link from "next/link";

export const metadata = {
  title: "About | RealEstate-Analytics.ai — CCIM-Level Deal Analysis",
  description: "Built by a Bay Area multifamily investor and engineer. RealEstate-Analytics.ai encodes CCIM-level underwriting logic — cap rate, IRR, DSCR, cash-on-cash, and 10-year projections — as free, browser-based software.",
  alternates: { canonical: "https://www.realestate-analytics.ai/about" }
};

export default function About() {
  return (
    <main style={{ background: "#060f1e", minHeight: "100vh", padding: "80px 24px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>

        {/* Breadcrumb */}
        <p style={{ fontSize: "13px", color: "#475569", marginBottom: "32px" }}>
          <Link href="/" style={{ color: "#60a5fa", textDecoration: "none" }}>Home</Link>
          {" / "}
          <span style={{ color: "#64748b" }}>About</span>
        </p>

        {/* Header */}
        <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", color: "#60a5fa", textTransform: "uppercase", marginBottom: "12px" }}>
          About
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#f1f5f9", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "24px" }}>
          Built by an Investor.<br />For Investors.
        </h1>

        {/* Intro */}
        <p style={{ fontSize: "17px", color: "#94a3b8", lineHeight: 1.75, marginBottom: "32px" }}>
          RealEstate-Analytics.ai was built out of frustration with tools that give you a verdict without explaining the math. Every calculator I tried either oversimplified the numbers or buried the assumptions where you couldn't stress-test them. So I built the tool I actually wanted to use.
        </p>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", marginBottom: "32px" }} />

        {/* Who built this */}
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f1f5f9", marginBottom: "16px" }}>Who Built This</h2>
        <p style={{ fontSize: "16px", color: "#94a3b8", lineHeight: 1.75, marginBottom: "16px" }}>
          My name is Masoud Arouni. I'm a Bay Area multifamily investor since 2018, a NorCal CCIM associate member, and an engineer by background. I've been active in Bay Area real estate investment communities including CCRIM, RMA Danville, and Rise360.
        </p>
        <p style={{ fontSize: "16px", color: "#94a3b8", lineHeight: 1.75, marginBottom: "32px" }}>
          I built this platform to encode CCIM-level underwriting logic — cap rate, IRR, DSCR, cash-on-cash return, equity multiple, breakeven year, and 10-year projections — as callable software that any investor, agent, or lender can run in under 60 seconds, free, without a spreadsheet or a login.
        </p>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", marginBottom: "32px" }} />

        {/* Why it exists */}
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f1f5f9", marginBottom: "16px" }}>Why It Exists</h2>
        <p style={{ fontSize: "16px", color: "#94a3b8", lineHeight: 1.75, marginBottom: "16px" }}>
          Most deal analyzers are first-pass filters. They tell you whether something might be worth investigating. What's been missing is the second pass — the one that asks under what conditions a deal pencils, and how much room for error you actually have before it breaks.
        </p>
        <p style={{ fontSize: "16px", color: "#94a3b8", lineHeight: 1.75, marginBottom: "32px" }}>
          This platform stress-tests vacancy, interest rate, and expense scenarios simultaneously so you can see the downside before you commit — not after. The base case almost never kills deals. The downside does.
        </p>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", marginBottom: "32px" }} />

        {/* Podcast */}
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f1f5f9", marginBottom: "16px" }}>Featured On</h2>
        <a href="https://investorfuel.com/real-estate-pros-show/stop-guessing-real-estate-deals-using-predictive-analytics-for-smarter-investing"
          target="_blank" rel="noopener noreferrer"
          style={{
            display: "block", background: "rgba(255,255,255,0.04)",
            border: "0.5px solid rgba(255,255,255,0.09)", borderRadius: "14px",
            padding: "20px 24px", textDecoration: "none", marginBottom: "32px"
          }}>
          <p style={{ fontSize: "12px", fontWeight: 700, color: "#60a5fa", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Investor Fuel — Real Estate Pros Show</p>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#f1f5f9", marginBottom: "6px" }}>
            Stop Guessing Real Estate Deals — Using Predictive Analytics for Smarter Investing
          </p>
          <p style={{ fontSize: "13px", color: "#64748b" }}>investorfuel.com → Listen to the episode →</p>
        </a>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", marginBottom: "32px" }} />

        {/* CTA */}
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f1f5f9", marginBottom: "16px" }}>Try the Platform</h2>
        <p style={{ fontSize: "16px", color: "#94a3b8", lineHeight: 1.75, marginBottom: "24px" }}>
          All tools are free, browser-based, and require no signup. Start with the Single Property Analyzer or explore the full suite below.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link href="/#analyzer" style={{ background: "#2563eb", color: "#fff", padding: "12px 24px", borderRadius: "8px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
            Run a Free Analysis →
          </Link>
          <Link href="/tools" style={{ background: "transparent", color: "#60a5fa", padding: "12px 24px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, textDecoration: "none", border: "0.5px solid rgba(96,165,250,0.3)" }}>
            View All Tools
          </Link>
          <a href="https://calendly.com/maarouni/30min-1" target="_blank" rel="noopener noreferrer"
            style={{ background: "transparent", color: "#94a3b8", padding: "12px 24px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, textDecoration: "none", border: "0.5px solid rgba(255,255,255,0.1)" }}>
            Book a Demo
          </a>
        </div>

      </div>
    </main>
  );
}
