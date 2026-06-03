---
source: systems/ibc-cosmos-cross-chain
source_hash: 52c41bac10ccc40a
lang: ja
status: machine
fidelity: ok
title: "IBC · Cosmos Inter-Blockchain Communication protocol"
translated_at: 2026-06-03T01:06:46.362Z
---
# IBC · Cosmos Inter-Blockchain Communication protocol

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] 配下に位置する。ピア比較・対照では [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]] と [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole matrix]]、代替的な trust-minimized モデルでは [[systems/cctp-v2-overview|CCTP V2]]、より広い相互運用性比較では [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero / CCIP]] と照らして読む。

## 重要ポイント

- **IBC** は Cosmos SDK ネイティブのクロスチェーンメッセージングプロトコルであり、Cosmos Hub では 2021
 からメインネット稼働している
- 信頼モデル: **各チェーン上の light-client 検証**。各チェーンが相手チェーンの light client を実行し、header / proof をローカルで検証する
- Hub-and-spoke トポロジー: Cosmos Hub は接続のアンカーとして機能するが、IBC 自体は直接の chain-to-chain プロトコルであり、中央集権的な hub は必須ではない
- **IBC v1** は token transfer(ICS-20)を中心にしていた。**IBC v2 (Eureka, 2024-2025)** は軽量 light-client adapter により Ethereum + non-Cosmos chain へ拡張する
- 80+ のチェーンで本番導入され、2025-2026

までに累計 transfer volume は数百億 USD 規模に達した

## 信頼モデル — 両側の light client

IBC のセキュリティ論拠は、各チェーンが第三者仲介者ではなく、**相手チェーンの consensus** を直接検証する点にある。流れは次のとおり。

```
Chain A (source)                          Chain B (destination)
─────────────────                         ─────────────────────
1. App calls IBC: send packet
2. IBC commits packet to state
3. Header + commitment proof gossiped ──► 4. Chain B light client of A
                                              verifies header (Tendermint sigs)
                                          5. Verifies Merkle proof of packet
                                          6. Delivers packet to receiving app
                                          7. Sends ACK / timeout back ──────►
```

信頼前提は **source chain の consensus**(例: Cosmos Hub の BFT validator set)に集約される。第三者 relayer は message を偽造できない。relayer は data を移動するだけで、検証はオンチェーンで行われる。

これは次のモデルと明確に対照的である。

- [[systems/layerzero-v2-omnichain-messaging|LayerZero]]: configurable Oracle + Relayer の trust split
- [[systems/chainlink-ccip-institutional-messaging|CCIP]]: Chainlink DON committee
- [[systems/hyperlane-overview|Hyperlane]]: pluggable ISM(Interchain Security Module)
- [[systems/cctp-v2-overview|CCTP]]: Circle attestation service(single signer)

## IBC v1  と IBC v2



| 観点 | IBC v1  | IBC v2 (Eureka) |
|---|---|---|
| 接続チェーン | Cosmos SDK + 少数の adapter | Cosmos + Ethereum + EVM L2s + 一部の non-Cosmos |
| Light client overhead | Tendermint-light-client native | Solidity light-client + lightweight headers |
| Token standard | ICS-20  fungible | 同じ。より広い cross-VM adapter contract を伴う |
| 汎用 message passing | 可能(ICS-04  channels) | 可能。EVM target app へ拡張 |
| 稼働開始 | 2021  | 2024-2025 (mainnet expansion) |

IBC v2の Eureka release は、Ethereum 側の light-client contract(Tendermint signature を検証)を導入し、Cosmos chain と Ethereum が外部 bridge committee なしで end-to-end 検証付き message exchange を行えるようにする。

## 他の相互運用性プロトコルとの比較

| プロトコル | 信頼モデル | トポロジー | 本番利用 |
|---|---|---|---|
| **IBC** | 各側の light client | Mesh(any-to-any) | 80+ chains、Cosmos のネイティブ標準 |
| **CCIP** ([[systems/chainlink-ccip-institutional-messaging|see entry]]) | Chainlink DON + risk-mgr | Chainlink network 経由の hub-and-spoke | 機関向けで好まれる |
| **LayerZero** ([[systems/layerzero-v2-omnichain-messaging|see entry]]) | Oracle + Relayer split | 直接 any-to-any | EVM で広範に採用 |
| **Hyperlane** ([[systems/hyperlane-overview|see entry]]) | Pluggable ISM(EigenLayer AVS など) | Permissionless mesh | Modular、ISM をカスタマイズ可能 |
| **CCTP** ([[systems/cctp-v2-overview|see entry]]) | Circle attestation | Circle 経由の hub | USDC 専用、高速 |

読み方: side-by-side では [[systems/cross-chain-five-pole-comparison-matrix|five-pole comparison matrix]]、risk pricing では [[systems/cross-chain-bridge-security-insurance-matrix-2026|bridge security insurance matrix]] を参照。

## IBC channel と packet lifecycle

1. **Connection handshake** — ConnOpenInit, ConnOpenTry, ConnOpenAck, ConnOpenConfirm
2. **Channel handshake** — ChanOpenInit … ChanOpenConfirm(アプリペアごとに 1 channel)
3. **Packet send** — application が IBC を呼び出し、packet が commit される
4. **Relayer transport** — off-chain relayer が読み取り、header + packet を gossip する
5. **Packet receive** — destination chain が検証し、app callback を実行する
6. **Acknowledgement / timeout** — ACK が戻る。window 内に受信されなければ timeout

Channel は app-level である。ICS-20 (fungible token)、ICS-721 (NFT)、Interchain Accounts(ICS-27)、Interchain Queries(ICQ)、custom app 用の任意の ICS-04  channels がある。

## 起源と発展

IBC specification は 2018 に Cosmos / Tendermint community で始まり、Cosmos Hub で IBC が有効化された March 2021に mainnet が稼働した。2022-2023 にかけて、広範な token-transfer 採用と Interchain Accounts により protocol は成熟した。2024-2025 の **Eureka** release は戦略的転換点だった。IBC はもはや Cosmos-only ではなく、light-client adapter を Ethereum + EVM L2s へ拡張することで **汎用 interop standard** として競争する。

Cosmos は金融面でも興味深いエコシステムである。Noble(Cosmos の USDC issuer)、dYdX(以前は Ethereum、現在は Cosmos appchain)、Celestia のようなチェーンが IBC mesh 上にある。Celestia の観点では [[systems/data-availability-celestia-eigenda-blob-comparison|DA layer comparison]] とあわせて読む。

## 関連項目

- [[systems/INDEX]]
- [[systems/cross-chain-four-poles-overview]]
- [[systems/cross-chain-five-pole-comparison-matrix]]
- [[systems/cross-chain-bridge-security-insurance-matrix-2026]]
- [[systems/cctp-v2-overview]]
- [[systems/layerzero-v2-omnichain-messaging]]
- [[systems/chainlink-ccip-institutional-messaging]]
- [[systems/hyperlane-overview]]
- [[systems/hyperlane-vs-layerzero-ccip]]
- [[systems/polkadot-xcm-parachain-messaging]]
- [[systems/data-availability-celestia-eigenda-blob-comparison]]
- [[INDEX|FinWiki index]]

## 出典

- ibc.cosmos.network protocol specification and tutorials.
- github.com/cosmos/ibc and github.com/cosmos/ibc-go for spec + reference implementation.
- docs.cosmos.network for SDK / chain integration guides.
- Eureka release notes and IBC v2  adapter documentation.
