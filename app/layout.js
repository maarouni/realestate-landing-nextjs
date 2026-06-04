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

  // === SEO / Social ===
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
        {/* Force LinkedIn to refresh OG */}
        <meta property="og:title" content="Real Estate Deal Evaluator | Instant ROI, IRR & Cash Flow Analysis" />
        <meta property="og:description" content="Instantly evaluate any property with ROI, IRR, cash flow, deal grading, and 10-year projections — no spreadsheets required." />
        <meta property="og:image" content="https://realestate-analytics.ai/og-image.png" />
        <meta property="og:url" content="https://realestate-analytics.ai/" />
        <meta property="og:type" content="website" />

        {/* Absolute fallback for stubborn scrapers */}
        <meta name="image" content="https://realestate-analytics.ai/og-image.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KK6DGNH7FY"></script>
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-KK6DGNH7FY');`}} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Is the deal analyzer really free?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, the Single Property Analyzer is completely free to use. No credit card, no trial period, no catch.\"}}, {\"@type\": \"Question\", \"name\": \"Do I need to create an account or log in?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No account or login needed. Open the tool, enter your numbers, and run a full deal analysis instantly \\u2014 no signup required.\"}}, {\"@type\": \"Question\", \"name\": \"What metrics does the analyzer calculate?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"The analyzer calculates Cap Rate, Cash-on-Cash Return, IRR, DSCR, Equity Multiple, Breakeven Year, Year 1 Cash Flow, and a 10-year projection \\u2014 built on CCIM-level investment formulas.\"}}, {\"@type\": \"Question\", \"name\": \"Does it work for commercial properties?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, but commercial properties require a separate tool with more detailed setup. The free Single Property Analyzer is optimized for residential investment properties including single-family, duplexes, triplexes, and fourplexes.\"}}, {\"@type\": \"Question\", \"name\": \"Can I download or share the analysis?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. The analyzer generates a branded PDF report you can download instantly. You can also email the full analysis directly to any client or partner from within the tool.\"}}, {\"@type\": \"Question\", \"name\": \"How long does it take to analyze a deal?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Under 60 seconds. Enter your numbers, move the sliders, and every metric updates instantly \\u2014 no waiting, no manual calculations.\"}}, {\"@type\": \"Question\", \"name\": \"Is my data private and secure?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. No account is required, nothing is stored on our servers, and your analysis runs entirely in your browser. Nothing is shared with third parties.\"}}, {\"@type\": \"Question\", \"name\": \"What is a good cap rate for an investment property?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It depends on the market. Generally 5-7% is solid for most U.S. residential markets. Bay Area properties typically run lower (3-5%) due to high prices, while Texas and Florida often yield 7-9%. The analyzer calculates your exact cap rate instantly based on your inputs.\"}}]}"}}
        />
      </head>
      <body className="bg-slate-950 text-slate-50">{children}</body>
    </html>
  );
}