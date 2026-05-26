---
title: グローバル DEX Aggregator 比較マトリックス · 1inch / 0x / CowSwap / Jupiter / OpenOcean / ParaSwap / KyberSwap / OKX DEX
aliases:
  - global-dex-aggregator-comparison-matrix
  - global dex aggregator comparison matrix
  - dex aggregator eight-way comparison
  - 1inch 0x cowswap jupiter aggregator matrix
  - dex aggregator 2026 comparison
domain: exchanges
created: 2026-05-25
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-25
confidence: likely
tags: [exchanges, matrix, dex, aggregator, 1inch, 0x, cowswap, jupiter, openocean, paraswap, kyberswap, okx, mev, rfq, batch-auction]
status: active
sources:
  - https://1inch.io/
  - https://0x.org/
  - https://matcha.xyz/
  - https://cow.fi/
  - https://jup.ag/
  - https://openocean.finance/
  - https://www.paraswap.io/
  - https://kyberswap.com/
  - https://www.okx.com/web3/dex
  - https://defillama.com/aggregators
  - https://dune.com/
---

# グローバル DEX Aggregator 比較マトリックス · 8大 Aggregator 横断対照

## TL;DR

- 8大DEX aggregatorを2026-Q2時点で **chain coverage · routing model · MEV protection · gas relay · daily volume · fee model · partner integration · governance token** の8軸で対照
- **Routing model 3大象限**:**on-chain pathfinder**(1inch · ParaSwap · KyberSwap · OpenOcean · OKX DEX)· **RFQ (Request-For-Quote / market maker quote)**(0x Protocol · Matcha · OKX DEXもRFQを含む)· **batch auction**(CowSwap / CoW Protocol)— JupiterはSolana ecosystem専用のSVM aggregator
- **Chain coverage の分化**:EVM-heavy(1inch · 0x · CowSwap · ParaSwap · KyberSwap · OpenOcean · OKX DEX)vs Solana-only(Jupiter)· 真のmulti-VM aggregatorはまだ存在せず(OpenOceanはEVM + Solanaを同時にカバーする数少ない例だが、Solana経路は実質Jupiter sub-routingに乗る)
- **MEV protection の3大メカニズム**:**CoW Protocol のバッチオークション + uniform clearing price**(構造的にMEVを消す)· **1inch Fusion / 0x Settler の intent-based + signed quote**(MEVをほぼキャンセル)· **flashbots private mempool** ラッパ(一部aggregatorが統合)— JupiterのSolana上のMEVはJito tipモデルで緩和
- **Daily volume**(2026-Q2推定):1inch ~$1.5-2B · Jupiter ~$1-2B(Solanaの70%+のroutingが経由)· 0x/Matcha ~$0.8-1.2B · CowSwap ~$0.4-0.6B · KyberSwap / OKX DEX ~$0.3-0.5B · ParaSwap / OpenOcean それぞれ ~$0.2-0.4B
- **Governance token**:1INCH · ZRX · COW · JUP · KNC · OKB(OKX本体のtoken)· PSP(2024 launchのParaSwap)· OpenOcean OOE · 各々の治理モデルとfee distributionは大きく異なる
- 関連:[[exchanges/global-dex-major-five-comparison|global DEX 5強]](DEX比較)· [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX]](Solana 6層)· 本マトリックスは8 aggregator横断に特化

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-dex-major-five-comparison|global DEX 主要 5 社比較]] for the underlying DEX pool layer, [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]] for the Solana SVM aggregator/DEX stack, [[exchanges/global-perp-dex-five-comparison|global perp DEX 5 comparison]] for the perp-only segment, and [[exchanges/native-dex-flip-incumbent-pattern|native DEX flip incumbent pattern]] for chain-specific DEX dynamics. For peer Solana DEX deep dives see [[exchanges/dex-jito-solana|Jito Solana]] · [[exchanges/dex-raydium-solana|Raydium]] · [[exchanges/dex-orca-solana|Orca]] · [[exchanges/dex-pendle|Pendle]]. For the AMM evolutionary tree see [[exchanges/amm-design-evolution|AMM design evolution]] and [[exchanges/vetoken-host-protocol-flywheel|veToken host protocol flywheel]]. For MEV / order-flow architectural context see [[systems/mev-flashbots-suave-order-flow-auction|MEV Flashbots Suave order-flow auction]]. For broader CEX 競争 framing see [[exchanges/global-cex-top10-comparison|global CEX top 10 比較]] and [[exchanges/cex-api-sdk-ecosystem-comparison|CEX API SDK ecosystem]]. For regulatory framing see [[exchanges/fsa-vasp-registration-system|FSA VASP registration]] · [[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP]] · [[exchanges/global-vasp-regulatory-comparison-matrix|global VASP regulatory matrix]].

## なぜこのマトリックスが必要か

DEX aggregatorは2020-2021年の単純pathfinderから2024-2026年に **intent-based routing + MEV protection + cross-chain swap** へ進化した。aggregatorは **routing modelの設計** で大きく分化しており、ユーザーが「best price」を得る経路がaggregatorごとに根本的に異なる。

しかしaggregatorの比較情報は分散している — 1inch公式は自社RFQ + Fusionを強調し、CoW Protocolはbatch auctionによるMEV撲滅を強調し、JupiterはSolanaでの支配率を強調する。マトリックスの価値は **同一基準で8 aggregatorを8軸横断で比較** することにあり、トレーダー / 取引所統合パートナー / 機関のルーティング選定が「自分のユースケースに最適なaggregator」を選べるようにする点にある。

注意:aggregatorは基礎DEX(Uniswap / Curve / Balancer / Solana Raydium / Orca等)の流動性プールの上に乗っているため、aggregator競争は「自社DEXを持たない pure routing layer」のメタゲームとなる。CowSwap (CoW Protocol)と1inch Fusionは自社solver / market makerネットワークを抱える点で例外的に「中間レイヤー以上」を取りに行っている。

## Per-aggregator sections

### 1inch (1INCH · v6 + Fusion)

**Routing model**:**On-chain Pathfinder + Fusion intent layer の二層**。Pathfinderアルゴリズムが流動性を全DEX(Uniswap v2/v3/v4 + Curve + Balancer + Sushiswap + 100+ AMM)から経路探索し、gas + slippageを最適化。**Fusion** は2023年にlaunchされたintent-based入札層で、ユーザーがsigned orderを提出し、resolver(MEV searcher / market maker)が競争入札、1inch自体はorder matchingを仲介する。

**Chain coverage**:**EVM-only**(Ethereum + Arbitrum + Optimism + Polygon + BNB Chain + Base + Avalanche + zkSync Era + 等11+ chain)。Solana / Aptos / Suiは対象外(意図的にEVM-first)。

**MEV protection mechanism**:Fusion intent-basedモードではresolverがswap実行時のMEVをkept minimal(resolver競争でMEV valueがuserにrefundされるインセンティブ)· classical pathfinderモードはMEV exposed。Optional flashbots integrationあり。

**Gas relayer support**:Fusionモードではresolverがgasを支払い、userはgasless。Pathfinderモードはuser自前gas。

**Daily volume**:~$1.5-2B/日(2026-Q2推定 · DefiLlama aggregators板)。**EVM aggregatorのリーダー** ポジション。

**Fee model**:Pathfinderはno fee(LP feeのみ)· Fusionではresolverから手数料(small spread)· Partner integration経由はreferral fee設定可能。

**Partner integrations**:MetaMask Swaps経由(MetaMaskが1inchをdefault routing providerの1つに採用)· Coinbase Wallet · TrustWallet等多数。

**Governance token**:**1INCH**(2020年launch · veTokenモデルに2022年移行 · veINCH投票でfee distribution + resolver whitelistを決定)。

### 0x Protocol / Matcha (ZRX · Settler · RFQ)

**Routing model**:**RFQ-first hybrid**。0x Protocolは **professional market maker(Wintermute · GSR · Jane Street等)からsigned quote** を取得し、同時にon-chain liquidityも比較してベストを選択。Settler(2024年launch)はMEV-resistant smart router実装。Matchaは0x Protocolをコンシューマ向けにラップしたUI。

**Chain coverage**:**EVMマルチチェーン**(Ethereum + Arbitrum + Optimism + Polygon + Base + BNB Chain + Avalanche + 等9+)。

**MEV protection mechanism**:RFQ quoteはprivate signed · MEV searcherが前置sandwichできない(makerがprice commitした瞬間にexecute)。Settlerはpermit2 + smart routerでclassical AMM swapも保護。

**Gas relayer support**:0x API経由はuserがgas支払い · 一部partner(Coinbase Wallet等)はmeta-transactionでgasless支援。

**Daily volume**:~$0.8-1.2B(Matcha + 0x API経由の合計)。professional market maker liquidityの比率が他のaggregatorより高い。

**Fee model**:0.15% protocol feeが標準(2024-2025段階的導入)· partner referral fee設定可能。

**Partner integrations**:**Coinbase Wallet swap** · **MetaMask Swaps(co-provider)** · **Robinhood crypto swap backend**(2024年発表)· Brave Wallet等。エンタープライズ統合が最も多いaggregatorの1つ。

**Governance token**:**ZRX**(2017年launch · ZRX staking + governance · 2024年にfee distribution議論進行中)。

### CowSwap / CoW Protocol (COW · Batch Auction)

**Routing model**:**Batch auction with uniform clearing price**。ユーザーはintent(sell X for at least Y)を送信 · ~12秒のbatch window中の全orderがCoW (Coincidence of Wants)でマッチング · 残余はsolverが外部AMM/RFQでsettleする。**Uniform clearing price** で同一token pairの全orderが同価格で成立するため、MEV(sandwich + frontrunning)が構造的に成立しない。

**Chain coverage**:**EVM**(Ethereum mainnet + Gnosis Chain + Arbitrum + Base · 2026-Q2時点)。Multi-chain拡張は他aggregatorより保守的。

**MEV protection mechanism**:**構造的にMEV不在** — batch auctionモデルではorderが個別にexecuteされないためsandwich攻撃が物理的に成立しない。Solver競争でMEV valueがuser surplusに変換される。

**Gas relayer support**:**完全gasless** — solverがgasを負担(swap outputから差し引き)· user walletは署名のみ。

**Daily volume**:~$0.4-0.6B(2026-Q2)。出来高は他aggregatorより小さいが、**1取引あたりのサイズが大きい**(機関 + 大口retailがMEV-protected swapを求めて来る)。

**Fee model**:0.1-0.5% solver fee(user surplusからchargeする透明な方式)· CowDAO fee switchが2024年enableされCOW stakerにrewardを分配。

**Partner integrations**:**Safe (Gnosis Safe) native swap integration**(機関multisigがCoWでswapする)· Argent Wallet · Rabby Wallet · MEV-protection需要の高いuser baseに強い。

**Governance token**:**COW**(2023年launch · COW stakingでfee受領 + governance)。

### Jupiter (JUP · Solana only)

**Routing model**:**SVM (Sealevel) native aggregator** — SolanaのRaydium / Orca / Meteora / Phoenix / Lifinity / Saber / 等25+ DEXを統合routing。Jupiter v6でtransaction simulation + multi-hop optimization + just-in-time liquidity統合。

**Chain coverage**:**Solana単独**(意図的)。Cross-chainはJupiter Bridge(Wormhole経由)で別product。

**MEV protection mechanism**:SolanaはEthereumと異なるMEV環境 — **Jito Bundle**(参照 [[exchanges/dex-jito-solana|Jito Solana]])にJupiter swapを入れることでsandwich攻撃をJito validator tipで抑制。Jupiterは **Slippage Bot Protection** で価格が大きく動いた場合にtransactionをrejectする。

**Gas relayer support**:Solanaのgas feeは$0.001オーダーで極めて低い — gasless必要性がEVMより低い。Jupiterはuserが自前SOLを保有する前提。

**Daily volume**:**~$1-2B(Solana DEX全体取引量の70%+がJupiter経由でrouting)**。Solana ecosystemの事実上の入口。

**Fee model**:0% protocol fee(LP fee + Jito tipのみ)· Partner integration経由はreferral設定可能。

**Partner integrations**:Phantom Wallet · Solflare Wallet · Backpack(Solana walletエコシステム全体のdefault swap)· Jupiter LST (Liquid Staking Token)とJupiter Perpも拡張。

**Governance token**:**JUP**(2024-01 launch · Solana史上最大級のretroactive airdrop · JUP staking + governance)。

### OpenOcean (OOE · multi-VM)

**Routing model**:**Multi-VM pathfinder** — EVM aggregator(1inch風のpathfinder)+ Solana sub-routing(Jupiter APIを内部callすることもある)+ Aptos / SuiのMove VM AMMもカバー。**唯一の真のmulti-VM aggregator**。

**Chain coverage**:**EVM + Solana + Aptos + Sui + TONで20+ chain**。chain coverage数は最多。

**MEV protection mechanism**:Flashbots Protect integration(EVM)· Jito Bundle integration(Solana)· プロトコル層でのMEV撲滅は無いが、各chainのMEV mitigationをpass-throughする。

**Gas relayer support**:Chain-specific — EVMでは部分的meta-transaction · Solanaではgasがそもそも低い。

**Daily volume**:~$0.2-0.4B(2026-Q2)。chain coverageは広いが、各chainの出来高は他のEVM-specialistより小さい。

**Fee model**:0.1% protocol fee · partner referral fee。

**Partner integrations**:各chainのwallet(MetaMask · Phantom · Pontem · Suiet等)に多数統合 · cross-chain swap機能(LayerZero / Wormhole経由)が差別化点。

**Governance token**:**OOE**(2021年launch · staking + governance)。

### ParaSwap (PSP · pathfinder + RFQ hybrid)

**Routing model**:**Pathfinder + RFQ hybrid** — 自社ParaSwapPool(market maker RFQを提供)+ 外部AMM pathfinder · Delta(2024年launchのintent-based layer)でgasless intent swap。

**Chain coverage**:**EVM**(Ethereum + Arbitrum + Optimism + Polygon + Base + Avalanche + BNB Chain + zkEVM等11+ chain)。

**MEV protection mechanism**:Delta intent layerでMEV mitigation · classical pathfinderモードはMEV exposed · 1inch / CowSwapと比較してMEV撲滅は弱め。

**Gas relayer support**:Deltaはgasless · classical pathfinderはuser gas。

**Daily volume**:~$0.2-0.4B(2026-Q2)。1inch / 0xの影に隠れ市場シェアは減少傾向。

**Fee model**:Free pathfinder · Deltaからprotocol fee · partner referral fee。

**Partner integrations**:Argent · Ledger Live · Zerion等のretail walletに統合。

**Governance token**:**PSP**(2021年launch · 2024年にfee distribution model upgrade · sePSP staking)。

### KyberSwap (KNC · Aggregator + own AMM)

**Routing model**:**KyberSwap Aggregator(pathfinder)+ Kyber Elastic(自社concentrated liquidity AMM)のデュアル路線**。Aggregatorは外部AMM + 自社Elasticの両方をrouteする。

**Chain coverage**:**15+ chain**(Ethereum + Arbitrum + Optimism + Polygon + Base + BNB Chain + Avalanche + Linea + zkSync + Mantle + 等)。

**MEV protection mechanism**:2023年のhack後にコア routerを大幅に再監査 · MEV protection layerは組み込まれていない · ユーザーはMEV exposed。

**Gas relayer support**:Limited — user自前gas前提。

**Daily volume**:~$0.3-0.5B(2026-Q2)。

**Fee model**:0% aggregator fee · Kyber Elastic LP fee(swap fee from pool)。

**Partner integrations**:Krystal Wallet · MetaMask等。Vietnam / SEA市場で強い。

**Governance token**:**KNC**(2017年launch · 2022年migration · KNC staking + governance · KyberDAO)。

**Note**:2023-11にKyberSwap Elasticが **$48M exploit** を受けた歴史あり(complex AMM tick liquidity vulnerability)· 修復後もTVLは回復していない。Aggregatorは継続しているが、自社Elasticは事実上wind-down状態。詳細は [[exchanges/global-dex-major-five-comparison|global DEX 5強]] とpeer参照。

### OKX DEX Aggregator (OKB · 中央化バックド)

**Routing model**:**On-chain pathfinder + RFQ hybrid** — OKX(CEX)がbackedするRFQ liquidityを統合 · 外部AMM + OKX Spot order bookのhybrid。OKX Wallet内蔵のdefault swap。

**Chain coverage**:**EVM + Solana + TON + Aptos + Suiで20+ chain**。CEX backedの優位でchain expansionが早い。

**MEV protection mechanism**:Partial — OKX RFQ liquidity経由はMEV-resistant · external AMM経由はMEV exposed。

**Gas relayer support**:OKX Wallet経由はOKX Pay統合で部分的にgasless。

**Daily volume**:~$0.3-0.5B(2026-Q2)。CEX backedのブランド認知度とOKX Walletユーザーベースで着実に成長中。

**Fee model**:~0.1% protocol fee · OKX ecosystem内連携で減免可能。

**Partner integrations**:OKX Wallet(default)· OKX CEXへのシームレス連携(on-chain swap → CEX deposit)。

**Governance token**:**OKB**(OKX全体のtoken · 取引手数料discount + governance · DEX専用tokenは無い)。

## Big comparison matrix table

**8 aggregator × 8軸対照**(2026-Q2状態):

| Aggregator | Routing model | Chain coverage | MEV protection | Gas relayer | Daily volume (推定) | Fee model | Partner integrations | Governance token |
|---|---|---|---|---|---|---|---|---|
| **1inch** | Pathfinder + Fusion intent | **EVM 11+** | Fusion intent (resolver competition) + Flashbots opt-in | Fusion: solver pays · Pathfinder: user | **~$1.5-2B** | Free pathfinder · Fusion small spread | MetaMask Swaps default · Coinbase Wallet · Trust | **1INCH** (veINCH) |
| **0x / Matcha** | RFQ-first hybrid (Settler smart router) | EVM 9+ | RFQ signed quote (private) + Settler MEV-resist | Partial meta-tx via partners | ~$0.8-1.2B | 0.15% protocol fee | **Coinbase Wallet · MetaMask co-provider · Robinhood backend** | **ZRX** (staking) |
| **CowSwap / CoW Protocol** | **Batch auction + uniform clearing price** | EVM (Eth + Gnosis + Arb + Base) | **Structurally MEV-free** (batch CoW + uniform price) | **Fully gasless** (solver pays) | ~$0.4-0.6B (high avg ticket) | 0.1-0.5% solver fee · CowDAO fee switch on | **Safe native swap** · Argent · Rabby | **COW** (staking) |
| **Jupiter** | Solana SVM native aggregator (25+ Solana DEX) | **Solana only** | Jito Bundle integration + slippage bot protect | Low gas baseline (Solana ~$0.001) | **~$1-2B (70%+ Solana DEX routing)** | 0% protocol fee | **Phantom · Solflare · Backpack** (all Solana wallet default) | **JUP** (2024 airdrop) |
| **OpenOcean** | Multi-VM pathfinder (EVM + Solana + Aptos + Sui + TON) | **20+ chain across multi-VM** | Pass-through (Flashbots EVM · Jito Solana) | Chain-specific partial | ~$0.2-0.4B | 0.1% protocol fee | MetaMask · Phantom · Pontem · Suiet | **OOE** (staking) |
| **ParaSwap** | Pathfinder + RFQ + Delta intent layer | EVM 11+ | Delta intent partial · pathfinder exposed | Delta gasless · pathfinder user-pay | ~$0.2-0.4B | Free pathfinder · Delta fee | Argent · Ledger Live · Zerion | **PSP** (sePSP) |
| **KyberSwap** | Aggregator + own Kyber Elastic AMM | EVM 15+ | None (post-2023 hack focus on safety not MEV) | Limited | ~$0.3-0.5B | 0% agg fee · Elastic LP fee | Krystal · MetaMask · SEA market | **KNC** (KyberDAO) |
| **OKX DEX** | On-chain pathfinder + RFQ (CEX backed) | **20+ chain EVM + Solana + TON + Aptos + Sui** | Partial (RFQ MEV-resist · external AMM exposed) | Partial (OKX Pay gasless paths) | ~$0.3-0.5B | ~0.1% protocol fee · OKX ecosystem discount | **OKX Wallet default · CEX seamless on/off ramp** | **OKB** (CEX-wide) |

**マトリックスの読み方**:
- 横方向:1 aggregator × 8軸でprofile化 · 縦方向:同一軸 × 8 aggregatorの差異を比較
- **Routing model差異**:Pathfinder(1inch · ParaSwap · KyberSwap · OpenOcean)vs RFQ-heavy(0x · OKX)vs Batch auction(CowSwap)vs Solana SVM native(Jupiter)。**user experienceが根本的に異なる** — RFQは瞬時にquote · pathfinderはreal-time on-chain calc · batch auctionは ~12sのマッチング待ち
- **MEV protection強度ランキング**:**CowSwap(構造的)> 1inch Fusion(intent)> 0x(RFQ private quote)> OKX RFQ partial > 残り(exposedまたはminimal)**
- **Chain coverage**:**OpenOcean + OKX DEXがマルチチェーンtop** · **1inch / 0x / CowSwap / ParaSwap / KyberSwapはEVM-only** · **JupiterはSolana only**。Multi-VM aggregatorはまだ少ない
- **Governance token + fee distribution model**:COW · ZRX · 1INCHはfee switch進行中 / enabled · JUP / OOE / PSP / KNCはtoken utilityがgovernance中心 · OKBはCEX-wide token

## Composition / use case patterns

**Pattern A — 「Retail EVM trader, MetaMask default」**:
- MetaMask Swapsが裏で1inch + 0x co-providerをcall · ユーザーはaggregator選択を意識せず最良quoteを受け取る
- MEV protectionはflashbots opt-in程度 · 中規模retail取引(< $10K)で十分

**Pattern B — 「Solana memecoin / spot trader」**:
- Phantom / Solflare / Backpackのいずれかから Jupiter経由でほぼ全Solana DEXが一画面でrouting · 別aggregatorを選ぶ理由がない
- Jito BundleでMEV mitigation · slippage protectionでmemecoinのvolatilityを吸収

**Pattern C — 「大口取引 / 機関 trader」**:
- **CoW Protocolをdefault選択** — batch auction + uniform priceでMEV-free + price improvement via solver competition + Safe multisig native integration
- 代替:0x RFQでprofessional market maker quoteを取得 · Wintermute / GSRとの大口取引で執行

**Pattern D — 「Cross-chain swap」**:
- OpenOcean(multi-VM)またはOKX DEX(EVM + Solana + TON等)でchain coverageが広いaggregatorを選択
- LayerZero / Wormhole経由のcross-chain swapはaggregator内に組み込まれる
- 別経路:dedicated cross-chain bridge([[systems/cross-chain-bridge-eight-pole-comparison|cross-chain bridge eight-pole comparison]] 参照)+ 同chainのaggregatorの組み合わせ

**Pattern E — 「CEX-integrated user」**:
- OKX Walletユーザーは OKX DEX で on-chain swap → seamlessにOKX CEXへdeposit、または逆方向
- Coinbase Walletユーザーは 0x backed swap → seamlessにCoinbase exchange連携
- CEX backed aggregatorの最大のwedgeは **on/off-ramp摩擦の最小化**

**Pattern F — 「Developer / dApp embedding swap」**:
- 0x API(swap quote API)がエンタープライズ統合最多 — Coinbase / Robinhood / 等のCEX backendが0x quote APIを消費
- 1inch APIはwallet integration多 · CowSwap APIはsmart contract / multisig protocol統合多

## Boundary cases / future trajectory

**Intent-based routingの普及**:
- 1inch Fusion(2023)· CowSwap(2021〜)· ParaSwap Delta(2024)がintent-based / solver competitionモデルへshift
- Intentはuserがsigned orderを送信 · solverがexecuteするモデル — pathfinder algorithmic競争から **solver / market maker競争** へ進化
- 2026 trend:全主要EVM aggregatorがintent layerを保有 · classical pathfinderはintent unavailableなlong-tail token / small trade向けのfallback

**Cross-chain aggregationの統合**:
- OpenOcean / OKX DEX / Jupiter Bridge等が「cross-chain swap」を一画面で提供
- 裏側はLayerZero / Wormhole / Hyperlane / CCTP V2等のcross-chain protocol([[systems/cross-chain-bridge-eight-pole-comparison|cross-chain bridge eight-pole comparison]])にpass-through
- Chain abstraction pattern([[systems/chain-abstraction-pattern-overview|chain abstraction overview]])がaggregator UXを更に統合 — userはchainを意識せずswap

**MEV protection標準化圧力**:
- 2024-2025年のEU MiCA + US SECで「retail MEV exposure」規制議論
- Robinhood crypto / Coinbase Walletは0x backed swapで部分的MEV-protect · 機関retail flowにMEV protectionがdefault要求となる方向
- CoW Protocolモデルが **構造的にMEVを撲滅** できる唯一の答え · 2027-2028で他aggregatorが模倣する可能性

**RFQ vs AMMの境界が曖昧化**:
- 0x RFQはprofessional market maker quoteがAMM-style流動性のdeepさを上回る大口token pairで勝つ
- Uniswap v4 hookでAMMが「RFQ-style maker quote」をacceptできるようになる(2025-2026 deploy)
- 結果:aggregatorはAMMとRFQをtransparentに混合routing — userの視点では違いが見えなくなる

**OKX / Coinbase等のCEX backed aggregatorの脅威**:
- 中央化backed aggregator(OKX DEX · 0x backed swap on Coinbase)は **on/off-ramp + KYC + 機関流動性** のwedgeでpure DeFi aggregator(1inch / CowSwap)に挑戦
- 規制面でCEX backed aggregatorはMiCA / FSA / SEC complianceに対応 · 機関retail flowを吸収可能
- 2027+:CEX backed aggregatorがretail出来高の50%+を占有するshiftが起こりうる · pure DeFi aggregatorは **MEV-resistance + transparency** 提供で差別化が必要

**JupiterのSolana支配率と非Solana拡張**:
- JupiterはSolanaの70%+ DEX routingを占有 · 事実上Solana ecosystemの入口
- 2024年のJUP airdropでcommunity ownership + governance · Solana DAO governance influence拡大
- 非Solana拡張(Jupiter Bridge Wormhole経由)は実験的段階 · Solana focus維持の戦略

**Aggregator自身のMEV extraction競争**:
- 「MEV撲滅」を謳いながらsolver / resolver layerでMEV価値をkept / redistributeするモデル(CowSwap · 1inch Fusion)が普及
- SolverのMEV revenueからCOW staker · 1INCH stakerに分配するfee switch進行中
- 課題:**userへのfull MEV refund** vs **token holderへのfee distribution** のバランス · DAO governanceで議論

**Governance token + fee switch enable trend**:
- 2024-2026年でCOW · ZRX · 1INCH等がfee switch enable / 提案進行中
- アンチtokenモードのJupiter (JUP)やRobinhood backed 0x backed swapも、collected feeのdestinationが議論対象
- SEC / MiCAのtoken fee distributionへの規制不確実性が逆風

**Long-tail token coverage競争**:
- aggregatorが **どれだけ多くのtoken / poolをrouteできるか** がpathfinderモデルの中核競争
- Memecoin / niche tokenに対応するpathfinder速度 + AMM coverage(Curve / Balancer / KyberSwap Elastic等のniche AMM統合)が重要
- JupiterはSolana memecoin経済の中核 · 1inch / 0xはEVM long-tailで強い

**Embedded wallet × Agentic swap**:
- Privy / Coinbase CDP / Crossmint等のembedded wallet([[agent-economy/privy-embedded-wallet-overview|Privy overview 参照]])がaggregator backendをcall
- AI agent([[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption]])がx402経由のpaid APIとしてaggregator quoteを取得 · MEV-protected swapを実行
- 2026-2027 trend:agentがCowSwap / 1inch Fusionをdefault routeとして消費 · MEV protectionがagentic commerceで必須要件化

**規制 wildcard — AggregatorはCASP/VASPに該当するか?**:
- EU MiCAはaggregator(自己発注なし · routingのみ)をCASP義務対象とするかはgrey area
- 日本FSAはaggregator自体をVASP登録不要(non-custodial routing)としているが、CEX backed aggregator(OKX DEX等)は別議論
- 2026-2027年のEU MiCA TA(Technical Advice)でaggregator categorizationが明確化される見込み · 規制リスク変動の主要因

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[exchanges/INDEX|exchanges index]]
- [[exchanges/global-dex-major-five-comparison|global DEX 主要 5 社比較]]
- [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]]
- [[exchanges/global-perp-dex-five-comparison|global perp DEX 5 comparison]]
- [[exchanges/global-perp-dex-competitive-deep-dive-matrix|global perp DEX competitive deep dive matrix]]
- [[exchanges/native-dex-flip-incumbent-pattern|native DEX flip incumbent pattern]]
- [[exchanges/dex-jito-solana|Jito Solana]]
- [[exchanges/dex-raydium-solana|Raydium Solana]]
- [[exchanges/dex-orca-solana|Orca Solana]]
- [[exchanges/dex-pendle|Pendle]]
- [[exchanges/amm-design-evolution|AMM design evolution]]
- [[exchanges/global-cex-top10-comparison|global CEX top 10 比較]]
- [[exchanges/cex-api-sdk-ecosystem-comparison|CEX API SDK ecosystem comparison]]
- [[exchanges/fsa-vasp-registration-system|FSA VASP registration system]]
- [[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP regime overview]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|global VASP regulatory matrix]]
- [[systems/mev-flashbots-suave-order-flow-auction|MEV Flashbots Suave order-flow auction]]
- [[systems/cross-chain-bridge-eight-pole-comparison|cross-chain bridge eight-pole comparison]]
- [[systems/chain-abstraction-pattern-overview|chain abstraction pattern overview]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]]
- [[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption 2026]]
<!-- /wiki-links:managed -->

## Sources

- 1inch · https://1inch.io/
- 0x Protocol · https://0x.org/
- Matcha (0x consumer UI) · https://matcha.xyz/
- CoW Protocol · https://cow.fi/
- Jupiter (Solana) · https://jup.ag/
- OpenOcean · https://openocean.finance/
- ParaSwap · https://www.paraswap.io/
- KyberSwap · https://kyberswap.com/
- OKX Web3 DEX · https://www.okx.com/web3/dex
- DefiLlama aggregators dashboard · https://defillama.com/aggregators
- Dune Analytics dashboards · https://dune.com/
