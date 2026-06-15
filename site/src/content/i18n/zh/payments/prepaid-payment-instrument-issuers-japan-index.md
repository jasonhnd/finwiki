---
source: payments/prepaid-payment-instrument-issuers-japan-index
source_hash: 4d443bc782307451
lang: zh
status: machine
fidelity: ok
title: "日本第三方型预付式支付手段发行者登记 index"
translated_at: 2026-06-15T03:48:21.915Z
---

# 日本第三方型预付式支付手段发行者登记 index

## TL;DR

FSA 的第三方型预付式支付手段发行者一览中包含 **截至 2026-04-30 的 803  家发行者**。本页面是预付式发行者 surface 的登记控制 (registry-control) 路径。它不复现全部 803  行；官方 FSA 工作簿仍是完整的行级 source of truth。

请使用本页面将预付式／储值发行与资金转移、信用卡、积分及 stablecoin／EPI 路径切分开来。仅为重要的 wallet、card、零售、交通、游戏或 fintech 运营商创建 standalone 页面。

## 边界

| 边界 | 处理方式 |
|---|---|
| 第三方型预付式支付手段发行者 | 可在第三方商户／店铺使用的预付式价值的注册发行者。完整母体由 FSA `daisan.xlsx` 管理。 |
| 资金转移业者 | 使用 FSA 资金转移业一览及 [[payments/funds-transfer-vs-prepaid-boundary]]。 |
| 信用卡／分期业者 | 使用 METI 割赋销售法登记簿及 [[payments/card-acquiring-japan-stack]]。 |
| 忠诚度积分 | 除非其法律价值为预付式支付手段，否则归入 [[loyalty/INDEX]]。 |
| Stablecoin／EPI | 归入 [[fintech/japan-stablecoin-regulatory-landscape]] 及 [[exchanges/jp-exchange-sbi-vc-trade]]。 |

## 登记快照

| 指标 | 内容 |
|---|---:|
| FSA 基准日 | 2026-04-30 |
| 第三方型预付式发行者总数 | 803 |
| 发行者数量最多的管辖 | 关东财务局: 314 |
| 登记复现方针 | 不要将 803  行复制到 wiki；引用 FSA 工作簿，并在此处保留管辖别计数／重要路径。 |

## 管辖别计数

| 管辖 | 发行者数 |
|---|---:|
| 北海道财务局 | 44 |
| 东北财务局 | 99 |
| 关东财务局 | 314 |
| 东海财务局 | 62 |
| 北陆财务局 | 38 |
| 近畿财务局 | 71 |
| 中国财务局 | 59 |
| 四国财务局 | 36 |
| 福冈财务支局 | 39 |
| 九州财务局 | 35 |
| 冲绳综合事务局 | 6 |
| **合计** | **803** |

## 现有重要 Wiki 路径

这些行并非对所有主要预付式发行者的完整性主张。它们是 FinWiki 中已经存在、当前已被路由的重要运营商。

| FSA 一览上的正式名称 | 注册日期 | 法人编号 | Wiki 路径 | 边界注记 |
|---|---|---:|---|---|
| 三菱ＵＦＪニコス株式会社 | 1991-11-22 | 8010001000016 | [[card-issuers/mufg-nicos]] | 卡／预付式／结算集团运营商 |
| 株式会社セブン・カードサービス | 2007-02-22 | 4010001088278 | [[card-issuers/seven-card-service]] | 7&i 卡／预付式 邻接 |
| ａｕペイメント株式会社 | 2010-09-30 | 5010401069983 | [[payment-firms/au-payment]] | au PAY 预付式／资金转移 边界 |
| ＳＢペイメントサービス株式会社 | 2010-12-10 | 4010401058731 | [[payment-firms/sb-payment-service]] | 商户 PSP／预付式 邻接 |
| ライフカード株式会社 | 2011-04-01 | 3020001086810 | [[card-issuers/life-card]] | 卡及预付式／担保 邻接 |
| 株式会社エポスカード | 2015-01-08 | 6011201010186 | [[card-issuers/epos-card]] | 丸井集团 卡／预付式 邻接 |
| 楽天Ｅｄｙ株式会社 | 2016-07-21 | 3010901038102 | [[payment-firms/rakuten-edy]] | 预付式电子货币运营商 |
| 株式会社Ｋｙａｓｈ | 2017-01-16 | 9011001103831 | [[payment-firms/kyash]] | Wallet／预付卡／资金转移 fintech |
| ＰａｙＰａｙ株式会社 | 2018-10-05 | 5010001192707 | [[payment-firms/paypay]] | 码支付 wallet；需进行预付式／资金转移／积分分解 |
| 株式会社メルペイ | 2019-01-24 | 1010401135178 | [[payment-firms/merpay]] | 市场 wallet／码支付运营商 |
| イオンフィナンシャルサービス株式会社 | 2023-04-24 | 2010001010887 | [[card-issuers/aeon-financial-service]] | 零售金融集团／预付式 邻接 |
| 株式会社スマートバンク | 2024-03-26 | 8011001127534 | [[payment-firms/smartbank]] | 家庭 wallet／预付卡 邻接 |
| 三井住友カード株式会社 | 1990-12-03 | 3120001082353 | [[card-issuers/smbc-card]] | 发卡机构／预付式 邻接 |

## 晋升规则

仅当发行者满足以下任一条件时，才将其从 registry-only 晋升为 standalone 页面：

- 是主要的 wallet、码支付、card、交通、零售、游戏或平台运营商；
- 已链接至某个 JapanFG／payments／fintech 分析线索；
- 对预付式 vs 资金转移 vs 积分的分解具有战略重要性；
- 公开信息足够丰富，足以支撑一个 standalone 页面。

## 相关

- [[payments/INDEX]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/cashless-jp-landscape]]
- [[payments/card-acquiring-japan-stack]]
- [[financial-licenses/INDEX]]
- [[financial-regulators/missing-financial-institutions-backlog]]
- [[INDEX|FinWiki index]]

## 来源

- FSA, "前払式支払手段（第三者型）発行者登録一覧", `daisan.xlsx`, as of 2026-04-30.
- FSA, prepaid payment instruments policy page.
