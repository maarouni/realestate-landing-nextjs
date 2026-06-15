import sys
p = "app/page.js"
s = open(p, encoding="utf-8").read()

old_btn = '''          
            href="https://real-estate-deal-analyzer-pro.streamlit.app/Main_Single_Property"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-primary hover:bg-primary-light text-white font-semibold shadow-lg transition-all duration-300"
          >
            Launch Live App
          </a>'''

new_btn = '''          
            href="#try-it"
            className="px-8 py-3 rounded-full bg-primary hover:bg-primary-light text-white font-semibold shadow-lg transition-all duration-300"
          >
            Try the Free Analyzer
          </a>'''

anchor = '      {/* ── WHY AGENTS & TEAMS USE IT ── */}'

embed = '''      {/* ── FREE ANALYZER (embedded, always-on) ── */}
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

'''

changed = []
if old_btn in s:
    s = s.replace(old_btn, new_btn, 1); changed.append("button repointed")
else:
    print("WARN: button block not found — not changed")

if 'id="try-it"' in s:
    print("NOTE: embed already present — skipped")
elif anchor in s:
    s = s.replace(anchor, embed + anchor, 1); changed.append("embed inserted")
else:
    print("WARN: features anchor not found — embed not inserted")

if not changed:
    print("Nothing changed."); sys.exit(1)

open(p, "w", encoding="utf-8").write(s)
print("OK:", ", ".join(changed))
