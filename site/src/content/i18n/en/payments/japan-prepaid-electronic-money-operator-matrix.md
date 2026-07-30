---
source: payments/japan-prepaid-electronic-money-operator-matrix
source_hash: e8bcc34cdfb0018c
lang: en
status: machine
fidelity: ok
title: "Japan prepaid electronic money operator matrix"
translated_at: 2026-07-30T00:00:00+09:00
---
# Japan prepaid electronic money operator matrix

## TL;DR

Japan's prepaid electronic-money landscape is **not one industry** — it is at least three distinct stacks (retail-prepaid, transit-prepaid, and digital-wallet-prepaid) that look similar at checkout but sit on different **prepaid-license categories** under the Payment Services Act (資金決済法), different **technology bases** (FeliCa vs MIFARE vs purely digital), and different **group corporate structures** (retail-FG, transit-rail-FG, e-commerce-FG). A reader who flattens Edy, nanaco, WAON, Suica, PASMO, ICOCA, Kitaca, TOICA, manaca, nimoca, and SUGOCA into one bucket will misread refund policy, mobile-integration depth, merchant-network economics, and the legal entity carrying each prepaid liability. This entry is the side-by-side comparison surface that the rest of the [[payments/INDEX|payments index]] points to when the question is **which prepaid e-money operator a specific brand actually belongs to** before any merchant-side or consumer-side analysis. Compare with [[payments/japan-consumer-credit-operator-comparison-matrix|JP consumer credit operator matrix]] for the post-paid / credit side.

## Wiki route

This sits under [[payments/INDEX|payments index]] as the cross-category prepaid e-money reference. Read it with [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid payment instrument issuers JP index]] for the per-issuer registry source, [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] for the regulatory boundary that determines which license each operator holds, [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]] for the transit-side deep dive, [[payments/waon-nanaco-retail-prepaid-comparison|WAON vs nanaco retail prepaid comparison]] for the retail-side deep dive, [[payments/famipay-valucreate-strategy|FamiPay ValuCreate strategy]] for the convenience-store-FG prepaid lane, [[payments/japan-payment-scheme-economics-matrix|JP payment scheme economics matrix]] for the cross-scheme economics, and [[payments/japan-code-payment-competitive-map|JP code-payment competitive map]] for the QR / code-payment overlay where these prepaid brands sometimes ride on top. Group entity anchors are [[payment-firms/rakuten-edy|Rakuten Edy]], [[card-issuers/seven-card-service|Seven Card Service]] (nanaco operator), and [[card-issuers/aeon-financial-service|AEON Financial Service]] (WAON operator), with broader group surfaces at [[loyalty/japan-points-landscape|JP points landscape]], [[retail/seven-and-i-hd|Seven & i HD]], and [[retail/aeon-group|AEON Group]].

## Why this matrix matters

Per-issuer differences materially affect (a) the **prepaid-balance float economics** and statutory protection obligation, (b) the **merchant-side acceptance economics**, (c) the **mobile integration depth**, (d) the **refund / consumer-protection regime**, and (e) the **documented issuer-liability and cash / charge rails**. A group bank's ATM or account-charge role must not be described as a legal or financial backstop unless a public source expressly establishes that commitment.

The matrix below lays out those dimensions so a reader can distinguish JR East as the Suica issuer, Seven Card Service as the nanaco issuer with Seven Bank ATM charging, and Rakuten Edy as the registered Edy issuer inside the Rakuten group — three structurally distinct profiles that share the FeliCa-tap UX.

## Per-issuer profiles
### Edy — Rakuten Edy (Rakuten Group 4755)

**Operator**: [[payment-firms/rakuten-edy|Rakuten Edy Co., Ltd.]], a wholly owned Rakuten Payment subsidiary. **License**: Payment Services Act 第三者型前払式支払手段発行者 (corporate number 3010901038102; Kanto No. 00692; registered 2016-07-21). **Technology**: FeliCa. **Brand launch**: the predecessor began full Edy service in 2001-11; the current company took over operations in 2016-10. **Distribution / mobile**: physical or embedded Edy and compatible Android Osaifu-Keitai / Google Wallet devices; the official FAQ states that iPhone is not supported. **Refund policy**: cash refunds are generally unavailable. **Documented group link**: Rakuten Payment ownership and Rakuten Points / Rakuten Card integration; no public source reviewed here establishes Rakuten Bank as a float backstop. ^[Rakuten Edy company profile: https://edy.rakuten.co.jp/company/company.html; service information: https://edy.rakuten.co.jp/terms/info.html; supported-device FAQ: https://support.rakuten-edy.co.jp/faq/show/1179; FSA registry: https://www.fsa.go.jp/menkyo/menkyoj/daisan.pdf]

### nanaco — Seven Card Service (Seven & i HD 3382)

**Operator**: [[card-issuers/seven-card-service|Seven Card Service Co., Ltd.]] inside [[retail/seven-and-i-hd|Seven & i HD]]. **License**: Payment Services Act 第三者型前払式支払手段発行者. **Technology**: FeliCa (card, Android nanaco mobile, and Apple Pay nanaco). **Launch**: 2007-04. **Mobile integration**: Apple Pay support began on **2021-10-21**, not 2019. **Refund policy**: money charged to nanaco cannot be returned as cash under the normal service. **Documented group link**: Seven Bank ATMs support cash charging and balance receipt, which is a charge rail rather than evidence of a balance-sheet backstop. ^[Seven & i Apple Pay launch release: https://www.7andi.com/company/news/release/20489.html; nanaco cash-charge guidance: https://www.nanaco-net.jp/how-to/charge/cash.html]

### WAON — AEON Group (AEON 8267 / AEON Financial Service 8570)
**Brand / issuers**: AEON Co. manages the WAON brand, while the issuing entity varies by card; the FSA registry includes AEON Retail Co., Ltd. as a third-party prepaid issuer (Kanto No. 00087). **Technology**: FeliCa, with physical cards, Android Mobile WAON, and Apple Pay WAON. **Launch**: 2007-04. **Mobile integration**: Apple Pay support began on **2021-10-21**, not May 2021. **Refund policy**: charged value is generally not refundable except where the terms or law provide otherwise. **Documented group link**: AEON Card / bank-account auto-charge and AEON Bank ATM charging are funding rails; they do not establish a joint legal backstop for every WAON issuer. ^[FSA third-party prepaid registry: https://www.fsa.go.jp/menkyo/menkyoj/daisan.pdf; AEON Apple Pay release: https://www.aeon.info/news/release_33536/; WAON terms: https://www.waon.net/stipulation/49000/]

### Suica — JR East (East Japan Railway 9020)

**Operator**: East Japan Railway Company (JR East, TSE Prime 9020) — Suica is **operated by JR East directly** (not by a separate subsidiary), which is structurally distinct from the retail-prepaid issuers above. **License**: Payment Services Act Compliance with the Copyright Act. **Technology**: FeliCa (Suica IC + Mobile Suica with the broadest Apple Pay/Google Pay/Mobile FeliCa support among transit cards). **Launch**: 2001-11 (initially as a transit-only fare-payment card; expanded to shopping payments 2004-03). **Distribution**: physical Suica card, Mobile Suica (Android), Apple Pay Suica (since 2016-10 — the headline iOS launch in Japan), Google Pay Suica. **Merchant network**: ~1.6M points (the broadest among prepaid e-money), including all interoperable and fully automated transit-card-accepting merchants. **Mobile integration**: deepest — Apple Pay Suica 2016-10 was a major iOS-in-JP launch event. **Refund policy**: well-established — Suica balance and 500 yen deposit refund at JR East 緑の窓口 (Midori-no-Madoguchi) ticket counter, plus require Suica lost-card reissuance with balance preservation. **Group bank backstop**: JR East does not run a bank; Suica sits on JR East's consolidated balance sheet under prepaid liability with Payment Services Act-mandated provisioning. **Group cross-link**: JRE POINT (JR East loyalty program) integration, Atre/NewDays/Beck's Coffee shop network, Ekinet (online ticket) integration, JR East Bank Card (partner Mizuho) co-brand. Suica is the **interoperability backbone** of the 10 major transit cards; see [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]].

### PASMO — PASMO Co. .
**Operator**: PASMO Co., Ltd. (joint-venture issuer owned by 25+, private railway and bus operators in the Tokyo Metropolitan Area, including Tokyu, Odakyu, Keio, Tobu, Seibu, Keisei, Tokyo Metro, Toei, and others). **License**: Payment Services Act Compliance with the Copyright Act. **Technology**: FeliCa (PASMO card + PASMO Mobile). **Launch**: 2007-03 (one month before Suica-PASMO launched its new product). **Distribution**: Physical PASMO Card, PASMO Mobile (Android, 2020-10), Apple Pay PASMO (Android, 2020-10 ). **Merchant network**: same interoperable public network as Suica (~1.6M points). **Mobile integration**: Apple Pay PASMO arrived in 2020-10, **4 years after Apple Pay Suica** — this layer reflects the joint-venture coordination cost of getting 25+ stakeholder operators aligned vs JR East as a single decision-maker. **Refund policy**: balance refund at issuing-railway ticket office (procedure varies by issuer-railway), specify PASMO reissuance with balance preservation. **Group bank backstop**: each member railway carries its proportionate share of float liability; no single bank backstop. **Group cross-link**: per-member-railway loyalty programs (Tokyu TOKYU POINT, Odakyu OdakyuPoints, Tokyo Metro To Me Card, etc.) — PASMO is the shared-rail technology but loyalty fragments are issued by issuing railways. See [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]].

### ICOCA — JR West (West Japan Railway 9021)

**Operator**: West Japan Railway Company (JR West, TSE Prime 9021), operated directly. **License**: Payment Services Act Compliance with the Copyright Act. **Technology**: FeliCa (ICOCA card + Mobile ICOCA). **Launch**: 2003-11. **Distribution**: physical ICOCA card, Mobile ICOCA (Android 2023-06), Apple Pay ICOCA (2023-06 — much later than Suica due to JR West technology-investment timing). **Merchant network**: same interoperable public network. **Mobile integration**: Apple Pay ICOCA 2023-06 (~7 years after Suica). **Refund Policy**: Balance refund at JR West ticket office, licensed ICOCA reissuance. **Group bank backstop**: JR West balance sheet (no group bank). **Group cross-link**: ICOCA POINT (loyalty) and J-WEST Card (partner SMBC). Refer to [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]].

### Kitaca — JR Hokkaido

**Operator**: Hokkaido Railway Company (JR Hokkaido), registered as a third-party prepaid issuer (Hokkaido No. 00134; registered 2008-12-25). **Technology / distribution**: the current Kitaca product pages describe physical Kitaca cards, nationwide mutual use, reissuance, and ticket-office refunds; they do not list a native Mobile Kitaca / Apple Pay / Google Pay product. **Forward plan**: JR Hokkaido and JR East announced that Mobile Suica commuter passes usable in the Kitaca area are planned from spring 2027 onward. The announcement does not attribute the absence of native Mobile Kitaca to JR Hokkaido's financial condition. ^[JR Hokkaido Kitaca: https://www.jrhokkaido.co.jp/kitaca/; JR Hokkaido / JR East mobile plan: https://www.jrhokkaido.co.jp/CM/Info/press/pdf/20250709_KO_KitacaSuica.pdf; FSA registry: https://www.fsa.go.jp/menkyo/menkyoj/daisan.pdf]

### TOICA — JR Central (Central Japan Railway 9022)
**Operator**: Central Japan Railway Company (JR Central, TSE Prime 9022), operated directly. **License**: Payment Services Act third-party prepaid payment instrument issuer. **Technology**: FeliCa (TOICA card; Mobile TOICA in pilot/limited as of 2026). **Launch**: 2006-11. **Distribution**: physical card, mobile pending. **Merchant network**: Nationwide interoperable. **Mobile**: limited / late vs Suica/PASMO — JR Central has historically prioritized shinkansen-fare integration (EX-IC, SmartEX) over Mobile TOICA. **Refund policy**: ticket-office refund. **Group bank backstop**: JR Central balance sheet. **Group cross-link**: JR Central Tower / JR Tokai-related retail, EX-IC integration for Tokaido Shinkansen reservations.

### manaca — Meitetsu / Nagoya Tetsudo

**Operator**: MIC, Meitetsu IC Card — joint-venture between Meitetsu (Nagoya Tetsudo) and Nagoya City Transportation Bureau. **License**: Payment Services Act third-party prepaid payment instrument issuer. **Technology**: FeliCa (manaca card; no broad mobile integration). **Launch**: 2011-02. **Distribution**: physical card. **Merchant network**: Nationwide interoperable. **Mobile integration**: limited. **Refund policy**: ticket-office refund. **Group bank backstop**: Meitetsu balance sheet + Nagoya City Transportation Bureau. **Group cross-link**: Meitetsu loyalty (Meitetsu MEMBERS), Nagoya City Transit Card legacy.

### nimoca — Nishitetsu / Nishi-Nippon Railroad

**Operator**: Nimoca Co., Ltd. — joint-venture controlled by Nishi-Nippon Railroad (Nishitetsu). **License**: Payment Services Act third-party prepaid payment instrument issuer. **Technology**: FeliCa (nimoca card). **Launch**: 2008-05. **Distribution**: physical card. **Merchant network**: Nationwide interoperable. **Mobile integration**: limited. **Refund policy**: ticket-office refund. **Group bank backstop**: Nishitetsu balance sheet. **Group cross-link**: nimoca Points, Nishitetsu bus / rail integration in the Fukuoka metropolitan area.

### SUGOCA — JR Kyushu (Kyushu Railway 9142)

**Operator**: Kyushu Railway Company (JR Kyushu, TSE Prime 9142), operated directly. **License**: Payment Services Act third-party prepaid payment instrument issuer. **Technology**: FeliCa (SUGOCA card). **Launch**: 2009-03. **Distribution**: physical card. **Merchant network**: Nationwide mutual use interoperable. **Mobile integration**: limited as of 2026 (JR Kyushu shinkansen integration via separate EX-IC route). **Refund policy**: ticket-office refund. **Group bank backstop**: JR Kyushu balance sheet. **Group cross-link**: JR Kyushu retail and travel loyalty.

## Big comparison matrix table

The following table is scoped to public primary sources (fsa.go.jp, edy.rakuten.co.jp, support.rakuten-edy.co.jp). It restates licence / structure / product boundaries from those materials and does not invent market share, ranking, or unstated numerical claims. ^[source:fsa.go.jp; edy.rakuten.co.jp; support.rakuten-edy.co.jp; 7andi.com]

| Brand | Operator | Parent group | License (Payment Services Act) | Technology | Launch | Merchant network (approx) | Mobile / Apple Pay status | Refund policy | Documented cash / liability link | Group cross-link | Stack tier |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Edy** | [[payment-firms/rakuten-edy\|Rakuten Edy]] | Rakuten Payment / Rakuten Group | Third-party prepaid | FeliCa (Mobile FeliCa) | 2001-11 brand / 2016-10 current operator | Official current count not used here | Android Osaifu-Keitai / Google Wallet; iPhone unsupported | Generally unavailable | Rakuten Edy issuer liability; Rakuten Card charge integration | Rakuten Points | retail / e-commerce |
| **nanaco** | [[card-issuers/seven-card-service\|Seven Card Service]] | [[retail/seven-and-i-hd\|Seven & i HD]] (3382) | Third-party prepaid | FeliCa (Mobile FeliCa) | 2007-04 | Official current count not used here | Apple Pay since 2021-10-21 | Charged value not cash-refundable | Seven Card Service issuer liability; Seven Bank ATM charge rail | nanaco Points + 7&i Group | retail (CVS-focused) |
| **WAON** | Issuer varies by card; AEON Retail is registered | [[retail/aeon-group\|AEON Group]] (8267) | Third-party prepaid | FeliCa (Mobile FeliCa) | 2007-04 | Official current count not used here | Apple Pay since 2021-10-21 | Generally unavailable | Liability follows issuer; AEON Bank ATM/account charge rail | WAON POINT + AEON Card auto-charge | retail (mall-focused) |
| **Suica** | JR East (operated directly) | JR East (9020) | Empty snowmobile | FeliCa (Mobile FeliCa) | 2001-11 | ~1.6M | 2016-10 | Background (well-established) | JR East balance sheet (no group bank) | JRE POINT + ekinet + Atre | transit (Tokyo-East JP) |
| **PASMO** | PASMO Co. (JV of 25+ railways) | metropolitan private railways | Empty snowmobile | FeliCa (Mobile FeliCa) | 2007-03 | ~1.6M (Exploitation) | 2020-10 | Per-issuer railway office | Member-railway balance sheets | Per-railway loyalty (TOKYU POINT, etc.) | transit (Tokyo Metro Private Rail) |
| **ICOCA** | JR West (operated direct) | JR West (9021) | Empty snowmobile | FeliCa (Mobile FeliCa) | 2003-11 | ~1.6M (Exploitation) | 2023-06 | JR West Ticket Office | JR West Balance Sheet | ICOCA POINT + J-WEST Card (SMBC partner) | transit (Kansai) |
| **Kitaca** | JR Hokkaido (operated directly) | JR Hokkaido (special company) | Third-party prepaid | FeliCa | 2008-10 | Nationwide mutual use | No native mobile product listed; Mobile Suica passes planned from spring 2027 | JR Hokkaido ticket office | JR Hokkaido issuer liability | Nationwide mutual use | transit (Hokkaido) |
| **TOICA** | JR Central (directly operated) | JR Central (9022) | Empty snowmobile | FeliCa | 2006-11 | Removal Building | limited / late | JR Central Ticket Office | JR Central Balance Sheet | EX-IC shinkansen integration | transit (Tokai) |
| **manaca** | Mirror (MIC) | Meitetsu + Nagoya City | Empty snowmobile | FeliCa | 2011-02 | Removal Building | limited | Per-operator office | Meitetsu + City Bureau | Meitetsu MEMBERS | transit (Nagoya) |
| **nimoca** | ニモカ社 | Nishitetsu (Nishi-Nippon Railroad) | Empty snowmobile | FeliCa | 2008-05 | Removal Building | limited | Per-operator office | Nishitetsu balance sheet | Nimoca Points + Nishitetsu Integration | transit (Fukuoka) |
| **SUGOCA** | JR Kyushu (operated directly) | JR Kyushu (9142) | Empty snowmobile | FeliCa | 2009-03 | Details of the | limited | JR Kyushu Ticket Office | JR Kyushu Balance Sheet | JR Kyushu Travel/Retail | transit (Kyushu) |

## Cross-axis: retail-FG vs. transit-rail-FG vs. e-commerce-FG

The matrix above lists 11 brands but they collapse into **three operator categories** that determine cross-link economics, refund procedure complexity, and issuer-liability / charging posture:

### Retail-FG prepaid (issued by retail-group financial subsidiary)

- **nanaco** — issued by Seven Card Service inside Seven & in HD
- **WAON** — issued by AEON Financial Services within AEON Group
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

**Defining characteristics**: prepaid issued as an extension of fare-collection infrastructure, well-established refund procedure (railway ticket-office networks handle refund and reissuance), and the 全国相互利用 backbone connecting 10 major brands into one acceptance network. Mobile timing differs by operator: Suica launched first, ICOCA followed in 2023, while current Kitaca pages list no native mobile product and Mobile Suica commuter-pass support in the Kitaca area is planned from spring 2027. The transit issuer or participating railway carries the relevant prepaid liability. See [[payments/japan-transit-prepaid-suica-pasmo-icoca-economics|JP transit prepaid Suica/PASMO/ICOCA economics]] for the transit-side deep dive.

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
- **Apple Pay chronology** — The verified launch sequence for the brands corrected in this review is Suica (2016-10), PASMO (2020-10), nanaco and WAON (both 2021-10-21), and ICOCA (2023-06). Rakuten Edy's current official support page lists compatible Android Osaifu-Keitai devices and states that iPhone is not supported.
- **nanaco's Seven Bank ATM charge rail** — Seven Bank ATMs support nanaco cash charging and balance receipt. This is an on-ramp / charge function, not a cash refund channel and not evidence of a balance-sheet backstop.
- **WAON 自動チャージ (auto-recharge) integration** — WAON's auto-recharge linked to AEON Card is the dominant UX for AEON-shoppers and is one of the most-cited reasons AEON Card holders maintain the card relationship. This is a structural cross-link that pure-prepaid brands without an in-group credit-card issuer cannot replicate.
- **Rakuten Edy's e-commerce-FG positioning** — Edy is the only prepaid e-money in the matrix where the parent FG is an **e-commerce / internet conglomerate** rather than a retail-FG or transit-rail-FG. Rakuten Edy's role inside the Rakuten ecosystem is partly to provide a physical-store touchpoint complementing Rakuten Pay (the QR / code payment) and Rakuten Card (the credit card) — see [[payments/japan-code-payment-competitive-map|JP code-payment competitive map]].
- **Kitaca's current mobile boundary** — JR Hokkaido's current product pages list no native Mobile Kitaca / Apple Pay / Google Pay product. A joint JR Hokkaido / JR East announcement plans Mobile Suica commuter passes usable in the Kitaca area from spring 2027 onward; it does not state a financial-condition rationale.
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

## Issuer liability and documented cash / charge rails

The comparison separates the entity legally responsible for the prepaid instrument from a bank, ATM, or card used to charge it:

- **Edy** — Rakuten Edy is the registered issuer; Rakuten Card and other supported methods provide charge routes. The reviewed public sources do not establish Rakuten Bank as a float backstop.
- **nanaco** — Seven Card Service is the operator; Seven Bank ATMs provide cash charging and balance receipt. Charged value is not normally cash-refundable.
- **WAON** — the issuer varies by card; AEON Bank ATMs, bank-account charge, and AEON Card auto-charge are funding routes, not proof of a joint guarantee for every issuer.
- **Transit cards** — the relevant railway issuer or participating operator carries the prepaid liability and administers the published refund / reissuance process.

This distinction prevents an operational charging relationship from being overstated as a guarantee or balance-sheet commitment.

## Regulatory deposit obligation under the Payment Services Act

All 11 brands in the matrix are registered as **第三者型前払式支払手段発行者** (third-party-type prepaid issuer) under the Payment Services Act (資金決済法), which imposes:
- **issuance guarantee deposit** — at each half-year cutoff (3-31 and 9-30), the issuer must deposit at the closest Legal Affairs Bureau at least 50% of the half-year-end unredeemed-balance, in cash, government bonds, or bank guarantee. The deposit serves as user-protection in the event of issuer insolvency
- **business report** — annual filing to FSA with prepaid balance, transaction volume, refund metrics
- **complaint handling** — designated complaint-processing organization (ADR) membership required
- **Merchant management** — for third-party issuers (vs single-merchant prepaid), the issuer carries obligation to manage participating merchant relationships
- **Business-improvement orders** — FSA can issue business-improvement orders if compliance issues arise

The third-party vs. home-based distinction is structural: third-party is the "general-purpose accepted at many merchants" model (all 11 brands in this matrix), while home-based is the "accepted only at the issuer's own stores" model (e.g., department-store prepaid cards used only at that department store). The home-based regime has lighter regulatory load. The boundary check is whether the prepaid is accepted at "third-party" merchants outside the issuer's group — see [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] for the boundary detail.

## Comparison vs the funds-transfer regime

A reader new to JP payments often confuses **prepaid e-money** with **funds-transfer** — they share the wallet-balance UX but sit under different licenses with materially different rules:

The following table is scoped to public primary sources (fsa.go.jp, edy.rakuten.co.jp, support.rakuten-edy.co.jp). It restates licence / structure / product boundaries from those materials and does not invent market share, ranking, or unstated numerical claims. ^[source:fsa.go.jp; edy.rakuten.co.jp; support.rakuten-edy.co.jp; 7andi.com]

| Dimension | Prepaid Third-party advance payment | Funds-transfer Funds transfer business |
|---|---|---|
| Balance refundability to cash | Product-specific and restricted; Edy / nanaco / WAON generally do not cash-refund charged value, while transit products publish separate refund procedures | Yes — operator must enable withdrawal where the licensed service provides a withdrawable balance |
| Inter-user transfer (送金) | Generally not allowed under the prepaid regime | Yes — the defining capability of 資金移動業 |
| Per-transaction limit | None specified by license (varies by issuer policy) | Tiered by license type (Type 1 / 2 / 3) with caps |
| User-fund protection | 発行保証金 50% deposit | Full segregation + trust or guarantee |
| Examples | Suica, WAON, nanaco, Edy, PASMO, ICOCA, etc. | Merpay, PayPay, Rakuten Pay (where it supports user-to-user transfer), LINE Pay, Kyash |

The line is increasingly blurred — products like PayPay and Merpay run **multiple license stacks simultaneously** (prepaid for the basic wallet, 資金移動業 for transfer functionality, with the appropriate license activated per feature). Some prepaid-branded products are quietly migrating to 資金移動業 underpinning to enable transfer features. See [[payments/funds-transfer-service-providers-japan-index|funds-transfer service providers JP index]] for the funds-transfer side.

## Mobile FeliCa ecosystem evolution

The Mobile FeliCa rollout pattern shaped which prepaid brands dominated mobile-first usage. The dated rows below distinguish official native-product launches from adjacent wallet and commuter-pass routes. ^[Apple Japan Suica announcement: https://www.apple.com/jp/newsroom/2016/09/apple-pay-coming-to-japan-with-iphone-7/; Rakuten Edy Google Wallet guide: https://edy.rakuten.co.jp/howto/google/pay/; PASMO corporate history: https://www.pasmo.co.jp/corporate/history/; Seven & i nanaco Apple Pay release: https://www.7andi.com/company/news/release/20489.html; AEON WAON Apple Pay release: https://www.aeon.info/news/release_33536/; JR West ICOCA release: https://www.westjr.co.jp/press/article/2023/06/page_22773.html; JR Hokkaido / JR East mobile plan: https://www.jrhokkaido.co.jp/CM/Info/press/pdf/20250709_KO_KitacaSuica.pdf]

| Year | Event | Impact |
|---|---|---|
| 2001 | Suica physical-card launch | Sets FeliCa-on-transit precedent |
| 2004 | Mobile FeliCa launch by NTT DoCoMo / FeliCa Networks | Locks JP mobile-payment to FeliCa standard |
| 2006-01 | Mobile Suica Android (FOMA Osaifu-Keitai) | First mobile transit-prepaid |
| 2007-04 | nanaco + WAON launch | Retail-prepaid FeliCa adoption |
| 2010-01 | bitWallet joins the Rakuten group | E-commerce-FG enters prepaid |
| 2016-10 | Apple Pay JP launches with Suica | iPhone enters JP transit-prepaid |
| 2018 | Edy supports the Google Pay / later Google Wallet route on compatible Android devices | Android wallet access expands |
| 2020-10 | Apple Pay + Mobile PASMO launch (simultaneous) | Tokyo private-rail enters mobile |
| 2021-10-21 | Apple Pay support starts for nanaco and WAON | Major retail-prepaid brands enter iPhone |
| 2023-06 | Apple Pay adds ICOCA + Mobile ICOCA | Kansai catches up after 7-year lag |
| From spring 2027 (planned) | Mobile Suica commuter passes become usable in the Kitaca area | Digital commuter-pass route without a native Mobile Kitaca product |

The verified chronology distinguishes native products from adjacent wallet routes: Edy remains Android-focused, nanaco and WAON entered Apple Pay together on 2021-10-21, and JR Hokkaido's announced 2027 route uses Mobile Suica commuter passes rather than a native Mobile Kitaca product.

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
- [[payment-firms/rakuten-edy]]
- [[card-issuers/seven-card-service]]
- [[card-issuers/aeon-financial-service]]
- [[regional-banks/seven-bank]]
- [[card-issuers/aeon-bank]]
- [[financial-licenses/payment-license-stack]]
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
