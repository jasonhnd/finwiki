---
source: agent-economy/agent-legal-tax-liability-framework
source_hash: c30da143b72cba98
lang: zh
status: machine
fidelity: ok
title: "AI agent 法律与税务责任框架 · 谁负责、agent 收入如何征税"
translated_at: 2026-05-30T16:40:11.491Z
---

# AI agent 法律与税务责任框架 · 谁负责、agent 收入如何征税

## TL;DR

截至 2026, 中期,没有任何主要金融监管机构(美国 SEC / CFTC / FinCEN、英国 FCA、日本 FSA、新加坡 MAS、欧盟 ESMA / EBA)正式授予 AI agent 独立法律人格,也没有任何主要税务机关(美国 IRS、英国 HMRC、日本 NTA、新加坡 IRAS、OECD)创设新的「AI agent」税务类别。运作框架仍是 **承袭自普通法代理的委托-代理法理**,**部署方** 被视为委托人,**AI agent** 被视为工具 / 工具手段 / 非人类承包者。一笔误执行 agent 交易的 **责任瀑布** 为:终端用户(若用户 mandate 宽泛地授权了该交易)、部署方(若 agent 在部署方的指示范围内行事)、模型提供方(仅在狭窄的缺陷 / 过失情形)、基础设施提供方(罕见,经合约中介)。agent 产生收入的 **税务处理** 将该收入视为部署方的营收,按部署方的税务居民规则征税 — agent 尚非独立税务主体。欧盟 AI Act(条例 2024/1689)、FCA 的 2024-2026 AI 咨询历程、SEC 的预测性数据分析规则轨迹,以及日本 FSA 的 AI 原则,全部一致地推向 **部署方问责** 而非 agent 人格。底层哲学 / 制度框架见 [[agent-economy/agent-actorship-debate|agent actorship debate]]。

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy index]]. Read it with [[agent-economy/agent-actorship-debate|agent actorship debate · four camps]] for the philosophical framing, [[agent-economy/skill-market-monetization|skill market monetization]] for the income-side context, [[agent-economy/ai-company-payment-landscape|AI company payment landscape]] for the where-revenue-flows framing, [[agent-economy/claude-code-extension-architecture|Claude Code extension architecture]] for the framework-provider angle, and [[fintech/INDEX|fintech index]] for adjacent payments-regulator context.

## 委托-代理法理 · 默认法律框架

普通法代理 — 编纂于美国《代理法重述(第三版)》、英国普通法代理、日本《民法》委任契約(委任合同),以及类似的大陆法系制度 — 提供了默认框架:

- **委托人(Principal)。** agent 代其行事的一方。在 AI 部署中,这绝大多数被定性为 **部署方**(配置并运行 agent 的公司或个人),或在更狭窄的配置中为 **终端用户**(经由 wallet permission 发出明确 mandate 者)。
- **代理人(Agent)。** 代表委托人行事的一方。法律人格问题在此至关重要:在现行法理下,只有自然人和法人(公司、合伙、某些信托)合格。AI agent 在任何主要司法辖区都尚非法人。
- **第三方。** agent 与之交易的对手方。第三方的追索在实际授权、表见授权和追认等法理下指向委托人。

大多数监管机构隐含认可的法理定性,将 AI agent 视为委托人的 **工具手段** — 更接近工具或脚本,而非雇员。部署方对 agent 输出所负的责任,大致与其在替代责任(respondeat superior)下对雇员输出所负的责任相当,只是没有雇佣关系所带来的抵消性保护(工伤补偿制度、雇佣税分类等)。

## 责任瀑布 · agent 交易出错时谁来买单

AI agent 交易出错时,潜在责任的五个层级:

| 层级 | 谁 | 典型责任锚点 | 备注 |
|---|---|---|---|
| 1 | 终端用户(因 mandate 而为委托人) | 用户的 wallet permission([[agent-economy/erc-7715-overview|ERC-7715 mandate]])授权了 agent | 受约束的 mandate 授权是最保护用户的设计 |
| 2 | 部署方(因部署而为委托人) | 代用户运行 agent 的公司 | 大多数企业 agent 部署中的默认委托人 |
| 3 | 模型提供方(Anthropic、OpenAI、Google) | 模型行为中的缺陷、过失或违反保证 | 狭窄;受 API 条款保证免责声明和标准产品责任抗辩限定 |
| 4 | 框架提供方(Claude Code、LangChain、AutoGen) | 编排框架中的缺陷或过失 | 狭窄;通常受合约限定 |
| 5 | 基础设施提供方(AWS Bedrock AgentCore、Azure AI Foundry、GCP Vertex AI) | 运行时平台中的缺陷或违约 | 罕见;通常受 SLA 限定 |

2026 中期合约的实务模式:**部署方承担几乎全部责任**,模型与基础设施提供方对间接损害免责,而在任何承认基于 wallet-permission 授权的司法辖区,基于终端用户 mandate 的授权被视为一种稳固的委托-代理关系。

一个生动的边缘案例:AI agent 因模型幻觉而以错误价格买入一项资产。部署方是默认委托人;部署方对模型提供方的追索受 API 条款限制;用户对部署方的追索受部署方的服务条款和 wallet-mandate scope 约束。这些层级中没有一个将 agent 本身视为责任方。

## 美国监管机构 · SEC、CFTC、FinCEN、FTC

**SEC。** 2023 的预测性数据分析规则提案(随后被大幅收窄)确立了一个先例:SEC 将经纪自营商 / 投资顾问决策中的 AI 使用视为 **公司的责任**,带有详细的利益冲突披露与管理要求。SEC 未授予任何 AI agent 作为投资顾问或经纪自营商的独立人格。2024-2026 的 SEC 公开立场(在工作人员声明和委员会就 AI 相关披露的行动中一致)将 agent 输出视为公司输出。

**CFTC。** CFTC 2024 关于衍生品市场中 AI 的工作人员通告强化了:注册中介对 AI 驱动的交易决策仍负有责任。DCM(指定合约市场)/ SEF 语境中的 AI agent 是注册实体的工具,而非独立参与者。

**FinCEN。** 没有 FinCEN 指引将 AI agent 视为 BSA / KYC 下可单独申报的人。申报实体仍是运行该 agent 的金融机构。

**FTC。** FTC 2024-2026 的 AI 指引强调:AI 生成的虚假陈述在《FTC 法》第 5 条下是部署公司的责任。

## 英国 FCA

FCA 的 AI 咨询历程(CP24/16 及后续通讯,2024-2026)明确将 AI 视为受监管公司的工具。FCA 公开材料中的关键立场:

- 公司在高级管理人员与认证制度(SMCR)下,对 AI 驱动的决策仍负有问责。
- FCA 不将 AI agent 授权为独立的受监管公司。
- 消费者义务(Consumer Duty)适用于 AI 驱动的消费者结果,一如适用于任何其他公司决策。
- FCA 明确指出,AI 使用的增加并不改变现有监管边界 — 运营 agent 的公司才是受监管实体。

FCA 对 SMCR 的强调具有实际效果,即使一名 **具名的个人高级管理人员** 对公司的 AI 部署负责,这进一步固化了委托人即部署方的框架。

## 日本 FSA · AI 原则 + 2024-2026 指引

FSA 的 2024 AI 原则(公表)和 2025-2026 监管指引遵循部署方问责模型。关键公开材料:

- FSA 将金融服务公司中的 AI 使用,视为受与任何其他操作风险相同的监管框架约束。
- 金融機関のAI活用に係る論点整理(金融机构 AI 利用论点整理)讨论文件明确指出受监管实体为责任方。
- 暗号資産交換業(加密资产交换业)牌照框架不考虑 AI agent 作为牌照持有人。
- 金融サービス仲介業(金融服务中介业)框架适用于部署 AI 进行中介的公司,而非 AI 本身。

日本民法的 委任契約(委任)是普通法代理的法理镜像,对 AI-agent 问题的运作方式相类似:委托人-委任者 / 代理人-受任者 的框架将 AI 视为部署方的工具,而非独立的 受任者。

## 新加坡 MAS

MAS 的 Veritas 倡议(金融服务中 AI 使用的公平、伦理、问责、透明)和 2024-2026 AI 风险管理指引将 AI 视为受监管金融机构的工具。MAS 未将任何 AI agent 牌照化为独立的金融服务提供商,且《资金决济法》制度将 DPT 服务提供商视为受监管实体,无论其内部如何使用 AI。

## 欧盟 · 欧盟 AI Act(条例 2024/1689)+ 金融部门

欧盟 AI Act(条例 2024/1689, 于 12, 年 7 月在 OJ 公布,2024, 1, 年 8 月生效 2024, ,分阶段适用日期延续至 2026-2027)是主要司法辖区中最明确的 AI 专属立法。关键公开文本特征:

- **基于风险的分类。** 高风险 AI 系统(附件 III)包括金融服务中使用的信用评分和某些保险定价系统。
- **部署方义务。** 高风险 AI 系统的部署方负有不同的义务(第 26条),包括人类监督、基本权利影响评估和事件报告。
- **提供方义务。** 高风险 AI 系统的提供方(第 16条)负有合格评定、文档和投放后监控义务。
- **通用目的 AI 模型。** 第 53-56 条对大型通用目的 AI 模型的提供方施加透明度和系统性风险义务,但不对由此产生的 agent 授予法律人格。
- **无法律人格。** 该法明确在现有人格框架内运作。2017 年欧洲议会关于机器人民事法律规则、曾抛出「电子人格」的决议,并未被纳入 AI Act。

金融部门叠加层(ESMA、EBA、EIOPA AI 用例)在 AI Act 框架内运作,并强化部署方问责模型。

## 税务处理 · agent 收入作为部署方收入

2026中期各主要司法辖区的默认税务定性:

- **agent 收入是部署方的收入。** AI agent 代部署方行事所产生的营收,是部署方的总收入,按部署方的居民 / 住所规则征税。没有主要税务机关将 agent 视为独立税务主体。
- **预扣税。** 当 agent 从另一辖区的对手方收款时,基于条约的预扣适用于部署方(或部署方的支付常设机构,如适用)。OECD BEPS 框架的关联度与利润分配规则适用于部署方实体。
- **销售税 / 增值税 / 消费税。** 视为部署方对对手方的一笔销售。欧盟 VAT、英国 VAT、日本 消費税、新加坡 GST 全部照常运作 — 部署方是应税供应方。
- **加密资产申报。** 在 OECD 加密资产报告框架(CARF)和美国 1099-DA 基础设施(见 [[fintech/carf-1099da-end-of-crypto-anonymity|CARF / 1099-DA framework]])下,由 agent 执行的加密资产交易由钱包提供方或中心化中介申报 — agent 不是申报实体。

通俗 AI 评论中偶尔出现的「agent 是雇员还是承包者」问题,在现行税务法理下是一个范畴错误。agent 不是劳动者;部署方不是雇主。依赖劳动者分类的税务规则(美国 W-2 对 1099, 、英国 IR35, 等)并未被触发,因为没有劳动者可分类。

一个更微妙的边缘案例出现在 **终端用户** 经由 [[agent-economy/erc-7715-overview|ERC-7715]] wallet permissions 委任 agent,且 agent 经由 [[agent-economy/x402-http-payment-overview|x402]] 为用户明确请求的任务赚取微支付时。此处收入是 **用户的** 收入(作为因 mandate 而为的委托人),适用用户的税务居民规则。该配置下的部署方是中介;agent 人格仍未被触发。

## 跨司法辖区比较矩阵

| 司法辖区 | 监管机构对 agent 人格的立场 | 责任默认 | agent 收入的税务处理 |
|---|---|---|---|
| 美国(SEC / CFTC / FinCEN / FTC / IRS) | 无人格;agent 是公司工具 | 部署方(叠加 FTC 的消费者欺诈) | 部署方收入;受公司级税 + 1099-DA 下的加密资产申报约束 |
| 英国(FCA / PRA / HMRC) | 无人格;SMCR 高级管理人员问责 | 部署方;高级管理人员个人对系统性失败担责 | 部署方收入;VAT 适用于作为供应方的部署方 |
| 日本(FSA / NTA) | 无人格;委任契約 框架仅在为人时才将 agent 视为 受任者 | 部署方(受监管公司) | 部署方收入;消費税 适用于作为供应方的部署方;经 VASP 的 CARF + 加密申报 |
| 新加坡(MAS / IRAS) | 无人格;Veritas 框架使公司担责 | 部署方(受监管公司) | 部署方收入;GST 适用于作为供应方的部署方 |
| 欧盟(AI Act + ESMA / EBA / EIOPA + 成员国税) | 无人格;AI Act 第 26 条下的部署方义务 | 部署方(就系统缺陷负提供方责任) | 成员国层面的部署方收入;欧盟规则下的跨境 VAT |

收敛之鲜明令人瞩目:**没有任何主要司法辖区偏离部署方问责**,即便欧盟最具 AI 专属性的立法也是强化而非颠覆现有人格框架。

## 这对 agent 经济参与者意味着什么

**嵌入式钱包提供方**(见 [[agent-economy/embedded-wallet-landscape-2026-consolidation|2026 wallet landscape]]):Privy、Coinbase CDP 等,在对监管友好的自托管设计下仍属非 VASP / 非货币转移方(见 [[agent-economy/embedded-wallet-network-effects-moat|network effects · §501 friendly]])。其责任敞口针对的是技术,而非 agent 的交易决策。KYC 义务归于拥有客户关系的公司(部署方,或在某些流程中的 [[agent-economy/coinbase-cdp-developer-platform|CDP / Privy parent]])。

**模型提供方**(Anthropic、OpenAI、Google):API 条款激进地对间接损害免责,仅就狭窄的产品缺陷情形作出赔偿。法律敞口在合约中;监管敞口随部署方。

**框架提供方**(Claude Code、LangChain、AutoGen):开源代码在宽松许可证(MIT、Apache 2.0)下交付,不附保证。商业框架提供方以合约对间接损害免责。

**部署方**(任何在生产中运行 agent 的公司):承担委托-代理责任。需要类似 FCA SMCR / FSA 業務適切性 / MAS Veritas / 欧盟 AI Act 第 26 条预期的治理、监控、审计链和事件响应实践。

**终端用户**:在其 wallet permission mandate 受约束的范围内(特定商家、特定金额、特定时段)受保护。一个不受约束的 mandate 在功能上将用户提升为因 mandate 而为的委托人,把更多责任转移到用户侧。

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|Agent economy index]]
- [[agent-economy/agent-actorship-debate|Agent actorship debate · four camps]]
- [[agent-economy/skill-market-monetization|Skill market monetization]]
- [[agent-economy/ai-company-payment-landscape|AI company payment landscape]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]]
- [[agent-economy/claude-code-extension-architecture|Claude Code extension architecture]]
- [[agent-economy/embedded-wallet-custody-bankruptcy-mechanics|Embedded wallet custody bankruptcy mechanics]]
- [[agent-economy/erc-7715-overview|ERC-7715 overview]]
- [[fintech/INDEX|Fintech index]]
<!-- /wiki-links:managed -->

## Sources

- US SEC public materials including the 2023 predictive-data-analytics rule proposal and subsequent staff statements
- US CFTC public materials including the 2024 AI staff advisory
- US FinCEN BSA / KYC public guidance
- US FTC public materials on AI deception and Section 5 enforcement
- UK FCA public materials including CP24/16 and follow-up AI consultation papers
- UK HMRC public guidance on VAT and corporate tax treatment of digital services
- Japan FSA public materials including the 金融機関のAI活用 issue arrangement papers and 2024-2026 supervisory guidance
- Japan NTA public materials on consumption tax and cross-border digital-services taxation
- Singapore MAS Veritas framework public materials and Payment Services Act
- Singapore IRAS public materials on GST and digital-services taxation
- EU AI Act (Regulation (EU) 2024/1689), Official Journal of the European Union, July 12, 2024
- EU ESMA, EBA, EIOPA public AI-use-case discussion papers
- OECD BEPS framework public materials and the Crypto-Asset Reporting Framework (CARF)
- US IRS public materials on 1099-DA infrastructure
- US Restatement (Third) of Agency (American Law Institute)
- UK common law of agency (Bowstead & Reynolds on Agency public summaries)
- Japan Civil Code Articles 643-656 (委任契約)
- UNCITRAL and Uniform Law Commission public materials on electronic-commerce and emerging technology
