---
source: derivatives/japan-cds-market-overview
source_hash: 13454e3cba9010d1
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本 CDS 市場概観"
translated_at: 2026-06-26T08:29:25.267Z
---

# 日本 CDS 市場概観

## TL;DR

日本のクレジット・デフォルト・スワップ (CDS) 市場は、グローバルなクレジット・デリバティブ世界の小さいながら構造的に重要な一角である。支配的なインデックス参照は **iTraxx Japan** であり、これは 6 ヶ月ごとにロールされる 50 の投資適格日本企業名をカバーする IHS Markit / S&P Global のベンチマークである。シングルネーム CDS の活動は、オフショア投資家やヘッジファンドの関心を持つ日本のブルーチップ・クレジット — メガバンク、大手保険、商社、自動車、エレクトロニクス、通信 — に集中する。ディーラー陣は [[securities-firms/goldman-sachs-japan|Goldman Sachs Japan]]、JPMorgan 東京、[[securities-firms/morgan-stanley-japan|Morgan Stanley Japan]]、[[securities-firms/nomura-hd|Nomura]]、BNP Paribas、および少数の欧米ディーラーが支配している。清算は、円建てインデックス CDS については **JSCC**、オフショア清算エクスポージャーについては **ICE Clear Credit** (および歴史的には LCH) に分かれる。CDS-JGB / CDS-社債のベーシスは構造的に狭いが、日銀の政策変更、ディーラーのバランスシート縮小、グローバルなクレジットストレスの前後でエピソード的にボラタイルとなる。

## Wiki route

本エントリは、日本クレジット・デリバティブ・サブドメインのルーティング・サーフェスとして [[derivatives/INDEX|derivatives index]] の下に位置する。シングルネームのプライシングレイヤーについては [[derivatives/cds-japan-corporate-spread-mechanics|Japan corporate CDS spread mechanics]]、アービトラージレイヤーについては [[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]]、より広範なレート・スワップの文脈については [[derivatives/japan-irs-market|Japan IRS market]]、ファンディングカーブの相互作用については [[derivatives/yen-basis-swap-market|yen basis swap market]]、日本の機関投資家のバランスシートを支配する米ドル・ファンディングのオーバーレイについては [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]] と併せて読むこと。

発行体側では、コーポレート・クレジットのアンカーページは [[finance/INDEX|finance index]]、[[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]]、[[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]] である。ユーザー側では、[[banking/INDEX|banking index]] と [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]] がクレジットヘッジツールに対するメガバンク / 保険の需要を枠組みづける。[[securities/japan-prime-brokerage-and-institutional-financing|prime 証券仲介 and institutional financing]] は、シングルネーム CDS の流動性を支えるディーラー対ヘッジファンドのプラミングを枠組みづける。

### プロダクト分類

| プロダクト | 説明 | 典型的なユーザー |
|---|---|---|
| iTraxx Japan インデックス CDS | 取引可能な 50ネームの投資適格日本バスケット、5Y ベンチマーク、半年ごとのロール | マクロファンド、ディーラー、ETF / ポートフォリオヘッジャー |
| 日本ブルーチップのシングルネーム CDS | 個別の日本上場企業に対するバイラテラル CDS | クレジットファンド、ストラクチャード商品の発行体、ディーラー |
| iTraxx Japan トランシェ | インデックスに対するシンセティック CDO 型トランシェ (2008以降は流動性が低い) | スペシャリスト・クレジットファンド、ディーラー |
| 日本ソブリン CDS | 日本国リスクに対する CDS; G7 ピアに比べ活動は控えめ | ソブリンリスクファンド、マクロヘッジャー |
| クアント CDS (円クレジットに対する米ドル建て) | 円建ての参照債務を持つ米ドル建て CDS | FX エクスポージャーをヘッジするオフショア投資家 |
| ローン CDS (LCDS) | シンジケートローンを参照とする CDS; 日本での活動は極めて限定的 | スペシャリティ・ローン・クレジットファンド |

群を抜いて支配的なボリュームは **iTraxx Japan インデックス CDS** (5Y オンザラン・シリーズ) と、最もグローバルにフォローされる名前に対するシングルネーム活動の薄いテールにある。

### iTraxx Japan の構成

iTraxx Japan は、最も流動的な 50 日本に所在する投資適格社債 CDS 参照から IHS Markit / S&P Global によって構成される。構成は、インデックスロール (3 月 / 9 月) 時に 6 ヶ月ごとにレビューされ、構成銘柄は均等にウェイトづけられる。

| セクター・クラスター | 代表的な名前 |
|---|---|
| メガバンク / 金融グループ | [[megabanks/mufg|MUFG]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]] (SMFG 経由)、[[megabanks/mizuho-bank|Mizuho]] (Mizuho FG 経由) |
| 保険 | Tokio Marine、Sompo、MS&AD |
| 商社 (総合商社) | Mitsubishi Corp、Mitsui & Co、Itochu、Sumitomo Corp、Marubeni |
| 自動車 | Toyota、Honda、Nissan |
| エレクトロニクス / 産業 | Sony、Panasonic、Hitachi、Mitsubishi Electric |
| 通信 / 公益 | NTT、KDDI、[[megabanks/mufg|SoftBank Group]] (含まれる場合)、TEPCO、Tokyo Gas |
| 不動産 | Mitsubishi Estate、Mitsui Fudosan、Sumitomo Realty |
| 消費 / 小売 | Seven & I、Aeon (含まれる場合)、Fast Retailing |

各ロールでは、流動性と格付け基準に基づき少数の構成銘柄ローテーションが発生する。前シリーズはレガシーヘッジ向けに引き続き取引可能だが、流動性は新しいオンザラン・シリーズに急速に移行する。

### シングルネーム CDS のカバレッジ日本におけるシングルネーム CDS の流動性は、国際的にフォローされる一握りのクレジットに集中する:

| ティア | 例 | 流動性の特徴 |
|---|---|---|
| ティア 1 (最も流動的) | MUFG、SMFG / SMBC、Mizuho、Nomura、SoftBank Group、Toyota Motor | 5+ ディーラーがクォート、両建てフロー、狭いビッド・アスク |
| ティア 2 (中程度) | Sony、Hitachi、Mitsubishi Corp、Mitsui & Co、Itochu、NTT、KDDI | 3-5 ディーラーがクォート、エピソード的なフロー |
| ティア 3 (薄い) | 中堅産業、二番手金融、公益 | 要求に応じてクォート、広いビッド・アスク、ディーラーのバランスシート次第 |

[[megabanks/mufg|MUFG]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]] (SMFG 経由)、[[megabanks/mizuho-bank|Mizuho]] (Mizuho FG 経由) は、最もグローバルに取引される日本金融 CDS である。[[securities-firms/nomura-hd|Nomura]] は、最も活発に取引される日本のブローカー・ディーラー CDS である。**SoftBank Group** は、そのレバレッジ・プロファイル、M&A ボラティリティ、ビジョンファンドの時価評価感応度により、一貫して最も活発に取引される日本の非金融 CDS である。

### ディーラー陣

| ディーラー | 役割 |
|---|---|
| [[securities-firms/goldman-sachs-japan|Goldman Sachs Japan]] | インデックスおよびティア-1 シングルネームにおけるトップティアのマーケットメーカー |
| JPMorgan 東京 | 特に保険・金融クレジットにおけるトップティアのマーケットメーカー |
| [[securities-firms/morgan-stanley-japan|Morgan Stanley Japan]] | 特にテクノロジー・消費クレジットにおけるトップティアのマーケットメーカー |
| [[securities-firms/nomura-hd|Nomura]] | 主導的な国内ディーラー、大規模なインデックスブック、シングルネームのプレゼンス |
| BNP Paribas 東京 | 日本クレジットにおける主要な欧州マーケットメーカー |
| Citi Japan | 特に金融における主要な米国マーケットメーカー |
| Barclays / Deutsche Bank 東京 | 中堅のプレゼンス、セクターにより変動 |
| MUFG / MUMSS、SMBC Nikko、Mizuho Securities | トップティアのマーケットメーカーというより、プライステイカー / ポートフォリオヘッジャーとして活動する国内銀行 |

[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/daiwa-sg|Daiwa]]、Mizuho Securities は歴史的にシングルネーム CDS に参加していたが、2008 以降の規制・資本の変更を受けて、活発なディーラー・マーケットメーキングの役割から後退した。国内メガバンクグループは、ディーラー・マーケットメーカーというより、ポートフォリオヘッジ目的 (自社クレジットヘッジ、ソブリンベーシスヘッジ) の大口カウンターパーティであり続けている。

### 想定元本残高国際決済銀行 (BIS) は、参照エンティティ地域別のグローバル CDS 想定元本残高に関する半期統計を公表している。日本の参照エンティティ CDS は小さなシェア — 典型的にはグローバルなシングルネーム CDS 想定元本の 2-4 パーセント、インデックス CDS 想定元本も同程度のシェア — を占め、米ドルおよびユーロ市場を大きく下回る。

日本国内では、インデックス CDS が想定元本でドミネートする (マクロヘッジと ETF レプリケーションのフローによる) 一方、シングルネーム CDS が顧客の多様性でドミネートする (ストラクチャード商品の発行と特異的なクレジットヘッジによる)。

### 清算インフラ日本の CDS 清算は二分される:

| ベニュー | カバレッジ | 通貨 | メンバー基盤 |
|---|---|---|---|
| **JSCC CDS 清算** | iTraxx Japan インデックスシリーズ、適格な日本シングルネーム CDS | 円建て取引 | 日本のディーラー、外銀東京支店 |
| **ICE Clear Credit** | グローバル iTraxx インデックススイート (iTraxx Japan を含む)、広範なシングルネームセット | マルチカレンシー | 最も活発な日本 CDS マーケットメーカーを含むグローバル・ディーラー陣 |
| **LCH CDSClear** | 再編後はプレゼンス縮小; 歴史的には欧州インデックスを清算 | マルチカレンシー | 欧州ディーラー; 日本エクスポージャーは少ない |

[[banking/INDEX|JSCC]] (Japan Securities Clearing Corporation、JPX の一部) は、国内ディーラーの活動をオンショア化し、クロスボーダー集中リスクを低減するために CDS 清算を立ち上げた。ICE Clear Credit は、そのスケール、マルチプロダクトのマージン・オフセット、グローバル・ディーラー・メンバーシップを背景に、クロスボーダーの日本 CDS フローの支配的なベニューであり続けている。

CFTC の清算義務、ならびに日本 (FIEA)、EU (EMIR)、英国 (UK EMIR) の同等のレジームは、ほとんどのディーラー間取引を中央清算へと駆り立てる。バイサイドの顧客は、直接のメンバーシップではなく、ディーラー・クライアント (クライアント・クリアリング取り決め) を通じて清算する。

### CDS スプレッドのクォーティング

| コンベンション | 詳細 |
|---|---|
| クォーティングベース | 想定元本に対する年率ベーシスポイントのランニングスプレッド |
| 支払頻度 | 四半期ごと、ACT/360 日数計算 |
| 標準満期 | 5Y ベンチマーク; フルカーブは典型的に 1Y / 3Y / 5Y / 7Y / 10Y |
| クーポンコンベンション | 標準化された「スモールバン」クーポン (ほとんどの名前で 25, 100, 500, 1000 bps)、スプレッド対クーポンを調整するためのアップフロント支払を伴う |
| 回収率 | 標準化された前提 (典型的にシニア無担保社債で 40 パーセント、劣後で 25 パーセント) |
| ドキュメンテーション | ISDA マスター契約 + CDS 確認書; 2014 ISDA クレジット・デリバティブ・デフィニション |

5Y オンザラン CDS スプレッドは、日本のクレジットリスクについて最も注視される単一の数値である。5Y CDS-債券ベーシス ([[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]] で記述) が主要なアービトラージシグナルである。

### CDS カーブの形状

ほとんどの投資適格日本社債 CDS カーブは右肩上がりであり (1Y < 3Y < 5Y < 10Y)、より長いホライズンにわたるより高い累積デフォルト確率を反映する。逆イールドのカーブは、ディストレストな金融や最もレバレッジの高い非金融でエピソード的に見られたように、近い将来のディストレスに対する市場の期待をシグナルする。

### インデックスロールのメカニクス

| ステージ | 活動 |
|---|---|
| T-30 | IHS Markit が暫定的な新シリーズ構成銘柄を公表 |
| T-15 | 最終的な構成銘柄リストが確定; ウェイト設定 |
| T-1 | ロール前の旧シリーズ最終取引日 |
| T (半年ごと: 20 3 月、20 9 月) | 新シリーズがオンザランに; 旧シリーズがオフザランに |
| T+5 から T+30 | 流動性移行が完了; オフザラン・シリーズがオンザランに対してワイドニング |

ロールベーシス (連続するシリーズ間のスプレッド差) は、構成銘柄のクレジット品質の変化とロール時の需給を反映する。アービトラージファンドとディーラーのトレーディングデスクはロール前後でポジションを取る。

### カウンターパーティのタイプ

| カウンターパーティ | ユースケース |
|---|---|
| マクロヘッジファンド | クレジットのリスクオン / リスクオフのポジショニングのためのアウトライト・インデックス CDS |
| クレジットヘッジファンド | レラティブバリュー、ベーシストレード、資本構成アービトラージのためのシングルネーム CDS |
| バンク・ディーラー・デスク | マーケットメーキング、プロップ・ポジショニング、ストラクチャード商品のヘッジ |
| 保険・年金 | ポートフォリオ・オーバーレイ・ヘッジ、ESR 感応度管理 — [[insurance/japan-life-insurance-alm-overview|Japan life ALM]] 参照 |
| 事業会社財務 | 自社名ヘッジはあまり一般的でない; FX 連動エクスポージャーに対するソブリン / セクターヘッジ |
| ストラクチャード商品の発行体 | クレジット・リンク・ノート (CLN) のヘッジと、リテール / 機関投資家のバイヤーに移転されるシンセティック・エクスポージャー |
| 政府系ファンド | 日本ソブリンおよび IG バスケットに対するタクティカルなマクロ / クレジットのポジショニング |

[[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]] は、生命保険会社が原則としてクレジットスプレッドヘッジに CDS を使用し得ることをフラグするが、ESR 下の規制上の取扱いや JGAAP・IFRS 9 下の会計ルールが広範な使用を制約する。

### ドキュメンテーション

| ドキュメント | 目的 |
|---|---|
| ISDA マスター契約 | デリバティブのバイラテラル・フレームワーク |
| スケジュールおよびクレジット・サポート・アネックス (CSA) | 担保条件、閾値、MTA、適格担保 |
| ISDA クレジット・デリバティブ・デフィニション (2014) | 標準化された CDS 契約条件、クレジットイベント、決済 |
| 確認書 | 取引固有の条件 (参照エンティティ、想定元本、満期、クーポン、支払日) |
| DTCC Deriv/SERV | 取引マッチングとレポーティングのインフラ |

2014 ISDA クレジット・デリバティブ・デフィニションは、2003 デフィニションを置き換え、政府介入とベイルインのクレジットイベントの取扱いを標準化したものであり、2008 危機と欧州銀行破綻処理のケース後に特に重要となった。

## 直近の市場構造の変化

| 期間 | 進展 |
|---|---|
| 2008-2010 | リーマン後のクリーンアップ、「ビッグバン」「スモールバン」CDS 標準化、ISDA 決定委員会の創設 |
| 2010-2015 | 中央清算への移行 (JSCC 立ち上げ、ICE Clear Credit のドミナンス)、Dodd-Frank / EMIR / JFSA の清算義務 |
| 2014 | 政府介入クレジットイベントを含む新 ISDA クレジット・デリバティブ・デフィニション |
| 2015-2020 | 日本を含む多くの市場でのシングルネーム CDS 流動性の縮小; インデックス CDS はレジリエント |
| 2020-Q1 | COVID クレジットスプレッドのブローアウト; 投資適格日本全体での CDS ベーシスのディスロケーション |
| 2022-2023 | 日銀のイールドカーブコントロール調整が金融の CDS スプレッド変動をエピソード的に引き起こす |
| 2024-2025 | シングルネームの薄いボリュームが継続; グローバルな銀行ストレスのエピソード中、日本金融 CDS への選択的な関心 |

## Related

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

## Sources

- ISDA: Master Agreement, CDS Definitions, Determinations Committee public materials.
- FSA: post-2008 derivatives regulation, clearing mandate guidance, follow-up council materials.
- JSCC: CDS clearing service overview and member list.
- ICE: Clear Credit product list and clearing membership.
- IHS Markit / S&P Global: iTraxx Japan index methodology and roll calendar.
- BIS: semi-annual OTC derivatives statistics including CDS by region.
- BOJ: market statistics relevant to Japan credit funding and basis.
- JSDA: member-firm regulatory and market structure materials.
