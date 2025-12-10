"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-10 md:px-16 md:py-16">

      {/* HERO SECTION */}
      <section className="hero max-w-4xl mx-auto text-center mb-16">
        <p className="uppercase tracking-[0.25em] text-lg md:text-xl text-blue-300 font-semibold mb-5">
          REAL ESTATE DEAL EVALUATOR
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Instant real estate deal analysis
          <br />
          for agents, investors, lenders,
          <br />
          and brokers.
        </h1>

        <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-3xl mx-auto">
          Grade any property in seconds with ROI, IRR, cash flow, breakeven year,
          equity multiple, 10-year projections, and deal-quality grading — no spreadsheets or logins.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://real-estate-deal-analyzer-pro.streamlit.app/Main_Single_Property"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-primary hover:bg-primary-light text-white font-semibold shadow-lg transition-all duration-300"
          >
            Launch Live App
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

        <p className="mt-4 text-lg text-slate-200">Fast, private, accurate, and client-ready.</p>
      </section>

      {/* CCIM BADGE */}
      <section className="w-full mb-20">
        <div className="max-w-4xl mx-auto flex justify-center">
          <div className="relative">
            <div
              className="
                bg-gradient-to-r from-yellow-400/30 to-yellow-200/10 
                backdrop-blur-md border border-yellow-400/40 
                shadow-[0_0_40px_rgba(255,215,0,0.5)]
                px-8 py-5 rounded-xl
              "
            >
              <div className="animate-pulse-slow text-yellow-300 text-3xl mb-2 text-center">
                ✨
              </div>

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

      {/* WHY AGENTS & TEAMS USE IT */}
      <section className="features max-w-5xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Why Agents &amp; Teams Use It
        </h2>

        {/* TESTIMONIAL BLOCK */}
        <div className="w-full my-6">
          <section className="py-12 max-w-6xl mx-auto px-6">

            {/* Trusted by Professionals */}
            <h2 className="text-center text-3xl font-bold mb-6 text-white">
              ⭐ Trusted by Professionals
            </h2>

            {/* Daisy */}
            <div className="bg-[#0d0f22] border border-yellow-400/20 rounded-xl p-8 mb-10 shadow-[0_0_30px_rgba(255,215,0,0.15)]">
              <p className="text-lg text-gray-200 italic mb-4">
                “The tool will be very effective for people purchasing property as an investment…
              </p>
              <p className="text-right text-yellow-300 font-semibold">
                — Daisy Borba, Pleasanton Properties Mgmt, REG RE Inc
              </p>
            </div>

            {/* Side-by-side */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* Behruz */}
              <div className="bg-[#0d0f22] border border-yellow-400/20 rounded-xl p-8 shadow-[0_0_25px_rgba(255,215,0,0.12)]">
                <p className="text-lg text-gray-200 italic mb-4">
                  “This tool is the first thing I use when evaluating a property…”
                </p>
                <p className="text-right text-yellow-300 font-semibold">
                  — Behruz Sadeghi, Broker, Royal LePage
                </p>
              </div>

              {/* Mike */}
              <div className="bg-[#0d0f22] border border-yellow-400/20 rounded-xl p-8 shadow-[0_0_25px_rgba(255,215,0,0.12)]">
                <p className="text-lg text-gray-200 italic mb-4">
                  “This tool has been extremely helpful…”
                </p>
                <p className="text-right text-yellow-300 font-semibold">
                  — Mike Daoudi, REALTOR®, Excel Realty
                </p>
              </div>
            </div>

          </section>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid gap-8 md:grid-cols-3 mt-8">
          <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-6 shadow-lg animate-card">
            <h3 className="text-xl font-semibold mb-3">Instant Deal Math</h3>
            <p className="text-slate-200 text-sm">
              ROI, IRR, cash-on-cash, cap rate, and 10-year projections — zero spreadsheets.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-6 shadow-lg animate-card">
            <h3 className="text-xl font-semibold mb-3">Client-Ready PDF &amp; Emails</h3>
            <p className="text-slate-200 text-sm">
              Auto-generate a polished PDF with summaries, metrics, and explanations.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-6 shadow-lg animate-card">
            <h3 className="text-xl font-semibold mb-3">No Logins, Full Privacy</h3>
            <p className="text-slate-200 text-sm">
              Runs fully in the browser. No stored data — perfect for open houses.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-3xl mx-auto mb-20 text-left">
        <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
        <ol className="list-decimal list-inside space-y-3 text-slate-200">
          <li>Enter property basics: address, ZIP code, price, rent, expenses, financing.</li>
          <li>See instant ROI, IRR, cash flow, deal grade, and 10-year projections.</li>
          <li>Download a professional PDF or email it directly to a client.</li>
          <li>Download the full PDF User Manual with explanations and examples.</li>
        </ol>
      </section>

      {/* DEMO */}
      <section className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-bold mb-3">Real-Time Analysis Demonstration</h2>
        <p className="text-slate-200 mb-6">
          Use the play button to watch an instant deal evaluation.
        </p>

        <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
          <video
            src="/demo.mov"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto rounded-2xl border border-slate-700 shadow-xl"
          ></video>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-3xl mx-auto mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-slate-200 mb-2">Interested in a demo for your team?</p>
        <p className="text-slate-200 mb-2">
          Email: <a href="mailto:maarouni@gmail.com" className="text-accent underline">maarouni@gmail.com</a>
        </p>
        <p className="text-slate-200 mb-2">Phone: <span className="text-accent">925-353-5263</span></p>
        <p className="text-slate-400 text-sm">
          Mention “Deal Evaluator Demo” and your market (city/region).
        </p>
      </section>

    </main>
  );
}