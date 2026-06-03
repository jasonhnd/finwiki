---
source: fintech/issuer-distributor-incentive-realignment-50-50-model
source_hash: 640c72de13d4d869
lang: ja
status: machine
fidelity: ok
title: "発行体 vs 分配者 50/50 モデル · Coinbase ↔ Circle 利息分配メカニズム"
translated_at: 2026-06-02T13:21:55.071Z
---

# 発行体 vs 分配者 50/50 モデル · Coinbase ↔ Circle 利息分配メカニズム

## ウィキ上の位置づけ

この項目は[[fintech/INDEX|fintech index]]の配下に位置づけられる。隣接する文脈では[[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]と、より広いシステム境界では[[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]と併読する。

> [!info] 要約
> Coinbase と Circle の USDC 利息 50/50 分配モデル(2018 Centre 共同発行協定 → 2023 Circle 独立後も継続)は、ステーブルコイン業界で**最大の発行体・分配者間の利害結合構造**である。Q1 2025 Coinbase ステーブルコイン収益 $305M ≈ 同社総収益の 12-15% · ただし GENIUS Act §501 時代において交渉力の構造は根本的に変化しており、50/50 は必然的に再交渉ウィンドウに入る。

## 主要事実

- USDC 流通量 $40-45B(2024-2025) ^[extracted]
- Circle 年間利息収入 $1.7-1.8B(国債 4.5% yield) ^[extracted]
- うち Coinbase への分配 ~$905M(2024 通期) ^[extracted]
- Coinbase ステーブルコイン収益 Q1 2025 = $305M(年率換算 $1.2B) ^[extracted]
- 50/50 分配の法的根拠 = 2018 Centre Consortium 共同発行協定 · 2023 Centre 解散後も継続 ^[extracted]

## 仕組み / 動作原理

**50/50 の歴史的合理性**:Coinbase は初期において USDC の主要な分配チャネル(ブランド + ユーザー基盤 + 取引所流動性)であり、Circle は発行 + 準備金管理を提供。Centre Consortium 2018 共同発行モデルが両者を深く結合させた。2023 年 Centre 解散後、Circle は単独で発行権を回収したが、50/50 収益分配条項は継続している。

**収益フロー**:USDC 準備金 $40B+ が短期国債を保有 → 年率 4.5% yield = $1.8B → 発行コスト控除 → 純額 $1.7-1.8B → Coinbase 50% ($905M) + Circle 50% ($895M)。

**§501 前 vs §501 後の交渉力変化**:

| 軸 | §501 前(2024) | §501 後(2025.07+) |
|---|---|---|
| 発行体のコア・コスト | 規制不確実性 + 準備金 + 上場チャネル | 準備金 + Arc 自社 L1 |
| 分配者のコア・バリュー | ユーザー基盤 + 流動性 + コンプラ裏付け | ユーザー基盤 + 流動性(コンプラは標準化済み) |
| 発行体の fallback | 大手取引所と提携必須 | 自社 L1 を構築可能([[fintech/issuer-distributor-incentive-realignment-arc-strategy|Arc · 自社販売自循環]]) |
| 分配者の fallback | USDC のみ(代替なし) | 自社ステーブルコインを推進可能(Base USDB-like) |

**結果**:50/50 モデルにおける「分配者プレミアム」は [[fintech/genius-act-501-denylist-mandate|§501]] 以後、必然的に再交渉される。

## 起源と展開

2018 = Centre Consortium 設立 · Coinbase + Circle が USDC を共同発行 · 50/50 が初期条項。2020-2023 = DeFi サマー + 上場ブーム · USDC が DeFi のデフォルト・ステーブルコインに · 50/50 は高度に対称(分配者の価値は実在)。2023.08 = Centre 解散 · Circle が単独発行へ · ただし 50/50 条項は継続(目論見書で開示)。2025.07 = GENIUS Act §501 発効 · コンプラは標準装備化 · 分配者プレミアムは希釈される。2025.09 = Arc 公表 = Circle の再交渉レバーへ。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/issuer-distributor-incentive-realignment-arc-strategy|Arc 戦略 · 50% の回収]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン収益分配エコノミクス]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|ステーブルコイン公開チェーン・トークン戦略のトリレンマ]]
- [[fintech/circular-reserve-asset-flywheel-overview|準備資産相互ロックのフライホイール · 概要]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 Denylist]]
<!-- /wiki-links:managed -->

## 出典

- Circle 目論見書(2024) · Coinbase Q1 2025 決算 · Centre Consortium 2018 共同発行協定
