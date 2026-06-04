---
source: corporate-strategy/japan-gappei-merger-regime
source_hash: 7e883cd762e70707
lang: zh
model: claude-opus-4-8
status: machine
fidelity: ok
title: "合併 (日本公司合并) — 吸収合併 / 新設合併 机制、適格合併 税务处理，以及三角合并变体"
translated_at: 2026-06-05T00:00:00.000Z
---

# 合併 (日本公司合并) — 吸収合併 / 新設合併 机制、適格合併 税务处理，以及三角合并变体

## 维基路径

本条目位于 [[corporate-strategy/INDEX|corporate-strategy INDEX]] 之下，并为交易融资叠加层路由至 [[finance/INDEX|finance INDEX]]。合并是分离侧的 [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 (company split)]] 在**结合侧**的对应物；两者运行于同一条 適格 / 非適格 税务轴之上。请与 [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転 regime]] 一并阅读以了解不解散目标公司而获得 100% 控制的股份侧路径，并与 [[finance/jftc-merger-control-process|the JFTC merger-control process]] 一并阅读以了解任何相当规模的合并都必须通过的反垄断审批。

## TL;DR

**合併 (gappei, merger)** 是将**两家或以上公司融合为一个法律实体**的日本《会社法》机制。与 [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]] (剥离出一项业务) 或 [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換]] (使两家公司在母子结构中均存续) 不同，合并**解散**至少一家公司：其资产、负债、合同与员工通过**包括承継 (概括承继)** 转移至存续方，而消灭公司无需另行清算即告终止存在。

两条结构轴界定了该制度 — 与每一项日本 組織再編成 相同的二元结构:

1. **形态轴** — **吸収合併 (吸收合并)**，由一家**既存**公司存续并吸收其他公司，对比 **新設合併 (新设合并)**，由一家**全新**公司被设立、*所有*合并公司皆消灭于其中。
2. **税务轴** — **適格合併 (合格、递延课税、结转基准)** 对比 **非適格合併 (不合格、应税、按市值计价)**。

法定层:

- **会社法第 748〜756 条** 规律合并程序；**第 749 条** 规定 吸収合併契約 (吸收合并协议) 的内容，**第 753 条** 规定 新設合併契約；**第 754 条第 1 项** 将 新設合併 的生效日固定于存续方的设立登记之时。
- **法人税法第 2 条第 12 号之 8、第 62 条、第 62 条之 2** 规律 適格 / 非適格 的区分以及各项属性的结转。
- 两种形态均要求**收购 / 合并公司股东特别决议** (2/3 门槛)，外加**债权人保护 (債権者保護手続)** 与**异议股东评估 (反対株主の株式買取請求)** 程序。

## 1. 吸収合併 vs 新設合併 — 两种形态

| | 吸収合併 (吸收) | 新設合併 (新设) |
|---|---|---|
| 存续实体 | 一家**既存**公司 (存続会社) | 一家**新设立**公司 (新設会社) |
| 消灭实体 | 被吸收的公司 (消滅会社) | **所有**合并公司消灭 |
| 给目标公司股东的对价 | 存续方的股份、现金或其他财产 | 新公司的股份 |
| 牌照 / 上市 | 存续方保留自身的；被吸收公司的可能失效 | 全部原有的失效；新公司必须重新取得 / 重新上市 |
| 生效日 | 合并协议中确定的日期 | 新公司的设立登记之日 (第 754 条第 1 项) |
| 会社法条文 | 749, 750, 783〜802 | 753, 754, 804〜816 |

直觉是: **吸収合併 让一家公司继续站立、把另一家折叠进去；新設合併 拆毁所有人、在废墟之上建起一家全新公司。** 实务中 **吸収合併 占主导**，因为 新設合併 迫使新实体重新取得前身曾持有的每一项业务牌照、许可与证券交易所上市地位 — 这是一项极少值得支付的行政性惩罚。新設合併 大多保留用于「对等合并」的观感，即任一方都不愿被视为被「吸收」。

## 2. 包括承継 (概括承继) — 为何合并是「干净的」

合并通过**法律的作用、作为单一打包**转移一切。不存在逐项资产的转让，并且至关重要的是，**无需个别对手方或员工同意**:

- **合同**自动转移至存续方 (受合同自身所含变更控制条款约束)。
- **雇佣合同**自动转移 — 并且与 [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]] 不同，合并甚至*不*触发 労働契約承継法 的协商机制，因为移动的是*整家*公司，而非被切出的一部分。
- **债务与负债**全额转移 — 这正是**债权人保护程序**之所以必须的原因 (债权人失去其原债务人)。

这一概括承继正是将合并与 事業譲渡 (业务转让) 区分开来的特征 — 在业务转让中，每份合同必须被个别转让、每名员工必须被个别征得同意 — [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|the 会社分割 regime]] 中的对比表对合并更是适用有加。

## 3. 税务轴 — 適格合併 vs 非適格合併

適格合併 之问在精神上与 [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]] 的测试相同: 合并是获得**递延课税、结转基准**的处理，还是**按市值计价**？

### 適格合併 测试情形

1. **100% 集团 (完全支配関係)** — 全资集团内部的合并: 最轻的测试集；完全控制关系的延续基本即已足够。
2. **>50% 集团 (支配関係)** — 多数控制集团内部的合并: 加入**员工留用 (≈80%)** 与**业务延续**测试。
3. **共同事业 (共同事業要件)** — 无关联方之间的合并: 加入全套 — **事業関連性** (业务相关性)、**事業規模 OR 経営参画** (可比规模 OR 特定高管参与)、**従業者引継ぎ** (员工留用)、**事業継続** (业务延续)，以及对对价股份的**継続保有 (continued-holding)** 要求。

在每一情形中适用同一条断层线: **股份对价维持 適格；现金对价通常将其打破** — 这条规则贯穿 [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転]] 的各项股份侧制度。

### 后果

| | 適格合併 (合格) | 非適格合併 (不合格) |
|---|---|---|
| 消灭公司的资产 | 以**账面价值**结转；不确认收益 | 按**公允价值**计价；内含收益实现 |
| 目标公司股东 | 对股份换股份的交换不立即征收资本利得税 | 可能产生资本利得 / **视同股息 (みなし配当)** |
| 亏损结转 (繰越欠損金) | 可结转至存续方，但**受反流转限制约束** (法人税法第 57 条以下) | 通常**不**结转 |
| 净效果 | 税务中性的结合 | 双层税务暴露 |

**亏损结转的承继**是合并所独有、最具影响的税务特征: 一家盈利的存续方吸收一家亏损的目标公司，可继承可用的 繰越欠損金 — 但**反亏损流转规则** (特定所有权变更与业务延续测试) 之所以存在，正是为了阻止「购买亏损」，并在困境交易中咬合甚紧。这是许多救助式合并背后那条无声的税务杠杆。

## 4. 三角合並 (三角合并) 变体

自《会社法》对价灵活化 (対価の柔軟化) 条款于 2007 年生效以来，吸収合併 可以支付**存续方*母*公司的股份**作为对价，以替代存续方自身的股份。这一 **三角合並 (triangular merger)** 让母公司*通过*一家日本子公司收购目标，同时向目标公司股东交付母公司 (通常为境外上市) 的股票:

- 日本**子公司**是吸收目标的法律上的存续方。
- 目标公司股东收到**母公司**股份。
- 它成为为流入日本的**入境跨境股份合并**所设想的主要机制 — 尽管使用外国母公司股票的严格 適格 条件在实务中限制了免税运用。跨境次序安排见 [[finance/cross-border-m-a-japan|cross-border M&A Japan]]。

## 5. 合并在重组工具中所处的位置

日本 組織再編成 提供一份菜单；在其中抉择关乎**你希望各法律实体发生什么**:

| 工具 | 对实体的效果 | 经典用途 |
|---|---|---|
| **合併 (merger)** | 一个实体存续；其余**解散** | 完全结合 / 统合；救助一家衰败的公司 |
| **会社分割 (split)** | 一项**业务**移至另一实体；两者均存续 | 剥离、分拆前段、控股公司创设 — 参见 [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 regime]] |
| **株式交換 (share exchange)** | 两者均在 **100% 母子**结构中存续 | 以股票将目标全资化 — 参见 [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転]] |
| **株式交付 (share delivery)** | 两者均存续；**部分** (>50%, <100%) 控制 | 以股票进行友好的部分收购 — 参见 [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]] |

决定性的差异: **唯有 合併 消灭一个实体。** 当各方希望两家公司继续作为分立的法人运营时，他们转而采用一项股份侧制度。完整的选项集在分离侧图示于 [[corporate-strategy/spinoff-decision-tree-japan|the spinoff decision tree]]；合并是其结合侧的镜像。

## 6. 程序时间线

合併 遵循标准的《会社法》重组时间线，这设定了速度的现实下限:

| 步骤 | 法定最低期间 | 注记 |
|---|---|---|
| 合併契約 / 合併計画 的董事会批准 | — | 可当日完成 |
| 在总公司对合并文件进行会前披露 | 股东大会前 ≥ 2 周 | 供股东 / 债权人查阅 |
| 股东大会特别决议 | — | 2/3 特别决议门槛 |
| 債権者保護手続 (债权人异议) | ≥ 1 个月异议期 | **始终必需** (债权人失去其原债务人) |
| 反対株主の株式買取請求 (评估请求窗口) | 生效日前后的法定窗口 | 异议股东以「公允价值」被买出，经判例解读为包含协同效应 (会社法 785/797/806) |
| 生效日 | 依协议 (吸収) / 设立登记 (新設, 第 754 条第 1 项) | — |
| 登记 (変更登記 / 設立登記) | 2 周内申报 | 新設合併 还登记新公司 |

一桩无争议的合并从董事会批准起通常历时 **2〜3 个月**，但两道外部闸门常常主宰日程: 对超过申报门槛的交易，依据 [[finance/jftc-merger-control-process|the merger-control process]] 进行的 **JFTC 合并审批**；以及与 [[finance/japan-large-shareholding-disclosure|large-shareholding disclosure]] 和 [[securities/japan-ipo-listing-disclosure-route|the IPO listing / disclosure route]] 中上市规则相互作用的上市公司 FSA / TSE 披露开销。

## 7. 战略解读

- **合并是唯一「消灭实体」的重组。** 这使它成为目标是真正融合 (共享系统、单一员工队伍、一张资产负债表) 而非控股结构时的正确工具。当各方希望保全分立的实体 — 出于风险围栏、品牌或监管牌照 — 时，他们改用 [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転]] 或一次 [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]]。
- **亏损结转的继承既是隐藏的奖品也是隐藏的陷阱。** 一桩合格合并可将 繰越欠損金 结转至存续方，但反流转测试的设计意在于交易看起来像「亏损淘货」时予以否认。
- **吸収 几乎总是胜过 新設。** 在 新設合併 之后重新取得牌照并重新上市是一项自招的成本；统合合并主要为对等合并的象征意义而存续。
- **反垄断是一道真实的闸门，而非形式。** 大型合并必须通过 [[finance/jftc-merger-control-process|the JFTC merger-control process]]；对集中市场而言，补救措施或禁止是现实的可能结果。

## 8. 反论与注意事项

- **適格 因事实而定。** 合格测试技术性强，且 NTA 公布个别询问案例，因为边缘情形常见；请逐笔交易确认 適格 状态。
- **三角合并的税务救济范围狭窄。** 在 三角合並 中使用外国母公司股票极少能取得干净的 適格 处理；多数入境股份结合经由 [[finance/cross-border-m-a-japan|cross-border M&A Japan]] 的结构。
- **债权人保护无法略过。** 由于负债通过概括承继转移，≥1 个月的异议程序为必需，且是成交日滑期的常见原因。
- **评估诉讼风险。** 异议股东的「公允价值」买出主张 — 经解读为包含合并协同效应的一份额 — 可能演为争议，与 [[finance/japan-mbo-and-squeeze-out-process|the MBO / squeeze-out process]] 中的挤出公平性纠纷相平行。

## 相关条目

- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]
- [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転 regime]]
- [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]]
- [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]]
- [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]]
- [[finance/jftc-merger-control-process|JFTC merger-control process]]
- [[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]]
- [[finance/cross-border-m-a-japan|cross-border M&A Japan]]
- [[finance/japan-large-shareholding-disclosure|Japan large-shareholding disclosure]]
- [[securities/japan-ipo-listing-disclosure-route|Japan IPO listing / disclosure route]]
- [[finance/INDEX|finance INDEX]]
- [[INDEX|FinWiki index]]

## 来源

- 会社法 (会社法) 关于 合併 (第 748〜756 条，含 749 / 753 / 754): https://laws.e-gov.go.jp/document?lawid=417AC0000000086
- 国税庁 法人税法基本通達 1-4-5 (組織再編成 — 適格合併ほか): https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- METI 経済法制 政策门户 (組織再編成 / 対価柔軟化): https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/
- 公正取引委員会 (JFTC) — 合并审查 (英语): https://www.jftc.go.jp/en/
- FSA 英语门户 (与合并相互作用的披露规则): https://www.fsa.go.jp/en/

---

> [!info] 校核状态
> confidence: **likely**。吸収合併 / 新設合併 的机制 (会社法第 748〜756 条、生效日规则第 754 条第 1 项)、概括承继、必需的债权人保护与评估程序、適格 / 非適格 轴、附反流转限制的亏损结转承继，以及 2007 年后的 三角合並 变体均为已确立的公知事实。適格 测试与三角合并的税务条件技术性强且因事实而定 — 请逐笔交易确认合格状态与反垄断审批。
