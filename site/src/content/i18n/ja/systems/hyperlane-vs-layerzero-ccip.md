---
source: systems/hyperlane-vs-layerzero-ccip
source_hash: 71656fd6ea52f8bf
lang: ja
status: machine
fidelity: ok
title: "Hyperlane と LayerZero / CCIP · パーミッションレス型と制限型ルートの対照"
translated_at: 2026-06-03T01:06:46.356Z
---
# Hyperlane と LayerZero / CCIP · パーミッションレス型と制限型ルートの対照

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] 配下に位置する。ピア比較・対照文脈として [[systems/cross-chain-four-poles-overview|cross chain four poles overview]] を参照し、より広いシステム上および規制上の境界については [[fintech/INDEX|fintech index]] とあわせて読む。

## 主要事実

- Hyperlane は完全なパーミッションレス型であり、誰でもフォークしてデプロイできる。^[extracted]
- LayerZero は半制限型であり、チームが新規チェーンを評価する。DVN はアプリ側で選択できる。^[extracted]
- CCIP は強い制限型であり、Chainlink DON が展開し、RMN がリスク管理を担う。^[extracted]
- Cosmos / Solana / app-chain では Hyperlane が既定路線になりやすい。LayerZero は非 EVM チェーンでの展開が遅い。^[extracted]

## 仕組み

**三大プロトコルの詳細対照**:

| 観点 | LayerZero | Chainlink CCIP | Hyperlane |
|---|---|---|---|
| 展開モデル | 制限型（チーム評価） | 強い制限型（DON 展開） | パーミッションレス |
| 検証方式 | DVN（アプリ側で選択可能） | OCR 委員会 + RMN | モジュール型 ISM（アプリ側で自選） |
| 非 EVM サポート | 遅い · EVM を主軸 | ほぼなし | 強い · Cosmos / Solana / Move を第一級に扱う |
| 機関の裏付け | 強い（Stargate など DeFi 大手） | 最強（Chainlink） | 弱い（開発者向け） |
| セキュリティ責任 | プロトコル側が部分的に裏付ける | Chainlink が全面的に裏付ける | 完全にアプリ開発者の責任 |
| 適合シナリオ | 主流 EVM dApp | 機関の高額クロスチェーン用途 | ロングテール / app-chain / 非 EVM |

**Tempo / Arc の選択ロジック**: 新興 L1 として、LayerZero や CCIP チームの承認タイムテーブルを待つことはできない。Hyperlane のパーミッションレス展開により、Tempo / Arc は立ち上げと同時に EVM 流動性へ接続できる。ただし同時に、より多くの dApp にリーチするため、LayerZero / CCIP の並行統合も行う可能性があり、三者併存の構図となる。

**非 EVM 流動性の重要なボトルネック**: Cosmos / Solana / Move などの非 EVM チェーンが EVM エコシステム（USDC / USDT の流動性は主に EVM 上）に接続する際、LayerZero / CCIP の展開は遅く、Hyperlane が事実上の標準となっている。金融機関シナリオでの浸透については [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC 機関対照]] と対照する。これにより Hyperlane はロングテール市場で先行優位を持つ。

## 起源と発展

三大プロトコルは同時期（2021-2022）に立ち上がったが、その後の方向性は大きく異なる。

- LayerZero は 2021-2022 に大規模調達と積極的なマーケティングを行い、初期マインドシェアでリードした。
- CCIP は 2022-2023 に Chainlink が主導し、Chainlink 既存の機関関係を活用した。
- Hyperlane は 2021-2022 に立ち上がった。初期は無名だったが、2023-2024 に Cosmos / Solana 市場で巻き返した。

2024-2026 年にかけて構図は安定した。LayerZero は主流 EVM dApp を主導し、CCIP は機関の高額領域を主導し、Hyperlane はロングテール / 非 EVM / app-chain を主導する。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/hyperlane-overview|Hyperlane Overview]]
- [[systems/hyperlane-ism-modular-security|Hyperlane ISM]]
- [[systems/cctp-v2-overview|CCTP V2(USDC 専用 bridge 対照)]]
<!-- /wiki-links:managed -->

## 出典

- LayerZero docs · Chainlink CCIP docs · Hyperlane docs
- Hyperlane docs — https://docs.hyperlane.xyz/
- LayerZero V2  docs — https://docs.layerzero.network/v2

- Chainlink CCIP docs — https://docs.chain.link/ccip
