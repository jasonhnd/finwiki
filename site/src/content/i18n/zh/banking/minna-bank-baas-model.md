---
source: banking/minna-bank-baas-model
source_hash: e10f75fa56437b80
lang: zh
status: machine
fidelity: ok
title: "みんなの銀行 BaaS model"
translated_at: 2026-05-31T03:19:56.356Z
---

# みんなの銀行 BaaS model

## Wiki route

This entry sits under [[banking/INDEX|banking index]]. Read it against [[banking/mercari-bank-license-stack|メルカリバンク license stack]] for peer / contrast context and [[banking/cooperative-banking-japan|Cooperative banking in Japan]] for the broader system / regulatory boundary.

## TL;DR

みんなの銀行的 BaaS,以将银行功能嵌入外部 App 的 **API 提供模式**,与持有合作企业品牌的 **合作支行模式** 的组合运作。关键在于,其差异并不在于「是否持有银行牌照」,而在于用户触点、品牌、API 对接的深度。[[banking/mercari-bank|Mercari Bank]] 是将这一 BaaS 搭载于 mercari 强大生活动线之上的代表案例。

## Model map

| Model | What changes | User experience | Representative links |
|---|---|---|---|
| API 提供模式 | Partner app connects to Minna Bank functions through APIs | Bank account / payment / balance functions appear inside the partner service | [[banking/quick-deposit-four-methods|Quick deposit four methods]], [[banking/mercari-bank-license-stack|Mercari Bank license stack]] |
| 合作支行模式 | A branch with partner branding is created inside Minna Bank's banking structure | The partner's users see a branded banking front, such as mercari 支行 | [[banking/mercari-bank|Mercari Bank]], pixiv / DMM / ignica / and ST cases |
| Hybrid | Partner branch plus API integration | Branded branch + seamless fund movement / account information inside the partner app | Mercari / Merpay × Minna Bank |

## Strategic read

みんなの銀行的 BaaS,是一种把网络银行的「账户获取」从单靠自家 App 转向外部化至非金融服务客户基础的战略。在 FFG / みんなの銀行方面的资料中,展示了经由 BaaS 合作伙伴增加账户获取、未来将 B2C 账户与 BaaS 账户比例反转的方向性。

这一模式的强项在于,银行并非单纯出售 API,而是把合作企业的生活触点转化为银行触点。mercari 是销售款、外为どっとコム是入金、ignica 是购物、pixiv 是创作者结算,如此这般地把银行功能插入既有的使用情境之中。

## License boundary

「BaaS partner = 银行业者」并不成立。存款账户、银行功能的主体是みんなの銀行,合作方一侧依其所提供的功能,持有 API 接入、电子结算等代行业、资金移动业、预付式支付手段、银行代理业等不同的牌照边界。

因此,在 BaaS 的设计中应当审视的轴,是以下 3 个。

| Axis | Question |
|---|---|
| Account | 谁是存款契约的主体 |
| Instruction | 谁接受资金移动或账户操作的指令 |
| Interface | 哪个 App / 品牌成为用户触点 |

## Mercari case

[[banking/mercari-bank|メルカリバンク]] 是作为将みんなの銀行账户从 mercari App 经由 Merpay 进行 API 对接来使用的服务而启动的。可即时且免手续费地把销售款转入みんなの銀行普通存款账户,是其核心 UX,使用みんなの銀行的合作支行「mercari 支行」。

此处的要点在于,Merpay 并未因此成为银行。Merpay 作为电子结算等代行业者,经由与みんなの銀行的 API 接入,处理账户信息的显示与资金移动指令。

## Related

- [[banking/mercari-bank]]
- [[banking/mercari-bank-license-stack]]
- [[banking/baas-japan-landscape]]
- [[banking/quick-deposit-four-methods]]
- [[regional-banks/fukuoka-fg]]
- [[regional-banks/ssnb]]
- [[payment-firms/gmo-aozora-net]]

## Sources

- みんなの銀行: みんなのBaaS official service page.
- みんなの銀行: パートナー支店モデル official page.
- みんなの銀行: 提携サービス / BaaS overview.
- FFG IR Day, 2025-09-08: みんなの銀行の事業戦略.
- みんなの銀行 / メルペイ, 2025-12-18: メルカリバンク service launch release.
