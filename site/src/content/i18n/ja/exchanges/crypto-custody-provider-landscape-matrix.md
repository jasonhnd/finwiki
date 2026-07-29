---
source: exchanges/crypto-custody-provider-landscape-matrix
source_hash: 06bf81f11adad1c7
lang: ja
status: machine
fidelity: ok
title: "暗号資産カストディプロバイダー ランドスケープマトリクス — Japan + Global 機関カストディ 10 社の技術・規制・顧客比較"
translated_at: 2026-07-29T11:02:23.000Z
---

# 暗号資産カストディプロバイダー ランドスケープマトリクス — Japan + Global 機関カストディ 10 社の技術・規制・顧客比較

## TL;DR

機関向け暗号資産カストディ市場は **(1) 技術モデル (cold storage / MPC / hybrid) × (2) ライセンス階層 (Trust Charter / VASP / vendor only) × (3) 顧客セグメント (CEX / hedge fund / ETF 発行会社 / SWF / pension)** の三軸で分化している。本マトリクスは日本で参照される Ginco / Komainu / Fireblocks Japan、米系の Coinbase カストディ / Fidelity Digital / Anchorage / BitGo、Big Bank 系の BNY Mellon Digital Asset / State Street、Standard カストディ / Custodiem を **技術・規制・SLA・保険・日本ライセンス・資産カバレッジ・課金モデル** で側並び比較する。詳細は [[exchanges/jp-institutional-custody-three-pillars|JP institutional カストディ三本柱]] / [[exchanges/global-institutional-custody-five-pillars|グローバル機関カストディ 5 本柱]] を起点に。

## ウィキ上の位置づけ

本項目は [[exchanges/INDEX|exchanges index]] に属する。これは [[exchanges/jp-institutional-custody-three-pillars|JP 国内 3 強]] と [[exchanges/global-institutional-custody-five-pillars|グローバル 5 本柱]] の合成に対する **プロバイダー軸 (vendor-axis)** のカウンターパートである。技術深掘りは [[exchanges/cex-matching-engine-wallet-architecture|CEX matching engine / ウォレット architecture]] と [[exchanges/jp-vasp-cold-storage-segregation-rules|JP VASP cold storage 分別管理]] を参照。規制境界は [[exchanges/jp-vasp-security-audit-certification|JP VASP セキュリティ監査・認証]] / [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 8 極比較]] を参照。Big Bank 側は [[foreign-financial-institutions/bny-mellon-japan|BNY メロン日本]] / [[foreign-financial-institutions/state-street-japan|State Street Japan]] が anchor。

## なぜこのマトリクスが重要か

- 暗号資産カストディは **「VASP 自己保管」と「B2B vendor インフラ」と「Qualified Custodian」の三層構造** で運営される。VASP 自己保管 (bitFlyer / Coincheck / bitbank 等) は JVCEA 自主規制 + 内製で実装、B2B vendor (Ginco / Fireblocks / Komainu Connect) は VASP・銀行向けインフラ、Qualified Custodian (Coinbase カストディ / Anchorage / BitGo / Komainu / Fidelity Digital) は ETF・年金・SWF 受託。
- **米系 ETF カストディ**: 米現物 BTC ETF の受託先は各 ETF の現行届出とカストディ契約で確認する。日本側の制度状況は [[exchanges/btc-spot-etf-japan-impact|JP BTC spot ETF 影響]] を参照する。
- **DMM Bitcoin 事件後の確認事項**: 国内 VASP のコールド / ホット保管要件は JVCEA の現行自主規制と各社開示で確認し、B2B vendor 採用や技術需要の増減を事件だけから推定しない。
- **Big Bank 系の参入**: BNY Mellon と State Street のデジタル資産サービスは、提供地域、対象顧客、規制主体および契約主体を各社の現行公式資料で確認する。

## カストディアン別セクション

### A. 日本 B2B vendor 3 強 (国内 VASP インフラ供給)

#### A1. Ginco (国内独立系)
- **本社**: 〒104-0032 東京都中央区八丁堀三丁目27番4号 (2017-12-21 設立、資本金 1 億円)
- **代表**: 坂根遼 (2026-04 から、創業者森川夢佑斗から交代)
- **株主**: Global Brain / DBJ キャピタル / みやこキャピタル / 三菱 UFJ キャピタル (非上場独立系)
- **技術**: HSM + MPC を組み合わせた Ginco Enterprise ウォレット。導入実績や市場順位は固定せず、Ginco の現行公式導入事例で確認する
- **顧客**: 国内 FSA 登録 VASP + 証券 (みずほ証券・大和証券) + 信託銀行 (三菱 UFJ 信託 + 三井住友信託 + Trust Base 等)
- **対応資産**: 対応資産、追加手順および納期は案件と時点で変わるため、現行製品資料で確認する
- **規制**: B2B インフラ提供と規制登録は別論点である。提供主体、登録状態および認証は FSA / JVCEA と Ginco の現行資料で確認する
- **課金**: ライセンス契約 + per-tx 課金
- **戦略**: 国産 HW ウォレット (AndGo) 統合 + STインフラ + Babylon Labs BTCFi (2025-12) + Canton Network バリデータ (2025-12) + インド開発拠点 (2024-05) で多角化

#### A2. Komainu (Jersey 法人、野村 HD 系)
- **本社**: Jersey, Channel Islands (2018 設立)
- **株主**: 野村 HD + CoinShares + Ledger 三者合弁 (2018) → Blockstream Series B リード 2025-01 ($75M、BTC 116 億円相当)
- **技術**: Cold storage + offline signing + MPC + HSM = 機関・主権国家向け cold カストディ専業
- **顧客**: UAE 政府 / 英国警察 (押収暗号資産保管 2021-01) / スイス証券取引所 Bitcoin ETP (2021-01) / OKX (Komainu Connect 2023-06)
- **対応資産**: BTC 主軸 + ETH + 主要 PoS 系 (custodial staking 2021-)
- **規制**: Jersey JFSC、UK FCA、UAE VARA、Italy OAM の各登録・許可範囲は当局レジストリで確認する。日本での提供主体と登録状態も FSA / JVCEA の現行一覧で確認する
- **課金**: 料金体系は契約と資産・サービス範囲で異なるため、現行の公式提案で確認する
- **戦略**: Komainu Connect (取引所担保連携 2023-) + Komainu CORE (Collateral-as-a-Service 2026-04) + Propine 買収 (2024-10 シンガポール) でアジア拡大
- **取締役会の重複 (Board overlap)**: Laser Digital ([[exchanges/jp-exchange-laser-digital-japan|Laser Digital Japan]]) 幹部 + Blockstream の dual anchor

#### A3. Fireblocks Japan (米国本社、東京拠点)
- **本社**: New York City。日本の拠点・法人・担当体制は Fireblocks の現行公式会社情報で確認する
- **株主**: 資金調達と投資家情報は Fireblocks の日時付き公式発表で確認し、過去評価額を現行企業価値として扱わない
- **技術**: MPC + Policy Engine + Treasury Management (Fireblocks Network)。顧客数や累積取引高は固定せず、現行公式指標で確認する
- **顧客**: グローバル金融機関中心 + Western Union (USDPT) + 欧州銀行 12 行コンソーシアム Qivalis (EUR SC) + 三井物産 MDC (Zipangcoin) + SMBC × Ava Labs × TIS SC (2025-04) + みんなの銀行 + CoinTrade
- **対応資産**: 対応チェーンと資産クラスは定期的に変わるため、現行製品一覧で確認する
- **規制**: Fireblocks Trust Company、欧州対応、日本での提供主体・登録状態および認証は各当局と Fireblocks の現行資料で確認する
- **課金**: Subscription
- **戦略**: 日本での事業展開と資本市場計画は、Fireblocks の日時付き公式発表がある場合にのみ更新する

### B. 米系 4 強 (Trust Charter Qualified Custodian)

#### B1. Coinbase カストディ Trust
- **設立**: 2018、NY DFS Trust Charter
- **親**: Coinbase Global (NASDAQ:COIN)
- **AUM**: 固定推定値は置かず、Coinbase の現行開示で確認する
- **技術**: Multi-sig + HSM (内製ハイブリッド)
- **顧客**: BlackRock IBIT 等米現物 BTC ETF 受託多数、ヘッジファンド、機関
- **規制**: NY DFS Trust Charter (2018) + SOC 1/2 Type II + Lloyd's of London insurance
- **日本**: 日本での提供主体、登録状態およびカストディ提供範囲は FSA レジストリと Coinbase の現行公式資料で確認する
- **課金**: AUM ベース + per-tx

#### B2. Fidelity Digital Assets
- **設立**: 2018、MA Trust Charter + NY DFS
- **親**: Fidelity Investments
- **AUM**: 固定値や非開示推定を置かず、Fidelity の現行開示で確認する
- **技術**: Cold storage + offline signing (保守的アプローチ)
- **顧客**: FBTC (Fidelity Wise Origin Bitcoin ETF) 自社受託、年金・財団に強い
- **規制**: MA Trust + NY DFS + SOC 1/2 Type II
- **日本**: 日本での提供主体とサービス範囲は Fidelity の現行公式資料で確認する
- **課金**: AUM ベース

#### B3. Anchorage Digital
- **設立**: 2021-01 米国初の **Federal Trust Chartered Crypto Bank** (OCC 認可)
- **AUM**: 固定値や非開示推定を置かず、Anchorage の現行開示で確認する
- **技術**: MPC + HSM を用いる公開アーキテクチャ。規制上の位置付けは OCC の現行資料で確認する
- **顧客**: 連邦規制対応必須の機関 (米国機関年金・財団・連邦監督対象の金融機関)
- **規制**: **OCC Federal Trust Bank** (50 州 MTL 全免除のスペシャルステータス)
- **日本**: 日本での提供主体とサービス範囲は Anchorage の現行公式資料で確認する
- **戦略**: OCC charter の法的範囲と他社との比較は OCC の現行レジストリ・認可資料で確認する

#### B4. BitGo
- **設立**: 2013 (業界最古参)
- **本社**: Palo Alto, CA
- **技術**: Multi-sig + MPC ハイブリッド (BitGo ウォレット)
- **顧客**: 多くの CEX 自社カストディ受託、ETF 受託、機関
- **規制**: SD State Trust Charter + multi-state 拡張 + BitGo Trust HK (Custodian Trust)
- **日本**: 三井物産 MDC との公表提携を含め、日本での提供主体とサービス範囲は当事者の現行公式資料で確認する
- **戦略**: 資金調達、評価額および上場計画は BitGo の日時付き公式発表がある場合にのみ更新する

### C. Big Bank 系 (G-SIB のデジタル資産参入)

#### C1. BNY Mellon Digital Asset カストディ
- **親**: The Bank of New York Mellon Corporation (NYSE: BK)。AUC/A と市場順位は BNY の最新決算で確認する
- **デジタル資産カストディ**: 2022-10 Crypto カストディ Platform 立ち上げ、米国機関向け
- **日本拠点**: [[foreign-financial-institutions/bny-mellon-japan|BNY メロン信託銀行]] + ザ・バンク・オブ・ニューヨーク・メロン東京支店 + BNY メロン・アセット・マネジメント・ジャパン
- **日本デジタル資産事業**: 日本での提供主体、対象資産と顧客範囲は BNY の現行公式資料と関連レジストリで確認する
- **顧客**: 米国年金・財団・SWF + Fireblocks 共同出資 (2021-03)
- **戦略**: 純粋ホールセール外資 + GPIF・大手年金の海外資産カストディというグローバル分業

#### C2. State Street Digital Asset カストディ
- **親**: State Street Corporation (NYSE: STT)。AUC/A と市場順位は State Street の最新決算で確認する
- **デジタル資産カストディ**: 2021-06 State Street Digital 部門設立、機関向け
- **日本拠点**: [[foreign-financial-institutions/state-street-japan|State Street Japan]] = ステート・ストリート信託銀行 + 東京支店 + SSGA (SPDR ETF 運用元) + Charles River Development
- **日本デジタル資産事業**: 日本での提供主体、対象資産と顧客範囲は State Street の現行公式資料と関連レジストリで確認する
- **顧客**: GPIF・大手年金・SPDR 系 ETF 受託
- **戦略**: 純粋ホールセール外資 + master trust ([[trust-banks/master-trust-bank|master-trust-bank]]) が国内信託に特化するのに対し、State Street は GPIF・大手年金の海外資産カストディ

### D. その他 Qualified Custodian + 国内特殊カストディ

#### D1. Standard カストディ & Trust Company
- **親**: PolySign / Standard Chartered 連携
- **規制**: NY DFS Trust Charter (2022)
- **技術**: MPC + HSM
- **顧客**: 機関 + ヘッジファンド
- **日本**: 日本での提供主体とサービス範囲は Standard カストディの現行公式資料で確認する

#### D2. Custodiem (旧 FTX Japan、bitFlyer 系)
- **親**: [[exchanges/jp-exchange-bitflyer|bitFlyer]] (2024 取得)
- **規制**: FSA 暗号資産交換業 (旧 FTX Japan ライセンス継承)
- **技術**: 旧 FTX Japan のカストディ基盤 + bitFlyer 統合
- **顧客**: 旧 FTX Japan 顧客 + bitFlyer グループ内
- **戦略**: FTX 破綻後の顧客資産 100% 補填事例として注目 ([[exchanges/ftx-japan-100pct-return-case-study|FTX Japan 100% return ケース]] 参照)

## 大比較マトリクス表

出典: 各社の公式製品・会社情報ページ（下表 URL）。対応資産、SLA、保険、料金、AUM、ライセンスおよび日本での提供状況は変動するため、この表では固定値や未公表事項を比較せず、検証入口と業務モデルだけを記録する。

| プロバイダー | 公式公開情報 | 本表で確認する範囲 |
|---|---|---|
| **Ginco** | https://www.ginco.co.jp/company/outline | 会社概要と法人向けウォレット事業 |
| **Komainu** | https://komainu.com/about/ | 機関向けカストディ事業 |
| **Fireblocks** | https://www.fireblocks.com/about/ | デジタル資産インフラ事業 |
| **Coinbase Custody** | https://www.coinbase.com/custody | 機関向けカストディ製品 |
| **Fidelity Digital Assets** | https://www.fidelitydigitalassets.com/ | 機関向けデジタル資産サービス |
| **Anchorage Digital** | https://www.anchorage.com/ | デジタル資産プラットフォーム |
| **BitGo** | https://www.bitgo.com/ | ウォレット・カストディ事業 |
| **BNY** | https://www.bny.com/corporate/jp/ja.html | BNY の公開事業情報 |
| **State Street** | https://www.statestreet.com/jp | State Street の公開事業情報 |
| **Standard Custody** | https://www.standardcustody.com/ | カストディ製品と会社情報 |
| **Custodiem** | https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx | 日本の登録業者一覧での現行状態 |

## 三層構造で見る市場構造

### 層 1: B2B Infrastructure Vendor (顧客が VASP・銀行・機関)

- **Ginco** = 国内独立系、国内 VASP・信託銀行向け国産インフラ
- **Fireblocks** = 海外発の機関向けデジタル資産インフラ SaaS。現行の顧客指標は公式資料で確認する
- **Komainu** = Nomura 系、海外機関 + 主権国家向け

特徴: 自社が直接カストディアンではない (顧客が自社で カストディ業務を担う)。Subscription + ライセンス課金。VASP / 銀行のセキュリティ基盤として機能。

### 層 2: Qualified Custodian (顧客が ETF / 年金 / 機関)

- **Coinbase カストディ** + **Fidelity Digital** + **Anchorage** + **BitGo** + **Komainu** + **Standard カストディ**

特徴: 自社が直接カストディを担う場合、Trust Charter 等の法的主体と契約範囲を確認する。料金と米現物 BTC ETF の受託状況は各社の現行公式開示・ETF 届出で確認する。

### 層 3: Big Bank 系デジタル資産カストディ (G-SIB 級参入)

- **BNY Mellon Digital Asset カストディ** + **State Street Digital**

特徴: AUC/A $50T 級の伝統カストディバンク × デジタル資産。年金・SWF・財団の信認 floor を提供。日本では国内デジタル資産業務未稼働だが、機関の海外暗号資産配分時の receiver として機能。

## 境界ケース

### B1. Komainu の「B2B vendor vs Qualified Custodian」境界

- Komainu は cold カストディ専業として **直接機関カストディ** (Trust Charter なしの Jersey JFSC + UAE VARA で運営) と **インフラ提供** (Komainu Connect で OKX 等に提供) の両方を行う。
- 一般的な Qualified Custodian (Coinbase カストディ / Anchorage / BitGo) が NY DFS Trust 必須なのに対し、Komainu は Jersey ルートで類似機能を提供 → **規制裁定**

### B2. Fireblocks の「インフラ vs Custodian」境界

- Fireblocks は元来 B2B SaaS だが、2024 に Fireblocks Trust Company (米信託会社) を取得 → 直接カストディビジネスも可能な構造に変化。
- **2026 戦略**: Embedded ウォレット (Dynamic 2025-10 買収 $90M) で B2C 接続もサポート、Network for Payments で Western Union 等の決済特化型へ拡張

### B3. Big Bank 系の日本デジタル資産事業の **未稼働問題**

- BNY Mellon は米国で 2022-10 から Crypto カストディ Platform 稼働、State Street も 2021-06 から Digital Asset 部門設立。しかし **日本では国内デジタル資産業務未稼働** (2026-05 時点)。
- 日本で必要となる登録・監督は提供機能と法的主体ごとに異なる。Big Bank 系の参入時期や条件を GPIF / 大手年金の将来行動から推定しない。

### B4. Anchorage の Federal Trust Bank の位置付け

- Anchorage Digital の OCC charter と認可業務範囲は OCC の現行資料で確認する。「唯一」などの比較表現は同じ時点・同じ licence class のレジストリ確認なしに用いない。
- 州 charter と連邦 charter は監督主体・認可範囲が異なる。顧客適格性や提供可能範囲を licence label だけから推定しない。
- **2025 Circle OCC Trust 取得** はこの Anchorage 前例を踏襲 → 連邦監督対象金融機関の SC 利用拡大の前提整備。

### B5. Custodiem の「VASP 自己カストディ vs vendor インフラ」境界

- Custodiem (旧 FTX Japan、bitFlyer が 2024 取得) は **FSA 暗号資産交換業ライセンス保有** で、bitFlyer グループの自社カストディ機能を補強する位置付け。
- 純粋な B2B vendor (Ginco / Fireblocks) や独立 Qualified Custodian (Komainu) とは異なり、特定 VASP グループ内のカストディ機能として運営。
- 旧 FTX Japan の顧客返還事例は、当時の手続、資産区分および公表結果を確認する事例であり、日本 VASP 全体の遵守状況を証明するものではない。

### B6. 国内 VASP 自社カストディ vs B2B vendor の選択

- 国内 VASP の大半 (bitFlyer / Coincheck / GMO Coin / SBI VC Trade / bitbank 等) は **自社カストディ** を運営 (内製 + 国内 HSM / Ginco インフラ併用)。
- 機関向け (Crypto Garage / Digital Asset Markets / Laser Digital Japan) は外部 vendor (Fireblocks / Ginco / Komainu) との提携が中心。
- 自社保管と外部 vendor の組み合わせは事業者ごとに異なる。採用構成は各社の現行セキュリティ・カストディ開示で確認する

### B7. 三井物産 MDC × BitGo / Fireblocks の二重提携

- 三井物産は Zipangcoin (金担保 RWA) 発行で **Fireblocks (multi-chain 展開基盤)** + **BitGo (カストディ接続)** の二重提携を持つ。
- これは大企業 RWA 案件で「単一 vendor 依存リスク回避」+「異なる技術スタック並行運用」の事例。

### B8. Big Bank 系の日本デジタル資産参入トリガー

- BNY Mellon / State Street が日本デジタル資産カストディ を本格化するトリガーは:
  1. **GPIF の方針** — 現行の公表ポートフォリオと正式な方針変更を確認する
  2. **日本現物 BTC ETF 承認** (2026-05 時点未承認)
  3. **大手生保 / 銀行の暗号資産配分開始** (2026 時点で 第一生命 / 住友生命 が JPYC シリーズ B 出資など接近の兆候)
- これらを「参入トリガー」と断定せず、Big Bank 系の日本拠点が正式な商品・登録・契約主体を公表した時点で更新する。

### B9. Coinbase カストディ vs Coinbase Japan の関係

- Coinbase カストディ Trust (NY DFS Trust) は Coinbase Global の子。米現物 BTC ETF (BlackRock IBIT 等) の受託カストディアン。
- Coinbase Japan の過去のサービス変更と現在の登録状態は FSA レジストリと Coinbase の公式発表で分けて確認する。
- **カストディ単独事業の日本進出**: 未公表の再参入意図や経済的インセンティブを推定せず、提供主体・登録・商品公開が確認できた時点で更新する。

### B10. Komainu の Jersey ルートの規制比較

- Komainu の Jersey JFSC 登録と米国 NY DFS Trust は、取得・維持要件、認可業務、対象顧客および提供法域を各当局の現行資料で比較する。
- 米国機関向けの提供可否は、顧客要件、契約主体、登録および商品開示で確認し、ライセンス所在地だけから推定しない。
- **2025-01 Blockstream Series B** の目的と BTC-native asset / Lightning 関連サービスは、両社の日時付き公式発表で確認する。

### B11. 国内 VASP DMM Bitcoin 廃業の教訓

- 2024-05 DMM Bitcoin 事案の被害、原因、保管管理および再発防止策は、当局・捜査機関・当事者の一次資料で確認する。
- 国内 VASP の MPC + HSM 導入状況は、各社と vendor の日時付き公式導入事例で確認する。
- 結果や採用増加は事件から推定せず、B2B vendor と Ginco の日時付き公式導入事例で確認する。

## 戦略的含意

### 含意 1: 三層構造の比較

- 層 1 (B2B vendor) = Ginco / Fireblocks / Komainu を比較対象とする
- 層 2 (Qualified Custodian) = Coinbase / Fidelity / Anchorage / BitGo + Komainu
- 層 3 (Big Bank) = BNY Mellon / State Street
- 日本市場における各層の提供主体、対象顧客、商品および登録状況を日時付き公式資料で比較する。

### 含意 2: コールド保管要件の継続確認

- 国内 VASP のコールド保管要件は JVCEA の現行自主規制と各社開示で確認する。
- MPC + HSM の採用や需要動向は vendor の日時付き導入事例で確認する。

### 含意 3: 機関 RWA + ST デジタル証券との接続

- 三井物産 MDC / Progmat ST 発行 / Crypto Garage 機関 OTC 等の カストディ利用は、案件ごとの日時付き公式発表で確認する。
- 信託銀行 (三菱 UFJ 信託 / SMBC 信託 / みずほ信託) と カストディ vendor (Ginco) の連動は、公表済み契約・導入事例の範囲で記録する。

### 含意 4: Big Bank 系の日本デジタル資産参入の確認条件

- BNY Mellon / State Street の日本デジタル資産事業は、正式な提供主体、対象顧客、商品および規制登録で確認する。
- GPIF の方針は現行の公式開示で確認し、未公表の暗号資産配分や検討時期を推定しない。

### 含意 5: Anchorage / Circle の OCC Trust 連邦ルート比較

- Anchorage Digital と Circle の OCC 関連認可は、認可日、法的主体および業務範囲を OCC の現行資料で比較する。
- 連邦監督対象金融機関の暗号資産 / SC 利用や日本への影響は、規制・商品公開を確認して更新する。

## 関連

- [[exchanges/INDEX|exchanges index]]
- [[exchanges/global-institutional-custody-five-pillars|グローバル機関カストディ 5 本柱]]
- [[exchanges/jp-institutional-custody-three-pillars|JP institutional カストディ三本柱]]
- [[exchanges/jp-custody-ginco|Ginco 詳細]]
- [[exchanges/jp-custody-komainu|Komainu 詳細]]
- [[exchanges/jp-custody-fireblocks-japan|Fireblocks Japan 詳細]]
- [[exchanges/jp-vasp-cold-storage-segregation-rules|JP VASP cold storage 分別管理ルール]]
- [[exchanges/jp-vasp-security-audit-certification|JP VASP セキュリティ監査・認証]]
- [[foreign-financial-institutions/state-street-japan|State Street Japan]]
- [[foreign-financial-institutions/bny-mellon-japan|BNY メロン日本]]
- [[exchanges/cex-matching-engine-wallet-architecture|CEX matching engine / ウォレット architecture]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制 8 極比較]]
- [[exchanges/global-cex-top10-comparison|グローバル CEX top 10]]
- [[exchanges/jp-exchange-laser-digital-japan|Laser Digital Japan]] (Komainu Board 共有)
- [[exchanges/jp-exchange-crypto-garage|Crypto Garage]] (Nomura 系)
- [[exchanges/jp-exchange-bitflyer|bitFlyer]] (Custodiem 親)
- [[exchanges/ftx-japan-100pct-return-case-study|FTX Japan 100% return ケース]]
- [[exchanges/btc-spot-etf-japan-impact|JP BTC spot ETF 影響]]
- [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus ハック]]
- [[exchanges/jp-vasp-incident-history|jp-vasp-incident-history]]
- [[exchanges/japan-stablecoin-issuer-regulatory-classification-matrix|日本 stablecoin 発行体規制分類マトリクス]]
- [[exchanges/japan-vasp-business-model-competitive-matrix|日本 VASP ビジネスモデル競合マトリクス]]

## 出典

- Ginco 会社概要: https://www.ginco.co.jp/company/outline
- Komainu About: https://komainu.com/about/
- Fireblocks About: https://www.fireblocks.com/about/
- BitGo: https://www.bitgo.com/
- Anchorage Digital: https://www.anchorage.com/
- Coinbase カストディ: https://www.coinbase.com/custody
- BNY Mellon Japan: https://www.bny.com/corporate/jp/ja.html
- State Street Japan: https://www.statestreet.com/jp
- FSA 暗号資産交換業者登録一覧: https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
- JVCEA 会員一覧: https://jvcea.or.jp/member/
