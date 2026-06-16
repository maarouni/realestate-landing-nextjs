import "./globals.css";

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
    title: "Real Estate Deal Evaluator | Instant ROI, IRR & Cash Flow Analysis",
    description:
      "Instantly evaluate any property with ROI, IRR, cash flow, deal grading, and 10-year projections — no spreadsheets required.",
    url: "https://realestate-analytics.ai",
    siteName: "RealEstate-Analytics.ai",
    type: "website",
    images: [
      {
        url: "https://realestate-analytics.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Estate Deal Evaluator"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Deal Evaluator | Instant ROI, IRR & Cash Flow Analysis",
    description:
      "Analyze any real estate deal instantly — ROI, IRR, cash flow, 10-year projections, and PDF reports.",
    images: ["https://realestate-analytics.ai/og-image.png"]
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon.ico",
    apple: "/favicon-180x180.png",
  },
  metadataBase: new URL("https://realestate-analytics.ai"),
  alternates: {
    canonical: "https://realestate-analytics.ai"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="msvalidate.01" content="2708908B2B2049880F4F2ADAC5CC73AB" />
        <meta property="og:title" content="Real Estate Deal Evaluator | Instant ROI, IRR & Cash Flow Analysis" />
        <meta property="og:description" content="Instantly evaluate any property with ROI, IRR, cash flow, deal grading, and 10-year projections — no spreadsheets required." />
        <meta property="og:image" content="https://realestate-analytics.ai/og-image.png" />
        <meta property="og:url" content="https://realestate-analytics.ai/" />
        <meta property="og:type" content="website" />
        <meta name="image" content="https://realestate-analytics.ai/og-image.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KK6DGNH7FY"></script>
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-KK6DGNH7FY');`}} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Is the deal analyzer really free?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, the Single Property Analyzer is completely free to use. No credit card, no trial period, no catch.\"}}, {\"@type\": \"Question\", \"name\": \"Do I need to create an account or log in?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No account or login needed. Open the tool, enter your numbers, and run a full deal analysis instantly \\u2014 no signup required.\"}}, {\"@type\": \"Question\", \"name\": \"What metrics does the analyzer calculate?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"The analyzer calculates Cap Rate, Cash-on-Cash Return, IRR, DSCR, Equity Multiple, Breakeven Year, Year 1 Cash Flow, and a 10-year projection \\u2014 built on CCIM-level investment formulas.\"}}, {\"@type\": \"Question\", \"name\": \"Does it work for commercial properties?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, but commercial properties require a separate tool with more detailed setup. The free Single Property Analyzer is optimized for residential investment properties including single-family, duplexes, triplexes, and fourplexes.\"}}, {\"@type\": \"Question\", \"name\": \"Can I download or share the analysis?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. The analyzer generates a branded PDF report you can download instantly. You can also email the full analysis directly to any client or partner from within the tool.\"}}, {\"@type\": \"Question\", \"name\": \"How long does it take to analyze a deal?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Under 60 seconds. Enter your numbers, move the sliders, and every metric updates instantly \\u2014 no waiting, no manual calculations.\"}}, {\"@type\": \"Question\", \"name\": \"Is my data private and secure?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. No account is required, nothing is stored on our servers, and your analysis runs entirely in your browser. Nothing is shared with third parties.\"}}, {\"@type\": \"Question\", \"name\": \"What is a good cap rate for an investment property?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It depends on the market. Generally 5-7% is solid for most U.S. residential markets. Bay Area properties typically run lower (3-5%) due to high prices, while Texas and Florida often yield 7-9%. The analyzer calculates your exact cap rate instantly based on your inputs.\"}}]}"}}
        />
        <style>{`
          .nav-dropdown { position: relative; padding-bottom: 12px; }
          .nav-dropdown:hover .dropdown-panel { display: block; }
          .dropdown-panel {
            display: none;
            position: absolute;
            top: 44px;
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
      </head>
      <body className="bg-slate-950 text-slate-50">
        <nav style={{backgroundColor:"#0a1628", borderBottom:"1px solid #1e293b", padding:"0 24px", display:"flex", alignItems:"center", justifyContent:"space-between", height:"56px", position:"sticky", top:0, zIndex:50}}>
          <a href="/" style={{color:"#fff", fontWeight:"700", fontSize:"15px", textDecoration:"none", letterSpacing:"0.02em"}}>
            RealEstate-Analytics.ai
          </a>
          <div style={{display:"flex", gap:"4px", alignItems:"center"}}>

            {/* Tools dropdown */}
            <div className="nav-dropdown" style={{position:"relative"}}>
              <a href="/tools" style={{
                color:"#ffffff", fontSize:"13px", fontWeight:"600",
                textDecoration:"none", padding:"6px 12px", borderRadius:"6px",
                display:"flex", alignItems:"center", gap:"4px", cursor:"pointer"
              }}>
                Tools
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{marginTop:"1px"}}>
                  <path d="M2 4l4 4 4-4" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className="dropdown-panel">
                <div className="dropdown-label">Calculators</div>
                {[
                  { href:"/tools/cap-rate-calculator", icon:"📊", title:"Cap Rate Calculator", desc:"NOI ÷ price — instant deal grading" },
                  { href:"/tools/irr-calculator", icon:"📈", title:"IRR Calculator", desc:"Total return over hold period" },
                  { href:"/tools/dscr-calculator", icon:"🏦", title:"DSCR Calculator", desc:"Lender debt coverage qualification" },
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
              <a href="/blog" style={{
                color:"#ffffff", fontSize:"13px", fontWeight:"600",
                textDecoration:"none", padding:"6px 12px", borderRadius:"6px",
                display:"flex", alignItems:"center", gap:"4px"
              }}>
                Blog
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{marginTop:"1px"}}>
                  <path d="M2 4l4 4 4-4" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className="dropdown-panel">
                <div className="dropdown-label">Guides</div>
                {[
                  { href:"/blog/how-to-analyze-multifamily-deal", icon:"🏢", title:"Analyze a Multifamily Deal", desc:"7-step CCIM underwriting framework" },
                  { href:"/blog/what-is-a-good-cap-rate-2026", icon:"📉", title:"Good Cap Rate in 2026?", desc:"Market benchmarks by metro & asset class" },
                  { href:"/blog/zipcode-market-analysis", icon:"🗺️", title:"ZIP Code Market Analysis", desc:"Vacancy, rent trends, data sources" },
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


            <a href="#full-analyzer" style={{
              backgroundColor:"#2563eb", color:"#fff", fontSize:"13px",
              fontWeight:"600", textDecoration:"none", padding:"7px 16px",
              borderRadius:"20px", marginLeft:"4px"
            }}>
              Try Free
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
