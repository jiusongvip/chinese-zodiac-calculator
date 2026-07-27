import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  let posts = [];
  try {
    posts = await getCollection("blog");
  } catch {
    // No content collection yet — return empty feed
  }
  return rss({
    title: "Chinese-Zodiac-Calculator.com — Chinese Zodiac Guide",
    description: "Free Chinese Zodiac calculator, compatibility guide, yearly horoscopes, and zodiac sign profiles.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.datePublished,
      description: post.data.description,
      link: `/${post.collection}/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
