---
title: 北國 FHD (Hokkoku FHD)
aliases: ["Hokkoku FHD", "Hokkoku Financial Holdings", "北國フィナンシャルホールディングス", "株式会社北國フィナンシャルホールディングス"]
domain: regional-banks
created: 2026-05-19
last_updated: 2026-05-26
last_tended: 2026-06-24
review_by: 2026-08-08
confidence: likely
tags: [JapanFG, regional-bank, digital-leader, historical-bridge]
status: active
sources:
  - "Wikipedia: 北國フィナンシャルホールディングス (公開情報)"
  - "Wikipedia: 北國銀行 (公開情報)"
  - "北國 FHD 公式 IR 公開資料"
  - "https://www.ccig.co.jp/company/about/"
  - "https://www.fsa.go.jp/menkyo/menkyoj/ginkoumochikabu.pdf"
---

# 北國 FHD (Hokkoku FHD)

## Wiki route

This entry sits under [[regional-banks/INDEX|regional-banks INDEX]]. Read it against [[regional-banks/fukuoka-fg|ふくおか FG (FFG)]] for peer / contrast context and [[banking/INDEX|banking index]] for the broader system / regulatory boundary.

Current-name route: [[financial-regulators/cci-group|CCIグループ]]. This page remains as the historical / old-name Hokkoku FHD bridge for older research notes and links.

## Overview

石川県地盤の地方銀行持株会社（東証 PRIME 7381）。2021-10-01 北國銀行の単独株式移転で発足し、2025-10-01 に [[financial-regulators/cci-group|株式会社CCIグループ]] へ商号変更した。資産規模は中堅地銀クラスだが、**地銀業界で別格の「デジタル先進地銀」**として知られる。2008 年に地銀で初めて Microsoft Azure を採用、2010 年に勘定系をオープン勘定系（Windows サーバ + .NET ベース）へ移行、2017 年に営業店窓口端末を Surface に刷新するなど、**業界の常識を 10 年以上先取りした IT 路線**を貫いてきた。2023 年には ICT コンサル子会社「デジタルバリュー」と BaaS プラットフォーム「Tonari」を立ち上げ、**「地銀発デジタルプラットフォーマー」へと業態転換**を進める。[[regional-banks/fukuoka-fg]]（みんなの銀行）と並ぶ地銀 DX リーダーの一角。

## 1. 会社概要

**正式名**：株式会社北國フィナンシャルホールディングス
**英名**：Hokkoku Financial Holdings, Inc.
**証券コード**：東証 PRIME 7381
**設立**：2021-10-01（北國銀行 単独株式移転による持株会社化）
**本社**：石川県金沢市広岡 2-12-6（北國銀行本店ビル）

### 主要子会社・持分

```
北國 FHD（持株会社・上場 7381）
  ├── 北國銀行（100%）── 石川県シェア No.1 地銀・コア事業
  │     └── 石川県内 + 富山・福井・東京・大阪など隣接展開
  ├── デジタルバリュー（100%, 2023-04 設立）── ICT コンサル子会社
  │     └── 法人向け DX 支援・自治体 DX
  ├── 北國マネジメント（100%）── 経営コンサル・地域企業支援
  ├── 北國クレジット（100%）── クレジットカード
  └── 北國 e ペイメント（100%）── 決済関連
```

「Tonari」は子会社というよりも、北國銀行 / デジタルバリューが他地銀・地域金融機関向けに提供する **BaaS（Banking as a Service）プラットフォーム** ブランド。

## 2. 合併・沿革

- **1943**：北國銀行 設立（加州銀行 + 加能合同銀行 + 能登銀行 等の戦時統合）
- **2008**：地銀として初めて Microsoft Azure を採用、業界に衝撃
- **2010**：勘定系を **オープン勘定系**（Windows + .NET ベース）へ移行 — 地銀業界で前例なく、話題に
- **2017**：営業店窓口端末を **Surface タブレット** に刷新、紙ベース業務の根本見直し
- **2021-10-01**：単独株式移転で 北國 FHD 発足、北國銀行は 100% 子会社化
- **2023-04**：ICT コンサル子会社 **デジタルバリュー** 設立、同時に BaaS プラットフォーム **「Tonari」** 提供開始
- **2024-01-01**：能登半島地震発生（震源地が石川県、被災地金融機能維持が経営課題に）
- **2024**：新中期経営計画（地域 DX プラットフォーマー志向）

## 3. 事業セグメント・マップ

| セグメント | 主要事業者 | 特徴 |
|---|---|---|
| 県内 retail | 北國銀行 | 石川県内シェア No.1（預金・貸出とも）、地盤圧倒 |
| 県内法人 | 北國銀行 | 北陸地場企業 main bank、中堅・中小に厚い |
| 隣接県展開 | 北國銀行 | 富山・福井・東京・大阪に支店、北陸ベース |
| ICT コンサル | デジタルバリュー | 地域企業 / 自治体向け DX 支援（自社知見の外販） |
| BaaS | Tonari | 他地銀向け勘定系 / API / 業務システム提供 |
| クレカ・決済 | 北國クレジット・北國 e ペイメント | 地域決済 |
| Microsoft 提携 | 全社横断 | Azure / Surface / Microsoft 365 を全業務基盤に |

### 「地銀発デジタルプラットフォーマー」志向

北國 FHD の戦略は、地銀業界で**唯一無二**と言ってよい。一般的な地銀が「ベンダー任せの共同勘定系（NTT データ・日本ユニシス・日立等）」に乗るのに対し、北國は **2008 年以降 Microsoft Azure を内製基盤に据え、勘定系自体をオープン化** した。この蓄積を商品化したのが 2023 年の **Tonari**（BaaS）であり、自社が利用者である DX 基盤を他地銀に外販する **「IT 会社化」戦略** へと踏み込んでいる。

### Microsoft 長期提携

2008 年以来の Microsoft / Azure 提携は地銀業界最長クラス。Surface タブレット導入（2017）、Microsoft 365 全社展開なども、ベンダーロックインを敢えて飲み込んで業務改革速度を優先する選択。

### 競合・参照対象

地銀 DX リーダーとしての参照対象は [[regional-banks/fukuoka-fg]]（みんなの銀行 = フルクラウドネイティブ・デジタルバンク）が筆頭。ただし両者の戦略は対照的で、ふくおか FG は **「新ブランドで全国デジタル展開」**、北國 FHD は **「既存地銀の業務基盤そのものをデジタル化し、他地銀に売る」**。狙う収益源も異なる。

### 能登半島地震（2024-01-01）

震源地が石川県・能登地方であり、被災地金融機能の維持は経営課題かつ社会的責務。デジタル化が進んでいたことが BCP（事業継続）で機能したと評価されている一方、被災地復興融資・店舗網再編の負荷は中長期で財務に影響しうる。

## 5. 規制・政策

- **主管**：金融庁（FSA）、北陸財務局
- **業態**：銀行持株会社（銀行法）、地方銀行協会加盟
- **直近政策論点**：
  - 2024〜 日銀政策金利正常化 → 地銀全体で金利マージン改善ボーナス
  - 2024〜 能登半島地震被災地復興（特別融資・モラトリアム対応）
  - 2024〜 BaaS / 共同勘定系市場の整理（NTT データ「地銀共同センター」「STELLA CUBE」勢に対する代替選択肢としての Tonari）

## 7. Open questions

- Tonari の採用地銀数・収益規模はどこまで伸びるか？ NTT データ系・日本ユニシス系の共同勘定系から乗り換える地銀は出るか？
- 能登半島地震からの被災地復興融資の不良債権化リスクは？ 2026〜2027 にかけての引当金推移
- デジタルバリューの自治体 DX 事業は石川県外にどこまで広がるか？
- 北國 FHD は地銀再編（SBI 第 4 メガ構想 / 隣接 [[regional-banks/hokuhoku-fg]] 等）に組み込まれるのか、独立路線を貫くのか？
- Microsoft との提携深化はどこまで進むか（生成 AI / Copilot 領域での実装可能性）

## 8. Related

- [[regional-banks/fukuoka-fg]] — みんなの銀行を持つもう一方の地銀 DX リーダー、対照的戦略
- [[regional-banks/hokuhoku-fg]] — 隣接北陸地盤（富山・北海道）の地銀 FG
- [[regional-banks/shizuoka-fg]] · [[regional-banks/concordia-fg]] · [[regional-banks/mebuki-fg]] — 中堅〜大手地銀 FG
- [[megabanks/mufg]] · [[megabanks/smfg]] · [[megabanks/mizuho-fg]] — メガバンク（参照）
- [[megabanks/sbi-hd]] — 第 4 メガ構想で地銀連合を組成
- 関連 wiki: [[banking/minna-bank-baas-model]]（BaaS 比較）

## Sources

- **Wikipedia: 北國フィナンシャルホールディングス**（公開情報）
- **Wikipedia: 北國銀行**（公開情報、Microsoft Azure 採用 / 勘定系オープン化 / Surface 導入 各記載）
- 北國 FHD 公式 IR（持株会社設立 2021-10-01、デジタルバリュー設立 2023-04、Tonari 提供開始 2023）

---

> [!info] 検証状況
> confidence: **likely**（v1.0 公開情報ベース 2026-05-19）。Microsoft Azure 採用年（2008）、勘定系オープン化年（2010）、Surface 導入年（2017）、デジタルバリュー設立 / Tonari 提供開始年（2023-04）は Wikipedia / 公開 IR ベース。能登半島地震被災影響の具体財務インパクトは 2025-03 期以降の有価証券報告書で要確認。
