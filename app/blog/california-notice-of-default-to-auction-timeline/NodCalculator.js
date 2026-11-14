"use client";

import { useState } from "react";

// California nonjudicial foreclosure minimums (Civ. Code §2924, §2924f):
// sale no earlier than 3 calendar months + 20 days after the NOD is recorded;
// Notice of Sale may be recorded up to 5 days before the 3-month period ends.
export function addMonthsClamped(d, months) {
  const y = d.getUTCFullYear(), m = d.getUTCMonth() + months, day = d.getUTCDate();
  const last = new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
  return new Date(Date.UTC(y, m, Math.min(day, last)));
}
const addDays = (d, n) => new Date(d.getTime() + n * 86400000);
const fmt = (d) => d.toLocaleDateString("en-US", { timeZone: "UTC", weekday: "short", month: "long", day: "numeric", year: "numeric" });

export default function NodCalculator() {
  const [nod, setNod] = useState("2026-03-02");
  let out = null;
  if (/^\d{4}-\d{2}-\d{2}$/.test(nod)) {
    const [y, m, d] = nod.split("-").map(Number);
    const start = new Date(Date.UTC(y, m - 1, d));
    const threeMo = addMonthsClamped(start, 3);
    const sale = addDays(threeMo, 20);
    out = {
      threeMo: fmt(threeMo),
      nos: fmt(addDays(threeMo, -5)),
      sale: fmt(sale),
      days: Math.round((sale - start) / 86400000),
    };
  }
  return (
    <div className="not-prose bg-slate-800/60 border border-blue-400/20 rounded-xl p-6 my-6">
      <p className="text-lg font-bold text-white mb-1">Earliest Foreclosure Sale Date Calculator (California)</p>
      <p className="text-slate-400 text-sm mb-4">Enter the date the Notice of Default was recorded.</p>
      <label className="block text-sm text-slate-300 mb-1" htmlFor="nod-date">NOD recording date</label>
      <input id="nod-date" type="date" value={nod} onChange={(e) => setNod(e.target.value)}
        className="bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white mb-5" />
      {out && (
        <div className="grid sm:grid-cols-3 gap-3" data-testid="nod-results">
          <div className="bg-slate-900 rounded-lg p-3">
            <p className="text-slate-400 text-xs">3-month period ends</p>
            <p className="text-white font-semibold">{out.threeMo}</p>
          </div>
          <div className="bg-slate-900 rounded-lg p-3">
            <p className="text-slate-400 text-xs">Earliest Notice of Sale recording</p>
            <p className="text-white font-semibold">{out.nos}</p>
          </div>
          <div className="bg-blue-600/20 border border-blue-400/40 rounded-lg p-3">
            <p className="text-slate-300 text-xs">Earliest possible sale</p>
            <p className="text-white font-bold" data-testid="nod-sale">{out.sale}</p>
            <p className="text-slate-400 text-xs mt-1">{out.days} days after the NOD</p>
          </div>
        </div>
      )}
      <p className="text-slate-500 text-xs mt-4">Statutory minimum only. Sales are often postponed, so the actual date is usually later. Not legal advice.</p>
    </div>
  );
}
