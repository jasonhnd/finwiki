---
source: agent-economy/stripe-agent-toolkit-position
source_hash: 634d3c372156dde7
lang: zh
status: machine
fidelity: ok
title: "Stripe Agent Toolkit · Stripe 的第一方 agent SDK 及其相对 x402 / Privy / AWS AgentCore 的定位"
translated_at: 2026-05-30T17:31:02.647Z
---

# Stripe Agent Toolkit · Stripe 的第一方 agent SDK 及其相对 x402 / Privy / AWS AgentCore 的定位

## TL;DR

Stripe Agent Toolkit 于 2024 年末推出并在 2025, 年间显著扩展，是 Stripe 的第一方 SDK，让 AI agent 经由现有 Stripe 轨道交易 —— Issuing 卡、ACH、电汇、SEPA、payout、billing 和 Connect —— 而无需发明新的链原生结算层。对照其他 agent 支付面来读，它同时占据两个战略位置：它是 [[agent-economy/x402-http-payment-overview|x402]] 的*传输层竞争者*（Stripe 原生 HTTP/SDK 调用 vs HTTP 402 + USDC），也是 [[agent-economy/privy-embedded-wallet-overview|Privy]]（Stripe 已拥有的钱包）和 [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]（在 [[agent-economy/privy-aws-agentcore-default-wallet|AWS AgentCore]] 默认钱包配对中由它兜底）的*补充*。监管框架是承重的差异化因素：Stripe 是注册 MSB，在大多数美国州持有 money-transmitter 牌照，在欧盟是 EMI，在世界其余大部分地区是 PSP。这一姿态让 agent 能以与普通 Stripe 商户相同的合规开销经由 Stripe 发行虚拟卡、ACH 拉款、电汇和退款 —— 即*远少于从头构建任何此类能力*。代价是被锁定的经济：agent 经由 Toolkit 移动的每一美元都向 Stripe 支付标准抽成，且 agent 的交易图谱对 Stripe 完全可见。

## Wiki route

本条目归属于 [[agent-economy/INDEX|agent-economy index]]，作为 agent 经济收款与付款层的 Stripe 侧解读。请对照 [[agent-economy/x402-http-payment-overview|x402]] 了解与 Stripe SDK 传输竞争的开放协议 HTTP 传输，对照 [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore]] 了解 Stripe 经由 Privy 已经赢下的钱包配对，对照 [[agent-economy/ai-company-payment-landscape|the AI-company payment landscape]] 了解主要 AI 实验室已经如何经由 Stripe 收款，对照 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|the Stripe Trojan-horse five-layer thesis]] 了解这个 Toolkit 所处的长弧。更广泛的系统 / 监管边界见 [[fintech/INDEX|fintech index]] 和 [[agent-economy/ai-agent-payment-protocols-overview|the seven-protocol overview]]。

## Mechanism · Toolkit 究竟是什么

Stripe Agent Toolkit 以一个开源 SDK（Python 和 TypeScript）外加一组让 AI agent 框架将 Stripe API 作为工具调用的轻量约定的形式发布。其形态：

- **Stripe REST API 的工具包装器。** 面向流行 agent 框架（LangChain、Vercel AI SDK、OpenAI Assistants API、Anthropic 的 MCP、CrewAI）的适配器，使 agent 能将 Stripe 原语 —— `payment_intent.create`、`customer.create`、`invoice.create`、`payout.create`、`issuing.card.create` 等 —— 作为带类型的工具调用来调用。
- **受限密钥集成。** Toolkit 的惯用姿态是让 agent 以*受限* Stripe API 密钥运行 —— Stripe 现有的细粒度密钥范围限定机制 —— 使 agent 只能执行用户（或商户）已明确启用的操作。这是 [[agent-economy/erc-7715-overview|ERC-7715]] 限定范围权限的 Stripe-API 对应物，只不过它存在于 Stripe 的 IAM 面上而非链上。
- **面向 agent 出账消费的 Issuing 原语。** Toolkit 将 `issuing.card.create` 和 `issuing.cardholder.create` 暴露为 agent 可调用工具，使 agent 能铸造一张限定于单个商户、单笔金额、单个时间窗口的虚拟卡 —— 然后用该卡向一个本身只接受卡的外部服务付款。这是从"agent 拥有 Stripe 余额"到"agent 能向一个不讲 Stripe 的现实世界商户付款"的桥梁。
- **面向 agent 付款的 Connect + payout 原语。** 对于需要发放资金的 agent —— 一个向卖家付款的市场 agent，一个向承包商付款的薪资 agent —— Toolkit 暴露 Stripe Connect 的 `transfer.create` 和 `payout.create` 流程，根据法域提供对 ACH、电汇、SEPA、Faster Payments 和即时付款轨道的访问。
- **Webhook 加固约定。** 由于 agent 可被 webhook 事件触发执行不可逆操作，Toolkit 将幂等键和签名验证助手作为一等关注点而非"高级主题"来发布。

Toolkit 所做的架构选择是将 Stripe 的*现有* API 面暴露为 agent 工具，而非发明一个新的 agent 特定支付原语。这与 [[agent-economy/x402-http-payment-overview|x402]] 的设计选择（发明了一个新的 HTTP 级握手）相反，也与 [[agent-economy/ap2-overview|AP2]] 的 mandate 构造（发明了一个新的授权凭证）相反。

## Mechanism · 它如何与 Privy 及 Stripe stablecoin 栈组合

Stripe 的 2024–2025 收购（[[agent-economy/privy-embedded-wallet-overview|Privy]] 用于 embedded wallet 层，Bridge 用于 stablecoin 发行与编排，以及 Tempo L1 努力）使 Agent Toolkit 成为一个大得多的栈的面向应用的边缘。其组合：

- **Stripe Agent Toolkit** 位于顶层。
- **Stripe API 网关**在 Toolkit 调用与底层轨道之间居中调停。
- **Privy** 为任何需要 agent 持有自托管地址的流程提供 embedded-wallet 层（Web3 付款、链上结算、agent 间加密转账）。
- **Bridge** 提供 stablecoin 编排层 —— USDC / USDB / EURC 等跨链以及向链下银行轨道的路由 —— 把链上侧变成 Stripe 现有商户可以接受的东西。
- **Stripe Issuing** 与钱包侧并行，在 agent 需要向非 Stripe 商户付款时提供卡网络出口。
- **Stripe Treasury**（在持牌处）提供类银行账户的原语以持有 agent 余额。

捆绑包的经济逻辑：持有 Stripe 余额的 agent 可向 Stripe 路由到的任何商户付款（即世界上大多数在线商户），可铸造虚拟卡向任何接受 Visa/Mastercard 的商户付款（即其余大部分），并可以 stablecoin 向任何链上对手方结算（即 agent 经济原生情形）。一个 IAM 面，一种合规姿态，三个结算域。这是 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|the five-layer Trojan-horse thesis]] 的可运作形式 —— Toolkit 是把该捆绑包暴露给 agent 的层。

## Agent 特定场景

**场景 A —— agent 按任务发行虚拟卡。** 一个自主研究 agent 需要订阅一个有偿数据源一个月，然后取消。模式：agent 用 `spending_controls = { spending_limits: [{ amount: 5000, interval: "monthly" }], allowed_categories: ["computer_data_processing"] }` 加一个明确的 `merchant` 白名单调用 `issuing.card.create`。卡被即时供给且可用。一个月后，agent 取消该卡。Stripe 的授权时控制在卡网络轨道上强制执行范围，而非在 prompt 层 —— 超额花费尝试在刷卡时被拒绝。

**场景 B —— agent 为客户授权的发票拉取 ACH。** 一个记账 agent 收集客户的授权（经由 Stripe 的 `payment_method` 流程，配验证过的小额存款或即时 ACH 验证），然后排定 `payment_intent.create` 调用以按节奏拉取客户的银行账户。客户的 ACH 授权是法律锚点；agent 的受限 API 密钥是运营锚点。争议经由 ACH 的标准退回码机制路由。

**场景 C —— agent 经由 Connect 向市场卖家付款。** 一个将进账收入分配给卖家的市场 agent 为卖家的连接账户调用 `transfer.create`，然后调用 `payout.create` 按 Stripe 标准付款时间表把资金推送到卖家的外部银行账户。跨境分账经由 Stripe Cross-Border Payouts；agent 无需知晓 SEPA / Faster Payments / SWIFT 细节，只需知道目标币种。

**场景 D —— agent 经由 Bridge 以 USDC 结算一张 B2B 发票。** agent 的对手方本身是一个非 Stripe 栈上、只接受 USDC 的 agent。Toolkit 的 Stripe + Bridge 集成让 agent 从其 Stripe 余额为一笔 USDC 转账注资，在 Base 或 Ethereum 主网结算，并让 Stripe 把这笔出账转账记录在与常规 Stripe 支付相同的账本中。这是 [[fintech/usd-stablecoin-interchange|USD stablecoin interchange]] 经由 Stripe 的会计进行组合。

**场景 E —— 经由 Stripe Connect 的 agent 间结算。** 两个来自不同平台、都经由 Stripe Connect 接入的 agent 可通过在其连接账户之间 `transfer.create` 来结算一项 B2B 义务，直到付款前不涉及任何银行轨道。这是用卡网络语言表达的闭环情形，[[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa and Mastercard are building toward separately]]。

## 监管框架 · Stripe 作为 MSB / EMI / PSP

Stripe Agent Toolkit 最大的非技术差异化因素是监管。Stripe 以一种开放协议栈 —— x402, AP2, Privy 自身 —— 所不具备的方式获得移动资金的牌照。具体而言：

- **美国。** Stripe Payments Company 是在 FinCEN 注册的 Money Services Business，并在基本上每个有此要求的州持有 money-transmitter 牌照。Stripe Issuing 在与发卡银行（Celtic Bank、Cross River 等，视产品而定）的合作下作为发卡项目管理方运营。对于一个 agent 流程，这意味着*Stripe* 是受监管的资金移动方 —— 而非商户、非 agent 平台、非用户。
- **欧盟。** Stripe 持有 Electronic Money Institution 牌照（在爱尔兰），可在 EEA 通行。欧盟中 agent 发行的卡运行在相同的 EMI 框架上。
- **英国 / 新加坡 / 澳大利亚 / 日本。** Stripe 持有当地对等牌照（FCA EMI、MAS Major Payment Institution 牌照、ASIC AFSL、日本资金移动业 / 视产品而定与持牌 PSP 的合作）。

对一个 agent 集成的实际后果：把 Agent Toolkit 放进项目的开发者继承了 Stripe 的受监管姿态。开发者无需注册为 MSB，无需逐州 money-transmitter 牌照，无需成为发卡项目管理方。agent 之所以能铸卡、拉 ACH、电汇，是因为 Stripe —— 那个持牌实体 —— 在幕后做实际的移动。

代价是标准的那种：受监管实体看到一切。从数据可得性的角度看，每个 agent 经由 Toolkit 的交易图谱对 Stripe 完全可观测，并可应监管要求上报。对于 [[agent-economy/x402-http-payment-overview|x402]] 式的链上流程，可观测性在结构上不同（链上假名，无中心上报方），这正是某些 agent 平台把一些流程路由到那里、另一些经由 Stripe 的原因。

另一个监管微妙之处：Stripe 的牌照把*用户*（或*商户*，视流程而定）附为主体。agent 被视作一项运营集成，而非其自身的受监管对手方。这通过干脆不把 agent 当作法律行为体来回避了未决的 [[agent-economy/agent-actorship-debate|agent-actorship]] 问题 —— 用户持有 Stripe 账户，agent 仅用用户的受限密钥调用 API 端点。

## 竞争定位

对照 agent 支付格局的其余部分：

**vs [[agent-economy/x402-http-payment-overview|x402]]（Coinbase / Cloudflare / AWS）—— 不同传输，重叠用例。** x402 是 HTTP 原生、USDC 默认、数秒内结算、无 Stripe 抽成，但要求商户接受 stablecoin 并集成 402 握手。Stripe Agent Toolkit 是 SDK 原生、多轨道，要求商户接受 Stripe（大多数在线商户已经如此）并支付标准 Stripe 费用。对于 agent 间基础设施调用，两者确实竞争；对于 agent 到传统商户的流程，Stripe 默认获胜，因为商户已经是 Stripe 客户。

**vs [[agent-economy/ap2-overview|AP2]]（Google）—— 不同层，互补。** AP2 标准化 *mandate*（声明"此 agent 被授权代表此用户花费"的凭证）。Stripe Agent Toolkit 并不真正讲 mandate；它讲"agent 拥有一个受限 API 密钥"。随着时间推移两者可以组合 —— AP2 mandate 验证用户的授权，Stripe Toolkit 移动资金 —— 但截至目前 AP2 结算适配器列表仅经由 Connect 包含 Stripe 兼容流程，而非 Toolkit 原生。

**vs [[agent-economy/privy-embedded-wallet-overview|Privy]] —— Stripe 拥有 Privy，所以它们配对。** Privy 是 embedded-wallet 基底；当 agent 把 Stripe 账本用作记录系统时，Toolkit 是位于其上的 SDK。对于需要保持在链上的 agent 流程（向非 Stripe 对手方以 USDC 结算），agent 直接使用 Privy；对于触及法币轨道（卡、ACH、电汇）的流程，则经由 Toolkit。该组合是 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Trojan-horse strategy]] 的可运作化。

**vs [[agent-economy/privy-aws-agentcore-default-wallet|AWS AgentCore]]（AWS Bedrock Payments）—— AWS 经由 Privy + Coinbase CDP 路由。** AgentCore 的默认钱包选择意味着许多 AWS 托管的 agent 将默认持有一个 Privy 钱包 —— 而 Privy 就是 Stripe。Toolkit 成为那些 agent 触及法币轨道的自然方式。AWS 在支付 API 选择上结构性中立；Stripe 结构性非中立（其自有 SDK）。竞争在*默认*层面，而非*能力*层面。

**vs Coinbase CDP / Issuing —— 在卡发行层重叠。** [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] 也提供 agent 可调用的卡发行（经由 Coinbase 自有卡项目），但 Stripe Issuing 具有深得多的商户接受度和更成熟的商户类别码控制。CDP 在加密原生流程上获胜；Stripe Issuing 在现实世界商业出口上获胜。

**vs 传统 MSB（Wise、Adyen、PayPal）—— Stripe 率先拿出了一个真正的 agent SDK。** Adyen 和 Wise 有 API，但截至目前都未发布对等的第一方 agent toolkit。PayPal/Braintree 做了一些公告，但截至 2026年中没有对等的开源 SDK。Stripe 在此的先发优势意义重大，因为 AI 实验室本身已经在 Stripe 上运行其消费者计费（OpenAI、Anthropic 和大多数主要 LLM 提供方经由 Stripe 路由 —— 见 [[agent-economy/ai-company-payment-landscape|the AI-company payment landscape]]），因此 Toolkit 自带一个内置的采用飞轮。

## Related

- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|Seven-protocol layer table]]
- [[agent-economy/ai-agent-payment-protocols-commoditization|Agent payment protocols commoditization]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 Cloudflare / AWS edge integration]]
- [[agent-economy/ap2-overview|AP2 overview]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet overview]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore default wallet]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/embedded-wallet-network-effects-moat|Embedded wallet network effects moat]]
- [[agent-economy/ai-company-payment-landscape|AI company payment landscape]]
- [[agent-economy/erc-7715-overview|ERC-7715 wallet permissions]]
- [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer for agents]]
- [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 primer for agents]]
- [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]]

## Sources

- Stripe corporate site — `stripe.com`.
- Stripe blog, "Adding payments to your agentic workflows" — `stripe.com/blog`.
- `github.com/stripe/agent-toolkit` — open-source Agent Toolkit repository (Python + TypeScript).
- Stripe Issuing documentation — `docs.stripe.com/issuing`.
- Stripe payment methods integration documentation — `docs.stripe.com/payments/payment-methods`.
