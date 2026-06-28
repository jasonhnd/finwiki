---
source: foreign-financial-institutions/bny-mellon-japan
source_hash: 44ff17f60b3fb7f9
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "BNY メロン日本 (BNY Mellon Japan)"
translated_at: 2026-06-26T08:32:15.223Z
---

# BNY メロン日本 (BNY Mellon Japan)

## Wiki ルート

この項目は [[foreign-financial-institutions/INDEX|foreign-financial-institutions INDEX]] の下に位置する。同業 / 対比の文脈については [[trust-banks/master-trust-bank|日本マスタートラスト信託銀行]] と、より広いシステム / 規制の境界については [[banking/INDEX|banking index]] と併せて読むこと。

## 1. 会社概要

**最終親会社**：The Bank of New York Mellon Corporation（米デラウェア州法人、NYSE: **BK**、本店ニューヨーク市）
**設立**（親）：2007（The Bank of New York + Mellon Financial Corporation 合併） ^[extracted]
**前身**：1784 **The Bank of New York**（米国最古級の商業銀行、Alexander Hamilton 創業の一つ）→ 2007 Mellon Financial（ピッツバーグ拠点、1869 創業）と合併 → BNY Mellon
**ティッカー**：NYSE: BK

### 日本の主要法人（公開情報ベース）

```
The Bank of New York Mellon Corporation（米 NYSE: BK・FRB / OCC 監督）
  ├── BNY メロン信託銀行株式会社 ── 日本法人、信託業ライセンス保有
  │     └── 国内拠点でのカストディ・信託・資産管理サービス
  ├── ザ・バンク・オブ・ニューヨーク・メロン 東京支店 ── 米本店直結の在日支店
  │     └── グローバルカストディ・トランザクションバンキング
  └── BNY メロン・アセット・マネジメント・ジャパン ── 日本での資産運用ビジネス
        └── 機関投資家向けグローバル運用商品の販売・運用
```

**特徴**：
- **リテールバンキング・個人預金は一切扱わない**。完全に B2B / B2 機関投資家特化

### 信託銀行 route の扱い

BNY の日本公式ページは 2009 年に日本の信託銀行事業を買収し、現在の **ニューヨークメロン信託銀行株式会社** につながると説明している。別の公式 disclosure page も、ニューヨークメロン信託銀行を日本に設立された信託銀行で、法人顧客向け受託サービスを主業務とする登録金融機関として説明している。

このため、FinWiki では `bny-mellon-trust-bank` を独立ページとして量産せず、本ページを [[foreign-financial-institutions/foreign-bank-branches-japan-index|foreign-bank branch registry]] と [[trust-banks/trust-companies-japan-index|trust-company registry]] の umbrella route として扱う。必要な場合だけ、本節から [[trust-banks/master-trust-bank|日本マスタートラスト信託銀行]] や [[trust-banks/custody-bank|日本カストディ銀行]] との カストディ / trust-bank 比較に進む。

## 2. 沿革（年表抜粋）

| 年 | 事象 |
|---|---|
| **1968** | **The Bank of New York 日本事業開始**（東京での銀行業務スタート） ^[extracted] |
| 1970s〜80s | 邦銀のグローバル展開期にカストディ・トランザクション銀行業務を拡大 |
| **1989** | **株式投資代理人業（ADR 代理人）で日本企業多数の海外証券発行をサポート**（米国上場日本企業の ADR 預託機関として地位確立） ^[extracted] |
| 1990s〜2000s | 邦銀・年金基金の海外資産運用拡大に伴いカストディ業務を本格化 |
| **2007-07-01** | **The Bank of New York + Mellon Financial 合併 → BNY Mellon 発足**（カストディ・資産管理特化のグローバル銀行誕生） ^[extracted] |
| 2010s | **邦銀・年金基金（GPIF 等）のグローバルカストディ受託拡大**（円安・海外投資シフトの追い風） ^[extracted] |

## 3. 事業セグメント・マップ

| セグメント | 在日担い手 | 特徴 |
|---|---|---|
| **グローバルカストディ** | ザ・バンク・オブ・ニューヨーク・メロン東京支店 + BNY メロン信託 | 米国 ADR・海外株式・海外債券・オルタナ資産の保管・決済・コーポレートアクション処理 — 親会社の主力グローバル収益柱 |
| **国内信託（カストディ周辺）** | BNY メロン信託銀行 | 信託業ライセンス下での国内資産管理・受託業務 |
| 機関投資家サービス | BNY メロン信託 + 東京支店 | 邦銀・年金基金・運用会社向けバックオフィス・ファンドアドミ・トランスファーエージェント |
| 資産運用（AM）| BNY メロン・アセット・マネジメント・ジャパン | グローバル運用商品の日本販売・運用 — Insight / Newton / Walter Scott 等のマルチブティック構造を経由 |
| ADR / 預託証券 | 東京支店 + 米本店 | 日本企業の米国 ADR 発行サポート（預託機関業務）/ 海外発行のサポート |
| 個人リテール | **なし** | — |

### 日本でのポジショニング

- **MUFG 等の大株主リストに登場**：[[megabanks/mufg]] 株主構成で **The Bank of New York Mellon 3.61%**（2025-03-31）として登場するのは、**機関投資家の海外保管口座経由の名義集約** に伴う一般的構造 ^[extracted]

### 主要競合

| 領域 | 主要競合 |
|---|---|
| **グローバルカストディ** | [[foreign-financial-institutions/state-street-japan]] / [[foreign-financial-institutions/citigroup-japan]] / [[foreign-financial-institutions/jpmorgan-japan]] / HSBC |
| 国内信託（マスタートラスト周辺）| [[trust-banks/master-trust-bank]]（日本マスタートラスト）/ 日本カストディ銀行 / [[trust-banks/sumitomo-mitsui-trust]] / 三菱 UFJ 信託 |
| 機関投資家向け資産運用 | BlackRock Japan / Vanguard Japan / Goldman Sachs Asset Management Japan / Fidelity Japan |
| ADR / 預託機関 | Citibank / JPMorgan / Deutsche Bank（米 ADR 大手 4 行の一角）|

## 5. 監督・規制

- **主管**：金融庁（FSA）— 信託銀行・在日支店として
- **米側監督**：FRB（連邦準備制度理事会）/ OCC（通貨監督庁）/ FDIC、グローバルストレステスト DFAST 対象
- **直近の論点**：
  - **GPIF・公的年金の海外資産運用比率上昇** → カストディ需要構造的拡大
  - **円安・海外投資シフト** → 邦銀・運用会社の海外資産積み増しによる受託資産増
  - 外為法・対内直接投資審査 → 海外資産保管業務における規制対応

## Related

- **競合外資カストディ**: [[foreign-financial-institutions/state-street-japan]] · [[foreign-financial-institutions/citigroup-japan]] · [[foreign-financial-institutions/jpmorgan-japan]]
- **国内信託（分業相手）**: [[trust-banks/master-trust-bank]]（日本マスタートラスト）· [[trust-banks/sumitomo-mitsui-trust]]
- **日系メガ（顧客 + 株主名義）**: [[megabanks/mufg]] · [[megabanks/smfg]] · [[megabanks/mizuho-fg]]
- **外資 IB**: [[securities-firms/goldman-sachs-japan]] · [[securities-firms/morgan-stanley-japan]] · [[foreign-financial-institutions/hsbc-japan]] · [[foreign-financial-institutions/deutsche-japan]] · [[foreign-financial-institutions/barclays-japan]] · [[foreign-financial-institutions/bnp-paribas-japan]]

## Sources

- **Wikipedia: バンク・オブ・ニューヨーク・メロン**（https://ja.wikipedia.org/wiki/バンク・オブ・ニューヨーク・メロン, 2026-05-19 参照）
- **Wikipedia: The Bank of New York Mellon**（英語版、2026-05-19 参照）
- **BNY Mellon Annual Report 2024**（公式 IR、bny.com）
- **FSB List of G-SIBs 2024**（金融安定理事会公表、Bucket 区分）
- **BNY Japan official page**（日本の沿革、2009 年信託銀行事業買収）
- **BNY Japan disclosure page**（ニューヨークメロン信託銀行の登録金融機関 / 受託サービス説明）

---

> [!info] 校核状态
> confidence: **likely**。公開情報（Wikipedia + BNY Mellon グループ公式 IR + FSB 公表）のみに基づく要約。**日本拠点固有の最新財務（在日支店資産・人員規模・受託資産）は非開示または親会社連結合算のため本稿では数値詳細を控え、構造・歴史・戦略の概観に集中**。AUC/A 約 50 兆ドル超は親会社グローバル合算ベースであり日本拠点単独ではない点に注意。最新は BNY Mellon 公式 IR / 金融庁開示を要参照。
