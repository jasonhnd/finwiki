---
source: fintech/jp-trust-type-sc-architecture
source_hash: d631fd2ddde9935d
lang: zh
status: machine
fidelity: ok
title: "日本信托型 SC 架构"
translated_at: 2026-06-18T23:59:13.121Z
---

# 日本信托型 SC 架构


## Wiki 路径

本条目位于 [[fintech/INDEX|fintech index]] 之下。请将其与 [[fintech/multi-megabank-consortium-governance|多巨行联合体治理 —— 复数 megabank 共同持有 fintech 基础设施的治理模式]] 对照阅读以获取同类／对比语境，并与 [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] 对照阅读以了解更广泛的系统／监管边界。

> [!info] TL;DR
> 日本改正资金决济法将 SC 发行分为 **三型** —— **信托型（第 3 号 EPI）／银行型（第 1 号 EPI）／资金移动业者型（第 1 号 EPI）** —— 各有不同的法律依据／破产隔离强度／汇款上限。**信托型是 B2B 大额结算的唯一可行路径**（无汇款上限 + 由信托机构提供的 100% 破产隔离），也是 Progmat Coin／三大行共同 SC 的法律基盘。它在 §501(d) 互操作场景中结构性占优，但跨境通道依然开放。

## 三型结构比较

| 维度 | 信托型（Progmat Coin）| 银行型（GMO あおぞらネット银行 DCJPY）| 资金移动业者型（JPYC）|
|---|---|---|---|
| 法律依据 | 资金决济法 2 条 9 项「特定信托受益权」 | 基于银行法的存款型代币 | 资金决济法 第二种资金移动业 |
| EPI 编号 | **第 3 号** | 第 1 号（银行发行）| 第 1 号（资金移动业者发行）|
| 发行主体 | 信托银行（受托人） | 银行 | 资金移动业者 |
| 担保 | **信托财产 100% 分别管理**（现金）| 银行自有资本 + 存款保险机构 | 100% 法定货币信托 or 履约保证 |
| 破产隔离 | **法律上予以保证**（信托机构） | 至存款保险 1,000 万円 | 以履约保证 100% 保护 |
| 汇款上限 | **无** | 依银行业务整体 | **1 次 100 万円** |
| 利息归属 | **归属于发行体**（作为信托受托报酬）| 存款利息归存款人 | 受托资产利息按供托金处理 |
| 主要 user | B2B 大额 corporate | 个人零售 / Web3 native | 个人零售 / 中小企业 |
| KYC 双重性 | 委托银行 + 信托银行 双重 | 仅银行 | 仅资金移动业者 |

## 信托型的结构性优势

**(a) 破产隔离的强度**：在信托型下，即使受托银行破产，信托财产仍归属于委托人。这是 USDC 模型（Circle 破产风险 → 受托 BNY Mellon 保护）的日本版，但**因信托法的明文规定，法律确定性更高**。

**(b) 无汇款上限的破坏力**：JPYC 等资金移动业者型受 1 次 100 万円的约束而 **限于面向个人的零售**。信托型 **可进行 B2B 大额结算（10 億円〜数百亿日元 1 的交易）** —— 这正是 Progmat 选择信托型的根本原因。

**(c) 多银行共同委托的意义**：在 [[payment-firms/progmat|Progmat Coin]] 的信托方案中，**复数银行（[[megabanks/mufg|MUFG]], [[megabanks/smfg|SMFG/SMBC]], Mizuho）成为共同委托人**，**三菱 UFJ 信托 1 社担任受托人**。由此在法律上即可将 3 家 megabank 的客户存款 **统一支持于一种共同 SC** —— 这是 [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]] 的法律基盘。

## 与 §501(d) 的关系

GENIUS Act §501(d) 为跨境互操作而要求「互操作司法管辖区」与「可信认的发行体」。信托型的 **法律破产隔离 + 监管重层性** 与 §501(d) 认定的亲和性较高。但是：

- 即便是信托型，**§501(d) tier 本身仍需另行取得**（并非自动）
- Progmat Coin 的 §501(d) 通道尚未确立 → 跨境用途目前主流为经由 [[fintech/cross-border-sc-via-swift-api|Project Pax via SWIFT API]]
- 未来若信托型 **取得 §501(d) tier**，则可凭信托机构的法律强度，在与 USDC 的互操作中具备结构性优势的可能

## 三型的市场分担（现状 2026）

| 细分 | 1 位 | 结构性原因 |
|---|---|---|
| B2B 大额结算 | **信托型（Progmat）** | 无汇款上限 + 三大行客户基盘 |
| 零售结算 | 资金移动业者型（JPYC） | 认知度 + UX + §501(d) compat（经由 SBI）|
| 银行账户联动 retail | 银行型（みんなの银行 Solana）| 既有账户 1:1 联动 |
| 跨境大额 | 信托型（Progmat） | 信托的法律强度 |

## 应用

- 在任何「信托 vs 银行发行」的 SC 设计讨论中，可一举调出结构比较
- 在 §501(d) 互操作评估中，作为比较日本 4 阵营时的基准框架
- 理解将跨境合规通道（SWIFT API / IBC）叠加于信托型之上的模式 → [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]
- 作为 [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家市場 = 預金トークン唯一解]] 的日本侧实现方案

---


## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度三層構造]]
- [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]
- [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家市場 = 預金トークン唯一解]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 denylist]]
<!-- /wiki-links:managed -->
