---
source: banking/custody-bank-operating-model
source_hash: bf77bc32d6e2c0db
lang: ja
model: google-translate-guarded-line-sync+manual-review
status: machine
fidelity: ok
title: "日本カストディ銀行の業務モデル"
translated_at: 2026-07-29T03:30:48.097Z
---

# 日本カストディ銀行の業務モデル

## ウィキ上の位置づけ

本エントリは [[banking/INDEX|banking index]] の配下に位置する。エンティティアンカーである [[trust-banks/custody-bank|日本カストディ銀行 (CBJ)]]、業務上のピアである [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]] およびエンティティ [[trust-banks/master-trust-bank|MTBJ]]、ランドスケープ要約 [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and カストディ銀行 landscape]]、陣営横断マトリックス [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]]、業務比較 [[banking/trust-bank-custody-operating-comparison|trust-bank カストディ operating comparison]] と併せて読むこと。決済インフラ側については [[securities/japan-securities-depository-center|JASDEC]] と [[securities/japan-securities-clearing-corp|JSCC]] と、規制ティアについては [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] と、株主側の信託銀行ページ [[trust-banks/sumitomo-mitsui-trust|SMTB]] および [[trust-banks/mizuho-trust-bank|Mizuho Trust]] と、機関投資家コンテキストについては [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]] と組み合わせて参照すること。

## TL;DR

日本カストディ銀行（CBJ）は、JTC ホールディングス、日本トラスティ・サービス信託銀行、資産管理サービス信託銀行の合併により 2020年7月に発足した資産管理銀行である。現行の会社概要は三井住友トラストグループ（33.3%）、みずほ FG（27.0%）、りそな銀行（16.7%）、第一生命（8.0%）および生保4社を株主として掲載し、採用向け開示は 2025年9月時点の預かり資産を 710兆円超としている。FSA の銀行 workbook は CBJ を信託銀行区分に掲載し、CBJ の事業ページはカストディ、決済、会計、レポーティング、証券貸借、機関投資家向けアウトソーシングを説明する。これらの資料は CBJ の規模と役割を裏付けるが、CBJ と MTBJ を合わせた日本の機関カストディ市場シェアが過半数であることを定量的に立証しないため、本ページではその比較を測定済み事実として示さない。^[Sources: https://www.custody.jp/corporate/information/index.html; https://www.custody.jp/recruit/aboutus/about.html; https://www.custody.jp/recruit/aboutus/business.html; https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx.]

## 1. 機関位置

| 項目 | CBJ |
|---|---|
| Legal name (JA) | 株式会社日本カストディ銀行 |
| Legal name (EN) | カストディ銀行 of Japan, Ltd. |
| Established | 2020-07-27 (JTSB + TCSB merger) |
| HQ | 東京都中央区晴海 1-8-12 晴海アイランドトリトンスクエアオフィスタワー Z |
| License route | 銀行法 + 信託業法 (カストディ専業信託銀行 / 信託兼営銀行) |
| Listing | Non-listed (multi-FG joint venture) |
| Primary regulator | 金融庁 (FSA) |
| Industry body | 信託協会 (Trust Companies Association of Japan) |
| Functional position | Asset-administration specialist (no loans, no PB, no real-estate trust, no inheritance trust) |
| Public AUC anchor | 受託信託財産総額約 ¥696 兆円（受託信託財産 + 常任代理契約等に基づく預り資産; うち 信託財産 ¥476兆円）、2025-03-31時点 |
| Peer | [[trust-banks/master-trust-bank|Master Trust Bank of Japan (MTBJ)]] |

出典: ^[CBJ company information, https://www.custody.jp/corporate/information/index.html; CBJ 2025 disclosure, https://www.custody.jp/data/disclosure/pdf/disclosure202507.pdf; FSA licensed-bank register, https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx.]

### 株主構成（公開開示、2020-07-27時点）

| Shareholder | Stake | 読み方 |
|---|---|---|
| [[trust-banks/sumitomo-mitsui-trust|三井住友トラストグループ (SMTH)]] | 33.3% | CBJ上場株主 |
| [[megabanks/mizuho-fg|みずほフィナンシャルグループ (Mizuho FG)]] | 27.0% | CBJ上場株主 |
| りそな銀行 (りそな銀行) | 16.7% | CBJ上場株主 |
| [[life-insurers/dai-ichi-life|第一生命保険]] | 8.0% | CBJ上場株主 |
| 朝日生命保険 | 5.0% | CBJ上場株主 |
| 明治安田生命保険 | 4.5% | 生保株主 |
| かんぽ生命保険 | 3.5% | 生保株主 |
| 富国生命保険 | 2.0% | 生命保険会社の株主 |

出典: ^[CBJ company information, https://www.custody.jp/corporate/information/index.html. Shareholding does not by itself prove the source or allocation of customer mandates.]

### なぜ専門の管理者が 1 人ではなく 2 人なのか

公式合併資料では、CBJを設立した2020年の合併が確立されています。調査された公的情報源には、CBJとMTBJが分離されたままである理由が記載されていないため、株主の政策、リスク集中、将来の統合などは会社が確認した説明として提示されるべきではない。

### 系統図

```
SMTB / 第一生命 lineage
  日本トラスティ・サービス信託銀行 (JTSB) — 2000 設立
    ├── 旧中央三井信託 → SMTB
    ├── 旧住友信託 → SMTB
    └── 第一生命

Mizuho / Resona / 生保 lineage
  資産管理サービス信託銀行 (TCSB) — 2004 設立
    ├── みずほ信託 (Mizuho Trust)
    ├── りそな銀行 (旧 大和 / あさひ信託 系統)
    ├── Asahi Life, Meiji Yasuda, Japan Post Insurance, Fukoku Life
    └── 旧第一勧業富士 / 安田信託 系統

  ↓ 2020-07-27 merger

  日本カストディ銀行 (CBJ) — 株主 (2020-07-27 現在)
    ├── 三井住友トラストグループ (SMTH) 33.3%
    ├── みずほ FG (Mizuho FG) 27.0%
    ├── りそな銀行 (Resona) 16.7%
    ├── 第一生命 8.0%
    └── 朝日生命 5.0% / 明治安田 4.5% / かんぽ生命 3.5% / 富国生命 2.0%
```

### 事業ラインマップ

| Segment | Core function | Typical client base | What it is not |
|---|---|---|---|
| **信託カストディ (Securities カストディ)** | 株式、JGB、社債、外国証券の保管; 振替登録; コーポレートアクション処理; 配当／利息受領; 税還付オペレーション | 年金プラン、アセットマネージャー、生保、日本のサブカストディアンを必要とする外国グローバルカストディアン | 自己勘定投資家ではない; 「信託口」名義人ラベルは記録管理上の構成物 |
| **年金信託（年金信託事務）** | 信託契約の管理・記録・報告・給付金支払業務 | 年金制度とその指定サービスプロバイダー | 投資マネージャーではありません |
| **投信受託 (証券投資信託管理者)** | 信託契約に基づくファンド会計、基準価額計算、保有記録、分配金処理 | CBJを受託者として選任する資産運用会社 | ファンドマネージャーやディストリビューターではありません |
| **特定金銭信託 (特金) ops** | 機関投資家／法人投資家向けの特金ビークル | 保険会社、法人、地方銀行 | 投資一任の運用者ではない |
| **資産管理サービス (Master カストディ)** | 機関投資家向けマスターカストディ、複数マンデート統合、運用指図処理 | 大規模な複数マンデート資産保有者 | スポンサーではない |

出典: ^[CBJ business overview, https://www.custody.jp/recruit/aboutus/business.html. The page describes service categories; it does not publish a customer-by-customer mandate list.]

### 業務機能の内訳

| Function | Description |
|---|---|
| Safekeeping & book-entry admin | [[securities/japan-securities-depository-center|JASDEC]]振替への直接接続; 日銀 JGB 直接口座保有者; 資金決済口座の運用 |
| 決済 (cash equity) | JASDEC + JSCC クリアリングによる DVP-X1 / DVP-X2 / DVP-X3 決済 |
| 決済 (JGB) | 日銀 JGB 振替制度への直接参加 |
| 決済 (corporate bond / CP) | 社債および CP について JASDEC 経由の振替 |
| Fund accounting / NAV calculation | 投信マンデートの日次 NAV 計算; 投信協会基準 |
| Corporate actions | 配当／利息受領、株式分割、ライツオファリング、転換; グローバルカストディアンのサブネットワーク経由の外国資産 CA |
| Voting operations | 資産保有者／運用者の指図の機械的実行; ICJ 電子投票の転送 |
| 外国資産のサブカストディ | 日本国外の資産について [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon]] / [[foreign-financial-institutions/state-street-japan|State Street]] / [[foreign-financial-institutions/jpmorgan-japan|JP Morgan]] / [[foreign-financial-institutions/citigroup-japan|Citi]] を経由するルート |
| Member / participant ops | 年金加入者残高報告（DB／DC）、給付支払オペレーション |
| Securities-lending support | 貸株プログラム管理（顧客がオプトインした場合）; 担保差入; リコール管理 |

### 「信託口」名義人サーフェス — CBJ 固有

CBJ の名義人名「日本カストディ銀行（信託口）」は、実質的にすべての TOPIX-100 発行体の大株主行に現れ、しばしば MTBJ の「信託口」に次いで第 2位または第 3位となる。そのパターンは以下のとおりである。

| 読み方 | Interpretation |
|---|---|
| Legal record name | CBJ |
| 受益者 | 候補者の行だけでは特定できません。保有資産は基礎となる信託受益者または顧客のために管理されます |
| 投票指示ソース | 該当する信託/投資管理協定によって決定されます。株主名簿だけでは特定できない |
| 基礎となる暴露タイプ | 候補者の行だけでは特定できません |

出典: ^[CBJ business overview, https://www.custody.jp/recruit/aboutus/business.html; issuer shareholder registers identify the nominee but generally do not disclose the underlying mandate.]

### vs MTBJ — 業務詳細の比較

| 項目 | CBJ | MTBJ |
|---|---|---|
| Established | 2020-07-27 (JTSB+TCSB merger) | 2000-05 (greenfield) |
| Shareholder camp | SMTH 33.3% + みずほ FG 27.0% + りそな 16.7% + 第一生命 8.0% + 朝日 / 明治安田 / かんぽ / 富国生保 | MUFG Trust + Nippon Life + Meiji Yasuda + Norinchukin |
| Lead shareholder stake | 三井住友トラストグループ (SMTH) 33.3% | MUFG Trust 46.5% |
| Public AUC anchor | ~¥696兆円 (2025-03-31; 受託信託財産総額) | ~¥770兆円 (2025-03-31; 管理資産残高) |
| HQ location | 東京都中央区晴海 | 東京都港区浜松町 |
| Legal-structure license | 銀行法 + 信託業法 (カストディ専業) | 銀行法 + 信託業法 (カストディ専業) |
| 出版されたビジネスの焦点 | 資産の管理と保管 | 資産の管理と保管 |
| 小売・PB・不動産サービス | レビューされた公式概要では事業分野として示されていない | レビューされた公式概要では事業分野として示されていない |
| インフラへの参加 | JASDEC、JSCC、BoJ の現在の参加者リストで確認してください。 | JASDEC、JSCC、BoJ の現在の参加者リストで確認してください。 |
| 指定された顧客の義務 | 包括的に開示されていない | 包括的に開示されていない |
| Listing | Non-listed | Non-listed |

出典: ^[CBJ company information and disclosure, https://www.custody.jp/corporate/information/index.html; MTBJ company information and FY2024 results, https://www.mastertrust.co.jp/about/overview.html, https://www.mastertrust.co.jp/assets/pdf/financial/zm20250521.pdf.]

### vs フルサービス信託銀行

| 項目 | CBJ | Megabank full-service trust banks (MUFG Trust / SMTB / Mizuho Trust) |
|---|---|---|
| 保管・投信受託 | 公式に記載されたコアサービス | フルサービス銀行は独自の信託および保管サービスを公開しています。委任は委任ごとに証明されなければならない |
| Real-estate trust | No | 主要事業ライン（不動産証券化、J-REIT） |
| 相続 / 遺言 / PB | No | Yes — 重要なウェルスマネジメント収益 |
| 不動産信託 + 信託受益権 (J-REIT) | No | Yes — 完全な処理 |
| Securities agency (株式事務代行) | No | Yes |
| Pension front-office (運用提案) | No | Yes |
| DCサービス窓口 | CBJの現在のサービス内容から確認する | 各銀行の現在のサービス内容から確認する |

出典: ^[CBJ business overview, https://www.custody.jp/recruit/aboutus/business.html; Trust Companies Association of Japan member and service information, https://www.shintaku-kyokai.or.jp/trust/trustbanks/.]

CBJ の公開資料には資産管理処理について記載されています。彼らは、すべての株主顧客に対する普遍的なフロントオフィス/バックオフィスの割り当てを確立したり、株主の統合決定について説明したりしません。

### vs グローバルカストディアン

| 項目 | CBJ | Global custodians (BNY Mellon / State Street / JPM / Citi Japan) |
|---|---|---|
| 公開事業内容 | 日本を拠点とする資産管理と保管 | 親グループがグローバルな証券サービス ネットワークを公開 |
| 日本固有の AUC / 収益 | 公表された場合の実体開示 | 多くの場合、親会社の合計とは個別に開示されない |
| ICSD / 市場接続性 | 現在のエンティティとインフラストラクチャの開示を通じて検証する | 現在のエンティティとインフラストラクチャの開示を通じて検証する |
| 価格設定の義務化 | 一般料金表としては公表されていない | 日本単位の一般料金表としては公表されていない |
| 規制基盤 | 日本の事業体は日本の監督の対象となる | 日本法人と該当する母国グループの監督 |

出典: ^[CBJ company and business pages; FSA registers; official BNY, State Street, JPMorgan, and Citi securities-services disclosures listed in this entry.]

## 4. 手数料・収益構造

CBJ は詳細な手数料スケジュールを公開していない。パブリックドメインでの解釈は以下のとおりである。

| Revenue line | Pricing basis | Public visibility |
|---|---|---|
| 年金信託事務 | 契約固有。企業全体の公定料金が設定されていない | 品目レベルでは開示されていない |
| 投信受託行政 | ファンド固有の報酬は、各ファンドの法定文書で確認できます。 | CBJ全体の金利ではなく、ファンドごとに観察可能 |
| 有価証券保管 | 契約固有の | 一般公共料金は特定されていない |
| 投票・企業活動 | 検討された公開資料によって確立されていない契約の取り扱い | 個別に開示されていない |
| 有価証券貸付 | 検討された公開資料によって確立されていない契約の取り扱い | 個別に開示されていない |
| 自己勘定利息収入 | 銀行の財務諸表を通じてのみ報告される | 義務レベルの帰属なし |

出典: ^[CBJ disclosure publications, https://www.custody.jp/data/; individual fund prospectuses and trust deeds for fund-specific trustee remuneration.]

### なぜ CBJ の手数料エコノミクスが MTBJ に酷似するのか

両社は同様のマンデート規模に対して同じ商品セットを運営している。その手数料プライシングは以下によってアンカーされる。

2. **GPIF の入札圧力** — GPIF は定期的に資産管理機関パネルを実施し、そこで CBJ と MTBJ の両社が競合する; 両社ともインカンベント価格付けとチャレンジャー価格付けの双方を行う。
3. **パッシブファンド AUM の成長** — パッシブインデックスファンドは CBJ 管理 AUC を押し上げる一方で bps あたり手数料を押し下げ、ボリューム増／マージン減のダイナミクスを生んだ。

### 銀行横断の手数料エコノミー考察

MTBJ + CBJ + メガバンク信託部門 + グローバルカストディアンの詳細な手数料比較については [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]] を参照のこと。

| Aspect | CBJ | MTBJ |
|---|---|---|
| 公的委任料金 | 非開示 | 非開示 |
| ファンド固有の受託者報酬 | 各ファンドの法定書類を確認する | 各ファンドの法定書類を確認する |
| 事業体の財務実績 | CBJの法定開示 | MTBJの法定開示 |
| 有効な公開比較 | ビジネス範囲、開示された AUC 定義、およびレポート範囲 | ビジネス範囲、開示された AUC 定義、およびレポート範囲 |

出典: ^[CBJ and MTBJ official financial disclosures. Public materials do not support an entity-level pricing-power ranking.]

### 規制スタック

| Layer | Statute / regulator | CBJ implication |
|---|---|---|
| 銀行監督 | 銀行法 + 金融庁監督指針 (信託兼営銀行 section) | 自己資本充実 + ガバナンス + IT リスク; CBJ は軽い与信ブックを運営しており、その結果 AUC に対して軽い自己資本比率となる |
| 信託業監督 | 信託業法 + 金融庁監督指針 (信託業 section) | 信託勘定分別、受託者責任、利益相反コントロール |
| 証券法オーバーレイ | 金融商品取引法 — 投信受託会社 / カストディ ops | NAV 計算、カストディ基準、投信協会コンプライアンス |
| 年金規制 | 厚生年金保険法, 確定給付企業年金法, 確定拠出年金法 | DB / DC 管理、受託者報告 |
| 預金保険 | 預金保険機構加盟 | 法定加盟; 預金基盤が小さいため関連性は軽微 |
| AML / CFT | 金融庁 + 警察庁 + 国税庁 reporting | カストディ側 AML は原資産の顧客レベルで適用 |
| スチュワードシップ / ガバナンス | スチュワードシップ・コード (voluntary) | 議決権行使管理の透明性; CBJ は顧客指図どおりに執行 |
| データ / 個人情報 | 個人情報保護法, 金融分野ガイドライン | 年金加入者データ、NISA データ |

出典: ^[FSA trust-business financial-institution list, https://www.fsa.go.jp/menkyo/menkyoj/kenei.pdf; FSA bank supervisory guidance, https://www.fsa.go.jp/common/law/guide/city/.]

### 会計処理

| Item | Treatment |
|---|---|
| 信託資産 (信託財産) | CBJ ではオフバランスシート; 受益者ではオンバランス |
| カストディ／管理手数料 | P&L で手数料収益として認識 |
| 自己勘定預金 | オンバランスシート — 小規模 |
| 決済口座の残余 | 短期; 現金 + 銀行預け金 |
| のれん／合併会計 (2020) | JTSB + TCSB 合併で認識; 詳細は株主連結開示に記載 |

出典: ^[CBJ 2020 and 2021 disclosure publications, https://www.custody.jp/data/disclosure/pdf/_disclosure2020.pdf, https://www.custody.jp/data/disclosure/pdf/_disclosure202101.pdf.]

### 合併会計に関する注記

CBJ の 2020年度年次・中間開示は三社合併を確認し、発足後の集計貸借対照表・損益情報を公表している。確認した CBJ の公開開示には、複数年のシステム統合費用、IT 評価損、またはのれん回収を個別の株主親会社セグメントに配賦する独立スケジュールはない。したがって、それらの配賦は合併そのものから推測せず、非開示として扱う。^[Sources: https://www.custody.jp/data/disclosure/pdf/_disclosure2020.pdf; https://www.custody.jp/data/disclosure/pdf/_disclosure202101.pdf.]

## 6. JASDEC / クリアリングインフラ接続

```
┌─────────────────────────────────────────────────────────────────┐
│ Beneficial owners (GPIF / corporate pensions / 投信 / insurers)  │
└─────────────────────────────┬───────────────────────────────────┘
                              │  mandate
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ Asset managers (front-office discretion + voting opinion)        │
│ — SMTB AM affiliates, Mizuho AM, Resona AM, etc.                 │
└─────────────────────────────┬───────────────────────────────────┘
                              │  instruction
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ Custody Bank of Japan (trust account / nominee)                  │
│ — recordkeeping, NAV, CA processing, voting admin                │
└─┬────────────┬────────────┬───────────────┬────────────────────┬─┘
  │            │            │               │                    │
  ▼            ▼            ▼               ▼                    ▼
┌───────────┐┌─────────────┐┌──────────────┐┌──────────────────┐┌─────────────────┐
│ JASDEC    ││ JSCC        ││ BoJ JGB      ││ Global custodians│ │ ICJ voting plat.│
│ (equities,││ (CCP for    ││ book-entry   ││ for foreign sub- │ │ (electronic     │
│ 社債, CP, ││ cash equity)││ (JGB         ││ custody          │ │ proxy voting)   │
│ 投信)     ││             ││ settlement)  ││                  │ │                 │
└───────────┘└─────────────┘└──────────────┘└──────────────────┘└─────────────────┘
```

### JASDEC への直接参加

CBJ は以下の制度に直接参加する。

- 株式振替制度 (dematerialized listed shares)
- 一般債振替制度 (corporate bonds: 普通社債, 転換社債)
- 短期社債振替制度 (CP)
- 投資信託振替制度 (publicly offered 投信 units)

### JSCC + DVP

CBJ のキャッシュエクイティ決済は [[securities/japan-securities-clearing-corp|JSCC]] を中央カウンターパーティとして経由し、DVP-X1 / X2 / X3 品質の決済を生む。JSCC はレポおよび OTC デリバティブの CCP サービスも運営しており、これらのレイヤーに対する CBJ のエクスポージャーは個別顧客のマンデート範囲に依存する。

### 日銀 JGB 振替

CBJ は日銀 JGB 振替制度に直接口座を保有し、中間サブカストディを介さずに年金および投信マンデートの DVP JGB 決済を支える。

### 外国資産サブカストディチェーン

CBJ 管理マンデート内の非日本資産については以下のとおり。

```
CBJ (record-name trust-account)
  → Global custodian (BNY / State Street / JPM / Citi)
    → Local sub-custodian in foreign market
      → Local CSD
```

## Related

- [[banking/INDEX]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/master-trust-bank-operating-model]]
- [[banking/jasdec-settlement-operations]]
- [[banking/trust-bank-fee-structure-comparison]]
- [[banking/pension-trust-mandate-allocation-japan]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[trust-banks/custody-bank]]
- [[trust-banks/master-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[life-insurers/dai-ichi-life]]
- [[foreign-financial-institutions/bny-mellon-japan]]
- [[foreign-financial-institutions/state-street-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## Sources

- Custody Bank of Japan: official site, about us, business explanation, corporate information page, English corporate page.
- 三井住友信託銀行「スケールメリットの追求」資産管理業務ページ（CBJ AUC: 総預かり資産 約696兆円 / 信託財産 476兆円、2025-03-31）— https://www.smtb.jp/business/instrument/management/scale
- 日本マスタートラスト信託銀行 2024 年度決算（MTBJ 管理資産残高 約770兆円、2025-03-31）— https://www.mastertrust.co.jp/assets/pdf/financial/zm20250521.pdf
- Trust Companies Association of Japan: trust-assets-under-management statistics.
- FSA: trust-business financial institution list, bank license list.
- JASDEC: securities book-entry and depository system materials.
- JSCC: clearing and DVP cash-equity materials.
- BoJ: JGB book-entry settlement system materials.
