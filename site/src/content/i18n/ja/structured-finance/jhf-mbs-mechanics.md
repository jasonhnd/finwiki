---
source: structured-finance/jhf-mbs-mechanics
source_hash: c97bd0b72bd45300
lang: ja
status: machine
fidelity: ok
title: "JHF MBS の仕組み（Japan Housing Finance Agency）"
translated_at: 2026-06-03T00:53:08.336Z
---
# JHF MBS の仕組み（Japan Housing Finance Agency）

## 要約

Japan Housing Finance Agency（JHF）は、民間金融機関が組成した Flat 35  固定金利住宅ローンを裏付けとする月次 MBS 発行プログラムを運営している。JHF は証券化支援事業を通じてローンを買い取り、「MBS Trust」構造に組み入れ、通常は発行額の大部分を占めるシニア部分が JHF の政府支援型信用を持つ MBS を発行する。対 JGB スプレッドはタイトで、シニアクラスでは通常 10-30 bp 程度であり、実質的なソブリン連動信用を反映している。これは日本最大の円建てストラクチャードペーパー・エンジンである。このページは JHF MBS の仕組みを理解するために使い、機関自体は [[policy-finance/japan-housing-finance-agency]]、スプレッド経済性は [[structured-finance/jhf-mbs-vs-private-rmbs-spread]] と組み合わせる。

## ウィキ上の位置づけ

| 知りたいこと | 行き先 |
|---|---|
| JHF 機関ページ | [[policy-finance/japan-housing-finance-agency]] |
| JHF と民間のスプレッド比較 | [[structured-finance/jhf-mbs-vs-private-rmbs-spread]] |
| 民間 RMBS との比較 | [[structured-finance/japan-rmbs-issuance-structure]] |
| SPV ビークル文脈 | [[structured-finance/spv-tk-gk-vehicle-japan-tax]] |
| 信託ビークル文脈 | [[structured-finance/japan-trust-beneficial-interest-vs-spv]] |
| ドメイン索引 | [[structured-finance/INDEX]] |

## 1. Flat 35  の組成

| 要素 | 説明 |
|---|---|
| ローン商品 | Flat 35  — 長期固定金利住宅ローン（最長 35  年） |
| 組成 | 民間金融機関（メガバンク、地域銀行、モーゲージバンク）が JHF の適格基準に従って組成する |
| 買い手 | JHF が組成後にオリジネーターからローンを買い取る（証券化支援事業） |
| リスク移転 | 信用リスクは JHF（または MBS Trust）へ移る。オリジネーターはサービシングを維持する |
| 借入人の体験 | 借入人の関係はオリジネーターとの間にあり、ローン条件は期間中固定される |

Flat 35  は民間住宅金融の空白を埋める。日本の民間住宅ローンの多くは変動金利または短期固定金利である。Flat 35  は、JHF の証券化エンジンに支えられた長期固定金利の選択肢を提供する。

## 2. 月次 MBS 発行のリズム

| リズムの側面 | 設定 |
|---|---|
| 頻度 | 月次 |
| 各発行 | 直前期間に購入された住宅ローンを裏付けとする新しい MBS シリーズ |
| シリーズ名 | 連番（例: "Series XXX"） |
| スケジュール | 予測可能で、事前に公表され、マーケットメイクを支える |

月次のリズムにより、JHF MBS は円建てストラクチャードペーパーで最も定期的な発行プログラムとなり、生命保険会社、地域銀行、資産運用会社に安定供給を提供する。この規則性はタイトな価格形成を支える。投資家は断続的な供給を追う必要がない。

## 3. MBS Trust 構造

| 構成要素 | 役割 |
|---|---|
| 信託 | MBS Trust が住宅ローンプールを保有する。 |
| 信託受益者 | MBS 投資家が受益権を保有する。 |
| シニアクラス | 通常、発行額の 90-99%。JHF 保証により支えられる。 |
| 劣後クラス | JHF またはその他当事者が保有し、初期損失を吸収する。 |
| サービサー | オリジネーターがサービシング役を維持し、回収金を信託へ渡す。 |
| 受託者 | 信託銀行が受託者となる。 |

"MBS Trust" という用語は JHF 固有だが、構造としては、JHF の政府支援型信用で包まれたシニアクラスを持つシニア・劣後 MBS 構造と同等である。

## 4. 政府支援型シニアクラス

- JHF MBS のシニアクラスは、JHF の保証、または JHF が発行主体として果たす役割により実質的にバックストップされる MBS 構造によって支えられる。
- JHF 自体は MLIT 監督下の独立行政法人である。[[policy-finance/japan-housing-finance-agency]] を参照。
- 政府の暗黙支援: JHF は直接のソブリン保証者ではないが、市場参加者は JHF MBS を実質的にソブリン連動信用として価格づける。
- 格付け: シニアクラスは通常、JHF / ソブリン連動を反映して JCR / R&I から最高位の格付け階層を得る。

## 5. 劣後部分

| 側面 | 設定 |
|---|---|
| 規模 | 通常、発行額の 1-10% |
| 保有者 | JHF が保有（ファーストロスとしてのスキン・イン・ザ・ゲーム） |
| 機能 | シニアクラスに損失が及ぶ前に信用損失を吸収する |
| 効果 | シニアクラスは通常のデフォルト変動から実質的に隔離される |

JHF は自らの MBS におけるファーストロスの劣後持分を保有する。これは一種の「スキン・イン・ザ・ゲーム」であり、投資家に対してシニア債が通常の信用変動から隔離されているという信頼を与える。

## 6. 繰上返済行動

| 要因 | 効果 |
|---|---|
| 借換の波 | Flat 35  借入人は、より低金利の Flat 35  または民間変動金利住宅ローンへ借り換えることがある。 |
| 転居 / 売却 | 標準的な繰上返済。 |
| ボーナス返済 | 日本固有の要素。給与所得者が年次ボーナス時に一部繰上返済を行うことが多い。 |
| 金利感応度 | 長期固定金利借入人は、金利が大きく下がると借換を行う。 |

日本の繰上返済モデルは、過去の Flat 35  行動に合わせて調整される。通常、米国の標準的な MBS より遅いが、年次ボーナス時期に繰上返済の山が生じる。JHF は、格付け機関と投資家がモデリングに使う繰上返済データを公表している。

## 7. 投資家基盤

| 投資家クラス | 理由 |
|---|---|
| 生命保険会社 | 長期デュレーションでソブリン連動の信用が ALM に合う。 |
| 地域銀行 | 実質的なソブリン信用で JGB プラスの利回りを得られる。 |
| 資産運用会社 | 債券ファンドの構成銘柄。 |
| 公的信用投資家 | 住宅政策テーマへの直接配分。 |
| 外国人投資家 | 選択的。特に JGB カーブがフラットなとき。 |

投資家基盤は、若干の利回り上乗せ志向を持つ JGB 投資家に近い。JHF MBS は、小幅なスプレッドを持つソブリン連動商品として扱われる。

## 8. 比較要約

| 観点 | JHF MBS | 民間 RMBS |
|---|---|---|
| 裏付けローン | Flat 35 （長期固定） | 変動金利または混合ジャンボ |
| オリジネーター | 民間銀行 → JHF が購入 | 民間銀行（メガバンク） |
| 信用補完 | JHF / 政府支援型シニア | 劣後 + OC + リザーブ |
| 発行頻度 | 月次 | 断続的 |
| シニア格付け | 最高位（ソブリン連動） | 構造化により AAA-AA |
| 対 JGB スプレッド | ~10-30 bp | ~50-100 bp |

[[structured-finance/japan-rmbs-issuance-structure]] および [[structured-finance/jhf-mbs-vs-private-rmbs-spread]] と比較する。

## 9. 重要性

- JHF MBS は日本最大の円建てストラクチャードペーパー・エンジンであり、円建て RMBS 価格形成のベンチマークを実質的に設定する。
- これは [[structured-finance/INDEX]] の公的信用アンカーであり、民間住宅ローン組成と資本市場調達をつなぐ構造的な橋である。
- これにより、日本で長期固定金利住宅ローンが実現可能になる。JHF の証券化支援がなければ、民間銀行は長期デュレーション資金と対応させた大規模な固定金利住宅ローン帳簿を保有できない。
- 日本の生命保険会社にとって中核的な ALM 資産であり、多くの機関投資家勘定にとって JGB 代替である。

## 関連項目

- [[structured-finance/INDEX]]
- [[structured-finance/jhf-mbs-vs-private-rmbs-spread]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[policy-finance/japan-housing-finance-agency]]
- [[policy-finance/INDEX]]
- [[JapanFG/jfc]]
- [[real-estate-finance/INDEX]]

## 出典

- Japan Housing Finance Agency, "私たちについて".
- Japan Housing Finance Agency, "組織の概要".
- JCR (Japan Credit Rating Agency), MBS 基準。
- R&I (Rating and Investment Information), MBS 手法。
- MLIT, JHF 監督ページ。
