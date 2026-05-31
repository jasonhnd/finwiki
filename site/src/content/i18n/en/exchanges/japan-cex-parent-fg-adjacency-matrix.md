---
source: exchanges/japan-cex-parent-fg-adjacency-matrix
source_hash: 0b1c671dd7279df6
lang: en
status: machine
fidelity: ok
title: "Japan CEX parent FG adjacency matrix"
translated_at: 2026-05-31T03:19:56.486Z
---

# Japan CEX parent FG adjacency matrix

## TL;DR

A Japanese **暗号資産交換業者** (FSA-registered VASP) is rarely a standalone business — it is almost always a node inside a parent **financial group (FG)** that already runs securities, banking, payments, points, remittance, insurance, or e-commerce. The FG-adjacency dimension is what determines (a) **funding cost** for the VASP, (b) the **points-and-rewards** cross-link to the parent's loyalty surface, (c) the **bank-account-deposit channel** for JPY in/out, (d) the **distribution channel** for crypto products into the FG's existing brokerage / wallet / app surface, and (e) **regulatory cluster supervision** across both the FSA crypto track and the Banking Act / FIEA tracks the parent already runs. This matrix is the cross-reference for **which FG each operator belongs to and which ecosystem services the parent contributes**, sitting under [[exchanges/INDEX|exchanges index]] as the operational complement to the corporate-ownership taxonomy in [[exchanges/jp-vasp-parent-company-map|JP VASP parent company map]].

## Wiki route

This sits under [[exchanges/INDEX|exchanges index]] as the FG-adjacency operational matrix. Read it alongside [[exchanges/jp-vasp-parent-company-map|JP VASP parent company map]] for the ownership taxonomy that this entry operationalizes, [[exchanges/jp-crypto-exchange-overview|JP crypto exchange overview]] for the broader market landscape, [[exchanges/jp-cex-points-economy-integration|JP CEX points-economy integration]] for the points-cross-link dimension, [[exchanges/jp-crypto-bank-credit-facilities|JP crypto bank credit facilities]] for the bank-funding-cost angle, [[exchanges/jp-vasp-ma-consolidation-history|JP VASP M&A consolidation history]] for the structural reshuffling that produced today's parent-FG map, and [[exchanges/fsa-vasp-registration-system|FSA VASP registration system]] for the supervisory framework that all rows share. Entity anchors for the major positions are [[JapanFG/sbi-hd|SBI HD]], [[JapanFG/gmo-financial-hd|GMO Financial HD]], [[JapanFG/monex-group|Monex Group]], [[JapanFG/rakuten-fg|Rakuten FG]], [[JapanFG/mercari-hd|Mercari HD]], [[JapanFG/nomura-hd|Nomura HD]], and [[JapanFG/daiwa-sg|Daiwa Securities Group]].

## Why this matrix matters

The "what does the parent FG actually give the VASP" question is not academic. A VASP whose parent runs a **securities brokerage** with millions of active accounts can cross-sell a crypto product into that existing account base at roughly zero customer-acquisition cost; a VASP whose parent runs a **direct-bank** can settle JPY deposits intra-group with no interbank fee and no settlement lag; a VASP whose parent runs a **payments wallet** can route crypto-to-fiat off-ramp through the wallet's prepaid balance instead of a third-party PSP; a VASP whose parent runs a **points loyalty programme** can mint promotional crypto-rewards using the parent's loyalty inventory; and a VASP whose parent runs an **e-commerce or marketplace** business can settle merchant-side crypto experiments through the parent's existing merchant relationship.

Each of those connections has a measurable effect on **CAC** (customer acquisition cost), **unit economics**, **JPY funding cost**, **product velocity** (how fast a new feature can ship using parent infrastructure), and **incident-response posture** (whether a hack can be cushioned by parent liquidity, as in [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack detailed analysis]] where the parent DMM HD covered the customer make-whole). The matrix below names each parent FG and the specific cross-services it contributes, so a reader can answer "what does this VASP look like with parent context stripped away" before any product-level comparison.

## Per-operator profiles

### SBI VC Trade — SBI HD (8473)

**Parent FG**: [[JapanFG/sbi-hd|SBI HD]] (TSE Prime 8473), Japan's largest online-finance conglomerate by retail-securities account count via [[JapanFG/sbi-securities|SBI Securities]]. **Group services contributed**:
- **Securities cross-sell** — SBI VC Trade reaches into the SBI Securities account base (Japan's #1 online broker) as a cross-promotion lane, with the SBI 共通 ID linking accounts across group brands
- **Bank-deposit channel** — [[JapanFG/sbi-shinsei-bank|SBI Shinsei Bank]] (group bank, Mizuho-line legacy) provides the in-group JPY settlement rail; [[JapanFG/sbi-regional-bank-hd|SBI Regional Bank HD]] (regional-bank holding) and partner regional banks contribute additional bank deposits
- **Remittance** — [[JapanFG/sbi-remit|SBI Remit]] runs the group's outbound remittance / 資金移動業 surface
- **FX adjacency** — [[JapanFG/sbi-fx-trade|SBI FX Trade]] runs leveraged-FX, and the affiliated [[exchanges/jp-exchange-bi-fxtrade|BI FXTRADE]] holds the crypto-derivatives license inside the group
- **Insurance / asset management** — [[JapanFG/sbi-life|SBI Life]], [[JapanFG/sbi-insurance|SBI Insurance]], [[JapanFG/sbi-asset-management|SBI Asset Management]] round out the group's product depth

**Adjacency intensity**: very high — the parent group runs an integrated financial-superstore model and the VASP is one of the cross-sell surfaces. JPY in/out is fastest in the industry partly because of the SBI Shinsei bank-rail. Detail: [[exchanges/jp-exchange-sbi-vc-trade|jp-exchange-sbi-vc-trade]].

### GMO Coin — GMO Financial HD (7177) / GMO Internet Group (9449)

**Parent FG**: [[JapanFG/gmo-financial-hd|GMO Financial HD]] (TSE Prime 7177), itself a subsidiary of GMO Internet Group (TSE Prime 9449). **Group services contributed**:
- **Securities cross-sell** — [[JapanFG/gmo-click-securities|GMO Click Securities]] (group brokerage, also GMO Financial HD subsidiary) provides FIEA-side product depth and shared infrastructure
- **Direct bank** — [[JapanFG/gmo-aozora-net|GMO Aozora Net Bank]] (joint venture with Aozora Bank) runs as the group internet-bank, contributing an internal JPY-deposit rail
- **Payment processing** — [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]] (TSE Prime, listed separately) is a top-3 JP PSP; [[JapanFG/gmo-epsilon|GMO Epsilon]] is the SME-focused PSP arm
- **BNPL** — [[JapanFG/gmo-postpay|GMO Postpay]] runs the group's BNPL / 後払い line
- **Internet infrastructure** — the broader GMO Internet Group runs the GMO Cloud / domain / SSL businesses, contributing operational-engineering depth

**Adjacency intensity**: high — internet-finance pure-play synergy with shared engineering culture across brokerage, banking, payments, and crypto. Detail: [[exchanges/jp-exchange-gmo-coin|jp-exchange-gmo-coin]].

### bitFlyer — independent (no listed parent)

**Parent FG**: bitFlyer Holdings (private, founder + management + minority financial-investor cap-table). **Group services contributed**:
- **No FG ecosystem services in the megabank sense** — bitFlyer is the largest independent VASP without a megabank or e-commerce parent
- **Internal sister entity**: [[exchanges/jp-exchange-custodiem|Custodiem]] (旧 FTX Japan, acquired 2024) sits inside bitFlyer Holdings for institutional / segregated-asset business
- **External partnership rails**: bitFlyer routes JPY through partner megabanks (no in-group bank) and runs partnership-based points crosslinks (e.g., T-Point legacy distribution)

**Adjacency intensity**: low — bitFlyer is the prototypical **independent** structure. It compensates with brand strength, JVCEA leadership presence, and tight in-house engineering culture, but lacks the cross-sell flywheel of bank-FG-backed peers. Detail: [[exchanges/jp-exchange-bitflyer|jp-exchange-bitflyer]].

### Coincheck — Monex Group (8698) / Coincheck Group N.V. (NASDAQ:CNCK)

**Parent FG**: [[JapanFG/monex-group|Monex Group]] (TSE Prime 8698), now operating through Coincheck Group N.V. (NASDAQ-listed via 2024 SPAC merger). **Group services contributed**:
- **Securities cross-sell** — Monex Securities (group brokerage) provides the FIEA brokerage surface and US-equity / global-investing distribution
- **Crypto derivatives** — Monex 株式会社 (Monex Inc., separate license holder) runs crypto derivatives under FIEA Type 1, complementing Coincheck's spot-only license
- **TradeStation** — Monex Group's US TradeStation arm provides US-market and futures-platform engineering depth
- **Global capital surface** — the NASDAQ listing post-2024 SPAC gives Coincheck direct USD capital-market access (rare for JP VASP)

**Adjacency intensity**: medium-high — Monex provides securities cross-sell, derivative-license sister entity, and global capital access. Coincheck retains independent brand and product surface. Detail: [[exchanges/jp-exchange-coincheck|jp-exchange-coincheck]].

### Rakuten Wallet — Rakuten Group (4755) / Rakuten FG

**Parent FG**: [[JapanFG/rakuten-fg|Rakuten FG]] inside Rakuten Group (TSE Prime 4755). **Group services contributed**:
- **Bank** — Rakuten Bank (listed separately, TSE Prime 5838) is one of Japan's largest internet banks; contributes the dominant in-group JPY rail
- **Securities** — [[JapanFG/rakuten-securities|Rakuten Securities]] (online broker, top-3 by account count) provides the FIEA brokerage surface
- **Card** — [[JapanFG/rakuten-card|Rakuten Card]] (largest JP card issuer by transaction value) provides the card-side surface
- **Points** — Rakuten Points (largest JP loyalty programme, ~90M ID holders) is the cross-link surface; Rakuten Wallet historically allowed crypto purchases using Rakuten Points
- **Edy** — [[JapanFG/rakuten-edy|Rakuten Edy]] is the prepaid-e-money arm; see [[payments/japan-prepaid-electronic-money-operator-matrix|JP prepaid e-money operator matrix]]
- **Insurance** — [[JapanFG/rakuten-life|Rakuten Life]], [[JapanFG/rakuten-general-insurance|Rakuten General Insurance]], [[JapanFG/rakuten-insurance-hd|Rakuten Insurance HD]]
- **E-commerce** — Rakuten Ichiba (largest JP marketplace) is the merchant-side surface where in-group crypto experiments can be tested
- **Mobile** — Rakuten Mobile (MNO) gives the group a telco channel

**Adjacency intensity**: very high — among the deepest FG ecosystems in JP, with the unique points-cross-link being a distinguishing feature among VASPs. Detail: [[exchanges/jp-exchange-rakuten-wallet|jp-exchange-rakuten-wallet]].

### DMM Bitcoin — DMM HD (private)

**Parent FG**: DMM.com Group (private). **Group services contributed**:
- **Securities** — DMM.com Securities runs the FX / equity broker arm
- **Crypto-adjacent product**: [[exchanges/jp-exchange-dmm-com-securities|DMM.com Securities]] holds the FIEA crypto-derivative line
- **No bank in group** — DMM uses external megabank partnerships for JPY rails
- **Distribution** — DMM's adult-content / video / e-commerce surfaces provide a marketing reach that no other JP VASP parent matches
- **Group financial capacity** — the Lazarus 2024-05 hack make-whole was funded by the parent group (~ JPY 48 billion), demonstrating the FG's standalone capital backstop role: see [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack detailed analysis]]. DMM Bitcoin subsequently announced service handover to SBI VC Trade with customer migration in 2024

**Adjacency intensity**: medium (pre-2024) → near-zero (post-handover) — the case demonstrates that **even a non-financial parent FG with adequate cash can backstop a VASP hack**, and the eventual wind-down shows the limits when group strategic priority shifts. Detail: [[exchanges/jp-exchange-dmm-bitcoin|jp-exchange-dmm-bitcoin]].

### Mercoin — Mercari HD (4385)

**Parent FG**: [[JapanFG/mercari-hd|Mercari HD]] (TSE Prime 4385). **Group services contributed**:
- **Wallet / payments** — Merpay (group wallet, holds 資金移動業 license) provides the in-group JPY rail and is the primary entry point for Mercoin's BTC purchases via Mercari points / Mercari sales proceeds
- **Marketplace** — Mercari (largest JP C2C marketplace, ~22M monthly active) is the customer-acquisition channel; the marketplace's UX lets sellers convert sale proceeds directly into BTC via Mercoin
- **No bank in group** — Mercari does not run a bank; JPY rails route through Merpay's 資金移動業 license + partner banks
- **Points cross-link** — Mercari ポイント can be exchanged for BTC inside Mercoin, which is the distinguishing cross-link
- **Crypto product**: Mercoin offers BTC and a narrow set of additional crypto; the in-app UX is integrated into the Mercari mobile app (rare embed depth among JP VASPs)

**Adjacency intensity**: very high — Mercari HD effectively built a captive on-ramp via the marketplace customer base. The product strategy is to make BTC purchases feel like a feature of Mercari rather than a separate exchange. Detail: [[exchanges/jp-exchange-mercoin|jp-exchange-mercoin]].

### Laser Digital Japan — Nomura HD (8604)

**Parent FG**: [[JapanFG/nomura-hd|Nomura HD]] (TSE Prime 8604), via Laser Digital Holdings (Swiss-based digital-asset subsidiary). **Group services contributed**:
- **Institutional brokerage** — Nomura Securities (group brokerage, JP #1 by retail wealth) provides institutional client base and prime-brokerage adjacency
- **Asset management** — [[JapanFG/nomura-asset-management|Nomura Asset Management]] provides institutional ETF / fund engineering depth
- **Trust banking** — [[JapanFG/nomura-trust-bank|Nomura Trust Bank]] provides the trust / custody-side legal entity for institutional flows
- **License** — Laser Digital Japan holds FIEA Type 2 (derivatives-focused) rather than the standard 暗号資産交換業, reflecting the institutional / derivatives focus rather than retail spot
- **Global Laser Digital network** — Switzerland HQ, Dubai (VARA-licensed), Abu Dhabi, and London surfaces feed institutional flow into the JP entity

**Adjacency intensity**: very high (institutional only) — Nomura's commitment is to the institutional / derivatives surface, not retail spot. The FG cross-link is brokerage-client coverage and trust-banking custody, not the consumer cross-sell that bank-FG retail VASPs use. Detail: [[exchanges/jp-exchange-laser-digital-japan|jp-exchange-laser-digital-japan]].

### Crypto Garage — Daiwa Securities Group (8601) + DG / 野村 connection

**Parent FG**: [[JapanFG/daiwa-sg|Daiwa Securities Group]] (TSE Prime 8601), with DG ホールディングス (Digital Garage 4819), 東京短資, and other strategic investors on cap table. **Group services contributed**:
- **Securities** — Daiwa Securities (group brokerage, JP #2 by retail wealth) provides institutional surface
- **Asset management** — [[JapanFG/daiwa-asset-management|Daiwa Asset Management]] provides asset-management engineering depth
- **Trust banking** — [[JapanFG/daiwa-living-trust|Daiwa Living Trust]] / Daiwa Trust functions
- **Direct bank** — [[JapanFG/daiwa-next-bank|Daiwa Next Bank]] (group direct-bank) provides in-group JPY rail
- **License** — Crypto Garage holds Type 2 / institutional-focus structure, similar in posture to Laser Digital Japan; the entity is positioned for PTS / institutional / DCJPY / stablecoin-issuance experimentation rather than retail spot

**Adjacency intensity**: high (institutional / experimental) — Crypto Garage sits at the intersection of Daiwa institutional surface and JPX-adjacent experimentation, with sibling-entity [[exchanges/jp-exchange-digital-asset-markets|Digital Asset Markets]] in the same JPX / 三井物産 / Monex consortium for institutional spot. Detail: [[exchanges/jp-exchange-crypto-garage|jp-exchange-crypto-garage]].

### PayPay-related — SoftBank-FG cluster

**Parent FG**: SoftBank Group (TSE Prime 9984) via PayPay Corp and the PayPay-FG cluster. **Group services contributed**:
- **Wallet** — PayPay (largest JP QR / code payment by GMV) is the cross-link surface
- **Card** — PayPay Card (card issuer) and PayPay Card Gold sit inside the PayPay-FG
- **Bank** — PayPay Bank (formerly Japan Net Bank) is the in-group internet bank
- **Securities** — PayPay Securities provides the FIEA broker surface
- **Telco** — SoftBank (TSE Prime 9434, separately listed) is the parent telco channel; LINE Yahoo (TSE Prime 4689) is the messaging / search surface
- **Crypto link**: PayPay holds ~40% of [[exchanges/jp-exchange-binance-japan|Binance Japan]] (acquired SEBC license vehicle), giving PayPay-FG indirect crypto-exchange exposure without holding an own-name VASP license

**Adjacency intensity**: medium (indirect) — the PayPay-FG runs a strong payments + bank + telco + securities stack but engages crypto via minority investment in Binance Japan rather than an own-brand VASP. This is a deliberate optionality posture as of 2026.

### au-related — KDDI cluster

**Parent FG**: KDDI (TSE Prime 9433) via auじぶん銀行 / au PAY / au Financial cluster. **Group services contributed**:
- **Telco** — KDDI (au) is one of the 3 MNOs
- **Bank** — auじぶん銀行 (joint venture with MUFG) is the in-group internet bank
- **Wallet** — au PAY (QR / code payment) and au PAY Card sit inside the FG
- **Securities** — auカブコム証券 (joint venture with MUFG, formerly カブドットコム証券) provides FIEA broker surface
- **Crypto link**: as of 2026 the au-FG does not run an own-brand VASP; the FG's crypto posture is observational / partnership-based rather than license-holding

**Adjacency intensity**: low (no own VASP) — the au-FG built out the bank / wallet / brokerage / card stack but has not entered crypto exchange directly. This is the structural counterfactual to the PayPay-FG Binance Japan minority position.

## Big comparison matrix table

| VASP | Parent FG | TSE code | Bank in group | Securities in group | Wallet/payments in group | Points in group | Insurance | E-commerce / marketplace | Adjacency intensity | Cross-sell flywheel |
|---|---|---|---|---|---|---|---|---|---|---|
| **SBI VC Trade** | [[JapanFG/sbi-hd\|SBI HD]] | 8473 | [[JapanFG/sbi-shinsei-bank\|SBI Shinsei Bank]] + regional-bank-HD | [[JapanFG/sbi-securities\|SBI Securities]] (JP #1 online) | [[JapanFG/sbi-remit\|SBI Remit]] | SBI 共通 ID | [[JapanFG/sbi-life\|SBI Life]] + [[JapanFG/sbi-insurance\|SBI Insurance]] | (limited) | very high | Yes — superstore model |
| **GMO Coin** | [[JapanFG/gmo-financial-hd\|GMO Financial HD]] / GMO Internet | 7177 / 9449 | [[JapanFG/gmo-aozora-net\|GMO Aozora Net]] | [[JapanFG/gmo-click-securities\|GMO Click Securities]] | [[JapanFG/gmo-payment-gateway\|GMO Payment Gateway]] + [[JapanFG/gmo-epsilon\|GMO Epsilon]] | (limited) | (limited) | (limited) | high | Yes — internet-finance |
| **bitFlyer** | independent | n/a | partner banks only | (none) | (none) | partnership only | (none) | (none) | low | No — brand only |
| **Coincheck** | [[JapanFG/monex-group\|Monex Group]] (via Coincheck Group N.V., NASDAQ:CNCK) | 8698 (JP) / CNCK (US) | (none in JP) | Monex Securities | (none) | Monex points | (none) | (none) | medium-high | Yes — securities cross-sell + global capital |
| **Rakuten Wallet** | [[JapanFG/rakuten-fg\|Rakuten FG]] / Rakuten Group | 4755 | Rakuten Bank (5838) | [[JapanFG/rakuten-securities\|Rakuten Securities]] | [[JapanFG/rakuten-card\|Rakuten Card]] + [[JapanFG/rakuten-edy\|Rakuten Edy]] | Rakuten Points (~90M IDs) | [[JapanFG/rakuten-life\|Rakuten Life]] + [[JapanFG/rakuten-general-insurance\|Rakuten General Insurance]] | Rakuten Ichiba | very high | Yes — full superstore + points |
| **DMM Bitcoin** | DMM HD (private) | n/a | (none) | DMM.com Securities | (none) | DMM Points | (none) | DMM marketplaces | medium → wind-down 2024 | (was) marketing reach |
| **Mercoin** | [[JapanFG/mercari-hd\|Mercari HD]] | 4385 | (none) | (none) | Merpay (資金移動業) | Mercari Points | (none) | Mercari (largest JP C2C) | very high | Yes — captive marketplace on-ramp |
| **Laser Digital Japan** | [[JapanFG/nomura-hd\|Nomura HD]] | 8604 | (none own bank) | Nomura Securities (JP #1 wealth) | (none) | (none) | (Nomura Insurance) | (none) | very high (institutional) | Yes — institutional client coverage |
| **Crypto Garage** | [[JapanFG/daiwa-sg\|Daiwa SG]] + DG + 東京短資 + 野村 | 8601 (Daiwa) | [[JapanFG/daiwa-next-bank\|Daiwa Next Bank]] | Daiwa Securities (JP #2 wealth) | (none) | (none) | (Daiwa Life) | (none) | high (institutional) | Yes — institutional + JPX-adjacent |
| **PayPay-related (via Binance Japan minority)** | SoftBank Group / PayPay-FG | 9984 | PayPay Bank | PayPay Securities | PayPay (largest JP QR) | PayPay Points | (limited) | (limited) | medium (indirect, ~40% stake only) | Indirect — optionality |
| **au-related** | KDDI | 9433 | auじぶん銀行 (with MUFG) | auカブコム証券 (with MUFG) | au PAY | Ponta-adjacent | (au Insurance) | au マーケット | low (no own VASP) | (no crypto entity) |

## FG-adjacency intensity ranking

Reading the matrix as a single ranking by adjacency intensity (high = parent FG contributes meaningfully across multiple of bank / securities / wallet / points / insurance / e-commerce dimensions):

1. **SBI VC Trade** (SBI HD) — financial-superstore parent, deepest cross-product reach
2. **Rakuten Wallet** (Rakuten FG) — superstore + unique points cross-link (~90M Rakuten Points IDs)
3. **Mercoin** (Mercari HD) — captive C2C-marketplace on-ramp + Merpay 資金移動業 wallet integration
4. **Laser Digital Japan** (Nomura HD) — institutional-only, deep brokerage + trust-banking adjacency
5. **GMO Coin** (GMO Financial HD / GMO Internet) — internet-finance parent with bank + brokerage + PSP
6. **Coincheck** (Monex Group / Coincheck Group N.V.) — securities cross-sell + global capital surface
7. **Crypto Garage** (Daiwa SG + DG + 東京短資 + 野村) — institutional + JPX-adjacent experimental surface
8. **PayPay-related (via Binance Japan)** (SoftBank / PayPay-FG) — minority position (~40%), indirect adjacency
9. **DMM Bitcoin** (DMM HD, pre-2024) — non-financial parent backstop role demonstrated (now wound down)
10. **bitFlyer** (independent) — no FG ecosystem services; brand + JVCEA-network position only
11. **au-related** (KDDI) — no VASP in group; placeholder / counterfactual row

The **bank-FG retail superstore model (SBI, Rakuten)**, the **captive marketplace on-ramp model (Mercoin)**, and the **institutional brokerage adjacency model (Laser Digital, Crypto Garage)** are three structurally distinct high-intensity adjacency archetypes. A reader analysing JP VASP competitive dynamics needs to identify which archetype each operator belongs to before peer-comparing fees, products, or volume metrics.

## Cross-products commonly contributed by parent FGs

The following cross-products appear repeatedly across the matrix and represent the **menu of FG-contributable surfaces** a VASP can plug into:

- **Bank-deposit rail** — in-group bank account that customer can use for instant JPY in/out (SBI Shinsei, Rakuten Bank, GMO Aozora Net, Daiwa Next Bank, auじぶん銀行, PayPay Bank). Without an in-group bank, the VASP must route through partner-megabank rails with corresponding settlement-time and fee disadvantages.
- **Securities-brokerage account base** — the parent's existing FIEA brokerage customers as a cross-sell pool (SBI Securities, Rakuten Securities, Nomura Securities, Daiwa Securities, Monex Securities, GMO Click Securities, auカブコム証券, PayPay Securities). Cross-sell from a brokerage account is the lowest-CAC channel for a JP VASP.
- **Wallet / 資金移動業** — Merpay, PayPay, au PAY, Rakuten Pay, Rakuten Edy, SBI Remit (outbound remit). The 資金移動業 license is structurally complementary to 暗号資産交換業 since it handles JPY-side movement that the VASP's exchange license does not cover.
- **Points / loyalty cross-link** — Rakuten Points (largest), PayPay Points, Ponta (au-adjacent), JRE POINT (transit, separately), nanaco Points, WAON Points, dPoint (NTT DoCoMo). The points-cross-link enables promotional crypto-rewards mint without cash burn. See [[exchanges/jp-cex-points-economy-integration|JP CEX points-economy integration]] for the per-operator integration depth.
- **Card-issuer surface** — Rakuten Card, PayPay Card, [[JapanFG/aeon-financial-service|AEON Financial Service]] cards, JCB (multi-FG), [[JapanFG/smbc-card|SMBC Card]], [[JapanFG/mufg-nicos|MUFG NICOS]]. Card-issuer integration lets a VASP enable JPY auto-charge or crypto-purchase via card.
- **Insurance cross-sell** — [[JapanFG/sbi-life|SBI Life]], [[JapanFG/rakuten-life|Rakuten Life]], Nomura insurance, AIG. Less directly crypto-relevant but contributes to overall FG bundle.
- **E-commerce / marketplace** — Rakuten Ichiba, Mercari, DMM marketplaces. Marketplace integration enables merchant-side crypto-payment experiments and seller-side off-ramp.
- **Telco channel** — SoftBank, KDDI (au), NTT DoCoMo, Rakuten Mobile. Telco distribution gives MNO bundling optionality for the FG.

A VASP that plugs into 4-5+ of these surfaces (SBI VC Trade, Rakuten Wallet) operates with structurally different unit economics than one that plugs into 0-1 (bitFlyer, DMM Bitcoin post-handover). This is the single most important framing the matrix supports.

## Funding-cost lens across the matrix

A JPY-funding-cost ranking for the VASPs in this matrix follows the in-group bank presence and parent-FG credit profile:

- **Lowest funding cost**: SBI VC Trade (SBI Shinsei in group), Rakuten Wallet (Rakuten Bank in group), GMO Coin (GMO Aozora Net in group), Crypto Garage (Daiwa Next Bank in group) — all have direct in-group bank rails and the parent FG's credit rating supports inexpensive operating capital
- **Medium funding cost**: Coincheck (Monex Group, no in-group bank but listed parent with capital-market access), Mercoin (Mercari HD, Merpay 資金移動業 covers JPY-side but no actual bank)
- **Higher funding cost**: bitFlyer (independent, no listed parent), DMM Bitcoin (pre-handover; DMM HD is private, no public capital-market access), Laser Digital Japan (institutional-only, Nomura HD strong but no direct in-group bank focused on the entity)

The funding-cost dimension matters because crypto-exchange operations require **substantial working capital** to fund order-book liquidity, customer-withdrawal buffer, and operational JPY positions. A VASP with cheap in-group funding can run a deeper book and tighter spreads than an independent VASP forced to use external bank lines or unsecured paper. See [[exchanges/jp-crypto-bank-credit-facilities|JP crypto bank credit facilities]] for the bank-credit-line specifics.

## Incident-response capacity across the matrix

The capacity of the parent FG to absorb a hack-related make-whole event varies dramatically:

- **High capacity (proven)**: DMM HD funded ~JPY 48B Lazarus 2024-05 hack make-whole for DMM Bitcoin from group cash without dilutive external financing. SBI HD, Rakuten Group, Mercari HD, Nomura HD all have similar or larger balance-sheet capacity available in principle
- **High capacity (untested)**: Monex Group, GMO Internet Group, Daiwa SG
- **Lower capacity**: bitFlyer (independent, no megaparent), pre-2018 Coincheck (independent at the time of the 2018-01 NEM hack, which is why the make-whole consumed Coincheck founders' equity and triggered the Monex acquisition)

The lesson from the Coincheck NEM 2018-01 incident ([[exchanges/coincheck-nem-hack-detailed-analysis|Coincheck NEM hack detailed analysis]]) and the DMM Bitcoin 2024-05 incident ([[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack detailed analysis]]) is that **parent FG cash backstop capacity is one of the most important non-obvious dimensions** when assessing a JP VASP's long-term standing — a VASP with no parent backstop cannot survive a major hack without dilutive external financing or service termination.

## Boundary cases

- **Coincheck Group N.V. NASDAQ listing (2024)** — After the SPAC merger, the question becomes whether **Coincheck Inc. (Japan)** is best read as a Monex Group subsidiary (its corporate parent in JP) or as a Coincheck Group N.V. subsidiary (its ultimate listed parent in the US). For matrix purposes both are recorded — the JP parent FG ecosystem flows through Monex, while the global capital surface flows through Coincheck Group N.V. The matrix uses both labels.
- **DMM Bitcoin wind-down (2024) → SBI VC Trade handover** — The post-Lazarus customer migration to SBI VC Trade is a unique event in JP VASP history. After completion, the DMM HD row effectively zeroes out and the migrated user base shifts to the SBI HD row. The matrix records the pre-2024 state with a wind-down note rather than deleting the row, since the historical FG-adjacency lesson (non-financial parent backstop) remains the most-cited precedent.
- **PayPay's minority position in Binance Japan** — The PayPay-FG holds ~40% of Binance Japan (acquired SEBC's license vehicle), but Binance Japan operates under the Binance global brand rather than as a PayPay-FG product. The matrix lists this as **medium (indirect)** adjacency rather than **none**, because the equity link gives PayPay-FG optionality on JP crypto without the capex of building from scratch.
- **Mercari HD as a non-bank parent FG** — Mercari does not hold a bank, but Merpay's 資金移動業 license effectively delivers the JPY in/out function via the [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer regulatory route]]. For the matrix this is recorded as "no bank in group / wallet in group" rather than "bank in group", because the regulatory entity is fundamentally different from a Banking Act bank.
- **Laser Digital Japan / Crypto Garage holding FIEA Type 2 rather than 暗号資産交換業** — These institutional / derivative entities are licensed under the [[exchanges/jp-vasp-derivative-license-system|FIEA Type 2 derivative]] route rather than the consumer-spot 暗号資産交換業 route. The matrix includes them because the parent FG (Nomura, Daiwa) is unambiguously crypto-active and the operational FG-adjacency mechanics are the same — but the regulatory license stack differs.
- **au-FG counterfactual** — KDDI built out one of the deepest non-bank-FG payment / banking / brokerage stacks in JP but has not entered crypto exchange. The matrix retains the empty row as a reference for "what FG-adjacency looks like without a VASP entity attached", which is useful for benchmarking the cost of the missing crypto position.
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
- [[JapanFG/sbi-hd]]
- [[JapanFG/gmo-financial-hd]]
- [[JapanFG/monex-group]]
- [[JapanFG/rakuten-fg]]
- [[JapanFG/mercari-hd]]
- [[JapanFG/nomura-hd]]
- [[JapanFG/daiwa-sg]]

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
