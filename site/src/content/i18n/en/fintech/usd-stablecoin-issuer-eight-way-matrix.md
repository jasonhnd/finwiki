---
source: fintech/usd-stablecoin-issuer-eight-way-matrix
source_hash: e3ea42d3c4ac57da
lang: en
status: machine
fidelity: ok
title: "USD-denominated token products comparison — USDT / USDC / PYUSD / RLUSD / USD1 / FDUSD / USDS / USDe / M / USDB"
translated_at: 2026-07-29T17:38:08Z
---

# USD-denominated token products comparison — USDT / USDC / PYUSD / RLUSD / USD1 / FDUSD / USDS / USDe / M / USDB

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] and compares ten often-grouped USD-denominated tokens using only dimensions that their own terms, transparency pages, or protocol documentation can support. It complements the issuer pages for [[fintech/tether-business-model-short-treasury-yield|USDT]], [[fintech/circle-usdc-stablecoin|USDC]], [[fintech/paypal-pyusd-stablecoin|PYUSD]], [[fintech/ripple-rlusd-stablecoin|RLUSD]], [[fintech/world-liberty-usd1-political-stablecoin|USD1]], [[fintech/first-digital-fdusd-hk-stablecoin|FDUSD]], [[fintech/sky-usds-decentralized-stablecoin|USDS]], [[fintech/m-network-m0-neutral-infrastructure|M]], and [[fintech/stripe-usdb-bridge-stablecoin|USDB]].

> [!info] TL;DR
> These ten names are not ten interchangeable “issuers.” USDT, USDC, PYUSD, RLUSD, USD1, FDUSD, and USDB are centrally administered fiat-backed products; USDS is issued through a governed collateral protocol; USDe is a crypto-backed, delta-hedged synthetic dollar; and M is minted by approved minters against verified off-chain collateral. Compare their legal counterparty, reserve or collateral mechanism, direct-redemption boundary, and reporting cadence before comparing market size. As of 2026-07-30, the GENIUS Act is enacted but not yet effective, and the OCC implementation rule remains proposed. There is therefore no official product-by-product “pass/fail” list.

## Comparison boundary

The word *stablecoin* hides several different claims. A fiat-backed token generally gives an eligible direct customer a contractual redemption path against an administering entity. A protocol token relies on smart-contract rules, collateral, governance, validators, hedges, or market liquidity. Secondary-market holders may not have the same rights as an issuer’s approved mint-and-redeem customers. This page does not turn an issuer’s marketing statement into a credit rating, and it does not treat an attestation as an audit of the issuer’s entire business.

## Matrix A · Product form and accountable party

| Product | Product form supported by primary documentation | Issuer, administrator, or control point |
|---|---|---|
| **[[fintech/tether-business-model-short-treasury-yield\|USDT]]** | Fiat-denominated Tether Token backed by the issuer’s disclosed reserve portfolio | Tether International, S.A. de C.V.; its reserve report states that it became the sole issuer of fiat-denominated Tether Tokens after the 2025 relocation to El Salvador |
| **[[fintech/circle-usdc-stablecoin\|USDC]]** | Fiat-backed digital dollar, redeemable 1:1 by eligible Circle Mint customers | Circle, through the issuing affiliates identified in its terms and licensing disclosures |
| **[[fintech/paypal-pyusd-stablecoin\|PYUSD]]** | Payment stablecoin bearing the PayPal brand | Paxos Trust Company N.A. is the issuer; PayPal is the branded product partner |
| **[[fintech/ripple-rlusd-stablecoin\|RLUSD]]** | Fiat-backed payment token on supported ledgers | Standard Custody & Trust Company, LLC is the issuer |
| **[[fintech/world-liberty-usd1-political-stablecoin\|USD1]]** | Fiat-backed token branded by World Liberty Financial | BitGo issues and redeems USD1; World Liberty Financial owns the brand and provides specified services |
| **[[fintech/first-digital-fdusd-hk-stablecoin\|FDUSD]]** | Fiat-backed token intended for eligible non-U.S. users | FD121 (BVI) Limited is the issuer; First Digital Trust Limited provides reserve custody |
| **[[fintech/sky-usds-decentralized-stablecoin\|USDS]]** | Native stablecoin of Sky Protocol, backed by protocol collateral | Issuance and parameters are controlled through Sky Protocol smart contracts and SKY governance, not a conventional reserve-issuer contract |
| **USDe** | Synthetic dollar backed by crypto assets, liquid stablecoins, and corresponding hedge positions | Ethena protocol; direct mint and redemption are restricted to approved counterparties |
| **[[fintech/m-network-m0-neutral-infrastructure\|M]]** | Protocol token minted against verified off-chain collateral | Approved Minters propose issuance; Validators attest collateral; the MinterGateway and M0 Governance enforce protocol limits |
| **[[fintech/stripe-usdb-bridge-stablecoin\|USDB]]** | Bridge’s treasury-backed stablecoin, offered through Bridge APIs | Bridge states that it issues and manages USDB; Stripe ownership does not make Stripe the named token issuer in the product documentation |

Source: [Tether Q1 2026 reserve report announcement](https://tether.io/news/tether-posts-1-04b-q1-2026-profit-despite-highly-volatile-global-markets-reaches-all-time-highs-8-23b-reserve-buffer-and-maintains-u-s-treasury-heavy-backing/); [Circle transparency](https://www.circle.com/transparency); [Paxos PYUSD transparency](https://www.paxos.com/pyusd-transparency); [RLUSD terms](https://ripple.com/legal/stablecoin/); [World Liberty Financial FAQ](https://docs.worldlibertyfinancial.com/resources/faq); [FDUSD terms](https://www.firstdigitallabs.com/legal/fdd-terms); [Sky USDS explainer](https://sky.money/blog/what-is-usds); [Ethena documentation](https://docs.ethena.fi/); [M0 minting documentation](https://docs.m0.org/protocol/minting-burning); [Bridge USDB documentation](https://apidocs.bridge.xyz/platform/issuance/usdb).

## Matrix B · Backing, redemption, and public verification

| Product | Backing or collateral disclosed by the product | Direct redemption boundary | Public verification |
|---|---|---|---|
| USDT | A reserve portfolio reported by Tether; the Q1 2026 report describes Treasury-heavy, short-duration liquid holdings while the underlying report also separates other reserve categories | Redemption is governed by Tether’s customer terms and eligibility rules | Quarterly reserve report and independent assurance opinion |
| USDC | Cash, bank deposits, short-dated U.S. Treasuries, and overnight Treasury repo; a majority may be held in the Circle Reserve Fund | Circle Mint redemption is for eligible institutional customers; Circle separately states its MiCA redemption commitment | Weekly holdings and mint/burn disclosure plus monthly third-party assurance |
| PYUSD | Reserves reported by Paxos for the Paxos-issued token | Eligible Paxos customers can mint and redeem under Paxos terms; secondary-market access is distinct | Monthly management reserve report and monthly independent attestation; KPMG has issued reports since 2025-02-28 |
| RLUSD | Segregated reserve of cash and highly liquid short-term assets; terms permit short U.S. Treasury bills, overnight Treasury repo, government money-market funds, and deposits | Direct purchase and redemption require a Ripple customer relationship governed by the customer agreement | Monthly reserve report and independent CPA attestation |
| USD1 | Cash, short-term U.S. Treasuries, government money-market funds, deposits, and other permitted cash equivalents held or maintained by BitGo | Eligible BitGo customers may redeem directly; other holders rely on supported intermediaries or secondary markets | Monthly reserve disclosure and independent examination of management’s assertion |
| FDUSD | USD and USD-denominated assets; current transparency disclosure identifies cash, bank deposits, Treasury bills, and reverse repo | Direct minting and redemption require an eligible FD121 account; U.S. persons are excluded by the terms | Monthly reserve report and independent attestation |
| USDS | Diversified protocol collateral with excess collateral value; USDS itself does not accrue the Sky Savings Rate | Protocol conversion and collateral mechanisms, not a claim under a bank or trust-company redemption agreement | On-chain collateral and governance data; sUSDS is a separate value-accruing token |
| USDe | Crypto assets and liquid stablecoins combined with short derivatives positions intended to maintain delta neutrality | Direct mint and redemption are for approved KYC/KYB market-making counterparties; others acquire or dispose through markets | On-chain backing data and Ethena’s disclosures; hedge and off-exchange custody create risks different from fiat reserves |
| M | Off-chain collateral, typically eligible real-world assets held through structures such as SPVs, whose value is reported and validated on-chain | Mint and burn are governed by MinterGateway rules; this is not retail redemption against a single reserve issuer | Validator-signed collateral updates plus on-chain debt, mint, and burn state |
| USDB | The current USDB page describes an off-the-shelf closed-loop stablecoin and says Bridge manages reserves, liquidity, and compliance; it does not specify a USDB reserve allocation | The product is intended for internal movement of money in a closed-loop ecosystem; the page does not establish an open-loop public redemption right | The cited USDB page establishes no public USDB-specific real-time supply or reserve endpoint and no public attestation report. Bridge's separate generic reporting page describes API-key-protected xUSD endpoints, monthly customer reports, and optional-fee quarterly attestations for Bridge-issued stablecoins |

Source: [Tether Q1 2026 disclosure](https://tether.io/news/tether-posts-1-04b-q1-2026-profit-despite-highly-volatile-global-markets-reaches-all-time-highs-8-23b-reserve-buffer-and-maintains-u-s-treasury-heavy-backing/); [Circle transparency](https://www.circle.com/transparency); [Paxos PYUSD transparency](https://www.paxos.com/pyusd-transparency); [RLUSD transparency](https://ripple.com/solutions/stablecoin/transparency/); [BitGo USD1 attestations](https://www.bitgo.com/usd1/attestations/); [FDUSD transparency](https://www.firstdigitallabs.com/transparency); [Sky USDS explainer](https://sky.money/blog/what-is-usds); [Ethena USDe overview](https://docs.ethena.fi/solution-overview/usde-overview); [M0 minting and burning](https://docs.m0.org/protocol/minting-burning); [Bridge USDB documentation](https://apidocs.bridge.xyz/platform/issuance/usdb); [Bridge reporting and transparency documentation](https://apidocs.bridge.xyz/platform/issuance/reporting-and-transparency).

## Matrix C · Legal and access boundaries

| Product | Primary documented boundary | What should not be inferred |
|---|---|---|
| USDT | Tether International reports an El Salvador stablecoin-issuer and digital-asset-service-provider authorization | An offshore authorization is not a U.S. permitted-payment-stablecoin determination |
| USDC | Circle publishes the licenses and issuing affiliates applicable to its products and jurisdictions | “Many licenses” is not the same proposition as final approval under a federal regime that is not yet effective |
| PYUSD | Issued by a U.S. national trust bank and subject to the issuer’s terms and prudential supervision | PayPal branding does not make PayPal the legal reserve issuer |
| RLUSD | Issued by a NYDFS-supervised limited-purpose trust company | A state trust charter is not evidence that every future federal implementation condition has already been adjudicated |
| USD1 | BitGo is the issuer under the USD1 terms; the responsible BitGo entity and regulatory basis must be read from the current terms and attestations | Political affiliation or branding does not prove either regulatory approval or disqualification |
| FDUSD | Issuer is a BVI company; terms exclude U.S. persons and U.S.-person mint/redemption activity | First Digital Trust’s Hong Kong custody status does not turn FD121 (BVI) Limited into a Hong Kong-authorized stablecoin issuer |
| USDS | A governed protocol with separate USDS and sUSDS tokens | “Decentralized” does not itself establish exemption from any statute |
| USDe | A synthetic-dollar protocol with restricted direct mint/redemption | Ethena’s product classification is not a regulator’s binding legal classification |
| M | A protocol separates Minters, Validators, governance, and the M token | Protocol modularity does not create one blanket license for every minter or front-end |
| USDB | Bridge documentation describes API-based issuance, reserves, and restricted distribution | Stripe’s acquisition of Bridge does not by itself establish a specific federal stablecoin authorization |

Source: [Tether reserve-report background](https://tether.io/wp-content/uploads/2025/10/ISAE-3000R-Opinion-Tether-International-Financial-Figure-31-10-2025-RC187322025BD0440-Fascicolo.pdf); [Circle USDC disclosures](https://www.circle.com/usdc); [Paxos PYUSD transparency](https://www.paxos.com/pyusd-transparency); [RLUSD transparency](https://ripple.com/solutions/stablecoin/transparency/); [BitGo USD1 terms](https://www.bitgo.com/usd1-terms/); [FDUSD terms](https://www.firstdigitallabs.com/legal/fdd-terms); [Sky USDS explainer](https://sky.money/blog/what-is-usds); [Ethena documentation](https://docs.ethena.fi/); [M0 minting documentation](https://docs.m0.org/protocol/minting-burning); [Bridge developer agreement](https://www.bridge.xyz/legal/developer-agreement).

## GENIUS Act: the current legal checkpoint

The GENIUS Act is Public Law 119-27, approved on 2025-07-18. The relevant reserve, redemption, disclosure, supervision, and permitted-issuer requirements are primarily in sections 3–8. The issuer-interest restriction is section **4(a)(11)**; there is no basis for calling these products “§501 pass” or “§501 fail.”

Section 20 makes the Act effective on the earlier of:

1. 18 months after enactment, which is 2027-01-18; or
2. 120 days after the primary federal payment-stablecoin regulators issue final implementing regulations.

As of 2026-07-30, the OCC’s broad implementation package and the Treasury/FinCEN/OFAC packages visible in the public record are proposals, not final product approvals. Section 18 creates a process for foreign comparable-regime determinations and registration; it does not automatically recognize every foreign token. Section 3 also gives U.S. digital-asset service providers a separate three-year transition before the statutory offer-or-sale restriction applies.

Source: [Public Law 119-27, sections 3, 4, 18, and 20](https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf); [OCC 2026-02-25 proposed-rule notice](https://www.occ.treas.gov/news-issuances/news-releases/2026/nr-occ-2026-9.html); [Treasury 2026-04-08 proposed-rule notice](https://home.treasury.gov/news/press-releases/sb0435).

## Matrix D · Evidence-safe comparison checklist

| Question | Evidence required | Common error avoided |
|---|---|---|
| Who owes the redemption obligation? | Current token terms naming the legal counterparty | Treating a brand, distributor, parent, or custodian as the issuer |
| What backs the token? | Dated reserve report or protocol collateral specification | Copying a percentage from an old report into a timeless matrix |
| Who can redeem directly? | Eligibility and customer terms | Assuming every wallet holder has an unconditional $1 claim |
| What type of assurance exists? | Report title, scope, measurement date, and accounting firm | Ranking an attestation as if it were a full-company financial-statement audit |
| Is holder yield part of the token? | Token terms and separate-product documentation | Conflating USDS with sUSDS, or USDe with sUSDe |
| Is a legal conclusion final? | Effective statute, final rule, regulator order, or adjudication | Turning an issuer’s “ready” claim into a government “pass” |
| Is market size comparable? | Same timestamp, same supply definition, and treatment of bridged or inactive tokens | Mixing live supply, protocol TVL, reserve assets, and branded-token balances |

Source: [Public Law 119-27](https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf); [Paxos description of management reports versus independent attestations](https://www.paxos.com/pyusd-transparency); [Bridge generic reporting and transparency documentation](https://apidocs.bridge.xyz/platform/issuance/reporting-and-transparency).

## Reading the matrix

- Do not rank products with a single “compliance” score. A legal counterparty, reserve instrument, holder eligibility rule, and protocol risk are different variables.
- Do not copy live supply, chain share, APY, or reserve percentages without a measurement date. Those values can change while the product terms remain the same.
- Do not assume that a custodian is the issuer. FDUSD and USD1 make the distinction especially visible; PYUSD also separates PayPal’s brand from Paxos’s issuance role.
- Do not assume that a separate savings token pays interest on the base stablecoin. Sky states that USDS itself does not earn yield, while sUSDS is a separate value-accruing token. Ethena likewise distinguishes USDe from sUSDe.
- For U.S. legal analysis, cite the enacted section and the current rulemaking stage. Product marketing such as “GENIUS-ready” is not a regulator-issued authorization.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/tether-business-model-short-treasury-yield|Tether USDT business model]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]
- [[fintech/world-liberty-usd1-political-stablecoin|WLFI USD1]]
- [[fintech/first-digital-fdusd-hk-stablecoin|First Digital FDUSD]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]
- [[fintech/m-network-m0-neutral-infrastructure|M^0 / M Network neutral infrastructure]]
- [[fintech/stripe-usdb-bridge-stablecoin|Bridge USDB]]
- [[fintech/stablecoin-issuer-2025-2026-market-consolidation|stablecoin issuer 2025-2026 consolidation]]
- [[fintech/genius-act-501-actual-implementation|GENIUS Act implementation status]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|stablecoin five-pole regulatory matrix]]
- [[fintech/three-circles-stablecoin-mra-framework|US/EU/Japan stablecoin market-access comparison]]
<!-- /wiki-links:managed -->

## Sources

- Tether reserve reporting: https://tether.io/news/tether-posts-1-04b-q1-2026-profit-despite-highly-volatile-global-markets-reaches-all-time-highs-8-23b-reserve-buffer-and-maintains-u-s-treasury-heavy-backing/
- Circle transparency: https://www.circle.com/transparency
- Paxos PYUSD transparency: https://www.paxos.com/pyusd-transparency
- Ripple RLUSD transparency: https://ripple.com/solutions/stablecoin/transparency/
- World Liberty Financial USD1 FAQ: https://docs.worldlibertyfinancial.com/resources/faq
- BitGo USD1 attestations: https://www.bitgo.com/usd1/attestations/
- First Digital FDUSD terms: https://www.firstdigitallabs.com/legal/fdd-terms
- First Digital FDUSD transparency: https://www.firstdigitallabs.com/transparency
- Sky USDS explainer: https://sky.money/blog/what-is-usds
- Ethena documentation: https://docs.ethena.fi/
- M0 minting and burning: https://docs.m0.org/protocol/minting-burning
- Bridge USDB documentation: https://apidocs.bridge.xyz/platform/issuance/usdb
- Public Law 119-27: https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf
- OCC proposed rule notice: https://www.occ.treas.gov/news-issuances/news-releases/2026/nr-occ-2026-9.html
