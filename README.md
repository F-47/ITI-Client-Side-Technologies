# ITI Client-Side Technologies

A collection of exercises, labs, and mini‑projects for learning client‑side web development (HTML, CSS, and JavaScript). Each folder contains a self‑contained example you can open directly in a browser or serve via a simple local server.

## Repository Structure

```
html/
  personal_website/                 # Basic personal website (HTML/CSS)
  personal_website - bonus/         # Enhanced version with extra assets

JS/
  calculator/                       # Calculator app (HTML/CSS/JS)
  Day 1/                            # Day 1 answers
  Day 2/                            # Day 2 answers
  Day 3/                            # DOM/events exercises
  Day 4/                            # Image slider/banner lab
  Day 5/                            # Lab 5 answers
  Day 7/                            # Day 7 lab
  Day 8/                            # Data fetching utilities and examples
  Linkedlist/                       # Linked list visualization
  table/                            # Dynamic table example

ssh-task/                           # SSH setup screenshots
```

## Getting Started

- Open any `index.html` (or specific `.html`) file in your browser by double‑clicking it.
- For features that require fetching local assets with relative paths, prefer running a local web server (see below).

### Option 1: VS Code Live Server (recommended)

1. Install the "Live Server" extension in VS Code.
2. Open the repository folder in VS Code.
3. Right‑click the desired `index.html` (for example `JS/calculator/index.html`) and choose "Open with Live Server".

### Option 2: Simple local HTTP server

Using Python 3 (if installed):

```bash
python -m http.server 5500
```

Then open `http://localhost:5500/` and navigate to the folder/file you want (e.g., `http://localhost:5500/JS/calculator/`).

Using Node (if installed):

```bash
npx serve . -l 5500
```

## Highlights

- Personal Website: `html/personal_website/home.html`
- Personal Website (Bonus): `html/personal_website - bonus/home.html`
- Calculator App: `JS/calculator/index.html`
- Data Fetching Demo: `JS/Day 8/index.html` with `dataFetcher.js` and `utils.js`
- Linked List Demo: `JS/Linkedlist/index.html`
- Dynamic Table: `JS/table/index.html`

## Notes

- All examples are plain HTML/CSS/JS and run in any modern browser.
- Assets (images/icons) are included under the respective `assets/` folders.
- If you see CORS or file access issues when opening files directly, use a local server.

## License

No license specified. If you intend to reuse code, consider adding a license (e.g., MIT) to this repository.

## Author

Created as part of ITI client‑side technologies practice.
