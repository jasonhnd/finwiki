---
source: banking/japan-net-bank-deposit-feature-matrix-2026
source_hash: a66f9ca3fc29225a
lang: ja
status: machine
fidelity: ok
title: "日本のネット銀行 預金・機能マトリクス 2026"
translated_at: 2026-06-18T23:33:48.316Z
---

# 日本のネット銀行 預金・機能マトリクス 2026

## TL;DR

日本のネット銀行コホートは、一つの未分化なカテゴリではなく、明確にセグメント化された競争サーフェスとして 2026 に突入した。十数社の事業者は、**兆円規模の預金フランチャイズ**（楽天銀行、住信 SBI ネット銀行、ソニー銀行）から、**スペシャリストの BaaS ／パートナー主導ブランド**（みんなの銀行、住信 SBI の NEOBANK パートナー）、**エコシステムを積み上げたリテール銀行**（PayPay 銀行、au じぶん銀行）、そして**新興のフィンテック発行銀行**（メルカリバンク、UI 銀行）にまで及ぶ。このマトリクスは、親グループ、預金基盤、FX 商品の厚み、住宅ローンの組成、デビット／クレジットのオーバーレイ、公的な銀行 API の姿勢、2025-2026 の成長軌道、手数料スケジュール、預金金利の階層化、そして組込み金融のパートナーシップについて、これらを比較する。セグメントのフレーミングについては [[banking/japan-net-bank-competition-map|Japan net bank competition map]] と併せて、また粒度の細かい詳細については銀行ごとのエントリと併せて利用すること。

## Wiki ルート

このページは、2026ヴィンテージの預金・機能比較サーフェスとして [[banking/INDEX|banking index]] の下に位置する。セグメントレベルのフレーミングは [[banking/japan-net-bank-competition-map|Japan net bank competition map]] と [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] にある。銀行ごとの個別ページ：[[banking/sony-bank|Sony Bank]]、[[banking/ui-bank|UI Bank]]、[[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]]、[[banking/daiwa-next-bank|Daiwa Next Bank]]、[[banking/rakuten-bank|Rakuten Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]、[[banking/minna-bank-baas-model|Minna Bank BaaS model]]、[[banking/mercari-bank|Mercari Bank]]、[[banking/mercari-bank-license-stack|Mercari Bank license stack]]。オペレーティング・モデルは [[banking/japan-baas-operating-models|Japan BaaS operating models]] と [[banking/regional-bank-api-digital-partnership-route|regional bank API digital partnership route]] にある。ポスト・メガバンクの文脈：[[banking/post-megabank-positioning|post-megabank positioning]]。

## なぜ 2026

における預金・機能の比較が重要か

三つの構造的なシフトが、2026における預金・機能の比較を特に有用なものにしている。

1. **金利の正常化が預金競争を再始動させた。** 日銀のマイナス金利政策からの出口は、2024-2025 にかけてプラスの短期金利の領域を回復させ、これが長年続いた「すべての預金金利はゼロ」という単純化を打ち破った。ネット銀行は再び、階層化された金利、FX 預金、仕組預金商品で差別化している — セグメントレベルのフレーミングについては [[banking/japan-net-bank-competition-map|Japan net bank competition map]] を参照。
2. **銀行 API を通じた組込み金融が新しい BaaS サーフェスである。** [[fintech/INDEX|fintech]] の下にある銀行 API 制度は、主流の販売へと成熟した。[[banking/japan-baas-operating-models|Japan BaaS operating models]] は、パートナー支店およびホワイトラベル口座のアーキテクチャを記録している。ネット銀行は、銀行 API、ホワイトラベル口座コンテナ、またはその両方を公開しているかどうかで、実質的に異なる。
3. **住宅ローンの組成がネット銀行にとって主要なスケールの軸になった。** [[banking/sony-bank|Sony Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]、[[banking/rakuten-bank|Rakuten Bank]] は、それぞれかなりの規模の変動金利住宅ローンのフローを運営している。[[finance/japan-acquisition-finance|Japan acquisition finance]] の文脈と [[banking/post-megabank-positioning|post-megabank positioning]] は、ネット銀行の住宅ローンが、なぜ変動金利のブックにおいてメガバンクの組成者と真っ向から競合するようになったのかを説明している。

## 対象となる銀行ユニバース

11 行が比較の軸となる。

- **エコシステムに支えられたリテール** — [[banking/rakuten-bank|Rakuten Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]。
- **証券隣接／資産形成** — [[banking/sony-bank|Sony Bank]]、[[banking/daiwa-next-bank|Daiwa Next Bank]]、[[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]]（NEOBANK ／住宅ローンを軸とするネット銀行）を通じた [[regional-banks/sbi-shinsei-bank|SBI Shinsei]] の文脈エントリ。
- **法人 API ／ SME** — [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]]。
- **BaaS ／パートナー主導** — [[banking/minna-bank-baas-model|Minna Bank]]（福岡 FG のデジタルバンク・ブランド）、[[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] NEOBANK パートナー・スタック。
- **地域デジタル** — [[banking/ui-bank|UI Bank]]（東京きらぼし FG）。
- **フィンテック発行** — [[banking/mercari-bank|Mercari Bank]]（2025-2026 ローンチ）。
- **郵政／政府に支えられた** — [[regional-banks/japan-post-bank|Japan Post Bank]] のデジタルチャネル（ゆうちょダイレクト ＋ ゆうちょ Pay）は、純粋なネット銀行ではないものの、デジタルチャネルの比較として含まれる。

このコホートは、法人専用のデジタル貸し手（例：Funds）、ウォレット専用の事業者（銀行実体を伴わない [[card-issuers/paypay-card|PayPay Card]]）、およびローンチ前のプロジェクトを除外する。

## コア・マトリクス — 預金基盤と親エコシステム

| 銀行 | 親グループ | 預金基盤（兆円、〜2026） | 口座基盤（百万） | 主要な預金ドライバー |
|---|---|---|---|---|
| [[banking/rakuten-bank|Rakuten Bank]] | 楽天グループ（[[business/rakuten-group-mobile-finance-bundling-case|mobile-finance bundling]]） | 〜10-12 | 〜16-17 | 楽天ペイのスイープ、給与決済、楽天カードの自動引落 |
| [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] | 三井住友信託 × [[megabanks/sbi-hd|SBI HD]] | 〜10-11 | 〜7-8 | 住宅ローンの組成 ＋ JAL ／ SBI ／ヤマダ ／ T-NEOBANK のパートナー口座 |
| [[banking/paypay-bank|PayPay Bank]] | ソフトバンク／ PayPay ／ヤフージャパンのスタック | 〜2-3 | 〜7-8 | PayPay ウォレットのチャージ、給与口座、ATM ライトのチャネル |
| [[banking/au-jibun-bank|au Jibun Bank]] | KDDI × MUFG（[[megabanks/au-fh|au FH]] × [[megabanks/mufg|MUFG]]） | 〜5-6 | 〜6-7 | au PAY 連携、住宅ローンのブック、給与口座、FX リテール |
| [[banking/sony-bank|Sony Bank]] | ソニーフィナンシャルグループ（[[business/sony-fg-partial-spinoff-case|SFG spinoff]]） | 〜3-4 | 〜1.7-2.0 | 住宅ローンのブック ＋ 多通貨 FX 預金 ＋ 資産形成口座 |
| [[banking/daiwa-next-bank|Daiwa Next Bank]] | [[securities-firms/daiwa-sg|Daiwa Securities Group]] | 〜5-6 | 〜1.5-1.7 | 証券スイープ預金、仕組預金、資産形成の顧客基盤 |
| [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] | [[regional-banks/aozora-bank|Aozora Bank]] × [[business/gmo-internet-group|GMO Internet Group]] | 〜1.5-2 | 〜0.7-0.9 | SME ／スタートアップの法人口座、API ベースの法人トレジャリー |
| [[banking/ui-bank|UI Bank]] | 東京きらぼし FG | 〜0.3-0.5 | 〜0.3-0.4 | 地域グループ向けのアプリ専用デジタル預金チャネル |
| [[banking/minna-bank-baas-model|Minna Bank]] | 福岡 FG | 〜0.2-0.4 | 〜0.9-1.1 | モバイルネイティブ口座 ＋ BaaS パートナーブランド |
| [[banking/mercari-bank|Mercari Bank]] | メルカリグループ | <0.2 （初期） | 初期段階 | メルカリ・マーケットプレイスの出品者キャッシュフロー ＋ メルカリポイントのブリッジ |
| [[regional-banks/japan-post-bank|Japan Post Bank]]（デジタルチャネル） | 日本郵政ホールディングス | 〜190 （銀行全体） | 〜120 （銀行全体） | 支店 ＋ ATM の基盤。ゆうちょダイレクトのデジタルチャネルはオーバーレイ |

預金基盤の数値は、銀行の IR ページ、グループの年次報告書、および FSA の集計からの公開情報に基づく概算である。正確なバランスシートの数値については、銀行の IR ページを利用すること。

## コア・マトリクス — FX、住宅ローン、カード、API の厚み

| 銀行 | FX 商品の厚み | 住宅ローンの組成 | デビット／クレジットのオーバーレイ | 銀行 API の公開 |
|---|---|---|---|---|
| [[banking/rakuten-bank|Rakuten Bank]] | 円 ＋ USD ＋ EUR のリテール FX、FX デビットカード | グループ組成を通じた変動金利住宅ローン | 楽天カード連携（自社カードブランドなし） | [[banking/japan-baas-operating-models|BaaS]] パートナー向けの標準 FA API |
| [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] | 限定的なリテール FX。[[securities-firms/sbi-fx-trade|SBI FX Trade]] を通じた FX | 主要な変動金利住宅ローンの軸 | Mister Debit（Visa デビット） | 広範 — JAL、T-NEOBANK、ヤマダ、SBI 等向けの NEOBANK API |
| [[banking/paypay-bank|PayPay Bank]] | 円 ＋ USD のリテール FX、FX 預金 | 限定的 — パートナー紹介 | PayPay デビット（J-Debit ＋ Visa デビット）、PayPay カード連携 | PayPay ウォレットのスイープ向けの標準銀行 API |
| [[banking/au-jibun-bank|au Jibun Bank]] | 多通貨 FX 預金、FX 証拠金、FX デビット | 住宅ローンのブックは成長中 | au PAY カード ／ au PAY デビット連携 | 標準銀行 API ＋ au PAY 連携 |
| [[banking/sony-bank|Sony Bank]] | **最強のリテール FX** — 11以上の通貨、MoneyKit FX 預金、FX デビット | ローンチ以来、住宅ローンがコア商品 | Sony Bank WALLET（Visa デビット） | 標準銀行 API |
| [[banking/daiwa-next-bank|Daiwa Next Bank]] | 限定的なリテール FX | なし | なし（預金のみ） | [[securities-firms/daiwa-sg|Daiwa]] との証券スイープ連携 |
| [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] | 親会社 [[regional-banks/aozora-bank|Aozora]] を通じた法人 FX | 限定的なリテール住宅ローン | Visa デビット | **広範な法人 API** — 組込み決済、SaaS コネクタ |
| [[banking/ui-bank|UI Bank]] | 限定的 | 限定的 | Visa デビット | 標準銀行 API |
| [[banking/minna-bank-baas-model|Minna Bank]] | なし／限定的 | なし | Visa デビット | パートナーブランド API を伴う**ネイティブ BaaS アーキテクチャ** |
| [[banking/mercari-bank|Mercari Bank]] | 当初はなし | なし | メルカリカードへのブリッジ | メルカリ・マーケットプレイス統合 |
| [[regional-banks/japan-post-bank|Japan Post Bank]] | ゆうちょを通じた限定的なリテール FX | なし | JP Bank Visa デビット、JP Bank Card | 限定的な公開 API |

[[banking/sony-bank|Sony Bank]] は、歴史的に**多通貨リテール FX**に差別化の軸を置いてきており、2026 もなお、ネット銀行の中で最も幅広い通貨メニューとしてそれを示している。[[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] は**法人 API**のレーンを明確に軸としている。[[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] は**住宅ローンの組成**と **NEOBANK BaaS** を同時に軸としている。

## コア・マトリクス — 2025-2026 の成長、手数料、金利、組込み金融のパートナーシップ

| 銀行 | 2025-2026 の預金成長軌道 | ATM 手数料体系 | 国内振込手数料 | FX スプレッド階層 | 金利階層（2026） | 組込み金融のパートナー・エコシステム |
|---|---|---|---|---|---|---|
| [[banking/rakuten-bank|Rakuten Bank]] | 高い一桁台の前年比。給与口座の推進 | ハッピープログラムの階層により月 1-7回まで無料 | 階層により ¥52-145 | 中（例：USD で 25 銭） | 階層化（0.02-0.10% のベースライン。プロモーションでより高い） | 楽天カード、楽天ペイ、楽天証券、NTT ドコモ（楽天モバイルの提携ラウンド後のクロス割引） |
| [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] | 高い — 住宅ローンのブック ＋ NEOBANK 口座 | スマートプログラムのランクにより月 2-15回まで無料 | ランクにより月 1-20回まで無料 | 中〜タイト | 上位ランク向けの預金金利ブーストを伴う階層化 | JAL NEOBANK、T-NEOBANK、SBI 証券、ヤマダ NEOBANK、[[megabanks/sbi-hd|SBI HD]] のクロススタック |
| [[banking/paypay-bank|PayPay Bank]] | 強い — PayPay ウォレットのチャージ | 7-イレブンの ATM で無料（限定的）、その他では手数料 | 条件付きで無料 | より広い | プロモーション金利のオファー。ベースラインは 0.02% | PayPay ウォレット、PayPay カード、ヤフー ／ LINE ヤフー ID 連携 |
| [[banking/au-jibun-bank|au Jibun Bank]] | 安定的。KDDI エコシステム | 階層で無料 | 条件付きで無料 | 中 | au PAY カード連携のブーストを伴う階層化 | au PAY エコシステム、KDDI MNO、[[megabanks/mufg|MUFG]] |
| [[banking/sony-bank|Sony Bank]] | 安定的。FX ＋ 住宅ローン | 月 4回まで無料 ＋ それ以上は有料 | チャネルにより ¥110-330 | タイト（FX を軸とするポジショニング） | FX 預金を含む階層化 | ソニーグループの実体、住宅ローン組成パートナー |
| [[banking/daiwa-next-bank|Daiwa Next Bank]] | 証券スイープ主導 | 限定的（預金のみのモデル） | 限定的（大和を通じた振込） | n/a | 仕組預金のプロモーション階層 | [[securities-firms/daiwa-sg|Daiwa Securities]] |
| [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] | 安定的な SME ／法人 | 法人重視の手数料スケジュール | 法人にとって非常に競争的 | 法人 FX でタイト | 法人預金金利の階層 | freee、マネーフォワード、会計 SaaS、給与計算、決済プラットフォーム |
| [[banking/ui-bank|UI Bank]] | 緩やかな成長 — ニッチ | 限定的（アプリのみ） | 標準階層 | n/a | プロモーションの高利回り預金のローンチ | 東京きらぼし FG の地域パートナー |
| [[banking/minna-bank-baas-model|Minna Bank]] | モバイル ／ BaaS の成長 | アプリのみ — 自社 ATM なし | アプリを軸とする | n/a | 標準 | リクルート、トラストバンク GW、パートナーブランド BaaS |
| [[banking/mercari-bank|Mercari Bank]] | メルカリのユーザー基盤を通じた初期のランプ | 現在の公開資料は、ランク付けされた ATM フットプリントの比較をまだ支えない | 現在の公開資料は、手数料階層の比較をまだ支えない | n/a | 公開された商品条件は、ローンチ規模での確認をなお要する | メルカリ・マーケットプレイス、メルカリカード連携 |
| [[regional-banks/japan-post-bank|Japan Post Bank]] | 顧客が分散するにつれてわずかに流出 | 全国の日本郵政 ATM で無料 | ¥146-330 | 限定的なリテール FX | 標準的に低い | ゆうちょ Pay（自社ウォレット）、地方銀行との接続 |

成長軌道のラインは、預金成長が季節性とプロモーションの影響を強く受けるため、定性的である。預金残高の四半期開示については、銀行の IR サイトを利用すること。

## 差別化の軸

### 預金基盤のスケール階層

このコホートは、目に見えて預金階層に分かれる。

- **兆円階層（¥5兆円以上）** — [[banking/rakuten-bank|Rakuten Bank]]、[[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]、[[banking/daiwa-next-bank|Daiwa Next Bank]]。これらは生の預金フランチャイズで地方銀行と競合する。
- **中階層（¥1-5兆円）** — [[banking/sony-bank|Sony Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]]。それぞれ商品（FX、ウォレット、法人 API）でスペシャライズしている。
- **兆円未満階層（<¥1兆円）** — [[banking/ui-bank|UI Bank]]、[[banking/minna-bank-baas-model|Minna Bank]]、[[banking/mercari-bank|Mercari Bank]]。初期段階またはニッチ。
- **郵政の軸（¥190兆円）** — [[regional-banks/japan-post-bank|Japan Post Bank]] は独自のカテゴリに位置する。デジタルチャネルとしてのゆうちょダイレクトは機能面では比較可能だが、この銀行の預金基盤は支店と ATM のフランチャイズに由来する。

### 差別化としての FX 商品の厚み

[[banking/sony-bank|Sony Bank]] は FX の厚みのコーナーを明確に占める。[[banking/au-jibun-bank|au Jibun Bank]] は、多通貨 FX 預金と FX 証拠金取引を持つ最も近いピアである。[[banking/rakuten-bank|Rakuten Bank]] と [[banking/paypay-bank|PayPay Bank]] は、より狭い FX 商品メニューを提供する。FX を扱わない銀行（[[banking/daiwa-next-bank|Daiwa Next Bank]]、[[banking/minna-bank-baas-model|Minna Bank]]、[[banking/mercari-bank|Mercari Bank]]）は、FX 顧客のセグメントを譲り渡している。

### スケール・レバーとしての住宅ローンの組成

変動金利住宅ローンは、住宅ローン市場に参入したネット銀行にとって、依然として最大の単一資産クラスである。[[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] は最大のネット銀行の組成者である。[[banking/sony-bank|Sony Bank]] と [[banking/au-jibun-bank|au Jibun Bank]] がそれに続く。[[banking/rakuten-bank|Rakuten Bank]] はグループ構造を通じて組成する。[[banking/paypay-bank|PayPay Bank]] と [[banking/daiwa-next-bank|Daiwa Next Bank]] は住宅ローンを軸としていない。

### 銀行 API の公開姿勢

三つの公開階層が観察できる。

- **広範な法人 API** — [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] が軸である。法人トレジャリーと SaaS コネクタの API に明確に注力している。
- **広範な BaaS ／ホワイトラベル** — [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]]（NEOBANK）と [[banking/minna-bank-baas-model|Minna Bank]] BaaS。これらは、銀行がライセンスを保有しながら、パートナーブランドが自社の銀行ライクな UX を公開することを可能にする。
- **標準リテール銀行 API** — その他のほとんど。銀行 API は [[banking/japan-baas-operating-models|electronic payment agency / FA]] 制度のために公開されているが、銀行はホワイトラベルの販売を追求していない。

### 組込み金融のパートナー・エコシステム

組込み金融のパートナー列は、どのネット銀行が**直接の顧客獲得**に対して**販売サーフェス**で競争しているかを明らかにする。[[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] は NEOBANK を通じて JAL、ヤマダ、T（CCC）等とパートナーを組む。[[banking/minna-bank-baas-model|Minna Bank]] はリクルート等とパートナーを組む。[[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] は freee、マネーフォワード、給与計算 SaaS と統合している。エコシステムのリテール銀行（[[banking/rakuten-bank|Rakuten Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]）は、第三者のパートナーブランドではなく、自社グループのエコシステムに依拠する。

## クラスタ・サマリー — レバー別の競争マップ

有用なクラスタの読み方。

- **FX ＋ 資産形成クラスタ** — [[banking/sony-bank|Sony Bank]]、[[banking/daiwa-next-bank|Daiwa Next Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]。
- **住宅ローン組成クラスタ** — [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]]、[[banking/sony-bank|Sony Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]、[[banking/rakuten-bank|Rakuten Bank]]。
- **エコシステム・ウォレット・クラスタ** — [[banking/rakuten-bank|Rakuten Bank]]、[[banking/paypay-bank|PayPay Bank]]、[[banking/au-jibun-bank|au Jibun Bank]]。
- **BaaS ／パートナー・クラスタ** — [[banking/sumishin-sbi-net-bank|Sumishin SBI Net Bank]] NEOBANK、[[banking/minna-bank-baas-model|Minna Bank]]。
- **法人 ／ SME API クラスタ** — [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]]。
- **地域デジタル・クラスタ** — [[banking/ui-bank|UI Bank]]、[[regional-banks/01-bank|01 Bank]]（ピア参照）。
- **フィンテック発行クラスタ** — [[banking/mercari-bank|Mercari Bank]]。
- **郵政の軸** — [[regional-banks/japan-post-bank|Japan Post Bank]]。

## 出典に関する留意点

1. **預金基盤の数値**は、銀行の IR ページ、グループの年次報告書、および FSA の集計からの公開情報に基づく概算である。正確な比較には四半期開示を用いるべきである。
2. **口座基盤の数値**は、銀行のみのリテール顧客と BaaS パートナー口座を混在させている。[[banking/japan-net-bank-competition-map|competition map]] は、BaaS 口座がなぜメインバンクへの転換を過大評価しうるかを論じている。
3. **手数料スケジュール**は、プロモーション・スキームに伴って頻繁に変更される。現行の数値については、各銀行の手数料スケジュールのページを利用すること。
4. **FX スプレッド**は、通貨、チャネル、時間帯によって異なる。ライブレートについては、各銀行の FX ページを利用すること。
5. **金利階層**は、日銀の政策に依存する。2026 のベースラインは、プラスの短期金利の領域を前提としている。ベースラインを上回るプロモーション金利は一般的である。
6. **住宅ローンの組成ボリューム**は、一部の銀行は年次で、その他は四半期で開示する。検証済みのフローデータについては、各銀行の IR ページを利用すること。

## リサーチ・チェックリスト

このマトリクスを拡張する際は、

1. 預金残高と口座数について、銀行の IR ページまたは四半期開示を引き出す。
2. FSA の銀行情報開示の集計を通じてクロスチェックする。
3. 銀行 API の厚みとパートナーリストについて、銀行の API デベロッパー・ポータルを読む。
4. 銀行の BaaS 姿勢を分類するために [[banking/japan-baas-operating-models|BaaS operating models]] ページを利用する。
5. 決済チャネルの文脈のために [[banking/quick-deposit-four-methods|quick deposit four methods]] を利用する。
6. ライセンス・カテゴリを確認するために [[banking/japan-banking-license-tier-comparison-matrix|banking license tier comparison]] を利用する。

## 関連

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
- [[regional-banks/japan-post-bank]]
- [[megabanks/sbi-hd]]
- [[megabanks/mufg]]
- [[securities-firms/daiwa-sg]]
- [[regional-banks/01-bank]]
- [[INDEX|FinWiki index]]

## 出典

- FSA の免許銀行リストおよび銀行開示の集計。
- ソニー銀行の会社プロフィールおよび商品開示。
- UI 銀行のコーポレートサイトおよび商品ページ。
- GMO あおぞらネット銀行の会社概要および法人 API ドキュメント。
- 大和ネクスト銀行の会社開示および証券スイープのドキュメント。
- 楽天銀行のプレスリリースおよびグループ開示。
- PayPay 銀行の会社情報および商品ページ。
- 住信 SBI ネット銀行の会社プロフィールおよび NEOBANK パートナー開示。
- au じぶん銀行の業績開示。
- みんなの銀行のコーポレートサイトおよび BaaS パートナーページ。
- メルカリバンクのローンチ開示。
- 日本郵政銀行の IR。
