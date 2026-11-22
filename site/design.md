# Adjudo design system (locked)

Hallmark: theme **Coral** (deal 1/3, seed clean-corporate-company-adjudo-4083·53aa9f28·2026-11-22·r0), genre modern-minimal, posture restrained. Every page of adjudoai.com reads this file; pages share theme, type and accent and differ only in shape.

## Material
Warm grey paper, a felt desk, cotton stationery lit from the left (shadows fall right). Records the product handles (bills, decision letters, clause cards, JSON) are built as stationery (`.stock`) on the desk (`.desk`). One ink band per page at most (`.board`). Coral (`--color-accent`, `--color-accent-2`, `--color-paid`) is spent only on: the pressed settled state (`.pressed`, e.g. "Signed"), link underlines on hover, focus. Never coral text, fills or bands.

## Tokens
`src/styles/hallmark/tokens.css` (Coral + shared scale) and `src/app/globals.css` (textures, container 1360px, fonts). Self-hosted General Sans 400/500/600 (display and body) and Geist Mono 400 (figures in a column, code, hashes only).

## Components
- Controls: `.btn.btn--ink` (the one primary per screen), `.btn.btn--card` (letterpress secondary), `.btn--sm`. Links `.link`; `LearnMore` for a link with the transitions.dev #24 chevron.
- `PageHero` (Banner posture) opens every inner page.
- `.head` (h2 + one line, split), `.rows` + `t-acc` (question rows, transitions.dev #21), `.table`, `.stock`, `.desk`, `.board`, `.fig`, `.pressed`.
- Astryx (`@astryxdesign/core`) for real form controls only, inside `.astryx-scope` (e.g. `WaitlistForm`).
- Motion: transitions.dev (`src/styles/transitions.css`); transform and opacity only; one reveal per page; reduced-motion end states.

## Hero postures by route
`/` Stage (paperwork on the desk) · every other route: Banner (`PageHero`).

## Never
Eyebrows or small labels above headings; tracked capitals; middle-dot strings; arrows glued to text; icon tiles above headings; three equal icon cards; a stats row of numbers not in research/CONTENT.md; invented customers, quotes, logos, numbers; em dashes; a newsletter close; pill buttons.
