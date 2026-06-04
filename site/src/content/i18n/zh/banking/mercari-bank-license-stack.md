---
source: banking/mercari-bank-license-stack
source_hash: 5a3337e280ef9ed3
lang: zh
status: machine
fidelity: ok
title: "Mercari Bank（メルカリバンク）license stack"
translated_at: 2026-05-30T18:52:47.785Z
---

# Mercari Bank（メルカリバンク）license stack


## Wiki route

本条目归属于 [[banking/INDEX|banking index]]。请与 [[banking/cooperative-banking-japan|Cooperative banking in Japan]] 对照以了解相邻背景，并与 [[banking/regional-bank-consolidation-pattern|Regional bank consolidation pattern]] 对照以了解更广泛的体系边界。

## TL;DR

Mercari Bank 并非「Merpay 变成了银行」的项目。银行账户的主体是 [[banking/minna-bank-baas-model|みんなの銀行]]，Merpay 作为电子结算等代行业者，承担 API 接入、账户信息展示、资金移动指图的层。也就是说，服务名虽然类似银行，但在法律上是由 **banking layer / API instruction layer / Mercari app UX layer** 的分工构成的。

## Stack

| Layer | Actor | Role |
|---|---|---|
| Banking layer | Minna Bank | 普通存款账户、合作分行「Mercari 分行」、ATM / 存款相关功能 |
| API / instruction layer | Merpay | 作为电子结算等代行业者，处理账户信息获取与资金移动指图 |
| Wallet / payment layer | Merpay | 持有资金移动业、预付式支付手段、信用 / 后付相关登记的结算事业者 |
| UX / marketplace layer | Mercari app | 向用户呈现销售款、Merpay 余额、钱包页、银行对接导流 |

## What electronic payment agency explains

在 Merpay 的电子结算等代行业标示中，已披露该公司就已签约金融机构账户内的资金，接受用户指图并向金融机构传达，以及通过 API 接入获取账户信息并在服务上展示。作为已缔结合约的金融机构，列出了 Minna Bank。

由此，Mercari Bank 的主要 UX 可如下说明。

| UX | Underlying layer |
|---|---|
| 在 Mercari app 查看银行余额 | 电代业 + Minna Bank API |
| 将销售款 / Merpay 余额即时转入银行账户 | Merpay 的指图 + Minna Bank 账户 |
| 开设 Mercari 分行 | Minna Bank 的合作分行 |
| 查看 ATM 取款优惠 | Minna Bank 侧的优惠方案 |

## Important correction

旧备忘录中写得仿佛「银行代理业 + BaaS 对接」是必要条件，但仅凭公开来源无法以 Merpay 的银行代理业登记为前提。毋宁说，Merpay 的电代业标示划下了防误认的界线：该公司并非代理银行等而进行电子结算等代行业。

因此，本页按以下方式处理。

- **confirmed**：Merpay 作为电子结算等代行业者与 Minna Bank 签约。
- **confirmed**：Merpay 持有资金移动业者、预付式支付手段发行者等多项金融登记。
- **confirmed**：Mercari Bank 是从 Mercari app 经 Merpay 与 Minna Bank 账户 API 对接使用的服务。
- **not assumed**：Merpay 是银行业者或银行代理业者。

## BaaS design lesson

Mercari Bank 这一项目表明，[[banking/baas-japan-landscape|BaaS 日本ランドスケープ]] 的本质并非「把牌照整体取得」，而是「在何处接入既有牌照与银行 API」。当 [[exchanges/jp-exchange-mercoin|メルコイン]] 等同集团的加密资产交换业者、证券 app、EC app 想要实现相同 UX 时，首先应切分的是以下 4  点（母公司的最新情况参见 [[payment-firms/mercari-hd|メルカリ HD]]）。

1. 由谁提供存款账户。
2. 由谁处理账户信息展示与资金移动指图。
3. 如何在自有余额 / 积分 / 销售款与银行账户之间转移。
4. 是让用户打开银行 app，还是在自有 app 内完结。

## Related

- [[banking/mercari-bank]]
- [[banking/minna-bank-baas-model]]
- [[banking/baas-japan-landscape]]
- [[banking/quick-deposit-four-methods]]
- [[fintech/japan-financial-regulation]]
- [[payments/cashless-jp-landscape]]

## Sources

- Mercari: 关于电子结算等代行业的标示等。
- Merpay: About / 牌照与登记信息。
- Minna Bank / Merpay, 2025-12-18: Mercari Bank 服务启动发布。
- 金融厅: 取得免许·许可·登记等的事业者一览。
