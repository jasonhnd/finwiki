---
source: securities/japan-capital-markets-ecosystem-overview
source_hash: 7d98a4215695448b
lang: zh
status: machine
fidelity: ok
title: "日本资本市场生态系统概览"
translated_at: 2026-06-01T03:31:12.320Z
---

# 日本资本市场生态系统概览

## TL;DR

日本的**资本市场生态系统**由五个相互关联的层组成：**发行（一级）**、**交易（二级）**、**清算**、**结算/托管**和**监管/自我监管**。该系统涵盖股票、债券（日本国债和公司债券）、衍生品（上市和场外交易）、证券化产品和证券代币市场，并得到交易所、清算公司、托管机构、监管机构和自律组织网络的支持。

该条目是将[[securities/INDEX|securities domain]]联系在一起并连接到[[finance/INDEX|finance]]（企业金融方面）、[[derivatives/INDEX|derivatives]]（工具层）、[[money-market/INDEX|money market]]（短端）、[[structured-finance/INDEX|structured finance]]（证券化）和[[real-estate-finance/INDEX|real-estate finance]]（J-REIT）领域的跨领域生态系统锚。

## Wiki 路径

此条目位于 [[securities/INDEX|securities index]] 下，作为生态系统锚点。将其与[[securities/japan-market-infrastructure-map]]配对以获取场地/清算/结算管道详细信息，将其与[[finance/japan-listed-financial-groups-investable-universe]]配对以获取列出的FG可投资领域。家庭投资方面位于[[securities/nisa-2024-flow]]。公司财务方面位于[[finance/INDEX|finance index]]。

### 1。发行（一级市场）

一级市场是发行人从投资者那里筹集新资金的地方。

|仪器|地点 |锚|
|---|---|---|
|首次公开募股 | TSE 优质/标准/成长 | [[securities/japan-ipo-listing-disclosure-route]]、[[securities/japan-ipo-2024-2025-case-study-kioxia-tokyo-metro]] |
|股权后续/权利|东京证交所 | [[securities/japan-underwriting-market-structure]] |
|公司债券|场外交易（大多数情况下没有集中上市）| [[finance/japan-convertible-bond-mechanics]]、[[securities/japan-underwriting-market-structure]] |
|日本国债发行| MoF 拍卖、一级交易商网络 | [[derivatives/jgb-special-participants-primary-dealer]]、[[money-market/jgb-repo-market-japan]] |
|地方政府债券| MoF协调、JFM联合发行| [[policy-finance/local-government-bond-market]]、[[policy-finance/japan-local-bond-association]] |
|证券化|场外/私募 | [[structured-finance/japan-abs-market-overview]] |
|安全令牌 | ODX / 私有链发行 | [[securities/japan-security-token-secondary-market-route]]、[[securities/osaka-digital-exchange]]、[[securities/progmat-tokenized-securities-infrastructure]] |
| J-REIT 首次公开募股 |东证房地产投资信托基金董事会 | [[real-estate-finance/j-reit-market-overview]] |

一级市场由以下因素支持：

- 由主要证券公司（[[JapanFG/nomura-hd|Nomura]]、[[JapanFG/daiwa-sg|Daiwa]]、[[JapanFG/mufg-mums|Mitsubishi UFJ Morgan Stanley]]、[[JapanFG/smbc-nikko|SMBC Nikko]]、[[JapanFG/mizuho-bank|Mizuho Securities]]）牵头的**承销团**。
- **JPX-R（日本交易所监管）的上市审查**。
- 通过 EDINET（财务报表披露）和 TDnet（及时披露）进行**披露**。
- **JSDA 分销行为自律**。

### 2。交易（二级市场）

二级市场是投资者交易现有工具的地方。

|仪器|地点 |锚|
|---|---|---|
|上市股权 | [[securities/tokyo-stock-exchange|TSE]]、[[exchanges/INDEX|other Japan exchanges]] | [[securities/japan-best-execution-sor-pts]]、[[securities/japan-online-brokerage-competition]] |
| PTS（另类交易）| Cboe 日本 / Japannext / ODX | [[securities/japannext-securities]]、[[securities/japannext-sor-routing-deep-dive]]、[[securities/japan-pts-liquidity-data-guide]] |
|上市衍生品 | OSE 上的 [[derivatives/jgb-futures-curve|JGB futures]] / [[derivatives/nikkei-225-futures-options|Nikkei 225]] / TOPIX / TONA 期货 | [[derivatives/INDEX]]、[[derivatives/topix-futures]] |
|场外股票/债券|经销商市场、JSDA报价系统| [[derivatives/INDEX]]、[[securities/japan-market-infrastructure-map]] |
|场外衍生品 |双边场外交易，范围内交易通过 JSCC 清算 | [[derivatives/japan-otc-derivative-market-overview]]、[[derivatives/otc-clearing-jp-trade-repository]] |
|股票借贷| OTC双边加JSF | [[securities/japan-stock-lending-market-route]]、[[JapanFG/japan-securities-finance]] |
|保证金交易 |经纪保证金+JSF贷款交易| [[securities/japan-margin-trading-and-securities-finance]] |
|日本国债现金 |场外交易交易商 | [[money-market/jgb-repo-market-japan]] |

二级市场得到以下支持：

- FSA / JSDA 指南下的 **最佳执行规则**。
- **TSE 和 PTS 场地之间的智能订单传送 (SOR)**。
- **做市商和流动性提供者** ([[securities/japan-market-maker-and-liquidity-provider-landscape]])。
- **卖空规则** ([[securities/japan-short-selling-and-stock-loan-controls]])。
- **保证金/证券金融管道** ([[JapanFG/japan-securities-finance]])。

### 3。清算

清算将双边风险敞口转变为针对中央对手方（CCP）的多边风险敞口。

|资产类别 |中共|锚|
|---|---|---|
|上市衍生品（OSE）| [[securities/japan-securities-clearing-corp|JSCC]] | JSCC 清算所有在 JPX 上市的衍生品。 |
|现金权益（TSE）| [[securities/japan-securities-clearing-corp|JSCC]] | JSCC 清算 TSE 现金股权。 |
| OTC IRS / OIS（强制）| [[securities/japan-securities-clearing-corp|JSCC]] | FIEA 范围内日元 IRS / OIS 的强制清算。 |
| OTC CDS（指定指数）| [[securities/japan-securities-clearing-corp|JSCC]] | JSCC CDS 清算服务。 |
|跨境对等| JSCC EMIR 等效 + CFTC 替代合规 |请参阅[[derivatives/otc-clearing-jp-trade-repository]]。 |

### 4。结算及存管

结算转移清算交易的所有权；保管机构保存着基础记录。

|资产类别 |存管|结算|
|---|---|---|
|上市股票/公司债券/J-REIT | [[securities/japan-securities-depository-center|JASDEC]] | T+2 （权益）、T+1 （大多数日本国债）|
|日本国宝 | BoJ-NET（电子图书条目）| T+1 |
| ETF/J-REIT |贾斯德克| T+2 |
|安全令牌 | [[securities/progmat-tokenized-securities-infrastructure|Progmat]] / 私有区块链 | T+0 /T+1 取决于平台 |
|基金（共同基金）|信托银行托管 | T+N 取决于基金类型 |
|投资信托DVP | [[banking/jasdec-settlement-operations]] | T+2 典型 |

统一场地/清算/结算图见[[securities/japan-market-infrastructure-map]]。

### 5。监管与自律

监管管理着市场行为、冲突解决和系统性风险监控。

|层|身体|功能|
|---|---|---|
|章程| FIEA（金融商品取引法）|管理证券、衍生品、中介机构、披露、市场行为。 |
|监督|金融服务局（FSA，金融庁）|监督 FIEA 注册公司、JSCC、JASDEC、JPX-R。 |
|外汇监管| JPX-R（日本交易所监管）|上市审核、市场监管、纪律处分。 |
|自律（证券）|日本证券业协会 (JSDA) |分销行为、场外报价系统、销售和招揽规则。 |
|证券投资者保护|日本投资者保护基金（JIPF）|经销商失败情况下的客户资产保护。 |
|反洗钱 / 反恐融资 |警察厅下属的金融情报机构（JAFIC）|可疑交易报告。 |
|法定审计| CPAAOB |审计员监督。 |
|税收 (NISA) |国家税务局+财政部|国家信息安全局框架。请参阅[[securities/nisa-2024-flow]]。 |

## 市场参与者

|类别 |示例 |
|---|---|
|发行人 |上市公司（TSE Prime ~1,600, 标准 ~1,500, Growth ~600）、JGB 发行人 (MoF)、J-REIT 发起人、公司债券发行人、ABS 发起人。 |
|承销商| [[JapanFG/nomura-hd|Nomura]]、[[JapanFG/daiwa-sg|Daiwa]]、[[JapanFG/mufg-mums|MUMSS]]、[[JapanFG/smbc-nikko|SMBC Nikko]]、[[JapanFG/mizuho-bank|Mizuho Securities]]、外国 IB。 |
|经纪业务（零售）| [[JapanFG/sbi-hd|SBI Securities]]、[[JapanFG/rakuten-fg|Rakuten Securities]]、[[JapanFG/monex-group|Monex]]、松井证券、[[JapanFG/mufg-esmart-securities|MUFG eSmart]]、[[JapanFG/paypay-securities|PayPay Securities]]、GMO Click、DMM。请参阅[[securities/japan-online-brokerage-competition]]。 |
|资产管理公司| [[JapanFG/asset-management-one|Asset Management One]]（瑞穗）、[[JapanFG/mufg-asset-management|MUFG Asset Management]]、野村资产管理、日兴资产管理、大和资产管理。请参阅[[securities/japan-asset-manager-landscape-matrix]]。 |
|信托银行（托管）| [[banking/japan-master-trust-and-custody-bank-landscape|Master Trust Bank of Japan, Japan Trustee Services Bank, etc.]] |
|机构投资者| GPIF、人寿保险公司、非人寿保险公司、日本央行（JGB 控股）、外国机构账户。 |
|国外经纪商|摩根大通、高盛、花旗、摩根士丹利、德意志银行、法国巴黎银行、汇丰银行、瑞银、巴克莱银行。 |
|做市商/流动性提供者|国内+国外量化/高频交易公司。请参阅[[securities/japan-market-maker-and-liquidity-provider-landscape]]。 |
|大宗经纪商| [[securities/japan-prime-brokerage-and-institutional-financing]]。 |
|自我监管| JSDA，JPX-R。 |
|中央银行|日本银行 (BoJ) — 日本国债持有者、货币政策执行者、支付结算运营者。 |

## 跨境联系

|联动|机制|
|---|---|
|外资股权|外国账户拥有 ~30% 的 TSE Prime 流通量。 |
|外国日本国债所有权|外国账户在日本国债流通量中占有相当大的份额。 |
| EMIR 等效 |对于欧盟交易对手方来说，JSCC 相当于 EMIR。 |
|第七章 / CFTC 同等条款 | JSCC 具有用于 IRS 清算的 CFTC 替代合规/等效要素。 |
| ICSD联动 |外资银行作为 ICSD 运营，提供跨境结算服务。请参阅[[JapanFG/clearstream-banking-japan]]。 |
|东京证交所上市 ETF 交叉上市 |有限交叉上市；主要是互相认可。 |

## 公共数据源

|来源 |它显示了什么 |
|---|---|
| JPX 统计 |交易量、市值、上市公司数量、衍生品交易量。 |
| JSCC统计|清算量、会员数量、默认资金规模。 |
| JASDEC 统计 |存管持有量、结算量。 |
| JSDA统计| PTS交易量、OTC债券交易、承销排行榜。 |
|日本央行统计数据|日本国债持有量、货币市场数据、支付系统数据。 |
|财政部统计 |日本国债发行日历、一级交易商流程。 |
|英国金融服务管理局 (FSA) 披露 |监管评论、市场行为检查。 |
|编辑网 |上市公司的财务报表披露。 |
| TD网|上市公司及时披露。 |

## 相关

- [[securities/INDEX]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-ipo-listing-disclosure-route]]
- [[securities/japan-ipo-2024-2025-case-study-kioxia-tokyo-metro]]
- [[securities/japan-underwriting-market-structure]]
- [[securities/japan-online-brokerage-competition]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-margin-trading-and-securities-finance]]
- [[securities/japan-short-selling-and-stock-loan-controls]]
- [[securities/japan-stock-lending-market-route]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[securities/japan-prime-brokerage-and-institutional-financing-matrix]]
- [[securities/japan-fiea-operator-registry-segment-matrix]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[securities/japan-market-maker-and-liquidity-provider-landscape]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/osaka-digital-exchange]]
- [[securities/japannext-securities]]
- [[securities/japan-security-token-secondary-market-route]]
- [[securities/progmat-tokenized-securities-infrastructure]]
- [[securities/nisa-2024-flow]]
- [[securities/nisa-2025-tax-reform-update]]
- [[finance/INDEX]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[finance/japan-convertible-bond-mechanics]]
- [[finance/japan-ib-league-table]]
- [[derivatives/INDEX]]
- [[derivatives/japan-otc-derivative-market-overview]]
- [[derivatives/otc-clearing-jp-trade-repository]]
- [[derivatives/jgb-futures-curve]]
- [[derivatives/topix-futures]]
- [[derivatives/nikkei-225-futures-options]]
- [[derivatives/jgb-special-participants-primary-dealer]]
- [[money-market/INDEX]]
- [[money-market/jgb-repo-market-japan]]
- [[structured-finance/INDEX]]
- [[structured-finance/japan-abs-market-overview]]
- [[real-estate-finance/INDEX]]
- [[real-estate-finance/j-reit-market-overview]]
- [[policy-finance/local-government-bond-market]]
- [[policy-finance/japan-local-bond-association]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/jasdec-settlement-operations]]
- [[JapanFG/INDEX]]
- [[JapanFG/japan-exchange-group]]
- [[JapanFG/japan-securities-finance]]
- [[JapanFG/nomura-hd]]
- [[JapanFG/daiwa-sg]]
- [[JapanFG/mufg-mums]]
- [[JapanFG/smbc-nikko]]
- [[INDEX|FinWiki index]]

## 来源

- 日本交易所集团 (JPX)：交易和市场数据表面；上市规则和统计。
- 金融服务局 (FSA)：FIEA、监管框架、上市审查规则。
- 日本央行 (BoJ)：与 JGB 相关的统计数据、支付结算业务、货币政策材料。
- 日本证券交易商协会 (JSDA)：PTS 统计数据、承销排行榜、OTC 债券数据、自律规则。
- 日本证券清算公司 (JSCC)：清算规则、清算量统计、EMIR 等效文件。
- 日本证券存管中心（JASDEC）：存管和结算统计。
- 财政部 (MoF)：日本国债发行日历、一级交易商系统文件。
- 日本交易所监管 (JPX-R)：上市审查和市场监督材料。
