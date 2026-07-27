# Changelog

All notable changes to Mini Golf Signage Manager are recorded here.

## [1.0.0-build.66] — Mission Control Step 1D Corrected

### Fixed

- Corrected all Quick Action workspace destinations.
- Corrected the Image Library count variable.
- Added Build 66 cache identifiers to CSS and JavaScript links.
- Prevented mismatched cached assets from breaking Home navigation.

## [1.0.0-build.65] — Mission Control Step 1D

### Added

- Responsive Quick Actions grid on Home.
- Clickable shortcuts for schedules, daily calendar, images, System Health, rollout, and holidays.
- Live health, schedule, rollout, and image-library status text.
- Time-aware Home greeting.
- Keyboard-accessible action cards and hover animations.

## [1.0.0-build.64] — Mission Control Step 1C

### Added

- Live Mission Control platform-status cards.
- Apps Script connection summary.
- GitHub Pages availability summary.
- Player heartbeat status.
- Cache performance summary.
- Offline recovery snapshot status.
- Configured schedule coverage.

## [1.0.0-build.63] — Mission Control Step 1B

### Added

- Branded Mission Control hero banner.
- Version 1.0 Stable Candidate badge.
- Build 63 development-environment label.
- Live health score and health-state display on Home.

## [1.0.0-build.62] — Mission Control Step 1A

### Added

- New Home tab as the first navigation item.
- New Mission Control placeholder workspace.
- Home is now the default dashboard landing page.

## [1.0.0] — Stable Candidate

### Added

- Schedule Manager
- Daily Schedule Calendar
- Holiday Overrides and Holiday Calendar
- GitHub Image Library and generated image index
- Backup and restore
- Audit log
- Offline dashboard snapshots
- Apps Script telemetry
- Automatic service checks
- Health score
- Player heartbeat
- Player version compliance
- Go-Live Readiness
- Controlled Rollout Assistant
- Rollout progress tracking
- Light and dark themes

### Improved

- Apps Script schedule caching
- Staggered player polling
- Quiet-hours behavior
- Image filename capitalization handling
- System Health full-width layout
- Offline-state readability
- Health score calibration

### Fixed

- Stale telemetry errors
- `Schedule` fallback-tab confusion
- Calendar event overflow
- Image-browser search and close controls
- Player version refresh and preflight controls
- JavaScript accidentally inserted into CSS during development

### Architecture

- Split the dashboard into separate HTML, CSS, and JavaScript files.
