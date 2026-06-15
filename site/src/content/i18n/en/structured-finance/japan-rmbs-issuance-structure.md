---
source: structured-finance/japan-rmbs-issuance-structure
source_hash: 32452d89f45d5fad
lang: en
status: machine
fidelity: ok
title: "Japan RMBS issuance structure"
translated_at: 2026-06-01T04:15:40.125Z
---
# Japan RMBS issuance structure

## TL;DR

Private RMBS in Japan are usually jumbo deals backed by megabank-originated residential mortgages. They sit alongside but distinct from JHF MBS: JHF MBS is government-supported and backed by Flat 35 fixed-rate loans, while private RMBS are megabank originations with their own credit enhancement and structure. The senior class typically receives a high investment-grade rating; mezzanine and equity classes absorb credit risk. Use this page to understand the private-RMBS structure layer in [[structured-finance/INDEX]] and to contrast with [[structured-finance/jhf-mbs-mechanics]].

## Wiki route

| You want | Go to |
|---|---|
| JHF MBS engine | [[structured-finance/jhf-mbs-mechanics]] |
| JHF vs private spread | [[structured-finance/jhf-mbs-vs-private-rmbs-spread]] |
| Trust beneficial interest vs SPV | [[structured-finance/japan-trust-beneficial-interest-vs-spv]] |
| Market overview | [[structured-finance/japan-abs-market-overview]] |
| Rating methodology | [[structured-finance/credit-rating-methodology-jcr-r-and-i]] |

## 1. Originators

| Originator | Typical product |
|---|---|
| [[megabanks/mufg]] / Mitsubishi UFJ Bank | Variable-rate mortgages, jumbo pools |
| [[megabanks/smfg]] / Sumitomo Mitsui Banking Corporation | Variable-rate mortgages |
| [[megabanks/mizuho-fg]] / Mizuho Bank | Mixed-rate mortgages |
| Trust banks (Mitsubishi UFJ Trust, [[trust-banks/sumitomo-mitsui-trust]], Mizuho Trust) | Long-tenor fixed-rate mortgages |
| Regional banks (occasional) | Smaller, regional-pool deals |

Megabanks dominate private RMBS issuance because they hold large enough mortgage portfolios to make jumbo securitization economical.

## 2. Comparison to JHF MBS

| Dimension | JHF MBS | Private RMBS |
|---|---|---|
| Originator | Private banks → JHF buys via securitization support | Private banks (megabanks) |
| Government support | Yes — senior class government-supported via JHF | No — senior class privately-credit-enhanced |
| Underlying product | Flat 35 (long-tenor fixed-rate) | Variable-rate or mixed-rate jumbo mortgages |
| Issuance cadence | Monthly | Intermittent, programmatic |
| Senior-class rating | Top-tier (effectively sovereign-linked) | AAA-AA via credit enhancement |
| Spread vs JGB | Tight (~10-30bp typical) | Wider (~50-100bp typical for senior) |
| Investor base | Lifers, regional banks, asset managers, public-credit investors | Lifers, asset managers, foreign investors at the senior class |

See [[structured-finance/jhf-mbs-vs-private-rmbs-spread]] for the spread economics.

## 3. Structure — typical tranching

| Tranche | Purpose |
|---|---|
| Senior | AAA / AA target; bulk of issuance; sold to lifers and asset managers |
| Mezzanine | Single-A or BBB target; smaller; sold to spread investors |
| Subordinated / equity | First-loss; often retained by originator |

Tranching is achieved through subordination (cash flow paid first to senior, then mezz, then equity) and additional credit enhancements described below.

## 4. Credit enhancement

| Mechanism | Purpose |
|---|---|
| Subordination | Junior tranches absorb losses before senior. |
| Overcollateralization (OC) | Collateral pool exceeds bond face value; excess absorbs losses. |
| Excess spread | Coupon on collateral exceeds bond coupon + servicing fee; trapped if performance deteriorates. |
| Cash reserve / liquidity facility | Backup for shortfalls; sized to cover months of interest. |
| Servicer advance | Servicer advances delinquent payments to bondholders. |

Private RMBS structures rely heavily on subordination plus overcollateralization. Reserve accounts are typical for the senior class.

## 5. Prepayment modeling

| Driver | Effect |
|---|---|
| Refinancing waves | Falling rates trigger refinance; mortgages prepay, shortens bond duration. |
| Move / sale | Borrower sells house; prepays at par. |
| Default / foreclosure | Treated as prepayment for cash-flow purposes; losses absorbed by junior. |
| Curtailment | Partial prepayment reduces principal. |

Japan's prepayment behavior historically runs slower than US RMBS because Japanese mortgage refinancing is more friction-heavy (origination costs, prepayment-fee structures, employer-linked benefits). Rating-agency assumptions typically use conservative prepayment models calibrated to JCR / R&I criteria.

## 6. Vehicle choice

Private RMBS in Japan most often use a trust-beneficial-interest structure: the originator transfers the mortgage pool to a trust ([[trust-banks/sumitomo-mitsui-trust]] or another trust bank as trustee), and the trust issues trust beneficial interest in tranches to investors. See [[structured-finance/japan-trust-beneficial-interest-vs-spv]] for the trust-vs-SPV trade-off.

Some deals use a TMK (特定目的会社) under the asset-securitization law instead. The TMK route allows formal listed-bond issuance; trust-beneficial-interest route is typically private placement. See [[structured-finance/spv-tk-gk-vehicle-japan-tax]].

## 7. Servicing

- The originator usually retains servicing (loan collection, customer interaction).
- A backup servicer is named for the senior class; activated if originator fails.
- Servicer advances are standard — the originator advances scheduled payments on delinquent loans up to a recoverability limit.

## 8. Investor base

| Class | Investor | Why |
|---|---|---|
| Senior | Lifers, megabank ALM books, asset managers, foreign-investor accounts | JGB-plus yield with AAA-AA collateral |
| Mezz | Spread investors, hedge funds, certain pension funds | Yield pickup |
| Equity | Originator retention | Risk-retention compliance + economics |

Japan retains some risk-retention requirements analogous to US / EU regimes — typically 5% of net economic exposure held by the originator.

## Related

- [[structured-finance/INDEX]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/jhf-mbs-vs-private-rmbs-spread]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[policy-finance/japan-housing-finance-agency]]
- [[real-estate-finance/INDEX]]
- [[banking/INDEX]]

## Sources

- JCR (Japan Credit Rating Agency), RMBS structured-finance criteria.
- R&I (Rating and Investment Information), RMBS methodology.
- Japan Housing Finance Agency, IR pages.
- JSDA (Japan Securities Dealers Association).
- Megabank IR (MUFG, SMFG, Mizuho FG).
