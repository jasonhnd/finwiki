---
source: payment-firms/gmo-payment-gateway
source_hash: ac10b6c103dd93b4
lang: zh
status: machine
fidelity: ok
title: "GMO ペイメントゲートウェイ"
translated_at: 2026-06-19T06:09:18.063Z
---

# GMO ペイメントゲートウェイ

## Wiki route

本条目位于 [[payment-firms/INDEX|payment-firms INDEX]] 之下。请与 [[payment-firms/famima-digital-one|ファミマデジタルワン (FamiMa Digital One)]] 对照阅读以了解同业／对比背景，并与 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] 一同阅读以了解更广泛的系统／监管边界。

## TL;DR

国内最大级的支付代理（PSP, Payment Service Provider）。面向 EC 加盟店一站式提供 Visa/Master/JCB/Amex 等卡支付 + 便利店支付 + 银行转账 + 电子货币。1995-03-25 以「株式会社カードコマース」成立，2000 更名，2005 东证 Mothers 上市，2008 东证一部上市（现 PRIME 3769）。GMO 互联网集团并表子公司。与三井住友卡（[[megabanks/smfg]] 系）的战略提携・亚洲（越南 NextPay / 台湾 ECPay 等）拓展为中期计划支柱。^[extracted]

## 1. 公司概要

**正式名**：GMO ペイメントゲートウェイ株式会社 ^[extracted]
**英文名**：GMO Payment Gateway, Inc.
**证券代码**：东证 PRIME 3769 ^[extracted]
**设立**：1995-03-25（旧 株式会社カードコマース）^[extracted]
**总部**：东京都涩谷区
**母公司**：[[business/gmo-internet-group|gmo-internet-group]]（并表子公司）^[extracted]
**业态**：支付代理（PSP, Payment Service Provider）

## 2. 事业分部・map

| 分部 | 主要服务 | 特征 |
|---|---|---|
| EC 支付代理 | 信用卡 (Visa/Master/JCB/Amex) + 便利店支付 + 银行转账 + 电子货币 | 在运店铺 171,257 店（截至 2026-03 ，含 fincode byGMO 等则为 829,062 店）|
| BtoB 支付 | 法人间账单支付・后付 | 授信・回收一并代理 |
| 简易支付 SDK | Pay.JP | 面向开发者・初创采用多 |
| 海外支付 | 全球支付网关 | 与 Stripe / Adyen 竞争 |
| 亚洲拓展 | NextPay (越南) / ECPay (台湾) / 泰国 | 出资・JV 为基础 |
| 周边业务 | 金融服务・汇款・交易借贷 | 利用加盟店数据的融资 |

## 3. 沿革

| 年月 | 事件 |
|---|---|
| 1995-03-25 | 株式会社カードコマース 设立 ^[extracted] |
| 2000 | GMO ペイメントゲートウェイ 更名 ^[extracted] |
| 2005 | 东证 Mothers 上市 ^[extracted] |
| 2008 | 东证一部 上市 ^[extracted] |
| 2015 | 与三井住友银行合资设立 SMBC GMO PAYMENT（2019 与三井住友卡就下一代支付平台达成基本协议）|
| 2015〜 | 亚洲拓展（出资台湾 Neweb Technologies・Z.com Payment 等）|

### 国内战略

- **EC 加盟店基础**：在运店铺 171,257 店（截至 2026-03 ，含 fincode byGMO 等则为 829,062 店）的加盟店网络为护城河
- **三井住友卡 战略提携**：深化与 [[megabanks/smfg]] 系卡公司的关系，SMBC GMO PAYMENT（与 SMBC 的合资，2015 设立。于 2021 重组为三井住友卡 50% / GMO-PG 40% / 三井住友银行 10%）亦展开
- **Pay.JP**：对标 Stripe 的面向开发者简易支付 SDK

### 海外战略

- **亚洲集中**：对越南 NextPay / 台湾 ECPay / 泰国等的出资・JV

### 竞争 map

| 竞争对手 | 强项 | 立足点 |
|---|---|---|
| SB ペイメントサービス | [[megabanks/paypay-fg]] / SoftBank 集团・PayPay 联动 | 国内最大级，QR 支付亲和 |
| DG Financial Technology (旧 ベリトランス) | 数字车库系・老牌 PSP | EC 老字号加盟店 |
| SMBC GMO PAYMENT | SMBC × GMO-PG 合资 | 银行系渠道 |
| Stripe / Adyen | 全球开发者优先 | 跨境 EC |
| Square (Block) | POS + 在线整合 | SMB 实物销售 |

## 5. 规制・政策

- **主管**：金融厅・经济产业省 (割赋销售法・资金结算法)
- **业态**：支付代理业 (并非登记制，但加盟店合同・PCI DSS 合规为实质性进入壁垒)
- **规制论点**:

## 6. Counterpoints

> 主观性反驳点（母公司依赖 vs 独立性・与 SMBC GMO PAYMENT 的客户蚕食论）隔离于 `.opinions/JapanFG/gmo-payment-gateway.md`（2026-05-29）。

## 7. Open questions

- 加盟店数 30 万店超的准确明细（活跃 vs 休眠）如何?
- 2024 中期计划的数值目标（销售额・营业利润・海外比率）的细节如何?
- 稳定币制度下 GMO-PG 的定位（对 Progmat 等的应对）如何?
- 与 Stripe / Adyen 的竞争正式化情景如何?
- 与母公司 GMO 互联网集团的交叉持股・分红政策如何?

## 8. Related

- [[megabanks/smfg]] (三井住友卡 提携・SMBC GMO PAYMENT 合资母体)
- [[megabanks/paypay-fg]] (SB ペイメントサービス 竞争)
- [[card-issuers/jcb]] (卡国际品牌)
- [[megabanks/mufg]] (经由 三菱 UFJ 尼科斯 的卡行业)
- [[payment-firms/money-forward]] · [[payment-firms/freee]] (会计 SaaS 联动)
- [[payment-firms/paidy]] (后付竞争・补充)
- [[payment-firms/mercari-hd]] (EC 客户层)

## Sources

- **Wikipedia: GMO ペイメントゲートウェイ** (https://ja.wikipedia.org/wiki/GMOペイメントゲートウェイ, 2026-05-19 抽取)
- **GMO Payment Gateway 官方 IR** (corp.gmo-pg.com, 2026-05-19 参照)
- GMO 互联网集团 有价证券报告书 (并表子公司信息)
- GMO Payment Gateway IR FAQ — 在运店铺 171,257 店（截至 2026-03 ，含 fincode byGMO 829,062 店） — https://www.gmo-pg.com/en/ir/faq/
- GMO-PG × 三井住友卡 下一代支付平台基本协议（2019） — https://www.gmo-pg.com/en/news/press/gmo-paymentgateway/2019/0212.html
- GMO-PG 台湾 Neweb Technologies 业务资本提携（2015） — https://www.gmo-pg.com/corp/newsroom/press/gmo-paymentgateway/2015/0819.html

---

> [!info] 验证状况
> confidence: **likely** (基于公开信息・2026-05-19 创建，于 2026-05-29 以官方 IR 确定在运店铺数・SMBC 合资・台湾出资)。在运店铺 171,257 店为截至 2026-03 的官方值（存在时点变动，最新请参照 GMO-PG IR 季度资料）。设立年・上市历史・母公司关系・SMBC GMO PAYMENT 合资以公开信息确定。
