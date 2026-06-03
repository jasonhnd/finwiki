---
source: systems/eigenlayer-l1-bootstrapping
source_hash: a3f644f926eca2ec
lang: ja
status: machine
fidelity: ok
title: "EigenLayer による新 L1  起動期セキュリティ支援 · Tempo/Arc の潜在経路"
translated_at: 2026-06-03T01:06:46.345Z
---
# EigenLayer による新 L1  起動期セキュリティ支援 · Tempo/Arc の潜在経路

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] に属する。ピア比較・対照の文脈では [[systems/eigenlayer-overview|EigenLayer 概観 · Restaking と Ethereum 暗号経済セキュリティのリース]] と合わせて読み、より広いシステム境界・規制境界については [[fintech/INDEX|fintech index]] を参照する。

## 主要事実

- Arc は、restaking-secured permissioned BFT モデルをすでに公然と検討している ^[extracted]

## 仕組み

新しい L1  の起動期には bootstrapping 問題がある。ネイティブ token の時価総額が低いと攻撃コストも低くなる。攻撃コストが低いとユーザーは利用を恐れ、トラフィックが増えない。トラフィックが増えなければ token 価値も上がらない。この循環が死のループになる。

**3 つの解決策**:

| オプション | 意味 | 適用シナリオ |
|---|---|---|
| **A. 自前 validator 集合** | 古典的な L1  経路。token 発行、インセンティブ、長期 bootstrapping によって成立させる | 暗号ネイティブなプロジェクト。時間的猶予がある場合 |
| **B. EigenLayer AVS で起動** | 起動期に ETH セキュリティをリースし、徐々に自前 token へ移行する | エンタープライズ級 L1 。day-1  セキュリティが必須の場合 |
| **C. ハイブリッド(BFT + restaking 強化)** | 自前 validator と restaking による経済的補強を組み合わせ、51% 攻撃コストを下げる | token 発行需要があり、迅速な起動も必要な場合 |

**Tempo / Arc はオプション B/C を採る可能性が高い**:

- Tempo(Stripe)は Stripe 顧客、特に大手加盟店と向き合う必要があり、起動期攻撃を許容できない
- Arc(Circle)は USDC の主戦場であり、セキュリティリスクは Circle 自体の会社リスクになる
- 両者とも「将来の token 値上がり」を約束して起動期セキュリティと交換することはできない。成熟済みの ETH 経済セキュリティを借りる必要がある

## 起源と展開

EigenLayer の初期ポジショニングは、モジュラーミドルウェア(DA / Oracle / クロスチェーンブリッジ)のセキュリティ層だった。L1  起動アンブレラは 2024-2025 年 の拡張方向である。Hyperlane は EigenLayerISM(restaking-secured クロスチェーンメッセージ検証)を採用した最初期事例であり、「ETH で非 Ethereum サービスを担保する」可能性を検証した。

Tempo / Arc が EigenLayer 経路を採用して成功すれば、デモンストレーション効果が生まれる。他のエンタープライズ級 L1、たとえば JPM Kinexys の公開チェーン化経路や、その他のステーブルコインチェーンが追随する可能性がある。

**Ethereum L1 への反身効果**: restaking により ETH は「L1  gas + staking yield」だけでなく、**暗号経済セキュリティの基礎資産**にもなる。これは米ドルが「グローバル担保資産」になった構図に近い。ETH の長期価値を支える最大の物語的柱になる可能性があり、ultrasound money より重要かもしれない。[[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]] における CEX 側の進化と対照。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/eigenlayer-overview|EigenLayer Overview]]
- [[systems/eigenlayer-avs-mechanism|AVS Mechanism]]
- [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT Rust(L1 コンセンサス対照)]]
<!-- /wiki-links:managed -->

## 出典

- EigenLayer docs — https://docs.eigenlayer.xyz/
