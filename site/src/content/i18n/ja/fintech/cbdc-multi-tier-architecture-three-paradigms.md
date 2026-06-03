---
source: fintech/cbdc-multi-tier-architecture-three-paradigms
source_hash: 260dd492e8809cb7
lang: ja
status: machine
fidelity: ok
title: "CBDC 3 大現役パラダイム"
translated_at: 2026-06-02T13:21:55.039Z
---

# CBDC 3 大現役パラダイム

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] に位置づけられる。隣接する文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] を、より広いシステム境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] を参照。

> [!info] 要約
> 3 つの CBDC プロジェクトはそれぞれ 3 種類のアーキテクチャ・パラダイムを代表する: 中国 e-CNY = 二層アーキテクチャの典型（中央銀行 → 6 商業銀行 → ユーザー）、ブラジル DREX = トークンベース多層（BCB → 商業銀行トークン化預金 → ユーザー · Hyperledger Besu）、デジタル・ユーロ = ハイブリッド・アーキテクチャ（ECB → PSP → ユーザー · €3000-4000 保有上限）。3 者は中央銀行が金融仲介保護とプログラマビリティ導入のあいだでどうトレードオフするかを示している。

## 主要事実

- e-CNY 2014 研究開始、2020.04 試験運用;2025 累計取引額 ¥7 兆元超 ^[extracted]
- e-CNY の運営機関: 工 / 農 / 中 / 建 / 交 + 6 商業銀行 ^[extracted]
- e-CNY のクロスボーダーは mBridge で香港 / タイ / UAE と相互接続 ^[extracted]
- DREX の技術スタック: Hyperledger Besu（EVM 互換） + スマートコントラクト・プログラマビリティ ^[extracted]
- DREX 2024-2025 試験運用、14 機関連合が参加 ^[extracted]
- デジタル・ユーロは 2025 年に立法スタート、保有上限 €3000-4000 ^[extracted]
- デジタル・ユーロのオフライン取引はキャッシュ型プライバシー、オンラインはアカウント型 ^[extracted]

## 仕組み

**中国 e-CNY · 二層アーキテクチャの典型**:
- 中央銀行（PBoC） → 運営機関（6 商業銀行） → ユーザー・ウォレット
- アカウント + 価値トークン混合、コントロール可能な匿名性（小額は匿名、大額は追跡可能）
- 商業銀行仲介を完全保持、4 大行体系を揺るがさない
- クロスボーダーは [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] 経由で香港ドル / タイバーツ / ディルハムと相互接続

**ブラジル DREX · トークンベース多層**:
- BCB（ブラジル中央銀行） → 商業銀行（トークン化預金を発行） → ユーザー
- Hyperledger Besu（EVM 互換） + スマートコントラクト
- DREX は直接的なリテール CBDC ではなく、ホールセール CBDC + トークン化預金の二層
- 主要な判断: **トークン化預金を通じて商業銀行をイノベーションの担い手にする**

**デジタル・ユーロ · ハイブリッド・アーキテクチャ**:
- ECB → 規制下のペイメントサービス提供者（PSP） → ユーザー
- 技術は最終確定しておらず、2025 年に立法スタート
- オフライン取引はキャッシュ型プライバシー、オンラインはアカウント型
- 保有上限 €3000-4000 → **商業銀行預金基盤を明確に保護**、ディスインターメディエーションを回避

## 起源と展開

2014 中国 PBoC が e-CNY を開始 → 世界最古の CBDC 研究プロジェクト。2020.04 e-CNY 最初の 4 都市試験運用、2022.04 で 23 都市に拡大。2023 ブラジル DREX（旧 Real Digital）開始 → Hyperledger Besu の選択は「チェーン・ネイティブ + EVM エコシステム」の観点から重要な決定。2023 ECB がデジタル・ユーロの調査フェーズを完了、2024 準備フェーズ、2025.06 立法スタート → 保有上限は設計協議における政治的焦点。3 つのプロジェクトはそれぞれ中国（国家主導）、新興市場（銀行エンパワーメント）、ユーロ圏（中介を慎重に保護）の 3 つの政治的経路を体現する。日本側 DC-JPY は [[fintech/jp-stablecoin-dcjpy|DC-JPY 概要]] 参照。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ概要]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|アーキテクチャ選択 4 大トレードオフ]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge 戦略比較]]
<!-- /wiki-links:managed -->

## 出典
