---
name: Implementation task (tooling / site)
about: A bounded code or config change to tooling, the site, the release gate, i18n, search, or generated surfaces.
title: "[Area] "
labels: ["type:tooling", "agent-ready"]
---

## Goal
<one concrete outcome>

## Background
<why now; what this builds on>

## Scope
<what is in scope; explicit non-goals. Prefer structured parsing / reuse of existing helpers over new parallel implementations.>

## Allowed Files / Areas
- tools/**
- lib/**
- site/**
- package.json
<delete what does not apply; list forbidden areas if useful>

## Acceptance Criteria
- <observable, checkable outcome>
- <...>

## Validation
- `bun tools/release.ts --check --strict`
- <relevant scan: ai:audit / docs:audit / docs:stale / surface:drift / i18n:status>
- `git diff --check`

## Source Docs
- docs/06-implementation/model-agent-workflow.md
- <relevant PRD / ARD / FSD / NFR / RTM rows>

## Release Notes
- If this changes repository entry points, operating rules, generated surfaces, content counts, or public release status, update README.md / CHANGELOG.md / releases per AGENTS.md.
