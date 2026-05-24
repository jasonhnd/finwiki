---
title: ERC-7702 概览 · EOA 临时获得 SCW 能力的 Pectra 升级
aliases: [erc-7702-overview, eoa-to-scw-overview, set-code-tx]
domain: systems
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [systems, wallet, aa, erc-7702, ethereum, pectra, vitalik]
sources: []
status: candidate
---

# ERC-7702 概览 · EOA 临时获得 SCW 能力的 Pectra 升级


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/erc-7702-vs-erc-4337|ERC-7702 vs ERC-4337 · Ethereum AA 双轨对照]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- Pectra 2025-05 主网激活(含 7702 + 7251 validator + 2935 blockhash 等) ^[extracted]
- Vitalik 2024-05 抛弃 EIP-3074 后亲自起草 7702 ^[extracted]
- 新增 SET_CODE_TX(EIP type 0x04) ^[extracted]
- 90% ETH 持有者仍在用 EOA(MetaMask / Rabby / Trust Wallet)· 是 7702 的服务目标 ^[extracted]
- 2026-Q1-Q2:MetaMask / Rabby / Coinbase Wallet 默认支持 ^[extracted]

## Mechanism / How it works

**核心问题**:ERC-4337 要求用户迁移到新地址(SCW 地址 ≠ EOA 地址)。对已有 on-chain history、ENS、NFT、DeFi positions 的 EOA 用户 · 迁移成本不可接受。

**Vitalik 推 7702 的核心理由**:
- 90% 的 ETH 持有者仍在用 EOA
- 4337 在 2023-2025 两年内 SCW 渗透率 < 5%——证明"新建 SCW"路径太慢
- 需要一个 **直接升级 EOA 的路径** · 让全部 EOA 一夜之间获得 SCW 能力

**机制**:
- 新增 `SET_CODE_TX`(EIP type 0x04)
- 用户(EOA)签名授权一份 contract code 在该 tx 期间附加到自己地址
- 该 tx 执行完成后 · code 可保留(persistent delegation)或移除
- 持久化模式下 · EOA 行为完全等同 SCW · 但地址不变

**典型应用流程**:
1. EOA 用户签名一份 `delegationDesignator`(指向一份 SCW 实现合约 · 如 Safe / Kernel)
2. 用户(或 Bundler 代付 gas)发起 `SET_CODE_TX`
3. EOA 地址此后按 SCW 逻辑执行——可 batch、可 sponsor、可 session key
4. 用户随时可签名移除 delegation · 回到纯 EOA 状态

## Origin & evolution

2017-2024 间 Ethereum AA 路径多次尝试:EIP-86(2017 失败)→ EIP-2938(2020 失败)→ EIP-3074(2022 接近落地但有签名 replay 问题)→ ERC-4337(2023-03 应用层落地)→ EIP-7702(2024-05 Vitalik 起草)。

**与 ERC-3074 的关键差异**:
- 3074 用 `AUTH/AUTHCALL` opcode · 需要 invoker contract 中介 · UX 复杂 + 签名 replay 风险高
- 7702 直接在 tx 层 set code · **更接近原生 SCW 体验** · 且与 4337 共享 EntryPoint 基础设施

**时间线**:
- 2024-05:Vitalik 抛弃 3074 · 起草 7702
- 2025-05:Pectra 主网激活(7702 + 7251 + 2935 等)
- 2026-Q1-Q2:MetaMask / Rabby / Coinbase Wallet 默认支持
- 2026-H2:Fusaka 升级进一步优化 7702 经济模型

## Counterpoints

**Delegation 安全风险**:用户签名授权 EOA 临时绑定合约 · 若 delegation 目标合约有 bug 或恶意 · EOA 资产可能被全部转走。这与"用户保管私钥即拥有资产"的 EOA 原始信任模型形成张力。需要钱包 UI 充分提示 delegation 目标的可信度。

**对 4337 阵营商业冲击**:7702 让"无 SCW 也能享受 batch/sponsorship"成为可能 · 短期内 [[agent-economy/privy-embedded-wallet-overview|Privy]]/Coinbase CDP 等 4337 SCW 钱包的 UX 差异化壁垒下降。但长期看 7702 是 Ethereum 全民升级到 AA 的关键路径 · 对整个生态正面(参见 [[agent-economy/erc-7715-overview|ERC-7715]] 在 EOA 升级后的 agent permission 模型)。

## Open questions

- 7702 persistent delegation 的取消机制是否会产生 dust attack?
- 钱包 UI 如何向普通用户解释 delegation 风险?
- 2026-H2 Fusaka 升级具体会做哪些优化?
- 7702 在 L2(Optimism / Arbitrum / Base)的等效支持时间表?(对照 [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet 网络效应]] 在多链场景的复用)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/erc-7702-vs-erc-4337|ERC-7702 vs ERC-4337]]
- [[systems/erc-4337-overview|ERC-4337 Overview]]
- [[agent-economy/erc-7715-overview|ERC-7715(7702 EOA 也可接入)]]
<!-- /wiki-links:managed -->

## Sources

- EIP-7702 spec(eips.ethereum.org)
