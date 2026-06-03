---
source: real-estate-finance/jpx-real-estate-index-derivatives
source_hash: 968c2653572b7028
lang: ja
status: machine
fidelity: ok
title: "JPX 東証REIT指数デリバティブ"
translated_at: 2026-06-03T00:53:08.257Z
---
# JPX 東証REIT指数デリバティブ

## 要約

**東証REIT指数**は、J-REIT市場のヘッドライン・ベンチマークであり、全上場J-REITを対象とする時価総額加重指数である。J-REITのパフォーマンス要因分析、ETFのトラッキング、セクター配分比較における標準的な参照指数である。この指数を取り巻く**投資可能なデリバティブ層**には、次のものが含まれる。

1. **東証REIT指数ETF**。最も流動性が高く広く使われる投資サーフェスであり、**NEXT FUNDS Tokyo Stock Exchange REIT Index ETF（1343）**、**Listed Index Fund J-REIT (Tokyo Stock Exchange REIT Index)（1345）**、**MAXIS J-REIT ETF（1597）**、その他複数のトラッカーETFを含む。
2. **東証REIT指数先物**。JPXはこれまで、J-REITセクターを対象とする指数先物を複数の時点で上場してきた。実際の現行商品ステータスと先物取引の厚みは、利用前にJPXの最新デリバティブ商品一覧で確認すべきである。
3. **オプション**。J-REITオプション市場の厚みは、TOPIX／Nikkei 225の主要株価指数よりかなり浅い。買い手側需要の狭さと、ディーラーのヘッジコストが背景にある。
4. **個別J-REITの信用取引と貸株**。指数レベルのデリバティブが薄い場合でも、個別投資口ポジションの間接的なヘッジ経路を提供する。

FinWikiにおいてこの項目が重要なのは、**J-REITに深い指数デリバティブ基盤が存在しない、または浅いこと自体が、この資産クラスの構造的特徴**だからである。株価指数デリバティブ（Nikkei 225 ／TOPIX先物・オプション）と比べると、J-REITのデリバティブ層は小さい。つまり、機関投資家がJ-REITエクイティ・エクスポージャーを指数レベルでヘッジすることには、運用上の制約がある。指数先物やオプションではなく、ETFが支配的なヘッジ兼エクスポージャー手段である。

## ウィキ上の位置づけ

この項目は、[[real-estate-finance/INDEX|real-estate-finance index]]配下のJ-REIT向け**デリバティブ／指数商品サーフェス**である。原市場は[[real-estate-finance/j-reit-market-overview|J-REIT market overview]]、個別銘柄の詳細は[[real-estate-finance/top-10-j-reit-overview-matrix|top 10 J-REIT matrix]]、セクター構成は[[real-estate-finance/logistics-j-reit-vs-office-j-reit-asset-class-comparison|logistics vs office comparison]]とあわせて読む。不動産エクイティの上場デベロッパー側は[[real-estate-finance/mitsui-fudosan-financing-model|Mitsui Fudosan]]と[[real-estate-finance/mitsubishi-estate-financing-model|Mitsubishi Estate]]を参照する。キャップレート／サイクルの側面は[[real-estate-finance/real-estate-cap-rate-compression-2026|cap-rate compression 2026]]。システム上の枠組みは、JPX商品フレームワークとして[[derivatives/INDEX|derivatives index]]と[[exchanges/INDEX|exchanges domain]]。

## 東証REIT指数: 原資産ベンチマーク

| 属性 | 詳細 |
|---|---|
| 公表者 | 東京証券取引所（JPX子会社） |
| 指数手法 | REITセグメント上場の全J-REITを対象とする、浮動株調整後の時価総額加重 |
| 構成銘柄 | 東証REITセグメント上場の全J-REIT（通常50超。新規IPOや合併により変動） |
| 基準値 | 1000 （基準日: 31, 2003年5月） |
| リバランス | JPX手法に基づく定期的な浮動株比率・ウェイト調整 |
| セクター分類 | 暗黙的なもの（正式にはセクター化されていない）。投資家はJPX開示を通じて物流／オフィス／商業／住宅／ホテル／総合型の構成を追う |
| 分配金の扱い | 価格リターン（トータルリターン版では分配金調整あり） |

この指数は、次の用途で使われる**標準的なJ-REITパフォーマンス・ベンチマーク**である。

- J-REIT連動ETF。
- パッシブ・ベンチマークに対する投資運用会社のパフォーマンス要因分析。
- スポンサーIR資料での相対パフォーマンス説明。
- J-REITを他のアジア／グローバルREIT指数（FTSE NAREIT、GPR、EPRA）と比較する外国人投資家の配分モデル。

JPXはトータルリターン版を含む指数値を日次で公表している。ARES（不動産証券化協会）も、補完的なセクター詳細とAUM分析を担うARES Investors Indicesを公表している。

## ETFサーフェス: 主要な投資可能ラッパー

ETFは、J-REIT領域で**最も厚い投資可能なデリバティブ隣接商品**である。

| ETF | コード | 提供会社 | 仕組み |
|---|---|---|---|
| **NEXT FUNDS Tokyo Stock Exchange REIT Index ETF** | TSE **1343** | Nomura Asset Management | 東証REIT指数に連動。AUM最大級のJ-REIT ETFの一つ |
| **Listed Index Fund J-REIT (Tokyo Stock Exchange REIT Index)** | TSE **1345** | Nikko Asset Management | 東証REIT指数に連動 |
| **MAXIS J-REIT ETF** | TSE **1597** | Mitsubishi UFJ Asset Management | 東証REIT指数に連動 |
| その他トラッカーETF | 複数 | 日本の各種資産運用会社 | 東証REIT指数または近似バリアントに連動 |

ETFが提供するもの:

- 個別銘柄選択なしに分散されたJ-REITエクスポージャーを得たい機関投資家・個人投資家向けの**指数レベルのロング・エクスポージャー**。
- 空売り投資家とヘッジャー向けの**貸株可能性**。標準的な信用／貸借ルールの下で、ETF投資口を東証で空売りできる。
- パッシブ指数配分向けの**NAV連動スプレッドでの日次流動性**。
- **間接的なヘッジサーフェス**。個別J-REITに集中ポジションを持つ投資家は、原ポジションを売却せずに指数ETFを空売りしてセクターエクスポージャーをヘッジできる。

**日本銀行**は、量的緩和の資産買入プログラムの一環として、株式ETFとJ-REIT ETFの大きなポジションを歴史的に保有してきた。J-REIT ETF買入プログラムは、BoJの出口サイクル（2024 以降）に入っても縮小形で続いた。政策正常化後も、**BoJによるJ-REIT ETF保有の残高**は、市場構造と浮動株動態に影響する重要な保有比率として残っている。BoJオーバーハングの文脈は[[real-estate-finance/j-reit-market-overview|J-REIT market overview]]を参照する。

## 指数先物の上場ステータス

JPXの**デリバティブ商品一覧**には、東証REIT指数を参照する指数先物が過去に含まれ、または検討されてきた。実際の現行ステータス（上場中の商品か、建玉、日次出来高、取引所取引の流動性）は、利用時点でJPXの商品一覧を直接確認すべきである。デリバティブ商品は、低出来高によって上場廃止されたり、仕様変更のうえ再投入されたりすることがある。

**構造的な論点**は、J-REIT市場が相応の規模を持つにもかかわらず、J-REIT指数先物の流動性が株価指数先物（Nikkei 225 ／TOPIX）より低い理由である。

| 制約 | J-REIT指数先物の流動性への影響 |
|---|---|
| **市場時価総額が小さい** | J-REIT市場全体の時価総額は、TOPIX上場株式時価総額より一桁小さい。想定元本ベースの売買回転率が低く、先物は薄くなりやすい。 |
| **買い持ち型の機関投資家基盤** | J-REITの機関投資家（生命保険会社、年金、地域銀行）はおおむね買い持ちの利回り投資家であり、短期ヘッジ需要が限定的である。 |
| **異なるボラティリティ特性** | J-REITのボラティリティは株価指数より低い傾向があり、ヘッジ需要圧力も低い。 |
| **ディーラーの在庫保有採算** | J-REIT指数先物のマーケットメーカーは、50超の個別J-REIT銘柄にまたがるベーシス・エクスポージャーをヘッジする必要がある。個別銘柄の流動性は不均一で、在庫保有コストが上がる。 |
| **ETFによる代替可能性** | 流動性のあるJ-REIT ETF（1343, 1345, 1597）が指数レベルのロング・ショート・エクスポージャーを提供し、指数先物を一部代替している。 |

総じて、**日本のJ-REIT指数デリバティブは、先物やオプションではなくETFが中心**である。先物、オプション、ETFが深い多商品流動性を伴って併存する株価指数複合体とは異なる。

## ETF空売り／先物空売りによる不動産エクイティ・エクスポージャーのヘッジ

不動産エクイティ投資家が指数レベルで**セクター・エクスポージャーをヘッジ**したい場合、運用上のツールキットには次が含まれる。

1. **J-REIT ETFの空売り（1343 / 1345 / 1597）**。貸株市場で投資口を借り、東証で空売りする。セクター・エクスポージャーのヘッジとして最も利用しやすい。
2. **個別J-REITの空売り**。特定セクターまたはスポンサー懸念を持つ投資家向け。個別銘柄の貸株可能性に左右される。
3. **東証REIT指数先物の空売り**（上場され流動性がある場合）。デリバティブ形式での直接的なセクター・ヘッジ。商品利用可能性に依存する。
4. **ペアトレード: 上場デベロッパー（8801 / 8802）ロング対J-REIT ETFショート**。デベロッパーと安定稼働資産のスプレッドを取りに行く。デベロッパー株がREITセグメントを上回るか下回るかの見方を反映する。
5. **セクター・ローテーションのペアトレード: 物流REITロング対オフィスREITショート**。[[real-estate-finance/logistics-j-reit-vs-office-j-reit-asset-class-comparison|logistics vs office]]のセクター見解を反映する。
6. **JGB先物／IRSによるキャップレート・ヘッジ**。金利市場を通じてREIT評価の金利感応度を間接的にヘッジする（[[derivatives/INDEX|derivatives index]]参照）。これは金利要素をヘッジするが、REIT評価の物件固有要素はヘッジしない。

各ツールには、コスト（借株料、先物ロールコスト、ベーシスリスク）とキャパシティ（貸株市場の厚み、先物建玉）の制約がある。**運用上の現実**として、J-REITのヘッジ精度は株価指数より低い。指数デリバティブのサーフェスが浅いためである。

## オプション市場の厚み

**東証REIT指数オプション市場**は、主要株価指数（TOPIX、Nikkei 225）よりかなり浅い。理由は次の通りである。

- **原市場の時価総額が小さい**ため、自然なオプション需要が限定される。
- **ボラティリティが低い**ため、株価指数代替と比べて、プロテクティブ・プットと利回り向上型カバードコールの双方の需要が小さい。
- **利回り志向の投資家基盤**。J-REIT投資口保有者は主にインカム利回り重視であり、ボラティリティ取引重視ではないため、この層からのオプション需要は限られる。
- **個別銘柄オプション**。個別J-REIT銘柄のオプション市場も一般に薄く、指数レベルのオプションは主要商品ではない。

このため、**オプションを使うヘッジ戦略（プロテクティブ・プット、カラー、カバードコール）**をJ-REITセグメントで大規模に実行することは運用上難しい。オプション型ヘッジを必要とする投資家は、しばしば近似手段を使う必要がある。

- **TOPIXまたはNikkei 225 指数オプション**をクロスアセットの代理として使う（不完全なヘッジ。株価指数ボラティリティはREITボラティリティの参照としてずれている）。
- **個別J-REITの信用／ショートポジション**を使い、オプションに似た合成エクスポージャーを作る。
- **金利オプション**（JGB先物オプション、スワップション）を使い、REIT評価の金利要素をヘッジする。

**深いJ-REITオプション市場が存在しないこと**自体が構造的な発見である。このセクターの投資家基盤は、深いマーケットメイクを支えるだけの両方向オプション需要を生まず、ディーラーも現行のビッド・アスク水準では在庫保有採算を魅力的と見ていない。

## ディーラーのヘッジ活動

J-REITデリバティブのマーケットメイクに関与するディーラー銀行・証券会社は、指数レベルのエクスポージャーを在庫保有する際、商品横断のヘッジを行う。

| ディーラー活動 | ヘッジ手段 |
|---|---|
| 顧客買いに伴うETFショートポジション | 原資産の個別J-REITバスケットを買い、指数エクスポージャーを中立化する |
| 顧客売りに伴うETFロングポジション | 個別J-REITバスケットをショートする |
| 指数先物在庫（上場されている場合） | 原資産ETF／個別銘柄バスケットでクロスヘッジする |
| オプションブック（上場されている場合） | 指数先物または原資産ETFでデルタヘッジし、日次でリバランスする |
| 金利感応的なJ-REITキャリー | IRS／JGB先物で金利要素をヘッジする |
| 通貨エクスポージャー（外国人投資家フロー） | FXフォワード／スワップでJPYエクスポージャーをヘッジする |

ディーラーのバランスシート能力は制約となる。在庫保有コスト（RWA、LCR／NSFR、個別銘柄の借株コスト）は、ストレス時のマーケットメイクの厚みを低下させる。J-REITデリバティブ・サーフェスが薄いことは、現行の商品出来高では**ディーラー・フランチャイズの採算が限界的**であることを一部反映している。

## 株価指数デリバティブとの比較

| 次元 | 東証REIT指数デリバティブ | TOPIX／Nikkei 225 デリバティブ |
|---|---|---|
| 原市場時価総額 | 小さい（J-REITセグメント） | はるかに大きい（東証株式市場全体） |
| ETFの厚み | 複数商品、数十億円規模以上のAUM | AUMは一桁大きい |
| 先物流動性 | 薄い（上場されている場合） | 非常に深い（TOPIX先物、Nikkei 225 先物、ミニおよびラージ契約） |
| オプション流動性 | 薄い／限定的 | 非常に深い（TOPIXオプション、Nikkei 225 オプション、週次契約） |
| 外国人投資家参加 | ETFと投資口では大きい。先物／オプションでは限定的 | すべてのデリバティブ商品で非常に高い |
| ディーラーのマーケットメイクの厚み | 限定的 | 複数ディーラーの深い競争 |
| BoJの存在（残高） | ETF保有が大きい | ETF保有が大きい |

この非対称性は構造的である。J-REITは広範な株式より小さく、利回り志向の強い資産クラスであるため、デリバティブ層も相応に薄くなる。

## 海外REITデリバティブ市場との比較

J-REITデリバティブ層の薄さは日本固有ではない。多くの地域REIT市場は、株価指数市場と比べると似た特徴を持つ。ただし比較は有益である。

| 市場 | REIT指数 | 指数先物 | 指数オプション | ETFの厚み |
|---|---|---|---|---|
| 日本 | 東証REIT指数 | 限定的／可変 | 限定的 | 中程度（複数商品） |
| 米国 | FTSE NAREIT All Equity REITs Index、MSCI US REIT Index | 直接の先物上場は限定的。主にETFベースのエクスポージャー | 指数レベルでは限定的。主要REIT（Prologis、Equinix、AMTなど）の個別銘柄では深い | 非常に深い（Vanguard Real Estate ETF VNQ、iShares US Real Estate ETF IYRなど） |
| 英国 | FTSE EPRA / NAREIT UK | 非常に限定的 | 限定的 | 控えめ |
| 汎欧州 | FTSE EPRA / NAREIT Europe | 限定的 | 限定的 | 控えめ（地域別・国別ETF） |
| アジア太平洋 | FTSE EPRA / NAREIT Asia | 限定的 | 限定的 | 控えめ（地域ETF） |

各市場に共通するパターンは、**REIT指数デリバティブは株価指数デリバティブより普遍的に薄く、ETFが主要な投資可能ラッパーになる**ということである。これは日本固有要因ではなく、REIT資産クラスに内在する特徴、すなわち市場時価総額の小ささ、利回り志向の投資家基盤、低いボラティリティを反映している。

## 投資家とリスク管理者への含意

J-REITデリバティブの構造的な現実は、市場参加者にいくつかの実務的含意をもたらす。

1. **指数レベルのパッシブ・エクスポージャーはETFで十分に提供される**。機関投資家・個人投資家は、上場ETF群を通じてJ-REITセグメント全体へ容易に配分できる。
2. **セクター傾斜のエクスポージャーには、個別銘柄選択またはセクター特化型ETFが必要である**。標準的な東証REIT指数ETFは全セグメントの時価総額加重であり、物流オーバーウェイトやオフィスオーバーウェイトを実現するには、個別銘柄配分または専門ビークルの選択が必要になる。
3. **指数レベルの戦術的ショートヘッジはETF空売りで運用可能である**。ただし借株料と貸株可能性に左右される。
4. **戦術的なオプション型ヘッジには運用上の制約がある**。深いJ-REIT指数オプションがないため、オプションのペイオフを望む投資家は、クロスアセット代理または利用可能な個別銘柄オプションを使う必要がある。
5. **金利要素のヘッジは金利市場で十分に対応できる**。JGB先物、IRS、OISポジションは、J-REIT固有の深いデリバティブ基盤を必要とせずに、REIT評価の金利感応度要素をヘッジする。
6. **セクター・ローテーションのペアトレードには慎重な個別銘柄選択が必要である**。物流REITとオフィスREITのロング・ショート・ペアトレード（[[real-estate-finance/logistics-j-reit-vs-office-j-reit-asset-class-comparison|comparison]]参照）は運用可能だが、個別銘柄の借株能力が必要である。

## ARES Investor Indices: 補完的な分析サーフェス

JPXが公表する東証REIT指数と並行して、**ARES（不動産証券化協会）はInvestor Indices群を公表**しており、より深い分析上の内訳を提供している。

- トータルリターン指数のバリアント。
- セクター要因分析（オフィス、商業、住宅、物流、ホテル、ヘルスケア、総合型）。
- 物件タイプ別・地理的地域別の要因分析。
- J-REITセグメントの規模と構成に関するAUMベース統計。

ARES指数は、機関投資家向け報告における**J-REITパフォーマンス要因分析の標準的な参照**として機能する。ヘッドラインの時価総額加重指数では直接示されないセクター詳細とAUM文脈を提供することで、JPX公表の東証REIT指数を補完している。

この二重のデータ構造（JPXの時価総額加重ヘッドライン指数 + ARESの要因分析指数）は、国内機関投資家にとっても、セグメントを評価する外国人アナリストにとっても、J-REITパフォーマンス分析の標準的なツールキットである。

## 指数リバランスの動態

東証REIT指数は、新規J-REITの上場、既存REITの合併・上場廃止、浮動株ウェイト調整に伴って定期的にリバランスされる。リバランスの動態は次の通りである。

- **新規J-REIT上場**。新規上場J-REITは標準的な東証組入手法に従って指数に入る。新規構成銘柄には短期的なETFリバランスフローと価格圧力が生じ得る。
- **J-REIT合併**。セクター統合により構成銘柄数が減少する。存続主体のウェイトが増え、パッシブ・トラッカーのリバランスに影響し得る。
- **浮動株調整**。スポンサーや戦略保有者の大口保有は、浮動株ウェイト計算から除外される。スポンサー保有の変化は指数ウェイトを動かし得る。
- **セクター構成のドリフト**。近年、物流J-REITがオフィスJ-REITより速く成長したため、東証REIT指数の**暗黙のセクター構成**は物流寄りへシフトしてきた。パッシブETF保有者はこのドリフトを機械的に引き受ける。

暗黙のセクター構成シフトは、それ自体が追跡に値する市場シグナルである。今日のパッシブな東証REIT指数配分は、10年前の同じ配分とは異なるセクターミックスを持つ。これは、その期間に物流セグメントREITがオフィスセグメントREITを累積的にアウトパフォームしたことを反映している。

## 関連項目

- [[real-estate-finance/INDEX|real-estate-finance INDEX]]
- [[real-estate-finance/j-reit-market-overview|J-REIT market overview]]
- [[real-estate-finance/top-10-j-reit-overview-matrix|top 10 J-REIT matrix]]
- [[real-estate-finance/j-reit-sponsor-structure-conflict|J-REIT sponsor structure and conflict]]
- [[real-estate-finance/j-reit-foreign-investor-ownership|J-REIT foreign-investor ownership]]
- [[real-estate-finance/logistics-j-reit-vs-office-j-reit-asset-class-comparison|logistics vs office J-REIT comparison]]
- [[real-estate-finance/mitsui-fudosan-financing-model|Mitsui Fudosan financing model]]
- [[real-estate-finance/mitsubishi-estate-financing-model|Mitsubishi Estate financing model]]
- [[real-estate-finance/aeon-mall-financing-and-securitization|AEON Mall financing and securitization]]
- [[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS/RMBS securitization]]
- [[real-estate-finance/bank-commercial-real-estate-lending-japan|bank CRE lending Japan]]
- [[real-estate-finance/real-estate-cap-rate-compression-2026|cap-rate compression 2026]]
- [[derivatives/INDEX|derivatives INDEX]]
- [[derivatives/yen-basis-swap-market|JPY-USD basis swap]]
- [[exchanges/INDEX|exchanges INDEX]]
- [[securities/INDEX|securities INDEX]]
- [[business/INDEX|business INDEX]]
- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- JPX, TSE REIT Index methodology and constituent landing — https://www.jpx.co.jp/english/markets/indices/reit/
- JPX, Derivatives market product roster — https://www.jpx.co.jp/english/markets/derivatives/
- JPX, REIT market segment landing — https://www.jpx.co.jp/english/markets/products/reit/
- ARES, Investor Indices and J-REIT market analytics — https://www.ares.or.jp/en/
- FSA, Investment Trust Act and Financial Instruments and Exchange Act framework — https://www.fsa.go.jp/en/
- JREI (Japan Real Estate Institute) appraisal methodology references — public landing
