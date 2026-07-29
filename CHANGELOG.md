# Changelog

All notable changes to Mini Golf Signage Manager are recorded here.

## [1.2.0-dev.87] — Operational Awareness

### Fixed

- Controlled Rollout Assistant no longer requests Review during intentional Quiet Hours.
- Players between 22:00 and 10:00 now show Sleeping instead of a false version warning.
- Screens not scheduled for the current weekday show Not scheduled.
- Rollout cards no longer combine deployment and readiness border colors.
- Deployment stage is represented by one left-side accent; live readiness remains a badge.
- Deployed screens in Sleeping or Not scheduled states are described as expected, not as warnings.

### Added

- Sleeping and Not scheduled counts in the rollout summary.
- Player heartbeat status inside each rollout card.
- Immediate nighttime heartbeat testing instructions through the player console.

## [1.2.0-dev.86] — State Reliability

### Fixed

- Controlled Rollout Assistant now separates manual Deployment Stage from Live Readiness.
- A screen marked Deployed remains visibly deployed when a temporary live check recommends Review.
- Heartbeat cards no longer jump directly from Online to Offline after a short missed check-in.
- Last-known current image and player version are preserved through incomplete heartbeat responses.
- A failed heartbeat refresh now displays last-known player state instead of clearing the player grid.
- Carried forward the production day rules: ArcadeSunday on Sunday, ArcadeWeek Monday–Thursday, and Arcade Friday–Saturday.

### Added

- Online, Stale, Offline, and Sleeping heartbeat grace states.
- Two-minute Online window and ten-minute Offline threshold.
- Image and version confirmation timestamps.
- Clear last-known labels for remembered values.

## [1.2.0-dev.85] — Monitoring Accuracy

### Fixed

- Player versions now retain the last known valid value for up to 24 hours.
- Empty heartbeat responses no longer immediately replace a valid version with `Unknown`.
- Player Version Compliance now shows the last version-confirmation time.
- `ArcadeWeek` and `ArcadeSunday` are evaluated according to the current day.
- Screens not expected today show `Not scheduled today` and do not reduce Go-Live Readiness.
- Persistent no-End-Time timeline items now resume after temporary overrides.
- Control Center and Daily Schedule timelines now show clear Override indicators.
- Daily Schedule spacing and Light Mode contrast were corrected.

### Added

- Health Score `Warming Up` presentation for healthy cold-start telemetry.
- Version 1.2 Development identity.

## [1.1.0] — Version 1.1.0 Stable — Build 84

### Added in Version 1.1

- Scroll progress indicator and Back to Top navigation.
- Proactive Notification Center.
- Notification read tracking, preferences, snoozing, and persistent history.
- Notification History search, filters, insights, and JSON export.
- Mission Control Home personalization with section visibility and spacing controls.

### Fixed

- Corrected the stale About-dialog build label that remained on Build 74.
- Corrected the stale current-release card that remained on Build 75.
- Synchronized Home, About, Release Notes, diagnostics, history export, README, changelog, and version metadata.

### Release status

- Version 1.1.0 Stable.
- Build 84.
- Git tag: `v1.1.0`.
- Permanent rollback baseline for future Version 1.2 development.

## [1.1.0-dev.83] — Home Personalization

### Added

- Customize Home control.
- Visibility preferences for Confidence Banner, Platform Status, Quick Actions, and Recent Activity.
- Comfortable and Compact spacing.
- Persistent local preferences and Restore defaults.

## [1.1.0-dev.82] — Notification History Insights

### Added

- Search and event-type filters for Notification History.
- Last-24-hours summary metrics.
- JSON history export.
- Filtered-result counts and no-results feedback.

## [1.1.0-dev.81] — Notification History

### Added

- Active and History tabs in the Notification Center.
- Persistent local history for alerts appearing, being reviewed, snoozed, and resolved.
- Clear-history control and retention of the latest 100 events.

## [1.1.0-dev.80] — Notification Snoozing

### Added

- Snooze individual alerts for 15 minutes, 1 hour, 4 hours, or until tomorrow.
- Persistent snooze state stored locally in the browser.
- Snoozed-alert count in the Notification Center summary.
- Automatic reappearance when a snooze expires.

### Behavior

- Snoozed alerts remain tracked but are temporarily hidden.
- Changed alert fingerprints appear immediately as new alerts.
- Closing the Notification Center also closes the snooze menu.

## [1.1.0-dev.79] — Notification Preferences

### Added

- Persistent notification-category preferences.
- Individual controls for Health, Players, Schedules, Images, Recovery, and Apps Script alerts.
- Configurable Health Score alert threshold: 95, 90, 85, 80, or 75.
- Reset-defaults control.
- Preferences stored locally in the browser.

### Behavior

- Disabled categories no longer create alerts or contribute to the badge.
- Changing preferences updates the Notification Center immediately.

## [1.1.0-dev.78] — Notification Memory

### Added

- Persistent read/unread notification state using local browser storage.
- Badge now counts only new or changed notifications.
- Mark all as read control.
- Last-reviewed timestamp.
- New and Reviewed labels inside each notification.

### Behavior

- Active issues remain visible until resolved.
- Reviewed alerts stop contributing to the badge.
- If an alert changes, it becomes new again automatically.

## [1.1.0-dev.77] — Notification Center

### Added

- Proactive Notification Center with an active-alert badge.
- Alerts for Health Score, offline players, unavailable schedules, missing images, cached data, recovery readiness, and Apps Script errors.
- Direct navigation from each alert to the relevant workspace.

## [1.1.0-dev.76] — Navigation Polish

### Added

- Floating Back to Top button.
- Smooth page return with reduced-motion support.
- Automatic visibility after 420 px of scrolling.
- Expanded Top label near the bottom of long pages.
- Thin page-scroll progress indicator.
- Mobile safe-area positioning.

### Development cycle

- Began Version 1.1 Development after the Version 1.0.0 Stable release.

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
