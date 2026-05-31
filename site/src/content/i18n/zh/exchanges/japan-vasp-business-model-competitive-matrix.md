---
source: exchanges/japan-vasp-business-model-competitive-matrix
source_hash: a51409fb3b7c29e1
lang: zh
status: machine
fidelity: ok
title: "日本 VASP 商业模式竞争矩阵 — 39 社 的业务分部・收益结构・差异化轴比较"
translated_at: 2026-05-31T03:19:56.397Z
---

# 日本 VASP 商业模式竞争矩阵 — 39 社 的业务分部・收益结构・差异化轴比较

## TL;DR

日本 FSA 登记的加密资产交换业者（VASP）截至 2026-05  时点约 27-39 社 家（JVCEA 会员区分 + 含电子结算手段等交易业的累计数）。各社在 **(1) 现货贩卖所 / (2) 现货交易所 / (3) 保证金 / 杠杆 / (4) 加密资产衍生品（金商法 1  种）/ (5) 托管 / (6) 币种上币特化 / (7) 质押・借贷 / (8) IEO / (9) 机构向 OTC / (10) 零售贩卖所** 这 10  个商业模式轴上占据不同位置。**贩卖所价差** 收益模式是国内市场的主轴，与此同时海外系日本法人（Binance / OKJ / OSL 等）以 **交易所板厚** 诉求，Crypto Garage / Digital Asset Markets 等以 **机构向 OTC + RWA** 差异化。本矩阵以 [[exchanges/jp-vasp-parent-company-map|親会社・株主構造マップ]] 与 [[exchanges/jp-crypto-exchange-overview|jp-crypto-exchange-overview]] 为出发点，将 39 社 以 10  轴并排比较。

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. It is the **事業モデル軸 (business-model-axis)** counterpart to [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 比較]] (規模軸) / [[exchanges/jp-vasp-parent-company-map|親会社マップ]] (資本系列軸) / [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制 8 極比較]] (規制軸). Read it alongside [[exchanges/cex-matching-engine-wallet-architecture|CEX matching engine / wallet architecture]] for the technical layer and [[exchanges/cex-native-token-strategy-comparison|CEX native token 戦略比較]] for the tokenomics dimension. Listing 自主規制 detail in [[exchanges/jvcea-whitelist-token-listing|JVCEA whitelist token listing]] and incident history in [[exchanges/jp-vasp-incident-history|jp-vasp-incident-history]].

## Why this matrix matters

- 日本 VASP 市场 **收益・成交量在 30 社 规模上大幅偏斜**（bitFlyer / Coincheck / GMO Coin / SBI VC Trade / bitbank 的 top 5  推定占账户数 70%+ 份额）。其余 25-30 社 以 **特定分部深耕**（机构 OTC / IEO / RWA / 衍生品专营 / 海外系流动性网关）求存。
- **收益模式的差异大幅左右营业利润率**：
  - 贩卖所价差（国内主流）→ 营业利润率 30-50%
  - 交易所板厚（海外流动性桥）→ 营业利润率 5-15%
  - 衍生品（金商法 1  种）→ 营业利润率 20-40%
  - 机构 OTC / RWA → 营业利润率 不稳定（依赖大额交易）
- **JVCEA 币种审查** 收紧币种数，故海外系日本法人（Binance / OKJ / OSL / Bybit Japan 筹划中）**结构上无法将全球母公司的币种阵容带入日本市场**。这成了"抑制海外大手进入日本市场动机的监管 moat"。
- 两大新兴分部：
  - **电子结算手段等交易业 (ECISP)** = SBI VC Trade 第00001号 起开始经办 USDC（2025-03），他社跟进可期
  - **IEO** = Coincheck IEO 为国内首次导入，其后 GMO Coin / bitbank 跟进

## Per-operator sections

### A. 独立系老牌 + bitFlyer Holdings 系（现货 + 衍生品主轴）

- **[[exchanges/jp-exchange-bitflyer|bitFlyer]]**（关东财务局 第00003号，JVCEA #1002）
  - **模式**：现货贩卖所 + 交易所（Lightning Spot）+ 衍生品（Lightning FX）+ 信用卡（bitFlyer 信用卡，アプラス 发行）
  - **收益轴**：BTC 成交量国内首位延续 + 衍生品手续费 + 来自アプラス的 bitFlyer 信用卡
  - **2025-12  期决算**：营收 135 億円，营业利润 42 億円
  - **差异化**：Lightning FX 衍生品的板厚 + 多法域展开（美国子 bitFlyer USA、欧洲子 bitFlyer Europe SAS）
  - **2024  动向**：[[exchanges/jp-exchange-custodiem|Custodiem]]（旧 FTX Japan）于 2024  取得 → 强化衍生品
- **[[exchanges/jp-exchange-bitbank|bitbank]]**（FSA 登记，独立系）
  - **模式**：现货交易所（板交易特化）+ 质押 + IEO
  - **收益轴**：交易手续费（Maker rebate model）
  - **差异化**：国内现货板成交量 No.2  级，贯彻独立的非上市私人公司
  - **战略**：IEO 早期进入 + 以零售交易所板厚一决高下
- **[[exchanges/jp-exchange-btcbox|BTCBOX]]**（独立系老牌）
  - **模式**：现货交易所（以 BTC 为中心）+ 中国系流动性
  - **差异化**：对中国系用户的英语・中文支持

### B. 金融集团系（现货 + 衍生品 + 质押 全方位）

- **[[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]**（关东财务局 第00011号，JVCEA #1011）
  - **模式**：现货贩卖所 + 衍生品（3247 号，金商法 1  种）+ ECISP USDC（国内 ECISP 第00001号）+ 质押 + USDC 借贷（2026-03  国内首次）
  - **收益轴**：贩卖所价差 + 衍生品手续费 + USDC 借贷利率
  - **差异化**：**日本唯一同时持有 3  种牌照**（加密资产交换业 + 金商法 1  种 + ECISP）。以 SBI Circle Holdings 50/50  JV（2025-08）独家分销国内 USDC
  - **战略**：成为 USD-JPY SC 跨境合规通道的造王者（参见 [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環]]）
- **[[exchanges/jp-exchange-gmo-coin|GMO Coin]]**（关东财务局 第00006号，JVCEA #1006）
  - **模式**：现货贩卖所 + 交易所 + 杠杆交易 + 质押 + 加密资产借贷
  - **收益轴**：贩卖所价差（国内最大级收益引擎）+ 杠杆手续费
  - **差异化**：作为 GMO 互联网集团（9449）基础设施业务的延伸，技术栈自主开发
- **[[exchanges/jp-exchange-coincheck|Coincheck]]**（关东财务局 第00014号，JVCEA #1017，Monex 系）
  - **模式**：现货贩卖所 + 交易所 + IEO 国内首次导入 + NFT 市场（Coincheck NFT）
  - **收益轴**：贩卖所价差 + IEO 上币手续费 + NFT 交易手续费
  - **差异化**：经由 Coincheck Group N.V.（纳斯达克上市 CNCK/CNCKW）接入全球资本市场
  - **战略**：经由 NFT × IEO 获取 Z 世代
- **[[exchanges/jp-exchange-rakuten-wallet|Rakuten Wallet]]**（乐天集团 4755  系）
  - **模式**：现货贩卖所 + 乐天积分联动（乐天经济圈桥）
  - **差异化**：以乐天 ID + 乐天银行 + 乐天证券联动构建生活全方位桥
- **[[exchanges/jp-exchange-mercoin|Mercoin]]**（Mercari 4385  系）
  - **模式**：现货贩卖所 + 메르페이（Merpay）联动（二手交易销售额桥）
  - **差异化**：将 Mercari 销售额直连加密资产购买的漏斗

### C. 海外系日本法人（全球流动性桥）

- **[[exchanges/jp-exchange-binance-japan|Binance Japan]]**（JVCEA Type 1，PayPay 40% 出资）
  - **模式**：现货贩卖所 + 交易所 + 质押（限国内币种）
  - **差异化**：桥接全球 Binance 母公司的流动性，但受 JVCEA 币种列表制约
  - **战略**：以 2022  樱花交易所收购取得登记，以 PayPay（Z HD 系）出资联动国内结算
- **[[exchanges/jp-exchange-coinbase-japan|Coinbase Japan]]**（有关东财务局登记，2023  撤退・保留牌照）
  - **模式**：2023  撤退致 dormant 状态
  - **战略**：以保留牌照留存将来再进入选项（现状休止）
- **[[exchanges/jp-exchange-okcoin-japan|OKCoin Japan (OKJ)]]**（OKX 系）
  - **模式**：现货贩卖所（无衍生品）
  - **差异化**：作为另一法人运营 Type 1  spot（海外 OKX 的衍生品国内未提供）
- **[[exchanges/jp-exchange-osl-japan|OSL Japan]]**（HKEX:863  系，旧 CoinBest）
  - **模式**：现货贩卖所 + 交易所
  - **差异化**：连接持有 HK SFC 牌照的全球母公司的机构流动性
- **[[exchanges/jp-exchange-gate-japan|Gate Japan]]**（Gate.io 系，旧 LastRoots）
  - **模式**：现货贩卖所
- **[[exchanges/jp-exchange-tokyo-hash|Tokyo Hash]]**（HashKey Group 系）
  - **模式**：以机构向 OTC 为中心
- **[[exchanges/jp-exchange-trek-labs-japan|Trek Labs Japan]]**（Backpack Exchange 系，Type 2  衍生品）
- **[[exchanges/jp-exchange-saxo-bank-japan|Saxo Bank Japan]]**（Saxo Bank A/S 系，Type 2  衍生品）

### D. 机构向・特殊分部（RWA / OTC / 衍生品专营）

- **[[exchanges/jp-exchange-crypto-garage|Crypto Garage]]**（DG 控股 × 东京短资 × 野村 HD 出资）
  - **模式**：机构向 OTC + Liquid Network 相关业务 + ST 相关
  - **差异化**：向大手金融机构（证券公司・信托银行）提供基础设施
- **[[exchanges/jp-exchange-digital-asset-markets|Digital Asset Markets]]**（JPX + 三井物产 + Monex 联盟）
  - **模式**：面向机构投资者・PTS 的交易所
  - **差异化**：以 JPX 骨干连接证券公司
- **[[exchanges/jp-exchange-laser-digital-japan|Laser Digital Japan]]**（野村 HD 瑞士子）
  - **模式**：机构向 OTC + 加密资产衍生品（JVCEA Type 2）
  - **差异化**：野村集团的 institutional crypto fund + BTC 基金（2026-01  设定）
  - **关联**：与 [[exchanges/jp-custody-komainu|Komainu]] 为野村系，共享 Board
- **[[exchanges/jp-exchange-dmm-bitcoin|DMM Bitcoin]]**（DMM 系，2024-05  Lazarus 黑客 → 停业）
  - **模式**：2024-05  黑客后自主停业，顾客资产 100% 补足（[[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|詳細]]）
- **[[exchanges/jp-exchange-sbi-securities|SBI 証券]]**（SBI HD 系，提供加密资产衍生品）
  - **模式**：加密资产衍生品（金商法 1  种，与 SBI VC Trade 的现货分工）
- **[[exchanges/jp-exchange-monex|Monex]]**（Monex Group 8698  系，加密资产衍生品）
  - **模式**：衍生品专营（与 Coincheck 的现货分工）
- **[[exchanges/jp-exchange-traders-securities|Traders Securities]]**（衍生品专营）
- **[[exchanges/jp-exchange-money-partners|Money Partners]]**（衍生品专营）
- **[[exchanges/jp-exchange-dmm-com-securities|DMM.com Securities]]**
- **[[exchanges/jp-exchange-goldenway-japan|Goldenway Japan]]**
- **[[exchanges/jp-exchange-finx-jcrypto|FinX/JCrypto]]**

### E. 中小・利基系（个别深耕）

- **[[exchanges/jp-exchange-zaif|Zaif]]**（JN 集团 HD 6634  完全子公司，2025-07）
- **[[exchanges/jp-exchange-bittrade|BitTrade]]**（Hbg + 旧 HuobiJapan）
- **[[exchanges/jp-exchange-backseat-exchange|Backseat Exchange]]**（旧 coinbook，信托受益权型）
- **[[exchanges/jp-exchange-gaia|Gaia]]**（利基）
- **[[exchanges/jp-exchange-bi-fxtrade|BI FXTRADE]]**（SBI FX 交易子）
- **[[exchanges/jp-exchange-mercury|Mercury]]**（Ceres 3696  系，运营 CoinTrade）
- **[[exchanges/jp-exchange-line-xenesis|LINE Xenesis]]**（LINE Yahoo 4689  系，2026-06  预定服务终止）
- **[[exchanges/jp-exchange-coinhub|CoinHub]]**
- **[[exchanges/jp-exchange-gaudiy|Gaudiy]]**
- **[[exchanges/jp-exchange-sblox|S.BLOX]]**（旧 DeCurret = 索尼集团旗下，加密资产交换业）

### F. JPYC・stablecoin 专营（监管类别独立）

- **[[exchanges/jp-exchange-jpyc|JPYC]]**（关东财务局 第00099号 资金移动业）
  - **模式**：日元稳定币 JPYC 发行・赎回专营（**非**加密资产交换业）
  - **差异化**：唯一的资金移动业者型 SC 发行体

## Big comparison matrix table

| 业者名 | 母 | FSA 登记号 | JVCEA 区分 | 现货贩卖所 | 现货交易所 | 杠杆 | 衍生品（金商法 1  种） | 托管 | 质押 | IEO | 机构 OTC | 零售贩卖所 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **bitFlyer** | bitFlyer Holdings | 第00003号 | 第一种 #1002 （现货 + 衍生品） | ◎ Lightning Spot | ○ Lightning | ○ Lightning FX | ○ | ○ | △ | ✕ | △ | ◎ |
| **Coincheck** | Monex Group (8698) | 第00014号 | 第一种 #1017 （仅现货） | ◎ | ○ | ✕ | ✕ | ○ | ○ | **◎ 国内首次** | ✕ | ◎ |
| **GMO Coin** | GMO Internet (9449) | 第00006号 | 第一种 #1006 | ◎ | ○ | ○ | ○ | ○ | ○ | △ | ✕ | ◎ |
| **SBI VC Trade** | SBI HD (8473) | 第00011号 (+ ECISP 第00001号) | 第一种 #1011 （3  牌照） | ○ | ○ | ✕ | ○ (3247) | ○ | ○ | △ | △ | ○ |
| **bitbank** | 独立系 | (有登记) | 第一种 | △ | ◎ Maker-rebate | ✕ | ✕ | ○ | ○ | ○ | ✕ | △ |
| **BTCBOX** | 独立系 | (有登记) | 第一种 | △ | ○ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ |
| **Rakuten Wallet** | 乐天 (4755) | (有登记) | 第一种 | ◎ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | ◎ |
| **Mercoin** | Mercari (4385) | (有登记) | 第一种 | ◎ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | ◎ |
| **Binance Japan** | Binance Global (PayPay 40%) | (有登记) | 第一种 | ◎ | ○ | ✕ | ✕ | ○ | ○ | ✕ | ✕ | ◎ |
| **Coinbase Japan** | Coinbase Global (COIN) | (有登记、dormant) | 第一种 | (休止) | (休止) | ✕ | ✕ | (休止) | ✕ | ✕ | ✕ | (休止) |
| **OKCoin Japan (OKJ)** | OKX Group | (有登记) | 第一种 | ○ | ○ | ✕ | ✕ | ○ | △ | ✕ | ✕ | ○ |
| **OSL Japan** | OSL Group (HKEX:863) | (有登记) | 第一种 | ○ | ○ | ✕ | ✕ | ○ | △ | ✕ | △ | ○ |
| **Gate Japan** | Gate.io | (有登记) | 第一种 | ○ | ○ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | ○ |
| **Tokyo Hash** | HashKey Group | (有登记) | 第一种 | ✕ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ◎ | ✕ |
| **Crypto Garage** | DG HD + 东京短资 + 野村 HD | (有登记) | 第一种 | ✕ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ◎ | ✕ |
| **Digital Asset Markets** | JPX + 三井物产 + Monex | (有登记) | 第一种 | ✕ | ○（机构 PTS） | ✕ | ✕ | ○ | ✕ | ✕ | ◎ | ✕ |
| **Laser Digital Japan** | 野村 HD（瑞士子） | (有登记) | 第二种（衍生品） | ✕ | ✕ | ✕ | ○ | ○ | ✕ | ✕ | ◎ | ✕ |
| **SBI 证券** | SBI HD | (衍生品业) | (衍生品) | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ | ✕ |
| **Monex** | Monex Group | (衍生品业) | (衍生品) | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ | ✕ |
| **Trek Labs Japan** | Backpack Exchange | (有登记) | 第二种（衍生品） | ✕ | ✕ | ✕ | ○ | ○ | ✕ | ✕ | ○ | ✕ |
| **Saxo Bank Japan** | Saxo Bank A/S | (有登记) | 第二种（衍生品） | ✕ | ✕ | ✕ | ○ | ○ | ✕ | ✕ | ○ | ✕ |
| **DMM Bitcoin** | DMM | (停业 2024-12) | (停业) | (停业) | (停业) | (停业) | (停业) | (停业) | ✕ | ✕ | ✕ | (停业) |
| **Zaif** | JN 集团 HD (6634) | (有登记) | 第一种 | ○ | ○ | ✕ | ✕ | ○ | ✕ | △ | ✕ | ○ |
| **BitTrade** | Hbg（旧 Huobi Japan） | (有登记) | 第一种 | ○ | ○ | ✕ | ✕ | ○ | ○ | △ | ✕ | ○ |
| **Backseat Exchange** | （独立系，旧 coinbook） | (有登记) | 第一种 | ○ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | △ | ○ |
| **LINE Xenesis** | LINE Yahoo (4689) | (有登记) | 第一种 | (2026-06  终止) | (终止) | ✕ | ✕ | (终止) | ✕ | ✕ | ✕ | (终止) |
| **JPYC** | JPYC 株式会社（独立系） | 第00099号（资金移动业） | 第一种 #1042 （资金移动业） | (不适用) | (不适用) | (不适用) | (不适用) | (不适用) | ✕ | ✕ | ✕ | ✕ |
| **S.BLOX** | 索尼集团 | (有登记) | 第一种 | ○ | ○ | ✕ | ✕ | ○ | ✕ | ✕ | △ | ○ |
| **Mercury (CoinTrade)** | Ceres (3696) | (有登记) | 第一种 | ○ | ✕ | ✕ | ✕ | ○ | ○（Fireblocks 基础设施） | ✕ | ✕ | ○ |
| **BI FXTRADE** | SBI FX 交易 | (有登记) | 第一种 | △ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | △ | △ |
| **CoinHub** | 独立系 | (有登记) | 第一种 | △ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ |
| **Gaudiy** | 独立系 | (有登记) | 第一种 | △ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ |
| **Gaia** | 独立系 | (有登记) | 第一种 | △ | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ |
| **DMM.com Securities** | DMM | (衍生品业) | (衍生品) | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ | ✕ |
| **Money Partners** | 独立系 | (衍生品业) | (衍生品) | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ | ✕ |
| **Goldenway Japan** | Goldenway 系 | (衍生品业) | (衍生品) | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ | ✕ |
| **Traders Securities** | 独立系 | (衍生品业) | (衍生品) | ✕ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ | ✕ |
| **FinX/JCrypto** | 独立系 | (有登记) | 第一种 | △ | △ | ✕ | ✕ | ○ | ✕ | ✕ | ✕ | △ |

凡例: ◎ = 主力战略轴 / ○ = 提供 / △ = 有限・筹备中 / ✕ = 不提供

## 收益模式 × 目标 二轴交叉分析

### 收益模式分组

1. **贩卖所价差主轴**（营业利润率 30-50%）: bitFlyer / Coincheck / GMO Coin / Rakuten Wallet / Mercoin / Binance Japan / SBI VC Trade（部分）
2. **交易所手续费主轴**（营业利润率 5-15%）: bitbank / OKJ / OSL / Binance Japan（部分）
3. **衍生品手续费主轴**（营业利润率 20-40%）: bitFlyer (Lightning FX) / GMO Coin（杠杆）/ SBI 证券 / Monex / Trek Labs Japan / Saxo Bank Japan / Laser Digital Japan
4. **机构 OTC + RWA**（依赖大额交易）: Crypto Garage / Digital Asset Markets / Tokyo Hash / Laser Digital Japan
5. **stablecoin / EPI**（新兴分部）: JPYC（资金移动业者型）/ SBI VC Trade (ECISP USDC)
6. **NFT + IEO**（新兴）: Coincheck (Coincheck NFT + IEO 国内首次) / bitbank (IEO)

### 目标客户别

- **个人零售深耕**: bitFlyer / Coincheck / GMO Coin / Rakuten Wallet / Mercoin / Binance Japan / OKJ / Gate Japan
- **机构投资者深耕**: Crypto Garage / Digital Asset Markets / Tokyo Hash / Laser Digital Japan / Saxo Bank Japan
- **企业间结算 (B2B)**: SBI VC Trade (USDC) + JPYC（资金移动业）
- **证券公司 PTS / RWA**: Digital Asset Markets / Crypto Garage

## 竞争结构的差异化轴

### 币种数竞争

- **国内最多币种**: SBI VC Trade（约 40  币种）> Coincheck > Binance Japan > GMO Coin
- **JVCEA 币种审查制约**: 全球 CEX 在世界各地经办的 700+ 币种（Binance）在国内被收紧至 30-40  币种左右的结构性制约
- **ECISP 币种扩大**: SBI VC Trade 经办 USDC 以降，其他 ECISP 取得者同样预定扩大 USDC / PYUSD / EURC

### 价差竞争

- 国内贩卖所价差为 0.5-3% 区间，因业者・币种而有差。bitFlyer / Coincheck / GMO Coin / Rakuten Wallet 以零售贩卖所为主轴。
- 交易所板的 Maker rebate 模式以 bitbank 最为明确（-0.02% Maker rebate）。

### 上币速度竞争

- **新规上币速度**: 独立系（bitbank / S.BLOX）机动，大手金融系（SBI / GMO / 乐天 / Mercari）因母公司 IR 披露与 JVCEA 币种审查而慢
- **IEO**: Coincheck IEO 国内首次导入后（2021），GMO Coin / bitbank 跟进

### 全球流动性桥

- **海外 OB (order book) 连接**: Binance Japan 诉求母公司 Binance Global 的流动性桥，OKJ 因 OKX 衍生品未提供而有限
- **国内 OTC 机构**: Crypto Garage / Tokyo Hash / Laser Digital Japan 直接与海外做市商进行 OTC 连接

## Boundary cases

### B1. JPYC vs SBI VC Trade — 不同监管类别的 SC 业务

- JPYC = 资金移动业者型 SC 发行体（非加密资产交换业）
- SBI VC Trade = 经由 ECISP 经办 USDC 的业者 + 加密资产交换业 + 金商法 1  种
- 两者法律上不同，但作为 stablecoin 业务为竞争关系（参见 [[fintech/japan-epi-four-camps-comparison|EPI 四阵营]]）

### B2. Coinbase Japan 的 dormant 状态 — 非撤退而是保留休止选项

- Coinbase Japan 于 2018  FSA 登记 → 2023  撤退，但保留牌照。留存将来再进入选项。
- 另一方面 DMM Bitcoin 于 2024-12  停业确定，无复活。

### B3. LINE Xenesis 2026-06  服务终止 — 大手系收益难的证据

- LINE Yahoo 4689  系的 LINE Xenesis 于 2026-06  预定服务终止。LINE 经济圈内未达成充分变现的案例。

### B4. 衍生品专营 vs 现货专营的两极化

- 衍生品专营: SBI 证券 / Monex / Trek Labs Japan / Saxo Bank Japan / DMM.com Securities / Money Partners / Traders Securities / Goldenway Japan / Laser Digital Japan
- 现货专营（无衍生品）: Coincheck / Rakuten Wallet / Mercoin / OKJ / Gate Japan / S.BLOX / Mercury / Backseat
- 两者皆提供: bitFlyer / SBI VC Trade / GMO Coin / Binance Japan

### B5. JVCEA 第二种会员（衍生品专营）的定位

- JVCEA 作为会员区分并列「第一种（加密资产交换业）」与「第二种（加密资产衍生品交易业）」。Laser Digital Japan / Trek Labs Japan / Saxo Bank Japan 以第二种运营。
- 第二种不持有现货贩卖所 / 交易所，故收益结构仅为衍生品手续费 + OTC。

### B6. 母公司上市 vs 非上市的透明度差

- 上市母公司（bitFlyer Holdings 为非上市、Coincheck = 纳斯达克、GMO Internet = 东证 Prime、SBI HD = 东证 Prime、乐天 = 东证 Prime、Mercari = 东证 Prime、Monex = 东证 Prime、JN HD = 东证 Standard）可经由 IR 披露获取财务信息。
- 非上市独立系（bitbank / BTCBOX / Gaia 等）财务信息获取困难，仅 JVCEA 月度顾客资产分别管理状况提交为获取途径。

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
