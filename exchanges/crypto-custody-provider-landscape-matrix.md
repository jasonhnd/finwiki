---
title: 暗号資産カストディ プロバイダー ランドスケープ マトリクス — Japan + Global 機関カストディ 10 社の技術・規制・顧客比較
aliases:
  - Crypto custody provider landscape matrix
  - 暗号資産カストディ プロバイダー比較
  - JP custody landscape matrix
  - Global institutional custody comparison matrix
  - Ginco Komainu Fireblocks BitGo Anchorage comparison
  - Coinbase Custody BNY Mellon State Street digital asset
  - Crypto custody MPC vs cold vs trust matrix
  - Institutional crypto custodian fee insurance regulatory matrix
domain: exchanges
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags:
  - exchanges
  - matrix
  - custody
  - institutional
  - mpc-custody
  - cold-storage
  - benchmark
  - global
  - jp-custody
status: active
sources:
  - https://www.ginco.co.jp/company/outline
  - https://komainu.com/about/
  - https://www.fireblocks.com/about/
  - https://www.bitgo.com/
  - https://www.anchorage.com/
  - https://www.coinbase.com/custody
  - https://www.bny.com/corporate/jp/ja.html
  - https://www.statestreet.com/jp
---

# 暗号資産カストディ プロバイダー ランドスケープ マトリクス — Japan + Global 機関カストディ 10 社の技術・規制・顧客比較

## TL;DR

機関向け暗号資産カストディ市場は **(1) 技術モデル (cold storage / MPC / hybrid) × (2) ライセンス階層 (Trust Charter / VASP / vendor only) × (3) 顧客セグメント (CEX / hedge fund / ETF issuer / SWF / pension)** の三軸で分化している。本マトリクスは日本 3 強 ([[exchanges/jp-custody-ginco|Ginco]] / [[exchanges/jp-custody-komainu|Komainu]] / [[exchanges/jp-custody-fireblocks-japan|Fireblocks Japan]]) + 米系 4 強 (Coinbase Custody / Fidelity Digital / Anchorage / BitGo) + Big Bank 系 2 社 (BNY Mellon Digital Asset / State Street) + Standard Custody / Custodiem を含む 10 社を **技術・規制・SLA・保険・日本ライセンス・資産カバレッジ・課金モデル** で側並び比較する。詳細は [[exchanges/jp-institutional-custody-three-pillars|JP institutional custody 三本柱]] / [[exchanges/global-institutional-custody-five-pillars|グローバル機関カストディ 5 本柱]] を起点に。

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. It is the **プロバイダー軸 (vendor-axis)** counterpart to [[exchanges/jp-institutional-custody-three-pillars|JP 国内 3 強]] と [[exchanges/global-institutional-custody-five-pillars|グローバル 5 本柱]] の合成。技術深掘りは [[exchanges/cex-matching-engine-wallet-architecture|CEX matching engine / wallet architecture]] と [[exchanges/jp-vasp-cold-storage-segregation-rules|JP VASP cold storage 分別管理]] を参照。規制境界は [[exchanges/jp-vasp-security-audit-certification|JP VASP セキュリティ監査・認証]] / [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 8 極比較]] を参照。Big Bank 側は [[JapanFG/bny-mellon-japan|BNY メロン日本]] / [[JapanFG/state-street-japan|State Street Japan]] が anchor。

## Why this matrix matters

- 暗号資産カストディは **「VASP 自己保管」と「B2B vendor インフラ」と「Qualified Custodian」の三層構造** で運営される。VASP 自己保管 (bitFlyer / Coincheck / bitbank 等) は JVCEA 自主規制 + 内製で実装、B2B vendor (Ginco / Fireblocks / Komainu Connect) は VASP・銀行向けインフラ、Qualified Custodian (Coinbase Custody / Anchorage / BitGo / Komainu / Fidelity Digital) は ETF・年金・SWF 受託。
- **米系 ETF カストディ集中**: BlackRock IBIT / Fidelity FBTC 等の 米現物 BTC ETF (2024-01 承認) の受託カストディアンは Coinbase Custody / Fidelity Digital / BitGo / Anchorage に集中。日本にはまだ現物 BTC ETF が承認されていない ([[exchanges/btc-spot-etf-japan-impact|JP BTC spot ETF 影響]] 参照)。
- **2024-05 DMM Bitcoin Lazarus ハック (482 億円)** 以降、国内 VASP の **コールド保管比率 95%+ (JVCEA 自主規制)** の徹底が再強化された。ホット保管比率を抑えるため、B2B vendor の MPC + HSM 技術需要が拡大。
- **Big Bank 系の参入** (BNY Mellon Digital Asset Custody 2022-, State Street Digital 2021-) が機関の信認 floor を引き上げ、年金基金・財団・保険会社の暗号資産配分の前提条件を整備しつつある。

## Per-custodian sections

### A. 日本 B2B vendor 3 強 (国内 VASP インフラ供給)

#### A1. Ginco (国内独立系)
- **本社**: 〒104-0032 東京都中央区八丁堀三丁目27番4号 (2017-12-21 設立、資本金 1 億円)
- **代表**: 坂根 遼 (2026-04 から、創業者 森川夢佑斗から交代)
- **株主**: Global Brain / DBJ キャピタル / みやこキャピタル / 三菱 UFJ キャピタル (非上場独立系)
- **技術**: HSM + MPC ハイブリッド = Ginco Enterprise Wallet (国内 B2B 暗号資産ウォレットシェア No.1 自社発表 2021-08)
- **顧客**: 国内 FSA 登録 VASP + 証券 (みずほ証券・大和証券) + 信託銀行 (三菱 UFJ 信託 + 三井住友信託 + Trust Base 等)
- **対応資産**: BTC + ETH + ERC20 (最短 2 週間で追加) + 独自チェーン (最短 1 ヶ月) — 国内最多水準
- **規制**: VASP 非該当 (B2B インフラ) → JVCEA 非加盟・FSA 登録なし。SOC 2 Type II + SGS 認証
- **課金**: ライセンス契約 + per-tx 課金
- **戦略**: 国産 HW ウォレット (AndGo) 統合 + STインフラ + Babylon Labs BTCFi (2025-12) + Canton Network バリデータ (2025-12) + インド開発拠点 (2024-05) で多角化

#### A2. Komainu (Jersey 法人、野村 HD 系)
- **本社**: Jersey, Channel Islands (2018 設立)
- **株主**: 野村 HD + CoinShares + Ledger 三者合弁 (2018) → Blockstream Series B リード 2025-01 ($75M、BTC 116 億円相当)
- **技術**: Cold storage + offline signing + MPC + HSM = 機関・主権国家向け cold custody 専業
- **顧客**: UAE 政府 / 英国警察 (押収暗号資産保管 2021-01) / スイス証券取引所 Bitcoin ETP (2021-01) / OKX (Komainu Connect 2023-06)
- **対応資産**: BTC 主軸 + ETH + 主要 PoS 系 (custodial staking 2021-)
- **規制**: Jersey JFSC (2019) + UK FCA Crypto (2025) + UAE VARA (2023) + Italy OAM (2025)。**日本 FSA 未登録 / JVCEA 非加盟 / 日本拠点なし**
- **課金**: 月額 + AUM ベース
- **戦略**: Komainu Connect (取引所担保連携 2023-) + Komainu CORE (Collateral-as-a-Service 2026-04) + Propine 買収 (2024-10 シンガポール) でアジア拡大
- **Board overlap**: Laser Digital ([[exchanges/jp-exchange-laser-digital-japan|Laser Digital Japan]]) 幹部 + Blockstream の dual anchor

#### A3. Fireblocks Japan (米国本社、東京拠点)
- **本社**: New York City (R&D Tel Aviv、2018 設立)、東京拠点 LinkedIn 確認 5 名
- **株主**: Sequoia / Paradigm / BNY Mellon (2021-03 参加) / Google Ventures = Series E $550M (2022-01、$8B valuation)
- **技術**: MPC + Policy Engine + Treasury Management (Fireblocks Network) — グローバル 2,400+ 機関、$10T+ 累積取引高
- **顧客**: グローバル金融機関中心 + Western Union (USDPT) + 欧州銀行 12 行コンソーシアム Qivalis (EUR SC) + 三井物産 MDC (Zipangcoin) + SMBC × Ava Labs × TIS SC (2025-04) + みんなの銀行 + CoinTrade
- **対応資産**: 50+ ブロックチェーン (定期拡張)、SC (USDC/USDT/EPI) + RWA + NFT
- **規制**: Fireblocks Trust Company (米国信託、2024-) + MiCA 対応。**日本 FSA 登録なし** (インフラ SaaS のため不要)。SOC 2 Type II + ISO 27001
- **課金**: Subscription
- **戦略**: 日本拠点拡張中 (2026-05 CoinPost CEO インタビュー報道)、IPO 観測あり (2025-11 Bloomberg)

### B. 米系 4 強 (Trust Charter Qualified Custodian)

#### B1. Coinbase Custody Trust
- **設立**: 2018、NY DFS Trust Charter
- **親**: Coinbase Global (NASDAQ:COIN)
- **AUM**: $200B+ (推定)
- **技術**: Multi-sig + HSM (内製ハイブリッド)
- **顧客**: BlackRock IBIT 等 米現物 BTC ETF 受託多数、ヘッジファンド、機関
- **規制**: NY DFS Trust Charter (2018) + SOC 1/2 Type II + Lloyd's of London insurance
- **日本**: 2023 Coinbase Japan 撤退 (ライセンス保持)、custody 単独事業の日本進出なし
- **課金**: AUM ベース + per-tx

#### B2. Fidelity Digital Assets
- **設立**: 2018、MA Trust Charter + NY DFS
- **親**: Fidelity Investments
- **AUM**: 非公表 (年金・財団中心)
- **技術**: Cold storage + offline signing (保守的アプローチ)
- **顧客**: FBTC (Fidelity Wise Origin Bitcoin ETF) 自社受託、年金・財団に強い
- **規制**: MA Trust + NY DFS + SOC 1/2 Type II
- **日本**: 日本拠点未進出 (2026-05 時点)
- **課金**: AUM ベース

#### B3. Anchorage Digital
- **設立**: 2021-01 米国初の **Federal Trust Chartered Crypto Bank** (OCC 認可)
- **AUM**: 非公表 (機関中心)
- **技術**: MPC + HSM ハイブリッド (連邦規制下で唯一)
- **顧客**: 連邦規制対応必須の機関 (米国機関年金・財団・連邦監督対象の金融機関)
- **規制**: **OCC Federal Trust Bank** (50 州 MTL 全免除のスペシャルステータス)
- **日本**: API ベース海外接続のみ、日本実体なし
- **戦略**: 連邦規制 + 米国唯一の暗号銀行という独自ポジション = Circle 2025 OCC Trust Charter 取得の前例

#### B4. BitGo
- **設立**: 2013 (業界最古参)
- **本社**: Palo Alto, CA
- **技術**: Multi-sig + MPC ハイブリッド (BitGo Wallet)
- **顧客**: 多くの CEX 自社カストディ受託、ETF 受託、機関
- **規制**: SD State Trust Charter + multi-state 拡張 + BitGo Trust HK (Custodian Trust)
- **日本**: **三井物産 MDC との提携経由で間接接触**。直接拠点なし
- **戦略**: $1.75B valuation Series C (2023)、IPO 観測あり

### C. Big Bank 系 (G-SIB のデジタル資産参入)

#### C1. BNY Mellon Digital Asset Custody
- **親**: The Bank of New York Mellon Corporation (NYSE: BK) = **世界最大のカストディ銀行** (AUC/A $50T+)
- **デジタル資産 custody**: 2022-10 Crypto Custody Platform 立ち上げ、米国機関向け
- **日本拠点**: [[JapanFG/bny-mellon-japan|BNY メロン信託銀行]] + ザ・バンク・オブ・ニューヨーク・メロン東京支店 + BNY メロン・アセット・マネジメント・ジャパン
- **日本デジタル資産事業**: 国内では未稼働 (米国 BNY Mellon の crypto custody は機関向け Bitcoin / Ether 中心、日本機関への直接提供は限定的)
- **顧客**: 米国年金・財団・SWF + Fireblocks 共同出資 (2021-03)
- **戦略**: 純粋ホールセール外資 + GPIF・大手年金の海外資産カストディというグローバル分業

#### C2. State Street Digital Asset Custody
- **親**: State Street Corporation (NYSE: STT) = **世界 2 位カストディ銀行** (AUC/A 約 49-53 兆ドル)
- **デジタル資産 custody**: 2021-06 State Street Digital 部門設立、機関向け
- **日本拠点**: [[JapanFG/state-street-japan|State Street Japan]] = ステート・ストリート信託銀行 + 東京支店 + SSGA (SPDR ETF 運用元) + Charles River Development
- **日本デジタル資産事業**: 国内未稼働 (米国 State Street の crypto custody は機関向け、日本機関への直接提供は限定的)
- **顧客**: GPIF・大手年金・SPDR 系 ETF 受託
- **戦略**: 純粋ホールセール外資 + master trust ([[JapanFG/master-trust-bank|master-trust-bank]]) が国内信託に特化するのに対し、State Street は GPIF・大手年金の海外資産カストディ

### D. その他 Qualified Custodian + 国内特殊カストディ

#### D1. Standard Custody & Trust Company
- **親**: PolySign / Standard Chartered 連携
- **規制**: NY DFS Trust Charter (2022)
- **技術**: MPC + HSM
- **顧客**: 機関 + ヘッジファンド
- **日本**: 拠点なし

#### D2. Custodiem (旧 FTX Japan、bitFlyer 系)
- **親**: [[exchanges/jp-exchange-bitflyer|bitFlyer]] (2024 取得)
- **規制**: FSA 暗号資産交換業 (旧 FTX Japan ライセンス継承)
- **技術**: 旧 FTX Japan のカストディ基盤 + bitFlyer 統合
- **顧客**: 旧 FTX Japan 顧客 + bitFlyer グループ内
- **戦略**: FTX 破綻後の顧客資産 100% 補填事例として注目 ([[exchanges/ftx-japan-100pct-return-case-study|FTX Japan 100% return ケース]] 参照)

## Big comparison matrix table

| 軸 | A1. Ginco | A2. Komainu | A3. Fireblocks | B1. Coinbase Custody | B2. Fidelity Digital | B3. Anchorage | B4. BitGo | C1. BNY Mellon | C2. State Street | D1. Standard Custody | D2. Custodiem |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **設立** | 2017-12 | 2018 | 2018 | 2018 | 2018 | 2021-01 | 2013 | 1784 (BNY) / 2007 (BNY Mellon) | 1792 | 2022 | 2024 (bitFlyer 取得) |
| **本社** | 東京中央区 | Jersey | NY (R&D Tel Aviv) | NY | Boston, MA | SF, CA | Palo Alto, CA | NY | Boston, MA | NY | 東京 |
| **親会社** | 独立系 (VC バック) | Nomura HD + CoinShares + Ledger + Blockstream | Sequoia / Paradigm / BNY (出資) | Coinbase Global (COIN) | Fidelity Investments | (独立、OCC charter) | (独立、Series C $1.75B) | BNY Mellon Corp (BK) | State Street Corp (STT) | PolySign | bitFlyer Holdings |
| **業界実装モデル** | B2B vendor (国内 VASP インフラ) | 機関向け Qualified Custodian | B2B vendor (グローバル金融機関向け SaaS) | Qualified Custodian (CEX + ETF) | Qualified Custodian (年金・財団) | Qualified Custodian (連邦規制) | Qualified Custodian (CEX 中心) | Big Bank デジタル参入 | Big Bank デジタル参入 | Qualified Custodian | VASP 自己カストディ |
| **技術モデル** | HSM + MPC ハイブリッド (Ginco Enterprise Wallet) | Cold + offline signing + MPC | MPC + Policy Engine | Multi-sig + HSM | Cold storage + offline signing | MPC + HSM (連邦) | Multi-sig + MPC | 米国機関向け platform | 米国機関向け platform | MPC + HSM | bitFlyer 統合 |
| **対応資産数** | 国内最多 (BTC + ETH + 主要 ERC20 + 独自チェーン) | BTC 主軸 + ETH + PoS 系 | 50+ ブロックチェーン | BTC + ETH + 主要 ERC20 + SC | BTC + ETH + 主要 ERC20 | BTC + ETH + 主要 ERC20 + SC | BTC + ETH + 主要 ERC20 + SC | BTC + ETH (限定) | BTC + ETH (限定) | BTC + ETH + ERC20 | bitFlyer 取扱銘柄 |
| **主要顧客セグメント** | 国内 VASP + 国内信託銀行 + 国内証券 | 主権国家 + UAE 政府 + 英国警察 + ETF (Bitcoin ETP) + OKX | グローバル金融機関 2,400+ + Western Union + Mitsui MDC + SMBC | 米現物 BTC ETF (BlackRock IBIT) + 米機関 | FBTC ETF + 米年金・財団 | 米機関 + 連邦監督対象金融 | CEX + ETF + 機関 + 三井物産 MDC | 米年金・財団・SWF | GPIF + 大手年金 + SPDR ETF | 機関 + ヘッジファンド | 旧 FTX Japan 顧客 + bitFlyer グループ |
| **SLA / uptime** | 非公表 (B2B 契約ベース) | 99.95%+ (機関向け公表) | 99.99% (グローバル金融機関 SLA) | 99.95%+ (ETF カストディ SLA) | 99.95%+ | 99.95%+ | 99.95%+ | 銀行 SLA (24/7) | 銀行 SLA (24/7) | 99.95%+ | bitFlyer SLA |
| **保険カバレッジ** | 国内損害保険 + SOC 2 認証 | Lloyd's of London 経由カスタムプログラム | $30M+ (Marsh 仲介) | Lloyd's of London + Aon insurance | Lloyd's of London | $1B (Aon insurance, 業界最大級) | $250M Lloyd's | BNY 銀行保険スキーム | State Street 銀行保険スキーム | Lloyd's | JVCEA 自主規制 + bitFlyer 保険 |
| **規制階層** | FSA 登録なし (B2B vendor) | Jersey JFSC + UK FCA + UAE VARA + Italy OAM | 米信託 (Fireblocks Trust Company 2024-) + MiCA | NY DFS Trust Charter | MA Trust + NY DFS | **OCC Federal Trust Bank** (米国唯一) | SD State Trust + multi-state + HK | NY DFS Trust (BNY Mellon) | MA State Trust + NY DFS (State Street) | NY DFS Trust | FSA 暗号資産交換業 |
| **日本ライセンス** | (B2B 不要) | 未登録 (日本拠点なし) | 未登録 (拠点あり 5 名) | 暗号資産交換業 (Coinbase Japan dormant) | 拠点未進出 | 拠点なし (API のみ) | 三井物産 MDC 経由間接 | [[JapanFG/bny-mellon-japan|BNY メロン信託銀行]] + 東京支店 (デジタル資産事業は国内未稼働) | [[JapanFG/state-street-japan|ステート・ストリート信託銀行]] + 東京支店 (デジタル資産事業は国内未稼働) | 拠点なし | FSA 暗号資産交換業 |
| **課金モデル** | ライセンス + per-tx | 月額 + AUM ベース | Subscription | AUM + per-tx | AUM ベース | AUM + per-tx | AUM + per-tx + 月額 | 銀行カストディ料金体系 | 銀行カストディ料金体系 | AUM + per-tx | bitFlyer 課金 |
| **AUC/AUM (概算)** | 非公表 | 非公表 | $10T+ 累積取引高 (550M ウォレット) | $200B+ | 非公表 | 非公表 | 非公表 | (parent BK = $50T total) | (parent STT = $49-53T total) | 非公表 | bitFlyer 内 |
| **設立国** | 日本 | Jersey (英属領) | 米 (R&D イスラエル) | 米 | 米 | 米 | 米 | 米 | 米 | 米 | 日本 |
| **VC バリュエーション** | (非上場) | Series B 2025-01 リード Blockstream | $8B (2022-01 Series E) | (Coinbase 公開) | (Fidelity 私募) | $3B (Series D 2021) | $1.75B (Series C 2023) | (BNY 公開) | (STT 公開) | 非公表 | (非公開) |
| **代表事例** | みずほ証券 ST 実証 + 三菱 UFJ 信託 SC 開発 + 大和証券 ST | UAE 政府 + 英国警察 + Bitcoin ETP + OKX Connect | BlackRock 元 PM 顧問 + Western Union USDPT + Mitsui MDC | BlackRock IBIT + ARK 21Shares ETF | FBTC ETF | 連邦規制金融機関多数 | ETF 受託 + 三井物産 MDC | 機関 BTC/ETH | 米国機関 | PolySign 投資先 | FTX 破綻後 100% 返金 |
| **2026 戦略** | BTCFi (Babylon Labs) + Canton Network + インド開発 | Komainu CORE (Collateral-as-a-Service) + Propine 統合 | Dynamic 統合 (embedded wallet) + TRES Finance 統合 (会計) + IPO 観測 | 米現物 ETH ETF 拡大 | Fidelity 機関拡大 | 連邦規制下追加サービス | IPO 観測 + multi-state 拡大 | デジタル資産機関拡大 | デジタル資産機関拡大 | 機関拡大 | bitFlyer グループ内 |
| **競合関係** | Fireblocks (国内競合) + Komainu (機関向け補完) | Fireblocks (機関向け競合) + Coinbase (ETF 競合) | Ginco (国内競合) + BitGo (グローバル競合) | Anchorage + BitGo + Fidelity (ETF 競合) | Coinbase + BitGo (ETF 競合) | Coinbase + BNY (連邦競合) | Coinbase + Anchorage | (新規参入) | (新規参入) | BitGo + Anchorage | (国内 VASP のみ) |

## 三層構造で見る市場構造

### 層 1: B2B Infrastructure Vendor (顧客が VASP・銀行・機関)

- **Ginco** = 国内独立系、国内 VASP・信託銀行向け国産インフラ
- **Fireblocks** = 海外発、グローバル 2,400+ 機関向け SaaS
- **Komainu** = Nomura 系、海外機関 + 主権国家向け

特徴: 自社が直接カストディアンではない (顧客が自社で custody 業務を担う)。Subscription + ライセンス課金。VASP / 銀行のセキュリティ基盤として機能。

### 層 2: Qualified Custodian (顧客が ETF / 年金 / 機関)

- **Coinbase Custody** + **Fidelity Digital** + **Anchorage** + **BitGo** + **Komainu** + **Standard Custody**

特徴: 自社が直接 custody = Trust Charter 取得 (NY DFS / OCC / MA / SD)。AUM + per-tx 課金。**米現物 BTC ETF (2024-01 承認) の受託カストディアン市場 を主導**。

### 層 3: Big Bank 系デジタル資産 Custody (G-SIB 級参入)

- **BNY Mellon Digital Asset Custody** + **State Street Digital**

特徴: AUC/A $50T 級の伝統 custody バンク × デジタル資産。年金・SWF・財団の信認 floor を提供。日本では国内デジタル資産業務未稼働だが、機関の海外暗号資産配分時の receiver として機能。

## Boundary cases

### B1. Komainu の「B2B vendor vs Qualified Custodian」境界

- Komainu は cold custody 専業として **直接機関カストディ** (Trust Charter なしの Jersey JFSC + UAE VARA で運営) と **インフラ提供** (Komainu Connect で OKX 等に提供) の両方を行う。
- 一般的な Qualified Custodian (Coinbase Custody / Anchorage / BitGo) が NY DFS Trust 必須なのに対し、Komainu は Jersey ルートで類似機能を提供 → **規制裁定**

### B2. Fireblocks の「インフラ vs Custodian」境界

- Fireblocks は元来 B2B SaaS だが、2024 に Fireblocks Trust Company (米信託会社) を取得 → 直接 custody ビジネスも可能な構造に変化。
- **2026 戦略**: Embedded Wallets (Dynamic 2025-10 買収 $90M) で B2C 接続もサポート、Network for Payments で Western Union 等の決済特化型へ拡張

### B3. Big Bank 系の日本デジタル資産事業の **未稼働問題**

- BNY Mellon は米国で 2022-10 から Crypto Custody Platform 稼働、State Street も 2021-06 から Digital Asset 部門設立。しかし **日本では国内デジタル資産業務未稼働** (2026-05 時点)。
- 理由: 日本 FSA 規制が暗号資産交換業ライセンスを要求 + JVCEA 自主規制 + 信託銀行業務との二重監督の複雑性。Big Bank 系の日本デジタル資産参入は GPIF / 大手年金が暗号資産配分を開始してから本格化見込み。

### B4. Anchorage の Federal Trust Bank の唯一性

- Anchorage Digital は **米国唯一の OCC 認可 Federal Trust Crypto Bank** (2021-01)。連邦規制下で運営される唯一の暗号銀行。
- 一般的な Trust Charter (NY DFS / MA / SD) は州ベースで、連邦監督対象の金融機関 (大手商業銀行・年金) からは serve しづらい構造制約あり。Anchorage はこの空白を独占する独自ポジション。
- **2025 Circle OCC Trust 取得** はこの Anchorage 前例を踏襲 → 連邦監督対象金融機関の SC 利用拡大の前提整備。

### B5. Custodiem の「VASP 自己カストディ vs vendor インフラ」境界

- Custodiem (旧 FTX Japan、bitFlyer が 2024 取得) は **FSA 暗号資産交換業ライセンス保有** で、bitFlyer グループの自社カストディ機能を補強する位置付け。
- 純粋な B2B vendor (Ginco / Fireblocks) や独立 Qualified Custodian (Komainu) とは異なり、特定 VASP グループ内のカストディ機能として運営。
- 旧 FTX Japan の顧客資産 100% 補填事例 (2024) は日本 VASP コールド保管・分別管理の遵守が良好だった証拠。

### B6. 国内 VASP 自社カストディ vs B2B vendor の選択

- 国内 VASP の大半 (bitFlyer / Coincheck / GMO Coin / SBI VC Trade / bitbank 等) は **自社カストディ** を運営 (内製 + 国内 HSM / Ginco インフラ併用)。
- 機関向け (Crypto Garage / Digital Asset Markets / Laser Digital Japan) は外部 vendor (Fireblocks / Ginco / Komainu) との提携が中心。
- 二極化が進む: **リテール VASP = 自社カストディ + Ginco インフラ補完** vs **機関 VASP = vendor インフラ依存**

### B7. 三井物産 MDC × BitGo / Fireblocks の二重提携

- 三井物産は Zipangcoin (金担保 RWA) 発行で **Fireblocks (multi-chain 展開基盤)** + **BitGo (custody 接続)** の二重提携を持つ。
- これは大企業 RWA 案件で「単一 vendor 依存リスク回避」+「異なる技術スタック並行運用」の事例。

### B8. Big Bank 系の日本デジタル資産参入トリガー

- BNY Mellon / State Street が日本デジタル資産 custody を本格化するトリガーは:
  1. **GPIF の暗号資産配分開始** (現状 0%、2027-2028 議論の可能性)
  2. **日本現物 BTC ETF 承認** (2026-05 時点未承認)
  3. **大手生保 / 銀行の暗号資産配分開始** (2026 時点で 第一生命 / 住友生命 が JPYC シリーズ B 出資など接近の兆候)
- これらが揃えば、Big Bank 系の日本拠点で正式デジタル資産事業が立ち上がる見込み (2027-2028)。

### B9. Coinbase Custody vs Coinbase Japan の関係

- Coinbase Custody Trust (NY DFS Trust) は Coinbase Global の子。米現物 BTC ETF (BlackRock IBIT 等) の受託カストディアン。
- Coinbase Japan は 2023 撤退で dormant 状態。ライセンス保持のため将来再参入オプション。
- **Custody 単独事業の日本進出**: 米国本社で十分な ETF 市場アクセスを持つため、custody 単独で日本市場参入する経済的インセンティブが弱い。Coinbase Japan が再開しない限り当面進出なし見込み。

### B10. Komainu の Jersey ルートの規制裁定

- Komainu は Jersey JFSC (英国王室属領) 経由でグローバル機関向け custody を提供。**米国 NY DFS Trust よりライセンス取得・維持コストが低く、機関への提供範囲が広い** という規制裁定。
- 一方、米国機関 (BlackRock 等) は NY DFS Trust ステータスを要求するケースが多く、Komainu の Jersey ルートでは serve しづらい構造制約。
- **2025-01 Blockstream Series B** で BTC-native 機関市場に集中する戦略明確化。Bitcoin-native asset (BRC-20, Ordinals 等) や lightning との接続強化が狙い。

### B11. 国内 VASP DMM Bitcoin 廃業の教訓

- 2024-05 DMM Bitcoin Lazarus ハック (482 億円) で **コールド保管比率徹底 + B2B vendor (Ginco / Fireblocks / Komainu) インフラの重要性** が再認識。
- 国内 VASP の hot wallet 比率を抑えるため、MPC + HSM の導入を加速。
- 結果: B2B vendor の国内シェアが拡大、Ginco の国内 VASP・信託銀行向け契約数が急増。

## 戦略的含意

### 含意 1: 三層構造の固定化

- 層 1 (B2B vendor) = Ginco / Fireblocks / Komainu の三強
- 層 2 (Qualified Custodian) = Coinbase / Fidelity / Anchorage / BitGo + Komainu
- 層 3 (Big Bank) = BNY Mellon / State Street
- 日本市場では層 1 が国内 VASP を支え、層 2 + 層 3 は ETF・年金市場の本格化を待つ構造。

### 含意 2: コールド保管比率 95%+ の徹底

- JVCEA 自主規制 + DMM Bitcoin 廃業教訓で、国内 VASP のコールド保管比率徹底が常態化。
- B2B vendor (Ginco / Fireblocks) の MPC + HSM 導入需要が継続拡大。

### 含意 3: 機関 RWA + ST デジタル証券との接続

- 三井物産 MDC / Progmat ST 発行 / Crypto Garage 機関 OTC 等で、機関 RWA + ST の custody 需要が拡大。
- 信託銀行 (三菱 UFJ 信託 / SMBC 信託 / みずほ信託) との連動で custody vendor (Ginco) の戦略的重要性が増す。

### 含意 4: Big Bank 系の日本デジタル資産参入は GPIF 待ち

- BNY Mellon / State Street の日本デジタル資産事業本格化は **GPIF・大手年金の暗号資産配分** が前提。
- 現状 GPIF は暗号資産配分 0%。2027-2028 議論の可能性。

### 含意 5: Anchorage / Circle の OCC Trust 連邦ルート拡大

- Anchorage Digital が 2021-01 米国唯一の OCC Federal Trust 取得後、Circle が 2025 に追随。
- 連邦監督対象金融機関 (大手商業銀行・年金) の暗号資産 / SC 利用拡大の前提整備が進む。日本にも将来的影響大。

## Related

- [[exchanges/INDEX|exchanges index]]
- [[exchanges/global-institutional-custody-five-pillars|グローバル機関カストディ 5 本柱]]
- [[exchanges/jp-institutional-custody-three-pillars|JP institutional custody 三本柱]]
- [[exchanges/jp-custody-ginco|Ginco 詳細]]
- [[exchanges/jp-custody-komainu|Komainu 詳細]]
- [[exchanges/jp-custody-fireblocks-japan|Fireblocks Japan 詳細]]
- [[exchanges/jp-vasp-cold-storage-segregation-rules|JP VASP cold storage 分別管理ルール]]
- [[exchanges/jp-vasp-security-audit-certification|JP VASP セキュリティ監査・認証]]
- [[JapanFG/state-street-japan|State Street Japan]]
- [[JapanFG/bny-mellon-japan|BNY メロン日本]]
- [[exchanges/cex-matching-engine-wallet-architecture|CEX matching engine / wallet architecture]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制 8 極比較]]
- [[exchanges/global-cex-top10-comparison|グローバル CEX top 10]]
- [[exchanges/jp-exchange-laser-digital-japan|Laser Digital Japan]] (Komainu Board 共有)
- [[exchanges/jp-exchange-crypto-garage|Crypto Garage]] (Nomura 系)
- [[exchanges/jp-exchange-bitflyer|bitFlyer]] (Custodiem 親)
- [[exchanges/ftx-japan-100pct-return-case-study|FTX Japan 100% return ケース]]
- [[exchanges/btc-spot-etf-japan-impact|JP BTC spot ETF 影響]]
- [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus ハック]]
- [[exchanges/jp-vasp-incident-history|jp-vasp-incident-history]]
- [[exchanges/japan-stablecoin-issuer-regulatory-classification-matrix|日本 stablecoin 発行体 規制分類マトリクス]]
- [[exchanges/japan-vasp-business-model-competitive-matrix|日本 VASP ビジネスモデル競合マトリクス]]

## Sources

- Ginco 会社概要: https://www.ginco.co.jp/company/outline
- Komainu About: https://komainu.com/about/
- Fireblocks About: https://www.fireblocks.com/about/
- BitGo: https://www.bitgo.com/
- Anchorage Digital: https://www.anchorage.com/
- Coinbase Custody: https://www.coinbase.com/custody
- BNY Mellon Japan: https://www.bny.com/corporate/jp/ja.html
- State Street Japan: https://www.statestreet.com/jp
- FSA 暗号資産交換業者登録一覧: https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
- JVCEA 会員一覧: https://jvcea.or.jp/member/
