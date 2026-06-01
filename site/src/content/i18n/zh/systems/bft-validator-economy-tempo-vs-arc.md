---
source: systems/bft-validator-economy-tempo-vs-arc
source_hash: 89b2cb80292de2f7
lang: zh
status: machine
fidelity: ok
title: "Tempo vs Arc · 机构链 validator 设计的2路径"
translated_at: 2026-06-01T04:15:40.170Z
---
# Tempo vs Arc · 机构链 validator 设计的2路径

## Wiki route

本条目位于 [[systems/INDEX|systems index]] 之下。请结合 [[systems/eigenlayer-l1-bootstrapping|EigenLayer による新 L1 起動期セキュリティ支援 · Tempo/Arc 潜在経路]] 阅读同业 / 对照背景，并结合 [[fintech/INDEX|fintech index]] 阅读更广泛的系统 / 监管边界。

## Key facts

- Tempo 外部 validator 数量 = 4（严选机构）^[extracted]
- Tempo BFT 容错能力 = ⌊(4-1)/3⌋ = 1（最多容许 1 个恶意节点或停机节点）^[extracted]
- Tempo 的 Nakamoto 系数极低，监管上的单点故障风险显著 ^[extracted]
- Arc 阶段 1 = PoA（团队 + 创始机构白名单）^[extracted]
- Arc 阶段 2 = 许可型 PoS（20-50 KYC validator）^[extracted]
- Arc 阶段 3 = 治理 PoS（理论目标，可能无法达成）^[extracted]
- 三阶段模板被 Kinexys / Mony 引用 ^[extracted]

## Mechanism / How it works

**Tempo · 4 外部 validator 模型**: Tempo 团队内部 validator + 4 个严选外部机构（大型托管机构 / 大型 staking 服务提供商 / 主权基金管理 / 战略合作方）。各 validator 受 KYC + 法律协议约束 → 可追责。无通胀奖励，收益来自协议手续费分配。无 MEV（机构 OTC 主导订单流）。设计哲学:**少数高资质 > 以数量分散**，牺牲去中心化以确保性能和责任。

**Arc · 三阶段演进**: 阶段 1 PoA 虽然中心化，但可高速迭代；阶段 2  将 KYC validator 集合扩大到 20-50 社，引入 staking 经济，但准入受控；阶段 3  通过治理决定 validator 集合扩张，长期目标是完全去中心化。设计哲学:**承认机构链早期必须中心化，并以明确路线图获取生态系统信任**。

比较维度:

| 维度 | Tempo | Arc |
|---|---|---|
| validator 数量 | 4 严选 | 演进中（PoA → 20-50 → ?） |
| 去中心化路径 | 不追求 | 三阶段渐进 |
| 集中度 | 公开承认 | 以路线图遮蔽 |
| BFT 容错能力 | 1/4（脆弱） | 取决于阶段 |
| 核心权衡 | 性能 + 可靠性 | 合规启动 + 渐进开放 |

## Origin & evolution

2024 Aave Arc / JPM Onyx 的早期许可池 → “机构链早期必须许可制”成为共识。2025.04 Tempo 公布 4 外部 validator 设计 → 最小模型显性化。2025 Circle 公布 Arc 三阶段路线图 → 渐进式去中心化模板成立。2025-2026 [[fintech/jpmorgan-jpmd-coin|Kinexys / JPMD]] / Mony / 多个代币化存款项目引用 Arc 三阶段模板。2 路径并存的根本原因: Tempo 服务零售商户（对性能极度敏感），Arc 服务机构客户（对合规叙事极度敏感）。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/bft-validator-economy-overview|総覧]]
- [[systems/bft-validator-economy-four-variables|4変数詳解]]
- [[systems/chain-abstraction-pattern-overview|チェーン抽象モデル]]
<!-- /wiki-links:managed -->

## Sources

- Tempo 官方网站（4 外部 validator / 支付 L1 设计）— https://tempo.xyz/
- Arc 官方网站（Circle 机构级 L1）— https://www.arc.io/
- Circle「Introducing Arc」官方发布（渐进式去中心化 / Malachite）— https://www.circle.com/blog/introducing-arc-an-open-layer-1-blockchain-purpose-built-for-stablecoin-finance
- Canton Network（Kinexys 系许可型机构链）— https://www.canton.network/
