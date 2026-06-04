---
source: banking/ui-bank
source_hash: 27571fd80b07055e
lang: ja
status: machine
fidelity: ok
title: "UI Bank の事業プロファイル(UI銀行 / きらぼし FG 系)"
translated_at: 2026-06-02T11:47:37.316Z
---

# UI Bank の事業プロファイル(UI銀行 / きらぼし FG 系)

## ウィキ上の位置づけ

本項目は [[banking/INDEX|banking index]] の下に位置し、[[regional-banks/ui-bank|UI銀行 entity anchor]] にある主体アンカーに対する事業プロファイルの companion である。[[banking/japan-net-bank-competition-map|Japan net bank competition map]] のセグメントマップの中で、地域系デジタル銀行の同類 [[banking/minna-bank-baas-model|Minna Bank BaaS model]] · [[regional-banks/01-bank|01 Bank]] と並べて、親会社の文脈 [[regional-banks/kiraboshi-fg|東京きらぼし FG]] および [[regional-banks/kiraboshi-bank|きらぼし銀行]] とともに読み、より広いスマートフォンファーストの銀行流通の比較のためにエコシステム系ネット銀行のコホート [[banking/rakuten-bank|Rakuten Bank]] · [[banking/paypay-bank|PayPay Bank]] · [[banking/au-jibun-bank|au Jibun Bank]] · [[banking/sony-bank|Sony Bank]] と対照すること。地域グループのデジタル戦略の観点については [[banking/regional-bank-api-digital-partnership-route|regional bank API digital partnership route]] と組み合わせて読むこと。

## 要約

UI銀行(UI Bank Co., Ltd.)は、[[regional-banks/kiraboshi-fg|東京きらぼし FG]] のスマートフォンファーストのデジタル銀行子会社であり、グループの単独デジタル銀行として **2022-01-04** に開業した。その戦略ロジックは、親の地方銀行([[regional-banks/kiraboshi-bank|きらぼし銀行]])が東京を中心とする支店銀行業務をカバーする一方、UI Bank は、レガシーな支店網ではコスト効率よく対応できない全国規模・スマートフォン専用の顧客ジャーニーを担うというものである。UI Bank は、[[banking/minna-bank-baas-model|Minna Bank]]([[regional-banks/fukuoka-fg|Fukuoka FG]])および [[regional-banks/01-bank|01 Bank]]([[megabanks/saitama-resona-bank|Saitama Resona]] / りそなグループ)と並ぶ、意味のある三つの地域グループ系デジタル銀行の一つであり、それぞれ異なるアーキテクチャ上の読み解きを持つ:みんなの銀行は BaaS のパートナーチャネル流通に特化し、01 Bank はりそなグループのクロスセルに焦点を当て、UI Bank は API 接続性を伴うスマートフォンファーストのライフパートナー型金融 UX を強調する。預金残高は 2022  の開業以来着実に成長してきたが、依然として 1 兆円未満(2025-03-31 時点で約 ¥0.7 兆 / ¥6,952億)にとどまり、エコシステム系銀行の同類(同日時点で [[banking/rakuten-bank|Rakuten Bank]] ¥11.5兆 / [[banking/paypay-bank|PayPay Bank]] ¥1.9兆 / [[banking/au-jibun-bank|au Jibun]] ¥4兆+)より一桁小さい。戦術的ポジショニングは、単一のモバイルファースト UX 層を通じた、銀行、貯蓄、決済、生活サービスの収束を強調する。

## 1. アイデンティティとグループ内の位置

| 項目 | 内容 |
|---|---|
| 法人名 | 株式会社UI銀行 |
| 英名 | UI Bank Co., Ltd. |
| 開業 | 2022-01-04 |
| 銀行免許区分 | 普通銀行(銀行法に基づく)、FSA「その他の銀行」に分類 |
| 親会社 | [[regional-banks/kiraboshi-fg|東京きらぼし FG]](100%) |
| 姉妹銀行 | [[regional-banks/kiraboshi-bank|きらぼし銀行]] — 親グループの主要な地方銀行(東京中心) |
| 本店 | 東京 |
| チャネルアーキテクチャ | スマートフォンアプリ + ウェブ、物理店舗なし |
| 主たる監督当局 | 金融庁(FSA) |

### なぜ きらぼし銀行 とは別免許なのか

1. **コスト基盤の分離。** 新免許は、きらぼし銀行のレガシーな IT および支店オーバーヘッドのコスト基盤を引き継ぐことなく、クラウドネイティブな勘定系の上に構築できる。
2. **顧客セグメントの特化。** UI Bank は、レガシー支店とアプリのデュアルモード銀行が抱える設計上の妥協なく、スマートフォンファーストのユーザー向けにエンドツーエンドで設計できる。
3. **規制上の明確性。** 単独の免許は、資本、リスク、BaaS パートナーシップの開示を区別できるようにする。これは、デジタル事業が地方銀行のセグメント報告の中に束ねられていると、より難しい。

### グループ構造

```
東京きらぼし FG (TSE Prime, 7173)
  ├── きらぼし銀行 (regional bank, Tokyo-centred branch network)
  ├── UI Bank (this entry — nationwide smartphone-first digital bank)
  └── Other group financial subsidiaries
```

### 口座・預金・決済

| 商品 | 役割 |
|---|---|
| 円普通預金 | コア口座、アプリ内でエンドツーエンドに開設 |
| 円定期預金 | 主要預金を呼び込むために設定された優遇金利 |
| 振込 | UI Bank 行内および全銀システム経由の対外の双方 |
| デビットカード | 口座に紐づく UI Bank ブランドのデビットカード |
| パートナー接続 | API 経由の外部 電子決済等代行業者 への接続性に加え、グループサービス連携(例:ララ Pay プラス、UI プラスの各ティアにおける きらぼし銀行 口座連携) |

### 貸出とクレジット

UI Bank は預金先行で(2022  の開業当初は預金中心で)スタートし、その後リテールローンのメニューを構築してきた:スマートフォンローン(UI プラン)、フリーローン、オートローン、教育ローン、リフォームローン、ドクターローン、おまとめローン、当座貸越枠(UI サポート / 当座貸越)、住宅ローン — すなわち、メガバンク規模の法人ローンフランチャイズではなく、消費者 / リテール向けの貸出セットである。個別の商品メニューは変化するため、現行のメニューについては UI Bank の最新の商品ページを参照のこと。

### スマートフォンファーストの UX

UX アーキテクチャは、銀行口座、預金、決済、振込、そして 生活パートナー の機能を、明示的に単一のアプリに束ねている。「対面・非対面のハイブリッド」というフレーミングは、きらぼし銀行 の法人顧客や外部アライアンスと提携した際に、UI Bank が店頭タッチポイントへ統合できることを意味するが、デフォルトのサーフェスはモバイル専用である。^[extracted]

### UI Bank はどこで競争するか

| 軸 | ポジション |
|---|---|
| スマートフォンファーストの預金成長 | 活発、口座開設フローはアプリ内オンボーディング向けに最適化 |
| きらぼし銀行 法人顧客とのクロスセル | グループ連携を通じて可能 — 給与振込スキーム、法人ペイロール、提携事業者連携 |
| ライフスタイル / パートナーサービス統合 | エコシステムポイント主導の同類に対する差別化の UX 軸 |
| 地理的リーチ | モバイル経由で全国(きらぼし銀行 の東京焦点に対して) |

### 三行の地域系デジタル銀行比較

| 観点 | UI Bank(本項目) | [[banking/minna-bank-baas-model|Minna Bank]] | [[regional-banks/01-bank|01 Bank]] |
|---|---|---|---|
| 親グループ | [[regional-banks/kiraboshi-fg|東京きらぼし FG]] | [[regional-banks/fukuoka-fg|Fukuoka FG]] | [[megabanks/resona-hd|Resona HD]] / [[megabanks/saitama-resona-bank|Saitama Resona]] |
| 開業 | 2022-01 | 2021-05 | より後発 |
| チャネルアーキテクチャ | スマートフォン + ウェブ | BaaS パートナージャーニー + 直販アプリ | りそなグループのクロスセル + 直販アプリ |
| 戦略軸 | スマートフォンファーストのライフパートナー型銀行 + API | フルな BaaS — パートナーブランドが顧客ジャーニーを保有 | グループ顧客向けのデジタル付属物 |
| BaaS の深さ | より軽い | 三行の中で最も重い | より軽い |
| 直販 UX の成熟度 | 成長中 | 強いアプリ UX | 成長中 |

## 4. KPI とフランチャイズの形状

UI Bank は、きらぼし FG の IR 資料および自社の開示刊行物を通じて、選択的な KPI 更新を公表しており、特定時点の預金残高および口座数はそこに現れる。ローンチ後の初期数年を通じたフランチャイズのパターンは以下のとおり:

| 指標 | パターン |
|---|---|
| 口座数 | 2023-03-31 時点で約 73,000 口座、成長しているがエコシステム系銀行の同類より一桁少ない(また、2022  の開業時に掲げられた 3年 約 2.7-3.0m の目標を大きく下回る) |
| 預金残高 | 2025-03-31 時点で約 ¥6,952億(≈¥0.7兆) — 1 兆円未満で、[[banking/rakuten-bank|Rakuten Bank]](¥11.5兆)や [[banking/paypay-bank|PayPay Bank]](¥1.9兆)を大きく下回る |
| ローン残高 | リテール / 消費者ローン中心(スマートフォンローン、フリー / オート / 住宅ローン)、絶対額では控えめ |
| 資本 | 銀行法の最低基準を上回る、若いデジタル銀行としては相対的に低い事業リスクのバランスシート |

## 5. 規制・政策上の境界

| 層 | 法令 / 当局 | 含意 |
|---|---|---|
| 銀行監督 | 銀行法 + 金融庁 監督指針 | デジタル専業銀行に適用される標準的な普通銀行監督 |
| オープンバンキング API | 2017 銀行法 改正 | API 提供義務、UI Bank の接続性ストーリーはこの制度を活用 |
| 預金保険 | 預金保険機構 | 標準的な円預金保険のカバレッジ |
| サイバーセキュリティ / IT レジリエンス | FSA IT 統合的監督指針 + サイバーセキュリティ報告 | デジタル専業銀行は IT レジリエンスへの期待が高まる |
| AML / CFT | 金融庁 + FATF 第 4 次審査 | FATF 審査後、オンラインオンボーディングの eKYC コンプライアンスが強化 |
| 親銀行の連結 | 銀行法 + 金融商品取引法 — りそな型の持株ルール | きらぼし FG を通じた連結監督 |

## 関連項目

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

- UI Bank コーポレート / 商品サイト(https://www.uibank.co.jp/)。
- UI Bank 会社情報ページ(https://www.uibank.co.jp/info/)。
- UI Bank UI プラス / サービスページ — ローンメニュー(UI プラン スマートフォンローン、フリー / オート / 住宅 / ドクターローン、UI サポート 当座貸越)、API 接続の 電子決済等代行業者 連携、定期預金(https://www.uibank.co.jp/service/uiplus/)。
- Wikipedia「UI銀行」— 預金残高 6,952億円(2025-03-31)、口座数 73,000 (2023-03-31)、開業、3年 目標(https://ja.wikipedia.org/wiki/UI銀行、2026-05-29 確認)。
- 銀行の預金残高ランキング(アルビノ)— UI銀行 6,865億円 / PayPay銀行 1兆9,122億円 / 楽天銀行 11兆4,763億円、いずれも 2025-03 (https://www.albino.co.jp/bank-deposit-balance-ranking/)。
- 東京きらぼしフィナンシャルグループ コーポレート / IR サイト(https://www.tokyo-kiraboshifg.co.jp/)。
- FSA 免許銀行リスト(https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx)。
