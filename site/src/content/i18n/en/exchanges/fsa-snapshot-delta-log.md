---
source: exchanges/fsa-snapshot-delta-log
source_hash: feb870ac46a112c3
lang: en
status: machine
fidelity: ok
title: "FSA crypto operator registry — snapshot delta log"
translated_at: 2026-07-29T11:02:23.000Z
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

## Comparison of saved registry snapshots

Source: The entire table was counted and compared from the rows in the FSA `kasoutuka.xlsx` [2024-08-20 archive](https://web.archive.org/web/20240820011719/https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx), [2025-02-06 archive](https://web.archive.org/web/20250206070223/https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx), and [2025-09-07 archive](https://web.archive.org/web/20250907103139/https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx), checked on 2026-07-29.

| Archive timestamp | Registered operators | Entries visible in the archived file |
|---|---|---|
| 2024-08-20 | 29 | FTX Japan is listed |
| 2025-02-06 | 29 | DMM Bitcoin (No. 00010) and CoinBest are listed |
| 2025-09-07 | 28 | No. 00010 is absent and OSL Japan is listed |

This table shows only differences visible in the archived files themselves. It does not infer the effective date or reason for a change unless another primary notice establishes it.

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
