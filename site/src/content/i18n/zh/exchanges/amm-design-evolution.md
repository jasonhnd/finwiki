---
source: exchanges/amm-design-evolution
source_hash: ab6bc1560ef52291
lang: zh
status: machine
fidelity: ok
title: "AMM 设计的演进 — Uniswap v1/v2/v3/v4 + 异类（Curve / Balancer / TraderJoe）"
translated_at: 2026-05-31T03:19:56.455Z
---

# AMM 设计的演进 — Uniswap v1/v2/v3/v4 + 异类（Curve / Balancer / TraderJoe）

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-dex-major-five-comparison|global dex major five comparison]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 概要

AMM（Automated Market Maker，自动做市商）自 2018 年 Uniswap v1  问世以来，经历了 4  个阶段的演进，并行发展出多种异类。设计的核心遵循 **constant product（x*y=k）→ stable swap → concentrated liquidity → custom hooks** 这一脉络，各阶段驱动了整个 DEX 生态的流动性效率、资本效率与可扩展性。它是使 DEX 相对于订单簿型 CEX 的替代性得以成立的根基技术。

## Uniswap 系列

- **v1**（2018-11）：仅限 ETH ↔ ERC20  交易对 · constant product（x*y=k）· 1% 固定手续费 · LP 按单一比率提供
- **v2**（2020-05）：ERC20  ↔ ERC20  直接交易对 · flash swap（借入→套利→偿还的单笔交易）· 内置 TWAP oracle · 3  档手续费
- **v3**（2021-05）：**concentrated liquidity** — LP 可选择任意价格区间集中流动性 · 4  档手续费（0.01/0.05/0.30/1.00%）· 同等流动性下资本效率最高 4000x
- **v4**（2024-）：**hooks** — 可向 swap/LP 事件注入任意逻辑（dynamic fee / 链上限价单 / custom oracle）· singleton contract（全部池聚合于 1  合约）· gas 削减 50%+ + 可扩展性

## 异类 AMM

- **Curve**（2020-02）：**stable swap** = constant sum + constant product 混合 · 针对 stablecoin / wrapped asset 特化以将滑点极小化 · 通过 CRV + veCRV gauge 进行排放分配竞争（curve war）
- **Balancer**（2020-03）：任意比例多 token 池（80/20  等）· 自动 portfolio rebalancing · 用 weighted pool 可实现类指数基金式运作
- **TraderJoe Liquidity Book**（2022-）：**bin-based AMM** · 将价格区间分割为离散 bin · bin 内 zero-slippage（constant sum）· 将 v3  的 concentrated 用 bin 化加以简化

## 设计的 trade-off

- **constant product**：简单 / 支持任意 token 交易对 / 中间价格区间资本非高效
- **stable swap**：stable 专用故极高效率 / 设计复杂 / 不适用于非 stable
- **concentrated**：高效率 / impermanent loss 增大 / LP UX 复杂（需 active management）
- **hooks（v4）**：可扩展性最大 / 自定义逻辑的安全风险（audit 成本上升）

## 实用

DEX aggregator（[[exchanges/global-dex-major-five-comparison]] 的 1inch / Paraswap / Matcha）对多个 AMM 进行 route，实现最优执行。MEV bot（Flashbots）利用 AMM 设计的缝隙（sandwich / arbitrage），因此各 AMM 正朝着兼顾 MEV 抗性的方向演进。现状下 Uniswap V3+V4  是通用 AMM 主流，但在 stablecoin 领域 Curve 占支配地位。Perp 属另一系统，参见 [[exchanges/global-perp-dex-five-comparison]]。

## 相关

- [[exchanges/global-dex-major-five-comparison]] — Uniswap / Curve / Aerodrome / PancakeSwap / Hyperliquid
- [[exchanges/global-perp-dex-five-comparison]] — perp 系（CLOB / oracle / AMM）vs 本文 spot AMM
- [[exchanges/native-dex-flip-incumbent-pattern]] — 链原生 DEX 凌驾外部进入者的结构
- [[exchanges/vetoken-host-protocol-flywheel]] — Curve war 的 veCRV 模型详解
- [[systems/cross-chain-four-poles-overview]] — cross-chain 4  极 overview（AMM × bridge）
- [[exchanges/cross-chain-bridge-cex-deposit-withdrawal]] — cross-chain bridge × CEX 出入金
- [[exchanges/ve33-governance-mechanism]] — ve(3,3) governance 机制
