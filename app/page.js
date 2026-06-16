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
        minHeight: "100vh",
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
          backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80')",
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
          textAlign: "center", padding: "40px 24px",
          maxWidth: "720px", width: "100%",
        }}>

          <p style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.22em",
            color: "#60a5fa", textTransform: "uppercase", marginBottom: "20px",
          }}>
            Real Estate Deal Evaluator
          </p>

          <h1 style={{
            fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800,
            color: "#f1f5f9", lineHeight: 1.1, marginBottom: "20px",
            letterSpacing: "-0.03em",
          }}>
            Find Great Deals<br />
            <span style={{ color: "#60a5fa" }}>in 60 Seconds.</span>
          </h1>

          <p style={{
            fontSize: "clamp(15px, 2vw, 18px)", color: "#94a3b8",
            lineHeight: 1.65, marginBottom: "36px", maxWidth: "560px",
            margin: "0 auto 36px",
          }}>
            Grade any property instantly — cap rate, IRR, DSCR, cash flow,
            10-year projections. No spreadsheets. No signup.
          </p>

          {/* Single CTA input bar */}
          <div style={{
            display: "flex", gap: "0",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "14px", padding: "6px",
            maxWidth: "520px", margin: "0 auto 16px",
            backdropFilter: "blur(8px)",
          }}>
            <input
              type="number"
              placeholder="Enter purchase price e.g. 750000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              style={{
                flex: 1, background: "transparent", border: "none",
                color: "#e2e8f0", fontSize: "15px", padding: "10px 16px",
                outline: "none", minWidth: 0,
              }}
            />
            <a href="#analyzer" style={{
              background: "#2563eb", color: "#fff",
              borderRadius: "10px", padding: "12px 28px",
              fontSize: "15px", fontWeight: 700,
              textDecoration: "none", whiteSpace: "nowrap",
              display: "flex", alignItems: "center",
            }}>
              Analyze Now →
            </a>
          </div>

          {/* Trust strip */}
          <div style={{
            display: "flex", justifyContent: "center",
            gap: "32px", marginTop: "28px",
            flexWrap: "wrap",
          }}>
            {[
              { val: "CCIM-Level", label: "Formulas" },
              { val: "60 Seconds", label: "Full Analysis" },
              { val: "Free", label: "No Signup" },
              { val: "3 Scenarios", label: "Stress Test" },
            ].map((t) => (
              <div key={t.val} style={{ textAlign: "center" }}>
                <p style={{ fontSize: "14px", fontWeight: 700, color: "#e2e8f0" }}>{t.val}</p>
                <p style={{ fontSize: "11px", color: "#475569", marginTop: "2px" }}>{t.label}</p>
              </div>
            ))}
          </div>

          {/* CCIM gold badge */}
          <div style={{
            marginTop: "36px", display: "inline-block",
            background: "linear-gradient(135deg, rgba(234,179,8,0.2), rgba(234,179,8,0.06))",
            border: "1px solid rgba(234,179,8,0.35)",
            borderRadius: "10px", padding: "10px 20px",
          }}>
            <p style={{ fontSize: "12px", color: "#fef08a", fontWeight: 600, letterSpacing: "0.03em" }}>
              ✨ Built on CCIM-level formulas trusted by appraisers, lenders &amp; underwriters
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "28px",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
        }}>
          <p style={{ fontSize: "11px", color: "#475569", letterSpacing: "0.1em" }}>SCROLL TO ANALYZE</p>
          <div style={{ width: "1px", height: "32px", background: "rgba(71,85,105,0.6)" }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LIVE CALCULATOR — full width
          ══════════════════════════════════════════ */}
      <section id="analyzer" style={{ background: "#080f1e", padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{
              fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em",
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
            <p style={{ fontSize: "15px", color: "#64748b", marginTop: "10px" }}>
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
            <p style={{ fontSize: "14px", color: "#475569" }}>No signup · No spreadsheets · Instant PDF report</p>
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
      <section style={{ background: "#080f1e", padding: "80px 24px" }}>
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
                  <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.6 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          YOUTUBE VIDEOS
          ══════════════════════════════════════════ */}
      <section style={{ background: "#080f1e", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", color: "#60a5fa", textTransform: "uppercase", marginBottom: "8px" }}>From the Channel</p>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em", marginBottom: "8px" }}>See It in Action</h2>
            <p style={{ fontSize: "14px", color: "#475569" }}>Real deals. Real numbers. Watch investors stress-test properties before committing.</p>
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
