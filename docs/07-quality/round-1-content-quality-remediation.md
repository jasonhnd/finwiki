# Round 1 Content Quality Remediation Packet

> Issue #59 read-only triage artifact. This document covers the current `severity=conflict` rows from `tools/factual_consistency_audit.ts --json` and the current `severity=needs_review` rows from `tools/provenance_completeness_audit.ts --json`. It is a repair packet only: no corpus edits, no i18n edits, no generated-surface refresh.

## Scope

- In scope: 15 factual-consistency conflict rows and 13 provenance needs-review rows.
- Out of scope: fact freshness / overdue review rows. The 270 freshness rows are reserved for Round 2.
- Command snapshot:
  - `bun tools/factual_consistency_audit.ts --json`: 58 rows total, 15 `conflict`.
  - `bun tools/provenance_completeness_audit.ts --json`: 6,429 rows total, 13 `needs_review`.

## Source Review Notes

The conflict decisions below use page-local sources first, with public-source spot checks where a date collision needed an external tie-breaker.

- Sony Group partial spin-off portal: https://www.sony.com/en/SonyInfo/IR/library/SFG_pso/
  - Public source distinguishes 2025-09-29 as the SFG listing notice date and 2025-10-01 as completion / execution of the partial spin-off.
- ORIX share-transfer announcement: https://www.orix.co.jp/grp/en/newsrelease/pdf/260427_ORIXE.pdf
  - Public source confirms April 27, 2026 as the announcement / share-transfer agreement date for ORIX Bank to Daiwa Next Bank.
- Japan Post Bank profile: https://www.jp-bank.japanpost.jp/en/aboutus/company/en_abt_cmp_profileoutline.html
  - Public source confirms Japan Post Bank date of establishment as September 1, 2006.
- Japan Post Bank history: https://www.jp-bank.japanpost.jp/en/aboutus/company/en_abt_cmp_history.html
  - Public source distinguishes April 2003 as the establishment of Japan Post, the government-owned public corporation, before privatization.

## Batch A - Factual Conflict Triage

### Summary

The 15 rows collapse into three entity clusters:

| Cluster | Rows | Triage result | Next fix issue |
|---|---:|---|---|
| Sony Financial Group date labels | 11 | Mixed: one real stale wording pattern plus audit label collisions | Round-1 factual fixes |
| Daiwa Next Bank / ORIX Bank date labels | 2 | False positive: same sentence contains balance-date and announcement-date facts | Round-1 factual wording hardening |
| Japan Post Bank / Yucho establishment labels | 2 | False positive: different historical entities / phases | Round-1 factual wording hardening |

### Conflict Rows

| ID | Audit entity / metric | Audit row | Triage | Correct value / interpretation | Page to fix in follow-up |
|---|---|---|---|---|---|
| F01 | `megabanks/sony-fg` / `announcement_date` | `manufacturer-finance/sony-group-finance-arm.md:35` says `2025-10-01`; `megabanks/sony-fg.md:32` says `2025-09-29`. | Real issue plus label collision. | Sony public disclosures distinguish `2025-09-29` as the TSE Prime listing / relisting date, and `2025-10-01` as the partial spin-off effective / completion date. | `manufacturer-finance/sony-group-finance-arm.md` should split "relisting date" from "spin-off effective date" instead of saying `2025-10-01` is the relisting date. |
| F02 | `megabanks/sony-fg` / `announcement_date` | `manufacturer-finance/sony-group-finance-arm.md:35` says `2025-10-01`; `megabanks/sony-fg.md:72` says `2020-05-19`. | False positive. | `2020-05-19` is Sony Group's SFH TOB announcement; `2025-10-01` is partial spin-off effective / completion date. These are different events. | Same Sony wording pass: add explicit event labels so the audit does not bucket both as generic `announcement`. |
| F03 | `megabanks/sony-fg` / `announcement_date` | `manufacturer-finance/sony-group-finance-arm.md:35` says `2025-10-01`; `megabanks/sony-fg.md:74` says `2024-05-22`. | False positive. | `2024-05-22` is the financial-services partial-spin-off / relisting announcement; `2025-10-01` is the spin-off effective date. | Same Sony wording pass: label `2024-05-22` as announcement date and `2025-10-01` as effective date. |
| F04 | `megabanks/sony-fg` / `announcement_date` | `manufacturer-finance/sony-group-finance-arm.md:35` says `2025-10-01`; `megabanks/sony-fg.md:121` says `2024-05-22`. | False positive. | This is a source-list / note reference to the 2024-05-22 announcement, not a competing 2025 date. | Same Sony wording pass; no value change needed for `megabanks/sony-fg.md:121`. |
| F05 | `megabanks/sony-fg` / `announcement_date` | `manufacturer-finance/sony-group-finance-arm.md:124` says `2025-10-01`; `megabanks/sony-fg.md:32` says `2025-09-29`. | Real issue plus label collision. | `manufacturer-finance/sony-group-finance-arm.md:124` still describes `2025-10-01` as `relisting date`; correct wording should say relisting was `2025-09-29`, while partial spin-off effective date was `2025-10-01`. | `manufacturer-finance/sony-group-finance-arm.md:124`. |
| F06 | `megabanks/sony-fg` / `announcement_date` | `manufacturer-finance/sony-group-finance-arm.md:124` says `2025-10-01`; `megabanks/sony-fg.md:72` says `2020-05-19`. | False positive. | Different events: TOB announcement versus spin-off effective date. | Same Sony wording pass. |
| F07 | `megabanks/sony-fg` / `announcement_date` | `manufacturer-finance/sony-group-finance-arm.md:124` says `2025-10-01`; `megabanks/sony-fg.md:74` says `2024-05-22`. | False positive. | Different events: partial-spin-off announcement versus spin-off effective date. | Same Sony wording pass. |
| F08 | `megabanks/sony-fg` / `announcement_date` | `manufacturer-finance/sony-group-finance-arm.md:124` says `2025-10-01`; `megabanks/sony-fg.md:121` says `2024-05-22`. | False positive. | Different events: source-note announcement date versus spin-off effective date. | Same Sony wording pass. |
| F09 | `megabanks/sony-fg` / `delisting_date` | `manufacturer-finance/sony-group-finance-arm.md:44` says `2020-09-29`; `megabanks/sony-fg.md:38` includes `2007-10-11`. | False positive. | `2007-10-11` is the original SFH listing date; `2020-09-29` is the delisting / full-subsidiary event. | `megabanks/sony-fg.md:38` should split the dense listing / delisting / relisting sequence into labelled facts. |
| F10 | `megabanks/sony-fg` / `delisting_date` | `manufacturer-finance/sony-group-finance-arm.md:44` says `2020-09-29`; `megabanks/sony-fg.md:38` includes `2025-09-29`. | False positive. | `2025-09-29` is relisting, not delisting. `2020-09-29` is the delisting / full-subsidiary date. | Same split-label fix in `megabanks/sony-fg.md:38`. |
| F11 | `megabanks/sony-fg` / `delisting_date` | `manufacturer-finance/sony-group-finance-arm.md:44` says `2020-09-29`; `megabanks/sony-fg.md:38` includes `2025-10-01`. | False positive. | `2025-10-01` is partial spin-off effective date, not delisting. | Same split-label fix in `megabanks/sony-fg.md:38`. |
| F12 | `regional-banks/daiwa-next-bank` / `announcement_date` | `banking/daiwa-next-bank.md:36` says `2026-03-31`; `regional-banks/daiwa-next-bank.md:27` says `2026-04-27`. | False positive. | `2026-03-31` is the as-of date for deposit/account figures; `2026-04-27` is the ORIX Bank acquisition announcement / agreement date. | `banking/daiwa-next-bank.md:36` should split the as-of balance data from the ORIX acquisition announcement sentence. |
| F13 | `regional-banks/daiwa-next-bank` / `announcement_date` | `banking/daiwa-next-bank.md:36` says `2026-03-31`; `regional-banks/daiwa-next-bank.md:37` says `2026-04-27`. | False positive. | Same as F12. | Same as F12. |
| F14 | `regional-banks/yucho` / `established_date` | `regional-banks/japan-post-bank.md:73` says `2003-04-01`; `regional-banks/yucho.md:35` says `2006-09-01`. | False positive. | `2003-04-01` is Japan Post public corporation establishment; `2006-09-01` is Japan Post Bank / Yucho Co., Ltd. establishment. | `regional-banks/japan-post-bank.md:73` should label the row as public-corporation predecessor history, not bank establishment. |
| F15 | `regional-banks/yucho` / `established_date` | `regional-banks/japan-post-bank.md:73` says `2003-04-01`; `regional-banks/yucho.md:68` says `2006-09-01`. | False positive. | Same as F14. | Same as F14. |

### Batch A Fix Instructions

1. Sony fix packet:
   - In `manufacturer-finance/sony-group-finance-arm.md`, replace the two stale / ambiguous relisting statements that call `2025-10-01` the relisting date.
   - Use two labels: `TSE Prime relisting date: 2025-09-29` and `partial spin-off effective / completion date: 2025-10-01`.
   - In `megabanks/sony-fg.md:38`, split the dense sequence into labelled facts: original listing `2007-10-11`, delisting / full subsidiary `2020-09-29`, relisting `2025-09-29`, spin-off effective `2025-10-01`.
   - Candidate public sources: Sony Group partial-spin-off portal and SMBC Nikko notice already cited in the page.
2. Daiwa Next Bank wording packet:
   - In `banking/daiwa-next-bank.md:36`, keep `2026-03-31` only as the deposit/account as-of date.
   - Keep `2026-04-27` only as the ORIX Bank acquisition announcement / agreement date.
   - Candidate public source: ORIX 2026-04-27 share-transfer announcement and Daiwa Next Bank / Daiwa Securities Group announcement already cited by the entity page.
3. Japan Post Bank wording packet:
   - In `regional-banks/japan-post-bank.md:73`, label `2003-04-01` as `Japan Post public corporation predecessor established`.
   - Keep `2006-09-01` as Japan Post Bank / Yucho Co., Ltd. establishment.
   - Candidate public sources: Japan Post Bank official profile and history pages listed above.

## Batch B - Provenance Needs-Review Triage

### Summary

The 13 provenance rows are mostly real line-level provenance gaps: they sit in fact-dense table rows or matrix rows with dates, status, registration, ownership, or numerical claims but no nearby marker. One row is likely an audit false-positive because the target line is a related-link row rather than a factual claim row.

| Result | Count | Notes |
|---|---:|---|
| Real provenance gap | 12 | Add row-level marker or sourced table caption / lead sentence. |
| Likely audit false-positive | 1 | Tokyo Hash line should be handled by audit calibration or ignored if it is only a related-link row in the checked snapshot. |

### Provenance Rows

| ID | Audit row | Triage | Source to add / candidate source | Follow-up instruction |
|---|---|---|---|---|
| P01 | `banking/sony-bank.md:45` | Real provenance gap. The row combines ownership, 2020 TOB, 2025 relisting, partial spin-off distribution, and retained Sony stake. | Sony Group partial-spin-off portal: https://www.sony.com/en/SonyInfo/IR/library/SFG_pso/ ; Sony Bank company page: https://moneykit.net/visitor/co/ ; FSA bank list: https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx | Add a marker to the `Ultimate parent` row or add a sourced table lead sentence covering ownership / spin-off status. |
| P02 | `exchanges/fsa-snapshot-delta-log.md:77` | Real provenance gap. The paragraph asserts FSA and JVCEA list divergence patterns. | FSA crypto-asset exchange operator list: https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx ; JVCEA members: https://jvcea.or.jp/member/ | Add a sourced lead sentence before the FSA/JVCEA reconciliation bullets. |
| P03 | `exchanges/fsa-snapshot-delta-log.md:78` | Real provenance gap. The bullet defines the `FSA registered + JVCEA member` standard case. | Same as P02. | Cover this bullet with the same lead marker or add a row marker. |
| P04 | `exchanges/fsa-snapshot-delta-log.md:79` | Real provenance gap. The bullet defines exceptional membership / cancellation states. | Same as P02 plus archived FSA snapshots already in frontmatter. | Cover this bullet with the same lead marker or add a row marker. |
| P05 | `exchanges/jp-exchange-dmm-com-securities.md:101` | Real provenance gap. The row ties DMM.com Securities to the separate DMM Bitcoin incident and needs source separation because the entity is not the same company. | NPA notice on DMM Bitcoin theft: https://www.npa.go.jp/bureau/cyber/koho/caution/caution20241224.html ; SBI VC Trade transfer notice: https://www.sbivc.co.jp/newsview/1zkj8mf5x3y ; existing DMM.com Securities and FSA/JVCEA sources for entity separation. | Add a marker to the DMM Bitcoin incident row and clarify it is a related group company, not DMM.com Securities itself. |
| P06 | `exchanges/jp-exchange-tokyo-hash.md:83` | Likely audit false-positive if the checked line is a related-link row; if mapped to the timeline table, it is a real row-level source gap for HashKey's Hong Kong SFC approval. | If timeline row: HashKey Group approval-in-principle announcement: https://group.hashkey.com/en/newsroom/hashkey-secures-hong-kong-sfc-approval-in-principle-licensed-virtual-asset-trading-platform ; Tokyo Hash company/product pages already in frontmatter. | First verify the exact line after any line-ending normalization. If it is the timeline row, add a marker. If it is only a Related link bullet, no corpus fix is needed; treat as audit calibration. |
| P07 | `fintech/global-stablecoin-regulatory-five-pole-matrix.md:46` | Real provenance gap. The HK stablecoin row includes ordinance, regulator, in-force date, first-license date, and transition bridge. | HKMA stablecoin issuer regime: https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/stablecoin-issuers/ ; HKMA press releases page already cited in frontmatter. | Add a marker to the HK row or a sourced caption for the five-pole matrix. Recheck `first licenses 2026-05-21`, because the HKMA regime page is authoritative for licensing status. |
| P08 | `payments/japan-jcb-issuer-ecosystem-positioning-matrix.md:107` | Real provenance gap. MUFG NICOS row includes ownership, card scale, network roles, and JCB relationship. | METI registered-operator portal: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html ; METI comprehensive credit-purchase list: https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf ; JCB brand page: https://www.global.jcb/ja/about-us/business-area/brand/ | Add a marker to the row or a sourced caption for the issuer matrix, plus issuer-specific source if the cardholder scale remains. |
| P09 | `payments/japan-jcb-issuer-ecosystem-positioning-matrix.md:108` | Real provenance gap. SMBC Card row includes ownership, Visa-leading status, acquirer footprint, and JCB relationship. | Same matrix-level sources as P08; add SMBC Card corporate / disclosure source if the row keeps scale or issuer ranking language. | Add a marker to the row or source the row through matrix caption plus issuer-specific source. |
| P10 | `payments/japan-jcb-issuer-ecosystem-positioning-matrix.md:117` | Real provenance gap. ANA JCB co-brand row includes issuer-backend, card scale, and 3-party / 4-party interpretation. | JCB brand / issuer sources above; ANA card product pages or issuer disclosure should be added if scale claims remain. | Add marker or reduce unsupported scale wording if no public source is available. |
| P11 | `payments/japan-jcb-issuer-ecosystem-positioning-matrix.md:118` | Real provenance gap. JAL JCB co-brand row includes issuer-backend, card scale, and 3-party / 4-party interpretation. | JCB brand / issuer sources above; JAL Card product/corporate source should be added if scale claims remain. | Add marker or reduce unsupported scale wording if no public source is available. |
| P12 | `regional-banks/okinawa-fg.md:124` | Real provenance gap. The row / bullet states revised mid-term targets, including operating revenue `710`, net income `110`, and ROE around `6.20%`. | Okinawa FG medium-term plan PDF: https://www.okinawafg.co.jp/_themes/assets/file/mediumterm_management_plan/Medium-term_management_plan202404.pdf ; 2025 target-revision disclosure candidate: https://www.fse.or.jp/files/lis_tkj/25050973504.pdf | Add a marker to the revised-target bullet block. Prefer official disclosure over press summary for the final values. |
| P13 | `securities/odx-start-stb-secondary-market.md:158` | Real provenance gap. The FSA row combines Type I FIBO / PTS authorization and the 2022-06-22 market-system working group report. | FSA financial instruments operator list: https://www.fsa.go.jp/menkyo/menkyoj/kinyushohin.xlsx ; FSA strategic priorities / working group reference: https://www.fsa.go.jp/en/news/2022/20220926/the_jfsa_strategic_priorities_july2022-june2023.pdf ; ODX START launch page: https://www.odx.co.jp/en/news/article/5s13s3n0vcms/ | Add row marker for FSA role, and optionally a JSDA marker on the next row if editing the same table. |

### Batch B Fix Instructions

1. Prefer row-level markers for single rows with many claims.
2. For consecutive rows sharing the same source set, a sourced table caption / lead sentence is acceptable if it clearly covers the rows.
3. Do not use source inventory alone as the fix. The audit is specifically flagging missing nearby markers.
4. For airline co-brand card rows, either add issuer / product sources or weaken unsupported scale wording such as `several million` if no public source can be found.
5. Re-run `bun tools/provenance_completeness_audit.ts --json` after the fix issue. Expected target for Round 1 is `needs_review=0` or documented residual false positives.

## Proposed Follow-up Issues

### Follow-up Issue A - Round-1 factual conflict fixes

Allowed corpus pages:

- `manufacturer-finance/sony-group-finance-arm.md`
- `megabanks/sony-fg.md`
- `banking/daiwa-next-bank.md`
- `regional-banks/japan-post-bank.md`

Acceptance:

- Sony relisting / spin-off dates are split into labelled facts.
- Daiwa Next Bank `2026-03-31` and `2026-04-27` are no longer extractable as the same announcement metric.
- Japan Post Bank `2003-04-01` is labelled as predecessor public-corporation history, not bank establishment.
- `bun tools/factual_consistency_audit.ts --json` returns no remaining `severity=conflict` rows for these same clusters, or any residual is documented as tool false-positive.

### Follow-up Issue B - Round-1 provenance marker fixes

Allowed corpus pages:

- `banking/sony-bank.md`
- `exchanges/fsa-snapshot-delta-log.md`
- `exchanges/jp-exchange-dmm-com-securities.md`
- `exchanges/jp-exchange-tokyo-hash.md`
- `fintech/global-stablecoin-regulatory-five-pole-matrix.md`
- `payments/japan-jcb-issuer-ecosystem-positioning-matrix.md`
- `regional-banks/okinawa-fg.md`
- `securities/odx-start-stb-secondary-market.md`

Acceptance:

- All real needs-review rows get nearby public-source markers or source-backed table lead text.
- `exchanges/jp-exchange-tokyo-hash.md:83` is either fixed if it maps to the timeline row or documented as a provenance-audit false-positive if it maps only to a Related link row.
- `bun tools/provenance_completeness_audit.ts --json` returns `needs_review=0`, or any residual rows are explicitly listed as false positives.

## Validation For This Planning PR

- `bun run docs:audit`
- `git diff --check`
