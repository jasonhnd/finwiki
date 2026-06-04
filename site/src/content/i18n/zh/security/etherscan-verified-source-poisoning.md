---
source: security/etherscan-verified-source-poisoning
source_hash: e5ab5a671959ab92
lang: zh
model: claude-opus-4-8
status: machine
fidelity: ok
title: "Etherscan 已验证源代码投毒 — 为何「已验证」不等于「字节码」"
translated_at: 2026-06-05T00:00:00.000Z
---

# Etherscan 已验证源代码投毒 — 为何「已验证」不等于「字节码」

## Wiki 路由

本条目位于 [[security/INDEX|security domain]] 之下。请结合 [[security/bytecode-forensic-three-tier-verify|bytecode forensic three-tier verify]] 作为动手实操的对应版本来阅读，并结合 [[security/proxy-upgrade-rug-pattern|proxy-upgrade rug pattern]] 来阅读那种「所显示的源代码是真的、但 *下一个* implementation 不是」的情形。

> [!info] TL;DR
> 一个绿色的 "Contract Source Code Verified" 徽章意味着某个区块浏览器重新编译了某份源代码，并得到了 **与已部署内容相匹配** 的字节码——通常允许注释、变量名和元数据上的差异。它 **并不** 意味着该源代码是良性的、它是某个代理的 *具约束力* 的逻辑，或者匹配是逐字节精确的。把徽章当作安全证明，正是这一信任缺口；「已验证源代码投毒」就是利用它的那一族技术。基准真相是链上字节码加上升级图，而非渲染出来的源代码窗格。

## 「已验证」实际断言了什么

验证会在声明的编译器设置下重新编译所提交的源代码，并将其输出与已部署的字节码进行比较。该断言的强度因工具和匹配类型而异：

| 匹配类型 | 保证了什么 | 没有保证什么 |
|---|---|---|
| Full / exact match (Sourcify) | 已部署字节码与重新编译结果逐字节相等，**包括** 附加的元数据哈希——因此确切的源代码字节被锁定 | 关于意图毫无保证；看似良性的源代码仍可能是恶意的 |
| Partial match (Sourcify) / 典型浏览器的 "verified" | 运行时行为匹配；除元数据哈希区域 **之外** 字节码相等 | 注释、变量名、源路径以及其他元数据字段可能与作者实际编译的内容不同 |
| Unverified | — | 对源代码完全没有任何断言 |

Solidity 编译器会把合约元数据的 IPFS 哈希附加到字节码上；该哈希是这次确切编译的指纹。Full match 会检查它；许多浏览器的 "verified" 流程则不会。因此一个 partial-match 徽章与这样一份源代码是相容的：其 *名称和注释被编辑成看起来安全*，同时编译为相同的行为——这一装饰层正是投毒的攻击面。

## 徽章捕捉不到的投毒技术

- **代理间接化。** 已验证的合约是一个代理；它委托到的 *implementation* 可能是单独（未）验证的，并且可以被替换——见 [[security/proxy-upgrade-rug-pattern|proxy-upgrade rug pattern]]。用户读的是代理的源代码，但逻辑在 implementation 中执行。
- **元数据区域编辑。** 在 partial match 下，注释和标识符不受约束。讨喜的命名（`SafeVault`、`onlyTrustedRelayer`）可以掩盖审阅者一扫而过的某个行为。
- **构造函数 vs 运行时的混淆。** 验证针对的是运行时字节码；构造期的作用和 immutable 很容易被检查不足。
- **「看起来像某个已知良好的 fork」。** 渲染得酷似某个已审计上游、却在红线区域有所偏离的源代码——正是 [[security/fork-and-rebrand-5-layer-audit-framework|the fork-and-rebrand five-layer audit]] 旨在捕捉的那种失效模式（Layer 1 上游 diff、Layer 3 字节码指纹）。

## 交叉核验徽章（公开、可复现）

1. 拉取已部署的运行时字节码（`eth_getCode(addr, "latest")`），并在任何比较之前剥离尾部的元数据哈希。
2. 用声明的 `solc` 版本和 optimizer 设置在本地重新编译所提交的源代码；与 (1) 做 diff。在剥离元数据之后仍存在非空 diff，是一个硬信号。
3. 当源代码的注释/名称对你的审查很重要时，优先选择 **full/exact** match（例如 [Sourcify](https://docs.sourcify.dev/docs/full-vs-partial-match/)）而非 partial match。
4. 如果目标是代理，从 ERC-1967 槽位解析出 implementation 并验证 *它*，然后从 `Upgraded(address)` 事件枚举之前的 implementation。
5. 对于未验证代码的 selector 级检查，恢复 4 字节的分发器并反查 selector——即 [[security/bytecode-forensic-three-tier-verify|bytecode forensic three-tier verify]] 中的 Layer 2 技术。

## 为何这很重要

- 把「在 Etherscan 上已验证」当作门槛的 DeFi 审阅者和上币团队——徽章是必要的，而非充分的。
- 事件归因：对诸如 [[exchanges/bybit-lazarus-hack-detailed-analysis|the Bybit Lazarus hack]] 等交易所事件的事后分析，反复在攻击路径中浮现出未验证或浅验证的 relay/helper 合约。
- 受监管 VASP 的入网，其中验证预期与 [[exchanges/jp-vasp-security-audit-certification|JP VASP security audit certification]] 的披露要求相互咬合。

## 徽章足够好的场景

- 在一份你确实读过源代码的、非代理的、不可变的合约上取得 **full/exact** 匹配——断言很强，且逻辑无法改变。
- 最坏情况影响可忽略的低风险只读/view 合约。

## 相关

- [[security/INDEX|Security domain index]]
- [[security/bytecode-forensic-three-tier-verify|Bytecode forensic three-tier verify]]
- [[security/proxy-upgrade-rug-pattern|Proxy-upgrade rug pattern]]
- [[security/fork-and-rebrand-5-layer-audit-framework|Fork-and-Rebrand five-layer audit framework]]
- [[exchanges/jp-vasp-security-audit-certification|JP VASP security audit certification]]

## 来源

- Sourcify — Full vs Partial Match — https://docs.sourcify.dev/docs/full-vs-partial-match/
- Sourcify — We Need to Talk About the On-Chain Metadata Hash — https://docs.sourcify.dev/blog/talk-about-onchain-metadata-hash/
- Solidity docs — Contract Metadata (appended IPFS hash / metadata format) — https://docs.soliditylang.org/en/latest/metadata.html
- ethereum.org — Verifying smart contracts — https://ethereum.org/en/developers/docs/smart-contracts/verifying/
