---
title: 二通貨ステーブルコイン・アービトラージ · §501 時代における唯一の合法 FX オンチェーン化パス
aliases: [dual currency stablecoin arbitrage overview, USDC EURC JPYC FX, on-chain fx triangular]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [fintech, fx, stablecoin, usdc, eurc, jpyc, cross-border, interchange]
sources:
  - https://www.circle.com/en/usdc
  - https://www.circle.com/en/eurc
  - https://jpyc.jp/
  - https://www.congress.gov/bill/119th-congress/senate-bill/394
  - https://www.bis.org/cpmi/publ/d220.htm
status: candidate
---

# 二通貨ステーブルコイン・アービトラージ · §501 時代における唯一の合法 FX オンチェーン化パス


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> GENIUS Act §501 は stablecoin の発行 / 保有 / 送金のコンプライアンス境界を限定し · **「二通貨 / 多通貨 stablecoin の相互交換」のみが明確に合法なオンチェーン FX パス**となった。USDC ↔ EURC ↔ JPYC 三角アービトラージ構造はそのサンプル —— interchange コストは 0.01% まで圧縮可能(伝統的クロスボーダー FX 1-3% の 1/100)であり、$33T のグローバル決済軌道上で 1% を捕捉しても $3.3B/年の収益機会となる。

## Key facts

- USDC 流通量 $40-45B · EURC $200-300M · JPYC $50M+(2025.Q4) ^[extracted]
- 三角アービトラージの純コスト ~10-20 bp(0.01-0.02%)· 伝統的 FX 1-3% all-in ^[extracted]
- グローバルクロスボーダー決済年間ボリューム $33T(BIS 2024) · 1% 捕捉 = $3.3B/年の機会 ^[extracted]
- 2026.05 三角アービトラージが Curve / Uniswap V4 hooks プールで実稼働 ^[extracted]
- Visa / Mastercard が 2024-2025 内部で二通貨 stablecoin settlement を検討(プロダクト未公表) ^[inferred]

## Mechanism / How it works

**アービトラージ経路**:USDC (Circle USD 1:1) ↔ EURC (Circle EUR 1:1) ↔ [[JapanFG/jpyc|JPYC]] (JPYC Inc. JPY 1:1) ↔ USDC ポジション解消。

| ステップ | 操作 | コスト |
|---|---|---|
| 1 | USDC → EURC swap(Circle Mint API) | ~0 bp + mint/burn fee |
| 2 | EURC → JPYC(オンチェーン DEX · Curve / Uniswap V4 hooks) | 5-15 bp slippage |
| 3 | JPYC → USDC ポジション解消 | ~0 bp + mint/burn fee |
| 純 | クロスカレンシー三角アービトラージ | ~10-20 bp |

対比:SWIFT + correspondent banking 1-3% all-in · T+1/T+2;Wise / Remitly 0.5-1% · 数時間;二通貨 stablecoin 0.01-0.02% · 秒単位 finality。**100× コスト削減 + 数百倍のスピード**であり、[[fintech/cross-border-sc-via-swift-api|ステーブルコイン × SWIFT API クロスボーダー]] とは反対方向を進む(後者は SC を SWIFT に埋め込む、前者は迂回)。

## Origin & evolution

2018-2023 = Circle USDC 独占 · EURC は 2022 にローンチも流動性低。2024 [[fintech/mica-overview|MiCA]] Title IV(EMT)がユーロ stablecoin の複数発行体構造を起動。2024-2025 日本資金決済法の新フレームの下で JPYC が初の円 stablecoin に。2025.07 [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] 施行後 = 法的余地が明確化:「二通貨 swap ≠ FX 業務」 · これは 2 つの独立した 1:1 token の資産配分である。2026 三角アービトラージが理論から DEX 実プロダクトへ。

## Counterpoints

EURC / JPYC の二次流動性は USDC より遥かに小さい · 大口 swap のスリッページは 0.01% より遥かに高い。3 つの stablecoin の準備金は全て国債に集中している → システミック同期リスク。Bridge リスク(JPYC のクロスチェーンは主に Wormhole 経由 · 過去に $325M の脆弱性履歴)。最重要 —— **どの国でも「二通貨 swap」が「FX 業務」として再定義された瞬間** · この hack は崩壊する。SEC / OCC / FCA / FSA いずれかの声明で覆る可能性がある。

## Open questions

実際のアービトラージ容量(スリッページなしの最大単発取引規模)は?機関 b2b の実接続比率は?Visa / Mastercard の二通貨 settlement layer プロダクトのリリース時期は?中国 / インド / ブラジルは複製可能か(自国通貨 stablecoin 規制の空白)?「FX 業務再定義」政治リスクをどうヘッジするか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/dual-currency-stablecoin-arbitrage-legal-hack|二通貨アービトラージ · §501 リーガル hack]]
- [[fintech/usd-stablecoin-interchange|USD stablecoin interchange モデル]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 Denylist]]
- [[fintech/stablecoin-crossborder-b2b-growth|ステーブルコイン・クロスボーダー B2B 成長]]
<!-- /wiki-links:managed -->

## Sources

- BIS 2024 クロスボーダー決済年間ボリュームレポート · MiCA Title IV · 日本 PSA · GENIUS Act §501(2025.07)
