---
source: payments/credit-purchase-card-operators-japan-index
source_hash: 823daef870391414
lang: zh
status: machine
fidelity: ok
title: "日本信用卡购买和卡运营商登记索引"
translated_at: 2026-06-01T03:31:12.248Z
---
# 日本信用卡购买和卡运营商登记索引

## 概述

METI 的《分期付款销售法》公开清单是日本信用卡发行、购物信贷、个人分期付款信贷以及商户签约/卡号处理的控制界面。截至**2026-04 月底**，METI列出了**241 注册综合信用购买中介**、**0 小型综合信用购买中介**、**138 注册个人信用购买中介**，以及**275  注册信用卡号码处理合同签订运营商**。

使用 [[payments/card-acquiring-japan-stack|Japan card acquiring stack]] 和 [[payments/funds-transfer-service-providers-japan-index|funds-transfer registry]] 阅读此页面，以区分卡信用、商户收单、PSP 操作和钱包/转账产品。 METI 官方 PDF 仍然是行级事实来源。

## 注册表快照

|登记处 |截至日期 |计数|维基处理|
|---|---:|---:|---|
| 登录包括信用购买者 | 2026-04 月末 | 241 |路线材料发卡机构/信贷公司；在 METI PDF 中保留区域长尾。 |
| 登录少额包括信用购买入あっせん业者| 2026-04 月末 | 0 |没有独立的维基操作。 |
| 登录个体信用购入あっせん业者| 2026-04 月末 | 138 |仅推广重要的分期信贷、汽车金融、法国国家银行或银行集团信贷运营商。 |
| kureジットカード番号等取扱契约缔结事业者| 2026-04 月末 | 275 |用于收单机构、商户 PSP 和卡号处理责任。 |

## 边界

|边界 |治疗 |
|---|---|
|综合信用采购中介|卡/循环/信用购买运营商路线；通常与发卡机构页面重叠。 |
|个人信用采购中介|购物信贷、汽车金融、教育/医疗信贷等销售金融路径。 |
|信用卡号码处理合同签订运营商|商户签约和卡数据控制路线；对于 PSP/采集分析至关重要。 |
|资金转账运营商|使用 FSA 注册和 [[payments/funds-transfer-service-providers-japan-index]]。 |
|预付发行人 |使用 FSA 预付费注册和 [[payments/prepaid-payment-instrument-issuers-japan-index]]。 |

## 现有的 Material Wiki 路线

|细分 |路线 |为什么这些是独立的 |
|---|---|---|
| Megabank / 银行集团发卡机构 | [[card-issuers/smbc-card]]、[[card-issuers/mufg-nicos]]、[[card-issuers/jcb]]、[[trust-banks/mitsubishi-ufj-trust-bank]] |发卡/收单、银行集团策略、卡网络或信托银行邻接。 |
|零售/生态系统发卡机构| [[card-issuers/rakuten-card]]、[[card-issuers/paypay-card]]、[[card-issuers/aeon-financial-service]]、[[card-issuers/epos-card]]、[[card-issuers/seven-card-service]]、[[card-issuers/ucs-card]]、[[card-issuers/life-card]]、[[card-issuers/pocket-card]] |消费者信贷、忠诚度、零售金融和支付数据循环。 |
|消费金融/分期 | [[consumer-finance/smbc-consumer-finance]]、[[consumer-finance/acom]]、[[consumer-finance/aiful]]、[[card-issuers/orico]]、[[card-issuers/jaccs]]、[[card-issuers/aplus]]、[[consumer-finance/shinsei-financial]]、[[card-issuers/toyota-finance]] |借贷/担保/分期等信用经营公司。 |
|商家 PSP / 收单 | [[payment-firms/gmo-payment-gateway]]、[[payment-firms/gmo-epsilon]]、[[payment-firms/sb-payment-service]]、[[payment-firms/dg-financial-technology]]、[[payment-firms/netstars]] |商户入职、网关、卡号处理和结算风险基础设施。 |
|钱包/嵌入式金融| [[payment-firms/recruit-mufg-business]]、[[payment-firms/jal-payment-port]]、[[payment-firms/paypay]]、[[payment-firms/merpay]]、[[payment-firms/au-payment]] |钱包通常结合了预付费、转账、商家支付和卡联轨道。 |

## 分析镜头

对于 FinWiki 来说，METI 列表最重要的用途不是“谁出现在 PDF 中”，而是“运营商在信贷和收单堆栈中扮演什么角色”。

- 发卡机构拥有消费者信用和还款行为。
- 个人信贷运营商连接商家、消费者和产品融资。
- 商户签约运营商决定哪些商户可以接受卡并承担入职/监控职责。
- 即使最终的商业签约机构属于另一个注册收单机构，PSP 也可能在技术上处于中心地位。
- 一些运营商位于多个列表中，因此一个公司页面解释了边界，而不是为每个许可证复制页面。

## 相关

- [[payments/INDEX]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/psp-merchant-settlement-risk]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[financial-regulators/missing-financial-institutions-backlog]]
- [[financial-licenses/INDEX]]
- [[INDEX|FinWiki index]]

## 来源

- METI信用交易政策页面：https://www.meti.go.jp/policy/economy/consumer/credit/index.html
- METI 注册运营商列表：https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- 日本经济产业省注册综合信用购买中介 PDF：https://www.meti.go.jp/policy/economy/consumer/credit/tourokuhoukatsuichiran.pdf
- 日本经济产业省注册个人信用购买中介 PDF：https://www.meti.go.jp/policy/economy/consumer/credit/tourokukobetsuichiran.pdf
- METI 信用卡号码处理合同签订运营商 PDF：https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
