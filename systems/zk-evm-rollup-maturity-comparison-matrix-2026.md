---
title: ZK-EVM Rollup 成熟度対照マトリクス 2026 · 9 個の rollup の proving system / TVL / DA / decentralization
aliases: [zk-evm rollup maturity matrix 2026, zk rollup comparison 2026, polygon zksync starknet scroll linea taiko matrix, zk-evm proving system tvl da decentralization comparison, ethereum l2 zk rollup landscape 2026]
domain: systems
created: 2026-05-25
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-25
confidence: likely
tags: [systems, matrix, zk-evm, rollup, ethereum, l2, polygon, zksync, starknet, scroll, linea, taiko, kakarot, miden, immutable, agglayer]
status: active
sources:
  - https://polygon.technology/agglayer
  - https://docs.zksync.io/
  - https://docs.starknet.io/
  - https://docs.scroll.io/
  - https://docs.linea.build/
  - https://docs.taiko.xyz/
  - https://docs.kakarot.org/
  - https://0xmiden.github.io/miden-docs/
  - https://docs.immutable.com/
  - https://l2beat.com/scaling/summary
  - https://defillama.com/chains/Rollup
  - https://ethereum.org/en/developers/docs/scaling/zk-rollups/
---

# ZK-EVM Rollup 成熟度対照マトリクス 2026 · 9 個の rollup の proving system / TVL / DA / decentralization

## TL;DR

- 9 個の active ZK-EVM / ZK-rollup について 2026-Q2 における **EVM equivalence · proving system · proof time · gas cost · TVL · mainnet maturity · decentralization · ecosystem · DA layer** の 9 軸で対照
- **EVM equivalence ladder**(Vitalik Type 1-4):Linea/Scroll → Type 2(EVM-equivalent · 99%)· Polygon zkEVM → Type 2.5 → Type 1 へ進化中 · zkSync Era → Type 4(EVM-compatible · 異なる bytecode)· StarkNet → Type 4(Cairo native · Solidity は Kakarot 経由)· Taiko → Type 1(完全 EVM-equivalent · base-rollup モデル)· Miden → 非 EVM(プライベート実行 + Solidity bridge)
- **Proving system 5 大主流**:Plonky2(Polygon · STARK→SNARK 再帰)· Boojum(zkSync · STARK + FRI)· Cairo-STARK(StarkNet)· Halo2 / Recursive Halo2(Scroll · Taiko · PSE 派)· EVM Prover(Linea · zk-SNARK with vk2.0)
- **TVL 2026-Q2 推定**:zkSync Era ~$2.0B · Linea ~$1.2B · Polygon zkEVM ~$800M · Scroll ~$700M · StarkNet ~$650M · Taiko ~$350M · Immutable zkEVM ~$280M · Miden ~$30M · Kakarot ~$15M(early)
- **DA layer 選択**:大部分は依然として L1 blobs(EIP-4844 · [[systems/pectra-eip-7691-blob-l2-impact]] を参照)を使用 · 少数が alt-DA を選択:Polygon zkEVM は validium モードを提供 · StarkNet Volition · Miden 自社 P2P · Kakarot は Celestia を探索 · Linea/Scroll/Taiko はデフォルト L1
- ルーティング:[[systems/INDEX|systems index]] · [[systems/cross-chain-five-pole-comparison-matrix]] と対照(rollup 間 messaging 選定)

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]] for the L1 blob capacity context that drives rollup gas cost, and [[systems/pectra-upgrade-overview|Pectra upgrade overview]] for the broader Ethereum upgrade landscape. Pair with [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]] for the meta-strategy that frames "L2 carrying 99% of users". For proving system depth, see [[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation fault prover]] and [[systems/formal-spec-implementation-codesign|formal spec implementation codesign]]. For long-term cryptographic risk, see [[systems/post-quantum-blockchain-day1-integration|post-quantum blockchain day-1 integration]]. For restaking-backed DA (EigenDA serves several rollups in this matrix), see [[systems/eigenlayer-overview|EigenLayer overview]]. Cross-link to [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] when reasoning about L2-to-L2 messaging.

## Why this matrix matters

ZK-EVM rollup は 2023-2025 年に集中的にメインネット稼働した後 · 「技術路線争い」から「EVM equivalence vs proving cost vs decentralization vs ecosystem traction」のマルチ目的最適化空間へと進化した。開発者がどの ZK rollup に deploy するかを選定する際 · 6-8 個の候補(各々が「最 EVM-equivalent · 最速 · 最安」と主張)を前に · 統一対照表がなければ市場宣伝に誤導される。

機関顧客([[systems/chainlink-ccip-institutional-messaging|CCIP institutional]] の J.P. Morgan Kinexys / DTCC / SWIFT pilot を参照)も同様に「tokenized 資産はどの L2 で settle するか」を決定する必要がある。機関が気にするのは TPS ではなく · **prover/sequencer の decentralization**(現在すべての ZK-EVM の sequencer は中央集権 · prover は大部分が中央集権)· **upgrade governance**(challenge window 内にスマートコントラクトをアップグレードできる = 実際に資金を制御)· **DA layer リスク**(validium 使用時 · データ可用性が外部委員会に依存)。

本マトリクスは公開稼働中の 9 個の ZK-EVM / ZK-rollup を対照 · 9 軸を横断展開 · 2026-Q2 データスナップショット。Optimistic rollup(Arbitrum / Optimism / Base / Blast)は本マトリクスに含まれず · 別途の optimistic マトリクス（公開時期は参照公開資料上未特定）を参照。

## Per-rollup sections

### Polygon zkEVM / AggLayer

**EVM equivalence**:2023 年ローンチ時は Type 3(EVM-compatible · 一部 opcode 差異)· 2024-2025 年に徐々に Type 2.5 へ進化。Polygon チームの roadmap は Type 1 完全 equivalence。

**Proving system**:Plonky2(STARK 再帰 → SNARK final · GPU フレンドリー)。2024 年に Plonky3 にアップグレードして ~30% 速度向上。

**Proof time**:単 batch ~5-10 分(2026-Q2)。L1 submit 平均 ~30 分 finality。

**Gas cost**:ユーザー sub-cent($0.001-0.01 simple transfer)。

**TVL May 2026**:~$800M(推定 · AggLayer 連邦を含む)。

**Mainnet maturity**:2023.03 メインネット beta · 2024 Stage 1 decentralization · 2026 も Stage 1(Sequencer 中央集権 · Prover は一部開放)。

**Decentralization**:Sequencer:Polygon Labs 中央集権運営 · 2026-2027 に Espresso shared sequencer 導入計画。Prover:5 社の prover ネットワーク(Polygon Labs + 4 サードパーティ)。Upgrade:7-day timelock + Security Council 7-of-13。

**Ecosystem**:~150 dApp · QuickSwap · Polygon ID · Astar zkEVM · 複数の enterprise 事例(Franklin Templeton tokenized fund pilot)を含む。

**DA layer**:デフォルト L1 blobs(EIP-4844)。validium モード(DAC 7-of-9 マルチシグ · enterprise プライベートチェーン用)を提供。AggLayer は Polygon の cross-chain unifier · 複数 zkEVM が settlement を共有可能。

### zkSync Era (Matter Labs)

**EVM equivalence**:Type 4(EVM-compatible · 異なる bytecode · Solidity は自社 zkSolc コンパイラ経由)。専門 dev tooling が必要。

**Proving system**:Boojum(STARK + FRI · GPU フレンドリー)。2024 年に Boojum v1.5 にアップグレードして ~40% 効率向上。Final SNARK wrap on Ethereum。

**Proof time**:~10-15 分 batch · L1 submit ~30-45 分 finality。

**Gas cost**:ユーザー sub-cent($0.001-0.005)。Account Abstraction native(ERC-4337 不要)。

**TVL May 2026**:~$2.0B(推定 · ZK Stack hyperchains を含む)。

**Mainnet maturity**:2023.03 メインネット · 2024 ZK Stack フレームを発表 · 2026 Stage 1 decentralization。

**Decentralization**:Sequencer:Matter Labs 中央集権 · 2026 Q3-Q4 に decentralized sequencer 導入計画(Espresso 提携)。Prover:Matter Labs + 1-2 サードパーティ。Upgrade:21-day timelock(2024 後に 1-day から延長)+ Security Council 9-of-15。

**Ecosystem**:~250 dApp · SyncSwap · Maverick · Aave v3 · Argent native AA · ZK Stack hyperchains(GRVT · Treasure · Cronos zkEVM)。

**DA layer**:デフォルト L1 blobs。Validium モード(「zkPorter」)は計画済みだが deploy 延期。ZK Stack hyperchains は EigenDA / Celestia を選択可。

### StarkNet

**EVM equivalence**:Type 4(Cairo native · Solidity ではない)。Solidity 互換は Kakarot サブプロジェクト(EVM-on-StarkNet · 完全 production grade ではない)または Warp transpiler(廃止済み)経由。Cairo は STARK 最適化のための Turing-complete 言語。

**Proving system**:Cairo-STARK(ネイティブ STARK · SNARK wrap 不要 · ただし L1 verification cost は高め)。STARK は耐量子([[systems/post-quantum-blockchain-day1-integration|post-quantum blockchain day-1]] を参照)。

**Proof time**:~30-60 分 batch(STARK proof サイズが大きく遅め)。

**Gas cost**:ユーザー ~$0.01-0.1(zkSync/Polygon より高い · STARK proof サイズのため)。2025 stwo prover アップグレードで -50% コスト目標。

**TVL May 2026**:~$650M(推定)。

**Mainnet maturity**:2021.11 alpha · 2023 v0.13 メインネット · 2024 v0.14 Volition 導入 · 2025 Stage 1 一部。

**Decentralization**:Sequencer:StarkWare 中央集権 · 2026-2027 に PoS validator セット経由で decentralize 計画。Prover:StarkWare 主導 · サードパーティ prover SDK 開放。Upgrade:Foundation 治理 + STRK token 投票。

**Ecosystem**:~120 dApp · Ekubo · JediSwap · ZkLend · zkLend · Briq · Realms を含む。Argent / Braavos AA wallet ネイティブサポート。機関事例:Visa Aeon · Provenance pilot。

**DA layer**:L1 blobs(デフォルト)+ Volition モード(ユーザーが on-chain or DAC off-chain を選択)+ EigenDA 探索中。

### Scroll

**EVM equivalence**:Type 2(EVM-equivalent · 99% bytecode-level 互換 · ほぼすべての Solidity dApp がゼロ修正 deploy 可)。

**Proving system**:Halo2 + PSE-flavor zkEVM(Privacy Scaling Explorations の長期研究をベース)。2025 年に multi-proof aggregation にアップグレード([[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation]] を参照)。

**Proof time**:~15-25 分 batch · L1 submit ~30 分 finality。

**Gas cost**:ユーザー sub-cent($0.005-0.02)。

**TVL May 2026**:~$700M。

**Mainnet maturity**:2023.10 メインネット · 2024-2025 継続的に audit · 2026 Stage 1。

**Decentralization**:Sequencer:Scroll チーム中央集権 · 2026-2027 に decentralize 計画。Prover:サードパーティ開放(Scroll prover network beta)。Upgrade:7-day timelock + Security Council。

**Ecosystem**:~180 dApp · Aave · Uniswap · Pendle · GMX 等主流がすべて deploy。Scroll Canvas はユーザー onboarding ツール。

**DA layer**:デフォルト L1 blobs。Scroll チームは validium しない明確なスタンスを表明 · L1 DA 純度を保持(EVM-equivalent + L1 DA は institutional の売り)。

### Linea (Consensys)

**EVM equivalence**:Type 2(EVM-equivalent · Scroll に類似で 99% 互換)。Consensys は「drop-in MetaMask / Truffle / Infura ツールチェーン互換」を強調。

**Proving system**:zk-SNARK custom prover(Linea VK2.0 · Vortex + Arcane ベース)。2025 年に vk3.0 アップグレードで proof 速度向上。Recursive proof aggregation。

**Proof time**:~10-20 分 batch · L1 submit ~30 分 finality。

**Gas cost**:ユーザー sub-cent($0.002-0.01)。

**TVL May 2026**:~$1.2B(推定 · MetaMask トラフィック加持)。

**Mainnet maturity**:2023.07 メインネット · 2024 v1.5 アップグレード · 2026 Stage 1。

**Decentralization**:Sequencer:Consensys 中央集権 · 2026-2027 に decentralize 計画。Prover:Consensys 主導 · サードパーティ prover SDK 開放。Upgrade:7-day timelock + Security Council。

**Ecosystem**:~200 dApp · Aave · Uniswap · LayerZero · Stargate · OKX · MetaMask との深い統合が最大のトラフィック入口。

**DA layer**:デフォルト L1 blobs。Consensys は「all on-chain」スタンス継続 · validium は提供しない。

### Taiko

**EVM equivalence**:Type 1(完全 EVM-equivalent · bit-for-bit · EVM opcode / precompile / consensus rules を含む)。任意の Ethereum dApp / L1 client が直接 fork 可能。

**Proving system**:Halo2(SGX + ZK マルチ prover · 2024 年に SP1 · Risc Zero · Aligned の 3 方 prover competition を導入)。Multi-proof aggregation の先駆者([[systems/multi-proof-aggregation-fault-prover]] を参照)。

**Proof time**:~20-40 分 batch(Type 1 のため 100% EVM 精度で prove が遅い)。

**Gas cost**:ユーザー ~$0.01-0.05(Scroll/Linea よりやや高い · Type 1 の prove cost のため)。

**TVL May 2026**:~$350M(推定)。

**Mainnet maturity**:2024.05 Alpha-6 メインネット · 2024.06 Hekla testnet · 2025 メインネット安定 · 2026 Stage 1 進化中。

**Decentralization**:**Sequencer:Based rollup**(L1 proposer を sequencer として借用 · ZK-EVM 中で唯一完全分散化された sequencer)。Prover:permissionless prover market 開放(誰でも proof 提出で TAIKO を稼げる)。Upgrade:7-day timelock。

**Ecosystem**:~80 dApp · TaikoSwap · 主に Ethereum-native dApp fork。Based rollup 概念は ETH コミュニティ学術コア · Vitalik が公開推奨。

**DA layer**:デフォルト L1 blobs(Based rollup は L1 DA 必須)。

### Kakarot

**EVM equivalence**:Type 4(EVM を Cairo で実装 · StarkNet の上で稼働)。理論上 99% Solidity 互換 · ただし edge case 差異あり。

**Proving system**:StarkNet の Cairo-STARK を借用(Kakarot スマートコントラクト層は Cairo · 内部で EVM bytecode を解釈)。

**Proof time**:StarkNet に依存(~30-60 分)。

**Gas cost**:StarkNet に依存 · native StarkNet よりやや高い。

**TVL May 2026**:~$15M(early adoption)。

**Mainnet maturity**:2024-Q4 メインネット beta · 2025-2026 試運営 · production grade ではない。

**Decentralization**:StarkNet 治理を借用 · Kakarot チームがスマートコントラクトアップグレードを主導。

**Ecosystem**:~10-20 dApp · 主に開発者実験的 deploy。Kakarot の戦略的価値は「EVM を StarkNet に持ち込む」· 独立 L2 ではない。

**DA layer**:StarkNet を借用(L1 blobs + Volition + EigenDA 探索中)。

### Polygon Miden

**EVM equivalence**:非 EVM · Miden Assembly(MASM)· STARK フレンドリー ISA。EVM は Miden-EVM transpiler(early)経由。設計哲学は「クライアント prover · ユーザーがローカルで transaction を証明 · その後 proof を sequencer に提出」(従来の sequencer-prove モデルとの対照)。

**Proving system**:Miden VM(Winterfell STARK フレームベース)。クライアント prover フレンドリー(数秒〜数分でラップトップ上で prove 可 · transaction 複雑度次第)。

**Proof time**:ユーザークライアント ~1-30 秒(単純な transaction)· L1 submit batch ~10-20 分。

**Gas cost**:ユーザー sub-cent · prove がローカルのため · L1 は verification + DA のみ支払い。

**TVL May 2026**:~$30M(early)。

**Mainnet maturity**:2024 testnet · 2026 メインネット beta · high-value DeFi 用 production grade ではない。

**Decentralization**:Sequencer:Polygon Labs 中央集権(early)。Prover:ユーザー自己 prove が設計の中核 · 自然に分散化(ユーザーが自分の transaction proof を制御)。

**Ecosystem**:~10 dApp · 主にプライベート支払い / DeFi 実験(Miden は client-side privacy が differentiator と強調)。

**DA layer**:Miden P2P 自社 DA(experimental · L1 blobs ではない)。Celestia / EigenDA を fallback として探索計画。Polygon AggLayer 接続。

### ImmutableX (Immutable zkEVM)

**EVM equivalence**:Type 2(Polygon zkEVM stack ベース · EVM-equivalent 99%)。ゲーム専門 ZK-rollup。

**Proving system**:Plonky2(Polygon zkEVM proving infrastructure を借用)。

**Proof time**:~10-20 分(Polygon zkEVM 性能を継承)。

**Gas cost**:ユーザー gas-free for NFT mint / transfer(Immutable チームが補助 · ゲーム UX 優先)· その他 transaction sub-cent。

**TVL May 2026**:~$280M(NFT-heavy · 完全 fungible TVL ではない)。

**Mainnet maturity**:2024-Q1 zkEVM メインネット(以前 ImmutableX 1.0 は StarkEx 検証プール · zkEVM ではない)。2025-2026 ゲームエコシステム拡張。

**Decentralization**:Sequencer:Immutable 中央集権(ゲーム位置づけ · decentralization を優先しない)。Prover:Polygon prover network を借用。Upgrade:Immutable Foundation + 7-day timelock。

**Ecosystem**:web3 gaming に特化 —— Illuvium · GuildFi · Gods Unchained · Ember Sword · Counterplay 等 80+ ゲーム。ZK-EVM 中でゲーム vertical で最も dominant。

**DA layer**:L1 blobs デフォルト · 一部 NFT メタデータは validium(DAC モード)経由でコスト削減。

## Big comparison matrix table

**9 個の ZK-EVM / ZK-rollup × 9 軸対照**(2026-Q2 状態):

| Rollup | EVM Type | Proving System | Proof Time | Gas Cost | TVL May 2026 | Mainnet Maturity | Seq/Prover Decentralization | Ecosystem | DA Layer |
|---|---|---|---|---|---|---|---|---|---|
| **Polygon zkEVM / AggLayer** | Type 2.5(target Type 1)| Plonky2/3(STARK→SNARK) | 5-10 分 | sub-cent | $800M | 2023-03 · Stage 1 | Seq 中央集権 · Prover 5 社ネットワーク · 7d timelock + SC 7/13 | ~150 dApp · QuickSwap · Polygon ID · Franklin Templeton pilot | L1 blobs + Validium モード · AggLayer unifier |
| **zkSync Era** | Type 4(zkSolc) | Boojum(STARK+FRI) | 10-15 分 | sub-cent($0.001-0.005)· AA native | $2.0B | 2023-03 · Stage 1 | Seq 中央集権 · Prover Matter Labs+1-2 · 21d timelock + SC 9/15 | ~250 dApp · SyncSwap · Aave · Argent · ZK Stack hyperchains | L1 blobs · Validium ("zkPorter") 延期 · hyperchains は EigenDA/Celestia を選択可 |
| **StarkNet** | Type 4(Cairo native · Solidity via Kakarot) | Cairo-STARK(ネイティブ · 耐量子) | 30-60 分 | $0.01-0.1 | $650M | 2021-11 alpha · 2023 v0.13 · Stage 1 一部 | Seq 中央集権 · Prover SDK 開放 · Foundation+STRK 治理 | ~120 dApp · Ekubo · ZkLend · Visa Aeon · Provenance pilot | L1 blobs + Volition モード + EigenDA 探索中 |
| **Scroll** | Type 2(99% bytecode-equivalent) | Halo2 + PSE-zkEVM · multi-proof agg | 15-25 分 | sub-cent($0.005-0.02) | $700M | 2023-10 · Stage 1 | Seq 中央集権 · Prover サードパーティ beta · 7d timelock + SC | ~180 dApp · Aave/Uni/Pendle/GMX · Scroll Canvas | L1 blobs only(validium しない明示) |
| **Linea (Consensys)** | Type 2 | zk-SNARK custom(VK2.0/3.0 · Vortex+Arcane) | 10-20 分 | sub-cent($0.002-0.01) | $1.2B | 2023-07 · Stage 1 | Seq 中央集権 · Prover Consensys+SDK · 7d timelock + SC | ~200 dApp · MetaMask 統合 · Aave/Uni/OKX | L1 blobs only(all on-chain スタンス) |
| **Taiko** | Type 1(bit-for-bit EVM) | Halo2(SGX+ZK)· SP1/Risc Zero/Aligned 3 方 | 20-40 分 | $0.01-0.05 | $350M | 2024-05 メインネット · Stage 1 進化中 | **Based rollup · Seq は L1 proposer 借用 · Permissionless prover market · 7d timelock** | ~80 dApp · Ethereum-native fork · Vitalik 推奨 based rollup | L1 blobs(based rollup は L1 DA 必須) |
| **Kakarot** | Type 4(EVM on Cairo on StarkNet) | StarkNet Cairo-STARK 借用 | ~30-60 分(StarkNet 借用) | StarkNet よりやや高い | $15M | 2024 Q4 beta · production-grade ではない | StarkNet 借用 · Kakarot チーム主導 | ~10-20 dApp · 実験的 deploy | StarkNet 借用(L1 blobs + Volition + EigenDA 探索) |
| **Polygon Miden** | 非 EVM(MASM · EVM transpiler early) | Miden VM(Winterfell STARK)· **クライアント prover** | ユーザーローカル 1-30s · L1 batch 10-20 分 | sub-cent(prove ローカル) | $30M | 2024 testnet · 2026 メインネット beta | Seq 中央集権 · **Prover ユーザー自己 prove(自然に分散化)** | ~10 dApp · プライベート支払い/DeFi 実験 | Miden P2P 自社 DA · Celestia/EigenDA 探索 · AggLayer 接続 |
| **ImmutableX zkEVM** | Type 2(Polygon zkEVM stack ベース) | Plonky2(Polygon 借用) | 10-20 分 | NFT gas-free 補助 · その他 sub-cent | $280M(NFT-heavy) | 2024 Q1 zkEVM メインネット · 以前 StarkEx | Seq 中央集権(ゲーム位置づけ)· Prover Polygon 借用 · 7d timelock | **gaming に特化** · 80+ ゲーム:Illuvium/Gods Unchained/Guild | L1 blobs + 一部 NFT metadata validium |

**マトリクスの読み方**:
- **EVM equivalence vs proving cost tradeoff**:Type 1(Taiko)が最も高価だが完璧な互換性 · Type 4(zkSync · StarkNet · Kakarot)が最も安価だが dev tooling 対応が必要
- **DA layer 選択は institutional vs DeFi スタンスを反映**:Scroll/Linea/Taiko は L1 blobs を死守(institutional grade)· Polygon/StarkNet/Miden は validium/Volition を提供(DeFi UX 優先)· Immutable hybrid(NFT は validium でコスト削減)
- **Decentralization 真状態**:**すべての ZK-EVM の sequencer は中央集権**(2026-Q2)· 唯一の例外は Taiko based rollup。Prover decentralization の進捗 Polygon(5 社ネットワーク)> Scroll/StarkNet(SDK 開放)> その他(チーム主導)
- **TVL と ecosystem traction は完全に相関しない**:zkSync $2.0B 高 TVL だが Type 4 が開発者移行コストを制限;Linea $1.2B は MetaMask トラフィック優位を借用;Scroll/Polygon Type 2 + 中等 TVL が「balanced choice」

## Boundary cases / future trajectory

**EVM equivalence ladder の進化方向**:Polygon zkEVM は 2027 年に Type 1 達成と公開ロードマップ。Taiko はすでに Type 1 · 他 ZK-EVM の reference benchmark。zkSync Era と StarkNet は Type 4 哲学を維持(prove cost 最適化 · dev tooling コストを受容)。Linea と Scroll は Type 2 で安定 · Type 1 へのアップグレードは計画なし(最後の 1% 互換性投入対効果が低いと判断)。

**Proving system 収束 vs 多元化**:
- **収束トレンド**:大部分の ZK-EVM が最終的に SNARK wrap(L1 verification cost のため · groth16 / plonky 等)· 内部 STARK(zkSync Boojum · Polygon Plonky2)でも同様。
- **多元化トレンド**:StarkNet / Miden はネイティブ STARK を堅持 · 耐量子 + クライアントフレンドリーのため([[systems/post-quantum-blockchain-day1-integration]] を参照)。SP1 / Risc Zero / Aligned 等の prover 汎用化(任意の rollup が選択可)は modular proving の新トレンド。
- Multi-proof aggregation([[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation fault prover]] を参照)により 1 つの rollup が複数の独立 prover を同時に実行可能 · エラー時に fallback —— Taiko が先駆者。

**Sequencer decentralization タイムテーブル**:Polygon zkEVM · zkSync Era · Scroll · Linea いずれも 2026-2027 に shared sequencer(Espresso / Astria / Radius)導入を公開。Taiko based rollup は自然に解決済み。Vitalik は 2024 年に ZK-EVM が prover ではなく sequencer decentralization を優先解決すべきと公開提案 · sequencer 集中 = liveness リスクがより大きいため。

**AggLayer / ZK Stack / Superchain 派閥戦**:
- Polygon AggLayer は Polygon zkEVM + zkSync(一部)+ Astar + その他 を連合 · settlement layer + cross-chain LP を共有
- zkSync ZK Stack は Matter Labs 主導の hyperchain フレーム · GRVT · Treasure · Cronos zkEVM をすでに deploy
- Optimism Superchain(本マトリクスに含まれず · OP-rollup)が対応物
- 長期にすべての rollup 間で何らかの unifier が必要 · ただし AggLayer / ZK Stack / Superchain が各々別個に推進 · ユーザーが stack を跨いで利用するには汎用ブリッジが依然必要([[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole matrix]] を参照)

**DA 層と EigenLayer の関連**:EigenDA([[systems/eigenlayer-overview|EigenLayer overview]] を参照)は複数の ZK Stack hyperchain · StarkNet Volition · Miden / Kakarot 等に alt-DA を提供。だが ZK-EVM が alt-DA(L1 セキュリティ放棄)を使うべきかは依然議論あり —— Scroll / Linea / Taiko 派は L1 DA を堅持 · Polygon / StarkNet / Miden 派は選択肢を提供。institutional 顧客(SWIFT / DTCC · [[systems/chainlink-ccip-institutional-messaging]] を参照)は L1 DA を明確に要求。

**Pectra EIP-7691 影響**([[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]] を参照):blob target 3→6 + max 6→9 により ZK-EVM submit cost がさらに -50% · L1 blobs を使うすべての rollup が直接受益。2026-Q4 Fusaka PeerDAS でさらに 10× 容量。

**Formal verification 進捗**:ZK-EVM は formal spec implementation co-design([[systems/formal-spec-implementation-codesign|formal spec implementation codesign]] を参照)の天然の舞台 —— Solidity / EVM spec + ZK circuit spec の双 spec 一致性が核心セキュリティポイント。Linea と Consensys Diligence チームが formal verification 進捗を公開。Scroll は PSE と長期的に学術協業。zkSync Boojum prover は Galois が独立監査。

**機関 vs DeFi 選定**:
- Institutional(tokenized fund · DvP · 規制コンプライアンス):Linea(MetaMask Institutional 統合 · Consensys 裏付け)· Scroll(EVM-equivalent + L1 DA 純度)· Polygon zkEVM(Franklin Templeton pilot 先例)
- DeFi-native(高 TPS · ロングテール dApp):zkSync Era · StarkNet · Polygon AggLayer
- Gaming-specific:ImmutableX
- Privacy-first:Polygon Miden(クライアント prover + privacy 設計)
- Ethereum-aligned(maximum decentralization · Vitalik 推奨):Taiko based rollup

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/INDEX|systems index]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]]
- [[systems/pectra-upgrade-overview|Pectra upgrade overview]]
- [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]
- [[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation fault prover]]
- [[systems/post-quantum-blockchain-day1-integration|post-quantum blockchain day-1 integration]]
- [[systems/formal-spec-implementation-codesign|formal spec implementation codesign]]
- [[systems/eigenlayer-overview|EigenLayer overview]]
- [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]
- [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP institutional messaging]]
<!-- /wiki-links:managed -->

## Sources

- Polygon AggLayer · https://polygon.technology/agglayer
- zkSync Era docs · https://docs.zksync.io/
- StarkNet docs · https://docs.starknet.io/
- Scroll docs · https://docs.scroll.io/
- Linea docs · https://docs.linea.build/
- Taiko docs · https://docs.taiko.xyz/
- Kakarot docs · https://docs.kakarot.org/
- Polygon Miden docs · https://0xmiden.github.io/miden-docs/
- Immutable docs · https://docs.immutable.com/
- L2Beat scaling summary · https://l2beat.com/scaling/summary
- DefiLlama rollups · https://defillama.com/chains/Rollup
- Ethereum.org ZK rollup overview · https://ethereum.org/en/developers/docs/scaling/zk-rollups/
- Vitalik "Different types of ZK-EVM" classification(public blog)
