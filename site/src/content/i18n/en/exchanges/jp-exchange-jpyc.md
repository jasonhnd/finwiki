---
source: exchanges/jp-exchange-jpyc
source_hash: 7fbae7f7d594e52d
lang: en
status: machine
fidelity: ok
title: "JPYC Inc. — Japanese-yen stablecoin issuer (funds-transfer-operator type)"
translated_at: 2026-07-29T11:28:13Z
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
- **Parent company / listing**: Unlisted. The Series B first close announced on 2026-02-26 named Asteria as lead investor and said JPY 1.78 billion was planned to be raised; the second close announced on 2026-04-20 said another JPY 2.8 billion was planned from investors including Metaplanet and a Sumitomo Life fund.

## 2. License / registration status

**JPYC Inc. is not a crypto-asset exchange service provider**. The registrations below are confirmed by the company's registration announcement and legal notice and by the JVCEA member list. ^[Sources: https://corporate.jpyc.co.jp/news/posts/first-yen-stablecoin-jpyc; https://corporate.jpyc.co.jp/law; https://jvcea.or.jp/member/.]

| Type | Registration number | Governing law |
|------|----------|--------|
| Funds-transfer operator | Kanto Local Finance Bureau 第00099号 | Payment Services Act, Article 37 |
| Prepaid payment instrument (third-party type) issuer | Kanto Local Finance Bureau 第00773号 | Payment Services Act, Article 31 |

- **JVCEA**: Type-I member #1042, category “funds transfer.” This does not signify registration as a crypto-asset exchange operator.
- Its legal notice also lists a secondhand-dealer license (Tokyo Metropolitan Public Safety Commission No. 304372004277) and secondhand-market operator license (No. 304372004710). Their purpose is not inferred beyond the registrations shown.

**Why it is not a crypto-asset exchange business**: Current JPYC is an “electronic payment instrument” under the Payment Services Act and is issued and redeemed by the company as a funds-transfer operator. The former prepaid payment instrument was renamed “JPYC Prepaid” on 2024-11-27; it is a separate token and the company does not exchange it for current JPYC. The funds-transfer registration was obtained on 2025-08-18, and current JPYC and JPYC EX launched on 2025-10-27.

## 3. Handled currencies

- **Handled token**: current JPYC, an electronic payment instrument, is issued and redeemed. JPYC Prepaid is a separate prepaid payment instrument.
- **Issuance networks**: the formal launch announcement listed Avalanche, Ethereum, and Polygon on 2025-10-27. It said expansion would follow, so networks used by the older prepaid token should not be mixed into the current lineup.
- **Peg ratio**: 1 JPYC = 1  Japanese yen
- **Use**: it can be held and sent through compatible wallets, while JPYC EX is the issuance and redemption window for identity-verified users.
- **No crypto-asset handling**: Does not provide buy/sell services for crypto-assets such as BTC, ETH, etc.

## 4. Scope of business

- **JPYC EX (issuance and redemption platform)**: the official window through which identity-verified users reserve issuance by bank transfer or reserve redemption by sending JPYC. It launched on 2025-10-27. “EX” should not be read as a crypto-asset trading venue.
- **For businesses and developers**: the company promotes SDK and API integration and use in business-to-business transfers and payments. Each partnership's status—planned, under development, or launched—must be kept distinct.
- **Backing**: the launch announcement states that deposits and Japanese government bonds preserve at least 100% of the outstanding issuance value.
- **Fiat-currency deposit channel**: Bank transfer.
- JPYC EX is not presented as offering crypto-asset trading, crypto lending, or crypto-asset derivatives.

## 5. Market share / trading volume

- The company's 2026-02-26 announcement reported cumulative issuance of JPY 1.3 billion as of 2026-02-16; its 2026-04-20 announcement reported JPY 2.1 billion as of 2026-04-15. These are company-reported, dated cumulative figures, not current outstanding supply or a third-party market-share measure.
- **Customer base**: identity-verified JPYC EX users and businesses and developers integrating the token into payments and transfers.
- The company's August 2025 announcement said it became the first domestic funds-transfer operator able to issue a yen-denominated electronic payment instrument. This is a dated regulatory first, not a permanent market rank or claim of being the only provider.

## 6. History / major incidents

The table is limited to establishment, token classification, registration, launch, and funding milestones confirmed in JPYC's official announcements. Issuance figures elsewhere in this entry retain the company's stated measurement dates. ^[Sources: https://corporate.jpyc.co.jp/news/posts/jpyc-prepaid-renaming; https://corporate.jpyc.co.jp/news/posts/first-yen-stablecoin-jpyc; https://corporate.jpyc.co.jp/news/posts/jpyc-ex-launch; https://corporate.jpyc.co.jp/news/posts/series-b-first-close; https://corporate.jpyc.co.jp/news/posts/series-b-second-close.]

| Period | Event |
|------|--------|
| 2019-11 | JPYC Inc. established. Noritaka Okabe assumed the position of Representative Director |
| 2021-01 | Began offering the former JPYC as a prepaid payment instrument |
| 2022 | Expanded multi-chain deployment (Polygon, Avalanche, etc.) |
| 2024-11-27 | Renamed the existing prepaid token “JPYC Prepaid” |
| 2025-08-18 | Obtained funds-transfer-operator registration, Kanto Local Finance Bureau No. 00099 |
| 2025-10-27 | Formally launched the electronic payment instrument JPYC and the JPYC EX issuance/redemption platform |
| 2026-02-26 | Announced a planned JPY 1.78 billion Series B first close |
| 2026-04-20 | Announced a planned additional JPY 2.8 billion Series B second close |

Within the company news and public registration information checked on 2026-07-29, no administrative disposition against JPYC or major asset outflow was identified. This is a bounded review, not a guarantee of future absence.

## 7. Strategic trends

- **Use of Series B funding**: the 2026 first- and second-close announcements identify systems and application development, hiring, business-to-business transfers and payment adoption, and alliances as intended uses.
- **Open integration**: official SDKs and multi-chain support are intended to enable wallet, card-repayment, collection, and business-payment integrations. Planned, under-development, and launched integrations remain distinct.
- **Separation of current JPYC and Prepaid**: the redeemable electronic payment instrument and the former prepaid token are managed as separate tokens, and the company does not exchange them for each other.

## 8. Related people

- **Noritaka Okabe** (Okabe Noritaka): Representative Director. Founder of JPYC. The central figure who has been promoting the issuance of a yen-pegged stablecoin in Japan.
- Other directors and the shareholder composition are described only to the extent shown in official company and funding disclosures checked on 2026-07-29.

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

- [JPYC corporate site](https://corporate.jpyc.co.jp/) (retrieved 2026-07-29)
- [Formal launch of JPYC and JPYC EX](https://corporate.jpyc.co.jp/news/posts/jpyc-ex-launch) (retrieved 2026-07-29)
- [Funds-transfer-operator registration](https://corporate.jpyc.co.jp/news/posts/first-yen-stablecoin-jpyc) (retrieved 2026-07-29)
- [Renaming to JPYC Prepaid](https://corporate.jpyc.co.jp/news/posts/jpyc-prepaid-renaming) (retrieved 2026-07-29)
- [Series B first close](https://corporate.jpyc.co.jp/news/posts/series-b-first-close) (retrieved 2026-07-29)
- [Series B second close](https://corporate.jpyc.co.jp/news/posts/series-b-second-close) (retrieved 2026-07-29)
- [JVCEA member list](https://jvcea.or.jp/member/) (retrieved 2026-07-29)
