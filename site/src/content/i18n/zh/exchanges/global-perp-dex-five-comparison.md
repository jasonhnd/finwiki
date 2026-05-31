---
source: exchanges/global-perp-dex-five-comparison
source_hash: 0bb1a73221c75439
lang: zh
status: machine
fidelity: ok
title: "全球 Perp DEX 主要 5 社比较"
translated_at: 2026-05-31T03:19:56.428Z
---

# 全球 Perp DEX 主要 5 社比较


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-dex-major-five-comparison|global dex major five comparison]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 概要

Perp（永续合约）DEX 作为 CEX 衍生交易（Binance / Bybit / OKX）的链上替代，是以智能合约再现杠杆 + funding-rate 机制的系统。设计明确分为 CLOB（Central Limit Order Book on-chain）与 AMM/oracle-pricing 的 2 大分叉。CLOB 由 Hyperliquid 和 dYdX v4 主导，AMM/oracle pricing 以 GMX 和 Drift 为代表。2024-2026 期 Hyperliquid 呈现出压倒性崛起，在链上实现了媲美 CEX 的 latency 和订单簿 UX 这一点上领先。与 CEX 的交易量对比参见 ([[exchanges/global-cex-top10-comparison]])，现货 DEX 参见 ([[exchanges/global-dex-major-five-comparison]])。

## 5 强画像

- **Hyperliquid** — 自有 L1 (Hyperliquid Chain) 上的 CLOB perp 专门 DEX。在链上运营订单簿同时达成低 latency。perp 24h vol $1-3B，居 perp DEX 之首。于 2024-11  launch HYPE token（无预售的基于 emission 的用户获取模型）。创始人 Jeff Yan。
- **dYdX v4** — 于 2023-10 从 StarkEx L2 (Ethereum) 完全迁移至独自 Cosmos chain (dYdX Chain)。在 validator 侧运营 CLOB，仅将结算 commit 到链上。DYDX token (Cosmos 上的 native)。美国访问因监管对应已被阻断。
- **GMX** — 在 Arbitrum + Avalanche 部署。LP 出资 GLP 池（多资产池），成为全部 trader 的 counterparty 的单一池模型。oracle pricing 下价格为 Chainlink + 内部 keeper。GMX token（治理 + fee share）。2022-2023 峰值 → 2024 份额下降。
- **Vertex Protocol** — Arbitrum 上的 CLOB + AMM 混合。将 spot + perp + money market 整合到 1 个 margin account 的 multi-product 设计为特征。VRTX token。
- **Drift Protocol** — Solana 上的 oracle pricing + AMM perp。作为 Solana 生态 perp 的核心 hub 运作。DRIFT token。活用 Solana 高速性的 low-latency 设计。

## 比较表 (设计 / chain / token / 24h vol)

| 名称 | chain | 设计 | token | 24h vol (推定) |
|---|---|---|---|---|
| Hyperliquid | 自有 L1 | CLOB | HYPE | $1-3B |
| dYdX v4 | Cosmos (dYdX Chain) | CLOB | DYDX | $0.3-1B |
| GMX | Arbitrum + Avalanche | oracle/GLP 池 | GMX | $0.1-0.3B |
| Vertex | Arbitrum | CLOB+AMM 混合 | VRTX | $0.1-0.4B |
| Drift | Solana | oracle+AMM | DRIFT | $0.1-0.3B |

设计 trade-off — CLOB 在订单类型多样 (limit / stop / IOC) + MEV resistance + 价格发现精度上更优，但开发复杂度和 performance 要求较高。AMM/oracle pricing 抱有 LP 风险 (毒性订单 toxic flow) + slippage + oracle 操纵脆弱性，但流动性引导更简单。监管位置上任一 protocol 的美国访问阻断都在推进（含 Hyperliquid）。在日本作为未上市 token，虽不在 FSA 警告书发出的对象内，但因未列入 JVCEA WhiteList ([[exchanges/jvcea-whitelist-token-listing]])，故国内交易所不经办。chain native DEX 翻转先行 incumbent 的 pattern 参见 ([[exchanges/native-dex-flip-incumbent-pattern]])。交易量市场波动较大，表中数值为 2025-2026 时点的概算范围参考值。Solana 系的 Drift 在 [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]] 也有详述，cross-chain 接入性请并读 [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]] 与 [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|cross-chain bridge × CEX 入出金]]。
