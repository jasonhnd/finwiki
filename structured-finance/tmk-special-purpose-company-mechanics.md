---
title: "TMK (特定目的会社) special-purpose-company mechanics"
aliases:
  - "tmk-special-purpose-company-mechanics"
  - "TMK"
  - "Tokutei Mokuteki Kaisha"
  - "特定目的会社"
  - "Japan SPC Act"
  - "Asset Securitization Act TMK"
  - "TMK listed CMBS Japan"
  - "TMK tax treatment Japan"
  - "TMK vs GK-TK"
domain: structured-finance
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [structured-finance, tmk, spv, asset-securitization-law, cmbs, j-reit, gk-tk, tax-pass-through, japan]
status: active
sources:
  - "https://www.fsa.go.jp/en/"
  - "https://www.jsda.or.jp/en/"
  - "https://www.jcr.co.jp/en/"
  - "https://www.r-i.co.jp/en/"
  - "https://www.ares.or.jp/en/"
  - "Act on Securitization of Assets (資産流動化法) — public legislative text"
---

# TMK (特定目的会社) special-purpose-company mechanics

## TL;DR

**TMK — Tokutei Mokuteki Kaisha (特定目的会社, Specified-Purpose Company)** is the **statutory securitization vehicle** under Japan's **Act on Securitization of Assets (資産流動化法, 1998)** — the regulated SPV form designed specifically for asset-backed securities issuance. Unlike the [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK-GK private-placement workhorse]], TMK is **governed by a dedicated statute** rather than the general Companies Act, requires an **asset liquidation plan (資産流動化計画)** filed with regulators, and can issue **specified bonds (特定社債)**, **specified short-term bonds**, and **preferred contributions (優先出資)** publicly to investors. The distinctive **tax treatment** is the structural feature that makes TMK the preferred vehicle for many listed CMBS, certain large-scale real-estate securitization deals, and complex multi-tranche structures: **profit distributions to investors are deductible at the TMK level**, achieving effective **single-layer taxation** if statutory distribution requirements are met (typically 90%+ of distributable profit).

For FinWiki, TMK is the **regulated-statutory-SPV node** in the Japan securitization landscape. The choice between TMK and [[structured-finance/spv-tk-gk-vehicle-japan-tax|GK-TK]] is the **foundational securitization-vehicle-choice decision** for arrangers — TMK for public-bond issuance, regulatory-disclosure deals, listed CMBS, complex structures; GK-TK for private-placement, flexible-bilateral deals, faster-formation private real-estate securitization. TMK is also a **distinct vehicle from the [[real-estate-finance/j-reit-market-overview|J-REIT investment corporation (投資法人)]]** — both are tax-pass-through real-estate vehicles but operate under different statutes (Asset Securitization Act vs Investment Trust Act).

## Wiki route

This entry sits under [[structured-finance/INDEX|structured-finance index]] as the **TMK statutory-SPV node** — the regulated-securitization counterpart to the [[structured-finance/spv-tk-gk-vehicle-japan-tax|GK-TK]] private-placement workhorse. Read against [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK / SPC vehicle choice (Japan tax)]] for the full vehicle-choice tree, [[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]] for the principal CMBS use case, [[structured-finance/japan-trust-beneficial-interest-vs-spv|Japan trust beneficial interest vs SPV]] for the trust-vs-SPV alternative, and [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]] for rating treatment. Cross-domain: [[real-estate-finance/j-reit-market-overview|J-REIT market overview]] for the investment-corporation alternative, [[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS / RMBS securitization]] for the cross-domain real-estate-finance frame, [[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK bond real-estate SPV]] for the alternative real-estate-SPV path.

## 1. Legal basis — Act on Securitization of Assets

| Item | TMK statutory basis |
|---|---|
| Statute | Act on Securitization of Assets (資産流動化法, 1998; amended multiple times) |
| Successor to | The 1998 SPC Act, expanded over time to cover wider asset classes |
| Regulatory authority | FSA (formation registration, asset liquidation plan filing, ongoing supervision) |
| Vehicle name | Tokutei Mokuteki Kaisha (TMK, 特定目的会社, Specified-Purpose Company) |
| Statutory purpose | Asset securitization (statutorily restricted purpose — TMK cannot engage in general business activities outside securitization) |
| Asset liquidation plan | Required filing — describes assets to be securitized, expected cash flows, securities to be issued, redistribution mechanism |

The statutory restriction on activities is a key feature: TMK's bankruptcy-remote character comes partly from the statutory limitation that prevents the TMK from incurring liabilities outside its asset-securitization purpose.

## 2. Issuance instruments

TMK can issue several types of securities to investors:

| Instrument | Description |
|---|---|
| **Specified bonds (特定社債)** | Senior debt; can be publicly placed; covered by the asset liquidation plan |
| **Specified short-term bonds (特定短期社債)** | Short-tenor debt under the same regime |
| **Preferred contributions (優先出資)** | Equity-like; investors receive preferred distribution rights; tax-pass-through (if statutory conditions met) |
| **Common contributions (普通出資)** | Subordinated equity; typically held by originator or B-piece investor |
| **Specified loans** | TMK can also borrow under the asset liquidation plan |

The combination of specified bonds (senior debt) and preferred contributions (mezzanine/equity tranches) enables **multi-tranche capital-structure** that mirrors international securitization conventions.

## 3. Tax treatment — the distinctive feature

| Element | TMK tax treatment |
|---|---|
| Corporate income tax | TMK is a corporation; subject to corporate tax in principle |
| Distribution deductibility | **Distributions to preferred contributors and specified-bond holders (interest) are deductible at TMK level** |
| Effective pass-through | If distribution exceeds 90%+ of distributable profit (statutory condition), residual taxable income at TMK is minimal — effective single-layer taxation |
| Statutory conditions for pass-through | Public-offering / qualified-institutional-investor offering conditions, distribution-ratio condition, asset-management restriction conditions |
| Comparison to GK-TK | GK-TK achieves pass-through via TK overlay; TMK achieves pass-through via direct distribution deductibility |
| Comparison to J-REIT | J-REIT (investment corporation) achieves pass-through via similar 90% distribution rule under Investment Trust Act |
| Withholding tax | Distributions to investors may be subject to withholding depending on investor classification |

The **distribution deductibility** mechanism makes TMK behave economically like a pass-through vehicle while remaining a corporation legally. This is the cleanest pass-through mechanism for public-bond issuance.

## 4. Comparison with GK-TK

| Dimension | TMK | [[structured-finance/spv-tk-gk-vehicle-japan-tax|GK-TK]] |
|---|---|---|
| Statutory basis | Act on Securitization of Assets | Companies Act (GK) + Commercial Code (TK) |
| Formation | Asset liquidation plan filing; FSA-registered | Simpler — incorporate GK, sign TK contracts |
| Public bond issuance | Yes — specified bonds publicly placeable | Limited — typically private placement |
| Equity tranching | Yes — preferred + common contributions | TK-overlay provides pass-through to multiple TK investors |
| Tax pass-through | Distribution deductibility at TMK level | TK-distribution deductibility at GK level |
| Activity restriction | Statutorily restricted to securitization purpose | GK statutorily flexible; TK purpose set by contract |
| Bankruptcy remoteness | Strong — statutory and contractual layers | Contractual only |
| Typical use | Public-bond CMBS, large/complex deals, listed-securities deals | Private real-estate securitization, bilateral deals, faster-formation private placements |
| Speed of formation | Slower (asset liquidation plan filing) | Faster |
| Disclosure burden | Higher (FSA registration + ongoing disclosure) | Lower (private-placement disclosure regime) |

## 5. TMK in current J-REIT structure

A common confusion is the relationship between TMK and J-REIT. Both are tax-pass-through real-estate vehicles but operate under different statutes:

| Vehicle | Statute | Form |
|---|---|---|
| **TMK** | Asset Securitization Act | Specified-Purpose Company (corporation) |
| **[[real-estate-finance/j-reit-market-overview|J-REIT investment corporation]]** | Investment Trust Act (投資信託法) | Investment corporation (投資法人) |

In **current J-REIT practice**, TMK is sometimes used at the **sub-vehicle level**:

| Use case | Description |
|---|---|
| J-REIT acquires TMK preferred contributions | Some J-REIT hold TMK preferred contributions rather than direct real-estate ownership, particularly for tax-efficient structuring of certain asset classes |
| Sponsor-side TMK as warehouse | Sponsors may use TMK to warehouse stabilized assets before J-REIT acquisition |
| TMK for non-J-REIT-eligible assets | Asset classes that don't fit J-REIT criteria may be held in TMK structures by institutional investors |
| TMK for foreign-investor real-estate | Some foreign-LP real-estate investments use TMK structures for tax / withholding treatment |

The TMK-J-REIT interaction is important for understanding the broader Japanese real-estate-vehicle ecosystem; TMK is a building block that can sit inside or alongside J-REIT investment corporations.

## 6. TMK in listed CMBS

| TMK CMBS feature | Reading |
|---|---|
| Issuer entity | TMK (specified-purpose company under Asset Securitization Act) |
| Issuance | Specified bonds publicly placed; tranched by seniority |
| Collateral | Commercial real-estate-backed mortgage loan(s) or trust beneficial interests in commercial real estate |
| Asset liquidation plan | Filed with FSA; sets out asset-cash-flow distribution mechanics |
| Rating | Domestic agency ([[JapanFG/jcr|JCR]] / [[JapanFG/rating-and-investment|R&I]]) typically; global agency ([[JapanFG/sp-global-ratings-japan|S&P]] / [[JapanFG/moodys-japan|Moody's]]) for foreign-investor-targeted deals |
| Investor base | Life insurers, asset managers, megabank ALM books, foreign institutional investors |
| Servicer / trustee | Trust bank or specialty servicer roles |

TMK is the dominant structure for **single-borrower listed CMBS** in Japan (the post-2008 CMBS form per [[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]]). The combination of public-bond issuance capability and tax-pass-through makes TMK the natural choice for listed-tranched CMBS deals.

## 7. TMK governance and ongoing obligations

| Obligation | Description |
|---|---|
| Asset liquidation plan compliance | Activities restricted to those described in the asset liquidation plan |
| Director composition | TMK has directors with statutory role; typically independent professional directors |
| Auditor | Statutory auditor or audit corporation |
| Ongoing disclosure | Periodic reporting on asset performance and bond status to investors and FSA |
| Distribution mechanics | Distributions per the asset liquidation plan; statutory tax-pass-through conditions |
| Wind-down | TMK winds down when assets are fully amortized or sold |

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK / SPC vehicle choice (Japan tax)]]
- [[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]]
- [[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv|Japan trust beneficial interest vs SPV]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/japan-covered-bond-mufg-smbc|Japanese megabank covered bonds]]
- [[structured-finance/japan-green-securitization|Japan green securitization]]
- [[structured-finance/synthetic-securitization-japan-bank-rwa-relief|synthetic securitization Japan bank RWA relief]]
- [[real-estate-finance/j-reit-market-overview|J-REIT market overview]]
- [[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS and RMBS securitization]]
- [[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK bond real-estate SPV]]
- [[real-estate-finance/INDEX|real-estate-finance index]]
- [[JapanFG/jcr|JCR]] · [[JapanFG/rating-and-investment|R&I]]
- [[INDEX|FinWiki index]]

## Sources

- Act on Securitization of Assets (資産流動化法) — public legislative text (Japan Diet).
- FSA — https://www.fsa.go.jp/en/
- JSDA — https://www.jsda.or.jp/en/
- JCR — https://www.jcr.co.jp/en/
- R&I — https://www.r-i.co.jp/en/
- ARES — https://www.ares.or.jp/en/
