---
source: fintech/fatf-travel-rule-overview
source_hash: ce86c0827eac721b
lang: en
status: machine
fidelity: ok
title: "FATF Travel Rule · R.16  VASP $1,000 K KYC Information Transmission"
translated_at: 2026-05-31T06:16:15.754Z
---

# FATF Travel Rule · R.16  VASP $1,000 K KYC Information Transmission

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> FATF Recommendation 16  is the global VASP industry's unified AML/CFT information-transmission standard — when a VASP transfer reaches or exceeds USD/EUR 1,000 , sharing of originator and beneficiary KYC information is mandatory. It is a transplant of the 1996  BSA Travel Rule into the crypto asset domain. The BTS (Business-To-Service) layer of Notabene / TRISA / Sygna / TRP etc. has become mandatory compliance infrastructure — without connection to a Travel Rule protocol, a VASP cannot obtain operating qualification.

## Key facts

- FATF established in 1989  by G7  · 40  member countries + 9  regional bodies ^[extracted]
- R.15  + R.16  crypto extension at 2019-06  G20  Osaka summit ^[extracted]
- R.16  threshold: USD/EUR 1,000  global floor ^[extracted]
- 1996  BSA Travel Rule (31  CFR §1010.410(f)) originally covered only ≥ $3,000  wire transfers ^[extracted]
- 2019-05  FinCEN FIN-2019-G001  clarified BSA Travel Rule application to CVCs ^[extracted]
- 2024  US FATF MER rated "Largely Compliant" ^[extracted]
- 2026-Q3  FinCEN proposed reducing US threshold from $3,000  to $1,000  (aligning with FATF) ^[extracted]

## Mechanism / How it works

R.16  requires that for VASP transfers ≥ USD/EUR 1,000 , the following must be shared: **Originator** name + account number / wallet address, **Beneficiary** name + account number / wallet address. VASP-to-VASP information sharing is mandated. The biggest technical challenge: CVC transfers are often sent to wallet addresses, not to institutions → the lack of a "receiving financial institution" concept gave birth to the BTS (Business-To-Service) protocol layer.

**Major BTS protocols**:
- **Notabene** (US 2020  · largest market share): Bitstamp / Luno / OKX
- **TRISA** (open-source · distributed TLS): Binance (partial)
- **Sygna Bridge** (CoolBitX · Asia-Pacific priority): South Korea / Taiwan VASPs
- **TRP** (TRP Group · OpenAPI): Coinbase / Kraken / Gemini
- **Shyft** (token incentive · on-chain discovery): early participant
- **OpenVASP** (Europe · EVM-based): early European

Interoperability problem: protocols are mutually incompatible → multi-protocol connection or choice of largest network is required. Notabene + TRP together cover approximately 80% of global VASP flow volume for 2026 年. For Travel Rule implementation within Japan VASP self-regulation, see [[exchanges/jvcea-self-regulatory-overview|JVCEA 自主規制概観]]; for Japan VASP timeline, see [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 規制タイムライン]].

## Origin & evolution

1996  FinCEN + Fed jointly issued the BSA Travel Rule (31  CFR §1010.410(f)), originally covering only ≥ $3,000  wire transfers. 2019-05  FinCEN FIN-2019-G001  clarified BSA Travel Rule application to CVCs. 2019-06  G20  Osaka summit: FATF announced R.15  + R.16  crypto extension → global floor established. 2024-12-30 EU Transfer of Funds Regulation (TFR) 2023/1113  set EU threshold at EUR 0  (strictest). 2026-Q3  FinCEN proposed reducing US threshold from $3,000  to $1,000  (aligning with FATF). For cross-border four-layer stack details, see [[fintech/fatf-travel-rule-cross-border-stack|FATF Travel Rule クロスボーダー stack]].

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/fatf-travel-rule-cross-border-stack|FATF Travel Rule クロスボーダー四層 stack]]
- [[fintech/aml-cft-fatf-grey-list-overview|FATF グレーリスト概観]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 詳細]]
<!-- /wiki-links:managed -->

## Sources
