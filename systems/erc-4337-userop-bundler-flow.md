---
title: ERC-4337 UserOp/Bundler/EntryPoint 流程详解
aliases: [erc-4337-flow, userop-bundler-flow, entrypoint-execution]
domain: systems
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [systems, wallet, aa, erc-4337, userop, bundler, paymaster]
sources: []
status: candidate
---

# ERC-4337 UserOp/Bundler/EntryPoint 流程详解

> [!info] TL;DR
> ERC-4337 用 **alternative transaction pool** 完整绕过协议层修改:UserOp 进入 alt-mempool → Bundler 打包成标准 transaction → EntryPoint 验证签名 + 调用 SCW factory(若需要)+ 执行 calldata → 可选 Paymaster 代付 gas。**5 个核心组件:UserOp / Bundler / EntryPoint / Paymaster / Aggregator**。

## Key facts

- UserOp 不是 transaction · 是被 Bundler 打包的 sub-unit ^[extracted]
- Bundler 类似 block builder · 但工作在 UserOp mempool ^[extracted]
- EntryPoint 是单例合约 · 所有 UserOp 必经入口 ^[extracted]
- Paymaster 是可选合约 · 代付 gas 或接受 ERC-20 付 gas ^[extracted]
- Aggregator 是可选 · 批量验证多签(BLS / 其他) ^[extracted]

## Mechanism / How it works

**端到端流程(典型 USDC 代付 gas 场景)**:

1. **用户构造 UserOp**:用户(或 dApp)生成 UserOperation 对象:
   - `sender`(SCW 地址)
   - `nonce`
   - `callData`(具体调用 · 例如 USDC.transfer)
   - `callGasLimit` / `verificationGasLimit` / `preVerificationGas`
   - `maxFeePerGas` / `maxPriorityFeePerGas`
   - `paymasterAndData`(若用 Paymaster 代付)
   - `signature`(SCW owner 签名)

2. **UserOp 提交到 alt-mempool**:用户通过 Bundler RPC(`eth_sendUserOperation`)提交

3. **Bundler 模拟 + 打包**:Bundler 在本地 fork 状态执行 UserOp · 确认 gas 估算正确 · 然后将 N 个 UserOp 打包成单笔标准 transaction 调用 EntryPoint.handleOps()

4. **EntryPoint 执行**:
   - 调用 SCW factory 部署(若 SCW 尚未存在)
   - 调用 SCW.validateUserOp() 验证签名 + nonce
   - 调用 Paymaster.validatePaymasterUserOp() 验证 Paymaster 同意代付
   - 执行 callData(主业务逻辑)
   - 结算 gas:从 Paymaster 扣 / 给 Bundler

5. **链上结果**:用户看到 SCW 执行结果 · 不需要持有 ETH

**核心创新点**:UserOp 不是 transaction 让 Bundler 可以做"批处理优化"——把 10 个 UserOp 打包成 1 笔 transaction · 摊薄链上 base cost。

## Origin & evolution

UserOp 结构在 4337 草案期间(2021-2022)经过多次迭代——早期版本有更多字段(如 `wallet`、`initCode` 分离)· 后来简化为当前形态。v0.6(2023-03 上线版本)→ v0.7(2026)主要简化:
- 把 `initCode` 合并到 `sender` 创建逻辑
- 把 Paymaster 字段从 calldata 拆出来明确化
- 降低 gas 开销 20-30%

Bundler 经济模型在 v0.7 后引入 priority fee 拍卖机制 · 缓解早期"Bundler 难以盈利"问题。

## Counterpoints

**复杂度集中在开发者**:end-user 体验简洁(无 seed phrase、用 USDC 付 gas)· 但开发者需要选 Bundler、配 Paymaster、管 EntryPoint 版本——这是为什么 Privy / Coinbase CDP / Alchemy 把"AA-as-a-Service"做成商业模式。

**Bundler 审查风险**:Bundler 理论上可拒绝特定 UserOp(类似 builder MEV 审查)。当前 Bundler 数量少(主流 3-5 家)· 中心化风险显著。社区有讨论 stake-based Bundler · 但未广泛落地。

## Open questions

- v0.7 后 Bundler 数量和地理分布?
- Aggregator(BLS 批签名)的实际采用率?
- EntryPoint 升级路径(单例合约升级的安全模型)?
- 与 7702 EOA 升级共享 EntryPoint 的具体语义?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/erc-4337-overview|ERC-4337 Overview]]
- [[systems/erc-4337-embedded-wallet-adoption|Embedded Wallet Adoption]]
- [[systems/erc-7702-overview|ERC-7702]]
<!-- /wiki-links:managed -->

## Sources

- ERC-4337 EIP v0.6 / v0.7 spec
