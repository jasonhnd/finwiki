---
source: systems/hyperlane-ism-modular-security
source_hash: eb41f86a257a0ba3
lang: ja
status: machine
fidelity: ok
title: "Hyperlane Interchain Security Modules(ISM)· プラガブルな検証レイヤー"
translated_at: 2026-06-03T01:06:46.350Z
---
# Hyperlane Interchain Security Modules(ISM)· プラガブルな検証レイヤー

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] 配下に位置する。ピア比較・対照の文脈では [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] とあわせて読み、より広いシステム境界・規制境界については [[fintech/INDEX|fintech index]] を参照する。

## 主要事実

- 5 種類以上の標準 ISM タイプから選択可能 ^[extracted]
- MultisigISM がデフォルト · LayerZero DVN に類似 ^[extracted]
- OptimisticISM は 7 日間のチャレンジ期間 + watcher を導入 ^[extracted]
- EigenLayerISM はクロスチェーンセキュリティを Ethereum L1 restaking から継承 ^[extracted]
- AggregationISM は複数 ISM の組み合わせを許容(例:multisig + optimistic の二重) ^[extracted]
- RoutingISM は message type に応じて異なる ISM へルーティング ^[extracted]

## ISM セキュリティ構成

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
- **速度 vs セキュリティ**:multisig は速いが単一障害点リスクがある · optimistic はセキュアだが 7 日間の遅延がある
- **コスト vs 信頼**:CCIPRead は Chainlink の信頼を借りるがコスト増 · 自社運営の multisig は安価だが validator を自分で運営する必要がある
- **シンプル vs 柔軟**:単一 ISM はシンプル · Aggregation はセキュアだが gas が高い

**EigenLayerISM の特別な意義**:「暗号経済セキュリティ = ETH 担保」モデルをクロスチェーン検証に導入する。validator がステークした ETH を EigenLayer 経由で Hyperlane 検証者に restake し、検証エラーが発生した場合、slash は EigenLayer 層で発生し、損失は最終的に Ethereum L1 stake が負担する。これは restaking と cross-chain security を直接結びつけたものであり、モジュラーミドルウェア + restaking 概念が初期に実現した事例の一つである([[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャー]] を参照)。

## 起源と発展

ISM のモジュラー化は Hyperlane 2022 年の改名時に置かれたコア設計である。チームは「画一的なクロスチェーンセキュリティモデル」ではすべてのアプリの要求を満たせないと認識していた。初期は MultisigISM のみだったが、2023-2024 年にかけて OptimisticISM / CCIPReadISM / AggregationISM が順次追加された。

2024 年の EigenLayer 統合は ISM モジュラー化の重要なマイルストーンであった。Hyperlane が任意の verification primitive と互換性を持ち、自社 validator セットに限られないことを示したためである。これは LayerZero DVN のクローズド型 verifier と対照的である。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperlane-overview|Hyperlane Overview]]
- [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero/CCIP]]
- [[systems/eigenlayer-avs-mechanism|EigenLayer AVS Mechanism]]
<!-- /wiki-links:managed -->

## 出典

- Hyperlane ISM docs(docs.hyperlane.xyz/docs/protocol/ISM)
- Hyperlane docs — https://docs.hyperlane.xyz/
