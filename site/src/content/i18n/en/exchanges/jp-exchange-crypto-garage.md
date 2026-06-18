---
source: exchanges/jp-exchange-crypto-garage
source_hash: ab8fe9fc25c3c4f8
lang: en
status: machine
fidelity: ok
title: "Crypto Garage, Inc. (株式会社 Crypto Garage) — Japan crypto-asset exchange operator overview"
translated_at: 2026-06-18T23:33:48.336Z
---

# Crypto Garage, Inc. (株式会社 Crypto Garage) — Japan crypto-asset exchange operator overview


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it with [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for adjacent context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system boundary.

> FSA registration number, Kanto Local Finance Bureau 第00029号 · JVCEA member #1035 · registration date 2021-06-29

## 1. Corporate / shareholders

- **Trade name**: 株式会社 Crypto Garage (English: Crypto Garage, Inc.)
- **Established**: 2018年9月
- **Head-office location**: France Building, Ebisu-Nishi 2-19-9 , Shibuya-ku, Tokyo
- **Corporate number**: 6011001124112
- **Capital structure** (disclosed portion):
  - Digital Garage, Inc. (Digital Garage · TSE Prime 4819) is the principal investor. The joint-venture partner at founding was Tokyo Tanshi Co., Ltd. In 2021年10月 a third-party allotment of shares was carried out with Nomura Holdings, Inc. as the allottee, and Nomura HD participated as a new investor.
  - Blockstream is also listed in the "Backed By" section of the corporate site, with its capital / technology partnership publicly disclosed.
  - The specific shareholding ratios of each company are not disclosed.

Digital Garage positions the company as a strategic subsidiary in the fintech / blockchain field, and has dispatched 2 名directors (Kaoru Hayashi, Keizo Odori). Tokyo Tanshi has also dispatched 2 名directors (Toshiaki Terada, Misaki Kato).

## 2. License / registration status

- **Crypto-asset exchange business**: Director-General of the Kanto Local Finance Bureau 第00029号 (registration date: 2021年6月29日, under the Payment Services Act)
- **Financial instruments business**: not registered (JVCEA Type 1 member #1035 is crypto-asset exchange business only, no derivatives registration)
- **Electronic-payment-instruments business / funds-transfer business**: not registered (disclosed portion)
- **JVCEA**: Type 1 member #1035(crypto-asset exchange business only)
- **Global Digital Finance**: member (industry self-regulatory body)

## 3. Currencies handled

The number of handled tokens and the specific list are not individually enumerated on the official site or in public documents, and are not disclosed.

Token characteristics inferred from the service design:
- **Bitcoin (BTC)** is the central asset (the R&D themes are Bitcoin / Lightning / Liquid Network, and BTC-denominated OTC / settlement is the core)
- SETTLENET PRO provides "JPY-denominated tokens (yen-denominated) × on-chain DvP settlement," using a JPY-denominated token (an internal settlement currency)
- The company's R&D includes Discreet Log Contracts (DLC) and Liquid Network sidechain assets
- Because it is an institution-focused operator rather than a retail multi-token exchange, the number of handled tokens is presumed to be a small, select set

## 4. Scope of business

The company is **not a retail spot exchange**, but an operator specializing in digital-asset infrastructure for institutions and corporates (self-described: "regulated institutional digital assets infrastructure company"). The main service lines are as follows:

| Service | Content |
|----------|------|
| **SETTLENET PRO** | An intermediary / OTC settlement platform in the crypto-asset inter-dealer market. Provides non-custodial DvP settlement, a JPY-denominated token (issued by the company), and point-in-time net settlement |
| **SETTLENET CUSTODY** | A domestic-regulation-compliant digital-asset custody service for institutional investors and corporates (launched 2023年4月). Insured segregated management, staking (added 2024年3月), and an OES (Off Exchange Settlement) function |
| **SETTLENET OTC** | A crypto-asset OTC dealer for corporates and business entities (launched 2023年4月). Leverages a global LP network, premium service with email/phone support |
| **R&D** | Research and development on Bitcoin · Lightning · Liquid Network, OSS contributions to the Discreet Log Contracts (DLC) protocol, research on P2P derivatives trading |
| **Blockchain Dev** | Contracted blockchain development for corporate clients |
| **mahola** | Blockchain backend service (API), officially launched 2024年10月 |

**Fiat-currency deposit channels**: corporate only (bank transfer). There are no retail-facing channels such as convenience-store deposit or quick deposit.

## 5. Market share / trading volume

- Both trading volume and account count are **not disclosed**
- **Customer base**: specialized in institutional investors, business entities, crypto-asset exchanges, liquidity providers, high-net-worth individuals, family offices, and asset managers. Does not provide services for general retail investors
- Market position: a **niche (institution-focused infrastructure)** player that does not participate in the retail trading-volume competition. Presumed to target on the order of several dozen corporate clients, but quantitative data are not disclosed

## 6. History / major incidents

| Year/Month | Item |
|------|------|
| 2018-09  | Established as a joint venture of Digital Garage, Inc. × Tokyo Tanshi Co., Ltd. |
| 2019-01  | Obtained **第1号** certification as a blockchain / finance field under the Cabinet Office regulatory-sandbox system |
| 2019-01  | Announced development of SETTLENET (a product supporting app development for blockchain financial operators) |
| 2019-04  | Developed and announced a P2P protocol realizing Bitcoin-settled crypto-currency derivatives trading |
| 2020-06  | Launched commercial service of the settlement platform "SETTLENET" for the OTC market |
| 2021-02  | Launched the SETTLENET v2 service based on crypto-asset exchange registration (added price streaming · point-in-time net settlement) |
| 2021-06  | Completed crypto-asset-exchange-operator registration (Kanto Local Finance Bureau 第00029号) |
| 2021-10  | **Third-party allotment of shares** and business alliance with Nomura Holdings as the allottee |
| 2022-08  | Paper on DLC accepted at IEEE ICBC 2022  (academic recognition) |
| 2023-04  | Launched SETTLENET CUSTODY · OTC services (domestic-first, custody for institutional investors) |
| 2023-11  | Agreed with Komainu (invested by the Nomura Group) on collaboration to develop crypto-asset services for institutional investors in Japan |
| 2024-03  | Added staking service to SETTLENET CUSTODY |
| 2024-10  | Official launch of the blockchain backend service "mahola" |
| 2024-12  | Technical support for the BETA version of Nissan Motor's "NISSAN PASSPORT" |
| 2025-08  | Jointly developed and began providing, with Pacific Meta, a consulting package supporting corporate crypto-asset holdings |
| 2025-12  | Paper on Custodial Wallet accepted at IEEE Blockchain 2025  |

Major incidents such as administrative dispositions, hacks, and system failures: not disclosed (2024年6月 "Regarding our company's response to crypto-asset outflows at other companies" refers to another company's case and is not an incident specific to the company itself).

## 7. Strategic trends

- Consistently maintains the **institution-focused × Bitcoin-native** course. SETTLENET PRO has established a niche position of a class unique within Japan in the crypto-asset inter-dealer market
- **Collaboration with Blockstream / Liquid Network**: Blockstream is listed in the "Backed By" section of the official site. With R&D themes specialized in Bitcoin · Lightning · Liquid Network, a role as a major dissemination partner for Liquid Network sidechain technology in the Japanese market is suggested (the specific investment amount and contract details with Blockstream are not disclosed)
- **Nomura Group × Komainu collaboration** (2023年11月): collaboration in the institutional-investor custody-service domain. Through the linkage with [[exchanges/jp-custody-komainu|Komainu]] (the joint-venture custodian of [[securities-firms/nomura-hd|野村 HD]] × Ledger × CoinShares), it advances the development of global-level institutional infrastructure (the company's position is detailed in [[exchanges/jp-institutional-custody-three-pillars|JP institutional custody 三本柱]] and [[exchanges/jp-crypto-market-maker-otc-layer|JP crypto market maker / OTC レイヤー]])
- **Expansion of web3  development contracts**: since 2024年, blockchain-development-support projects in non-crypto fields — Nissan Motor, the Society for Testing English Proficiency (Eiken), SKY Perfect JSAT, Shiwa Town in Iwate Prefecture, etc. — have increased. Diversifies the developer-facing business line via the mahola API
- **Most recent 12 months (as of 2025年5月)**: joint provision with Pacific Meta of crypto-asset-holding consulting (2025年8月), paper accepted at IEEE Blockchain 2025  (2025年12月). No public announcements regarding IPO or overseas expansion

## 8. Related persons

- **Representative Director CEO**: Masahito Okuma (大熊 将人)
- **Directors** (disclosed portion):
  - Kaoru Hayashi (Digital Garage, Inc.)
  - Keizo Odori (Digital Garage, Inc.)
  - Toshiaki Terada (Tokyo Tanshi Co., Ltd.)
  - Misaki Kato (Tokyo Tanshi Co., Ltd.)
  - Toshinori Sasaki (Nomura Holdings, Inc.)
- **Auditor**: Yasuyuki Rokuyata (Digital Garage, Inc.)
- **Founding background**: born from a joint venture of Digital Garage (IT · FinTech investment · infrastructure business) and Tokyo Tanshi (the interbank money market). The fusion of interbank-market know-how × blockchain technology is the core of the business model.

## Related

- [[fintech/japan-financial-regulation]] — Japanese financial regulation as a whole
- [[fintech/japan-bittrade-listing-process]] — General theory of the listing process
- [[fintech/japan-stablecoin-regulatory-landscape]] — Related stablecoin regime
- [[fintech/jp-trust-type-sc-architecture]] — Related SC regime
- [[exchanges/jp-exchange-bitflyer]] — Industry peer (major)
- [[exchanges/jp-exchange-sbi-vc-trade]] — Industry peer (institution-focused)
- [[exchanges/jp-custody-komainu]] — Collaboration partner Komainu (institutional custody)
- [[exchanges/jp-institutional-custody-three-pillars]] — JP institutional custody three pillars
- [[exchanges/jp-crypto-market-maker-otc-layer]] — JP crypto market maker / OTC layer

## Sources

- [Crypto Garage official corporate site (top)](https://cryptogarage.co.jp/) (accessed 2026-05-18)
- [Crypto Garage company overview (Japanese)](https://cryptogarage.co.jp/about/) (accessed 2026-05-18)
- [Crypto Garage Company Profile (English)](https://cryptogarage.co.jp/en/about/) (accessed 2026-05-18)
- [Crypto Garage SETTLENET PRO service details](https://cryptogarage.co.jp/services/pro/) (accessed 2026-05-18)
- [Crypto Garage SETTLENET CUSTODY service details](https://cryptogarage.co.jp/services/custody/) (accessed 2026-05-18)
- [Crypto Garage SETTLENET OTC service details](https://cryptogarage.co.jp/services/otc/) (accessed 2026-05-18)
- [Crypto Garage R&D service details](https://cryptogarage.co.jp/services/rd/) (accessed 2026-05-18)
- [Crypto Garage news list (all 3pages)](https://cryptogarage.co.jp/news/) (accessed 2026-05-18)
- [JVCEA member list](https://jvcea.or.jp/member/) (accessed 2026-05-18)
- [FSA crypto-asset-exchange-operator registration list Excel](https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx) (snapshot 令和8年4月1日 = 2026-04-01)
