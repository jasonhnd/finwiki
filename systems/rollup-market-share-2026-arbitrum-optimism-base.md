---
title: Rollup 市場シェア 2026 · Arbitrum vs Optimism vs Base vs zkSync vs Polygon zkEVM vs Scroll vs Linea
aliases: [rollup market share 2026, arbitrum optimism base 2026, l2 tvl ranking 2026, base-led l2 growth, optimism superchain expansion, arbitrum stagnation, zksync linea scroll mid-tier, rollup ecosystem depth 2026, l2 governance maturity comparison]
domain: systems
created: 2026-05-25
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-25
confidence: likely
tags: [systems, matrix, rollup, l2, arbitrum, optimism, base, zksync, polygon-zkevm, scroll, linea, market-share, tvl, ecosystem, governance]
status: active
sources:
  - https://l2beat.com/scaling/summary
  - https://defillama.com/chains/Rollup
  - https://arbiscan.io/
  - https://optimistic.etherscan.io/
  - https://basescan.org/
  - https://explorer.zksync.io/
  - https://zkevm.polygonscan.com/
  - https://scrollscan.com/
  - https://lineascan.build/
  - https://docs.optimism.io/superchain
  - https://docs.arbitrum.io/launch-orbit-chain/orbit-quickstart
  - https://docs.base.org/
---

# Rollup 市場シェア 2026 · Arbitrum vs Optimism vs Base vs zkSync vs Polygon zkEVM vs Scroll vs Linea

## TL;DR

- 7 つの主流 Ethereum L2 rollup について 2026-Q2 時点での **TVL · 日次アクティブアドレス · 日次取引量 · sequencer revenue · gas cost · DEX 深度 · 借貸規模 · RWA · 治理成熟度 · エコシステム多様性 · DA 選定** の 11 軸で対照
- **TVL 順位 2026-Q2 推定**:**Base ~$18B**(リード · 成長最速)· **Arbitrum ~$13B**(stagnant)· **Optimism ~$5B** · **zkSync Era ~$2.0B** · **Linea ~$1.2B** · **Polygon zkEVM ~$800M** · **Scroll ~$700M**
- **日次アクティブアドレス順位**:Base ~3-5M · Arbitrum ~1-2M · Optimism ~600k-1M · zkSync ~400-700k · Linea ~300-500k · Polygon zkEVM ~150-300k · Scroll ~100-200k
- **Base-led growth**:Coinbase 親会社のトラフィック + Stripe / Shopify / Apple Pay の入口 + meme coin / consumer dApp で dominant · 2024-2026 で唯一 TVL 倍増 + ユーザー倍増した L2
- **Arbitrum stagnation**:技術リード(Nitro · Stylus · Orbit)だが成長減速 · DeFi-heavy なユーザー構造 · 消費者入口を欠く
- **Optimism Superchain expansion**:OP Stack フレームにより ~30+ chain(Base · Mode · Worldcoin · Lyra · Polynomial · Zora 等)が加入 · Superchain 総 TVL は実際に Arbitrum を超える
- **OP-rollup が TVL 主導 · ZK-rollup が技術ナラティブ主導**:OP rollup(Arbitrum · Optimism · Base)が L2 総 TVL の ~85%+ を占有 · ZK rollup(zkSync · Linea · Scroll · Polygon zkEVM · Taiko)は ~15% だが長期方向性とされる
- ルーティング:[[systems/INDEX|systems index]] · [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]] と [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 経済 2026]] とペアリング

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK-EVM rollup maturity matrix 2026]] for the technical maturity dimension that this entry's market share table summarizes economically, and [[systems/eip-4844-blob-economics-impact-2026|EIP-4844 blob 経済と 2026 市場影響]] for the underlying DA cost structure that determines rollup unit economics. Pair with [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 倍増と L2 経済連鎖]] for the 2025-Q2 catalyst that reshaped sequencer margins. For the meta-strategy framing that makes Base / Arbitrum / Optimism the "ETH-aligned L2 oligopoly", see [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 strategy anchor]]. For DA layer choice that differentiates rollups, see [[systems/data-availability-celestia-eigenda-blob-comparison|DA layer 全景対照]]. For cross-chain messaging between these rollups, see [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] and [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]]. For restaking-secured infrastructure that powers some rollup AVS (sequencer / DA), see [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape matrix]] and [[systems/eigenlayer-overview|EigenLayer overview]]. For the Solana ecosystem that competes for the same consumer / meme coin / DEX flow, see [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]].

## Why this matrix matters

L2 rollup は 2023-2024 年において依然として「技術路線の争い + TVL ランキング競争」だった。2024-2026 年に成熟産業構造へ進化:**Base が消費者市場を独占 · Arbitrum が DeFi-native を占有 · Optimism Superchain が連邦化拡張 · ZK rollup が mid-tier を分割**。

**なぜ 7 つの L2 を対照し、それ以上にしないか**:
- Base · Arbitrum · Optimism · zkSync Era · Linea · Polygon zkEVM · Scroll = 2026-Q2 TVL > $500M のすべての L2
- 除外:Blast(TVL > $500M だが治理が未成熟 + 主に meme / yield farming)· Mantle(EigenDA ベースで L1 DA ではない · 独立分析)· Taiko(TVL < $500M · 技術 reference だが市場シェア小 · [[systems/zk-evm-rollup-maturity-comparison-matrix-2026|ZK matrix]] を参照)· Manta Pacific / Eclipse(alt-DA · 独立 vertical)

**機関顧客([[systems/chainlink-ccip-institutional-messaging|CCIP institutional]] を参照)が L2 を選定する際の判断軸**:
- Stage 1 / Stage 2 decentralization(L2Beat 評価)
- 治理成熟度(challenge window 内でスマートコントラクトをアップグレードできるのは誰か)
- DA layer 選定(L1 blob vs alt-DA)
- エコシステム多様性(DEX · 借貸 · RWA · stablecoin 流通)
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

本マトリクスは 7 つの公開稼働中の主流 L2 を対照 · 11 軸を横断展開 · 2026-Q2 データスナップショット。

## Per-rollup sections

### Base (Coinbase)

**TVL May 2026**:~$18B(L2 首位 · 2024-Q2 Base ローンチから 18 か月で達成 · 業界最速の成長)。

**日次アクティブアドレス**:~3-5M(L2 首位 · Arbitrum / Optimism を大幅に上回る)。

**日次取引量**:~10-15M tx/day。

**Sequencer revenue**:~$30-100M ARR(2026 推定 · meme coin サイクル次第)。

**ユーザー gas cost**:Pectra 後 ~$0.0005-0.005 / simple transfer · sub-cent 体験が安定。

**DEX 深度**:Aerodrome(主導 · ~$3-5B TVL · Velodrome v2 を Base にフォーク)· Uniswap v3 · Curve · BaseSwap 等。Stablecoin pair 深度は業界最深。

**借貸規模**:Aave v3 on Base ~$2-4B · Morpho ~$500M-1B · Compound ~$300M-500M。

**RWA**:Centrifuge · Maple · Stripe USDC settlement · PayPal PYUSD 流通。Coinbase USDC primary 入口により Base は RWA + stablecoin 流通が最も深い L2 となる。

**治理成熟度**:**Stage 1 decentralization**(L2Beat)· Coinbase が sequencer 主導 · 2026-2027 に decentralized sequencer 導入計画。Upgrade:Security Council 7-of-13 + 7-day timelock。

**エコシステム多様性**:Consumer-heavy(DEX · meme coin · ソーシャル · ゲーム)· Aerodrome / Friend.tech / Farcaster / Zora / Coinbase Smart Wallet 等。DeFi と消費アプリのバランス。

**DA layer**:Ethereum L1 blobs(EIP-4844)· alt-DA は計画なし。

**主要優位**:
- Coinbase 親会社トラフィック入口(US トップ CEX · 1.5 億+ 登録ユーザー)
- Stripe / Shopify / Apple Pay 統合(USDC settlement)
- Coinbase Smart Wallet(ネイティブ AA · ETH gas 不要 · [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet adoption]] を参照)
- 極めて低い gas + Aerodrome 深度により meme coin / 消費 dApp が爆発
- Base 専用プロジェクト(Friend.tech · Farcaster · Zora)が Base に独自エコシステムを提供

### Arbitrum (Offchain Labs)

**TVL May 2026**:~$13B(L2 第二 · 2024-2025 stagnant · 2026 は Stylus 開発者吸引で穏やかに回復)。

**日次アクティブアドレス**:~1-2M(Base より顕著に低い · ただしユーザー単 tx あたりの価値はより高い)。

**日次取引量**:~4-6M tx/day。

**Sequencer revenue**:~$30-70M ARR。

**ユーザー gas cost**:Pectra 後 ~$0.001-0.01 / simple transfer。

**DEX 深度**:GMX(主導 perp · ~$1-2B TVL)· Uniswap v3 · Camelot · SushiSwap · TraderJoe 等。Perp DEX 集中度が高い。

**借貸規模**:Aave v3 on Arbitrum ~$2-3B · Radiant ~$500M(2025 hack 後回復)· Compound ~$300M。

**RWA**:相対的に少ない · Arbitrum は RWA 主選 L2 ではない。

**治理成熟度**:**Stage 1 decentralization**(L2Beat) · DAO 治理 + ARB token · Security Council 9-of-12 · BoLD(Bounded Liquidity Delay)証明システムが 2025 にローンチされ Arbitrum は OP rollup 中初の permissionless validator となる。

**エコシステム多様性**:DeFi-heavy(perp · spot · 借貸 · yield farming) · GMX / Camelot / Pendle / Vela 等。消費アプリは少ない。

**DA layer**:Ethereum L1 blobs(主チェーン)· Arbitrum Orbit 子チェーンは AnyTrust(委員会 DA)または EigenDA を選択可。

**主要優位**:
- 技術リード(Stylus · Rust/C++ スマートコントラクトサポート · EVM 以外の能力拡張)
- BoLD permissionless validator は OP rollup 中最も advanced な decentralization
- Arbitrum Orbit フレームで ~20+ L3 / appchain を展開
- DeFi-native ユーザーベースが安定 · TVL が流出しにくい

**主要劣位**:
- 消費者入口を欠く(Coinbase / Stripe の同等物なし)
- DeFi-native ユーザー成長が飽和
- TVL が 2024-2025 stagnant · 2026 は穏やかな回復のみ

### Optimism (OP Labs)

**TVL May 2026**:~$5B(L2 第三 · OP Labs が直接運営 · ただし OP Stack 子チェーン TVL が主チェーンを大きく超える)。

**日次アクティブアドレス**:~600k-1M(主チェーン)+ Superchain 子チェーン総和 ~5-8M(Base 主チェーン単独より上)。

**日次取引量**:主チェーン ~2-3M tx/day · Superchain 総 ~15-25M tx/day。

**Sequencer revenue**:主チェーン ~$10-25M ARR · OP Labs は Superchain 経由で sequencer revenue 分配を受領 · 総 ~$30-60M ARR。

**ユーザー gas cost**:Pectra 後 ~$0.001-0.01 / simple transfer。

**DEX 深度**:Velodrome(主導)· Uniswap v3 · Curve 等。OP DEX 深度は Arbitrum より低いが ZK rollup 主流より高い。

**借貸規模**:Aave v3 on Optimism ~$1-2B · Sonne · Granary 等。

**RWA**:Maker / Sky が OP 上に一部 deploy · ただし RWA 主選ではない。

**治理成熟度**:**Stage 1 decentralization** · OP token DAO + Citizen House(双 house 治理) · Security Council + 7-day timelock。Superchain governance は OP Labs + 各チェーンチーム間で分権。

**エコシステム多様性**:DeFi + 一部消費(Worldcoin on OP Stack · Zora · Mode · Lyra 等)· 消費 dApp 第二の L2 プラットフォーム(Base 以外)。

**DA layer**:Ethereum L1 blobs(主チェーン + 大部分の Superchain)· Mode 一部は EigenDA · 一部 Superchain が Celestia をテスト。

**主要優位**:
- **OP Superchain 連邦化拡張**:Base · Worldcoin · Mode · Lyra · Polynomial · Zora · Soneium · Unichain 等 ~30+ chain が加入 · sequencer + 治理を共有
- OP Stack は modular rollup-as-a-service の主流フレームの 1 つ
- Superchain 総 TVL が実際に Arbitrum を超える(Base を Superchain に算入すれば ~$25B+)
- Retroactive Public Goods Funding(RPGF)は ecosystem incentive イノベーション

**主要劣位**:
- 主チェーン本体 TVL が stagnant · 成長はすべて Superchain 子チェーン
- Base は Superchain 最大子チェーン · ただし Coinbase の影響力により Base は実質独立ブランド · OP 直接受益とはみなされない

### zkSync Era (Matter Labs)

**TVL May 2026**:~$2.0B(ZK rollup 首位 · ZK Stack hyperchain TVL ~$500M を含む)。

**日次アクティブアドレス**:~400-700k。

**日次取引量**:~2-3M tx/day。

**Sequencer revenue**:~$15-30M ARR。

**ユーザー gas cost**:Pectra 後 ~$0.001-0.005(Account Abstraction native · ユーザーは stablecoin / ZK token で支払い可能 · ETH 不要)。

**DEX 深度**:SyncSwap(主導)· Maverick · Mute 等。深度は Base / Arbitrum / Optimism より低い。

**借貸規模**:Aave v3 on zkSync ~$300-500M · Reactor 等。

**RWA**:相対的に少ない · ZK rollup は概して RWA 主流ではない(institutional は L1 + Polygon zkEVM 寄り)。

**治理成熟度**:**Stage 1 decentralization**(L2Beat) · ZK token DAO + Matter Labs Foundation · Security Council 9-of-15 · 21-day timelock(2024 後 1-day から延長)。

**エコシステム多様性**:DeFi-heavy + AA-native dApp(Argent · Braavos AA wallet 統合) · ZK Stack hyperchain(GRVT perpetual · Treasure gaming · Cronos zkEVM)。

**DA layer**:Ethereum L1 blobs(主チェーン)· ZK Stack hyperchain は EigenDA / Celestia を選択可([[systems/data-availability-celestia-eigenda-blob-comparison|DA 対照]] を参照)。

**主要優位**:
- ZK rollup 中で TVL 最大
- Account Abstraction native(ERC-4337 包装不要 · ユーザー体験がよりスムーズ)
- ZK Stack フレームは ZK rollup の modular RaaS 主流の 1 つ
- Boojum prover 性能が ZK rollup 中でリード

**主要劣位**:
- Type 4 EVM compatibility(異なる bytecode · dev tooling 対応が必要)
- Coinbase / Stripe 等の消費者入口を欠く
- ユーザー成長は Linea(MetaMask トラフィック借用)より遅い

### Linea (Consensys)

**TVL May 2026**:~$1.2B(ZK rollup 第二 · MetaMask トラフィック優位)。

**日次アクティブアドレス**:~300-500k。

**日次取引量**:~1-2M tx/day。

**Sequencer revenue**:~$10-25M ARR。

**ユーザー gas cost**:Pectra 後 ~$0.002-0.01 / simple transfer。

**DEX 深度**:Lynex(主導)· iZUMi · Mendi 等。中等深度。

**借貸規模**:Aave v3 on Linea ~$200-400M · Mendi · ZeroLend 等。

**RWA**:MetaMask Institutional は Consensys 製品 · 一部 institutional pilot が Linea 上にある。

**治理成熟度**:**Stage 1 decentralization** · Consensys 主導 · Security Council 7-of-13 · 7-day timelock · 2026-2027 LINEA token DAO 導入計画。

**エコシステム多様性**:DeFi + Consensys 統合(MetaMask · Infura · Truffle ツールチェーンネイティブサポート)· dApp に MetaMask 統合事例が多い。

**DA layer**:Ethereum L1 blobs only(Consensys のスタンス「all on-chain」)。

**主要優位**:
- MetaMask 統合(MetaMask は EVM ウォレット市場シェア首位 · ~30M+ MAU · デフォルトで Linea を推奨)
- Consensys ツールチェーンエコシステムの深さ(Infura · Truffle · Hardhat 等)
- Institutional pilot 入口(MetaMask Institutional)

**主要劣位**:
- TVL は主に MetaMask トラフィックに依存 · 有機的成長ではない
- 消費者 dApp 入口を欠く
- ZK rollup だが Type 2(EVM-equivalent)で Type 1 ではない · 長期 prove cost が優位ではない

### Polygon zkEVM / AggLayer (Polygon Labs)

**TVL May 2026**:~$800M(AggLayer 連邦を含む)。

**日次アクティブアドレス**:~150-300k(主チェーン)+ AggLayer 子チェーン総和 ~500k-1M。

**日次取引量**:~500k-1M tx/day。

**Sequencer revenue**:~$5-15M ARR。

**ユーザー gas cost**:Pectra 後 ~$0.001-0.005 / simple transfer。

**DEX 深度**:QuickSwap(主導)· Uniswap v3 · Balancer 等。中等深度。

**借貸規模**:Aave v3 on Polygon zkEVM ~$100-300M · その他 lending プロトコルは小さい。

**RWA**:**Franklin Templeton FOBXX pilot**(2024)· 複数 enterprise pilot · ZK rollup 中で RWA が最も深い(institutional pilot は Polygon 寄り)。

**治理成熟度**:**Stage 1 decentralization** · Polygon Foundation + POL token DAO · Security Council 7-of-13 · 7-day timelock。

**エコシステム多様性**:DeFi + enterprise dApp + identity(Polygon ID)· 多元化。AggLayer 連邦 Polygon zkEVM + 他 zkEVM chain + Astar zkEVM。

**DA layer**:Ethereum L1 blobs default + validium モード(DAC 7-of-9 マルチシグ)を提供 · enterprise / プライベートチェーンが選択可。

**主要優位**:
- Polygon PoS chain(EVM L1 sidechain · 本マトリクスに含まれず · ただし Polygon ブランド全体は強い)から Polygon zkEVM への移行が一部トラフィック源
- AggLayer 連邦により複数 zkEVM chain が settlement を共有 · ZK rollup 中の modular RaaS フレーム
- Enterprise pilot 入口でリード(Franklin Templeton · 複数銀行 pilot)
- Polygon ID(decentralized identity)+ zkEVM は institutional KYC/AML フレンドリーな組み合わせ

**主要劣位**:
- TVL 成長は zkSync / Linea より遅い
- Polygon PoS chain のトラフィック移行が zkEVM にスムーズでない(ユーザーは Polygon zkEVM を新規チェーンと感じる)
- Type 2.5 EVM compatibility · Type 1 ではない

### Scroll (Scroll Foundation)

**TVL May 2026**:~$700M(ZK rollup 中 EVM-equivalent 路線が最も純粋)。

**日次アクティブアドレス**:~100-200k。

**日次取引量**:~500k-1M tx/day。

**Sequencer revenue**:~$5-15M ARR。

**ユーザー gas cost**:Pectra 後 ~$0.005-0.02 / simple transfer。

**DEX 深度**:Aave · Uniswap · Pendle · GMX 主流すべて deploy · ただし Scroll 上 native DEX は少ない。

**借貸規模**:Aave v3 on Scroll ~$200-400M。

**RWA**:相対的に少ない · ただし Scroll の「EVM-equivalent + L1 DA 純度」により一部 institutional pilot が Scroll 寄り。

**治理成熟度**:**Stage 1 decentralization** · Scroll Foundation + 学術血統(PSE と長期協業) · Security Council 7-of-13 · 7-day timelock · 2026-2027 SCR token DAO 導入計画。

**エコシステム多様性**:DeFi-heavy(Aave / Uniswap / Pendle / GMX 主流 fork)· 独自 native dApp を欠く。Scroll Canvas は onboarding ツール。

**DA layer**:Ethereum L1 blobs only(validium しない明確なスタンス)。

**主要優位**:
- Type 2 EVM-equivalent(99% bytecode-level 互換 · 主流 dApp はゼロ修正で deploy)
- 学術血統が強い(PSE / Ethereum Foundation と長期協業)
- L1 DA 純度のスタンス(institutional friendly)

**主要劣位**:
- TVL 成長が遅い · 独自 catalyst を欠く
- Coinbase / MetaMask / Consensys 類の大量トラフィック入口がない
- ユーザー感覚は他 ZK rollup と類似 · 差別化ブランドを欠く

## Big comparison matrix table

**7 つの主流 L2 rollup × 11 軸対照**(2026-Q2 状態):

| Rollup | TVL May 2026 | Daily Active | Daily Tx | Sequencer Revenue | User Gas | DEX 深度 | 借貸規模 | RWA | 治理成熟度 | エコシステム特色 | DA Layer |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Base (Coinbase)** | **~$18B (L2 首位)** | **3-5M (首位)** | 10-15M | $30-100M ARR | $0.0005-0.005 | Aerodrome $3-5B · Uniswap · Curve | Aave $2-4B · Morpho $500M-1B | Stripe USDC · PayPal PYUSD · Centrifuge | Stage 1 · SC 7/13 · 7d timelock | Consumer-heavy · meme/social/game · Coinbase Smart Wallet | L1 blobs only |
| **Arbitrum** | ~$13B (第二) | 1-2M | 4-6M | $30-70M ARR | $0.001-0.01 | GMX $1-2B perp · Uniswap · Camelot | Aave $2-3B · Radiant $500M | 相対的に少ない | Stage 1 · DAO+ARB · SC 9/12 · BoLD permissionless | **Stylus (Rust/C++)** · DeFi-heavy · Orbit L3 フレーム | L1 blobs + Orbit が AnyTrust/EigenDA を選択可 |
| **Optimism + Superchain** | ~$5B 主チェーン · Superchain 総 ~$25B+ | 600k-1M 主チェーン · Superchain 5-8M | 主 2-3M · Superchain 15-25M | $30-60M ARR (分配含む) | $0.001-0.01 | Velodrome 主導 · Uniswap | Aave $1-2B · Sonne | Maker 一部 | Stage 1 · OP DAO + Citizen House · SC + 7d timelock | **OP Superchain 連邦 ~30+ chain** · Worldcoin/Zora/Mode/Soneium | L1 blobs (主) · Mode EigenDA · 一部 Celestia テスト |
| **zkSync Era** | ~$2.0B (ZK 首位) | 400-700k | 2-3M | $15-30M ARR | $0.001-0.005 · **AA native** | SyncSwap · Maverick | Aave $300-500M | 少ない | Stage 1 · ZK DAO · SC 9/15 · 21d timelock | DeFi + **AA native** · ZK Stack hyperchain(GRVT/Treasure/Cronos) | L1 blobs · hyperchain は EigenDA/Celestia を選択可 |
| **Linea (Consensys)** | ~$1.2B | 300-500k | 1-2M | $10-25M ARR | $0.002-0.01 | Lynex · Mendi 中等 | Aave $200-400M | MetaMask Institutional pilot | Stage 1 · Consensys 主導 · SC 7/13 · 7d timelock | **MetaMask 統合** · Infura/Truffle ツールチェーン | L1 blobs only (all on-chain スタンス) |
| **Polygon zkEVM/AggLayer** | ~$800M (AggLayer 含む) | 150-300k 主 · AggLayer 総 500k-1M | 500k-1M | $5-15M ARR | $0.001-0.005 | QuickSwap · Uniswap · Balancer | Aave $100-300M | **Franklin Templeton FOBXX pilot** · 複数 enterprise pilot | Stage 1 · POL DAO · SC 7/13 · 7d timelock | DeFi + enterprise + **Polygon ID** · AggLayer 連邦 | L1 blobs + Validium モード(DAC 7/9) |
| **Scroll** | ~$700M | 100-200k | 500k-1M | $5-15M ARR | $0.005-0.02 | Aave/Uniswap/Pendle/GMX 主流 | Aave $200-400M | 少ない · ただし L1 DA 純度が一部 institutional を惹きつける | Stage 1 · Scroll Foundation · SC 7/13 · 7d timelock | DeFi-heavy · **Type 2 EVM-equivalent** · 学術血統 (PSE) | L1 blobs only (validium しない明示) |

**マトリクスの読み方**:
- **TVL 順位**:Base > Arbitrum > Optimism (主チェーン) > zkSync > Linea > Polygon zkEVM > Scroll · ただし Superchain 全体を Optimism に算入すれば OP Superchain > Base > Arbitrum
- **日次アクティブアドレス順位**:Base 首位 + 顕著にリード · Arbitrum / Optimism 中等 · ZK rollup はいずれも小さい
- **Sequencer revenue 順位**:Base ≈ Arbitrum ≈ Optimism(3 巨頭がそれぞれ $30-70M ARR)· ZK rollup はそれぞれ $5-30M ARR
- **エコシステム深度**:Base = consumer + DeFi · Arbitrum = DeFi 専門 · Optimism = Superchain 連邦 · zkSync = AA native · Linea = MetaMask トラフィック · Polygon zkEVM = enterprise pilot · Scroll = EVM 純度
- **治理成熟度の収束**:7 つとも Stage 1 · Security Council + 7-21 day timelock · DAO 治理かチーム主導 · 実質的に Stage 2 full decentralization に達した L2 はない

## Base-led growth · Coinbase 効果

### なぜ Base が最速成長か

**Coinbase 親会社効果**:
- Coinbase は米国 US トップ CEX · 登録ユーザー ~1.5 億(2026)· 月活 ~500-700 万
- Coinbase は積極的に USDC primary 入口 + 法定通貨 onramp を Base に推進
- Coinbase Smart Wallet(ネイティブ AA · [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet adoption]] を参照)はデフォルトで Base に deploy · ETH gas 不要 · ユーザー体験は Web2 に近い

**Stripe / Shopify / Apple Pay 統合**:
- Stripe は 2024-2025 年に「USDC on Base」加盟店 settlement を発表 · cross-border payment コストを大幅削減
- Shopify 加盟店の pay-with-USDC のデフォルトは Base
- Apple Pay は Coinbase Wallet 経由で Base と統合

**Meme coin 潮流**:
- 2024-Q3 から Base 上の meme coin volume が爆発(BRETT · TOSHI · DEGEN 等)
- 日次 Base DEX volume が複数回 $1B を超え · 他 L2 を大きく上回る
- Aerodrome(Base 主 DEX)が L2 第一 DEX by TVL となる · ~$3-5B

**Consumer / ソーシャル dApp**:
- Farcaster(分散型ソーシャル)は主に Base に deploy · Frames(Farcaster 内蔵 mini-app)エコシステムが爆発
- Friend.tech · Zora · Mocaverse 等の consumer dApp が Base に集中

### Base の「soft moat」

- **Sequencer 中央集権だが信頼される**:Coinbase は USA 上場企業(NASDAQ: COIN)· 規制コンプライアンス · ユーザー信頼度が高い
- **L1 DA スタンス**:Base は常に L1 blobs を使用 · alt-DA は計画なし · institutional の期待と整合
- **OP Stack 統合**:Base は OP Superchain の一員 · OP エコシステムの溢出を享受しつつ独立ブランドを維持

### Base の潜在リスク

- **Sequencer 中央集権が単一障害点**:Coinbase が規制要求で特定 transaction を検閲する場合 · Base の検閲耐性に影響
- **Meme coin サイクルへの過度依存**:meme coin は volatile · 冷却すれば Base ユーザーアクティビティが低下する可能性
- **OP Superchain 内部競争**:Worldcoin / Mode / Soneium 等の OP Stack chain は Base の競合 · 協力のみではない

## Arbitrum stagnation · 技術リードだが成長減速

### なぜ Arbitrum 成長が減速したか

- **DeFi-native ユーザー構造**:Arbitrum の主要ユーザーは DeFi power user(perp trader · yield farmer · 複数 protocol インタラクション) · この層の規模が飽和
- **消費者入口を欠く**:Coinbase / Stripe / MetaMask 類の大量トラフィック入口なし · 新規ユーザー獲得は native dApp に依存
- **GMX 単一プロトコル集中**:Arbitrum DeFi の大部分の volume が GMX に集中 · 2024-2025 perp DEX 競合(独立 L1 上の Hyperliquid + Cosmos 上の dYdX v4)が Arbitrum トラフィックを分散

### Arbitrum の技術優位(十分に変現していない)

- **Stylus**(2024 ローンチ):Rust / C++ スマートコントラクト deploy 可能 · EVM L2 で唯一サポート · ただし実際の dApp 採用は遅い
- **BoLD permissionless validator**(2025 ローンチ):OP rollup 中最も advanced な decentralization · ただしユーザーは無感
- **Arbitrum Orbit**:フレームで ~20+ L3 / appchain を deploy · ただし Orbit chain TVL 総和 < OP Superchain
- **Arbitrum Nova**:AnyTrust DA 子チェーン · 高頻度低価値 use case にサービス · ただし市場シェア小

### Arbitrum 2026 回復シグナル

- 2026-Q1 Stylus 上 Rust DeFi プロトコルがローンチ(Cygnus · Hydrogen 等)· dApp 多元化
- BoLD permissionless validator により ARB stake economic が起動 · token holder 収益期待が改善
- Arbitrum Orbit の一部 L3 が圏外進出(XAI gaming · Lumia · ApeChain)

## OP Superchain expansion · 連邦化戦略

### Superchain フレーム

OP Stack documentation 参照:
- **共有 sequencer**(計画 · 2026-2027 導入)
- **共有 governance**(Citizen House 一部参加)
- **共有 settlement**(L1 上の相互信頼ブリッジ)
- **共有 RPGF**(Retroactive Public Goods Funding · OP 治理 token 配布)

各 Superchain 子チェーンは独立運営 + 独立ブランドのまま · ただし基盤 stack を共有。

### Superchain メンバー(2026-Q2 一部)

- **Base (Coinbase)** · TVL $18B
- **Optimism 主チェーン** · TVL $5B
- **Worldcoin** · ユーザー多いが TVL は低い
- **Mode** · DeFi specialty · 一部 EigenDA 使用
- **Lyra** · options DEX · TVL ~$200-400M
- **Polynomial** · perp · 比較的小さい
- **Zora** · NFT / creator economy · ユーザー多いが TVL 低い
- **Soneium**(Sony 推進 · 2025 ローンチ)· 入門級
- **Unichain**(Uniswap 推進 · 2025 ローンチ)· Uniswap 専用
- **Mantle** · EigenDA L2 (technically not Superchain · ただし OP Stack 初期 fork)
- その他 ~20+ chain

### Superchain 総 TVL

Base + Optimism + その他 Superchain TVL を合算すれば ~$25B+ · **Arbitrum 単チェーンを実際に超える**。だが Coinbase は Base が Superchain メンバーであることを強調しない(Base は独立ブランド)· そのため業界の対照では Optimism は依然として単独算入。

### Superchain 治理の緊張

- **OP Labs vs Base team**:Coinbase の影響力により Base は実質独立 · OP Labs は sequencer revenue 分配(~10%)を得るが治理影響は限定
- **Worldcoin / Mode / その他子チェーン**:多くが自前 token + DAO を持ち · OP token 治理影響は弱まる
- **共有 sequencer の実際進捗**:OP Labs が継続推進 · ただし各子チェーンが sequencer revenue を放棄するかは政治問題

## エコシステム影響 · Web3 エンドユーザー分布

### ユーザー / dApp / 資本分布

**Web3 Total active addresses(L2 + L1 + Solana 等 · 2026-Q2 推定)**:
- 全 EVM L2 daily active ~10-15M(Base が ~30-40% 占有)
- Ethereum L1 daily active ~500k-1M(機関 + 大口集中)
- Solana daily active ~5-10M(meme coin 主導)
- Polygon PoS sidechain ~2-3M(減少中 · トラフィックが zkEVM に移行)
- その他 ~5M

**資本分布(TVL · 2026-Q2 推定)**:
- Ethereum L1 ~$120B(機関 + 大口 + 老錢)
- L2 総 ~$45B(Base $18B + Arbitrum $13B + Optimism $5B + その他 $9B)
- Solana ~$15B
- 他 L1 ~$30B(Tron + BSC + Avalanche + etc)

**DEX volume 分布(2026 日次平均)**:
- L2 DEX total ~$3-5B / day(Base 主導 ~40%)
- Solana DEX total ~$3-6B / day(meme coin 主導)
- Ethereum L1 DEX ~$1-2B / day(機関 swap)
- その他 ~$1B / day

### Solana エコシステムとの競合

[[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]] を参照:
- Solana は meme coin / consumer trading で Base と直接競合
- ただし Solana の TPS 優位(post-Firedancer · [[systems/solana-firedancer-validator-economics|Solana Firedancer]] を参照)により Solana は高頻度取引で依然リード
- Base の優位は L2 セキュリティ + Coinbase 入口 + USDC 流通
- 長期に Web3 エンドユーザーは Base と Solana 間で分流する可能性 · いずれかが dominant となるのではなく

### クロス L2 流動性フラグメンテーション

- 各 L2 間のブリッジ cost + finality が問題([[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] と [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security insurance matrix 2026]] を参照)
- 共有 sequencer(Espresso · Astria)と cross-rollup intent(CoW · Bungee)は緩和策 · ただし 2026 はまだ早期
- Stablecoin liquidity(USDC · USDT)が複数 L2 に分散 · ユーザー摩擦の主因

## Boundary cases / future trajectory

**Base は規制による sequencer 制約を受けるか**:Coinbase は SEC / CFTC の規制対象 · SEC が Base sequencer に OFAC 制裁アドレスの検閲を強制すれば、Base の ETH-aligned L2 エコシステムにおける status に影響。現在 Coinbase は公開で検閲しないと約束 · ただし長期リスクは存在。

**Arbitrum BoLD permissionless validator は ARB token 価値を駆動できるか**:BoLD により誰でも ARB を deposit して validator になり challenge を検証可能 · ただしユーザー感覚は不明瞭。token 価値の反映には検証時間が必要。

**OP Superchain は fragmentation が出現するか**:Superchain メンバーが > 30 となれば · 治理調整の難度が上昇 · 一部子チェーンが OP Stack を fork して独立する可能性。Worldcoin / Mantle / Mode は独立 governance の意向を複数回表明済み。

**ZK rollup は mid-tier から top-tier に突破できるか**:zkSync / Linea / Scroll / Polygon zkEVM の長期 TVL 成長は遅い · catalyst(monster dApp · 機関 RWA · Fusaka PeerDAS によるさらなるコスト低下)で ZK が top-tier に突破できるか?

**Account Abstraction 主流化タイムテーブル**:Coinbase Smart Wallet / Argent / Braavos / MetaMask Smart Account がいずれも推進 · 2026 ユーザー ~20-30% が AA を使用する可能性 · 2027-2028 主流化の可能性([[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet adoption]] を参照)· これにより L2 ユーザー体験が大幅改善。

**Stage 2 decentralization タイムテーブル**:現在すべての L2 が Stage 1 · L2Beat の Stage 2 criteria は permissionless validator + 30-day social fallback + 完全な dispute resolution · 2026 内に Stage 2 に達することを公開コミットした L2 はない · 2027-2028+ の可能性。

**RWA トラフィック split**:Polygon zkEVM は ZK rollup 中で RWA pilot が最深 · ただし実際の RWA TVL の大部分は依然として Ethereum L1。L2 RWA は institutional risk committee の受容度上昇に伴い上昇するか?

**Sequencer revenue 長期進化**:Pectra 後 sequencer margin が安定 · ただしユーザー数が成長を続ければ · L2 総 sequencer revenue は 2027 年に $500M+ に達する可能性 · これにより L2 評価がより定量可能となる(SaaS ARR multiple に類似)。

**Cross-L2 intent / shared sequencer**:Espresso · Astria 等の共有 sequencer が 2026-2027 ローンチ · 主流 L2 が採用すれば · 流動性フラグメンテーション問題が緩和 · ユーザー体験が大幅改善。

## Counterpoints

- **TVL 数字 ≠ 実経済活動**:大部分の L2 TVL は bridge wrapped asset(WETH · USDC · stETH) · 実 native value creation は高くない可能性
- **Base「consumer dApp」の一部は meme coin · 持続不可**:meme coin は cyclical · Base ユーザーアクティビティは変動する可能性
- **OP Superchain 総 TVL に Base を含むのは重複算入**:Coinbase が実質独立ブランド · Base TVL を OP Superchain 算入は inflation の疑い
- **ZK rollup「技術ナラティブ」が変現しない可能性**:ZK rollup は長期に方向性とされる · ただし 2024-2026 OP rollup TVL が主導継続 · ZK rollup ユーザー成長は遅い
- **Stage 1 decentralization ≠ 実際に decentralized**:Security Council + 7-day timelock はチームに事実上の制御権を残す · ユーザー資金の真の分散化には Stage 2+ が必要 · 実現にはほど遠い
- **L2 内部競争は zero-sum か?**:L2 総 TVL pool が不変で · L2 間が相互に蝕み合うという見解あり。だが実証では L2 総 TVL が継続成長(2022 ~$5B → 2026 ~$45B)· ETH L1 トラフィック移行 + 新規ユーザー参入であり · zero-sum ではない
- **DA cost はもはや differentiator ではない**:Pectra/Fusaka 後すべての L2 DA cost が低い · 真の差別化はユーザー入口 + dApp エコシステム + 治理成熟度

## Open questions

- **Base は token 上場するか**:Coinbase は上場企業 · Base token 上場は SEC 審査をトリガーする可能性 · ただし token ローンチはエコシステムをさらに刺激する可能性
- **Arbitrum は Base 類似の消費者入口を見つけられるか**:Stylus / BoLD は技術優位 · ただしユーザー成長には消費者 catalyst が必要
- **OP Superchain で Base を超える dominant 単チェーンが出現するか**:Worldcoin / Soneium / Unichain は次の Base になれるか
- **ZK rollup が市場シェア 30% を突破するのはいつ**:現在 ZK rollup は L2 TVL の ~15% · いつ 30%+ になれるか · prove cost かユーザー認知問題か
- **Polygon zkEVM の enterprise pilot はいつ production TVL に転換するか**:Franklin Templeton 等 pilot は demo か commercial deploy か
- **Cross-rollup intent / shared sequencer はいつ主流化するか**:Espresso / Astria 2026-2027 進捗がユーザー体験を改善するか
- **Stage 2 decentralization はいつ達成するか**:L2 チームが sequencer + governance 制御権を真に放棄する意思はあるか
- **L3 / Orbit / Hyperchain は L2 トラフィックを蝕むか**:それとも補完か?

## Related

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

## Sources

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
