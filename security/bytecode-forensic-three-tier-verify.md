---
type: wiki
kind: technique
slug: bytecode-forensic-three-tier-verify
domain: security
title: "智能合约 bytecode forensic — 三层 verify 技术"
aliases: []
status: candidate
confidence: possible
evidence_count: 2
challenges: 0
created: 2026-05-12
last_updated: 2026-05-18
last_tended: 2026-05-12
review_by: 2026-11-08
related:
  - "[[fork-and-rebrand-5-layer-audit-framework]]"
  - "[[wayback-machine-as-forensic-tool]]"
  - "[[forensic-identity-anchor-chain]]"
tags: [security/forensic, security/smart-contract, security/dd]
sources:
  - "https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getcode"
  - "https://docs.soliditylang.org/en/latest/metadata.html"
  - "https://docs.etherscan.io/contract-verification/"
---

# 智能合约 bytecode forensic — 三层 verify 技术

## Wiki route

This entry sits under [[INDEX|FinWiki index]]. Read it with [[security/fork-and-rebrand-5-layer-audit-framework|fork-and-rebrand audit framework]] for peer context and [[systems/INDEX|systems index]] for the broader infrastructure boundary.

> [!info] TL;DR
> 当项目方 verified contract 与 GitHub 源码不一致时,bytecode 是 ground truth. 三层 verify: (1) 链上 deployed bytecode vs GitHub source compile (2) 4-byte PUSH4-EQ dispatcher 反推 fn selector 命中未 verified 合约的接口 (3) 跨链 verified twin fingerprint 定位团队身份.

## 三层 technique

### Layer 1: Deployed vs Compiled diff

- eth_getCode(addr, "latest") 抓链上 runtime bytecode
- 用 GitHub 源码 + 项目方声明的 solc version + optimizer settings 本地编译
- diff 不为空 = 链上版本与 GitHub 不一致 = 信号
- 注意 immutable / constructor args / metadata hash 的差分要剥离

### Layer 2: 4-byte PUSH4-EQ dispatcher 反推

- EVM contract 进入 dispatcher 时用 PUSH4 selector EQ JUMPI 模式分发
- 即使合约没 verify,opcode 序列里能抓出所有 selector (4-byte)
- 用 4byte.directory / openchain.xyz 反查 fn signature
- 命中 ERC-20 / pause / blacklist / migrate 等敏感接口 = 信号

### Layer 3: 跨链 verified twin fingerprint

- 同一团队部署多链时,verified 一边 + 未 verified 另一边的情况常见
- 拿 verified 那边的 runtime bytecode (剥离 metadata hash) 作为 fingerprint
- 在未 verified 链用 bytecode 相似度匹配 (e.g. SimHash / k-gram)
- 命中 = 同一团队 = 身份锚定 — 商用 [[exchanges/global-crypto-forensics-vendor-layer|链上 forensics vendor]] 把这层做成跨链 cluster 标签库

## When to Use

- 关键合约 (bridge / vault / governance) 故意不 verify
- 项目方 GitHub 已删但合约还在跑
- 跨链项目要识别"门面 vs 真团队"
- 怀疑 backdoor / 紧急 pause / 黑名单接口 — 历史交易所事件如 [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack]] 与 [[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus hack]] 都涉及 attacker 部署未 verified 中转合约

## When NOT to Use

- 已完整 verified + 源码可信的合约 (直接读源码) — 此时 [[systems/formal-spec-implementation-codesign|formal-spec implementation co-design]] 类的规范优先方法更有效
- proxy 合约 (用 EIP-1967 storage slot 找 implementation 再做)
- 纯只读 view 合约 (风险低)

## Counterpoints

> [!question] Open questions
> - Layer 2 selector 命中后,如何 verify fn 实际行为而非仅 signature?
> - bytecode 相似度多少算"同团队"? (业界没有 hard threshold)

## Provenance

- case study: 链上部分关键合约 verified + 部分 bridge / vault 闭源 · 用三层 verify 推出未 verified 合约接口 + 跨链 twin fingerprint 锁定团队
