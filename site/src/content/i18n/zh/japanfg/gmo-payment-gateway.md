---
source: japanfg/gmo-payment-gateway
source_hash: 108f0578b7e47522
lang: zh
status: machine
fidelity: ok
title: "GMO 支付网关"
translated_at: 2026-05-31T15:29:03.900Z
---

# GMO 支付网关

## 维基路线

此条目位于 [[JapanFG/INDEX|JapanFG index]] 下。针对同行/对比背景阅读 [[JapanFG/famima-digital-one|ファミマデジタルワン (FamiMa Digital One)]]，针对更广泛的系统/监管边界阅读 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]。

##TL;博士

日本最大的支付服务提供商（PSP，Payment Service Provider）之一。我们为EC商户提供一站式服务：Visa/Master/JCB/Amex等卡支付+便利店支付+银行转账+电子货币。 1995-03-25 成立Card Commerce Co., Ltd.，更名为2000 、2005 TSE Mothers、2008 在东京证券交易所第一部上市（目前PRIME 3769）。 GMO Internet Group 合并子公司。与三井住友卡（[[smfg]]系列）的战略联盟以及在亚洲的扩张（越南NextPay/台湾ECPay等）是中期计划的支柱。 ^[extracted]

## 1。公司简介

**正式名称**：GMO Payment Gateway, Inc. ^[extracted]
**英文名称**：GMO Payment Gateway, Inc.
**股票代码**：TSE PRIME 3769 ^[extracted]
**成立**：1995-03-25（原Card Commerce Co., Ltd.）^[extracted]
**总部**：东京都涩谷区
**母公司**：[[business/gmo-internet-group|gmo-internet-group]]（合并子公司）^[extracted]
**业务类型**：支付服务提供商（PSP，Payment Service Provider）

## 2。业务板块图

|部分|主要服务|特征|
|---|---|---|
|EC 决済代行|信用卡（Visa/Master/JCB/Amex）+便利店支付+银行转账+电子货币|经营店铺171,257 店（2026-03 结尾，包括fincode byGMO等829,062 店）|
|企业对企业支付|企业间账单结算/延期付款|完整的信用/催收机构|
|简单支付SDK|支付宝|对于开发人员/许多受雇的初创公司|
|海外支付|全球支付网关|与 Stripe/Adyen 竞争|
|亚洲扩张|NextPay（越南）/ECPay（台湾）/泰国|投资/合资基地|
|周边业务|金融服务/汇款/交易借贷|利用会员店数据进行贷款|

## 3. 沿革

|年月|现象|
|---|---|
|1995-03-25|卡商务有限公司成立^[extracted]|
|2000 |GMO 支付网关更名为 ^[extracted]|
|2005 |在 TSE Mothers ^[extracted] 上市|
|2008 |东京证券交易所第一部上市^[extracted]|
|2015 |与三井住友银行合资成立SMBC GMO PAYMENT（与三井住友卡于2019 就下一代支付平台达成基本协议）|
|2015〜|进军亚洲（投资台湾Neweb Technologies、Z.com Payment等）|

### 国内策略

- **EC附属店铺基地**：运营店铺网络为171,257 店（2026-03 、829,062 店结尾，包括fincode byGMO等）
- **与三井住友卡的战略联盟**：加深与[[smfg]]家族卡公司的关系，并开发SMBC GMO PAYMENT（与SMBC合资，成立2015 。2021 重组为三井住友卡50% / GMO-PG 40% /三井住友银行10%）
- **Pay.JP**：方便开发者与 Stripe 竞争的支付 SDK

### 海外战略

- **专注亚洲**：越南NextPay / 台湾ECPay / 泰国投资/合资等

### 冲突地图

|竞赛|优势|站立姿势|
|---|---|---|
|SB支付服务|[[paypay-fg]] / 软银集团/PayPay 合作|国内最大级、QR 决済亲和性|
|DG 金融科技（原 VeriTrans）|数字车库/老式 PSP|EC老牌会员店|
|SMBC GMO 支付|SMBC × GMO-PG 合弁|银行渠道|
|条纹/Adyen|全球开发者优先|跨境电商|
|方形（块）|POS+线上整合|SMB 物贩|

## 5. 规制・政策

- **监督**：金融厅/经济产业省（分期销售法/资金结算法）
- **业务类型**：支付代理业务（无需注册，但商业合同和 PCI DSS 合规性是实际的进入壁垒）
- **监管问题**：

## 6。对位法

> 主观反驳（母公司依赖与独立、SMBC GMO PAYMENT 的客户同类相食）被隔离在`.opinions/JapanFG/gmo- payment-gateway.md` (2026-05-29) 中。

## 7。开放式问题

- 超过 30 万 商店的会员商店数量的具体细目是什么（活跃与休眠）？
- 2024 中期计划的数值目标（销售额、营业收入、海外比例）的详细内容是什么？
- GMO-PG在稳定币体系下的地位如何（对应Progmat等）？
- 与Stripe/Adyen全面竞争的场景是什么？
- 你们与母公司 GMO Internet Group 的交叉持股和股息政策是什么？

## 8。有关的

- [[smfg]]（三井住友卡合作伙伴/SMBC GMO PAYMENT 合资母公司）
- [[paypay-fg]]（SB 支付服务竞争对手）
- [[jcb]]（卡国际品牌）
- [[mufg]]（卡行业，通过三菱 UFJ Nikos）
- [[money-forward]] · [[freee]]（会计 SaaS 集成）
- [[paidy]]（延期付款冲突/补充）
- [[mercari-hd]] (EC 顾客层)

## 来源

- **维基百科：GMO 支付网关**（https://ja.wikipedia.org/wiki/GMO 支付网关，2026-05-19 摘录）
- **GMO 支付网关官方 IR**（参见 corp.gmo-pg.com，2026-05-19）
- GMO互联网集团证券报告（合并子公司信息）
- GMO 支付网关 IR 常见问题解答 — 经营商店 171,257 店（2026-03  结尾，包括 fincode byGMO 829,062 店） — https://www.gmo-pg.com/en/ir/faq/
- GMO-PG x 三井住友卡关于下一代支付平台的基本协议 (2019) — https://www.gmo-pg.com/en/news/press/gmo- paymentgateway/2019/0212.html
- GMO-PG 台湾 Neweb Technologies 业务资本提携（2015） — https://www.gmo-pg.com/corp/newsroom/press/gmo-paymentgateway/2015/0819.html

---

> [!info] 验证状态
> 信心：**可能**（公开信息库/由2026-05-19创建，经营商店数量、SMBC合资企业和台资在2026-05-29的官方IR中确认）经营商店171,257 店是截至2026-03 年底的官方值（可能会随时间变化，请参阅GMO-PG IR季度材料了解最新信息）。成立年份、上市历史、母公司关系以及SMBC GMO PAYMENT合资公司均根据公开信息确定。
