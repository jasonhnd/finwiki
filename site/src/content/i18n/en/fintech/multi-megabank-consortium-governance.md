---
source: fintech/multi-megabank-consortium-governance
source_hash: 37f39084a648bb79
lang: en
status: machine
fidelity: ok
title: "Multi-Megabank Consortium Governance"
translated_at: 2026-07-30T00:00:00+09:00
---

# Multi-Megabank Consortium Governance

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|Japan's financial-regulation framework for tokens, cryptoassets, and payments]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|the three-layer structure of Japan's stablecoin regime]] for the broader system boundary.

> [!info] TL;DR
> The public record establishes that Progmat is an independent company formed on 2023-10-02 with eight shareholders spanning IT, banks, and exchange-related entities; Mitsubishi UFJ Trust and Banking Corporation held the largest disclosed stake at 49.0%. This shows multi-party ownership, but it does not prove decision-making speed, FSA guidance requiring "non-control," customer reach, or superior scalability. BIS Project Agorá is not a jointly owned company; it is a public-private project convened by the BIS and IIF with central banks and private financial institutions, and it published a prototype report in 2026. The two are useful governance comparators, but they are neither the same legal form nor direct competitors. ^[source:Progmat corporate release 2023-10-02; BIS Project Agorá project page and report 2026-05-27]

## Forms verifiable in the public record

| Case | Legal and organizational form | Participation structure verifiable in public materials | What these materials alone cannot establish |
|---|---|---|---|
| Progmat | A stock company formed on 2023-10-02 | Eight shareholders. Mitsubishi UFJ Trust and Banking Corporation 49.0%, NTT DATA 13.5%, and six others | Decision speed, substantive control, the FSA's design intent, or higher scalability than other models |
| BIS Project Agorá | A BIS / IIF public-private project; a prototype, not a finished product | The BIS 2026 project page lists eight central banks and more than 40 financial institutions | Equity ownership, a permanent legal entity, commercial launch, or each participant's exit constraints |

Source note: Progmat facts come from its [2023-10-02 corporate release](https://progmat.co.jp/press/pdf/press231002_01.pdf). Agorá facts come from the current [BIS project page](https://www.bis.org/about/bisih/topics/fmis/agora.htm) and [2026 prototype report](https://www.bis.org/publ/othp110.pdf).

## Progmat's formation-date shareholding structure

| Shareholder | Stake disclosed on 2023-10-02 |
|---|---:|
| [[megabanks/mufg|Mitsubishi UFJ Trust and Banking Corporation]] | 49.0% |
| NTT DATA | 13.5% |
| Mizuho Trust & Banking | 7.5% |
| Sumitomo Mitsui Trust Bank | 7.5% |
| [[megabanks/smfg|Sumitomo Mitsui Financial Group]] | 7.5% |
| SBI PTS | 5.0% |
| JPX Market Innovation & Research | 5.0% |
| Datachain | 5.0% |

Source note: the exact company names and percentages are reproduced from Progmat's [new-management and disclosure release](https://progmat.co.jp/press/pdf/press231002_01.pdf). They describe the disclosed formation-date cap table; current ownership must be rechecked if a later primary disclosure is published.

## What should not be inferred from ownership structure

- A 49.0% stake being below a majority does not, by itself, determine "control" under accounting, company law, or contract.
- The public materials do not support the claim that "49% was deliberately set at the FSA's direction."
- The shareholding structure does not mean that the FSA approved a specific stablecoin or common infrastructure.
- DCC membership, customer count, transaction volume, benefits to competing banks, and exit options each require separate evidence.
- Ranking the speed or scalability of "single-bank ownership," "interbank JV," and "independent company" models requires common metrics and an observation period.

## Contrast with BIS Project Agorá

| Axis | Progmat | BIS Project Agorá |
|---|---|---|
| Organization | Japanese stock company | Public-private project convened by the BIS / IIF |
| Form of participation | Eight shareholders, as disclosed at formation | BIS page: eight central banks and more than 40 financial institutions |
| Publicly described subject | Company providing a digital-asset issuance and management platform | Wholesale cross-border prototype using tokenized central-bank reserves and tokenized commercial-bank deposits |
| Output as of 2026-07 | Going concern; the status of each product must be checked separately | 2026-05-27 report / prototype; the BIS says it is not a finished product |
| Comparative limit | A company's cap table is separate from product governance | Project participation is not equity ownership |

Source note: Progmat's form and formation cap table use its [corporate release](https://progmat.co.jp/press/pdf/press231002_01.pdf); Agorá's participant count, asset model, and prototype boundary use the [BIS current project page](https://www.bis.org/about/bisih/topics/fmis/agora.htm).

## Common risks

The following are not events already shown to have occurred; they are an analytical checklist for examining multi-party governance.

- **Decision rights**: Examine board-nomination rights, vetoes, and reserved matters, not only equity percentages.
- **Economic interests**: Examine the allocation of dividends, usage fees, IP, data, and product-level revenue.
- **Participation and exit**: Separate share-transfer restrictions, project participation, and service-contract termination conditions.
- **Regulatory responsibility**: Separate the responsibilities of the platform company, issuer, trustee, distributor, and participant.
- **Outcomes**: Do not infer launch, volume, availability, latency, or cost from the governance form.

## Applications

- Structural analysis of any "common fintech infrastructure across multiple megabanks" discussion
- A reference for SC consortium designs in South Korea / Taiwan / other Asian countries
- A governance comparison for the interconnection of mBridge / Project Nexus / IPS-RTGS
- As an evolution of existing "industry-common infrastructure" such as DTCC / Visa / Mastercard
- A two-tier structural design of a central-bank consortium + a private-sector SC consortium

---


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/jp-trust-type-sc-architecture|Japan's trust-type SC architecture]]
- [[fintech/cross-border-sc-via-swift-api|Cross-border SC via SWIFT API]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]]
- [[fintech/japan-stablecoin-regulatory-landscape|Three-layer structure of Japan's stablecoin regime]]
- [[fintech/central-banking-function-unbundling|Five-layer unbundling of central-banking functions]]
<!-- /wiki-links:managed -->
