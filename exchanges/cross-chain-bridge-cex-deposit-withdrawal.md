---
title: クロスチェーン bridge と CEX 入出金経路 — Wormhole / LayerZero / Axelar / Hyperlane / CCIP 比較
aliases:
  - Cross-chain bridge CEX integration
  - 取引所クロスチェーン入出金
  - Wormhole LayerZero Axelar Hyperlane CCIP comparison
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2027-05-19
confidence: likely
tags:
  - exchanges
  - cross-chain
  - bridge
  - cex
  - interoperability
sources:
  - https://wormhole.com/
  - https://layerzero.network/
  - https://www.axelar.network/
  - https://www.hyperlane.xyz/
  - https://chain.link/cross-chain
status: candidate
---

# クロスチェーン bridge と CEX 入出金経路 — Wormhole / LayerZero / Axelar / Hyperlane / CCIP 比較

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 ランキング比較 (2025-2026)]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 概要

CEX は通常複数 chain (Ethereum / Solana / BSC / Polygon / Arbitrum / Optimism / Base / Avalanche 等) で同 token の入出金を提供する。内部的に CEX 自身が cross-chain bridge を運用するパターンと、vendor bridge (Wormhole / LayerZero / Axelar / Hyperlane / CCIP) を経由するパターンが共存。ユーザから見れば「USDT (ERC20)」「USDT (TRC20)」のような network 選択 UI として現れるが、裏側は wrapped token + lock-mint or burn-mint の bridge プロトコルが動いている。

## Top 5 bridge protocol 比較

- **Wormhole** — Guardian 19 ノードによる multi-sig validation · token transfer + arbitrary message + NFT 対応 · Solana ↔ Ethereum の事実上の標準 · Solana 重視
- **LayerZero** — Ultra Light Node + DVN (Decentralized Verifier Network) による多重 validation · 60+ chain 接続 · **OFT (Omnichain Fungible Token)** standard が token 発行体に普及
- **Axelar** — PoS validator network · Cosmos SDK ベース · general message passing (GMP) · IBC 圏と EVM の橋渡し
- **Hyperlane** — permissionless interchain · 任意 chain に自分で deploy 可能 · modular ISM (Interchain Security Module)
- **Chainlink CCIP** — Cross-Chain Interoperability Protocol · Risk Management Network が異常検知 · 機関志向 · Swift 連携 PoC

## CEX 入出金との接点

- **多 chain 同 token**: USDT が ERC20 + Tron + BSC + Solana + Arbitrum + Avalanche 等 8 チェーン以上で発行 · CEX は「USDT (ERC20)」「USDT (TRC20)」等を network 選択 UI で区別、手数料も差別化
- **自社 bridge 運用**: Binance Bridge → BSC 連携 · Coinbase は Base L2 を自社 OP Stack で運用 · OKX は X Layer (zkEVM)
- **vendor 利用**: 中小 CEX が Wormhole / LayerZero 経由で Solana → Ethereum 送金を提供

## リスク + インシデント (2022 = "bridge hack year")

- **2022-02 Wormhole hack**: $325M ETH 流出 · signature 検証バグ · Jump Trading が補填
- **2022-03 Ronin Bridge hack**: $625M (Axie Infinity) · validator 5/9 鍵奪取 · Lazarus 帰属
- **2022-08 Nomad Bridge hack**: $190M · message 検証 initialization バグで copy-paste 攻撃
- **2022-09 Wintermute** など、bridge 周辺で連鎖的損失

## 規制位置

- bridge protocol 自体は技術プロトコルとして直接の VASP ライセンス対象外
- **CEX 内部 bridge**: VASP 一環として AML/CFT + Travel Rule の適用範囲
- **Tornado Cash OFAC 制裁 (2022-08)** 以降、mixer/bridge への規制圧力増 · 国内 VASP は限定的 chain サポート (規制リスク + 監視コスト)

## Cross-links

- [[exchanges/global-cex-top10-comparison]]
- [[exchanges/global-dex-major-five-comparison]]
- [[exchanges/solana-ecosystem-dex-comparison]]
- [[exchanges/jp-vasp-aml-travel-rule-implementation]]
- [[exchanges/bybit-lazarus-hack-detailed-analysis]] (Ronin 比較)
- [[fintech/cosmos-ibc-for-financial-institutions]]
- [[fintech/chain-level-ofac-freeze-precedent]]
- [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]]
- [[systems/cross-chain-five-pole-comparison-matrix|cross-chain 5 極比較マトリクス]]
- [[systems/cross-chain-four-poles-ccip-institutional|CCIP institutional 詳細]]
