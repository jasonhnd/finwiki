---
source: systems/layerzero-v2-omnichain-messaging
source_hash: 7d7818745cbcaeb5
lang: ja
status: machine
fidelity: ok
title: "LayerZero v2  · DVN 構成可能なオムニチェーン・メッセージングプロトコル"
translated_at: 2026-06-03T01:06:46.346Z
---
# LayerZero v2  · DVN 構成可能なオムニチェーン・メッセージングプロトコル

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] に属する。ピア比較・対照の文脈では [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] と合わせて読み、より広いシステム境界・規制境界については [[fintech/INDEX|fintech index]] を参照する。

## 主要事実

- 100+ のチェーンをカバーする。EVM、Aptos、Solana、Tron、Cosmos などを含み、カバレッジは最も広い ^[extracted]
- DVN モデルでは、アプリが検証者セットを自選し、N-of-M しきい値を設定できる。セキュリティスタックを差し替え可能 ^[extracted]
- Stargate の月平均 USDT/USDC クロスチェーン流量は $10B+ ^[extracted]
- 統合先には Tapioca / Radiant / Cake DeFi など、DeFi のロングテールが含まれる ^[extracted]
- 治理は LayerZero Labs によるプライベート主導で、分散化されていない。Chainlink との対照点 ^[extracted]

## 仕組み

各チェーン上に immutable な **Endpoint contract** をデプロイし、send / receive を処理する。source chain から発行されたメッセージは、アプリケーションが事前指定した **DVN の組み合わせ** によって検証される。たとえば「Polyhedra(zk) + Google Cloud(主流署名) + Animoca(権益署名)から 3 つ中 2 つ」を選ぶことで、N-of-M マルチシグの quorum を形成できる。**Executor** は目標チェーンで deliver を行い、目標チェーンの gas を支払う。

アプリ層は DVN を自由に組み合わせられるため、LayerZero は低リスクシナリオ(単一 DVN で十分)も、高価値シナリオ(zk + マルチ署名 + 経済インセンティブ quorum)もサポートできる。Stargate はプロトコルの上に liquidity pool + token model を加え、USDC/USDT クロスチェーンの retail 主導地位を形成している。[[fintech/usd-stablecoin-interchange|USD ステーブルコインクロスチェーン交換]] におけるマルチブリッジ・トラフィック分布と対照。

## 起源と展開

2021 年に LayerZero v1 がローンチした。初期は「デフォルトの oracle + relayer 二重署名が結託しうる」と批判された。2024 年に v2 が DVN モデルを発表し、セキュリティ判断をアプリに委ねた。同時に Lightweight Verifier Chain を導入した。2025-2026 年にはチェーンカバー数が 100 を突破し、Polyhedra / Google Cloud などの DVN provider とエコシステムを形成した。

Stargate は v2 時代も依然として USDT/USDC retail クロスチェーンの dominant pool であり、月平均 $10B+ を扱う。LayerZero Labs は依然としてプライベート企業主導の治理である。Chainlink の分散化ネットワークとは路線が分化しており、LayerZero は規模と柔軟性で勝負し、Chainlink は機関信頼と統一保険で勝負する。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP · 機関対照]]
- [[systems/cross-chain-four-poles-overview|クロスチェーン 4 極フレーム(CCTP/CCIP/LayerZero/Wormhole)]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC 機関対照]]
<!-- /wiki-links:managed -->

## 出典

- LayerZero V2  docs — https://docs.layerzero.network/v2
