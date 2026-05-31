---
source: fintech/jpm-onyx-wholesale-network
source_hash: 3da33d93b5fca81a
lang: zh
status: machine
fidelity: ok
title: ""
translated_at: 2026-05-31T07:28:06.132Z
---
﻿# JPMorgan Onyx / Kinexys · 银行内部批发网络 · Liink × JPM Coin × Onyx Digital Assets

## Wiki route

本条目位于 [[fintech/INDEX|fintech index]] 下。可结合 [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]] 阅读零售型存款代币姊妹产品，并结合 [[fintech/fnality-wholesale-settlement|Fnality]] / [[fintech/partior-jpm-dbs-temasek-consortium|Partior]] 阅读 Onyx-Kinexys 明确拒绝的多银行联盟模式对照。

> [!info] TL;DR
> JPMorgan Onyx（于 2020  创设，**在 2024-11  更名为 Kinexys**）是 JPM 自营的批发结算 / 代币化资产网络，包含 3  个主要产品：**Liink**（1100+ 银行参与的银行间消息网络，是 SWIFT 替代方案）、**JPM Coin**（内部批发结算代币，仅在 JPM 客户间流通，累计处理 $1.5T+）、**Onyx Digital Assets**（盘中回购 + 代币化证券）。Kinexys 日处理 **$5B+**、累计 **$1.5T+**，拥有 180+ 机构客户。**单一银行自营**是其与 [[fintech/fnality-wholesale-settlement|Fnality]]（20+ 银行联盟）/ [[fintech/partior-jpm-dbs-temasek-consortium|Partior]]（4  主要股东联盟）路线的决定性差异。JPMD（于 2025-11  在 Base 上线，并于 2026-01  迁移至 Canton）是 Kinexys 向“外部公开链流通”延伸的版本，与批发型 Onyx 网络形成互补。

## Key facts

- Kinexys 日处理量 **$5B+**，约为 USDC 全球日处理量的 30-40%（2026-Q1）^[extracted]
- 累计处理量 **$1.5T+**（自 2024-11  Kinexys 更名起计）^[extracted]
- 3  个模块：**Liink**（银行间消息，1100+ 银行）+ **JPM Coin**（批发结算）+ **Onyx Digital Assets**（盘中回购 + 代币化证券）^[extracted]
- 多币种：USD / EUR / GBP + 在 2026-Q2  新增 SGD ^[extracted]
- 客户：180+ 家机构（包括 Siemens、BlackRock、Goldman、Ant Group 等）（2026-Q1）^[extracted]
- Onyx Digital Assets 盘中回购：累计 $700B+（2026-Q1）· 对 1  天以内回购进行链上撮合 ^[extracted]
- 技术栈：Quorum（JPM 自研的 Ethereum 分叉，后贡献给 ConsenSys）→ 与 2024-11  更名同步完成技术栈升级 ^[extracted]
- 2024-11  Onyx → Kinexys 更名 = 为 TD“白标化”+ 多银行参与做准备 ^[extracted]

## Mechanism / How it works

Onyx/Kinexys 的核心模型是**“单一银行自营的全栈批发网络”**：JPM 同时提供结算资产（JPM Coin / JPMD）、消息层（Liink）、资产层（Onyx Digital Assets）、客户关系（180+ 机构）、技术栈（Quorum）以及监管牌照（全部由 JPM 银行牌照覆盖）。这与 [[fintech/fnality-wholesale-settlement|Fnality]]（20+ 银行联盟）形成根本对照：**JPM 无需协调多个股东 → 决策更快 → 用 4  年做到累计 $1.5T，超过 Fnality 用 1  年达到的规模**；但另一方面，JPM 不能将网络扩展至“非 JPM 客户”（Fnality / Partior 则可连接任意成员银行客户），这正是 [[fintech/multi-megabank-consortium-governance|複数大手銀行の連邦ガバナンス]] 中“速度 vs 规模”的根本权衡。

3  个模块的功能分工如下：
- **Liink**（前身 IIN，Interbank Information Network）= 银行间消息层，连接 1100+ 家银行，**不传输价值，仅交换 KYC / 合规信息**（如制裁地址核查 / beneficiary confirmation 等），与 [[systems/swift-iso-20022-overview|SWIFT MT 系列メッセージ]] 类似，但底层使用区块链。
- **JPM Coin**（起源于 2019 ）= 批发结算代币，**仅在 JPM 客户之间**使用，以记账 JPM 商业存款（类似 TD，但局限于 JPM 内部），累计 $300B+ → 更名 Kinexys 后累计 $1.5T+。
- **Onyx Digital Assets** = 链上盘中回购 + 代币化国债 / MMF（与 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] 及 IM 用途联动）。

与 [[fintech/jpmorgan-jpmd-coin|JPMD]] 的关系：JPMD 是 Kinexys 内部结算代币的**外部公开链流通版**（2025-11  在 Base 上线，2026-01  迁移至 Canton）。内部 JPM Coin（Quorum 私链，仅限 JPM 客户）+ 外部 JPMD（Base/Canton 公链，JPM 客户 + 部分对手方）是**同一存款的两种链上形态**，由 JPM 统一管理。

## Origin & evolution

2016  IIN（Interbank Information Network）启动，是 JPM 早期区块链实验与银行间消息层。2019-02  JPM Coin 公布，成为 G-SIB 中首个公开的“银行内部稳定币”，内部测试累计达到 $300B+（2019-2024）。**2020-10  Onyx by J.P. Morgan 正式商用化** = 将 IIN + JPM Coin + Onyx Digital Assets 整合为单一商业品牌。2022-Q3  Onyx Digital Assets 与 Goldman 联合推出 tokenized repo，累计达到 $700B+。**2024-11  Onyx → Kinexys 更名**：JPM 官方表述是“为 TD 白标化 + 多银行参与做准备”，意味着从“JPM 内部”向“JPM 主导但更开放”的网络转向。2025-11  [[fintech/jpmorgan-jpmd-coin|JPMD]] on Base = 首次将内部结算代币部署到 public L2 。2026-01  JPMD 迁移至 [[systems/canton-overview|Canton Network]]（与 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] / Goldman 共享栈 + 隐私）。2026-Q2  Kinexys 累计达到 $1.5T+ = 与 [[fintech/partior-jpm-dbs-temasek-consortium|Partior]] 同时期、同量级，但 JPM 是单一发行方，而 Partior 是由 4  家主要股东组成的联盟。2026-05-13 JLTXX 上线 + 对 Anchorage 追加投资 → 暗示 USAT（US Anchorage TD）路线。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]]
- [[fintech/fnality-wholesale-settlement|Fnality]]
- [[fintech/partior-jpm-dbs-temasek-consortium|Partior]]
- [[fintech/multi-megabank-consortium-governance|複数大手銀行の連邦ガバナンス]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関 SC vs TD 論点]]
- [[fintech/tokenized-deposit-cumulative-volume-scale|TD 累計規模]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[systems/canton-overview|Canton Network]]
- [[fintech/central-banking-function-unbundling|中央銀行機能の解体 5 層]]
<!-- /wiki-links:managed -->

## Sources

- https://www.jpmorgan.com/kinexys — Kinexys 官方页面
- https://www.jpmorgan.com/onyx — Onyx 官方页面（含 Onyx Digital Assets）
- https://www.jpmorgan.com/kinexys/news — Kinexys 新闻
- https://www.jpmorgan.com/insights/payments/kinexys — JPM payment insights 的 Kinexys 专题
- https://www.theblock.co/post/jpmorgan-onyx-kinexys-rebrand — The Block 关于更名的报道
