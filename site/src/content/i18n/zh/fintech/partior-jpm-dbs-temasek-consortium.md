---
source: fintech/partior-jpm-dbs-temasek-consortium
source_hash: 68c870bbc2b6face
lang: zh
status: machine
fidelity: ok
title: "Partior：JPM / DBS / StanChart / Temasek 跨境批发结算联盟"
translated_at: 2026-05-31T11:13:44.000Z
---

# Partior：JPM / DBS / StanChart / Temasek 跨境批发结算联盟

## Wiki 路由

本条目属于 [[fintech/INDEX|fintech index]]。阅读时可与 [[fintech/fnality-wholesale-settlement|Fnality]] 的欧美 wholesale 路线、[[fintech/jpm-onyx-wholesale-network|JPM Onyx]] 的单行 tokenized deposit 路线，以及 [[fintech/singapore-mas-payment-services-act-overview|MAS PSA 监管框架]] 对照，以理解 Partior 的新加坡联盟型跨境结算定位。

> [!info] TL;DR
> Partior Pte Ltd 是 2021-04 由 JPMorgan、DBS 与 Temasek 共同设立的新加坡 wholesale 跨境结算公司。2024 年 Standard Chartered 成为第 4 个主要股东，iFAST 等 fintech 参与扩大网络。主网在 2021-08 上线，初期支持 USD / SGD，之后扩展至 USD / SGD / EUR / GBP / JPY 等币种。Partior 可视为多大型银行联盟 + MAS 监管框架下的亚洲 wholesale settlement 路线。

## 关键事实

- 注册地：新加坡；2021-04 由 JPMorgan、DBS、Temasek 共同创设。
- 主网：2021-08 上线，初期处理 USD / SGD 跨境结算。
- 股东扩展：2024 年 Standard Chartered 作为主要股东加入。
- 网络扩展：2025-Q3 iFAST 和多家亚洲银行 / FX 服务提供方加入网络。
- 支持币种：公开资料列示 USD / SGD / EUR / GBP / JPY，并计划扩展至更多亚洲币种。
- 技术栈：公开资料提到 Hyperledger Fabric、PvP / DvP、atomic FX swap 等批发结算模块。

## 机制与路线

Partior 的核心定位是“亚洲跨境 wholesale 结算网络”。它不同于 [[fintech/fnality-wholesale-settlement|Fnality]] 直接围绕央行资金或央行货币结算资产构建的路线，而是通过商业银行联盟、参与行余额与可编程结算机制来实现 near real-time / 24x7 settlement。

每笔跨境结算通常可拆成：付款行的本币账户、收款行的目标币种账户、Partior 网络上的 atomic PvP commitment，以及参与行之间的最终结算安排。创新点不只是“上链”，而是把多日 nostro / vostro 对账缩短为更接近实时的批发银行结算流程。

技术上，Partior 更偏商业银行联盟网络；与 JPMorgan Onyx / Kinexys、Fnality、Canton Network、Cosmos IBC 等路线相比，其差异在于参与方治理、许可网络边界、结算资产类型和监管锚点。

## 起源与演进

2017-2020 年，JPMorgan Onyx、DBS 与 Temasek 围绕 wholesale settlement 和 tokenized assets 进行试验。2021-04，三方共同成立 Partior Pte Ltd。2021-08 主网上线，先以 USD / SGD 双币种作为起点。2024 年 Standard Chartered 加入后，Partior 从三方联盟扩展为更广泛的多银行网络。2025 年以后，iFAST 等 fintech 参与，使其从纯银行网络向银行 + fintech + asset manager 的混合网络演进。

## 研究用途

1. 比较亚洲与欧美 wholesale settlement 路线时，将 Partior 与 Fnality 对照。
2. 分析多大型银行联盟治理时，与 [[fintech/multi-megabank-consortium-governance|multi-megabank consortium governance]] 联读。
3. 研究新加坡 MAS 监管与稳定币 / 代币化存款边界时，与 PSA 和 DPT / SCS 页面联读。
4. 分析银行级 atomic FX swap、PvP 与 DvP 时，记录公开披露的币种、参与方和上线阶段。

中文维护时，应优先把 Partior 作为“商业银行联盟结算网络”理解，而不是简单归入零售稳定币或公链桥。判断一条新披露是否应写入本页，核心标准是它是否改变参与机构、结算币种、网络治理、批发支付流程或监管锚点。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/fnality-wholesale-settlement|Fnality]]
- [[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]]
- [[fintech/multi-megabank-consortium-governance|multi-megabank consortium governance]]
- [[fintech/singapore-mas-payment-services-act-overview|Singapore MAS PSA]]
- [[fintech/singapore-mas-payment-services-act-strategic-implications|MAS strategic implications]]
- [[fintech/bis-project-guardian-overview|BIS Project Guardian]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]]
- [[fintech/central-banking-function-unbundling|central banking function unbundling]]
- [[fintech/india-anti-dollar-dpi-alliance|India DPI]]
<!-- /wiki-links:managed -->

## 来源

- https://www.partior.com/ - Partior official homepage.
- https://www.partior.com/news - Partior news.
- https://www.mas.gov.sg/news/media-releases/2021/partior-launch - MAS Partior launch release.
- https://www.dbs.com/newsroom/Partior_launch - DBS Partior announcement.
- https://www.standardchartered.com/news/partior - Standard Chartered Partior investment announcement.
