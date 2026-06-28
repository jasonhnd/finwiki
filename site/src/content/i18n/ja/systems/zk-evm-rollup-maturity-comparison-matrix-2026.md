---
source: systems/zk-evm-rollup-maturity-comparison-matrix-2026
source_hash: bd84eba271c0acf7
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "ZK-EVM Rollup 成熟度対照マトリクス 2026  · 9 個の rollup の証明システム / TVL / DA / 分散化"
translated_at: 2026-06-26T08:28:53.979Z
---
# ZK-EVM Rollup 成熟度対照マトリクス 2026  · 9 個の rollup の証明システム / TVL / DA / 分散化

## 要約

- 9 個の active ZK-EVM / ZK-rollup について、2026-Q2 時点の **EVM等価性 · 証明システム · 証明時間 · ガスコスト · TVL · メインネット成熟度 · 分散化 · エコシステム · DA層** を 9 軸で対照する
- **EVM等価性の段階**(Vitalik Type 1-4): Linea / Scroll → Type 2(EVM-equivalent · 99%) · Polygon zkEVM → Type 2.5 から Type 1 へ進化中 · zkSync Era → Type 4(EVM-compatible · 異なる bytecode) · StarkNet → Type 4(Cairo native · Solidity は Kakarot 経由) · Taiko → Type 1(完全 EVM-equivalent · base-rollup モデル) · Miden → 非 EVM(プライベート実行 + Solidity bridge)
- **証明システム 5 大主流**: Plonky2(Polygon · STARK→SNARK 再帰) · Boojum(zkSync · STARK + FRI) · Cairo-STARK(StarkNet) · Halo2  / Recursive Halo2(Scroll · Taiko · PSE 派) · EVM Prover(Linea · zk-SNARK with vk2.0)
- **TVL 2026-Q2 推定**: zkSync Era ~$2.0B · Linea ~$1.2B · Polygon zkEVM ~$800M · Scroll ~$700M · StarkNet ~$650M · Taiko ~$350M · Immutable zkEVM ~$280M · Miden ~$30M · Kakarot ~$15M(early)
- **DA層の選択**: 大部分は依然として L1  blobs(EIP-4844  · [[systems/pectra-eip-7691-blob-l2-impact]] を参照)を使用する。少数が alt-DA を選択し、Polygon zkEVM は validium モードを提供、StarkNet は Volition、Miden は自社 P2P、Kakarot は Celestia を探索、Linea / Scroll / Taiko はデフォルトで L1
 を使う
- ルーティング: [[systems/INDEX|systems index]] · [[systems/cross-chain-five-pole-comparison-matrix]] と対照する(rollup 間 messaging の選定)

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] 配下に位置する。rollup gas cost を左右する L1  blob capacity の文脈では [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]]、より広い Ethereum upgrade landscape では [[systems/pectra-upgrade-overview|Pectra upgrade overview]] と照らして読む。"L2  carrying 99% of users" という meta-strategy の枠組みでは [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]] と組み合わせる。証明システムの深掘りは [[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation fault prover]] と [[systems/formal-spec-implementation-codesign|formal spec implementation codesign]]、長期的な暗号リスクは [[systems/post-quantum-blockchain-day1-integration|post-quantum blockchain day-1 integration]] を参照する。restaking-backed DA(EigenDA は本マトリクス内の複数 rollup に提供される)については [[systems/eigenlayer-overview|EigenLayer overview]] を参照する。L2-to-L2  messaging を検討する際は [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] へ cross-link する。

## このマトリクスが重要な理由

ZK-EVM rollup は 2023-2025 年に集中的にメインネット稼働した後、「技術路線争い」から「EVM等価性 vs 証明コスト vs 分散化 vs エコシステム traction」の多目的最適化空間へ進化した。開発者がどの ZK rollup に deploy するかを選ぶ際、6-8 個の候補(各々が「最も EVM-equivalent · 最速 · 最安」と主張)を前に、統一対照表がなければ市場宣伝に誤導される。

機関顧客([[systems/chainlink-ccip-institutional-messaging|CCIP institutional]] の J.P. Morgan Kinexys / DTCC / SWIFT pilot を参照)も同様に、「tokenized 資産をどの L2 で settle するか」を決める必要がある。機関が気にするのは TPS ではなく、**prover / sequencer の分散化**(現在すべての ZK-EVM の sequencer は中央集権、prover も大部分が中央集権)、**upgrade governance**(challenge window 内にスマートコントラクトをアップグレードできる = 実際には資金を制御できる)、**DA層リスク**(validium 使用時、データ可用性が外部委員会に依存する)である。

本マトリクスは、公開稼働中の 9 個の ZK-EVM / ZK-rollup を対照し、9 軸で横断展開する 2026-Q2 データスナップショットである。Optimistic rollup(Arbitrum / Optimism / Base / Blast)は本マトリクスに含めず、別途の optimistic マトリクス(公開時期は参照公開資料上未特定)を参照する。

## Rollup別セクション

### Polygon zkEVM / AggLayer

**EVM等価性**: 2023 年ローンチ時は Type 3(EVM-compatible · 一部 opcode 差異)だったが、2024-2025 年に徐々に Type 2.5 へ進化した。Polygon チームの roadmap は Type 1 の完全 equivalence を目指す。

**証明システム**: Plonky2(STARK 再帰 → SNARK final · GPU フレンドリー)。2024 年に Plonky3 へアップグレードし、~30% の速度向上を得た。

**証明時間**: 単一 batch で ~5-10 分(2026-Q2)。L1  submit から finality まで平均 ~30 分。

**ガスコスト**: ユーザー側は sub-cent($0.001-0.01  simple transfer)。

**TVL May 2026**: ~$800M(推定 · AggLayer 連邦を含む)。

**メインネット成熟度**: 2023.03 メインネット beta · 2024 Stage 1  decentralization · 2026 も Stage 1(Sequencer は中央集権 · Prover は一部開放)。

**分散化**: Sequencer: Polygon Labs が中央集権的に運営 · 2026-2027 に Espresso shared sequencer 導入計画。Prover: 5 社の prover network(Polygon Labs + 4 サードパーティ)。Upgrade: 7-day timelock + Security Council 7-of-13。

**エコシステム**: ~150 dApp · QuickSwap · Polygon ID · Astar zkEVM · 複数の enterprise 事例(Franklin Templeton tokenized fund pilot)を含む。

**DA層**: デフォルトは L1  blobs(EIP-4844)。validium モード(DAC 7-of-9 マルチシグ · enterprise プライベートチェーン用)を提供する。AggLayer は Polygon の cross-chain unifier で、複数 zkEVM が 決済 を共有できる。

### zkSync Era (Matter Labs)

**EVM等価性**: Type 4(EVM-compatible · 異なる bytecode · Solidity は自社 zkSolc コンパイラ経由)。専門 dev tooling が必要。

**証明システム**: Boojum(STARK + FRI · GPU フレンドリー)。2024 年に Boojum v1.5 へアップグレードし、~40% の効率向上を得た。Ethereum 上で final SNARK wrap を行う。

**証明時間**: ~10-15 分 batch · L1  submit から finality まで ~30-45 分。

**ガスコスト**: ユーザー側は sub-cent($0.001-0.005)。Account Abstraction native(ERC-4337 不要)。

**TVL May 2026**: ~$2.0B(推定 · ZK Stack hyperchains を含む)。

**メインネット成熟度**: 2023.03 メインネット · 2024 ZK Stack フレームを発表 · 2026 Stage 1  decentralization。

**分散化**: Sequencer: Matter Labs 中央集権 · 2026 Q3-Q4 に decentralized sequencer 導入計画(Espresso 提携)。Prover: Matter Labs + 1-2 サードパーティ。Upgrade: 21-day timelock(2024 後に 1-day から延長)+ Security Council 9-of-15。

**エコシステム**: ~250 dApp · SyncSwap · Maverick · Aave v3  · Argent native AA · ZK Stack hyperchains(GRVT · Treasure · Cronos zkEVM)。

**DA層**: デフォルトは L1  blobs。Validium モード(「zkPorter」)は計画済みだが deploy は延期されている。ZK Stack hyperchains は EigenDA / Celestia を選択できる。

### StarkNet

**EVM等価性**: Type 4(Cairo native · Solidity ではない)。Solidity 互換は Kakarot サブプロジェクト(EVM-on-StarkNet · 完全 production grade ではない)または Warp transpiler(廃止済み)経由。Cairo は STARK 最適化のための Turing-complete 言語である。

**証明システム**: Cairo-STARK(ネイティブ STARK · SNARK wrap 不要 · ただし L1  verification cost は高め)。STARK は耐量子([[systems/post-quantum-blockchain-day1-integration|post-quantum blockchain day-1]] を参照)。

**証明時間**: ~30-60 分 batch(STARK proof サイズが大きく遅め)。

**ガスコスト**: ユーザー側は ~$0.01-0.1(zkSync / Polygon より高い · STARK proof サイズのため)。2025 stwo prover アップグレードで -50% コストを目標にする。

**TVL May 2026**: ~$650M(推定)。

**メインネット成熟度**: 2021.11 alpha · 2023 v0.13 メインネット · 2024 v0.14 Volition 導入 · 2025 Stage 1 一部。

**分散化**: Sequencer: StarkWare 中央集権 · 2026-2027 に PoS validator set 経由で decentralize 計画。Prover: StarkWare 主導 · サードパーティ prover SDK 開放。Upgrade: Foundation 治理 + STRK token 投票。

**エコシステム**: ~120 dApp · Ekubo · JediSwap · ZkLend · zkLend · Briq · Realms を含む。Argent / Braavos AA ウォレット はネイティブサポート。機関事例: Visa Aeon · Provenance pilot。

**DA層**: L1  blobs(デフォルト)+ Volition モード(ユーザーが on-chain or DAC off-chain を選択)+ EigenDA 探索中。

### Scroll

**EVM等価性**: Type 2(EVM-equivalent · 99% bytecode-level 互換 · ほぼすべての Solidity dApp がゼロ修正で deploy 可能)。

**証明システム**: Halo2  + PSE-flavor zkEVM(Privacy Scaling Explorations の長期研究をベース)。2025 年に multi-proof aggregation へアップグレード([[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation]] を参照)。

**証明時間**: ~15-25 分 batch · L1  submit から finality まで ~30 分。

**ガスコスト**: ユーザー側は sub-cent($0.005-0.02)。

**TVL May 2026**: ~$700M。

**メインネット成熟度**: 2023.10 メインネット · 2024-2025 に継続的 audit · 2026 Stage 1。

**分散化**: Sequencer: Scroll チーム中央集権 · 2026-2027 に decentralize 計画。Prover: サードパーティ開放(Scroll prover network beta)。Upgrade: 7-day timelock + Security Council。

**エコシステム**: ~180 dApp · Aave · Uniswap · Pendle · GMX など主流がすべて deploy。Scroll Canvas はユーザー onboarding tool。

**DA層**: デフォルトは L1  blobs。Scroll チームは validium しない明確なスタンスを表明し、L1  DA 純度を保持する(EVM-equivalent + L1  DA は institutional 向けの売り)。

### Linea (Consensys)

**EVM等価性**: Type 2(EVM-equivalent · Scroll に類似し、99% 互換)。Consensys は「drop-in MetaMask / Truffle / Infura ツールチェーン互換」を強調する。

**証明システム**: zk-SNARK custom prover(Linea VK2.0  · Vortex + Arcane ベース)。2025 年に vk3.0 アップグレードで proof 速度が向上。Recursive proof aggregation。

**証明時間**: ~10-20 分 batch · L1  submit から finality まで ~30 分。

**ガスコスト**: ユーザー側は sub-cent($0.002-0.01)。

**TVL May 2026**: ~$1.2B(推定 · MetaMask トラフィック効果)。

**メインネット成熟度**: 2023.07 メインネット · 2024 v1.5 アップグレード · 2026 Stage 1。

**分散化**: Sequencer: Consensys 中央集権 · 2026-2027 に decentralize 計画。Prover: Consensys 主導 · サードパーティ prover SDK 開放。Upgrade: 7-day timelock + Security Council。

**エコシステム**: ~200 dApp · Aave · Uniswap · LayerZero · Stargate · OKX · MetaMask との深い統合が最大のトラフィック入口。

**DA層**: デフォルトは L1  blobs。Consensys は「all on-chain」スタンスを継続し、validium は提供しない。

### Taiko

**EVM等価性**: Type 1(完全 EVM-equivalent · bit-for-bit · EVM opcode / precompile / consensus rules を含む)。任意の Ethereum dApp / L1  client が直接 fork 可能。

**証明システム**: Halo2(SGX + ZK マルチ prover · 2024 年に SP1  · Risc Zero · Aligned の 3 方 prover competition を導入)。Multi-proof aggregation の先駆者([[systems/multi-proof-aggregation-fault-prover]] を参照)。

**証明時間**: ~20-40 分 batch(Type 1 のため、100% EVM 精度で prove が遅い)。

**ガスコスト**: ユーザー側は ~$0.01-0.05(Scroll / Linea よりやや高い · Type 1 の prove cost のため)。

**TVL May 2026**: ~$350M(推定)。

**メインネット成熟度**: 2024.05 Alpha-6 メインネット · 2024.06 Hekla testnet · 2025 メインネット安定 · 2026 Stage 1 進化中。

**分散化**: **Sequencer: Based rollup**(L1  proposer を sequencer として借用 · ZK-EVM の中で唯一、完全に分散化された sequencer)。Prover: permissionless prover market 開放(誰でも proof 提出で TAIKO を稼げる)。Upgrade: 7-day timelock。

**エコシステム**: ~80 dApp · TaikoSwap · 主に Ethereum-native dApp fork。Based rollup 概念は ETH community の学術的 core であり、Vitalik が公開推奨している。

**DA層**: デフォルトは L1  blobs(Based rollup は L1  DA 必須)。

### Kakarot

**EVM等価性**: Type 4(EVM を Cairo で実装し、StarkNet 上で稼働)。理論上は 99% Solidity 互換だが、edge case 差異がある。

**証明システム**: StarkNet の Cairo-STARK を借用(Kakarot スマートコントラクト層は Cairo で、内部で EVM bytecode を解釈する)。

**証明時間**: StarkNet に依存(~30-60 分)。

**ガスコスト**: StarkNet に依存し、native StarkNet よりやや高い。

**TVL May 2026**: ~$15M(early adoption)。

**メインネット成熟度**: 2024-Q4 メインネット beta · 2025-2026 試運営 · production grade ではない。

**分散化**: StarkNet 治理を借用し、Kakarot チームがスマートコントラクト upgrade を主導する。

**エコシステム**: ~10-20 dApp · 主に開発者による実験的 deploy。Kakarot の戦略的価値は「EVM を StarkNet に持ち込む」ことであり、独立 L2 ではない。

**DA層**: StarkNet を借用(L1  blobs + Volition + EigenDA 探索中)。

### Polygon Miden

**EVM等価性**: 非 EVM · Miden Assembly(MASM) · STARK フレンドリー ISA。EVM は Miden-EVM transpiler(early)経由。設計哲学は「クライアント prover · ユーザーがローカルで transaction を証明 · その後 proof を sequencer に提出」であり、従来の sequencer-prove モデルと対照的である。

**証明システム**: Miden VM(Winterfell STARK フレームベース)。クライアント prover フレンドリー(数秒〜数分でラップトップ上で prove 可能 · transaction 複雑度次第)。

**証明時間**: ユーザークライアントで ~1-30 秒(単純な transaction) · L1  submit batch で ~10-20 分。

**ガスコスト**: ユーザー側は sub-cent。prove がローカルのため、L1 では verification + DA のみ支払う。

**TVL May 2026**: ~$30M(early)。

**メインネット成熟度**: 2024 testnet · 2026 メインネット beta · high-value DeFi 用 production grade ではない。

**分散化**: Sequencer: Polygon Labs 中央集権(early)。Prover: ユーザー自己 prove が設計の中核であり、自然に分散化する(ユーザーが自分の transaction proof を制御する)。

**エコシステム**: ~10 dApp · 主にプライベート支払い / DeFi 実験(Miden は client-side privacy が differentiator だと強調する)。

**DA層**: Miden P2P 自社 DA(experimental · L1  blobs ではない)。Celestia / EigenDA を fallback として探索計画。Polygon AggLayer 接続。

### ImmutableX (Immutable zkEVM)

**EVM等価性**: Type 2(Polygon zkEVM stack ベース · EVM-equivalent 99%)。ゲーム専門 ZK-rollup。

**証明システム**: Plonky2(Polygon zkEVM proving infrastructure を借用)。

**証明時間**: ~10-20 分(Polygon zkEVM 性能を継承)。

**ガスコスト**: ユーザーは NFT mint / transfer で gas-free(Immutable チームが補助 · ゲーム UX 優先)。その他 transaction は sub-cent。

**TVL May 2026**: ~$280M(NFT-heavy · 完全な fungible TVL ではない)。

**メインネット成熟度**: 2024-Q1 zkEVM メインネット。以前の ImmutableX 1.0 は StarkEx 検証プールであり、zkEVM ではない。2025-2026 にゲームエコシステムを拡張。

**分散化**: Sequencer: Immutable 中央集権(ゲーム位置づけで、decentralization を優先しない)。Prover: Polygon prover network を借用。Upgrade: Immutable Foundation + 7-day timelock。

**エコシステム**: web3  gaming に特化 —— Illuvium · GuildFi · Gods Unchained · Ember Sword · Counterplay など 80+ ゲーム。ZK-EVM の中で gaming vertical に最も強い。

**DA層**: L1  blobs がデフォルト。一部 NFT metadata は validium(DAC モード)経由でコストを削減する。

## 大型比較マトリクス表

**9 個の ZK-EVM / ZK-rollup × 9 軸対照**(2026-Q2 状態):

| Rollup | EVM Type | 証明システム | 証明時間 | ガスコスト | TVL May 2026  | メインネット成熟度 | Seq/Prover 分散化 | エコシステム | DA層 |
|---|---|---|---|---|---|---|---|---|---|
| **Polygon zkEVM / AggLayer** | Type 2.5(target Type 1) | Plonky2/3(STARK→SNARK) | 5-10 分 | sub-cent | $800M | 2023-03  · Stage 1  | Seq 中央集権 · Prover 5 社ネットワーク · 7d timelock + SC 7/13  | ~150 dApp · QuickSwap · Polygon ID · Franklin Templeton pilot | L1  blobs + Validium モード · AggLayer unifier |
| **zkSync Era** | Type 4(zkSolc) | Boojum(STARK+FRI) | 10-15 分 | sub-cent($0.001-0.005) · AA native | $2.0B | 2023-03  · Stage 1  | Seq 中央集権 · Prover Matter Labs+1-2  · 21d timelock + SC 9/15  | ~250 dApp · SyncSwap · Aave · Argent · ZK Stack hyperchains | L1  blobs · Validium("zkPorter") 延期 · hyperchains は EigenDA / Celestia を選択可 |
| **StarkNet** | Type 4(Cairo native · Solidity via Kakarot) | Cairo-STARK(ネイティブ · 耐量子) | 30-60 分 | $0.01-0.1  | $650M | 2021-11 alpha · 2023 v0.13  · Stage 1 一部 | Seq 中央集権 · Prover SDK 開放 · Foundation+STRK 治理 | ~120 dApp · Ekubo · ZkLend · Visa Aeon · Provenance pilot | L1  blobs + Volition モード + EigenDA 探索中 |
| **Scroll** | Type 2(99% bytecode-equivalent) | Halo2  + PSE-zkEVM · multi-proof agg | 15-25 分 | sub-cent($0.005-0.02) | $700M | 2023-10  · Stage 1  | Seq 中央集権 · Prover サードパーティ beta · 7d timelock + SC | ~180 dApp · Aave / Uni / Pendle / GMX · Scroll Canvas | L1  blobs only(validium しない明示) |
| **Linea (Consensys)** | Type 2  | zk-SNARK custom(VK2.0/3.0  · Vortex+Arcane) | 10-20 分 | sub-cent($0.002-0.01) | $1.2B | 2023-07  · Stage 1  | Seq 中央集権 · Prover Consensys+SDK · 7d timelock + SC | ~200 dApp · MetaMask 統合 · Aave / Uni / OKX | L1  blobs only(all on-chain スタンス) |
| **Taiko** | Type 1(bit-for-bit EVM) | Halo2(SGX+ZK) · SP1 / Risc Zero / Aligned 3 方 | 20-40 分 | $0.01-0.05  | $350M | 2024-05 メインネット · Stage 1 進化中 | **Based rollup · Seq は L1  proposer 借用 · Permissionless prover market · 7d timelock** | ~80 dApp · Ethereum-native fork · Vitalik 推奨 based rollup | L1  blobs(based rollup は L1  DA 必須) |
| **Kakarot** | Type 4(EVM on Cairo on StarkNet) | StarkNet Cairo-STARK 借用 | ~30-60 分(StarkNet 借用) | StarkNet よりやや高い | $15M | 2024 Q4 beta · production-grade ではない | StarkNet 借用 · Kakarot チーム主導 | ~10-20 dApp · 実験的 deploy | StarkNet 借用(L1  blobs + Volition + EigenDA 探索) |
| **Polygon Miden** | 非 EVM(MASM · EVM transpiler early) | Miden VM(Winterfell STARK) · **クライアント prover** | ユーザーローカル 1-30s · L1  batch 10-20 分 | sub-cent(prove ローカル) | $30M | 2024 testnet · 2026 メインネット beta | Seq 中央集権 · **Prover ユーザー自己 prove(自然に分散化)** | ~10 dApp · プライベート支払い / DeFi 実験 | Miden P2P 自社 DA · Celestia / EigenDA 探索 · AggLayer 接続 |
| **ImmutableX zkEVM** | Type 2(Polygon zkEVM stack ベース) | Plonky2(Polygon 借用) | 10-20 分 | NFT gas-free 補助 · その他 sub-cent | $280M(NFT-heavy) | 2024 Q1 zkEVM メインネット · 以前は StarkEx | Seq 中央集権(ゲーム位置づけ) · Prover Polygon 借用 · 7d timelock | **gaming に特化** · 80+ ゲーム: Illuvium / Gods Unchained / Guild | L1  blobs + 一部 NFT metadata validium |

**マトリクスの読み方**:

- **EVM等価性 vs 証明コストのトレードオフ**: Type 1(Taiko)が最も高価だが完璧な互換性を持つ。Type 4(zkSync · StarkNet · Kakarot)は最も安価だが dev tooling 対応が必要。
- **DA層の選択は institutional vs DeFi のスタンスを反映する**: Scroll / Linea / Taiko は L1  blobs を死守(institutional grade)し、Polygon / StarkNet / Miden は validium / Volition を提供する(DeFi UX 優先)。Immutable は hybrid(NFT は validium でコスト削減)。
- **分散化の実態**: **すべての ZK-EVM の sequencer は中央集権**(2026-Q2)。唯一の例外は Taiko based rollup。Prover decentralization の進捗は Polygon(5 社ネットワーク) > Scroll / StarkNet(SDK 開放) > その他(チーム主導)。
- **TVL と 経済圏 traction は完全には相関しない**: zkSync は $2.0B の高 TVL を持つが、Type 4 が開発者移行コストを制限する。Linea の $1.2B は MetaMask トラフィック優位を借用する。Scroll / Polygon は Type 2  + 中等 TVL の「balanced choice」である。

## 境界事例 / 今後の方向性

**EVM等価性段階の進化方向**: Polygon zkEVM は 2027 年に Type 1 達成を公開 roadmap として示している。Taiko はすでに Type 1 で、他 ZK-EVM の reference benchmark である。zkSync Era と StarkNet は Type 4 哲学を維持する(prove cost を最適化し、dev tooling コストを受容する)。Linea と Scroll は Type 2 で安定しており、Type 1 へのアップグレード計画はない(最後の 1% 互換性投入は対効果が低いと判断)。

**証明システムの収束 vs 多元化**:

- **収束トレンド**: 大部分の ZK-EVM は最終的に SNARK wrap(L1  verification cost のため · groth16  / plonky 等)を行う。内部 STARK(zkSync Boojum · Polygon Plonky2)でも同様。
- **多元化トレンド**: StarkNet / Miden はネイティブ STARK を堅持する。耐量子 + クライアントフレンドリーのためである([[systems/post-quantum-blockchain-day1-integration]] を参照)。SP1  / Risc Zero / Aligned などの prover 汎用化(任意の rollup が選択可)は modular proving の新トレンド。
- Multi-proof aggregation([[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation fault prover]] を参照)により、1 つの rollup が複数の独立 prover を同時に実行でき、エラー時に fallback できる。Taiko が先駆者である。

**Sequencer decentralization タイムテーブル**: Polygon zkEVM · zkSync Era · Scroll · Linea はいずれも 2026-2027 に shared sequencer(Espresso / Astria / Radius)導入を公開している。Taiko based rollup は自然に解決済みである。Vitalik は 2024 年に、ZK-EVM は prover ではなく sequencer decentralization を優先解決すべきだと公開提案した。sequencer 集中は liveness リスクがより大きいためである。

**AggLayer / ZK Stack / Superchain 派閥戦**:

- Polygon AggLayer は Polygon zkEVM + zkSync(一部)+ Astar + その他を連合し、決済 layer + cross-chain LP を共有する
- zkSync ZK Stack は Matter Labs 主導の hyperchain フレームであり、GRVT · Treasure · Cronos zkEVM をすでに deploy している
- Optimism Superchain(本マトリクスに含まれない OP-rollup)が対応物である
- 長期的にはすべての rollup 間で何らかの unifier が必要だが、AggLayer / ZK Stack / Superchain は各々別個に推進されている。ユーザーが stack を跨いで利用するには、汎用ブリッジが依然として必要である([[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole matrix]] を参照)

**DA層と EigenLayer の関連**: EigenDA([[systems/eigenlayer-overview|EigenLayer overview]] を参照)は複数の ZK Stack hyperchain、StarkNet Volition、Miden / Kakarot などに alt-DA を提供する。ただし、ZK-EVM が alt-DA(L1  security の放棄)を使うべきかは依然として議論がある。Scroll / Linea / Taiko 派は L1  DA を堅持し、Polygon / StarkNet / Miden 派は選択肢を提供する。institutional 顧客(SWIFT / DTCC · [[systems/chainlink-ccip-institutional-messaging]] を参照)は L1  DA を明確に要求する。

**Pectra EIP-7691 の影響**([[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]] を参照): blob target 3→6  + max 6→9 により、ZK-EVM submit cost はさらに -50% となり、L1  blobs を使うすべての rollup が直接受益する。2026-Q4 の Fusaka PeerDAS により、さらに 10× の容量になる。

**Formal verification の進捗**: ZK-EVM は formal spec implementation co-design([[systems/formal-spec-implementation-codesign|formal spec implementation codesign]] を参照)の天然の舞台である。Solidity / EVM spec + ZK circuit spec の双方向 spec 一致性が、核心的な security point になる。Linea と Consensys Diligence チームは formal verification の進捗を公開している。Scroll は PSE と長期的に学術協業している。zkSync Boojum prover は Galois が独立監査した。

**機関 vs DeFi の選定**:

- Institutional(tokenized fund · DvP · 規制コンプライアンス): Linea(MetaMask Institutional 統合 · Consensys 裏付け) · Scroll(EVM-equivalent + L1  DA 純度) · Polygon zkEVM(Franklin Templeton pilot 先例)
- DeFi-native(高 TPS · ロングテール dApp): zkSync Era · StarkNet · Polygon AggLayer
- Gaming-specific: ImmutableX
- Privacy-first: Polygon Miden(クライアント prover + privacy 設計)
- Ethereum-aligned(maximum decentralization · Vitalik 推奨): Taiko based rollup

## 関連項目
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

## 出典

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
