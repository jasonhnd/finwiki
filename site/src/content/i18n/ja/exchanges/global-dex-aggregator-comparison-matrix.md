---
source: exchanges/global-dex-aggregator-comparison-matrix
source_hash: 6dcba8b3b6f84291
lang: ja
status: machine
fidelity: ok
title: "グローバル DEX Aggregator 比較マトリックス · 8大 Aggregator 横断対照"
translated_at: 2026-06-02T12:19:04.253Z
---

# グローバル DEX Aggregator 比較マトリックス · 8大 Aggregator 横断対照

## 要約

- 8大DEX aggregatorを2026-Q2時点で **chain coverage · ルーティング model · MEV 保護 · gas relay · daily volume · fee model · partner integration · ガバナンス トークン** の8軸で対照
- **ルーティングモデル 3大象限**:**オンチェーン パスファインダー**(1inch · ParaSwap · KyberSwap · OpenOcean · OKX DEX)· **RFQ (Request-For-Quote / マーケットメーカー quote)**(0x Protocol · Matcha · OKX DEXもRFQを含む)· **batch auction**(CowSwap / CoW Protocol)— JupiterはSolana ecosystem専用のSVM aggregator
- **対応チェーン範囲 の分化**:EVM-heavy(1inch · 0x · CowSwap · ParaSwap · KyberSwap · OpenOcean · OKX DEX)vs Solana 専用(Jupiter)· 真のマルチ VM aggregatorはまだ存在せず(OpenOceanはEVM + Solanaを同時にカバーする数少ない例だが、Solana経路は実質Jupiter sub-ルーティングに乗る)
- **MEV 保護 の3大メカニズム**:**CoW Protocol のバッチオークション + uniform clearing price**(構造的にMEVを消す)· **1inch Fusion / 0x Settler の intent-based + signed quote**(MEVをほぼキャンセル)· **flashbots private メンプール** ラッパ(一部aggregatorが統合)— JupiterのSolana上のMEVはJito tipモデルで緩和
- **日次出来高**(2026-Q2推定):1inch ~$1.5-2B · Jupiter ~$1-2B(Solanaの70%+のルーティングが経由)· 0x/Matcha ~$0.8-1.2B · CowSwap ~$0.4-0.6B · KyberSwap / OKX DEX ~$0.3-0.5B · ParaSwap / OpenOcean それぞれ ~$0.2-0.4B
- **ガバナンストークン**:1INCH · ZRX · COW · JUP · KNC · OKB(OKX本体のトークン)· PSP(2024 ローンチのParaSwap)· OpenOcean OOE · 各々の治理モデルと手数料分配は大きく異なる
- 関連項目:[[exchanges/global-dex-major-five-comparison|global DEX 5強]](DEX比較)· [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX]](Solana 6層)· 本マトリックスは8 aggregator横断に特化

## ウィキ上の位置づけ

この項目は [[exchanges/INDEX|exchanges index]] の下位に位置づけられる。基礎となる DEX プール層は [[exchanges/global-dex-major-five-comparison|global DEX 主要 5 社比較]]、Solana SVM の aggregator / DEX スタックは [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]]、perp 専業セグメントは [[exchanges/global-perp-dex-five-comparison|global perp DEX 5 comparison]]、チェーン別 DEX ダイナミクスは [[exchanges/native-dex-flip-incumbent-pattern|native DEX flip incumbent pattern]] と対照して読む。同業 Solana DEX の詳細分析は [[exchanges/dex-jito-solana|Jito Solana]] · [[exchanges/dex-raydium-solana|Raydium]] · [[exchanges/dex-orca-solana|Orca]] · [[exchanges/dex-pendle|Pendle]]、AMM の進化系統は [[exchanges/amm-design-evolution|AMM design evolution]] と [[exchanges/vetoken-host-protocol-flywheel|veToken host protocol flywheel]]、MEV / オーダーフローのアーキテクチャ文脈は [[systems/mev-flashbots-suave-order-flow-auction|MEV Flashbots Suave order-flow auction]]、より広い CEX 競争の見取り図は [[exchanges/global-cex-top10-comparison|global CEX top 10 比較]] と [[exchanges/cex-api-sdk-ecosystem-comparison|CEX API SDK ecosystem]]、規制上の位置づけは [[exchanges/fsa-vasp-registration-system|FSA VASP registration]] · [[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP]] · [[exchanges/global-vasp-regulatory-comparison-matrix|global VASP regulatory matrix]] を参照。

## なぜこのマトリックスが必要か

DEX aggregatorは2020-2021年の単純パスファインダーから2024-2026年に **intent-based ルーティング + MEV 保護 + クロスチェーン swap** へ進化した。aggregatorは **ルーティング modelの設計** で大きく分化しており、ユーザーが「最良価格」を得る経路がaggregatorごとに根本的に異なる。

しかしaggregatorの比較情報は分散している — 1inch公式は自社RFQ + Fusionを強調し、CoW Protocolはbatch auctionによるMEV撲滅を強調し、JupiterはSolanaでの支配率を強調する。マトリックスの価値は **同一基準で8 aggregatorを8軸横断で比較** することにあり、トレーダー / 取引所統合パートナー / 機関のルーティング選定が「自分のユースケースに最適なaggregator」を選べるようにする点にある。

注意:aggregatorは基礎DEX(Uniswap / Curve / Balancer / Solana Raydium / Orca等)の流動性プールの上に乗っているため、aggregator競争は「自社DEXを持たない pure ルーティング layer」のメタゲームとなる。CowSwap (CoW Protocol)と1inch Fusionは自社ソルバー / マーケットメーカーネットワークを抱える点で例外的に「中間レイヤー以上」を取りに行っている。

## Aggregator 別セクション

### 1inch (1INCH · v6 + Fusion)

**ルーティングモデル**:**On-chain Pathfinder + Fusion intent layer の二層**。Pathfinderアルゴリズムが流動性を全DEX(Uniswap v2/v3/v4 + Curve + Balancer + Sushiswap + 100+ AMM)から経路探索し、gas + slippageを最適化。**Fusion** は2023年にローンチされたintent-based入札層で、ユーザーがsigned orderを提出し、reソルバー(MEV searcher / マーケットメーカー)が競争入札、1inch自体はorder matchingを仲介する。

**対応チェーン範囲**:**EVM 専用**(Ethereum + Arbitrum + Optimism + Polygon + BNB Chain + Base + Avalanche + zkSync Era + 等11+ chain)。Solana / Aptos / Suiは対象外(意図的にEVM-first)。

**MEV 保護メカニズム**:Fusion intent-basedモードではreソルバーがswap実行時のMEVをkept minimal(reソルバー競争でMEV valueがユーザーにrefundされるインセンティブ)· classical パスファインダーモードはMEV exposed。Optional flashbots integrationあり。

**Gas リレイヤー対応**:Fusionモードではreソルバーがgasを支払い、ユーザーはガスレス。Pathfinderモードはユーザー自前gas。

**日次出来高**:~$1.5-2B/日(2026-Q2推定 · DefiLlama aggregators板)。**EVM aggregatorのリーダー** ポジション。

**手数料モデル**:Pathfinderはno fee(LP feeのみ)· Fusionではreソルバーから手数料(small spread)· Partner integration経由はreferral fee設定可能。

**パートナー連携**:MetaMask Swaps経由(MetaMaskが1inchを標準 ルーティング providerの1つに採用)· Coinbase Wallet · TrustWallet等多数。

**ガバナンストークン**:**1INCH**(2020年ローンチ · veTokenモデルに2022年移行 · veINCH投票で手数料分配 + reソルバー whitelistを決定)。

### 0x Protocol / Matcha (ZRX · Settler · RFQ)

**ルーティングモデル**:**RFQ-first hybrid**。0x Protocolは **professional マーケットメーカー(Wintermute · GSR · Jane Street等)からsigned quote** を取得し、同時にオンチェーン liquidityも比較してベストを選択。Settler(2024年ローンチ)はMEV-resistant smart router実装。Matchaは0x Protocolをコンシューマ向けにラップしたUI。

**対応チェーン範囲**:**EVMマルチチェーン**(Ethereum + Arbitrum + Optimism + Polygon + Base + BNB Chain + Avalanche + 等9+)。

**MEV 保護メカニズム**:RFQ quoteはprivate signed · MEV searcherが前置sandwichできない(makerがprice commitした瞬間にexecute)。Settlerはpermit2 + smart routerでclassical AMM swapも保護。

**Gas リレイヤー対応**:0x API経由はユーザーがgas支払い · 一部partner(Coinbase Wallet等)はmeta-transactionでガスレス支援。

**日次出来高**:~$0.8-1.2B(Matcha + 0x API経由の合計)。professional マーケットメーカー liquidityの比率が他のaggregatorより高い。

**手数料モデル**:0.15% protocol feeが標準(2024-2025段階的導入)· partner referral fee設定可能。

**パートナー連携**:**Coinbase Wallet swap** · **MetaMask Swaps(co-provider)** · **Robinhood crypto swap backend**(2024年発表)· Brave Wallet等。エンタープライズ統合が最も多いaggregatorの1つ。

**ガバナンストークン**:**ZRX**(2017年ローンチ · ZRX ステーキング + ガバナンス · 2024年に手数料分配議論進行中)。

### CowSwap / CoW Protocol (COW · Batch Auction)

**ルーティングモデル**:**Batch auction 均一清算価格付き**。ユーザーはintent(sell X for at least Y)を送信 · ~12秒のbatch window中の全orderがCoW (Coincidence of Wants)でマッチング · 残余はソルバーが外部AMM/RFQでsettleする。**Uniform clearing price** で同一トークン pairの全orderが同価格で成立するため、MEV(sandwich + frontrunning)が構造的に成立しない。

**対応チェーン範囲**:**EVM**(Ethereum mainnet + Gnosis Chain + Arbitrum + Base · 2026-Q2時点)。Multi-chain拡張は他aggregatorより保守的。

**MEV 保護メカニズム**:**構造的にMEV不在** — batch auctionモデルではorderが個別にexecuteされないためsandwich攻撃が物理的に成立しない。Solver競争でMEV valueがユーザー surplusに変換される。

**Gas リレイヤー対応**:**完全ガスレス** — ソルバーがgasを負担(swap outputから差し引き)· ユーザー ウォレットは署名のみ。

**日次出来高**:~$0.4-0.6B(2026-Q2)。出来高は他aggregatorより小さいが、**1取引あたりのサイズが大きい**(機関 + 大口リテールがMEV-protected swapを求めて来る)。

**手数料モデル**:0.1-0.5% ソルバー fee(ユーザー surplusからchargeする透明な方式)· CowDAO 手数料スイッチが2024年enableされCOW stakerにrewardを分配。

**パートナー連携**:**Safe (Gnosis Safe) native swap integration**(機関multisigがCoWでswapする)· Argent Wallet · Rabby Wallet · MEV-protection需要の高いユーザー baseに強い。

**ガバナンストークン**:**COW**(2023年ローンチ · COW ステーキングでfee受領 + ガバナンス)。

### Jupiter (JUP · Solana 専用)

**ルーティングモデル**:**SVM (Sealevel) native aggregator** — SolanaのRaydium / Orca / Meteora / Phoenix / Lifinity / Saber / 等25+ DEXを統合ルーティング。Jupiter v6でtransaction simulation + multi-hop optimization + just-in-time liquidity統合。

**対応チェーン範囲**:**Solana単独**(意図的)。Cross-chainはJupiter Bridge(Wormhole経由)で別product。

**MEV 保護メカニズム**:SolanaはEthereumと異なるMEV環境 — **Jito Bundle**(参照 [[exchanges/dex-jito-solana|Jito Solana]])にJupiter swapを入れることでsandwich攻撃をJito validator tipで抑制。Jupiterは **Slippage Bot Protection** で価格が大きく動いた場合にtransactionをrejectする。

**Gas リレイヤー対応**:Solanaのgas feeは$0.001オーダーで極めて低い — ガスレス必要性がEVMより低い。Jupiterはユーザーが自前SOLを保有する前提。

**日次出来高**:**~$1-2B(Solana DEX全体取引量の70%+がJupiter経由でルーティング)**。Solana ecosystemの事実上の入口。

**手数料モデル**:0% protocol fee(LP fee + Jito tipのみ)· Partner integration経由はreferral設定可能。

**パートナー連携**:Phantom Wallet · Solflare Wallet · Backpack(Solana ウォレットエコシステム全体の標準 swap)· Jupiter LST (Liquid Staking Token)とJupiter Perpも拡張。

**ガバナンストークン**:**JUP**(2024-01 ローンチ · Solana史上最大級のretroactive airdrop · JUP ステーキング + ガバナンス)。

### OpenOcean (OOE · マルチ VM)

**ルーティングモデル**:**Multi-VM パスファインダー** — EVM aggregator(1inch風のパスファインダー)+ Solana sub-ルーティング(Jupiter APIを内部callすることもある)+ Aptos / SuiのMove VM AMMもカバー。**唯一の真のマルチ VM aggregator**。

**対応チェーン範囲**:**EVM + Solana + Aptos + Sui + TONで20+ chain**。chain coverage数は最多。

**MEV 保護メカニズム**:Flashbots Protect integration(EVM)· Jito Bundle integration(Solana)· プロトコル層でのMEV撲滅は無いが、各chainのMEV mitigationをpass-throughする。

**Gas リレイヤー対応**:Chain-specific — EVMでは部分的meta-transaction · Solanaではgasがそもそも低い。

**日次出来高**:~$0.2-0.4B(2026-Q2)。chain coverageは広いが、各chainの出来高は他のEVM-specialistより小さい。

**手数料モデル**:0.1% protocol fee · partner referral fee。

**パートナー連携**:各chainのウォレット(MetaMask · Phantom · Pontem · Suiet等)に多数統合 · クロスチェーン swap機能(LayerZero / Wormhole経由)が差別化点。

**ガバナンストークン**:**OOE**(2021年ローンチ · ステーキング + ガバナンス)。

### ParaSwap (PSP · パスファインダー + RFQ hybrid)

**ルーティングモデル**:**Pathfinder + RFQ hybrid** — 自社ParaSwapPool(マーケットメーカー RFQを提供)+ 外部AMM パスファインダー · Delta(2024年ローンチのintent-based layer)でガスレス intent swap。

**対応チェーン範囲**:**EVM**(Ethereum + Arbitrum + Optimism + Polygon + Base + Avalanche + BNB Chain + zkEVM等11+ chain)。

**MEV 保護メカニズム**:Delta intent layerでMEV mitigation · classical パスファインダーモードはMEV exposed · 1inch / CowSwapと比較してMEV撲滅は弱め。

**Gas リレイヤー対応**:Deltaはガスレス · classical パスファインダーはユーザー gas。

**日次出来高**:~$0.2-0.4B(2026-Q2)。1inch / 0xの影に隠れ市場シェアは減少傾向。

**手数料モデル**:Free パスファインダー · Deltaからprotocol fee · partner referral fee。

**パートナー連携**:Argent · Ledger Live · Zerion等のリテール ウォレットに統合。

**ガバナンストークン**:**PSP**(2021年ローンチ · 2024年に手数料分配 model upgrade · sePSP ステーキング)。

### KyberSwap (KNC · Aggregator + own AMM)

**ルーティングモデル**:**KyberSwap Aggregator(パスファインダー)+ Kyber Elastic(自社concentrated liquidity AMM)のデュアル路線**。Aggregatorは外部AMM + 自社Elasticの両方をrouteする。

**対応チェーン範囲**:**15+ chain**(Ethereum + Arbitrum + Optimism + Polygon + Base + BNB Chain + Avalanche + Linea + zkSync + Mantle + 等)。

**MEV 保護メカニズム**:2023年のhack後にコア routerを大幅に再監査 · MEV 保護 layerは組み込まれていない · ユーザーはMEV exposed。

**Gas リレイヤー対応**:Limited — ユーザー自前gas前提。

**日次出来高**:~$0.3-0.5B(2026-Q2)。

**手数料モデル**:0% aggregator fee · Kyber Elastic LP fee(swap fee from pool)。

**パートナー連携**:Krystal Wallet · MetaMask等。Vietnam / SEA市場で強い。

**ガバナンストークン**:**KNC**(2017年ローンチ · 2022年migration · KNC ステーキング + ガバナンス · KyberDAO)。

**Note**:2023-11にKyberSwap Elasticが **$48M exploit** を受けた歴史あり(complex AMM tick liquidity vulnerability)· 修復後もTVLは回復していない。Aggregatorは継続しているが、自社Elasticは事実上wind-down状態。詳細は [[exchanges/global-dex-major-five-comparison|global DEX 5強]] とpeer参照。

### OKX DEX Aggregator (OKB · 中央化バックド)

**ルーティングモデル**:**On-chain パスファインダー + RFQ hybrid** — OKX(CEX)がbackedするRFQ liquidityを統合 · 外部AMM + OKX Spot order bookのhybrid。OKX Wallet内蔵の標準 swap。

**対応チェーン範囲**:**EVM + Solana + TON + Aptos + Suiで20+ chain**。CEX 支援型の優位でchain expansionが早い。

**MEV 保護メカニズム**:Partial — OKX RFQ liquidity経由はMEV-resistant · external AMM経由はMEV exposed。

**Gas リレイヤー対応**:OKX Wallet経由はOKX Pay統合で部分的にガスレス。

**日次出来高**:~$0.3-0.5B(2026-Q2)。CEX 支援型のブランド認知度とOKX Walletユーザーベースで着実に成長中。

**手数料モデル**:~0.1% protocol fee · OKX ecosystem内連携で減免可能。

**パートナー連携**:OKX Wallet(標準)· OKX CEXへのシームレス連携(オンチェーン swap → CEX deposit)。

**ガバナンストークン**:**OKB**(OKX全体のトークン · 取引手数料discount + ガバナンス · DEX専用トークンは無い)。

## 大型比較マトリックス表

**8 aggregator × 8軸対照**(2026-Q2状態):

| Aggregator | ルーティングモデル | 対応チェーン範囲 | MEV 保護 | Gas リレイヤー | 日次出来高 (推定) | 手数料モデル | パートナー連携 | ガバナンストークン |
|---|---|---|---|---|---|---|---|---|
| **1inch** | Pathfinder + Fusion intent | **EVM 11+** | Fusion intent (reソルバー competition) + Flashbots opt-in | Fusion: ソルバー pays · Pathfinder: ユーザー | **~$1.5-2B** | Free パスファインダー · Fusion small spread | MetaMask Swaps 標準 · Coinbase Wallet · Trust | **1INCH** (veINCH) |
| **0x / Matcha** | RFQ-first hybrid (Settler smart router) | EVM 9+ | RFQ signed quote (private) + Settler MEV-resist | Partial meta-tx via partners | ~$0.8-1.2B | 0.15% protocol fee | **Coinbase Wallet · MetaMask co-provider · Robinhood backend** | **ZRX** (ステーキング) |
| **CowSwap / CoW Protocol** | **Batch auction + uniform clearing price** | EVM (Eth + Gnosis + Arb + Base) | **Structurally MEV-free** (batch CoW + uniform price) | **Fully ガスレス** (ソルバー pays) | ~$0.4-0.6B (high avg ticket) | 0.1-0.5% ソルバー fee · CowDAO 手数料スイッチ on | **Safe native swap** · Argent · Rabby | **COW** (ステーキング) |
| **Jupiter** | Solana SVM native aggregator (25+ Solana DEX) | **Solana 専用** | Jito Bundle integration + slippage bot protect | Low gas baseline (Solana ~$0.001) | **~$1-2B (70%+ Solana DEX ルーティング)** | 0% protocol fee | **Phantom · Solflare · Backpack** (all Solana ウォレット 標準) | **JUP** (2024 airdrop) |
| **OpenOcean** | Multi-VM パスファインダー (EVM + Solana + Aptos + Sui + TON) | **20+ chain across マルチ VM** | Pass-through (Flashbots EVM · Jito Solana) | Chain-specific partial | ~$0.2-0.4B | 0.1% protocol fee | MetaMask · Phantom · Pontem · Suiet | **OOE** (ステーキング) |
| **ParaSwap** | Pathfinder + RFQ + Delta intent layer | EVM 11+ | Delta intent partial · パスファインダー exposed | Delta ガスレス · パスファインダー ユーザー-pay | ~$0.2-0.4B | Free パスファインダー · Delta fee | Argent · Ledger Live · Zerion | **PSP** (sePSP) |
| **KyberSwap** | Aggregator + own Kyber Elastic AMM | EVM 15+ | None (post-2023 hack focus on safety not MEV) | Limited | ~$0.3-0.5B | 0% agg fee · Elastic LP fee | Krystal · MetaMask · SEA market | **KNC** (KyberDAO) |
| **OKX DEX** | On-chain パスファインダー + RFQ (CEX 支援型) | **20+ chain EVM + Solana + TON + Aptos + Sui** | Partial (RFQ MEV-resist · external AMM exposed) | Partial (OKX Pay ガスレス paths) | ~$0.3-0.5B | ~0.1% protocol fee · OKX ecosystem discount | **OKX Wallet 標準 · CEX seamless on/off ramp** | **OKB** (CEX-wide) |

**マトリックスの読み方**:
- 横方向:1 aggregator × 8軸でprofile化 · 縦方向:同一軸 × 8 aggregatorの差異を比較
- **ルーティングモデル差異**:Pathfinder(1inch · ParaSwap · KyberSwap · OpenOcean)vs RFQ-heavy(0x · OKX)vs Batch auction(CowSwap)vs Solana SVM native(Jupiter)。**ユーザー experienceが根本的に異なる** — RFQは瞬時にquote · パスファインダーはreal-time オンチェーン calc · batch auctionは ~12sのマッチング待ち
- **MEV 保護強度ランキング**:**CowSwap(構造的)> 1inch Fusion(intent)> 0x(RFQ private quote)> OKX RFQ partial > 残り(exposedまたはminimal)**
- **対応チェーン範囲**:**OpenOcean + OKX DEXがマルチチェーンtop** · **1inch / 0x / CowSwap / ParaSwap / KyberSwapはEVM 専用** · **JupiterはSolana 専用**。Multi-VM aggregatorはまだ少ない
- **ガバナンストークン + 手数料分配 model**:COW · ZRX · 1INCHは手数料スイッチ進行中 / enabled · JUP / OOE / PSP / KNCはトークン utilityがガバナンス中心 · OKBはCEX-wide トークン

## 構成・ユースケース別パターン

**Pattern A — 「Retail EVM trader, MetaMask 標準」**:
- MetaMask Swapsが裏で1inch + 0x co-providerをcall · ユーザーはaggregator選択を意識せず最良quoteを受け取る
- MEV 保護はflashbots opt-in程度 · 中規模リテール取引(< $10K)で十分

**Pattern B — 「Solana memecoin / 現物 trader」**:
- Phantom / Solflare / Backpackのいずれかから Jupiter経由でほぼ全Solana DEXが一画面でルーティング · 別aggregatorを選ぶ理由がない
- Jito BundleでMEV mitigation · slippage protectionでmemecoinのvolatilityを吸収

**Pattern C — 「大口取引 / 機関 trader」**:
- **CoW Protocolを標準選択** — batch auction + uniform priceでMEV-free + 価格改善 via ソルバー competition + Safe multisig native integration
- 代替:0x RFQでprofessional マーケットメーカー quoteを取得 · Wintermute / GSRとの大口取引で執行

**Pattern D — 「Cross-chain swap」**:
- OpenOcean(マルチ VM)またはOKX DEX(EVM + Solana + TON等)でchain coverageが広いaggregatorを選択
- LayerZero / Wormhole経由のクロスチェーン swapはaggregator内に組み込まれる
- 別経路:dedicated クロスチェーン bridge([[systems/cross-chain-bridge-eight-pole-comparison|cross-chain bridge eight-pole comparison]] 参照)+ 同chainのaggregatorの組み合わせ

**Pattern E — 「CEX-integrated ユーザー」**:
- OKX Walletユーザーは OKX DEX で オンチェーン swap → seamlessにOKX CEXへdeposit、または逆方向
- Coinbase Walletユーザーは 0x backed swap → seamlessにCoinbase exchange連携
- CEX 支援型 aggregatorの最大のwedgeは **on/off-ramp摩擦の最小化**

**Pattern F — 「Developer / dApp embedding swap」**:
- 0x API(swap quote API)がエンタープライズ統合最多 — Coinbase / Robinhood / 等のCEX backendが0x quote APIを消費
- 1inch APIはウォレット integration多 · CowSwap APIはsmart contract / multisig protocol統合多

## 境界事例・今後の方向性

**Intent-based ルーティングの普及**:
- 1inch Fusion(2023)· CowSwap(2021〜)· ParaSwap Delta(2024)がintent-based / ソルバー competitionモデルへshift
- Intentはユーザーがsigned orderを送信 · ソルバーがexecuteするモデル — パスファインダー algorithmic競争から **ソルバー / マーケットメーカー競争** へ進化
- 2026 trend:全主要EVM aggregatorがintent layerを保有 · classical パスファインダーはintent unavailableなlong-tail トークン / small trade向けのfallback

**Cross-chain aggregationの統合**:
- OpenOcean / OKX DEX / Jupiter Bridge等が「クロスチェーン swap」を一画面で提供
- 裏側はLayerZero / Wormhole / Hyperlane / CCTP V2等のクロスチェーン protocol([[systems/cross-chain-bridge-eight-pole-comparison|cross-chain bridge eight-pole comparison]])にpass-through
- Chain abstraction pattern([[systems/chain-abstraction-pattern-overview|chain abstraction overview]])がaggregator UXを更に統合 — ユーザーはchainを意識せずswap

**MEV 保護標準化圧力**:
- 2024-2025年のEU MiCA + US SECで「リテール MEV exposure」規制議論
- Robinhood crypto / Coinbase Walletは0x backed swapで部分的MEV-protect · 機関リテール flowにMEV 保護が標準要求となる方向
- CoW Protocolモデルが **構造的にMEVを撲滅** できる唯一の答え · 2027-2028で他aggregatorが模倣する可能性

**RFQ vs AMMの境界が曖昧化**:
- 0x RFQはprofessional マーケットメーカー quoteがAMM-style流動性のdeepさを上回る大口トークン pairで勝つ
- Uniswap v4 hookでAMMが「RFQ-style maker quote」をacceptできるようになる(2025-2026 deploy)
- 結果:aggregatorはAMMとRFQをtransparentに混合ルーティング — ユーザーの視点では違いが見えなくなる

**OKX / Coinbase等のCEX 支援型 aggregatorの脅威**:
- 中央化backed aggregator(OKX DEX · 0x backed swap on Coinbase)は **on/off-ramp + KYC + 機関流動性** のwedgeで純 DeFi aggregator(1inch / CowSwap)に挑戦
- 規制面でCEX 支援型 aggregatorはMiCA / FSA / SEC complianceに対応 · 機関リテール flowを吸収可能
- 2027+:CEX 支援型 aggregatorがリテール出来高の50%+を占有するshiftが起こりうる · 純 DeFi aggregatorは **MEV-resistance + transparency** 提供で差別化が必要

**JupiterのSolana支配率と非Solana拡張**:
- JupiterはSolanaの70%+ DEX ルーティングを占有 · 事実上Solana ecosystemの入口
- 2024年のJUP airdropでcommunity ownership + ガバナンス · Solana DAO ガバナンス influence拡大
- 非Solana拡張(Jupiter Bridge Wormhole経由)は実験的段階 · Solana focus維持の戦略

**Aggregator自身のMEV extraction競争**:
- 「MEV撲滅」を謳いながらソルバー / reソルバー layerでMEV価値をkept / redistributeするモデル(CowSwap · 1inch Fusion)が普及
- SolverのMEV revenueからCOW staker · 1INCH stakerに分配する手数料スイッチ進行中
- 課題:**ユーザーへのfull MEV refund** vs **トークン holderへの手数料分配** のバランス · DAO ガバナンスで議論

**ガバナンストークン + 手数料スイッチ enable trend**:
- 2024-2026年でCOW · ZRX · 1INCH等が手数料スイッチ enable / 提案進行中
- アンチトークンモードのJupiter (JUP)やRobinhood backed 0x backed swapも、collected feeのdestinationが議論対象
- SEC / MiCAのトークン 手数料分配への規制不確実性が逆風

**Long-tail トークン coverage競争**:
- aggregatorが **どれだけ多くのトークン / poolをrouteできるか** がパスファインダーモデルの中核競争
- Memecoin / ニッチ トークンに対応するパスファインダー速度 + AMM coverage(Curve / Balancer / KyberSwap Elastic等のニッチ AMM統合)が重要
- JupiterはSolana memecoin経済の中核 · 1inch / 0xはEVM long-tailで強い

**Embedded ウォレット × Agentic swap**:
- Privy / Coinbase CDP / Crossmint等のembedded ウォレット([[agent-economy/privy-embedded-wallet-overview|Privy overview 参照]])がaggregator backendをcall
- AI agent([[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption]])がx402経由のpaid APIとしてaggregator quoteを取得 · MEV-protected swapを実行
- 2026-2027 trend:agentがCowSwap / 1inch Fusionを標準 routeとして消費 · MEV 保護がagentic commerceで必須要件化

**規制 wildcard — AggregatorはCASP/VASPに該当するか?**:
- EU MiCAはaggregator(自己発注なし · ルーティングのみ)をCASP義務対象とするかはgrey area
- 日本FSAはaggregator自体をVASP登録不要(non-custodial ルーティング)としているが、CEX 支援型 aggregator(OKX DEX等)は別議論
- 2026-2027年のEU MiCA TA(Technical Advice)でaggregator categorizationが明確化される見込み · 規制リスク変動の主要因

## 関連項目
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

## 出典

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
