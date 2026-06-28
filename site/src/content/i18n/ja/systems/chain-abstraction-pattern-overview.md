---
source: systems/chain-abstraction-pattern-overview
source_hash: 656833e295798ba6
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "チェーン抽象モデル概観"
translated_at: 2026-06-26T08:28:53.975Z
---
# チェーン抽象モデル概観

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] 配下に置かれる。同類 / 対照の文脈は [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded ウォレット採用状況 · Privy/Coinbase/Alchemy/Safe]]、より広いシステム / 規制境界は [[fintech/INDEX|fintech index]] と照合して読む。

## 主要事実

- チェーン抽象はマルチチェーンを消滅させず、マルチチェーンをユーザーに対して透明にする ^[extracted]
- 3  大主流方式: Polygon AggLayer / NEAR Chain Abstraction / EigenLayer restaking ^[extracted]
- Base + Coinbase Smart ウォレット は、現時点で最も成熟した「エンドツーエンドのチェーン抽象」実装例である ^[extracted]
- 規制はまだチェーン抽象に触れていないが、MiCA / GENIUS はデフォルトで「ユーザーは自分がどのチェーンにいるか知っている」と想定している ^[extracted]

## 仕組み / どのように機能するか

チェーン抽象の中核メカニズムは、「チェーン選択」をユーザーの意思決定からプロトコル層へ移すことにある。**3  段階のパラダイム進化**:
1. **ウォレット認識**（MetaMask 時代 · 2017-2022）: ユーザーがニーモニックを管理し、チェーンを選択し、チェーンを切り替える
2. **組み込みウォレット**（Privy / Dynamic 時代 · 2023-2024）: ユーザーはメール / ソーシャルログインを使うが、それでもチェーン選択は必要
3. **チェーン抽象**（AggLayer / NEAR 時代 · 2024-2026+）: ユーザーは自分がどのチェーンにいるかをまったく知らず、プロトコルが自動ルーティングする

**Base + Coinbase Smart ウォレット の事例**: ユーザーはメールログインで直接取引し、自分が L2  上にいることすら知らない。これは組み込みウォレット + チェーン抽象のエンドツーエンドの典型例である。**主要な緊張**: チェーン抽象は「主権チェーン」の物語と矛盾する。機関チェーン（Kinexys / Arc）はユーザーを自社チェーンに縛り付けて支配権を保持したいが、ユーザーはチェーン選択を抽象化したい。

## 起源と進化

2017-2022  のマルチチェーン時代、ユーザーはチェーン切り替えの苦痛を強く感じていた（ウォレット切り替え / gas トークン / ブリッジリスク）。2022-2023  にクロスチェーンブリッジ（Wormhole / LayerZero / Axelar）は成熟したが、UX 問題は解決しなかった。2023  に [[agent-economy/privy-embedded-wallet-overview|Privy]] / Dynamic / Magic などの組み込みウォレットが登場し、秘密鍵 UX を解決したが、チェーン選択は依然ユーザー任せだった（[[agent-economy/embedded-wallet-network-effects-moat|embedded ウォレットネットワーク効果の堀]] 参照）。2024.02  に Polygon AggLayer v1  がローンチ → 「共有流動性 + 状態」の経路。2024.04  に NEAR Chain Signatures + Intents → 「意図駆動 + MPC マルチチェーンアカウント」の経路。2024.04  に EigenLayer メインネット → 「共有セキュリティ / restaking」の経路（セキュリティ層抽象）。2025-2026  に 3  方式が共存し、チェーン抽象はプロトコル価値捕捉の新たなフロンティアになった。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/chain-abstraction-pattern-three-solutions|3 大主流方式 · AggLayer / NEAR / EigenLayer]]
- [[systems/chain-abstraction-pattern-value-capture|クロスチェーンブリッジコモディティ化と価値上方シフト]]
- [[systems/bft-validator-economy-overview|BFT validator 経済学]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号文化分離]]
<!-- /wiki-links:managed -->

## 出典

- Polygon AggLayer 公式ドキュメント（共有流動性 + 統一ブリッジ）— https://docs.polygon.technology/agglayer/
- NEAR Chain Abstraction 公式ドキュメント（Chain Signatures + Intents）— https://docs.near.org/chain-abstraction/what-is
- EigenLayer 公式ドキュメント（restaking / 共有セキュリティ）— https://docs.eigenlayer.xyz/
- Coinbase Developer Platform（Base + Smart Wallet のエンドツーエンド事例）— https://docs.cdp.coinbase.com/
- LayerZero v2  公式ドキュメント（omnichain messaging）— https://docs.layerzero.network/v2
