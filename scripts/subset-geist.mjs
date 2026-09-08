// One-off: subset public/fonts/Geist-Variable.woff2 to the charsets this site
// actually uses (latin + punctuation + arrows), keeping the variable wght axis.
// The original full file lives in git history; re-run anytime: node scripts/subset-geist.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { globSync } from "node:fs";
import path from "node:path";
import subsetFont from "subset-font";

const FONT = "public/fonts/Geist-Variable.woff2";
const buf = readFileSync(FONT);
console.log("input:", (buf.length / 1024).toFixed(1), "KB");

// Charsets kept in the subset (everything else falls back to system fonts).
const ranges = [
  [0x0020, 0x007e], // Basic Latin
  [0x00a0, 0x00ff], // Latin-1: nbsp, middot, copy, accented
  [0x0100, 0x017f], // Latin Extended-A: pinyin macrons/carons (shēngxiào etc.)
  [0x0180, 0x024f], // Latin Extended-B: ǎǐǒǔ
  [0x2010, 0x2027], // dashes, quotes, bullets, ellipsis
  [0x2030, 0x205e], // per-mille, prime, more quotes
  [0x20a0, 0x20bf], // currency (euro etc.)
  [0x2190, 0x2199], // arrows (rarr/larr)
  [0x2212, 0x2212], // minus sign
  [0x2500, 0x26ff], // geometric shapes & misc symbols: ★ ☆ ●
  [0xe000, 0xf8ff], // private use (icons)
];
const kept = (cp) => ranges.some(([a, b]) => cp >= a && cp <= b);
const isCjkOrSystem = (cp) =>
  (cp >= 0x2e80 && cp <= 0x9fff) || // CJK radicals..unified
  (cp >= 0x3000 && cp <= 0x303f) || // CJK punctuation
  (cp >= 0xff00 && cp <= 0xffef) || // fullwidth forms
  (cp >= 0x1f000); // emoji -> system emoji fonts

// Coverage check: every non-ASCII char rendered by the site must be either
// kept in the subset or covered by system CJK/emoji fonts (--font-cn).
const problems = new Set();
const files = globSync("src/**/*.{astro,css,js}", { dot: false });
for (const f of files) {
  const src = readFileSync(f, "utf8");
  for (const ch of src) {
    const cp = ch.codePointAt(0);
    if (cp < 0x80) continue;
    if (kept(cp) || isCjkOrSystem(cp)) continue;
    problems.add(`${ch} U+${cp.toString(16).toUpperCase().padStart(4, "0")} in ${f}`);
  }
}
if (problems.size) {
  console.error("CHARS OUTSIDE SUBSET (would render as fallback):");
  for (const p of problems) console.error("  " + p);
  process.exit(1);
}
console.log("coverage check passed");

const codePoints = Array.from({ length: 0x2700 }, (_, i) => i).filter(kept);
const subset = await subsetFont(buf, String.fromCodePoint(...codePoints), {
  targetFormat: "woff2",
  variationAxes: { wght: { min: 100, max: 900 } },
});
console.log("output:", (subset.length / 1024).toFixed(1), "KB");
writeFileSync(FONT, subset);
console.log("written", FONT);
