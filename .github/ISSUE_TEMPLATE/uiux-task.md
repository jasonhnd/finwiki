---
name: UI/UX task
about: A site theme, layout, design-token, or localization-chrome change.
title: "[UI/UX] "
labels: ["type:uiux", "needs-spec"]
---

## Goal
<one concrete visual / interaction outcome>

## Spec
<the acceptance detail this needs before implementation: current vs desired, affected routes, tokens. Remove the needs-spec label once filled.>

## Scope
<what is in scope; explicit non-goals>

## Allowed Files / Areas
- site/src/**
- design / theme tokens
<delete what does not apply>

## Acceptance Criteria
- <observable visual / interaction outcome>
- Both light/dark and ja/en/zh remain intentional where applicable.

## Validation
- Site build + `bun run html:check`
- Visual QA Checklist (`docs/07-quality/visual-qa-checklist.md`)
- Desktop/mobile spot-checks on representative public routes

## Source Docs
- docs/02-product/ui-ux-principles.md
- docs/04-architecture/theme-system.md
- docs/05-functional-specs/ui-ux.md

## Release Notes
- If this changes public site behavior or entry points, update README.md / CHANGELOG.md per AGENTS.md.
