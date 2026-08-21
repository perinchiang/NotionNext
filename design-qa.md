# Pathos theme design QA

## Source lineage

- Live reference: `https://pathos.site/`
- Layout source: `https://github.com/oleeskild/digitalgarden`
- Obsidian theme source: `https://github.com/insanum/obsidian_nord`
- Theme release: Obsidian Nord `0.2.0`
- The live `_theme.5d7ff7d4.css` hash was reproduced from the Obsidian Nord source blob at commit `7afae8c1898ec6ef1978bc87c251a92e3738bd83`.
- Third-party notices: `docs/pathos-third-party-licenses.md`

## Browser QA

- Local route: `http://localhost:3100/?theme=pathos`
- Desktop viewport checked: `1280 × 720`
- Mobile viewport checked: `390 × 844`
- Reference captures: `outputs/source-desktop-top.png` and `outputs/source-mobile-top.png`

Verified states:

- Digital Garden structure: fixed 55.88px flat navbar, 700px reading column, 198px greeting baseline, source-style callouts, 32px dividers, compact latest-post table, and mobile wrapping.
- Obsidian Nord dark palette: canvas `#2e3440`, navbar `#3b4252`, text `#eceff4`, link `#d08770`, plus source table striping and heading hierarchy.
- Source typography: system UI fallback stack; greeting `29.124px / 34.9488px / 700`; section title `26.316px / 31.5792px / 600`; callout and table body `16px`; table header `21.6px / 600`.
- Source geometry: quote `124.8px`, information callout `128px`, contact callout `104px`; table columns `78.7% / 21.3%` and source-equivalent row heights.
- Light palette: Nord light surfaces with contrast-safe yellow, green, purple, and link foreground adaptations.
- Theme toggle works on home and article pages without layout shift.
- Mobile home at `390 × 844` has no horizontal overflow; the greeting emoji stays inline with the first title line; the table keeps 32px side margins and the same source typography.
- Notion article text inherits the active palette. Dark H2/H3 resolve to `rgb(235, 203, 139)` and `rgb(163, 190, 140)`; light H2/H3 resolve to `rgb(116, 90, 32)` and `rgb(84, 113, 63)`.
- Browser console error count: zero in both color modes.

## Remaining deployment check

- Local QA uses NotionNext's public sample database. The Vercel Preview pass must confirm Pat's six restored posts and open one real Notion article.
- NotionNext's development-only theme switcher can appear at the lower-left locally. It is outside the Pathos layout and does not replace the navbar day/night control.

## Severity summary

- P0: 0
- P1: 0
- P2: 0
- P3: 0

final result: local pass
