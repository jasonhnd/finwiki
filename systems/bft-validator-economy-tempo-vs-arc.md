---
title: Tempo vs Arc · 机构链 validator 设计两条路径
aliases: [bft-validator-economy-tempo-vs-arc, tempo arc validator comparison, 机构链 validator 设计]
domain: systems
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [systems, validator, tempo, arc, institutional-chain, poa, progressive-decentralization]
sources: []
status: candidate
---

# Tempo vs Arc · 机构链 validator 设计两条路径


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/eigenlayer-l1-bootstrapping|EigenLayer 对新 L1 启动期安全的赋能 · Tempo/Arc 潜在路径]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Tempo 外部 validator 数 = 4(精选机构) ^[extracted]
- Tempo BFT 容错 = ⌊(4-1)/3⌋ = 1(可容忍 1 个作恶或下线) ^[extracted]
- Tempo Nakamoto 系数极低,监管单点风险显著 ^[extracted]
- Arc 阶段 1 = PoA(团队 + 创始机构白名单) ^[extracted]
- Arc 阶段 2 = 许可 PoS(20-50 KYC validator) ^[extracted]
- Arc 阶段 3 = 治理 PoS(理论目标,可能永不达) ^[extracted]
- 三阶段模板被 Kinexys / Mony 引用 ^[extracted]

## Mechanism / How it works

**Tempo · 4 外部 validator 模型**:Tempo 团队内部 validator + 4 家精选外部机构(大型托管 / 顶级 staking 服务商 / 主权基金资管 / 战略合作)。每个 validator 都有 KYC + 法律协议绑定 → 可追责。无通胀奖励,yield 由协议费分成。无 MEV(机构 OTC 主导订单流)。设计哲学:**少数高资质 > 数量分散**,牺牲去中心化换性能与责任。

**Arc · 三阶段演化**:阶段 1 PoA 中心化但快速迭代;阶段 2 KYC validator 集合扩展至 20-50 家,引入 staking 经济但准入受控;阶段 3 通过治理决定 validator 集合扩展,长期目标完全去中心化。设计哲学:**承认机构链初期必须中心化,通过明确路线图换生态信任**。

对比维度:

| 维度 | Tempo | Arc |
|---|---|---|
| validator 数 | 4 精选 | 演化中(PoA → 20-50 → ?) |
| 去中心化路径 | 不追求 | 三阶段渐进 |
| 集中度 | 公开承认 | 路线图掩盖 |
| BFT 容错 | 1/4(脆弱) | 阶段相关 |
| 核心权衡 | 性能 + 可信度 | 合规启动 + 渐进开放 |

## Origin & evolution

2024 Aave Arc / JPM Onyx 早期许可池 → "机构链初期必须许可"成为共识。2025.04 Tempo 公开 4 外部 validator 设计 → 极简模型显化。2025 Circle 公开 Arc 三阶段路线图 → 渐进式去中心化模板成型。2025-2026 Kinexys / Mony / 多家代币化存款项目引用 Arc 三阶段模板。两条路径共存的根本原因:Tempo 服务 retail 商户(对性能极敏感),Arc 服务机构客户(对合规叙事极敏感)。

## Counterpoints

- Tempo 4 validator 触及 BFT 容错边界 —— 任一国家压制 1 个 validator 即破坏 liveness
- Arc 三阶段路线图历史上未有完整跑通的案例(EOS 21 BP 模型停滞)→ "渐进"可能永远不达
- 两条路径都假设监管允许 KYC 链长期存在,但反垄断 / 反金融基础设施集中诉求可能强制扩展 validator
- Tempo 4 validator 模型 vs Arc 50 validator 模型在抗审查上差异未必显著(50 个都 KYC = 都可被监管点名)

## Open questions

- Tempo 4 个 validator 真能 long-term 稳定服务全球商户吗?(地缘分散性)
- Arc 阶段 3 治理 PoS 在 5 年内能落地吗?
- 是否会出第三条路径(如 EigenLayer restaking + 机构链),让机构链借用 ETH validator 集合?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/bft-validator-economy-overview|总览]]
- [[systems/bft-validator-economy-four-variables|四变量详解]]
- [[systems/chain-abstraction-pattern-overview|链抽象模式]]
<!-- /wiki-links:managed -->

## Sources

