---
title: ERC-4337 概観 · Account Abstraction のアプリケーション層実装
aliases: [erc-4337-overview, account-abstraction-overview, aa-overview]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [systems, wallet, aa, account-abstraction, erc-4337, ethereum]
sources:
  - https://eips.ethereum.org/EIPS/eip-4337
status: candidate
---

# ERC-4337 概観 · Account Abstraction のアプリケーション層実装


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/erc-7702-vs-erc-4337|ERC-7702 vs ERC-4337 · Ethereum AA デュアルトラック対照]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- 2023-03 Ethereum メインネットで有効化 ^[extracted]
- プロトコル層を変更せず · 純粋にアプリケーション層での実装 ^[extracted]
- EntryPoint はオンチェーンのシングルトン契約(0x0000000071727De22E5E9d8BAf0edAc6f37da032) ^[extracted]
- v0.7 アップグレード(2026)で mempool ルールを簡素化 · gas オーバーヘッドを 20-30% 削減 ^[extracted]
- WebAuthn / passkey / BLS / secp256r1(iOS Secure Enclave)等のカスタム署名をサポート ^[extracted]

## Mechanism / How it works

ERC-4337 が解決する中核課題:**EOA と SCW の機能ギャップ**。従来の EOA は secp256k1 秘密鍵で制御され · トランザクション送信/gas 支払い/署名のみが可能で · プログラマブルなロジックを持たない。SCW(Safe/Argent)はプログラマブルだが · EOA が tx を発行してトリガーする必要があり —— ユーザーは依然として ETH を保有して gas を支払い · 秘密鍵を管理する必要がある。

ERC-4337 は新しい **alternative transaction pool** を導入する:

- **UserOperation**:ユーザーが署名した「インテント」オブジェクト(トランザクションではない)· calldata / gas limits / paymaster 情報を含む
- **Bundler**:block builder に類似 · UserOp mempool から取得して標準トランザクション 1 件にパッケージし · EntryPoint に送信
- **EntryPoint**:オンチェーンのシングルトン契約 · すべての UserOp を検証 + 実行
- **Paymaster**:オプションの契約 · gas を代行支払い(または ERC-20 での gas 支払いを受け付け)
- **Aggregator**:オプション · 複数の署名をバッチ検証(BLS / その他方式)

**コアイノベーション:UserOp はトランザクションではなく** · Bundler によってトランザクションにパッケージされる sub-unit である。

## Origin & evolution

ERC-4337 は Vitalik Buterin、Yoav Weiss、Kristof Gazso らによって 2021 年に提案され · 当初の意図は「Ethereum プロトコル層の変更」という高い障壁(これ以前の EIP-2938、EIP-3074 はいずれもメインネット投入に至らなかった)を回避することにあった。2023-03 のメインネット有効化後 · 進展は予想を上回り —— [[agent-economy/privy-embedded-wallet-overview|Privy]] / Coinbase CDP / Alchemy 等の embedded wallet スタックが急速に統合([[agent-economy/embedded-wallet-network-effects-moat|embedded wallet ネットワーク効果の堀]] と対照)。

2026 年の v0.7 アップグレード:mempool ルールの簡素化 · gas オーバーヘッドの 20-30% 削減 · Bundler 経済モデルの最適化。同時期に ERC-7702(Vitalik が 2024-05 より起草)が逆方向から「既存 EOA を SCW にアップグレード」する問題を解決し —— 両者は補完的なデュアルトラックを形成している。

## Counterpoints

**Bundler 中央集権化リスク**:稼働初期において Bundler は少数の運営者(Pimlico、Stackup、Alchemy)が主導しており · 中央集権的なボトルネックを形成している。理論上、Bundler は特定の UserOp を検閲しうるため · これは 4337 の設計が完全には解決していない問題である。

**UX 複雑度が根本的に低下していない**:4337 によって SCW は EOA にない機能を持つようになったが · Paymaster の設定 / Bundler の選定 / EntryPoint のアップグレード等の開発者側複雑度は依然として高く · これが 7702 がかえって「シンプル」に見える根本理由である。

## Open questions

- v0.7 以降の次世代 4337(v0.8/v1.0)の方向性は?
- Bundler の分散化(stake-based、PBS 統合)の進捗は?
- 7702 との長期的な棲み分けは安定するのか?([[agent-economy/erc-7715-overview|ERC-7715 agent payment stack]] 等の AA を基盤とする高次プロトコルの進化を参照)
- 非 EVM チェーン(Solana / Move / Cosmos)における 4337 類似標準の発展は?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/erc-4337-userop-bundler-flow|UserOp/Bundler Flow]]
- [[systems/erc-4337-embedded-wallet-adoption|Embedded Wallet Adoption]]
- [[systems/erc-7702-overview|ERC-7702(EOA 一時 SCW)]]
<!-- /wiki-links:managed -->

## Sources

- ERC-4337「Account Abstraction Using Alt Mempool」 — https://eips.ethereum.org/EIPS/eip-4337
