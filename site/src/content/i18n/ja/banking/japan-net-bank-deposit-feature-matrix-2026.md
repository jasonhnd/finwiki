---
source: banking/japan-net-bank-deposit-feature-matrix-2026
source_hash: 4b758d1313b4198d
lang: ja
status: machine
fidelity: ok
title: "日本のネット銀行 預金・機能マトリクス 2026"
translated_at: 2026-06-02T11:47:37.294Z
---

# 日本のネット銀行 預金・機能マトリクス 2026

## 要約

日本のネット銀行のコホートは、一つの未分化なカテゴリーではなく、明確にセグメント化された競争の場として 2026 年に入った。10を超える事業者は、**兆円規模の預金フランチャイズ**(楽天銀行、住信SBIネット銀行、ソニー銀行)から、**専門的なBaaS / パートナー主導のブランド**(みんなの銀行、住信SBIのNEOBANKパートナー)、**エコシステムを積み重ねたリテール銀行**(PayPay銀行、auじぶん銀行)、**新興のフィンテック発行の銀行**(メルカリ銀行、UI銀行)まで多岐にわたる。このマトリクスは、親会社グループ、預金基盤、FX商品の深さ、住宅ローンの組成、デビット / クレジットのオーバーレイ、公開された銀行APIの姿勢、2025-2026 年の成長軌道、手数料体系、預金金利の階層化、組込型金融のパートナーシップで、それらを比較する。セグメントの枠組みについては [[banking/japan-net-bank-competition-map|Japan net bank competition map]] と、詳細については各銀行の項目と併せて利用されたい。

## ウィキ上の位置づけ

本ページは [[banking/INDEX|banking index]] の下に、2026年版の預金・機能の比較の場として位置する。セグメントレベルの枠組みは [[banking/japan-net-bank-competition-map|Japan net bank competition map]] および [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] にある。個別の銀行ページ:[[banking/sony-bank|Sony Bank]]、[[banking/ui-bank|UI Bank]]、[[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]]、[[banking/daiwa-next-bank|Daiwa Next Bank]]、[[banking/rakuten-bank|Rakuten Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]、[[banking/minna-bank-baas-model|Minna Bank BaaS model]]、[[banking/mercari-bank|Mercari Bank]]、[[banking/mercari-bank-license-stack|Mercari Bank license stack]]。事業モデルは [[banking/japan-baas-operating-models|Japan BaaS operating models]] および [[banking/regional-bank-api-digital-partnership-route|regional bank API digital partnership route]] にある。メガバンク後の文脈:[[banking/post-megabank-positioning|post-megabank positioning]]。

## 2026

年に預金機能の比較が重要な理由

3つの構造的なシフトが、2026年において預金・機能の比較を特に有用なものにする。

1. **金利の正常化が預金競争を再開させた。** 日銀の 2024-2025 年にわたるマイナス金利政策からの脱却は、プラスの短期金利の領域を取り戻し、複数年にわたる「すべての預金金利はゼロ」という単純化を打ち破った。ネット銀行は、階層化された金利、FX預金、仕組み預金商品で再び差別化している — セグメントレベルの枠組みについては [[banking/japan-net-bank-competition-map|Japan net bank competition map]] 参照。
2. **銀行APIを通じた組込型金融が、新しいBaaSの場である。** [[fintech/INDEX|fintech]] の下での銀行API制度は、主流の流通へと成熟した。[[banking/japan-baas-operating-models|Japan BaaS operating models]] は、パートナー支店およびホワイトラベル口座のアーキテクチャを記録している。ネット銀行は、銀行APIを公開するか、ホワイトラベルの口座コンテナを公開するか、その両方かで、大きく異なる。
3. **住宅ローンの組成が、ネット銀行にとって主要な規模の軸となった。** [[banking/sony-bank|Sony Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]、[[banking/rakuten-bank|Rakuten Bank]] はそれぞれ、相当規模の変動金利の住宅ローンのフローを稼働させている。[[finance/japan-acquisition-finance|Japan acquisition finance]] の文脈および [[banking/post-megabank-positioning|post-megabank positioning]] は、ネット銀行の住宅ローンが、変動金利の貸出帳でメガバンクの組成業者と真っ向から競合するようになった理由を説明する。

## 対象となる銀行の範囲

11行が比較のアンカーとなる:

- **エコシステムをアンカーとするリテール** — [[banking/rakuten-bank|Rakuten Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]。
- **証券隣接 / 資産形成** — [[banking/sony-bank|Sony Bank]]、[[banking/daiwa-next-bank|Daiwa Next Bank]]、[[JapanFG/sbi-shinsei-bank|SBI Shinsei]] の文脈項目を [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] 経由(NEOBANK / 住宅ローンをアンカーとするネット銀行)。
- **法人向けAPI / SME** — [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]]。
- **BaaS / パートナー主導** — [[banking/minna-bank-baas-model|Minna Bank]](ふくおかFGのデジタル銀行ブランド)、[[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] のNEOBANKパートナースタック。
- **地域デジタル** — [[banking/ui-bank|UI Bank]](東京きらぼしFG)。
- **フィンテック発行** — [[banking/mercari-bank|Mercari Bank]](2025-2026 年ローンチ)。
- **郵政 / 政府をアンカーとする** — [[JapanFG/japan-post-bank|Japan Post Bank]] のデジタルチャネル(ゆうちょダイレクト + ゆうちょPay)は、純粋なネット銀行ではないものの、デジタルチャネルの比較として含めている。

このコホートからは、法人専業のデジタルレンダー(例:Funds)、ウォレット専業の事業者(銀行エンティティを伴わない [[JapanFG/paypay-card|PayPay Card]])、ローンチ前のプロジェクトを除外している。

## コアマトリクス — 預金基盤と親会社エコシステム

| 銀行 | 親会社グループ | 預金基盤(兆円、〜2026) | 口座基盤(百万) | 主要な預金ドライバー |
|---|---|---|---|---|
| [[banking/rakuten-bank|Rakuten Bank]] | 楽天グループ([[business/rakuten-group-mobile-finance-bundling-case|mobile-finance bundling]]) | 〜10-12 | 〜16-17 | 楽天ペイのスイープ、給与振込、楽天カードの自動引落 |
| [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] | 三井住友トラスト × [[JapanFG/sbi-hd|SBI HD]] | 〜10-11 | 〜7-8 | 住宅ローンの組成 + JAL / SBI / ヤマダ / T-NEOBANKのパートナー口座 |
| [[banking/paypay-bank|PayPay Bank]] | ソフトバンク / PayPay / Yahoo Japan のスタック | 〜2-3 | 〜7-8 | PayPayウォレットのチャージ、給与口座、ATMライトのチャネル |
| [[banking/au-jibun-bank|au Jibun Bank]] | KDDI × MUFG([[JapanFG/au-fh|au FH]] × [[JapanFG/mufg|MUFG]]) | 〜5-6 | 〜6-7 | au PAYの連携、住宅ローンの貸出帳、給与口座、リテールFX |
| [[banking/sony-bank|Sony Bank]] | ソニーフィナンシャルグループ([[business/sony-fg-partial-spinoff-case|SFG spinoff]]) | 〜3-4 | 〜1.7-2.0 | 住宅ローンの貸出帳 + 多通貨FX預金 + 資産形成口座 |
| [[banking/daiwa-next-bank|Daiwa Next Bank]] | [[JapanFG/daiwa-sg|Daiwa Securities Group]] | 〜5-6 | 〜1.5-1.7 | 証券スイープ預金、仕組み預金、資産形成の顧客基盤 |
| [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] | [[JapanFG/aozora-bank|Aozora Bank]] × [[business/gmo-internet-group|GMO Internet Group]] | 〜1.5-2 | 〜0.7-0.9 | SME / スタートアップの事業口座、APIベースの法人財務 |
| [[banking/ui-bank|UI Bank]] | 東京きらぼしFG | 〜0.3-0.5 | 〜0.3-0.4 | 地域グループ向けのアプリ専業のデジタル預金チャネル |
| [[banking/minna-bank-baas-model|Minna Bank]] | ふくおかFG | 〜0.2-0.4 | 〜0.9-1.1 | モバイルネイティブの口座 + BaaSパートナーブランド |
| [[banking/mercari-bank|Mercari Bank]] | メルカリグループ | <0.2 (初期) | 初期段階 | メルカリ・マーケットプレイスの出品者のキャッシュフロー + メルカリポイントのブリッジ |
| [[JapanFG/japan-post-bank|Japan Post Bank]](デジタルチャネル) | 日本郵政ホールディングス | 〜190 (銀行全体) | 〜120 (銀行全体) | 店舗 + ATMの基盤;ゆうちょダイレクトのデジタルチャネルはオーバーレイ |

預金基盤の値は、銀行のIRページ、グループの年次報告書、FSAの集計からの公開ソースに基づく概算である。正確なバランスシートの数値については銀行のIRページを利用されたい。

## コアマトリクス — FX、住宅ローン、カード、APIの深さ

| 銀行 | FX商品の深さ | 住宅ローンの組成 | デビット / クレジットのオーバーレイ | 銀行APIの公開 |
|---|---|---|---|---|
| [[banking/rakuten-bank|Rakuten Bank]] | 円 + USD + EUR のリテールFX、FXデビットカード | グループ組成を通じた変動金利の住宅ローン | 楽天カードの連携(自前のカードブランドなし) | [[banking/japan-baas-operating-models|BaaS]] パートナー向けの標準的なFA API |
| [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] | 限定的なリテールFX;FXは [[JapanFG/sbi-fx-trade|SBI FX Trade]] 経由 | 主要な変動金利の住宅ローンのアンカー | Mister Debit(Visaデビット) | 広範 — JAL、T-NEOBANK、ヤマダ、SBIなど向けのNEOBANK API |
| [[banking/paypay-bank|PayPay Bank]] | 円 + USD のリテールFX、FX預金 | 限定的 — パートナー紹介 | PayPayデビット(J-Debit + Visaデビット)、PayPayカードの連携 | PayPayウォレットのスイープ向けの標準的な銀行API |
| [[banking/au-jibun-bank|au Jibun Bank]] | 多通貨FX預金、FX証拠金、FXデビット | 住宅ローンの貸出帳が成長中 | au PAYカード / au PAYデビットの連携 | 標準的な銀行API + au PAYの連携 |
| [[banking/sony-bank|Sony Bank]] | **最も強力なリテールFX** — 11以上の通貨、MoneyKit FX預金、FXデビット | ローンチ以来の住宅ローンのコア商品 | Sony Bank WALLET(Visaデビット) | 標準的な銀行API |
| [[banking/daiwa-next-bank|Daiwa Next Bank]] | 限定的なリテールFX | なし | なし(預金専業) | [[JapanFG/daiwa-sg|Daiwa]] との証券スイープ連携 |
| [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] | 親会社 [[JapanFG/aozora-bank|Aozora]] を通じた法人FX | 限定的なリテール住宅ローン | Visa Debit | **広範な法人向けAPI** — 組込型決済、SaaSコネクタ |
| [[banking/ui-bank|UI Bank]] | 限定的 | 限定的 | Visaデビット | 標準的な銀行API |
| [[banking/minna-bank-baas-model|Minna Bank]] | なし / 限定的 | なし | Visaデビット | パートナーブランドAPIを伴う **ネイティブBaaSアーキテクチャ** |
| [[banking/mercari-bank|Mercari Bank]] | 当初はなし | なし | メルカリカードへのブリッジ | メルカリ・マーケットプレイスの統合 |
| [[JapanFG/japan-post-bank|Japan Post Bank]] | ゆうちょを通じた限定的なリテールFX | なし | JP Bank Visaデビット、JP Bankカード | 限定的な公開API |

[[banking/sony-bank|Sony Bank]] は歴史的にその差別化を **多通貨のリテールFX** にアンカーしてきたが、2026 年現在もなお、ネット銀行の中で最も幅広い通貨メニューを示している。[[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] は **法人向けAPI** のレーンを明示的にアンカーする。[[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] は **住宅ローンの組成** と **NEOBANK BaaS** を同時にアンカーする。

## コアマトリクス — 2025-2026 年の成長、手数料、利息、組込型金融のパートナーシップ

| 銀行 | 2025-2026 年の預金成長軌道 | ATM手数料の構造 | 国内振込手数料 | FXスプレッドの階層 | 金利の階層(2026) | 組込型金融のパートナーエコシステム |
|---|---|---|---|---|---|---|
| [[banking/rakuten-bank|Rakuten Bank]] | 高い一桁台の前年比;給与口座のドライブ | ハッピープログラムの階層により月 1-7回無料 | 階層により 52-145 円 | 中(例:USD 25 銭) | 階層型(0.02-0.10% のベースライン;プロモーションでより高い) | 楽天カード、楽天ペイ、楽天証券、NTTドコモ(楽天モバイルのパートナーシップのラウンド後のクロス割引) |
| [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] | 高い — 住宅ローンの貸出帳 + NEOBANK口座 | スマートプログラムのランクにより月 2-15回無料 | ランクにより月 1-20回無料 | 中〜タイト | 高ランク向けの預金金利のブーストを伴う階層型 | JAL NEOBANK、T-NEOBANK、SBI証券、ヤマダNEOBANK、[[JapanFG/sbi-hd|SBI HD]] のクロススタック |
| [[banking/paypay-bank|PayPay Bank]] | 強い — PayPayウォレットのチャージ | 7-Eleven のATMで無料(限定的)、他では手数料 | 条件付きで無料 | より広い | プロモーション金利のオファー;ベースラインは 0.02% | PayPayウォレット、PayPayカード、Yahoo / LINEヤフーのID連携 |
| [[banking/au-jibun-bank|au Jibun Bank]] | 着実;KDDIのエコシステム | 階層で無料 | 条件付きで無料 | 中 | au PAYカードの連携ブーストを伴う階層型 | au PAYのエコシステム、KDDIのMNO、[[JapanFG/mufg|MUFG]] |
| [[banking/sony-bank|Sony Bank]] | 着実;FX + 住宅ローン | 月 4回無料 + それ以上は有料 | チャネルにより 110-330 円 | タイト(FXをアンカーとするポジショニング) | FX預金を含む階層型 | ソニーグループのエンティティ、住宅ローンの組成パートナー |
| [[banking/daiwa-next-bank|Daiwa Next Bank]] | 証券スイープ主導 | 限定的(預金専業モデル) | 限定的(大和経由の振込) | 該当なし | 仕組み預金のプロモーション階層 | [[JapanFG/daiwa-sg|Daiwa Securities]] |
| [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] | 着実なSME / 法人 | 法人向けの手数料体系 | 法人向けに非常に競争力がある | 法人FXでタイト | 法人預金金利の階層 | freee、MoneyForward、会計SaaS、給与計算、決済プラットフォーム |
| [[banking/ui-bank|UI Bank]] | 緩やかな成長 — ニッチ | 限定的(アプリ専業) | 標準階層 | 該当なし | プロモーションの高利回り預金のローンチ | 東京きらぼしFGの地域パートナー |
| [[banking/minna-bank-baas-model|Minna Bank]] | モバイル / BaaSの成長 | アプリ専業 — 自前のATMなし | アプリをアンカーとする | 該当なし | 標準 | リクルート、トラストバンクGW、パートナーブランドBaaS |
| [[banking/mercari-bank|Mercari Bank]] | メルカリのユーザー基盤を通じた初期の立ち上げ | 現在の公開資料は、まだ順位付けされたATM拠点数の比較を支持しない | 現在の公開資料は、まだ手数料階層の比較を支持しない | 該当なし | 公開された商品条件は、ローンチ規模での確認が依然として必要 | メルカリ・マーケットプレイス、メルカリカードの連携 |
| [[JapanFG/japan-post-bank|Japan Post Bank]] | 顧客の分散に伴う若干の流出 | 全国の郵便局ATMで無料 | 146-330 円 | 限定的なリテールFX | 標準的に低い | ゆうちょPay(自前のウォレット)、地方銀行との接続 |

成長軌道の行は定性的である。なぜなら、預金の成長は季節性が高くプロモーションに左右されるからである。預金残高の四半期開示については各銀行のIRサイトを利用されたい。

## 差別化の軸

### 預金基盤の規模階層

このコホートは、目に見えて預金階層に分かれる:

- **兆円階層(5兆円以上)** — [[banking/rakuten-bank|Rakuten Bank]]、[[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]、[[banking/daiwa-next-bank|Daiwa Next Bank]]。これらは生の預金フランチャイズで地方銀行と競合する。
- **中階層(1-5兆円)** — [[banking/sony-bank|Sony Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]]。それぞれ商品(FX、ウォレット、法人向けAPI)で専門化している。
- **兆円未満の階層(1兆円未満)** — [[banking/ui-bank|UI Bank]]、[[banking/minna-bank-baas-model|Minna Bank]]、[[banking/mercari-bank|Mercari Bank]]。初期段階またはニッチ。
- **郵政アンカー(190兆円)** — [[JapanFG/japan-post-bank|Japan Post Bank]] は独自のカテゴリーに位置する。デジタルチャネルとしてのゆうちょダイレクトは機能面では比較可能だが、同行の預金基盤は店舗とATMのフランチャイズから来ている。

### 差別化としてのFX商品の深さ

[[banking/sony-bank|Sony Bank]] は、FXの深さのコーナーを明示的に占める。[[banking/au-jibun-bank|au Jibun Bank]] は、多通貨FX預金とFX証拠金取引を備えた最も近いピアである。[[banking/rakuten-bank|Rakuten Bank]] および [[banking/paypay-bank|PayPay Bank]] は、より狭いFX商品メニューを提供する。FX以外の銀行([[banking/daiwa-next-bank|Daiwa Next Bank]]、[[banking/minna-bank-baas-model|Minna Bank]]、[[banking/mercari-bank|Mercari Bank]])は、FX顧客のセグメントを譲っている。

### 規模のレバーとしての住宅ローンの組成

変動金利の住宅ローンは、住宅ローン市場に参入したネット銀行にとって、依然として最大の単一資産クラスである。[[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] は最大のネット銀行の組成業者である。[[banking/sony-bank|Sony Bank]] および [[banking/au-jibun-bank|au Jibun Bank]] がそれに続く。[[banking/rakuten-bank|Rakuten Bank]] はグループ構造を通じて組成する。[[banking/paypay-bank|PayPay Bank]] および [[banking/daiwa-next-bank|Daiwa Next Bank]] は住宅ローンをアンカーとしない。

### 銀行APIの公開姿勢

3つの公開階層が観察される:

- **広範な法人向けAPI** — [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] がアンカー;法人財務およびSaaSコネクタのAPIに明示的に焦点を当てる。
- **広範なBaaS / ホワイトラベル** — [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]](NEOBANK)および [[banking/minna-bank-baas-model|Minna Bank]] のBaaS。これらは、銀行が免許を保有しながら、パートナーブランドが自前の銀行的なUXを公開することを可能にする。
- **標準的なリテール銀行API** — その他大半。銀行APIは [[banking/japan-baas-operating-models|electronic payment agency / FA]] 制度向けに公開されるが、銀行はホワイトラベルの流通を追求しない。

### 組込型金融のパートナーエコシステム

組込型金融のパートナーの列は、どのネット銀行が **直接的な顧客獲得** ではなく **流通の場** で競合しているかを明らかにする。[[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] はNEOBANKを通じてJAL、ヤマダ、T(CCC)などと提携し、[[banking/minna-bank-baas-model|Minna Bank]] はリクルートなどと提携し、[[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] はfreee、MoneyForward、給与計算SaaSと統合する。エコシステム型のリテール銀行([[banking/rakuten-bank|Rakuten Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/au-jibun-bank|au Jibun Bank]])は、第三者のパートナーブランドではなく自前のグループのエコシステムに依拠する。

## クラスター要約 — レバー別の競争マップ

有用なクラスターの読み方:

- **FX + 資産形成クラスター** — [[banking/sony-bank|Sony Bank]]、[[banking/daiwa-next-bank|Daiwa Next Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]。
- **住宅ローン組成クラスター** — [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]]、[[banking/sony-bank|Sony Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]、[[banking/rakuten-bank|Rakuten Bank]]。
- **エコシステムウォレットクラスター** — [[banking/rakuten-bank|Rakuten Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]。
- **BaaS / パートナークラスター** — [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] のNEOBANK、[[banking/minna-bank-baas-model|Minna Bank]]。
- **法人 / SME APIクラスター** — [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]]。
- **地域デジタルクラスター** — [[banking/ui-bank|UI Bank]]、[[JapanFG/01-bank|01 Bank]](ピアの参照)。
- **フィンテック発行クラスター** — [[banking/mercari-bank|Mercari Bank]]。
- **郵政アンカー** — [[JapanFG/japan-post-bank|Japan Post Bank]]。

## ソースに関する注意

1. **預金基盤の数値** は、銀行のIRページ、グループの年次報告書、FSAの集計からの公開ソースに基づく概算である。正確な比較には四半期開示を用いるべきである。
2. **口座基盤の数値** は、銀行のみのリテール顧客とBaaSパートナーの口座を混在させている。[[banking/japan-net-bank-competition-map|competition map]] は、BaaSの口座がメインバンクへの転換を過大評価しうる理由を論じている。
3. **手数料体系** は、プロモーション施策により頻繁に変わる。現在の値については各銀行の手数料体系ページを利用されたい。
4. **FXスプレッド** は、通貨、チャネル、時間帯により異なる。ライブのレートについては各銀行のFXページを利用されたい。
5. **金利の階層** は日銀の政策に依存する。2026  のベースラインはプラスの短期金利の領域を想定しており、ベースラインを上回るプロモーション金利は一般的である。
6. **住宅ローンの組成量** は、一部の銀行が年次で、他は四半期で開示する。検証済みのフローデータについては各銀行のIRページを利用されたい。

## リサーチのチェックリスト

このマトリクスを拡張する際:

1. 預金残高および口座数について、銀行のIRページまたは四半期開示を取得する。
2. FSAの銀行情報開示の集計を通じてクロスチェックする。
3. 銀行APIの深さおよびパートナー一覧について、銀行のAPI開発者ポータルを読む。
4. 銀行のBaaSの姿勢を分類するために [[banking/japan-baas-operating-models|BaaS operating models]] ページを用いる。
5. 決済チャネルの文脈について [[banking/quick-deposit-four-methods|quick deposit four methods]] を用いる。
6. 免許の区分を確認するために [[banking/japan-banking-license-tier-comparison-matrix|banking license tier comparison]] を用いる。

## 関連項目

- [[banking/INDEX]]
- [[banking/japan-net-bank-competition-map]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/japan-baas-operating-models]]
- [[banking/post-megabank-positioning]]
- [[banking/sony-bank]]
- [[banking/ui-bank]]
- [[banking/gmo-aozora-net-bank]]
- [[banking/daiwa-next-bank]]
- [[banking/rakuten-bank]]
- [[banking/paypay-bank]]
- [[banking/au-jibun-bank]]
- [[banking/minna-bank-baas-model]]
- [[banking/mercari-bank]]
- [[banking/mercari-bank-license-stack]]
- [[banking/sumishin-sbi-net-bank]]
- [[banking/regional-bank-api-digital-partnership-route]]
- [[banking/quick-deposit-four-methods]]
- [[business/rakuten-group-mobile-finance-bundling-case]]
- [[business/sony-fg-partial-spinoff-case]]
- [[business/gmo-internet-group]]
- [[JapanFG/japan-post-bank]]
- [[JapanFG/sbi-hd]]
- [[JapanFG/mufg]]
- [[JapanFG/daiwa-sg]]
- [[JapanFG/01-bank]]
- [[INDEX|FinWiki index]]

## 出典

- FSAの免許銀行一覧および銀行情報開示の集計。
- ソニー銀行 会社概要および商品開示。
- UI銀行 企業サイトおよび商品ページ。
- GMOあおぞらネット銀行 会社概要および法人向けAPIドキュメント。
- 大和ネクスト銀行 企業ディスクロージャーおよび証券スイープのドキュメント。
- 楽天銀行 プレスリリースおよびグループ開示。
- PayPay銀行 会社情報および商品ページ。
- 住信SBIネット銀行 会社概要およびNEOBANKパートナー開示。
- auじぶん銀行 業績開示。
- みんなの銀行 企業サイトおよびBaaSパートナーページ。
- メルカリ銀行 ローンチ開示。
- ゆうちょ銀行 IR。
