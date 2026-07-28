# Changelog

All notable changes to Mini Golf Signage Manager are recorded here.

## [1.0.0] — Version 1.0 Stable — Build 75

### Added

- Automatic Development, Production, and Local Preview environment detection.
- Stable Version 1.0 identity across Home, About, Release Notes, diagnostics, and metadata.
- Final GitHub release and production-promotion documentation.

### Release status

- Version 1.0.0 Stable.
- Git tag: `v1.0.0`.
- Permanent rollback baseline.

## [1.0.0-build.74] — Release Candidate Diagnostics

### Added

- Export Diagnostics command under Administration.
- Single downloadable JSON snapshot for support and release verification.
- Version, build, environment, Health Score, telemetry, heartbeats, schedules, recovery, rollout, and image-index information.
- Basic redaction for fields whose names indicate passwords, tokens, secrets, or authorization data.

### Release status

- Promoted the development build label to Version 1.0 Release Candidate.

## [1.0.0-build.73] — Health Score Stability

### Improved

- Recalibrated strong-reliability scoring for failure rates at or below 1%.
- Expanded the normal Apps Script response range from 1,200 ms to 1,500 ms.
- Excluded isolated cold-start peaks from deductions when average performance remains healthy.
- Retained full penalties when high peaks accompany sustained slow responses.
- Added transparent scoring explanations for excluded cold-start outliers.

## [1.0.0-build.72] — About and Release Notes

### Added

- About dialog with version, build, environment, technology, player version, and current Health Score.
- Built-in Release Notes dialog with major Version 1.0 milestones.
- Administration menu shortcuts for About and Release Notes.
- Keyboard and outside-click dialog closing.

## [1.0.0-build.71] — Command Palette Mouse Fix

### Fixed

- Command Palette choices can now be opened with a mouse click.
- Hovering no longer rebuilds and replaces result buttons.
- Added stable delegated click handling on the results container.
- Preserved keyboard navigation and Enter selection.

## [1.0.0-build.70] — Command Palette

### Added

- Global Ctrl+K and Command+K workspace launcher.
- Searchable workspace navigation.
- Arrow-key selection, Enter to open, and Escape to close.
- Visible Go to button for mouse and touch access.

## [1.0.0-build.69] — Grouped Navigation

### Added

- Grouped top navigation for Operations, Content, Monitoring, and Administration.
- Responsive dropdown navigation menus.
- Escape-key and outside-click menu closing.
- Mobile-friendly navigation presentation.

### Improved

- Reduced top-navigation crowding.
- Preserved direct Home access.
- Kept every existing workspace accessible.

## [1.0.0-build.68] — Mission Control Step 1F

### Added

- Recent Activity timeline on Mission Control.
- Health score update entries.
- Player heartbeat and offline entries.
- Schedule loading activity.
- Image Library availability.
- Recovery snapshot activity.
- Manual Refresh Activity control.

## [1.0.0-build.67] — Mission Control Step 1E

### Added

- Daily confidence banner on Mission Control.
- Ready for Today, Review Recommended, and Attention Required states.
- Automatic checks for schedules, missing images, health score, player status, Apps Script telemetry, cached schedule data, and recovery readiness.
- One-click access from the confidence banner to System Health.

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
