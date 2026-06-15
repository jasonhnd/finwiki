---
source: financial-licenses/japan-trust-business-license-stack
source_hash: a96a09e5d8bdb73e
lang: zh
status: machine
fidelity: ok
title: "日本信托业务牌照体系"
translated_at: 2026-06-15T13:28:35.933Z
---

# 日本信托业务牌照体系

## 概述

日本的信托活动并非由单一的通用"信托牌照"管控。实际的体系由三部法律和若干登记路径组合而成：**信托法（信託法）**确立私法层面的关系；**信托业法（信託業法，第154 号法律，2004）**规定谁可以**作为业务**充当受托人；而**金融机构兼营信托业务法（兼営法 / 金融機関の信託業務の兼営等に関する法律，第43 号法律，1943）**则允许银行在获得 FSA 授权后开展信托业务。在此之上还有信托代理与受益权销售路径，其中后者跨入了金融商品交易法的范畴。

在公司页面需要说明其实际承担何种受监管的信托角色时，请将本页与 [[financial-licenses/INDEX|JapanFG legal / financial licenses]]、同级的 [[financial-licenses/bank-license-and-baas-boundary|bank-license / BaaS boundary]]、[[financial-licenses/securities-license-stack|securities license stack]]（用于受益权路径）、[[financial-licenses/insurance-license-and-solvency|insurance license and solvency route]]，以及信托银行实体页面 [[trust-banks/sumitomo-mitsui-trust|SMTH]]、[[trust-banks/custody-bank|Custody Bank]] 和 [[trust-banks/master-trust-bank|Master Trust Bank]] 配合使用。

本页是基于公开信源的研究路径，并非法律意见。任何实际的产品或交易仍须对照最新的 FSA 名单、e-Gov 法律条文、FSA 信托公司监管指引，以及律师 / 监管机构的确认加以核实。

## 三部法律的基础框架

| 法律 | 它回答的问题 | FinWiki 解读 |
|---|---|---|
| 信托法（信託法） | 委托人、受托人与受益人之间的私法信托关系是什么？ | 信托本身的实体法；它本身并不授予任何人作为业务充当受托人的资格。 |
| 信托业法（信託業法，2004） | 谁可以**作为业务**接受信托，以及在何种准入管控之下？ | 牌照 / 登记的主干：运用型与管理型信托公司、代理，以及行为规则。 |
| 兼营法（兼営法，1943） | 银行或其他金融机构如何**同时**经营信托业务？ | "信托银行"得以存在的路径；银行取得授权以经营信托业务及兼营业务。 |

这一三分法（信託法 / 信託業法 / 兼営法）是信托协会（Trust Companies Association of Japan）采用的标准框架；阅读页面时应将三者分开理解。

## 制度地图

| 活动 / 角色 | 主要牌照或登记 | 法律依据 | 典型实体 | 核验来源 |
|---|---|---|---|---|
| 作为业务接受信托，并对信托资产进行**自主管理** | 运用型信托公司——**牌照（免許）** | 信托业法 | 独立的运用型信托公司 | FSA "信託会社" 名单；FSA 信托监管指引 |
| 作为业务接受信托，**仅作管理**（无自主管理） | 管理型信托公司——**登记（登録）** | 信托业法 | 房地产 / 资产管理类管理型信托公司 | FSA "信託会社（管理型）" 名单；监管指引 §5 |
| 银行或其他金融机构兼营信托业务 | 经营信托业务及兼营业务的**核准（認可）** | 兼营法（兼営法） | 信托银行：[[trust-banks/sumitomo-mitsui-trust|SMTH]]、巨型银行的信托部门、[[trust-banks/custody-bank|Custody Bank]]、[[trust-banks/master-trust-bank|Master Trust Bank]] | FSA "信託兼営金融機関" 名单；监管指引 §11 |
| 作为代理人 / 中介为信托公司订立信托合同 | 信托合同代理业务——**登记（登録）** | 信托业法 | 为信托公司代理的银行、券商及分销商 | 地方财务局 "信託契約代理店" 登记册 |
| 销售或居间介绍**信托受益权** | **第二种金融商品交易业**（受益权被视为有价证券） | 金融商品交易法 | 房地产受益权交易商、基金分销商 | [[financial-licenses/securities-license-stack|securities license stack]]；FSA FIBO 名单 |
| 规模化的托管 / 资产管理信托 | 兼营法下的信托银行路径（管理 / 托管 / 基金服务） | 兼营法 + 信托业法 | [[trust-banks/custody-bank|Custody Bank]]、[[trust-banks/master-trust-bank|Master Trust Bank]] | FSA "信託兼営金融機関" 名单；实体披露 |

## 运用型与管理型之分

信托业法内部的决定性界线是**受托人是否对信托财产行使自主管理**：

- **运用型信托公司（運用型信託会社）**——按自身裁量管理 / 投资信托资产。对委托人 / 受益人的风险更高，因此准入采取**牌照（免許）**方式，并对资本、适当性（fit-and-proper）及业务方法进行审查。
- **管理型信托公司（管理型信託会社）**——仅按委托人或第三方的指示管理资产，**不进行自主管理**。风险较低，因此准入采取**登记（登録）**而非牌照方式。

希望获得完整信托工具箱的银行根本不会成为信托公司——它取得**兼营法授权**并作为信托银行运营，这正是为何"信托银行"是一个实体 / 经营公司层面的概念，而"信托公司"则是独立的信托业法持牌人。

## 真相来源体系

| 层级 | 主要来源 | 它能证明什么 | 它不能证明什么 |
|---|---|---|---|
| 法律 | 信托法、信托业法及兼营法的 e-Gov 法律条文 | 当前的法律类别与定义术语。 | 某具名公司当下是否持有该资格。 |
| 登记 | FSA "免許・許可・登録等を受けている事業者一覧"（信託会社 / 信託兼営金融機関）及地方财务局信托代理登记册 | 某家公司是否出现在所核查的官方登记类别中及其截止日期。 | 完整的产品范围或规模。 |
| 监管视角 | FSA "信託会社等に関する総合的な監督指針" | 关于准入审查、管理型公司及兼营银行的公开监管预期。 | 监管机构对特定产品的非公开意见。 |
| 自律 / 行业 | 信托协会（信託協会） | 信託法 / 信託業法 / 兼営法 的框架与行业实践。 | 法定牌照本身。 |
| 产品披露 | 实体页面、信托协议文件、EDINET / 官方产品页面 | 该公司当前是否提供该信托产品及其附带的披露事项。 | 一般性的牌照结论。 |

## 实务决策树

| 问题 | 首先核查之处 | 其次核查 |
|---|---|---|
| 这是一家经营信托的银行，还是一家独立的信托公司？ | 该实体是 信託兼営金融機関（兼営法 認可）还是 信託会社（信託業法）？ | FSA 信託兼営金融機関 名单与 信託会社 名单对照。 |
| 受托人是否按自身裁量管理资产？ | 运用型（免許）与管理型（登録）的分类。 | FSA 信託会社 名单类别；监管指引。 |
| 这家公司是否仅在安排信托合同？ | 信托合同代理登记。 | 地方财务局 信託契約代理店 登记册；它代理的是哪家信托公司。 |
| 这是否为信托受益权的销售？ | 金融商品交易法第二种金融商品交易业，而非信托业法。 | [[financial-licenses/securities-license-stack|securities license stack]] 及 FSA FIBO 名单。 |
| 这是否为投资型的"特定信托合同"？ | 在信托路径之上叠加的金融商品交易法行为规则。 | 是否适用 特定信託契約 的行为 / 适当性规则。 |

## 与 JapanFG 的关联

- [[trust-banks/sumitomo-mitsui-trust|Sumitomo Mitsui Trust]] 是最大的专营信托银行集团；其信托业务走 兼営法 路径，而非作为独立的 信託会社。
- 巨型银行集团（[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]]、[[megabanks/mizuho-fg|Mizuho FG]]）持有信托银行子公司，这些子公司依同一 兼営法 授权路径兼营信托业务。
- [[trust-banks/custody-bank|Custody Bank of Japan]] 与 [[trust-banks/master-trust-bank|Master Trust Bank of Japan]] 是资产管理 / 主信托（master-trust）专业机构——业务范围限于托管与基金服务而非零售信托产品的信托银行。
- 房地产受益权活动经由金融商品交易法第二种层级，因此房地产"信托"交易往往同时涉及本体系与 [[financial-licenses/securities-license-stack|securities license stack]]。

## 边界情形

| 边界 | 为何容易误读 | FinWiki 处理方式 |
|---|---|---|
| 信托公司与信托银行 | 两者都"做信托"，但一个是 信託業法 持牌人，另一个是 兼営法 授权的银行。 | 记录该实体所处于的法律之下；将实体页面单独链接。 |
| 运用型与管理型 | "信托公司"这一标签掩盖了决定牌照与登记之分的自主管理界线。 | 明确写明 運用型（免許）或 管理型（登録）。 |
| 信托业务与受益权销售 | 销售信托受益权是有价证券（金融商品交易法第二种）行为，而非信托业法下的受托人活动。 | 将受益权销售导向 [[financial-licenses/securities-license-stack|securities license stack]]。 |
| 信託法 与 信託業法 | 私法信托关系并不等同于业务准入制度。 | 将实体性信托与作为业务充当受托人的牌照区分开。 |
| "未找到"与"无牌照" | 在某份名单中缺失，可能意味着类别错误或拼写过时。 | 记录为"截至某日在所核查来源中未找到"，而非断言其无牌照状态。 |

## 研究清单

1. 尽可能从实体的法律名称与法人编号入手。
2. 判断该实体是银行（兼営法）还是独立的信托公司（信託業法）。
3. 对信托公司，识别其为运用型（免許）还是管理型（登録）。
4. 核查相应的 FSA 名单（信託会社 / 信託兼営金融機関）并记录截止日期。
5. 对代理业务，核查地方财务局 信託契約代理店 登记册及其所代理的信托公司。
6. 若销售受益权，则转入金融商品交易法第二种路径并核查 FSA FIBO 名单。
7. 写出结论，注明截止日期与来源类别；当未找到某登记时，使用否定性表述措辞。

## 相关

- [[financial-licenses/INDEX|financial-licenses INDEX]]
- [[financial-licenses/bank-license-and-baas-boundary|bank license and BaaS boundary]]
- [[financial-licenses/securities-license-stack|Japan securities license stack]]
- [[financial-licenses/payment-license-stack|Japan payment license stack]]
- [[financial-licenses/insurance-license-and-solvency|insurance license and solvency route]]
- [[trust-banks/sumitomo-mitsui-trust|Sumitomo Mitsui Trust]]
- [[trust-banks/custody-bank|Custody Bank of Japan]]
- [[trust-banks/master-trust-bank|Master Trust Bank of Japan]]
- [[financial-regulators/INDEX|financial-regulators INDEX]]
- [[securities/INDEX|securities INDEX]]
- [[INDEX|FinWiki index]]

## 来源

- 金融庁: 改正信託業法 (信託業法, 平成16年法律第154号) 関連ページ.
- 金融庁: 信託会社等に関する総合的な監督指針 (令和6年11月) — 全体・管理型信託会社 (§5)・信託兼営金融機関 (§11).
- 金融庁: 免許・許可・登録等を受けている事業者一覧 (信託会社 / 信託兼営金融機関).
- 信託協会: 信託法・信託業法・兼営法の関係.
- 財務省 地方財務局: 信託契約代理店 登録.
- e-Gov 法令検索: 信託業法 / 金融機関の信託業務の兼営等に関する法律 / 信託法.
