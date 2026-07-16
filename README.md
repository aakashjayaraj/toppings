# Toppings Website

Static site for Toppings (Wolverton, Milton Keynes) — ready for GitHub Pages.

## Structure
- `index.html` — Home
- `menu.html` — Full menu
- `about.html` — About & contact (hours, address, map, phone)
- `css/style.css` — All styling
- `js/script.js` — Mobile nav + menu category scroll-spy
- `images/logo.png` — Toppings logo

## Deploy to GitHub Pages
1. Create a new GitHub repo (e.g. `toppings-website`).
2. Push these files to the repo root (or a `docs/` folder).
3. In the repo: **Settings → Pages → Source**, choose the branch (and folder) you pushed to.
4. Your site goes live at `https://<your-username>.github.io/<repo-name>/`.

## Editing content
- Menu items live directly in `menu.html` inside `.ticket` divs — copy/paste the pattern to add items.
- Update the Uber Eats link, phone number, or address by searching for them across the HTML files (they're repeated in the footer/header of each page).
