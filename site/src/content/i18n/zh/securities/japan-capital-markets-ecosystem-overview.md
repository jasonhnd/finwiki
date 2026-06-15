---
source: securities/japan-capital-markets-ecosystem-overview
source_hash: 295d18ea8342be12
lang: zh
status: machine
fidelity: ok
title: "日本资本市场生态概览"
translated_at: 2026-06-15T04:09:41.158Z
---

# 日本资本市场生态概览

## TL;DR

日本的**资本市场生态**由五个相互关联的层级构成：**发行（一级）**、**交易（二级）**、**清算**、**结算／存托**，以及**监管／自律监管**。该系统横跨股票、债券（JGB 与公司债）、衍生品（场内与场外）、证券化产品以及证券型代币市场，由交易所、清算公司、存托机构、监管机构与自律组织所组成的网络支撑。

本条目是把 [[securities/INDEX|securities domain]] 串联起来的横向生态锚点，并桥接至 [[finance/INDEX|finance]]（公司金融一侧）、[[derivatives/INDEX|derivatives]]（工具层）、[[money-market/INDEX|money market]]（短端）、[[structured-finance/INDEX|structured finance]]（证券化）与 [[real-estate-finance/INDEX|real-estate finance]]（J-REIT）等领域。

## Wiki 路径

本条目位于 [[securities/INDEX|securities index]] 之下，作为生态锚点。请将其与 [[securities/japan-market-infrastructure-map]] 配对以了解交易场所／清算／结算的管路细节，并与 [[finance/japan-listed-financial-groups-investable-universe]] 配对以了解上市金融集团（FG）的可投资范围。家庭投资一侧见 [[securities/nisa-2024-flow]]。公司金融一侧见 [[finance/INDEX|finance index]]。

### 1. 发行（一级市场）

一级市场是发行人向投资者募集新资本的场所。

| 工具 | 交易场所 | 锚点 |
|---|---|---|
| 股票 IPO | 东证 Prime / Standard / Growth | [[securities/japan-ipo-listing-disclosure-route]], [[securities/japan-ipo-2024-2025-case-study-kioxia-tokyo-metro]] |
| 股票增发／配股 | 东证 | [[securities/japan-underwriting-market-structure]] |
| 公司债 | 场外（多数无中央上市） | [[finance/japan-convertible-bond-mechanics]], [[securities/japan-underwriting-market-structure]] |
| JGB 发行 | 财务省招标、一级交易商网络 | [[derivatives/jgb-special-participants-primary-dealer]], [[money-market/jgb-repo-market-japan]] |
| 地方政府债 | 财务省协调、JFM 共同发行 | [[policy-finance/local-government-bond-market]], [[policy-finance/japan-local-bond-association]] |
| 证券化 | 场外／私募 | [[structured-finance/japan-abs-market-overview]] |
| 证券型代币 | ODX／私有区块链发行 | [[securities/japan-security-token-secondary-market-route]], [[securities/osaka-digital-exchange]], [[securities/progmat-tokenized-securities-infrastructure]] |
| J-REIT IPO | 东证 REIT 板 | [[real-estate-finance/j-reit-market-overview]] |

一级市场由以下支撑：

- **承销团**，由主要证券公司主导（[[securities-firms/nomura-hd|Nomura]], [[securities-firms/daiwa-sg|Daiwa]], [[securities-firms/mufg-mums|Mitsubishi UFJ Morgan Stanley]], [[securities-firms/smbc-nikko|SMBC Nikko]], [[megabanks/mizuho-bank|Mizuho Securities]]）。
- **上市审查**，由 JPX-R（日本交易所自主规制法人）进行。
- **信息披露**，通过 EDINET（财务报表披露）与 TDnet（及时披露）。
- **JSDA 自律监管**，针对分销行为。

### 2. 交易（二级市场）

二级市场是投资者交易既有工具的场所。

| 工具 | 交易场所 | 锚点 |
|---|---|---|
| 上市股票 | [[securities/tokyo-stock-exchange|TSE]], [[exchanges/INDEX|other Japan exchanges]] | [[securities/japan-best-execution-sor-pts]], [[securities/japan-online-brokerage-competition]] |
| PTS（替代交易） | Cboe Japan / Japannext / ODX | [[securities/japannext-securities]], [[securities/japannext-sor-routing-deep-dive]], [[securities/japan-pts-liquidity-data-guide]] |
| 上市衍生品 | OSE 上的 [[derivatives/jgb-futures-curve|JGB futures]] / [[derivatives/nikkei-225-futures-options|Nikkei 225]] / TOPIX / TONA 期货 | [[derivatives/INDEX]], [[derivatives/topix-futures]] |
| 场外股票／债券 | 做市商市场、JSDA 报价系统 | [[derivatives/INDEX]], [[securities/japan-market-infrastructure-map]] |
| 场外衍生品 | 双边场外，符合范围者在 JSCC 集中清算 | [[derivatives/japan-otc-derivative-market-overview]], [[derivatives/otc-clearing-jp-trade-repository]] |
| 证券借贷 | 场外双边加 JSF | [[securities/japan-stock-lending-market-route]], [[financial-regulators/japan-securities-finance]] |
| 融资融券交易 | 券商保证金 + JSF 贷出交易 | [[securities/japan-margin-trading-and-securities-finance]] |
| JGB 现券 | 场外交易商间 | [[money-market/jgb-repo-market-japan]] |

二级市场由以下支撑：

- **最佳执行规则**，依据 FSA / JSDA 指引。
- **智能订单路由（SOR）**，在东证与 PTS 交易场所之间。
- **做市商与流动性提供者**（[[securities/japan-market-maker-and-liquidity-provider-landscape]]）。
- **卖空规则**（[[securities/japan-short-selling-and-stock-loan-controls]]）。
- **融资融券／证券金融管路**（[[financial-regulators/japan-securities-finance]]）。

### 3. 清算

清算将双边敞口转化为对中央对手方（CCP）的多边敞口。

| 资产类别 | CCP | 锚点 |
|---|---|---|
| 上市衍生品（OSE） | [[securities/japan-securities-clearing-corp|JSCC]] | JSCC 清算所有 JPX 上市衍生品。 |
| 现货股票（东证） | [[securities/japan-securities-clearing-corp|JSCC]] | JSCC 清算东证现货股票。 |
| 场外 IRS / OIS（强制） | [[securities/japan-securities-clearing-corp|JSCC]] | 依 FIEA 对符合范围的日元 IRS / OIS 强制清算。 |
| 场外 CDS（指定指数） | [[securities/japan-securities-clearing-corp|JSCC]] | JSCC CDS 清算服务。 |
| 跨境对等 | JSCC EMIR 对等 + CFTC 替代合规 | 参见 [[derivatives/otc-clearing-jp-trade-repository]]。 |

### 4. 结算与存托

结算转移已清算交易的所有权；存托机构持有底层记录。

| 资产类别 | 存托机构 | 结算 |
|---|---|---|
| 上市股票／公司债／J-REIT | [[securities/japan-securities-depository-center|JASDEC]] | T+2 （股票）、T+1 （多数 JGB） |
| JGB | BoJ-NET（电子簿记） | T+1 |
| ETF / J-REIT | JASDEC | T+2 |
| 证券型代币 | [[securities/progmat-tokenized-securities-infrastructure|Progmat]]／私有区块链 | 视平台而定 T+0 ／ T+1 |
| 基金（共同基金） | 信托银行托管 | 视基金类型而定 T+N |
| 投资信托 DVP | [[banking/jasdec-settlement-operations]] | 通常 T+2 |

统一的交易场所／清算／结算示意图参见 [[securities/japan-market-infrastructure-map]]。

### 5. 监管与自律监管

监管治理市场行为、冲突解决与系统性风险监测。

| 层级 | 机构 | 职能 |
|---|---|---|
| 法律 | FIEA（金融商品取引法） | 治理证券、衍生品、中介机构、披露、市场行为。 |
| 监管 | 金融服务厅（FSA，金融庁） | 监管 FIEA 注册公司、JSCC、JASDEC、JPX-R。 |
| 交易所规制 | JPX-R（日本交易所自主规制法人） | 上市审查、市场监督、纪律处分。 |
| 自律监管（证券） | 日本证券业协会（JSDA） | 分销行为、场外报价系统、销售与劝诱规则。 |
| 证券投资者保护 | 日本投资者保护基金（JIPF） | 在交易商倒闭情形下保护客户资产。 |
| 反洗钱／反恐怖融资 | 国家警察厅下属的 FIU（JAFIC） | 可疑交易报告。 |
| 法定审计 | CPAAOB | 审计师监督。 |
| 税（NISA） | 国税厅 + 财务省 | NISA 框架。参见 [[securities/nisa-2024-flow]]。 |

## 市场参与者

| 类别 | 示例 |
|---|---|
| 发行人 | 上市公司（东证 Prime ~1,600, Standard ~1,500, Growth ~600）、JGB 发行人（财务省）、J-REIT 发起人、公司债发行人、ABS 发起人。 |
| 承销商 | [[securities-firms/nomura-hd|Nomura]], [[securities-firms/daiwa-sg|Daiwa]], [[securities-firms/mufg-mums|MUMSS]], [[securities-firms/smbc-nikko|SMBC Nikko]], [[megabanks/mizuho-bank|Mizuho Securities]], 外资投行。 |
| 券商（零售） | [[megabanks/sbi-hd|SBI Securities]], [[payment-firms/rakuten-fg|Rakuten Securities]], [[securities-firms/monex-group|Monex]], 松井证券, [[securities-firms/mufg-esmart-securities|MUFG eSmart]], [[securities-firms/paypay-securities|PayPay Securities]], GMO Click, DMM。参见 [[securities/japan-online-brokerage-competition]]。 |
| 资产管理公司 | [[asset-managers/asset-management-one|Asset Management One]]（瑞穗）、[[asset-managers/mufg-asset-management|MUFG Asset Management]]、野村资产管理、日兴资产管理、大和资产管理。参见 [[securities/japan-asset-manager-landscape-matrix]]。 |
| 信托银行（托管） | [[banking/japan-master-trust-and-custody-bank-landscape|Master Trust Bank of Japan, Japan Trustee Services Bank, etc.]] |
| 机构投资者 | GPIF、寿险公司、财险公司、日本央行（JGB 持有）、外国机构账户。 |
| 外国券商 | 摩根大通、高盛、花旗、摩根士丹利、德意志银行、法国巴黎银行、汇丰、瑞银、巴克莱。 |
| 做市商／流动性提供者 | 国内 + 外国量化／高频交易公司。参见 [[securities/japan-market-maker-and-liquidity-provider-landscape]]。 |
| 主经纪商 | [[securities/japan-prime-brokerage-and-institutional-financing]]。 |
| 自律组织 | JSDA、JPX-R。 |
| 中央银行 | 日本银行（BoJ）—— JGB 持有者、货币政策执行者、支付结算运营方。 |

## 跨境联结

| 联结 | 机制 |
|---|---|
| 外国股票持有 | 外国账户持有约 30% 的东证 Prime 流通股。 |
| 外国 JGB 持有 | 外国账户持有相当份额的 JGB 流通量。 |
| EMIR 对等 | JSCC 对欧盟对手方为 EMIR 对等。 |
| 第七章 / CFTC 对等 | JSCC 在 IRS 清算上具有 CFTC 替代合规／对等要素。 |
| ICSD 联结 | 外资银行作为 ICSD 运营，服务跨境结算。参见 [[foreign-financial-institutions/clearstream-banking-japan]]。 |
| 东证上市 ETF 交叉上市 | 交叉上市有限；多为相互认可。 |

## 公开数据来源

| 来源 | 所示内容 |
|---|---|
| JPX 统计 | 成交量、市值、上市公司数、衍生品成交量。 |
| JSCC 统计 | 清算量、成员数、违约基金规模。 |
| JASDEC 统计 | 存托持有量、结算量。 |
| JSDA 统计 | PTS 成交量、场外债券交易、承销排行榜。 |
| BoJ 统计 | JGB 持有量、货币市场数据、支付系统数据。 |
| MoF 统计 | JGB 发行日历、一级交易商流量。 |
| FSA 披露 | 监管评论、市场行为检查。 |
| EDINET | 上市公司财务报表披露。 |
| TDnet | 上市公司及时披露。 |

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
- [[financial-regulators/japan-exchange-group]]
- [[financial-regulators/japan-securities-finance]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/mufg-mums]]
- [[securities-firms/smbc-nikko]]
- [[INDEX|FinWiki index]]

## 来源

- 日本交易所集团（JPX）: 交易与市场数据界面；上市规则与统计。
- 金融服务厅（FSA）: FIEA、监管框架、上市审查规则。
- 日本银行（BoJ）: JGB 相关统计、支付结算运营、货币政策资料。
- 日本证券业协会（JSDA）: PTS 统计、承销排行榜、场外债券数据、自律规则。
- 日本证券清算公司（JSCC）: 清算规则、清算量统计、EMIR 对等文档。
- 日本证券存托中心（JASDEC）: 存托与结算统计。
- 财务省（MoF）: JGB 发行日历、一级交易商制度文档。
- 日本交易所自主规制法人（JPX-R）: 上市审查与市场监督资料。
