---
title: FATF Travel Rule クロスボーダー四層 stack · 各国閾値の差異 + §501 連携
aliases: [fatf-travel-rule-cross-border, EU TFR Japan FinCEN Travel Rule comparison]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [fintech, law, regulation, fatf, travel-rule, eu, jp, us, hk, sg]
sources:
  - https://www.fatf-gafi.org/en/topics/virtual-assets.html
  - https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1113
  - https://www.fincen.gov/resources/statutes-and-regulations
  - https://www.fsa.go.jp/en/news/index.html
  - https://www.hkma.gov.hk/eng/key-functions/banking/anti-money-laundering-and-counter-financing-of-terrorism/
status: candidate
---

# FATF Travel Rule クロスボーダー四層 stack · 各国閾値の差異 + §501 連携

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 各国 Travel Rule 実施閾値の差は巨大 (EU TFR $0 · 日本 ¥100,000 · 米国 $3,000) だが R.16 がグローバル floor。BSA Travel Rule + FATF R.16 + EU TFR + GENIUS §501 freeze の四層重ね = 現代の暗号資産コンプライアンス stack。「差別化された執行 + R.16 グローバル floor」は GENIUS / MiCA / EPI 協調の基盤 AML レイヤーである。

## Key facts

- EU 閾値 EUR 0 (全件) · TFR 2023/1113 · 2024-12-30 施行 ^[extracted]
- 日本閾値 ¥100,000 (≈$670) · 改正資金決済法 · 2023-06 施行 ^[extracted]
- 米国閾値 $3,000 (引下案 $1,000) · BSA Travel Rule · 1996/2019 ^[extracted]
- シンガポール SGD 1,500 · PS Act · 2024 ^[extracted]
- 香港 HKD 8,000 · AMLO Sched 2 · 2023 ^[extracted]
- カナダ CAD 1,000 · FINTRAC · 2021 ^[extracted]
- EU が最も厳しい · 米国が最も緩い ^[extracted]
- VASP 5 分類:法定通貨両替 / 暗号間交換 / 送金 / カストディ / 発行参与 ^[extracted]

## Mechanism / How it works

**四層 stack の重ね**:
```
BSA Travel Rule ($3,000)      ← 1996 オリジナル
FATF R.16 (USD 1,000)         ← 2019 暗号拡張 (グローバル floor)
EU TFR (EUR 0)                ← 2024-12-30 最厳格
GENIUS §501 freeze (30 分)    ← OFAC SDN 自動執行
```

四層重ね = 現代の暗号資産コンプライアンス stack。**閾値差別化の戦略的含意**:
- EU 最厳格 → MiCA + DORA + TFR 0 = 完全閉ループ · USDT 等の非コンプライアンスプレイヤーが撤退
- 米国 $3,000 → FATF $1,000 と整合せず · 2026-Q3 調整
- 日本 ¥100,000 → リテールユーザー体験とのバランス
- シンガポール SGD 1,500 + DTSP Regime 2024-04 → グレーゾーン閉鎖

**DeFi のグレーゾーン**:FATF 2021-10 Updated Guidance は「sufficient degree of control or influence」があれば VASP とみなすと指摘。純粋なスマートコントラクト + ガバナンスなし = 該当しない。実運用では往々にして founders / DAO メンバーまで遡及される (Tornado Cash 事例)。日本 VASP のタイムラインは [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 規制タイムライン]]、グローバル横軸比較は [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリクス]] を参照。

## Origin & evolution

1996 米国先行、2019 G20 Osaka で暗号拡張により R.16 をグローバル化、2023-2024 各国でローカライズ (日本 6 月 · EU 12 月)。2024-12-30 EU TFR 施行が分水嶺 · USDT の EU シェアは 28% から 3% に急落 ([[fintech/mica-overview|MiCA]] + TFR の二重打撃)。2026-Q3 FinCEN 米国整合計画 = グローバル floor がほぼ統一。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/fatf-travel-rule-overview|FATF Travel Rule 概観]]
- [[fintech/aml-cft-fatf-grey-list-cross-border-implications|FATF Grey List クロスボーダー含意]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/chain-level-ofac-freeze-precedent|オンチェーン OFAC freeze 先例]]
<!-- /wiki-links:managed -->

## Sources
