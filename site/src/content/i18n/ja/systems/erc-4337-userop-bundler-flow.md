---
source: systems/erc-4337-userop-bundler-flow
source_hash: bf999f1350f3c2b8
lang: ja
status: machine
fidelity: ok
title: "ERC-4337  UserOp / Bundler / EntryPoint フロー詳解"
translated_at: 2026-06-03T01:06:46.362Z
---
# ERC-4337  UserOp / Bundler / EntryPoint フロー詳解

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] 配下に位置する。ピア比較・対照の文脈では [[systems/erc-4337-overview|ERC-4337 概観 · Account Abstraction のアプリケーション層実装]] と照らして読み、より広いシステム境界・規制境界については [[fintech/INDEX|fintech index]] を参照する。

## 重要ポイント

- UserOp はトランザクションではなく、Bundler によってパッケージされる sub-unit である ^[extracted]
- Bundler は block builder に類似する。ただし UserOp mempool で動作する ^[extracted]
- EntryPoint はシングルトン契約であり、すべての UserOp が必ず通過する入口である ^[extracted]
- Paymaster はオプションの契約であり、gas を代行支払いするか、ERC-20 での gas 支払いを受け付ける ^[extracted]
- Aggregator はオプションであり、複数署名をバッチ検証する(BLS / その他) ^[extracted]

## 仕組み / 動作

**エンドツーエンドフロー(典型的な USDC gas 代行支払いシナリオ)**:

1. **ユーザーが UserOp を構築**: ユーザー(または dApp)が UserOperation オブジェクトを生成する。
   - `sender`(SCW アドレス)
   - `nonce`
   - `callData`(具体的な呼び出し · 例: USDC.transfer)
   - `callGasLimit` / `verificationGasLimit` / `preVerificationGas`
   - `maxFeePerGas` / `maxPriorityFeePerGas`
   - `paymasterAndData`(Paymaster を使う場合)
   - `signature`(SCW オーナーの署名)

2. **UserOp を alt-mempool に送信**: ユーザーは Bundler RPC(`eth_sendUserOperation`)経由で送信する。

3. **Bundler がシミュレーション + パッケージング**: Bundler はローカルで状態を fork して UserOp を実行し、gas 見積もりが正しいことを確認する。その後、N 個の UserOp を標準トランザクション 1 件にパッケージし、EntryPoint.handleOps() を呼び出す。

4. **EntryPoint が実行**:
   - SCW factory をコールして SCW をデプロイする(SCW がまだ存在しない場合)
   - SCW.validateUserOp() をコールして署名 + nonce を検証する
   - Paymaster.validatePaymasterUserOp() をコールして Paymaster の代行支払い同意を検証する
   - callData(主たる業務ロジック)を実行する
   - gas を精算する: Paymaster から徴収 / Bundler に支払い

5. **オンチェーンの結果**: ユーザーは SCW の実行結果を確認できる。ETH を保有する必要はない。

**コアイノベーションのポイント**: UserOp がトランザクションではないため、Bundler は「バッチ処理最適化」を行える。つまり、10 件 個の UserOp を 1 件 個のトランザクションにパッケージし、オンチェーンの base cost を分散させる。

## 起源と発展

UserOp 構造は 4337 ドラフト期間中(2021-2022)に複数回イテレーションされた。初期バージョンには、より多くのフィールド(`wallet`、`initCode` 分離など)があったが、後に現在の形へ簡素化された。v0.6(2023-03 公開バージョン)から v0.7(2026)での主な簡素化は次のとおり。

- `initCode` を `sender` 生成ロジックに統合
- Paymaster フィールドを calldata から切り出して明示化
- gas オーバーヘッドを 20-30% 削減

Bundler の経済モデルは v0.7 以降で priority fee オークションメカニズムを導入し、初期の「Bundler が収益化困難」という問題を緩和している。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/erc-4337-overview|ERC-4337 Overview]]
- [[systems/erc-4337-embedded-wallet-adoption|Embedded Wallet Adoption]]
- [[systems/erc-7702-overview|ERC-7702]]
<!-- /wiki-links:managed -->

## 出典

- ERC-4337  EIP v0.6  / v0.7  spec
- ERC-4337 (Account Abstraction) — https://eips.ethereum.org/EIPS/eip-4337
