---
title: DA layer 全景対照 2026 · Celestia · EigenDA · Ethereum blobs · Avail · NEAR DA
aliases: [data availability comparison 2026, celestia eigenda blobs avail near da, modular da layer matrix, da layer competition post-dencun, ethereum blob vs celestia, eigenda restaking-secured da, avail polkadot da, near da bridged rollup, da cost per gb-day 2026]
domain: systems
created: 2026-05-25
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-25
confidence: likely
tags: [systems, matrix, data-availability, celestia, eigenda, ethereum-blob, avail, near-da, modular, rollup, eip-4844, dencun]
status: active
sources:
  - https://docs.celestia.org/
  - https://docs.eigenda.xyz/
  - https://ethereum.org/en/developers/docs/data-availability/
  - https://docs.availproject.org/
  - https://near.org/blog/near-da
  - https://l2beat.com/data-availability/summary
  - https://defillama.com/chains/Rollup
  - https://blobscan.com/
---

# DA layer 全景対照 2026 · Celestia · EigenDA · Ethereum blobs · Avail · NEAR DA

## TL;DR

- 5 つの主流 DA(data availability)layer の 2026-Q2 時点での **アーキテクチャ · セキュリティモデル · GB 日あたりコスト · throughput · finality · 採用 rollup · ガバナンス · 規制エクスポージャ** 8 次元対照
- **Ethereum blobs**(EIP-4844 · [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 経済と 2026 市場影響]] 参照)は現在 ETH-aligned rollup の default —— セキュリティ最高(Ethereum L1 が直接背書)· コスト中等 · target=6/max=9 blob/block(Pectra 後)([[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691]] 参照)
- **Celestia** は modular DA のパイオニア —— 独立 PoS チェーン · Data Availability Sampling(DAS)+ Nakamoto スタイルブロック生成 · コスト最低 · ただしセキュリティ ≠ Ethereum レベル
- **EigenDA** は EigenLayer restaking-secured DA([[systems/eigenlayer-overview|EigenLayer overview]] 参照)—— ETH staking 経済セキュリティを共有 · コストは blob よりやや低い · throughput は顕著に高い
- **Avail** は Polkadot 系 DA(元 Polygon Avail · 独立後 Avail Project)—— KZG + DAS · hybrid モード(EigenLayer 接続)準備中 · 早期市場シェア
- **NEAR DA** は NEAR Protocol の DA サービス —— NEAR コンセンサス + 極低コストを利用 · Polygon CDK / Caldera 等の RaaS に接続 · 主に非 ETH-aligned rollup にサービス
- **GB 日あたりコスト 2026-Q2 推定**:Ethereum blob ~$0.10-0.30(blob fee 変動)· Celestia ~$0.02-0.05 · EigenDA ~$0.06-0.15 · Avail ~$0.04-0.08 · NEAR DA ~$0.01-0.03
- **採用 split**:Base/Arbitrum/Optimism/zkSync/Linea/Scroll/Polygon zkEVM = L1 blobs · Mantle/Movement/Cyber/Rivalz = EigenDA · Manta Pacific/Eclipse(一部)/Polygon CDK 一部 = Celestia · Polygon CDK 一部/Sophon = Avail · Caldera RaaS 一部 = NEAR DA
- 経路:[[systems/INDEX|systems index]] · [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]] と対照

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 経済と 2026 市場影響]] for the Ethereum-native DA path that competes with all alt-DA, [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]] for the blob capacity expansion that affects all DA price competition, and [[systems/eigenlayer-overview|EigenLayer overview]] for the restaking economics underpinning EigenDA. For the rollup ecosystem that consumes these DA layers, see [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]] and [[systems/rollup-market-share-2026-arbitrum-optimism-base|rollup market share 2026]]. For the meta-strategy of L1/L2 separation that motivates DA modularity, see [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]. For consensus models that DA layers use, see [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT architecture]] and [[systems/threshold-bft-consensus-rust-implementations|threshold BFT consensus Rust implementations]]. For cross-chain bridge security that interacts with DA choice, see [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]]. For restaking AVS landscape including EigenDA as the largest AVS, see [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]].

## Why this matrix matters

DA layer は 2023-2024 時点では「rollup は自動的に Ethereum L1 calldata を使う」がデフォルトであった。Dencun(2024-03)で EIP-4844 blob が導入された後 · L1 blobs は ETH-aligned rollup のデフォルト選択肢となったが · 同時に「alt-DA に依然市場はあるか」の議論が開かれた。2025-2026 に 5 つの DA 競争構図が形成された:

**Modular thesis の中核問題**:rollup は Ethereum レベルの DA セキュリティを必要とするか?
- **ETH セキュリティ主義者**(Vitalik 公開立場 · [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]] 参照):rollup の中核 commitment は「L1 DA が状態再構築可能性を保証する」こと · alt-DA を使うのは validium であり rollup ではない · rollup と呼ぶべきでない
- **Modular 主義者**(Celestia / Avail / EigenDA 立場):rollup セキュリティ ≠ DA は必ず L1 でなければならない · 異なるユースケースは異なるセキュリティレベルを選択可能 · 「modular blockchain」は新パラダイム
- **Pragmatic な中間路線**(Mantle / Manta / Eclipse 等):大半の dApp は L1 DA レベルを必要としない · 節約したコストはユーザー補助に回せる

開発者(rollup stack を選ぶ)にとって:DA 選択は sequencer コストを決定し · ユーザー gas コストを決定し · dApp 経済モデルを決定する。institutional 顧客(tokenized fund / DvP)にとって:L1 DA は institutional grade · alt-DA は commercial grade([[systems/chainlink-ccip-institutional-messaging|CCIP institutional]] における機関の L1 DA への明確な要求と対照)。

本マトリクスは公開運営中の 5 つの DA layer · 8 次元横断 · 2026-Q2 データスナップショットを対照する。

## Per-DA-layer sections

### Ethereum blobs (EIP-4844)

**アーキテクチャ**:Ethereum L1 ネイティブ · 1 block あたり 4 個の blob(target=3 · max=6 Dencun · target=6 · max=9 Pectra 後)· 各 blob 128 KiB · 合計 max ~1.1 MiB/block(post-Pectra)。Blob データは ~18 日保持 · その後 commitment(KZG)のみオンチェーンに残る。Blob 価格は calldata から独立 · EIP-1559 スタイル fee market を使用。

**セキュリティモデル**:Ethereum L1 PoS validator(~100 万+)+ DAS(EIP-7594 PeerDAS 2026-Q4+ で導入)。Slashing は Ethereum L1 プロトコルで直接執行。現セキュリティレベル = Ethereum L1 自身(中本聡係数 ~5 · 総 ETH staked ~$120B · 攻撃コスト ~$40B+)。

**GB 日あたりコスト**(2026-Q2 推定):~$0.10-0.30(blob fee 変動 · ピーク時 $1+ · 谷時 $0.05)。calldata より ~100x 安い。

**Throughput**:Pectra 後 ~1.1 MiB/block(12s ブロック)≈ ~6 GB/day。Fusaka PeerDAS 後理論的に ~60 GB/day 到達可能。

**Finality**:Ethereum L1 finality(~12-15 分 · 2 epoch)。

**採用 rollup**:Arbitrum · Optimism · Base · zkSync Era · Linea · Scroll · Taiko · Polygon zkEVM · Blast · Mode · Mantle(一部)· 等 95%+ の ETH-aligned rollup default。

**ガバナンス**:Ethereum プロトコルガバナンス(EIP プロセス · ACD)· オンチェーン social consensus。Pectra の次は Fusaka PeerDAS(2026-Q4 予想)。

**規制エクスポージャ**:Ethereum L1 自身は既に SEC が長期注目しているが「sufficiently decentralized」と広く認識されており · security に該当しない。Blob データ自身はバイト保存のみ · 規制 surface は極小。

### Celestia

**アーキテクチャ**:独立 PoS L1 · Cosmos SDK + Tendermint BFT · DA に特化(EVM / スマートコントラクト実行なし)。Data Availability Sampling(DAS)により light client が少量サンプリングで block 全体の可用性を検証可能 · block 全体をダウンロードする必要がない。2D Reed-Solomon erasure coding + KZG commitment。

**セキュリティモデル**:Celestia validator(~100 active validator · TIA token staking)· Tendermint BFT(2/3+ honest)· DAS は「majority malicious validator でも light client で検出可能」というより強い保証を提供。ただし staking 経済規模 ~$1-2B は Ethereum L1 より大きく低い。

**GB 日あたりコスト**(2026-Q2 推定):~$0.02-0.05(blob 混雑度に依存)。最安 · Ethereum blob の ~1/5。

**Throughput**:2 MB/block(2026 アップグレード · ブロック ~6s)≈ ~28 GB/day。2027 に 8 MB/block ≈ 120 GB/day へアップグレード計画。

**Finality**:Tendermint 即時 finality(~6s · 単一ブロック)。

**採用 rollup**:Manta Pacific(主要 L2 顧客)· Eclipse(一部モジュール)· Polygon CDK 一部設定 · Caldera RaaS 一部 · Astria sequencer · Movement Labs · Lyra · 等 ~30+ chain(2026)。

**ガバナンス**:Celestia Foundation + TIA token DAO · アップグレードはオンチェーンガバナンス投票で。

**規制エクスポージャ**:TIA token は 2024 ローンチ後 SEC が明確な表態なし · Celestia Labs は能動的に米国リテール geo-fence。EU MiCA 下 TIA が utility token に該当するかは未裁定。

### EigenDA

**アーキテクチャ**:EigenLayer restaking secured([[systems/eigenlayer-overview|EigenLayer overview]] と [[systems/eigenlayer-avs-mechanism|EigenLayer AVS mechanism]] 参照)· EigenDA operator は EigenLayer から ETH stake を借用して経済セキュリティに · 高 throughput DA service を提供。Dispatcher / Encoder / Validator の 3 役割 · KZG commitment · DAS。

**セキュリティモデル**:EigenLayer ~$14B TVL のうち ~$6B が EigenDA に opt-in([[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]] 参照)· slashing は EigenLayer プロトコルで執行。セキュリティ ≈ ETH staking だが 1 層挟む(restaking 同意)· Vitalik は「restaking コンセンサスに過度依存すべきでない」と警告([[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]] 参照)。

**GB 日あたりコスト**(2026-Q2 推定):~$0.06-0.15。blob と Celestia の間 · operator + restaker reward を支払う必要があるため。

**Throughput**:~15 MB/s sustained(~1.3 TB/day theoretical · 実際 ~100-500 GB/day 負荷次第)。最高 throughput の DA layer。

**Finality**:EigenDA dispatcher confirmation(~10-30s)+ EigenLayer slashing window に依存。

**採用 rollup**:Mantle(主要)· Movement · Cyber · Rivalz · 複数の ZK Stack hyperchain · 複数の OP Stack rollup · Arbitrum Orbit 一部。EigenDA は modular rollup-as-a-service の default alt-DA。

**ガバナンス**:EigenLabs チーム + EIGEN token holders + Security Council。

**規制エクスポージャ**:EIGEN token は 2024 ローンチ · SEC 明確な表態なし · EigenLayer は能動的に米国ユーザーへの EIGEN airdrop を遅延。restaking economics は規制視点で securities に近い([[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]] 参照)。

### Avail

**アーキテクチャ**:独立 DA chain(元 Polygon Avail · 2023 spin off して独立プロジェクト)。Substrate フレームワーク(Polkadot 系)· Babe+Grandpa コンセンサス · KZG + DAS · Celestia 設計に類似だが Polkadot の学術血統由来。EigenLayer 統合(「Avail + EigenLayer」hybrid モード)を計画 · ETH stake をさらに借用してセキュリティを強化。

**セキュリティモデル**:Avail validator(~150 active)· Babe+Grandpa BFT · staking 経済規模 ~$200-500M(2026)。EigenLayer hybrid モード稼働後に ETH stake を借用してセキュリティ強化可能 · ただし 2026-Q2 では主に自身の AVAIL token staking 頼み。

**GB 日あたりコスト**(2026-Q2 推定):~$0.04-0.08。Celestia よりやや高い · staking 経済規模が小さく + validator 補助が必要なため。

**Throughput**:~2 MB/block(20s ブロック)≈ ~8.6 GB/day。4 MB/block へのアップグレード計画 ≈ 17 GB/day。

**Finality**:Grandpa finality(~30s-1min)。

**採用 rollup**:Polygon CDK 一部 chain · Sophon(zkSync ZK Stack 提携)· QuarkChain · Madara · LumioVM · 一部 RaaS 設定。顧客数は Celestia / EigenDA より少ない。

**ガバナンス**:Avail Foundation + AVAIL token DAO(2025 token ローンチ後)。

**規制エクスポージャ**:AVAIL token は比較的新しい(2025 ローンチ)· 規制ポジション未明。Avail チームは主に欧州 · MiCA コンプライアンス優先。

### NEAR DA

**アーキテクチャ**:NEAR Protocol の DA サービスモジュール · NEAR sharded コンセンサス + storage staking を活用。独立 chain ではなく · NEAR L1 上の DA service · cross-chain bridge 経由で EVM rollup がアクセス可能。

**セキュリティモデル**:NEAR validator(~250 active)· NEAR PoS コンセンサス · staking 経済規模 ~$1-2B(NEAR token 時価総額 × stake ratio)。Bridge セキュリティは追加 surface([[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]] 参照)。

**GB 日あたりコスト**(2026-Q2 推定):~$0.01-0.03。最安 · NEAR の極低 storage cost 経済を利用。

**Throughput**:NEAR sharding に依存 · 理論 ~100 MB/s sustained · 実際 rollup 顧客向けサービス ~10-50 GB/day。

**Finality**:NEAR finality(~2-3s · Ethereum より顕著に速い)。

**採用 rollup**:Caldera RaaS 一部 chain · 一部 OP Stack rollup 実験 deploy · Polygon CDK 一部 · 主に非 ETH-aligned rollup にサービス。顧客数 < Celestia / EigenDA / Avail。

**ガバナンス**:NEAR Foundation + NEAR token DAO · NEAR DA チームがロードマップを主導。

**規制エクスポージャ**:NEAR token は 2024-2025 に複数 jurisdiction で審査を受けたが · SEC に security と直接認定されていない。NEAR Protocol 全体の規制エクスポージャは相対的に中程度。

## Big comparison matrix table

**5 DA layer × 8 次元対照**(2026-Q2 状態):

| DA Layer | アーキテクチャ | セキュリティモデル | Cost/GB-day | Throughput | Finality | 採用 rollup | ガバナンス | 規制エクスポージャ |
|---|---|---|---|---|---|---|---|---|
| **Ethereum blobs (EIP-4844)** | Ethereum L1 ネイティブ · KZG · target=6/max=9 (post-Pectra) | Ethereum PoS ~100万 validator · DAS (PeerDAS 2026-Q4) · 攻撃コスト $40B+ | $0.10-0.30 | ~6 GB/day (post-Pectra) · Fusaka 後 ~60 GB/day | ~12-15 min (2 epoch) | **95%+ ETH-aligned rollup**: Arbitrum · Optimism · Base · zkSync · Linea · Scroll · Taiko · Polygon zkEVM | Ethereum プロトコルガバナンス (EIP/ACD) | 極低 · Ethereum sufficiently decentralized 共識 |
| **Celestia** | 独立 PoS · Cosmos SDK+Tendermint · DAS · 2D RS+KZG | ~100 validator · TIA staking ~$1-2B · DAS 強保証 | **$0.02-0.05** (最安 modular DA) | 2 MB/block 6s ≈ 28 GB/day · 2027 8 MB target | ~6s instant (Tendermint) | Manta Pacific · Eclipse 一部 · Polygon CDK 一部 · Astria · Movement · ~30+ chain | Celestia Foundation+TIA DAO | TIA SEC 未表態 · geo-fence US · MiCA 未裁定 |
| **EigenDA** | EigenLayer AVS · Dispatcher/Encoder/Validator · KZG+DAS | EigenLayer ~$6B opt-in (restaking) · slashing 経由 EigenLayer · ETH stake 借用 | $0.06-0.15 | **~15 MB/s sustained** (~100-500 GB/day 実際) | ~10-30s dispatcher + slashing window | Mantle · Movement · Cyber · Rivalz · ZK Stack hyperchain · OP Stack 一部 · Arbitrum Orbit 一部 | EigenLabs+EIGEN+SC | EIGEN SEC 未表態 · restaking は securities に近い |
| **Avail** | 独立 DA chain · Substrate (Polkadot 系)· Babe+Grandpa · KZG+DAS | ~150 validator · AVAIL staking ~$200-500M · EigenLayer hybrid 計画 | $0.04-0.08 | 2 MB/block 20s ≈ 8.6 GB/day · 4 MB アップグレード ≈ 17 GB | ~30s-1min (Grandpa) | Polygon CDK 一部 · Sophon · QuarkChain · Madara · LumioVM | Avail Foundation+AVAIL DAO | AVAIL 2025 新ローンチ · MiCA コンプライアンス優先 |
| **NEAR DA** | NEAR L1 モジュール · sharded コンセンサス · storage staking · bridge 経由 EVM | NEAR ~250 validator · staking ~$1-2B · bridge セキュリティは追加 surface | **$0.01-0.03** (最安) | 理論 100 MB/s · 実際 ~10-50 GB/day | ~2-3s (NEAR fast finality) | Caldera RaaS 一部 · OP Stack 実験 · Polygon CDK 一部 | NEAR Foundation+NEAR DAO | NEAR 複数 jurisdiction 審査 · 中等規制エクスポージャ |

**マトリクスの読み方**:
- **Cost 順位**:NEAR DA < Celestia < Avail < EigenDA < Ethereum blobs(blob 最高価だが最安全 · NEAR 最安だが顧客数小)
- **Throughput 順位**:EigenDA(最高) > NEAR(理論高 · 実際中) > Celestia ≈ Avail ≈ Ethereum blob(post-Pectra)
- **セキュリティレベル順位**:Ethereum blobs(最高 · L1 ネイティブ) > EigenDA(ETH restake 借用) > Celestia ≈ NEAR DA(独立 PoS · staking ~$1-2B) > Avail(staking 規模最小)
- **Finality 速度順位**:NEAR DA(2-3s) > Celestia(6s) > EigenDA(10-30s + slashing) > Avail(30s-1min) > Ethereum blobs(12-15min)
- **採用規模順位**:Ethereum blobs(95%+ ETH-aligned) > Celestia(~30+ chain · alt-DA 主導) > EigenDA(~20 chain · 成長最速) > Avail / NEAR DA(各 <10 主要 chain)

## Modular thesis post-Dencun

### Dencun 前 vs 後

**Dencun 前(2024-03 前)**:
- ETH-aligned rollup が L1 calldata 使用 · コスト高 · rollup の主コスト(~80%)
- Alt-DA(Celestia 2023-10 メインネット · EigenDA 2024-Q1 メインネット · Avail 2024-Q2 · NEAR DA 2023)が「90%+ 安い」と位置付け · cost-sensitive 顧客を奪う
- Modular thesis 論調:「rollup は自由に DA を選ぶべき · Ethereum L1 DA に縛られる必要はない」

**Dencun 後(2024-03 以降)**:
- L1 blob で ETH-aligned rollup コストが ~100x 下落 · 大量の rollup が blob 残留を選択
- Alt-DA 価格優位は ~50x から ~3-5x に縮小(blob $0.10-0.30 vs Celestia $0.02-0.05)
- Modular thesis 論調が転換:「小コスト差ではセキュリティレベル + エコシステム整合を考慮すべき · 大半 ETH-aligned が blob を選択 · 非 ETH-aligned が alt-DA を選択」
- Pectra(2025-Q2)で blob target 倍増 · alt-DA 価格優位をさらに圧縮
- Fusaka PeerDAS(2026-Q4 計画)でさらに 10x blob 容量 · alt-DA が ETH-aligned 市場シェアでさらに圧縮される可能性

### Alt-DA の差別化戦略

blob 価格圧力に直面し · 各 alt-DA は異なる differentiation を取る:

**Celestia**:
- 「modular sovereignty」路線 · Cosmos / Move / 非 EVM エコシステム(Manta · Eclipse · Movement · Astria)を強調
- ETH-aligned と直接競争しない · 「自身で settlement layer を選びたい」sovereign rollup にサービス
- TIA token 経済インセンティブ · rollup 顧客に token incentive

**EigenDA**:
- 「ETH-aligned だが throughput 極高」路線 · 高 TPS rollup(Mantle · DeFi 重型 dApp)にサービス
- EigenLayer $14B+ TVL の経済セキュリティを借用 · L1 DA レベルに近い
- modular rollup-as-a-service(RaaS)の default · Caldera · AltLayer · Conduit · 等が全て default EigenDA

**Avail**:
- 「L1 DA 代替 + EigenLayer hybrid」路線 · 独立性 + ETH stake 借用を両立
- Polkadot 学術血統 · Polygon CDK / Substrate 系エコシステムで優位
- 顧客数は現在最小 · 長期的に EigenLayer hybrid が顧客を引き付けるか

**NEAR DA**:
- 「極低コスト + NEAR fast finality」路線 · 非 DeFi 高頻度ユースケース(ゲーミング · ソーシャル)にサービス
- 顧客は主に RaaS · 大手 rollup ではない
- 長期価値は NEAR Protocol エコシステムの健全度次第

### 誰がどの DA を選ぶか · 意思決定次元

**ETH-aligned + institutional grade**(Coinbase Base · 機関 RWA · tokenized fund):
- Ethereum blobs 必須 · セキュリティレベル = Ethereum L1 · 規制 surface 最小
- alt-DA は選べない · 機関 risk committee は非 L1 DA を受け入れないため

**ETH-aligned + DeFi-native**(Arbitrum · Optimism · zkSync 等の大型 ZK/OP rollup):
- 主に Ethereum blobs · エコシステム整合 + ユーザー期待
- 一部高 throughput 子チェーンは EigenDA を選択可能(Arbitrum Orbit · OP Stack 子 rollup)

**Modular rollup-as-a-service**(Caldera · AltLayer · Conduit 顧客):
- default EigenDA(ETH-aligned · 高 throughput)
- 一部顧客は Celestia(安い)または Avail / NEAR DA(より安い)

**Non-ETH-aligned**(Cosmos · Move · Solana エコシステム拡張):
- 主に Celestia(Cosmos 血統整合)· または NEAR DA(NEAR エコシステム)
- Ethereum blobs は選ばない · エコシステム非整合 + 不要な L1 fee エクスポージャ

**ゲーミング / ソーシャル / 高頻度低価値**(Web3 game · social dApp):
- 主に NEAR DA(最安) · または Celestia(安 + 中等セキュリティ)
- Ethereum blobs は選ばない · コストが依然ネイティブ gas budget を超える

## Boundary cases / future trajectory

**PeerDAS の影響**(Fusaka 2026-Q4 計画):
- Ethereum blob 容量 10x · 1 日あたり ~60 GB DA
- Alt-DA 価格優位は 3-5x から ~1.5-2x へ縮小 · さらなる圧力
- Celestia / Avail は自身の容量アップグレードで対応計画(Celestia 2027 8 MB block)

**EigenDA の restaking 経済境界**:
- EigenDA 収入は 2026 推定 ~$120M ARR([[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS matrix]] 参照)
- 収入の 70-90% を operator + restaker に分配 · EigenLabs は 10-30% 抽出
- EigenLayer 総 TVL が restaking 規制強化で下落すれば · EigenDA セキュリティ予算も同期下落
- 逆に restaking 規制 clarity + TVL 成長があれば · EigenDA は alt-DA で dominant に

**Celestia 長期経路**:
- 既に modular thesis の旗印 · ただし ETH-aligned 顧客は成長せず(blob が既に安いため)
- 長期的に Cosmos / Move / sovereign rollup エコシステム頼み · ETH エコシステムと分岐
- TIA token 経済は継続的に rollup 顧客が DA fee を支払うことを要するが · alt-DA 価格戦争で fee 引き上げ困難

**Avail は逆襲できるか**:
- Polkadot 系学術血統強い · ただし顧客数小
- 「EigenLayer hybrid」が鍵 · 成功すれば ETH stake 借用でセキュリティ強化 · Celestia から一部顧客を奪える可能性
- Substrate / Polygon CDK 統合は別の経路

**NEAR DA のニッチ化**:
- 価格優位明確 · ただし NEAR Protocol 全体エコシステム規模が限定的
- 長期的にゲーミング / ソーシャル / 高頻度低価値 DA に特化する可能性 · DeFi 頭部 rollup ではなく
- cross-chain bridge 経由で EVM rollup にサービス提供することで追加セキュリティ surface を導入

**機関顧客の DA 選択**:
- 2026 機関 RWA 事例(BlackRock BUIDL · Franklin Templeton FOBXX · 等)はいずれも Ethereum L1 または Polygon zkEVM L1-DA にデプロイ · alt-DA は受け入れず
- 長期的に機関が EigenDA(ETH stake 借用)を受け入れるかは EigenLabs の hopeful path · ただし現時点では institutional risk committee は依然純 L1 DA を好む

**DA layer と ZK proving の関連**:
- ZK rollup は transaction batch を small proof に圧縮 · proof を L1 へ · 大データ(state diff)を DA へ
- DA layer 容量が大きいほど · ZK rollup が処理可能な batch が大きく · より経済的
- ZK rollup は DA 選択により敏感 · コストの大頭であるため([[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup matrix 2026]] 参照)

**Multi-DA / DA aggregation**:
- 一部 rollup が「L1 blob + alt-DA 二層」モードを実験 · L1 blob に core commitment 保存 + alt-DA に完全 state diff 保存
- fallback セキュリティを提供(alt-DA が失敗しても L1 commitment から再構築可能)
- modular thesis の hybrid 経路 · ただしエンジニアリング複雑 · 少数のみ deploy

**規制非対称性**:
- Ethereum L1 は既に sufficiently decentralized · 規制 surface 最小
- Celestia / EigenDA / Avail / NEAR DA の token は全て規制グレーゾーン · 長期不確実性
- 機関顧客は規制リスク回避のため L1 DA を好む · これは alt-DA の長期 ceiling

**形式検証 / エンジニアリング品質**:
- Ethereum blob 実装は Geth / Nethermind / Besu / Erigon / Reth 等のマルチクライアント + 長期 audit · 最も成熟
- EigenDA は EigenLayer 主 AVS · 複数回 audit + slashing 起動前に厳審
- Celestia / Avail / NEAR DA はいずれも監査通過 · ただし production 経験 < Ethereum blob

## Counterpoints

- **alt-DA 価格優位は引き続き縮小**:Pectra 倍増 + Fusaka PeerDAS 10x 後 · alt-DA は 1.5-2x 価格優位のみ残る · 大手 rollup には魅力なし
- **EigenDA の「ETH stake 借用」は cascade risk**:Vitalik は restaking を「アプリケーション層コンセンサス」に過度拡張すべきでないと複数回警告 · EigenDA は大型アプリケーション · incident があれば EigenLayer 全エコシステムに波及する可能性
- **modular thesis は本当に長期価値を創造するか**:コスト以外に · alt-DA は他の differentiated value を提供するか?コスト戦のみなら · 長期 race-to-bottom · 利益率は薄い
- **機関は永遠に alt-DA を受け入れない**:institutional risk committee は L1 DA を厳格に要求 · これは alt-DA の長期 ceiling
- **L1 DA の「sufficiently decentralized」も変化**:Ethereum クライアント集中度(Geth 50%+ · Prysm 30%+ · Lido 30%+ stake)は長期的に信頼可能とは限らない · ただし alt-DA 集中度はさらに高い
- **Celestia の「sovereignty」論調は ETH エコシステム拡大下で周縁化される可能性**:大半の開発者は最終的に ETH エコシステムを選ぶ · sovereign rollup は少数ユースケース

## Open questions

- **Fusaka PeerDAS のスケジュール**:2026-Q4 / 2027-Q1 / さらに遅い?alt-DA 価格優位消滅のスケジュールを直接決定
- **EigenDA は Ethereum blob の monopoly ceiling を越えられるか**:ETH-aligned 市場で 30%+ シェアを取るには institutional が restaking セキュリティを受け入れる必要 · SEC / EU MiCA の restaking 定性次第
- **Celestia / Avail / NEAR DA は新たな differentiation が登場するか**:コスト以外に · sovereign rollup / プライバシー DA / specialized DA の新ユースケースがあるか
- **multi-DA hybrid は主流化するか**:エンジニアリング複雑度 vs セキュリティ + コスト優位が成立するか
- **機関 RWA は新たな institutional-grade DA を駆動するか**:BlackRock / Franklin / Goldman は DA layer に特定の規制 attestation を要求するか
- **AggLayer / Polygon CDK の DA strategy**:Polygon は L1 blob + Celestia + Avail を同時サポート · 長期的にどれに偏るか?
- **DA layer と sequencer decentralization の交互作用**:Espresso / Astria 等の shared sequencer が複数 rollup にサービス · DA 選択とどう結合するか
- **Light client / DAS セキュリティの実戦検証**:DAS は理論的に majority malicious 安全 · しかし実戦では attack scenario が少ない · ブラックスワン事象があるか

## Related

- [[INDEX|Wiki Index]]
- [[systems/INDEX|systems index]]
- [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 経済と 2026 市場影響]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 倍増と L2 経済連鎖]]
- [[systems/pectra-upgrade-overview|Pectra upgrade overview]]
- [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]
- [[systems/eigenlayer-overview|EigenLayer overview]]
- [[systems/eigenlayer-avs-mechanism|EigenLayer AVS mechanism]]
- [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]]
- [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]]
- [[systems/rollup-market-share-2026-arbitrum-optimism-base|rollup market share 2026]]
- [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]]
- [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]
- [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT architecture]]
- [[systems/threshold-bft-consensus-rust-implementations|threshold BFT consensus Rust implementations]]
- [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP institutional messaging]]

## Sources

- Celestia docs · https://docs.celestia.org/
- EigenDA docs · https://docs.eigenda.xyz/
- Ethereum.org DA · https://ethereum.org/en/developers/docs/data-availability/
- Avail docs · https://docs.availproject.org/
- NEAR DA blog · https://near.org/blog/near-da
- L2Beat DA summary · https://l2beat.com/data-availability/summary
- DefiLlama rollups · https://defillama.com/chains/Rollup
- Blobscan · https://blobscan.com/
- Vitalik blog · "Layer 2s as cultural extensions of Ethereum"(public)
- Ethereum Foundation EIP-7594 PeerDAS spec
