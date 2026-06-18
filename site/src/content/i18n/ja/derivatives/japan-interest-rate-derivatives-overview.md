---
source: derivatives/japan-interest-rate-derivatives-overview
source_hash: e8cb30cec69ce737
lang: ja
status: machine
fidelity: ok
title: "日本の金利デリバティブ概観"
translated_at: 2026-06-18T23:33:48.334Z
---

# 日本の金利デリバティブ概観

## TL;DR

日本の金利デリバティブ・エコシステムは、6 つの主要な商品タイプ — 円 IRS、TONA を参照する OIS、円スワップション、JGB 先物 (10年標準およびミニ、5年、20年)、TONA 3か月物先物、アセットスワップ — と、それらを支えるクリアリング・規制・ディーラーフランチャイズの層から構成される。日次の総取引高は USD 換算で数兆規模 (テナーおよび商品で切り分けた想定元本ベース) であり、活動の大半はメガバンク系証券およびグローバルディーラー群に集中している。

市場は金融商品取引法 (FIEA) の下で規制され、金融庁 (FSA) が監督し、義務付けられた標準化取引については日本証券クリアリング機構 (JSCC) で集中清算される。日本銀行は、金融政策 (OIS カーブを動かす) と JGB 購入プログラム (現物 JGB および JGB 先物市場に影響する) の双方を通じてマクロ的な影響を及ぼす。

FinWiki にとって、本エントリはドメインアンカーである: 構成要素となる各商品ページをルーティングし、市場参加者の状況を要約し、以降のすべての金利デリバティブ・エントリの基礎となる規制・インフラの枠組みを提示する。

## Wiki ルート

本エントリは [[derivatives/INDEX|derivatives index]] の配下に、金利クラスターのアンカーとして位置する。構成要素ページ: [[derivatives/japan-irs-market]]、[[derivatives/ois-tona-curve]]、[[derivatives/jgb-futures-curve]]、[[derivatives/yen-basis-swap-market]] とともに読まれたい。現物サイドと日銀の政策枠組みは [[money-market/INDEX]] と [[money-market/boj-open-market-operations]] に、クリアリングインフラは [[securities/japan-securities-clearing-corp]] にある。

## 6 つの主要商品タイプ

| 商品 | 取引場所 | 参照金利 | 流動性の高いテナー帯 | アンカーページ |
|---|---|---|---|---|
| 円 IRS | OTC、多くは JSCC で清算 | 1M / 3M / 6M TIBOR; TONA 複利 | 2年〜30年 | [[derivatives/japan-irs-market]] |
| 円 OIS | OTC、多くは JSCC で清算 | TONA 後決め複利 | 1週〜30年; 最も深いのは 1年〜10年 | [[derivatives/ois-tona-curve]] |
| 円スワップション | OTC、ほぼ相対 | 原資産の円 IRS (TIBOR または TONA) | 1年 x 1年から 10年 x 30年まで; 最も深いのは 5年 x 5年、10年 x 10年 | (W8-D で計画中 `derivatives/japan-yen-swaption.md`) |
| JGB 先物 | OSE (JPX)、JSCC で清算 | 想定 JGB; CTD 受渡 | 10年標準、10年ミニ、5年、20年 | [[derivatives/jgb-futures-curve]] |
| TONA 3か月物先物 | OSE (JPX)、JSCC で清算 | 3M 複利 TONA | ショートエンド (フロント四半限月) | ([[derivatives/ois-tona-curve]] で扱う) |
| アセットスワップ | OTC、ほぼ相対 | JGB 現物レッグ + IRS レッグ | 原資産の JGB に一致 | (W8-D で計画中 `derivatives/jgb-asset-swap.md`) |

OTC 商品が想定元本残高で支配的であり、上場商品が取引件数で支配的で日次の価格発見を提供する。典型的な機関投資家の金利戦略はこれらをミックスして用いる: タクティカルなデュレーションには先物、テーラーメイドのテナー / カーブエクスポージャーにはスワップ、コンベクシティ / ボラティリティにはスワップション、現物とデリバティブを組み合わせた取引にはアセットスワップ。

## クロスカレンシー・ブリッジ

円金利エコシステムは、以下を通じてドル (およびユーロ) 金利エコシステムに接続する:

| ブリッジ | 商品 | アンカー |
|---|---|---|
| 円ドル・クロスカレンシー・ベーシススワップ | OTC CCBS | [[derivatives/yen-basis-swap-market]] |
| 円 FX フォワード / FX スワップ | OTC FX デリバティブ | (W8-B で計画中 `derivatives/japan-fx-swap-market.md`) |
| 円建ての外貨発行 (サムライ、ウリダシ) を母国通貨へスワップバック | OTC IRS + CCBS の組合せ | [[finance/INDEX]] で扱う |

これらのブリッジは、日本の金利デリバティブが単独では分析できないことを意味する: いずれかの主要通貨におけるグローバルディーラーへのバランスシート圧力は、ベーシススワップおよび FX スワップ市場を通じて JPY 金利の価格形成に伝播し得る。

## 市場参加者

参加者群はディーラー、エンドユーザー、インフラにまたがる:

| カテゴリ | 例 / 役割 |
|---|---|
| メガバンク系証券会社 (ディーラー) | 三菱 UFJ モルガン・スタンレー証券、SMBC 日興、みずほ証券 — 支配的な JPY 金利のマーケットメーカー。 |
| 独立系日本証券会社 (ディーラー) | 野村、大和 — 強い JPY フランチャイズに加えクロスボーダー。 |
| グローバル投資銀行 (ディーラー) | JPモルガン、ゴールドマン、シティ、モルガン・スタンレー、ドイツ銀行、バークレイズ、BNP パリバ、HSBC、UBS。 |
| 国内銀行 (エンドユーザー) | メガバンク財務部門、地方銀行、信託銀行、農林中央金庫 — 主に ALM ヘッジ。 |
| 生命保険会社 (エンドユーザー) | 責任準備金のデュレーション・マッチングのための長期テナーの固定受けフロー。 |
| 損害保険会社 (エンドユーザー) | より小規模な ALM ヘッジ。 |
| 事業会社 (エンドユーザー) | 変動→固定のローンヘッジ、外貨発行のスワップバック、資本構成ヘッジ。 |
| 海外マクロ / ヘッジファンド | タクティカルな日本金利の見方、日本対主要通貨カーブのレラティブバリュー。 |
| 年金基金 / 資産運用会社 | JPY 債券マンデートのデュレーション管理。 |
| インターディーラーブローカー | ICAP / Tradition / BGC / Tullett Prebon — 匿名執行と価格発見。 |
| CCP | 日本証券クリアリング機構 (JSCC) — 集中清算インフラ。 |
| 規制当局 | FIEA の下の金融庁 (FSA)。 |
| 中央銀行 | 日本銀行 — 政策および JGB 購入プログラムを通じたカーブのマクロドライバー。 |

ディーラーフランチャイズが構造的な背骨である。公開のフランチャイズ・コメンタリーは [[megabanks/mufg-bank]]、[[megabanks/sumitomo-mitsui-banking-corp]]、[[megabanks/mizuho-bank]] の親グループ IR 資料に現れる。

## 日次取引高

JPY 金利デリバティブ全体の日次総取引高 (想定元本):

| 出典 | 指標 |
|---|---|
| BIS 三年ごとの中央銀行サーベイ (FX および OTC デリバティブ、最新は 2022 ヴィンテージ) | JPY 建て OTC 金利デリバティブの取引高は、全体で 1 日あたり USD 換算で数千億ドル規模。 |
| ISDA SwapsInfo 週次集計取引 | 週次の清算済みおよび相対の JPY-IRS 想定元本は USD 換算で数兆規模。 |
| JPX 月次出来高統計 | 上場デリバティブ (JGB 先物、TONA 先物) の日次建玉数量を月次で開示。 |
| BoJ の BIS サーベイ日本部分 | 日本所在ディーラーのブックの日次取引高。 |

標準的な留意点: 取引高と想定元本残高は異なる概念であり、双方とも BIS が報告するが周期が異なる (取引高は三年ごと、残高は半年ごと)。現在値については、正確な出典リリースとサーベイのヴィンテージを引用すること。

USD 換算で数兆規模というスケールは桁感のアンカーとして有用だが、少数の大手ディーラーに支配され、標準テナーに集中している。

## 規制の枠組み

日本の金利デリバティブを統治する主要な規制レイヤー:

| レイヤー | 詳細 |
|---|---|
| 金融商品取引法 (FIEA、金融商品取引法) | 証券、デリバティブ、市場仲介者、開示、市場行為を網羅する法的枠組み。 |
| FSA 監督 | 金融庁 (金融庁) が FIEA 登録ディーラー、取引所、CCP、市場インフラを監督する。 |
| デリバティブディーラー登録 | 業務には FIEA の下での第 1 種金融商品取引業の登録が必要。ライセンスの層については [[banking/japan-banking-license-tier-comparison-matrix]] を参照。 |
| CCP 清算義務 | FSA が指定した標準化された JPY IRS は JSCC で清算しなければならない; その範囲は複数の規則サイクルにわたり拡大してきた。 |
| 報告義務 | FSA 規則の下での指定取引情報蓄積機関 (TR) への取引報告。 |
| ISDA 文書 | ほとんどの OTC 取引は ISDA マスター契約 (通常 1992 年版または 2002 年版) に CSA および商品固有のアネックスを加えて用いる。 |
| BoJ 市場サーベイランス | 日銀はその業務上の責任の一環として、サーベイ活動 (東京短期金融市場サーベイ) を含め、短期金融市場およびデリバティブの機能を監視する。 |
| 資本・証拠金規制 | バーゼル III のリスクアセット規則、レバレッジ比率、NSFR、LCR。非清算の相対取引に対する証拠金規制 (UMR)。 |
| 監査・報告 | FIEA の下での上場企業開示; 発行体向けの日本基準 / IFRS によるデリバティブのヘッジ会計。 |

規制の枠組みは G20 / FSB のデリバティブ改革コミットメント (集中清算、取引報告、資本・証拠金基準) と概ね整合している。日本は主要金利商品の CCP 清算の早期採用国であった。

## TOMS クリアリング・プラットフォーム (および JSCC クリアリング)

JPX グループの取引注文管理システム (TOMS) は、上場デリバティブのマッチングと JSCC へのクリアリングフローを支える技術インフラである。OTC IRS については、JSCC が専用の OTC クリアリング・プラットフォームを運営する (JGBCC は JGB 現物のための前身であった; JSCC は JPX グループ商品全体のクリアリングを統合した)。

OTC IRS に対する JSCC クリアリングの主要機能:

| 機能 | 詳細 |
|---|---|
| 適格商品 | 義務付けられたテナーおよび参照指標における標準化された JPY IRS; 時間とともに拡大。 |
| 会員資格 | 直接清算会員 (DCM) に加え、非会員向けには DCM を経由したクライアントクリアリング。 |
| 証拠金 | ポートフォリオマージン手法を用いた当初証拠金 (IM); 日次の変動証拠金 (VM) を JPY 現金で。 |
| デフォルト管理 | 段階的ウォーターフォール (デフォルト者証拠金 → デフォルト者のデフォルトファンド拠出 → JSCC 資本トランシェ → 非デフォルト会員ファンド)。 |
| オークションプロセス | デフォルトシナリオにおいて、JSCC は非デフォルト会員に対しポートフォリオオークションを実施する。 |
| クロスカレンシー商品 | JSCC の範囲は主に JPY 建て; クロスカレンシー CCBS のクリアリングはより限定的。 |

上場デリバティブ (JGB 先物、TONA 先物、日経 225 先物・オプション) については、JSCC が OSE / TSE のデリバティブフロー全体を商品横断のポートフォリオマージンで清算する。

CCP インフラの詳細は [[securities/japan-securities-clearing-corp]] を、より広範なクリアリング・決済エコシステムは [[securities/japan-market-infrastructure-map]] を参照。

## 公開データの表層

| 出典 | 示す内容 |
|---|---|
| BoJ 短期金融市場および東京短期金融市場サーベイ | JPY 短期金融市場およびデリバティブの取引パターンの集計; 半年ごと / 年次のサーベイ。 |
| BoJ 統計: BIS OTC デリバティブ日本部分 | JPY 金利デリバティブの想定元本および総市場価値を半年ごとに。 |
| BIS OTC デリバティブ統計 | グローバル集計の JPY デリバティブ残高、カウンターパーティタイプ・商品・通貨で切り分け。 |
| BIS 三年ごとの中央銀行サーベイ | 三年ごとの取引高スナップショット。 |
| ISDA SwapsInfo | 週次集計の清算済みおよび相対の取引想定元本。 |
| JPX 出来高統計 | 月次の上場デリバティブの出来高と建玉。 |
| JSCC 公開ディスクロージャー | クリアリング数量、会員数、デフォルトファンド規模 (開示される範囲で)。 |
| FSA 監督ディスクロージャー | 定期的な監督コメンタリーおよび集計された市場構造データ。 |
| ディーラー銀行 IR | 集計されたマーケット部門の収益コメンタリー。 |

公開データは、集計された市場規模、ディーラー集中度、クリアリングシェア、広範なトレンドを特徴づけるのに十分なほど豊富である。個別取引の価格形成、特定のカウンターパーティエクスポージャー、独自のディーラー P&L は明らかにしない。特定の数値については、リリースのヴィンテージにわたって数値が更新されるため、正確なリリースのヴィンテージを引用すること。

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

- 日本銀行: 短期金融市場の表層; 東京短期金融市場サーベイ。
- 日本銀行: BIS 半年ごとの OTC デリバティブ統計の日本部分。
- BIS: 半年ごとの OTC デリバティブ統計; FX および OTC デリバティブに関する三年ごとの中央銀行サーベイ。
- 日本取引所グループ (JPX) / 大阪取引所 (OSE): 上場デリバティブの商品表層; 出来高および建玉統計。
- 日本証券クリアリング機構 (JSCC): クリアリング規則、適格商品リスト、クリアリング数量の開示。
- 金融庁 (FSA): FIEA の枠組みおよび監督指針。
- ISDA: SwapsInfo 週次集計取引データ; ISDA マスター契約の枠組み文書。
- 日本円金利指標に関する検討委員会: IBOR 移行報告書。
- 全国銀行協会 TIBOR 運営機関 (JBATA): TIBOR ベンチマーク運営。
- ディーラー銀行 IR リリース: 三菱 UFJ、SMFG、みずほ FG、野村 HD、大和証券グループの四半期開示。
