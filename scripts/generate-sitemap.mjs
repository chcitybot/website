import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const contentDir = join(__dirname, '..', 'content');
const locales = ['en', 'de', 'fr', 'it'];
const domain = 'https://citybot.ch'; // ✅ No trailing spaces!

// Map slug to title (fallback only)
// const slugToTitle = {
//   'ai-in-tourism': 'How AI is Transforming Tourism – And How Your Destination Can Benefit',
//   'tourism-platform-costs': 'Cost of Custom Tourism Apps in Switzerland: How much could be saved with a Shared Platform',
//   'evolution-of-the-tourism-content': 'The Evolution of Tourism Content',
//   'sustainability-with-digital-tourism': 'Sustainability with Digital Tourism',
//   'what-is-digital-destination-management': 'What is Digital Destination Management?',
//   'zug-case-study': 'CityBot Case Study Zug – How cities successfully digitalize their guided tours',
// };

async function generateSitemap() {
  const urls = [];
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  // === 1. Collect Blog Posts (only if they exist in each language) ===
  const blogPosts = new Map(); // slug → { en: true, de: true, ... }

  for (const locale of locales) {
    const blogDir = join(contentDir, locale, 'blog');
    try {
      const files = await readdir(blogDir);
      for (const file of files.filter(f => f.endsWith('.md'))) {
        const slug = file.replace('.md', '');
        const filePath = join(blogDir, file);
        const content = await readFile(filePath, 'utf-8');

        const titleMatch = content.match(/title:\s*"(.+?)"/);
        const dateMatch = content.match(/date:\s*"(\d{4}-\d{2}-\d{2})"/);

        const title = titleMatch?.[1] || 'Blog Post';
        const lastmod = dateMatch?.[1] || '2025-01-01';

        if (!blogPosts.has(slug)) blogPosts.set(slug, {});
        blogPosts.get(slug)[locale] = { title, lastmod };
      }
    } catch (e) {
      console.log(`No blog folder for ${locale}`);
    }
  }

  // Generate <url> entries for each slug
  for (const [slug, localesData] of blogPosts) {
    const firstLocale = Object.keys(localesData)[0];
    const lastmod = localesData[firstLocale].lastmod;

    xml += `  <url>\n`;
    xml += `    <loc>${domain}/${firstLocale}/blog/${slug}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;

    // Add hreflang for each language that actually has the post
    for (const locale of Object.keys(localesData)) {
      xml += `    <xhtml:link rel="alternate" hreflang="${locale}" href="${domain}/${locale}/blog/${slug}" />\n`;
    }

    // Add x-default (use English as default)
    if (localesData.en) {
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${domain}/en/blog/${slug}" />\n`;
    }

    xml += `  </url>\n`;
  }

  // === 3. Add Static Pages ===
  const staticPages = [
    { path: '', label: 'Homepage', lastmod: '2025-11-15', priority: '1.0' },
    { path: '/team', label: 'Team', lastmod: '2025-10-01', priority: '0.8' },
    { path: '/contact', label: 'Contact', lastmod: '2025-10-01', priority: '0.8' },
  ];

  for (const page of staticPages) {
    xml += `  <url>\n`;
    xml += `    <loc>${domain}/en${page.path}</loc>\n`;
    xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;

    // hreflang for static pages
    for (const locale of locales) {
      xml += `    <xhtml:link rel="alternate" hreflang="${locale}" href="${domain}/${locale}${page.path}" />\n`;
    }
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${domain}/en${page.path}" />\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>`;

  // Write file
  await writeFile(join(__dirname, '..', 'public', 'sitemap.xml'), xml);
  console.log('✅ sitemap.xml generated successfully!');
}

generateSitemap().catch(console.error);