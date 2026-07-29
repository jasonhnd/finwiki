---
source: structured-finance/credit-rating-methodology-jcr-r-and-i
source_hash: eb9ea9b5ead789f0
lang: ja
status: machine
fidelity: ok
title: "日本のストラクチャード・ファイナンスにおける信用格付方法（JCR、R&I）"
translated_at: 2026-07-29T09:38:56.815Z
---
# 日本のストラクチャード・ファイナンスにおける信用格付方法（JCR、R&I）

## TL;DR

JCRとR&Iは、金融庁の信用格付業者登録簿に掲載された法人である。日本での登録は「NRSROと同等」であることを意味せず、両社の格付方法が相互に置き換え可能であることも、特定の資産クラスでいずれかの格付が必要または支配的であることも示さない。ストラクチャード・ファイナンスに関する結論には、当該格付機関が適用した格付基準の版と、特定取引の格付資料を引用する必要がある。一般的な会社情報から、人員数、年間格付アクション数、所有関係、格付差、トランシェの信用補完を推測してはならない。

## Wiki内の参照先

| 確認したい内容 | 参照先 |
|---|---|
| 市場概観 | [[structured-finance/japan-abs-market-overview]] |
| 個別ストラクチャー | [[structured-finance/japan-rmbs-issuance-structure]], [[structured-finance/japan-cmbs-issuance-structure]], [[structured-finance/auto-loan-abs-japan-toyota-honda]], [[structured-finance/consumer-loan-abs-japan-card-issuer]] |
| SPVビークルの文脈 | [[structured-finance/spv-tk-gk-vehicle-japan-tax]] |
| JHF MBSの文脈 | [[structured-finance/jhf-mbs-mechanics]] |
| ドメイン索引 | [[structured-finance/INDEX]] |

## 1. 格付機関の特定と登録

[金融庁の現行登録簿](https://www.fsa.go.jp/menkyo/menkyoj/shinyoukakuduke.pdf)、[JCRの会社概要](https://www.jcr.co.jp/en/service/company/company)、[R&Iの会社情報](https://www.r-i.co.jp/en/company/)は、以下の限定的な機関情報を裏付けている。

| 確認事項 | JCR | R&I |
|---|---|---|
| 法人 | 金融庁登録簿およびJCRの会社概要に記載された法人名を使用 | 金融庁登録簿およびR&Iの会社情報に記載された法人名を使用 |
| 日本における規制上の地位 | 登録信用格付業者。最新の登録項目と確認日を検証する | 登録信用格付業者。最新の登録項目と確認日を検証する |
| 所有関係 / 系列関係 | 最新の株主開示がない限り、本ページでは位置付けない | 最新の株主開示がない限り、本ページでは位置付けない |
| ストラクチャード・ファイナンスの対象範囲 | JCRの格付基準と特定案件の格付一覧で確認 | R&Iの適用格付基準と特定案件の格付記録で確認 |
| 海外規制上の認定 | 関係する海外規制当局の制度を確認する。日本での登録は代替にならない | 同左 |

## 2. 格付方法の根拠

[JCRのストラクチャード・ファイナンス格付方法ライブラリー](https://www.jcr.co.jp/en/rrinfo/meth_sf/)は、以下の表に示すJCRの確認経路を提供する。R&Iについて結論を出すには、対応するR&Iの公開資料が必要である。

| 主張 | 最低限必要な根拠 |
|---|---|
| 適用された格付方法 | 取引の格付資料が引用する格付基準の名称、公表 / 改訂日、資産クラス |
| プール前提 | 特定の格付資料に記載されたプールデータ、ベースケース、ストレスおよび除外事項 |
| 法的分析 | 特定取引の資料、および譲渡、分別管理、カウンターパーティ・リスクに関する格付機関の説明 |
| キャッシュフロー分析 | 実際のウォーターフォール、トリガー、ヘッジおよびモデル化されたシナリオ |
| 格付 | 特定トランシェ、日付、格付尺度および見通し / ウォッチの状況 |
| モニタリング | 日付が明記された格付アクションまたはモニタリング資料。一定の頻度を想定しない |

## 3. 登録は格付の同等性を意味しない

[金融庁の登録簿](https://www.fsa.go.jp/menkyo/menkyoj/shinyoukakuduke.pdf)は、日本で登録された法人を示す。以下の表は、その根拠から確認できることと確認できないことを整理する。

| 登録から確認できること | 登録からは確認できないこと |
|---|---|
| 確認日時点で、対象法人が金融庁登録簿に掲載されていること | NRSROとしての地位、または他法域での認定 |
| 対象法人が日本の登録信用格付業者制度の対象であること | 格付方法、格付尺度の実績、規制上の利用が同一であること |
| 特定の法人と登録項目を正確に引用できること | 国内またはクロスボーダー取引で、その格付が必要であること |
| 現在の登録状況を再確認できること | 支配的な市場シェア、または標準的な二重格付の組み合わせ |

## 4. 特定取引の比較

[JCRの公開ストラクチャード・ファイナンス格付一覧](https://jcr.co.jp/en/ratinglist/sf_sf/)と他の格付機関による公開格付アクションを用い、同一トランシェかつ同一日付だけを比較する。

| 比較項目 | ルール |
|---|---|
| 取引とトランシェ | 同一でなければならない |
| 観測日 | 同日とするか、日付の差を明示する |
| 格付尺度 | 各格付機関固有の記号と定義を記録する |
| 格付方法 | 引用された格付基準の版を記録する |
| 信用補完と前提 | 取引固有の信用補完およびストレス前提だけを記載する |
| スプレッドへの影響 | 日付が明記された市場価格が必要。ノッチ差からベーシスポイントを推測しない |

## 5. 編集上の境界

- 対象範囲と日付を明確にした母集団がない限り、JCRまたはR&Iが特定資産クラスの「大半を格付している」と記載しない。
- 人員数、年間格付アクション数、所有関係、標準的なストレス倍率、格下げノッチ、モニタリング頻度を捏造しない。
- 国内登録をNRSROと同等と表現しない。
- 格付だけから投資家適格性、銀行の自己資本上の取扱い、海外での認定を推測しない。

## 関連ページ

- [[structured-finance/INDEX]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-cmbs-issuance-structure]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda]]
- [[structured-finance/consumer-loan-abs-japan-card-issuer]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/jhf-mbs-vs-private-rmbs-spread]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]
- [[banking/INDEX]]
- [[finance/INDEX]]

## 出典

- [FSA, registered credit rating agencies](https://www.fsa.go.jp/menkyo/menkyoj/shinyoukakuduke.pdf).
- [JCR, company information](https://www.jcr.co.jp/en/service/company/company).
- [R&I, company information](https://www.r-i.co.jp/en/company/).
- [JCR, structured-finance methodology library](https://www.jcr.co.jp/en/rrinfo/meth_sf/).
- [JCR, structured-finance rating list](https://jcr.co.jp/en/ratinglist/sf_sf/).
- FSA, credit-rating-agency designation pages.
- JSDA (Japan Securities Dealers Association).
