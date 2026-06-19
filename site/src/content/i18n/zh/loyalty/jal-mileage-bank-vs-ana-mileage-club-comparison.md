---
source: loyalty/jal-mileage-bank-vs-ana-mileage-club-comparison
source_hash: 046e45c8844f6138
lang: zh
status: machine
fidelity: ok
title: "JAL 里程银行 vs ANA 里程俱乐部 ― 积累、兑换、合作网络、等级层级、递延收入会计"
translated_at: 2026-06-19T06:09:18.088Z
---

# JAL 里程银行 vs ANA 里程俱乐部 ― 积累、兑换、合作网络、等级层级、递延收入会计

## Wiki route

本条目作为日本两大航空忠诚度计划的 **常旅客计划（FFP）比较页** 位于 [[loyalty/INDEX|loyalty index]] 之下。请将其与 [[loyalty/japan-points-landscape|Japan points landscape]]（用于跨忠诚度生态背景）、[[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]（用于与通用积分计划存在重大差异的 IFRS 15 合同负债处理）、[[loyalty/ponta-points-deep-dive|Ponta points deep dive]]（用于 JAL 里程银行 ↔ Pontaポイント 双向兑换关系）、[[loyalty/d-point-detailed-ecosystem|d Point detailed ecosystem]] 和 [[loyalty/v-point-smbc-ccc-case|V Point case]]（用于与航空里程相互兑换的通用积分同业）、[[card-issuers/jal-card|JAL Card]] 和 [[payment-firms/jal-payment-port|JAL Payment Port]]（用于 JAL 侧的发卡与支付基础设施栈）以及 [[payments/japan-code-payment-operator-2025-market-share-matrix|Japan code-payment operator 2025 market share matrix]]（用于钱包邻接背景）配对阅读。

## TL;DR

**JAL 里程银行（JMB）** 与 **ANA 里程俱乐部（AMC）** 是日本两大主导的航空常旅客计划。两者均为 IFRS 15 / ASBJ 实务对应报告第 29 号（"重要权利"框架下的合同负债）下的 **里程计价递延收入忠诚度计划**，并在三个方面与通用积分计划（dポイント、Pontaポイント、V Point、PayPay Points、楽天ポイント）存在结构性区别：① **以里程计价的货币**，兑换主要针对航空座位库存（而非零售购买价值）；② 基于已飞行收入里程（FOP / PP）门槛的 **等级层级动态**，决定贵宾室使用、升舱优先级与服务层级；③ **联盟互操作性**（JAL → 寰宇一家，ANA → 星空联盟）打开跨航空公司的里程积累与兑换。两个计划的积累侧已通过联名信用卡（[[card-issuers/jal-card|JAL Card]]、ANA Card 系列）、合作商户扫码活动以及与通用积分计划的双向兑换，大幅扩展至 **非飞行获取**。里程负债的会计处理与现金等价积分存在重大差异 ― 在 IFRS 15, 下，航空公司使用兑换座位 / 奖励的 **独立销售价格** 将票价收入的一部分配分至所授予的里程，随后在里程被兑换或确认为流失（breakage）时释放收入。这在航空公司资产负债表上产生大额且持续的合同负债余额（JAL 与 ANA 合计通常为数千亿日元规模）。

## 计划规模与身份层

| 项目 | JAL 里程银行（JMB）| ANA 里程俱乐部（AMC）|
|---|---|---|
| 运营方 | [[card-issuers/jal-card|日本航空 (JAL) ]] | ANA Holdings 全日本空輸 (ANA) |
| 联盟 | **寰宇一家**（创始成员）| **星空联盟**（创始成员）|
| 里程有效期 | 自积累月起 36 个月（传统默认）| 自积累月起 36 个月 |
| 等级层级指标 | 基于已飞行收入里程的 **FLY ON POINT (FOP)** | 基于已飞行收入里程的 **PREMIUM POINT (PP)** |
| 会员基础（日本 + 全球）| 数千万账户（JMB + JGC 合计）| 数千万账户（AMC + SFC 合计）|
| 终身等级相当 | **JAL Global Club (JGC)** ― 一次满足 FOP 门槛并持有 JGC 合资格 JAL 卡即可获得的永久认定层级 | **Super Flyers Club (SFC)** ― 同样模式，一次满足 PP 门槛并持有 SFC 合资格 ANA 卡即可永久认定 |
| 高端等级层级 | **JMB Diamond**（最高级年度资格者；FOP 门槛）| **AMC Diamond**（最高级年度资格者；PP 门槛）|
| 锚点联名发卡方 | [[card-issuers/jal-card|JAL Card]]（株式会社JALカード, JAL 100% 子公司）| ANA Card 系列 ― 由合作发卡公司（JCB / VISA / Master / AmEx / Diners）以联名方式发行 |
| 里程计划运营方 | JAL 内部（无独立运营公司）| ANA 内部（无独立运营公司）|

**JGC / SFC 永久等级机制** 是日本 FFP 特有的功能：会员一旦在单个公历年度满足 FOP / PP 门槛，即可申请 JAL Global Club 或 Super Flyers Club 信用卡（"终身门票"模式），只要继续持有该卡并支付年费，无论此后年度的飞行活动如何，都保留某一服务层级（Sapphire / Gold 相当）。这造就了在非日本 FFP 中不存在同等规模的、结构上庞大的"前飞行者"等级持有者基础。

### 飞行积累

| 舱位 / 票价 | JMB 积累率 | AMC 积累率 |
|---|---|---|
| 头等 / J 舱 / 公务（付费高端票价）| 飞行距离的 100-150% | 飞行距离的 100-150% |
| 经济舱（付费公示票价）| 飞行距离的 70-100% | 飞行距离的 70-100% |
| 折扣经济舱 | 飞行距离的 30-70% | 飞行距离的 30-70% |
| 奖励机票 | 0% | 0% |
| 合作航空公司航班（寰宇一家 / 星空联盟）| 按合作方而异、依票价舱位档而定 | 按合作方而异、依票价舱位档而定 |

两个计划均发布详细的票价舱位至积累率对照表；结构性模式相似（票价舱位档越高 = 积累 % 越高），对等级持有者有奖励。

### 非飞行积累

如今更大量的里程发行来自非飞行来源，主要是联名信用卡与合作兑换：

| 非飞行来源 | JMB | AMC |
|---|---|---|
| **联名卡** | [[card-issuers/jal-card|JAL Card]]（JCB / VISA / Master / AmEx / Diners，全部为 5 国际品牌）| ANA Card 系列（JCB / VISA / Master / AmEx / Diners，合作发行）|
| **刷卡积累** | 视卡级别标准 0.5-1% 里程/¥；「ショッピングマイル・プレミアム」可选 ¥3,300/年 附加费使其翻倍至 1% | 标准 0.5-1% 里程/¥；「10マイルコース」可选费用结构使积累翻倍 |
| **高端卡级别** | JAL Card CLUB-A ゴールド, JAL Card プラチナ, JAL アメリカン・エキスプレス・カード CLUB-A ゴールド | ANA ワイドゴールドカード, ANA カード プレミアム, ANA アメリカン・エキスプレス・プレミアム・カード |
| **通用积分双向兑换** | **Pontaポイント ↔ JMB**（2 Pontaポイント → 1 里程，Pontaポイント-至-里程方向的兑换比率；参见 [[loyalty/ponta-points-deep-dive|Ponta points deep dive]]）；**dポイント ↔ JMB**（类似双向）；历史上有其他合作方 | **楽天ポイント → AMC**（可变兑换）；**Tポイント → AMC**（旧）；**Pontaポイント → AMC**（非标准直接路径）；各类合作积分兑换 |
| **商城购物门户** | 「JAL ショッピングマイル・プログラム」+「JAL Mall」| 「ANA Mall」+「ANAマイレージモール」|
| **酒店合作积累** | JAL ABC, JAL ホテル, 合作全球酒店连锁（寰宇一家 + 非联盟酒店合作方）| ANA インターコンチネンタル, ANA Crowne Plaza, 合作全球酒店连锁 |
| **其他** | 租车、餐厅、休闲合作计划 | 租车、餐厅、休闲合作计划 |

**最深的结构性差异** 在 **通用积分双向兑换** 侧：**JAL 里程银行与 Pontaポイント 关系尤为牢固**（由 Loyalty Marketing 运营，三菱关联），并因 JAL 作为 Pontaポイント 联盟成员的身份而得到强化。**ANA 里程俱乐部与 楽天ポイント 以及历史上的 Tポイント 关系更强**，反映了不同的商业合作谈判。在 [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|2024 Lawson + Mitsubishi take-private]] 之下，JAL ↔ Pontaポイント ↔ Lawson 的跨生态系统成为更连贯的三角形。

## 里程兑换 ― 座位库存主导

两个计划的主导兑换方式都是针对航空公司控制的奖励座位库存的 **奖励机票**：

| 奖励类型 | JMB 模式 | AMC 模式 |
|---|---|---|
| **国内往返奖励** | 视季节 / 航线约 12,000-20,000 里程 | 视季节 / 航线约 12,000-21,000 里程 |
| **国际经济舱奖励（亚洲）** | 视季节 / 航线约 30,000-50,000 里程 | 视季节 / 航线约 30,000-50,000 里程 |
| **国际经济舱奖励（跨太平洋）** | 约 50,000-80,000 里程 | 约 50,000-90,000 里程 |
| **国际公务舱奖励（跨太平洋）** | 约 80,000-150,000 里程 | 约 85,000-165,000 里程 |
| **升舱奖励** | 可用；里程成本不一 | 可用；里程成本不一 |
| **合作航空公司奖励（联盟）** | 寰宇一家合作方（BA, AA, QF, CX, JL, IB 等）| 星空联盟合作方（UA, LH, SQ, AC, NH, OZ 等）|
| **非飞行兑换** | 有限（电子货币 / 合作商品）| 有限（电子货币 / 合作商品）|
| **里程 → 电子货币兑换** | **JAL ペイ**（JAL Pay；将里程兑换为 JAL Pay 余额，经 ePay 返还）| **ANA Pay**（将里程兑换为 ANA Pay 余额）|

兑换经济性的经验法则是，国际高端舱兑换 **每里程约 2-3¥等值价值**（两个计划的典型"甜点区"），而淡季国内经济舱约为 **~1¥/里程**。这大幅高于通用积分兑换价值（约 1¥/积分），这正是积累里程而非兑换为通用积分或现金的经济理由。

**里程 → 电子货币兑换** 路径（JAL Pay、ANA Pay）提供了类现金出口，但通常兑换比率不及高端舱奖励兑换 ― 在经济上，它更像是"软底线"而非首要兑换目标。

## 等级层级动态 ― FOP / PP 与 JGC / SFC

| 等级层级 | JMB（FOP 门槛）| AMC（PP 门槛）| 服务层级相当 |
|---|---|---|---|
| 最高（Diamond / Premier）| JMB Diamond（约 100,000 FOP）| AMC Diamond（约 100,000 PP）| 头等舱贵宾室，一切最高优先 |
| 高端（Sapphire）| JMB Sapphire（约 50,000 FOP）| AMC Platinum（约 50,000 PP）| 公务舱贵宾室，寰宇一家 Sapphire / 星空 Gold |
| Crystal / Bronze | JMB Crystal（约 30,000 FOP）| AMC Bronze（约 30,000 PP）| Ruby / Silver 相当 |
| 经卡终身永久 | **JGC (JAL Global Club)** ― 以卡为锚的 Sapphire 相当认定 | **SFC (Super Flyers Club)** ― 以卡为锚的 Platinum 相当认定 | 一旦以卡为锚即永久 |

两个计划均按年度（公历年基础）重置，但 **JGC / SFC 永久等级机制** 是最重要的日本特有功能。其经济含义是 **JGC / SFC 持卡人构成永久忠诚会员的长尾**，他们的递延里程负债即使在飞行减少时仍持续存在，而他们的刷卡产生稳定的里程发行流，航空公司必须就此对合同负债进行计提。

## 递延收入会计 ― IFRS 15 合同负债

JAL 与 ANA 均依据 IFRS / 与 J-GAAP 对齐的准则报告，并将 **未兑换里程作为 IFRS 15 "重要权利"框架下的合同负债（递延收入）** 处理：

| 事件 | 会计处理 |
|---|---|
| **客户购买可赚取里程的机票** | 使用独立销售价格（SSP）在机票服务义务与里程授予义务之间配分交易价格；在飞行完成时将机票服务部分确认为收入；将里程部分确认为合同负债 |
| **客户购买可赚取里程的机票相关附加服务**（例如付费升舱）| 同样处理 ― 按 SSP 分割交易价格 |
| **客户从联名刷卡或合作商户积累中赚取里程** | 里程发行方（JAL / ANA）就所购里程从发卡方或合作方收取现金；按收到的现金金额确认为合同负债 |
| **客户将里程兑换为奖励机票** | 在兑换之日（或视航空公司确认政策在飞行时）将相应合同负债释放为已确认收入 |
| **里程未兑换而失效** | 基于流失（breakage）假设释放合同负债（通常通过历史兑换模式统计模型估计）；流失在 IFRS 15 下按实际兑换模式比例确认 |

基于公开 IR 披露，JAL 与 ANA 双方的 **合同负债余额** 均为 **数千亿日元规模**（确切余额逐年变动，并在合并资产负债表的"其他负债"/"合同负债"项目中披露）。流失假设每年复核，JAL 的 COVID 期及 COVID 后披露显示了疫情期间确认政策（里程有效期延长、特别流失假设）如何重大影响所报收入。

与 **[[loyalty/d-point-detailed-ecosystem|dポイント]]** 的对比在于，NTT docomo 的合同负债披露将 dポイント 与电信收入递延额合并，而 **JAL 与 ANA 在清晰可识别的合同负债项目中披露里程负债**（因为对航空公司而言里程是主导性的非飞行递延收入义务）。更广义的框架记录于 [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]。

## 合作网络深度 ― 超越联盟

**寰宇一家 vs 星空联盟** 的配置决定了跨航空公司的积累 / 兑换面，但两个计划都已构建了远超其联盟的合作网络：

| 合作类别 | JMB 深度 | AMC 深度 |
|---|---|---|
| **联盟航空公司** | 寰宇一家（BA, AA, QF, CX, IB, MH, S7, 等）| 星空联盟（UA, LH, SQ, AC, OZ, EVA, TG 等）|
| **仅代码共享的合作航空公司（非联盟）** | 阿联酋航空（代码共享）、各类地区性 | TUI 等 |
| **酒店** | JAL 酒店连锁 + 合作连锁（希尔顿、IHG、万豪经里程兑换）| 洲际酒店集团、希尔顿、万豪 |
| **租车** | 赫兹、安飞士 等 | 赫兹、安飞士 等 |
| **通用积分双向兑换** | **Pontaポイント**（锚点）、dポイント、其他 | **楽天ポイント**（锚点）、Tポイント（旧）、其他 |
| **联名卡** | [[card-issuers/jal-card|JAL Card]]（5 国际品牌）| ANA Card 系列（经合作发行方的 5 国际品牌）|
| **百货 / 电子货币** | JR 东日本 ViewCard（有限）、各类零售 | au PAY（有限）、各类零售 |
| **慈善捐赠** | JMB 慈善计划 | AMC 慈善计划 |

## 竞争定位

| FFP | 锚点航空公司 | 联盟 | 会员规模 | 锚点通用积分合作方 | 联名卡 |
|---|---|---|---|---|---|
| **JMB** | JAL | 寰宇一家 | 数千万 | Pontaポイント | [[card-issuers/jal-card|JAL Card]] |
| **AMC** | ANA | 星空联盟 | 数千万 | 楽天ポイント（锚点）、历史上的 Tポイント | ANA Card |
| Skywards（阿联酋）| 阿联酋航空 | 无（独立）| 全球 | 日本无 | EK 阿联酋 |
| MileagePlus（UA）| 联合航空 | 星空联盟 | 全球 | 日本无 | UA 合作卡 |
| AAdvantage（美国）| AA | 寰宇一家 | 全球 | 日本无 | AA 合作卡 |
| BAEC（BA）| BA | 寰宇一家 | 全球 | 日本无 | BA 合作卡 |

JMB 与 AMC 相对于非日本 FFP 的结构性优势在于 **日本的通用积分双向兑换网络**，这在外国市场不存在同等规模。Pontaポイント 与 楽天ポイント 为日本居民会员大幅扩展了非飞行获取的足迹。

## Related

- [[loyalty/INDEX|loyalty index]]
- [[loyalty/japan-points-landscape|Japan points landscape]]
- [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]
- [[loyalty/ponta-points-deep-dive|Ponta points deep dive]]
- [[loyalty/d-point-detailed-ecosystem|d Point detailed ecosystem]]
- [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]
- [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation|d Point / au telco-point consolidation case]]
- [[loyalty/t-point-v-point-post-2024-merger|T Point + V Point post-2024 merger detail]]
- [[loyalty/jre-point-and-jre-bank-ecosystem|JRE Point + JRE Bank ecosystem]]
- [[loyalty/au-pay-loyalty-ecosystem-deep|au PAY loyalty ecosystem deep]]
- [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|SB / Yahoo / PayPay unified points]]
- [[card-issuers/jal-card|JAL Card]]
- [[payment-firms/jal-payment-port|JAL Payment Port]]
- [[card-issuers/jr-east-financial|JR-East Financial Subsidiaries]]
- [[megabanks/au-fh|au Financial Holdings]]
- [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|Lawson + Mitsubishi 2024 deep tie-up]]
- [[payments/japan-code-payment-operator-2025-market-share-matrix|Japan code-payment operator 2025 market share matrix]]
- [[INDEX|FinWiki index]]

## Sources

- JAL 里程银行官方网站: https://www.jal.co.jp/jp/ja/jalmile/
- JAL 里程银行（英文）: https://www.jal.co.jp/jp/en/jmb/
- ANA 里程俱乐部官方网站: https://www.ana.co.jp/ja/jp/amc/
- ANA 里程俱乐部（英文）: https://www.ana.co.jp/en/us/amc/
- JAL 卡官方网站: https://www.jal.co.jp/jp/ja/jalcard/
- ANA 卡官方网站: https://www.ana.co.jp/ja/jp/amc/anacard/
- JAL 投资者关系: https://www.jal.com/ja/investor/
- ANA 投资者关系: https://www.ana.co.jp/group/investors/
- 寰宇一家联盟官方网站: https://www.oneworld.com/
- 星空联盟官方网站: https://www.staralliance.com/
