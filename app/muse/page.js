import Link from "next/link";

export const metadata = {
  title: "RealEstate-Analytics.ai for Muse | Deal Analysis and Lead Grading",
  description:
    "Analyze rental and commercial deals and grade off-market seller lists with deterministic math, from inside Muse. Cap rate, DSCR, IRR, comps, and stress tests.",
  alternates: { canonical: "https://www.realestate-analytics.ai/muse" },
};

const CONNECTOR_URL = "https://mcp.realestate-analytics.ai/mcp";
const DEMO_URL = "https://calendly.com/maarouni/30min-1";

const card = { background: "#0c1a2e", border: "1px solid #1e3a5f", borderRadius: "16px", padding: "28px 24px", marginBottom: "20px" };
const h2 = { fontSize: "18px", fontWeight: 700, color: "#f1f5f9", margin: "0 0 12px" };
const body = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.7 };
const tile = { background: "#060f1e", border: "1px solid #1e3a5f", borderRadius: "12px", padding: "16px" };
const tileName = { color: "#e0ac4c", fontSize: "14px", fontWeight: 700, margin: 0 };
const tileText = { color: "#cbd5e1", fontSize: "13px", lineHeight: 1.6, margin: "6px 0 0" };
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" };

const TOOLS = [
  ["Rental property analysis", "Cap rate, cash-on-cash, DSCR, IRR, equity multiple, year-by-year cash flow, and a lender view with reserves."],
  ["Commercial property analysis", "NOI, going-in and credit-adjusted cap rate, IRR net of broker fee and loan payoff, and Gross, Modified Gross, and NNN leases."],
  ["Comparable sales", "$/unit, $/SF, and cap rate per comp, the comp median and range, and implied value by three methods."],
  ["Stress tests", "Up to 10 what-if scenarios side by side: rate, vacancy, rent, appreciation, and hold period."],
  ["Deal Radar lead grading", "Owner lists graded A to D for seller motivation and ranked by distress and urgency, up to 2,000 properties per run."],
];

const WHY = [
  ["Deterministic", "Every number comes from a fixed calculation engine, not the model. The same inputs always give the same answer."],
  ["Auditable", "Every assumption is shown, so you can check a deal before you act on it."],
  ["Built by a practitioner", "Designed by a Bay Area multifamily investor and NorCal CCIM associate member, on CCIM underwriting methods."],
];

export default function MusePage() {
  return (
    <main style={{ background: "#060f1e", minHeight: "100vh", padding: "80px 24px 120px" }}>
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>
        <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", color: "#60a5fa", textTransform: "uppercase", marginBottom: "10px" }}>
          For Muse
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "14px" }}>
          Analyze a deal or grade a seller list inside Muse, with math you can audit.
        </h1>
        <p style={{ fontSize: "16px", color: "#94a3b8", lineHeight: 1.7, marginBottom: "28px" }}>
          RealEstate-Analytics.ai connects to Muse as a connector. Ask Muse about a rental or commercial deal, a comp set, or a
          seller list, and get answers from our fixed calculation engines.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
          <Link href="/pricing" style={{ backgroundColor: "#e0ac4c", color: "#0c1a2e", fontSize: "14px", fontWeight: 700, textDecoration: "none", padding: "12px 20px", borderRadius: "8px" }}>
            See pricing
          </Link>
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" style={{ color: "#f1f5f9", fontSize: "14px", fontWeight: 600, textDecoration: "none", padding: "12px 20px", borderRadius: "8px", boxShadow: "inset 0 0 0 1px #1e3a5f" }}>
            Book a demo
          </a>
        </div>

        <section style={card}>
          <h2 style={h2}>What you can do</h2>
          <div style={grid}>
            {TOOLS.map(([name, text]) => (
              <div key={name} style={tile}>
                <p style={tileName}>{name}</p>
                <p style={tileText}>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={card}>
          <h2 style={h2}>Why it&rsquo;s different</h2>
          <ul style={{ ...body, paddingLeft: "20px", margin: 0 }}>
            {WHY.map(([name, text]) => (
              <li key={name} style={{ margin: "8px 0" }}>
                <strong style={{ color: "#f1f5f9" }}>{name}:</strong> {text}
              </li>
            ))}
          </ul>
        </section>

        <section id="connect" style={card}>
          <h2 style={h2}>Connect in Muse</h2>
          <p style={{ ...body, margin: "0 0 12px" }}>
            Our connector endpoint for Muse:
          </p>
          <code style={{ display: "block", background: "#060f1e", border: "1px solid #1e3a5f", borderRadius: "8px", padding: "10px 12px", color: "#f1f5f9", fontSize: "13px", overflowX: "auto", whiteSpace: "nowrap" }}>
            {CONNECTOR_URL}
          </code>
          <p style={{ color: "#94a3b8", fontSize: "13px", margin: "14px 0 0" }}>
            Access is by request. Email{" "}
            <a href="mailto:contact@realestate-analytics.ai" style={{ color: "#60a5fa", fontWeight: 600, textDecoration: "none" }}>
              contact@realestate-analytics.ai
            </a>{" "}
            to get connected. Step-by-step setup for Muse will be posted here once it&rsquo;s confirmed.
          </p>
        </section>

        <section style={card}>
          <h2 style={h2}>Pricing</h2>
          <p style={{ ...body, margin: 0 }}>
            <strong style={{ color: "#e0ac4c" }}>Free:</strong> 5 analyses a day.{" "}
            <strong style={{ color: "#e0ac4c" }}>Pro:</strong> $45/month for lead grading, comps, and full deal reviews.
          </p>
        </section>

        <p style={{ color: "#94a3b8", fontSize: "13px" }}>
          Results are deterministic calculations from the inputs you provide, not appraisals or investment advice. See our{" "}
          <Link href="/privacy" style={{ color: "#60a5fa", fontWeight: 600, textDecoration: "none" }}>Privacy Policy</Link>{" "}
          and{" "}
          <Link href="/terms" style={{ color: "#60a5fa", fontWeight: 600, textDecoration: "none" }}>Terms</Link>.
        </p>
      </div>
    </main>
  );
}
