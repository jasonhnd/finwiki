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
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
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

- 8大DEX aggregatorを **chain coverage · routing model · MEV protection · gas relay · partner integration · governance token** の構造軸で対照し、時点依存の出来高・シェア・手数料・対応チェーン数は公式画面で再確認する
- **Routing model 3大象限**:**on-chain pathfinder**(1inch · ParaSwap · KyberSwap · OpenOcean · OKX DEX)· **RFQ (Request-For-Quote / market maker quote)**(0x Protocol · Matcha · OKX DEXもRFQを含む)· **batch auction**(CowSwap / CoW Protocol)— JupiterはSolana ecosystem専用のSVM aggregator
- **Chain coverage の分化**:EVM-heavy(1inch · 0x · CowSwap · ParaSwap · KyberSwap · OpenOcean · OKX DEX)vs Solana-only(Jupiter)· 真のmulti-VM aggregatorはまだ存在せず(OpenOceanはEVM + Solanaを同時にカバーする数少ない例だが、Solana経路は実質Jupiter sub-routingに乗る)
- **MEV protection の3大メカニズム**:**CoW Protocol のバッチオークション + uniform clearing price**(構造的にMEVを消す)· **1inch Fusion / 0x Settler の intent-based + signed quote**(MEVをほぼキャンセル)· **flashbots private mempool** ラッパ(一部aggregatorが統合)— JupiterのSolana上のMEVはJito tipモデルで緩和
- **Live-check boundary**: 出来高、シェア、対応チェーン、手数料および統合先は継続的に変わるため、各プロトコルの公式 UI / API と日時付き公開資料で確認する
- **Governance token**:1INCH · ZRX · COW · JUP · KNC · OKB(OKX本体のtoken)· PSP(2024 launchのParaSwap)· OpenOcean OOE · 各々の治理モデルとfee distributionは大きく異なる
- 関連:[[exchanges/global-dex-major-five-comparison|global DEX 5強]] (DEX比較)· [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX]](Solana 6層)· 本マトリックスは8 aggregator横断に特化

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-dex-major-five-comparison|global DEX 主要 5 社比較]] for the underlying DEX pool layer, [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]] for the Solana SVM aggregator/DEX stack, [[exchanges/global-perp-dex-five-comparison|global perp DEX 5 comparison]] for the perp-only segment, and [[exchanges/native-dex-flip-incumbent-pattern|native DEX flip incumbent pattern]] for chain-specific DEX dynamics. For peer Solana DEX deep dives see [[exchanges/dex-jito-solana|Jito Solana]] · [[exchanges/dex-raydium-solana|Raydium]] · [[exchanges/dex-orca-solana|Orca]] · [[exchanges/dex-pendle|Pendle]]. For the AMM evolutionary tree see [[exchanges/amm-design-evolution|AMM design evolution]] and [[exchanges/vetoken-host-protocol-flywheel|veToken host protocol flywheel]]. For MEV / order-flow architectural context see [[systems/mev-flashbots-suave-order-flow-auction|MEV Flashbots Suave order-flow auction]]. For broader CEX 競争 framing see [[exchanges/global-cex-top10-comparison|global CEX top 10 比較]] and [[exchanges/cex-api-sdk-ecosystem-comparison|CEX API SDK ecosystem]]. For regulatory framing see [[exchanges/fsa-vasp-registration-system|FSA VASP registration]] · [[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP]] · [[exchanges/global-vasp-regulatory-comparison-matrix|global VASP regulatory matrix]].

## なぜこのマトリックスが必要か

DEX aggregatorは2020-2021年の単純pathfinderから2024-2026年に **intent-based routing + MEV protection + cross-chain swap** へ進化した。aggregatorは **routing modelの設計** で大きく分化しており、ユーザーが「best price」を得る経路がaggregatorごとに根本的に異なる。

しかしaggregatorの比較情報は分散している — 1inch公式は自社RFQ + Fusionを強調し、CoW Protocolはbatch auctionによるMEV対策を強調し、JupiterはSolana向け製品範囲を強調する。マトリックスの価値は **同一の構造基準で8 aggregatorを横断比較** することにあり、トレーダー / 取引所統合パートナー / 機関が用途ごとの候補を絞り込めるようにする点にある。

注意:aggregatorは基礎DEX(Uniswap / Curve / Balancer / Solana Raydium / Orca等)の流動性プールの上に乗っているため、aggregator競争は「自社DEXを持たない pure routing layer」のメタゲームとなる。CowSwap (CoW Protocol)と1inch Fusionは自社solver / market makerネットワークを抱える点で例外的に「中間レイヤー以上」を取りに行っている。

## Per-aggregator sections

### 1inch (1INCH · v6 + Fusion)

**Routing model**:**On-chain Pathfinder + Fusion intent layer の二層**。Pathfinder は公開対応範囲の liquidity から経路探索し、gas + slippage を評価する。Fusion は signed order と resolver competition を使う intent layer であり、現行仕様は公式資料で確認する。

**Chain coverage**:**EVM中心**。現行の対応ネットワークは 1inch の公式 UI / API で確認する。

**MEV protection mechanism**:Fusion intent-basedモードではresolverがswap実行時のMEVをkept minimal(resolver競争でMEV valueがuserにrefundされるインセンティブ)· classical pathfinderモードはMEV exposed。Optional flashbots integrationあり。

**Gas relayer support**:Fusionモードではresolverがgasを支払い、userはgasless。Pathfinderモードはuser自前gas。

**Live metrics**: 出来高と市場ポジションは期間・集計元で変わるため、日時付き DefiLlama データと公式画面で確認する。

**Fee model**: Pathfinder と Fusion / partner integration では費用構造が異なる。適用手数料と referral 条件は現行の公式仕様で確認する。

**Partner integrations**:MetaMask Swaps経由(MetaMaskが1inchをdefault routing providerの1つに採用)· Coinbase Wallet · TrustWallet等多数。

**Governance token**:**1INCH**(2020年launch · veTokenモデルに2022年移行 · veINCH投票でfee distribution + resolver whitelistを決定)。

### 0x Protocol / Matcha (ZRX · Settler · RFQ)

**Routing model**:**RFQ-first hybrid**。0x Protocolは **professional market maker(Wintermute · GSR · Jane Street等)からsigned quote** を取得し、同時にon-chain liquidityも比較してベストを選択。Settler(2024年launch)はMEV-resistant smart router実装。Matchaは0x Protocolをコンシューマ向けにラップしたUI。

**Chain coverage**:**EVMマルチチェーン**。現行の対応ネットワークは 0x / Matcha の公式資料で確認する。

**MEV protection mechanism**:RFQ quoteはprivate signed · MEV searcherが前置sandwichできない(makerがprice commitした瞬間にexecute)。Settlerはpermit2 + smart routerでclassical AMM swapも保護。

**Gas relayer support**:0x API経由はuserがgas支払い · 一部partner(Coinbase Wallet等)はmeta-transactionでgasless支援。

**Live metrics**: Matcha と 0x API の出来高や流動性構成は集計範囲で変わるため、日時付き公式資料と分析画面で確認する。

**Fee model**: protocol fee と partner referral fee は製品・API 契約で異なるため、現行の 0x 料金仕様で確認する。

**Partner integrations**: wallet / application 統合は継続的に変わるため、0x の現行 customer / integration ページで確認する。

**Governance token**:**ZRX**(2017年launch · ZRX staking + governance · 2024年にfee distribution議論進行中)。

### CowSwap / CoW Protocol (COW · Batch Auction)

**Routing model**:**Batch auction with uniform clearing price**。ユーザーはintent(sell X for at least Y)を送信 · ~12秒のbatch window中の全orderがCoW (Coincidence of Wants)でマッチング · 残余はsolverが外部AMM/RFQでsettleする。**Uniform clearing price** で同一token pairの全orderが同価格で成立するため、MEV(sandwich + frontrunning)が構造的に成立しない。

**Chain coverage**:**EVM**。対応ネットワークは CoW Protocol の現行公式画面で確認する。

**MEV protection mechanism**:**構造的にMEV不在** — batch auctionモデルではorderが個別にexecuteされないためsandwich攻撃が物理的に成立しない。Solver競争でMEV valueがuser surplusに変換される。

**Gas relayer support**:**完全gasless** — solverがgasを負担(swap outputから差し引き)· user walletは署名のみ。

**Live metrics**: 出来高、取引サイズおよび利用者構成は固定せず、日時付き公開データで確認する。

**Fee model**: solver fee と protocol / partner 側の配分は取引条件や governance により変わるため、現行の公式仕様で確認する。

**Partner integrations**:**Safe (Gnosis Safe) native swap integration**(機関multisigがCoWでswapする)· Argent Wallet · Rabby Wallet。現行 integration は各製品の公式資料で確認する。

**Governance token**:**COW**(2023年launch · COW stakingでfee受領 + governance)。

### Jupiter (JUP · Solana only)

**Routing model**:**SVM (Sealevel) native aggregator** — Solana 上の複数 DEX を横断して routing する。現行の統合先と実装機能は Jupiter の公式資料で確認する。

**Chain coverage**:**Solana単独**(意図的)。Cross-chainはJupiter Bridge(Wormhole経由)で別product。

**MEV protection mechanism**:SolanaはEthereumと異なるMEV環境 — **Jito Bundle**(参照 [[exchanges/dex-jito-solana|Jito Solana]])にJupiter swapを入れることでsandwich攻撃をJito validator tipで抑制。Jupiterは **Slippage Bot Protection** で価格が大きく動いた場合にtransactionをrejectする。

**Gas relayer support**: network fee、priority fee、relayer および SOL 要件は取引経路と混雑で変わるため、Jupiter の現行 UI / 仕様で確認する。

**Live metrics**: Solana 上の出来高と routing share は期間・集計元で変わるため、Jupiter と日時付き分析データで確認する。

**Fee model**: swap、partner integration、priority / tip の費用は経路ごとに異なるため、現行 UI と公式仕様で確認する。

**Partner integrations**:Phantom Wallet · Solflare Wallet · Backpack(Solana walletエコシステム全体のdefault swap)· Jupiter LST (Liquid Staking Token)とJupiter Perpも拡張。

**Governance token**: JUP の現行 governance、staking および権利内容は Jupiter の公式資料で確認する。

### OpenOcean (OOE · multi-VM)

**Routing model**:**Multi-VM pathfinder** — EVM、Solana および Move VM 系を含む公開対応範囲を横断する。実際の sub-routing と統合先は公式資料で確認する。

**Chain coverage**:**multi-chain / multi-VM**。現行の対応ネットワークは OpenOcean の公式画面で確認する。

**MEV protection mechanism**:Flashbots Protect integration(EVM)· Jito Bundle integration(Solana)· プロトコル層でのMEV撲滅は無いが、各chainのMEV mitigationをpass-throughする。

**Gas relayer support**:Chain-specific — EVMでは部分的meta-transaction · Solanaではgasがそもそも低い。

**Live metrics**: aggregate / chain 別の出来高は期間と集計元で変わるため、日時付き公開データで確認する。

**Fee model**: protocol fee と partner referral fee は経路や統合条件で異なるため、現行の公式仕様で確認する。

**Partner integrations**:各chainのwallet(MetaMask · Phantom · Pontem · Suiet等)に多数統合 · cross-chain swap機能(LayerZero / Wormhole経由)が差別化点。

**Governance token**:**OOE**(2021年launch · staking + governance)。

### ParaSwap (PSP · pathfinder + RFQ hybrid)

**Routing model**:**Pathfinder + RFQ hybrid** — 自社ParaSwapPool(market maker RFQを提供)+ 外部AMM pathfinder · Delta(2024年launchのintent-based layer)でgasless intent swap。

**Chain coverage**:**EVM**。現行の対応ネットワークは ParaSwap の公式資料で確認する。

**MEV protection mechanism**:Delta intent layerでMEV mitigation · classical pathfinderモードはMEV exposed · 1inch / CowSwapと比較してMEV撲滅は弱め。

**Gas relayer support**:Deltaはgasless · classical pathfinderはuser gas。

**Live metrics**: 出来高と市場シェアの方向性は固定せず、日時付き公開データで確認する。

**Fee model**: Pathfinder、Delta および partner integration の費用は現行の公式仕様で確認する。

**Partner integrations**: retail wallet 統合は継続的に変わるため、ParaSwap の現行公式 integration ページで確認する。

**Governance token**:**PSP**(2021年launch · 2024年にfee distribution model upgrade · sePSP staking)。

### KyberSwap (KNC · Aggregator + own AMM)

**Routing model**:**KyberSwap Aggregator(pathfinder)+ Kyber Elastic(自社concentrated liquidity AMM)のデュアル路線**。Aggregatorは外部AMM + 自社Elasticの両方をrouteする。

**Chain coverage**:**EVMマルチチェーン**。現行の対応ネットワークは KyberSwap の公式資料で確認する。

**MEV protection mechanism**:2023年のhack後にコア routerを大幅に再監査 · MEV protection layerは組み込まれていない · ユーザーはMEV exposed。

**Gas relayer support**:Limited — user自前gas前提。

**Live metrics**: 出来高は日時付き公開データで確認する。

**Fee model**: aggregator と liquidity pool の費用は経路ごとに異なるため、現行の公式仕様で確認する。

**Partner integrations**:Krystal Wallet · MetaMask等。Vietnam / SEA市場で強い。

**Governance token**:**KNC**(2017年launch · 2022年migration · KNC staking + governance · KyberDAO)。

**Note**: KyberSwap Elastic の 2023-11 exploit は履歴上の重要事象である。現在の製品状態、安全対策および liquidity product の提供範囲は公式 incident / product 公開で再確認する。詳細は [[exchanges/global-dex-major-five-comparison|global DEX 5強]] とpeer参照。

### OKX DEX Aggregator (OKB · 中央化バックド)

**Routing model**:**On-chain pathfinder + RFQ hybrid** — OKX(CEX)がbackedするRFQ liquidityを統合 · 外部AMM + OKX Spot order bookのhybrid。OKX Wallet内蔵のdefault swap。

**Chain coverage**:**multi-chain / multi-VM**。現行の対応ネットワークは OKX DEX の公式画面で確認する。

**MEV protection mechanism**:Partial — OKX RFQ liquidity経由はMEV-resistant · external AMM経由はMEV exposed。

**Gas relayer support**:OKX Wallet経由はOKX Pay統合で部分的にgasless。

**Live metrics**: 出来高と成長率は固定せず、日時付き公開データで確認する。

**Fee model**: protocol fee と ecosystem 内の適用条件は経路・地域・時点で変わるため、現行の公式仕様で確認する。

**Partner integrations**:OKX Wallet(default)· OKX CEXへのシームレス連携(on-chain swap → CEX deposit)。

**Governance token**:**OKB**(OKX全体のtoken · 取引手数料discount + governance · DEX専用tokenは無い)。

## Big comparison matrix table

出典: 各プロトコルの公式製品ページ（下表 URL）。チェーン対応、ルーティング、MEV 対策、手数料および統合先は継続的に変わるため、出来高・シェア・固定手数料・固定チェーン数は比較対象から外す。

| Aggregator | 公式公開情報 | 公式情報で確認するルーティング範囲 |
|---|---|---|
| **1inch** | https://1inch.io/ | Pathfinder / intent 系製品 |
| **0x / Matcha** | https://0x.org/ · https://matcha.xyz/ | API / RFQ / routing 製品 |
| **CoW Protocol** | https://cow.fi/ | intent と solver ベースの取引 |
| **Jupiter** | https://jup.ag/ | Solana 向け swap routing |
| **OpenOcean** | https://openocean.finance/ | 公開されている multi-chain routing |
| **ParaSwap** | https://www.paraswap.io/ | swap routing と API |
| **KyberSwap** | https://kyberswap.com/ | aggregator と liquidity 製品 |
| **OKX DEX** | https://www.okx.com/web3/dex | Wallet 内 DEX aggregation |

読み方: この表はアーキテクチャの入口を示す。現在の対応チェーン、価格、手数料、トークン、統合先は利用時点の公式 UI / API ドキュメントで再確認する。

## Composition / use case patterns

**Pattern A — 「Retail EVM trader, MetaMask default」**:
- MetaMask Swapsが裏で1inch + 0x co-providerをcall · ユーザーはaggregator選択を意識せず最良quoteを受け取る
- MEV protectionはflashbots opt-in程度 · 中規模retail取引(< $10K)で十分

**Pattern B — 「Solana memecoin / spot trader」**:
- Phantom / Solflare / Backpack 等から Jupiter の Solana routing を利用できる。統合先と quote 品質は利用時点の画面で比較する
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
- CEX backed aggregator の比較では **on/off-ramp 摩擦** を一つの評価軸とし、最大・優位とは断定しない

**Pattern F — 「Developer / dApp embedding swap」**:
- 0x API(swap quote API)はエンタープライズ統合向けの公開入口を持つ。現行の導入事例は公式 customer / integration ページで確認する
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
- CoW Protocol の batch-auction 設計を含む MEV 対策は、現行仕様と実測で比較する。唯一性や将来の模倣を予測しない

**RFQ vs AMMの境界が曖昧化**:
- 0x RFQはprofessional market maker quoteがAMM-style流動性のdeepさを上回る大口token pairで勝つ
- Uniswap v4 hookでAMMが「RFQ-style maker quote」をacceptできるようになる(2025-2026 deploy)
- 結果:aggregatorはAMMとRFQをtransparentに混合routing — userの視点では違いが見えなくなる

**OKX / Coinbase等のCEX backed aggregatorの脅威**:
- 中央化backed aggregator(OKX DEX · 0x backed swap on Coinbase)は **on/off-ramp + KYC + 機関流動性** のwedgeでpure DeFi aggregator(1inch / CowSwap)に挑戦
- 規制面でCEX backed aggregatorはMiCA / FSA / SEC complianceに対応 · 機関retail flowを吸収可能
- CEX backed aggregator と pure DeFi aggregator の構成比は今後も変わりうるため、on/off-ramp、MEV resistance、透明性および自己保管性を分けて比較する

**JupiterのSolana向け範囲と非Solana拡張**:
- Jupiter の Solana routing share は固定せず、日時付き分析データと公式製品範囲で確認する
- 2024年のJUP airdropでcommunity ownership + governance · Solana DAO governance influence拡大
- 非Solana拡張(Jupiter Bridge Wormhole経由)は実験的段階 · Solana focus維持の戦略

**Aggregator自身のMEV extraction競争**:
- 「MEV撲滅」を謳いながらsolver / resolver layerでMEV価値をkept / redistributeするモデル(CowSwap · 1inch Fusion)が普及
- solver / resolver revenue と token-holder 配分は現行 governance proposal と実装状態で確認する
- 課題:**userへのfull MEV refund** vs **token holderへのfee distribution** のバランス · DAO governanceで議論

**Governance token + fee switch enable trend**:
- fee switch の有無は protocol ごとの現行 governance proposal と実装状態で確認する
- collected fee の帰属は token 名や統合先から推定せず、各 protocol の公式仕様で確認する
- token fee distribution の規制評価は該当法域の現行当局資料で確認する

**Long-tail token coverage競争**:
- aggregatorが **どれだけ多くのtoken / poolをrouteできるか** がpathfinderモデルの中核競争
- Memecoin / niche tokenに対応するpathfinder速度 + AMM coverage(Curve / Balancer / KyberSwap Elastic等のniche AMM統合)が重要
- chain / token 別の coverage と quote 品質は公式 UI / API で同時点比較する

**Embedded wallet × Agentic swap**:
- Privy / Coinbase CDP / Crossmint等のembedded wallet([[agent-economy/privy-embedded-wallet-overview|Privy overview 参照]])がaggregator backendをcall
- AI agent([[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption]])がx402経由のpaid APIとしてaggregator quoteを取得 · MEV-protected swapを実行
- agentic swap の採用状況は日時付き integration 公開で確認し、default route や必須要件を推定しない

**規制 wildcard — AggregatorはCASP/VASPに該当するか?**:
- EU MiCA 上の aggregator の扱いは、提供機能と法的主体ごとに現行当局資料で確認する
- 日本の登録要否も custody、媒介、注文執行その他の実態に基づき、FSA の現行資料で確認する
- 将来の technical advice の内容や時期を予測せず、公表後に categorization を更新する

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
