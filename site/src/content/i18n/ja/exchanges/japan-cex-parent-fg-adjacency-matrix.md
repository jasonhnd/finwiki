---
source: exchanges/japan-cex-parent-fg-adjacency-matrix
source_hash: 760ca1603f8f9c2b
lang: ja
status: machine
fidelity: ok
title: "日本 CEX 親会社 FG 隣接性マトリクス"
translated_at: 2026-06-02T12:19:04.239Z
---
# 日本 CEX 親会社 FG 隣接性マトリクス

## 要約

日本の **暗号資産交換業者**（FSA 登録 VASP）が単独事業であることはまれで、ほとんどの場合、証券、銀行、決済、ポイント、送金、保険、E コマースのいずれかをすでに運営する親 **金融グループ（FG）** の一ノードである。FG 隣接性は、(a) VASP の **funding cost**、(b) 親会社のロイヤルティ面との **ポイント・リワード連携**、(c) JPY 入出金の **銀行口座入金チャネル**、(d) FG 既存の証券 / wallet / app 面へ暗号資産商品を流す **流通チャネル**、(e) FSA の暗号資産監督ラインと親会社がすでに運営する銀行法 / FIEA ラインをまたぐ **規制クラスター監督** を左右する。本マトリクスは、[[exchanges/INDEX|exchanges index]] 配下で、[[exchanges/jp-vasp-parent-company-map|JP VASP parent company map]] の企業所有分類を運用面から補完し、**各事業者がどの FG に属し、その親会社がどのエコシステムサービスを提供しているか** を対応づける。

## ウィキ上の位置づけ

本項目は FG 隣接性の運用マトリクスとして [[exchanges/INDEX|exchanges index]] の配下に位置する。この項目が運用面へ落とし込む所有構造の分類は [[exchanges/jp-vasp-parent-company-map|JP VASP parent company map]]、より広い市場概観は [[exchanges/jp-crypto-exchange-overview|JP crypto exchange overview]]、ポイント連携の次元は [[exchanges/jp-cex-points-economy-integration|JP CEX points-economy integration]]、銀行 funding cost の観点は [[exchanges/jp-crypto-bank-credit-facilities|JP crypto bank credit facilities]]、現在の親 FG マップを生んだ構造再編は [[exchanges/jp-vasp-ma-consolidation-history|JP VASP M&A consolidation history]]、全行に共通する監督枠組みは [[exchanges/fsa-vasp-registration-system|FSA VASP registration system]] とあわせて読む。主要ポジションのエンティティアンカーは [[JapanFG/sbi-hd|SBI HD]]、[[JapanFG/gmo-financial-hd|GMO Financial HD]]、[[JapanFG/monex-group|Monex Group]]、[[JapanFG/rakuten-fg|Rakuten FG]]、[[JapanFG/mercari-hd|Mercari HD]]、[[JapanFG/nomura-hd|Nomura HD]]、[[JapanFG/daiwa-sg|Daiwa Securities Group]]。

## このマトリクスが重要な理由

「親 FG が VASP に実際に何を与えるのか」という問いは机上の議論ではない。親会社が数百万のアクティブ口座を持つ **証券会社** を運営していれば、VASP はほぼゼロの顧客獲得コストで既存口座基盤へ暗号資産商品をクロスセルできる。親会社が **ダイレクト銀行** を持てば、銀行間手数料や決済遅延なしにグループ内で JPY 入金を処理できる。親会社が **決済 wallet** を持てば、第三者 PSP を介さず wallet のプリペイド残高を通じて暗号資産から法定通貨へのオフランプを設計できる。親会社が **ポイントロイヤルティプログラム** を持てば、親会社のロイヤルティ在庫を使って販促用暗号資産リワードを組成できる。親会社が **E コマースまたは marketplace** 事業を持てば、既存加盟店関係を通じて加盟店側の暗号資産実験を決済できる。

これらの接続はそれぞれ、**CAC**（顧客獲得コスト）、**ユニットエコノミクス**、**JPY funding cost**、**プロダクト速度**（親会社インフラを使って新機能をどれだけ早く出せるか）、**インシデント対応態勢**（[[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack detailed analysis]] で親会社 DMM HD が顧客補償を負担したように、ハックを親会社流動性で吸収できるか）に測定可能な影響を与える。下のマトリクスは各親 FG と提供される具体的なクロスサービスを列挙し、読者が商品レベルの比較に入る前に「親会社文脈を取り除くと、この VASP はどのように見えるか」を把握できるようにする。

## 事業者別プロファイル

### SBI VC Trade — SBI HD (8473)

**親 FG**: [[JapanFG/sbi-hd|SBI HD]]（TSE Prime 8473）。[[JapanFG/sbi-securities|SBI Securities]] を通じたリテール証券口座数で日本最大級のオンライン金融コングロマリット。**グループが提供するサービス**:
- **証券クロスセル** — SBI VC Trade は SBI 証券の口座基盤（日本 #1  のオンライン証券）をクロスプロモーションの導線として利用でき、SBI 共通 ID がグループブランド横断で口座をつなぐ
- **銀行入金チャネル** — [[JapanFG/sbi-shinsei-bank|SBI Shinsei Bank]]（グループ銀行、みずほ系の系譜）がグループ内 JPY 決済レールを提供し、[[JapanFG/sbi-regional-bank-hd|SBI Regional Bank HD]]（地域銀行持株会社）と提携地域銀行が追加の銀行預金基盤を提供する
- **送金** — [[JapanFG/sbi-remit|SBI Remit]] がグループの海外送金 / 資金移動業面を運営する
- **FX 隣接性** — [[JapanFG/sbi-fx-trade|SBI FX Trade]] がレバレッジ FX を運営し、関連会社 [[exchanges/jp-exchange-bi-fxtrade|BI FXTRADE]] がグループ内で暗号資産デリバティブライセンスを保有する
- **保険 / 資産運用** — [[JapanFG/sbi-life|SBI Life]]、[[JapanFG/sbi-insurance|SBI Insurance]]、[[JapanFG/sbi-asset-management|SBI Asset Management]] がグループの商品層を補完する

**隣接度**: 非常に高い — 親グループが統合型金融スーパーストアモデルを運営しており、VASP はそのクロスセル接点の一つである。SBI 新生銀行レールにより、JPY 入出金は業界最速級である。詳細: [[exchanges/jp-exchange-sbi-vc-trade|jp-exchange-sbi-vc-trade]]。

### GMO Coin — GMO Financial HD (7177) / GMO Internet Group (9449)

**親 FG**: [[JapanFG/gmo-financial-hd|GMO Financial HD]]（TSE Prime 7177）。それ自体が GMO Internet Group（TSE Prime 9449）の子会社である。**グループが提供するサービス**:
- **証券クロスセル** — [[JapanFG/gmo-click-securities|GMO Click Securities]]（グループ証券会社で、GMO Financial HD の子会社でもある）が FIEA 側の商品厚みと共通インフラを提供する
- **ダイレクト銀行** — [[JapanFG/gmo-aozora-net|GMO Aozora Net Bank]]（あおぞら銀行との合弁）がグループのインターネット銀行として運営され、内部 JPY 入金レールを提供する
- **決済処理** — [[JapanFG/gmo-payment-gateway|GMO Payment Gateway]]（TSE Prime、別上場）は日本有数の top-3  PSP であり、[[JapanFG/gmo-epsilon|GMO Epsilon]] は中小企業向け PSP 部門である
- **BNPL** — [[JapanFG/gmo-postpay|GMO Postpay]] がグループの BNPL / 後払いラインを運営する
- **インターネットインフラ** — 広義の GMO Internet Group は GMO Cloud / ドメイン / SSL 事業を運営し、運用エンジニアリングの厚みを提供する

**隣接度**: 高い — 証券、銀行、決済、暗号資産を横断する共通のエンジニアリング文化を持つ、インターネット金融専業型のシナジー。詳細: [[exchanges/jp-exchange-gmo-coin|jp-exchange-gmo-coin]]。

### bitFlyer — 独立系（上場親会社なし）

**親 FG**: bitFlyer Holdings（非公開、創業者・経営陣・少数金融投資家による株主構成）。**グループが提供するサービス**:
- **メガバンク的な意味での FG エコシステムサービスはない** — bitFlyer はメガバンクや E コマース親会社を持たない最大級の独立系 VASP である
- **内部姉妹会社**: [[exchanges/jp-exchange-custodiem|Custodiem]]（旧 FTX Japan、2024 に取得）が、機関向け / 分別管理資産ビジネスとして bitFlyer Holdings 内に位置する
- **外部提携レール**: bitFlyer は提携メガバンク経由で JPY を処理し（グループ内銀行なし）、提携ベースのポイント連携も運営する（例: 旧 T-Point の流通導線）

**隣接度**: 低い — bitFlyer は典型的な **独立系** 構造である。ブランド力、JVCEA での存在感、緊密な内製エンジニアリング文化で補う一方、銀行 FG 系ピアのようなクロスセル循環は持たない。詳細: [[exchanges/jp-exchange-bitflyer|jp-exchange-bitflyer]]。

### Coincheck — Monex Group (8698) / Coincheck Group N.V. (NASDAQ:CNCK)

**親 FG**: [[JapanFG/monex-group|Monex Group]]（TSE Prime 8698）。現在は Coincheck Group N.V.（2024  SPAC 合併を通じて NASDAQ 上場）を通じて運営される。**グループが提供するサービス**:
- **証券クロスセル** — Monex Securities（グループ証券会社）が FIEA 証券接点と米国株 / グローバル投資の販売網を提供する
- **暗号資産デリバティブ** — Monex 株式会社（Monex Inc.、別ライセンス保有者）が FIEA Type 1,  に基づく暗号資産デリバティブを運営し、Coincheck の現物専業ライセンスを補完する
- **TradeStation** — Monex Group の米国 TradeStation 部門が、米国市場および先物プラットフォームのエンジニアリング知見を提供する
- **グローバル資本市場接点** — 2024  SPAC 後の NASDAQ 上場により、Coincheck は USD 資本市場へ直接アクセスできる（JP VASP としてはまれ）

**隣接度**: 中〜高 — Monex は証券クロスセル、デリバティブライセンスを持つ姉妹会社、グローバル資本アクセスを提供する。Coincheck は独立したブランドとプロダクト面を維持している。詳細: [[exchanges/jp-exchange-coincheck|jp-exchange-coincheck]]。

### Rakuten Wallet — Rakuten Group (4755) / Rakuten FG

**親 FG**: [[JapanFG/rakuten-fg|Rakuten FG]]。Rakuten Group（TSE Prime 4755）内に位置する。**グループが提供するサービス**:
- **銀行** — Rakuten Bank（別上場、TSE Prime 5838）は日本最大級のインターネット銀行の一つで、主要なグループ内 JPY レールを提供する
- **証券** — [[JapanFG/rakuten-securities|Rakuten Securities]]（口座数 top-3  のオンライン証券）が FIEA 証券接点を提供する
- **カード** — [[JapanFG/rakuten-card|Rakuten Card]]（取扱高で日本最大級のカード発行会社）がカード側の接点を提供する
- **ポイント** — Rakuten Points（日本最大級のロイヤルティプログラム、約 90M ID 保有者）が連携接点である。Rakuten Wallet は過去に Rakuten Points を使った暗号資産購入を可能にしていた
- **Edy** — [[JapanFG/rakuten-edy|Rakuten Edy]] はプリペイド電子マネー部門である。[[payments/japan-prepaid-electronic-money-operator-matrix|JP prepaid e-money operator matrix]] を参照
- **保険** — [[JapanFG/rakuten-life|Rakuten Life]]、[[JapanFG/rakuten-general-insurance|Rakuten General Insurance]]、[[JapanFG/rakuten-insurance-hd|Rakuten Insurance HD]]
- **E コマース** — Rakuten Ichiba（日本最大級の marketplace）は、グループ内暗号資産実験を検証できる加盟店側接点である
- **モバイル** — Rakuten Mobile（MNO）がグループに通信チャネルを与える

**隣接度**: 非常に高い — 日本でも最も深い FG エコシステムの一つで、独自のポイント連携が VASP 間の差別化要素である。詳細: [[exchanges/jp-exchange-rakuten-wallet|jp-exchange-rakuten-wallet]]。

### DMM Bitcoin — DMM HD（非公開）

**親 FG**: DMM.com Group（非公開）。**グループが提供するサービス**:
- **証券** — DMM.com Securities が FX / 株式ブローカー部門を運営する
- **暗号資産隣接プロダクト**: [[exchanges/jp-exchange-dmm-com-securities|DMM.com Securities]] が FIEA 暗号資産デリバティブラインを保有する
- **グループ内銀行なし** — DMM は JPY レールに外部メガバンクとの提携を使う
- **流通** — DMM の成人向けコンテンツ / 動画 / E コマース面は、他の JP VASP 親会社にはないマーケティング到達力を提供する
- **グループの財務余力** — Lazarus による 2024-05  ハックの顧客補償は親グループ（約 JPY 48  billion）が資金負担し、FG 単体の資本バックストップ機能を示した。[[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack detailed analysis]] を参照。DMM Bitcoin はその後、2024

 の顧客移管を伴う SBI VC Trade へのサービス承継を発表した

**隣接度**: 中程度（pre-2024）→ ほぼゼロ（post-handover）— この事例は、十分な現金を持つ非金融親 FG であっても VASP ハックをバックストップできることを示す一方、最終的な wind-down はグループの戦略優先度が変わった場合の限界も示している。詳細: [[exchanges/jp-exchange-dmm-bitcoin|jp-exchange-dmm-bitcoin]]。

### Mercoin — Mercari HD (4385)

**親 FG**: [[JapanFG/mercari-hd|Mercari HD]]（TSE Prime 4385）。**グループが提供するサービス**:
- **wallet / 決済** — Merpay（グループ wallet、資金移動業ライセンス保有）がグループ内 JPY レールを提供し、Mercari ポイント / Mercari 売上金を通じた Mercoin の BTC 購入における主要入口になる
- **marketplace** — Mercari（日本最大級の C2C marketplace、月間アクティブ約 22M）が顧客獲得チャネルである。marketplace の UX により、出品者は売上金を Mercoin 経由で直接 BTC に変換できる
- **グループ内銀行なし** — Mercari は銀行を運営していない。JPY レールは Merpay の資金移動業ライセンスと提携銀行を通じて処理される
- **ポイント連携** — Mercari ポイントは Mercoin 内で BTC に交換でき、これが特徴的なクロスリンクである
- **暗号資産プロダクト**: Mercoin は BTC と少数の追加暗号資産を提供する。アプリ内 UX は Mercari モバイルアプリに統合されている（JP VASP の中でもまれな埋め込み深度）

**隣接度**: 非常に高い — Mercari HD は marketplace の顧客基盤を使って実質的に captive on-ramp を構築した。プロダクト戦略は、BTC 購入を別個の取引所ではなく Mercari の一機能のように感じさせることにある。詳細: [[exchanges/jp-exchange-mercoin|jp-exchange-mercoin]]。

### Laser Digital Japan — Nomura HD (8604)

**親 FG**: Laser Digital Holdings（スイス拠点のデジタルアセット子会社）経由の [[JapanFG/nomura-hd|Nomura HD]]（TSE Prime 8604）。**グループが提供するサービス**:
- **機関向けブローカレッジ** — Nomura Securities（グループ証券会社、リテールウェルスで JP #1 ）が機関投資家の顧客基盤とプライムブローカレッジ隣接性を提供する
- **資産運用** — [[JapanFG/nomura-asset-management|Nomura Asset Management]] が機関向け ETF / fund エンジニアリングの厚みを提供する
- **信託銀行** — [[JapanFG/nomura-trust-bank|Nomura Trust Bank]] が機関投資家フローの trust / custody 側の法的主体を提供する
- **ライセンス** — Laser Digital Japan は標準的な暗号資産交換業ではなく FIEA Type 2 （デリバティブ中心）を保有しており、リテール現物ではなく機関向け / デリバティブに焦点を置いていることを反映している
- **グローバル Laser Digital ネットワーク** — スイス HQ、Dubai（VARA ライセンス）、Abu Dhabi、London の各面が JP entity へ機関投資家フローを送る

**隣接度**: 非常に高い（機関向けのみ）— Nomura のコミットメントはリテール現物ではなく、機関向け / デリバティブ面にある。FG クロスリンクは、銀行 FG 系リテール VASP が使う消費者向けクロスセルではなく、証券顧客カバレッジと信託銀行 custody である。詳細: [[exchanges/jp-exchange-laser-digital-japan|jp-exchange-laser-digital-japan]]。

### Crypto Garage — Daiwa Securities Group (8601) + DG / 野村 connection

**親 FG**: [[JapanFG/daiwa-sg|Daiwa Securities Group]]（TSE Prime 8601）。DG ホールディングス（Digital Garage 4819）、東京短資、その他の戦略投資家も株主に入っている。**グループが提供するサービス**:
- **証券** — Daiwa Securities（グループ証券会社、リテールウェルスで JP #2 ）が機関向け接点を提供する
- **資産運用** — [[JapanFG/daiwa-asset-management|Daiwa Asset Management]] が資産運用エンジニアリングの厚みを提供する
- **信託銀行** — [[JapanFG/daiwa-living-trust|Daiwa Living Trust]] / Daiwa Trust 機能
- **ダイレクト銀行** — [[JapanFG/daiwa-next-bank|Daiwa Next Bank]]（グループ direct bank）がグループ内 JPY レールを提供する
- **ライセンス** — Crypto Garage は Type 2  / 機関向け重点構造を持ち、姿勢としては Laser Digital Japan に近い。この entity はリテール現物ではなく、PTS / 機関向け / DCJPY / stablecoin 発行実験に向けて位置づけられている

**隣接度**: 高い（機関向け / 実験的）— Crypto Garage は Daiwa の機関向け接点と JPX 隣接の実験の交点に位置し、同じ JPX / 三井物産 / Monex コンソーシアム内の姉妹 entity [[exchanges/jp-exchange-digital-asset-markets|Digital Asset Markets]] が機関向け現物に関わる。詳細: [[exchanges/jp-exchange-crypto-garage|jp-exchange-crypto-garage]]。

### PayPay-related — SoftBank-FG cluster

**親 FG**: PayPay Corp と PayPay-FG cluster を通じた SoftBank Group（TSE Prime 9984）。**グループが提供するサービス**:
- **wallet** — PayPay（GMV で日本最大級の QR / code payment）がクロスリンク面である
- **カード** — PayPay Card と PayPay Card Gold が PayPay-FG 内に位置する
- **銀行** — PayPay Bank（旧 Japan Net Bank）がグループ内インターネット銀行である
- **証券** — PayPay Securities が FIEA broker 面を提供する
- **通信** — SoftBank（TSE Prime 9434, 、別上場）が親会社の通信チャネルであり、LINE Yahoo（TSE Prime 4689）が messaging / search 面である
- **暗号資産リンク**: PayPay は約 40% の [[exchanges/jp-exchange-binance-japan|Binance Japan]]（SEBC ライセンス車両を取得）を保有し、自社名義の VASP ライセンスを持たずに PayPay-FG に間接的な暗号資産交換業エクスポージャーを与えている

**隣接度**: 中程度（間接）— PayPay-FG は強い決済 + 銀行 + 通信 + 証券 stack を運営するが、暗号資産には自社ブランド VASP ではなく Binance Japan への少数持分投資を通じて関与している。2026 時点では、これは意図的なオプショナリティ確保の姿勢である。

### au-related — KDDI cluster

**親 FG**: auじぶん銀行 / au PAY / au Financial cluster を通じた KDDI（TSE Prime 9433）。**グループが提供するサービス**:
- **通信** — KDDI（au）は 3  MNO の一つである
- **銀行** — auじぶん銀行（MUFG との合弁）がグループ内インターネット銀行である
- **wallet** — au PAY（QR / code payment）と au PAY Card が FG 内に位置する
- **証券** — auカブコム証券（MUFG との合弁、旧カブドットコム証券）が FIEA broker 面を提供する
- **暗号資産リンク**: 2026  時点で au-FG は自社ブランド VASP を運営していない。FG の crypto 姿勢はライセンス保有ではなく、観察 / 提携ベースである

**隣接度**: 低い（自社 VASP なし）— au-FG は銀行 / wallet / brokerage / card stack を構築したが、暗号資産交換業には直接参入していない。これは PayPay-FG の Binance Japan 少数持分ポジションに対する構造的な反実仮想である。

## 大規模比較マトリクス表

| VASP | 親 FG | 東証コード | グループ内銀行 | グループ内証券 | グループ内 wallet / 決済 | グループ内ポイント | 保険 | E コマース / marketplace | 隣接度 | クロスセル循環 |
|---|---|---|---|---|---|---|---|---|---|---|
| **SBI VC Trade** | [[JapanFG/sbi-hd\|SBI HD]] | 8473 | [[JapanFG/sbi-shinsei-bank\|SBI Shinsei Bank]] + regional-bank-HD | [[JapanFG/sbi-securities\|SBI Securities]]（JP #1  online） | [[JapanFG/sbi-remit\|SBI Remit]] | SBI 共通 ID | [[JapanFG/sbi-life\|SBI Life]] + [[JapanFG/sbi-insurance\|SBI Insurance]] | （限定的） | 非常に高い | あり — superstore model |
| **GMO Coin** | [[JapanFG/gmo-financial-hd\|GMO Financial HD]] / GMO Internet | 7177 / 9449 | [[JapanFG/gmo-aozora-net\|GMO Aozora Net]] | [[JapanFG/gmo-click-securities\|GMO Click Securities]] | [[JapanFG/gmo-payment-gateway\|GMO Payment Gateway]] + [[JapanFG/gmo-epsilon\|GMO Epsilon]] | （限定的） | （限定的） | （限定的） | 高い | あり — internet-finance |
| **bitFlyer** | 独立系 | n/a | 提携銀行のみ | （なし） | （なし） | 提携のみ | （なし） | （なし） | 低い | なし — brand only |
| **Coincheck** | [[JapanFG/monex-group\|Monex Group]]（Coincheck Group N.V., NASDAQ:CNCK 経由） | 8698 （JP） / CNCK（US） | （日本に該当なし） | Monex Securities | （なし） | Monex points | （なし） | （なし） | 中〜高 | あり — securities cross-sell + global capital |
| **Rakuten Wallet** | [[JapanFG/rakuten-fg\|Rakuten FG]] / Rakuten Group | 4755 | Rakuten Bank（5838） | [[JapanFG/rakuten-securities\|Rakuten Securities]] | [[JapanFG/rakuten-card\|Rakuten Card]] + [[JapanFG/rakuten-edy\|Rakuten Edy]] | Rakuten Points（約 90M IDs） | [[JapanFG/rakuten-life\|Rakuten Life]] + [[JapanFG/rakuten-general-insurance\|Rakuten General Insurance]] | Rakuten Ichiba | 非常に高い | あり — full superstore + points |
| **DMM Bitcoin** | DMM HD（非公開） | n/a | （なし） | DMM.com Securities | （なし） | DMM Points | （なし） | DMM marketplaces | 中程度 → wind-down 2024 | （以前は）marketing reach |
| **Mercoin** | [[JapanFG/mercari-hd\|Mercari HD]] | 4385 | （なし） | （なし） | Merpay（資金移動業） | Mercari Points | （なし） | Mercari（日本最大級の C2C） | 非常に高い | あり — captive marketplace on-ramp |
| **Laser Digital Japan** | [[JapanFG/nomura-hd\|Nomura HD]] | 8604 | （自社銀行なし） | Nomura Securities（JP #1  wealth） | （なし） | （なし） | （Nomura Insurance） | （なし） | 非常に高い（機関向け） | あり — institutional client coverage |
| **Crypto Garage** | [[JapanFG/daiwa-sg\|Daiwa SG]] + DG + 東京短資 + 野村 | 8601 （Daiwa） | [[JapanFG/daiwa-next-bank\|Daiwa Next Bank]] | Daiwa Securities（JP #2  wealth） | （なし） | （なし） | （Daiwa Life） | （なし） | 高い（機関向け） | あり — institutional + JPX-adjacent |
| **PayPay-related（via Binance Japan minority）** | SoftBank Group / PayPay-FG | 9984 | PayPay Bank | PayPay Securities | PayPay（日本最大級の QR） | PayPay Points | （限定的） | （限定的） | 中程度（間接、約 40% stake のみ） | 間接 — optionality |
| **au-related** | KDDI | 9433 | auじぶん銀行（with MUFG） | auカブコム証券（with MUFG） | au PAY | Ponta-adjacent | （au Insurance） | au マーケット | 低い（自社 VASP なし） | （暗号資産 entity なし） |

## FG 隣接度ランキング

このマトリクスを隣接度の単一ランキングとして読むと、隣接度が高いほど、親 FG が銀行 / 証券 / wallet / ポイント / 保険 / E コマースの複数次元で意味のある貢献をしていることを示す。

1. **SBI VC Trade**（SBI HD）— financial-superstore 型の親会社で、クロスプロダクト到達範囲が最も深い
2. **Rakuten Wallet**（Rakuten FG）— superstore + 独自のポイント連携（約 90M Rakuten Points IDs）
3. **Mercoin**（Mercari HD）— captive C2C marketplace on-ramp + Merpay 資金移動業 wallet 統合
4. **Laser Digital Japan**（Nomura HD）— 機関向けのみで、深い brokerage + trust-banking 隣接性
5. **GMO Coin**（GMO Financial HD / GMO Internet）— 銀行 + 証券 + PSP を持つ internet-finance 親会社
6. **Coincheck**（Monex Group / Coincheck Group N.V.）— 証券クロスセル + グローバル資本市場面
7. **Crypto Garage**（Daiwa SG + DG + 東京短資 + 野村）— 機関向け + JPX 隣接の実験面
8. **PayPay-related（via Binance Japan）**（SoftBank / PayPay-FG）— 少数持分（約 40%）による間接隣接性
9. **DMM Bitcoin**（DMM HD, pre-2024）— 非金融親会社のバックストップ機能が実証された（現在は wind-down）
10. **bitFlyer**（独立系）— FG エコシステムサービスなし。brand + JVCEA network 上の位置のみ
11. **au-related**（KDDI）— グループ内 VASP なし。参照用 / 反実仮想の行

**銀行 FG リテールスーパーストアモデル（SBI、Rakuten）**、**captive marketplace on-ramp モデル（Mercoin）**、**機関向け brokerage 隣接モデル（Laser Digital、Crypto Garage）** は、構造的に異なる三つの高隣接度アーキタイプである。JP VASP の競争力を分析する読者は、手数料、商品、出来高指標をピア比較する前に、各事業者がどのアーキタイプに属するかを特定する必要がある。

## 親 FG が共通して提供するクロスプロダクト

次のクロスプロダクトはマトリクス全体で繰り返し現れ、VASP が接続できる **FG 提供可能面のメニュー** を表している。

- **銀行入金レール** — 顧客が即時 JPY 入出金に使えるグループ内銀行口座（SBI Shinsei、Rakuten Bank、GMO Aozora Net、Daiwa Next Bank、auじぶん銀行、PayPay Bank）。グループ内銀行がない場合、VASP は提携メガバンクレールを経由する必要があり、決済時間と手数料の不利が生じる。
- **証券 brokerage 口座基盤** — 親会社の既存 FIEA 証券顧客をクロスセル pool として使う（SBI Securities、Rakuten Securities、Nomura Securities、Daiwa Securities、Monex Securities、GMO Click Securities、auカブコム証券、PayPay Securities）。証券口座からのクロスセルは JP VASP にとって最も低 CAC のチャネルである。
- **wallet / 資金移動業** — Merpay、PayPay、au PAY、Rakuten Pay、Rakuten Edy、SBI Remit（海外送金）。資金移動業ライセンスは、VASP の交換業ライセンスがカバーしない JPY 側の移動を扱うため、暗号資産交換業と構造的に補完関係にある。
- **ポイント / loyalty cross-link** — Rakuten Points（最大級）、PayPay Points、Ponta（au 隣接）、JRE POINT（交通、別系統）、nanaco Points、WAON Points、dPoint（NTT DoCoMo）。ポイント連携により、現金消費なしで販促用 crypto rewards を組成できる。事業者別の統合深度は [[exchanges/jp-cex-points-economy-integration|JP CEX points-economy integration]] を参照。
- **カード発行面** — Rakuten Card、PayPay Card、[[JapanFG/aeon-financial-service|AEON Financial Service]] cards、JCB（multi-FG）、[[JapanFG/smbc-card|SMBC Card]]、[[JapanFG/mufg-nicos|MUFG NICOS]]。カード発行会社との統合により、VASP は JPY auto-charge や card 経由の crypto purchase を可能にできる。
- **保険クロスセル** — [[JapanFG/sbi-life|SBI Life]]、[[JapanFG/rakuten-life|Rakuten Life]]、Nomura insurance、AIG。暗号資産との直接関連は薄いが、FG 全体の bundle には寄与する。
- **E コマース / marketplace** — Rakuten Ichiba、Mercari、DMM marketplaces。marketplace 統合は、加盟店側の crypto payment 実験と seller-side off-ramp を可能にする。
- **通信チャネル** — SoftBank、KDDI（au）、NTT DoCoMo、Rakuten Mobile。通信配信は FG に MNO bundling のオプションを与える。

4-5+ 個の面に接続する VASP（SBI VC Trade、Rakuten Wallet）は、0-1  個の面にしか接続しない VASP（bitFlyer、DMM Bitcoin post-handover）とは構造的に異なるユニットエコノミクスで運営される。これが本マトリクスが支える最も重要なフレーミングである。

## マトリクス全体で見る funding cost

このマトリクスに含まれる VASP の JPY funding cost ランキングは、グループ内銀行の有無と親 FG の信用力に沿っている。

- **最も低い funding cost**: SBI VC Trade（SBI Shinsei がグループ内）、Rakuten Wallet（Rakuten Bank がグループ内）、GMO Coin（GMO Aozora Net がグループ内）、Crypto Garage（Daiwa Next Bank がグループ内）— いずれも直接のグループ内銀行レールを持ち、親 FG の信用格付けが低コストの運転資本を支える
- **中程度の funding cost**: Coincheck（Monex Group、グループ内銀行はないが上場親会社と資本市場アクセスがある）、Mercoin（Mercari HD、Merpay 資金移動業が JPY 側をカバーするが実際の銀行はない）
- **高めの funding cost**: bitFlyer（独立系、上場親会社なし）、DMM Bitcoin（pre-handover。DMM HD は非公開で public capital-market access なし）、Laser Digital Japan（機関向けのみ。Nomura HD は強いが、この entity に焦点を当てた直接のグループ内銀行はない）

暗号資産交換業の運営には、order-book liquidity、顧客出金バッファ、運用上の JPY ポジションを賄う **相当な運転資本** が必要なため、funding cost の次元は重要である。安価なグループ内 funding を持つ VASP は、外部銀行ラインや無担保借入に頼る独立系 VASP よりも、深い板と狭いスプレッドを運営できる。銀行 credit line の具体論は [[exchanges/jp-crypto-bank-credit-facilities|JP crypto bank credit facilities]] を参照。

## マトリクス全体で見るインシデント対応能力

ハック関連の make-whole event を親 FG が吸収できる能力は大きく異なる。

- **高い能力（実証済み）**: DMM HD は約 JPY 48B の Lazarus 2024-05  ハック make-whole を、DMM Bitcoin のために、希薄化を伴う外部資金調達なしにグループ資金で負担した。SBI HD、Rakuten Group、Mercari HD、Nomura HD も原理的には同等以上の balance-sheet capacity を持つ
- **高い能力（未実証）**: Monex Group、GMO Internet Group、Daiwa SG
- **低めの能力**: bitFlyer（独立系、megaparent なし）、pre-2018  Coincheck（2018-01  NEM ハック時点では独立系であり、make-whole が Coincheck 創業者の equity を消費し Monex 買収につながった理由でもある）

Coincheck NEM 2018-01  インシデント（[[exchanges/coincheck-nem-hack-detailed-analysis|Coincheck NEM hack detailed analysis]]）と DMM Bitcoin 2024-05  インシデント（[[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack detailed analysis]]）から得られる教訓は、JP VASP の長期的な地位を評価する際、**親 FG の現金バックストップ能力が最も重要な非自明次元の一つ** であるということだ。親会社のバックストップを持たない VASP は、大規模ハックが起きた場合、希薄化を伴う外部資金調達かサービス終了なしには生き残れない。

## 境界事例

- **Coincheck Group N.V. NASDAQ listing（2024）** — SPAC 合併後、**Coincheck Inc.（Japan）** を Monex Group 子会社（日本側の corporate parent）として読むべきか、Coincheck Group N.V. 子会社（米国の ultimate listed parent）として読むべきかという問いが生じる。マトリクス上は両方を記録する。JP 親 FG エコシステムは Monex を通じて流れ、グローバル資本市場面は Coincheck Group N.V. を通じて流れるためである。
- **DMM Bitcoin wind-down（2024）→ SBI VC Trade handover** — Lazarus 後の SBI VC Trade への顧客移管は、JP VASP 史上でも特異な出来事である。完了後、DMM HD 行は実質的にゼロ化し、移管されたユーザー基盤は SBI HD 行へ移る。本マトリクスは、歴史的な FG 隣接性の教訓（非金融親会社のバックストップ）が最も引用される前例として残るため、行を削除せず pre-2024  state と wind-down 注記を記録する。
- **PayPay の Binance Japan 少数持分** — PayPay-FG は Binance Japan（SEBC のライセンス車両を取得）の約 40% を保有するが、Binance Japan は PayPay-FG プロダクトではなく Binance のグローバルブランドで運営される。本マトリクスでは、equity link が PayPay-FG にゼロから構築する capex なしで JP crypto の optionality を与えるため、これを **なし** ではなく **中程度（間接）** の隣接性として記録する。
- **非銀行親 FG としての Mercari HD** — Mercari は銀行を保有していないが、Merpay の資金移動業ライセンスが [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer regulatory route]] を通じて JPY 入出金機能を実質的に提供する。本マトリクスでは、規制上の entity が銀行法上の銀行とは根本的に異なるため、「グループ内銀行なし / グループ内 wallet あり」と記録する。
- **Laser Digital Japan / Crypto Garage が暗号資産交換業ではなく FIEA Type 2  を保有すること** — これらの機関向け / デリバティブ entity は、消費者向け現物の暗号資産交換業ルートではなく [[exchanges/jp-vasp-derivative-license-system|FIEA Type 2 derivative]] ルートでライセンスを受けている。本マトリクスは、親 FG（Nomura、Daiwa）が明確に crypto active であり、運用上の FG 隣接メカニクスが同じであるため、これらを含める。ただし規制ライセンス stack は異なる。
- **au-FG counterfactual** — KDDI は日本でも有数の非銀行 FG 型 payment / banking / brokerage stack を構築したが、暗号資産交換業には参入していない。本マトリクスは、「VASP entity が付いていない FG 隣接性がどのように見えるか」の参照として空行を残す。これは欠けている crypto position のコストを benchmark するうえで有用である。
- **bitFlyer の意図的な独立性** — bitFlyer は複数の買収協議（直近では成立しなかった Mizuho-FG または SBI-FG への売却をめぐる 2024-2025  speculation）を経ても独立を選んだ。本マトリクスはこれを **低い隣接性** として記録するが、親会社インフラではなく、ブランド力と JVCEA network 上の位置で補っていることも示す。

## 関連項目

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
- [[JapanFG/sbi-hd]]
- [[JapanFG/gmo-financial-hd]]
- [[JapanFG/monex-group]]
- [[JapanFG/rakuten-fg]]
- [[JapanFG/mercari-hd]]
- [[JapanFG/nomura-hd]]
- [[JapanFG/daiwa-sg]]

## 出典

- FSA registered crypto-asset exchange operators（暗号資産交換業者）list: https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
- JVCEA member list（Japan Virtual and Crypto Assets Exchange Association）: https://jvcea.or.jp/member/
- SBI HD corporate site: https://www.sbigroup.co.jp/
- GMO Internet Group corporate site: https://www.gmo.jp/
- Monex Group corporate site: https://www.monexgroup.jp/
- Rakuten Group corporate site: https://corp.rakuten.co.jp/
- Mercari HD corporate site: https://about.mercari.com/
- Nomura HD corporate site: https://www.nomuraholdings.com/
- Daiwa Securities Group corporate site: https://www.daiwa-grp.jp/
- DMM Group corporate site: https://www.dmm.com/
- bitFlyer Holdings corporate site: https://corporate.bitflyer.com/
- KDDI corporate site: https://www.kddi.com/
- SoftBank Group corporate site: https://group.softbank/
- Operator IR disclosures cited row-by-row in the matrix
