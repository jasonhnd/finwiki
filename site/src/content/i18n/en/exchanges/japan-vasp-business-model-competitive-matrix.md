---
source: exchanges/japan-vasp-business-model-competitive-matrix
source_hash: a51409fb3b7c29e1
lang: en
status: machine
fidelity: ok
title: "Japan VASP business-model competitive matrix — comparison of 39 社's business segments / revenue structures / differentiation axes"
translated_at: 2026-05-31T03:19:56.398Z
---

# Japan VASP business-model competitive matrix — comparison of 39 社's business segments / revenue structures / differentiation axes

## TL;DR

Japan's FSA-registered crypto-asset exchange service providers (VASPs) number approximately 27-39 社 as of 2026-05  (JVCEA membership categories + cumulative count including electronic-payment-instruments trading business). Each firm takes a different position along 10  business-model axes: **(1) spot sales-outlet / (2) spot exchange / (3) margin / leverage / (4) crypto-asset derivatives (FIEA category 1 ) / (5) custody / (6) listing specialization / (7) staking / lending / (8) IEO / (9) institutional OTC / (10) retail sales-outlet**. While the **sales-outlet spread** revenue model is the mainstay of the domestic market, foreign-affiliated Japanese entities (Binance / OKJ / OSL, etc.) appeal with **exchange order-book depth**, and Crypto Garage / Digital Asset Markets, etc. differentiate with **institutional OTC + RWA**. Starting from [[exchanges/jp-vasp-parent-company-map|親会社・株主構造マップ]] and [[exchanges/jp-crypto-exchange-overview|jp-crypto-exchange-overview]], this matrix compares 39 社 side by side along 10  axes.

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. It is the **事業モデル軸 (business-model-axis)** counterpart to [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 比較]] (規模軸) / [[exchanges/jp-vasp-parent-company-map|親会社マップ]] (資本系列軸) / [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制 8 極比較]] (規制軸). Read it alongside [[exchanges/cex-matching-engine-wallet-architecture|CEX matching engine / wallet architecture]] for the technical layer and [[exchanges/cex-native-token-strategy-comparison|CEX native token 戦略比較]] for the tokenomics dimension. Listing 自主規制 detail in [[exchanges/jvcea-whitelist-token-listing|JVCEA whitelist token listing]] and incident history in [[exchanges/jp-vasp-incident-history|jp-vasp-incident-history]].

## Why this matrix matters

- The Japanese VASP market is **heavily skewed in revenue / trading volume at the 30 社 scale** (the top 5  of bitFlyer / Coincheck / GMO Coin / SBI VC Trade / bitbank are estimated to hold 70%+ share of account count). The remaining 25-30 社 survive by **deep cultivation of specific segments** (institutional OTC / IEO / RWA / derivatives specialists / foreign-affiliated liquidity gateways).
- **Differences in revenue model greatly affect operating margin**:
  - sales-outlet spread (domestic mainstream) → operating margin 30-50%
  - exchange order-book depth (foreign liquidity bridge) → operating margin 5-15%
  - derivatives (FIEA category 1 ) → operating margin 20-40%
  - institutional OTC / RWA → operating margin unstable (dependent on large-lot trades)
- Because **JVCEA token review** narrows the number of tokens, foreign-affiliated Japanese entities (Binance / OKJ / OSL / Bybit Japan in planning) **structurally cannot bring their global parent's token lineup into the Japanese market**. This becomes a "regulatory moat that suppresses foreign majors' incentive to enter the Japanese market."
- Two major emerging segments:
  - **Electronic-payment-instruments trading business (ECISP)** = SBI VC Trade began handling USDC 第00001号 onward (2025-03), with other firms expected to follow
  - **IEO** = Coincheck IEO was the first domestic introduction, followed by GMO Coin / bitbank

## Per-operator sections

### A. Independent veterans + bitFlyer Holdings-affiliated (spot + derivatives mainstay)

- **[[exchanges/jp-exchange-bitflyer|bitFlyer]]** (Kanto Local Finance Bureau 第00003号, JVCEA #1002)
  - **Model**: spot sales-outlet + exchange (Lightning Spot) + derivatives (Lightning FX) + credit card (bitFlyer credit card, issued by APLUS)
  - **Revenue axis**: continued domestic No.1 in BTC volume + derivatives fees + bitFlyer credit card from APLUS
  - **2025-12  results**: revenue 135 億円, operating profit 42 億円
  - **Differentiation**: order-book depth of Lightning FX derivatives + multi-jurisdiction expansion (US subsidiary bitFlyer USA, European subsidiary bitFlyer Europe SAS)
  - **2024  developments**: acquired [[exchanges/jp-exchange-custodiem|Custodiem]] (former FTX Japan) in 2024  → reinforcing derivatives
- **[[exchanges/jp-exchange-bitbank|bitbank]]** (FSA-registered, independent)
  - **Model**: spot exchange (order-book-trading specialized) + staking + IEO
  - **Revenue axis**: trading fees (Maker rebate model)
  - **Differentiation**: domestic spot order-book volume No.2  class, a non-listed private company sticking to independence
  - **Strategy**: early IEO entry + competing on retail exchange order-book depth
- **[[exchanges/jp-exchange-btcbox|BTCBOX]]** (independent veteran)
  - **Model**: spot exchange (BTC-centered) + Chinese-affiliated liquidity
  - **Differentiation**: English / Chinese support for Chinese-affiliated users

### B. Financial-group-affiliated (spot + derivatives + staking, full-spectrum)

- **[[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]** (Kanto Local Finance Bureau 第00011号, JVCEA #1011)
  - **Model**: spot sales-outlet + derivatives (3247 号, FIEA category 1 ) + ECISP USDC (domestic ECISP 第00001号) + staking + USDC lending (2026-03  first domestically)
  - **Revenue axis**: sales-outlet spread + derivatives fees + USDC lending interest
  - **Differentiation**: **the only firm in Japan simultaneously holding 3  licenses** (crypto-asset exchange + FIEA category 1  + ECISP). Exclusively distributes domestic USDC via the SBI Circle Holdings 50/50  JV (2025-08)
  - **Strategy**: becoming the kingmaker of the USD-JPY SC cross-border compliance channel (see [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環]])
- **[[exchanges/jp-exchange-gmo-coin|GMO Coin]]** (Kanto Local Finance Bureau 第00006号, JVCEA #1006)
  - **Model**: spot sales-outlet + exchange + leveraged trading + staking + crypto-asset lending
  - **Revenue axis**: sales-outlet spread (one of the largest domestic revenue engines) + leverage fees
  - **Differentiation**: as an extension of the GMO Internet Group's (9449) infrastructure business, in-house development of the technical stack
- **[[exchanges/jp-exchange-coincheck|Coincheck]]** (Kanto Local Finance Bureau 第00014号, JVCEA #1017, Monex-affiliated)
  - **Model**: spot sales-outlet + exchange + first domestic IEO introduction + NFT marketplace (Coincheck NFT)
  - **Revenue axis**: sales-outlet spread + IEO listing fees + NFT trading fees
  - **Differentiation**: access to global capital markets via Coincheck Group N.V. (Nasdaq-listed CNCK/CNCKW)
  - **Strategy**: acquiring Gen Z via NFT × IEO
- **[[exchanges/jp-exchange-rakuten-wallet|Rakuten Wallet]]** (Rakuten Group 4755 -affiliated)
  - **Model**: spot sales-outlet + Rakuten Points linkage (Rakuten-ecosystem bridge)
  - **Differentiation**: a full-spectrum lifestyle bridge linking Rakuten ID + Rakuten Bank + Rakuten Securities
- **[[exchanges/jp-exchange-mercoin|Mercoin]]** (Mercari 4385 -affiliated)
  - **Model**: spot sales-outlet + Merpay linkage (flea-market sales bridge)
  - **Differentiation**: a funnel directly connecting Mercari sales proceeds to crypto-asset purchases

### C. Foreign-affiliated Japanese entities (global liquidity bridge)

- **[[exchanges/jp-exchange-binance-japan|Binance Japan]]** (JVCEA Type 1, invested in by PayPay 40%)
  - **Model**: spot sales-outlet + exchange + staking (limited to domestic tokens)
  - **Differentiation**: bridges the liquidity of the global Binance parent, but constrained by the JVCEA token list
  - **Strategy**: obtained registration via the 2022  Sakura Exchange acquisition, links domestic payments via PayPay (Z HD-affiliated) investment
- **[[exchanges/jp-exchange-coinbase-japan|Coinbase Japan]]** (registered with Kanto Local Finance Bureau, 2023  withdrawal / license retained)
  - **Model**: dormant state due to 2023  withdrawal
  - **Strategy**: retains a re-entry option for the future by retaining the license (currently suspended)
- **[[exchanges/jp-exchange-okcoin-japan|OKCoin Japan (OKJ)]]** (OKX-affiliated)
  - **Model**: spot sales-outlet (no derivatives)
  - **Differentiation**: operates Type 1  spot as a separate entity (overseas OKX's derivatives not offered domestically)
- **[[exchanges/jp-exchange-osl-japan|OSL Japan]]** (HKEX:863 -affiliated, former CoinBest)
  - **Model**: spot sales-outlet + exchange
  - **Differentiation**: connects institutional liquidity of a global parent holding an HK SFC license
- **[[exchanges/jp-exchange-gate-japan|Gate Japan]]** (Gate.io-affiliated, former LastRoots)
  - **Model**: spot sales-outlet
- **[[exchanges/jp-exchange-tokyo-hash|Tokyo Hash]]** (HashKey Group-affiliated)
  - **Model**: centered on institutional OTC
- **[[exchanges/jp-exchange-trek-labs-japan|Trek Labs Japan]]** (Backpack Exchange-affiliated, Type 2  derivatives)
- **[[exchanges/jp-exchange-saxo-bank-japan|Saxo Bank Japan]]** (Saxo Bank A/S-affiliated, Type 2  derivatives)

### D. Institutional / special segments (RWA / OTC / derivatives specialists)

- **[[exchanges/jp-exchange-crypto-garage|Crypto Garage]]** (DG Holdings × Tokyo Tanshi × Nomura HD investment)
  - **Model**: institutional OTC + Liquid Network-related business + ST-related
  - **Differentiation**: provides infrastructure to major financial institutions (securities firms, trust banks)
- **[[exchanges/jp-exchange-digital-asset-markets|Digital Asset Markets]]** (JPX + Mitsui & Co. + Monex consortium)
  - **Model**: an exchange for institutional investors / PTS
  - **Differentiation**: connects securities firms with the JPX backbone
- **[[exchanges/jp-exchange-laser-digital-japan|Laser Digital Japan]]** (Nomura HD Swiss subsidiary)
  - **Model**: institutional OTC + crypto-asset derivatives (JVCEA Type 2)
  - **Differentiation**: Nomura Group's institutional crypto fund + BTC fund (set up 2026-01 )
  - **Related**: shares a Board with [[exchanges/jp-custody-komainu|Komainu]] as Nomura-affiliated
- **[[exchanges/jp-exchange-dmm-bitcoin|DMM Bitcoin]]** (DMM-affiliated, 2024-05  Lazarus hack → ceased operations)
  - **Model**: voluntarily ceased operations after the 2024-05  hack, made up 100% of customer assets ([[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|詳細]])
- **[[exchanges/jp-exchange-sbi-securities|SBI 証券]]** (SBI HD-affiliated, offers crypto-asset derivatives)
  - **Model**: crypto-asset derivatives (FIEA category 1 , division of labor with SBI VC Trade's spot)
- **[[exchanges/jp-exchange-monex|Monex]]** (Monex Group 8698 -affiliated, crypto-asset derivatives)
  - **Model**: derivatives specialist (division of labor with Coincheck's spot)
- **[[exchanges/jp-exchange-traders-securities|Traders Securities]]** (derivatives specialist)
- **[[exchanges/jp-exchange-money-partners|Money Partners]]** (derivatives specialist)
- **[[exchanges/jp-exchange-dmm-com-securities|DMM.com Securities]]**
- **[[exchanges/jp-exchange-goldenway-japan|Goldenway Japan]]**
- **[[exchanges/jp-exchange-finx-jcrypto|FinX/JCrypto]]**

### E. SMB / niche (individual cultivation)

- **[[exchanges/jp-exchange-zaif|Zaif]]** (JN Group HD 6634  wholly owned subsidiary, 2025-07)
- **[[exchanges/jp-exchange-bittrade|BitTrade]]** (Hbg + former HuobiJapan)
- **[[exchanges/jp-exchange-backseat-exchange|Backseat Exchange]]** (former coinbook, trust-beneficiary-right type)
- **[[exchanges/jp-exchange-gaia|Gaia]]** (niche)
- **[[exchanges/jp-exchange-bi-fxtrade|BI FXTRADE]]** (SBI FX Trade subsidiary)
- **[[exchanges/jp-exchange-mercury|Mercury]]** (Ceres 3696 -affiliated, operates CoinTrade)
- **[[exchanges/jp-exchange-line-xenesis|LINE Xenesis]]** (LINE Yahoo 4689 -affiliated, 2026-06  service termination scheduled)
- **[[exchanges/jp-exchange-coinhub|CoinHub]]**
- **[[exchanges/jp-exchange-gaudiy|Gaudiy]]**
- **[[exchanges/jp-exchange-sblox|S.BLOX]]** (former DeCurret = under the Sony Group, crypto-asset exchange business)

### F. JPYC / stablecoin specialist (independent regulatory category)

- **[[exchanges/jp-exchange-jpyc|JPYC]]** (Kanto Local Finance Bureau 第00099号 funds-transfer business)
  - **Model**: JPY stablecoin JPYC issuance / redemption specialist (**not** a crypto-asset exchange business)
  - **Differentiation**: the only funds-transfer-operator-type SC issuer

## Big comparison matrix table

| Operator | Parent | FSA reg. no. | JVCEA category | Spot sales-outlet | Spot exchange | Leverage | Derivatives (FIEA cat. 1 ) | Custody | Staking | IEO | Institutional OTC | Retail sales-outlet |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **bitFlyer** | bitFlyer Holdings | 第00003号 | Type 1 #1002  (spot + derivatives) | ◎ Lightning Spot | ○ Lightning | ○ Lightning FX | ○ | ○ | △ | ✕ | △ | ◎ |
| **Coincheck** | Monex Group (8698) | 第00014号 | Type 1 #1017  (spot only) | ◎ | ○ | ✕ | ✕ | ○ | ○ | **◎ first domestically** | ✕ | ◎ |
| **GMO Coin** | GMO Internet (9449) | 第00006号 | Type 1 #1006 | ◎ | ○ | ○ | ○ | ○ | ○ | △ | ✕ | ◎ |
| **SBI VC Trade** | SBI HD (8473) | 第00011号 (+ ECISP 第00001号) | Type 1 #1011  (3  licenses) | ○ | ○ | ✕ | ○ (3247) | ○ | ○ | △ | △ | ○ |
| **bitbank** | independent | (registered) | Type 1 | △ | ◎ Maker-rebate | ✕ | ✕ | ○ | ○ | ○ | ✕ | △ |
| **BTCBOX** | independent | (registered) | Type 1 | △ | ○ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ |
| **Rakuten Wallet** | Rakuten (4755) | (registered) | Type 1 | ◎ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | ◎ |
| **Mercoin** | Mercari (4385) | (registered) | Type 1 | ◎ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | ◎ |
| **Binance Japan** | Binance Global (PayPay 40%) | (registered) | Type 1 | ◎ | ○ | ✕ | ✕ | ○ | ○ | ✕ | ✕ | ◎ |
| **Coinbase Japan** | Coinbase Global (COIN) | (registered, dormant) | Type 1 | (suspended) | (suspended) | ✕ | ✕ | (suspended) | ✕ | ✕ | ✕ | (suspended) |
| **OKCoin Japan (OKJ)** | OKX Group | (registered) | Type 1 | ○ | ○ | ✕ | ✕ | ○ | △ | ✕ | ✕ | ○ |
| **OSL Japan** | OSL Group (HKEX:863) | (registered) | Type 1 | ○ | ○ | ✕ | ✕ | ○ | △ | ✕ | △ | ○ |
| **Gate Japan** | Gate.io | (registered) | Type 1 | ○ | ○ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | ○ |
| **Tokyo Hash** | HashKey Group | (registered) | Type 1 | ✕ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ◎ | ✕ |
| **Crypto Garage** | DG HD + Tokyo Tanshi + Nomura HD | (registered) | Type 1 | ✕ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ◎ | ✕ |
| **Digital Asset Markets** | JPX + Mitsui & Co. + Monex | (registered) | Type 1 | ✕ | ○ (institutional PTS) | ✕ | ✕ | ○ | ✕ | ✕ | ◎ | ✕ |
| **Laser Digital Japan** | Nomura HD (Swiss subsidiary) | (registered) | Type 2 (derivatives) | ✕ | ✕ | ✕ | ○ | ○ | ✕ | ✕ | ◎ | ✕ |
| **SBI Securities** | SBI HD | (derivatives business) | (derivatives) | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ | ✕ |
| **Monex** | Monex Group | (derivatives business) | (derivatives) | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ | ✕ |
| **Trek Labs Japan** | Backpack Exchange | (registered) | Type 2 (derivatives) | ✕ | ✕ | ✕ | ○ | ○ | ✕ | ✕ | ○ | ✕ |
| **Saxo Bank Japan** | Saxo Bank A/S | (registered) | Type 2 (derivatives) | ✕ | ✕ | ✕ | ○ | ○ | ✕ | ✕ | ○ | ✕ |
| **DMM Bitcoin** | DMM | (ceased operations 2024-12) | (ceased) | (ceased) | (ceased) | (ceased) | (ceased) | (ceased) | ✕ | ✕ | ✕ | (ceased) |
| **Zaif** | JN Group HD (6634) | (registered) | Type 1 | ○ | ○ | ✕ | ✕ | ○ | ✕ | △ | ✕ | ○ |
| **BitTrade** | Hbg (former Huobi Japan) | (registered) | Type 1 | ○ | ○ | ✕ | ✕ | ○ | ○ | △ | ✕ | ○ |
| **Backseat Exchange** | (independent, former coinbook) | (registered) | Type 1 | ○ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | △ | ○ |
| **LINE Xenesis** | LINE Yahoo (4689) | (registered) | Type 1 | (2026-06  terminated) | (terminated) | ✕ | ✕ | (terminated) | ✕ | ✕ | ✕ | (terminated) |
| **JPYC** | JPYC Inc. (independent) | 第00099号 (funds-transfer business) | Type 1 #1042  (funds-transfer business) | (N/A) | (N/A) | (N/A) | (N/A) | (N/A) | ✕ | ✕ | ✕ | ✕ |
| **S.BLOX** | Sony Group | (registered) | Type 1 | ○ | ○ | ✕ | ✕ | ○ | ✕ | ✕ | △ | ○ |
| **Mercury (CoinTrade)** | Ceres (3696) | (registered) | Type 1 | ○ | ✕ | ✕ | ✕ | ○ | ○ (Fireblocks infrastructure) | ✕ | ✕ | ○ |
| **BI FXTRADE** | SBI FX Trade | (registered) | Type 1 | △ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | △ | △ |
| **CoinHub** | independent | (registered) | Type 1 | △ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ |
| **Gaudiy** | independent | (registered) | Type 1 | △ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ |
| **Gaia** | independent | (registered) | Type 1 | △ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ |
| **DMM.com Securities** | DMM | (derivatives business) | (derivatives) | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ | ✕ |
| **Money Partners** | independent | (derivatives business) | (derivatives) | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ | ✕ |
| **Goldenway Japan** | Goldenway-affiliated | (derivatives business) | (derivatives) | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ | ✕ |
| **Traders Securities** | independent | (derivatives business) | (derivatives) | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ | ✕ |
| **FinX/JCrypto** | independent | (registered) | Type 1 | △ | △ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ |

Legend: ◎ = main strategic axis / ○ = offered / △ = limited / in preparation / ✕ = not offered

## Two-axis cross analysis: revenue model × target

### Grouping by revenue model

1. **Sales-outlet spread mainstay** (operating margin 30-50%): bitFlyer / Coincheck / GMO Coin / Rakuten Wallet / Mercoin / Binance Japan / SBI VC Trade (partly)
2. **Exchange-fee mainstay** (operating margin 5-15%): bitbank / OKJ / OSL / Binance Japan (partly)
3. **Derivatives-fee mainstay** (operating margin 20-40%): bitFlyer (Lightning FX) / GMO Coin (leverage) / SBI Securities / Monex / Trek Labs Japan / Saxo Bank Japan / Laser Digital Japan
4. **Institutional OTC + RWA** (dependent on large-lot trades): Crypto Garage / Digital Asset Markets / Tokyo Hash / Laser Digital Japan
5. **stablecoin / EPI** (emerging segment): JPYC (funds-transfer-operator type) / SBI VC Trade (ECISP USDC)
6. **NFT + IEO** (emerging): Coincheck (Coincheck NFT + first domestic IEO) / bitbank (IEO)

### By target customer

- **Deep retail-individual cultivation**: bitFlyer / Coincheck / GMO Coin / Rakuten Wallet / Mercoin / Binance Japan / OKJ / Gate Japan
- **Deep institutional-investor cultivation**: Crypto Garage / Digital Asset Markets / Tokyo Hash / Laser Digital Japan / Saxo Bank Japan
- **Inter-corporate settlement (B2B)**: SBI VC Trade (USDC) + JPYC (funds-transfer business)
- **Securities-firm PTS / RWA**: Digital Asset Markets / Crypto Garage

## Differentiation axes of the competitive structure

### Token-count competition

- **Most tokens domestically**: SBI VC Trade (about 40  tokens) > Coincheck > Binance Japan > GMO Coin
- **JVCEA token-review constraint**: a structural constraint whereby the 700+ tokens (Binance) that global CEXes handle worldwide are narrowed down to around 30-40  tokens domestically
- **ECISP token expansion**: since SBI VC Trade began handling USDC, other ECISP holders are similarly planning to expand USDC / PYUSD / EURC

### Spread competition

- Domestic sales-outlet spreads are in the 0.5-3% range, differing by operator / token. bitFlyer / Coincheck / GMO Coin / Rakuten Wallet have retail sales-outlets as their mainstay.
- The Maker-rebate model of the exchange order book is clearest at bitbank (-0.02% Maker rebate).

### Listing-speed competition

- **New-listing speed**: independents (bitbank / S.BLOX) are nimble, while major financial-affiliates (SBI / GMO / Rakuten / Mercari) are slow due to parent-company IR disclosure and JVCEA token review
- **IEO**: after Coincheck IEO's first domestic introduction (2021), GMO Coin / bitbank followed

### Global liquidity bridge

- **Overseas OB (order book) connection**: Binance Japan appeals with the liquidity bridge of its parent Binance Global, while OKJ is limited because OKX's derivatives are not offered
- **Domestic OTC institutions**: Crypto Garage / Tokyo Hash / Laser Digital Japan directly connect OTC with overseas market makers

## Boundary cases

### B1. JPYC vs SBI VC Trade — SC businesses of different regulatory categories

- JPYC = a funds-transfer-operator-type SC issuer (not a crypto-asset exchange business)
- SBI VC Trade = a USDC-handling operator via ECISP + crypto-asset exchange business + FIEA category 1 
- The two are legally different, but are in a competitive relationship as stablecoin businesses (see [[fintech/japan-epi-four-camps-comparison|EPI 四阵营]])

### B2. Coinbase Japan's dormant state — retaining a suspension option rather than withdrawal

- Coinbase Japan registered with the FSA in 2018  → withdrew in 2023 , but retains the license. It leaves a re-entry option for the future.
- On the other hand, DMM Bitcoin's 2024-12  closure is confirmed with no revival.

### B3. LINE Xenesis 2026-06  service termination — evidence of revenue difficulty for major-affiliates

- The LINE Yahoo 4689 -affiliated LINE Xenesis is scheduled for 2026-06  service termination. A case that did not reach sufficient monetization within the LINE ecosystem.

### B4. Polarization of derivatives-specialist vs spot-specialist

- Derivatives specialists: SBI Securities / Monex / Trek Labs Japan / Saxo Bank Japan / DMM.com Securities / Money Partners / Traders Securities / Goldenway Japan / Laser Digital Japan
- Spot specialists (no derivatives): Coincheck / Rakuten Wallet / Mercoin / OKJ / Gate Japan / S.BLOX / Mercury / Backseat
- Both offered: bitFlyer / SBI VC Trade / GMO Coin / Binance Japan

### B5. Positioning of JVCEA Type 2 members (derivatives specialists)

- JVCEA has "Type 1 (crypto-asset exchange business)" and "Type 2 (crypto-asset derivatives trading business)" in parallel as membership categories. Laser Digital Japan / Trek Labs Japan / Saxo Bank Japan operate under Type 2.
- Type 2 has no spot sales-outlet / exchange, so the revenue structure is derivatives fees + OTC only.

### B6. Transparency gap of parent-company listed vs non-listed

- Listed parent companies (bitFlyer Holdings is non-listed, Coincheck = Nasdaq, GMO Internet = TSE Prime, SBI HD = TSE Prime, Rakuten = TSE Prime, Mercari = TSE Prime, Monex = TSE Prime, JN HD = TSE Standard) allow financial information to be obtained via IR disclosure.
- For non-listed independents (bitbank / BTCBOX / Gaia, etc.), financial information is difficult to obtain, and only the JVCEA monthly submission of customer-asset segregated-management status is an avenue to obtain it.

## Related

- [[exchanges/INDEX|exchanges index]]
- [[exchanges/jp-crypto-exchange-overview|jp-crypto-exchange-overview]]
- [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 比較]]
- [[exchanges/cex-matching-engine-wallet-architecture|CEX matching engine / wallet architecture]]
- [[exchanges/cex-native-token-strategy-comparison|CEX native token 戦略比較]]
- [[exchanges/jp-vasp-parent-company-map|VASP 親会社マップ]]
- [[exchanges/jvcea-whitelist-token-listing|JVCEA whitelist token listing]]
- [[exchanges/jp-exchange-bitflyer|bitFlyer]]
- [[exchanges/jp-exchange-coincheck|Coincheck]]
- [[exchanges/jp-exchange-gmo-coin|GMO Coin]]
- [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]
- [[exchanges/jp-exchange-bitbank|bitbank]]
- [[exchanges/jp-exchange-binance-japan|Binance Japan]]
- [[exchanges/jp-exchange-coinbase-japan|Coinbase Japan]]
- [[exchanges/jp-exchange-okcoin-japan|OKJ]]
- [[exchanges/jp-exchange-osl-japan|OSL Japan]]
- [[exchanges/jp-exchange-laser-digital-japan|Laser Digital Japan]]
- [[exchanges/jp-exchange-rakuten-wallet|Rakuten Wallet]]
- [[exchanges/jp-exchange-mercoin|Mercoin]]
- [[exchanges/jp-exchange-crypto-garage|Crypto Garage]]
- [[exchanges/jp-exchange-jpyc|JPYC]]
- [[exchanges/jp-exchange-dmm-bitcoin|DMM Bitcoin]]
- [[exchanges/jp-exchange-mercury|Mercury (CoinTrade)]]
- [[exchanges/jp-vasp-incident-history|jp-vasp-incident-history]]
- [[exchanges/jp-vasp-ma-consolidation-history|jp-vasp-ma-consolidation-history]]
- [[exchanges/japan-stablecoin-issuer-regulatory-classification-matrix|日本 stablecoin 発行体 規制分類マトリクス]]
- [[exchanges/crypto-custody-provider-landscape-matrix|crypto custody provider landscape matrix]]

## Sources

- FSA「暗号資産交換業者登録一覧」: https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
- FSA「List of Registered Crypto-asset Exchange Service Providers in Japan」: https://www.fsa.go.jp/en/regulated/licensed/en_kasoutuka.pdf
- JVCEA 会員一覧: https://jvcea.or.jp/member/
- FSA「暗号資産・電子決済手段関係」: https://www.fsa.go.jp/policy/virtual_currency02/
