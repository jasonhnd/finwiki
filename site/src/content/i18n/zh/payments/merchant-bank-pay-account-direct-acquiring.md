---
source: payments/merchant-bank-pay-account-direct-acquiring
source_hash: cf95d821def01a8c
lang: zh
status: machine
fidelity: ok
title: "日本商业银行账户直接收单"
translated_at: 2026-06-01T03:31:12.293Z
---

# 日本商业银行账户直接收单

## 概述

商户银行账户直收是商户端读取[[payments/account-to-account-payment-japan|Japan account-to-account payment route]]。 Bank Pay和J-Debit在结账时看起来与普通的二维码/借记卡受理类似，但控制界面与卡收单、预付钱包和资金转账钱包不同：支付从银行账户开始，商户入驻涉及Bank Pay / J-Debit参与者规则，操作风险集中在账户认证、退款处理、注册筛选、系统连接和结算等方面。

将此页面与 [[payments/INDEX|payments domain]]、[[payments/card-acquiring-japan-stack|Japan card acquiring stack]]、[[payments/psp-merchant-settlement-risk|PSP merchant settlement risk]]、[[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]] 和 [[financial-licenses/INDEX|JapanFG legal / financial licenses]] 一起使用。

## 商户路线图

| 路线 | 面向商户的阅读 | 主要控制问题 |
|---|---|---|
| 银行支付直销商户 | 商户直接注册或通过银行支付参与者结构注册。 | 谁负责商家筛选、注册、支持、退款/取消流程以及结算对账？ |
| 银行支付间接/连接应用程序路线 | 连接的企业或应用程序提供支付 UI 或商家系统连接。 | 连接提供商是谁？下游的银行支付指南/合同义务是什么？ |
| J-Debit 商户 | 商户通过 J-Debit 基础设施接受银行现金卡借记。 | 商户是否有直接/间接 J-Debit 受理和终端/PIN 控制？ |
| PSP网关层 | PSP 或支付网关将帐户直接接受与其他支付方式包装在一起。 | 将银行支付/J-Debit 义务与卡收单、代码支付和钱包结算风险分开。 |
| Cotra-相邻账单/应用流程 | 帐户直接应用程序付款也可能会出现 Cotra 汇款或账单支付功能。 | 不要混淆个人转账、税款/账单支付和商家购买接受。 |

## 银行支付参与者堆栈

JEPPO 的 Bank Pay 商户注册规则定义了 Bank Pay 商户注册，并区分直接商户、自愿协会、金融机构商户、间接商户、代表性间接商户和关联业务路线。注册规则还要求Bank Pay商户银行在提交注册材料之前对业务类型、服务内容、财务稳健性和反社会势力进行筛查。

银行支付指南进一步定义了连接提供商和重新连接提供商。实际上：

- 商人可能不是唯一的运营主体；
- 连接的应用程序或系统提供商可以位于商家和银行支付基础设施之间；
- 金融机构和 JEPPO 规则影响入职和持续合规；
- 应用程序/服务器连接、交易中继、清算和退款/取消处理必须被理解为操作层，而不是营销文本。

## 控制矩阵

| 控制区 | 公共相关性 |
|---|---|
| 商户筛选 | 账户直接通道将资金从银行账户转移，因此业务类型、违禁商品、欺诈风险和财务稳健性都很重要。 |
| 反社会力量检查 | JEPPO 注册规则明确包括与反社会势力相关的拒绝/确认路线。 |
| 互联业务治理 | 银行支付可以涉及连线业务和重连业务；义务需要通过应用程序/系统提供商来履行。 |
| 客户认证 | 银行账户注册、应用程序身份验证、设备转移和交易授权是中心风险点。 |
| 退款/取消 | 帐户直接退款不同于卡退款和钱包余额冲销。 |
| 结算对账 | 商户结算、清算中心产出和银行账户现金流动必须与商户分类账和 PSP 报告相匹配。 |
| 系统可用性 | JEPPO公告显示银行支付功能的维护/事件消息，因此操作可用性属于商户风险审查范围。 |
| 用户说明 | 消费者可能会看到二维码支付，但不知道来源是账户直接、钱包余额、卡还是预付金额。 |

## 与卡、钱包收单对比

| 话题 | 账户直接/银行支付/J-Debit | 卡收单/PSP | 钱包/代码支付 |
|---|---|---|---|
| 资金来源 | 银行存款账户。 | 信用额度、借记卡、预付卡或卡网络帐户。 | 钱包余额、关联银行/卡、预付或资金转账余额。 |
| 商户入职 | 银行支付/J-Debit 参与者和银行/JEPPO 路线。 | 收单机构/PSP/卡网络规则。 | 钱包运营商/PSP/商家合约路线。 |
| 争议经济学 | 退款/取消和账户借记规则；不是标准的信用卡退款模型。 | 退款和卡计划争议规则。 | 钱包特定的退款、欺诈、准备金和结算规则。 |
| 风险焦点 | 账户接管、未经授权的借记、应用程序注册、商家筛选。 | 卡欺诈、退款、PCI DSS、收单方风险。 | 钱包余额、商家欺诈、奖金/活动滥用、反洗钱/资金转移边界。 |
| 数据价值 | 银行账户支付频率和商户类别。 | 卡网络和收单机构交易数据。 | 应用频率、忠诚度、钱包、活动和商家数据。 |

## JapanFG 相关性

- [[megabanks/mufg-bank|MUFG Bank]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]]、[[megabanks/mizuho-bank|Mizuho Bank]] 和 [[megabanks/resona-bank|Resona Bank]] 很重要，因为账户直接支付取决于银行参与和清算/结算连接。
- [[payment-firms/recruit-mufg-business|Recruit MUFG Business]] / COIN+通过商家网络和账户直接获取镜头进行路由，而不仅仅是作为另一个QR钱包。
- [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、[[payment-firms/gmo-epsilon|GMO Epsilon]]、[[payment-firms/sb-payment-service|SB Payment Service]]、[[payment-firms/dg-financial-technology|DGFT]] 和 [[payment-firms/netstars|Netstars]] 是账户直接受理与卡、钱包或代码支付受理捆绑时进行比较的 PSP/网关页面。
- [[payment-firms/paypay|PayPay]]、[[payment-firms/merpay|Merpay]]、[[payment-firms/au-payment|au PAY]] 和 [[payments/japan-code-payment-competitive-map|code-payment competition]] 保持独立，因为钱包经济学和帐户直接经济学在 QR 形式中看起来相似，但在法律和操作上有所不同。

## 研究清单

1. 确定商户途径是 Bank Pay、J-Debit、钱包代码支付、卡收单还是 PSP 捆绑包。
2. 识别商户合约方：银行、JEPPO 相关路径、PSP、关联企业、钱包运营商或收单机构。
3. 检查商家是否是直接、间接或通过其他应用程序/系统提供商连接的。
4. 绘制退款、取消、付款失败和对账流程。
5. 如果商家依赖实时帐户借记，请检查系统维护/事件通知。
6. 将帐户直接欺诈控制与卡退款控制和预付费/资金转账钱包控制分开。

## 有关的

- [[payments/INDEX]]
- [[payments/account-to-account-payment-japan]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-code-payment-competitive-map]]
- [[payment-firms/recruit-mufg-business]]
- [[payment-firms/gmo-payment-gateway]]
- [[payment-firms/netstars]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[financial-licenses/INDEX]]
- [[INDEX|FinWiki index]]

## 来源

- JEPPO：官方组织/服务页面。
- JEPPO：银行支付官方页面。
- JEPPO：银行支付商户注册规则 PDF。
- JEPPO：银行支付指南 PDF。
- Zengin-Net：Cotra系统解释。
- Cotra：官方 P2P 转账页面。
- FSA：资金转账服务提供商注册机构。
