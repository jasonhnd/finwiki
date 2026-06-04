---
source: securities/odx-start-stb-secondary-market
source_hash: 3d8d4b22d2c1f436
lang: ja
status: machine
fidelity: ok
title: "ODX STARTセキュリティトークン流通市場"
translated_at: 2026-06-03T00:53:08.324Z
---
# ODX STARTセキュリティトークン流通市場

## ウィキ上の位置づけ

このページは、[[securities/osaka-digital-exchange|Osaka Digital Exchange]]を取引所メカニクスとして深掘りする項目であり、[[securities/japan-security-token-secondary-market-route|Japan security token secondary market route]]の流通市場側の兄弟項目として[[securities/INDEX|securities index]]に属する。取引所 / 参加者の分離ロジックは[[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]]、ルーティング方針の文脈は[[securities/japan-best-execution-sor-pts|best execution / SOR / PTS]]、ODXがTSE / Japannext PTSとJSCC / JASDECの間のどこに位置するかは[[securities/japan-market-infrastructure-map|Japan market infrastructure map]]とあわせて読む。クロスドメインの橋は[[fintech/jp-stablecoin-progmat|Progmat stablecoin route]]である。日本のST流通市場で完全なアトミックDvPを実現するには、トークン化された資金決済インフラが欠けたレールだからである。

## 要約

ODX（大阪デジタルエクスチェンジ, Osaka Digital Exchange）は、SBI HD、Sumitomo Mitsui Trust Holdings（SuMi TRUST / 住信）、Nomura HDを中心とし、追加で証券業界参加者を含むジョイントベンチャーとして設立された、日本のFIEA登録PTS運営者である。2023-12-25に開始されたSTART市場は、セキュリティトークン（ST / セキュリティトークン）の日本初の流通取引PTSとして公表されており、FIEA上の電子記録移転権利枠組みの下で発行されるトークン化株式、トークン化債券、トークン化不動産受益権を扱う。STARTでの取引は、承認された証券会社の取引参加者を通じてのみ仲介され、ODX自身が個人投資家と直接向き合うことはない。決済は、上場証券との隣接領域では[[securities/japan-securities-clearing-corp|JSCC]]と[[securities/japan-securities-depository-center|JASDEC]]、トークン移転レッグではトークンプラットフォーム・インフラ（例: [[payment-firms/progmat|Progmat]]、BOOSTRY / ibet）と統合される。STARTの新規銘柄登録は、流通取引が可能になる前にODXが運営するApproval to Register（ATR）ゲートを通過する。

## 取引所アイデンティティ

| 項目 | 公開情報上の読み方 |
|---|---|
| 法人 | 株式会社大阪デジタルエクスチェンジ（Osaka Digital Exchange Co., Ltd.） |
| FIEA登録 | PTS運営認可を持つ第一種金融商品取引業者。[[securities/financial-instruments-business-operators-japan-index|FIBO registry]]で確認する。 |
| 所有の系譜 | [[megabanks/sbi-hd|SBI HD]]を主導アンカーとし、[[securities-firms/nomura-hd|Nomura HD]]、Sumitomo Mitsui Trust Holdings / SBI Sumishin系譜とともに設立。現在の株主構成はODX会社ページで確認する。 |
| 自主規制 | [[financial-regulators/jsda|JSDA]]会員。FSA 2022 Market System Working Groupのアウトプット後に作られた非上場PTSルールがセキュリティトークン区分をカバーする。 |
| 運営市場 | 株式PTS（一般的な現物株範囲だがJapannextより狭い）とSTARTセキュリティトークンPTS（2023-12-25開始）。 |
| 投資家アクセス | 承認された証券会社の取引参加者経由。ODXは非プロ投資家へ直接サービスを提供しない。 |
| 清算 / 決済 | 現物株PTS取引は[[securities/japan-securities-clearing-corp|JSCC]]で清算し、[[securities/japan-securities-depository-center|JASDEC]]で決済する。ST移転はトークンプラットフォームの移転メカニクスを通り、保管記録は信託またはプラットフォーム側が扱う。 |

時間に敏感な内容を公開する前には、必ず取引所のAbout / Newsページで、現在の参加者リスト、市場範囲、運用通知を読む。

## 所有と戦略的整合性

ODXの創業時資本構成は、単一社の商品ではなく、意図的なクロスセクター連合である。

| アンカー | 戦略的関心 |
|---|---|
| [[megabanks/sbi-hd|SBI HD]]（およびSBIグループ各社） | PTS / デジタル資産 / オンライン証券フランチャイズの拡張。SBI Securitiesの個人向け販売。Progmat / デジタル資産プラットフォーム仮説。 |
| [[securities-firms/nomura-hd|Nomura HD]] | 証券業界のリーダーシップ持分。BOOSTRY（Nomura主導のST発行プラットフォーム）による発行側整合性。機関向けSTO分配。 |
| Sumitomo Mitsui Trust Group / SBI Sumishin Net Bank系譜 | トークン化信託受益権商品の信託銀行による保管 / 記録管理役割。資金レッグインフラ。 |
| その他証券会社（時間とともに参加者および / または株主として参加） | ST発行市場の販売幅。日本唯一のST流通取引所への参加。 |

連合設計は欠陥ではなく特徴である。単一企業所有のST PTSでは、市場立ち上げに必要な発行側・販売側の広がりを欠く。その代償は、JV型取引所に共通するガバナンス摩擦である。

## この取引所文脈での「セキュリティトークン」とは何か

日本の規制枠組みにおけるセキュリティトークンは、最も一般的には次である。

- FIEA上の電子記録移転権利。通常は、DLT / blockchainインフラを用いて「電子記録」された第二項有価証券型の受益権セグメント。
- または、FSA告示 / 内閣府令を通じてFIEAの「トークン化証券」取扱いに当てはめられるその他の商品。

実務上、START流通市場に到達するST発行には次が含まれる。

| 資産タイプ | 例示構造 | 発行プラットフォーム |
|---|---|---|
| トークン化不動産受益権 | 不動産保有信託の信託受益権をDLT記録管理向けにトークン化 | [[payment-firms/progmat|Progmat]]、BOOSTRY、ibet for FIN |
| トークン化債券 | 電子記録権利として発行されるデジタル債 | BOOSTRY（Nomuraグループ）、[[payment-firms/progmat|Progmat]] |
| トークン化株式 / プライベートエクイティ受益権 | FIEA範囲で許容されるトークン化ファンド / SPC持分 | プラットフォームは案件により異なる |

トークンプラットフォームが発行、移転、記録管理を扱い、ODXが流通市場の場を提供し、証券会社が顧客接点の仲介者となり、信託銀行またはカストディアンが基礎権利を保有する。これは現物株の発行体 / 取引所 / ブローカーという三者構造ではなく、五者構造である。

## ATR — Approval to Register

ATR（Approval to Register）は、銘柄がSTARTで流通取引可能になる前にODXが実行するゲートである。概念上の順序は次のとおり。

1. **発行体が登録を申請**する。通常はスポンサー証券会社（取引参加者）を通じる。
2. **ODXが評価**する。発行体開示、トークンプラットフォーム統合、保管 / 信託手配、移転メカニクス、JSDA非上場PTSルールおよびODX自身の市場規則への適合を確認する。
3. **ODXがATRを発出**する。適格基準を満たす銘柄が対象。
4. **銘柄が取引可能化**される。START規則の下で扱われる。
5. **継続監視**により、開示、市場公正性、運用継続性を確認する。

ATRはTSE上場審査と同等ではない。TSE上場は、継続開示義務と広範な個人アクセスを伴う公開市場への上場である。ATRは、通常、特定投資家カテゴリに制限され、開示の強度も限定されたST銘柄のPTS登録である。

## JSCCとJASDECの統合

ODXの決済問題には、市場範囲が二つあるため二つの答えがある。

**現物株PTS範囲。** ODXが上場株式の従来型現物株PTSとして運営される場合（Japannextより狭い機能）、取引はPTS清算手配の下で[[securities/japan-securities-clearing-corp|JSCC]]を通じて清算され、標準的な現物株サイクルで[[securities/japan-securities-depository-center|JASDEC]]振替により決済される。

**セキュリティトークン（START）範囲。** トークン化証券は、トークンレッグの基礎権利がJASDECではなくトークンプラットフォーム（Progmat / BOOSTRY / ibet）に記録されるため、清算・決済が異なる。資金レッグ決済は標準的な円決済レール（信託銀行または銀行振込）を使い、トークンレッグ移転はプラットフォームの移転メカニクスを使う。資金レッグとトークンレッグの真のアトミックDvPは、DCJPY、トークン化預金プロトタイプなど、複数の日本の銀行 / 市場インフラ実験の対象であり、ST PTS規模で完全に展開された標準というより、市場インフラ仮説として発展途上である。

アナリストにとって正しい整理は次である。
- 上場現物株 = TSE / JSCC / JASDEC。成熟。
- 上場現物株PTS（Japannext / Cboe Japan / ODX equity PTS）= 同じJSCC / JASDEC決済。成熟。
- ST PTS（START）= トークンプラットフォーム移転 + 並行する資金レッグ支払い。DvP設計は案件ごとに異なり、トークン化資金レッグ統合はなお成熟中。

## 取引フローの例

STARTで取引されるトークン化不動産受益権の簡略な取引フローは次のとおり。

```text
Investor (specified-investor scope)
  -> Securities firm (ODX trading participant, FIEA Type I + tokenized-security distribution scope)
    -> Order entry to ODX START matching engine
      -> Match against counterparty order
        -> Trade confirmation to both participants
          -> Token transfer leg via token platform (Progmat / BOOSTRY / ibet)
          -> Cash leg via trust-bank / bank settlement
            -> Custody / recordkeeping update at trustee / platform
              -> Investor statement update at securities firm
```

現物株フロー（[[securities/japan-market-infrastructure-map|see infrastructure map]]）との対比では、トークンレッグがJASDEC振替をトークンプラットフォーム移転へ置き換え、資金レッグは従来の全銀 / BOJ-NETレールだけでなく、利用可能な場合には専門的なトークン化預金 / ステーブルコイン実験を使う可能性がある。

## 投資家適格性と範囲

STARTはJSDA非上場PTS枠組みの下で運営される。この枠組みは、多くのST銘柄について、投資家範囲を特定投資家カテゴリ、または一般個人より狭い対象に制約する。実務上の読み方は次のとおり。

- 多くのST銘柄は、上場株式と同じように一般個人がオンライン証券で買えるものではない。
- 投資家適格性チェックは、証券会社である取引参加者レベルで実行される。
- 開示の強度はTSE上場株式より低い。投資者保護は、特定投資家枠組み、発行体レベル開示、取引参加者の適合性確認に依存する。
- ODX取引参加者を通じた非日本投資家の日本向けクロスボーダー販売は、FIEAと参加者自身の顧客受入方針の双方に制約される。

[[securities/japan-asset-manager-landscape-matrix|asset managers]]や機関投資家にとって、これはSTエクスポージャーには通常、参加者経由の直接ST PTSアクセス、またはST商品を保有する公募投信 / 私募投信構造の中でのラップが必要であることを意味する。

## Japannext PTSとの比較

| 観点 | Japannext PTS | ODX equity PTS | ODX START |
|---|---|---|---|
| 主な商品 | 現物株lit PTS（J-Market、X-Market） | 現物株PTS（より狭い範囲） | セキュリティトークン流通市場 |
| 投資家範囲 | ブローカー経由の個人・機関 | ブローカー経由の個人・機関 | 特定投資家が中心。参加者経由 |
| セッション構造 | 日中 + 夜間セッション | 標準的な時間帯 | 標準的な時間帯 |
| 決済 | JSCC / JASDEC標準 | JSCC / JASDEC標準 | トークンプラットフォーム + 資金レッグ。混合DvP設計 |
| SOR関連性 | 非常に高い。主要ブローカーSORに含まれる | 現物株SORではJapannextより低い | 標準的現物株SORには含まれない。別個のSTO商品分配 |
| 創業系譜 | SBI / 複数社 | SBI / Nomura / SuMi TRUST | SBI / Nomura / SuMi TRUST |

Japannext固有のSOR文脈は[[securities/japannext-sor-routing-deep-dive|Japannext PTS SOR routing deep dive]]を参照。

## 規制・自主規制枠組み

| レイヤー | 役割 |
|---|---|
| FSA | PTS範囲を持つ第一種金融商品取引業者を認可し、非上場PTS枠組みを監督する。2022-06-22年Market System Working Group中間報告で、PTSを通じたST流通を扱った。 |
| JSDA | 自主規制機関。FSA 2022 中間報告後、トークン化証券を含む非上場有価証券のPTS取引ルールを作成し、`unlisted approved PTS issue`の範囲を定義する。 |
| Japan STO Association | STO市場発展に関する業界討議フォーラム。主要規制当局ではないが、JSDA / FSAのルール設計文脈へ情報を入れる。 |
| JSCC / JASDEC | ODXの現物株範囲における決済インフラ。 |
| トークンプラットフォーム | 各プラットフォーム規則の下で移転 / ライフサイクルメカニクスを運用する。関連する場合は信託銀行 / カストディ監督を受ける。 |

## 沿革スケッチ

- **2020-2022** — ST市場発展に関するワーキンググループ議論、非上場PTSに関するJSDA自主規制ルール設計、Progmat / BOOSTRYプラットフォーム立ち上げ。
- **2022-06-22** — セキュリティトークンを含む非上場有価証券のPTS経由流通を円滑化するFSA Market System Working Group中間報告。
- **2023** — ODXの基礎的立ち上げとSTART開始前の運用準備。
- **2023-12-25** — START流通市場開始。日本初のST PTSと説明される。
- **2024-2026** — Progmat / BOOSTRY / ibetプラットフォーム上の発行体増加。累計ST発行はSTART流通取引とともに成長。
- **継続中** — トークン化資金レッグ支払いインフラ（Progmat Coin / DCJPY / 民間銀行トークン化預金）のST PTS決済への統合は注視項目。[[fintech/jp-stablecoin-progmat|Progmat stablecoin route]]参照。

## 関連項目

- [[securities/INDEX]]
- [[securities/osaka-digital-exchange]]
- [[securities/japan-security-token-secondary-market-route]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japannext-securities]]
- [[securities/japannext-sor-routing-deep-dive]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[megabanks/sbi-hd]]
- [[securities-firms/nomura-hd]]
- [[payment-firms/progmat]]
- [[financial-regulators/jsda]]
- [[financial-regulators/japan-exchange-group]]
- [[fintech/jp-stablecoin-progmat]]
- [[INDEX|FinWiki index]]

## 出典

- ODX (Osaka Digital Exchange) official site, About page, news (START launch announcement 2023-12-25), market information daily report and historical data pages.
- FSA, financial instruments business operator list (kinyushohin.xlsx); Market System Working Group 2022-06-22 interim report.
- JSDA, unlisted-securities PTS self-regulatory rules and `unlisted approved PTS issue` term definition.
- JPX, equity clearing / settlement outline pages.
- Progmat public concept and platform pages.
