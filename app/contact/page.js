import Link from "next/link";

export const metadata = {
  title: "Contact | RealEstate-Analytics.ai",
  description: "Get in touch with RealEstate-Analytics.ai. Book a demo, ask a question, or share feedback.",
  alternates: { canonical: "https://www.realestate-analytics.ai/contact" }
};

export default function Contact() {
  return (
    <main style={{ background: "#060f1e", minHeight: "100vh", padding: "80px 24px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>

        <p style={{ fontSize: "13px", color: "#475569", marginBottom: "32px" }}>
          <Link href="/" style={{ color: "#60a5fa", textDecoration: "none" }}>Home</Link>
          {" / "}
          <span style={{ color: "#64748b" }}>Contact</span>
        </p>

        <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", color: "#60a5fa", textTransform: "uppercase", marginBottom: "12px" }}>
          Contact
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#f1f5f9", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "16px" }}>
          Get in Touch
        </h1>
        <p style={{ fontSize: "16px", color: "#94a3b8", lineHeight: 1.75, marginBottom: "40px" }}>
          Questions about the platform, demo requests, partnership inquiries, or feedback — reach out directly.
        </p>

        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", marginBottom: "36px" }} />

        {/* Contact details */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "48px" }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <div style={{ width: "40px", height: "40px", background: "rgba(37,99,235,0.15)", border: "0.5px solid rgba(37,99,235,0.3)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "18px" }}>✉</span>
            </div>
            <div>
              <p style={{ fontSize: "13px", color: "#475569", marginBottom: "4px" }}>Email</p>
              <a href="mailto:contact@realestate-analytics.ai" style={{ fontSize: "16px", fontWeight: 600, color: "#60a5fa", textDecoration: "none" }}>
                contact@realestate-analytics.ai
              </a>
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <div style={{ width: "40px", height: "40px", background: "rgba(37,99,235,0.15)", border: "0.5px solid rgba(37,99,235,0.3)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "18px" }}>📞</span>
            </div>
            <div>
              <p style={{ fontSize: "13px", color: "#475569", marginBottom: "4px" }}>Phone</p>
              <a href="tel:+19253535263" style={{ fontSize: "16px", fontWeight: 600, color: "#f1f5f9", textDecoration: "none" }}>
                925-353-5263
              </a>
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <div style={{ width: "40px", height: "40px", background: "rgba(37,99,235,0.15)", border: "0.5px solid rgba(37,99,235,0.3)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "18px" }}>📅</span>
            </div>
            <div>
              <p style={{ fontSize: "13px", color: "#475569", marginBottom: "4px" }}>Book a Demo</p>
              <a href="https://calendly.com/maarouni/30min-1" target="_blank" rel="noopener noreferrer" style={{ fontSize: "16px", fontWeight: 600, color: "#60a5fa", textDecoration: "none" }}>
                Schedule a 30-minute Zoom →
              </a>
            </div>
          </div>
        </div>

        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", marginBottom: "36px" }} />

        {/* Quick message form */}
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f1f5f9", marginBottom: "20px" }}>Send a Message</h2>
        <form action={`mailto:contact@realestate-analytics.ai`} method="get" encType="text/plain">
          <div style={{ marginBottom: "16px" }}>
            <label style={{ fontSize: "13px", color: "#94a3b8", display: "block", marginBottom: "6px" }}>Your name</label>
            <input name="name" type="text" placeholder="Jane Smith" style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.15)", borderRadius: "8px", padding: "10px 14px", color: "#f1f5f9", fontSize: "14px", outline: "none" }} />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ fontSize: "13px", color: "#94a3b8", display: "block", marginBottom: "6px" }}>Your email</label>
            <input name="email" type="email" placeholder="jane@example.com" style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.15)", borderRadius: "8px", padding: "10px 14px", color: "#f1f5f9", fontSize: "14px", outline: "none" }} />
          </div>
          <div style={{ marginBottom: "24px" }}>
            <label style={{ fontSize: "13px", color: "#94a3b8", display: "block", marginBottom: "6px" }}>Message</label>
            <textarea name="body" rows={5} placeholder="Tell us what you're working on..." style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.15)", borderRadius: "8px", padding: "10px 14px", color: "#f1f5f9", fontSize: "14px", outline: "none", resize: "vertical" }} />
          </div>
          <button type="submit" style={{ background: "#2563eb", color: "#fff", border: "none", borderRadius: "8px", padding: "12px 28px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>
            Send Message →
          </button>
        </form>

      </div>
    </main>
  );
}
