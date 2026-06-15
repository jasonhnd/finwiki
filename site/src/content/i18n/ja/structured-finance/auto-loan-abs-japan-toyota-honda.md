---
source: structured-finance/auto-loan-abs-japan-toyota-honda
source_hash: e76f049df9b2ad5e
lang: ja
status: machine
fidelity: ok
title: "日本の自動車ローン ABS（Toyota Finance、Honda Finance、Nissan Credit）"
translated_at: 2026-06-03T00:53:08.356Z
---
# 日本の自動車ローン ABS（Toyota Finance、Honda Finance、Nissan Credit）

## 要約

日本の自動車ローン ABS は、日本の自動車 OEM のキャプティブ金融子会社および銀行系自動車金融会社によって発行される。主な継続発行体は[[card-issuers/toyota-finance]]、[[leasing-firms/toyota-financial]]（クロスボーダー向け）、Honda Finance、Nissan Credit、Mitsubishi UFJ Capital Auto Loan ABS、SMBC Auto である。構造は通常、数万件規模のローンからなる粒度の細かいプール、TK-GK SPV 形式、シニア / メザニン / エクイティのトランチングを持つ。リース ABS 型では信用リスクに加えて残価リスクを負う。このページは、[[structured-finance/INDEX]]における自動車金融 ABS レイヤーを理解し、[[structured-finance/INDEX]]のキャプティブ金融会社ページへ接続するために使う。

## ウィキ上の位置づけ

| 知りたいこと | 移動先 |
|---|---|
| 市場概要 | [[structured-finance/japan-abs-market-overview]] |
| 消費者 / カード ABS との比較 | [[structured-finance/consumer-loan-abs-japan-card-issuer]] |
| SPV ビークル | [[structured-finance/spv-tk-gk-vehicle-japan-tax]] |
| 格付手法 | [[structured-finance/credit-rating-methodology-jcr-r-and-i]] |
| Toyota Finance 会社ページ | [[card-issuers/toyota-finance]] |

## 1. 継続発行体

| 発行体 | 系列 | 典型的に証券化される商品 |
|---|---|---|
| [[card-issuers/toyota-finance]] | Toyota Group（国内 JP キャプティブ） | Toyota 小売自動車ローン、ディーラーフロアプランローン |
| [[leasing-firms/toyota-financial]] | Toyota Financial Services（国際持株会社） | クロスボーダー Toyota 自動車ローン ABS |
| Honda Finance | Honda Group キャプティブ | Honda 小売自動車ローン |
| Nissan Credit (Nissan Financial Services) | Nissan Group キャプティブ | Nissan 小売自動車ローン |
| Mitsubishi UFJ Capital Auto Loan ABS | MUFG 系 | 複数ブランドの自動車ローンプール |
| SMBC Auto | SMBC 系 | 複数ブランドの自動車ローンプール |
| [[leasing-firms/mitsubishi-hc-capital]] | Mitsubishi HC Capital（リース） | 自動車リース、設備リース |

OEM キャプティブのオリジネーターは、日本最大級の小売自動車ローンポートフォリオを持つため、発行量を支配している。銀行系自動車金融は、より小さい二次的チャネルである。

## 2. 典型構造

| 要素 | 典型的な設定 |
|---|---|
| ビークル | TK-GK SPV（[[structured-finance/spv-tk-gk-vehicle-japan-tax]]）または信託受益権 |
| 受託者 | [[trust-banks/sumitomo-mitsui-trust]]またはその他の信託銀行 |
| サービサー | オリジネーター（キャプティブ金融会社） |
| バックアップサービサー | 指名済み、オリジネーターのデフォルト時に発動 |
| プール規模 | 数万件のローン、粒度が細かい |
| プール構成 | 小売自動車ローン（3-7 年の期間が典型） |
| トランチング | シニア（AAA） / メザニン / エクイティ |

## 3. 加重平均 APR

- 日本の小売自動車ローン APR は通常、低い一桁台の範囲にあり、米国の自動車ローン ABS より大幅に低い。
- キャプティブ OEM の融資では、車両販売と組み合わせた販促 APR（0%-3%）が使われることが多い。非販促金利はより高い。
- 複数ブランドを扱う自動車金融会社（銀行系）の APR は、OEM 補助がないことを反映してやや高い。
- エクセススプレッド（担保クーポンから債券クーポンとサービシングを差し引いたもの）は、基礎 APR が低いため米国 ABS より薄い。構造はより高い劣後で補う。

## 4. デフォルトモデリング

| ドライバー | 影響 |
|---|---|
| 失業率 | 主要なデフォルトトリガー。日本の失業率は歴史的に低く、デフォルト率は抑制的。 |
| 所得ショック | 賞与削減の年（日本の景気後退時に典型的なパターン）は延滞を増やす。 |
| 車両再販価値 | 引き揚げ時の回収に影響する。日本は活発な中古車輸出市場の恩恵を受ける。 |
| プールのシーズニング | デフォルトは12-36カ月目にピークを迎える。保守的なランプ前提。 |
| 地域集中 | プールが全国分散していない場合は地域集中リスクがある。 |

JCR と R&I の日本自動車ローン ABS のデフォルトモデリング基準は、継続発行体の過去プールデータを用いる。デフォルトは歴史的に、米国の比較可能なプールより低かった。

## 5. リース ABS — 残価リスク

| リスク種別 | 対象 |
|---|---|
| 信用リスク | リース期間中の借手デフォルト |
| 残価リスク | リース満了時の車両価値が契約残価を下回り、貸手（または ABS）が損失を負うこと |
| 任意解約 | 借手が車両を早期返却することによる残価実現リスク |
| 整備 / 使用リスク | 過度な摩耗や走行距離。リース契約上のペナルティ |

リース ABS はローン ABS と根本的に異なるリスクプロファイルを持つ。借手が一度もデフォルトしなくても、貸手は各契約の満了時に残価リスクを負う。格付会社はリース ABS プールにより高い劣後を適用し、シナリオ上で残価ヘアカットにストレスをかける。

[[leasing-firms/mitsubishi-hc-capital]]およびその他のリース会社はリース ABS 案件を発行する。OEM キャプティブも、ローン ABS と同じシェルフにリース ABS を組み込んで発行する。

## 6. 投資家層

| クラス | 投資家 | 理由 |
|---|---|---|
| シニア | 生保、地域銀行、資産運用会社 | JGB プラスの利回り、AAA、粒度の細かいプール |
| メザニン | スプレッド投資家 | 利回り上乗せ |
| エクイティ | オリジネーター保有 | リスク保持 + 経済性 |

海外投資家は、クロスボーダーシェルフを通じた発行（通常は Toyota Financial Services の国際シェルフで、JCR / R&I に加えて S&P、Moody's、Fitch が格付）では、シニアトランチに選択的に参加する。

## 7. ディーラーフロアプラン ABS

自動車金融 ABS の一部は、ディーラー在庫金融（フロアプランローン）を証券化する。これらは以下の特徴を持つ。

- 期間が短い（年単位ではなく月単位）
- 回転が速い（リボルビング）
- 担保ダイナミクスが異なる（小売顧客が金融を受けた車両ではなく、新車在庫）
- デフォルトトリガーが異なる（小売顧客デフォルトではなくディーラー破綻）

日本ではフロアプラン ABS の発行量は小売ローン ABS より小さいが、キャプティブ金融会社がディーラー信用枠を管理するための通常の手段である。

## 8. OEM 信用との関係

- キャプティブ金融 ABS は、法的には OEM 親会社の信用から独立している（ABS は倒産隔離される）。
- ただし実務上、キャプティブ金融子会社の支払能力は親 OEM の継続に依存する。極端なシナリオでは、OEM のストレスがサービシングを混乱させ得る。
- 格付会社は、キャプティブ金融 ABS を OEM の観点からも部分的に分析する。バックアップサービサーの手当と親会社信用との結び付きが要因となる。

## 関連項目

- [[structured-finance/INDEX]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/consumer-loan-abs-japan-card-issuer]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[card-issuers/toyota-finance]]
- [[leasing-firms/toyota-financial]]
- [[leasing-firms/mitsubishi-hc-capital]]
- [[trust-banks/sumitomo-mitsui-trust]]

## 出典

- JCR (Japan Credit Rating Agency), auto-loan ABS criteria.
- R&I (Rating and Investment Information), auto-loan ABS methodology.
- Toyota Finance public corporate site.
- JSDA (Japan Securities Dealers Association).
- ASF Japan (Asset Securitization Forum Japan).
