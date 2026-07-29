---
source: structured-finance/jhf-mbs-mechanics
source_hash: b96117035591145c
lang: ja
status: machine
fidelity: ok
title: "JHF MBSの仕組み（住宅金融支援機構）"
translated_at: 2026-07-29T09:50:42.167Z
---
# JHF MBSの仕組み（住宅金融支援機構）

## TL;DR

住宅金融支援機構（JHF）は、参加金融機関から適格なFlat 35固定金利住宅ローンを買い取り、資産担保型の機構債を発行する。通常の月次JHF MBSは、90–99%のシニア・トランシェと1–10%の劣後トランシェを組み合わせたものではなく、JHFが別個のシニア・クラスを単に保証するものでもない。受益権行使事由の発生前は、JHF自身が元利金を適時に支払う責任を負う。事由発生後は債券が償還され、信託プールを裏付けとする受益権に置き換えられる。通常の月次MBSは、事由発生後のプール・リスクに対して超過担保を使用するが、グリーンMBSは超過担保を設定しないことが明記されている。価格については、恒久的なスプレッド・レンジではなく、日付が明記されたJHFの発行記録を使用する。

## Wiki内の参照先

| 確認したい内容 | 参照先 |
|---|---|
| JHFの機関ページ | [[policy-finance/japan-housing-finance-agency]] |
| JHFと民間RMBSのスプレッド | [[structured-finance/jhf-mbs-vs-private-rmbs-spread]] |
| 民間RMBSとの比較 | [[structured-finance/japan-rmbs-issuance-structure]] |
| SPVビークルの文脈 | [[structured-finance/spv-tk-gk-vehicle-japan-tax]] |
| 信託ビークルの文脈 | [[structured-finance/japan-trust-beneficial-interest-vs-spv]] |
| ドメイン索引 | [[structured-finance/INDEX]] |

## 1. Flat 35の組成

[JHFの公式MBS FAQ](https://www.jhf.go.jp/english/mbs_faq.html)は、以下の表にまとめた買取り、サービシング、信託の仕組みを説明している。

| 要素 | 説明 |
|---|---|
| ローン商品 | Flat 35 — 長期固定金利住宅ローン（最長35 年） |
| 組成 | 参加金融機関が、JHFの買取基準を満たすローンを組成する |
| 買い手 | JHFが証券化支援業務により適格ローンを買い取る |
| サービシング | 組成金融機関は通常、業務委託契約に基づき借入人からの支払回収を継続する |
| 資金調達との関係 | JHFはMBS発行代金をローン買取りの資金とし、債券条件に基づき住宅ローン・プールのキャッシュフローをMBS投資家へ支払う |

この表は、JHFが開示する買取り・資金調達経路を記録するものであり、Flat 35または民間住宅ローンの金利タイプ別市場シェアを立証するものではない。

## 2. 月次MBSの発行頻度

[JHFの日付が明記された発行実績](https://www.jhf.go.jp/files/topics/5014_ext_99_1.pdf)は、以下のプログラム記録に関する確認項目を支持している。

| 頻度に関する項目 | 根拠に基づく読み方 |
|---|---|
| 発行頻度 | 日付が明記された通常の月次シリーズの連続性から確認する |
| 各発行 | 特定シリーズの発行結果および対応するプール情報を使用する |
| シリーズ名 | 公式のシリーズ番号を維持する |
| 将来の発行予定 | 現行の発行計画を使用し、マーケットメイクまたは将来の供給を推測しない |

発行頻度だけから、投資家構成、流動性、価格を推測してはならない。

## 3. MBS信託のストラクチャー

[JHFの2026 投資家向け資料](https://www.jhf.go.jp/files/topics/5876_ext_99_0.pdf)および[公式FAQ](https://www.jhf.go.jp/english/mbs_faq.html)は、受益権行使事由の発生前における債券債務と、事由発生後における信託を裏付けとする請求権を区別している。

| 構成要素 | 役割 |
|---|---|
| 発行体および債務者 | JHFがMBSを発行し、受益権行使事由の発生前は元利金を適時に支払う責任を負う |
| 第三者受益信託 | JHFはMBS保有者全体の利益のために買い取った住宅ローンを信託し、信託されたローンに担保権を設定する |
| 事由発生前 | 投資家はJHFの債券を保有し、信用力は主にJHFの適時支払能力を反映する |
| 事由発生後 | 未償還債券は償還され、信託プールを裏付けとする受益権に置き換えられる |
| 信用補完 | 通常の月次MBSは、事由発生後の受益権の支払を補完するために超過担保を利用する |
| グリーンMBSの例外 | JHFは、グリーンMBSが超過担保を利用しないと明記している |

これは、条件付きの信託受益の仕組みを備えた資産担保型の機構債であり、一般的なシニア / 劣後の発行時資本構成ではない。

## 4. 受益権行使事由の発生前後における信用リスク

[JHFの公式FAQ](https://www.jhf.go.jp/english/mbs_faq.html)および[2026 投資家向け資料](https://www.jhf.go.jp/files/topics/5876_ext_99_0.pdf)は、以下の事由の範囲を裏付けている。

- 事由発生前は、JHFが契約上の適時支払義務を負う。この義務を、別個のシニア・トランシェに対する「JHF保証」と表現するのは誤りである。
- 債券資料で定義された事由が発生すると、債券は償還され、保有者は該当する信託プールを裏付けとする受益権を受け取る。
- JHFは商品説明において事由の定義とプール情報を公表しているが、各シリーズには正確な債券資料が適用される。
- 格付は、日付が明記された発行記録から確認する必要がある。JHFのFY2026 投資家向け資料は、通常の月次MBSについてS&PとR&IによるAAA格を記載する一方、グリーンMBSには異なる格付を記載している。

## 5. 通常の月次MBSとグリーンMBSの信用補完

[JHFのFY2026 商品比較](https://www.jhf.go.jp/files/topics/5007_ext_99_1.pdf)は、以下の表に示す商品範囲を裏付けている。

| 比較項目 | 通常の月次MBS | グリーンMBS |
|---|---|---|
| 担保 | 買い取ったFlat 35住宅ローン | グリーン・フレームワークの適格基準を満たす、買い取ったFlat 35住宅ローン |
| 超過担保 | 受益権行使事由の発生後における受益権の支払を補完するために利用 | 利用しない |
| 支払形態 | 月次パススルー | 適用されるグリーンMBS資料から商品条件を確認する必要がある |
| 格付根拠 | 日付が明記された発行時格付。FY2026 比較では通常の月次MBSはS&P AAA(sf) / R&I AAA | 日付が明記された発行時格付。通常の月次MBSと相互に置き換えられない |

## 6. 期限前返済の動向

[JHFは月次ファクターとプールデータを公表している](https://www.jhf.go.jp/about/investor/shisan_tanpo/kihatsu/factor.html)。このため、以下の表では、開示された仕組みと、シリーズデータから計測すべき動向を分けている。

| 項目 | 根拠に基づく読み方 |
|---|---|
| 月次ファクター | JHFは対象シリーズごとに、当初残高に対する現在残高の比率を開示する |
| 予定・予定外の元本 | いずれも、適用資料に基づく月次パススルー償還額に影響する |
| 予想平均年限 | 法定満期とは異なり、観測されたプール返済に左右される |
| モデリング | 日付が明記されたファクターとプール属性データを使用する。本ページでは、根拠のない「賞与期の増加」または米国との比較を想定しない |

期限前返済に関する主張は、借入人についての固定観念から推測せず、JHFのシリーズ別データまたは引用したモデルから再現する必要がある。

## 7. 投資家層

[JHFの日付が明記された発行実績](https://www.jhf.go.jp/files/topics/5014_ext_99_1.pdf)は発行を特定するが、投資家配分を示すものではない。以下の表は、必要な根拠を示す。

| 投資家に関する主張 | 必要な根拠 |
|---|---|
| 投資家区分 | 特定シリーズについて公開された配分情報または保有状況の開示 |
| 金額 / 比率 | 日付が明記された金額、分母、報告対象母集団 |
| ALMまたは政策上の動機 | 投資家自身による公開声明 |
| 海外投資家の参加 | 日付が明記された配分または保有状況の開示 |
| JGB需要との比較 | 対応する公開投資家データおよび対象期間 |

これらの情報源がない限り、投資家の序列または動機を主張しない。

## 8. 比較概要

[JHFのFAQ](https://www.jhf.go.jp/english/mbs_faq.html)はJHF欄を裏付けている。民間RMBS欄は、各取引の資料に基づいて確認する必要がある。

| 比較項目 | JHF MBS | 民間RMBS |
|---|---|---|
| 発行体の義務 | JHFは受益権行使事由の発生前に元利金を適時に支払う義務を負う | 発行信託またはSPVの資料で定義される |
| 資産譲渡 | 買い取った住宅ローンは第三者受益信託に信託され、担保権が設定される | 取引固有の真正売買、信託またはSPVの仕組み |
| 信用補完 | 通常の月次MBSは事由発生後の信託受益権にOCを利用する。グリーンMBSは明示的な例外 | 取引ごとに異なり、劣後、OC、準備金その他の補完を含む場合がある |
| 公開データ | JHFは発行結果、ファクター、プール属性を公表する | 公募または私募によって入手可能性が異なる |
| 価格 | 日付が明記されたJHFの発行結果を確認する | 日付が明記された取引開示を確認する。本ページでは民間RMBSの一般的なレンジを主張しない |

[[structured-finance/japan-rmbs-issuance-structure]]および[[structured-finance/jhf-mbs-vs-private-rmbs-spread]]と比較する。

## 9. 重要性

- JHF MBSは、JHFの証券化支援業務を通じて、民間金融機関によるFlat 35の組成と資本市場からの資金調達を結び付ける。
- このプログラムは、日本の住宅ローン担保債券について、シリーズ単位の公開データを継続的に提供する。
- 条件付きの信託受益の仕組みを、一般的なシニア / 劣後RMBSの図に置き換えてはならない。

## 関連ページ

- [[structured-finance/INDEX]]
- [[structured-finance/jhf-mbs-vs-private-rmbs-spread]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[policy-finance/japan-housing-finance-agency]]
- [[policy-finance/INDEX]]
- [[financial-regulators/jfc]]
- [[real-estate-finance/INDEX]]

## 出典

- [JHF, FAQs about MBS](https://www.jhf.go.jp/english/mbs_faq.html).
- [JHF, FY2026 investor material](https://www.jhf.go.jp/files/topics/5007_ext_99_1.pdf).
- [JHF, MBS structure and beneficiary-interest explanation](https://www.jhf.go.jp/files/topics/5876_ext_99_0.pdf).
- [JHF, factors and other monthly pool data](https://www.jhf.go.jp/about/investor/shisan_tanpo/kihatsu/factor.html).
- [JHF, dated MBS issuance history](https://www.jhf.go.jp/files/topics/5014_ext_99_1.pdf).
