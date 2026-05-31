---
source: fintech/jp-trust-type-sc-architecture
source_hash: 92e0976b5167f48f
lang: zh
status: machine
fidelity: ok
title: "日本信托型 SC 架构"
translated_at: 2026-05-31T07:28:06.122Z
---

# 日本信托型 SC 架构


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/multi-megabank-consortium-governance|多巨行联合体治理 —— 复数 megabank 共同持有 fintech 基础设施的治理模式]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

> [!info] TL;DR
> 日本修订后的《支付服务法》将 SC 发行分为**三型**：**信托型（第 3 号 EPI）/ 银行型（第 1 号 EPI）/ 资金移动业者型（第 1 号 EPI）**，各自具有不同的法律依据、破产隔离强度和转账上限。**信托型是 B2B 大额结算唯一可行的路径**（无转账上限 + 通过信托机制实现 100% 级破产隔离），也是 Progmat Coin 和三大行共同稳定币方案的法律基础。它在 §501(d) 互操作场景中具有结构性优势，同时跨境通道仍保持开放。

## 三型结构比较

| 维度 | 信托型（Progmat Coin） | 银行型（GMO Aozora Net Bank DCJPY） | 资金移动业者型（JPYC） |
|---|---|---|---|
| 法律依据 | 《支付服务法》第 2  条第 9  项“特定信托受益权” | 基于《银行法》的存款型代币 | 《支付服务法》第二种资金移动业 |
| EPI 编号 | **第 3 号** | 第 1 号（银行发行） | 第 1 号（资金移动业者发行） |
| 发行主体 | 信托银行（受托人） | 银行 | 资金移动业者 |
| 担保 | **信托财产 100% 分别管理**（现金） | 银行自有资本 + 存款保险机构 | 100% 法定货币信托或履约保证 |
| 破产隔离 | **法律上有保障**（信托机制） | 至多到存款保险 1,000 万円 | 通过履约保证实现 100% 保护 |
| 转账上限 | **无** | 依一般银行业务规则 | **每笔 1  100 万円** |
| 利息归属 | **归发行体**（作为信托受托报酬） | 存款利息归存款人 | 受托资产利息按供托金处理 |
| 主要用户 | B2B 大型企业 | 零售个人 / Web3  原生用户 | 零售个人 / 中小企业 |
| KYC 双重性 | 委托银行 + 信托银行双重 | 仅银行 | 仅资金移动业者 |

## 信托型的结构性优势

**(a) 破产隔离的强度**：在信托型中，即使受托银行破产，信托财产仍归属于委托人/受益人。这相当于 USDC 模式（Circle 破产风险 → 由受托方 BNY Mellon 保护）的日本版，但**由于信托法有明确条文规定，法律确定性更高**。

**(b) 无转账上限的破坏力**：像 JPYC 这样的资金移动业者型，因 1  次 / 100 万円 的限制，实际上被**限定在零售场景**。信托型则可以支持 **B2B 大额结算（每 1  笔可达 10 億円 到数百亿日元）**。这正是 Progmat 选择信托型的根本原因。

**(c) 多银行共同委托的意义**：在 [[JapanFG/progmat|Progmat Coin]] 的信托方案中，**多家银行（[[JapanFG/mufg|MUFG]]、[[JapanFG/smfg|SMFG/SMBC]]、Mizuho）**作为共同委托人，**三菱 UFJ 信托 1 社 作为受托人**。由此在法律上可以实现：**把 3  家巨型银行的客户存款统一支持为一种共同稳定币**，这就是 [[multi-megabank-consortium-governance|多巨行联合体治理]] 的法律基础。

## 与 §501(d) 的关系

GENIUS Act §501(d) 为跨境互操作要求“可互操作司法辖区”和“可信发行体”。信托型的**法律破产隔离 + 多层监管结构**与 §501(d) 认定高度契合。不过：

- 即使是信托型，**§501(d) tier 仍需另行取得**，并不会自动获得。
- Progmat Coin 尚未建立 §501(d) 通道，因此跨境用途目前仍以 [[cross-border-sc-via-swift-api|Project Pax via SWIFT API]] 路线为主。
- 如果未来信托型能取得 **§501(d) tier**，则可依托信托机制的法律强度，在与 USDC 的互操作中取得结构性优势。

## 三型的市场分工（当前 2026）

| 细分领域 | 1 位 | 结构性原因 |
|---|---|---|
| B2B 大额结算 | **信托型（Progmat）** | 无转账上限 + 三大行客户基础 |
| 零售支付 | 资金移动业者型（JPYC） | 认知度 + UX + §501(d) 兼容性（经 SBI） |
| 银行账户联动零售 | 银行型（Minna no Ginko Solana） | 既有账户在 1:1  的联动 |
| 跨境大额 | 信托型（Progmat） | 信托的法律强度 |

## 应用

- 在任何“信托 vs 银行发行”的 SC 设计讨论中，可直接调出结构比较
- 作为评估日本 4  阵营在 §501(d) 互操作下地位的基准框架
- 帮助理解在信托型之上叠加跨境合规通道（SWIFT API / IBC）的模式 → [[cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]
- 作为 [[institutional-stablecoin-deposit-token-thesis|機関投資家市場 = 預金トークン唯一解]] 的日本侧实现解

---


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度三層構造]]
- [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]
- [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家市場 = 預金トークン唯一解]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 denylist]]
<!-- /wiki-links:managed -->
