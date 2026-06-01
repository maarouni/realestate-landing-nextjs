"use client";

import Image from "next/image";

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

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-10 md:px-16 md:py-16">

      {/* ── HERO ── */}
      <section className="hero max-w-4xl mx-auto text-center mb-16">
        <p className="uppercase tracking-[0.25em] text-lg md:text-xl text-blue-300 font-semibold mb-5">
          REAL ESTATE DEAL EVALUATOR
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Find Great Deals in 60 Seconds.
          <br />
          Know the Numbers.
          <br />
          Invest with Confidence.
        </h1>

        <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-3xl mx-auto">
          Grade any property in seconds with ROI, IRR, cash flow, breakeven year,
          equity multiple, 10-year projections, and deal-quality grading — no
          spreadsheets or logins.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#try-it"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-primary hover:bg-primary-light text-white font-semibold shadow-lg transition-all duration-300"
          >
            Try the Free Analyzer
          </a>
          <a
            href="https://calendly.com/maarouni/30min-1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-slate-400 text-slate-100 hover:border-blue-300 hover:text-blue-300 transition-all duration-300"
          >
            Book a Zoom Demo
          </a>
        </div>

        <p className="mt-4 text-lg text-slate-200">
          Fast, private, accurate, and client-ready.
        </p>
      </section>

      {/* ── CCIM BADGE ── */}
      <section className="w-full mb-20">
        <div className="max-w-4xl mx-auto flex justify-center">
          <div className="relative">
            <div className="bg-gradient-to-r from-yellow-400/30 to-yellow-200/10 backdrop-blur-md border border-yellow-400/40 shadow-[0_0_40px_rgba(255,215,0,0.5)] px-8 py-5 rounded-xl">
              <div className="animate-pulse-slow text-yellow-300 text-3xl mb-2 text-center">✨</div>
              <p className="text-lg text-yellow-200 tracking-wide text-center font-semibold">
                Built &amp; powered by CCIM-level investment formulas<br />
                trusted by appraisers, lenders &amp; underwriters.
              </p>
            </div>
            <div className="absolute -top-3 -left-8 animate-sparkle text-yellow-300">✴️</div>
            <div className="absolute -bottom-3 -right-8 animate-sparkle-delayed text-yellow-300">✴️</div>
          </div>
        </div>
      </section>

      {/* ── FREE ANALYZER (embedded, always-on) ── */}
      <section id="try-it" className="w-full mb-20 px-4">
        <div className="max-w-5xl mx-auto text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">
            🏡 Single Property Analyzer <span className="text-yellow-300">— FREE</span>
          </h2>
          <p className="text-lg text-slate-200 mb-1">
            Move the sliders. Watch every metric update live.
          </p>
          <p className="text-sm text-slate-400">
            No login. No signup. Runs in your browser.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <iframe
            src="https://maarouni.github.io/singleproperty-public/"
            title="Free Single Property Analyzer"
            className="w-full rounded-xl border-0 min-h-[1100px]"
            loading="lazy"
          />
        </div>
      </section>

      {/* ── WHY AGENTS & TEAMS USE IT ── */}
      <section className="features max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-2 text-center">Why Agents &amp; Teams Use It</h2>

        <section className="w-full my-10">
          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 shadow-lg text-center">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">⭐ Trusted by Professionals</h3>
              <p className="italic text-slate-200 text-lg leading-relaxed">
                "This tool is the first thing I use when evaluating a property.
                It gives me fast clarity, removes uncertainty, and helps my clients
                feel confident in their decisions."
              </p>
              <p className="mt-4 text-slate-300 font-semibold">— Behruz Sadeghi, Broker, Royal LePage</p>
            </div>
          </div>
        </section>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-6 shadow-lg animate-card">
            <h3 className="text-xl font-semibold mb-3">Instant Deal Math</h3>
            <p className="text-slate-200 text-sm">
              ROI, IRR, cash-on-cash, cap rate, and 10-year projections in seconds — zero formulas, zero spreadsheets.
            </p>
          </div>
          <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-6 shadow-lg animate-card">
            <h3 className="text-xl font-semibold mb-3">Instant Client-Ready PDF &amp; Email Reports</h3>
            <p className="text-slate-200 text-sm">
              Auto-generate a PDF with summary, metrics, and AI-written explanation for your client — ready to email instantly.
            </p>
          </div>
          <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-6 shadow-lg animate-card">
            <h3 className="text-xl font-semibold mb-3">No Logins, Full Privacy</h3>
            <p className="text-slate-200 text-sm">
              Runs fully in the browser. No accounts, no stored data — perfect for open houses on agent tablets.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="max-w-3xl mx-auto mb-20 text-left">
        <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
        <ol className="list-decimal list-inside space-y-3 text-slate-200">
          <li>Enter property basics: address, ZIP code, price, rent, expenses, financing.</li>
          <li>See instant ROI, IRR, cash flow, deal grade, and 10-year projections.</li>
          <li>Download a professional PDF summary or email it directly to a client.</li>
          <li>Download a PDF User Manual with full explanations of financial terms and real-world examples.</li>
        </ol>
      </section>

      {/* ════════════════════════════════════════════
          YOUTUBE VIDEO SECTION  (replaces demo.mov)
          ════════════════════════════════════════════ */}
      <section className="max-w-5xl mx-auto mb-20">

        {/* Section header */}
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.2em] text-sm text-blue-300 font-semibold mb-2">
            FROM THE CHANNEL
          </p>
          <h2 className="text-3xl font-bold mb-3">See It in Action</h2>
          <p className="text-slate-300 max-w-xl mx-auto">
            Real deals. Real numbers. Watch how investors and agents use the tool to stress-test properties before committing.
          </p>
        </div>

        {/* Featured video — large */}
        <div className="mb-6 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${VIDEOS[0].id}?rel=0&modestbranding=1`}
              title={VIDEOS[0].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="bg-slate-900/80 px-5 py-3 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-400/10 border border-blue-400/20 px-2 py-1 rounded-full">
              {VIDEOS[0].tag}
            </span>
            <p className="text-slate-200 text-sm font-medium">{VIDEOS[0].title}</p>
          </div>
        </div>

        {/* 2 smaller videos side by side */}
        <div className="grid md:grid-cols-2 gap-6">
          {VIDEOS.slice(1).map((video) => (
            <div
              key={video.id}
              className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl"
            >
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="bg-slate-900/80 px-4 py-3 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-400/10 border border-blue-400/20 px-2 py-1 rounded-full whitespace-nowrap">
                  {video.tag}
                </span>
                <p className="text-slate-200 text-sm font-medium line-clamp-1">{video.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Channel CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://www.youtube.com/@ProDealAnalyst"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-red-500/50 text-red-400 hover:bg-red-500/10 hover:border-red-400 transition-all duration-300 text-sm font-semibold"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Watch More on @ProDealAnalyst
          </a>
        </div>
      </section>
      {/* ════════════════════════════════════════════ */}

      {/* ── CONTACT ── */}
      <section id="contact" className="max-w-3xl mx-auto mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-slate-200 mb-2">Interested in a demo for your office or team?</p>
        <p className="text-slate-200 mb-2">
          Email:{" "}
          <a href="mailto:maarouni@gmail.com" className="text-accent underline">
            maarouni@gmail.com
          </a>
        </p>
        <p className="text-slate-200 mb-2">
          Phone: <span className="text-accent">925-353-5263</span>
        </p>
        <p className="text-slate-400 text-sm">
          Mention &quot;Deal Evaluator Demo&quot; and your market (city/region).
        </p>
      </section>

    </main>
  );
}
