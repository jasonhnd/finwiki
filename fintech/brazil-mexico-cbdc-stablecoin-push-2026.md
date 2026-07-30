---
title: Brazil Drex × Mexico CoDi / MXNB · public and private digital-money routes 2026
aliases:
  - brazil-mexico-cbdc-stablecoin-push-2026
  - DREX 2026
  - Brazil CBDC stablecoin
  - Mexico Banxico CoDi
  - MXNB
  - BRL1
  - LatAm CBDC parallel
domain: fintech
created: 2026-05-25
last_updated: 2026-07-30
last_tended: 2026-07-30
review_by: 2026-11-25
confidence: likely
tags: [fintech, stablecoin, cbdc, brazil, mexico, latam, drex, banxico, 2026-event]
status: active
sources:
  - https://www.bcb.gov.br/en/financialstability/drex_en
  - https://www.bcb.gov.br/estabilidadefinanceira/piloto-drex
  - https://www.bcb.gov.br/en/pressdetail/2573/nota
  - https://www.banxico.org.mx/sistemas-de-pago/codi-cobro-digital-banco.html
  - https://bitso.com/br/business/products/mxnb-stablecoin
  - https://docs.bitso.com/juno/docs/overview-of-basic-operations
---

# Brazil Drex × Mexico CoDi / MXNB · public and private digital-money routes 2026

## TL;DR

Brazil と Mexico の digital-money route は同じではない。Brazil の **Drex** は Banco Central do Brasil (BCB) が進める regulated-intermediary 型 DLT platform であり、2026-07-30 時点の公式ページでは pilot の利用者取引は simulation、Phase 2 は終了表示である。Mexico の **CoDi** は Banxico が運営する SPEI 上の QR / NFC payment service で、CBDC ではない。民間側では Bitso group の Juno が **MXNB**（MXN、Arbitrum）と **BRL1**（BRL、Polygon）を発行する。従来このページにあった Mercado Bitcoin / M0 共同発行、架空の circulating supply、月次 flow、Drex launch date、CVM / Banxico の未確認 2026 statement は削除した。

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/em-market-crypto-dollarization-pattern|EM 市場暗号ドル化パターン]], [[fintech/brazil-drex-timeline-2026|Brazil Drex timeline]], and [[fintech/m0-network-infrastructure-update-2026|M0 infrastructure update]].

## Verified programme map

下表は [BCB Drex page](https://www.bcb.gov.br/en/financialstability/drex_en)、[BCB pilot page](https://www.bcb.gov.br/estabilidadefinanceira/piloto-drex)、[Banxico CoDi page](https://www.banxico.org.mx/sistemas-de-pago/codi-cobro-digital-banco.html)、[Juno operations documentation](https://docs.bitso.com/juno/docs/overview-of-basic-operations) に基づく（2026-07-30 確認）。

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

以下の表は [BCB Drex](https://www.bcb.gov.br/en/financialstability/drex_en)、[Banxico CoDi](https://www.banxico.org.mx/sistemas-de-pago/codi-cobro-digital-banco.html)、[Juno operations docs](https://docs.bitso.com/juno/docs/overview-of-basic-operations) から確定できる比較範囲を示す。market share や anti-dollarization effect は dated transaction dataset がなければ付与しない。

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
- [[fintech/em-market-crypto-dollarization-pattern|EM 市場暗号ドル化パターン]]
- [[fintech/brazil-drex-timeline-2026|Brazil Drex timeline]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ概要]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 多層アーキテクチャ三パラダイム]]
- [[fintech/m0-network-infrastructure-update-2026|M0 2026 インフラ更新]]
- [[fintech/fatf-travel-rule-overview|FATF Travel Rule]]

## Sources

- Banco Central do Brasil — Drex: https://www.bcb.gov.br/en/financialstability/drex_en
- Banco Central do Brasil — Piloto Drex: https://www.bcb.gov.br/estabilidadefinanceira/piloto-drex
- Banco Central do Brasil — Phase 2 themes: https://www.bcb.gov.br/en/pressdetail/2573/nota
- Banco de México — CoDi: https://www.banxico.org.mx/sistemas-de-pago/codi-cobro-digital-banco.html
- Bitso Business — MXNB: https://bitso.com/br/business/products/mxnb-stablecoin
- Juno docs — MXNB / BRL1 operations: https://docs.bitso.com/juno/docs/overview-of-basic-operations
