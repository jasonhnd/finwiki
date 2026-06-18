---
source: banking/master-trust-bank-operating-model
source_hash: e469f3ba5b9cafd4
lang: ja
status: machine
fidelity: ok
title: "日本マスタートラスト信託銀行のオペレーティングモデル"
translated_at: 2026-06-18T23:33:48.358Z
---

# 日本マスタートラスト信託銀行のオペレーティングモデル

## Wiki ルート

本項目は [[banking/INDEX|banking index]] の配下に位置する。事業体のアンカーである [[trust-banks/master-trust-bank|日本マスタートラスト信託銀行 (MTBJ)]]、オペレーティング上のピアである [[trust-banks/custody-bank|日本カストディ銀行 (CBJ)]]、ランドスケープの要約である [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]]、オペレーティング比較である [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]]、そしてクロスキャンプ・マトリクスである [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]] と併せて読むこと。インフラ側として決済レール項目の [[securities/japan-securities-depository-center|JASDEC]] および [[securities/japan-securities-clearing-corp|JSCC]] と、規制上の境界として [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] と、株主側の信託銀行ページである [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] および [[trust-banks/nochu-trust-bank|農中信託銀行]] と、機関投資家の文脈として [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]] とペアで読むこと。

## TL;DR

日本マスタートラスト信託銀行（MTBJ — 日本マスタートラスト信託銀行）は、銀行法＋信託業法の二重ルートの下で免許を受けたカストディ専業の信託銀行であり、三菱UFJ信託（46.5%）、日本生命（33.5%）、明治安田生命（10%）、および農林中金系の信託銀行（10%）からなる四者コンソーシアムが保有する。そのオペレーティングモデルは、年金信託管理、証券投資信託管理、証券カストディという三つのコア機能を、JASDEC ＋ 日銀 JGB 直接決済のコアの上にまとめている。MTBJ は融資の実行、預金の受け入れ、リテールや PB 事業の運営を行わない。機関投資家向けのバックオフィスである。その名は、ほぼすべての上場企業の株主名簿の筆頭に「日本マスタートラスト信託銀行（信託口）」として現れるが、これは名義上のサーフェスであり、実質的所有者は、その委託を管理する GPIF、企業年金、大手アセットマネージャーである。CBJ と並んで、MTBJ は日本の二大国内カストディインフラを形成する。

## 1. 機関位置

| Field | MTBJ |
|---|---|
| Legal name (JA) | 株式会社日本マスタートラスト信託銀行 |
| Legal name (EN) | The Master Trust Bank of Japan, Ltd. |
| Established | 2000-05 |
| HQ | 東京都港区浜松町 |
| License route | 銀行法 + 信託業法 (custody-only 信託銀行 / 信託兼営銀行) |
| Listing | Non-listed (4-way consortium JV) |
| Primary regulator | 金融庁 (FSA) — bank supervision + trust-business supervision |
| Industry body | 信託協会 (Trust Companies Association of Japan) |
| Functional position | Asset-administration specialist (no loans, no deposits, no PB, no real-estate trust) |
| Public AUC anchor | ¥823 trillion trust assets under custody (MTBJ official "私たちの仕事" page summary, of Japan's ¥2,351 trillion financial assets) |
| Peer | [[trust-banks/custody-bank|Custody Bank of Japan (CBJ)]] |

### 株主構成（公開開示）

| 株主 | 持分 | 読み解き |
|---|---|---|
| [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] (MUFG グループ) | 46.5% | 主導的な事業会社株主；三菱側の委託フローと信託銀行のオペレーティング・ノウハウを提供 |
| [[life-insurers/nippon-life|日本生命]] | 33.5% | 最大の生保株主；生命保険特別勘定のカストディに加え、企業年金の委託フローを提供 |
| [[life-insurers/meiji-yasuda|明治安田生命]] | 10.0% | 第二の生保株主；生保側の委託基盤を補完 |
| [[trust-banks/nochu-trust-bank|農中信託銀行]] (農林中金グループ) | 10.0% | 協同組織金融の株主；JA バンク／農林系の委託フローを提供 |

### なぜカストディ専業の信託銀行が存在するのか

銀行法＋信託業法の二重ルートの下にあるカストディ専業の信託銀行は、以下が可能である：

1. JASDEC の振替決済、JSCC の中央清算機関による清算、日銀 JGB の振替決済に**直接**参加できる — これらはいずれも信託業法のみに基づく純粋な信託会社には開かれていない；
2. 機関投資家向け特別勘定保有について、日本の証券法および税務上の取り扱いの期待を満たす信託口の名義名を発行できる；
3. 融資ブックを持たず、ごくわずかな預金原資のエクスポージャー（カストディ手数料、決済勘定の残余、預金保険機構への加入）しか持たないため、フルの商業銀行の資本および監督上の負荷を回避できる。

### ビジネスライン・マップ

| セグメント | コア機能 | 典型的な顧客基盤 | それが何でないか |
|---|---|---|---|
| **年金信託 (Pension trust administration)** | 厚生年金基金、確定給付企業年金 (DB)、確定拠出年金 (DC) のための信託契約 — 記録管理、資産オーナー向け報告、給付支払業務、加入者残高 | GPIF、大手企業 DB プラン、DC プラン（多くは DC スポンサー側の管理機関を通じて）、厚生年金基金 | 運用者ではない — 運用裁量は [[asset-managers/mitsubishi-ufj-asset-management|asset managers]] と資産オーナーの受託者にある |
| **投資信託受託 (Securities-investment-trust admin)** | 公募投信および私募投信のための信託契約 — ファンド会計、NAV 計算、保有銘柄登録、分配処理、監査サポート | [[asset-managers/mitsubishi-ufj-asset-management|MUFG asset management arm]], [[asset-managers/nomura-asset-management|Nomura AM]], [[asset-managers/sbi-asset-management|SBI AM]]、MTBJ を受託銀行として用いるその他のアセットマネージャー | ファンドのスポンサーや販売会社ではない；ファンドマネージャーでもない |
| **有価証券カストディ (Securities custody)** | 株式、JGB、社債、外国証券の保管；振替登録；コーポレートアクション処理；配当／利金受領；税還付業務 | 年金プラン、アセットマネージャー、生保、日本のサブカストディアンを必要とする外国グローバルカストディアン | 自己勘定投資家ではない；「信託口」の名義ラベルは記録管理上の構成物である |
| **議決権行使指図 (Voting administration)** | 資産オーナー／運用者の指図に従った機械的な議決権行使；ICJ 電子議決権行使プラットフォームへの接続；議決権行使助言会社（ISS／Glass Lewis）資料の取り扱い | アセットマネージャー、年金プラン、MTBJ をサブカストディアンとして用いる外国投資家 | 裁量的な議決権行使者ではない — MTBJ は独自の議決権行使意見を形成しない |
| **特定金外信託 (Specified-money-trust ops)** | 企業財務および金融機関資産のための特別目的の投資信託ストラクチャー（特金） | 特金を投資ビークルとして用いる事業会社、地方銀行、保険会社 | 裁量的なアセットマネージャーではない |

### オペレーティング機能の内訳

| 機能 | 説明 |
|---|---|
| 保管・振替管理 | [[securities/japan-securities-depository-center|JASDEC]] の振替への直接接続；日銀 JGB の直接口座保有者；投信受託の記録管理；資金決済勘定の運営 |
| 決済（現物株式） | リテールおよび機関投資家の株式決済のための JASDEC 経由の DVP-X1 ／ DVP-X2 ／ DVP-X3 接続 |
| 決済（JGB） | 日銀 JGB 振替システムへの直接参加、年金および投信の委託に対する JGB カストディを提供 |
| 決済（社債／CP） | 社債および CP のための JASDEC 経由の振替 |
| ファンド会計／NAV 計算 | 投信の委託に対する日次 NAV 計算；投信協会のガイダンスに従った評価ルール；監査サポート用のワークペーパー |
| コーポレートアクション | 配当／利金受領、株式分割、ライツオファリング、転換、強制／任意イベント、源泉徴収税処理；グローバルカストディアンのサブネットワーク経由の外国資産 CA |
| 議決権行使業務 | 総会資料の受領、ICJ 電子議決権行使への転送、資産オーナー／運用者の指図の機械的な執行 |
| 外国資産のサブカストディ | 委託ポートフォリオ内の非日本資産について、グローバルカストディアン（[[foreign-financial-institutions/bny-mellon-japan|BNY Mellon]]／[[foreign-financial-institutions/state-street-japan|State Street]]／[[foreign-financial-institutions/jpmorgan-japan|JP Morgan]]）経由での再ルーティング |
| 証券貸借サポート | 顧客が選択した場合の貸付プログラム管理；担保差入；リコール管理 |
| 加入者／参加者業務 | 年金加入者残高報告（DB／DC）、給付支払業務、ファンド・オブ・ファンズのルックスルー |

### 「信託口」名義サーフェス

おおむねすべての TOPIX-100 の発行体開示は、トップ 3 株主として「日本マスタートラスト信託銀行（信託口）」を示している。経済的な読み解きは以下のとおり：

- 法的な記録上の名義は MTBJ である。
- 実質的所有者は GPIF、企業年金、投信ファンド、保険特別勘定、および MTBJ の外国投資家サブカストディ顧客である。
- 議決権行使の指図は上流のアセットマネージャーまたは資産オーナーから来る — MTBJ からではない。

これが、公開株主名簿における MTBJ の見かけ上の「集中」を単一の議決権ブロックとして読むことができない理由である。同じ保有の総体は、異なる議決権行使方針を持つ数百の原委託に分散している。

### 三つの競争レイヤー

| レイヤー | 競合先 | MTBJ との重複 | 差別化 |
|---|---|---|---|
| 国内カストディ専業 | [[trust-banks/custody-bank|Custody Bank of Japan (CBJ)]] | ほぼ同一のプロダクトセット — 年金信託、投信受託、証券カストディ | 異なる株主キャンプ（SMTB ＋ みずほ ＋ 第一生命）と異なる委託基盤；両者が二強の国内インフラをアンカーする |
| メガバンクのフルサービス信託銀行部門 | [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]], [[trust-banks/sumitomo-mitsui-trust|SMTB]], [[trust-banks/mizuho-trust-bank|Mizuho Trust]] | フルサービス信託銀行も内部でカストディと年金信託を運営するが — 通常、資産管理レッグについてはバックオフィス処理を MTBJ／CBJ にオフロードする | フルサービス信託銀行は不動産信託、相続、PB、証券代行、議決権電子化サービスを加える；フロントオフィスの委託を獲得し、MTBJ／CBJ が処理を担う |
| グローバルカストディアン（外国サブカストディチェーン） | [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]], [[foreign-financial-institutions/state-street-japan|State Street Japan]], [[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]] | クロスボーダーカストディ、外国投資家の日本サブカストディ、日本委託向けの外国資産処理 | グローバル勢はクロスボーダーで優位；MTBJ は国内日本資産で優位；GPIF と投信の海外資産でチェーンが相互接続する |

### クロスキャンプ比較表

| 次元 | MTBJ | CBJ | メガバンク信託銀行部門 | グローバルカストディアン（日本） |
|---|---|---|---|---|
| 融資／預金 | なし | なし | あり（フルサービス） | あり（支店＋日本信託サブ） |
| 不動産信託 | なし | なし | あり（大規模） | なし |
| 相続／PB | なし | なし | あり | 部分的（UHNW のみ） |
| 年金信託管理 | あり（コア） | あり（コア） | あり（フロントオフィスの委託） | 部分的（外国資産側） |
| 投信受託 | あり（コア） | あり（コア） | 限定的（多くは MTBJ／CBJ に外注） | 限定的 |
| 証券のみのカストディ | あり（コア） | あり（コア） | あり | あり（外国向け日本サブカストディ） |
| ICSD（Euroclear／Clearstream）直接 | グローバル経由で再ルーティング | グローバル経由で再ルーティング | グローバル経由で再ルーティング | 直接 |
| 公開株主名簿の名義 | 「日本マスタートラスト信託銀行（信託口）」 | 「日本カストディ銀行（信託口）」 | 目立ちにくい — フルサービスブランド | 外国法人行の外国株主名義 |

## 4. 手数料・収益構造

MTBJ は粒度の細かい手数料スケジュールを公表していない。パブリックドメインの読み解きは以下のとおり：

| 収益ライン | 価格設定の基礎 | 公開での可視性 |
|---|---|---|
| 年金信託管理手数料 | AUC bps（大規模な GPIF 規模の委託では通常きわめて低い） | 明細レベルでは非開示；MTBJ は非上場のため、手数料収益の総額はグループ／株主の連結開示からのみ推測可能 |
| 証券カストディ手数料 | 資産クラスごとの AUC bps；チケットごとの決済手数料；資金管理スプレッド | 公開では非開示 |
| 議決権行使管理／コーポレートアクション業務 | 通常カストディ手数料に組み込まれる | 個別には非開示 |
| 証券貸借管理／エージェントレンダー手数料 | 実質的所有者との貸付収益のレベニューシェア | 個別には非開示 |
| 現金残高の利息収入 | 低い — 短期の資金運用 | 個別には非開示 |

### なぜ手数料は外部から読みにくいのか

1. MTBJ は非上場であり、法定の最低限の開示のみを公表する；粒度の細かい手数料開示は株主の連結レベルにある。
2. 投信受託の手数料はファンドごとに観察可能だが、ファンドファミリー、資産クラス、契約日によって異なる；クロスファンドの集計には各信託約款の手作業によるスクレイピングが必要となる。
3. 年金信託契約は GPIF を含め個別に交渉される；委託ごとの手数料は公表されないため、公開データから可能なのは AUC × 平均 bps の総額の概算推計のみである。
4. 機関投資家向け顧客の証券カストディ手数料は委託固有であり、標準的な公開タリフ上にはない。

### クロスバンクの手数料経済性の読み解き

| 側面 | MTBJ／CBJ（国内専業） | メガバンク信託銀行部門 | グローバルカストディアン（日本） |
|---|---|---|---|
| 日本株式カストディの価格決定力 | 高（規模のユーティリティ） | 中（バックエンドに MTBJ／CBJ を使用） | 中（外国投資家サブカストディのプレミアム） |
| 日本投信受託の価格決定力 | 高（ユーティリティ規模、低 bps 手数料） | 低（主要ファンドの受託会社になることは稀） | 低（日本投信受託会社になることは稀） |
| 外国資産カストディの価格決定力 | 低（グローバル経由で再ルーティング） | 低 | 高（グローバル ICSD ＋ サブカストディネットワーク） |
| 年金信託管理の価格決定力 | 高（特に GPIF 規模の委託） | 中〜高（フルサービスで競合） | 中（外国年金側の委託） |

粒度の細かいクロスバンクの手数料比較については [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]] を参照。

### 規制スタック

| レイヤー | 法令／規制当局 | MTBJ への含意 |
|---|---|---|
| 銀行監督 | 銀行法 + 金融庁 監督指針（信託兼営銀行の節） | 自己資本充実度、流動性、ガバナンス、IT リスク監督；MTBJ は低リスクのバランスシートを運営するため資本は軽い |
| 信託業監督 | 信託業法 + 金融庁 監督指針（信託業の節） | 信託勘定の分離、受託者責任ルール、利益相反管理、受託者責任の基準 |
| 証券法のオーバーレイ | 金融商品取引法 — 投資信託受託会社／カストディ業務 | NAV 計算の説明責任、カストディ基準、投信協会コンプライアンス |
| 年金規制 | 厚生年金保険法、確定給付企業年金法、確定拠出年金法 | 年金信託管理業務、受託者報告、加入者残高報告 |
| 預金保険 | 預金保険機構加盟 | 預金は僅少ながら法定加入 |
| AML／CFT | 金融庁 + 警察庁 + 国税庁 への報告 | 原顧客委託に適用されるカストディ側の AML |
| スチュワードシップ／コーポレートガバナンス | スチュワードシップ・コード（任意のコード） | 議決権行使管理の透明性への期待 |
| 記録管理／データ | 個人情報保護法、金融分野ガイドライン | 年金加入者データ、NISA 関連口座データ |

### 会計処理

| 項目 | 処理 |
|---|---|
| 信託勘定資産（「信託財産」） | MTBJ では**オフバランスシート**；実質的所有者ではオンバランスシート |
| カストディ手数料 | P&L で手数料収益として認識 |
| 預金（自己勘定預金） | オンバランスシート — ただし信託資産に対して小さい |
| 決済勘定の残余残高 | 短期；現金＋銀行預け金に含まれる |
| 資本 | 信託兼営銀行の法定最低資本＋内部バッファー |

## 6. JASDEC／清算インフラ接続

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

MTBJ は、以下について [[securities/japan-securities-depository-center|JASDEC]] の振替の直接参加者である：

- 株式振替制度（電子化された上場株式）
- 一般債振替制度（社債、普通社債、転換社債を含む）
- 短期社債振替制度（CP／コマーシャルペーパー）
- 投資信託振替制度（公募投信の受益権振替）

### 外国資産のサブカストディチェーン

MTBJ が管理する委託の外国資産レッグ（例：GPIF の外国株式、投信内の外国債券ポートフォリオ）は、日本側のサブカストディとしてグローバルカストディアンを経由してルーティングされる。チェーンはおおむね以下のとおり：

```
MTBJ (record-name trust-account) → global custodian (BNY / State Street / JPM / Citi)
  → local sub-custodian in each foreign market → local CSD
```

このサブカストディの依存関係は、MTBJ の外国資産処理コストが構造的にグローバルカストディアンの手数料スケジュールからのパススルーであることを意味し、外国資産レッグにおける MTBJ の価格決定力を制約するが、国内資産レッグにおいてはそれを保持する。

## 関連

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

- 日本マスタートラスト信託銀行：公式サイト、会社概要、事業／資産運用ページ（「私たちの仕事」 — 日本の ¥2,351 兆円の金融資産のうち ¥823 兆円の信託資産を保管していると記載：https://www.mastertrust.co.jp/about/overview.html）、会社情報ページ（資本金 ¥10億円；株主 三菱UFJ信託 46.5%／日本生命 33.5%／明治安田 10.0%／農中信託 10.0%；営業開始 2000-05-09：https://www.mastertrust.co.jp/company/information.html）。
- 信託協会：信託財産運用残高統計。
- FSA：信託業金融機関一覧、銀行免許一覧。
- JASDEC：証券振替・保管制度資料。
- JSCC：清算および DVP 現物株式資料。
- 日銀：JGB 振替決済システム資料。
- GPIF：公開の年次報告書および資産管理機関パネルの開示。
