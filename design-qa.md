# Pathos theme design QA

## Reference and implementation

- Reference URL: `https://pathos.site/`
- Local implementation URL: `http://localhost:3100/?theme=pathos&mode=dark`
- Desktop viewport: `1440 × 1000`
- Mobile viewport: `390 × 844`
- Reference screenshots:
  - `outputs/source-desktop-top.png`
  - `outputs/source-mobile-top.png`
- Implementation screenshots:
  - `outputs/implementation-desktop-dark.png`
  - `outputs/implementation-desktop-light.png`
  - `outputs/implementation-mobile-dark.png`
  - `outputs/implementation-mobile-light.png`
  - `outputs/implementation-article-mobile-light.png`
- Side-by-side comparison inputs:
  - `outputs/comparison-desktop-dark.png`
  - `outputs/comparison-mobile-dark.png`

## Scope and states checked

- Digital Garden dark-state visual match: header, 700px reading column, greeting, quote card, dividers, latest-post table, compact row density, and mobile wrapping.
- Added Nord-inspired light state using the same spacing and component structure.
- Desktop and mobile theme toggle updates the document theme class.
- Latest-post table links navigate to a rendered Notion article.
- Article layout, Notion content, metadata, mail link, home link, and back-to-top control render in the Pathos palette.
- Reduced-motion handling and semantic section/table markup are present.

## Comparison findings and fixes

1. Fixed header alignment drift by removing the centered header max-width and matching the reference's 48px desktop/mobile brand offset.
2. Fixed desktop table density by reducing cell padding and line height to match the compact Digital Garden rows.
3. Fixed copy and table labels to match the reference: two-line quote structure plus `标题` and `日期` headers.
4. Fixed mobile greeting rhythm by matching the reference's two-line break at `Hi, Welcome to / my blog!`.
5. Replaced reference emoji decorations with the project's existing Font Awesome icon asset library; icon meaning, color, alignment, and hierarchy are preserved without introducing synthetic artwork.
6. Added a daylight palette with verified readable contrast and no layout shift between modes.

## Remaining differences

- Article titles and dates are dynamic Notion content, so local QA used the public sample database. The Vercel Preview pass must use Pat's six restored posts.
- NotionNext's global development theme switcher appears at the lower-left in local screenshots. It is outside the Pathos theme layout and does not affect the header day/night control.

## Severity summary

- P0: 0
- P1: 0
- P2: 0
- P3: 0

final result: passed
