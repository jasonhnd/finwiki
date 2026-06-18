---
source: fintech/cross-border-sc-via-swift-api
source_hash: a23088cf7d6f53ae
lang: zh
status: machine
fidelity: ok
title: "跨境 SC via SWIFT API"
translated_at: 2026-06-18T23:59:13.081Z
---

# 跨境 SC via SWIFT API


## Wiki 路径

本条目位于 [[fintech/INDEX|fintech index]] 之下。可与 [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] 一并阅读以获得相邻语境，并与 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] 一并阅读更广泛的系统边界。

> [!info] TL;DR
> 跨境 SC 普及的最大阻碍是「与银行 workflow / AML/CFT 的不兼容」。解决这一问题的现代模式是 **将 SWIFT API 置于前端、由区块链 settlement 在后端执行的 hybrid 结构**。Project Pax（Progmat + Datachain · 2024-09）与 BIS Project Agorá 是该结构的代表实现。**TD（Tokenized Deposit）在 SWIFT API 兼容性上领先**，**SC 则视 §501(d) 互操作 许可证而定，其接入模式随之分化**。

## 基本模式

```
银行([[megabanks/mufg|MUFG]] / [[megabanks/smfg|SMFG/SMBC]] / Mizuho 等)
       ↓ SWIFT MT103 / ISO 20022 消息
SWIFT API mock layer(Datachain)
       ↓ 解析 → settlement instruction
[[payment-firms/progmat|Progmat Coin]] contract(信托型 SC)
       ↓ on-chain transaction
IBC + LCP(cross-chain bridge)
       ↓
Ethereum / Polygon / Avalanche / Cosmos
       ↓ 在 TOKI 流动性池进行 cross-chain swap
接收侧银行 → 以接收侧货币入账
```

## 为何将 SWIFT API 置于前面

| 理由 | 内容 |
|---|---|
| **保护既有 workflow** | 银行内部系统 / corporate ERP 以 SWIFT 为前提运行 50 年 |
| **AML/CFT 兼容** | OFAC / FATF Travel Rule 在 SWIFT 上已积累运营经验 |
| **监管当局的安心感** | FSA / 金融厅 若经由 SWIFT 则更易视为已审查 |
| **可分阶段迁移** | full on-chain 是遥远的未来 · 用 SWIFT 把银行卷入，逐步提高 on-chain 比例 |

## TD vs SC 的跨境路径分化

| 项目 | TD(JPM Kinexys / KDP)| 信托型 SC(Progmat / Project Pax)|
|---|---|---|
| 法律性质 | 银行存款型 | 第 3 号 EPI 信托型 |
| SWIFT API | **直接利用既有 SWIFT** | 经由 SWIFT API mock layer |
| Cross-border 商用化 | **已达 $1.5T/月**(KDP)| 2026-H2 目标(延迟中)|
| §501(d) 必须? | **不需要**(TD 在 SC 监管之外)| 需要(待将来取得)|
| 互操作 partner | 美系 banking partner 既有 | 亚洲 partner 确定不足 |
| 利息 | 存款利息归银行 | 信托受托报酬 |

**含义**：Kinexys 以 TD path **规避 §501 监管** 同时已达成商用化。Progmat 在 SC path 上，只要不取得 §501(d) tier，在 cross-border 大额业务上对 Kinexys 处于结构性劣势。

## Project Pax 的技术构成

| Layer | 构成要素 | 提供者 |
|---|---|---|
| Application | SWIFT API mock + corporate wallet | Datachain |
| Settlement instruction | Progmat Coin contract | Progmat + Datachain |
| Cross-chain | IBC + LCP middleware | Datachain(Hyperledger Lab)|
| Liquidity | TOKI cross-chain pool | TOKI(Datachain 子公司)|
| Chains | Ethereum / Polygon / Avalanche / Cosmos | 各 chain |
| Compliance | OFAC / Travel Rule / KYC API | Progmat 共通 |

## 与 BIS Project Agorá 的比较

| 项目 | Project Pax | BIS Project Agorá |
|---|---|---|
| 主导 | Progmat(民间 · 日本)| BIS(国际 · 7 央行)|
| 目的 | 让日本发的 SC 搭上 SWIFT | 批发 CBDC + commercial bank money 整合 |
| Settlement asset | 信托型 SC | wholesale CBDC + TD |
| 技术 | Avalanche L1 + IBC | Unified Ledger(BIS 设计)|
| 商用 timeline | 2026-H2 | 2027+(实证阶段)|
| 与 §501(d) 的关系 | 个别 SC 互操作 | 主权网络基盘 |

**两者为互补关系**：Agorá 构建 **国家间骨架**，Pax 解决 **个别 SC ↔ SWIFT 的最后1英里**。

## 局限 / 风险

- **§501(d) 通道未确立**：目前无法与 USDC 等美国合规 SC 直接 swap
- **延迟历史**：Pax 未能达成 2025 末的当初目标 → 技术风险暴露
- **亚洲 partner 不足**：HK / SG / 韩国 counter-party 确定延迟
- **SWIFT 依赖**：若 SWIFT 自身将来迁移至 ISO 20022 + onchain native，mock layer 将陈旧化
- **与 JPM Kinexys 的竞争**：TD path 已将同类功能商用化

## 应用

- 可用于任何 "blockchain + 既有 banking workflow" 整合议题的参照
- 解读 SWIFT 改革(ISO 20022 / GPI / GPI for Corporates)与 SC 的关系
- 亚洲发起的 cross-border SC 设计议题(韩国 KRW1 · 泰国 Project Inthanon · 新加坡 Project Ubin)
- 与 [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]] 结合进行多 chain SC 转移设计

---


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架構]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]]
- [[fintech/stablecoin-crossborder-b2b-growth|Stablecoin Cross-border B2B 成长]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 denylist]]
<!-- /wiki-links:managed -->
