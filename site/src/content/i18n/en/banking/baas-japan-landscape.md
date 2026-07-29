---
source: banking/baas-japan-landscape
source_hash: bdb646870885f3e9
lang: en
model: source-language-sync
status: machine
fidelity: ok
title: "Japan BaaS landscape"
translated_at: 2026-07-29T03:30:48.094Z
---

# Japan BaaS landscape

## Wiki route

This entry sits under [[banking/INDEX|banking index]]. Read it against [[banking/minna-bank-baas-model|みんなの銀行 BaaS model]] for peer / contrast context and [[banking/cooperative-banking-japan|Cooperative banking in Japan]] for the broader system / regulatory boundary.

## TL;DR

日本の BaaS は、単一の「銀行 API 商品」ではない。少なくとも 4 類型に分かれる: API 提供、パートナー支店、銀行代理 / white-label 的な口座獲得、そして決済・口座振替・即時入金に特化した narrow BaaS。[[banking/minna-bank-baas-model|みんなの銀行]] は B2C アプリへの埋め込み型 BaaS、[[payment-firms/gmo-aozora-net|GMO あおぞらネット銀行]] は法人 / API / 組込金融寄り、[[regional-banks/ssnb|住信SBIネット銀行]] は NEOBANK 型で比較される。

## Landscape map

| Type | What is embedded | Main value | Typical examples |
|---|---|---|---|
| API-provided banking | Account information, account transfer, payment instruction | External app UX improvement | みんなの銀行 API提供モデル, [[banking/quick-deposit-four-methods|OAuth quick deposit]] |
| Partner branch | Branded branch / account experience | Partner brand + banking relationship | [[banking/mercari-bank|Mercari Bank]], pixiv branch, DMM branch |
| NEOBANK / white-label bank | Bank account opened under partner proposition | Fuller embedded banking | [[regional-banks/ssnb|SSNB]] / NEOBANK type models |
| Corporate API bank | Business account, payment, transfer, accounting integration | SME / SaaS / platform operation | [[payment-firms/gmo-aozora-net|GMO Aozora Net Bank]] adjacency |

## Strategic read

BaaS is a customer-acquisition strategy for banks and a license-leverage strategy for platforms. Banks gain distribution through high-frequency non-bank apps; platforms gain banking functions without becoming deposit-taking banks.

The Japan-specific constraint is that UX and legal status do not move together. A user may feel that a marketplace, securities app, or retail app has become a bank, while the actual banking layer remains with a licensed bank. The front-end brand, API connector, payment license, and deposit contract can all belong to different entities.

## Why Minna Bank matters

みんなの銀行 is a clean case because it publicly frames BaaS as「+金融」and separates API提供モデル from パートナー支店モデル. Its partner list also shows BaaS moving beyond pure finance into creative marketplaces, HR, retail, insurance, FX, entertainment, and C2C commerce.

The 2025-12 Mercari launch is especially important because Mercari has a large wallet / sales-proceeds context. If BaaS can turn non-bank balances into bank deposits with low friction, BaaS becomes more than a referral channel.

## Regulatory / operating constraints

| Constraint | Meaning |
|---|---|
| Banking license | Deposit-taking and bank account operations remain with licensed banks |
| Electronic payment agency | API-based account information and payment instruction may require registration |
| Funds transfer / prepaid instruments | Wallet balances and payment flows can sit outside the deposit bank |
| AML / fraud monitoring | Embedded UX does not remove bank-grade monitoring duties |
| Responsibility boundary | User-facing brand and regulated service provider may differ |

Sources: this table is a role-boundary summary. Bank-license status and electronic-payment-agency status must be checked against the current FSA registers; Minna Bank's pages support only its own disclosed BaaS models and partners. ^[Sources: https://www.fsa.go.jp/menkyo/menkyo.html; https://www.fsa.go.jp/common/shinsei/dendai/index.html; https://baas.minna-no-ginko.com/; https://www.minna-no-ginko.com/alliance-service/.]

## Related

- [[banking/minna-bank-baas-model]]
- [[banking/mercari-bank]]
- [[banking/mercari-bank-license-stack]]
- [[banking/quick-deposit-four-methods]]
- [[payment-firms/gmo-aozora-net]]
- [[regional-banks/ssnb]]
- [[fintech/japan-financial-regulation]]

## Sources

- みんなの銀行: みんなのBaaS official service page.
- FFG IR Day, 2025-09-08: みんなの銀行の事業戦略.
- みんなの銀行: 提携サービス / BaaS overview.
- 金融庁: 免許・許可・登録等を受けている事業者一覧.
- 金融庁: 電子決済等代行業者の登録・届出制度.
