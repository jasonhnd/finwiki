---
source: japanfg/boj
source_hash: f46b15b53cc2ac63
lang: en
status: machine
fidelity: ok
title: "Bank of Japan (BoJ)"
translated_at: 2026-05-31T11:13:44.931Z
---
# Bank of Japan (BoJ)

## Wiki route

This entry sits under [[JapanFG/INDEX|JapanFG index]]. Read it against [[JapanFG/fsa|金融庁]] for the regulatory counterpart, [[JapanFG/dic|預金保険機構]] for the safety-net peer, and [[JapanFG/boj-monetary-policy|BoJ 金融政策]] / [[JapanFG/boj-financial-markets-dept|BoJ 金融市場局]] for internal organs.

## TL;DR

**日本の中央銀行**（**1882-10-10 設立、JASDAQ 出資証券コード 8301**）。**1997 全面改正日本銀行法**で「金融政策決定の独立性」「物価安定使命」「業務透明性」が明文化。**4 大機能**: 通貨発行（日本銀行券）・金融政策（短期金利と長期金利の操作）・銀行の銀行（民間銀行口座開設・資金決済 = [[systems/bojnet|BoJ-NET]]）・政府の銀行（国庫金事務 + 国債発行・流通）。**政策委員会**（総裁 + 副総裁 2 名 + 審議委員 6 名 = 計 9 名）が金融政策を決定。2013-04 [[JapanFG/boj-monetary-policy|量的・質的金融緩和（QQE）]] → 2016 マイナス金利付き QQE → 2024-03 マイナス金利・YCC 撤廃 → 2024-07 利上げ開始 → **2024-2025 利上げサイクル**へ移行。長期保有国債残高は 2024 ピーク時 600 兆円超で世界最大級。

## 1. Legal basis/establishment

**Official name**: Bank of Japan
**English name**: Bank of Japan (BoJ)
**Legal basis**: **Bank of Japan Act** (平成 9 年 Law第 89 号, 1998-04-01 enforcement)
**Established**: **1882-10-10** (Meiji 15 )
**Head office**: Nihonbashihonkicho, Chuo-ku, Tokyo 2-1-1
**Business type**: Licensed corporation (similar to special corporation, JASDAQ listed investment securities 8301)
**Supervising**: Ministry of Finance (Personnel/Budget) + [[JapanFG/fsa|金融庁]] (Coordination)

### Investment structure

- Investment 1 億円 (Investment securities = similar to stocks but without voting rights)
- **Government investment 55%** + Private investment 45%
- JASDAQ investment securities code 8301 (buying and selling possible, but dividends capped, no voting rights)

### Important Chronology

| Month | Event |
|---|---|
| **1882-10-10** | **Establishment of the Bank of Japan** (Masayoshi Matsukata's financial restructuring/basement of the silver standard) |
| 1885 | Issuance of Bank of Japan notes (first bank notes) begins |
| 1897 | Transition to the gold standard |
| 1942 | Old Bank of Japan Law (strongly wartime control) |
| **1997-06** | **Enactment of the New Bank of Japan Act** (establishing independence of monetary policy) |
| **1998-04-01** | **Enforcement of the New Bank of Japan Act** (Policy Committee established, Inspection Bureau abolished) |
| 1999-02 | **Zero interest rate policy** (first) |
| **2001-03** | **Introduction of quantitative easing policy (QE)** (the world's first full-scale non-traditional monetary policy) |
| 2006-03 | QE cancellation → short-term interest rates 0.25% |
| 2008-09 | Lehman Shock → Emergency liquidity provision/purchase of corporate bonds, etc. |
| 2010-10 | Included Financial Easing (CME) Begins |
| **2013-04** | **Inauguration of Governor Haruhiko Kuroda → Start of quantitative and qualitative monetary easing (QQE)** (Doubling of monetary base 2 ) |
| 2014-10 | QQE Part 2  expansion |
| **2016-01** | **Introduction of QQE with negative interest rate** (Supplementary current account -0.1%) |
| **2016-09** | **Introduction of yield curve control (YCC)** (10  annual interest rate 0% degree guidance) |
| 2018-07 | YCC elasticity (10  annual interest rate fluctuation range ±0.2%) |
| 2021-03 | YCC fluctuation range ±0.25% |
| 2022-12 | YCC fluctuation range ±0.5% |
| **2023-04** | **Kazuo Ueda appointed as president** (Kuroda 10  system ended, first post-war economist president) |
| 2023-07 | YCC elasticity (upper limit 1.0% target) |
| **2024-03-19** | **Negative interest rate/YCC abolition → Short-term interest rate 0-0.1%** (17 first interest rate hike in years) |
| **2024-07-31** | **Raise to policy rate 0.25%** (additional rate hike) |

### 1) Currency issuance

- **Bank of Japan notes (banknotes)**: Exclusively issued by BoJ (coins are issued by the government)
- 2024-07-03 New banknotes issued (Eiichi Shibusawa / Umeko Tsuda / Shibasaburo Kitasato)
- Balance in circulation approximately 130 兆円 scale

### 2) Financial Policy (→ [[JapanFG/boj-monetary-policy|詳細]])

- **Price stability target 2%** (2013 Joint statement with the government)
- Policy tools: short-term interest rates + current account hierarchy + long-term government bond purchases + ETF/J-REIT purchases + lending support
- Policy Committee 9 名 (President + Vice President 2  + Deliberation Committee members 6) majority vote
- **Monetary Policy Meeting** (MPC) 8  times per year

### 3) bank of banks (→ [[JapanFG/boj-financial-system-dept|金融機構局]])

- Open a **Bank of Japan current account** with a private bank
- **[[systems/bojnet|BoJ-NET]]** (instant gross payment system) operation
- Lender of last resort
- Financial institution inspection/monitoring (division of labor/cooperation with [[JapanFG/fsa|金融庁]])

### 4) Government Bank

- Accounting and disbursing of national treasury funds (taxes + public bonds)
- **Issuance, distribution, and redemption of government bonds**
- Administrative agency for foreign exchange market intervention (as directed by the Minister of Finance)
- Foreign exchange reserve management agency

## 3. Organizational structure

```
President (5  year term, appointment agreed upon by both houses)
├── Vice President 2 名
├── Deliberation committee member 6 名 (economist, from industry and finance)
│ = Policy Committee 9 名 (financial policy decisions)
   │
├── [[JapanFG/boj-monetary-policy|企画局]] ── Financial Policy Planning・MPC Secretariat
├── [[JapanFG/boj-financial-markets-dept|金融市場局]] ─ Market operations/government bond buying and selling
├── [[JapanFG/boj-financial-system-dept|金融機構局]] ── Financial institution examination/monitoring
├── [[JapanFG/boj-payment-settlement-dept|決済機構局]] ── BoJ-NET / Payment system
├── [[JapanFG/boj-international-dept|国際局]] ── International Operations/G7/G20 Central Bank Cooperation
├── Research and Statistics Bureau ── Economic statistics, Tankan, and price analysis
├── Ticketing Bureau ── Manufacture and distribution management of banknotes
├── Business Bureau ── National Treasury Affairs
└── Policy Committee Office / Board of Auditors / Each branch (32  branch)
```

### Negative interest rate/YCC abolition (2024-03)

- 17 First real interest rate hike in years
- Confirmation of virtuous cycle in wages and prices → 2% Sustainable and stable achievement of price targets is in sight
- ETF / J-REIT buying and new rules buying stop

### QT (quantitative tightening) started

- Gradually reduce the amount of long-term government bond purchases (aimed to be around 2024-07  months 6 兆円 → 2025-1Q months 3 兆円)
- Normalization of BoJ balance sheet (peak 760 兆円) is a long-term issue
- Avoidance of market shocks in exit strategy is an issue

### Yen carry trade/exchange

- Narrowing of interest rate differential between Japan and the U.S. → Reassessment of exchange rates in favor of a stronger yen
- 2024-08 円 carry unwind → Nikkei average 4 万円 break → BoJ vice president's market stabilization statement
- Depending on the pace of interest rate hikes, it will affect exchange rates, government bond interest rates, and stocks.

### Digital Yen (CBDC)

- 2023-04  Pilot experiment started

## Related

- [[JapanFG/boj-monetary-policy|BoJ 金融政策]] · [[JapanFG/boj-financial-markets-dept|金融市場局]] · [[JapanFG/boj-financial-system-dept|金融機構局]] · [[JapanFG/boj-payment-settlement-dept|決済機構局]] · [[JapanFG/boj-international-dept|国際局]]
- [[JapanFG/fsa|金融庁]] · [[JapanFG/dic|預金保険機構]]
- [[systems/bojnet|BoJ-NET]] · [[systems/zengin|全銀システム]]
- [[JapanFG/mufg-bank|MUFG]] · [[JapanFG/smbc|SMBC]] · [[JapanFG/mizuho-bank|みずほ銀行]] · [[JapanFG/japan-post-bank|ゆうちょ銀行]]
- [[JapanFG/INDEX|JapanFG index]]

## Sources

- **Wikipedia: Bank of Japan** (https://ja.wikipedia.org/wiki/日本銀行, 2026-05-25 extract)
- **Bank of Japan official website** (see https://www.boj.or.jp/, 2026-05-25)
- **Bank of Japan Organizational Structure** (https://www.boj.or.jp/about/organization/index.htm, 2026-05-25 Reference)
- **Bank of Japan Act** (平成 9 年Law第 89 号)
- **Bank of Japan Monetary Policy Meeting Minutes** (publicly available, each meeting)

---

> [!info] School core status
