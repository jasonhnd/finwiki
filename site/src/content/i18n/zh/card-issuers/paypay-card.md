---
source: japanfg/paypay-card
source_hash: 87e513fbfc316c1d
lang: zh
status: machine
fidelity: ok
title: "PayPay 卡"
translated_at: 2026-06-01T00:41:50.463Z
---
# PayPay 卡


## Wiki 路径

本条目位于 [[JapanFG/INDEX|JapanFG index]] 之下。可与 [[payments/INDEX|payments index]] 一起阅读以获得相邻语境，并与 [[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]] 对读以把握更广的系统边界。

## TL;DR

PayPay 卡是 [[megabanks/paypay-fg|PayPay金融グループ]] 的信用卡 / PayPay Credit operator。由于它把 credit line 嵌入 PayPay wallet 的支付体验，需要将 wallet 与 card issuer 分开管理。

## 1. 法人 / 牌照边界

| 项目 | 解读 |
|---|---|
| 法人实体 | PayPay Card 株式会社 |
| 集团 | [[megabanks/paypay-fg|PayPay FG]] / SoftBank-LY payment ecosystem |
| 主要通道 | PayPay Card、PayPay Card Gold、PayPay 信用产品、借贷披露 |
| 监管路径 | 公司官方公告；METI 关于信用卡 / 《分期付款销售法》控制的注册经营者清单。 |

## 2. 业务角色

- 在 PayPay 的扫码支付和 app 分发基础上增加循环信贷 / 信用卡经济性。
- 将积分、app 结账、收单合作方和消费者信用连接为一个零售金融漏斗；issuer / acquirer / processor 地图见 [[payments/japan-card-issuer-acquirer-processor-split]]。
- 对比较 PayPay 与乐天、au PAY、d払い 和传统发卡机构很重要，scheme economics 位于 [[payments/japan-payment-scheme-economics-matrix]]。

## 3. 为什么需要独立页面

PayPay 钱包与 PayPay Card 信用运营商涉及不同的牌照、资产负债表和消费者保护问题。本页保持该边界可见。

## Related

- [[megabanks/paypay-fg]]
- [[securities-firms/paypay-securities]]
- [[payments/cashless-jp-landscape]]
- [[payments/card-acquiring-japan-stack]]

## Sources

- PayPay Card 公司页面：https://www.paypay-card.co.jp/company/
- METI《分期付款销售法》注册经营者：https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
