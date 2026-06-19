---
source: structured-finance/tmk-special-purpose-company-mechanics
source_hash: 28041f30b57616ff
lang: zh
status: machine
fidelity: ok
title: "TMK (特定目的会社) special-purpose-company mechanics"
translated_at: 2026-06-19T12:43:19.990Z
---

# TMK (特定目的会社) special-purpose-company mechanics

## TL;DR

**TMK — Tokutei Mokuteki Kaisha（特定目的会社，特定目的公司）** 是日本《资产流动化法（資産流動化法，1998）》下的 **法定证券化载体**——一种专为资产支持证券发行而设计的受监管 SPV 形式。与 [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK-GK private-placement workhorse]] 不同，TMK **受一部专门法律管辖**，而非一般《公司法》，需要向监管机构提交 **资产流动化计划（資産流動化計画）**，并可向投资者公开发行 **特定公司债（特定社債）**、**特定短期公司债** 以及 **优先出资（優先出資）**。其独特的 **税务处理** 是使 TMK 成为众多上市 CMBS、某些大规模房地产证券化交易及复杂多档结构首选载体的结构性特征：**向投资者的利润分配在 TMK 层面可予扣除**，在满足法定分配要求（通常为可分配利润的 90%+）的情况下实现有效的 **单层课税**。

对 FinWiki 而言，TMK 是日本证券化版图中的 **受监管法定 SPV 节点**。在 TMK 与 [[structured-finance/spv-tk-gk-vehicle-japan-tax|GK-TK]] 之间的选择是承销方的 **基础性证券化载体选择决策**——TMK 用于公开债发行、监管披露交易、上市 CMBS、复杂结构；GK-TK 用于私募、灵活的双边交易、组建更快的私募房地产证券化。TMK 也是 **与 [[real-estate-finance/j-reit-market-overview|J-REIT investment corporation (投資法人)]] 不同的载体**——两者都是税务穿透的房地产载体，但在不同法律下运作（《资产证券化法》对《投资信托法》）。

## Wiki 路径

本词条作为 **TMK 法定 SPV 节点** 归属于 [[structured-finance/INDEX|structured-finance index]]——即与 [[structured-finance/spv-tk-gk-vehicle-japan-tax|GK-TK]] 私募主力相对应的受监管证券化载体。请对照 [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK / SPC vehicle choice (Japan tax)]] 了解完整的载体选择树，对照 [[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]] 了解主要的 CMBS 用例，对照 [[structured-finance/japan-trust-beneficial-interest-vs-spv|Japan trust beneficial interest vs SPV]] 了解信托与 SPV 的替代方案，对照 [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]] 了解评级处理。跨领域：[[real-estate-finance/j-reit-market-overview|J-REIT market overview]] 用于投资法人替代方案，[[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS / RMBS securitization]] 用于跨领域房地产金融框架，[[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK bond real-estate SPV]] 用于替代性房地产 SPV 路径。

## 1. Legal basis — Act on Securitization of Assets

| Item | TMK statutory basis |
|---|---|
| Statute | 《资产流动化法》（資産流動化法，1998；经多次修订） |
| Successor to | 1998  SPC 法，随时间扩展以涵盖更广的资产类别 |
| Regulatory authority | FSA（设立登记、资产流动化计划备案、持续监管） |
| Vehicle name | Tokutei Mokuteki Kaisha（TMK，特定目的会社，特定目的公司） |
| Statutory purpose | 资产证券化（法定限定目的——TMK 不得从事证券化以外的一般经营活动） |
| Asset liquidation plan | 必需备案——载明拟证券化的资产、预期现金流、拟发行的证券、再分配机制 |

对活动的法定限制是一项关键特征：TMK 的破产隔离特性，部分来自其法定限制，该限制防止 TMK 在其资产证券化目的之外承担负债。

## 2. Issuance instruments

TMK 可向投资者发行多种类型的证券：

| Instrument | Description |
|---|---|
| **特定公司债（特定社債）** | 优先级债务；可公开发行；由资产流动化计划涵盖 |
| **特定短期公司债（特定短期社債）** | 同一制度下的短期债务 |
| **优先出资（優先出資）** | 类股权；投资者获得优先分配权；税务穿透（如满足法定条件） |
| **普通出资（普通出資）** | 次级股权；通常由发起人或 B 档投资者持有 |
| **特定贷款** | TMK 亦可在资产流动化计划下借款 |

特定公司债（优先级债务）与优先出资（夹层/股权档）的组合，使得能够构建出与国际证券化惯例相对应的 **多档资本结构**。

## 3. Tax treatment — the distinctive feature

| Element | TMK tax treatment |
|---|---|
| Corporate income tax | TMK 是一家公司；原则上需缴纳公司税 |
| Distribution deductibility | **向优先出资人与特定公司债持有人的分配（利息）在 TMK 层面可予扣除** |
| Effective pass-through | 若分配超过可分配利润的 90%+（法定条件），TMK 层面的剩余应税所得极少——实现有效单层课税 |
| Statutory conditions for pass-through | 公开发行/合格机构投资者发行条件、分配比率条件、资产管理限制条件 |
| Comparison to GK-TK | GK-TK 通过 TK 叠加实现穿透；TMK 通过直接的分配可扣除性实现穿透 |
| Comparison to J-REIT | J-REIT（投资法人）通过《投资信托法》下类似的 90% 分配规则实现穿透 |
| Withholding tax | 向投资者的分配可能因投资者分类而需缴纳预提税 |

**分配可扣除性** 机制使 TMK 在经济上表现得像一个穿透载体，同时在法律上仍为一家公司。这是用于公开债发行的最干净的穿透机制。

## 4. Comparison with GK-TK

| Dimension | TMK | [[structured-finance/spv-tk-gk-vehicle-japan-tax|GK-TK]] |
|---|---|---|
| Statutory basis | 《资产流动化法》 | 《公司法》（GK）+《商法》（TK） |
| Formation | 资产流动化计划备案；FSA 登记 | 更简单——设立 GK，签署 TK 合同 |
| Public bond issuance | 可以——特定公司债可公开发行 | 有限——通常为私募 |
| Equity tranching | 可以——优先 + 普通出资 | TK 叠加向多名 TK 投资者提供穿透 |
| Tax pass-through | 在 TMK 层面分配可扣除 | 在 GK 层面 TK 分配可扣除 |
| Activity restriction | 法定限于证券化目的 | GK 在法定上灵活；TK 目的由合同设定 |
| Bankruptcy remoteness | 强——法定与合同两个层面 | 仅合同层面 |
| Typical use | 公开债 CMBS、大型/复杂交易、上市证券交易 | 私募房地产证券化、双边交易、组建更快的私募发行 |
| Speed of formation | 较慢（资产流动化计划备案） | 较快 |
| Disclosure burden | 较高（FSA 登记 + 持续披露） | 较低（私募披露制度） |

## 5. TMK in current J-REIT structure

一个常见的混淆是 TMK 与 J-REIT 之间的关系。两者都是税务穿透的房地产载体，但在不同法律下运作：

| Vehicle | Statute | Form |
|---|---|---|
| **TMK** | 《资产证券化法》 | 特定目的公司（公司） |
| **[[real-estate-finance/j-reit-market-overview|J-REIT investment corporation]]** | 《投资信托法》（投資信託法） | 投资法人（投資法人） |

在 **当前 J-REIT 实务** 中，TMK 有时被用于 **子载体层面**：

| Use case | Description |
|---|---|
| J-REIT acquires TMK preferred contributions | 部分 J-REIT 持有 TMK 优先出资而非直接拥有房地产，尤其用于某些资产类别的税务高效结构化 |
| Sponsor-side TMK as warehouse | 发起人可在 J-REIT 收购前使用 TMK 仓储已稳定化资产 |
| TMK for non-J-REIT-eligible assets | 不符合 J-REIT 标准的资产类别，可由机构投资者以 TMK 结构持有 |
| TMK for foreign-investor real-estate | 部分外资 LP 房地产投资为税务/预提税处理而使用 TMK 结构 |

TMK 与 J-REIT 的互动对于理解更广泛的日本房地产载体生态系统至关重要；TMK 是一个可以置于 J-REIT 投资法人内部或与之并列的构建模块。

## 6. TMK in listed CMBS

| TMK CMBS feature | Reading |
|---|---|
| Issuer entity | TMK（《资产证券化法》下的特定目的公司） |
| Issuance | 特定公司债公开发行；按优先级分档 |
| Collateral | 商业房地产抵押贷款，或商业房地产的信托受益权 |
| Asset liquidation plan | 向 FSA 备案；规定资产现金流分配机制 |
| Rating | 通常为国内机构（[[financial-regulators/jcr|JCR]] / [[financial-regulators/rating-and-investment|R&I]]）；面向外国投资者的交易则为全球机构（[[JapanFG/sp-global-ratings-japan|S&P]] / [[JapanFG/moodys-japan|Moody's]]） |
| Investor base | 寿险公司、资产管理公司、巨型银行 ALM 账户、外国机构投资者 |
| Servicer / trustee | 信托银行或专业服务机构角色 |

TMK 是日本 **单一借款人上市 CMBS** 的主导结构（按 [[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]] 的 2008  后 CMBS 形式）。公开债发行能力与税务穿透的组合，使 TMK 成为上市分档 CMBS 交易的天然选择。

## 7. TMK governance and ongoing obligations

| Obligation | Description |
|---|---|
| Asset liquidation plan compliance | 活动限于资产流动化计划中所述者 |
| Director composition | TMK 设有具法定职责的董事；通常为独立的专业董事 |
| Auditor | 法定监事或审计法人 |
| Ongoing disclosure | 就资产表现及债券状况定期向投资者及 FSA 报告 |
| Distribution mechanics | 按资产流动化计划分配；法定税务穿透条件 |
| Wind-down | 当资产完全摊还或出售时，TMK 进行清盘 |

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK / SPC vehicle choice (Japan tax)]]
- [[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]]
- [[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv|Japan trust beneficial interest vs SPV]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/japan-covered-bond-mufg-smbc|Japanese megabank covered bonds]]
- [[structured-finance/japan-green-securitization|Japan green securitization]]
- [[structured-finance/synthetic-securitization-japan-bank-rwa-relief|synthetic securitization Japan bank RWA relief]]
- [[real-estate-finance/j-reit-market-overview|J-REIT market overview]]
- [[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS and RMBS securitization]]
- [[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK bond real-estate SPV]]
- [[real-estate-finance/INDEX|real-estate-finance index]]
- [[financial-regulators/jcr|JCR]] · [[financial-regulators/rating-and-investment|R&I]]
- [[INDEX|FinWiki index]]

## Sources

- Act on Securitization of Assets (資産流動化法) — public legislative text (Japan Diet).
- FSA — https://www.fsa.go.jp/en/
- JSDA — https://www.jsda.or.jp/en/
- JCR — https://www.jcr.co.jp/en/
- R&I — https://www.r-i.co.jp/en/
- ARES — https://www.ares.or.jp/en/
