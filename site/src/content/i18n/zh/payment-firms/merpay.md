---
source: payment-firms/merpay
source_hash: eede29db6d36dccc
lang: zh
status: machine
fidelity: ok
title: "Merpay"
translated_at: 2026-06-20T09:33:00.420Z
---
# Merpay


## Wiki 路径

本条目位于 [[payment-firms/INDEX|payment-firms INDEX]] 之下。可结合 [[payments/INDEX|payments index]] 理解相邻背景，并结合 [[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]] 理解更广泛的系统边界。

## 摘要

Merpay 是 [[payment-firms/mercari-hd|メルカリ]] 旗下的支付与授信运营公司。其官方 About 页面列示资金转移业、预付式支付工具、信用购买中介、贷金业等注册信息，因此需要作为连接 marketplace balance / wallet / credit 的独立页面。

## 1. 法人 / 牌照边界

| 项目 | 解读 |
|---|---|
| 法人实体 | 株式会社メルペイ |
| 集团 | [[payment-firms/mercari-hd|Mercari]] |
| 主要通道 | Merpay 钱包、Mercari 销售余额支付、资金转移、信用 / 贷款相邻业务 |
| 金融厅登记路径 | 金融厅资金转移业者名单：关东财务局长 第00057号，株式会社メルペイ。 |

## 2. 业务角色

- 将 Mercari 市场销售收入、买卖双方身份和 App 参与度转化为支付、钱包和信用使用场景。
- 连接 C2C 市场数据、码支付、预付价值、资金转移余额、后付支付和银行账户提现；发行方 / 收单方 / 处理方拆分见 [[payments/japan-card-issuer-acquirer-processor-split]]。
- Mercari 的《资金结算法》披露将有偿积分与 Merpay 余额分开说明，这一点重要，因为预付式支付手段的保全和资金转移的保全不是同一类控制问题。
- 是 PayPay、Rakuten Pay、au PAY、d払い 的比较对象，也出现在 [[payments/funds-transfer-service-providers-japan-index]] 中。

## 3. 监管与产品边界

| 层级 | 公开来源解读 |
|---|---|
| 资金转移 | Merpay 官方页面和 FSA 名单显示其为关东财务局第 00057 号。披露文件说明 Merpay 余额不是银行存款，并按《资金结算法》采取保全措施。 |
| 预付积分 | 有偿积分作为第三方型预付式支付手段另行披露；这关系到退款、有效期和保证金处理。 |
| 信用 / 贷款相邻业务 | Merpay 公司页面列出包括信用购买斡旋业和贷款业登记，因此应将其读作钱包加信用运营商，而不是单纯的码支付品牌。 |
| 市场循环 | 战略循环是 Mercari 销售收入 -> Merpay 余额 / 支付 -> 信用或后付产品 -> 反复使用市场和加盟店。 |

## 4. 本独立页面为何重要

Mercari 的 marketplace 业务与 Merpay 受监管的支付 / 信用业务具有不同的风险和合规问题。本页使金融服务边界保持清晰。

## 相关

- [[payment-firms/mercari-hd]]
- [[payments/cashless-jp-landscape]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[loyalty/japan-points-landscape]]

## 来源

- Merpay About：https://jp.merpay.com/about/
- Mercari 《资金结算法》披露：https://static.jp.mercari.com/shikin_kessai
- 金融厅资金转移服务提供者名单：https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
