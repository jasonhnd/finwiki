---
source: exchanges/japan-cex-parent-fg-adjacency-matrix
source_hash: 8d53efa7007d517e
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本の CEX 親 FG 隣接マトリクス"
translated_at: 2026-07-29T12:27:14.000Z
---

# 日本の CEX 親 FG 隣接マトリクス

## TL;DR

日本の**暗号資産交換業者**（FSA 登録の VASP）が単独の事業であることは稀であり、ほぼ常に、すでに証券・銀行・決済・ポイント・送金・保険・E コマースを運営している親**金融グループ（FG）**の内部のノードである。FG 隣接性という次元が決定するのは、(a) VASP の**資金調達コスト**、(b) 親会社のロイヤルティ・サーフェスへの**ポイント・報酬**のクロスリンク、(c) 円の入出金のための**銀行口座預金チャネル**、(d) FG の既存のブローカレッジ／ウォレット／アプリのサーフェスへ暗号資産商品を流すための**販売チャネル**、そして (e) 親会社がすでに運営している FSA 暗号資産トラックと銀行法／金商法トラックの双方にまたがる**規制クラスタ監督**である。このマトリクスは、**各事業者がどの FG に属し、親会社がどのエコシステム・サービスを提供するか**のクロスリファレンスであり、[[exchanges/jp-vasp-parent-company-map|JP VASP parent company map]] における企業所有権の分類体系に対する運用上の補完として [[exchanges/INDEX|exchanges index]] の下に位置する。

## Wiki ルート

これは FG 隣接性の運用マトリクスとして [[exchanges/INDEX|exchanges index]] の下に位置する。このエントリが運用化する所有権の分類体系については [[exchanges/jp-vasp-parent-company-map|JP VASP parent company map]]、より広範な市場ランドスケープについては [[exchanges/jp-crypto-exchange-overview|JP crypto exchange overview]]、ポイント・クロスリンクの次元については [[exchanges/jp-cex-points-economy-integration|JP CEX points-economy integration]]、銀行の資金調達コストの観点については [[exchanges/jp-crypto-bank-credit-facilities|JP crypto bank credit facilities]]、今日の親 FG マップを生み出した構造的な再編については [[exchanges/jp-vasp-ma-consolidation-history|JP VASP M&A consolidation history]]、そしてすべての行が共有する監督フレームワークについては [[exchanges/fsa-vasp-registration-system|FSA VASP registration system]] と併せて読むこと。主要なポジションの実体アンカーは [[megabanks/sbi-hd|SBI HD]]、[[payment-firms/gmo-financial-hd|GMO Financial HD]]、[[securities-firms/monex-group|Monex Group]]、[[payment-firms/rakuten-fg|Rakuten FG]]、[[payment-firms/mercari-hd|Mercari HD]]、[[securities-firms/nomura-hd|Nomura HD]]、[[securities-firms/daiwa-sg|Daiwa Securities Group]] である。

## なぜこのマトリクスが重要か

親会社グループの証券、銀行、ウォレット、ポイント、マーケットプレイスは、販売・決済上の接点になり得る。ただし所有関係だけでは、ゼロ CAC、優遇手数料、即時決済または実際の商品統合を証明しない。各接続は日時付きのグループまたは事業者開示で確認する。

これらの接続のそれぞれは、**CAC**（顧客獲得コスト）、**ユニットエコノミクス**、**円の資金調達コスト**、**商品スピード**（親会社のインフラを用いて新機能をどれだけ速くリリースできるか）、そして**インシデント対応の体制**（親会社の流動性によってハックがクッションされうるか — [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack detailed analysis]] では親会社の DMM HD が顧客の補填をカバーした）に対して測定可能な影響を持つ。以下のマトリクスは、各親 FG と、それが提供する具体的なクロスサービスを名指しするものであり、これにより読者は、商品レベルの比較を行う前に「この VASP は親会社のコンテキストを剥ぎ取ったときにどう見えるか」に答えることができる。

## 事業者別プロファイル

### SBI VC トレード — SBI HD（8473）

**親 FG**：[[securities-firms/sbi-securities|SBI Securities]] を含む [[megabanks/sbi-hd|SBI HD]]（東証プライム 8473）。**開示されたグループ・サービス**：
- **証券隣接性** — 現行のクロスプロモーションと SBI 共通 ID 連携は日時付き SBI グループ開示で確認し、口座移転や順位を推定しない
- **銀行預金チャネル** — [[regional-banks/sbi-shinsei-bank|SBI Shinsei Bank]]（グループ銀行、みずほ系のレガシー）がグループ内の円決済レールを提供する。[[megabanks/sbi-regional-bank-hd|SBI Regional Bank HD]]（地方銀行の持株会社）および提携地方銀行が追加の銀行預金を提供する
- **送金** — [[payment-firms/sbi-remit|SBI Remit]] がグループのアウトバウンド送金／資金移動業のサーフェスを運営する
- **FX 隣接性** — [[securities-firms/sbi-fx-trade|SBI FX Trade]] がレバレッジ FX を運営し、系列の [[exchanges/jp-exchange-bi-fxtrade|BI FXTRADE]] がグループ内で暗号資産デリバティブのライセンスを保有する
- **保険／資産運用** — [[life-insurers/sbi-life|SBI Life]]、[[non-life-insurers/sbi-insurance|SBI Insurance]]、[[asset-managers/sbi-asset-management|SBI Asset Management]] がグループの商品の厚みを完成させる

**隣接性の証拠**：グループは証券、銀行、送金、FX、保険、資産運用の各 entity を開示する。実際の VASP 統合と円決済条件は別途確認する。詳細：[[exchanges/jp-exchange-sbi-vc-trade|jp-exchange-sbi-vc-trade]]。

### GMO コイン — GMO フィナンシャル HD（7177）／ GMO インターネットグループ（9449）

**親 FG**：[[payment-firms/gmo-financial-hd|GMO Financial HD]]（東証プライム 7177）。それ自体が GMO インターネットグループ（東証プライム 9449）の子会社である。**提供されるグループ・サービス**：
- **証券クロスセル** — [[securities-firms/gmo-click-securities|GMO Click Securities]]（グループのブローカレッジ、これも GMO フィナンシャル HD の子会社）が金商法側の商品の厚みと共有インフラを提供する
- **ダイレクト・バンク** — [[payment-firms/gmo-aozora-net|GMO Aozora Net Bank]]（あおぞら銀行との合弁）がグループのインターネット銀行として運営され、内部の円預金レールを提供する
- **決済処理** — [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] と [[payment-firms/gmo-epsilon|GMO Epsilon]] は決済サーフェスを提供する。現行のグループ関係と統合は別途確認する
- **BNPL** — [[payment-firms/gmo-postpay|GMO Postpay]] がグループの BNPL ／後払いラインを運営する
- **インターネット・インフラ** — より広範な GMO インターネットグループが GMO クラウド／ドメイン／SSL 事業を運営し、運用・エンジニアリングの厚みを提供する

**隣接性の強度**：高い — ブローカレッジ、銀行、決済、暗号資産にまたがる共有エンジニアリング文化を持つ、インターネット金融の純粋型のシナジー。詳細：[[exchanges/jp-exchange-gmo-coin|jp-exchange-gmo-coin]]。

### bitFlyer — 独立系（上場親会社なし）

**親 FG**：bitFlyer Holdings（非公開、創業者＋経営陣＋少数の金融投資家による資本構成）。**提供されるグループ・サービス**：
- **独立系構造** — 確認した企業資料ではメガバンクや E コマースの親会社を開示していない。市場規模の順位は推定しない
- **内部の姉妹実体**：[[exchanges/jp-exchange-custodiem|Custodiem]]（旧 FTX Japan、2024 に取得）が、機関投資家／分別管理資産の事業のために bitFlyer Holdings の内部に位置する
- **外部の提携レール**：bitFlyer は提携メガバンクを経由して円をルーティングし（グループ内銀行なし）、提携ベースのポイント・クロスリンク（例：T ポイントのレガシー販売）を運営する

**隣接性の強度**：低い — bitFlyer は典型的な**独立系**の構造である。ブランド力、JVCEA でのリーダーシップの存在、そして緊密な社内エンジニアリング文化で補っているが、銀行 FG に支えられたピアのクロスセルのフライホイールを欠く。詳細：[[exchanges/jp-exchange-bitflyer|jp-exchange-bitflyer]]。

### Coincheck — マネックスグループ（8698）／ Coincheck Group N.V.（NASDAQ:CNCK）

**親 FG**：[[securities-firms/monex-group|Monex Group]]（東証プライム 8698）。現在は Coincheck Group N.V.（2024  SPAC 合併を通じて NASDAQ 上場）を通じて運営している。**提供されるグループ・サービス**：
- **証券クロスセル** — マネックス証券（グループのブローカレッジ）が金商法のブローカレッジ・サーフェスと米国株／グローバル投資の販売を提供する
- **暗号資産デリバティブ** — マネックス株式会社（Monex Inc.、別個のライセンス保有者）が金商法第 1,  種の下で暗号資産デリバティブを運営し、Coincheck の現物のみのライセンスを補完する
- **TradeStation** — マネックスグループの米国 TradeStation アームが米国市場と先物プラットフォームのエンジニアリングの厚みを提供する
- **グローバル資本サーフェス** — 2024  SPAC 後の NASDAQ 上場が、Coincheck に直接の米ドル資本市場アクセスを与える（日本の VASP には稀）

**隣接性の強度**：中〜高 — マネックスは証券クロスセル、デリバティブ・ライセンスの姉妹実体、そしてグローバル資本アクセスを提供する。Coincheck は独立したブランドと商品サーフェスを保持する。詳細：[[exchanges/jp-exchange-coincheck|jp-exchange-coincheck]]。

### Rakuten ウォレット — 楽天グループ（4755）／ 楽天 FG

**親 FG**：楽天グループ（東証プライム 4755）内の [[payment-firms/rakuten-fg|Rakuten FG]]。**提供されるグループ・サービス**：
- **銀行** — 楽天銀行はグループの銀行サーフェスである。現行の円レール統合は事業者開示で確認する
- **証券** — [[securities-firms/rakuten-securities|Rakuten Securities]] はグループの証券サーフェスを提供する。口座数順位は固定しない
- **カード** — [[card-issuers/rakuten-card|Rakuten Card]] はグループのカードサーフェスを提供する。取引額順位は固定しない
- **ポイント** — 楽天ポイントはグループのロイヤルティ・サーフェスである。Rakuten Wallet との現行連携と利用者指標は日時付き開示で確認する
- **Edy** — [[payment-firms/rakuten-edy|Rakuten Edy]] はプリペイド電子マネーのアームである。[[payments/japan-prepaid-electronic-money-operator-matrix|JP 前払式 e-money 事業者 matrix]] を参照
- **保険** — [[life-insurers/rakuten-life|Rakuten Life]]、[[non-life-insurers/rakuten-general-insurance|Rakuten General Insurance]]、[[non-life-insurers/rakuten-insurance-hd|Rakuten Insurance HD]]
- **E コマース** — 楽天市場はグループのマーケットプレイス・サーフェスである。暗号資産実験や加盟店統合は日時付き開示で確認する
- **モバイル** — 楽天モバイル（MNO）がグループにテルコのチャネルを与える

**隣接性の証拠**：グループは銀行、証券、カード、ポイント、電子マネー、保険、E コマース、モバイルの各 entity を開示する。実際の VASP 統合は別途確認する。詳細：[[exchanges/jp-exchange-rakuten-wallet|jp-exchange-rakuten-wallet]]。

### DMM Bitcoin — DMM HD（非公開）

**親 FG**：DMM.com グループ（非公開）。**提供されるグループ・サービス**：
- **証券** — DMM.com 証券が FX ／株式のブローカー・アームを運営する
- **暗号資産隣接の商品**：[[exchanges/jp-exchange-dmm-com-securities|DMM.com Securities]] が金商法の暗号資産デリバティブ・ラインを保有する
- **グループ内に銀行なし** — DMM は円レールに外部のメガバンク提携を用いる
- **販売** — DMM の動画／E コマースは潜在的なグループ販売サーフェスである。比較上の到達範囲には同時点の証拠が必要である
- **グループの財務的キャパシティ** — Lazarus による 2024-05 ハックの補填は親グループ（約 JPY 48 億円）によって賄われ、FG の単独の資本バックストップとしての役割を実証した：[[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack detailed analysis]] を参照。

**隣接性の強度**：中（2024 以前）→ ほぼゼロ（引き継ぎ後） — このケースは、**十分な現金を持つ非金融の親 FG でさえ VASP のハックをバックストップできる**ことを実証しており、最終的なワインドダウンは、グループの戦略的優先順位がシフトしたときの限界を示している。詳細：[[exchanges/jp-exchange-dmm-bitcoin|jp-exchange-dmm-bitcoin]]。

### Mercoin — メルカリ HD（4385）

**親 FG**：[[payment-firms/mercari-hd|Mercari HD]]（東証プライム 4385）。**提供されるグループ・サービス**：
- **ウォレット／決済** — メルペイ（グループのウォレット、資金移動業ライセンスを保有）がグループ内の円レールを提供し、メルカリのポイント／メルカリの売上金を経由した Mercoin の BTC 購入の主要な入口である
- **マーケットプレイス** — メルカリはグループのマーケットプレイス・サーフェスである。現行利用者指標と Mercoin の売上金導線は日時付き開示で確認する
- **グループ内に銀行なし** — メルカリは銀行を運営しない。円レールはメルペイの資金移動業ライセンス＋提携銀行を経由する
- **ポイント・クロスリンク** — メルカリポイントは Mercoin の内部で BTC と交換でき、これが際立ったクロスリンクである
- **暗号資産商品**：Mercoin の現行資産とアプリ内 UX は事業者の商品ページで確認し、比較上の埋め込み深度を推定しない

**隣接性の証拠**：メルカリとメルペイはマーケットプレイス、ウォレット、ポイントの各サーフェスを開示する。変換導線と顧客獲得効果は別途確認する。詳細：[[exchanges/jp-exchange-mercoin|jp-exchange-mercoin]]。

### Laser Digital Japan — 野村 HD（8604）

**親 FG**：[[securities-firms/nomura-hd|Nomura HD]]（東証プライム 8604）、Laser Digital Holdings（スイスを拠点とするデジタル資産子会社）を通じて。**提供されるグループ・サービス**：
- **機関投資家ブローカレッジ** — 野村證券はグループの証券サーフェスを提供する。リテール資産順位や顧客移転は推定しない
- **資産運用** — [[asset-managers/nomura-asset-management|Nomura Asset Management]] が機関投資家向けの ETF ／ファンドのエンジニアリングの厚みを提供する
- **信託銀行** — [[trust-banks/nomura-trust-bank|Nomura Trust Bank]] が機関投資家フローのための信託／カストディ側の法的実体を提供する
- **公開規制ステータス** — Laser Digital Japan の公式ページは日本法人が Laser Digital グループ全体に operational services を提供すると説明し、JVCEA は 2025-09-19 から同社を **第二種会員**として記録する。JVCEA の会員区分は第二種金融商品取引業登録ではなく、同社は確認した FSA の暗号資産交換業者・金融商品取引業者 workbook に掲載されていない
- **グローバルな Laser Digital ネットワーク** — スイス本社、ドバイ（VARA ライセンス）、アブダビ、ロンドンのサーフェスが、機関投資家フローを日本の実体に供給する

**隣接性の強度**：非常に高い（機関投資家のみ） — 野村のコミットメントは、リテール現物ではなく機関投資家／デリバティブのサーフェスに対するものである。FG のクロスリンクは、銀行 FG のリテール VASP が用いる消費者向けクロスセルではなく、ブローカレッジ顧客のカバレッジと信託銀行のカストディである。詳細：[[exchanges/jp-exchange-laser-digital-japan|jp-exchange-laser-digital-japan]]。

### Crypto Garage — デジタルガレージ＋東京短資の合弁

**親会社構造**：Crypto Garage の公式 profile は、デジタルガレージと東京短資が共同で設立した合弁会社であるとし、公開役員一覧には野村ホールディングスの取締役を含む。確認した公式 profile は大和証券グループを親会社として示さず、大和の銀行、証券、資産運用、信託 entity へのアクセスも立証しない。**提供されるグループ・サービス**：
- **機関向け infrastructure** — SETTLENET、OTC、custody、settlement、staking、blockchain development を professional / institutional users 向けに掲げる
- **ライセンス** — Crypto Garage は資金決済法上の FSA 登録暗号資産交換業者（関東財務局 第00029号）であり、第二種金融商品取引業者とは説明されていない

**隣接性の強度**：中〜高（機関向け合弁） — Crypto Garage はデジタルガレージの technology surface と東京短資の wholesale-market adjacency、および公開された野村の取締役 link を組み合わせる。裏付けとなる ownership source なしに、大和グループ子会社または [[exchanges/jp-exchange-digital-asset-markets|Digital Asset Markets]] の sibling entity として model 化しない。詳細：[[exchanges/jp-exchange-crypto-garage|jp-exchange-crypto-garage]]。

### PayPay 関連 — ソフトバンク FG クラスタ

**親 FG**：PayPay Corp と PayPay FG クラスタを通じたソフトバンクグループ（東証プライム 9984）。**提供されるグループ・サービス**：
- **ウォレット** — PayPay はグループのウォレット・サーフェスである。現行 GMV 順位と暗号資産連携は別途確認する
- **カード** — PayPay カード（カード発行者）と PayPay カードゴールドが PayPay FG の内部に位置する
- **銀行** — PayPay 銀行（旧ジャパンネット銀行）がグループ内のインターネット銀行である
- **証券** — PayPay 証券が金商法のブローカー・サーフェスを提供する
- **テルコ** — ソフトバンク（東証プライム 9434,、別途上場）が親会社のテルコ・チャネルである。LINE ヤフー（東証プライム 4689）がメッセージング／検索のサーフェスである
- **暗号資産リンク**：PayPay は [[exchanges/jp-exchange-binance-japan|Binance Japan]] への少数投資を公表している。現行持分とガバナンス権は日時付き企業開示で確認する

**隣接性の強度**：中（間接的） — PayPay FG は強力な決済＋銀行＋テルコ＋証券のスタックを運営しているが、自社ブランドの VASP ではなく、Binance Japan への少数投資を通じて暗号資産に関与している。これは 2026 時点での意図的なオプショナリティの姿勢である。

### au 関連 — KDDI クラスタ

**親 FG**：au じぶん銀行／ au PAY ／ au フィナンシャルクラスタを通じた KDDI（東証プライム 9433）。**提供されるグループ・サービス**：
- **テルコ** — KDDI（au）はグループのテルコ・サーフェスを提供する。固定の市場事業者数分類は用いない
- **銀行** — au じぶん銀行（MUFG との合弁）がグループ内のインターネット銀行である
- **ウォレット** — au PAY（QR ／コード決済）と au PAY カードが FG の内部に位置する
- **証券** — au カブコム証券（MUFG との合弁、旧カブドットコム証券）が金商法のブローカー・サーフェスを提供する
- **暗号資産リンク**：2026  時点で、au FG は自社ブランドの VASP を運営していない。FG の暗号資産の姿勢は、ライセンス保有ではなく、観察的／提携ベースである

**隣接性の強度**：低い（自社 VASP なし） — au FG は銀行／ウォレット／ブローカレッジ／カードのスタックを構築したが、暗号資産取引所に直接参入していない。これは PayPay FG の Binance Japan 少数ポジションに対する構造的な反事実である。

## 大比較マトリクス表

出典: frontmatter に記載した金融庁登録一覧、JVCEA 会員一覧、親会社グループの公式サイト。所有関係とグループサービスは変わり得るため、推定の強度順位、利用者数、市場地位、根拠のない不存在主張を除外する。

| 事業者／クラスター | 公開検証入口 | ここで記録する関係 |
|---|---|---|
| **SBI VC Trade / SBI** | https://www.sbigroup.co.jp/ | 親会社グループのエコシステム |
| **GMO Coin / GMO** | https://www.gmo.jp/ | 親会社グループのエコシステム |
| **bitFlyer** | https://corporate.bitflyer.com/ | 企業グループ情報 |
| **Coincheck / Monex** | https://www.monexgroup.jp/ | 親会社グループ関係 |
| **Rakuten Wallet / Rakuten** | https://corp.rakuten.co.jp/ | 親会社グループのエコシステム |
| **DMM Bitcoin / DMM** | https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx | 登録と履歴上の状態 |
| **Mercoin / Mercari** | https://about.mercari.com/ | 親会社グループ関係 |
| **Laser Digital Japan / Nomura** | https://www.laserdigital.com/japan/en/information/about-laser-digital-japan | 日本法人の公式説明 |
| **Crypto Garage** | https://cryptogarage.co.jp/en/about/ | 開示された株主と事業 |
| **JVCEA 会員** | https://jvcea.or.jp/member/ | 現行会員区分 |

## 隣接性証拠の読み方

この表は所有関係と検証入口の地図であり、ランキングではない。グループ関係だけでは、顧客獲得の共有、優遇調達、即時決済、損失支援、商品統合を証明しない。これらは日付付きの親会社開示または事業者発表で個別に評価する。

## 親 FG が一般的に提供するクロス商品

以下のクロス商品はマトリクス全体で繰り返し現れ、VASP がプラグインできる**FG が提供可能なサーフェスのメニュー**を表す：

- **銀行預金レール** — 顧客が即時の円の入出金に使えるグループ内の銀行口座（SBI 新生、楽天銀行、GMO あおぞらネット、大和ネクスト銀行、au じぶん銀行、PayPay 銀行）。グループ内の銀行がなければ、VASP は提携メガバンクのレールを経由しなければならず、相応の決済時間と手数料の不利を伴う。
- **証券ブローカレッジの口座基盤** — クロスセルのプールとしての親会社の既存の金商法ブローカレッジ顧客（SBI 証券、楽天証券、野村證券、大和証券、マネックス証券、GMO クリック証券、au カブコム証券、PayPay 証券）。ブローカレッジ口座からのクロスセルは、日本の VASP にとって最も低 CAC のチャネルである。
- **ウォレット／資金移動業** — メルペイ、PayPay、au PAY、楽天ペイ、楽天 Edy、SBI レミット（アウトバウンド送金）。資金移動業ライセンスは、VASP の取引所ライセンスがカバーしない円側の移動を扱うため、暗号資産交換業と構造的に補完的である。
- **ポイント／ロイヤルティ・クロスリンク** — 楽天ポイント、PayPay ポイント、Ponta、JRE POINT、nanaco ポイント、WAON ポイント、d ポイントは潜在的なロイヤルティ・サーフェスである。実際の暗号資産統合と経済性は日時付き開示で確認する。[[exchanges/jp-cex-points-economy-integration|JP CEX ポイント経済統合]] も参照。
- **カード発行者のサーフェス** — 楽天カード、PayPay カード、[[card-issuers/aeon-financial-service|AEON Financial Service]] カード、JCB（複数 FG）、[[card-issuers/smbc-card|SMBC Card]]、[[card-issuers/mufg-nicos|MUFG NICOS]]。カード発行者の統合により、VASP はカード経由の円のオートチャージや暗号資産の購入を可能にできる。
- **保険のクロスセル** — [[life-insurers/sbi-life|SBI Life]]、[[life-insurers/rakuten-life|Rakuten Life]]、野村保険、AIG。直接的に暗号資産に関連する度合いは低いが、FG 全体のバンドルに貢献する。
- **E コマース／マーケットプレイス** — 楽天市場、メルカリ、DMM マーケットプレイス。マーケットプレイスの統合は、マーチャント側の暗号資産決済の実験と出品者側のオフランプを可能にする。
- **テルコのチャネル** — ソフトバンク、KDDI（au）、NTT ドコモ、楽天モバイル。テルコの販売は、FG に MNO バンドルのオプショナリティを与える。

隣接サーフェス数だけでは統合深度やユニットエコノミクスを立証できない。開示された接続だけを記録し、商業効果は別途評価する。

## マトリクス全体での資金調達コストのレンズ

円の資金調達コスト順位は、親会社所有やグループ内銀行の存在だけから推定できない：

- **グループ内銀行の証拠**：開示された銀行関係と決済商品を記録し、資金調達コスト層を付けない
- **親会社の資本市場の証拠**：上場親会社やウォレット免許は VASP の実際の借入・流動性条件を開示しない
- **外部資金の証拠**：日時付きの信用枠、保証、グループ内貸付または決済契約だけを記録する

資金条件は流動性運営に影響し得るが、グループ関係だけでは低コスト資金、深い板、狭いスプレッドを証明しない。日時付きの信用枠証拠は [[exchanges/jp-crypto-bank-credit-facilities|JP crypto bank credit facilities]] を参照する。

## マトリクス全体でのインシデント対応キャパシティ

インシデント対応力は、親会社ラベルではなく日時付きの資金調達・補填証拠で評価する：

- **観測事例**：DMM Bitcoin の補填額と資金経路は DMM の日時付き開示で確認する
- **未検証グループ**：連結貸借対照表の規模からインシデント支援を推定しない
- **独立系事業者**：上場親会社がないことは対応力を決めない。現金、保険、信用枠、対応計画を確認する

Coincheck と DMM の事例は、開示された資金、保険、分別管理、復旧計画を合わせて確認する必要性を示す。親会社のバックストップがない事業者が回復不能であることを証明しない。

## 境界事例

- **Coincheck Group N.V. の NASDAQ 上場（2024）** — SPAC 合併の後、**Coincheck Inc.（日本）**を、マネックスグループの子会社（日本における企業上の親会社）として読むのが最適か、Coincheck Group N.V. の子会社（米国における最終的な上場親会社）として読むのが最適か、という問いになる。マトリクスの目的上は両者が記録される — 日本の親 FG エコシステムはマネックスを通じて流れ、グローバル資本サーフェスは Coincheck Group N.V. を通じて流れる。マトリクスは両方のラベルを使用する。
- **DMM Bitcoin のワインドダウン（2024）→ SBI VC トレードへの引き継ぎ** — Lazarus 後の SBI VC トレードへの顧客移行は、日本の VASP の歴史において特異な事象である。完了後、DMM HD の行は事実上ゼロになり、移行したユーザー基盤は SBI HD の行へシフトする。マトリクスは、行を削除するのではなく、ワインドダウンの注記とともに 2024  以前の状態を記録する。なぜなら、FG 隣接性の歴史的な教訓（非金融の親会社のバックストップ）が、最も多く引用される先例であり続けるからである。
- **PayPay の Binance Japan における少数ポジション** — 現行持分、ガバナンス権、運営関係は PayPay / Binance の日時付き開示で確認し、投資だけから隣接性強度や戦略意図を推定しない。
- **非銀行の親 FG としてのメルカリ HD** — メルカリは銀行を保有しないが、メルペイの資金移動業ライセンスが [[payments/funds-transfer-vs-prepaid-boundary|資金移動 regulatory route]] を通じて事実上、円の入出金機能を提供する。マトリクスの目的上、これは「グループ内に銀行なし／グループ内にウォレット」として記録される。なぜなら、規制上の実体が銀行法の銀行とは根本的に異なるからである。
- **Laser Digital Japan / Crypto Garage の規制ルート** — Laser Digital Japan は JVCEA 第二種会員で、グループ向け operational services を提供すると説明している。この会員ラベルは第二種金融商品取引業登録ではない。Crypto Garage は FSA 登録暗号資産交換業者（関東 第00029号）である。本マトリクスは両者を機関向け crypto entity として含めるが、架空の共通 FIEA Type II license にまとめず、異なる公開規制ルートを記録する。^[Sources: https://www.laserdigital.com/japan/en/information/about-laser-digital-japan; https://jvcea.or.jp/information/admission-info/20250919-001/; https://cryptogarage.co.jp/en/about/; https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx.]
- **au FG の比較** — KDDI の開示された決済、銀行、証券 entity を記録し、現行登録と発表で暗号資産関係を確認する。欠けたポジションのコストは推定しない。
- **bitFlyer の意図的な独立性** — bitFlyer は複数の買収協議（最近では実現しなかったみずほ FG または SBI FG への売却をめぐる 2024-2025  の憶測）を通じて独立を維持することを選んだ。マトリクスはこれを **低い隣接性** として記録するが、この事業者が親会社のインフラではなくブランド力と JVCEA ネットワークのポジションで補っていることを指摘する。

## 関連

- [[exchanges/INDEX]]
- [[exchanges/jp-vasp-parent-company-map]]
- [[exchanges/jp-crypto-exchange-overview]]
- [[exchanges/jp-cex-points-economy-integration]]
- [[exchanges/jp-crypto-bank-credit-facilities]]
- [[exchanges/jp-vasp-ma-consolidation-history]]
- [[exchanges/jp-vasp-incident-history]]
- [[exchanges/fsa-vasp-registration-system]]
- [[exchanges/jp-vasp-derivative-license-system]]
- [[exchanges/jp-cex-sales-vs-exchange-model-economics]]
- [[exchanges/jp-cex-deposit-token-stablecoin-integration]]
- [[exchanges/jp-cex-staking-lending-regulation]]
- [[exchanges/jp-exchange-sbi-vc-trade]]
- [[exchanges/jp-exchange-gmo-coin]]
- [[exchanges/jp-exchange-bitflyer]]
- [[exchanges/jp-exchange-coincheck]]
- [[exchanges/jp-exchange-rakuten-wallet]]
- [[exchanges/jp-exchange-dmm-bitcoin]]
- [[exchanges/jp-exchange-mercoin]]
- [[exchanges/jp-exchange-laser-digital-japan]]
- [[exchanges/jp-exchange-crypto-garage]]
- [[exchanges/jp-exchange-binance-japan]]
- [[exchanges/jp-exchange-bi-fxtrade]]
- [[exchanges/jp-exchange-digital-asset-markets]]
- [[exchanges/jp-exchange-custodiem]]
- [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis]]
- [[megabanks/sbi-hd]]
- [[payment-firms/gmo-financial-hd]]
- [[securities-firms/monex-group]]
- [[payment-firms/rakuten-fg]]
- [[payment-firms/mercari-hd]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]

## 出典

- FSA 登録暗号資産交換業者（暗号資産交換業者）一覧：https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
- JVCEA 会員一覧（日本暗号資産等取引業協会）：https://jvcea.or.jp/member/
- SBI HD コーポレートサイト：https://www.sbigroup.co.jp/
- GMO インターネットグループ コーポレートサイト：https://www.gmo.jp/
- マネックスグループ コーポレートサイト：https://www.monexgroup.jp/
- 楽天グループ コーポレートサイト：https://corp.rakuten.co.jp/
- メルカリ HD コーポレートサイト：https://about.mercari.com/
- 野村 HD コーポレートサイト：https://www.nomuraholdings.com/
- 大和証券グループ コーポレートサイト：https://www.daiwa-grp.jp/
- DMM グループ コーポレートサイト：https://www.dmm.com/
- bitFlyer Holdings コーポレートサイト：https://corporate.bitflyer.com/
- KDDI コーポレートサイト：https://www.kddi.com/
- ソフトバンクグループ コーポレートサイト：https://group.softbank/
- マトリクス内で行ごとに引用される事業者の IR 開示
