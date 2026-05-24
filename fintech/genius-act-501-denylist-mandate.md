---
title: GENIUS Act §501 将链级 Denylist 合法化 —— 稳定币原生 L1 的合规反向解释
aliases: [GENIUS Act denylist, stablecoin chain regulation, 链级 Denylist 合法化]
domain: fintech
kind: knowledge
topic: genius-act-501-denylist-mandate
created: 2026-05-13
last_updated: 2026-05-13
last_tended: 2026-05-13
review_by: 2026-11-13
confidence: likely
tags: [fintech, regulation, GENIUS-Act, stablecoin, US, compliance]
status: candidate
sources: []
---

# GENIUS Act §501 链级 Denylist 合法化


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 美国 GENIUS Act §501（2025 年通过）以明文形式要求合规稳定币发行方具备**链级地址封禁能力**（chain-level Denylist）。该条款反向解释了 Circle 必须自建 L1（Arc）的根本原因：**唯有自有链才能同时控制 token 与共识层,实现端到端的合规执行**。链级 Denylist 由"商业妥协"升格为"法律明文要求"。

**条款核心要求**：

- 合规稳定币发行方必须具备对特定地址执行 **freeze / burn / blacklist** 的能力
- 在通用 EVM 链上的实现路径是由发行方在 token 合约中加入相应权限（例如 USDC 的 `blacklisted` mapping）
- 但发行方**无法控制链本身**（Ethereum / Solana / 各 L2 的 sequencer 自治运行）,从而存在抗审查 fork 的潜在风险
- 自有 L1 = 同时掌握 token、共识层与排序器 → **端到端 enforce**

**Arc 的实装**：

- 链级 Denylist precompile（5 个 stateful precompiles 之一）
- PermissionedValidatorManager 三层架构
- AWS Nitro Enclaves Remote Signer
- KYB-only StableFX

**通用模式**："**自建合规链**"是 GENIUS Act 通过后稳定币发行方的**结构性选择**而非商业偏好：

- Circle Arc（USDC）:在 GENIUS Act 起草阶段积极游说 + 自建 L1
- Stripe Tempo（Bridge 稳定币）:OCC trust bank charter + Tempo 验证者多元化
- Tether 未来路径:USAT（Anchorage）等合规版本 + 自有 USDT0 / Plasma / Stable 链推测

**反例 / 例外**：

- 算法稳定币（GENIUS Act 明文禁止）→ 直接淘汰
- 完全去中心化稳定币（如 DAI）→ 无法执行 Denylist,市场份额受限
- 灰色稳定币（USDT on Tron）→ 选择不进入美国市场,绕开法案

**地缘含义**：法案使美国稳定币阵营（USDC / USD1 / PYUSD）与非美国稳定币（USDT 灰色路径 / 各国主权稳定币 / 算法稳定币）形成结构性对立。详见 [[stablecoin-chain-sovereign-currency-divide]]。

**与日本立法的平行关系**：日本《资金决済法》中的对应条款（第 1 号电子决済手段）同样要求发行方具备类似能力（信托型 / 银行型 / 资金移动业者型，详见 [[fintech/japan-epi-three-types-overview|日本 EPI 三型架构]]）。GENIUS Act 与日本立法属于**平行立法趋势**,而非孤立现象。

**先例与跨境延伸**：链级冻结的实际操作先例已在 USDC / USDT 多链上发生，详见 [[fintech/chain-level-ofac-freeze-precedent|链级 OFAC freeze 先例]]。VASP 侧 [[fintech/fatf-travel-rule-overview|FATF Travel Rule]] 配套的 BTS 协议层构成"信息层 + 资产层"双合规栈。全球 VASP 监管的横向矩阵见 [[exchanges/global-vasp-regulatory-comparison-matrix|全球 VASP 监管比较矩阵]]。


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度的三层构造]]
- [[fintech/japan-financial-regulation|日本金融规制]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|链上金融 vs 加密原生分流]]
<!-- /wiki-links:managed -->
