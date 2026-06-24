---
title: LayerZero v2 · DVN 構成可能なオムニチェーンメッセージングプロトコル
aliases: [layerzero-v2-omnichain-messaging, layerzero, layerzero-dvn, stargate]
domain: systems
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-06-24
review_by: 2026-09-22
confidence: certain
tags: [systems, cross-chain, layerzero, dvn, omnichain, stargate]
sources:
  - https://docs.layerzero.network/v2
status: active
---

# LayerZero v2 · DVN 構成可能なオムニチェーンメッセージングプロトコル

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## Key facts

- 100+ チェーンをカバー(EVM + Aptos + Solana + Tron + Cosmos 等)、最広範 ^[extracted]
- DVN モデル:アプリが検証者セットを自選 + N-of-M しきい値 · セキュリティスタックを差し替え可能 ^[extracted]
- Stargate の月平均 USDT/USDC クロスチェーン流量 $10B+ ^[extracted]
- 統合先には Tapioca / Radiant / Cake DeFi 等の DeFi ロングテールを含む ^[extracted]
- 治理は LayerZero Labs によるプライベート · 分散化されていない(Chainlink との対照) ^[extracted]

## Mechanism / How it works

各チェーン上に immutable な **Endpoint contract** をデプロイし、send / receive を処理する。source chain から発行されたメッセージは、アプリケーションが事前指定した **DVN の組み合わせ** によって検証される —— 例えば「Polyhedra(zk) + Google Cloud(主流署名) + Animoca(権益署名)から 3 つ中 2 つ」を選ぶことで N-of-M マルチシグの quorum を形成する。**Executor** が目標チェーンで deliver を行い、目標チェーンの gas を支払う。アプリ層は DVN を自由に組み合わせられるため、LayerZero は低リスクシナリオ(単一 DVN で十分)も、高価値シナリオ(zk + マルチ署名 + 経済インセンティブ quorum)も両方サポートできる。Stargate はプロトコルの上に liquidity pool + token model を加え、USDC/USDT クロスチェーンの retail 主導地位を形成している([[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]] におけるマルチブリッジトラフィック分布と対照)。

## Origin & evolution

2021 年に LayerZero v1 がローンチ · 初期は「デフォルトの oracle + relayer 二重署名が結託しうる」と批判された。2024 年に v2 が DVN モデルを発表 · セキュリティ判断をアプリに委ね · 同時に Lightweight Verifier Chain を導入。2025-2026 年にチェーンカバー数が 100 を突破 · Polyhedra / Google Cloud 等の DVN provider とエコシステムを形成。Stargate は v2 時代も依然として USDT/USDC retail クロスチェーンの dominant pool · 月平均 $10B+。LayerZero Labs は依然としてプライベート企業の治理 → Chainlink の分散化ネットワークとは路線分化:LayerZero は規模 + 柔軟性で勝負 · Chainlink は機関信頼 + 統一保険で勝負。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP · 機関対照]]
- [[systems/cross-chain-four-poles-overview|クロスチェーン 4 極フレーム(CCTP/CCIP/LayerZero/Wormhole)]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC 機関対照]]
<!-- /wiki-links:managed -->

## Sources

- LayerZero V2 docs — https://docs.layerzero.network/v2
