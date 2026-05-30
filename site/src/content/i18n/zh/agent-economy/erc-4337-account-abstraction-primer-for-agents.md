---
source: agent-economy/erc-4337-account-abstraction-primer-for-agents
source_hash: 1f7df376ed72cad4
lang: zh
status: machine
fidelity: ok
title: "ERC-4337 Account Abstraction 入门 · 面向 AI Agent"
translated_at: 2026-05-30T17:04:08.790Z
---

# ERC-4337 Account Abstraction 入门 · 面向 AI Agent

## TL;DR

ERC-4337 是应用层的 account-abstraction 标准,它让一个 Ethereum 地址由任意代码控制,而非由单一 secp256k1 密钥控制。对 AI agent 而言,这就是 *「必须把用户的 seed phrase 交给 agent」*(不安全、不可撤销)与 *「agent 是某 smart contract wallet 上的一个 signer,拥有受限定、可撤销、可代付的执行权」*([[agent-economy/erc-7715-overview|ERC-7715 wallet permissions]] 与 [[agent-economy/erc-7715-agent-payment-stack|four-layer agent payment stack]] 底下真正的构件)之间的区别。四个原语 — UserOperation、EntryPoint、Bundler、Paymaster — 各有一种 agent 视角的解读:UserOp 是 agent 的 *intent envelope(意图信封)*,EntryPoint 是界定 agent 能做什么的 *trust root(信任根)*,Bundler 是让 agent 无需持有 ETH 即可提交 tx 的 *exec relay(执行中继)*,Paymaster 是让平台(Stripe、AWS AgentCore、Vercel)替用户 agent 预算吃掉 gas 的 *gas sponsor(gas 赞助方)*。本入门覆盖该映射、多数 agent SDK 收敛到的 session-key 模式,以及当 signer 是软件时「谁是 signer of record(在册签名人)」的监管框定。

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy index]] as the agent-execution reading of [[systems/erc-4337-overview|ERC-4337]]. Read it against [[systems/erc-4337-userop-bundler-flow|the systems-side UserOp / Bundler flow]] for the generic protocol view, [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|the ERC-7702 agent primer]] for the EOA-side path, and [[agent-economy/erc-7715-overview|ERC-7715]] for the permission layer that sits directly on top. The broader protocol map is [[agent-economy/ai-agent-payment-protocols-overview|the seven-protocol overview]] and [[agent-economy/ai-agent-payment-protocols-seven-layers|the seven-layer table]]. For the broader system / regulatory boundary see [[systems/INDEX|systems index]].

## Mechanism · 四个原语,agent 侧解读

ERC-4337 引入一个与 Ethereum 标准 mempool 并行运行的 *alternative transaction pool(替代交易池)*。协议层未作任何修改;整个系统活在用户空间合约与一个链下中继网络里。各组件的 agent 侧解读:

**UserOperation 作为 agent 意图信封。** UserOp 是一个 struct,而非一笔 transaction。它携带 `sender`(agent 借以行动的 smart contract wallet)、`nonce`、`callData`(实际操作 — 例如 `USDC.transfer(merchant, amount)`)、三个 gas 字段、可选的 `paymasterAndData`,以及一个 `signature`。对 AI agent 而言,signature 字段是承重件:它不是用户的 root key。它是一个 *session signer* — 用户授权 agent 使用的密钥,常是持于 agent 可访问的某 TEE 中的 secp256r1 / WebAuthn / passkey 凭证。UserOp 是「agent 想做 X,这是它获许的证明」的在线形态。

**EntryPoint 作为信任根。** EntryPoint 是位于 `0x0000000071727De22E5E9d8BAf0edAc6f37da032` 的 singleton 合约。每个 UserOp 都必须经过它,而每个想接收 UserOp 的 smart contract wallet 都实现一个由 EntryPoint 调用的 `validateUserOp(...)` 回调。对 agent 而言,该回调就是 *policy enforcement point(策略执行点)*。SCW 在此检查「这个 session key 还有效吗?是否已超过 rate limit?这段 calldata 在许可的 scope 内吗?」— 即,对 agent 的合约性约束在共识层被执行之处。因此 [[security/bytecode-forensic-three-tier-verify|bytecode of the SCW]] 是 agent 受限定的执行面,而非 agent 的运行时 prompt。

**Bundler 作为 agent 的执行中继。** Bundler 是一个无许可的链下行动者,它从 alt-mempool 拉取 UserOp、模拟它们,并把 N 个打包进单笔 `EntryPoint.handleOps(...)` 交易。Bundler 向网络支付 ETH gas,并由 SCW 或其 Paymaster 偿付(以 ETH 或 ERC-20)。这对 agent 要紧,因为 *agent 从不必持有 ETH*。用户出资的钱包可以是一个纯 USDC 计价的 SCW;Bundler 才是把 agent 意图转换为实际链上交易的实体。完整的机械拆解见 [[systems/erc-4337-userop-bundler-flow|the UserOp / Bundler flow page]]。

**Paymaster 作为平台侧 gas 赞助方。** Paymaster 是一个可选合约,它对「我将为这个 UserOp 支付 gas」签字背书。在 agent-economy 解读中,Paymaster 几乎总是 *平台*,而非用户 — Stripe 的 Privy 栈支付 gas,好让一个 [[agent-economy/privy-aws-agentcore-default-wallet|AWS AgentCore]] agent 能调用一个 [[agent-economy/x402-http-payment-overview|x402-priced API]],而无需用户的钱包持有原生 ETH。Paymaster 也能接受 ERC-20 (USDC)作为 gas,这正是 Coinbase Smart Wallet、[[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] 与 Privy 当今交付「无 ETH agent 钱包」的方式。

第五个可选原语是 Aggregator — 一个能一次批量验证许多签名(BLS 或类似)的合约。对全部用同一签名方案签名的 agent fleet 而言,这很有意思;但实际中单 agent 的 UserOp 仍主导 v0.7 流量。

回到 agent stack 的映射值得以紧凑形式重述:用户拥有 SCW;agent 的权限是它在 `validateUserOp` 的 scope 检查内控制的 session signer;agent 从不必持有 ETH,因为 Paymaster 持有;agent 也从不必运营节点,因为 Bundler 运营。全部四个 4337 原语对应 agent 运营模型中一条独立的职责线 — 钱包、signer、gas、传输。此层之上的一切(ERC-7715 permission grant、AP2 mandate、x402 402 握手)都在把面向用户的语义标准化;此层的一切都在让执行真正在 Ethereum 上发生。

## Mechanism · validateUserOp 生命周期,agent 侧解读

值得放慢节奏看看单个 agent UserOp 期间 SCW 内部发生了什么,因为整个策略边界实际就活在那里。

当 EntryPoint 从 Bundler 收到 `handleOps(ops[], beneficiary)` 时,对每个 UserOp,在任何 agent 控制的代码执行之前,它按序做以下事:

1. **Account creation** — 若 `sender` 尚无代码(一个「counterfactual」SCW),EntryPoint 经由 UserOp `initCode` 字段中的 factory 提示部署它。对 agent 流程,这就是「给 agent 一个钱包」便宜的原因:钱包在 agent 第一个 UserOp 触发它之前并不存在。
2. **`validateUserOp(userOp, userOpHash, missingAccountFunds)`** — EntryPoint 调入 SCW。SCW 返回一个 `validationData` 打包整数,编码 (a) 签名是否有效、(b) 一个 `validAfter` / `validUntil` 时间窗口,以及 (c) 可选的 aggregator 地址。这是 SCW 执行「这个 UserOp 是我被授权执行的、由我认可的 signer 签的、在 scope 内、且在用户许可的时间窗口内吗?」之处。对一个承载 agent 的 SCW,*全部* 策略都活在这里:session-key 模块的 scope 检查、per-period 支出上限、merchant 白名单、calldata selector 限制。
3. **`validatePaymasterUserOp(...)`** — 若存在 Paymaster,EntryPoint 调入它做等价的门控:「我,Paymaster,同意为这个特定 UserOp 支付 gas 吗?」平台 Paymaster 用此 hook 执行 per-user / per-agent rate limit,并拒绝未通过平台自身 scope 策略的 UserOp。
4. **Execution** — 仅在两个验证都成功后,EntryPoint 才以 `callData` 调用 SCW 的执行路径。按构造,此步可达的任何东西都是 SCW 在验证期间已证实过的。agent 的 prompt 时决策从不直接进入这条分支;它们仅经由已发生的验证进入。
5. **Gas reconciliation** — EntryPoint 就实际用掉的 gas 从 SCW(或 Paymaster)扣款并支付 Bundler。

对 agent 设计的架构要点:任何关于 agent 行为的 *被执行* 不变量都必须能在 `validateUserOp` 内表达。任何仅在 agent 的 prompt 或 SDK 中检查的东西都是建议性的,而非约束性的。「agent 可能违反此项」与「agent 无法违反此项」之间的界线,就是第 2步的那条线。

## Mechanism · session key 作为经典 agent 模式

session key 模式是多数 embedded-wallet 平台([[agent-economy/privy-embedded-wallet-overview|Privy]]、[[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]、ZeroDev、Pimlico、Alchemy)就 agent 执行所收敛到的。其形态:

1. SCW 由用户控制的一个 *root key* 拥有 — 其设备上的 passkey、一份 Privy MPC share、一个硬件钱包,等等。root key 在 onboarding 之后很少使用。
2. SCW 安装了一个 *session key 模块*,把第二个公钥 — agent 的 signer — 列入白名单,带一个受限定的 scope(例如「可对任意 `*.vercel.com` x402 收款方调用 `USDC.transfer`,每日至多 $5,有效 30 天」)。
3. agent 把对应私钥持于一个加固环境中(AWS Nitro Enclave、Apple Secure Enclave、一个 Cloudflare Workers KV slot、一个 Bedrock AgentCore signer 服务)。
4. 由 session key 签名的 UserOp 在 `validateUserOp` 内针对该模块的 scope 规则验证,而非针对 root owner。
5. root owner 可随时以单笔链上操作撤销 session key — 该操作本身通常也是一个 UserOp。

这正是 [[agent-economy/erc-7715-overview|ERC-7715]] 在上一层所标准化的:不再让每个钱包发明自己的 session-key 模块 ABI,`wallet_grantPermissions` 让 dapp 请求一个标准 scope,钱包则渲染出正确的模块调用。底层它仍是一个带 session-key 模块、在 `validateUserOp` 内执行 scope 的 4337 SCW。

session-key 抽象正是让「一个 AI agent 拥有一个钱包」成为一句合理说法的 *那个* 设计,因为该抽象划出一条清晰的法律/运营边界:用户拥有钱包,agent 有一条牵绳,而牵绳在共识层被执行,而非在某 prompt 边界或某 SDK 护栏处。

## Mechanism · gas 赞助作为 agent-economy 的解锁

没有 Paymaster,AI agent 会卡在人类用户在 4337之前所遇的同一 UX 问题:钱包必须持有原生 gas token,这意味着给它充值、盯着它的余额、在它耗尽时补充。对一个在一个工作日内调用 200 个不同 API 的 agent,这在运营上极不友好。

agent-economy 的化解是 **平台付 gas**:

- 平台(Stripe、AWS AgentCore、Vercel、Cloudflare)运营自己的 Paymaster 合约,在相关链上以 ETH 预充值它,并为每个源自其托管 agent 的 UserOp 签 `paymasterAndData`。
- 平台收回成本的方式,要么是就用户的 billing plan 计量它(「你本月用了 3,400 个被赞助的 UserOp」),要么是把 gas 当作赢得钱包集成的引流亏损品。
- 对纯 crypto-native 流程,Paymaster 可要求以该调用的计价币种偿付 — 例如取走 agent 刚转出的 USDC 的 0.5% 以覆盖 gas。

这正是让 [[agent-economy/erc-7715-agent-payment-stack|four-layer stack]] 真正端到端跑起来的机制:一个 Vercel agent 收到一个 402, ,agent 的 SCW 签一个转 $0.50 USDC 的 UserOp,Privy 管理的 Bundler 拾取它,Stripe 的 Paymaster 覆盖 gas,EntryPoint 验证并执行 — 全程约两秒,且从无 ETH 经过 agent 之手。

## Agent 专属场景

**场景 A — 在每日上限内的自主 API 支出。** 用户授权一个 Claude agent 每日在开发者 API 上至多支出 $20。实现:一个带 session-key 模块的 4337 SCW,该模块把 agent 的 signer 列入白名单,并在 `validateUserOp` 内执行一个滚动窗口支出上限。每笔 x402 支付是一个 UserOp;模块在验证签名之前检查上限。当 agent 试图超支时,`validateUserOp` revert,Bundler 把该 UserOp 从其 mempool 丢弃。不可能发生源自 prompt-injection 的超支,因为牵绳在合约层。

**场景 B — 委托给一支 sub-agent fleet。** 一个主 agent(「planner」)把子任务委托给 N 个 worker agent。模式:planner 的 SCW 安装 N 个 session-key 模块,每个 worker 一个,各带一个紧的 per-call 上限。EntryPoint 针对该 worker 特定的模块验证每个 worker 的 UserOp。审计很直接:每个 worker 的支出都在链上、归于其自己的 signer,可从 EntryPoint events 重建。这在形态上更接近 AWS IAM role-assumption,而非传统支付授权。

**场景 C — 经由 Paymaster 的被赞助 API 试用。** 一个 merchant 想让 agent 免费试用其 API,每 agent 每月至多 N 次调用。merchant 运营一个 Paymaster,赞助那些 `callData` 指向 merchant 的 [[agent-economy/x402-http-payment-overview|x402 receiver contract]] 且 `sender` 被见过少于 N 次的 UserOp。agent SCW 甚至无需为这些调用持有 USDC — Paymaster 付 gas,merchant 付给自己。这是经由 OAuth 签发的 free-tier API key 的链上等价物。

**场景 D — 为某 agent 稳定币浮存以 USDC 付 gas。** agent SCW 仅持有 [[fintech/usd-stablecoin-interchange|USDC]]。Pimlico / Alchemy 的无许可 Paymaster 按一个公示费率接受 USDC 作为 gas。每个 UserOp 以 USDC 付 gas;无 ETH 余额管理。这是多数 pilot([[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore]]、Coinbase Smart Wallet agent demo)所采纳的运营模式。

**场景 E — agent 作为被动用户的 relayer。** 用户把 $500 USDC 放入一个 SCW 并下线;agent 按计划运行交易 / API 调用 / 订阅充值。因为 agent 签 UserOp 且 Bundler 自动拾取它们,用户无需为任何单笔交易在场。用户的 root key 仅在 scope 需要扩宽或撤销时再现。

**场景 F — agent 在一个 UserOp 内批处理 per-API 微支付。** 一个执行研究任务的 agent 在单次任务执行内从十二个不同 x402-定价端点取数据。与其提交十二个 UserOp、把 per-UserOp 验证开销付十二次,agent 的 SCW 在其执行分支内暴露一个 `multicall(operations[])` 入口。agent 构造一个其 `callData` 为十二个 `USDC.transfer` 调用之 `multicall` 的 UserOp;SCW 验证一次、付 gas 一次、执行十二次。这是标准 SCW 批处理特性的 agent-economy 解读,也是 4337 在 agent 量下把 per-operation gas 成本保持在亚美分的 *那个* 机制。

**场景 G — agent 经由 x402 + 4337 为某带外链下动作付费。** agent 调用一个付费 API;API 返回带 USDC 支付指示的 `HTTP 402`。agent 构造一个把所需 USDC 转给 API 收款方的 UserOp,用其 session key 签名,提交给 Bundler,并等待链上纳入。API 经由 [[agent-economy/x402-http-payment-overview|the x402 facilitator]] 验证支付,并在一次重试上返回数据。在 Base 上配一个快 facilitator 的端到端延迟远低于一秒;agent 无需持有 ETH;用户的月度上限在验证时被执行。这是 2026 生产栈中最具代表性的单一 agent 支付流。

## 监管框定 · 谁是 signer of record?

4337 架构有一个微妙的监管后果:EntryPoint 合约在每个 UserOp 上看见三个可能各异的身份 — *root owner*(控制 SCW 的用户)、*session signer*(签了这个特定 UserOp 的密钥),以及 *Bundler / Paymaster*(把它放上链并为之付费的实体)。多数法域既有的支付与证券法都假定「一个人、一个签名、一笔交易」,并未被写成能干净地映射到这个三行动者模型上。

embedded-wallet operator 间当前的共识是,就 KYC/AML 目的把 *root owner* 视为 signer of record,并把 session signer 视为一个内部授权制品,类比于一个 OAuth scope token。这与 AP2 的 mandate 构造把用户视为权限来源、把 agent 视为受委托执行者的方式相镜像(参见 [[agent-economy/ap2-overview|AP2 overview]])。它也与 OCC 的解释函及 EU 的 MiCA 处理托管 vs 自托管流程的方式一致 — 它们在乎谁能授权资金的无约束移动,而非谁签了一个受限定的子动作。

未决问题是:session key 误交易时的 chargeback / 纠纷机制([[agent-economy/visa-mastercard-agentic-commerce-pilots|the card networks address this differently]])、当 Paymaster 是平台而非用户时的责任分配(赞助 gas 会否产生代理关系?),以及跨链 identity 问题 — 链 A 上的一个 Privy MPC root owner 与链 B 上的一个 Coinbase CDP root owner 是否为同一法律自然人。

更深层的悬而未决议题是,session-signer 的鉴证本身会否成为一个受监管的制品。AP2  mandate 被明确设计为监管者或审计者可检视的 verifiable credential。4337 session key 则不是 — 它们是字节码执行的授权 token,没有「此 scope 对应此用户授权」的规范 schema。可能的落点是,更高层(AP2, ERC-7715)承载受监管的鉴证,而 4337 保持为纯执行;该模式将与「OAuth scope 对用户可见、而其下的 TLS session key 是运营性且不可见」的方式相镜像。若监管者反而试图直接伸进 session-key 层,embedded-wallet 栈的合规模型会变得显著更难。

## 竞争位置

ERC-4337 是基质,而非产品。竞争版图在其上一层:

- **钱包 operator**([[agent-economy/privy-embedded-wallet-overview|Privy]]、[[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]、Alchemy、ZeroDev)以 UX、Bundler 可靠性与 Paymaster 经济竞争,而底层全在运行 4337 。[[agent-economy/embedded-wallet-network-effects-moat|The integrator moat]] 才是真正的价值捕获。
- **Bundler operator**(Pimlico、Stackup、Alchemy、Etherspot)是一个薄而集中的市场 — 三到五家处理大部分流量。这是最常被引用的中心化风险;4337 上的 agent-economy 负载只会使之更尖锐。
- **Paymaster operator** 当今与 Bundler operator 大量重叠,外加平台自有的 Paymaster(Stripe 经由 Privy、AWS 经由 AgentCore Payments 模块、Cloudflare 为 x402 收款方)。
- **更高层协议**([[agent-economy/erc-7715-overview|ERC-7715]]、[[agent-economy/ap2-overview|AP2]]、[[agent-economy/x402-http-payment-overview|x402]])把 4337 视为商品化基础设施。它们规定面向用户的语义;4337 规定执行。

最重要的战略事实:4337 *并非* 通往 agent 友好账户的唯一路径。[[systems/erc-7702-overview|ERC-7702]](自 Pectra 起在主网上线,2025-05)以一条不同的路线把 EOA 带到同一处。两者共存且常被一并使用 — 许多生产栈如今交付「要么 4337 SCW,要么 7702-委托的 EOA」作为用户选择,并带相同的下游 agent-execution 语义。详细的分野在 [[systems/erc-7702-vs-erc-4337|the 7702 vs 4337 comparison]],而 7702 路径的 agent 解读是 [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|the ERC-7702 agent primer]]。

## Related

- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/erc-7715-overview|ERC-7715 · Wallet Permissions overview]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 + agent payment stack]]
- [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 EOA delegation primer for agents]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|Seven-protocol layer table]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet overview]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/embedded-wallet-network-effects-moat|Embedded wallet network effects moat]]
- [[systems/erc-4337-overview|ERC-4337 systems overview]]
- [[systems/erc-4337-userop-bundler-flow|UserOp / Bundler flow]]
- [[systems/erc-7702-vs-erc-4337|ERC-7702 vs ERC-4337]]
- [[systems/INDEX|systems index]]

## Sources

- ERC-4337 EIP — `eips.ethereum.org/EIPS/eip-4337`.
- ERC-4337 reference site — `erc4337.io`.
- "ERC-4337: Account Abstraction Without Ethereum Protocol Changes" — original ethresear.ch proposal thread.
- Privy embedded-wallet docs — `docs.privy.io`.
- Coinbase CDP developer-platform docs — `docs.cdp.coinbase.com`.
