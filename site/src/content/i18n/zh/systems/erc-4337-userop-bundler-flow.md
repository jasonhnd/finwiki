---
source: systems/erc-4337-userop-bundler-flow
source_hash: bf999f1350f3c2b8
lang: zh
status: machine
fidelity: ok
title: "ERC-4337 UserOp/Bundler/EntryPoint 流程详解"
translated_at: 2026-06-01T04:15:40.154Z
---
# ERC-4337 UserOp/Bundler/EntryPoint 流程详解

## Wiki route

本条目位于 [[systems/INDEX|systems index]] 下。请结合 [[systems/erc-4337-overview|ERC-4337 概観 · Account Abstraction のアプリケーション層実装]] 阅读以获得同业 / 对比语境，并结合 [[fintech/INDEX|fintech index]] 阅读以理解更广泛的系统 / 监管边界。

## Key facts

- UserOp 不是交易，而是由 Bundler 打包的 sub-unit ^[extracted]
- Bundler 类似 block builder，但运行在 UserOp mempool 中 ^[extracted]
- EntryPoint 是单例合约，是所有 UserOp 必须通过的入口 ^[extracted]
- Paymaster 是可选合约，可以代付 gas，或接受以 ERC-20 支付 gas ^[extracted]
- Aggregator 是可选组件，用于批量验证多个签名(BLS / 其他) ^[extracted]

## Mechanism / How it works

**端到端流程(典型的 USDC gas 代付场景)**:

1. **用户构建 UserOp**:用户(或 dApp)生成 UserOperation 对象:
   - `sender`(SCW 地址)
   - `nonce`
   - `callData`(具体调用，例如 USDC.transfer)
   - `callGasLimit` / `verificationGasLimit` / `preVerificationGas`
   - `maxFeePerGas` / `maxPriorityFeePerGas`
   - `paymasterAndData`(使用 Paymaster 时)
   - `signature`(SCW owner 的签名)

2. **将 UserOp 发送到 alt-mempool**:用户通过 Bundler RPC(`eth_sendUserOperation`)发送

3. **Bundler 进行模拟 + 打包**:Bundler 在本地 fork 状态并执行 UserOp，确认 gas 估算正确，然后将 N 个 UserOp 打包到标准交易 1 件中并调用 EntryPoint.handleOps()

4. **EntryPoint 执行**:
   - 调用 SCW factory 部署 SCW(如果 SCW 尚不存在)
   - 调用 SCW.validateUserOp() 验证签名 + nonce
   - 调用 Paymaster.validatePaymasterUserOp() 验证 Paymaster 的代付同意
   - 执行 callData(主要业务逻辑)
   - 结算 gas:从 Paymaster 收取 / 支付给 Bundler

5. **链上结果**:用户可以确认 SCW 的执行结果，不必持有 ETH

**核心创新点**:由于 UserOp 不是交易，Bundler 可以进行“批处理优化”——将 10 件 个 UserOp 打包进 1 件 个交易，并分摊链上的 base cost。

## Origin & evolution

UserOp 结构在 4337  草案期间(2021-2022)经历了多轮迭代——早期版本有更多字段(`wallet`、`initCode` 分离等)，后来简化为当前形态。v0.6(2023-03 公开版本)→ v0.7(2026)的主要简化包括:
- 将 `initCode` 整合进 `sender` 生成逻辑
- 将 Paymaster 字段从 calldata 中拆出并显式化
- 将 gas 开销削减 20-30%

Bundler 的经济模型在 v0.7  以后引入 priority fee 拍卖机制，缓解了早期“Bundler 难以盈利”的问题。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/erc-4337-overview|ERC-4337 Overview]]
- [[systems/erc-4337-embedded-wallet-adoption|Embedded Wallet Adoption]]
- [[systems/erc-7702-overview|ERC-7702]]
<!-- /wiki-links:managed -->

## Sources

- ERC-4337 EIP v0.6 / v0.7 spec
- ERC-4337 (Account Abstraction) — https://eips.ethereum.org/EIPS/eip-4337
