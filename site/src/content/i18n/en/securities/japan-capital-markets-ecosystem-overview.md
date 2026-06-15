---
source: securities/japan-capital-markets-ecosystem-overview
source_hash: 295d18ea8342be12
lang: en
status: machine
fidelity: ok
title: "Japan capital markets ecosystem overview"
translated_at: 2026-06-15T04:09:41.158Z
---

# Japan capital markets ecosystem overview

## TL;DR

Japan's **capital markets ecosystem** comprises five interconnected layers: **issuance (primary)**, **trading (secondary)**, **clearing**, **settlement / depository**, and **regulation / self-regulation**. The system spans equity, bond (JGB and corporate), derivative (listed and OTC), securitized-products, and security-token markets, supported by a network of exchanges, clearing corporations, depositories, regulators, and self-regulatory organizations.

This entry is the cross-cutting ecosystem anchor that ties the [[securities/INDEX|securities domain]] together and bridges to [[finance/INDEX|finance]] (corporate-finance side), [[derivatives/INDEX|derivatives]] (instrument layer), [[money-market/INDEX|money market]] (short-end), [[structured-finance/INDEX|structured finance]] (securitization), and [[real-estate-finance/INDEX|real-estate finance]] (J-REIT) domains.

## Wiki route

This entry sits under [[securities/INDEX|securities index]] as the ecosystem anchor. Pair it with [[securities/japan-market-infrastructure-map]] for the venue / clearing / settlement plumbing detail and [[finance/japan-listed-financial-groups-investable-universe]] for the listed FG investable universe. The household-investment side is in [[securities/nisa-2024-flow]]. The corporate-finance side is in [[finance/INDEX|finance index]].

### 1. Issuance (Primary Market)

The primary market is where issuers raise new capital from investors.

| Instrument | Venue | Anchor |
|---|---|---|
| Equity IPO | TSE Prime / Standard / Growth | [[securities/japan-ipo-listing-disclosure-route]], [[securities/japan-ipo-2024-2025-case-study-kioxia-tokyo-metro]] |
| Equity follow-on / rights | TSE | [[securities/japan-underwriting-market-structure]] |
| Corporate bond | OTC (no central listing for most) | [[finance/japan-convertible-bond-mechanics]], [[securities/japan-underwriting-market-structure]] |
| JGB issuance | MoF auction, primary-dealer network | [[derivatives/jgb-special-participants-primary-dealer]], [[money-market/jgb-repo-market-japan]] |
| Local-government bond | MoF coordination, JFM joint issuance | [[policy-finance/local-government-bond-market]], [[policy-finance/japan-local-bond-association]] |
| Securitization | OTC / private placement | [[structured-finance/japan-abs-market-overview]] |
| Security token | ODX / private blockchain issuance | [[securities/japan-security-token-secondary-market-route]], [[securities/osaka-digital-exchange]], [[securities/progmat-tokenized-securities-infrastructure]] |
| J-REIT IPO | TSE REIT board | [[real-estate-finance/j-reit-market-overview]] |

The primary market is supported by:

- **Underwriting syndicates** led by major securities firms ([[securities-firms/nomura-hd|Nomura]], [[securities-firms/daiwa-sg|Daiwa]], [[securities-firms/mufg-mums|Mitsubishi UFJ Morgan Stanley]], [[securities-firms/smbc-nikko|SMBC Nikko]], [[megabanks/mizuho-bank|Mizuho Securities]]).
- **Listing examination** by JPX-R (Japan Exchange Regulation).
- **Disclosure** through EDINET (financial-statement disclosure) and TDnet (timely disclosure).
- **JSDA self-regulation** for distribution conduct.

### 2. Trading (Secondary Market)

The secondary market is where investors trade existing instruments.

| Instrument | Venue | Anchor |
|---|---|---|
| Listed equity | [[securities/tokyo-stock-exchange|TSE]], [[exchanges/INDEX|other Japan exchanges]] | [[securities/japan-best-execution-sor-pts]], [[securities/japan-online-brokerage-competition]] |
| PTS (alternative trading) | Cboe Japan / Japannext / ODX | [[securities/japannext-securities]], [[securities/japannext-sor-routing-deep-dive]], [[securities/japan-pts-liquidity-data-guide]] |
| Listed derivative | [[derivatives/jgb-futures-curve|JGB futures]] / [[derivatives/nikkei-225-futures-options|Nikkei 225]] / TOPIX / TONA futures on OSE | [[derivatives/INDEX]], [[derivatives/topix-futures]] |
| OTC equity / bond | Dealer market, JSDA quote system | [[derivatives/INDEX]], [[securities/japan-market-infrastructure-map]] |
| OTC derivative | Bilateral OTC, clear-through at JSCC for in-scope | [[derivatives/japan-otc-derivative-market-overview]], [[derivatives/otc-clearing-jp-trade-repository]] |
| Stock lending | OTC bilateral plus JSF | [[securities/japan-stock-lending-market-route]], [[financial-regulators/japan-securities-finance]] |
| Margin trading | Brokerage margin + JSF loan trading | [[securities/japan-margin-trading-and-securities-finance]] |
| JGB cash | OTC inter-dealer | [[money-market/jgb-repo-market-japan]] |

The secondary market is supported by:

- **Best-execution rule** under FSA / JSDA guidelines.
- **Smart order routing (SOR)** between TSE and PTS venues.
- **Market makers and liquidity providers** ([[securities/japan-market-maker-and-liquidity-provider-landscape]]).
- **Short-selling rules** ([[securities/japan-short-selling-and-stock-loan-controls]]).
- **Margin / securities-finance plumbing** ([[financial-regulators/japan-securities-finance]]).

### 3. Clearing

Clearing transforms bilateral exposures into multilateral exposures against a central counterparty (CCP).

| Asset class | CCP | Anchor |
|---|---|---|
| Listed derivatives (OSE) | [[securities/japan-securities-clearing-corp|JSCC]] | JSCC clears all JPX-listed derivatives. |
| Cash equity (TSE) | [[securities/japan-securities-clearing-corp|JSCC]] | JSCC clears TSE cash equity. |
| OTC IRS / OIS (mandated) | [[securities/japan-securities-clearing-corp|JSCC]] | Mandatory clearing for in-scope yen IRS / OIS under FIEA. |
| OTC CDS (designated index) | [[securities/japan-securities-clearing-corp|JSCC]] | JSCC CDS clearing service. |
| Cross-border equivalence | JSCC EMIR-equivalent + CFTC substituted-compliance | See [[derivatives/otc-clearing-jp-trade-repository]]. |

### 4. Settlement and Depository

Settlement transfers ownership of cleared trades; depositories hold the underlying records.

| Asset class | Depository | Settlement |
|---|---|---|
| Listed equity / corporate bond / J-REIT | [[securities/japan-securities-depository-center|JASDEC]] | T+2 (equity), T+1 (most JGBs) |
| JGB | BoJ-NET (electronic book entry) | T+1 |
| ETF / J-REIT | JASDEC | T+2 |
| Security token | [[securities/progmat-tokenized-securities-infrastructure|Progmat]] / private blockchain | T+0 / T+1 depending on platform |
| Funds (mutual funds) | Trust-bank custody | T+N depending on fund type |
| Investment-trust DVP | [[banking/jasdec-settlement-operations]] | T+2 typical |

See [[securities/japan-market-infrastructure-map]] for the unified venue / clearing / settlement diagram.

### 5. Regulation and Self-Regulation

Regulation governs market conduct, conflict resolution, and systemic-risk monitoring.

| Layer | Body | Function |
|---|---|---|
| Statute | FIEA (金融商品取引法) | Governs securities, derivatives, intermediaries, disclosure, market conduct. |
| Supervision | Financial Services Agency (FSA, 金融庁) | Supervises FIEA-registered firms, JSCC, JASDEC, JPX-R. |
| Exchange regulation | JPX-R (Japan Exchange Regulation) | Listing examination, market oversight, disciplinary action. |
| Self-regulation (securities) | Japan Securities Dealers Association (JSDA) | Distribution conduct, OTC quote system, sales-and-solicitation rule. |
| Securities investor protection | Japan Investor Protection Fund (JIPF) | Customer-asset protection in dealer-failure scenarios. |
| AML / CFT | FIU (JAFIC) under National Police Agency | Suspicious-transaction reporting. |
| Statutory audit | CPAAOB | Auditor oversight. |
| Tax (NISA) | National Tax Agency + MoF | NISA framework. See [[securities/nisa-2024-flow]]. |

## Market Participants

| Category | Examples |
|---|---|
| Issuers | Listed corporations (TSE Prime ~1,600, Standard ~1,500, Growth ~600), JGB issuer (MoF), J-REIT sponsors, corporate-bond issuers, ABS originators. |
| Underwriters | [[securities-firms/nomura-hd|Nomura]], [[securities-firms/daiwa-sg|Daiwa]], [[securities-firms/mufg-mums|MUMSS]], [[securities-firms/smbc-nikko|SMBC Nikko]], [[megabanks/mizuho-bank|Mizuho Securities]], foreign IBs. |
| Brokerages (retail) | [[megabanks/sbi-hd|SBI Securities]], [[payment-firms/rakuten-fg|Rakuten Securities]], [[securities-firms/monex-group|Monex]], Matsui Securities, [[securities-firms/mufg-esmart-securities|MUFG eSmart]], [[securities-firms/paypay-securities|PayPay Securities]], GMO Click, DMM. See [[securities/japan-online-brokerage-competition]]. |
| Asset managers | [[asset-managers/asset-management-one|Asset Management One]] (Mizuho), [[asset-managers/mufg-asset-management|MUFG Asset Management]], Nomura Asset Management, Nikko Asset Management, Daiwa Asset Management. See [[securities/japan-asset-manager-landscape-matrix]]. |
| Trust banks (custody) | [[banking/japan-master-trust-and-custody-bank-landscape|Master Trust Bank of Japan, Japan Trustee Services Bank, etc.]] |
| Institutional investors | GPIF, life insurers, non-life insurers, BoJ (JGB holdings), foreign institutional accounts. |
| Foreign brokers | JPMorgan, Goldman Sachs, Citi, Morgan Stanley, Deutsche Bank, BNP Paribas, HSBC, UBS, Barclays. |
| Market makers / liquidity providers | Domestic + foreign quant / HFT firms. See [[securities/japan-market-maker-and-liquidity-provider-landscape]]. |
| Prime brokers | [[securities/japan-prime-brokerage-and-institutional-financing]]. |
| Self-regulators | JSDA, JPX-R. |
| Central bank | Bank of Japan (BoJ) — JGB holder, monetary-policy executor, payment-settlement operator. |

## Cross-Border Linkages

| Linkage | Mechanism |
|---|---|
| Foreign equity ownership | Foreign accounts own ~30% of TSE Prime float. |
| Foreign JGB ownership | Foreign accounts hold a meaningful share of JGB float. |
| EMIR equivalence | JSCC is EMIR-equivalent for EU counterparties. |
| Title VII / CFTC equivalence | JSCC has CFTC substituted-compliance / equivalence elements for IRS clearing. |
| ICSD linkage | Foreign banks operate as ICSDs serving cross-border settlement. See [[foreign-financial-institutions/clearstream-banking-japan]]. |
| TSE-listed ETF cross-listing | Limited cross-listing; mostly mutual-recognition. |

## Public Data Sources

| Source | What it shows |
|---|---|
| JPX statistics | Trading volume, market cap, listed-company count, derivative volume. |
| JSCC statistics | Clearing volume, member counts, default-fund size. |
| JASDEC statistics | Depository holdings, settlement volume. |
| JSDA statistics | PTS trading volume, OTC bond trading, underwriting league tables. |
| BoJ statistics | JGB holdings, money-market data, payment-system data. |
| MoF statistics | JGB issuance calendar, primary-dealer flow. |
| FSA disclosure | Supervisory commentary, market-conduct examinations. |
| EDINET | Financial-statement disclosure for listed companies. |
| TDnet | Timely disclosure for listed companies. |

## Related

- [[securities/INDEX]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-ipo-listing-disclosure-route]]
- [[securities/japan-ipo-2024-2025-case-study-kioxia-tokyo-metro]]
- [[securities/japan-underwriting-market-structure]]
- [[securities/japan-online-brokerage-competition]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-margin-trading-and-securities-finance]]
- [[securities/japan-short-selling-and-stock-loan-controls]]
- [[securities/japan-stock-lending-market-route]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[securities/japan-prime-brokerage-and-institutional-financing-matrix]]
- [[securities/japan-fiea-operator-registry-segment-matrix]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[securities/japan-market-maker-and-liquidity-provider-landscape]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/osaka-digital-exchange]]
- [[securities/japannext-securities]]
- [[securities/japan-security-token-secondary-market-route]]
- [[securities/progmat-tokenized-securities-infrastructure]]
- [[securities/nisa-2024-flow]]
- [[securities/nisa-2025-tax-reform-update]]
- [[finance/INDEX]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[finance/japan-convertible-bond-mechanics]]
- [[finance/japan-ib-league-table]]
- [[derivatives/INDEX]]
- [[derivatives/japan-otc-derivative-market-overview]]
- [[derivatives/otc-clearing-jp-trade-repository]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/topix-futures]]
- [[derivatives/nikkei-225-futures-options]]
- [[derivatives/jgb-special-participants-primary-dealer]]
- [[money-market/INDEX]]
- [[money-market/jgb-repo-market-japan]]
- [[structured-finance/INDEX]]
- [[structured-finance/japan-abs-market-overview]]
- [[real-estate-finance/INDEX]]
- [[real-estate-finance/j-reit-market-overview]]
- [[policy-finance/local-government-bond-market]]
- [[policy-finance/japan-local-bond-association]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/jasdec-settlement-operations]]
- [[financial-regulators/japan-exchange-group]]
- [[financial-regulators/japan-securities-finance]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/mufg-mums]]
- [[securities-firms/smbc-nikko]]
- [[INDEX|FinWiki index]]

## Sources

- Japan Exchange Group (JPX): trading and market-data surface; listing rules and statistics.
- Financial Services Agency (FSA): FIEA, supervisory framework, listing-examination rules.
- Bank of Japan (BoJ): JGB-related statistics, payment-settlement operations, monetary-policy materials.
- Japan Securities Dealers Association (JSDA): PTS statistics, underwriting league tables, OTC bond data, self-regulatory rules.
- Japan Securities Clearing Corp (JSCC): clearing rules, clearing-volume statistics, EMIR equivalence documentation.
- Japan Securities Depository Center (JASDEC): depository and settlement statistics.
- Ministry of Finance (MoF): JGB issuance calendar, primary-dealer system documentation.
- Japan Exchange Regulation (JPX-R): listing-examination and market-oversight materials.
