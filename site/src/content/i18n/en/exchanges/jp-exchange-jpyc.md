---
source: exchanges/jp-exchange-jpyc
source_hash: 572712ecf2c9b4cb
lang: en
status: machine
fidelity: ok
title: "JPYC Inc. — Japanese-yen stablecoin issuer (funds-transfer-operator type)"
translated_at: 2026-06-18T23:33:48.366Z
---

# JPYC Inc. — Japanese-yen stablecoin issuer (funds-transfer-operator type)


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it with [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for adjacent context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system boundary.

> Funds-transfer-operator registration, Kanto Local Finance Bureau 第00099号 · JVCEA member #1042 (funds transfer business) · established 2019年11月

> Namespace note: JPYC is not a conventional crypto-asset exchange. This detailed page remains in `exchanges/` for legacy stablecoin-routing reasons; the operating-company anchor is [[payment-firms/jpyc]].

## 1. Corporation / shareholders

- **Trade name**: JPYC Inc.
- **English name**: JPYC Inc.
- **Established**: 2019年11月
- **Head office**: 〒100-0004  1-chome 6-1号 Otemachi, Chiyoda-ku, Tokyo, 4F Otemachi Building, inside FINOLAB
- **Capital**: 1億円 (100,000,000円)
- **Parent company / listing**: Unlisted. Major investors (disclosed): in the 2026-04  additional round, Metaplanet (TSE Growth 3350), Sumitomo Life Insurance Company, and others participated. In 2026-02 , Asteria Corporation (TSE Growth 3853) participated as lead investor in the Series B 17.8億円 and concluded a capital and business alliance.

## 2. License / registration status

**JPYC Inc. is not a crypto-asset exchange service provider**. The company's main licenses are the following 2 件:

| Type | Registration number | Governing law |
|------|----------|--------|
| Funds-transfer operator | Kanto Local Finance Bureau 第00099号 | Payment Services Act, Article 37 |
| Prepaid payment instrument (third-party type) issuer | Kanto Local Finance Bureau 第00773号 | Payment Services Act, Article 31 |

- **JVCEA**: Type-I member #1042 — only the registration category "funds transfer." The JVCEA categories of crypto-asset exchange business, derivatives, and electronically recorded transferable rights handling business have not been granted.
- It also holds a secondhand-dealer license (Tokyo Metropolitan Public Safety Commission: 第304372004277号) and secondhand-market operator license (ditto 第304372004710号) (presumed to be for NFT secondary-circulation support).

**Why it is not a "crypto-asset exchange business"**: JPYC has the issuance and circulation of the yen-pegged stablecoin "JPYC" as the core of its business, but that token is legally classified as an "electronically recorded transferable right (amended Payment Services Act, Article 2 , Paragraph 9 )," and since the amended act came into force in 2023 年 6 月, the company conducts issuance and redemption within the framework of the funds-transfer-operator license it obtains. The institutional transition from the former "prepaid payment instrument" form (JPYC v1) to "funds-transfer-operator-type stablecoin" (JPYC v2) was completed in the latter half of 2025 年.

## 3. Handled currencies

- **Handled tokens**: JPYC (Japanese-yen-pegged stablecoin) only — 1  type
- **Issuance network**: Multi-chain support including Ethereum, Polygon, Avalanche, Gnosis Chain, Shiden Network, Astar Network, etc. (see the company's official FAQ)
- **Peg ratio**: 1 JPYC = 1  Japanese yen
- **Liquidity**: Can be held, transferred, and used for payment in various wallets such as HashPort Wallet
- **No crypto-asset handling**: Does not provide buy/sell services for crypto-assets such as BTC, ETH, etc.

## 4. Scope of business

- **JPYC EX (exchange / issuance platform)**: A window to deposit Japanese yen and issue (purchase) JPYC / redeem it (withdraw to Japanese yen). Started the service for individuals in autumn 2025 年.
- **Services for corporations**: Corporate DX support / automated-payment solutions such as "JPYC Gateway" (jointly developed with Asteria).
- **Payment**: Successively expanding JPYC payment support at various merchants such as restaurants ("Chibo," etc.) (as of 2026-04 ).
- **Per-1  redemption cap**: 100 万円 (as of 2025-12  → there are reports that the issuance cap was revised to 100 万円 per 1  in 2026-05 ).
- **Fiat-currency deposit channel**: Bank transfer.
- Does not provide crypto-asset lending, derivatives, NFT marketplace, etc.

## 5. Market share / trading volume

- **Cumulative number of accounts**: As of 2025-12 , surpassed 1 万 (JPYC EX opened accounts).
- **Cumulative issuance amount**: As of 2025-12 , surpassed an equivalent of 5 億円.
- **Customer base**: Individual retail (JPYC EX) + corporations (B2B settlement, payroll DeFi use, etc.).
- **Market share**: The only regulatory-compliant **funds-transfer-operator-type** yen stablecoin issuer in Japan. One of the 3  major domestic yen SCs alongside Progmat Coin (trust type) and DCJPY (bank type). It has a different competitive axis from crypto-asset exchange service providers.

## 6. History / major incidents

| Period | Event |
|------|--------|
| 2019-11 | JPYC Inc. established. Noritaka Okabe assumed the position of Representative Director |
| 2021 | Started offering JPYC (v1 prepaid type) on Ethereum |
| 2022 | Expanded multi-chain deployment (Polygon, Avalanche, etc.) |
| 2023-06 | Amended Payment Services Act came into force. Began preparations to transition JPYC's institutional positioning from "prepaid payment instrument" to "electronically recorded transferable right (stablecoin)" |
| 2023 | Obtained funds-transfer-operator registration (第00099号) from the Kanto Local Finance Bureau |
| 2025-Q3 | Started the JPYC v2 (funds-transfer-business-based) service. JPYC EX offered to individuals |
| 2025-12 | JPYC EX surpassed 1 万 cumulative accounts and 5 億円 cumulative issuance amount |
| 2026-02 | Announced raising 17.8 億円 in a Series B with Asteria Corporation as lead investor. Concluded a capital and business alliance |
| 2026-04-21 | Raised 28 億円 in an additional Series B close (Metaplanet, Sumitomo Life, and others participating) |
| 2026-04-28 | FSA official materials specified JPYC as "funds transfer business" for the first time |
| 2026-05-16 | A major update revising the issuance cap to 100 万円 per 1  on JPYC EX |

※ No reports of administrative actions, hacks, or major system failures have been disclosed as of 2026-05 .

## 7. Strategic trends

- **Asteria capital alliance** (2026-02): Developing "JPYC Gateway" with the IT-infrastructure company Asteria, accelerating the incorporation of JPYC into corporate API remittance / automated settlement.
- **Metaplanet / Sumitomo Life participation** (2026-04): Metaplanet, known for its Bitcoin holdings, and a major life insurer participated in the investment, raising recognition among the institutional-investor segment.
- **Merchant expansion** (2026-04): JPYC payment began at the restaurant chain "Chibo," etc., expanding usage scenes for general consumers.
- **Limit increase** (2026-05): Revising the issuance cap to 100 万円 per 1  to promote corporate use.
- No public plans regarding overseas expansion or IPO can be confirmed as of 2026-05 .

## 8. Related people

- **Noritaka Okabe** (Okabe Noritaka): Representative Director. Founder of JPYC. The central figure who has been promoting the issuance of a yen-pegged stablecoin in Japan.
- Details of other directors / shareholder composition have not been disclosed (as of 2026-05 ).

## Related

- [[fintech/japan-stablecoin-regulatory-landscape]] — Japan's three-layer stablecoin legal system (positioning of JPYC / USDC / trust type)
- [[payment-firms/jpyc]] — JapanFG operating-company anchor
- [[fintech/jp-trust-type-sc-architecture]] — comparison of the three SC types (trust type / bank type / funds-transfer-operator type)
- [[fintech/japan-financial-regulation]] — Japan financial regulation as a whole
- [[exchanges/jp-exchange-sbi-vc-trade]] — SBI VC Trade (a comparison example of an exchange service provider that also holds the electronically recorded transferable rights handling business)
- [[fintech/global-stablecoin-regulatory-five-pole-matrix]] — global stablecoin regulation 5 -pole comparison
- [[fintech/stablecoin-channel-japan-sbi-jpyc-ring]] — SBI × JPYC stablecoin channel
- [[exchanges/jp-cex-deposit-token-stablecoin-integration]] — JP CEX deposit token / stablecoin integration

## Sources

- [JPYC Inc. company overview](https://jpyc.co.jp/about) (retrieved 2026-05-18)
- [JPYC EX top page](https://jpyc.co.jp/) (retrieved 2026-05-18)
- [JVCEA member list](https://jvcea.or.jp/member/) (retrieved 2026-05-18)
- [CoinPost: list of JPYC funds-transfer-business-related articles](https://coinpost.jp/?s=JPYC+%E8%B3%87%E9%87%91%E7%A7%BB%E5%8B%95%E6%A5%AD) (retrieved 2026-05-18)
