---
source: finance/japan-listed-financial-groups-investable-universe
source_hash: 4e9e307637f0d117
lang: ja
status: machine
fidelity: ok
title: "日本上場金融グループ investable universe"
translated_at: 2026-06-15T03:48:21.921Z
---

# 日本上場金融グループ investable universe

## Wiki 経路

このページは [[finance/INDEX|finance index]] の下に位置する。これは日本上場金融グループの public-source reference universe であり、アドバイザー側のピアマッピングとしては [[finance/japan-ib-league-table]] と、エンゲージメント / 支配の読み解きとしては [[finance/japan-activist-investor-playbook]] と、保有開示メカニクスとしては [[finance/japan-large-shareholding-disclosure]] と、AGM / スチュワードシップ経路としては [[finance/japan-shareholder-proposal-and-agm-voting-route]] と、エンティティレベルのページとしては [[finance/INDEX|finance INDEX]] と併せて読むこと。システム側の文脈は [[securities/tokyo-stock-exchange]] と [[securities/japan-market-infrastructure-map]] にある。

## 要点（TL;DR）

これは日本上場金融グループのリファレンス・ユニバース・マップであり、サブセクター別に整理されている。これは買い / 売りリストではなく、投資助言でもなく、推奨でもなく、モデルポートフォリオでもない。すべての KPI レンジ (時価総額クラス、ROE クラス、利回りクラス、外国人保有クラス、指数組入、資本アクションクラス) は public-surface descriptors であり、読者が実世界の判断に用いる前に、各発行体の最新の IR 資料、JPX 適時開示、EDINET 提出書類に照らして再確認しなければならない。データの検証は読者の責任であり、古くなった、あるいはローテーションされたエントリは元の発行体ソースと照合して整合させるべきである。

## ユニバースのスコープ

| Sub-sector | Coverage in this page |
|---|---|
| Megabank financial groups | The four core megabank / large-bank FG anchors. |
| Trust FG | The single listed large trust FG anchor. |
| Regional bank FGs | Representative listed regional FGs across geography and size; not exhaustive. |
| Net banks / digital banks | Recently-listed digital / online bank anchors and adjacent fintech-banking listed names. |
| Major life and non-life insurers | The listed life and non-life groups with significant index weight. |
| Major securities | Listed independent and online securities groups; megabank-affiliated securities arms sit under their parent FG. |
| Card / consumer finance | Listed card issuers and consumer finance lenders. |
| Leasing | Listed general / equipment / bank-affiliated leasing groups. |
| Telco-finance hybrid | Listed telcos that hold a financial group of meaningful scale. |
| Fintech / crypto-adjacent | Listed groups whose financial business is fintech-led or crypto-adjacent. |

このユニバースは [[finance/INDEX|finance INDEX]] に照らして読むこと。これは個別発行体のためのエンティティレベルのインデックスである。

## Investable-Universe マトリクスのフィールド

以下の各エンティティについて、マトリクスは次の public-surface フィールドを用いる:

| Field | What it captures |
|---|---|
| Ticker | TSE 4-digit issuer code (primary listing). |
| Market-cap class | 大型 / 中型 / 小型 descriptor; not a point estimate. |
| Sub-sector | banking / insurance / securities / consumer finance / leasing / fintech / telco-finance. |
| Major shareholder shape | Sovereign / strategic / parent / public-float-heavy descriptor only. |
| ROE class | Range descriptor (low single-digit / mid single-digit / high single-digit / double-digit) read from latest IR; stale-risk warning applies. |
| Yield class | Range descriptor (low / mid / high) read from latest IR; not a forecast. |
| Buyback / capital-return policy | "Disclosed buyback programme present", "progressive dividend", "policy under review", etc. - presence-only descriptor. |
| Index inclusion | Nikkei 225 / TOPIX Core 30 / TOPIX Large 70 / FTSE Russell Japan presence. |
| Foreign-ownership class | Low / mid / high band read from latest IR; stale-risk warning applies. |
| Recent capital action | TOB-target / activist-target / rights-offering / convertible issuance / capital-and-business alliance, where publicly disclosed. |
| Stewardship anchor | Whether the issuer is a known stewardship / engagement target, routed via [[finance/japan-shareholder-proposal-and-agm-voting-route]]. |
| Key risks | The dominant balance-sheet / earnings risk class for the sub-sector. |

以下のすべての値は public-surface IR / 開示の文脈から導出されたカテゴリカルな記述子である。これらは point estimates ではなく、すぐに古くなる。利用前に発行体の最新の決算短信、有価証券報告書、ガバナンス報告書、IR デックに照らして再確認すること。

## Megabank FGs

| Entity | Ticker | Market-cap class | Major shareholder shape | ROE class | Yield class | Buyback policy presence | Index inclusion | Foreign-ownership class | Key risks |
|---|---|---|---|---|---|---|---|---|---|
| [[megabanks/mufg]] | 8306 | 大型 | Public-float-heavy with trust / insurer cross-holdings | Mid single-digit to high single-digit historical range | Mid yield class | Buyback programme historically disclosed | Nikkei 225, TOPIX Core 30, FTSE Russell Japan | High foreign ownership | NIM compression, JGB rate path, US / overseas credit cost, FX translation. |
| [[megabanks/smfg]] | 8316 | 大型 | Public-float-heavy with strategic cross-holdings | Mid single-digit to high single-digit historical range | Mid yield class | Buyback programme historically disclosed | Nikkei 225, TOPIX Core 30, FTSE Russell Japan | High foreign ownership | NIM compression, overseas credit, equity holdings unwind pace, capital-policy execution. |
| [[megabanks/mizuho-fg]] | 8411 | 大型 | Public-float-heavy with strategic cross-holdings | Low single-digit to mid single-digit historical range | Mid yield class | Buyback policy presence varies by period | Nikkei 225, TOPIX Core 30, FTSE Russell Japan | High foreign ownership | NIM compression, system / operational risk legacy, overseas credit, capital-policy execution. |
| Resona HD | 8308 | 中型 to 大型 | Public-float-heavy regional / SME-bank franchise | Mid single-digit historical range | Mid yield class | Progressive dividend stance historically disclosed | TOPIX, FTSE Russell Japan | Mid foreign ownership | Domestic-focused NIM, SME credit cycle, regional rate sensitivity, branch-network cost. |

これらは、アドバイザー側のフランチャイズの厚みについては [[finance/japan-ib-league-table]] と、エンティティレベルのページについては [[finance/INDEX|finance INDEX]] と照らして読むこと。

## Trust FG

| Entity | Ticker | Market-cap class | Major shareholder shape | ROE class | Yield class | Buyback policy presence | Index inclusion | Foreign-ownership class | Key risks |
|---|---|---|---|---|---|---|---|---|---|
| Sumitomo Mitsui Trust HD | 8309 | 大型 | Public-float-heavy with strategic / corporate cross-holdings | Mid single-digit historical range | Mid yield class | Buyback programme historically disclosed | Nikkei 225, TOPIX, FTSE Russell Japan | Mid to high foreign ownership | Trust-banking fee compression, asset-management flow, JGB rate path, real-estate exposure, fiduciary / governance event risk. |

## Regional FGs (representative)

このリストは代表的なものであり、網羅的ではない。地域 FG の合併・再編はユニバースを頻繁にローテーションさせる; 利用前に各ティッカーを最新の JPX 発行体検索に照らして検証すること。

| Entity | Ticker | Market-cap class | Sub-sector | Major shareholder shape | Yield class | Index inclusion | Key risks |
|---|---|---|---|---|---|---|---|
| Concordia FG | 7186 | 中型 | Kanto regional bank FG | Public-float-heavy | Mid yield class | TOPIX | NIM, regional credit cycle, deposit cost. |
| Mebuki FG | 7167 | 中型 | Kanto / Tohoku regional FG | Public-float-heavy | Mid to high yield class | TOPIX | NIM, demographic shrinkage, SME credit. |
| Fukuoka FG | 8354 | 中型 to 大型 | Kyushu regional FG | Public-float-heavy with parent-of digital-bank franchise | Mid yield class | Nikkei 225 historically, TOPIX | Digital-bank execution, NIM, Kyushu regional credit. |
| Yamaguchi FG | 8418 | 中型 | Chugoku regional FG | Public-float-heavy | Mid to high yield class | TOPIX | Governance event risk, NIM, regional credit. |
| Shizuoka FG | 5831 | 中型 | Tokai regional FG | Public-float-heavy | Mid yield class | TOPIX | NIM, regional credit, securities portfolio risk. |
| Kyushu FG | 7180 | 中型 | Kyushu regional FG | Public-float-heavy | Mid to high yield class | TOPIX | Regional credit cycle, NIM, branch-cost structure. |
| Hokuhoku FG | 8377 | 中型 | Hokkaido / Hokuriku regional FG | Public-float-heavy | Mid to high yield class | TOPIX | Demographic shrinkage, NIM, regional credit. |
| Hirogin HD | 7337 | 中型 | Chugoku regional FG | Public-float-heavy | Mid yield class | TOPIX | NIM, securities portfolio risk, SME credit. |
| Tokyo Kiraboshi FG | 7173 | 小型 to 中型 | Tokyo metropolitan FG | Public-float with strategic stakes | Mid yield class | TOPIX | SME credit, NIM, deposit cost, governance. |
| Nishi-Nippon FH | 7189 | 中型 | Kyushu regional FG | Public-float-heavy | Mid to high yield class | TOPIX | Regional credit, NIM, real-estate exposure. |
| Dai-shi Hokuetsu FG | 7327 | 中型 | Niigata regional FG | Public-float-heavy | Mid to high yield class | TOPIX | Demographic shrinkage, NIM, regional credit. |
| Hokkoku FH | 7381 | 小型 to 中型 | Hokuriku regional FG | Public-float-heavy with tech / digital initiative | Mid yield class | TOPIX | Digital-initiative execution, NIM, regional credit. |

地域 FG は [[finance/japan-activist-investor-playbook]] と併せて読むこと。なぜなら、それらは繰り返しスチュワードシップおよび資本政策のエンゲージメント・ユニバースであったからである。

## Net banks / digital banks and bank-adjacent listed names

| Entity | Ticker | Market-cap class | Sub-sector | Major shareholder shape | Index inclusion | Key risks |
|---|---|---|---|---|---|---|
| Rakuten Bank | 5838 | 中型 | Net bank, listed digital bank | Parent Rakuten group majority / strategic | TOPIX | Parent-funding linkage, deposit-cost competition, credit growth quality, regulatory perimeter. |
| Mercari | 4385 | 中型 to 大型 | C2C marketplace with finance / payment / lending arm (adjacent) | Public-float-heavy | TOPIX | Financial-service unit losses, regulatory perimeter, marketplace GMV, credit quality. |

注: 日本の多くのデジタルバンクのブランド (例: SBI 住信ネット銀行、au じぶん銀行、PayPay 銀行) は、単独上場ではなく上場親会社 FG の内側に位置する; parent-of マッピングについては [[finance/INDEX|finance INDEX]] を参照。

## Major insurers (listed)

| Entity | Ticker | Market-cap class | Sub-sector | Major shareholder shape | Yield class | Buyback policy presence | Index inclusion | Foreign-ownership class | Key risks |
|---|---|---|---|---|---|---|---|---|---|
| [[life-insurers/dai-ichi-life]] HD | 8750 | 大型 | Life insurance | Public-float-heavy with strategic cross-holdings | Mid yield class | Buyback programme historically disclosed | Nikkei 225, TOPIX Core 30 / Large 70, FTSE Russell Japan | High foreign ownership | NIRP legacy / rate sensitivity, equity-market sensitivity, FX, overseas life-insurance underwriting. |
| [[non-life-insurers/sompo]] HD | 8630 | 大型 | Non-life insurance + nursing / overseas | Public-float-heavy with strategic cross-holdings | Mid yield class | Buyback / cross-holding unwind policy historically disclosed | Nikkei 225, TOPIX, FTSE Russell Japan | Mid to high foreign ownership | NatCat cycle, overseas underwriting, governance / agency-channel event risk, cross-holding unwind pace. |
| Tokio Marine HD | 8766 | 大型 | Non-life insurance + overseas | Public-float-heavy with strategic cross-holdings | Mid yield class | Buyback programme historically disclosed | Nikkei 225, TOPIX Core 30, FTSE Russell Japan | High foreign ownership | NatCat cycle, overseas P&C underwriting, FX, capital-policy execution. |
| MS&AD Insurance Group HD | 8725 | 大型 | Non-life insurance + life + overseas | Public-float-heavy with strategic cross-holdings | Mid yield class | Buyback programme historically disclosed | Nikkei 225, TOPIX, FTSE Russell Japan | Mid to high foreign ownership | NatCat cycle, overseas underwriting, cross-holding unwind pace, governance event risk. |

生保は、クロスホールディングの解消が開示サーフェスに現れたときには [[finance/japan-large-shareholding-disclosure]] と併せて読むこと。

## Major securities

| Entity | Ticker | Market-cap class | Sub-sector | Major shareholder shape | Yield class | Index inclusion | Key risks |
|---|---|---|---|---|---|---|---|
| [[securities-firms/nomura-hd]] | 8604 | 大型 | Independent securities / wholesale + retail + AM | Public-float-heavy | Mid yield class | Nikkei 225, TOPIX, FTSE Russell Japan | Wholesale earnings volatility, US / overseas litigation, retail-flow cycle, capital-and-cost discipline. |
| Daiwa Securities Group | 8601 | 大型 | Independent securities / wholesale + retail + AM | Public-float-heavy | Mid yield class | Nikkei 225, TOPIX, FTSE Russell Japan | Trading earnings volatility, retail-flow cycle, wholesale capacity vs cost. |
| Monex Group | 8698 | 小型 to 中型 | Online broker + crypto (Coincheck) + US (TradeStation legacy / disposed) | Public-float with founder / strategic stake | Low to mid yield class | TOPIX | Crypto-cycle dependency, retail-trading cycle, regulatory perimeter. |
| Matsui Securities | 8628 | 中型 | Online broker, retail-flow concentrated | Founder-family / strategic stake significant | Mid to high yield class | TOPIX | Retail-trading cycle, fee compression, demographic skew. |
| SBI HD | 8473 | 大型 | Financial conglomerate (securities + bank + insurance + AM + VC) | Strategic / founder-aligned with public float | Mid to high yield class | TOPIX, FTSE Russell Japan | Conglomerate-discount, capital allocation across subsidiaries, Shinsei-bank integration, crypto / fintech cycle. |

これらは、アドバイザリーのフランチャイズの厚みについては [[finance/japan-ib-league-table]] と併せて読むこと; メガバンク系列の証券部門 (SMBC 日興、みずほ証券、MUFG / MUMS) は上記の親 FG エントリの内側および [[finance/INDEX|finance INDEX]] の内側に位置する。

## Card / consumer finance

| Entity | Ticker | Market-cap class | Sub-sector | Major shareholder shape | Yield class | Index inclusion | Key risks |
|---|---|---|---|---|---|---|---|
| Aeon Financial Service | 8570 | 中型 | Card + retail-finance + ASEAN consumer finance | Aeon group parent stake significant | Mid to high yield class | TOPIX | ASEAN credit cycle, parent-channel dependency, FX, regulatory / interest-rate cap risk. |
| Credit Saison | 8253 | 中型 | Card + asset-formation lending + overseas finance | Public-float with strategic stakes | Mid yield class | TOPIX, Nikkei 225 historically | Credit cost cycle, overseas finance asset quality, transition from card to balance-sheet lender. |
| Acom | 8572 | 中型 | Consumer finance, MUFG-affiliated | MUFG-affiliated majority stake | Mid yield class | TOPIX | Interest-rate cap regulatory legacy, claims-for-refund cycle, credit cycle, parent-group capital policy. |
| Aiful | 8515 | 小型 to 中型 | Consumer finance, independent | Founder / strategic stake significant | Low to mid yield class | TOPIX | Interest-rate cap legacy, refund-claims tail risk, credit cycle, funding cost. |
| JACCS | 8584 | 小型 to 中型 | Card + installment + auto loans, MUFG-affiliated | MUFG-affiliated stake significant | Mid to high yield class | TOPIX | Auto-loan credit cycle, installment business profitability, NIM. |
| Orient (Orico) | 8585 | 小型 to 中型 | Card + installment + guarantee, Mizuho-aligned | Mizuho-aligned stake significant | Low to mid yield class | TOPIX | Guarantee-business risk, card-business profitability, NIM. |
| Pocket Card | 8519 | 小型 | Card issuer | Strategic / parent stake significant | Mid yield class | TOPIX | Card-business profitability, parent-channel dependency, credit cycle. |

消費者金融の発行体は、各発行体の最新の IR と有価証券報告書に照らして確認すべき金利上限規制および過払金返還請求のレガシーを抱える。

## Leasing

| Entity | Ticker | Market-cap class | Sub-sector | Major shareholder shape | Yield class | Index inclusion | Key risks |
|---|---|---|---|---|---|---|---|
| ORIX | 8591 | 大型 | Diversified financial services (leasing + corporate finance + real estate + AM + overseas) | Public-float-heavy | Mid yield class | Nikkei 225, TOPIX Core 30, FTSE Russell Japan | Conglomerate-discount, overseas business cycle, aircraft / real-estate exposure. |
| Tokyo Century | 8439 | 中型 | Leasing + specialty finance + aviation | Itochu strategic stake / public float | Mid yield class | TOPIX | Aviation finance cycle, overseas finance asset quality, NIM. |
| Mitsubishi HC Capital | 8593 | 中型 to 大型 | Leasing + corporate finance | MUFG / Mitsubishi-aligned strategic stake | Mid yield class | TOPIX | Leasing-margin pressure, overseas finance asset quality. |
| Fuyo General Lease | 8424 | 中型 | Leasing + corporate finance | Mizuho-aligned strategic stake | Mid yield class | TOPIX | Leasing-margin pressure, NIM, real-estate exposure. |
| Mizuho Leasing | 8425 | 中型 | Leasing + corporate finance | Mizuho strategic stake significant | Mid yield class | TOPIX | Leasing-margin pressure, parent-policy dependency. |

注: JA 三井リースは JA グループと三井物産が共同保有している; これは上場しておらず、したがってこのユニバースの外側に位置するが、ピアがそれに対してシェアを比較するため、サブセクター注記として含めている。

## Telco-finance / payment hybrid

| Entity | Ticker | Market-cap class | Sub-sector | Major shareholder shape | Index inclusion | Key risks |
|---|---|---|---|---|---|---|
| KDDI | 9433 | 大型 | Telco that holds au Financial Holdings | Public-float-heavy with strategic cross-holdings | Nikkei 225, TOPIX Core 30, FTSE Russell Japan | Telco capex cycle, financial-arm credit growth quality, regulatory perimeter, payment-fee competition. |
| SoftBank Corp | 9434 | 大型 | Telco that holds PayPay FG (PayPay, PayPay Bank, PayPay Card, PayPay Securities) | SoftBank Group parent majority | Nikkei 225, TOPIX Core 30, FTSE Russell Japan | Telco capex cycle, parent-funding linkage, payment-business credit / regulatory perimeter. |

これらのハイブリッドのエントリは [[finance/INDEX|finance INDEX]] と並べて読むのが有用である。なぜなら、金融子会社のバランスシートが通信親会社の内側に開示されているからである。

## Fintech / crypto

| Entity | Ticker | Market-cap class | Sub-sector | Major shareholder shape | Index inclusion | Key risks |
|---|---|---|---|---|---|---|
| Monex Group | 8698 | 小型 to 中型 | Online broker + crypto (Coincheck) | Founder / strategic stake | TOPIX | Crypto-cycle dependency, broker fee compression. |
| Remixpoint | 3825 | 小型 | Energy + crypto-adjacent treasury holdings | Public-float, treasury volatility | TOPIX small-cap segment | Crypto-treasury mark-to-market, going-concern / disclosure event risk historical caution. |

Monex は「Securities」マトリクスとここの両方に現れる。なぜなら、フィンテックのサブセクターが上場証券のサブセクターと交差するからである。

## Index Inclusion Layer

| Index | Reading rule |
|---|---|
| Nikkei 225 | Price-weighted, narrow; megabank FGs, large insurers, ORIX, Nomura, Daiwa, KDDI, and SoftBank Corp historically present. |
| TOPIX | Broad TSE Prime / Standard / Growth weight; almost every entry above is in TOPIX. |
| TOPIX Core 30 / Large 70 | Large-cap subset; megabank FGs, Tokio Marine, ORIX, KDDI, SoftBank Corp, and Dai-ichi Life historically in scope. |
| FTSE Russell Japan | Global investor reference; megabank FGs, large insurers, large securities, large telco-finance hybrids historically eligible. |

指数組入はローテーションする; 名柄の指数ステータスに依拠する前に、常に [[securities/tokyo-stock-exchange]] と JPX TOPIX メソドロジーページに照らして再確認すること。

## Stewardship / Engagement Anchor Layer

上記のエンティティの多くは、日本の上場金融グループ・ユニバースにおけるスチュワードシップ・エンゲージメントの対象である。エンゲージメント経路は [[finance/japan-shareholder-proposal-and-agm-voting-route]] と [[finance/japan-activist-investor-playbook]] に文書化されている。このユニバースを横断する繰り返しのエンゲージメントテーマには次が含まれる:

- 資本コスト、PBR < 1.0 への圧力、資本政策の開示 (TSE の資本コスト要請);
- クロスホールディング (政策保有株) の解消ペースと開示;
- 配当性向、自社株買い政策、総株主還元政策;
- 取締役会の独立性、指名、報酬、スキルマトリクス;
- コングロマリット・ディスカウントとセグメント開示 (SBI HD、ORIX、KDDI、SoftBank Corp、Mercari について);
- ガバナンス・イベントへの対応 (みずほ FG のシステム障害、損保 HD の代理店チャネル・ガバナンス事案、地域 FG 固有の事案)。

保険会社とメガバンクのクロスホールディング解消は、ブロックが動くときに [[finance/japan-large-shareholding-disclosure]] サーフェスに現れる; 地域 FG や消費者金融の発行体におけるアクティビストまたは戦略的ポジションもそこに現れる。

## Capital-Action Layer

このユニバースを横断する最近の資本アクション (presence-only descriptor; 利用前に検証すること):

| Action class | Presence in universe |
|---|---|
| Buyback programme | Disclosed historically by megabank FGs, Tokio Marine, MS&AD, ORIX, Nomura, SBI HD, and others. |
| Cross-holding unwind | Disclosed by megabank FGs and the three non-life insurers as a programme commitment. |
| Capital-and-business alliance | SBI HD - Shinsei Bank case, Aeon group consumer-finance reorganisation, regional-FG capital alliance cases. |
| TOB target | Has occurred for some regional FGs and for SBI HD's Shinsei Bank acquisition; verify the specific case in TDnet / EDINET. |
| Activist or large-shareholding target | Several regional FGs and consumer finance issuers have been disclosed in large-shareholding filings; verify each filer / purpose against the EDINET record. |
| Convertible / equity-linked issuance | Used selectively by some consumer finance, leasing, and fintech issuers; never assume - check the most recent TDnet release. |

いかなる特定の資本アクションについても、一次的な記録は発行体の TDnet リリース、EDINET の有価証券報告書または臨時報告書、および発行体の IR ページである。上記のいずれも投資助言ではない。

## Key Risk Layer by Sub-Sector

| Sub-sector | Dominant risk class |
|---|---|
| Megabank FG | NIM compression / JGB rate path, overseas credit cost, FX translation, capital-policy execution, governance / system events. |
| Trust FG | Trust-fee compression, asset-management flow, real-estate exposure, fiduciary / governance event risk. |
| Regional FG | NIM, demographic shrinkage, SME credit cycle, deposit cost, branch-cost structure, securities portfolio risk. |
| Net bank | Parent-funding linkage, deposit-cost competition, credit growth quality, regulatory perimeter. |
| Life insurance | NIRP legacy / rate sensitivity, equity-market sensitivity, FX, overseas life underwriting. |
| Non-life insurance | NatCat cycle, overseas P&C underwriting, FX, cross-holding unwind pace, governance / agency-channel event risk. |
| Securities | Wholesale / trading earnings volatility, US / overseas litigation, retail-flow cycle, capital-and-cost discipline. |
| Card / consumer finance | Interest-rate cap regulatory legacy, refund-claim tail, credit cycle, parent-channel dependency. |
| Leasing | Leasing-margin pressure, NIM, aviation / real-estate exposure, overseas finance asset quality. |
| Telco-finance hybrid | Telco capex cycle, financial-arm credit growth quality, payment-fee competition, regulatory perimeter. |
| Fintech / crypto | Crypto-cycle dependency, regulatory perimeter, going-concern / disclosure event risk for smaller issuers. |

## 読者の検証チェックリスト

このページのいずれかの行を実世界の判断に用いる前に、読者は次を行うべきである:

1. [JPX TDnet](https://www.jpx.co.jp/equities/listing/disclosure/tdnet/index.html) 経由で発行体の TDnet 最新開示フィードを開く。
2. [EDINET](https://disclosure.edinet-fsa.go.jp/) から最新の有価証券報告書および臨時報告書を取得する。
3. 指数組入 (Nikkei 225 / TOPIX / TOPIX Core 30 / FTSE Russell) を [JPX TOPIX メソドロジーページ](https://www.jpx.co.jp/markets/indices/topix/) および当該指数プロバイダーに照らしてクロスチェックする。
4. 発行体の IR ページで最新の決算短信と IR デックを再確認する。
5. スチュワードシップ / エンゲージメントの読み解きについては、[[finance/japan-shareholder-proposal-and-agm-voting-route]] と [[finance/japan-activist-investor-playbook]] をクロスリファレンスする。
6. 大量保有のステークについては、[[finance/japan-large-shareholding-disclosure]] に従って EDINET の 大量保有報告書 / 変更報告書 のスタックを取得する。
7. 読者自身のノートに検証ステップの日付を記録する; このページのマトリクス記述子は public-surface-only であり、古くなる。

## 留意事項

- これは public-surface reference universe ページであり、モデルポートフォリオではなく、推奨でもなく、投資助言でもなく、税務助言でもなく、法律助言でもない。
- ティッカー、サブセクター分類、主要株主の形状は、合併、提携、TOB、再編、コーポレートアクションの結果として変化する。
- ROE、配当利回り、外国人保有、資本政策の記述子はレンジ / クラスのラベルにすぎない; これらは point estimates ではなく、すぐに古くなる。
- 指数組入と FTSE Russell の適格性は定期的にローテーションする; 指数メソドロジーページがここに記載されたいかなる内容にも優先する。
- 一部の named entities は単独上場ではなく上場親会社の内側に位置する (例: SoftBank Corp 内の PayPay 銀行; 歴史的に SBI HD 内にあった SBI 住信ネット銀行); parent-of マッピングについては [[finance/INDEX|finance INDEX]] を参照。
- プライベートな金融グループ (例: JA 三井リース、相互会社形態の生保) は、上場していないため「investable universe」ページのスコープから明示的に外している。
- データの検証は読者の責任である。FinWiki の public-surface 規約は route-and-link であり、シグナル生成ではない。

## 関連

- [[finance/INDEX|finance INDEX]]
- [[finance/japan-ib-league-table]]
- [[finance/japan-activist-investor-playbook]]
- [[finance/japan-large-shareholding-disclosure]]
- [[finance/japan-shareholder-proposal-and-agm-voting-route]]
- [[finance/japan-acquisition-finance]]
- [[finance/japan-tender-offer-process]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[life-insurers/dai-ichi-life]]
- [[non-life-insurers/sompo]]
- [[securities-firms/nomura-hd]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-market-infrastructure-map]]
- [[INDEX|FinWiki index]]

## 出典

- JPX: TDnet timely-disclosure portal.
- EDINET: statutory disclosure portal.
- JPX: TOPIX index methodology page.
- JPX: listed-company issuer search and TDnet English page.
- FSA: Stewardship Code and Corporate Governance Reform pages.
- Each issuer's IR page, latest kessan tanshin, securities report, and governance report (reader-verifiable, not reproduced here).
