---
title: チェーン抽象モデル概観 · ユーザーが基盤チェーンを意識しない次世代インフラ
aliases: [chain-abstraction-pattern-overview, chain abstraction overview, チェーン抽象概観]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [systems, chain-abstraction, embedded-wallet, ux, intent-based]
sources:
  - https://docs.polygon.technology/agglayer/
  - https://docs.near.org/chain-abstraction/what-is
  - https://docs.eigenlayer.xyz/
  - https://docs.cdp.coinbase.com/
  - https://docs.layerzero.network/v2
status: candidate
---

# チェーン抽象モデル概観

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet 採用状況 · Privy/Coinbase/Alchemy/Safe]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- チェーン抽象はマルチチェーンを消滅させず、マルチチェーンをユーザーに対して透明にする ^[extracted]
- 3 大主流方式:Polygon AggLayer / NEAR Chain Abstraction / EigenLayer restaking ^[extracted]
- Base + Coinbase Smart Wallet = 現時点で最も成熟した「エンドツーエンドのチェーン抽象」実装例 ^[extracted]
- 規制はまだチェーン抽象に触れていないが、MiCA / GENIUS はデフォルトで「ユーザーは自分がどのチェーンにいるか知っている」と想定している ^[extracted]

## Mechanism / How it works

チェーン抽象の中核メカニズムは「チェーン選択」をユーザー意思決定からプロトコル層に移行することにある。**3 段階パラダイム進化**:
1. **ウォレット認識**(MetaMask 時代 · 2017-2022):ユーザーがニーモニックを管理 + チェーン選択 + チェーン切替
2. **embedded wallet**(Privy / Dynamic 時代 · 2023-2024):ユーザーがメール / ソーシャルログインを使用、それでもチェーン選択は必要
3. **チェーン抽象**(AggLayer / NEAR 時代 · 2024-2026+):ユーザーは自分がどのチェーンにいるか全く知らず、プロトコルが自動ルーティング

**Base + Coinbase Smart Wallet の事例**:ユーザーはメールログインで直接取引、L2 上にいることすら知らない。これは embedded wallet + チェーン抽象のエンドツーエンドの典型例。**主要な緊張**:チェーン抽象は「主権チェーン」物語と矛盾する —— 機関チェーン(Kinexys / Arc)はユーザーを自身のチェーンに縛り付けて支配権を保持したいが、ユーザーはチェーン選択を抽象化したい。

## Origin & evolution

2017-2022 マルチチェーン時代、ユーザーはチェーン切替の苦痛を深く感じていた(ウォレット切替 / gas トークン / ブリッジリスク)。2022-2023 クロスチェーンブリッジ(Wormhole / LayerZero / Axelar)は成熟したが UX 問題は解決しなかった。2023 [[agent-economy/privy-embedded-wallet-overview|Privy]] / Dynamic / Magic 等の embedded wallet が登場、秘密鍵 UX を解決したが、チェーン選択は依然ユーザー任せ([[agent-economy/embedded-wallet-network-effects-moat|embedded wallet ネットワーク効果の堀]] 参照)。2024.02 Polygon AggLayer v1 ローンチ → 「共有流動性 + 状態」経路。2024.04 NEAR Chain Signatures + Intents → 「意図駆動 + MPC マルチチェーンアカウント」経路。2024.04 EigenLayer メインネット → 「共有セキュリティ / restaking」経路(セキュリティ層抽象)。2025-2026 3 方式が共存、チェーン抽象がプロトコル価値捕捉の新フロンティアに。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/chain-abstraction-pattern-three-solutions|3 大主流方式 · AggLayer / NEAR / EigenLayer]]
- [[systems/chain-abstraction-pattern-value-capture|クロスチェーンブリッジコモディティ化と価値上方シフト]]
- [[systems/bft-validator-economy-overview|BFT validator 経済学]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号文化分離]]
<!-- /wiki-links:managed -->

## Sources

- Polygon AggLayer 公式ドキュメント（共有流動性 + 統一ブリッジ）— https://docs.polygon.technology/agglayer/
- NEAR Chain Abstraction 公式ドキュメント（Chain Signatures + Intents）— https://docs.near.org/chain-abstraction/what-is
- EigenLayer 公式ドキュメント（restaking / 共有セキュリティ）— https://docs.eigenlayer.xyz/
- Coinbase Developer Platform（Base + Smart Wallet のエンドツーエンド事例）— https://docs.cdp.coinbase.com/
- LayerZero v2 公式ドキュメント（omnichain messaging）— https://docs.layerzero.network/v2
