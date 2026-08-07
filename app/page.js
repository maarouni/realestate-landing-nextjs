"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const VIDEOS = [
  {
    id: "1Uuji8ZrcZg",
    title: "What Happens If Your Rental Property Sits Empty For 6 Months?",
    tag: "Vacancy Stress Test",
  },
  {
    id: "AoPC612SkhE",
    title: "First-Time Buyer Break-Even — 20% Down in Edison, NJ",
    tag: "Instant Deal Math",
  },
  {
    id: "-ozDjDIh1OI",
    title: "Instant Deal Math",
    tag: "Instant Deal Math",
  },
];

const DEFAULT_PRICE = 600000;
const DEFAULT_RENT  = 4800;
const DEFAULT_DOWN  = 30;
const RATE          = 0.0699;
const EXPENSE_RATIO = 0.38;

function runCalc(price, rent, downPct) {
  const annualRent = rent * 12;
  const noi        = annualRent * (1 - EXPENSE_RATIO);
  const capRate    = (noi / price) * 100;
  const downAmt    = price * (downPct / 100);
  const loan       = price - downAmt;
  const r          = RATE / 12;
  const n          = 360;
  const monthly    = loan * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  const monthlyExp = (annualRent * EXPENSE_RATIO) / 12;
  const monthlyCF  = rent - monthly - monthlyExp;
  const annualCF   = monthlyCF * 12;
  const coc        = (annualCF / downAmt) * 100;
  const em         = ((downAmt + annualCF * 5 + price * 0.18) / downAmt);

  let grade, gradeColor;
  if (capRate >= 7)        { grade = "A — Strong Buy";   gradeColor = "#34d399"; }
  else if (capRate >= 5.5) { grade = "B — Good Deal";    gradeColor = "#60a5fa"; }
  else if (capRate >= 4)   { grade = "C — Market Rate";  gradeColor = "#fbbf24"; }
  else                     { grade = "D — Thin Margins"; gradeColor = "#f87171"; }

  return { capRate, coc, monthlyCF, em, grade, gradeColor, downAmt };
}

function fmt(n)  { return "$" + Math.round(Math.abs(n)).toLocaleString(); }
function fmtK(n) { return "$" + (Math.abs(n) / 1000).toFixed(0) + "k"; }
function pct(n)  { return n.toFixed(1) + "%"; }

export default function Home() {
  const [price, setPrice] = useState(DEFAULT_PRICE);
  const [rent,  setRent]  = useState(DEFAULT_RENT);
  const [down,  setDown]  = useState(DEFAULT_DOWN);
  const m = runCalc(price, rent, down);

  return (
    <main className="min-h-screen">

      {/* ══════════════════════════════════════════
          HERO — Option A: CoStar style, full-width
          ══════════════════════════════════════════ */}
      <section style={{
        position: "relative",
        minHeight: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#060f1e",
      }}>

        {/* Background image — aspirational real estate */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/nyc-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.55,
        }} />

        {/* Dark overlay gradient */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(6,15,30,0.4) 0%, rgba(6,15,30,0.65) 60%, rgba(6,15,30,0.95) 100%)",
        }} />

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 10,
          textAlign: "center", padding: "24px 24px",
          maxWidth: "720px", width: "100%",
        }}>

          <p style={{
            fontSize: "13px", fontWeight: 700, letterSpacing: "0.18em",
            color: "#60a5fa", textTransform: "uppercase", marginBottom: "20px",
          }}>
            Real Estate Deal Platform — Residential &amp; Commercial
          </p>

          <h1 style={{
            fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 800,
            color: "#f1f5f9", lineHeight: 1.15, marginBottom: "14px",
            letterSpacing: "-0.02em",
          }}>
            Find Real Deals Others Miss<br />
            <span style={{ color: "#60a5fa" }}>and Underwrite Them in 60 Seconds.</span>
          </h1>

          <p style={{
            fontSize: "clamp(18px, 2.2vw, 22px)", color: "#f1f5f9",
            lineHeight: 1.5, marginBottom: "22px", maxWidth: "560px",
            margin: "0 auto 22px",
          }}>
            Including Shadow Market and Off-Market Listings — That’s Where the Real Deals Are.
          </p>

          {/* Trust strip */}
          <div style={{
            display: "flex", justifyContent: "center",
            gap: "32px", marginTop: "18px",
            flexWrap: "wrap",
          }}>
            {[
              { val: "Shadow Market", label: "Off-market access" },
              { val: "CCIM-Level", label: "Formulas" },
              { val: "60 Seconds", label: "Full analysis" },
              { val: "Free", label: "No signup" },
            ].map((t) => (
              <div key={t.val} style={{ textAlign: "center" }}>
                <p style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff" }}>{t.val}</p>
                <p style={{ fontSize: "14px", color: "#cbd5e1", marginTop: "2px" }}>{t.label}</p>
              </div>
            ))}
          </div>

        </div>

        {/* CCIM gold badge */}
        <div style={{
          marginTop: "14px", display: "inline-block", position: "relative", zIndex: 10,
          background: "linear-gradient(135deg, rgba(234,179,8,0.2), rgba(234,179,8,0.06))",
          border: "1px solid rgba(234,179,8,0.35)",
          borderRadius: "10px", padding: "7px 16px",
        }}>
          <p style={{ fontSize: "12px", color: "#fef08a", fontWeight: 600, letterSpacing: "0.03em" }}>
            ✨ Built on CCIM-level formulas trusted by appraisers, lenders &amp; underwriters
          </p>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "14px",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
        }}>

          <div style={{ width: "1px", height: "20px", background: "rgba(71,85,105,0.6)" }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          THE PROBLEM + 5-STEP WORKFLOW
          ══════════════════════════════════════════ */}
      <section style={{ background: "#060f1e", padding: "30px 24px 100px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <div style={{ position: "relative", maxWidth: "860px", margin: "0 auto 60px", textAlign: "center" }}>
            <div style={{
              position: "absolute", top: "-30px", left: "50%", transform: "translateX(-50%)",
              fontSize: "280px", fontWeight: 800, color: "#2563eb",
              opacity: 0.08, lineHeight: 1, zIndex: 0, pointerEvents: "none",
            }}>
              ?
            </div>
            <p style={{ position: "relative", zIndex: 1, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, color: "#f87171", marginBottom: "20px", lineHeight: 1.1 }}>
              The problem
            </p>
            <h2 style={{ position: "relative", zIndex: 1, fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 800, color: "#f1f5f9", lineHeight: 1.35, letterSpacing: "-0.01em" }}>
              Still losing deals to whoever moves faster?
            </h2>
            <p style={{ position: "relative", zIndex: 1, fontSize: "clamp(15px, 1.6vw, 18px)", color: "#f8fafc", marginTop: "18px" }}>
              Built for agents, brokers, investors, and loan officers — residential and commercial, all in one place.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "24px", position: "relative" }}>
            {[
              { n: "1", title: "Upload", body: "Drag in an OM, T-12, MLS PDF, or any pro forma — no reformatting." },
              { n: "2", title: "Analyze", body: "CCIM-grade deterministic underwriting — cap rate, DSCR, IRR — not a black-box guess." },
              { n: "3", title: "Find", body: "$Deal Radar surfaces motivated sellers from real distress signals like tax delinquency, absentee ownership, and reverse mortgages — plus dozens more.$" },
              { n: "4", title: "Decide", body: "Compare deals side by side, stress-test assumptions, see the risks before you commit." },
              { n: "5", title: "Report", body: "Agent, investor, and lender-ready reports, generated in one click." },
            ].map((s) => (
              <div key={s.n} style={{ textAlign: "left" }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "50%",
                  background: "#0e1b32", border: "1px solid #2563eb",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "13px", fontWeight: 700, color: "#60a5fa",
                  marginBottom: "20px",
                }}>
                  {s.n}
                </div>
                <p style={{ fontSize: "16px", fontWeight: 700, color: "#f1f5f9", marginBottom: "8px" }}>{s.title}</p>
                <p style={{ fontSize: "13px", color: "#f8fafc", lineHeight: 1.55 }}>{s.body}</p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: "56px", textAlign: "center", display: "flex", justifyContent: "center",
          }}>
            <div style={{
              display: "inline-block", padding: "14px 28px", borderRadius: "10px",
              background: "linear-gradient(135deg, rgba(234,179,8,0.2), rgba(234,179,8,0.06))",
              border: "1px solid rgba(234,179,8,0.35)",
            }}>
              <span style={{ color: "#fef08a", fontWeight: 700 }}>Pro Plans start at $15/month</span>
              <span style={{ color: "#f8fafc" }}> — 85%+ less than PropertyRadar and PropStream</span>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          LIVE CALCULATOR — full width
          ══════════════════════════════════════════ */}
      <section id="analyzer" style={{ background: "#080f1e", padding: "40px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <a href="#analyzer" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#2563eb", color: "#fff",
              borderRadius: "12px", padding: "16px 36px",
              fontSize: "16px", fontWeight: 700,
              textDecoration: "none",
            }}>
              See Your Returns — Free →
            </a>
          </div>

          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{
              fontSize: "14px", fontWeight: 700, letterSpacing: "0.2em",
              color: "#60a5fa", textTransform: "uppercase", marginBottom: "12px",
            }}>
              Quick Deal Check
            </p>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800,
              color: "#f1f5f9", letterSpacing: "-0.02em",
            }}>
              See Your Returns — Live
            </h2>
            <p style={{ fontSize: "16px", color: "#f8fafc", marginTop: "10px" }}>
              Adjust the sliders. Every metric updates instantly.
            </p>
          </div>

          {/* Metrics row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "32px" }}>
            {[
              { label: "Cap Rate", value: pct(m.capRate), color: m.capRate >= 5.5 ? "#34d399" : "#fbbf24", sub: m.grade, subColor: m.gradeColor },
              { label: "Cash-on-Cash", value: pct(Math.max(m.coc, 0)), color: "#60a5fa", sub: "Levered return", subColor: "#475569" },
              { label: "Monthly Cash Flow", value: (m.monthlyCF >= 0 ? "+" : "−") + fmt(m.monthlyCF), color: m.monthlyCF >= 0 ? "#34d399" : "#f87171", sub: m.monthlyCF >= 0 ? "Positive" : "Negative", subColor: m.monthlyCF >= 0 ? "#34d399" : "#f87171" },
              { label: "5-Yr Equity Mult.", value: m.em.toFixed(2) + "x", color: "#a78bfa", sub: "On invested equity", subColor: "#475569" },
            ].map((c) => (
              <div key={c.label} style={{
                background: "rgba(255,255,255,0.04)",
                border: "0.5px solid rgba(255,255,255,0.09)",
                borderRadius: "14px", padding: "20px 16px", textAlign: "center",
              }}>
                <p style={{ fontSize: "12px", color: "#64748b", marginBottom: "8px" }}>{c.label}</p>
                <p style={{ fontSize: "26px", fontWeight: 800, color: c.color, lineHeight: 1 }}>{c.value}</p>
                <p style={{ fontSize: "11px", color: c.subColor, marginTop: "6px" }}>{c.sub}</p>
              </div>
            ))}
          </div>

          {/* Sliders */}
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "0.5px solid rgba(255,255,255,0.08)",
            borderRadius: "16px", padding: "28px 32px", marginBottom: "20px",
          }}>
            {[
              { label: "Purchase price", min: 200000, max: 5000000, step: 25000, val: price, set: setPrice, display: "$" + (price/1000).toFixed(0) + "k" },
              { label: "Monthly rent", min: 1000, max: 20000, step: 100, val: rent, set: setRent, display: "$" + rent.toLocaleString() + "/mo" },
              { label: "Down payment", min: 10, max: 40, step: 5, val: down, set: setDown, display: down + "% — " + fmtK(price * down / 100) },
            ].map((f) => (
              <div key={f.label} style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <label style={{ fontSize: "13px", color: "#94a3b8" }}>{f.label}</label>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#e2e8f0" }}>{f.display}</span>
                </div>
                <input type="range" min={f.min} max={f.max} step={f.step} value={f.val}
                  onChange={(e) => f.set(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "#2563eb" }} />
              </div>
            ))}
          </div>

          {/* Upsell to full analyzer */}
          <div style={{
            background: "rgba(37,99,235,0.1)", border: "0.5px solid rgba(37,99,235,0.3)",
            borderRadius: "14px", padding: "18px 24px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: "16px",
          }}>
            <div>
              <p style={{ fontSize: "15px", fontWeight: 700, color: "#bfdbfe", marginBottom: "4px" }}>
                Want IRR, DSCR, 10-year projections &amp; PDF report?
              </p>
              <p style={{ fontSize: "13px", color: "#60a5fa" }}>
                Full analysis below — no signup, no credit card.
              </p>
            </div>
            <a href="#full-analyzer" style={{
              background: "#2563eb", color: "#fff",
              borderRadius: "10px", padding: "12px 24px",
              fontSize: "14px", fontWeight: 700, textDecoration: "none",
            }}>
              See Full Report →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FULL ANALYZER EMBED
          ══════════════════════════════════════════ */}
      <section id="full-analyzer" style={{ background: "#060f1e", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", color: "#60a5fa", textTransform: "uppercase", marginBottom: "10px" }}>Full Deal Analyzer</p>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em", marginBottom: "8px" }}>
              IRR, DSCR, 10-Year Projections &amp; PDF Report
            </h2>
            <p style={{ fontSize: "16px", color: "#94a3b8" }}>No signup · No spreadsheets · Instant PDF report</p>
          </div>
          <iframe
            src="https://maarouni.github.io/singleproperty-public/"
            title="Free Single Property Analyzer"
            style={{ width: "100%", border: "none", borderRadius: "16px", minHeight: "1100px" }}
            loading="lazy"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
          ══════════════════════════════════════════ */}
      <section style={{ background: "#080f1e", padding: "40px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "#f1f5f9", textAlign: "center", marginBottom: "48px", letterSpacing: "-0.02em" }}>
            Why Agents &amp; Investors Use It
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {[
              { name: "Daisy Borba", title: "Prop Mgr / Owner / Agent", quote: "The tool will be very effective for people purchasing investment property. Yours is one of the first I've seen that lets investors add improvements and run meaningful comparisons. Most investors want sweat-equity potential — or a lot large enough for an ADU. Your app helps them evaluate highest & best use before buying. I am recommending all my investors run the numbers with your app before they pull the trigger." },
              { name: "Mike Daoudi", title: "REALTOR®, Excel Realty", quote: "This tool has been extremely helpful not only for me, but also for the investors I work with daily. It brings clarity to each deal and gives clients a clear understanding of the numbers so they can make confident decisions." },
              { name: "Behruz Sadeghi", title: "Broker, Royal LePage", quote: "This tool is the first thing I use when evaluating a property. It gives me fast clarity, removes uncertainty, and helps my clients feel confident in their decisions." },
            ].map((t) => (
              <div key={t.name} style={{
                background: "rgba(255,255,255,0.04)",
                border: "0.5px solid rgba(255,255,255,0.09)",
                borderRadius: "16px", padding: "28px",
              }}>
                <p style={{ fontSize: "13px", color: "#94a3b8", fontStyle: "italic", lineHeight: 1.7, marginBottom: "20px" }}>
                  "{t.quote}"
                </p>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#f1f5f9" }}>⭐ {t.name}</p>
                <p style={{ fontSize: "11px", color: "#475569", marginTop: "4px" }}>{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS
          ══════════════════════════════════════════ */}
      <section style={{ background: "#060f1e", padding: "80px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "#f1f5f9", marginBottom: "40px", letterSpacing: "-0.02em" }}>How It Works</h2>
          <div style={{ textAlign: "left" }}>
            {[
              { n: "01", title: "Enter the basics", body: "Address, ZIP code, price, rent, expenses, financing." },
              { n: "02", title: "See instant results", body: "ROI, IRR, cap rate, cash flow, deal grade, and 10-year projections — updated as you type." },
              { n: "03", title: "Download your report", body: "Professional PDF summary with AI-written explanation — ready to email to any client instantly." },
              { n: "04", title: "Learn the numbers", body: "Download the PDF User Manual with full explanations of every financial term and real-world examples." },
            ].map((s) => (
              <div key={s.n} style={{ display: "flex", gap: "20px", marginBottom: "28px" }}>
                <div style={{ flexShrink: 0, width: "40px", height: "40px", background: "rgba(37,99,235,0.15)", border: "0.5px solid rgba(37,99,235,0.3)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "12px", fontWeight: 800, color: "#60a5fa" }}>{s.n}</span>
                </div>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: 700, color: "#f1f5f9", marginBottom: "4px" }}>{s.title}</p>
                  <p style={{ fontSize: "15px", color: "#94a3b8", lineHeight: 1.6 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          YOUTUBE VIDEOS
          ══════════════════════════════════════════ */}
      <section style={{ background: "#080f1e", padding: "40px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", color: "#60a5fa", textTransform: "uppercase", marginBottom: "8px" }}>From the Channel</p>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em", marginBottom: "8px" }}>See It in Action</h2>
            <p style={{ fontSize: "16px", color: "#94a3b8" }}>Real deals. Real numbers. Watch investors stress-test properties before committing.</p>
          </div>

          <div style={{ borderRadius: "16px", overflow: "hidden", border: "0.5px solid rgba(255,255,255,0.1)", marginBottom: "20px" }}>
            <div style={{ position: "relative", paddingBottom: "56.25%" }}>
              <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                src={`https://www.youtube.com/embed/${VIDEOS[0].id}?rel=0&modestbranding=1`}
                title={VIDEOS[0].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", padding: "14px 20px", display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#60a5fa", background: "rgba(96,165,250,0.1)", border: "0.5px solid rgba(96,165,250,0.2)", borderRadius: "20px", padding: "3px 10px" }}>{VIDEOS[0].tag}</span>
              <p style={{ fontSize: "13px", color: "#cbd5e1" }}>{VIDEOS[0].title}</p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {VIDEOS.slice(1).map((v) => (
              <div key={v.id} style={{ borderRadius: "16px", overflow: "hidden", border: "0.5px solid rgba(255,255,255,0.1)" }}>
                <div style={{ position: "relative", paddingBottom: "56.25%" }}>
                  <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                    src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
                </div>
                <div style={{ background: "rgba(255,255,255,0.04)", padding: "12px 16px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#60a5fa", background: "rgba(96,165,250,0.1)", border: "0.5px solid rgba(96,165,250,0.2)", borderRadius: "20px", padding: "3px 10px", whiteSpace: "nowrap" }}>{v.tag}</span>
                  <p style={{ fontSize: "12px", color: "#cbd5e1" }}>{v.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <a href="https://www.youtube.com/@ProDealAnalyst" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "0.5px solid rgba(239,68,68,0.4)", color: "#f87171", borderRadius: "24px", padding: "10px 22px", fontSize: "13px", fontWeight: 700, textDecoration: "none" }}>
              <svg style={{ width: "18px", height: "18px" }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Watch More on @ProDealAnalyst
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
