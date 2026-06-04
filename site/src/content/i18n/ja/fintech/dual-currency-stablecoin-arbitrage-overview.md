---
source: fintech/dual-currency-stablecoin-arbitrage-overview
source_hash: 314411f50642d628
lang: ja
status: machine
fidelity: ok
title: "二通貨ステーブルコイン・アービトラージ · §501 時代における唯一の合法 FX オンチェーン化パス"
translated_at: 2026-06-02T13:21:55.062Z
---
# 二通貨ステーブルコイン・アービトラージ · §501 時代における唯一の合法 FX オンチェーン化パス

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下にあります。隣接する文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読んでください。

> [!info] 要約
> GENIUS Act §501 は ステーブルコインの発行 / 保有 / 送金のコンプライアンス境界を限定し · **「二通貨 / 多通貨 stablecoin の相互交換」のみが明確に合法なオンチェーン FX パス**となった。USDC ↔ EURC ↔ JPYC 三角アービトラージ構造はそのサンプル —— 相互交換コストは 0.01% まで圧縮可能(伝統的クロスボーダー FX 1-3% の 1/100)であり、$33T のグローバル決済軌道上で 1% を捕捉しても $3.3B/年の収益機会となる。

## 主要事実

- USDC 流通量 $40-45B · EURC $200-300M · JPYC $50M+(2025.Q4) ^[extracted]
- 三角アービトラージの純コスト ~10-20 bp(0.01-0.02%)· 伝統的 FX 1-3% 総コスト ^[extracted]
- グローバルクロスボーダー決済年間ボリューム $33T(BIS 2024) · 1% 捕捉 = $3.3B/年の機会 ^[extracted]
- 2026.05 三角アービトラージが Curve / Uniswap V4 hooks プールで実稼働 ^[extracted]

## 仕組み

**アービトラージ経路**:USDC (Circle USD 1:1) ↔ EURC (Circle EUR 1:1) ↔ [[payment-firms/jpyc|JPYC]] (JPYC Inc. JPY 1:1) ↔ USDC ポジション解消。

| ステップ | 操作 | コスト |
|---|---|---|
| 1 | USDC → EURC 交換（Circle Mint API） | ~0 bp + 鋳造 / 償還手数料 |
| 2 | EURC → JPYC(オンチェーン DEX · Curve / Uniswap V4 hooks) | 5-15 bp スリッページ |
| 3 | JPYC → USDC ポジション解消 | ~0 bp + mint/burn fee |
| 純 | クロスカレンシー三角アービトラージ | ~10-20 bp |

対比:SWIFT + correspondent banking 1-3% all-in · T+1/T+2;Wise / Remitly 0.5-1% · 数時間;二通貨 stablecoin 0.01-0.02% · 秒単位 ファイナリティ。**100× コスト削減 + 数百倍のスピード**であり、[[fintech/cross-border-sc-via-swift-api|ステーブルコイン × SWIFT API クロスボーダー]] とは反対方向を進む(後者は SC を SWIFT に埋め込む、前者は迂回)。

## 起源と展開

2018-2023 = Circle USDC 独占 · EURC は 2022 にローンチも流動性低。2024 [[fintech/mica-overview|MiCA]] 第 IV 編(EMT)がユーロ stablecoin の複数発行体構造を起動。2024-2025 日本資金決済法の新フレームの下で JPYC が初の円 stablecoin に。2025.07 [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] 施行後 = 法的余地が明確化:「二通貨 swap ≠ FX 業務」 · これは 2 つの独立した 1:1 token の資産配分である。2026 三角アービトラージが理論から DEX 実プロダクトへ。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/dual-currency-stablecoin-arbitrage-legal-hack|二通貨アービトラージ · §501 リーガル hack]]
- [[fintech/usd-stablecoin-interchange|USD stablecoin interchange モデル]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 Denylist]]
- [[fintech/stablecoin-crossborder-b2b-growth|ステーブルコイン・クロスボーダー B2B 成長]]
<!-- /wiki-links:managed -->

## 出典

- BIS 2024 クロスボーダー決済年間ボリュームレポート · MiCA Title IV · 日本 PSA · GENIUS Act §501(2025.07)
