---
source: securities/japan-market-maker-and-liquidity-provider-landscape
source_hash: ed3274178592258a
lang: ja
status: machine
fidelity: ok
title: "日本のマーケットメーカー／流動性供給者のランドスケープ"
translated_at: 2026-06-03T00:53:08.259Z
---
# 日本のマーケットメーカー／流動性供給者のランドスケープ

## ウィキ上の位置づけ

このページは、[[securities/INDEX|securities index]]内で[[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]]、[[securities/japannext-sor-routing-deep-dive|Japannext PTS SOR routing deep dive]]、[[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]]の流動性供給側のピアにあたる。ルーティング側の説明に対する供給側の対応物であり、SORが注文を送る一方で、マーケットメーカーは反対側の気配を提示する。取引所文脈は[[securities/japan-market-infrastructure-map|Japan market infrastructure map]]、主要取引所ルールは[[securities/tokyo-stock-exchange|Tokyo Stock Exchange]]と[[securities/osaka-exchange|Osaka Exchange]]、HFT在庫を支える資金調達層は[[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage]]、日本拠点を運営するグローバル自己勘定取引会社の事業体レベル確認は[[securities/financial-instruments-business-operators-japan-index|FIBO registry]]とあわせて読む。

## 要約

日本の株式および上場デリバティブのマーケットメイクは、ハイブリッド市場である。Nomura、Daiwa、SMBC Nikko、Mizuho、MUMSSなどの国内フルサービス証券が、伝統的な銀行／証券型マーケットメイクとETF指定参加者機能を提供する。その横で、Citadel Securities Japan、Optiver Japan、Virtu Financial Japan、Jane Street Japan、IMC Japan、Susquehanna（SIG）Japan、その他のクオンツ取引会社からなるグローバル自己勘定取引／HFT層が、JPXの指定マーケットメーカー（DMM）制度とJ-NET／arrowheadマッチング基盤の中で活動している。JPXは、大阪取引所上場デリバティブ（指数先物／オプション、JGB先物／オプション）と東京証券取引所ETFについて、正式なマーケットメーカー制度を運営している。東証現物株式のDMMカバレッジは選択的である。証券金融、プライムブローカレッジ資金、PTSルーティングの経済性（[[securities/japannext-securities|Japannext]]）が競争上の位置づけを左右する。すべての会社は、東京拠点を持つ金商法登録の第一種金融商品取引業者として活動し、FSAとJSDA自主規制ルールの監督を受ける。

## このエコシステムが重要な理由

マーケットメーカーと流動性供給者は、個人向けSORや機関投資家の執行アルゴリズムが利用する板の供給側である。十分なマーケットメーカー活動がなければ、次のことが起こる。

1. **ビッド・アスク・スプレッドが拡大する。** 顧客の執行コストが上昇する。
2. **ETFの裁定ギャップが開く。** 指定参加者による設定／交換裁定がなければ、ETF価格はNAVから乖離する。
3. **オプション市場の流動性が薄くなる。** マーケットメーカーによるグリークス・ヘッジが、オプション板の流動性の構造的な源泉である。
4. **デリバティブ参照品質が低下する。** 先物と原資産株式バスケットの指数裁定には、双方で一貫したマーケットメーカー気配が必要である。
5. **PTSの価格改善機会が縮小する。** SORルーティングが価格改善を届けるのは、PTS取引所に競合気配が存在する場合だけである。

2010 以降のグローバルHFT会社の日本参入と、2013 以降の東証arrowheadエンジン更新が相まって、スプレッドは圧縮され、表示板の厚みは改善し、正式な指定マーケットメーカー制度の経済的意味が高まった。

### 大阪取引所デリバティブ・マーケットメーカー制度

OSEは上場デリバティブ向けに正式なMarket Maker（MM）プログラムを運営しており、次のような商品を対象にする。

| 商品 | マーケットメーカー上の重要性 |
|---|---|
| Nikkei 225 先物／オプション | 中核的な株価指数デリバティブMM活動。 |
| TOPIX先物／オプション | 指数デリバティブMM。 |
| Nikkei 225 ミニ／マイクロ | 個人投資家向け契約で、MMカバレッジを持つ。 |
| JGB先物／オプション | JGB現物・レポとのクロスアセット連動を持つ金利デリバティブMM（マップ済みの場合は[[money-market/jgb-repo-market-japan|JGB repo]]文脈を参照）。 |
| 個別株オプション | より選択的なMMカバレッジ。 |
| ボラティリティ／セクター商品 | 一部セグメントでMMが支援。 |

MM制度は、定められたビッド・アスク・スプレッド、最低数量、気配提示率の要件の下で両建て継続気配を約束する会社に、インセンティブ（手数料リベート、参加コスト低減、正式な気配提示義務と便益）を与える。現行制度のパラメータは、OSE Market Makerページで確認する。

### TSE ETFマーケットメーカー制度

TSEは上場ETF向けに正式なETF Market Makerプログラムを運営している。構造的な目的は、表示ビッド・アスク・スプレッドを狭く保ち、原資産バスケットとのETF裁定を支えることである。国内AM（主要ETF発行体であるNomura AM、AM-One、MUFG AM、Nikko AM、Daiwa AM。[[securities/japan-asset-manager-landscape-matrix|asset manager landscape]]参照）は、この制度で国内証券MMとグローバル会社の双方と連携する。

### TSE現物株DMM

TSE現物株の指定マーケットメーカー・カバレッジは、デリバティブ／ETF制度より選択的である。TSE現物株のデフォルトモデルは、arrowheadによる注文主導の継続オークションであり、正式なDMMコミットメントは、選定銘柄の市場品質目標に重ねて置かれる。

## 国内証券会社のマーケットメイク

主要な国内証券会社はそれぞれ、機関投資家向け事業の一部として、株式／デリバティブ／ETFマーケットメイクと指定参加者活動を行っている。

| ハウス | マーケットメイク上の重要性 |
|---|---|
| [[JapanFG/nomura-hd|Nomura Securities]] | 株式／デリバティブ／ETF全体で最大級の国内MMフットプリント。主要ETF AP。 |
| [[JapanFG/daiwa-sg|Daiwa Securities]] | 株式／デリバティブ／ETFにまたがる主要国内MM。 |
| [[JapanFG/smbc-nikko|SMBC Nikko]] | 株式／デリバティブにまたがる国内MM活動。金利／FX面でSMFGグループ隣接性を持つ。 |
| [[JapanFG/mizuho-securities|Mizuho Securities]] | 国内MM活動。金利／FX統合が強い。 |
| MUMSS（Mitsubishi UFJ Morgan Stanley） | Morgan Stanleyのグローバル統合を持つ国内MM。株式デリバティブ活動が大きい。 |

これらの証券会社は、MMに加えて、引受、プライムブローカレッジ、貸株、フルサービスの機関投資家向け営業を組み合わせる。これは、純粋な自己勘定HFT会社とは構造的に異なるコスト構造である。

### Citadel Securities Japan

- **グローバル親会社**: Citadel Securities（Citadelヘッジファンドとは別）。
- **日本でのフットプリント**: FSA登録の第一種金融商品取引業者として東京拠点を運営。株式／デリバティブのマーケットメイクと執行相手方事業。
- **特徴**: 世界最大級の株式マーケットメーカー。米国Reg NMS市場で大きなマーケットメーカー・シェアを持つ。日本事業は、グローバルなリスク基盤を用いて日本株式／デリバティブをカバーする。
- **活動範囲**: TSE／PTSにまたがる株式マーケットメイク、株式デリバティブ、ETF。

### Optiver Japan

- **グローバル親会社**: Optiver（アムステルダム本社のグローバル・マーケットメーカー）。
- **日本でのフットプリント**: 東京拠点。FSA登録の第一種金融商品取引業者。デリバティブ／ETF／株式活動でOSE／TSEのメンバー。
- **特徴**: オプション・マーケットメイクはOptiverのグローバルな強みであり、日本のオプション／ETF／デリバティブ気配提示は中核活動である。
- **活動範囲**: 上場オプション、ETF MM、株式デリバティブ。

### Virtu Financial Japan

- **グローバル親会社**: Virtu Financial（NYSE上場のグローバル・マーケットメーカー）。
- **日本でのフットプリント**: 東京拠点。FSA登録の第一種金融商品取引業者。日本を含むアジア複数取引所で株式／ETFマーケットメイク。
- **特徴**: グローバルなETF APおよびマーケットメイク事業。取引所横断の裁定能力。
- **活動範囲**: 株式／ETF MM、一部デリバティブ活動。

### Jane Street Japan

- **グローバル親会社**: Jane Street（非公開のグローバル・クオンツ取引会社）。
- **日本でのフットプリント**: 東京拠点。FSA登録。ETF／株式／デリバティブのマーケットメイク。日本上場ETFとクロスリストETF裁定に適用される強いグローバルETF APフランチャイズ。
- **特徴**: 最も活発なグローバルETFマーケットメーカーの一つ。クオンツ取引文化。債券と株式を横断する重要なクロスアセット活動。
- **活動範囲**: ETF MM、株式デリバティブ、クロスアセット裁定。

### IMC Japan

- **グローバル親会社**: IMC Trading（アムステルダム本社のグローバル・マーケットメーカー）。
- **日本でのフットプリント**: 東京拠点。FSA登録。デリバティブ／ETF／株式マーケットメイク。
- **特徴**: アジアのデリバティブ市場で長期の存在感を持つ。オプション・マーケットメイク能力。
- **活動範囲**: 上場オプション、ETF MM、株式。

### Susquehanna（SIG）Japan

- **グローバル親会社**: Susquehanna International Group（SIG、フィラデルフィア本社のグローバル・クオンツ取引会社）。
- **日本でのフットプリント**: 東京拠点。FSA登録。デリバティブ／オプション・マーケットメイク。
- **特徴**: グローバルなオプション・マーケットメイクの強み。仕組商品に関する専門性。クオンツ取引文化。
- **活動範囲**: 上場オプション、ETF MM、株式デリバティブ。

### 同階層のその他の会社

日本のマーケットメイク活動を持つ追加のグローバル／地域会社（このリストは公開情報で見える会社に限られる。活動中の事業体は最新のFSA金融商品取引業者登録簿で確認する）。

- Tower Research Capital Japan
- DRW Holdings Japan
- Hudson River Trading Japan
- Flow Traders（アジア事業が日本上場ETFをカバー）
- XR Tradingおよび日本上場商品で活動するその他クオンツ会社
- 金商法第一種範囲で活動する国内自己勘定会社

## 指定マーケットメーカーのインセンティブと義務

JPX MMインセンティブの一般的な構造は次の通りである。

| インセンティブ | 典型的な形態 |
|---|---|
| 手数料リベート／取引参加コスト低減 | MM適格活動に対する取引ごと、または商品ごとの手数料低減。 |
| 指定銘柄割当 | 特定銘柄でDMMとして活動する権利。 |
| マーケティング／可視性 | JPX制度ページで制度MMとして公開掲載される。 |
| 接続／インフラ上の便益 | 一部の制度設計で付与される。 |

対応する義務は次の通りである。

| 義務 | 典型的な形態 |
|---|---|
| 継続的な両建て気配提示 | 指定時間中の気配提示率が求められる。 |
| 最大ビッド・アスク・スプレッド | 気配は指定されたスプレッド帯の範囲内でなければならない。 |
| 最低気配数量 | 気配は指定された契約数／株数以上でなければならない。 |
| パフォーマンス監視 | 制度運営者が履行状況を監視し、不履行によりMMステータスが停止され得る。 |
| 報告 | MM活動は取引所へ報告される。 |

正確な制度パラメータは変化する。時間依存の材料を公表する前に、現行のOSE Market Maker／TSE ETF Market Makerページで数値閾値を確認する。

## 先物・オプションのマーケットメイク強度

日本の上場株価指数、JGB、個別株オプション市場は、継続的なMM気配に大きく依存する。理由は次の通りである。

- オプションは、期間構造と権利行使価格グリッド全体にわたるグリークス・ヘッジを必要とする。全グリッドに気配を出せるのは、クオンツリスク基盤を持つ体系的MMに限られる。
- 指数先物の流動性は現物株式裁定と結びついている。MM活動はベーシスを支え、インデックスファンドのトラッキングエラーを低下させる。
- JGB先物／オプションは、JGBレポ市場（[[securities/japan-margin-trading-and-securities-finance|margin trading and securities finance]]およびJGBレポ関連項目参照）と広範な資金調達市場に相互作用する。
- 上記のグローバルHFT会社は、国内証券フランチャイズ活動の外側で、継続的MM強度の大部分を提供している。

## 株式マーケットメイクとPTSルーティング

マーケットメイクとSORルーティングは板で交わる。

- TSEで気配を出すマーケットメーカーは、PTS気配が裁定されるNBBO参照を提供する。
- [[securities/japannext-securities|Japannext]] PTSで気配を出すマーケットメーカーは、SORの価格改善機会を提供する。
- TSEとJapannextの間で裁定するマーケットメーカーは、2つの板の整合性を保つ。
- 同じ会社が両取引所で同時にマーケットメーカーとなり、在庫がリバランスされる過程でスプレッド差を獲得することがある。

ルーティング側のメカニクスは[[securities/japannext-sor-routing-deep-dive|Japannext PTS SOR routing deep dive]]、取引所シェアの証拠は[[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]]を参照する。

## マーケットメーカーの資金調達層

HFT在庫と日中ポジションには資金調達インフラが必要である。

| 必要性 | 供給源 |
|---|---|
| プライムブローカレッジ／資金調達 | バルク資金調達層は[[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage]]参照。グローバルIBがシンセティックおよび現物の資金調達を提供する。 |
| ショート側の貸株 | [[securities/japan-stock-lending-market-route|stock lending market route]]参照。[[JapanFG/japan-securities-finance|Japan Securities Finance]]は構造的レールの一つであり、ブローカー間貸借も別のレールである。 |
| 信用取引レール | [[securities/japan-margin-trading-and-securities-finance|margin trading]]参照。信用取引適格銘柄における個人向け証券MM活動に関連する。 |
| 清算証拠金 | 会員証拠金要件に基づき[[securities/japan-securities-clearing-corp|JSCC]]へ差し入れる。 |
| 現金レポとJGB担保 | JGBレポ市場を通じたクロスアセット資金調達。 |

資金調達コストは意味のある競争上の差別化要因である。安価な在庫資金を持つ会社は、高価な資金調達をする会社よりも、低い回転率でも狭いスプレッドを提示できる。

## 規制・自主規制の枠組み

| レイヤー | 役割 |
|---|---|
| FSA | 日本で活動するグローバルHFT会社の第一種金融商品取引業登録を認可し、行為規制、システム強靭性、市場公正性管理を監督する。 |
| JSDA | 自主規制機関。会員にはMM活動を行う会社が含まれる。ルールは注文入力、市場公正性、利益相反管理を対象とする。 |
| JPX（TSE / OSE / TOCOM） | MM制度、気配提示義務、停止手続、監視に関する取引所ルール。 |
| JSCC | 清算会員ルールと証拠金要件。 |
| FSA SESC（証券取引等監視委員会） | アルゴリズム取引・HFT活動に関連する見せ玉、レイヤリング、相場操縦調査を含む市場濫用・行為監視。 |

具体的なMMルール改正、不公正取引に対する執行措置、SESCの勧告／事案は、公的な規制発表に定期的に現れる。特定会社について結論を出す前に、現行事案を確認する。

## ETF指定参加者の役割

ETF指定参加者（AP）は、通常マーケットメーカーでもある会社と、国内フルサービス証券で構成される。

- 国内AP: Nomura Securities、Daiwa Securities、SMBC Nikko、Mizuho Securities、MUMSS。
- グローバルAP／MM: Citadel Securities、Optiver、Virtu、Jane Street、IMC、SIG。
- AP活動は、ETF価格をNAVへ固定する設定／交換メカニズムである。

[[securities/japan-asset-manager-landscape-matrix|domestic ETF issuers]]（Nomura AM、AM-One、MUFG AM、Nikko AM、Daiwa AM、iShares Japan）にとって、AP関係は運用上きわめて重要である。ニッチETFでAPカバレッジが薄い場合、NAVトラッキングエラーが拡大する。

## レイテンシーとインフラ

| レイヤー | 注記 |
|---|---|
| JPX arrowheadマッチングエンジン | 現物株式マッチングエンジン。複数世代の更新により、レイテンシーはグローバル競争力のある水準まで低下した。 |
| OSE J-GATE | デリバティブ・マッチング基盤。 |
| JPXデータセンターのコロケーション | 日本で活動するグローバルHFT会社にとって標準。取引所側レイテンシーを低減する。 |
| 接続プロバイダー | 標準的なグローバル低レイテンシー接続プロバイダーが東京にサービスを提供している。 |
| 市場データ | JPXフィード（TQ、FLEX）およびPTS取引所向けの取引所直結フィード。 |

## 関連項目

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
- [[JapanFG/nomura-hd]]
- [[JapanFG/daiwa-sg]]
- [[JapanFG/smbc-nikko]]
- [[JapanFG/mizuho-securities]]
- [[JapanFG/morgan-stanley-japan]]
- [[JapanFG/goldman-sachs-japan]]
- [[JapanFG/japan-exchange-group]]
- [[JapanFG/japan-securities-finance]]
- [[JapanFG/jsda]]
- [[INDEX|FinWiki index]]

## 出典

- JPX, Osaka Exchange Market Maker scheme page (English / Japanese).
- JPX, TSE ETF Market Maker scheme page.
- JPX, equity statistics pages.
- FSA, financial instruments business operator list (kinyushohin.xlsx) for FIBO registration verification.
- Citadel Securities, Optiver, Virtu Financial, Jane Street, IMC, SIG corporate sites.
- JSDA self-regulatory site.
