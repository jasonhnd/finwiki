---
source: payments/psp-merchant-settlement-risk
source_hash: a10e0427754465dd
lang: zh
status: machine
fidelity: ok
title: "PSP商户结算风险"
translated_at: 2026-06-01T03:31:12.226Z
---
﻿
# PSP商户结算风险

## 概述

商户 PSP 风险是结账成功和最终资金流动之间的风险：商户入职、卡号处理、欺诈监控、退款、准备金、结算时间、退款以及平台或钱包故障。在日本，分析必须结合 METI 的卡号处理/商户签约路线、FSA 资金转移注册、预付金额规则以及支付品牌/网络合同。

使用 [[payments/card-acquiring-japan-stack|Japan card acquiring stack]]、[[payments/funds-transfer-service-providers-japan-index|funds-transfer registry]] 和 [[payments/japan-code-payment-competitive-map|code-payment competitive map]] 阅读本页。当商家风险是真正的主题时，[[payment-firms/gmo-payment-gateway|GMO-PG]]、[[payment-firms/sb-payment-service|SBPS]]、[[payment-firms/dg-financial-technology|DGFT]] 和 [[payment-firms/netstars|Netstars]] 等公司页面链接到此处。

## 风险堆栈

| 图层 | 风险 | 典型控制 |
|---|---|---|
| 商户入职 | 欺诈商家、违禁品、履行不佳、容易退款的商业模式 | KYC / KYB、商户筛选、品类控制、持续监控 |
| 卡号处理 | 卡数据泄露、令牌化失败、PCI DSS 不合规 | 非保留、标记化、PCI DSS、安全审核 |
| 授权/欺诈 | 卡被盗、账户接管、骡子交易、友好欺诈 | 3-D 安全、速度检查、设备/行为监控 |
| 结算时间 | PSP 在最终网络/钱包结算确定之前向商家付款 | 准备金、延迟结算、风险限额、滚动余额 |
| 退款/取消 | 商家失败或活动取消后退款激增 | 合同扣留、退款监控、商户集中度控制 |
| 钱包/代码支付路由 | 多个品牌和资金来源造成运营和对账的复杂性 | 品牌协调、异常处理、SLA 监控 |
| 资金转账 | 可提取或可转让的余额会产生法定保障和反洗钱问题 | FSA 资金转移控制、AML/CFT 监控、保障安排 |

## 日本监管途径

| 路线 | 公共相关性 |
|---|---|
| METI 与运营商签订信用卡号码处理合同 | 根据《分期付款销售法》确定谁负有商户签约/卡号处理责任。 |
| FSA 资金转账服务提供商 | 适用于 PSP/钱包功能包括超越纯卡处理的传输功能的情况。 |
| FSA 预付发行人登记处 | 适用于发行不可提取储值供第三方使用的情况。 |
| 卡网络和 PCI DSS | 即使不是公共法律登记处，操作也至关重要。 |
| 无现金促进委员会出版物 | 对于跟踪代码支付使用情况、商家接受趋势和行业标准化工作很有用。 |

## 公司镜头

| 操作员类型 | 示例 | 主要问题 |
|---|---|---|
| 上市卡/PSP 基础设施 | [[payment-firms/gmo-payment-gateway|GMO-PG]] | 网关服务、商户结算、借贷或增值工具的风险有多大？ |
| 电信/团体PSP | [[payment-firms/sb-payment-service|SBPS]] | PayPay/软银分销如何影响商户获取和风控？ |
| 旧版/企业 PSP | [[payment-firms/dg-financial-technology|DGFT]] | 企业商户品质如何改变拒付和结算风险？ |
| 二维码网关 | [[payment-firms/netstars|Netstars]] | 多个代码支付品牌如何在商户端协调和控制？ |
| 钱包/资金转账运营商 | [[payment-firms/paypay|PayPay]]、[[payment-firms/merpay|Merpay]]、[[payment-firms/recruit-mufg-business|Recruit MUFG Business]] | 运营商是否承担余额/转账/支付风险，还是仅承担路由接受风险？ |

## 实用阅读规则

- 不要仅从交易量来推断盈利能力；商家组合、欺诈损失、补贴和结算时间都很重要。
- 不要仅从品牌展示推断风险归属；合法收单方、注册商户签约方、PSP 和钱包可以是不同的实体。
- 将高风险商户类别、跨境交易、订阅、数字商品和活动门票视为比低门票日常零售风险更高的风险。
- 对卡和商户签约路线使用 [[payments/credit-purchase-card-operators-japan-index|credit purchase / card registry]]，然后仅在涉及价值转移或预付价值时分层 FSA 注册。

## 相关

- [[payments/INDEX]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/japan-code-payment-competitive-map]]
- [[payment-firms/netstars]]
- [[payment-firms/gmo-payment-gateway]]

## 来源

- METI 分期付款销售法概述/常见问题解答：https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html
- METI 注册运营商名单：https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- FSA 资金转账服务提供商名单：https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
- 无现金促进会代码支付趋势调查公布页面：https://paymentsjapan.or.jp/publications/code-payments-20260330/
