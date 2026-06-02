---
title: "Japan consumer-credit operator comparison matrix"
aliases:
  - "payments/japan-consumer-credit-operator-comparison-matrix"
  - "japan-consumer-credit-operator-comparison-matrix"
  - "Japan consumer credit operator categories"
  - "card vs shoko-loan vs shinpan vs BNPL vs auto-captive Japan"
  - "日本消費者信用オペレーター比較マトリクス"
  - "JapanFG/yamada-financial-services"
  - "finance/japan-consumer-credit-and-leasing-finance-landscape"
domain: payments
created: 2026-05-24
last_updated: 2026-05-24
last_tended: 2026-05-24
review_by: 2026-11-20
confidence: likely
tags: [payments, consumer-credit, installment-sales-act, money-lending-act, BNPL, auto-finance, housing-loan, education-loan, microcredit, regulation, Japan]
status: active
sources:
  - "https://www.meti.go.jp/policy/economy/consumer/credit/"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/index.html"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/tourokukobetsuichiran.pdf"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/11kappuhanbaihou.html"
  - "https://www.fsa.go.jp/menkyo/kashikin/"
  - "https://www.fsa.go.jp/menkyo/menkyo.html"
  - "https://www.fsa.go.jp/policy/prepaid/"
  - "https://www.jicc.co.jp/"
  - "https://www.cic.co.jp/"
  - "https://www.j-credit.or.jp/customer/sales_law/"
  - "https://www.jhf.go.jp/"
  - "https://www.jfc.go.jp/"
  - "https://www.caa.go.jp/policies/policy/consumer_policy/caution/internet/trouble/payment.html"
---

# Japan consumer-credit operator comparison matrix

## TL;DR

"Consumer credit" in Japan is not one industry — it is at least **nine operator categories** that look similar at checkout but sit on different licenses, different regulators, different lending caps, different interest-rate ceilings, and different consumer-protection regimes. A reader who flattens カードローン, 信販, 消費者金融, BNPL, auto-captive, 住宅ローン, 教育ローン, microcredit, and PSP-embedded credit into one bucket will misread merger pressure, regulatory exposure, ABS pipeline, and bank-adjacency. This page is the side-by-side comparison surface that the rest of the [[payments/INDEX|payments index]] points to when the question is **which consumer-credit category an operator actually belongs to** before any company-level analysis.

## Wiki route

This sits under [[payments/INDEX|payments index]] as the cross-category consumer-credit reference. Read it with [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] for the BNPL / 信販 line, [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]] for the card-side role separation, [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] for the cross-scheme comparison this entry deliberately complements, [[payments/credit-purchase-card-operators-japan-index|credit-purchase / card operator registry]] for the METI registry row-level source, [[JapanFG/legal-financial-licenses/payment-license-stack|Japan payment license stack]] for the regulatory category mapping, and [[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency]] for the policy-finance side of housing-loan adjacency. Entity anchors for examples are [[JapanFG/acom|ACOM]], [[JapanFG/aiful|AIFUL]], [[JapanFG/smbc-consumer-finance|SMBC Consumer Finance]], [[JapanFG/aplus|APLUS]], [[JapanFG/jaccs|JACCS]], and [[JapanFG/orico|Orico]].

## Nine operator categories

The reason FinWiki keeps nine categories (rather than the conventional three of "card / shoko-loan / shinpan") is that BNPL, auto-captive, housing-loan adjacent, education-loan, microcredit, and PSP-embedded credit have **different license routes, different regulators, and different consumer-protection regimes** even when the consumer-visible product looks like a single "credit" experience.

| # | Category | Japanese | Primary statute | Primary regulator |
|---|---|---|---|---|
| 1 | Card issuer | クレジットカード会社 / 包括信用購入あっせん業者 | Installment Sales Act (割賦販売法) | METI (経産省) |
| 2 | Consumer finance / shoko-loan | 消費者金融 / 貸金業者 | Money-Lending Business Act (貸金業法) | FSA (金融庁) |
| 3 | Installment credit / shinpan | 信販会社 / 個別信用購入あっせん業者 | Installment Sales Act (割賦販売法) | METI (経産省) |
| 4 | BNPL pure-play | BNPL / 後払い | Installment Sales Act (selective; exemption thresholds apply) | METI primarily; FSA where wallet/funds-transfer overlap |
| 5 | Auto finance / auto-captive | 自動車ローン / オートクレジット | Installment Sales Act (個別 / 包括) + Money-Lending Act where unsecured | METI primarily; FSA for any 貸金業 portion |
| 6 | Housing-loan adjacent (JHF route) | 住宅ローン直接型 / フラット 35 | JHF Act (独立行政法人住宅金融支援機構法) + Banking Act | MLIT (国交省) + MOF + bank-side FSA |
| 7 | Education loan | 教育ローン | Banking Act (民間) + JFC Act (公的) | FSA (民間) + MOF (公的・JFC) |
| 8 | Microcredit | マイクロクレジット | Money-Lending Act (often) or social-finance route | FSA where 貸金業; MHLW for some social-credit channels |
| 9 | PSP-adjacent credit (embedded EC credit) | PSP 内蔵後払い / EC 埋込型クレジット | Installment Sales Act + Funds-Transfer/Prepaid where wallet-linked | METI + FSA (boundary case) |

Each row is an independent license stack. An operator that holds more than one is **not** automatically a holding company — it is more often a multi-licensed sales-finance / consumer-credit operator (e.g., [[JapanFG/orico|Orico]] holds 包括信用購入あっせん, 個別信用購入あっせん, and 貸金業 simultaneously; [[JapanFG/aiful|AIFUL]] holds 貸金業 + 包括信用購入あっせん through Life Card; [[JapanFG/jaccs|JACCS]] holds all three plus 包括信用購入あっせん + 個別信用購入あっせん).

## Comparison matrix — full

| Dimension | Card issuer | Consumer finance | Installment credit (shinpan) | BNPL pure-play | Auto-captive | Housing-loan (JHF) | Education loan | Microcredit | PSP-adjacent credit |
|---|---|---|---|---|---|---|---|---|---|
| **License** | Installment Sales Act (包括信用購入あっせん) | Money-Lending Business Act (貸金業) | Installment Sales Act (個別信用購入あっせん + often 包括) | Installment Sales Act (Type II ≤ 2 mo + 個別 exemption thresholds) | Installment Sales Act (個別 / 包括 mostly) + Money-Lending Act sometimes | JHF Act + Banking Act (private side) | Banking Act + JFC Act (public side) | Money-Lending Act usually | Installment Sales Act + Payment Services Act (mixed) |
| **Regulator** | METI | FSA | METI | METI (+ FSA where wallet-linked) | METI primarily | MLIT + MOF + bank-side FSA | FSA + MOF | FSA primarily | METI + FSA boundary |
| **Registration registry** | METI 登録包括信用購入あっせん業者 list (241 as of 2026-04 month-end) | FSA 貸金業者登録 list | METI 登録個別信用購入あっせん業者 list (138 as of 2026-04 month-end) | Mixed — METI Type II / 個別 exemption + FSA Type II / III funds-transfer | METI 個別/包括 lists | JHF participating financial institution list (private) + JHF direct | Bank product disclosure + JFC product disclosure | FSA 貸金業者登録 + JICC / CIC | METI 登録 + FSA 資金移動業 + 第三者型前払 |
| **総量規制 (lending cap)** | Yes for cash-advance (キャッシング) portion; revolving shopping uses different rule | Yes — 1/3 of annual income hard cap | No (Installment Sales Act has 支払可能見込額調査 instead of 総量規制) | Effectively no for ≤ 2 mo deferred-payment; full 個別信用購入あっせん rules where registered | No (Installment Sales Act path) | No — secured + policy-finance carve-out | No for 民間 (bank product); no for JFC public loan | Yes (1/3 cap applies) | Depends on which license actually books the receivable |
| **上限金利 (interest rate cap)** | 利息制限法 15-20% (cash-advance); Installment Sales Act 実質年率 for shopping | 利息制限法 15-20% + 出資法 20% criminal cap | 利息制限法 + Installment Sales Act 実質年率 disclosure | Generally 0% to consumer (merchant pays MDR-equivalent); late-fee model | Installment Sales Act 実質年率 | 民間 housing-loan: bank market rate; フラット 35 fixed | Bank loan: market rate; JFC: low fixed | 利息制限法 + 出資法 20% | Mixed — depends on booking license |
| **KYC / AML obligations** | 犯罪収益移転防止法 (犯収法) full obligation | 犯収法 + 貸金業法 KYC strict | 犯収法 + Installment Sales Act 加盟店調査 | 犯収法 light for small-ticket; full where over threshold | 犯収法 + dealership KYC | 犯収法 + bank-side full KYC | 犯収法 + bank-side full KYC | 犯収法 + 貸金業 KYC | 犯収法 + wallet / 資金移動業 KYC where applicable |
| **Disclosure obligation** | Installment Sales Act 実質年率, 加盟店表示, security guideline (J-CSC) | 貸金業法 13 条 書面交付, 17 条 契約書面 | Installment Sales Act 実質年率, 加盟店表示, 個別 contract | METI 後払い FAQ guidance + 消費者契約法 | Installment Sales Act 実質年率 + dealership disclosure | 重要事項説明書 + bank-side disclosure | Bank-side disclosure + JFC product disclosure | 貸金業法 13/17 条 | METI + 消費者契約法 + wallet T&C |
| **Default-rate disclosure** | Issuer IR (annual 貸倒率 by segment) | 有報 + JFSA aggregate stats | Shinpan IR (segment-level 信用コスト率) | Limited — 後払い operator IR if listed (e.g., Paidy via PayPal disclosure) | OEM finance arm IR (e.g., Toyota Finance disclosure embedded in OEM consolidated report) | JHF annual report + bank-side 貸倒率 | Bank IR + JFC annual report | 貸金業 IR if listed; otherwise JFSA aggregate | Limited; mostly inside parent PSP IR |
| **Liability / bad-debt provisioning** | IFRS 9 / J-GAAP 引当金 + Installment Sales Act 加盟店リスク負担 | IFRS 9 / J-GAAP 引当金, 過払金引当 legacy | IFRS 9 / J-GAAP 引当金 + 加盟店求償 | Merchant + operator co-share typically | OEM-guaranteed or dealer-recourse model common | Bank 引当金 + JHF 信用補完 for フラット 35 buy-back | Bank 引当金 + JFC fiscal backing | 貸金業 引当金 + 過払金 risk lingering | Mixed by booking license |
| **Reporting registry route** | METI 登録包括信用購入あっせん業者 PDF list | FSA 貸金業者登録 list (中央 + 都道府県) | METI 登録個別信用購入あっせん業者 PDF list | METI 登録 (where applicable) + 後払い行政処分状況 page | METI 個別/包括 lists | JHF 取扱金融機関一覧 + JHF 直接 | Bank loan products in 全銀協 disclosure; JFC product page | FSA 貸金業者登録 list | METI + FSA cross-registry |
| **Recent regulatory pressure** | 改正割賦販売法 (2018, 2020, 2024 BNPL clarification); J-CSC guideline 6.0/6.1 (EMV 3-DS mandatory 2025-03 for EC) | 改正貸金業法 (2010-06 full enforcement: 20% cap + 1/3 总量規制); 過払金 wind-down | 改正割賦販売法 (2018 加盟店調査強化); 2020 amendment for 認定包括/少額包括 | 2024 BNPL clarification under Installment Sales Act amendment; CAA / 消費者庁 warnings on cash-conversion abuse | EV / KINTO subscription transition pressure; OEM captive consolidation discussion | フラット 35 不正利用問題 (2019-) + JHF investor base shift | None major; education-loan demand pressure as tuition rises | Limited national framework; 社会的金融 discussions ongoing | METI + FSA boundary clarification on embedded checkout credit |
| **Securitization / ABS pipeline** | Heavy — credit-card receivables ABS (V-RACE, S-RACE, Rakuten Card ABS routine issuance) | Heavy — consumer-loan ABS routine for ACOM / SMBCCF / AIFUL | Heavy — auto-loan ABS (オート / shopping-credit ABS routine) | Emerging — Paidy receivables securitization route under PayPal | Heavy — Toyota Finance / Honda Finance / Nissan Financial auto ABS routine | Heavy — フラット 35 MBS routine issuance by JHF (機構 MBS, Japan's largest MBS issuer) | Limited — bank-loan portfolio rarely securitized for education-only pool | Minimal | Minimal |
| **Bank-adjacency** | Megabank-FG aligned: [[JapanFG/smbc-card\|SMBC Card]] (SMFG), [[JapanFG/mufg-nicos\|MUFG NICOS]] (MUFG), [[JapanFG/jcb\|JCB]] (multi-bank), [[JapanFG/rakuten-card\|Rakuten Card]] (Rakuten FG), [[JapanFG/paypay-card\|PayPay Card]] (PayPay FG) | Mixed: [[JapanFG/smbc-consumer-finance\|SMBC Consumer Finance / Promise]] (SMFG 100%), [[JapanFG/acom\|ACOM]] (MUFG 39.6% equity-method), [[JapanFG/aiful\|AIFUL]] (independent) | Bank-FG aligned: [[JapanFG/jaccs\|JACCS]] (MUFG equity-method), [[JapanFG/orico\|Orico]] (Mizuho + Itochu), [[JapanFG/aplus\|APLUS]] (SBI Shinsei), Credit Saison (independent / Mizuho-adjacent) | Mostly non-bank: Paidy (PayPal), Atone (Net Protections), NP後払い (Net Protections) — but bank-FG card issuers also extend BNPL-like products | OEM-captive: Toyota Finance (Toyota), Honda Finance, Nissan Financial Services — non-bank captive, sometimes bank-partnered | Bank-fronted (民間): all megabanks + 地銀; JHF is policy-finance non-bank | Bank-fronted (民間 education loan); JFC is policy-finance non-bank | Often non-bank social-finance + 貸金業 small ops | Bank-FG aligned if parent PSP is bank-adjacent |
| **Card brand acceptance dependency** | Direct — issuer carries Visa / Mastercard / JCB / Amex / Diners brand | None (cash loan, not card-brand-routed) | Mixed — many shinpan also issue branded cards (Orico Card, JACCS Card) | Generally none at point-of-checkout (operator-direct), though some BNPL extends a virtual brand-card | None at the loan-product level | None at the loan-product level | None | None | Depends — some PSP credit routes through brand card backend |

### 1. Card issuer (クレジットカード会社 / 包括信用購入あっせん業者)

Card issuers are **包括信用購入あっせん業者** under the Installment Sales Act, registered with METI (241 registrations as of 2026-04 month-end per the METI 登録包括信用購入あっせん業者 list). The card issuer is the entity that screens cardholders, sets credit limits, books the receivable, and runs fraud monitoring. Bank-FG anchors: [[JapanFG/smbc-card|SMBC Card]] (SMFG), [[JapanFG/mufg-nicos|MUFG NICOS]] (MUFG), [[JapanFG/jcb|JCB]] (multi-bank consortium). Non-bank-FG anchors: [[JapanFG/rakuten-card|Rakuten Card]] (Rakuten FG), [[JapanFG/paypay-card|PayPay Card]] (PayPay FG), [[JapanFG/aeon-financial-service|AEON Financial Service]] (AEON retail-FG).

Cash-advance (キャッシング) inside a card product crosses into the 貸金業 regime — that portion is subject to 総量規制 (1/3 of income cap) and the 利息制限法 20% interest cap, while the **shopping** portion is governed by the Installment Sales Act 支払可能見込額調査 rather than 総量規制. This dual-regime structure is unique to card issuers.

### 2. Consumer finance / shoko-loan (消費者金融 / 貸金業者)

Consumer finance operators are 貸金業者 under the Money-Lending Business Act (貸金業法), registered with FSA via 中央 (財務局) or 都道府県 routes. The current "3 大消費者金融" are [[JapanFG/acom|ACOM]] (MUFG equity-method 39.6%), [[JapanFG/smbc-consumer-finance|SMBC Consumer Finance / Promise]] (SMFG 100% subsidiary), and [[JapanFG/aiful|AIFUL]] (independent, founder-family controlled). After 武富士 collapsed via 会社更生 in 2010, the segment consolidated around these three.

The defining regulatory event is the **改正貸金業法** that fully enforced in 2010-06: 利息制限法 cap of 20% (15% / 18% / 20% tiered by principal size) replaced the old 出資法 29.2% gray-zone, and 総量規制 (1/3 of annual income hard cap) became binding. The 過払金 (overcharged-interest refund) wave that followed is responsible for the [[JapanFG/aiful|AIFUL]] 事業再生 ADR (2009-09), the MUFG TOB of [[JapanFG/acom|ACOM]] (2008-10), and the SMFG full-subsidiary-isation of Promise.

The bank-side workaround is **銀行カードローン** — bank-issued products are governed by the Banking Act and historically did not face 総量規制, which triggered an industry self-regulation discussion around "実質総量規制超過" lending. ACOM、Promise、AIFUL all run a 銀行保証 sideline that books revenue from guaranteeing bank-cardloan exposure.

### 3. Installment credit / shinpan (信販会社 / 個別信用購入あっせん業者)

Shinpan operators are **個別信用購入あっせん業者** under the Installment Sales Act (138 registrations as of 2026-04 month-end per METI 登録個別信用購入あっせん業者 list). The distinguishing feature is that the loan is tied to a specific purchase (個品割賦), often via a merchant agreement (加盟店) — auto-dealership ローン, リフォームローン, 教育ローン (private side), 楽器 / 家電 / 医療 / 住宅設備. Anchors: [[JapanFG/orico|Orico]] (Mizuho + Itochu, auto-loan #1), [[JapanFG/jaccs|JACCS]] (MUFG equity-method, auto/education/reform 3 lanes), [[JapanFG/aplus|APLUS]] (SBI Shinsei), Credit Saison (independent / Mizuho-adjacent, card-heavy).

Shinpan operators typically hold **multiple licenses** — they almost always combine 個別信用購入あっせん with 包括信用購入あっせん (for their issued cards), 貸金業 (for カードローン), 銀行保証 (for bank-cardloan guarantee), and often 集金代行 (for B2B 公共料金 / 継続課金 collection). The 2018 改正割賦販売法 strengthened 加盟店調査 obligation, which raised onboarding cost for marginal merchant relationships.

### 4. BNPL pure-play (BNPL / 後払い)

BNPL is the **most regulatory-ambiguous** category. Under the Installment Sales Act, deferred-payment of **≤ 2 months and single-payment** is generally not 包括信用購入あっせん, and individual deferred-payment under certain merchant-fronted models can avoid 個別信用購入あっせん registration via 加盟店表示 routes. The 2020 改正割賦販売法 (effective 2021-04) added an 認定包括信用購入あっせん業者 / 少額包括信用購入あっせん業者 framework explicitly to bring some BNPL operators under a lighter version of the 包括 regime; the 2024 BNPL clarification round continued tightening.

Anchor: [[JapanFG/paidy|Paidy]] (acquired by PayPal 2021-09 for ~ USD 2.7 bn), Atone / NP後払い (Net Protections). The [[payments/japan-bnpl-credit-purchase-boundary|BNPL boundary]] page walks through the per-product classification test. The Consumer Affairs Agency (消費者庁 / CAA) maintains an active warning channel on **cash-conversion abuse** of BNPL (現金化目的後払い) and on UX patterns that make deferred-payment feel cash-like — see CAA's payment-trouble caution page.

### 5. Auto finance / auto-captive (自動車ローン / オートクレジット)

Auto-finance has two structural shapes: (a) shinpan-fronted auto-loan (e.g., [[JapanFG/orico|Orico]] is the domestic #1 in auto-loan, [[JapanFG/jaccs|JACCS]] is #2-3) booked through dealership 加盟店 networks under the Installment Sales Act, and (b) **OEM auto-captive** — Toyota Finance (Toyota), Honda Finance, Nissan Financial Services, Mitsubishi UFJ Lease & Finance (now Mitsubishi HC Capital), etc. — that exists primarily to underwrite the parent OEM's vehicle sales.

OEM-captive booking is typically Installment Sales Act 個別 + 包括 (for the OEM-branded card if any) + 貸金業 in some cases. The OEM provides explicit or implicit credit support (residual-value guarantee for KINTO-style subscription), which reduces the captive's bad-debt provisioning need relative to a standalone shinpan auto-loan book. The auto-ABS market is the largest non-MBS Japanese consumer-loan ABS segment — Toyota Finance is the routine benchmark issuer. EV / KINTO subscription / car-sharing trends are the structural pressure on the dealership-credit channel that both shinpan-fronted and captive-fronted auto-loan share.

### 6. Housing-loan adjacent (住宅ローン直接型 / フラット 35)

Housing-loan is mostly the bank-FG world under the Banking Act, but the **policy-finance overlay** matters: [[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency (JHF / 住宅金融支援機構)]] runs **フラット 35** — long-term fixed-rate housing loans that originating banks sell to JHF, which packages them as 機構 MBS. JHF is Japan's largest MBS issuer.

Regulator: MLIT (国交省) is the primary supervisor for JHF (housing-policy side); MOF supervises the JHF Act financial side; the originating bank side is FSA-supervised under the Banking Act. The フラット 35 不正利用問題 (2019-) — investor-rental-property purchase misrepresented as owner-occupied — triggered a structural tightening of JHF's 取扱金融機関 due-diligence requirements. JHF is **not** an Installment Sales Act or Money-Lending Act operator; it is a 独立行政法人 policy-finance institution and sits outside the METI / FSA consumer-credit registries.

### 7. Education loan (教育ローン)

Education loan splits along the **public / private** line. The private side is offered by banks under the Banking Act (no Installment Sales Act registration, since it is a 民間ローン), often packaged as an unsecured 教育目的ローン product. The public side is operated by **国民金融公庫 / Japan Finance Corporation (JFC / 日本政策金融公庫)** under the JFC Act — JFC's 教育一般貸付 is the primary 公的 education loan, at fixed low rates relative to 民間 bank products. JFC is supervised by MOF (財務省).

Education-loan books are not routinely securitized as standalone education-loan ABS — bank-side exposure sits inside the broader unsecured-consumer-loan book. Shinpan operators (e.g., [[JapanFG/jaccs|JACCS]]) also offer 教育ローン through educational-institution 加盟店 channels under the Installment Sales Act 個別 route, which is the third routing path for education credit alongside bank-民間 and JFC-公的.

### 8. Microcredit (マイクロクレジット)

Japan does not have a developed national microcredit framework comparable to Bangladesh / India microfinance. Where microcredit-style small-ticket consumer credit exists in Japan, it is usually booked under the **Money-Lending Act** by small 貸金業者, which means it inherits the 利息制限法 20% cap, 出資法 20% criminal cap, 総量規制 1/3 cap, and 犯収法 KYC obligations of the full 貸金業 regime.

Social-finance and NPO-routed small-ticket lending channels exist (e.g., 生活福祉資金貸付 operated by 都道府県社会福祉協議会 with MHLW funding) but those are not 貸金業 — they are a policy-welfare channel. Sub-segmenting "microcredit" in Japan therefore requires checking whether the operator is 貸金業 (FSA-supervised) or 社会福祉 (MHLW-supervised), since the consumer-protection regime, registration route, and disclosure obligations differ entirely.

### 9. PSP-adjacent credit (e-commerce embedded credit)

PSP-adjacent credit is the **boundary case** for the comparison matrix. When a PSP (payment service provider) or wallet operator extends a checkout-time credit product, the receivable can be booked under (a) Installment Sales Act if the operator holds 個別 / 包括 信用購入あっせん registration, (b) Payment Services Act 資金移動業 if structured as a wallet-balance advance, (c) Payment Services Act 第三者型前払 if structured as prepaid stored-value extended, or (d) Money-Lending Act in rare structured cases. The same checkout UX can therefore translate to different licenses depending on which legal entity actually books the receivable.

This category exists because of operators like Mercari/Merpay (where the 後払い feature crosses funds-transfer + 後払い lines), PayPay (where あと払い uses [[JapanFG/paypay-card|PayPay Card]] as the credit booking entity), and platform-side credit extensions from EC marketplaces. The [[payments/japan-bnpl-credit-purchase-boundary|BNPL boundary]] page and the [[JapanFG/legal-financial-licenses/payment-license-stack|payment license stack]] page give the per-product classification test.

## Credit-information bureau footprint

A consumer-credit operator's reporting/inquiry obligation depends on its license category and bureau membership. There are three major bureaus:

| Bureau | Membership base | Typical operator coverage |
|---|---|---|
| **JICC** (日本信用情報機構) | Mostly 貸金業 + shinpan | Consumer finance / shoko-loan, shinpan, some BNPL |
| **CIC** (Credit Information Center) | Mostly Installment Sales Act registrants | Card issuers, shinpan, auto-finance, individual credit purchase intermediaries |
| **全国銀行個人信用情報センター (KSC)** | 銀行系 | Banks, 信用金庫, 信用組合 — housing loan + education loan + bank card-loan |

A **3 大消費者金融** operator is typically a member of JICC + CIC + KSC, since cross-bureau check is the basis of 総量規制 verification. A pure BNPL operator may only be a JICC or CIC member depending on its license stack. JHF (フラット 35) reports through the bank-originator side to KSC.

## Bank-adjacency map (consolidated)

Reading category 1, 2, 3, 4, 5, 6, 7 together, the bank-FG adjacency picture for Japanese consumer credit is:

| FG | Card issuer | Consumer finance | Shinpan | Notes |
|---|---|---|---|---|
| [[JapanFG/mufg|MUFG]] | [[JapanFG/mufg-nicos|MUFG NICOS]] (100%) | [[JapanFG/acom|ACOM]] (39.6% equity-method) | [[JapanFG/jaccs|JACCS]] (equity-method) | 3-line consumer credit footprint inside one FG |
| [[JapanFG/smfg|SMFG]] | [[JapanFG/smbc-card|SMBC Card]] (100%) | [[JapanFG/smbc-consumer-finance|SMBC Consumer Finance / Promise]] (100%) | (no major shinpan in-house; partners with Credit Saison and others) | 2-line, with shinpan as partnership rather than ownership |
| [[JapanFG/mizuho-fg|Mizuho FG]] | (UC Card legacy; partnership) | (no major standalone) | [[JapanFG/orico|Orico]] (equity-method + Itochu) | Shinpan-heavy, card-light |
| [[JapanFG/sbi-shinsei-bank|SBI Shinsei]] | (Shinsei Financial card products) | Shinsei Financial / レイクALSA (旧 GE 系) | [[JapanFG/aplus|APLUS]] (group company) | Heavy consumer-credit FG via legacy GE / Lake / APLUS book |
| Independent / non-bank-FG | [[JapanFG/rakuten-card|Rakuten Card]], [[JapanFG/paypay-card|PayPay Card]], [[JapanFG/aeon-financial-service|AEON Financial Service]] | [[JapanFG/aiful|AIFUL]] (founder-family) | Credit Saison (independent), [[JapanFG/aplus|APLUS]] (SBI-side) | Where bank-FG ownership is absent or partial |

The MUFG 3-line footprint (NICOS card + ACOM consumer finance + JACCS shinpan) is the single most concentrated bank-FG position in Japanese consumer credit. Whether MUFG eventually consolidates that into a unified consumer-credit subsidiary, or keeps them as separate listed/equity-method entities, is a long-running structural question.

## Recent regulatory pressure

| Date | Source | What changed |
|---|---|---|
| 2006-01-13 | Supreme Court | グレーゾーン金利 ruling effectively voided the 貸金業法 みなし弁済 provision, triggering 過払金 refund wave |
| 2006-12 | National Diet | 改正貸金業法 passed (20% interest cap + 1/3 total-volume cap) |
| 2008-04 | FSA | Business improvement order against [[JapanFG/aiful|AIFUL]] (collection-practice issue), entire-business suspension order |
| 2008-10-22 | MUFG TOB | MUFG acquired ~ 40% of [[JapanFG/acom|ACOM]], equity-method consolidation |
| 2010-06 | FSA | 改正貸金業法 fully enforced (20% cap + 1/3 total-volume cap, 完全施行) |
| 2010-09 | 武富士 | Takefuji filed 会社更生 (corporate reorganization), industry consolidates to 3 大消費者金融 |
| 2018 | METI | 改正割賦販売法 — strengthened 加盟店調査 obligation, card-data security stack |
| 2020 改正 | METI | 改正割賦販売法 — 認定包括信用購入あっせん業者 + 少額包括信用購入あっせん業者 framework for BNPL |
| 2021-04 | METI | 2020 改正割賦販売法 enforcement |
| 2024 | METI / CAA | BNPL clarification round, 後払い operator administrative-action page (atobaraigyouseisyobunnojoukyou.html) |
| 2025-03 | METI / J-Credit Association | EMV 3-DS mandatory for EC card payments under J-CSC guideline 6.0 (see [[payments/japan-card-security-authentication-controls|card security and authentication controls]]) |
| Ongoing | CAA (消費者庁) | Active warnings on cash-conversion abuse of BNPL and on UX patterns that make deferred-payment feel cash-like |

The 2010-06 改正貸金業法 enforcement is the **single largest structural event** in modern Japanese consumer credit — it consolidated 消費者金融 from a 4-strong + many-small landscape to the current 3 大 (ACOM, Promise, AIFUL) + bank-cardloan partnerships, and the 過払金 refund wave consumed the better part of a decade of operator equity.

## Securitization / ABS pipeline summary

| Category | Routine ABS / MBS pipeline | Comment |
|---|---|---|
| Card issuer | Heavy — credit-card receivables ABS (V-RACE, S-RACE, Rakuten Card ABS) | Bank-FG card issuers issue routinely; non-bank-FG card issuers via SPC |
| Consumer finance | Heavy — consumer-loan ABS routine for ACOM / SMBCCF / AIFUL | Post-過払金 wave, ABS is a stable secondary funding line |
| Shinpan (auto-shopping credit) | Heavy — auto-loan + shopping-credit ABS | Orico / JACCS / APLUS routine pipelines |
| BNPL | Emerging — Paidy receivables securitization route under PayPal ownership | Still small but pipeline is opening |
| Auto-captive (OEM) | Heavy — Toyota Finance / Honda Finance / Nissan Financial auto ABS routine | Largest non-MBS consumer-loan ABS segment |
| Housing (JHF) | Heavy — フラット 35 機構 MBS routine | JHF is Japan's largest MBS issuer |
| Education loan | Minimal as standalone pool | Bank-side aggregate, not standalone |
| Microcredit | Minimal | Too small for ABS economics |
| PSP-adjacent | Minimal | Aggregated into parent's other ABS pipeline if any |

The ABS dimension matters for understanding **how each operator funds itself** — heavy-ABS categories can sustain rapid book growth without proportional balance-sheet capital, while light-ABS categories (microcredit, education-loan, PSP-adjacent) are growth-constrained by parent-balance-sheet capacity. This is one reason BNPL operators that achieve recurring securitization (Paidy under PayPal) gain real capital efficiency vs BNPL operators that fund out of equity.

## Related

- [[payments/INDEX]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/cashless-jp-landscape]]
- [[JapanFG/legal-financial-licenses/payment-license-stack]]
- [[JapanFG/legal-financial-licenses/INDEX]]
- [[JapanFG/acom]]
- [[JapanFG/aiful]]
- [[JapanFG/smbc-consumer-finance]]
- [[JapanFG/aplus]]
- [[JapanFG/jaccs]]
- [[JapanFG/orico]]
- [[JapanFG/smbc-card]]
- [[JapanFG/mufg-nicos]]
- [[JapanFG/jcb]]
- [[JapanFG/rakuten-card]]
- [[JapanFG/paypay-card]]
- [[JapanFG/aeon-financial-service]]
- [[JapanFG/paidy]]
- [[JapanFG/bnpl-landscape]]
- [[policy-finance/japan-housing-finance-agency]]
- [[INDEX|FinWiki index]]

## Sources

- METI Installment Sales Act portal: https://www.meti.go.jp/policy/economy/consumer/credit/
- METI credit-transaction index: https://www.meti.go.jp/policy/economy/consumer/credit/index.html
- METI registered operator lists portal: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- METI 登録包括信用購入あっせん業者 PDF: https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf
- METI 登録個別信用購入あっせん業者 PDF: https://www.meti.go.jp/policy/economy/consumer/credit/tourokukobetsuichiran.pdf
- METI クレジットカード番号等取扱契約締結事業者 PDF: https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
- METI 割賦販売法 after-payment FAQ: https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html
- METI 改正割賦販売法 page: https://www.meti.go.jp/policy/economy/consumer/credit/11kappuhanbaihou.html
- FSA Money-Lending Act portal: https://www.fsa.go.jp/menkyo/kashikin/
- FSA licensed / registered operators portal: https://www.fsa.go.jp/menkyo/menkyo.html
- FSA prepaid policy portal: https://www.fsa.go.jp/policy/prepaid/
- JICC (日本信用情報機構): https://www.jicc.co.jp/
- CIC (Credit Information Center): https://www.cic.co.jp/
- Japan Credit Association — Installment Sales Act consumer page: https://www.j-credit.or.jp/customer/sales_law/
- JHF (住宅金融支援機構): https://www.jhf.go.jp/
- JFC (日本政策金融公庫): https://www.jfc.go.jp/
- CAA (消費者庁) payment-trouble caution: https://www.caa.go.jp/policies/policy/consumer_policy/caution/internet/trouble/payment.html
- Each operator's IR / corporate disclosure (公開分): [[JapanFG/acom|ACOM]] (TSE STD 8572), [[JapanFG/aiful|AIFUL]] (TSE PRIME 8515), [[JapanFG/jaccs|JACCS]] (TSE PRIME 8584), [[JapanFG/orico|Orico]] (TSE PRIME 8585), [[JapanFG/aplus|APLUS]] (SBI Group corporate site), [[JapanFG/smbc-consumer-finance|SMBC Consumer Finance / Promise]] (SMFG consolidated)
