---
source: agent-economy/visa-mastercard-agentic-commerce-pilots
source_hash: 566afa82411620e7
lang: zh
status: machine
fidelity: ok
title: "Visa Intelligent Commerce + Mastercard Agent Pay · 卡网络的 agentic commerce 试点"
translated_at: 2026-05-30T17:31:02.648Z
---

# Visa Intelligent Commerce + Mastercard Agent Pay · 卡网络的 agentic commerce 试点

## TL;DR

Visa Intelligent Commerce（于 2024-Q4, 宣布，在 2025以 Trusted Agent Protocol 扩展）和 Mastercard Agent Pay（于 2025年初宣布）是卡网络对 [[agent-economy/x402-http-payment-overview|x402]]、[[agent-economy/ap2-overview|AP2]] 和 [[agent-economy/erc-7715-overview|ERC-7715]] 从开放协议侧所回答的同一问题的答案：一个 AI agent 如何代表用户付款，附可证明的授权，并以商户实际能接受的方式？卡网络的赌注是，**它们已经运营的闭环轨道** —— 代币化、网络侧风险评分、拒付 / 争议机制、issuer 欺诈责任转移 —— 恰恰是开放协议栈所缺的拼图，而把这些轨道包裹进一个 agentic-commerce API 比等待 stablecoin 轨道从头长出拒付基础设施要快。这些试点在现有 card-on-file 原语之上路由，扩展了 agent 特定的 token 类型、agent 认证头，以及（在 Visa 的情形）与 Google 的 AP2 的公开合作，以把开放协议 mandate 桥接进闭环网络。竞争论题：agentic commerce 不会是单一网络；它将是一条闭环卡轨道（Visa + Mastercard，交付快、昂贵、消费者保护高）与一条开放协议轨道（x402 + AP2 + ERC-7715 + stablecoin，交付慢、便宜、消费者保护弱）并行运行，多数 agent 随时间学会把正确的交易路由到正确的轨道。

## Wiki route

本条目归属于 [[agent-economy/INDEX|agent-economy index]]，作为 agent 支付竞争格局的卡网络解读。请对照 [[agent-economy/ap2-overview|AP2]]（Visa 公开与之合作）、[[agent-economy/ap2-adoption|AP2 adoption landscape]]（已经标注了 Visa 角度）、[[agent-economy/x402-http-payment-overview|x402]]（Visa Intelligent Commerce 明确与之竞争的开放协议对应物）以及 [[agent-economy/stripe-agent-toolkit-position|the Stripe Agent Toolkit position]]（经由 Stripe Issuing 横跨两个阵营）来读。更广泛的系统 / 监管边界见 [[fintech/INDEX|fintech index]] 和 [[payments/INDEX|payments index]]。

## Mechanism · Visa Intelligent Commerce

Visa Intelligent Commerce 是覆盖 Visa agent-commerce 倡议的伞形项目。两个承重部分：

**Visa Trusted Agent Protocol。** 一种已签名凭证格式，用于验证一笔交易是由代表已知持卡人运作的 AI agent 授权的。该协议把 Visa 现有的代币化栈（Visa Token Service，它已在 Apple Pay、Google Pay、click-to-pay 等上用商户特定 token 替换 16位 PAN）扩展到一个新的 token 类型，该类型携带：

- 底层持卡人身份（经由 VTS），
- 一个 agent 认证 —— 哪个 agent 平台发起了请求、其范围是什么、用户何时授权，
- 一个 Visa 网络可对照其标准欺诈模型评分的逐笔交易风险信号，
- 一个对 AP2 mandate 的可选引用（Visa 于 2025公开承诺 AP2 互操作性）。

交易在标准 Visa 轨道上流动 —— 经过 issuer、网络、acquirer、商户 —— 但每一跳都知道这是一笔 agent 交易，并可应用不同规则（不同的速度限制、不同的欺诈阈值、不同的争议默认）。

**公开 AP2 合作。** Visa 是 [[agent-economy/ap2-overview|Google's AP2]] 发布中的具名合作伙伴之一，且 Visa 承诺使 Trusted Agent Protocol 与 AP2 mandate *双向互操作* —— 来自 Google/Gemini agent 的 AP2 mandate 可在 Visa 网络内被验证为 Trusted Agent 认证，而 Visa 发行的认证可在一个讲 AP2的商户处满足 AP2 mandate。这是闭环卡轨道与开放协议轨道之间最具体的公开桥梁。

## Mechanism · Mastercard Agent Pay

Mastercard Agent Pay 在结构上类似但侧重不同。其形态：

**代币化扩展。** 与 Visa 一样，Mastercard 以一个 agent 特定 token 类型扩展其现有代币化服务（Mastercard Digital Enablement Service，MDES —— 即在 Mastercard 上为 Apple Pay / Google Pay 提供动力的同一引擎）。该 token 可被发行供特定 agent 使用，附商户类别码限制、逐笔交易速度上限和过期时间。如同一张一次性卡，但内置了密码学 agent 认证。

**Agentic Tokens + Smart Data。** Mastercard 将 token 与丰富的交易元数据（商户身份、在可得处的项目级描述符、与争议相关的背景）配对，使源自 agent 交易的争议能比普通卡交易以更多背景被裁决。产品框架："agent 进行该交易的理由是交易记录的一部分。"

**Issuer 侧控制。** 发卡银行通过把 agent 特定授权规则加入其现有卡管理栈来集成 Agent Pay。用户可经由其银行 app 看到"以下 AI agent 有权在此卡上花费"，附逐 agent 范围和一个急停开关。

**截至 2026年中无公开 AP2 承诺。** Mastercard 表态称它将支持多种 agent 认证协议（若 AP2 成为主导则支持它；否则支持替代方案），但它未做出与 Visa 同等规模的公开 AP2 合作公告。这是两家网络战略定位之间最显著的差异。

## Mechanism · 卡网络轨道为 agent 带来的、开放协议所没有的东西

卡网络试点的战略逻辑是，开放协议栈（[[agent-economy/x402-http-payment-overview|x402]] + USDC、[[agent-economy/erc-7715-overview|ERC-7715]] + 4337, 等）缺少四样卡网络花了数十年构建的东西：

**拒付与争议解决。** 当 agent 交易出错时 —— 错误商户、错误金额、被 prompt 注入、社会工程的受害者 —— 用户需要一种把资金追回的方式。卡拥有一套 50+ 年历史的拒付基础设施，配有成文的原因码、受监管的时间表、issuer 侧的欺诈责任和商户侧的文档要求。链上栈没有任何对等物。卡网络的推销词："让 agent 在卡上交易，你就继承了这一切。"

**Issuer 侧欺诈责任转移。** 在现有卡网络规则下，issuer 对某些类别的欺诈交易负责，商户对另一些负责。agent 交易制造了一个新问题 —— 当 agent 被 prompt 注入时谁负责？ —— 而卡网络正用这些试点来书写那个答案，写成对自己有利且保护用户的方式。链上栈最终也需要回答同一问题，而目前没有。

**网络侧风险评分。** Visa 和 Mastercard 将每笔交易都通过见过数百亿笔交易的机器学习欺诈模型处理。一笔 agent 交易走相同的评分；网络可在授权步骤实时拒绝可疑的 agent 活动，而不牵涉商户或用户。链上没有对等的网络行为体；风险必须在用户的钱包或商户处强制执行，而两者都只看到自己的那一片。

**接受度。** Visa 和 Mastercard 被数千万商户接受。USDC 今天被一个小得多的集合接受；增长是真实的但差距很大。对于瞄准传统商户的 agent 交易（这是未来数年大部分可触达市场），卡网络是唯一真正能大规模运作的路径。

## Agent 特定场景

**场景 A —— agent 预订一家需要卡预授权（hold）的餐厅。** 开放协议今天做不到这点；几乎没有餐厅接受 USDC 做 hold。卡网络模式：agent 调用 Trusted Agent / Agent Pay API 铸造一个限定于商户 ID、带 $200 上限、有效 48 小时的一次性 token。商户对该 token 设置 hold；若用户到场，商户释放 hold 并执行实际扣款；若用户未到，商户捕获该 hold。争议机制是标准卡网络。

**场景 B —— agent 订阅一个不接受 stablecoin 的流媒体服务。** 与上面相同的模式，但带周期性授权。该 token 是周期性的、限定于商户、带用户的月度上限。若流媒体服务涨价，网络可在授权时拒绝超上限交易，而无需 agent 知道。

**场景 C —— agent 在用户已标记为受限的类别中交易。** 用户经由 issuer app 配置"经由 agent 不得赌博、不得酒类、不得成人内容"。无论 agent 以为自己在做什么，issuer 侧控制都在授权时强制执行此规则 —— 拒绝发生在网络轨道上。在无商户侧配合的情况下，开放协议栈中不存在对等的强制执行。

**场景 D —— agent 交易事后被用户争议。** 用户说"我从未授权我的 agent 在这家商户花 $500 "。卡网络拒付路径：用户向 issuer 提起争议；issuer 调取 Trusted Agent / Agent Pay 认证、AP2 mandate（若附了的话）和商户的文档；适用标准原因码裁决，以 agent 认证作为一种新的证据类型。开放协议对等物：没有 —— 链上交易是最终的。某些 [[agent-economy/erc-7715-overview|ERC-7715]] 提案讨论可选的托管 / 可逆窗口，但没有任何标准化的东西。

**场景 E —— agent 进行带货币兑换的国际交易。** 卡网络通过 Visa/Mastercard 跨境基础设施处理 FX，附受监管的 FX 披露以及（在某些法域）受监管的最大 FX 加价。agent 以 USD 调用 API，商户以当地货币收款，网络处理兑换并披露汇率。链上对等物：agent 经由一个聚合器做 stablecoin 到 stablecoin，但 FX 披露是 agent 平台的责任，且尚无监管基线。

**场景 F —— agent 在多个用户间拆分一笔支付（团购、共享订阅）。** 卡网络模式：agent 对照多张卡发行多个 Trusted Agent token，每个带该用户的个人上限。网络对照 merchant of record 独立结算每一笔。开放协议对等物在链上可运作，但失去逐笔的争议路径。

## 监管框架 · 闭环网络规则 vs 开放协议的自由发挥

卡网络在一种开放协议栈确实没有的监管框架下运营：

**网络规则是准监管的。** Visa Core Rules、Mastercard Rules 以及它们实现的 Reg E / PSD2 / 对等框架创造了一个受监管的商业框架。每个信誉良好的商户都已同意一组义务（争议响应时间表、证据格式、禁止类别），网络以威胁丧失接受度来强制执行。把 agentic commerce 包裹进这个框架就继承了这个框架；开放协议栈必须从头构建任何对等的强制执行。

**发卡银行责任。** 卡由作为银行受监管的银行发行。银行 issuer 有明确义务（美国的 Reg E、欧盟的 PSD2 ）以既定方式处理未授权交易。被争议为未授权的 agent 交易继承那些义务 —— *银行*是必须在既定时间表内使用户复原的受监管方。这是比"你钱包的智能合约带着钱包厂商写的任何逻辑"显著更强的消费者保护。

**跨境监管连续性。** 卡网络在双边和多边条约（欧盟的交换费监管、各处的 AML/CFT 规则）下运营，这些在各法域间干净地转译。Stablecoin agent 交易仍处于拼凑状态 —— 欧盟的 MiCA、美国的 GENIUS Act 和 OCC 解释函、[[fintech/japan-stablecoin-regulatory-landscape|JFSA's three-layer framework in Japan]]，以及他处一幅乱得多的图景。卡网络已经清理了跨境法律工作。

**agent 认证问题。** 两家网络都必须回答"一个 AI agent 认证用户授权了一笔交易，在法律上意味着什么？"两者都尚未完全回答，但都在与监管者（美国 OCC、欧盟委员会、英国 FCA、新加坡 MAS）合作，把该认证定义为一种被认可的授权工件 —— 介于 CVV 检查与强客户认证信号之间。这是开放协议栈最终也将需要的一块公法基础设施；卡网络率先在构建它。

## 竞争定位

**vs [[agent-economy/x402-http-payment-overview|x402]] —— 不同的成本 / 消费者保护取舍。** x402 是每笔不到一美分、USDC 最终、无拒付、网络层欺诈防御弱。Visa Intelligent Commerce / Mastercard Agent Pay 是每笔数十 bps 到约 3%、受争议保护、在网络处经欺诈评分。对于高价值或第一方商户交易，卡网络在除成本外的每个维度上获胜。对于基础设施到基础设施的微支付，x402 占主导，因为卡经济不支持低于一美元的交易。

**vs [[agent-economy/ap2-overview|AP2]] —— Visa 在桥接进来，Mastercard 在对冲。** Visa 的公开 AP2 合作是闭环与开放协议轨道将在*授权*层（AP2 mandate）互操作的最强信号，即便它们在*结算*层保持分离。Mastercard 的多协议姿态表明它预期会有多种 agent 认证协议，而非 AP2 主导。互操作性的故事是 agent 经济架构师最重要的二阶问题。

**vs [[agent-economy/stripe-agent-toolkit-position|Stripe Agent Toolkit]] —— 在 Issuing 处重叠。** Stripe Issuing 已经经由 Toolkit 为 agent 铸造虚拟卡，骑在相同的 Visa / Mastercard 轨道上。网络的 Intelligent Commerce / Agent Pay 层位于 Stripe Issuing *之下* —— Stripe 是使用网络 agent-token 基础设施的发卡项目管理方。因此实际上，经由 Stripe Agent Toolkit 的 Issuing 路径的一笔 agent 交易很可能骑在 Trusted Agent Protocol / Agent Pay 轨道上，而开发者看不到。Stripe 赢得分销；网络赢得基础设施经济。

**vs [[agent-economy/privy-aws-agentcore-default-wallet|Privy / AWS AgentCore]] —— 正交的层。** Privy 是钱包；AgentCore 是 agent 宿主；卡网络是结算轨道。它们组合：agent 在 AgentCore 上运行，为链上在 Privy 中持有资金，并为链下使用一张 Stripe 发行的 Visa。无直接竞争。

**vs JPMorgan Kinexys / 机构轨道。** 机构轨道（存款代币、[[fintech/institutional-stablecoin-deposit-token-thesis|deposit-token thesis]]、许可链）对发起方是人还是 agent 无所谓，因为它们在一个小得多、经过严格审查得多的对手方集合上运营。卡网络 agentic 试点瞄准零售和 SMB，那里对手方审查不可能，且轨道必须在网络处强制执行保护。不同市场，不同产品。

## Related

- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|Seven-protocol layer table]]
- [[agent-economy/ai-agent-payment-protocols-commoditization|Agent payment protocols commoditization]]
- [[agent-economy/ap2-overview|AP2 overview]]
- [[agent-economy/ap2-adoption|AP2 adoption landscape]]
- [[agent-economy/ap2-technical-spec|AP2 technical spec]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 Cloudflare / AWS edge integration]]
- [[agent-economy/stripe-agent-toolkit-position|Stripe Agent Toolkit position]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet overview]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore default wallet]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/embedded-wallet-network-effects-moat|Embedded wallet network effects moat]]
- [[agent-economy/ai-company-payment-landscape|AI company payment landscape]]
- [[agent-economy/erc-7715-overview|ERC-7715 wallet permissions]]
- [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer for agents]]
- [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 primer for agents]]

## Sources

- Visa corporate communications — `corporate.visa.com`.
- Mastercard newsroom — `mastercard.com/news`.
- Google AP2 spec repository (partner list includes Visa) — `github.com/google-agentic-commerce/AP2`.
- Visa Developer Center — `developer.visa.com`.
- Mastercard Developer — `developer.mastercard.com`.
