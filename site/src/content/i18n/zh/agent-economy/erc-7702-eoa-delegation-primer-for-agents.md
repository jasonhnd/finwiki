---
source: agent-economy/erc-7702-eoa-delegation-primer-for-agents
source_hash: d2c5cd5f5212c9cc
lang: zh
status: machine
fidelity: ok
title: "ERC-7702 EOA Delegation 入门 · 面向 AI Agent"
translated_at: 2026-05-30T17:04:08.792Z
---

# ERC-7702 EOA Delegation 入门 · 面向 AI Agent

## TL;DR

ERC-7702 (自 Pectra 起上线,2025-05)让一个既有的 externally-owned account 暂时 — 或持久地 — 表现得如同一个 smart contract wallet,而不改变其地址。对 AI agent 而言这很要紧,因为活在 EOA(MetaMask、Rabby、硬件钱包、交易所提现地址)中的那 ~90% 的 Ethereum 价值此前对 agent stack 不可达:任何 agent 集成都要求用户先迁移到一个全新的 SCW 地址,而这对任何拥有 ENS、NFT 或活跃 DeFi 头寸的人都是不可行的。有了 7702 ,那个多年来一直是用户身份的同一地址便可安装一个指向某合约的 *delegation designator(委托指示符)* — 通常是一个 session-key-aware 的钱包实现 — 自此往后,一个 agent 便能在该地址上持有一个受限定的 signer,并带与 [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 SCW]] 所能提供的相同的 `validateUserOp` 式策略执行。本入门覆盖 `SET_CODE_TX` 机制、其上的 agent 侧 session-key 模式、它如何与 [[agent-economy/erc-7715-overview|ERC-7715]] 及 [[agent-economy/erc-7715-agent-payment-stack|four-layer agent payment stack]] 组合,以及相较纯 4337 路径显著不同的安全态势。

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy index]] as the agent-execution reading of [[systems/erc-7702-overview|ERC-7702]]. Read it against [[agent-economy/erc-4337-account-abstraction-primer-for-agents|the ERC-4337 agent primer]] for the SCW-side path, [[systems/erc-7702-vs-erc-4337|the systems-side comparison]] for the generic protocol view, and [[agent-economy/erc-7715-overview|ERC-7715]] for the permission layer that rides on top. For the broader protocol map, [[agent-economy/ai-agent-payment-protocols-overview|the seven-protocol overview]] and [[agent-economy/ai-agent-payment-protocols-seven-layers|the seven-layer table]]. For the broader system / regulatory boundary, [[systems/INDEX|systems index]].

## Mechanism · `SET_CODE_TX` 与 delegation designator

EIP-7702 在 Pectra 硬分叉时向协议层添加了一个新的 Ethereum transaction type(`0x04`,「set code」)。其形态:

- 用户签一个 `delegationDesignator` — 一个授权元组 `(chainId, contractAddress, nonce)` 加上对它的一个 secp256k1 签名。该签名对象说「此 EOA 授权合约 X 被安装为其代码,在链 Y 上,在 nonce N」。
- 一个包含该签名委托的 `SET_CODE_TX` 被广播(由用户或任意 relayer — relayer 付 gas)。一旦被打包,EVM 便把该 EOA 的代码视为一个薄 trampoline,对每个后续调用 `DELEGATECALL` 进指定合约。
- 该指定持续存在,直到用户签一个新的(指向另一个合约,或 `address(0)` 以移除)。EIP 本身未内建过期 — 持久是默认,撤销是一个刻意的链上动作。

关键的 EVM 语义:EOA 的地址、余额、nonce 与历史均不变。那个持有用户 ENS / NFT / Aave 头寸已五年的地址保持为同一地址 — 仅其可执行代码改变。从任何合约或 indexer 的视角看,对该地址的调用现在经过指定的实现逻辑,但 storage 仍属于该地址本身(这正是指定逻辑能用 storage 持有 session key、scope 等的原因)。

## Mechanism · session key,agent 侧

一旦某 EOA 委托给一个支持 session key 的钱包实现(一个 Safe 变体、一个 Kernel 变体、MetaMask Smart Account、Rhinestone Account 等),agent 集成模式在结构上与 [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 session-key pattern]] 完全相同:

1. 用户的既有 EOA,委托之后,暴露一个 session-key 模块入口。
2. 用户签一笔 transaction(或一个 UserOp,若也经由 4337 路由 — 见下),为 agent 的公钥安装一个 session-key 条目,带一个受限定的策略(目标合约、selector、value 上限、per-period 限额、过期)。
3. agent 把对应私钥持于一个加固环境中([[agent-economy/privy-embedded-wallet-overview|Privy MPC]] share、AWS Nitro Enclave、Apple Secure Enclave、[[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] signer 服务)。
4. agent 提交由 session key 签名的 transaction。因为该 EOA 现在执行钱包实现的代码,实现的 `validateUserOp`(4337式)或其原生 transaction guard 逻辑会在执行前检查 session key 的签名与 scope。
5. 用户可通过签一笔移除该 session-key 条目的 transaction 来撤销,或通过签一个指向 `address(0)` 的新 `SET_CODE_TX` 来完全移除该委托。

相较一个全新 4337 SCW 的主要运营差异在于 *用户无需移动资金*。相同的 DeFi 头寸、NFT 持仓、ENS 反向解析与 on-chain 声誉仍附着于同一地址。agent 继承全部历史。

## Mechanism · 7702 + 4337 组合

最干净的生产部署同时组合 7702 *与* 4337:

- EOA(经由 `SET_CODE_TX`)委托给一个实现 ERC-4337 `validateUserOp` 接口的钱包实现。
- 委托之后,该 EOA 既可作为 EOA 被寻址(legacy tx 仍可用)*又* 可作为一个 4337-兼容的 SCW 被寻址(Bundler 可拾取 `sender == EOA 地址` 的 UserOp)。
- 全部 4337 基础设施 — Bundler、Paymaster、EntryPoint v0.7 — 无需修改即可工作,因为 EntryPoint 的唯一要求是 `sender` 拥有正确的验证接口,而被委托的代码提供了它。
- session、gas 赞助与 scope 执行与纯 4337 情形([[systems/erc-4337-userop-bundler-flow|UserOp / Bundler flow]])完全相同地工作。

这就是为何「7702 是 4337的竞争对手吗?」的 agent-economy 解读大体是「不,它们组合」。7702 解决 *地址迁移* 问题;4337 解决 *执行语义* 问题;一并起来,它们在用户既有的地址上给同一个 agent 与一个全新 SCW 相同的受限定、可代付、可撤销的执行面。

一个仅 7702(无 4337)的部署也是可能的 — 钱包实现可交付自己的内部 session-key 逻辑,并在标准 legacy transaction 上运行。这在运营上更简单(无 Bundler / Paymaster 依赖),但失去无 ETH 的 UX、Bundler 批处理的节省,以及标准化的 EntryPoint 信任根。

截至 2026年中,多数 agent-stack 工程指南中的实用建议:挑选一个原生支持两种模式的钱包实现(Safe-7579, Kernel、Rhinestone Account、MetaMask Smart Account 变体),为既有 EOA 用户经由 7702 委托给它,并让 agent 路径使用相同的 `validateUserOp` 接口,无论调用方是一个真 4337 SCW 还是一个 7702-委托的 EOA。下游的代码路径收敛。

## Mechanism · delegation designator 的签名生命周期

delegation designator 的签名是其自身的承重对象,从 agent-安全角度值得细看:

- 按 EIP,签名 payload 是 `(MAGIC || chain_id || address || nonce)`,其中 `MAGIC` 是一个域分隔字节。签名是对该 payload 的 keccak256 所作,由该 EOA 的 secp256k1 密钥产生。
- `chain_id` 字段很关键 — 它正是防止一条链上的一个签名委托被对另一条链上的同一 EOA 重放之物。一个以 `chain_id == 0` 签名的委托可跨链重放(EIP 为显式跨链委托允许此点,例如「在所有地方都委托给这个实现」),因而从 UX 角度看是最危险的模式。
- `nonce` 字段取自 `SET_CODE_TX` 被打包时该 EOA 的 account nonce,而非签名时。由同一 EOA 签名的多个委托可排队;仅在被打包时与实际链上 nonce 相匹配的那个生效。

对一个想 *帮助* 用户撤销一个恶意委托的 AI agent,该 agent 必须构造一个指向 `address(0)`、由该 EOA 签名的新 `SET_CODE_TX`。agent 无法仅凭一个 session key 做到这点 — 撤销需要 root EOA 签名。这种不对称是刻意的:用户必须始终保留撤销的能力,即便 agent 的 session-key 基础设施被攻陷。误解此点、并试图让撤销可经由 session key 进行的钱包实现,正在制造一个安全漏洞。

## Mechanism · 临时授权,7702-特有的模式

一个真正 7702-原生的模式(在 4337 中无干净类比)是 *single-transaction delegation(单交易委托)*:把 `SET_CODE_TX` 授权包含在使用它的同一笔交易中,然后立即撤销。具体地:

1. 用户在一个 bundle 中签一个 `delegationDesignator` 和一个后续调用。
2. 该 bundle 由一个 relayer 提交。EVM 施加该委托、执行后续调用(它使用该 EOA 本来不具备的 session-key / batch / sponsorship 特性),然后一个最终操作移除该委托。
3. 净效果:该 EOA 恰好在一笔交易内具有 SCW 行为,然后回退为一个纯 EOA。

对 agent 而言,agent 专属解读是 **「递给 agent 一个一次性、有时限的授权」**。用户可让一个 agent 执行单个批处理操作 — 例如「在一个原子的类 UserOp 序列中 approve USDC + 执行 swap + 转给 merchant」— 而不给 agent 一个持久 session key。这在形态上更接近 OAuth 2.0的 authorization-code 流程,而非 OAuth bearer token:用户签发一个一次性凭证,agent 消费它,授权随即蒸发。

持久委托(更常见的情形)是 OAuth refresh token 或 [[agent-economy/erc-7715-overview|ERC-7715]] scoped permission 的更近类比:agent 得到一个带受限定 scope 的长寿命 signer。

## Agent 专属场景

**场景 A — 长期 MetaMask 用户加上一个自主 agent。** 一个 DeFi 用户拥有一个五年历史、持有 LP 头寸、NFT 与 ENS 的 MetaMask 地址,想让一个 agent 每周在一个紧的风险包络内为她的头寸再平衡。在 7702之前:她本须把一切迁移到一个新 SCW。有了 7702:她签一个 `SET_CODE_TX` 委托给一个 Safe 式钱包实现,然后为 agent 签一个 session-key 授权,scope 为「可对 token X/Y/Z 调用 `Aave.repay/borrow/withdraw`,每周至多 N USDC,过期 90 天」。同一地址保留其全部历史。

**场景 B — 一次性交易授权。** 用户想让一个 agent 仅在今天执行一笔特定套利交易,无持久性。模式:用户签一个 7702 单交易委托,让 agent 在一个原子操作中执行批处理的 approve+swap+repay 序列,此后该 EOA 回到纯 EOA 状态。agent 从不持有一个链上 signer;授权被消费且消失。

**场景 C — 出于安全的 EOA「降级」。** 一个去年安装了一个 7702 委托并给了一个 agent 一个 session key 的用户,因怀疑 agent 平台被攻陷而想撤销一切。一个指向 `address(0)` 的 `SET_CODE_TX` 完全移除该委托;全部已安装的 session key 在单个原子操作中变得不可达。这比一个撤销通常需要与 SCW 的 module-uninstall 逻辑交互的 4337 SCW 显著更简单。

**场景 D — 一个身份上的多链 agent。** 用户的同一 EOA 地址存在于 Ethereum mainnet、Base、Arbitrum 与 Optimism(因为 EOA 是链无关的,且用户在各处都用过该地址)。她可在不同链上委托给 *不同* 钱包实现 — 在 Base 上为高频 [[agent-economy/x402-http-payment-overview|x402]] agent 流量用一个 session-key 丰富的实现,在 mainnet 上为冷存储用一个 multi-sig 式实现。agent 从一个身份运营,但带链上恰当的执行语义。

**场景 E — 平台置备的 EOA。** 一个平台(Stripe、AWS AgentCore)在置备时为每个 agent 生成一个全新 EOA。在 7702 之前,自然的选择本会是每个 agent 一个 4337 SCW,这意味着每个 agent 一次合约部署。有了 7702 ,平台可以简单地置备一个全新 EOA、以 USDC 为之注资,并让 agent 在首次使用时签一个 `SET_CODE_TX` 委托给一个已知良好的实现。无 factory 部署,无 counterfactual 地址计算。对数以千万计的 agent fleet,这节省真实的 on-chain 成本。

## 监管框定 · 「EOA 仍是用户」

7702 架构有一个有用的监管属性:签 `SET_CODE_TX` 的 EOA 地址,与此前曾是用户身份的那个地址是同一地址。多数法域的 AML / KYC / 制裁框架以钱包地址识别自然人(与以银行账号识别他们的方式相同)。7702 保留了该映射 — 用户的地址不变,历史不变,合规厂商围绕该地址积累的全部 on-chain 声誉与交易图谱仍适用。唯一的改变是该地址现在能执行更丰富的逻辑。

这在运营上不同于 4337 的「全新 SCW 地址」模式 — 在后者中,每个合规厂商都须把用户身份重新锚定到新地址并重建图谱。对机构用户以及处于有严格 travel-rule 要求之法域的用户,7702 是摩擦更低的路径,因为监管身份在升级过程中持续存在。

另一面是,*delegation designator 本身* 是一个此前不存在的新鉴证,而多数法域尚未将其含义法典化。一个签了一个委托给恶意合约的用户,实际上已签字交出了该地址上每项资产的托管 — 这是一个比签一笔普通交易严重得多的动作,而「我被骗签了一个委托」之类主张的法律地位确实尚未解决。

## 就 agent 用例与 ERC-4337 的比较

| 维度 | ERC-4337 路径 | ERC-7702 路径 |
|---|---|---|
| 起始状态 | 用户尚无 Ethereum 钱包,或有一个且接受迁移 | 用户有一个想保留其历史的既有 EOA |
| 地址 | 新 SCW 地址 | 既有 EOA 地址 |
| Onboarding 成本 | Counterfactual 部署 + 首个 UserOp | 一个 `SET_CODE_TX` 签名(~30k–50k gas) |
| Session-key 支持 | 经由 SCW 模块安装而原生 | 委托之后原生,经由被委托实现的 storage |
| Gas 赞助 | Paymaster(4337-原生) | 若与 4337组合则用 Paymaster;否则 legacy relayer |
| 撤销 | 经由 UserOp 的模块卸载 | 要么移除模块,要么签指向 `address(0)` 的 `SET_CODE_TX` 作为核选项 |
| 一次性授权 | 别扭(每个 UserOp 创建持久状态) | 经由单交易委托模式而原生 |
| Agent 在历史上的 identity | agent 经由一个无往绩的新地址行动 | agent 经由用户既有的、带完整往绩的地址行动 |
| 合规 / KYC 连续性 | 身份须被重新锚定 | 身份持续存在 |
| 安全最坏情形 | SCW 逻辑 bug = SCW 资金面临风险 | 委托逻辑 bug = *整个 EOA 历史* 面临风险 |

就 agent 用例的实用指引:

- *通过一个 embedded-wallet 平台的新用户 onboarding* → 4337 SCW。用户从未有过 EOA;没有可委托的来源。[[agent-economy/privy-embedded-wallet-overview|Privy]] / [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] / Alchemy 默认走这条路径。
- *既有 EOA 用户*(MetaMask、Rabby、硬件钱包)*想要 agent 能力* → 7702 委托,可能与 4337 组合以获得执行语义。这是 MetaMask 与 Rabby 在 2026交付的路径。
- *机构 multi-sig* → 4337 + Safe 模块;7702 大体无关,因为该机构没有可升级的 EOA。
- *一次性、高信任授权* → 7702 单交易委托。
- *面向零售 SaaS 的长寿命 agent fleet* → 由平台置备的 4337 SCW。

从系统侧看的详细分野,在 [[systems/erc-7702-vs-erc-4337|the 7702 vs 4337 comparison page]]。

## Related

- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 account-abstraction primer for agents]]
- [[agent-economy/erc-7715-overview|ERC-7715 · Wallet Permissions overview]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 + agent payment stack]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|Seven-protocol layer table]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet overview]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/embedded-wallet-network-effects-moat|Embedded wallet network effects moat]]
- [[systems/erc-7702-overview|ERC-7702 systems overview]]
- [[systems/erc-7702-vs-erc-4337|ERC-7702 vs ERC-4337]]
- [[systems/erc-4337-overview|ERC-4337 systems overview]]
- [[systems/erc-4337-userop-bundler-flow|UserOp / Bundler flow]]
- [[systems/INDEX|systems index]]

## Sources

- EIP-7702 spec — `eips.ethereum.org/EIPS/eip-7702`.
- EIP-4337 spec — `eips.ethereum.org/EIPS/eip-4337`.
- "EIP-7702: Set EOA Account Code" — original ethresear.ch / ethereum-magicians proposal threads.
- Vitalik Buterin, "EIP-7702 Optimizations" notes — `notes.ethereum.org/@vbuterin/eip_7702_optimizations`.
