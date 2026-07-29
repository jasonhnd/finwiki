---
source: banking/master-trust-bank-operating-model
source_hash: 521f4e7216623e82
lang: ja
model: google-translate-guarded-line-sync+manual-review
status: machine
fidelity: ok
title: "日本マスタートラスト信託銀行のオペレーティングモデル"
translated_at: 2026-07-29T03:30:48.113Z
---

# 日本マスタートラスト信託銀行のオペレーティングモデル

## ウィキ上の位置づけ

本項目は [[banking/INDEX|banking index]] の配下に位置する。事業体のアンカーである [[trust-banks/master-trust-bank|日本マスタートラスト信託銀行 (MTBJ)]]、オペレーティング上のピアである [[trust-banks/custody-bank|日本カストディ銀行 (CBJ)]]、ランドスケープの要約である [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and カストディ銀行 landscape]]、オペレーティング比較である [[banking/trust-bank-custody-operating-comparison|trust-bank カストディ operating comparison]]、そしてクロスキャンプ・マトリクスである [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]] と併せて読むこと。インフラ側として決済レール項目の [[securities/japan-securities-depository-center|JASDEC]] および [[securities/japan-securities-clearing-corp|JSCC]] と、規制上の境界として [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] と、株主側の信託銀行ページである [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] および [[trust-banks/nochu-trust-bank|農中信託銀行]] と、機関投資家の文脈として [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]] とペアで読むこと。

## TL;DR

日本マスタートラスト信託銀行 (MTBJ — 日本マスタートラスト信託銀行) は、資産管理を専門とする信託銀行です。同社の公式プロフィールと財務情報開示は、株主構成、事業範囲、管理下にある開示資産を裏付けています。株主名簿の「信託口」行は、指名者の記録であり、それ自体では基礎となる受益者、管理者、委任、または投票指示を特定するものではありません。したがって、このページでは、指定された顧客フローや、義務レベルの一次情報源を使用しない価格設定権限の帰属を回避します。

## 1. 機関位置

| 項目 | MTBJ |
|---|---|
| Legal name (JA) | 株式会社日本マスタートラスト信託銀行 |
| Legal name (EN) | The Master Trust Bank of Japan, Ltd. |
| Established | 2000-05 |
| HQ | 東京都港区浜松町 |
| License route | 銀行法 + 信託業法 (カストディ専業信託銀行 / 信託兼営銀行) |
| Listing | Non-listed (4-way consortium JV) |
| Primary regulator | 金融庁 (FSA) — bank supervision + trust-business supervision |
| Industry body | 信託協会 (Trust Companies Association of Japan) |
| Functional position | Asset-administration specialist (no loans, no deposits, no PB, no real-estate trust) |
| 公開 AUC の基準値 | 信託資産 823 兆円を保管（MTBJ 公式「私たちの仕事」ページ；日本の金融資産 2,351 兆円の内数） |
| Peer | [[trust-banks/custody-bank|カストディ銀行 of Japan (CBJ)]] |

出典: ^[MTBJ company overview, https://www.mastertrust.co.jp/about/overview.html; MTBJ FY2024 results, https://www.mastertrust.co.jp/assets/pdf/financial/zm20250521.pdf; FSA licensed-bank register, https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx.]

### 株主構成（公開開示）

| 株主 | 持分 | 読み解き |
|---|---|---|
| [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] （MUFGグループ） | 46.5% | MTBJが上場している株主 |
| [[life-insurers/nippon-life|日本生命]] | 33.5% | MTBJが上場している株主 |
| [[life-insurers/meiji-yasuda|明治安田生命]] | 10.0% | MTBJが上場している株主 |
| [[trust-banks/nochu-trust-bank|農中信託銀行]] （農林中央金庫グループ） | 10.0% | MTBJが上場している株主 |

出典: ^[MTBJ company overview, https://www.mastertrust.co.jp/about/overview.html. Shareholding does not by itself establish the source or allocation of customer mandates.]

### なぜカストディ専業の信託銀行が存在するのか

銀行法＋信託業法の二重ルートの下にあるカストディ専業の信託銀行は、以下が可能である：

1. JASDEC の振替決済、JSCC の中央清算機関による清算、日銀 JGB の振替決済に**直接**参加できる — これらはいずれも信託業法のみに基づく純粋な信託会社には開かれていない；
2. 機関投資家向け特別勘定保有について、日本の証券法および税務上の取り扱いの期待を満たす信託口の名義名を発行できる；
3. 融資ブックを持たず、ごくわずかな預金原資のエクスポージャー（カストディ手数料、決済勘定の残余、預金保険機構への加入）しか持たないため、フルの商業銀行の資本および監督上の負荷を回避できる。

### ビジネスライン・マップ

| セグメント | コア機能 | 典型的な顧客基盤 | それが何でないか |
|---|---|---|---|
| **年金信託（年金信託事務）** | 信託契約に基づく記録の保管、報告、給付金の支払いおよび関連事務 | 年金制度とその指定サービスプロバイダー | 投資マネージャーではありません |
| **投資信託受託（証券投資信託管理人）** | ファンド会計、基準価額計算、保有記録、分配金処理、監査支援 | MTBJを受託者として選任する資産運用会社 | ファンドのスポンサー、販売代理店、またはマネージャーではありません |
| **有価証券カストディ (Securities カストディ)** | 株式、JGB、社債、外国証券の保管；振替登録；コーポレートアクション処理；配当／利金受領；税還付業務 | 年金プラン、アセットマネージャー、生保、日本のサブカストディアンを必要とする外国グローバルカストディアン | 自己勘定投資家ではない；「信託口」の名義ラベルは記録管理上の構成物である |
| **議決権行使指図 (Voting administration)** | 資産オーナー／運用者の指図に従った機械的な議決権行使；ICJ 電子議決権行使プラットフォームへの接続；議決権行使助言会社（ISS／Glass Lewis）資料の取り扱い | アセットマネージャー、年金プラン、MTBJ をサブカストディアンとして用いる外国投資家 | 裁量的な議決権行使者ではない — MTBJ は独自の議決権行使意見を形成しない |
| **特定金外信託 (Specified-money-trust ops)** | 企業財務および金融機関資産のための特別目的の投資信託ストラクチャー（特金） | 特金を投資ビークルとして用いる事業会社、地方銀行、保険会社 | 裁量的なアセットマネージャーではない |

出典: ^[MTBJ official business overview, https://www.mastertrust.co.jp/business/asset-management.html. The reviewed page does not publish a comprehensive named-client mandate list.]

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
| 国内資産管理専門家 | [[trust-banks/custody-bank|日本管理銀行 (CBJ)]] | 公式資料には重複する資産管理サービスが記載されている | 公表されている事業範囲、AUCの定義、株主構成を比較する |
| フルサービスの信託銀行 | [[trust-banks/mitsubishi-ufj-trust-bank|MUFG信託]], [[trust-banks/sumitomo-mitsui-trust|SMTB]], [[trust-banks/mizuho-trust-bank|みずほ信託]] | 公式資料には、より広範な信頼サービスが含まれています | 具体的な開示なしにアウトソーシングや顧客の割り当てを推測しないでください |
| グローバルカストディアン | [[foreign-financial-institutions/bny-mellon-japan|BNYメロンジャパン]], [[foreign-financial-institutions/state-street-japan|ステート ストリート ジャパン]], [[foreign-financial-institutions/jpmorgan-japan|JPモルガン・ジャパン]] | 親グループがグローバルな証券サービス ネットワークを公開 | 日本固有の義務と経済状況は個別に開示されていないことが多い |

出典: ^[MTBJ and CBJ official business pages; Trust Companies Association of Japan, https://www.shintaku-kyokai.or.jp/trust/trustbanks/; official global-custodian securities-services pages.]

### クロスキャンプ比較表

| 次元 | MTBJ | CBJ | メガバンク信託銀行部門 | グローバルカストディアン（日本） |
|---|---|---|---|---|
| 出版されたビジネスの焦点 | 資産管理 | 資産管理 | より広範な信頼サービス | グローバル証券サービス |
| 事業体のAUC開示 | 発行者 MTBJ | CBJ が発行 | 定義と周長は異なります | 日本限定ではなく保護者レベルの場合が多い |
| 指定された顧客の義務 | 包括的に開示されていない | 包括的に開示されていない | 包括的に開示されていない | 日本向けには包括的に開示されていない |
| 一般義務料金表 | 非公開 | 非公開 | 非公開 | 日本部門については未発表 |
| インフラストラクチャ接続 | 現在の参加者の開示情報で確認する | 現在の参加者の開示情報で確認する | 法人ごとに確認する | 法人ごとに確認する |

出典: ^[Official entity, FSA, JASDEC, JSCC, and investor-relations publications listed in the frontmatter. Categories do not establish pricing or a customer relationship.]

## 4. 手数料・収益構造

MTBJ は粒度の細かい手数料スケジュールを公表していない。パブリックドメインの読み解きは以下のとおり：

| 収益ライン | 価格設定の基礎 | 公開での可視性 |
|---|---|---|
| 年金信託事務 | 契約固有。企業全体の税率は確立されていない | 品目レベルでは開示されていない |
| 有価証券保管 | 契約固有の | 一般公共料金は特定されていない |
| 投票・コーポレートアクションの管理 | 検討された公開資料によって確立されていない契約の取り扱い | 個別に開示されていない |
| 証券貸付管理 | 検討された公開資料によって確立されていない契約の取り扱い | 個別に開示されていない |
| 自己勘定利息収入 | 銀行の財務諸表を通じて報告される | 義務レベルの帰属なし |

出典: ^[MTBJ financial disclosures, https://www.mastertrust.co.jp/company/information.html; individual fund prospectuses and trust deeds for fund-specific trustee remuneration.]

### なぜ手数料は外部から読みにくいのか

1. MTBJ は非上場であり、法定の最低限の開示のみを公表する；粒度の細かい手数料開示は株主の連結レベルにある。
2. 投信受託の手数料はファンドごとに観察可能だが、ファンドファミリー、資産クラス、契約日によって異なる；クロスファンドの集計には各信託約款の手作業によるスクレイピングが必要となる。
3. 年金信託契約は GPIF を含め個別に交渉される；委託ごとの手数料は公表されないため、公開データから可能なのは AUC × 平均 bps の総額の概算推計のみである。
4. 機関投資家向け顧客の証券カストディ手数料は委託固有であり、標準的な公開タリフ上にはない。

### クロスバンクの手数料経済性の読み解き

| 側面 | MTBJ／CBJ（国内専業） | メガバンク信託銀行部門 | グローバルカストディアン（日本） |
|---|---|---|---|
| 公的委任料金 | 非開示 | 非開示 | 日本部門については非開示 |
| エンティティまたはセグメントの結果 | MTBJ / CBJの法定開示 | 上場親会社セグメントの開示 | 親会社の証券サービスの開示 |
| 日本特有の顧客配分 | 包括的に開示されていない | 包括的に開示されていない | 個別に開示されないことが多い |
| 有効な公開比較 | 事業範囲と一貫して定義された報告数値 | 事業範囲と一貫して定義された報告数値 | 事業範囲と一貫して定義された報告数値 |

出典: ^[Official entity and parent disclosures. The reviewed public materials do not support a pricing-power ranking.]

粒度の細かいクロスバンクの手数料比較については [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]] を参照。

### 規制スタック

| レイヤー | 法令／規制当局 | MTBJ への含意 |
|---|---|---|
| 銀行監督 | 銀行法 + 金融庁監督指針（信託兼営銀行の節） | 自己資本充実度、流動性、ガバナンス、IT リスク監督；MTBJ は低リスクのバランスシートを運営するため資本は軽い |
| 信託業監督 | 信託業法 + 金融庁監督指針（信託業の節） | 信託勘定の分離、受託者責任ルール、利益相反管理、受託者責任の基準 |
| 証券法のオーバーレイ | 金融商品取引法 — 投資信託受託会社／カストディ業務 | NAV 計算の説明責任、カストディ基準、投信協会コンプライアンス |
| 年金規制 | 厚生年金保険法、確定給付企業年金法、確定拠出年金法 | 年金信託管理業務、受託者報告、加入者残高報告 |
| 預金保険 | 預金保険機構加盟 | 預金は僅少ながら法定加入 |
| AML／CFT | 金融庁 + 警察庁 + 国税庁 への報告 | 原顧客委託に適用されるカストディ側の AML |
| スチュワードシップ／コーポレートガバナンス | スチュワードシップ・コード（任意のコード） | 議決権行使管理の透明性への期待 |
| 記録管理／データ | 個人情報保護法、金融分野ガイドライン | 年金加入者データ、NISA 関連口座データ |

出典: ^[FSA trust-business financial-institution list, https://www.fsa.go.jp/menkyo/menkyoj/kenei.pdf; FSA bank supervisory guidance, https://www.fsa.go.jp/common/law/guide/city/.]

### 会計処理

| 項目 | 処理 |
|---|---|
| 信託勘定資産（「信託財産」） | MTBJ では**オフバランスシート**；実質的所有者ではオンバランスシート |
| カストディ手数料 | P&L で手数料収益として認識 |
| 預金（自己勘定預金） | オンバランスシート — ただし信託資産に対して小さい |
| 決済勘定の残余残高 | 短期；現金＋銀行預け金に含まれる |
| 資本 | 信託兼営銀行の法定最低資本＋内部バッファー |

出典: ^[MTBJ financial disclosures, https://www.mastertrust.co.jp/company/information.html; FSA supervisory materials.]

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

- 日本マスタートラスト信託銀行：公式サイト、会社概要、事業 / 資産運用ページ（「私たちの仕事」 — 日本の金融資産 2,351 兆円のうち信託資産 823 兆円を保管していると記載：https://www.mastertrust.co.jp/about/overview.html）、会社情報ページ（資本金 100 億円；株主 三菱 UFJ 信託 46.5% / 日本生命 33.5% / 明治安田 10.0% / 農中信託 10.0%；営業開始 2000-05-09：https://www.mastertrust.co.jp/company/information.html）。
- 信託協会：信託財産運用残高統計。
- FSA：信託業金融機関一覧、銀行免許一覧。
- JASDEC：証券振替・保管制度資料。
- JSCC：清算および DVP 現物株式資料。
- 日銀：JGB 振替決済システム資料。
- GPIF：公開の年次報告書および資産管理機関パネルの開示。
