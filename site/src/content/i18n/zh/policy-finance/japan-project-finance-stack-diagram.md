---
source: policy-finance/japan-project-finance-stack-diagram
source_hash: 8654ee6cf4aa61f1
lang: zh
status: machine
fidelity: ok
title: "日本项目融资堆栈图 (JOGMEC / JBIC / NEXI / 大型银行 / SPV)"
translated_at: 2026-06-19T06:09:18.067Z
---

# 日本项目融资堆栈图 (JOGMEC / JBIC / NEXI / 大型银行 / SPV)

## Wiki 路径

本条目位于 [[policy-finance/INDEX|policy-finance index]] 之下，是关于日本如何为海外资源与基础设施项目融资的跨机构地图。请将其与 [[financial-regulators/jbic]]、[[policy-finance/nexi]]、[[policy-finance/jogmec]] 一同阅读以单独了解每个机构，与 [[policy-finance/oecd-export-credit-arrangement]] 了解官方条件的监管上限，并与 [[finance/japan-acquisition-finance]] 了解同样这些大型银行如何在政策金融周界之外组成私营银团债务。

## TL;DR

一个典型的日本海外资源或基础设施项目并不坐落于单一资产负债表之上。风险被切分为堆叠在发起人 SPV 背后的四个公共与私营层: [[policy-finance/jogmec|JOGMEC]] 在上游层承担股权与勘探／地质风险，[[financial-regulators/jbic|JBIC]] 提供与主权对齐的海外投资贷款、非捆绑贷款与出口买方信贷，[[policy-finance/nexi|NEXI]] 在商业银行贷款之上为政治与商业风险投保，而大型银行银团（[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG / SMBC]]、[[megabanks/mizuho-fg|Mizuho FG]]）提供商业贷款，常由一家银行担任代理／融资行。该堆栈之所以存在，是因为没有任何单一资产负债表 —— 无论公共还是私营 —— 能独自承担勘探风险、主权风险、政治风险与长期商业风险的全部组合。

## 堆栈的 ASCII 图

```
                         +---------------------------------------+
                         |        SPONSOR SPV / PROJECT CO       |
                         |  (trading houses, oil majors, IPP /   |
                         |   miners; equity sponsors;             |
                         |   limited-recourse borrower)           |
                         +-------------------+-------------------+
                                             ^
                                             |  equity + senior debt
                                             |
       +----------+   equity / +-------------+-------------+   commercial loan
       |          |  ex-risk   |       FINANCING STACK     |   tranche
       |  JOGMEC  |----------->|                           |<------------------+
       |          |  resource  |   senior debt  |  equity  |                   |
       +----------+  equity    |   tranches     |  layer   |                   |
            ^                  +---+-----+------+----+-----+                   |
            |  policy /            |     |           |                         |
            |  energy security     |     |           |                         |
            |                      v     v           v                         |
       +----+----+        +--------+   +-------+   +---------+        +--------+--------+
       |  METI / |        |  JBIC  |   | NEXI  |   |  Other  |        |    Megabank    |
       |  MOFA   |        | (ECA   |   |(ECA   |   | ECAs /  |        |    syndicate   |
       |  policy |        | direct |   |insur- |   | MDBs    |        | MUFG / SMBC /  |
       +---------+        | loan / |   |ance)  |   | (co-fin)|        |    Mizuho      |
                          | untied |   |       |   |         |        | (commercial    |
                          | loan / |   |       |   |         |        |  loans, agent  |
                          | buyer  |   |       |   |         |        |  bank, hedges) |
                          | credit)|   |       |   |         |        +--------+-------+
                          +---+----+   +---+---+   +----+----+                 |
                              |            |            |                      |
                              |  loan      |  insurance |  co-financing        | commercial
                              |  proceeds  |  cover     |                      | loan
                              v            v            v                      v
                         +----+------------+------------+----------------------+----+
                         |               COMMON TERMS / INTERCREDITOR              |
                         |  OECD Arrangement minimum premia + tenor caps;          |
                         |  Equator Principles ESG screen; common security trust   |
                         +----------------------------+---------------------------+
                                                      |
                                                      v
                                                Project cash flows
                                          (LNG offtake, mining offtake,
                                           power PPA, infra availability)
```

该图是样式化的。真实交易会打乱顺序 —— 例如，JBIC 可能经由其特别业务账户取得直接股权，NEXI 可能包裹商业贷款的一部分而非出口合同，而多边机构（ADB、世界银行、AIIB）或同业 ECA（K-EXIM、US EXIM、EDC、KfW IPEX）常与日本堆栈并列。

### JOGMEC — 股权／勘探风险

[[policy-finance/jogmec|JOGMEC]] 是资源安全节点。在项目融资堆栈上，它承担其他贷款人拒绝承保的风险: FID 前勘探、地质与储量风险，以及对上游石油、天然气与关键矿产资产的股权参与。工具包括向日本商社与公用事业公司的资源开发子公司注入股权资本、资产收购支持，以及为勘探借款提供债务担保。JOGMEC 在股本结构表中的存在，往往是让 [[financial-regulators/jbic|JBIC]] 与大型银行银团得以推进的信号 —— 一旦储量被证实、项目可融资，便可对高级债务层进行定额。

### JBIC — 与主权对齐的海外投资贷款、非捆绑贷款、出口买方信贷

[[financial-regulators/jbic|JBIC]] 是日本国家针对海外项目的直接放贷部门。在堆栈上，它通常表现为以下一项或多项: 向日本设备（例: 涡轮机、液化列车、铁路系统）的外国买方提供的 **出口买方信贷**; 向与大型银行并肩协调融资的日本系 SPV 提供的 **海外投资贷款**; 或向主权或主权邻接借款人提供的、以确保对日本的长期资源进口的 **非捆绑贷款**。JBIC 的角色部分在于带来与主权对齐的期限（资源与基础设施为 15–25  年），部分在于提供一个商业银行可以坐落其后的国家交易对手。

### NEXI — 政治风险／商业风险保险

[[policy-finance/nexi|NEXI]] 包裹商业贷款人不会裸露承担的风险。项目融资堆栈上的核心产品是 **海外投资保险**（覆盖对股权投资的征收、战争、转移限制与违约）; **贸易与投资保险之买方信贷用**（覆盖对外国买方的商业银行贷款的政治与商业违约风险）; 以及 **贷款保险**（覆盖对海外放贷的政治／商业违约）。有了 NEXI 保障，大型银行分批就风险加权资产目的与国家额度目的而言实际上获得部分国家担保。

### 大型银行银团 — 商业银行贷款、代理行角色

日本大型银行三家 —— [[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG / SMBC]]、[[megabanks/mizuho-fg|Mizuho FG]] —— 提供商业贷款分批，在大型 LNG 与采矿交易中几乎总是与外国银行（法国、新加坡、美国、澳大利亚）并肩提供。通常由一家银行担任 **代理／融资代理** 角色，运营债权人间机制，并管理提款与瀑布。大型银行还提供附带服务: 外汇与利率对冲、运转资金额度、为承购流提供的贸易融资，以及 COD 后向债券或可持续发展挂钩市场的再融资。在政策金融周界之外，同样这些银行组成纯私营交易 —— 关于同样的银团机构如何被重复用于 LBO 与企业 M&A，参见 [[finance/japan-acquisition-finance|Japan acquisition finance]]。

### 发起人 SPV — 项目公司、股权发起人

记录上的借款人是一家单一目的项目公司。股权发起人通常是以下各方的联合体: 一家日本商社（[[megabanks/mufg|MUFG]] / [[megabanks/smfg|SMFG]] / [[megabanks/mizuho-fg|Mizuho FG]] 并非股权发起人 —— 商社是: 三井、三菱商事、住友商事、伊藤忠、丸红、双日），一家日本公用事业公司（JERA、东京瓦斯、大阪瓦斯、关西电力），一家东道国国营石油公司或国营采矿公司，以及一家或多家国际资源巨头（例: TotalEnergies、Shell、BHP、Rio Tinto）。SPV 是有限追索的: 贷款人主要看项目现金流，而非发起人资产负债表。

## 典型的交易流程时间线

| Stage | Months from start | What happens | Who is driving |
|---|---|---|---|
| Concept / LOI | 0–6 | Pre-feasibility, resource identification, host-country MOU, term sheet between sponsors | Trading houses, JOGMEC scoping |
| Pre-FEED / FEED | 6–24 | Engineering studies, environmental and social impact assessment, fiscal regime negotiation | Sponsors, EPC contractors |
| Bankability work | 18–36 | Lenders' technical advisor, market consultant, legal due diligence, insurance broker bind structure | Megabanks, JBIC, NEXI underwriters |
| FID | ~24–36 | Final investment decision by sponsors conditional on financing | Sponsor boards |
| Financial close | 24–42 | Common terms agreement, intercreditor agreement, ECA documentation, security trust | Agent bank, lenders' counsel |
| Drawdown / construction | 36–84 | Pro-rata drawdowns across JBIC, NEXI-covered commercial tranches, sponsor equity | EPC, owner's engineer |
| COD / first cargo | ~7 years | Mechanical completion, lender reliability test, switch from sponsor support to project cash flow | Project Co operations |
| Operations / refinance | 7+ years | Senior debt repayment from offtake revenues; potential bond refinancing of commercial tranche | Treasurer / agent bank |

真实交易会拖延。LNG 大型项目从 FID 到首船货往往需要 5–8  年，再加 10–15  年才能完成高级债务全额偿还。

## 近期示例案例

此处仅列出公开宣布的参与; 分批规模与结构已简化。

- **莫桑比克 LNG（Area 1）** — JBIC 作为多 ECA 一揽子方案的一部分安排了一笔高级贷款; NEXI 对商业银行分批提供保险保障; 日本大型银行与 US EXIM、UKEF 及其他 ECA 并肩参与商业分批。发起人联合体包括 TotalEnergies（运营方）、三井、ONGC Videsh 等。该项目示例了 2021  安全事件后在不可抗力压力下的 ECA 堆叠。
- **澳大利亚 LNG（Ichthys、Wheatstone 及更早的 North West Shelf 扩建）** — 多个日本主导的 LNG 开发以 JBIC 直接放贷、NEXI 保障的商业银行分批及大型银行银团融资。发起人包括 INPEX（Ichthys 运营方）、Chevron、Shell 及日本商社／公用事业公司的股权切片。
- **铜／锂采矿** — JOGMEC 已公开宣布经由日本商社对铜、镍、锂项目的股权参与（例: 对智利与澳大利亚铜、加拿大与澳大利亚锂、印度尼西亚镍的过往投资）—— 典型的 JOGMEC 持股是在日本发起人背后的少数股权额度，商业债务在 JOGMEC 之外。
- **基础设施: 电力与铁路** — JBIC 海外投资贷款加 NEXI 买方信贷保险已支持南亚与东南亚日本主导的 IPP 项目（燃气与可再生能源），以及与日本铁路制造商挂钩的车辆／城市铁路一揽子（例: MRT / 地铁交付）。

关于具体分批规模，请对照 JBIC 与 NEXI 的新闻稿核实确切的设施名称与日期。

## 这与纯商业银团贷款有何不同

一笔纯商业银团贷款 —— 用于日本国内收购或企业再融资 —— 不需要 JOGMEC、JBIC 或 NEXI。大型银行以自有账簿对照企业资产负债表放贷，常带有与杠杆与利息覆盖挂钩的契约，期限为 5–10  年。该结构参见 [[finance/japan-acquisition-finance|Japan acquisition finance]]。

项目融资堆栈在五个方面不同:
1. **风险切分**: 每一层承担一个定义的切片（勘探、主权期限、政治风险、商业信用），而非由一个资产负债表吸收一切。
2. **期限**: ECA 分批将高级债务推至 15–25  年，超出私营银团所支持的范围。
3. **定价纪律**: [[policy-finance/oecd-export-credit-arrangement|OECD Arrangement]] 下的最低保费与 CIRR 下限防止 ECA 价格竞争压垮利差。
4. **追索**: 限定于项目现金流与一个定义的发起人支持范围，而非全企业追索。
5. **文件分量**: 共同条款协议、债权人间协议与 ECA 特定契约，使文件一揽子比国内银团贷款重一个数量级。

## 为何每一层都存在 — 市场失灵框架

- **勘探风险（JOGMEC）**: 上游地质风险具有重尾损失分布与长前置期。仅靠私营股权资本不愿在地缘政治敏感的法域为边际回报的关键矿产资助 FID 前勘探。国家股权／风险分担载体是以日本政策目标（资源安全）所要求的价格承接该风险的唯一买方。
- **主权期限放贷（JBIC）**: 商业银行面临巴塞尔风险加权与存款人期限错配，使 20 年未对冲的主权敞口放贷在经济上缺乏吸引力。具有政府支持资金渠道的国家贷款人能以政治上可容忍的价格延长该期限。
- **政治风险保险（NEXI）**: 私营政治风险保险市场（Lloyd's、MIGA、私营银团）按国家、按险种设有容量上限。对于前沿国家数十亿美元的 LNG 项目，私营容量不足; 国家保险填补该缺口。
- **商业银行银团（大型银行）**: 即便有 ECA 支持，仍需私营银行提供附带服务（对冲、代理角色、运转资金），并提供纯国家金融所缺乏的市场定价纪律。[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]] 与 [[megabanks/mizuho-fg|Mizuho FG]] 的存在还使项目对国家机构亦参照的 Equator Principles ESG 尽职调查保持合规。
- **SPV / 发起人**: 需要一个有限追索载体，以使项目失败不会损害商社或公用事业母公司的评级资产负债表，这正是允许母公司参与多个并行项目的原因。

每一层吸收其下各层无法定价的风险。移除任何一层，交易便无法建成 —— 或仅由竞争对手的政策金融堆栈建成。

## Related

- [[policy-finance/INDEX]]
- [[financial-regulators/jbic]]
- [[policy-finance/nexi]]
- [[policy-finance/jogmec]]
- [[policy-finance/oecd-export-credit-arrangement]]
- [[policy-finance/japan-policy-finance-system]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[finance/japan-acquisition-finance]]

## Sources

- JBIC official site (https://www.jbic.go.jp/en/) — institutional role, lending products, overseas investment loan / untied loan / export buyer credit definitions.
- NEXI official site (https://www.nexi.go.jp/en/) — Overseas Investment Insurance, Trade and Investment Insurance, Loan Insurance product descriptions.
- JOGMEC official site (https://www.jogmec.go.jp/english/) — equity participation, asset acquisition support, exploration / development risk-sharing mandate.
- OECD Arrangement on Officially Supported Export Credits (https://www.oecd.org/trade/topics/export-credits/arrangement-and-sector-understandings/) — minimum premia, repayment-term caps, sector understandings including the Coal Sector Understanding.
- JBIC and project-sponsor public press releases for Mozambique LNG financing.
- METI export and investment insurance overview (https://www.meti.go.jp/english/policy/trade_and_invest/export_invest.html) — policy framing of NEXI / JBIC roles.
