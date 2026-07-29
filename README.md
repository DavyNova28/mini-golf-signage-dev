# Mini Golf Signage Manager

Version **1.2 Development** — Build **87**

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
4. The Version 1.0 rollback baseline is tagged as `v1.0.0`. The current stable release is tagged as `v1.1.0`.


## Version 1.1 highlights

- Back to Top navigation and scroll progress
- Proactive Notification Center
- Notification read tracking and preferences
- Alert snoozing
- Notification History and history insights
- JSON history export
- Home layout personalization

## Stable release

- Version: `1.1.0`
- Build: `84`
- Channel: `stable`
- Git tag: `v1.1.0`


## Version 1.2 development

Build 85 begins the Monitoring Accuracy milestone:

- Persistent player-version memory
- Day-aware compliance
- Health warm-up presentation
- Correct persistent/temporary timeline rendering
- Daily Schedule Light Mode polish


## Build 86 — State Reliability

- Manual rollout stage remains separate from live readiness
- Online → Stale → Offline heartbeat grace states
- Last-known current image and version persistence
- Player field confirmation timestamps


## Build 88 — Operations Intelligence

- Quiet Hours no longer produce false rollout Review states
- Sleeping and Not scheduled operational states
- Neutral rollout card borders with one deployment-stage accent
- Live readiness remains a separate badge
