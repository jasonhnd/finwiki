---
title: EIP-4844 blob 経済と 2026 市場影響 · Dencun から Pectra · Fusaka までの全景
aliases: [eip-4844 blob 2026, blob economics 2026, dencun pectra fusaka blob, rollup cost reduction post-dencun, blob fee market mechanics, l2 sequencer margin recovery, blob target increase pectra, peerdas fusaka, blob market alt-da competition]
domain: systems
created: 2026-05-25
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-25
confidence: certain
tags: [systems, ethereum, eip-4844, blob, dencun, pectra, fusaka, l2, rollup, sequencer, blob-fee, peerdas, da]
status: active
sources:
  - https://eips.ethereum.org/EIPS/eip-4844
  - https://eips.ethereum.org/EIPS/eip-7691
  - https://eips.ethereum.org/EIPS/eip-7594
  - https://ethereum.org/en/roadmap/danksharding/
  - https://blobscan.com/
  - https://l2beat.com/scaling/summary
  - https://defillama.com/chains/Rollup
  - https://ethresear.ch/c/sharding/
---

# EIP-4844 blob 経済と 2026 市場影響 · Dencun から Pectra · Fusaka までの全景

## TL;DR

- EIP-4844(**proto-danksharding** · 2024-03 Dencun ローンチ)で **blob** を導入 —— rollup 専用の一時ストレージ · 価格は calldata から独立 · 18 日後は commitment のみオンチェーン残留
- **Blob mechanic**:各 block target=3 / max=6 blob(Dencun オリジナル)· 各 blob 128 KiB(131072 bytes)· 合計 max ~768 KiB/block(Dencun)
- **Pectra EIP-7691**(2025-Q2)で target → 6 / max → 9 · L2 calldata コスト -50%([[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]] 参照)
- **Fusaka PeerDAS**(EIP-7594 · 2026-Q4 計画)でさらに 10x 容量 → 理論 ~60 GB/day blob throughput
- **Blob fee market**:EIP-1559 スタイル · 独立 base fee · target を超えると fee が指数増加 · target を下回ると fee 減衰 · gas fee market と非結合
- **Dencun 後の L2 コスト削減**:Arbitrum / Optimism / Base 等の rollup ユーザー gas が ~100x 下落 · sequencer revenue は volume 上昇により net 正方向
- **Blob 市場参加者**:rollup sequencer(blob 提出者) · Ethereum builder / proposer(blob 包装者) · DA ユーザー(データ消費者)
- **alt-DA との競争**([[systems/data-availability-celestia-eigenda-blob-comparison|DA layer 全景対照]] 参照):blob が alt-DA 価格優位を 50x から 3-5x に縮小 · Pectra 後 1.5-2x · Fusaka 後消滅の可能性
- 経路:[[systems/INDEX|systems index]] · [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691]] / [[systems/data-availability-celestia-eigenda-blob-comparison|DA 対照]] とペアリング

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]] for the 2025-Q2 blob target doubling that directly extends EIP-4844, and [[systems/pectra-upgrade-overview|Pectra upgrade overview]] for the broader Ethereum upgrade context. For the L1/L2 strategic framing that makes blob economics structurally important, see [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]. For the DA layer competition that blob market reshapes, see [[systems/data-availability-celestia-eigenda-blob-comparison|DA layer 全景対照]]. For the rollup ecosystem consuming blobs, see [[systems/rollup-market-share-2026-arbitrum-optimism-base|rollup market share 2026]] and [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]]. For the institutional staking lane that holds the validator economy behind blob processing, see [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 · institutional staking]] and [[systems/bft-validator-economy-overview|BFT validator 経済学概観]]. For restaking-secured alternative DA, see [[systems/eigenlayer-overview|EigenLayer overview]] and [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]].

### Blob データ構造

**コア定義**(EIP-4844 spec):
- 1 blob = 4096 個の field element × 32 bytes = 131072 bytes = 128 KiB
- 各 transaction は 0 個または複数の blob を携帯可能(実際の制限は各 block の合計 blob 数)
- Blob は EVM 内でアクセス不可 · commitment(KZG point evaluation precompile · EIP-4844 で導入)経由でのみデータ存在性を証明可能
- Blob データは ~18 日(4096 epoch · target_blobs_per_block × MIN_BLOB_GASPRICE_UPDATE_FRACTION)後に P2P ネットワークから prune · KZG commitment のみ chain に永久残留

**blob commitment**:
- KZG commitment scheme(trusted setup ベース · Ethereum は Powers of Tau ceremony 2023 を使用)
- 各 blob に 1 つの 48-byte commitment · versioned hash(SHA256(commitment) · 32 bytes)を追加してオンチェーンに
- Rollup contract は KZG point evaluation precompile 経由で「blob の z 点での値が y」を証明可能(ZK rollup state transition 証明用)

### Blob fee market (EIP-1559 スタイル · 独立)

**コア mechanism**(EIP-4844 spec):
- 各 block に `excess_blob_gas` 状態変数あり · 「target を超過した blob gas」を累計
- `blob_base_fee = MIN_BLOB_GASPRICE * exp(excess_blob_gas / BLOB_GASPRICE_UPDATE_FRACTION)`
- target_blobs_per_block = 3(Dencun)/ 6(Pectra)/ 6(Fusaka 初期 · 後続調整可能)
- max_blobs_per_block = 6(Dencun)/ 9(Pectra)/ 18+ 計画(Fusaka PeerDAS)
- 各 blob は GAS_PER_BLOB = 131072 gas を消費
- 1 blob あたり 131072 × blob_base_fee wei を支払う · transaction gas から独立

**Fee ダイナミクス**:
- block の blob 数 = target なら · `excess_blob_gas` 不変 · fee 横ばい
- block > target なら · `excess_blob_gas` 増加 · fee 指数上昇
- block < target なら · `excess_blob_gas` 減少(min 0)· fee 指数下落
- 設計目標:blob fee を demand 弾力的にマッチング · calldata fee と非結合 · user gas に影響しない

**MIN_BLOB_GASPRICE = 1 wei**:
- demand 低時 · blob はほぼ無料(各 blob ~131072 wei ≈ 極小金額)
- demand 高時 · blob fee は 10-100 gwei に達する可能性 · 単 blob ~$0.10-$1+

### Blob 提出フロー(sequencer 視点)

L2 sequencer が L1 に batch を提出する典型フロー:
1. **Sequencer が L2 tx を収集 · 並べ · 実行**(ローカル)
2. **batch data をパッケージ**(L2 tx + state diff)· 圧縮(snappy / zstd / bzip2)
3. **EIP-4844 transaction を作成**(type 3)· 0-N 個の blob(各 blob 128 KiB)+ KZG commitment + versioned hash を含む
4. **支払い**:transaction gas(通常)+ blob gas(blob_base_fee × 131072 × blob 数)
5. **L1 block が transaction を包含 · validator は P2P 経由で blob data を受信**(blob は block body に入らず · 独立 P2P チャネルを通る)
6. **Rollup contract が KZG commitment を検証**(ZK rollup は proof が commitment を参照することを検証 · OP rollup は challenge window 内で challenge 可能)
7. **18 日後に blob data prune · commitment のみ chain に残留**

**Sequencer コスト構造**(post-Dencun):
- Transaction gas:~$1-5(EIP-4844 transaction overhead)
- Blob gas:~$0.10-$1 / blob(demand 次第)· 通常 batch あたり 3-6 blob を提出
- batch あたり総コスト:~$5-30 · ~10000+ L2 tx に分担 · L2 tx あたり ~$0.0005-$0.003
- Dencun 前比較(calldata 使用):L2 tx あたり ~$0.05-$0.20(L1 gas 次第)

### calldata との比較

| 次元 | Calldata(Dencun 前 / 依然オプション)| Blob(EIP-4844)|
|---|---|---|
| 価格 | gas_per_byte × gas_base_fee(高)| blob_base_fee × 131072 × blob 数 / blob bytes(低 ~100x)|
| 保存期間 | 永久(state)| ~18 日(P2P prune)+ commitment 永久 |
| EVM アクセス可能 | はい(CALLDATALOAD 等 opcode 経由) | いいえ(KZG point evaluation precompile 経由のみ)|
| 適用シナリオ | 状態アクセス · オンチェーンデータ消費 | rollup data availability · 短期再構築可能 |
| Fee market | user gas と共有 · 混雑伝染 | 独立 base fee · 混雑不伝染 |

### Dencun ローンチ初期(2024-03 - 2024-Q2)

**Pre-Dencun 状態**(2024-03 前):
- Arbitrum / Optimism / Base 等の OP rollup が calldata 使用 · 日次合計 calldata cost ~$2-5M
- zkSync / Linea / Scroll 等の ZK rollup も calldata + ZK proof submission 使用
- L2 sequencer revenue の 60-80% が L1 cost に使われ · 利益率が薄い
- L2 ユーザー gas $0.05-$0.50 / 単純 transfer

**Dencun ローンチ後即時効果**(2024-03 - 2024-Q2):
- 各 L2 sequencer が EIP-4844 blob に切替 · L1 cost が ~80-95% 下落
- L2 ユーザー gas が ~$0.001-$0.05 / 単純 transfer に下落 · ユーザー体感が大幅改善
- L2 sequencer margin が突然急騰(L1 cost 急落 · user gas 維持 · net margin 高い)
- ただし sequencer 間競争激化 · 数週間で順次 user gas を引き下げ · 一部は値下げをユーザーに譲り · 一部は sequencer revenue として保留

**Blob fee market 初期変動**:
- 2024-03 ローンチ初期 · blob 使用率不足 · blob_base_fee は MIN_BLOB_GASPRICE = 1 wei 維持
- 2024-Q2 以降 · Base / Arbitrum / Optimism が積極使用 · 平均 blob usage が target(3)に近づく
- 2024-Q3 にしばしば blob max(6)圧迫 · blob fee が 10-100 gwei に spike

### Blob fee spike 期(2024-Q3 - 2025-Q1)

**fee spike トリガーシナリオ**:
- Base 上の meme coin の波 · DEX swap volume 急上昇 · Base sequencer の batch 提出頻度上昇
- 複数 L2 が同時高負荷 · blob slot 争奪
- 単 block max=6 blob がしばしば食い尽くされ · `excess_blob_gas` 累計 · fee 指数上昇

**実証データ**(2024-Q4 ピーク期):
- Blob base fee が 200-500 gwei に spike · 単 blob ~$5-15
- L2 sequencer 単一 batch コストが $5-30 から $50-200 に上昇
- 一部 sequencer が一時的に calldata に retreat 選択(blob が高すぎる時)· または batch 頻度を下げる(ユーザー finality 時間が増加)
- ユーザー gas はピーク期に 5-10x 上昇可能 · ただし Dencun 前より遥かに低い

**コミュニティ議論**:
- EthMagicians / ethresear.ch 上で EIP-7691(blob target 倍増)の議論加速
- Dankrad Feist · Vitalik 等が PeerDAS(EIP-7594)ロードマップ加速を公開で複数回提言
- ACD が Pectra に EIP-7691 を含めることを確定

### Pectra 後(2025-Q2 - 2026-Q2)

**Pectra EIP-7691 ローンチ効果**:
- Blob target 3 → 6 · max 6 → 9
- L2 sequencer は normal load で blob fee spike をトリガーしなくなる(supply 倍増のため)
- ユーザー gas が ~30-50% 下落([[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 詳解]] 参照)
- Blob fee の大半時間 MIN(1 wei)維持 · 突発負荷(ETF ローンチ · meme coin spike 等)時のみ短期 spike

**2026-Q2 現状**:
- 平均 daily blob count ~30000-50000 blob(~7200 block/day に分布)· 平均 ~4-7 blob/block(target 6 をやや下回る)
- Blob fee 平均 ~1-5 gwei · 時々 50-100 gwei に spike
- Total daily blob cost ~$50000-$200000(全 rollup 横断)· alt-DA total revenue に近い
- 単 blob の実際平均 cost ~$0.10-0.30 · 1 GB DA cost ~$100-300(per day)

**Sequencer margin 回復**:
- L2 sequencer net margin は Pectra 後安定 · blob spike の急襲を再度心配する必要なし
- Base · Arbitrum · Optimism 等の頭部 L2 sequencer 年化 revenue 各 ~$50-150M(2026)
- Linea · Scroll · zkSync 等の中型 L2 sequencer revenue 各 ~$10-30M

### alt-DA との市場ダイナミクス

[[systems/data-availability-celestia-eigenda-blob-comparison|DA layer 全景対照]] を参照。Blob 市場の alt-DA への影響:

**Pre-Dencun**:
- Celestia / EigenDA / Avail / NEAR DA 価格優位 ~50x vs calldata
- Alt-DA が cost-sensitive rollup 顧客を奪い · modular DA 物語を形成

**Post-Dencun(2024-Q2 - 2025-Q1)**:
- Blob 価格優位で alt-DA 価格優位は ~5-10x に縮小
- 大半 ETH-aligned rollup は依然 blob を選択(エコシステム整合 + セキュリティ)
- Alt-DA は非 ETH-aligned(Cosmos · Move · sovereign rollup)へ転換 · または high-throughput 子チェーン(Mantle · Manta)

**Post-Pectra(2025-Q2 - 2026-Q2)**:
- Blob 容量倍増 · alt-DA 価格優位がさらに ~3-5x に縮小
- Celestia 収入は ~50% YoY 成長したが顧客タイプ分化(主流 L2 は成長せず · sovereign / Move rollup 成長)
- EigenDA は EigenLayer セキュリティ + 高 throughput を借用 · ~$120M ARR 維持([[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS matrix]] 参照)

**Post-Fusaka(2026-Q4+)**:
- PeerDAS で blob 容量さらに 10x · alt-DA 価格優位は ~1.5-2x のみ残る可能性
- Alt-DA は純粋な differentiated value(sovereign · privacy · 特定 throughput)へ転換せねばならない · 純粋なコスト戦ではなく

### Blob 市場参加者

**Sequencer**(blob 提出者):
- 頭部:Base · Arbitrum · Optimism · zkSync · Linea · Scroll · Polygon zkEVM
- 中型:Taiko · Blast · Mode · Mantle(一部は EigenDA)· 等
- long-tail:複数の小型 OP Stack / ZK Stack rollup
- 合計 ~30-50 個の rollup が blob market の需要側

**Builder / Proposer**(blob 包装者):
- Flashbots · bloXroute · Manifold · Eden 等の MEV builder が transaction 順序付け以外に · blob も包装
- 各 block は proposer(無作為に選ばれた validator)が builder bundle を受け入れ · blob transaction を含む
- Blob の包装収入は builder revenue の一部

**Validator**(blob 転送者):
- ~100 万+ Ethereum validator が P2P ネットワーク経由で blob data を配信
- DAS(PeerDAS 導入後)で light client がサンプリング検証のみで · 全 blob ダウンロード不要に

**DA ユーザー**(データ消費者):
- 主に rollup 顧客(challenge prover · ZK verifier · state reconstruction)
- 次に indexer / explorer(blob データは 18 日 ephemeral 期)· 長期は archive node が必要(Blobscan / Ethscan 等)

### Blob vs calldata vs alt-DA · 9 次元対照

| 次元 | Calldata | Blob (EIP-4844) | EigenDA | Celestia | NEAR DA |
|---|---|---|---|---|---|
| **Cost per GB** | $500-2000+(GB あたり calldata 相当 ETH gas) | ~$100-300/GB-day | $60-150/GB-day | $20-50/GB-day | $10-30/GB-day |
| **保存期間** | 永久(L1 state) | 18 日 P2P + commitment 永久 | EigenDA dispatcher 設定(通常 14 日+ commitment) | Celestia 履歴完全保持 | NEAR 履歴保持 |
| **セキュリティレベル** | Ethereum L1(最高) | Ethereum L1 + DAS(post-PeerDAS) | EigenLayer ~$6B opt-in | Celestia ~$1-2B staking | NEAR ~$1-2B staking |
| **Throughput** | L1 gas 制限を受ける(~50-100 KB/block 実際) | 0.75 MB/block (Dencun) → 1.1 MB (Pectra) → ~11 MB (Fusaka PeerDAS) | 15 MB/s sustained | 2 MB/block / 6s = 28 GB/day | 理論 100 MB/s |
| **Finality** | L1 finality(~12-15 min) | L1 finality(~12-15 min) | ~10-30s + slashing | ~6s (Tendermint) | ~2-3s (NEAR) |
| **採用 share** | Pre-Dencun 主流 · post-Dencun 極少 | **95%+ ETH-aligned rollup default** | ~20 rollup · modular 主導 | ~30+ chain · 非 ETH-aligned 主導 | ~10 chain · ニッチ |
| **Fee market 設計** | user gas と共有(混雑伝染) | 独立 EIP-1559 base fee | EigenDA dispatcher が独自プライシング | Celestia 独自プライシング (TIA 計価) | NEAR storage fee モデル |
| **EVM アクセス可能** | はい(CALLDATALOAD)| いいえ(KZG point eval precompile 経由のみ) | いいえ | いいえ | いいえ |
| **規制 surface** | Ethereum L1 sufficiently decentralized | Ethereum L1 sufficiently decentralized | EIGEN token + restaking グレー | TIA token グレー | NEAR token 複数 jurisdiction 審査 |

**主要結論**:
- **Cost 順位**:Blob > EigenDA > Celestia > NEAR DA · ただし価格差は Pectra/Fusaka と共に縮小
- **セキュリティレベル順位**:Blob = Ethereum L1 (最高) > EigenDA (ETH stake 借用) > Celestia ≈ NEAR DA (独立 PoS)
- **Throughput 順位**:EigenDA / NEAR > Pectra Blob > Celestia / Avail > Fusaka Blob (EigenDA 同レベルへ跳躍)
- **Finality 順位**:NEAR > Celestia > EigenDA > Blob (Blob 最遅だが ZK proof と組み合わせれば finality 待ち不要)

### Pectra EIP-7691 前 vs 後

| 状態 | Pre-Pectra (Dencun) | Post-Pectra (2025-Q2+) |
|---|---|---|
| Blob target | 3 / block | 6 / block |
| Blob max | 6 / block | 9 / block |
| Max throughput | ~0.75 MB / 12s ≈ 5.4 GB/day | ~1.1 MB / 12s ≈ 8 GB/day |
| 平均 blob fee | 5-50 gwei (変動)| 1-5 gwei (大半時間) |
| L2 sequencer cost | $20-100 / batch (変動) | $5-30 / batch (安定) |
| L2 ユーザー gas | $0.001-0.05 (high vol 時 spike) | $0.0005-0.02 (Pectra 後さらに 30-50% 下落) |
| Alt-DA 価格優位 | ~5-10x | ~3-5x |

### Fusaka PeerDAS 予想(2026-Q4 計画)

EIP-7594(PeerDAS · Peer Data Availability Sampling):
- Validator は全 blob をダウンロードせず · DAS サンプリングで availability を検証
- 単 validator ネットワーク帯域要求が ~1/8 に下落(サンプリングのみで全ダウンロード不要のため)
- Blob 容量を 10x 拡張可能(max=9 から max=72+ へ)· validator ネットワーク負荷を増やさず
- 付随する EIP-7642 / 7691 等の blob fee market 調整

**予想影響**:
- Blob max 9 → 72 (initial) · ultimate goal 256+
- Throughput ~1.1 MB/block → ~11 MB/block (initial)
- Alt-DA 価格優位は ~1.5-2x のみ残る可能性 · 一部 alt-DA 顧客が L1 blob に回帰
- Full danksharding(理論 max 32 MB/block · ~230 GB/day)は長期ビジョン · 2027-2028 に完了する可能性は低い

### L2 sequencer revenue と user gas の関係

**Sequencer revenue 公式**(簡易):
- Revenue = (user gas × tx 数 - L1 blob cost - operational cost - MEV redistribution)
- Volume 上昇時に user gas 単価が下落する可能性(競争) · ただし総 revenue は弾性次第

**実証データ**(2026-Q2 推定 · 頭部 L2):
- **Base**:Daily user gas total ~$200-400k · Daily blob cost ~$30-80k · Sequencer net ~$100-300k/day ≈ $30-100M ARR
- **Arbitrum**:Daily user gas total ~$150-300k · Daily blob cost ~$20-50k · Sequencer net ~$80-200k/day ≈ $30-70M ARR
- **Optimism**:Daily user gas total ~$50-100k · Daily blob cost ~$10-20k · Sequencer net ~$30-70k/day ≈ $10-25M ARR
- **zkSync · Linea · Scroll** 等:各 $5-20M ARR

全 ETH-aligned rollup 横断の総 sequencer revenue ~$150-300M ARR(2026)。これは Pectra 後の安定状態 · pre-Dencun(2023)の総 sequencer revenue より高い · ただし単 tx revenue は大幅に下落。

### Stripe / Coinbase Smart Wallet 等の機関 + 消費者プロダクトの受益

- **Stripe USDC on Base**:Pectra 後 single USDC transfer ~$0.0005 · Stripe にとって経済性が顕著に改善 · Stripe が Base-only merchant settlement をローンチ
- **Coinbase Smart Wallet**:Account Abstraction([[systems/erc-4337-overview|ERC-4337]] 参照)+ Base 低 gas · Coinbase が sub-cent UX を実現 · ユーザー体感は Web2 に近い
- **PayPal PYUSD on Base**:同様に受益 · 2025-2026 PYUSD on Base 流通量は ~3x 成長
- **RWA tokenization**:Polygon zkEVM 上の Franklin Templeton FOBXX パイロットが Pectra blob で settlement cost 低減 · ただし機関は依然 L1 を好む([[systems/data-availability-celestia-eigenda-blob-comparison|DA layer 対照]] 参照)

### ZK rollup vs OP rollup の非対称受益

**OP rollup**(Arbitrum · Optimism · Base · Blast 等):
- Blob が直接 calldata cost を下げる · 全 batch data を blob に
- Challenge window 内で state 再構築可能 · blob 18 日保持期間で十分
- 受益最も直接的 · ユーザー gas 下落最も顕著

**ZK rollup**(zkSync · Linea · Scroll · Polygon zkEVM · Taiko 等):
- Blob が state diff 提出 cost を下げる · ただし ZK proof 提出 cost(verifier gas)は不変
- ZK proof は sequencer cost の ~30-50% を占める · blob は ~30-50% のみ
- 受益は相対的に小さいが依然顕著([[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup matrix 2026]] 参照)

### Validator economy と staking yield への影響

[[systems/bft-validator-economy-overview|BFT validator 経済学概観]] と [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 institutional staking]] 参照:
- Blob fee は validator 収入の追加源(blob_base_fee は burn されず · proposer が徴収)
- 2026 平均 daily blob fee revenue ~$50-100k · ~7200 block に分担 · block あたり ~$7-15 · validator daily revenue の極一部
- ETH burning(EIP-1559 base fee burn)は blob fee に影響なし · blob fee は burn されない
- 長期 blob 経済は ETH staking yield に直接影響しない · ただし間接影響あり(blob で L2 繁栄 · L2 上の dApp activity が L1 economic activity を引き戻す)

### Builder / Proposer 役割の変化

- Builder は今や blob transaction + 通常 transaction を包装せねばならず · 複雑度が増す
- Blob の P2P 伝播経路は transaction と異なる · Builder は調整が必要
- Proposer 役割は基本不変 · ただし blob 受信遅延が attestation 時間に影響する可能性
- 長期 PBS(proposer-builder separation)で builder が blob handling を専門化

## Related

- [[INDEX|Wiki Index]]
- [[systems/INDEX|systems index]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 倍増と L2 経済連鎖]]
- [[systems/pectra-upgrade-overview|Pectra upgrade overview]]
- [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 institutional staking]]
- [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]
- [[systems/data-availability-celestia-eigenda-blob-comparison|DA layer 全景対照 2026]]
- [[systems/rollup-market-share-2026-arbitrum-optimism-base|rollup market share 2026]]
- [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]]
- [[systems/eigenlayer-overview|EigenLayer overview]]
- [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]]
- [[systems/erc-4337-overview|ERC-4337 overview]]
- [[systems/bft-validator-economy-overview|BFT validator 経済学概観]]
- [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]]
- [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]]

## Sources

- EIP-4844 spec · https://eips.ethereum.org/EIPS/eip-4844
- EIP-7691 spec · https://eips.ethereum.org/EIPS/eip-7691
- EIP-7594 PeerDAS spec · https://eips.ethereum.org/EIPS/eip-7594
- Ethereum.org Danksharding roadmap · https://ethereum.org/en/roadmap/danksharding/
- Blobscan · https://blobscan.com/
- L2Beat scaling summary · https://l2beat.com/scaling/summary
- DefiLlama rollups · https://defillama.com/chains/Rollup
- ethresear.ch sharding category · https://ethresear.ch/c/sharding/
- Dankrad Feist blog · "Data availability sampling and danksharding"(public)
- Vitalik blog · "Layer 2s as cultural extensions of Ethereum"(public)
- Ethereum Foundation KZG ceremony documentation
