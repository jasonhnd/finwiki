---
source: banking/japan-stablecoin-bank-perimeter-2025
source_hash: 9c5cd29beffe66e8
lang: en
status: machine
fidelity: ok
title: "Japan stablecoin / BaaS bank perimeter (2025–2026)"
translated_at: 2026-05-30T18:52:47.781Z
---

# Japan stablecoin / BaaS bank perimeter (2025–2026)

## Wiki route

This entry sits under [[banking/INDEX|banking index]] as the bank-side perimeter view of the Japan stablecoin / electronic-payment-instrument (EPI) regulatory architecture. Read it with [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin legal regime's three-layer structure]] for the fintech-side perimeter view, with the platform anchor [[JapanFG/progmat|Progmat]] and the issuer anchors [[JapanFG/jpyc|JPYC]] · [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade USDC distribution]], with [[fintech/jp-stablecoin-progmat|jp-stablecoin-progmat detailed]] · [[fintech/jp-trust-type-sc-architecture|jp trust-type SC architecture]] · [[fintech/jp-stablecoin-dcjpy|jp-stablecoin-dcjpy]] · [[fintech/japan-stablecoin-2026-event-tracker|Japan stablecoin 2026 event tracker]] · [[fintech/japan-epi-three-types-overview|Japan EPI three types overview]] · [[fintech/japan-epi-four-camps-comparison|Japan EPI four camps comparison]] · [[fintech/institutional-stablecoin-deposit-token-thesis|institutional stablecoin deposit-token thesis]], and with the BaaS framework at [[banking/baas-japan-landscape|BaaS Japan landscape]] · [[banking/japan-baas-operating-models|Japan BaaS operating models]]. For license-stack context route through [[JapanFG/legal-financial-licenses/payment-license-stack|payment license stack]] · [[JapanFG/legal-financial-licenses/bank-license-and-baas-boundary|bank license / BaaS boundary]].

## TL;DR

By **2025**, Japan's regulatory perimeter for bank-issued digital money had hardened into a three-layer architecture under the amended Payment Services Act framework: (1) **deposit tokens** issued by **banks** under the standard Banking Act deposit-liability regime, (2) **stablecoins / electronic payment instruments (EPI)** issued under the amended Payment Services Act regime that recognizes three issuer types: bank-issued deposit-type EPI, funds-transfer-business EPI, and trust-type EPI, and distributed by a separate **EPI service provider** license, and (3) **non-issued foreign stablecoins** (USDC etc.) distributed in Japan only through the same EPI-service-provider license. The bank-side perimeter has three concrete consequences: (a) only banks can issue deposit-type EPI as bank-deposit-backed tokens; (b) only trust banks can be issuers of trust-type stablecoins under platforms like [[JapanFG/progmat|Progmat]]; (c) BaaS partner-channel distribution by banks now coexists with a separate stablecoin distribution channel under different license stacks. **MUFG's Progmat platform** (independent company since 2023-10) provides the institutional rails for trust-type SC; **JPYC** runs the funds-transfer-business-based JPY SC; **SBI VC Trade** is the single registered foreign-SC distributor for USDC. Regional-bank pilots are emerging but operationally limited as of the 2025 transition: Hokkokubank's deposit-type stablecoin **Tochika** (a tokenized deposit) launched 2024-04-01 as Japan's first such product, and Japan Post Bank announced tokenized-deposit handling via DeCurret DCP targeting FY2026.

## 1. The three-layer perimeter

| Layer | License / route | What banks can do | What banks cannot do |
|---|---|---|---|
| **Deposit token** | Banking Act standard bank deposit | Issue tokenized deposit balances backed 1:1 by deposit liabilities on the bank's balance sheet; settle peer-to-peer or commercial transactions; redeem at par | Cannot be transferred outside the bank network without legal-form change; cannot be held by non-bank-account holders directly |
| **Bank-issued EPI / Type 1 EPI** | Amended Payment Services Act — EPI issuer | Issue a regulated electronic-payment-instrument backed by deposits; distributable through bank or non-bank EPI service providers | Subject to EPI regime (KYC, redeemability, reserve, conduct rules); cannot disguise non-deposit tokens as deposit-backed |
| **Trust-type EPI / Type 3 EPI** | Amended Payment Services Act — trust-bank issuer | Trust banks can issue trust-type stablecoins where backing assets sit in trust; institutional / platform-based use case | Non-trust-banks cannot issue trust-type EPI; issuer role distinct from platform-provider role |
| **Funds-transfer EPI / Type 2 EPI** | Amended Payment Services Act — funds-transfer-business issuer | A funds-transfer business can issue a JPY stablecoin under the EPI framework | A bank as such does not need a funds-transfer-business license — different lane |
| **EPI distribution** | Amended Payment Services Act — separate distributor license | Banks or non-banks holding the EPI service-provider license can distribute EPI to customers; foreign SCs (USDC) are distributable only via this license | Distribution license does not authorise issuance |

### Deposit token — within the standard bank deposit regime

A **deposit token** is not a new legal form. The bank holds the customer deposit liability under the Banking Act; the token is a digital representation of that deposit balance on a programmable ledger. Settlement, redemption, and consumer protection all follow standard bank-deposit rules. Examples include [[fintech/jp-stablecoin-dcjpy|DCJPY]] (Decurret-anchored bank-deposit-token initiative).

| Pros for the bank | Cons for the bank |
|---|---|
| No new license; fits inside the existing Banking Act framework | Limited to bank-customer-to-bank-customer flow without further legal-form changes |
| Backing is the bank's deposit balance — already capitalised and supervised | Requires bilateral / consortium agreements to scale beyond a single bank |
| Customer protection identical to deposit | Programmability constraints from deposit-liability regulatory expectations |

### Bank-issued EPI — bridging deposit and broader circulation

The bank-issued EPI variant lets a bank issue a regulated electronic-payment-instrument whose backing is deposit liabilities but whose **circulation** can extend beyond a single bank's customer base via EPI service providers. This is the bank-side analog to the funds-transfer-type EPI that non-banks like JPYC use.

| Pros for the bank | Cons for the bank |
|---|---|
| Allows the bank's brand and balance sheet to anchor a circulating SC | Adds the EPI regulatory layer (KYC obligations on distributors, redeemability rules, reserve rules) on top of banking supervision |
| Compatible with cross-bank settlement design | Distributors must hold the EPI distributor license — adds a coordination burden |

### Trust-type EPI — the institutional-platform lane

The **trust-type SC** uses a trust structure: a trust bank serves as the issuer; the backing assets (JPY deposits at multiple banks, JGBs, etc.) sit in trust; the platform provider arranges the technology rails; institutional and corporate users hold and transact the tokens. The [[JapanFG/progmat|Progmat]] platform is the leading example.

| Pros for the bank | Cons for the bank |
|---|---|
| Trust segregation means SC holders' claim is on the trust assets, not on the trust bank's general balance sheet | Only trust-banks can issue — restricts the issuer set to a few institutions |
| Multi-asset backing enables broader institutional adoption | More operational complexity than a single-bank deposit-token model |
| Platform-provider role (Progmat) is distinct from issuer role (trust bank) — clear regulatory layering | Coordination across issuer / platform / participating-bank / EPI distributor is non-trivial |

## 3. Issuer / distributor anchor map (2025–2026)

| Token | Backing form | Issuer | Platform | Distribution | Regulatory layer |
|---|---|---|---|---|---|
| **DCJPY** (deposit token) | Bank deposit liability | Participating banks (multi-bank pilot) | DeCurret DCP | Limited / pilot | 銀行法 standard |
| **Progmat Coin (planned trust-type SC)** | Trust-held JPY assets | [[JapanFG/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust and Banking]] and other participating trust banks | [[JapanFG/progmat|Progmat]] | Bank and non-bank EPI distributors | Amended Payment Services Act trust-type EPI |
| **JPYC** | Funds-transfer business — backing held under funds-transfer-business funds-management rules | [[JapanFG/jpyc|JPYC Inc.]] | Own infrastructure | Direct + crypto exchanges | Amended Payment Services Act funds-transfer-type EPI |
| **USDC (foreign SC, distributed in Japan)** | Circle reserve | Circle (US issuer) | (foreign issuer infrastructure) | [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] — the single registered EPI distributor for USDC as of the 2025–2026 cycle | Amended Payment Services Act EPI service-provider license (distribution side only) |

### Why platform-provider ≠ issuer

- Progmat's regulatory burden is that of a technology and operating-platform provider, not a regulated financial institution.
- Issuer status, and the corresponding amended Payment Services Act obligations, sits with the trust bank — keeping the consumer-protection and SC-redemption obligations on a regulated bank balance sheet.
- Multiple trust banks can act as issuers on the same Progmat platform, enabling broader institutional adoption without bottlenecking on a single issuer.

This pattern mirrors the way [[banking/baas-japan-landscape|BaaS]] separates the **partner brand** (UX layer) from the **bank** (license + balance sheet); Progmat separates the **platform** (technology) from the **issuer** (license + backing assets).

### What regional banks can and cannot do

- **Deposit tokens** are accessible to any bank under the Banking Act — regionals can participate in multi-bank deposit-token initiatives.
- **Bank-issued EPI issuance** is open to regionals in principle, but the EPI regulatory layer adds operational and supervisory burden that may not be cost-effective for single-bank regional issuance — coordinated platform participation is the practical route.
- **Trust-type EPI issuance** requires a trust-bank license; only regionals with that license can directly participate as issuers.

### BaaS partner-channel distribution

1. **EPI distribution license overlay.** A BaaS-participating regional bank wishing to distribute SCs to its partner-brand customers needs the separate EPI service-provider license.
2. **Deposit-token integration.** A BaaS partner-brand customer journey can incorporate deposit-token settlement once the underlying bank deposits are tokenized, but this is still in pilot / planning stage as of 2025–2026 (e.g. Hokkokubank's **Tochika** live from 2024-04; Japan Post Bank tokenized-deposit handling targeted for FY2026; amended Payment Services Act promulgated 2025-06-13).

## 6. Deposit-token vs stablecoin — the operational boundary

| Dimension | Deposit token | Stablecoin / EPI |
|---|---|---|
| Legal liability | Bank-deposit liability under the Banking Act | EPI under the amended Payment Services Act (deposit-, funds-transfer-, or trust-type backing) |
| Who can issue | Banks | Banks (deposit-type + trust-type via trust bank), funds-transfer businesses (funds-transfer-type) |
| Customer relationship | Bank-customer-of-the-issuer | Holder-of-the-EPI; not necessarily a bank customer |
| Deposit insurance | Standard 預金保険 coverage | Does not apply to EPI — replaced by EPI-regime reserve / segregation rules |
| Cross-institution transferability | Constrained to bank network without further legal-form change | Built for circulation via EPI distributors |
| Programmability | Limited by deposit-liability constraints | Higher programmability under EPI framework |
| Use cases | Inter-bank settlement, corporate treasury, conditional payments | Retail / institutional circulation, cross-platform settlement |
| Reserves | Bank-balance-sheet liabilities matched by bank-asset side | EPI-specific reserve / trust rules |

## 7. The four EPI camps (cross-cutting summary)

| Camp | Lead operator | Legal form | Coverage |
|---|---|---|---|
| Trust-type / institutional | [[JapanFG/progmat|Progmat]] platform + participating trust banks | Trust-type EPI | Institutional, corporate, cross-bank settlement |
| Funds-transfer-type / retail JPY | [[JapanFG/jpyc|JPYC]] | Funds-transfer-type EPI | Retail JPY SC, crypto-exchange-distributed |
| Foreign-SC distribution | [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] (USDC distributor) | EPI service-provider license (distribution only) | Distribution of Circle's USDC to Japanese users |
| Deposit-token (bank-rails) | DCJPY (DeCurret + participating banks) | Banking Act standard deposit liability | Inter-bank settlement, corporate treasury |

For deeper comparison of the four camps and three issuer types, see [[fintech/japan-epi-four-camps-comparison|Japan EPI four camps comparison]] and [[fintech/japan-epi-three-types-overview|Japan EPI three types overview]].

## Related

- [[banking/INDEX]]
- [[banking/baas-japan-landscape]]
- [[banking/japan-baas-operating-models]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/minna-bank-baas-model]]
- [[banking/mercari-bank-license-stack]]
- [[banking/gmo-aozora-net-bank]]
- [[banking/japan-net-bank-competition-map]]
- [[banking/post-megabank-positioning]]
- [[JapanFG/INDEX]]
- [[JapanFG/progmat]]
- [[JapanFG/jpyc]]
- [[JapanFG/mufg]]
- [[JapanFG/mitsubishi-ufj-trust-bank]]
- [[JapanFG/sumitomo-mitsui-trust]]
- [[JapanFG/mizuho-trust-bank]]
- [[JapanFG/legal-financial-licenses/payment-license-stack]]
- [[JapanFG/legal-financial-licenses/bank-license-and-baas-boundary]]
- [[fintech/japan-stablecoin-regulatory-landscape]]
- [[fintech/jp-stablecoin-progmat]]
- [[fintech/jp-trust-type-sc-architecture]]
- [[fintech/jp-stablecoin-dcjpy]]
- [[fintech/japan-stablecoin-2026-event-tracker]]
- [[fintech/japan-epi-three-types-overview]]
- [[fintech/japan-epi-four-camps-comparison]]
- [[fintech/institutional-stablecoin-deposit-token-thesis]]
- [[fintech/stablecoin-channel-japan-sbi-jpyc-ring]]
- [[exchanges/jp-exchange-jpyc]]
- [[exchanges/jp-exchange-sbi-vc-trade]]

## Sources

- FSA registered EPI service providers list (https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx).
- FSA registered funds-transfer service providers list (https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf).
- FSA licensed bank list (https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx).
- Payment Services Act — amended Payment Services Act (e-Gov legal database: https://elaws.e-gov.go.jp/document?lawid=421AC0000000059).
- Progmat company outline / concept / press releases (https://progmat.co.jp/about/, https://progmat.co.jp/concept/, https://progmat.co.jp/en/news/2023-09-11-press/).
- JPYC corporate site (https://jpyc.co.jp/).
- SBI VC Trade USDC product page (https://www.sbivc.co.jp/usdc).
- Hokkokubank news release on the launch of Tochika, Japan's first deposit-type stablecoin (2024-04-01, https://www.hokkokubank.co.jp/other/news/2024/pdf/20240401a.pdf) — leading regional-bank deposit-token example.
- BUSINESS LAWYERS article on the amended Payment Services Act overview and practical response for June 2026 enforcement (https://www.businesslawyers.jp/articles/1476) — amended Payment Services Act promulgated 2025-06-13 / enforced 2026-06, with regional-bank and Japan Post Bank tokenized-deposit trends targeting FY2026.
