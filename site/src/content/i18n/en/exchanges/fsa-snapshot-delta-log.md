---
source: exchanges/fsa-snapshot-delta-log
source_hash: 59a89034df2d8c2a
lang: en
status: machine
fidelity: ok
title: "FSA crypto operator registry — snapshot delta log"
translated_at: 2026-06-18T23:33:48.301Z
---

# FSA crypto operator registry — snapshot delta log

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度]] for the registration framework, [[exchanges/jp-vasp-ma-consolidation-history|JP VASP M&A 史]] for entity consolidation context, and [[exchanges/fsa-foreign-exchange-warning-system|FSA 海外無登録警告書制度]] for the unregistered foreign-operator side.

## Purpose

The FSA "Registry of Crypto Asset Exchange Service Providers" (`kasoutuka.xlsx`) and the JVCEA member list are a **continuously changing primary registry**, with new registrations, business closures, corporate-name changes, registration-number reassignments, etc. This page functions as a template / log for recording those deltas chronologically.

Individual VASP entity pages ([[exchanges/jp-exchange-bitbank|bitbank]] / [[exchanges/jp-exchange-line-xenesis|LINE Xenesis]], etc.) record point-in-time snapshots, but the overview of **"what changed when"** is consolidated on this page.

## Recording template (per snapshot)

At each FSA publication update, append the following block:

```
## YYYY-MM-DD snapshot delta

- **Base snapshot**: FSA kasoutuka.xlsx dated Reiwa X, Month Y, Day Z
- **Total number of registered operators**: NN (previously MM, delta ±N)
- **New registrations**:
  - Kanto Local Finance Bureau No. NNNNN — XX Co., Ltd. (registered YYYY-MM-DD)
- **Business closures / deregistration**:
  - Kanto Local Finance Bureau No. NNNNN — XX Co., Ltd. (closed YYYY-MM-DD)
- **Corporate-name changes**:
  - Kanto Local Finance Bureau No. NNNNN — old AA Co., Ltd. → new BB Co., Ltd. (YYYY-MM-DD)
- **Absorption mergers**:
  - AA Co., Ltd. → absorbed into BB Co., Ltd. (YYYY-MM-DD)
- **Head-office location changes** (important cases only):
  - XX Co., Ltd. — old Minato-ku, Tokyo → new Chuo-ku, Tokyo (YYYY-MM-DD)
- **JVCEA member-status changes**:
  - Type I → Type I + Type II (acquired crypto-asset derivatives trading business)
- **Impact on this page's entities**:
  - [[exchanges/jp-exchange-XXX]] — last_tended update required
- **Industry topics**:
  - (notable items: institutional changes / large M&A / major new entrants, etc.)
```

## Known major snapshot change history (past 2  years)

| Snapshot point | Major changes | Reference entity wiki |
|---|---|---|
| 令和6年4月1日 (2024-04-01) | FTX Japan (formerly QUOINE) was at that point still registered under the name "FTX Japan" (the 100% customer-asset return was completed 2023-02 ). **The old description "bitbank absorption completed" is incorrect** — it was not bitbank but bitFlyer Holdings that acquired FTX Japan (made a wholly-owned subsidiary 2024-07, renamed to Custodiem 2024-08; see the 2024-10-01 row below). The other comprehensive deltas of this snapshot are difficult to reconstruct from public primary sources. | [[exchanges/ftx-japan-100pct-return-case-study]] / [[exchanges/jp-exchange-custodiem]] |
| 令和6年10月1日 (2024-10-01) | **Corporate-name change**: FTX Japan Co., Ltd. → Custodiem, Inc. (announced 2024-07-26 in connection with becoming a wholly-owned subsidiary of bitFlyer HD; the name change took effect in the summer of 2024 年). The total number of registered operators was flat at 29 社 (the Wayback FSA xlsx dated 2024-08-20 carries "FTX Japan"; in the one dated 2025-01-15 it is gone = renamed to Custodiem). Note that DMM Bitcoin's intention to close was announced 2024-12-01, but at this point deregistration was not yet reflected. 〔Sources: Custodiem name-change notice / FSA xlsx Wayback 2024-08-20〕 | [[exchanges/jp-exchange-custodiem]] |
| 令和7年4月1日 (2025-04-01) | **Deregistration (business closure)**: DMM Bitcoin Co., Ltd. (Director-General of the Kanto Local Finance Bureau 第00010号, registered 平成29年12月1日) — following the outflow of about 482億円 BTC in 2024-05 , it transferred accounts and custodied assets to SBI VC Trade on 2025-03-08 and ended its service, and was deregistered. **Corporate-name change**: CoinBest Co., Ltd. → OSL Japan Co., Ltd. (under the Hong-Kong-listed OSL Group umbrella, renamed 2025-02 ; the registration number and corporate number 3010001185935  were carried over). Total number of registered operators 29  → 28 社 (28 社 confirmed in the FSA list dated 令和7年6月30日). Consistent with the FSA xlsx diff between the one dated 2025-02-06 (carrying 29社 / 第00010号) → the one dated 2025-09-07 (with 28社 / 第00010号 gone). 〔Sources: ITmedia / SBI HD transfer release / DMM Bitcoin Wikipedia (第00010号) / Akasaka Keizai Shimbun (OSL renaming) / FSA xlsx Wayback 2025-02-06・2025-09-07〕 | [[exchanges/jp-exchange-dmm-bitcoin]] / [[exchanges/jp-exchange-sbi-vc-trade]] |
| 令和7年10月1日 (2025-10-01) | New registrations / business closures at that point could not be identified from public primary sources (because the FSA does not permanently publish past versions of the list, a strict diff is difficult to reconstruct). The total number of registered operators was **flat at 28 社** (consistent with the public description "28  operators as of the end of 2025 年 10 月" and with 28 社 dated 令和7年6月30日). No public reports of notable new entrants or business closures were confirmed. 〔Source: FSA xlsx Wayback 2025-09-07 (28社)〕 | — |
| **令和8年4月1日 (2026-04-01)** | Latest snapshot baseline (citation source for [[exchanges/jp-exchange-bitbank]] / [[exchanges/jp-exchange-line-xenesis]] etc.) | See individual pages |
| 令和8年10月1日 (2026-10-01) planned | **LINE Xenesis business closure to be reflected** (2026-06-01 service termination) | [[exchanges/jp-exchange-line-xenesis]] |

## Update workflow

1. **Confirm FSA publication** — directly download the update to `kasoutuka.xlsx` (usually on a semiannual basis: 4 month / 10 month, with ad-hoc updates)
2. **Diff against the previous snapshot** — mechanically compare the registration-number column / corporate-name column / head-office-location column
3. **Append a snapshot delta block to this page**
4. **Update `last_tended` of affected entity wikis**
5. **If a newly registered operator's wiki is not yet prepared** → list it as an addition candidate in [[financial-regulators/missing-financial-institutions-backlog|missing-financial-institutions-backlog]]
6. **For a closed operator's entity wiki** → change to `status: deprecated` and append the closure date
7. **Reflect in the CHANGELOG** (record the snapshot reflection date in the domain INDEX)

## Reconciliation with the JVCEA member list

There are cases where FSA-registered operators and JVCEA members **do not perfectly match** (immediately after registration while the JVCEA-membership procedure is in progress / cases of membership refusal, etc.). This log also notes the deltas:

- **FSA-registered + JVCEA member**: the standard form
- **FSA-registered + not a JVCEA member**: requires watching (a non-self-regulatory-membership status is unusual)
- **FSA-deregistered + JVCEA-remaining**: a typical business-closure-lag pattern

## Related

- [[exchanges/INDEX]] — exchanges domain INDEX
- [[exchanges/fsa-vasp-registration-system]] — registration system / numbering scheme
- [[exchanges/jp-vasp-regulatory-timeline]] — regulatory timeline
- [[exchanges/jp-vasp-ma-consolidation-history]] — JP VASP M&A history
- [[exchanges/jp-vasp-parent-company-map]] — parent-company map
- [[exchanges/fsa-foreign-exchange-warning-system]] — foreign unregistered-operator warning-letter system (supplementary information)
- [[exchanges/jvcea-spot-volume-statistics-analysis]] — JVCEA spot statistics

## Sources

- [FSA Registry of Crypto Asset Exchange Service Providers Excel](https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx) — primary source (only the current version is published) (accessed 2026-05-30)
- [JVCEA member list](https://jvcea.or.jp/member/) — self-regulatory-side reconciliation source (accessed 2026-05-30)
- [FSA crypto-asset-related public notices / administrative-action publication page](https://www.fsa.go.jp/) — source for the business-closure / administrative-action side (accessed 2026-05-30)
- [FSA kasoutuka.xlsx Wayback 2024-08-20](https://web.archive.org/web/20240820011719/https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx) — total number of operators 29, carries "FTX Japan". The pre-renaming snapshot of the 2024-10-01 row (accessed 2026-05-30)
- [FSA kasoutuka.xlsx Wayback 2025-02-06](https://web.archive.org/web/20250206070223/https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx) — total number of operators 29, carries 第00010号 (DMM Bitcoin) / CoinBest. The pre-baseline snapshot of the 2025-04-01 diff (accessed 2026-05-30)
- [FSA kasoutuka.xlsx Wayback 2025-09-07](https://web.archive.org/web/20250907103139/https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx) — total number of operators 28, with 第00010号 gone / carries OSL Japan. Reflects the DMM Bitcoin deletion and the CoinBest→OSL renaming (accessed 2026-05-30)
- [Custodiem "Notice Regarding the Corporate-Name Change of FTX Japan Co., Ltd."](https://support.custodiem.com/hc/ja/articles/29710664413709-FTX-Japan-%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%81%AE%E5%95%86%E5%8F%B7%E5%A4%89%E6%9B%B4%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B) — FTX Japan→Custodiem renaming (became a wholly-owned subsidiary of bitFlyer HD, announced 2024-07-26) (accessed 2026-05-30; the body text obtained via a search snippet)
- [Akasaka Keizai Shimbun "CoinBest, under the OSL Group Limited umbrella, changes its corporate name to 'OSL Japan Co., Ltd.'"](https://akasaka.keizai.biz/release/377391/) — CoinBest→OSL Japan renaming (2025-02) (accessed 2026-05-30)
- [ITmedia NEWS "'DMM Bitcoin' to close"](https://www.itmedia.co.jp/news/articles/2412/02/news093.html) — DMM Bitcoin's intention to close announced 2024-12-01, assets transferred to SBI VC Trade (accessed 2026-05-30)
- [SBI HD news release (DMM Bitcoin transfer, 14  tokens handling started)](https://www.sbigroup.co.jp/news/2025/0226_15274.html) — account / asset transfer to SBI VC Trade (2025-03) (accessed 2026-05-30)
- [DMM Bitcoin — Wikipedia](https://ja.wikipedia.org/wiki/DMM_Bitcoin) — Director-General of the Kanto Local Finance Bureau 第00010号 (registered 平成29年12月1日), 2025-03-08 service termination (accessed 2026-05-30)

---

> [!info] 校核状态
> confidence: **likely** (v1.0  template page, newly created 2026-05-25). This page is a log-type wiki that is continuously appended and updated, and the authenticity of the diff should be confirmed against FSA primary sources whenever each snapshot delta block is added. The template structure itself is suited to stable operation.
