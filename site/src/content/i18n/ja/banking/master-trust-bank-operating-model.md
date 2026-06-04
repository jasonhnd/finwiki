---
source: banking/master-trust-bank-operating-model
source_hash: 166e15cd7499119f
lang: ja
status: machine
fidelity: ok
title: "日本マスタートラスト信託銀行のオペレーティングモデル"
translated_at: 2026-06-02T11:47:37.273Z
---

# 日本マスタートラスト信託銀行のオペレーティングモデル

## ウィキ上の位置づけ

このエントリは [[banking/INDEX|banking index]] の配下にある。エンティティアンカー [[trust-banks/master-trust-bank|日本マスタートラスト信託銀行 (MTBJ)]]、オペレーティングピア [[trust-banks/custody-bank|日本カストディ銀行 (CBJ)]]、ランドスケープサマリー [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]]、オペレーティング比較 [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]]、クロスキャンプマトリクス [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]] と併せて読むこと。インフラ側については決済レールのエントリ [[securities/japan-securities-depository-center|JASDEC]] と [[securities/japan-securities-clearing-corp|JSCC]]、規制境界については [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]]、株主側の信託銀行ページ [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] と [[trust-banks/nochu-trust-bank|農中信託銀行]]、機関的文脈については [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]] と対にすること。

## 要約

日本マスタートラスト信託銀行（MTBJ — 日本マスタートラスト信託銀行）は、銀行法 + 信託業法の二重ルートの下でライセンスされたカストディ専業の信託銀行であり、MUFG 信託（46.5%）、日本生命（33.5%）、明治安田生命（10%）、および農林中金系の信託銀行（10%）からなる 4 者コンソーシアムによって所有される。そのオペレーティングモデルは、JASDEC + BoJ JGB 直接決済コアの上に、3 つのコア機能 — 年金信託管理、証券投資信託管理、証券カストディ — を束ねる。MTBJ は貸出を行わず、預金を受け入れず、リテールや PB 事業を運営しない。機関のバックオフィスである。その名称は、ほぼすべての上場企業の株主名簿の最上位に「日本マスタートラスト信託銀行（信託口）」として現れるが、これは名義（ノミニー）のサーフェスであり、受益者は、それが管理するマンデートを持つ GPIF、企業年金、大手アセットマネージャーである。CBJ とともに、MTBJ は日本の二大アンカー国内カストディインフラを形成する。

## 1. 機関位置

| 項目 | MTBJ |
|---|---|
| 法人名（JA） | 株式会社日本マスタートラスト信託銀行 |
| 法人名（EN） | The Master Trust Bank of Japan, Ltd. |
| 設立 | 2000-05 |
| 本社 | 東京都港区浜松町 |
| ライセンスルート | 銀行法 + 信託業法（カストディ専業 信託銀行 / 信託兼営銀行） |
| 上場 | 非上場（4者コンソーシアム JV） |
| 主たる規制当局 | 金融庁（FSA）— 銀行監督 + 信託業務監督 |
| 業界団体 | 信託協会（Trust Companies Association of Japan） |
| 機能上の位置 | 資産管理専業（貸出なし、預金なし、PB なし、不動産信託なし） |
| 公開 AUC アンカー | カストディ下の信託資産 ¥823 兆円（MTBJ 公式「私たちの仕事」ページのサマリー、日本の金融資産 ¥2,351 兆円のうち） |
| ピア | [[trust-banks/custody-bank|Custody Bank of Japan (CBJ)]] |

### 株主構成（公開開示）

| 株主 | 持分 | 読み方 |
|---|---|---|
| [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]]（MUFG グループ） | 46.5% | 筆頭の事業会社株主。三菱側のマンデートフローと信託銀行のオペレーティングノウハウを提供 |
| [[life-insurers/nippon-life|日本生命]] | 33.5% | 最大の生命保険会社株主。生命保険の特別勘定カストディと企業年金マンデートフローを提供 |
| [[life-insurers/meiji-yasuda|明治安田生命]] | 10.0% | 第二の生命保険会社株主。生命保険会社側のマンデート基盤を補完 |
| [[trust-banks/nochu-trust-bank|農中信託銀行]]（農林中金グループ） | 10.0% | 協同組織金融の株主。JA バンク / 農林系のマンデートフローを提供 |

### なぜカストディ専業の信託銀行が存在するのか

銀行法 + 信託業法の二重ルートの下のカストディ専業の信託銀行は、以下のことができる：

1. JASDEC の振替決済、JSCC の中央清算機関清算、BoJ JGB 振替決済に **直接** 参加できる — いずれも信託業法のみの下の純粋な信託会社には開かれていない。
2. 機関の特別勘定保有に対する日本の証券法および税務上の扱いの期待を満たす信託口の名義名を発行できる。
3. 貸出帳簿を持たず、預金で資金供給される最小限のエクスポージャー（カストディ手数料、決済口座の残余、預金保険機構への参加）のみであるため、完全な商業銀行の資本・監督上の負荷を回避できる。

### ビジネスラインマップ

| セグメント | コア機能 | 典型的な顧客基盤 | それでないもの |
|---|---|---|---|
| **年金信託（年金信託管理）** | 厚生年金基金、確定給付企業年金（DB）、確定拠出年金（DC）の信託契約 — 記録管理、資産保有者報告、給付支払オペレーション、加入者残高 | GPIF、大手企業 DB プラン、DC プラン（多くは DC スポンサー側の管理者経由）、厚生年金基金 | 運用者ではない — 運用裁量は [[asset-managers/mitsubishi-ufj-asset-management|asset managers]] と資産保有者の受託者にある |
| **投資信託受託（証券投資信託管理）** | 公募投信と私募投信の信託契約 — ファンド会計、NAV 計算、保有銘柄登録、分配処理、監査支援 | [[asset-managers/mitsubishi-ufj-asset-management|MUFG asset management arm]]、[[asset-managers/nomura-asset-management|Nomura AM]]、[[asset-managers/sbi-asset-management|SBI AM]]、MTBJ を受託銀行として用いるその他のアセットマネージャー | ファンドスポンサーや販売会社ではない。ファンドマネージャーではない |
| **有価証券カストディ（証券カストディ）** | 株式、JGB、社債、外国証券の保管。振替登録。コーポレートアクション処理。配当 / 利息受領。税還付オペレーション | 年金プラン、アセットマネージャー、生命保険会社、日本のサブカストディアンを必要とする外国のグローバルカストディアン | 自己勘定投資家ではない。「信託口」名義ラベルは記録管理上の構造物である |
| **議決権行使指図（議決権行使管理）** | 資産保有者 / 運用者の指図に従った機械的な議決権行使執行。ICJ 電子投票プラットフォーム接続。議決権行使助言会社（ISS / Glass Lewis）資料の取り扱い | MTBJ をサブカストディアンとして用いるアセットマネージャー、年金プラン、外国投資家 | 裁量的な投票者ではない — MTBJ は独自の投票意見を形成しない |
| **特定金外信託（特定金外信託オペレーション）** | 企業財務および金融機関資産のための特別目的投資信託構造（特金） | 特金を投資ビークルとして用いる企業、地方銀行、保険会社 | 裁量的なアセットマネージャーではない |

### オペレーティング機能の内訳

| 機能 | 説明 |
|---|---|
| 保管 & 振替管理 | [[securities/japan-securities-depository-center|JASDEC]] 振替決済への直接接続。BoJ JGB 直接口座保有者。投信受託の記録管理。現金決済口座の運用 |
| 決済（現物株式） | リテールおよび機関の株式決済のための JASDEC 経由の DVP-X1 / DVP-X2 / DVP-X3 接続 |
| 決済（JGB） | BoJ JGB 振替システムへの直接参加。年金と投信のマンデート向けの JGB カストディを提供 |
| 決済（社債 / CP） | 社債と CP の JASDEC 経由の振替決済 |
| ファンド会計 / NAV 計算 | 投信マンデートの日次 NAV 計算。投信協会のガイダンスに従った評価ルール。監査支援ワークペーパー |
| コーポレートアクション | 配当 / 利息受領、分割、ライツオファリング、転換、強制 / 任意イベント、源泉徴収税処理。グローバルカストディアンのサブネットワーク経由の外国資産 CA |
| 議決権行使オペレーション | 議案資料の受領、ICJ 電子投票への転送、資産保有者 / 運用者の指図の機械的執行 |
| 外国資産のサブカストディ | マンデートポートフォリオ内の非日本資産について、グローバルカストディアン（[[foreign-financial-institutions/bny-mellon-japan|BNY Mellon]] / [[foreign-financial-institutions/state-street-japan|State Street]] / [[foreign-financial-institutions/jpmorgan-japan|JP Morgan]]）経由の再ルーティング |
| 証券貸借支援 | 顧客がオプトインした場合の貸借プログラム管理。担保差し入れ。リコール管理 |
| 加入者 / 参加者オペレーション | 年金加入者残高報告（DB / DC）、給付支払オペレーション、ファンドオブファンズのルックスルー |

### 「信託口」名義サーフェス

おおむねすべての TOPIX-100 発行体の開示が、「日本マスタートラスト信託銀行（信託口）」を上位 3 株主として示す。その経済的な読み方は次のとおりである：

- 法的記録名は MTBJ である。
- 受益者は、GPIF、企業年金、投信ファンド、保険の特別勘定、そして MTBJ の外国投資家サブカストディ顧客である。
- 議決権行使の指図は上流のアセットマネージャーまたは資産保有者から来る — MTBJ からではない。

これが、公開株主名簿における MTBJ の見かけ上の「集中」を単一の投票ブロックとして読めない理由である。同じ保有体は、異なる投票方針を持つ数百の基礎マンデートにわたって分散している。

### 3 つの競争層

| 層 | 競合 | MTBJ との重複 | 差別化 |
|---|---|---|---|
| 国内カストディ専業 | [[trust-banks/custody-bank|Custody Bank of Japan (CBJ)]] | ほぼ同一の製品セット — 年金信託、投信受託、証券カストディ | 異なる株主キャンプ（SMTB + みずほ + 第一生命）と異なるマンデート基盤。両者が二強の国内インフラをアンカーする |
| メガバンクのフルサービス信託銀行部門 | [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]]、[[trust-banks/sumitomo-mitsui-trust|SMTB]]、[[trust-banks/mizuho-trust-bank|Mizuho Trust]] | フルサービス信託銀行も内部でカストディと年金信託を運営する — しかし通常、資産管理のレッグについてはバックオフィス処理を MTBJ / CBJ にオフロードする | フルサービス信託銀行は不動産信託、相続、PB、証券代行、議決権電子化サービスを追加する。それらは *フロントオフィス* のマンデートを勝ち取り、MTBJ / CBJ が *処理* を運営する |
| グローバルカストディアン（外国サブカストディチェーン） | [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]]、[[foreign-financial-institutions/state-street-japan|State Street Japan]]、[[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]] | クロスボーダーカストディ、外国投資家の日本サブカストディ、日本マンデートの外国資産処理 | グローバル勢はクロスボーダーを支配し、MTBJ は国内日本資産を支配する。チェーンは GPIF と投信の海外資産で相互接続する |

### クロスキャンプ比較表

| 次元 | MTBJ | CBJ | メガバンク信託銀行部門 | グローバルカストディアン（JP） |
|---|---|---|---|---|
| 貸出 / 預金 | なし | なし | あり（フルサービス） | あり（支店 + 日本信託子会社） |
| 不動産信託 | なし | なし | あり（大規模） | なし |
| 相続 / PB | なし | なし | あり | 一部（UHNW のみ） |
| 年金信託管理 | あり（コア） | あり（コア） | あり（フロントオフィスのマンデート） | 一部（外国資産側） |
| 投信受託 | あり（コア） | あり（コア） | 限定的（多くは MTBJ / CBJ にアウトソース） | 限定的 |
| 証券専業カストディ | あり（コア） | あり（コア） | あり | あり（外国向けの日本サブカストディ） |
| ICSD（Euroclear / Clearstream）直接 | グローバル勢経由で再ルーティング | グローバル勢経由で再ルーティング | グローバル勢経由で再ルーティング | 直接 |
| 公開株主名簿の名義 | 「日本マスタートラスト信託銀行（信託口）」 | 「日本カストディ銀行（信託口）」 | 目立たない — フルサービスブランド | 外国法人行の外国株主名 |

## 4. 手数料・収益構造

MTBJ は詳細な手数料体系を公開開示していない。公開情報に基づく読み方は次のとおりである：

| 収益ライン | 価格設定の基準 | 公開可視性 |
|---|---|---|
| 年金信託管理手数料 | AUC bps（大規模な GPIF 規模のマンデートでは通常非常に低い） | 項目レベルでは非開示。MTBJ は非上場であるため、手数料収益総額はグループ / 株主の連結開示からのみ推測可能 |
| 証券カストディ手数料 | 資産クラスごとの AUC bps。チケットごとの決済手数料。資金管理スプレッド | 公開非開示 |
| 議決権行使管理 / コーポレートアクションオペレーション | 通常カストディ手数料にバンドルされる | 個別非開示 |
| 証券貸借管理 / エージェントレンダー手数料 | 受益者との貸借収益のレベニューシェア | 個別非開示 |
| 現金残高利息収入 | 低い — 短期の資金運用 | 個別非開示 |

### なぜ手数料は外部から読みにくいのか

1. MTBJ は非上場で、最小限の法定開示のみを公表する。詳細な手数料開示は株主連結レベルである。
2. 投信受託手数料はファンドごとに観察可能だが、ファンドファミリー、資産クラス、契約日によって変動する。クロスファンド集計には各信託約款の手作業によるスクレイピングが必要である。
3. 年金信託契約は GPIF を含め個別に交渉される。マンデートごとの手数料は公表されていないため、公開データから推測できるのは AUC × 平均 bps のサマリー集計のみである。
4. 機関顧客向けの証券カストディ手数料はマンデート固有であり、標準的な公開タリフ上にない。

### クロスバンクの手数料経済性の読み方

| 側面 | MTBJ / CBJ（国内専業） | メガバンク信託銀行部門 | グローバルカストディアン（日本） |
|---|---|---|---|
| 日本株式カストディの価格決定力 | 高（規模のユーティリティ） | 中（MTBJ / CBJ をバックエンドとして利用） | 中（外国投資家サブカストディのプレミアム） |
| 日本投信受託の価格決定力 | 高（ユーティリティ規模、低 bps 手数料） | 低（主要ファンドの受託会社に直接なることはまれ） | 低（日本の投信受託会社になることはまれ） |
| 外国資産カストディの価格決定力 | 低（グローバル勢経由で再ルーティング） | 低 | 高（グローバル ICSD + サブカストディネットワーク） |
| 年金信託管理の価格決定力 | 高（特に GPIF 規模のマンデート） | 中～高（フルサービスで競合） | 中（外国年金側のマンデート） |

詳細なクロスバンクの手数料比較については [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]] を参照のこと。

### 規制スタック

| 層 | 法令 / 規制当局 | MTBJ への含意 |
|---|---|---|
| 銀行監督 | 銀行法 + 金融庁 監督指針（信託兼営銀行 セクション） | 自己資本充足、流動性、ガバナンス、IT リスクの監督。MTBJ は低リスクのバランスシートを運営するため資本は軽い |
| 信託業務監督 | 信託業法 + 金融庁 監督指針（信託業 セクション） | 信託勘定の分別、受託者義務ルール、利益相反管理、受託者責任基準 |
| 証券法のオーバーレイ | 金融商品取引法 — 投資信託受託会社 / カストディ オペレーション | NAV 計算の説明責任、カストディ基準、投信協会への遵守 |
| 年金規制 | 厚生年金保険法, 確定給付企業年金法, 確定拠出年金法 | 年金信託管理オペレーション、受託者報告、加入者残高報告 |
| 預金保険 | 預金保険機構加盟 | 預金は軽微だが法定の加盟 |
| AML / CFT | 金融庁 + 警察庁 + 国税庁 報告 | 基礎となる顧客マンデートに適用されるカストディ側 AML |
| スチュワードシップ / コーポレートガバナンス | スチュワードシップ・コード（任意コード） | 議決権行使管理の透明性への期待 |
| 記録管理 / データ | 個人情報保護法, 金融分野ガイドライン | 年金加入者データ、NISA 関連口座データ |

### 会計処理

| 項目 | 処理 |
|---|---|
| 信託勘定資産（「信託財産」） | MTBJ では **オフバランスシート**。受益者ではオンバランスシート |
| カストディ手数料 | P&L で手数料収入として認識 |
| 預金（自己勘定預金） | オンバランスシート — ただし信託資産に対して小さい |
| 決済口座の残余残高 | 短期。現金 + 銀行への預け金に含まれる |
| 資本 | 法定最小限の信託兼営銀行資本 + 内部バッファ |

## 6. JASDEC / 清算インフラ接続

```
┌─────────────────────────────────────────────────────────────────┐
│ Beneficial owners (GPIF / pensions / 投信 / insurers)            │
└─────────────────────────────┬───────────────────────────────────┘
                              │  mandate
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ Asset managers (front-office discretion, voting opinion)         │
│ — MUFG-AM, Nomura AM, SBI AM, etc.                               │
└─────────────────────────────┬───────────────────────────────────┘
                              │  instruction
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ Master Trust Bank of Japan (trust account / nominee)             │
│ — recordkeeping, NAV, CA processing, voting admin                │
└─┬────────────┬────────────┬───────────────┬────────────────────┬─┘
  │            │            │               │                    │
  ▼            ▼            ▼               ▼                    ▼
┌───────────┐┌─────────────┐┌──────────────┐┌──────────────────┐┌─────────────────┐
│ JASDEC    ││ JSCC        ││ BoJ JGB      ││ Global custodian │ │ ICJ voting plat.│
│ (equities,││ (CCP for    ││ book-entry   ││ (foreign sub-    │ │ (electronic     │
│ corp bonds││ cash equity ││ (JGB         ││ custody — BNY,   │ │ proxy voting)   │
│ CP, 投信) ││ + CCP)      ││ settlement)  ││ State Street,    │ │                 │
│           ││             ││              ││ JPM, Citi)       │ │                 │
└───────────┘└─────────────┘└──────────────┘└──────────────────┘└─────────────────┘
```

### JASDEC への直接接続

MTBJ は、以下について [[securities/japan-securities-depository-center|JASDEC]] 振替決済の直接参加者である：

- 株式振替制度（電子化された上場株式）
- 一般債振替制度（社債、普通社債、転換社債を含む）
- 短期社債振替制度（CP / コマーシャルペーパー）
- 投資信託振替制度（公募投信のユニット振替）

### 外国資産のサブカストディチェーン

MTBJ が管理するマンデートの外国資産レッグ（例：GPIF 外国株式、投信内の外国債券ポートフォリオ）は、日本側のサブカストディとしてグローバルカストディアン経由でルーティングされる。チェーンはおおむね次のとおりである：

```
MTBJ (record-name trust-account) → global custodian (BNY / State Street / JPM / Citi)
  → local sub-custodian in each foreign market → local CSD
```

このサブカストディ依存は、MTBJ の外国資産処理コストが構造的にグローバルカストディアンの手数料体系からのパススルーであることを意味する。これは外国資産レッグにおける MTBJ の価格決定力を制限するが、国内資産レッグにおいてはそれを保持する。

## 関連項目

- [[banking/INDEX]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/custody-bank-operating-model]]
- [[banking/jasdec-settlement-operations]]
- [[banking/trust-bank-fee-structure-comparison]]
- [[banking/pension-trust-mandate-allocation-japan]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[trust-banks/master-trust-bank]]
- [[trust-banks/custody-bank]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[trust-banks/nochu-trust-bank]]
- [[life-insurers/nippon-life]]
- [[life-insurers/meiji-yasuda]]
- [[foreign-financial-institutions/bny-mellon-japan]]
- [[foreign-financial-institutions/state-street-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## 出典

- 日本マスタートラスト信託銀行：公式サイト、会社概要、事業 / 資産管理ページ（「私たちの仕事」 — 日本の金融資産 ¥2,351 兆円のうちカストディ下の信託資産 ¥823 兆円と記載：https://www.mastertrust.co.jp/about/overview.html）、会社情報ページ（資本金 ¥10億円；株主 MUFG 信託 46.5% / 日本生命 33.5% / 明治安田 10.0% / 農中信託 10.0%；営業開始 2000-05-09：https://www.mastertrust.co.jp/company/information.html）。
- 信託協会：信託財産運用残高統計。
- FSA：信託業務金融機関リスト、銀行免許リスト。
- JASDEC：証券振替および保管振替制度の資料。
- JSCC：清算および DVP 現物株式の資料。
- BoJ：JGB 振替決済システムの資料。
- GPIF：公開年次報告書および資産管理機関パネルの開示。
