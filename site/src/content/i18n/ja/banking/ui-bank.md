---
source: banking/ui-bank
source_hash: 05f637f0ed938df2
lang: ja
status: machine
fidelity: ok
title: "UI 銀行 事業プロファイル（UI銀行 / きらぼし FG 系）"
translated_at: 2026-06-18T23:33:48.349Z
---

# UI 銀行 事業プロファイル（UI銀行 / きらぼし FG 系）

## ウィキ経路

本エントリは [[banking/INDEX|banking index]] の配下に位置し、[[regional-banks/ui-bank|UI銀行 entity anchor]] にあるエンティティ・アンカーに対する事業プロファイルの補完として置かれている。[[banking/japan-net-bank-competition-map|Japan net bank competition map]] のセグメントマップの中で、地域デジタル銀行ピアである [[banking/minna-bank-baas-model|Minna Bank BaaS model]] · [[regional-banks/01-bank|01 Bank]] の隣で読み、親コンテキストである [[regional-banks/kiraboshi-fg|東京きらぼし FG]] および [[regional-banks/kiraboshi-bank|きらぼし銀行]] とともに、より広範なスマートフォンファースト・バンキングの流通比較のためにエコシステム・ネット銀行コホート [[banking/rakuten-bank|Rakuten Bank]] · [[banking/paypay-bank|PayPay Bank]] · [[banking/au-jibun-bank|au Jibun Bank]] · [[banking/sony-bank|Sony Bank]] と対比すること。地域グループのデジタル戦略の視点については [[banking/regional-bank-api-digital-partnership-route|regional bank API digital partnership route]] と組み合わせること。

## TL;DR

UI銀行（UI Bank Co., Ltd.）は [[regional-banks/kiraboshi-fg|東京きらぼし FG]] のスマートフォンファースト・デジタル銀行子会社であり、**2022-01-04** にグループのスタンドアロン・デジタル銀行として開業した。その戦略的ロジックは、親会社の地域銀行（[[regional-banks/kiraboshi-bank|きらぼし銀行]]）が東京中心の支店バンキングをカバーする一方で、UI銀行はレガシーな支店網ではコスト効率よく提供できない全国規模のスマートフォン専業の顧客ジャーニーを担う、というものである。UI銀行は、[[banking/minna-bank-baas-model|Minna Bank]]（[[regional-banks/fukuoka-fg|Fukuoka FG]]）および [[regional-banks/01-bank|01 Bank]]（[[megabanks/saitama-resona-bank|Saitama Resona]] / りそなグループ）と並ぶ、意味のある地域グループ系デジタル銀行3行のうちの1行であり、それぞれ明確に異なるアーキテクチャ的読み解きを持つ。みんなの銀行は BaaS パートナー・チャネル流通に特化し、01 銀行はりそなグループのクロスセルに集中し、UI銀行は API 接続性を備えたスマートフォンファーストのライフパートナー金融 UX を強調する。預金残高は 2022 開業以来着実に伸びているが、依然として1兆円未満（2025-03-31時点で約 ¥0.7 兆 / ¥6,952億）にとどまり、同日時点のエコシステム銀行ピア（[[banking/rakuten-bank|Rakuten Bank]] ¥11.5兆 / [[banking/paypay-bank|PayPay Bank]] ¥1.9兆 / [[banking/au-jibun-bank|au Jibun]] ¥4兆超）より1桁小さい。戦術的ポジショニングは、単一のモバイルファースト UX レイヤーを通じた銀行、貯蓄、決済、ライフスタイル・サービスの収斂を強調する。

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

| 軸 | ポジション |
|---|---|
| スマートフォンファーストの預金成長 | 活発；アプリ内オンボーディングに最適化された口座開設フロー |
| きらぼし銀行 法人顧客とのクロスセル | グループ連携を通じて可能 — 給与振込スキーム、法人給与、パートナー事業連携 |
| ライフスタイル / パートナーサービス統合 | エコシステム・ポイント主導のピアに対する差別化 UX 軸 |
| 地理的リーチ | モバイル経由で全国（きらぼし銀行 の東京集中に対して） |

### 3行の地域デジタル比較

| 次元 | UI銀行（本エントリ） | [[banking/minna-bank-baas-model|Minna Bank]] | [[regional-banks/01-bank|01 Bank]] |
|---|---|---|---|
| 親グループ | [[regional-banks/kiraboshi-fg|東京きらぼし FG]] | [[regional-banks/fukuoka-fg|Fukuoka FG]] | [[megabanks/resona-hd|Resona HD]] / [[megabanks/saitama-resona-bank|Saitama Resona]] |
| 開業 | 2022-01 | 2021-05 | 後発のローンチ |
| チャネル・アーキテクチャ | スマートフォン + ウェブ | BaaS パートナー・ジャーニー + 直接アプリ | りそなグループのクロスセル + 直接アプリ |
| 戦略軸 | スマートフォンファーストのライフパートナー・バンキング + API | フル BaaS — パートナーブランドが顧客ジャーニーを所有 | グループ顧客のデジタル付随機能 |
| BaaS の深さ | より軽い | 3行中で最も重い | より軽い |
| 直接 UX の成熟度 | 成長中 | 強力なアプリ UX | 成長中 |

## 4. KPI とフランチャイズの形状

UI銀行は、きらぼし FG IR 資料および自社のディスクロージャー刊行物を通じて、選択的な KPI 更新を公表している。時点ごとの預金残高と口座数はそこに現れる。ローンチ後の初期数年を通じたフランチャイズのパターンは以下のとおり。

| 指標 | パターン |
|---|---|
| 口座数 | 2023-03-31時点で約 73,000 口座；成長しているがエコシステム銀行ピアより1桁低い（また、2022 開業時に打ち出された約 2.7-3.0百万・3年目標の下限を大きく下回る） |
| 預金残高 | 2025-03-31時点で約 ¥6,952億（≈¥0.7兆）— 1兆円未満で、[[banking/rakuten-bank|Rakuten Bank]]（¥11.5兆）や [[banking/paypay-bank|PayPay Bank]]（¥1.9兆）を大きく下回る |
| 貸出残高 | リテール / 消費者ローン中心（スマートフォンローン、フリー / オート / 住宅ローン）；絶対額では控えめ |
| 自己資本 | 銀行法の最低水準を上回る；若いデジタル銀行としては相対的に低いビジネスリスクのバランスシート |

## 5. 規制・政策の境界

| レイヤー | 法令 / 規制当局 | 含意 |
|---|---|---|
| 銀行監督 | 銀行法 + 金融庁 監督指針 | デジタル専業銀行に適用される標準的な普通銀行監督 |
| オープンバンキング API | 2017 銀行法 改正 | API 提供義務；UI銀行の接続性ストーリーはこの体制を活用する |
| 預金保険 | 預金保険機構 | 標準的な円預金保険の保護 |
| サイバーセキュリティ / IT レジリエンス | FSA IT 統合的監督指針 + サイバーセキュリティ報告 | デジタル専業銀行は高度な IT レジリエンスの期待に直面する |
| AML / CFT | 金融庁 + FATF 第 4 次審査 | FATF 審査後、オンラインオンボーディングの eKYC コンプライアンスが強化 |
| 親銀行の連結 | 銀行法 + 金融商品取引法 — りそな型の持株ルール | きらぼし FG を通じた連結監督 |

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
- Wikipedia「UI銀行」— 預金残高 6,952億円（2025-03-31）、口座数 73,000 （2023-03-31）、開業、3年目標（https://ja.wikipedia.org/wiki/UI銀行、2026-05-29 確認）。
- 銀行の預金残高ランキング（アルビノ）— UI銀行 6,865億円 / PayPay銀行 1兆9,122億円 / 楽天銀行 11兆4,763億円、いずれも 2025-03 （https://www.albino.co.jp/bank-deposit-balance-ranking/）。
- 東京きらぼしフィナンシャルグループ コーポレート / IR サイト（https://www.tokyo-kiraboshifg.co.jp/）。
- FSA 免許銀行一覧（https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx）。
