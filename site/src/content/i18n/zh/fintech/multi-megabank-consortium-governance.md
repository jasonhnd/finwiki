---
source: fintech/multi-megabank-consortium-governance
source_hash: 7082c4f387c11adc
lang: zh
status: machine
fidelity: ok
title: "多家巨型银行联合体治理"
translated_at: 2026-05-31T07:28:06.171Z
---
# 多家巨型银行联合体治理


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 若将 Fintech 基础设施按“单一银行”“多银行 JV”“独立企业 + 银行少数持股”这 **3 种治理模式** 比较，**Progmat 型（独立企业 + non-controlling stake 设计）扩展性最高**。JPMorgan Kinexys 属于单一银行型，BIS Project Agorá 属于中央银行 consortium 型，Progmat 属于独立企业型，各自所要求的监管环境与决策速度之间的权衡不同。

## 3 种治理模式

| モデル | 代表事例 | 所有構造 | 意思決定速度 | 規制要件 | 拡張性 |
|---|---|---|---|---|---|
| **单一银行所有** | JPM Kinexys / GS DAP | 银行 100% 子公司 | 高速 | 银行监管框架内 | 低（受银行 brand 约束） |
| **多银行 JV** | DTCC / 旧 SWIFT 结构 | 银行间平等出资 | 低速（需全员同意） | 银行协同监管 | 中 |
| **独立企业 + non-controlling** | **Progmat / NTT Data 共同** | 独立法人 · 银行少数持股 | 中速 | 独立 fintech 监管 | **高** |

## Progmat 结构的精细设计

**MUTB 49% stake 设计的核心意图**：

```
MUTB([[JapanFG/mufg|三菱 UFJ 信託銀行]])     49.0%   ← 单独最大股东，但不能过半
SMBC 集团 ([[JapanFG/smfg|SMFG]])      ~15%   ← 重要 partner
Mizuho 信托银行        ~15%   ← 重要 partner
NTT Data              ~10%   ← 技术 partner
JPX                   ~5%    ← 交易所 partner
Datachain             ~3%    ← 技术 partner
其他                    ~3%
```

**设计原则**：
- **49% 是有意为之**（FSA 的指导）：采用 **non-MUFG-controlled** 设计，避免 MUFG 形成支配。
- **三大行同等级**（除 MUTB 49% 外基本对等）→ 确保中立性
- **NTT Data / JPX 从技术 / 交易所侧**参与 → 提供非银行侧正当性

**因此**：
- SMBC / Mizuho 不能使用 MUFG 子公司，但可以使用 independent 法人
- FSA 不会将其视作 MUFG 单独项目，而是作为行业共通基础设施予以认可
- 即使要构建共通 SC（JPYW），如果由 MUFG 单独提出会很难，通过 Progmat 则有可能

## 多巨型银行治理成立的条件

| 条件 | 内容 | Progmat 的达成度 |
|---|---|---|
| **中立的 chairperson / CEO** | 不偏向任何一家银行的人物 | 齊藤達哉（出身于三菱 UFJ，但担任独立 CEO） |
| **不得突破过半数阈值** | 单一银行不得持有过半数 | MUTB 以 49% 达成 |
| **政府 / 监管侧背书** | 中央银行 / 监管当局认定为行业共通 | FSA PIP 主导 |
| **技术 partner 中立性** | 非银行技术 partner 保持中立 | NTT Data + Datachain |
| **竞争银行能获得收益** | 三大行可同时受益 | 客户基础 30 万社共同接入 |
| **退出选项** | 各银行可并行推进自家路线 | SMBC 并行 SBI / Mizuho 并行 Solana |

## 与 BIS Project Agorá 的对比

| 轴 | Progmat | BIS Project Agorá |
|---|---|---|
| 主导 | 民间（信托银行协同） | 国际（BIS + 7 央行） |
| 监管 | FSA 监管 + 信托法 | BIS 协调 + 各国央行法 |
| Settlement asset | 信托型 SC | wholesale CBDC + TD |
| Decision speed | 基于股东间协议（中速） | 7 央行共识（低速） |
| Geographic scope | 以日本国内为主 → 正在考虑扩张 | 全球设计，但仍处于 pilot |
| Exit option | 可作为股东出售退出 | 国家承诺无法解除 |

**含义**：[[fintech/bis-project-agora-overview|Agorá]] 的 **公共承诺与监管整合更强**，但 **速度更慢**。[[JapanFG/progmat|Progmat]] 的 **速度与灵活性更高**，但 **国际正当性弱于 Agorá**。二者具有互补性：Agorá 构建国际骨架，Progmat 负责各国落地，长期可能形成这种结构。

## 共通风险

| リスク | 内容 |
|---|---|
| **战略不一致** | 成员银行可能走向独立路线（如 SMBC × SBI）并出现离散 |
| **决策延迟** | 全员同意要求可能使重要决定错过 timing |
| **霸权争夺** | MUTB 若扩大至 49%，可能形成事实控制并削弱他行 |
| **新参与银行议价能力下降** | 后加入银行难以改变既有 49% 设计 |
| **海外联动正当性** | 各银行海外子公司分别与 Kinexys 等合作，导致一致性崩塌 |

## 应用

- 分析任何“多家 megabank 共用 fintech 基础设施”讨论的结构
- 作为韩国 / 台湾 / 亚洲其他国家 SC consortium 设计参考
- 比较 mBridge / Project Nexus / IPS-RTGS 互联的 governance
- 作为 DTCC / Visa / Mastercard 等既有“行业共通基础设施”的演化形态
- 设计中央银行 consortium + 民间 SC consortium 的 2 层结构

---


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架構]]
- [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度三層構造]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]
<!-- /wiki-links:managed -->
