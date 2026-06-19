---
source: structured-finance/japan-equipment-lease-abs
source_hash: 14fb1e37e61b86e8
lang: zh
status: machine
fidelity: ok
title: "Japan equipment lease ABS — residual-value risk, true-lease vs finance-lease split"
translated_at: 2026-06-19T12:43:19.989Z
---

# Japan equipment lease ABS — residual-value risk, true-lease vs finance-lease split

## TL;DR

日本设备租赁 ABS——由三大独立租赁公司（[[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]]、[[leasing-firms/tokyo-century|Tokyo Century]]、[[leasing-firms/orix-corp|ORIX]]）及银行系租赁部门（瑞穗·丸红旗下的 [[leasing-firms/fuyo-lease|Fuyo Lease]]、SMFG 旗下的三井住友融资租赁、瑞穗旗下的 [[leasing-firms/ibj-leasing|IBJ Leasing]]）以适度的年度规模（约 JPY 200–400  十亿）发行——将 **机械、运输设备、IT/办公设备、医疗设备及可再生能源基础设施的租赁债权** 打包为 ABS 资产池。这一资产类别因两项特征而 **在结构上有别于贷款 ABS**：（1）日本会计准则（J-GAAP）及 IFRS 16  下的 **真实租赁对融资租赁分类**——融资租赁将几乎全部风险/回报转移给承租人，在经济上类似贷款；真实租赁（会计分类下的经营租赁）将残值风险保留于出租人处，要求出租人在租赁期末预测并回收设备价值；（2）位于承租人信用风险之上的 **残值风险**——即便承租人零违约，若设备租赁期末的实现价值低于账面残值，出租人（及 ABS）仍会亏损。评级机构相对于汽车贷款 ABS（6–12%）适用 **更高的劣后（AAA 优先级为 10–15%）** 以吸收残值折扣；真实租赁占比高的资产池附带更深的增信。与汽车租赁 ABS 相比，设备租赁池的设备类型更为异质（将快速折旧的 IT/办公设备与价值保持更久的机械相混合），且集中风险更高（企业承租人对粒度细的消费者）。由 [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I]] 评级。

## Wiki route

本词条作为 **设备租赁 ABS 运作机制** 节点，归属于 [[structured-finance/INDEX|structured-finance index]]。请对照 [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]] 了解可比的担保池 ABS，对照 [[structured-finance/japan-consumer-loan-abs-structure|Japan consumer-loan ABS structure]] 了解无担保对比，对照 [[structured-finance/japan-credit-card-receivable-abs|Japan credit-card receivable ABS]] 了解循环池对比，对照 [[structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook|JCR / R&I securitization rating methodology operating playbook]] 了解方法论层。租赁行业路由：[[finance/INDEX|finance domain]] 用于租赁公司经济性；[[real-estate-finance/INDEX|real-estate-finance domain]] 用于房地产租赁对比。

## 1. The repeat issuer landscape

| Issuer | Parent / affiliation | Asset focus | Annual ABS issuance (approx) |
|---|---|---|---|
| [[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]] | 三菱（由三菱 UFJ 租赁与日立资本合并于 2021  设立） | 机械、IT/办公、运输、房地产租赁、可再生能源 | JPY 80–150  十亿 |
| [[leasing-firms/tokyo-century|Tokyo Century]] | 独立系（伊藤忠 / 东京 MUFG 相关股东） | 飞机、船舶、IT/办公、运输、可再生能源、环境 | JPY 60–120  十亿 |
| [[leasing-firms/orix-corp|ORIX]] | 独立的多元化金融集团 | 设备租赁（机械、车辆、IT），加上更广泛的金融 | JPY 50–100  十亿 |
| [[leasing-firms/fuyo-lease|Fuyo Lease]] | 瑞穗 / 丸红系列 | 一般设备 + 汽车车队租赁 | JPY 30–60  十亿 |
| Sumitomo Mitsui Finance & Leasing | SMFG / 住友商事系列 | 设备 + 厂商融资 | JPY 40–80  十亿 |
| [[leasing-firms/ibj-leasing|IBJ Leasing]] | 瑞穗集团 | 设备 + 结构化租赁 | JPY 20–50  十亿 |
| [[leasing-firms/ricoh-leasing|Ricoh Leasing]] | 理光集团系列 | 以办公设备为重点 | JPY 15–40  十亿 |
| 地方银行系列的租赁部门（[[leasing-firms/chibagin-leasing|Chibagin Leasing]]、[[leasing-firms/iyogin-leasing|Iyogin Leasing]]、[[leasing-firms/yokohama-bank-leasing|Yokohama Bank Leasing]] 等） | 各类地方银行 | 区域中小企业设备租赁 | 个别发行适度；部分集合交易 |

前三大独立系占公募租赁 ABS 发行的大部分。银行系租赁公司可获得母行的资金调度额度，对 ABS 的依赖度较低；他们机会性地发行 ABS 以获取资本释放或资金来源多样化，而非作为核心司库手段。

## 2. Pool composition — equipment-type mix

| Equipment type | Typical share in mixed pool | Typical lease tenor | Residual-value profile |
|---|---|---|---|
| **机械（工业 / 建设 / 农业）** | 25–40% | 5–7  年 | 租赁期末保持原值的 30–50% |
| **车辆 / 运输（商用卡车、车队汽车、叉车）** | 15–30% | 3–5  年 | 保持 25–40% 的价值（二手商用车市场流动性高） |
| **IT / 办公设备（PC、服务器、复印机、网络设备）** | 15–25% | 3–5  年 | 保持 5–15% 的价值（技术性快速折旧） |
| **医疗设备（影像、监护、实验室）** | 5–15% | 5–7  年 | 保持 30–60% 的价值（若维护得当则使用寿命长） |
| **可再生能源 / 环境（太阳能板、沼气设备）** | 5–10% | 10–15  年 | 长期限；残值建模复杂 |
| **其他 / 专门化** | 5–15% | 不等 | 设备特定 |

为何这一组合很重要：
- **快速折旧的设备**（IT/办公）由于残值低且可预测，常进入融资租赁分类；资产池收益类似贷款
- **缓慢折旧的设备**（机械、医疗）由于残值有意义且出租人希望保留上行（及风险），常进入真实租赁；评级机构的劣后更深
- **混合池** 平衡这些——结构良好的交易将高残值风险设备限制在一个确定的占比内

## 3. True-lease vs finance-lease — the central distinction

日本会计准则及 IFRS 16  按经济实质对租赁进行分类：

| Classification | J-GAAP / IFRS 16 view | Economic substance | ABS treatment |
|---|---|---|---|
| **融资租赁（ファイナンスリース）** | 将几乎全部风险/回报转移给承租人；出租人计入债权；承租人计入资产 + 负债 | 在经济上等同于以设备为抵押品的担保贷款 | 现金流特征类似贷款；残值风险极小（通常为零残值）；评级机构处理类似汽车贷款 ABS |
| **真实租赁 / 经营租赁（オペレーティングリース）** | 出租人保留实质性风险/回报；出租人计入资产；承租人计入租金费用 | 出租人预测并回收残值；出租人在期末收回设备 | 现金流特征有两个组成部分：租金流 + 残值实现；ABS 必须为两者进行结构化 |

**融资租赁 ABS 资产池**：
- 承租人支付固定的月度租金 = 全部本金 + 利息
- 租赁期末，承租人可选择返还设备（事实上已为其付清）或以名义成本买入（日本用语中的 1  日元租赁）
- 设备所有权在经济上（尽管并不总是在法律上）转移
- ABS 结构化：劣后按信用风险规模设定；残值风险近乎为零（零或 1 日元残值）

**真实租赁 ABS 资产池**：
- 承租人支付月度租金 = 设备成本的一部分 + 服务组成部分
- 租赁期末，出租人收回设备；在二级市场出售（或再出租）
- 实现的转售价值（或再出租收入）归属于出租人（及 ABS 持有人）
- ABS 结构化：劣后按 **信用风险 + 残值风险** 规模设定；需要更深的增信

**实务中的资产池组合**：大多数日本设备租赁 ABS 资产池将两者相结合。纯融资租赁池（IT/办公的典型）的评级类似贷款 ABS；纯真实租赁池（罕见；飞机 / 船舶的典型）需要结构上的创新。混合池交易使用 **独立的残值准备** 以圈护残值敞口。

## 4. Residual-value risk modelling

对于真实租赁组成部分，评级机构通过以下方式对残值进行压力测试：

| Stress | Description | Typical haircut |
|---|---|---|
| Base-case residual | 交易开始时计入的出租人合同残值 | — |
| Market-recovery base case | 租赁期末现实的中间市场二级设备价值 | 合同残值的 80–100% |
| Stress scenario | 衰退 + 二级市场流动性压力 | 合同残值的 50–70% |
| Severe-stress scenario | 设备过时 + 市场崩溃 | 合同残值的 25–50% |

各评级类别的 **残值折扣** 驱动残值准备的规模设定——对于 AAA 优先级，机构通常压力测试至严重压力（25–50% 的回收），要求池残值的 10–25% 可作为残值准备。

**设备类型敏感性**：
- IT 设备：残值建模毫不留情——摩尔定律的过时使第 5  年的二级价值高度不确定
- 机械：残值更稳定，但周期性行业的资产池（例如衰退中的建设设备）可能出现严重的价值下跌
- 车辆：日本的二手商用车市场流动性高（USS 卡车拍卖等）；残值可预测
- 医疗：先进设备的技术生命周期短；较旧的装置价值稳定但递减
- 可再生能源 / 太阳能：固定价格收购（FIT）制度影响设备残值（面板可能因再部署而有价值，也可能没有）

## 5. Comparison with auto-lease ABS

| Dimension | Equipment lease ABS | Auto-lease ABS (typically auto-OEM captive) |
|---|---|---|
| Pool size | 数百至数千份租赁 | 数万份租赁（粒度更细） |
| Lessee profile | 企业承租人（中小企业 + 大企业） | 企业车队 + 零售消费者的混合 |
| Concentration risk | 更高（企业承租人意味着集中的债务人风险） | 更低（粒度细的零售池） |
| Residual-value risk | 高变动性（混合设备类型） | 中等（成熟的二手车市场） |
| Tenor | 3–7  年为典型 | 3–5  年为典型 |
| Default volatility | 中等（承租人信用周期敏感） | 更低（消费者池粒度细） |
| Subordination for AAA senior | 10–15% | 6–10% |
| Residual-value reserve | 池残值的 10–25% | 池残值的 8–15% |

设备租赁 ABS 资产池还面临汽车租赁池所没有的 **单一设备类型集中限度**——由于残值建模会变得过于不确定，一个资产池中 IT 设备不能 > 25–35%。

## 6. Credit enhancement stack

| Layer | Typical sizing for AAA senior (mixed pool) |
|---|---|
| Subordination (mezz + equity) | 原始资产池的 10–15% |
| Cash reserve at closing | 优先级的 1.5–3.0% |
| Cash reserve target | 2.5–4.5%（由超额利差积累而成） |
| Residual-value reserve (separate from cash reserve) | 池残值敞口的 10–25% |
| Excess spread (1st defense) | 对资产池每年 3–7% |

残值准备是其特征所在——它为残值实现的缺口 **单独提供资金并加以圈护**，不与信用损失准备相混合。

## 7. The waterfall — split between rental and residual

| Priority | Item |
|---|---|
| 1 | 服务机构费（每年 0.30–0.60%） |
| 2 | 受托人 / 账户银行费用 |
| 3 | 优先级利息 |
| 4 | 夹层利息 |
| 5 | 现金准备补足（信用损失准备） |
| 6 | 残值准备补足 |
| 7 | 本金（视交易而定为顺序或按比例）——来自月度租金 + 设备处置收益 |
| 8 | 股权 / 残值归发起人 |

不同寻常的运作特征：本金现金流来自 **两条流**——（1）每笔月度付款中的租金组成部分（可预测、有计划），以及（2）**租赁期末的设备处置收益**（不均匀、依赖市场）。这使得本金偿付时点比贷款 ABS 资产池更难以预测。

## 8. Rating-agency methodology specifics

| Methodology element | JCR / R&I approach |
|---|---|
| Lessee credit | 对每个承租人的内部信用评分 + 发起人评分方法论 |
| Pool concentration | 对单一承租人、单一设备类型、单一行业集中的限度 |
| Lease structure | 披露真实租赁对融资租赁的划分；劣后据此规模设定 |
| Residual-value | 设备类型特定的残值曲线；按压力情景的折扣 |
| Servicer | 发起人（通常为租赁公司自身）；运营能力 + 备用服务机构 |
| Recovery | 设备处置时点 + 实现价值对账面残值 |

方法论详情见 [[structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook|operating playbook]]。

## 9. Funding mix role for leasing companies

对于 [[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]] / [[leasing-firms/tokyo-century|Tokyo Century]] / [[leasing-firms/orix-corp|ORIX]]，租赁 ABS 与以下并列：

- **银行额度资金调度**（来自巨型银行的承诺信用额度）
- **公司债发行**（因为这些发行体拥有 IG 评级）
- **商业票据**（用于短期资金调度）
- **苏库克 / 跨境发行**（用于货币 / 投资者多样化）

ABS 提供：
- **表外资本释放**（在巴塞尔 III 证券化处理下）
- **资金来源多样化**（与公司债不同的投资者基础）
- 针对租赁债权存续期的 **期限匹配**
- **评级套利**（尽管发行体为 IG 评级，但优先级为 AAA）

银行系租赁部门（[[leasing-firms/fuyo-lease|Fuyo Lease]]、SMFL、[[leasing-firms/ibj-leasing|IBJ Leasing]]）可获得更廉价的母行资金调度，因此 ABS 发行是机会性的——对它们的司库而言不如对独立系那样核心。

## 10. Counterpoints

- **「租赁 ABS 只是加了额外规则的汽车贷款 ABS」**——真实租赁的残值风险确实改变了现金流特征；残值准备是有意义的结构性创新，而非装饰性的
- **「IT 设备租赁不应放入 ABS 资产池」**——批评者认为残值不确定性太高；辩护者指出融资租赁分类 + 零残值结构化使该风险可管理
- **「集中是个问题」**——企业承租人意味着即便中等规模的资产池也有可测量的单一名称风险；缓解措施是集中限度与承租人信用评分
- **「日本的残值市场较浅」**——对于某些设备类型（专门化工业机械），二级市场较薄；折扣反映了这一点
- **「银行系租赁占主导——独立系 ABS 发行正在萎缩」**——统计上银行系的原始发起规模更大，但由于资金来源组合的经济性，独立系才是更大的 ABS 发行体
- **「可再生能源租赁 ABS 将爆发式增长」**——太阳能 PV 与海上风电的项目租赁正在增长，但经营租赁对融资租赁的分类与 FIT 制度的敏感性使这成为一个特殊案例

## 11. Open questions

- ESG 挂钩的租赁 ABS（可再生能源 / 电池 / EV 充电基础设施资产池）是否成为一个独立的子板块
- IFRS 16  的采用（在全球范围内将大多数经营租赁移至承租人的表内）是否会在日本显著重塑真实租赁 / 融资租赁的经济性
- [[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]] 的收购扩张是否会持续为 ABS 增添多样的设备类型资产池
- [[leasing-firms/tokyo-century|Tokyo Century]] 的航空 / 船舶融资资产在租赁 ABS 结构化中的角色（或通过独立的飞机 / 船舶 ABS）
- 数字设备即服务（服务器 / 网络即服务）的租赁池是否会变得可证券化

## Related

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

## Sources

- JCR lease-receivable ABS criteria — https://www.jcr.co.jp/en/
- R&I lease-receivable ABS methodology — https://www.r-i.co.jp/en/
- Mitsubishi HC Capital investor relations — https://www.mitsubishi-hc-capital.com/
- Tokyo Century investor relations — https://www.tokyocentury.co.jp/
- ORIX Corp investor relations — https://www.orix.co.jp/grp/en/
- Japan Leasing Association — https://www.leasing.or.jp/
- JSDA structured-finance statistics — https://www.jsda.or.jp/en/
- ASF Japan — https://www.asf-japan.gr.jp/

---

> [!info] 校核状態
> confidence: **likely**。真实租赁对融资租赁分类、残值风险建模、设备类型集中限度，以及增信结构均记载于 JCR / R&I 的标准及日本租赁事业协会的资料中。具体的劣后及准备区间反映了行业披露的交易数据；设备类型的残值曲线是对典型评级机构压力情景的示例。
