import rss from "@astrojs/rss";
import { ZODIAC_ANIMALS } from "../data/zodiac";

const siteTitle = "Chinese-Zodiac-Calculator.com — Chinese Zodiac Guide";
const siteDescription = "Free Chinese Zodiac calculator, compatibility guide, yearly horoscopes, and zodiac sign profiles.";

const feedItems = [
  {
    title: "Chinese Zodiac Calculator — Find Your Animal Sign",
    pubDate: new Date("2026-08-19"),
    description: "Free Chinese zodiac calculator with accurate lunar calendar results from 1900 to 2035.",
    link: "/",
  },
  {
    title: "2026 Chinese Zodiac Horoscope Guide — Year of the Fire Horse",
    pubDate: new Date("2026-08-19"),
    description: "Annual predictions for all 12 signs covering career, love, health, and wealth in 2026.",
    link: "/yearly-horoscope/",
  },
  {
    title: "Chinese Zodiac Year Chart Reference Guide",
    pubDate: new Date("2026-08-19"),
    description: "Complete Chinese zodiac years chart from 1900 to 2043 with exact lunar calendar ranges.",
    link: "/year-chart/",
  },
  {
    title: "Chinese Zodiac Compatibility Calculator",
    pubDate: new Date("2026-08-19"),
    description: "Check love and friendship compatibility between any two Chinese zodiac signs.",
    link: "/compatibility/",
  },
  {
    title: "Ben Ming Nian (本命年) — Your Zodiac Year of Birth",
    pubDate: new Date("2026-08-19"),
    description: "What Ben Ming Nian means, when it starts, why people wear red, and advice for the year.",
    link: "/ben-ming-nian/",
  },
  {
    title: "Tai Sui (太岁) 2026 — Offending Signs & Remedies",
    pubDate: new Date("2026-08-19"),
    description: "Horse, Rat, Ox, and Rabbit offend Tai Sui in 2026 — the four forms and traditional remedies.",
    link: "/tai-sui/",
  },
  {
    title: "The Origin & Story of the Chinese Zodiac",
    pubDate: new Date("2026-08-19"),
    description: "The Great Race legend, why the Rat came first, why the Cat is missing, and the real history.",
    link: "/zodiac-origin/",
  },
  ...ZODIAC_ANIMALS.map((a) => ({
    title: `${a.id.charAt(0).toUpperCase() + a.id.slice(1)} Chinese Zodiac: Personality, Years, Compatibility & 2026 Horoscope`,
    pubDate: new Date("2026-08-19"),
    description: `Discover the ${a.id} Chinese zodiac sign: personality traits, love compatibility, lucky items, birth years, and the 2026 horoscope.`,
    link: `/signs/${a.id}/`,
  })),
];

export async function GET(context) {
  return rss({
    title: siteTitle,
    description: siteDescription,
    site: context.site,
    items: feedItems,
    customData: `<language>en-us</language>`,
  });
}
