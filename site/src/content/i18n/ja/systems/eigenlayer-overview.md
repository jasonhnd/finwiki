---
source: systems/eigenlayer-overview
source_hash: 926585c9820a3680
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "EigenLayer 概観 · Restaking と Ethereum 暗号経済セキュリティのリース"
translated_at: 2026-06-26T08:32:23.063Z
---
# EigenLayer 概観 · Restaking と Ethereum 暗号経済セキュリティのリース

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] 配下に位置する。ピア比較・対照の文脈では [[systems/eigenlayer-avs-mechanism|EigenLayer AVS メカニズム · Operator · Slashing · EIGEN 仲裁]] とあわせて読み、より広いシステム境界・規制境界については [[fintech/INDEX|fintech index]] を参照する。

## 主要事実

- 2023-06 メインネットローンチ ^[extracted]
- TVL 150 億+ USD(2025 中) ^[extracted]
- 40+ AVS が稼働(EigenDA / Hyperlane / AltLayer / Espresso / Lagrange 等) ^[extracted]
- EIGEN token 2024-10 ローンチ · inter-subjective dispute resolution に使用 ^[extracted]
- Slashing メカニズム 2025 起動 —— AVS が slashing 条件をカスタム定義可能 ^[extracted]

## Restaking の仕組みと AVS ワークフロー

伝統的な暗号経済セキュリティには **bootstrapping 問題** がある。新しい L1 はネイティブ token のステーキングで BFT を起動する必要があるが、起動初期には token 時価総額が低い → 攻撃コストが低い → 誰も使う勇気を持たない、という循環に陥る。クロスチェーンブリッジ / Oracle / DA 層などの「ミドルウェア」も独立 validator 集合を必要とし、それぞれにステーキング資本を集めねばならず、極めて非効率である。

EigenLayer の解決策は、**ETH という最も深い staking プールを、BFT スタイルの検証を必要とするあらゆるサービスに「貸し出す」**ことにある。ステーキング者は追加収益を得て、新サービスは即時にセキュリティを得る。一方で Ethereum L1 はダメージを受けない(二重 slashing 保証)([[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]] 参照)。

類比すると、SWIFT が既に持つ KYC 済み銀行ネットワークを新規決済会社に「貸す」ようなものであり、各社が個別に同じネットワークを構築するわけではない。

**中核コンポーネント**:
- **事業者**:ノード運営者。ETH をステーキング(自身または他人代理)し、選択的に各 AVS に opt-in する
- **AVS**:外部検証を必要とするサービス。自身の slashing 条件を定義する
- **EigenPods**:ETH staking rewards を受け取るコントラクト。native restaking を許可する
- **Strategies**:LST(stETH、rETH、cbETH 等)の restaking をサポートする

## 起源と発展

EigenLayer は Sreeram Kannan チーム(元 UW 教授)が 2021 年に restaking 論文を提案し、2023-06 にメインネットを起動した。初期ポジショニングは「モジュラーブロックチェーン時代のセキュリティ層」であり、ターゲット顧客は Celestia 競合(EigenDA)、クロスチェーンブリッジ(Hyperlane)、shared sequencer(Espresso)だった。

2024-10 に EIGEN token をローンチし、inter-subjective dispute resolution コンセプトを導入した。これは、AVS で「主観」違反(oracle 報価が市場から乖離するなど、暗号学的に反証不可能なもの)があった場合、EIGEN holder の投票で slash するかを決定する仕組みである。2025 に slashing を起動した後、EigenLayer は「コミットメントメカニズム」から「実際の経済セキュリティマーケット」に移行した([[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]] における暗号ネイティブ側の進化と対照)。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/eigenlayer-avs-mechanism|EigenLayer AVS Mechanism]]
- [[systems/eigenlayer-l1-bootstrapping|EigenLayer L1 Bootstrapping]]
- [[systems/hyperlane-overview|Hyperlane(EigenLayerISM)]]
<!-- /wiki-links:managed -->

## 出典

- EigenLayer Whitepaper(Sreeram Kannan et al.)
- EigenLayer docs — https://docs.eigenlayer.xyz/
