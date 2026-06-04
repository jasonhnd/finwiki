---
source: payments/prepaid-payment-instrument-issuers-japan-index
source_hash: a841889493016b76
lang: zh
status: machine
fidelity: ok
title: "日本第三方预付支付工具发行人登记索引"
translated_at: 2026-06-01T03:31:12.325Z
---
# 日本第三方预付支付工具发行人登记索引

## TL;DR

FSA 的第三方预付支付工具发行人列表包含自 2026-04-30 起的 **803  发行人**。此页面是预付费发行者表面的注册表控制路径。它不会重现所有 803  行；官方 FSA 工作手册仍然是完整的行级事实来源。

使用此页面将预付费/储值发行与资金转账、信用卡、积分和稳定币/EPI 路线分开。仅为材料钱包、卡、零售、运输、游戏或金融科技运营商创建独立页面。

## 边界

|边界 |治疗 |
|---|---|
|第三方预付支付工具发行人 |可在第三方商家/商店使用的预付金额的注册发行人。全部人口由 FSA `daisan.xlsx` 控制。 |
|资金转账服务提供商|使用 FSA 资金转账清单和 [[payments/funds-transfer-vs-prepaid-boundary]]。 |
|信用卡/分期付款运营商|使用 METI 分期付款销售法登记处和 [[payments/card-acquiring-japan-stack]]。 |
|忠诚度积分 |路由至 [[loyalty/INDEX]]，除非预付支付工具具有合法价值。 |
|稳定币/EPI |路由至 [[fintech/japan-stablecoin-regulatory-landscape]] 和 [[exchanges/jp-exchange-sbi-vc-trade]]。 |

## 注册表快照

|公制|阅读|
|---|---:|
| FSA 截至日期 | 2026-04-30 |
|第三方预付发行人总数 | 803 |
|发行人数量最多的司法管辖区 | 关东财务局：314 |
|注册表复制政策 |不要将 803 rows 复制到 wiki 中；引用 FSA 工作簿并在此处保留管辖权计数/材料路线。 |
## 管辖权很重要

|管辖范围 |发行人 |
|---|---:|
|北海道地方财政局| 44 |
|东北地方财政局| 99 |
|关东地方财政局| 314  |
|东海财务局| 62 |
|北陆地方财政局| 38  |
|近畿地方财政局| 71  |
|中国财政局| 59 |
|四国财务局| 36 |
|福冈金融支店| 39 |
|九州地方财政局| 35 |
|冲绳总秘书处| 6 |
| **总计** | **803** |

## 现有的 Material Wiki 路线

这些行并不代表所有主要预付发行人的完整性。它们是 FinWiki 中已存在的当前路由材料运算符。

| FSA 名单中的正式名称 |报名日期 |法人号码 |Wiki 路径|边界注释 |
|---|---|---:|---|---|
|三菱UFJ Nicos株式会社| 1991-11-22 | 8010001000016  | [[card-issuers/mufg-nicos]] |卡/预付/结算集团运营商|
|七卡服务有限公司| 2007-02-22 | 4010001088278  | [[card-issuers/seven-card-service]] |七&i卡/预付费邻接|
| au支付有限公司| 2010-09-30 | 5010401069983  | [[payment-firms/au-payment]] | au PAY预付/资金转账边界|
| SB支付服务有限公司| 2010-12-10 | 4010401058731  | [[payment-firms/sb-payment-service]] |商户 PSP / 预付费邻接 |
|生命卡有限公司| 2011-04-01 | 3020001086810  | [[card-issuers/life-card]] |卡和预付/担保邻接|
|易POS卡有限公司| 2015-01-08 | 6011201010186  | [[card-issuers/epos-card]] |丸井集团卡/预付费邻接|
|乐天 Edy 公司 | 2016-07-21 | 3010901038102  | [[payment-firms/rakuten-edy]] |预付费电子货币运营商|
|凯亚士有限公司| 2017-01-16 | 9011001103831  | [[payment-firms/kyash]] |钱包/预付卡/资金转账金融科技|
| PayPay公司| 2018-10-05 | 5010001192707 | [[payment-firms/paypay]] |代码支付钱包；预付/资金转账/需要积分分解|
|默佩有限公司| 2019-01-24 | 1010401135178  | [[payment-firms/merpay]] |市场钱包/代码支付运营商|
|永旺金融服务有限公司| 2023-04-24 | 2010001010887  | [[card-issuers/aeon-financial-service]] |零售金融集团/预付费邻接|
|智慧银行股份有限公司| 2024-03-26 | 8011001127534  | [[payment-firms/smartbank]] |家庭钱包/预付卡邻接|
|三井住友卡株式会社| 1990-12-03 | 3120001082353  | [[card-issuers/smbc-card]] |发卡机构/预付费邻接|

## 促销规则

仅当发行者满足以下条件时，才将发行者从仅注册页面提升为独立页面：

- 主要钱包、代码支付、卡、运输、零售、游戏或平台运营商；
- 已链接到 JapanFG/支付/金融科技分析线程；
- 对于预付、资金转移、积分分解具有战略重要性；
- 公共资源丰富到足以支持独立页面。

## 相关

-[[payments/INDEX]]
-[[payments/funds-transfer-vs-prepaid-boundary]]
-[[payments/cashless-jp-landscape]]
-[[payments/card-acquiring-japan-stack]]
-[[financial-licenses/INDEX]]
-[[financial-regulators/missing-financial-institutions-backlog]]
-[[JapanFG/INDEX]]
-[[INDEX|FinWiki index]]

## 来源

- FSA，“预付费支付工具（第三方类型）发行人注册列表”，`daisan.xlsx`，自 2026-04-30 起。
- FSA，预付费支付工具政策页面。
