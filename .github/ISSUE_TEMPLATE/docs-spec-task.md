---
name: Docs / spec task
about: A change to developer documentation, requirements, specs, runbooks, or governance.
title: "[Docs] "
labels: ["type:docs", "agent-ready"]
---

## Goal
<one concrete outcome>

## Background
<why now; what gap or drift this closes>

## Scope
<what is in scope; explicit non-goals. Active docs must use current facts; old facts belong only in dated history / ADR / 99-archive.>

## Allowed Files / Areas
- docs/**
- AGENTS.md
<delete what does not apply>

## Acceptance Criteria
- <observable, checkable outcome>
- <...>

## Validation
- `bun tools/active_doc_stale_scan.ts`
- `bun tools/docs_link_audit.ts`
- `git diff --check`

## Source Docs
- docs/00-governance/documentation-system.md
- docs/06-implementation/model-agent-workflow.md

## Release Notes
- If this changes repository entry points or operating rules, update README.md / CHANGELOG.md per AGENTS.md.
