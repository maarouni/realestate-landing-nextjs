export const metadata = {
  title: "Terms of Service | RealEstate-Analytics.ai",
  description: "The terms that govern use of the RealEstate-Analytics.ai website, calculators, and connector for Claude, ChatGPT, and other AI assistants.",
  alternates: { canonical: "https://www.realestate-analytics.ai/terms" },
};

const EFFECTIVE = "October 20, 2026";
const EMAIL = "contact@realestate-analytics.ai";

const h2 = { fontSize: "17px", fontWeight: 700, color: "#f1f5f9", margin: "32px 0 10px" };
const p = { color: "#cbd5e1", fontSize: "15px", lineHeight: 1.75, margin: "0 0 12px" };
const link = { color: "#60a5fa", fontWeight: 600, textDecoration: "none" };

const Mail = () => <a href={`mailto:${EMAIL}`} style={link}>{EMAIL}</a>;

export default function TermsPage() {
  return (
    <main style={{ background: "#060f1e", minHeight: "100vh", padding: "80px 24px 120px" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>
        <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", color: "#60a5fa", textTransform: "uppercase", marginBottom: "10px" }}>
          Legal
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em", marginBottom: "8px" }}>
          Terms of Service
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "28px" }}>Effective {EFFECTIVE}</p>

        <p style={p}>
          These terms govern your use of realestate-analytics.ai, its calculators and tools, and the RealEstate-Analytics.ai
          connector in Claude, ChatGPT, or another AI assistant (together, the &ldquo;Service&rdquo;), provided by
          RealEstate-Analytics AI LLC (&ldquo;we,&rdquo; &ldquo;us&rdquo;). By using the Service, you agree to these terms.
        </p>

        <h2 style={h2}>Who can use it</h2>
        <p style={p}>
          You must be at least 18 and able to enter a binding contract. If you use the Service for a company, you confirm you
          can accept these terms on its behalf.
        </p>

        <h2 style={h2}>What the Service does</h2>
        <p style={p}>
          The Service runs fixed calculations on the inputs you or your AI assistant provide: underwriting metrics such as cap
          rate, cash-on-cash return, DSCR, IRR, and equity multiple; comparable-sales analysis; scenario stress tests; and
          grading of property and owner lists you submit. Results depend entirely on those inputs and on the assumptions shown
          with each result.
        </p>

        <h2 style={h2}>Not professional advice</h2>
        <p style={p}>
          Results are for information and analysis only. They are not investment, financial, legal, tax, lending, or appraisal
          advice, and they are not an appraisal or a guarantee of any return. Verify all figures and assumptions, and consult
          qualified professionals before making a decision. You are solely responsible for your investment decisions.
        </p>

        <h2 style={h2}>Your accounts and plans</h2>
        <p style={p}>
          The free plan includes a limited number of analyses per day. Paid subscriptions are billed monthly through Stripe at
          the price shown on our <a href="/pricing" style={link}>pricing page</a> and renew until you cancel. You can cancel at
          any time, and cancellation takes effect at the end of the current billing period. Fees already paid are not refunded
          except where the law requires it. We may change prices with at least 30 days&rsquo; notice. Keep your sign-in secure;
          you are responsible for activity under your account.
        </p>

        <h2 style={h2}>Your content and lists</h2>
        <p style={p}>
          You keep ownership of the deal inputs, documents, and lists you submit. You give us permission to process them only
          to provide the Service, as described in our <a href="/privacy" style={link}>Privacy Policy</a>. You confirm that you
          have the right to use any property or owner data you submit, and that you will use contact information and lead lists
          in line with applicable laws, including telemarketing, do-not-call, anti-spam, and fair housing laws.
        </p>

        <h2 style={h2}>Acceptable use</h2>
        <ul style={{ ...p, paddingLeft: "20px" }}>
          <li>Don&rsquo;t use the Service for anything unlawful, fraudulent, or discriminatory.</li>
          <li>Don&rsquo;t try to break, overload, reverse-engineer, or get around usage limits or security of the Service.</li>
          <li>Don&rsquo;t resell or redistribute the Service or its outputs as your own product without our written permission.</li>
        </ul>

        <h2 style={h2}>Third-party services</h2>
        <p style={p}>
          The connector runs inside AI assistants we don&rsquo;t control, such as Claude and ChatGPT, and relies on providers
          such as Cloudflare, Google, and Stripe. Your use of those assistants and services is governed by their own terms. We
          aren&rsquo;t responsible for how an AI assistant interprets, summarizes, or presents our results.
        </p>

        <h2 style={h2}>Our intellectual property</h2>
        <p style={p}>
          The Service, including its calculation engines, software, design, and content, belongs to RealEstate-Analytics AI LLC.
          You may use the results you generate for your own business purposes.
        </p>

        <h2 style={h2}>Disclaimers</h2>
        <p style={p}>
          The Service is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties of any kind, including
          warranties of accuracy, fitness for a particular purpose, and non-infringement. We don&rsquo;t promise the Service
          will be uninterrupted or error-free.
        </p>

        <h2 style={h2}>Limitation of liability</h2>
        <p style={p}>
          To the fullest extent the law allows, we aren&rsquo;t liable for any indirect, incidental, special, consequential, or
          punitive damages, or for lost profits, investment losses, or lost data. Our total liability for any claim relating to
          the Service is limited to the amount you paid us in the 12 months before the claim, or $100 if you paid nothing.
        </p>

        <h2 style={h2}>Ending use</h2>
        <p style={p}>
          You can stop using the Service and disconnect the connector at any time. We may suspend or end access if you breach
          these terms or if we discontinue the Service.
        </p>

        <h2 style={h2}>Governing law</h2>
        <p style={p}>
          These terms are governed by the laws of the State of California. Disputes will be resolved in the state or federal
          courts located in Alameda County, California.
        </p>

        <h2 style={h2}>Changes</h2>
        <p style={p}>
          If we change these terms, we&rsquo;ll update the effective date above. Continuing to use the Service after a change
          means you accept the updated terms.
        </p>

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
