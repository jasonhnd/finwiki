---
source: exchanges/cross-chain-bridge-cex-deposit-withdrawal
source_hash: b175a4e00a825c42
lang: ja
status: machine
fidelity: ok
title: "クロスチェーンブリッジと CEX 入出金経路 — Wormhole / LayerZero / Axelar / Hyperlane / CCIP 比較"
translated_at: 2026-06-02T12:19:04.205Z
---
# クロスチェーンブリッジと CEX 入出金経路 — Wormhole / LayerZero / Axelar / Hyperlane / CCIP 比較

## ウィキ上の位置づけ

この項目は [[exchanges/INDEX|exchanges index]] の配下に位置する。比較・対照の文脈では [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 ランキング比較 (2025-2026)]] を、より広いシステムおよび規制境界については [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] をあわせて読む。

## 概要

CEX は通常、複数のチェーン（Ethereum / Solana / BSC / Polygon / Arbitrum / Optimism / Base / Avalanche など）で同一トークンの入出金を提供する。内部的には、CEX 自身がクロスチェーンブリッジを運用するパターンと、ベンダーのブリッジ（Wormhole / LayerZero / Axelar / Hyperlane / CCIP）を経由するパターンが共存している。ユーザーから見れば「USDT (ERC20)」「USDT (TRC20)」のようなネットワーク選択 UI として現れるが、裏側では wrapped token と lock-mint または burn-mint 型のブリッジプロトコルが動いている。

## 上位 5 ブリッジプロトコル比較

- **Wormhole** — Guardian 19 ノードによるマルチシグ検証・トークン移転 + 任意メッセージ + NFT 対応・Solana ↔ Ethereum の事実上の標準・Solana 重視
- **LayerZero** — Ultra Light Node + DVN (Decentralized Verifier Network) による多重検証・60以上のチェーン接続・**OFT (Omnichain Fungible Token)** 標準がトークン発行体に普及
- **Axelar** — PoS validator network・Cosmos SDK ベース・general message passing (GMP)・IBC 圏と EVM の橋渡し
- **Hyperlane** — permissionless interchain・任意のチェーンに自分でデプロイ可能・modular ISM (Interchain Security Module)
- **Chainlink CCIP** — Cross-Chain Interoperability Protocol・Risk Management Network が異常を検知・機関投資家志向・Swift 連携 PoC

## CEX 入出金との接点

- **複数チェーンの同一トークン**: USDT は ERC20 、Tron、BSC、Solana、Arbitrum、Avalanche など 8 以上のチェーンで発行されている。CEX は「USDT (ERC20)」「USDT (TRC20)」などをネットワーク選択 UI で区別し、手数料も差別化する。
- **自社ブリッジ運用**: Binance Bridge → BSC 連携・Coinbase は Base L2 を自社 OP Stack で運用・OKX は X Layer (zkEVM)
- **ベンダー利用**: 中小 CEX が Wormhole / LayerZero 経由で Solana → Ethereum 送金を提供

## リスク + インシデント (2022 = "bridge hack year")

- **2022-02 Wormhole hack**: $325M 相当の ETH 流出・署名検証バグ・Jump Trading が補填
- **2022-03 Ronin Bridge hack**: $625M (Axie Infinity)・validator 5/9  の鍵奪取・Lazarus への帰属
- **2022-08 Nomad Bridge hack**: $190M・message 検証の初期化バグにより copy-paste 攻撃が発生
- **2022-09 Wintermute** など、ブリッジ周辺で連鎖的損失

## 規制上の位置づけ

- ブリッジプロトコル自体は技術プロトコルとして、直接の VASP ライセンス対象外
- **CEX 内部ブリッジ**: VASP 業務の一環として AML/CFT + Travel Rule の適用範囲
- **Tornado Cash OFAC 制裁 (2022-08)** 以降、mixer/bridge への規制圧力が増大。国内 VASP は、規制リスクと監視コストから対応チェーンを限定しがちである。

## 関連項目

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
