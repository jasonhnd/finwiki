---
source: structured-finance/japan-equipment-lease-abs
source_hash: 26d3b31736370130
lang: zh
status: machine
fidelity: ok
title: "日本设备租赁 ABS — 残值风险、真实租赁 vs 融资租赁拆分"
translated_at: 2026-06-01T04:15:40.105Z
---
# 日本设备租赁 ABS — 残值风险、真实租赁 vs 融资租赁拆分

## TL;DR

日本设备租赁 ABS 年度发行量适中（约 JPY 200–400 bn），由三大独立租赁公司（[[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]]、[[leasing-firms/tokyo-century|Tokyo Century]]、[[leasing-firms/orix-corp|ORIX]]）和银行系租赁机构（Mizuho-Marubeni 旗下的 [[leasing-firms/fuyo-lease|Fuyo Lease]]、SMFG 旗下的 Sumitomo Mitsui Finance & Leasing、Mizuho 旗下的 [[leasing-firms/ibj-leasing|IBJ Leasing]]）发行，将**机械、运输设备、IT / 办公设备、医疗设备和可再生能源基础设施的租赁应收款**打包进 ABS 池。该资产类别在结构上不同于贷款 ABS，原因有两个特征：（1）日本 GAAP（J-GAAP）和 IFRS 16  下的 **true-lease vs finance-lease 分类**——finance-leases 将几乎所有风险 / 回报转移给承租人，在经济上类似贷款；true-leases（会计分类中的经营租赁）由出租人保留残值风险，要求出租人预测并回收租赁期末的设备价值；（2）**残值风险**位于承租人信用风险之上——即使承租人零违约，如果设备租赁期末实现价值低于账面残值，出租人（及 ABS）也会亏损。评级机构适用**更高次级化（AAA senior 为 10–15%）vs auto-loan ABS（6–12%）**以吸收残值扣减；true-lease 占比较高的资产池需要更深的增信。与 auto-lease ABS 相比，设备租赁池的设备类型更异质（混合快速折旧的 IT / 办公设备和保值更久的机械），集中度风险更高（企业承租人 vs 颗粒化消费者）。由 [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I]] 评级。

## Wiki 路由

本条目位于 [[structured-finance/INDEX|structured-finance index]] 下，作为 **equipment-lease-ABS operating-mechanics** 节点。可对照 [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]] 理解可比有担保资产池 ABS，对照 [[structured-finance/japan-consumer-loan-abs-structure|Japan consumer-loan ABS structure]] 理解无担保对比，对照 [[structured-finance/japan-credit-card-receivable-abs|Japan credit-card receivable ABS]] 理解循环资产池对比，并对照 [[structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook|JCR / R&I securitization rating methodology operating playbook]] 理解方法论层。租赁行业路由：[[finance/INDEX|finance domain]] 提供租赁公司经济性；[[real-estate-finance/INDEX|real-estate-finance domain]] 提供房地产租赁对比。

## 1. 重复发行人格局

| 发行人 | 母公司 / 关联 | 资产重点 | 年度 ABS 发行（约） |
|---|---|---|---|
| [[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]] | Mitsubishi（由 Mitsubishi UFJ Lease 和 Hitachi Capital 在 2021  合并形成） | 机械、IT / 办公、运输、房地产租赁、可再生能源 | JPY 80–150 bn |
| [[leasing-firms/tokyo-century|Tokyo Century]] | 独立（Itochu / Tokyo MUFG 相关股东） | 航空器、船舶、IT / 办公、运输、可再生能源、环境 | JPY 60–120 bn |
| [[leasing-firms/orix-corp|ORIX]] | 独立多元化金融集团 | 设备租赁（机械、车辆、IT）及更广泛金融业务 | JPY 50–100 bn |
| [[leasing-firms/fuyo-lease|Fuyo Lease]] | Mizuho / Marubeni 关联 | 一般设备 + 汽车车队租赁 | JPY 30–60 bn |
| Sumitomo Mitsui Finance & Leasing | SMFG / Sumitomo Corp 关联 | 设备 + vendor finance | JPY 40–80 bn |
| [[leasing-firms/ibj-leasing|IBJ Leasing]] | Mizuho group | 设备 + 结构化租赁 | JPY 20–50 bn |
| [[leasing-firms/ricoh-leasing|Ricoh Leasing]] | Ricoh group 关联 | 办公设备为主 | JPY 15–40 bn |
| 地方银行系租赁机构（[[leasing-firms/chibagin-leasing|Chibagin Leasing]]、[[leasing-firms/iyogin-leasing|Iyogin Leasing]]、[[leasing-firms/yokohama-bank-leasing|Yokohama Bank Leasing]] 等） | 各类地方银行 | 地方 SME 设备租赁 | 单独发行量较小；部分为 pooled deals |

前三大独立机构占公开租赁 ABS 发行的大部分。银行系租赁公司可使用母行融资额度，对 ABS 的依赖较低；其发行 ABS 通常是为了资本释放或融资多元化，而非核心 treasury。

## 2. 资产池构成 — 设备类型组合

| 设备类型 | 混合池典型占比 | 典型租赁期限 | 残值特征 |
|---|---|---|---|
| **机械（工业 / 建筑 / 农业）** | 25–40% | 5–7  年 | 租赁期末保留原值的 30–50% |
| **车辆 / 运输（商用卡车、车队汽车、叉车）** | 15–30% | 3–5  年 | 保留 25–40%（二手商用市场流动性好） |
| **IT / 办公设备（PC、服务器、复印机、网络设备）** | 15–25% | 3–5  年 | 保留 5–15%（技术折旧快） |
| **医疗设备（影像、监测、实验室）** | 5–15% | 5–7  年 | 保留 30–60%（维护良好时使用寿命长） |
| **可再生能源 / 环境（太阳能板、沼气设备）** | 5–10% | 10–15  年 | 期限长；残值建模复杂 |
| **其他 / 专用设备** | 5–15% | 不一 | 取决于设备 |

为什么组合重要：
- **快速折旧设备**（IT / 办公）通常进入 finance-lease 分类，因为残值低且可预测；资产池收益类似贷款
- **慢速折旧设备**（机械、医疗）通常进入 true-lease，因为残值有意义，出租人希望保留上行（及风险）；评级机构要求更深次级化
- **混合池**在两者之间平衡——结构良好的交易会将高残值风险设备限制在明确比例内

## 3. True-lease vs finance-lease — 核心区别

日本 GAAP 和 IFRS 16  按经济实质对租赁分类：

| 分类 | J-GAAP / IFRS 16  视角 | 经济实质 | ABS 处理 |
|---|---|---|---|
| **Finance-lease（融资租赁）** | 将几乎所有风险 / 回报转移给承租人；出租人记录应收款；承租人记录资产 + 负债 | 经济上等同于以设备为抵押的有担保贷款 | 现金流特征类似贷款；残值风险极低（通常为零残值）；评级机构处理类似 auto-loan ABS |
| **True-lease / operating-lease（真实租赁 / 经营租赁）** | 出租人保留重大风险 / 回报；出租人记录资产；承租人记录租赁费用 | 出租人预测并回收残值；出租人在期末收回设备 | 现金流由两部分构成：租金流 + 残值实现；ABS 必须同时为两者设计结构 |

**Finance-lease ABS pool**：
- 承租人支付固定月租 = 全部本金 + 利息
- 租赁期末，承租人可以返还设备（并已实质上为其支付）或以名义成本购买（日语语境中的 1  yen lease）
- 设备所有权在经济上转移，尽管法律上不一定转移
- ABS 结构：次级化按信用风险确定；残值风险近零（零或 1-yen 残值）

**True-lease ABS pool**：
- 承租人支付月租 = 设备成本的一部分 + 服务成分
- 租赁期末，出租人收回设备，在二级市场出售（或再租赁）
- 实现的转售价值（或再租赁收入）归出租人（及 ABS 持有人）
- ABS 结构：次级化按**信用风险 + 残值风险**确定；需要更深增信

**实践中的资产池组合**：大多数日本设备租赁 ABS 池同时包含两者。纯 finance-lease 池（IT / 办公常见）评级类似贷款 ABS；纯 true-lease 池（少见；航空器 / 船舶常见）需要结构创新。混合池交易使用**单独残值准备金**将残值敞口隔离。

## 4. 残值风险建模

对于 true-lease 成分，评级机构通过以下方式压测残值：

| 压力 | 描述 | 典型扣减 |
|---|---|---|
| 基准残值 | 交易起始时出租人的合同账面残值 | — |
| 市场回收基准情景 | 租赁期末现实的二级设备中间市场价值 | 合同残值的 80–100% |
| 压力情景 | 衰退 + 二级市场流动性压力 | 合同残值的 50–70% |
| 严重压力情景 | 设备过时 + 市场崩塌 | 合同残值的 25–50% |

各评级类别下的**残值扣减**驱动残值准备金规模——对 AAA senior，机构通常压测至 severe-stress（25–50% 回收），要求 10–25% 的资产池残值可作为残值准备金使用。

**设备类型敏感性**：
- IT 设备：残值建模非常严格——Moore's law 式过时使第 5  年二级价值高度不确定
- 机械：残值更稳定，但周期性行业资产池（例如衰退中的建筑设备）可能出现严重价值下跌
- 车辆：日本二手商用市场流动性好（USS truck auction 等）；残值可预测
- 医疗：先进设备技术生命周期短；旧设备价值稳定但递减
- 可再生能源 / 太阳能：feed-in-tariff (FIT) 制度影响设备残值（面板可能可再部署，也可能不可）

## 5. 与 auto-lease ABS 的比较

| 维度 | Equipment lease ABS | Auto-lease ABS（通常为 auto-OEM captive） |
|---|---|---|
| 资产池规模 | 数百到数千份租赁 | 数万份租赁（更颗粒化） |
| 承租人画像 | 企业承租人（SME + 大公司） | 企业车队 + 零售消费者混合 |
| 集中度风险 | 较高（企业承租人意味着债务人风险集中） | 较低（零售池颗粒化） |
| 残值风险 | 高可变性（混合设备类型） | 中等（二手车市场成熟） |
| 期限 | 典型 3–7  年 | 典型 3–5  年 |
| 违约波动 | 中等（对承租人信用周期敏感） | 较低（消费者池颗粒化） |
| AAA senior 次级化 | 10–15% | 6–10% |
| 残值准备金 | 资产池残值的 10–25% | 资产池残值的 8–15% |

设备租赁 ABS 池还面临 auto-lease 池没有的**单一设备类型集中限制**——一个池不能有 > 25–35% IT 设备，因为残值建模会变得过于不确定。

## 6. 信用增级堆栈

| 层级 | AAA senior（混合池）典型规模 |
|---|---|
| 次级化（mezz + equity） | 原始资产池的 10–15% |
| 交割时现金准备金 | senior 的 1.5–3.0% |
| 现金准备金目标 | 2.5–4.5%（由 excess spread 建立） |
| 残值准备金（独立于现金准备金） | 资产池残值敞口的 10–25% |
| Excess spread（第 1 道防线） | 资产池每年 3–7% |

残值准备金是区别性特征——它被**单独出资并 ring-fenced**，用于残值实现短缺，而不与信用损失准备金混合。

## 7. Waterfall — 租金与残值的拆分

| 优先级 | 项目 |
|---|---|
| 1 | Servicer fee（每年 0.30–0.60%） |
| 2 | Trustee / account-bank fees |
| 3 | Senior interest |
| 4 | Mezz interest |
| 5 | Cash reserve top-up（信用损失准备金） |
| 6 | Residual-value reserve top-up |
| 7 | Principal（sequential 或 pro-rata，视交易而定）——来自月度租金 + 设备处置收益 |
| 8 | Equity / residual to originator |

不寻常的运营特征：本金现金流来自**两条流**——（1）每月付款中的租金本金部分（可预测、按计划），以及（2）**租赁期末设备处置收益**（块状、依赖市场）。这使本金偿还时点比贷款 ABS 池更难预测。

## 8. 评级机构方法论细节

| 方法论要素 | JCR / R&I 方法 |
|---|---|
| 承租人信用 | 对每个承租人进行内部信用评分 + 发起人评分方法 |
| 资产池集中度 | 对单一承租人、单一设备类型、单一行业集中度设限 |
| 租赁结构 | 披露 true-lease vs finance-lease 拆分；相应确定次级化 |
| 残值 | 设备类型特定残值曲线；按压力情景设置扣减 |
| 服务机构 | 发起人（通常为租赁公司本身）；运营能力 + 备用服务机构 |
| 回收 | 设备处置时点 + 实现价值 vs 账面残值 |

方法论细节见 [[structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook|operating playbook]]。

## 9. 对租赁公司的融资组合作用

对 [[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]] / [[leasing-firms/tokyo-century|Tokyo Century]] / [[leasing-firms/orix-corp|ORIX]] 而言，lease ABS 与以下融资并列：

- **银行额度融资**（来自 megabanks 的 committed credit facilities）
- **公司债发行**（这些发行人具备 IG 评级）
- **商业票据**（短期融资）
- **Sukuk / 跨境发行**（货币 / 投资者多元化）

ABS 提供：
- **表外资本释放**（Basel III 证券化处理下）
- **融资多元化**（与公司债不同的投资者基础）
- **期限匹配**（对应租赁应收款期限）
- **评级套利**（尽管发行人为 IG，senior 可达 AAA）

银行系租赁机构（[[leasing-firms/fuyo-lease|Fuyo Lease]]、SMFL、[[leasing-firms/ibj-leasing|IBJ Leasing]]）可获得更便宜的母行融资，因此 ABS 发行是机会型的——相较独立机构，对其 treasury 的核心程度较低。

## 10. 反方观点

- **“Lease ABS is just auto-loan ABS with extra rules”** —— True-lease 残值风险确实改变现金流特征；残值准备金是有意义的结构创新，不是装饰
- **“IT-equipment leases shouldn't be in ABS pools”** —— 批评者认为残值不确定性过高；支持者指出 finance-lease 分类 + 零残值结构使风险可管理
- **“Concentration is a problem”** —— 企业承租人意味着即使中等规模资产池也存在可衡量的单名风险；缓释手段是集中度限制和承租人信用评分
- **“The residual market is shallow in Japan”** —— 对某些设备类型（专用工业机械），二级市场较薄；扣减反映这一点
- **“Bank-affiliated leasing dominates — independent ABS issuance is shrinking”** —— 统计上银行系机构的发起量更大，但因融资组合经济性，独立机构是更大的 ABS 发行人
- **“Renewable-energy lease ABS will explode”** —— 太阳能 PV 和海上风电项目租赁正在增长，但 operating-lease vs finance-lease 分类和 FIT 制度敏感性使其成为特殊情况

## 11. 未决问题

- ESG-linked lease ABS（可再生能源 / 电池 / EV 充电基础设施池）是否成为独立子板块
- IFRS 16  采用（全球范围内将多数经营租赁移至承租人资产负债表）是否在日本显著重塑 true-lease / finance-lease 经济含义
- [[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]] 的收购扩张是否继续为 ABS 增加多样化设备类型池
- [[leasing-firms/tokyo-century|Tokyo Century]] 航空 / 船舶融资资产在 lease-ABS 结构中的角色（或通过独立航空器 / 船舶 ABS）
- digital-equipment-as-a-service（服务器 / 网络 as-a-service）租赁池是否可证券化

## 相关

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]
- [[structured-finance/japan-consumer-loan-abs-structure|Japan consumer-loan ABS structure]]
- [[structured-finance/japan-credit-card-receivable-abs|Japan credit-card receivable ABS]]
- [[structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook|JCR / R&I securitization rating methodology operating playbook]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/fitch-moody-sp-japan-criteria|Fitch / Moody's / S&P Japan criteria]]
- [[structured-finance/aircraft-leasing-financing-japan-shosha|aircraft leasing financing Japan shosha]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK / TMK SPV vehicle]]
- [[structured-finance/japan-securitization-product-matrix|Japan securitization product matrix]]
- [[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]] · [[leasing-firms/tokyo-century|Tokyo Century]] · [[leasing-firms/orix-corp|ORIX]]
- [[leasing-firms/fuyo-lease|Fuyo Lease]] · [[leasing-firms/ibj-leasing|IBJ Leasing]] · [[leasing-firms/ricoh-leasing|Ricoh Leasing]]
- [[finance/INDEX|finance index]] · [[real-estate-finance/INDEX|real-estate-finance index]]

## 来源

- JCR lease-receivable ABS criteria — https://www.jcr.co.jp/en/
- R&I lease-receivable ABS methodology — https://www.r-i.co.jp/en/
- Mitsubishi HC Capital investor relations — https://www.mitsubishi-hc-capital.com/
- Tokyo Century investor relations — https://www.tokyocentury.co.jp/
- ORIX Corp investor relations — https://www.orix.co.jp/grp/en/
- Japan Leasing Association — https://www.leasing.or.jp/
- JSDA structured-finance statistics — https://www.jsda.or.jp/en/
- ASF Japan — https://www.asf-japan.gr.jp/

---

> [!info] 校核状态
> confidence: **likely**。True-lease vs finance-lease 分类、残值风险建模、设备类型集中限制和信用增级堆栈记录在 JCR / R&I 准则及 Japan Leasing Association 材料中。具体次级化和准备金区间反映行业披露交易数据；设备类型残值曲线是典型机构压力情景的示例。
