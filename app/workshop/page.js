export const metadata = {
  title: "Join the Investor Workshop | RealEstate-Analytics.ai",
  description: "Express your interest in our investor-focused deal analysis workshop for agents, lenders, and property managers.",
};

export default function WorkshopPage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0F1F3D 0%, #1a2f52 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px 16px",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
    }}>
      <div style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(201,168,76,0.3)",
        borderRadius: "16px",
        padding: "40px 36px",
        width: "100%",
        maxWidth: "480px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
      }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{
            fontSize: "11px",
            letterSpacing: "0.12em",
            color: "#C9A84C",
            textTransform: "uppercase",
            fontWeight: 700,
            marginBottom: "10px",
          }}>
            RealEstate-Analytics.ai · CCRIM Walnut Creek
          </div>
          <h1 style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#ffffff",
            margin: "0 0 10px",
            lineHeight: 1.3,
          }}>
            Investor Deal Analysis Workshop
          </h1>
          <p style={{
            fontSize: "14px",
            color: "#8aaace",
            margin: 0,
            lineHeight: 1.6,
          }}>
            For agents, lenders, and property managers who want to speak the investor's language and close more deals.
          </p>
        </div>

        {/* Form */}
        <form
          action="https://formspree.io/f/xrevglqg"
          method="POST"
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>First Name *</label>
              <input
                type="text"
                name="first_name"
                required
                placeholder="Masoud"
                style={inputStyle}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Last Name *</label>
              <input
                type="text"
                name="last_name"
                required
                placeholder="Arouni"
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="(925) 555-0100"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Email Address *</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Your Role</label>
            <select name="role" style={inputStyle}>
              <option value="">— Select your role —</option>
              <option value="Agent / Realtor">Agent / Realtor</option>
              <option value="Lender / Loan Officer">Lender / Loan Officer</option>
              <option value="Property Manager">Property Manager</option>
              <option value="Investor">Investor</option>
              <option value="Title / Escrow">Title / Escrow</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Confirmation */}
          <div style={{
            background: "rgba(201,168,76,0.08)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "8px",
            padding: "14px 16px",
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
          }}>
            <input
              type="checkbox"
              name="confirmed_interest"
              value="Yes"
              required
              id="confirm"
              style={{ marginTop: "2px", accentColor: "#C9A84C", width: "16px", height: "16px", flexShrink: 0 }}
            />
            <label htmlFor="confirm" style={{
              fontSize: "13px",
              color: "#C9A84C",
              lineHeight: 1.5,
              cursor: "pointer",
            }}>
              I am interested in this workshop and would like to be notified when it is scheduled.
            </label>
          </div>

          {/* Hidden fields */}
          <input type="hidden" name="_subject" value="Workshop Interest — CCRIM Walnut Creek" />
          <input type="hidden" name="_next" value="https://www.realestate-analytics.ai/workshop/thanks" />

          <button type="submit" style={{
            background: "linear-gradient(135deg, #C9A84C, #e0c06a)",
            color: "#0F1F3D",
            border: "none",
            borderRadius: "8px",
            padding: "14px",
            fontSize: "15px",
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "0.03em",
            marginTop: "4px",
          }}>
            Count Me In →
          </button>
        </form>

        <p style={{
          textAlign: "center",
          fontSize: "11px",
          color: "#3a5a7a",
          marginTop: "20px",
          lineHeight: 1.6,
        }}>
          Your information is private and will only be used to notify you about this workshop.
        </p>
      </div>
    </main>
  );
}

const labelStyle = {
  display: "block",
  fontSize: "11px",
  color: "#5a8acc",
  fontWeight: 700,
  marginBottom: "5px",
  letterSpacing: "0.04em",
  textTransform: "uppercase",
};

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "7px",
  color: "#e8f0fe",
  fontSize: "14px",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
};
