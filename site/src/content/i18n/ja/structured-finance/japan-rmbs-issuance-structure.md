---
source: structured-finance/japan-rmbs-issuance-structure
source_hash: 45b1daf9335df64d
lang: ja
status: machine
fidelity: ok
title: "日本のRMBS発行構造"
translated_at: 2026-06-03T00:53:08.294Z
---
# 日本のRMBS発行構造

## 要約

日本の民間RMBSは、通常、メガバンクが組成した住宅ローンを裏付けとする大型案件である。これは JHF MBS と並存するが別物である。JHF MBS は政府支援があり、Flat 35  の固定金利ローンを裏付けとする一方、民間RMBSはメガバンクの組成資産であり、独自の信用補完と構造を持つ。シニアクラスは通常、高い投資適格格付を取得し、メザニンおよびエクイティクラスが信用リスクを吸収する。このページは、[[structured-finance/INDEX]] における民間RMBS構造レイヤーを理解し、[[structured-finance/jhf-mbs-mechanics]] と対比するために使う。

## ウィキ上の位置づけ

| 知りたいこと | 開くページ |
|---|---|
| JHF MBS エンジン | [[structured-finance/jhf-mbs-mechanics]] |
| JHF と民間商品のスプレッド差 | [[structured-finance/jhf-mbs-vs-private-rmbs-spread]] |
| 信託受益権とSPVの比較 | [[structured-finance/japan-trust-beneficial-interest-vs-spv]] |
| 市場概観 | [[structured-finance/japan-abs-market-overview]] |
| 格付手法 | [[structured-finance/credit-rating-methodology-jcr-r-and-i]] |

## 1. オリジネーター

| オリジネーター | 典型的な商品 |
|---|---|
| [[JapanFG/mufg]] / 三菱UFJ銀行 | 変動金利住宅ローン、大型プール |
| [[JapanFG/smfg]] / 三井住友銀行 | 変動金利住宅ローン |
| [[JapanFG/mizuho-fg]] / みずほ銀行 | 混合金利住宅ローン |
| 信託銀行（三菱UFJ信託、[[JapanFG/sumitomo-mitsui-trust]]、みずほ信託） | 長期固定金利住宅ローン |
| 地域銀行（時折） | 小規模な地域プール案件 |

メガバンクは、大型証券化を経済的に成立させられるだけの住宅ローンポートフォリオを保有しているため、民間RMBS発行を支配している。

## 2. JHF MBS との比較

| 次元 | JHF MBS | 民間RMBS |
|---|---|---|
| オリジネーター | 民間銀行 → JHF が証券化支援を通じて買い取る | 民間銀行（メガバンク） |
| 政府支援 | あり。シニアクラスは JHF 経由で政府支援を受ける | なし。シニアクラスは民間の信用補完に依存する |
| 裏付け商品 | Flat 35 （長期固定金利） | 変動金利または混合金利の大型住宅ローン |
| 発行頻度 | 毎月 | 断続的、プログラム型 |
| シニアクラス格付 | 最上位（実質的にソブリン連動） | 信用補完により AAA-AA |
| JGB 対比スプレッド | タイト（通常およそ 10-30bp） | 広め（シニアで通常およそ 50-100bp） |
| 投資家基盤 | 生保、地域銀行、アセットマネージャー、公的信用投資家 | 生保、アセットマネージャー、シニアクラスの海外投資家 |

スプレッド経済性については [[structured-finance/jhf-mbs-vs-private-rmbs-spread]] を参照。

## 3. 構造 — 典型的なトランチング

| トランチ | 目的 |
|---|---|
| シニア | AAA / AA 目標。発行の大宗。生保やアセットマネージャーに販売される |
| メザニン | Single-A または BBB 目標。規模は小さく、スプレッド投資家に販売される |
| 劣後 / エクイティ | ファーストロス。オリジネーターが保有することが多い |

トランチングは、劣後構造（キャッシュフローをシニア、メザニン、エクイティの順に支払う）と、以下に述べる追加の信用補完によって実現される。

## 4. 信用補完

| 仕組み | 目的 |
|---|---|
| 劣後 | ジュニアトランチがシニアより先に損失を吸収する。 |
| 超過担保（OC） | 担保プールが債券額面を上回り、その超過分が損失を吸収する。 |
| エクセススプレッド | 担保のクーポンが債券クーポン + サービシング手数料を上回る。パフォーマンス悪化時には留保される。 |
| 現金準備 / 流動性ファシリティ | 不足分のバックアップ。数か月分の利息をカバーする規模に設定される。 |
| サービサーアドバンス | サービサーが延滞分を投資家に立て替える。 |

民間RMBS構造は、劣後と超過担保に大きく依存する。シニアクラスには準備口座が一般的である。

## 5. 期限前返済モデリング

| 要因 | 影響 |
|---|---|
| 借換えの波 | 金利低下が借換えを促し、住宅ローンが期限前返済され、債券デュレーションが短縮する。 |
| 転居 / 売却 | 借入人が住宅を売却し、額面で期限前返済する。 |
| デフォルト / 差押え | キャッシュフロー上は期限前返済として扱われ、損失はジュニアが吸収する。 |
| 一部繰上返済 | 元本を部分的に減少させる。 |

日本の期限前返済行動は、歴史的に米国RMBSより遅い。日本の住宅ローン借換えは、組成コスト、期限前返済手数料の設計、勤務先連動の便益などにより摩擦が大きいためである。格付会社の前提は通常、JCR / R&I 基準に合わせて保守的に調整された期限前返済モデルを用いる。

## 6. ビークル選択

日本の民間RMBSは、信託受益権構造を使うことが最も多い。オリジネーターが住宅ローンプールを信託（[[JapanFG/sumitomo-mitsui-trust]] または他の信託銀行が受託者）に移転し、その信託がトランチ化された信託受益権を投資家に発行する。信託とSPVのトレードオフについては [[structured-finance/japan-trust-beneficial-interest-vs-spv]] を参照。

一部案件では、資産流動化法上の TMK（特定目的会社）を使う。TMK ルートは正式な上場債発行を可能にする。信託受益権ルートは通常、私募である。[[structured-finance/spv-tk-gk-vehicle-japan-tax]] を参照。

## 7. サービシング

- オリジネーターが通常サービシング（ローン回収、顧客対応）を継続する。
- シニアクラス向けにバックアップサービサーが指定され、オリジネーター破綻時に発動する。
- サービサーアドバンスは標準的である。オリジネーターは、回収可能性の限度内で延滞ローンの予定支払を立て替える。

## 8. 投資家基盤

| クラス | 投資家 | 理由 |
|---|---|---|
| シニア | 生保、メガバンクALM勘定、アセットマネージャー、海外投資家口座 | AAA-AA 担保による JGB プラス利回り |
| メザニン | スプレッド投資家、ヘッジファンド、一部年金基金 | 利回り上乗せ |
| エクイティ | オリジネーター保有 | リスク保持対応 + 経済性 |

日本には、米国 / EU 制度に類似する一部のリスク保持要件が残っている。通常、オリジネーターが純経済エクスポージャーの 5% を保有する。

## 関連項目

- [[structured-finance/INDEX]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/jhf-mbs-vs-private-rmbs-spread]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[policy-finance/japan-housing-finance-agency]]
- [[real-estate-finance/INDEX]]
- [[banking/INDEX]]

## 出典

- JCR (Japan Credit Rating Agency), RMBS structured-finance criteria.
- R&I (Rating and Investment Information), RMBS methodology.
- Japan Housing Finance Agency, IR pages.
- JSDA (Japan Securities Dealers Association).
- Megabank IR (MUFG, SMFG, Mizuho FG).
