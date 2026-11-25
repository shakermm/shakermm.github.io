// Builds one app's pages for its own subdomain on Cloudflare Pages.
// Usage: node tools/build-site.mjs <app>   (e.g. stripmote)  → dist/<app>/
// Source of truth stays the Markdown in <app>/ (also served by GitHub Pages at
// shakermm.github.io/<app>/), so both addresses always show the same content.
import { marked } from 'marked';
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const app = process.argv[2];
// Where each app's Markdown lives. OneMote's pages predate the per-app folders and sit at the root.
const SOURCES = {
  onemote: { dir: '.', files: ['index.md', 'privacy.md', 'compatible.md'] },
  home: { dir: '.', files: [] }, // pharaohdigital.co: landing page only
};
const src0 = SOURCES[app] ?? { dir: app };
if (!app || !existsSync(src0.dir) || !existsSync(join('landing', `${app}.html`))) {
  console.error('usage: node tools/build-site.mjs <app-folder>');
  process.exit(1);
}
const out = join('dist', app);
mkdirSync(out, { recursive: true });

const css = `
:root{--bg:#fff;--fg:#14141c;--muted:#5b5b6e;--accent:#5b4be0;--card:#f4f4f8;--line:#e4e4ec}
@media (prefers-color-scheme:dark){:root{--bg:#07070c;--fg:#f1f1f6;--muted:#a3a3b5;--accent:#8b7cff;--card:#12121a;--line:#22222e}}
*{box-sizing:border-box}html{-webkit-text-size-adjust:100%}
body{margin:0;background:var(--bg);color:var(--fg);font:17px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}
main{max-width:760px;margin:0 auto;padding:32px 16px 64px}
h1{font-size:2rem;line-height:1.2;margin:.2em 0 .6em}h2{font-size:1.3rem;margin:2em 0 .5em}h3{font-size:1.1rem}
a{color:var(--accent)}p,li{color:var(--fg)}small,em{color:var(--muted)}
code{background:var(--card);padding:.1em .35em;border-radius:6px}
table{border-collapse:collapse;width:100%;display:block;overflow-x:auto}td,th{border:1px solid var(--line);padding:6px 10px;text-align:left}
hr{border:0;border-top:1px solid var(--line);margin:2em 0}
footer{max-width:760px;margin:0 auto;padding:0 16px 40px;color:var(--muted);font-size:14px}
`;

const hasTerms = (src0.files ?? readdirSync(src0.dir)).includes('terms.md');
function page(title, body) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title><style>${css}</style></head>
<body><main>${body}</main><footer>© Pharaoh Digital · <a href="/">Home</a> · <a href="/support">Support</a> · <a href="/privacy">Privacy</a>${hasTerms ? ' · <a href="/terms">Terms</a>' : ''}</footer></body></html>\n`;
}

for (const file of src0.files ?? readdirSync(src0.dir)) {
  const src = join(src0.dir, file);
  if (file.endsWith('.md')) {
    let md = readFileSync(src, 'utf8').replace(/^---[\s\S]*?---\s*/, '');
    // Subdomain root: /<app>/x → /x
    md = md.replaceAll(`](/${app}/`, '](/').replaceAll(`](/${app})`, '](/)');
    const title = (md.match(/^#\s+(.+)$/m)?.[1] ?? app).trim();
    const name = file.replace(/\.md$/, '');
    // The hand-made landing page owns '/', so the Markdown index becomes /support.
    const dir = join(out, name === 'index' ? 'support' : name);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), page(title, marked.parse(md)));
  } else {
    copyFileSync(src, join(out, file)); // app-ads.txt, images…
  }
}
// Landing page + its images.
const css2 = readFileSync('landing/_style.css', 'utf8');
writeFileSync(join(out, 'index.html'), readFileSync(join('landing', `${app}.html`), 'utf8').replace('/*CSS*/', css2));
for (const f of readdirSync(join('site-assets', app))) copyFileSync(join('site-assets', app, f), join(out, f));
// AdMob looks for app-ads.txt at the root of the developer website.
if (!existsSync(join(out, 'app-ads.txt')) && existsSync('app-ads.txt')) {
  copyFileSync('app-ads.txt', join(out, 'app-ads.txt'));
}
console.log(`built ${out}`);
