---
title: "WAON: AEON Group nationwide IC prepaid e-money"
aliases:
  - "waon-prepaid-aeon"
  - "WAON 電子マネー"
  - "AEON WAON prepaid"
  - "ワオン 前払式支払手段"
  - "WAON POINT 連携"
domain: payments
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [payments, prepaid, electronic-money, retail-anchor, felica, waon, aeon, point-integration]
status: active
sources:
  - "https://www.waon.net/"
  - "https://www.aeon.co.jp/"
  - "https://www.aeon.co.jp/sustainability/society/aeoncard_pay/"
  - "https://www.aeonfinancial.co.jp/"
  - "https://www.aeonbank.co.jp/"
  - "https://www.fsa.go.jp/menkyo/menkyoj/daisan.xlsx"
  - "https://www.fsa.go.jp/policy/prepaid/"
  - "https://www.meti.go.jp/policy/mono_info_service/cashless/"
---

# WAON: AEON Group nationwide IC prepaid e-money

## Wiki route

This entry sits under [[payments/INDEX|payments index]] as the AEON-anchored prepaid issuer page that pairs with [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers registry]] for the FSA registry view and with [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]] for the head-to-head retail anchor comparison. Compare with [[payments/nanaco-prepaid-seven-i|nanaco]] (Seven & i counterpart), [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|transit-prepaid economics]] (FeliCa peer scheme), and [[payments/edy-rakuten-prepaid|Rakuten Edy]] (platform-agnostic FeliCa prepaid). Group anchors are [[retail/aeon-group|AEON Group]] and [[JapanFG/aeon-financial-service|AEON Financial Service]]; the group bank rail is [[JapanFG/aeon-bank|AEON Bank]]; loyalty integration routes to [[loyalty/japan-points-landscape|Japan points landscape]] for WAON POINT economics.

## TL;DR

**WAON** (named after the AEON-mascot "ワオン") is the **largest retail-anchored prepaid e-money brand in Japan by transaction count** and one of the two principal closed-loop retail prepaid systems alongside [[payments/nanaco-prepaid-seven-i|nanaco]]. Launched 2007-04 by AEON Co Ltd, WAON is operated within the AEON Group with [[JapanFG/aeon-financial-service|AEON Financial Service]] handling settlement and the issuer obligations as third-party 前払式支払手段 (prepaid payment instrument) under the [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act prepaid framework]]. The system runs on **FeliCa** contactless IC (same technology as Suica / nanaco / Edy), supports physical card, Mobile WAON via Osaifu Keitai, Apple Pay (limited devices), and the AEON Pay smartphone app. Acceptance spans the full AEON Group retail network (AEON, MaxValu, MiniStop, AEON Cinema, Welcia, etc.) plus ~1M outside-group merchants. **WAON POINT** integration converts loyalty points 1:1 into spendable balance, and the bundled **AEON Card** issuance / [[JapanFG/aeon-bank|AEON Bank]] auto-charge linkage anchors the wallet inside the AEON financial-services ecosystem.

## Issuer and operational structure

| Dimension | Reading |
|---|---|
| Brand owner | AEON Co Ltd |
| FSA prepaid issuer of record | AEON CO Ltd and [[JapanFG/aeon-financial-service\|AEON Financial Service]] subsidiaries appear in the FSA `daisan.xlsx` third-party prepaid registry |
| Settlement / financial services | [[JapanFG/aeon-financial-service\|AEON Financial Service]] group |
| Group bank rail | [[JapanFG/aeon-bank\|AEON Bank]] (auto-charge, ATM charge, account linkage) |
| Group card rail | AEON Card (Visa / Mastercard / JCB co-brand with WAON IC embedded) |
| Launch year | 2007-04 |
| Technology | FeliCa contactless IC |
| Mobile rail | Mobile WAON (Osaifu Keitai), Apple Pay (iPhone 8+ with Japan-region SIM), AEON Pay app QR |
| Charge ceiling | ¥50,000 per card |
| Single charge max | ¥29,000 typical |

## Legal basis: 前払式支払手段 (third-party prepaid payment instrument)

WAON is registered as a **第三者型前払式支払手段** under the [[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]] Chapter 3 prepaid-instrument framework. Key regulatory consequences:

- Issuer must register with FSA (relevant local finance bureau) and appears in [[payments/prepaid-payment-instrument-issuers-japan-index|`daisan.xlsx`]].
- Half-yearly **unused-balance deposit** obligation: if outstanding balance > ¥10M, issuer must deposit half of unused balance with Legal Affairs Bureau (供託) as user-fund protection.
- **No refunding to original payer** except at issuance discontinuation — the no-refund rule is one of the principal economic differentiators from [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer instruments]].
- **Breakage** (unredeemed balance accruing to issuer over years) contributes to AEON Financial Service P&L on dormant / lost cards.
- 100% AML / KYC exemption below ¥100,000 balance thresholds (under existing PSA carve-outs).

The boundary with [[fintech/japan-stablecoin-regulatory-landscape|stablecoin / electronic-payment-instrument]] frameworks (EPI under 2023 PSA amendment) keeps WAON squarely in the prepaid lane — value cannot be transferred peer-to-peer in cash-equivalent form.

## Acceptance footprint

The acceptance network is structured in concentric circles:

| Tier | Description | Examples |
|---|---|---|
| Inner — AEON Group | Group retail and entertainment anchors | AEON Mall, AEON, MaxValu, MiniStop, AEON Cinema, Welcia (drug), KASUMI, Daiei |
| Middle — Group-aligned | Group bank / card-linked auto-charge points | [[JapanFG/aeon-bank\|AEON Bank]] ATMs, AEON Card linked partner stores |
| Outer — Cross-merchant | Non-group merchants accepting WAON tap | McDonald's (historic), Yoshinoya, drugstore chains, gas stations |
| Mobile rail | Apple Pay / Osaifu Keitai global-merchant FeliCa terminals | Any FeliCa-accepting POS |

The size of the inner-tier network (over 20,000 AEON Group stores) underwrites WAON's installed-base position even as code-payment ([[JapanFG/paypay|PayPay]], [[JapanFG/au-payment|au PAY]], 楽天ペイ, d払い) has captured marginal new-user growth.

## KPI snapshot

Quantitative KPIs are reported publicly by AEON in IR materials and 統合報告書 (integrated reports):

| Metric | Reading (most recent public disclosure) |
|---|---|
| Cumulative issued cards | Over 90M including Mobile WAON (AEON Group 2024 IR materials) |
| Annual transaction count | Largest retail-prepaid by tap count in Japan (top-3 cashless ranking) |
| Annual transaction value | Multi-trillion yen scale across AEON Group + outside-merchant footprint |
| Merchant acceptance points | Approximately 1M nationwide including AEON Group |
| WAON POINT issuance | Tied to ¥200 = 1 point at AEON-group stores (base rate) |

Exact period-on-period growth figures live in AEON Co Ltd disclosure and AEON Financial Service segment IR; the FinWiki entry does not duplicate quarterly numbers — see issuer IR for current quarterly KPIs.

## Strategy: closed-loop loyalty anchor

WAON's strategic role inside the AEON Group is **closed-loop loyalty + retail-anchored cashless** rather than open-merchant code-payment competition. The strategic logic:

1. **Group lock-in** — WAON balance is most economically used at AEON-group stores (best WAON POINT accrual rates, 5% off "お客さま感謝デー" 20th / 30th of month discounts).
2. **Financial-services cross-sell** — WAON usage feeds [[JapanFG/aeon-bank|AEON Bank]] account openings, [[JapanFG/aeon-financial-service|AEON Financial Service]] card issuance, AEON Insurance products.
3. **Brand differentiation vs nanaco** — WAON's mall / supermarket / drugstore footprint contrasts with nanaco's convenience-store-anchored scope; the head-to-head split is documented in [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco comparison]].
4. **Code-payment supplement, not substitute** — AEON Pay app provides QR-code interface for code-payment-preferring customers without abandoning the FeliCa-anchored installed base.
5. **Mobile-rail extension** — Apple Pay enablement (2016 onward) and Mobile WAON via Osaifu Keitai retain new-device customers who might otherwise default to code-payment apps.

The 2023-onward [[JapanFG/aeon-financial-service|AEON Financial Service]] consolidation of group payment / banking / card businesses repositioned WAON as the consumer-facing layer of an integrated retail-financial-services stack rather than a standalone prepaid product.

## Related

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/waon-nanaco-retail-prepaid-comparison]]
- [[payments/nanaco-prepaid-seven-i]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/edy-rakuten-prepaid]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[JapanFG/aeon-financial-service]]
- [[JapanFG/aeon-bank]]
- [[retail/aeon-group]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## Sources

- WAON official site (waon.net) — product, charge, and acceptance documentation.
- AEON Co Ltd corporate site — group structure and IR.
- AEON Financial Service corporate site — settlement / financial-services scope.
- AEON Bank corporate site — group bank rail and auto-charge linkage.
- FSA, `daisan.xlsx` — third-party prepaid-instrument issuer registration list.
- FSA prepaid payment instruments policy page.
- METI cashless policy page — cashless-ratio and operator landscape context.
