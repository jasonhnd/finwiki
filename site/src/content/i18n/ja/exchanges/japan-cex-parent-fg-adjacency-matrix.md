---
source: exchanges/japan-cex-parent-fg-adjacency-matrix
source_hash: 61805315a848bb6f
lang: ja
status: machine
fidelity: ok
title: "日本の CEX 親 FG 隣接マトリクス"
translated_at: 2026-06-18T23:33:48.325Z
---

# 日本の CEX 親 FG 隣接マトリクス

## TL;DR

日本の**暗号資産交換業者**（FSA 登録の VASP）が単独の事業であることは稀であり、ほぼ常に、すでに証券・銀行・決済・ポイント・送金・保険・E コマースを運営している親**金融グループ（FG）**の内部のノードである。FG 隣接性という次元が決定するのは、(a) VASP の**資金調達コスト**、(b) 親会社のロイヤルティ・サーフェスへの**ポイント・報酬**のクロスリンク、(c) 円の入出金のための**銀行口座預金チャネル**、(d) FG の既存のブローカレッジ／ウォレット／アプリのサーフェスへ暗号資産商品を流すための**販売チャネル**、そして (e) 親会社がすでに運営している FSA 暗号資産トラックと銀行法／金商法トラックの双方にまたがる**規制クラスタ監督**である。このマトリクスは、**各事業者がどの FG に属し、親会社がどのエコシステム・サービスを提供するか**のクロスリファレンスであり、[[exchanges/jp-vasp-parent-company-map|JP VASP parent company map]] における企業所有権の分類体系に対する運用上の補完として [[exchanges/INDEX|exchanges index]] の下に位置する。

## Wiki ルート

これは FG 隣接性の運用マトリクスとして [[exchanges/INDEX|exchanges index]] の下に位置する。このエントリが運用化する所有権の分類体系については [[exchanges/jp-vasp-parent-company-map|JP VASP parent company map]]、より広範な市場ランドスケープについては [[exchanges/jp-crypto-exchange-overview|JP crypto exchange overview]]、ポイント・クロスリンクの次元については [[exchanges/jp-cex-points-economy-integration|JP CEX points-economy integration]]、銀行の資金調達コストの観点については [[exchanges/jp-crypto-bank-credit-facilities|JP crypto bank credit facilities]]、今日の親 FG マップを生み出した構造的な再編については [[exchanges/jp-vasp-ma-consolidation-history|JP VASP M&A consolidation history]]、そしてすべての行が共有する監督フレームワークについては [[exchanges/fsa-vasp-registration-system|FSA VASP registration system]] と併せて読むこと。主要なポジションの実体アンカーは [[megabanks/sbi-hd|SBI HD]]、[[payment-firms/gmo-financial-hd|GMO Financial HD]]、[[securities-firms/monex-group|Monex Group]]、[[payment-firms/rakuten-fg|Rakuten FG]]、[[payment-firms/mercari-hd|Mercari HD]]、[[securities-firms/nomura-hd|Nomura HD]]、[[securities-firms/daiwa-sg|Daiwa Securities Group]] である。

## なぜこのマトリクスが重要か

「親 FG が実際に VASP に何を与えるのか」という問いは、机上のものではない。数百万のアクティブ口座を持つ**証券ブローカレッジ**を運営する親会社を持つ VASP は、暗号資産商品を、その既存の口座基盤におおむねゼロの顧客獲得コストでクロスセルできる。**ダイレクト・バンク**を運営する親会社を持つ VASP は、インターバンク手数料も決済ラグもなしに、グループ内で円預金を決済できる。**決済ウォレット**を運営する親会社を持つ VASP は、暗号資産から法定通貨へのオフランプを、第三者の PSP ではなくウォレットのプリペイド残高を経由してルーティングできる。**ポイント・ロイヤルティ・プログラム**を運営する親会社を持つ VASP は、親会社のロイヤルティ在庫を用いてプロモーション用の暗号資産報酬を発行できる。そして **E コマースやマーケットプレイス**事業を運営する親会社を持つ VASP は、マーチャント側の暗号資産の実験を、親会社の既存のマーチャント関係を通じて決済できる。

これらの接続のそれぞれは、**CAC**（顧客獲得コスト）、**ユニットエコノミクス**、**円の資金調達コスト**、**商品スピード**（親会社のインフラを用いて新機能をどれだけ速くリリースできるか）、そして**インシデント対応の体制**（親会社の流動性によってハックがクッションされうるか — [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack detailed analysis]] では親会社の DMM HD が顧客の補填をカバーした）に対して測定可能な影響を持つ。以下のマトリクスは、各親 FG と、それが提供する具体的なクロスサービスを名指しするものであり、これにより読者は、商品レベルの比較を行う前に「この VASP は親会社のコンテキストを剥ぎ取ったときにどう見えるか」に答えることができる。

## 事業者別プロファイル

### SBI VC トレード — SBI HD（8473）

**親 FG**：[[megabanks/sbi-hd|SBI HD]]（東証プライム 8473）、[[securities-firms/sbi-securities|SBI Securities]] を通じたリテール証券口座数で日本最大のオンライン金融コングロマリット。**提供されるグループ・サービス**：
- **証券クロスセル** — SBI VC トレードは SBI 証券の口座基盤（日本の第 1  オンライン証券）にクロスプロモーションのレーンとして手を伸ばし、SBI 共通 ID がグループ・ブランド間で口座をリンクする
- **銀行預金チャネル** — [[regional-banks/sbi-shinsei-bank|SBI Shinsei Bank]]（グループ銀行、みずほ系のレガシー）がグループ内の円決済レールを提供する。[[megabanks/sbi-regional-bank-hd|SBI Regional Bank HD]]（地方銀行の持株会社）および提携地方銀行が追加の銀行預金を提供する
- **送金** — [[payment-firms/sbi-remit|SBI Remit]] がグループのアウトバウンド送金／資金移動業のサーフェスを運営する
- **FX 隣接性** — [[securities-firms/sbi-fx-trade|SBI FX Trade]] がレバレッジ FX を運営し、系列の [[exchanges/jp-exchange-bi-fxtrade|BI FXTRADE]] がグループ内で暗号資産デリバティブのライセンスを保有する
- **保険／資産運用** — [[life-insurers/sbi-life|SBI Life]]、[[non-life-insurers/sbi-insurance|SBI Insurance]]、[[asset-managers/sbi-asset-management|SBI Asset Management]] がグループの商品の厚みを完成させる

**隣接性の強度**：非常に高い — 親グループが統合型の金融スーパーストア・モデルを運営しており、VASP はそのクロスセル・サーフェスの一つである。円の入出金が業界で最も速いのは、SBI 新生の銀行レールに一部起因する。詳細：[[exchanges/jp-exchange-sbi-vc-trade|jp-exchange-sbi-vc-trade]]。

### GMO コイン — GMO フィナンシャル HD（7177）／ GMO インターネットグループ（9449）

**親 FG**：[[payment-firms/gmo-financial-hd|GMO Financial HD]]（東証プライム 7177）。それ自体が GMO インターネットグループ（東証プライム 9449）の子会社である。**提供されるグループ・サービス**：
- **証券クロスセル** — [[securities-firms/gmo-click-securities|GMO Click Securities]]（グループのブローカレッジ、これも GMO フィナンシャル HD の子会社）が金商法側の商品の厚みと共有インフラを提供する
- **ダイレクト・バンク** — [[payment-firms/gmo-aozora-net|GMO Aozora Net Bank]]（あおぞら銀行との合弁）がグループのインターネット銀行として運営され、内部の円預金レールを提供する
- **決済処理** — [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]（東証プライム、別途上場）はトップ 3  の日本の PSP である。[[payment-firms/gmo-epsilon|GMO Epsilon]] は SME 重視の PSP アームである
- **BNPL** — [[payment-firms/gmo-postpay|GMO Postpay]] がグループの BNPL ／後払いラインを運営する
- **インターネット・インフラ** — より広範な GMO インターネットグループが GMO クラウド／ドメイン／SSL 事業を運営し、運用・エンジニアリングの厚みを提供する

**隣接性の強度**：高い — ブローカレッジ、銀行、決済、暗号資産にまたがる共有エンジニアリング文化を持つ、インターネット金融の純粋型のシナジー。詳細：[[exchanges/jp-exchange-gmo-coin|jp-exchange-gmo-coin]]。

### bitFlyer — 独立系（上場親会社なし）

**親 FG**：bitFlyer Holdings（非公開、創業者＋経営陣＋少数の金融投資家による資本構成）。**提供されるグループ・サービス**：
- **メガバンクの意味での FG エコシステム・サービスなし** — bitFlyer は、メガバンクや E コマースの親会社を持たない最大の独立系 VASP である
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

### Rakuten Wallet — 楽天グループ（4755）／ 楽天 FG

**親 FG**：楽天グループ（東証プライム 4755）内の [[payment-firms/rakuten-fg|Rakuten FG]]。**提供されるグループ・サービス**：
- **銀行** — 楽天銀行（別途上場、東証プライム 5838）は日本最大級のインターネット銀行の一つである。支配的なグループ内の円レールを提供する
- **証券** — [[securities-firms/rakuten-securities|Rakuten Securities]]（オンライン証券、口座数でトップ 3 ）が金商法のブローカレッジ・サーフェスを提供する
- **カード** — [[card-issuers/rakuten-card|Rakuten Card]]（取引額で日本最大のカード発行者）がカード側のサーフェスを提供する
- **ポイント** — 楽天ポイント（日本最大のロイヤルティ・プログラム、約 90M の ID 保有者）がクロスリンク・サーフェスである。Rakuten Wallet は歴史的に楽天ポイントを使った暗号資産の購入を可能にしてきた
- **Edy** — [[payment-firms/rakuten-edy|Rakuten Edy]] はプリペイド電子マネーのアームである。[[payments/japan-prepaid-electronic-money-operator-matrix|JP prepaid e-money operator matrix]] を参照
- **保険** — [[life-insurers/rakuten-life|Rakuten Life]]、[[non-life-insurers/rakuten-general-insurance|Rakuten General Insurance]]、[[non-life-insurers/rakuten-insurance-hd|Rakuten Insurance HD]]
- **E コマース** — 楽天市場（日本最大のマーケットプレイス）は、グループ内の暗号資産の実験をテストできるマーチャント側のサーフェスである
- **モバイル** — 楽天モバイル（MNO）がグループにテルコのチャネルを与える

**隣接性の強度**：非常に高い — 日本で最も深い FG エコシステムの一つであり、ユニークなポイント・クロスリンクが VASP の中での際立った特徴である。詳細：[[exchanges/jp-exchange-rakuten-wallet|jp-exchange-rakuten-wallet]]。

### DMM Bitcoin — DMM HD（非公開）

**親 FG**：DMM.com グループ（非公開）。**提供されるグループ・サービス**：
- **証券** — DMM.com 証券が FX ／株式のブローカー・アームを運営する
- **暗号資産隣接の商品**：[[exchanges/jp-exchange-dmm-com-securities|DMM.com Securities]] が金商法の暗号資産デリバティブ・ラインを保有する
- **グループ内に銀行なし** — DMM は円レールに外部のメガバンク提携を用いる
- **販売** — DMM のアダルトコンテンツ／動画／E コマースのサーフェスが、他のどの日本の VASP の親会社にも並ぶもののないマーケティング・リーチを提供する
- **グループの財務的キャパシティ** — Lazarus による 2024-05  ハックの補填は親グループ（約 JPY 48  億円）によって賄われ、FG の単独の資本バックストップとしての役割を実証した：[[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack detailed analysis]] を参照。DMM Bitcoin はその後、SBI VC トレードへのサービス引き継ぎと 2024

 における顧客移行を発表した

**隣接性の強度**：中（2024 以前）→ ほぼゼロ（引き継ぎ後） — このケースは、**十分な現金を持つ非金融の親 FG でさえ VASP のハックをバックストップできる**ことを実証しており、最終的なワインドダウンは、グループの戦略的優先順位がシフトしたときの限界を示している。詳細：[[exchanges/jp-exchange-dmm-bitcoin|jp-exchange-dmm-bitcoin]]。

### Mercoin — メルカリ HD（4385）

**親 FG**：[[payment-firms/mercari-hd|Mercari HD]]（東証プライム 4385）。**提供されるグループ・サービス**：
- **ウォレット／決済** — メルペイ（グループのウォレット、資金移動業ライセンスを保有）がグループ内の円レールを提供し、メルカリのポイント／メルカリの売上金を経由した Mercoin の BTC 購入の主要な入口である
- **マーケットプレイス** — メルカリ（日本最大の C2C マーケットプレイス、約 22M の月間アクティブ）が顧客獲得チャネルである。マーケットプレイスの UX により、出品者は Mercoin を通じて売上金を直接 BTC に変換できる
- **グループ内に銀行なし** — メルカリは銀行を運営しない。円レールはメルペイの資金移動業ライセンス＋提携銀行を経由する
- **ポイント・クロスリンク** — メルカリポイントは Mercoin の内部で BTC と交換でき、これが際立ったクロスリンクである
- **暗号資産商品**：Mercoin は BTC と少数の追加暗号資産を提供する。アプリ内の UX はメルカリのモバイルアプリに統合されている（日本の VASP の中では稀な埋め込みの深さ）

**隣接性の強度**：非常に高い — メルカリ HD は、マーケットプレイスの顧客基盤を通じて、事実上専属のオンランプを構築した。商品戦略は、BTC の購入を別個の取引所ではなくメルカリの機能のように感じさせることである。詳細：[[exchanges/jp-exchange-mercoin|jp-exchange-mercoin]]。

### Laser Digital Japan — 野村 HD（8604）

**親 FG**：[[securities-firms/nomura-hd|Nomura HD]]（東証プライム 8604）、Laser Digital Holdings（スイスを拠点とするデジタル資産子会社）を通じて。**提供されるグループ・サービス**：
- **機関投資家ブローカレッジ** — 野村證券（グループのブローカレッジ、リテール資産で日本第 1 ）が機関投資家の顧客基盤とプライムブローカレッジの隣接性を提供する
- **資産運用** — [[asset-managers/nomura-asset-management|Nomura Asset Management]] が機関投資家向けの ETF ／ファンドのエンジニアリングの厚みを提供する
- **信託銀行** — [[trust-banks/nomura-trust-bank|Nomura Trust Bank]] が機関投資家フローのための信託／カストディ側の法的実体を提供する
- **ライセンス** — Laser Digital Japan は、標準的な暗号資産交換業ではなく金商法第 2  種（デリバティブ重視）を保有しており、リテール現物ではなく機関投資家／デリバティブ重視を反映している
- **グローバルな Laser Digital ネットワーク** — スイス本社、ドバイ（VARA ライセンス）、アブダビ、ロンドンのサーフェスが、機関投資家フローを日本の実体に供給する

**隣接性の強度**：非常に高い（機関投資家のみ） — 野村のコミットメントは、リテール現物ではなく機関投資家／デリバティブのサーフェスに対するものである。FG のクロスリンクは、銀行 FG のリテール VASP が用いる消費者向けクロスセルではなく、ブローカレッジ顧客のカバレッジと信託銀行のカストディである。詳細：[[exchanges/jp-exchange-laser-digital-japan|jp-exchange-laser-digital-japan]]。

### Crypto Garage — 大和証券グループ（8601）＋ DG ／ 野村のコネクション

**親 FG**：[[securities-firms/daiwa-sg|Daiwa Securities Group]]（東証プライム 8601）。資本構成には DG ホールディングス（デジタルガレージ 4819）、東京短資、その他の戦略的投資家が含まれる。**提供されるグループ・サービス**：
- **証券** — 大和証券（グループのブローカレッジ、リテール資産で日本第 2 ）が機関投資家のサーフェスを提供する
- **資産運用** — [[asset-managers/daiwa-asset-management|Daiwa Asset Management]] が資産運用のエンジニアリングの厚みを提供する
- **信託銀行** — [[trust-banks/daiwa-living-trust|Daiwa Living Trust]] ／ 大和トラストの機能
- **ダイレクト・バンク** — [[regional-banks/daiwa-next-bank|Daiwa Next Bank]]（グループのダイレクト・バンク）がグループ内の円レールを提供する
- **ライセンス** — Crypto Garage は第 2  種／機関投資家重視の構造を保有しており、Laser Digital Japan と姿勢が類似している。この実体は、リテール現物ではなく PTS ／機関投資家／DCJPY ／ステーブルコイン発行の実験に向けて位置づけられている

**隣接性の強度**：高い（機関投資家／実験的） — Crypto Garage は大和の機関投資家サーフェスと JPX 隣接の実験の交点に位置し、機関投資家向け現物のために同じ JPX ／三井物産／マネックスのコンソーシアム内に姉妹実体 [[exchanges/jp-exchange-digital-asset-markets|Digital Asset Markets]] を持つ。詳細：[[exchanges/jp-exchange-crypto-garage|jp-exchange-crypto-garage]]。

### PayPay 関連 — ソフトバンク FG クラスタ

**親 FG**：PayPay Corp と PayPay FG クラスタを通じたソフトバンクグループ（東証プライム 9984）。**提供されるグループ・サービス**：
- **ウォレット** — PayPay（GMV で日本最大の QR ／コード決済）がクロスリンク・サーフェスである
- **カード** — PayPay カード（カード発行者）と PayPay カード ゴールドが PayPay FG の内部に位置する
- **銀行** — PayPay 銀行（旧ジャパンネット銀行）がグループ内のインターネット銀行である
- **証券** — PayPay 証券が金商法のブローカー・サーフェスを提供する
- **テルコ** — ソフトバンク（東証プライム 9434, 、別途上場）が親会社のテルコ・チャネルである。LINE ヤフー（東証プライム 4689）がメッセージング／検索のサーフェスである
- **暗号資産リンク**：PayPay は [[exchanges/jp-exchange-binance-japan|Binance Japan]]（取得した SEBC のライセンス・ビークル）の約 40% を保有しており、自社名義の VASP ライセンスを持たずに、PayPay FG に間接的な暗号資産取引所のエクスポージャーを与えている

**隣接性の強度**：中（間接的） — PayPay FG は強力な決済＋銀行＋テルコ＋証券のスタックを運営しているが、自社ブランドの VASP ではなく、Binance Japan への少数投資を通じて暗号資産に関与している。これは 2026 時点での意図的なオプショナリティの姿勢である。

### au 関連 — KDDI クラスタ

**親 FG**：au じぶん銀行／ au PAY ／ au フィナンシャル クラスタを通じた KDDI（東証プライム 9433）。**提供されるグループ・サービス**：
- **テルコ** — KDDI（au）は 3  MNO の一つである
- **銀行** — au じぶん銀行（MUFG との合弁）がグループ内のインターネット銀行である
- **ウォレット** — au PAY（QR ／コード決済）と au PAY カードが FG の内部に位置する
- **証券** — au カブコム証券（MUFG との合弁、旧カブドットコム証券）が金商法のブローカー・サーフェスを提供する
- **暗号資産リンク**：2026  時点で、au FG は自社ブランドの VASP を運営していない。FG の暗号資産の姿勢は、ライセンス保有ではなく、観察的／提携ベースである

**隣接性の強度**：低い（自社 VASP なし） — au FG は銀行／ウォレット／ブローカレッジ／カードのスタックを構築したが、暗号資産取引所に直接参入していない。これは PayPay FG の Binance Japan 少数ポジションに対する構造的な反事実である。

## 大比較マトリクス表

| VASP | 親 FG | 東証コード | グループ内銀行 | グループ内証券 | グループ内ウォレット／決済 | グループ内ポイント | 保険 | E コマース／マーケットプレイス | 隣接性の強度 | クロスセルのフライホイール |
|---|---|---|---|---|---|---|---|---|---|---|
| **SBI VC トレード** | [[megabanks/sbi-hd\|SBI HD]] | 8473 | [[regional-banks/sbi-shinsei-bank\|SBI Shinsei Bank]] ＋ 地方銀行 HD | [[securities-firms/sbi-securities\|SBI Securities]]（日本第 1  オンライン） | [[payment-firms/sbi-remit\|SBI Remit]] | SBI 共通 ID | [[life-insurers/sbi-life\|SBI Life]] ＋ [[non-life-insurers/sbi-insurance\|SBI Insurance]] | （限定的） | 非常に高い | あり — スーパーストア・モデル |
| **GMO コイン** | [[payment-firms/gmo-financial-hd\|GMO Financial HD]] ／ GMO インターネット | 7177 ／ 9449 | [[payment-firms/gmo-aozora-net\|GMO Aozora Net]] | [[securities-firms/gmo-click-securities\|GMO Click Securities]] | [[payment-firms/gmo-payment-gateway\|GMO Payment Gateway]] ＋ [[payment-firms/gmo-epsilon\|GMO Epsilon]] | （限定的） | （限定的） | （限定的） | 高い | あり — インターネット金融 |
| **bitFlyer** | 独立系 | n/a | 提携銀行のみ | （なし） | （なし） | 提携のみ | （なし） | （なし） | 低い | なし — ブランドのみ |
| **Coincheck** | [[securities-firms/monex-group\|Monex Group]]（Coincheck Group N.V. 経由、NASDAQ:CNCK） | 8698 （日本）／ CNCK（米国） | （日本にはなし） | マネックス証券 | （なし） | マネックスポイント | （なし） | （なし） | 中〜高 | あり — 証券クロスセル ＋ グローバル資本 |
| **Rakuten Wallet** | [[payment-firms/rakuten-fg\|Rakuten FG]] ／ 楽天グループ | 4755 | 楽天銀行（5838） | [[securities-firms/rakuten-securities\|Rakuten Securities]] | [[card-issuers/rakuten-card\|Rakuten Card]] ＋ [[payment-firms/rakuten-edy\|Rakuten Edy]] | 楽天ポイント（約 90M ID） | [[life-insurers/rakuten-life\|Rakuten Life]] ＋ [[non-life-insurers/rakuten-general-insurance\|Rakuten General Insurance]] | 楽天市場 | 非常に高い | あり — フル・スーパーストア ＋ ポイント |
| **DMM Bitcoin** | DMM HD（非公開） | n/a | （なし） | DMM.com 証券 | （なし） | DMM ポイント | （なし） | DMM マーケットプレイス | 中 → ワインドダウン 2024 | （かつての）マーケティング・リーチ |
| **Mercoin** | [[payment-firms/mercari-hd\|Mercari HD]] | 4385 | （なし） | （なし） | メルペイ（資金移動業） | メルカリポイント | （なし） | メルカリ（日本最大の C2C） | 非常に高い | あり — 専属マーケットプレイス・オンランプ |
| **Laser Digital Japan** | [[securities-firms/nomura-hd\|Nomura HD]] | 8604 | （自社銀行なし） | 野村證券（日本第 1  資産） | （なし） | （なし） | （野村保険） | （なし） | 非常に高い（機関投資家） | あり — 機関投資家の顧客カバレッジ |
| **Crypto Garage** | [[securities-firms/daiwa-sg\|Daiwa SG]] ＋ DG ＋ 東京短資 ＋ 野村 | 8601 （大和） | [[regional-banks/daiwa-next-bank\|Daiwa Next Bank]] | 大和証券（日本第 2  資産） | （なし） | （なし） | （大和ライフ） | （なし） | 高い（機関投資家） | あり — 機関投資家 ＋ JPX 隣接 |
| **PayPay 関連（Binance Japan 少数経由）** | ソフトバンクグループ／ PayPay FG | 9984 | PayPay 銀行 | PayPay 証券 | PayPay（日本最大の QR） | PayPay ポイント | （限定的） | （限定的） | 中（間接的、約 40% の持分のみ） | 間接的 — オプショナリティ |
| **au 関連** | KDDI | 9433 | au じぶん銀行（MUFG と） | au カブコム証券（MUFG と） | au PAY | Ponta 隣接 | （au 保険） | au マーケット | 低い（自社 VASP なし） | （暗号資産実体なし） |

## FG 隣接性の強度ランキング

このマトリクスを隣接性の強度による単一のランキングとして読む（高 = 親 FG が銀行／証券／ウォレット／ポイント／保険／E コマースの複数の次元にわたって有意に貢献する）：

1. **SBI VC トレード**（SBI HD） — 金融スーパーストアの親会社、最も深いクロス商品のリーチ
2. **Rakuten Wallet**（楽天 FG） — スーパーストア ＋ ユニークなポイント・クロスリンク（約 90M の楽天ポイント ID）
3. **Mercoin**（メルカリ HD） — 専属の C2C マーケットプレイス・オンランプ ＋ メルペイ資金移動業ウォレット統合
4. **Laser Digital Japan**（野村 HD） — 機関投資家のみ、深いブローカレッジ ＋ 信託銀行の隣接性
5. **GMO コイン**（GMO フィナンシャル HD ／ GMO インターネット） — 銀行 ＋ ブローカレッジ ＋ PSP を持つインターネット金融の親会社
6. **Coincheck**（マネックスグループ ／ Coincheck Group N.V.） — 証券クロスセル ＋ グローバル資本サーフェス
7. **Crypto Garage**（大和 SG ＋ DG ＋ 東京短資 ＋ 野村） — 機関投資家 ＋ JPX 隣接の実験的サーフェス
8. **PayPay 関連（Binance Japan 経由）**（ソフトバンク／ PayPay FG） — 少数ポジション（約 40%）、間接的な隣接性
9. **DMM Bitcoin**（DMM HD、2024 以前） — 非金融の親会社のバックストップの役割を実証（現在はワインドダウン済み）
10. **bitFlyer**（独立系） — FG エコシステム・サービスなし。ブランド ＋ JVCEA ネットワークのポジションのみ
11. **au 関連**（KDDI） — グループ内に VASP なし。参照／反事実の行

**銀行 FG のリテール・スーパーストア・モデル（SBI、楽天）**、**専属マーケットプレイス・オンランプ・モデル（Mercoin）**、そして**機関投資家ブローカレッジ隣接モデル（Laser Digital、Crypto Garage）**は、構造的に異なる三つの高強度の隣接アーキタイプである。日本の VASP の競争ダイナミクスを分析する読者は、手数料、商品、または出来高の指標でピア比較を行う前に、各事業者がどのアーキタイプに属するかを特定する必要がある。

## 親 FG が一般的に提供するクロス商品

以下のクロス商品はマトリクス全体で繰り返し現れ、VASP がプラグインできる**FG が提供可能なサーフェスのメニュー**を表す：

- **銀行預金レール** — 顧客が即時の円の入出金に使えるグループ内の銀行口座（SBI 新生、楽天銀行、GMO あおぞらネット、大和ネクスト銀行、au じぶん銀行、PayPay 銀行）。グループ内の銀行がなければ、VASP は提携メガバンクのレールを経由しなければならず、相応の決済時間と手数料の不利を伴う。
- **証券ブローカレッジの口座基盤** — クロスセルのプールとしての親会社の既存の金商法ブローカレッジ顧客（SBI 証券、楽天証券、野村證券、大和証券、マネックス証券、GMO クリック証券、au カブコム証券、PayPay 証券）。ブローカレッジ口座からのクロスセルは、日本の VASP にとって最も低 CAC のチャネルである。
- **ウォレット／資金移動業** — メルペイ、PayPay、au PAY、楽天ペイ、楽天 Edy、SBI レミット（アウトバウンド送金）。資金移動業ライセンスは、VASP の取引所ライセンスがカバーしない円側の移動を扱うため、暗号資産交換業と構造的に補完的である。
- **ポイント／ロイヤルティ・クロスリンク** — 楽天ポイント（最大）、PayPay ポイント、Ponta（au 隣接）、JRE POINT（交通、別個）、nanaco ポイント、WAON ポイント、d ポイント（NTT ドコモ）。ポイント・クロスリンクは、現金消費なしのプロモーション用暗号資産報酬の発行を可能にする。事業者別の統合の深さについては [[exchanges/jp-cex-points-economy-integration|JP CEX points-economy integration]] を参照。
- **カード発行者のサーフェス** — 楽天カード、PayPay カード、[[card-issuers/aeon-financial-service|AEON Financial Service]] カード、JCB（複数 FG）、[[card-issuers/smbc-card|SMBC Card]]、[[card-issuers/mufg-nicos|MUFG NICOS]]。カード発行者の統合により、VASP はカード経由の円のオートチャージや暗号資産の購入を可能にできる。
- **保険のクロスセル** — [[life-insurers/sbi-life|SBI Life]]、[[life-insurers/rakuten-life|Rakuten Life]]、野村保険、AIG。直接的に暗号資産に関連する度合いは低いが、FG 全体のバンドルに貢献する。
- **E コマース／マーケットプレイス** — 楽天市場、メルカリ、DMM マーケットプレイス。マーケットプレイスの統合は、マーチャント側の暗号資産決済の実験と出品者側のオフランプを可能にする。
- **テルコのチャネル** — ソフトバンク、KDDI（au）、NTT ドコモ、楽天モバイル。テルコの販売は、FG に MNO バンドルのオプショナリティを与える。

これらのサーフェスのうち 4-5 個以上にプラグインする VASP（SBI VC トレード、Rakuten Wallet）は、0-1  個にプラグインする VASP（bitFlyer、引き継ぎ後の DMM Bitcoin）とは構造的に異なるユニットエコノミクスで運営される。これは、このマトリクスが支える最も重要なフレーミングである。

## マトリクス全体での資金調達コストのレンズ

このマトリクスの VASP の円資金調達コストのランキングは、グループ内の銀行の存在と親 FG のクレジット・プロファイルに従う：

- **最も低い資金調達コスト**：SBI VC トレード（グループ内に SBI 新生）、Rakuten Wallet（グループ内に楽天銀行）、GMO コイン（グループ内に GMO あおぞらネット）、Crypto Garage（グループ内に大和ネクスト銀行） — いずれも直接のグループ内銀行レールを持ち、親 FG のクレジット格付けが安価な運営資本を支える
- **中程度の資金調達コスト**：Coincheck（マネックスグループ、グループ内銀行はないが資本市場アクセスを持つ上場親会社）、Mercoin（メルカリ HD、メルペイの資金移動業が円側をカバーするが実際の銀行はない）
- **より高い資金調達コスト**：bitFlyer（独立系、上場親会社なし）、DMM Bitcoin（引き継ぎ前。DMM HD は非公開で、公的な資本市場アクセスなし）、Laser Digital Japan（機関投資家のみ、野村 HD は強いがその実体に注力した直接のグループ内銀行なし）

資金調達コストの次元が重要なのは、暗号資産取引所の運営が、板の流動性、顧客の出金バッファ、運用上の円ポジションの資金を賄うために**相当な運転資本**を必要とするからである。安価なグループ内資金を持つ VASP は、外部の銀行ラインや無担保のペーパーの利用を強いられる独立系 VASP よりも、深い板とタイトなスプレッドを運営できる。銀行クレジット・ラインの詳細については [[exchanges/jp-crypto-bank-credit-facilities|JP crypto bank credit facilities]] を参照。

## マトリクス全体でのインシデント対応キャパシティ

ハック関連の補填事象を吸収する親 FG のキャパシティは、劇的に異なる：

- **高いキャパシティ（実証済み）**：DMM HD は、DMM Bitcoin のための Lazarus による 48B の 2024-05  ハックの補填を、希薄化を伴う外部資金調達なしにグループの現金から賄った。SBI HD、楽天グループ、メルカリ HD、野村 HD は、いずれも原則として同等以上のバランスシートのキャパシティを利用可能である
- **高いキャパシティ（未検証）**：マネックスグループ、GMO インターネットグループ、大和 SG
- **より低いキャパシティ**：bitFlyer（独立系、メガ親会社なし）、2018  以前の Coincheck（2018-01  の NEM ハックの時点では独立系であり、これが補填が Coincheck 創業者のエクイティを消費し、マネックスの買収を引き起こした理由である）

Coincheck の NEM 2018-01  インシデント（[[exchanges/coincheck-nem-hack-detailed-analysis|Coincheck NEM hack detailed analysis]]）と DMM Bitcoin の 2024-05  インシデント（[[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack detailed analysis]]）からの教訓は、**親 FG の現金バックストップのキャパシティは、日本の VASP の長期的な立ち位置を評価する際に最も重要な非自明な次元の一つ**であるということである — 親会社のバックストップを持たない VASP は、希薄化を伴う外部資金調達やサービスの終了なしには、大規模なハックを生き残ることができない。

## 境界事例

- **Coincheck Group N.V. の NASDAQ 上場（2024）** — SPAC 合併の後、**Coincheck Inc.（日本）**を、マネックスグループの子会社（日本における企業上の親会社）として読むのが最適か、Coincheck Group N.V. の子会社（米国における最終的な上場親会社）として読むのが最適か、という問いになる。マトリクスの目的上は両者が記録される — 日本の親 FG エコシステムはマネックスを通じて流れ、グローバル資本サーフェスは Coincheck Group N.V. を通じて流れる。マトリクスは両方のラベルを使用する。
- **DMM Bitcoin のワインドダウン（2024）→ SBI VC トレードへの引き継ぎ** — Lazarus 後の SBI VC トレードへの顧客移行は、日本の VASP の歴史において特異な事象である。完了後、DMM HD の行は事実上ゼロになり、移行したユーザー基盤は SBI HD の行へシフトする。マトリクスは、行を削除するのではなく、ワインドダウンの注記とともに 2024  以前の状態を記録する。なぜなら、FG 隣接性の歴史的な教訓（非金融の親会社のバックストップ）が、最も多く引用される先例であり続けるからである。
- **PayPay の Binance Japan における少数ポジション** — PayPay FG は Binance Japan（取得した SEBC のライセンス・ビークル）の約 40% を保有しているが、Binance Japan は PayPay FG の商品としてではなく、Binance のグローバル・ブランドの下で運営している。マトリクスはこれを **なし** ではなく **中（間接的）** の隣接性として記載する。なぜなら、このエクイティのリンクが、ゼロから構築する設備投資なしに、日本の暗号資産に関する PayPay FG のオプショナリティを与えるからである。
- **非銀行の親 FG としてのメルカリ HD** — メルカリは銀行を保有しないが、メルペイの資金移動業ライセンスが [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer regulatory route]] を通じて事実上、円の入出金機能を提供する。マトリクスの目的上、これは「グループ内に銀行なし／グループ内にウォレット」として記録される。なぜなら、規制上の実体が銀行法の銀行とは根本的に異なるからである。
- **Laser Digital Japan ／ Crypto Garage が暗号資産交換業ではなく金商法第 2  種を保有していること** — これらの機関投資家／デリバティブの実体は、消費者向け現物の暗号資産交換業のルートではなく、[[exchanges/jp-vasp-derivative-license-system|FIEA Type 2 derivative]] のルートの下でライセンスを受けている。マトリクスがこれらを含めるのは、親 FG（野村、大和）が明白に暗号資産にアクティブであり、運用上の FG 隣接性のメカニクスが同じだからである — ただし、規制上のライセンス・スタックは異なる。
- **au FG の反事実** — KDDI は日本で最も深い非銀行 FG の決済／銀行／ブローカレッジのスタックの一つを構築したが、暗号資産取引所に参入していない。マトリクスは「VASP の実体が付随しないときに FG 隣接性がどう見えるか」の参照として空の行を保持しており、これは欠けている暗号資産ポジションのコストをベンチマークするのに有用である。
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
