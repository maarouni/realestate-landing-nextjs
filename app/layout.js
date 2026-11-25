import "./globals.css";
import NavLink from "./NavLink";

export const metadata = {
  title: "Real Estate Deal Evaluator | Instant ROI, IRR & Cash Flow Analysis",
  description:
    "Instantly evaluate any property with ROI, IRR, cash flow, deal grading, and 10-year projections — no spreadsheets required.",
  keywords: [
    "real estate deal analyzer",
    "real estate calculator",
    "property ROI",
    "rental property analysis",
    "IRR calculator",
    "cash flow calculator",
    "investment property tool",
    "real estate analytics",
    "deal evaluator"
  ],
  authors: [{ name: "Masoud Arouni" }],
  creator: "Masoud Arouni",
  publisher: "RealEstate-Analytics.ai",
  openGraph: {
    siteName: "RealEstate-Analytics.ai",
    type: "website",
    images: [
      {
        url: "https://www.realestate-analytics.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Estate Deal Evaluator"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.realestate-analytics.ai/og-image.png"]
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon.ico",
    apple: "/favicon-180x180.png",
  },
  metadataBase: new URL("https://www.realestate-analytics.ai"),
  alternates: {
    canonical: "./"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="msvalidate.01" content="2708908B2B2049880F4F2ADAC5CC73AB" />
        
        {/* Google Analytics 4 (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KK6DGNH7FY"></script>
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-KK6DGNH7FY');`}} />
        
        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "xpkcxh8d8o");
            `,
          }}
        />
        <style>{`
          .nav-mobile { display: none; position: relative; }
          .nav-mobile summary { list-style: none; cursor: pointer; color: #fff; font-size: 22px; padding: 4px 8px; }
          .nav-mobile summary::-webkit-details-marker { display: none; }
          .nav-mobile-panel { position: absolute; right: 0; top: calc(100% + 10px); background: #0d1f3c; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 8px; min-width: 200px; display: flex; flex-direction: column; gap: 4px; box-shadow: 0 20px 60px rgba(0,0,0,0.5); }
          .nav-mobile-panel a { color: #fff; font-size: 15px; font-weight: 600; text-decoration: none; padding: 10px 14px; border-radius: 8px; }
          .nav-mobile-cta { background: #2563eb; text-align: center; border-radius: 20px !important; }
          @media (max-width: 900px) {
            .nav-links { display: none !important; }
            .nav-mobile { display: block; }
          }
          .nav-dropdown { position: relative; }
          .nav-dropdown:hover .dropdown-panel,
          .nav-dropdown:focus-within .dropdown-panel { display: block; }
          .dropdown-panel::before {
            content: "";
            position: absolute;
            top: -14px;
            left: 0;
            right: 0;
            height: 14px;
          }
          .dropdown-panel {
            display: none;
            position: absolute;
            top: calc(100% + 12px);
            left: -12px;
            background: #0d1f3c;
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 12px;
            padding: 8px;
            padding-top: 16px;
            min-width: 280px;
            z-index: 200;
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          }
          .dropdown-panel a {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 8px;
            text-decoration: none;
            transition: background 0.15s;
          }
          .dropdown-panel a:hover { background: rgba(255,255,255,0.06); }
          .dropdown-panel .item-title {
            font-size: 13px;
            font-weight: 600;
            color: #e2e8f0;
            display: block;
          }
          .dropdown-panel .item-desc {
            font-size: 11px;
            color: #64748b;
            display: block;
            margin-top: 1px;
          }
          .dropdown-panel .item-icon {
            font-size: 16px;
            margin-top: 1px;
            flex-shrink: 0;
          }
          .dropdown-divider {
            height: 1px;
            background: rgba(255,255,255,0.07);
            margin: 6px 8px;
          }
          .dropdown-label {
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.12em;
            color: #475569;
            text-transform: uppercase;
            padding: 6px 12px 2px;
          }
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "RealEstate-Analytics.ai Deal Analyzer",
            "alternateName": "Property IQ Deal Analyzer",
            "url": "https://www.realestate-analytics.ai",
            "applicationCategory": "FinanceApplication, Real Estate Investment Analysis, Property Underwriting, Rental Property Calculator, Commercial Real Estate",
            "applicationSubCategory": "Real Estate Deal Analysis",
            "operatingSystem": "Web Browser",
            "offers": [
              {"@type": "Offer", "name": "Free", "price": "0", "priceCurrency": "USD"},
              {"@type": "Offer", "name": "Pro", "price": "45", "priceCurrency": "USD", "url": "https://www.realestate-analytics.ai/pricing"}
            ],
            "audience": {"@type": "Audience", "audienceType": "Real Estate Investors, REALTORS, Commercial Real Estate Brokers, Lenders, Property Managers"},
            "description": "CCIM-method real estate deal analyzer that calculates cap rate, IRR, DSCR, cash-on-cash return, equity multiple, and 10-year projections for residential and commercial investment properties. Free, browser-based, no signup required.",
            "featureList": "Cap Rate Calculator, IRR Calculator, DSCR Calculator, Cash-on-Cash Return, Equity Multiple, 10-Year Cash Flow Projections, PDF Report, Vacancy Stress Test, 3-Scenario Analysis",
            "keywords": "cap rate calculator, real estate deal analyzer, DSCR calculator, IRR calculator, rental property analysis, CCIM underwriting, investment property tool"
          })}}
        />
      </head>
      <body className="bg-slate-950 text-slate-50">
        <nav style={{backgroundColor:"#0a1628", borderBottom:"1px solid #1e293b", padding:"0 24px", display:"flex", alignItems:"center", justifyContent:"space-between", height:"56px", position:"sticky", top:0, zIndex:50}}>
          <a href="/" style={{color:"#fff", fontWeight:"700", fontSize:"15px", textDecoration:"none", letterSpacing:"0.02em"}}>
            RealEstate-Analytics.ai
          </a>
          <div className="nav-links" style={{display:"flex", gap:"4px", alignItems:"center", marginRight:"auto", marginLeft:"32px"}}>

            <a href="https://calendly.com/maarouni/30min-1" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",fontSize:"13px",fontWeight:"600",textDecoration:"none",padding:"0 14px",height:"32px",whiteSpace:"nowrap",display:"flex",alignItems:"center",borderRadius:"6px",boxShadow:"inset 0 0 0 0.5px rgba(255,255,255,0.25)",marginRight:"4px"}}>Book a Demo</a>


            {/* Tools dropdown */}
            <div className="nav-dropdown" style={{position:"relative"}}>
              <NavLink href="/tools" style={{
                color:"#ffffff", fontSize:"13px", fontWeight:"600",
                textDecoration:"none", padding:"0 12px", height:"32px",whiteSpace:"nowrap", borderRadius:"6px",
                display:"flex", alignItems:"center", gap:"4px", cursor:"pointer"
              }}>
                Tools
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{display:"block"}}>
                  <path d="M2 4l4 4 4-4" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </NavLink>
              <div className="dropdown-panel">
                <div className="dropdown-label">Calculators</div>
                {[
                  { href:"/tools/cap-rate-calculator", icon:"📊", title:"Cap Rate Calculator", desc:"NOI ÷ price — instant deal grading" },
                  { href:"/tools/irr-calculator", icon:"📈", title:"IRR Calculator", desc:"Total return over hold period" },
                  { href:"/tools/dscr-calculator", icon:"🏦", title:"DSCR Calculator", desc:"Lender debt coverage qualification" },
                  { href:"/tools/breakeven", icon:"⚖️", title:"Break-Even Calculator", desc:"Occupancy needed to cover costs + debt" },
                  { href:"/tools/cash-on-cash-calculator", icon:"💵", title:"Cash-on-Cash Return", desc:"Levered yield on invested equity" },
                ].map(item => (
                  <a key={item.href} href={item.href}>
                    <span className="item-icon">{item.icon}</span>
                    <span>
                      <span className="item-title">{item.title}</span>
                      <span className="item-desc">{item.desc}</span>
                    </span>
                  </a>
                ))}
                <div className="dropdown-divider" />
                <div className="dropdown-label">Property Tools</div>
                {[
                  { href:"/tools/tenant-credit", icon:"👤", title:"Tenant Credit Analysis", desc:"Screen applicants — rent-to-income & DTI" },
                  { href:"/tools/lease-type", icon:"📋", title:"Lease Type Analyzer", desc:"NNN vs Gross vs Modified Gross" },
                ].map(item => (
                  <a key={item.href} href={item.href}>
                    <span className="item-icon">{item.icon}</span>
                    <span>
                      <span className="item-title">{item.title}</span>
                      <span className="item-desc">{item.desc}</span>
                    </span>
                  </a>
                ))}
                <div className="dropdown-divider" />
                <a href="/tools" style={{justifyContent:"center"}}>
                  <span className="item-title" style={{color:"#60a5fa", fontSize:"12px"}}>View All Tools →</span>
                </a>
              </div>
            </div>

            {/* Blog dropdown */}
            <div className="nav-dropdown" style={{position:"relative"}}>
              <NavLink href="/blog" style={{
                color:"#ffffff", fontSize:"13px", fontWeight:"600",
                textDecoration:"none", padding:"0 12px", height:"32px",whiteSpace:"nowrap", borderRadius:"6px",
                display:"flex", alignItems:"center", gap:"4px"
              }}>
                Blog
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{display:"block"}}>
                  <path d="M2 4l4 4 4-4" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </NavLink>
              <div className="dropdown-panel">
                <div className="dropdown-label">Guides</div>
                {[
                  { href:"/blog/texas-rentals-dont-pencil", icon:"🎙️", title:"Texas Rentals at 7.5%", desc:"Two live deals from the Real Estate Pros Podcast" },
                  { href:"/blog/how-to-analyze-multifamily-deal", icon:"🏢", title:"Analyze a Multifamily Deal", desc:"7-step CCIM underwriting framework" },
                  { href:"/blog/what-is-a-good-cap-rate-2026", icon:"📉", title:"Good Cap Rate in 2026?", desc:"Market benchmarks by metro & asset class" },
                  { href:"/blog/zipcode-market-analysis", icon:"🗺️", title:"ZIP Code Market Analysis", desc:"Vacancy, rent trends, data sources" },
                  { href:"/blog/is-chatgpt-accurate-for-real-estate-deal-analysis", icon:"🧮", title:"Is ChatGPT Accurate for Deals?", desc:"AI vs fixed formulas, worked example" },
                  { href:"/blog/california-notice-of-default-to-auction-timeline", icon:"⏳", title:"CA NOD to Auction Timeline", desc:"Earliest sale date calculator" },
                  { href:"/blog/dscr-stress-test", icon:"📊", title:"DSCR Stress Test", desc:"Test a deal against lower rents & higher rates" },
                  { href:"/blog/best-ai-underwriting-tools-2026", icon:"🏆", title:"How to Choose AI Underwriting Software", desc:"Types of tools and what to look for" },
                ].map(item => (
                  <a key={item.href} href={item.href}>
                    <span className="item-icon">{item.icon}</span>
                    <span>
                      <span className="item-title">{item.title}</span>
                      <span className="item-desc">{item.desc}</span>
                    </span>
                  </a>
                ))}
                <div className="dropdown-divider" />
                <div className="dropdown-label">AI Features</div>
                {[
                  { href:"/blog/load-your-om", icon:"🤖", title:"Load Your OM", desc:"AI extracts deal data from PDF" },
                  { href:"/blog/load-t12", icon:"📄", title:"Load Your T-12", desc:"AI trailing income statement analysis" },
                  { href:"/blog/rent-roll-analysis", icon:"📋", title:"Rent Roll Analysis", desc:"Extract and verify a rent roll" },
                  { href:"/blog/deterministic-vs-ai-underwriting", icon:"⚖️", title:"Deterministic vs AI Underwriting", desc:"Which to trust with deal math" },
                ].map(item => (
                  <a key={item.href} href={item.href}>
                    <span className="item-icon">{item.icon}</span>
                    <span>
                      <span className="item-title">{item.title}</span>
                      <span className="item-desc">{item.desc}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <NavLink href="/about" style={{color:"#ffffff",fontSize:"13px",fontWeight:"600",textDecoration:"none",padding:"0 14px",height:"32px",whiteSpace:"nowrap",display:"flex",alignItems:"center",borderRadius:"6px",marginRight:"8px"}}>About</NavLink>

            <NavLink href="/contact" style={{color:"#ffffff",fontSize:"13px",fontWeight:"600",textDecoration:"none",padding:"0 14px",height:"32px",whiteSpace:"nowrap",display:"flex",alignItems:"center",borderRadius:"6px",marginRight:"8px"}}>Contact</NavLink>

            <NavLink href="/pricing" style={{color:"#ffffff",fontSize:"13px",fontWeight:"600",textDecoration:"none",padding:"0 14px",height:"32px",whiteSpace:"nowrap",display:"flex",alignItems:"center",borderRadius:"6px",marginRight:"8px"}}>Pricing</NavLink>

            <a href="/#quick-analyzer" style={{
              backgroundColor:"#2563eb", color:"#fff", fontSize:"13px",
              fontWeight:"600", textDecoration:"none", padding:"0 16px",
              height:"32px",whiteSpace:"nowrap", display:"flex", alignItems:"center",
              borderRadius:"20px", marginLeft:"4px"
            }}>
              Try Free
            </a>
          </div>
          {/* Mobile menu (shown under 900px) */}
          <details className="nav-mobile">
            <summary aria-label="Open menu">☰</summary>
            <div className="nav-mobile-panel">
              <NavLink href="/tools">Tools</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <a href="https://calendly.com/maarouni/30min-1" target="_blank" rel="noopener noreferrer">Book a Demo</a>
              <a href="/#quick-analyzer" className="nav-mobile-cta">Try Free</a>
            </div>
          </details>
        </nav>
        {children}
      </body>
    </html>
  );
}