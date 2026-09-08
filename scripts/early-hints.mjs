// Injects a Link: rel=preload header for the two above-fold fonts into
// dist/_headers. Cloudflare turns it into 103 Early Hints (if enabled) so font
// downloads start during the HTML round trip; browsers also honor the Link
// header directly. Runs after every build (the Playfair URL is content-hashed).
import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const headersPath = "dist/_headers";
const playfair = readdirSync("dist/_astro").find((f) =>
  /^playfair-display-latin-700-normal\.[\w-]+\.woff2$/.test(f)
);
if (!playfair) {
  console.warn("early-hints: playfair font not found in dist/_astro, skipping");
  process.exit(0);
}

const link = `Link: </fonts/Geist-Variable.woff2>; rel="preload"; as="font"; type="font/woff2"; crossorigin, </_astro/${playfair}>; rel="preload"; as="font"; type="font/woff2"; crossorigin`;

const lines = readFileSync(headersPath, "utf8").split(/\r?\n/);
const idx = lines.findIndex((l) => l.trimStart().startsWith("Link:"));
if (idx >= 0) {
  lines[idx] = "  " + link;
} else {
  const firstBlank = lines.findIndex((l) => l.trim() === "");
  lines.splice(firstBlank < 0 ? lines.length : firstBlank, 0, "  " + link);
}
writeFileSync(headersPath, lines.join("\n"));
console.log(`early-hints: Link header written (${playfair})`);
