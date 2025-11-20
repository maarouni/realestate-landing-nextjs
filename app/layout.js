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
      </head>
      <body className="bg-slate-950 text-slate-50">{children}</body>
    </html>
  );
}