# Mini Golf Signage Manager

Version **1.1 Development** — Build **76**

## Project structure

```text
dashboard-v3.html
css/
  dashboard.css
js/
  dashboard.js
version.json
CHANGELOG.md
README.md
```

## Deployment

Upload the files while preserving the folders:

- `dashboard-v3.html`
- `css/dashboard.css`
- `js/dashboard.js`
- `version.json`

The dashboard continues to use the existing Apps Script `/exec` URL configured in `js/dashboard.js`.

## Important

Do not flatten the `css` or `js` folders. The HTML uses these relative paths:

```html
<link rel="stylesheet" href="css/dashboard.css">
<script src="js/dashboard.js" defer></script>
```

## Stable release process

1. Test this modular build in GitHub Pages.
2. Confirm Schedule Manager, Image Library, System Health, Heartbeat, and Rollout Assistant.
3. Keep the store screens on the current safe setup until the preflight passes.
4. The final tested production commit is tagged as `v1.0.0`.
