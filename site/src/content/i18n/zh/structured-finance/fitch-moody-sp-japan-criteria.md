---
source: structured-finance/fitch-moody-sp-japan-criteria
source_hash: 8573a8e5af040dab
lang: zh
status: machine
fidelity: ok
title: "Fitch / Moody's / S&P 日本结构化金融准则 — 全球评级机构 vs JCR / R&I"
translated_at: 2026-06-01T04:15:40.114Z
---
# Fitch / Moody's / S&P 日本结构化金融准则 — 全球评级机构 vs JCR / R&I

## TL;DR

日本证券化通常采用双评级：国内评级机构 [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR and R&I]] 覆盖日元计价投资者基础（寿险公司、地区银行、[[regional-banks/japan-post-bank|Japan Post Bank]]），而当交易面向外国投资者或美元计价分层时，会加入 Moody's、S&P 和 Fitch。 senior 层的拆分评级差距可能达到 1–3 档，驱动因素包括：(i) **主权评级上限** —— 全球评级机构将日本结构化分层限制在日本主权评级或以下（当前为 A+/A1），而 JCR 和 R&I 在国内将主权评为 AAA / AA+；(ii) 对日本住房抵押贷款和汽车资产池的**回收假设**不同（全球评级机构通常对住宅止赎时间和地方抵押品转售价值更保守）；(iii) 全球评级机构更严格的**转移矩阵**，会对同一资产池产生更高的模型化违约频率。结果是，JCR 评为 AAA 的 senior auto-ABS 分层通常被 S&P 评为 A 或 AA，这进而决定外国资产管理人是否能在全球 IG 授权中持有该债券。

## Wiki 路线

本条目位于 [[structured-finance/INDEX|structured-finance index]] 下，作为**评级机构准则比较**节点。请对照 [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]] 阅读国内评级机构视角，对照 [[structured-finance/japan-abs-market-overview|Japan ABS market overview]] 阅读投资者需求侧，对照 [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]] 阅读评级所在的法律实体层。相关跨境角度：[[real-estate-finance/INDEX|real-estate-finance index]]（RMBS / J-REIT 债务）以及 [[finance/INDEX|finance index]] 用于更广泛的信用利差背景。

## 1. 三大全球评级机构 — 日本结构化金融足迹

| 机构 | 日本 SF 重点 | 办公室 | 典型授权 |
|---|---|---|---|
| **Moody's Japan K.K.** | RMBS、auto ABS、CMBS、consumer ABS、repackaging notes | 东京 | 跨境分层、面向外国投资者营销的交易 |
| **S&P Global Ratings Japan** | RMBS、ABCP conduits、auto ABS、CLO investor analysis | 东京 | Megabank-sponsored deals、美元计价分层 |
| **Fitch Ratings Japan** | RMBS、auto ABS、repackaging、偶发 CMBS | 东京 | 外国投资者需求驱动的授权 |

三者均在 FSA 的 [[financial-regulators/japan-exchange-group|JPX]] 相邻监管制度下注册为**信用评级机构**（最初是 2010  年《金融商品交易法》修订，在 2008  危机后引入注册和行为规则）。

## 2. 主权评级上限 — 结构性天花板

全球评级机构对结构化金融发行适用**主权评级上限（或 "country ceiling"）**。机制如下：

| 步骤 | 规则 |
|---|---|
| Country ceiling | 对某一司法辖区发行的任何结构化金融分层设置上限，锚定主权评级 |
| 日本主权评级 | S&P: A+ / Moody's: A1 / Fitch: A（截至最近周期，历史上在 2010 年代从 AA / Aa 下调） |
| 分层上限 | 对符合 "rated above sovereign" 准则的高评级结构化金融工具，通常等于主权上限或高一档 |
| 结果 | 即使底层资产池原本合格，日本 RMBS senior 分层也难以被 S&P 评为 AAA —— 典型上限为 AA+ / AA |

相对地，**JCR 和 R&I 在国内尺度上将日本主权评为 AAA（或 AA+）**，不存在 country ceiling 问题。因此，从 JCR 获得 AAA 的 senior 分层，经常在 S&P 处落在 AA / AA- —— senior 层出现 2档评级差。

## 3. 建模假设差异

### 3a. 违约频率 / 转移矩阵

全球评级机构使用来自多司法辖区违约数据集（主要为美国、欧盟、英国）的长期**转移矩阵**。应用于日本资产池时，这会产生比 JCR / R&I 基于国内经验的矩阵更高的模型化违约频率，后者反映了：(i) 日本消费者违约率历史上较低，(ii) 文化上的支付纪律，(iii) 即便在 1997–2003  银行危机期间，住宅抵押贷款止赎率也较低。

### 3b. 回收假设

| 资产类别 | JCR / R&I 假设 | 全球评级机构假设 | 差距 |
|---|---|---|---|
| 住宅抵押贷款（城市） | 60–75% LGD-adjusted recovery，历时 18–24 个月 | 50–65%，历时 24–36 个月 | 温和 |
| 住宅抵押贷款（农村 / 地方） | 50–65% recovery | 35–50%（止赎流动性 / 转售价值扣减） | 显著 |
| 汽车贷款 | 35–45% recovery（二手车批发价值） | 25–40% | 温和 |
| 消费者无担保 | 0–5% recovery | 0–5% | 可忽略 |
| CMBS（东京 CBD 办公楼） | 65–80% recovery | 55–75% | 温和 |
| CMBS（地方零售 / 酒店） | 45–60% recovery | 30–50% | 显著 |

地方抵押品回收差距是地区资产池交易中拆分评级的最大驱动因素。

### 3c. 现金流压力

全球评级机构叠加额外压力情景 —— 利率冲击、提前还款率压力、servicer-disruption 尾部风险 —— JCR / R&I 要么建模不那么激进，要么将其作为定性因素处理。

## 4. 转移矩阵差异 — 经验观察

与具有相同名义字母评级的全球评级机构评级分层相比，JCR 评级的 SF 分层历史上显示出很低的转移率（下调）。该差距反映：(i) 不同的建模哲学，(ii) 不同的样本群体（JCR 样本几乎全为日本，全球评级机构样本为多司法辖区），以及 (iii) JCR 对定性因素（servicer strength、originator track record、[[megabanks/mufg|MUFG]] / [[megabanks/smfg|SMFG]] / [[megabanks/mizuho-fg|Mizuho FG]] sponsor support）赋予更强权重。

这是一个有争议的问题 —— JCR 认为其国内锚定的方法论更好反映日本资产池的实际表现；全球评级机构则认为其方法论更保守且更具全球可比性。

## 5. 近期 JCR / S&P 拆分评级案例 — 示例性模式

在不点名具体交易的情况下，公开披露的 JSDA SF 统计中反复出现以下模式：

| 交易类型 | JCR 典型评级 | S&P / Moody's 典型评级 | 利差含义 |
|---|---|---|---|
| Megabank-sponsored auto ABS（senior） | AAA | AA / AA+ | 外国投资者获得 5–15 bp pickup |
| Regional-bank RMBS（senior） | AAA | A+ / AA- | 20–40 bp pickup |
| CMBS senior（东京 CBD） | AAA | AA- / AA | 15–25 bp pickup |
| CMBS senior（地方） | AA / AA+ | A / A+ | 30–60 bp pickup |
| ABCP（megabank conduit） | A-1+ / J-1+ | A-1+ | 极小 |

2010 年代曾周期性出现 S&P 或 Moody's 下调日本 SF 分层而 JCR 继续确认评级的情形，由此引发发行人和投资者关于方法论分歧的评论。

## 6. 为什么仍然采用双评级

尽管存在拆分评级成本，双评级或三评级仍然常见，因为：

1. **外国投资者基础** —— 运行全球 IG 授权的全球资产管理人需要全球评级机构评级才能持有债券；仅有 JCR 不足够
2. **回购资格** —— 对跨境回购（例如 ECB 抵押品框架、美国三方回购），只有全球评级机构评级被计入
3. **银行资本处理** —— 在 Basel III 标准法下，只有来自认可 ECAI 的评级被计入；在一些司法辖区，JCR / R&I 未被认可
4. **营销观感** —— 全球评级机构评级传递“可供外国账户投资”的信号，即便定价基于 JCR

承销商（[[securities-firms/mufg-securities|MUFG MS]] / [[securities-firms/smbc-nikko|SMBC Nikko]] / [[securities-firms/mizuho-securities|Mizuho Securities]]）会根据目标投资者名单选择聘请哪些评级机构。

## 7. 反方观点

- **"Sovereign-cap mechanical"** —— 批评者认为 country ceiling 过于机械，没有反映本币 JGB 从未违约这一事实；结构良好的日本 SF 分层可以说应不受上限限制。全球评级机构基于 transfer-and-convertibility-risk 维持上限，尽管日本没有此类限制
- **"JCR / R&I too lenient"** —— 外国投资者有时认为 JCR / R&I 的 AAA 评级相对于 S&P 的 AA- 被高估，即便只有国内评级可用，也会更接近全球评级机构水平定价
- **"Transition-matrix sampling bias"** —— JCR 关于其样本更能反映日本特定行为的辩护是有效的，但如果日本信用条件向全球常态收敛（例如家庭杠杆上升、[[financial-regulators/boj|BOJ]] 利率正常化下的抵押贷款压力），会产生前瞻性盲点
- **"Tokyo-office staffing constraints"** —— 全球评级机构覆盖日本 SF 的团队小于国内评级机构；一些发行人报告评级周转更慢、发行人互动颗粒度更低
- **"Methodology updates create cliff risk"** —— 当全球评级机构更新其结构化金融准则时，大规模评级复查可能在日本 SF 全领域产生同步下调，造成利差扩大，而仅 JCR 评级的交易可避免这种情况

## 8. 未决问题

- 如果 [[financial-regulators/boj|BOJ]] 正常化利率、日本家庭违约率上升并接近全球平均水平，拆分评级差距会收窄多少
- FSA 是否最终会向全球评级机构施压，要求其对高质量日本 SF 取消主权上限机制
- 新的日本 SF 资产类别（ESG-linked auto ABS、green RMBS）是否会由全部五家评级机构评级，还是按司法辖区拆分
- 如果更多外国投资者进入日本 SF 市场并默认要求全球评级机构评级，[[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I]] 的竞争地位如何
- 中国评级机构（Dagong 等）是否会在日本 SF 跨境交易覆盖中取得足迹

## 相关

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]
- [[real-estate-finance/INDEX|real-estate-finance index]]
- [[finance/INDEX|finance index]]
- [[derivatives/japan-cds-market-overview|Japan CDS market overview]]
- [[megabanks/mufg|MUFG]] · [[megabanks/smfg|SMFG]] · [[megabanks/mizuho-fg|Mizuho FG]]
- [[financial-regulators/japan-exchange-group|JPX]] · [[cooperative-banks/norinchukin|Norinchukin]]

## 来源

- JCR official methodology — https://www.jcr.co.jp/en/
- R&I official methodology — https://www.r-i.co.jp/en/
- JSDA structured-finance statistics — https://www.jsda.or.jp/en/
- Moody's Japan K.K. methodology library (public)
- S&P Global Ratings Japan structured-finance criteria (public)
- Fitch Ratings Japan structured-finance criteria (public)
- FSA registered credit rating agencies list (public)

---

> [!info] 校核状态
> confidence: **likely**. 主权上限机制和拆分评级动态在三大全球评级机构的公开方法论论文以及 JCR / R&I 评论中均有充分记录。具体近期拆分评级案例被抽象化，以避免点名单项交易。转移矩阵数字为示例性，反映行业通常讨论的差距，而非单一来源主张。
