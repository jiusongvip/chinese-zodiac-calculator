import fs from 'fs';
import path from 'path';

// 构建后处理：@astrojs/sitemap 的 serialize 钩子无法去掉根路径尾斜杠
// （底层 new URL(url).toString() 会强制加回 /），需手动替换。
const distDir = 'dist';
const files = fs
  .readdirSync(distDir)
  .filter((f) => f.startsWith('sitemap-') && f.endsWith('.xml'));

for (const f of files) {
  const fp = path.join(distDir, f);
  const xml = fs.readFileSync(fp, 'utf-8');
  // 首页 URL：https://www.chinese-zodiac-calculator.com/ → 去掉尾斜杠
  const fixed = xml.replace(
    /<loc>https:\/\/www\.chinese-zodiac-calculator\.com\/<\/loc>/g,
    '<loc>https://www.chinese-zodiac-calculator.com</loc>'
  );
  if (fixed !== xml) {
    fs.writeFileSync(fp, fixed, 'utf-8');
    console.log(`[fix-sitemap-home] fixed home URL in ${f}`);
  }
}
console.log('[fix-sitemap-home] done');
