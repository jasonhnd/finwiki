---
source: payment-firms/gmo-aozora-net
source_hash: 7a1bedacc22bc1e1
lang: en
status: machine
fidelity: ok
title: "GMO Aozora Net Bank"
translated_at: 2026-07-30T00:00:00+09:00
---

# GMO Aozora Net Bank

## Wiki route

This entry sits under [[payment-firms/INDEX|payment-firms INDEX]]. Read it against [[regional-banks/ssnb|住信 SBI ネット銀行 (SBI Sumishin Net Bank) → ドコモ SMTB ネット銀行]] for peer / contrast context and [[banking/INDEX|banking index]] for the broader system / regulatory boundary.

## TL;DR

A net bank **anchored on a corporate-focused BaaS (Banking as a Service) axis**. It developed from the former **Aozora Trust Bank**, originally a wholly owned [[regional-banks/aozora-bank|Aozora Bank]] subsidiary, and was renamed and converted into a net bank in 2018-07 after preparations for the GMO joint venture. The official company profile reports **share ownership of Aozora Bank 50.00% / GMO Internet Group 25.00% / GMO Financial Holdings 25.00%** and **voting rights of Aozora Bank 85.12% / the two GMO companies 7.43% each** as of 2026-02-20. The former statement that GMO acquired a voting majority was therefore incorrect; Aozora Bank is the current voting-control shareholder. **Unlike retail-focused Rakuten Bank, PayPay Bank, and SBI Sumishin Net Bank, it centers corporate accounts for freelancers, startups, and fintech integrations plus API connectivity.** Its representative services are **Anshin Wide** and **Bank API for Developers**, supported by partnerships with freee, Money Forward, Square, Stripe, and other fintechs. ^[extracted]

## 1. Company overview

**Legal name**: GMO Aozora Net Bank, Ltd. ^[extracted]
**English name**: GMO Aozora Net Bank, Ltd.
**Established**: 2004-04 (opened as Aozora Trust Bank) ^[extracted]
**Current structure launched**: 2018-07 (renamed and launched net-bank operations after GMO joint-venture preparations; current Aozora voting rights are 85.12%) ^[extracted]
**Headquarters**: Shibuya-ku, Tokyo ^[extracted]
**Business type**: Banking business (ordinary bank / net bank)

### Major shareholders (as of 2026-02-20, official company overview)

The following table is scoped to public primary sources (gmo-aozora.com, group.gmo). It restates licence / structure / product boundaries from those materials and does not invent market share, ranking, or unstated numerical claims. ^[source:gmo-aozora.com; group.gmo]

| Shareholder | Shareholding ratio | Voting-rights ratio |
|---|---|---|
| [[regional-banks/aozora-bank]] (TSE PRIME 8304) | 50.00% | 85.12% |
| GMO Internet Group (TSE PRIME 9449) | 25.00% | 7.43% |
| GMO Financial Holdings | 25.00% | 7.43% |

> Background: GMO invested in 2016-05, and the bank converted to the net-bank model in 2018-07. Under the 2016 shareholders' agreement, class shares held by Aozora Bank were transferred to GMO Financial Holdings in 2023. Share ownership is Aozora 50% / the two GMO companies 50% in total, but the class-share voting design means **Aozora holds 85.12% of voting rights and the two GMO companies 7.43% each**. The ratios can change with disclosure, so use current company and shareholder materials.

### Position within the group

```
GMO 互联网集团（东证 PRIME 9449・熊谷正寿）
  ├── GMO 青空网络银行（持股 25% [GMO IG] + 25% [GMO FH]，表决权各 7.43%）── 法人 BaaS 网络银行
  ├── GMO Payment Gateway（东证 PRIME 3769）── 结算处理 ICT
  ├── GMO Coin ── 加密资产交易所
  ├── GMO Click 证券 ── 网络证券・FX
  ├── GMO Cloud / GMO Pepabo ── 基础设施・主机托管
  └── GMO Research / GMO AD Partners ── 广告・调查
[[regional-banks/aozora-bank]]（东证 PRIME 8304）
  └── GMO 青空网络银行（持股 50%・表决权 85.12%，以种类股票为主）── 第一大股东
```

### History ^[extracted]

The following table is scoped to public primary sources (gmo-aozora.com, group.gmo). It restates licence / structure / product boundaries from those materials and does not invent market share, ranking, or unstated numerical claims. ^[source:gmo-aozora.com; group.gmo]

| Year/month | Event |
|---|---|
| 2004-04 | **Aozora Trust Bank** opens (a [[regional-banks/aozora-bank]] 100% subsidiary, centered on trust operations) |
| 2016-05 | GMO Internet invests 15% in Aozora Trust Bank → prepares a joint venture for conversion to a net bank |
| 2018-07 | **Renamed GMO Aozora Net Bank and launches net-bank operations** (begins opening individual and corporate accounts; GMO did not acquire a voting majority) |
| 2019 onward | Corporate fintech-linked accounts become the growth axis. API connectivity with freee / Money Forward, etc., expands |
| 2020 onward | "Anshin Wide" (a corporate business loan) launches; BaaS-partner linkage accelerates |
| 2022 onward | Linkage with payment fintechs such as Stripe / Square / Wise expands |
| 2023 | Class shares held by Aozora Bank transferred to GMO Financial Holdings (based on the shareholders' agreement) |

## 2. Business segment map

The following table is scoped to public primary sources (gmo-aozora.com, group.gmo). It restates licence / structure / product boundaries from those materials and does not invent market share, ranking, or unstated numerical claims. ^[source:gmo-aozora.com; group.gmo]

| Segment | Main business | Features |
|---|---|---|
| Corporate accounts | Freelancer / sole-proprietor / startup accounts | Online-completed account-opening procedures, same-day-opening support; strong in the fintech layer |
| Corporate loans | **Anshin Wide** (unsecured business loan) | AI credit model + GMO PG settlement-data linkage |
| API / BaaS | **Bank API for Developers** | For corporations / fintech (opening up APIs for balance inquiry, transfer, account opening, etc.) |
| Partner linkage | freee / Money Forward / Square / Stripe / Wise, etc. | Accounts directly connected to accounting / settlement SaaS |
| Individual accounts | For the freelancer layer / side-job layer | Avoids head-on confrontation with individual-focused net banks (Rakuten / PayPay / Sumishin SBI, etc.) |
| Crypto-asset linkage | [[payment-firms/gmo-coin]] (sibling company) | Synergy within the GMO group |
| Settlement linkage | GMO Payment Gateway (sibling company, TSE PRIME 3769) | Settlement processing / merchant-data linkage |

### Differentiation on the corporate-BaaS axis

- **Changing the battlefield from individual-focused net banks (Rakuten Bank / PayPay Bank / [[regional-banks/ssnb|sbi-sumishin-net]] / au Jibun Bank, etc.)**: rather than competing on individual-account count, it concentrates on **responding to corporate BaaS and the API economy**
- "Anshin Wide" (a corporate business loan) leverages GMO Payment Gateway's settlement data for credit assessment → a textbook case of group synergy
- The target is the layer of "**SMEs / sole proprietors who already use accounting SaaS / settlement SaaS / cloud ERP**" — the standard position of a fintech-linked account

### Synergy with parent GMO

- Mutual customer routing with **GMO Payment Gateway** (settlement) / **[[payment-firms/gmo-coin]]** (crypto assets) / **GMO Click Securities** (securities, FX)
- The banking layer of the entire GMO group's "**internet financial economic zone**" (settlement + securities + crypto assets + banking)
- Smaller in scale compared with the economic zones of Rakuten / PayPay / SBI, but a position clearly committed to the **corporate / freelancer layer**

### API / Open Banking strategy

- "**Bank API for Developers**": developing the opening-up of APIs for balance inquiry, transfer, account opening, etc., for fintech developers
- Directly connected to accounting clouds such as freee / Money Forward → receipts and payments are automatically recorded
- Also connected to overseas payment fintechs such as Stripe / Square → supporting cross-border settlement
- Capturing the segment difference of "**individual fintech is settlement-centered**" vs "**corporate fintech is accounting / expense / credit-centered**"

> Observational reporting and speculation regarding the possibility of a listing are isolated in `.opinions/JapanFG/gmo-aozora-net.md` (2026-05-29, no confirmation).

## 4. Regulation & policy

- **Supervisor**: Financial Services Agency (FSA)
- **Business type**: a bank under the Banking Act (ordinary bank)
- **Deposit insurance**: member of the Deposit Insurance Corporation
- **API regulation**: the Open API provision obligation based on the amended Banking Act (2017) → "Bank API for Developers" is an institutional extension thereof
- **Connection with funds-transfer business / virtual-currency business**: the integration of multiple business-law licenses through linkage with [[payment-firms/gmo-coin]] within the GMO group or with GMO Payment Gateway is an issue
- **Anti-money-laundering regulation**: tightening of identity verification / beneficial-owner verification for corporate account-opening (from 2023, response to the FATF 4 th-round review)

## Related

- [[regional-banks/aozora-bank]] (50.00% share ownership / 85.12% voting-control shareholder as of 2026-02-20)
- [[payment-firms/gmo-coin]] (sibling company, crypto assets)
- [[regional-banks/ssnb|sbi-sumishin-net]] (SBI Sumishin Net Bank, competing BaaS)
- [[banking/paypay-bank|paypay-bank]] · [[banking/rakuten-bank|rakuten-bank]] · [[banking/au-jibun-bank|au-jibun-bank]] (individual net banks, a different battlefield)
- [[banking/minna-bank-baas-model|minna-bank]] · [[banking/mercari-bank|mercari-bank]] (new-type BaaS / regional-bank-originated digital banks, competitors)
- [[banking/baas-japan-landscape]] (^[planned] Japan BaaS map)

## Sources

- **Wikipedia: GMO Aozora Net Bank** (https://ja.wikipedia.org/wiki/GMOあおぞらネット銀行, 2026-05-19 extraction)
- **GMO Aozora Net Bank official site** (https://gmo-aozora.com/, 2026-05-19 reference)
- **GMO Internet Group IR** (TSE PRIME 9449, 2026-05-19 reference)
- GMO Aozora Net Bank company overview (shareholding: Aozora 50% / GMO IG 25% / GMO FH 25%; voting rights: Aozora 85.12% / GMO 7.43% each, 2026-02-20) — https://gmo-aozora.com/company/outline.html
- GMO Internet Group "Notice Regarding Acquisition of Class Shares of GMO Aozora Net Bank" (2023-06-19, class-share transfer based on the shareholders' agreement) — https://group.gmo/news/article/8450/

---

> [!info] Verification status
> confidence: **likely** (based on Wikipedia + official + parent GMO IR 2026-05-19; the shareholder composition was corrected with the official company overview in 2026-05-29). **The shareholder composition originally recorded as "GMO ~85% / Aozora ~15%" is incorrect** — correctly it is, on a shareholding-ratio basis, Aozora 50.00% / GMO IG 25.00% / GMO FH 25.00%, and on a voting-rights-ratio basis, Aozora 85.12% / GMO's two companies 7.43% each (2026-02-20, divergence due to class shares). For the latest values, refer to the GMO Aozora Net Bank company overview and each company's IR. The listing-preparation reporting is unconfirmed and isolated to `.opinions`. Quantitative data such as loan balances / API-partner count has not been collected (supplementation needed).
