---
source: securities/japan-market-maker-and-liquidity-provider-landscape
source_hash: 479035c983b5e4e4
lang: ja
status: machine
fidelity: ok
title: "Japan market maker and liquidity provider landscape"
translated_at: 2026-06-19T12:43:19.987Z
---

# Japan market maker and liquidity provider landscape

## Wiki route

このページは、[[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]]、[[securities/japannext-sor-routing-deep-dive|Japannext PTS SOR routing deep dive]]、[[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]] の流動性供給のピアとして [[securities/INDEX|securities index]] の内部に位置する。これはルーティングサイドのナラティブに対する供給サイドの相方である：SOR が注文をルーティングし、マーケットメーカーが反対側を提示する。取引所の文脈については [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] と、主要取引所のルールについては [[securities/tokyo-stock-exchange|Tokyo Stock Exchange]] と [[securities/osaka-exchange|Osaka Exchange]] と、HFT の在庫を支える資金調達レイヤーについては [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage]] と、日本にオフィスを構えるグローバルなプロプライエタリ・トレーディング会社のエンティティレベルの確認については [[securities/financial-instruments-business-operators-japan-index|FIBO registry]] と併せて読むこと。

## TL;DR

日本の株式および上場デリバティブのマーケットメイクはハイブリッド市場である：国内のフルサービス・ハウス（野村、大和、SMBC 日興、みずほ、MUMSS）が伝統的な銀行/ブローカーのマーケットメイクと ETF の指定参加者（AP）機能を提供する；それらと並んで、グローバルなプロプライエタリ・トレーディング/HFT 層 — Citadel Securities Japan、Optiver Japan、Virtu Financial Japan、Jane Street Japan、IMC Japan、Susquehanna (SIG) Japan、その他の数量取引会社 — が JPX の指定マーケットメーカー（DMM）および J-NET / arrowhead のマッチングインフラの内部で活動する。JPX は、大阪取引所の上場デリバティブ（指数先物/オプション/JGB 先物/オプション）と東京証券取引所の ETF について正式なマーケットメーカー制度を運営している；TSE 現物株式における株式 DMM のカバレッジは選択的である。証券金融、プライムブローカレッジの資金調達、および PTS ルーティングの経済性（[[securities/japannext-securities|Japannext]]）が競争上のポジショニングを形作る。すべての会社は、東京にオフィスを持つ FIEA 登録の第一種金融商品取引業者として活動し、FSA と JSDA の自主規制ルールの監督を受ける。

## Why this ecosystem matters

マーケットメーカーと流動性供給者は、リテールの SOR と機関投資家の執行アルゴリズムがアクセスする板の供給サイドである。十分なマーケットメーカー活動がなければ：

1. **ビッド・アスク・スプレッドが拡大する。** 顧客の執行コストが上昇する。
2. **ETF の裁定ギャップが開く。** 指定参加者の設定/交換の裁定がなければ、ETF 価格は NAV から乖離する。
3. **オプション市場の流動性が薄くなる。** マーケットメーカーによるグリークスのヘッジが、オプション・ブックの流動性の構造的な源泉である。
4. **デリバティブの参照品質が劣化する。** 先物と原資産の現物株式バスケットとの間の指数裁定には、両サイドでの一貫したマーケットメーカーのクオートが必要である。
5. **PTS の価格改善機会が縮小する。** SOR ルーティングは、PTS 取引所に競合するクオートが存在する場合にのみ価格改善をもたらす。

グローバル HFT 会社の日本への導入（2010  以降）と、TSE の arrowhead エンジンのアップグレード（2013  以降）が相まって、スプレッドを圧縮し、表示される厚みを改善し、正式な指定マーケットメーカー制度をより経済的に意味のあるものにした。

### Osaka Exchange derivatives market-maker scheme

OSE は、以下のような商品をカバーする上場デリバティブの正式なマーケットメーカー（MM）プログラムを運営している：

| Product | Market-maker relevance |
|---|---|
| 日経 225  先物 / オプション | コアの株価指数デリバティブ MM 活動。 |
| TOPIX 先物 / オプション | 指数デリバティブ MM。 |
| 日経 225  ミニ / マイクロ | MM カバレッジのあるリテール向け契約。 |
| JGB 先物 / オプション | JGB 現物およびレポとのクロスアセット連動を持つ金利デリバティブ MM（マッピングされている箇所では [[money-market/jgb-repo-market-japan|JGB repo]] の文脈を参照）。 |
| 個別株オプション | より選択的な MM カバレッジ。 |
| ボラティリティ / セクター商品 | 一部のセグメントで MM 支援あり。 |

MM 制度は、指定されたビッド・アスク・スプレッド/最小サイズ/クオート存在の要件の下で両サイドの継続的なクオートにコミットする会社に対して、インセンティブ（手数料リベート/参加コスト削減/正式なクオート義務と便益）を提供する。現行の制度パラメータは OSE のマーケットメーカーページで確認すること。

### TSE ETF market-maker scheme

TSE は、上場 ETF について正式な ETF マーケットメーカー・プログラムを運営している。構造的な目的は、表示されるビッド・アスク・スプレッドをタイトに保ち、原資産バスケットとの ETF 裁定を支援することである。国内 AM（支配的な ETF 発行体 — 野村 AM、AM-One、MUFG AM、日興 AM、大和 AM；[[securities/japan-asset-manager-landscape-matrix|asset manager landscape]] を参照）は、この制度において国内ブローカー MM とグローバル会社の双方と協働する。

### TSE cash-equity DMM

TSE の現物株式の指定マーケットメーカーのカバレッジは、デリバティブ/ETF の制度よりも選択的である。TSE におけるデフォルトの現物株式モデルは、arrowhead を介した注文駆動の連続オークションである；正式な DMM のコミットメントは、選ばれた銘柄について特定の市場品質目標のためにこれに上乗せされる。

## Domestic broker market making

各主要国内証券会社は、機関投資家ビジネスの一部として株式/デリバティブ/ETF のマーケットメイクと指定参加者活動を運営している：

| House | Market-making relevance |
|---|---|
| [[securities-firms/nomura-hd|Nomura Securities]] | 株式/デリバティブ/ETF にわたる最大の国内 MM フットプリント；主要な ETF AP。 |
| [[securities-firms/daiwa-sg|Daiwa Securities]] | 株式/デリバティブ/ETF にわたる主要な国内 MM。 |
| [[securities-firms/smbc-nikko|SMBC Nikko]] | 株式/デリバティブにわたる国内 MM 活動；金利/FX については SMFG グループの近接性。 |
| [[securities-firms/mizuho-securities|Mizuho Securities]] | 国内 MM 活動；強力な金利/FX 統合。 |
| MUMSS (Mitsubishi UFJ Morgan Stanley) | Morgan Stanley のグローバル統合を持つ国内 MM；相当な株式デリバティブ活動。 |

これらのハウスは、MM を引受、プライムブローカレッジ、証券貸借、フルサービスの機関投資家セールスと組合せている — 純粋なプロップ HFT 会社とは構造的に異なるコスト構造である。

### Citadel Securities Japan

- **Global parent**: Citadel Securities（Citadel ヘッジファンドとは別）。
- **Japan footprint**: FSA 登録の第一種 FIBO として活動する東京オフィス；株式/デリバティブのマーケットメイクと執行カウンターパーティ・ビジネス。
- **Distinguishing feature**: 最大級のグローバル株式マーケットメーカーの一つ；米国 Reg NMS のマーケットメーカー市場シェアが相当；日本の事業は、グローバル会社のリスクインフラを伴う日本の株式/デリバティブのカバレッジを提供する。
- **Activity scope**: TSE / PTS にわたる株式マーケットメイク；株式デリバティブ；ETF。

### Optiver Japan

- **Global parent**: Optiver（アムステルダムに本社を置くグローバル・マーケットメーカー）。
- **Japan footprint**: 東京オフィス；FSA 登録の第一種 FIBO；デリバティブ/ETF/株式活動のための OSE / TSE の会員。
- **Distinguishing feature**: オプションのマーケットメイクはグローバルな Optiver の強み；日本のオプション/ETF/デリバティブのクオートがコア活動。
- **Activity scope**: 上場オプション、ETF MM、株式デリバティブ。

### Virtu Financial Japan

- **Global parent**: Virtu Financial（NYSE 上場のグローバル・マーケットメーカー）。
- **Japan footprint**: 東京オフィス；FSA 登録の第一種 FIBO；日本を含む複数のアジア取引所にわたる株式/ETF のマーケットメイク。
- **Distinguishing feature**: グローバルな ETF AP およびマーケットメイク事業；クロス取引所の裁定能力。
- **Activity scope**: 株式/ETF MM；一部のデリバティブ活動。

### Jane Street Japan

- **Global parent**: Jane Street（非公開のグローバル数量取引会社）。
- **Japan footprint**: 東京オフィス；FSA 登録；ETF/株式/デリバティブのマーケットメイク；日本上場 ETF およびクロスリスト ETF 裁定に適用される強力なグローバル ETF AP フランチャイズ。
- **Distinguishing feature**: 最も活発なグローバル ETF マーケットメーカーの一つ；数量取引のカルチャー；相当な債券および株式のクロスアセット活動。
- **Activity scope**: ETF MM、株式デリバティブ、クロスアセット裁定。

### IMC Japan

- **Global parent**: IMC Trading（アムステルダムに本社を置くグローバル・マーケットメーカー）。
- **Japan footprint**: 東京オフィス；FSA 登録；デリバティブ/ETF/株式のマーケットメイク。
- **Distinguishing feature**: アジアのデリバティブ市場での長年の存在；オプションのマーケットメイク能力。
- **Activity scope**: 上場オプション、ETF MM、株式。

### Susquehanna (SIG) Japan

- **Global parent**: Susquehanna International Group（SIG、フィラデルフィアに本社を置くグローバル数量取引会社）。
- **Japan footprint**: 東京オフィス；FSA 登録；デリバティブ/オプションのマーケットメイク。
- **Distinguishing feature**: グローバルなオプション・マーケットメイクの強み；ストラクチャード・プロダクトの専門性；数量取引のカルチャー。
- **Activity scope**: 上場オプション、ETF MM、株式デリバティブ。

### Other firms in the tier

日本でマーケットメイク活動を行う追加のグローバル/地域会社（このリストの上限は公開的に可視な会社を反映する；アクティブなエンティティについては現行の FSA FIBO 登録を確認すること）：

- Tower Research Capital Japan
- DRW Holdings Japan
- Hudson River Trading Japan
- Flow Traders（アジア事業が日本上場 ETF をカバー）
- XR Trading および日本上場の活動を行うその他の数量ショップ
- FIEA 第一種スコープの下で活動する国内プロップ会社

## Designated-market-maker incentives and obligations

JPX の MM インセンティブの一般的な構造：

| Incentive | Typical form |
|---|---|
| 手数料リベート / 取引参加コストの削減 | MM 適格活動に対する取引ごとまたは商品ごとの手数料の引き下げ。 |
| 指定銘柄の割当 | 指定された銘柄について DMM として活動する権利。 |
| マーケティング / 可視性 | JPX 制度ページ上での制度 MM としての公開掲載。 |
| 接続性 / インフラの便益 | 一部の制度設計において。 |

対応する義務：

| Obligation | Typical form |
|---|---|
| 継続的な両サイドのクオート | 指定された時間中のクオート存在が要求される。 |
| 最大ビッド・アスク・スプレッド | クオートは指定されたスプレッドバンド内でなければならない。 |
| 最小クオートサイズ | クオートは指定された契約/株式サイズ以上でなければならない。 |
| パフォーマンス監視 | 制度運営者が履行を監視する；不履行は MM ステータスを停止しうる。 |
| 報告 | MM 活動は取引所に報告される。 |

正確な制度パラメータは変更される；時間に敏感な資料を公表する前に、現行の OSE マーケットメーカー / TSE ETF マーケットメーカーのページで最新の数値閾値を確認すること。

## Futures and options market-making intensity

日本の上場株価指数、JGB、個別株オプション市場は、以下の理由により継続的な MM クオートに大きく依存している：

- オプションは、ターム構造とストライクグリッドにわたるグリークスのヘッジを必要とする；数量的なリスクインフラを持つシステマティックな MM のみがグリッド全体をクオートできる。
- 指数先物の流動性は現物株式の裁定と絡み合っている；MM 活動はベーシスを支え、指数ファンドのトラッキングエラーを削減する。
- JGB 先物 / オプションは JGB レポ市場（[[securities/japan-margin-trading-and-securities-finance|margin trading and securities finance]] および JGB レポ関連の項目を参照）およびより広い資金調達市場と相互作用する。
- 上記のグローバル HFT 会社は、国内ブローカーのフランチャイズ活動以外の継続的な MM 強度の大半を提供する。

## Equity market making vs PTS routing

マーケットメイクと SOR ルーティングは板で出会う：

- TSE でクオートするマーケットメーカーは、PTS のクオートが裁定される対象の NBBO 参照を提供する。
- [[securities/japannext-securities|Japannext]] PTS でクオートするマーケットメーカーは、SOR のための価格改善機会を提供する。
- TSE と Japannext の間で裁定するマーケットメーカーは、二つの板を一貫させる。
- 同じ会社が両取引所で同時にマーケットメーカーになることができ、在庫がリバランスされる際にスプレッドの差を捕捉する。

ルーティングサイドのメカニズムについては [[securities/japannext-sor-routing-deep-dive|Japannext PTS SOR routing deep dive]] を、取引所シェアの証拠については [[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]] を参照。

## Financing layer for market makers

HFT の在庫と日中ポジションには資金調達インフラが必要である：

| Need | Source |
|---|---|
| プライムブローカレッジ / 資金調達 | バルク資金調達レイヤーについては [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage]] を参照；グローバル IB がシンセティックおよびフィジカルの資金調達を提供する。 |
| ショートサイドの証券貸借 | [[securities/japan-stock-lending-market-route|stock lending market route]] を参照；[[financial-regulators/japan-securities-finance|Japan Securities Finance]] は一つの構造的なレールである；ブローカー間貸借はもう一つである。 |
| 信用取引のレール | [[securities/japan-margin-trading-and-securities-finance|margin trading]] を参照；信用取引適格銘柄におけるリテールブローカーの MM 活動に関連する。 |
| クリアリング・マージン | 会員のマージン要件の下で [[securities/japan-securities-clearing-corp|JSCC]] に差し入れられる。 |
| 現金レポと JGB 担保 | JGB レポ市場を介したクロスアセット資金調達。 |

資金調達コストは意味のある競争上の差別化要因である：安価な在庫資金調達を持つ会社は、高価な資金調達を持つ会社よりも低い回転率でタイトなスプレッドをクオートできる。

## Regulatory and self-regulatory framework

| Layer | Role |
|---|---|
| FSA | 日本で活動するグローバル HFT 会社の第一種 FIBO 登録を認可する；行為、システム耐性、市場健全性のコントロールを監督する。 |
| JSDA | 自主規制機関；会員には MM 活動会社が含まれる；ルールは注文入力、市場健全性、利益相反管理をカバーする。 |
| JPX (TSE / OSE / TOCOM) | MM 制度、クオート義務、停止手続、サーベイランスに関する取引所ルール。 |
| JSCC | クリアリング会員ルールとマージン要件。 |
| FSA SESC (証券取引等監視委員会) | スプーフィング / レイヤリング / 相場操縦の調査を含む、アルゴリズムおよび HFT 活動に関連する市場濫用および行為のサーベイランス。 |

特定の MM ルール改正、濫用的取引の執行措置、SESC の和解 / 事案は、公的な規制発表に定期的に現れる；特定の会社について結論を導く前に現行の事案を確認すること。

## ETF authorized participant role

ETF の指定参加者（AP）は、通常、マーケットメーカーとして活動する同じ会社に加えて、国内のフルサービス・ブローカーである：

- 国内 AP：野村証券、大和証券、SMBC 日興、みずほ証券、MUMSS。
- グローバル AP / MM：Citadel Securities、Optiver、Virtu、Jane Street、IMC、SIG。
- AP 活動は、ETF 価格を NAV に係留し続ける設定 / 交換のメカニズムである。

[[securities/japan-asset-manager-landscape-matrix|domestic ETF issuers]]（野村 AM、AM-One、MUFG AM、日興 AM、大和 AM、iShares Japan）にとって、AP 関係は運営上重要である；ニッチな ETF における薄い AP カバレッジは、より広い NAV トラッキングエラーを引き起こす。

## Latency and infrastructure

| Layer | Note |
|---|---|
| JPX arrowhead マッチングエンジン | 現物株式マッチングエンジン；複数世代のアップグレードがレイテンシーをグローバルに競争力のある水準まで削減した。 |
| OSE J-GATE | デリバティブのマッチングインフラ。 |
| JPX データセンターでのコロケーション | 日本で活動するグローバル HFT 会社にとって標準；取引所サイドのレイテンシーを削減する。 |
| 接続性プロバイダー | 標準的なグローバル低レイテンシー接続性プロバイダーが東京にサービスを提供する。 |
| マーケットデータ | JPX フィード（TQ、FLEX）および PTS 取引所向けの取引所直結フィード。 |

## Related

- [[securities/INDEX]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japannext-sor-routing-deep-dive]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japannext-securities]]
- [[securities/osaka-digital-exchange]]
- [[securities/odx-start-stb-secondary-market]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[securities/japan-stock-lending-market-route]]
- [[securities/japan-margin-trading-and-securities-finance]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/mizuho-securities]]
- [[securities-firms/morgan-stanley-japan]]
- [[securities-firms/goldman-sachs-japan]]
- [[financial-regulators/japan-exchange-group]]
- [[financial-regulators/japan-securities-finance]]
- [[financial-regulators/jsda]]
- [[INDEX|FinWiki index]]

## Sources

- JPX, Osaka Exchange Market Maker scheme page (English / Japanese).
- JPX, TSE ETF Market Maker scheme page.
- JPX, equity statistics pages.
- FSA, financial instruments business operator list (kinyushohin.xlsx) for FIBO registration verification.
- Citadel Securities, Optiver, Virtu Financial, Jane Street, IMC, SIG corporate sites.
- JSDA self-regulatory site.
