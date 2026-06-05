---
source: payments/funds-transfer-service-providers-japan-index
source_hash: 4f5cf344ee7b1162
lang: zh
status: machine
fidelity: ok
title: "日本资金转账服务提供商注册索引"
translated_at: 2026-06-01T03:31:12.281Z
---

# 日本资金转账服务提供商注册索引

## 概述

FSA 的资金转账服务提供商列表包含截至 2026-04-30** 的 **83  注册运营商。该页面是[[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid]]分析的注册表控制路径；它不会重现所有行级注册表数据。

当需要将 [[payments/INDEX|payments INDEX]] 下的公司页面读取为汇款运营商、钱包运营商、汇款提供商、具有转账功能的 PSP 或稳定币相关结算公司时，请使用此页面。官方 FSA PDF 仍然是注册号、日期、地址和服务类型列的真实来源。

## 注册表快照

|公制|阅读|
|---|---:|
| FSA 截至日期 | 2026-04-30 |
|注册资金转账服务提供商总数 | 83 |
|主要调节路线| FSA《资金转移代理注册名单》|
|维基复制政策 |不要复制所有 83  行；在此处引用 FSA 并维护材料 wiki 路线。 |

## 管辖权很重要

|管辖范围 |运营商|
|---|---:|
| 北海道财务局 | 2 |
|关东地方财政局| 76 |
| 东海财务局 | 1 |
|北陆财务局| 1 |
|近畿地方财政局| 3 |
| **总计** | **83** |

## 边界

|边界 |治疗 |
|---|---|
|资金转账服务提供商|根据《支付服务法》注册，可在银行牌照途径之外进行兑换交易。 |
|第三方预付发行人 |当值为不可提取的存储值时路由至 [[payments/prepaid-payment-instrument-issuers-japan-index|prepaid issuer registry]]。 |
|银行/银行代理|当核心产品是吸收存款、银行账户访问或银行代理时，路由至 [[banking/INDEX|banking]]。 |
|卡收单/商户合同|通往 [[payments/card-acquiring-japan-stack|card acquiring stack]] 和 METI 的分期付款销售法列表的路线。 |
|稳定币/EPI |当涉及电子支付工具时，路由至 [[fintech/japan-stablecoin-regulatory-landscape|stablecoin regulation]] 和 EPI 运营商页面。 |

## 现有的 Material Wiki 路线

这些路线是 FinWiki 中已经涵盖或新推广的材料运营商。它们不是 83 行 FSA 列表的完整复制。

|细分 |官方/产品路线|维基路线|边界注释 |
|---|---|---|---|
|大码支付钱包 |支付宝公司| [[payment-firms/paypay]] |钱包、代码支付、预付费、资金转账、工资数字支付邻接 |
|市场钱包 |默佩有限公司| [[payment-firms/merpay]] |市场支付和钱包路线 |
|电信钱包 | au支付有限公司| [[payment-firms/au-payment]] | au PAY 资金转账/预付边界|
|预付电子货币|乐天Edy有限公司| [[payment-firms/rakuten-edy]] |储值加资金转账登记途径|
|消费者钱包/预付卡|凯亚士有限公司| [[payment-firms/kyash]] |钱包、预付卡、资金转账 |
|家用钱包|智慧银行股份有限公司| [[payment-firms/smartbank]] |消费者钱包和卡关联储蓄用户体验 |
|零售/ATM结算|七支付服务有限公司| [[payment-firms/seven-payment-service]] |七和一结算基础设施|
| PSP/网关| GMO 支付网关公司 | [[payment-firms/gmo-payment-gateway]] |上市 PSP 并进行资金转账登记 |
| PSP/网关| GMO Epsilon 公司| [[payment-firms/gmo-epsilon]] |中小企业商户PSP/转账路线|
| PSP/网关| SB支付服务有限公司| [[payment-firms/sb-payment-service]] | SoftBank / PayPay集团商户PSP |
| PSP/网关|德光金融科技有限公司| [[payment-firms/dg-financial-technology]] | Digital Garage PSP/商户结算路线|
|二维码网关 |网星有限公司| [[payment-firms/netstars]] | StarPay QR / 多种无现金网关和资金转账注册 |
| COIN+ / 空气钱包 |招聘三菱日联金融集团商业有限公司 | [[payment-firms/recruit-mufg-business]] |招募+MUFG钱包/转账运营商|
|旅行钱包|日航支付端口有限公司| [[payment-firms/jal-payment-port]] | JAL Pay、预付、银行代理、转账路线 |
|跨境汇款 |日本Wise Payments株式会社| [[payment-firms/wise-payments-japan]] |跨境汇款/多币种转账|
|跨境汇款 | REVOLUT TECHNOLOGIES JAPAN 株式会社 | [[payment-firms/revolut-technologies-japan]] |基于App的国际转账/钱包路线|
|跨境汇款 |贝宝私人有限公司有限公司| [[payment-firms/paypal-pte-ltd-japan]] |跨境支付/钱包边界|
|跨境汇款 | Payoneer日本株式会社| [[payment-firms/payoneer-japan]] |市场支付和跨境汇款 |
|跨境汇款 |日本西联汇款有限公司| [[payment-firms/western-union-japan]] |汇款网|
|跨境汇款 | SBI Remit 有限公司 | [[payment-firms/sbi-remit]] | SBI集团汇款运营商|
|外汇/旅行钱|日本通济隆株式会社| [[payment-firms/travelex-japan]] |零售外汇/汇款邻接|
|跨境商业支付|日本Airwallex株式会社| [[payment-firms/airwallex-japan]] |跨境B2B支付基础设施|
|稳定币相关资金转移 | JPYC 株式会社 | [[payment-firms/jpyc]] |资金转账+稳定币/EPI邻接|
|银集团消费金融| APLUS有限公司| [[card-issuers/aplus]] |分期付款/卡/资金转账邻接|
|电信 FG 关注列表 | NTT Docomo 金融集团有限公司 | NTT Docomo 金融集团[[megabanks/ndfg]] |新的注册表行；随着集团结构的成熟，关注运营公司的路由

## 促销细则

仅当操作员满足以下条件时，才将注册表行提升为独立 wiki 页面：

- 主要消费者钱包、汇款网络、商家 PSP、代码支付网关、上市集团或稳定币相关运营商；
- 对于 [[payments/cashless-jp-landscape|Japan cashless payment]] 分析线程已经很重要；
- 公共资源足够丰富，足以支持战略、许可边界和风险分析；或者
- 需要解决 [[financial-regulators/missing-financial-institutions-backlog|the JapanFG expansion backlog]] 中的母公司/运营公司区别。

## 有关的

- [[payments/INDEX]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/card-acquiring-japan-stack]]
- [[financial-licenses/INDEX]]
- [[financial-regulators/missing-financial-institutions-backlog]]
- [[INDEX|FinWiki index]]

## 来源

- FSA 许可证/注册索引：https://www.fsa.go.jp/menkyo/menkyo.html
- FSA 资金转账服务提供商列表：https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
- 针对资金转账运营商的 FSA 表格/监管途径：https://www.fsa.go.jp/common/shinsei/shikinidou.html
