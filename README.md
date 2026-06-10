# Esteban Bellantonio — Portfolio

Personal UX/UI design portfolio. Built with vanilla HTML/CSS/JS, no dependencies, ready for GitHub Pages.

## Structure

```
portfolio/
├── index.html          # Home — project cards grid
├── project.html        # Project detail (dynamic via ?id=)
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── main.js         # Mobile menu
│   └── projects.js     # Project data + renderer
└── images/
    ├── onboard.jpg
    ├── backoffice.jpg
    ├── corporate.jpg
    └── vehicle.jpg
```

## Adding / editing projects

All project content lives in `js/projects.js` inside the `PROJECTS` object. Each project has:

- `company` — shown as eyebrow text
- `title` — main heading
- `subtitle` — italic tagline
- `heroImage` — path to image in `/images/`
- `sections[]` — array of `{ label, text }` blocks (HTML allowed in `text`)
- `figmaUrl` — link for the "View Prototype in Figma" button (set to `null` to hide)

### Adding a new project

1. Add an entry to `PROJECTS` in `js/projects.js`
2. Add the card to `index.html` (copy an existing `<a class="card">` block)
3. Add the nav link to all HTML files
4. Drop the hero image in `/images/`

## Images

Place `.jpg` or `.png` images in `/images/`. Recommended size: **1600×1000px**. The cards use `grayscale(100%)` by default, matching the original design — remove the filter in CSS if you want color.

## GitHub Pages deployment

1. Push to a GitHub repo (e.g. `your-username/portfolio`)
2. Go to **Settings → Pages**
3. Set source to `Deploy from a branch` → `main` → `/ (root)`
4. Site will be live at `https://your-username.github.io/portfolio/`

> If deploying to a subdirectory, all links are relative so no config needed.
