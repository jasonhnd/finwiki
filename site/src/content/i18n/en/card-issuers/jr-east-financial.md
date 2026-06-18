---
source: card-issuers/jr-east-financial
source_hash: c8d40555242971db
lang: en
status: machine
fidelity: ok
title: "JR East Financial Group (JR-East Financial Subsidiaries)"
translated_at: 2026-06-18T23:33:48.360Z
---

# JR East Financial Group (JR-East Financial Subsidiaries)

## Wiki route

This entry sits under [[card-issuers/INDEX|card-issuers INDEX]] as the **operating-company anchor** for the financial sub-sector of the JR East (East Japan Railway Company) group — specifically, the 3 -axis configuration of **View Card + JRE BANK (a BaaS bank account in partnership with Rakuten Bank) + Suica e-money / JR East Payment Service**. Read it against [[JapanFG/tokyu-card|東急カード（Tokyu Card）]] and [[JapanFG/odakyu-cards|小田急カード]] for transit-captive peer comparison, [[regional-banks/seven-bank|セブン銀行]] for retail-captive bank comparison, [[banking/baas-rakuten-jre-bank|楽天-JRE Bank BaaS]] for the bank-as-a-service architectural context, and [[payments/suica-pasmo-fares|Suica/PASMO 運賃エコシステム]] for the e-money / transit-IC integration layer.

## TL;DR

The cluster of financial functions of the JR East group. The core consists of ① **View Card** (the VIEW card-issuing subsidiary, which, centered on Suica-integrated cards, handles credit issuance across the entire JR East group), ② **JRE BANK** (opened 2024-05 , a JR East-branded bank account operated on [[banking/rakuten-bank|楽天銀行]] BaaS, granting train-fare discounts and point rewards), and ③ **Suica e-money / JR East Payment Service** (issuance and merchant network of the Suica transit IC card). JR East itself is **TSE PRIME 9020** (one of the largest names in transport / logistics), and its financial functions are positioned as a pillar of the **customer-lifestyle-base lock-in strategy** that accompanies the railway business. ^[extracted]

### 1.1 View Card Co., Ltd. (View Card)

| Item | Details |
|---|---|
| Formal name | View Card Co., Ltd. ^[extracted] |
| English name | VIEW Co., Ltd. |
| Parent company | East Japan Railway Company (consolidated subsidiary) |
| Main business | Credit card issuance (VIEW cards), Suica-integrated cards, merchant operations |
| Flagship cards | **View Suica Card** (Suica-integrated), Bic Camera Suica Card, JRE CARD, "Lumine Card" |
| International brands | VISA / Mastercard / JCB |

### 1.2 JRE BANK (opened 2024-05 )

| Item | Details |
|---|---|
| Trade name | JRE BANK (JR East-branded account, operated by [[banking/rakuten-bank|楽天銀行]]) |
| Opened | **2024-05-09** ^[extracted] |
| Bank license holder | **[[banking/rakuten-bank|楽天銀行]]** (JR East does not hold a banking license; a "branded bank" format via BaaS) |
| Benefits | **JRE POINT awards + fare discounts on JR East long-distance tickets** in accordance with deposit balance / transactions |
| Strategic significance | LTV improvement through turning railway customers into **lifestyle-account** holders |

### 1.3 JR East Payment Service + Suica

| Item | Details |
|---|---|
| Formal name | JR East Payment Service Co., Ltd. |
| Main business | Suica merchant operations, operation of the "**Suica Pay**" QR-code payment, mobile Suica periphery |
| Suica issuer | JR East itself (as part of the railway business) |
| Payment subsidiary | Merchant development, payment platform, in-store IC-terminal rollout |

## 2. Business lines (financial-function map)

| Function | Operator | Details |
|---|---|---|
| Credit card issuance | **View Card** | View Suica Card (Suica-integrated) at the core, with tie-ups such as Lumine Card, Bic Camera Suica Card, JRE CARD |
| Prepaid / transit IC | JR East itself + [[payments/suica-prepaid-jr-east|Suica]] | Integrated operation of transit fares + e-money, more than 100 万 merchants |
| QR-code payment | **JR East Payment Service** (Suica Pay) | Full-scale from 2023 onward, QR expansion of the Suica economic zone |
| Bank account | **JRE BANK** ([[banking/rakuten-bank|楽天銀行]] BaaS) | Opened 2024-05 , branded-bank model |
| Point ecosystem | JRE POINT | Rewards on card use, Suica top-up, JR rides, and JRE BANK deposits |
| Corporate EC / ticketing | Ekinet, etc. | Payment infrastructure for group EC |

## 3. Parent-company relationship (within the JR East consolidation)

```
East Japan Railway Company (TSE PRIME 9020)
  ├── Transport business (railways / Shinkansen, core)
  ├── Retail & services business (in-station)
  │     ├── Lumine ── station building
  │     ├── Atré ── station building
  │     └── NewDays ── station kiosks
  ├── Real estate & hotels
  └── Financial group (this page)
        ├── View Card Co., Ltd. ── credit cards (VIEW cards)
        ├── JR East Payment Service Co., Ltd. ── Suica merchant operations / Suica Pay operation
        ├── JRE BANK ── branded bank account ([[banking/rakuten-bank|楽天銀行]] BaaS)
        └── Suica e-money infrastructure ── infrastructure within the railway business, directly run by JR East
```

### Strategic significance (full-stack financialization of a railway company)

- A **seamless customer-LTV** model of railway boarding (Suica) → in-station commerce (Lumine, etc.) → credit card (View Card) → bank account (JRE BANK) → points (JRE POINT)
- The same trend as competitor private railways such as Tokyu and Odakyu building their **private-railway financial groups** (see [[JapanFG/tokyu-card|東急カード]] / [[JapanFG/odakyu-cards|小田急カード]])
- The difference is that **the scale of the metropolitan-area railway business (annual passenger numbers + Suica cards in circulation) is overwhelming**, giving it a unique scale economy

## 4. KPIs (based on public information)

| Metric | Figure / scale |
|---|---|
| **View Card active members** | Approx. 570 万 (2023 年 actual; approx. 550 万 at the start of 2022 年) |
| **Suica cards issued (cumulative)** | More than 1 億 (mobile Suica + card Suica combined, centered on the metropolitan area + Sendai + Niigata regions) ^[likely] |
| **Suica merchants** | More than 100 万 (stores supporting e-money top-up / payment) |
| **JRE POINT members** | Approx. 1,417 万 (2023-07; target of approx. 1,500 万 at the end of the same fiscal year). Under the group-ID integration concept, the target is a base of approx. 5,000 万 across transit and lifestyle by FY 2027 年 |
| **JR East consolidated financial-segment profit** | Small relative to the core railway business, but plays a strategic role in strengthening added value and loyalty |

> Detailed financials are disclosed in JR East's securities report under the "Retail & Services Business" and "Other" segments. For the latest figures, refer to the official IR.

### 5.1 Lock-in of railway customers' lifestyle base

- A **seamless "railway → in-station → credit card → bank → points"** loyalty loop
- The same strategic axis as competitors Tokyu ([[JapanFG/tokyu-card|東急カード]]) and Odakyu ([[JapanFG/odakyu-cards|小田急カード]]), but JR East has a scale advantage with its broad coverage of **the metropolitan area + Tohoku + Shin-etsu**

### 5.2 JRE BANK's BaaS model (2024 onward)

- Rather than obtaining a banking license in-house, it leverages [[banking/rakuten-bank|楽天銀行]]'s BaaS (Banking as a Service) platform
- The **"branded bank account"** model contrasts with in-house banks such as [[regional-banks/seven-bank|セブン銀行]]; a trade-off between license costs vs. leveraging brand assets
- Offers **fare discounts on long-distance tickets** as a deposit benefit → a clear synergy with the railway business
- Competition: a different approach from [[regional-banks/seven-bank|セブン銀行]] / [[card-issuers/aeon-bank|イオン銀行]], which hold their own banks

### 5.3 Turning Suica into a payment platform

- Stepwise expansion from transit fares → e-money → QR-code payment (Suica Pay, full-scale from 2023 ) → mobile Suica (Apple Pay / Google Pay support)
- Competition: the QR-payment players [[payments/paypay|PayPay]] / [[payments/d-barai|d 払い]] / [[megabanks/au-fh|au PAY]] / [[payments/rakuten-pay|楽天ペイ]]

### 5.4 Degree of integration of group financial functions

- View Card, JR East Payment Service, and JRE BANK exist side by side as **3  subsidiaries / brands**, with room for internal IT integration and customer-ID integration
- A medium-term strategy to promote the "**JRE economic zone**" across the entire JR East group ^[likely]

## 6. Regulation / supervision

| Item | Details |
|---|---|
| View Card | Installment Sales Act (METI), Money Lending Business Act (FSA) |
| Suica (prepaid) | Payment Services Act (prepaid funds-transfer business), FSA supervision |
| Suica Pay / merchant operations | Payment Services Act (prepaid payment instrument issuer) |
| JRE BANK | [[banking/rakuten-bank|楽天銀行]] holds the banking license → FSA banking supervision |
| Parent JR East | MLIT (railway business) + FSA (consolidation of financial subsidiaries) |

## Related

- JR East (parent company, TSE PRIME 9020)
- [[banking/rakuten-bank]] — JRE BANK's BaaS partner
- [[JapanFG/tokyu-card]] — private-railway financial-subsidiary peer
- [[JapanFG/odakyu-cards]] — private-railway financial-subsidiary peer
- [[regional-banks/seven-bank]] — retail-sector bank peer (in-house bank type)
- [[card-issuers/aeon-bank]] — retail-sector bank peer (in-house bank type)
- [[payments/suica-prepaid-jr-east]] — Suica ecosystem
- [[payments/suica-pasmo-fares]] — transit IC fare ecosystem
- [[banking/baas-rakuten-jre-bank]] — BaaS architecture
- [[card-issuers/INDEX]] — JapanFG namespace index

## Sources

- JR East official: company overview (aboutus/profile/)
- JR East official: JRE BANK guide (lifeservice/jrebank.html)
- JR East official: Suica guide (eki-net/Suica/)
- View Card official: company overview (viewsnet.jp/company/profile.html)
- JR East Payment Service official: company overview
- Wikipedia: East Japan Railway / View Card / JRE BANK (public information, extracted 2026-05-25)
- View Card active members (approx. 570 万 / FY 2023 年, approx. 550 万 / start of 2022 年): View Card official, JR East interview article (Business + IT, "A 'point lifestyle zone' built on Suica" https://www.sbbit.jp/article/fj/82231)
- JRE POINT members (approx. 1,417 万 / 2023-07, target approx. 1,500 万, integration concept approx. 5,000 万 / FY 2027 年): Payment Navi (https://paymentnavi.com/paymentnews/134420.html), Ryutsuu News (https://www.ryutsuu.biz/topix/i022302.html), JR East FACT BOOK 2025

---

> [!info] 校核状态
> confidence: **likely** (based on v1.1  public information, extracted 2026-05-25 / ambiguous re-examination 2026-05-29). The JRE BANK opening date (2024-05-09), operation via [[banking/rakuten-bank|楽天銀行]] BaaS, the View Card subsidiary, and the JR East Payment Service subsidiary are confirmed by public information. **View Card active members (approx. 570 万, FY 2023 年) and JRE POINT members (approx. 1,417 万, 2023-07) are included with sources** (converting the former ambiguous bands of "several million" and "tens of millions of IDs" into actual figures. "Tens of millions" is an exaggeration; JRE POINT is accurately at around 1,400 万. Approx. 5,000 万 is the integrated-ID target for FY 2027 年, not the current value). Suica cards issued of more than 1 億 remains an estimate (^[likely]). The forecast for the number of JRE BANK accounts (former "scale of several hundred thousand accounts") and future forecasts regarding Suica Pay's QR strategy choice are isolated to `.opinions/JapanFG/jr-east-financial.md` (as they are not publicly disclosed account numbers from primary disclosure).
