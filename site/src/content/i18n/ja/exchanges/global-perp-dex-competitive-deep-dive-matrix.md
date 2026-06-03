---
source: exchanges/global-perp-dex-competitive-deep-dive-matrix
source_hash: 2b9ca770244bc5f4
lang: ja
status: machine
fidelity: ok
title: ""
translated_at: 2026-06-02T12:19:04.207Z
---
﻿# グローバル perp DEX 競争環境の詳細比較マトリクス

## 要約

Perpetual-futures DEX は、**構造的に異なる3つの流動性モデル**、すなわち CLOB（オンチェーンまたはハイブリッドの中央指値注文板）、vAMM / プール・カウンターパーティ（単一のマルチアセット LP プールが全トレーダーの相手方になる）、ハイブリッド / オラクル価格モデルに分かれる。これらを「すべて perp DEX」と一括りにすると、各取引所の手数料、スリッページ、MEV 耐性、LP リスク、規制エクスポージャーを読み違える。本稿は、**詳細な11方向マトリクス**であり、[[exchanges/global-perp-dex-five-comparison|the 5-way summary]]を補完する。**第2世代のデリバティブ DEX**（Synthetix Perps、Kwenta、Aark、Aevo、Apex）と、アーキテクチャを大きく作り直したプロトコルの **v1  / v2 分割**（dYdX v3 対 v4, 、GMX v1 対 v2）を追加する。比較軸は、チェーン、流動性モデル、手数料階層、最大レバレッジ、対応資産、決済資産、MEV 保護、ガス経済性、日次出来高レンジ、perp DEX 市場シェア帯である。このマトリクスは、オンチェーン・デリバティブが spot DEX のシェア移行に対してどこに位置するかを理解するため、[[exchanges/global-dex-major-five-comparison|the global spot DEX major-5 comparison]]および[[exchanges/native-dex-flip-incumbent-pattern|the native-chain-DEX flip-incumbent pattern]]と併読する。

## ウィキ上の位置づけ

これは[[exchanges/INDEX|exchanges index]]配下に置かれる perp DEX の詳細比較マトリクスである。本稿が拡張する前身である[[exchanges/global-perp-dex-five-comparison|global perp DEX top 5 comparison]]、spot DEX の同業比較を扱う[[exchanges/global-dex-major-five-comparison|global DEX major five comparison]]、チェーンネイティブ対クロスチェーンの構造的視点を扱う[[exchanges/native-dex-flip-incumbent-pattern|native DEX flip-incumbent pattern]]、Drift に関係する Solana 側の詳細を扱う[[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]]、決済資産のオンランプ / オフランプを扱う[[exchanges/cross-chain-bridge-cex-deposit-withdrawal|cross-chain bridge × CEX deposit/withdrawal]]、vAMM perps に関係する LP カウンターパーティ・モデルの歴史を扱う[[exchanges/amm-design-evolution|AMM design evolution]]、複数の perp DEX が margin として受け入れる担保側の LST / LRT ルートを扱う[[exchanges/liquid-staking-restaking-cex-exposure|liquid-staking / restaking CEX exposure]]、より広いチェーン環境を扱う[[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]、クロスチェーン・ルーティング面を扱う[[systems/INDEX|systems index]]とあわせて読む。

## このマトリクスが重要な理由

2025-2026, までに、perp DEX 群は時に中堅 CEX 同業に匹敵する意味のある単日出来高をまとめて処理するようになった。しかし基礎アーキテクチャの差が非常に大きいため、手数料階層だけの比較は誤解を招く。Hyperliquid の専用 L1 CLOB は、dYdX v4の Cosmos バリデータ協調 CLOB とは異なるインシデント対応特性を持つ。GMX の GLP プール・カウンターパーティ・モデルは、Drift の vAMM + oracle pricing とは異なる LP リスク経済性を持つ。Synthetix Perps の Perps v2  / v3 設計は、Synthetix backend 上の Kwenta フロントエンドとは異なる決済タイミングを持つ。Aevo、Apex、Aark はそれぞれ異なる理由で、異なるチェーン基盤（Layer-2 、OP Stack appchain、StarkEx）を選んだ。下のマトリクスは、**アーキテクチャ、ガス、手数料、レバレッジ、対応資産、MEV 保護、市場シェア**の軸を横並びにし、読者がその日の24h出来高が最も大きい DEX に安易に流れるのではなく、用途（高レバレッジの高流動性ペア、ロングテール資産、MEV に敏感なフロー、LST 担保 margin）に合った取引所を選べるようにする。

## DEX別詳細

### dYdX v3 （StarkEx L2, 2021-2023）

大規模運用された初期の CLOB perp DEX。Ethereum 上のカスタム StarkEx インスタンス（zk-rollup Layer-2 ）で稼働し、オフチェーンの order book matching とオンチェーン決済を組み合わせる。**決済資産**: USDC。**最大レバレッジ**: 主要ペアで最大20x。**対応資産**: ピーク時に約40 ペア（主要銘柄 + 上位100 alts）。**MEV 保護**: 高い。オフチェーン matching engine と定期的な L1 commit により、個別取引のオンチェーン MEV 面は大半が取り除かれる。**ガス経済性**: matching はオフチェーンのため、トレーダーはガスを支払わない（入出金のみ）。入出金は StarkEx の escape hatch 経由で Ethereum-L1 gas を使う。**手数料階層**: 標準で maker 0.02% / taker 0.05%。**日次出来高レンジ**（稼働が活発だった期間 2022-2023）: 一般に $0.5-2B。**市場シェア**: 2022 サイクルにおけるピーク時の perp DEX 首位。

v3 アーキテクチャには限界があった。(a) オフチェーン matching server への依存が信頼を中央集権化する、(b) DYDX token governance が protocol fees から切り離されていた（token holders へのネイティブ trading-fee accrual がない）、(c) StarkEx システムがチェーンレベルの拡張性を制約した。dYdX の戦略的回答が v4 への再構築である。次の行を参照。詳細: USDC 決済資産のオンランプ / オフランプについては[[exchanges/cross-chain-bridge-cex-deposit-withdrawal|cross-chain bridge × CEX deposit/withdrawal]]へクロスリンク。

### dYdX v4 （Cosmos appchain、2023-10 ローンチ）

CometBFT consensus を使うカスタム Cosmos appchain（dYdX Chain）上での全面的なアーキテクチャ再構築。**CLOB matching は現在バリデータが実行する**（各バリデータが自身の order book を走らせ、バリデータが正準の順序について合意する）。**すべての order-book state と取引決済はオンチェーン**である。**決済資産**: USDC。**最大レバレッジ**: 20x。**対応資産**: 40+ ペア。**MEV 保護**: 高い（明示的な anti-MEV mechanism を備えたバリデータ側 matching）。**ガス経済性**: トレーダーはバリデータ・ネットワーク gas を支払う（DYDX で支払い）が、transaction cost は小さい。**手数料階層**: rebate 付きで maker 0.02% / taker 0.05%。**日次出来高**: 通常 $0.3-1B（Hyperliquid がシェアを奪ったため v3 時代より低い）。**市場シェア**: 2024-2025を通じて top-3 perp DEX。

v4 は、**大規模な初の完全オンチェーン CLOB perp DEX**であり、2023 後世代のアーキテクチャ・テンプレートである。トレードオフとして、matching をバリデータ consensus 内にオンチェーン移行したことで、dYdX はバリデータセット掌握の運用リスクを追加した一方、信頼性の高い分散性を得た。米国トレーダーのアクセスは geo-block されている。詳細: Cosmos appchain の文脈については[[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]へクロスリンク。

### Hyperliquid（Hyperliquid L1, 2023-）

低レイテンシの order-book trading 向けに設計された**完全オンチェーン CLOB**を備える専用 Layer-1 （HyperBFT consensus、カスタム EVM 互換 execution layer「HyperEVM」）。**決済資産**: USDC（Arbitrum からブリッジ）。**最大レバレッジ**: 主要銘柄で最大50x。**対応資産**: 任意の時点で100+ perp ペア、ロングテール資産の迅速な listing。**MEV 保護**: 高い（典型的な MEV ベクトルに対して最適化された order-flow design を持つカスタム L1 ）。**ガス経済性**: トレーダーは HyperEVM gas を支払うが、1取引あたりのコストは sub-cent。**手数料階層**: maker rebates が利用可能、taker 0.025-0.05%の tiered。**日次出来高レンジ**: $1-5B（高ボラティリティ時にはさらに大きいことがある）。**市場シェア**: 2024-2025, を通じ、出来高ベースで**支配的な perp DEX 首位**。HYPE token TGE 2024-11 は、pre-sale なしの emission として retroactive users に配布された。

Hyperliquid の際立った運用上の成果は、CEX 級の order-book UX（サブ秒の注文配置、狭い bid-ask spreads、厚い books）を完全オンチェーンの取引所で実現した点にある。既存の L1 または L2 を使うのではなく、すべてをカスタム L1 上で動かすというチームの設計選択が、中心的なアーキテクチャ上の賭けである。詳細: chain-native flip 分析については[[exchanges/native-dex-flip-incumbent-pattern|native DEX flip-incumbent pattern]]へクロスリンク。

### Vertex Protocol（Arbitrum、2023-）

Arbitrum 上のハイブリッド **CLOB + AMM** 設計で、オフチェーン order-book matching と AMM fallback liquidity を組み合わせる。特徴は、**統合されたマルチプロダクト margin account**である。spot + perp + money-market positions が単一の margin pool を共有し、cross-product netting を可能にする。**決済資産**: USDC。**最大レバレッジ**: 主要銘柄で10x、alts はより低い。**対応資産**: 30-50 perp ペア + spot。**MEV 保護**: 中-高（オフチェーン matching）。**ガス経済性**: Arbitrum L2 gas（sub-cent）。**手数料階層**: maker 0.0% / taker 0.02-0.04%。**日次出来高レンジ**: $0.1-0.4B。**市場シェア**: top-10 perp DEX。

Vertex Edge（マルチチェーン展開）は、synced-orderbook アーキテクチャを通じて Arbitrum、Mantle、Sei、Base、Blast、その他のチェーンへ order book を拡張し、トレーダーを単一チェーンに強制せずに複数の L2s にまたがる流動性の獲得を試みる。詳細: ハイブリッド CLOB+AMM 系譜については[[exchanges/amm-design-evolution|AMM design evolution]]へクロスリンク。

### Drift Protocol（Solana、2021-）

**vAMM（virtual AMM）+ oracle pricing + JIT auction**モデルを使う Solana-native perp DEX。Drift v2 （2022）は、初期の純粋な vAMM 設計を置き換え、takers が vAMM fallback の前に短い auction window 内で反応する JIT（just-in-time）market-maker bots によって約定され得るハイブリッドへ移行した。**決済資産**: USDC。**最大レバレッジ**: 主要銘柄で20x、alts で10x。**対応資産**: 40+ perp ペア。**MEV 保護**: 中（Solana の block-leader architecture には既知の MEV ベクトルがあるが、Drift の JIT auction により緩和される）。**ガス経済性**: Solana network fees（sub-cent）。**手数料階層**: tier discounts 付きの標準 maker 0.01% / taker 0.10%。**日次出来高レンジ**: $0.1-0.3B。**市場シェア**: Solana の top perp DEX、世界でも top-10 。

Drift の重要性は、**Solana エコシステムの中心的 perp hub**であることにある。2024-2025 を通じた Solana 全体の復調と、perp exposure を追加する Solana-native applications のデフォルト統合先であることから恩恵を受けている。DRIFT token は2024にローンチ。詳細: Solana 固有の文脈については[[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]]へクロスリンク。

### GMX v1 （Arbitrum + Avalanche、2021-）

**原型的なプール・カウンターパーティ型 perp DEX**。単一のマルチアセット pool（**GLP**、BTC/ETH/USDC/stables を保有）がすべてのトレーダーの相手方となる。トレーダーの PnL は GLP holder の損失 / 利益である。価格は Chainlink oracles と内部 keepers から来る。**決済資産**: pool assets（BTC/ETH/USDC）。**最大レバレッジ**: 主要銘柄で50x。**対応資産**: GLP pool がサポートする資産に限定（BTC、ETH、LINK、UNI + 少数）。**MEV 保護**: 低-中（oracle update timing が既知の front-running surfaces を作る。v2で対処）。**ガス経済性**: Arbitrum または Avalanche L1/L2 gas（低い）。**手数料階層**: 0.1% open/close + dynamic borrow rate。**日次出来高レンジ**: $0.05-0.2B（2022-2023の $0.5-1B ピークから低下）。**市場シェア**: かつて2022-2023 perp DEX 首位。現在は中堅。

GMX v1 は、多くの fork（Gains Network、Vela、その他）が模倣した「普遍的カウンターパーティとしての GLP」パターンを作った。構造的な課題は**toxic flow**である。oracle update が実市場価格に遅れると、高度なトレーダーは GLP pool から体系的に価値を引き出せる。

### GMX v2 （Arbitrum + Avalanche、2023-）

v1の toxic-flow 問題に対応するアーキテクチャ再構築。単一 GLP の代わりに**市場別の分離プール（GM pools）**を導入し、long/short skew のバランスを取る **funding rates** と、改善された oracle-pricing mechanics を備える。**決済資産**: 市場別の backing asset。**最大レバレッジ**: 主要銘柄で100x（特定市場）。**対応資産**: per-market pools により拡大中。**MEV 保護**: 中（v1より改善）。**ガス経済性**: Arbitrum gas（低い）。**手数料階層**: 0.04-0.07% open/close + funding。**日次出来高レンジ**: $0.1-0.3B。**市場シェア**: top-10 perp DEX。

v2 は、Hyperliquid と dYdX v4 がシェアを奪った後も GMX が存在感を保とうとする試みである。per-market pool モデルは、GLP の単純さをより良いリスク分離と引き換えにするが、その代償として LP capital が市場ごとに分断される。

### Synthetix Perps（Optimism + Base、2022-）

**Synthetix synth-debt-pool model**上に構築された perps。SNX staker の debt pool が counterparty liquidity を提供し、oracle pricing（Pyth）が execution price を与え、トレーダーは pool に対して leveraged positions を取る。**Perps v2**（2023）は改善された oracle integration を追加した。**Perps v3**（2024）はアーキテクチャをモジュール化し、front-ends が Synthetix backend に接続できるようにした。**決済資産**: sUSD。**最大レバレッジ**: 主要銘柄で50x。**対応資産**: 40+ ペア（oracle availability により制限）。**MEV 保護**: 中（oracle-based pricing には timing-attack surfaces があるが、Pyth pull-oracle mechanism により対処）。**ガス経済性**: Optimism / Base L2 gas（低い）。**手数料階層**: 市場ごとに maker 0.02% / taker 0.05-0.10%。**日次出来高レンジ**: $0.05-0.2B（多くは Kwenta 経由。下記参照）。**市場シェア**: top-15。

Synthetix の重要性は、消費者向け DEX として直接競争するというより、複数の front-ends（Kwenta、Polynomial、Lyra 隣接プロダクト）がその上に構築する**backend infrastructure**である点にある。

### Kwenta（Optimism + Base、2022-）

Synthetix Perps backend 上に構築された、アクティブトレーダー向けの front-end DEX。KWENTA token holders は stakers と手数料を共有する。**決済資産**: sUSD（Synthetix から継承）。**最大レバレッジ**: 50x。**対応資産**: Synthetix Perps と同じ（40+）。**MEV 保護**: 中。**ガス経済性**: Optimism / Base gas。**手数料階層**: Synthetix backend と同じ + Kwenta front-end fee。**日次出来高レンジ**: $0.02-0.1B。**市場シェア**: top-20。

Kwenta の存在は、Synthetix v3 が設計した**front-end / backend 分離**を示している。消費者向けブランドは liquidity backend から切り離され、複数の front-ends が単一の liquidity pool を共有しながら UX で競争できる。

### Aark Digital（Arbitrum、2023-）

GMX に似た **vault-shareholder counterparty design**を備える LP-pool model の perp DEX。ただし risk-management は異なり、資本効率の高い market-making に重点を置く。**決済資産**: USDC。**最大レバレッジ**: 主要銘柄で20x。**対応資産**: 20-30 ペア。**MEV 保護**: 中。**ガス経済性**: Arbitrum gas。**手数料階層**: 0.05-0.10%。**日次出来高レンジ**: $0.01-0.05B。**市場シェア**: top-30 niche。

Aark は、GMX、GNS、類似プロトコルがすでにパターンを確立した pool-counterparty segment で競争する第2波の参入者である。差別化は LP risk-management mechanics と capital efficiency にある。

### Aevo（OP Stack appchain、2024-）

Ribbon Finance の options product の後継である Aevo は、カスタム OP Stack appchain 上で **CLOB-based options + perp venue**を運営する。Perps は options book と infrastructure を共有し、cross-product margin を可能にする。**決済資産**: USDC。**最大レバレッジ**: 主要銘柄で20x。**対応資産**: 40+ ペア（perps + options）。**MEV 保護**: 高い（オフチェーン matching とオンチェーン settlement）。**ガス経済性**: OP Stack L2 gas（低い）。**手数料階層**: maker 0.03% / taker 0.05%。**日次出来高レンジ**: $0.05-0.2B。**市場シェア**: top-15 perp + オンチェーン options で支配的。

Aevo の重要性は、純粋な perp DEX ではなく、**options-and-perps integrated venue**である点にある。これは leveraged directional と並んで volatility / hedging-oriented flows を扱う、異なる trader segment に対応する。

### Apex Protocol（StarkEx + zkLink、2021-）

StarkEx（旧 dYdX v3と似たアーキテクチャ基盤）と、クロスチェーン liquidity 用の zkLink extensions を使う perp DEX。**決済資産**: USDC。**最大レバレッジ**: 50x。**対応資産**: 50+ ペア。**MEV 保護**: 中-高（オフチェーン matching）。**ガス経済性**: トレーダーはガスを支払わない（matching はオフチェーン）。入出金には underlying chain gas を使う。**手数料階層**: maker 0.02% / taker 0.05%。**日次出来高レンジ**: $0.05-0.2B。**市場シェア**: Asia retail で強い存在感を持つ top-15, 。

Apex の差別化は、**強い Asia retail distribution**（大きな非英語圏コミュニティの存在と CEX-style UX）であり、Cosmos 移行前に dYdX v3 が担っていた trader segment をめぐって競争している。

## 大型比較マトリクス表

| DEX | チェーン / 基盤 | 流動性モデル | 決済資産 | 最大レバレッジ | 対応資産 | 手数料階層（maker/taker） | MEV 保護 | トレーダーのガス経済性 | 日次出来高レンジ（USD） | Perp DEX 市場シェア帯 |
|---|---|---|---|---|---|---|---|---|---|---|
| **dYdX v3** | StarkEx L2 （Ethereum） | CLOB（オフチェーン match） | USDC | 20x | 約40 ペア | 0.02% / 0.05% | 高 | なし（オフチェーン） | $0.5-2B（2022-2023） | 2022 には #1 だった |
| **dYdX v4** | Cosmos appchain（dYdX Chain） | CLOB（バリデータ matching、完全オンチェーン） | USDC | 20x | 40+ | 0.02% / 0.05% | 高 | バリデータ・ネットワーク gas（cents） | $0.3-1B | top-3  |
| **Hyperliquid** | Hyperliquid L1 （HyperBFT + HyperEVM） | CLOB（完全オンチェーン） | USDC（bridged Arb） | 50x | 100+ | rebate / 0.025-0.05% | 高 | HyperEVM gas（sub-cent） | $1-5B | **出来高で #1 ** |
| **Vertex** | Arbitrum | CLOB + AMM hybrid | USDC | 10x | 30-50  | 0.0% / 0.02-0.04% | 中-高 | Arbitrum gas（sub-cent） | $0.1-0.4B | top-10  |
| **Drift** | Solana | vAMM + oracle + JIT auction | USDC | 20x | 40+ | 0.01% / 0.10% | 中 | Solana fees（sub-cent） | $0.1-0.3B | top-10  / Solana #1  |
| **GMX v1** | Arbitrum + Avalanche | GLP pool-counterparty + oracle | pool assets | 50x | 限定的（BTC/ETH/LINK/UNI+） | 0.1% + borrow | 低-中 | Arb/Avax gas | $0.05-0.2B | 中堅 |
| **GMX v2** | Arbitrum + Avalanche | Per-market GM pools + funding | per-market | 100x | 拡大中 | 0.04-0.07% + funding | 中 | Arb gas（低） | $0.1-0.3B | top-10  |
| **Synthetix Perps** | Optimism + Base | Synth-debt-pool + Pyth oracle | sUSD | 50x | 40+ | 0.02% / 0.05-0.10% | 中 | OP / Base gas（低） | $0.05-0.2B | top-15 backend |
| **Kwenta** | Optimism + Base | Synthetix backend（front-end DEX） | sUSD | 50x | 40+ | 同一 + front-end fee | 中 | OP / Base gas | $0.02-0.1B | top-20 front-end |
| **Aark Digital** | Arbitrum | LP-vault counterparty | USDC | 20x | 20-30  | 0.05-0.10% | 中 | Arb gas | $0.01-0.05B | top-30 niche |
| **Aevo** | OP Stack appchain | CLOB（options + perps shared book） | USDC | 20x | 40+（perps + options） | 0.03% / 0.05% | 高 | OP Stack gas（低） | $0.05-0.2B | top-15 + options leader |
| **Apex Protocol** | StarkEx + zkLink | CLOB（オフチェーン match） | USDC | 50x | 50+ | 0.02% / 0.05% | 中-高 | なし（オフチェーン match） | $0.05-0.2B | top-15, 、Asia retail に強い |

## アーキテクチャ横断軸: CLOB vs vAMM vs hybrid

上のマトリクスには11 の取引所が並ぶが、手数料プロファイル、MEV 耐性、LP 経済性を決める**3つのアーキテクチャ・ファミリー**に整理できる。

### CLOB ファミリー（完全オンチェーンまたはハイブリッド match）

- **Hyperliquid**: カスタム L1
上の完全オンチェーン CLOB
- **dYdX v4**: Cosmos appchain 上の完全オンチェーン CLOB（validator-matched）
- **dYdX v3**: オフチェーン match + オンチェーン settlement（StarkEx）
- **Apex**: オフチェーン match + オンチェーン settlement（StarkEx）
- **Aevo**: オフチェーン match + オンチェーン settlement（OP Stack appchain）
- **Vertex**: ハイブリッド CLOB + AMM fallback

**CLOB に合うトレーダー**: high-frequency / professional traders、limit / stop / IOC / FOK order types を必要とするトレーダー、大口での slippage に敏感なトレーダー、主要銘柄で狭い bid-ask spreads を必要とするトレーダー。手数料経済性は通常、**maker rebates + taker fees**（CEX arbitrage traders に馴染みのある形）である。CLOB ファミリーは2024-2026 を通じて積極的にシェアを獲得し、Hyperliquid が先導した。

### vAMM / プール・カウンターパーティ・ファミリー

- **GMX v1**: GLP 単一マルチアセット pool
- **GMX v2**: per-market GM pools
- **Aark Digital**: LP-vault counterparty（GMX 系譜）
- **Drift**: vAMM + JIT auction（Solana）
- **Synthetix Perps**: synth-debt-pool

**vAMM に合うトレーダー**: oracle-pricing slippage models に慣れたトレーダー、「全員が oracle mid で取引する」semantics を好むトレーダー、CLOB depth が制約になりにくい小規模トレーダー。**LP 側の経済性が支配的**であり、LP / debt-pool holder がすべての trader PnL の構造的な相手方になる。これは spot AMM における受動的 LP'ing とは異なる risk-return profile を作る。このモデルには構造的な toxic-flow 脆弱性があり、v2 世代（GMX v2, 、Drift v2）はその緩和に注力している。

### 共有 backend 上の front-end ファミリー

- **Kwenta**: Synthetix Perps backend 上の front-end

**重要性**: front-end / backend 分離は、Synthetix v3 が意図的な platform play として設計したものである。他のプロトコル（Polynomial、Lyra 隣接）も同じモデルを追う。front-end-only DEX は、同じ underlying liquidity pool を共有しながら、UX、fee-share、trader segment targeting で競争する。

## トレーダーセグメント適合

アーキテクチャに加えて、perp DEX は**トレーダーセグメント適合**でも差別化される。

| トレーダーセグメント | 最適な取引所 | 理由 |
|---|---|---|
| Professional / HF arbitrage | Hyperliquid, dYdX v4  | CLOB depth、低レイテンシ、MEV 保護 |
| 高レバレッジ degens | Hyperliquid（50x）、GMX v2 （100x）、Apex（50x）、Drift（20x） | レバレッジ上限が重要 |
| ロングテール資産トレーダー | Hyperliquid（100+ ペア）、Drift、Aevo | 対応資産の広さ |
| LST / restaking collateral | （チェーン固有）Drift は JitoSOL を受け入れる。一部 EVM 取引所は stETH を受け入れる | LST-as-margin economics |
| Solana-native | Drift | Solana エコシステムの厚み |
| Options + perps cross-margin | Aevo | 統合 options book |
| Multi-product（spot + perp + money market） | Vertex | 統合 margin account |
| Asia retail（非英語優先 UX） | Apex, Hyperliquid | Distribution + UX choices |
| Institutional / DeFi-native funds | dYdX v4, , Hyperliquid | 分散性 + 監査可能性 |

LST / restaking collateral の行は、取引所横断の LST-as-collateral mechanics について[[exchanges/liquid-staking-restaking-cex-exposure|liquid-staking / restaking CEX exposure]]につながる。

## 境界事例

- **CEX equivalent かどうか**: Hyperliquid の order-book latency と主要ペアの depth は、CEX（Binance perp、Bybit perp）に近い比較可能性を持つ。ただし、規制上の立場はまったく異なる。Hyperliquid は米国トレーダーを geo-block し、centralised KYC を運営せず、管轄法上の licence なしで運営されている。CEX に匹敵する UX を、CEX と同等の規制上の立場と混同してはならない。
- **dYdX v3 対 v4 を1つのプロダクトとして読むか、2つとして読むか**: アーキテクチャ再構築は十分に大規模（異なるチェーン、異なる consensus、異なる token utility）だったため、バージョンをまたぐ1つのプロダクトというより、**同じチームによる2つのプロダクト**として読むのが最も適切である。マトリクスではそれぞれに独立した行を与えている。
- **GMX v1 対 v2 を1つのプロダクトとして読むか、2つとして読むか**: dYdX と同様、GMX v1 （GLP single-pool）と v2 （per-market GM pools + funding）は構造的に十分異なるため、別行に値する。2026 時点で両方とも live であり、LP profiles は異なる。
- **Synthetix Perps と Kwenta の二重計上**: Kwenta は Synthetix Perps の backend 上の front-end である。Kwenta の日次出来高は、注文が Synthetix backend にルーティングされるため、大部分が **Synthetix Perps の出来高にも計上される**。クロスプロトコルの出来高報告（例: DefiLlama derivatives）では二重計上されることがある。マトリクスは明確化のため行を分けるが、Synthetix-stack flow の総量を計算する読者は集計時に調整すべきである。
- **Solana 上の Drift と EVM 上の他取引所**: Solana の account-model と block-leader architecture は、MEV dynamics、slot-time guarantees、gas economics を EVM 類推とはきれいに対応しない形で変える。Drift の MEV protection と EVM peers の比較には、MEV 保護を単一軸として扱うのではなく、Solana 固有の JIT-auction model を読む必要がある。
- **「perp DEX」ではなく「options + perps」としての Aevo**: Aevo の経済的アイデンティティは integrated options-and-perp venue である。純粋な perp DEX として扱うと、同じ margin account を使う options 側の flow を過小評価する。マトリクスには Aevo を含めるが、options book が主要な差別化要素であることを明示している。
- **Hyperliquid HYPE token TGE economics**: Hyperliquid の2024-11 token launch は、pre-sale なしで emission が retroactive users に配布され、dYdX、GMX、Drift、Synthetix の token economics とは構造的に異なる。token 側の比較には別分析が必要である（本マトリクスの volume / fee axes では扱わない）。
- **Cross-chain settlement on/off-ramp**: 複数の perp DEX は USDC を決済資産に使うが、オンランプ route は異なる（Arbitrum-native、Solana-native、Cosmos appchain、OP Stack）。マトリクスの settlement-asset 行は canonical asset を記録するが、実際の on-ramp UX は別次元である。bridge 側の詳細については[[exchanges/cross-chain-bridge-cex-deposit-withdrawal|cross-chain bridge × CEX deposit/withdrawal]]を参照。
- **出来高数値は point estimates ではなく概算レンジ**: Perp DEX の日次出来高は市場ボラティリティにより5-10x 変動する。「daily volume range」列は、2024-2026 の観測に基づく active-market の妥当なレンジを示す。現在時点の数値は [DefiLlama derivatives](https://defillama.com/derivatives) を確認すべきである。
- **日本と米国の規制エクスポージャー**: このマトリクスの perp DEX のいずれも、JP 側 native-token listing の[[exchanges/jvcea-whitelist-token-listing|JVCEA WhiteList]]には載っていないようであり、多くは CFTC / SEC との関与を受けて米国トレーダーを geo-block している。このマトリクスを[[exchanges/japan-cex-parent-fg-adjacency-matrix|JP CEX parent FG adjacency matrix]]のような JP CEX equivalent と照合すると、オンチェーン perp DEX と日本国内 VASP の間の regulatory-licensing gap が浮かび上がる。

## 決済資産の横比較

| 決済資産 | 使用者 | 含意 |
|---|---|---|
| USDC | dYdX v3, , dYdX v4, , Hyperliquid, Vertex, Drift, GMX（GLP の USDC slice）, Aark, Aevo, Apex | 現代的なデフォルト stablecoin。L2s と Solana にまたがる USDC のオンチェーン availability は十分であり、**Circle counterparty / issuance risk がマトリクスの大半で共有される** |
| sUSD | Synthetix Perps, Kwenta | SNX debt-pool に裏付けられた Synthetix-native algorithmic stable。**USDC とは異なる risk profile**を持ち、Circle-issued ではない |
| pool assets（BTC / ETH / LINK / UNI / USDC） | GMX v1  | GLP pool composition が事実上の settlement basket。LP level で**マルチアセット risk exposure**を持つ |
| per-market backing asset | GMX v2  | Per-market GM pool composition。**市場別に risk isolated** |

USDC が支配的な決済環境は構造的に重要である。これは **Circle issuance / regulatory / reserve-management risk** を、DEX 横断のシステミック要因として集中させる。もし Circle が issuance disruption に直面すれば、マトリクス内の perp DEX 出来高の大半が同時に影響を受ける。これはオンチェーン・デリバティブにおける、過小評価されがちなシステミックリスク軸の1つである。

## チェーン基盤フットプリント要約

| チェーン / 基盤 | ホストする perp DEX | 累積 perp DEX シェアへの寄与 |
|---|---|---|
| Hyperliquid L1  | Hyperliquid | 非常に高い（単一取引所、支配的 market share） |
| Cosmos appchain（dYdX Chain） | dYdX v4  | 高い |
| Arbitrum | Vertex, GMX v1/v2, , Aark | 中-高（複数取引所） |
| Avalanche | GMX v1/v2  | 低-中 |
| Solana | Drift | 中（チェーン上の単一支配的取引所） |
| Optimism | Synthetix Perps, Kwenta | 低-中 |
| Base | Synthetix Perps（Base launch 後）, Kwenta | 低-中（成長中） |
| OP Stack appchain | Aevo | 低-中 |
| StarkEx L2  | dYdX v3 （legacy）, Apex | 低い（historical + Asia-retail niche） |
| zkLink | Apex（cross-chain extension） | 非常に低い |

チェーン基盤の分布は、2024-2025を通じて、**専用インフラ（Hyperliquid L1, 、dYdX Cosmos appchain、OP Stack appchains）**が、**共有 L2 インフラ（Arbitrum、Optimism、Base）**よりシェアを獲得していることを示す。[[exchanges/native-dex-flip-incumbent-pattern|native DEX flip-incumbent pattern]]で記録された chain-native flip pattern がここにも当てはまる。自らのチェーンを管理する取引所は、chain congestion と shared-MEV exposure により chain-tenant venues が失う出来高を取り込む。

## アーキテクチャ進化タイムライン

| 年 | 出来事 | アーキテクチャ上の重要性 |
|---|---|---|
| 2018-08  | dYdX margin trading（前身）ローンチ | レバレッジ付きの初期非デリバティブ DEX 実験 |
| 2020  | Perpetual Protocol v1 （xDai 上の vAMM） | 大規模な初の vAMM perp（GMX 系譜の前身） |
| 2021-04  | dYdX v3 が StarkEx L2 上でローンチ | 大規模な初の CLOB perp DEX。CEX に匹敵する UX |
| 2021-08  | GMX が Arbitrum でローンチ | GLP pool-counterparty pattern の確立 |
| 2021-09  | Drift v1 が Solana でローンチ | Solana-native perp DEX（当初は純粋な vAMM） |
| 2022  | Synthetix Perps v1  + Kwenta ローンチ | Synth-debt-pool perp model、front-end/backend split の開始 |
| 2023-06  | dYdX v4  mainnet on Cosmos | 初の完全オンチェーン CLOB perp DEX |
| 2023-08  | GMX v2 ローンチ | Per-market GM pools + funding model |
| 2023-Q3  | Vertex Protocol ローンチ | Multi-product margin account を備えた hybrid CLOB+AMM |
| 2024-Q1  | Hyperliquid mainnet maturation | カスタム L1 完全オンチェーン CLOB がシェアを獲得 |
| 2024-Q2  | Aevo が OP Stack appchain 上でローンチ | Options + perps 統合 CLOB venue |
| 2024-11  | Hyperliquid HYPE TGE | No-pre-sale、retroactive-users への emission distribution |
| 2025  | Cross-chain perp aggregator の登場 | Vertex Edge、intent-based perp routing 実験 |

軌跡は、2024-2025 を通じて**アーキテクチャ上は CLOB が勝っている**ことを示す（Hyperliquid + dYdX v4 が出来高を先導）。一方、**pool-counterparty / vAMM models は特定の位置づけで niche を維持**している（Solana 上の Drift、高レバレッジ isolated markets 向けの GMX v2 ）。次のアーキテクチャ上の転換点は、トレーダーが bridge UX なしに最良の流動性を持つチェーンで約定できる **intent-based cross-chain perp routing** である可能性がある。ただし2026時点ではまだ大規模化していない。

## 手数料経済性要約

実務的な fee take rate 比較（rebates と tier discounts 前の taker 側）:

| DEX | 標準 taker fee | Funding mechanism | 1x position の実効年率コスト |
|---|---|---|---|
| Hyperliquid | 0.025-0.05% | Funding rate は skew とともに変動 | funding に依存（変動大） |
| dYdX v4  | 0.05% | Funding rate は変動 | funding に依存 |
| dYdX v3  | 0.05% | Funding rate は変動 | funding に依存 |
| Vertex | 0.02-0.04% | Funding rate | 低い fee + funding |
| Drift | 0.10% | Funding rate | 中程度の fee + funding |
| GMX v1  | 0.10% open + 0.10% close | Borrow rate（継続的、0-sum ではない） | より高いコスト。borrow は構造的に正 |
| GMX v2  | 0.04-0.07% open + close | Funding rate | 中程度 |
| Synthetix Perps | 0.05-0.10%（市場依存） | Funding rate | 中程度 |
| Kwenta | 同一 + front-end | Funding rate | 中-高 |
| Aark | 0.05-0.10% | Funding | 中程度 |
| Aevo | 0.05% | Funding | 低-中 |
| Apex | 0.05% | Funding | 低-中 |

**重要な経済的差異**: GMX v1の borrow-rate model は、funding-rate models が **longs と shorts の間で zero-sum**であるのとは異なり、**トレーダーにとって構造的にコスト正**である（LP が継続的 borrow を得る）。このため GMX v1 は長期保有ポジションでは魅力が低く、短期の方向性ベットではより魅力的になりやすい。一方、funding-rate venues は funding direction によっては長期保有ポジションで安くなり得る。取引所横断比較には、fee + funding/borrow stack の理解が不可欠である。

## 関連項目

- [[exchanges/INDEX]]
- [[exchanges/global-perp-dex-five-comparison]]
- [[exchanges/global-dex-major-five-comparison]]
- [[exchanges/global-cex-top10-comparison]]
- [[exchanges/native-dex-flip-incumbent-pattern]]
- [[exchanges/solana-ecosystem-dex-comparison]]
- [[exchanges/cross-chain-bridge-cex-deposit-withdrawal]]
- [[exchanges/amm-design-evolution]]
- [[exchanges/liquid-staking-restaking-cex-exposure]]
- [[exchanges/cex-matching-engine-wallet-architecture]]
- [[exchanges/global-cex-prime-brokerage-layer]]
- [[exchanges/japan-cex-parent-fg-adjacency-matrix]]
- [[systems/cross-chain-five-pole-comparison-matrix]]
- [[systems/INDEX]]
- [[exchanges/jvcea-whitelist-token-listing]]

## 出典

- DefiLlama Derivatives dashboard（出来高、市場シェア）: https://defillama.com/derivatives
- DefiLlama Chains: https://defillama.com/chains
- Hyperliquid product page: https://app.hyperliquid.xyz/
- dYdX product page: https://dydx.exchange/
- GMX product page: https://gmx.io/
- Vertex Protocol: https://vertexprotocol.com/
- Drift Protocol: https://drift.trade/
- Synthetix: https://synthetix.io/
- Kwenta: https://kwenta.io/
- Aark Digital: https://aark.digital/
- Aevo: https://www.aevo.xyz/
- Apex Protocol: https://pro.apex.exchange/
- 出来高と市場シェアの概算は、DefiLlama derivatives と公開 dashboards（Dune、公開 team disclosures）を相互参照した
