---
source: payment-firms/net-protections-hd
source_hash: 21d85cd2e0b94dde
lang: zh
status: machine
fidelity: ok
title: "Net Protections HD（ネットプロテクションズHD）"
translated_at: 2026-06-24T07:24:12.876Z
---
# Net Protections HD（ネットプロテクションズHD）

## Wiki 路由

本条目作为 pure-play **BNPL operator** 位于 [[payment-firms/INDEX|payment-firms INDEX]] 之下。对比阅读时可结合 [[payment-firms/bnpl-landscape|Japan BNPL landscape]] 系统笔记和 [[payment-firms/paidy|Paidy]] 同业页面；监管视角由 [[payments/japan-bnpl-credit-purchase-boundary|Japan BNPL and credit-purchase boundary]] 提供，METI 登记线索由 [[payments/credit-purchase-card-operators-japan-index|credit-purchase / card operator registry]] 锚定。

## TL;DR

Net Protections Holdings（东证 PRIME **7383**）是日本较早的 BNPL pure-play 公司，最知名的是 **NP 後払い** 这一 invoice-based BtoC 产品，EC 商户将其作为“到货后便利店 / 银行转账付款”选项接入。集团还运营 **atone**（消费者侧 wallet BNPL）、**AFTEE**（带有台湾产品站点的海外 BNPL）和 **NP 掛け払い**（BtoB invoicing）。不同于 [[payment-firms/paidy|Paidy]]，它是独立公司而非支付平台旗下；也不同于 [[card-issuers/jaccs|Jaccs]] 或 [[card-issuers/orico|Orico]]，它有意不进入信用卡栈。要看 merchant-fee BNPL economics 为什么不同于 card interchange，[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] 是最清晰的入口。^[verified-2026-06-24]

## 1. 实体 / 牌照边界

| 项目 | 解读 |
|---|---|
| 法人实体 | 株式会社ネットプロテクションズホールディングス |
| 运营子公司 | 株式会社ネットプロテクションズ（直接运营 NP 後払い / atone / NP 掛け払い 等） ^[verified-2026-06-24] |
| 上市 | 东证 PRIME 7383 （2021-12  上市） |
| 集团通道 | EC 后付款（NP 後払い）/ consumer BNPL wallet（atone）/ BtoB 挂账（NP 掛け払い）/ overseas BNPL（AFTEE）^[verified-2026-06-24] |

## 2. 业务角色

- **NP 後払い** 是日本 EC 后付款（随货附发票型）的代表品牌。面向商户，它将授信判断 + 发票发行 + 催收打包为承担未回收风险的保证型 BNPL。NP 後払い 官方站点说明，消费者收货后可凭发票在便利店、银行或邮局付款，并强调未回收风险保证。^[verified-2026-06-24]
- **atone** 是以消费者账户为起点的月结 BNPL 钱包，使用户可跨商户“下月便利店付款”（UX 接近 [[payment-firms/paidy|Paidy]]，但品牌和经济圈独立）。^[verified-2026-06-24]
- **NP 掛け払い** 以 BNPL 结构提供 BtoB 交易的发票代开、授信和代收，将传统“发票 → 转账 → 催收”流程 SaaS 化。^[verified-2026-06-24]
- **AFTEE** 是从 Net Protections corporate site 引出的海外 EC 后付款品牌，官方产品站点以台湾市场 BNPL 产品形式展开。^[verified-2026-06-24]
- 组合拆分对理解经济性很重要：NP 後払い 是商户接入型发票 BNPL，atone 是基于账户的 consumer BNPL，NP 掛け払い 是 BtoB invoicing / collection，AFTEE 是海外延伸，因此控股公司不能被简化成一个 checkout product。^[verified-2026-06-24]

## 3. 为何需要独立页面

Net Protections 作为日本 BNPL 的独立运营商，其公司边界不像 [[payment-firms/paidy|Paidy]] 或 [[card-issuers/aplus|アプラス]] 那样被吸收进既有母集团页面，因此在 JapanFG 命名空间中作为 **独立 BNPL 控股公司** 单独成页很有价值。

## 4. 监管 / 政策

- **个人信息保护法**：为授信判断处理个人数据（属性 / 交易历史）以及第三方提供范围，是核心论点。
- **东证 PRIME 披露**：作为上市公司，它通过季度 IR 和有价证券报告书公开 GMV、加盟店数和授信损失率，因此是少数可以用公开数字阅读独立 BNPL 经济性的案例。^[extracted]

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

- Net Protections HD corporate site：https://corp.netprotections.com/
- Net Protections IR：https://corp.netprotections.com/ir/
- NP 後払い 产品站点：https://www.netprotections.com/
- atone 产品站点：https://atone.be/
- NP 掛け払い 产品站点：https://np-kakebarai.com/
- AFTEE 产品站点（overseas BNPL）：https://www.aftee.tw/
- METI 信用交易政策页面：https://www.meti.go.jp/policy/economy/consumer/credit/
- METI 登记商户合同缔结业者 PDF：https://www.meti.go.jp/policy/economy/consumer/credit/teiketsuichiran.pdf
