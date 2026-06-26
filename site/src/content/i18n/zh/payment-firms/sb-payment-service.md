---
source: payment-firms/sb-payment-service
source_hash: e4cecbd7ca5df385
lang: zh
status: machine
fidelity: ok
title: "SB Payment Service（SBペイメントサービス）"
translated_at: 2026-06-26T03:26:36.041Z
---
# SB Payment Service（SBペイメントサービス）


## Wiki 路由

本条目位于 [[payment-firms/INDEX|決済事業者の索引]] 之下。请结合 [[payment-firms/gmo-epsilon|GMOイプシロン (GMO Epsilon)]] 阅读，以取得同业 / 对比语境；并结合 [[payments/INDEX|決済領域の索引]] 阅读，以理解更广泛的体系 / 监管边界。

## TL;DR

SB Payment Service 是 SoftBank group 的商户支付 / PSP 运营公司。官方业务介绍显示其提供从线上到门店的支付服务，并作为收单方提供加盟店审查、管理和支付服务，因此是 [[payments/card-acquiring-japan-stack|カード加盟店管理・アクワイアリングの構造]] 的主要页面。^[verified-2026-06-24]

## 1. 实体 / 牌照边界

| 项目 | 解读 |
|---|---|
| 法人实体 | SBペイメントサービス株式会社 |
| 集团语境 | SoftBank / LY / PayPay payment ecosystem |
| 主要通道 | PSP、商户收单、线上和线下支付服务 |
| 监管路径 | 信用卡号码等处理合同缔结 / 收单管理应通过 METI 信用交易材料和官方业务披露核对。^[verified-2026-06-24] |

## 2. 业务角色

- 提供超出 PayPay 消费者钱包之外的商户侧支付基础设施：公司描述的是面向企业的线上到门店支付服务，而不是消费者钱包产品。^[verified-2026-06-24]
- 连接银行卡受理、线上结账、安全和商户管理；业务页面说明 SBPS 为线上支付支持合同、结算、系统和运营，并作为收单方处理加盟店审查 / 管理 / 支付服务。^[verified-2026-06-24]
- 它是 SoftBank 生态系统中的商户服务层：PayPay 是消费者二维码支付钱包，[[card-issuers/paypay-card]] 是信用发行方，SBPS 是面向商户的 PSP / 收单接口。^[verified-2026-06-24]
- 业务页面还称 SBPS 持有 Visa、Mastercard 和 UnionPay 品牌许可，因此在梳理直接接触卡组织受理的日本 PSP 时很有用。^[verified-2026-06-24]
- 是与 [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、[[payment-firms/gmo-epsilon|GMO Epsilon]] 和 [[payment-firms/dg-financial-technology|DGFT]] 比较的有用对象。

## 3. 为何需要独立页面

SoftBank 的支付栈包含消费者钱包、信用卡发行方和商户 PSP 层。SBPS 是商户服务层，因此需要单独的运营公司页面。

## Related

- [[megabanks/paypay-fg]]
- [[card-issuers/paypay-card]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/cashless-jp-landscape]]

## Sources

- SB Payment Service 公司信息：https://www.sbpayment.co.jp/info/
- SB Payment Service 业务页面：https://www.sbpayment.co.jp/info/business/
- METI 信用交易政策页面：https://www.meti.go.jp/policy/economy/consumer/credit/
- METI 登记商户合同缔结业者 PDF：https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
