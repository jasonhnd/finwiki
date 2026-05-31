---
source: fintech/irs-1099-da
source_hash: baf08a2e3cb06a54
lang: en
status: machine
fidelity: ok
title: "IRS 1099-DA · Mandatory US Crypto Asset Tax Reporting"
translated_at: 2026-05-31T06:16:15.744Z
---

# IRS 1099-DA · Mandatory US Crypto Asset Tax Reporting

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> IRS Form 1099-DA (Digital Assets) is the US mandatory crypto asset tax reporting form, effective 2025-01 , with full operation from the 2026 年 tax year. All brokers (including exchanges, wallets, DeFi front-ends, and certain payment channels) are required to report customer crypto transactions to the IRS. Coordination with CARF (OECD cross-border) = **the complete end of cross-border crypto anonymity**. 1099-DA + CARF + GENIUS §501  chain-level freeze = triple surveillance loop.

## Key facts

- IRS 1099-DA 2023  final rule + 2024  amendments + effective 2025-01  ^[extracted]
- Full operation from 2026 年 tax year (filing deadline 2027-04 ) ^[extracted]
- DeFi broker definition revised multiple times through 2024-2026 ; fully decentralised protocols currently partially exempt ^[extracted]
- Coordination with CARF covers approximately 50  OECD countries ^[extracted]
- Broker scope: exchanges / wallets (custodial mandatory) / DeFi front-ends / stablecoin issuers / payment processors ^[extracted]
- Reporting content: transaction amount + time + asset type + customer KYC + cost basis + holding period + estimated capital gain ^[extracted]
- Sole exemption: fully decentralised protocol + no admin key + no front-end company ^[extracted]

## Mechanism / How it works

**Broker definition (IRS 2023  final rule + 2024  amendments)**:
- Exchanges (Coinbase / Kraken / Binance.US etc.)
- Wallet services (custodial mandatory · non-custodial partial)
- DeFi front-ends (contested → partially exempt under 2026  final rule)
- Stablecoin issuers (Circle / Tether in part)
- Payment processors (Stripe Bridge / Privy etc.)
- Cross-border transactions (coordinated with CARF)

**Coordination with CARF (end of cross-border anonymity)**:
| Axis | 1099-DA (US domestic) | CARF (OECD cross-border) |
|---|---|---|
| Applicability | US brokers | Brokers in ~50  countries globally |
| Report to | IRS | Mutual exchange among national tax authorities |
| Start | 2025-01  | Phased rollout across countries 2026-2027  |
| Linkage | Overlap means cross-border component of US customers is also covered | Closes the loop on global crypto KYC |

**Triple surveillance loop**: 1099-DA (US domestic tax) + CARF (cross-border information exchange) + GENIUS §501 (chain-level freeze) = from 2026 年 onward, any "crypto anonymity" narrative is invalidated. For chain-level enforcement examples, see [[fintech/chain-level-ofac-freeze-precedent|チェーンレベル OFAC freeze 先例]].

## Origin & evolution

2014  IRS Notice 2014-21  defined crypto assets as property → mandatory capital gain reporting. 2021  Infrastructure Investment and Jobs Act created the legal basis for 1099-DA. 2023  IRS final rule + 2024  amendments refined the broker definition. 2025-01  1099-DA took effect. Through 2024-2026  the DeFi definition was revised multiple times; fully decentralised protocols are currently partially exempt. Coordination with OECD CARF (phased rollout by countries 2026-2027 ; details at [[fintech/carf-1099da-end-of-crypto-anonymity|CARF + 1099-DA 暗号匿名性の終焉]]) = globalisation of crypto tax transparency. For the full picture of US VASP regulation, see [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリクス]].

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/carf-1099da-end-of-crypto-anonymity|CARF + 1099-DA 暗号匿名性の終焉]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/fatf-travel-rule-overview|FATF Travel Rule 概要]]
- [[fintech/aml-cft-fatf-grey-list-overview|FATF グレーリスト概要]]
<!-- /wiki-links:managed -->

## Sources
