# Studio Forma — Architecture & Interiors

A responsive, four-page single-page website concept for Studio Forma. It uses HTML5, Tailwind CSS via CDN, custom CSS, vanilla JavaScript, and JSZip via CDN.

## Files

```text
index.html
css/main.css
js/router.js
js/estimator.js
js/projectsData.js
README.md
```

## Run locally

The project has no build step. From this directory, start a static HTTP server and open its local URL. For example, with Python installed:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`. The ZIP export fetches the six source files from the same origin, so serve the site over HTTP rather than opening `index.html` directly from disk.

## Included interactions

- Hash-based SPA navigation for Home, Works, Studio, and Inquire.
- Responsive floating navigation with a mobile menu.
- Works filters and a case-study drawer with a schematic floor plan, project approach, and construction notes.
- Live preliminary design-fee estimate based on type, area, and selected service add-ons.
- Client-side inquiry form validation and confirmation state.
- “Download Complete Codebase (.ZIP)” footer action that creates `studio-forma-website.zip` with all six files and their relative paths.

## Notes

Tailwind CSS, JSZip, Google Fonts, and portfolio photography load from external CDNs/hosts and need an internet connection. The inquiry form is a front-end demonstration: it validates the details and displays a confirmation, but it does not send data to a server. Connect it to the studio's chosen form endpoint to receive submissions. Budget rates are illustrative planning assumptions, not a fee proposal.
