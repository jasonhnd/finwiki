---
source: corporate-strategy/japan-kabushiki-koukan-iten-regime
source_hash: e1a8c06bb5ed26a3
lang: zh
model: claude-opus-4-8
status: machine
fidelity: ok
title: "株式交換 / 株式移転 (kabushiki koukan / iten) — 用于全资子公司化与控股公司组建的股份交换・股份转移制度"
translated_at: 2026-06-05T00:00:00.000Z
---

# 株式交換 / 株式移転 (kabushiki koukan / iten) — 用于全资子公司化与控股公司组建的股份交换・股份转移制度

## 维基路径

本条目位于 [[corporate-strategy/INDEX|corporate-strategy INDEX]] 之下，并为交易融资叠加层路由至 [[finance/INDEX|finance INDEX]]。请与 [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]] (部分控制的兄弟、第三项股份侧制度) 一并阅读，与 [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]] 一并阅读以了解资产层的对照，与 [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree]] 一并阅读以了解在选项集中的位置，并与 [[finance/japan-tender-offer-process|Japan tender offer process]] 一并阅读以了解 株式交換 常常承接的现金报价替代。

## TL;DR

**株式交換 (kabushiki koukan, share exchange)** 与 **株式移転 (kabushiki iten, share transfer)** 是用以将一整家公司置于单一母公司之下、以**股份而非现金**作为对价的两项既有日本《会社法》机制。它们是从两侧夹住较新的 [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付]] 制度的股份侧组织重组工具:

- **株式交換** 使一家*既存*公司成为目标公司的 **100% (全资) 母公司**。收购方 (完全親会社) 向目标公司股东发行自身股份，股东交出**全部**目标公司股份；目标公司成为 完全子会社 (全资子公司)。
- **株式移転** 在一家或以上既存公司之上创设一家**全新的控股公司**。新的 完全親会社 在转移之时被设立，并接收每家被转移公司的**全部**股份；原股东成为新控股公司的股东。

两者与 [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付]] 在一个决定性之处不同: 株式交換 与 株式移転 产生 **100% 母子**关系，而 株式交付 止步于控制性但部分的持股 (>50%, <100%)。与每一项日本重组一样，各自运行于 **適格 (合格、递延课税) vs 非適格 (不合格、应税)** 轴之上。

法定层:

- **会社法第 767〜771 条** 规律 株式交換；**第 772〜774 条** 规律 株式移転 (株式交付 紧随其后，位于第 774 条之 2 以下)。
- **法人税法第 2 条第 12 号之 16 / 第 2 条第 12 号之 17** 及周边的 組織再編成 条款规律 適格 / 非適格 的区分。
- 两者均要求**收购 / 组建公司股东特别决议** (2/3 门槛)，以及《会社法》上的债权人与异议股东保护程序。

## 1. 两种机制并列

| | 株式交換 (share exchange) | 株式移転 (share transfer) |
|---|---|---|
| 母公司 | 一家**既存**公司 | 一家**新设立**公司 |
| 结果 | 目标公司成为既存收购方的 完全子会社 | 既存公司成为新控股公司的 完全子会社 |
| 最低取得 | 目标公司的 100% | 每家被转移公司的 100% |
| 对价 | 收购方自身股份 (可混合现金 / 其他财产) | 新控股公司自身股份 |
| 典型用途 | 以股票对价完成完全收购；将上市关联公司转换为全资子公司 | 纯粹型控股公司组建；共同控股公司之下的对等合并 |
| 会社法条文 | 767〜771 | 772〜774 |
| 决议 | 两家公司的股东特别决议 (2/3) | 每家被转移公司的股东特别决议 (2/3) |

直觉是: **株式交換 让一家既存公司*朝上*指向目标公司；株式移転 在一家或以上公司之上搭建一个*新*屋顶。** 单一公司的 株式移転 是通往纯粹型控股公司的经典路径 — 关于控股公司组建 (其中 株式移転 是三种相互竞争方法之一) 的专门论述，参见 [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]]。

## 2. 株式交換 — 详解

收购公司 (株式交換完全親会社) 成为目标公司 (株式交換完全子会社) 的唯一股东。所有目标公司股份在生效日**经法律的作用**移至收购方；收购方直接向原目标公司股东发行对价。

- **上市关联公司清理**: 最常见的用途是将部分持有的上市子公司的少数股权挤出以达到 100%。例如一家持股 53% 的母公司可通过 株式交換、支付自身股份移至 100% — 将一家并表但上市的子公司转换为全资子公司。
- **现金挤出变体**: 自 2005 年《会社法》以来，对价可为**现金或其他财产** (対価の柔軟化)，使一次「现金挤出 株式交換」得以在无前置 TOB 的情况下发挥挤出功能。这与 [[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]] 中的私有化工具箱相重叠。
- **异议股东评估**: 反对的股东可请求公司以公允价值买入其股份 (株式買取請求権) — 这一少数股东保护机制反复出现于 [[finance/japan-tender-offer-process|tender-offer]] 与挤出结构之中。

## 3. 株式移転 — 详解

株式移転 设立一家**全新**母公司 (株式移転設立完全親会社)，其最初唯一的资产即被转移公司的 100%。它是两种模式的标准法律路径:

1. **单一公司控股化**: 一家经营公司进行一次 株式移転，将自身置于一家新创设的纯粹型控股公司之下。股东以一对一将其经营公司股份换为控股公司股份；经营公司成为全资子公司。
2. **共同控股公司 / 对等合并**: 两家 (或以上) 公司各自向一家新控股公司同时进行 株式移転，在不合并其经营实体的前提下将两者置于一个共同母公司之下。许多日本金融集团即以此种方式组装而成 — 这些结构构成了 [[finance/japan-listed-financial-groups-investable-universe|the listed-financial-groups universe]] 与编目于 [[corporate-strategy/INDEX|corporate-strategy INDEX]] 的实体。

由于新控股公司是从零创设的，株式移転 规避了母公司须拥有可供发行的既有股本之需 — 与需要一家拥有可发行股份的既存收购方的 株式交換 相对照。

## 4. 税务轴 — 適格 vs 非適格

適格 (合格) 测试映射了贯穿所有日本 組織再編成 (公司重组) 所用的逻辑，并与 [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|the 会社分割 tax regime]] 中记载的 会社分割 测试紧密追随。问题在于该股份侧重组被视为**递延课税 (结转基准)** 还是**应税 (按市值计价 + 视同股息)**。

### 合格测试情形

1. **100% 集团 (完全支配関係)** — 全资集团内的 株式交換 / 株式移転: 除完全控制关系的延续外，几无其他测试。
2. **>50% 集团 (支配関係)** — 多数控制集团内: 加入业务延续与员工留用 (≈80%) 测试。
3. **共同事业 (共同事業要件)** — 无关联方之间: 加入全套 — 事業関連性 (业务相关性)、事業規模 OR 経営参画 (可比规模或特定高管参与)、従業者引継ぎ (员工留用)、事業継続 (业务延续)，以及特定股东对所发行母公司股份的 継続保有 (持续持有)。

### 后果

| | 適格 (合格) | 非適格 (不合格) |
|---|---|---|
| 子公司的资产 | 维持账面价值；不确认收益 | 在特定情形下按公允价值计价；内含收益可能实现 |
| 出售的股东 | 对股份换股份的交换不立即征收资本利得税 | 可能产生资本利得 / 视同股息，尤其是在现金对价时 |
| 现金对价 | 在共同事业情形下打破 適格 | 不合格处理的常见触发因素 |

实务上的经验法则与其他制度相同: **股份对价维持 適格；现金对价通常将其打破。** 这正是将以股份资助的结合与 [[finance/japan-leveraged-buyout-economics|Japan leveraged-buyout economics]] 中以现金资助的私有化路径区分开来的同一条断层线。

## 5. 在股份侧制度中所处的位置

日本如今拥有**三项**股份对价重组制度。在其中抉择，纯粹关乎你所希望的**对目标公司的持股比例**:

| 制度 | 在目标公司中的结果持股 | 母公司 | 经典用途 |
|---|---|---|---|
| **株式交付 (kabushiki koufu)** | >50% 至 <100% (部分控制) | 既存 | 以股票进行友好的部分控制收购 — 参见 [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]] |
| **株式交換 (kabushiki koukan)** | 100% (全资) | 既存 | 以股票完成完全收购 / 上市关联公司清理 |
| **株式移転 (kabushiki iten)** | 100% (全资) | **新控股公司** | 控股公司组建 / 共同控股公司 |

对于移动一项*业务*而非*股份*的**资产层** (而非股份层) 重组，请改用 [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]]。完整的选项集 (含分离侧) 图示于 [[corporate-strategy/spinoff-decision-tree-japan|the spinoff decision tree]]。

## 6. 程序时间线

两项制度共享《会社法》重组时间线，这设定了执行速度的现实下限:

| 步骤 | 法定最低期间 | 注记 |
|---|---|---|
| 株式交換契約 / 株式移転計画 的董事会批准 | — | 可当日完成 |
| 在总公司对计划文件进行会前披露 | 股东大会前 ≥ 2 周 | 供股东 / 债权人查阅 |
| 股东大会特别决议 | — | 2/3 特别决议门槛 |
| 債権者保護手続 (债权人异议) (在必要时) | ≥ 1 个月异议期 | 在适用新债务类对价或特定条件时必需 |
| 反対株主の株式買取請求 (评估请求窗口) | 生效日前后的法定窗口 | 异议股东以公允价值被买出 |
| 生效日 + 登记 | 生效后 2 周内申报 | 株式移転 还登记新控股公司 |

一桩无争议的 株式交換 或 株式移転 从董事会批准起通常历时 **2〜3 个月**；上市公司交易另增依据 [[finance/japan-large-shareholding-disclosure|large-shareholding disclosure]] 的 FSA / TSE 披露开销以及 [[securities/japan-ipo-listing-disclosure-route|the IPO listing / disclosure route]] 中所引的上市规则。

## 7. 反论与注意事项

- **適格 因事实而定**: 合格测试技术性强，且 NTA 正因边缘情形常见而公布个别询问的回应案例 (照会事例)。请逐笔交易确认 適格 状态。
- **现金挤出 株式交換 招致审视**: 使用现金对价强制排除少数股东，可能触发与一次 [[finance/japan-mbo-and-squeeze-out-process|squeeze-out]] 相当的评估诉讼与公平性意见预期。
- **跨境限制**: 与 株式交付 一样，株式交換 / 株式移転 为**日本股份公司**设计；跨境换股一般经由 [[finance/cross-border-m-a-japan|cross-border M&A Japan]] 的结构，而非这些国内制度。
- **控股公司组建是一项多工具的判断**: 株式移転 仅是三种控股公司组建方法之一；与 会社分割「抜け殻」路径之间的权衡见 [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]]。

## 相关条目

- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]]
- [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]
- [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]]
- [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]]
- [[finance/japan-tender-offer-process|Japan tender offer process]]
- [[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]]
- [[finance/japan-leveraged-buyout-economics|Japan leveraged-buyout economics]]
- [[finance/japan-large-shareholding-disclosure|Japan large-shareholding disclosure]]
- [[finance/cross-border-m-a-japan|cross-border M&A Japan]]
- [[securities/japan-ipo-listing-disclosure-route|Japan IPO listing / disclosure route]]
- [[INDEX|FinWiki index]]

## 来源

- 会社法 (会社法) 关于 株式交換 (第 767〜771 条) 与 株式移転 (第 772〜774 条): https://laws.e-gov.go.jp/document?lawid=417AC0000000086
- 国税庁「組織再編成に係る行為又は計算の不当性」ほか 組織再編税制 解説: https://www.nta.go.jp/law/joho-zeikaishaku/hojin/070313/04.htm
- 国税庁 法人税法基本通達 1-4-5 (組織再編成): https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- METI economic-affairs / 経済法制 政策门户: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/
- FSA 英语门户 (与重组相互作用的披露规则): https://www.fsa.go.jp/en/

---

> [!info] 校核状态
> confidence: **likely**。株式交換 / 株式移転 是长期确立的《会社法》制度 (法定根基早于 2005 年《会社法》整合；现金灵活对价自 2005 年起)。適格 / 非適格 税务测试技术性强且因事实而定 — 请结合 NTA 指引与专业意见，逐笔交易确认合格状态。
