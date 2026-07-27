# SEO Site Analysis: chinese zodiac calculator

## 1. Data Overview
- **Total keywords:** 19 (broad match, US)
- **After filter:** 19 (no exclusions)
- **Total volume:** ~20,430/mo
- **Intent distribution:** 74% Informational, 21% Informational+Commercial, 5% Commercial
- **Avg KD:** 36 (range 21-50)
- **Top keyword:** "calculate my chinese zodiac" / "chinese zodiac calculator" — 6,600/mo each

## 2. Domain Analysis
- **Site type:** Content/Authority with commercial overlay
- **Primary user need:** "What Chinese zodiac animal am I?" → plus "Are we compatible?" → "What's my fortune?"
- **Content viability:** HIGH — clear search intent, manageable KD, strong related topic expansion
- **Local viability:** NONE — no local intent detected
- **Commercial viability:** MODERATE — CPC ~$0.38 for core terms, compatibility term has $1.15 CPC

## 3. Filter Decisions
- **NSFW/Sex filter:** 0 excluded
- **Near-duplicate merges:**
  - "calculate my chinese zodiac" (6600) ← canonical; "calculate chinese zodiac" (480) ← cluster
  - "chinese zodiac calculator" (6600) ← canonical; "chinese zodiac sign calculator" (2400) ← cluster
  - "chinese zodiac elements calculator" (590), "chinese zodiac calculator element" (480), "chinese zodiac and element calculator" (210), "chinese zodiac and elements calculator" (170), "chinese zodiac element calculator" (140), "chinese zodiac with elements calculator" (170), "chinese zodiac and elements calculator" (170) → merge under elements theme
  - "chinese zodiac year month day hour calculator" (480), "chinese zodiac calculator year month day hour" (320) → merge under BaZi theme
  - "full chinese zodiac calculator" (260), "complete chinese zodiac calculator" (140) → merge under "full" theme
- **Local/General split:** 100% General

## 4. Decision Matrix

| Cluster | KD | Volume | Decision | Priority |
|---------|----|--------|----------|----------|
| Main calculator (calculate my chinese zodiac) | 44 | 6,600 | BUILD | P0 |
| Main calculator (chinese zodiac calculator) | 47 | 6,600 | BUILD | P0 |
| Sign calculator | 50 | 2,400 | BUILD (cluster) | P1 |
| Compatibility calculator | 32 | 1,000 | PRIORITY | P0 |
| Elements calculator | 34-40 | 1,760 | BUILD | P0 |
| BaZi calculator | 21-38 | 800 | BUILD | P2 |
| Full/complete calculator | 26-45 | 400 | BUILD | P2 |
| Chart calculator | 39 | 170 | BUILD (cluster) | P2 |

## 5. Site Architecture
```
Homepage (Main Zodiac Calculator) ← P0
├── /compatibility/         ← Compatibility Calculator (P0)
├── /elements/              ← Five Elements Calculator (P0)
├── /year-chart/            ← Chinese Zodiac Year Chart (P1)
├── /bazi-calculator/       ← BaZi Four Pillars Calculator (P2)
├── /signs/{animal}/         ← 12 Animal Pillar Pages (P1)
├── /yearly-horoscope/      ← Annual Horoscope Hub (P1)
└── /feng-shui-tips/        ← Feng Shui & Lifestyle (P2)
```

## 6. URL System
| Content | URL | Type |
|---------|-----|------|
| Main calculator | `/` | Hub |
| Compatibility | `/compatibility/` | Tool |
| Elements | `/elements/` | Tool |
| Year chart | `/year-chart/` | Reference |
| BaZi | `/bazi-calculator/` | Tool |
| Animal sign | `/signs/{animal}/` | Pillar |
| Horoscope | `/yearly-horoscope/` | Hub |
| Feng Shui | `/feng-shui-tips/` | Guide |

## 7. Keyword → Page Mapping
| Keyword | Volume | URL | Type | Priority |
|---------|--------|-----|------|----------|
| calculate my chinese zodiac | 6,600 | `/` | Tool/Pillar | P0 |
| chinese zodiac calculator | 6,600 | `/` | Tool/Pillar | P0 |
| chinese zodiac sign calculator | 2,400 | `/` | Tool | P1 |
| chinese zodiac compatibility calculator | 1,000 | `/compatibility/` | Tool | P0 |
| chinese zodiac compatibility calculator for marriage | 320 | `/compatibility/` | Tool | P0 |
| chinese zodiac elements calculator | 590 | `/elements/` | Tool | P0 |
| calculate chinese zodiac | 480 | `/` | Tool | P0 |
| chinese zodiac calculator element | 480 | `/elements/` | Tool | P0 |
| chinese zodiac year month day hour calculator | 480 | `/bazi-calculator/` | Tool | P2 |
| chinese zodiac signs calculator | 390 | `/` | Tool | P1 |
| chinese zodiac calculator year month day hour | 320 | `/bazi-calculator/` | Tool | P2 |
| full chinese zodiac calculator | 260 | `/` | Tool | P2 |
| chinese zodiac and element calculator | 210 | `/elements/` | Tool | P0 |
| chinese zodiac and elements calculator | 170 | `/elements/` | Tool | P0 |
| chinese zodiac chart calculator | 170 | `/year-chart/` | Tool | P2 |
| chinese zodiac with elements calculator | 170 | `/elements/` | Tool | P0 |
| chinese zodiac element calculator | 140 | `/elements/` | Tool | P0 |
| complete chinese zodiac calculator | 140 | `/` | Tool | P2 |
| zodiac signs chinese calculator | 110 | `/` | Tool | P1 |

## 8. Content Strategy
**First 10 articles (P0 + P1):**
1. Homepage — main zodiac calculator + intro to Chinese zodiac
2. Compatibility calculator — zodiac love matching tool
3. Elements calculator — five elements + zodiac
4–15. 12 animal sign pillar pages (Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig)
5. Yearly horoscope hub — 2027 forecasts

**Growth phases:**
- 0-10: Calculator tools + 12 animal pillars
- 10-30: Compatibility deep-dives (best/worst matches), yearly horoscope × 12 animals
- 30-60: BaZi calculator, Feng Shui tips, advanced content
- 60+: Element deep-dives, lifestyle content, digital product (PDF reports)

## 9. Internal Link System
```
Homepage (calculator)
  → Result page → link to /signs/{animal}/ (your zodiac)
  → Result page → link to /compatibility/ (check your match)
  → Result page → link to /elements/ (your element)
  → Result page → link to /yearly-horoscope/ (your fortune)

/signs/{animal}/
  → /compatibility/ (best/worst matches)
  → /elements/ (associated element)
  → /yearly-horoscope/ (annual forecast)
  → Other animal signs (related)

/compatibility/
  → /signs/{animal}/ (individual sign details)
  → /elements/ (element compatibility)

/yearly-horoscope/
  → /signs/{animal}/ (individual sign pages)
```

## 10. Commercial Strategy
- **Monetization:** AdSense (all pages sidebar + mid-content), Amazon affiliates (zodiac-themed products on sign pages), Digital product ($9.9 personalized report)
- **Separation:** Editorial content is completely independent from affiliate products. No "best" lists — products are recommendations, not reviews.
- **Risk:** Low. Zodiac content is evergreen. No YMYL concerns.

## 11. Growth Model
| Phase | Pages | Est. Traffic | Timeline |
|-------|-------|-------------|----------|
| 0-10 (Launch) | 4 tools + 12 signs | 5K-8K/mo | Month 1-2 |
| 10-30 (Expand) | Compatibility deeps + horoscopes | 15K-25K/mo | Month 3-4 |
| 30-60 (Scale) | BaZi + Feng Shui + advanced | 30K-50K/mo | Month 5-8 |
| 60+ (Monetize) | Digital products + seasonal | 50K-80K/mo | Month 9+ |