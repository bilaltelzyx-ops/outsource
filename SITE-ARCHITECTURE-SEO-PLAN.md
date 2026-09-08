# Site Architecture & SEO Plan — outsourcemedicalbillingservices.us

Main keyword: **"outsource medical billing services"**
Business: Medical billing / RCM outsourcing services for US healthcare providers.

---

## 0. Important note before you build

There is an existing, nearly-identical-name site: **outsourcemedicalbillingservices.com** (a branch of ClickVision/BPO). Because your domain (`.us`) is a near-exact match to an already-indexed `.com` competitor, you should:
- Never copy their copy/structure directly (duplicate-content and brand-confusion risk).
- Lean harder on differentiators in your `H1`/title tags (e.g. add "USA-Based", a niche, or a guarantee) so Google and users don't conflate the two domains.
- Consider trademark/brand-name checks before heavy marketing spend, since the names are close enough to cause paid-search and brand-search overlap.

---

## 1. Competitor snapshot

| Competitor | Positioning | Notable structure |
|---|---|---|
| outsourcercm.com | Healthcare BPO arm of Flatworld Solutions | Single deep service page (`/healthcare-bpo-services.php`) + about; thin specialty/location silo — an opportunity gap you can beat |
| curemd.com | Software-led (EHR/PM) + billing services, ~30 yrs | `/medical-billing-services`, `/medical-credentialing-services/`, `/ai-assisted-medical-billing-solutions`, `/state/{state}-medical-billing` state silo, `/small-business-medical-billing-software.asp` segment page |
| auxis.com | General BPO/finance-and-accounting outsourcer, healthcare is one vertical among many | Not a billing-first competitor; weak on medical billing specialty depth — low direct SEO threat but shows the "enterprise BPO" positioning angle |
| bellmedex.com | Aggressive local + specialty programmatic SEO, 75–90+ specialties | `/specialties/` hub + `/specialties/{specialty}-billing-services/`; hyper-local pages like `/10001-medicalbilling-new-york/`, `/11368-new-york-dme-medical-billing/`, specialty+city combos |
| prgmd.com | Full RCM + credentialing + healthcare marketing add-on | `/medical-billing-services/`, `/medical-billing-specialties/`, `/provider-credentialing/`, `/medical-billing-in-{state}/` (state silo), `/healthcare-digital-marketing-usa/` |
| ensourcercm.com | US-based only (no offshore), coding/audit/CDI focused, hospital & health-system clients | `/services`, `/revenue-cycle-management-consulting`, `/early-out-services`, `/outsource-medical-coding`, `/whitepapers` (resource silo) |

**Takeaways for your build:**
1. **State-level location pages are table stakes** (CureMD, PRG both do this). BellMedEx goes further with city/zip-level pages — very aggressive, borderline spammy at scale, but it proves the model works. Recommend: start with all 50 states, expand to top metro **cities** later, skip zip-code-level pages (too thin/spammy for a new domain — Google can treat near-duplicate hyper-local pages as low value if not properly differentiated).
2. **Specialty pages are the single biggest content silo** across every competitor (50–90+ specialties). This is your best long-tail opportunity.
3. Nobody strongly owns **"outsource"-intent commercial pages** like in-house-vs-outsourced comparisons, pricing/ROI pages, or EHR/PM-software-specific billing pages ("billing services for AdvancedMD/Kareo/athenahealth/eClinicalWorks users") — gaps you can win.
4. Trust content (case studies, HIPAA/compliance page, whitepapers) shows up at Ensource and generically across the niche — needed for E-E-A-T on YMYL-adjacent healthcare-finance content.

---

## 2. Recommended SILO architecture

Use a strict **hub-and-spoke silo model**: each pillar page links down to its children only; children link back up to their pillar and sideways to 2–3 closely related siblings (never across unrelated silos, except via footer/global nav).

```
Home (/)  →  targets "Outsource Medical Billing Services"
│
├── /services/                         [SILO 1: Services — pillar]
│     ├── /services/medical-billing-services/
│     ├── /services/medical-coding-services/
│     ├── /services/revenue-cycle-management/
│     ├── /services/medical-credentialing-services/
│     ├── /services/denial-management-services/
│     ├── /services/accounts-receivable-recovery/
│     ├── /services/insurance-eligibility-verification/
│     ├── /services/prior-authorization-services/
│     ├── /services/charge-entry-services/
│     ├── /services/payment-posting-services/
│     ├── /services/patient-statement-billing-services/
│     ├── /services/medical-billing-audit-services/
│     ├── /services/accounts-receivable-follow-up/
│     └── /services/virtual-medical-scribe-services/
│
├── /specialties/                      [SILO 2: Specialties — pillar]
│     ├── /specialties/cardiology-billing-services/
│     ├── /specialties/orthopedic-billing-services/
│     ├── /specialties/mental-health-billing-services/
│     ├── /specialties/behavioral-health-billing-services/
│     ├── /specialties/family-practice-billing-services/
│     ├── /specialties/internal-medicine-billing-services/
│     ├── /specialties/dermatology-billing-services/
│     ├── /specialties/pediatrics-billing-services/
│     ├── /specialties/gastroenterology-billing-services/
│     ├── /specialties/podiatry-billing-services/
│     ├── /specialties/chiropractic-billing-services/
│     ├── /specialties/physical-therapy-billing-services/
│     ├── /specialties/occupational-therapy-billing-services/
│     ├── /specialties/speech-therapy-billing-services/
│     ├── /specialties/radiology-billing-services/
│     ├── /specialties/urology-billing-services/
│     ├── /specialties/obgyn-billing-services/
│     ├── /specialties/anesthesiology-billing-services/
│     ├── /specialties/emergency-medicine-billing-services/
│     ├── /specialties/dme-billing-services/                (Durable Medical Equipment)
│     ├── /specialties/ambulance-ems-billing-services/
│     ├── /specialties/urgent-care-billing-services/
│     ├── /specialties/oncology-billing-services/
│     ├── /specialties/neurology-billing-services/
│     ├── /specialties/ent-billing-services/                (Otolaryngology)
│     ├── /specialties/optometry-billing-services/
│     ├── /specialties/ophthalmology-billing-services/
│     ├── /specialties/pain-management-billing-services/
│     ├── /specialties/wound-care-billing-services/
│     ├── /specialties/nephrology-billing-services/
│     ├── /specialties/endocrinology-billing-services/
│     ├── /specialties/pulmonology-billing-services/
│     ├── /specialties/plastic-surgery-billing-services/
│     ├── /specialties/general-surgery-billing-services/
│     ├── /specialties/vascular-surgery-billing-services/
│     ├── /specialties/psychiatry-billing-services/
│     ├── /specialties/geriatrics-billing-services/
│     ├── /specialties/home-health-billing-services/
│     ├── /specialties/hospice-billing-services/
│     ├── /specialties/dental-billing-services/
│     ├── /specialties/pathology-billing-services/
│     ├── /specialties/rheumatology-billing-services/
│     ├── /specialties/allergy-immunology-billing-services/
│     └── /specialties/sleep-medicine-billing-services/
│     (Phase 1 launch: bold the top ~15 by search volume; ship rest in Phase 2 — see §6)
│
├── /locations/                        [SILO 3: Locations — pillar]
│     ├── /locations/                  (hub: US map / state directory)
│     ├── /locations/california-medical-billing-services/
│     ├── /locations/texas-medical-billing-services/
│     ├── /locations/florida-medical-billing-services/
│     ├── /locations/new-york-medical-billing-services/
│     ├── /locations/{state-slug}-medical-billing-services/   ... (all 50 states + DC)
│     └── Phase 2 → /locations/{state}/{city-slug}-medical-billing-services/
│           e.g. /locations/texas/houston-medical-billing-services/
│
├── /integrations/                     [SILO 4: EHR/Software — gap vs. competitors]
│     ├── /integrations/advancedmd-medical-billing-services/
│     ├── /integrations/kareo-medical-billing-services/
│     ├── /integrations/athenahealth-medical-billing-services/
│     ├── /integrations/eclinicalworks-medical-billing-services/
│     ├── /integrations/drchrono-medical-billing-services/
│     ├── /integrations/nextgen-medical-billing-services/
│     └── /integrations/practice-fusion-medical-billing-services/
│
├── /practice-types/                   [SILO 5: Practice size/type segments]
│     ├── /practice-types/solo-practitioner-billing-services/
│     ├── /practice-types/small-practice-medical-billing-services/
│     ├── /practice-types/group-practice-medical-billing-services/
│     ├── /practice-types/multi-specialty-clinic-billing-services/
│     └── /practice-types/hospital-health-system-billing-services/
│
├── /company/                          [SILO 6: Trust / About]
│     ├── /about-us/
│     ├── /why-choose-us/
│     ├── /how-it-works/
│     ├── /pricing/
│     ├── /case-studies/
│     │     └── /case-studies/{client-story-slug}/
│     ├── /testimonials/
│     ├── /hipaa-compliance/
│     ├── /careers/
│     └── /partners/  (optional — referral/affiliate program)
│
├── /resources/                        [SILO 7: Blog / content marketing]
│     ├── /resources/                  (blog hub)
│     ├── /resources/{article-slug}/
│     ├── /resources/category/medical-billing/
│     ├── /resources/category/medical-coding/
│     ├── /resources/category/rcm/
│     ├── /resources/category/denial-management/
│     ├── /resources/faq/               (or standalone /faqs/)
│     └── /resources/glossary/          (medical billing terms glossary — great for long-tail + internal links)
│
├── /get-a-free-quote/   (primary conversion/lead page — linked from every CTA)
├── /contact-us/
├── /sitemap/            (human-readable HTML sitemap, aids crawlability of the deep silos)
├── /privacy-policy/
├── /terms-of-conditions/
└── /404 (custom, with search + links back to /services/ and /specialties/)
```

### Silo linking rules
1. **Home** links to the 3 pillar hubs (Services, Specialties, Locations) + top CTA to `/get-a-free-quote/`.
2. Each **pillar hub** (`/services/`, `/specialties/`, `/locations/`) links to all its children; children link back to the hub + laterally to 2-3 related siblings (e.g. Cardiology Billing links to Denial Management service page and to Internal Medicine specialty page).
3. **Cross-silo links only through relevant anchor text in body copy**, not nav — e.g. a Cardiology specialty page can link once to `/services/denial-management-services/` because denial management is highly relevant to cardiology claims.
4. **Location × Specialty combinations** (Phase 3 programmatic pages, e.g. "Cardiology Billing Services in Texas") should live under `/locations/texas/cardiology-billing-services/` and link up to both the Texas location page and the Cardiology specialty page — this is what BellMedEx does at scale. Only build these once the base specialty + state pages are indexed and ranking (avoid thin/duplicate content penalties on a new domain).
5. Blog posts in `/resources/` link INTO service/specialty/location pages (never the reverse in body copy) — blog is the link-equity feeder, money pages are the destination.

---

## 3. Main menu (header navigation)

Recommend a **mega-menu** for Services and Specialties (too many items for a simple dropdown), simple dropdown for Locations, flat links for the rest.

```
[Logo]   Services ▾   Specialties ▾   Locations ▾   Why Us ▾   Resources   Contact Us   [Get Free Quote →]
```

- **Services ▾** (mega menu, grouped):
  - Column 1 — Core Billing: Medical Billing Services, Revenue Cycle Management, Medical Coding
  - Column 2 — Revenue Recovery: Denial Management, A/R Recovery & Follow-up, Payment Posting
  - Column 3 — Front Office: Eligibility Verification, Prior Authorization, Charge Entry, Credentialing
  - "View All Services →" link to `/services/`
- **Specialties ▾** (mega menu, grouped by category):
  - Primary Care (Family Practice, Internal Medicine, Pediatrics)
  - Surgical (General Surgery, Orthopedics, Plastic Surgery, Vascular)
  - Behavioral/Mental Health, Therapy (PT/OT/Speech)
  - Diagnostic & Facility (Radiology, Pathology, DME, Home Health)
  - "View All 40+ Specialties →" link to `/specialties/`
- **Locations ▾**: top 8-10 states by market size (CA, TX, FL, NY, PA, IL, OH, GA) + "View All States →" to `/locations/`
- **Why Us ▾** (simple dropdown, rolls up the trust silo): About Us, Why Choose Us, How It Works, Pricing, Case Studies, Testimonials, HIPAA Compliance, Careers
- **Resources**: links straight to `/resources/` (blog hub)
- **Contact Us**: `/contact-us/`
- **Get Free Quote** — styled as a button, not a text link, always visible (sticky header), links to `/get-a-free-quote/`

### Footer (full sitemap for crawlability + internal linking)
4–5 columns:
1. **Services** — all service pages
2. **Top Specialties** — top 10-12 specialty links + "View All →"
3. **Top Locations** — top 10-12 state links + "View All →"
4. **Company** — About, Why Us, Case Studies, Careers, HIPAA Compliance, Blog, FAQ
5. **Legal/Contact** — Privacy Policy, Terms, Contact, phone number, address, social icons

---

## 4. Slug/URL conventions

- All lowercase, hyphen-separated, no stop-word stuffing beyond what's needed for clarity.
- Consistent suffix pattern per silo so users and Google immediately recognize page type:
  - Services → `-services` (e.g. `denial-management-services`)
  - Specialties → `-billing-services` (e.g. `cardiology-billing-services`)
  - Locations → `-medical-billing-services` (e.g. `texas-medical-billing-services`)
  - Integrations → `-medical-billing-services` prefixed by platform name
- One folder level deep per silo (`/services/x/`, `/specialties/x/`, `/locations/x/`) — keeps the silo visible in the URL itself (reinforces topical relevance) without going so deep it hurts crawl/link equity flow.
- Avoid BellMedEx-style zip-code-first slugs (`/10001-medicalbilling-new-york/`) — harder to read, weaker brand signal, and treat as a later/advanced tactic only once city pages are performing.

---

## 5. Page-by-page content notes for the money pages

- **Home (`/`)**: H1 = "Outsource Medical Billing Services" (or a close variant with a differentiator, e.g. "USA's Trusted Partner to Outsource Medical Billing Services"). Sections: value props, services overview (cards linking to `/services/`), specialties ticker (linking to `/specialties/`), states served map (linking to `/locations/`), process/how-it-works, testimonials, stats (claims accuracy %, collections increase %), CTA.
- **`/services/medical-billing-services/`**: this is your #2 most important page after Home — treat as the pillar's pillar. Deep, comprehensive, FAQ schema, links out to every other service and top 8-10 specialties.
- **`/specialties/{specialty}-billing-services/`** template: specialty-specific CPT/ICD-10 pain points, common denial reasons for that specialty, why outsourcing helps, CTA, 3 related specialties, 2 related services.
- **`/locations/{state}-medical-billing-services/`** template: state-specific payer mix notes (Medicaid MCO landscape, major regional payers), state licensing/compliance notes if relevant, CTA, link to 3 neighboring/major-market states, link to top 3 specialties.
- **`/pricing/`**: explain percentage-of-collections vs. flat-fee models — this is a high-intent page competitors under-invest in; own it.
- **`/get-a-free-quote/`**: short form (practice size, specialty, current EHR/PM software, monthly claim volume) — the EHR/PM field doubles as a natural feed into your `/integrations/` silo.

---

## 6. Build phasing (recommended launch order)

**Phase 1 — Launch (Month 1)**
- Home, About, Why Choose Us, How It Works, Contact, Get a Free Quote, Privacy/Terms
- Core 8 service pages (Medical Billing, RCM, Coding, Credentialing, Denial Management, A/R Recovery, Eligibility Verification, Prior Auth)
- Top 15 specialty pages (by search volume — start with Cardiology, Mental/Behavioral Health, Orthopedics, Family Practice, Internal Medicine, Physical Therapy, Chiropractic, Dermatology, Pediatrics, OB-GYN, DME, Urgent Care, Podiatry, Radiology, General Surgery)
- Top 10 state pages (CA, TX, FL, NY, PA, IL, OH, GA, NC, MI)
- 5-8 launch blog posts targeting informational queries ("in-house vs outsourced medical billing," "how much does it cost to outsource medical billing," "medical billing outsourcing checklist")

**Phase 2 — Scale (Month 2-4)**
- Remaining specialty pages (fill out to 40+)
- Remaining 40 state pages
- Practice-type pages (solo, small practice, group, hospital)
- Case studies (3-5 to start)
- HIPAA Compliance / Security page
- Weekly blog cadence

**Phase 3 — Programmatic depth (Month 4+, only after Phase 1/2 pages are indexed & ranking)**
- EHR/Software integration pages
- Top-metro city pages nested under their state
- Location × Specialty combination pages for your highest-value states/specialties only (not all combinations — avoid thin duplicate content)

---

## 7. Quick checklist of "must-have" pages you did not list but competitors all have

- [ ] Dedicated **Pricing** page (transparency page — high commercial intent, most competitors bury this)
- [ ] **HIPAA/Compliance & Security** page (trust signal, referenced by Ensource, expected in this niche)
- [ ] **Case Studies / Results** page(s) with real numbers
- [ ] **FAQ** page (also add FAQ schema to top pages)
- [ ] **Glossary** of medical billing terms (great long-tail + internal linking hub)
- [ ] **How It Works / Onboarding process** page (reduces buyer friction — "what happens after I sign up")
- [ ] **Careers** page (signals company legitimacy/size)
- [ ] Human-readable **HTML Sitemap** page (helps Google crawl deep specialty/location silos on a brand-new domain with low initial authority)
