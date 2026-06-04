---
source: exchanges/fsa-snapshot-delta-log
source_hash: ee8dd412b6b9e3a3
lang: en
status: machine
fidelity: ok
title: "FSA crypto operator registry — snapshot delta log"
translated_at: 2026-05-31T03:19:56.410Z
---

# FSA crypto operator registry — snapshot delta log

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度]] for the registration framework, [[exchanges/jp-vasp-ma-consolidation-history|JP VASP M&A 史]] for entity consolidation context, and [[exchanges/fsa-foreign-exchange-warning-system|FSA 海外無登録警告書制度]] for the unregistered foreign-operator side.

## Purpose

The FSA "Crypto-Asset Exchange Service Provider Registration List" (`kasoutuka.xlsx`) and the JVCEA member list are a **continuously changing primary registry**, with new registrations, withdrawals, name changes, registration-number reassignments, and the like. This page functions as a template / log for recording those deltas in chronological order.

Individual VASP entity pages (such as [[exchanges/jp-exchange-bitbank|bitbank]] / [[exchanges/jp-exchange-line-xenesis|LINE Xenesis]]) record point-in-time snapshots, but the overview of **"what changed and when"** is consolidated on this page.

## Recording template (per snapshot)

At each FSA-disclosure update, append the following block:

```
## YYYY-MM-DD snapshot delta

- **Base snapshot**: FSA kasoutuka.xlsx dated Reiwa Year X, Month Y, Day Z
- **Total registered firms**: NN firms (previous MM firms, delta ±N)
- **New registrations**:
  - Kanto Local Finance Bureau No. NNNNN — 〇〇 Co., Ltd. (registered YYYY-MM-DD)
- **Withdrawals / registration cancellations**:
  - Kanto Local Finance Bureau No. NNNNN — 〇〇 Co., Ltd. (withdrew YYYY-MM-DD)
- **Name changes**:
  - Kanto Local Finance Bureau No. NNNNN — old △△ Co., Ltd. → new □□ Co., Ltd. (YYYY-MM-DD)
- **Absorption mergers**:
  - △△ Co., Ltd. → absorbed into □□ Co., Ltd. (YYYY-MM-DD)
- **Head-office-location changes** (important cases only):
  - 〇〇 Co., Ltd. — old ××-to Minato-ku → new ××-to Chuo-ku (YYYY-MM-DD)
- **JVCEA member-status changes**:
  - Type I → Type I + Type II (crypto-asset derivatives business acquired)
- **Entity-page impact on this page**:
  - [[exchanges/jp-exchange-XXX]] — last_tended update required
- **Industry topics**:
  - (notable items: regulatory changes, major M&A, major new entrants, etc.)
```

## Known major snapshot-change history (past 2 years)

| Snapshot point | Major change | Reference entity wiki |
|---|---|---|
| 令和6年4月1日（2024-04-01） | FTX Japan (formerly QUOINE) remained registered under the "FTX Japan" name at this point (customer-asset 100% return completed 2023-02 ). **The old note "bitbank absorption completed" is incorrect** — it was not bitbank but bitFlyer Holdings that acquired FTX Japan (made it a wholly-owned subsidiary 2024-07, renamed to Custodiem 2024-08; see the 2024-10-01 row below). A comprehensive delta for the rest of this snapshot is difficult to reconstruct from public primary sources. | [[exchanges/ftx-japan-100pct-return-case-study]] / [[exchanges/jp-exchange-custodiem]] |
| 令和6年10月1日（2024-10-01） | **Name change**: FTX Japan Co., Ltd. → Custodiem, Inc. (disclosed 2024-07-26 in connection with becoming a wholly-owned subsidiary of bitFlyer HD; the trade-name change took effect in summer 2024 年). Total registered firms flat at 29 社 (the Wayback FSA xlsx dated 2024-08-20 lists "FTX Japan"; the one dated 2025-01-15 shows it gone = renamed to Custodiem). Note that DMM Bitcoin's intention to withdraw was disclosed 2024-12-01, but at this point the registration cancellation was not yet reflected. [Source: Custodiem trade-name-change notice / FSA xlsx Wayback 2024-08-20] | [[exchanges/jp-exchange-custodiem]] |
| 令和7年4月1日（2025-04-01） | **Registration cancellation (withdrawal)**: DMM Bitcoin Co., Ltd. (Director-General of Kanto Local Finance Bureau 第00010号, registered 平成29年12月1日) — following the 2024-05 outflow of approximately 482億円 BTC, on 2025-03-08 it transferred accounts and custodied assets to SBI VC Trade and ended its service, with registration cancelled. **Name change**: CoinBest Co., Ltd. → OSL Japan Co., Ltd. (under the Hong Kong-listed OSL Group, renamed 2025-02 . The registration number and corporate number 3010001185935 were succeeded). Total registered firms 29 → 28 社 (28 社confirmed in the FSA list dated 令和7年6月30日). Consistent with the FSA xlsx diff: dated 2025-02-06 (29社・第00010号 listed) → dated 2025-09-07 (28社・第00010号 gone). [Source: ITmedia / SBI HD transfer release / DMM Bitcoin Wikipedia (第00010号) / Akasaka Keizai Shimbun (OSL rename) / FSA xlsx Wayback 2025-02-06・2025-09-07] | [[exchanges/jp-exchange-dmm-bitcoin]] / [[exchanges/jp-exchange-sbi-vc-trade]] |
| 令和7年10月1日（2025-10-01） | New registrations / withdrawals at this point could not be identified from public primary sources (since the FSA does not permanently publish past versions of the list, a strict diff is hard to reconstruct). Total registered firms are **flat at 28 社** (consistent with the public description "28  firms as of end-2025 年 10 月" and with 28 社 dated 令和7年6月30日). No notable new entrants or withdrawals were confirmed in public reporting. [Source: FSA xlsx Wayback 2025-09-07 (28社)] | — |
| **令和8年4月1日（2026-04-01）** | Latest snapshot baseline (cited by [[exchanges/jp-exchange-bitbank]] / [[exchanges/jp-exchange-line-xenesis]] etc.) | See individual pages |
| 令和8年10月1日（2026-10-01）planned | **LINE Xenesis withdrawal to be reflected** (2026-06-01 service termination) | [[exchanges/jp-exchange-line-xenesis]] |

## Update workflow

1. **Confirm FSA disclosure** — directly download the update of `kasoutuka.xlsx` (normally on a semi-annual basis: 4月/10月, with ad-hoc updates)
2. **Diff against the previous snapshot** — mechanically compare the registration-number column / trade-name column / head-office-location column
3. **Append a snapshot delta block to this page**
4. **Update `last_tended` for affected entity wikis**
5. **If a newly registered firm has no wiki yet** → list it as a candidate to add under [[financial-regulators/missing-financial-institutions-backlog|missing-financial-institutions-backlog]]
6. **For a withdrawn firm's entity wiki** → change to `status: deprecated` and append the withdrawal date
7. **Reflect in CHANGELOG** (record the snapshot-reflection date in the domain INDEX)

## Reconciliation with the JVCEA member list

There are cases where FSA-registered firms and JVCEA member firms **do not perfectly match** (in the JVCEA-admission process just after registration / admission-refusal cases, etc.). This log also notes the differences:

- **FSA-registered + JVCEA-admitted**: the standard form
- **FSA-registered + not JVCEA-admitted**: requires watching (a self-regulatory non-admission status is unusual)
- **FSA-registration-cancelled + still in JVCEA**: a typical withdrawal-lag pattern

## Related

- [[exchanges/INDEX]] — exchanges domain INDEX
- [[exchanges/fsa-vasp-registration-system]] — registration system / number scheme
- [[exchanges/jp-vasp-regulatory-timeline]] — regulatory timeline
- [[exchanges/jp-vasp-ma-consolidation-history]] — JP VASP M&A history
- [[exchanges/jp-vasp-parent-company-map]] — parent-company map
- [[exchanges/fsa-foreign-exchange-warning-system]] — overseas unregistered-warning-letter system (supplementary information)
- [[exchanges/jvcea-spot-volume-statistics-analysis]] — JVCEA spot statistics

## Sources

- [FSA Crypto-Asset Exchange Service Provider Registration List (Excel)](https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx) — primary source (only the current version is published) (accessed 2026-05-30)
- [JVCEA member list](https://jvcea.or.jp/member/) — self-regulatory-side reconciliation source (accessed 2026-05-30)
- [FSA crypto-asset notices / administrative-action disclosure page](https://www.fsa.go.jp/) — withdrawal / administrative-action-side source (accessed 2026-05-30)
- [FSA kasoutuka.xlsx Wayback 2024-08-20](https://web.archive.org/web/20240820011719/https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx) — total firm count 29, "FTX Japan" listed. Pre-rename snapshot of the 2024-10-01 row (accessed 2026-05-30)
- [FSA kasoutuka.xlsx Wayback 2025-02-06](https://web.archive.org/web/20250206070223/https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx) — total firm count 29, 第00010号 (DMM Bitcoin) ・CoinBest listed. Pre-baseline snapshot of the 2025-04-01 diff (accessed 2026-05-30)
- [FSA kasoutuka.xlsx Wayback 2025-09-07](https://web.archive.org/web/20250907103139/https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx) — total firm count 28, 第00010号 gone ・OSL Japan listed. Reflects the DMM Bitcoin cancellation and the CoinBest→OSL rename (accessed 2026-05-30)
- [Custodiem "Notice regarding the trade-name change of FTX Japan Co., Ltd."](https://support.custodiem.com/hc/ja/articles/29710664413709-FTX-Japan-%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%81%AE%E5%95%86%E5%8F%B7%E5%A4%89%E6%9B%B4%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B) — FTX Japan→Custodiem rename (made a wholly-owned subsidiary of bitFlyer HD, disclosed 2024-07-26) (accessed 2026-05-30, body text obtained via search snippet)
- [Akasaka Keizai Shimbun "CoinBest, under OSL Group Limited, renames to 'OSL Japan Co., Ltd.'"](https://akasaka.keizai.biz/release/377391/) — CoinBest→OSL Japan rename (2025-02) (accessed 2026-05-30)
- [ITmedia NEWS "'DMM Bitcoin' to withdraw"](https://www.itmedia.co.jp/news/articles/2412/02/news093.html) — DMM Bitcoin withdrawal intention disclosed 2024-12-01, assets transferred to SBI VC Trade (accessed 2026-05-30)
- [SBI HD news release (DMM Bitcoin transfer, 14 -asset handling commenced)](https://www.sbigroup.co.jp/news/2025/0226_15274.html) — account / asset transfer to SBI VC Trade (2025-03) (accessed 2026-05-30)
- [DMM Bitcoin — Wikipedia](https://ja.wikipedia.org/wiki/DMM_Bitcoin) — Director-General of Kanto Local Finance Bureau 第00010号 (registered 平成29年12月1日), 2025-03-08 service termination (accessed 2026-05-30)

---

> [!info] Verification status
> confidence: **likely** (v1.0 template page, newly created 2026-05-25). This page is a log-type wiki that is continuously appended and updated; whenever a snapshot delta block is added, the authenticity of the diff should be confirmed against FSA primary sources. The template structure itself is suited to stable operation.
