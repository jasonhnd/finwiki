---
source: payment-firms/net-protections-hd
source_hash: 89acfa7df7d5f896
lang: zh
status: machine
fidelity: ok
title: "Net Protections HD"
translated_at: 2026-06-01T00:41:50.411Z
---

# Net Protections HD

## Wiki route

本条目作为纯粹的 **BNPL 运营商** 位于 [[payment-firms/INDEX|payment-firms INDEX]] 下。可与 [[payment-firms/bnpl-landscape|Japan BNPL landscape]] 系统说明和 [[payment-firms/paidy|Paidy]] 同业对照阅读；[[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] 页面提供监管视角，[[payments/credit-purchase-card-operators-japan-index|credit-purchase / card operator registry]] 则锚定经产省登记轨迹。

## TL;DR

Net Protections Holdings（东证 PRIME **7383**）是日本最早进入 BNPL 的纯玩家，最知名产品是 EC 商户作为“便利店 / 银行转账后付款”选项接入的发票型 BtoC 产品 **NP 后払い**。集团还运营 **atone**（消费者侧钱包 BNPL）、**AFTEE**（面向台湾 / 越南的东南亚 BNPL）以及 **NP 掛け払い**（BtoB 发票结算）。不同于 [[payment-firms/paidy|Paidy]]，它是独立运营商而非支付平台所有；也不同于 [[card-issuers/jaccs|Jaccs]] 或 [[card-issuers/orico|Orico]]，它有意避开信用卡栈。[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] 是观察商户费 BNPL 经济性为何偏离卡交换费的最清晰入口。

## 1. 法人 / 牌照边界

| Item | Reading |
|---|---|
| Legal entity | 株式会社 Net Protections Holdings |
| Operating subsidiary | 株式会社 Net Protections（直接运营 NP 后払い / atone / NP 掛け払い 等） |
| Listing | 东证 PRIME 7383 (2021-12 上市) |
| Group lanes | EC 后付款（NP 后払い）/ 消费者 BNPL 钱包（atone）/ BtoB 挂账结算（NP 掛け払い）/ 海外 BNPL（AFTEE：台湾 / 越南） |

## 2. 业务角色

- **NP 后払い** 是日本 EC 后付款（随附发票型）的代表品牌。面向加盟店，它将授信判断 + 发票开具 + 催收打包为 **承担未回收风险的保证型 BNPL** 服务。^[extracted]
- **atone** 是以消费者账户为起点的月结 BNPL 钱包，可跨加盟店实现“下月便利店付款”（UX 接近 [[payment-firms/paidy|Paidy]]，但品牌和经济圈独立）。^[extracted]
- **NP 掛け払い** 以 BNPL 结构提供 BtoB 交易的发票代办 + 授信 + 收款代办，将传统“发票 -> 转账 -> 催收”流程 SaaS 化。
- **AFTEE** 进入台湾和越南的 EC 后付款市场，将 Net Protections 的授信模型移植到海外。^[extracted]

## 3. 本独立页面为何重要

Net Protections 虽然是日本 BNPL 在 **交易额 / 加盟店数量** 方面规模最大的独立运营商之一，但其公司主体不会像 [[payment-firms/paidy|Paidy]] 或 [[card-issuers/aplus|アプラス]] 那样被吸收到既有母集团页面中。因此，在 JapanFG 命名空间中将其作为 **独立 BNPL 控股公司** 单独成页价值很高。

## 4. 监管 / 政策

- **个人信息保护法**：用于授信判断的个人数据（属性 / 交易历史）的处理方式和第三方提供范围是关键论点。
- **东证 PRIME 披露**：作为上市公司，其季度 IR 和有价证券报告书披露 GMV、加盟店数量和信用损失率，因此是少数可通过公开数字阅读独立 BNPL 经济性的案例。^[extracted]

## Related

- [[payment-firms/bnpl-landscape]]
- [[payment-firms/paidy]]
- [[payment-firms/merpay]]
- [[card-issuers/jaccs]]
- [[card-issuers/orico]]
- [[card-issuers/credit-saison]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[card-issuers/installment-sales-act-2020-amendment]]

## Sources

- Net Protections HD corporate site: https://corp.netprotections.com/
- Net Protections IR: https://corp.netprotections.com/ir/
- NP 后払い product site: https://www.netprotections.com/
- atone product site: https://atone.be/
- AFTEE product site (overseas BNPL): https://aftee.jp/
- 经产省《分期付款销售法》注册经营者名单: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
