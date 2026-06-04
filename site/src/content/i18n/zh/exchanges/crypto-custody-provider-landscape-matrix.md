---
source: exchanges/crypto-custody-provider-landscape-matrix
source_hash: 3d88eb602fdee7c5
lang: zh
status: machine
fidelity: ok
title: "加密资产托管 提供商 全景 矩阵 — Japan + Global 机构托管 10 社的技术・监管・客户比较"
translated_at: 2026-05-31T03:19:56.426Z
---

# 加密资产托管 提供商 全景 矩阵 — Japan + Global 机构托管 10 社的技术・监管・客户比较

## TL;DR

面向机构的加密资产托管市场沿 **(1) 技术模型 (cold storage / MPC / hybrid) × (2) 牌照层级 (Trust Charter / VASP / vendor only) × (3) 客户细分 (CEX / hedge fund / ETF issuer / SWF / pension)** 三轴分化。本矩阵将日本 3 强 ([[exchanges/jp-custody-ginco|Ginco]] / [[exchanges/jp-custody-komainu|Komainu]] / [[exchanges/jp-custody-fireblocks-japan|Fireblocks Japan]]) + 美系 4 强 (Coinbase Custody / Fidelity Digital / Anchorage / BitGo) + Big Bank 系 2 社 (BNY Mellon Digital Asset / State Street) + 含 Standard Custody / Custodiem 的 10 社按 **技术・监管・SLA・保险・日本牌照・资产覆盖・计费模型** 并排比较。详情以 [[exchanges/jp-institutional-custody-three-pillars|JP institutional custody 三本柱]] / [[exchanges/global-institutional-custody-five-pillars|グローバル機関カストディ 5 本柱]] 为起点。

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. It is the **提供商轴 (vendor-axis)** counterpart to [[exchanges/jp-institutional-custody-three-pillars|JP 国内 3 強]] 与 [[exchanges/global-institutional-custody-five-pillars|グローバル 5 本柱]] 的合成。技术深入参见 [[exchanges/cex-matching-engine-wallet-architecture|CEX matching engine / wallet architecture]] 与 [[exchanges/jp-vasp-cold-storage-segregation-rules|JP VASP cold storage 分別管理]]。监管边界参见 [[exchanges/jp-vasp-security-audit-certification|JP VASP セキュリティ監査・認証]] / [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 8 極比較]]。Big Bank 侧以 [[foreign-financial-institutions/bny-mellon-japan|BNY メロン日本]] / [[foreign-financial-institutions/state-street-japan|State Street Japan]] 为 anchor。

## Why this matrix matters

- 加密资产托管以 **「VASP 自我保管」与「B2B vendor 基础设施」与「Qualified Custodian」三层结构** 运营。VASP 自我保管 (bitFlyer / Coincheck / bitbank 等) 由 JVCEA 自律监管 + 自研实现，B2B vendor (Ginco / Fireblocks / Komainu Connect) 是面向 VASP・银行的基础设施，Qualified Custodian (Coinbase Custody / Anchorage / BitGo / Komainu / Fidelity Digital) 受托 ETF・养老金・SWF。
- **美系 ETF 托管集中**: BlackRock IBIT / Fidelity FBTC 等美国现货 BTC ETF (2024-01 批准) 的受托托管方集中于 Coinbase Custody / Fidelity Digital / BitGo / Anchorage。日本尚未批准现货 BTC ETF (参见 [[exchanges/btc-spot-etf-japan-impact|JP BTC spot ETF 影響]])。
- **2024-05 DMM Bitcoin Lazarus 黑客事件 (482 億円)** 之后，国内 VASP 的 **冷保管比率 95%+ (JVCEA 自律监管)** 的彻底执行再度加强。为抑制热保管比率，B2B vendor 的 MPC + HSM 技术需求扩大。
- **Big Bank 系的进入** (BNY Mellon Digital Asset Custody 2022-, State Street Digital 2021-) 抬高了机构的信任底线，正在为养老金基金・财团・保险公司的加密资产配置整备前提条件。

## Per-custodian sections

### A. 日本 B2B vendor 3 强 (国内 VASP 基础设施供给)

#### A1. Ginco (国内独立系)
- **总部**: 〒104-0032 东京都中央区八丁堀三丁目27番4号 (2017-12-21 设立、资本金 1 億円)
- **代表**: 坂根 遼 (从 2026-04  起，由创始人森川梦佑斗交接)
- **股东**: Global Brain / DBJ Capital / 都Capital / 三菱 UFJ Capital (非上市独立系)
- **技术**: HSM + MPC 混合 = Ginco Enterprise Wallet (国内 B2B 加密资产钱包份额 No.1 自社发表 2021-08)
- **客户**: 国内 FSA 登记 VASP + 证券 (瑞穗证券・大和证券) + 信托银行 (三菱 UFJ 信托 + 三井住友信托 + Trust Base 等)
- **支持资产**: BTC + ETH + ERC20 (最短 2 周追加) + 独自链 (最短 1 个月) — 国内最高水平
- **监管**: VASP 非适用 (B2B 基础设施) → JVCEA 非加盟・无 FSA 登记。SOC 2 Type II + SGS 认证
- **计费**: 许可合约 + per-tx 计费
- **战略**: 国产 HW 钱包 (AndGo) 整合 + ST 基础设施 + Babylon Labs BTCFi (2025-12) + Canton Network 验证者 (2025-12) + 印度开发据点 (2024-05) 多角化

#### A2. Komainu (Jersey 法人、野村 HD 系)
- **总部**: Jersey, Channel Islands (2018 设立)
- **股东**: 野村 HD + CoinShares + Ledger 三方合资 (2018) → Blockstream Series B 领投 2025-01 ($75M、相当于 BTC 116 億円)
- **技术**: Cold storage + offline signing + MPC + HSM = 面向机构・主权国家的 cold custody 专营
- **客户**: UAE 政府 / 英国警察 (查获加密资产保管 2021-01) / 瑞士证券交易所 Bitcoin ETP (2021-01) / OKX (Komainu Connect 2023-06)
- **支持资产**: 以 BTC 为主轴 + ETH + 主要 PoS 系 (custodial staking 2021-)
- **监管**: Jersey JFSC (2019) + UK FCA Crypto (2025) + UAE VARA (2023) + Italy OAM (2025)。**日本 FSA 未登记 / JVCEA 非加盟 / 无日本据点**
- **计费**: 月费 + AUM 基准
- **战略**: Komainu Connect (交易所抵押品联动 2023-) + Komainu CORE (Collateral-as-a-Service 2026-04) + 收购 Propine (2024-10 新加坡) 进行亚洲扩张
- **Board overlap**: Laser Digital ([[exchanges/jp-exchange-laser-digital-japan|Laser Digital Japan]]) 高管 + Blockstream 的双 anchor

#### A3. Fireblocks Japan (美国总部、东京据点)
- **总部**: New York City (R&D Tel Aviv、2018 设立)、东京据点 LinkedIn 确认 5 名
- **股东**: Sequoia / Paradigm / BNY Mellon (2021-03 参与) / Google Ventures = Series E $550M (2022-01、$8B 估值)
- **技术**: MPC + Policy Engine + Treasury Management (Fireblocks Network) — 全球 2,400+ 机构、$10T+ 累计交易量
- **客户**: 以全球金融机构为中心 + Western Union (USDPT) + 欧洲银行 12 行财团 Qivalis (EUR SC) + 三井物产 MDC (Zipangcoin) + SMBC × Ava Labs × TIS SC (2025-04) + Minna 银行 + CoinTrade
- **支持资产**: 50+ 区块链 (定期扩展)、SC (USDC/USDT/EPI) + RWA + NFT
- **监管**: Fireblocks Trust Company (美国信托、2024-) + MiCA 对应。**无日本 FSA 登记** (因属基础设施 SaaS 而不需要)。SOC 2 Type II + ISO 27001
- **计费**: Subscription
- **战略**: 日本据点扩张中 (2026-05 CoinPost CEO 采访报道)、有 IPO 观测 (2025-11 Bloomberg)

### B. 米系 4 强 (Trust Charter Qualified Custodian)

#### B1. Coinbase Custody Trust
- **设立**: 2018、NY DFS Trust Charter
- **母公司**: Coinbase Global (NASDAQ:COIN)
- **AUM**: $200B+ (推定)
- **技术**: Multi-sig + HSM (自研混合)
- **客户**: BlackRock IBIT 等美国现货 BTC ETF 受托众多、对冲基金、机构
- **监管**: NY DFS Trust Charter (2018) + SOC 1/2 Type II + Lloyd's of London insurance
- **日本**: 2023 Coinbase Japan 撤退 (保留牌照)、无 custody 单独事业的日本进入
- **计费**: AUM 基准 + per-tx

#### B2. Fidelity Digital Assets
- **设立**: 2018、MA Trust Charter + NY DFS
- **母公司**: Fidelity Investments
- **AUM**: 未公开 (以养老金・财团为中心)
- **技术**: Cold storage + offline signing (保守方法)
- **客户**: FBTC (Fidelity Wise Origin Bitcoin ETF) 自社受托、在养老金・财团强势
- **监管**: MA Trust + NY DFS + SOC 1/2 Type II
- **日本**: 未进入日本据点 (截至 2026-05 )
- **计费**: AUM 基准

#### B3. Anchorage Digital
- **设立**: 2021-01 美国首个 **Federal Trust Chartered Crypto Bank** (OCC 认可)
- **AUM**: 未公开 (以机构为中心)
- **技术**: MPC + HSM 混合 (联邦监管下唯一)
- **客户**: 必须符合联邦监管的机构 (美国机构养老金・财团・受联邦监督的金融机构)
- **监管**: **OCC Federal Trust Bank** (50 州 MTL 全免除的特殊地位)
- **日本**: 仅基于 API 的海外接入、无日本实体
- **战略**: 联邦监管 + 美国唯一的加密银行这一独特定位 = Circle 2025 取得 OCC Trust Charter 的先例

#### B4. BitGo
- **设立**: 2013 (业界最资深)
- **总部**: Palo Alto, CA
- **技术**: Multi-sig + MPC 混合 (BitGo Wallet)
- **客户**: 众多 CEX 自社托管受托、ETF 受托、机构
- **监管**: SD State Trust Charter + multi-state 扩展 + BitGo Trust HK (Custodian Trust)
- **日本**: **经由与三井物产 MDC 的合作间接接触**。无直接据点
- **战略**: $1.75B 估值 Series C (2023)、有 IPO 观测

### C. Big Bank 系 (G-SIB 的数字资产进入)

#### C1. BNY Mellon Digital Asset Custody
- **母公司**: The Bank of New York Mellon Corporation (NYSE: BK) = **全球最大的托管银行** (AUC/A $50T+)
- **数字资产 custody**: 2022-10 启动 Crypto Custody Platform、面向美国机构
- **日本据点**: [[foreign-financial-institutions/bny-mellon-japan|BNY メロン信託銀行]] + 纽约梅隆银行东京分行 + BNY 梅隆资产管理日本
- **日本数字资产事业**: 国内未运营 (美国 BNY Mellon 的 crypto custody 以面向机构的 Bitcoin / Ether 为中心，对日本机构的直接提供有限)
- **客户**: 美国养老金・财团・SWF + Fireblocks 共同出资 (2021-03)
- **战略**: 纯批发外资 + GPIF・大型养老金的海外资产托管这一全球分工

#### C2. State Street Digital Asset Custody
- **母公司**: State Street Corporation (NYSE: STT) = **全球第 2 位 托管银行** (AUC/A 约 49-53 兆 美元)
- **数字资产 custody**: 2021-06 设立 State Street Digital 部门、面向机构
- **日本据点**: [[foreign-financial-institutions/state-street-japan|State Street Japan]] = 道富信托银行 + 东京分行 + SSGA (SPDR ETF 运营方) + Charles River Development
- **日本数字资产事业**: 国内未运营 (美国 State Street 的 crypto custody 面向机构，对日本机构的直接提供有限)
- **客户**: GPIF・大型养老金・SPDR 系 ETF 受托
- **战略**: 纯批发外资 + 相对于 master trust ([[trust-banks/master-trust-bank|master-trust-bank]]) 专注国内信托，State Street 则承担 GPIF・大型养老金的海外资产托管

### D. 其他 Qualified Custodian + 国内特殊托管

#### D1. Standard Custody & Trust Company
- **母公司**: PolySign / Standard Chartered 联动
- **监管**: NY DFS Trust Charter (2022)
- **技术**: MPC + HSM
- **客户**: 机构 + 对冲基金
- **日本**: 无据点

#### D2. Custodiem (旧 FTX Japan、bitFlyer 系)
- **母公司**: [[exchanges/jp-exchange-bitflyer|bitFlyer]] (2024 取得)
- **监管**: FSA 加密资产交换业 (继承旧 FTX Japan 牌照)
- **技术**: 旧 FTX Japan 的托管基础设施 + bitFlyer 整合
- **客户**: 旧 FTX Japan 客户 + bitFlyer 集团内
- **战略**: 作为 FTX 破产后客户资产 100% 补偿案例受到关注 (参见 [[exchanges/ftx-japan-100pct-return-case-study|FTX Japan 100% return ケース]])

## Big comparison matrix table

| 轴 | A1. Ginco | A2. Komainu | A3. Fireblocks | B1. Coinbase Custody | B2. Fidelity Digital | B3. Anchorage | B4. BitGo | C1. BNY Mellon | C2. State Street | D1. Standard Custody | D2. Custodiem |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **设立** | 2017-12 | 2018 | 2018 | 2018 | 2018 | 2021-01 | 2013 | 1784 (BNY) / 2007 (BNY Mellon) | 1792 | 2022 | 2024 (bitFlyer 取得) |
| **总部** | 东京中央区 | Jersey | NY (R&D Tel Aviv) | NY | Boston, MA | SF, CA | Palo Alto, CA | NY | Boston, MA | NY | 东京 |
| **母公司** | 独立系 (VC 支持) | Nomura HD + CoinShares + Ledger + Blockstream | Sequoia / Paradigm / BNY (出资) | Coinbase Global (COIN) | Fidelity Investments | (独立、OCC charter) | (独立、Series C $1.75B) | BNY Mellon Corp (BK) | State Street Corp (STT) | PolySign | bitFlyer Holdings |
| **业界实现模型** | B2B vendor (国内 VASP 基础设施) | 面向机构的 Qualified Custodian | B2B vendor (面向全球金融机构的 SaaS) | Qualified Custodian (CEX + ETF) | Qualified Custodian (养老金・财团) | Qualified Custodian (联邦监管) | Qualified Custodian (以 CEX 为中心) | Big Bank 数字进入 | Big Bank 数字进入 | Qualified Custodian | VASP 自我托管 |
| **技术模型** | HSM + MPC 混合 (Ginco Enterprise Wallet) | Cold + offline signing + MPC | MPC + Policy Engine | Multi-sig + HSM | Cold storage + offline signing | MPC + HSM (联邦) | Multi-sig + MPC | 面向美国机构 platform | 面向美国机构 platform | MPC + HSM | bitFlyer 整合 |
| **支持资产数** | 国内最多 (BTC + ETH + 主要 ERC20 + 独自链) | 以 BTC 为主轴 + ETH + PoS 系 | 50+ 区块链 | BTC + ETH + 主要 ERC20 + SC | BTC + ETH + 主要 ERC20 | BTC + ETH + 主要 ERC20 + SC | BTC + ETH + 主要 ERC20 + SC | BTC + ETH (有限) | BTC + ETH (有限) | BTC + ETH + ERC20 | bitFlyer 经办币种 |
| **主要客户细分** | 国内 VASP + 国内信托银行 + 国内证券 | 主权国家 + UAE 政府 + 英国警察 + ETF (Bitcoin ETP) + OKX | 全球金融机构 2,400+ + Western Union + Mitsui MDC + SMBC | 美国现货 BTC ETF (BlackRock IBIT) + 美国机构 | FBTC ETF + 美国养老金・财团 | 美国机构 + 受联邦监督的金融 | CEX + ETF + 机构 + 三井物产 MDC | 美国养老金・财团・SWF | GPIF + 大型养老金 + SPDR ETF | 机构 + 对冲基金 | 旧 FTX Japan 客户 + bitFlyer 集团 |
| **SLA / uptime** | 未公开 (B2B 合约基准) | 99.95%+ (面向机构公开) | 99.99% (全球金融机构 SLA) | 99.95%+ (ETF 托管 SLA) | 99.95%+ | 99.95%+ | 99.95%+ | 银行 SLA (24/7) | 银行 SLA (24/7) | 99.95%+ | bitFlyer SLA |
| **保险覆盖** | 国内损害保险 + SOC 2 认证 | 经由 Lloyd's of London 的定制方案 | $30M+ (Marsh 中介) | Lloyd's of London + Aon insurance | Lloyd's of London | $1B (Aon insurance, 业界最大级) | $250M Lloyd's | BNY 银行保险方案 | State Street 银行保险方案 | Lloyd's | JVCEA 自律监管 + bitFlyer 保险 |
| **监管层级** | 无 FSA 登记 (B2B vendor) | Jersey JFSC + UK FCA + UAE VARA + Italy OAM | 美国信托 (Fireblocks Trust Company 2024-) + MiCA | NY DFS Trust Charter | MA Trust + NY DFS | **OCC Federal Trust Bank** (美国唯一) | SD State Trust + multi-state + HK | NY DFS Trust (BNY Mellon) | MA State Trust + NY DFS (State Street) | NY DFS Trust | FSA 加密资产交换业 |
| **日本牌照** | (B2B 不需要) | 未登记 (无日本据点) | 未登记 (有据点 5 名) | 加密资产交换业 (Coinbase Japan dormant) | 未进入据点 | 无据点 (仅 API) | 经由三井物产 MDC 间接 | [[foreign-financial-institutions/bny-mellon-japan|BNY メロン信託銀行]] + 东京分行 (数字资产事业国内未运营) | [[foreign-financial-institutions/state-street-japan|ステート・ストリート信託銀行]] + 东京分行 (数字资产事业国内未运营) | 无据点 | FSA 加密资产交换业 |
| **计费模型** | 许可 + per-tx | 月费 + AUM 基准 | Subscription | AUM + per-tx | AUM 基准 | AUM + per-tx | AUM + per-tx + 月费 | 银行托管收费体系 | 银行托管收费体系 | AUM + per-tx | bitFlyer 计费 |
| **AUC/AUM (概算)** | 未公开 | 未公开 | $10T+ 累计交易量 (550M 钱包) | $200B+ | 未公开 | 未公开 | 未公开 | (parent BK = $50T total) | (parent STT = $49-53T total) | 未公开 | bitFlyer 内 |
| **设立国** | 日本 | Jersey (英属领) | 美国 (R&D 以色列) | 美国 | 美国 | 美国 | 美国 | 美国 | 美国 | 美国 | 日本 |
| **VC 估值** | (非上市) | Series B 2025-01 领投 Blockstream | $8B (2022-01 Series E) | (Coinbase 公开) | (Fidelity 私募) | $3B (Series D 2021) | $1.75B (Series C 2023) | (BNY 公开) | (STT 公开) | 未公开 | (非公开) |
| **代表案例** | 瑞穗证券 ST 实证 + 三菱 UFJ 信托 SC 开发 + 大和证券 ST | UAE 政府 + 英国警察 + Bitcoin ETP + OKX Connect | BlackRock 前 PM 顾问 + Western Union USDPT + Mitsui MDC | BlackRock IBIT + ARK 21Shares ETF | FBTC ETF | 受联邦监管的金融机构众多 | ETF 受托 + 三井物产 MDC | 机构 BTC/ETH | 美国机构 | PolySign 投资标的 | FTX 破产后 100% 退款 |
| **2026 战略** | BTCFi (Babylon Labs) + Canton Network + 印度开发 | Komainu CORE (Collateral-as-a-Service) + Propine 整合 | Dynamic 整合 (embedded wallet) + TRES Finance 整合 (会计) + IPO 观测 | 美国现货 ETH ETF 扩张 | Fidelity 机构扩张 | 联邦监管下追加服务 | IPO 观测 + multi-state 扩张 | 数字资产机构扩张 | 数字资产机构扩张 | 机构扩张 | bitFlyer 集团内 |
| **竞争关系** | Fireblocks (国内竞争) + Komainu (面向机构互补) | Fireblocks (面向机构竞争) + Coinbase (ETF 竞争) | Ginco (国内竞争) + BitGo (全球竞争) | Anchorage + BitGo + Fidelity (ETF 竞争) | Coinbase + BitGo (ETF 竞争) | Coinbase + BNY (联邦竞争) | Coinbase + Anchorage | (新进入) | (新进入) | BitGo + Anchorage | (仅国内 VASP) |

## 以三层结构看市场结构

### 层 1: B2B Infrastructure Vendor (客户为 VASP・银行・机构)

- **Ginco** = 国内独立系，面向国内 VASP・信托银行的国产基础设施
- **Fireblocks** = 海外发，面向全球 2,400+ 机构的 SaaS
- **Komainu** = Nomura 系，面向海外机构 + 主权国家

特征: 自身不是直接托管方 (客户自行承担 custody 业务)。Subscription + 许可计费。作为 VASP / 银行的安全基础设施运作。

### 层 2: Qualified Custodian (客户为 ETF / 养老金 / 机构)

- **Coinbase Custody** + **Fidelity Digital** + **Anchorage** + **BitGo** + **Komainu** + **Standard Custody**

特征: 自身直接 custody = 取得 Trust Charter (NY DFS / OCC / MA / SD)。AUM + per-tx 计费。**主导美国现货 BTC ETF (2024-01 批准) 的受托托管方市场**。

### 层 3: Big Bank 系数字资产 Custody (G-SIB 级进入)

- **BNY Mellon Digital Asset Custody** + **State Street Digital**

特征: AUC/A $50T 级的传统 custody 银行 × 数字资产。为养老金・SWF・财团提供信任底线。在日本国内数字资产业务未运营，但作为机构海外加密资产配置时的 receiver 而运作。

## Boundary cases

### B1. Komainu 的「B2B vendor vs Qualified Custodian」边界

- Komainu 作为 cold custody 专营，既进行 **直接机构托管** (无 Trust Charter 的 Jersey JFSC + UAE VARA 运营)，也进行 **基础设施提供** (经由 Komainu Connect 向 OKX 等提供)。
- 相对于一般 Qualified Custodian (Coinbase Custody / Anchorage / BitGo) 必须取得 NY DFS Trust，Komainu 经 Jersey 路径提供类似功能 → **监管套利**

### B2. Fireblocks 的「基础设施 vs Custodian」边界

- Fireblocks 原本是 B2B SaaS，但于 2024 取得 Fireblocks Trust Company (美国信托公司) → 变化为也能进行直接 custody 业务的结构。
- **2026 战略**: 以 Embedded Wallets (收购 Dynamic 2025-10  $90M) 也支持 B2C 接入，以 Network for Payments 扩展至 Western Union 等结算专门型

### B3. Big Bank 系的日本数字资产事业的 **未运营问题**

- BNY Mellon 在美国从 2022-10 起运营 Crypto Custody Platform，State Street 也从 2021-06 起设立 Digital Asset 部门。然而 **在日本国内数字资产业务未运营** (截至 2026-05 )。
- 原因: 日本 FSA 监管要求加密资产交换业牌照 + JVCEA 自律监管 + 与信托银行业务双重监督的复杂性。Big Bank 系的日本数字资产进入预计将在 GPIF / 大型养老金开始加密资产配置后才正式化。

### B4. Anchorage 的 Federal Trust Bank 的唯一性

- Anchorage Digital 是 **美国唯一获 OCC 认可的 Federal Trust Crypto Bank** (2021-01)。在联邦监管下运营的唯一的加密银行。
- 一般的 Trust Charter (NY DFS / MA / SD) 是基于州的，对受联邦监督的金融机构 (大型商业银行・养老金) 存在难以 serve 的结构性制约。Anchorage 占据这一空白的独特定位。
- **2025 Circle 取得 OCC Trust** 沿袭了这一 Anchorage 先例 → 为受联邦监督的金融机构扩大 SC 使用整备前提。

### B5. Custodiem 的「VASP 自我托管 vs vendor 基础设施」边界

- Custodiem (旧 FTX Japan、bitFlyer 于 2024 取得) 以 **持有 FSA 加密资产交换业牌照**，定位为强化 bitFlyer 集团自社托管功能。
- 与纯粹的 B2B vendor (Ginco / Fireblocks) 或独立 Qualified Custodian (Komainu) 不同，作为特定 VASP 集团内的托管功能运营。
- 旧 FTX Japan 的客户资产 100% 补偿案例 (2024) 是日本 VASP 冷保管・分别管理遵守良好的证据。

### B6. 国内 VASP 自社托管 vs B2B vendor 的选择

- 国内 VASP 的大半 (bitFlyer / Coincheck / GMO Coin / SBI VC Trade / bitbank 等) 运营 **自社托管** (自研 + 国内 HSM / Ginco 基础设施并用)。
- 面向机构 (Crypto Garage / Digital Asset Markets / Laser Digital Japan) 以与外部 vendor (Fireblocks / Ginco / Komainu) 的合作为中心。
- 两极化推进: **零售 VASP = 自社托管 + Ginco 基础设施补完** vs **机构 VASP = vendor 基础设施依赖**

### B7. 三井物产 MDC × BitGo / Fireblocks 的双重合作

- 三井物产在 Zipangcoin (黄金担保 RWA) 发行中拥有 **Fireblocks (multi-chain 展开基础)** + **BitGo (custody 接入)** 的双重合作。
- 这是大企业 RWA 项目中「规避单一 vendor 依赖风险」+「并行运营不同技术栈」的案例。

### B8. Big Bank 系的日本数字资产进入触发器

- BNY Mellon / State Street 将日本数字资产 custody 正式化的触发器是:
  1. **GPIF 的加密资产配置开始** (现状 0%、2027-2028 讨论的可能性)
  2. **日本现货 BTC ETF 批准** (截至 2026-05 未批准)
  3. **大型寿险 / 银行的加密资产配置开始** (截至 2026 ，第一生命 / 住友生命 有 JPYC 系列 B 出资等接近迹象)
- 一旦这些齐备，预计 Big Bank 系将在日本据点启动正式数字资产事业 (2027-2028)。

### B9. Coinbase Custody vs Coinbase Japan 的关系

- Coinbase Custody Trust (NY DFS Trust) 是 Coinbase Global 的子公司。是美国现货 BTC ETF (BlackRock IBIT 等) 的受托托管方。
- Coinbase Japan 因 2023 撤退处于 dormant 状态。为保留牌照保留将来再进入选项。
- **Custody 单独事业的日本进入**: 因美国总部已拥有充分的 ETF 市场接入，仅凭 custody 单独进入日本市场的经济激励较弱。除非 Coinbase Japan 重启，否则预计当前不会进入。

### B10. Komainu 的 Jersey 路径的监管套利

- Komainu 经由 Jersey JFSC (英国王室属领) 向全球机构提供 custody。**比美国 NY DFS Trust 的牌照取得・维持成本更低，对机构的提供范围更广** 的监管套利。
- 另一方面，美国机构 (BlackRock 等) 要求 NY DFS Trust 地位的情况较多，Komainu 的 Jersey 路径存在难以 serve 的结构性制约。
- 以 **2025-01 Blockstream Series B** 明确了专注 BTC-native 机构市场的战略。意在强化与 Bitcoin-native asset (BRC-20, Ordinals 等) 或 lightning 的接入。

### B11. 国内 VASP DMM Bitcoin 停业的教训

- 在 2024-05 DMM Bitcoin Lazarus 黑客事件 (482 億円) 中，**冷保管比率彻底执行 + B2B vendor (Ginco / Fireblocks / Komainu) 基础设施的重要性** 被再度认识。
- 为抑制国内 VASP 的热钱包比率，加速引入 MPC + HSM。
- 结果: B2B vendor 的国内份额扩大，Ginco 面向国内 VASP・信托银行的合约数激增。

## 战略性含义

### 含义 1: 三层结构的固定化

- 层 1 (B2B vendor) = Ginco / Fireblocks / Komainu 三强
- 层 2 (Qualified Custodian) = Coinbase / Fidelity / Anchorage / BitGo + Komainu
- 层 3 (Big Bank) = BNY Mellon / State Street
- 在日本市场，层 1 支撑国内 VASP，层 2 + 层 3 则等待 ETF・养老金市场正式化的结构。

### 含义 2: 冷保管比率 95%+ 的彻底执行

- 因 JVCEA 自律监管 + DMM Bitcoin 停业教训，国内 VASP 的冷保管比率彻底执行常态化。
- B2B vendor (Ginco / Fireblocks) 的 MPC + HSM 引入需求持续扩大。

### 含义 3: 与机构 RWA + ST 数字证券的接入

- 在三井物产 MDC / Progmat ST 发行 / Crypto Garage 机构 OTC 等领域，机构 RWA + ST 的 custody 需求扩大。
- 通过与信托银行 (三菱 UFJ 信托 / SMBC 信托 / 瑞穗信托) 联动，custody vendor (Ginco) 的战略重要性提升。

### 含义 4: Big Bank 系的日本数字资产进入有待 GPIF

- BNY Mellon / State Street 的日本数字资产事业正式化以 **GPIF・大型养老金的加密资产配置** 为前提。
- 现状 GPIF 加密资产配置 0%。2027-2028 讨论的可能性。

### 含义 5: Anchorage / Circle 的 OCC Trust 联邦路径扩张

- Anchorage Digital 于 2021-01 取得美国唯一的 OCC Federal Trust 后，Circle 于 2025 跟进。
- 为受联邦监督的金融机构 (大型商业银行・养老金) 扩大加密资产 / SC 使用整备前提的进程推进。对日本将来影响巨大。

## Related

- [[exchanges/INDEX|exchanges index]]
- [[exchanges/global-institutional-custody-five-pillars|グローバル機関カストディ 5 本柱]]
- [[exchanges/jp-institutional-custody-three-pillars|JP institutional custody 三本柱]]
- [[exchanges/jp-custody-ginco|Ginco 詳細]]
- [[exchanges/jp-custody-komainu|Komainu 詳細]]
- [[exchanges/jp-custody-fireblocks-japan|Fireblocks Japan 詳細]]
- [[exchanges/jp-vasp-cold-storage-segregation-rules|JP VASP cold storage 分別管理ルール]]
- [[exchanges/jp-vasp-security-audit-certification|JP VASP セキュリティ監査・認証]]
- [[foreign-financial-institutions/state-street-japan|State Street Japan]]
- [[foreign-financial-institutions/bny-mellon-japan|BNY メロン日本]]
- [[exchanges/cex-matching-engine-wallet-architecture|CEX matching engine / wallet architecture]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制 8 極比較]]
- [[exchanges/global-cex-top10-comparison|グローバル CEX top 10]]
- [[exchanges/jp-exchange-laser-digital-japan|Laser Digital Japan]] (Komainu Board 共享)
- [[exchanges/jp-exchange-crypto-garage|Crypto Garage]] (Nomura 系)
- [[exchanges/jp-exchange-bitflyer|bitFlyer]] (Custodiem 母公司)
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
