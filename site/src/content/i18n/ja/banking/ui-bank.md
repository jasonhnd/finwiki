---
source: banking/ui-bank
source_hash: eac0d1f4be525cfd
lang: ja
model: google-translate-guarded-line-sync+manual-review
status: machine
fidelity: ok
title: "UI 銀行 事業プロファイル（UI銀行 / きらぼし FG 系）"
translated_at: 2026-07-29T03:30:48.122Z
---

# UI 銀行 事業プロファイル（UI銀行 / きらぼし FG 系）

## ウィキ経路

本エントリは [[banking/INDEX|banking index]] の配下に位置し、[[regional-banks/ui-bank|UI銀行 entity anchor]] にあるエンティティ・アンカーに対する事業プロファイルの補完として置かれている。[[banking/japan-net-bank-competition-map|Japan net bank competition map]] のセグメントマップの中で、地域デジタル銀行ピアである [[banking/minna-bank-baas-model|Minna Bank BaaS model]] · [[regional-banks/01-bank|01 Bank]] の隣で読み、親コンテキストである [[regional-banks/kiraboshi-fg|東京きらぼし FG]] および [[regional-banks/kiraboshi-bank|きらぼし銀行]] とともに、より広範なスマートフォンファースト・バンキングの流通比較のためにエコシステム・ネット銀行コホート [[banking/rakuten-bank|Rakuten Bank]] · [[banking/paypay-bank|PayPay Bank]] · [[banking/au-jibun-bank|au Jibun Bank]] · [[banking/sony-bank|Sony Bank]] と対比すること。地域グループのデジタル戦略の視点については [[banking/regional-bank-api-digital-partnership-route|regional bank API digital partnership route]] と組み合わせること。

## TL;DR

UI銀行は東京きらぼしフィナンシャルグループの普通銀行であり、スマートフォンを中心としたバンキングサービスを提供しています。そのライセンスと法人は FSA 銀行登録簿で確認する必要があります。商品やグループ関係はUI Bankおよび東京きらぼしFGの公式ページでご確認ください。ここでは、変動する残高、口座数、レート、およびピアランキングは、日付を付けた一次開示なしに意図的に凍結されていません。

## 1. アイデンティティとグループ内ポジション

| 項目 | 読み |
|---|---|
| 正式名称 | 株式会社UI銀行 |
| 英語名称 | UI Bank Co., Ltd. |
| 開業 | 2022-01-04 |
| 銀行免許区分 | 普通銀行（銀行法に基づく普通銀行）、FSA「その他の銀行」に分類 |
| 親会社 | [[regional-banks/kiraboshi-fg|東京きらぼし FG]]（100%） |
| 姉妹銀行 | [[regional-banks/kiraboshi-bank|きらぼし銀行]] — 親グループの主たる地域銀行（東京中心） |
| 本店 | 東京 |
| チャネル・アーキテクチャ | スマートフォンアプリ + ウェブ；物理的な支店なし |
| 主管規制当局 | 金融庁（FSA） |

出典: ^[UI Bank corporate information, https://www.uibank.co.jp/info/; FSA licensed-bank register, https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx; Tokyo Kiraboshi FG corporate site, https://www.tokyo-kiraboshifg.co.jp/.]

### なぜ きらぼし銀行 とは別免許なのか

1. **コスト基盤の分離。** 新規免許は、きらぼし銀行のレガシー IT および支店オーバーヘッドのコスト基盤を継承することなく、クラウドネイティブなコアバンキングの上に構築できる。
2. **顧客セグメントの特化。** UI銀行は、レガシーな支店・アプリのデュアルモード銀行の設計上の妥協なしに、スマートフォンファーストのユーザー向けにエンドツーエンドで設計できる。
3. **規制上の明瞭性。** スタンドアロン免許により、資本・リスク・BaaS パートナーシップの開示を明確に区分できる。これは、デジタル事業が地域銀行のセグメント報告に束ねられている場合には難しい。

### グループ構造

```
東京きらぼし FG (TSE Prime, 7173)
  ├── きらぼし銀行 (regional bank, Tokyo-centred branch network)
  ├── UI Bank (this entry — nationwide smartphone-first digital bank)
  └── Other group financial subsidiaries
```

### 口座、預金、決済

| 商品 | 役割 |
|---|---|
| 円普通預金 | コア口座、アプリ内でエンドツーエンドに開設 |
| 円定期預金 | 主要預金の獲得を狙ったプロモーション金利 |
| 振込 / 振込 | UI銀行内および全銀システム経由の外部の双方 |
| デビットカード | 口座に連携した UI銀行ブランドのデビットカード |
| パートナー接続 | API を通じた外部の電子決済等代行業者（決済仲介業者）への接続性に加え、グループサービス連携（例：ララ Pay プラス、UI プラス階層向けの きらぼし銀行 口座連携） |

### ローンと信用

UI銀行は預金先行で立ち上がり（当初は 2022 開業時に預金中心）、その後リテールローンのメニューを構築してきた。スマートフォンローン（UI プラン）、フリーローン、オートローン、教育ローン、リフォームローン、ドクターローン、おまとめローン、当座貸越枠（UI サポート / 当座貸越）、住宅ローン — すなわち、メガバンク規模の法人ローン・フランチャイズではなく、消費者 / リテール向け貸出のセットである。具体的な商品メニューは進化するため、現行のメニューは UI銀行の現在の商品ページを参照すること。

### スマートフォンファースト UX

UX アーキテクチャは、銀行口座、預金、決済、振込、生活パートナー機能を単一のアプリへ明示的に束ねている。「対面・非対面のハイブリッド」という枠組みは、UI銀行が きらぼし銀行 の法人顧客や外部アライアンスと提携した場合に店頭の接点へ統合できることを意味するが、デフォルトの表層はモバイル専業である。^[extracted]

### UI銀行が競合する領域

| 確認の質問 | 主な公式証拠 |
|---|---|
| 現在提供されている口座と預金は何ですか? | UI Bank の現在の商品ページと顧客規約 |
| 現在利用可能なローンはどれですか? | UI Bankの現在のローンメニューと商品条件 |
| どのグループまたは外部サービスが稼働中ですか? | UI Bank / 東京きらぼしFG日付発表 |
| どの KPI を比較できますか? | 公式開示文書内の同じ日付、同じ定義の数値 |

出典: ^[UI Bank official site, https://www.uibank.co.jp/; UI Bank service page, https://www.uibank.co.jp/service/uiplus/; Tokyo Kiraboshi FG IR, https://www.tokyo-kiraboshifg.co.jp/ir/.]

### 3行の地域デジタル比較

| 寸法 | 比較する前に必要な証拠 |
|---|---|
| ライセンスを取得したエンティティと開始日 | 金融庁登記簿と各銀行の正式な会社の歴史 |
| 親子関係 | 現在のグループ組織または有価証券の開示 |
| ダイレクトチャネル | 現在の公式サービスとアプリのページ |
| BaaS / パートナーチャネル | 両当事者による名前と日付が記載された発表 |
| 規模と成長 | 互換性のある定義を使用した同期間の公式財務/KPI 開示 |

出典: ^[FSA licensed-bank register, https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx; official company and IR pages for UI Bank, Fukuoka FG / Minna Bank, and Resona group.]

## 4. KPI とフランチャイズの形状

UI銀行は、きらぼし FG IR 資料および自社のディスクロージャー刊行物を通じて、選択的な KPI 更新を公表している。時点ごとの預金残高と口座数はそこに現れる。ローンチ後の初期数年を通じたフランチャイズのパターンは以下のとおり。

| メトリック | 掲載ルール |
|---|---|
| アカウント数 | 発行者の口座定義を保持したまま、日付付きの UI Bank または Tokyo Kiraboshi FG の開示情報からのみ発行します。 |
| 預金残高 | 貸借対照表の日付、単位、および法人の境界のみを指定して発行します |
| ローン残高/ミックス | 公式開示を使用する。製品メニューから本のサイズを推測しないでください |
| 自己資本及び自己資本比率 | 銀行の法定開示を利用し、報告された根拠を維持する |

出典: ^[Tokyo Kiraboshi FG IR, https://www.tokyo-kiraboshifg.co.jp/ir/; UI Bank corporate information, https://www.uibank.co.jp/info/.]

## 5. 規制・政策の境界

| レイヤー | 法令 / 規制当局 | 含意 |
|---|---|---|
| 銀行監督 | 銀行法 + 金融庁 監督指針 | デジタル専業銀行に適用される標準的な普通銀行監督 |
| オープンバンキング API | 2017 銀行法 改正 | API 提供義務；UI銀行の接続性ストーリーはこの体制を活用する |
| 預金保険 | 預金保険機構 | 標準的な円預金保険の保護 |
| サイバーセキュリティ / IT レジリエンス | FSA IT 統合的監督指針 + サイバーセキュリティ報告 | デジタル専業銀行は高度な IT レジリエンスの期待に直面する |
| AML / CFT | 金融庁 + FATF 第 4 次審査 | FATF 審査後、オンラインオンボーディングの eKYC コンプライアンスが強化 |
| 親銀行の統合 | 銀行法 + 金融商品取引法 | グループとエンティティの開示は区別する必要がある |

出典: ^[FSA licensed-bank register, https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx; FSA bank supervisory guidance, https://www.fsa.go.jp/common/law/guide/city/.]

## 関連

- [[banking/INDEX]]
- [[banking/japan-net-bank-competition-map]]
- [[banking/regional-bank-api-digital-partnership-route]]
- [[banking/regional-bank-consolidation-pattern]]
- [[banking/baas-japan-landscape]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/minna-bank-baas-model]]
- [[banking/japan-baas-operating-models]]
- [[banking/sony-bank]] · [[banking/daiwa-next-bank]] · [[banking/gmo-aozora-net-bank]]
- [[banking/rakuten-bank]] · [[banking/paypay-bank]] · [[banking/au-jibun-bank]]
- [[regional-banks/ui-bank]]
- [[regional-banks/kiraboshi-fg]]
- [[regional-banks/kiraboshi-bank]]
- [[regional-banks/01-bank]]
- [[financial-licenses/bank-license-and-baas-boundary]]

## 出典

- UI銀行 コーポレート / 商品サイト（https://www.uibank.co.jp/）。
- UI銀行 会社情報ページ（https://www.uibank.co.jp/info/）。
- UI銀行 UI プラス / サービスページ — ローンメニュー（UI プラン スマートフォンローン、フリー / オート / 住宅 / ドクターローン、UI サポート 当座貸越）、API 接続の電子決済等代行業者連携、定期預金（https://www.uibank.co.jp/service/uiplus/）。
- 東京きらぼしフィナンシャルグループ コーポレート / IR サイト（https://www.tokyo-kiraboshifg.co.jp/）。
- FSA 免許銀行一覧（https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx）。
