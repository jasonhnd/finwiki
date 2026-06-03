---
source: systems/sui-aptos-move-l1-ecosystem
source_hash: 5698db924026e941
lang: ja
status: machine
fidelity: ok
title: "Sui と Aptos · Move L1 エコシステム"
translated_at: 2026-06-03T01:06:46.355Z
---
# Sui と Aptos · Move L1 エコシステム

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] 配下に位置する。コンセンサス面の位置づけは [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs chain-BFT]]、トークン / ステーキングの動態は [[systems/bft-validator-economy-overview|BFT validator economics]]、実装言語の文脈は [[systems/threshold-bft-consensus-rust-implementations|threshold BFT]] と合わせて読む。

## 主要事項

- **Sui** と **Aptos** は、Diem(旧 Libra)後に生まれた L1 チェーンである。どちらも **Move programming language** を生み出した 2019-2022 Meta 主導の Diem / Novi プロジェクトに由来する。
- **Sui**(Mysten Labs 創業者陣)は 2023年5月にメインネットを開始した。**オブジェクト中心モデル** と **Narwhal / Bullshark DAG-BFT コンセンサス** を重視する。
- **Aptos**(Aptos Labs 創業者陣)は 2022年10月にメインネットを開始した。**AptosBFT(HotStuff 派生)の chain-BFT** と **BlockSTM 並列実行** を重視する。
- **Move language** の特徴は、リソース指向(資産はコピー / 破棄できない線形型)、形式検証との親和性、capability ベースのアクセス制御である。
- **金融ユースケース** として、Sui-native USDC(CCTP V2 対応)、Aptos-native USDC、RWA 実験、agent-payment インフラがある。

## Move language の起源と設計

| 性質 | Move | EVM Solidity との比較 |
|---|---|---|
| 資産モデル | Resources。線形型で、資産はコピーできない第一級の値 | ERC-20  / NFT の残高テーブル |
| ストレージ | アカウント単位 / オブジェクト単位。所有権を明示 | コントラクトのストレージスロット |
| 形式検証 | Move Prover を統合 | 標準ではなく外部ツールが必要 |
| Reentrancy | リソースモデルにより構造的に大部分を防止 | 歴史的に主要な攻撃面 |
| Capability access | 第一級の概念 | modifier / role パターン |

Move は Diem / Libra プロジェクトから生まれた。Meta がコンソーシアムを終了した後(2022)、主要な2つのエンジニアリンググループは次のように分かれた。

- **Mysten Labs** → Sui を構築
- **Aptos Labs** → Aptos を構築

両者は Move を継承したが、異なる方向に発展させた。**Sui Move** はオブジェクト中心ストレージを採用し、ID を持つオブジェクトを主要モデルにする。一方、**Aptos Move** はアカウント中心のリソースを持つ当初の Diem Move に近い。

## Sui と Aptos のアーキテクチャ上の分岐

| 次元 | Sui | Aptos |
|---|---|---|
| ストレージモデル | オブジェクト中心(各オンチェーン実体は所有者を持つオブジェクト) | アカウント / リソース(アカウントが型付きリソースを保持) |
| コンセンサス | Narwhal(メンプール)+ Bullshark(DAG-BFT) | AptosBFT(HotStuff 変種)、chain-BFT |
| 並列実行 | オブジェクトグラフベース。互いに独立したオブジェクトに触れる tx は自然に並列化 | BlockSTM。楽観的並行制御 + abort/retry |
| レイテンシ | owned-object tx はサブ秒、shared-object tx は約 3s | 約 1s の block time、約 1s の finality |
| Sponsored gas | ネイティブプリミティブ | ネイティブプリミティブ |
| zkLogin / OAuth onboarding | あり(zkLogin) | あり(Aptos Keyless) |
| TPS(ピーク) | 100k+ ベンチマーク | 100k+ ベンチマーク |
| 主要 DeFi | Cetus、NAVI、Scallop、Bluefin | Thala、Aries、Liquidswap、Econia |

システムレベルの詳細は [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs chain-BFT architecture]] を参照。

## 並列実行 · Move L1が重要な理由

Sui と Aptos はどちらも、EVM の逐次実行ボトルネックを避けるために **並列トランザクション実行** を追求している。

- **Sui のオブジェクトモデル** は並列性を宣言的に扱う。トランザクションが触れるオブジェクトを宣言し、スケジューラは互いに独立したオブジェクトの tx を並列実行する。
- **Aptos の BlockSTM** は楽観的方式である。すべての tx を並列実行し、競合を検出したうえで競合したものを再実行する。データベースの STM に近い。

Solana も並列実行を狙う([[systems/solana-firedancer-validator-economics|Firedancer validator]])が、事前に宣言された account access(Sealevel)を使うため、Aptos より Sui のモデルに近い。

AI agent ワークロード、すなわち多数のウォレット間で同時に発生する多数のマイクロトランザクションでは、並列実行型 L1 は、生のスループットで逐次型 L2 rollup より構造的に有利である([[systems/l2-agent-economics-arbitrum-base-op-comparison|L2 agent economics]] と比較)。

## 金融 / agent-payment ユースケース

| ユースケース | Sui | Aptos |
|---|---|---|
| Native USDC | あり(Circle 直接発行、CCTP V2 対応) | あり(Circle 直接発行、CCTP V2 対応) |
| Agent micropayments | オブジェクトモデル + sponsored gas が適合しやすい | BlockSTM のスループット + Keyless onboarding |
| RWA / tokenization | Bluefin / Cetus が機関向け機能を拡張 | USDT 相当の試みを含む複数の RWA パイロット |
| Gaming / SocialFi | 強い(Suiplay devices、Mysten エコシステム) | 強い(Aptos Connect、social-graph tools) |
| Cross-chain | Wormhole + native bridges。USDC は [[systems/cctp-v2-overview|CCTP V2]] | 同じ構成: Wormhole + CCTP V2  |
| Stablecoin issuance | Native USDC、USDT(将来的に) | Native USDC、USDT |

両チェーンは canonical USDC mobility のために [[systems/cctp-v2-overview|CCTP V2]] を統合しており、一般的なメッセージングでは Wormhole / [[systems/layerzero-v2-omnichain-messaging|LayerZero]] mesh に位置し、AI-agent UX に自然に対応する **sponsored-gas** と **Web2 friendly login** を提供する。

## 関連項目

- [[systems/INDEX]]
- [[systems/dag-bft-vs-chain-bft-architecture]]
- [[systems/bft-validator-economy-overview]]
- [[systems/threshold-bft-consensus-rust-implementations]]
- [[systems/solana-firedancer-validator-economics]]
- [[systems/cctp-v2-overview]]
- [[systems/layerzero-v2-omnichain-messaging]]
- [[systems/l2-agent-economics-arbitrum-base-op-comparison]]
- [[systems/canton-overview]]
- [[systems/hyperledger-besu-overview]]
- [[INDEX|FinWiki index]]

## 出典

- Sui protocol と Move language documentation: sui.io / docs.sui.io
- Aptos protocol: aptosfoundation.org / aptos.dev
- Move language reference: github.com/move-language/move
- Mysten Labs と Aptos Labs の research papers(Narwhal / Bullshark、BlockSTM)
