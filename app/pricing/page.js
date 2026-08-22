export default function PricingPage() {
  return (
    <main style={{ background: "#060f1e", minHeight: "100vh", padding: "100px 24px 120px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "0.2em",
            color: "#60a5fa",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          Pricing
        </p>
        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            color: "#f1f5f9",
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          Free to try. Built for serious deals.
        </h1>
        <p style={{ fontSize: "16px", color: "#94a3b8", maxWidth: "600px", margin: "0 auto 56px" }}>
          Our core calculators are free, no signup required. For full deal reviews,
          prospecting, and custom underwriting, we work directly with investors, buyers,
          and lending professionals.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
            marginBottom: "56px",
          }}
        >
          {/* Free tier */}
          <div
            style={{
              background: "#0c1a2e",
              border: "1px solid #4ade80",
              borderRadius: "16px",
              padding: "32px 24px",
              textAlign: "left",
            }}
          >
            <p style={{ fontSize: "13px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", marginBottom: "8px" }}>
              Quick Deal Analyzer
            </p>
            <p style={{ fontSize: "32px", fontWeight: 800, color: "#4ade80", marginBottom: "16px" }}>Free</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#cbd5e1", fontSize: "14px", lineHeight: "2" }}>
              <li>Cap rate, cash-on-cash, IRR</li>
              <li>10-year cash flow projection</li>
              <li>Instant PDF report</li>
              <li>No signup required</li>
            </ul>
            <a
              href="/#quick-analyzer"
              style={{
                display: "inline-block",
                marginTop: "24px",
                fontSize: "14px",
                fontWeight: 600,
                color: "#60a5fa",
                textDecoration: "none",
              }}
            >
              Try it now &#8594;
            </a>
          </div>

          {/* Full review tier */}
          <div
            style={{
              background: "#0c1a2e",
              border: "1px solid #e0ac4c",
              borderRadius: "16px",
              padding: "32px 24px",
              textAlign: "left",
            }}
          >
            <p style={{ fontSize: "13px", fontWeight: 700, color: "#e0ac4c", textTransform: "uppercase", marginBottom: "8px" }}>
              Full Deal Review
            </p>
            <p style={{ fontSize: "20px", fontWeight: 700, color: "#f1f5f9", marginBottom: "16px" }}>
              $45/month
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#cbd5e1", fontSize: "14px", lineHeight: "2" }}>
              <li>Deal prospecting &amp; sourcing</li>
              <li>Full comps &amp; market analysis</li>
              <li>CCIM-grade underwriting</li>
              <li>Priority underwriting turnaround</li>
            </ul>

            <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href="https://buy.stripe.com/6oU8wP2njdOvefSafr48000"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  backgroundColor: "#e0ac4c",
                  color: "#0c1a2e",
                  fontSize: "14px",
                  fontWeight: 700,
                  textDecoration: "none",
                  padding: "12px 20px",
                  borderRadius: "8px",
                }}
              >
                Subscribe now &mdash; $45/month
              </a>
              <p style={{ fontSize: "13px", color: "#cbd5e1", margin: 0 }}>
                Have questions?{" "}
                <a
                  href="mailto:contact@realestate-analytics.ai"
                  style={{ fontWeight: 600, color: "#60a5fa", textDecoration: "none" }}
                >
                  Email us
                </a>
                {" "}or{" "}
                <a
                  href="https://calendly.com/maarouni/30min-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: 600, color: "#60a5fa", textDecoration: "none" }}
                >
                  book a call
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <p style={{ fontSize: "13px", color: "#64748b" }}>
          Subscription plans for investors and lending professionals are coming soon.
        </p>
      </div>
    </main>
  );
}
