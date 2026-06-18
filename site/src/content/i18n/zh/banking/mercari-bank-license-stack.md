---
source: banking/mercari-bank-license-stack
source_hash: 2a2686c6a3dc6811
lang: zh
status: machine
fidelity: ok
title: "Mercari Bank（メルカリバンク）牌照堆栈"
translated_at: 2026-06-18T23:33:48.368Z
---

# Mercari Bank（メルカリバンク）牌照堆栈

## Wiki 路径

本条目归属于 [[banking/INDEX|banking index]]。请结合 [[banking/cooperative-banking-japan|Cooperative banking in Japan]] 阅读以获取相邻语境，并结合 [[banking/regional-bank-consolidation-pattern|Regional bank consolidation pattern]] 了解更广阔的系统边界。

## TL;DR

Mercari Bank 并不是「Merpay 变成了银行」这样的案子。银行账户的主体是 [[banking/minna-bank-baas-model|みんなの銀行]]，Merpay 作为电子结算等代行业者，承担 API 接入、账户信息展示、资金移动指令的层级。也就是说，服务名称虽然带有银行色彩，但在法律上是由 **banking layer / API instruction layer / Mercari app UX layer** 的分工来成立的。

## Stack

| Layer | Actor | Role |
|---|---|---|
| Banking layer | みんなの銀行 | 普通存款账户、合作伙伴支店「メルカリ支店」、ATM / 存款相关功能 |
| API / instruction layer | メルペイ | 作为电子结算等代行业者，处理账户信息获取与资金移动指令 |
| Wallet / payment layer | メルペイ | 持有资金移动业、预付式支付手段、信用 / 后付相关登记的支付事业者 |
| UX / marketplace layer | Mercari app | 向用户呈现销售额、Merpay 余额、钱包页面、银行联动导引 |

## What electronic payment agency explains

在 Merpay 的电子结算等代行业表示中，披露了该公司就已签约金融机构的账户资金，接受用户指令并向金融机构传达，以及通过 API 接入获取账户信息并在服务上展示。作为已缔结合约的金融机构，列出了みんなの銀行。

由此，Mercari Bank 的主要 UX 可以如下说明。

| UX | Underlying layer |
|---|---|
| 在 Mercari 应用中查看银行余额 | 电代业 + みんなの銀行 API |
| 将销售额 / Merpay 余额即时转入银行账户 | Merpay 的指令 + みんなの銀行账户 |
| 开设メルカリ支店 | みんなの銀行的合作伙伴支店 |
| 查看 ATM 取款优惠 | みんなの銀行一侧的优惠计划 |

## Important correction

旧备忘中曾写得仿佛「银行代理业 + BaaS 联动」是必要条件，但仅凭公开来源无法以 Merpay 的银行代理业登记为前提。相反，Merpay 的电代业表示放置了一条防止误认的界线：该公司并非代理银行等而开展电子结算等代行业。

因此，本页面如下处理。

- **confirmed**：Merpay 作为电子结算等代行业者与みんなの銀行签约。
- **confirmed**：Merpay 持有资金移动业者、预付式支付手段发行者等多项金融登记。
- **confirmed**：Mercari Bank 是从 Mercari 应用通过 Merpay 与 API 联动使用みんなの銀行账户的服务。
- **not assumed**：Merpay 是银行业者或银行代理业者。

## BaaS design lesson

Mercari Bank 这一案例表明，[[banking/baas-japan-landscape|BaaS 日本ランドスケープ]] 的本质不是「整体取得牌照」，而是「在何处将既有牌照与银行 API 相连接」。[[exchanges/jp-exchange-mercoin|メルコイン]] 等同集团的加密资产交换业者、证券应用、电商应用若要追求同样的 UX，首先应当切分的是以下 4  点（母公司的最新形象参见 [[payment-firms/mercari-hd|メルカリ HD]]）。

1. 由谁提供存款账户。
2. 由谁处理账户信息展示与资金移动指令。
3. 如何在自家余额 / 积分 / 销售额与银行账户之间进行移动。
4. 是让用户打开银行应用，还是在自家应用内完成闭环。

## Related

- [[banking/mercari-bank]]
- [[banking/minna-bank-baas-model]]
- [[banking/baas-japan-landscape]]
- [[banking/quick-deposit-four-methods]]
- [[fintech/japan-financial-regulation]]
- [[payments/cashless-jp-landscape]]

## Sources

- メルカリ: 电子结算等代行业相关表示等。
- メルペイ: About / license and registration information.
- みんなの銀行 / メルペイ, 2025-12-18: Mercari Bank service launch release.
- 金融庁: 已获得免许・许可・登记等的事业者一览。
