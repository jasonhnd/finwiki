---
source: securities/japan-market-infrastructure-map
source_hash: 2c9adb0ba441c455
lang: en
status: machine
fidelity: ok
title: "Japan market infrastructure map"
translated_at: 2026-06-01T03:31:12.279Z
---

# Japan market infrastructure map

## Overview

Japan's securities market is a layered infrastructure system: public regulator, self-regulatory bodies, exchange venues, PTS venues, clearing, settlement, securities finance, brokers, custodians, and disclosure rails. A broker page is only one slice of the system.

Use this page as the route map for [[securities/tokyo-stock-exchange|Tokyo Stock Exchange]], [[securities/osaka-exchange|Osaka Exchange]], [[securities/tokyo-commodity-exchange|Tokyo Commodity Exchange]], [[securities/japan-securities-clearing-corp|JSCC]], [[securities/japan-securities-depository-center|JASDEC]], [[securities/japannext-securities|Japannext]], [[securities/osaka-digital-exchange|ODX]], [[financial-regulators/japan-securities-finance|Japan Securities Finance]], [[foreign-financial-institutions/euroclear-bank-japan|Euroclear Bank Japan]], [[foreign-financial-institutions/clearstream-banking-japan|Clearstream Banking Japan]], [[financial-regulators/jsda|JSDA]], and broker / underwriting pages.

This is the infrastructure route inside [[securities/INDEX|securities domain]]; use [[securities/financial-instruments-business-operators-japan-index|FIEA operator registry index]] and [[financial-licenses/INDEX|JapanFG legal / financial licenses]] when the question turns from market plumbing to firm registration or legal status.

## Layer Map

| Layer | Main actors | What to use it for |
|---|---|---|
| Public supervision | FSA, Local Finance Bureaus, Bank of Japan where settlement / money-market plumbing is relevant | Licensing, registration, public supervision, disclosure, payment / settlement context. |
| Self-regulation | [[financial-regulators/jsda|JSDA]], exchange self-regulatory bodies, industry rules | Dealer conduct, underwriting, solicitation, member rules, market discipline. |
| Exchange holding company | [[financial-regulators/japan-exchange-group|Japan Exchange Group]] | Group-level owner of core exchange, clearing, and data infrastructure. |
| Cash equity exchange | [[securities/tokyo-stock-exchange|Tokyo Stock Exchange]] | Listed equities, ETFs, REITs, listing rules, trading markets, issuer disclosure adjacency. |
| Listed derivatives exchange | [[securities/osaka-exchange|Osaka Exchange]] | Equity index, JGB, and other listed derivatives. |
| Commodity derivatives exchange | [[securities/tokyo-commodity-exchange|Tokyo Commodity Exchange]] | Commodity futures and energy / commodity route inside JPX group. |
| PTS / alternative venue | [[securities/japannext-securities|Japannext]], [[securities/osaka-digital-exchange|ODX]] | Off-exchange trading, SOR, evening trading, security-token venue questions. |
| Clearing | [[securities/japan-securities-clearing-corp|JSCC]] | Central counterparty, margin, default management, netting, clearing participant risk. |
| Settlement / CSD | [[securities/japan-securities-depository-center|JASDEC]] | Book-entry transfer, DVP, issuer / investor account infrastructure, settlement-risk reduction. |
| ICSD / global custody interface | [[foreign-financial-institutions/euroclear-bank-japan|Euroclear Bank Japan]], [[foreign-financial-institutions/clearstream-banking-japan|Clearstream Banking Japan]], [[banking/japan-trust-bank-custody-map|trust-bank custody map]] | Cross-border settlement, custody, JGB collateral, disclosure, and global investor access to Japan assets. |
| Securities finance | [[financial-regulators/japan-securities-finance|Japan Securities Finance]] | Margin trading loans, securities lending, funding and inventory plumbing. |
| Brokers / underwriters | [[securities-firms/nomura-hd|Nomura]], [[securities-firms/daiwa-sg|Daiwa]], [[securities-firms/sbi-securities|SBI Securities]], [[securities-firms/rakuten-securities|Rakuten Securities]] | Customer access, underwriting, research, distribution, execution, custody interface. |

## Cash Equity Flow

```text
Investor
  -> broker / online broker
  -> order routing / SOR
  -> TSE or PTS venue
  -> JSCC clearing
  -> JASDEC securities settlement
  -> Bank of Japan / settlement bank cash leg
```

JPX's clearing / settlement materials describe the functional split between trading, clearing, and settlement for exchange transactions. JASDEC materials explain book-entry and DVP settlement infrastructure. For FinWiki, this means a question about "stock trading" may need at least four pages: the broker, the venue, the clearing layer, and the settlement layer.

## Venue Map

| Venue / infrastructure | Page | Key reading |
|---|---|---|
| JPX holding company | [[financial-regulators/japan-exchange-group]] | Group-level owner and governance of TSE, OSE, TOCOM, JSCC, JPX-R, JPX Market Innovation & Research. |
| TSE | [[securities/tokyo-stock-exchange]] | Cash equities, listing, market segments, TDnet adjacency. |
| OSE | [[securities/osaka-exchange]] | Listed derivatives, index futures / options, JGB futures route. |
| TOCOM | [[securities/tokyo-commodity-exchange]] | Commodity derivatives under the integrated exchange group. |
| JSCC | [[securities/japan-securities-clearing-corp]] | CCP and default-risk mutualization. |
| JASDEC | [[securities/japan-securities-depository-center]] | CSD, book-entry transfer, DVP, settlement matching. |
| Japannext | [[securities/japannext-securities]] | PTS, alternative liquidity, SOR route. |
| ODX | [[securities/osaka-digital-exchange]] | PTS and security-token secondary-market route. |
| JSF | [[financial-regulators/japan-securities-finance]] | Securities finance, margin-loan and lending plumbing. |
| Euroclear / Clearstream | [[foreign-financial-institutions/euroclear-bank-japan]], [[foreign-financial-institutions/clearstream-banking-japan]] | ICSD / cross-border custody and collateral route for Japan assets. |

## Why This Matters

| Analytical question | Infrastructure route |
|---|---|
| Why can headline zero-fee brokerage still be economically meaningful? | Read broker economics with PTS / SOR, margin finance, securities lending, and ecosystem cross-subsidy. |
| What happens when volatility spikes? | Read JSCC margin, settlement timing, and broker risk controls. |
| How does an IPO become a tradable public security? | Read [[securities/japan-underwriting-market-structure|underwriting]], TSE listing, JSCC, JASDEC, and broker distribution together. |
| Where do security tokens fit? | Read ODX / PTS, FIEA tokenized securities, settlement design, and disclosure route. |
| Why do JGBs matter for securities markets? | Read [[money-market/jgb-repo-market-japan|JGB repo]], JSCC clearing, settlement cash leg, and collateral channels. |

## Boundary Notes

- **Exchange vs clearing**: TSE / OSE / TOCOM are venues; JSCC is the clearing layer.
- **Clearing vs settlement**: clearing nets and guarantees obligations; settlement transfers securities and cash.
- **Broker vs venue**: a retail app is not the market; it is customer access to venues and infrastructure.
- **PTS vs dark / OTC**: PTS is a regulated alternative venue route; do not treat all off-exchange execution as the same.
- **Securities finance vs brokerage**: margin trading can involve brokers and [[financial-regulators/japan-securities-finance|JSF]]; analyze funding and collateral separately.
- **Domestic CSD vs ICSD**: [[securities/japan-securities-depository-center|JASDEC]] is the domestic CSD route; [[foreign-financial-institutions/euroclear-bank-japan|Euroclear]] and [[foreign-financial-institutions/clearstream-banking-japan|Clearstream]] are ICSD / global custody interfaces.
- **Public company vs infrastructure page**: [[financial-regulators/japan-exchange-group|JPX]] is a listed holding company; the securities domain pages explain functional infrastructure.

## Related

- [[securities/INDEX]]
- [[financial-regulators/japan-exchange-group]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/tokyo-commodity-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/japannext-securities]]
- [[securities/osaka-digital-exchange]]
- [[financial-regulators/japan-securities-finance]]
- [[foreign-financial-institutions/euroclear-bank-japan]]
- [[foreign-financial-institutions/clearstream-banking-japan]]
- [[financial-regulators/jsda]]
- [[securities/japan-online-brokerage-competition]]
- [[securities/japan-underwriting-market-structure]]
- [[INDEX|FinWiki index]]

## Sources

- JPX: company profile and cash-equity clearing / settlement outline.
- JSCC: company and clearing overview pages.
- JASDEC: company outline and DVP settlement pages.
- Japan Securities Finance: company profile.
- Japannext and ODX official site pages.
- JSDA: organization overview.
