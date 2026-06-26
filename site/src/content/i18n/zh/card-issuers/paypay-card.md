---
source: card-issuers/paypay-card
source_hash: 5414d9f95b90c5e2
lang: zh
status: machine
fidelity: ok
title: "PayPay Card（PayPayカード）"
translated_at: 2026-06-26T03:26:36.036Z
---
# PayPay Card（PayPayカード）


## Wiki 路由

本条目位于 [[card-issuers/INDEX|カード発行会社の索引]] 之下。请结合 [[payments/INDEX|決済領域の索引]] 阅读以理解相邻语境，并结合 [[payments/funds-transfer-vs-prepaid-boundary|日本における資金移動と前払式支払手段の境界]] 阅读以理解更广泛的体系边界。

## TL;DR

PayPay Card 是 [[megabanks/paypay-fg|PayPay金融グループ]] 的信用卡 / PayPay Credit 运营公司。由于它在 PayPay wallet 的支付体验中嵌入信用额度，因此需要把 wallet 和 card issuer 分开管理。^[verified-2026-06-24]

## 1. 实体 / 牌照边界

| 项目 | 解读 |
|---|---|
| 法人实体 | PayPayカード株式会社 |
| 集团 | [[megabanks/paypay-fg|PayPay FG]] / SoftBank-LY payment ecosystem |
| 主要通道 | PayPay Card、PayPay Card Gold、PayPay credit products、贷金披露 |
| 监管路径 | 官方公司通知；信用卡 / 分期销售法控制应参考 METI 信用交易材料。^[verified-2026-06-24] |
| 公司页面产品拆分 | 官方公司导航将 PayPay Card、PayPay Card Gold 和 PayPay Credit 分开，而公司页脚另行披露贷金业登记。^[verified-2026-06-24] |

## 2. 业务角色

- 为 PayPay 的二维码支付和 App 分发基础增加 revolving / credit-card economics；公司页面明确将 PayPay Card 与 PayPay Credit 定位为 PayPay-app-adjacent credit products。^[verified-2026-06-24]
- 将积分、App checkout、卡收单伙伴和消费者信用连接成一个零售金融漏斗；issuer / acquirer / processor 地图见 [[payments/japan-card-issuer-acquirer-processor-split]]。
- 不应把 card / credit line 合并进 [[payment-firms/paypay]]：PayPay 是 wallet / funds-transfer / prepaid operating company，而 PayPay Card 承担 credit-card 和 lending disclosures。^[verified-2026-06-24]
- 对比较 PayPay 与最接近的生态金融同业 [[card-issuers/rakuten-card|楽天カード]]，以及 au PAY、d払い 和传统发卡机构很重要；scheme economics 见 [[payments/japan-payment-scheme-economics-matrix]]。

## 3. 为何需要独立页面

PayPay 钱包与 PayPay Card 信用运营公司有不同的牌照、资产负债表和消费者保护问题。本页用于保持这条边界可见。

## Related

- [[megabanks/paypay-fg]]
- [[securities-firms/paypay-securities]]
- [[payments/cashless-jp-landscape]]
- [[payments/card-acquiring-japan-stack]]

## Sources

- PayPay Card 公司页面：https://www.paypay-card.co.jp/company/
- METI 信用交易政策页面：https://www.meti.go.jp/policy/economy/consumer/credit/
- METI 登记商户合同缔结业者 PDF：https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
