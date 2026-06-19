---
source: policy-finance/japan-credit-guarantee-system
source_hash: c9b2db821694efdb
lang: zh
status: machine
fidelity: ok
title: "日本信用保证制度"
translated_at: 2026-06-19T06:09:18.123Z
---

# 日本信用保证制度

## Wiki route

本条目位于 [[policy-finance/INDEX|policy-finance index]] 之下，作为中小企业金融的机制页面。请将其与 [[policy-finance/national-federation-credit-guarantee-corporations|Japan Federation of Credit Guarantee Corporations (JFG)]] 对照阅读以了解协调机构视角，与 [[policy-finance/japan-policy-finance-system|Japan policy finance system]] 对照阅读以了解更广泛的边界，并与行业特定的对应方 [[policy-finance/agriculture-credit-guarantee-system|agriculture]]／[[policy-finance/fisheries-credit-guarantee-system|fisheries]] 对照阅读。地方示例包括 [[policy-finance/hokkaido-credit-guarantee-corp|Hokkaido CGC]]、[[policy-finance/tokyo-credit-guarantee-corp|Tokyo CGC]]、[[policy-finance/osaka-credit-guarantee-corp|Osaka CGC]]、[[policy-finance/aichi-credit-guarantee-corp|Aichi CGC]] 和 [[policy-finance/hyogo-credit-guarantee-corp|Hyogo CGC]]。

## TL;DR

日本的信用保证制度（信用保証制度）是支撑日本中小企业及小规模事业者资金筹措的公共信用基础设施。它是一个分层系统：(1) 51 都道府县／市级的**信用保证协会**（Credit Guarantee Corporations, CGCs）为金融机构对合格中小企业的放贷提供保证；(2) **全国信用保证协会联合会**（JFG）协调 51 家 CGC 并统筹责任共担负担；(3) **信用保险**（credit insurance）层由 [[financial-regulators/jfc|Japan Finance Corporation (JFC)]] 运营，它对 CGC 的保证进行再保险，使最终残余损失落在公共信用基础设施上，而非压垮 CGC 层。这些合起来即**信用补完制度**（credit-supplementation system）。它不是单一贷款人；而是一种公共信用架构。2020–2022 的 ZeroZero 融资（实质无利息・无担保融资）特别项目通过该系统运行，并在代位清偿周期中持续向 2024–2026 解卷（unwind）。

## 1. 系统架构（信用补完制度栈）

| Layer | Role | FinWiki route |
|---|---|---|
| 中小企业／小规模事业者借款人 | 通过金融机构及保证途径申请事业资金。 | 此处的系统路径 |
| 金融机构（贷款人） | 提供贷款并在适用方案下共担责任。 | 相关的 [[banking/regional-bank-consolidation-pattern]] ／ 信用金库 ／ 信用合作社页面 |
| 地方信用保证协会（51） | 为合格中小企业债务提供保证；处理代位清偿／回收。 | 本系统 + 具战略性时的地方 CGC 页面（例如 [[policy-finance/hokkaido-credit-guarantee-corp]]） |
| 全国信用保证协会联合会（JFG） | 协调 51 家 CGC；管理责任共担系统的资金流。 | [[policy-finance/national-federation-credit-guarantee-corporations]] |
| 信用保险（credit insurance）— JFC | 对 CGC 保证进行再保险；吸收 CGC 代位清偿后的残余损失。 | [[financial-regulators/jfc]] |
| 经济产业省（METI）／中小企业厅（SME Agency） | 政策监督者；设定项目设计、资格、危机模式授权。 | [[policy-finance/INDEX]] |
| 都道府县／市町村 | 地方政府 — 共同出资地方项目、指定地方紧急事件、提供补助金。 | 地方政府路径 |

因此该系统是一条**纵向公共信用管线**：借款人 → 贷款人 → 地方 CGC（首损）→ JFG 协调 → JFC 信用保险（再保险）→ METI 政策托底。

## 2. 機関概要 — 地方信用保证协会

| 項目 | 内容 |
|---|---|
| 法令 | 信用保証協会法 (1953) |
| 法的形態 | 特別法上の認可法人 (special-law authorized entities; public-credit institution) |
| 数 | 51 (47都道府県 + 4市 — 横浜市・川崎市・名古屋市・岐阜市) |
| 所管 | 経済産業省 (METI) / 中小企業庁 (SME Agency) / 都道府県 |
| 共通 ANCHOR | 全国信用保証協会連合会 (JFG) |
| 再保険 | JFC 信用保険業務 |

## 3. 主要保証商品 (system-level menu)

- **一般保証** — **责任共担制度**（responsibility-sharing system；普通项目中典型为 80% 保证／20% 贷款人自留）下的标准中小企业银行贷款保证。
- **マル経保証** — 小规模事业者经营改善资金保证（商工会・商工会议所推荐案件）。
- **創業関連保証** — 创业／新事业保证。
- **事業承継特別保証** — 事业承继保证。
- **経営革新等支援保証** — 经营革新／事业转型保证。
- **借換保証** — 借新还旧／合并保证。
- **流動資産担保融資保証 (ABL)** — 应收账款／存货担保保证。
- **セーフティネット保証 (1号〜8号)** — 行业困境的指定事件保证，附带强化条件。（参见 §5。）
- **危機関連保証** — 国家紧急事态框架；在宣布的危机中最高 100% 保证。
- **災害関係保証** — 灾害恢复保证。
- **新型コロナウイルス感染症対応 ZeroZero 融資** — 新冠疫情时期的实质无利息・无担保特别保证（2020-05 起步；2021-03停止新增组成；服务／解卷通过 2026+ 持续进行）。（参见 §6。）

## 4. 保证比例机制 (責任共有制度)

**责任共担制度**（responsibility-sharing system）— 2007-10 引入 — 将既定比例的风险留给放贷的金融机构，而非 100% 保证：

- **标准（一般保証, 通常）**：CGC 保证贷款的 **80%**；贷款人自留 **20%** 残余风险（或同顺位损失分担变体）。这是 2007 以后的默认。
- **全额保证（100%）例外**：特定政策项目（セーフティネット 1号・2号・3号、危機関連保証、附条件的创业、附条件的マル経、危机设计下的 ZeroZero）保留无贷款人自留的 100% 保证。
- **同顺位损失分担变体**：在责任共担制度下，贷款人可选择 (a) 80% 保证结构，或 (b) CGC 与贷款人按既定公式同顺位分担损失的损失分担结构。

责任共担的 2007 引入是一项刻意的政策转变，旨在 2007 之前的 100%保证制度下出现道德风险担忧之后，恢复贷款人的审查纪律。

## 5. 安全网保证项目 (セーフティネット保証)

**安全网保证**框架有 8 个编号指定，各自涵盖不同的困境情景，并提供强化条件（通常为 100% 保证 + 借款人正常保证上限之外的单独额度）：

- **1号** — 大企业重组影响（METI 基于影响下游中小企业的大型企业破产／重组而作出的视同事件）。
- **2号** — 大企业经营冲击（例如带供应链影响的工厂关闭）。
- **3号** — 银行破产／金融机构清算对借款中小企业的影响。
- **4号** — 自然灾害／广域紧急事态（常因台风、地震、洪水而发动）。
- **5号** — 全行业结构性困境；由 METI 基于宏观／金融状况每季度指定特定行业。（在通胀／疫情／能源冲击期间被大量使用。）
- **6号** — 金融机构破产（来自 3号 的特定范围）。
- **7号** — 带协同组织金融影响的大企业重组。
- **8号** — RCC（整理回收机构）求偿影响。

请注意，**危機関連保証**（与セーフティネット分开）是带 100% 保证的更广泛国家紧急事态框架，仅在罕见的全国性危机指定（COVID-19, 2008 GFC 等同阈值等）下发动。

## 6. ZeroZero 融资解卷状况 (2020 → 2026)

**ZeroZero 融资**（实质无利息・无担保融资）项目是对 COVID-19 的核心危机金融应对：

| Phase | Period | Status |
|---|---|---|
| 组成起步 | 2020-03 → 2020-07 | METI 在 2020-05通过信用保证制度推出民间部门 ZeroZero；数月内迅速使用达到数万亿日元。JFC 直接运营一个并行的 ZeroZero 项目。 |
| 持续组成 | 2020-08 → 2021-03 | 通过全国 51 家 CGC 持续进行大规模保证组成。 |
| 组成终止 | 2021-03 → 2022 | 民间部门 ZeroZero 停止新申请（对狭窄类别有限延长）。JFC ZeroZero 同样通过 2022 终止。 |
| 宽限期 | 2020 组成 + 3年宽限 | 借款人通常享有本金宽限期（一般本金最多 5 年，初期附带利息补贴）。2020年份的贷款大部分通过 2023–2024进入还款开始。 |
| 代位清偿浪潮 | 2023–2026 | 随着还款开始触发，CGC 的代位清偿（代位弁済）攀升。多份业界报刊报道显示，自 2023 后期起全国代位清偿（代位弁済）量明显上升。 |
| 后疫情退出框架 | 2022–2025 | METI／中小企业厅就 ZeroZero 借款人的纾困／再融资统一指引（借換保証／経営改善 产品提供；"事業者ごとの粘り強い支援"的表述）与 JFG 进行协调。 |
| 持续尾部 | 2026+ | 随着剩余 2020年份贷款完成还款，代位清偿尾部延长；破产统计将 ZeroZero 相关破产作为受追踪的子类别显示，直至 2024–2026。 |

ZeroZero 解卷是信用保证制度**近期最具定义性的压力事件**，并体现在全国 CGC 的代位清偿统计中。解卷的地方层覆盖在具战略性时出现于 [[policy-finance/hokkaido-credit-guarantee-corp|Hokkaido CGC]] 及其他地方页面。

## 7. 资金来源

每家地方 CGC 通过以下组合获得资本：

- **国家（国）出资** — METI／中小企业厅的资本及补助金。
- **都道府县／市（都道府県・市）出资** — 地方政府资本；反映地方中小企业政策优先度。
- **贷款人出资（金融機関拠出）** — 合作银行／信用金库／信用合作社向其地方 CGC 出资。
- **保证费收入（保証料）** — 对担保本金的年率，通常处于个位数低百分比区间（附带政策项目补贴）。
- **联合会统筹基金** — JFG 管理的、支撑系统级协调的准备金。
- **JFC 信用保险** — 通过 [[financial-regulators/jfc|JFC 信用保険業務]] 账户对代位清偿事件的再保险补偿。

**公共信用风险承担瀑布**为：借款人回收 → CGC 准备金 → JFC 再保险 → 国家财政托底。

## 8. 违约／代位清偿流程

1. 借款人对担保贷款违约。
2. 贷款人依保证求偿；CGC 就担保部分向贷款人支付**代位清偿（代位弁済，subrogation）**（责任共担下通常为 80%；危机方案下为 100%）。
3. CGC 对借款人／担保物／个人保证人追索**求偿（求償，recovery）**。
4. CGC 依信用保险合同向 JFC 提出保险索赔；JFC 向 CGC 支付保险金。
5. 残余损失（回收 + JFC 保险之后）由 CGC 准备金吸收；若准备金有耗竭之虞，则由联合会／国家注资托底。

回收率因地区、行业和担保类型而异 — 城市 CGC（东京、大阪）通常比农村 CGC（北海道、东北、九州农村）有更高的回收率，因为商业不动产和设备的二级市场更厚。

## 9. 年度演进

| Year | Event |
|---|---|
| 1937 | 東京信用保証協会 — 第一家信用保证协会成立。 |
| 1953 | 信用保証協会法 制定；全国 CGC 框架。 |
| 1958 | 中小企業信用保険公庫 成立（后整合进 JFC）。 |
| 2007-10 | 責任共有制度 引入 — 从 100% 保证转向 80% ／ 20% 贷款人自留作为默认。 |
| 2008–2009 | GFC 紧急应对 — セーフティネット 5号 广泛发动；緊急保証 项目（近未来 100% 框架）。 |
| 2011 | 东北地震 — 災害関係保証 + 4号 广泛发动。 |
| 2020-05 | ZeroZero（实质无利息・无担保）民间部门项目通过 CGC 系统推出。 |
| 2021-03 | ZeroZero 民间部门组成终止（附有限延长）。 |
| 2023+ | 随着 2020年份宽限期结束，ZeroZero 代位清偿浪潮攀升。 |
| 2024–2025 | 纾困／借換 产品组合扩大；"粘り強い支援"的表述。 |
| 2025 | 持续解卷；破产统计显示 ZeroZero 相关子类别尾部。 |

## 10. 边界案例

- **系统 vs 联合会** — 本页解释机制；[[policy-finance/national-federation-credit-guarantee-corporations]] 解释全国协调机构。
- **保证 vs 贷款** — CGC 为信用提供保证；贷款由金融机构发放。CGC 不是贷款人。
- **系统 vs 单一 CGC** — 本页涵盖系统；地方 CGC 页面涵盖特定的都道府县／市协会。
- **中小企业 vs 农业／渔业** — 农业使用 [[policy-finance/agriculture-credit-guarantee-system]]；渔业使用 [[policy-finance/fisheries-credit-guarantee-system]]。
- **CGC vs JFC 直接放贷** — JFC 也直接向中小企业放贷；CGC 系统是对民间放贷的保证机制，而非直接放贷项目。

## Related

- [[policy-finance/INDEX]]
- [[policy-finance/national-federation-credit-guarantee-corporations]]
- [[policy-finance/agriculture-credit-guarantee-system]]
- [[policy-finance/fisheries-credit-guarantee-system]]
- [[policy-finance/japan-policy-finance-system]]
- [[policy-finance/japan-housing-finance-agency]]
- [[policy-finance/hokkaido-credit-guarantee-corp]]
- [[policy-finance/tokyo-credit-guarantee-corp]]
- [[policy-finance/osaka-credit-guarantee-corp]]
- [[policy-finance/aichi-credit-guarantee-corp]]
- [[policy-finance/hyogo-credit-guarantee-corp]]
- [[financial-regulators/jfc]]
- [[financial-regulators/shoko-chukin]]
- [[banking/shinkin-bank-registry-japan]]
- [[banking/credit-cooperative-registry-japan]]
- [[banking/regional-bank-consolidation-pattern]]
- [[INDEX|FinWiki index]]

## Sources

- 全国信用保证协会联合会，"信用保証協会と信用保証制度"(https://www.zenshinhoren.or.jp/guarantee-system/)。
- 全国信用保证协会联合会，"信用保証制度を支えるしくみ"(https://www.zenshinhoren.or.jp/guarantee-system/hokan/)。
- 全国信用保证协会联合会，"ご利用条件"(https://www.zenshinhoren.or.jp/guarantee-system/riyojoken/)。
- 中小企业厅，"中小企業の資金繰り支援"(https://www.chusho.meti.go.jp/kinyu/shikinguri/index.html)。
- 中小企业厅，セーフティネット保証 1号 (https://www.chusho.meti.go.jp/kinyu/sefuti/sefutinet_1gou.html)。
- 中小企业厅，セーフティネット保証 2号 (https://www.chusho.meti.go.jp/kinyu/sefuti/sefutinet_2gou.html)。
- JFC，中小企业金融页面 (https://www.jfc.go.jp/n/finance/sme/index.html)。
