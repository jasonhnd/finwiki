---
title: CBDC 架构选择 4 核心权衡 · 中介 / 主权 / 隐私 / 创新
aliases: [cbdc-multi-tier-architecture-tradeoffs, CBDC architecture tradeoffs, CBDC 4 权衡]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [fintech, cbdc, monetary-architecture, tradeoffs, financial-disintermediation]
sources: []
status: candidate
---

# CBDC 架构选择 4 核心权衡


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 央行选 CBDC 架构时面对 4 个核心权衡:**金融中介存续 vs 央行直达**(决定商业银行命运)、**货币主权 vs 跨境互操作**(决定与 wholesale CBDC 走廊关系)、**隐私 vs 反洗钱**(决定央行可视度)、**创新空间 vs 系统稳定**(决定可编程性)。所有现役 CBDC 设计都是这 4 个权衡的不同组合。

## Key facts

- 直接 CBDC 让商业银行边缘化 → 政治上不可接受 → 无 G10 央行采用 ^[extracted]
- 双层架构对内强,跨境弱 → 需借 wholesale CBDC 走廊(mBridge / Agorá) ^[extracted]
- token-based 多层天然跨境友好但威胁主权货币层级 ^[extracted]
- 直接 CBDC 给央行最强 AML 能力,但隐私归零 ^[extracted]
- 双层让商业银行做 KYC,央行不直接看到用户 ^[extracted]
- token-based 多层通过加密层可调隐私,但合规成本高 ^[extracted]
- 智能合约可编程是 token-based 多层的核心创新空间 ^[extracted]

## Mechanism / How it works

**1. 金融中介存续 vs 央行直达**:直接 CBDC 让商业银行边缘化 → 金融中介崩塌 → 央行被迫承担信贷分配(直接放贷给企业) → 政治上不可接受。所有主要央行都选择保护银行存款基础(双层或多层)。这是为什么没有 G10 央行采用直接 CBDC。

**2. 货币主权 vs 跨境互操作**:双层架构对内强(完整央行 → 商行 → 用户控制链),跨境弱(需借 wholesale CBDC 走廊如 mBridge)。token-based 多层天然跨境友好(代币标准互通)但威胁主权货币层级(本国代币化存款可能在外国流通)。这是 e-CNY 选双层 + mBridge 跨境补充的逻辑。

**3. 隐私 vs 反洗钱**:直接 CBDC = 央行全可见,AML 最强但隐私归零(欧洲反对最大)。双层 = 商业银行做 KYC,央行不直接看到用户,符合现行金融隐私规范。token-based 多层 = 通过加密层(零知识证明 / 阈值签名)可调隐私,但合规成本高,监管学习曲线陡。

**4. 创新空间 vs 系统稳定**:token-based 多层(智能合约)创新空间最大,但需要新一代基础设施(EVM / 代币标准 / 链原生开发栈)。双层最稳定但创新天花板低(账户系统天然不可编程)。e-CNY 选双层是稳定优先,DREX 选 token-based 是创新优先。

## Origin & evolution

2017-2020 BIS / IMF 早期 CBDC 框架几乎只讨论"直接 vs 双层"二分,创新维度未浮现。2020-2022 Hyperledger / Corda 等 enterprise DLT 在 PoC 阶段验证可编程性 → "token-based 多层"作为第三选择浮现。2022-2024 各央行根据自身政治 / 监管偏好做权衡:中国选稳定优先(e-CNY 双层),巴西选创新优先(DREX token-based),欧元区在中介保护和可编程性间妥协(数字欧元混合 + 持有上限)。2026+ 三圆 MRA(欧 MiCA + 美 GENIUS + 港 HKMA)+ wholesale CBDC 走廊(mBridge + Agorá)进一步约束架构选择空间。

## Counterpoints

- "金融中介存续"假设商业银行有不可替代的信贷分配能力 —— 但在央行直接 QE 时代这一假设已部分动摇
- "央行直达"在小国(尼日利亚 eNaira)实际尝试失败,但不代表完全不可行
- 隐私权衡常被简化为"央行可见 vs 不可见",忽略了多 stakeholder(税务 / 监管 / 司法)的不同诉求
- "创新空间"取决于实际落地的智能合约生态,DREX 的实际可编程性使用率未达预期

## Open questions

- 中央化 AML(直接 CBDC)在恐怖融资压力下是否会重新被部分国家接受?
- token-based 多层架构下,代币化存款发行方(商业银行)在跨境冲突下如何回应主权要求?
- 智能合约 CBDC(如 DREX)的程序化货币政策(自动 QE / 负利率)是否会出现?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|三大现役范式]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]
- [[fintech/jurisdiction-list-monetary-protectionism|管辖区列表 · 货币保护主义]]
<!-- /wiki-links:managed -->

## Sources

