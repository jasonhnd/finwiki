---
title: L1 渐进式去中心化三阶段路径
aliases: [progressive decentralization three phase, PoA permissioned PoS governance PoS, Arc decentralization path]
domain: systems
kind: knowledge
topic: l1-progressive-decentralization-three-phase
created: 2026-05-16
last_updated: 2026-05-16
last_tended: 2026-05-16
review_by: 2026-11-16
confidence: certain
tags: [systems, blockchain, l1, decentralization, governance, consensus, arc]
status: candidate
sources: []
---

# L1 渐进式去中心化三阶段路径

> [!info] TL;DR
> 合规导向的新 L1 几乎都采用三阶段去中心化路径：**PoA（受信任 N 节点）→ 许可 PoS（白名单 staking）→ 治理 PoS（开放 staking + on-chain governance）**。Circle Arc 是当前最透明披露三阶段 KPI 触发条件的案例，构成"满足 GENIUS Act denylist 要求 + 长期开放路径"的双轨架构。

**三阶段定义**：

```
Phase 1: PoA（Proof of Authority）
  - 节点 = Circle 自营 + 少数受信任合作方
  - 出块完全可控，可执行 denylist
  - 监管沟通成本最低
  ↓ KPI 触发：流通量、TVL、合规框架成熟
Phase 2: 许可 PoS
  - 节点白名单（KYC + 合规审计）+ Validator staking
  - 满足 GENIUS §501 freeze 能力（链级 denylist）
  - 治理仍由发行方主导
  ↓ KPI 触发：节点地理分散、独立审计、监管认可
Phase 3: 治理 PoS（开放 staking + on-chain governance）
  - 任意人 staking 成为 validator
  - 协议参数通过 on-chain governance 变更
  - 发行方退化为生态参与者
```

**Arc 案例（Circle 已公开披露）**：

| 阶段 | 触发条件 | 节点数 | 治理模型 | 抗审查能力 |
|---|---|---|---|---|
| Phase 1（启动）| 主网 launch | 5–10（Circle + Visa + StanChart + …）| Circle 完全控制 | 链级 freeze + denylist |
| Phase 2（许可）| 流通 USDC > $50B on Arc | 30–50 白名单 | Validator 多签 + Circle veto | 链级 freeze 保留 |
| Phase 3（治理）| 监管框架稳定 + GENIUS 三年回顾通过 | 100+ 开放 | on-chain governance | denylist 由治理决定 |

**与其他范式对比**：

| 范式 | 起点 | 路径 | 终点 |
|---|---|---|---|
| Bitcoin / Ethereum | 早期开放 PoW/PoS | 无明确路径 | 完全开放 |
| Solana / Aptos | 启动即开放 PoS | 节点门槛技术性 | 准开放 |
| **三阶段 L1（Arc 范式）** | **PoA** | **明文 KPI 切换** | **开放 PoS** |
| 联盟链 / 央行 CBDC | 完全 PoA | 不切换 | 长期 PoA |
| 私有链 | 单实体 | 不切换 | 单实体 |

**触发条件**：

- 发行方是受监管金融实体（Circle / 银行 / 支付公司）
- 链需要在 GENIUS Act §501 / MiCA 等监管框架下 day-1 合规
- 长期目标是开放生态而非永久封闭
- 治理模型可量化（用 TVL、流通量、节点分散度作为触发器）

**通用性 / 可推广至**：

- Arc / Tempo（已采用，Tempo 4 外部 validator 已是 Phase 2 early）
- 未来 PayPal / Visa / Mastercard 自建链（高度可能）
- CBDC 互操作层（mBridge、DREX 跨链桥）
- 主权基金主导的"国家许可型私营稳定币"链（印度 ARC × Polygon）

**反例 / 边界**：

- 若发行方不愿放弃控制（Tether），三阶段路径不适用 → 长期 PoA
- 若监管禁止 permissionless（中国大陆 CBDC），不能进入 Phase 3
- 切换 KPI 设计不当时（KPI 达成但治理风险未消解），可能卡在 Phase 2 多年
- 经济激励不足时（staking yield < ETH staking），Phase 3 流动性不足

**估值 / 决策含义**：

- 投资判断：Phase 切换点 = ARC token / 类似治理代币的关键解锁事件
- 监管沟通：阶段切换需提前 6–12 个月与 OCC / SEC / FinCEN 沟通
- 生态招商：Phase 2 阶段是 Validator 招商最高溢价窗口（Visa / StanChart 已示范）
- 安全审计：每个阶段都需独立审计（PoA 阶段审计运营，PoS 阶段审计代码）


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS §501 Denylist]]
- [[systems/threshold-bft-consensus-rust-implementations|BFT Rust 实现]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|稳定币公链 Token 三态]]
<!-- /wiki-links:managed -->
