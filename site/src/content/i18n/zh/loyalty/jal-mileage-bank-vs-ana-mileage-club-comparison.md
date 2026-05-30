---
source: loyalty/jal-mileage-bank-vs-ana-mileage-club-comparison
source_hash: 2482dd8a91e6f522
lang: zh
status: machine
fidelity: ok
title: "JAL Mileage Bank vs ANA Mileage Club —— 累积、兑换、合作网络、身份等级、递延收入会计"
translated_at: 2026-05-30T14:48:27.664Z
---

# JAL Mileage Bank vs ANA Mileage Club —— 累积、兑换、合作网络、身份等级、递延收入会计

## Wiki 路由

本条目归于 [[loyalty/INDEX|loyalty index]]，作为两家日本主力航空忠诚度计划的**常旅客计划（FFP）比较页面**。请与 [[loyalty/japan-points-landscape|Japan points landscape]]（跨忠诚度生态背景）、[[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]（与通用积分计划实质不同的 IFRS-15 合约负债处理）、[[loyalty/ponta-points-deep-dive|Ponta points deep dive]]（JAL Mileage Bank ↔ Pontaポイント 双向兑换关系）、[[loyalty/d-point-detailed-ecosystem|d Point detailed ecosystem]] 与 [[loyalty/v-point-smbc-ccc-case|V Point case]]（与航空里程互转的通用积分同类）、[[JapanFG/jal-card|JAL Card]] 与 [[JapanFG/jal-payment-port|JAL Payment Port]]（JAL 一侧的发卡与支付基础设施栈）以及 [[payments/japan-code-payment-operator-2025-market-share-matrix|Japan code-payment operator 2025 market share matrix]]（钱包相邻背景）配合阅读。

## TL;DR

**JAL Mileage Bank（JMB）** 与 **ANA Mileage Club（AMC）** 是两个占主导地位的日本航空常旅客计划。两者均为 IFRS 15 / ASBJ 第 29 号公报下的**以里程计价的递延收入忠诚度计划**（「material right（重大权利）」框架下的合约负债），且在三个方面与通用积分计划（dポイント、Pontaポイント、V Point、PayPay Points、Rakuten Points）结构上有别：① **以里程计价的货币**，兑换主要针对航空座位库存（而非零售购买价值）；② 基于已飞行收入里程（FOP / PP）阈值的**身份等级动态**，决定贵宾室准入、升舱优先权与服务层级；③ **联盟互通**（JAL → oneworld，ANA → Star Alliance），开启跨航司里程累积与兑换。两个计划的累积侧已实质性扩展至**非飞行赚取**，经由联名信用卡（[[JapanFG/jal-card|JAL Card]]、ANA Card 系列）、合作商户扫码活动，以及与通用积分计划的双向兑换。里程负债的会计处理与现金等价积分有实质差异 —— IFRS 15, 下，航司使用兑换座位 / 奖励的**单独售价**将一部分机票收入分摊至所授予里程，然后随里程被兑换或确认为 breakage 而释放收入。这在航司资产负债表上产生庞大、持续的合约负债余额（JAL 与 ANA 合计通常为数千亿日元规模）。

## 计划规模与身份层

| 项目 | JAL Mileage Bank（JMB） | ANA Mileage Club（AMC） |
|---|---|---|
| 运营方 | [[JapanFG/jal-card|日本航空 (JAL) ]] | ANA Holdings 全日本空輸（ANA） |
| 联盟 | **oneworld**（创始成员） | **Star Alliance**（创始成员） |
| 里程有效期 | 自累积月起 36 个月（旧有默认） | 自累积月起 36 个月 |
| 身份等级指标 | **FLY ON POINT（FOP）**，基于已飞行收入里程 | **PREMIUM POINT（PP）**，基于已飞行收入里程 |
| 会员基础（日本 + 全球） | 数千万账户（JMB + JGC 合计） | 数千万账户（AMC + SFC 合计） |
| 终身身份等价 | **JAL Global Club（JGC）** —— 一次达到 FOP 阈值并持有 JGC 资格 JAL Card 即获得的永久认可层 | **Super Flyers Club（SFC）** —— 同一模式，一次达到 PP 阈值并持有 SFC 资格 ANA Card 即获得永久认可 |
| 高级身份层 | **JMB Diamond**（顶层年度资格；FOP 阈值） | **AMC Diamond**（顶层年度资格；PP 阈值） |
| 锚点联名卡发行方 | [[JapanFG/jal-card|JAL Card]]（株式会社JALカード，JAL 100% 子公司） | ANA Card 系列 —— 由合作发卡公司（JCB / VISA / Master / AmEx / Diners）以联名形式发行 |
| 里程计划运营方 | JAL 内部（无单独运营公司） | ANA 内部（无单独运营公司） |

**JGC / SFC 永久身份机制**是日本 FFP 特有的特征：会员一旦在单一日历年达到 FOP / PP 阈值，即可申请 JAL Global Club 或 Super Flyers Club 信用卡（「终身门票」模式），且只要持续持有该卡并支付年费，无论后续年度飞行活动如何，均保留一个服务层级（Sapphire / Gold 等价）。这创造了一个结构上庞大的「前飞行者」身份持有者基础，在非日本 FFP 中不存在相同规模。

### 飞行累积

| 舱位 / 票价 | JMB 累积率 | AMC 累积率 |
|---|---|---|
| 头等 / J 舱 / 商务（付费高级票价） | 飞行距离的 100-150% | 飞行距离的 100-150% |
| 经济（付费公布票价） | 飞行距离的 70-100% | 飞行距离的 70-100% |
| 折扣经济 | 飞行距离的 30-70% | 飞行距离的 30-70% |
| 奖励机票 | 0% | 0% |
| 合作航司航班（oneworld / Star Alliance） | 因合作方而异，依票价等级 | 因合作方而异，依票价等级 |

两个计划均公布详细的票价舱位至累积率对照表；结构模式相似（票价等级越高 = 累积百分比越高），并对身份持有者设有奖励。

### 非飞行累积

如今更大体量的里程发行来自非飞行来源，主要是联名信用卡与合作兑换：

| 非飞行来源 | JMB | AMC |
|---|---|---|
| **联名卡** | [[JapanFG/jal-card|JAL Card]]（JCB / VISA / Master / AmEx / Diners，皆为 5 国际品牌） | ANA Card 系列（JCB / VISA / Master / AmEx / Diners，合作方发行） |
| **刷卡消费累积** | 标准 0.5-1% 里程/¥ 依卡等级而定；「ショッピングマイル・プレミアム」可选 ¥3,300/年 附加项使其翻倍至 1% | 标准 0.5-1% 里程/¥；「10マイルコース」可选费用结构使累积翻倍 |
| **高级卡层** | JAL Card CLUB-A ゴールド、JAL Card プラチナ、JAL アメリカン・エキスプレス・カード CLUB-A ゴールド | ANA ワイドゴールドカード、ANA カード プレミアム、ANA アメリカン・エキスプレス・プレミアム・カード |
| **通用积分双向兑换** | **Pontaポイント ↔ JMB**（2 Pontaポイント → 1 里程，Pontaポイント 至里程方向的兑换比率；见 [[loyalty/ponta-points-deep-dive|Ponta points deep dive]]）；**dポイント ↔ JMB**（类似双向）；历史上有其他合作方 | **Rakuten Points → AMC**（可变兑换）；**Tポイント → AMC**（遗留）；**Pontaポイント → AMC**（非标准直接路线）；各类合作积分兑换 |
| **商城购物门户** | 「JAL ショッピングマイル・プログラム」+「JAL Mall」 | 「ANA Mall」+「ANAマイレージモール」 |
| **酒店合作累积** | JAL ABC、JAL ホテル、合作全球酒店连锁（oneworld + 非联盟酒店合作方） | ANA インターコンチネンタル、ANA Crowne Plaza、合作全球酒店连锁 |
| **其他** | 租车、餐厅、休闲合作计划 | 租车、餐厅、休闲合作计划 |

**最深层的结构差异**在于**通用积分双向兑换**一侧：**JAL Mileage Bank 与 Pontaポイント 有尤为牢固的关系**（Loyalty Marketing 运营，三菱关联），并因 JAL 作为 Pontaポイント 联盟成员的身份而强化。**ANA Mileage Club 与 Rakuten Points 及历史上的 Tポイント 关系更强**，反映了不同的商业合作方谈判。在 [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|2024 Lawson + Mitsubishi take-private]]之下，JAL ↔ Pontaポイント ↔ Lawson 跨生态成为更连贯的三角。

## 里程兑换 —— 座位库存主导

两个计划的主导兑换方式皆为针对承运人控制的奖励座位库存的**奖励航空机票**：

| 奖励类型 | JMB 模式 | AMC 模式 |
|---|---|---|
| **国内往返奖励** | 约 12,000-20,000 里程，依季节 / 航线 | 约 12,000-21,000 里程，依季节 / 航线 |
| **国际经济奖励（亚洲）** | 约 30,000-50,000 里程，依季节 / 航线 | 约 30,000-50,000 里程，依季节 / 航线 |
| **国际经济奖励（跨太平洋）** | 约 50,000-80,000 里程 | 约 50,000-90,000 里程 |
| **国际商务奖励（跨太平洋）** | 约 80,000-150,000 里程 | 约 85,000-165,000 里程 |
| **升舱奖励** | 可用；里程成本不一 | 可用；里程成本不一 |
| **合作航司奖励（联盟）** | oneworld 合作方（BA、AA、QF、CX、JL、IB 等） | Star Alliance 合作方（UA、LH、SQ、AC、NH、OZ 等） |
| **非飞行兑换** | 有限（电子货币 / 合作产品） | 有限（电子货币 / 合作产品） |
| **里程 → 电子货币转换** | **JAL ペイ**（JAL Pay；里程转换为 JAL Pay 余额，经 ePay 返还） | **ANA Pay**（里程转换为 ANA Pay 余额） |

兑换经济学的经验法则是国际高级舱兑换**每里程约 2-3¥ 等价价值**（两个计划的典型「甜蜜点」），对比淡季国内经济**约 1¥/里程**。这实质性高于通用积分兑换价值（约 1¥/积分），这正是累积里程而非转换为通用积分或现金的经济正当性。

**里程 → 电子货币转换**路线（JAL Pay、ANA Pay）提供类现金的退出，但兑换比率通常不如高级舱奖励兑换有利 —— 经济上它充当「软底」而非主要兑换目标。

## 身份等级动态 —— FOP / PP 与 JGC / SFC

| 身份等级 | JMB（FOP 阈值） | AMC（PP 阈值） | 服务层级等价 |
|---|---|---|---|
| 顶层（Diamond / Premier） | JMB Diamond（约 100,000 FOP） | AMC Diamond（约 100,000 PP） | 头等舱贵宾室，一切最高优先 |
| 高级（Sapphire） | JMB Sapphire（约 50,000 FOP） | AMC Platinum（约 50,000 PP） | 商务舱贵宾室，oneworld Sapphire / Star Gold |
| Crystal / Bronze | JMB Crystal（约 30,000 FOP） | AMC Bronze（约 30,000 PP） | Ruby / Silver 等价 |
| 经卡永久终身 | **JGC（JAL Global Club）** —— 以卡为锚的 Sapphire 等价认可 | **SFC（Super Flyers Club）** —— 以卡为锚的 Platinum 等价认可 | 一旦以卡为锚即永久 |

两个计划均按年度重置（日历年基准），但 **JGC / SFC 永久身份机制**是最重要的日本特有特征。经济含义是 **JGC / SFC 持卡人代表一条永久忠诚会员的长尾**，其递延里程负债即便在飞行减少时仍持续，且其刷卡消费产生稳定的里程发行流，航司必须对此计提合约负债。

## 递延收入会计 —— IFRS 15 合约负债

JAL 与 ANA 均按 IFRS / J-GAAP 对齐准则报告，并在 IFRS 15 「material right（重大权利）」框架下将**未兑换里程作为合约负债（递延收入）**处理：

| 事件 | 会计处理 |
|---|---|
| **客户购买赚取里程的机票** | 使用单独售价（SSP）在机票服务义务与里程授予义务之间分摊交易价格；在航班完成时将机票服务部分确认为收入；将里程部分确认为合约负债 |
| **客户购买赚取里程的机票相关附加项**（如付费升舱座位） | 同样处理 —— 按 SSP 拆分交易价格 |
| **客户从联名卡消费或合作商户累积赚取里程** | 里程发行方（JAL / ANA）就所购里程从发卡方或合作方收取现金；按收取现金金额确认为合约负债 |
| **客户兑换里程换取奖励机票** | 在兑换日（或航班日，依承运人确认政策而定）将相应合约负债释放为已确认收入 |
| **里程未兑换即失效** | 基于 breakage 假设（通常经历史兑换模式统计模型估算）释放合约负债；breakage 在 IFRS 15 下按实际兑换模式成比例确认 |

基于公开 IR 披露，JAL 与 ANA 的**合约负债余额**皆为**数千亿日元规模**（确切余额逐年不一，并在合并资产负债表的「其他负债」/「合约负债」科目披露）。breakage 假设每年审视，JAL 的疫情期与疫情后披露显示了疫情时代的确认政策（里程有效期延长、特别 breakage 假设）如何实质性影响所报告的收入。

与 **[[loyalty/d-point-detailed-ecosystem|dポイント]]** 的对照在于，NTT docomo 的合约负债披露将 dポイント 与电信收入递延金额合并，而 **JAL 与 ANA 在清晰可辨的合约负债科目中披露里程负债**（因为里程是航司主导的非飞行递延收入义务）。更广泛的框架记录于 [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]。

## 合作网络深度 —— 超越联盟

**oneworld vs Star Alliance** 的归属决定跨航司累积 / 兑换界面，但两个计划都已构建了实质性更广的、超越其联盟的合作网络：

| 合作类别 | JMB 深度 | AMC 深度 |
|---|---|---|
| **联盟承运人** | oneworld（BA、AA、QF、CX、IB、MH、S7, 等） | Star Alliance（UA、LH、SQ、AC、OZ、EVA、TG 等） |
| **仅代码共享合作航司（非联盟）** | Emirates（代码共享）、各类区域 | TUI 等 |
| **酒店** | JAL 酒店连锁 + 合作连锁（Hilton、IHG、Marriott 经里程转换） | InterContinental Hotels Group、Hilton、Marriott |
| **租车** | Hertz、Avis 等 | Hertz、Avis 等 |
| **通用积分双向兑换** | **Pontaポイント**（锚点）、dポイント、其他 | **Rakuten Points**（锚点）、Tポイント（遗留）、其他 |
| **联名卡** | [[JapanFG/jal-card|JAL Card]]（5 国际品牌） | ANA Card 系列（经合作发行方 5 国际品牌） |
| **百货 / 电子货币** | JR-East ViewCard（有限）、各类零售 | au PAY（有限）、各类零售 |
| **慈善捐赠** | JMB 慈善计划 | AMC 慈善计划 |

## 竞争定位

| FFP | 锚点航司 | 联盟 | 会员规模 | 锚点通用积分合作方 | 联名卡 |
|---|---|---|---|---|---|
| **JMB** | JAL | oneworld | 数千万 | Pontaポイント | [[JapanFG/jal-card|JAL Card]] |
| **AMC** | ANA | Star Alliance | 数千万 | Rakuten Points（锚点）、历史 Tポイント | ANA Card |
| Skywards（Emirates） | Emirates | 无（独立） | 全球 | 日本无 | EK Emirates |
| MileagePlus（UA） | United | Star Alliance | 全球 | 日本无 | UA 合作卡 |
| AAdvantage（American） | AA | oneworld | 全球 | 日本无 | AA 合作卡 |
| BAEC（BA） | BA | oneworld | 全球 | 日本无 | BA 合作卡 |

JMB 与 AMC 相对于非日本 FFP 的结构性优势是**日本通用积分双向兑换网络**，这在外国市场不存在相同规模。Pontaポイント 与 Rakuten Points 实质性扩展了日本居住会员的非飞行赚取足迹。

## 相关

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
- [[JapanFG/jal-card|JAL Card]]
- [[JapanFG/jal-payment-port|JAL Payment Port]]
- [[JapanFG/jr-east-financial|JR-East Financial Subsidiaries]]
- [[JapanFG/au-fh|au Financial Holdings]]
- [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|Lawson + Mitsubishi 2024 deep tie-up]]
- [[payments/japan-code-payment-operator-2025-market-share-matrix|Japan code-payment operator 2025 market share matrix]]
- [[INDEX|FinWiki index]]

## 来源

- JAL Mileage Bank 官方网站：https://www.jal.co.jp/jp/ja/jalmile/
- JAL Mileage Bank（English）：https://www.jal.co.jp/jp/en/jmb/
- ANA Mileage Club 官方网站：https://www.ana.co.jp/ja/jp/amc/
- ANA Mileage Club（English）：https://www.ana.co.jp/en/us/amc/
- JAL Card 官方网站：https://www.jal.co.jp/jp/ja/jalcard/
- ANA Card 官方网站：https://www.ana.co.jp/ja/jp/amc/anacard/
- JAL Investor Relations：https://www.jal.com/ja/investor/
- ANA Investor Relations：https://www.ana.co.jp/group/investors/
- oneworld 联盟官方网站：https://www.oneworld.com/
- Star Alliance 官方网站：https://www.staralliance.com/
