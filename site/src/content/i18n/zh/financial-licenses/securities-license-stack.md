---
source: financial-licenses/securities-license-stack
source_hash: 78a48826b9016dd6
lang: zh
status: machine
fidelity: ok
title: "日本证券牌照堆栈"
translated_at: 2026-06-15T03:48:21.829Z
---

# 日本证券牌照堆栈

## 概述

日本的证券活动并非由单一的通用「broker 牌照」所控制。实际的堆栈由《金融商品交易法》（FIEA）、FSA / 地方财务局登记一览、JSDA 自律监管、交易所 / PTS 参与规则、清算与结算的接入，以及客户保护义务共同构建而成。

当某个公司页面需要说明它实际扮演的是何种受监管的证券角色时，请将本页面与 [[financial-licenses/INDEX|JapanFG legal / financial licenses]]、姊妹页面 [[financial-licenses/payment-license-stack|payment license stack]] 与 [[financial-licenses/bank-license-and-baas-boundary|bank-license / BaaS boundary]]、[[securities/INDEX|securities domain]]、[[securities/financial-instruments-business-operators-japan-index|FIEA operator registry index]] 及 [[financial-regulators/jsda|JSDA]] 一同使用。

本页面是一条公开来源的研究路径，而非法律意见。一个实际运行的产品或交易仍应对照最新的 FSA 一览、e-Gov 法律文本、JSDA 规则、监管指引，以及法律顾问 / 监管机构的确认加以核查。

## 真相来源堆栈

| Layer | Primary source | What it proves | What it does not prove |
|---|---|---|---|
| Statute | FIEA 及相关命令的 e-Gov 法律文本 | 当前的法律类别与已定义术语。 | 某家具名公司今天是否已登记。 |
| Registration | FSA "免許・許可・登録等を受けている事業者一覧" | 某家公司是否出现在所核查的官方登记类别中，以及该登记的 as-of 日期。 | 完整的产品范围或商业规模。 |
| Supervisory view | FSA 面向金融商品交易业者的监管指引 | 关于业务行为、内部控制、监控、客户保护与市场中介行为的公开监管预期。 | 监管机构对某一具体产品的私下意见。 |
| Self-regulation | [[financial-regulators/jsda|JSDA]] 会员名单与规则 | 该公司是否处于交易商自律监管路径，以及哪些业务行为 / 承销 / 招揽规则可能相关。 | 法定牌照本身。 |
| Venue / infrastructure | [[securities/tokyo-stock-exchange|TSE]], [[securities/japannext-securities|Japannext]], [[securities/osaka-digital-exchange|ODX]], [[securities/japan-securities-clearing-corp|JSCC]], [[securities/japan-securities-depository-center|JASDEC]] | 交易、清算、结算与 PTS 路径。 | broker 登记或适当性。 |
| Product disclosure | 公司页面、招股说明书、EDINET / TDnet、官方产品页面 | 该公司当前是否在销售该产品，以及附带哪些披露。 | 一项笼统的牌照结论。 |

在 2026-05-22 核查的 FSA 牌照门户列出了金融商品交易业者、登记金融机构、金融商品中介业者、证券金融公司、清算、存管及相关登记路径，并附有当前的 as-of 日期。专设的 FinWiki 登记管控页面将 1,945 行的 FSA 金融商品交易业者总体保持在摘要层级，而非复制官方工作簿。

## 制度地图

| Activity | Typical legal route | FinWiki reading |
|---|---|---|
| 证券经纪 / 自营 / 承销 | 第一种金融商品交易业者 | [[securities-firms/nomura-hd|Nomura]]、[[securities-firms/daiwa-sg|Daiwa Securities Group]]、[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]] 及 [[securities-firms/mufg-mums|MUMSS]] 等主要证券公司的核心路径。 |
| 基金权益 / 某些私募 / 第二种产品 | 第二种金融商品交易业者 | 常出现在基金分销、私募、众筹与结构化投资路径中；不要将其等同于完整的零售股票经纪。 |
| 投资咨询 / 代理 | 投资咨询与代理业 | 解释咨询、基金选择与财富建议的边界；产品执行仍可能需要另一条路径。 |
| 投资运用 | 投资运用业 | [[asset-managers/nomura-asset-management|Nomura Asset Management]]、[[asset-managers/asset-management-one|Asset Management One]] 及 [[asset-managers/mufg-asset-management|MUFG Asset Management]] 等资产管理人的核心路径。 |
| 银行或信托银行的证券业务 | 登记金融机构 | 银行可通过登记开展特定的证券相关业务，但其解读不同于证券子公司的第一种路径。 |
| App / 平台引流与招揽支持 | 金融商品中介或金融服务中介路径 | 对嵌入式金融与 App 分销有用。须确认主体金融商品业者与产品范围。 |
| PTS / 场外交易场所 | PTS 核准与第一种 / 场所特定路径 | 与 [[securities/japannext-securities|Japannext]] 及 [[securities/osaka-digital-exchange|ODX]] 相关。 |
| 电子公开发行 / 证券型代币处理 | 适用时的 FIEA 电子发行与代币化证券条目 | 应作为证券登记与产品披露问题来处理，而不仅仅是 fintech UX 问题。 |
| 证券金融 | 证券金融公司 | 与 [[financial-regulators/japan-securities-finance|Japan Securities Finance]] 及保证金 / 借贷管路相关。 |
| 清算 / 存管 | 清算机构 / 存管机构 | 与 [[securities/japan-securities-clearing-corp|JSCC]] 及 [[securities/japan-securities-depository-center|JASDEC]] 相关。 |

## 实用决策树

| Question | First place to check | Second check |
|---|---|---|
| 这家公司是证券公司吗？ | FSA 金融商品交易业者一览。 | JSDA 会员名单与公司披露。 |
| 这是在销售投资产品的银行吗？ | FSA 登记金融机构一览。 | 银行披露、JSDA 特别会员路径、产品文件。 |
| 这只是一个 App 前端吗？ | 中介 / 金融服务中介登记。 | 主体业者、资产托管、指令流。 |
| 这是承销商吗？ | 第一种 FIBO 资格与 JSDA 承销规则。 | 招股说明书 / EDINET / JPX 上市文件。 |
| 这是投资咨询吗？ | 投资咨询 / 代理登记。 | 合同形式、报酬，以及是否提供全权委托管理。 |
| 这是投资运用吗？ | 投资运用登记。 | 基金文件、受托人 / 托管人结构与产品披露。 |
| 这是 PTS 吗？ | FSA 登记与场所核准。 | 场所规则手册、JSDA / 交易所数据、清算 / 结算路径。 |
| 这与证券型代币相关吗？ | FIEA 代币化证券条目与产品分类。 | 该代币是电子支付手段、加密资产，还是 FIEA 证券。 |

## JapanFG 相关性

同一段客户旅程可以包含多个受监管的角色：

- [[securities-firms/sbi-securities|SBI Securities]] 与 [[securities-firms/rakuten-securities|Rakuten Securities]] 将在线经纪、NISA 获客、积分 / ecosystem 联动，以及 SOR / PTS 执行政策用作竞争杠杆。
- [[securities-firms/mizuho-securities|Mizuho Securities]]、[[securities-firms/mufg-mums|MUMSS]] 与 [[securities-firms/smbc-nikko|SMBC Nikko]] 处于大型银行集团之内，因此实体分析须将银行资产负债表活动与证券子公司活动分离。
- [[securities-firms/paypay-securities|PayPay Securities]] 及 App 嵌入式 broker 需要格外注意：该 App 究竟是 broker、是中介，还是连接到某个 broker 的分销界面。
- [[securities-firms/monex-group|Monex Group]]、[[securities-firms/gmo-click-securities|GMO Click Securities]] 与 [[securities-firms/dmm-com-securities|DMM.com Securities]] 常处于加密、FX、CFD 与衍生品的边界附近。须核查该产品是现货证券、衍生品、加密资产，还是另一受监管类别。
- [[financial-regulators/jsda|JSDA]] 是支撑招揽、承销、广告、客户管理与场外业务实践的自律监管层。

## 边界情形

| Boundary | Why it is easy to misread | FinWiki treatment |
|---|---|---|
| 牌照 vs 产品供应 | 一家公司可能就某个类别已登记，但并未积极销售某一具体产品。 | 分别记录登记类别与实际公开的产品。 |
| 银行 vs 证券子公司 | 一个集团品牌可能同时展示银行与证券服务。 | 分别链接集团页面、银行页面与证券页面。 |
| 咨询 vs 执行 | Robo / 咨询 UX 可能模糊咨询、代理与全权委托管理。 | 分别核查咨询 / 代理与投资运用登记。 |
| PTS vs broker SOR | 客户看到的是一张委托单，但执行可能路由至 TSE、PTS 或内部化的 OTC 流。 | 链接至 [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] 与场所页面。 |
| 证券型代币 vs 加密资产 | 一个代币可被作为数字化产品来营销，但法律分类会改变其制度。 | 当其代表证券权利时，首先路由至 FIEA；就加密资产交易所资格路由至 [[exchanges/INDEX|exchanges]]；当其是电子支付手段或 stablecoin 而非证券时，路由至 [[financial-licenses/payment-license-stack|Japan payment license stack]]。 |
| 「未上市」vs「未持牌」 | 在某份名单中找不到某家公司，可能意味着类别错误或拼写陈旧。 | 应记录「截至该日期在所核查来源中未找到」，而非断言其未持牌。 |

## 研究清单

1. 从公司法人名称及（在可得时）法人编号开始。
2. 核查与该活动相匹配的 FSA 牌照门户类别。
3. 如与证券相关，核查 FSA 金融商品交易业者一览与登记金融机构一览。
4. 当交易商自律监管相关时，核查 JSDA 会员类别。
5. 就登记编号、主体业者、客户资产隔离与服务范围核查公司披露。
6. 就承销，核查 JPX 上市材料、EDINET / 招股说明书材料与 JSDA 承销规则。
7. 就 PTS / SOR，核查场所规则与执行政策，而不仅仅是费率营销。
8. 在撰写结论时附上 as-of 日期与来源类别。

## 相关

- [[financial-licenses/INDEX]]
- [[securities/INDEX]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[securities/japan-online-brokerage-competition]]
- [[securities/japan-underwriting-market-structure]]
- [[securities/japan-market-infrastructure-map]]
- [[financial-regulators/jsda]]
- [[securities-firms/sbi-securities]]
- [[securities-firms/rakuten-securities]]
- [[securities-firms/mizuho-securities]]
- [[INDEX|FinWiki index]]

## 来源

- FSA: "免許・許可・登録等を受けている事業者一覧".
- FSA: "金融商品取引業者登録一覧", as of 2026-04-30 on the checked FSA portal.
- FSA: comprehensive supervisory guidelines for financial instruments business operators.
- JSDA: organization overview, member list, and rules pages.
- e-Gov law search.
