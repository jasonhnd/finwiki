---
source: exchanges/jp-exchange-jpyc
source_hash: 4f9ad2272c6bf98d
lang: en
status: machine
fidelity: ok
title: "JPYC Inc. — Japanese Yen Stablecoin Issuer (Funds-Transfer Operator Type)"
translated_at: 2026-05-31T05:31:05.772Z
---

# JPYC Inc. — Japanese Yen Stablecoin Issuer (Funds-Transfer Operator Type)


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it with [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for adjacent context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system boundary.

> Funds Transfer Service Provider registration, Kanto Local Finance Bureau 第00099号 · JVCEA member #1042 (Funds Transfer) · Established 2019年11月

> Namespace note: JPYC is not a conventional crypto-asset exchange. This detailed page remains in `exchanges/` for legacy stablecoin-routing reasons; the operating-company anchor is [[payment-firms/jpyc]].

## 1. Corporate Entity / Shareholders

- **Trade name**: JPYC Inc.
- **English name**: JPYC Inc.
- **Established**: 2019年11月
- **Head office**: 〒100-0004  FINOLAB, Otemachi Building 4F, 1-chome-6-1号 Otemachi, Chiyoda-ku, Tokyo
- **Capital**: 1億円 (100,000,000円)
- **Parent company / Listing**: Unlisted. Principal investors (publicly disclosed): in the 2026-04  additional round, Metaplanet (TSE Growth 3350), Sumitomo Life Insurance Company, and others participated. In 2026-02 , Asteria Corporation (TSE Growth 3853) participated as lead investor in Series B 17.8億円 and concluded a capital and business alliance.

## 2. Licenses / Registration Status

**JPYC Inc. is not a crypto-asset exchange operator**. The company's principal licenses are as follows 2 件:

| Type | Registration number | Governing law |
|------|----------|--------|
| Funds Transfer Service Provider | Kanto Local Finance Bureau 第00099号 | Payment Services Act, Article 37 |
| Prepaid Payment Instrument (third-party type) issuer | Kanto Local Finance Bureau 第00773号 | Payment Services Act, Article 31 |

- **JVCEA**: Class I member #1042 — registration category "Funds transfer" only. No JVCEA category for crypto-asset exchange, derivatives, or electronic payment instrument trading has been granted.
- Also holds antique dealer (Tokyo Metropolitan Public Safety Commission: 第304372004277号) and antique market operator (same 第304372004710号) licenses (presumably to support NFT secondary circulation).

**Why it is not a "crypto-asset exchange business"**: JPYC's core business is the issuance and circulation of the yen-pegged stablecoin "JPYC," but that token is legally classified as an "electronic payment instrument (revised Payment Services Act, Article 2 , Paragraph 9 )." Since the revised act took effect on 2023 年 6 月, the company has conducted issuance and redemption under the framework of the funds-transfer license it has obtained. The institutional transition from the former "prepaid payment instrument" form (JPYC v1) to the "funds-transfer-operator-type stablecoin" (JPYC v2) was completed in the second half of 2025 年.

## 3. Supported Currencies

- **Supported assets**: JPYC (yen-pegged stablecoin) only, 1  asset
- **Issuance networks**: Multi-chain support across Ethereum, Polygon, Avalanche, Gnosis Chain, Shiden Network, Astar Network, and others (see the company's official FAQ)
- **Peg ratio**: 1  JPYC = 1  Japanese yen
- **Liquidity**: Can be held, transferred, and used for payment in various wallets such as HashPort Wallet
- **No crypto-asset handling**: Does not offer buy/sell services for crypto-assets such as BTC or ETH

## 4. Scope of Business

- **JPYC EX (exchange / issuance platform)**: A gateway to deposit Japanese yen and issue (purchase) or redeem (withdraw to Japanese yen) JPYC. The consumer service launched in the autumn of 2025 年.
- **Corporate services**: Enterprise DX support and automated-payment solutions such as "JPYC Gateway" (jointly developed with Asteria).
- **Payments**: JPYC payment acceptance is being progressively expanded at various merchants such as restaurants ("Chibo," etc.) (as of 2026-04 ).
- **Per-1  redemption cap**: 100 万円 (as of 2025-12  → there are reports that the issuance cap was revised to 100 万円 per 1  in 2026-05 ).
- **Fiat-currency deposit channel**: Bank transfer.
- Does not offer crypto-asset lending, derivatives, NFT marketplaces, or the like.

## 5. Market Share / Trading Volume

- **Cumulative accounts**: Exceeded 1 万 as of 2025-12  (number of JPYC EX accounts opened).
- **Cumulative issuance**: Exceeded the equivalent of 5 億円 as of 2025-12 .
- **Customer base**: Individual retail (JPYC EX) plus corporates (inter-company settlement, payroll DeFi use, etc.).
- **Market share**: The only regulation-compliant **funds-transfer-operator-type** yen stablecoin issuer in Japan. One of Japan's 3  major yen SCs alongside Progmat Coin (trust type) and DCJPY (bank type). Its competitive axis differs from that of crypto-asset exchange operators.

## 6. History / Major Events

| Period | Event |
|------|--------|
| 2019-11 | JPYC Inc. established. Noritaka Okabe appointed Representative Director |
| 2021 | Began offering JPYC (v1  prepaid type) on Ethereum |
| 2022 | Expanded multi-chain deployment (Polygon, Avalanche, etc.) |
| 2023-06 | Revised Payment Services Act took effect. JPYC's institutional positioning began preparing to migrate from "prepaid payment instrument" to "electronic payment instrument (stablecoin)" |
| 2023 | Obtained Funds Transfer Service Provider registration from the Kanto Local Finance Bureau (第00099号) |
| 2025-Q3 | JPYC v2 (funds-transfer-based) service launched. JPYC EX offered to consumers |
| 2025-12 | JPYC EX cumulative accounts surpassed 1 万; cumulative issuance surpassed 5 億円 |
| 2026-02 | Announced Series B 17.8 億円 funding with Asteria Corporation as lead investor. Concluded capital and business alliance |
| 2026-04-21 | Raised 28 億円 in the Series B additional close (Metaplanet, Sumitomo Life, and others participating) |
| 2026-04-28 | FSA official materials explicitly described JPYC as "funds transfer" for the first time |
| 2026-05-16 | Major update revising the JPYC EX issuance cap to 100 万円 per 1  |

※ As of 2026-05 , no administrative dispositions, hacks, or major system failures have been publicly reported.

## 7. Strategic Developments

- **Asteria capital alliance** (2026-02): Developing "JPYC Gateway" with IT-infrastructure firm Asteria, accelerating the embedding of JPYC into corporate API transfers and automated settlement.
- **Metaplanet / Sumitomo Life participation** (2026-04): Metaplanet, known for its bitcoin holdings, and a major life insurer joined the investment, raising recognition among institutional investors.
- **Merchant expansion** (2026-04): JPYC payments began at the restaurant chain "Chibo" and others, expanding consumer-facing use cases.
- **Limit increase** (2026-05): Promoting corporate use through revising the issuance cap to 100 万円 per 1 .
- As of 2026-05 , no public plans for overseas expansion or IPO could be confirmed.

## 8. Related People

- **Noritaka Okabe**: Representative Director. Founder of JPYC. A central figure who has driven the issuance of yen-pegged stablecoins in Japan.
- Details of other officers and the shareholder composition have not been disclosed (as of 2026-05 ).

## Related

- [[fintech/japan-stablecoin-regulatory-landscape]] — Japan's three-tier stablecoin legal framework (positioning of JPYC, USDC, and the trust type)
- [[payment-firms/jpyc]] — JapanFG operating-company anchor
- [[fintech/jp-trust-type-sc-architecture]] — Comparison of the three SC types (trust type, bank type, funds-transfer-operator type)
- [[fintech/japan-financial-regulation]] — Japan's financial regulation overall
- [[exchanges/jp-exchange-sbi-vc-trade]] — SBI VC Trade (a comparison example of an exchange operator that also holds an electronic payment instrument trading license)
- [[fintech/global-stablecoin-regulatory-five-pole-matrix]] — Global stablecoin regulation 5 -pole comparison
- [[fintech/stablecoin-channel-japan-sbi-jpyc-ring]] — SBI × JPYC stablecoin channel
- [[exchanges/jp-cex-deposit-token-stablecoin-integration]] — JP CEX deposit token / stablecoin integration

## Sources

- [JPYC 株式会社 会社概要](https://jpyc.co.jp/about)（取得 2026-05-18）
- [JPYC EX トップページ](https://jpyc.co.jp/)（取得 2026-05-18）
- [JVCEA 会員一覧](https://jvcea.or.jp/member/)（取得 2026-05-18）
- [CoinPost: JPYC 資金移動業 関連記事一覧](https://coinpost.jp/?s=JPYC+%E8%B3%87%E9%87%91%E7%A7%BB%E5%8B%95%E6%A5%AD)（取得 2026-05-18）
