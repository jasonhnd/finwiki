---
title: Japan CEX parent FG adjacency matrix — operator by group ecosystem cross-link
aliases:
  - exchanges/japan-cex-parent-fg-adjacency-matrix
  - japan-cex-parent-fg-adjacency-matrix
  - Japan CEX parent financial group adjacency
  - JP crypto exchange parent FG ecosystem map
  - 日本 CEX 親会社 FG 隣接マトリクス
  - JVCEA member parent-group cross-service matrix
domain: exchanges
created: 2026-05-25
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
confidence: likely
tags: [exchanges, matrix, vasp, parent-company, japan, fg-adjacency, group-strategy]
status: active
sources:
  - https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
  - https://jvcea.or.jp/member/
  - https://www.sbigroup.co.jp/
  - https://www.gmo.jp/
  - https://www.monexgroup.jp/
  - https://corp.rakuten.co.jp/
  - https://about.mercari.com/
  - https://www.nomuraholdings.com/
  - https://www.daiwa-grp.jp/
  - https://www.dmm.com/
  - https://corporate.bitflyer.com/
  - https://www.laserdigital.com/japan/en/information/about-laser-digital-japan
  - https://jvcea.or.jp/information/admission-info/20250919-001/
  - https://cryptogarage.co.jp/en/about/
---

# Japan CEX parent FG adjacency matrix

## TL;DR

A Japanese **暗号資産交換業者** (FSA-registered VASP) is rarely a standalone business — it is almost always a node inside a parent **financial group (FG)** that already runs securities, banking, payments, points, remittance, insurance, or e-commerce. The FG-adjacency dimension is what determines (a) **funding cost** for the VASP, (b) the **points-and-rewards** cross-link to the parent's loyalty surface, (c) the **bank-account-deposit channel** for JPY in/out, (d) the **distribution channel** for crypto products into the FG's existing brokerage / wallet / app surface, and (e) **regulatory cluster supervision** across both the FSA crypto track and the Banking Act / FIEA tracks the parent already runs. This matrix is the cross-reference for **which FG each operator belongs to and which ecosystem services the parent contributes**, sitting under [[exchanges/INDEX|exchanges index]] as the operational complement to the corporate-ownership taxonomy in [[exchanges/jp-vasp-parent-company-map|JP VASP parent company map]].

## Wiki route

This sits under [[exchanges/INDEX|exchanges index]] as the FG-adjacency operational matrix. Read it alongside [[exchanges/jp-vasp-parent-company-map|JP VASP parent company map]] for the ownership taxonomy that this entry operationalizes, [[exchanges/jp-crypto-exchange-overview|JP crypto exchange overview]] for the broader market landscape, [[exchanges/jp-cex-points-economy-integration|JP CEX points-economy integration]] for the points-cross-link dimension, [[exchanges/jp-crypto-bank-credit-facilities|JP crypto bank credit facilities]] for the bank-funding-cost angle, [[exchanges/jp-vasp-ma-consolidation-history|JP VASP M&A consolidation history]] for the structural reshuffling that produced today's parent-FG map, and [[exchanges/fsa-vasp-registration-system|FSA VASP registration system]] for the supervisory framework that all rows share. Entity anchors for the major positions are [[megabanks/sbi-hd|SBI HD]], [[payment-firms/gmo-financial-hd|GMO Financial HD]], [[securities-firms/monex-group|Monex Group]], [[payment-firms/rakuten-fg|Rakuten FG]], [[payment-firms/mercari-hd|Mercari HD]], [[securities-firms/nomura-hd|Nomura HD]], and [[securities-firms/daiwa-sg|Daiwa Securities Group]].

## Why this matrix matters

Parent-group brokerage, bank, wallet, points and marketplace surfaces can create possible distribution or settlement links, but ownership alone does not prove zero CAC, preferential fees, instant settlement or live product integration. Each link must be supported by a dated group or operator disclosure.

Each of those connections has a measurable effect on **CAC** (customer acquisition cost), **unit economics**, **JPY funding cost**, **product velocity** (how fast a new feature can ship using parent infrastructure), and **incident-response posture** (whether a hack can be cushioned by parent liquidity, as in [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack detailed analysis]] where the parent DMM HD covered the customer make-whole). The matrix below names each parent FG and the specific cross-services it contributes, so a reader can answer "what does this VASP look like with parent context stripped away" before any product-level comparison.

## Per-operator profiles

### SBI VC Trade — SBI HD (8473)

**Parent FG**: [[megabanks/sbi-hd|SBI HD]] (TSE Prime 8473), which includes [[securities-firms/sbi-securities|SBI Securities]]. **Group services disclosed**:
- **Securities adjacency** — verify current cross-promotion and SBI 共通 ID linkage in dated SBI group disclosures; do not infer account transfer or rank
- **Bank-deposit channel** — [[regional-banks/sbi-shinsei-bank|SBI Shinsei Bank]] (group bank, Mizuho-line legacy) provides the in-group JPY settlement rail; [[megabanks/sbi-regional-bank-hd|SBI Regional Bank HD]] (regional-bank holding) and partner regional banks contribute additional bank deposits
- **Remittance** — [[payment-firms/sbi-remit|SBI Remit]] runs the group's outbound remittance / 資金移動業 surface
- **FX adjacency** — [[securities-firms/sbi-fx-trade|SBI FX Trade]] runs leveraged-FX, and the affiliated [[exchanges/jp-exchange-bi-fxtrade|BI FXTRADE]] holds the crypto-derivatives license inside the group
- **Insurance / asset management** — [[life-insurers/sbi-life|SBI Life]], [[non-life-insurers/sbi-insurance|SBI Insurance]], [[asset-managers/sbi-asset-management|SBI Asset Management]] round out the group's product depth

**Adjacency evidence**: the group discloses securities, bank, remittance, FX, insurance and asset-management entities. Verify any actual VASP integration and JPY settlement terms separately. Detail: [[exchanges/jp-exchange-sbi-vc-trade|jp-exchange-sbi-vc-trade]].

### GMO Coin — GMO Financial HD (7177) / GMO Internet Group (9449)

**Parent FG**: [[payment-firms/gmo-financial-hd|GMO Financial HD]] (TSE Prime 7177), itself a subsidiary of GMO Internet Group (TSE Prime 9449). **Group services contributed**:
- **Securities cross-sell** — [[securities-firms/gmo-click-securities|GMO Click Securities]] (group brokerage, also GMO Financial HD subsidiary) provides FIEA-side product depth and shared infrastructure
- **Direct bank** — [[payment-firms/gmo-aozora-net|GMO Aozora Net Bank]] (joint venture with Aozora Bank) runs as the group internet-bank, contributing an internal JPY-deposit rail
- **Payment processing** — [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] and [[payment-firms/gmo-epsilon|GMO Epsilon]] provide payment surfaces; verify current group relationships and integration separately
- **BNPL** — [[payment-firms/gmo-postpay|GMO Postpay]] runs the group's BNPL / 後払い line
- **Internet infrastructure** — the broader GMO Internet Group runs the GMO Cloud / domain / SSL businesses, contributing operational-engineering depth

**Adjacency intensity**: high — internet-finance pure-play synergy with shared engineering culture across brokerage, banking, payments, and crypto. Detail: [[exchanges/jp-exchange-gmo-coin|jp-exchange-gmo-coin]].

### bitFlyer — independent (no listed parent)

**Parent FG**: bitFlyer Holdings (private, founder + management + minority financial-investor cap-table). **Group services contributed**:
- **Independent structure** — bitFlyer does not disclose a megabank or e-commerce parent in the reviewed corporate materials; do not infer a market-size rank
- **Internal sister entity**: [[exchanges/jp-exchange-custodiem|Custodiem]] (旧 FTX Japan, acquired 2024) sits inside bitFlyer Holdings for institutional / segregated-asset business
- **External partnership rails**: bitFlyer routes JPY through partner megabanks (no in-group bank) and runs partnership-based points crosslinks (e.g., T-Point legacy distribution)

**Adjacency intensity**: low — bitFlyer is the prototypical **independent** structure. It compensates with brand strength, JVCEA leadership presence, and tight in-house engineering culture, but lacks the cross-sell flywheel of bank-FG-backed peers. Detail: [[exchanges/jp-exchange-bitflyer|jp-exchange-bitflyer]].

### Coincheck — Monex Group (8698) / Coincheck Group N.V. (NASDAQ:CNCK)

**Parent FG**: [[securities-firms/monex-group|Monex Group]] (TSE Prime 8698), now operating through Coincheck Group N.V. (NASDAQ-listed via 2024 SPAC merger). **Group services contributed**:
- **Securities cross-sell** — Monex Securities (group brokerage) provides the FIEA brokerage surface and US-equity / global-investing distribution
- **Crypto derivatives** — Monex 株式会社 (Monex Inc., separate license holder) runs crypto derivatives under FIEA Type 1, complementing Coincheck's spot-only license
- **TradeStation** — Monex Group's US TradeStation arm provides US-market and futures-platform engineering depth
- **Global capital surface** — the NASDAQ listing post-2024 SPAC gives Coincheck direct USD capital-market access (rare for JP VASP)

**Adjacency intensity**: medium-high — Monex provides securities cross-sell, derivative-license sister entity, and global capital access. Coincheck retains independent brand and product surface. Detail: [[exchanges/jp-exchange-coincheck|jp-exchange-coincheck]].

### Rakuten Wallet — Rakuten Group (4755) / Rakuten FG

**Parent FG**: [[payment-firms/rakuten-fg|Rakuten FG]] inside Rakuten Group (TSE Prime 4755). **Group services contributed**:
- **Bank** — Rakuten Bank is the group banking surface; verify current JPY-rail integration in operator disclosures
- **Securities** — [[securities-firms/rakuten-securities|Rakuten Securities]] provides the group brokerage surface; do not fix an account-count rank
- **Card** — [[card-issuers/rakuten-card|Rakuten Card]] provides the group card surface; do not fix a transaction-value rank
- **Points** — Rakuten Points is the group loyalty surface; verify current Rakuten Wallet linkage and user metrics in dated disclosures
- **Edy** — [[payment-firms/rakuten-edy|Rakuten Edy]] is the prepaid-e-money arm; see [[payments/japan-prepaid-electronic-money-operator-matrix|JP prepaid e-money operator matrix]]
- **Insurance** — [[life-insurers/rakuten-life|Rakuten Life]], [[non-life-insurers/rakuten-general-insurance|Rakuten General Insurance]], [[non-life-insurers/rakuten-insurance-hd|Rakuten Insurance HD]]
- **E-commerce** — Rakuten Ichiba is the group marketplace surface; verify any crypto experiment or merchant integration in dated disclosures
- **Mobile** — Rakuten Mobile (MNO) gives the group a telco channel

**Adjacency evidence**: the group discloses bank, securities, card, points, e-money, insurance, e-commerce and mobile entities. Verify actual VASP integrations separately. Detail: [[exchanges/jp-exchange-rakuten-wallet|jp-exchange-rakuten-wallet]].

### DMM Bitcoin — DMM HD (private)

**Parent FG**: DMM.com Group (private). **Group services contributed**:
- **Securities** — DMM.com Securities runs the FX / equity broker arm
- **Crypto-adjacent product**: [[exchanges/jp-exchange-dmm-com-securities|DMM.com Securities]] holds the FIEA crypto-derivative line
- **No bank in group** — DMM uses external megabank partnerships for JPY rails
- **Distribution** — DMM's video / e-commerce surfaces provide potential group distribution; comparative reach requires same-date evidence
- **Group financial capacity** — the Lazarus 2024-05 hack make-whole was funded by the parent group (~ JPY 48 billion), demonstrating the FG's standalone capital backstop role: see [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack detailed analysis]].

**Adjacency intensity**: medium (pre-2024) → near-zero (post-handover) — the case demonstrates that **even a non-financial parent FG with adequate cash can backstop a VASP hack**, and the eventual wind-down shows the limits when group strategic priority shifts. Detail: [[exchanges/jp-exchange-dmm-bitcoin|jp-exchange-dmm-bitcoin]].

### Mercoin — Mercari HD (4385)

**Parent FG**: [[payment-firms/mercari-hd|Mercari HD]] (TSE Prime 4385). **Group services contributed**:
- **Wallet / payments** — Merpay (group wallet, holds 資金移動業 license) provides the in-group JPY rail and is the primary entry point for Mercoin's BTC purchases via Mercari points / Mercari sales proceeds
- **Marketplace** — Mercari is the group marketplace surface; verify current active-user metrics and the Mercoin sale-proceeds flow in dated disclosures
- **No bank in group** — Mercari does not run a bank; JPY rails route through Merpay's 資金移動業 license + partner banks
- **Points cross-link** — Mercari ポイント can be exchanged for BTC inside Mercoin, which is the distinguishing cross-link
- **Crypto product**: verify Mercoin's current assets and in-app UX in the operator's current product page; do not infer comparative embed depth

**Adjacency evidence**: Mercari and Merpay provide disclosed marketplace, wallet and points surfaces. Verify conversion flows and acquisition effects separately. Detail: [[exchanges/jp-exchange-mercoin|jp-exchange-mercoin]].

### Laser Digital Japan — Nomura HD (8604)

**Parent FG**: [[securities-firms/nomura-hd|Nomura HD]] (TSE Prime 8604), via Laser Digital Holdings (Swiss-based digital-asset subsidiary). **Group services contributed**:
- **Institutional brokerage** — Nomura Securities provides the group brokerage surface; do not fix a retail-wealth rank or infer client transfer
- **Asset management** — [[asset-managers/nomura-asset-management|Nomura Asset Management]] provides institutional ETF / fund engineering depth
- **Trust banking** — [[trust-banks/nomura-trust-bank|Nomura Trust Bank]] provides the trust / custody-side legal entity for institutional flows
- **Public regulatory status** — Laser Digital Japan's official page says the Japanese entity provides operational services to the wider Laser Digital group; JVCEA records it as a **第二種会員** from 2025-09-19. JVCEA's membership category is not a Type II Financial Instruments Business registration, and the entity does not appear in the checked FSA crypto-asset-exchange or financial-instruments-business workbooks
- **Global Laser Digital network** — Switzerland HQ, Dubai (VARA-licensed), Abu Dhabi, and London surfaces feed institutional flow into the JP entity

**Adjacency intensity**: very high (institutional only) — Nomura's commitment is to the institutional / derivatives surface, not retail spot. The FG cross-link is brokerage-client coverage and trust-banking custody, not the consumer cross-sell that bank-FG retail VASPs use. Detail: [[exchanges/jp-exchange-laser-digital-japan|jp-exchange-laser-digital-japan]].

### Crypto Garage — Digital Garage + Tokyo Tanshi joint venture

**Parent structure**: Crypto Garage's official profile says Digital Garage and Tokyo Tanshi established the joint venture; its published board includes a Nomura Holdings director. The reviewed official profile does not identify Daiwa Securities Group as a parent or establish access to Daiwa's bank, brokerage, asset-management, or trust entities. **Group services contributed**:
- **Institutional infrastructure** — SETTLENET, OTC, custody, settlement, staking, and blockchain-development services are presented for professional and institutional users
- **License** — Crypto Garage is an FSA-registered crypto-asset exchange service provider under the Payment Services Act, Kanto Local Finance Bureau No. 00029; it is not described as a Type II Financial Instruments Business Operator

**Adjacency intensity**: medium-high (institutional joint venture) — Crypto Garage combines Digital Garage's technology surface with Tokyo Tanshi's wholesale-market adjacency and a published Nomura board link. It should not be modelled as a Daiwa group subsidiary or as a sibling of [[exchanges/jp-exchange-digital-asset-markets|Digital Asset Markets]] without a supporting ownership source. Detail: [[exchanges/jp-exchange-crypto-garage|jp-exchange-crypto-garage]].

### PayPay-related — SoftBank-FG cluster

**Parent FG**: SoftBank Group (TSE Prime 9984) via PayPay Corp and the PayPay-FG cluster. **Group services contributed**:
- **Wallet** — PayPay is the group wallet surface; verify current GMV rank and crypto linkage separately
- **Card** — PayPay Card (card issuer) and PayPay Card Gold sit inside the PayPay-FG
- **Bank** — PayPay Bank (formerly Japan Net Bank) is the in-group internet bank
- **Securities** — PayPay Securities provides the FIEA broker surface
- **Telco** — SoftBank (TSE Prime 9434, separately listed) is the parent telco channel; LINE Yahoo (TSE Prime 4689) is the messaging / search surface
- **Crypto link**: PayPay has disclosed a minority investment in [[exchanges/jp-exchange-binance-japan|Binance Japan]]; verify the current stake and governance rights in dated corporate disclosures

**Adjacency intensity**: medium (indirect) — the PayPay-FG runs a strong payments + bank + telco + securities stack but engages crypto via minority investment in Binance Japan rather than an own-brand VASP. This is a deliberate optionality posture as of 2026.

### au-related — KDDI cluster

**Parent FG**: KDDI (TSE Prime 9433) via auじぶん銀行 / au PAY / au Financial cluster. **Group services contributed**:
- **Telco** — KDDI (au) provides the group telco surface; do not use a fixed market-count classification
- **Bank** — auじぶん銀行 (joint venture with MUFG) is the in-group internet bank
- **Wallet** — au PAY (QR / code payment) and au PAY Card sit inside the FG
- **Securities** — auカブコム証券 (joint venture with MUFG, formerly カブドットコム証券) provides FIEA broker surface
- **Crypto link**: as of 2026 the au-FG does not run an own-brand VASP; the FG's crypto posture is observational / partnership-based rather than license-holding

**Adjacency intensity**: low (no own VASP) — the au-FG built out the bank / wallet / brokerage / card stack but has not entered crypto exchange directly. This is the structural counterfactual to the PayPay-FG Binance Japan minority position.

## Big comparison matrix table

Source: the FSA registry, JVCEA membership list, and parent-group official sites listed in frontmatter. Ownership and group services can change, so the table avoids inferred intensity rankings, user counts, market positions and unsupported absence claims.

| Operator / cluster | Public verification entry | Relationship recorded here |
|---|---|---|
| **SBI VC Trade / SBI** | https://www.sbigroup.co.jp/ | parent-group ecosystem |
| **GMO Coin / GMO** | https://www.gmo.jp/ | parent-group ecosystem |
| **bitFlyer** | https://corporate.bitflyer.com/ | corporate group information |
| **Coincheck / Monex** | https://www.monexgroup.jp/ | parent-group relationship |
| **Rakuten Wallet / Rakuten** | https://corp.rakuten.co.jp/ | parent-group ecosystem |
| **DMM Bitcoin / DMM** | https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx | registry and historical status |
| **Mercoin / Mercari** | https://about.mercari.com/ | parent-group relationship |
| **Laser Digital Japan / Nomura** | https://www.laserdigital.com/japan/en/information/about-laser-digital-japan | official Japan entity description |
| **Crypto Garage** | https://cryptogarage.co.jp/en/about/ | disclosed shareholders and business |
| **JVCEA membership** | https://jvcea.or.jp/member/ | current membership category |

## Reading the adjacency evidence

The table is an ownership-and-entry-point map, not a ranking. A group relationship does not by itself prove shared customer acquisition, preferential funding, instant settlement, loss support or product integration. Those claims require a dated parent-company disclosure or operator announcement and should be evaluated separately.

## Cross-products commonly contributed by parent FGs

The following cross-products appear repeatedly across the matrix and represent the **menu of FG-contributable surfaces** a VASP can plug into:

- **Bank-deposit rail** — in-group bank account that customer can use for instant JPY in/out (SBI Shinsei, Rakuten Bank, GMO Aozora Net, Daiwa Next Bank, auじぶん銀行, PayPay Bank). Without an in-group bank, the VASP must route through partner-megabank rails with corresponding settlement-time and fee disadvantages.
- **Securities-brokerage account base** — the parent's existing FIEA brokerage customers as a cross-sell pool (SBI Securities, Rakuten Securities, Nomura Securities, Daiwa Securities, Monex Securities, GMO Click Securities, auカブコム証券, PayPay Securities). Cross-sell from a brokerage account is the lowest-CAC channel for a JP VASP.
- **Wallet / 資金移動業** — Merpay, PayPay, au PAY, Rakuten Pay, Rakuten Edy, SBI Remit (outbound remit). The 資金移動業 license is structurally complementary to 暗号資産交換業 since it handles JPY-side movement that the VASP's exchange license does not cover.
- **Points / loyalty cross-link** — Rakuten Points, PayPay Points, Ponta, JRE POINT, nanaco Points, WAON Points and dPoint are possible loyalty surfaces. Verify actual crypto integration and economics in dated disclosures; see [[exchanges/jp-cex-points-economy-integration|JP CEX points-economy integration]].
- **Card-issuer surface** — Rakuten Card, PayPay Card, [[card-issuers/aeon-financial-service|AEON Financial Service]] cards, JCB (multi-FG), [[card-issuers/smbc-card|SMBC Card]], [[card-issuers/mufg-nicos|MUFG NICOS]]. Card-issuer integration lets a VASP enable JPY auto-charge or crypto-purchase via card.
- **Insurance cross-sell** — [[life-insurers/sbi-life|SBI Life]], [[life-insurers/rakuten-life|Rakuten Life]], Nomura insurance, AIG. Less directly crypto-relevant but contributes to overall FG bundle.
- **E-commerce / marketplace** — Rakuten Ichiba, Mercari, DMM marketplaces. Marketplace integration enables merchant-side crypto-payment experiments and seller-side off-ramp.
- **Telco channel** — SoftBank, KDDI (au), NTT DoCoMo, Rakuten Mobile. Telco distribution gives MNO bundling optionality for the FG.

The number of adjacent group surfaces does not itself establish integration depth or unit economics. Record only disclosed links, then evaluate commercial effects separately.

## Funding-cost lens across the matrix

A JPY-funding-cost ranking cannot be inferred from parent ownership or in-group bank presence alone:

- **In-group bank evidence**: record disclosed bank relationships and settlement products without assigning a funding-cost tier
- **Parent capital-market evidence**: listed-parent status and wallet licences do not disclose the VASP's actual borrowing or liquidity terms
- **External funding evidence**: record only dated credit facilities, guarantees, intercompany loans or settlement agreements

Funding terms can affect liquidity operations, but group affiliation alone does not prove cheaper funding, deeper books or tighter spreads. See [[exchanges/jp-crypto-bank-credit-facilities|JP crypto bank credit facilities]] for dated facility evidence.

## Incident-response capacity across the matrix

Incident-response capacity must be assessed from dated financing and make-whole evidence, not parent-group labels:

- **Observed case**: verify DMM Bitcoin's make-whole amount and funding route in DMM's dated disclosures
- **Untested groups**: do not infer incident support from consolidated balance-sheet size
- **Independent operators**: absence of a listed parent does not establish response capacity; verify cash, insurance, credit and incident plans

The Coincheck and DMM incidents show why disclosed funding, insurance, segregation and recovery plans should be reviewed together. They do not prove that an operator without a parent backstop cannot recover.

## Boundary cases

- **Coincheck Group N.V. NASDAQ listing (2024)** — After the SPAC merger, the question becomes whether **Coincheck Inc. (Japan)** is best read as a Monex Group subsidiary (its corporate parent in JP) or as a Coincheck Group N.V. subsidiary (its ultimate listed parent in the US). For matrix purposes both are recorded — the JP parent FG ecosystem flows through Monex, while the global capital surface flows through Coincheck Group N.V. The matrix uses both labels.
- **DMM Bitcoin wind-down (2024) → SBI VC Trade handover** — The post-Lazarus customer migration to SBI VC Trade is a unique event in JP VASP history. After completion, the DMM HD row effectively zeroes out and the migrated user base shifts to the SBI HD row. The matrix records the pre-2024 state with a wind-down note rather than deleting the row, since the historical FG-adjacency lesson (non-financial parent backstop) remains the most-cited precedent.
- **PayPay's minority position in Binance Japan** — verify the current stake, governance rights and operating relationship in dated PayPay / Binance disclosures; do not infer adjacency intensity or strategic intent from the investment alone.
- **Mercari HD as a non-bank parent FG** — Mercari does not hold a bank, but Merpay's 資金移動業 license effectively delivers the JPY in/out function via the [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer regulatory route]]. For the matrix this is recorded as "no bank in group / wallet in group" rather than "bank in group", because the regulatory entity is fundamentally different from a Banking Act bank.
- **Laser Digital Japan / Crypto Garage regulatory routes** — Laser Digital Japan is a JVCEA 第二種会員 and says it provides group operational services; that membership label is not FIEA Type II registration. Crypto Garage is instead an FSA-registered crypto-asset exchange service provider (Kanto No. 00029). The matrix includes both because they are institution-facing crypto entities, but it records these different public regulatory routes rather than collapsing them into a fictional shared FIEA Type II license. ^[Sources: https://www.laserdigital.com/japan/en/information/about-laser-digital-japan; https://jvcea.or.jp/information/admission-info/20250919-001/; https://cryptogarage.co.jp/en/about/; https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx.]
- **au-FG comparison** — record KDDI's disclosed payment, banking and brokerage entities and verify any crypto relationship in current registrations and announcements; do not infer a missing-position cost.
- **bitFlyer's deliberate independence** — bitFlyer chose to remain independent through multiple acquisition discussions (most recently 2024-2025 speculation around a Mizuho-FG or SBI-FG sale that did not materialize). The matrix records this as **low adjacency** but flags that the operator compensates with brand strength and JVCEA-network position rather than parent infrastructure.

## Related

- [[exchanges/INDEX]]
- [[exchanges/jp-vasp-parent-company-map]]
- [[exchanges/jp-crypto-exchange-overview]]
- [[exchanges/jp-cex-points-economy-integration]]
- [[exchanges/jp-crypto-bank-credit-facilities]]
- [[exchanges/jp-vasp-ma-consolidation-history]]
- [[exchanges/jp-vasp-incident-history]]
- [[exchanges/fsa-vasp-registration-system]]
- [[exchanges/jp-vasp-derivative-license-system]]
- [[exchanges/jp-cex-sales-vs-exchange-model-economics]]
- [[exchanges/jp-cex-deposit-token-stablecoin-integration]]
- [[exchanges/jp-cex-staking-lending-regulation]]
- [[exchanges/jp-exchange-sbi-vc-trade]]
- [[exchanges/jp-exchange-gmo-coin]]
- [[exchanges/jp-exchange-bitflyer]]
- [[exchanges/jp-exchange-coincheck]]
- [[exchanges/jp-exchange-rakuten-wallet]]
- [[exchanges/jp-exchange-dmm-bitcoin]]
- [[exchanges/jp-exchange-mercoin]]
- [[exchanges/jp-exchange-laser-digital-japan]]
- [[exchanges/jp-exchange-crypto-garage]]
- [[exchanges/jp-exchange-binance-japan]]
- [[exchanges/jp-exchange-bi-fxtrade]]
- [[exchanges/jp-exchange-digital-asset-markets]]
- [[exchanges/jp-exchange-custodiem]]
- [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis]]
- [[megabanks/sbi-hd]]
- [[payment-firms/gmo-financial-hd]]
- [[securities-firms/monex-group]]
- [[payment-firms/rakuten-fg]]
- [[payment-firms/mercari-hd]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]

## Sources

- FSA registered crypto-asset exchange operators (暗号資産交換業者) list: https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
- JVCEA member list (Japan Virtual and Crypto Assets Exchange Association): https://jvcea.or.jp/member/
- SBI HD corporate site: https://www.sbigroup.co.jp/
- GMO Internet Group corporate site: https://www.gmo.jp/
- Monex Group corporate site: https://www.monexgroup.jp/
- Rakuten Group corporate site: https://corp.rakuten.co.jp/
- Mercari HD corporate site: https://about.mercari.com/
- Nomura HD corporate site: https://www.nomuraholdings.com/
- Daiwa Securities Group corporate site: https://www.daiwa-grp.jp/
- DMM Group corporate site: https://www.dmm.com/
- bitFlyer Holdings corporate site: https://corporate.bitflyer.com/
- KDDI corporate site: https://www.kddi.com/
- SoftBank Group corporate site: https://group.softbank/
- Operator IR disclosures cited row-by-row in the matrix
