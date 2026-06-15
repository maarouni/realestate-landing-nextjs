import sys
p = "app/page.js"
s = open(p, encoding="utf-8").read()

old = '''      {/* ── FREE ANALYZER (embedded, always-on) ── */}
      <section id="try-it" className="w-full mb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <iframe
            src="https://maarouni.github.io/singleproperty-public/"
            title="Free Single Property Analyzer"
            className="w-full rounded-xl border-0 min-h-[1100px]"
            loading="lazy"
          />
        </div>
      </section>'''

new = '''      {/* ── FREE ANALYZER (embedded, always-on) ── */}
      <section id="try-it" className="w-full mb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            
              href="#try-it"
              className="inline-block px-8 py-3 rounded-full bg-primary hover:bg-primary-light text-white font-semibold shadow-lg transition-all duration-300"
            >
              Try it Free — No Signup
            </a>
          </div>
          <iframe
            src="https://maarouni.github.io/singleproperty-public/"
            title="Free Single Property Analyzer"
            className="w-full rounded-xl border-0 min-h-[1100px]"
            loading="lazy"
          />
        </div>
      </section>'''

if old in s:
    s = s.replace(old, new, 1)
    open(p, "w", encoding="utf-8").write(s)
    print("OK: embed widened + second CTA added")
else:
    print("WARN: embed block not found — nothing changed"); sys.exit(1)
