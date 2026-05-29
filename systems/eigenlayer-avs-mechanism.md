---
title: EigenLayer AVS メカニズム · Operator · Slashing · EIGEN 仲裁
aliases: [eigenlayer-avs, avs-mechanism, operator-slashing-eigen]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [systems, restaking, eigenlayer, avs, slashing, eigen-token]
sources:
  - https://docs.eigenlayer.xyz/
status: candidate
---

# EigenLayer AVS メカニズム · Operator · Slashing · EIGEN 仲裁


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/eigenlayer-overview|EigenLayer 概観 · Restaking と Ethereum 暗号経済セキュリティのリース]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- AVS は slashing 条件をカスタム定義 · 例えば「DA 不可用 → slash 5%」 ^[extracted]
- Operator は opt-in 時に AVS 全 slashing 条件の受諾を約束 ^[extracted]
- マルチ AVS 累計 slash 上限 = 100% · rehypothecation リスク境界を形成 ^[extracted]
- EIGEN token は inter-subjective dispute resolution(主観違反の仲裁)に使用 ^[extracted]
- Strategies は LST(stETH/rETH/cbETH)をサポート · native ETH のみではない ^[extracted]

## Mechanism / How it works

**Operator-AVS マッチング フロー**:
1. Operator が EigenLayer に登録 · ETH ステーキング(自分自身または他人代理)を提供
2. AVS が EigenLayer に登録 · slashing 条件 + 期待 Operator 集合規模を公開
3. Operator が特定 AVS に opt-in · オンチェーンに commitment を記録
4. AVS 運用(Operator が検証タスクを実行 · 例えば DA データ可用性証明への署名)
5. Operator が AVS slashing 条件に違反すれば · AVS が slash を発動 · Operator ステーキングが差し引かれる

**Slashing タイプ**:
- **Objective slashing**:暗号学的に反証可能(二重署名、タイムアウト、誤ブロック署名)· AVS コントラクトが自動執行
- **Inter-subjective slashing**:主観違反(oracle 報価が市場から X% 以上乖離など)· EIGEN holder の投票が必要

**EigenPods メカニズム**:Operator の ETH は EigenPod コントラクト経由で staking rewards を受け取り、EigenLayer は EigenPod を通じて Operator の Ethereum L1 validator 動作を監視する —— これが L1 slashing と L2 AVS slashing を関連付ける鍵となるブリッジ。

**Strategies**:native ETH 以外にも、EigenLayer は LST restaking(stETH / rETH / cbETH 等)をサポート —— ステーキング可能な資本プールを大幅に拡大するが、同時に LST プロトコル(Lido / Rocket Pool / Coinbase)のセキュリティへの間接依存も増す([[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]] 参照)。

## Origin & evolution

AVS コンセプトは EigenLayer 2021 論文の中核抽象。2023-06 ローンチ時は native ETH restaking のみサポート、slashing なし(コミットメント期)。2024-10 EIGEN token ローンチで inter-subjective dispute resolution を導入。2025 に slashing が正式起動、EigenLayer は「コミットメントメカニズム」から「実際の経済セキュリティマーケット」に移行。

40+ AVS のローンチ進捗:EigenDA(データ可用性、modular L2 用)が最早 · Hyperlane(クロスチェーンメッセージ検証 EigenLayerISM)2024 · AltLayer / Espresso / Lagrange は 2024-2025 順次。

## Counterpoints

**Slashing 設計の二重困難**:
- 厳格(高 slash %)→ Operator が opt-in を躊躇 · AVS が検証集合を集められない
- 緩い(低 slash %)→ 攻撃コスト不足 · AVS セキュリティが形骸化

実際 1 年内に大半の AVS は保守的な slash 比率(1-5%)を選択し、これが「暗号経済セキュリティ」の実際の威嚇力を弱めた。

EIGEN inter-subjective 仲裁の操縦可能性は重要リスク —— AVS の争議 slash 金額が EIGEN 流通時価総額を大きく上回る場合、資本による投票操縦はほぼ不可避([[exchanges/global-dex-major-five-comparison|global DEX 主流 5 社対照]] における各社ガバナンス token の操縦コスト曲線と対照)。

## Open questions

- 実際の slash 事象における objective vs inter-subjective の比率は?
- EIGEN token 流通時価総額と単一 slash 上限のセキュリティ境界は?
- Operator のマルチ AVS における実際の平均参加度は?
- LST restaking における Lido 等の LST プロトコルリスク事象での連鎖影響は?([[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]] における暗号ネイティブ側の感染経路と対照)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/eigenlayer-overview|EigenLayer Overview]]
- [[systems/eigenlayer-l1-bootstrapping|EigenLayer L1 Bootstrapping]]
- [[systems/hyperlane-ism-modular-security|Hyperlane ISM]]
<!-- /wiki-links:managed -->

## Sources

- EigenLayer docs · Slashing spec(2025)
- Vitalik Buterin · "Don't overload Ethereum's consensus"(2024)
- EigenLayer docs — https://docs.eigenlayer.xyz/
