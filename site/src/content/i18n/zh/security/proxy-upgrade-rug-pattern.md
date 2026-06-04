---
source: security/proxy-upgrade-rug-pattern
source_hash: efb549811e484feb
lang: zh
model: claude-opus-4-8
status: machine
fidelity: ok
title: "可升级代理合约的 rug 模式 — admin 升级权限作为后门"
translated_at: 2026-06-05T00:00:00.000Z
---

# 可升级代理合约的 rug 模式 — admin 升级权限作为后门

## Wiki 路由

本条目位于 [[security/INDEX|security domain]] 之下。请结合 [[security/bytecode-forensic-three-tier-verify|bytecode forensic three-tier verify]] 阅读它所依赖的链上验证机制，并结合 [[systems/erc-4337-overview|ERC-4337 overview]] 阅读更广泛的智能账户语境——可升级代理如今已是默认的部署形态。

> [!info] TL;DR
> 可升级代理将合约拆分为一个轻量的 **proxy**（持有状态 + 存储）和一个可替换的 **implementation**（持有逻辑）。掌控升级密钥的人可以随时将代理重新指向 *新的* 逻辑——包括抽干资金、暂停或拉黑的逻辑。用户读到的「已验证、已审计」源代码只是 *当前的* implementation；rug 是 **下一个** implementation。本条目把升级权限定性为一个常驻后门，并给出一套公开、可复现的流程，以便在存入资金之前评估该风险。

## 机制：升级密钥存放在哪里

代理将所有调用（`delegatecall`）委托给存储在固定存储槽中的 implementation 地址。[ERC-1967](https://eips.ethereum.org/EIPS/eip-1967) 对这些槽位进行了标准化，使工具能够确定性地找到它们：

| 槽位用途 | 存储槽 (ERC-1967) | 推导 |
|---|---|---|
| Implementation | `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc` | `keccak256('eip1967.proxy.implementation') - 1` |
| Admin | `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103` | `keccak256('eip1967.proxy.admin') - 1` |
| Beacon | `0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50` | `keccak256('eip1967.proxy.beacon') - 1` |

`- 1` 这个技巧产生一个没有已知 keccak256 原像的槽位，因此应用存储不会意外地与之冲突。**admin 槽位就是 rug 的攻击面**：读取它，你就准确知道谁能替换逻辑。

## 两种代理形态，两个控制位置

| 模式 | 升级逻辑所在 | Admin / 升级者 | 取证注记 |
|---|---|---|---|
| Transparent proxy | **proxy** 本身 | ERC-1967 admin 槽位 | admin 调用被路由到升级逻辑；非 admin 调用穿透到 implementation |
| UUPS ([ERC-1822](https://eips.ethereum.org/EIPS/eip-1822)) | **implementation** | implementation 中由 `onlyOwner` 式修饰符守护的函数（通常是 `upgradeTo`） | 更轻量/更便宜，但该守卫 *本身处于可被升级移除的代码之中* — 应读取当前 implementation 的授权，而不仅是 proxy |
| Beacon proxy | 一个共享的 **beacon** 合约 | beacon owner | 单次 beacon 升级可一次性重新指向 *许多* 代理 — 影响半径是整个族群 |

OpenZeppelin 的 `UUPSUpgradeable` 增加了一个守卫，拒绝升级到不符合 UUPS 的 implementation（以避免可升级性被锁死），但该守卫并不约束被允许的升级者 *能够* 安装 *什么*。授权才是唯一真正的控制，而授权是可变的。

## rug 的序列

1. 部署一个良性、已审计的 implementation `V1`。在区块浏览器上以及（最好）在 [Sourcify](https://docs.sourcify.dev/docs/full-vs-partial-match/) 上让其通过验证。用户读到干净的源代码。
2. 在升级密钥仍掌握在某个 EOA 或 1-of-1「多签」手中时，积累存款 / TVL。
3. 在所选时刻，升级密钥安装一个包含 withdraw-all、mint、pause 或余额改写路径的 `V2`。
4. 执行它，然后可选地重新指向回 `V1` 以扰乱事后剖析。

步骤 1 和 4 正是为何某一时间点的源代码读取不充分——恶意代码可能从不是 *当前所显示的* implementation。这与区块浏览器在 [[security/etherscan-verified-source-poisoning|Etherscan verified-source poisoning]] 中所讨论的「所显示的产物并非具约束力的产物」是同一种失效模式。

## 公开风险评估清单

可用公开 RPC 节点和区块浏览器复现；无需私有数据。

- [ ] 读取 ERC-1967 admin 槽位（`eth_getStorageAt(proxy, <admin slot>)`）。升级者是 EOA、单密钥钱包，还是真正的多签？
- [ ] 如果是 UUPS，获取当前 implementation 并检查 `upgradeTo`/`_authorizeUpgrade` 守卫——谁能通过它？
- [ ] 在升级的调度与执行之间是否存在 **timelock**？没有 timelock = 即时 rug 能力。
- [ ] 升级权限是已被放弃，还是被持有在某个已知的治理流程之后？请与 [[systems/hook-enforced-compliance|hook-enforced compliance]] 比较——在那里，策略被绑定进调用路径，而非交由可裁量的 admin 密钥。
- [ ] implementation 地址自部署以来是否 *已经* 变更过？区块浏览器和 ERC-1967 的 `Upgraded(address)` 事件记录了之前的每一个 implementation——把它们枚举出来。
- [ ] 对于 beacon proxy，识别 beacon owner，以及有多少代理共享它（影响半径）。

## 这最重要的场景

- 在单一可升级代理背后持有汇集资金的桥、金库和质押合约。
- 审计只覆盖了 `V1`、但升级密钥是一个未经审计的 EOA 的「已审计」协议。
- 可由 agent 调用的、以及账户抽象合约：[[systems/erc-4337-overview|ERC-4337]] 下的智能账户和 [[systems/erc-7702-overview|ERC-7702]] 下被委托的 EOA 经常是可升级的，因此在授予其消费权限之前，同样的 admin 密钥分析也适用于 [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]]。

## 不应过度看重这一点的场景

- 真正不可变的（非代理的）、没有升级槽位的合约——不存在升级 rug 攻击面（其他风险仍在）。
- 被长 timelock *加上* 可信多签所守护的升级——风险实质上更低（用户可在延迟期内退出）。
- 诸如 [[systems/canton-overview|Canton]] 之类的、合约演进遵循模板治理路径而非 EVM 代理槽位的、有权限的 / 非 EVM 环境——应改为分析其治理路径。

## 相关

- [[security/INDEX|Security domain index]]
- [[security/bytecode-forensic-three-tier-verify|Bytecode forensic three-tier verify]]
- [[security/etherscan-verified-source-poisoning|Etherscan verified-source poisoning]]
- [[security/fork-and-rebrand-5-layer-audit-framework|Fork-and-Rebrand five-layer audit framework]]
- [[systems/erc-4337-overview|ERC-4337 overview]]
- [[systems/erc-7702-overview|ERC-7702 overview]]

## 来源

- ERC-1967: Proxy Storage Slots — standardized implementation/admin/beacon slots — https://eips.ethereum.org/EIPS/eip-1967
- ERC-1822: Universal Upgradeable Proxy Standard (UUPS) — upgrade logic in the implementation — https://eips.ethereum.org/EIPS/eip-1822
- OpenZeppelin Contracts — Proxy API (Transparent, UUPS, Beacon) — https://docs.openzeppelin.com/contracts/4.x/api/proxy
- ethereum.org — Upgrading smart contracts (proxy patterns overview) — https://ethereum.org/en/developers/docs/smart-contracts/upgrading/
