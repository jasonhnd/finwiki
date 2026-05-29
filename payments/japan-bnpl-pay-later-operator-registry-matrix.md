---
title: "Japan BNPL / pay-later operator registry matrix"
aliases:
  - "payments/japan-bnpl-pay-later-operator-registry-matrix"
  - "japan-bnpl-pay-later-operator-registry-matrix"
  - "Japan BNPL operator comparison registry"
  - "個別信用購入あっせん業者 BNPL registry Japan"
  - "Japan 後払い operator comparison matrix"
  - "Japan BNPL pay-later top operators landscape"
  - "Japan atobarai operator scorecard"
  - "日本 BNPL 後払い事業者登録マトリクス"
domain: payments
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [payments, matrix, BNPL, atobarai, 後払い, installment-sales-act, METI, individual-credit-purchase, registry, Japan]
status: active
sources:
  - "https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/tourokukobetsuichiran.pdf"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/11kappuhanbaihou.html"
  - "https://corp.netprotections.com/ir/"
  - "https://www.atone.be/"
  - "https://www.kuronekoyamato.co.jp/ytc/business/option/payment/"
  - "https://www.gmo-pp.co.jp/"
  - "https://paidy.com/"
  - "https://komoju.com/ja/payments/atobarai/"
  - "https://about.mercari.com/press/"
  - "https://www.caa.go.jp/policies/policy/consumer_policy/caution/internet/trouble/payment.html"
  - "https://www.fsa.go.jp/menkyo/menkyo.html"
---

# Japan BNPL / pay-later operator registry matrix

## TL;DR

Japan's BNPL / 後払い landscape is governed mainly by the **割賦販売法 (Installment Sales Act)** through the **個別信用購入あっせん業者** (individual credit-purchase intermediary) registration line, with METI as the primary regulator. The METI 登録個別信用購入あっせん業者 list contains around 138 registered operators as of 2026-04 month-end (per the [[payments/credit-purchase-card-operators-japan-index|credit-purchase card operator registry]]), of which a smaller subset — roughly 15-20 — actively run consumer-visible BNPL / 後払い products at meaningful scale. This matrix profiles those active operators across the axes that determine BNPL economics: parent / ownership, transaction model (single-payment deferred vs installment), credit-risk model (operator-eats-loss vs merchant-eats-loss vs co-share), funding source, merchant-category specialization, monthly transaction volume order-of-magnitude, registration year, and regulatory tier under the 2020 改正割賦販売法 framework (認定包括 / 少額包括 / 個別 / exemption). The matrix is the operator-level companion to [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] and the BNPL-specific cross-section of [[payments/japan-consumer-credit-operator-comparison-matrix|Japan consumer-credit operator comparison matrix]].

## Wiki route

This sits under [[payments/INDEX|payments index]] as the BNPL operator-level reference. Read it with [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] for the per-product classification test, [[payments/credit-purchase-card-operators-japan-index|credit-purchase card operator registry]] for the METI registry trail, [[payments/japan-consumer-credit-operator-comparison-matrix|Japan consumer-credit operator comparison matrix]] for the BNPL category in the broader consumer-credit context, [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] for the BNPL row in the cross-scheme economics view, [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]] for the role-separation framework that BNPL deviates from, and the operator anchors [[JapanFG/net-protections-hd|Net Protections HD]], [[JapanFG/atone|atone]], [[JapanFG/kuroneko-atobarai|Kuroneko Atobarai]], [[JapanFG/gmo-postpay|GMO Postpay]], [[JapanFG/paidy|Paidy]], [[JapanFG/mercari-hd|Mercari HD]], [[JapanFG/aplus|APLUS]], [[JapanFG/jaccs|JACCS]], [[JapanFG/orico|Orico]], and [[JapanFG/credit-saison|Credit Saison]].

## Why this matrix matters

BNPL is the single most regulatorily-ambiguous payment category in Japan. The same checkout UX (a "pay later by konbini / bank transfer" or "pay next month" button) can route through (a) a 個別信用購入あっせん registered operator under the Installment Sales Act, (b) an exemption-threshold deferred-payment structure that avoids 個別 registration, (c) a 認定包括信用購入あっせん or 少額包括信用購入あっせん regime introduced by the 2020 改正割賦販売法, (d) a 包括信用購入あっせん regime in the BNPL-extension of an existing card issuer (PayPay あと払い → [[JapanFG/paypay-card|PayPay Card]] backend), or (e) a hybrid that combines funds-transfer + 後払い layers (Mercari / Merpay). Without an operator-by-operator view, readers conflate operators that look identical at checkout but sit on materially different license stacks, credit-risk models, and consumer-protection regimes. This matrix is the operator-level surface that the [[payments/japan-bnpl-credit-purchase-boundary|BNPL boundary]] page points to.

The Consumer Affairs Agency (消費者庁 / CAA) maintains an active warning channel on **cash-conversion abuse of BNPL** (現金化目的後払い) and on UX patterns that cause over-borrowing — see CAA's payment-trouble caution page in the sources. This matrix tracks regulatory tier and registration history so a reader can identify which operators are subject to which level of supervision.

### Net Protections HD (NP 後払い, TSE PRIME 7383)

[[JapanFG/net-protections-hd|Net Protections HD]] (TSE PRIME 7383) is Japan's earliest-mover BNPL pure-play and operates the **NP 後払い** invoice-based BtoC product that EC merchants attach as a "pay later by konbini / bank transfer" option. The group also runs **atone** (consumer-side monthly-cycle BNPL wallet), **NP 掛け払い** (BtoB invoicing), and **AFTEE** (Southeast Asia BNPL targeting Taiwan / Vietnam). The defining characteristic of NP 後払い is **guarantee-model BNPL** — Net Protections absorbs the unrecovered-payment risk in exchange for the merchant fee, so the merchant offloads receivables-management entirely. Registered as an 個別信用購入あっせん業者 on the METI list. Listed 2021-12 on TSE PRIME.

### atone (Net Protections subsidiary)

[[JapanFG/atone|atone]] is Net Protections' consumer-side monthly-cycle BNPL wallet, distinct from NP 後払い's per-transaction invoicing model. atone gives the consumer an account that aggregates BNPL purchases across multiple merchants into one monthly konbini / bank-transfer payment, similar in UX to [[JapanFG/paidy|Paidy]] but on independent (non-PayPal) economics. From a regulatory perspective, atone uses the same Net Protections license stack as NP 後払い (Installment Sales Act 個別信用購入あっせん). The brand split lets Net Protections compete in the "monthly-cycle BNPL wallet" segment without diluting the NP 後払い "merchant-side BNPL gateway" brand.

### Kuroneko Atobarai (Yamato Financial Holdings)

[[JapanFG/kuroneko-atobarai|Kuroneko Atobarai (クロネコ後払い)]] is the BNPL product line operated by Yamato group's financial entity, leveraging Yamato Transport's nationwide delivery network. The distinctive merchant-segment fit is **EC purchases that ship via Yamato Delivery** — the BNPL collection can be bundled with the delivery confirmation, giving Kuroneko Atobarai a structural cost advantage for EC merchants who already use Yamato as their primary carrier. Registered on the METI 登録個別信用購入あっせん業者 list. The product fits naturally with [[JapanFG/net-protections-hd|Net Protections]] NP 後払い in the "shipping-bundled invoice BNPL" segment, where the merchant value is "we handle delivery + collection in one package."

### GMO Postpay (GMO Payment Gateway group)

[[JapanFG/gmo-postpay|GMO Postpay]] is the [[business/gmo-internet-group|GMO Internet Group]] / [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]] 後払い product line, designed to integrate with the broader GMO-PG merchant base as a 後払い option alongside card / code / convenience-store payment methods. The GMO-PG integration means a merchant already on GMO-PG can add GMO Postpay as an additional payment method without setting up a separate gateway relationship — a structural channel advantage for a 後払い product. Registered on the METI 登録個別信用購入あっせん業者 list. The natural cross-sell into GMO-PG's ~30万 merchant base is the principal scale-driver.

### Paidy (PayPal-owned)

[[JapanFG/paidy|Paidy]] is the PayPal-owned consumer-side monthly-cycle BNPL operator, with multi-product variants including standard monthly konbini / bank-transfer payment, 3-pay (split into 3 monthly installments) and longer installment variants for higher-ticket purchases. Acquired by PayPal in 2021-09 for ~USD 2.7 billion (per [[JapanFG/paypal-pte-ltd-japan|PayPal Pte. Ltd. Japan]] entry and PayPal Holdings public disclosure). Paidy's distinctive scale advantage is **integration with major EC merchants (Amazon Japan being a flagship integration)** and the PayPal global footprint cross-leverage. Registered on the METI 登録個別信用購入あっせん業者 list.

### Komoju Atobarai (Degica)

Komoju Atobarai is Degica / Komoju's own-brand 後払い product, integrated into the Komoju PSP gateway for merchants who want to offer 後払い alongside Komoju's card / code / Konbini payment-method coverage (Komoju's vertical specialization is digital content / gaming / cross-border — see [[payments/japan-merchant-psp-competitive-scorecard|Japan merchant PSP competitive scorecard]]). Registered on the METI 登録個別信用購入あっせん業者 list. The natural fit is digital content / gaming merchants who want 後払い as an alternative for cardholders without an active credit card.

### Smarpay

Smarpay (株式会社Smartpay 等) is a relatively newer BNPL entrant that emerged in the 2020s wave of BNPL launches, providing a consumer-side BNPL product with installment-payment optionality. The operator is registered on the METI 登録個別信用購入あっせん業者 list. Reader caution: independent BNPL operators in this category cluster have variable scale and operator longevity is sensitive to consumer-credit cycle conditions.

### Lattepay

Lattepay is one of the smaller BNPL operators that participated in the 2020-2022 BNPL launch wave in Japan, registered under the Installment Sales Act 個別信用購入あっせん route. Like Smarpay, Lattepay operates at smaller scale than NP / Paidy / Atone, and reader caution applies on operator continuity. The presence of multiple smaller BNPL operators alongside the dominant pure-plays is a feature of the post-2020 改正割賦販売法 environment where the registration barrier is meaningful but not prohibitive.

### Mercari Smart Money / Merpay BNPL extension

[[JapanFG/mercari-hd|Mercari HD]] (TSE PRIME 4385) operates [[JapanFG/merpay|Merpay]] as its payments arm, which extends into BNPL via メルペイ翌月払い (Merpay next-month payment) and Mercari Smart Money / メルペイスマートマネー lending products. The defining feature is **vertical-integration with the Mercari peer-to-peer marketplace** — Merpay can offer BNPL where the funding source and collection are both inside the Mercari ecosystem, giving structurally different unit economics than independent BNPL operators. Merpay's license stack combines funds-transfer (資金移動業) with 個別信用購入あっせん registration where the credit purchase routes through that line, plus 貸金業 registration for cash-based lending products — a multi-license combination that is rare among BNPL pure-plays.

### b/43 (Smartbank)

b/43 (provided by Smartbank, Inc.) is a prepaid Visa card + family-account expense-management product with installment / pay-later optionality. The b/43 product positions itself closer to a **family finance / household budgeting tool** with BNPL features than a pure-BNPL pure-play. The credit / 後払い components are licensed appropriately under the Installment Sales Act 個別 / Payment Services Act 前払い lines, depending on the specific product feature. Reader caution: the BNPL extension of a primarily-prepaid product like b/43 sits in a slightly different category than a pure-BNPL pure-play like NP 後払い or Paidy.

### NP後払い (separate brand listing under Net Protections)

NP後払い is the customer-facing brand for Net Protections' invoice-based BNPL product (the same product as covered in the Net Protections HD section). It is listed separately here because **merchants and consumers commonly recognize the NP 後払い brand independently of the Net Protections corporate name**, and the registration is held by 株式会社ネットプロテクションズ (operating subsidiary) rather than the holdings entity. The brand-vs-entity distinction matters for registry lookup against the METI 登録個別信用購入あっせん業者 list — the operator name on the registry is the operating subsidiary.

### Mitsui Sumitomo Card / SMBC-side BNPL extensions

[[JapanFG/smbc-card|SMBC Card]] has BNPL-adjacent extensions through its Vpass / 三井住友カード あと払い + V Point ecosystem that allow cardholders to convert specific transactions into installment-payment terms post-purchase. These extensions sit on the existing 包括信用購入あっせん (card-issuer) registration rather than separate 個別 registration, since the underlying receivable is a card-issued credit-line receivable. From the consumer perspective they look like BNPL, but from the regulatory perspective they are card-credit-line extension features. Same pattern applies to [[JapanFG/mufg-nicos|MUFG NICOS]], [[JapanFG/rakuten-card|Rakuten Card]], and other major card issuers.

### PayPay あと払い (via PayPay Card backend)

PayPay あと払い is the BNPL-feeling product offered through the [[JapanFG/paypay|PayPay]] wallet UX, but the credit-line backend is [[JapanFG/paypay-card|PayPay Card]] (the card-issuer entity). The PayPay wallet acts as the consumer-facing UX layer while the PayPay Card 包括信用購入あっせん registration carries the credit receivable. This is included here as a **boundary case** — from the consumer point of view it's BNPL-equivalent, but from the regulatory point of view it sits on a card-issuer registration. The same pattern applies to d払い / au PAY / 楽天ペイ where they extend BNPL-equivalent features through linked card-issuer backends.

### Shinpan-side BNPL: APLUS, JACCS, Orico, Credit Saison

[[JapanFG/aplus|APLUS]] ([[JapanFG/sbi-shinsei-bank|SBI Shinsei]] group), [[JapanFG/jaccs|JACCS]] ([[JapanFG/mufg|MUFG]] equity-method), [[JapanFG/orico|Orico]] ([[JapanFG/mizuho-fg|Mizuho]] + Itochu), and [[JapanFG/credit-saison|Credit Saison]] (independent) all hold 個別信用購入あっせん registration as their primary shinpan business line and operate BNPL-style products either as standalone consumer-facing brands or as the white-label backend for merchant-fronted BNPL offerings. Their structural advantage over pure-play BNPL is **multi-line shinpan economics** — a customer acquired through a BNPL channel can be cross-sold into auto-loan, リフォームローン, 教育ローン, and card products, generating multi-product LTV that a single-product BNPL pure-play cannot match. They are included in this matrix not because they are "BNPL operators" in the pure-play sense, but because **they are major participants in the 個別信用購入あっせん registry that pure-play BNPL operators register under**, and the regulatory line between shinpan-shopping-credit and BNPL is structurally blurry.

## Big comparison matrix table

| Operator | Parent / ownership | License registration | Listing | Registration year (approx) | Transaction model | Credit-risk model | Funding source | Primary merchant categories | Monthly tx volume order | Regulatory tier (2020 改正割賦販売法 framework) |
|---|---|---|---|---|---|---|---|---|---|---|
| **[[JapanFG/net-protections-hd\|Net Protections / NP 後払い]]** | Independent (listed) | 個別信用購入あっせん業者 (METI) | TSE PRIME 7383 (listed 2021-12) | Pre-2010 | Per-transaction invoice; ≤2-month or installment | Operator-eats-loss (guarantee model) | Equity + ABS pipeline emerging | EC general (apparel, cosmetics, food, general retail) | Tens of millions of tx / year | 個別 |
| **[[JapanFG/atone\|atone (Net Protections)]]** | Net Protections subsidiary | 個別信用購入あっせん業者 (METI) | Subsidiary | Mid-2010s | Monthly-cycle aggregated BNPL wallet | Operator-eats-loss | Equity + parent | Multi-merchant BtoC consumer | Several million users | 個別 |
| **[[JapanFG/kuroneko-atobarai\|Kuroneko Atobarai (Yamato)]]** | Yamato Financial Holdings | 個別信用購入あっせん業者 (METI) | Subsidiary | 2000s | Per-transaction invoice; ≤2-month | Operator-eats-loss (guarantee model) | Yamato group balance sheet | EC general (Yamato-delivery-shipped) | Tens of millions of tx / year | 個別 |
| **[[JapanFG/gmo-postpay\|GMO Postpay]]** | [[business/gmo-internet-group\|GMO Internet]] / [[JapanFG/gmo-payment-gateway\|GMO-PG]] | 個別信用購入あっせん業者 (METI) | Subsidiary | 2010s | Per-transaction invoice; ≤2-month or installment | Operator-eats-loss + merchant co-share variants | GMO group balance sheet + ABS | EC general (GMO-PG merchant base) | Millions of tx / year | 個別 |
| **[[JapanFG/paidy\|Paidy]]** | PayPal Holdings ([[JapanFG/paypal-pte-ltd-japan\|PayPal Pte. Ltd. Japan]]); acquired 2021-09 | 個別信用購入あっせん業者 (METI) | Subsidiary of PayPal | 2010s | Monthly-cycle aggregated BNPL + 3-pay + installment | Operator-eats-loss; ABS / securitization | Equity + receivables securitization route | EC general; Amazon Japan flagship integration | Tens of millions of tx / year | 個別 (with 認定/少額包括 watch) |
| **Komoju Atobarai (Degica)** | Degica / Komoju (independent) | 個別信用購入あっせん業者 (METI) | Subsidiary of Degica | 2010s-2020s | Per-transaction invoice | Operator-eats-loss + merchant co-share | Komoju group balance sheet | Digital content, gaming, cross-border EC | Smaller; vertical-specialized | 個別 |
| **Smarpay** | Independent (Smartpay) | 個別信用購入あっせん業者 (METI) | Non-listed | 2020-2022 launch wave | Per-transaction + installment | Operator-eats-loss; smaller scale | Equity / investor-backed | EC general | Smaller | 個別 |
| **Lattepay** | Independent | 個別信用購入あっせん業者 (METI) | Non-listed | 2020-2022 launch wave | Per-transaction | Operator-eats-loss; smaller scale | Equity | EC general | Smaller | 個別 |
| **[[JapanFG/merpay\|Merpay / Mercari Smart Money]]** | [[JapanFG/mercari-hd\|Mercari HD]] (TSE PRIME 4385) | 個別信用購入あっせん業者 + 資金移動業 + 貸金業 (multi-license) | Subsidiary of Mercari HD | 2010s for Merpay; Smart Money later | Monthly-cycle aggregated BNPL + 翌月払い + cash-loan | Operator-eats-loss within Mercari ecosystem | Mercari group balance sheet | Mercari marketplace + external merchants | Tens of millions of tx / year | 個別 + 包括 in extensions |
| **b/43 (Smartbank)** | Smartbank, Inc. (independent) | Prepaid (前払い式) + 個別信用購入あっせん for credit extensions | Non-listed | 2020s | Prepaid + family-finance with pay-later optionality | Mostly prepaid; credit lines smaller scale | Equity / investor-backed | Family / household finance | Smaller | 前払い式 + 個別 (mixed) |
| **NP後払い (separate brand)** | Operated under Net Protections | 個別信用購入あっせん業者 (METI) — same operating entity as Net Protections | Brand under listed entity | Pre-2010 | Same as Net Protections HD entry | Operator-eats-loss | Equity | EC general | (Same as Net Protections HD) | 個別 |
| **PayPay あと払い** | [[JapanFG/paypay\|PayPay]] wallet UX, [[JapanFG/paypay-card\|PayPay Card]] backend | 包括信用購入あっせん (card-issuer registration) | Subsidiaries of PayPay FG / SoftBank | 2010s (PayPay Card founding) | Card-line installment / revolving + あと払い feature | Card-issuer model (operator credit screening) | Card-issuer balance sheet + ABS pipeline | PayPay-merchant ecosystem + general | Tens of millions of tx / year | 包括 (card-issuer line, not 個別) |
| **[[JapanFG/aplus\|APLUS]] BNPL extensions** | [[JapanFG/sbi-shinsei-bank\|SBI Shinsei]] | 個別信用購入あっせん + 包括 | Subsidiary of SBI Shinsei | Pre-2010 | Per-transaction + installment; shinpan-rooted | Shinpan-loss-eats; multi-license amortization | Bank-FG funding + ABS | Auto / shopping / various | Tens of millions of tx / year | 個別 + 包括 (shinpan, not pure BNPL) |
| **[[JapanFG/jaccs\|JACCS]] BNPL extensions** | [[JapanFG/mufg\|MUFG]] equity-method | 個別信用購入あっせん + 包括 | TSE PRIME 8584 | Pre-2010 | Per-transaction + installment | Shinpan-loss-eats | Bank-FG funding + ABS | Auto / education / リフォーム / general | Tens of millions of tx / year | 個別 + 包括 (shinpan) |
| **[[JapanFG/orico\|Orico]] BNPL extensions** | [[JapanFG/mizuho-fg\|Mizuho]] + Itochu | 個別信用購入あっせん + 包括 | TSE PRIME 8585 | Pre-2010 | Per-transaction + installment | Shinpan-loss-eats | Bank-FG funding + ABS | Auto / shopping / general | Tens of millions of tx / year | 個別 + 包括 (shinpan) |
| **[[JapanFG/credit-saison\|Credit Saison]] BNPL extensions** | Independent (listed) | 個別信用購入あっせん + 包括 | TSE PRIME 8253 | Pre-2010 | Per-transaction + card-line revolving | Card-issuer + shinpan mixed | Equity + ABS | General consumer + Marui-adjacent retail | Tens of millions of tx / year | 個別 + 包括 (card-issuer + shinpan) |

### Side-axis — registry trail and supervisory status

The METI 登録個別信用購入あっせん業者 PDF list is the canonical registry. Reader workflow for any specific operator in the matrix:

1. Open the METI 登録個別信用購入あっせん業者 PDF from the [[payments/credit-purchase-card-operators-japan-index|credit-purchase card operator registry]] portal.
2. Search the PDF for the operating-entity name (note: brand vs entity distinction — the registry lists 株式会社X not the brand).
3. Cross-check the METI クレジットカード番号等取扱契約締結事業者 PDF if the operator handles card numbers directly.
4. For any operator with a wallet / 資金移動業 leg (Mercari, PayPay, others), cross-check the FSA 資金移動業者 list.
5. For BNPL operators with reported administrative action, cross-check the METI 後払い行政処分状況 page.

The METI 後払い administrative-action page is the canonical source for any supervisory action against 後払い operators — readers tracking BNPL operator risk should monitor it directly rather than relying on secondary reporting.

### Side-axis — credit-information bureau membership

| Operator type | JICC | CIC | KSC (banking) |
|---|---|---|---|
| Pure-play BNPL (NP, atone, Kuroneko, Paidy, etc.) | Some | Some (Paidy disclosure references CIC) | Not typically |
| Shinpan with BNPL extensions (APLUS, JACCS, Orico, Credit Saison) | Yes | Yes | Selective |
| Card-issuer BNPL extensions (PayPay Card, Rakuten Card, SMBC Card, etc.) | Yes | Yes | Selective |
| Wallet-anchored BNPL (Merpay) | Yes | Yes | Not typically |

Bureau membership shapes the consumer-credit information sharing that supports operator credit screening — operators with limited bureau membership cannot reliably check applicant credit history outside their own data, which is one structural reason small pure-play BNPL operators face higher default rates than shinpan-rooted operators with full bureau access.

## 2020 改正割賦販売法 regulatory tier framework

The 2020 改正割賦販売法 (effective 2021-04) introduced a tiered framework for 包括信用購入あっせん operators that has implications for the BNPL operator landscape:

| Tier | Threshold | Operator implication |
|---|---|---|
| **包括信用購入あっせん (standard)** | Standard 包括信用購入あっせん registration | Full credit-screening obligation per 改正割賦販売法 |
| **認定包括信用購入あっせん業者** | Operators qualifying for advanced data-screening certification | Allowed to use AI / data-based screening with regulatory recognition |
| **少額包括信用購入あっせん業者** | Lower thresholds for small-ticket BNPL | Lighter screening obligation suitable for small-ticket BNPL |
| **個別信用購入あっせん業者** | Per-transaction credit-purchase intermediary | The line most pure-play BNPL operators sit on |
| **Exemption thresholds** | ≤2-month single-payment deferred-payment + certain merchant-fronted models | No 個別 registration required for qualifying structures |

The introduction of 認定包括 and 少額包括 was specifically designed to bring some BNPL operators into a lighter version of the 包括 regime, recognizing that the existing 個別 registration was not well-fitted to monthly-cycle multi-merchant BNPL wallet products. As of 2026, the population of operators registered specifically as 少額包括 is small but the framework is in place.

The 2024 BNPL clarification round under 改正割賦販売法 continued tightening the boundary between exempted deferred-payment and registered 個別信用購入あっせん — see [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] for the per-product classification test that emerged.

## Funding-source pattern across the operator set

| Funding-source pattern | Operators |
|---|---|
| **Pure-equity + investor capital** | Smarpay, Lattepay, Komoju Atobarai, b/43 |
| **Equity + emerging ABS pipeline** | Net Protections HD, atone, Paidy under PayPal |
| **Parent group balance sheet** | GMO Postpay (GMO Internet Group), Kuroneko Atobarai (Yamato Financial), Merpay (Mercari) |
| **Bank-FG funding + routine ABS** | APLUS (SBI Shinsei), JACCS (MUFG equity-method), Orico (Mizuho + Itochu), Credit Saison (Mizuho-adjacent), card-issuer BNPL backends (PayPay Card / Rakuten Card / SMBC Card / etc.) |
| **Foreign-parent equity + Japan-side funding** | Paidy under PayPal Holdings |

The funding-source pattern is the single biggest determinant of which BNPL operators can sustain rapid book growth vs which are capital-constrained. Operators with **routine ABS pipeline** (shinpan, card-issuer, large pure-plays under PayPal-style parents) can grow without proportional equity-capital injection; operators on **pure-equity + investor capital** are constrained by funding rounds and are most vulnerable in consumer-credit-cycle downturns.

This is why the 2020-2022 BNPL launch wave produced many small operators, of which the survival pattern over a 5-10 year horizon is likely to favor (a) shinpan-rooted BNPL with multi-license amortization, (b) card-issuer-backend BNPL with card-issuer ABS pipeline access, and (c) the handful of pure-plays that reach scale enough for routine ABS economics — with smaller pure-plays facing consolidation pressure.

## Boundary cases

- **"Is [[JapanFG/paidy|Paidy]] a BNPL operator or a PayPal product?"** Both. Paidy is a standalone 個別信用購入あっせん registered operator with its own consumer-facing brand and merchant relationships; it is also a PayPal Holdings subsidiary since the 2021-09 acquisition. The acquisition gave Paidy access to PayPal global infrastructure and balance-sheet capacity but did not change its Japanese license stack or regulatory position.
- **"Is メルカリ翌月払い / Merpay BNPL a BNPL operator or a wallet feature?"** Both — and that's the boundary issue. The wallet (Merpay) sits on 資金移動業 registration; the 翌月払い feature sits on 個別信用購入あっせん registration; the cash-loan extension sits on 貸金業 registration. Merpay's multi-license stack is rare for BNPL and crosses the [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer / prepaid boundary]] explicitly.
- **"Is PayPay あと払い BNPL?"** From the consumer UX, yes. From the regulator's perspective, it is a feature of [[JapanFG/paypay-card|PayPay Card]] (包括信用購入あっせん registration) routed through the PayPay wallet UX. It is structurally a card-issuer extension, not a separate BNPL registration. Same pattern applies to d払いカード etc.
- **"Are [[JapanFG/aplus|APLUS]], [[JapanFG/jaccs|JACCS]], [[JapanFG/orico|Orico]] BNPL operators?"** They are 個別信用購入あっせん業者 by primary license, which is the same license used by BNPL pure-plays. Their core business is shinpan / shopping-credit which is older than the "BNPL" terminology; calling them BNPL operators in the pure-play sense is a category error, but they are major participants in the same regulatory line.
- **"Is [[JapanFG/credit-saison|Credit Saison]] a card issuer or a shinpan or a BNPL operator?"** All three — Credit Saison holds 包括信用購入あっせん (card-issuer line) + 個別信用購入あっせん (shinpan line) + 貸金業 (cash-loan line), making it one of Japan's most license-diverse consumer-credit operators. Its "BNPL extensions" sit on the existing license stack rather than separate BNPL registration.
- **"What about smaller / regional operators on the METI 個別 list?"** The 138-operator registry includes many small / regional operators (regional auto-dealer captive finance, regional shopping-credit operators, niche-merchant 個別 operators) that have small consumer-visible BNPL footprint. The matrix focuses on the 15-20 operators that run consumer-visible BNPL products at meaningful scale; readers tracking the full registry should consult the METI PDF directly.
- **"How does the consumer chargeback / dispute mechanism work in BNPL vs card?"** Card has Installment Sales Act 抗弁の接続 plus brand chargeback rules (Visa Dispute, Mastercard Chargeback, JCB Dispute), giving cardholders a path back if the merchant fails to deliver. BNPL pure-play dispute mechanisms vary by operator — Net Protections / Paidy / etc. have published dispute procedures, but no statutory cross-operator chargeback framework exists (see [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] chargeback section).
- **"What about 後払い operators that have received METI administrative action?"** Consult the METI 後払い行政処分状況 page (atobaraigyouseisyobunnojoukyou.html) for current administrative-action status. The CAA payment-trouble caution page also references general 後払い consumer-protection issues.

## Cross-references with other matrices

- vs **[[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]]**: That entry establishes the per-product classification test for whether a checkout BNPL feature triggers 個別信用購入あっせん, 包括信用購入あっせん, 認定包括, 少額包括, exemption, or 資金移動業 classification. This matrix is the operator-level surface that classification test points to.
- vs **[[payments/credit-purchase-card-operators-japan-index|credit-purchase card operator registry]]**: That entry is the registry-trail surface for METI 登録個別信用購入あっせん業者 (138 operators as of 2026-04 month-end) and 登録包括信用購入あっせん業者 (241 operators). This matrix profiles the BNPL-active subset of those registrations.
- vs **[[payments/japan-consumer-credit-operator-comparison-matrix|consumer-credit operator comparison matrix]]**: That entry covers nine consumer-credit operator categories (card / consumer finance / shinpan / BNPL / auto / housing / education / microcredit / PSP-adjacent). This matrix is the BNPL category zoom, with shinpan-side operators (APLUS, JACCS, Orico, Credit Saison) appearing in both surfaces.
- vs **[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]**: That entry covers card vs code vs A2A vs prepaid at the scheme-class level. BNPL is treated as a sub-category within the card class. This matrix decomposes the BNPL sub-category operator-by-operator.
- vs **[[payments/japan-jcb-issuer-ecosystem-positioning-matrix|JCB issuer ecosystem positioning matrix]]** and **[[payments/japan-merchant-psp-competitive-scorecard|merchant PSP competitive scorecard]]**: Those matrices cover the issuer-side and merchant-PSP-side respectively; this matrix is the BNPL-operator-side complement to both. Card-issuer-backend BNPL (PayPay あと払い via PayPay Card) sits at the intersection with the JCB issuer matrix where PayPay Card is a JCB-brand licensee (where applicable) and at the intersection with the PSP scorecard where SB Payment Service is the merchant-side processor for PayPay-anchored merchants.

## Recent regulatory pressure timeline

| Date | Source | What changed |
|---|---|---|
| 2018 | METI | 改正割賦販売法 strengthened 加盟店調査 obligation — direct impact on BNPL operators that are 個別信用購入あっせん registered, raised onboarding cost for marginal merchant relationships |
| 2020 改正 | METI | 改正割賦販売法 introduced 認定包括信用購入あっせん業者 + 少額包括信用購入あっせん業者 framework explicitly to bring some BNPL operators under a lighter 包括 regime |
| 2021-04 | METI | 2020 改正割賦販売法 enforcement; new tier framework operational |
| 2021-09 | Cross-border M&A | PayPal Holdings acquired [[JapanFG/paidy\|Paidy]] for ~USD 2.7 bn — first major foreign-parent acquisition in Japan BNPL space |
| 2021-12 | TSE | [[JapanFG/net-protections-hd\|Net Protections HD]] listed on TSE PRIME (7383); first pure-play BNPL operator listed in Japan |
| 2024 | METI / CAA | BNPL clarification round under continued 改正割賦販売法 + CAA payment-trouble warning channel updates |
| 2024-2025 | METI | 後払い行政処分状況 page maintained for any administrative action; selective administrative actions issued |
| 2025-03 | METI / J-CSC | EMV 3-DS mandatory for EC card payments — secondary effect on BNPL adoption as card EC friction increases (see [[payments/japan-card-security-authentication-controls\|Japan card security and authentication controls]]) |
| Ongoing | CAA | Active warnings on cash-conversion abuse of BNPL (現金化目的後払い) and UX patterns that cause over-borrowing |

## Transaction-model decomposition

A reader scanning this matrix should not flatten "BNPL" into one shape. The BNPL operators above use at least four distinct transaction models, each with different risk and economic characteristics:

| Transaction model | Operators | Key risk characteristics |
|---|---|---|
| **Per-transaction invoice (≤2-month, single payment)** | NP 後払い, Kuroneko Atobarai, GMO Postpay, Komoju Atobarai | Short-tenor receivable; low per-transaction average; operator-level default risk concentrated by merchant-mix; konbini / bank-transfer collection mechanics |
| **Monthly-cycle aggregated wallet** | atone, Paidy, Merpay 翌月払い | Multi-merchant aggregated billing; consumer-side credit-line management; monthly default-rate observable cycle |
| **Installment / split-pay (3-pay, 6-pay, longer)** | Paidy 3-pay + 6-pay variants, shinpan installment lanes (APLUS, JACCS, Orico, Credit Saison) | Longer tenor; higher per-transaction value typical; installment-level disclosure obligation under 改正割賦販売法 |
| **Card-issuer-backend BNPL feature** | PayPay あと払い (via PayPay Card), d払いカード features, others | Card-issuer credit-line economics; routes through 包括信用購入あっせん registration not 個別 |

The transaction model matters because: (a) per-transaction-invoice operators have very different unit economics from monthly-wallet operators (single-merchant fee vs. consumer-acquisition LTV); (b) installment / split-pay operators face different disclosure obligations under 改正割賦販売法 than ≤2-month single-payment exempted models; (c) card-issuer-backend BNPL is regulatorily a card-issuer feature, not a separate BNPL product.

## Credit-risk model decomposition

The operator-eats-loss vs merchant-eats-loss vs co-share line is one of the most consequential differences across the matrix. Three principal patterns exist:

| Risk model | Operators | Economic implication |
|---|---|---|
| **Operator-eats-loss (guarantee model)** | NP 後払い, Kuroneko Atobarai, Paidy, atone, most pure-plays | Merchant offloads receivables risk entirely; operator earns higher merchant fee to compensate; operator must run effective credit-screening + collection |
| **Merchant-eats-loss + operator-as-collector** | Some niche / smaller BNPL configurations | Merchant retains receivables risk; operator earns smaller fee for collection / billing services only |
| **Co-share / split-loss models** | Some GMO Postpay / Komoju Atobarai configurations | Merchant and operator share unrecovered-payment risk by formula; merchant fee adjusts |
| **Card-issuer credit-line model** | PayPay あと払い, shinpan-installment, card-issuer BNPL backends | Card-issuer / shinpan bears credit risk on the cardholder credit-line; consumer-side credit decision separate from per-transaction |

The pure-play BNPL operators almost universally use the operator-eats-loss model because that is what generates the merchant-fee economics that justify the operator's separate existence vs the merchant simply absorbing receivables. The structural challenge of operator-eats-loss is that the operator must absorb consumer-credit-cycle volatility on its balance sheet, which is why ABS pipeline access (per the funding-source analysis above) is so consequential to operator viability.

## Operator-cluster summary

Reading the matrix table together, four operator clusters emerge:

1. **Pure-play BNPL with operator-eats-loss model**: Net Protections HD / NP 後払い, atone, Kuroneko Atobarai (Yamato), Paidy under PayPal, Komoju Atobarai. These bear receivables risk and earn merchant fee; their economics are determined by underwriting model + ABS access.
2. **Wallet-anchored BNPL with multi-license stack**: Merpay / Mercari Smart Money, PayPay あと払い (via PayPay Card backend), d払い / au PAY extensions. These combine funds-transfer + 個別 or 包括 信用購入あっせん in various configurations and benefit from wallet-side consumer relationship + card-issuer ABS pipeline where applicable.
3. **Shinpan-rooted BNPL extensions**: APLUS, JACCS, Orico, Credit Saison. These are full shinpan operators that participate in the 個別 registry and offer BNPL-style products as one channel among many (auto-loan, education-loan, リフォーム, card, etc.). Their structural advantage is multi-line shinpan economics + bank-FG funding.
4. **Smaller / newer / vertical-specialist pure-plays**: Smarpay, Lattepay, b/43, plus the long tail of small 個別 registry operators. These face the highest consolidation pressure on a 5-10 year horizon given limited ABS access and limited cross-product LTV.

The cluster a reader assigns an operator to is a better predictor of its 3-5 year competitive trajectory than its current GMV or merchant count.

## Related

- [[payments/INDEX]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-consumer-credit-operator-comparison-matrix]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/japan-merchant-psp-competitive-scorecard]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/cashless-jp-landscape]]
- [[JapanFG/net-protections-hd]]
- [[JapanFG/atone]]
- [[JapanFG/kuroneko-atobarai]]
- [[JapanFG/gmo-postpay]]
- [[JapanFG/paidy]]
- [[JapanFG/mercari-hd]]
- [[JapanFG/merpay]]
- [[JapanFG/aplus]]
- [[JapanFG/jaccs]]
- [[JapanFG/orico]]
- [[JapanFG/credit-saison]]
- [[JapanFG/paypal-pte-ltd-japan]]
- [[JapanFG/paypay-card]]
- [[JapanFG/paypay]]
- [[JapanFG/sbi-shinsei-bank]]
- [[INDEX|FinWiki index]]

## Sources

- METI: 登録個別信用購入あっせん業者 PDF — https://www.meti.go.jp/policy/economy/consumer/credit/tourokukobetsuichiran.pdf
- METI: 登録包括信用購入あっせん業者 PDF — https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf
- METI: クレジットカード番号等取扱契約締結事業者 PDF — https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
- METI: registered operator lists portal — https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- METI: 割賦販売法 after-payment / 後払い FAQ — https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html
- METI: 改正割賦販売法 page — https://www.meti.go.jp/policy/economy/consumer/credit/11kappuhanbaihou.html
- Net Protections HD corporate / IR: https://corp.netprotections.com/ir/
- atone product page: https://www.atone.be/
- Yamato Group / Kuroneko Atobarai: https://www.kuronekoyamato.co.jp/ytc/business/option/payment/
- GMO Postpay: https://www.gmo-pp.co.jp/
- Paidy: https://paidy.com/
- Komoju Atobarai: https://komoju.com/ja/payments/atobarai/
- Mercari press releases: https://about.mercari.com/press/
- CAA (消費者庁) payment-trouble caution: https://www.caa.go.jp/policies/policy/consumer_policy/caution/internet/trouble/payment.html
- FSA: licensed / registered operators portal — https://www.fsa.go.jp/menkyo/menkyo.html
- Operator IR disclosure (公開分) for listed operators: [[JapanFG/net-protections-hd|Net Protections HD]] (TSE PRIME 7383), [[JapanFG/jaccs|JACCS]] (TSE PRIME 8584), [[JapanFG/orico|Orico]] (TSE PRIME 8585), [[JapanFG/credit-saison|Credit Saison]] (TSE PRIME 8253), [[JapanFG/mercari-hd|Mercari HD]] (TSE PRIME 4385)
