---
source: fintech/nigeria-enaira-retail-cbdc
source_hash: 33b2900d5049b04d
lang: en
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "Nigeria eNaira — retail CBDC design and first-year adoption evidence"
translated_at: 2026-07-29T17:01:04.835Z
---
# Nigeria eNaira — retail CBDC design and first-year adoption evidence

## TL;DR

The Central Bank of Nigeria launched eNaira in October 2021 as Africa's first retail CBDC. The official design is account-based, two-tier and non-interest-bearing, with Hyperledger Fabric underneath. The strongest comparable adoption evidence remains the IMF's first-year study: about 860,000 retail wallets at the study's reference point, about 14,000 transactions per week, and activity equivalent to only 1.5% of wallets in an average week. Those are historical first-year measures—not current 2026 adoption counts. Later claims of flat adoption, “lowest in the world,” or precise 2026 wallet totals require a newer dated source.

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]], [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC programme status]], and [[fintech/em-market-crypto-dollarization-pattern|EM crypto-dollarization pattern]].

## Programme and architecture

The table below is based on the [eNaira Design Paper](https://enaira.gov.ng/design-paper/) and [IMF Working Paper 2023/104](https://www.imf.org/en/publications/wp/issues/2023/05/16/nigerias-enaira-one-year-after-533487).

| Item | Verified description |
|---|---|
| Issuer | Central Bank of Nigeria |
| Launch | October 2021 |
| Legal / monetary form | Naira-denominated central-bank liability; 1 eNaira = 1 naira |
| Architecture | Two-tier platform using existing financial institutions / payment providers |
| Access model | Account-based, linked to national identity frameworks |
| Technology | Bitt Digital Currency Management System using Hyperledger Fabric |
| Interest | None |
| Channels | Wallet applications, APIs and USSD access described by the official site |

## Wallet tiers and published limits

The following table is historical: it reproduces the September 2021 limits on the [official design-paper page](https://enaira.gov.ng/design-paper/). Current wallet terms should be checked before operational use.

| Tier | Stated identity basis | Daily transaction limit | Balance limit |
|---|---|---:|---:|
| 0 | Phone number | ₦20,000 | ₦120,000 |
| 1 | National Identification Number | ₦50,000 | ₦300,000 |
| 2 | Bank Verification Number | ₦200,000 | ₦500,000 |
| 3 | Tier-2 requirements plus utility receipt | ₦1,000,000 | ₦5,000,000 |
| Merchant | Full KYC under CBN AML/CFT rules | Unlimited in the 2021 table | Unlimited in the 2021 table |

The previous page had tier values shifted upward and described Tier 0 as ₦120,000 daily / ₦300,000 balance. Those values contradicted the official design table and have been corrected.

## First-year adoption evidence

The table below is limited to the first-year study in [IMF Working Paper 2023/104](https://www.imf.org/-/media/files/publications/wp/2023/english/wpiea2023104-print-pdf.pdf). Do not reuse it as a current 2026 metric.

| Metric | IMF first-year finding | Interpretation boundary |
|---|---:|---|
| Retail wallets | About 860,000 | Roughly 0.8% of active bank accounts at the study date |
| Merchant wallets | About 100,000 | Around one-eleventh of merchants with POS terminals |
| Transactions | About 14,000 per week on average | Equivalent to 1.5% of wallets in an average week |
| Transaction value | About ₦923M per week on average | 0.0018% of average M3 during the period |
| Total transactions since launch | About 802,000 | Less than the wallet count, indicating many one-time / inactive wallets |

The IMF characterizes adoption as limited after the initial wave, while also noting that it was too early to judge the project's fate. The evidence supports “low first-year adoption”; it does not justify a timeless “global lowest-adoption CBDC” label.

## Distribution and network effects

The design intentionally relies on financial institutions and payment providers for layered services. The IMF analysis identifies network effects and the relationship with mobile money as central challenges: a wallet is useful only when counterparties and merchants accept it. This is a more defensible diagnosis than attributing all outcomes to a single event or asserting private motives for each bank, agent or merchant.

The table below summarizes the distribution roles and open evidence questions from the [eNaira Design Paper](https://enaira.gov.ng/design-paper/) and [IMF Working Paper 2023/104](https://www.imf.org/en/publications/wp/issues/2023/05/16/nigerias-enaira-one-year-after-533487), rather than assigning unsupported commercial incentives.

| Actor | Public role | Evidence question |
|---|---|---|
| CBN | Issuer and platform authority | Rules, access, operating continuity |
| Financial institutions | Wallet / conversion / service layer | Which institutions and channels are currently active? |
| Payment providers | Can build layered services | What integrations are live, not merely designed? |
| Merchants | Acceptance endpoint | Active merchants and transaction frequency |
| Mobile-money operators | Potential complement or substitute | Whether interoperability expands inclusion |

## eNaira and private stablecoin flows

The [IMF's June 2026 Nigeria stablecoin article](https://www.imf.org/en/news/articles/2026/06/16/stablecoins-in-nigeria) reports that Nigeria received about $59B in crypto-asset inflows from July 2023 to June 2024 and describes dollar stablecoins as a meaningful cross-border channel. That estimate is not an eNaira metric and measurement is imperfect. It does, however, show why any current digital-money comparison must examine CBDC, bank / fintech payments and private stablecoins separately.

## Comparison guardrails

The following table shows the fields that should be aligned in a peer CBDC comparison. This page does not estimate jurisdiction values beyond the [IMF study](https://www.imf.org/en/publications/wp/issues/2023/05/16/nigerias-enaira-one-year-after-533487).

| Field | eNaira evidence | Peer requirement |
|---|---|---|
| Launch status | Live since October 2021 | Distinguish issued CBDC from pilot |
| Wallet measure | Historical downloads | Use same date and active-user definition |
| Activity | Historical weekly transactions | Use same time window |
| Merchant reach | Historical merchant-wallet downloads | Use active acceptance, not registrations |
| Cross-border | Design objective; no live corridor established by sources reviewed here | Require central-bank / operator release |

## Reading rules

1. Date every adoption metric.
2. Separate downloads from active wallets.
3. Do not infer a 2026 trend from a 2022 observation.
4. Treat design objectives—remittances, inclusion, interoperability—as objectives until production data confirms outcomes.
5. Keep private stablecoin flow estimates separate from eNaira volume.

## Related

- [[fintech/INDEX|Fintech Index]]
- [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC programme status]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC architecture]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization]]

## Sources

- eNaira — Design Paper: https://enaira.gov.ng/design-paper/
- IMF — Nigeria's eNaira, One Year After: https://www.imf.org/en/publications/wp/issues/2023/05/16/nigerias-enaira-one-year-after-533487
- IMF — Working paper PDF: https://www.imf.org/-/media/files/publications/wp/2023/english/wpiea2023104-print-pdf.pdf
- IMF — Stablecoins in Nigeria (2026): https://www.imf.org/en/news/articles/2026/06/16/stablecoins-in-nigeria
