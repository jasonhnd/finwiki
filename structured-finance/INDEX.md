---
title: "Structured finance domain"
aliases:
  - "structured-finance INDEX"
  - "Structured finance"
  - "ストラクチャード・ファイナンス domain"
domain: structured-finance
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [structured-finance, index, abs, rmbs, cmbs, securitization, japan]
status: active
sources:
  - "https://www.jhf.go.jp/about/index.html"
  - "https://www.jcr.co.jp/en/"
  - "https://www.r-i.co.jp/en/"
  - "https://www.jsda.or.jp/en/"
---

# Structured Finance Index

> Scope: Japan + global structured finance — ABS, RMBS, CMBS, CLO, SPV vehicles, credit rating methodology, securitization tax structures.

## TL;DR

This domain routes structured-finance knowledge: how Japan's asset-backed securities, residential and commercial mortgage-backed deals, securitization SPVs, trust beneficial interests, and credit-rating methodologies fit together. It connects originator banks and finance companies in [[banking/INDEX]] and [[JapanFG/INDEX]] with the public-credit anchor at [[policy-finance/japan-housing-finance-agency]] and the M&A / acquisition lane at [[finance/INDEX]].

## Start here

- [[structured-finance/japan-abs-market-overview]] — Japan ABS market shape, originator landscape, dealer arrangers.
- [[structured-finance/jhf-mbs-mechanics]] — Japan Housing Finance Agency MBS engine, monthly issuance, government-supported senior class.
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]] — TK, GK, TMK, SPC vehicle choice, tax-pass-through, off-balance-sheet criteria.

## Routing

| Cluster | Entries |
|---|---|
| ABS / MBS | [[structured-finance/japan-abs-market-overview\|overview]], [[structured-finance/japan-rmbs-issuance-structure\|RMBS]], [[structured-finance/japan-cmbs-issuance-structure\|CMBS]], [[structured-finance/auto-loan-abs-japan-toyota-honda\|auto]], [[structured-finance/consumer-loan-abs-japan-card-issuer\|consumer]], [[structured-finance/jhf-mbs-mechanics\|JHF]] (W8-I) |
| SPV / vehicle | [[structured-finance/spv-tk-gk-vehicle-japan-tax\|TK/GK/TMK]], [[structured-finance/japan-trust-beneficial-interest-vs-spv\|trust beneficial interest]], [[structured-finance/credit-rating-methodology-jcr-r-and-i\|ratings]] (W8-I) |
| Spread / pricing | [[structured-finance/jhf-mbs-vs-private-rmbs-spread\|JHF vs private RMBS spread]] |
| Other structured | CLO, NPL, aircraft, ship, infrastructure, synthetic, covered (W8-J — backlog) |

## Routing principles

1. **Originator vs structure**: company-specific originator pages (Toyota Finance, Orico, JACCS, etc.) live in [[JapanFG/INDEX]]; the securitization structure mechanics live here.
2. **Public-credit vs private**: JHF MBS belongs here as a structure, but the issuer itself ([[policy-finance/japan-housing-finance-agency]]) routes through [[policy-finance/INDEX]].
3. **Real-estate overlap**: CMBS and RMBS economics overlap with [[real-estate-finance/INDEX]]; this domain owns the structuring layer, real-estate-finance owns the underlying-property cash-flow layer.
4. **Trust vs SPV**: see [[structured-finance/japan-trust-beneficial-interest-vs-spv]] for the choice tree; trust beneficial interest is a separate securitization vehicle, not just an asset class.
5. **Rating methodology**: keep [[structured-finance/credit-rating-methodology-jcr-r-and-i]] separate from any corporate-credit rating page; structured-finance criteria differ from issuer-credit criteria.

## JapanFG anchors

| Cluster | Entity pages |
|---|---|
| Auto-finance originators | [[JapanFG/toyota-finance]], [[JapanFG/toyota-financial]], [[JapanFG/mitsubishi-hc-capital]] |
| Consumer / card originators | [[JapanFG/orico]], [[JapanFG/jaccs]], [[JapanFG/aplus]], [[JapanFG/mufg-nicos]], [[JapanFG/jcb]] |
| Trust-bank trustees | [[JapanFG/sumitomo-mitsui-trust]] |
| Policy-finance anchor | [[JapanFG/jfc]] (no [[JapanFG/jhf]] entity page; route via [[policy-finance/japan-housing-finance-agency]]) |

## Related domains

- [[banking/INDEX]] — originator banks (megabanks, regional banks), trust-bank trustees, dealer arrangers.
- [[policy-finance/INDEX]] — JHF as housing-credit anchor, public-credit support.
- [[real-estate-finance/INDEX]] — CMBS / RMBS underlying property cash flow, J-REIT debt overlap.
- [[finance/INDEX]] — LBO loans, acquisition finance, syndicated loans that can collateralize CLO.
- [[money-market/INDEX]] — short-term funding cost, repo for ABS warehouses.
- [[JapanFG/jsda]] — securitization-product disclosure infrastructure.

## Research control

1. **Rating-agency hierarchy**: use JCR and R&I first for Japan-domiciled structured-finance ratings; use S&P, Moody's, Fitch for cross-border deals.
2. **Issuance source**: JHF MBS data direct from JHF IR; private deals from JSDA and ASF Japan (Asset Securitization Forum Japan).
3. **Tax / legal**: distinguish asset-securitization-law SPC (specified-purpose company, 特定目的会社) from general SPC; the legal regime differs.
4. **Vehicle naming**: TK = silent partnership (匿名組合), GK = LLC (合同会社), TMK = specified-purpose company (特定目的会社), SPC = generic SPC. TK-GK scheme is the most common private structure.

## Maintenance

- Public-surface only. Use JCR, R&I, JHF, JSDA, ASF Japan, megabank IR.
- Public ratings: JCR and R&I publish rating actions; do not paraphrase non-public rating memos.

## Sources

- Japan Housing Finance Agency.
- JCR (Japan Credit Rating Agency).
- R&I (Rating and Investment Information).
- JSDA (Japan Securities Dealers Association).
- ASF Japan (Asset Securitization Forum Japan).
