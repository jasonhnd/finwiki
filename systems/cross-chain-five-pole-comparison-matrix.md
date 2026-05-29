---
title: クロスチェーン 5 極対照マトリクス · CCTP V2 / CCIP / LayerZero v2 / Hyperlane / Wormhole の 9 次元
aliases: [cross chain five pole comparison matrix, cctp ccip layerzero hyperlane wormhole comparison, bridge protocol nine dimensions matrix]
domain: systems
created: 2026-05-24
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-20
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

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-four-poles-overview]] as the parent overview and [[systems/cross-chain-four-poles-selection-decision|クロスチェーン選定意思決定ツリー]] for matched protocol selection. Pair with each pole's standalone entry — [[systems/cctp-v2-overview]] · [[systems/chainlink-ccip-institutional-messaging]] · [[systems/layerzero-v2-omnichain-messaging]] · [[systems/hyperlane-overview]] — and read it against [[fintech/usd-stablecoin-interchange]] for the stablecoin transfer context that drives ≥60% of cross-chain volume. Wormhole has no standalone entry yet (TBD).

## Key facts

- CCTP V2 Fast Transfer 8-20 秒 finality(V1 は 10-20 分)· USDC のみ · 12+ chains で Arc / Sonic を含む ^[extracted]
- CCIP Active Risk Management(RMN)二層検証 · 2024-2025 SWIFT / DTCC / J.P. Morgan Kinexys パイロット稼働 · ~25 chains ^[extracted]
- LayerZero v2 が Lightweight Message Library + DVN modular を導入 · 100+ chains · 累計 messages 5B+ · 7B+ USD TVL 流通 ^[extracted]
- Hyperlane permissionless ISM(Interchain Security Module)· 2024.07 Eclipse mainnet · 任意の EVM/SVM/Move/Cosmos chain がセルフデプロイ可能 ^[extracted]
- Wormhole 19-of-19 Guardian 委員会 + 2024 ZK Verifier + Native Token Transfers(NTT)+ CCTP integration · Solana エコシステムで dominant · 30+ chains ^[extracted]

## Mechanism / How it works

**9 次元対照マトリクス**(2026-Q2 状態):

| 次元 | CCTP V2 | CCIP | LayerZero v2 | Hyperlane | Wormhole |
|---|---|---|---|---|---|
| **Messaging モデル** | Burn-mint(USDC のみ)· Circle オフチェーン attestation 署名 | Oracle DON + Risk Management Network · Lock-mint または汎用 messaging | DVN M-of-N(アプリ設定)· Lightweight ULN · 汎用 messaging | Permissionless · ISM 顧客選択(multisig/POS/optimistic/ZK)· Lock-mint または messaging | Guardian 19-of-19 マルチシグ + ZK Verifier · Lock-mint + Burn-mint(NTT) |
| **Security モデル** | Circle 中央集権 attester · 規制コンプライアンス背書 | RMN 独立委員会(2-of-N veto) + Chainlink OCR · 二層冗長 | DVN 集合(default LayerZero Labs + Google Cloud + Polyhedra ZK)· 顧客変更可能 | Modular · default multisig · オプション Eigen restaking / ZK / optimistic | Guardian set 19 ノード(Jump / Everstake / Forbole 等)· ZK Verifier 補完 |
| **Settlement 保証** | Fast Transfer 8-20 秒 · Standard 10-20 分 · 不可逆 | 通常 7-20 分(risk window 含む)· 高額は delay 設定可能 | DVN 設定依存 · 最低単 DVN 数秒 · 高セキュリティマルチ DVN 分単位 | ISM 決定 · multisig 1-2 ブロック · optimistic 30 分 challenge window | ~15 分 finality(source chain finality 待ち)+ Guardian 署名 |
| **チェーンカバレッジ(2026)** | 12+ chains(EVM L1/L2 主流 + Arc + Sonic + Aptos)· 全 EVM 中心 | ~25 chains(EVM L1/L2 + 一部 non-EVM 例えば Solana 試験中) | 100+ chains(EVM 全面 + Aptos / Sui / Solana / TON / Tron) | 任意 chain がセルフデプロイ可能 · 主推 Eclipse / Celestia / Cosmos / SVM long-tail | 30+ chains(Solana 強 + EVM 全面 + Sui / Aptos / Near / Algorand) |
| **機関採用** | Circle ネイティブ USDC · Coinbase · Stripe Tempo · MoneyGram · 規制フレンドリー | SWIFT messaging パイロット · DTCC Smart NAV · J.P. Morgan Kinexys · ANZ A$DC · BNY · 強 TradFi | Stargate / Pendle / LiFi / Trader Joe · 一部 fintech(PayPal PYUSD bridging) | Eclipse / Celestia / Renzo / Karak · DeFi-native long-tail · 機関採用弱 | Jito / MakerDAO / Lido · Solana 大手アプリ · Uniswap cross-chain governance |
| **Gas/費用** | ユーザーが source chain gas + Circle Fast Transfer fee を支払う(~$0.10-1)· USDC 計価 | ユーザーが LINK または native token を支払う · ダブル fee(execution + risk verification)· 高額機関グレード | ユーザーが source gas + DVN fee + destination execution を支払う(任意 token 計費 via Pay Master) | ユーザーが source gas + Hyperlane gas oracle 推定 destination を支払う · 任意 token · 自営 relayer で節約可能 | ユーザーが source gas + Wormhole fee + destination gas drop(NTT)· VAA リレーは第三者代行可能 |
| **Governance / アップグレード** | Circle Inc.(centralized · OFAC + §501 拘束) | Chainlink Foundation + DAO 提案 + RMN 独立委員会(Smartcon ガバナンス) | LayerZero Labs(チームガバナンス · ZRO token は将来分権) | Hyperlane DAO + HYPER token(2024 ローンチ)· permissionless 改修は ISM-level 顧客同意必要 | Wormhole DAO + W token(2024)· Guardian set 変更は ≥2/3 投票必要 · Foundation 調整 |
| **過去事件 / 監査** | Circle 単点信頼は未だ破られず · 監査 OpenZeppelin / Halborn / ChainSecurity · 2025 SOC2 | 重大 incident なし · Chainlink 複数回監査 · RMN 独立監査 · CertiK / Trail of Bits | 2024.01 一時的 DVN 設定バグ(資金損失なし)· 複数回監査 Zellic / Trail of Bits · DVN diversity 防御深度 | 2024 Eclipse メインネット稼働後重大 incident なし · audits Trail of Bits / Zellic / OpenZeppelin · permissionless リスクは ISM 選択次第 | **2022.02 Solana ブリッジで $325M 盗難**(Jump Crypto 全額補填)· 2024 ZK Verifier 稼働後セキュリティアップグレード · Guardian incentive alignment は継続的議論 |
| **最適ユースケース** | 純 USDC クロスチェーン調達 · institutional 規制対応ステーブルコイン transfer | Bank-grade トークン化資産 settlement · DvP / PvP · 高額低頻度 | General-purpose dApp omnichain · Stargate スタイル aggregator · long-tail token bridging | App-chain / rollup self-sovereign デプロイ · 非 EVM ファーストクラス · permissionless ISM tradeoff | Solana 中心 cross-chain · NFT bridge · DAO governance messaging · NTT が wrapped token を置換 |

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
