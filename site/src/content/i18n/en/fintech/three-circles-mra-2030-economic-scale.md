---
source: fintech/three-circles-mra-2030-economic-scale
source_hash: ac5ccf388c8944b0
lang: en
status: machine
fidelity: ok
title: "Three-currency MRA economic sizing · the $130B compliance circle vs $384B grey-circle coexistence model"
translated_at: 2026-06-18T23:59:13.102Z
---

# Three-currency MRA economic sizing · the $130B compliance circle vs $384B grey-circle coexistence model

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> The 2030  size forecast for the three-currency compliance circle (GENIUS + MiCA + EPI) is **$130B**, which is only 35-40% of the compliant stablecoin market. Over the same period, the USDT grey zone (annual flows of $384B across 7  countries) is **~3 × the compliance circle**. This is an economic-sizing model in which "the white circle and the grey circle coexist over the long term" —— compliance creates value, but the grey zone does not disappear because of it. The three currencies do not "replace USDT"; structurally, they split retail / grey-zone and institutional / compliance into 2  mutually non-communicating markets.

## Key facts

- Three-currency 2030  forecast = US-dollar circle $80B (USDC/USDB/PYUSD/RLUSD) + euro circle $15B (EURC/EURCV/EURB) + yen circle $35B (JPYC/Progmat/bank coins) ^[extracted]
- USDT grey zone, monthly flow of $32B across 7  countries × 12 = $384B / year (Russia/Iran/Venezuela/Nigeria/Turkey/Argentina/Vietnam) ^[extracted]
- The three-currency MRA is still not formally signed (a mutual-recognition draft is under discussion as of 2026-05 ) · expected to land 2027-2028  ^[extracted]

## Mechanism / How it works

The market-splitting mechanism between the compliance circle and the grey circle:

```
White circle ($130B / 2030):    Grey circle ($384B+ / year):
├── institutional custody (BUIDL/banks)     ├── sanctions evasion (Russia/Iran)
├── CME margin                     ├── retail remittances (Nigeria/Philippines)
├── bank RTGS interconnection             ├── grey-merchant settlement
├── §501  chain-level denylist enforcement  ├── USDT on Tron P2P
└── strong KYC / AML                 └── on-chain transfers without KYC

Splitting logic: regulatory requirements + user scenarios + channel stickiness form a hard wall
                  · three-currency expansion does not "eat" the grey circle —— 2  markets
```

The evolution path of **one-way mutual recognition → two-way mutual recognition → trilateral MRA**:
- 2026-02 U.S.-Japan MRA signed (USDC × [[payment-firms/jpyc|JPYC]] two-way)
- 2026-Q3 U.S.-EU MRA scheduled to be signed — see [[fintech/mica-cross-border-implications|MiCA クロスボーダー含意]] for details
- 2027-2028 three-currency MRA fully signed → automatic passporting for licensed issuers

## Origin & evolution

[[fintech/genius-act-501-denylist-mandate|GENIUS Act]] 2025  passed + [[fintech/mica-overview|MiCA]] 2024-12-30 fully in force + Japan's amended Payment Services Act 2023-06  upgraded to [[fintech/japan-epi-three-types-overview|EPI 三型]] = the foundation for the three currencies is in place. The $130B 2030  figure is an estimate under the 2  premises of "the mutual-recognition agreement 2028  signed + the EPI trust type 2027  upgraded to permit interest distribution". If either premise is delayed, the 2030  size could fall to $80-100B.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA アーキテクチャ]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 チェーン級 Denylist]]
- [[fintech/em-market-crypto-dollarization-pattern|新興市場暗号 USD 化]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン分配経済学]]
<!-- /wiki-links:managed -->

## Sources

- Chainalysis Geography of Cryptocurrency Report · BIS / FSB three-currency coordination discussion documents
