---
source: derivatives/otc-clearing-jp-trade-repository
source_hash: 854b860d1fb2c790
lang: ja
status: machine
fidelity: ok
title: "店頭デリバティブのクリアリングと取引情報蓄積機関 — 日本"
translated_at: 2026-07-29T19:10:00.000Z
---

# 店頭デリバティブのクリアリングと取引情報蓄積機関 — 日本

## TL;DR

日本の**店頭デリバティブのクリアリング・報告制度**は、三つの柱の上に成り立っている。

1. **[[securities/japan-securities-clearing-corp|JSCC]] における中央清算**。現行の適格性基準を満たす商品を対象とする。JSCC の IRS 一覧には OIS、D-TIBOR 商品、ベーシスの各種商品が含まれ、CDS 一覧には所定の指数商品とシングルネーム商品が含まれる。適格性だけでは、特定取引に法的な清算義務があることを証明しない。

2. **取引情報蓄積機関への報告**。金融庁のガイドラインは、報告主体、報告対象取引・項目、期限、提出経路を定める。「すべての取引」と要約せず、適用範囲の判定と免除を適用する必要がある。

3. **クロスボーダー承認に関する論点**。EU または米国における承認、同等性、登録、代替的コンプライアンスの結論は、サービス、カテゴリー、事業体、日付ごとに異なる。本ページは、現在の EC、ESMA、CFTC の該当文書を特定しない限り、包括的な現行認定を主張しない。

このエントリは、JSCC の商品範囲と金融庁の報告枠組みを扱う。クロスボーダー承認は、該当する外国規制当局の現行一次文書で確認しなければならない。

## Wiki ルート

このエントリは店頭インフラ・クラスタ内の [[derivatives/INDEX|derivatives index]] の下に位置する。中央清算機関そのものについては [[securities/japan-securities-clearing-corp|JSCC]]、その基礎となる円 IRS／OIS の市場構造については [[derivatives/japan-interest-rate-derivatives-overview|Japan interest rate derivatives overview]]、清算の手前に位置する執行venue層については [[derivatives/swap-execution-facility-japan|Japan SEF-equivalent / electronic execution]]、ディーラー側の会員経済性については [[derivatives/dealer-bank-derivatives-revenue-mix|dealer bank derivatives revenue mix]]、より広範な市場インフラの文脈については [[securities/japan-market-infrastructure-map|Japan market infrastructure map]]、そして上場デリバティブの清算との比較については [[derivatives/jgb-futures-curve|JGB futures curve]] と併せて読むこと。

## なぜ中央清算と取引情報蓄積機関への報告が重要か

2008 年の金融危機後の規制改革は、G20 ピッツバーグ・コミットメントの下で店頭デリバティブ規制の四つの柱を生み出した。

1. 相対カウンターパーティ・リスクを削減するための、CCP を介した標準化された店頭デリバティブの**清算集中義務**。
2. システミックリスクのモニタリングのための、規制対象の取引情報蓄積機関への**取引報告義務**。
3. 相対店頭取引を清算済み商品のリスク・プロファイルに整合させるための、**非清算デリバティブの証拠金要件**（当初証拠金および変動証拠金）。
4. 指定された標準化商品についての、プラットフォーム（米国 SEF、EU MTF／OTF、日本 ETP）への**取引venueの移行**。

日本はこのフレームワークを金商法の改正を通じて実施し、金融庁を実施当局とした。この枠組みは米国ドッド・フランク・タイトル VII および EU EMIR／MiFID II と**機能的に同等**であるが、米国・EU の規則を直接域外適用するのではなく、金商法の監督下にある**日本に所在するインフラ**（JSCC、DTCC ジャパン）を用いる。

これは日本の店頭デリバティブ市場の構造的な背骨である。金商法の規制を受ける二者間で 2026 年に執行されたディーラー銀行の円 IRS 取引は、通常、次のようになる。(a) 電子的に交渉されるか音声仲介される、(b) 対象範囲にある場合は清算のため JSCC に提出される、(c) 報告期限内に DTCC ジャパンに報告される、(d) JSCC の当初証拠金・変動証拠金のプロセスを通じて証拠金が差し入れられる、(e) ISDA マスター契約の基準に基づく金融庁監督下のディーラー契約書によって支えられる。

## JSCC の清算集中義務の範囲

JSCC は日本の店頭デリバティブ向けに指定された清算サービスを運営している。現在の公開情報に基づく範囲は次を含む。

| JSCC のサービス | 現行の適格商品ページに掲載された商品 | 範囲上の注意 |
|---|---|---|
| **IRS** | 所定の基準に基づく OIS、D-TIBOR IRS、D-TIBOR テナー・スワップ、OIS ベーシス・スワップ、OIS 対 D-TIBOR ベーシス・スワップ | 商品適格性、取引相手の範囲、法的義務は別々に確認する必要がある |
| **CDS** | 現行の iTraxx Japan シリーズおよび JSCC が掲載するシングルネーム参照体 | 取引日時点の現行一覧とシリーズを確認する必要がある |
| **店頭国債** | 売買、現金担保付貸借、通常レポ、銘柄後決めレポ | IRS の義務ではなく、国債店頭清算サービスの規則に従う |
| **上場デリバティブ** | JSCC が列挙する JPX 上場先物・オプション | 取引所取引の清算は上場商品向けの枠組みに従う |

Sources: ^[source:https://www.jpx.co.jp/jscc/en/cash/irs/product.html] ^[source:https://www.jpx.co.jp/jscc/en/cash/cds/product.html] ^[source:https://www.jpx.co.jp/jscc/en/cash/jgbcc/product.html] ^[source:https://www.jpx.co.jp/jscc/en/cash/futures/product.html]

**清算義務の範囲は金商法で定義される**。すべての日本のカウンターパーティ間のすべての店頭デリバティブ取引が清算されなければならないわけではない。範囲は次によって決定される。

- **カウンターパーティ区分** — 主要なディーラー銀行（[[megabanks/mufg-bank|MUFG]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]]、[[megabanks/mizuho-bank|Mizuho]] など）、大手保険会社、大手資産運用会社、その他のシステム上重要な主体が対象となる。より小規模なエンドユーザーは対象外となりうる。
- **商品の標準化** — 特定の契約条件（通貨、変動金利指標、満期、日数計算、支払頻度）が、JSCC で清算可能な契約仕様に合致しなければならない。
- **想定元本の閾値** — カウンターパーティ単位の想定元本合計の閾値が、どの主体が清算集中義務の対象となるかを決定する。

相対（非清算）店頭デリバティブは、依然として市場の有意な部分を占める — オーダーメイドの仕組み、非標準の満期、非標準の通貨、清算対象外の単一銘柄 CDS、および清算閾値を下回るカウンターパーティとの取引について。これらの相対取引は、金商法の下で**非清算デリバティブの証拠金要件（UMR — 非清算証拠金規制）**の対象となり、国際的な BCBS／IOSCO フレームワークを反映している。

## JSCC の清算会員構造

JSCC の清算会員は段階的な区分に分かれる。

- **直接清算会員（DCM）** — 通常、自社の JSCC 会員資格を持つ主要なディーラー銀行および証券会社。
- **間接／顧客清算** — JSCC 会員資格を直接維持しないカウンターパーティは、顧客清算サービスを提供する DCM を通じて清算する。
- **スポンサー／エージェンシー・モデル** — 特定の商品ラインに向けた上記のバリエーション。

DCM のリストは、メガバンク系の証券会社および東京で営業する主要な外資系ディーラー銀行が占めている。DCM になるか顧客清算を利用するかを左右するフランチャイズ経済性については [[derivatives/dealer-bank-derivatives-revenue-mix|dealer bank derivatives revenue mix]] を参照のこと。

### デフォルト管理ウォーターフォール

JSCC は、他の主要なグローバル CCP（LCH SwapClear、CME、Eurex Clearing）と構造的に同等の**デフォルト管理ウォーターフォール**を運営している。

1. **デフォルト会員の当初証拠金** — デフォルトした会員の当初証拠金が最初の損失を吸収する。
2. **デフォルト会員のデフォルト・ファンド拠出金** — 二番目の損失。
3. **JSCC 自身の資本トランシェ**（「スキン・イン・ザ・ゲーム」） — 三番目の損失。
4. **非デフォルト会員のデフォルト・ファンド拠出金** — 相互化された層。
5. **再建ツール**（賦課請求権、部分的なティアアップなど） — 破綻処理の前の最終的なツール。

清算済みポートフォリオのデフォルト管理オークションは、（会員デフォルト事象の際には必要に応じて）定期的に実施され、存続する会員がデフォルト会員のポジションを引き受けることを可能にする。デフォルト管理フレームワークは、金商法の CCP 監督の下で金融庁により審査され、CPMI-IOSCO PFMI 原則に整合している。

### 報告義務

金商法の下で、金商法規制対象の主体による店頭デリバティブ取引は、**金融庁に登録された取引情報蓄積機関**に報告されなければならない。日本の主要な TR は **DTCC データ・レポジトリ・ジャパン株式会社**（DTCC の規制対象子会社）であり、指定された TR として金融庁の登録の下で運営されている。

報告対象のデータ項目は、最低限、次を対象とする。

| 項目区分 | 例 |
|---|---|
| **カウンターパーティの識別** | 法人識別子（LEI）、カウンターパーティの役割（買い手／売り手）、カウンターパーティの所在地。 |
| **取引の経済性** | 想定元本、通貨、発効日、満期、固定／変動レグの仕様、参照金利（たとえば TONA、関連する場合は円 LIBOR 後継カーブ）。 |
| **価格／評価** | 時価評価額、該当する場合は担保情報。 |
| **清算状況** | 清算済み（CCP 識別子付き — たとえば JSCC）または相対。 |
| **執行venue** | venue 上（たとえば ETP、電子プラットフォーム）または venue 外（音声／相対）。 |
| **ライフサイクル・イベント** | 新規取引、変更、ノベーション、解約、コンプレッション。 |

報告期限、評価、担保更新の義務は、適用される金融庁ガイドラインと報告経路に従う。一般的な T+1／T+2 ルールで現行の適用範囲表を置き換えてはならない。

### なぜ TR 報告が重要か

TR データは、次のものの**構造的な入力**である。

- **金融庁のシステミックリスク・モニタリング** — 想定元本合計、グロス時価総額、エクスポージャーの集中度、カウンターパーティのネットワーク分析。
- **日本銀行の金融安定サーベイランス** — 日本銀行の金融システムレポートおよびマクロプルーデンス分析への入力。
- **クロスボーダー連携** — 適用法令、協定、データアクセス統制に従う。
- **公的統計** — 日銀、BIS、金融庁、JSCC は、それぞれ異なる対象母集団と方法論に基づく集計データを公表する。

TR は**公的な価格フィードではない**。取引レベルのデータは規制当局限りであり、合計値／匿名化された統計が公衆に流れる。

### クロスボーダー承認の範囲

EU の同等性、ESMA による CCP 承認、CFTC の登録、比較可能性、代替的コンプライアンスは、それぞれ異なる法的手段である。対象事業体、サービス、商品、カテゴリー、条件、発効日は相互に独立して変わり得る。本項目は、現在の EC、ESMA、CFTC の一次文書を引用していないため、「日本」、JSCC 全体、すべての ETP、日本の取引報告が、あらゆる目的について現在承認されているとは包括的に主張しない。

## 紛争解決

日本における店頭デリバティブの紛争は、通常、次によって規律される。

- **[[derivatives/INDEX|ISDA Master Agreement]]** — 紛争解決条項（計算代理人の不一致、評価の紛争、クローズアウト・ネッティングのメカニクス）を含む、標準的な相対契約書のフレームワーク。
- ほとんどのクロスボーダー・ディーラー取引における **英国法またはニューヨーク法**の準拠法条項。
- 純粋に国内のカウンターパーティ間取引における **日本法**。
- 清算済み取引における **JSCC のルールブック** — デフォルト管理手続、証拠金の紛争、会員に対する懲戒プロセスを含む。
- ライセンスを受けたカウンターパーティが関与する規制当局仲介の紛争における **金融庁の監督チャネル**。
- 係争中の訴訟における **東京地方裁判所**（もっとも、ほとんどの店頭紛争は、裁判所に至る前に交渉による和解または仲裁によって解決される）。

構造的なパターンは次のとおりである。**相対の店頭紛争は ISDA を介して仲介される**。**清算済み取引の紛争は JSCC のルールを介して仲介される**。**規制コンプライアンスの紛争は金融庁の監督下に置かれる**。

## 公的統計

日本の店頭デリバティブの想定元本合計およびグロス時価総額は、次により公表される。

- **日本銀行** — 想定元本、グロス時価総額、およびカウンターパーティ／通貨別の内訳を伴う、定期的な店頭デリバティブ統計。
- **BIS 半期店頭デリバティブ統計** — 報告法域としての日本がグローバルな合計値の公表に貢献する。
- **JSCC 月次清算統計** — IRS、CDS、および上場デリバティブの清算サービスについて公表される清算済み想定元本および建玉。
- **金融庁の公表物** — 店頭の想定元本合計および清算範囲に言及する監督報告。

想定元本対グロス時価総額を引用する際は、両者を明確に区別すること — 想定元本残高は、商品クラスおよびネッティングの取扱いに応じて、通常はグロス時価総額の約 10〜30倍である。

## 関連

- [[derivatives/INDEX]]
- [[derivatives/japan-interest-rate-derivatives-overview]]
- [[derivatives/swap-execution-facility-japan]]
- [[derivatives/dealer-bank-derivatives-revenue-mix]]
- [[derivatives/nikkei-vix-jpx-vi-equivalent]]
- [[derivatives/equity-volatility-hedging-corporates-japan]]
- [[derivatives/jgb-futures-curve]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-depository-center]]
- [[securities/osaka-exchange]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-prime-brokerage-and-institutional-financing-matrix]]
- [[financial-regulators/japan-exchange-group]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/mizuho-securities]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[INDEX|FinWiki index]]

## 出典

- JSCC、会社、IRS 清算、CDS 清算、上場デリバティブ清算範囲に関する英語ページ。
- 金融庁、金商法フレームワークのページ — 店頭デリバティブ、清算義務の範囲、取引情報蓄積機関の登録。
- DTCC ジャパン、規制対象の取引情報蓄積機関サービスの概要。
- ISDA、標準契約書、清算集中義務の範囲に関する公表物、SwapsInfo 集計データ。
- 日本銀行、決済／市場 — 店頭デリバティブ統計の公表物。
- JPX、デリバティブ市場資料および清算の取決め。
