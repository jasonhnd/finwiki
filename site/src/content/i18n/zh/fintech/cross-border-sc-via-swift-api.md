---
source: fintech/cross-border-sc-via-swift-api
source_hash: cf5b9261a5c5fe23
lang: zh
status: machine
fidelity: ok
title: "跨境 SC via SWIFT API"
translated_at: 2026-05-31T06:16:15.713Z
---

# 跨境 SC via SWIFT API


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 跨境 SC 普及最大的阻碍是"与银行工作流 / AML/CFT 的不兼容"。解决这一问题的现代模式是**以 SWIFT API 作为前端、在后端执行区块链结算的混合架构**。Project Pax（Progmat + Datachain · 2024-09）与 BIS Project Agorá 是该架构的代表实现。**TD（代币化存款）在 SWIFT API 兼容性方面处于领先**，**SC 因 §501(d) 互操作许可的不同而呈现分叉的接入模式**。

## 基本模式

```
银行（[[megabanks/mufg|MUFG]] / [[megabanks/smfg|SMFG/SMBC]] / 瑞穗等）
       ↓ SWIFT MT103 / ISO 20022 消息
SWIFT API mock layer（Datachain）
       ↓ 解析 → 结算指令
[[payment-firms/progmat|Progmat Coin]] 合约（信托型 SC）
       ↓ 链上交易
IBC + LCP（跨链桥）
       ↓
Ethereum / Polygon / Avalanche / Cosmos
       ↓ TOKI 流动性池跨链互换
接收方银行 → 以接收方货币到账
```

## 为何将 SWIFT API 置于前端

| 理由 | 内容 |
|---|---|
| **保护现有工作流** | 银行内部系统 / 企业 ERP 已在 SWIFT 基础上运行 50  年 |
| **AML/CFT 兼容** | OFAC / FATF 旅行规则在 SWIFT 上已积累运营经验 |
| **监管机构的安心感** | FSA / 金融厅将 SWIFT 经由视为已审核通道，更易认可 |
| **阶段性迁移可行** | 完全链上化遥遥无期 · 通过 SWIFT 逐步将银行纳入，渐进提升链上比例 |

## TD vs SC 的跨境路径分岔

| 项目 | TD（JPM Kinexys / KDP）| 信托型 SC（Progmat / Project Pax）|
|---|---|---|
| 法律性质 | 银行存款型 | 第 3 号 EPI 信托型 |
| SWIFT API | **直接使用现有 SWIFT** | 经 SWIFT API mock layer |
| 跨境商业化 | **已达 $1.5T / 月**（KDP）| 2026-H2 目标（进展延迟）|
| §501(d) 是否必须 | **不需要**（TD 不受 SC 监管）| 需要（待未来取得）|
| 互操作伙伴 | 现有美系银行合作方 | 亚洲合作方尚未确定 |
| 利息 | 存款利息归银行 | 信托受托管理费 |

**含义**：Kinexys 通过 TD 路径**规避 §501  监管**，已实现商业化。Progmat 走 SC 路径，除非取得 §501(d) 级别，否则在跨境大额业务上相对 Kinexys 存在结构性劣势。

## Project Pax 技术架构

| 层 | 构成要素 | 提供方 |
|---|---|---|
| 应用层 | SWIFT API mock + 企业钱包 | Datachain |
| 结算指令 | Progmat Coin 合约 | Progmat + Datachain |
| 跨链 | IBC + LCP 中间件 | Datachain（Hyperledger Lab）|
| 流动性 | TOKI 跨链池 | TOKI（Datachain 子公司）|
| 公链 | Ethereum / Polygon / Avalanche / Cosmos | 各公链 |
| 合规 | OFAC / 旅行规则 / KYC API | Progmat 共用 |

## 与 BIS Project Agorá 的比较

| 项目 | Project Pax | BIS Project Agorá |
|---|---|---|
| 主导方 | Progmat（民间 · 日本）| BIS（国际 · 7  央行）|
| 目的 | 将日本 SC 接入 SWIFT | 批发 CBDC + 商业银行货币整合 |
| 结算资产 | 信托型 SC | 批发 CBDC + TD |
| 技术 | Avalanche L1  + IBC | Unified Ledger（BIS 设计）|
| 商业化时间表 | 2026-H2  | 2027+（验证阶段）|
| 与 §501(d) 的关系 | 个别 SC 互操作 | 主权网络基础设施 |

**两者是互补关系**：Agorá 构建**国家间骨架**，Pax 解决**个别 SC ↔ SWIFT 的最后 1 英里**。

## 局限 / 风险

- **§501(d) 通道尚未建立**：目前无法与 USDC 等美国合规 SC 直接互换
- **延迟历史**：Pax 未能实现 2025  底的原定目标 → 技术风险已显现
- **亚洲合作方不足**：香港 / 新加坡 / 韩国交易对手确认延迟
- **SWIFT 依赖**：若 SWIFT 未来迁移至 ISO 20022 + 原生链上，mock layer 将面临淘汰
- **JPM Kinexys 竞争**：同类功能已通过 TD 路径实现商业化

## 应用

- 适用于任何"区块链 + 现有银行工作流"整合讨论
- 解读 SWIFT 改革（ISO 20022  / GPI / GPI for Corporates）与 SC 的关系
- 亚洲发起的跨境 SC 设计讨论（韩国 KRW1  · 泰国 Project Inthanon · 新加坡 Project Ubin）
- 结合 [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]] 进行多链 SC 转移设计

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
