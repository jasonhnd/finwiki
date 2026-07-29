---
source: structured-finance/fitch-moody-sp-japan-criteria
source_hash: d78a857743d91be7
lang: ja
status: machine
fidelity: ok
title: "Fitch / Moody's / S&Pの日本向けストラクチャード・ファイナンス格付基準 — グローバル格付機関とJCR / R&I"
translated_at: 2026-07-29T09:38:56.815Z
---
# Fitch / Moody's / S&Pの日本向けストラクチャード・ファイナンス格付基準 — グローバル格付機関とJCR / R&I

## TL;DR

信頼できる格付機関比較は、同一の特定取引、トランシェ、格付日、格付基準の版を揃えることから始まる。従来の一律な主張、すなわち二重格付が原則であること、1–3ノッチの格付差、固定的な回収率格差、日本のRMBSがAAAを取得できないとするソブリン上限は、いずれも裏付けられていない。S&Pの公開格付基準は、ソブリン格付が絶対的な上限ではないことを説明している。Moody'sとFitchについても、結論は適用される格付基準と特定の格付アクションに基づく必要があり、架空の「グローバル格付機関」合成モデルに基づいてはならない。

## Wiki内の参照先

本ページは、[[structured-finance/INDEX|structured-finance index]]配下の**格付基準比較**ノードである。国内格付機関の観点については[[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]、投資家需要については[[structured-finance/japan-abs-market-overview|Japan ABS market overview]]、格付対象となる法的主体については[[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]と対照して読む。クロスボーダーの関連領域として、RMBS / J-REITデットを扱う[[real-estate-finance/INDEX|real-estate-finance index]]、より広い信用スプレッドの文脈を扱う[[finance/INDEX|finance index]]も参照する。

## 1. グローバル格付機関各社 — 日本のストラクチャード・ファイナンスでの位置付け

[金融庁の現行登録簿](https://www.fsa.go.jp/menkyo/menkyoj/shinyoukakuduke.pdf)から確認できるのは、以下の表に示す日本での登録範囲に限られる。

| 格付機関グループ | ここで確認できること | 別途根拠が必要なこと |
|---|---|---|---|
| Moody'sの日本法人 | 金融庁登録簿の現行項目 | 資産クラス別の実績、受任状況、格付は、公開された特定の格付アクションで確認する必要がある |
| S&Pの日本法人 | 金融庁登録簿の現行項目 | 同左。特定の格付アクションが引用する格付基準を適用する |
| Fitchの日本法人 | 金融庁登録簿の現行項目 | 同左。グループ名から日本での活動を推測しない |

各法人について、金融庁登録簿の現行状況と正確な登録項目を再確認する。グループ名だけでは、日本での登録や活動を立証できない。

## 2. ソブリン格付上限 — 構造上の上限

[S&Pの公式ストラクチャード・ファイナンス格付基準ライブラリー](https://www.spglobal.com/ratings/en/regulatory/ratings-criteria/-/articles/criteria/structured-finance/filter/general)は、以下の根拠確認ルールを支持し、ソブリン格付を絶対的な上限として扱うことを明示的に否定している。

| 確認事項 | 根拠確認ルール |
|---|---|
| ストラクチャード・ファイナンス格付はソブリン格付を上回り得るか | 当該格付機関の現行「ソブリン格付を上回る格付」に関する基準とストラクチャード・ファイナンス格付基準を適用し、一律の上限を設けない |
| 日本のソブリン格付は何か | 恒久的な数値ではなく、当該格付機関による日付が明記されたソブリン格付アクションを使用する |
| 特定トランシェの制約要因は何か | 取引資料に記載されたソブリン、送金・通貨交換、カウンターパーティ、資産の分析を引用する |
| スプリット・レーティングがあるか | 同じトランシェを同じ日付で比較し、各格付機関固有の格付尺度を記録する |
| 格付差の原因は何か | 各格付機関が公表した当該取引の理由を使用し、一定のノッチ数を推測しない |

## 3. モデル前提の相違

### 3a. デフォルト頻度 / 格付推移行列

デフォルト頻度データ、較正対象地域、格付推移の前提は、格付機関、資産クラス、格付基準の版によって異なる。適用格付基準または特定取引の格付資料で公表されている場合に限り記録する。「文化的な支払規律」は、本ページで裏付けられた格付方法上の入力ではない。

### 3b. 回収率の前提

[JCRの格付方法ライブラリー](https://www.jcr.co.jp/en/rrinfo/meth_sf/)と、適用されるグローバル格付機関の基準から支持されるのは、以下の表に示す資料ごとの比較に限られる。

| 項目 | JCRまたはR&Iで必要な根拠 | S&P、Moody'sまたはFitchで必要な根拠 |
|---|---|---|---|
| 資産とプール | 特定の格付基準および取引資料 | 同じ取引および資産の定義 |
| 回収率 / 損失率 | 公表された前提、ヘアカットおよび算定根拠 | 公表された前提、ヘアカットおよび算定根拠 |
| 時期 | 公表された回収期間およびシナリオ | 公表された回収期間およびシナリオ |
| 地域 | 開示された区分およびサンプル | 開示された区分およびサンプル |
| 比較 | 定義を揃えた後にのみ計算する | 一般化した「国内対グローバル」の比率レンジを設けない |

特定の格付機関が公表した取引理由に明記されていない限り、回収率の差をスプリット・レーティングの最大要因と位置付けてはならない。

### 3c. キャッシュフロー・ストレス

金利、期限前返済、カウンターパーティ、サービシングのストレスは、引用した格付基準の版に基づいて比較する。本ページでは、いずれかの格付機関が一律により積極的または保守的であるとは順位付けしない。

## 4. 格付推移行列の相違 — 実証上の観察

コホート、観測期間、格付取下げ、格付尺度を揃えない限り、格付推移率の比較は記載しない。特定の格付資料が法的拘束力のある債務を明示し、その信用力を評価に反映している場合を除き、スポンサー名を信用補完として扱ってはならない。

## 5. 最近のJCR / S&Pスプリット・レーティング事例 — 例示的なパターン

[JCRの公開格付一覧](https://jcr.co.jp/en/ratinglist/sf_sf/)と、他の格付機関による特定案件の格付アクションが、以下の比較に必要な入力である。

| 比較項目 | 必要な公開根拠 |
|---|---|
| 取引 | 法的な発行体、シリーズおよび担保 |
| トランシェ | 同一クラスおよび同一の支払順位 |
| 格付 | 各格付機関による日付が明記された格付記号、見通し / ウォッチ、アクション |
| 格付基準 | 各アクションが引用した版 |
| ストラクチャー上の前提 | 各資料に記載された信用補完、カウンターパーティ、キャッシュフロー・ストレス |
| スプレッド | 日付が明記された発行市場または流通市場の観測値。格付記号からベーシスポイントを推測しない |

## 6. 二重格付が行われる理由

発行体が複数の格付機関を起用する場合はあるが、その理由は取引ごとに異なる。投資家の運用方針、規制上の認定、担保適格性は、実際の投資家に適用される法域と規則に照らして確認する必要がある。本ページでは、「グローバル」格付が必要または十分であるとは想定しない。

## 7. 留意点

- 同一トランシェかつ同一日付でない格付記号の比較は、寛大さや保守性の根拠にはならない。
- 格付方法の改訂が格付に影響することはあり得るが、その影響は格付機関の見直し発表を引用して示す必要がある。
- 人員体制、所要時間、投資家の認識については、公開された具体的な情報源がない限り記載しない。

## 8. 未解決の確認事項

- どの版の格付基準と取引資料が、特定トランシェに適用されるか。
- 格付記号、日付、通貨、支払順位は揃っているか。
- 規制上または投資家による利用は、関係法域で引用された規則から導けるか。

## 関連ページ

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]
- [[real-estate-finance/INDEX|real-estate-finance index]]
- [[finance/INDEX|finance index]]
- [[derivatives/japan-cds-market-overview|Japan CDS market overview]]
- [[megabanks/mufg|MUFG]] · [[megabanks/smfg|SMFG]] · [[megabanks/mizuho-fg|Mizuho FG]]
- [[financial-regulators/japan-exchange-group|JPX]] · [[cooperative-banks/norinchukin|Norinchukin]]

## 出典

- [FSA, registered credit rating agencies](https://www.fsa.go.jp/menkyo/menkyoj/shinyoukakuduke.pdf).
- [S&P Global Ratings, structured-finance criteria library](https://www.spglobal.com/ratings/en/regulatory/ratings-criteria/-/articles/criteria/structured-finance/filter/general).
- [JCR, structured-finance methodology library](https://www.jcr.co.jp/en/rrinfo/meth_sf/).
- [JCR, structured-finance rating list](https://jcr.co.jp/en/ratinglist/sf_sf/).

---

> [!info] 校核状態
> confidence: **likely**. 本ページでは、特定取引を示さないスプリット・レーティング事例、固定的な回収率レンジ、スプレッドへの影響、ソブリン上限を意図的に記載していない。比較は、公開された特定の格付アクションに基づいて再現する。
