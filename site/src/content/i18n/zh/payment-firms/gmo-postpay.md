---
source: payment-firms/gmo-postpay
source_hash: 8627021be5280eb9
lang: zh
status: machine
fidelity: ok
title: "GMO Postpay"
translated_at: 2026-05-31T15:29:03.911Z
---

# GMO Postpay

## Wiki 路径

本条目位于 [[payment-firms/INDEX|payment-firms INDEX]] 之下，作为 PSP 侧 BNPL 产品的实体入口。请与 [[payment-firms/bnpl-landscape|日本 BNPL 全景]]、[[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、[[payment-firms/net-protections-hd|Net Protections HD]]、[[payment-firms/paidy|Paidy]] 以及 [[payments/japan-bnpl-credit-purchase-boundary|BNPL 与信用购买监管边界]] 配套阅读。[[payments/credit-purchase-card-operators-japan-index|METI 信用购买登记索引]]用于核对登记面，[[payments/japan-payment-scheme-economics-matrix|日本支付方案经济性矩阵]]用于比较卡、代码支付与后付费经济性。

## TL;DR

GMO Postpay 是 GMO Payment Service, Inc. 运营的 EC 后付费结算服务。该公司隶属于 GMO Internet Group，并与 [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] 处于关联业务关系。它体现了 PSP 出身集团将 BNPL、加盟店结算、信用判断、账单开具和代收流程整合到同一商户服务栈中的模式。与 Net Protections 的 NP 后払い、[[payment-firms/kuroneko-atobarai|Kuroneko deferred payment]] 和 [[payment-firms/paidy|Paidy]] 相比，GMO Postpay 的特征是更强的 PSP 与收单周边业务协同。

## 1. 法人与牌照边界

| 项目 | 内容 |
|---|---|
| 运营主体 | GMO Payment Service, Inc. |
| 集团关系 | GMO Internet Group；与 [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] 处于相关业务关系 |
| 服务类型 | EC 后付费结算、账单同封、便利店 / 银行转账 / 电子条码回收 |
| FinWiki 角色 | 将 PSP、BNPL、收单周边服务和便利店代收之间的边界分开 |

## 2. 业务角色

- [[payment-firms/gmo-payment-gateway|GMO PG]] 主要承担卡支付 PSP 线，GMO Payment Service 则承担后付费结算和便利店代收线。EC 商户因此可以在 GMO 系列内组合多种支付手段。^[extracted]
- 该模式将信用判断、账单发行、催收和回收代理外包给服务商，属于在 PSP 业务上叠加信用功能的 PSP 系 BNPL。^[extracted]
- 核心适用场景是 B2C EC，尤其是通販和订阅型 EC。

## 3. 独立页面的意义

[[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] 页面以卡支付 PSP 为主。将后付费业务作为 GMO Payment Service / GMO Postpay 的独立页面处理，可以更清楚地区分 PSP、BNPL、便利店代收、收单代理和信用购买监管之间的责任边界。

## 4. 监管与政策

- **资金结算法邻接**：便利店代收、前払式支付工具和 PSP 系 BNPL 的边界容易交错，需要逐项确认服务结构。
- **个人信息保护法**：信用判断数据与 EC 购买履历的处理必须与个人信息保护和数据安全要求相匹配。

## 相关

- [[payment-firms/gmo-payment-gateway]]
- [[payment-firms/bnpl-landscape]]
- [[payment-firms/net-protections-hd]]
- [[payment-firms/kuroneko-atobarai]]
- [[payment-firms/paidy]]
- [[payment-firms/atone]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-payment-scheme-economics-matrix]]

## 来源

- GMO Payment Service 官方网站：https://gmo-ps.com/
- GMO Payment Service "Postpay" 服务页：https://gmo-ps.com/service/postpay/
- GMO Payment Gateway 公司网站：https://www.gmo-pg.com/corp/
- METI 登记运营商名单：https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
