---
source: derivatives/jgb-special-participants-primary-dealer
source_hash: d2e1cfe8eb007253
lang: en
status: machine
fidelity: ok
title: "JGB Special Participants (Japan primary dealer system)"
translated_at: 2026-05-31T03:19:56.438Z
---

# JGB Special Participants (Japan primary dealer system)

## TL;DR

The JGB Special Participants system (国債市場特別参加者制度) is Japan's primary dealer regime: a Ministry of Finance (MoF)-administered framework under which a defined set of financial institutions are recognized as the principal counterparties to MoF JGB auctions in exchange for accepting bid-and-make-market obligations across the JGB curve. The system was introduced in 2004 and has been refined over multiple iterations; the current list typically contains around 20 firms, comprising Japanese megabank securities affiliates, major Japanese independent securities firms, and foreign investment-bank subsidiaries operating in Japan.

Special Participants commit to: (i) submitting meaningful bids at each JGB auction across the major maturities; (ii) providing two-sided quotes in the JGB secondary market; (iii) reporting trading activity and inventory; and (iv) maintaining adequate financial resources. In exchange they receive: (i) access to MoF non-price auctions (Non-Price Competitive Auction I and II), allowing them to obtain JGBs at the weighted-average winning price; (ii) regular dialogue with MoF on JGB issuance policy; (iii) participation in MoF buybacks; and (iv) standing as recognized JGB market makers in the eyes of MoF, BoJ, and the FSA.

The Japanese system is conceptually similar to the US primary dealer system (administered by the New York Fed) and the UK gilt-edged market maker (GEMM) system, but with distinct operational features that reflect Japanese market structure and MoF's auction-design approach.

For FinWiki, this entry covers the Special Participant list and tiering, obligations, benefits, the Non-Price Competitive Auction mechanism, and structural comparisons with the US and UK primary dealer systems.

## Wiki route

This entry sits under [[derivatives/INDEX|derivatives index]] in the JGB / rates cluster. Read it against [[derivatives/jgb-futures-curve]] for the futures market the Special Participants serve, [[derivatives/jgb-inflation-linked-bond-jgbi]] for the JGBi auctions they participate in, and [[money-market/jgb-repo-market-japan]] for the repo market that supports their inventory financing. The MoF issuance program context is anchored at [[money-market/INDEX|money market]]; the BoJ-policy interface is at [[money-market/boj-open-market-operations|BoJ open market operations]].

## System Overview

| Element | Detail |
|---|---|
| Regulator / administrator | Ministry of Finance (MoF), Financial Bureau, Government Debt Management Division |
| Established | 2004 (formalization of the prior JGB primary-dealer-like arrangement) |
| Recognized firms | Approximately 20 at any time (varies by year as firms join / leave) |
| Recognition basis | Application + MoF assessment of capital adequacy, market-making capability, JGB activity, and compliance |
| Renewal | Annual review; firms can be added or removed; conduct standards enforced |
| Membership categories | Single tier (no formal A / B sub-tier in the JGB system); some operational differentiation exists in practice |
| Publication | MoF publishes the current list on its Special Participants page |

The number of recognized firms is materially smaller than the FSA's broader [[securities/financial-instruments-business-operators-japan-index|Financial Instruments Business Operators]] universe and reflects MoF's deliberate concentration of auction counterparties to firms capable of meeting bid and market-making obligations.

## List Composition (Typical)

While the exact list is updated periodically by MoF, the typical composition is:

| Dealer category | Representative firms |
|---|---|
| Japanese megabank securities affiliates | MUFG Securities, SMBC Nikko Securities, Mizuho Securities (and their bond-trading desks within the securities entities) |
| Independent Japanese securities firms | Nomura Securities, Daiwa Securities |
| Other Japanese securities | SBI Securities, Tokai Tokyo Securities, OKASAN Securities (varies by year) |
| Trust and other megabank-affiliated bond entities | Where applicable (specific entities vary) |
| Foreign investment-bank subsidiaries in Japan | JPMorgan Securities Japan, Goldman Sachs Japan, Morgan Stanley MUFG Securities, Citigroup Global Markets Japan, Deutsche Securities, Barclays Securities Japan, BNP Paribas Securities (Japan), HSBC Securities (Japan), UBS Securities Japan |
| Other | Société Générale Securities (Japan), Crédit Agricole Securities (Japan), and similar foreign-firm subsidiaries when present |

Notable: foreign-firm subsidiaries operating as Japan-registered securities companies (under FIEA license — see [[securities/financial-instruments-business-operators-japan-index|FIBO registry]]) are eligible and a substantial share of the list. This open membership to foreign firms is one of the structural features of the Japanese system.

The list above is illustrative; the official current list is maintained by MoF and updated on the official page (see Sources).

## Obligations of Special Participants

Special Participants accept the following obligations under MoF rules:

| Obligation | Detail |
|---|---|
| Bid obligation at each auction | Submit meaningful bids at each MoF JGB auction across major tenors; minimum participation thresholds defined by MoF in the auction rules |
| Successful bid share | Achieve a minimum share of successful awards over time (assessed in annual reviews) |
| Secondary market quotes | Provide two-sided quotes on the JGB secondary market; obligation calibrated by tenor and time of day |
| Inventory and activity reporting | Report JGB inventory positions and trading volumes to MoF |
| Capital adequacy and regulatory compliance | Maintain FIEA-required capital and operational standards |
| Cooperation with MoF | Participate in MoF dialogue on issuance plans, market functioning, and product development |

Performance against these obligations is reviewed annually; firms not meeting thresholds can be downgraded or removed from the list.

## Benefits of Special Participant Status

In exchange for the obligations, Special Participants receive:

| Benefit | Detail |
|---|---|
| Non-Price Competitive Auction I (Non-Price I) | Eligible to receive a portion of the JGB auction at the weighted-average winning price; pre-auction allocation based on Special Participant share |
| Non-Price Competitive Auction II (Non-Price II) | Additional post-auction allocation at the weighted-average winning price; another non-price entitlement |
| MoF dialogue and consultation | Regular forums with MoF on issuance plans, market functioning, and JGB program development; influence on MoF planning |
| Buyback participation | Eligibility to participate in MoF JGB buyback / liability management operations |
| Recognition | Formal MoF and BoJ recognition as JGB market makers; useful for client distribution and reputation |
| Access to operational facilities | Standard JGB clearing and settlement infrastructure access (BoJ-NET, [[securities/japan-securities-clearing-corp|JSCC]]) |

The Non-Price Competitive Auction (I and II) mechanism is particularly important: it provides Special Participants with a guaranteed allocation channel at the auction's weighted-average price, removing some of the price-discovery risk of competitive bidding alone. Non-Price I is allocated before the competitive auction; Non-Price II is allocated after, at the same weighted-average price.

## Auction Mechanics in the JGB System

The JGB auction process accommodates Special Participants alongside other bidders:

| Auction component | Eligibility / mechanism |
|---|---|
| Price-competitive auction | Open to all qualified bidders (Special Participants + others); allocation by competitive bid |
| Non-Price Competitive Auction I (Non-Price I) | Special Participants only; pre-auction; allocation at expected weighted-average price; subject to entitlement based on prior auction performance |
| Non-Price Competitive Auction II (Non-Price II) | Special Participants only; post-auction; allocation at the actual weighted-average winning price from the competitive auction; additional entitlement |
| Auction format | Multi-price (conventional) auction for most JGBs; conventional yield-based or price-based depending on series |

The Non-Price I entitlement creates an incentive for Special Participants to maintain a strong auction-bidding track record because Non-Price I share scales with historical performance.

## Comparison with US Primary Dealer System

The US primary dealer system, administered by the Federal Reserve Bank of New York, has structural similarities and differences:

| Aspect | US Primary Dealers | JGB Special Participants |
|---|---|---|
| Administrator | Federal Reserve Bank of New York | Ministry of Finance (Japan) |
| Number of firms | ~24 firms (varies); list maintained by NY Fed | ~20 firms; list maintained by MoF |
| Membership composition | US bank-affiliated dealers + non-bank dealers + foreign-bank US subsidiaries | Japanese securities firms + foreign investment-bank subsidiaries |
| Auction obligations | Bid at each US Treasury auction; meaningful share | Bid at each JGB auction; meaningful share |
| Secondary market obligations | Reasonable market activity; reporting | Two-sided quotes; reporting |
| Special access | TOMO (Temporary Open Market Operations) counterparty; SOMA portfolio operations counterparty | Non-Price Competitive Auction I and II; MoF buyback participation |
| Bid award mechanism | Competitive (uniform price for Treasuries since 1992) | Multi-price competitive + Non-Price I and II |
| Regulator interaction | Fed (NY Fed) operationally; OCC, SEC, banking regulators substantively | MoF operationally; FSA prudentially; BoJ for monetary operations |
| Foreign-firm participation | Yes (extensive) | Yes (extensive) |

Key structural difference: the US Treasury runs uniform-price auctions (since 1992), so all winning bidders pay the same (highest accepted) yield; Japan continues to use multi-price (conventional) auctions in most JGB tenors, so winning bidders pay their own bid yields. This makes the Non-Price I and II mechanism in Japan particularly valuable because it offers Special Participants access at the weighted-average price.

## Comparison with UK GEMM System

The UK has Gilt-Edged Market Makers (GEMMs) recognized by the UK Debt Management Office (DMO):

| Aspect | UK GEMMs | JGB Special Participants |
|---|---|---|
| Administrator | UK Debt Management Office (DMO) | Ministry of Finance (Japan) |
| Number of firms | Around 15-20 GEMMs | ~20 Special Participants |
| Bid obligation at auction | Required | Required |
| Secondary market obligation | Two-sided quotes | Two-sided quotes |
| Inflation-linked recognition | Separate Index-Linked GEMM (IL-GEMM) recognition for index-linked gilts | Single tier; JGBi auctions are open to same list of Special Participants |
| Tiering | Some operational differentiation | Single recognized list |
| Strip and switch auction access | Standard | Standard |

The UK has historically separated inflation-linked GEMM recognition into a sub-tier; Japan has not adopted that segmentation for JGBi.

## Why the System Matters

The Special Participants system is critical to:

1. **JGB auction success**: A reliable, capitalized counterparty base assures MoF that auctions will clear at orderly prices, reducing the risk of failed auctions.
2. **Secondary market liquidity**: Two-sided quoting obligations support a continuous JGB market that broader institutional investors and BoJ can access.
3. **Information flow to MoF**: Regular dialogue allows MoF to calibrate issuance plans based on market feedback.
4. **Dealer franchise economics**: Special Participant status is a meaningful franchise asset for securities firms; non-Special Participants face structural disadvantages in JGB market making.
5. **Foreign-firm integration**: Open membership to foreign-firm Japan subsidiaries integrates global investment banks into the JGB market and supports cross-border JGB investor activity.

## Related

- [[derivatives/INDEX]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/jgb-inflation-linked-bond-jgbi]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/japan-inflation-swap]]
- [[derivatives/japan-swaption-market]]
- [[money-market/INDEX]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/japan-money-market]]
- [[money-market/tanshi-company-business-model]]
- [[securities/INDEX]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[securities/japan-underwriting-market-structure]]
- [[banking/INDEX]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[INDEX|FinWiki index]]

## Sources

- Ministry of Finance: JGB Special Participants page (current list, obligations, benefits).
- Ministry of Finance: JGB Issuance Plan (annual; auction calendar and Special Participant entitlements).
- Ministry of Finance: JGB Auction Rules and operational procedures.
- Bank of Japan: BoJ-NET JGB settlement and operational documentation.
- Financial Services Agency: FIEA framework on securities business operators.
- Federal Reserve Bank of New York: US Primary Dealer list and operating documentation (for comparison).
- UK Debt Management Office: Gilt-Edged Market Maker (GEMM) framework (for comparison).
