---
title: JPMorgan Onyx / Kinexys · 银行内部批发网络 · Liink × JPM Coin × Onyx Digital Assets
aliases: [jpm-onyx-wholesale-network, JPM Onyx, Onyx by JP Morgan, Kinexys wholesale, Liink, Onyx Digital Assets, JPM Coin]
domain: fintech
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: certain
tags: [fintech, wholesale-settlement, jpmorgan, kinexys, onyx, liink, jpm-coin, tokenized-deposit, single-bank-network]
status: active
sources:
  - https://www.jpmorgan.com/kinexys
  - https://www.jpmorgan.com/onyx
  - https://www.jpmorgan.com/kinexys/news
  - https://www.jpmorgan.com/insights/payments/kinexys
  - https://www.theblock.co/post/jpmorgan-onyx-kinexys-rebrand
---

# JPMorgan Onyx / Kinexys · 银行内部批发网络 · Liink × JPM Coin × Onyx Digital Assets

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]] for the retail-deposit-token sibling product, and with [[fintech/fnality-wholesale-settlement|Fnality]] / [[fintech/partior-jpm-dbs-temasek-consortium|Partior]] for the multi-bank consortium contrast that Onyx-Kinexys deliberately rejects.

> [!info] TL;DR
> JPMorgan Onyx (2020 创立,**2024-11 改名 Kinexys**) 是 JPM 自营的批发结算 / tokenized 资产网络,包含三大产品: **Liink** (1100+ 银行间消息网络,SWIFT 替代),**JPM Coin** (内部 wholesale settlement token, 仅 JPM 客户间流通, 累计 $1.5T+ 处理),**Onyx Digital Assets** (intraday repo + tokenized securities)。Kinexys 日均处理 **$5B+**,累计 **$1.5T+**,180+ 机构客户,**单一银行自营**是与 [[fintech/fnality-wholesale-settlement|Fnality]] (20+ 银行联营) / [[fintech/partior-jpm-dbs-temasek-consortium|Partior]] (4 主股东联营) 路径的关键差异。JPMD (2025-11 上线 Base + 2026-01 迁 Canton) 是 Kinexys 向"外部公链流通"的延伸,与 wholesale Onyx 网络互补。

## Key facts

- Kinexys 日均处理 **$5B+** ≈ USDC 全球日均的 30-40% (2026-Q1) ^[extracted]
- 累计处理量 **$1.5T+** (自 2024-11 改名 Kinexys 起算) ^[extracted]
- 三大模块: **Liink** (银行间消息 1100+ 银行) + **JPM Coin** (wholesale settlement) + **Onyx Digital Assets** (intraday repo + tokenized securities) ^[extracted]
- 多币种: USD / EUR / GBP + 2026-Q2 加 SGD ^[extracted]
- 客户: 180+ 机构 (含 Siemens, BlackRock, Goldman, Ant Group 等) (2026-Q1) ^[extracted]
- Onyx Digital Assets intraday repo: 累计 $700B+ (2026-Q1) · 1-day-or-less repo 链上撮合 ^[extracted]
- 技术栈: Quorum (JPM 自研 Ethereum fork, 后捐给 ConsenSys) → 2024-11 改名时同步技术 stack 升级 ^[extracted]
- 2024-11 Onyx → Kinexys 改名 = 为 TD "白标" + 多银行参与做准备 ^[extracted]

## Mechanism / How it works

Onyx/Kinexys 的核心模型 = **"单一银行自营的全栈批发网络"**——JPM 同时提供 settlement asset (JPM Coin / JPMD) + 消息层 (Liink) + 资产层 (Onyx Digital Assets) + 客户关系 (180+ 机构) + 技术栈 (Quorum) + 监管牌照 (JPM 银行牌照覆盖全部). 这与 [[fintech/fnality-wholesale-settlement|Fnality]] (20+ 银行联营) 形成根本对比: **JPM 不需协调多个股东 → 决策速度快 → 4 年累计 $1.5T 超过 Fnality 上线 1 年的体量**;但 JPM 无法把网络扩展到"非 JPM 客户" (Fnality / Partior 可以接入任意成员行客户), 这是 [[fintech/multi-megabank-consortium-governance|多大银行联邦治理]] 中"速度 vs 规模"的根本权衡。

三大模块功能分工:
- **Liink** (前身 IIN, Interbank Information Network) = 银行间消息层, 1100+ 家银行接入, **不传输价值,仅交换 KYC/compliance 信息** (如 sanctioned address 查询 / beneficiary confirmation), 类似 [[systems/swift-iso-20022-overview|SWIFT MT 系列消息]] 但用区块链做底层
- **JPM Coin** (2019-起) = wholesale settlement token, **仅 JPM 客户之间** 用 JPM 商业存款记账 (类 TD 但仅 JPM 内部), 累计 $300B+ → 改名 Kinexys 后累计 $1.5T+
- **Onyx Digital Assets** = 链上 intraday repo + tokenized treasuries / MMF (与 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] 合作 IM 用途)

与 [[fintech/jpmorgan-jpmd-coin|JPMD]] 的关系: JPMD = Kinexys 内部 settlement token 的**外部公链流通版本** (2025-11 上线 Base, 2026-01 迁 Canton). 内部 JPM Coin (Quorum 私链, 仅 JPM 客户) + 外部 JPMD (Base/Canton 公链, JPM 客户 + 部分对手方) **是同一存款的两种链上形态**, 由 JPM 统一管理。

## Origin & evolution

2016 IIN (Interbank Information Network) 启动 = JPM 早期区块链实验,银行间消息层. 2019-02 JPM Coin 公开 = 第一个由 G-SIB 公开发布的"银行内部 stablecoin", 内部测试 $300B+ 累计 (2019-2024). **2020-10 Onyx by JP Morgan 正式商业化** = 把 IIN + JPM Coin + Onyx Digital Assets 整合为单一商业品牌. 2022-Q3 Onyx Digital Assets 与 Goldman 共同上线 tokenized repo,累计 $700B+. **2024-11 Onyx → Kinexys 改名**: JPM 公开口径 "为 TD 白标 + 多银行参与做准备", 标志 Kinexys 从"JPM 内部"转向"JPM 主导但开放"网络. 2025-11 [[fintech/jpmorgan-jpmd-coin|JPMD]] on Base = 第一次把内部 settlement token 放到 public L2. 2026-01 JPMD 迁 [[systems/canton-overview|Canton Network]] (与 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] / Goldman 共栈 + 隐私). 2026-Q2 Kinexys 累计 $1.5T+ = 与 [[fintech/partior-jpm-dbs-temasek-consortium|Partior]] 同期累计同量级, 但是 JPM 单一发行人 vs Partior 4 主股东联营. 2026-05-13 JLTXX 上线 + Anchorage 跟投 → 暗示 USAT (US Anchorage TD) 路径。

## Counterpoints

Onyx/Kinexys 的"单一银行自营"模式让网络效应天然受限——非 JPM 客户没有强动机加入 (Liink 1100+ 银行接入是因 SWIFT 替代价值而非 JPM Coin), [[fintech/multi-megabank-consortium-governance|多大银行联邦治理]] 中明确指出"竞争对手银行不会愿意把自己的存款转入 JPM 的链"。**Fnality (央行准备金) 与 Partior (亚洲多银行) 在不同区域分别切走 wholesale 市场的中立份额**,Kinexys 的市场天花板取决于 JPM 自己客户的存款规模 (~$2.4T deposits). Quorum 技术栈是私链, **跨域到 public L2 / Canton 都依赖 JPM 自己开发桥接**, 在 [[systems/cross-chain-five-pole-comparison-matrix|跨链五极]] 中无独立 token 经济或社区。Kinexys 法律定位是 "TD ≠ SC" → 不受 GENIUS §501 直接约束, 但 OCC / FRB 如果未来明确"TD 不得跨 public L2"会让 JPMD on Base / Canton 必须撤回。

## Open questions

Kinexys 2030 预测收入 $7.2B 是 base-case, 实际取决于"多银行联邦能否突破"——目前 Liink 接入主要是 partner 银行,**真正竞争对手银行 (Citi / BofA / Wells Fargo) 是否会加入 Kinexys**, 决定 Kinexys 是 "JPM 独家" 还是 "事实标准"?Onyx Digital Assets 与 [[systems/canton-overview|Canton]] / DTCC Project Ion 在 tokenized securities 市场如何分工?Kinexys 估值若从 JPM 主体拆出独立 IPO,预测 2030 $30-35B,但 JPM 母公司是否愿意拆?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]]
- [[fintech/fnality-wholesale-settlement|Fnality]]
- [[fintech/partior-jpm-dbs-temasek-consortium|Partior]]
- [[fintech/multi-megabank-consortium-governance|多大银行联邦治理]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|机构 SC vs TD 论点]]
- [[fintech/tokenized-deposit-cumulative-volume-scale|TD 累计量级]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[systems/canton-overview|Canton Network]]
- [[fintech/central-banking-function-unbundling|央行职能解体 5 层]]
<!-- /wiki-links:managed -->

## Sources

- https://www.jpmorgan.com/kinexys — Kinexys 官方页面
- https://www.jpmorgan.com/onyx — Onyx 官方页面 (含 Onyx Digital Assets)
- https://www.jpmorgan.com/kinexys/news — Kinexys 新闻
- https://www.jpmorgan.com/insights/payments/kinexys — JPM payment insights Kinexys 专题
- https://www.theblock.co/post/jpmorgan-onyx-kinexys-rebrand — The Block 关于改名报道
