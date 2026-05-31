---
source: exchanges/cross-chain-bridge-cex-deposit-withdrawal
source_hash: b175a4e00a825c42
lang: zh
status: machine
fidelity: ok
title: "跨链 bridge 与 CEX 出入金路径 —— Wormhole / LayerZero / Axelar / Hyperlane / CCIP 比较"
translated_at: 2026-05-31T03:19:56.409Z
---

# 跨链 bridge 与 CEX 出入金路径 —— Wormhole / LayerZero / Axelar / Hyperlane / CCIP 比较

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 ランキング比較 (2025-2026)]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 概要

CEX 通常在多个 chain（Ethereum / Solana / BSC / Polygon / Arbitrum / Optimism / Base / Avalanche 等）上提供同一 token 的出入金。CEX 自身运营 cross-chain bridge 的模式，与经由 vendor bridge（Wormhole / LayerZero / Axelar / Hyperlane / CCIP）的模式并存。在用户看来呈现为「USDT (ERC20)」「USDT (TRC20)」这样的 network 选择 UI，但背后是 wrapped token + lock-mint 或 burn-mint 的 bridge 协议在运行。

## Top 5 bridge 协议比较

- **Wormhole** —— 由 Guardian 19 节点进行的 multi-sig validation · token transfer + arbitrary message + NFT 支持 · Solana ↔ Ethereum 的事实标准 · 重视 Solana
- **LayerZero** —— 由 Ultra Light Node + DVN（Decentralized Verifier Network）进行的多重 validation · 60+ chain 连接 · **OFT（Omnichain Fungible Token）** standard 在 token 发行体中普及
- **Axelar** —— PoS validator network · 基于 Cosmos SDK · general message passing（GMP）· IBC 圈与 EVM 的桥接
- **Hyperlane** —— permissionless interchain · 可在任意 chain 自行 deploy · modular ISM（Interchain Security Module）
- **Chainlink CCIP** —— Cross-Chain Interoperability Protocol · Risk Management Network 进行异常检测 · 面向机构 · Swift 联动 PoC

## 与 CEX 出入金的接点

- **多 chain 同 token**：USDT 在 ERC20 + Tron + BSC + Solana + Arbitrum + Avalanche 等 8 条链以上发行 · CEX 在 network 选择 UI 中区分「USDT (ERC20)」「USDT (TRC20)」等，手续费也差别化
- **自营 bridge 运营**：Binance Bridge → BSC 联动 · Coinbase 以自家 OP Stack 运营 Base L2 · OKX 运营 X Layer（zkEVM）
- **使用 vendor**：中小 CEX 经由 Wormhole / LayerZero 提供 Solana → Ethereum 转账

## 风险 + 事件（2022 = "bridge hack year"）

- **2022-02 Wormhole hack**：$325M ETH 流出 · signature 验证漏洞 · Jump Trading 补偿
- **2022-03 Ronin Bridge hack**：$625M（Axie Infinity）· validator 5/9 密钥被夺取 · 归属 Lazarus
- **2022-08 Nomad Bridge hack**：$190M · 因 message 验证 initialization 漏洞导致 copy-paste 攻击
- **2022-09 Wintermute** 等，在 bridge 周边连锁性损失

## 监管定位

- bridge 协议本身作为技术协议，不直接属于 VASP 牌照对象
- **CEX 内部 bridge**：作为 VASP 一环属于 AML/CFT + Travel Rule 的适用范围
- 自 **Tornado Cash OFAC 制裁（2022-08）** 以来，对 mixer/bridge 的监管压力增大 · 国内 VASP 提供有限的 chain 支持（监管风险 + 监控成本）

## Cross-links

- [[exchanges/global-cex-top10-comparison]]
- [[exchanges/global-dex-major-five-comparison]]
- [[exchanges/solana-ecosystem-dex-comparison]]
- [[exchanges/jp-vasp-aml-travel-rule-implementation]]
- [[exchanges/bybit-lazarus-hack-detailed-analysis]] (Ronin 比较)
- [[fintech/cosmos-ibc-for-financial-institutions]]
- [[fintech/chain-level-ofac-freeze-precedent]]
- [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]]
- [[systems/cross-chain-five-pole-comparison-matrix|cross-chain 5 極比較マトリクス]]
- [[systems/cross-chain-four-poles-ccip-institutional|CCIP institutional 詳細]]
