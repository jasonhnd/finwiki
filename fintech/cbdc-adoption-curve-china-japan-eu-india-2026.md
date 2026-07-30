---
title: CBDC programme status 2026 — China e-CNY vs India eRupee vs EU digital euro vs Japan pilot
aliases:
  - cbdc-adoption-curve-china-japan-eu-india-2026
  - cbdc adoption curve 2026
  - cbdc cross-country comparison 2026
  - e-cny vs eRupee vs digital euro
  - cbdc readiness matrix 2026
domain: fintech
created: 2026-05-25
last_updated: 2026-07-30
last_tended: 2026-07-30
review_by: 2026-11-25
confidence: likely
tags: [fintech, cbdc, e-cny, erupee, digital-euro, japan-cbdc, adoption, pilot-status, comparison]
status: active
sources:
  - https://www.pbc.gov.cn/en/3688247/3688978/3732405/2025080817504463594/index.html
  - https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169
  - https://www.rbi.org.in/scripts/AnnualReportPublications.aspx?Id=1436
  - https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html
  - https://www.ecb.europa.eu/euro/digital_euro/progress/html/index.en.html
  - https://www.ecb.europa.eu/euro/digital_euro/pilot/html/index.en.html
  - https://www.boj.or.jp/paym/digital/
---

# CBDC programme status 2026 — China e-CNY vs India eRupee vs EU digital euro vs Japan pilot

## TL;DR

2026-07-30 時点で、4 jurisdiction を単一の「adoption curve」に載せるには注意が必要である。China は e-CNY pilot を広域で継続し、PBoC は e-CNY を M0 統計に含める。India は retail / wholesale の両 pilot を継続し、2026-04-29 更新の RBI FAQ は 19 retail wallet banks と 16 wholesale participants を明記する。Wholesale では、国債流通市場取引の資金決済、コール市場の銀行間貸借決済、譲渡性預金証書の tokenised issuance / settlement という 3 ongoing use cases が示される。EU は digital euro を未発行で、2027 H2 の controlled beta pilot を準備中、issuance decision は未了である。Japan は BoJ pilot を継続しているが、DCJPY は民間銀行預金 token であり Japan CBDC の live deployment ではない。

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as a dated programme-status comparison. Read it with [[fintech/erupee-india-pilot-status|eRupee pilot status]], [[fintech/e-euro-retail-rollout|digital euro rollout]], [[fintech/jp-stablecoin-dcjpy|DCJPY]], and [[fintech/cbdc-multi-tier-architecture-overview|CBDC architecture overview]].

## Status matrix

下表は [PBoC public briefing](https://www.pbc.gov.cn/en/3688247/3688978/3732405/2025080817504463594/index.html)、[RBI FAQ](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169)、[ECB digital euro project](https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html)、[BoJ CBDC page](https://www.boj.or.jp/paym/digital/) に基づく 2026-07-30 時点の status comparison である。

| Jurisdiction | Central-bank programme | Public status | What must not be inferred |
|---|---|---|---|
| China | e-CNY | Pilot programmes continue; e-CNY is central-bank money and included in M0 statistics | Registered wallet or cumulative transaction numbers are not active-user counts |
| India | e₹-R / e₹-W | Retail pilot has 19 wallet banks; wholesale pilot has 16 participants and 3 ongoing use cases | UPI transaction volume is not e₹ volume |
| Euro area | Digital euro | Technical-readiness phase; controlled beta pilot planned for 2027 H2; no issuance decision | Pilot preparation is not issuance |
| Japan | BoJ retail-CBDC pilot | Technical experiments and CBDC Forum continue | DCJPY / Progmat are not BoJ CBDC |

## Public participation metrics

以下の表は [PBoC briefing](https://www.pbc.gov.cn/en/3688247/3688978/3732405/2025080817504463594/index.html)、[RBI FAQ](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169)、[ECB project / pilot pages](https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html)、[BoJ CBDC page](https://www.boj.or.jp/paym/digital/) が明示する範囲に限定する。異なる grain の値を無理に ranking しない。

| Programme | Officially stated measure | Reference date / limitation |
|---|---|---|
| e-CNY | PBoC reported RMB 13.61B in circulation at end-2022 and described pilots as expanding | Historical stock value; not current active users |
| e₹ retail | 19 banks currently offer CBDC wallets | RBI FAQ updated 2026-04-29; reviewed 2026-07-30 |
| e₹ wholesale | 16 participants; 3 ongoing use cases covering secondary-market government-securities settlement, call-money settlement, and tokenised issuance / settlement of certificates of deposit | RBI FAQ updated 2026-04-29; reviewed 2026-07-30 |
| Digital euro | No issued retail digital euro; beta pilot uses a controlled beta instrument | ECB current project / pilot pages |
| Japan CBDC | Pilot-system testing and forum work; no public retail issuance | BoJ 2026 pilot progress page |

No single row provides a comparable monthly-active-user series. The former table mixed cumulative wallet registrations, transaction value, cities and private token activity, which made the implied ranking unsound.

## Architecture and distribution

下表は [RBI FAQ](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169)、[ECB project page](https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html)、[BoJ pilot materials](https://www.boj.or.jp/paym/digital/) と PBoC public description から確認できる high-level architecture を示す。

| Programme | Liability / issuer | Distribution status | Existing-rail relationship |
|---|---|---|---|
| e-CNY | PBoC central-bank money | Pilot distribution through authorized operators | Coexists with bank and mobile-payment rails |
| e₹ | RBI central-bank money | Retail pilot through 19 bank wallet providers plus participating non-banks; wholesale pilot has 16 participants | Retail wallets can scan UPI QR; settlement timing follows UPI for those payments |
| Digital euro | Would be Eurosystem central-bank money | Proposed distribution via supervised PSPs | Design aims to integrate with European payment ecosystem |
| Japan pilot | Would be BoJ central-bank money if issued | Experimental only | Forum tests coexistence with private payment services |

## Limits, remuneration and programmability

以下の表は決定済み事項と検討中事項を分ける。[RBI FAQ](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169) と [ECB progress page](https://www.ecb.europa.eu/euro/digital_euro/progress/html/index.en.html) を直接参照する。

| Programme | Publicly supported statement |
|---|---|
| e-CNY | Wallet / KYC tiers exist; current limits must be read from official operator rules rather than copied as timeless values |
| e₹ | Retail balances are non-interest-bearing; programmable and offline functions are being piloted; wholesale has 3 ongoing use cases, including tokenised issuance / settlement of certificates of deposit; no universal hard holding cap is stated in the RBI FAQ |
| Digital euro | Would be non-remunerated; holding-limit methodology is under development and no final euro amount is adopted |
| Japan pilot | Design choices remain under evaluation; no issued balance or retail cap exists |

## Programme maturity

下表は「research / pilot / issued」の語を統一して比較する。source は [ECB](https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html)、[RBI](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169)、[BoJ](https://www.boj.or.jp/paym/digital/) と PBoC public briefing である。

| Programme | Research / test | Limited live use | Broad production |
|---|---|---|---|
| e-CNY | Yes | Yes, through continuing pilots | Do not assert nationwide universal adoption from reviewed source |
| e₹ retail / wholesale | Yes | Yes: 19 retail wallet banks, 16 wholesale participants, and 3 ongoing wholesale use cases in the current RBI FAQ | No |
| Digital euro | Yes | Controlled beta planned, not yet operational | No |
| Japan CBDC | Yes, pilot system | No public retail issuance | No |

The useful comparison is not “which country won,” but which evidence belongs to a research environment, a bounded pilot, or a generally available monetary product.

## DCJPY is a separate private-money route

DCJPY is a tokenized bank-deposit platform. It can inform the distribution and DvP discussion, but it must not be inserted into a CBDC adoption metric as if it were issued by the Bank of Japan. See [[fintech/jp-stablecoin-dcjpy|DCJPY]] for the entity, project and evidence boundary.

## Reading rules

1. Attach a date and source to every wallet, balance and transaction metric.
2. Do not equate registrations with active users.
3. Do not mix UPI / Pix / CoDi rail volume with CBDC volume.
4. Separate a controlled beta token from issued legal tender.
5. Keep commercial-bank deposit tokens and private stablecoins outside sovereign-CBDC adoption counts.

## Related

- [[fintech/INDEX|Fintech Index]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ概要]]
- [[fintech/erupee-india-pilot-status|eRupee India pilot status]]
- [[fintech/e-euro-retail-rollout|Digital euro retail rollout]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]]
- [[fintech/bis-project-agora-overview|Project Agorá]]

## Sources

- PBoC — 2022 financial-statistics briefing / e-CNY in M0: https://www.pbc.gov.cn/en/3688247/3688978/3732405/2025080817504463594/index.html
- RBI — Digital Rupee FAQ (updated 2026-04-29): https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169
- RBI — Annual Report 2024-25: https://www.rbi.org.in/scripts/AnnualReportPublications.aspx?Id=1436
- ECB — Digital euro project: https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html
- ECB — Progress: https://www.ecb.europa.eu/euro/digital_euro/progress/html/index.en.html
- ECB — Pilot: https://www.ecb.europa.eu/euro/digital_euro/pilot/html/index.en.html
- Bank of Japan — CBDC: https://www.boj.or.jp/paym/digital/
