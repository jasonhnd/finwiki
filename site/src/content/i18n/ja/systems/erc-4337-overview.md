---
source: systems/erc-4337-overview
source_hash: 74eaa7d88488e4e3
lang: ja
status: machine
fidelity: ok
title: "ERC-4337 概観 · Account Abstraction のアプリケーション層実装"
translated_at: 2026-06-03T01:06:46.360Z
---
# ERC-4337 概観 · Account Abstraction のアプリケーション層実装

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] 配下に位置づけられる。類似項目や対比の文脈は [[systems/erc-7702-vs-erc-4337|ERC-7702 vs ERC-4337 · Ethereum AA デュアルトラック対照]]、より広いシステム上・規制上の境界は [[fintech/INDEX|fintech index]] とあわせて読む。

## 主要事実

- 2023-03  に Ethereum メインネットで有効化 ^[extracted]
- プロトコル層を変更せず、純粋にアプリケーション層で実装する方式 ^[extracted]
- EntryPoint はオンチェーンのシングルトン契約(0x0000000071727De22E5E9d8BAf0edAc6f37da032) ^[extracted]
- v0.7 アップグレード(2026)で mempool ルールを簡素化し、gas オーバーヘッドを 20-30% 削減 ^[extracted]
- WebAuthn / passkey / BLS / secp256r1(iOS Secure Enclave)などのカスタム署名をサポート ^[extracted]

## 仕組み

ERC-4337 が解決する中核課題は、**EOA と SCW の機能ギャップ**である。従来の EOA は secp256k1 秘密鍵で制御され、トランザクション送信、gas 支払い、署名だけが可能で、プログラマブルなロジックを持たない。SCW(Safe/Argent)はプログラマブルだが、EOA が tx を発行してトリガーする必要がある。そのため、ユーザーは依然として ETH を保有して gas を支払い、秘密鍵を管理しなければならない。

ERC-4337 は新しい **alternative transaction pool** を導入する:

- **UserOperation**:ユーザーが署名した「インテント」オブジェクト。トランザクションではなく、calldata / gas limits / paymaster 情報を含む
- **Bundler**:block builder に似た役割。UserOp mempool から取得し、標準トランザクション 1 件にパッケージして EntryPoint に送信する
- **EntryPoint**:オンチェーンのシングルトン契約。すべての UserOp を検証し、実行する
- **Paymaster**:オプションの契約。gas を代行支払いする、または ERC-20 での gas 支払いを受け付ける
- **Aggregator**:オプション。複数の署名をバッチ検証する(BLS / その他方式)

**コアイノベーション:UserOp はトランザクションではない**。Bundler によってトランザクションへパッケージされる sub-unit である。

## 起源と進化

ERC-4337 は Vitalik Buterin、Yoav Weiss、Kristof Gazso らによって 2021 年 に提案された。当初の意図は、「Ethereum プロトコル層の変更」という高い障壁を回避することにあった。これ以前の EIP-2938、EIP-3074 はいずれもメインネット投入に至らなかった。2023-03  のメインネット有効化後、進展は予想を上回り、[[agent-economy/privy-embedded-wallet-overview|Privy]] / Coinbase CDP / Alchemy などの embedded wallet スタックが急速に統合した([[agent-economy/embedded-wallet-network-effects-moat|embedded wallet ネットワーク効果の堀]] と対照)。

2026 年 の v0.7 アップグレードでは、mempool ルールの簡素化、gas オーバーヘッドの 20-30% 削減、Bundler 経済モデルの最適化が行われた。同時期に ERC-7702(Vitalik が 2024-05  より起草)が逆方向から「既存 EOA を SCW にアップグレード」する問題を解決し、両者は補完的なデュアルトラックを形成している。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/erc-4337-userop-bundler-flow|UserOp/Bundler Flow]]
- [[systems/erc-4337-embedded-wallet-adoption|Embedded Wallet Adoption]]
- [[systems/erc-7702-overview|ERC-7702(EOA 一時 SCW)]]
<!-- /wiki-links:managed -->

## 出典

- ERC-4337「Account Abstraction Using Alt Mempool」 — https://eips.ethereum.org/EIPS/eip-4337
