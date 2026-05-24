---
title: "SPV TK / GK / TMK / SPC vehicle choice (Japan tax)"
aliases:
  - "Japan SPV vehicle"
  - "TK-GK scheme"
  - "TMK"
  - "SPC Japan"
  - "Tokumei kumiai"
  - "Godo kaisha"
  - "Tokutei mokuteki kaisha"
  - "Japan securitization vehicle"
  - "Japan tax-pass-through SPV"
domain: structured-finance
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [structured-finance, spv, tk, gk, tmk, spc, japan, tax]
status: active
sources:
  - "https://www.jsda.or.jp/en/"
  - "https://www.fsa.go.jp/en/"
  - "https://www.jcr.co.jp/en/"
  - "https://www.r-i.co.jp/en/"
---

# SPV TK / GK / TMK / SPC vehicle choice (Japan tax)

## TL;DR

Japan securitization deals use one of four main SPV structures: TK (匿名組合, silent partnership), GK (合同会社, LLC), TMK (特定目的会社, specified-purpose company under the asset-securitization law), or generic SPC. The most common private-placement structure is "TK-GK" — a GK acts as the asset-holding entity and a TK silent-partnership overlay provides tax-pass-through to investors. TMK is preferred when the deal needs formal listed-bond issuance under the asset-securitization-law regime. Vehicle choice is driven by tax pass-through, off-balance-sheet criteria, public vs private placement, asset class, and originator strategy. Use this page for the SPV-vehicle choice tree; pair with [[structured-finance/japan-trust-beneficial-interest-vs-spv]] for the trust-vs-SPV comparison.

## Wiki route

| You want | Go to |
|---|---|
| Trust vs SPV comparison | [[structured-finance/japan-trust-beneficial-interest-vs-spv]] |
| Market overview | [[structured-finance/japan-abs-market-overview]] |
| RMBS deal structure | [[structured-finance/japan-rmbs-issuance-structure]] |
| CMBS deal structure | [[structured-finance/japan-cmbs-issuance-structure]] |
| JHF MBS structure | [[structured-finance/jhf-mbs-mechanics]] |
| Domain index | [[structured-finance/INDEX]] |

## 1. Vehicle types — overview

| Vehicle | Full name | Legal regime | Typical use |
|---|---|---|---|
| TK | 匿名組合 (silent partnership) | Commercial Code | Overlay structure providing tax-pass-through to investors |
| GK | 合同会社 (LLC) | Companies Act | Asset-holding entity in TK-GK private-placement deals |
| TMK | 特定目的会社 (specified-purpose company) | Act on Securitization of Assets (資産流動化法) | Listed-bond issuance under asset-securitization-law regime |
| SPC (generic) | 特定目的会社 / 株式会社 / etc. | Companies Act | Various deal structures including non-securitization-law SPCs |

The naming is confusing because the abbreviation "SPC" gets used both for the asset-securitization-law TMK and for generic special-purpose companies under the Companies Act. Properly the asset-securitization-law specific form is TMK; "SPC" is the broader term.

## 2. TK-GK scheme — the workhorse

| Layer | Role |
|---|---|
| GK (asset-holder) | Holds the securitized assets; treated as corporation; bankruptcy-remote |
| TK (overlay) | Silent-partnership investors contribute to GK; receive pass-through distributions |
| Originator | Sells assets to GK; may retain TK interest as risk-retention |
| Investors | Subscribe to TK interests in GK; receive pass-through yield |
| Trustee / servicer | Manage asset cash flow |

The TK-GK scheme combines:
- GK as bankruptcy-remote asset-holder
- TK as tax-pass-through vehicle (TK distributions to investors are deductible at GK level, achieving effective single-layer taxation)

This is the dominant private-placement structure in Japan.

## 3. TMK — asset-securitization-law specified-purpose company

| Element | Description |
|---|---|
| Legal basis | Act on Securitization of Assets (資産流動化法) |
| Formation | Requires asset liquidation plan filed with regulators |
| Issuance | Can issue specified bonds, specified short-term bonds, or preferred contributions publicly |
| Tax | Tax-pass-through if certain conditions met (distribution requirements) |
| Use cases | Public listed bonds, larger or more complex deals, real-estate securitization |

TMK is the preferred vehicle when:
- The deal needs formal public-listed bond issuance
- The asset is real estate (TMK has favorable real-estate-tax treatment under certain conditions)
- The deal benefits from the asset-securitization-law regulatory infrastructure

## 4. Tax pass-through mechanics

| Vehicle | Tax mechanism |
|---|---|
| TK-GK | TK distributions deductible at GK level; investor taxed once |
| TMK | TMK can deduct distributions to investors if distribution requirements met (90%+ of pretax income typically) |
| Generic SPC | Two-layer taxation unless special election or specific treatment available |
| Trust | Trust beneficial interest is tax-transparent (look-through to underlying assets) — see [[structured-finance/japan-trust-beneficial-interest-vs-spv]] |

The economic point of tax pass-through is to avoid double taxation: assets at the SPV level should generate cash flow that is taxed at the investor level, not at both SPV and investor levels.

## 5. Off-balance-sheet criteria

For originator off-balance-sheet treatment, the SPV must achieve:

| Criterion | Test |
|---|---|
| True sale | Asset transfer legally complete; not recharacterized as financing |
| Bankruptcy-remoteness | SPV cannot be consolidated into originator's bankruptcy estate |
| Risk transfer | Substantial credit risk transferred to third-party investors |
| Control transfer | Originator does not retain effective control of assets |
| Accounting derecognition | Meets accounting standard for asset derecognition (JGAAP / IFRS) |

Risk retention by originator (commonly 5%) is consistent with off-balance-sheet treatment if structured properly — retention is for skin-in-the-game / regulatory purpose, not for control retention.

## 6. Asset-securitization-law SPC vs general SPC

| Dimension | Asset-securitization-law TMK | General SPC (株式会社 / etc.) |
|---|---|---|
| Regulatory regime | Asset-securitization law; FSA / MOF oversight | Companies Act |
| Filing | Asset liquidation plan required | None for SPV formation |
| Tax pass-through | Available if distribution requirements met | Generally two-layer taxation unless specific structure |
| Bond issuance | Specified bonds under asset-securitization law | Corporate bonds under FIEA |
| Public listing | Possible | Possible but uncommon |
| Real-estate treatment | Favorable for certain real-estate deals | Standard corporate treatment |

The TMK route is heavier regulatorily but unlocks public-listed bond issuance under the asset-securitization-law regime; general SPC is lighter but doesn't get the asset-securitization-law benefits.

## 7. Public vs private placement

| Placement | Typical vehicle | Notes |
|---|---|---|
| Public listed | TMK | Asset-securitization-law specified bonds; listed on TSE Bond Market or other |
| Private placement | TK-GK | Most common for private RMBS, ABS, real-estate deals |
| Trust beneficial interest private placement | Trust + private placement | See [[structured-finance/japan-trust-beneficial-interest-vs-spv]] |

Most Japanese securitization deals are private placements; public-listed structured bonds are a minority. The public route is reserved for the largest deals where TMK's listed-bond capacity adds value.

## 8. Vehicle choice tree

Choice depends on:

| Factor | Favors |
|---|---|
| Public listing required | TMK |
| Asset is real estate | TMK (favorable tax) or trust |
| Private placement, complex tranching | TK-GK |
| Simple, single-asset, real-estate | TMK or trust |
| Want to keep originator close (limited disclosure) | TK-GK private placement |
| Mortgage securitization with bank trustee | Trust beneficial interest |
| Standard auto / consumer ABS | TK-GK |

## 9. Practical examples

| Deal type | Typical vehicle |
|---|---|
| Auto-loan ABS | TK-GK ([[structured-finance/auto-loan-abs-japan-toyota-honda]]) |
| Card-receivable ABS | TK-GK or trust ([[structured-finance/consumer-loan-abs-japan-card-issuer]]) |
| Private RMBS | Trust beneficial interest typically ([[structured-finance/japan-rmbs-issuance-structure]]) |
| CMBS | TMK (single-borrower) or TK-GK ([[structured-finance/japan-cmbs-issuance-structure]]) |
| JHF MBS | "MBS Trust" — trust beneficial interest variant ([[structured-finance/jhf-mbs-mechanics]]) |
| Real-estate single-asset | TMK |

## Counterpoints

- **"TMK is always better because it's regulated"**: TMK adds regulatory filing burden; TK-GK is faster and adequate for most private deals.
- **"TK-GK is risky because TK isn't a legal entity"**: TK is a contractual silent partnership; the GK is the legal entity. The structure is well-established and routinely tested.
- **"SPC and TMK are the same"**: TMK is one specific form of asset-securitization-law SPC; "SPC" used generically includes other corporate forms.

## Open questions

- How tax-reform changes (corporate tax, distribution-deduction rules) affect vehicle choice over time.
- Whether digital-asset securitization develops new vehicle structures distinct from these traditional forms.
- The role of Yu-shi-mu Genyo (有志無源) or other niche vehicles for specific asset classes.

## Related

- [[structured-finance/INDEX]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-cmbs-issuance-structure]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda]]
- [[structured-finance/consumer-loan-abs-japan-card-issuer]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[real-estate-finance/INDEX]]
- [[banking/INDEX]]
- [[finance/INDEX]]

## Sources

- JSDA (Japan Securities Dealers Association), securitization-product guidance.
- FSA, asset-securitization-law regulatory pages.
- JCR (Japan Credit Rating Agency), structured-finance criteria.
- R&I (Rating and Investment Information), structured-finance methodology.
