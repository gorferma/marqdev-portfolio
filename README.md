# MarqDev Portfolio

A clean, responsive portfolio you can deploy on GitHub Pages and link from Fiverr.

## Features
- Light theme with navy + light blue accents
- Sections: Home, Portfolio, Contact
- Featured project card (Interactive Emoji Map of Japan) + placeholders
- No build tools; HTML/CSS/JS only

## Quick start
1. Replace placeholder data in `index.html`:
   - Update the Live Demo link for the Emoji Map: `https://YOUR_USERNAME.github.io/emoji-map-japan`.
   - Update the contact email: `action="mailto:your.email@example.com"`.
   - Add your real thumbnail at `assets/emoji-map-japan-thumb.jpg`.
2. Open `index.html` in your browser to preview.

## Add a new project
Duplicate a card in the Portfolio grid in `index.html` and edit:
- Title, description
- Thumbnail image path
- Live demo link

## Deploy to GitHub Pages
- Create a new public repo named `<username>.github.io` or any repo with Pages.
- Push this project to the repo root or the `/docs` folder.
- In repo Settings → Pages, select source:
  - If repo name is `<username>.github.io`: set branch to `main` (root).
  - Otherwise: set branch to `main` and folder to `/docs` (then move files into `docs/`).
- Wait 1–2 minutes for the site to go live.

## Link from Fiverr
Use the Pages URL in your Fiverr profile and gigs. Example: `https://<username>.github.io/`.

## License
MIT
