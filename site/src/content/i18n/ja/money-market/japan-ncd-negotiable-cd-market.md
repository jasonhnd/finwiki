---
source: money-market/japan-ncd-negotiable-cd-market
source_hash: 8b911165afd2509c
lang: ja
status: machine
fidelity: ok
title: "日本の NCD（譲渡性預金）市場"
translated_at: 2026-06-02T16:33:58.512Z
---
# 日本の NCD（譲渡性預金）市場

## ウィキ上の位置づけ

このエントリは [[money-market/INDEX|money-market index]] の配下に位置する。ピア / 対比の文脈には [[money-market/japan-cp-commercial-paper-market|Japan CP market]]、より広い制度 / 規制境界には [[money-market/boj-open-market-operations|BoJ open market operations]] と照らして読む。

## 要約

譲渡性預金（NCD、negotiable certificate of deposit / CD）は、日本の預金取扱金融機関が発行する譲渡可能な定期預金である。通常の定期預金と異なり、NCD は満期前に第三者へ売却できるため、発行銀行にとっては取引可能な短期調達手段であり、機関投資家にとっては流動性のある短期円運用先である。FinWiki では、NCD は [[money-market/japan-cp-commercial-paper-market|CP]]（企業 / ノンバンク発行）および [[money-market/japan-tbill-treasury-discount-bill|Treasury Discount Bills]]（国債割引発行）と並ぶ、銀行発行体の短期調達レーンである。

NCD 残高は、日銀が公表する単一の短期円商品残高の中でも最大級の一つであり、銀行の短期ホールセール調達の標準的なレールである。

## 市場マップ

| レイヤー | 機能 | FinWiki ルート |
|---|---|---|
| 発行体 | 預金取扱銀行が自らの名義で NCD を発行する。メガバンク、信託銀行、地域銀行はいずれも発行する。 | [[megabanks/mufg]], [[megabanks/smfg]], [[megabanks/mizuho-fg]] |
| ディーラー / プレースメント | 証券会社と銀行のトレジャリーデスクが NCD を販売し、マーケットメイクする。 | [[securities/japan-underwriting-market-structure]] |
| 投資家 | 銀行、資産運用会社、MRF、企業財務、保険会社、外国投資家が NCD を保有する。 | [[money-market/japan-mmf-money-market-mutual-fund]] |
| セカンダリー市場 | OTC ディーラー市場。短資会社と銀行トレジャリーデスクが取引を仲介する。 | [[money-market/tanshi-company-business-model]] |
| 統計 | 日銀の短期金融市場統計および預金統計、銀行開示。 | 日銀統計面 |

## 商品メカニクス

| 要素 | 読み方 |
|---|---|
| 法的形式 | 銀行預金。発行銀行の貸借対照表では預金負債として記録されるが、譲渡可能。 |
| 発行体 | NCD 発行を認められた銀行その他の預金取扱金融機関。 |
| 満期 | 一般に短期で、1 か月から 1 年が多いが、個別の期間設定も可能。 |
| 利息方式 | 固定金利または変動金利。変動 NCD は短期円ベンチマークを参照することが多い。 |
| 最低額面 | ホールセールサイズ。リテール預金商品ではない。 |
| 税務 / 規制 | 健全性規制上は銀行預金として扱われるが、セカンダリー市場で取引可能。 |

## セカンダリー市場の流動性

NCD は、銀行トレジャリーデスク、証券会社、短資会社が仲介する OTC ディーラー市場で取引される。セカンダリー流動性は実在するが、均一ではない。

- メガバンクと大手信託銀行の発行は最も厚い買い気配を持ち、知名度の高い発行体名はビッド・オファーの均衡に近い水準で取引される。
- 地域銀行や小規模発行体の NCD はセカンダリーの厚みが薄く、満期保有型のプレースメントに近いことが多い。
- 四半期末と年度末には、銀行ディーラーがキャパシティを管理するため、バランスシート効果によりスプレッドが拡大し得る。

投資家にとって、NCD の流動性は、最も深い商品（TDB、JGB レポ）と同一期間の流動性の低い企業 CP の間に位置する。

## MMF / MRF 適格性

NCD は短期円ファンドの標準的な保有資産である。

- **MRF (Money Reserve Fund)**: 個人証券口座の現金スイープを担う主要商品。MRF は短期 JGB、TDB、NCD、CP、レポを保有する。[[money-market/japan-mmf-money-market-mutual-fund|Japan MMF / MRF page]] で、この商品クラスにおける 2016 後の構造変化を参照。
- **機関投資家向け MMF 代替**: 中期国債ファンド型商品やその他短期債ファンドも、NCD を構成要素として保有する。
- **適格性制約**: ファンドの目論見書は、発行体格付けと残存期間ルールを定める。投資信託協会の自主規制も追加的な枠組みを与える。

MRF / 短期円ファンドからの NCD 需要は、銀行の短期発行を下支えする構造的な床である。この需要プールの変化は発行体のプライシングに影響する。

## 現在の残高規模

日銀の短期金融市場統計は、主要な短期円商品の残高を公表している。NCD 残高は、歴史的に公表される単一の短期円商品残高として最大級であり、CP と TDB の残高合計を大きく上回ることも多い。正確な数値は、銀行の調達戦略と政策環境に応じて月ごとに変動するため、必ず使用した日銀統計リリースを特定して引用する。

NCD 残高は、銀行のホールセール調達需要と、現行政策レジーム下で銀行バランスシートが短期負債をどれだけ受け入れるかを示す同時指標として読む。

## 2024 後のフロアシステム文脈

2024 年 3 月の日銀によるマイナス金利からのレジーム変更後、NCD のプライシングは次を反映する必要がある。

- プラスの短期政策金利。
- 銀行準備預金残高に適用される [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|complementary deposit facility (補完当座預金制度)]] 金利。
- 日銀に余剰資金を置くことと、NCD を発行または保有することの相対的な魅力。

銀行にとって、NCD 発行の経済性は、NIRP 後の枠組みのもとで、NCD 調達の限界コストが預金調達、レポ調達、直接コール市場調達と比べて競争力を持つかによって決まる。

## JapanFG での関連性

- 発行体側: [[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]]、それらのグループ傘下の信託銀行、[[banking/INDEX|banking domain]] に含まれる地域銀行はいずれも NCD を発行する。
- ディーラー側: [[securities-firms/mizuho-securities]]、[[securities-firms/mufg-mums]]、[[securities-firms/smbc-nikko]]、[[securities-firms/nomura-hd]]、[[securities-firms/daiwa-sg]] はプレースメントとセカンダリー取引に参加する。
- 短資仲介: [[financial-regulators/tokyo-tanshi]]、[[financial-regulators/central-tanshi]]、[[financial-regulators/ueda-yagi-tanshi]] は NCD セカンダリー市場活動と重なる仲介を提供する。

## 境界事例

- **NCD と通常の定期預金**: 通常の定期預金は譲渡できないが、NCD は譲渡可能である。NCD 登録簿がセカンダリー譲渡を支える。
- **NCD と CP**: NCD は銀行預金発行であり、CP は企業 / ノンバンク発行である。投資家の選択は、信用、税務、バランスシートルールによって決まる。
- **NCD と短期債**: NCD は預金負債であり、短期債は健全性規制と会計処理が異なる債務証券である。
- **NCD とインターバンク預金**: 二者間のインターバンク預金は、譲渡可能な NCD と同じではない。

## 読解チェックリスト

1. スプレッドを読む前に、発行銀行の種類（メガバンク、信託銀行、地域銀行、外国銀行支店）を特定する。
2. 期間と、NCD が固定金利か変動金利かを確認する。
3. ポジションが投資家保有なのか、担保として使われているのかを確認する。
4. 短期円流動性の所在を読むため、NCD 残高を CP と TDB の残高と比較する。
5. [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|post-2024 floor system]] 準備預金金利環境に照らしてプライシングを読む。

## 関連項目

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

- Bank of Japan: Money Market overview and short-term financial market statistics.
- Bank of Japan: deposit and CD statistics on the statistics download surface.
- JSDA: short-term financial market statistics references.
- FSA: NCD と短期預金に関連する商品分類についての FIEA FAQ。
