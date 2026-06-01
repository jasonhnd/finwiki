---
title: EigenLayer 概観 · Restaking と Ethereum 暗号経済セキュリティのリース
aliases: [eigenlayer-overview, restaking-overview, eigen-protocol]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [systems, staking, restaking, eigenlayer, ethereum, security]
sources:
  - https://docs.eigenlayer.xyz/
status: candidate
---

# EigenLayer 概観 · Restaking と Ethereum 暗号経済セキュリティのリース

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/eigenlayer-avs-mechanism|EigenLayer AVS メカニズム · Operator · Slashing · EIGEN 仲裁]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- 2023-06 メインネットローンチ ^[extracted]
- TVL 150 億+ USD(2025 中) ^[extracted]
- 40+ AVS が稼働(EigenDA / Hyperlane / AltLayer / Espresso / Lagrange 等) ^[extracted]
- EIGEN token 2024-10 ローンチ · inter-subjective dispute resolution に使用 ^[extracted]
- Slashing メカニズム 2025 起動 —— AVS が slashing 条件をカスタム定義可能 ^[extracted]

## Restaking Mechanism and AVS Workflow

伝統的な暗号経済セキュリティは **bootstrapping 問題** :新 L1 はネイティブ token のステーキングで BFT を起動する必要があるが、起動初期には token 時価総額が低い → 攻撃コストが低い → 誰も使う勇気を持たない。クロスチェーンブリッジ / Oracle / DA 層等の「ミドルウェア」も独立 validator 集合を必要とし、それぞれにステーキング資本を集めねばならず、極めて非効率。

EigenLayer の解決策:**ETH という最も深い staking プールを、BFT スタイル検証を必要とするあらゆるサービスに「貸し出す」**。ステーキング者は追加収益を得、新サービスは即時セキュリティを得、Ethereum L1 はダメージを受けない(二重 slashing 保証)([[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]] 参照)。

類比:SWIFT が既に持つ KYC 銀行ネットワークを新規決済会社に「貸す」もので、各社が個別に構築するわけではない。

**中核コンポーネント**:
- **Operators**:ノード運営者、ETH をステーキング(自身または他人代理)し、選択的に各 AVS に opt-in
- **AVS**:外部検証を必要とするサービス、自身の slashing 条件を定義
- **EigenPods**:ETH staking rewards を受け取るコントラクト、native restaking を許可
- **Strategies**:LST(stETH、rETH、cbETH 等)の restaking をサポート

## Origin & evolution

EigenLayer は Sreeram Kannan チーム(元 UW 教授)が 2021 年に restaking 論文を提案し、2023-06 にメインネットを起動。初期ポジショニングは「モジュラーブロックチェーン時代のセキュリティ層」で、ターゲット顧客は Celestia 競合(EigenDA)、クロスチェーンブリッジ(Hyperlane)、shared sequencer(Espresso)。

2024-10 EIGEN token をローンチし、inter-subjective dispute resolution コンセプトを導入 —— AVS で「主観」違反(oracle 報価が市場から乖離するなど、暗号学的に反証不可能)があった場合、EIGEN holder の投票で slash するか決定する。2025 に slashing を起動した後、EigenLayer は「コミットメントメカニズム」から「実際の経済セキュリティマーケット」に移行([[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]] における暗号ネイティブ側の進化と対照)。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/eigenlayer-avs-mechanism|EigenLayer AVS Mechanism]]
- [[systems/eigenlayer-l1-bootstrapping|EigenLayer L1 Bootstrapping]]
- [[systems/hyperlane-overview|Hyperlane(EigenLayerISM)]]
<!-- /wiki-links:managed -->

## Sources

- EigenLayer Whitepaper(Sreeram Kannan et al.)
- EigenLayer docs — https://docs.eigenlayer.xyz/
