import Link from "next/link";

export const metadata = {
  title: "RealEstate-Analytics.ai for Microsoft Copilot | CRE Underwriting for Firms & Lenders",
  description:
    "Put a CRE underwriting analyst inside your team's Microsoft Copilot. Deterministic, auditable cap rate, NOI, DSCR, IRR, comps, stress tests, and acquisition pipeline grading for brokerages, lenders, and investment firms.",
  alternates: { canonical: "https://www.realestate-analytics.ai/copilot" },
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

const AUDIENCES = [
  ["CRE brokerages", "Screen listings and OMs in minutes, build comp sets, and back a broker opinion of value with numbers a client can check."],
  ["Lenders and credit teams", "DSCR by year, reserve needs, and rate, vacancy, and rent stress tests on any deal a borrower brings, before it reaches committee."],
  ["Investment and acquisition teams", "Grade a pipeline of off-market owners, underwrite the best ones, and compare IRR net of fees and payoff across scenarios."],
  ["Family offices and wealth advisors", "Independent second-opinion underwriting on deals presented to clients, with every assumption shown."],
];

const ENGINE = [
  ["Commercial underwriting", "NOI, going-in and credit-adjusted cap rate, cash-on-cash, DSCR, IRR net of broker fee and loan payoff, equity multiple, and a year-by-year cash flow."],
  ["Leases and tenants", "Gross, Modified Gross, and NNN structures, tenant credit quality, and scheduled rent bumps."],
  ["Lender view", "DSCR by year, interest-only or amortizing debt, and the reserves a deal needs to stay covered."],
  ["Stress tests", "Up to 10 named scenarios side by side: rate, vacancy, rent, appreciation, hold period."],
  ["Comparable sales", "$/unit, $/SF, and cap rate per comp, the comp median and range, and implied value by three methods."],
  ["Deal Radar pipeline grading", "Owner lists graded A to D for seller motivation and ranked by distress and urgency, up to 2,000 properties per run."],
];

const WHY = [
  ["Deterministic and auditable", "Every number comes from a fixed calculation engine, not the AI. Same inputs, same answer, every time, so credit and IC reviews can trace it."],
  ["In the tools your team uses", "Copilot and Teams for Microsoft shops; the same engine also runs in Claude and ChatGPT."],
  ["Your data stays yours", "We receive only the deal inputs Copilot sends. We don't see your conversations or store your deals, lists, or results."],
  ["Built by a practitioner", "Designed by a Bay Area multifamily investor and NorCal CCIM associate member, on CCIM underwriting methods."],
];

export default function CopilotPage() {
  return (
    <main style={{ background: "#060f1e", minHeight: "100vh", padding: "80px 24px 120px" }}>
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>
        <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", color: "#60a5fa", textTransform: "uppercase", marginBottom: "10px" }}>
          For Microsoft Copilot and Teams
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "14px" }}>
          Put a CRE underwriting analyst inside your team&rsquo;s Copilot.
        </h1>
        <p style={{ fontSize: "16px", color: "#94a3b8", lineHeight: 1.7, marginBottom: "28px" }}>
          For brokerages, lenders, and investment firms on Microsoft 365. Screen deals, stress-test debt, and grade acquisition
          pipelines without leaving Copilot, with every number produced by a deterministic engine your credit committee can audit.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#e0ac4c", color: "#0c1a2e", fontSize: "14px", fontWeight: 700, textDecoration: "none", padding: "12px 20px", borderRadius: "8px" }}>
            Book a team pilot
          </a>
          <a href="#setup" style={{ color: "#f1f5f9", fontSize: "14px", fontWeight: 600, textDecoration: "none", padding: "12px 20px", borderRadius: "8px", boxShadow: "inset 0 0 0 1px #1e3a5f" }}>
            Admin setup steps
          </a>
        </div>

        <section style={card}>
          <h2 style={h2}>Who it&rsquo;s for</h2>
          <div style={grid}>
            {AUDIENCES.map(([name, text]) => (
              <div key={name} style={tile}>
                <p style={tileName}>{name}</p>
                <p style={tileText}>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={card}>
          <h2 style={h2}>A commercial engine, not a chatbot guess</h2>
          <div style={grid}>
            {ENGINE.map(([name, text]) => (
              <div key={name} style={tile}>
                <p style={tileName}>{name}</p>
                <p style={tileText}>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={card}>
          <h2 style={h2}>Why firms use it</h2>
          <ul style={{ ...body, paddingLeft: "20px", margin: 0 }}>
            {WHY.map(([name, text]) => (
              <li key={name} style={{ margin: "8px 0" }}>
                <strong style={{ color: "#f1f5f9" }}>{name}:</strong> {text}
              </li>
            ))}
          </ul>
        </section>

        <section id="setup" style={card}>
          <h2 style={h2}>Add it to your Copilot (for your Microsoft 365 admin)</h2>
          <ol style={{ ...body, paddingLeft: "20px", margin: 0 }}>
            <li style={{ margin: "8px 0" }}>In <strong>Copilot Studio</strong>, open your agent (or create one) and go to <strong>Tools</strong>.</li>
            <li style={{ margin: "8px 0" }}>
              Select <strong>Add a tool → New tool → Model Context Protocol</strong>. Name it <strong>RealEstate-Analytics</strong> and
              enter the server URL:
              <code style={{ display: "block", background: "#060f1e", border: "1px solid #1e3a5f", borderRadius: "8px", padding: "10px 12px", margin: "10px 0", color: "#f1f5f9", fontSize: "13px", overflowX: "auto", whiteSpace: "nowrap" }}>
                {CONNECTOR_URL}
              </code>
            </li>
            <li style={{ margin: "8px 0" }}>Choose <strong>OAuth 2.0 → Dynamic discovery</strong>, select <strong>Create</strong>, then <strong>Next</strong>.</li>
            <li style={{ margin: "8px 0" }}>Create a connection, sign in, and select <strong>Add to agent</strong>. Publish the agent to Microsoft 365 Copilot and Teams for your team.</li>
          </ol>
          <p style={{ color: "#94a3b8", fontSize: "13px", margin: "14px 0 0" }}>
            Requires Copilot Studio in your tenant. We&rsquo;re happy to walk your admin through it on a short call. A one-click
            listing in the Microsoft Agent Store is planned.
          </p>
        </section>

        <section style={{ ...card, borderColor: "#e0ac4c" }}>
          <h2 style={h2}>Team pilots and pricing</h2>
          <p style={{ ...body, margin: 0 }}>
            <strong style={{ color: "#4ade80" }}>Team pilot:</strong> try it with your analysts on live deals before you commit.
            <br />
            <strong style={{ color: "#e0ac4c" }}>Individual seats:</strong> Free for 5 analyses a day, or Full Deal Review at $45/month.
            Team and enterprise pricing on request.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "16px" }}>
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#e0ac4c", color: "#0c1a2e", fontSize: "14px", fontWeight: 700, textDecoration: "none", padding: "12px 20px", borderRadius: "8px" }}>
              Book a team pilot
            </a>
            <Link href="/pricing" style={{ color: "#f1f5f9", fontSize: "14px", fontWeight: 600, textDecoration: "none", padding: "12px 20px", borderRadius: "8px", boxShadow: "inset 0 0 0 1px #1e3a5f" }}>
              See pricing
            </Link>
          </div>
        </section>

        <section style={card}>
          <h2 style={h2}>Security and data</h2>
          <p style={{ ...body, margin: 0 }}>
            Sign-in uses OAuth 2.1 with PKCE. We receive only what Copilot sends to our engines (deal numbers or the property list
            provided) and the signed-in email. We don&rsquo;t see your conversations, and we don&rsquo;t store your deals, lists,
            or results. Details are in our{" "}
            <Link href="/privacy" style={{ color: "#60a5fa", fontWeight: 600, textDecoration: "none" }}>Privacy Policy</Link>.
          </p>
        </section>

        <p style={{ color: "#94a3b8", fontSize: "13px" }}>
          Questions?{" "}
          <a href="mailto:contact@realestate-analytics.ai" style={{ color: "#60a5fa", fontWeight: 600, textDecoration: "none" }}>
            contact@realestate-analytics.ai
          </a>{" "}
          · Results are deterministic calculations from the inputs you provide, not appraisals or investment advice.
        </p>
      </div>
    </main>
  );
}
