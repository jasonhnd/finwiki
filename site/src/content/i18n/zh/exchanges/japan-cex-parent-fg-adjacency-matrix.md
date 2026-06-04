---
source: exchanges/japan-cex-parent-fg-adjacency-matrix
source_hash: 0b1c671dd7279df6
lang: zh
status: machine
fidelity: ok
title: "日本 CEX 母公司金融集团(FG)邻接矩阵"
translated_at: 2026-05-31T03:19:56.486Z
---

# 日本 CEX 母公司金融集团(FG)邻接矩阵

## TL;DR

日本的**暗号資産交換業者**(FSA 注册 VASP)很少是独立业务 — 它几乎总是一个母**金融集团(FG)**内部的节点,该集团已在经营证券、银行、支付、积分、汇款、保险或电子商务。FG 邻接维度决定了(a)VASP 的**融资成本**、(b)与母公司忠诚度界面的**积分与奖励**交叉链接、(c)日元出入金的**银行账户存款渠道**、(d)将加密产品分销至 FG 现有券商/钱包/App 界面的**分销渠道**,以及(e)横跨 FSA 加密轨道与母公司已经营的银行法/FIEA 轨道的**监管集群监督**。本矩阵是**每家运营商隶属于哪个 FG、母公司贡献哪些生态系统服务**的交叉参照,归属于 [[exchanges/INDEX|exchanges index]],作为 [[exchanges/jp-vasp-parent-company-map|JP VASP parent company map]] 中企业所有权分类法的运营补充。

## Wiki 路由

本条目归属于 [[exchanges/INDEX|exchanges index]],作为 FG 邻接运营矩阵。请配合 [[exchanges/jp-vasp-parent-company-map|JP VASP parent company map]] 阅读以了解本条目所操作化的所有权分类法,[[exchanges/jp-crypto-exchange-overview|JP crypto exchange overview]] 了解更广的市场格局,[[exchanges/jp-cex-points-economy-integration|JP CEX points-economy integration]] 了解积分交叉链接维度,[[exchanges/jp-crypto-bank-credit-facilities|JP crypto bank credit facilities]] 了解银行融资成本角度,[[exchanges/jp-vasp-ma-consolidation-history|JP VASP M&A consolidation history]] 了解产生当今母公司-FG 图景的结构性重组,以及 [[exchanges/fsa-vasp-registration-system|FSA VASP registration system]] 了解所有行共享的监管框架。主要持仓的实体锚点是 [[megabanks/sbi-hd|SBI HD]]、[[payment-firms/gmo-financial-hd|GMO Financial HD]]、[[securities-firms/monex-group|Monex Group]]、[[payment-firms/rakuten-fg|Rakuten FG]]、[[payment-firms/mercari-hd|Mercari HD]]、[[securities-firms/nomura-hd|Nomura HD]] 和 [[securities-firms/daiwa-sg|Daiwa Securities Group]]。

## 为何本矩阵很重要

"母公司 FG 实际给了 VASP 什么"这一问题并非学术性的。母公司经营拥有数百万活跃账户**证券券商**的 VASP,可以近乎零的客户获取成本将加密产品交叉销售给那一现有账户群;母公司经营**直营银行**的 VASP,可在集团内部以无同业费用、无结算时滞结算日元存款;母公司经营**支付钱包**的 VASP,可经由钱包预付余额而非第三方 PSP 路由加密到法币的出金通道;母公司经营**积分忠诚度计划**的 VASP,可利用母公司的忠诚度库存铸造促销性加密奖励;母公司经营**电子商务或市场**业务的 VASP,可经由母公司现有的商户关系结算商户侧加密实验。

上述每一项连接都对 **CAC**(客户获取成本)、**单位经济性**、**日元融资成本**、**产品速度**(利用母公司基础设施推出新功能有多快),以及**事件响应姿态**(被黑能否由母公司流动性缓冲,如 [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack detailed analysis]] 中母公司 DMM HD 承担客户全额补偿)有可衡量的影响。下方矩阵列出每个母公司 FG 及其贡献的具体交叉服务,使读者在任何产品层面比较之前,先能回答"剥离母公司背景后这个 VASP 是什么样"。

## 各运营商概况

### SBI VC Trade — SBI HD(8473)

**母公司 FG**:[[megabanks/sbi-hd|SBI HD]](TSE Prime 8473),经由 [[securities-firms/sbi-securities|SBI Securities]] 以零售证券账户数计为日本最大的在线金融综合集团。**集团贡献的服务**:
- **证券交叉销售** — SBI VC Trade 借助 SBI 共通 ID 链接集团各品牌账户,将 SBI Securities 账户群(日本第 1 在线券商)作为交叉推广通道
- **银行存款渠道** — [[regional-banks/sbi-shinsei-bank|SBI Shinsei Bank]](集团银行,Mizuho 系遗留)提供集团内日元结算通道;[[megabanks/sbi-regional-bank-hd|SBI Regional Bank HD]](地方银行控股)及合作地方银行贡献额外银行存款
- **汇款** — [[payment-firms/sbi-remit|SBI Remit]] 经营集团的对外汇款/資金移動業 界面
- **外汇邻接** — [[securities-firms/sbi-fx-trade|SBI FX Trade]] 经营杠杆外汇,关联的 [[exchanges/jp-exchange-bi-fxtrade|BI FXTRADE]] 持有集团内的加密衍生品牌照
- **保险/资产管理** — [[life-insurers/sbi-life|SBI Life]]、[[non-life-insurers/sbi-insurance|SBI Insurance]]、[[asset-managers/sbi-asset-management|SBI Asset Management]] 补足集团的产品深度

**邻接强度**:很高 — 母集团经营整合的金融超市模式,VASP 是其交叉销售界面之一。日元出入金在业内最快,部分得益于 SBI Shinsei 银行通道。详见:[[exchanges/jp-exchange-sbi-vc-trade|jp-exchange-sbi-vc-trade]]。

### GMO Coin — GMO Financial HD(7177)/ GMO Internet Group(9449)

**母公司 FG**:[[payment-firms/gmo-financial-hd|GMO Financial HD]](TSE Prime 7177),本身是 GMO Internet Group(TSE Prime 9449)的子公司。**集团贡献的服务**:
- **证券交叉销售** — [[securities-firms/gmo-click-securities|GMO Click Securities]](集团券商,亦为 GMO Financial HD 子公司)提供 FIEA 侧产品深度和共享基础设施
- **直营银行** — [[payment-firms/gmo-aozora-net|GMO Aozora Net Bank]](与 Aozora Bank 的合资公司)作为集团网络银行运营,贡献内部日元存款通道
- **支付处理** — [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]](TSE Prime,单独上市)是日本前 3 的 PSP;[[payment-firms/gmo-epsilon|GMO Epsilon]] 是聚焦中小企业的 PSP 臂
- **BNPL** — [[payment-firms/gmo-postpay|GMO Postpay]] 经营集团的 BNPL/後払い 业务线
- **互联网基础设施** — 更广的 GMO Internet Group 经营 GMO Cloud/域名/SSL 业务,贡献运营工程深度

**邻接强度**:高 — 互联网金融纯玩家协同,横跨券商、银行、支付和加密的共享工程文化。详见:[[exchanges/jp-exchange-gmo-coin|jp-exchange-gmo-coin]]。

### bitFlyer — 独立(无上市母公司)

**母公司 FG**:bitFlyer Holdings(私有,创始人 + 管理层 + 少数金融投资者股权结构)。**集团贡献的服务**:
- **无超大型银行意义上的 FG 生态系统服务** — bitFlyer 是没有超大型银行或电商母公司的最大独立 VASP
- **内部姊妹实体**:[[exchanges/jp-exchange-custodiem|Custodiem]](旧 FTX Japan,于 2024 收购)位于 bitFlyer Holdings 内部,用于机构/分别资产业务
- **外部合作通道**:bitFlyer 经由合作超大型银行路由日元(无集团内银行),并运营基于合作的积分交叉链接(例如 T-Point 遗留分销)

**邻接强度**:低 — bitFlyer 是典型的**独立**结构。它以品牌实力、JVCEA 领导地位和紧密的内部工程文化加以弥补,但缺乏银行系 FG 支持同侪的交叉销售飞轮。详见:[[exchanges/jp-exchange-bitflyer|jp-exchange-bitflyer]]。

### Coincheck — Monex Group(8698)/ Coincheck Group N.V.(NASDAQ:CNCK)

**母公司 FG**:[[securities-firms/monex-group|Monex Group]](TSE Prime 8698),现经由 Coincheck Group N.V.(经 2024 SPAC 合并在 NASDAQ 上市)运营。**集团贡献的服务**:
- **证券交叉销售** — Monex Securities(集团券商)提供 FIEA 券商界面和美股/全球投资分销
- **加密衍生品** — Monex 株式会社(Monex Inc.,独立牌照持有人)在 FIEA 第 1, 类下经营加密衍生品,补足 Coincheck 仅限现货的牌照
- **TradeStation** — Monex Group 的美国 TradeStation 臂提供美国市场和期货平台工程深度
- **全球资本界面** — 2024 SPAC 之后的 NASDAQ 上市赋予 Coincheck 直接的美元资本市场准入(对日本 VASP 罕见)

**邻接强度**:中高 — Monex 提供证券交叉销售、衍生品牌照姊妹实体和全球资本准入。Coincheck 保留独立品牌和产品界面。详见:[[exchanges/jp-exchange-coincheck|jp-exchange-coincheck]]。

### Rakuten Wallet — Rakuten Group(4755)/ Rakuten FG

**母公司 FG**:Rakuten Group(TSE Prime 4755)内的 [[payment-firms/rakuten-fg|Rakuten FG]]。**集团贡献的服务**:
- **银行** — Rakuten Bank(单独上市,TSE Prime 5838)是日本最大的网络银行之一;贡献主导性的集团内日元通道
- **证券** — [[securities-firms/rakuten-securities|Rakuten Securities]](在线券商,按账户数计前 3 )提供 FIEA 券商界面
- **卡** — [[card-issuers/rakuten-card|Rakuten Card]](按交易额计最大的日本发卡机构)提供卡侧界面
- **积分** — Rakuten Points(最大的日本忠诚度计划,约 90M ID 持有者)是交叉链接界面;Rakuten Wallet 历来允许使用 Rakuten Points 购买加密资产
- **Edy** — [[payment-firms/rakuten-edy|Rakuten Edy]] 是预付电子货币臂;见 [[payments/japan-prepaid-electronic-money-operator-matrix|JP prepaid e-money operator matrix]]
- **保险** — [[life-insurers/rakuten-life|Rakuten Life]]、[[non-life-insurers/rakuten-general-insurance|Rakuten General Insurance]]、[[non-life-insurers/rakuten-insurance-hd|Rakuten Insurance HD]]
- **电子商务** — Rakuten Ichiba(最大的日本市场)是可测试集团内加密实验的商户侧界面
- **移动** — Rakuten Mobile(MNO)赋予集团一个电信渠道

**邻接强度**:很高 — 属日本最深厚的 FG 生态系统之一,其独特的积分交叉链接是 VASP 中的鲜明特征。详见:[[exchanges/jp-exchange-rakuten-wallet|jp-exchange-rakuten-wallet]]。

### DMM Bitcoin — DMM HD(私有)

**母公司 FG**:DMM.com Group(私有)。**集团贡献的服务**:
- **证券** — DMM.com Securities 经营外汇/股票券商臂
- **加密相邻产品**:[[exchanges/jp-exchange-dmm-com-securities|DMM.com Securities]] 持有 FIEA 加密衍生品业务线
- **集团内无银行** — DMM 使用外部超大型银行合作处理日元通道
- **分销** — DMM 的成人内容/视频/电商界面提供了其他日本 VASP 母公司无可匹敌的营销触达
- **集团财务能力** — Lazarus 2024-05 黑客事件的全额补偿由母集团出资(约 48 亿日元),展示了 FG 独立资本兜底角色:见 [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack detailed analysis]]。DMM Bitcoin 随后宣布将服务移交给 SBI VC Trade,客户迁移于 2024

**邻接强度**:中(2024之前)→ 近乎零(移交之后) — 该案例表明**即便是拥有充足现金的非金融母公司 FG 也能为 VASP 黑客事件兜底**,而最终的清算退场则显示出当集团战略优先级转移时的局限。详见:[[exchanges/jp-exchange-dmm-bitcoin|jp-exchange-dmm-bitcoin]]。

### Mercoin — Mercari HD(4385)

**母公司 FG**:[[payment-firms/mercari-hd|Mercari HD]](TSE Prime 4385)。**集团贡献的服务**:
- **钱包/支付** — Merpay(集团钱包,持有 資金移動業 牌照)提供集团内日元通道,是 Mercoin 经由 Mercari 积分/Mercari 销售所得购买 BTC 的主要入口
- **市场** — Mercari(最大的日本 C2C 市场,约 22M 月活)是客户获取渠道;市场的 UX 让卖家可经 Mercoin 将销售所得直接转换为 BTC
- **集团内无银行** — Mercari 不经营银行;日元通道经由 Merpay 的 資金移動業 牌照 + 合作银行路由
- **积分交叉链接** — Mercari ポイント 可在 Mercoin 内部兑换为 BTC,这是其鲜明的交叉链接
- **加密产品**:Mercoin 提供 BTC 及一小组额外加密资产;应用内 UX 整合进 Mercari 移动 App(在日本 VASP 中罕见的嵌入深度)

**邻接强度**:很高 — Mercari HD 实际上经由市场客户群构建了一个专属入金通道。其产品策略是让购买 BTC 感觉像是 Mercari 的一项功能,而非一个独立交易所。详见:[[exchanges/jp-exchange-mercoin|jp-exchange-mercoin]]。

### Laser Digital Japan — Nomura HD(8604)

**母公司 FG**:[[securities-firms/nomura-hd|Nomura HD]](TSE Prime 8604),经由 Laser Digital Holdings(总部在瑞士的数字资产子公司)。**集团贡献的服务**:
- **机构券商** — Nomura Securities(集团券商,按零售财富计日本第 1 )提供机构客户群和主经纪邻接
- **资产管理** — [[asset-managers/nomura-asset-management|Nomura Asset Management]] 提供机构 ETF/基金工程深度
- **信托银行** — [[trust-banks/nomura-trust-bank|Nomura Trust Bank]] 为机构流量提供信托/托管侧法律实体
- **牌照** — Laser Digital Japan 持有 FIEA 第 2 类(聚焦衍生品)而非标准的 暗号資産交換業,反映出机构/衍生品聚焦而非零售现货
- **全球 Laser Digital 网络** — 瑞士总部、迪拜(VARA 持牌)、阿布扎比和伦敦界面将机构流量输送至日本实体

**邻接强度**:很高(仅机构) — Nomura 的投入在于机构/衍生品界面,而非零售现货。其 FG 交叉链接是券商客户覆盖和信托银行托管,而非银行系 FG 零售 VASP 使用的消费者交叉销售。详见:[[exchanges/jp-exchange-laser-digital-japan|jp-exchange-laser-digital-japan]]。

### Crypto Garage — Daiwa Securities Group(8601)+ DG / 野村 关联

**母公司 FG**:[[securities-firms/daiwa-sg|Daiwa Securities Group]](TSE Prime 8601),股权结构中有 DG ホールディングス(Digital Garage 4819)、東京短資 及其他战略投资者。**集团贡献的服务**:
- **证券** — Daiwa Securities(集团券商,按零售财富计日本第 2 )提供机构界面
- **资产管理** — [[asset-managers/daiwa-asset-management|Daiwa Asset Management]] 提供资产管理工程深度
- **信托银行** — [[trust-banks/daiwa-living-trust|Daiwa Living Trust]] / Daiwa Trust 职能
- **直营银行** — [[regional-banks/daiwa-next-bank|Daiwa Next Bank]](集团直营银行)提供集团内日元通道
- **牌照** — Crypto Garage 持有第 2 类/机构聚焦结构,姿态类似 Laser Digital Japan;该实体定位于 PTS/机构/DCJPY/稳定币发行实验而非零售现货

**邻接强度**:高(机构/实验性) — Crypto Garage 位于 Daiwa 机构界面与 JPX 相邻实验的交汇处,姊妹实体 [[exchanges/jp-exchange-digital-asset-markets|Digital Asset Markets]] 处于同一 JPX/三井物産/Monex 联盟中用于机构现货。详见:[[exchanges/jp-exchange-crypto-garage|jp-exchange-crypto-garage]]。

### PayPay 相关 — SoftBank-FG 集群

**母公司 FG**:SoftBank Group(TSE Prime 9984),经由 PayPay Corp 及 PayPay-FG 集群。**集团贡献的服务**:
- **钱包** — PayPay(按 GMV 计最大的日本 QR/码支付)是交叉链接界面
- **卡** — PayPay Card(发卡机构)和 PayPay Card Gold 位于 PayPay-FG 内部
- **银行** — PayPay Bank(原 Japan Net Bank)是集团内网络银行
- **证券** — PayPay Securities 提供 FIEA 券商界面
- **电信** — SoftBank(TSE Prime 9434, 单独上市)是母电信渠道;LINE Yahoo(TSE Prime 4689)是消息/搜索界面
- **加密链接**:PayPay 持有 [[exchanges/jp-exchange-binance-japan|Binance Japan]](收购的 SEBC 牌照载体)约 40%,赋予 PayPay-FG 间接的加密交易所敞口,而无需持有自有名义的 VASP 牌照

**邻接强度**:中(间接) — PayPay-FG 经营强大的支付 + 银行 + 电信 + 证券堆栈,但经由对 Binance Japan 的少数股权投资而非自有品牌 VASP 涉足加密。截至 2026,这是一种刻意的选择权姿态。

### au 相关 — KDDI 集群

**母公司 FG**:KDDI(TSE Prime 9433),经由 auじぶん銀行 / au PAY / au Financial 集群。**集团贡献的服务**:
- **电信** — KDDI(au)是 3 家 MNO 之一
- **银行** — auじぶん銀行(与 MUFG 的合资公司)是集团内网络银行
- **钱包** — au PAY(QR/码支付)和 au PAY Card 位于 FG 内部
- **证券** — auカブコム証券(与 MUFG 的合资公司,原 カブドットコム証券)提供 FIEA 券商界面
- **加密链接**:截至 2026 ,au-FG 不经营自有品牌 VASP;FG 的加密姿态是观望/基于合作而非持牌

**邻接强度**:低(无自有 VASP) — au-FG 建出了银行/钱包/券商/卡堆栈,但未直接进入加密交易所。这是 PayPay-FG 对 Binance Japan 少数持仓的结构性反事实。

## 大型比较矩阵表

| VASP | 母公司 FG | TSE 代码 | 集团内银行 | 集团内证券 | 集团内钱包/支付 | 集团内积分 | 保险 | 电商/市场 | 邻接强度 | 交叉销售飞轮 |
|---|---|---|---|---|---|---|---|---|---|---|
| **SBI VC Trade** | [[megabanks/sbi-hd\|SBI HD]] | 8473 | [[regional-banks/sbi-shinsei-bank\|SBI Shinsei Bank]] + 地方银行控股 | [[securities-firms/sbi-securities\|SBI Securities]](日本第 1 在线) | [[payment-firms/sbi-remit\|SBI Remit]] | SBI 共通 ID | [[life-insurers/sbi-life\|SBI Life]] + [[non-life-insurers/sbi-insurance\|SBI Insurance]] | (有限) | 很高 | 是 — 超市模式 |
| **GMO Coin** | [[payment-firms/gmo-financial-hd\|GMO Financial HD]] / GMO Internet | 7177 / 9449 | [[payment-firms/gmo-aozora-net\|GMO Aozora Net]] | [[securities-firms/gmo-click-securities\|GMO Click Securities]] | [[payment-firms/gmo-payment-gateway\|GMO Payment Gateway]] + [[payment-firms/gmo-epsilon\|GMO Epsilon]] | (有限) | (有限) | (有限) | 高 | 是 — 互联网金融 |
| **bitFlyer** | 独立 | n/a | 仅合作银行 | (无) | (无) | 仅合作 | (无) | (无) | 低 | 否 — 仅品牌 |
| **Coincheck** | [[securities-firms/monex-group\|Monex Group]](经由 Coincheck Group N.V.,NASDAQ:CNCK) | 8698 (日本) / CNCK(美国) | (日本无) | Monex Securities | (无) | Monex 积分 | (无) | (无) | 中高 | 是 — 证券交叉销售 + 全球资本 |
| **Rakuten Wallet** | [[payment-firms/rakuten-fg\|Rakuten FG]] / Rakuten Group | 4755 | Rakuten Bank(5838) | [[securities-firms/rakuten-securities\|Rakuten Securities]] | [[card-issuers/rakuten-card\|Rakuten Card]] + [[payment-firms/rakuten-edy\|Rakuten Edy]] | Rakuten Points(约 90M ID) | [[life-insurers/rakuten-life\|Rakuten Life]] + [[non-life-insurers/rakuten-general-insurance\|Rakuten General Insurance]] | Rakuten Ichiba | 很高 | 是 — 完整超市 + 积分 |
| **DMM Bitcoin** | DMM HD(私有) | n/a | (无) | DMM.com Securities | (无) | DMM Points | (无) | DMM 市场 | 中 → 2024 清算退场 | (曾) 营销触达 |
| **Mercoin** | [[payment-firms/mercari-hd\|Mercari HD]] | 4385 | (无) | (无) | Merpay(資金移動業) | Mercari Points | (无) | Mercari(最大日本 C2C) | 很高 | 是 — 专属市场入金通道 |
| **Laser Digital Japan** | [[securities-firms/nomura-hd\|Nomura HD]] | 8604 | (无自有银行) | Nomura Securities(日本第 1 财富) | (无) | (无) | (Nomura Insurance) | (无) | 很高(机构) | 是 — 机构客户覆盖 |
| **Crypto Garage** | [[securities-firms/daiwa-sg\|Daiwa SG]] + DG + 東京短資 + 野村 | 8601 (Daiwa) | [[regional-banks/daiwa-next-bank\|Daiwa Next Bank]] | Daiwa Securities(日本第 2 财富) | (无) | (无) | (Daiwa Life) | (无) | 高(机构) | 是 — 机构 + JPX 相邻 |
| **PayPay 相关(经由 Binance Japan 少数股权)** | SoftBank Group / PayPay-FG | 9984 | PayPay Bank | PayPay Securities | PayPay(最大日本 QR) | PayPay Points | (有限) | (有限) | 中(间接,仅约 40% 股权) | 间接 — 选择权 |
| **au 相关** | KDDI | 9433 | auじぶん銀行(与 MUFG) | auカブコム証券(与 MUFG) | au PAY | Ponta 相邻 | (au Insurance) | au マーケット | 低(无自有 VASP) | (无加密实体) |

## FG 邻接强度排名

将矩阵作为按邻接强度的单一排名解读(高 = 母公司 FG 在银行/证券/钱包/积分/保险/电商多个维度中有实质贡献):

1. **SBI VC Trade**(SBI HD) — 金融超市母公司,最深的跨产品触达
2. **Rakuten Wallet**(Rakuten FG) — 超市 + 独特的积分交叉链接(约 90M Rakuten Points ID)
3. **Mercoin**(Mercari HD) — 专属 C2C 市场入金通道 + Merpay 資金移動業 钱包整合
4. **Laser Digital Japan**(Nomura HD) — 仅机构,深厚的券商 + 信托银行邻接
5. **GMO Coin**(GMO Financial HD / GMO Internet) — 拥有银行 + 券商 + PSP 的互联网金融母公司
6. **Coincheck**(Monex Group / Coincheck Group N.V.) — 证券交叉销售 + 全球资本界面
7. **Crypto Garage**(Daiwa SG + DG + 東京短資 + 野村) — 机构 + JPX 相邻实验界面
8. **PayPay 相关(经由 Binance Japan)**(SoftBank / PayPay-FG) — 少数持仓(约 40%),间接邻接
9. **DMM Bitcoin**(DMM HD,2024之前) — 已展示非金融母公司兜底角色(现已清算退场)
10. **bitFlyer**(独立) — 无 FG 生态系统服务;仅品牌 + JVCEA 网络地位
11. **au 相关**(KDDI) — 集团内无 VASP;占位/反事实行

**银行系 FG 零售超市模式(SBI、Rakuten)**、**专属市场入金通道模式(Mercoin)**,以及**机构券商邻接模式(Laser Digital、Crypto Garage)**是三种结构上迥异的高强度邻接原型。分析日本 VASP 竞争动态的读者,在按同侪比较费用、产品或交易量指标之前,需要识别每家运营商隶属于哪种原型。

## 母公司 FG 常贡献的交叉产品

以下交叉产品在矩阵中反复出现,代表了 VASP 可接入的 **FG 可贡献界面菜单**:

- **银行存款通道** — 客户可用于即时日元出入金的集团内银行账户(SBI Shinsei、Rakuten Bank、GMO Aozora Net、Daiwa Next Bank、auじぶん銀行、PayPay Bank)。没有集团内银行,VASP 必须经由合作超大型银行通道路由,并承受相应的结算时间和费用劣势。
- **证券券商账户群** — 母公司现有的 FIEA 券商客户作为交叉销售池(SBI Securities、Rakuten Securities、Nomura Securities、Daiwa Securities、Monex Securities、GMO Click Securities、auカブコム証券、PayPay Securities)。从券商账户交叉销售是日本 VASP 最低 CAC 的渠道。
- **钱包/資金移動業** — Merpay、PayPay、au PAY、Rakuten Pay、Rakuten Edy、SBI Remit(对外汇款)。資金移動業 牌照在结构上与 暗号資産交換業 互补,因为它处理 VASP 交易所牌照未涵盖的日元侧移动。
- **积分/忠诚度交叉链接** — Rakuten Points(最大)、PayPay Points、Ponta(au 相邻)、JRE POINT(交通,单独)、nanaco Points、WAON Points、dPoint(NTT DoCoMo)。积分交叉链接使促销性加密奖励铸造无需现金消耗。逐运营商整合深度见 [[exchanges/jp-cex-points-economy-integration|JP CEX points-economy integration]]。
- **发卡机构界面** — Rakuten Card、PayPay Card、[[card-issuers/aeon-financial-service|AEON Financial Service]] 卡、JCB(多 FG)、[[card-issuers/smbc-card|SMBC Card]]、[[card-issuers/mufg-nicos|MUFG NICOS]]。发卡机构整合让 VASP 可启用经卡的日元自动充值或加密购买。
- **保险交叉销售** — [[life-insurers/sbi-life|SBI Life]]、[[life-insurers/rakuten-life|Rakuten Life]]、Nomura 保险、AIG。与加密的直接相关性较低,但贡献于整体 FG 捆绑。
- **电商/市场** — Rakuten Ichiba、Mercari、DMM 市场。市场整合使商户侧加密支付实验和卖家侧出金成为可能。
- **电信渠道** — SoftBank、KDDI(au)、NTT DoCoMo、Rakuten Mobile。电信分销为 FG 提供 MNO 捆绑选择权。

接入这些界面 4-5个以上的 VASP(SBI VC Trade、Rakuten Wallet)的单位经济性,在结构上不同于仅接入 0-1 个的 VASP(bitFlyer、移交后的 DMM Bitcoin)。这是本矩阵所支持的最重要的单一框架。

## 横跨矩阵的融资成本视角

本矩阵中 VASP 的日元融资成本排名,遵循集团内银行存在与否及母公司 FG 信用状况:

- **最低融资成本**:SBI VC Trade(集团内有 SBI Shinsei)、Rakuten Wallet(集团内有 Rakuten Bank)、GMO Coin(集团内有 GMO Aozora Net)、Crypto Garage(集团内有 Daiwa Next Bank) — 全都有直接的集团内银行通道,且母公司 FG 的信用评级支持低成本运营资本
- **中等融资成本**:Coincheck(Monex Group,无集团内银行但有具资本市场准入的上市母公司)、Mercoin(Mercari HD,Merpay 資金移動業 覆盖日元侧但无实际银行)
- **较高融资成本**:bitFlyer(独立,无上市母公司)、DMM Bitcoin(移交前;DMM HD 为私有,无公开资本市场准入)、Laser Digital Japan(仅机构,Nomura HD 强大但无聚焦于该实体的直接集团内银行)

融资成本维度之所以重要,是因为加密交易所运营需要**大量营运资本**来为订单簿流动性、客户提现缓冲和运营日元头寸提供资金。拥有廉价集团内融资的 VASP,可运营比被迫使用外部银行授信或无担保票据的独立 VASP 更深的订单簿和更窄的价差。银行授信额度细节见 [[exchanges/jp-crypto-bank-credit-facilities|JP crypto bank credit facilities]]。

## 横跨矩阵的事件响应能力

母公司 FG 吸收黑客相关全额补偿事件的能力差异巨大:

- **高能力(已验证)**:DMM HD 从集团现金为 DMM Bitcoin 出资约 48亿日元的 Lazarus 2024-05 黑客全额补偿,未稀释性外部融资。SBI HD、Rakuten Group、Mercari HD、Nomura HD 原则上都拥有类似或更大的资产负债表能力可用
- **高能力(未经检验)**:Monex Group、GMO Internet Group、Daiwa SG
- **较低能力**:bitFlyer(独立,无巨型母公司)、2018 之前的 Coincheck(在 2018-01 NEM 黑客时独立,这正是为何全额补偿耗尽了 Coincheck 创始人股权并触发 Monex 收购)

Coincheck NEM 2018-01 事件([[exchanges/coincheck-nem-hack-detailed-analysis|Coincheck NEM hack detailed analysis]])和 DMM Bitcoin 2024-05 事件([[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack detailed analysis]])的教训是,在评估日本 VASP 长期地位时,**母公司 FG 现金兜底能力是最重要的非显而易见维度之一** — 没有母公司兜底的 VASP,若无稀释性外部融资或服务终止,无法在重大黑客中存活。

## 边界情形

- **Coincheck Group N.V. NASDAQ 上市(2024)** — SPAC 合并之后,问题变为 **Coincheck Inc.(日本)**最好被解读为 Monex Group 子公司(其在日本的企业母公司)还是 Coincheck Group N.V. 子公司(其在美国的最终上市母公司)。出于矩阵目的两者都予记录 — 日本母公司 FG 生态系统经由 Monex,而全球资本界面经由 Coincheck Group N.V.。矩阵使用两个标签。
- **DMM Bitcoin 清算退场(2024)→ SBI VC Trade 移交** — Lazarus 之后向 SBI VC Trade 的客户迁移是日本 VASP 史上的独特事件。完成后,DMM HD 行实际上清零,迁移的用户群转移至 SBI HD 行。矩阵以清算退场备注记录 2024 之前的状态而非删除该行,因为历史性的 FG 邻接教训(非金融母公司兜底)仍是被引用最多的先例。
- **PayPay 对 Binance Japan 的少数持仓** — PayPay-FG 持有 Binance Japan(收购 SEBC 的牌照载体)约 40%,但 Binance Japan 以 Binance 全球品牌而非 PayPay-FG 产品运营。矩阵将其列为**中(间接)**邻接而非**无**,因为该股权链接赋予 PayPay-FG 对日本加密的选择权,而无需从零构建的资本开支。
- **Mercari HD 作为非银行母公司 FG** — Mercari 不持有银行,但 Merpay 的 資金移動業 牌照经由 [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer regulatory route]] 实际上交付了日元出入金职能。出于矩阵目的,这被记录为"集团内无银行/集团内有钱包"而非"集团内有银行",因为该监管实体与银行法银行根本不同。
- **Laser Digital Japan / Crypto Garage 持有 FIEA 第 2 类而非 暗号資産交換業** — 这些机构/衍生品实体在 [[exchanges/jp-vasp-derivative-license-system|FIEA Type 2 derivative]] 路线下持牌,而非消费者现货 暗号資産交換業 路线。矩阵纳入它们,因为母公司 FG(Nomura、Daiwa)明确活跃于加密,且运营 FG 邻接机制相同 — 但监管牌照堆栈不同。
- **au-FG 反事实** — KDDI 建出了日本最深厚的非银行系 FG 支付/银行/券商堆栈之一,但未进入加密交易所。矩阵保留该空行作为"没有附带 VASP 实体时 FG 邻接是什么样"的参照,这对基准衡量缺失加密持仓的成本很有用。
- **bitFlyer 的刻意独立** — bitFlyer 历经多次收购讨论(最近是 2024-2025 围绕 Mizuho-FG 或 SBI-FG 出售但未成真的猜测)选择保持独立。矩阵将其记录为**低邻接**,但标注该运营商以品牌实力和 JVCEA 网络地位而非母公司基础设施加以弥补。

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

- FSA 注册加密资产交换业者(暗号資産交換業者)清单:https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
- JVCEA 成员清单(日本虚拟与加密资产交易所协会):https://jvcea.or.jp/member/
- SBI HD 公司网站:https://www.sbigroup.co.jp/
- GMO Internet Group 公司网站:https://www.gmo.jp/
- Monex Group 公司网站:https://www.monexgroup.jp/
- Rakuten Group 公司网站:https://corp.rakuten.co.jp/
- Mercari HD 公司网站:https://about.mercari.com/
- Nomura HD 公司网站:https://www.nomuraholdings.com/
- Daiwa Securities Group 公司网站:https://www.daiwa-grp.jp/
- DMM Group 公司网站:https://www.dmm.com/
- bitFlyer Holdings 公司网站:https://corporate.bitflyer.com/
- KDDI 公司网站:https://www.kddi.com/
- SoftBank Group 公司网站:https://group.softbank/
- 矩阵中逐行引用的运营商 IR 披露
