---
source: structured-finance/jhf-mbs-vs-private-rmbs-spread
source_hash: 4b167c1b8dcbe9d7
lang: ja
status: machine
fidelity: ok
title: "JHF MBS と民間 RMBS のスプレッド"
translated_at: 2026-06-03T00:53:08.347Z
---
# JHF MBS と民間 RMBS のスプレッド

## 要約

JHF MBS のシニアトランシェは JGB 対比でタイトに取引され、典型的には 10-30bp のレンジにある。これは実質的なソブリン連動信用と、予測可能な月次供給を反映する。民間 RMBS のシニアトランシェはより大きくワイドで、典型的には JGB 対比 50-100bp で取引される。これは政府支援がなく、信用補完を劣後 / 超過担保に依存するためである。この差は、信用力の違いに加えて構造・流動性要因を反映し、それぞれの投資家基盤を形づくる。JHF 側は生命保険会社と ALM 主導の買い手が支え、民間 RMBS はスプレッドを求める機関投資家が需要を主導する。[[structured-finance/INDEX]] におけるストラクチャリング判断を左右するスプレッド経済を理解するために、このページを使う。

## ウィキ上の位置づけ

| 知りたいこと | 参照先 |
|---|---|
| JHF MBS 構造 | [[structured-finance/jhf-mbs-mechanics]] |
| 民間 RMBS 構造 | [[structured-finance/japan-rmbs-issuance-structure]] |
| 市場概要 | [[structured-finance/japan-abs-market-overview]] |
| 格付手法 | [[structured-finance/credit-rating-methodology-jcr-r-and-i]] |
| JHF 機関 | [[policy-finance/japan-housing-finance-agency]] |

## 1. スプレッドの目安

| トランシェ | JHF MBS | 民間 RMBS |
|---|---|---|
| シニア (AAA / 最上位) | JGB 対比 ~10-30bp | JGB 対比 ~50-100bp |
| メザニン (A / BBB) | N/A (JHF 構造では実質的にすべてシニア) | JGB 対比 ~150-300bp |
| 劣後 / エクイティ | N/A (JHF が保有) | 高い二桁利回り |

これらは公開市場コメントに基づく例示レンジである。個別案件は JGB カーブ、期限前返済予想、ディーラー販売状況に対して価格決定される。スプレッドは BoJ の政策環境にも左右される。低金利かつイールドカーブ・コントロール下の環境ではスプレッドが圧縮される。

## 2. スプレッド差の要因

| 要因 | JHF MBS | 民間 RMBS |
|---|---|---|
| 信用 | 政府支援付きシニア。実質的にソブリン連動 | 劣後 + OC + リザーブ。民間信用 |
| 流動性 | 月次発行、広い投資家基盤、厚いセカンダリー | 断続的発行、狭い投資家基盤、薄いセカンダリー |
| 発行体集中 | 単一発行体 (JHF) | 複数発行体、案件固有構造 |
| 格付手法 | ソブリン隣接として扱われる | 民間ストラクチャード・クレジットとして扱われる |
| 期限前返済 | 保守的でモデル化しやすい Flat 35 の挙動 | プール固有、変動金利またはジャンボ |
| 投資家基盤 | 生命保険会社、地域銀行、ソブリン隣接の買い手 | 生命保険会社、資産運用会社、スプレッド投資家 |

## 3. 政府支援スプレッド成分

スプレッド差の大部分は、政府支援付きシニアクラスと民間ストラクチャリングによるシニアクラスの信用力の差を反映する。民間 RMBS シニアがストラクチャード・クレジットとして AAA 格付を得ていても、JHF MBS の背後にある黙示的な政府支援は、意味のあるタイト化プレミアムをもたらす。

| 成分 | 寄与 |
|---|---|
| 政府支援 | 最大の単一成分。ソブリン信用との結びつきを反映する |
| 流動性プレミアム | 重要。月次発行 + 幅広い参加が JHF をタイト化させる |
| 構造の複雑性 | 民間 RMBS 投資家は構造分析に対するプレミアムを求める |
| 発行量効果 | 単一で定期的な JHF プログラムは不確実性を下げる。民間案件は個別リスクを持つ |

## 4. 期限前返済挙動の違い

| ローン種類 | 期限前返済パターン |
|---|---|
| Flat 35 (JHF MBS) | 低い基礎返済率。ボーナス時期付近で上昇し、金利が大きく低下すると借換波が起きる |
| 変動金利ジャンボ (民間 RMBS) | 基礎返済率が速い。借換感応度が高く、変動金利カーブにより近い |
| 混合 (民間 RMBS) | 中間的。プール構成に依存する |

期限前返済挙動は MBS の実効デュレーションに影響する。バイ・アンド・ホールド投資家 (生命保険会社) は、スプレッドが債券の予想残存期間にわたって補償すると見て期限前返済リスクを受け入れる。売買志向の投資家は、期限前返済のばらつきを反映した割引率を適用する。

## 5. 機関投資家の選好

| 投資家 | JHF MBS | 民間 RMBS |
|---|---|---|
| 生命保険会社 (Asahi, Daido など) | 中核 ALM 配分、大口 | 選択的配分、スプレッド追求 |
| メガバンク ALM 勘定 ([[megabanks/mufg]], [[megabanks/smfg]], [[megabanks/mizuho-fg]]) | JGB 対比の利回り上乗せ | 限定的 (自社オリジネーターとの集中) |
| 地域銀行 | 標準的な円金利商品の保有 | 選択的 |
| 資産運用会社 (Asset Management One など) | 債券ファンドの構成要素 | スプレッドファンドの構成要素 |
| 公的信用投資家 | 直接配分 | 限定的 |
| 海外投資家 | 選択的、JGB 代替 | シニアでは選択的、メザニンではまれ |
| 年金基金 | ALM 主導の配分 | スプレッド配分 |

生命保険会社は両商品の最大の単一買い手だが、動機は異なる。JHF MBS は JGB 代替の長期保有であり、民間 RMBS はスプレッド配分である。

## 6. カーブ動態

| 環境 | JHF MBS スプレッド | 民間 RMBS スプレッド |
|---|---|---|
| BoJ YCC (イールドカーブ・コントロール) 時代 | 圧縮。すべての円クレジットがタイト | 圧縮。JHF との差は薄い |
| YCC 後の正常化 | カーブ変動性とともに拡大 | より大きく拡大 (流動性が低い) |
| リスクオフ局面 | 小幅拡大 (ソブリン連動) | 大幅拡大 (民間信用リスク) |
| 発行急増 | 影響は小幅 (月次発行) | 影響は大きい (断続的な供給集中) |

ストレス環境では、民間 RMBS 投資家がより大きな補償を求める一方、JHF MBS はソブリンカーブ近辺にとどまり続けるため、スプレッド差が拡大する。

## 7. ストラクチャリング判断への含意

| オリジネーター | 理由 |
|---|---|
| Flat 35 を組成 → JHF に売却 | 長期固定金利の貸出簿を JHF 経由で資金化。資本負担軽減。スプレッド経済が有利 |
| 変動金利ジャンボを組成 → 民間 RMBS として証券化 | 資金調達を多様化し、資本負担を軽減し、組成先との関係を維持する |
| 変動金利ジャンボを組成 → バランスシートに保有 | 民間 RMBS のスプレッド経済が証券化コストを正当化しない場合 |

JHF / 民間のスプレッド差は、銀行オリジネーターの証券化か保有かの判断における重要な経済入力である。

## 8. 格付会社の扱い

| 格付会社 | JHF MBS | 民間 RMBS |
|---|---|---|
| JCR | ソブリン隣接の格付扱い | 標準的なストラクチャード・クレジット手法 |
| R&I | ソブリン隣接の格付扱い | 標準的なストラクチャード・クレジット手法 |
| S&P / Moody's / Fitch | 格付がある場合はソブリン連動 | 標準的なストラクチャード・クレジット手法 |

格付会社の手法の詳細は [[structured-finance/credit-rating-methodology-jcr-r-and-i]] を参照。

## 関連項目

- [[structured-finance/INDEX]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[policy-finance/japan-housing-finance-agency]]
- [[policy-finance/INDEX]]
- [[money-market/INDEX]]
- [[financial-regulators/boj-monetary-policy]]
- [[banking/INDEX]]

## 出典

- Japan Housing Finance Agency, IR pages.
- JCR (Japan Credit Rating Agency), structured-finance methodology.
- R&I (Rating and Investment Information), structured-finance methodology.
- JSDA (Japan Securities Dealers Association).
- Megabank IR (MUFG, SMFG, Mizuho FG).
