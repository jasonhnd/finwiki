---
title: OCC trust bank charter 作为联邦稳定币银行套利路径
aliases: [OCC trust bank stablecoin, Bridge OCC conditional, federal stablecoin charter arbitrage]
domain: fintech
kind: knowledge
topic: occ-trust-bank-charter-federal-stablecoin-arbitrage
created: 2026-05-16
last_updated: 2026-05-16
last_tended: 2026-05-16
review_by: 2026-11-16
confidence: certain
tags: [fintech, regulation, stablecoin, occ, charter, bridge, mtl, fedwire]
status: candidate
sources: []
---

# OCC trust bank charter 作为联邦稳定币银行套利路径

> [!info] TL;DR
> OCC（Office of the Comptroller of the Currency）颁发的 **trust bank charter conditional approval** = 联邦层"稳定币银行"，**豁免 50 州 Money Transmitter License (MTL)** 且具备 **FedWire 直连**。Bridge 在 2026-02 获批，是 fintech 历史首个进入此路径的稳定币发行方，构成对手不可短期复制的合规护城河。

**核心机制**：

1. OCC trust bank charter 属于联邦层级，**Supremacy Clause 优先于各州 MTL 制度**
2. Conditional approval 阶段无需立即吸收存款 / 发放贷款（避免银行控股公司法触发）
3. 直接接入 **FedWire / Fedwire Securities / FedNow**，与 JPMorgan / BofA 同梯队结算
4. 储备金可托管在 Fed master account，**消除中介存管行的对手方风险**
5. 跨州业务无需逐州申报，**节省 ≥50 州 × 2-5 年合规成本（估算 $30-100M）**

**Bridge 案例时间线**：

| 时间 | 事件 |
|---|---|
| 2023-2024 | Bridge 作为 stablecoin 基础设施公司起步 |
| 2025-Q1 | Sequoia 等领投，估值 $2.2B |
| 2025-Q3 | Stripe 以 $1.1B 收购 Bridge（Sequoia 2 个月 5 倍 exit） |
| 2026-02 | OCC trust bank charter conditional approval 获批 |
| 2026-Q3 预期 | GENIUS Act 实施细则发布，Bridge 路径成为 reference case |

**与其他路径对比**：

| 路径 | 联邦背书 | MTL 豁免 | FedWire | 时间成本 | 资本要求 |
|---|---|---|---|---|---|
| OCC trust bank charter | 有 | 有 | 有 | 12–24 月 | $5–20M tier 1 |
| 各州 MTL 逐州申请 | 无 | 无 | 无 | 3–5 年（48–50 州） | $100k–500k/州 surety bond |
| NYDFS BitLicense | 仅纽约州 | 无 | 无 | 18–36 月 | $5M |
| 信用社 / 工业银行 charter | 部分 | 部分 | 部分 | 24–48 月 | $10–50M |
| 离岸 e-money license | 无 | 无 | 无 | 6–12 月 | $2–5M |

**触发条件**：

- 业务需要 USD 链上代币化 + 美国境内结算
- 储备金规模 / 客户基数足够吸引 OCC 审查（一般 >$500M AUM 或大型战略股东背书）
- 战略股东 / 控股方有银行控股公司法合规能力（Stripe = 关键）

**通用性 / 可推广至**：

- USDC（Circle）已申请类似路径（First Citizens 关系）
- PYUSD（PayPal）可通过 Paxos 间接接入
- 任何 USD 锚定稳定币发行方
- 未来 RWA tokenization 平台（BlackRock BUIDL、Apollo ACRED）

**反例 / 边界**：

- 非 USD 稳定币不适用（EUR、JPY、SGD 需各自联邦监管路径）
- OCC 在政治周期变化时可能撤销 conditional approval（2024-2025 多次先例）
- Trust bank ≠ full bank：不能吸收 demand deposit、不能放贷
- 银行控股公司法触发后，Stripe 整个集团进入 Fed 监管，**生态成本可能反超合规收益**

**估值 / 决策含义**：

- Bridge 估值 25–35% 来自 OCC charter 独占性（Stripe 收购溢价的核心解释）
- 竞品（USDC、PYUSD、USD1）估值需打"路径滞后"折扣
- 投资判断：未来 18 个月 OCC charter 数量上限（OCC 历史 5–10 张 / 年）= 稀缺溢价
- M&A 信号：未上市稳定币公司若 OCC 申请到 conditional stage，**收购溢价 3–5×**


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 Denylist]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA 架构]]
- [[fintech/regulatory-window-strategic-acquisition|监管窗口前战略收购]]
<!-- /wiki-links:managed -->
