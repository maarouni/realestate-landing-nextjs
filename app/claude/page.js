import Link from "next/link";

export const metadata = {
  title: "RealEstate-Analytics.ai for Claude | Prospect, Grade & Analyze Deals",
  description:
    "Prospect, grade, and analyze off- or on-market deals inside Claude with deterministic math: Deal Radar seller grades, comps, cap rate, DSCR, IRR, and stress tests.",
  alternates: { canonical: "https://www.realestate-analytics.ai/claude" },
};

const CONNECTOR_URL = "https://mcp.realestate-analytics.ai/mcp";

const card = { background: "#0c1a2e", border: "1px solid #1e3a5f", borderRadius: "16px", padding: "28px 24px", marginBottom: "20px" };
const h2 = { fontSize: "18px", fontWeight: 700, color: "#f1f5f9", margin: "0 0 12px" };
const body = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.7 };
const tool = { background: "#060f1e", border: "1px solid #1e3a5f", borderRadius: "12px", padding: "16px" };
const toolName = { color: "#e0ac4c", fontSize: "14px", fontWeight: 700, margin: 0 };
const toolText = { color: "#cbd5e1", fontSize: "13px", lineHeight: 1.6, margin: "6px 0 0" };

const FLOW = [
  ["Prospect", "drop in an off-market list from PropertyRadar, Active Farm, Forever Farm, or a skip-trace file, with its columns as exported."],
  ["Grade", "Deal Radar grades every owner A to D for motivation, filters out government, bank, and duplicate records, and ranks by distress and urgency (tax arrears, NOD/NTS, auction dates, probate, divorce, vacancy, absentee)."],
  ["Comp", "drop in the MLS comp sheet. Our engine computes $/unit, $/SF, and cap rate for each comp, shows where your deal sits, and gives an implied value range."],
  ["Analyze", "drop in the MLS PDF, OM, or T-12. Claude reads the numbers, and our engine underwrites the deal and stress-tests it."],
  ["Decide", "cap rate, cash-on-cash, DSCR, IRR, comps, and downside cases side by side, with every input shown."],
  ["Report", "Claude turns the results into an investment memo or PDF and drafts the email to your partner or lender."],
];

const TOOLS = [
  ["Deal Radar prospecting", "A/B/C/D seller grades, verified-lead tiers, urgency, and contact checks on lists of up to 2,000 properties."],
  ["Comparable sales", "$/unit, $/SF, and cap rate per comp, comp median and range, and implied value by three methods."],
  ["Rental property analysis", "Cap rate, cash-on-cash, DSCR, IRR (operating and with sale), equity multiple, year-by-year cash flow, and a lender view with reserves."],
  ["Commercial property analysis", "NOI, going-in and credit-adjusted cap rate, IRR net of broker fee and loan payoff. Gross, Modified Gross, and NNN leases; scheduled rent bumps."],
  ["Stress tests", "Up to 10 what-if scenarios side by side: rate, vacancy, rent, appreciation, hold period."],
];

export default function ClaudePage() {
  return (
    <main style={{ background: "#060f1e", minHeight: "100vh", padding: "80px 24px 120px" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>
        <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", color: "#60a5fa", textTransform: "uppercase", marginBottom: "10px" }}>
          For Claude
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "14px" }}>
          Prospect, grade, and analyze off- or on-market deals inside Claude, with math you can audit.
        </h1>
        <p style={{ fontSize: "16px", color: "#94a3b8", lineHeight: 1.7, marginBottom: "40px" }}>
          Add RealEstate-Analytics.ai to Claude, drop in a lead list, an MLS PDF, an OM, or a T-12, and go from prospect to
          decision in one conversation. Every grade and every number comes from our fixed engines, the same ones behind our
          analyzers, so the same inputs always give the same answer.
        </p>

        <section style={card}>
          <h2 style={h2}>From list to decision</h2>
          <ol style={{ ...body, paddingLeft: "20px", margin: 0 }}>
            {FLOW.map(([step, text]) => (
              <li key={step} style={{ margin: "8px 0" }}>
                <strong style={{ color: "#f1f5f9" }}>{step}:</strong> {text}
              </li>
            ))}
          </ol>
        </section>

        <section style={card}>
          <h2 style={h2}>What&rsquo;s inside</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            {TOOLS.map(([name, text]) => (
              <div key={name} style={tool}>
                <p style={toolName}>{name}</p>
                <p style={toolText}>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={card}>
          <h2 style={h2}>Connect in one minute</h2>
          <ol style={{ ...body, paddingLeft: "20px", margin: 0 }}>
            <li style={{ margin: "8px 0" }}>In Claude, open <strong>Settings → Customize → Connectors</strong>.</li>
            <li style={{ margin: "8px 0" }}>
              Click <strong>Add → Add custom connector</strong>, name it <strong>RealEstate-Analytics</strong>, and paste:
              <code style={{ display: "block", background: "#060f1e", border: "1px solid #1e3a5f", borderRadius: "8px", padding: "10px 12px", margin: "10px 0", color: "#f1f5f9", fontSize: "13px", overflowX: "auto", whiteSpace: "nowrap" }}>
                {CONNECTOR_URL}
              </code>
            </li>
            <li style={{ margin: "8px 0" }}>Click <strong>Continue → Add → Connect</strong>, then sign in with Google.</li>
            <li style={{ margin: "8px 0" }}>
              In a chat, turn it on from the <strong>+</strong> menu and ask, for example:{" "}
              <em>&ldquo;Analyze a $1.45M fourplex: $8,460/mo rent, $2,855/mo expenses, 20% down at 6.5%.&rdquo;</em>
            </li>
          </ol>
          <p style={{ color: "#94a3b8", fontSize: "13px", margin: "14px 0 0" }}>
            Custom connectors require a paid Claude plan. Once we&rsquo;re listed in Claude&rsquo;s Connectors Directory,
            you&rsquo;ll also be able to add us from there.
          </p>
        </section>

        <section style={{ ...card, borderColor: "#e0ac4c" }}>
          <h2 style={h2}>Plans</h2>
          <p style={{ ...body, margin: 0 }}>
            <strong style={{ color: "#4ade80" }}>Free:</strong> 5 analyses a day per account.
            <br />
            <strong style={{ color: "#e0ac4c" }}>Full Deal Review, $45/month:</strong> unlimited analyses in Claude, plus
            everything in the plan. Subscribe with the same email you sign in with.
          </p>
          <Link href="/pricing" style={{ display: "inline-block", marginTop: "16px", backgroundColor: "#e0ac4c", color: "#0c1a2e", fontSize: "14px", fontWeight: 700, textDecoration: "none", padding: "12px 20px", borderRadius: "8px" }}>
            See pricing
          </Link>
        </section>

        <section style={card}>
          <h2 style={h2}>Your data</h2>
          <p style={{ ...body, margin: 0 }}>
            We receive only what Claude sends to our engines (deal numbers or the property list you dropped in) and the email
            you sign in with. We don&rsquo;t see your conversations, and we don&rsquo;t store your lists, deal inputs, or
            results. Details are in our{" "}
            <Link href="/privacy" style={{ color: "#60a5fa", fontWeight: 600, textDecoration: "none" }}>Privacy Policy</Link>.
          </p>
        </section>

        <p style={{ color: "#94a3b8", fontSize: "13px" }}>
          Questions?{" "}
          <a href="mailto:contact@realestate-analytics.ai" style={{ color: "#60a5fa", fontWeight: 600, textDecoration: "none" }}>
            contact@realestate-analytics.ai
          </a>{" "}
          · Results are deterministic calculations from the inputs you provide, not investment advice.
        </p>
      </div>
    </main>
  );
}
