---
source: payment-firms/bnpl-landscape
source_hash: 99b6c4d9ee1c40e2
lang: zh
status: machine
fidelity: ok
title: "日本 BNPL 全景"
translated_at: 2026-06-19T06:09:18.093Z
---

# 日本 BNPL 全景

## Wiki route

本条目位于 [[payment-firms/INDEX|payment-firms INDEX]] 之下。请与 [[card-issuers/rakuten-card|楽天カード (Rakuten Card)]] 对照阅读以获取同业 / 对比背景，并参见 [[payments/INDEX|payments index]] 了解更广义的系统 / 监管边界。

## TL;DR

日本的 BNPL /「あと払い」（先买后付）市场，最好理解为一个 **商户结账与消费者信用的边界问题**。[[payment-firms/paidy|Paidy]] 是锚点案例，因为 PayPal 收购了它以扩大其在日本国内支付中的相关性，但 BNPL 也与信用卡、分期销售、便利店支付、钱包余额以及忠诚度主导的结账相互重叠。

对 JapanFG 而言，控制性的问题是：**该产品仅仅是延迟结算，还是分期信用 / 信用购买中介 / 放贷 / 类卡信用？**

## 市场地图

| 层级 | 日本示例 | 为何重要 |
|---|---|---|
| 专用 BNPL | [[payment-firms/paidy|Paidy]] | 日本标志性的 BNPL 平台；PayPal 的所有权使其成为全球支付桥梁 |
| 卡分期 / 循环 | [[card-issuers/jcb|JCB]]、[[card-issuers/orico|Orico]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/credit-saison|Credit Saison]] | 现有的日本信用已具备分期与循环机制 |
| 码支付信用 | PayPay、Rakuten、Merpay、d払い 各类变体 | 应用钱包可围绕既有支付频率添加后付或信用产品 |
| 商户结账 | [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、PSP、EC 平台 | BNPL 需要商户受理与结算集成 |
| 便利店还款 | Paidy 式的便利店付款行为 | 从线上购买到线下现金还款的日本特有桥梁 |

## 法律 / 产品边界

| 产品设计 | 法律问题 |
|---|---|
| 次月一次性账单支付 | 这是延迟支付、信用购买中介，还是另一种受监管的信用服务？ |
| 拆分为 3 / 6 / 12 次付款 | 是否触发分期销售或放贷式分析？ |
| 商户向 BNPL 提供方付款 | 商户费用模式类似于卡收单，但消费者信用规则仍然重要 |
| 应用钱包提供后付 | 需要区分钱包余额、资金转移、预付、信用与商户结算 |
| 虚拟卡 / 类卡使用 | 可能出现卡网络、分期销售、发卡 / 收单以及卡号处理等问题 |
| 逾期 / 催收 | 消费者保护、信用信息、投诉与债务催收控制变得重要 |

## Paidy 锚点

Paidy 之所以重要，是因为它将 BNPL 本地化以适配日本：

- 以智能手机为先的结账，而非传统的卡片注册；
- 合并的月度账单；
- 视设置而定，通过便利店、银行转账或账户扣款还款；
- 围绕结账转化的商户侧价值主张；
- 作为全球分销与治理层的 PayPal 所有权。

## 为何日本的 BNPL 与众不同

在全球 BNPL 流行之前，日本就已拥有成熟的信用卡分期 / 循环系统与强大的便利店支付文化。这意味着 BNPL 不仅与卡片竞争，还与以下竞争：

- 货到付款的传统行为；
- 便利店付款单与现金还款；
- 年轻或少用卡的用户；
- 希望减少结账摩擦的商户；
- 可用积分补贴信用的应用生态系统。

## JapanFG 相关性

| JapanFG 实体 | 相关性 |
|---|---|
| [[payment-firms/paidy|Paidy]] | 专用 BNPL 锚点及 PayPal Japan 扩张案例 |
| [[card-issuers/jcb|JCB]] | 现有卡 / 分期网络与发卡方经济性 |
| [[card-issuers/orico|Orico]] / [[card-issuers/jaccs|JACCS]] | 信用购买 / 分期销售的现有经营者 |
| [[card-issuers/credit-saison|Credit Saison]] | 具备商户与消费者信用关联的卡 / 金融现有经营者 |
| [[megabanks/paypay-fg|PayPay FG]] / [[payment-firms/rakuten-fg|Rakuten FG]] | 可添加信用产品的应用型支付 / 积分生态系统 |
| [[payments/cashless-jp-landscape|Cashless JP landscape]] | BNPL 是更广义无现金结账栈内的一个层级 |

## Related

- [[payment-firms/paidy|Paidy]]
- [[card-issuers/installment-sales-act-2020-amendment|Installment Sales Act 2020 amendment]]
- [[payments/cashless-jp-landscape|Japan cashless payment landscape]]
- [[card-issuers/jcb|JCB]]
- [[card-issuers/orico|Orico]]
- [[card-issuers/jaccs|JACCS]]
- [[card-issuers/credit-saison|Credit Saison]]
- [[megabanks/paypay-fg|PayPay FG]]
- [[financial-licenses/INDEX|JapanFG legal / financial licenses]]
- [[INDEX|FinWiki index]]

## Sources

- Paidy 官方公司概要。
- 关于收购 Paidy 的 PayPal 投资者新闻稿，2021。
- 关于收购 Paidy 的 PayPal Japan 新闻室稿，2021。
