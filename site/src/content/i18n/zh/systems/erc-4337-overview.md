---
source: systems/erc-4337-overview
source_hash: 74eaa7d88488e4e3
lang: zh
status: machine
fidelity: ok
title: "ERC-4337  概览 · Account Abstraction 的应用层实现"
translated_at: 2026-06-01T04:15:40.146Z
---
# ERC-4337  概览 · Account Abstraction 的应用层实现

## Wiki 路由

本条目位于 [[systems/INDEX|systems index]] 之下。可对照 [[systems/erc-7702-vs-erc-4337|ERC-7702 vs ERC-4337 · Ethereum AA デュアルトラック対照]] 阅读，以获得同业 / 对比语境；也可对照 [[fintech/INDEX|fintech index]] 阅读，以理解更广泛的系统 / 监管边界。

## 关键事实

- 2023-03  在 Ethereum 主网上启用 ^[extracted]
- 不改变协议层 · 纯粹在应用层实现 ^[extracted]
- EntryPoint 是链上的 singleton 合约（0x0000000071727De22E5E9d8BAf0edAc6f37da032）^[extracted]
- v0.7  升级（2026）简化 mempool 规则 · 将 gas 开销削减 20-30% ^[extracted]
- 支持 WebAuthn / passkey / BLS / secp256r1（iOS Secure Enclave）等自定义签名 ^[extracted]

## 机制 / 工作方式

ERC-4337  解决的核心问题：**EOA 与 SCW 的功能差距**。传统 EOA 由 secp256k1  私钥控制 · 只能发送交易 / 支付 gas / 签名 · 不具备可编程逻辑。SCW（Safe/Argent）可编程，但需要 EOA 发出 tx 来触发 —— 用户仍然需要持有 ETH 支付 gas，并管理私钥。

ERC-4337  引入新的 **alternative transaction pool**:

- **UserOperation**: 用户签名的“intent”对象（不是交易）· 包含 calldata / gas limits / paymaster 信息
- **Bundler**: 类似 block builder · 从 UserOp mempool 取得对象，打包成标准交易 1 件，并发送到 EntryPoint
- **EntryPoint**: 链上的 singleton 合约 · 验证 + 执行所有 UserOp
- **Paymaster**: 可选合约 · 代付 gas（或接受用 ERC-20  支付 gas）
- **Aggregator**: 可选 · 批量验证多个签名（BLS / 其他方式）

**核心创新：UserOp 不是交易** · 而是由 Bundler 打包进交易的 sub-unit。

## 起源与演进

ERC-4337  由 Vitalik Buterin、Yoav Weiss、Kristof Gazso 等人在 2021 年 提出 · 最初意图是绕开“改变 Ethereum 协议层”这一高门槛（此前 EIP-2938、EIP-3074  均未能进入主网）。2023-03  主网启用后 · 进展超过预期 —— [[agent-economy/privy-embedded-wallet-overview|Privy]] / Coinbase CDP / Alchemy 等 embedded wallet 技术栈快速集成（与 [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet ネットワーク効果の堀]] 对照）。

2026 年 的 v0.7  升级：简化 mempool 规则 · 将 gas 开销削减 20-30% · 优化 Bundler 经济模型。同一时期，ERC-7702（Vitalik 从 2024-05  起草）从相反方向解决“将现有 EOA 升级为 SCW”的问题 —— 二者形成互补的 dual track。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/erc-4337-userop-bundler-flow|UserOp/Bundler Flow]]
- [[systems/erc-4337-embedded-wallet-adoption|Embedded Wallet Adoption]]
- [[systems/erc-7702-overview|ERC-7702(EOA 一時 SCW)]]
<!-- /wiki-links:managed -->

## 来源

- ERC-4337「Account Abstraction Using Alt Mempool」 — https://eips.ethereum.org/EIPS/eip-4337
