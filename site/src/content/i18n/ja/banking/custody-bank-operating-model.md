---
source: banking/custody-bank-operating-model
source_hash: 8fd126f0e8af4bbe
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本カストディ銀行の業務モデル"
translated_at: 2026-06-26T08:31:59.818Z
---

# 日本カストディ銀行の業務モデル

## ウィキ上の位置づけ

本エントリは [[banking/INDEX|banking index]] の配下に位置する。エンティティアンカーである [[trust-banks/custody-bank|日本カストディ銀行 (CBJ)]]、業務上のピアである [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]] およびエンティティ [[trust-banks/master-trust-bank|MTBJ]]、ランドスケープ要約 [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and カストディ銀行 landscape]]、陣営横断マトリックス [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]]、業務比較 [[banking/trust-bank-custody-operating-comparison|trust-bank カストディ operating comparison]] と併せて読むこと。決済インフラ側については [[securities/japan-securities-depository-center|JASDEC]] と [[securities/japan-securities-clearing-corp|JSCC]] と、規制ティアについては [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] と、株主側の信託銀行ページ [[trust-banks/sumitomo-mitsui-trust|SMTB]] および [[trust-banks/mizuho-trust-bank|Mizuho Trust]] と、機関投資家コンテキストについては [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]] と組み合わせて参照すること。

## TL;DR

日本カストディ銀行（CBJ — 日本カストディ銀行）は、日本の二強体制をなす資産管理ユーティリティのもう一方の半分であり、JTSB（日本トラスティ・サービス信託銀行）と TCSB（資産管理サービス信託銀行）の 2020-07-27 合併によって設立された。その株主陣営は、三井住友トラストグループ（33.3%）＋ みずほ FG（27.0%）＋ りそな銀行（16.7%）＋ 第一生命（8.0%）＋ 生保（朝日／明治安田／かんぽ生命／富国）軸であり、MTBJ の MUFG 信託 ＋ 日本生命 ＋ 明治安田 ＋ 農林中金陣営とは別系統である。業務上、CBJ は MTBJ と同じ仕事を行う。すなわち、年金信託管理、証券投資信託管理、証券カストディであり、銀行法 ＋ 信託業法の二重ライセンスルートのもとで、JASDEC ＋ 日銀 JGB 決済への直接参加を伴う。その「日本カストディ銀行（信託口）」という名義人名は、MTBJ の「信託口」と並んで、すべての TOPIX 発行体の株主名簿の最上位に現れる。2020  合併は重複する二つのシステムを単一のマンデートベースに統合したものであり、MTBJ を生み出したのと同じパッシブファンドの成長と年金資産規模によって推進された。CBJ ＋ MTBJ は合わせて日本の機関投資家カストディ残高の大半を占める。

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

### 株主構成（公開開示、2020-07-27時点）

| Shareholder | Stake | 読み方 |
|---|---|---|
| [[trust-banks/sumitomo-mitsui-trust|三井住友トラストグループ (SMTH)]] | 33.3% | 筆頭信託銀行株主; SMTB の年金／投信顧客基盤からマンデートフローを供給; 旧 JTSB 系統 |
| [[megabanks/mizuho-fg|みずほフィナンシャルグループ (Mizuho FG)]] | 27.0% | 第二信託銀行株主（みずほ信託経由）; 旧 TCSB 系統 |
| りそな銀行 (Resona Bank) | 16.7% | 第三位株主; TCSB 陣営における旧大和／あさひ信託系統 |
| [[life-insurers/dai-ichi-life|第一生命保険]] | 8.0% | 生保株主; 特別勘定カストディおよび企業年金マンデートフローを供給 |
| 朝日生命保険 | 5.0% | 生保株主（旧 TCSB） |
| 明治安田生命保険 | 4.5% | 生保株主 |
| かんぽ生命保険 | 3.5% | 生保株主 |
| 富国生命保険 | 2.0% | 生保株主（旧 TCSB） |

### なぜ専業カストディアンが一つではなく二つなのか

2020-07 合併は JTSB と TCSB を統合したが、MTBJ との合併までは至らなかった。一般的な解釈は以下のとおりである。

1. 株主間政治 — MUFG／生保軸と SMTB／みずほ／りそな／生保軸は、支配権を譲らない限り容易には統合しない。
2. リスク集中 — 日本の機関投資家向け資産管理は単一のユーティリティに依存できない（オペレーショナルリスク ＋ カウンターパーティリスク ＋ 議決権集中）。
4. コスト裁定 — 各陣営内の重複システム（SMTB／みずほ陣営内の JTSB 対 TCSB）は冗長であったが、陣営間の重複は競争上のチェック機能を生む。

2020 合併は**陣営内**の統合を達成した。陣営間の統合（CBJ ＋ MTBJ）は未解決の問題として残っている。

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
| **年金信託 (Pension trust administration)** | 厚生年金基金、DB、DC プランの信託契約 — 記録管理、資産保有者レポート、給付支払オペレーション | GPIF、大企業 DB プラン、DC プラン管理者 | 運用者ではない |
| **投信受託 (Securities-investment-trust admin)** | 公募投信／私募投信の信託契約 — ファンド会計、NAV 計算、保有銘柄登録、分配処理 | CBJ を受託会社として用いるアセットマネージャー（とりわけ SMTB AM 関連、みずほ AM、りそな AM 関連） | ファンドマネージャーや販売会社ではない |
| **特定金銭信託 (特金) ops** | 機関投資家／法人投資家向けの特金ビークル | 保険会社、法人、地方銀行 | 投資一任の運用者ではない |
| **資産管理サービス (Master カストディ)** | 機関投資家向けマスターカストディ、複数マンデート統合、運用指図処理 | 大規模な複数マンデート資産保有者 | スポンサーではない |

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
| Sub-カストディ for foreign assets | 非日本資産について [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon]] / [[foreign-financial-institutions/state-street-japan|State Street]] / [[foreign-financial-institutions/jpmorgan-japan|JP Morgan]] / [[foreign-financial-institutions/citigroup-japan|Citi]] 経由でのリルーティング |
| Member / participant ops | 年金加入者残高報告（DB／DC）、給付支払オペレーション |
| Securities-lending support | 貸株プログラム管理（顧客がオプトインした場合）; 担保差入; リコール管理 |

### 「信託口」名義人サーフェス — CBJ 固有

CBJ の名義人名「日本カストディ銀行（信託口）」は、実質的にすべての TOPIX-100 発行体の大株主行に現れ、しばしば MTBJ の「信託口」に次いで第 2位または第 3位となる。そのパターンは以下のとおりである。

| 読み方 | Interpretation |
|---|---|
| Legal record name | CBJ |
| Beneficial owners | SMTB 側アセットマネージャー、みずほ側アセットマネージャー、りそな側アセットマネージャー、第一生命特別勘定、朝日／明治安田／富国生命の勘定、CBJ の外国サブカストディ顧客 |
| Voting instruction source | 上流のアセットマネージャーまたは資産保有者 — CBJ ではない |
| Underlying exposure type | 大部分はパッシブインデックス + アクティブ年金マンデート + 投信保有 |

### vs MTBJ — 業務詳細の比較

| 項目 | CBJ | MTBJ |
|---|---|---|
| Established | 2020-07-27 (JTSB+TCSB merger) | 2000-05 (greenfield) |
| Shareholder camp | SMTH 33.3% + みずほ FG 27.0% + りそな 16.7% + 第一生命 8.0% + 朝日 / 明治安田 / かんぽ / 富国生保 | MUFG Trust + Nippon Life + Meiji Yasuda + Norinchukin |
| Lead shareholder stake | 三井住友トラストグループ (SMTH) 33.3% | MUFG Trust 46.5% |
| Public AUC anchor | ~¥696兆円 (2025-03-31; 受託信託財産総額) | ~¥770兆円 (2025-03-31; 管理資産残高) |
| HQ location | 東京都中央区晴海 | 東京都港区浜松町 |
| Legal-structure license | 銀行法 + 信託業法 (カストディ専業) | 銀行法 + 信託業法 (カストディ専業) |
| Loans / deposits | None / minimal | None / minimal |
| 不動産信託 | No | No |
| Inheritance / 相続 trust | No | No |
| PB / wealth | No | No |
| Real-estate trust | No | No |
| JASDEC direct | Yes (high volume) | Yes (high volume) |
| BoJ JGB direct | Yes | Yes |
| JSCC direct | Yes | Yes |
| ICSD (Euroclear / Clearstream) direct | No (re-routed via globals) | No (re-routed via globals) |
| GPIF custodian use | Yes (one of the resource pool) | Yes (one of the resource pool) |
| Listing | Non-listed | Non-listed |

### vs フルサービス信託銀行

| 項目 | CBJ | Megabank full-service trust banks (MUFG Trust / SMTB / Mizuho Trust) |
|---|---|---|
| カストディ / 投信受託 | コア機能（ユーティリティ規模） | 内製で運営 + 処理は CBJ / MTBJ にしばしば委託 |
| Real-estate trust | No | 主要事業ライン（不動産証券化、J-REIT） |
| 相続 / 遺言 / PB | No | Yes — 重要なウェルスマネジメント収益 |
| 不動産信託 + 信託受益権 (J-REIT) | No | Yes — 完全な処理 |
| Securities agency (株式事務代行) | No | Yes |
| Pension front-office (運用提案) | No | Yes |
| DC service window | 限定的（管理のみ） | フロントオフィス + 管理 |

CBJ は**処理**を担い、その信託銀行株主は**顧客リレーション + フロントオフィスのマンデート**を担う。この垂直分業は意図的なものであり、信託銀行株主が CBJ を自らの連結業務に再び吸収していない理由である。

### vs グローバルカストディアン

| 項目 | CBJ | Global custodians (BNY Mellon / State Street / JPM / Citi Japan) |
|---|---|---|
| Primary asset universe | 国内日本資産 | クロスボーダー + 外国人投資家向け日本サブカストディ |
| ICSD connectivity | 間接（グローバル経由） | 直接 |
| Voting administration | Yes（機械的、ICJ 連携） | Yes（Broadridge 等経由） |
| Pricing power on JP カストディ | 高（ユーティリティ規模） | 中（サブカストディプレミアム） |
| Pricing power on foreign カストディ | 低（グローバルへサブロール） | 高 |
| Regulatory base | FSA のみ | FSA + 本国規制当局（FRB / OCC / ECB / PRA） |
| G-SIB status | No | 親会社四社すべてが G-SIB |

## 4. 手数料・収益構造

CBJ は詳細な手数料スケジュールを公開していない。パブリックドメインでの解釈は以下のとおりである。

| Revenue line | Pricing basis | Public visibility |
|---|---|---|
| 年金信託管理手数料 | AUC bps（GPIF／大規模 DB 規模では非常に低い） | 個別項目レベルでは非開示（CBJ は詳細な手数料スケジュールを公表していない） |
| 投信受託 admin fee | AUC bps — 通常 NAV の年間 0.01-0.05% | ファンドごとに信託約款で開示 |
| Securities カストディ fee | アセットクラスごとの AUC bps + チケットごとの決済手数料 | 公開非開示 |
| Voting / CA admin | 通常はカストディ手数料に包含 | 個別には非開示 |
| Securities-lending agent fee | 受益者とのレベニューシェア | 個別には非開示 |
| Cash-balance interest income | 低 | 個別には非開示 |

### なぜ CBJ の手数料エコノミクスが MTBJ に酷似するのか

両社は同様のマンデート規模に対して同じ商品セットを運営している。その手数料プライシングは以下によってアンカーされる。

2. **GPIF の入札圧力** — GPIF は定期的に資産管理機関パネルを実施し、そこで CBJ と MTBJ の両社が競合する; 両社ともインカンベント価格付けとチャレンジャー価格付けの双方を行う。
3. **パッシブファンド AUM の成長** — パッシブインデックスファンドは CBJ 管理 AUC を押し上げる一方で bps あたり手数料を押し下げ、ボリューム増／マージン減のダイナミクスを生んだ。

### 銀行横断の手数料エコノミー考察

MTBJ + CBJ + メガバンク信託部門 + グローバルカストディアンの詳細な手数料比較については [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]] を参照のこと。

| Aspect | CBJ | MTBJ |
|---|---|---|
| アセットマネージャーに対する価格交渉力 | 高（ユーティリティ規模） | 高（ユーティリティ規模） |
| 年金信託管理手数料の傾向 | 大規模マンデートで安定からやや圧縮 | 同じ |
| 外国資産カストディ | グローバルからのパススルーコスト | グローバルからのパススルーコスト |
| コスト側の規模 | 高い固定 IT コスト; マンデートあたり限界費用は非常に低い | 同じ — 両社ともユーティリティエコノミクスで運営 |

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

### 会計処理

| Item | Treatment |
|---|---|
| 信託資産 (信託財産) | CBJ ではオフバランスシート; 受益者ではオンバランス |
| カストディ／管理手数料 | P&L で手数料収益として認識 |
| 自己勘定預金 | オンバランスシート — 小規模 |
| 決済口座の残余 | 短期; 現金 + 銀行預け金 |
| のれん／合併会計 (2020) | JTSB + TCSB 合併で認識; 詳細は株主連結開示に記載 |

### 合併会計に関する注記

2020-07-27 の JTSB + TCSB 合併は複数年にわたるシステム統合を伴い、統合コストは CBJ の P&L を通じて流れ、株主親会社の連結信託銀行業務セグメントで吸収された。詳細なコスト回収および IT 償却プロファイルは公開非開示である（CBJ は非上場でサマリー数値のみを報告しており、合併のれんの詳細は株主親会社の連結開示に存在する）。

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
- Wikipedia (cross-reference): 株式会社日本カストディ銀行, JTSB, TCSB historical entries. — CBJ 株主構成（2020-07-27 現在）：三井住友トラストグループ 33.3% / みずほ FG 27.0% / りそな銀行 16.7% / 第一生命 8.0% / 朝日生命 5.0% / 明治安田生命 4.5% / かんぽ生命 3.5% / 富国生命 2.0%。https://ja.wikipedia.org/wiki/日本カストディ銀行 （2026-05-30 確認。旧版の「SMTB ~46.5% / Mizuho ~27% / Daiwa-affiliated」の出資者表記を訂正。46.5% は日本マスタートラスト信託における MUFG 信託の比率の誤転記、Daiwa Securities は CBJ の株主ではなく正しくは りそな銀行 16.7%）
