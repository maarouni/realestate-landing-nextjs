export const metadata = {
  title: "Privacy Policy | RealEstate-Analytics.ai",
  description: "How RealEstate-Analytics.ai collects and uses information on our website and in our connector for Claude and other AI assistants.",
  alternates: { canonical: "https://www.realestate-analytics.ai/privacy" },
};

const EFFECTIVE = "October 16, 2026";
const EMAIL = "contact@realestate-analytics.ai";

const h2 = { fontSize: "17px", fontWeight: 700, color: "#f1f5f9", margin: "32px 0 10px" };
const p = { color: "#cbd5e1", fontSize: "15px", lineHeight: 1.75, margin: "0 0 12px" };
const link = { color: "#60a5fa", fontWeight: 600, textDecoration: "none" };
const cell = { textAlign: "left", borderBottom: "1px solid #1e3a5f", padding: "10px 8px", verticalAlign: "top", color: "#cbd5e1" };

const COLLECTED = [
  ["Your email address", "When you sign in to the connector with Google or an access code", "To identify your account and apply your plan"],
  ["Subscription status", "When you use the connector", "We look up your email in Stripe to check for an active subscription"],
  ["Deal inputs (price, rent, expenses, financing terms, comps)", "When your AI assistant calls our engines", "To compute the results you asked for. We don't store them."],
  ["Property and owner lists you submit for grading", "When you ask your AI assistant to prospect a list", "To grade and rank the properties. We don't store them. You're responsible for having the right to use the list."],
  ["Usage counts", "Each analysis", "To enforce the free daily limit and track usage per account"],
  ["Name, email, and payment details", "When you subscribe", "Processed by Stripe. We never see your full card number."],
  ["Site usage data and cookies", "When you browse the website", "Google Analytics and Microsoft Clarity help us understand how the site is used"],
  ["Anything you email us", "When you contact us", "To respond to you"],
];

const Mail = () => <a href={`mailto:${EMAIL}`} style={link}>{EMAIL}</a>;

export default function PrivacyPage() {
  return (
    <main style={{ background: "#060f1e", minHeight: "100vh", padding: "80px 24px 120px" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>
        <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", color: "#60a5fa", textTransform: "uppercase", marginBottom: "10px" }}>
          Legal
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em", marginBottom: "8px" }}>
          Privacy Policy
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "28px" }}>Effective {EFFECTIVE}</p>

        <p style={p}>
          This policy explains how RealEstate-Analytics AI LLC (&ldquo;we,&rdquo; &ldquo;us&rdquo;) collects and uses
          information when you visit realestate-analytics.ai or use the RealEstate-Analytics.ai connector in Claude or another
          AI assistant.
        </p>

        <h2 style={h2}>Information we collect</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", margin: "8px 0 12px" }}>
            <thead>
              <tr>
                {["What", "When", "Why"].map((t) => <th key={t} style={{ ...cell, color: "#f1f5f9" }}>{t}</th>)}
              </tr>
            </thead>
            <tbody>
              {COLLECTED.map(([what, when, why]) => (
                <tr key={what}><td style={cell}>{what}</td><td style={cell}>{when}</td><td style={cell}>{why}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          We don&rsquo;t receive your conversations with Claude or any other AI assistant, or the documents you share with it,
          only the inputs it sends to our engines. Your conversations are governed by that assistant&rsquo;s own privacy policy.
        </p>

        <h2 style={h2}>Google sign-in</h2>
        <p style={p}>
          When you sign in with Google, we request only your email address. We don&rsquo;t access your Google contacts, files,
          or anything else. Our use of information received from Google APIs adheres to the{" "}
          <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" style={link}>
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </p>

        <h2 style={h2}>How long we keep it</h2>
        <ul style={{ ...p, paddingLeft: "20px" }}>
          <li>Property lists, deal inputs, and results: not stored.</li>
          <li>Subscription status: cached for up to one hour.</li>
          <li>Free-plan daily counters: two days.</li>
          <li>Monthly usage counts: about 13 months.</li>
          <li>Sign-in connections: until you disconnect, or after 90 days without use. Access tokens are stored only as secure hashes.</li>
        </ul>

        <h2 style={h2}>Who we share it with</h2>
        <p style={p}>
          We don&rsquo;t sell or rent personal information, and we don&rsquo;t use it for advertising. We share it only with
          service providers who run parts of the service for us: Cloudflare (hosting), Google (sign-in and analytics),
          Microsoft (Clarity analytics), Stripe (payments), and Calendly (scheduling). We may also disclose information if the
          law requires it.
        </p>

        <h2 style={h2}>Your choices and rights</h2>
        <p style={p}>
          You can disconnect the connector at any time in your AI assistant&rsquo;s settings. To see, correct, or delete the
          information we hold about you, email <Mail />. California residents have the right to know, correct, and delete
          their personal information, and we don&rsquo;t sell or share it as those terms are defined under California law.
        </p>

        <h2 style={h2}>Children</h2>
        <p style={p}>Our services are for adults and aren&rsquo;t directed to anyone under 18.</p>

        <h2 style={h2}>Changes</h2>
        <p style={p}>If we change this policy, we&rsquo;ll update the effective date above.</p>

        <h2 style={h2}>Contact</h2>
        <p style={p}>
          RealEstate-Analytics AI LLC, Pleasanton, California
          <br />
          <Mail />
        </p>
      </div>
    </main>
  );
}
