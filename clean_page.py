import sys
p = "app/page.js"
s = open(p, encoding="utf-8").read()

hero_line = '''        <p className="mt-4 text-lg text-slate-200">
          Fast, private, accurate, and client-ready.
        </p>
'''

contact_block = '''      {/* ── CONTACT ── */}
      <section id="contact" className="max-w-3xl mx-auto mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-slate-200 mb-2">Interested in a demo for your office or team?</p>
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
          Mention &quot;Deal Evaluator Demo&quot; and your market (city/region).
        </p>
      </section>

'''

changed = []
if hero_line in s:
    s = s.replace(hero_line, "", 1); changed.append("hero tagline")
else:
    print("WARN: hero tagline not found")

if contact_block in s:
    s = s.replace(contact_block, "", 1); changed.append("contact section")
else:
    print("WARN: contact section not found")

if not changed:
    print("Nothing changed."); sys.exit(1)

open(p, "w", encoding="utf-8").write(s)
print("OK removed:", ", ".join(changed))
