import "./globals.css";

export const metadata = {
  title: "Real Estate Deal Evaluator | Instant ROI, IRR & Cash Flow Analysis",
  description:
    "Analyze any property instantly with ROI, IRR, cash flow, equity multiple, 10-year projections, and PDF reports. Fast, private, and professional tools for agents and investors.",
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
   // ⭐ ADD THIS BLOCK RIGHT HERE ⭐
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon.ico",
    apple: "/favicon-180x180.png",
  },


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

  metadataBase: new URL("https://realestate-analytics.ai"),
  alternates: {
    canonical: "https://realestate-analytics.ai"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">{children}</body>
    </html>
  );
}
