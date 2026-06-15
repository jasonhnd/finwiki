---
source: payment-firms/smartbank
source_hash: 67c6fa9daab60900
lang: zh
status: machine
fidelity: ok
title: "SmartBank (スマートバンク)"
translated_at: 2026-06-15T03:48:21.835Z
---

# SmartBank (スマートバンク)

## Wiki 路由

本词条归属于 [[payment-firms/INDEX|payment-firms INDEX]]（其领域路由）。请将其与 [[payment-firms/kyash|Kyash]] 对照阅读以获取同类 / 对比语境（预付 + App 主导的 fintech），并参照 [[financial-regulators/fsa|the FSA]] 及 [[payments/funds-transfer-vs-prepaid-boundary|the funds-transfer vs prepaid boundary]] 了解监管 / 系统边界。

## TL;DR

株式会社 SmartBank 是一家运营家计管理预付卡「B/43（Bee-yon-san，现已改称「ワンバンク」）」的 household-finance / prepaid wallet fintech。在公开信息中其属于持有 **两张 license** 的少见构成 ——**资金移动业者**（关东财务局长 第00084号）与于 2024 年 取得的 **第三方型预付式支付手段发行者**（关东财务局长 第00782号）。它将充值式 Visa 预付卡与记账 App 组合在一起，是将 payment account 结合进家计管理 UX 的案例。

## 1. License / group boundary

| Item | Notes |
|---|---|
| Legal name | 株式会社スマートバンク |
| License route | 资金移动业者（关东财务局长 第00084号）＋ 第三方型预付式支付手段（关东财务局长 第00782号） |
| Parent / group | 独立系 fintech（初创公司） |
| Product surface | B/43 →「ワンバンク」家计管理 App ＋ Visa 预付卡 |
| Main lanes | 预付式账户、家计预算管理、共享支出、funds transfer |
| Wiki role | 以家计管理为起点的 prepaid / funds-transfer fintech 页面 |

## 2. Operating model

SmartBank 从家计预算管理这一课题出发，搭建 payment / account-like UX。它同时使用 prepaid・资金移动业两侧的 licensing，以支撑共享支出与钱包的资金流。相比大型银行或通信系钱包规模较小，但在并非从银行・商务、而是从「记账（budgeting）」起步搭建金融 UX 的设计上，与 [[payment-firms/kyash|Kyash]] 或 [[payment-firms/paypay|PayPay]] super-app 的对照颇有价值。BaaS 语境参见 [[banking/baas-japan-landscape|BaaS Japan landscape]]。

## 3. Why this page matters

- 固定一家公司同时持有资金移动业与第三方型预付式支付手段两者的 license 构成这一具体案例。
- 可视化在同一公司内组合「prepaid（原则禁止退款）」与「funds-transfer（可转账）」的设计。
- 成为独立系 fintech 以家计管理为入口打造 payment account 的案例 anchor。

## 相关

- [[payment-firms/INDEX|payment-firms INDEX]]
- [[payment-firms/kyash|Kyash]]
- [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]
- [[banking/baas-japan-landscape|BaaS Japan landscape]]
- [[INDEX|FinWiki index]]

## 来源

- SmartBank company profile: https://smartbank.co.jp/company
- ワンバンク: 資金決済法に基づく表示: https://onebank.jp/settlement/
- FSA funds-transfer service provider list (`shikin_idou.pdf`): https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf

> [!info] 校核状态
> confidence: likely。资金移动业（第00084号）・第三方型预付式支付手段（第00782号、2024 年 登记）的双重 license 基于公开新闻稿／登记一览。产品名称由 B/43 →「ワンバンク」改称。
