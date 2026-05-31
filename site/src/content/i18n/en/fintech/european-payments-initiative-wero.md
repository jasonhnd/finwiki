---
source: fintech/european-payments-initiative-wero
source_hash: 2669900e4bf06bee
lang: en
status: machine
fidelity: ok
title: "European Payments Initiative · Wero · European Bank Consortium Retail Payment Wallet · Competing with PayPal / Apple Pay"
translated_at: 2026-05-31T06:16:15.733Z
---

# European Payments Initiative · Wero · European Bank Consortium Retail Payment Wallet · Competing with PayPal / Apple Pay

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/e-euro-retail-rollout|digital euro retail rollout]] for the ECB-issued retail money parallel track, and with [[fintech/fnality-wholesale-settlement|Fnality]] for the wholesale-side European bank-consortium pattern (Wero is the retail mirror).

> [!info] TL;DR
> The European Payments Initiative (EPI Company SE, registered in Belgium) is a retail payment consortium jointly founded in 2020 年 by 14 行 major European banks + Worldline + Nexi. Its flagship product, the **Wero wallet**, **launched progressively from 2024 年 7 月 across 4  countries — DE / FR / BE / NL** — with P2P transfers first, followed by merchant payments and online checkout in phased releases. Wero's fundamental purpose = enabling European banks to **reclaim retail payment sovereignty** against non-European platforms such as PayPal / Apple Pay / Google Pay / Visa-Mastercard. It is built on **SEPA Instant Credit Transfer (SCT Inst)**, forming a "bank consortium vs direct central-bank issuance" binary choice / parallel structure with the ECB's planned [[fintech/e-euro-retail-rollout|digital euro]].

## Key facts

- Registered entity: EPI Company SE · Brussels · established 2020-Q3  ^[extracted]
- Shareholders / member banks: BNP Paribas, BPCE, Crédit Mutuel, Deutsche Bank, DZ Bank, ING, KBC, La Banque Postale, Nationale-Nederlanden, Rabobank, Santander, Société Générale, Sparkassen-Finanzgruppe, UniCredit + Worldline + Nexi ^[extracted]
- Wero launch: 2024-07  (DE / FR debut, P2P) → 2024-Q4  (BE / NL P2P) → 2025-Q2  (online merchant checkout) → 2026-Q1  (NFC in-store, expansion to other EU countries) ^[extracted]
- Users: ~**30M+** Wero registered users (2026-Q1  consortium announcement) ^[extracted]
- Underlying payments: SEPA Instant Credit Transfer (SCT Inst, final settlement within 10  seconds) ^[extracted]
- Cumulative equity / development investment: ~€1.5B+ (multiple funding rounds 2020-2024 ) ^[extracted]
- Departures / withdrawals: Spain's BBVA, Italy's Intesa Sanpaolo, etc. withdrew in 2022-2023  → consortium shrank from 31 行 to 14 行 members ^[extracted]
- Interoperability with EBA Clearing / SCT Inst: Wero transfers run on RT1  / TIPS rails (Eurosystem TARGET Instant Payment Settlement) ^[extracted]

## Mechanism / How it works

Wero's core model = **"European bank consortium retail payment wallet"** where users of 14 行 member banks can directly conduct **P2P transfers (using phone number or email address) + merchant checkout + NFC in-store** within 10  seconds via SCT Inst. **Key distinction**: PayPal / Apple Pay leave European consumer payment data and interchange revenue in the United States; Wero retains those values within the European banking system. This is a European instance of [[fintech/jurisdiction-list-monetary-protectionism|管轄区域通貨保護主義]] — not blocking foreign participants, but building a parallel system.

Technology / regulatory stack: The underlying infrastructure is [[systems/sepa-instant-overview|SEPA Instant Credit Transfer]] (final settlement within 10  seconds, dual EBA Clearing RT1  + Eurosystem TIPS rails); Wero is the UX / addressing layer on top of SCT Inst (users use phone number / email address instead of IBAN). **No stablecoins / tokens / blockchain are used** — it is a "modernisation of traditional payments" path operating entirely within SEPA, fundamentally contrasting with the "on-chain dollar" path of [[fintech/circle-usdc-stablecoin|USDC]] / [[fintech/stripe-usdb-bridge-stablecoin|USDB]].

Relationship with [[fintech/e-euro-retail-rollout|digital euro]]: **The degree of goal overlap between the two is 80%** — both are solutions for European retail payment sovereignty. The ECB's digital euro is a centrally issued retail currency (CBDC); Wero is a commercial solution from the bank consortium. **The ECB's actual strategy = design the digital euro to be "distributed via banks + wallets such as Wero" rather than a full replacement** → this positions Wero as one of the key retail distribution channels for the digital euro, consistent with the "two-tier distribution" model in [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ]].

## Origin & evolution

2020-Q3 : EPI Company SE founded = 31 行 European banks + 2  PSPs (Worldline / Nexi) as co-founders, with the goal of "pan-European payment solution = card + wallet + instant payment." 2021-2022 : Strategic repositioning — abandoned building a proprietary card scheme (cost of direct competition with Visa/MA too high) → focused on wallet + SCT Inst. **2022 : BBVA / Intesa / Commerzbank etc. withdrew**; consortium shrank from 31 行 to ~16 行 members (later stabilised at 14 行) — a classic governance friction as in [[fintech/multi-megabank-consortium-governance|多大銀行連邦ガバナンス]]. 2023-Q4 : Acquired French **Payconiq International** (existing P2P wallet in BE/NL/LU) = Wero prototype takes shape. **2024-07 : Wero debut** — DE (Deutsche Bank / Sparkassen) + FR (BPCE / SocGen / Crédit Mutuel), P2P transfers first. 2024-Q4 : BE/NL join. 2025-Q2 : Online checkout phase. 2026-Q1 : NFC in-store + EU expansion plan. **Key event**: 2025  EU **Instant Payments Regulation** mandates SCT Inst support (10  seconds + no additional fees) for all banks in the EUR zone → Wero directly benefits, as Wero's UX is the wallet layer on SCT Inst. 2026-Q2 : Wero users 30M+, with almost no overlap with [[fintech/circle-usdc-stablecoin|USDC]]'s European retail reach (USDC is primarily crypto-native users).

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/e-euro-retail-rollout|digital euro retail rollout]]
- [[fintech/fnality-wholesale-settlement|Fnality]]
- [[fintech/multi-megabank-consortium-governance|多大銀行連邦ガバナンス]]
- [[fintech/mica-overview|MiCA]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ]]
- [[fintech/jurisdiction-list-monetary-protectionism|管轄区域通貨保護主義]]
- [[fintech/circle-usdc-stablecoin|Circle USDC / EURC]]
- [[fintech/stripe-usdb-bridge-stablecoin|Stripe USDB]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC 採用カーブ]]
<!-- /wiki-links:managed -->

## Sources

- https://www.epicompany.eu/ — European Payments Initiative SE official homepage
- https://www.wero-wallet.eu/ — Wero wallet official homepage
- https://www.epicompany.eu/news — EPI news releases
- https://www.ecb.europa.eu/paym/intro/news/html/index.en.html — ECB payment systems news
- https://www.bundesbank.de/en/tasks/payment-systems — Bundesbank payment systems page (EPI/Wero DE side)
