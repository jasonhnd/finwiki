---
title: JPMorgan JPMD · 代币化存款 · GENIUS §501 法律分类下的 TD 范式
aliases: [jpmorgan-jpmd-coin, JPMD, JPM Coin Deposit Token, JPMorgan tokenized deposit]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [fintech, tokenized-deposit, jpmorgan, kinexys, td-vs-sc, genius-501, base, canton]
sources: []
status: candidate
---

# JPMorgan JPMD · 代币化存款 · GENIUS §501 法律分类下的 TD 范式


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> JPMD (JPM Coin Deposit Token) 是 JPMorgan 商业银行存款的链上 1:1 表征,运行于 Kinexys 私链 + Base + 计划迁 Canton。它在 GENIUS Act §501 法律分类下是**代币化存款 (TD)** 而非稳定币 (SC)——**可付利息、享 FDIC 保险、纳入 B/S 联动**,完全不受 §501 SC 监管约束。Kinexys 日均处理 **$5B+**、累计 **$1.5T+**、客户 **180+ 机构**,是**全球第二大数字美元基础设施**。JPMD 是 JPM 作为第 4 主角向机构/大企业客户层延伸的核心产品。

## Key facts

- Kinexys 日均处理量 **$5B+** ≈ USDC 全球日均的 30-40% (2026-Q1) ^[extracted]
- 累计处理量 **$1.5T+** = USDT 流通量 8 倍 (自 2024-11 改名) ^[extracted]
- 多币种 USD / EUR / GBP + 2026-Q2 加 SGD · 7×24 结算 ^[extracted]
- 2025-11 **JPMD on Base** 上线 = 全球首次 TD 上公开 L2 (OCC 未反对) ^[extracted]
- 2026-01 迁移 Canton Network (隐私 + Coinbase 解耦) ^[extracted]
- 2026-05-13 **JLTXX** 上线 (Anchorage 跟投 → USAT 路径) ^[extracted]
- 客户 180+ 机构 (2026-Q1) ^[extracted]
- 法律分类: TD ≠ SC · 不需要 §501 资格 · 保留付息 + FDIC + 信贷创造 ^[extracted]

## Mechanism / How it works

JPMD 的核心法律地位 = **银行存款的代币化**, 不是稳定币。Jamie Dimon 公开立场: "stablecoins are not banks, and not regulated as banks" (SC 是临时现象) vs "tokenized deposits are bank deposits with new technology" (TD 是未来) ——与 GENIUS Act §501 法律分类**完全一致**。这意味着 JPM **不需要 §501 SC 资格**就能提供链上美元服务,反而保留了 SC 玩家无法享受的优势: **付息能力 + FDIC 保险 + 信贷创造 (B/S 联动)**。运行栈: Kinexys 私链 (Quorum) 主体 + Base 对接公链流动性 + Canton 联邦提供隐私 + 跨境通过 Liink 银行间消息 (1100+ 银行接入),与 [[fintech/tokenized-deposit-cumulative-volume-scale|代币化存款累计量级]] 共同显示 TD 已是事实主战场。

## Origin & evolution

2019-02 JPM Coin 公开 (内部测试 $300B+ 累计). 2024-11 Onyx → **Kinexys** 改名 (准备 TD "白标"). 2025-11 JPMD on Base = 第一个 TD 上 public L2. 2026-01 迁 [[systems/canton-overview|Canton]] (与 Coinbase 解耦 + 隐私). 2026-03 Kinexys × BUIDL 集成 = TD 端接 MMF yield. 2026-05-13 JLTXX 上线 + Anchorage 跟投 → 暗示 USAT (US Anchorage TD) 路径,可能成为 JPM 通过 Anchorage 打入 Tether USDT 储备体系的关键产品. **v1 把 JPM 归类为"平行竞争 / 观望"是分析错误**——JPM 是唯一在央行职能 5 层框架中**全 close 主权**且有 100 年历史的玩家,本研究 v2 升级为第 4 主角。

## Counterpoints

JPMD 的"TD ≠ SC"法律豁免依赖 OCC 持续不反对——若新一届 OCC / FRB 收紧 TD 定义 (例如要求 "TD 仅在银行 4 堵墙内流通,不得上 public L2"),JPMD on Base 必须撤回。[[fintech/tether-business-model-short-treasury-yield|Tether 灰圈]] + Circle 白圈仍占据 SC 流通量绝大部分,JPMD 在零售层完全没有渗透 (180 个机构客户 ≠ 数亿散户). Kinexys 6 模块预测 2030 $7.2B 收入是 base-case,**实际取决于多银行联邦能否突破** (目前 Liink 接入主要是 partner 银行,非竞争对手银行,与 [[fintech/multi-megabank-consortium-governance|多大银行联邦治理]] 的结构性瓶颈相似)。

## Open questions

OCC / FRB 在 2027-2028 是否会出台 "TD on Public L2" 专门规则?Kinexys 估值会否从 JPM $700B 市值中拆出独立 IPO(预测 2030 $30-35B)?USAT (JPM × Anchorage × Tether 储备) 路径是否真实存在,何时披露?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL 代币化 MMF]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|机构 SC vs TD 论点]]
- [[fintech/central-banking-function-unbundling|央行职能解体 5 层]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/multi-megabank-consortium-governance|多大银行联邦治理]]
<!-- /wiki-links:managed -->

## Sources

