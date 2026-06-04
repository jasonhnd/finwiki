---
source: structured-finance/tmk-special-purpose-company-mechanics
source_hash: 821e30ec68589e3c
lang: zh
status: machine
fidelity: ok
title: "TMK（特定目的会社）特定目的公司机制"
translated_at: 2026-06-01T04:15:40.143Z
---
# TMK（特定目的会社）特定目的公司机制

## TL;DR

**TMK — Tokutei Mokuteki Kaisha（特定目的会社, Specified-Purpose Company）** 是日本 **Act on Securitization of Assets（資産流動化法, 1998）** 下的**法定证券化载体**，即专门为资产支持证券发行设计的受监管 SPV 形式。不同于 [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK-GK private-placement workhorse]]，TMK **受专门法律管辖**，而不是一般 Companies Act；它必须向监管机构提交 **asset liquidation plan（資産流動化計画）**，并可以向投资者公开发行 **specified bonds（特定社債）**、**specified short-term bonds** 和 **preferred contributions（優先出資）**。独特的**税务处理**是 TMK 成为许多上市 CMBS、部分大型房地产证券化交易以及复杂多 tranche 结构偏好载体的结构性特征：**向投资者进行的利润分配可在 TMK 层面扣除**，如果满足法定分配要求（通常为可分配利润的 90%+），即可实现有效的**单层税收**。

对 FinWiki 而言，TMK 是日本证券化格局中的**受监管法定 SPV 节点**。TMK 与 [[structured-finance/spv-tk-gk-vehicle-japan-tax|GK-TK]] 的选择，是 arrangers 的**基础证券化载体选择决策** —— TMK 用于公开债券发行、监管披露交易、上市 CMBS、复杂结构；GK-TK 用于 private-placement、灵活双边交易、快速设立的私募房地产证券化。TMK 也不同于 [[real-estate-finance/j-reit-market-overview|J-REIT investment corporation (投資法人)]] —— 两者都是税务 pass-through 的房地产载体，但适用不同法律（Asset Securitization Act vs Investment Trust Act）。

## Wiki 路由

本条目位于 [[structured-finance/INDEX|structured-finance index]] 之下，是 **TMK statutory-SPV 节点** —— 对应 [[structured-finance/spv-tk-gk-vehicle-japan-tax|GK-TK]] 这一 private-placement 主力结构的受监管证券化版本。可对照 [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK / SPC vehicle choice (Japan tax)]] 阅读完整载体选择树，对照 [[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]] 阅读主要 CMBS 用例，对照 [[structured-finance/japan-trust-beneficial-interest-vs-spv|Japan trust beneficial interest vs SPV]] 阅读 trust-vs-SPV 替代方案，并对照 [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]] 阅读评级处理。跨领域：[[real-estate-finance/j-reit-market-overview|J-REIT market overview]] 是投资法人替代方案，[[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS / RMBS securitization]] 是跨领域房地产金融框架，[[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK bond real-estate SPV]] 是替代房地产 SPV 路径。

## 1. 法律基础 — Act on Securitization of Assets

| 项目 | TMK 法定基础 |
|---|---|
| 法律 | Act on Securitization of Assets（資産流動化法, 1998；多次修订） |
| 前身 | 1998 SPC Act，后续逐步扩展至更广泛资产类别 |
| 监管机构 | FSA（设立登记、资产流动化计划提交、持续监管） |
| 载体名称 | Tokutei Mokuteki Kaisha（TMK, 特定目的会社, Specified-Purpose Company） |
| 法定目的 | 资产证券化（法定限制目的 —— TMK 不得从事证券化以外的一般商业活动） |
| 资产流动化计划 | 必需提交文件 —— 描述拟证券化资产、预期现金流、将发行证券、再分配机制 |

活动的法定限制是关键特征：TMK 的破产隔离特性部分来自法定限制，该限制防止 TMK 在资产证券化目的之外产生负债。

## 2. 发行工具

TMK 可以向投资者发行多种证券：

| 工具 | 说明 |
|---|---|
| **Specified bonds（特定社債）** | Senior debt；可公开发行；受资产流动化计划覆盖 |
| **Specified short-term bonds（特定短期社債）** | 同一制度下的短期限债务 |
| **Preferred contributions（優先出資）** | 类权益；投资者获得优先分配权；税务 pass-through（若满足法定条件） |
| **Common contributions（普通出資）** | 次级权益；通常由发起人或 B-piece 投资者持有 |
| **Specified loans** | TMK 也可在资产流动化计划下借款 |

Specified bonds（senior debt）与 preferred contributions（mezzanine/equity tranches）的组合，使 **multi-tranche capital-structure** 能够映射国际证券化惯例。

## 3. 税务处理 — 独特特征

| 要素 | TMK 税务处理 |
|---|---|
| 公司所得税 | TMK 是公司；原则上缴纳公司税 |
| 分配可扣除性 | **向 preferred contributors 的分配以及向 specified-bond holders 的分配（利息）可在 TMK 层面扣除** |
| 有效 pass-through | 若分配超过可分配利润的 90%+（法定条件），TMK 层面的剩余应税收入最小化 —— 有效单层税收 |
| pass-through 法定条件 | 公开发行 / 合格机构投资者发行条件、分配比例条件、资产管理限制条件 |
| 与 GK-TK 比较 | GK-TK 通过 TK overlay 实现 pass-through；TMK 通过直接分配扣除实现 pass-through |
| 与 J-REIT 比较 | J-REIT（投资法人）通过 Investment Trust Act 下类似的 90% 分配规则实现 pass-through |
| 预提税 | 向投资者的分配可能因投资者分类而需预提税 |

**分配可扣除性**机制使 TMK 在经济上表现得像 pass-through 载体，同时在法律上仍是公司。这是公开债券发行最干净的 pass-through 机制。

## 4. 与 GK-TK 比较

| 维度 | TMK | [[structured-finance/spv-tk-gk-vehicle-japan-tax|GK-TK]] |
|---|---|---|
| 法定基础 | Act on Securitization of Assets | Companies Act（GK）+ Commercial Code（TK） |
| 设立 | 提交资产流动化计划；FSA 注册 | 更简单 —— 设立 GK，签署 TK 合同 |
| 公开债券发行 | 可以 —— specified bonds 可公开发行 | 有限 —— 通常为 private placement |
| 权益分层 | 可以 —— preferred + common contributions | TK-overlay 为多个 TK 投资者提供 pass-through |
| 税务 pass-through | TMK 层面的分配扣除 | GK 层面的 TK 分配扣除 |
| 活动限制 | 法定限制为证券化目的 | GK 法定上灵活；TK 目的由合同设定 |
| 破产隔离 | 强 —— 法定与合同双层 | 仅合同层 |
| 典型用途 | 公开债券 CMBS、大型 / 复杂交易、上市证券交易 | 私募房地产证券化、双边交易、快速设立的 private placements |
| 设立速度 | 较慢（提交资产流动化计划） | 较快 |
| 披露负担 | 较高（FSA 注册 + 持续披露） | 较低（private-placement 披露制度） |

## 5. 当前 J-REIT 结构中的 TMK

一个常见混淆是 TMK 与 J-REIT 的关系。两者都是税务 pass-through 的房地产载体，但适用不同法律：

| 载体 | 法律 | 形式 |
|---|---|---|
| **TMK** | Asset Securitization Act | Specified-Purpose Company（公司） |
| **[[real-estate-finance/j-reit-market-overview|J-REIT investment corporation]]** | Investment Trust Act（投資信託法） | Investment corporation（投資法人） |

在**当前 J-REIT 实务**中，TMK 有时用于**子载体层面**：

| 用例 | 说明 |
|---|---|
| J-REIT 取得 TMK preferred contributions | 部分 J-REIT 持有 TMK preferred contributions，而非直接持有房地产，尤其用于特定资产类别的税务高效结构 |
| Sponsor-side TMK 作为 warehouse | Sponsor 可使用 TMK 在 J-REIT 收购前仓储稳定资产 |
| TMK 用于不符合 J-REIT 条件的资产 | 不符合 J-REIT 标准的资产类别可由机构投资者通过 TMK 结构持有 |
| TMK 用于外国投资者房地产 | 部分外国 LP 房地产投资使用 TMK 结构处理税务 / 预提税 |

TMK-J-REIT 的互动对于理解更广泛的日本房地产载体生态很重要；TMK 是可以置于 J-REIT 投资法人内部或旁边的构件。

## 6. 上市 CMBS 中的 TMK

| TMK CMBS 特征 | 解读 |
|---|---|
| 发行实体 | TMK（Asset Securitization Act 下的 specified-purpose company） |
| 发行 | Specified bonds 公开发行；按优先级分层 |
| 抵押品 | 商业房地产支持的抵押贷款，或商业房地产信托受益权 |
| 资产流动化计划 | 向 FSA 提交；规定资产现金流分配机制 |
| 评级 | 通常为国内机构（[[financial-regulators/jcr|JCR]] / [[financial-regulators/rating-and-investment|R&I]]）；面向外国投资者的交易使用全球机构（[[JapanFG/sp-global-ratings-japan|S&P]] / [[JapanFG/moodys-japan|Moody's]]） |
| 投资者基础 | 寿险公司、资产管理人、megabank ALM 账簿、外国机构投资者 |
| Servicer / trustee | 信托银行或专业 servicer 角色 |

TMK 是日本**单一借款人上市 CMBS** 的主导结构（后 2008  CMBS 形式，按 [[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]]）。公开债券发行能力与税务 pass-through 的组合，使 TMK 成为上市分层 CMBS 交易的自然选择。

## 7. TMK 治理与持续义务

| 义务 | 说明 |
|---|---|
| 资产流动化计划合规 | 活动限于资产流动化计划中描述的事项 |
| 董事构成 | TMK 有具法定角色的 directors；通常为独立专业董事 |
| 审计人 | 法定审计人或审计法人 |
| 持续披露 | 定期向投资者和 FSA 报告资产表现与债券状态 |
| 分配机制 | 根据资产流动化计划分配；满足法定税务 pass-through 条件 |
| 清盘 | 资产完全摊销或出售后，TMK 结束运行 |

## 相关

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

## 来源

- Act on Securitization of Assets（資産流動化法）— public legislative text (Japan Diet).
- FSA — https://www.fsa.go.jp/en/
- JSDA — https://www.jsda.or.jp/en/
- JCR — https://www.jcr.co.jp/en/
- R&I — https://www.r-i.co.jp/en/
- ARES — https://www.ares.or.jp/en/
