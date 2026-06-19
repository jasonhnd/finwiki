---
source: money-market/japan-cp-commercial-paper-market
source_hash: e9ecbe2b0f0da38d
lang: ja
status: machine
fidelity: ok
title: "Japan CP (commercial paper) market"
translated_at: 2026-06-19T06:09:18.104Z
---

# Japan CP (commercial paper) market

## Wiki route

この項目は [[money-market/INDEX|money-market index]] の下に位置する。ピア／対比のコンテキストとして [[money-market/japan-ncd-negotiable-cd-market|Japan NCD market]] と、より広範なシステム／規制上の境界として [[money-market/boj-open-market-operations|BoJ open market operations]] と照らし合わせて読むこと。

## TL;DR

コマーシャルペーパー（CP）は、日本の適格法人、銀行、ノンバンク金融機関が発行する短期の無担保約束手形である。CP はペーパーレス化され、短期社債（短期社債振替制度）に係る社債等の振替に関する法律の枠組みの下で [[securities/japan-securities-depository-center|JASDEC]] を通じて決済される。FinWiki にとって、CP は [[money-market/japan-ncd-negotiable-cd-market|negotiable CDs]]（銀行発行）および [[money-market/japan-tbill-treasury-discount-bill|Treasury Discount Bills]]（ソブリン発行）の傍らに位置する、法人発行体の短期資金調達のレーンである。

CP 市場が重要なのは、それが社債市場の外側における優良企業の資金調達コストの最も観測しやすいシグナルであるためであり、また日銀がストレス期や政策拡大期に [[money-market/boj-open-market-operations|open market operation]] のツールキットの一部として CP の買い切りと CP レポ・オペを用いてきたためである。

## Market Map

| Layer | Function | FinWiki route |
|---|---|---|
| Issuer | 法人、銀行、ノンバンク金融機関、および特別目的会社が短期資金を調達する。 | [[finance/japan-corporate-treasury-and-cash-management|corporate treasury]] |
| Arranger / dealer | 証券会社と銀行が CP 発行をアレンジ、分売、マーケットメイクする。 | [[securities/japan-underwriting-market-structure]] |
| Investor | 銀行、アセットマネージャー、MMF／MRF、保険会社、外国投資家が短期利回りのため CP を保有する。 | [[money-market/japan-mmf-money-market-mutual-fund]] |
| Settlement / register | JASDEC の短期社債振替制度が CP ポジションをペーパーレスの形で保有する。 | [[securities/japan-securities-depository-center]] |
| Operation counterparty | 日銀は適格 CP を担保として受け入れ、定期的に CP 買い切りオペを実施してきた。 | [[money-market/boj-open-market-operations]] |
| Statistics | 日銀の短期金融市場統計；JSDA の CP 発行／残高表。 | BoJ / JSDA public surfaces |

## Instrument Mechanics

| Element | Reading |
|---|---|
| Legal form | 社債等の振替に関する法律の下での短期社債（短期社債）であり、旧来の約束手形形式に取って代わるもの。 |
| Maturity range | 通常 1 日から 1 年未満まで；ほとんどの発行は 1 か月、3 か月、および四半期末満期付近に集中する。 |
| Form | JASDEC の短期社債振替制度を通じて完全にペーパーレス化されている。 |
| Issuance method | 割引方式；発行価格と償還価額の差が投資家の利回りとなる。 |
| Rating | 国内 CP 格付（R&I、JCR、S&P Japan、Moody's Japan）は通常 a-1 ／ J-1 ティア；格付はディーラーの分売と日銀の担保適格性に影響する。 |
| Tax | 源泉税の取り扱いは投資家区分により異なる；機関投資家の MRF／MMF 保有が支配的なリテールチャネルである。 |

## Tenor and Issuer Composition

CP 発行は短いテナーに集中し、高格付の銘柄が支配的である：

- **銀行系および銀行グループ CP**：メガバンクグループによる、短期資金調達とグループ ALM のための大規模発行。金融子会社 CP と銀行持株会社プログラムを含む。
- **ノンバンク CP**：消費者信用、リース、貿易金融の発行体が、ローリング CP プログラムを通じて債権と運転資本を調達する。発行体クラスターについては [[finance/japan-consumer-credit-and-leasing-finance-landscape|consumer credit / leasing landscape]] を参照。
- **事業会社 CP**：優良な製造業者、公益事業、商社が、運転資本、配当、納税のタイミングのために CP を発行する。商社クラスターは [[finance/japan-trading-house-finance-arm-landscape|sogo shosha finance arms]] と重複する。
- **資産担保 CP（ABCP）**：売掛債権、リース債権、または自動車ローンに裏付けられたコンデュイット。ABCP の発行はバニラ CP より小規模だが、ストラクチャードファイナンスの短期資金調達の典型的なレールである。

テナー分布は 1か月および 3か月の窓に偏る。MRF、銀行財務、法人キャッシュマネジメントからの投資家需要がそこに集中するためである。四半期末および年度末付近の発行は、バランスシートのキャパシティが逼迫するとスプレッドの拡大を示すことがある。

## BoJ Eligibility and Operations

| BoJ tool | CP linkage |
|---|---|
| Collateral framework | 適格 CP は、共通担保に対する日銀貸付および類似のオペの担保として受け入れられる。適格性ルールは格付、残存期間、発行体タイプ、ペーパーレス化の状況をカバーする。 |
| CP repo operations | 日銀は、資金供給ツールとして買い戻し条件付きの CP 買入オペを実施してきた。 |
| Outright CP purchases | 金融ストレス期および量的拡大期に、日銀は資産買入ツールキットの一部として CP 買い切りオペを実施してきた。 |
| Post-2024 framework | 2024 年 3 月のマイナス金利からの体制転換の後、日銀は標準的な担保およびレポファシリティを維持しつつ、非常時の事業会社資産買入プログラムを徐々に縮小してきた。ライブのメニューについては常に現在の日銀の市場操作のページを確認すること。 |

CP 買入ツールは歴史的に重要な危機対応の局面であった（2008-2009 GFC、2020 COVID-19 資金調達ストレス）が、恒久的な金融政策手段ではない。

## Market Size and Reading Rules

| Source | What it shows |
|---|---|
| BoJ short-term financial market statistics | CP、TDB、NCD、コール残高を含む、商品別の残高。 |
| JSDA CP issuance / outstanding tables | 発行量、残高、業種別および格付別の発行体内訳。 |
| JASDEC short-term corporate bond statistics | ペーパーレス化された CP 保有を示す振替制度の残高。 |
| Rating agency program reports | 個別発行体のプログラム規模、格付、直近の発行ペース。 |

CP 残高は、法人の短期資金調達需要のフロー指標として読むこと。短期円流動性がどこに滞留しているかを三角測量するため、CP 残高を [[money-market/japan-ncd-negotiable-cd-market|NCD]] および [[money-market/japan-tbill-treasury-discount-bill|TDB]] の残高と比較すること。

## JapanFG Relevance

- メガバンクグループ [[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]] は、銀行勘定と信託子会社を通じて主要な CP 投資家である。
- 証券会社 [[securities-firms/nomura-hd]]、[[securities-firms/daiwa-sg]]、[[securities-firms/mizuho-securities]]、[[securities-firms/mufg-mums]]、[[securities-firms/smbc-nikko]] は CP プログラムをアレンジし、プライマリーの分売を運営する。
- [[financial-regulators/tokyo-tanshi]]、[[financial-regulators/central-tanshi]]、[[financial-regulators/ueda-yagi-tanshi]] は短期資金を仲介し、コールおよびレポ活動に隣接する CP 市場のブローカレッジ・サポートを提供する。
- [[financial-regulators/japan-securities-finance]] は CP と相互作用する担保および短期資金調達の配管に参加する。

## Boundary Cases

- **CP vs NCD**：CP は法人／ノンバンクの発行；NCD は銀行預金の発行。投資家は信用、税、バランスシートの取り扱いに基づいて選択する。
- **CP vs TDB**：TDB はソブリンの割引発行；CP は発行体の信用リスクを負い、TDB／OIS に対するスプレッドで取引される。
- **CP vs short bonds**：残存期間 1年未満の短期社債は経済的に重複するが、異なる法的および登録のルートに従う。
- **CP vs ABCP**：バニラの事業会社 CP は無担保；ABCP は債権プールに裏付けられたストラクチャードファイナンスの発行であり、ストラクチャードクレジットのレンズで読まれる。

## Reading Checklist

1. スプレッドやプライシングを読む前に、発行体タイプ（事業会社／銀行系／ノンバンク／ABCP）を確認する。
2. 問いが運用上の流動性に関わる場合、格付と日銀の担保適格性のステータスを検証する。
3. テナー分布を確認する；平均テナーがヘッドラインの満期バケットに等しいと仮定しない。
4. プライマリーの発行ペースを残高の変化と区別する。
5. CP 市場のストレスを [[money-market/jgb-repo-market-japan|JGB repo]] の状況および日銀のオペメニューの変化と照らして読む。

## Related

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/japan-ncd-negotiable-cd-market]]
- [[money-market/japan-tbill-treasury-discount-bill]]
- [[money-market/japan-mmf-money-market-mutual-fund]]
- [[money-market/boj-post-2024-floor-system-complementary-deposit-facility]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-underwriting-market-structure]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: Money Market overview and short-term financial market statistics.
- Bank of Japan: open market operations page documenting CP eligibility and CP-related operation tools.
- JSDA: commercial paper issuance and outstanding statistics surface.
- JASDEC: short-term corporate bond book-entry system overview.
- FSA: FIEA FAQ on financial-instruments classification relevant to short-term corporate bonds.
