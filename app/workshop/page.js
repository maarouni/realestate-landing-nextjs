export const metadata = {
  title: "PropertyIQ × Iron Oak | Investor Deal Finding & Analysis Workshop",
  description: "Lunch & Learn — Wednesday, October 21, 11:30 AM–1:30 PM, 1777 Botelho Dr #120, Walnut Creek, CA. Presented by PropertyIQ and Iron Oak Home Loans.",
};

export default function WorkshopPage() {
  return (
    <main style={{
      position: "fixed",
      inset: 0,
      zIndex: 100,
      overflowY: "auto",
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
            PropertyIQ × Iron Oak
          </div>
          <h1 style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#ffffff",
            margin: "0 0 10px",
            lineHeight: 1.3,
          }}>
            Investor Deal Finding &amp; Analysis Workshop
          </h1>
          <p style={{
            fontSize: "14px",
            color: "#8aaace",
            margin: 0,
            lineHeight: 1.6,
          }}>
            A Lunch &amp; Learn for investors and real estate professionals.
          </p>
          <div style={{
            marginTop: "18px",
            border: "1px solid rgba(201,168,76,0.35)",
            borderRadius: "10px",
            padding: "12px 14px",
            fontSize: "14px",
            lineHeight: 1.6,
            color: "#e8f0fe",
          }}>
            <div style={{ fontWeight: 700 }}>Wednesday, October 21</div>
            <div style={{ fontWeight: 700 }}>11:30 AM – 1:30 PM</div>
            <a
              href="https://maps.google.com/?q=1777+Botelho+Dr+%23120,+Walnut+Creek,+CA+94596"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#C9A84C", textDecoration: "none" }}
            >
              1777 Botelho Dr #120, Walnut Creek, CA 94596
            </a>
            <div style={{ color: "#8aaace", fontSize: "13px" }}>Lunch provided · Seating is limited</div>
          </div>
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
                placeholder="First name"
                style={inputStyle}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Last Name *</label>
              <input
                type="text"
                name="last_name"
                required
                placeholder="Last name"
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
              placeholder="(555) 555-0100"
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
              Yes, please reserve my seat for the October 21 workshop.
            </label>
          </div>

          {/* Hidden fields */}
          <input type="hidden" name="_subject" value="RSVP — PropertyIQ × Iron Oak Workshop (Oct 21, Walnut Creek)" />
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
            Reserve My Seat →
          </button>
        </form>

        <p style={{
          textAlign: "center",
          fontSize: "11px",
          color: "#3a5a7a",
          marginTop: "20px",
          lineHeight: 1.6,
        }}>
          Your information is private and will only be used for this workshop.
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
