---
source: derivatives/japan-cds-market-overview
source_hash: a8c738c681427923
lang: ja
status: machine
fidelity: ok
title: "日本の CDS 市場概観"
translated_at: 2026-06-02T11:47:37.268Z
---

# 日本の CDS 市場概観

## 要約

日本のクレジット・デフォルト・スワップ(CDS)市場は、グローバルなクレジットデリバティブ領域の中で、規模は小さいものの構造的に重要な一角である。支配的な指数リファレンスは **iTraxx Japan** であり、50  の投資適格日本企業の銘柄をカバーし 6 ヶ月ごとにロールされる IHS Markit / S&P Global のベンチマークである。シングルネーム CDS の取引は、オフショア投資家やヘッジファンドの関心を集める日本の優良クレジット — メガバンク、大手保険、商社、自動車、電機、通信 — に集中している。ディーラーの顔ぶれは [[securities-firms/goldman-sachs-japan|Goldman Sachs Japan]]、JPMorgan 東京、[[securities-firms/morgan-stanley-japan|Morgan Stanley Japan]]、[[securities-firms/nomura-hd|Nomura]]、BNP Paribas、および欧米ディーラーの小グループによって支配されている。清算は、円建ての指数 CDS については **JSCC**、オフショア清算のエクスポージャーについては **ICE Clear Credit**(および歴史的には LCH)に分かれる。CDS-JGB / CDS-社債のベーシスは構造的に狭いが、日銀の政策変更、ディーラーのバランスシート縮小、グローバルなクレジットストレスをめぐって、断続的にボラタイルになる。

## ウィキ上の位置づけ

本項目は [[derivatives/INDEX|derivatives index]] の下に、日本のクレジットデリバティブのサブドメインのルーティングサーフェスとして位置づけられる。シングルネームのプライシング層については [[derivatives/cds-japan-corporate-spread-mechanics|Japan corporate CDS spread mechanics]]、アービトラージ層については [[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]]、より広い金利スワップの文脈については [[derivatives/japan-irs-market|Japan IRS market]]、資金調達カーブとの相互作用については [[derivatives/yen-basis-swap-market|yen basis swap market]]、日本の機関投資家のバランスシートを支配する USD 資金調達のオーバーレイについては [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]] と併せて読むこと。

発行体側では、社債クレジットのアンカーページは [[finance/INDEX|finance index]]、[[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]]、[[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]] である。利用者側では、[[banking/INDEX|banking index]] および [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]] が、クレジットヘッジツールに対するメガバンク / 保険の需要を枠づける。[[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage and institutional financing]] は、シングルネーム CDS の流動性を支えるディーラー対ヘッジファンドの配管を枠づける。

### プロダクト分類

| プロダクト | 説明 | 典型的な利用者 |
|---|---|---|
| iTraxx Japan 指数 CDS | 取引可能な 50 銘柄の投資適格日本バスケット、5Y ベンチマーク、半年ごとのロール | マクロファンド、ディーラー、ETF / ポートフォリオヘッジャー |
| 日本優良株のシングルネーム CDS | 個別の日本上場企業に対する相対 CDS | クレジットファンド、ストラクチャード商品の発行体、ディーラー |
| iTraxx Japan トランシェ | 指数に対するシンセティック CDO 型のトランシェ(2008 以降は流動性が低い) | 専門のクレジットファンド、ディーラー |
| 日本のソブリン CDS | 日本国のリスクに対する CDS;G7  の同等国と比べて取引は控えめ | ソブリンリスクファンド、マクロヘッジャー |
| クアントー CDS(JPY クレジットに対する USD 建て) | JPY 建ての参照債務を伴う USD 建ての CDS | FX エクスポージャーをヘッジするオフショア投資家 |
| ローン CDS(LCDS) | シンジケートローンを参照する CDS;日本での取引は極めて限定的 | 専門のローンクレジットファンド |

圧倒的な取引量は **iTraxx Japan 指数 CDS**(5Y のオンザラン・シリーズ)にあり、最もグローバルに注目される銘柄に対するシングルネーム取引の薄いテールがそれに続く。

### iTraxx Japan の構成

iTraxx Japan は、最も流動性の高い 50  の日本に本拠を置く投資適格社債 CDS リファレンスから、IHS Markit / S&P Global によって構築される。構成は指数ロール(3 月 / 9 月)で 6 ヶ月ごとに見直され、構成銘柄は均等にウェイトづけされる。

| セクタークラスター | 代表的な銘柄 |
|---|---|
| メガバンク / 金融グループ | [[megabanks/mufg|MUFG]], [[megabanks/sumitomo-mitsui-banking-corp|SMBC]](SMFG 経由), [[megabanks/mizuho-bank|Mizuho]](みずほ FG 経由) |
| 保険 | 東京海上, ソンポ, MS&AD |
| 商社(総合商社) | 三菱商事, 三井物産, 伊藤忠, 住友商事, 丸紅 |
| 自動車 | トヨタ, ホンダ, 日産 |
| 電機 / 産業 | ソニー, パナソニック, 日立, 三菱電機 |
| 通信 / 公益 | NTT, KDDI, [[megabanks/mufg|SoftBank Group]](含まれる場合), 東京電力, 東京ガス |
| 不動産 | 三菱地所, 三井不動産, 住友不動産 |
| 消費 / 小売 | セブン&アイ, イオン(含まれる場合), ファーストリテイリング |

各ロールでは、流動性と格付けの基準に基づき、少数の構成銘柄の入れ替えが生じる。前シリーズはレガシーヘッジのために取引可能なまま残るが、流動性は新しいオンザラン・シリーズへ急速に移行する。

### シングルネーム CDS のカバレッジ

日本におけるシングルネーム CDS の流動性は、国際的に注目される一握りのクレジットに集中している:

| ティア | 例 | 流動性の特性 |
|---|---|---|
| ティア 1 (最も流動的) | MUFG, SMFG / SMBC, みずほ, 野村, ソフトバンクグループ, トヨタ自動車 | 5+ ディーラーが気配を提示、両建てのフロー、狭いビッドアスク |
| ティア 2 (中程度) | ソニー, 日立, 三菱商事, 三井物産, 伊藤忠, NTT, KDDI | 3-5  ディーラーが気配を提示、断続的なフロー |
| ティア 3 (薄い) | 中型産業、第二ティアの金融、公益 | 依頼に応じて気配、広いビッドアスク、ディーラーのバランスシートに駆動される |

[[megabanks/mufg|MUFG]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]](SMFG 経由)、[[megabanks/mizuho-bank|Mizuho]](みずほ FG 経由)は、最もグローバルに取引される日本の金融 CDS である。[[securities-firms/nomura-hd|Nomura]] は、最も活発に取引される日本のブローカーディーラー CDS である。**ソフトバンクグループ**は、そのレバレッジプロファイル、M&A のボラティリティ、ビジョン・ファンドの時価評価感応度により、一貫して最も活発に取引される日本の非金融 CDS である。

### ディーラーの顔ぶれ

| ディーラー | 役割 |
|---|---|
| [[securities-firms/goldman-sachs-japan|Goldman Sachs Japan]] | 指数およびティア 1  のシングルネームにおけるトップティアのマーケットメーカー |
| JPMorgan 東京 | トップティアのマーケットメーカー、特に保険および金融クレジット |
| [[securities-firms/morgan-stanley-japan|Morgan Stanley Japan]] | トップティアのマーケットメーカー、特にテクノロジーおよび消費クレジット |
| [[securities-firms/nomura-hd|Nomura]] | 主導的な国内ディーラー、大きな指数ブック、シングルネームでの存在 |
| BNP Paribas 東京 | 日本クレジットにおける主要な欧州マーケットメーカー |
| Citi Japan | 主要な米国マーケットメーカー、特に金融 |
| Barclays / Deutsche Bank 東京 | 中位ティアの存在、セクターにより異なる |
| MUFG / MUMSS, SMBC 日興, みずほ証券 | 国内銀行はトップティアのマーケットメーカーというよりプライステイカー / ポートフォリオヘッジャーとして活動 |

[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/daiwa-sg|Daiwa]]、みずほ証券は、歴史的にシングルネーム CDS に参加していたが、2008  以降の規制および資本の変更を経て、活発なディーラー・マーケットメイキングの役割から後退した。国内メガバンクグループは、ディーラー・マーケットメーカーというより、ポートフォリオヘッジの目的(自社クレジットヘッジ、ソブリンベーシスヘッジ)のための大口カウンターパーティであり続けている。

### 想定元本残高

国際決済銀行(BIS)は、参照エンティティの地域別のグローバル CDS 想定元本残高に関する半年ごとの統計を公表している。日本を参照エンティティとする CDS は小さなシェアを占める — 通常、グローバルなシングルネーム CDS 想定元本の 2-4  パーセント、指数 CDS 想定元本も同様のシェア — で、米ドルおよびユーロ市場を大きく下回る。

日本国内では、想定元本では指数 CDS が支配的(マクロヘッジと ETF レプリケーションのフローに駆動される)である一方、顧客の多様性ではシングルネーム CDS が支配的(ストラクチャード商品の発行と個別のクレジットヘッジに駆動される)である。

### 清算インフラ

日本の CDS 清算は二分されている:

| 場 | カバレッジ | 通貨 | メンバー基盤 |
|---|---|---|---|
| **JSCC CDS 清算** | iTraxx Japan 指数シリーズ、適格な日本のシングルネーム CDS | JPY 建ての取引 | 日本のディーラー、外国銀行の東京支店 |
| **ICE Clear Credit** | グローバルな iTraxx 指数スイート(iTraxx Japan を含む)、広範なシングルネームのセット | マルチカレンシー | 最も活発な日本 CDS のマーケットメーカーを含むグローバルなディーラーの顔ぶれ |
| **LCH CDSClear** | 再編後は存在感が縮小;歴史的には欧州指数を清算 | マルチカレンシー | 欧州ディーラー;日本のエクスポージャーは少ない |

[[banking/INDEX|JSCC]](日本証券クリアリング機構、JPX の一部)は、国内ディーラーの取引をオンショアに引き込み、クロスボーダーの集中リスクを減らすために CDS 清算を開始した。ICE Clear Credit は、その規模、マルチプロダクトのマージン相殺、グローバルなディーラー会員により、クロスボーダーの日本 CDS フローにとって支配的な場であり続けている。

CFTC の清算義務、および日本(金商法)、EU(EMIR)、英国(UK EMIR)の同等制度が、ほとんどのディーラー間取引を中央清算へと駆動する。バイサイドの顧客は、直接会員ではなく、ディーラーの顧客として清算する(顧客清算の取り決め)。

### CDS スプレッドのクオート

| 慣行 | 詳細 |
|---|---|
| クオートの基準 | 想定元本に対する年あたりベーシスポイントのランニングスプレッド |
| 支払頻度 | 四半期ごと、ACT/360  の日数計算 |
| 標準満期 | 5Y ベンチマーク;フルカーブは通常 1Y / 3Y / 5Y / 7Y / 10Y |
| クーポンの慣行 | 標準化された「スモールバン」クーポン(ほとんどの銘柄で 25, 100, 500, 1000 bps)とスプレッド対クーポンを調整するアップフロント支払 |
| 回収率 | 標準化された仮定(通常、シニア無担保の社債で 40  パーセント、劣後で 25  パーセント) |
| ドキュメンテーション | ISDA マスター契約に CDS コンファメーションを加えたもの;2014  ISDA クレジットデリバティブ定義集 |

5Y のオンザラン CDS スプレッドは、日本のクレジットリスクについて最も注視される単一の数字である。5Y の CDS-債券ベーシス([[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]] で説明)は、主要なアービトラージシグナルである。

### CDS カーブの形状

ほとんどの投資適格日本社債 CDS カーブは右肩上がり(1Y < 3Y < 5Y < 10Y)であり、より長い期間にわたるより高い累積デフォルト確率を反映している。逆イールドのカーブは、ディストレストの金融や最もレバレッジの高い非金融で断続的に見られるように、近い将来のディストレスに対する市場の予想を示す。

### 指数ロールの仕組み

| 段階 | 活動 |
|---|---|
| T-30 | IHS Markit が暫定的な新シリーズの構成銘柄を公表 |
| T-15 | 最終的な構成銘柄リストを確定;ウェイトを設定 |
| T-1 | 旧シリーズのロール前の最終取引日 |
| T(半年ごと: 20  3 月、20  9 月) | 新シリーズがオンザランに;旧シリーズがオフザランに |
| T+5  から T+30 | 流動性の移行が完了;オフザランシリーズがオンザランに対してワイドニング |

ロールベーシス(連続するシリーズ間のスプレッド差)は、構成銘柄のクレジット品質の変化とロール時の需給を反映する。アービトラージファンドとディーラーのトレーディングデスクはロールをめぐってポジションを取る。

### カウンターパーティの類型

| カウンターパーティ | ユースケース |
|---|---|
| マクロヘッジファンド | クレジットのリスクオン / リスクオフのポジショニングのためのアウトライト指数 CDS |
| クレジットヘッジファンド | レラティブバリュー、ベーシストレード、資本構造アービトラージのためのシングルネーム CDS |
| 銀行ディーラーデスク | マーケットメイキング、自己ポジショニング、ストラクチャード商品のヘッジ |
| 保険・年金 | ポートフォリオオーバーレイヘッジ、ESR 感応度管理 — [[insurance/japan-life-insurance-alm-overview|Japan life ALM]] 参照 |
| 事業会社の財務 | 自社名のヘッジは一般的でない;FX 連動のエクスポージャーに対するソブリン / セクターヘッジ |
| ストラクチャード商品の発行体 | リテール / 機関投資家の買い手に移転されるクレジットリンク債(CLN)およびシンセティックエクスポージャーのヘッジ |
| 政府系ファンド | 日本ソブリンおよび IG バスケットに対する戦術的なマクロ / クレジットのポジショニング |

[[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]] は、生命保険会社が原理的にはクレジットスプレッドヘッジのために CDS を用いうることを示すが、ESR のもとでの規制上の取扱いと JGAAP および IFRS 9  のもとでの会計ルールが広範な利用を制約する。

### ドキュメンテーション

| 文書 | 目的 |
|---|---|
| ISDA マスター契約 | デリバティブのための相対の枠組み |
| スケジュールおよびクレジット・サポート・アネックス(CSA) | 担保条件、閾値、MTA、適格担保 |
| ISDA クレジットデリバティブ定義集(2014) | 標準化された CDS 契約条件、クレジットイベント、決済 |
| コンファメーション | 取引固有の条件(参照エンティティ、想定元本、満期、クーポン、支払日) |
| DTCC Deriv/SERV | 取引マッチングおよび報告のインフラ |

2014  の ISDA クレジットデリバティブ定義集は 2003  の定義集に取って代わり、政府介入およびベイルインのクレジットイベントの取扱いを標準化した。これは特に 2008  の危機および欧州の銀行破綻処理の事例の後に重要であった。

## 近年の市場構造の変化

| 時期 | 展開 |
|---|---|
| 2008-2010 | リーマン後のクリーンアップ、「ビッグバン」および「スモールバン」の CDS 標準化、ISDA 決定委員会の創設 |
| 2010-2015 | 中央清算への移行(JSCC の開始、ICE Clear Credit の支配)、ドッド・フランク / EMIR / 金融庁の清算義務 |
| 2014 | 政府介入のクレジットイベントを含む新しい ISDA クレジットデリバティブ定義集 |
| 2015-2020 | 日本を含む多くの市場でのシングルネーム CDS の流動性縮小;指数 CDS は底堅い |
| 2020-Q1 | COVID のクレジットスプレッド急拡大;投資適格日本にわたる CDS ベーシスのディスロケーション |
| 2022-2023 | 日銀のイールドカーブコントロールの調整が金融に対する断続的な CDS スプレッドの動きを引き起こした |
| 2024-2025 | シングルネームの薄い出来高が継続;グローバルな銀行ストレスのエピソードにおける日本の金融 CDS への選択的な関心 |

## 関連項目

- [[derivatives/INDEX]]
- [[derivatives/cds-japan-corporate-spread-mechanics]]
- [[derivatives/basis-trade-bond-cds-japan]]
- [[derivatives/structured-bond-japan-retail-issuance]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/japan-irs-market]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[finance/INDEX]]
- [[finance/japan-convertible-bond-mechanics]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[megabanks/mufg]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[INDEX|FinWiki index]]

## 出典

- ISDA: マスター契約、CDS 定義集、決定委員会の公開資料。
- 金融庁: 2008  後のデリバティブ規制、清算義務のガイダンス、フォローアップの審議会資料。
- JSCC: CDS 清算サービスの概要およびメンバーリスト。
- ICE: Clear Credit のプロダクトリストおよび清算会員。
- IHS Markit / S&P Global: iTraxx Japan 指数の方法論およびロールカレンダー。
- BIS: CDS を地域別に含む半年ごとの店頭デリバティブ統計。
- 日本銀行: 日本のクレジット資金調達およびベーシスに関連する市場統計。
- JSDA: 会員企業の規制および市場構造に関する資料。
