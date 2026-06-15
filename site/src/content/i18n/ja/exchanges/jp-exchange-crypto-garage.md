---
source: exchanges/jp-exchange-crypto-garage
source_hash: ab8fe9fc25c3c4f8
lang: ja
status: machine
fidelity: ok
title: "株式会社 Crypto Garage — 日本暗号資産交換業者概要"
translated_at: 2026-06-02T12:19:04.201Z
---
﻿
# 株式会社 Crypto Garage — 日本暗号資産交換業者概要


## ウィキ上の位置づけ

この項目は [[exchanges/INDEX|exchanges index]] 配下に位置する。[[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] とあわせて読むと隣接領域の文脈が分かり、[[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] とあわせて読むとより広い制度境界が分かる。

> FSA 登録番号 関東財務局 第00029号 · JVCEA 会員 #1035 · 登録日 2021-06-29

## 1. 法人・株主

- **商号**：株式会社 Crypto Garage（英文：Crypto Garage, Inc.）
- **設立**：2018年9月
- **本店所在地**：東京都渋谷区恵比寿西 2-19-9 フランセスビル
- **法人番号**：6011001124112
- **出資構造**（公表分）：
  - 株式会社デジタルガレージ（Digital Garage · 東証プライム 4819）が筆頭出資。創業時の合弁パートナーは東京短資株式会社。2021年10月に野村ホールディングス株式会社を引受先とする第三者割当増資を実施し、野村 HD が新規出資者として参画。
  - Blockstream もコーポレートサイトの "Backed By" セクションに掲載されており、資本・技術パートナー関係が公示されている。
  - 各社の具体的出資比率は非公表。

デジタルガレージはフィンテック・ブロックチェーン分野の戦略的子会社として同社を位置付けており、取締役 2 名（林 郁・踊 契三）を派遣。東京短資も取締役 2 名（寺田 寿明・加藤 岬造）を派遣している。

## 2. 牌照・登録状況

- **暗号資産交換業**：関東財務局長 第00029号（登録日：2021年6月29日、資金決済法に基づく）
- **金融商品取引業**：登録なし（JVCEA 第一種会員 #1035 は暗号資産交換業のみ、デリバティブ登録なし）
- **電子決済手段等取引業 / 資金移動業**：登録なし（公表分）
- **JVCEA**：第一種会員 #1035（暗号資産交換業のみ）
- **Global Digital Finance**：加盟（業界自主規制団体）

## 3. 取扱通貨

取扱銘柄数および具体的な一覧は公式サイト・公表書類上で個別列挙されておらず、公表なし。

サービス設計から推察される銘柄特性：
- **Bitcoin (BTC)** が中心的資産（R&D テーマが Bitcoin / Lightning / Liquid Network であり、BTC 建て OTC・決済がコア）
- SETTLENET PRO は「円建てトークン（JPY 建て）× オンチェーン DvP 決済」を提供しており、日本円建てトークン（内部決済通貨）を利用
- 同社の R&D は Discreet Log Contracts（DLC）および Liquid Network サイドチェーン資産を含む
- リテール向け多銘柄取引所ではなく機関向け特化型のため、取扱銘柄数は少数精鋭と推定

## 4. 業務範囲

同社は **リテール向けスポット取引所ではなく**、機関・法人向けデジタルアセット・インフラに特化した事業者（自称："regulated institutional digital assets infrastructure company"）。主要サービスラインは以下のとおり：

| サービス | 内容 |
|----------|------|
| **SETTLENET PRO** | 暗号資産業者間（インターディーラー）市場における仲介・OTC 決済プラットフォーム。非カストディアル型 DvP 決済、日本円建てトークン（同社発行）、時点ネット決済機能を提供 |
| **SETTLENET CUSTODY** | 国内規制準拠の機関投資家・法人向けデジタルアセット保管サービス（2023年4月開始）。保険付き分別管理、ステーキング（2024年3月追加）、OES（Off Exchange Settlement）機能あり |
| **SETTLENET OTC** | 法人・事業法人向け暗号資産 OTC 販売所（2023年4月開始）。グローバル LP ネットワーク活用、メール/電話対応のプレミアムサービス |
| **R&D** | Bitcoin・Lightning・Liquid Network に関する研究開発、Discreet Log Contracts（DLC）プロトコルへのOSS貢献、P2P デリバティブ取引の研究 |
| **Blockchain Dev** | 法人クライアント向けブロックチェーン開発受託 |
| **mahola** | ブロックチェーン・バックエンドサービス（API）、2024年10月正式ローンチ |

**法定通貨入金チャネル**：法人向けのみ（銀行振込）。コンビニ入金・クイック入金等のリテール向けチャネルはなし。

## 5. 市占・取引高

- 取引高・口座数はいずれも **公表なし**
- **顧客層**：機関投資家・事業法人・暗号資産取引所・流動性プロバイダー・富裕層・ファミリーオフィス・運用会社に特化。一般リテール投資家向けサービスは提供していない
- 市場ポジション：リテール取引量競争には参加していない **ニッチ（機関向けインフラ）** プレイヤー。取扱数十社程度の法人クライアントを対象とすると推察されるが、定量データ非公表

## 6. 沿革・重大事件

| 年月 | 事項 |
|------|------|
| 2018-09 | 株式会社デジタルガレージ × 東京短資株式会社の合弁会社として設立 |
| 2019-01 | 内閣府レギュラトリー・サンドボックス制度でブロックチェーン・金融分野として**第1号**認定取得 |
| 2019-01 | SETTLENET（ブロックチェーン金融事業者向けアプリ開発支援プロダクト）開発発表 |
| 2019-04 | Bitcoin 決済仮想通貨デリバティブ取引を実現する P2P プロトコルを開発・発表 |
| 2020-06 | OTC 市場向け決済プラットフォーム「SETTLENET」商用サービス開始 |
| 2021-02 | 暗号資産交換業登録に基づく SETTLENET v2（価格ストリーミング・時点ネット決済追加）サービス開始 |
| 2021-06 | 暗号資産交換業者登録完了（関東財務局 第00029号） |
| 2021-10 | 野村ホールディングスを引受先とする**第三者割当増資**および業務提携 |
| 2022-08 | IEEE ICBC 2022 にて DLC に関する論文採択（学術的認知） |
| 2023-04 | SETTLENET CUSTODY・OTC サービス開始（国内初・機関投資家向けカストディ）|
| 2023-11 | Komainu（野村グループ出資）と日本における機関投資家向け暗号資産サービス開発協業に合意 |
| 2024-03 | SETTLENET CUSTODY にステーキングサービス追加 |
| 2024-10 | ブロックチェーン・バックエンドサービス「mahola」正式ローンチ |
| 2024-12 | 日産自動車「NISSAN PASSPORT」BETA 版の技術支援 |
| 2025-08 | Pacific Meta と企業の暗号資産保有支援コンサルティングパッケージ共同開発・提供開始 |
| 2025-12 | IEEE Blockchain 2025 で Custodial Wallet に関する論文採択 |

行政処分・ハック・システム障害等の重大事件：公表なし（2024年6月「他社暗号資産流出に係る当社の対応について」は他社事案への言及であり、同社固有の事故ではない）。

## 7. 戦略動向

- **機関向け × Bitcoin ネイティブ** の路線を一貫維持。SETTLENET PRO は暗号資産インターディーラー市場という国内唯一クラスのニッチポジションを確立
- **Blockstream / Liquid Network との協業**：公式サイト "Backed By" セクションに Blockstream が掲載。R&D テーマが Bitcoin・Lightning・Liquid Network に特化しており、Liquid Network サイドチェーン技術の日本市場における主要普及パートナーとしての役割が示唆される（Blockstream との具体的出資額・契約内容は非公表）
- **野村グループ × Komainu 連携**（2023年11月）：機関投資家向けカストディ・サービス領域での協業。[[exchanges/jp-custody-komainu|Komainu]]（[[securities-firms/nomura-hd|野村 HD]] × Ledger × CoinShares の合弁カストディアン）との連携により、グローバルレベルの機関向けインフラ整備を進める（同社のポジションは [[exchanges/jp-institutional-custody-three-pillars|JP institutional custody 三本柱]] と [[exchanges/jp-crypto-market-maker-otc-layer|JP crypto market maker / OTC レイヤー]] で詳述）
- **web3 開発受託の拡張**：2024年以降、日産自動車・日本英語検定協会・スカパー JSAT・岩手県紫波町など非 crypto 領域へのブロックチェーン開発支援案件が増加。mahola API を通じた開発者向けビジネスラインを多角化
- **直近 12 ヶ月（2025年5月基準）**：Pacific Meta との暗号資産保有コンサルティング共同提供（2025年8月）、IEEE Blockchain 2025 論文採択（2025年12月）。IPO・海外展開に関する公開発表はなし

## 8. 関連人物

- **代表取締役 CEO**：大熊 将人（Masahito Okuma）
- **取締役**（公表分）：
  - 林 郁（株式会社デジタルガレージ）
  - 踊 契三（株式会社デジタルガレージ）
  - 寺田 寿明（東京短資株式会社）
  - 加藤 岬造（東京短資株式会社）
  - 佐々木 俊典（野村ホールディングス株式会社）
- **監査役**：六彌太 恭行（株式会社デジタルガレージ）
- **創業背景**：デジタルガレージ（IT・FinTech 投資・インフラ事業）と東京短資（インターバンク短資市場）の合弁により誕生。インターバンク市場ノウハウ × ブロックチェーン技術の融合が事業モデルの核。

## 関連項目

- [[fintech/japan-financial-regulation]] — 日本金融規制全体
- [[fintech/japan-bittrade-listing-process]] — 上币流程一般论
- [[fintech/japan-stablecoin-regulatory-landscape]] — 関連 stablecoin 制度
- [[fintech/jp-trust-type-sc-architecture]] — 関連 SC 制度
- [[exchanges/jp-exchange-bitflyer]] — 同業他社（大手）
- [[exchanges/jp-exchange-sbi-vc-trade]] — 同業他社（機関向け）
- [[exchanges/jp-custody-komainu]] — 連携先 Komainu（institutional custody）
- [[exchanges/jp-institutional-custody-three-pillars]] — JP institutional custody 三本柱
- [[exchanges/jp-crypto-market-maker-otc-layer]] — JP crypto market maker / OTC レイヤー

## 出典

- [Crypto Garage 公式コーポレートサイト（トップ）](https://cryptogarage.co.jp/)（取得 2026-05-18）
- [Crypto Garage 会社概要（日本語）](https://cryptogarage.co.jp/about/)（取得 2026-05-18）
- [Crypto Garage Company Profile（英語）](https://cryptogarage.co.jp/en/about/)（取得 2026-05-18）
- [Crypto Garage SETTLENET PRO サービス詳細](https://cryptogarage.co.jp/services/pro/)（取得 2026-05-18）
- [Crypto Garage SETTLENET CUSTODY サービス詳細](https://cryptogarage.co.jp/services/custody/)（取得 2026-05-18）
- [Crypto Garage SETTLENET OTC サービス詳細](https://cryptogarage.co.jp/services/otc/)（取得 2026-05-18）
- [Crypto Garage R&D サービス詳細](https://cryptogarage.co.jp/services/rd/)（取得 2026-05-18）
- [Crypto Garage ニュース一覧（全3ページ）](https://cryptogarage.co.jp/news/)（取得 2026-05-18）
- [JVCEA 会員一覧](https://jvcea.or.jp/member/)（取得 2026-05-18）
- [FSA 暗号資産交換業者登録一覧 Excel](https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx)（snapshot 令和8年4月1日 = 2026-04-01）
