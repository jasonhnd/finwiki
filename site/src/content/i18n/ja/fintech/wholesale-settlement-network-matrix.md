---
source: fintech/wholesale-settlement-network-matrix
source_hash: e6b1b4edd96bb3e9
lang: ja
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "ホールセール決済ネットワーク比較マトリクス — Fnality / Partior / JPM Kinexys / mBridge / Agorá / Mariana"
translated_at: 2026-07-29T17:58:52.645Z
---
# ホールセール決済ネットワーク比較マトリクス — Fnality / Partior / JPM Kinexys / mBridge / Agorá / Mariana

## Wiki 内の位置づけ

この項目は [[fintech/INDEX|フィンテック索引]] の下に置かれ、広く参照されるホールセール決済ネットワークを横並びで比較する六者マトリクスである。各ネットワークの詳細項目である [[fintech/fnality-wholesale-settlement|Fnality fnPS]]、[[fintech/partior-jpm-dbs-temasek-consortium|Partior]]、[[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]]、[[fintech/mbridge-bis-multi-cbdc-overview|mBridge]]、[[fintech/bis-project-agora-overview|BIS Project Agorá]] を補完する。ガバナンスの型は [[fintech/multi-megabank-consortium-governance|複数大手銀行の連邦型ガバナンス]]、中央銀行機能の分解という文脈は [[fintech/central-banking-function-unbundling|中央銀行機能のアンバンドリング]]、ステーブルコインとの相互運用は [[fintech/circle-usdc-stablecoin|Circle USDC]] と [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]] を参照。

> [!info] TL;DR
> 六つの取り組みは、成熟度も法的カテゴリーも同一ではない。**Fnality £FnPS** は December 2023 にパイロット決済を行い、Bank of England の制限下での運用開始は December 2024。**Partior** は民間の許可型商業清算・決済ネットワークで、公開資料は USD、EUR、SGD の商業フローを示している。**Kinexys by J.P. Morgan** は開始以来 $1.5T 超、平均日次 $2B 超を処理したと報告しており、その報告時点は November 2024。**mBridge** が MVP に達したのは mid-2024, その後 BIS が中央銀行パートナーへ引き渡したのは October 2024。**Project Agorá** は May 2026 に、完成製品ではなくプロトタイプを八つの中央銀行および 40 超の金融機関とともに完成させた。**Project Mariana** は研究用 PoC で、完了年は 2023。したがって、六者を同等の稼働ネットワークとして順位付けするのではなく、決済資産、運営主体、本番状況、開示された取扱高を分けて比較すべきである。 ^[Fnality: https://www.bankofengland.co.uk/report/2024/rtgs-and-chaps-annual-report-2023-24 and https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26; Partior: https://partior.com/about-us/our-story; Kinexys: https://www.jpmorgan.com/insights/payments/blockchain-digital-assets/introducing-kinexys; mBridge: https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; Agorá: https://www.bis.org/about/bisih/topics/fmis/agora.htm; Mariana: https://www.bis.org/about/bisih/topics/cbdc/mariana.htm]

## 六者比較が必要な理由

「Fnality はコンソーシアム型」「Kinexys は単一銀行型」という個別ネットワークの説明は、それぞれ別の側面を捉える一方、中心的な構造変数である **どの決済資産または請求権が移転されるのか** を見えにくくする。決済資産、運営主体、成熟度、開示通貨、取扱高を横並びにすると、規制対象インフラ、銀行商品、研究プロトタイプを区別しやすい。公開証拠は、全行を本番ネットワークとして扱うことも、コンソーシアム規模から単一の速度順位を推定することも裏付けない。機関向けステーブルコインと預金トークンのより広い対比は [[fintech/institutional-stablecoin-deposit-token-thesis|機関向け SC と TD の論点]] を参照。 ^[Status sources: https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26; https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/about/bisih/topics/fmis/agora.htm]

## マトリクス A · 決済資産とファイナリティ

表の根拠：Bank of England の £FnPS 資料（https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26 ）、Partior の公式沿革（https://partior.com/about-us/our-story ）、J.P. Morgan の Kinexys 概要（https://www.jpmorgan.com/insights/payments/blockchain-digital-assets/introducing-kinexys ）、ならびに mBridge、Agorá、Mariana の BIS プロジェクトページ（https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/about/bisih/topics/fmis/agora.htm; https://www.bis.org/about/bisih/topics/cbdc/mariana.htm ）。

| ネットワーク | 決済資産 | ファイナリティの型 | 相当する類型 |
|---|---|---|---|
| **[[fintech/fnality-wholesale-settlement\|Fnality £FnPS]]** | Bank of England の RTGS Omnibus Account を通じて保有される資金 | 運用制限下の DLT ベース・スターリング決済 | 中央銀行マネーに裏付けられた決済表現 |
| **[[fintech/partior-jpm-dbs-temasek-consortium\|Partior]]** | 統合台帳上のトークン化商業銀行預金 | Partior はトークン化商品間のアトミック・ファイナリティを説明 | 複数銀行の商業決済ネットワーク |
| **[[fintech/jpm-onyx-wholesale-network\|Kinexys Digital Payments]]** | J.P. Morgan のプラットフォーム内の商業銀行預金請求権 | 銀行運営のデジタル決済 | 単一銀行の機関向けプラットフォーム |
| **[[fintech/mbridge-bis-multi-cbdc-overview\|mBridge]]** | 参加中央銀行のホールセール CBDC | 各法域の準備状況を条件として実価値取引が可能な MVP | 複数通貨ホールセール CBDC プラットフォーム |
| **[[fintech/bis-project-agora-overview\|Project Agorá]]** | トークン化中央銀行準備金 + トークン化商業銀行預金 | プロトタイプでアトミックな複数通貨決済を実証 | 中央銀行マネーと商業銀行マネーを組み合わせた研究プロトタイプ |
| **Project Mariana** | 自動マーケットメーカーで用いる仮想的なホールセール CBDC | PoC 完了年は 2023。本番稼働ではない | wCBDC + AMM による実験的なスポット FX 決済 |

**中心的な違いは、決済資産が表す法的請求権である**。Fnality は中央銀行のオムニバス口座を通じて保有する資金を使い、mBridge はホールセール CBDC を試し、Partior と Kinexys は商業銀行マネーの仕組みで運営される。Agorá はプロトタイプでトークン化中央銀行準備金と商業銀行預金を組み合わせ、Mariana は wCBDC/AMM の仕組みを試験した。法的・運用上の帰結は、単純な M0/M1 ラベルから推測せず、各システムの規則と法域に基づいて評価する必要がある。

## マトリクス B · コンソーシアム参加構成

表の根拠：Partior は設立株主四者を特定している（https://partior.com/about-us/our-story ）。BIS は mBridge の参加中央銀行五行と Agorá / Mariana の参加者構成を示している（https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/about/bisih/topics/fmis/agora.htm; https://www.bis.org/about/bisih/topics/cbdc/mariana.htm ）。これらの資料で公表されていない顧客数やネットワーク参加者総数は用いない。

| ネットワーク | 参加構成 | 参加者数 | ガバナンスモデル |
|---|---|---|---|
| Fnality fnPS | 複数株主のインフラ運営者 | 正確な現時点の株主数はこの比較で使用しない | Bank of England が監督するスターリング決済システムの民間運営者 |
| Partior | 四者の株主が設立した独立会社 | DBS、J.P. Morgan、Standard Chartered、Temasek | 複数株主による機関向けネットワーク |
| JPM Kinexys | 単一銀行グループによる運営 | J.P. Morgan が運営し、Liink の顧客数を代替指標にしない | 銀行運営のプラットフォーム |
| mBridge | **中央銀行コンソーシアム** | SAMA が 2024 に参加した後は中央銀行五行 | BIS は October 2024 にプロジェクトをパートナーへ引き渡した |
| Project Agorá | **中央銀行 + 規制対象金融機関** | **8 central banks + 40+ financial institutions** | BIS/IIF が調整するプロトタイプで、追加試験を予定 |
| Project Mariana | **3 central banks**（PoC） | BdF + MAS + SNB | 期間限定の研究 PoC（2022-2023） |

参加者数はガバナンスの広がりを示すが、意思決定速度の順位を証明しない。Kinexys は一つの銀行グループ内で運営され、Partior には設立株主四者、Fnality には複数株主の基盤があり、mBridge / Agorá は公的機関を調整する。各工程表には、法的要件、決済資産、プロジェクト範囲の違いも反映される。

## マトリクス C · 開示された通貨範囲

表の根拠：Partior の公式沿革は USD、EUR、SGD の商業フローを示す（https://partior.com/about-us/our-story ）。Bank of England はスターリングの £FnPS を示す（https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26 ）。BIS は mBridge の参加者と Mariana の仮想通貨を示す（https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/about/bisih/topics/cbdc/mariana.htm ）。Agorá はプロトタイプであり、本番通貨リストではない（https://www.bis.org/about/bisih/topics/fmis/agora.htm ）。

| ネットワーク | 開示された通貨範囲 | 追加範囲の境界 |
|---|---|---|
| Fnality £FnPS | **GBP**。Dec. 2023 にパイロット決済、Dec. 2024 から制限下で運用 | 将来の通貨システムを、ここでは日付を伴う確約として扱わない |
| Partior | **USD / EUR / SGD** の商業フローを開示 | JPY を含む追加通貨は拡張・検討事項であり、稼働確認済み通貨ではない |
| JPM Kinexys | 公開資料は複数通貨デジタル決済を説明するが、本レビューは完全な稼働通貨リストを断定しない | FX 機能と追加ユースケースは引き続き発展中 |
| mBridge | CNY / HKD / THB / AED / SAR は参加当局五者に対応 | Brazil-Drex との日付付き相互運用確約はここでは断定しない |
| Project Agorá | 複数通貨プロトタイプであり、本番通貨は稼働していない | 実価値による追加試験を予定しているが、本番通貨とは主張しない |
| Project Mariana | PoC で仮想的な EUR / SGD / CHF を使用 | n/a（PoC 完了年は 2023） |

開示された通貨集合は直接比較できない。Partior は USD、EUR、SGD の商業フローを示し、Fnality は現在スターリング・システムを制限下で運営する。mBridge の通貨は参加中央銀行に対応し、Agorá / Mariana は本番通貨ネットワークではなくプロトタイプまたは研究プログラムである。 ^[Partior: https://partior.com/about-us/our-story and https://partior.com/news-and-insights/nh-nonghyup-bank-pilots-blockchain-based-cross-border-payments-with-partior; Fnality: https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26]

## マトリクス D · 公開された取扱高と累計規模

表の根拠：J.P. Morgan が November 2024 に発表した Kinexys 資料は、ここでレビューした資料のうち平均日次額と開始以来の累計額をともに示す唯一のもの（https://www.jpmorgan.com/insights/payments/blockchain-digital-assets/introducing-kinexys ）。Bank of England と BIS の状況ページは比較可能な取扱高系列を提供していない（https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26; https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/about/bisih/topics/fmis/agora.htm; https://www.bis.org/about/bisih/topics/cbdc/mariana.htm ）。

| ネットワーク | 公開された日次取扱高 | 累計処理額 | 証拠の境界 |
|---|---|---|---|
| Fnality £FnPS | レビュー対象の BoE 資料では非開示 | 非開示 | 制限下で運用 |
| Partior | レビュー対象の公式資料では非開示 | 非開示 | 商用ネットワークであり、根拠のない推計は挿入しない |
| JPM Kinexys | **平均日次 $2B 超**（Nov. 2024 開示） | **開始以来 $1.5T 超** | 銀行運営の本番プラットフォーム |
| mBridge | 非開示 | 非開示 | MVP。実価値利用は各法域の準備状況次第 |
| Project Agorá | n/a（プロトタイプ） | n/a | プロトタイプであり、本番取扱高系列ではない |
| Project Mariana | n/a（PoC 完了） | n/a | n/a |

この比較で、レビュー対象の公式資料が平均日次額と開始以来の累計額の両方を公表しているのは Kinexys の行だけである。他の行に比較可能な公式値がないため、この表からネットワーク横断の取扱高順位は導けない。 ^[https://www.jpmorgan.com/insights/payments/blockchain-digital-assets/introducing-kinexys]

## マトリクス E · 規制状況と中央銀行との関係

表の根拠：Bank of England は £FnPS を、制限下で運用される監督対象の認定決済システムとして掲載する（https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26 ）。Partior は独立した機関向けネットワークを説明する（https://partior.com/about-us/our-story ）。J.P. Morgan は Kinexys を自社プラットフォームとして説明する（https://www.jpmorgan.com/insights/payments/blockchain-digital-assets/introducing-kinexys ）。BIS は mBridge、Agorá、Mariana の状況を説明する（https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/about/bisih/topics/fmis/agora.htm; https://www.bis.org/about/bisih/topics/cbdc/mariana.htm ）。

| ネットワーク | 公開された状況証拠 | 中央銀行との関係 | 本項で用いるカテゴリー |
|---|---|---|---|
| Fnality £FnPS | Bank of England により認定・監督 | Bank の RTGS Omnibus Account を使用し、制限と期待事項の下で運用 | DLT ベースのスターリング決済システム |
| Partior | 民間の独立主体および機関向けネットワーク | MAS 主導の Project Ubin に由来するが、一律の「MAS 認可 PSP」とは主張しない | 商業清算・決済インフラ |
| JPM Kinexys | J.P. Morgan 運営のプラットフォーム | 規制対象銀行グループ内にあるが、引用ページは独立した FMI ライセンスを立証しない | 銀行運営の機関向けプラットフォーム |
| mBridge | October 2024 の BIS 引き渡し後はパートナー主導 | 参加中央銀行五行。実価値利用は各法域の準備状況次第 | 複数中央銀行の MVP |
| Project Agorá | BIS/IIF が調整する官民プロジェクト | 中央銀行八行。プロトタイプを完成し、追加試験を予定 | 研究プロトタイプ |
| Project Mariana | 完了済みの BIS / BdF / MAS / SNB PoC | 仮想的な wCBDC であり、発行意図を示唆しない | 実験的 PoC |

規制カテゴリーは二者択一ではない。Fnality は制限下で運用される認定・監督対象の決済システム、Kinexys は J.P. Morgan の銀行規制範囲内、Partior は規制対象金融機関が使う商用インフラ、mBridge は中央銀行の MVP、Agorá / Mariana は研究プロトタイプである。プラットフォームの技術ラベルだけでは、法的ファイナリティや免許状況は立証できない。 ^[Fnality status: https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26; project status: https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm and https://www.bis.org/about/bisih/topics/fmis/agora.htm]

## マトリクス F · 技術スタック

| ネットワーク | 検証済みの技術説明 | 本番境界 | 相互運用の証拠 |
|---|---|---|---|
| Fnality fnPS | Bank of England は DLT ベースのスターリング・システムと説明 | 制限下で運用 | SWIFT との協業は公開されているが、一律のクロスチェーン主張はしない |
| Partior | ブロックチェーン基盤の統合台帳 | 商業フローが稼働 | 公式沿革はトークン化商品間のアトミック・ファイナリティを説明するが、特定の Fabric 派生スタックとは断定しない |
| JPM Kinexys | J.P. Morgan のブロックチェーン基盤・機関向けプラットフォーム | 取扱高を開示する本番プラットフォーム | 根拠のない Base/Canton 工程表の日付は断定しない |
| mBridge | Ethereum Virtual Machine と互換性を持つ専用 mBridge Ledger | MVP。実価値利用は各法域の準備状況次第 | BIS は追加機能と相互運用のテストベッドと説明 |
| Project Agorá | 共有プログラマブル・プラットフォームのプロトタイプ | 完成製品ではない | 本番スタックは今後の作業 |
| Project Mariana | 共通トークン標準、ブリッジ、AMM を使うパブリック・ブロックチェーン PoC | 実験のみ | 仮想通貨によるネットワーク横断 wCBDC 交換を試験 |

レビュー対象のシステムはアクセス制御されたインフラを使うが、公開資料の技術詳細の深さは統一されていない。Agorá は中央銀行八行と 40 超の金融機関が参加するプロトタイプであり、その公式成果を一つの本番スタックへの確約と解釈すべきではない。したがって技術比較では、検証済みの実装開示と工程表または推論を区別する必要がある。

## マトリクス G · クロスボーダー PvP / DvP 能力

表の根拠：Partior は統合台帳がトークン化商品間のアトミック・ファイナリティを提供すると述べる（https://partior.com/about-us/our-story ）。BIS は mBridge のクロスボーダー決済 / FX 範囲、Agorá のアトミックな複数通貨プロトタイプ、Mariana の仮想 wCBDC スポット FX PoC を説明する（https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/about/bisih/topics/fmis/agora.htm; https://www.bis.org/about/bisih/topics/cbdc/mariana.htm ）。レビュー対象の Bank of England 資料は £FnPS の状況を確認するが、日付を伴う米ドル PvP 開始は確認しない（https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26 ）。

| ネットワーク | 複数通貨 / PvP の証拠 | 証券 DvP の証拠 | 状況の境界 |
|---|---|---|---|
| Fnality fnPS | 引用した BoE 報告書から本番の複数通貨対応は主張しない | 引用した BoE 報告書では確認できない | 現在の証拠は制限下で運用されるスターリング・システム |
| Partior | 商用の複数通貨フローとアトミック・ファイナリティを開示 | 引用した沿革は特定の稼働中証券 DvP 商品を立証しない | 「24×7 FX swap live in 2024-Q3」という主張は残さない |
| JPM Kinexys | J.P. Morgan は複数通貨デジタル決済を説明 | 特定の証券 DvP 取扱高をこの比較では使用しない | 以前の根拠なき $700B という数値を削除 |
| mBridge | リアルタイムのクロスボーダー決済と FX 取引向けに構築 | 証券 DvP は表明された主要範囲ではない | MVP。実価値利用は各法域の準備状況次第 |
| Project Agorá | プロトタイプはアトミックな複数通貨ホールセール決済を可能にする | BIS ページが扱うのは決済であり、稼働中の証券 DvP サービスではない | プロトタイプのみ。実価値試験は今後の作業 |
| Project Mariana | AMM ベースのスポット FX 取引と即時決済を試験 | n/a | 仮想通貨 PoC は 2023 に完了 |

PvP とアトミック決済は共通の設計目標だが、本番状況は異なる。Partior は商業フローを開示し、Fnality はスターリング・システムを制限下で運営する。mBridge は実価値利用が法域の準備状況次第の MVP、Agorá は完成済みのプロトタイプ、Mariana は完了済みの PoC である。レビュー対象資料は、Mariana が Agorá または mBridge のアーキテクチャを直接決定したとは示していない。

## マトリクス H · ステーブルコイン / トークン化資産との相互運用

| ネットワーク | ステーブルコイン相互運用 | トークン化 MMF / RWA 相互運用 |
|---|---|---|
| Fnality fnPS | 引用した Bank of England 報告書では確認できない | レビュー対象資料から BUIDL 担保試験は主張しない |
| Partior | 公式沿革から稼働中のステーブルコイン・ブリッジは主張しない | 統合台帳はトークン化商品を支援するが、特定の稼働中 RWA-DvP 商品は主張しない |
| JPM Kinexys / JPMD | このマトリクスではパブリックチェーン工程表を推定しない | 商品固有の担保・レポ主張には個別の一次資料が必要 |
| mBridge | BIS が説明するのは EVM 互換テストベッドであり、稼働中のステーブルコイン・ブリッジではない | 稼働中のトークン化ファンド統合は主張しない |
| Project Agorá | 公式プロトタイプの範囲はトークン化商業銀行預金と中央銀行準備金を組み合わせるが、稼働中のステーブルコイン通過機能を立証しない | 追加ユースケースは今後の試験次第 |
| Project Mariana | n/a | n/a |

Agorá の公式プロトタイプ範囲は以前の主張より狭く、共有プログラマブル構成上でトークン化商業銀行預金と中央銀行準備金を試す。将来ステーブルコイン相互運用層になる可能性は分析上のシナリオであり、提供済み能力でも、表明済みの MRA 依存工程表でもない。 ^[https://www.bis.org/about/bisih/topics/fmis/agora.htm]

## マトリクス I · SWIFT に対する戦略的位置づけ

表の根拠：SWIFT と Fnality は協業を公表した（https://www.swift.com/news-events/news/swift-fnality-collaboration ）。Partior は自社の統合台帳モデルを説明する（https://partior.com/about-us/our-story ）。BIS は mBridge、Agorá、Mariana を、SWIFT 回避のために作られたプロジェクトとは位置づけずに説明する（https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/about/bisih/topics/fmis/agora.htm; https://www.bis.org/about/bisih/topics/cbdc/mariana.htm ）。

| ネットワーク | ここで裏付けられるメッセージング関係 | コルレス銀行への含意 | 証拠の境界 |
|---|---|---|---|
| Fnality fnPS | 公開された SWIFT との協業は共存を裏付ける | Fnality は決済層を提供 | 協業は SWIFT の全面的代替を証明しない |
| Partior | 公式沿革は、統合台帳が分断されたメッセージングと仲介者を除くと説明 | 参加銀行間のフローを効率化し得る | 一律に「コルレス銀行を代替する」とは主張しない |
| JPM Kinexys / Liink | ここで用いた Kinexys 資料からは分類しない | 銀行運営ネットワークは選択された顧客フローを変え得る | Liink の顧客数を SWIFT 代替の証拠にしない |
| mBridge | BIS は新しい複数 CBDC プラットフォームと説明 | クロスボーダーのコスト、速度、複雑さを対象とする | BIS は SWIFT 回避を明示的な設計目的とは述べていない |
| Project Agorá | 共有プログラマブル・プラットフォームのプロトタイプ | 異なるホールセール決済構成を試す | 本番の SWIFT 代替とは主張しない |
| Project Mariana | n/a | 実験的なスポット FX PoC | 戦略的な SWIFT 関連主張なし |

証拠が支える結論は限定的である。新しい決済プラットフォームは、メッセージング、コルレス関係、決済の相互作用を変え得る。一方で SWIFT と Fnality は、既存メッセージングとトークン化決済が補完関係になり得ることも示した。レビュー対象資料は、全面代替の順位付けも、mBridge に政治的な「SWIFT 回避」目的があるとの主張も裏付けない。

## これらの比較軸を選ぶ理由

九つの比較軸（決済資産、コンソーシアム参加構成、開示通貨範囲、公開取扱高、規制状況、中央銀行との関係、ステーブルコインとの相互運用、技術スタック、SWIFT との関係）は、**ホールセール決済の採用をめぐる異なる証拠面**を明らかにするために選んだ。

1. **決済資産** — 移転される法的請求権と、システム・法域別の分析がなお必要なファイナリティ上の問いを特定する。
2. **コンソーシアム参加構成** — 意思決定速度の順位を断定せず、運営主体とガバナンスの広がりを示す。
3. **開示通貨範囲** — レビュー対象の公開資料で対応または試験された通貨を記録する。
4. **公開取扱高** — 比較可能な公式データがある場合に、採用を示す一つの指標を提供する。
5. **規制状況** — 全カテゴリーを同等に扱わず、開示された法的・監督上の範囲を記録する。
6. **中央銀行との関係** — 中央銀行口座の利用、中央銀行の参加、研究支援を区別する。
7. **相互運用** — 他の決済・トークン・資産ネットワークとの検証済み接続または試験を記録する。
8. **技術スタック** — 開示された実装上の選択を記録し、空白を推論で埋めない。
9. **SWIFT との関係** — 文書化された協業と根拠のない代替主張を区別する。

この九つの側面は、六つの行が代替関係にない理由を示す。Fnality は中央銀行オムニバス口座を通じて裏付けられる監督対象スターリング・インフラ、Kinexys は本番取扱高を開示する銀行運営プラットフォーム、Partior は複数銀行の商用ネットワーク、mBridge は中央銀行の MVP、Agorá / Mariana はプロトタイプである。このマトリクスは分類補助であり、全面的な順位付けの証拠ではない。

## マトリクスの読み方

- **Fnality、Kinexys、mBridge、Partior は異なる決済構成を表す**。「ホールセール決済」と一括されることが多いが、決済請求権、運営主体、法的範囲、成熟度が異なるため、個別に評価すべきである。
- **異なる工程表から単一原因は切り分けられない**。Fnality と Kinexys は運営主体、法的範囲、決済資産、対象範囲が異なるため、経過時間や取扱高を株主数だけに帰属させられない。
- **BIS handed mBridge over in October 2024, not October 2025**。BIS は、パートナーが引き継げる段階に達したと述べ、失敗や政治的配慮が理由だとの見方を明示的に否定した。公式資料は PBoC のみが運営を主導するとしていない。 ^[https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/speeches/sp241031.htm]
- **Project Mariana の 2023 PoC** は、AMM を通じた仮想 wCBDC のクロスボーダー取引と即時決済を実証した。レビュー対象の BIS ページは、Mariana が Agorá または mBridge のアーキテクチャを決定したとは立証していない。
- **ステーブルコイン相互運用はシナリオであり、Agorá の成果ではない**。公式 Agorá プロトタイプはトークン化商業銀行預金と中央銀行準備金を組み合わせる。この設計をステーブルコインへ拡張するには、追加の法務・ガバナンス・技術作業が必要になる。
- **SWIFT × Fnality は、既存メッセージングとトークン化決済が接続できる証拠である**。業界全体に通用する単一戦略を立証するものではない。
- **運営主体の形はガバナンス変数の一つであり、速度スコアではない**。複数株主、単一銀行、中央銀行の各プロジェクトは、法的範囲、決済資産、使命も異なる。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki 索引]]
- [[fintech/INDEX|フィンテック索引]]
- [[fintech/fnality-wholesale-settlement|Fnality fnPS]]
- [[fintech/partior-jpm-dbs-temasek-consortium|Partior JPM / DBS / StanChart / Temasek コンソーシアム]]
- [[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]]
- [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 複数 CBDC ブリッジ]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/multi-megabank-consortium-governance|複数大手銀行の連邦型ガバナンス]]
- [[fintech/central-banking-function-unbundling|中央銀行機能アンバンドリングの 5 層]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関向け SC と TD の論点]]
- [[fintech/tokenized-deposit-cumulative-volume-scale|TD 累計規模]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ概要]]
- [[fintech/three-circles-stablecoin-mra-framework|米国・EU・日本のステーブルコイン市場アクセス比較]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
<!-- /wiki-links:managed -->

## 出典

- Fnality International 公開資料: https://www.fnality.org/
- Bank of England — 最初のパイロット決済（Dec. 2023）: https://www.bankofengland.co.uk/report/2024/rtgs-and-chaps-annual-report-2023-24
- Bank of England — 制限下で運用する £FnPS（Dec. 2024）: https://www.bankofengland.co.uk/financial-stability/financial-market-infrastructure-supervision/report/fmi-annual-report-2025-26
- Partior 公開資料: https://www.partior.com/
- MAS — Partior 開始発表（2021）: https://www.mas.gov.sg/news/media-releases/2021/partior-launch
- JPMorgan — 開示取扱高を含む Kinexys 紹介: https://www.jpmorgan.com/insights/payments/blockchain-digital-assets/introducing-kinexys
- BIS — Project mBridge の MVP と October 2024 の引き渡し: https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm
- BIS — Project Agorá プロトタイプ（May 2026）: https://www.bis.org/about/bisih/topics/fmis/agora.htm
- BIS — Project Mariana: https://www.bis.org/about/bisih/topics/cbdc/mariana.htm
- SWIFT × Fnality 協業発表（2024-Q4）: https://www.swift.com/news-events/news/swift-fnality-collaboration
