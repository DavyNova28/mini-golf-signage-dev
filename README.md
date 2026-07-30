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

## BUILD 90.3 — BULK ROLLOUT ACTIONS

WHAT CHANGED
============
- Added a Bulk Actions panel to the Controlled Rollout Assistant.
- Added a selection checkbox to every rollout card.
- Added Select all, Deselect all, and Clear selection controls.
- Added one-stage application across all selected screens.
- Bulk Deployed actions still enforce each screen's live-readiness checks.
- Screens that are not Ready are skipped and named in the notification.
- Every actual stage change is written to the existing deployment history
  with a "Bulk action" source label.
- Screens already at the selected stage are not duplicated in history.
- Existing Build 89.5 through 90.2 reliability and UX fixes are retained.

## BUILD 90.2 — DEPLOYMENT HISTORY & ACTIVITY LOG

WHAT CHANGED
- Records every manual rollout-stage change with screen, previous stage,
  new stage, and timestamp.
- Adds a Recent rollout activity panel below the rollout cards.
- Adds an expandable Recent deployment history section to each screen card.
- Records stage changes caused by Reset rollout progress.
- Avoids duplicate history entries when clicking the already-selected stage.
- Keeps the latest 100 activity entries.
- Includes a Clear history button with confirmation.

## BUILD 90.1 — LIVE HEARTBEAT CARDS

WHAT CHANGED
- Each Rollout Assistant card now shows a dedicated player heartbeat panel.
- Clear Online, Delayed, Offline, and Sleeping states with a colored indicator.
- Relative freshness and the exact last-heartbeat timestamp are visible directly in the card.
- Existing deployment stage, live readiness, player version, URL, and actions remain unchanged.
- Includes all fixes from Builds 89.5 through 90.0.

## BUILD 90.0 — ROLLOUT FEEDBACK UX

Changes:
- Rollout action feedback now appears as a fixed top-right toast.
- The message remains visible even when using controls farther down the page.
- Each rollout card's stage chip remains the permanent status indicator.
- Toasts automatically fade after 5 seconds.
- A new message resets the timer so an older timeout cannot hide it early.
- Includes the Build 89.5 click reliability, Build 89.6 stable URL, and Build 89.7 render stability fixes.

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
