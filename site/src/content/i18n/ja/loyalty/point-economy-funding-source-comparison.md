---
source: loyalty/point-economy-funding-source-comparison
source_hash: c34c69ec900df8b5
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本のポイント経済資金源比較 (V / 楽天 / d / PayPay / Ponta アンカー)"
translated_at: 2026-06-26T08:28:38.465Z
---

# 日本のポイント経済資金源比較 (V / 楽天 / d / PayPay / Ponta アンカー)

## Wiki 内の位置づけ

本項目は [[loyalty/INDEX|loyalty index]] の下に、**クロスシステム比較** ページとして位置する：オペレーターごとの深掘りではなく、5 大共通ポイントシステムを、その経済性を実際に決定づける次元 —— **何がプログラムをアンカーし、誰がポイントを資金供給するか** —— で *横並びに* 読み解く。単一オペレーター深掘りである [[loyalty/rakuten-point-ecosystem-deep|Rakuten Point 経済圏 deep]]、[[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]、[[loyalty/d-point-detailed-ecosystem|d Point detailed 経済圏]]、[[loyalty/sb-yahoo-paypay-points-unified-ecosystem|SoftBank / Yahoo / PayPay unified points]]、[[loyalty/ponta-points-deep-dive|Ponta points deep dive]] の比較対象としての補完である。経済的な背骨は [[loyalty/point-program-unit-economics|point program unit economics]]、プログラム一覧は [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]。

## TL;DR

日本の「ビッグ 5」共通ポイント —— **V Point、楽天ポイント、d ポイント、PayPay ポイント、Ponta** —— は消費者には交換可能に見える（≈1% 還元、広い受入れ）が、構造的には異なる経済マシンである。それらを分かつ変数は **アンカー**：プログラムが構築される高頻度資産である。V Point は **銀行 / カード**（SMBC、Olive）にアンカーし、楽天は **EC 習慣**（楽天市場 + SPU）に、d ポイントは **携帯回線**（docomo）に、PayPay ポイントは **コード決済ウォレット** に、Ponta は **マルチスポンサー連合**（ローソン / KDDI / リクルート）にアンカーする。アンカーは **資金構成**（加盟店負担型 vs オペレーター負担型 vs 発行体負担型）、**クロスセルの行き先**（ポイントがどの金融商品へ送客するか）、そして **データの形**（ID グラフが何を見られるか）を決定する。還元率の比較は無意味であり、アンカーと資金源の比較こそが分析のすべてである。

## 5 つのアンカー一覧

| System | Anchor asset | Primary sponsor / 事業者 | Finance destination | Comparison page |
|---|---|---|---|---|
| **V Point** | 銀行 + クレジットカード | SMBC / CCCMK (SMFG-CCC JV) | [[megabanks/smfg|SMFG]] / Olive | [[loyalty/v-point-smbc-ccc-case|V Point case]] |
| **楽天ポイント** | EC 習慣 (楽天市場) | Rakuten Group | [[payment-firms/rakuten-fg|Rakuten FG]] | [[loyalty/rakuten-point-ecosystem-deep|Rakuten Point deep]] |
| **d ポイント** | 携帯回線 (docomo) | NTT docomo | [[megabanks/ndfg|NDFG]] | [[loyalty/d-point-detailed-ecosystem|d Point 経済圏]] |
| **PayPay ポイント** | コード決済ウォレット | PayPay / SoftBank / LY | [[megabanks/paypay-fg|PayPay FG]] | [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|PayPay unified points]] |
| **Ponta** | 連合 (ローソン / KDDI / リクルート) | Loyalty Marketing Inc. | au PAY / KDDI route | [[loyalty/ponta-points-deep-dive|Ponta deep dive]] |

銀行主導 vs 通信主導の対照（V Point vs d-point/au）は [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation|the telco-point consolidation case]] でさらに展開される。

## アンカー別の資金源アンカーは資金構成を予測する。各アンカーがポイントを異なる形で収益化するからである。[[loyalty/point-program-unit-economics|unit economics]] の資金モデル枠組みにマッピングすると：

| System | 加盟店-funded core | 事業者-funded overlay | 発行会社-funded (card) | Self-funded (group retail) |
|---|---|---|---|---|
| V Point | 共通ポイント受入れ | プロモーション | SMBC Card / Olive reward | — |
| 楽天ポイント | マーケットプレイス出店手数料 | **SPU 倍率 + キャンペーン** | 楽天カード reward | — |
| d ポイント | パートナー受入れ | d払い campaigns | d Card reward | — |
| PayPay ポイント | 加盟店受入れ | **大規模キャンペーン還元** | PayPay Card reward | — |
| Ponta | 連合パートナー手数料 | au PAY / Recruit campaigns | — | ローソン店舗マージン |

二つのパターンが際立つ。**ウォレットアンカー型** システム（PayPay、および楽天の SPU レイヤー）はオペレーター負担型キャンペーンに最も強く依存する —— それらは頻度と ID グラフを買っているのであり、金融クロスセルとデータ収益化を勘定に入れるまでは「赤字に見える」（その帳尻合わせは [[loyalty/retail-media-points-data-loop|the data-loop page]] にある）。**連合アンカー型** の Ponta は資金を複数の無関係なスポンサーに分散させ、それにより単一スポンサーのコストは下がるが、結果として生まれるグラフを誰が所有するかは希薄化する。

## なぜアンカーが経済性を決定するのか

アンカーはブランディングではなく、三つのことを一度に設定する：

1. **資金レバレッジ。** 銀行/カードアンカー（V Point）はインターチェンジと貸出マージンから報酬を資金供給できる；ウォレットアンカー（PayPay）はマーケティング予算を前もって支出し、後で回収しなければならない。同じ表面上の還元率、正反対のキャッシュフローの形。
2. **クロスセル勾配。** ポイントはアンカーが次に売るものへのファネルである：V Point → 預金 / Olive；楽天 → 証券 / 銀行 / 携帯；d-point → docomo 金融 / [[megabanks/ndfg|NDFG]]；PayPay → [[megabanks/paypay-fg|PayPay FG]]；Ponta → au PAY。その勾配が急であるほど、「不採算な」ポイントは理にかなう。
3. **データの形。** 携帯回線アンカーは identity + 位置 + 課金を見る；EC アンカーは SKU レベルのバスケットを見る；ウォレットアンカーは決済頻度を見る；連合は広さを見るがそれを共有する。これは [[loyalty/retail-media-points-data-loop|the data-loop page]] における ID グラフの次元である。

つまり同じ 1% 還元は、この 5 社を通じて、銀行クロスセルツール、EC リテンションエンジン、通信バンドルレバー、決済頻度補助、そして連合受入れスキームであり —— 5 つの異なるバランスシートとデータフットプリントを持つ。

## 共有される負債、異なる会計上の圧力

5 社すべてが、同じ会計機構を通る **ポイント負債** を生み出す —— [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] に整理された ASBJ 第 29 号（IFRS 15）に基づく契約負債 / 失効（breakage）。しかしその負債への *圧力* は異なる：

- **キャンペーン重視型** システム（PayPay；楽天の SPU/用途限定レイヤー）は大規模なオペレーター負担型付与を生み出す → P&L は短期的により悪く見え、失効見積もりがより重要になり、期間・用途限定ポイントが償還を誘導し失効を引き上げるために用いられる。
- **カードアンカー型** システム（V Point）は報酬負債をインターチェンジ経済と絡み合わせるため、ポイントコストは発行体自身の報酬計算の隣に位置する。
- **連合** システム（Ponta）はスポンサー *間* で価値を清算しなければならず、それにより [[loyalty/point-exchange-network-risk|point exchange network risk]] のオペレーター間移転メカニクスが加わる。

それらすべてにわたって失効を誠実に保つ開示規範は、[[loyalty/point-program-unit-economics|unit economics]] で参照される Cashless Promotion Council / Payments Japan 側から来る。

## これが JapanFG / 金融分析にとって重要な理由

- **還元率ではなく、アンカーを比較せよ。** 同条件の「1% 還元」比較はノイズである；本当の違いは資金レバレッジ、クロスセル勾配、データの形であり —— すべてアンカーによって設定される。
- **アンカーは、恩恵を受ける金融グループを名指す。** V Point → [[megabanks/smfg|SMFG]]；楽天 → [[payment-firms/rakuten-fg|Rakuten FG]]；d-point → [[megabanks/ndfg|NDFG]]；PayPay → [[megabanks/paypay-fg|PayPay FG]]。ポイントプログラムを読むことは、どのグループが顧客獲得コストを下げているかを教えてくれる。
- **「赤字」はアンカー依存である。** ウォレット型および EC アンカー型のキャンペーンは P&L 上最も悪く見えるが、最良のグラフと最も急な金融ファネルを買っているかもしれない；連合ポイントはスポンサーあたりでは安く見えるが、資産を分散させる。

## 関連項目

- [[loyalty/INDEX|loyalty index]]
- [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]
- [[loyalty/point-program-unit-economics|point program unit economics]]
- [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]
- [[loyalty/retail-media-points-data-loop|retail-media points data loop]]
- [[loyalty/point-exchange-network-risk|point exchange network risk]]
- [[loyalty/rakuten-point-ecosystem-deep|Rakuten Point 経済圏 deep]]
- [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]
- [[loyalty/d-point-detailed-ecosystem|d Point detailed 経済圏]]
- [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|SoftBank / Yahoo / PayPay unified points]]
- [[loyalty/ponta-points-deep-dive|Ponta points deep dive]]
- [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation|d Point / au (KDDI) / docomo telco-point consolidation case]]
- [[payments/cashless-jp-landscape|Japan cashless payment landscape]]
- [[payments/INDEX|payments INDEX]]
- [[payment-firms/rakuten-fg|Rakuten FG]]
- [[megabanks/smfg|SMFG]]
- [[megabanks/ndfg|NDFG]]
- [[megabanks/paypay-fg|PayPay FG]]
- [[INDEX|FinWiki index]]

## 出典

- Rakuten Point Club official guidance — Rakuten Point program structure (anchor / SPU reference).
- d POINT CLUB official site — telco-line anchored common point.
- CCC / CCCMK Holdings press materials — V Point / common-point operator structure.
- Payments Japan Association — code-payment campaign and disclosure norms.
- ASBJ Statement No.29, "Accounting Standard for Revenue Recognition" — shared point-liability / breakage treatment.
