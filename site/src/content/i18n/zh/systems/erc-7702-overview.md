---
source: systems/erc-7702-overview
source_hash: 07afc16744749e47
lang: zh
status: machine
fidelity: ok
title: "ERC-7702 概观 · EOA 临时获得 SCW 功能的 Pectra 升级"
translated_at: 2026-06-01T04:15:40.163Z
---

# ERC-7702 概观 · EOA 临时获得 SCW 功能的 Pectra 升级

## Wiki route

本条目位于 [[systems/INDEX|systems index]] 之下。请对照 [[systems/erc-7702-vs-erc-4337|ERC-7702 vs ERC-4337 · Ethereum AA デュアルトラック対照]] 阅读同业 / 对比背景，并用 [[fintech/INDEX|fintech index]] 理解更广泛的系统 / 监管边界。

## Key facts

- Pectra 2025-05 主网激活（包含 7702 + 7251 validator + 2935 blockhash 等）^[extracted]
- Vitalik 在 2024-05 放弃 EIP-3074  后，亲自起草 7702  ^[extracted]
- 新设 SET_CODE_TX（EIP type 0x04）^[extracted]
- 90% 的 ETH 持有者仍使用 EOA（MetaMask / Rabby / Trust Wallet）· 这正是 7702 的目标 ^[extracted]
- 2026-Q1-Q2：MetaMask / Rabby / Coinbase Wallet 默认支持 ^[extracted]

## Mechanism / How it works

**核心问题**：ERC-4337 要求用户迁移到新地址（SCW 地址 ≠ EOA 地址）。对于已经拥有链上历史、ENS、NFT、DeFi 仓位的 EOA 用户，迁移成本难以接受。

**Vitalik 推进 7702 的核心理由**：
- 90% 的 ETH 持有者仍使用 EOA
- 4337 显示，在 2023-2025 的 2 年间，SCW 渗透率 < 5% — 证明“新建 SCW”路径渗透太慢
- 需要**直接升级 EOA 的路径** · 让所有 EOA 一夜之间获得 SCW 功能

**机制**：
- 新设 `SET_CODE_TX`（EIP type 0x04）
- 用户（EOA）通过签名，授权在该 tx 期间向自己的地址赋予 contract code
- 该 tx 完成后 · code 可以保持（persistent delegation）或删除
- 在持久化模式下 · EOA 的行为完全等同于 SCW · 但地址不变

**典型应用流程**：
1. EOA 用户签署 `delegationDesignator`（SCW 实现合约 · 例如对 Safe / Kernel 的引用）
2. 用户（或通过 Bundler 代付 gas）发出 `SET_CODE_TX`
3. EOA 地址随后按 SCW 逻辑执行 — 可使用 batch、sponsor、session key 等
4. 用户可随时通过签名删除 delegation · 回到纯 EOA 状态

## Origin & evolution

2017-2024 年期间 · Ethereum AA 的努力经历了多次尝试：EIP-86（2017 失败）→ EIP-2938（2020 失败）→ EIP-3074（2022 几乎实现但存在签名 replay 问题）→ ERC-4337（2023-03 在应用层实现）→ EIP-7702（2024-05 Vitalik 起草）。

**与 ERC-3074 的重要差异**：
- 3074 使用 `AUTH/AUTHCALL` opcode · 需要 invoker contract 中介 · UX 复杂 + 签名 replay 风险高
- 7702 在 tx 层直接 set code · **更接近原生 SCW 体验** · 并且与 4337 和 EntryPoint 基础设施共享

**时间线**：
- 2024-05：Vitalik 放弃 3074  · 起草 7702 
- 2025-05：Pectra 主网激活（7702 + 7251 + 2935 等）
- 2026-Q1-Q2：MetaMask / Rabby / Coinbase Wallet 默认支持
- 2026-H2：Fusaka 升级进一步优化 7702 经济模型

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/erc-7702-vs-erc-4337|ERC-7702 vs ERC-4337]]
- [[systems/erc-4337-overview|ERC-4337 Overview]]
- [[agent-economy/erc-7715-overview|ERC-7715(7702 EOA も接続可能)]]
<!-- /wiki-links:managed -->

## Sources

- EIP-7702「Set Code for EOAs」 — https://eips.ethereum.org/EIPS/eip-7702
