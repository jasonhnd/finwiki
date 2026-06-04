---
source: japanfg/legal-financial-licenses/securities-license-stack
source_hash: a57653de86a1cac5
lang: zh
status: machine
fidelity: ok
title: "日本证券牌照栈"
translated_at: 2026-05-31T23:59:49.328Z
---
# 日本证券牌照栈

## Overview

日本证券活动并不是由一个泛称的“broker license”控制。实际栈由《金融商品交易法》(FIEA)、FSA / 地方财务局注册列表、JSDA 自律监管、交易所 / PTS 参与规则、清算和结算接入以及客户保护义务共同构成。

当公司页面需要说明其实际扮演的是哪一种受监管证券角色时，可将本页与 [[financial-licenses/INDEX|JapanFG legal / financial licenses]]、[[securities/INDEX|securities domain]]、[[securities/financial-instruments-business-operators-japan-index|FIEA operator registry index]] 和 [[financial-regulators/jsda|JSDA]] 一起使用。

本页是基于公开来源的研究路径，不是法律意见。实时产品或交易仍需对照最新 FSA 列表、e-Gov 法律文本、JSDA 规则、监管指南，以及律师 / 监管确认。

## Source-of-Truth Stack

| Layer | Primary source | What it proves | What it does not prove |
|---|---|---|---|
| Statute | FIEA 及相关政令的 e-Gov 法律文本 | 当前法律类别和定义术语。 | 某一具名公司今天是否已注册。 |
| Registration | FSA “获得免许、许可、注册等的事业者列表” | 公司是否出现在所检查官方注册类别中，以及该注册表的 as-of date。 | 完整产品范围或商业规模。 |
| Supervisory view | FSA 面向金融商品交易业者的综合监管指南 | 对行为、内部控制、监控、客户保护和市场中介行为的公开监管期待。 | 针对具体产品的私人监管意见。 |
| Self-regulation | [[financial-regulators/jsda|JSDA]] member lists and rules | 公司是否在 dealer 自律监管路径中，以及哪些行为 / 承销 / 募集规则可能相关。 | 法定牌照本身。 |
| Venue / infrastructure | [[securities/tokyo-stock-exchange|TSE]], [[securities/japannext-securities|Japannext]], [[securities/osaka-digital-exchange|ODX]], [[securities/japan-securities-clearing-corp|JSCC]], [[securities/japan-securities-depository-center|JASDEC]] | 交易、清算、结算和 PTS 路径。 | Broker 注册或适当性。 |
| Product disclosure | Firm pages, prospectuses, EDINET / TDnet, official product pages | 公司当前是否销售该产品，以及附带哪些披露。 | 一般性牌照结论。 |

FSA 牌照门户在 2026-05-22 检查时列出了金融商品交易业者、注册金融机构、金融商品中介业者、证券金融公司、清算、存管以及相关注册路径，并带有当前 as-of dates。专用的 FinWiki registry-control 页面在摘要层面维护 FSA 金融商品交易业者 1,945 行总体，而不是复制官方 workbook。

## Regime Map

| Activity | Typical legal route | FinWiki reading |
|---|---|---|
| 证券经纪 / 自营 / 承销 | 第一类金融商品交易业者 | 主要证券公司的核心路径，例如 [[securities-firms/nomura-hd|Nomura]]、[[securities-firms/daiwa-sg|Daiwa Securities Group]]、[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]] 和 [[securities-firms/mufg-mums|MUMSS]]。 |
| 基金权益 / 某些私募 / 第二类产品 | 第二类金融商品交易业者 | 常见于基金销售、私募、众筹和结构化投资路径；不要等同于完整零售股票经纪。 |
| 投资建议 / 代理 | 投资助言・代理业 | 说明咨询、基金筛选和财富建议边界；产品执行仍可能需要其他路径。 |
| 投资管理 | 投资运用业 | [[asset-managers/nomura-asset-management|Nomura Asset Management]]、[[asset-managers/asset-management-one|Asset Management One]]、[[asset-managers/mufg-asset-management|MUFG Asset Management]] 等资产管理公司的核心路径。 |
| 银行或信托银行证券业务 | 注册金融机构 | 银行可通过注册从事特定证券相关业务，但其解读不同于证券子公司的第一类路径。 |
| App / 平台转介和募集支持 | 金融商品中介业者或金融服务中介路径 | 对 embedded finance 和 app 分销有用。确认 principal financial instruments operator 和产品范围。 |
| PTS / 场外交易场所 | PTS approval and Type I / venue-specific route | 与 [[securities/japannext-securities|Japannext]] 和 [[securities/osaka-digital-exchange|ODX]] 相关。 |
| 电子公开募集 / security token handling | FIEA electronic offering and tokenized securities rows where applicable | 应作为证券注册和产品披露问题处理，而不只是 fintech UX 问题。 |
| 证券金融 | 证券金融公司 | 与 [[financial-regulators/japan-securities-finance|Japan Securities Finance]] 以及保证金 / 借贷 plumbing 相关。 |
| 清算 / 存管 | 清算机构 / 存管机构 | 与 [[securities/japan-securities-clearing-corp|JSCC]] 和 [[securities/japan-securities-depository-center|JASDEC]] 相关。 |

## Practical Decision Tree

| Question | First place to check | Second check |
|---|---|---|
| 这家公司是证券公司吗？ | FSA 金融商品交易业者列表。 | JSDA member list and company disclosure。 |
| 这是银行在销售投资产品吗？ | FSA 注册金融机构列表。 | 银行披露、JSDA special-member route、产品文件。 |
| 这只是 app 前端吗？ | 中介 / 金融服务中介注册。 | Principal operator、资产保管、指令流。 |
| 这是承销商吗？ | Type I FIBO status and JSDA underwriting rules。 | 招股书 / EDINET / JPX 上市文件。 |
| 这是投资建议吗？ | 投资助言 / 代理注册。 | 合同形式、报酬，以及是否提供 discretionary management。 |
| 这是投资管理吗？ | 投资运用注册。 | 基金文件、受托人 / 保管结构和产品披露。 |
| 这是 PTS 吗？ | FSA 注册和场所批准。 | Venue rulebook、JSDA / exchange data、清算 / 结算路径。 |
| 这与 security token 有关吗？ | FIEA tokenized securities rows and product classification。 | 该 token 是电子支付手段、crypto asset，还是 FIEA security。 |

## JapanFG Relevance

同一个客户旅程可能包含多个受监管角色：

- [[securities-firms/sbi-securities|SBI Securities]] 和 [[securities-firms/rakuten-securities|Rakuten Securities]] 将在线经纪、NISA 获客、积分 / 生态系统联动、SOR / PTS 执行政策作为竞争杠杆。
- [[securities-firms/mizuho-securities|Mizuho Securities]]、[[securities-firms/mufg-mums|MUMSS]] 和 [[securities-firms/smbc-nikko|SMBC Nikko]] 位于 megabank 集团内部，因此实体分析要将银行资产负债表活动与证券子公司活动分开。
- [[securities-firms/paypay-securities|PayPay Securities]] 和 app-embedded brokers 需要特别注意 app 是 broker、中介，还是连接到 broker 的 distribution surface。
- [[securities-firms/monex-group|Monex Group]]、[[securities-firms/gmo-click-securities|GMO Click Securities]] 和 [[securities-firms/dmm-com-securities|DMM.com Securities]] 常处在 crypto、FX、CFD 和衍生品边界附近。检查产品是现货证券、衍生品、crypto asset，还是其他监管类别。
- [[financial-regulators/jsda|JSDA]] 是募集、承销、广告、客户管理和场外实务背后的自律监管层。

## Boundary Cases

| Boundary | Why it is easy to misread | FinWiki treatment |
|---|---|---|
| License vs product offering | 公司可能注册了某一类别，但并未实际销售某个具体产品。 | 分开记录注册类别和实际公开产品。 |
| Bank vs securities subsidiary | 集团品牌可能同时展示银行和证券服务。 | 分别链接集团页面、银行页面和证券页面。 |
| Advice vs execution | Robo / advisory UX 可能模糊助言、代理和 discretionary management。 | 分别检查助言 / 代理和投资运用注册。 |
| PTS vs broker SOR | 客户看到的是一个下单票据，但执行可能被路由至 TSE、PTS 或内部化 OTC flow。 | 链接到 [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] 和场所页面。 |
| Securities token vs crypto asset | Token 可被作为 digital 产品销售，但法律分类会改变制度。 | 当它代表证券权利时先路由到 FIEA；对于 crypto-asset exchange status，路由到 [[exchanges/INDEX|exchanges]]。 |
| "Unlisted" vs "unlicensed" | 在一个列表中找不到公司，可能只是类别错误或名称拼写过时。 | 记录“截至检查日未在所查来源中发现”，而不是断言无牌。 |

## Research Checklist

1. 从公司法定名称和法人编号（如可得）开始。
2. 检查与活动相匹配的 FSA 牌照门户类别。
3. 如果与证券相关，检查 FSA 金融商品交易业者列表和注册金融机构列表。
4. 当 dealer 自律监管重要时，检查 JSDA member category。
5. 检查公司披露中的注册编号、principal operator、客户资产分离和服务范围。
6. 对承销，检查 JPX 上市材料、EDINET / 招股书材料和 JSDA 承销规则。
7. 对 PTS / SOR，检查场所规则和执行政策，而不只是费率营销。
8. 写结论时注明 as-of date 和来源类别。

## Related

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

## Sources

- FSA: “获得免许、许可、注册等的事业者列表”。
- FSA: “金融商品交易业者注册列表”，as of 2026-04-30 on the checked FSA portal。
- FSA: comprehensive supervisory guidelines for financial instruments business operators。
- JSDA: organization overview, member list, and rules pages。
- e-Gov law search。
