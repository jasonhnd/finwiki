---
source: fintech/fatf-travel-rule-cross-border-stack
source_hash: 3780ac564cc56fc4
lang: ja
status: machine
fidelity: ok
title: "FATF Travel Rule クロスボーダー四層スタック · 各国閾値の差異 + §501 連携"
translated_at: 2026-06-02T13:21:55.062Z
---
# FATF Travel Rule クロスボーダー四層スタック · 各国閾値の差異 + §501 連携

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下にあります。隣接する文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読んでください。

> [!info] 要約
> 各国 Travel Rule 実施閾値の差は巨大 (EU TFR $0 · 日本 ¥100,000 · 米国 $3,000) だが R.16 がグローバル下限。BSA Travel Rule + FATF R.16 + EU TFR + GENIUS §501 freeze の四層重ね = 現代の暗号資産コンプライアンス・スタック。「差別化された執行 + R.16 グローバル floor」は GENIUS / MiCA / EPI 協調の基盤 AML レイヤーである。

## 主要事実

- EU 閾値 EUR 0 (全件) · TFR 2023/1113 · 2024-12-30 施行 ^[extracted]
- 日本閾値 ¥100,000 (≈$670) · 改正資金決済法 · 2023-06 施行 ^[extracted]
- 米国閾値 $3,000 (引下案 $1,000) · BSA Travel Rule · 1996/2019 ^[extracted]
- シンガポール SGD 1,500 · PS Act · 2024 ^[extracted]
- 香港 HKD 8,000 · AMLO Sched 2 · 2023 ^[extracted]
- カナダ CAD 1,000 · FINTRAC · 2021 ^[extracted]
- EU が最も厳しい · 米国が最も緩い ^[extracted]
- VASP 5 分類:法定通貨両替 / 暗号間交換 / 送金 / カストディ / 発行参与 ^[extracted]

## 仕組み

**四層スタック の重ね**:
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
- シンガポール SGD 1,500 + DTSP 制度 2024-04 → グレーゾーン閉鎖

**DeFi のグレーゾーン**:FATF 2021-10 更新ガイダンスは、「十分な支配または影響」があれば VASP とみなすと指摘する。純粋なスマートコントラクト + ガバナンスなしの場合は該当しない。実運用では往々にして創業者 / DAO メンバーまで遡及される (Tornado Cash 事例)。日本 VASP のタイムラインは [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 規制タイムライン]]、グローバル横軸比較は [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリクス]] を参照。

## 起源と展開

1996 米国先行、2019 G20 Osaka で暗号拡張により R.16 をグローバル化、2023-2024 各国でローカライズ (日本 6 月 · EU 12 月)。2024-12-30 EU TFR 施行が分水嶺 · USDT の EU シェアは 28% から 3% に急落 ([[fintech/mica-overview|MiCA]] + TFR の二重打撃)。2026-Q3 FinCEN 米国整合計画 = グローバル floor がほぼ統一。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/fatf-travel-rule-overview|FATF Travel Rule 概観]]
- [[fintech/aml-cft-fatf-grey-list-cross-border-implications|FATF Grey List クロスボーダー含意]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/chain-level-ofac-freeze-precedent|オンチェーン OFAC freeze 先例]]
<!-- /wiki-links:managed -->

## 出典
