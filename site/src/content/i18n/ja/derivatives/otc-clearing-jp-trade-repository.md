---
source: derivatives/otc-clearing-jp-trade-repository
source_hash: c13c35f3c990a0c5
lang: ja
status: machine
fidelity: ok
title: "OTC デリバティブの清算と取引情報蓄積機関 — 日本"
translated_at: 2026-06-02T11:47:37.313Z
---

# OTC デリバティブの清算と取引情報蓄積機関 — 日本

## 要約

日本の **OTC デリバティブ清算・報告制度**は3つの柱に立脚する:

1. **[[securities/japan-securities-clearing-corp|JSCC]] での中央清算** — 義務的に清算可能な OTC 商品向け — 円金利スワップ(JPY IRS)、TONA を参照するオーバーナイトインデックススワップ(OIS)、および JSCC の CDS 清算サービス(指定されたインデックス CDS 向け)。義務的清算は、2009 年の G20 ピッツバーグのコミットメントを反映し、対象範囲のカウンターパーティと商品クラスについて金融商品取引法(FIEA)のもとで強制される;

2. **取引情報蓄積機関への報告** — FIEA 規制対象エンティティによって取引されるすべての OTC デリバティブは取引情報蓄積機関(TR)に報告されなければならない。日本の主要な TR は **DTCC Data Repository Japan**(規制対象の DTCC 子会社)であり、JFSA が受領規制当局である。報告は相対と清算済みの両方の取引を捕捉し、システミックリスクのモニタリングをサポートする;

3. **クロスボーダーの同等性** — 日本は JSCC 清算サービスについて欧州委員会から **EMIR 同等性**を確保し(EU のカウンターパーティが EMIR Title-IV の優遇取り扱いを失うことなく JSCC を通じて清算できるようにする)、清算と報告の承認について米国 CFTC から **Title VII / Dodd-Frank の代替コンプライアンス／同等性**の要素を確保している(特定のカテゴリごとの判定を条件とする)。

このエントリは、JSCC の清算範囲とメンバー構造、FIEA のもとの取引情報蓄積機関への報告義務、EMIR / CFTC の同等性フレームワーク、紛争解決のアーキテクチャ、および広範な同等性承認にもかかわらず日本の OTC 清算範囲が **EU EMIR Annex IV より狭い**ままである構造的理由をカバーする。

## ウィキ上の位置づけ

このエントリは OTC インフラクラスターの [[derivatives/INDEX|derivatives index]] の下に位置する。中央清算機関そのものについては [[securities/japan-securities-clearing-corp|JSCC]]、基盤となる円 IRS / OIS の市場構造については [[derivatives/japan-interest-rate-derivatives-overview|Japan interest rate derivatives overview]]、清算の前に位置する執行取引所の層については [[derivatives/swap-execution-facility-japan|Japan SEF-equivalent / electronic execution]]、ディーラー側のメンバー経済性については [[derivatives/dealer-bank-derivatives-revenue-mix|dealer bank derivatives revenue mix]]、より広範な配管のコンテキストについては [[securities/japan-market-infrastructure-map|Japan market infrastructure map]]、上場デリバティブの清算比較については [[derivatives/jgb-futures-curve|JGB futures curve]] とともに読むこと。

## なぜ中央清算と取引情報蓄積機関への報告が重要か

2008 年の金融危機後の規制改革は、G20 ピッツバーグのコミットメントのもとで OTC デリバティブ規制の4つの柱を生んだ:

1. 相対のカウンターパーティリスクを減らすための CCP を介した標準化された OTC デリバティブの**義務的中央清算**;
2. システミックリスクのモニタリングのための規制された取引情報蓄積機関への**義務的取引報告**;
3. 相対 OTC を清算済み商品のリスクプロファイルと整合させるための**非清算デリバティブの証拠金要件**(当初証拠金と変動証拠金);
4. 指定された標準化商品向けのプラットフォーム(米国 SEF、EU MTF / OTF、日本 ETP)への**取引取引所の移行**。

日本はこのフレームワークを FIEA 改正を通じて実施し、JFSA が実施規制当局である。アーキテクチャは米国 Dodd-Frank Title VII および EU EMIR / MiFID II と**機能的に同等**だが、米国／EU ルールの直接の域外適用ではなく、FIEA 監督のもとの**日本に所在するインフラ**(JSCC, DTCC Japan)を使う。

これは日本の OTC デリバティブ市場の構造的なバックボーンである。2026 年に2つの FIEA 規制対象エンティティ間で執行されたディーラーバンクの円 IRS 取引は、典型的に以下のようになる:(a)電子的に交渉されるか音声でブローカーされる;(b)対象範囲の場合に清算のため JSCC に提出される;(c)報告ウィンドウ内に DTCC Japan に報告される;(d)JSCC の当初および変動証拠金プロセスを介して証拠金が積まれる;(e)ISDA マスター契約基準のもとで JFSA 監督のディーラードキュメントによってサポートされる。

## JSCC の義務的清算範囲

JSCC は日本の OTC デリバティブ向けに指定された清算サービスを運営する。現在の公的情報源の範囲には以下が含まれる:

| 清算サービス | 基盤となる商品 | 義務的清算範囲 |
|---|---|---|
| **JSCC IRS 清算** | 円金利スワップ;[[derivatives/japan-interest-rate-derivatives-overview|TONA]] を参照する円 OIS;選定されたベーシススワップのバリアント | 標準化された契約条件について、指定された想定元本しきい値を超える FIEA 規制対象カウンターパーティに義務的。 |
| **JSCC CDS 清算** | iTraxx Japan インデックス CDS(指定シリーズ);選定された個別銘柄の参照エンティティ(JSCC の商品追加とともに範囲が進化) | FIEA 規制対象ディーラーカウンターパーティ向けの対象範囲のインデックス CDS 清算。 |
| **JSCC JGB OTC 清算(該当する場合)** | JGB 現物取引と JGB レポ(JGB OTC 清算サービスは証拠金とネッティングを伴い JGB 現物とレポをカバー) | 範囲が拡大するにつれメンバー主導でカウンターパーティごと。 |
| **JSCC 上場デリバティブ清算** | JPX 上場の日経225 先物／オプション、TOPIX 先物、JGB 先物、TONA 先物、[[securities/osaka-exchange|OSE]] の個別銘柄上場オプション | すべての取引所執行取引に義務的(上場デリバティブは設計上清算される)。 |

**清算義務の範囲は FIEA で定義される**:すべての日本のカウンターパーティ間のすべての OTC デリバティブ取引が清算しなければならないわけではない。範囲は以下によって決定される:

- **カウンターパーティのカテゴリ** — 主要なディーラーバンク([[megabanks/mufg-bank|MUFG]], [[megabanks/sumitomo-mitsui-banking-corp|SMBC]], [[megabanks/mizuho-bank|Mizuho]] など)、大手保険会社、大手アセットマネージャー、その他のシステム上重要なエンティティが対象範囲;より小規模なエンドユーザーは対象外でありうる;
- **商品の標準化** — 特定の契約条件(通貨、変動金利インデックス、満期、日数計算、支払い頻度)が JSCC 清算可能な契約仕様と一致しなければならない;
- **想定元本のしきい値** — カウンターパーティ合計の想定元本しきい値が、どのエンティティが義務的清算の対象となるかを決定する。

相対(非清算)OTC デリバティブは市場の意味あるシェアであり続ける — オーダーメイドの構造、非標準の満期、非標準の通貨、清算対象ユニバース外の個別銘柄 CDS、清算しきい値を下回るカウンターパーティとの取引向け。これらの相対取引は、国際的な BCBS / IOSCO フレームワークを反映し、FIEA のもとの**非清算デリバティブの証拠金要件(UMR — 非清算証拠金規制)**の対象となる。

## JSCC の清算メンバー構造

JSCC の清算メンバーは階層化されたカテゴリに分かれる:

- **直接清算メンバー(DCM)** — 典型的には独自の JSCC メンバーシップを持つ主要なディーラーバンクと証券会社;
- **間接／クライアント清算** — 直接の JSCC メンバーシップを維持しないカウンターパーティは、クライアント清算サービスを提供する DCM を通じて清算する;
- **スポンサリング／エージェンシーモデル** — 特定の商品ライン向けの上記のバリエーション。

DCM リストはメガバンク系列の証券部門と東京で運営する主要な外国ディーラーバンクに支配される。誰が DCM になることを選ぶか、対してクライアント清算を使うかを駆動するフランチャイズ経済性については [[derivatives/dealer-bank-derivatives-revenue-mix|dealer bank derivatives revenue mix]] を参照。

### デフォルト管理ウォーターフォール

JSCC は、他の主要なグローバル CCP(LCH SwapClear, CME, Eurex Clearing)と構造的に比較可能な**デフォルト管理ウォーターフォール**を運営する:

1. **デフォルトメンバーの当初証拠金** — デフォルトメンバーの IM が吸収する最初の損失;
2. **デフォルトメンバーのデフォルトファンド拠出** — 2番目の損失;
3. **JSCC 自己資本トランシェ**(「スキン・イン・ザ・ゲーム」) — 3番目の損失;
4. **非デフォルトメンバーのデフォルトファンド拠出** — 相互化された層;
5. **リカバリーツール**(アセスメント権、部分ティアアップなど) — 破綻処理前の最終ツール。

清算済みポートフォリオのデフォルト管理オークションは、生き残ったメンバーがデフォルトメンバーのポジションを引き受けられるよう、定期的に(およびメンバーデフォルトイベント時に必要に応じて)実行される。デフォルト管理フレームワークは FIEA の CCP 監督のもとで JFSA によってレビューされ、CPMI-IOSCO PFMI 原則と整合している。

### 報告義務

FIEA のもとで、FIEA 規制対象エンティティによる OTC デリバティブ取引は、**JFSA に登録された取引情報蓄積機関**に報告されなければならない。日本の主要な TR は **DTCC Data Repository Japan KK**(DTCC の規制対象子会社)であり、指定された TR として JFSA 登録のもとで運営される。

報告可能なデータフィールドは、最低限以下をカバーする:

| フィールドカテゴリ | 例 |
|---|---|
| **カウンターパーティの識別** | 法人識別子(LEI)、カウンターパーティの役割(買い手／売り手)、カウンターパーティの所在地。 |
| **取引の経済性** | 想定元本、通貨、効力発生日、満期、固定／変動レグの仕様、参照レート(例:TONA、該当する場合の JPY LIBOR 後継カーブ)。 |
| **価格設定／評価** | 時価評価額、該当する場合の担保情報。 |
| **清算ステータス** | 清算済み(CCP 識別子付き — 例:JSCC)または相対。 |
| **執行取引所** | 取引所内(例:ETP、電子プラットフォーム)または取引所外(音声／相対)。 |
| **ライフサイクルイベント** | 新規取引、変更、更改、終了、圧縮。 |

報告タイミングは多くの場合 **T+1 または T+2** であり、オープンポジションについては日次の担保および評価の更新を伴う。

### なぜ TR 報告が重要か

TR データは以下の**構造的なインプット**である:

- **JFSA のシステミックリスクモニタリング** — 集計想定元本、グロス市場価値、エクスポージャー集中、カウンターパーティネットワーク分析;
- **BOJ の金融安定サーベイランス** — BOJ 金融システムレポートとマクロプルーデンス分析へのインプット;
- **クロスボーダーの規制当局調整** — JFSA は EMIR / Title-VII 同等性フレームワークをサポートする MOU のもとで、米国 CFTC、EU ESMA、その他の規制当局と集計／ポジションデータを共有する;
- **公開統計** — 日本の OTC デリバティブの商品クラス別の集計想定元本残高は、TR データを基礎的なインプットとして BOJ と BIS によって公表される。

TR は**公開の価格フィードではない**。取引レベルのデータは規制当局のみであり、集計／匿名化された統計が公衆に流れる。

### EMIR 同等性(EU)

欧州委員会は、特定のカテゴリで日本の CCP と取引取引所の制度をカバーする **EMIR 同等性判定**を付与している:

- **JSCC 同等性** — ESMA による第三国 CCP としての JSCC の承認。EU のカウンターパーティが、EU ルールが承認された CCP での清算に付与する資本効率的な取り扱いを失うことなく、JSCC を通じて指定された商品を清算できるようにする;
- **取引取引所の同等性(該当する場合)** — これらの取引所を使う欧州のカウンターパーティ向けの MiFID II のもとでの日本の電子取引取引所(JPX 上場デリバティブ取引所や特定の ETP など)の承認;
- **取引報告の同等性** — 特定のカテゴリでの日本の TR 報告の承認。

これらの判定は**商品／取引所固有**であり、定期的にレビューされる。同等性に依拠する EU のカウンターパーティは現在の範囲を確認すべきである。

### CFTC の代替コンプライアンス／Title VII 承認(米国)

米国商品先物取引委員会(CFTC)は、Dodd-Frank Title VII フレームワークのもとで特定のカテゴリで日本をカバーする代替コンプライアンス／比較可能性判定を発行している:

- **CCP 承認** — 米国のカウンターパーティが日本で清算する選定されたサービス向けの CFTC 登録デリバティブ清算機関(DCO)としての JSCC;
- **取引取引所の承認** — 定められたカテゴリで米国 Title-VII の目的でコンプライアントとして承認された特定の日本の執行取引所;
- **報告の比較可能性** — 定められたケースで指定された Title-VII 報告義務について比較可能として承認された日本の TR 報告。

EMIR と同様、これらの判定は**商品／取引所固有**であり、CFTC によって定期的にレビューされる。

### 構造的意義

EMIR と Title-VII の同等性は日本にとって**簡単でない規制上の達成**である。同等性なしには、日本のディーラーバンクと取引する EU と米国のカウンターパーティは以下に直面する:

- 資本効率的なネッティングと清算の取り扱いの喪失;
- 日本の TR と EU / 米国の TR の両方への重複した報告義務;
- 日本の執行プラットフォームへのアクセスを制限する取引取引所の制約。

同等性は、**完全に統合された G20  OTC デリバティブ法域**としての日本のポジションを維持し、外国ディーラーバンク([[securities-firms/goldman-sachs-japan|GS]], [[securities-firms/morgan-stanley-japan|MS]], [[foreign-financial-institutions/jpmorgan-japan|JPM]], [[foreign-financial-institutions/citigroup-japan|Citi]])が完全な東京ディーラー業務を維持する構造的理由の1つである。

## 紛争解決

日本の OTC デリバティブ紛争は典型的に以下によって規律される:

- **[[derivatives/INDEX|ISDA Master Agreement]]** — 紛争解決規定(計算代理人の不一致、評価紛争、クローズアウトネッティングの仕組み)を含む標準的な相対ドキュメントフレームワーク;
- ほとんどのクロスボーダーディーラー取引における **英国法またはニューヨーク法**の準拠法条項;
- 純粋に国内のカウンターパーティ取引向けの **日本法**;
- 清算済み取引向けの **JSCC ルールブック** — デフォルト管理手続き、証拠金紛争、メンバー懲戒プロセスを含む;
- ライセンスを持つカウンターパーティを含む規制当局仲介の紛争向けの **JFSA 監督チャネル**;
- 係争中の訴訟向けの **東京地方裁判所**(ただしほとんどの OTC 紛争は裁判所に達する前に交渉による和解または仲裁を介して解決する)。

構造的パターン:**相対 OTC 紛争は ISDA 仲介**;**清算済み取引の紛争は JSCC ルール仲介**;**規制コンプライアンス紛争は JFSA 監督**。

## 公開統計

日本の OTC デリバティブの集計想定元本とグロス市場価値は以下によって公表される:

- **BOJ** — 想定元本、グロス市場価値、カウンターパーティ／通貨の内訳を伴う定期的な OTC デリバティブ統計;
- **BIS 半期 OTC デリバティブ統計** — 報告法域としての日本がグローバルな集計公表に貢献する;
- **JSCC 月次清算統計** — IRS、CDS、上場デリバティブの清算サービスの公表された清算済み想定元本と建玉;
- **JFSA 刊行物** — 集計 OTC 想定元本と清算範囲を参照する監督レポート。

想定元本 vs グロス市場価値を引用する際は、両者を明確に分けること — 想定元本残高は、商品クラスとネッティングの取り扱いによって典型的にグロス市場価値の約10-30倍である。

## 関連項目

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
- FSA、FIEA フレームワークページ — OTC デリバティブ、清算義務範囲、取引情報蓄積機関の登録。
- DTCC Japan、規制対象の取引情報蓄積機関サービスの概要。
- ISDA、標準ドキュメント、義務的清算範囲の刊行物、SwapsInfo 集計データ。
- BOJ、決済／市場 — OTC デリバティブ統計の刊行物。
- JPX、デリバティブ市場の資料と清算の取り決め。
