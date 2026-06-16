"use client";

import { useState, useEffect } from "react";

// ─────────────────────────────────────────────
// YOUR YOUTUBE VIDEOS — edit these 3 IDs only
// ─────────────────────────────────────────────
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
// ─────────────────────────────────────────────

// ── defaults tuned to produce flattering numbers on first load ──
const DEFAULT_PRICE  = 600000;
const DEFAULT_RENT   = 4800;
const DEFAULT_DOWN   = 30;
const RATE           = 0.0699;
const EXPENSE_RATIO  = 0.38;

function runCalc(price, rent, downPct) {
  const annualRent  = rent * 12;
  const noi         = annualRent * (1 - EXPENSE_RATIO);
  const capRate     = (noi / price) * 100;
  const downAmt     = price * (downPct / 100);
  const loan        = price - downAmt;
  const r           = RATE / 12;
  const n           = 360;
  const monthly     = loan * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  const monthlyExp  = (annualRent * EXPENSE_RATIO) / 12;
  const monthlyCF   = rent - monthly - monthlyExp;
  const annualCF    = monthlyCF * 12;
  const coc         = (annualCF / downAmt) * 100;
  const equityMultiple = ((downAmt + annualCF * 5 + price * 0.18) / downAmt);

  let grade, gradeColor;
  if (capRate >= 7)        { grade = "A — Strong Buy";  gradeColor = "#34d399"; }
  else if (capRate >= 5.5) { grade = "B — Good Deal";   gradeColor = "#60a5fa"; }
  else if (capRate >= 4)   { grade = "C — Market Rate"; gradeColor = "#fbbf24"; }
  else                     { grade = "D — Thin Margins"; gradeColor = "#f87171"; }

  return { capRate, coc, monthlyCF, equityMultiple, grade, gradeColor, downAmt };
}

function fmt(n)   { return "$" + Math.round(Math.abs(n)).toLocaleString(); }
function fmtK(n)  { return "$" + (Math.abs(n) / 1000).toFixed(0) + "k"; }
function pct(n)   { return n.toFixed(1) + "%"; }

// ── Animated counter on first load ──
function useCountUp(target, duration = 900) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(target * p);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target]);
  return val;
}

export default function Home() {
  const [price, setPrice]   = useState(DEFAULT_PRICE);
  const [rent,  setRent]    = useState(DEFAULT_RENT);
  const [down,  setDown]    = useState(DEFAULT_DOWN);
  const [hasInteracted, setHasInteracted] = useState(false);

  const m = runCalc(price, rent, down);
  const animatedCap = useCountUp(parseFloat(m.capRate.toFixed(1)));
  const displayCap  = hasInteracted ? m.capRate : animatedCap;

  function handle(setter) {
    return (e) => { setter(Number(e.target.value)); setHasInteracted(true); };
  }

  return (
    <main className="min-h-screen">

      {/* ══════════════════════════════════════════
          SPLIT-SCREEN HERO
          ══════════════════════════════════════════ */}
      <section style={{
        display: "flex",
        minHeight: "calc(100vh - 56px)",
        background: "#0a1628",
      }}>

        {/* LEFT — copy */}
        <div style={{
          flex: "0 0 42%",
          padding: "56px 48px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRight: "0.5px solid rgba(255,255,255,0.07)",
        }}>
          <p style={{
            fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em",
            color: "#60a5fa", textTransform: "uppercase", marginBottom: "20px",
          }}>
            Real Estate Deal Evaluator
          </p>

          <h1 style={{
            fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700,
            color: "#f1f5f9", lineHeight: 1.2, marginBottom: "20px",
          }}>
            Find Great Deals in 60 Seconds.<br />
            Know the Numbers.<br />
            <span style={{ color: "#60a5fa" }}>Invest with Confidence.</span>
          </h1>

          <p style={{
            fontSize: "15px", color: "#94a3b8", lineHeight: 1.7,
            marginBottom: "24px", maxWidth: "380px",
          }}>
            Grade any property in seconds with ROI, IRR, cash flow, breakeven year,
            equity multiple, 10-year projections, and deal-quality grading —
            no spreadsheets or logins.
          </p>

          {/* CCIM Gold Badge */}
          <div style={{
            position: "relative", marginBottom: "28px", display: "inline-block",
          }}>
            <div style={{
              background: "linear-gradient(135deg, rgba(234,179,8,0.25), rgba(234,179,8,0.08))",
              border: "1px solid rgba(234,179,8,0.4)",
              boxShadow: "0 0 32px rgba(234,179,8,0.3)",
              borderRadius: "12px", padding: "14px 20px",
            }}>
              <div style={{ fontSize: "22px", textAlign: "center", marginBottom: "6px" }}>✨</div>
              <p style={{
                fontSize: "13px", color: "#fef08a", fontWeight: 600,
                textAlign: "center", lineHeight: 1.5, letterSpacing: "0.02em",
              }}>
                Built &amp; powered by CCIM-level investment formulas<br />
                trusted by appraisers, lenders &amp; underwriters.
              </p>
            </div>
            <span style={{
              position: "absolute", top: "-10px", left: "-16px", fontSize: "18px"
            }}>✴️</span>
            <span style={{
              position: "absolute", bottom: "-10px", right: "-16px", fontSize: "18px"
            }}>✴️</span>
          </div>



          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="#full-analyzer" style={{
              background: "#2563eb", color: "#fff", borderRadius: "24px",
              padding: "12px 28px", fontWeight: 700, fontSize: "14px",
              textDecoration: "none", display: "inline-block",
            }}>
              Run Full Analysis →
            </a>
            <a href="https://calendly.com/maarouni/30min-1" target="_blank" rel="noopener noreferrer"
              style={{
                background: "transparent", color: "#94a3b8",
                border: "0.5px solid rgba(148,163,184,0.35)",
                borderRadius: "24px", padding: "12px 24px",
                fontSize: "14px", textDecoration: "none", display: "inline-block",
              }}>
              Book a Demo
            </a>
          </div>

          {/* CCIM badge */}
          <p style={{ fontSize: "12px", color: "#475569", marginTop: "28px" }}>
            ✦ Built on CCIM-level formulas trusted by appraisers, lenders &amp; underwriters
          </p>
        </div>

        {/* RIGHT — live calculator */}
        <div style={{
          flex: 1,
          padding: "40px 36px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0d1f3c",
        }}>

          {/* Right side header */}
          <div style={{ marginBottom: "16px" }}>
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", color: "#60a5fa", textTransform: "uppercase", marginBottom: "4px" }}>
              Quick Deal Check
            </p>
            <p style={{ fontSize: "13px", color: "#64748b" }}>
              Adjust the sliders — see your returns update live
            </p>
          </div>

        {/* Results strip — shown first so they see numbers before inputs */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "10px", marginBottom: "24px",
          }}>
            {[
              {
                label: "Cap rate",
                value: pct(displayCap),
                color: m.capRate >= 5.5 ? "#34d399" : "#fbbf24",
                sub: m.grade,
                subColor: m.gradeColor,
              },
              {
                label: "Cash-on-cash",
                value: pct(Math.max(m.coc, 0)),
                color: m.coc >= 6 ? "#34d399" : "#60a5fa",
                sub: m.coc >= 6 ? "Strong yield" : "Market rate",
                subColor: m.coc >= 6 ? "#34d399" : "#60a5fa",
              },
              {
                label: "Monthly cash flow",
                value: (m.monthlyCF >= 0 ? "+" : "−") + fmt(m.monthlyCF),
                color: m.monthlyCF >= 0 ? "#34d399" : "#f87171",
                sub: m.monthlyCF >= 0 ? "Positive" : "Negative",
                subColor: m.monthlyCF >= 0 ? "#34d399" : "#f87171",
              },
              {
                label: "5-yr equity mult.",
                value: m.equityMultiple.toFixed(2) + "x",
                color: "#a78bfa",
                sub: "On invested equity",
                subColor: "#7c3aed",
              },
            ].map((c) => (
              <div key={c.label} style={{
                background: "rgba(255,255,255,0.04)",
                border: "0.5px solid rgba(255,255,255,0.09)",
                borderRadius: "12px", padding: "14px 16px",
              }}>
                <p style={{ fontSize: "11px", color: "#64748b", marginBottom: "6px" }}>{c.label}</p>
                <p style={{ fontSize: "22px", fontWeight: 700, color: c.color, lineHeight: 1 }}>{c.value}</p>
                <p style={{ fontSize: "11px", color: c.subColor, marginTop: "4px" }}>{c.sub}</p>
              </div>
            ))}
          </div>

          {/* Sliders */}
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "0.5px solid rgba(255,255,255,0.08)",
            borderRadius: "14px", padding: "22px 24px",
            marginBottom: "16px",
          }}>
            <p style={{
              fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em",
              color: "#475569", textTransform: "uppercase", marginBottom: "18px",
            }}>
              Adjust the deal
            </p>

            {[
              {
                id: "price", label: "Purchase price",
                min: 200000, max: 5000000, step: 25000,
                val: price, set: setPrice,
                display: "$" + (price / 1000).toFixed(0) + "k",
              },
              {
                id: "rent", label: "Monthly rent",
                min: 1000, max: 20000, step: 100,
                val: rent, set: setRent,
                display: "$" + rent.toLocaleString() + "/mo",
              },
              {
                id: "down", label: "Down payment",
                min: 10, max: 40, step: 5,
                val: down, set: setDown,
                display: down + "% — " + fmtK(price * down / 100),
              },
            ].map((f) => (
              <div key={f.id} style={{ marginBottom: "16px" }}>
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  marginBottom: "6px",
                }}>
                  <label style={{ fontSize: "12px", color: "#94a3b8" }}>{f.label}</label>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "#e2e8f0" }}>{f.display}</span>
                </div>
                <input
                  type="range"
                  min={f.min} max={f.max} step={f.step} value={f.val}
                  onChange={handle(f.set)}
                  style={{ width: "100%", accentColor: "#2563eb" }}
                />
              </div>
            ))}
          </div>

          {/* Unlock strip */}
          <div style={{
            background: "rgba(37,99,235,0.12)",
            border: "0.5px solid rgba(37,99,235,0.3)",
            borderRadius: "12px", padding: "14px 18px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <div>
              <p style={{ fontSize: "13px", color: "#bfdbfe", fontWeight: 600, marginBottom: "2px" }}>
                Want IRR, DSCR, 10-year projections &amp; PDF report?
              </p>
              <p style={{ fontSize: "12px", color: "#60a5fa" }}>
                Full analysis below — no signup, no credit card.
              </p>
            </div>
            <a href="#full-analyzer" style={{
              background: "#2563eb", color: "#fff",
              borderRadius: "20px", padding: "9px 20px",
              fontSize: "13px", fontWeight: 700,
              textDecoration: "none", whiteSpace: "nowrap", marginLeft: "16px",
            }}>
              See Full Report →
            </a>
          </div>
        </div>
      </section>

      {/* ── FULL ANALYZER (embedded) ── */}
      <section id="full-analyzer" className="w-full py-16 px-4" style={{ background: "#080f1e" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <p style={{
              fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em",
              color: "#60a5fa", textTransform: "uppercase", marginBottom: "10px",
            }}>
              Full Deal Analyzer
            </p>
            <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#f1f5f9", marginBottom: "8px" }}>
              Go Deeper — IRR, DSCR, 10-Year Projections
            </h2>
            <p style={{ fontSize: "14px", color: "#64748b" }}>
              No signup · No spreadsheets · PDF report included
            </p>
          </div>
          <iframe
            src="https://maarouni.github.io/singleproperty-public/"
            title="Free Single Property Analyzer"
            style={{
              width: "100%", border: "none",
              borderRadius: "16px", minHeight: "1100px",
            }}
            loading="lazy"
          />
        </div>
      </section>

      {/* ── WHY AGENTS & TEAMS USE IT ── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 700, textAlign: "center", marginBottom: "12px", color: "#f1f5f9" }}>
          Why Agents &amp; Teams Use It
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "48px" }}>
          {/* Daisy */}
          <div style={{
            background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.1)",
            borderRadius: "16px", padding: "24px", textAlign: "center",
          }}>
            <p style={{ fontSize: "13px", fontWeight: 700, color: "#f1f5f9", marginBottom: "12px" }}>
              ⭐ Daisy Borba — Prop Mgr / Owner / Agent
            </p>
            <p style={{ fontSize: "13px", color: "#cbd5e1", fontStyle: "italic", lineHeight: 1.7 }}>
              "The tool will be very effective for people purchasing investment property.
              Yours is one of the first I've seen that lets investors add improvements and
              run meaningful comparisons. Most investors want sweat-equity potential — or a lot
              large enough for an ADU. Your app helps them evaluate highest &amp; best use before buying.
              I am recommending all my investors run the numbers with your app before they pull the trigger."
            </p>
          </div>
          {/* Mike */}
          <div style={{
            background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.1)",
            borderRadius: "16px", padding: "24px", textAlign: "center",
          }}>
            <p style={{ fontSize: "13px", fontWeight: 700, color: "#f1f5f9", marginBottom: "12px" }}>
              ⭐ Mike Daoudi — REALTOR®, Excel Realty
            </p>
            <p style={{ fontSize: "13px", color: "#cbd5e1", fontStyle: "italic", lineHeight: 1.7 }}>
              "This tool has been extremely helpful not only for me, but also for the
              investors I work with daily. It brings clarity to each deal and gives clients
              a clear understanding of the numbers so they can make confident decisions."
            </p>
          </div>
          {/* Behruz */}
          <div style={{
            background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.1)",
            borderRadius: "16px", padding: "24px", textAlign: "center",
          }}>
            <p style={{ fontSize: "13px", fontWeight: 700, color: "#f1f5f9", marginBottom: "12px" }}>
              ⭐ Behruz Sadeghi — Broker, Royal LePage
            </p>
            <p style={{ fontSize: "13px", color: "#cbd5e1", fontStyle: "italic", lineHeight: 1.7 }}>
              "This tool is the first thing I use when evaluating a property.
              It gives me fast clarity, removes uncertainty, and helps my clients
              feel confident in their decisions."
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {[
            {
              title: "Instant Deal Math",
              body: "ROI, IRR, cash-on-cash, cap rate, and 10-year projections in seconds — zero formulas, zero spreadsheets.",
            },
            {
              title: "Client-Ready PDF Reports",
              body: "Auto-generate a PDF with summary, metrics, and AI-written explanation — ready to email to any client instantly.",
            },
            {
              title: "No Logins, Full Privacy",
              body: "Runs fully in the browser. No accounts, no stored data — perfect for open houses on agent tablets.",
            },
          ].map((f) => (
            <div key={f.title} style={{
              background: "rgba(255,255,255,0.04)",
              border: "0.5px solid rgba(255,255,255,0.09)",
              borderRadius: "16px", padding: "24px",
            }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#f1f5f9", marginBottom: "10px" }}>{f.title}</h3>
              <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.65 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── YOUTUBE VIDEOS ── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{
            fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em",
            color: "#60a5fa", textTransform: "uppercase", marginBottom: "8px",
          }}>
            From the Channel
          </p>
          <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#f1f5f9", marginBottom: "8px" }}>
            See It in Action
          </h2>
          <p style={{ fontSize: "14px", color: "#64748b" }}>
            Real deals. Real numbers. Watch how investors stress-test properties before committing.
          </p>
        </div>

        <div style={{
          borderRadius: "16px", overflow: "hidden",
          border: "0.5px solid rgba(255,255,255,0.1)", marginBottom: "20px",
        }}>
          <div style={{ position: "relative", paddingBottom: "56.25%" }}>
            <iframe
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              src={`https://www.youtube.com/embed/${VIDEOS[0].id}?rel=0&modestbranding=1`}
              title={VIDEOS[0].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div style={{
            background: "rgba(255,255,255,0.04)", padding: "14px 20px",
            display: "flex", alignItems: "center", gap: "12px",
          }}>
            <span style={{
              fontSize: "11px", fontWeight: 600, color: "#60a5fa",
              background: "rgba(96,165,250,0.1)", border: "0.5px solid rgba(96,165,250,0.2)",
              borderRadius: "20px", padding: "3px 10px",
            }}>
              {VIDEOS[0].tag}
            </span>
            <p style={{ fontSize: "13px", color: "#cbd5e1" }}>{VIDEOS[0].title}</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          {VIDEOS.slice(1).map((v) => (
            <div key={v.id} style={{
              borderRadius: "16px", overflow: "hidden",
              border: "0.5px solid rgba(255,255,255,0.1)",
            }}>
              <div style={{ position: "relative", paddingBottom: "56.25%" }}>
                <iframe
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div style={{
                background: "rgba(255,255,255,0.04)", padding: "12px 16px",
                display: "flex", alignItems: "center", gap: "10px",
              }}>
                <span style={{
                  fontSize: "11px", fontWeight: 600, color: "#60a5fa",
                  background: "rgba(96,165,250,0.1)", border: "0.5px solid rgba(96,165,250,0.2)",
                  borderRadius: "20px", padding: "3px 10px", whiteSpace: "nowrap",
                }}>
                  {v.tag}
                </span>
                <p style={{ fontSize: "12px", color: "#cbd5e1" }}>{v.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <a
            href="https://www.youtube.com/@ProDealAnalyst"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              border: "0.5px solid rgba(239,68,68,0.4)", color: "#f87171",
              borderRadius: "24px", padding: "10px 22px",
              fontSize: "13px", fontWeight: 600, textDecoration: "none",
            }}
          >
            <svg style={{ width: "18px", height: "18px" }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Watch More on @ProDealAnalyst
          </a>
        </div>
      </section>

    </main>
  );
}
