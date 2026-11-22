# adjudoai.com — Redesign Brief / Site Audit

Captured 2026-11-22 from https://www.adjudoai.com (apex 307 → www).
Companion files: `CONTENT.md` (verbatim copy of every page), `screenshots/` (desktop 1440px + mobile 390px, full page), `html/` (rendered DOM per page).

---

## 1. Company snapshot

| | |
|---|---|
| Name | Adjudo AI (legal entity in privacy policy: "Adjudo AI, Inc.") |
| Product | Audit-grade AI health-claims adjudication engine for India |
| Audience | Health insurers, TPAs (third-party administrators), hospital networks |
| Core promise | "Every claim decision, cited & signed." Every deduction carries a policy-clause citation; every decision writes an HMAC-signed, hash-chained audit row |
| Offices | Pune (engineering HQ) · Ahmedabad (ML research + GTM) |
| Stage | Waitlist / paid-pilot cohort; claims "in production" with a TPA, insurer and hospital network (anonymised) |
| Team shown | Ashwin Vasani (Founder & CEO), Dr Mahesh Patel (Co-founder, clinical & insurance) |
| Emails | hello@ (sales, careers) · security@ · privacy@ |
| Social | linkedin.com/company/adjudo-ai |
| Tagline (footer) | "Made by hand, signed by machine." |

### Products / modules
1. **Engine:** deterministic knowledge-graph policy engine ("same inputs, same number")
2. **Audit:** HMAC-SHA256 hash-chained ledger, 8-year retention (IRDAI)
3. **Copilot:** Chrome extension (Manifest V3) that reads payer/TPA portals (IHX etc.), drafts pre-auth, fills fields
4. **Advisory:** policy recommendation engine across insurers (IRDAI wording corpus)
5. **Reach:** integrations (IHX, Medi Assist, Vidal, TPA back-offices, HIS/HMIS), HL7/FHIR, API/SFTP
6. **Console:** reviewer console with claim-scoped chat, precedent search (RAG over past decisions)

### Workflows covered
Pre-authorization · Cashless final bill · Reimbursement · Query response drafting

### Key numbers used across the site
98.94% decision accuracy · 100% cited & signed · 3,234 real claims evaluated · 8× reviewer throughput · 8-yr audit retention · −71% pre-auth TAT · −9.2% leakage · ↑22% first-pass approval · ↓41% disputed lines · problem stats: 4–6 hrs/claim, 8–14% leakage, 73% need a second look

### Compliance posture
IRDAI (audit-grade) · DPDP Act (India residency, AWS ap-south-1) · NABH-aware · ISO 27001 in progress (expected 2027). Sub-processors: AWS, Lambda Labs, Brevo, Vercel, Cloudflare.

### Pricing model
"Priced per claim, not per seat." Three tiers, all "talk to us": **Pilot** (≤5k adjudications/mo, 30–60 days, 1 LoB), **Growth** (most popular, unlimited, VPC, DPA), **Enterprise** (on-prem/air-gapped, custom fine-tunes, SSO/SCIM, 24/7).

---

## 2. Sitemap & page inventory

| Route | Purpose | Main sections |
|---|---|---|
| `/` | Home | Hero + claim receipt card · marquee · Problem stats · Flip-card deductions demo · Platform (6 cards) · Copilot demo · Unified dashboard demo · How it works (5 steps) · Numbers · Team · Proof (3 case stats) · Waitlist CTA |
| `/solutions/payers` | Insurers | Hero + 4 stats · 4 pains · 4-step workflow · FAQ (4) · CTA |
| `/solutions/tpas` | TPAs | Hero + 4 stats · 3 pains · 4-step workflow · FAQ (4) · CTA |
| `/solutions/hospitals` | Hospitals | Hero + 4 stats · 3 pains · 4-step workflow · FAQ (4) · CTA |
| `/healthcare` | Product overview | Hero · 3 workflows · Before/After table · **ROI calculator** (4 sliders) · CTA |
| `/pricing` | Pricing | 3 tiers · FAQ (5) · CTA |
| `/security` | Trust | 6 controls · compliance posture (4) · sub-processor table · vuln disclosure |
| `/about` | Company | Mission · 3 facts · Why now · 4 operating principles · hiring CTA |
| `/careers` | Hiring | 4 principles · 8 open roles (mailto apply) |
| `/contact` | Contact | 3 email channels · 2 offices · waitlist CTA |
| `/legal/privacy` | Legal | 11-section privacy policy (effective May 4, 2026) |
| `#waitlist` | Anchor on home | Single email field form |

**Nav:** Insurers · TPAs · Hospitals · Copilot ↗ · Pricing · Careers · [Join waitlist]
**Footer:** Solutions (Insurers, TPAs, Hospitals, Healthcare) · Product (Copilot, Pricing, Security, Waitlist) · Company (About, Careers, Contact, Privacy)

**Open roles (8):** Forward Deployment Engineer · TPA/Insurance Domain Specialist · Infrastructure Engineer (Inference) · Security Engineer · Backend Engineer (Health Tech) · AI/ML Engineer · Data Labeling / Golden-Set Lead · Engineering/ML Intern. ₹4 lakh referral bonus.

---

## 3. Current design system

**Style:** neo-brutalist / "paper receipt". Cream background, 2px near-black borders, hard offset drop shadows, cards slightly rotated, mono labels, orange accent, rubber-stamp "SIGNED & SEALED" motif.

### Colors
| Token | Value | Use |
|---|---|---|
| bg | `#FAF7F2` / cream `#F1E8D6` | page background |
| ink | `#17150F` | text, borders, shadows, footer bg |
| accent | `#E4572E` (hover `#C8461E`) | primary CTA, highlights, stamps |
| yellow | `#FBE29A` | callout cards, table headers |
| green | `#B9E3C6` / `#2FA36B` | pass / approved |
| pink | `#F6C6B4` | tags |
| red | `#D14A38` | denied |
| indigo | `#14132B` | body color value |

### Typography
- **Geist** (sans): body + headings, headings 800 weight, H1 ≈ 73.6px, H2 ≈ 44.8–48px
- **JetBrains Mono**: labels, claim IDs, numbers, tags (9–12px, uppercase, tracked)
- **Instrument Serif**: wordmark "adjudo." only

### Shape
Radius 16px (cards), 4–8px (tags/inputs), pill (9999px). No images: all visuals are HTML/CSS UI mockups.

### Interactions
Infinite marquee · flip cards (click) · hover-trace source diagram + "sync" animation · animated Copilot fill · ROI sliders with live ₹ math · FAQ accordions · Lenis smooth scroll.

### Tech stack (observed)
Next.js (App Router) on Vercel · Google Fonts · Lenis · Brevo for waitlist email. No images/CMS detected.

---

## 4. Problems to fix in the redesign

### Broken / missing
1. **Copilot link is dead.** `https://app.adjudoai.com/extension` returns `{"detail":"Not Found"}`. It's in the nav, hero, Copilot section and footer.
2. **No favicon** (`/favicon.ico` → 404).
3. **No OG image** (`twitter:card=summary`, no `og:image`). Every page shares the same og:title/og:description/og:url, so shared links all look like the homepage.
4. **The waitlist form only asks for email**, but the privacy policy says it collects name, company, role, country, volume and notes. Either expand the form (better lead qualification) or fix the policy.
5. **No dedicated waitlist / thank-you page.** "Join waitlist" just scrolls to `#waitlist` on the home page, and on other pages it sends people away.
6. Ashwin Vasani's card has no LinkedIn URL (Dr Patel's does).
7. Sitemap lists apex `adjudoai.com/...` URLs, which all 307 to `www`. The canonical domain should be consistent.
8. Copilot is linked externally (↗) but has no product page on the marketing site.

### Messaging inconsistencies
- **"Deterministic engine, no black box"** (home, healthcare) vs **"fine-tuned LLM / constrained-decoded model / calibrated confidence score / beats GPT-4o"** (solutions, careers, about). The redesign needs one clear story, e.g. "LLM extraction + deterministic rules engine".
- **Accuracy:** 98.94% (home) vs "96%+ line-item agreement" (hospitals FAQ).
- **Hindi:** "Native English + Hindi OCR" (healthcare) vs "English UI today; model can produce Hindi when asked" (TPA FAQ).
- **"Live in production"** vs "Join the waitlist" everywhere.
- Legal entity "Adjudo AI, Inc." for an India-only company. Confirm with the client.
- Insurer page names Star Health, Niva Bupa, HDFC Ergo, Care Health and ICICI Lombard in a way that can read as customers. Check permission.

### UX / design
- Home page is very long (≈7,000px desktop, ≈12,300px mobile) with 12 sections.
- **Mobile:** flip cards stack full-width with large empty areas, and the marquee and diagrams get cramped.
- Solutions pages are three near-identical templates. Pain/workflow/FAQ copy overlaps heavily.
- No social proof logos, testimonials with names, or case-study pages. "Proof" is three anonymised stats.
- No blog/resources, product demo video, or "book a demo" scheduler, and no `/copilot` or `/product` page.
- Footer LinkedIn is the only social link.
- No dark mode. Contrast of 50–60% opacity ink on cream should be checked for accessibility.

---

## 5. Questions for the client before design starts
1. Keep the brutalist/receipt identity (colors, Geist + mono, stamp motif), or do a full rebrand?
2. Do they have a logo file? The current mark is a CSS "a" tile plus the serif wordmark.
3. Real Copilot URL (Chrome Web Store link?)
4. Which claims are approved: accuracy figure, customer names, "in production" status?
5. Primary conversion goal: waitlist, demo booking, or sample-claim upload?
6. Should the waitlist collect company/role/volume? Where do leads go (Brevo list, CRM, Slack)?
7. Pages to add: Copilot, case studies, blog, Hindi version?
8. Real team photos, office photos, or product screenshots available?
9. Keep the ROI calculator assumptions (80% time cut, 4pp leakage, ₹85K avg ticket)?
