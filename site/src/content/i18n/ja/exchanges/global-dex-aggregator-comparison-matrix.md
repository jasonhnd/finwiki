---
source: exchanges/global-dex-aggregator-comparison-matrix
source_hash: ee8c251b929931e7
lang: ja
status: machine
fidelity: ok
title: "グローバル DEX Aggregator 比較マトリックス · 8大 Aggregator 横断対照"
translated_at: 2026-07-29T11:02:23.000Z
---

# グローバル DEX Aggregator 比較マトリックス · 8大 Aggregator 横断対照

## 要約

- 8大DEX aggregatorを **対応チェーン範囲 · ルーティングモデル · MEV 保護 · gas relay · partner integration · ガバナンストークン** の構造軸で対照し、時点依存の出来高・シェア・手数料・対応チェーン数は公式画面で再確認する
- **ルーティングモデル 3大象限**:**オンチェーンパスファインダー**(1inch · ParaSwap · KyberSwap · OpenOcean · OKX DEX)· **RFQ (Request-For-Quote / マーケットメーカー quote)**(0x Protocol · Matcha · OKX DEXもRFQを含む)· **batch auction**(CowSwap / CoW Protocol)— JupiterはSolana 経済圏専用のSVM aggregator
- **対応チェーン範囲 の分化**:EVM-heavy(1inch · 0x · CowSwap · ParaSwap · KyberSwap · OpenOcean · OKX DEX)vs Solana 専用(Jupiter)· 真のマルチ VM aggregatorはまだ存在せず(OpenOceanはEVM + Solanaを同時にカバーする数少ない例だが、Solana経路は実質Jupiter sub-ルーティングに乗る)
- **MEV 保護 の3大メカニズム**:**CoW Protocol のバッチオークション + uniform 清算 price**(構造的にMEVを消す)· **1inch Fusion / 0x Settler の intent-based + signed quote**(MEVをほぼキャンセル)· **flashbots private メンプール** ラッパ(一部aggregatorが統合)— JupiterのSolana上のMEVはJito tipモデルで緩和
- **ライブ確認境界**: 出来高、シェア、対応チェーン、手数料および統合先は継続的に変わるため、各プロトコルの公式 UI / API と日時付き公開資料で確認する
- **ガバナンストークン**:1INCH · ZRX · COW · JUP · KNC · OKB(OKX本体のトークン)· PSP(2024 ローンチのParaSwap)· OpenOcean OOE · 各々の治理モデルと手数料分配は大きく異なる
- 関連項目:[[exchanges/global-dex-major-five-comparison|global DEX 5強]] (DEX比較)· [[exchanges/solana-ecosystem-dex-comparison|Solana 経済圏 DEX]](Solana 6層)· 本マトリックスは8 aggregator横断に特化

## ウィキ上の位置づけ

この項目は [[exchanges/INDEX|exchanges index]] の下位に位置づけられる。基礎となる DEX プール層は [[exchanges/global-dex-major-five-comparison|global DEX 主要 5 社比較]]、Solana SVM の aggregator / DEX スタックは [[exchanges/solana-ecosystem-dex-comparison|Solana 経済圏 DEX comparison]]、perp 専業セグメントは [[exchanges/global-perp-dex-five-comparison|global perp DEX 5 comparison]]、チェーン別 DEX ダイナミクスは [[exchanges/native-dex-flip-incumbent-pattern|native DEX flip incumbent pattern]] と対照して読む。同業 Solana DEX の詳細分析は [[exchanges/dex-jito-solana|Jito Solana]] · [[exchanges/dex-raydium-solana|Raydium]] · [[exchanges/dex-orca-solana|Orca]] · [[exchanges/dex-pendle|Pendle]]、AMM の進化系統は [[exchanges/amm-design-evolution|AMM design evolution]] と [[exchanges/vetoken-host-protocol-flywheel|veToken host protocol flywheel]]、MEV / オーダーフローのアーキテクチャ文脈は [[systems/mev-flashbots-suave-order-flow-auction|MEV Flashbots Suave order-flow auction]]、より広い CEX 競争の見取り図は [[exchanges/global-cex-top10-comparison|global CEX top 10 比較]] と [[exchanges/cex-api-sdk-ecosystem-comparison|CEX API SDK 経済圏]]、規制上の位置づけは [[exchanges/fsa-vasp-registration-system|FSA VASP registration]] · [[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP]] · [[exchanges/global-vasp-regulatory-comparison-matrix|global VASP regulatory matrix]] を参照。

## なぜこのマトリックスが必要か

DEX aggregatorは2020-2021年の単純パスファインダーから2024-2026年に **intent-based ルーティング + MEV 保護 + クロスチェーン swap** へ進化した。aggregatorは **ルーティング modelの設計** で大きく分化しており、ユーザーが「最良価格」を得る経路がaggregatorごとに根本的に異なる。

しかしaggregatorの比較情報は分散している — 1inch公式は自社RFQ + Fusionを強調し、CoW Protocolはbatch auctionによるMEV対策を強調し、JupiterはSolana向け製品範囲を強調する。マトリックスの価値は **同一の構造基準で8 aggregatorを横断比較** することにあり、トレーダー / 取引所統合パートナー / 機関が用途ごとの候補を絞り込めるようにする点にある。

注意:aggregatorは基礎DEX(Uniswap / Curve / Balancer / Solana Raydium / Orca等)の流動性プールの上に乗っているため、aggregator競争は「自社DEXを持たない pure ルーティング layer」のメタゲームとなる。CowSwap (CoW Protocol)と1inch Fusionは自社ソルバー / マーケットメーカーネットワークを抱える点で例外的に「中間レイヤー以上」を取りに行っている。

## Aggregator 別セクション

### 1inch (1INCH · v6 + Fusion)

**ルーティングモデル**:**On-chain Pathfinder + Fusion intent layer の二層**。Pathfinder は公開対応範囲の liquidity から経路探索し、gas + slippage を評価する。Fusion は signed order と resolver competition を使う intent layer であり、現行仕様は公式資料で確認する。

**対応チェーン範囲**:**EVM中心**。現行の対応ネットワークは 1inch の公式 UI / API で確認する。

**MEV 保護メカニズム**:Fusion intent-basedモードではreソルバーがswap実行時のMEVをkept minimal(reソルバー競争でMEV valueがユーザーにrefundされるインセンティブ)· classical パスファインダーモードはMEV exposed。Optional flashbots integrationあり。

**Gas リレイヤー対応**:Fusionモードではreソルバーがgasを支払い、ユーザーはガスレス。Pathfinderモードはユーザー自前gas。

**ライブ指標**: 出来高と市場ポジションは期間・集計元で変わるため、日時付き DefiLlama データと公式画面で確認する。

**手数料モデル**: Pathfinder と Fusion / partner integration では費用構造が異なる。適用手数料と referral 条件は現行の公式仕様で確認する。

**パートナー連携**:MetaMask Swaps経由(MetaMaskが1inchを標準ルーティング providerの1つに採用)· Coinbase ウォレット · TrustWallet等多数。

**ガバナンストークン**:**1INCH**(2020年ローンチ · veTokenモデルに2022年移行 · veINCH投票で手数料分配 + reソルバー whitelistを決定)。

### 0x Protocol / Matcha (ZRX · Settler · RFQ)

**ルーティングモデル**:**RFQ-first hybrid**。0x Protocolは **professional マーケットメーカー(Wintermute · GSR · Jane Street等)からsigned quote** を取得し、同時にオンチェーン liquidityも比較してベストを選択。Settler(2024年ローンチ)はMEV-resistant smart router実装。Matchaは0x Protocolをコンシューマ向けにラップしたUI。

**対応チェーン範囲**:**EVMマルチチェーン**。現行の対応ネットワークは 0x / Matcha の公式資料で確認する。

**MEV 保護メカニズム**:RFQ quoteはprivate signed · MEV searcherが前置sandwichできない(makerがprice commitした瞬間にexecute)。Settlerはpermit2 + smart routerでclassical AMM swapも保護。

**Gas リレイヤー対応**:0x API経由はユーザーがgas支払い · 一部partner(Coinbase ウォレット等)はmeta-transactionでガスレス支援。

**ライブ指標**: Matcha と 0x API の出来高や流動性構成は集計範囲で変わるため、日時付き公式資料と分析画面で確認する。

**手数料モデル**: protocol fee と partner referral fee は製品・API 契約で異なるため、現行の 0x 料金仕様で確認する。

**パートナー連携**: ウォレット / application 統合は継続的に変わるため、0x の現行 customer / integration ページで確認する。

**ガバナンストークン**:**ZRX**(2017年ローンチ · ZRX ステーキング + ガバナンス · 2024年に手数料分配議論進行中)。

### CowSwap / CoW Protocol (COW · Batch Auction)

**ルーティングモデル**:**Batch auction 均一清算価格付き**。ユーザーはintent(sell X for at least Y)を送信 · ~12秒のbatch window中の全orderがCoW (Coincidence of Wants)でマッチング · 残余はソルバーが外部AMM/RFQでsettleする。**Uniform 清算 price** で同一トークン pairの全orderが同価格で成立するため、MEV(sandwich + frontrunning)が構造的に成立しない。

**対応チェーン範囲**:**EVM**。対応ネットワークは CoW Protocol の現行公式画面で確認する。

**MEV 保護メカニズム**:**構造的にMEV不在** — batch auctionモデルではorderが個別にexecuteされないためsandwich攻撃が物理的に成立しない。Solver競争でMEV valueがユーザー surplusに変換される。

**Gas リレイヤー対応**:**完全ガスレス** — ソルバーがgasを負担(swap outputから差し引き)· ユーザー ウォレットは署名のみ。

**ライブ指標**: 出来高、取引サイズおよび利用者構成は固定せず、日時付き公開データで確認する。

**手数料モデル**: ソルバー fee と protocol / partner 側の配分は取引条件や governance により変わるため、現行の公式仕様で確認する。

**パートナー連携**:**Safe (Gnosis Safe) native swap integration**(機関multisigがCoWでswapする)· Argent ウォレット · Rabby ウォレット。現行 integration は各製品の公式資料で確認する。

**ガバナンストークン**:**COW**(2023年ローンチ · COW ステーキングでfee受領 + ガバナンス)。

### Jupiter (JUP · Solana 専用)

**ルーティングモデル**:**SVM (Sealevel) native aggregator** — Solana 上の複数 DEX を横断してルーティングする。現行の統合先と実装機能は Jupiter の公式資料で確認する。

**対応チェーン範囲**:**Solana単独**(意図的)。Cross-chainはJupiter Bridge(Wormhole経由)で別product。

**MEV 保護メカニズム**:SolanaはEthereumと異なるMEV環境 — **Jito Bundle**(参照 [[exchanges/dex-jito-solana|Jito Solana]])にJupiter swapを入れることでsandwich攻撃をJito validator tipで抑制。Jupiterは **Slippage Bot Protection** で価格が大きく動いた場合にtransactionをrejectする。

**Gas リレイヤー対応**: network fee、priority fee、relayer および SOL 要件は取引経路と混雑で変わるため、Jupiter の現行 UI / 仕様で確認する。

**ライブ指標**: Solana 上の出来高とルーティングシェアは期間・集計元で変わるため、Jupiter と日時付き分析データで確認する。

**手数料モデル**: swap、partner integration、priority / tip の費用は経路ごとに異なるため、現行 UI と公式仕様で確認する。

**パートナー連携**:Phantom ウォレット · Solflare ウォレット · Backpack(Solana ウォレット経済圏全体の標準 swap)· Jupiter LST (Liquid Staking Token)とJupiter Perpも拡張。

**ガバナンストークン**: JUP の現行ガバナンス、ステーキングおよび権利内容は Jupiter の公式資料で確認する。

### OpenOcean (OOE · マルチ VM)

**ルーティングモデル**:**Multi-VM パスファインダー** — EVM、Solana および Move VM 系を含む公開対応範囲を横断する。実際の sub-routing と統合先は公式資料で確認する。

**対応チェーン範囲**:**マルチチェーン / マルチ VM**。現行の対応ネットワークは OpenOcean の公式画面で確認する。

**MEV 保護メカニズム**:Flashbots Protect integration(EVM)· Jito Bundle integration(Solana)· プロトコル層でのMEV撲滅は無いが、各chainのMEV mitigationをpass-throughする。

**Gas リレイヤー対応**:Chain-specific — EVMでは部分的meta-transaction · Solanaではgasがそもそも低い。

**ライブ指標**: aggregate / chain 別の出来高は期間と集計元で変わるため、日時付き公開データで確認する。

**手数料モデル**: protocol fee と partner referral fee は経路や統合条件で異なるため、現行の公式仕様で確認する。

**パートナー連携**:各chainのウォレット(MetaMask · Phantom · Pontem · Suiet等)に多数統合 · クロスチェーン swap機能(LayerZero / Wormhole経由)が差別化点。

**ガバナンストークン**:**OOE**(2021年ローンチ · ステーキング + ガバナンス)。

### ParaSwap (PSP · パスファインダー + RFQ hybrid)

**ルーティングモデル**:**Pathfinder + RFQ hybrid** — 自社ParaSwapPool(マーケットメーカー RFQを提供)+ 外部AMM パスファインダー · Delta(2024年ローンチのintent-based layer)でガスレス intent swap。

**対応チェーン範囲**:**EVM**。現行の対応ネットワークは ParaSwap の公式資料で確認する。

**MEV 保護メカニズム**:Delta intent layerでMEV mitigation · classical パスファインダーモードはMEV exposed · 1inch / CowSwapと比較してMEV撲滅は弱め。

**Gas リレイヤー対応**:Deltaはガスレス · classical パスファインダーはユーザー gas。

**ライブ指標**: 出来高と市場シェアの方向性は固定せず、日時付き公開データで確認する。

**手数料モデル**: Pathfinder、Delta および partner integration の費用は現行の公式仕様で確認する。

**パートナー連携**: リテールウォレット統合は継続的に変わるため、ParaSwap の現行公式 integration ページで確認する。

**ガバナンストークン**:**PSP**(2021年ローンチ · 2024年に手数料分配 model upgrade · sePSP ステーキング)。

### KyberSwap (KNC · Aggregator + own AMM)

**ルーティングモデル**:**KyberSwap Aggregator(パスファインダー)+ Kyber Elastic(自社concentrated liquidity AMM)のデュアル路線**。Aggregatorは外部AMM + 自社Elasticの両方をrouteする。

**対応チェーン範囲**:**EVMマルチチェーン**。現行の対応ネットワークは KyberSwap の公式資料で確認する。

**MEV 保護メカニズム**:2023年のhack後にコア routerを大幅に再監査 · MEV 保護 layerは組み込まれていない · ユーザーはMEV exposed。

**Gas リレイヤー対応**:Limited — ユーザー自前gas前提。

**ライブ指標**: 出来高は日時付き公開データで確認する。

**手数料モデル**: aggregator と liquidity pool の費用は経路ごとに異なるため、現行の公式仕様で確認する。

**パートナー連携**:Krystal ウォレット · MetaMask等。Vietnam / SEA市場で強い。

**ガバナンストークン**:**KNC**(2017年ローンチ · 2022年migration · KNC ステーキング + ガバナンス · KyberDAO)。

**Note**: KyberSwap Elastic の 2023-11 exploit は履歴上の重要事象である。現在の製品状態、安全対策および liquidity product の提供範囲は公式 incident / product 公開で再確認する。詳細は [[exchanges/global-dex-major-five-comparison|global DEX 5強]] とpeer参照。

### OKX DEX Aggregator (OKB · 中央化バックド)

**ルーティングモデル**:**On-chain パスファインダー + RFQ hybrid** — OKX(CEX)がbackedするRFQ liquidityを統合 · 外部AMM + OKX Spot order bookのhybrid。OKX ウォレット内蔵の標準 swap。

**対応チェーン範囲**:**マルチチェーン / マルチ VM**。現行の対応ネットワークは OKX DEX の公式画面で確認する。

**MEV 保護メカニズム**:Partial — OKX RFQ liquidity経由はMEV-resistant · external AMM経由はMEV exposed。

**Gas リレイヤー対応**:OKX ウォレット経由はOKX Pay統合で部分的にガスレス。

**ライブ指標**: 出来高と成長率は固定せず、日時付き公開データで確認する。

**手数料モデル**: protocol fee と経済圏内の適用条件は経路・地域・時点で変わるため、現行の公式仕様で確認する。

**パートナー連携**:OKX ウォレット(標準)· OKX CEXへのシームレス連携(オンチェーン swap → CEX deposit)。

**ガバナンストークン**:**OKB**(OKX全体のトークン · 取引手数料discount + ガバナンス · DEX専用トークンは無い)。

## 大型比較マトリックス表

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

## 構成・ユースケース別パターン

**Pattern A — 「Retail EVM trader, MetaMask 標準」**:
- MetaMask Swapsが裏で1inch + 0x co-providerをcall · ユーザーはaggregator選択を意識せず最良quoteを受け取る
- MEV 保護はflashbots opt-in程度 · 中規模リテール取引(< $10K)で十分

**Pattern B — 「Solana memecoin / 現物 trader」**:
- Phantom / Solflare / Backpack 等から Jupiter の Solana ルーティングを利用できる。統合先と quote 品質は利用時点の画面で比較する
- Jito BundleでMEV mitigation · slippage protectionでmemecoinのvolatilityを吸収

**Pattern C — 「大口取引 / 機関 trader」**:
- **CoW Protocolを標準選択** — batch auction + uniform priceでMEV-free + 価格改善 via ソルバー competition + Safe multisig native integration
- 代替:0x RFQでprofessional マーケットメーカー quoteを取得 · Wintermute / GSRとの大口取引で執行

**Pattern D — 「Cross-chain swap」**:
- OpenOcean(マルチ VM)またはOKX DEX(EVM + Solana + TON等)でchain coverageが広いaggregatorを選択
- LayerZero / Wormhole経由のクロスチェーン swapはaggregator内に組み込まれる
- 別経路:dedicated クロスチェーン bridge([[systems/cross-chain-bridge-eight-pole-comparison|cross-chain bridge eight-pole comparison]] 参照)+ 同chainのaggregatorの組み合わせ

**Pattern E — 「CEX-integrated ユーザー」**:
- OKX ウォレットユーザーは OKX DEX で オンチェーン swap → seamlessにOKX CEXへdeposit、または逆方向
- Coinbase ウォレットユーザーは 0x backed swap → seamlessにCoinbase exchange連携
- CEX 支援型 aggregator の比較では **on/off-ramp 摩擦** を一つの評価軸とし、最大・優位とは断定しない

**Pattern F — 「Developer / dApp embedding swap」**:
- 0x API(swap quote API)はエンタープライズ統合向けの公開入口を持つ。現行の導入事例は公式 customer / integration ページで確認する
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
- Robinhood crypto / Coinbase ウォレットは0x backed swapで部分的MEV-protect · 機関リテール flowにMEV 保護が標準要求となる方向
- CoW Protocol の batch-auction 設計を含む MEV 対策は、現行仕様と実測で比較する。唯一性や将来の模倣を予測しない

**RFQ vs AMMの境界が曖昧化**:
- 0x RFQはprofessional マーケットメーカー quoteがAMM-style流動性のdeepさを上回る大口トークン pairで勝つ
- Uniswap v4 hookでAMMが「RFQ-style maker quote」をacceptできるようになる(2025-2026 deploy)
- 結果:aggregatorはAMMとRFQをtransparentに混合ルーティング — ユーザーの視点では違いが見えなくなる

**OKX / Coinbase等のCEX 支援型 aggregatorの脅威**:
- 中央化backed aggregator(OKX DEX · 0x backed swap on Coinbase)は **on/off-ramp + KYC + 機関流動性** のwedgeで純 DeFi aggregator(1inch / CowSwap)に挑戦
- 規制面でCEX 支援型 aggregatorはMiCA / FSA / SEC complianceに対応 · 機関リテール flowを吸収可能
- CEX 支援型 aggregator と純 DeFi aggregator の構成比は今後も変わりうるため、on/off-ramp、MEV resistance、透明性および自己保管性を分けて比較する

**JupiterのSolana向け範囲と非Solana拡張**:
- Jupiter の Solana ルーティングシェアは固定せず、日時付き分析データと公式製品範囲で確認する
- 2024年のJUP airdropでcommunity ownership + ガバナンス · Solana DAO ガバナンス influence拡大
- 非Solana拡張(Jupiter Bridge Wormhole経由)は実験的段階 · Solana focus維持の戦略

**Aggregator自身のMEV extraction競争**:
- 「MEV撲滅」を謳いながらソルバー / reソルバー layerでMEV価値をkept / redistributeするモデル(CowSwap · 1inch Fusion)が普及
- solver / resolver revenue と token-holder 配分は現行ガバナンス proposal と実装状態で確認する
- 課題:**ユーザーへのfull MEV refund** vs **トークン holderへの手数料分配** のバランス · DAO ガバナンスで議論

**ガバナンストークン + 手数料スイッチ enable trend**:
- 手数料スイッチの有無は protocol ごとの現行ガバナンス proposal と実装状態で確認する
- collected fee の帰属はトークン名や統合先から推定せず、各 protocol の公式仕様で確認する
- トークン手数料分配の規制評価は該当法域の現行当局資料で確認する

**Long-tail トークン coverage競争**:
- aggregatorが **どれだけ多くのトークン / poolをrouteできるか** がパスファインダーモデルの中核競争
- Memecoin / ニッチトークンに対応するパスファインダー速度 + AMM coverage(Curve / Balancer / KyberSwap Elastic等のニッチ AMM統合)が重要
- chain / token 別の coverage と quote 品質は公式 UI / API で同時点比較する

**Embedded ウォレット × Agentic swap**:
- Privy / Coinbase CDP / Crossmint等のembedded ウォレット([[agent-economy/privy-embedded-wallet-overview|Privy overview 参照]])がaggregator backendをcall
- AI agent([[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption]])がx402経由のpaid APIとしてaggregator quoteを取得 · MEV-protected swapを実行
- agentic swap の採用状況は日時付き integration 公開で確認し、標準 route や必須要件を推定しない

**規制 wildcard — AggregatorはCASP/VASPに該当するか?**:
- EU MiCA 上の aggregator の扱いは、提供機能と法的主体ごとに現行当局資料で確認する
- 日本の登録要否も custody、媒介、注文執行その他の実態に基づき、FSA の現行資料で確認する
- 将来の technical advice の内容や時期を予測せず、公表後に categorization を更新する

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[exchanges/INDEX|exchanges index]]
- [[exchanges/global-dex-major-five-comparison|global DEX 主要 5 社比較]]
- [[exchanges/solana-ecosystem-dex-comparison|Solana 経済圏 DEX comparison]]
- [[exchanges/global-perp-dex-five-comparison|global perp DEX 5 comparison]]
- [[exchanges/global-perp-dex-competitive-deep-dive-matrix|global perp DEX competitive deep dive matrix]]
- [[exchanges/native-dex-flip-incumbent-pattern|native DEX flip incumbent pattern]]
- [[exchanges/dex-jito-solana|Jito Solana]]
- [[exchanges/dex-raydium-solana|Raydium Solana]]
- [[exchanges/dex-orca-solana|Orca Solana]]
- [[exchanges/dex-pendle|Pendle]]
- [[exchanges/amm-design-evolution|AMM design evolution]]
- [[exchanges/global-cex-top10-comparison|global CEX top 10 比較]]
- [[exchanges/cex-api-sdk-ecosystem-comparison|CEX API SDK 経済圏 comparison]]
- [[exchanges/fsa-vasp-registration-system|FSA VASP registration system]]
- [[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP regime overview]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|global VASP regulatory matrix]]
- [[systems/mev-flashbots-suave-order-flow-auction|MEV Flashbots Suave order-flow auction]]
- [[systems/cross-chain-bridge-eight-pole-comparison|cross-chain bridge eight-pole comparison]]
- [[systems/chain-abstraction-pattern-overview|chain abstraction pattern overview]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded ウォレット]]
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
