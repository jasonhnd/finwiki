---
title: 日本 VASP ビジネスモデル競合マトリクス — 39 社の事業セグメント・収益構造・差別化軸比較
aliases:
  - Japan VASP business model competitive matrix
  - 日本暗号資産交換業 ビジネスモデル比較
  - JP VASP segment matrix
  - bitFlyer Coincheck GMO Coin SBI bitbank competitive grid
  - JP CEX revenue model comparison
  - Japan VASP product breadth matrix
  - JVCEA member business model classification
  - JP crypto exchange institutional vs retail focus
domain: exchanges
created: 2026-05-25
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
confidence: likely
tags:
  - exchanges
  - matrix
  - vasp
  - business-model
  - benchmark
  - competitive-analysis
  - jp-crypto-exchange
status: active
sources:
  - https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
  - https://www.fsa.go.jp/en/regulated/licensed/en_kasoutuka.pdf
  - https://jvcea.or.jp/member/
  - https://www.fsa.go.jp/policy/virtual_currency02/
---

# 日本 VASP ビジネスモデル競合マトリクス — 39 社の事業セグメント・収益構造・差別化軸比較

## TL;DR

FSA の暗号資産交換業者登録一覧は 2026-06-30 時点で **26 業者**を掲載している。本マトリクスの 39 分析行は、この登録母集団だけでなく、暗号資産デリバティブ、電子決済手段、機関向け隣接事業、移行・履歴上の関連 entity を含むため、39 を FSA 登録 VASP 数として読んではならない。各行は **(1) 現物販売所 / (2) 現物取引所 / (3) マージン / レバレッジ / (4) 暗号資産デリバ / (5) カストディ / (6) 銘柄上場特化 / (7) ステーキング・レンディング / (8) IEO / (9) 機関向け OTC / (10) リテール販売所** という 10 軸で比較する。^[Source: https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx, 2026-06-30, 「全業者数: 26」.]

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. It is the **事業モデル軸 (business-model-axis)** counterpart to [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 比較]] (規模軸) / [[exchanges/jp-vasp-parent-company-map|親会社マップ]] (資本系列軸) / [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制 8 極比較]] (規制軸). Read it alongside [[exchanges/cex-matching-engine-wallet-architecture|CEX matching engine / wallet architecture]] for the technical layer and [[exchanges/cex-native-token-strategy-comparison|CEX native token 戦略比較]] for the tokenomics dimension. Listing 自主規制 detail in [[exchanges/jvcea-whitelist-token-listing|JVCEA whitelist token listing]] and incident history in [[exchanges/jp-vasp-incident-history|jp-vasp-incident-history]].

## Why this matrix matters

- 日本 VASP 市場の登録母集団、収益、取引量および口座数は時点と集計範囲で変わるため、FSA / JVCEA と各社の日時付き開示で確認する。機関 OTC / IEO / RWA / デリバ専業 / 海外系流動性ゲートウェイなどの事業セグメントを分けて比較する。
- **収益モデルの違いは大きく営業利益率を左右する**:
  - 販売所スプレッドの収益寄与は各社の開示で確認し、固定利益率を推定しない
  - 取引所板と海外流動性ブリッジの収益寄与は各社の開示で確認する
  - デリバ (金商法 1 種) の収益寄与は現物事業と分けて確認する
  - 機関 OTC / RWA → 営業利益率 不安定 (大口取引依存)
- **JVCEA 銘柄審査** が銘柄数を絞るため、海外系日本法人 (Binance / OKJ / OSL / Bybit Japan 計画中) は **グローバル親会社の銘柄ラインナップを日本市場に持ち込めない構造**。これが「海外大手の日本市場参入インセンティブを抑制する規制 moat」になっている。
- 二大新規セグメント:
  - **電子決済手段等取引業 (ECISP)** = SBI VC Trade 第00001号で USDC 取扱開始。追加登録は FSA の現行一覧で確認する
  - **IEO** = Coincheck IEO が国内初導入、その後 GMO Coin / bitbank が追随

## Per-operator sections

### A. 独立系老舗 + bitFlyer Holdings 系 (現物 + デリバ主軸)

- **[[exchanges/jp-exchange-bitflyer|bitFlyer]]** (関東財務局 第00003号、JVCEA #1002)
  - **モデル**: 現物販売所 + 取引所 (Lightning Spot) + デリバ (Lightning FX) + クレカ (bitFlyer クレカ、アプラス発行)
  - **収益軸**: 現物 / デリバ手数料と bitFlyer クレカ。BTC 取引量の順位は日時付き同一集計で確認する
  - **2025-12 期決算**: 売上 135 億円、営業利益 42 億円
  - **差別化**: Lightning FX デリバの板厚 + マルチ法域展開 (US 子 bitFlyer USA、欧子 bitFlyer Europe SAS)
  - **2024 動向**: [[exchanges/jp-exchange-custodiem|Custodiem]] (旧 FTX Japan) を 2024 取得 → デリバ補強
- **[[exchanges/jp-exchange-bitbank|bitbank]]** (FSA 登録、独立系)
  - **モデル**: 現物取引所 (板取引特化) + ステーキング + IEO
  - **収益軸**: 取引手数料 (Maker rebate model)
  - **差別化**: 現物板取引と独立系の非上場企業という事業構造。取引量順位は固定しない
  - **戦略**: IEO 早期参入 + リテール取引所板厚で勝負
- **[[exchanges/jp-exchange-btcbox|BTCBOX]]** (独立系老舗)
  - **モデル**: 現物取引所 (BTC 中心) + 中国系流動性
  - **差別化**: 中国系ユーザーへの英語・中国語サポート

### B. 金融グループ系 (現物 + デリバ + ステーキング 全方位)

- **[[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]** (関東財務局 第00011号、JVCEA #1011)
  - **モデル**: 現物販売所 + デリバ (3247 号、金商法 1 種) + ECISP USDC (国内 ECISP 第00001号) + ステーキング + USDC レンディング (2026-03 国内初)
  - **収益軸**: 販売所スプレッド + デリバ手数料 + USDC レンディング金利
  - **差別化**: 暗号資産交換業、金融商品取引業および ECISP の登録・業務範囲を各レジストリで確認する。USDC の提携・流通範囲は当事者の現行開示で確認する
  - **戦略**: USD-JPY SC 跨境合规通道のキングメーカー化 ([[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環]] 参照)
- **[[exchanges/jp-exchange-gmo-coin|GMO Coin]]** (関東財務局 第00006号、JVCEA #1006)
  - **モデル**: 現物販売所 + 取引所 + レバレッジ取引 + ステーキング + 暗号資産レンディング
  - **収益軸**: 販売所スプレッド + レバレッジ手数料。収益規模の順位は決算開示なしに推定しない
  - **差別化**: GMO インターネットグループ (9449) のインフラ事業延長で、テクニカルスタックの自社開発
- **[[exchanges/jp-exchange-coincheck|Coincheck]]** (関東財務局 第00014号、JVCEA #1017、Monex 系)
  - **モデル**: 現物販売所 + 取引所 + IEO 国内初導入 + NFT マーケットプレイス (Coincheck NFT)
  - **収益軸**: 販売所スプレッド + IEO 上場手数料 + NFT 取引手数料
  - **差別化**: Coincheck Group N.V. (Nasdaq 上場 CNCK/CNCKW) 経由でグローバル資本市場アクセス
  - **戦略**: NFT × IEO 経由で Z 世代取得
- **[[exchanges/jp-exchange-rakuten-wallet|Rakuten Wallet]]** (楽天グループ 4755 系)
  - **モデル**: 現物販売所 + 楽天ポイント連動 (楽天経済圏ブリッジ)
  - **差別化**: 楽天 ID + 楽天銀行 + 楽天証券 連動で生活全方位ブリッジ
- **[[exchanges/jp-exchange-mercoin|Mercoin]]** (メルカリ 4385 系)
  - **モデル**: 現物販売所 + メルペイ連動 (フリマ売上ブリッジ)
  - **差別化**: メルカリ売上の暗号資産購入直結ファネル

### C. 海外系日本法人 (グローバル流動性ブリッジ)

- **[[exchanges/jp-exchange-binance-japan|Binance Japan]]** (JVCEA Type 1、PayPay 40% 出資)
  - **モデル**: 現物販売所 + 取引所 + ステーキング (国内銘柄に限定)
  - **差別化**: グローバル Binance 親の流動性をブリッジ、ただし JVCEA 銘柄リストで制約
  - **戦略**: 2022 サクラエクスチェンジ買収で登録取得、PayPay (Z HD 系) 出資で国内決済連携
- **[[exchanges/jp-exchange-coinbase-japan|Coinbase Japan]]** (関東財務局登録あり、2023 撤退・ライセンス保持)
  - **モデル**: 2023 撤退で dormant 状態
  - **戦略**: 現行の登録状態とサービス提供状況は FSA レジストリと当事者発表で確認する
- **[[exchanges/jp-exchange-okcoin-japan|OKCoin Japan (OKJ)]]** (OKX 系)
  - **モデル**: 現物販売所 (デリバなし)
  - **差別化**: 別法人として Type 1 spot 運営 (海外 OKX の deriv は国内未提供)
- **[[exchanges/jp-exchange-osl-japan|OSL Japan]]** (HKEX:863 系、旧 CoinBest)
  - **モデル**: 現物販売所 + 取引所
  - **差別化**: HK SFC ライセンス保有グローバル親の機関流動性接続
- **[[exchanges/jp-exchange-gate-japan|Gate Japan]]** (Gate.io 系、旧 LastRoots)
  - **モデル**: 現物販売所
- **[[exchanges/jp-exchange-tokyo-hash|Tokyo Hash]]** (HashKey Group 系)
  - **モデル**: 機関向け OTC 中心
- **[[exchanges/jp-exchange-trek-labs-japan|Trek Labs Japan]]** (Backpack Exchange 系、Type 2 デリバ)
- **[[exchanges/jp-exchange-saxo-bank-japan|Saxo Bank Japan]]** (Saxo Bank A/S 系、Type 2 デリバ)

### D. 機関向け・特殊セグメント (RWA / OTC / デリバ専業)

- **[[exchanges/jp-exchange-crypto-garage|Crypto Garage]]** (DG ホールディングス × 東京短資 × 野村 HD 出資)
  - **モデル**: 機関向け OTC + Liquid Network 関連事業 + ST 関連
  - **差別化**: 大手金融機関 (証券会社・信託銀行) 向けインフラ提供
- **[[exchanges/jp-exchange-digital-asset-markets|Digital Asset Markets]]** (JPX + 三井物産 + Monex 連合)
  - **モデル**: 機関投資家・PTS 向け取引所
  - **差別化**: JPX バックボーンで証券会社接続
- **[[exchanges/jp-exchange-laser-digital-japan|Laser Digital Japan]]** (野村 HD スイス子)
  - **モデル**: 機関向け OTC + 暗号資産デリバ (JVCEA Type 2)
  - **差別化**: 野村グループの institutional crypto fund + BTC ファンド (2026-01 設定)
  - **関連**: [[exchanges/jp-custody-komainu|Komainu]] とは野村系で Board 共有
- **[[exchanges/jp-exchange-dmm-bitcoin|DMM Bitcoin]]** (DMM 系、2024-05 Lazarus ハック → 廃業)
  - **モデル**: 2024-05 ハック後に自主廃業、顧客資産 100% 補填 ([[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|詳細]])
- **[[exchanges/jp-exchange-sbi-securities|SBI 証券]]** (SBI HD 系、暗号資産デリバ提供)
  - **モデル**: 暗号資産デリバ (金商法 1 種、SBI VC Trade の現物と分業)
- **[[exchanges/jp-exchange-monex|Monex]]** (Monex Group 8698 系、暗号資産デリバ)
  - **モデル**: デリバ専業 (Coincheck の現物と分業)
- **[[exchanges/jp-exchange-traders-securities|Traders Securities]]** (デリバ専業)
- **[[exchanges/jp-exchange-money-partners|Money Partners]]** (デリバ専業)
- **[[exchanges/jp-exchange-dmm-com-securities|DMM.com Securities]]**
- **[[exchanges/jp-exchange-goldenway-japan|Goldenway Japan]]**
- **[[exchanges/jp-exchange-finx-jcrypto|FinX/JCrypto]]**

### E. 中小・ニッチ系 (個別深耕)

- **[[exchanges/jp-exchange-zaif|Zaif]]** (JN グループ HD 6634 完全子会社、2025-07)
- **[[exchanges/jp-exchange-bittrade|BitTrade]]** (Hbg + 旧 HuobiJapan)
- **[[exchanges/jp-exchange-backseat-exchange|Backseat Exchange]]** (旧 coinbook、信託受益権型)
- **[[exchanges/jp-exchange-gaia|Gaia]]** (ニッチ)
- **[[exchanges/jp-exchange-bi-fxtrade|BI FXTRADE]]** (SBI FX トレード 子)
- **[[exchanges/jp-exchange-mercury|Mercury]]** (セレス 3696 系、CoinTrade 運営)
- **[[exchanges/jp-exchange-line-xenesis|LINE Xenesis]]** (LINE ヤフー 4689 系、2026-06 サービス終了)
- **[[exchanges/jp-exchange-coinhub|CoinHub]]**
- **[[exchanges/jp-exchange-gaudiy|Gaudiy]]**
- **[[exchanges/jp-exchange-sblox|S.BLOX]]** (旧ディーカレット = ソニーグループ傘下、暗号資産交換業)

### F. JPYC・stablecoin 専業 (規制カテゴリ独立)

- **[[exchanges/jp-exchange-jpyc|JPYC]]** (関東財務局 第00099号 資金移動業)
  - **モデル**: 円ステーブルコイン JPYC 発行・換金専業 (暗号資産交換業 **非**)
  - **差別化**: 資金移動業者型 SC 発行モデル。現行の同区分事業者は FSA 登録資料で確認する

## Big comparison matrix table

出典: [金融庁の暗号資産交換業者一覧](https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx)、[英語一覧](https://www.fsa.go.jp/en/regulated/licensed/en_kasoutuka.pdf)、[JVCEA 会員一覧](https://jvcea.or.jp/member/)。個別サービスは各社の現行公式ページで確認する。

| 分析対象 | 一次資料で確認する事項 | この表で断定しない事項 |
|---|---|---|
| **暗号資産交換業者** | 登録名、登録番号、登録日、法人情報 | 現在の商品、銘柄数、取引量、収益性 |
| **暗号資産デリバティブ事業者** | 金融商品取引業の登録と業務範囲 | 現物業との同一性 |
| **電子決済手段等取引業者** | 別制度の登録と取扱電子決済手段 | 暗号資産交換業への包含 |
| **JVCEA 会員** | 現行の会員種別と会員名 | FSA 登録区分との同一性 |
| **廃止・移管・履歴 entity** | FSA / JVCEA / 当事者の日時付き公表 | 「休止」「再参入」「準備中」の推測 |
| **個別サービス** | 当事者の現行商品ページと約款 | ◎○△✕ による時点不明の採点 |

## 収益モデル × ターゲット 二軸クロス分析

### 収益モデル別の確認方法

- 販売所、取引所、デリバティブ、カストディ、OTC、ステーキング、レンディング、IEO、電子決済手段は、別々の収益源として開示資料を確認する。
- 非開示企業について、販売所スプレッドや同業他社の数値から営業利益率を推定しない。
- 商品提供の有無は、登録だけで判断せず、各社の現行商品ページと約款で確認する。

### ターゲット顧客別

リテール、機関、法人決済、証券・RWA の分類は、当事者が明示した顧客区分と商品説明に基づく。登録区分、親会社または UI の外観だけから対象顧客を推定しない。

## 競争構造の差別化軸

### 銘柄数競争

- **取扱銘柄**: 各社の現行商品ページを同じ日時で確認し、銘柄数ランキングを固定しない
- **JVCEA 銘柄審査**: 国内取扱銘柄は登録・審査・各社商品公開で確認し、海外親会社の銘柄数から国内数を推定しない
- **ECISP 取扱商品**: 各 ECISP の登録と現行商品ページで確認し、未公表の追加銘柄を予測しない

### スプレッド競争

- 国内販売所スプレッドは業者・銘柄・時間で変わるため、発注時の提示価格と手数料表で確認する。
- Maker / taker 条件は各社の現行手数料表で確認し、最優位や固定料率を記録しない。

### 上場速度競争

- **新規上場速度**: 同一期間の日時付き上場発表で比較し、資本系列から速度を推定しない
- **IEO**: Coincheck IEO 国内初導入後 (2021)、GMO Coin / bitbank が追随

### グローバル流動性ブリッジ

- **海外 OB (order book) 接続**: Binance Japan は親会社 Binance Global の流動性ブリッジ訴求、OKJ は OKX デリバ未提供で限定的
- **国内 OTC 機関**: Crypto Garage / Tokyo Hash / Laser Digital Japan が直接的に海外マーケットメイカーとの OTC 接続

## Boundary cases

### B1. JPYC vs SBI VC Trade — 異なる規制カテゴリの SC ビジネス

- JPYC = 資金移動業者型 SC 発行体 (暗号資産交換業 非)
- SBI VC Trade = ECISP 経由 USDC 取扱業者 + 暗号資産交換業 + 金商法 1 種
- 両者は法的に異なるが、stablecoin ビジネスとして競合関係 ([[fintech/japan-epi-four-camps-comparison|EPI 四阵营]] 参照)

### B2. Coinbase Japan と DMM Bitcoin の現行状態確認

- Coinbase Japan の登録、サービス停止後の法人状態および再開有無は、FSA レジストリと Coinbase の現行公式発表で確認する。
- DMM Bitcoin の廃業、事業移管および法人状態は、当局資料と当事者の現行公式発表で確認する。

### B3. LINE Xenesis 2026-06 サービス終了 — 大手系の収益難証拠

- LINE ヤフー 4689 系の LINE Xenesis は 2026-06 にサービスを終了した。終了理由や収益性は当事者の公表範囲を超えて推定しない。

### B4. デリバ専業 vs 現物専業の二極化

- デリバ専業: SBI 証券 / Monex / Trek Labs Japan / Saxo Bank Japan / DMM.com Securities / Money Partners / Traders Securities / Goldenway Japan / Laser Digital Japan
- 現物専業 (デリバなし): Coincheck / Rakuten Wallet / Mercoin / OKJ / Gate Japan / S.BLOX / Mercury / Backseat
- 両方提供: bitFlyer / SBI VC Trade / GMO Coin / Binance Japan

### B5. JVCEA 第二種会員 (デリバ専業) の位置付け

- JVCEA は会員区分として「第一種 (暗号資産交換業)」と「第二種 (暗号資産デリバ取引業)」が並列。Laser Digital Japan / Trek Labs Japan / Saxo Bank Japan が第二種で運営。
- 第二種は現物販売所 / 取引所を持たないため、収益構造はデリバ手数料 + OTC のみ。

### B6. 親会社上場 vs 非上場の透明性差

- 上場親会社 (bitFlyer Holdings は非上場、Coincheck = Nasdaq、GMO Internet = 東証プライム、SBI HD = 東証プライム、楽天 = 東証プライム、メルカリ = 東証プライム、Monex = 東証プライム、JN HD = 東証スタンダード) は IR 開示で財務情報入手可能。
- 非上場独立系 (bitbank / BTCBOX / Gaia 等) は財務情報入手困難で、JVCEA 月次顧客資産分別管理状況提出のみが入手ルート。

## Related

- [[exchanges/INDEX|exchanges index]]
- [[exchanges/jp-crypto-exchange-overview|jp-crypto-exchange-overview]]
- [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 比較]]
- [[exchanges/cex-matching-engine-wallet-architecture|CEX matching engine / wallet architecture]]
- [[exchanges/cex-native-token-strategy-comparison|CEX native token 戦略比較]]
- [[exchanges/jp-vasp-parent-company-map|VASP 親会社マップ]]
- [[exchanges/jvcea-whitelist-token-listing|JVCEA whitelist token listing]]
- [[exchanges/jp-exchange-bitflyer|bitFlyer]]
- [[exchanges/jp-exchange-coincheck|Coincheck]]
- [[exchanges/jp-exchange-gmo-coin|GMO Coin]]
- [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]
- [[exchanges/jp-exchange-bitbank|bitbank]]
- [[exchanges/jp-exchange-binance-japan|Binance Japan]]
- [[exchanges/jp-exchange-coinbase-japan|Coinbase Japan]]
- [[exchanges/jp-exchange-okcoin-japan|OKJ]]
- [[exchanges/jp-exchange-osl-japan|OSL Japan]]
- [[exchanges/jp-exchange-laser-digital-japan|Laser Digital Japan]]
- [[exchanges/jp-exchange-rakuten-wallet|Rakuten Wallet]]
- [[exchanges/jp-exchange-mercoin|Mercoin]]
- [[exchanges/jp-exchange-crypto-garage|Crypto Garage]]
- [[exchanges/jp-exchange-jpyc|JPYC]]
- [[exchanges/jp-exchange-dmm-bitcoin|DMM Bitcoin]]
- [[exchanges/jp-exchange-mercury|Mercury (CoinTrade)]]
- [[exchanges/jp-vasp-incident-history|jp-vasp-incident-history]]
- [[exchanges/jp-vasp-ma-consolidation-history|jp-vasp-ma-consolidation-history]]
- [[exchanges/japan-stablecoin-issuer-regulatory-classification-matrix|日本 stablecoin 発行体 規制分類マトリクス]]
- [[exchanges/crypto-custody-provider-landscape-matrix|crypto custody provider landscape matrix]]

## Sources

- FSA「暗号資産交換業者登録一覧」: https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
- FSA「List of Registered Crypto-asset Exchange Service Providers in Japan」: https://www.fsa.go.jp/en/regulated/licensed/en_kasoutuka.pdf
- JVCEA 会員一覧: https://jvcea.or.jp/member/
- FSA「暗号資産・電子決済手段関係」: https://www.fsa.go.jp/policy/virtual_currency02/
