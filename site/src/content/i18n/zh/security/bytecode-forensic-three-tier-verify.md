---
source: security/bytecode-forensic-three-tier-verify
source_hash: caf4af4d08ca77d8
lang: zh
status: machine
fidelity: ok
title: "智能合约 bytecode 取证 — 三层 verify 技术"
translated_at: 2026-05-30T15:08:51.567Z
---

# 智能合约 bytecode 取证 — 三层 verify 技术

## Wiki route

This entry sits under [[INDEX|FinWiki index]]. Read it with [[security/fork-and-rebrand-5-layer-audit-framework|fork-and-rebrand audit framework]] for peer context and [[systems/INDEX|systems index]] for the broader infrastructure boundary.

> [!info] TL;DR
> 当项目方的 verified contract 与 GitHub 源码不一致时，bytecode 才是 ground truth。三层 verify：(1) 比对链上 deployed bytecode 与 GitHub source 的编译结果；(2) 逆推 4-byte PUSH4-EQ dispatcher 以提取 fn selector，比对 unverified 合约的接口；(3) 用跨链 verified twin fingerprint 锁定团队身份。

### Layer 1：Deployed vs Compiled diff

- 用 eth_getCode(addr, "latest") 取得链上 runtime bytecode
- 用 GitHub 源码 + 项目方明示的 solc 版本 + optimizer settings 进行本地编译
- diff 非空 = 链上版与 GitHub 版不一致 = 信号
- 注意要剥离 immutable / constructor args / metadata hash 的差分后再比对

### Layer 2：4-byte PUSH4-EQ dispatcher 的逆推

- EVM contract 在 dispatcher 进入时以 PUSH4 selector EQ JUMPI 模式分支
- 即使 contract 未 verify，也可从 opcode 序列提取全部 selector（4-byte）
- 用 4byte.directory / openchain.xyz 反查 fn signature
- 命中 ERC-20  / pause / blacklist / migrate 等敏感接口 = 信号

### Layer 3：跨链 verified twin fingerprint

- 同一团队向多条链部署时，一方 verified、另一方 unverified 的情况频繁出现
- 将 verified 一方的 runtime bytecode（剥离 metadata hash 后）作为 fingerprint 使用
- 在 unverified 链一侧实施 bytecode 相似度匹配（SimHash / k-gram 等）
- 命中 = 同一团队 = 身份锚点 — 商用 [[exchanges/global-crypto-forensics-vendor-layer|オンチェーン forensics vendor]] 将此层作为跨链 cluster 标签库进行了商品化

## When to Use

- 核心合约（bridge / vault / governance）被有意不 verify 的情况
- 项目方的 GitHub 已被删除但合约仍在运行的情况
- 在跨链项目中想识别「表面体制 vs 真实开发团队」的情况
- 怀疑存在 backdoor / 紧急 pause / blacklist 接口的情况 — 在 [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack]] 或 [[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus hack]] 这样的交易所事件中，存在攻击者部署 unverified 中继合约的案例

## When NOT to Use

- 已完全 verified 且源码可信的合约（直接读源码即足够）— 此时 [[systems/formal-spec-implementation-codesign|formal-spec implementation co-design]] 等规格优先方法更有效
- proxy 合约（在从 EIP-1967 storage slot 确定 implementation 之后再实施）
- 纯粹 read-only 的 view 合约（风险较低）

## Provenance

- 案例研究：链上部分核心合约为 verified，但 bridge / vault 系的一部分为闭源 · 用三层 verify 逆推 unverified 合约的接口，并用跨链 twin fingerprint 锁定了团队身份
