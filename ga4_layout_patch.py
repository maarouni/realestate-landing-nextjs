s = open("app/layout.js", encoding="utf-8").read()
old = '        {/* Absolute fallback for stubborn scrapers */}\n        <meta name="image" content="https://realestate-analytics.ai/og-image.png" />\n      </head>'
new = '        {/* Absolute fallback for stubborn scrapers */}\n        <meta name="image" content="https://realestate-analytics.ai/og-image.png" />\n        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KK6DGNH7FY"></script>\n        <script dangerouslySetInnerHTML={{__html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag(\'js\',new Date());gtag(\'config\',\'G-KK6DGNH7FY\');`}} />\n      </head>'
if old in s:
    s = s.replace(old, new, 1)
    open("app/layout.js", "w", encoding="utf-8").write(s)
    print("OK: GA4 added to landing page")
else:
    print("WARN: pattern not found")
