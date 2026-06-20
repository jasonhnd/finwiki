---
source: payment-firms/sb-payment-service
source_hash: 6310ec2bda2daaec
lang: zh
status: machine
fidelity: ok
title: "SB Payment Service"
translated_at: 2026-06-20T09:33:00.420Z
---
# SB Payment Service


## Wiki route

本条目位于 [[payment-firms/INDEX|payment-firms INDEX]] 之下。可与 [[payment-firms/gmo-epsilon|GMOイプシロン (GMO Epsilon)]] 对照阅读同业 / 对比语境，并与 [[payments/INDEX|payments index]] 阅读更广泛的系统 / 监管边界。

## TL;DR

SB Payment Service 是 SoftBank group 的 merchant payment / PSP operator。官方业务介绍显示，其提供从线上到门店的支付服务，并作为收单机构进行加盟店审查、管理和支付服务提供，是 [[payments/card-acquiring-japan-stack|card acquiring stack]] 的主要页面。

## 1. 法人 / 牌照边界

| Item | Reading |
|---|---|
| Legal entity | SB Payment Service 株式会社 |
| Group context | SoftBank / LY / PayPay payment ecosystem |
| Main lanes | PSP, merchant acquiring, online and offline payment services |
| Regulatory route | Card-number merchant-contracting / acquiring control through METI registered-operator lists and official business disclosures. |

## 2. Business role

- 提供 PayPay consumer wallet 之外面向商户的支付基础设施，覆盖线上结账、门店支付服务、卡 / 积分服务、代收、汇款以及相关咨询业务。
- 连接卡受理、线上结账、结算运营、安全控制和商户管理。因此它更接近 PSP / 收单控制层，而不是消费者钱包品牌。
- 官方公司概要显示 SoftBank 为 100% 股东，并列出 PayPay SC 为相关公司，因此应把它放在更广义的 SoftBank / PayPay 商户服务堆栈中阅读。
- 是与 [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、[[payment-firms/gmo-epsilon|GMO Epsilon]]、[[payment-firms/dg-financial-technology|DGFT]] 对比的有用参照。

## 3. PSP 堆栈与监管位置

| 层级 | 公开来源解读 |
|---|---|
| 商户 PSP | 官方业务页面将 SBPS 定位为向企业客户提供从线上到实体门店渠道的支付服务。 |
| 结算 / 代收 | 公司概要列出支付服务、卡 / 积分服务、代收服务、汇款服务和相关咨询。 |
| 割赋销售法相邻边界 | METI 注册经营者页面是卡号加盟店契约締结和信用卡处理边界的控制点。 |
| 其他登记 | 官方概要列出第三方型预付式支付手段发行者、资金转移、电信、卡号加盟店契约締结和电子支付等代行业登记；这些是在同一 PSP 运营商下的不同法律表面。 |

## 4. Why this standalone page matters

SoftBank 的支付栈包含 consumer wallet、card issuer 和 merchant PSP 层。SBPS 是 merchant-services layer，因此需要独立的 operating-company 页面。

## Related

- [[megabanks/paypay-fg]]
- [[card-issuers/paypay-card]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/cashless-jp-landscape]]

## Sources

- SB Payment Service company information: https://www.sbpayment.co.jp/info/
- SB Payment Service company profile: https://www.sbpayment.co.jp/info/profile/
- SB Payment Service business page: https://www.sbpayment.co.jp/info/business/
- METI registered operators under the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
