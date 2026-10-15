# UniFind

UniFind is a responsive university lost-and-found board. Students can browse and search reports, filter by type and category, inspect item details, and publish their own lost or found reports.

The project is a dependency-free static site. Reports created in the demo are saved in the browser with `localStorage`.

## Run locally

Serve the `dist` directory with any static HTTP server. For example:

```powershell
npx serve dist
```

## Deploy

The included GitHub Actions workflow publishes `dist` to GitHub Pages whenever the `main` branch changes. In the repository settings, set **Pages ג†’ Source** to **GitHub Actions** if GitHub does not select it automatically after the first workflow run.

