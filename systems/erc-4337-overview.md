---
title: ERC-4337 概览 · Account Abstraction 的应用层实现
aliases: [erc-4337-overview, account-abstraction-overview, aa-overview]
domain: systems
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [systems, wallet, aa, account-abstraction, erc-4337, ethereum]
sources: []
status: candidate
---

# ERC-4337 概览 · Account Abstraction 的应用层实现


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/erc-7702-vs-erc-4337|ERC-7702 vs ERC-4337 · Ethereum AA 双轨对照]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- 2023-03 Ethereum 主网激活 ^[extracted]
- 不修改协议层 · 纯应用层实现 ^[extracted]
- EntryPoint 是链上单例合约(0x0000000071727De22E5E9d8BAf0edAc6f37da032) ^[extracted]
- v0.7 升级(2026)简化 mempool 规则 · 降低 gas 开销 20-30% ^[extracted]
- 支持 WebAuthn / passkey / BLS / secp256r1(iOS Secure Enclave)等 custom signature ^[extracted]

## Mechanism / How it works

ERC-4337 解决的核心问题:**EOA 和 SCW 的功能鸿沟**。传统 EOA 由 secp256k1 私钥控制 · 只能发起交易/付 gas/签名 · 无可编程逻辑。SCW(Safe/Argent)虽可编程 · 但必须由 EOA 发起 tx 触发——用户仍需持有 ETH 付 gas、保管私钥。

ERC-4337 引入新的 **alternative transaction pool**:

- **UserOperation**:用户签名的"意图"对象(不是 transaction)· 包含 calldata / gas limits / paymaster 信息
- **Bundler**:类似 block builder · 从 UserOp mempool 打包成单笔标准 transaction 发到 EntryPoint
- **EntryPoint**:链上单例合约 · 验证 + 执行所有 UserOp
- **Paymaster**:可选合约 · 代付 gas(或接受 ERC-20 付 gas)
- **Aggregator**:可选 · 批量验证多个签名(BLS / 其他方案)

**核心创新:UserOp 不是 transaction** · 而是被 Bundler 打包成 transaction 的 sub-unit。

## Origin & evolution

ERC-4337 由 Vitalik Buterin、Yoav Weiss、Kristof Gazso 等 2021 提出 · 初衷是绕过"修改 Ethereum 协议层"的高门槛(此前 EIP-2938、EIP-3074 都未能进主网)。2023-03 主网激活后 · 进展超预期——[[agent-economy/privy-embedded-wallet-overview|Privy]] / Coinbase CDP / Alchemy 等 embedded wallet 栈快速集成(对照 [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet 网络效应护城河]])。

2026 年 v0.7 升级:简化 mempool 规则 · 降低 gas 开销 20-30% · Bundler 经济模型优化。同期 ERC-7702(Vitalik 2024-05 起草)反向解决"现有 EOA 升级 SCW"问题——两者形成互补双轨。

## Counterpoints

**Bundler 中心化风险**:实际上线初期 Bundler 由少数运营商(Pimlico、Stackup、Alchemy)主导 · 形成中心化瓶颈。理论上 Bundler 可以审查特定 UserOp · 这是 4337 设计未完全解决的问题。

**UX 复杂度未根本降低**:虽然 4337 让 SCW 拥有 EOA 没有的能力 · 但 Paymaster 配置 / Bundler 选择 / EntryPoint 升级等开发者复杂度仍高 · 这是 7702 反而显得"简洁"的根本原因。

## Open questions

- v0.7 之后下一代 4337(v0.8/v1.0)的方向?
- Bundler 去中心化(stake-based、PBS 整合)进展?
- 与 7702 的长期分工是否会稳定?(参见 [[agent-economy/erc-7715-overview|ERC-7715 agent payment stack]] 等基于 AA 的高阶协议演化)
- 非 EVM 链(Solana / Move / Cosmos)的类 4337 标准发展?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/erc-4337-userop-bundler-flow|UserOp/Bundler Flow]]
- [[systems/erc-4337-embedded-wallet-adoption|Embedded Wallet Adoption]]
- [[systems/erc-7702-overview|ERC-7702(EOA 临时 SCW)]]
<!-- /wiki-links:managed -->

## Sources

- ERC-4337 EIP(eips.ethereum.org)
