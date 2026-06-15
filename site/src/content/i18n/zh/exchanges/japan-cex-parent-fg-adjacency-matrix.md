---
source: exchanges/japan-cex-parent-fg-adjacency-matrix
source_hash: 61805315a848bb6f
lang: zh
status: machine
fidelity: ok
title: "日本 CEX 母公司 FG 邻接矩阵"
translated_at: 2026-06-15T03:48:21.878Z
---

# 日本 CEX 母公司 FG 邻接矩阵

## TL;DR

一家日本 **暗号資産交換業者**（FSA 注册的 VASP）很少是独立业务 — 它几乎总是某个母 **金融集团（FG）** 内部的一个节点，而该集团早已经营证券、银行、支付、积分、汇款、保险或电商业务。FG 邻接维度决定了 (a) VASP 的 **融资成本**，(b) 与母公司忠诚度界面的 **积分与奖励** 交叉链接，(c) 用于日元进出的 **银行账户存款渠道**，(d) 把加密产品分发进 FG 既有券商 / 钱包 / app 界面的 **分销渠道**，以及 (e) 横跨 FSA 加密轨道与母公司既有的银行法 / FIEA 轨道的 **监管集群监督**。本矩阵是关于 **每家经营者隶属于哪个 FG，以及母公司贡献哪些生态系统服务** 的交叉索引，位于 [[exchanges/INDEX|exchanges index]] 之下，作为 [[exchanges/jp-vasp-parent-company-map|JP VASP parent company map]] 中公司所有权分类法的运营性补充。

## Wiki 路径

本条目位于 [[exchanges/INDEX|exchanges index]] 之下，作为 FG 邻接运营矩阵。请与 [[exchanges/jp-vasp-parent-company-map|JP VASP parent company map]]（本条目所操作化的所有权分类法）一并阅读，与 [[exchanges/jp-crypto-exchange-overview|JP crypto exchange overview]]（更广的市场全景）、[[exchanges/jp-cex-points-economy-integration|JP CEX points-economy integration]]（积分交叉链接维度）、[[exchanges/jp-crypto-bank-credit-facilities|JP crypto bank credit facilities]]（银行融资成本角度）、[[exchanges/jp-vasp-ma-consolidation-history|JP VASP M&A consolidation history]]（产生今日母 FG 图谱的结构性重新洗牌）以及 [[exchanges/fsa-vasp-registration-system|FSA VASP registration system]]（所有行共享的监管框架）一并阅读。主要席位的实体锚点为 [[megabanks/sbi-hd|SBI HD]]、[[payment-firms/gmo-financial-hd|GMO Financial HD]]、[[securities-firms/monex-group|Monex Group]]、[[payment-firms/rakuten-fg|Rakuten FG]]、[[payment-firms/mercari-hd|Mercari HD]]、[[securities-firms/nomura-hd|Nomura HD]] 和 [[securities-firms/daiwa-sg|Daiwa Securities Group]]。

## 本矩阵为何重要

“母 FG 实际给了 VASP 什么”这个问题并非空谈。一家母公司经营着拥有数百万活跃账户的 **证券券商** 的 VASP，可以以接近零的获客成本把加密产品交叉销售进既有账户基础；一家母公司经营着 **直营银行** 的 VASP，可以在集团内部结算日元存款，没有同业费用、没有结算时滞；一家母公司经营着 **支付钱包** 的 VASP，可以通过钱包的预付余额而非第三方 PSP 来路由加密到法币的 off-ramp；一家母公司经营着 **积分忠诚度计划** 的 VASP，可以用母公司的忠诚度库存来铸造促销性加密奖励；而一家母公司经营着 **电商或市场平台** 业务的 VASP，可以通过母公司既有的商户关系来结算商户侧的加密实验。

上述每一种连接对 **CAC**（获客成本）、**单位经济性**、**日元融资成本**、**产品速度**（利用母公司基础设施能多快推出新功能）以及 **事件响应姿态**（黑客事件能否由母公司流动性缓冲，如 [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack detailed analysis]] 中母公司 DMM HD 承担了客户补偿）都有可衡量的影响。下方矩阵列出了每个母 FG 及其贡献的具体交叉服务，以便读者在进行任何产品层面的比较之前，先回答“剥离母公司语境后这家 VASP 是什么样子”。

## 各经营者画像

### SBI VC Trade — SBI HD (8473)

**母 FG**: [[megabanks/sbi-hd|SBI HD]]（东证 Prime 8473），以零售证券账户数计为日本最大的在线金融综合企业，经由 [[securities-firms/sbi-securities|SBI Securities]]。**贡献的集团服务**:
- **证券交叉销售** — SBI VC Trade 触达 SBI 证券账户基础（日本第 1 在线券商）作为交叉推广通道，SBI 共通 ID 在集团各品牌间链接账户
- **银行存款渠道** — [[regional-banks/sbi-shinsei-bank|SBI Shinsei Bank]]（集团银行，瑞穗系遗留）提供集团内日元结算轨道; [[megabanks/sbi-regional-bank-hd|SBI Regional Bank HD]]（地方银行控股）及合作地方银行贡献额外的银行存款
- **汇款** — [[payment-firms/sbi-remit|SBI Remit]] 经营集团的出境汇款 / 資金移動業 界面
- **FX 邻接** — [[securities-firms/sbi-fx-trade|SBI FX Trade]] 经营杠杆 FX，关联的 [[exchanges/jp-exchange-bi-fxtrade|BI FXTRADE]] 在集团内持有加密衍生品牌照
- **保险 / 资产管理** — [[life-insurers/sbi-life|SBI Life]]、[[non-life-insurers/sbi-insurance|SBI Insurance]]、[[asset-managers/sbi-asset-management|SBI Asset Management]] 补全集团的产品深度

**邻接强度**: 非常高 — 母集团运营一体化的金融超市模式，VASP 是其交叉销售界面之一。日元进出在行业内最快，部分原因在于 SBI 新生的银行轨道。详见: [[exchanges/jp-exchange-sbi-vc-trade|jp-exchange-sbi-vc-trade]]。

### GMO Coin — GMO Financial HD (7177) / GMO Internet Group (9449)

**母 FG**: [[payment-firms/gmo-financial-hd|GMO Financial HD]]（东证 Prime 7177），其本身是 GMO Internet Group（东证 Prime 9449）的子公司。**贡献的集团服务**:
- **证券交叉销售** — [[securities-firms/gmo-click-securities|GMO Click Securities]]（集团券商，同为 GMO Financial HD 子公司）提供 FIEA 侧产品深度与共享基础设施
- **直营银行** — [[payment-firms/gmo-aozora-net|GMO Aozora Net Bank]]（与青空银行的合资企业）作为集团互联网银行运营，贡献内部日元存款轨道
- **支付处理** — [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]（东证 Prime，单独上市）是日本顶尖 3 PSP; [[payment-firms/gmo-epsilon|GMO Epsilon]] 是面向 SME 的 PSP 部门
- **BNPL** — [[payment-firms/gmo-postpay|GMO Postpay]] 经营集团的 BNPL / 後払い 业务线
- **互联网基础设施** — 更广的 GMO Internet Group 经营 GMO Cloud / 域名 / SSL 业务，贡献运营工程深度

**邻接强度**: 高 — 互联网金融纯玩家协同，横跨券商、银行、支付与加密的共享工程文化。详见: [[exchanges/jp-exchange-gmo-coin|jp-exchange-gmo-coin]]。

### bitFlyer — 独立（无上市母公司）

**母 FG**: bitFlyer Holdings（私人，创始人 + 管理层 + 少数财务投资者的股权结构）。**贡献的集团服务**:
- **无超大型银行意义上的 FG 生态系统服务** — bitFlyer 是最大的、没有超大型银行或电商母公司的独立 VASP
- **内部姊妹实体**: [[exchanges/jp-exchange-custodiem|Custodiem]]（旧 FTX Japan，于 2024收购）位于 bitFlyer Holdings 内部，用于机构 / 隔离资产业务
- **外部合作轨道**: bitFlyer 通过合作超大型银行路由日元（无集团内银行），并运营基于合作的积分交叉链接（如 T-Point 遗留分销）

**邻接强度**: 低 — bitFlyer 是典型的 **独立** 结构。它以品牌实力、JVCEA 领导地位以及紧密的内部工程文化来弥补，但缺乏银行 FG 支撑的同业所具有的交叉销售飞轮。详见: [[exchanges/jp-exchange-bitflyer|jp-exchange-bitflyer]]。

### Coincheck — Monex Group (8698) / Coincheck Group N.V. (NASDAQ:CNCK)

**母 FG**: [[securities-firms/monex-group|Monex Group]]（东证 Prime 8698），现经由 Coincheck Group N.V.（经 2024 SPAC 合并在 NASDAQ 上市）运营。**贡献的集团服务**:
- **证券交叉销售** — Monex Securities（集团券商）提供 FIEA 券商界面及美股 / 全球投资分销
- **加密衍生品** — Monex 株式会社（Monex Inc.，单独牌照持有者）在 FIEA Type 1, 下经营加密衍生品，补充 Coincheck 的现货专用牌照
- **TradeStation** — Monex Group 的美国 TradeStation 部门提供美国市场与期货平台的工程深度
- **全球资本界面** — 2024 SPAC 后的 NASDAQ 上市赋予 Coincheck 直接的美元资本市场准入（对日本 VASP 而言罕见）

**邻接强度**: 中高 — Monex 提供证券交叉销售、衍生品牌照姊妹实体以及全球资本准入。Coincheck 保留独立品牌与产品界面。详见: [[exchanges/jp-exchange-coincheck|jp-exchange-coincheck]]。

### Rakuten Wallet — Rakuten Group (4755) / Rakuten FG

**母 FG**: Rakuten Group（东证 Prime 4755）内部的 [[payment-firms/rakuten-fg|Rakuten FG]]。**贡献的集团服务**:
- **银行** — Rakuten Bank（单独上市，东证 Prime 5838）是日本最大的互联网银行之一; 贡献占主导的集团内日元轨道
- **证券** — [[securities-firms/rakuten-securities|Rakuten Securities]]（在线券商，以账户数计居顶尖 3 ）提供 FIEA 券商界面
- **卡** — [[card-issuers/rakuten-card|Rakuten Card]]（以交易额计为日本最大发卡机构）提供卡侧界面
- **积分** — Rakuten Points（日本最大忠诚度计划，约 90M 个 ID 持有者）是交叉链接界面; Rakuten Wallet 历史上允许使用 Rakuten Points 购买加密
- **Edy** — [[payment-firms/rakuten-edy|Rakuten Edy]] 是预付电子货币部门; 见 [[payments/japan-prepaid-electronic-money-operator-matrix|JP prepaid e-money operator matrix]]
- **保险** — [[life-insurers/rakuten-life|Rakuten Life]]、[[non-life-insurers/rakuten-general-insurance|Rakuten General Insurance]]、[[non-life-insurers/rakuten-insurance-hd|Rakuten Insurance HD]]
- **电商** — Rakuten Ichiba（日本最大市场平台）是可测试集团内加密实验的商户侧界面
- **移动** — Rakuten Mobile（MNO）赋予集团电信渠道

**邻接强度**: 非常高 — 在日本属最深的 FG 生态系统之一，其独有的积分交叉链接是 VASP 中的差异化特征。详见: [[exchanges/jp-exchange-rakuten-wallet|jp-exchange-rakuten-wallet]]。

### DMM Bitcoin — DMM HD（私人）

**母 FG**: DMM.com Group（私人）。**贡献的集团服务**:
- **证券** — DMM.com Securities 经营 FX / 股票券商部门
- **加密邻接产品**: [[exchanges/jp-exchange-dmm-com-securities|DMM.com Securities]] 持有 FIEA 加密衍生品业务线
- **集团内无银行** — DMM 使用外部超大型银行合作来提供日元轨道
- **分销** — DMM 的成人内容 / 视频 / 电商界面提供了其他日本 VASP 母公司无法匹敌的营销触达
- **集团财务能力** — Lazarus 2024-05 黑客补偿由母集团出资（约 JPY 48 十亿），展示了 FG 独立的资本兜底作用: 见 [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack detailed analysis]]。DMM Bitcoin 随后宣布将服务移交 SBI VC Trade，客户迁移于 2024

**邻接强度**: 中（2024前）→ 接近零（移交后）— 该案例表明 **即使是拥有充足现金的非金融母 FG 也能为 VASP 黑客事件兜底**，而最终的清盘则显示出当集团战略优先级转移时的局限。详见: [[exchanges/jp-exchange-dmm-bitcoin|jp-exchange-dmm-bitcoin]]。

### Mercoin — Mercari HD (4385)

**母 FG**: [[payment-firms/mercari-hd|Mercari HD]]（东证 Prime 4385）。**贡献的集团服务**:
- **钱包 / 支付** — Merpay（集团钱包，持有 資金移動業 牌照）提供集团内日元轨道，且是 Mercoin 通过 Mercari 积分 / Mercari 销售所得购买 BTC 的主要入口
- **市场平台** — Mercari（日本最大 C2C 市场平台，约 22M 月活）是获客渠道; 该市场平台的 UX 让卖家可经由 Mercoin 把销售所得直接转换为 BTC
- **集团内无银行** — Mercari 不经营银行; 日元轨道经由 Merpay 的 資金移動業 牌照 + 合作银行
- **积分交叉链接** — Mercari ポイント 可在 Mercoin 内兑换为 BTC，这是其差异化的交叉链接
- **加密产品**: Mercoin 提供 BTC 及一小组额外加密资产; 应用内 UX 集成于 Mercari 移动 app（在日本 VASP 中属罕见的嵌入深度）

**邻接强度**: 非常高 — Mercari HD 实际上经由市场平台客户基础构建了一个专属 on-ramp。其产品策略是让购买 BTC 感觉像 Mercari 的一项功能，而非一家独立交易所。详见: [[exchanges/jp-exchange-mercoin|jp-exchange-mercoin]]。

### Laser Digital Japan — Nomura HD (8604)

**母 FG**: [[securities-firms/nomura-hd|Nomura HD]]（东证 Prime 8604），经由 Laser Digital Holdings（瑞士的数字资产子公司）。**贡献的集团服务**:
- **机构券商** — Nomura Securities（集团券商，以零售财富计为日本第 1 ）提供机构客户基础及大宗经纪邻接
- **资产管理** — [[asset-managers/nomura-asset-management|Nomura Asset Management]] 提供机构 ETF / 基金工程深度
- **信托银行** — [[trust-banks/nomura-trust-bank|Nomura Trust Bank]] 提供面向机构资金流的信托 / 托管侧法律实体
- **牌照** — Laser Digital Japan 持有 FIEA Type 2 （侧重衍生品）而非标准的 暗号資産交換業，反映其侧重机构 / 衍生品而非零售现货
- **全球 Laser Digital 网络** — 瑞士总部、迪拜（VARA 持牌）、阿布扎比及伦敦界面把机构资金流输送进日本实体

**邻接强度**: 非常高（仅机构）— Nomura 的投入在于机构 / 衍生品界面，而非零售现货。FG 交叉链接是券商客户覆盖与信托银行托管，而非银行 FG 零售 VASP 所用的消费者交叉销售。详见: [[exchanges/jp-exchange-laser-digital-japan|jp-exchange-laser-digital-japan]]。

### Crypto Garage — Daiwa Securities Group (8601) + DG / 野村 关联

**母 FG**: [[securities-firms/daiwa-sg|Daiwa Securities Group]]（东证 Prime 8601），股权结构上有 DG ホールディングス（Digital Garage 4819）、東京短資 及其他战略投资者。**贡献的集团服务**:
- **证券** — Daiwa Securities（集团券商，以零售财富计为日本第 2 ）提供机构界面
- **资产管理** — [[asset-managers/daiwa-asset-management|Daiwa Asset Management]] 提供资产管理工程深度
- **信托银行** — [[trust-banks/daiwa-living-trust|Daiwa Living Trust]] / Daiwa Trust 职能
- **直营银行** — [[regional-banks/daiwa-next-bank|Daiwa Next Bank]]（集团直营银行）提供集团内日元轨道
- **牌照** — Crypto Garage 持有 Type 2 / 机构侧重结构，姿态与 Laser Digital Japan 类似; 该实体被定位用于 PTS / 机构 / DCJPY / 稳定币发行实验，而非零售现货

**邻接强度**: 高（机构 / 实验性）— Crypto Garage 处于 Daiwa 机构界面与 JPX 邻接实验的交汇处，姊妹实体 [[exchanges/jp-exchange-digital-asset-markets|Digital Asset Markets]] 与其同在 JPX / 三井物産 / Monex 联合体内从事机构现货。详见: [[exchanges/jp-exchange-crypto-garage|jp-exchange-crypto-garage]]。

### PayPay 相关 — SoftBank-FG 集群

**母 FG**: SoftBank Group（东证 Prime 9984），经由 PayPay Corp 及 PayPay-FG 集群。**贡献的集团服务**:
- **钱包** — PayPay（以 GMV 计为日本最大 QR / 码支付）是交叉链接界面
- **卡** — PayPay Card（发卡机构）及 PayPay Card Gold 位于 PayPay-FG 内部
- **银行** — PayPay Bank（前 Japan Net Bank）是集团内互联网银行
- **证券** — PayPay Securities 提供 FIEA 券商界面
- **电信** — SoftBank（东证 Prime 9434, 单独上市）是母电信渠道; LINE Yahoo（东证 Prime 4689）是消息 / 搜索界面
- **加密链接**: PayPay 持有 [[exchanges/jp-exchange-binance-japan|Binance Japan]] 约 40%（收购的 SEBC 牌照载体），赋予 PayPay-FG 间接的加密交易所敞口，而无需持有自有名义的 VASP 牌照

**邻接强度**: 中（间接）— PayPay-FG 运营着强大的支付 + 银行 + 电信 + 证券 stack，但通过对 Binance Japan 的少数股权投资而非自有品牌 VASP 来涉足加密。截至 2026，这是一种刻意的期权式姿态。

### au 相关 — KDDI 集群

**母 FG**: KDDI（东证 Prime 9433），经由 auじぶん銀行 / au PAY / au Financial 集群。**贡献的集团服务**:
- **电信** — KDDI（au）是 3 MNO 之一
- **银行** — auじぶん銀行（与 MUFG 的合资企业）是集团内互联网银行
- **钱包** — au PAY（QR / 码支付）及 au PAY Card 位于 FG 内部
- **证券** — auカブコム証券（与 MUFG 的合资企业，前 カブドットコム証券）提供 FIEA 券商界面
- **加密链接**: 截至 2026 ，au-FG 不经营自有品牌 VASP; FG 的加密姿态是观察 / 合作式的，而非持牌

**邻接强度**: 低（无自有 VASP）— au-FG 构建了银行 / 钱包 / 券商 / 卡 stack，但尚未直接进入加密交易所。这是对 PayPay-FG 持有 Binance Japan 少数股权的结构性反事实。

## 大比较矩阵表

| VASP | 母 FG | 东证代码 | 集团内银行 | 集团内证券 | 集团内钱包/支付 | 集团内积分 | 保险 | 电商 / 市场平台 | 邻接强度 | 交叉销售飞轮 |
|---|---|---|---|---|---|---|---|---|---|---|
| **SBI VC Trade** | [[megabanks/sbi-hd\|SBI HD]] | 8473 | [[regional-banks/sbi-shinsei-bank\|SBI Shinsei Bank]] + regional-bank-HD | [[securities-firms/sbi-securities\|SBI Securities]] (日本第 1 在线) | [[payment-firms/sbi-remit\|SBI Remit]] | SBI 共通 ID | [[life-insurers/sbi-life\|SBI Life]] + [[non-life-insurers/sbi-insurance\|SBI Insurance]] | （有限） | 非常高 | 是 — 超市模式 |
| **GMO Coin** | [[payment-firms/gmo-financial-hd\|GMO Financial HD]] / GMO Internet | 7177 / 9449 | [[payment-firms/gmo-aozora-net\|GMO Aozora Net]] | [[securities-firms/gmo-click-securities\|GMO Click Securities]] | [[payment-firms/gmo-payment-gateway\|GMO Payment Gateway]] + [[payment-firms/gmo-epsilon\|GMO Epsilon]] | （有限） | （有限） | （有限） | 高 | 是 — 互联网金融 |
| **bitFlyer** | 独立 | 无 | 仅合作银行 | （无） | （无） | 仅合作 | （无） | （无） | 低 | 否 — 仅品牌 |
| **Coincheck** | [[securities-firms/monex-group\|Monex Group]] (经 Coincheck Group N.V., NASDAQ:CNCK) | 8698 (日本) / CNCK (美国) | （日本无） | Monex Securities | （无） | Monex 积分 | （无） | （无） | 中高 | 是 — 证券交叉销售 + 全球资本 |
| **Rakuten Wallet** | [[payment-firms/rakuten-fg\|Rakuten FG]] / Rakuten Group | 4755 | Rakuten Bank (5838) | [[securities-firms/rakuten-securities\|Rakuten Securities]] | [[card-issuers/rakuten-card\|Rakuten Card]] + [[payment-firms/rakuten-edy\|Rakuten Edy]] | Rakuten Points (~90M IDs) | [[life-insurers/rakuten-life\|Rakuten Life]] + [[non-life-insurers/rakuten-general-insurance\|Rakuten General Insurance]] | Rakuten Ichiba | 非常高 | 是 — 完整超市 + 积分 |
| **DMM Bitcoin** | DMM HD（私人） | 无 | （无） | DMM.com Securities | （无） | DMM Points | （无） | DMM marketplaces | 中 → 清盘 2024 | （曾）营销触达 |
| **Mercoin** | [[payment-firms/mercari-hd\|Mercari HD]] | 4385 | （无） | （无） | Merpay (資金移動業) | Mercari Points | （无） | Mercari (日本最大 C2C) | 非常高 | 是 — 专属市场平台 on-ramp |
| **Laser Digital Japan** | [[securities-firms/nomura-hd\|Nomura HD]] | 8604 | （无自有银行） | Nomura Securities (日本第 1 财富) | （无） | （无） | (Nomura Insurance) | （无） | 非常高（机构） | 是 — 机构客户覆盖 |
| **Crypto Garage** | [[securities-firms/daiwa-sg\|Daiwa SG]] + DG + 東京短資 + 野村 | 8601 (Daiwa) | [[regional-banks/daiwa-next-bank\|Daiwa Next Bank]] | Daiwa Securities (日本第 2 财富) | （无） | （无） | (Daiwa Life) | （无） | 高（机构） | 是 — 机构 + JPX 邻接 |
| **PayPay 相关（经 Binance Japan 少数股权）** | SoftBank Group / PayPay-FG | 9984 | PayPay Bank | PayPay Securities | PayPay (日本最大 QR) | PayPay Points | （有限） | （有限） | 中（间接，仅约 40% 股权） | 间接 — 期权 |
| **au 相关** | KDDI | 9433 | auじぶん銀行 (与 MUFG) | auカブコム証券 (与 MUFG) | au PAY | Ponta 邻接 | (au Insurance) | au マーケット | 低（无自有 VASP） | （无加密实体） |

## FG 邻接强度排名

将矩阵作为单一排名按邻接强度阅读（高 = 母 FG 在银行 / 证券 / 钱包 / 积分 / 保险 / 电商多个维度中作出有意义的贡献）:

1. **SBI VC Trade** (SBI HD) — 金融超市母公司，跨产品触达最深
2. **Rakuten Wallet** (Rakuten FG) — 超市 + 独有的积分交叉链接（约 90M Rakuten Points IDs）
3. **Mercoin** (Mercari HD) — 专属 C2C 市场平台 on-ramp + Merpay 資金移動業 钱包集成
4. **Laser Digital Japan** (Nomura HD) — 仅机构，券商 + 信托银行邻接深厚
5. **GMO Coin** (GMO Financial HD / GMO Internet) — 互联网金融母公司，具备银行 + 券商 + PSP
6. **Coincheck** (Monex Group / Coincheck Group N.V.) — 证券交叉销售 + 全球资本界面
7. **Crypto Garage** (Daiwa SG + DG + 東京短資 + 野村) — 机构 + JPX 邻接的实验性界面
8. **PayPay 相关（经 Binance Japan）** (SoftBank / PayPay-FG) — 少数股权（约 40%），间接邻接
9. **DMM Bitcoin** (DMM HD，2024前) — 已展示非金融母公司兜底作用（现已清盘）
10. **bitFlyer**（独立）— 无 FG 生态系统服务; 仅品牌 + JVCEA 网络地位
11. **au 相关** (KDDI) — 集团内无 VASP; 参考 / 反事实行

**银行 FG 零售超市模式（SBI、Rakuten）**、**专属市场平台 on-ramp 模式（Mercoin）** 以及 **机构券商邻接模式（Laser Digital、Crypto Garage）** 是三种结构上各异的高强度邻接原型。分析日本 VASP 竞争动态的读者，需要在对比费用、产品或交易量指标之前，先识别每家经营者属于哪种原型。

## 母 FG 常见贡献的交叉产品

以下交叉产品在矩阵中反复出现，代表了 VASP 可以接入的 **FG 可贡献界面的菜单**:

- **银行存款轨道** — 客户可用于即时日元进出的集团内银行账户（SBI 新生、Rakuten Bank、GMO Aozora Net、Daiwa Next Bank、auじぶん銀行、PayPay Bank）。若无集团内银行，VASP 必须经由合作超大型银行轨道路由，并承受相应的结算时间与费用劣势。
- **证券券商账户基础** — 母公司既有的 FIEA 券商客户作为交叉销售池（SBI Securities、Rakuten Securities、Nomura Securities、Daiwa Securities、Monex Securities、GMO Click Securities、auカブコム証券、PayPay Securities）。从券商账户进行交叉销售是日本 VASP 获客成本最低的渠道。
- **钱包 / 資金移動業** — Merpay、PayPay、au PAY、Rakuten Pay、Rakuten Edy、SBI Remit（出境汇款）。資金移動業 牌照在结构上与 暗号資産交換業 互补，因为它处理 VASP 交易所牌照所不覆盖的日元侧资金流动。
- **积分 / 忠诚度交叉链接** — Rakuten Points（最大）、PayPay Points、Ponta（au 邻接）、JRE POINT（交通，单独）、nanaco Points、WAON Points、dPoint（NTT DoCoMo）。积分交叉链接能在无现金消耗的情况下铸造促销性加密奖励。各经营者的集成深度见 [[exchanges/jp-cex-points-economy-integration|JP CEX points-economy integration]]。
- **发卡机构界面** — Rakuten Card、PayPay Card、[[card-issuers/aeon-financial-service|AEON Financial Service]] 卡、JCB（多 FG）、[[card-issuers/smbc-card|SMBC Card]]、[[card-issuers/mufg-nicos|MUFG NICOS]]。发卡机构集成让 VASP 能够启用经由卡的日元自动充值或加密购买。
- **保险交叉销售** — [[life-insurers/sbi-life|SBI Life]]、[[life-insurers/rakuten-life|Rakuten Life]]、Nomura 保险、AIG。与加密的直接相关性较低，但有助于整体 FG 捆绑。
- **电商 / 市场平台** — Rakuten Ichiba、Mercari、DMM marketplaces。市场平台集成能够实现商户侧加密支付实验与卖家侧 off-ramp。
- **电信渠道** — SoftBank、KDDI（au）、NTT DoCoMo、Rakuten Mobile。电信分销赋予 FG 以 MNO 捆绑期权。

接入这些界面中 4-5+ 个的 VASP（SBI VC Trade、Rakuten Wallet），其单位经济性在结构上不同于只接入 0-1 个的 VASP（bitFlyer、DMM Bitcoin 移交后）。这是本矩阵所支持的最重要的单一框架。

## 横跨矩阵的融资成本视角

本矩阵中各 VASP 的日元融资成本排名，跟随集团内银行的存在与母 FG 信用画像:

- **最低融资成本**: SBI VC Trade（集团内有 SBI 新生）、Rakuten Wallet（集团内有 Rakuten Bank）、GMO Coin（集团内有 GMO Aozora Net）、Crypto Garage（集团内有 Daiwa Next Bank）— 全都有直接的集团内银行轨道，且母 FG 的信用评级支持低成本运营资本
- **中等融资成本**: Coincheck（Monex Group，无集团内银行但上市母公司具备资本市场准入）、Mercoin（Mercari HD，Merpay 資金移動業 覆盖日元侧但无实际银行）
- **较高融资成本**: bitFlyer（独立，无上市母公司）、DMM Bitcoin（移交前; DMM HD 为私人，无公开资本市场准入）、Laser Digital Japan（仅机构，Nomura HD 强大但无专注于该实体的直接集团内银行）

融资成本维度之所以重要，是因为加密交易所运营需要 **大量营运资本** 来为订单簿流动性、客户提现缓冲及运营性日元头寸提供资金。具备廉价集团内融资的 VASP 可以运行更深的订单簿与更紧的价差，而被迫使用外部银行授信或无担保票据的独立 VASP 则不能。银行授信额度的具体细节见 [[exchanges/jp-crypto-bank-credit-facilities|JP crypto bank credit facilities]]。

## 横跨矩阵的事件响应能力

母 FG 吸收黑客相关补偿事件的能力差异巨大:

- **高能力（已验证）**: DMM HD 从集团现金中为 DMM Bitcoin 出资约 JPY 48十亿的 Lazarus 2024-05 黑客补偿，未进行摊薄性外部融资。SBI HD、Rakuten Group、Mercari HD、Nomura HD 原则上都具备类似或更大的资产负债表能力
- **高能力（未经检验）**: Monex Group、GMO Internet Group、Daiwa SG
- **较低能力**: bitFlyer（独立，无超大母公司）、2018 前的 Coincheck（在 2018-01 NEM 黑客事件发生时为独立，这正是补偿耗尽了 Coincheck 创始人股权并触发 Monex 收购的原因）

从 Coincheck NEM 2018-01 事件（[[exchanges/coincheck-nem-hack-detailed-analysis|Coincheck NEM hack detailed analysis]]）与 DMM Bitcoin 2024-05 事件（[[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack detailed analysis]]）得到的教训是: 在评估一家日本 VASP 的长期地位时，**母 FG 的现金兜底能力是最重要的非显而易见维度之一** — 没有母公司兜底的 VASP 无法在不进行摊薄性外部融资或终止服务的情况下挺过一次重大黑客事件。

## 边界案例

- **Coincheck Group N.V. NASDAQ 上市（2024）** — SPAC 合并后，问题变成: **Coincheck Inc.（日本）** 最好读作 Monex Group 子公司（其在日本的公司母公司），还是 Coincheck Group N.V. 子公司（其在美国的最终上市母公司）。就矩阵目的而言，两者都被记录 — 日本母 FG 生态系统经由 Monex 流动，而全球资本界面经由 Coincheck Group N.V. 流动。矩阵使用两个标签。
- **DMM Bitcoin 清盘（2024）→ SBI VC Trade 移交** — Lazarus 事件后向 SBI VC Trade 的客户迁移是日本 VASP 历史上的独特事件。完成后，DMM HD 行实际上归零，迁移的用户基础转移至 SBI HD 行。矩阵以清盘注记记录 2024 前状态而非删除该行，因为其历史性的 FG 邻接教训（非金融母公司兜底）仍是被引用最多的先例。
- **PayPay 在 Binance Japan 的少数股权头寸** — PayPay-FG 持有 Binance Japan 约 40%（收购的 SEBC 牌照载体），但 Binance Japan 在 Binance 全球品牌下运营，而非作为 PayPay-FG 产品。矩阵将此列为 **中（间接）** 邻接而非 **无**，因为该股权链接赋予 PayPay-FG 在日本加密上的期权，而无需从零构建的资本支出。
- **Mercari HD 作为非银行母 FG** — Mercari 不持有银行，但 Merpay 的 資金移動業 牌照经由 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer regulatory route]] 实际上提供了日元进出功能。就矩阵而言，这被记录为“集团内无银行 / 集团内有钱包”而非“集团内有银行”，因为其监管实体在根本上不同于银行法下的银行。
- **Laser Digital Japan / Crypto Garage 持有 FIEA Type 2 而非 暗号資産交換業** — 这些机构 / 衍生品实体在 [[exchanges/jp-vasp-derivative-license-system|FIEA Type 2 derivative]] 经路下持牌，而非消费者现货的 暗号資産交換業 经路。矩阵纳入它们，是因为母 FG（Nomura、Daiwa）毫无疑问地活跃于加密，且运营性的 FG 邻接机制相同 — 但监管牌照 stack 不同。
- **au-FG 反事实** — KDDI 构建了日本最深的非银行 FG 支付 / 银行 / 券商 stack 之一，但尚未进入加密交易所。矩阵保留这一空行，作为“在没有附带 VASP 实体的情况下 FG 邻接是什么样子”的参考，这对于衡量缺失加密头寸的成本很有用。
- **bitFlyer 的刻意独立** — bitFlyer 在多次收购讨论中选择保持独立（最近一次是 2024-2025 关于向瑞穗 FG 或 SBI FG 出售但未成行的传闻）。矩阵将此记录为 **低邻接**，但标注该经营者以品牌实力与 JVCEA 网络地位来弥补，而非母公司基础设施。

## 相关

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

## 来源

- FSA registered crypto-asset exchange operators (暗号資産交換業者) list: https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
- JVCEA member list (Japan Virtual and Crypto Assets Exchange Association): https://jvcea.or.jp/member/
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
