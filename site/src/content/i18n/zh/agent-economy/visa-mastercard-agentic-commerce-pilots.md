---
source: agent-economy/visa-mastercard-agentic-commerce-pilots
source_hash: 327072d84be53b5f
lang: zh
status: machine
fidelity: ok
title: "Visa Intelligent Commerce + Mastercard Agent Pay · 卡组织 Agentic Commerce 试点"
translated_at: 2026-06-15T03:48:21.836Z
---

# Visa Intelligent Commerce + Mastercard Agent Pay · 卡组织 Agentic Commerce 试点

## TL;DR

Visa Intelligent Commerce（于 2024-Q4,  公布，并在 2025 随 Trusted Agent Protocol 扩展）与 Mastercard Agent Pay（于 2025 初公布）是卡组织对同一问题的回应——而 [[agent-economy/x402-http-payment-overview|x402]]、[[agent-economy/ap2-overview|AP2]] 和 [[agent-economy/erc-7715-overview|ERC-7715]] 正从开放协议一侧回答这同一问题：AI agent 如何代表用户付款，并带有可证明的授权，且以商户实际能够接受的方式完成？卡组织的押注在于：**它们已经运营的闭环通道**——tokenization、网络侧风险评分、chargeback / dispute 机制、发卡行欺诈责任转移——恰恰是开放协议栈所缺失的拼图，而将这些通道包装进一个 agentic-commerce API，比起等待 stablecoin 通道从零生长出 chargeback 基础设施要更快。这些试点在既有的 card-on-file 原语之上路由，并扩展了 agent 专用的 token 类型、agent-attestation 头部，以及（在 Visa 的情形下）与 Google AP2  的公开合作，以将开放协议的 mandate 桥接进闭环网络。竞争论点是：agentic commerce 不会是单一网络；它将是一条闭环卡轨道（Visa + Mastercard，上线快、成本高、消费者保护强）与一条开放协议轨道（x402  + AP2  + ERC-7715  + stablecoin，上线慢、成本低、消费者保护弱）并行，而大多数 agent 会随时间学会将正确的交易路由到正确的轨道。

## Wiki route

本词条作为对 agent-payment 竞争格局的卡组织解读归属于 [[agent-economy/INDEX|agent-economy index]]。可对照 [[agent-economy/ap2-overview|AP2]]（Visa 与之公开合作）、[[agent-economy/ap2-adoption|AP2 adoption landscape]]（已经标注了 Visa 的视角）、[[agent-economy/x402-http-payment-overview|x402]]（Visa Intelligent Commerce 明确与之竞争的开放协议对应方）以及 [[agent-economy/stripe-agent-toolkit-position|the Stripe Agent Toolkit position]]（经由 Stripe Issuing 横跨两个阵营）阅读。关于更宏观的体系 / 监管边界，参见 [[fintech/INDEX|fintech index]] 和 [[payments/INDEX|payments index]]。

## Mechanism · Visa Intelligent Commerce

Visa Intelligent Commerce 是涵盖 Visa 各项 agent-commerce 计划的总括性项目。两个承重部件：

**Visa Trusted Agent Protocol。** 一种签名凭证格式，用于验证某笔交易是由代表某个已知持卡人运作的 AI agent 所授权的。该协议将 Visa 既有的 tokenization 栈（Visa Token Service，已经在 Apple Pay、Google Pay、click-to-pay 等上以商户专用 token 替换 16 位 PAN）扩展为一种新的 token 类型，其携带：

- 底层持卡人身份（经由 VTS），
- 一个 agent attestation——哪个 agent 平台发出了该请求、其范围是什么、用户何时授权了它，
- 一个逐笔交易的风险信号，Visa 网络可据其标准欺诈模型进行评分，
- 对一个 AP2  mandate 的可选引用（Visa 已于 2025 公开承诺 AP2  互操作性）。

交易在标准的 Visa 通道上流转——经过发卡行、网络、收单行、商户——但每一跳都知道这是一笔 agent 交易，并可应用不同的规则（不同的 velocity 限额、不同的欺诈阈值、不同的 dispute 默认值）。

**公开的 AP2  合作。** Visa 是 [[agent-economy/ap2-overview|Google's AP2]] 发布中具名的合作伙伴之一，并且 Visa 承诺让 Trusted Agent Protocol 与 AP2  mandate *双向互操作*——来自某个 Google/Gemini agent 的 AP2  mandate 可在 Visa 网络内被验证为一个 Trusted Agent attestation，而一个 Visa 签发的 attestation 可在某个使用 AP2 的商户处满足一个 AP2  mandate。这是闭环卡轨道与开放协议轨道之间最具体的公开桥梁。

## Mechanism · Mastercard Agent Pay

Mastercard Agent Pay 在结构上相似，但侧重点不同。其形态：

**Tokenization 扩展。** 与 Visa 一样，Mastercard 将其既有的 tokenization 服务（Mastercard Digital Enablement Service, MDES——同一个为 Mastercard 上的 Apple Pay / Google Pay 提供动力的引擎）扩展出一种 agent 专用的 token 类型。该 token 可被签发供某个特定 agent 使用，带有 merchant-category-code 限制、逐笔交易的 velocity 上限以及一个有效期。如同一张一次性卡，但内置了密码学的 agent attestation。

**Agentic Tokens + Smart Data。** Mastercard 将该 token 与丰富的交易元数据（商户身份、在可得情况下的逐项描述符、与 dispute 相关的上下文）配对，使得由 agent 交易引发的争议能够以比一笔普通卡交易更多的上下文来裁断。其产品框定是：「agent 进行该交易的理由是交易记录的一部分。」

**发卡行侧控制。** 发卡银行通过在其既有的卡管理栈中添加 agent 专用的授权规则来集成 Agent Pay。用户可经由其银行 app 看到「以下 AI agent 已获授权在此卡上消费」，带有逐 agent 的范围以及一个 kill switch。

**截至 2026 中期尚无公开的 AP2  承诺。** Mastercard 所表明的姿态是，它将支持多种 agent-attestation 协议（若 AP2  成为主导则支持之；若否则支持替代方案），但它尚未做出与 Visa 同等规模的公开 AP2  合作公告。这是两家网络战略定位之间最显著的差异。

## Mechanism · 卡组织通道带给 agent 而开放协议所没有的东西

卡组织试点的战略逻辑在于：开放协议栈（[[agent-economy/x402-http-payment-overview|x402]] + USDC、[[agent-economy/erc-7715-overview|ERC-7715]] + 4337,  等）缺失了四项卡组织花了数十年才建成的机构性能力：

**Chargebacks 与 dispute resolution。** 当一个 agent 错误地交易时——错误的商户、错误的金额、被 prompt-injected、社会工程的受害者——用户需要一种追回资金的途径。卡拥有一套有 50 年历史的 chargeback 基础设施，带有编码化的 reason code、受监管的时限、发卡行侧对欺诈的责任以及商户侧的文档要求。链上栈则没有任何等价物。卡组织的卖点是：「让 agent 在卡上交易，你就继承了所有这一切。」

**发卡行侧欺诈责任转移。** 在既有的卡组织规则下，发卡行对某些类别的欺诈交易负责，商户则对另一些负责。Agent 交易制造了一个新问题——当某个 agent 被 prompt-injected 时，谁来负责？——而卡组织正利用这些试点来书写那个答案，对其有利、并以保护用户的方式。链上栈最终也需要回答同一个问题，而目前并未回答。

**网络侧风险评分。** Visa 与 Mastercard 让每一笔交易都经过已见过数百亿笔交易的机器学习欺诈模型。一笔 agent 交易经由同一套评分；网络可在授权环节实时拒绝可疑的 agent 活动，而无需牵涉商户或用户。在链上则没有等价的网络参与方；风险必须在用户的钱包或在商户处强制执行，而两者都只看到各自的那一片。

**Acceptance。** Visa 与 Mastercard 被数千万商户接受。USDC 如今被一个小得多的集合接受；增长是真实的，但差距很大。对于面向传统商户的 agent 交易（这在未来若干年是大部分可触达市场），卡组织是唯一真正能在规模上奏效的路径。

## Agent 专用场景

**场景 A —— agent 预订一家需要卡预授权（card hold）的餐厅。** 开放协议今天做不到这一点；几乎没有餐厅接受 USDC 作为 hold。卡组织模式：agent 调用 Trusted Agent / Agent Pay API，铸造一个限定于该 merchant ID 的一次性 token，带有 $200  上限、有效期 48  小时。商户对该 token 进行 hold；若用户到场，商户释放 hold 并执行实际扣款；若用户未到场，商户捕获该 hold。Dispute 机制为标准的卡组织机制。

**场景 B —— agent 订阅一项不接受 stablecoin 的流媒体服务。** 与上面相同的模式，但带有一个 recurring 授权。该 token 是 recurring 的、限定于该商户、带有用户的月度上限。若流媒体服务涨价，网络可在授权环节拒绝超出上限的交易，而 agent 无需知晓。

**场景 C —— agent 在某个被用户标记为受限的类别中交易。** 用户经由发卡行 app 配置「不得经由 agent 进行赌博、酒类、成人内容」。发卡行侧控制在授权环节强制执行这一点，无论 agent 自以为在做什么——拒绝发生在网络通道上。在开放协议栈中，若无商户侧配合，则不存在等价的强制执行。

**场景 D —— agent 交易事后被用户争议。** 用户说「我从未授权我的 agent 在此商户处花费 $500 」。卡组织的 chargeback 路径：用户向发卡行提起 dispute；发卡行调取 Trusted Agent / Agent Pay attestation、AP2  mandate（若曾附加）以及商户的文档；适用标准的 reason-code 裁断，以 agent attestation 作为一种新的证据类型。开放协议的等价物：并不存在——链上交易是终局的。某些 [[agent-economy/erc-7715-overview|ERC-7715]] 提案讨论了可选的 escrow / 可逆窗口，但没有任何东西被标准化。

**场景 E —— agent 进行带货币兑换的跨境交易。** 卡组织经由 Visa/Mastercard 跨境基础设施处理 FX，带有受监管的 FX 披露以及（在某些法域）受监管的最高 FX 加价。Agent 以 USD 调用 API，商户以当地货币收款，网络处理兑换并披露汇率。链上等价物：agent 经由某个 aggregator 进行 stablecoin 到 stablecoin 的兑换，但 FX 披露是 agent 平台的责任，且目前尚无监管基准。

**场景 F —— agent 在多个用户之间拆分一笔付款（团购、共享订阅）。** 卡组织模式：agent 针对多张卡签发多个 Trusted Agent token，每个带有用户各自的上限。网络针对 merchant of record 独立结算每一条腿。开放协议等价物在链上可行，但失去了逐腿的 dispute 路径。

## 监管框定 · 闭环网络规则 vs 开放协议的自由发挥

卡组织在一种开放协议栈确实不具备的监管框定下运作：

**网络规则是准监管性的。** Visa Core Rules、Mastercard Rules，以及它们所实施的 Reg E / PSD2  / 等价框架，创造了一个受监管的商业封套。每一个信誉良好的商户都已同意一套义务（dispute 响应时限、证据格式、禁止类别），网络以威胁取消 acceptance 来强制执行。将 agentic commerce 包装进这个封套即继承了这个封套；开放协议栈则必须从零构建任何等价的强制执行。

**发卡银行责任。** 卡由作为银行受监管的银行发行。银行发卡方有明确的义务（美国的 Reg E、欧盟的 PSD2 ）以既定方式处理未授权交易。被作为未授权而争议的 agent 交易继承了那些义务——*银行*是那个必须在既定时限内使用户得到补偿的受监管方。这相较于「你的钱包智能合约拥有钱包厂商所写的任何逻辑」是显著更强的消费者保护。

**跨境监管连续性。** 卡组织在双边与多边条约（欧盟的 interchange 监管、各地的 AML/CFT 规则）下运作，这些在各法域之间清晰地转译。Stablecoin agent 交易仍处于一种拼凑状态——欧盟的 MiCA、美国的 GENIUS Act 与 OCC 解释函、[[fintech/japan-stablecoin-regulatory-landscape|JFSA's three-layer framework in Japan]]，以及别处一幅混乱得多的图景。卡组织已经完成了跨境的法律工作。

**Agent-attestation 问题。** 两家网络都必须回答「一个 AI agent 证明某用户授权了一笔交易，在法律上意味着什么？」两者都尚未完全回答，但都在与监管机构（美国 OCC、欧盟委员会、英国 FCA、新加坡 MAS）合作，将该 attestation 定义为一个受认可的授权工件——介于一次 CVV 检查与一个 strong-customer-authentication 信号之间。这是开放协议栈最终也会需要的一块公法基础设施；卡组织正率先构建它。

## 竞争定位

**对 [[agent-economy/x402-http-payment-overview|x402]] —— 不同的成本 / 消费者保护权衡。** x402  每笔交易低于一美分、USDC 终局、无 chargeback、网络层欺诈防御薄弱。Visa Intelligent Commerce / Mastercard Agent Pay 每笔交易为数十个基点至约 3%、受 dispute 保护、在网络处经过欺诈评分。对于高价值或第一方商户的交易，卡组织在除成本以外的每个维度上都占优。对于 infra-to-infra 的 micropayment，x402  占主导，因为卡的经济性不支持低于一美元的交易。

**对 [[agent-economy/ap2-overview|AP2]] —— Visa 在桥接进入，Mastercard 在对冲。** Visa 公开的 AP2  合作是最强的信号，表明闭环与开放协议轨道将在*授权*层（AP2  mandate）互操作，即便它们在*结算*层仍然分离。Mastercard 的多协议姿态表明它预期会有多种 agent-attestation 协议，而非 AP2  主导。互操作性的故事是 agent-economy 架构师最重要的二阶问题。

**对 [[agent-economy/stripe-agent-toolkit-position|Stripe Agent Toolkit]] —— 在 Issuing 处重叠。** Stripe Issuing 已经经由 Toolkit 为 agent 铸造虚拟卡，骑行在同样的 Visa / Mastercard 通道之上。网络的 Intelligent Commerce / Agent Pay 层位于 Stripe Issuing *之下*——Stripe 是使用网络 agent-token 基础设施的发卡项目管理方。因此实际上，一笔经由 Stripe Agent Toolkit 的 Issuing 路径的 agent 交易，很可能在开发者看不见的情况下骑行在 Trusted Agent Protocol / Agent Pay 通道之上。Stripe 赢得分销；网络赢得基础设施经济性。

**对 [[agent-economy/privy-aws-agentcore-default-wallet|Privy / AWS AgentCore]] —— 正交的层。** Privy 是一个钱包；AgentCore 是一个 agent 宿主；卡组织是一条结算通道。它们相互组合：agent 在 AgentCore 上运行，在 Privy 中为链上持有资金，并使用一张 Stripe 签发的 Visa 用于链下。无直接竞争。

**对 JPMorgan Kinexys / 机构通道。** 机构通道（deposit token、[[fintech/institutional-stablecoin-deposit-token-thesis|deposit-token thesis]]、permissioned blockchain）对发起方是人还是 agent 是无关的，因为它们运作于一个小得多、经过远为严格审核的对手方集合之上。卡组织的 agentic 试点瞄准的是零售与 SMB，在那里对手方审核是不可能的，通道必须在网络处强制执行保护。不同的市场，不同的产品。

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
- Google AP2  spec repository (partner list includes Visa) — `github.com/google-agentic-commerce/AP2`.
- Visa Developer Center — `developer.visa.com`.
- Mastercard Developer — `developer.mastercard.com`.
