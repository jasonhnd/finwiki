---
source: structured-finance/fitch-moody-sp-japan-criteria
source_hash: b30514a0576fdf52
lang: zh
status: machine
fidelity: ok
title: "Fitch / Moody's / S&P 的日本结构化金融标准 — 全球评级机构 vs JCR / R&I"
translated_at: 2026-06-19T13:13:22.644Z
---

# Fitch / Moody's / S&P 的日本结构化金融标准 — 全球评级机构 vs JCR / R&I

## TL;DR

日本的证券化采用双评级: 国内机构 [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR and R&I]] 覆盖日元计价投资者基础（寿险公司、地方银行、[[regional-banks/japan-post-bank|Japan Post Bank]]），而当交易瞄准外国投资者或美元计价分层时，则加入 Moody's、S&P 和 Fitch。在优先层级，分裂评级的差距可达 1–3 档，其驱动因素为: (i) **主权评级上限**——全球机构将日本结构化分层封顶于日本主权评级（目前为 A+/A1）或以下，而 JCR 与 R&I 在国内将主权评为 AAA / AA+；(ii) 对日本按揭与汽车贷款池的**回收假设**差异（全球机构对住宅止赎时机与农村抵押品转售价值通常更为保守）；(iii) 全球机构更严格的**迁移矩阵**对同一资产池产生更高的模型化违约频率。其结果是，被 JCR 评为 AAA 的优先级汽车 ABS 分层往往被 S&P 评为 A 或 AA，而这进而决定了外国资产管理人能否在全球 IG 委托中持有它。

## Wiki route

本条目归于 [[structured-finance/INDEX|structured-finance index]] 之下，作为**机构标准比较**节点。请对照 [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]（国内机构观点）、[[structured-finance/japan-abs-market-overview|Japan ABS market overview]]（投资者需求侧）以及 [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]（评级所依附的法律实体层）阅读。相关的跨境视角: [[real-estate-finance/INDEX|real-estate-finance index]]（RMBS / J-REIT 债）以及关于更广泛信用利差背景的 [[finance/INDEX|finance index]]。

## 1. The three global agencies — Japan structured-finance footprint

| Agency | Japan SF focus | Office | Typical mandates |
|---|---|---|---|
| **Moody's Japan K.K.** | RMBS, auto ABS, CMBS, consumer ABS, repackaging notes | Tokyo | Cross-border tranches, foreign-investor-marketed deals |
| **S&P Global Ratings Japan** | RMBS, ABCP conduits, auto ABS, CLO investor analysis | Tokyo | Megabank-sponsored deals, USD-denominated tranches |
| **Fitch Ratings Japan** | RMBS, auto ABS, repackaging, occasional CMBS | Tokyo | Foreign-investor demand-driven mandates |

三家机构均根据 FSA 与 [[financial-regulators/japan-exchange-group|JPX]] 相邻的监管制度（最初是 2008 危机后对金融商品交易法施加登记与行为规则的 2010 修正）注册为 **信用评级机构**。

## 2. Sovereign-rating cap — the structural ceiling

全球机构对结构化金融发行适用 **主权评级上限（或"国家上限"）**。其机制:

| Step | Rule |
|---|---|
| Country ceiling | The cap on any structured-finance tranche issued out of a given jurisdiction, anchored to the sovereign rating |
| Japan sovereign rating | S&P: A+ / Moody's: A1 / Fitch: A (as of recent cycle, historically downgraded from AA / Aa during the 2010s) |
| Tranche ceiling | Typically equal to or one notch above the sovereign ceiling for highly-rated structured-finance instruments meeting "rated above sovereign" criteria |
| Result | A Japanese RMBS senior tranche cannot easily be rated AAA by S&P, even if the underlying pool would otherwise qualify — typical ceiling AA+ / AA |

相比之下，**JCR 与 R&I 在国内标度上将日本主权评为 AAA（或 AA+）**，不存在国家上限问题。因此，从 JCR 获得 AAA 的优先级分层通常在 S&P 处落到 AA / AA-——在优先层级形成 2档的分裂。

## 3. Differences in modelling assumptions

### 3a. Default frequency / transition matrix

全球机构使用源自多管辖区违约数据集（大多为美国、欧盟、英国）的长周期 **迁移矩阵**。应用于日本资产池时，这会产生比 JCR / R&I 基于国内经验的矩阵更高的模型化违约频率，后者反映了 (i) 历史上较低的日本消费者违约率，(ii) 文化上的支付纪律，以及 (iii) 即便在 1997–2003 银行危机期间也较低的住宅按揭止赎率。

### 3b. Recovery assumption

| Asset class | JCR / R&I assumption | Global-agency assumption | Gap |
|---|---|---|---|
| Residential mortgage (urban) | 60–75% LGD-adjusted recovery over 18–24 months | 50–65% over 24–36 months | Modest |
| Residential mortgage (rural / regional) | 50–65% recovery | 35–50% (foreclosure liquidity / resale value haircut) | Material |
| Auto loan | 35–45% recovery (used-car wholesale value) | 25–40% | Modest |
| Consumer unsecured | 0–5% recovery | 0–5% | Negligible |
| CMBS (Tokyo CBD office) | 65–80% recovery | 55–75% | Modest |
| CMBS (regional retail / hotel) | 45–60% recovery | 30–50% | Material |

农村抵押品的回收差距是地区性资产池交易中分裂评级的最大驱动因素。

### 3c. Cash-flow stress

全球机构叠加额外的压力情景——利率冲击、提前偿还率压力、服务商中断尾部风险——而 JCR / R&I 要么以较不激进的方式建模，要么将其视为定性考量。

## 4. Transition matrix differences — empirical observation

相比拥有相同名义字母评级的全球机构评级分层，JCR 评级的 SF 分层历史上显示出极低的迁移率（下调）。该差距反映了 (i) 不同的建模理念，(ii) 不同的样本总体（JCR 样本压倒性地为日本本土，全球机构样本为多管辖区），以及 (iii) JCR 对定性考量（服务商实力、发起人往绩、[[megabanks/mufg|MUFG]] / [[megabanks/smfg|SMFG]] / [[megabanks/mizuho-fg|Mizuho FG]] 发起人支持）更强的加权。

这是一个有争议的点——JCR 主张其以国内为锚的方法论更能反映实际的日本资产池表现；全球机构则主张其方法论更为保守且具全球可比性。

## 5. Recent JCR / S&P split-rating cases — illustrative pattern

在不点名具体交易的情况下，公开披露的 JSDA SF 统计中反复出现的模式显示:

| Deal type | JCR typical | S&P / Moody's typical | Spread implication |
|---|---|---|---|
| Megabank-sponsored auto ABS (senior) | AAA | AA / AA+ | 5–15 bp pickup for foreign investors |
| Regional-bank RMBS (senior) | AAA | A+ / AA- | 20–40 bp pickup |
| CMBS senior (Tokyo CBD) | AAA | AA- / AA | 15–25 bp pickup |
| CMBS senior (regional) | AA / AA+ | A / A+ | 30–60 bp pickup |
| ABCP (megabank conduit) | A-1+ / J-1+ | A-1+ | Minimal |

2010年代曾出现周期性事件: S&P 或 Moody's 下调了 JCR 持续确认的日本 SF 分层，引发发行体与投资者就方法论分歧发表评论。

## 6. Why dual-rating still happens

尽管存在分裂评级的成本，双评级或三评级仍然普遍，因为:

1. **外国投资者基础** — 运行全球 IG 委托的全球资产管理人需要全球机构评级才能持有该债券；仅有 JCR 是不够的
2. **回购适格性** — 对于跨境回购（如 ECB 抵押品框架、美国三方回购），仅全球机构评级被计入
3. **银行资本处理** — 在巴塞尔 III 标准法下，仅来自获认可 ECAI 的评级被计入；在某些管辖区 JCR / R&I 未获认可
4. **营销观感** — 即便定价以 JCR 为基准设定，全球机构评级也传递"可供外国账户投资"的信号

交易商（[[securities-firms/mufg-securities|MUFG MS]] / [[securities-firms/smbc-nikko|SMBC Nikko]] / [[securities-firms/mizuho-securities|Mizuho Securities]]）根据目标投资者名单选择与哪些机构合作。

## 7. Counterpoints

- **"主权上限机械化"** — 批评者认为国家上限过于机械，未反映本币计价的 JGB 从未违约这一事实；结构良好的日本 SF 分层理应不受上限约束。全球机构以转移与可兑换性风险为由维持上限，尽管日本并无此类限制
- **"JCR / R&I 过于宽松"** — 外国投资者有时将 JCR / R&I 的 AAA 评级视为相对 S&P 的 AA- 偏高，即便仅有国内评级可用，也会以接近全球机构水平定价
- **"迁移矩阵抽样偏差"** — JCR 辩称其样本更能反映日本特有行为，这一辩护成立，但若日本信用状况向全球规范收敛（如家庭杠杆上升、[[financial-regulators/boj|BOJ]] 利率正常化下的按揭压力），则会产生前瞻性盲点
- **"东京办公室人员限制"** — 全球机构以比国内机构更小的团队覆盖日本 SF；一些发行体报告评级周转时间更长、发行体互动粒度更粗
- **"方法论更新制造悬崖风险"** — 当全球机构更新其结构化金融标准时，大规模评级复核可能在日本 SF 全域产生同步下调，引发仅 JCR 交易所能规避的利差走阔

## 8. Open questions

- 若 [[financial-regulators/boj|BOJ]] 使利率正常化、日本家庭违约率向全球平均靠拢，分裂评级差距将缩小多少
- FSA 是否最终会就高品质日本 SF 向全球机构施压以取消主权上限机制
- 新的日本 SF 资产类别（ESG 挂钩汽车 ABS、绿色 RMBS）将由全部五家机构评级，还是按管辖区分裂
- 若更多外国投资者进入日本 SF 市场并将全球机构评级作为默认要求，[[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I]] 的竞争地位将如何
- 中国本土机构（大公等）是否会为跨境交易覆盖而在日本 SF 中获得立足点

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]
- [[real-estate-finance/INDEX|real-estate-finance index]]
- [[finance/INDEX|finance index]]
- [[derivatives/japan-cds-market-overview|Japan CDS market overview]]
- [[megabanks/mufg|MUFG]] · [[megabanks/smfg|SMFG]] · [[megabanks/mizuho-fg|Mizuho FG]]
- [[financial-regulators/japan-exchange-group|JPX]] · [[cooperative-banks/norinchukin|Norinchukin]]

## Sources

- JCR official methodology — https://www.jcr.co.jp/en/
- R&I official methodology — https://www.r-i.co.jp/en/
- JSDA structured-finance statistics — https://www.jsda.or.jp/en/
- Moody's Japan K.K. methodology library (public)
- S&P Global Ratings Japan structured-finance criteria (public)
- Fitch Ratings Japan structured-finance criteria (public)
- FSA registered credit rating agencies list (public)

---

> [!info] 校核状态
> confidence: **likely**. Sovereign-cap mechanism and split-rating dynamics are well-documented in public methodology papers from all three global agencies and in JCR / R&I commentary. Specific recent split-rating cases are abstracted to avoid naming individual transactions. Transition-matrix numbers are illustrative and reflect typical industry-discussed gaps, not single-source claims.
