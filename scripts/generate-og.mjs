/**
 * Generate 1200x630 OG images for all pages using SVG templates + sharp.
 * Output: public/og/{slug}.png
 *
 * Usage: node scripts/generate-og.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { ZODIAC_ANIMALS, SIGN_META } from "../src/data/zodiac.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "public", "og");

const BRAND = "CHINESE-ZODIAC-CALCULATOR.COM";
const ACCENT = "#DC2626"; // zodiac red
const GOLD = "#B8860B";

/** Escape XML special chars so titles with & render safely in SVG. */
function xml(text) {
  return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Ordinal suffix for the sign rank, e.g. 1 -> 1st */
function ordinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

/**
 * Shared background: dark gradient + decorative circles + faint Chinese chars.
 * @param {string[]} decoChars faint decorative characters (bottom-right)
 */
function background(decoChars) {
  const chars = decoChars
    .map(
      (c, i) =>
        `<text x="${960 + (i % 3) * 85}" y="${500 + Math.floor(i / 3) * 70}" font-size="44" fill="rgba(220,38,38,${0.07 + i * 0.02})" font-family="'Microsoft YaHei','Noto Sans SC',sans-serif">${c}</text>`,
    )
    .join("");
  return `
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1A1410"/>
      <stop offset="100%" stop-color="#2D1F1A"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#DC2626"/>
      <stop offset="100%" stop-color="#B8860B"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="100" cy="100" r="200" fill="rgba(220,38,38,0.05)"/>
  <circle cx="1100" cy="530" r="250" fill="rgba(184,134,11,0.05)"/>
  <circle cx="600" cy="315" r="300" fill="rgba(220,38,38,0.03)"/>
  ${chars}`;
}

/** Brand footer: divider + domain, shared by every card. */
function footer() {
  return `
  <line x1="350" y1="545" x2="850" y2="545" stroke="url(#accent)" stroke-width="2"/>
  <text x="600" y="585" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="#FFFFFF" letter-spacing="3">${BRAND}</text>`;
}

/** Header label at top center. */
function header(label) {
  return `<text x="600" y="95" text-anchor="middle" font-family="sans-serif" font-size="26" fill="${GOLD}" letter-spacing="6">${label}</text>`;
}

/**
 * Sign OG card: big English name + tagline, rank badge, element chip.
 */
function signCard(animal, meta) {
  const label = `${animal.element} · ${animal.yinYang} · ${ordinal(animal.rank)} of 12`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  ${background(["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"])}
  ${header("CHINESE ZODIAC")}
  <!-- Giant Chinese character watermark -->
  <text x="940" y="430" text-anchor="middle" font-size="300" font-weight="bold" fill="rgba(255,255,255,0.08)" font-family="'Microsoft YaHei','Noto Sans SC',sans-serif">${animal.chinese}</text>
  <!-- Rank badge -->
  <rect x="90" y="150" width="150" height="42" rx="21" fill="${ACCENT}"/>
  <text x="165" y="178" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="bold" fill="#FFFFFF" letter-spacing="2">${ordinal(animal.rank)} SIGN</text>
  <!-- Name -->
  <text x="90" y="285" font-family="sans-serif" font-size="96" font-weight="bold" fill="#FFFFFF" letter-spacing="2">${meta.name}</text>
  <!-- Tagline -->
  <text x="92" y="345" font-family="sans-serif" font-size="34" fill="${GOLD}" letter-spacing="1">${meta.tagline}</text>
  <!-- Element chip -->
  <text x="92" y="400" font-family="sans-serif" font-size="24" fill="#A0938B" letter-spacing="2">${label}</text>
  <!-- Zodiac wheel accent dots -->
  ${"0123456789ab"
    .split("")
    .map((_, i) => {
      const ang = (i / 12) * Math.PI * 2 - Math.PI / 2;
      return `<circle cx="${90 + 40 * Math.cos(ang)}" cy="${468 + 40 * Math.sin(ang)}" r="3.5" fill="${i % 4 === 0 ? ACCENT : GOLD}" opacity="0.8"/>`;
    })
    .join("")}
  ${footer()}
</svg>`;
}

/**
 * Topic OG card: title + subtitle (no sign-specific layout).
 */
function topicCard(title, subtitle, decoChars) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  ${background(decoChars)}
  ${header("CHINESE ZODIAC")}
  <text x="600" y="250" text-anchor="middle" font-family="sans-serif" font-size="64" font-weight="bold" fill="#FFFFFF" letter-spacing="2">${xml(title)}</text>
  <line x1="350" y1="300" x2="850" y2="300" stroke="url(#accent)" stroke-width="2"/>
  <text x="600" y="360" text-anchor="middle" font-family="sans-serif" font-size="28" fill="${GOLD}" letter-spacing="1">${xml(subtitle)}</text>
  <text x="600" y="430" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#A0938B" letter-spacing="2">Free Zodiac Calculator · 1900–2035</text>
  ${footer()}
</svg>`;
}

const signNames = {
  rat: "Rat",
  ox: "Ox",
  tiger: "Tiger",
  rabbit: "Rabbit",
  dragon: "Dragon",
  snake: "Snake",
  horse: "Horse",
  goat: "Goat",
  monkey: "Monkey",
  rooster: "Rooster",
  dog: "Dog",
  pig: "Pig",
};

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const jobs = [];

  // 12 sign cards
  for (const animal of ZODIAC_ANIMALS) {
    const meta = {
      name: signNames[animal.id],
      tagline: SIGN_META[animal.id].h1Tagline,
    };
    jobs.push({
      slug: animal.id,
      svg: signCard(animal, meta),
    });
  }

  // Topic cards
  jobs.push({
    slug: "home",
    svg: topicCard("Chinese Zodiac Calculator", "Find Your Animal Sign, Element & 2026 Horoscope", ["十二", "生肖"]),
  });
  jobs.push({
    slug: "compatibility",
    svg: topicCard("Zodiac Love Compatibility", "Best & Challenging Matches for All 12 Signs", ["缘", "合"]),
  });
  jobs.push({
    slug: "ben-ming-nian",
    svg: topicCard("Ben Ming Nian (本命年)", "Your Zodiac Year of Birth — Meaning, Red Traditions & Advice", ["本", "命", "年"]),
  });
  jobs.push({
    slug: "tai-sui",
    svg: topicCard("Tai Sui (太岁) 2026", "Offending Signs, Four Forms & Remedies for the Fire Horse Year", ["太", "岁"]),
  });
  jobs.push({
    slug: "zodiac-origin",
    svg: topicCard("The Origin of the Chinese Zodiac", "The Great Race, Earthly Branches & 2,000 Years of History", ["缘", "起"]),
  });

  let ok = 0;
  let failed = 0;
  for (const job of jobs) {
    const outPath = path.join(OUT_DIR, `${job.slug}.png`);
    try {
      await sharp(Buffer.from(job.svg), { density: 144 }).resize(1200, 630).png({ compressionLevel: 9 }).toFile(outPath);
      const stat = fs.statSync(outPath);
      console.log(`✓ ${job.slug}.png  (${(stat.size / 1024).toFixed(0)} KB)`);
      ok++;
    } catch (err) {
      console.error(`✗ ${job.slug}.png failed: ${err.message}`);
      failed++;
    }
  }

  console.log(`\nDone: ${ok} generated, ${failed} failed → ${OUT_DIR}`);
}

main();
