# Migration from Version 1.0.0 to Version 1.1.0

## Scope

Version 1.1.0 is a front-end dashboard update. It does not require new
Google Sheets tabs, Apps Script files, or Apps Script deployments.

## Files to replace

- `dashboard-v3.html`
- `css/dashboard.css`
- `js/dashboard.js`
- `version.json`
- `CHANGELOG.md`
- `README.md`
- `MIGRATION.md`

## Preserve

- Existing signage images
- `image-index.json`, unless the development copy is intentionally newer
- Existing Apps Script `/exec` URL inside `js/dashboard.js`
- Existing Google Sheets data
- Existing `v1.0.0` GitHub tag and release

## Local browser settings

Version 1.1 adds local browser preferences for notifications and Home layout.
These settings are created automatically when the production dashboard is used.

## Rollback

The GitHub release and tag `v1.0.0` remain the Version 1.0 rollback point.
After publishing Version 1.1, tag the tested production commit as `v1.1.0`.
