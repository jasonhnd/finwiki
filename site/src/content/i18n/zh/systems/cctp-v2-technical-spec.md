---
source: systems/cctp-v2-technical-spec
source_hash: debba25bb3b731d6
lang: zh
status: machine
fidelity: ok
title: "CCTP V2  技术规格 · Fast Transfer · Hooks · Attestation Service"
translated_at: 2026-06-01T04:15:40.144Z
---
# CCTP V2  技术规格 · Fast Transfer · Hooks · Attestation Service

## Wiki 路由

本条目位于 [[systems/INDEX|systems index]] 之下。可对照 [[systems/cctp-v2-overview|CCTP V2 概観 · Circle USDC クロスチェーン burn-and-mint]] 阅读，以获得同业 / 对比语境；也可对照 [[fintech/INDEX|fintech index]] 阅读，以理解更广泛的系统 / 监管边界。

## 关键事实

- Fast Transfer 的延迟为 < 1  秒（V1  约为 13  秒）^[extracted]
- Fast Transfer 的资本来源：Circle IPO 后的 $4.34B treasury ^[extracted]
- Hooks 在与 mint 相同的 tx 中触发目标链合约，支持 1-tx 的跨链 swap / loan ^[extracted]
- Circle Attestation Service 是 off-chain signer 网络 · 不是去中心化 oracle ^[extracted]
- Circle 可以拒绝对特定地址签名（Tornado Cash 案例）^[extracted]

## 机制 / 工作方式

**Fast Transfer 流程**:
1. 用户在源链 burn USDC
2. Circle 监控 burn 事件 · 不等待源链 finality，立即在目标链 mint（Circle 以 treasury 承担 finality 风险）
3. 源链达到 finality 后，Circle 内部进行账务匹配，并解除担保

**Hooks 流程**:
1. 在 burn tx 的 calldata 中包含 hook target + payload
2. 目标链 mint 后，EntryPoint 合约自动调用 hook target（传递已 mint 的 USDC + payload）
3. hook 合约可以在同一 tx 内完成 swap / deposit / loan

**Attestation Service**:
- off-chain 的 Circle 节点监控所有受支持链上的 burn 事件
- 签名中包含 source chain id + destination chain id + amount + recipient + nonce
- 目标链上的 MintBurnTokenMessenger 合约在验证签名后 mint

**§501 denylist 的整合**: Attestation Service 在签名前查询 Circle 的 denylist —— 如果 recipient 或 source 地址在名单上，则拒绝签名；USDC 已在源链 burn，但无法在目标链 mint。**这是协议层的合规执行通路**（与 [[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]] 的合规节点设计形成对照）。

## 起源与演进

V2  开发期间，Circle 的关键产品判断是“是否将 Fast Transfer 完全去中心化” —— 最终选择了中心化担保模型。原因是去中心化方案（challenger watchtower、stake-based bonded validator）会增加用户成本和延迟，而 Circle 自身的合规角色已经成为 USDC 的信任锚，因此再增加去中心化层是 redundant 的。

Hooks 的设计灵感部分来自 [[systems/erc-4337-overview|ERC-4337]] 的 UserOp 模型 —— 将“链 A 操作 + 链 B 操作”以原子语义打包，降低 UX 复杂度。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cctp-v2-overview|CCTP V2 Overview]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton]]
- [[agent-economy/ap2-technical-spec|AP2(USDC settlement adapter)]]
<!-- /wiki-links:managed -->

## 来源

- Circle CCTP V2 docs(developers.circle.com)
- Circle CCTP V2 — https://developers.circle.com/stablecoins/docs/cctp-getting-started
