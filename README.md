# Role Redesign Studio

Concept prototype for Team 6 in the NYUAD × KPMG Case Competition (finals 20 November 2026). It shows how a fictional UAE government entity, the Department of Business Services, can use AI to redesign roles without leaving people behind.

Live version: https://claude.ai/artifact/67fHmog52fxnRuBnDie23W

## See it

Open `dist/index.html` in a browser. That file is the whole app.

Two features work only when the page runs inside Claude: "Analyse a role" (live AI analysis) and "Download report". Everything else works anywhere.

## Change it

You need Node 18 or newer and Python 3.

```
cd dls
npm install
cd ..
python3 build.py
```

Then open `dist/index.html` again. Run `python3 build.py` after every edit.

## Where things live

| File | What you change there |
| --- | --- |
| `src/data.js` | The 21 roles (tasks, share of the week, Automate / Augment / Keep human-led, legal flag, future role, reskilling path), the 21 employees, training wave dates and the department's commitments |
| `src/app.js` | All screen text in English and Arabic (the `I18N` object at the top), the calculations (`REDUCTION`, `ATTRITION_RATE`, business case, payback), the views and the guided demo |
| `src/styles.css` | Layout and the app's own components. Every colour comes from design system tokens, so light and dark mode follow automatically |
| `src/tweaks.css` | Small overrides on design system components |
| `src/template.html` | The page shell |
| `dls/input.css` | Which design system classes get compiled |
| `build.py` | Combines everything into `dist/index.html` |

## Rules to keep

- Every text change needs English and Arabic. Arabic numbers with nouns go through `arCount()`, and female employees need feminine Arabic forms (`nextAr` and `nextDAr` in `data.js`).
- The task shares in each role must add up to 100.
- A task marked `legal: true` can never be set to Automate. This is the guardrail behind the UAE AI Charter's human oversight principle and the data protection law.
- Keep the department fictional: no real government logos, emblems or entity names, and no real people's personal data.
- Never put an API key in the page.
- Stay on `@aegov/design-system` 3.0.7, which is MIT licensed. The newer `@aegov/designsystem` v4 licence only covers UAE Federal Government projects.

## Default assumptions

- Time saved: Automate 80%, Augment 35%, Keep human-led 0%, on a 40-hour week.
- Natural attrition 6% a year. Cost per employee AED 300,000 a year. AI cost AED 6 million a year. Training AED 2,000 per person-week.
- Training waves: 11 January 2027 (customer services, licensing), 5 April 2027 (inspection, legal, corporate), 6 September 2027 (technology, communications, leadership).

## Preview link

Every merge into `main` rebuilds the page and publishes it to GitHub Pages:
https://blackberrybubblegum.github.io/role-redesign-studio/

Allow a minute or two after merging. You can follow the build under the repo's Actions tab.

## Publishing changes

The live link is a Claude artifact owned by Aamilah. Send her your changed `src` files or the new `dist/index.html`, and she republishes it.

You can also host `dist/index.html` anywhere, such as GitHub Pages or Netlify. Live analysis then needs `window.RRS_CONFIG = { apiUrl: "..." }` pointing at a small backend that holds the API key.

## Working with an AI assistant

Give the assistant this folder and this README, and ask for one change at a time. Ask it to keep both languages in sync, run `python3 build.py`, and check light and dark mode before you send anything back.
