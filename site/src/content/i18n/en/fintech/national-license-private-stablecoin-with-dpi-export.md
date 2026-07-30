---
source: fintech/national-license-private-stablecoin-with-dpi-export
source_hash: 7353f599606f64c7
lang: en
status: machine
fidelity: ok
title: "Digital Public Infrastructure and Digital-Currency Export"
translated_at: 2026-07-30T02:03:00+09:00
---
# Digital Public Infrastructure and Digital-Currency Export


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> India has verifiable digital public infrastructure in UPI and Aadhaar, as well as the RBI's digital rupee (e₹). By contrast, the primary sources from authorities and operators reviewed as of July 30, 2026 do not establish that “ARC token × Polygon” launched in 2026-Q1 as a government-authorized private stablecoin, that it was integrated with UPI, Aadhaar, or MOSIP, or that it would be exported to an anti-dollar alliance. This entry separates verified DPI from an unverified private-stablecoin concept.

## Verified components

The table below is based on the [RBI e₹ FAQ](https://www.rbi.org.in/scripts/FAQView.aspx?Id=169), [NPCI UPI statistics](https://www.npci.org.in/product/upi/product-statistics), [UIDAI authentication information](https://uidai.gov.in/en/ecosystem/authentication-ecosystem.html), and [MOSIP's official description](https://www.mosip.io/mosip_project). Each layer has a different operator, legal character, and function; the layers do not automatically form one product.

| Layer | Verified status | What this evidence alone does not establish | Source |
|---|---|---|---|
| UPI | A bank-account-based instant-payment interface operated by NPCI. Official statistics publish participating banks, volume, and value each month | That UPI is itself a blockchain or stablecoin | [NPCI](https://www.npci.org.in/product/upi/product-statistics) |
| Aadhaar | India's identity infrastructure, administered by UIDAI. Authentication and eKYC are subject to law, consent, and authorized-entity requirements | That any private token can connect directly to Aadhaar | [UIDAI](https://uidai.gov.in/en/ecosystem/authentication-ecosystem.html) |
| e₹ | A central bank digital currency issued by the RBI, with retail and wholesale pilots. e₹ and UPI are legally and functionally distinct | That it is a privately issued stablecoin or an ARC token on Polygon | [RBI](https://www.rbi.org.in/scripts/FAQView.aspx?Id=169) |
| MOSIP | A modular open-source platform that countries can use to build foundational identity systems | That MOSIP is Aadhaar itself or the KYC infrastructure for an ARC token | [MOSIP](https://www.mosip.io/mosip_project) |
| Private rupee stablecoin | A hypothetical layer examined by this entry | Government authorization, issuer, reserves, chain, launch date, or DPI integration | No primary source verified |

## Relationship between e₹ and UPI

The RBI distinguishes e₹, a digital form of the rupee, from UPI, a payment method. Even where an e₹ wallet can scan a UPI QR code, the bank deposit behind UPI does not become e₹ and NPCI does not issue e₹. An assessment must separate:

- **Currency and obligor:** central bank money, a commercial-bank deposit, or a private issuer's liability.
- **Access and identity:** the respective roles of UIDAI, banks or non-banks, and wallet providers.
- **Payment message and settlement asset:** the UPI interface should not be confused with the e₹, bank deposit, or token that actually moves.
- **What is exported:** software, standards, operational know-how, legal frameworks, and currency itself are different exports.

## Minimum evidence for a “nationally licensed private stablecoin”

Describing this model as a real project requires at least:

1. issuer authorization or registration from the central bank or financial supervisor;
2. law or product disclosure defining the issuer, redemption right, reserves, audit, and bankruptcy remoteness;
3. issuer information tying the product to a chain and contract;
4. confirmation of integration from the operators of UPI, Aadhaar, and MOSIP; and
5. for cross-border use, a published agreement from authorities and operators in the destination country.

Without that evidence, figures or policy claims such as “world first,” “single issuer,” “agreements with 30 or more countries,” “35% of global GDP,” or an “anti-US-dollar alliance” should not be treated as facts.

## Permitted analytical use

Combining DPI and digital currency can be a subject of comparative research. However, India's e₹, Brazil's DREX, Nigeria's eNaira, and BIS mBridge differ in issuer, legal nature, participants, and implementation stage. Claims that a CBDC underperformed and caused a pivot to private stablecoins, that an external L1 was adopted, or that a non-dollar bloc is being formed should be added only after confirmation by the relevant authorities.

The [IMF's India Stack analysis](https://www.imf.org/en/Publications/fintech-notes/Issues/2023/06/29/Stacking-up-the-Benefits-Lessons-from-Indias-Digital-Journey-520125) examines the benefits and policy challenges of combining public layers such as identity, payments, and data exchange; it does not approve a particular private stablecoin. When assessing DPI export, track technical adoption, government cooperation, commercial deployment, and currency-bloc formation with separate evidence.


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/stablecoin-chain-sovereign-currency-divide|ステーブルコイン 5 極地政学対立]]
- [[fintech/em-market-crypto-dollarization-pattern|新興市場暗号ドル化]]
- [[fintech/three-circles-stablecoin-mra-framework|US/EU/Japan stablecoin market-access comparison]]
<!-- /wiki-links:managed -->
