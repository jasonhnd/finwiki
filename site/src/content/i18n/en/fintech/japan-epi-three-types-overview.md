---
source: fintech/japan-epi-three-types-overview
source_hash: 7703d8b0fe48a969
lang: en
status: machine
fidelity: ok
title: "Japan EPI Three-Type Architecture · Trust Type / Bank Type / Funds Transfer Operator Type Overview"
translated_at: 2026-05-31T07:28:06.159Z
---
# Japan EPI Three-Type Architecture · Trust Type / Bank Type / Funds Transfer Operator Type Overview

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Japan's amendment to the Payment Services Act (2023) built the **world's most nuanced stablecoin framework**: a three-type EPI (Electronic Payment Instrument) architecture consisting of the trust type (Progmat XJPY), bank type (Minna no Ginko + Fukuoka FG), and funds transfer operator type (JPYC). The three types differ significantly in regulatory burden, flexibility, and circulation restrictions. Japan was the first major economy in the world to define the legal status of stablecoins explicitly in statute (leading the GENIUS Act by 2  years).

## Key facts

- The Payment Services Act amendment was passed in 2023  and took effect in 2023-06  ^[extracted]
- It preceded the GENIUS Act by about 2  years ^[extracted]
- Progmat's trust-type structure was designed to be non-MUFG-controlled (single largest shareholder 49% + diversified governance through 51%) ^[extracted]
- JPYC is Japan's only funds-transfer-operator-type SC holder ^[extracted]
- JPYC circulation in 2026-Q1  was 21 億円 + 6 万 holders + 2.6 x growth in 3  months ^[extracted]
- SBI Circle Holdings was established in 2025-08  with a 50/50  50-50 capital split and exclusive distribution rights for USDC in Japan ^[extracted]
- Project Pax = a cross-border SC project by Japan's three megabanks + Datachain that has solved only SWIFT compatibility ^[extracted]
- Circulation cap for the funds-transfer-operator type: ¥100 万 per transaction (in some cases) ^[extracted]

## Mechanism / How it works

**Comparison of the three EPI types**:
| Type | Issuer | Regulation | Flexibility | Circulation cap | Representative example |
|---|---|---|---|---|---|
| Trust type | Trust bank | Trust Business Act + EPI | High (can issue in arbitrary amounts) | None | Progmat XJPY (MUFG Trust + Sumitomo Mitsui Trust + Mizuho Trust) |
| Bank type | Bank | Banking Act + EPI | Medium (linked to deposits) | Linked to bank balance sheet | Minna no Ginko SC (Solana route) |
| Funds transfer operator type | Funds transfer operator | Payment Services Act | Low (some small-value cross-border use capped at ¥100 万) | ¥100 万 / transaction (some cases) | JPYC (Noritaka Okabe) |

**Trust type** ([[JapanFG/progmat|Progmat]] XJPY): a joint venture among Mitsubishi UFJ, Sumitomo Mitsui, Mizuho, and Datachain, designed to be non-MUFG-controlled (single largest shareholder 49% + diversified governance through 51%), aimed at large-ticket B2B funds. **Bank type** (Minna no Ginko): Fukuoka FG / Minna no Ginko + Solana route, targeting bank retail customers. **Funds transfer operator type** ([[JapanFG/jpyc|JPYC]]): led by Noritaka Okabe, the only holder of a funds-transfer-operator-type SC in Japan, with 2.6 x growth in 3  months.

## Origin & evolution

In 2017, the Payment Services Act amendment first defined "virtual currency." In 2019-04 , the revised Payment Services Act introduced the concept of "crypto-asset." In 2022-06 , passage of the amendment introduced the EPI three-type framework. In 2023-06 , it took effect, making Japan the first major economy in the world to define the legal status of stablecoins explicitly in statute. In 2025-08 , the establishment of SBI Circle Holdings changed the landscape: exclusive USDC distribution in Japan plus JPYC / Progmat / Minna no Ginko together formed the 4  camp; see [[fintech/japan-epi-four-camps-comparison|日本 SC 四陣営比較]] for details. For a full overview of Japanese VASPs, see [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 規制タイムテーブル]].

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-epi-four-camps-comparison|日本 SC 四陣営比較]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 規制全景]]
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC アーキテクチャ]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
<!-- /wiki-links:managed -->

## Sources
