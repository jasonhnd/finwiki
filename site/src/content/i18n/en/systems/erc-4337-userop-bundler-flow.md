---
source: systems/erc-4337-userop-bundler-flow
source_hash: bf999f1350f3c2b8
lang: en
status: machine
fidelity: ok
title: "ERC-4337 UserOp/Bundler/EntryPoint Flow Explained"
translated_at: 2026-06-01T04:15:40.154Z
---
# ERC-4337 UserOp/Bundler/EntryPoint Flow Explained

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/erc-4337-overview|ERC-4337 概観 · Account Abstraction のアプリケーション層実装]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- A UserOp is not a transaction; it is a sub-unit packaged by a Bundler ^[extracted]
- A Bundler is similar to a block builder, but it operates in the UserOp mempool ^[extracted]
- EntryPoint is a singleton contract and the entry point that every UserOp must pass through ^[extracted]
- Paymaster is an optional contract that either sponsors gas or accepts gas payment in ERC-20  ^[extracted]
- Aggregator is optional and batch-verifies multiple signatures(BLS / others) ^[extracted]

## Mechanism / How it works

**End-to-end flow(typical USDC gas-sponsorship scenario)**:

1. **The user builds a UserOp**:the user(or dApp) generates a UserOperation object:
   - `sender`(SCW address)
   - `nonce`
   - `callData`(specific call, e.g., USDC.transfer)
   - `callGasLimit` / `verificationGasLimit` / `preVerificationGas`
   - `maxFeePerGas` / `maxPriorityFeePerGas`
   - `paymasterAndData`(when using a Paymaster)
   - `signature`(signature of the SCW owner)

2. **Send the UserOp to the alt-mempool**:the user sends it through the Bundler RPC(`eth_sendUserOperation`)

3. **Bundler simulation + packaging**:the Bundler forks state locally and executes the UserOp, confirms that the gas estimate is correct, then packages N UserOps into a standard transaction 1 件 and calls EntryPoint.handleOps()

4. **EntryPoint executes**:
   - Calls the SCW factory and deploys the SCW(if the SCW does not yet exist)
   - Calls SCW.validateUserOp() to verify the signature + nonce
   - Calls Paymaster.validatePaymasterUserOp() to verify the Paymaster's sponsorship consent
   - Executes callData(the main business logic)
   - Settles gas:collects from the Paymaster / pays the Bundler

5. **On-chain result**:the user can confirm the SCW execution result and does not need to hold ETH

**Core innovation point**:because a UserOp is not a transaction, Bundlers can perform "batch-processing optimization" — packaging 10 件 UserOps into 1 件 transactions and spreading the on-chain base cost.

## Origin & evolution

The UserOp structure went through multiple iterations during the 4337  draft period(2021-2022). Early versions had more fields(`wallet`, separate `initCode`, etc.), but were later simplified into the current form. The main simplifications from v0.6(2023-03  public version) to v0.7(2026) were:
- Integrating `initCode` into the `sender` generation logic
- Splitting Paymaster fields out of calldata and making them explicit
- Reducing gas overhead by 20-30%

The Bundler economic model introduced a priority-fee auction mechanism after v0.7 , mitigating the early problem that "Bundlers are hard to monetize."

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
