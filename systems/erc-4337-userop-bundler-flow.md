---
title: ERC-4337 UserOp/Bundler/EntryPoint フロー詳解
aliases: [erc-4337-flow, userop-bundler-flow, entrypoint-execution]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [systems, wallet, aa, erc-4337, userop, bundler, paymaster]
sources:
  - https://eips.ethereum.org/EIPS/eip-4337
status: candidate
---

# ERC-4337 UserOp/Bundler/EntryPoint フロー詳解

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/erc-4337-overview|ERC-4337 概観 · Account Abstraction のアプリケーション層実装]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- UserOp はトランザクションではなく · Bundler によってパッケージされる sub-unit である ^[extracted]
- Bundler は block builder に類似 · ただし UserOp mempool で動作する ^[extracted]
- EntryPoint はシングルトン契約 · すべての UserOp が必ず通過する入口 ^[extracted]
- Paymaster はオプションの契約 · gas を代行支払いするか ERC-20 での gas 支払いを受け付ける ^[extracted]
- Aggregator はオプション · 複数署名をバッチ検証(BLS / その他) ^[extracted]

## Mechanism / How it works

**エンドツーエンドフロー(典型的な USDC gas 代行支払いシナリオ)**:

1. **ユーザーが UserOp を構築**:ユーザー(または dApp)が UserOperation オブジェクトを生成:
   - `sender`(SCW アドレス)
   - `nonce`
   - `callData`(具体的な呼び出し · 例:USDC.transfer)
   - `callGasLimit` / `verificationGasLimit` / `preVerificationGas`
   - `maxFeePerGas` / `maxPriorityFeePerGas`
   - `paymasterAndData`(Paymaster を使う場合)
   - `signature`(SCW オーナーの署名)

2. **UserOp を alt-mempool に送信**:ユーザーは Bundler RPC(`eth_sendUserOperation`)経由で送信

3. **Bundler がシミュレーション + パッケージング**:Bundler はローカルで状態を fork して UserOp を実行 · gas 見積もりが正しいことを確認 · その後 N 個の UserOp を標準トランザクション 1 件にパッケージして EntryPoint.handleOps() を呼び出す

4. **EntryPoint が実行**:
   - SCW factory をコールして SCW をデプロイ(SCW がまだ存在しない場合)
   - SCW.validateUserOp() をコールして署名 + nonce を検証
   - Paymaster.validatePaymasterUserOp() をコールして Paymaster の代行支払い同意を検証
   - callData(主たる業務ロジック)を実行
   - gas を精算:Paymaster から徴収 / Bundler に支払い

5. **オンチェーンの結果**:ユーザーは SCW の実行結果を確認できる · ETH を保有する必要はない

**コアイノベーションのポイント**:UserOp がトランザクションでないことにより、Bundler は「バッチ処理最適化」を行える —— 10 件の UserOp を 1 件のトランザクションにパッケージし · オンチェーンの base cost を分散させる。

## Origin & evolution

UserOp 構造は 4337 ドラフト期間中(2021-2022)に複数回イテレーションされ —— 初期バージョンにはより多くのフィールド(`wallet`、`initCode` 分離など)があったが · 後に現在の形に簡素化された。v0.6(2023-03 公開バージョン)→ v0.7(2026)での主な簡素化:
- `initCode` を `sender` 生成ロジックに統合
- Paymaster フィールドを calldata から切り出して明示化
- gas オーバーヘッドを 20-30% 削減

Bundler の経済モデルは v0.7 以降で priority fee オークションメカニズムを導入し · 初期の「Bundler が収益化困難」という問題を緩和している。

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
