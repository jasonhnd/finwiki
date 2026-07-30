---
source: fintech/eu-mica-implementation-status-2026
source_hash: 041757c340e9e79b
lang: en
model: local-en-business-term-glossary
status: machine
fidelity: ok
title: "EU MiCA Implementation Status, July 2026 · ESMA EMT/ART Registers and Restrictions on Non-Compliant Stablecoins"
translated_at: 2026-07-30T02:12:00+09:00
---
# EU MiCA Implementation Status, July 2026 · ESMA EMT/ART Registers and Restrictions on Non-Compliant Stablecoins

## TL;DR

Under the EU Markets in Crypto-Assets Regulation (MiCA, Regulation (EU) 2023/1114), the EMT / ART provisions began to apply on 2024-06-30, the other principal provisions on 2024-12-30, and the longest CASP transitional period ended on 2026-07-01. Aggregating ESMA's **2026-07-16 interim register** by unique LEI produces **41 rows, 21 issuing legal entities, and 12 home states** in the EMT file; the ART file has no data rows. This is a snapshot of a public register, not a measure of issuance outstanding, trading volume, market share, or active users. Consequently, figures and events in the former version—including “three ART firms,” “USDT 1%,” “USDC 78%,” and a “BBVA EURO launch”—cannot be confirmed from this register and are not treated as currently verified facts. For the legal classification background, see [[fintech/mica-overview|MiCA overview]] and [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART details]]. ^[source:MiCA Regulation; ESMA interim MiCA register snapshot 2026-07-16; ESMA transition statement]

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it alongside [[fintech/mica-overview|MiCA overview]] for the legal framework, [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART]] for token classification, and [[fintech/dora-eu-digital-operational-resilience-overview|DORA overview]] for the dual-track “business + resilience” architecture.

## Implementation timeline (2023–2026) ^[source:MiCA Regulation; ESMA guidance and register; official issuer and CASP notices]

| Date | Event confirmed in the public record | Verification implication |
|---|---|---|
| 2023-06-09 | Regulation (EU) 2023/1114 published in the Official Journal | Primary source for the text and application dates |
| 2024-06-30 | Titles III / IV (ART / EMT) began to apply | Earlier application of stablecoin-related provisions |
| 2024-07-01 | Circle announced MiCA-compliant EU issuance of USDC / EURC under its French EMI licence | This was not a new acquisition in March or May 2025 |
| 2024-11-27 | Tether announced the end of EURT support | The covered token was EURT, not an announcement of a voluntary EU-wide USDT withdrawal |
| 2024-12-13 | Coinbase began restricting services for USDT and other tokens through certain EEA retail entities | Scope must be checked for each exchange, entity, and service |
| 2024-12-30 | The other principal MiCA provisions began to apply | Full application of CASP authorization and related provisions |
| 2025-01-17 | ESMA published guidance for CASPs concerning non-MiCA-compliant ARTs / EMTs | Services facilitating acquisition were targeted by the end of January 2025, with sell-only transition expected by the end of Q1 |
| 2025-12-23 | The iXBRL format requirement for MiCA white papers began to apply | Further machine readability of the register |
| 2026-07-01 | The longest CASP transitional period ended across the EU | Unauthorized CASPs may no longer continue providing services |
| 2026-07-16 | Snapshot of the ESMA interim register used by this entry | 41 EMT rows and 0 ART rows; cite with a fixed date because the register is updated weekly |

## EMT (E-Money Token) register snapshot (2026-07-16) ^[source:ESMA EMTWP.csv snapshot 2026-07-16]

The following table aggregates ESMA's `EMTWP.csv` after deduplication by `ae_lei`. “Registered rows” means rows of white-paper records and may not equal the number of tokens or currently circulating instruments.

| Home state | Issuing legal entities (unique LEIs) | Registered rows | Registered legal entities |
|---|---:|---:|---|
| CZ | 1 | 3 | Payment Corporation SE |
| DE | 1 | 4 | AllUnity GmbH |
| DK | 1 | 1 | Eurodollar ApS |
| FI | 1 | 4 | Paxos Issuance Europe Oy |
| FR | 6 | 8 | Circle Internet Financial Europe SAS; Société Générale - Forge; SALVUS; Oddo BHF SCA; HEURO SAS; CACEIS BANK SA |
| IS | 1 | 1 | Monerium ehf |
| LT | 2 | 2 | UAB BLUE EMI LT; Newrails, UAB |
| LU | 2 | 2 | Banking Circle S.A.; AIEU Services Limited S.A. |
| LV | 1 | 2 | SIA GR8 PAY |
| MT | 2 | 4 | StablR Ltd; Stable mint Ltd |
| NL | 2 | 9 | Fiat Republic Netherlands; Quantoz Payments B.V |
| PL | 1 | 1 | StaBillon sp. z o.o. |
| **Total** | **21** | **41** | **12 home states** |

**How to read it**:

1. ESMA republishes information received from NCAs / the EBA on a weekly basis, so every count must carry a snapshot date.
2. One legal entity can have multiple white papers or revised versions, so the row count must not be called the “number of issuers.”
3. The register contains no circulation, market capitalization, turnover, or active-user data; market figures such as Circle 75%, EURC €280 million, or BBVA €25 million cannot be derived from this table.
4. `BBVA`, `Bitstamp Pay`, and `Crypto.com Europe` cannot be confirmed as issuer legal entities in this EMT snapshot. CASP registration or authorization for another business must not be confused with EMT issuer registration.

## ART (Asset-Referenced Token) register snapshot (2026-07-16) ^[source:ESMA ARTZZ.csv snapshot 2026-07-16]

| ESMA file | Data rows | What can be confirmed | What cannot be confirmed |
|---|---:|---|---|
| `ARTZZ.csv` | 0 | This snapshot has no ART issuer record in ESMA's interim register | Pending cases, offshore issuance, non-public plans, historical application counts, market demand, or regulatory costs |

Quantoz EURD appears in the same date's EMT file as the `EURD EMT white paper` of Quantoz Payments B.V. and must not be counted as an ART. Fictitious Bitstamp Pay and Société Générale-FORGE ART products / circulation figures have also been removed. A zero-row snapshot alone cannot support causal claims that “ARTs disappeared because of regulatory burdens” or that “compliance costs are three to five times those of EMTs.”

## USDT's EU withdrawal and reconstruction of USDC share

**Published restrictions and evidence boundary**: ^[source:Tether EURT notice; Coinbase and Kraken EEA notices; ESMA 2025-01-17 guidance; ESMA EMTWP.csv]

| Date / status | Public information | What this information alone cannot establish |
|---|---|---|
| 2024-11-27 | Tether said new EURT issuance had already stopped and that support / redemption would end by 2025-11-27 | It does not establish that USDT was voluntarily withdrawn from the EU or that EU holdings fell to zero |
| 2024-12-13 | Coinbase began service restrictions for USDT and other tokens through specified EEA retail entities | It does not establish that every EU exchange completed the same action on the same date |
| 2025-01-17 | ESMA guidance addressed restrictions on services enabling acquisition of non-compliant ARTs / EMTs and a sell-only transition by the end of Q1 | It did not impose a uniform prohibition on custody and transfers |
| Updated 2026-04-13 | Kraken states that USDT is delisted in the EEA | It does not show balances, volume, or OTC share across the entire EU market |
| 2026-07-16 snapshot | The USDT issuer is not listed in ESMA's EMT file; Circle's USDC / EURC are listed | It does not supply time series for USDT 1%, USDC 78%, or USDC net inflows of $45 billion in the EU |

The former 28% → 6% → 3% → 1% curve, $45 billion in USDC net inflows, €220 million in EURC inflows, €180 million in bank-issued tokens, and a 78% USDC share were removed because no primary dataset with fixed definitions, venues, and periods supported them.

### Circle EURC

- Circle Internet Financial Europe SAS announced its French EMI licence and MiCA-compliant EU issuance of USDC / EURC on 2024-07-01. ^[source:Circle MiCA announcement 2024-07-01]
- ESMA's 2026-07-16 EMT file lists that legal entity, the ACPR, a USDC white paper, and a EURC white paper.
- Because the register contains no EU circulating amount or use-case volume, the former figures of €280 million for EURC and $8 billion for EU USDC are not used.
- Reserve composition and custody must be verified separately for a specified token and reporting date using an issuer report / white paper. [[fintech/circular-reserve-asset-flywheel-overview|The circular reserve-asset flywheel]] is a market-structure analysis and must be distinguished from register facts.

### Société Générale-FORGE EURCV (Euro Coin Vertu)

- The ESMA EMT file lists Société Générale - Forge's EURCV white paper with an authorization notification date of 2024-07-01. September 2025 was not the first MiCA approval date. ^[source:ESMA EMTWP.csv snapshot 2026-07-16]
- The same file also lists a USDCV white paper. The listed chain and white-paper revision should be checked from the register URL and update date.
- The former claims of a 2026-Q1 multi-chain launch, €60 million circulation, ECB deposit-facility backing, and a yield-bearing wallet test have been removed because this snapshot does not confirm them.
- There is no basis for legally describing EURCV as “half stablecoin, half deposit token.” A comparison with [[fintech/institutional-stablecoin-deposit-token-thesis|the institutional stablecoin / deposit-token thesis]] requires separate verification of issuer liability and redemption claim.

### BBVA EURO

ESMA's 2026-07-16 EMT file contains no issuer record for BBVA or `BBVA EURO`. The November 2025 announcement, March 2026 launch, Ethereum / Polygon deployment, KPMG audit, €25 million circulation, and Latin America use case described in the former version could not be confirmed from primary sources, including the cited BBVA official URL, and are withdrawn. Absence from the register alone does not prove the absence of future plans; reassessment should wait until both an official announcement and a subsequent register update are available. Any link to [[fintech/brazil-mexico-cbdc-stablecoin-push-2026|the Brazil/Mexico CBDC push]] likewise remains a hypothesis. ^[source:ESMA EMTWP.csv snapshot 2026-07-16]

### EUROe / EURØP / EURR and other small stablecoins

- The ESMA file lists white papers for EUROe by Paxos Issuance Europe Oy, EURØP by SALVUS, and EURR / USDR by StablR.
- Because the register provides no DeFi / exchange volume or circulation, do not attach figures such as “under €40 million each” or predictions of future consolidation.

## ESMA × EBA × national competent authority coordination mechanism

**MiCA regulatory architecture**:

- **National competent authorities (NCAs)** handle ordinary issuer / CASP authorization and day-to-day supervision and provide information for the ESMA register.
- The **EBA** periodically assesses the significance of ARTs / EMTs and assumes direct supervision when an instrument is classified as a significant ART / EMT. The EBA does not directly supervise every EMT.
- **ESMA** maintains the Article 109 register and supports supervisory convergence, market integrity, and cross-border coordination for CASP authorization.

**Passport mechanism**: cross-border provision is subject to MiCA and the conditions of the underlying banking / e-money authorization. No event can be confirmed in which passports first became “mutually usable” in February 2026. The date 2026-07-01 was not the start of passporting; it was the latest end date of the CASP transitional period. ^[source:MiCA Regulation; ESMA statement on end of transitional periods 2026-04-17]

**Practical coordination issues**:

1. **Snapshot discipline**: distinguish the date, row count, and unique-LEI count of a weekly register, and note timing differences between an older snapshot and national registers.
2. **Separate issuer / token / CASP**: an exchange's CASP licence, an issuer's EMI / credit-institution authorization, and a token white-paper record concern different objects.
3. **Significance assessment**: the EBA decides under multiple quantitative and qualitative MiCA criteria. The former simplified `>€100M / >1M users / daily >€1M` description as a “large EMT threshold” and the claim that ESMA declared USDC a large EMT in March 2026 are unsupported.
4. **Missing market-share dataset**: the register is an authorization map, not a market dataset. Any market-share addition requires a reproducible dataset identifying EU / EEA scope, venue, pair, spot / derivatives, volume / balance, and period.

## Related

- [[fintech/INDEX|FinWiki Fintech Index]]
- [[fintech/mica-overview|MiCA overview]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART details]]
- [[fintech/mica-cross-border-implications|MiCA cross-border implications]]
- [[fintech/dora-eu-digital-operational-resilience-overview|DORA overview]]
- [[fintech/dora-eu-digital-operational-resilience-ctpp|DORA CTPP]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|global five-pole stablecoin regulatory matrix]]
- [[fintech/circular-reserve-asset-flywheel-overview|circular reserve-asset flywheel]]
- [[fintech/three-circles-stablecoin-mra-framework|US/EU/Japan stablecoin market-access comparison]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|institutional stablecoin / deposit-token thesis]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act implementation]]
- [[fintech/brazil-mexico-cbdc-stablecoin-push-2026|Brazil/Mexico CBDC × stablecoin push]]
- [[fintech/tether-business-model-short-treasury-yield|Tether business model]]

## Sources

- [MiCA — Regulation (EU) 2023/1114](https://eur-lex.europa.eu/eli/reg/2023/1114/oj) — legal classification, application dates, and authorization / supervision.
- [ESMA — MiCA landing page and interim register](https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica) — weekly register, data limitations, and transition.
- [ESMA EMT file (snapshot page updated 2026-07-16)](https://www.esma.europa.eu/sites/default/files/2024-12/EMTWP.csv) — source of the 41 rows / 21 unique LEIs / 12 home states aggregation.
- [ESMA ART file (snapshot page updated 2026-07-16)](https://www.esma.europa.eu/sites/default/files/2024-12/ARTZZ.csv) — header only, 0 data rows.
- [ESMA — guidance on non-compliant ARTs / EMTs (2025-01-17)](https://www.esma.europa.eu/press-news/esma-news/esma-and-european-commission-publish-guidance-non-mica-compliant-arts-and-emts) — CASP restrictions and transition.
- [ESMA — end of MiCA transitional periods (2026-04-17)](https://www.esma.europa.eu/sites/default/files/2026-04/ESMA75-113276571-1679_Statement_on_the_end_of_transitional_periods_under_MiCA.pdf) — latest 2026-07-01 end date.
- [EBA — supervisory role under MiCA](https://www.eba.europa.eu/activities/direct-supervision-and-oversight/ebas-supervisory-role-under-mica) — significant ART / EMT assessment and direct supervision.
- [Circle — MiCA announcement (2024-07-01)](https://www.circle.com/fr/pressroom/circle-is-first-global-stablecoin-issuer-to-comply-with-mica-eus-landmark-crypto-law) — French EMI licence and USDC / EURC.
- [Société Générale-FORGE — EURCV product page](https://www.sgforge.com/product/eurcv/) — issuer product surface; verify the authorization date in the ESMA file.
- [Tether — EURT support transition (2024-11-27)](https://tether.io/news/tether-updates-users-on-a-strategic-transition-to-better-support-community-driven-product-support/) — covered token and redemption deadline.
- [Coinbase — MiCA non-compliant stablecoins](https://help.coinbase.com/en/coinbase/other-topics/other/mica-restricted-stablecoins) / [Kraken — EEA stablecoin offering](https://support.kraken.com/articles/stablecoin-offerings-for-eea-clients) — restrictions by entity / service.

---

**Last refresh** (2026-07-30): rebuilt all three provenance-flagged tables from the ESMA 2026-07-16 register snapshot and official issuer / CASP notices; removed unsupported market-share, circulation, licence, product-launch, and forecast claims.
