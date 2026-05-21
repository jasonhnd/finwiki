---
title: AMM 設計の進化 — Uniswap v1/v2/v3/v4 + 異派 (Curve / Balancer / TraderJoe)
aliases:
  - AMM design evolution
  - Uniswap v1 v2 v3 v4 history
  - Automated Market Maker 設計史
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2027-05-19
confidence: likely
tags:
  - exchanges
  - dex
  - amm
  - defi
  - uniswap
sources:
  - https://docs.uniswap.org/
  - https://docs.curve.fi/
  - https://docs.balancer.fi/
status: candidate
---

# AMM 設計の進化 — Uniswap v1/v2/v3/v4 + 異派 (Curve / Balancer / TraderJoe)

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-dex-major-five-comparison|global dex major five comparison]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 概要

AMM (Automated Market Maker) は 2018 年 Uniswap v1 の登場以降、4 段階で進化し、並列して異派が発展した。設計の核は **constant product (x*y=k) → stable swap → concentrated liquidity → custom hooks** という流れで、各段階が DEX エコシステム全体の流動性効率・資本効率・拡張性を駆動してきた。オーダーブック型 CEX に対する DEX の代替性を成立させた根幹技術である。

## Uniswap 系列

- **v1** (2018-11): ETH ↔ ERC20 ペア限定 · constant product (x*y=k) · 1% 固定手数料 · LP は単一比率提供
- **v2** (2020-05): ERC20 ↔ ERC20 直接ペア · flash swap (借入→アービ→返済の単一トランザクション) · TWAP oracle 内蔵 · 3 tier 手数料
- **v3** (2021-05): **concentrated liquidity** — LP が任意の価格帯を選んで流動性集中可能 · 4 tier 手数料 (0.01/0.05/0.30/1.00%) · 同等流動性で capital efficiency 最大 4000x
- **v4** (2024-): **hooks** — swap/LP イベントに任意ロジック注入可能 (dynamic fee / on-chain limit order / custom oracle) · singleton contract (全プール 1 コントラクト集約) · gas 50%+ 削減 + 拡張性

## 異派 AMM

- **Curve** (2020-02): **stable swap** = constant sum + constant product hybrid · stablecoin / wrapped asset 特化で slippage 極小化 · CRV + veCRV gauge による emission 配分競争 (curve war)
- **Balancer** (2020-03): 任意比率複数 token プール (80/20 等) · 自動 portfolio rebalancing · weighted pool で index fund 的運用可能
- **TraderJoe Liquidity Book** (2022-): **bin-based AMM** · 価格帯を離散 bin に分割 · bin 内 zero-slippage (constant sum) · v3 の concentrated を bin 化で簡素化

## 設計の trade-off

- **constant product**: シンプル / 任意 token ペア対応 / 中間価格帯で資本非効率
- **stable swap**: stable 専用で極高効率 / 設計複雑 / 非 stable には不適
- **concentrated**: 高効率 / impermanent loss 増大 / LP UX 複雑 (active management 必要)
- **hooks (v4)**: 拡張性最大 / カスタムロジックのセキュリティリスク (audit コスト上昇)

## 実用

DEX aggregator ([[exchanges/global-dex-major-five-comparison]] の 1inch / Paraswap / Matcha) が複数 AMM を route し、最良執行を実現。MEV bot (Flashbots) が AMM 設計の隙を突く (sandwich / arbitrage) ため、各 AMM は MEV 耐性を意識した設計に進化中。現状 Uniswap V3+V4 が汎用 AMM 主流だが、stablecoin 領域では Curve が支配的。Perp は別系統で [[exchanges/global-perp-dex-five-comparison]] 参照。

## 関連

- [[exchanges/global-dex-major-five-comparison]] — Uniswap / Curve / Aerodrome / PancakeSwap / Hyperliquid
- [[exchanges/global-perp-dex-five-comparison]] — perp 系 (CLOB / oracle / AMM) vs 本記事 spot AMM
- [[exchanges/native-dex-flip-incumbent-pattern]] — チェーンネイティブ DEX が外部参入を凌駕する構造
- [[exchanges/vetoken-host-protocol-flywheel]] — Curve war の veCRV モデル詳細
