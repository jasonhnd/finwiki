---
source: banking/custody-bank-operating-model
source_hash: 667beca79830e97d
lang: ja
status: machine
fidelity: ok
title: "日本カストディ銀行の事業モデル"
translated_at: 2026-06-02T11:47:37.286Z
---

# 日本カストディ銀行の事業モデル

## ウィキ上の位置づけ

このエントリは [[banking/INDEX|banking index]] の下にある。エンティティアンカー [[JapanFG/custody-bank|日本カストディ銀行 (CBJ)]]、事業上のピア [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]] およびエンティティ [[JapanFG/master-trust-bank|MTBJ]]、業界俯瞰の要約 [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]]、陣営横断マトリクス [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]]、事業比較 [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]] と合わせて読むこと。決済インフラ側については [[securities/japan-securities-depository-center|JASDEC]] および [[securities/japan-securities-clearing-corp|JSCC]] と、規制階層については [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] と、株主側の信託銀行ページ [[JapanFG/sumitomo-mitsui-trust|SMTB]] および [[JapanFG/mizuho-trust-bank|Mizuho Trust]] と、機関の文脈については [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]] とペアで読むこと。

## 要約

日本カストディ銀行（CBJ — 日本カストディ銀行）は、日本の二強の資産管理ユーティリティのもう一方の半分であり、JTSB（日本トラスティ・サービス信託銀行）とTCSB（資産管理サービス信託銀行）の 2020-07-27 合併によって設立された。その株主陣営は三井住友トラストグループ（33.3%）＋みずほFG（27.0%）＋りそな銀行（16.7%）＋第一生命（8.0%）＋生保（朝日／明治安田／かんぽ生命／富国）軸であり、MTBJのMUFG信託＋日本生命＋明治安田＋農林中金の陣営とは別である。事業面では、CBJはMTBJと同じ業務を行う。年金信託管理、証券投資信託管理、証券カストディを、銀行法＋信託業法のデュアルライセンス経路の下で、JASDEC＋日銀JGB決済への直接参加を伴って行う。その「日本カストディ銀行（信託口）」というノミニー名は、MTBJの「信託口」と並んで、あらゆるTOPIX発行体の株主名簿の上位に現れる。2020  合併は二つの重複システムを一つのマンデート基盤へと統合し、MTBJを生んだのと同じパッシブファンドの成長と年金資産規模に駆動された。CBJ＋MTBJを合わせると、日本の機関カストディ取扱量の大部分を占める。

## 1. 機関位置

| 項目 | CBJ |
|---|---|
| 法人名（JA） | 株式会社日本カストディ銀行 |
| 法人名（EN） | Custody Bank of Japan, Ltd. |
| 設立 | 2020-07-27（JTSB＋TCSB合併） |
| 本店 | 東京都中央区晴海 1-8-12 晴海アイランドトリトンスクエア オフィスタワー Z |
| ライセンス経路 | 銀行法＋信託業法（カストディ専業の信託銀行／信託兼営銀行） |
| 上場 | 非上場（複数FGの合弁） |
| 主たる規制当局 | 金融庁（FSA） |
| 業界団体 | 信託協会（Trust Companies Association of Japan） |
| 機能的位置づけ | 資産管理スペシャリスト（融資なし、PBなし、不動産信託なし、相続信託なし） |
| 公表AUCアンカー | 2025-03-31 時点で総預かり資産 約¥696 兆円（受託信託財産＋常任代理契約等に基づく預り資産；うち信託財産 ¥476兆円） |
| ピア | [[JapanFG/master-trust-bank|Master Trust Bank of Japan (MTBJ)]] |

### 株主構成（公開開示、2020-07-27 時点）

| 株主 | 出資比率 | 読み解き |
|---|---|---|
| [[JapanFG/sumitomo-mitsui-trust|三井住友トラストグループ (SMTH)]] | 33.3% | 筆頭信託銀行株主；SMTBの年金／投信顧客基盤からのマンデートフローを提供；JTSBの系譜 |
| [[JapanFG/mizuho-fg|みずほフィナンシャルグループ (Mizuho FG)]] | 27.0% | 第二の信託銀行株主（みずほ信託経由）；TCSBの系譜 |
| りそな銀行（Resona Bank） | 16.7% | 第三位の株主；TCSB陣営における大和／あさひ信託の系譜 |
| [[JapanFG/dai-ichi-life|第一生命保険]] | 8.0% | 生保株主；特別勘定カストディと企業年金マンデートフローを提供 |
| 朝日生命保険 | 5.0% | 生保株主（TCSB系） |
| 明治安田生命保険 | 4.5% | 生保株主 |
| かんぽ生命保険 | 3.5% | 生保株主 |
| 富国生命保険 | 2.0% | 生保株主（TCSB系） |

### なぜ一つではなく二つの専業カストディアンなのか

2020-07  合併はJTSBとTCSBを統合したが、MTBJとの合併までは至らなかった。公的な読み解きは以下のとおり：

1. 株主政治 — MUFG／生保軸とSMTB／みずほ／りそな／生保軸は、支配権を手放さずに容易には統合できない。
2. リスク集中 — 日本の機関資産管理は単一のユーティリティに依存できない（オペレーショナルリスク＋カウンターパーティリスク＋議決権集中）。
4. コストアービトラージ — 各陣営内の重複システム（SMTB／みずほ陣営内のJTSB対TCSB）は冗長だったが、陣営間の重複は競争上のチェックを生む。

2020  合併は**陣営内**の統合を達成した。陣営間の統合（CBJ＋MTBJ）は依然として未解決の問いである。

### 系譜図

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

### 事業ライン図

| セグメント | 中核機能 | 典型的な顧客基盤 | これに当たらないもの |
|---|---|---|---|
| **信託カストディ（証券カストディ）** | 株式、JGB、社債、外国証券の保管；振替登録；コーポレートアクション処理；配当／利金の受領；税還付業務 | 年金、アセットマネージャー、生保、日本のサブカストディアンを必要とする外国グローバルカストディアン | 自己勘定投資家ではない；「信託口」ノミニー名はあくまで記録管理上の構成 |
| **年金信託（年金信託管理）** | 厚生年金基金、DB、DCプランの信託契約 — 記録管理、資産オーナー報告、給付支払業務 | GPIF、大企業のDBプラン、DCプラン管理者 | 運用者ではない |
| **投信受託（証券投資信託管理）** | 公募投信／私募投信の信託契約 — ファンドアカウンティング、NAV計算、保有銘柄登録、分配処理 | CBJを受託会社として使うアセットマネージャー（特にSMTB AM系列、みずほAM、りそなAM系列） | ファンドマネージャーや販売会社ではない |
| **特定金銭信託（特金）業務** | 機関／法人投資家向けの特金ビークル | 保険会社、事業法人、地方銀行 | 一任のアセットマネージャーではない |
| **資産管理サービス（マスターカストディ）** | 機関のマスターカストディ、複数マンデートの統合、運用指図処理 | 大規模な複数マンデートの資産オーナー | スポンサーではない |

### 業務機能の内訳

| 機能 | 説明 |
|---|---|
| 保管・振替管理 | [[securities/japan-securities-depository-center|JASDEC]] 振替制度への直接接続；日銀JGB直接口座保有者；現金決済口座の運用 |
| 決済（現物株式） | JASDEC＋JSCCクリアリングを介したDVP-X1 ／DVP-X2 ／DVP-X3 決済 |
| 決済（JGB） | 日銀JGB振替制度への直接参加 |
| 決済（社債／CP） | 社債およびCPについてJASDEC経由の振替 |
| ファンドアカウンティング／NAV計算 | 投信マンデートの日次NAV計算；投信協会基準 |
| コーポレートアクション | 配当／利金の受領、株式分割、ライツオファリング、転換；外国資産のCAはグローバルカストディアンのサブネットワーク経由 |
| 議決権行使業務 | 資産オーナー／運用者の指図の機械的執行；ICJ電子投票の転送 |
| 外国資産のサブカストディ | 非日本資産について [[JapanFG/bny-mellon-japan|BNY Mellon]] ／ [[JapanFG/state-street-japan|State Street]] ／ [[JapanFG/jpmorgan-japan|JP Morgan]] ／ [[JapanFG/citigroup-japan|Citi]] 経由でのリルーティング |
| メンバー／参加者業務 | 年金加入者残高報告（DB／DC）、給付支払業務 |
| 証券貸借サポート | 貸借プログラム管理（顧客が選択した場合）；担保差し入れ；リコール管理 |

### 「信託口」ノミニー面 — CBJ固有

CBJのノミニー名「日本カストディ銀行（信託口）」は、ほぼすべてのTOPIX-100 発行体の大株主行に現れ、しばしばMTBJの「信託口」に次ぐ 2位または 3位となる。パターンは以下のとおり：

| 読み解き | 解釈 |
|---|---|
| 法的記録名 | CBJ |
| 実質的所有者 | SMTB側アセットマネージャー、みずほ側アセットマネージャー、りそな側アセットマネージャー、第一生命の特別勘定、朝日／明治安田／富国生命の勘定、CBJの外国サブカストディ顧客 |
| 議決権指図の出所 | 上流のアセットマネージャーまたは資産オーナー — CBJではない |
| 原エクスポージャーの種類 | 主にパッシブインデックス＋アクティブ年金マンデート＋投信保有 |

### MTBJとの比較 — 事業詳細の比較

| 項目 | CBJ | MTBJ |
|---|---|---|
| 設立 | 2020-07-27（JTSB＋TCSB合併） | 2000-05 （グリーンフィールド） |
| 株主陣営 | SMTH 33.3% ＋みずほFG 27.0% ＋りそな 16.7% ＋第一生命 8.0% ＋朝日／明治安田／かんぽ／富国 生保 | MUFG信託＋日本生命＋明治安田＋農林中金 |
| 筆頭株主の出資比率 | 三井住友トラストグループ（SMTH） 33.3% | MUFG信託 46.5% |
| 公表AUCアンカー | ~¥696兆円（2025-03-31；総預かり資産） | ~¥770兆円（2025-03-31；管理資産残高） |
| 本店所在地 | 東京都中央区晴海 | 東京都港区浜松町 |
| 法的構造・ライセンス | 銀行法＋信託業法（カストディ専業） | 銀行法＋信託業法（カストディ専業） |
| 融資／預金 | なし／極小 | なし／極小 |
| 不動産信託 | なし | なし |
| 相続信託 | なし | なし |
| PB／ウェルス | なし | なし |
| 不動産信託 | なし | なし |
| JASDEC直接 | あり（大量） | あり（大量） |
| 日銀JGB直接 | あり | あり |
| JSCC直接 | あり | あり |
| ICSD（Euroclear／Clearstream）直接 | なし（グローバル経由でリルーティング） | なし（グローバル経由でリルーティング） |
| GPIFカストディアン採用 | あり（リソースプールの一つ） | あり（リソースプールの一つ） |
| 上場 | 非上場 | 非上場 |

### フルサービス信託銀行との比較

| 次元 | CBJ | メガバンクのフルサービス信託銀行（MUFG信託／SMTB／みずほ信託） |
|---|---|---|
| カストディ／投信受託 | 中核機能（ユーティリティ規模） | 内部で運営＋しばしば処理をCBJ／MTBJに委託 |
| 不動産信託 | なし | 主要な事業ライン（不動産証券化、J-REIT） |
| 相続／遺言／PB | なし | あり — 相当のウェルスマネジメント収益 |
| 不動産信託＋信託受益権（J-REIT） | なし | あり — フル処理 |
| 証券代行（株式事務代行） | なし | あり |
| 年金フロントオフィス（運用提案） | なし | あり |
| DCサービス窓口 | 限定的（管理のみ） | フロントオフィス＋管理 |

CBJが**処理**を行い、その信託銀行株主が**顧客リレーション＋フロントオフィスのマンデート**を担う。この垂直的な分担は意図的なものであり、信託銀行株主がCBJを連結事業へ再び吸収していない理由である。

### グローバルカストディアンとの比較

| 次元 | CBJ | グローバルカストディアン（BNY Mellon／State Street／JPM／Citi Japan） |
|---|---|---|
| 主たる資産ユニバース | 国内日本資産 | クロスボーダー＋外国投資家の日本サブカストディ |
| ICSD接続性 | 間接（グローバル経由） | 直接 |
| 議決権行使管理 | あり（機械的、ICJ連携） | あり（Broadridge等経由） |
| 日本カストディの価格決定力 | 高い（ユーティリティ規模） | 中程度（サブカストディのプレミアム） |
| 外国カストディの価格決定力 | 低い（グローバルへサブロール） | 高い |
| 規制基盤 | FSAのみ | FSA＋本国規制当局（FRB／OCC／ECB／PRA） |
| G-SIBステータス | なし | 親会社4社すべてがG-SIB |

## 4. 手数料・収益構造

CBJは詳細な手数料表を公表していない。公開情報からの読み解きは以下のとおり：

| 収益ライン | 価格設定の基準 | 公開可視性 |
|---|---|---|
| 年金信託管理手数料 | AUCのbps（GPIF／大規模DB規模では極めて低い） | 個別項目レベルでは非開示（CBJは詳細な手数料表を公表していない） |
| 投信受託管理手数料 | AUCのbps — NAVの年 0.01-0.05% が典型 | 信託約款でファンドごとに開示 |
| 証券カストディ手数料 | 資産クラスごとのAUCのbps＋件数あたりの決済手数料 | 非公開 |
| 議決権／CA管理 | 通常はカストディ手数料に内包 | 個別には非開示 |
| 証券貸借エージェント手数料 | 実質的所有者とのレベニューシェア | 個別には非開示 |
| 現金残高の利息収入 | 低い | 個別には非開示 |

### CBJの手数料経済がMTBJに近似する理由

両者とも同様のマンデート規模に対して同じ商品セットを運営している。両者の手数料価格設定は以下によってアンカーされる：

2. **GPIFの入札圧力** — GPIFは定期的に資産管理機関のパネルを実施し、CBJとMTBJの両者が競合する；両者ともインカンベント価格とチャレンジャー価格を提示。
3. **パッシブファンドのAUM成長** — パッシブインデックスファンドはCBJ管理AUCを押し上げる一方でbpあたり手数料を押し下げ、出来高増／マージン減のダイナミクスを生む。

### 銀行横断の手数料経済の読み解き

MTBJ＋CBJ＋メガバンク信託部門＋グローバルカストディアンの詳細な手数料比較については [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]] を参照。

| 観点 | CBJ | MTBJ |
|---|---|---|
| アセットマネージャーに対する価格決定力 | 高い（ユーティリティ規模） | 高い（ユーティリティ規模） |
| 年金信託管理手数料のトレンド | 大規模マンデートで安定〜やや圧縮 | 同じ |
| 外国資産カストディ | グローバルからのパススルーコスト | グローバルからのパススルーコスト |
| コスト側の規模 | 高い固定IT費用；マンデートあたりの限界費用は極めて低い | 同じ — 両者ともユーティリティ経済で運営 |

### 規制スタック

| 層 | 法令／規制当局 | CBJへの含意 |
|---|---|---|
| 銀行監督 | 銀行法＋金融庁 監督指針（信託兼営銀行のセクション） | 自己資本充実＋ガバナンス＋ITリスク；CBJは軽い与信ブックを運営し、結果としてAUCに対して軽い自己資本比率となる |
| 信託業監督 | 信託業法＋金融庁 監督指針（信託業のセクション） | 信託勘定の分別、受託者責任、利益相反管理 |
| 証券法のオーバーレイ | 金融商品取引法 — 投信受託会社／カストディ業務 | NAV計算、カストディ基準、投信協会コンプライアンス |
| 年金規制 | 厚生年金保険法、確定給付企業年金法、確定拠出年金法 | DB／DC管理、受託者報告 |
| 預金保険 | 預金保険機構加盟 | 法定の加盟；小さい預金基盤を踏まえると関連性は軽微 |
| AML／CFT | 金融庁＋警察庁＋国税庁への報告 | カストディ側のAMLは原顧客レベルで適用 |
| スチュワードシップ／ガバナンス | スチュワードシップ・コード（任意） | 議決権行使管理の透明性；CBJは顧客指図どおりに執行 |
| データ／個人情報 | 個人情報保護法、金融分野ガイドライン | 年金加入者データ、NISAデータ |

### 会計処理

| 項目 | 処理 |
|---|---|
| 信託資産（信託財産） | CBJではオフバランス；実質的所有者ではオンバランス |
| カストディ／管理手数料 | P&L上で手数料収入として認識 |
| 自己勘定の預金 | オンバランス — 小さい |
| 決済口座の残余 | 短期；現金＋銀行預け金 |
| のれん／合併会計（2020） | JTSB＋TCSB合併時に認識；詳細は株主の連結開示に記載 |

### 合併会計に関する注記

2020-07-27 のJTSB＋TCSB合併は複数年にわたるシステム統合を伴った；統合コストはCBJのP&Lを通過し、株主親会社の連結信託銀行事業セグメントで吸収された。詳細なコスト回収とITの償却プロファイルは非開示である（CBJは非上場であり、要約数値のみを報告する；合併のれんの詳細は株主親会社の連結開示にある）。

## 6. JASDEC／クリアリングインフラとの接続

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

### JASDECへの直接参加

CBJは以下の直接参加者である：

- 株式振替制度（無券面化された上場株式）
- 一般債振替制度（社債：普通社債、転換社債）
- 短期社債振替制度（CP）
- 投資信託振替制度（公募投信の受益権）

### JSCC＋DVP

CBJの現物株式決済は [[securities/japan-securities-clearing-corp|JSCC]] を中央清算機関として通り、DVP-X1 ／X2 ／X3 品質の決済を生む。JSCCはレポおよびOTCデリバティブのCCPサービスも運営する — これらの層へのCBJのエクスポージャーは個別の顧客マンデートのスコープに依存する。

### 日銀JGB振替

CBJは日銀JGB振替制度に直接口座を保有し、中間サブカストディなしで年金および投信マンデートのDVP JGB決済をサポートする。

### 外国資産のサブカストディチェーン

CBJ管理マンデート内の非日本資産については：

```
CBJ (record-name trust-account)
  → Global custodian (BNY / State Street / JPM / Citi)
    → Local sub-custodian in foreign market
      → Local CSD
```

## 関連項目

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
- [[JapanFG/custody-bank]]
- [[JapanFG/master-trust-bank]]
- [[JapanFG/sumitomo-mitsui-trust]]
- [[JapanFG/mizuho-trust-bank]]
- [[JapanFG/mitsubishi-ufj-trust-bank]]
- [[JapanFG/dai-ichi-life]]
- [[JapanFG/bny-mellon-japan]]
- [[JapanFG/state-street-japan]]
- [[JapanFG/jpmorgan-japan]]
- [[JapanFG/citigroup-japan]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## 出典

- 日本カストディ銀行：公式サイト、会社案内、業務説明、会社情報ページ、英語コーポレートページ。
- 三井住友信託銀行「スケールメリットの追求」資産管理業務ページ（CBJ AUC: 総預かり資産 約696兆円 / 信託財産 476兆円、2025-03-31）— https://www.smtb.jp/business/instrument/management/scale
- 日本マスタートラスト信託銀行 2024 年度決算（MTBJ 管理資産残高 約770兆円、2025-03-31）— https://www.mastertrust.co.jp/assets/pdf/financial/zm20250521.pdf
- 信託協会：信託財産残高統計。
- FSA：信託業金融機関一覧、銀行免許一覧。
- JASDEC：証券振替・保管制度資料。
- JSCC：クリアリングおよびDVP現物株式資料。
- 日銀：JGB振替決済制度資料。
- Wikipedia（相互参照）：株式会社日本カストディ銀行、JTSB、TCSBの沿革エントリ。— CBJ 株主構成（2020-07-27 現在）：三井住友トラストグループ 33.3% / みずほ FG 27.0% / りそな銀行 16.7% / 第一生命 8.0% / 朝日生命 5.0% / 明治安田生命 4.5% / かんぽ生命 3.5% / 富国生命 2.0%。https://ja.wikipedia.org/wiki/日本カストディ銀行 （2026-05-30 確認。旧版の「SMTB ~46.5% / Mizuho ~27% / Daiwa-affiliated」の出資者表記を訂正。46.5% は日本マスタートラスト信託における MUFG 信託の比率の誤転記、Daiwa Securities は CBJ の株主ではなく正しくは りそな銀行 16.7%）
