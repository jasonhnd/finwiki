---
title: Circle Arc 戦略 · 発行体が 50% 分配を取り戻す §501 エンドゲーム
aliases: [issuer distributor incentive realignment arc strategy, Circle Arc rebalance, USDC self-L1 economics]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [fintech, circle, arc, coinbase, base, stablecoin-l1, vertical-integration]
sources:
  - https://www.circle.com/en/arc
  - https://www.circle.com/en/usdc
  - https://www.base.org/
  - https://investor.coinbase.com/news-events/press-releases/default.aspx
  - https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001876042&type=10-K
status: candidate
---

# Circle Arc 戦略 · 発行体が 50% 分配を取り戻す §501 エンドゲーム


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Circle が 2025.09 に公表した Arc(自社運営 L1)の真の戦略目標 = **Arc 上の USDC 利息は Coinbase に 50% を分配する必要がない** —— 技術問題ではなく経済問題である。USDC が Arc 上で流通量を $0 から $5B に増やせば、Circle が追加保有できる利息 = $5B × 4.5% × 50% = **$112.5M/年**の純増収(USDC を新規発行する必要なし)。これはステーブルコイン発行体・分配者間の均衡再構築の中核サンプルである。

## Key facts

- Arc 2025.09 公表 · 2026.Q1-Q2 テストネット · 2026.Q4 メインネット予定 ^[extracted]
- Circle 利息の Coinbase 50% 分配 = $905M/年(2024)が回収目標の潜在規模 ^[extracted]
- Arc 上 $5B USDC = Circle 増収 $112.5M/年(純) ^[inferred]
- Arc は Circle 既存の CCTP と互換 = Circle が自ら分配チャネルをコントロール ^[extracted]
- Tempo / Codex / Plasma が既に「USDC 最適化 L1」の技術課題を解決済み = Arc は技術的差別化ではない ^[inferred]

## Mechanism / How it works

**表向き vs 実際**:

| 表向きの語り | 実際の戦略 |
|---|---|
| 「USDC 最適化」L1 を提供 | 技術問題ではない(Tempo / Codex 解決済) |
| オンチェーン USDC 体験の向上 | 経済問題 —— **Arc 上 USDC 利息を Coinbase に 50% 分配しない** |
| Circle 既存 CCTP との互換性 | Circle が自ら分配チャネルをコントロール |

**三者均衡の可能な経路**:

| 経路 | Coinbase 損益 | Circle 損益 | エンドゲーム |
|---|---|---|---|
| A. 現状維持(50/50 不変) | $305M/Q 維持 | Arc 単独で USDC on Base を侵食 | 5 年以内に Arc USDC > Base USDC · 分配が自動再均衡 |
| B. 40/60 に交渉 | ~$60M/Q 減 | ~$60M/Q 増 | 双方譲歩 · 連合維持 |
| C. Coinbase が BASE トークン発行 | 短期 USDC 収入の 50% を失う | Arc が USDC 成長を独占 | Coinbase は USDC 分配から撤退 |
| D. Circle が能動的に Arc 比重低減 | 50% 維持 | Arc 交渉レバーを失う | 不可能(Circle は上場で株主責任) |

**最有力 = 経路 B(40/60 への交渉)または A → B の漸進的移行**。

**Coinbase 側の対応選択**:BASE トークンを発行しない = USDC 主要分配を維持しつつ Arc に持続的侵食される。BASE トークンを発行 = 過激な再構築 + 自社ステーブルコイン戦線を起動。第三の経路 = Circle と分配比率を再交渉し、その対価として Coinbase がトークンを発行しない。

## Origin & evolution

2018-2024 = Coinbase + Circle 連合が安定 · 50/50 維持。2024.Q4 = Stripe / Visa / SC が参入 · 複数のステーブルコイン L1 プロジェクトが浮上([[fintech/protocol-hedge-strategy-stripe-pattern|Tempo]] / Codex / Plasma) · Circle の outside option 集合を変化させる。2025.07 = GENIUS Act §501 でコンプラ標準化 · Circle はもはや Coinbase の「コンプラ裏付け」を必要としない。2025.09 = Arc 公表 = Circle は「垂直統合」のレバーを使い Coinbase に再交渉を迫る。2026 Arc メインネット稼働 = 交渉が実戦段階に入り、[[systems/cctp-v2-overview|CCTP v2]] とのブリッジで Base 単一チェーンのロックインを希釈する必要がある。

**歴史的類比**:Visa / Mastercard と発行銀行間の interchange 再交渉 · Apple ↔ Google 検索デフォルト契約(2024 反トラスト) · Microsoft ↔ IBM OS 契約(1990 年代)。**コア法則**:総価値の 50% を分配側が占める協定は、規制 / 技術変革のウィンドウで必ず再交渉される。

## Counterpoints

「Arc は失敗する」と主張する立場:Circle は L1 運営経験がない · validator の招集が難しい · 既存の Coinbase / Base ユーザー基盤と切断される · 5 年以内に Arc 上の USDC は $1-2B にしか達せず、50/50 をリセットするには不十分。規制(SEC / OCC)が垂直統合に介入する可能性(Circle が同時に発行体 + L1 運営者 = 利益相反)。Coinbase は逆に BASE トークンの起動を加速させる可能性 = 経路 C で Circle に反撃。一方 [[fintech/cbbtc-institutional-btc-wrapper|cbBTC 閉ループ]] は既に Base 自循環キャッシュフローのプロトタイプを提供している。

## Open questions

Arc メインネット稼働後 12 か月の Arc 上 USDC ボリュームは?Coinbase は逆に BASE トークンを発行するのか(意思決定窓 ≤ 18 か月)?Circle ↔ Coinbase は公開仲裁を開始するのか?規制(OCC / SEC)は「発行体兼自社 L1」の二重身分に介入するのか?Tempo / Codex は機に乗じて USDC distribution シェアを奪うのか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/issuer-distributor-incentive-realignment-50-50-model|発行体・分配者 50/50 モデル]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|ステーブルコイン公開チェーン・トークン戦略のトリレンマ]]
- [[fintech/circular-reserve-asset-flywheel-overview|準備資産相互ロックのフライホイール · 概要]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号文化の分離]]
- [[fintech/portfolio-winner-structure-arm-analog|ポートフォリオ勝者構造 · ARM アナロジー]]
<!-- /wiki-links:managed -->

## Sources

- Circle Arc 発表(2025.09) · Coinbase Q1 2025 決算
