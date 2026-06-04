---
source: loyalty/point-economy-funding-source-comparison
source_hash: ef8aca12f6c35ce2
lang: ja
model: claude-opus-4-8
status: machine
fidelity: ok
title: "日本のポイント経済 原資比較（V／楽天／d／PayPay／Ponta のアンカー）"
translated_at: 2026-06-05T00:00:00.000Z
---
# 日本のポイント経済 原資比較（V／楽天／d／PayPay／Ponta のアンカー）

## ウィキ上の位置づけ

この項目は [[loyalty/INDEX|loyalty index]] の配下に置く**システム横断の比較**ページである：五大共通ポイントシステムを、その経済性を実際に決める軸——**何がプログラムをアンカーし、誰がポイントを負担するか**——によって、事業者ごとの深さではなく*横並びで*読む。これは単一事業者の詳説 [[loyalty/rakuten-point-ecosystem-deep|Rakuten Point ecosystem deep]]、[[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]、[[loyalty/d-point-detailed-ecosystem|d Point detailed ecosystem]]、[[loyalty/sb-yahoo-paypay-points-unified-ecosystem|SoftBank / Yahoo / PayPay unified points]]、[[loyalty/ponta-points-deep-dive|Ponta points deep dive]] に対する比較の対をなす。経済の背骨は [[loyalty/point-program-unit-economics|point program unit economics]]、プログラム一覧は [[loyalty/japan-points-landscape|Japan points and loyalty landscape]] である。

## 要約

日本の「ビッグ5」共通ポイント——**V Point、楽天ポイント、d Point、PayPay Point、Ponta**——は、消費者には互換可能に見える（約 1% 還元、広い受容）が、構造的には異なる経済機械である。それらを分かつ変数は**アンカー**：プログラムが築かれる高頻度の資産である。V Point は**銀行／カード**（SMBC、Olive）にアンカーし、楽天は **EC 習慣**（楽天市場 + SPU）に、d Point は**モバイル回線**（docomo）に、PayPay Point は**コード決済ウォレット**に、Ponta は**マルチスポンサー連合**（Lawson / KDDI / Recruit）にアンカーする。アンカーが、**原資構成**（加盟店負担型 vs 事業者負担型 vs イシュアー負担型）、**クロスセルの行き先**（ポイントがどの金融商品に流れ込むか）、そして**データの形**（ID グラフが何を見られるか）を決める。還元率を比べるのは無意味であり、アンカーと原資を比べることこそ分析のすべてである。

## 五つのアンカー一覧

| システム | アンカー資産 | 主要スポンサー／事業者 | 金融の行き先 | 比較ページ |
|---|---|---|---|---|
| **V Point** | 銀行 + クレジットカード | SMBC / CCCMK（SMFG-CCC JV） | [[megabanks/smfg|SMFG]] / Olive | [[loyalty/v-point-smbc-ccc-case|V Point case]] |
| **楽天ポイント** | EC 習慣（楽天市場） | 楽天グループ | [[payment-firms/rakuten-fg|Rakuten FG]] | [[loyalty/rakuten-point-ecosystem-deep|Rakuten Point deep]] |
| **d Point** | モバイル回線（docomo） | NTT docomo | [[megabanks/ndfg|NDFG]] | [[loyalty/d-point-detailed-ecosystem|d Point ecosystem]] |
| **PayPay Point** | コード決済ウォレット | PayPay / SoftBank / LY | [[megabanks/paypay-fg|PayPay FG]] | [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|PayPay unified points]] |
| **Ponta** | 連合（Lawson / KDDI / Recruit） | 株式会社ロイヤリティ マーケティング | au PAY / KDDI 経路 | [[loyalty/ponta-points-deep-dive|Ponta deep dive]] |

銀行主導 vs 通信主導の対比（V Point vs d-point/au）は [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation|the telco-point consolidation case]] でさらに展開される。

## アンカー別の原資

アンカーは原資構成を予測する。各アンカーがポイントを異なる形で収益化するからである。[[loyalty/point-program-unit-economics|unit economics]] の原資モデルの枠組みにマッピングすると、

| システム | 加盟店負担型コア | 事業者負担型の上乗せ | イシュアー負担型（カード） | 自己負担型（グループ小売） |
|---|---|---|---|---|
| V Point | 共通ポイントの受容 | プロモーション | SMBC Card / Olive リワード | — |
| 楽天ポイント | マーケットプレイス出店者手数料 | **SPU 乗数 + キャンペーン** | 楽天カード リワード | — |
| d Point | パートナー受容 | d払い キャンペーン | d Card リワード | — |
| PayPay Point | 加盟店受容 | **大規模なキャンペーン還元** | PayPay Card リワード | — |
| Ponta | 連合パートナー手数料 | au PAY / Recruit キャンペーン | — | Lawson 店舗マージン |

二つのパターンが際立つ。**ウォレットアンカー型**のシステム（PayPay、および楽天の SPU レイヤー）は、事業者負担型のキャンペーンに最も強く頼る——それらは頻度と ID グラフを買っており、金融クロスセルとデータ収益化を勘定に入れるまでは「赤字」に見える（[[loyalty/retail-media-points-data-loop|the data-loop page]] の整理）。**連合アンカー型**の Ponta は、原資を複数の無関係なスポンサーに分散させる。これは単一スポンサーのコストを下げるが、結果として生じるグラフを誰が所有するのかを希薄化する。

## なぜアンカーが経済性を決めるのか

アンカーはブランディングではない——それは三つのことを同時に設定する。

1. **原資レバレッジ。** 銀行／カードアンカー（V Point）はインターチェンジと貸出マージンからリワードの原資を出せる。ウォレットアンカー（PayPay）はマーケティング予算を先に費やし、後で回収しなければならない。同じ目玉の率、正反対のキャッシュフローの形。
2. **クロスセルの勾配。** ポイントは、アンカーが次に売るものへのファネルである：V Point → 預金 / Olive、楽天 → 証券 / 銀行 / モバイル、d-point → docomo 金融 / [[megabanks/ndfg|NDFG]]、PayPay → [[megabanks/paypay-fg|PayPay FG]]、Ponta → au PAY。その勾配が急であるほど、「不採算」のポイントが理にかなう。
3. **データの形。** モバイル回線アンカーはアイデンティティ + 位置 + 請求を見る。EC アンカーは SKU レベルのバスケットを見る。ウォレットアンカーは決済頻度を見る。連合は幅を見るがそれを共有する。これは [[loyalty/retail-media-points-data-loop|the data-loop page]] の ID グラフの次元である。

したがって同じ 1% のリワードは、この五つの間で、銀行のクロスセルツール、EC のリテンションエンジン、通信のバンドルレバー、決済頻度の補助、そして連合の受容スキームである——五つの異なるバランスシートとデータのフットプリントを伴って。

## 共通の負債、異なる会計上の圧力

五つすべてが、同じ会計機構を通る**ポイント負債**を生む——ASBJ 企業会計基準第29号（IFRS 15）の下での契約負債／ブレッカジであり、[[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] にカタログ化されている。だがその負債への*圧力*は異なる。

- **キャンペーン主体**のシステム（PayPay、楽天の SPU／用途限定レイヤー）は、大規模な事業者負担型の付与を生む → P&L は近時的に悪く見え、ブレッカジの見積りの比重がより大きくなり、用途限定ポイント（期間・用途限定）が償還を誘導しブレッカジを高めるために使われる。
- **カードアンカー型**のシステム（V Point）は、リワード負債をインターチェンジの経済性と絡める。したがってポイントコストはイシュアー自身のリワード計算の隣に位置する。
- **連合**システム（Ponta）は、スポンサー*間で*価値を決済しなければならず、[[loyalty/point-exchange-network-risk|point exchange network risk]] の事業者間移転メカニクスを加える。

それらすべてにわたってブレッカジを正直に保つ開示規範は、[[loyalty/point-program-unit-economics|unit economics]] で参照されるとおり、キャッシュレス推進協議会／ペイメントジャパンの側から来る。

## なぜこれが JapanFG／金融分析にとって重要か

- **還元率ではなく、アンカーを比べよ。** 同条件の「1% 還元」比較はノイズである。本当の違いは、原資レバレッジ、クロスセルの勾配、データの形であり——すべてアンカーによって設定される。
- **アンカーが、便益を受ける金融グループの名を告げる。** V Point → [[megabanks/smfg|SMFG]]、楽天 → [[payment-firms/rakuten-fg|Rakuten FG]]、d-point → [[megabanks/ndfg|NDFG]]、PayPay → [[megabanks/paypay-fg|PayPay FG]]。ポイントプログラムを読むことは、どのグループが顧客獲得コストを下げているかを告げる。
- **「赤字」はアンカー依存である。** ウォレットアンカー型と EC アンカー型のキャンペーンは P&L 上で最悪に見えるが、最良のグラフと最も急な金融ファネルを買っているかもしれない。連合ポイントはスポンサーあたりでは安く見えるが、資産を分散させる。

## 関連

- [[loyalty/INDEX|loyalty index]]
- [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]
- [[loyalty/point-program-unit-economics|point program unit economics]]
- [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]
- [[loyalty/retail-media-points-data-loop|retail-media points data loop]]
- [[loyalty/point-exchange-network-risk|point exchange network risk]]
- [[loyalty/rakuten-point-ecosystem-deep|Rakuten Point ecosystem deep]]
- [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]
- [[loyalty/d-point-detailed-ecosystem|d Point detailed ecosystem]]
- [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|SoftBank / Yahoo / PayPay unified points]]
- [[loyalty/ponta-points-deep-dive|Ponta points deep dive]]
- [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation|d Point / au (KDDI) / docomo telco-point consolidation case]]
- [[payments/cashless-jp-landscape|Japan cashless payment landscape]]
- [[payments/INDEX|payments INDEX]]
- [[payment-firms/rakuten-fg|Rakuten FG]]
- [[megabanks/smfg|SMFG]]
- [[megabanks/ndfg|NDFG]]
- [[megabanks/paypay-fg|PayPay FG]]
- [[JapanFG/INDEX|JapanFG INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- 楽天ポイントクラブ公式ガイダンス——楽天ポイントのプログラム構造（アンカー／SPU の参照）。
- d POINT CLUB 公式サイト——通信回線アンカー型の共通ポイント。
- CCC ／ CCCMK Holdings プレス資料——V Point ／共通ポイント事業者の構造。
- 一般社団法人ペイメントジャパン——コード決済のキャンペーンおよび開示規範。
- ASBJ 企業会計基準第29号「収益認識に関する会計基準」——共通のポイント負債／ブレッカジ処理。
