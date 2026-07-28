---
title: クロスチェーン 5 極対照マトリクス · CCTP V2 / CCIP / LayerZero v2 / Hyperlane / Wormhole の 9 次元
aliases: [cross chain five pole comparison matrix, cctp ccip layerzero hyperlane wormhole comparison, bridge protocol nine dimensions matrix]
domain: systems
created: 2026-05-24
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2026-10-27
confidence: likely
tags: [systems, cross-chain, bridge, cctp, ccip, layerzero, hyperlane, wormhole, comparison-matrix]
status: active
sources:
  - https://developers.circle.com/stablecoins/docs/cctp-getting-started
  - https://docs.chain.link/ccip
  - https://docs.layerzero.network/v2
  - https://docs.hyperlane.xyz/
  - https://docs.wormhole.com/
  - https://defillama.com/bridges
  - https://tokenterminal.com/
---

# クロスチェーン 5 極対照マトリクス · CCTP V2 / CCIP / LayerZero v2 / Hyperlane / Wormhole の 9 次元

## Wiki route

このページは [[systems/INDEX|systems index]] 配下の比較マトリクスであり、[[systems/cross-chain-four-poles-overview]] を親概観、[[systems/cross-chain-four-poles-selection-decision|クロスチェーン選定意思決定ツリー]] を実務上の選択軸として読む。個別プロトコルは [[systems/cctp-v2-overview]]、[[systems/chainlink-ccip-institutional-messaging]]、[[systems/layerzero-v2-omnichain-messaging]]、[[systems/hyperlane-overview]] と接続し、ステーブルコイン移転の需要側文脈は [[fintech/usd-stablecoin-interchange]] と照合する。

## Key facts

- CCTP V2 Fast Transfer 8-20 秒 finality(V1 は 10-20 分)· USDC のみ · 12+ chains で Arc / Sonic を含む ^[extracted]
- CCIP Active Risk Management(RMN)二層検証 · 2024-2025 SWIFT / DTCC / J.P. Morgan Kinexys パイロット稼働 · ~25 chains ^[extracted]
- LayerZero v2 が Lightweight Message Library + DVN modular を導入 · 100+ chains · 累計 messages 5B+ · 7B+ USD TVL 流通 ^[extracted]
- Hyperlane permissionless ISM(Interchain Security Module)· 2024.07 Eclipse mainnet · 任意の EVM/SVM/Move/Cosmos chain がセルフデプロイ可能 ^[extracted]
- Wormhole 19-of-19 Guardian 委員会 + 2024 ZK Verifier + Native Token Transfers(NTT)+ CCTP integration · Solana エコシステムで dominant · 30+ chains ^[extracted]

## Mechanism / How it works

**公開仕様に基づくアーキテクチャ対照マトリクス**:

| 次元 | CCTP V2 | CCIP | LayerZero v2 | Hyperlane | Wormhole |
|---|---|---|---|---|---|
| **Messaging モデル** | USDC burn → attestation → mint | arbitrary messaging と token transfer | Endpoint 上の OApp message / OFT | Mailbox message / Warp Route | VAA-based messaging / token bridge / NTT |
| **Verification 境界** | Circle attestation | CCIP network と risk-management controls | OApp が構成する DVN | アプリが選択する ISM | Guardian-signed VAA と統合 contract |
| **Destination 実行** | 呼び出し側または relayer が mint / hook を実行 | router / off-ramp が実行 | permissionless Executor または手動実行 | relayer が Mailbox に配達 | relayer は任意、受信アプリが VAA を消費 |
| **資産モデル** | Circle 発行 USDC | pool / token-manager 構成に依存 | OFT またはアプリ独自 | Warp Route またはアプリ独自 | wrapped bridge / NTT 等、製品別 |
| **アプリ側設定** | domain、finality、recipient、message version | lane、pool、receiver、rate limit | peer、MessageLib、DVN、confirmation、Executor | ISM、hook、validator、gas payment | emitter、chain、consistency、recipient |
| **手数料の確認点** | 両 chain gas と選択した transfer mode | quote が含む network / execution cost | DVN、Executor、destination gas | relay / destination gas と hook | source / destination gas と relayer option |
| **アップグレード確認点** | Circle contracts / attestation service の現行版 | router、lane、pool の owner / release notes | OApp owner / delegate と library migration | Mailbox / ISM / route owner | core / token bridge / NTT の governance と emitter |
| **適合しやすい範囲** | USDC-native transfer | 管理された messaging / token transfer | 構成可能な omnichain app | sovereign app-chain / rollup integration | multi-ecosystem messaging と token integration |
| **非対応の推定を避ける事項** | 対応 chain、所要時間、fee は live docs で確認 | lane、token、limit は live docs で確認 | default DVN を安全性の保証とみなさない | permissionless deployment を安全性の保証とみなさない | Guardian 数や incident record を固定値として扱わない |

Sources: ^[https://developers.circle.com/stablecoins/docs/cctp-getting-started] ^[https://docs.chain.link/ccip] ^[https://docs.layerzero.network/v2] ^[https://docs.hyperlane.xyz/] ^[https://docs.wormhole.com/]

**マトリクスの読み方**:横方向で 1 プロトコルの全次元プロファイル · 縦方向で同一次元の 5 極差異を見る。CCTP V2 は狭く深い(USDC のみだが極限まで最適化)· CCIP は institutional-grade(高価だがコンプライアンス)· LayerZero v2 は広く柔軟(カバレッジ最大だが DVN 設定即責任)· Hyperlane はセルフサービス permissionless · Wormhole は Solana 中心 + Guardian モデル遺産。

**典型的な組み合わせ**(実際の dApp は複数ブリッジを並用):
- **Stripe Tempo / Arc**:CCIP(institutional default)+ CCTP V2(USDC fast)+ LayerZero(long-tail dApp)
- **Coinbase Base**:CCTP V2(ネイティブ USDC)+ LayerZero(Stargate)+ CCIP(一部機関顧客)
- **Eclipse / Celestia**:Hyperlane(セルフデプロイ)+ Wormhole(Solana 流動性)
- **Solana 大手 DeFi**:Wormhole(default)+ CCTP V2(USDC) + LayerZero(EVM 接続)

## Origin & evolution

2021-2022 クロスチェーン構図は Wormhole / Multichain / Synapse など複数の無秩序競争 · セキュリティモデル差は不明瞭。2022 一連のブリッジ hack(Ronin $625M · Wormhole $325M · BSC $570M · Nomad $190M)がセキュリティを中核選定次元に押し上げた。2023 Chainlink CCIP ローンチ · oracle ブランドで institutional layer を切り取り。2024 LayerZero v2 が messaging library を再構築し modular DVN を導入 · Hyperlane メインネット起動で permissionless モードへ · Wormhole が ZK Verifier 追加で Guardian-only モデルの弱点を修正。

2025 CCTP V2 Fast Transfer + Hooks により USDC 調達がアトミック primitive(8-20 秒)となり · USDC シナリオでの汎用ブリッジの価値を奪った。2026-Q1 5 極構図はタスク専門特化マトリクスに固定 · 主流 dApp は同時に 3-4 ブリッジを統合しシナリオでルーティング。Wormhole の NTT(Native Token Transfers)+ CCTP integration は relevance 再構築の重要な施策 · Wormhole を「Solana ブリッジだけ」ではなくする。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/cross-chain-four-poles-overview|クロスチェーン 4 極アーキテクチャ · 概観]]
- [[systems/cross-chain-four-poles-selection-decision|クロスチェーン選定意思決定ツリー]]
- [[systems/cctp-v2-overview|CCTP V2 Overview]]
- [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP Institutional Messaging]]
- [[systems/layerzero-v2-omnichain-messaging|LayerZero v2 Omnichain Messaging]]
- [[systems/hyperlane-overview|Hyperlane Overview]]
- [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero/CCIP 路線対照]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton 公開/プライベートチェーン対峙]]
- [[fintech/usd-stablecoin-interchange|USD Stablecoin Interchange]]
<!-- /wiki-links:managed -->

## Sources

- Circle CCTP V2 docs · https://developers.circle.com/stablecoins/docs/cctp-getting-started
- Chainlink CCIP docs · https://docs.chain.link/ccip
- LayerZero v2 docs · https://docs.layerzero.network/v2
- Hyperlane docs · https://docs.hyperlane.xyz/
- Wormhole docs · https://docs.wormhole.com/
- DefiLlama bridges analytics · https://defillama.com/bridges
- Token Terminal cross-chain metrics · https://tokenterminal.com/
