---
source: securities/japannext-sor-routing-deep-dive
source_hash: 1a19daaab35d5bd8
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Japannext PTS SOR ルーティング詳細分析"
translated_at: 2026-06-26T08:28:53.974Z
---

# Japannext PTS SOR ルーティング詳細分析

## Wiki route

このページは [[securities/INDEX|securities index]] の内部に位置し、[[securities/japannext-securities|Japannext]] の venue-mechanics 深化および [[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]] の routing-mechanics 深化として機能する。データ層については [[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]] と、Japannext が TSE / OSE と JSCC / JASDEC の間のどこに位置するかについては [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] と、PTS 運営者の存在を可能にするライセンス境界については [[securities/financial-instruments-business-operators-japan-index|FIEA 事業者 registry]] と併せて読むこと。JapanFG 事業者 anchor には [[megabanks/sbi-hd|SBI HD]]（SBI グループ系譜による Japannext のアンカー株主）、[[securities-firms/nomura-hd|Nomura HD]]（Instinet レガシー / SOR 主体の参加者）、[[securities-firms/sbi-securities|SBI Securities]] および [[financial-regulators/jsda|JSDA]]（PTS 統計の公表者）が含まれる。

## TL;DR

Japannext は日本で最も古く最大の現物株式 PTS であり、Japannext 株式会社（旧 SBI Japannext）が PTS 認可付きの FIEA 第一種金融商品取引業のもとで運営する。明示的な連続オークション注文板（日中セッション用の J-Market と夜間セッション用の X-Market）を運用し、EU・US の MTF / ATS 設計でおなじみの指値 / 成行 / アイスバーグ / ペッグ注文タイプをサポートする。その競争上の役割は、ブローカーの SOR エンジンに対して [[securities/tokyo-stock-exchange|TSE]] および OSE 上場の現物隣接に代わる価格改善および時間外の代替手段を提供することにある。ルーティングの経済性は、JSDA 自主規制ルール、FSA の顧客最善利益原則、TSE / Japannext / [[securities/osaka-digital-exchange|ODX]] 間の分断（ODX では現物株式の範囲は狭く、主に証券トークン）、そして SOR 所有者が同時に Japannext の株主または販売カウンターパーティーである場合のブローカー優先選択によって形作られる。

## Venue identity

| Field | Public reading |
|---|---|
| Legal entity | Japannext 株式会社（株式会社ジャパンネクスト証券）|
| FIEA registration | PTS 運営認可を有する第一種金融商品取引業者（[[securities/financial-instruments-business-operators-japan-index|FIBO registry]] で確認のこと）。|
| Shareholder lineage | SBI グループ / SBI HD をアンカーとする歴史的 PTS 系譜；ゴールドマン・サックスその他の企業は、日本の PTS の歴史を通じて歴史的な PTS 株主またはカウンターパーティーであった。現在の資本構成表は venue IR で確認のこと。|
| Self-regulatory adjacency | [[financial-regulators/jsda|JSDA]] 会員；PTS 情報ネットワークが 2025 年 7 月に終了した後、PTS 統計は JSDA によって集約される。|
| Markets operated | 現物株式 PTS 取引のための J-Market（日中連続）、X-Market（夜間セッション連続）。|
| Clearing route | 現物株式 PTS 取引は PTS 清算取決めのもとで [[securities/japan-securities-clearing-corp|JSCC]] を通じて清算され、[[securities/japan-securities-depository-center|JASDEC]] の振替によって決済される。|

資本構成表およびエンティティ名の変更は起こりうる；時間に敏感な資料で現在の所有権を引用する前に、必ず venue の About / Regulations ページを確認すること。

## Session structure

Japannext は 2 つの異なるセッションを運営しており、ブローカーの SOR ロジックはこれらを異なる流動性プールとして扱わなければならない:

| Session | Window (illustrative) | Use case |
|---|---|---|
| J-Market | TSE 日中セッションと重複 | 価格改善、隠れた流動性の捕捉、サポートされるセグメントでのミッドポイント・マッチングのための明示的な代替 venue。|
| X-Market | 夕方 / 夜間セッション | リテール顧客および遅れたフローを処理する ETF / インデックスファンドのための時間外流動性；現物株式の通常の夜間セッションを欠く TSE に対する重要な付加価値。|

夕方セッションは Japannext の最も特徴的な製品機能の 1 つである。なぜなら [[securities/tokyo-stock-exchange|TSE]] は比較可能な通常の引け後現物株式連続市場を提供しておらず、OSE PTS-Night および TSE 自身の ToSTNeT venue は異なるメカニクス（相対 / 終値 / 大口注文設計）を持つからである。したがって、顧客の市場引け注文や時間外ニュース反応注文のルーティングは、TSE の代替ではなく X-Market のユースケースである。

## Order types

Japannext は、リテール UI が通常公開するよりも豊富な注文タイプの語彙をサポートする。公開記載されているファミリーには以下が含まれる:

| Order type | Behaviour | Routing relevance |
|---|---|---|
| 指値（指値）| 標準的な価格-時間優先の指値。| TSE NBBO に対するデフォルトの SOR 比較プリミティブ。|
| 成行（成行）| 利用可能な最良の表示流動性を取得。| 一部の銘柄では板の最上部が薄いため、PTS 板では TSE よりもインパクトリスクが高い。|
| アイスバーグ / 隠れ数量 | 一部のみを表示し、約定時に補充。| 機関フローが価格改善を求める者からブロックサイズを隠すために使用。|
| ペッグ注文（サポートされる場合）| NBBO / ミッドポイント / プライマリー venue の最良価格を追跡。| 気配リスクを負わずに価格改善を求める SOR エンジンに有用。|
| 逆指値 / 逆指値指値 | 条件付きトリガー。| ブローカー側の条件付き注文は、トリガー時に指値 / 成行に変換され再ルーティングされうる。|
| 有効期限のバリアント（Day / IOC / FOK）| 標準的なグローバル TIF 語彙。| Japannext の流動性を探り、部分約定時に即座に再ルーティングしたい SOR エンジンにとって極めて重要。|

正確なフィールドレベルの挙動については、必ず venue の現行ルールブックおよびブローカー製品開示を確認すること；PTS ルールの改訂および呼値単位の同期は、実務上のエッジを変える。

## SOR routing decision logic

ブローカーの SOR は魔法の箱ではない。顧客注文が TSE で直接執行されるのではなく Japannext に触れるかどうかを決定するロジックは、通常以下を組み合わせる:

1. **顧客の指示と製品範囲。** 一部の製品（例: NISA 制限銘柄、特定の信用取引フロー、特定の注文タイプ）は、ブローカーのポリシーによって PTS ルーティングから除外されうる。ブローカー開示チェックリストについては [[securities/japan-best-execution-sor-pts|best-execution policy]] ページを参照。
2. **リアルタイム価格比較。** SOR は注文到着の時点で Japannext の最良買気配 / 売気配を TSE NBBO と比較し、サブティック改善が可能かどうかを決定する呼値単位ルールを含む。
3. **利用可能サイズ。** Japannext の表示流動性が注文のサイズ閾値を下回る場合、SOR は子注文を Japannext に送り、残りを同時に（スプレー・ルーティング）または順次 TSE に送ることがある。
4. **レイテンシーと接続性。** SOR は Japannext と TSE arrowhead マッチングエンジンへの往復時間を考慮しなければならない；時間に敏感なフローでは、venue が遅い場合、限界的な価格改善は破棄されうる。
5. **手数料 / リベートの経済性。** Japannext の手数料体系および TSE 参加手数料に対するメイカー / テイカー・リベート差は、顧客の結果とは独立にブローカーのインセンティブに影響する（利益相反の表面）。
6. **フォールバック・ルール。** Japannext が停止中、データ障害、または接続ヘルスチェックに失敗した場合、SOR は開示された挙動で TSE に再ルーティングしなければならない。

FSA の顧客最善利益原則（顧客本位の業務運営）は、実質的に、ブローカーが自社の SOR が価格、コスト、スピード、執行の可能性、決済の確実性、および顧客の指示をどのようにバランスさせているかを文書化することを要求する；SOR の設計はその文書化されたポリシーの運用上の執行である。

## Fragmentation: TSE / OSE / Japannext / ODX

日本の現物株式流動性は、米国株式が NYSE / Nasdaq に集中しているよりもはるかに [[securities/tokyo-stock-exchange|TSE]] に集中している。分断のマップは次のようになる:

| Venue | Share of cash-equity flow | Notes |
|---|---|---|
| TSE | Prime、Standard、Growth の各セグメントにわたる価値の大多数 | NBBO の参照市場；arrowhead エンジン、場外用の ToSTNeT。|
| OSE | 現在は実質的に現物株式なし（株式は 2013 統合後に TSE に集約）；上場デリバティブ venue | 現物株式の分断問題は今日 OSE をほとんど含まない。|
| Japannext | 場外現物株式の最大の PTS シェア | リテールおよび機関の現物株式フローにとって最も重要な SOR 代替手段。|
| Cboe Japan（旧 Chi-X Japan）| もう 1 つの主要な PTS の極 | 現在の活動および所有権ステータスは venue IR / FSA 開示で確認のこと；統合後、PTS 市場は少数の運営者で構成される。|
| ODX 株式 PTS | 現物株式の範囲は狭い；START 証券トークン PTS が主要な対外的機能 | 証券トークン側については [[securities/japan-security-token-secondary-market-route|security token secondary market route]] を参照。|
| ToSTNeT（TSE 場外）| TSE 自身の場外ルート | ブロック / 終値 / 相対取引；PTS とは異なる。|

読み解き: 日本の分断は、米国や欧州の現物株式よりもはるかに顕著でない。したがって SOR 設計の決定は、「20 venue に行くべきか」ではなく、「TSE の表示流動性を取るべきか、それとも価格改善と追加サイズのために少数の PTS venue を確認すべきか」という枠組みで捉えられる。

## Dark vs lit pool routing

Japannext は歴史的に、主要製品として明示的な連続オークション板を運営している。米国的な意味での「ダークプール」（注文が執行時にのみ明らかにされる非表示 venue）は、以下の理由から日本に不完全にしかマッピングされない:

- 主要な Japannext 市場は、公表された板最上部 / 深度データを持つ明示的な指値注文板である。
- アイスバーグ / 隠れ数量注文は、完全にダークな venue ではなく、明示的な板の内部に隠れサイズ機能を提供する。
- 提供される場合のミッドポイント・ペッグ・セグメント（現行の製品ページを確認のこと）は、一部の米国ダークプール機能に類似したミッドポイント・クロス機能を提供する。
- 日本におけるブローカーの内部化は、最良執行ルールおよび JSDA 自主規制フレームワークによって制約される；ブローカーが内部化した現物株式フローは、米国の Reg NMS 時代のダークプールと同じ規制上の形状を持たない。

日本の「ダークプール」について書く分析者にとって、より正確な言い方は、Japannext を米国式の ATS ダークプールとして扱うのではなく、「Japannext / Cboe Japan の明示板内の非表示流動性」に加えて「ToSTNeT ブロック / 終値交渉」、さらに「JSDA ルールのもとでの場外仲介クロス」である。

## Broker preferencing and conflicts

ブローカー優先選択とは、ブローカー（またはその親会社 / 関連会社）が経済的利益を有する venue を優遇する SOR 設計を指す用語である。日本で注視すべき表面には以下が含まれる:

- **株主関係。** Japannext の歴史的な SBI 系譜は、[[securities-firms/sbi-securities|SBI Securities]] の注文フローが Japannext を執行メニューの一部として検討する構造的理由を持つことを意味する。開示上の問題は、ルーティング優先選択がブローカーの最良執行ポリシーに文書化されているかどうかである。
- **リベート / 手数料の経済性。** venue のメイカー・リベートがブローカーの顧客リベート転嫁を上回る場合、ブローカーは差額を獲得する；これは米国の Reg NMS 時代の議論と同じ利益相反パターンだが、数値的規模は小さい。
- **証券貸借およびプライムブローカレッジの隣接。** ブローカーが [[securities/japan-prime-brokerage-and-institutional-financing|prime 証券仲介]] も運営する、または [[securities/japan-stock-lending-market-route|stock lending]] と相互作用する場合、間接的な経済性が見かけ上の執行ルートを複雑にしうる。資金調達側の隣接については [[securities/japan-margin-trading-and-securities-finance|margin trading and securities finance]] を参照。
- **内部化者への情報漏洩。** ブローカーが残余を PTS に出す前にフローを内部化する場合、問題は、顧客注文が内部化を通過する途中で逆選択されたかどうかである。

FSA の顧客本位の業務運営ページ（顧客本位の業務運営）は、ブローカーがこれらの利益相反を開示し管理するという原則ベースの期待を設定する；分析者は、特定の企業について結論を下す前に、ブローカーの公表ポリシーに加えて JSDA 自主規制資料を読むべきである。

## Execution-quality metrics

Japannext のルーティングが実際に顧客の結果を改善するかどうかを評価するための有用な指標:

| Metric | Definition | Caveat |
|---|---|---|
| TSE NBBO に対する価格改善 | 執行価格と注文到着時の TSE 最良買気配 / 売気配との差 | 呼値単位の離散性が改善の大きさを制限する；サブティック対応の比較が必要。|
| 実効スプレッド | 執行価格と注文到着時の仲値との絶対距離の 2 倍 | 低いほど良い；ミッドポイント執行が多い venue がこの指標で勝る。|
| 実現スプレッド（T+N）| 執行価格と T+5 分（または他の間隔）時点の仲値との距離の 2 倍 | 取引が逆選択されたかどうかを捉える。|
| 約定率 | 有効期限ウィンドウ内の約定数量 / 提出数量 | IOC / FOK の探り戦略にとって重要。|
| スピード | 注文受領から執行 / 取消までの時間 | レイテンシーは SOR スイープにとって重要。|
| 実効手数料 | 明示的なコミッションに加えて暗黙のスプレッドに加えてリベート転嫁 | 見出しの venue 手数料ではなく、顧客に向けた総コストが正しい指標。|

日本では、venue / ブローカーレベルで公表される集約された執行品質データは、米国の Rule 605 / 606 開示よりもはるかに標準化されていない。分析者は、単一の規制データセットを引き出すのではなく、ブローカーごとのポリシーページ、[[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]] からの JSDA 集約 PTS 統計、および任意のブローカー執行品質開示を組み立てなければならない。

## 決済 / clearing tie-in

Japannext PTS の現物株式取引は、その PTS 清算サービスのもとで [[securities/japan-securities-clearing-corp|JSCC]] を通じて清算され、T+2 （2024 短縮サイクル後；現行の標準決済サイクルを確認のこと）に [[securities/japan-securities-depository-center|JASDEC]] の振替決済を通じて決済される。関連する運用上の考慮事項:

- PTS 取引は「清算外」ではない —— TSE 取引と同じ CCP リスクシステムに着地する。
- JSCC における会員証拠金およびデフォルトファンドへの拠出は、両 venue をカバーする。
- Japannext の運用上の障害（マッチングエンジンの問題、市場データ障害）は、清算済み取引を巻き戻さない；それらは将来の注文ルーティングに影響する。
- 清算会員レベルでの venue 横断のネッティングは、SOR アクティブな企業にとって意味のある運用上の便益である。

## Regulation and self-regulation

| Layer | Role |
|---|---|
| FSA | PTS 範囲を有する第一種金融商品取引業を認可する；運用上のレジリエンス、行為、および顧客最善利益の実装を監督する。|
| JSDA | 証券会社（証券会社である PTS 運営者を含む）の自主規制機関；PTS 統計を公表する；上場および非上場証券の PTS 取引のルールを運用する。|
| JSCC | CCP リスク管理。|
| JASDEC | 振替決済インフラ。|
| Venue self-regulation | Japannext は、参加者の行為、注文入力、および市場の公正性管理について、自社のルール / 規制ページを公表する。|

境界に関する注記: Japannext のルールは Japannext の参加者に対して強制力がある；FSA の原則は規制対象エンティティに対して強制力がある；JSDA の自主規制ルールは JSDA 会員を拘束する。分析者が「Japannext は X を要求する」と書くとき、X が venue ルールなのか、JSDA ルールなのか、FSA の期待なのかを確認すること；それぞれが異なる執行および例外のメカニクスを持つ。

## History sketch

Japannext の系譜は、FIEA-2007 後の PTS フレームワーク自由化、PTS インフラの推進における SBI グループの役割、グローバル企業とのパートナーシップ（歴史的にゴールドマン・サックスが前身エンティティの持分を保有していたことを含む）、そして少数の現物株式 PTS の極を残した統合をたどる。Cboe は旧 Chi-X Japan 事業を買収し、Cboe Japan に改名した。他の PTS 運営者は参入と撤退を繰り返してきた。

今日のルーティング情勢に関連する主要な構造的イベント:

- **2007 FIEA 第一種 + PTS 認可フレームワーク** —— 現代の PTS の法的根拠を創出した。
- **SBI Japannext のローンチ** —— 日中 + 夜間セッションの明示 PTS を確立した。
- **Chi-X Japan / Cboe Japan の承継** —— 現物株式 PTS 競争の第二の極。
- **TSE arrowhead マッチングエンジンのアップグレード** —— プライマリー取引所と PTS venue の間のレイテンシー / 機能ギャップを狭めた。
- **PTS 情報ネットワークが 2025 年 7 月に終了** —— JSDA が公開 PTS 統計の集約を引き継いだ。
- **オンライン・ブローカーにおける継続的なリテール SOR 製品の展開** —— PTS ルーティングを顧客向け UI でリテール顧客に可視化した。

## Related

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

## Sources

- Japannext 株式会社、公式サイトおよび regulations / about ページ。
- JSDA、PTS 取引統計ページおよび PTS 株式統計の説明 PDF。
- FSA、金融商品取引業者向け総合監督指針；顧客本位の業務運営ページ。
- JPX、株式統計ページおよび清算 / 決済の概要。
