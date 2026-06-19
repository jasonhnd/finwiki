---
source: securities/progmat-tokenized-securities-infrastructure
source_hash: 8b44c43aee6ec1e0
lang: ja
status: machine
fidelity: ok
title: "Progmat トークン化証券インフラ"
translated_at: 2026-06-19T12:43:19.884Z
---

# Progmat トークン化証券インフラ

## Wiki ルート

本ページは [[securities/INDEX|securities index]] の内部に、会場側の [[securities/odx-start-stb-secondary-market|ODX START security token secondary market]] ページおよびルートレベルの [[securities/japan-security-token-secondary-market-route|Japan security token secondary market route]] ページのプラットフォーム側コンパニオンとして位置づけられる。現物株との対比として [[securities/japan-market-infrastructure-map|Japan market infrastructure map]]、参加証券会社の免許側チェックとして [[securities/financial-instruments-business-operators-japan-index|FIEA operator registry]]、ファンドラッピングの問題として [[securities/japan-asset-manager-landscape-matrix|asset manager landscape matrix]] と併せて読むこと。クロスドメインの架け橋は [[fintech/jp-stablecoin-progmat|Progmat stablecoin route]] である。なぜなら Progmat Coin（トークン化預金 / ステーブルコイン）は Progmat ST のキャッシュレッグのコンパニオンだからである。

## TL;DR

Progmat は株式会社 Progmat（株式会社Progmat）が運営する日本のトークン化プラットフォームであり、[[megabanks/mizuho-fg|Mizuho]] 隣接かつ MUFG 主導の信託銀行トークン化作業からスピンアウトした（中核となる Progmat ST インフラは、複数銀行株主を持つ独立企業になる前に [[trust-banks/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust and Banking]] 内部で生まれた）。トークン化された信託受益権（ST）、トークン化預金 / ステーブルコイン（Progmat Coin / Progmat UT）の発行およびライフサイクルインフラと、その後 [[securities/osaka-digital-exchange|Osaka Digital Exchange]] START 流通市場で取引されるセキュリティトークンのためのプラットフォームインフラを提供する。公開された Progmat 資料は、国内市場全体にわたる重要な ST 累積発行残高を報告しており、Progmat が取り扱った案件が過半数シェアを形成している。競合プラットフォームには BOOSTRY（野村主導、ST 発行支援にも位置づけ）と ibet for FIN（コンソーシアム・プラットフォーム）が含まれる。これら 3 つが、[[securities/japan-security-token-secondary-market-route|ST secondary market routes]] の ST 発行体側の背後に位置する日本の ST 発行プラットフォームの三角形を形成する。

## プラットフォーム・アイデンティティ

| フィールド | 公開された読み |
|---|---|
| 運営主体 | 株式会社Progmat（Progmat Inc.） |
| 起源 | [[trust-banks/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust and Banking]] のトークン化作業からスピンアウト；より広範な銀行 / 証券会社株主を持つ独立企業へ移行。 |
| 株主系譜 | アンカーとしての MUFG グループ各社；ラウンドに応じて追加の日本のメガバンク、信託銀行、証券会社、IT プラットフォーム株主。現在の資本構成は Progmat IR / ニュースで確認すること。 |
| プラットフォーム商品 | Progmat（ST — セキュリティトークン発行 / ライフサイクル）；Progmat Coin（SC — ステーブルコイン / トークン化預金）；Progmat UT（ユーティリティトークン）。 |
| 基盤技術 | 信託銀行カストディ統合を伴う DLT ベースのトークン化；具体的なチェーン選択とバージョンは進化する。 |
| 規制アンカー | ST 側の FIEA トークン化証券スコープ；SC 側の資金決済法 / 銀行法の隣接。 |
| 流通会場との相互作用 | ST 発行は TSE 上場ではなく [[securities/osaka-digital-exchange|ODX]] START と JSDA 非上場 PTS フレームワークを通じて流通する。 |

資本構成の変更、リブランディング、商品ライン合理化はこの市場で発生する；ガバナンスの詳細を引用する前に常に Progmat の現行サイトで確認すること。

## なぜトークン化プラットフォームが存在するのか

現物株、社債、従来型の投資信託は、すでに十分に発達した発行、移転、決済インフラを持つ（[[securities/tokyo-stock-exchange|TSE]]、[[securities/japan-securities-clearing-corp|JSCC]]、[[securities/japan-securities-depository-center|JASDEC]]、信託銀行）。トークン化プラットフォームが存在するのは以下の理由による：

1. **信託資産における受益権** — 歴史的に紙ベースまたは低頻度移転であったものをトークン化して、流通市場の流動性、より速い移転、プログラム可能な分配、より広範な投資家リーチを可能にできる。
2. **上場スコープ外の資産クラス** — 小口の不動産信託、仕組債受益権、私募ファンド持分 — を電子記録移転権利として発行し、TSE 上場のコスト / 開示の集約度なしに ST PTS で取引できる。
3. **プログラム可能なコーポレートアクション** — 配当 / クーポン / 償還の分配をトークンコントラクトのロジック上で自動化でき、運営コストを削減できる。
4. **クロスボーダー投資家オンボーディング** — KYC / 特定投資家コントロールを伴う DLT 記録保管は、原則として FIEA の制約内でクロスボーダー流通を簡素化できる（実務上は依然として有意に制約される）。
5. **トークン化キャッシュレッグ決済との収束** — Progmat Coin / DCJPY / 民間トークン化預金と組み合わせた場合の同一レール または準同一レール決済。

日本のアーキテクチャ上の選択は、信託銀行を中抜きするのではなく ST インフラに深く統合することであった；信託銀行が原資産権利を保有し、トークン化受益権の法的執行可能性を確保する。これは、信託銀行の仲介なしに SPV / 適格カストディアン・モデルにしばしば依存する米国や EU のトークン化アーキテクチャとは構造的に異なる。

## Progmat ST 商品アーキテクチャ

| レイヤー | 機能 |
|---|---|
| 発行体 | 原資産（例：不動産物件保有、債券ポートフォリオ、ファンド持分）を組成する。 |
| 信託銀行 | 信託契約の下で原資産を保有；信託受益権を発行；多くの Progmat 構造ではこれは MUFG 信託または他の参加信託銀行である。 |
| Progmat プラットフォーム | トークン化信託受益権を DLT 上に記録；移転、ライフサイクルイベント、KYC / 適合性コントロールとの統合を管理。 |
| 証券会社 | トークン化証券流通スコープを持つ第一種金融商品取引業者（FIBO）；プライマリー流通と ODX START への流通市場ルーティングを実行。 |
| 投資家 | 特定投資家、または一部の商品構造では FIEA / JSDA ルールに従ったより広範な投資家スコープ。 |
| キャッシュレッグ提供者 | フィアットレッグ用の信託銀行 / 銀行送金；トークン化預金レッグ用の Progmat Coin または DCJPY との将来的な統合の可能性。 |

この 5 層アーキテクチャは、日本における ST 発行のマーケット投入時間が典型的な現物株プライマリー発行よりも長く、信託の仲介をバイパスする米国の Reg D スタイルの私募トークン化よりも遅い構造的理由である。

## Progmat Coin / SC レイヤー

Progmat Coin（ステーブルコイン / トークン化預金の商品レイヤー）は、ST レイヤーのキャッシュレッグ・コンパニオンとして公的に説明されている。ST 決済における関連性：

- ST 取引のキャッシュレッグは現在、本番トラフィックの大半で従来型の円決済（信託銀行 / 銀行送金）を使用している。
- トークンレッグとキャッシュレッグ間のアトミック DvP には、(a) 規制された銀行が発行するトークン化預金、(b) DCJPY スタイルの二層デジタル通貨、または (c) FIEA / 資金決済法改定の下での規制されたステーブルコインのいずれかが必要である。
- Progmat Coin は、DCJPY および銀行固有のトークン化預金実験と並ぶキャッシュレッグレールの候補の 1 つとして位置づけられている。
- クロスドメインページ [[fintech/jp-stablecoin-progmat|Progmat stablecoin route]] は SC 側のアーキテクチャと規制上の位置づけを詳述している。

証券ドメインの読者にとっての要点は：Progmat の ST 作業と Progmat の SC 作業は構成されるよう設計されているということである。アトミック DvP はアーキテクチャの明示された長期目標である；近い将来の本番フローは依然として従来型のキャッシュレッグ決済を使用する。

## Progmat vs BOOSTRY vs ibet for FIN

日本の ST 発行プラットフォームは、それぞれ異なる株主支援と商品志向を持つ三極アーキテクチャに落ち着いている：

| プラットフォーム | 運営主体 | アンカー / 系譜 | 志向 |
|---|---|---|---|
| Progmat | Progmat Inc. | MUFG グループ起源；複数銀行株主 | 信託受益権 ST + Progmat Coin / SC 統合；銀行主導エコシステム。 |
| BOOSTRY | BOOSTRY Co., Ltd. | [[securities-firms/nomura-hd|Nomura HD]] / [[financial-regulators/japan-exchange-group|JPX]] / SBI / その他がラウンドにわたって公的に投資 | 証券会社主導エコシステム；歴史的に社債とデジタル債フォーカス；ibet ネットワーク運営者。 |
| ibet for FIN | コンソーシアム・プラットフォーム、BOOSTRY と協調して運営 | 複数社コンソーシアム | 広範な金融業界参加を伴う ST 記録保管のセクター・ユーティリティの枠組み。 |

具体的な競争上の特徴（変更の可能性あり）：

- **Progmat の銀行側の強み。** 信託銀行統合が構造的により緊密；Progmat Coin とのキャッシュレッグ統合は、証券会社主導プラットフォームが銀行パートナーシップなしには対抗できない差別化要因である。
- **BOOSTRY の証券側の強み。** 野村の流通と JPX 隣接へのより緊密な結合；2023  に JPX は BOOSTRY への投資とセキュリティトークン事業提携を公的に発表した。
- **ibet for FIN の中立ユーティリティの枠組み。** より広範なコンソーシアムのために発行体とプラットフォームに依存しない記録保管をホストするよう設計；単一社依存の懸念を低減。
- **クロスプラットフォーム相互運用性。** 3 つのプラットフォームはすべて最終的に [[securities/odx-start-stb-secondary-market|ODX START]] に流れて流通取引される ST 発行を生み出す；ODX 参加者の世界は複数プラットフォームからの ST を見て、それに応じて統合しなければならない。

アナリストにとって、正しい枠組みは：日本における ST 発行はプラットフォームレイヤーでは勝者総取りではない；流通取引はこれまでのところ会場レイヤー（START）で勝者総取りに近い、というものである。

## 公開された規模シグナル

Progmat 公開コンセプトページのソースパックから、以下の市場規模フィールドが開示されている（スナップショット値；時間に敏感な用途では表示ページの日付を確認すること）：

| フィールド | 報告値 |
|---|---|
| 国内累積セキュリティトークン案件数 | 87  |
| Progmat 取扱累積案件数 | 45  |
| 国内 ST 残高 | JPY 667.4  億超 |
| Progmat 取扱 ST 残高 | JPY 452.2  億超 |

これらの数値は、(a) 日本の ST 発行市場が兆円ではなく数千億円規模の初期段階にあること、(b) Progmat が報告スナップショットで発行済 ST 残高の概ね過半数シェアを保有していることを示している。両比率は変動する；スナップショットを無期限にキャッシュするのではなく、常に Progmat 公開ページに対して確認すること。

## 発行体 / サポートされる資産クラス

| 資産クラス | 公開事例（発行ごとに確認のこと） |
|---|---|
| トークン化不動産受益権 | 不動産信託における信託受益権；Progmat は複数の住宅 / 商業物件構造をホストしてきた。 |
| トークン化デジタル債 | Progmat / パートナー銀行インフラを使用した金融機関発行体による発行。 |
| トークン化投資信託型受益権 | FIEA / JSDA スコープでサポートされる場合。 |
| クロスセクトラルおよびインフラ資産 ST | 定期的な発表が新しいセクターを追加。 |

各 ST 発行には、発行体、信託銀行、流通参加者、適格性、決済、ライフサイクル条件をカバーする発行ごとの開示パックがある；プラットフォームは投資家開示の源泉ではなく記録保管レールである。

## 規制および自主規制のアンカー

| レイヤー | 役割 |
|---|---|
| FSA | トークン化証券流通スコープを持つ FIBO を認可；信託銀行の役割を監督；ST 流通に対処する 2022-06-22 市場制度ワーキンググループ中間報告を公表。 |
| JSDA | 自主規制機関；トークン化証券を含む非上場証券の PTS ルールを作成；ODX START が使用する `非上場承認 PTS 銘柄` スコープを定義。 |
| 信託銀行監督 | 原資産を保有する信託銀行は、FIEA トークン化証券ルールに加えて信託銀行規制の対象となる。 |
| 資金決済 / 銀行業 | Progmat Coin / SC 側は資金決済法 / 銀行法改定の下で規制される；厳格な ST 証券パスのスコープ外だが DvP にはアーキテクチャ上関連する。 |

## 現物株インフラとの比較

| 次元 | 現物株（TSE） | ST（Progmat / BOOSTRY / ibet → START） |
|---|---|---|
| プライマリー発行 | 証券会社経由の引受；TSE 上場審査；広範な個人アクセシビリティ | 信託銀行仲介；FIEA トークン化証券スコープ；特定投資家中心 |
| 流通会場 | TSE + PTS（Japannext、Cboe Japan、ODX 株式） | 主に ODX START |
| クリアリング | [[securities/japan-securities-clearing-corp|JSCC]] | トークンプラットフォーム移転 + 信託 / カストディ当事者；キャッシュは標準レール経由 |
| 決済 | [[securities/japan-securities-depository-center|JASDEC]] 振替 | トークンプラットフォーム記録；DvP 設計は開発中 |
| 開示の集約度 | 高い（TDnet、EDINET、四半期 / 年次提出） | より低い；発行ごとの商品開示プラス信託書類 |
| ライフサイクルイベント | 標準的なコーポレートアクション・インフラ | トークンコントラクトロジック上でプログラム可能 |
| クロスボーダー投資家リーチ | 成熟 | FIEA スコープと参加者ポリシーにより制約 |

## 歴史スケッチ

- **2020 前** — 初期の MUFG 信託トークン化研究、トークン化証券に関する JSDA / FSA の概念作業。
- **2020-2022** — 三菱 UFJ 信託銀行主導のプラットフォームとしての Progmat ブランドローンチ；最初の Progmat ホスト ST 発行案件。
- **2022-06-22** — PTS を通じた ST 流通に対処する FSA 市場制度ワーキンググループ中間報告。
- **2023** — 複数銀行株主構造を持つ独立運営企業として Progmat Inc. 設立；JPX が BOOSTRY への投資と ST 提携を公的に発表。
- **2023-12-25** — ODX START 流通市場がローンチ、Progmat ホスト ST 発行のための会場側を提供。
- **2024-2026** — ST 発行成長の継続；Progmat コンセプトページに公表された累積案件数と残高がこの成長を反映。

## 関連

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

- Progmat Inc.、公開コンセプトページ、ニュースページ、コーポレートサイト。
- MUFG コーポレートニュースページおよび三菱 UFJ 信託銀行コーポレートトラスト商品ページ。
- FSA、市場制度ワーキンググループ 2022-06-22 中間報告。
- JSDA、非上場証券 PTS 自主規制ルール。
- ODX、START ローンチ発表（2023-12-25）。
- JPX、BOOSTRY 投資およびセキュリティトークン事業提携発表（2023-03-30）；デジタル債 / ST 関連ニュース。
