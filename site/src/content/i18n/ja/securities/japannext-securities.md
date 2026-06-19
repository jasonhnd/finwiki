---
source: securities/japannext-securities
source_hash: 0fc571c7ee5d8e5f
lang: ja
status: machine
fidelity: ok
title: "ジャパンネクスト証券（Japannext）"
translated_at: 2026-06-19T12:43:19.930Z
---

# ジャパンネクスト証券（Japannext）

## Wiki ルート

本項目は [[securities/INDEX|securities index]] の下に位置する。隣接する文脈については [[securities/financial-instruments-business-operators-japan-index|financial instruments business operators japan index]] と、より広範なシステム境界については [[financial-licenses/INDEX|JapanFG index]] と併せて読むこと。

## TL;DR

ジャパンネクスト証券は、日本株向けの私設取引システムである Japannext PTS を運営している。その公式サイトは、同社が登録金融商品取引業者かつ PTS 運営者であり、日本証券業協会の会員資格を持つと述べている。

FinWiki にとって、Japannext は [[securities/tokyo-stock-exchange|TSE]] の現物株式執行に対する主要な私設取引所のカウンターポイントである。

## システムマップ

| 層 | 読み解き |
|---|---|
| 法人名 | ジャパンネクスト証券株式会社 |
| 登録 | 関東財務局 FIBO 第 45 号 |
| 協会 | 日本証券業協会 |
| 取引所 | Japannext PTS |
| 起源 | 2006 に SBI ジャパンネクストとして設立；PTS ライセンスは 2007に認可。 |

## 取引所マップ

| 取引所 / 機能 | 読み解き |
|---|---|
| デイタイム PTS | 上場株式の代替執行取引所。 |
| ナイトタイムセッション | 通常の取引所セッション外の取引時間を提供する。 |
| 最良執行 | SOR およびブローカーの注文ルーティング分析において重要。 |
| HFT / 機関フロー | 私設取引所の設計が、異なる流動性とレイテンシのインセンティブを生み出す。 |

## 戦略的な読み解き

Japannext が重要なのは、日本株式執行が単一取引所の世界なのか、それともルーティングされた市場なのかを試すからである。注視すべき点：

- リテールブローカーの SOR 採用（例：[[securities-firms/rakuten-securities|Rakuten Securities]] / [[securities-firms/sbi-securities|SBI 証券]] へのルーティング）；
- 最良執行ポリシーの改定（[[securities/financial-instruments-business-operators-japan-index|FIBO index]] が登録業者を追跡している）；
- スプレッド / 呼値の差；
- ナイトタイムの流動性；
- [[megabanks/sbi-hd|SBI HD]] / Cboe 関連の市場構造との所有関係および戦略的整合（ピア取引所は [[securities/osaka-digital-exchange|ODX]] および親会社 [[securities/tokyo-stock-exchange|TSE]]）。

## 関連

- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-digital-exchange]]
- [[megabanks/sbi-hd]]
- [[securities-firms/rakuten-securities]]
- [[financial-regulators/japan-securities-finance]]
- [[securities/nisa-2024-flow]]

## ソース

- Japannext：About Us。
- FSA：金融商品取引業者一覧。
