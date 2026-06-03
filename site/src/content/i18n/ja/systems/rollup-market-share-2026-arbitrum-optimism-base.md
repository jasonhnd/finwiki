---
source: systems/rollup-market-share-2026-arbitrum-optimism-base
source_hash: 35531e7cdf6588c1
lang: ja
status: machine
fidelity: ok
title: "Rollup 市場シェア 2026  · Arbitrum vs Optimism vs Base vs zkSync vs Polygon zkEVM vs Scroll vs Linea"
translated_at: 2026-06-03T01:06:46.348Z
---
# Rollup 市場シェア 2026  · Arbitrum vs Optimism vs Base vs zkSync vs Polygon zkEVM vs Scroll vs Linea

## 要約

- 7 つの主流 Ethereum L2  rollup について、2026-Q2 時点の **TVL · 日次アクティブアドレス · 日次取引量 · sequencer revenue · gas cost · DEX 深度 · 借貸規模 · RWA · 治理成熟度 · エコシステム多様性 · DA 選定** を 11 軸で比較する
- **TVL 順位 2026-Q2 推定**: **Base ~$18B**(リード、成長最速) · **Arbitrum ~$13B**(停滞) · **Optimism ~$5B** · **zkSync Era ~$2.0B** · **Linea ~$1.2B** · **Polygon zkEVM ~$800M** · **Scroll ~$700M**
- **日次アクティブアドレス順位**: Base ~3-5M · Arbitrum ~1-2M · Optimism ~600k-1M · zkSync ~400-700k · Linea ~300-500k · Polygon zkEVM ~150-300k · Scroll ~100-200k
- **Base 主導の成長**: Coinbase 親会社のトラフィック、Stripe / Shopify / Apple Pay の入口、meme coin / consumer dApp により dominant。2024-2026 で TVL とユーザー数の両方を倍増させた唯一の L2

- **Arbitrum の停滞**: 技術リード(Nitro · Stylus · Orbit)はあるが成長は減速。DeFi-heavy なユーザー構造で、消費者入口を欠く
- **Optimism Superchain の拡張**: OP Stack フレームにより ~30+ chain(Base · Mode · Worldcoin · Lyra · Polynomial · Zora など)が加入。Superchain 総 TVL は実際に Arbitrum を超える
- **OP-rollup は TVL 主導、ZK-rollup は技術ナラティブ主導**: OP rollup(Arbitrum · Optimism · Base)が L2 総 TVL の ~85%+ を占有。ZK rollup(zkSync · Linea · Scroll · Polygon zkEVM · Taiko)は ~15% だが、長期方向性とされる
- ルーティング: [[systems/INDEX|systems index]] · [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]] と [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 経済 2026]] とペアリングする

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] に属する。この項目の市場シェア表が経済面から要約している技術成熟度の軸については [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]] と合わせて読む。rollup の単位経済を決める基礎的な DA コスト構造については [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 経済と 2026 市場影響]] を参照する。sequencer margin を再形成した 2025-Q2  の catalyst については [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]] とペアにする。Base / Arbitrum / Optimism を「ETH-aligned L2  oligopoly」と見るメタ戦略の枠組みは [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]] を参照する。rollup を差別化する DA layer 選定については [[systems/data-availability-celestia-eigenda-blob-comparison|DA layer 全景対照]] を参照する。これら rollup 間のクロスチェーン・メッセージングについては [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] と [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]] を参照する。一部 rollup AVS(sequencer / DA)を支える restaking-secured infrastructure については [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]] と [[systems/eigenlayer-overview|EigenLayer overview]] を参照する。同じ consumer / meme coin / DEX flow を奪い合う Solana エコシステムについては [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]] を参照する。

## このマトリクスが重要な理由

L2  rollup は 2023-2024 年において、依然として「技術路線の争い + TVL ランキング競争」だった。2024-2026 年には成熟産業構造へ進化している。**Base が消費者市場を独占し、Arbitrum が DeFi-native を占有し、Optimism Superchain が連邦化拡張を進め、ZK rollup が mid-tier を分割する**構図である。

**なぜ 7 つの L2 を比較し、それ以上にしないか**:

- Base · Arbitrum · Optimism · zkSync Era · Linea · Polygon zkEVM · Scroll は、2026-Q2 時点で TVL > $500M のすべての L2
である
- 除外: Blast(TVL > $500M だが治理が未成熟で、主に meme / yield farming) · Mantle(EigenDA ベースで L1 DA ではなく、独立分析対象) · Taiko(TVL < $500M。技術 reference だが市場シェアは小さい。[[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK matrix]] を参照) · Manta Pacific / Eclipse(alt-DA、独立 vertical)

**機関顧客([[systems/chainlink-ccip-institutional-messaging|CCIP institutional]] を参照)が L2 を選定する際の判断軸**:

- Stage 1  / Stage 2  decentralization(L2Beat 評価)
- 治理成熟度。challenge window 内でスマートコントラクトをアップグレードできるのは誰か
- DA layer 選定。L1  blob か alt-DA か
- エコシステム多様性。DEX、借貸、RWA、stablecoin 流通
- Sequencer revenue の持続可能性

**DeFi ユーザーが L2 を選定する際の判断軸**:

- DEX 深度(slippage · liquidity)
- 借貸利率 + リスク(Aave · Compound · Morpho)
- ブリッジ cost + finality([[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge matrix]] を参照)
- Meme coin / consumer dApp アクティビティ

**Consumer dApp が L2 を選定する際の判断軸**:

- Account Abstraction([[systems/erc-4337-overview|ERC-4337 overview]] と [[systems/erc-7702-overview|ERC-7702 overview]] を参照)
- Gas sponsorship ツール
- Onramp(法定通貨入口 · stablecoin liquidity)
- ユーザーベース(meme coin · ソーシャル · ゲーム)

本マトリクスは 7 つの公開稼働中の主流 L2 を比較し、11 軸を横断展開した 2026-Q2  データスナップショットである。

### Base (Coinbase)

**TVL May 2026**: ~$18B。L2 首位。2024-Q2 の Base ローンチから 18 か月で達成し、業界最速の成長。

**日次アクティブアドレス**: ~3-5M。L2 首位で、Arbitrum / Optimism を大幅に上回る。

**日次取引量**: ~10-15M tx/day。

**Sequencer revenue**: ~$30-100M ARR。2026 推定で、meme coin サイクルに左右される。

**ユーザー gas cost**: Pectra 後 ~$0.0005-0.005  / simple transfer。sub-cent 体験が安定している。

**DEX 深度**: Aerodrome が主導。~$3-5B TVL で、Velodrome v2 を Base にフォーク。Uniswap v3 、Curve、BaseSwap などもある。Stablecoin pair 深度は業界最深。

**借貸規模**: Aave v3  on Base ~$2-4B · Morpho ~$500M-1B · Compound ~$300M-500M。

**RWA**: Centrifuge · Maple · Stripe USDC settlement · PayPal PYUSD 流通。Coinbase USDC primary 入口により、Base は RWA + stablecoin 流通が最も深い L2 となる。

**治理成熟度**: **Stage 1  decentralization**(L2Beat)。Coinbase が sequencer を主導する。2026-2027 に decentralized sequencer 導入計画。Upgrade は Security Council 7-of-13  + 7-day timelock。

**エコシステム多様性**: Consumer-heavy。DEX、meme coin、ソーシャル、ゲームが中心。Aerodrome / Friend.tech / Farcaster / Zora / Coinbase Smart Wallet など。DeFi と消費アプリのバランスがある。

**DA layer**: Ethereum L1  blobs(EIP-4844)。alt-DA の計画はない。

**主要優位**:

- Coinbase 親会社トラフィック入口。US トップ CEX、1.5 億+ 登録ユーザー
- Stripe / Shopify / Apple Pay 統合。USDC settlement
- Coinbase Smart Wallet。ネイティブ AA、ETH gas 不要。[[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet adoption]] を参照
- 極めて低い gas と Aerodrome 深度により、meme coin / 消費 dApp が爆発
- Base 専用プロジェクト(Friend.tech · Farcaster · Zora)が Base に独自エコシステムを提供

### Arbitrum (Offchain Labs)

**TVL May 2026**: ~$13B。L2 第二。2024-2025 は停滞。2026 は Stylus による開発者吸引で穏やかに回復。

**日次アクティブアドレス**: ~1-2M。Base より顕著に低いが、ユーザー単 tx あたりの価値はより高い。

**日次取引量**: ~4-6M tx/day。

**Sequencer revenue**: ~$30-70M ARR。

**ユーザー gas cost**: Pectra 後 ~$0.001-0.01  / simple transfer。

**DEX 深度**: GMX が perp を主導し、~$1-2B TVL。Uniswap v3 、Camelot、SushiSwap、TraderJoe など。Perp DEX 集中度が高い。

**借貸規模**: Aave v3  on Arbitrum ~$2-3B · Radiant ~$500M(2025  hack 後回復) · Compound ~$300M。

**RWA**: 相対的に少ない。Arbitrum は RWA 主選 L2 ではない。

**治理成熟度**: **Stage 1  decentralization**(L2Beat)。DAO 治理 + ARB token。Security Council 9-of-12 。BoLD(Bounded Liquidity Delay)証明システムが 2025 にローンチされ、Arbitrum は OP rollup 中初の permissionless validator となる。

**エコシステム多様性**: DeFi-heavy。perp、spot、借貸、yield farming が中心。GMX / Camelot / Pendle / Vela など。消費アプリは少ない。

**DA layer**: Ethereum L1  blobs(主チェーン)。Arbitrum Orbit 子チェーンは AnyTrust(委員会 DA)または EigenDA を選択できる。

**主要優位**:

- 技術リード。Stylus、Rust/C++ スマートコントラクトサポート、EVM 以外の能力拡張
- BoLD permissionless validator は OP rollup 中で最も advanced な decentralization
- Arbitrum Orbit フレームで ~20+ L3  / appchain を展開
- DeFi-native ユーザーベースが安定し、TVL が流出しにくい

**主要劣位**:

- 消費者入口を欠く。Coinbase / Stripe の同等物がない
- DeFi-native ユーザー成長が飽和
- TVL が 2024-2025 停滞。2026 は穏やかな回復のみ

### Optimism (OP Labs)

**TVL May 2026**: ~$5B。L2 第三。OP Labs が直接運営する。ただし OP Stack 子チェーンの TVL が主チェーンを大きく超える。

**日次アクティブアドレス**: ~600k-1M(主チェーン) + Superchain 子チェーン総和 ~5-8M。Base 主チェーン単独より上。

**日次取引量**: 主チェーン ~2-3M tx/day · Superchain 総 ~15-25M tx/day。

**Sequencer revenue**: 主チェーン ~$10-25M ARR。OP Labs は Superchain 経由で sequencer revenue 分配を受領する。総計 ~$30-60M ARR。

**ユーザー gas cost**: Pectra 後 ~$0.001-0.01  / simple transfer。

**DEX 深度**: Velodrome が主導。Uniswap v3 、Curve など。OP DEX 深度は Arbitrum より低いが、主流 ZK rollup より高い。

**借貸規模**: Aave v3  on Optimism ~$1-2B · Sonne · Granary など。

**RWA**: Maker / Sky が OP 上に一部 deploy。ただし RWA 主選ではない。

**治理成熟度**: **Stage 1  decentralization**。OP token DAO + Citizen House(二院制治理)。Security Council + 7-day timelock。Superchain governance は OP Labs と各チェーンチーム間で分権する。

**エコシステム多様性**: DeFi + 一部消費。Worldcoin on OP Stack、Zora、Mode、Lyra など。消費 dApp では Base 以外の第二の L2 プラットフォーム。

**DA layer**: Ethereum L1  blobs。主チェーンと大部分の Superchain が該当。Mode の一部は EigenDA、一部 Superchain は Celestia をテストしている。

**主要優位**:

- **OP Superchain 連邦化拡張**: Base · Worldcoin · Mode · Lyra · Polynomial · Zora · Soneium · Unichain など ~30+ chain が加入し、sequencer と治理を共有
- OP Stack は modular rollup-as-a-service の主流フレームの 1 つ
- Superchain 総 TVL は実際に Arbitrum を超える。Base を Superchain に算入すれば ~$25B+
- Retroactive Public Goods Funding(RPGF)は ecosystem incentive のイノベーション

**主要劣位**:

- 主チェーン本体の TVL が停滞。成長はほぼすべて Superchain 子チェーン
- Base は Superchain 最大子チェーンだが、Coinbase の影響力により実質的に独立ブランドであり、OP の直接受益とはみなされにくい

### zkSync Era (Matter Labs)

**TVL May 2026**: ~$2.0B。ZK rollup 首位。ZK Stack hyperchain TVL ~$500M を含む。

**日次アクティブアドレス**: ~400-700k。

**日次取引量**: ~2-3M tx/day。

**Sequencer revenue**: ~$15-30M ARR。

**ユーザー gas cost**: Pectra 後 ~$0.001-0.005。Account Abstraction native で、ユーザーは stablecoin / ZK token で支払い可能。ETH 不要。

**DEX 深度**: SyncSwap が主導。Maverick、Mute など。深度は Base / Arbitrum / Optimism より低い。

**借貸規模**: Aave v3  on zkSync ~$300-500M · Reactor など。

**RWA**: 相対的に少ない。ZK rollup は概して RWA 主流ではない。institutional は L1  + Polygon zkEVM 寄り。

**治理成熟度**: **Stage 1  decentralization**(L2Beat)。ZK token DAO + Matter Labs Foundation。Security Council 9-of-15 。21-day timelock は 2024 後に 1-day から延長。

**エコシステム多様性**: DeFi-heavy + AA-native dApp。Argent · Braavos AA wallet 統合、ZK Stack hyperchain(GRVT perpetual · Treasure gaming · Cronos zkEVM)。

**DA layer**: Ethereum L1  blobs(主チェーン)。ZK Stack hyperchain は EigenDA / Celestia を選択できる。[[systems/data-availability-celestia-eigenda-blob-comparison|DA 対照]] を参照。

**主要優位**:

- ZK rollup 中で TVL 最大
- Account Abstraction native。ERC-4337 包装不要で、ユーザー体験がよりスムーズ
- ZK Stack フレームは ZK rollup の modular RaaS 主流の 1 つ
- Boojum prover 性能が ZK rollup 中でリード

**主要劣位**:

- Type 4  EVM compatibility。異なる bytecode で、dev tooling 対応が必要
- Coinbase / Stripe などの消費者入口を欠く
- ユーザー成長は Linea(MetaMask トラフィック借用)より遅い

### Linea (Consensys)

**TVL May 2026**: ~$1.2B。ZK rollup 第二。MetaMask トラフィック優位。

**日次アクティブアドレス**: ~300-500k。

**日次取引量**: ~1-2M tx/day。

**Sequencer revenue**: ~$10-25M ARR。

**ユーザー gas cost**: Pectra 後 ~$0.002-0.01  / simple transfer。

**DEX 深度**: Lynex が主導。iZUMi、Mendi など。中等深度。

**借貸規模**: Aave v3  on Linea ~$200-400M · Mendi · ZeroLend など。

**RWA**: MetaMask Institutional は Consensys 製品であり、一部 institutional pilot が Linea 上にある。

**治理成熟度**: **Stage 1  decentralization**。Consensys 主導。Security Council 7-of-13 。7-day timelock。2026-2027 に LINEA token DAO 導入計画。

**エコシステム多様性**: DeFi + Consensys 統合。MetaMask · Infura · Truffle ツールチェーンのネイティブサポート。dApp に MetaMask 統合事例が多い。

**DA layer**: Ethereum L1  blobs only。Consensys のスタンスは all on-chain。

**主要優位**:

- MetaMask 統合。MetaMask は EVM ウォレット市場シェア首位で、~30M+ MAU。デフォルトで Linea を推奨
- Consensys ツールチェーンエコシステムの深さ。Infura · Truffle · Hardhat など
- Institutional pilot 入口。MetaMask Institutional

**主要劣位**:

- TVL は主に MetaMask トラフィックに依存し、有機的成長ではない
- 消費者 dApp 入口を欠く
- ZK rollup だが Type 2(EVM-equivalent)で Type 1 ではない。長期 prove cost が優位とは限らない

### Polygon zkEVM / AggLayer (Polygon Labs)

**TVL May 2026**: ~$800M。AggLayer 連邦を含む。

**日次アクティブアドレス**: ~150-300k(主チェーン) + AggLayer 子チェーン総和 ~500k-1M。

**日次取引量**: ~500k-1M tx/day。

**Sequencer revenue**: ~$5-15M ARR。

**ユーザー gas cost**: Pectra 後 ~$0.001-0.005  / simple transfer。

**DEX 深度**: QuickSwap が主導。Uniswap v3 、Balancer など。中等深度。

**借貸規模**: Aave v3  on Polygon zkEVM ~$100-300M。その他 lending プロトコルは小さい。

**RWA**: **Franklin Templeton FOBXX pilot**(2024)。複数の enterprise pilot があり、ZK rollup 中では RWA が最も深い。institutional pilot は Polygon 寄り。

**治理成熟度**: **Stage 1  decentralization**。Polygon Foundation + POL token DAO。Security Council 7-of-13 。7-day timelock。

**エコシステム多様性**: DeFi + enterprise dApp + identity(Polygon ID)。多元化している。AggLayer 連邦は Polygon zkEVM + 他 zkEVM chain + Astar zkEVM。

**DA layer**: Ethereum L1  blobs default + validium モード(DAC 7-of-9 マルチシグ)を提供。enterprise / プライベートチェーンが選択できる。

**主要優位**:

- Polygon PoS chain(EVM L1  sidechain。本マトリクスには含まれないが、Polygon ブランド全体は強い)から Polygon zkEVM への移行が一部トラフィック源
- AggLayer 連邦により複数 zkEVM chain が settlement を共有する。ZK rollup 中の modular RaaS フレーム
- Enterprise pilot 入口でリード。Franklin Templeton と複数銀行 pilot
- Polygon ID(decentralized identity) + zkEVM は institutional KYC/AML に適した組み合わせ

**主要劣位**:

- TVL 成長は zkSync / Linea より遅い
- Polygon PoS chain のトラフィック移行が zkEVM にスムーズでない。ユーザーは Polygon zkEVM を新規チェーンと感じる
- Type 2.5  EVM compatibility。Type 1 ではない

### Scroll (Scroll Foundation)

**TVL May 2026**: ~$700M。ZK rollup 中で EVM-equivalent 路線が最も純粋。

**日次アクティブアドレス**: ~100-200k。

**日次取引量**: ~500k-1M tx/day。

**Sequencer revenue**: ~$5-15M ARR。

**ユーザー gas cost**: Pectra 後 ~$0.005-0.02  / simple transfer。

**DEX 深度**: Aave · Uniswap · Pendle · GMX など主流プロトコルはすべて deploy している。ただし Scroll 上の native DEX は少ない。

**借貸規模**: Aave v3  on Scroll ~$200-400M。

**RWA**: 相対的に少ない。ただし Scroll の「EVM-equivalent + L1 DA 純度」により、一部 institutional pilot は Scroll 寄りである。

**治理成熟度**: **Stage 1  decentralization**。Scroll Foundation + 学術血統(PSE と長期協業)。Security Council 7-of-13 。7-day timelock。2026-2027 に SCR token DAO 導入計画。

**エコシステム多様性**: DeFi-heavy。Aave / Uniswap / Pendle / GMX など主流 fork が中心。独自 native dApp を欠く。Scroll Canvas は onboarding ツール。

**DA layer**: Ethereum L1  blobs only。validium にしない明確なスタンス。

**主要優位**:

- Type 2  EVM-equivalent。99% bytecode-level 互換で、主流 dApp はゼロ修正で deploy できる
- 学術血統が強い。PSE / Ethereum Foundation と長期協業
- L1 DA 純度のスタンスが institutional friendly

**主要劣位**:

- TVL 成長が遅く、独自 catalyst を欠く
- Coinbase / MetaMask / Consensys 類の大量トラフィック入口がない
- ユーザー感覚は他 ZK rollup と似ており、差別化ブランドを欠く

## 大型比較マトリクス表

**7 つの主流 L2  rollup × 11 軸比較**(2026-Q2 状態):

| Rollup | TVL May 2026  | 日次アクティブ | 日次取引 | Sequencer Revenue | ユーザー Gas | DEX 深度 | 借貸規模 | RWA | 治理成熟度 | エコシステム特色 | DA Layer |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Base (Coinbase)** | **~$18B (L2 首位)** | **3-5M (首位)** | 10-15M | $30-100M ARR | $0.0005-0.005  | Aerodrome $3-5B · Uniswap · Curve | Aave $2-4B · Morpho $500M-1B | Stripe USDC · PayPal PYUSD · Centrifuge | Stage 1  · SC 7/13  · 7d timelock | Consumer-heavy · meme/social/game · Coinbase Smart Wallet | L1 blobs only |
| **Arbitrum** | ~$13B (第二) | 1-2M | 4-6M | $30-70M ARR | $0.001-0.01  | GMX $1-2B perp · Uniswap · Camelot | Aave $2-3B · Radiant $500M | 相対的に少ない | Stage 1  · DAO+ARB · SC 9/12  · BoLD permissionless | **Stylus (Rust/C++)** · DeFi-heavy · Orbit L3 フレーム | L1 blobs + Orbit は AnyTrust/EigenDA を選択可 |
| **Optimism + Superchain** | ~$5B 主チェーン · Superchain 総 ~$25B+ | 600k-1M 主チェーン · Superchain 5-8M | 主 2-3M · Superchain 15-25M | $30-60M ARR (分配含む) | $0.001-0.01  | Velodrome 主導 · Uniswap | Aave $1-2B · Sonne | Maker 一部 | Stage 1  · OP DAO + Citizen House · SC + 7d timelock | **OP Superchain 連邦 ~30+ chain** · Worldcoin/Zora/Mode/Soneium | L1 blobs(主) · Mode EigenDA · 一部 Celestia テスト |
| **zkSync Era** | ~$2.0B (ZK 首位) | 400-700k | 2-3M | $15-30M ARR | $0.001-0.005  · **AA native** | SyncSwap · Maverick | Aave $300-500M | 少ない | Stage 1  · ZK DAO · SC 9/15  · 21d timelock | DeFi + **AA native** · ZK Stack hyperchain(GRVT/Treasure/Cronos) | L1 blobs · hyperchain は EigenDA/Celestia を選択可 |
| **Linea (Consensys)** | ~$1.2B | 300-500k | 1-2M | $10-25M ARR | $0.002-0.01  | Lynex · Mendi 中等 | Aave $200-400M | MetaMask Institutional pilot | Stage 1  · Consensys 主導 · SC 7/13  · 7d timelock | **MetaMask 統合** · Infura/Truffle ツールチェーン | L1 blobs only (all on-chain スタンス) |
| **Polygon zkEVM/AggLayer** | ~$800M (AggLayer 含む) | 150-300k 主 · AggLayer 総 500k-1M | 500k-1M | $5-15M ARR | $0.001-0.005  | QuickSwap · Uniswap · Balancer | Aave $100-300M | **Franklin Templeton FOBXX pilot** · 複数 enterprise pilot | Stage 1  · POL DAO · SC 7/13  · 7d timelock | DeFi + enterprise + **Polygon ID** · AggLayer 連邦 | L1 blobs + Validium モード(DAC 7/9) |
| **Scroll** | ~$700M | 100-200k | 500k-1M | $5-15M ARR | $0.005-0.02  | Aave/Uniswap/Pendle/GMX 主流 | Aave $200-400M | 少ない。ただし L1 DA 純度が一部 institutional を惹きつける | Stage 1  · Scroll Foundation · SC 7/13  · 7d timelock | DeFi-heavy · **Type 2 EVM-equivalent** · 学術血統(PSE) | L1 blobs only (validium しない明示) |

**マトリクスの読み方**:

- **TVL 順位**: Base > Arbitrum > Optimism(主チェーン) > zkSync > Linea > Polygon zkEVM > Scroll。ただし Superchain 全体を Optimism に算入すれば OP Superchain > Base > Arbitrum
- **日次アクティブアドレス順位**: Base が首位で顕著にリード。Arbitrum / Optimism は中等。ZK rollup はいずれも小さい
- **Sequencer revenue 順位**: Base ≈ Arbitrum ≈ Optimism。3 巨頭がそれぞれ $30-70M ARR。ZK rollup はそれぞれ $5-30M ARR
- **エコシステム深度**: Base = consumer + DeFi。Arbitrum = DeFi 専門。Optimism = Superchain 連邦。zkSync = AA native。Linea = MetaMask トラフィック。Polygon zkEVM = enterprise pilot。Scroll = EVM 純度
- **治理成熟度の収束**: 7 つとも Stage 1 。Security Council + 7-21 day timelock。DAO 治理かチーム主導。実質的に Stage 2  full decentralization に達した L2 はない

### なぜ Base が最速成長か

**Coinbase 親会社効果**:

- Coinbase は米国 US トップ CEX。登録ユーザー ~1.5 億(2026)、月活 ~500-700 万
- Coinbase は USDC primary 入口 + 法定通貨 onramp を Base に積極的に推進
- Coinbase Smart Wallet(ネイティブ AA。[[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet adoption]] を参照)はデフォルトで Base に deploy される。ETH gas 不要で、ユーザー体験は Web2 に近い

**Stripe / Shopify / Apple Pay 統合**:

- Stripe は 2024-2025 年に「USDC on Base」加盟店 settlement を発表し、cross-border payment コストを大幅に削減
- Shopify 加盟店の pay-with-USDC のデフォルトは Base
- Apple Pay は Coinbase Wallet 経由で Base と統合

**Meme coin 潮流**:

- 2024-Q3 から Base 上の meme coin volume が爆発。BRETT · TOSHI · DEGEN など
- 日次 Base DEX volume が複数回 $1B を超え、他 L2 を大きく上回る
- Aerodrome(Base 主 DEX)が L2 第一 DEX by TVL となる。~$3-5B

**Consumer / ソーシャル dApp**:

- Farcaster(分散型ソーシャル)は主に Base に deploy される。Frames(Farcaster 内蔵 mini-app)エコシステムが爆発
- Friend.tech · Zora · Mocaverse などの consumer dApp が Base に集中

### Base の「soft moat」

- **Sequencer は中央集権だが信頼される**: Coinbase は USA 上場企業(NASDAQ: COIN)であり、規制コンプライアンスとユーザー信頼度が高い
- **L1 DA スタンス**: Base は常に L1  blobs を使用する。alt-DA の計画はなく、institutional の期待と整合する
- **OP Stack 統合**: Base は OP Superchain の一員であり、OP エコシステムの溢出を享受しつつ独立ブランドを維持する

### Base の潜在リスク

- **Sequencer 中央集権が単一障害点**: Coinbase が規制要求で特定 transaction を検閲する場合、Base の検閲耐性に影響する
- **Meme coin サイクルへの過度依存**: meme coin は volatile であり、冷却すれば Base ユーザーアクティビティが低下する可能性がある
- **OP Superchain 内部競争**: Worldcoin / Mode / Soneium などの OP Stack chain は Base の競合でもあり、協力だけではない

### なぜ Arbitrum の成長が減速したか

- **DeFi-native ユーザー構造**: Arbitrum の主要ユーザーは DeFi power user(perp trader · yield farmer · 複数 protocol インタラクション)であり、この層の規模が飽和している
- **消費者入口を欠く**: Coinbase / Stripe / MetaMask 類の大量トラフィック入口がない。新規ユーザー獲得は native dApp に依存する
- **GMX 単一プロトコル集中**: Arbitrum DeFi の大部分の volume が GMX に集中する。2024-2025 の perp DEX 競合、つまり独立 L1 上の Hyperliquid と Cosmos 上の dYdX v4が Arbitrum トラフィックを分散させる

### Arbitrum の技術優位(十分に価値化していない)

- **Stylus**(2024 ローンチ): Rust / C++ スマートコントラクトを deploy 可能。EVM L2 で唯一サポート。ただし実際の dApp 採用は遅い
- **BoLD permissionless validator**(2025 ローンチ): OP rollup 中で最も advanced な decentralization。ただしユーザーは実感しにくい
- **Arbitrum Orbit**: フレームで ~20+ L3  / appchain を deploy。ただし Orbit chain TVL 総和は OP Superchain より小さい
- **Arbitrum Nova**: AnyTrust DA 子チェーン。高頻度・低価値 use case にサービスを提供。ただし市場シェアは小さい

### Arbitrum 2026 回復シグナル

- 2026-Q1 に Stylus 上の Rust DeFi プロトコルがローンチ。Cygnus · Hydrogen など。dApp が多元化
- BoLD permissionless validator により ARB stake economic が起動し、token holder の収益期待が改善
- Arbitrum Orbit の一部 L3 が圏外進出。XAI gaming · Lumia · ApeChain

### Superchain フレーム

OP Stack documentation 参照:

- **共有 sequencer**。計画中で、2026-2027 導入
- **共有 governance**。Citizen House が一部参加
- **共有 settlement**。L1 上の相互信頼ブリッジ
- **共有 RPGF**。Retroactive Public Goods Funding と OP 治理 token 配布

各 Superchain 子チェーンは独立運営 + 独立ブランドを維持しつつ、基盤 stack を共有する。

### Superchain メンバー(2026-Q2 一部)

- **Base (Coinbase)** · TVL $18B
- **Optimism 主チェーン** · TVL $5B
- **Worldcoin** · ユーザーは多いが TVL は低い
- **Mode** · DeFi specialty · 一部 EigenDA 使用
- **Lyra** · options DEX · TVL ~$200-400M
- **Polynomial** · perp · 比較的小さい
- **Zora** · NFT / creator economy · ユーザーは多いが TVL は低い
- **Soneium**(Sony 推進 · 2025 ローンチ) · 入門級
- **Unichain**(Uniswap 推進 · 2025 ローンチ) · Uniswap 専用
- **Mantle** · EigenDA L2 。technically not Superchain だが、OP Stack 初期 fork
- その他 ~20+ chain

### Superchain 総 TVL

Base + Optimism + その他 Superchain TVL を合算すれば ~$25B+ となり、**Arbitrum 単チェーンを実際に超える**。ただし Coinbase は Base が Superchain メンバーであることを強調しない。Base は独立ブランドである。そのため業界比較では Optimism は依然として単独算入される。

### Superchain 治理の緊張

- **OP Labs vs Base team**: Coinbase の影響力により Base は実質独立している。OP Labs は sequencer revenue 分配(~10%)を得るが、治理影響は限定的
- **Worldcoin / Mode / その他子チェーン**: 多くが自前 token + DAO を持ち、OP token の治理影響は弱まる
- **共有 sequencer の実際進捗**: OP Labs が継続推進している。ただし各子チェーンが sequencer revenue を放棄するかは政治問題

### ユーザー / dApp / 資本分布

**Web3  Total active addresses(L2  + L1  + Solana など、2026-Q2 推定)**:

- 全 EVM L2  daily active ~10-15M。Base が ~30-40% を占有
- Ethereum L1  daily active ~500k-1M。機関 + 大口集中
- Solana daily active ~5-10M。meme coin 主導
- Polygon PoS sidechain ~2-3M。減少中で、トラフィックが zkEVM に移行
- その他 ~5M

**資本分布(TVL、2026-Q2 推定)**:

- Ethereum L1  ~$120B。機関 + 大口 + old money
- L2 総計 ~$45B。Base $18B + Arbitrum $13B + Optimism $5B + その他 $9B
- Solana ~$15B
- 他 L1  ~$30B。Tron + BSC + Avalanche など

**DEX volume 分布(2026 日次平均)**:

- L2  DEX total ~$3-5B / day。Base 主導 ~40%
- Solana DEX total ~$3-6B / day。meme coin 主導
- Ethereum L1  DEX ~$1-2B / day。機関 swap
- その他 ~$1B / day

### Solana エコシステムとの競合

[[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]] を参照:

- Solana は meme coin / consumer trading で Base と直接競合する
- ただし Solana は TPS 優位(post-Firedancer。[[systems/solana-firedancer-validator-economics|Solana Firedancer]] を参照)により、高頻度取引で依然リードする
- Base の優位は L2  セキュリティ、Coinbase 入口、USDC 流通にある
- 長期的に Web3  エンドユーザーは Base と Solana の間で分流する可能性があり、いずれか一方だけが dominant となるとは限らない

### クロス L2  流動性フラグメンテーション

- 各 L2 間のブリッジ cost + finality が問題となる。[[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] と [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]] を参照
- 共有 sequencer(Espresso · Astria)と cross-rollup intent(CoW · Bungee)は緩和策だが、2026 はまだ早期
- Stablecoin liquidity(USDC · USDT)が複数 L2 に分散しており、ユーザー摩擦の主因になる

## 境界事例と今後の方向

**Base は規制による sequencer 制約を受けるか**: Coinbase は SEC / CFTC の規制対象である。SEC が Base sequencer に OFAC 制裁アドレスの検閲を強制すれば、Base の ETH-aligned L2 エコシステムにおける status に影響する。現在 Coinbase は公開で検閲しないと約束している。ただし長期リスクは存在する。

**Arbitrum BoLD permissionless validator は ARB token 価値を駆動できるか**: BoLD により誰でも ARB を deposit して validator になり、challenge を検証できる。ただしユーザー感覚では不明瞭である。token 価値への反映には検証時間が必要。

**OP Superchain は fragmentation が出現するか**: Superchain メンバーが > 30 となれば、治理調整の難度が上昇する。一部子チェーンが OP Stack を fork して独立する可能性もある。Worldcoin / Mantle / Mode は独立 governance の意向を複数回表明済み。

**ZK rollup は mid-tier から top-tier に突破できるか**: zkSync / Linea / Scroll / Polygon zkEVM の長期 TVL 成長は遅い。monster dApp、機関 RWA、Fusaka PeerDAS によるさらなるコスト低下といった catalyst により、ZK が top-tier に突破できるかが焦点になる。

**Account Abstraction 主流化タイムテーブル**: Coinbase Smart Wallet / Argent / Braavos / MetaMask Smart Account がいずれも推進している。2026 ユーザー ~20-30% が AA を使用する可能性があり、2027-2028 に主流化する可能性がある。[[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet adoption]] を参照。これにより L2 ユーザー体験が大幅に改善する。

**Stage 2  decentralization タイムテーブル**: 現在すべての L2 が Stage 1 である。L2Beat の Stage 2  criteria は permissionless validator + 30-day social fallback + 完全な dispute resolution。2026 内に Stage 2 に達すると公開コミットした L2 はない。2027-2028+ の可能性がある。

**RWA トラフィック split**: Polygon zkEVM は ZK rollup 中で RWA pilot が最も深い。ただし実際の RWA TVL の大部分は依然として Ethereum L1にある。L2  RWA は institutional risk committee の受容度上昇に伴い上昇するかが論点になる。

**Sequencer revenue 長期進化**: Pectra 後 sequencer margin は安定する。ただしユーザー数が成長を続ければ、L2 総 sequencer revenue は 2027 年に $500M+ に達する可能性がある。これにより L2 評価は SaaS ARR multiple に近い形で、より定量可能となる。

**Cross-L2  intent / shared sequencer**: Espresso · Astria などの共有 sequencer が 2026-2027 にローンチする。主流 L2 が採用すれば、流動性フラグメンテーション問題が緩和され、ユーザー体験が大幅に改善する。

## 関連項目

- [[INDEX|Wiki Index]]
- [[systems/INDEX|systems index]]
- [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]]
- [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 経済と 2026 市場影響]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 倍増と L2 経済連鎖]]
- [[systems/pectra-upgrade-overview|Pectra upgrade overview]]
- [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]
- [[systems/data-availability-celestia-eigenda-blob-comparison|DA layer 全景対照 2026]]
- [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]
- [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]]
- [[systems/eigenlayer-overview|EigenLayer overview]]
- [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]]
- [[systems/erc-4337-overview|ERC-4337 overview]]
- [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet adoption]]
- [[systems/erc-7702-overview|ERC-7702 overview]]
- [[systems/solana-firedancer-validator-economics|Solana Firedancer validator economics]]
- [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]]
- [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャー]]

## 出典

- L2Beat scaling summary · https://l2beat.com/scaling/summary
- DefiLlama rollups · https://defillama.com/chains/Rollup
- Arbiscan · https://arbiscan.io/
- Optimistic Etherscan · https://optimistic.etherscan.io/
- Basescan · https://basescan.org/
- zkSync explorer · https://explorer.zksync.io/
- Polygon zkEVM explorer · https://zkevm.polygonscan.com/
- Scrollscan · https://scrollscan.com/
- Lineascan · https://lineascan.build/
- Optimism Superchain docs · https://docs.optimism.io/superchain
- Arbitrum Orbit docs · https://docs.arbitrum.io/launch-orbit-chain/orbit-quickstart
- Base docs · https://docs.base.org/
- Vitalik blog · "Layer 2s as cultural extensions of Ethereum"(public)
