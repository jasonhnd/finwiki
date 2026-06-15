# Next Development Plan

> Development plan for the next FinWiki phase after the documentation-system rebuild. It is based on [Code/Docs Alignment Audit](../07-quality/code-doc-alignment-audit.md) and current code behavior, not on older roadmap snapshots.

## Planning Principle

Do not add more content volume until the public entry points, documentation checks, and i18n freshness checks are first-class tooling. FinWiki already has 40 domains and 1485 link-audited entries; the next phase should improve control, repeatability and handoff quality. The 2026-06-08 drift audit also corrected stale canonical-anchor paths and stale API cleanup behavior, so new work should build on those facts rather than old JapanFG aliases or memory-only deployment steps.

## Phase A - Public Entry-Point Audit Hardening

Goal: make `.txt` AI/crawler entry points as safe as Markdown entries.

### A1. Add `.txt` Link/Route Audit

Problem:

- `llms-tasks.txt`, `llms.txt`, and `llms-full.txt` can carry public route references.
- Markdown wikilinks are gated, but `.txt` route drift is not.

Implementation task packet:

- Source docs: [Wikilink Resolution](../05-functional-specs/wikilink-resolution.md), [AI Discovery Surface](../05-functional-specs/ai-discovery-surface.md), [Toolchain](../06-implementation/toolchain.md).
- Allowed files: `tools/`, `lib/markdown_helpers.ts`, `docs/05-functional-specs/`, `docs/07-quality/`, `package.json` if adding a script.
- Expected behavior: read selected `.txt` files, extract route-like references, validate that referenced source paths or public routes resolve, and report failures.
- Validation: positive fixture/pass case, negative fixture/fail case, `bun tools/release.ts --check --strict`.

Acceptance:

- `.txt` route drift can fail a dedicated check.
- The check can be called from the release gate or package script.
- Historical `.txt` entries are not rewritten unless the check finds a real issue.

## Phase B - Developer Docs Quality Gates

Goal: make internal docs safe to use even though `docs/` is intentionally excluded from corpus/wikilink audit.

### B1. Add Docs Markdown Link Checker

Problem:

- `docs/` is excluded from public wikilink audit by design.
- Current docs link verification is a one-off local Node script.

Implementation task packet:

- Source docs: [Documentation System](../00-governance/documentation-system.md), [QA Checklist](../07-quality/qa-checklist.md), [Test Plan](../07-quality/test-plan.md).
- Allowed files: `tools/`, `docs/07-quality/`, `package.json`.
- Expected behavior: check relative Markdown links in `docs/**/*.md`, reject broken links and links escaping the repo.
- Validation: add one negative fixture or documented manual negative test, then run the checker on current docs.

Acceptance:

- `docs_markdown_links_ok` or equivalent is produced by a reusable command.
- Test plan and QA checklist reference the reusable command, not a one-off snippet.

### B2. Add Stale Active-Docs Scan

Problem:

- Historical docs can mention old counts, but active docs should not instruct developers using stale facts such as 23 domains or deprecated site mirrors.

Expected behavior:

- A lightweight scan checks active docs for known stale implementation phrases.
- Archive and historical release notes are exempt.

Acceptance:

- The scan catches active-doc references to obsolete site mirrors, 23-domain current-state claims, old Python/postbuild assumptions, and report-only canonical drift claims.

### B3. Add Generated-Surface Drift Scan

Problem:

- Release notes and control docs can discuss `docs/`, but AI surfaces should not expose `docs/` as crawlable markdown links.
- Domain moves can leave stale generated files unless API output is cleaned before rewrite.

Expected behavior:

- Check `ai-index.json`, `api/entries/index.json`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, and `robots.txt` for forbidden docs routes/source entries and stale old-domain API residue.

Acceptance:

- The scan distinguishes historical prose from page/source/API entries.
- It catches stale `api/entries/<old-domain>/` files after a route/domain move.

## Phase C - i18n Freshness And Integrity Reporting

Goal: turn i18n status from batch memory into a repeatable report.

### C1. Add Read-Only i18n Status Command

Problem:

- Prep/commit scripts can process translations, but maintainers need a non-mutating status report before starting work.

Expected report:

- Count of source entries.
- Mirror counts by language.
- Missing mirrors by language.
- Stale mirrors by language using `source_hash`.
- `fidelity: needs_review` counts.
- Source pointer drift counts.
- Optional sample rows for stale/missing items.

Allowed files:

- `site/scripts/`, `docs/04-architecture/i18n-architecture.md`, `docs/05-functional-specs/i18n-pipeline.md`, `docs/07-quality/test-plan.md`.

Acceptance:

- Command exits 0 for report-only mode.
- It does not rewrite `source_hash`.
- It can be used before translation batches and after domain moves.

## Phase D - Release And Deployment Operations

Goal: make local and GitHub deployment verification less dependent on memory.

### D1. Keep Deployment Runbook And Checks Current

Problem:

- The deployment runbook now spells out local site install/build, Vercel shadow build, duplicate-id check, GitHub Actions watch and public URL spot-checks.
- Future deployment-tooling changes can still drift away from the runbook.

Acceptance:

- Any future deployment-tooling change updates [Deployment Runbook](../08-operations/deployment-runbook.md), [Incident Runbook](../08-operations/incident-runbook.md), and [Maintenance Runbook](../08-operations/maintenance-runbook.md) in the same session.
- Site/UI changes still run site build, duplicate-id check and visual QA.

### D2. Add Incident Playbooks For Common Gate Failures

Problem:

- Incident runbook lists categories but not repair recipes.

Acceptance:

- Add repair recipes for count drift, docs leakage, canonical drift, `.txt` audit failure, i18n stale spike and deployment failure.

## Phase E - Content Quality After Tooling

Goal: resume content work only after the tooling/control gaps above are closed.

### E1. Deduplicate v12 Double-Batch Topics

> **Task packet accepted 2026-06-15 (Issue #15).** A read-only review of all five candidate domains (~90 pages) found **3 true merges + 1 editorial trim**; everything else is complementary hub-and-spoke (overview / matrix / mechanism / entity by design) and must be kept. No wiki body was changed by the planning pass. Implementation is tracked by **#8** under the file scope below. Baseline before work: `wiki_link_audit` dead=0, canonical_drift=0.

Priority domains reviewed: `loyalty`, `money-market`; secondary: `business`, `corporate-strategy`, `manufacturer-finance`.

#### Accepted merge actions (3)

| # | Merge (source → canonical) | Inbound links to update (source files; ×3 i18n mirrors each) | Facts to preserve in canonical |
|---|---|---|---|
| 1 | `money-market/japan-uncollateralized-vs-collateralized-call-market` → `money-market/call-market-structure` | 5: `money-market/INDEX`, `japan-money-market-benchmark-reform-tona`, `japan-repo-transaction-structures-gensaki-cash-collateralized-securities-lending`, `japan-tibor-benchmark-rate`, `japan-torf-term-risk-free-rate` | segment-comparison table; "collateralized call rate not calculated since 2016-04 (no tanshi-intermediated trades)"; "repo absorbed secured funding" reasoning; relationship-to-other-front-end-markets table; reading checklist. Keep `call-market-structure` canonical (24 inbound files); carry over the 無担保/有担保コール aliases. |
| 2 | `loyalty/loyalty-liability-customer-funded-float` → `loyalty/point-program-unit-economics` | 1: `loyalty/INDEX` | float-instrument 4-property table; the explicit "float ≠ breakage" framing; loyalty-point vs prepaid-stored-value contrast table; the 4-risk table; "why financial groups want this balance" (Rakuten FG / NDFG / PayPay FG). Drop breakage prose already in `point-liability-accounting-boundary`. |
| 3 | `corporate-strategy/partial-spinoff-tax-deferral` → `corporate-strategy/japan-kabushiki-bunpai-spinoff-regime` | ~17: `corporate-strategy/INDEX` + 5 cs pages (`japan-kabushiki-bunpai-spinoff-regime`, `japan-kaisha-bunkatsu-tax-regime`, `spinoff-decision-tree-japan`, `kabushiki-koufu-stock-distribution-regime`, `toshiba-tob-squeeze-out-2023-2024-case`); 7 business pages (`sony-fg-partial-spinoff-case`, `japan-listed-corp-strategic-restructuring-matrix`, `softbank-vision-fund-arm-ipo-template`, `rakuten-group-mobile-finance-bundling-case`, `ntt-docomo-d-point-telco-finance-case`, `seven-bank-atm-platform-deconsolidation-case`, `kddi-au-financial-bundling-case`); 3 finance pages; `manufacturer-finance/sony-group-finance-arm` | パーシャルスピンオフ制度構造 table; 5-step transaction-flow; METI 2024-02-14 Sony 産業競争力強化法 認定 citation; 2024 税制改正 deadline-extension note; METI スピンオフ手引き 2025-07 revision note. Route Sony FG transaction detail to `business/sony-fg-partial-spinoff-case`. High inbound cost — keep the old slug as an alias unless every inbound link is updated. |

#### Editorial trims (NO file merge)

- `business/founder-pivot-outcome-template-matrix`: trim the embedded CZ section to a summary + link to `business/cz-binance-founder-handoff-case` (the matrix currently restates a near-full case, unlike its other rows).
- `loyalty/au-pay-loyalty-ecosystem-deep` and `loyalty/ponta-points-deep-dive`: slim the repeated Ponta-origin / Lawson-triangle narrative to a summary + forward-ref to the canonical Ponta page; keep both pages.
- `loyalty/d-point-detailed-ecosystem` ↔ `d-point-au-kddi-docomo-telco-point-consolidation` and `v-point-smbc-ccc-case` ↔ `t-point-v-point-post-2024-merger`: keep both in each pair (operator deep-dive vs comparison/case); de-duplicate only the repeated coalition/accrual tables.

#### Keep as-is — complementary, do NOT merge

- **money-market**: `japan-money-market` (overview) + `japan-short-term-funding-instrument-matrix` (matrix) + per-instrument pages (cp / ncd / tbill / mmf) are intentional hub-and-spoke; TONA / TIBOR / TORF are distinct benchmarks; the three BOJ pages are distinct functions; `japan-repo-transaction-structures-...` (legal forms) vs `jgb-repo-market-japan` (market) are distinct.
- **business**: founder templates ↔ `founder-pivot-outcome-template-matrix` (hub-spoke); the 4 telco-finance cases are a designed contrast set; restructuring matrix ↔ individual cases.
- **manufacturer-finance**: Toyota (`toyota-motor` / `toyota-financial-services` / `business/...captive-finance-case`) is a 3-altitude set; Sony similar; mechanism pages vs per-company captive pages are hub-spoke. The `canonical_anchor` frontmatter already governs the cross-domain entity pairs (`leasing-firms/toyota-financial`, `megabanks/sony-fg`). Separate flag: `manufacturer-finance/seiko-epson` is a thin stub — a content-depth issue, not a dedup one.
- **corporate-strategy**: the remaining regime pages (`japan-gappei-merger-regime`, `japan-kaisha-bunkatsu-tax-regime`, `japan-kabushiki-koukan-iten-regime`, `kabushiki-koufu-stock-distribution-regime`, `japan-group-tsusan-consolidated-tax-regime`, `japan-business-succession-jigyou-shoukei`, `japan-holding-company-conversion`, `spinoff-decision-tree-japan`) each cover a distinct legal mechanism. (The suspected `japan-kabushiki-koufu-...` duplicate does not exist.)

#### Cross-domain (keep both; just verify cross-links exist)

- loyalty ecosystem pages ↔ `business/` telco-finance cases (d-point / rakuten / kddi / paypay): point-economics lens vs corporate-architecture lens.
- `business/japan-listed-corp-strategic-restructuring-matrix` ↔ `securities/japan-tob-mbo-large-deal-2023-2026-case-matrix`: shared anchors (Toshiba, Arm) but different axes — keep the scope-boundary prose explicit.

#### Implementation scope for #8 (content agent)

- **Allowed files**: only the named pairs in the three merges — the 3 source pages, their 3 canonicals, and the inbound-linker files listed above — plus those slugs' mirrors under `site/src/content/i18n/{ja,zh,en}/**`; README / CHANGELOG / `releases/**` / generated surfaces if public counts or URLs change. Do not touch unrelated entries or do broad formatting cleanup.
- **Per merge**: copy the facts-to-preserve into the canonical page, update every inbound `[[domain/<old-slug>]]` → `[[domain/<canonical>]]`, then either delete the source page (records a public-URL removal) or keep it as an alias-only stub. Delete the 3 merged slugs' i18n mirrors if the page is removed.
- **Validation**: `bun tools/release.ts --write` then `bun tools/release.ts --check --strict`; `bun tools/wiki_link_audit.ts --fail-on-issues` (dead must stay 0); `bun run i18n:status` after any mirror deletes; `git diff --check`. README/CHANGELOG/release note must record any public URL removals (up to 3 slugs).

### E2. Selective Small-Domain Expansion

> **Shortlist accepted 2026-06-15 (Issue #16).** Read-only review of the six candidate domains against their INDEX backlogs and current coverage, biased against volume growth (Planning Principle). Result: **1 recommended page + targeted deferrals**; most candidate domains are at healthy coverage. Implementation tracked by **#9**. No corpus entry was created by the planning pass.

Candidate domains reviewed: `security`, `retail`, `consumer-finance`, `financial-licenses`, `trading-company-finance`, `financial-conglomerates`.

Rule (unchanged): add pages only after a public-source gap is identified and the route cannot be served by an existing page.

#### Recommended now (1)

| Route | Domain | Rationale | Public-source basis | Why an existing page can't cover |
|---|---|---|---|---|
| `financial-licenses/japan-trust-business-license-stack` | financial-licenses | The domain holds horizontal license-**stack** pages for bank, securities, payment, and insurance, but **not trust** — trust is only a Core-License-Matrix row routing to entity pages. A trust-business license-stack page (信託業法: 運用型 / 管理型 信託会社, 信託兼営金融機関, 信託契約代理業, custody / master-trust functions, 特定信託) completes the parallel set. | 信託業法 (e-Gov 法令検索); FSA 信託会社 / 信託兼営金融機関 lists (fsa.go.jp/menkyo) | `trust-banks/*` (SMTH, Custody Bank, Master Trust Bank) are ENTITY pages; `financial-licenses/foreign-financial-group-adjacent-licenses` covers only the foreign-group trust slice. No horizontal Japanese trust-**license** page exists like the other four stacks. |

#### Deferred — do not create now

- `security/timelock-governance-pattern`, `security/non-evm-bytecode-forensics` — the only maintainer-noted future directions (security INDEX). Niche crypto-forensics, tangential to the Japan-finance core; revisit only on a concrete public-source trigger.
- `financial-licenses/lending-installment-credit-license-stack` (貸金業法 + 割賦販売法 horizontal stack) — already partially served by `card-issuers/installment-sales-act-2020-amendment` and the `consumer-finance` INDEX regulation notes; create only if those prove insufficient for a real route.

#### No expansion now — at healthy coverage (documented per acceptance)

- `consumer-finance`: the 3 大消費者金融 (Acom / MUFG-affiliated, Promise / SMFG, Aiful / independent) + レイク (Shinsei Financial / SBI) are covered; no remaining major 貸金業 operator has an uncovered bank/megabank/card group relationship under the domain's strict expansion rule.
- `retail`: INDEX Expansion Backlog is fully "Done" (Wave 6 wedge/economic-sphere matrices + the CVS-finance comparison shipped).
- `trading-company-finance` and `financial-conglomerates`: both cover all seven sōgō-shōsha (Mitsubishi, Mitsui, Itochu, Sumitomo, Marubeni, Sojitz, Toyota Tsusho) as entity + finance-arm pairs — complete.

#### Implementation scope for #9 (content agent)

- **Allowed files**: `financial-licenses/japan-trust-business-license-stack.md` (new entry, use the financial-licenses INDEX Expansion Template), `financial-licenses/INDEX.md` (add to Domain Members + the Active Expansion Backlog row), README / CHANGELOG / `releases/**` / generated surfaces if counts change; optionally the new page's `site/src/content/i18n/{ja,zh,en}/...` mirrors via the i18n pipeline.
- **Source-of-truth**: follow the financial-licenses INDEX "Source-of-Truth Checklist" (FSA lists → law / guideline → e-Gov text → entity disclosure → negative-finding discipline). No legal advice; promote to `confidence: likely` only when source-verified.
- **Validation**: `bun tools/release.ts --write` then `bun tools/release.ts --check --strict`; `bun tools/wiki_link_audit.ts --fail-on-issues` (dead=0); `git diff --check`.

## Recommended Sequence

| Order | Work item | Why first | Owner model role |
|---:|---|---|---|
| 1 | `.txt` route/link audit | Protects public AI entry points and closes a known audit gap. | High-reasoning spec agent -> code implementation agent |
| 2 | Docs Markdown link checker | Makes the new documentation system self-checking. | High-reasoning spec agent -> code implementation agent |
| 3 | Active-doc stale scan | Prevents old architecture assumptions from re-entering active docs. | High-reasoning spec agent -> code implementation agent |
| 4 | i18n status command | Makes translation state inspectable before future batches. | High-reasoning spec agent -> code implementation agent |
| 5 | Generated-surface drift scan | Prevents stale API residue and docs-link exposure after route/doc moves. | High-reasoning spec agent -> code implementation agent |
| 6 | Deployment runbook upkeep | Keeps publish/CI work transferable as tooling evolves. | Documentation/spec agent |
| 7 | v12 dedup review | Content cleanup after tooling is safer. | High-reasoning content reviewer |
| 8 | Small-domain expansion | Adds content only after operational controls are stronger. | Content agents under file-scope rules |

## Non-Goals For This Phase

- No broad UI redesign. Targeted UI/CSS work should follow [UI/UX Principles](../02-product/ui-ux-principles.md), [Theme System](../04-architecture/theme-system.md), [UI/UX Functional Spec](../05-functional-specs/ui-ux.md), and [Visual QA Checklist](../07-quality/visual-qa-checklist.md).
- No new large translation batch unless i18n status reporting shows the exact scope.
- No bulk content expansion before `.txt` audit and docs checks are first-class.
- No model-version-specific workflow rules; keep model roles capability-based.

## Validation Bundle

Each completed item should end with:

```bash
git status --short --branch
bun tools/release.ts --check --strict
bun tools/wiki_link_audit.ts --fail-on-issues
git diff --check
```

Add item-specific checks from the sections above. If generated public surfaces change, run:

```bash
bun tools/release.ts --write
bun tools/release.ts --check --strict
```
