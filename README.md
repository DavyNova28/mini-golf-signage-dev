# Mini Golf Signage Manager

Version **1.2 Development** — Build **89**

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


## Build 89 — Professional Polish · Phase 1

Build 89 Phase 1 upgrades Mission Control Home with a richer hero summary, animated operational counters, a time-aware greeting, and a more conversational Store Status panel. Existing monitoring, rollout, scheduling, and recovery behavior remains unchanged.

## Build 88 — Operations Intelligence

- Quiet Hours no longer produce false rollout Review states
- Sleeping and Not scheduled operational states
- Neutral rollout card borders with one deployment-stage accent
- Live readiness remains a separate badge

## Build 89 — Phase 1.1 Startup Data Patch

Mission Control Home now initializes its operational data automatically. On page load, the dashboard retrieves System Health telemetry and player heartbeats in the background, then refreshes readiness, rollout, Platform Status, and Operations Intelligence without requiring a visit to the System Health workspace.

## Build 89 — Phase 2

Build 89 Phase 2 adds an interactive player experience. Open **System Health → Player Heartbeat** and select any player card to inspect its current image, heartbeat age, version, confirmation times, scheduling expectation, and recent session events. The **Version Compliance** metric on Home is now clickable and opens a per-player compliance overview.

No Apps Script or player `index.html` changes are required for this phase.


## Build 89 — Phase 3

- Added reactive Home health/readiness rendering after telemetry, schedules, and heartbeats update.
- Added automatic background System Health refresh every 60 seconds.
- Added categorized, color-coded Recent Activity entries.
- Enhanced live heartbeat pulse feedback.
- Improved notification and mission-control refresh synchronization.


## Build 89 — Phase 4

Phase 4 is the final polish and stabilization pass before Version 1.2 Stable. It refines drawer navigation, keyboard accessibility, responsive spacing, Recent Activity presentation, Dark Mode consistency, and cache/build metadata. No Apps Script or player changes are required.
