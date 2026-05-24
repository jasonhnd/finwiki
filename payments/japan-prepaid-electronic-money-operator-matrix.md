---
title: Japan prepaid electronic money operator matrix — issuer, license, technology, AUM, breakage, mobile, merchant, refund, group bank
aliases:
  - payments/japan-prepaid-electronic-money-operator-matrix
  - japan-prepaid-electronic-money-operator-matrix
  - Japan prepaid e-money operator matrix
  - JP prepaid e-money comparison
  - Edy nanaco WAON Suica PASMO ICOCA matrix
  - Japan transit + retail prepaid e-money side-by-side
  - 日本前払い式電子マネー事業者比較マトリクス
domain: payments
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [payments, matrix, prepaid, electronic-money, e-money, felica, mifare, transit, retail, japan]
status: active
sources:
  - https://www.fsa.go.jp/policy/prepaid/
  - https://www.fsa.go.jp/menkyo/menkyoj/zenshikoukinrishou.pdf
  - https://www.fsa.go.jp/menkyo/menkyoj/zendaisanshakogata.pdf
  - https://corp.rakuten.co.jp/
  - https://www.7andi.com/
  - https://www.aeon.info/
  - https://www.jreast.co.jp/
  - https://www.pasmo.co.jp/
  - https://www.jr-odekake.net/
  - https://www.jrhokkaido.co.jp/
  - https://jr-central.co.jp/
  - https://www.meitetsu.co.jp/
  - https://www.nishitetsu.jp/
  - https://www.jrkyushu.co.jp/
  - https://www.boj.or.jp/
---

# Japan prepaid electronic money operator matrix

## TL;DR

Japan's prepaid electronic-money landscape is **not one industry** — it is at least three distinct stacks (retail-prepaid, transit-prepaid, and digital-wallet-prepaid) that look similar at checkout but sit on different **prepaid-license categories** under the Payment Services Act (資金決済法), different **technology bases** (FeliCa vs MIFARE vs purely-digital), and different **group corporate structures** (retail-FG, transit-rail-FG, e-commerce-FG). A reader who flattens Edy, nanaco, WAON, Suica, PASMO, ICOCA, Kitaca, TOICA, manaca, nimoca, and SUGOCA into one bucket will misread refund policy, mobile-integration depth, merchant-network economics, and how each issuer's group bank backstops the float. This entry is the side-by-side comparison surface that the rest of the [[payments/INDEX|payments index]] points to when the question is **which prepaid e-money operator a specific brand actually belongs to** before any merchant-side or consumer-side analysis. Compare with [[payments/japan-consumer-credit-operator-comparison-matrix|JP consumer credit operator matrix]] for the post-paid / credit side.

## Wiki route

This sits under [[payments/INDEX|payments index]] as the cross-category prepaid e-money reference. Read it with [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers JP index]] for the per-issuer registry source, [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] for the regulatory boundary that determines which license each operator holds, [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]] for the transit-side deep dive, [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]] for the retail-side deep dive, [[payments/famipay-valucreate-strategy|FamiPay ValuCreate strategy]] for the convenience-store-FG prepaid lane, [[payments/japan-payment-scheme-economics-matrix|JP payment scheme economics matrix]] for the cross-scheme economics, and [[payments/japan-code-payment-competitive-map|JP code-payment competitive map]] for the QR / code-payment overlay where these prepaid brands sometimes ride on top. Group entity anchors are [[JapanFG/rakuten-edy|Rakuten Edy]], [[JapanFG/seven-card-service|Seven Card Service]] (nanaco operator), and [[JapanFG/aeon-financial-service|AEON Financial Service]] (WAON operator), with broader group surfaces at [[loyalty/japan-points-landscape|JP points landscape]], [[retail/seven-and-i-hd|Seven & i HD]], and [[retail/aeon-group|AEON Group]].

## Why this matrix matters

Prepaid e-money in Japan is a **JPY 25-trillion-class settlement layer** (annual transaction volume across all 11+ brands), and the per-issuer differences materially affect (a) the **prepaid-balance float economics** — how much yen sits on the issuer's balance sheet for how long, and what regulatory deposit / guarantee obligation applies under the Payment Services Act, (b) the **merchant-side acceptance economics** — Suica/PASMO acceptance is rate-bound by transit-FG operating costs while WAON/nanaco acceptance is rate-bound by retail-FG group cross-subsidy, (c) the **mobile integration depth** — Apple Pay / Google Pay support landed in different orders for different brands and the Mobile FeliCa vs digital-wallet-only routes diverge, (d) the **refund / consumer-protection regime** — transit brands have established lost-card / refund procedures that pure-prepaid brands often lack, and (e) the **group bank backstop** — the float liability is implicitly or explicitly backstopped by the parent group's bank or banking-adjacent entity.

The matrix below lays out those dimensions so a reader can distinguish "Suica is a Banking Act adjacent transit-issuer with JR East balance-sheet support" from "nanaco is a Payment Services Act 第三者型前払 issuer with Seven Bank / Seven & i Group support" from "Rakuten Edy is a Payment Services Act 第三者型前払 issuer inside the Rakuten FG superstore" — three structurally distinct operator profiles that share the FeliCa-tap UX.

## Per-issuer profiles

### Edy — Rakuten Edy (Rakuten Group 4755)

**Operator**: [[JapanFG/rakuten-edy|Rakuten Edy Co., Ltd.]] (subsidiary of Rakuten Group, TSE Prime 4755). **License**: Payment Services Act 第三者型前払式支払手段発行者 (third-party-type prepaid issuer). **Technology**: FeliCa (Edy IC chip; also Mobile FeliCa for Apple Pay / Google Pay / Osaifu-Keitai). **Launch**: 2001 by bitWallet (acquired by Rakuten 2010, rebranded Rakuten Edy 2012). **Distribution**: physical Edy card, Mobile FeliCa, Apple Pay Edy, Google Pay Edy. **Merchant network**: ~1.1M points (one of the broadest among prepaid brands). **Mobile integration**: very deep — Apple Pay added Edy 2016-10, Google Pay 2018-05, native Osaifu-Keitai since launch. **Refund policy**: balance refund possible at Rakuten Edy office (paperwork-heavy). **Group bank backstop**: Rakuten Bank (TSE Prime 5838) is the group internet bank; Edy float is backstopped by Rakuten FG balance sheet. **Group cross-link**: Rakuten Points integration — earn / spend Rakuten Points via Edy. See [[payments/japan-payment-scheme-economics-matrix|JP payment scheme economics matrix]] for cross-scheme comparison.

### nanaco — Seven Card Service (Seven & i HD 3382)

**Operator**: [[JapanFG/seven-card-service|Seven Card Service Co., Ltd.]] (subsidiary inside [[retail/seven-and-i-hd|Seven & i HD]], TSE Prime 3382). **License**: Payment Services Act 第三者型前払式支払手段発行者. **Technology**: FeliCa (nanaco card + Mobile FeliCa). **Launch**: 2007-04 (first day, available at 7-Eleven nationwide). **Distribution**: physical nanaco card, nanaco mobile (Android Osaifu-Keitai), Apple Pay nanaco. **Merchant network**: ~0.7M points, heavily weighted to Seven & i Group stores (7-Eleven, Ito-Yokado, SOGO/Seibu legacy, Denny's). **Mobile integration**: Apple Pay added nanaco 2019-10. **Refund policy**: balance refund possible at Seven Bank counter (Seven Bank ATMs are the cash on/off-ramp). **Group bank backstop**: [[JapanFG/seven-bank|Seven Bank]] (TSE Prime 8410) is the group bank; nanaco's cash on/off-ramp uses Seven Bank ATMs as the dominant channel — this is structurally distinctive among prepaid brands (most use third-party convenience-store or partner-bank ATMs). **Group cross-link**: nanaco Points (1.0% on Seven & i Group purchases, 0.5% standard) and consolidation with [[payments/funds-transfer-service-providers-japan-index|funds-transfer]] and credit-card flows inside Seven Card Service. Refer to [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]] for the head-to-head detail.

### WAON — AEON Group (AEON 8267 / AEON Financial Service 8570)

**Operator**: [[JapanFG/aeon-financial-service|AEON Financial Service Co., Ltd.]] (subsidiary inside [[retail/aeon-group|AEON Group]], parent AEON Co. TSE Prime 8267; AEON Financial Service is separately listed TSE Prime 8570). **License**: Payment Services Act 第三者型前払式支払手段発行者. **Technology**: FeliCa (WAON card + Mobile FeliCa). **Launch**: 2007-04 (essentially the same launch month as nanaco, deliberate retail-prepaid competition). **Distribution**: physical WAON card, mobile WAON (Android Osaifu-Keitai), Apple Pay WAON. **Merchant network**: ~1.0M points, heavily weighted to AEON Group stores (AEON Mall, MaxValu, MiniStop, AEON Pharmacy, daiei). **Mobile integration**: Apple Pay added WAON 2021-05 (notably later than nanaco). **Refund policy**: balance refund possible at AEON service counter. **Group bank backstop**: [[JapanFG/aeon-bank|AEON Bank]] (group internet bank) and the AEON Financial Service balance sheet jointly backstop WAON float. **Group cross-link**: WAON Points + AEON Card auto-charge integration; the dominant AEON-shopper UX is the **WAON 自動チャージ** auto-recharge linked to AEON Card. Refer to [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]].

### Suica — JR East (East Japan Railway 9020)

**Operator**: East Japan Railway Company (JR East, TSE Prime 9020) — Suica is **operated by JR East directly** (not by a separate subsidiary), which is structurally distinct from the retail-prepaid issuers above. **License**: Payment Services Act 第三者型前払式支払手段発行者. **Technology**: FeliCa (Suica IC + Mobile Suica with the broadest Apple Pay / Google Pay / Mobile FeliCa support among transit cards). **Launch**: 2001-11 (initially as a transit-only fare-payment card; expanded to shopping payment 2004-03). **Distribution**: physical Suica card, Mobile Suica (Android), Apple Pay Suica (since 2016-10 — the headline iOS launch in Japan), Google Pay Suica. **Merchant network**: ~1.6M points (the broadest among prepaid e-money), including all interoperable 全国相互利用 transit-card-accepting merchants. **Mobile integration**: deepest — Apple Pay Suica 2016-10 was a major iOS-in-JP launch event. **Refund policy**: well-established — Suica balance and 500 yen deposit refund at JR East 緑の窓口 (Midori-no-Madoguchi) ticket counter, plus 記名 Suica lost-card reissuance with balance preservation. **Group bank backstop**: JR East does not run a bank; Suica float sits on JR East's consolidated balance sheet under prepaid-liability with Payment Services Act-mandated provisioning. **Group cross-link**: JRE POINT (JR East loyalty programme) integration, Atre / NewDays / Beck's Coffee shop network, ekinet (online ticket) integration, JR East Bank Card (partner Mizuho) co-brand. Suica is the **interoperability backbone** of the 全国相互利用 scheme that lets the 10 major transit cards work across each other's networks; see [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]].

### PASMO — PASMO Co.

**Operator**: PASMO Co., Ltd. (joint-venture issuer owned by 25+ private railway and bus operators in the Tokyo metropolitan area, including Tokyu, Odakyu, Keio, Tobu, Seibu, Keisei, Tokyo Metro, Toei, and others). **License**: Payment Services Act 第三者型前払式支払手段発行者. **Technology**: FeliCa (PASMO card + Mobile PASMO). **Launch**: 2007-03 (one month before Suica-PASMO 全国相互利用 launched). **Distribution**: physical PASMO card, Mobile PASMO (Android, 2020-10), Apple Pay PASMO (2020-10 — launched simultaneously with Mobile PASMO Android). **Merchant network**: same interoperable 全国相互利用 network as Suica (~1.6M points). **Mobile integration**: Apple Pay PASMO arrived in 2020-10, **4 years after Apple Pay Suica** — this lag reflects the joint-venture coordination cost of getting 25+ stakeholder operators aligned vs JR East as a single decision-maker. **Refund policy**: balance refund at issuing-railway ticket office (procedure varies by issuer-railway), 記名 PASMO reissuance with balance preservation. **Group bank backstop**: each member railway carries its proportional share of float liability; no single bank backstop. **Group cross-link**: per-member-railway loyalty programmes (Tokyu TOKYU POINT, Odakyu OdakyuPoints, Tokyo Metro To Me Card, etc.) — PASMO is the shared-rail technology but loyalty fragments by issuing railway. See [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]].

### ICOCA — JR West (West Japan Railway 9021)

**Operator**: West Japan Railway Company (JR West, TSE Prime 9021), operated directly. **License**: Payment Services Act 第三者型前払式支払手段発行者. **Technology**: FeliCa (ICOCA card + Mobile ICOCA). **Launch**: 2003-11. **Distribution**: physical ICOCA card, Mobile ICOCA (Android 2023-06), Apple Pay ICOCA (2023-06 — much later than Suica due to JR West technology-investment timing). **Merchant network**: same interoperable 全国相互利用 network. **Mobile integration**: Apple Pay ICOCA 2023-06 (~7 years after Suica). **Refund policy**: balance refund at JR West ticket office, 記名 ICOCA reissuance. **Group bank backstop**: JR West balance sheet (no group bank). **Group cross-link**: ICOCA POINT (loyalty) and J-WEST Card (partner SMBC). Refer to [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]].

### Kitaca — JR Hokkaido

**Operator**: Hokkaido Railway Company (JR Hokkaido, private — not TSE-listed, government-affiliated as a 特殊会社). **License**: Payment Services Act 第三者型前払式支払手段発行者. **Technology**: FeliCa (Kitaca card; no Mobile Kitaca as of 2026). **Launch**: 2008-10. **Distribution**: physical card only (no mobile integration). **Merchant network**: interoperable via 全国相互利用 (uses the broader network for acceptance). **Mobile integration**: **none** — Kitaca is the only one of the major 10 transit cards without Mobile / Apple Pay / Google Pay support, reflecting JR Hokkaido's constrained financial position. **Refund policy**: balance refund at JR Hokkaido ticket office. **Group bank backstop**: JR Hokkaido balance sheet. **Group cross-link**: minimal loyalty programme depth.

### TOICA — JR Central (Central Japan Railway 9022)

**Operator**: Central Japan Railway Company (JR Central, TSE Prime 9022), operated directly. **License**: Payment Services Act 第三者型前払式支払手段発行者. **Technology**: FeliCa (TOICA card; Mobile TOICA in pilot/limited as of 2026). **Launch**: 2006-11. **Distribution**: physical card, mobile pending. **Merchant network**: 全国相互利用 interoperable. **Mobile integration**: limited / late vs Suica/PASMO — JR Central has historically prioritized shinkansen-fare integration (EX-IC, SmartEX) over Mobile TOICA. **Refund policy**: ticket-office refund. **Group bank backstop**: JR Central balance sheet. **Group cross-link**: JR Central Tower / JR Tokai-related retail, EX-IC integration for Tokaido shinkansen reservations.

### manaca — Meitetsu / Nagoya Tetsudo

**Operator**: 株式会社エムアイシー (MIC, Meitetsu IC Card) — joint-venture between Meitetsu (Nagoya Tetsudo) and Nagoya City Transportation Bureau. **License**: Payment Services Act 第三者型前払式支払手段発行者. **Technology**: FeliCa (manaca card; no broad mobile integration). **Launch**: 2011-02. **Distribution**: physical card. **Merchant network**: 全国相互利用 interoperable. **Mobile integration**: limited. **Refund policy**: ticket-office refund. **Group bank backstop**: Meitetsu balance sheet + Nagoya City Transportation Bureau. **Group cross-link**: Meitetsu loyalty (Meitetsu MEMBERS), Nagoya City Transit Card legacy.

### nimoca — Nishitetsu / Nishi-Nippon Railroad

**Operator**: 株式会社ニモカ (Nimoca Co., Ltd.) — joint-venture controlled by Nishi-Nippon Railroad (Nishitetsu). **License**: Payment Services Act 第三者型前払式支払手段発行者. **Technology**: FeliCa (nimoca card). **Launch**: 2008-05. **Distribution**: physical card. **Merchant network**: 全国相互利用 interoperable. **Mobile integration**: limited. **Refund policy**: ticket-office refund. **Group bank backstop**: Nishitetsu balance sheet. **Group cross-link**: nimoca Points, Nishitetsu bus / rail integration in the Fukuoka metropolitan area.

### SUGOCA — JR Kyushu (Kyushu Railway 9142)

**Operator**: Kyushu Railway Company (JR Kyushu, TSE Prime 9142), operated directly. **License**: Payment Services Act 第三者型前払式支払手段発行者. **Technology**: FeliCa (SUGOCA card). **Launch**: 2009-03. **Distribution**: physical card. **Merchant network**: 全国相互利用 interoperable. **Mobile integration**: limited as of 2026 (JR Kyushu shinkansen integration via separate EX-IC route). **Refund policy**: ticket-office refund. **Group bank backstop**: JR Kyushu balance sheet. **Group cross-link**: JR Kyushu retail and travel loyalty.

## Big comparison matrix table

| Brand | Operator | Parent group | License (Payment Services Act) | Technology | Launch | Merchant network (approx) | Apple Pay support since | Refund policy | Group bank backstop | Group cross-link | Stack tier |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Edy** | [[JapanFG/rakuten-edy\|Rakuten Edy]] | Rakuten Group (4755) | 第三者型前払 | FeliCa (Mobile FeliCa) | 2001 | ~1.1M | 2016-10 | Office (paperwork) | Rakuten Bank (5838) | Rakuten Points | retail / e-commerce |
| **nanaco** | [[JapanFG/seven-card-service\|Seven Card Service]] | [[retail/seven-and-i-hd\|Seven & i HD]] (3382) | 第三者型前払 | FeliCa (Mobile FeliCa) | 2007-04 | ~0.7M | 2019-10 | Seven Bank counter | [[JapanFG/seven-bank\|Seven Bank]] (8410) | nanaco Points + 7&i Group | retail (CVS-focused) |
| **WAON** | [[JapanFG/aeon-financial-service\|AEON Financial Service]] (8570) | [[retail/aeon-group\|AEON Group]] (8267) | 第三者型前払 | FeliCa (Mobile FeliCa) | 2007-04 | ~1.0M | 2021-05 | AEON service counter | [[JapanFG/aeon-bank\|AEON Bank]] | WAON Points + AEON Card auto-charge | retail (mall-focused) |
| **Suica** | JR East (operated directly) | JR East (9020) | 第三者型前払 | FeliCa (Mobile FeliCa) | 2001-11 | ~1.6M | 2016-10 | 緑の窓口 (well-established) | JR East balance sheet (no group bank) | JRE POINT + ekinet + Atre | transit (Tokyo-east JP) |
| **PASMO** | PASMO Co. (JV of 25+ railways) | metropolitan private railways | 第三者型前払 | FeliCa (Mobile FeliCa) | 2007-03 | ~1.6M (相互利用) | 2020-10 | Per-issuer railway office | Member-railway balance sheets | Per-railway loyalty (TOKYU POINT, etc.) | transit (Tokyo metro private rail) |
| **ICOCA** | JR West (operated directly) | JR West (9021) | 第三者型前払 | FeliCa (Mobile FeliCa) | 2003-11 | ~1.6M (相互利用) | 2023-06 | JR West ticket office | JR West balance sheet | ICOCA POINT + J-WEST Card (SMBC partner) | transit (Kansai) |
| **Kitaca** | JR Hokkaido (operated directly) | JR Hokkaido (特殊会社) | 第三者型前払 | FeliCa | 2008-10 | 相互利用 | **none** | JR Hokkaido ticket office | JR Hokkaido balance sheet | minimal | transit (Hokkaido) |
| **TOICA** | JR Central (operated directly) | JR Central (9022) | 第三者型前払 | FeliCa | 2006-11 | 相互利用 | limited / late | JR Central ticket office | JR Central balance sheet | EX-IC shinkansen integration | transit (Tokai) |
| **manaca** | エムアイシー (MIC) | Meitetsu + Nagoya City | 第三者型前払 | FeliCa | 2011-02 | 相互利用 | limited | Per-operator office | Meitetsu + city bureau | Meitetsu MEMBERS | transit (Nagoya) |
| **nimoca** | ニモカ社 | Nishitetsu (Nishi-Nippon Railroad) | 第三者型前払 | FeliCa | 2008-05 | 相互利用 | limited | Per-operator office | Nishitetsu balance sheet | nimoca Points + Nishitetsu integration | transit (Fukuoka) |
| **SUGOCA** | JR Kyushu (operated directly) | JR Kyushu (9142) | 第三者型前払 | FeliCa | 2009-03 | 相互利用 | limited | JR Kyushu ticket office | JR Kyushu balance sheet | JR Kyushu travel/retail | transit (Kyushu) |

## Cross-axis: retail-FG vs transit-rail-FG vs e-commerce-FG

The matrix above lists 11 brands but they collapse into **three operator categories** that determine cross-link economics, refund procedure complexity, and group bank backstop posture:

### Retail-FG prepaid (issued by retail-group financial subsidiary)

- **nanaco** — issued by Seven Card Service inside Seven & i HD
- **WAON** — issued by AEON Financial Service inside AEON Group

**Defining characteristics**: merchant network heavily concentrated in parent-group stores, cash on/off-ramp via parent-group bank ATMs (Seven Bank for nanaco) or parent-store counters (AEON for WAON), loyalty programme deeply integrated with parent-group shopping behaviour, auto-recharge linked to parent-group credit card (AEON Card → WAON auto-charge), in-group credit-card cross-sell as the dominant unit-economics driver. The retail-FG prepaid is **operationally a retail-loyalty programme with a prepaid wrapper** — the prepaid liability sits on a financial subsidiary's balance sheet, but the economic logic is shopper-frequency capture rather than payment-margin extraction. See [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]] for the head-to-head detail.

### Transit-rail-FG prepaid (issued by railway operator)

- **Suica** — JR East
- **PASMO** — Tokyo-metro private railway JV
- **ICOCA** — JR West
- **Kitaca** — JR Hokkaido
- **TOICA** — JR Central
- **manaca** — Meitetsu + Nagoya City
- **nimoca** — Nishitetsu
- **SUGOCA** — JR Kyushu

**Defining characteristics**: prepaid issued as an extension of fare-collection infrastructure, well-established refund procedure (railway ticket-office network handles the lost-card / refund flow that retail-FG prepaid struggles with), 全国相互利用 mutual-interoperability backbone connects 10 major brands into a single acceptance network, mobile integration timing depends on per-operator technology budget (Suica first, ICOCA 7 years later, Kitaca still not at all), no group bank in most cases (railway balance sheet carries the float liability directly). The transit-FG prepaid is **operationally a transit-payment system that expanded into retail acceptance** — the original purpose was tap-to-ride, and retail acceptance is the by-product. See [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]] for the transit-side deep dive.

### E-commerce-FG prepaid

- **Edy** — Rakuten Edy inside Rakuten Group

**Defining characteristics**: parent FG is an internet / e-commerce conglomerate, prepaid sits alongside QR / code payment (Rakuten Pay), card (Rakuten Card), and points (Rakuten Points) inside a multi-product wallet stack, physical-store touchpoint complementing the e-commerce parent's online presence, deep loyalty programme integration with the parent's broader e-commerce ecosystem. Edy is the **only major JP prepaid e-money in this operator category**, which reflects the historical sequencing — Edy launched in 2001 (pre-Rakuten acquisition) when retail-FG and transit-FG prepaid had not yet entered the market, and was subsequently absorbed into Rakuten's superstore strategy.

## Interoperability backbone — 全国相互利用 (Nationwide Mutual Use)

The 10 major transit-card brands (Suica, PASMO, Kitaca, TOICA, manaca, ICOCA, PiTaPa, nimoca, SUGOCA, はやかけん) are connected via the **全国相互利用 scheme** launched 2013-03 — a single tap on any compatible reader at any participating transit or merchant terminal works regardless of which brand the card belongs to. This creates a **single shared acceptance network of ~1.6M points** across all 10 brands, which is one of the largest contactless-prepaid acceptance networks globally.

The economic effect is that smaller transit-brand issuers (Kitaca, TOICA, manaca, nimoca, SUGOCA) gain access to the full network without bearing the full acquisition cost of building it. JR East as Suica's issuer is the de-facto network backbone provider, which is one reason JR East's Suica platform investment is structurally underpriced as a public good.

Note that **PiTaPa** (Kansai-area private railway prepaid, issued by Surutto KANSAI) is the one major transit-card brand **not in the prepaid e-money operator matrix above** because PiTaPa uses a **post-paid** model (credit-billed at month-end) rather than prepaid. PiTaPa is structurally a credit-card on rails rather than a prepaid card, and is registered as a 個別信用購入あっせん / 包括信用購入あっせん rather than 第三者型前払 — see [[payments/japan-consumer-credit-operator-comparison-matrix|JP consumer credit operator matrix]] for the post-paid taxonomy.

## Boundary cases

- **FeliCa vs MIFARE in the JP market** — Every brand in this matrix is **FeliCa-based**, not MIFARE. MIFARE is the dominant global standard for transit contactless (used by London Oyster, Hong Kong Octopus pre-Visa-overlay, Singapore EZ-Link, NYC OMNY, etc.) but is essentially absent from the JP transit-prepaid stack. The FeliCa choice was made by NTT DoCoMo's Osaifu-Keitai initiative around 2004 and JR East's earlier Suica-FeliCa selection, locking the JP market into FeliCa for ~25 years. This is the structural reason JP prepaid IC works seamlessly across transit + retail (single chip standard) but cannot easily be made interoperable with global MIFARE-based transit systems without an overlay (Visa Touch / EMV Contactless overlays are now being rolled out on a per-railway basis as the workaround).
- **Suica's regulatory classification** — Suica is registered as a 第三者型前払式支払手段 under the Payment Services Act, but JR East is **not a Banking Act bank or 資金移動業 funds-transfer operator**. The Suica float (estimated > JPY 200B+ at any given time across all balances) sits on JR East's prepaid-liability with the statutory deposit-guarantee provision rather than under banking-system protection. This is why the Suica refund procedure is operator-side rather than deposit-insurance-side.
- **PASMO joint-venture float-allocation** — PASMO's float liability is distributed across the 25+ member-railway issuers proportionally to issuance. A balance loaded at a Tokyu station is a Tokyu balance-sheet liability even if subsequently spent at a Tokyo Metro station; an internal settlement occurs between member railways. This is structurally distinct from the JR East / JR West / JR Kyushu single-entity model.
- **Apple Pay support gap as a competitive marker** — The Apple Pay support timing (Suica 2016-10 → nanaco 2019-10 → PASMO 2020-10 → WAON 2021-05 → ICOCA 2023-06 → others not yet) is a competitive marker. Suica's first-mover advantage in iOS-JP integration cemented its dominance among Tokyo-metro digital natives; ICOCA's 7-year lag visibly affected Kansai-side digital-prepaid adoption.
- **nanaco's Seven Bank ATM cash-rail uniqueness** — nanaco is the only brand in the matrix where the cash on/off-ramp uses a **dedicated group bank ATM network as the primary channel** (Seven Bank ATMs are inside every 7-Eleven). Other retail brands (Edy, WAON) use the parent's customer-service counter or third-party convenience-store ATMs. This is structurally why nanaco's reload UX is the smoothest in the retail-prepaid segment among JR-distant customers.
- **WAON 自動チャージ (auto-recharge) integration** — WAON's auto-recharge linked to AEON Card is the dominant UX for AEON-shoppers and is one of the most-cited reasons AEON Card holders maintain the card relationship. This is a structural cross-link that pure-prepaid brands without an in-group credit-card issuer cannot replicate.
- **Rakuten Edy's e-commerce-FG positioning** — Edy is the only prepaid e-money in the matrix where the parent FG is an **e-commerce / internet conglomerate** rather than a retail-FG or transit-rail-FG. Rakuten Edy's role inside the Rakuten ecosystem is partly to provide a physical-store touchpoint complementing Rakuten Pay (the QR / code payment) and Rakuten Card (the credit card) — see [[payments/japan-code-payment-competitive-map|JP code-payment competitive map]].
- **Kitaca's no-mobile gap** — Kitaca is the only major 全国相互利用 member without any Mobile / Apple Pay / Google Pay product as of 2026. The financial-investment cost of mobile integration is the cited reason; JR Hokkaido's constrained financial position limits discretionary technology spend.
- **Breakage and unredeemed-balance economics** — All prepaid e-money issuers carry **breakage** liability (balances loaded but never spent) and the Payment Services Act requires issuers to maintain a 発行保証金 (issuance deposit) of at least 50% of unredeemed-balance at half-year cutoff dates. The breakage line is a material profit driver for retail-prepaid (WAON, nanaco, Edy) but less so for transit-prepaid (Suica, PASMO) where users top up small amounts more frequently. This dimension is not in the matrix's column row (too estimation-dependent for a public-source matrix) but is the critical economic story behind the prepaid-issuer business model — refer to [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] for the regulatory deposit mechanics.
- **Mobile FeliCa lock-in to Android + Apple Pay** — Mobile FeliCa works on Android phones with the right NFC chip support (essentially all JP-market Android since 2010-era Osaifu-Keitai) and on iPhone since iPhone 7 (2016 with the Apple Pay JP launch). Mobile FeliCa is **not available on non-JP-market Android phones**, which is one reason inbound-tourist UX for these prepaid brands is limited to Visit Suica / Welcome Suica physical-card products rather than mobile.
- **QR / code-payment overlay**: Several of these prepaid brands are increasingly accessed via a QR / code-payment overlay (e.g., Rakuten Pay routes through Edy-charge as one of its funding sources; nanaco can be loaded via various QR rails). The clean separation between "prepaid e-money brand" and "QR code-payment brand" is therefore eroding — see [[payments/japan-code-payment-competitive-map|JP code-payment competitive map]] for the overlay landscape.

## Float-size approximate ordering

Public-source-derived rough ordering of unredeemed prepaid balance at any given time (figures vary by half-year cutoff and are not consistently disclosed in identical formats across issuers):

1. **Suica** — largest single-brand prepaid float in JP, JPY 200-300B range
2. **WAON** — JPY 100-200B range
3. **PASMO** — JPY 100-200B range (distributed across 25+ member-railway balance sheets)
4. **nanaco** — JPY 100-200B range
5. **Edy** — JPY 50-100B range
6. **ICOCA** — JPY 50-100B range
7. **TOICA / manaca / nimoca / SUGOCA / Kitaca** — each below JPY 50B

The aggregate **prepaid float across all 10+ brands is JPY 1-1.5 trillion class** at any given time. Under the Payment Services Act, issuers must maintain a 発行保証金 (issuance guarantee deposit) at the closest Legal Affairs Bureau of at least 50% of the half-year-cutoff unredeemed balance, which means **roughly JPY 500-750 billion of issuance-guarantee deposits sit with the JP government as protection for prepaid users**. This is one of the largest consumer-protection deposit pools in the JP financial system, and is a structural reason the Payment Services Act prepaid regime is regulated tightly. See [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] for the regulatory detail.

## Group-bank backstop posture

The "group bank backstop" column in the matrix is one of the more subtle dimensions and deserves expansion:

- **Retail-FG with in-group bank** (nanaco/Seven Bank, WAON/AEON Bank, Edy/Rakuten Bank) — the in-group bank provides operational cash on/off-ramp via ATMs and balance-sheet capacity to absorb prepaid-liability stress
- **Transit-FG without group bank** (Suica/JR East, ICOCA/JR West, SUGOCA/JR Kyushu, TOICA/JR Central, nimoca/Nishitetsu, etc.) — the railway operator's balance sheet directly carries the prepaid liability; cash on/off-ramp uses partner-bank ATMs (Mizuho-JR East partnership for Suica, SMBC-JR West for ICOCA)
- **PASMO joint-venture** — 25+ member-railway balance sheets carry proportional liability; no single backstop entity
- **Kitaca / Hokkaido edge case** — JR Hokkaido is a 特殊会社 with government-backed structural support; the prepaid liability sits inside a partially-government-backed operator unlike the JR-Honshu-three (East/West/Central) which are fully privatised

The presence or absence of an in-group bank affects (a) how fast the issuer can pivot a stressed prepaid-liability event without external bridge financing, (b) what regulatory engagement looks like (group-bank-backed issuers can route conversations through the bank's existing FSA / BoJ supervisory channels rather than starting fresh), and (c) how easily the issuer can experiment with adjacent fintech features (auto-charge via group credit card requires group-credit-card cooperation, which is easier inside a unified retail-FG).

## Regulatory deposit obligation under the Payment Services Act

All 11 brands in the matrix are registered as **第三者型前払式支払手段発行者** (third-party-type prepaid issuer) under the Payment Services Act (資金決済法), which imposes:

- **発行保証金 (issuance guarantee deposit)** — at each half-year cutoff (3-31 and 9-30), the issuer must deposit at the closest Legal Affairs Bureau at least 50% of the half-year-end unredeemed-balance, in cash, government bonds, or bank guarantee. The deposit serves as user-protection in the event of issuer insolvency
- **業務報告書 (business report)** — annual filing to FSA with prepaid balance, transaction volume, refund metrics
- **苦情処理 (complaint handling)** — designated complaint-processing organisation (ADR) membership required
- **加盟店管理 (merchant management)** — for 第三者型 issuers (vs 自家型 single-merchant prepaid), the issuer carries obligation to manage participating merchant relationships
- **業務改善命令** — FSA can issue business-improvement orders if compliance issues arise

The 第三者型 vs 自家型 distinction is structural: 第三者型 is the "general-purpose accepted at many merchants" model (all 11 brands in this matrix), while 自家型 is the "accepted only at the issuer's own stores" model (e.g., department-store prepaid cards used only at that department store). The 自家型 regime has lighter regulatory load. The boundary check is whether the prepaid is accepted at "third-party" merchants outside the issuer's group — see [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] for the boundary detail.

## Comparison vs the funds-transfer regime

A reader new to JP payments often confuses **prepaid e-money** with **funds-transfer (資金移動業)** — they share the wallet-balance UX but sit under different licenses with materially different rules:

| Dimension | Prepaid 第三者型前払 | Funds-transfer 資金移動業 |
|---|---|---|
| Balance refundability to cash | Limited (per Payment Services Act 20条 amendment-era rules; most brands offer limited cash-back via service counters) | Yes — operator must enable balance withdrawal to a bank account |
| Inter-user transfer (送金) | Generally not allowed under the prepaid regime | Yes — the defining capability of 資金移動業 |
| Per-transaction limit | None specified by license (varies by issuer policy) | Tiered by license type (Type 1 / 2 / 3) with caps |
| User-fund protection | 発行保証金 50% deposit | Full segregation + trust or guarantee |
| Examples | Suica, WAON, nanaco, Edy, PASMO, ICOCA, etc. | Merpay, PayPay, Rakuten Pay (where it supports user-to-user transfer), LINE Pay, Kyash |

The line is increasingly blurred — products like PayPay and Merpay run **multiple license stacks simultaneously** (prepaid for the basic wallet, 資金移動業 for transfer functionality, with the appropriate license activated per feature). Some prepaid-branded products are quietly migrating to 資金移動業 underpinning to enable transfer features. See [[payments/funds-transfer-service-providers-japan-index|funds-transfer service providers JP index]] for the funds-transfer side.

## Mobile FeliCa ecosystem evolution

The Mobile FeliCa rollout pattern shaped which prepaid brands dominated mobile-first usage:

| Year | Event | Impact |
|---|---|---|
| 2001 | Suica physical-card launch | Sets FeliCa-on-transit precedent |
| 2004 | Mobile FeliCa launch by NTT DoCoMo / FeliCa Networks | Locks JP mobile-payment to FeliCa standard |
| 2006-01 | Mobile Suica Android (FOMA Osaifu-Keitai) | First mobile transit-prepaid |
| 2007-04 | nanaco + WAON launch | Retail-prepaid FeliCa adoption |
| 2010 | Rakuten acquires Edy | E-commerce-FG enters prepaid |
| 2016-10 | Apple Pay JP launch with Suica + Edy | iPhone enters JP prepaid ecosystem |
| 2018-05 | Google Pay JP launch with Suica + Edy | Android non-Osaifu-Keitai path opens |
| 2019-10 | Apple Pay adds nanaco | Retail-prepaid iPhone catches up |
| 2020-10 | Apple Pay + Mobile PASMO launch (simultaneous) | Tokyo private-rail enters mobile |
| 2021-05 | Apple Pay adds WAON | Retail-prepaid fully on iPhone |
| 2023-06 | Apple Pay adds ICOCA + Mobile ICOCA | Kansai catches up after 7-year lag |
| Pending | TOICA / manaca / nimoca / SUGOCA / Kitaca mobile | Smaller transit operators still on physical-only or partial |

The Apple Pay support timing differential is one of the most cited competitive markers in JP prepaid analysis — the 7-year gap between Suica (2016) and ICOCA (2023) materially affected the Kansai-side digital-prepaid adoption pace, and Kitaca's continued absence from Mobile / Apple Pay limits Hokkaido-side prepaid digital-native conversion.

## Merchant-economics line item

Merchant acceptance fees for prepaid e-money in JP typically sit at **2-3% MDR (merchant discount rate)** depending on issuer-merchant negotiation, lower than full-credit-card MDR (3-4% on standard rates) but higher than QR / code-payment MDR (1-2% commonly, sometimes 0% during promotional periods). The 3-tier MDR structure is one of the reasons merchants accept multiple payment methods rather than picking a single dominant one — each method serves a different fee profile.

The economic implications for the prepaid issuer are:
- **Retail-FG prepaid (nanaco, WAON, Edy)** — the merchant fee is mostly internalised inside the parent group when the transaction happens at a parent-group store, so the effective MDR for in-group transactions is closer to a transfer-pricing arrangement than an arm's-length fee. This is one structural reason in-group acceptance dominates volume
- **Transit-FG prepaid (Suica, PASMO, ICOCA, etc.)** — the MDR is genuine third-party fee revenue for the issuing railway, which is one of the lines that makes Suica/PASMO economically attractive to JR East and the PASMO consortium beyond fare-collection use
- **Cross-brand interoperability fee allocation** — when a Suica tap happens at a WAON-accepting merchant via 全国相互利用, the inter-issuer settlement allocates a portion of the fee to Suica's issuer (JR East) and a portion to the acquiring infrastructure. The fee allocation rules are confidential to participating issuers but generally favour the brand whose terminal infrastructure is being used

The merchant-fee dimension is critical context for understanding why some prepaid issuers continue to expand merchant networks aggressively (transit-FG) while others focus on in-group integration depth (retail-FG).

## Breakage dimension

**Breakage** — the portion of prepaid balance loaded but never spent — is a material profit line for prepaid issuers. The exact figures are not disclosed in identical formats across issuers, but the structural pattern is:

- Retail-FG prepaid (WAON, nanaco, Edy) tends to have **higher breakage** because users top up larger amounts less frequently, and small residual balances are left on rarely-used cards
- Transit-FG prepaid (Suica, PASMO, ICOCA) tends to have **lower breakage** because users top up smaller amounts more frequently for daily commute spending, and residual balances are generally consumed within days or weeks

Breakage is recognised as revenue under different accounting treatments depending on issuer choice — some recognise on the half-year cutoff based on a statistical-expected-spending model, others recognise only on confirmed-non-redemption events (e.g., card expiry without refund claim). The Payment Services Act does not mandate a specific breakage-recognition method.

## Inbound-tourist UX gap

The matrix-level brands all share a **fundamental inbound-tourist UX gap**: Mobile FeliCa works only on JP-market phones (Android Osaifu-Keitai + Apple Pay JP iPhones), not on phones purchased outside Japan. Inbound tourists are therefore limited to **physical-card products** — Welcome Suica / Visit Suica (JR East), PASMO PASSPORT (PASMO Co.), ICOCA & HARUKA bundle (JR West) — which are time-limited tourist-targeted variants of the regular cards.

This UX gap is one of the structural drivers behind the **Visa Touch / EMV Contactless overlay rollout** that JR East, JR Kyushu, Nankai, and others have begun layering on top of FeliCa readers — international tourists with EMV-Contactless cards can ride and shop without converting to a JP-market FeliCa device. The overlay is technologically additive (the same reader handles both FeliCa and EMV) but commercially disruptive to the existing prepaid-issuer revenue model, since tourists tapping with overseas EMV cards bypass the prepaid float entirely. See [[payments/cashless-jp-landscape|JP cashless landscape]] for the broader contactless rollout story.

## Related

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics]]
- [[payments/waon-nanaco-retail-prepaid-comparison]]
- [[payments/famipay-valucreate-strategy]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/japan-consumer-credit-operator-comparison-matrix]]
- [[payments/cashless-jp-landscape]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[JapanFG/rakuten-edy]]
- [[JapanFG/seven-card-service]]
- [[JapanFG/aeon-financial-service]]
- [[JapanFG/seven-bank]]
- [[JapanFG/aeon-bank]]
- [[JapanFG/legal-financial-licenses/payment-license-stack]]
- [[loyalty/japan-points-landscape]]
- [[retail/seven-and-i-hd]]
- [[retail/aeon-group]]
- [[INDEX|FinWiki index]]

## Sources

- FSA prepaid policy portal: https://www.fsa.go.jp/policy/prepaid/
- FSA 全国の前払式支払手段発行者一覧 (registered prepaid issuers): https://www.fsa.go.jp/menkyo/menkyoj/zenshikoukinrishou.pdf
- FSA 第三者型前払式支払手段発行者登録一覧: https://www.fsa.go.jp/menkyo/menkyoj/zendaisanshakogata.pdf
- Rakuten Group corporate site: https://corp.rakuten.co.jp/
- Seven & i Holdings corporate site: https://www.7andi.com/
- AEON Group corporate site: https://www.aeon.info/
- JR East corporate site: https://www.jreast.co.jp/
- PASMO Co. corporate site: https://www.pasmo.co.jp/
- JR West corporate site (JR Odekake): https://www.jr-odekake.net/
- JR Hokkaido corporate site: https://www.jrhokkaido.co.jp/
- JR Central corporate site: https://jr-central.co.jp/
- Meitetsu corporate site: https://www.meitetsu.co.jp/
- Nishitetsu (Nishi-Nippon Railroad) corporate site: https://www.nishitetsu.jp/
- JR Kyushu corporate site: https://www.jrkyushu.co.jp/
- Bank of Japan payment systems policy: https://www.boj.or.jp/
- Each operator's IR disclosure for prepaid float and unredeemed-balance: JR East, JR West, JR Central, JR Kyushu (TSE Prime listed); Rakuten Group, AEON Co. / AEON Financial Service, Seven & i HD (TSE Prime listed); private operators (PASMO Co., Nimoca Co., MIC, JR Hokkaido) per regulatory filings
