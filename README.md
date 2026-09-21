# Zain Arif — Portfolio Website

A single-page, interactive portfolio site built with plain HTML/CSS/JS
(no build step, no dependencies). Works on any static web host.

## Structure

```
index.html          Page content
css/style.css        Styling, dark/light theme, animations
js/script.js          Interactivity (nav, tabs, counters, canvas background)
assets/favicon.svg     Site icon
assets/Zain_Arif_CV.pdf  Downloadable CV (linked from the "Download CV" button)
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
  (`#about`, `#skills`, `#interests`, `#experience`, `#education`,
  `#achievements`, `#contact`).
- **Colors/theme**: edit the CSS variables at the top of `css/style.css`
  under `:root` and `[data-theme="light"]`.
- **Skills list**: edit the `skills` array near the top of `js/script.js`.
- **CV file**: replace `assets/Zain_Arif_CV.pdf` with an updated CV, keeping
  the same filename (or update the `href` in the "Download CV" button in
  `index.html`).

## Privacy note

The public contact section intentionally shows only an email address.
The personal phone number and referees' direct contact details from the
original CV were left off the public page — references are shown as
"available on request" instead, to avoid publishing a student's phone
number and teachers' direct office contacts to the open web. Add them
back in `index.html` if you want them public.
