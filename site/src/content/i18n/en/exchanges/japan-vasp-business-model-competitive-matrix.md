---
source: exchanges/japan-vasp-business-model-competitive-matrix
source_hash: 646dc84ccd72844e
lang: en
status: machine
fidelity: ok
title: "Japan VASP business-model competitive matrix — comparison of 39 社's business segments / revenue structures / differentiation axes"
translated_at: 2026-07-29T11:02:23.000Z
---

# Japan VASP business-model competitive matrix — comparison of 39 社's business segments / revenue structures / differentiation axes

## TL;DR

The FSA crypto-asset exchange service provider registry lists **26 operators** as of 2026-06-30. The matrix's 39 analytical rows also include crypto-asset derivatives, electronic-payment-instrument firms, institution-facing adjacent businesses, and transitional or historical related entities, so 39 must not be read as the number of FSA-registered VASPs. Each row is compared across 10 axes: **(1) spot sales outlet / (2) spot exchange / (3) margin / leverage / (4) crypto-asset derivatives / (5) custody / (6) listing specialisation / (7) staking / lending / (8) IEO / (9) institutional OTC / (10) retail sales outlet**. ^[Source: https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx, 2026-06-30, 「全業者数: 26」.]

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. It is the **事業モデル軸 (business-model-axis)** counterpart to [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 比較]] (規模軸) / [[exchanges/jp-vasp-parent-company-map|親会社マップ]] (資本系列軸) / [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制 8 極比較]] (規制軸). Read it alongside [[exchanges/cex-matching-engine-wallet-architecture|CEX matching engine / wallet architecture]] for the technical layer and [[exchanges/cex-native-token-strategy-comparison|CEX native token 戦略比較]] for the tokenomics dimension. Listing 自主規制 detail in [[exchanges/jvcea-whitelist-token-listing|JVCEA whitelist token listing]] and incident history in [[exchanges/jp-vasp-incident-history|jp-vasp-incident-history]].

## Why this matrix matters

- The registered population, revenue, volume and account counts of Japan's VASP market vary by date and scope; verify them in dated FSA / JVCEA and operator disclosures. Compare institutional OTC, IEO, RWA, derivatives-only and foreign-liquidity-gateway segments separately.
- **Differences in revenue model greatly affect operating margin**:
  - verify dealer-spread contribution in each firm's disclosures; do not infer a fixed operating margin
  - verify order-book and foreign-liquidity-bridge contribution in each firm's disclosures
  - verify derivatives contribution separately from spot business
  - institutional OTC / RWA → operating margin unstable (dependent on large-lot trades)
- Because **JVCEA token review** narrows the number of tokens, foreign-affiliated Japanese entities (Binance / OKJ / OSL / Bybit Japan in planning) **structurally cannot bring their global parent's token lineup into the Japanese market**. This becomes a "regulatory moat that suppresses foreign majors' incentive to enter the Japanese market."
- Two major emerging segments:
  - **Electronic Payment Instrument Exchange Service Provider (EPIESP)** = SBI VC Trade began handling USDC under registration No. 00001; verify additional registrations in the current FSA list
  - **IEO** = Coincheck IEO was the first domestic introduction, followed by GMO Coin / bitbank

## Per-operator sections

### A. Independent veterans + bitFlyer Holdings-affiliated (spot + derivatives mainstay)

- **[[exchanges/jp-exchange-bitflyer|bitFlyer]]** (Kanto Local Finance Bureau 第00003号, JVCEA #1002)
  - **Model**: spot sales-outlet + exchange (Lightning Spot) + derivatives (Lightning FX) + credit card (bitFlyer credit card, issued by APLUS)
  - **Revenue axis**: spot / derivatives fees and the bitFlyer credit card; verify BTC-volume rank in a same-date, same-scope dataset
  - **2025-12  results**: revenue 135 億円, operating profit 42 億円
  - **Differentiation**: order-book depth of Lightning FX derivatives + multi-jurisdiction expansion (US subsidiary bitFlyer USA, European subsidiary bitFlyer Europe SAS)
  - **2024  developments**: acquired [[exchanges/jp-exchange-custodiem|Custodiem]] (former FTX Japan) in 2024  → reinforcing derivatives
- **[[exchanges/jp-exchange-bitbank|bitbank]]** (FSA-registered, independent)
  - **Model**: spot exchange (order-book-trading specialized) + staking + IEO
  - **Revenue axis**: trading fees (Maker rebate model)
  - **Differentiation**: spot order-book business and an independent, non-listed corporate structure; do not fix a volume rank
  - **Strategy**: early IEO entry + competing on retail exchange order-book depth
- **[[exchanges/jp-exchange-btcbox|BTCBOX]]** (independent veteran)
  - **Model**: spot exchange (BTC-centered) + Chinese-affiliated liquidity
  - **Differentiation**: English / Chinese support for Chinese-affiliated users

### B. Financial-group-affiliated (spot + derivatives + staking, full-spectrum)

- **[[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]** (Kanto Local Finance Bureau 第00011号, JVCEA #1011)
  - **Model**: spot sales-outlet + derivatives (3247 号, FIEA category 1 ) + ECISP USDC (domestic ECISP 第00001号) + staking + USDC lending (2026-03  first domestically)
  - **Revenue axis**: sales-outlet spread + derivatives fees + USDC lending interest
  - **Differentiation**: verify its crypto-asset exchange, financial-instruments and EPIESP registrations and business scope in each registry. Verify USDC partnership and distribution scope in current party disclosures
  - **Strategy**: becoming the kingmaker of the USD-JPY SC cross-border compliance channel (see [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環]])
- **[[exchanges/jp-exchange-gmo-coin|GMO Coin]]** (Kanto Local Finance Bureau 第00006号, JVCEA #1006)
  - **Model**: spot sales-outlet + exchange + leveraged trading + staking + crypto-asset lending
  - **Revenue axis**: dealer spread + leverage fees; do not infer revenue rank without financial disclosure
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
  - **Strategy**: verify the current registration status and service availability against the FSA registry and the party's announcements
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
- **[[exchanges/jp-exchange-line-xenesis|LINE Xenesis]]** (LINE Yahoo 4689-affiliated, service ended in 2026-06)
- **[[exchanges/jp-exchange-coinhub|CoinHub]]**
- **[[exchanges/jp-exchange-gaudiy|Gaudiy]]**
- **[[exchanges/jp-exchange-sblox|S.BLOX]]** (former DeCurret = under the Sony Group, crypto-asset exchange business)

### F. JPYC / stablecoin specialist (independent regulatory category)

- **[[exchanges/jp-exchange-jpyc|JPYC]]** (Kanto Local Finance Bureau 第00099号 funds-transfer business)
  - **Model**: JPY stablecoin JPYC issuance / redemption specialist (**not** a crypto-asset exchange business)
  - **Differentiation**: funds-transfer-operator stablecoin issuance model; verify current peers in FSA registration materials

## Big comparison matrix table

Source: [FSA crypto-asset exchange registry](https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx), [English registry](https://www.fsa.go.jp/en/regulated/licensed/en_kasoutuka.pdf), and [JVCEA member list](https://jvcea.or.jp/member/). Verify individual services on each operator's current official page.

| Analysis population | What to verify in primary sources | What this table does not assert |
|---|---|---|
| **Crypto-asset exchange service providers** | registered name, number, date and legal entity | current products, token count, volume or profitability |
| **Crypto-asset derivatives firms** | financial-instruments registration and business scope | identity with a spot business |
| **Electronic Payment Instrument Exchange Service Providers** | separate registration and handled instruments | inclusion in crypto-asset exchange registration |
| **JVCEA members** | current member category and member name | identity with an FSA registration category |
| **Ceased, transferred or historical entities** | dated FSA, JVCEA and party disclosures | inferred suspension, re-entry or preparation |
| **Individual services** | current product pages and terms | time-undefined scoring with ◎○△✕ |

## Two-axis cross analysis: revenue model × target

### How to verify a revenue model

- Review dealer spreads, exchange fees, derivatives, custody, OTC, staking, lending, IEO and electronic-payment-instrument services as separate revenue sources.
- Do not estimate an undisclosed firm's operating margin from dealer spreads or peer figures.
- Verify product availability from the current product page and terms, not from registration alone.

### By target customer

Classify retail, institutional, corporate-settlement and securities/RWA customers only from the customer category and product description stated by the party. Do not infer the target customer from registration, parent company or UI appearance alone.

## Differentiation axes of the competitive structure

### Token-count competition

- **Handled tokens**: check each current product page at the same time; do not fix a token-count ranking
- **JVCEA token review**: verify domestic availability through registration, review and operator product publication; do not infer domestic counts from a foreign parent
- **EPIESP products**: verify each registration and current product page; do not predict unpublished additions

### Spread competition

- Dealer spreads vary by operator, asset and time; check the quoted execution price and current fee schedule.
- Check maker / taker terms in each current fee schedule; do not record a fixed best rate.

### Listing-speed competition

- **New-listing speed**: compare dated listing announcements over the same period; do not infer speed from ownership
- **IEO**: after Coincheck IEO's first domestic introduction (2021), GMO Coin / bitbank followed

### Global liquidity bridge

- **Overseas OB (order book) connection**: Binance Japan appeals with the liquidity bridge of its parent Binance Global, while OKJ is limited because OKX's derivatives are not offered
- **Domestic OTC institutions**: Crypto Garage / Tokyo Hash / Laser Digital Japan directly connect OTC with overseas market makers

## Boundary cases

### B1. JPYC vs SBI VC Trade — SC businesses of different regulatory categories

- JPYC = a funds-transfer-operator-type SC issuer (not a crypto-asset exchange business)
- SBI VC Trade = a USDC-handling operator via ECISP + crypto-asset exchange business + FIEA category 1 
- The two are legally different, but are in a competitive relationship as stablecoin businesses (see [[fintech/japan-epi-four-camps-comparison|EPI 四阵营]])

### B2. Current-status verification for Coinbase Japan and DMM Bitcoin

- Verify Coinbase Japan's registration, corporate status after service suspension, and any resumption against the FSA registry and Coinbase's current official announcements.
- Verify DMM Bitcoin's closure, business transfer, and corporate status against regulatory materials and the party's current official announcements.

### B3. LINE Xenesis 2026-06  service termination — evidence of revenue difficulty for major-affiliates

- LINE Yahoo-affiliated LINE Xenesis ended service in 2026-06. Do not infer the reason or profitability beyond the party's disclosure.

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
