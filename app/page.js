export default function Home() {
  return (
    <main className="min-h-screen px-4 py-10 md:px-16 md:py-16">
      
      {/* HERO SECTION */}
      <section className="hero max-w-4xl mx-auto text-center mb-20">

        {/* TOP LABEL */}
        <p className="uppercase tracking-[0.25em] text-lg md:text-xl text-blue-300 font-semibold mb-5">
          REAL ESTATE DEAL EVALUATOR
        </p>

        {/* MAIN HEADLINE */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Instant real estate deal analysis<br /> 
          for agents, investors, lenders,<br /> 
          and brokers.
        </h1>

        <p className="text-lg md:text-xl text-slate-200 mb-8">
          Grade any property in seconds with ROI, IRR, cash flow, equity multiple, 
          10-year projections, and deal-quality grading — all without spreadsheets or logins.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* Launch App */}
          <a
            href="https://real-estate-deal-analyzer-pro.streamlit.app/Main_Single_Property"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-primary hover:bg-primary-light text-white font-semibold shadow-lg transition-all duration-300"
          >
            Launch Live App
          </a>

          {/* Calendly Zoom Demo */}
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

      
      {/* WHY AGENTS USE IT */}
      <section className="features max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Agents & Teams Use It</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="p-6 border border-slate-700 rounded-2xl bg-slate-900/60 
                          hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
            <h3 className="font-semibold mb-2 text-lg">Instant Deal Math</h3>
            <p className="text-sm text-slate-200">
              ROI, IRR, cash-on-cash, cap rate, and 10-year projections in seconds — zero formulas, zero spreadsheets.
            </p>
          </div>

          {/* CARD 2 — glowing enhanced */}
          <div className="p-6 border border-blue-400/40 rounded-2xl bg-slate-900/60 animate-glow
                          hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
            <h3 className="font-semibold mb-2 text-lg">Instant Client-Ready PDF & Email Reports</h3>
            <p className="text-sm text-slate-200">
              Auto-generate a PDF with summary, metrics, and AI-written explanation for your client — ready to email instantly.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-6 border border-slate-700 rounded-2xl bg-slate-900/60 
                          hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
            <h3 className="font-semibold mb-2 text-lg">No Logins, Full Privacy</h3>
            <p className="text-sm text-slate-200">
              Runs fully in the browser. No accounts, no stored data — perfect for open houses on agent tablets.
            </p>
          </div>
        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="how-it-works max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>

        <ul className="list-decimal ml-6 space-y-3 text-slate-100">
          <li>Enter property basics: address, ZIP code, price, rent, expenses, financing.</li>
          <li>Instant ROI, IRR, cash flow, deal grade, and 10-year projections.</li>
          <li>Download a professional PDF summary or email it to a client.</li>
          <li>You can also download a PDF User Manual with full explanations of the financial terms and real-world examples.</li>
        </ul>
      </section>


{/* LIVE DEMO */}
<section className="demo max-w-5xl mx-auto mb-20">
  <h2 className="text-3xl font-bold mb-4 text-center"> 
    Real-Time Analysis Demonstration 
    </h2>

  <p className="text-center text-slate-300 mb-6">
    Use the play button to watch an instant deal evaluation
  </p>

  <div className="w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-xl">
    <video 
      controls
      className="w-full h-full rounded-2xl"
      src="/demo.mov"
    />
  </div>
</section>


      {/* PRICING */}
      <section className="pricing max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-4 text-center">Pricing & Subscription</h2>

        <p className="text-center text-slate-200 mb-4">
          Currently in pilot with selected agents and teams. Early adopters receive preferred lifetime pricing.
        </p>

        <div className="text-center text-slate-300 text-sm space-y-1">
          <p>Planned subscription tiers: Individual Agent, Team, and Brokerage.</p>
          
          {/* Enhanced Coming Soon */}
          <p className="text-blue-300 font-medium animate-fade-in-up">
            Next Up: <span className="font-semibold">Advanced Investment Intelligence</span><br />
            Including neighborhood trend insights, historical pricing patterns, and multi-property portfolio comparisons.
          </p>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="max-w-3xl mx-auto mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-slate-200 mb-2">
          Interested in a demo for your office or team?
        </p>

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
          Mention "Deal Evaluator Demo" and your market (city/region).
        </p>
      </section>

    </main>
  );
}
