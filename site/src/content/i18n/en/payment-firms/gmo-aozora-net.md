---
source: payment-firms/gmo-aozora-net
source_hash: ecc9ba5ced5fec7a
lang: en
status: machine
fidelity: ok
title: "GMO Aozora Net Bank"
translated_at: 2026-05-31T15:29:03.952Z
---

# GMO Aozora Net Bank

## Wiki route

This entry sits under [[payment-firms/INDEX|payment-firms INDEX]]. Read it against [[regional-banks/ssnb|SBI Sumishin Net Bank, now docomo SMTB Net Bank]] for peer / contrast context and [[banking/INDEX|banking index]] for the broader system / regulatory boundary.

## TL;DR

**Corporate specialized BaaS (Banking as a Service) based internet bank**. Based on the former **Aozora Trust Bank** ([[aozora-bank]] subsidiary), 2018 - 07  **GMO Internet Group** acquired the majority of voting rights and changed its name to become an online bank. After the reorganization of class shares, the shareholder composition will be **Common stock (shareholding) ratio: Aozora Bank 50.00% / GMO Internet Group 25.00% / GMO Financial Holdings 25.00%**, **Voting rights ratio: Aozora Bank 85.12% / GMO each 7.43% **( 2026-02-20 At the time, part of Aozora's holdings were classified shares with restricted voting rights, so there was a discrepancy between the shareholding ratio and the voting rights ratio. **Unlike Rakuten Bank, PayPay Bank, and SBI Sumishin Internet Banks, which focus on individuals, we focus on corporate accounts + API linkage for freelancers, startups, and fintech.** Representative services are "**Anshin Wide**" (business loans for corporations) and "**Bank API for Developers**". The company is building its position through strategic alliances with fintech companies such as freee, Money Forward, Square, and Stripe. ^[extracted]

## 1. Company profile

**Official name**: GMO Aozora Net Bank, Inc. ^[extracted]
**English name**: GMO Aozora Net Bank, Ltd.
**Established**: 2004 - 04 (Started as Aozora Trust Bank) ^[extracted]
**Current structure launched**: 2018 - 07 (GMO Internet Group acquired majority → renamed) ^[extracted]
**Head office**: Shibuya-ku, Tokyo ^[extracted]
**Business type**: Banking business (regular bank/net bank)

### Major shareholders (as of 2026-02-20, official company profile)

| Shareholders | Shareholding ratio | Voting rights ratio |
|---|---|---|
| [[aozora-bank]] (TSE PRIME 8304 ) | 50.00% | 85.12% |
| GMO Internet Group (TSE PRIME 9449 ) | 25.00% | 7.43% |
| GMO Financial Holdings | 25.00% | 7.43% |

> Background: GMO initially invested 15% in 2016-05, then converted the entity into an internet bank in 2018-07 by acquiring majority voting rights. Under the 2016 shareholder agreement, in 2023 Aozora Bank transferred certain class shares to GMO Financial Holdings. On a common-stock shareholding basis, Aozora holds 50% and the two GMO entities together hold 50%; because part of Aozora's position consists of voting-restricted class shares, the voting-rights ratio is **Aozora 85.12% / each GMO entity 7.43%**. The ratio can move with IR disclosures; use the latest company disclosures for current figures.

### Position within group

```
GMO Internet Group (TSE PRIME 9449; Masatoshi Kumagai)
  +-- GMO Aozora Net Bank (25% held by GMO IG + 25% by GMO FH; 7.43% voting rights each) -- corporate BaaS internet bank
  +-- GMO Payment Gateway (TSE PRIME 3769) -- payment-processing ICT
  +-- GMO Coin -- crypto-asset exchange
  +-- GMO Click Securities -- online securities and FX
  +-- GMO Cloud / GMO Pepabo -- infrastructure and hosting
  +-- GMO Research / GMO Ad Partners -- advertising and research
[[aozora-bank]]（東証 PRIME 8304）
  +-- GMO Aozora Net Bank (50% shareholding, 85.12% voting rights, mainly class shares) -- largest shareholder
```

### History ^[extracted]

| Month | Event |
|---|---|
| 2004 - 04  | **Aozora Trust Bank** Opening ([[aozora-bank]] 100% Subsidiary, mainly trust business) |
| 2016 - 05  | GMO Internet invests 15% in Aozora Trust Bank → Preparation for joint venture to convert to online banking |
| 2018 - 07  | **GMO majority ownership → GMO Aozora Net Bank renamed and begins operations** (individual/corporate account opening begins) |
| 2019 ~ | Corporate fintech linked accounts are the axis of growth. freee / Expanding API collaboration with Money Forward, etc. |
| 2020 ~ | “Anshin Wide” (corporate business loan) launched, accelerating collaboration with BaaS partners |
| 2022 ~ | Expanding cooperation with payment fintech such as Stripe / Square / Wise |
| 2023  | Transfer of class shares held by Aozora Bank to GMO Financial Holdings (based on shareholders' agreement) |

## 2. Business segment map

| Segment | Main Business | Features |
|---|---|---|
| Corporate accounts | Freelance, sole proprietorship, and startup accounts | Completion of opening procedures online and same-day opening available for fintech customers |
| Corporate loans | **Anshin Wide** (unsecured business loans) | AI credit model + GMO PG payment data linkage |
| API / BaaS | **Bank API for Developers** | For corporations/fintech (open API for balance inquiries, transfers, account opening, etc.) |
| Partner collaboration | freee / Money Forward / Square / Stripe / Wise, etc. | Accounts directly linked to accounting/payment SaaS |
| Personal account | For freelancers and side businesses | Avoid direct competition with personal-specific net banks (Rakuten / PayPay / Sumishin SBI, etc.) |
| Crypto asset collaboration | [[gmo-coin]] (sister company) | Synergy within the GMO group |
| Payment linkage | GMO Payment Gateway (sister company/TSE PRIME 3769) | Payment processing/merchant data linkage |

### Differentiation of corporate BaaS axis

- **Change the battlefield from online banks specializing in individuals (Rakuten Bank / PayPay Bank / [[regional-banks/ssnb|sbi-sumishin-net]] / au Jibun Bank, etc.)**: Don't compete with the number of individual accounts, focus on **corresponding to corporate BaaS and API economy**
- "Anshin Wide" (corporate business loan) uses GMO Payment Gateway's payment data for credit → Typical group synergy
- Target is "**Small and medium-sized businesses/individual business owners who already use accounting SaaS/payment SaaS/cloud ERP**" — Standard position for fintech linked accounts

### Synergy with parent GMO

- **GMO Payment Gateway** (payment) / ** [[gmo-coin]] ** (crypto assets) / **GMO Click Securities** (securities/FX) and mutual referral
- Banking layer of the entire GMO Group's "**Internet Financial Economic Zone**" (payments + securities + crypto assets + banks)
- Although it is small compared to the economic zone of Rakuten, PayPay, and SBI, it is a position that is clearly aimed at the corporate/freelance class.

### API / Open Banking Strategy

- "**Bank API for Developers**": Open API for balance inquiries, transfers, account opening, etc. for fintech developers.
- Directly connected to accounting clouds such as freee / Money Forward → Deposits and withdrawals are automatically recorded
- Connect with overseas payment fintech such as Stripe / Square → Cross-border payment support
- Capture the segment difference between "**individual fintech focuses on payments**" and "corporate fintech focuses on accounting/expenses/credit**"

> Observational reports and speculation regarding the possibility of listing are isolated in `.opinions/JapanFG/gmo-aozora-net.md` (2026-05-29, unconfirmed).

## 4. Regulation/Policy

- **Supervising**: Financial Services Agency (FSA)
- **Business type**: Bank under the Banking Act (ordinary bank)
- **Deposit insurance**: Participated in Deposit Insurance Corporation
- **API Regulation**: Obligation to provide Open API based on the Banking Act Amendment (2017) → “Bank API for Developers” is a systematic extension of this
- **Connection with funds transfer industry/virtual currency industry**: Integration of multi-business licenses is an issue in collaboration with [[gmo-coin]] within the GMO Group and GMO Payment Gateway
- **Money laundering regulations**: Stricter identification/substantive controller verification for opening corporate accounts (2023 ~ FATF 4 st screening compatible)

## Related

- [[aozora-bank]] (Former parent company/current ~ 15% shareholder)
- [[gmo-coin]] (Sister company/Crypto assets)
- [[regional-banks/ssnb|sbi-sumishin-net]] (Sumishin SBI Internet Bank/Competitor BaaS)
- [[banking/paypay-bank|paypay-bank]] · [[banking/rakuten-bank|rakuten-bank]] · [[banking/au-jibun-bank|au-jibun-bank]] (Personal online bank/separate battlefield)
- [[banking/minna-bank-baas-model|minna-bank]] · [[banking/mercari-bank|mercari-bank]] (New BaaS/digital bank from regional banks/competitor)
- [[banking/baas-japan-landscape]] (^[planned] Japan BaaS Map)

## Sources

- **Wikipedia: GMO Aozora Net Bank** (https://ja.wikipedia.org/wiki/GMO Aozora Net Bank, 2026-05-19 extract)
- **GMO Aozora Net Bank Official Website** (see https://gmo-aozora.com/, 2026-05-19)
- **GMO Internet Group IR** (see TSE PRIME 9449,  2026-05-19)
- GMO Aozora Net Bank Company Profile (Holding: Aozora 50% / GMO IG 25% / GMO FH 25%, Voting Rights: Aozora 85.12% / GMO 7.43%, 2026-02-20) — https://gmo-aozora.com/company/outline.html
- GMO Internet Group “Notice regarding acquisition of GMO Aozora Net Bank class shares” (2023-06-19, transfer of class shares based on shareholder agreement) — https://group.gmo/news/article/ 8450 /

---

> [!info] Verification status
> confidence: **likely** (Wikipedia + official + parent GMO IR base 2026-05-19, corrected shareholder composition to 2026-05-29 in official company profile). **The shareholder composition originally stated was incorrect as "GMO ~ 85% / Aozora ~ 15%"** — Correctly, the shareholding ratio is Aozora 50.00% / GMO IG 25.00% / GMO FH 25.00%, and the voting rights ratio is Aozora 85.12% / GMO and each 7.43% (2026-02-20, discrepancy due to class stock). Please refer to the GMO Aozora Net Bank company profile and each company's IR for the latest values. Listing preparation reports are isolated to `.opinions` without corroboration. Quantitative data such as loan balance/number of API partners has not been collected (needs to be supplemented).
