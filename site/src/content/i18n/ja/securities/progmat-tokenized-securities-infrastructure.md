---
source: securities/progmat-tokenized-securities-infrastructure
source_hash: 58e98ac0ea18bcfc
lang: ja
status: machine
fidelity: ok
title: "Progmat トークン化証券インフラ"
translated_at: 2026-06-03T00:53:08.355Z
---
# Progmat トークン化証券インフラ

## ウィキ上の位置づけ

このページは[[securities/INDEX|securities index]]の中に置かれる、取引場所側の[[securities/odx-start-stb-secondary-market|ODX START security token secondary market]]ページおよび経路レベルの[[securities/japan-security-token-secondary-market-route|Japan security token secondary market route]]ページに対するプラットフォーム側の対応項目である。現物株式との対比は[[securities/japan-market-infrastructure-map|Japan market infrastructure map]]、参加証券会社の免許側チェックは[[securities/financial-instruments-business-operators-japan-index|FIEA operator registry]]、ファンド組み込みの問いは[[securities/japan-asset-manager-landscape-matrix|asset manager landscape matrix]]と合わせて読む。クロスドメインの橋渡しは[[fintech/jp-stablecoin-progmat|Progmat stablecoin route]]である。Progmat Coin（トークン化預金 / ステーブルコイン）は Progmat ST の資金決済側の相棒だからである。

## 要約

Progmat は Progmat Inc.（株式会社Progmat）が運営する日本のトークン化プラットフォームである。[[megabanks/mizuho-fg|Mizuho]]に隣接し MUFG が主導した信託銀行トークン化業務からスピンアウトしたもので、中核となる Progmat ST インフラは[[trust-banks/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust and Banking]]内で生まれ、その後、複数銀行株主を持つ独立会社となった。トークン化された信託受益権（ST）、トークン化預金 / ステーブルコイン（Progmat Coin / Progmat UT）、およびその後[[securities/osaka-digital-exchange|Osaka Digital Exchange]] START 二次市場で取引されるセキュリティトークン向けの発行・ライフサイクル管理インフラを提供する。公開 Progmat 資料は、国内市場で累積 ST 発行残高が相応に大きくなっており、Progmat が取り扱った案件が過半のシェアを占めることを示している。競合プラットフォームには、BOOSTRY（Nomura 主導で、ST 発行支援にも位置づけられる）と ibet for FIN（コンソーシアム型プラットフォーム）がある。この三者は、[[securities/japan-security-token-secondary-market-route|ST secondary market routes]]の ST 発行体側の背後にある日本の ST 発行プラットフォーム三角形を形成している。

## プラットフォームのアイデンティティ

| 項目 | 公開情報上の読み方 |
|---|---|
| 運営主体 | 株式会社Progmat（Progmat Inc.） |
| 起源 | [[trust-banks/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust and Banking]]のトークン化業務からスピンアウト。より広い銀行 / 証券会社株主を持つ独立会社へ移行。 |
| 株主系譜 | MUFG グループ各社がアンカー。ラウンドにより日本のメガバンク、信託銀行、証券会社、IT プラットフォーム株主が追加される。最新の cap table は Progmat IR / ニュースで確認する。 |
| プラットフォーム商品 | Progmat（ST — セキュリティトークン発行 / ライフサイクル）、Progmat Coin（SC — ステーブルコイン / トークン化預金）、Progmat UT（ユーティリティトークン）。 |
| 基盤技術 | 信託銀行カストディ統合を伴う DLT ベースのトークン化。具体的なチェーン選択とバージョンは進化する。 |
| 規制上のアンカー | ST 側は FIEA のトークン化証券範囲。SC 側は資金決済法 / 銀行法との隣接領域。 |
| 二次市場との相互作用 | ST 銘柄は TSE 上場ではなく、[[securities/osaka-digital-exchange|ODX]] START と JSDA の非上場 PTS 枠組みを通じて流通する。 |

この市場では cap table 変更、リブランディング、商品ラインの整理が起こる。ガバナンスの具体事項を引用する前に、常に Progmat の現行サイトで確認する。

## トークン化プラットフォームが存在する理由

現物株式、社債、従来型投資信託には、すでに発行、移転、決済の発達したインフラ（[[securities/tokyo-stock-exchange|TSE]]、[[securities/japan-securities-clearing-corp|JSCC]]、[[securities/japan-securities-depository-center|JASDEC]]、信託銀行）がある。トークン化プラットフォームが存在する理由は以下の通りである。

1. **信託資産の受益権**は、歴史的には紙ベースまたは低頻度移転の資産だったが、トークン化により二次流動性、より速い移転、プログラム可能な分配、より広い投資家リーチを可能にできる。
2. **上場範囲外の資産クラス** — 小口不動産信託、ストラクチャード債の受益権、私募ファンド持分 — は、TSE 上場の費用や開示負担なしに電子記録移転権利として発行され、ST PTS で取引され得る。
3. **プログラム可能なコーポレートアクション** — 配当 / クーポン / 償還の分配をトークン契約ロジック上で自動化し、業務コストを下げられる。
4. **クロスボーダー投資家オンボーディング** — KYC / 特定投資家コントロールを伴う DLT 記録管理は、原理的には FIEA の制約内でクロスボーダー販売を簡素化し得る（実務上はなお大きく制約される）。
5. **トークン化された資金決済側との収斂** — Progmat Coin / DCJPY / 民間トークン化預金と組み合わせることで、同一レールまたは近接レールでの決済が可能になる。

日本のアーキテクチャ上の選択は、信託銀行を ST インフラに深く統合することであり、信託銀行を中抜きすることではない。信託銀行が裏付け資産の権利を保有し、トークン化受益権の法的強制可能性を確保する。これは、信託銀行の介在なしに SPV / qualified-custodian モデルに依拠することが多い米国や EU のトークン化アーキテクチャとは構造的に異なる。

## Progmat ST 商品アーキテクチャ

| レイヤー | 機能 |
|---|---|
| 発行体 | 裏付け資産（例: 不動産保有、債券ポートフォリオ、ファンド持分）を組成する。 |
| 信託銀行 | 信託契約に基づき裏付け資産を保有し、信託受益権を発行する。多くの Progmat 構造では MUFG Trust または他の参加信託銀行が担う。 |
| Progmat プラットフォーム | トークン化された信託受益権を DLT 上に記録し、移転、ライフサイクルイベント、KYC / 適合性コントロールとの統合を管理する。 |
| 証券会社 | トークン化証券販売範囲を持つ第一種金融商品取引業者。一次販売と ODX START への二次市場ルーティングを担う。 |
| 投資家 | 特定投資家、または商品構造によっては FIEA / JSDA ルールに基づくより広い投資家範囲。 |
| 資金決済側提供者 | 法定通貨側は信託銀行 / 銀行振込。将来は Progmat Coin または DCJPY によるトークン化預金側との統合可能性。 |

この五層アーキテクチャが、日本における ST 発行の市場投入時間が通常の現物株式の一次発行より長く、信託介在を迂回する米国 Reg D 型の私募トークン化より遅い構造的理由である。

## Progmat Coin / SC レイヤー

Progmat Coin（ステーブルコイン / トークン化預金の商品レイヤー）は、ST レイヤーの資金決済側の相棒として公開説明されている。ST 決済における関連性は以下の通り。

- ST 取引の資金側は、現時点の本番トラフィックの大半で従来型の円決済（信託銀行 / 銀行振込）を使う。
- トークン側と資金側のアトミック DvP には、(a) 規制銀行が発行するトークン化預金、(b) DCJPY 型の二層デジタル通貨、または (c) FIEA / 資金決済法改正に基づく規制ステーブルコインが必要である。
- Progmat Coin は、DCJPY や銀行固有のトークン化預金実験と並ぶ候補となる資金決済レールの一つに位置づけられている。
- クロスドメインページ[[fintech/jp-stablecoin-progmat|Progmat stablecoin route]]が、SC 側のアーキテクチャと規制上の位置づけを詳述する。

証券領域の読者にとっての要点は、Progmat の ST 業務と Progmat の SC 業務は組み合わせるよう設計されている、ということである。アトミック DvP はアーキテクチャ上の長期目標として掲げられているが、短期の本番フローはなお従来型の資金決済を使う。

## Progmat vs BOOSTRY vs ibet for FIN

日本の ST 発行プラットフォームは、株主基盤と商品志向が異なる三極構造に落ち着いている。

| プラットフォーム | 運営主体 | アンカー / 系譜 | 志向 |
|---|---|---|---|
| Progmat | Progmat Inc. | MUFG グループ起源。複数銀行株主 | 信託受益権 ST + Progmat Coin / SC 統合。銀行主導エコシステム。 |
| BOOSTRY | BOOSTRY Co., Ltd. | [[securities-firms/nomura-hd|Nomura HD]] / [[financial-regulators/japan-exchange-group|JPX]] / SBI / その他が各ラウンドで公開投資 | 証券会社主導エコシステム。歴史的には社債とデジタル債に焦点。ibet ネットワーク運営者。 |
| ibet for FIN | コンソーシアム型プラットフォーム。BOOSTRY と連携して運営 | 複数社コンソーシアム | 広い金融業界参加を伴う ST 記録管理のセクターユーティリティ的枠組み。 |

具体的な競争上の特徴（変更の可能性あり）は以下の通り。

- **Progmat の銀行側の強み。** 信託銀行統合が構造的により緊密であり、Progmat Coin との資金決済側統合は、証券会社主導プラットフォームが銀行提携なしには模倣しにくい差別化要素である。
- **BOOSTRY の証券側の強み。** Nomura 販売網および JPX 隣接との結び付きが近い。2023 年には JPX が BOOSTRY への出資とセキュリティトークン事業提携を公表した。
- **ibet for FIN の中立ユーティリティ的枠組み。** より広いコンソーシアム向けに、発行体やプラットフォームに依存しない記録管理を提供する設計であり、単一企業依存への懸念を下げる。
- **クロスプラットフォーム相互運用性。** 三つのプラットフォームはいずれも最終的に、二次取引のために[[securities/odx-start-stb-secondary-market|ODX START]]へ流れる ST 銘柄を生む。ODX の参加者ユニバースは複数プラットフォーム由来の ST を見ており、それに応じて統合する必要がある。

分析者にとっての適切な枠組みは、日本の ST 発行はプラットフォームレイヤーでは winner-take-all ではなく、二次取引は現時点で取引場所レイヤー（START）に winner-take-most で集中している、というものである。

## 公開されている規模シグナル

Progmat の公開コンセプトページのソースパックから、以下の市場規模フィールドが開示されている（スナップショット値。時間に敏感な利用では表示ページの日付を確認する）。

| フィールド | 報告値 |
|---|---|
| 国内累計セキュリティトークン案件数 | 87 |
| Progmat 取扱累計案件数 | 45 |
| 国内 ST 残高 | JPY 667.4 billion 超 |
| Progmat 取扱 ST 残高 | JPY 452.2 billion 超 |

これらの数値は、(a) 日本の ST 発行市場が兆円規模ではなく、まだ数千億円規模の初期段階にあること、(b) 報告スナップショット上、Progmat が発行済み ST 残高の概ね過半シェアを持つことを示している。どちらの比率も変動するため、スナップショットを無期限にキャッシュするのではなく、常に Progmat 公開ページと照合する。

## 対応する発行体 / 資産クラス

| 資産クラス | 公開事例（案件ごとに確認） |
|---|---|
| トークン化不動産受益権 | 不動産信託の信託受益権。Progmat は複数の住宅 / 商業物件構造をホストしている。 |
| トークン化デジタル債 | Progmat / 提携銀行インフラを使う金融機関発行体による発行。 |
| トークン化投資信託型受益権 | FIEA / JSDA 範囲で支えられる場合。 |
| クロスセクターおよびインフラ資産 ST | 新しいセクターが定期的な発表で追加される。 |

各 ST 銘柄には、発行体、信託銀行、販売参加者、適格性、決済、ライフサイクル条件を含む銘柄別の開示パックがある。プラットフォームは投資家開示の源泉ではなく、記録管理レールである。

## 規制および自主規制のアンカー

| レイヤー | 役割 |
|---|---|
| FSA | トークン化証券販売範囲を持つ FIBO を認可し、信託銀行の役割を監督する。ST 流通に対応する2022-06-22 Market System Working Group interim report を公表。 |
| JSDA | 自主規制機関。トークン化証券を含む非上場証券の PTS ルールを作成し、ODX START が使う `unlisted approved PTS issue` の範囲を定義する。 |
| 信託銀行監督 | 裏付け資産を保有する信託銀行は、FIEA のトークン化証券ルールに加え、信託銀行規制の対象である。 |
| 資金決済 / 銀行 | Progmat Coin / SC 側は資金決済法 / 銀行法改正のもとで規制される。厳密な ST 証券経路の外側だが、DvP にはアーキテクチャ上関連する。 |

## 現物株式インフラとの比較

| 次元 | 現物株式（TSE） | ST（Progmat / BOOSTRY / ibet → START） |
|---|---|---|
| 一次発行 | 証券会社を通じた引受、TSE 上場審査、広い個人投資家アクセス | 信託銀行介在、FIEA のトークン化証券範囲、特定投資家比重が高い |
| 二次市場 | TSE + PTS（Japannext、Cboe Japan、ODX equity） | 主に ODX START |
| 清算 | [[securities/japan-securities-clearing-corp|JSCC]] | トークンプラットフォーム移転 + 信託 / カストディ当事者。資金は標準レール |
| 決済 | [[securities/japan-securities-depository-center|JASDEC]]振替制度 | トークンプラットフォーム記録。DvP 設計は開発中 |
| 開示強度 | 高い（TDnet、EDINET、四半期 / 年次 filings） | 低い。銘柄別商品開示 + 信託書類 |
| ライフサイクルイベント | 標準的なコーポレートアクション・インフラ | トークン契約ロジック上でプログラム可能 |
| クロスボーダー投資家リーチ | 成熟 | FIEA 範囲と参加者方針により制約 |

## 歴史スケッチ

- **2020以前** — MUFG Trust の初期トークン化研究、トークン化証券に関する JSDA / FSA の概念整理。
- **2020-2022** — Mitsubishi UFJ Trust Bank 主導プラットフォームとして Progmat ブランドを開始。Progmat ホストの初期 ST 発行案件。
- **2022-06-22** — FSA Market System Working Group interim report が PTS を通じた ST 流通に対応。
- **2023** — Progmat Inc. が複数銀行株主構造を持つ独立運営会社として設立。JPX が BOOSTRY への出資と ST 提携を公表。
- **2023-12-25** — ODX START 二次市場が開始し、Progmat ホスト ST 銘柄の取引場所側を提供。
- **2024-2026** — ST 発行は継続的に成長。Progmat コンセプトページに公表された累計件数と残高はこの成長を反映する。

## 関連項目

- [[securities/INDEX]]
- [[securities/osaka-digital-exchange]]
- [[securities/odx-start-stb-secondary-market]]
- [[securities/japan-security-token-secondary-market-route]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japannext-securities]]
- [[securities/japannext-sor-routing-deep-dive]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/tokyo-stock-exchange]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[payment-firms/progmat]]
- [[securities-firms/nomura-hd]]
- [[megabanks/sbi-hd]]
- [[financial-regulators/jsda]]
- [[financial-regulators/japan-exchange-group]]
- [[fintech/jp-stablecoin-progmat]]
- [[INDEX|FinWiki index]]

## 出典

- Progmat Inc., public concept page, news page, and corporate site.
- MUFG corporate news pages and Mitsubishi UFJ Trust and Banking corporate trust products page.
- FSA, Market System Working Group 2022-06-22 interim report.
- JSDA, unlisted-securities PTS self-regulatory rules.
- ODX, START launch announcement (2023-12-25).
- JPX, BOOSTRY investment and security-token business alliance announcement (2023-03-30); digital-bond / ST-related news.
