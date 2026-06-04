---
source: securities/japannext-sor-routing-deep-dive
source_hash: 99fc79435a5d17e6
lang: ja
status: machine
fidelity: ok
title: "Japannext PTS の SOR ルーティング詳解"
translated_at: 2026-06-03T00:53:08.292Z
---
# Japannext PTS の SOR ルーティング詳解

## ウィキ上の位置づけ

このページは [[securities/INDEX|securities index]] 内にあり、[[securities/japannext-securities|Japannext]] の取引所メカニクスを深掘りし、[[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]] のルーティング・メカニクスを深掘りするページである。データレイヤーは [[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]]、Japannext が TSE / OSE と JSCC / JASDEC の間でどこに位置するかは [[securities/japan-market-infrastructure-map|Japan market infrastructure map]]、PTS運営者の存在を可能にする免許境界は [[securities/financial-instruments-business-operators-japan-index|FIEA operator registry]] とあわせて読む。JapanFGの運営者アンカーには、[[megabanks/sbi-hd|SBI HD]]（SBIグループの系譜を通じたJapannextのアンカー株主）、[[securities-firms/nomura-hd|Nomura HD]]（Instinetの系譜 / SOR利用の厚い参加者）、[[securities-firms/sbi-securities|SBI Securities]] と [[financial-regulators/jsda|JSDA]]（PTS統計の公表者）が含まれる。

## 要約

Japannext は、日本で最も古く最大の現物株式PTSであり、FIEA上の第一種金融商品取引業とPTS認可に基づき、Japannext Co., Ltd.（旧SBI Japannext）が運営している。昼間セッションの J-Market と夜間セッションの X-Market というリットの継続オークション型注文板を運営し、EUや米国のMTF / ATS設計で一般的な指値 / 成行 / アイスバーグ / ペッグ注文タイプを支える。競争上の役割は、ブローカーのSORエンジンに対し、[[securities/tokyo-stock-exchange|TSE]] と OSE上場現物隣接領域に代わる価格改善および時間外取引の選択肢を与えることである。ルーティング経済性は、JSDA自主規制規則、FSAの顧客本位原則、TSE / Japannext / [[securities/osaka-digital-exchange|ODX]] 間の分断（ODXの現物株式範囲は狭く、主にセキュリティトークン）、SOR保有者がJapannext株主または販売上の取引相手でもある場合のブローカー優先ルーティングによって形づくられる。

## 取引所としての位置づけ

| 項目 | 公開上の読み方 |
|---|---|
| 法的主体 | Japannext Co., Ltd.（株式会社ジャパンネクスト証券） |
| FIEA登録 | PTS運営認可を持つ第一種金融商品取引業者（[[securities/financial-instruments-business-operators-japan-index|FIBO registry]] で確認）。 |
| 株主の系譜 | SBIグループ / SBI HDをアンカーとする歴史的PTS系譜。Goldman Sachsなどの企業は、日本のPTS史の中で歴史的なPTS株主または取引相手だった。現在の資本構成は取引所IRごとに確認する。 |
| 自主規制との隣接 | [[financial-regulators/jsda|JSDA]] 会員。PTS Information Network が2025年7月に終了した後、PTS統計はJSDAが集計する。 |
| 運営市場 | 現物株式PTS取引向けの J-Market（昼間継続取引）と X-Market（夜間継続取引）。 |
| 清算経路 | PTS清算の枠組みに基づき、現物株式PTS取引は [[securities/japan-securities-clearing-corp|JSCC]] を通じて清算され、[[securities/japan-securities-depository-center|JASDEC]] の振替決済で決済される。 |

資本構成や法人名は変わり得る。時間感度のある資料で現在の所有関係を引用する前に、必ず取引所の About / Regulations ページを確認する。

## セッション構造

Japannext は2つの異なるセッションを運営しており、ブローカーのSORロジックはこれらを別々の流動性プールとして扱う必要がある。

| セッション | 時間帯（例示） | 用途 |
|---|---|---|
| J-Market | TSE昼間セッションと重なる | 価格改善、隠れ流動性の捕捉、対応セグメントでのミッドポイント約定のためのリット代替市場。 |
| X-Market | 夕方 / 夜間セッション | リテール顧客、ETF / 指数ファンドの遅いフロー処理向け時間外流動性。現物株式の通常夜間セッションを持たないTSEに対する重要な付加価値。 |

夕方セッションはJapannextの最も特徴的な商品の1つである。[[securities/tokyo-stock-exchange|TSE]] は比較可能な通常の引け後現物株式継続市場を提供しておらず、OSE PTS-Night や TSE 自身の ToSTNeT は仕組みが異なる（相対 / 終値 / 大口注文型）。したがって、顧客の引け成行注文や時間外ニュース反応注文のルーティングは、TSE代替ではなく X-Market の用途である。

## 注文タイプ

Japannext は、リテールUIが通常表示するより豊かな注文タイプ語彙を支える。公開説明されているファミリーは以下を含む。

| 注文タイプ | 挙動 | ルーティング上の関連性 |
|---|---|---|
| 指値 | 標準的な価格・時間優先の指値注文。 | TSE NBBO と比較するSORの基本要素。 |
| 成行 | 表示されている最良気配の流動性を取る。 | 一部銘柄ではPTS板の最良気配がTSEより薄いため、インパクトリスクが高い。 |
| アイスバーグ / 非表示数量 | 一部だけを表示し、約定後に補充する。 | 機関投資家フローが、価格改善を狙う相手からブロックサイズを隠すために使う。 |
| ペッグ注文（対応する場合） | NBBO / ミッドポイント / 主市場の最良価格を追随する。 | 価格リスクを取りすぎずに価格改善を狙うSORエンジンに有用。 |
| ストップ / ストップ指値 | 条件付きトリガー。 | ブローカー側の条件付き注文がトリガー時に指値 / 成行へ変換され再ルーティングされる場合がある。 |
| 執行条件のバリアント（Day / IOC / FOK） | 標準的なグローバルTIF語彙。 | Japannextの流動性を試し、部分約定後すぐ再ルーティングしたいSORエンジンに重要。 |

正確なフィールドレベルの挙動は、必ず取引所の現行規則集とブローカーの商品開示で確認する。PTS規則改定やティックサイズ同期は実務上の優位性を変える。

## SOR ルーティング判断ロジック

ブローカーのSORは魔法の箱ではない。顧客注文がTSEへ直行せずJapannextに触れるかを決める判断ロジックは、通常以下を組み合わせる。

1. **顧客指示と商品範囲。** 一部商品（例:NISA制約銘柄、一定の信用取引フロー、指定注文タイプ）は、ブローカー方針によりPTSルーティングから除外される場合がある。ブローカー開示チェックリストは [[securities/japan-best-execution-sor-pts|best-execution policy]] ページを参照。
2. **リアルタイム価格比較。** SORは注文到着時点で、Japannextの最良気配をTSE NBBOと比較する。サブティック改善が可能かを決めるティックサイズ規則も含まれる。
3. **利用可能数量。** Japannextの表示流動性が注文サイズの閾値を下回る場合、SORは子注文をJapannextに出し、残りをTSEへ同時（スプレールーティング）または順次に送る場合がある。
4. **遅延と接続性。** SORはJapannextとTSE arrowheadマッチングエンジンまでの往復時間を考慮する必要がある。時間感度の高いフローでは、限界的な価格改善が会場の遅さにより捨てられる場合がある。
5. **手数料 / リベート経済性。** Japannextの手数料表と、TSE参加料に対するメイカー / テイカーのリベート差は、顧客成果とは独立にブローカーのインセンティブへ影響する（利益相反面）。
6. **フォールバック規則。** Japannextが売買停止、データ障害、接続ヘルスチェック失敗の状態にある場合、SORは開示済みの挙動に従ってTSEへ再ルーティングしなければならない。

FSAの顧客本位の業務運営原則は、実質的に、価格、費用、速度、執行可能性、決済確実性、顧客指示のバランスをSORがどう取るかをブローカーに文書化させる。SOR設計は、その文書化された方針の運用上の執行である。

## 分断: TSE / OSE / Japannext / ODX

日本の現物株式流動性は、米国株式がNYSE / Nasdaqに分散している状況より、はるかに [[securities/tokyo-stock-exchange|TSE]] に集中している。分断マップは以下のようになる。

| 取引場所 | 現物株式フローのシェア | 注記 |
|---|---|---|
| TSE | Prime、Standard、Growth 各セグメントの売買代金の大多数 | NBBOの参照市場。arrowheadエンジン、立会外のToSTNeT。 |
| OSE | 現在は実質的に現物株式なし（2013 統合後、株式はTSEに集約）。上場デリバティブ市場 | 現在の現物株式分断の問いにOSEはほとんど関係しない。 |
| Japannext | 取引所外現物株式における最大のPTSシェア | リテールおよび機関投資家の現物株式フローにとって最も重要なSOR代替。 |
| Cboe Japan（旧 Chi-X Japan） | もう1つの主要PTS極 | 現在の活動状況と所有関係は、取引所IR / FSA開示ごとに確認する。統合後のPTS市場は少数の運営者で構成される。 |
| ODX equity PTS | 現物株式範囲は狭い。START セキュリティトークンPTSが主要な公開機能 | セキュリティトークン側は [[securities/japan-security-token-secondary-market-route|security token secondary market route]] を参照。 |
| ToSTNeT（TSE立会外） | TSE自身の立会外経路 | ブロック / 終値 / 相対取引。PTSとは同じではない。 |

読み方はこうである。日本の分断は米国や欧州の現物株式ほど顕著ではない。したがってSOR設計の判断は「20 会場へ行くべきか」ではなく、「TSEの表示流動性を取るか、それとも少数のPTS会場で価格改善と追加サイズを確認するか」として構成される。

## ダークプールとリットプールのルーティング

Japannext は歴史的に、リットの継続オークション型注文板を主力商品として運営している。米国的な「ダークプール」（注文が執行時まで非表示の会場）は、日本には完全には対応しない。

- 主要なJapannext市場は、上位気配 / 板情報を公開するリットの指値注文板である。
- アイスバーグ / 非表示数量注文は、完全なダーク会場ではなく、リット板の中の非表示サイズ機能を提供する。
- 提供されている場合、ミッドポイント連動セグメントは、一部の米国ダークプール機能に類似するミッドポイントクロス機能を提供する。
- 日本のブローカー内製化は、最良執行規則とJSDA自主規制の枠組みによって制約される。ブローカーが内製化した現物株式フローは、米国Reg NMS期のダークプールと同じ規制形態を持たない。

日本の「ダークプール」について分析する場合、より正確な表現は、Japannext / Cboe Japan のリット板内の「非表示流動性」、ToSTNeT のブロック / 終値交渉、JSDA規則下の取引所外ブローカー媒介クロスを組み合わせることであり、Japannextを米国型ATSダークプールとして扱うことではない。

## ブローカー優先ルーティングと利益相反

ブローカー優先ルーティングとは、ブローカー（またはその親会社 / 関係会社）が経済的利害を持つ会場をSOR設計が優先することを指す。日本で見るべき面には以下がある。

- **株主関係。** Japannext の歴史的なSBI系譜により、[[securities-firms/sbi-securities|SBI Securities]] の注文フローは執行メニューの一部としてJapannextを検討する構造的理由を持つ。開示上の問いは、そのルーティング優先がブローカーの最良執行方針に文書化されているかである。
- **リベート / 手数料経済性。** 会場のメイカーリベートがブローカーの顧客リベート還元を上回る場合、ブローカーは差額を得る。これは米国Reg NMS期の論争と同じ利益相反パターンだが、数値規模は小さい。
- **証券貸借とプライムブローカレッジ隣接性。** ブローカーが [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage]] も運営している、または [[securities/japan-stock-lending-market-route|stock lending]] と相互作用する場合、間接的な経済性が見かけの執行経路を複雑にし得る。資金調達側の隣接性は [[securities/japan-margin-trading-and-securities-finance|margin trading and securities finance]] を参照。
- **内製化先への情報漏えい。** ブローカーが残余をPTSへ出す前にフローを内製化する場合、顧客注文が内製化の過程で逆選択されていないかが問いになる。

FSAの顧客本位の業務運営ページは、ブローカーに対し、こうした利益相反を開示・管理するという原則ベースの期待を示している。特定企業について結論を出す前に、分析者はブローカーの公表方針とJSDA自主規制資料を読むべきである。

## 執行品質指標

Japannextルーティングが実際に顧客成果を改善するかを評価するうえで有用な指標は以下である。

| 指標 | 定義 | 注意点 |
|---|---|---|
| TSE NBBO 対比の価格改善 | 注文到着時点のTSE最良気配と約定価格の差 | ティックサイズの離散性が改善幅を制限する。サブティック対応の比較が必要。 |
| 実効スプレッド | 注文到着時点のミッド気配と約定価格の絶対距離の2倍 | 低いほど良い。ミッドポイント約定が多い会場がこの指標で勝る。 |
| 実現スプレッド（T+N） | T+5 分（または他の間隔）時点のミッド気配と約定価格の距離の2倍 | 取引が逆選択されたかを捉える。 |
| 約定率 | 執行条件時間内に約定した数量 / 提出数量 | IOC / FOK の探索戦略に重要。 |
| 速度 | 注文受領から約定 / 取消までの時間 | SORスイープでは遅延が重要。 |
| 実効手数料 | 明示的手数料 + 暗黙のスプレッド + リベート還元 | 顧客向け総費用が正しい指標であり、会場手数料の見出しではない。 |

会場 / ブローカーレベルの統合的な執行品質データは、日本では米国Rule 605 / 606 開示ほど標準化されていない。分析者は、単一の規制データセットを引くのではなく、ブローカー別方針ページ、[[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]] からのJSDA集計PTS統計、任意のブローカー執行品質開示を組み合わせる必要がある。

## 決済 / 清算との接続

Japannext PTS の現物株式取引は、PTS清算サービスに基づき [[securities/japan-securities-clearing-corp|JSCC]] を通じて清算され、[[securities/japan-securities-depository-center|JASDEC]] の振替決済を通じてT+2 （2024 後に短縮されたサイクル。現行標準決済サイクルは確認すること）で決済される。関連する運用上の考慮点は以下である。

- PTS取引は「清算外」ではない。TSE取引と同じCCPリスクシステムに入る。
- JSCCの参加者証拠金とデフォルトファンド拠出は、両会場をカバーする。
- Japannextの運用障害（マッチングエンジン問題、市場データ障害）は清算済み取引を取り消すものではない。将来の注文ルーティングに影響する。
- 清算参加者レベルでのクロス会場ネッティングは、SORを積極利用する会社にとって意味のある運用上の便益である。

## 規制と自主規制

| レイヤー | 役割 |
|---|---|
| FSA | PTS範囲を持つ第一種金融商品取引業を認可し、オペレーショナル・レジリエンス、行為規制、顧客本位実装を監督する。 |
| JSDA | 証券会社（証券会社であるPTS運営者を含む）の自主規制機関。PTS統計を公表し、上場・非上場証券のPTS取引規則を運営する。 |
| JSCC | CCPリスク管理。 |
| JASDEC | 振替決済インフラ。 |
| 取引所自主規則 | Japannext は参加者行為、注文入力、市場健全性管理に関する自社規則 / 規程ページを公表する。 |

境界注記: Japannext規則はJapannext参加者に対して執行可能であり、FSA原則は規制対象主体に対して執行可能であり、JSDA自主規制規則はJSDA会員を拘束する。分析者が「Japannext は X を求める」と書く場合、X が取引所規則、JSDA規則、FSA期待のどれなのかを確認する必要がある。それぞれ執行と例外の仕組みが異なる。

## 沿革スケッチ

Japannext の系譜は、FIEA-2007 後のPTS制度自由化、PTSインフラ推進におけるSBIグループの役割、グローバル企業との提携（Goldman Sachs が歴史的に前身会社に出資していたことを含む）、少数の現物株式PTS極が残る統合へとつながる。Cboe は旧Chi-X Japan事業を取得し、Cboe Japanに改称した。他のPTS運営者は参入と退出を経験している。

現在のルーティング環境に関連する主要な構造イベントは以下である。

- **2007 FIEA 第一種 + PTS認可枠組み** — 現代的なPTS法的基盤を作った。
- **SBI Japannext の開始** — 昼間 + 夜間セッションのリットPTSを確立した。
- **Chi-X Japan / Cboe Japan の承継** — 現物株式PTS競争の第2極。
- **TSE arrowhead マッチングエンジンのアップグレード** — 主取引所とPTS会場の遅延 / 機能差を縮小した。
- **PTS Information Network の2025年7月終了** — JSDA が公開PTS統計集計を引き継いだ。
- **オンラインブローカーでのリテールSOR商品の継続展開** — 顧客向けUIでPTSルーティングが見えるようになった。

## 関連項目

- [[securities/INDEX]]
- [[securities/japannext-securities]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/osaka-digital-exchange]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[securities/japan-stock-lending-market-route]]
- [[securities/japan-margin-trading-and-securities-finance]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[megabanks/sbi-hd]]
- [[securities-firms/sbi-securities]]
- [[securities-firms/nomura-hd]]
- [[financial-regulators/jsda]]
- [[financial-regulators/japan-exchange-group]]
- [[INDEX|FinWiki index]]

## 出典

- Japannext Co., Ltd., official site and regulations / about pages.
- JSDA, PTS trading statistics page and explanatory PDF for PTS equity statistics.
- FSA, comprehensive supervisory guideline for financial instruments business operators; customer-oriented business conduct (顧客本位の業務運営) page.
- JPX, equity statistics pages and clearing / settlement outline.
