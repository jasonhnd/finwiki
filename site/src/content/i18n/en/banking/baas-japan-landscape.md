---
source: banking/baas-japan-landscape
source_hash: 5483848c42f6a179
lang: en
status: machine
fidelity: ok
title: "Japan BaaS landscape"
translated_at: 2026-06-18T23:33:48.303Z
---

# Japan BaaS landscape

## Wiki route

This entry sits under [[banking/INDEX|banking index]]. Read it against [[banking/minna-bank-baas-model|みんなの銀行 BaaS model]] for peer / contrast context and [[banking/cooperative-banking-japan|Cooperative banking in Japan]] for the broader system / regulatory boundary.

## TL;DR

Japan's BaaS is not a single "bank API product." It splits into at least 4  types: API provision, partner branches, banking-agency / white-label-style account acquisition, and the narrow BaaS specialized in payment, account transfer, and instant deposit. [[banking/minna-bank-baas-model|みんなの銀行]] is compared as embedded BaaS for B2C apps, [[payment-firms/gmo-aozora-net|GMO あおぞらネット銀行]] as corporate / API / embedded-finance leaning, and [[regional-banks/ssnb|住信SBIネット銀行]] as the NEOBANK type.

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
