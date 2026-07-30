---
source: fintech/brazil-mexico-cbdc-stablecoin-push-2026
source_hash: 820a1911f27a95bf
lang: en
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "Brazil Drex × Mexico CoDi / MXNB · public and private digital-money routes 2026"
translated_at: 2026-07-29T16:39:22.568Z
---
# Brazil Drex × Mexico CoDi / MXNB · public and private digital-money routes 2026

## TL;DR

Brazil and Mexico do not follow the same digital-money route. Brazil's **Drex** is a regulated-intermediary DLT platform developed by Banco Central do Brasil (BCB); as of 2026-07-30, the official page says that pilot user transactions are simulated and marks Phase 2 as concluded. Mexico's **CoDi** is a QR / NFC payment service operated by Banxico on SPEI, not a CBDC. On the private side, Juno, a Bitso group company, issues **MXNB** (MXN, Arbitrum) and **BRL1** (BRL, Polygon). This revision removes the previous claims about joint issuance by Mercado Bitcoin / M0 and the invented circulating supply and monthly flows, a Drex launch date, and unverified 2026 statements by CVM / Banxico.

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/em-market-crypto-dollarization-pattern|EM-market crypto-dollarization pattern]], [[fintech/brazil-drex-timeline-2026|Brazil Drex timeline]], and [[fintech/m0-network-infrastructure-update-2026|M0 infrastructure update]].

## Verified programme map

The table below is based on the [BCB Drex page](https://www.bcb.gov.br/en/financialstability/drex_en), [BCB pilot page](https://www.bcb.gov.br/estabilidadefinanceira/piloto-drex), [Banxico CoDi page](https://www.banxico.org.mx/sistemas-de-pago/codi-cobro-digital-banco.html), and [Juno operations documentation](https://docs.bitso.com/juno/docs/overview-of-basic-operations), reviewed on 2026-07-30.

| Route | Operator / issuer | Public status | Settlement / backing |
|---|---|---|---|
| Drex platform | Banco Central do Brasil plus regulated pilot participants | Pilot; end-user operations are simulated on the pilot page | Drex wholesale / retail representations and tokenized regulated balances within the test environment |
| Pix | Banco Central do Brasil ecosystem | Production instant-payment rail | Commercial-bank / payment-account money; not a CBDC |
| CoDi | Banco de México / SPEI participants | Production request-to-pay / QR-NFC service | SPEI-linked bank-account payment; not a CBDC |
| MXNB | Juno, a Bitso company | Business-facing mint / redeem product | 1:1 MXN; official docs list Arbitrum |
| BRL1 | Juno, a Bitso company | Business-facing mint / redeem product | 1:1 BRL; official docs list Polygon |

## Drex: what the official pilot establishes

BCB describes the Drex Platform as a DLT ecosystem where regulated intermediaries convert balances of demand deposits and electronic money so clients can access smart financial services. It is therefore inaccurate to describe every retail-facing balance as a direct BCB account or to equate Drex with a public-chain stablecoin.

The [Drex pilot page](https://www.bcb.gov.br/estabilidadefinanceira/piloto-drex) states:

- end users are not pilot participants; their operations are simulated;
- Phase 1 and Phase 2 are marked concluded;
- Phase 2 involved 16 consortia / companies and 13 selected use-case themes;
- tested themes included receivables, collateralized credit, government bonds, trade finance, FX optimization, debentures, agribusiness assets, vehicles, real assets and public-network assets.

The BCB's Phase 1 report says privacy, data protection and security still required further research. No dated nationwide launch commitment should be inferred from a pilot completion.

## CoDi: payment rail, not digital peso

[Banxico's CoDi page](https://www.banxico.org.mx/sistemas-de-pago/codi-cobro-digital-banco.html) describes CoDi as a payment / collection mechanism using QR and NFC messages over participating financial institutions and SPEI. This page does not establish that Banxico has permanently rejected a retail CBDC, nor does it support the former monthly-volume and merchant-count forecasts. CoDi should be compared with Pix or UPI as an instant-payment access layer, not labelled a Mexican CBDC.

## MXNB and BRL1: named issuer and chain

[Bitso's MXNB product page](https://bitso.com/br/business/products/mxnb-stablecoin) identifies Juno, a Bitso company, as issuer and states 1:1 MXN backing by pesos and cash equivalents held at regulated institutions. [Juno's operations documentation](https://docs.bitso.com/juno/docs/overview-of-basic-operations) lists:

- **MXNB** — 1:1 MXN, deployed on Arbitrum, mint / redeem via SPEI or Bitso Transfer;
- **BRL1** — 1:1 BRL, deployed on Polygon, mint / redeem through Bitso Transfer.

The official sources reviewed do not name M0 or Mercado Bitcoin as co-issuers. They also do not support the former Base / Ethereum / Polygon chain list for MXNB, a $25M circulation snapshot, or a claim that Banxico “tolerates” the product as monetary policy.

## Comparison boundaries

The following table shows the comparison boundaries that can be established from [BCB Drex](https://www.bcb.gov.br/en/financialstability/drex_en), [Banxico CoDi](https://www.banxico.org.mx/sistemas-de-pago/codi-cobro-digital-banco.html), and the [Juno operations docs](https://docs.bitso.com/juno/docs/overview-of-basic-operations). Do not add market share or an anti-dollarization effect without a dated transaction dataset.

| Question | Brazil | Mexico |
|---|---|---|
| Central-bank digital-money workstream | Drex pilot | Not established by CoDi materials |
| Production instant-payment rail | Pix | SPEI / CoDi |
| Named private local-currency token in reviewed sources | BRL1 by Juno | MXNB by Juno |
| Public-chain deployment in issuer docs | BRL1 on Polygon | MXNB on Arbitrum |
| End-user CBDC issuance proven by these sources | No; pilot users simulated | No |
| Official launch date / adoption figure | Not asserted without a dated BCB release | Not asserted from CoDi landing page |

## Due-diligence implications

1. Keep **pilot**, **production payment rail**, and **private token issuance** as separate statuses.
2. Verify issuer identity and redemption contract; a distributor's brand is not automatically the legal issuer.
3. Capture circulating supply and attestation with an explicit date and contract address.
4. Do not infer government approval, policy endorsement or monetary-policy intent from a token being available through a regulated company.
5. Cross-border availability does not waive FX, AML/CFT, tax or remittance rules.

## Related

- [[fintech/INDEX|FinWiki Fintech Index]]
- [[fintech/em-market-crypto-dollarization-pattern|EM-market crypto-dollarization pattern]]
- [[fintech/brazil-drex-timeline-2026|Brazil Drex timeline]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture overview]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|Three paradigms of CBDC multi-tier architecture]]
- [[fintech/m0-network-infrastructure-update-2026|M0 2026 infrastructure update]]
- [[fintech/fatf-travel-rule-overview|FATF Travel Rule]]

## Sources

- Banco Central do Brasil — Drex: https://www.bcb.gov.br/en/financialstability/drex_en
- Banco Central do Brasil — Piloto Drex: https://www.bcb.gov.br/estabilidadefinanceira/piloto-drex
- Banco Central do Brasil — Phase 2 themes: https://www.bcb.gov.br/en/pressdetail/2573/nota
- Banco de México — CoDi: https://www.banxico.org.mx/sistemas-de-pago/codi-cobro-digital-banco.html
- Bitso Business — MXNB: https://bitso.com/br/business/products/mxnb-stablecoin
- Juno docs — MXNB / BRL1 operations: https://docs.bitso.com/juno/docs/overview-of-basic-operations
