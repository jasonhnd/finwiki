---
title: 株式会社三井住友銀行 (SMBC)
aliases: ["SMBC", "Sumitomo Mitsui Banking Corporation", "三井住友銀行", "株式会社三井住友銀行"]
domain: megabanks
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [JapanFG, banking, megabank, smfg-subsidiary]
status: active
sources:
  - "Wikipedia: 三井住友銀行 (2026-05-25 抽出)"
  - "SMBC 公式サイト (https://www.smbc.co.jp/, 2026-05-25 参照)"
  - "SMFG 統合報告書 / 決算短信 (2024-25 公開分)"
  - "金融庁 銀行免許一覧 (2026-05-25 参照)"
entity_node:
  kind: operating_company
  scope: japan_core
  status: anchor
entity_edges:
  - relation: regulated_by
    target: financial-regulators/fsa
    evidence: supervisory_authority
    source: "https://www.fsa.go.jp/"
    as_of: 2026-06-21
    confidence: likely
  - relation: holds_license
    target: financial-licenses/bank-license-and-baas-boundary
    evidence: banking_license_context
    source: "https://www.fsa.go.jp/menkyo/menkyo.html"
    as_of: 2026-06-21
    confidence: likely
  - relation: subsidiary_of
    target: megabanks/smfg
    evidence: group_profile
    source: "public company profile / IR source listed in this page sources"
    as_of: 2026-06-21
    confidence: likely
---

# 株式会社三井住友銀行 (SMBC)

## Wiki route

This entry sits under [[megabanks/INDEX|megabanks INDEX]]. Read it against [[megabanks/smfg|SMFG (親会社)]], [[megabanks/mufg-bank|MUFG 銀行]], [[megabanks/mizuho-bank|みずほ銀行]] for peer / contrast (3 大メガバンク), and [[financial-regulators/fsa|金融庁]] / [[financial-regulators/boj|日本銀行]] for the broader regulatory boundary.

## TL;DR

**[[megabanks/smfg|SMFG（三井住友フィナンシャルグループ 8316）]] の中核子会社・100% 保有商業銀行**。総資産 250 兆円規模で**日本 3 大メガバンクの一角**。**2001-04-01 さくら銀行（旧三井 + 旧太陽神戸）と住友銀行の合併で発足**。本店は東京都千代田区丸の内（旧住友銀行・旧三井銀行系統合本部）。商業銀行業務（リテール + 中堅・大企業 + 国際 + 投資銀行）を担い、グループ内では [[securities-firms/smbc-nikko|SMBC 日興証券]]（証券）・[[trust-banks/smbc-trust-bank|SMBC 信託銀行]]（信託）・[[card-issuers/smbc-card|三井住友カード]]（カード）・[[consumer-finance/smbc-consumer-finance|SMBC コンシューマーファイナンス（プロミス）]]（消費者金融）と分業。グローバルでは米州・アジアを中心に展開。

## 1. 法人構造

**正式名**: 株式会社三井住友銀行
**英名**: Sumitomo Mitsui Banking Corporation (SMBC)
**設立**: **2001-04-01**（さくら銀行 + 住友銀行 合併）
**本店**: 東京都千代田区丸の内 1-1-2（東京日本橋本店、大阪本店併設）
**業態**: 商業銀行（普通銀行）
**主要株主**: **[[megabanks/smfg|三井住友フィナンシャルグループ]] 100%**
**主管**: [[financial-regulators/fsa|金融庁]]・[[financial-regulators/boj|日本銀行]]

### 沿革・前身

```
1876   三井銀行 設立（日本最古の銀行の一つ）
1895   住友銀行 設立
1990   三井銀行 + 太陽神戸銀行 → さくら銀行
2001-04-01   さくら銀行 + 住友銀行 → **三井住友銀行 (SMBC)**
2002-12   持株会社 [[megabanks/smfg|SMFG]] 設立 → SMBC は SMFG 完全子会社化
```

### 重要年表

| 年月 | 事象 |
|---|---|
| 1876 | 三井銀行 設立 |
| 1895 | 住友銀行 設立 |
| 1990 | 三井銀行 + 太陽神戸銀行 → さくら銀行 |
| **2001-04-01** | **さくら銀行 + 住友銀行 → 三井住友銀行発足** |
| **2002-12-02** | **SMFG（三井住友フィナンシャルグループ）設立**（持株会社化）|
| 2003 | 三井住友 VISA カード（後 [[card-issuers/smbc-card|三井住友カード]]）展開 |
| 2009-10 | プロミス（後 [[consumer-finance/smbc-consumer-finance|SMBC コンシューマーファイナンス]]）連結子会社化 |
| 2009-10 | 日興コーディアル証券（後 [[securities-firms/smbc-nikko|SMBC 日興証券]]）買収 |
| 2013 | ソシエテジェネラル・プライベートバンキング・ジャパン買収 → [[trust-banks/smbc-trust-bank|SMBC 信託銀行]] 体制整備 |
| 2018 | [[trust-banks/smbc-trust-bank|SMBC 信託銀行]] と SMBC リースの体制再編 |
| 2023 | **米ジェフリーズとの戦略的資本業務提携**（SMBC 親会社主導）|
| 2024-2025 | 国内 GX 投融資・スタートアップ向けエクイティ強化 |

## 2. グループ内分業

```
SMFG（[[megabanks/smfg|8316]]、持株会社）
  ├── **SMBC（株式会社三井住友銀行、100%）= 本エントリ**
  │     ├── リテール・個人向け
  │     ├── ホールセール（中堅・大企業）
  │     ├── 国際業務（海外拠点）
  │     └── 投資銀行業務（DCM / ECM の一部）
  ├── [[securities-firms/smbc-nikko|SMBC 日興証券]]（証券）
  ├── [[trust-banks/smbc-trust-bank|SMBC 信託銀行]]（信託・PB）
  ├── [[card-issuers/smbc-card|三井住友カード]]（クレジットカード）
  ├── [[consumer-finance/smbc-consumer-finance|SMBC コンシューマーファイナンス（プロミス）]]（消費者金融）
  ├── 三井住友ファイナンス&リース（リース、SMFL）
  ├── 日本総合研究所（IT・シンクタンク）
  └── SMBC アビエーション・キャピタル（航空機リース）
```

## 3. 業務セグメント

| セグメント | 主要内容 |
|---|---|
| **リテール** | 個人預金 + 住宅ローン + 投資信託販売 + 個人向け資産運用 |
| **ホールセール** | 中堅・大企業向け融資 + シンジケートローン + DCM/ECM + M&A アドバイザリー |
| **国際業務** | 北米・欧州・アジア・中南米拠点を通じた現地融資・トランザクションバンキング |
| **市場業務** | 為替・債券・デリバティブ・トレーディング |
| **トランザクションバンキング** | 法人向け決済・キャッシュマネジメント・トレードファイナンス |

### 主要拠点

- **国内**: 全国 442 店舗規模（時期により変動）
- **国際**: ニューヨーク・ロンドン・香港・シンガポール・上海・ジャカルタ等を主要拠点とする世界 50 か国超展開

## 4. 競争上の位置付け

### vs 他メガバンク

| 項目 | SMBC | [[megabanks/mufg-bank|MUFG]] | [[megabanks/mizuho-bank|みずほ]] |
|---|---|---|---|
| 親会社 | [[megabanks/smfg|SMFG (8316)]] | [[megabanks/mufg|MUFG (8306)]] | [[megabanks/mizuho-fg|MHFG (8411)]] |
| 総資産 | 約 250 兆円規模 | 約 400 兆円規模 | 約 250 兆円規模 |
| 国際展開 | 米州 + アジア中心 | 米モルガン・スタンレー出資 + アジア・タイ等 | 米欧 + アジア |
| 国内シェア | 旧住友 + 旧三井 + 旧太陽神戸 | 旧三菱 + 旧 UFJ + 旧東京 + 旧三和 + 旧東海 | 旧 IBJ + 旧第一勧銀 + 旧富士 |
| 強み領域 | プロジェクトファイナンス + 航空機リース + ホールセール機動性 | 信託・米モルガン経由投資銀行 | 信託・国際 ECM |

### 戦略テーマ

- **資本効率重視**: ROE / RORA 経営の徹底
- **GX / サステナブルファイナンス**: SLB / グリーンローン強化
- **米国市場深掘り**: 2023 ジェフリーズ（Jefferies）との戦略的資本業務提携を軸に米国 IB・レバレッジドファイナンス強化
- **アジア・新興国**: 個人向け（ベトナム・インドネシア）+ ホールセール（タイ・インド）

## 5. 監督・規制

- **主管**: [[financial-regulators/fsa|金融庁]]（銀行法）
- **マクロプルーデンス**: [[financial-regulators/boj|日本銀行]] 考査・金融機構局モニタリング
- **資本規制**: バーゼル III + G-SIB（global systemically important bank）バッファー
- **G-SIB 指定**: SMFG は G-SIB バケット 1 指定（2024）

## Related

- [[megabanks/smfg|SMFG (8316)]] · [[securities-firms/smbc-nikko|SMBC 日興証券]] · [[trust-banks/smbc-trust-bank|SMBC 信託銀行]] · [[card-issuers/smbc-card|三井住友カード]] · [[consumer-finance/smbc-consumer-finance|SMBC コンシューマーファイナンス（プロミス）]]
- [[megabanks/mufg-bank|MUFG 銀行]] · [[megabanks/mizuho-bank|みずほ銀行]] · [[regional-banks/japan-post-bank|ゆうちょ銀行]]
- [[financial-regulators/fsa|金融庁]] · [[financial-regulators/boj|日本銀行]] · [[financial-regulators/dic|預金保険機構]]
- [[card-issuers/jcb|JCB]] · [[banking/INDEX|banking index]]
- [[megabanks/INDEX|megabanks INDEX]]

## Sources

- **Wikipedia: 三井住友銀行**（https://ja.wikipedia.org/wiki/三井住友銀行, 2026-05-25 抽出）
- **SMBC 公式サイト**（https://www.smbc.co.jp/, 2026-05-25 参照）
- **SMFG 統合報告書・決算短信**（https://www.smfg.co.jp/, 2024-25 公開分）
- 金融庁 銀行免許一覧（https://www.fsa.go.jp/menkyo/menkyoj/01.pdf, 2026-05-25 参照）

---

> [!info] 校核状態
> confidence: **likely**（v1.0 公開情報ベース 2026-05-25 / ambiguous 整理 2026-05-29）。発足年（2001-04-01）・前身（さくら + 住友）・親会社 SMFG・グループ内分業構造は公式公開資料一致。総資産・店舗数は時期変動するため概数表記。米国戦略は 2023 ジェフリーズ提携が確認済み（公開報道）。「米国地銀 Webster 等への戦略投資検討報道」は複数経路の検索で裏付けが取れず `.opinions/JapanFG/smbc.md` へ隔離（2026-05-29）。最新セグメント別収益は SMFG 決算短信を要参照。
