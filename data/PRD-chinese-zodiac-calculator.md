# Product PRD: Chinese Zodiac Calculator

## Source Analysis
- **Analysis:** `data/chinese-zodiac-calculator-analysis.md`
- **Site type:** Content/Authority with commercial overlay
- **Total pages:** 18+ (4 tools + 12 animal pillars + 2 hubs + 3 meta)
- **Commercial viability:** Moderate — AdSense primary, affiliates secondary

## 1. Page Templates

### Tool Page Template
Used for: Homepage calculator, Elements, BaZi, Compatibility
- **Intent:** Informational / Tool
- **Hero:** Title "Chinese Zodiac Calculator" or tool-specific title + subtitle + date input form
- **H2 skeleton:** How It Works (optional) → What Is [Topic] → FAQ
- **Modules:** Date picker/input → Result display (sign, element, yin/yang, lucky items) → CTA row
- **Schema:** Article, BreadcrumbList
- **Conversion:** CTA to compatibility, horoscope, or sign details

### Pillar Page Template (Animal Signs)
Used for: /signs/{animal}/
- **Intent:** Informational / Pillar
- **Hero:** "[Animal] Chinese Zodiac: Personality, Compatibility & Horoscope"
- **H2 skeleton:** Year & Element → Personality Traits → Career & Wealth → Love & Compatibility → Famous People → Lucky Things → FAQ
- **Modules:** Zodiac profile card, compatibility mini-matrix, lucky items table, famous people list
- **Schema:** Article, BreadcrumbList
- **Conversion:** CTA to compatibility calculator, yearly horoscope

### Hub Page Template
Used for: /yearly-horoscope/, /feng-shui-tips/
- **Intent:** Informational / Hub
- **Hero:** Title + description + year selector
- **H2 skeleton:** Overview → By Animal (12 sections or cards) → FAQ
- **Modules:** Animal grid (12 cards linking to individual horoscopes), FAQ
- **Schema:** Article, BreadcrumbList

### Meta Page Template
Used for: About, Contact, Privacy
- **Intent:** Informational
- **Hero:** Page title
- **Content:** Standard legal/info content
- **Schema:** WebPage, BreadcrumbList

## 2. Page Inventory

| URL | Template | Priority | Target Keyword |
|-----|----------|----------|---------------|
| `/` | Tool | P0 | chinese zodiac calculator |
| `/compatibility/` | Tool | P0 | chinese zodiac compatibility calculator |
| `/elements/` | Tool | P0 | chinese zodiac elements calculator |
| `/signs/rat/` | Pillar | P1 | rat chinese zodiac |
| `/signs/ox/` | Pillar | P1 | ox chinese zodiac |
| `/signs/tiger/` | Pillar | P1 | tiger chinese zodiac |
| `/signs/rabbit/` | Pillar | P1 | rabbit chinese zodiac |
| `/signs/dragon/` | Pillar | P1 | dragon chinese zodiac |
| `/signs/snake/` | Pillar | P1 | snake chinese zodiac |
| `/signs/horse/` | Pillar | P1 | horse chinese zodiac |
| `/signs/goat/` | Pillar | P1 | goat chinese zodiac |
| `/signs/monkey/` | Pillar | P1 | monkey chinese zodiac |
| `/signs/rooster/` | Pillar | P1 | rooster chinese zodiac |
| `/signs/dog/` | Pillar | P1 | dog chinese zodiac |
| `/signs/pig/` | Pillar | P1 | pig chinese zodiac |
| `/year-chart/` | Tool | P1 | chinese zodiac chart |
| `/yearly-horoscope/` | Hub | P1 | chinese zodiac horoscope |
| `/bazi-calculator/` | Tool | P2 | bazi calculator |
| `/feng-shui-tips/` | Hub | P2 | feng shui tips |
| `/about/` | Meta | P2 | — |
| `/contact/` | Meta | P2 | — |
| `/privacy-policy/` | Meta | P2 | — |

## 3. User Flows

### Flow A: "What animal am I?" (Informational)
```
Google Search "chinese zodiac calculator" → Homepage → enters birth date
  → Sees result: animal + element + lucky items
  → Clicks "Check your compatibility" → /compatibility/
  → Clicks "Read about [Animal]" → /signs/{animal}/
  → Clicks "Your 2027 horoscope" → /yearly-horoscope/
```

### Flow B: "Are we compatible?" (Commercial)
```
Google Search "chinese zodiac compatibility" → /compatibility/
  → Selects two signs or enters two birthdays
  → Sees compatibility score + best/worst matches
  → Clicks sign detail → /signs/{animal}/
  → Clicks affiliate product (zodiac gift) → exits
```

### Flow C: "What's my element?" (Informational)
```
Google Search "chinese zodiac elements calculator" → /elements/
  → Enters birth year → sees element
  → Reads element description
  → Clicks related animal sign → /signs/{animal}/
```

## 4. Functional Specs

### CMS / Page Generation
- **Tools (4):** Hand-crafted with embedded JS calculator logic
- **Pillar pages (12):** Template with parameterized content (animal name, dates, traits, etc.)
- **Meta pages:** Hand-crafted static pages

### APIs & Services
| Service | Usage | Priority |
|---------|-------|----------|
| None — all calculator logic is client-side JS | — | P0 |

### Tracking Events
- Calculator submit → GA4 event
- Result CTA click → GA4 event
- Compatibility check → GA4 event

## 5. Design Constraints
- **Content-first:** Calculator is the hero, content supports it
- **Mobile-first:** Date pickers must work well on mobile
- **Warm red-gold palette:** Red (#DC2626) accent, gold (#B8860B) secondary, cream/stone backgrounds
- **Typography:** Geist Sans for body, Geist Mono for data display

## 6. Product Priorities

| Phase | What ships |
|-------|-----------|
| **P0 (Foundation)** | Homepage (main calculator) + 12 animal sign pages + compatibility calculator + elements calculator + year chart |
| **P1 (Expansion)** | Yearly horoscope + BaZi calculator + meta pages |
| **P2 (Commercial)** | Feng Shui tips + digital product report + affiliate integration |

## 7. Open Questions
- Should individual horoscope pages be generated per animal or is a single hub page enough? → For now, hub page with 12 sections, individual pages later
- Affiliate product links: manual curation vs automatic API? → Manual for P0, revisit P2