# Zain Arif — Portfolio Website

A single-page, interactive portfolio site built with plain HTML/CSS/JS
(no build step, no dependencies). Works on any static web host.

## Structure

```
index.html                  Page content, meta tags, JSON-LD structured data
css/style.css                Styling, light/dark theme, animations
js/script.js                  Interactivity (nav, reveal, counters, mobile menu)
robots.txt                    Crawler rules + sitemap pointer
sitemap.xml                   XML sitemap for search engines
site.webmanifest              Web app manifest (name, icons, theme color)
favicon.ico                   Root favicon fallback
assets/favicon-*.png,
  apple-touch-icon.png,
  icon-192.png, icon-512.png  Favicons/app icons generated from the logo
assets/logo-mark.png,
  logo-full.png               The ZA logo (icon-only and full lockup)
assets/images/og-cover.jpg    Social share preview image (Open Graph/Twitter)
assets/images/*.jpg           Photos used in the hero and Research cards
assets/Zain_Arif_CV.pdf       Downloadable CV (linked from "Download CV")
```

## Run it locally

Any static server works, e.g.:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying to your domain

Pick whichever hosting platform you already have — no build step is needed,
so you just need to upload these files as-is.

### Option A: Netlify (drag & drop, free)
1. Go to https://app.netlify.com/drop
2. Drag the whole project folder onto the page.
3. In Site settings → Domain management, add your custom domain and follow
   the DNS instructions (usually a CNAME or A record at your domain registrar).

### Option B: Vercel
1. `npm i -g vercel` (or use the Vercel dashboard "Add New Project" and
   import this folder/repo).
2. Run `vercel` in this folder and follow the prompts.
3. Add your custom domain under Project → Settings → Domains.

### Option C: GitHub Pages
1. Push this repo to GitHub.
2. Repo Settings → Pages → Deploy from branch → pick the branch/`root`.
3. Settings → Pages → Custom domain → enter your domain, then add a CNAME
   record at your registrar pointing to `<username>.github.io`.

### Option D: Traditional cPanel / shared hosting
1. Zip the project folder.
2. Upload via File Manager (or FTP) into `public_html` for your domain.
3. Unzip there so `index.html` sits directly inside `public_html`.

## Customizing

- **Content**: all text lives directly in `index.html`, organized by section
  (`#about`, `#skills`, `#research`, `#education`, `#achievements`, `#contact`).
- **Colors/theme**: edit the CSS variables at the top of `css/style.css`
  under `:root` and `:root[data-theme="dark"]`.
- **Skills list**: edit the `skills` array near the top of `js/script.js`.
- **CV file**: replace `assets/Zain_Arif_CV.pdf` with an updated CV, keeping
  the same filename (or update the `href` in the "Download CV" button in
  `index.html`).
- **Cache busting**: static assets are versioned with a `?v=N` query string
  (e.g. `css/style.css?v=9`). Bump the number after editing CSS/JS/icons so
  visitors' browsers fetch the new version instead of a cached copy.

## SEO

- **`robots.txt`** allows all crawlers and points to `sitemap.xml`.
- **`sitemap.xml`** lists the homepage. Update `<lastmod>` when you make a
  meaningful content change.
- **`site.webmanifest`** lets the site be "installed"/added to a phone's
  home screen with the logo as its icon.
- **Open Graph / Twitter Card tags** (in `index.html`'s `<head>`) control
  how the link looks when shared on WhatsApp, iMessage, X, Facebook, etc.
  They point at `assets/images/og-cover.jpg` — regenerate that image if you
  change the name, tagline, or hero photo (it should stay 1200×630).
- **JSON-LD structured data** (a `Person` schema in `<head>`) helps search
  engines understand who the site is about.
- **Google Search Console**: not set up here since it requires a Google
  account. To verify ownership, either add the `<meta name="google-site-
  verification" ...>` tag Search Console gives you into `index.html`'s
  `<head>`, or upload the HTML file it provides to the site root, then
  submit `https://zainarif.com/sitemap.xml` there.

## Privacy note

The public contact section intentionally shows only an email address.
The personal phone number and referees' direct contact details from the
original CV were left off the public page — references are shown as
"available on request" instead, to avoid publishing a student's phone
number and teachers' direct office contacts to the open web. Add them
back in `index.html` if you want them public.
