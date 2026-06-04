---
source: derivatives/japan-interest-rate-derivatives-overview
source_hash: 99be9f18fa81aa4d
lang: ja
status: machine
fidelity: ok
title: "日本の金利デリバティブ概観"
translated_at: 2026-06-02T11:47:37.297Z
---

# 日本の金利デリバティブ概観

## 要約

日本の金利デリバティブのエコシステムは、6つの主要な商品タイプ — 円IRS、TONAを参照するOIS、円スワップション、JGB先物(10年標準およびミニ、5年、20年)、TONA 3か月先物、アセットスワップ — と、それらを支える清算、規制、ディーラーフランチャイズのレイヤーから構成される。総日次売買高は(期間および商品でスライスされた想定元本で)USD換算で数兆規模であり、活動の大半はメガバンク系および海外ディーラーのセットに集中している。

この市場は金融商品取引法(FIEA)の下で規制され、金融庁(FSA)に監督され、義務付けられた標準化された取引については日本証券クリアリング機構(JSCC)で中央清算される。日本銀行は、金融政策(OISカーブを駆動する)とJGB買入れプログラム(現物JGBおよびJGB先物の市場に影響する)の双方を通じて、マクロの影響を行使する。

FinWikiにとって、本項目はドメインのアンカーである:それは構成要素となる各商品のページへルーティングし、市場参加者のランドスケープを要約し、以降のすべての金利デリバティブの項目の基礎となる規制とインフラのフレームワークを示す。

## ウィキ上の位置づけ

本項目は [[derivatives/INDEX|derivatives index]] の下に、金利クラスターのアンカーとして位置する。構成要素となる各ページ:[[derivatives/japan-irs-market]]、[[derivatives/ois-tona-curve]]、[[derivatives/jgb-futures-curve]]、[[derivatives/yen-basis-swap-market]] と併せて読まれたい。現物側および日銀の政策フレームワークは [[money-market/INDEX]] および [[money-market/boj-open-market-operations]] に;清算インフラは [[securities/japan-securities-clearing-corp]] にある。

## 6つの主要な商品タイプ

| 商品 | 取引場所 | 参照レート | 流動性のある期間帯 | アンカーページ |
|---|---|---|---|---|
| 円IRS | OTC、多くはJSCCで清算 | 1か月 / 3か月 / 6か月 TIBOR;TONA複利 | 2年から 30年 | [[derivatives/japan-irs-market]] |
| 円OIS | OTC、多くはJSCCで清算 | 後決め複利のTONA | 1週から 30年;最も深いのは 1年から 10年 | [[derivatives/ois-tona-curve]] |
| 円スワップション | OTC、大半はバイラテラル | 原資産の円IRS(TIBORまたはTONA) | 1年 × 1年から 10年 × 30年まで;最も深いのは 5年 × 5年、10年 × 10年 | (W8-D予定 `derivatives/japan-yen-swaption.md`) |
| JGB先物 | OSE(JPX)、JSCCで清算 | 想定JGB;CTD受渡し | 10年標準、10年ミニ、5年、20年 | [[derivatives/jgb-futures-curve]] |
| TONA 3か月先物 | OSE(JPX)、JSCCで清算 | 3か月複利のTONA | 短期(フロントの四半限月) | ([[derivatives/ois-tona-curve]] で扱う) |
| アセットスワップ | OTC、大半はバイラテラル | JGB現物レッグ + IRSレッグ | 原資産のJGBに対応 | (W8-D予定 `derivatives/jgb-asset-swap.md`) |

OTC商品が想定元本残高を支配する;上場商品が取引件数を支配し、日次の価格発見を提供する。典型的な機関投資家の金利戦略は混合を用いる:戦術的なデュレーションには先物、テーラーメイドの期間 / カーブのエクスポージャーにはスワップ、コンベクシティ / ボラティリティにはスワップション、現物とデリバティブを組み合わせた取引にはアセットスワップ。

## 通貨間のブリッジ

円の金利エコシステムは、次を通じてドル(およびユーロ)の金利エコシステムと接続する:

| ブリッジ | 商品 | アンカー |
|---|---|---|
| 円-ドルの通貨ベーシス・スワップ | OTC CCBS | [[derivatives/yen-basis-swap-market]] |
| 円のFXフォワード / FXスワップ | OTC FXデリバティブ | (W8-B予定 `derivatives/japan-fx-swap-market.md`) |
| 自国通貨にスワップして戻される円建ての外国発行(サムライ、ユーロ円) | OTC IRS + CCBSの組み合わせ | [[finance/INDEX]] で扱う |

これらのブリッジは、日本の金利デリバティブが単独では分析できないことを意味する:いずれかの主要通貨におけるグローバルディーラーへのバランスシートの圧力は、ベーシス・スワップおよびFXスワップの市場を通じてJPY金利の価格づけに伝播しうる。

## 市場参加者

参加者のセットは、ディーラー、エンドユーザー、インフラにまたがる:

| カテゴリー | 例 / 役割 |
|---|---|
| メガバンク系の証券会社(ディーラー) | MUFGモルガン・スタンレー証券、SMBC日興、みずほ証券 — 支配的なJPY金利のマーケットメーカー。 |
| 独立系の日本の証券会社(ディーラー) | Nomura、Daiwa — 強いJPYフランチャイズに加えクロスボーダー。 |
| グローバルな投資銀行(ディーラー) | JPMorgan、Goldman、Citi、Morgan Stanley、Deutsche Bank、Barclays、BNP Paribas、HSBC、UBS。 |
| 国内銀行(エンドユーザー) | メガバンクの財務、地方銀行、信託銀行、農林中央金庫 — 主にALMヘッジ。 |
| 生命保険会社(エンドユーザー) | 保険準備金のデュレーション・マッチングのための長期の受け取り固定のフロー。 |
| 損害保険会社(エンドユーザー) | より小規模なALMヘッジ。 |
| 事業会社(エンドユーザー) | 変動から固定への貸出ヘッジ、外国発行のスワップバック、資本構成のヘッジ。 |
| 海外のマクロ / ヘッジファンド | 戦術的な日本金利の見方、日本対主要通貨のカーブのレラティブバリュー。 |
| 年金基金 / アセットマネージャー | JPY債券マンデートのデュレーション管理。 |
| インターディーラー・ブローカー | ICAP / Tradition / BGC / Tullett Prebon — 匿名の執行と価格発見。 |
| CCP | 日本証券クリアリング機構(JSCC) — 中央清算インフラ。 |
| 規制当局 | FIEAの下の金融庁(FSA)。 |
| 中央銀行 | 日本銀行 — 政策およびJGB買入れプログラムを通じたカーブのマクロのドライバー。 |

ディーラーのフランチャイズが構造的なバックボーンである。公開のフランチャイズの論評は、[[megabanks/mufg-bank]]、[[megabanks/sumitomo-mitsui-banking-corp]]、[[megabanks/mizuho-bank]] の親会社グループのIR資料に現れる。

## 日次売買高

JPY金利デリバティブ全体の総日次売買高(想定元本):

| ソース | 計測 |
|---|---|
| BISの3年ごとの中央銀行サーベイ(FXおよびOTCデリバティブ、最新は 2022 年版) | JPY建てのOTC金利デリバティブの売買高は、総計で1日あたりUSD換算で数千億規模。 |
| ISDA SwapsInfoの週次集計取引 | 週次の清算済みおよびバイラテラルのJPY-IRS想定元本は、USD換算で数兆規模。 |
| JPXの月次出来高統計 | 上場デリバティブ(JGB先物、TONA先物)の日次の建玉数量を月次で開示。 |
| 日銀のBISサーベイの日本部分 | 日本に所在するディーラーの帳簿の日次売買高。 |

標準的な注意:売買高と想定元本残高は異なる概念である;両者ともBISが報告するが、異なる周期性で(売買高は3年ごと、残高は半年ごと)である。現在のいかなる数値についても、正確なソースのリリースおよびサーベイの版を引用すること。

USD換算で数兆規模というスケールは有用な桁の目安であるが、少数の大手ディーラーに支配され、標準的な期間に集中している。

## 規制フレームワーク

日本の金利デリバティブを規律する主要な規制レイヤー:

| レイヤー | 詳細 |
|---|---|
| 金融商品取引法(FIEA、金融商品取引法) | 証券、デリバティブ、市場仲介業者、開示、市場行為を扱う法的フレームワーク。 |
| FSAの監督 | 金融庁(金融庁)が、FIEAに登録されたディーラー、取引所、CCP、市場インフラを監督する。 |
| デリバティブ・ディーラーの登録 | 活動には、FIEAの下での第1 種金融商品取引業の登録が必要。ライセンスのレイヤーについては [[banking/japan-banking-license-tier-comparison-matrix]] 参照。 |
| CCP清算の義務 | FSAが指定した標準化されたJPY IRSはJSCCで清算されなければならない;範囲は複数のルールサイクルにわたって拡大した。 |
| 報告義務 | FSAのルールの下での指定された蓄積機関(TR)への取引報告。 |
| ISDAドキュメンテーション | 大半のOTC取引はISDAマスター契約(通常 1992 年または 2002 年の様式)に加えてCSAおよび商品固有の付属書を用いる。 |
| 日銀の市場サーベイランス | 日銀は、サーベイ活動(東京短期金融市場サーベイ)を含む、その業務上の責任の一部として、短期金融市場およびデリバティブの機能を監視する。 |
| 資本および証拠金のルール | バーゼルIIIのリスクアセットのルール、レバレッジ比率、NSFR、LCR。非清算のバイラテラル取引に対する非清算証拠金規制(UMR)。 |
| 監査および報告 | FIEAの下での上場企業の開示;発行体に対する日本基準 / IFRSの下でのデリバティブのヘッジ会計。 |

規制フレームワークは、G20  / FSBのデリバティブ改革のコミットメント(中央清算、取引報告、資本および証拠金の基準)とおおむね整合している。日本は、主要な金利商品についてCCP清算の早期採用国であった。

## TOMSの清算プラットフォーム(およびJSCCの清算)

JPXグループのTrade-Order Management System(TOMS)は、上場デリバティブのマッチングおよびJSCCへの清算フローを支える技術インフラである。OTC IRSについては、JSCCが専用のOTC清算プラットフォームを運営する(JGBCCはJGB現物の前身であった;JSCCはJPXグループの商品にわたって清算を統合した)。

OTC IRSに対するJSCCの清算の主要な特徴:

| 特徴 | 詳細 |
|---|---|
| 適格な商品 | 義務付けられた期間および参照指標における標準化されたJPY IRS;時間とともに拡大。 |
| 会員資格 | 直接清算会員(DCM)に加え、非会員のためのDCMを通じたクライアント・クリアリング。 |
| 証拠金 | ポートフォリオ証拠金の方法を用いた当初証拠金(IM);JPY現金での日次の変動証拠金(VM)。 |
| デフォルト管理 | 階層型のウォーターフォール(デフォルト会員の証拠金 → デフォルト会員のデフォルトファンドへの拠出 → JSCCの資本トランシェ → 非デフォルト会員のファンド)。 |
| オークションのプロセス | デフォルトのシナリオでは、JSCCは非デフォルト会員に対してポートフォリオのオークションを実施する。 |
| 通貨間の商品 | JSCCの範囲は主にJPY建てである;通貨間のCCBSの清算はより限定的。 |

上場デリバティブ(JGB先物、TONA先物、日経225 先物およびオプション)については、JSCCが、商品にまたがるポートフォリオ証拠金を伴って、OSE / TSEのデリバティブのフロー全体を清算する。

CCPインフラの詳細については [[securities/japan-securities-clearing-corp]] を、より広い清算・決済のエコシステムについては [[securities/japan-market-infrastructure-map]] を参照。

## 公開データの表面

| ソース | 何を示すか |
|---|---|
| 日銀のMoney Marketおよび東京短期金融市場サーベイ | JPYの短期金融市場およびデリバティブの総取引パターン;半年 / 年次のサーベイ。 |
| 日銀の統計:BISのOTCデリバティブの日本部分 | JPY金利デリバティブの想定元本および総市場価値を半年ごと。 |
| BISのOTCデリバティブ統計 | グローバルな総計のJPYデリバティブ残高を、相手方の種類、商品、通貨でスライス。 |
| BISの3年ごとの中央銀行サーベイ | 3年ごとの売買高のスナップショット。 |
| ISDA SwapsInfo | 週次の集計された清算済みおよびバイラテラルの取引想定元本。 |
| JPXの出来高統計 | 月次の上場デリバティブの出来高および建玉。 |
| JSCCの公開開示 | 清算量、会員数、デフォルトファンドの規模(開示される場合)。 |
| FSAの監督上の開示 | 定期的な監督上の論評および集計された市場構造データ。 |
| ディーラー銀行のIR | 総計のマーケット部門の収益の論評。 |

公開データは、総計の市場規模、ディーラーの集中、清算シェア、広範なトレンドを特徴づけるのに十分豊富である。それは、個別取引の価格づけ、特定の相手方のエクスポージャー、または独自のディーラーのP&Lを明らかにしない。数値はリリースをまたいで更新されるため、特定のいかなる数値についても正確なリリースの版を引用すること。

## 関連項目

- [[derivatives/INDEX]]
- [[derivatives/japan-irs-market]]
- [[derivatives/ois-tona-curve]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/yen-basis-swap-market]]
- [[money-market/INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/tanshi-company-business-model]]
- [[banking/INDEX]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[finance/INDEX]]
- [[finance/japan-corporate-fx-and-rate-hedge-policy]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[securities/INDEX]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[financial-regulators/japan-securities-finance]]
- [[INDEX|FinWiki index]]

## 出典

- 日本銀行:Money Marketの表面;東京短期金融市場サーベイ。
- 日本銀行:BISの半年ごとのOTCデリバティブ統計の日本部分。
- BIS:半年ごとのOTCデリバティブ統計;FXおよびOTCデリバティブの3年ごとの中央銀行サーベイ。
- 日本取引所グループ(JPX) / 大阪取引所(OSE):上場デリバティブの表面;出来高および建玉の統計。
- 日本証券クリアリング機構(JSCC):清算規則、適格な商品の一覧、清算量の開示。
- 金融庁(FSA):FIEAのフレームワークおよび監督ガイダンス。
- ISDA:SwapsInfoの週次集計取引データ;ISDAマスター契約のフレームワークのドキュメンテーション。
- 日本円金利指標に関する検討委員会:IBOR移行レポート。
- 全国銀行協会TIBOR運営機関(JBATA):TIBORベンチマークの運営。
- ディーラー銀行のIRリリース:MUFG、SMFG、みずほFG、野村HD、大和証券グループの四半期開示。
