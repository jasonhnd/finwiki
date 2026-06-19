---
source: money-market/japan-ncd-negotiable-cd-market
source_hash: 19610ed46cdc559a
lang: ja
status: machine
fidelity: ok
title: "日本のNCD（譲渡性預金）市場"
translated_at: 2026-06-19T06:09:18.146Z
---

# 日本のNCD（譲渡性預金）市場

## Wiki ルート

このエントリは [[money-market/INDEX|money-market index]] の配下に位置する。ピア / 対比の文脈については [[money-market/japan-cp-commercial-paper-market|Japan CP market]] と、より広範なシステム / 規制の境界については [[money-market/boj-open-market-operations|BoJ open market operations]] と照らし合わせて読むこと。

## TL;DR

譲渡性預金（NCD, 譲渡性預金 / CD）は、日本の預金取扱金融機関が発行する譲渡可能な定期預金である。通常の定期預金と異なり、NCD は満期前に第三者へ売却できるため、発行銀行にとっては取引可能な短期資金調達手段であり、機関投資家にとっては流動性の高い短期円運用先となる。FinWiki にとって NCD は、[[money-market/japan-cp-commercial-paper-market|CP]]（事業会社 / ノンバンクの発行）および [[money-market/japan-tbill-treasury-discount-bill|Treasury Discount Bills]]（国の割引発行）と並ぶ、銀行発行体の短期資金調達レーンである。

NCD 残高は日銀が公表する単一の短期円建て商品残高として最大級のものの一つであり、銀行の短期ホールセール資金調達の代表的なレールである。

## マーケットマップ

| レイヤー | 機能 | FinWiki ルート |
|---|---|---|
| 発行体 | 預金取扱銀行が自らの名義で NCD を発行する；メガバンク、信託銀行、地方銀行のいずれも発行する。 | [[megabanks/mufg]], [[megabanks/smfg]], [[megabanks/mizuho-fg]] |
| ディーラー / 引受 | 証券会社と銀行のトレジャリーデスクが NCD の引受とマーケットメイクを行う。 | [[securities/japan-underwriting-market-structure]] |
| 投資家 | 銀行、アセットマネージャー、MRF、事業法人の財務部門、保険会社、海外投資家が NCD を保有する。 | [[money-market/japan-mmf-money-market-mutual-fund]] |
| 流通市場 | 店頭ディーラー市場；短資会社と銀行トレジャリーデスクが取引を仲介する。 | [[money-market/tanshi-company-business-model]] |
| 統計 | 日銀の短期金融市場統計および預金統計；銀行のディスクロージャー。 | 日銀統計サーフェス |

## 商品メカニクス

| 要素 | 読み方 |
|---|---|
| 法的形態 | 銀行預金であり、発行銀行のバランスシート上は預金負債として計上されるが、譲渡可能。 |
| 発行体 | NCD を発行する権限を持つ銀行その他の預金取扱機関。 |
| 満期 | 一般に短期で、多くは 1 ヶ月から 1 年だが、個別設計のテナーも可能。 |
| 利息方式 | 固定金利または変動金利；変動 NCD はしばしば短期円ベンチマークを参照する。 |
| 最低発行単位 | ホールセールサイズ；リテール向け預金商品ではない。 |
| 税務 / 規制 | プルーデンス上は銀行預金として扱われるが、流通市場で取引可能。 |

## 流通市場の流動性

NCD は、銀行トレジャリーデスク、証券会社、短資会社が仲介する店頭ディーラー市場で取引される。流通市場の流動性は実在するが不均一である：

- メガバンクおよび主要信託銀行の発行は最も厚いビッドを持ち、よく知られた発行体名はビッド・オファー・パリティに近い水準で取引される。
- 地方銀行や中小発行体の NCD は流通市場の厚みが薄く、満期保有目的の取組に近い水準で取引されることが多い。
- 四半期末や年度末のバランスシート要因により、銀行ディーラーがキャパシティを管理する中でスプレッドが拡大することがある。

投資家にとって、NCD の流動性は最も流動性の高い側（TDB、JGB レポ）と、同じテナーで流動性の低い事業会社 CP との間に位置する。

## MMF / MRF 適格性

NCD は短期円ファンドにとって標準的な保有対象である：

- **MRF（マネー・リザーブ・ファンド）**：リテール証券口座の現金の主要なスイープビークル。MRF は短期 JGB、TDB、NCD、CP、レポを保有する。この商品クラスの 2016 以降の構造変化については [[money-market/japan-mmf-money-market-mutual-fund|Japan MMF / MRF page]] を参照。
- **機関投資家向け MMF 代替**：短期 JGB ファンド（中期国債ファンド型商品）その他の短期債ファンドも、構成要素として NCD を保有する。
- **適格性の制約**：ファンドの目論見書が発行体格付および残存期間のルールを定める；投資信託協会の自主規制が追加的な枠組みを与える。

MRF / 短期円ファンドからの NCD 需要は、銀行の短期発行を下支えする構造的な底値である。この需要プールの変化は発行体のプライシングに影響する。

## 現在の残高規模

日銀の短期金融市場統計は、主要な短期円建て商品の残高を公表している。NCD 残高は歴史的に、開示される単一の短期円建て商品残高として最大であり、しばしば CP と TDB の残高合計を大きく上回る。正確な数値は銀行の資金調達戦略と政策環境により月ごとに変動するため、使用した特定の日銀統計リリースを常に引用すること。

NCD 残高は、銀行のホールセール資金調達ニーズと、現行の政策レジーム下での短期負債に対する銀行のバランスシート選好の一致指標として読むこと。

## 2024 以降のフロアシステムの文脈

2024 年3月の日銀によるマイナス金利からのレジーム転換以降、NCD のプライシングは以下を反映せざるを得なくなった：

- プラスの短期政策金利；
- 銀行の準備預金残高に適用される [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|complementary deposit facility (補完当座預金制度)]] 金利；
- 余剰現金を日銀に保有することと、NCD を発行または保有することの相対的な魅力度。

銀行にとって、NCD 発行の経済性は、NCD 資金調達の限界費用が、ポスト NIRP の枠組み下で預金資金調達、レポ資金調達、コール市場直接資金調達と競争力を持つかどうかによって決まるようになった。

## JapanFG との関連

- 発行体側：[[megabanks/mufg]], [[megabanks/smfg]], [[megabanks/mizuho-fg]]、それらグループ傘下の信託銀行、および [[banking/INDEX|banking domain]] に含まれる地方銀行がすべて NCD を発行する。
- ディーラー側：[[securities-firms/mizuho-securities]], [[securities-firms/mufg-mums]], [[securities-firms/smbc-nikko]], [[securities-firms/nomura-hd]], [[securities-firms/daiwa-sg]] が引受と流通ディーリングに参加する。
- 短資仲介：[[financial-regulators/tokyo-tanshi]], [[financial-regulators/central-tanshi]], [[financial-regulators/ueda-yagi-tanshi]] が NCD 流通市場活動と重なるブローカレッジを提供する。

## 境界ケース

- **NCD vs 通常の定期預金**：通常の定期預金は譲渡不能；NCD は譲渡可能。NCD の登録制度が流通市場での譲渡を支える。
- **NCD vs CP**：NCD は銀行による預金発行；CP は事業会社 / ノンバンクの発行。投資家の選択は信用、税務、バランスシートのルールによる。
- **NCD vs 短期債**：NCD は預金負債；短期債はプルーデンスと会計処理が異なる債務証券。
- **NCD vs インターバンク預金**：相対のインターバンク預金は譲渡性 NCD と同一ではない。

## 読み方チェックリスト

1. スプレッドを読む前に、発行銀行のタイプ（メガバンク、信託銀行、地方銀行、外国銀行支店）を特定する。
2. テナーと、NCD が固定金利か変動金利かを確認する。
3. ポジションが投資家保有か、担保として使われているかを確認する。
4. NCD 残高を CP および TDB 残高と比較し、短期円流動性がどこに位置するかを読む。
5. プライシングを [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|post-2024 floor system]] の準備預金金利環境と照らして読む。

## 関連

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/japan-cp-commercial-paper-market]]
- [[money-market/japan-tbill-treasury-discount-bill]]
- [[money-market/japan-mmf-money-market-mutual-fund]]
- [[money-market/boj-post-2024-floor-system-complementary-deposit-facility]]
- [[financial-regulators/boj-monetary-policy]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[INDEX|FinWiki index]]

## 出典

- 日本銀行：短期金融市場の概要および短期金融市場統計。
- 日本銀行：統計ダウンロードサーフェス上の預金・CD 統計。
- 日本証券業協会（JSDA）：短期金融市場統計の参考資料。
- 金融庁：NCD および短期預金に関連する商品分類についての金商法 FAQ。
