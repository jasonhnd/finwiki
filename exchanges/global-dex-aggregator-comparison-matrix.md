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
last_updated: 2026-05-25
last_tended: 2026-05-25
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

# グローバル DEX Aggregator 比較マトリックス · 8 大 Aggregator 横断対照

## TL;DR

- 8 大 DEX aggregator 在 2026-Q2 的 **chain coverage · routing model · MEV protection · gas relay · daily volume · fee model · partner integration · governance token** 八维对照
- **Routing model 三大象限**: **on-chain pathfinder**(1inch · ParaSwap · KyberSwap · OpenOcean · OKX DEX)· **RFQ (Request-For-Quote / market maker quote)**(0x Protocol · Matcha · OKX DEX 含 RFQ)· **batch auction**(CowSwap / CoW Protocol)— Jupiter 是 Solana ecosystem 独有 SVM aggregator
- **Chain coverage 分化**: EVM-heavy(1inch · 0x · CowSwap · ParaSwap · KyberSwap · OpenOcean · OKX DEX)vs Solana-only(Jupiter)· 没有真正 multi-VM aggregator(OpenOcean 是少数同时覆盖 EVM + Solana 但 Solana 路径多走 Jupiter sub-routing)
- **MEV protection 三大机制**:**CoW Protocol 批量拍卖 + uniform clearing price**(原生消除 MEV)· **1inch Fusion / 0x Settler intent-based + signed quote**(MEV mostly 取消)· **flashbots private mempool** wrapper(部分 aggregator 集成)— 而 Jupiter 的 Solana 上 MEV 由 Jito tip 模型缓和
- **Daily volume**(2026-Q2 估算): 1inch ~$1.5-2B · Jupiter ~$1-2B(Solana 70%+ routing 走它)· 0x/Matcha ~$0.8-1.2B · CowSwap ~$0.4-0.6B · KyberSwap / OKX DEX ~$0.3-0.5B · ParaSwap / OpenOcean ~$0.2-0.4B 各
- **Governance token**: 1INCH · ZRX · COW · JUP · KNC · OKB(OKX 本身 token)· PSP(2024 launched ParaSwap)· OpenOcean OOE · 各自治理 model 与 fee distribution 差异显著
- 路由:[[exchanges/global-dex-major-five-comparison|global DEX 5 强]](DEX 比较)· [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX]](Solana 6 层)· 本矩阵专注 8 aggregator 横断

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-dex-major-five-comparison|global DEX 主要 5 社比較]] for the underlying DEX pool layer, [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]] for the Solana SVM aggregator/DEX stack, [[exchanges/global-perp-dex-five-comparison|global perp DEX 5 comparison]] for the perp-only segment, and [[exchanges/native-dex-flip-incumbent-pattern|native DEX flip incumbent pattern]] for chain-specific DEX dynamics. For peer Solana DEX deep dives see [[exchanges/dex-jito-solana|Jito Solana]] · [[exchanges/dex-raydium-solana|Raydium]] · [[exchanges/dex-orca-solana|Orca]] · [[exchanges/dex-pendle|Pendle]]. For the AMM evolutionary tree see [[exchanges/amm-design-evolution|AMM design evolution]] and [[exchanges/vetoken-host-protocol-flywheel|veToken host protocol flywheel]]. For MEV / order-flow architectural context see [[systems/mev-flashbots-suave-order-flow-auction|MEV Flashbots Suave order-flow auction]]. For broader CEX 競争 framing see [[exchanges/global-cex-top10-comparison|global CEX top 10 比較]] and [[exchanges/cex-api-sdk-ecosystem-comparison|CEX API SDK ecosystem]]. For regulatory framing see [[exchanges/fsa-vasp-registration-system|FSA VASP registration]] · [[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP]] · [[exchanges/global-vasp-regulatory-comparison-matrix|global VASP regulatory matrix]].

## なぜこのマトリックスが必要か

DEX aggregator は 2020-2021 の単純 pathfinder から 2024-2026 の **intent-based routing + MEV protection + cross-chain swap** へ進化した。Aggregator は **routing model 設計** で大きく分化しており、ユーザーが「best price」を得る経路が aggregator ごとに根本的に異なる。

しかし aggregator の比較情報は分散している — 1inch 公式は自社 RFQ + Fusion を強調し、CoW Protocol は batch auction の MEV 撲滅を強調し、Jupiter は Solana の支配率を強調する。マトリックスの価値は **同一基準で 8 aggregator を 8 維度横断** することで、トレーダー / 取引所統合パートナー / 機関ルーティング選定が「自分のユースケースに最適な aggregator」を選べるようにすることだ。

注意: aggregator は基礎 DEX(Uniswap / Curve / Balancer / Solana Raydium / Orca 等)流動性プールを上に乗っているため、aggregator 競争は「自社 DEX を持たない pure routing layer」のメタゲーム。CowSwap (CoW Protocol) と 1inch Fusion は自社 solver / market maker ネットワークを抱える点で例外的に「中間レイヤー以上」を取りに行っている。

## Per-aggregator sections

### 1inch (1INCH · v6 + Fusion)

**Routing model**: **On-chain Pathfinder + Fusion intent layer 二層**。Pathfinder アルゴリズムが流動性を全 DEX (Uniswap v2/v3/v4 + Curve + Balancer + Sushiswap + 100+ AMM)から経路探索 · gas + slippage 最適化。**Fusion** は 2023 launched intent-based 拍卖層:ユーザーが signed order 提出 · resolver(MEV searcher / market maker)が競争入札 · 1inch 自体は order matching を仲介。

**Chain coverage**: **EVM-only**(Ethereum + Arbitrum + Optimism + Polygon + BNB Chain + Base + Avalanche + zkSync Era + 等 11+ chain)。Solana / Aptos / Sui 不在(意図的 EVM-first)。

**MEV protection mechanism**: Fusion intent-based 模式で resolver が swap を実行する際 MEV を kept minimal(resolver competition で MEV value が user に refund される動機)· classic pathfinder 模式は MEV exposed。Optional flashbots integration あり。

**Gas relayer support**: Fusion 模式では resolver が gas を pay · user は gasless。Pathfinder 模式は user 自前 gas。

**Daily volume**: ~$1.5-2B 日次(2026-Q2 推定 · DefiLlama aggregators 板)。**EVM aggregator のリーダー** 位置。

**Fee model**: Pathfinder は no fee(LP fee のみ)· Fusion resolver から手数料(small spread)· Partner integration 経由は referral fee 設定可能。

**Partner integrations**: MetaMask Swaps 経由(MetaMask は 1inch を default routing provider の 1 つに採用)· Coinbase Wallet · TrustWallet 等多数。

**Governance token**: **1INCH**(2020 launched · veToken model 2022 移行 · veINCH 投票で fee distribution + resolver whitelist 決定)。

### 0x Protocol / Matcha (ZRX · Settler · RFQ)

**Routing model**: **RFQ-first hybrid**。0x Protocol は **professional market maker(Wintermute · GSR · Jane Street ふう)から signed quote** を取得 · 同時に on-chain liquidity を比較 · ベストを選択。Settler(2024 launched)は MEV-resistant smart router 実装。Matcha は 0x Protocol を消費者向けに wrap した UI。

**Chain coverage**: **EVM 多 chain**(Ethereum + Arbitrum + Optimism + Polygon + Base + BNB Chain + Avalanche + 等 9+)。

**MEV protection mechanism**: RFQ quote は private signed · MEV searcher が前置 sandwich できない(maker が price commit する瞬間に execute)。Settler は permit2 + smart router で classical AMM swap も protect。

**Gas relayer support**: 0x API 経由は user が gas pay · 一部 partner(Coinbase Wallet 等)は meta-transaction で gasless support。

**Daily volume**: ~$0.8-1.2B(Matcha + 0x API 経由全体)。professional market maker liquidity の比率が他 aggregator より高い。

**Fee model**: 0.15% protocol fee 標準(2024-2025 段階的導入)· partner referral fee 設定可。

**Partner integrations**: **Coinbase Wallet swap** · **MetaMask Swaps(co-provider)** · **Robinhood crypto swap backend**(2024 announced)· Brave Wallet 等。enterprise 統合最も多い aggregator の 1 つ。

**Governance token**: **ZRX**(2017 launched · ZRX staking + governance · 2024 fee distribution discussion 進行中)。

### CowSwap / CoW Protocol (COW · Batch Auction)

**Routing model**: **Batch auction with uniform clearing price**。ユーザーは intent(sell X for at least Y)を submit · ~12 秒の batch window 中の全 order が CoW (Coincidence of Wants) で matching · 残りは外部 AMM/RFQ で solver が settle。**Uniform clearing price** で同一 token pair の全 order が同価格で成立 — MEV (sandwich + frontrunning) が構造的に成立しない。

**Chain coverage**: **EVM**(Ethereum mainnet + Gnosis Chain + Arbitrum + Base · 2026-Q2 時点)。Multi-chain 拡張は他 aggregator より保守的。

**MEV protection mechanism**: **構造的 MEV 不在** — batch auction model で order が間個に execute されないため sandwich 攻撃が物理的に成立しない。Solver competition で MEV value が user surplus に変換。

**Gas relayer support**: **完全 gasless** — solver が gas を負担(swap output から differ)· user wallet は signature のみ。

**Daily volume**: ~$0.4-0.6B(2026-Q2)。volume は他 aggregator より小さいが、**transaction size が大きい**(機関 + 大口 retail が MEV-protected swap を求めて来る)。

**Fee model**: 0.1-0.5% solver fee(user surplus から charge · 透明)· CowDAO fee switch 2024 enable で COW staker に reward。

**Partner integrations**: **Safe (Gnosis Safe) native swap integration**(機関 multisig が CoW で swap)· Argent Wallet · Rabby Wallet · MEV-protection 需要が高い user base に強い。

**Governance token**: **COW**(2023 launched · COW staking で fee receive + governance)。

### Jupiter (JUP · Solana only)

**Routing model**: **SVM (Sealevel) native aggregator** — Solana の Raydium / Orca / Meteora / Phoenix / Lifinity / Saber / 等 25+ DEX を統合 routing。Jupiter v6 で transaction simulation + multi-hop optimization + just-in-time liquidity 統合。

**Chain coverage**: **Solana 単独**(意図的)。Cross-chain は Jupiter Bridge(Wormhole 経由)で別 product。

**MEV protection mechanism**: Solana は Ethereum と異なる MEV 環境 — **Jito Bundle**(参見 [[exchanges/dex-jito-solana|Jito Solana]])に Jupiter swap を入れることで sandwich 攻撃を Jito validator tip で抑制。Jupiter は **Slippage Bot Protection** で価格大きく動いた場合に transaction を reject。

**Gas relayer support**: Solana の gas fee は $0.001 オーダーで非常に低 — gasless 必要性が EVM より低い。Jupiter は user が自前 SOL 持つ前提。

**Daily volume**: **~$1-2B(Solana DEX 全体取引量の 70%+ が Jupiter 経由 routing)**。Solana ecosystem の事実上の入口。

**Fee model**: 0% protocol fee(LP fee + Jito tip のみ)· Partner integration 経由は referral 設定可。

**Partner integrations**: Phantom Wallet · Solflare Wallet · Backpack(Solana wallet 全 ecosystem の default swap)· Jupiter LST (Liquid Staking Token) と Jupiter Perp も extension。

**Governance token**: **JUP**(2024-01 launched · Solana 史上最大級の retroactive airdrop · JUP staking + governance)。

### OpenOcean (OOE · multi-VM)

**Routing model**: **Multi-VM pathfinder** — EVM aggregator(1inch ふう pathfinder)+ Solana sub-routing(Jupiter API を内部 call も)+ Aptos / Sui の Move VM AMM もカバー。**唯一の真の multi-VM aggregator**。

**Chain coverage**: **20+ chain across EVM + Solana + Aptos + Sui + TON**。chain coverage 数は最多。

**MEV protection mechanism**: Flashbots Protect integration(EVM)· Jito Bundle integration(Solana)· protocol level の MEV 撲滅は無いが各 chain の MEV mitigation を pass-through。

**Gas relayer support**: Chain-specific — EVM では partial meta-transaction · Solana では gas はそもそも低い。

**Daily volume**: ~$0.2-0.4B(2026-Q2)。chain coverage は広いが各 chain の volume は他 EVM-specialist より小さい。

**Fee model**: 0.1% protocol fee · partner referral fee。

**Partner integrations**: 各 chain の wallet(MetaMask · Phantom · Pontem · Suiet 等)に多数統合 · cross-chain swap 機能(LayerZero / Wormhole 経由)が差別化点。

**Governance token**: **OOE**(2021 launched · staking + governance)。

### ParaSwap (PSP · pathfinder + RFQ hybrid)

**Routing model**: **Pathfinder + RFQ hybrid** — 自社 ParaSwapPool(market maker RFQ 提供)+ 外部 AMM pathfinder · Delta(2024 launched intent-based layer)で gasless intent swap。

**Chain coverage**: **EVM**(Ethereum + Arbitrum + Optimism + Polygon + Base + Avalanche + BNB Chain + zkEVM 等 11+ chain)。

**MEV protection mechanism**: Delta intent layer で MEV mitigation · classical pathfinder mode は MEV exposed · 1inch / CowSwap より MEV 撲滅は弱め。

**Gas relayer support**: Delta は gasless · classical pathfinder は user gas。

**Daily volume**: ~$0.2-0.4B(2026-Q2)。1inch / 0x の影に隠れて市場 share 減少傾向。

**Fee model**: Free pathfinder · Delta から protocol fee · partner referral fee。

**Partner integrations**: Argent · Ledger Live · Zerion 等 retail wallet 統合。

**Governance token**: **PSP**(2021 launched · 2024 fee distribution model upgrade · sePSP staking)。

### KyberSwap (KNC · Aggregator + own AMM)

**Routing model**: **KyberSwap Aggregator(pathfinder)+ Kyber Elastic(自社 concentrated liquidity AMM)双線**。Aggregator は外部 AMM + 自社 Elastic 両方を route。

**Chain coverage**: **15+ chain**(Ethereum + Arbitrum + Optimism + Polygon + Base + BNB Chain + Avalanche + Linea + zkSync + Mantle + 等)。

**MEV protection mechanism**: 2023 hack 後にコア router 大幅 audit · MEV protection layer は組み込まれていない · ユーザーは MEV exposed。

**Gas relayer support**: Limited — user 自前 gas 前提。

**Daily volume**: ~$0.3-0.5B(2026-Q2)。

**Fee model**: 0% aggregator fee · Kyber Elastic LP fee(swap fee from pool)。

**Partner integrations**: Krystal Wallet · MetaMask 等。Vietnam / SEA market 強い。

**Governance token**: **KNC**(2017 launched · 2022 migration · KNC staking + governance · KyberDAO)。

**Note**: 2023-11 に KyberSwap Elastic が **$48M exploit** を受けた歴史あり(complex AMM tick liquidity vulnerability)· 修復後も TVL 復活していない。Aggregator は continues しているが、自社 Elastic は事実上 wind-down。詳細は [[exchanges/global-dex-major-five-comparison|global DEX 5 強]] と peer に参考。

### OKX DEX Aggregator (OKB · 中央化 backed)

**Routing model**: **On-chain pathfinder + RFQ hybrid** — OKX(CEX)が backed する RFQ liquidity を統合 · 外部 AMM + OKX Spot order book hybrid。OKX Wallet 内蔵 default swap。

**Chain coverage**: **20+ chain across EVM + Solana + TON + Aptos + Sui**。CEX backed の優位で chain expansion 早い。

**MEV protection mechanism**: Partial — OKX RFQ liquidity 経由は MEV-resistant · external AMM 経由は MEV exposed。

**Gas relayer support**: OKX Wallet 経由は OKX Pay 統合で partial gasless。

**Daily volume**: ~$0.3-0.5B(2026-Q2)。CEX backed の brand recognition と OKX Wallet user base で着実に成長中。

**Fee model**: ~0.1% protocol fee · OKX ecosystem 内連携で減免可能。

**Partner integrations**: OKX Wallet(default)· OKX CEX へのシームレス連携(on-chain swap → CEX deposit)。

**Governance token**: **OKB**(OKX 全体の token · 取引手数料 discount + governance · DEX 専用 token なし)。

## Big comparison matrix table

**8 aggregator × 8 維度対照**(2026-Q2 状態):

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
- 横方向: 1 aggregator × 8 維度 profile · 縦方向: 同一維度 × 8 aggregator 差異
- **Routing model 差異**: Pathfinder(1inch · ParaSwap · KyberSwap · OpenOcean)vs RFQ-heavy(0x · OKX)vs Batch auction(CowSwap)vs Solana SVM native(Jupiter)。**user experience が根本的に異なる** — RFQ は瞬時 quote · pathfinder は real-time on-chain calc · batch auction は ~12s wait for matching
- **MEV protection 強度ランキング**: **CowSwap (構造的) > 1inch Fusion (intent) > 0x (RFQ private quote) > OKX RFQ partial > 残り (exposed or minimal)**
- **Chain coverage**: **OpenOcean + OKX DEX が多 chain top** · **1inch / 0x / CowSwap / ParaSwap / KyberSwap は EVM-only** · **Jupiter は Solana only**。Multi-VM aggregator はまだ少ない
- **Governance token + fee distribution model**: COW · ZRX · 1INCH は fee switch 進行中 / enabled · JUP / OOE / PSP / KNC は token utility が governance 中心 · OKB は CEX-wide token

## Composition / use case patterns

**Pattern A — "Retail EVM trader, MetaMask default"**:
- MetaMask Swaps が裏で 1inch + 0x co-provider を call · ユーザーは aggregator 選択意識せず最良 quote 受け取り
- MEV protection は flashbots opt-in 程度 · 中規模 retail 取引(< $10K)で十分

**Pattern B — "Solana memecoin / spot trader"**:
- Phantom / Solflare / Backpack のいずれかから Jupiter 経由でほぼ全 Solana DEX が一画面で routing · 別 aggregator 選ぶ理由ない
- Jito Bundle で MEV mitigation · slippage protection で memecoin volatility 吸収

**Pattern C — "Large block / 機関 trader"**:
- **CoW Protocol を default 選択** — batch auction + uniform price で MEV-free + price improvement via solver competition + Safe multisig native integration
- 代替: 0x RFQ で professional market maker quote 取得 · Wintermute / GSR との大口取引で執行

**Pattern D — "Cross-chain swap"**:
- OpenOcean(multi-VM)or OKX DEX(EVM + Solana + TON 等)で chain coverage が広い aggregator 選ぶ
- LayerZero / Wormhole 経由の cross-chain swap は aggregator 内に組み込まれる
- 別 path: dedicated cross-chain bridge ([[systems/cross-chain-bridge-eight-pole-comparison|see cross-chain bridge eight-pole comparison]]) + 同 chain aggregator の組み合わせ

**Pattern E — "CEX-integrated user"**:
- OKX Wallet user は OKX DEX で on-chain swap → seamless に OKX CEX へ deposit · or 逆方向
- Coinbase Wallet user は 0x backed swap → seamless に Coinbase exchange 連携
- CEX backed aggregator の最大 wedge は **on/off-ramp 摩擦の最小化**

**Pattern F — "Developer / dApp embedding swap"**:
- 0x API(swap quote API)が enterprise 統合最多 — Coinbase / Robinhood / 等 CEX backend が 0x quote API を消費
- 1inch API は wallet integration 多 · CowSwap API は smart contract / multisig protocol 統合多

## Boundary cases / future trajectory

**Intent-based routing 普及**:
- 1inch Fusion(2023)· CowSwap(2021〜)· ParaSwap Delta(2024)が intent-based / solver competition model に shift
- Intent は user が signed order を submit · solver が execute する model — pathfinder algorithmic 競争から **solver / market maker 競争** に進化
- 2026 trend: 全 major EVM aggregator が intent layer 持つ · classical pathfinder は intent unavailable な long-tail token / small trade 用 fallback

**Cross-chain aggregation 統合**:
- OpenOcean / OKX DEX / Jupiter Bridge 等が "cross-chain swap" を一画面提供
- 裏は LayerZero / Wormhole / Hyperlane / CCTP V2 等 cross-chain protocol ([[systems/cross-chain-bridge-eight-pole-comparison|cross-chain bridge eight-pole comparison]]) を pass-through
- Chain abstraction pattern ([[systems/chain-abstraction-pattern-overview|chain abstraction overview]]) が aggregator UX を更に統合 — user は chain 意識なく swap

**MEV protection 標準化圧力**:
- 2024-2025 EU MiCA + US SEC discussion で "retail MEV exposure" 規制議論
- Robinhood crypto / Coinbase Wallet は 0x backed swap で partial MEV-protect · 機関 retail flow に MEV protection が default 要求になる方向
- CoW Protocol model が **構造的 MEV 撲滅** で唯一答え · 2027-2028 で他 aggregator 模倣の可能性

**RFQ vs AMM の境界曖昧化**:
- 0x RFQ は professional market maker quote が AMM-style 流動性 deep を上回る大口 token pair で勝つ
- Uniswap v4 hook で AMM が "RFQ-style maker quote" を accept できるようになる(2025-2026 deploy)
- 結果: aggregator は AMM と RFQ を transparent に混合 routing — user 視点で違い見えなくなる

**OKX / Coinbase 等 CEX backed aggregator の脅威**:
- 中央 backed aggregator(OKX DEX · 0x backed swap on Coinbase)は **on/off-ramp + KYC + 機関流動性** の wedge で pure DeFi aggregator(1inch / CowSwap)を挑戦
- 規制側面で CEX backed aggregator は MiCA / FSA / SEC compliance に対応 · 機関 retail flow を吸収可能
- 2027+: CEX backed aggregator が retail volume の 50%+ を占有する shift 可能 · pure DeFi aggregator は **MEV-resistance + transparency** 提供で差別化必要

**Jupiter の Solana 支配率と非 Solana 拡張**:
- Jupiter は Solana 70%+ DEX routing 占有 · 事実上 Solana ecosystem 入口
- 2024 JUP airdrop で community ownership + governance · solana DAO governance influence 拡大
- 非 Solana 拡張(Jupiter Bridge Wormhole 経由)は実験的段階 · Solana focus 維持の戦略

**Aggregator 自身の MEV extraction 競争**:
- "MEV 撲滅" を謳いながら solver / resolver layer で MEV 価値を kept / redistribute するモデル(CowSwap · 1inch Fusion)が普及
- Solver の MEV revenue から COW staker · 1INCH staker に分配する fee switch 進行中
- 問題:**user に full MEV refund** vs **token holder に fee distribution** のバランス · DAO governance で議論

**Governance token + fee switch enable trend**:
- 2024-2026 で COW · ZRX · 1INCH 等が fee switch enable / 提案進行中
- アンチ-token mode の Jupiter (JUP) や Robinhood backed 0x backed swap も collected fee の destination が議論対象
- SEC / MiCA の token fee distribution への規制不確実性が逆風

**Long-tail token coverage 競争**:
- aggregator が **どれだけ多くの token / pool を route できるか** が pathfinder model の核心競争
- Memecoin / niche token に対応する pathfinder 速度 + AMM coverage(Curve / Balancer / KyberSwap Elastic 等の niche AMM 統合)が重要
- Jupiter は Solana memecoin 経済の中核 · 1inch / 0x は EVM long-tail 強い

**Embedded wallet × Agentic swap**:
- Privy / Coinbase CDP / Crossmint 等の embedded wallet ([[agent-economy/privy-embedded-wallet-overview|see Privy overview]])が aggregator backend を call
- AI agent ([[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption]])が x402 経由 paid API として aggregator quote を取得 · MEV-protected swap を実行
- 2026-2027 trend: agent が CowSwap / 1inch Fusion を default route として消費 · MEV protection が agentic commerce で必須要件化

**規制 wildcard — Aggregator は CASP/VASP に該当するか?**:
- EU MiCA は aggregator(自己発注なし · routing のみ)を CASP 義務対象とするかは grey area
- 日本 FSA は aggregator 自体を VASP 登録不要(non-custodial routing)としているが、CEX backed aggregator(OKX DEX 等)は別議論
- 2026-2027 EU MiCA TA(Technical Advice)で aggregator categorization 明確化見込み · 規制リスク変動の主要因

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
