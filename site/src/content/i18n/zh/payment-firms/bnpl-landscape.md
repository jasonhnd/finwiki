---
source: payment-firms/bnpl-landscape
source_hash: 72f658c26d821a6e
lang: zh
status: machine
fidelity: ok
title: ""
translated_at: 2026-05-31T11:13:44.842Z
---

#日本BNPL风景

## 维基路线

该条目位于 [[payment-firms/INDEX|payment-firms INDEX]] 下。针对同行/对比上下文阅读 [[card-issuers/rakuten-card|楽天カード (Rakuten Card)]]，针对更广泛的系统/监管边界阅读 [[payments/INDEX|payments index]]。

##TL;博士

日本的 BNPL /“あと払い”市场最好理解为**商家结帐和消费者信用边界问题**。 [[payment-firms/paidy|Paidy]] 是主要案例，因为 PayPal 收购它是为了扩大日本国内支付相关性，但 BNPL 也与信用卡、分期销售、便利店支付、钱包余额和忠诚度主导的结账重叠。

对于JapanFG来说，控制问题是：**该产品只是延迟结算，还是分期信贷/赊购中介/放贷/卡类信贷？**

## 市场地图

|层|日本例子|为什么这很重要|
|---|---|---|
|专用BNPL|[[payment-firms/paidy|Paidy]]|日本标志性BNPL平台； PayPal 的所有权使其成为全球支付桥梁|
|卡分期/循环|[[card-issuers/jcb|JCB]]、[[card-issuers/orico|Orico]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/credit-saison|Credit Saison]]|现有的日本信贷已经拥有分期付款和循环机制|
|代码支付信用|PayPay、Rakuten、Merpay、d払い 变体|应用程序钱包可以围绕现有支付频率添加稍后付款或信用产品|
|商户结账|[[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、PSP、EC 平台|BNPL 需要商户受理和结算整合|
|便利店还款|付费式的便利支付行为|日本特有的从线上购买到线下现金还款的桥梁|

## 法律/产品边界

|产品设计|法律问题|
|---|---|
|下个月用一张发票付款|这是延期付款、信用购买中介还是其他受监管的信用服务？|
|分为 3 / 6 / 12  payment|它是否会触发分期销售或放贷风格分析？|
|商户向 BNPL 提供商付款|商户费用模式类似于卡收单，但消费者信贷规则仍然很重要|
|应用程序钱包提供稍后付款|需要将钱包余额、资金转账、预付、信用、商户结算分开|
|虚拟卡/类卡使用|可能会出现卡网络、分期销售、发卡机构/收单机构和卡号处理问题|
|逾期付款/收款|消费者保护、信用信息、投诉和收债控制变得重要|

## 付费主播

Payy 很重要，因为它为日本本地化了 BNPL：

- 智能手机优先结账，而不是传统的卡注册；
- 合并每月账单；
- 根据设置，通过便利店、银行转账或账户借记还款；
- 商家方围绕结账转化的价值主张；
- PayPal 所有权作为全球分销和治理层。

## 为什么 BNPL 在日本与众不同

在全球BNPL流行之前，日本已经拥有成熟的信用卡分期/循环系统和强大的便利店支付文化。这意味着 BNPL 不仅与卡竞争，还与：

- 货到付款的遗留行为；
- 便利店付款单和现金还款；
- 年轻或轻卡用户；
- 商家希望减少结账摩擦；
- 可以用积分补贴信用的应用程序生态系统。

## JapanFG 相关性

|日本FG实体|关联|
|---|---|
|[[payment-firms/paidy|Paidy]]|专用 BNPL 锚点和 PayPal 日本扩张案例|
|[[card-issuers/jcb|JCB]]|现有卡/分期付款网络和发行人经济学|
|[[card-issuers/orico|Orico]] / [[card-issuers/jaccs|JACCS]]|信用购买/分期销售现有企业|
|[[card-issuers/credit-saison|Credit Saison]]|与商家和消费者信贷联系的卡/金融机构|
|[[megabanks/paypay-fg|PayPay FG]] / [[payment-firms/rakuten-fg|Rakuten FG]]|基于应用程序的支付/积分生态系统，可添加信用产品|
|[[payments/cashless-jp-landscape|Cashless JP landscape]]|BNPL 是更广泛的无现金结账堆栈中的一层|

＃＃ 有关的

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

## 来源

- Paydy 官方公司简介。
- PayPal 投资者就 Paydy 收购发布消息，2021。
- PayPal 日本新闻编辑室发布有关 Paydy 收购的消息，2021。
