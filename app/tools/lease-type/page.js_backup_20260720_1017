"use client";
import { useState } from "react";
import Link from "next/link";

const LEASE_TYPES = {
  nnn: {
    name: "Triple Net (NNN)",
    landlordPays: [],
    tenantPays: ["Property Taxes", "Insurance", "Maintenance", "Utilities"],
    bestFor: "Long-term credit tenants (Walgreens, Dollar General, national chains)",
    risk: "Lowest landlord risk",
    cap: "Typically lowest cap rate (4–6%) due to predictability",
    color: "text-green-400",
    badge: "bg-green-400/10 border-green-400/30",
  },
  gross: {
    name: "Gross Lease",
    landlordPays: ["Property Taxes", "Insurance", "Maintenance", "Utilities"],
    tenantPays: ["Flat Monthly Rent Only"],
    bestFor: "Office, residential, short-term leases",
    risk: "Highest landlord risk — expense spikes hit your NOI",
    cap: "Higher cap rates required to compensate for expense risk",
    color: "text-red-400",
    badge: "bg-red-400/10 border-red-400/30",
  },
  modified: {
    name: "Modified Gross",
    landlordPays: ["Property Taxes", "Insurance", "Roof/Structure"],
    tenantPays: ["Utilities", "Janitorial", "Interior Maintenance"],
    bestFor: "Multi-tenant office, medical, flex industrial",
    risk: "Moderate — negotiate which expenses are shared",
    cap: "Middle ground on cap rates (5–7%)",
    color: "text-blue-400",
    badge: "bg-blue-400/10 border-blue-400/30",
  },
  nn: {
    name: "Double Net (NN)",
    landlordPays: ["Structural Repairs", "Roof"],
    tenantPays: ["Property Taxes", "Insurance", "Interior Maintenance", "Utilities"],
    bestFor: "Regional retail, local credit tenants",
    risk: "Low-moderate — landlord retains structural risk only",
    cap: "Similar to NNN but slightly higher (5–7%)",
    color: "text-yellow-400",
    badge: "bg-yellow-400/10 border-yellow-400/30",
  },
};

export default function LeaseType() {
  const [selected, setSelected] = useState("nnn");
  const lease = LEASE_TYPES[selected];

  return (
    <main className="min-h-screen px-4 py-12 md:px-16 max-w-4xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Lease Type Analyzer — NNN vs Gross vs Modified Gross",
          applicationCategory: "FinanceApplication",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description: "Compare NNN, Gross, Modified Gross, and Double Net lease structures. Understand expense responsibility, cap rate implications, and best use cases for each lease type.",
          url: "https://www.realestate-analytics.ai/tools/lease-type",
        }),
      }} />

      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-blue-300">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/tools" className="hover:text-blue-300">Tools</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">Lease Type Analyzer</span>
      </nav>

      <h1 className="text-4xl font-bold mb-3">Lease Type Analyzer</h1>
      <p className="text-slate-300 text-lg mb-10 max-w-2xl">
        Compare NNN, Gross, Modified Gross, and Double Net lease structures. Understand who pays what,
        how each structure affects your NOI, and what cap rate to underwrite for each lease type.
        Essential for CRE investors, agents, and lenders.
      </p>

      <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-8 mb-12 shadow-xl">
        <h2 className="text-xl font-semibold mb-6 text-blue-300">Select Lease Type</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {Object.entries(LEASE_TYPES).map(([key, val]) => (
            <button key={key} onClick={() => setSelected(key)}
              className={`p-3 rounded-xl border text-sm font-semibold transition-all ${
                selected === key
                  ? `${val.badge} ${val.color} border-current`
                  : "bg-slate-800/60 border-slate-600 text-slate-300 hover:border-slate-400"
              }`}>
              {val.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/60 rounded-xl p-5 border border-slate-700">
            <p className="text-slate-400 text-sm font-semibold mb-3">LANDLORD PAYS</p>
            {lease.landlordPays.length === 0
              ? <p className="text-green-400 font-semibold">Nothing — tenant covers all expenses</p>
              : lease.landlordPays.map((e) => (
                  <div key={e} className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                    <span className="text-slate-200">{e}</span>
                  </div>
                ))}
          </div>
          <div className="bg-slate-800/60 rounded-xl p-5 border border-slate-700">
            <p className="text-slate-400 text-sm font-semibold mb-3">TENANT PAYS</p>
            {lease.tenantPays.map((e) => (
              <div key={e} className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                <span className="text-slate-200">{e}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700">
            <p className="text-slate-400 text-xs mb-1">Best For</p>
            <p className="text-slate-200 text-sm">{lease.bestFor}</p>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700">
            <p className="text-slate-400 text-xs mb-1">Landlord Risk</p>
            <p className={`text-sm font-semibold ${lease.color}`}>{lease.risk}</p>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700">
            <p className="text-slate-400 text-xs mb-1">Cap Rate Context</p>
            <p className="text-slate-200 text-sm">{lease.cap}</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="https://www.realestate-analytics.ai/#try-it"
            className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition-all">
            Run Full Deal Analysis with This Lease Structure →
          </a>
        </div>
      </div>

      <article className="prose prose-invert max-w-none text-slate-300 space-y-6">
        <h2 className="text-2xl font-bold text-white">Why Lease Type Determines Value</h2>
        <p>The same building with the same rent can have a dramatically different value depending on the
          lease structure. A NNN lease transfers expense risk to the tenant, making income more predictable
          and justifying a lower cap rate (higher price). A gross lease keeps all expense risk with the
          landlord, requiring higher cap rates to compensate — or careful underwriting of expense growth.</p>

        <h2 className="text-2xl font-bold text-white">NNN vs. Gross: The NOI Impact</h2>
        <p>With a gross lease at $10,000/month, if property taxes rise $500/month, your NOI drops $500/month.
          With a NNN lease at the same rent, the tenant absorbs that increase. Over a 5-year hold,
          the NOI difference compounds significantly — directly impacting your IRR and exit value.</p>

        <h2 className="text-2xl font-bold text-white">Related Tools</h2>
        <div className="grid md:grid-cols-2 gap-4 not-prose">
          {[
            { href: "/tools/cap-rate-calculator", label: "Cap Rate Calculator", desc: "Value your property by lease type" },
            { href: "/tools/dscr-calculator", label: "DSCR Calculator", desc: "Lender debt coverage analysis" },
            { href: "/blog/load-your-om", label: "Load Your OM", desc: "Extract lease data from Offering Memorandum" },
            { href: "/tools/tenant-credit", label: "Tenant Credit Analysis", desc: "Screen tenants before signing" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="block bg-slate-800/60 border border-slate-700 rounded-xl p-4 hover:border-blue-400 transition-all">
              <p className="text-blue-300 font-semibold">{l.label}</p>
              <p className="text-slate-400 text-sm">{l.desc}</p>
            </Link>
          ))}
        </div>
      </article>

      <article className="prose prose-invert max-w-none text-slate-300 space-y-6 mt-12">
        <h2 className="text-2xl font-bold text-white">Lease Types Deep Dive: Gross, Net, NNN &amp; Modified</h2>
        <p>Who pays taxes, insurance, and maintenance — landlord or tenant — is the single biggest
          driver of what a commercial rent number actually means. A $30/SF gross lease and a $30/SF
          triple-net lease are completely different deals. This tool sorts a lease into its true type
          and shows what the effective obligations are.</p>

        <h2 className="text-2xl font-bold text-white">The Main Types</h2>
        <ul className="space-y-2">
          <li><strong className="text-white">Gross (Full-Service) Lease:</strong> tenant pays one
            rent number; landlord covers taxes, insurance, and operating expenses. Common in office.
            Simple for tenants, but the landlord carries expense inflation risk — often mitigated with
            expense stops or base-year clauses.</li>
          <li><strong className="text-white">Single Net (N):</strong> tenant pays rent + property
            taxes. Uncommon as a pure form.</li>
          <li><strong className="text-white">Double Net (NN):</strong> tenant pays rent + taxes +
            insurance; landlord keeps structural maintenance.</li>
          <li><strong className="text-white">Triple Net (NNN):</strong> tenant pays rent plus taxes,
            insurance, and maintenance. Standard for freestanding retail (pharmacies, QSR, dollar
            stores). The landlord's income approaches truly passive — which is why NNN deals with
            credit tenants trade at premium (lower) cap rates.</li>
          <li><strong className="text-white">Modified Gross:</strong> negotiated middle ground —
            typically tenant pays rent + utilities/janitorial, landlord covers structure, with expenses
            over a base year passed through. The details clause-by-clause matter more than the label.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white">Why It Changes Your Underwriting</h2>
        <p>The lease type determines how much of gross rent survives to NOI. $100,000 of NNN rent may
          be ~$95,000 of NOI; $100,000 of gross-lease rent could be $60,000–70,000 after
          landlord-paid expenses. Comparing properties without normalizing lease type is the most
          common apples-to-oranges error in small-balance CRE.</p>

        <h2 className="text-2xl font-bold text-white">The Questions to Ask Any Lease</h2>
        <p>Who pays taxes? Insurance? Roof and structure? Parking lot? CAM — and is it capped? Is
          there a base year or expense stop? What are the escalations? Two leases with the same "type"
          label can allocate thousands of dollars differently on these answers.</p>

        <p className="text-slate-400 text-sm italic">
          Data sources for market context:{" "}
          <a href="https://fred.stlouisfed.org" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">Federal Reserve (FRED)</a>,{" "}
          <a href="https://www.census.gov/programs-surveys/acs" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">U.S. Census ACS</a>,{" "}
          <a href="https://www.huduser.gov/portal/datasets/fmr.html" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">HUD Fair Market Rents</a>.
        </p>
      </article>
    </main>
  );
}
