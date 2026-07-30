---
source: fintech/cbdc-adoption-curve-china-japan-eu-india-2026
source_hash: bb97b0a1de3734d1
lang: en
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "CBDC programme status 2026 — China e-CNY vs India eRupee vs EU digital euro vs Japan pilot"
translated_at: 2026-07-29T17:58:52.645Z
---
# CBDC programme status 2026 — China e-CNY vs India eRupee vs EU digital euro vs Japan pilot

## TL;DR

As of 2026-07-30, care is needed before placing the 4 jurisdictions on a single “adoption curve.” China continues broad e-CNY pilots, and the PBoC includes e-CNY in M0 statistics. India continues both retail and wholesale pilots; the RBI FAQ updated 2026-04-29 specifies 19 retail wallet banks and 16 wholesale participants. For wholesale, it identifies 3 ongoing use cases: funds settlement for secondary-market government-securities transactions, inter-bank lending and borrowing settlement in the call-money market, and tokenised issuance and settlement of certificates of deposit. The EU has not issued a digital euro and is preparing a controlled beta pilot for 2027 H2 while no issuance decision has been made. Japan continues the BoJ pilot, but DCJPY is a private bank-deposit token, not a live deployment of a Japanese CBDC.

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] as a dated programme-status comparison. Read it with [[fintech/erupee-india-pilot-status|eRupee pilot status]], [[fintech/e-euro-retail-rollout|digital euro rollout]], [[fintech/jp-stablecoin-dcjpy|DCJPY]], and [[fintech/cbdc-multi-tier-architecture-overview|CBDC architecture overview]].

## Status matrix

The table below is a programme-status comparison as of 2026-07-30, based on the [PBoC public briefing](https://www.pbc.gov.cn/en/3688247/3688978/3732405/2025080817504463594/index.html), [RBI FAQ](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169), [ECB digital euro project](https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html), and [BoJ CBDC page](https://www.boj.or.jp/paym/digital/).

| Jurisdiction | Central-bank programme | Public status | What must not be inferred |
|---|---|---|---|
| China | e-CNY | Pilot programmes continue; e-CNY is central-bank money and included in M0 statistics | Registered wallet or cumulative transaction numbers are not active-user counts |
| India | e₹-R / e₹-W | Retail pilot has 19 wallet banks; wholesale pilot has 16 participants and 3 ongoing use cases | UPI transaction volume is not e₹ volume |
| Euro area | Digital euro | Technical-readiness phase; controlled beta pilot planned for 2027 H2; no issuance decision | Pilot preparation is not issuance |
| Japan | BoJ retail-CBDC pilot | Technical experiments and CBDC Forum continue | DCJPY / Progmat are not BoJ CBDC |

## Public participation metrics

The following table is limited to what the [PBoC briefing](https://www.pbc.gov.cn/en/3688247/3688978/3732405/2025080817504463594/index.html), [RBI FAQ](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169), [ECB project / pilot pages](https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html), and [BoJ CBDC page](https://www.boj.or.jp/paym/digital/) expressly state. It does not force values with different grains into a ranking.

| Programme | Officially stated measure | Reference date / limitation |
|---|---|---|
| e-CNY | PBoC reported RMB 13.61B in circulation at end-2022 and described pilots as expanding | Historical stock value; not current active users |
| e₹ retail | 19 banks currently offer CBDC wallets | RBI FAQ updated 2026-04-29; reviewed 2026-07-30 |
| e₹ wholesale | 16 participants; 3 ongoing use cases covering secondary-market government-securities settlement, call-money settlement, and tokenised issuance / settlement of certificates of deposit | RBI FAQ updated 2026-04-29; reviewed 2026-07-30 |
| Digital euro | No issued retail digital euro; beta pilot uses a controlled beta instrument | ECB current project / pilot pages |
| Japan CBDC | Pilot-system testing and forum work; no public retail issuance | BoJ 2026 pilot progress page |

No single row provides a comparable monthly-active-user series. The former table mixed cumulative wallet registrations, transaction value, cities and private token activity, which made the implied ranking unsound.

## Architecture and distribution

The following table presents high-level architecture that can be verified from the [RBI FAQ](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169), [ECB project page](https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html), [BoJ pilot materials](https://www.boj.or.jp/paym/digital/), and the PBoC public description.

| Programme | Liability / issuer | Distribution status | Existing-rail relationship |
|---|---|---|---|
| e-CNY | PBoC central-bank money | Pilot distribution through authorized operators | Coexists with bank and mobile-payment rails |
| e₹ | RBI central-bank money | Retail pilot through 19 bank wallet providers plus participating non-banks; wholesale pilot has 16 participants | Retail wallets can scan UPI QR; settlement timing follows UPI for those payments |
| Digital euro | Would be Eurosystem central-bank money | Proposed distribution via supervised PSPs | Design aims to integrate with European payment ecosystem |
| Japan pilot | Would be BoJ central-bank money if issued | Experimental only | Forum tests coexistence with private payment services |

## Limits, remuneration and programmability

The following table separates settled points from matters still under consideration. It refers directly to the [RBI FAQ](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169) and [ECB progress page](https://www.ecb.europa.eu/euro/digital_euro/progress/html/index.en.html).

| Programme | Publicly supported statement |
|---|---|
| e-CNY | Wallet / KYC tiers exist; current limits must be read from official operator rules rather than copied as timeless values |
| e₹ | Retail balances are non-interest-bearing; programmable and offline functions are being piloted; wholesale has 3 ongoing use cases, including tokenised issuance / settlement of certificates of deposit; no universal hard holding cap is stated in the RBI FAQ |
| Digital euro | Would be non-remunerated; holding-limit methodology is under development and no final euro amount is adopted |
| Japan pilot | Design choices remain under evaluation; no issued balance or retail cap exists |

## Programme maturity

The following table uses “research / pilot / issued” consistently. Sources are the [ECB](https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html), [RBI](https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169), [BoJ](https://www.boj.or.jp/paym/digital/), and the PBoC public briefing.

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
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture overview]]
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
