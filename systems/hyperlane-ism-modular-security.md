---
title: Hyperlane Interchain Security Modules(ISM)· プラガブルな検証レイヤー
aliases: [hyperlane-ism, modular-ism, hyperlane-security]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [systems, cross-chain, bridge, ism, hyperlane, security]
sources: []
status: candidate
---

# Hyperlane Interchain Security Modules(ISM)· プラガブルな検証レイヤー


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- 5 種類以上の標準 ISM タイプから選択可能 ^[extracted]
- MultisigISM がデフォルト · LayerZero DVN に類似 ^[extracted]
- OptimisticISM は 7 日間のチャレンジ期間 + watcher を導入 ^[extracted]
- EigenLayerISM はクロスチェーンセキュリティを Ethereum L1 restaking から継承 ^[extracted]
- AggregationISM は複数 ISM の組み合わせを許容(例:multisig + optimistic の二重) ^[extracted]
- RoutingISM は message type に応じて異なる ISM へルーティング ^[extracted]

## Mechanism / How it works

**主要な ISM タイプ**:

| ISM | 検証方式 | 適用シナリオ |
|---|---|---|
| **MultisigISM** | N-of-M 署名 · LayerZero DVN に類似 | デフォルトオプション · セキュリティと速度のバランス |
| **OptimisticISM** | 7 日間のチャレンジ期間 + watcher | 高額・低頻度のクロスチェーン · OP withdrawal に類似 |
| **CCIPReadISM** | Chainlink CCIP と協調 | Chainlink の裏付けを得つつ Hyperlane インフラを使う場合 |
| **AggregationISM** | 複数 ISM の組み合わせ(multisig + optimistic の二重) | 極めて高いセキュリティ要件(機関 / 大口) |
| **RoutingISM** | message type に応じて異なる ISM へルーティング | 複雑なアプリ · メッセージ種別ごとに異なるセキュリティレベル |
| **EigenLayerISM** | Restaking-secured · ETH 担保 | Ethereum L1 経済セキュリティを継承したい場合 |

**ISM 選択のトレードオフ**:
- **速度 vs セキュリティ**:multisig は速いが単一障害点リスクあり · optimistic はセキュアだが 7 日間の遅延あり
- **コスト vs 信頼**:CCIPRead は Chainlink の信頼を借りるがコスト増 · 自社運営の multisig は安価だが validator を自分で運営する必要あり
- **シンプル vs 柔軟**:単一 ISM はシンプル · Aggregation はセキュアだが gas 高

**EigenLayerISM の特別な意義**:「暗号経済セキュリティ = ETH 担保」モデルをクロスチェーン検証に導入する。validator がステークした ETH を EigenLayer 経由で Hyperlane 検証者に restake —— 検証エラーが発生した場合 · slash は EigenLayer 層で発生し · 損失は最終的に Ethereum L1 stake が負担する。これは restaking と cross-chain security を直接結びつけたものであり · モジュラーミドルウェア + restaking 概念が初期に実現した事例の一つである([[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャー]] を参照)。

## Origin & evolution

ISM のモジュラー化は Hyperlane 2022 年の改名時のコア設計である —— チームは「画一的なクロスチェーンセキュリティモデル」ではすべてのアプリの要求を満たせないと認識した。初期は MultisigISM のみだったが,2023-2024 年にかけて OptimisticISM / CCIPReadISM / AggregationISM が順次追加された。

2024 年の EigenLayer 統合は ISM モジュラー化の重要なマイルストーンであった —— Hyperlane が任意の verification primitive と互換性を持ち · 自社 validator セットに限らないことを示した。これは LayerZero DVN のクローズド型 verifier と対照的である。

## Counterpoints

**ISM 選択の負担**:ほとんどの dApp 開発者は security の専門家ではなく · 5 種類以上の ISM から選ばせること自体が設計リスクである。LayerZero の「チームが DVN を構成する」モデルは一般開発者にとってより親しみやすい。

**Aggregation の複雑度**:複数 ISM の組み合わせは理論上はセキュリティを高めるが · gas コストと遅延が累積し · 実際の採用率は高くない。

**EigenLayerISM の依存チェーン**:クロスチェーンセキュリティを ETH restaking から継承するということは · Hyperlane セキュリティ ⊂ EigenLayer セキュリティ ⊂ Ethereum L1 セキュリティということを意味する —— チェーンが長く · どこか 1 か所で問題が発生すると伝播する([[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 二分]] の暗号ネイティブ側におけるシステミックリスク伝播経路と対照)。

## Open questions

- 実際の展開において各 ISM タイプの採用比率は?
- EigenLayerISM の slashing 有効化後における実際の slash イベントは?
- ISM 間のポータビリティ(multisig から EigenLayerISM へのアップグレード)はスムーズか?
- ISM 設計の次世代進化方向(ZK ISM はいつ実現するか)?([[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン五極対比マトリクス]] における各方式の信頼前提の同方向進化と対照)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperlane-overview|Hyperlane Overview]]
- [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero/CCIP]]
- [[systems/eigenlayer-avs-mechanism|EigenLayer AVS Mechanism]]
<!-- /wiki-links:managed -->

## Sources

- Hyperlane ISM docs(docs.hyperlane.xyz/docs/protocol/ISM)
