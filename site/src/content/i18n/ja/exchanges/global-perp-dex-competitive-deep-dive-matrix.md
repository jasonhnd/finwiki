---
source: exchanges/global-perp-dex-competitive-deep-dive-matrix
source_hash: 857f5528a3e936e2
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "グローバル perp DEX 競争環境の詳細比較マトリクス"
translated_at: 2026-07-29T12:23:49.000Z
---
# グローバル perp DEX 競争環境の詳細比較マトリクス

## 要約

Perpetual-futures DEX には、CLOB、vAMM / pool-counterparty、hybrid / oracle-pricing という構造の異なる流動性モデルがある。本項目は dYdX v3 / v4 や GMX v1 / v2 を含む取引所・version の architecture を比較し、手数料、leverage、取扱市場、決済 parameter、出来高、market share は固定しない。これらの live field は下記の公式 product page で確認する。[[exchanges/global-dex-major-five-comparison|global spot DEX major-5 comparison]] と [[exchanges/native-dex-flip-incumbent-pattern|native-chain-DEX flip-incumbent pattern]] も参照する。

## ウィキ上の位置づけ

これは[[exchanges/INDEX|exchanges index]]配下に置かれる perp DEX の詳細比較マトリクスである。本稿が拡張する前身である[[exchanges/global-perp-dex-five-comparison|global perp DEX top 5 comparison]]、spot DEX の同業比較を扱う[[exchanges/global-dex-major-five-comparison|global DEX major five comparison]]、チェーンネイティブ対クロスチェーンの構造的視点を扱う[[exchanges/native-dex-flip-incumbent-pattern|native DEX flip-incumbent pattern]]、Drift に関係する Solana 側の詳細を扱う[[exchanges/solana-ecosystem-dex-comparison|Solana 経済圏 DEX comparison]]、決済資産のオンランプ / オフランプを扱う[[exchanges/cross-chain-bridge-cex-deposit-withdrawal|cross-chain bridge × CEX deposit/withdrawal]]、vAMM perps に関係する LP カウンターパーティ・モデルの歴史を扱う[[exchanges/amm-design-evolution|AMM design evolution]]、複数の perp DEX が margin として受け入れる担保側の LST / LRT ルートを扱う[[exchanges/liquid-staking-restaking-cex-exposure|liquid-staking / restaking CEX exposure]]、より広いチェーン環境を扱う[[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]、クロスチェーン・ルーティング面を扱う[[systems/INDEX|systems index]]とあわせて読む。

## このマトリクスが重要な理由

architecture は matching、settlement、oracle、LP counterparty、sequencing、bridge risk を左右する。そのため本マトリクスは設計境界と live parameter の公式確認入口を比較する。過去の fee、leverage、asset count、volume、market share だけから取引所を推奨しない。

## DEX別詳細

### dYdX v3 （StarkEx L2, 2021-2023）

歴史的な dYdX v3 は、custom StarkEx instance 上で off-chain order-book matching と on-chain settlement を組み合わせた。過去の settlement、leverage、market、fee schedule、gas path、activity は日付付き dYdX v3 資料で確認し、旧 parameter を現行値として扱わない。

v3 アーキテクチャには限界があった。(a) オフチェーン matching server への依存が信頼を中央集権化する、(b) DYDX token governance が protocol fees から切り離されていた（token holders へのネイティブ trading-fee accrual がない）、(c) StarkEx システムがチェーンレベルの拡張性を制約した。dYdX の戦略的回答が v4 への再構築である。次の行を参照。詳細: USDC 決済資産のオンランプ / オフランプについては[[exchanges/cross-chain-bridge-cex-deposit-withdrawal|cross-chain bridge × CEX deposit/withdrawal]]へクロスリンク。

### dYdX v4 （Cosmos appchain、2023-10 ローンチ）

dYdX v4 は CometBFT を使う Cosmos appchain の dYdX Chain に移り、order-book handling と settlement を validator architecture が調整する。現行 collateral、leverage、market、fee、gas、利用資格は live dYdX documentation で確認する。

v4 は v3 の matching-server model から validator-coordinated chain へ trust / operation boundary を変えた。現行の地域別利用資格は公式 terms で確認する。Cosmos appchain の文脈は [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] を参照する。

### Hyperliquid（Hyperliquid L1, 2023-）

Hyperliquid は purpose-built chain と on-chain order-book venue を使う。現行の settlement / bridge route、leverage、listed market、fee tier、execution cost、法域上の利用資格は live product documentation で確認する。

共有 L1 / L2 ではなく purpose-built chain 上で order book を運営する設計が主要な比較点である。日付付き計測なしに latency、spread、depth、首位を推定しない。[[exchanges/native-dex-flip-incumbent-pattern|native DEX flip-incumbent pattern]] も参照する。

### Vertex Protocol（Arbitrum、2023-）

Vertex は hybrid CLOB + AMM design と product type をまたぐ integrated margin account を案内する。現行 deployment、collateral、leverage、market、fee、execution path、availability は公式 documentation で確認する。

Vertex Edge（マルチチェーン展開）は、synced-orderbook アーキテクチャを通じて Arbitrum、Mantle、Sei、Base、Blast、その他のチェーンへ order book を拡張し、トレーダーを単一チェーンに強制せずに複数の L2s にまたがる流動性の獲得を試みる。詳細: ハイブリッド CLOB+AMM 系譜については[[exchanges/amm-design-evolution|AMM design evolution]]へクロスリンク。

### Drift Protocol（Solana、2021-）

Drift は vAMM、oracle pricing、JIT auction を組み合わせる Solana-native design を案内する。現行 collateral、leverage、market、fee、liquidation、execution、network-cost assumptions は live Drift documentation で確認する。

Solana 固有の sequencing、oracle、integration の文脈は [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]] を参照する。本項目は恒久的な ecosystem rank を断定しない。

### GMX v1 （Arbitrum + Avalanche、2021-）

GMX v1 は multi-asset GLP pool を trader counterparty とし、oracle / keeper に依存する。active pool composition、supported market、leverage、fee、funding / borrowing cost、deployment status は現行 GMX documentation で確認する。

GMX v1 は、多くの fork（Gains Network、Vela、その他）が模倣した「普遍的カウンターパーティとしての GLP」パターンを作った。構造的な課題は**toxic flow**である。oracle update が実市場価格に遅れると、高度なトレーダーは GLP pool から体系的に価値を引き出せる。

### GMX v2 （Arbitrum + Avalanche、2023-）

GMX v2 は single GLP model を per-market pool、funding mechanics、updated oracle handling に変更する。現行 backing asset、leverage、market、fee、funding、deployment は live GMX documentation で確認する。

per-market pool model は v1 に対して risk isolation と liquidity fragmentation の trade-off を変えるが、現行の競争順位を示すものではない。

### Synthetix Perps（Optimism + Base、2022-）

Synthetix Perps は debt-pool / oracle-based derivatives architecture を使い、front end が backend liquidity に接続する。active version、collateral、market、leverage、fee、settlement、oracle、deployment は現行 Synthetix documentation で確認する。

Synthetix の重要性は、消費者向け DEX として直接競争するというより、複数の front-ends（Kwenta、Polynomial、Lyra 隣接プロダクト）がその上に構築する**backend infrastructure**である点にある。

### Kwenta（Optimism + Base、2022-）

Kwenta は Synthetix Perps infrastructure 上の trading front end である。現行 backend version、supported market、collateral、leverage、fee、settlement、deployment は Kwenta / Synthetix documentation で確認する。

Kwenta の存在は、Synthetix v3 が設計した**front-end / backend 分離**を示している。消費者向けブランドは liquidity backend から切り離され、複数の front-ends が単一の liquidity pool を共有しながら UX で競争できる。

### Aark Digital（Arbitrum、2023-）

Aark は perpetual trading 向け LP-vault counterparty model を案内する。現行 collateral、market、leverage、fee、oracle / liquidation mechanics、deployment、availability は公式 documentation で確認する。

Aark は、GMX、GNS、類似プロトコルがすでにパターンを確立した pool-counterparty segment で競争する第2波の参入者である。差別化は LP risk-management mechanics と capital efficiency にある。

### Aevo（OP Stack appchain、2024-）

Aevo は appchain infrastructure と shared margin を使う CLOB-based options / perpetual venue を案内する。現行 market、collateral、leverage、fee、matching / settlement、deployment、eligibility は公式 documentation で確認する。

Aevo の重要性は、純粋な perp DEX ではなく、**options-and-perps integrated venue**である点にある。これは leveraged directional と並んで volatility / hedging-oriented flows を扱う、異なる trader segment に対応する。

### Apex Protocol（StarkEx + zkLink、2021-）

ApeX は validity-system / cross-chain component を使う order-book perpetual venue を案内する。現行 collateral、market、leverage、fee、matching / settlement、deposit route、eligibility は公式 documentation で確認する。

distribution と user-segment の主張には日付付き根拠が必要であり、本マトリクスの順位付けには使わない。

## 大型比較マトリクス表

出典: 下表の各取引所公式ページ。手数料、レバレッジ上限、取扱市場、日次出来高、シェアは頻繁に変わるため、この表は公開検証入口と各社が説明するアーキテクチャ範囲だけを記録する。

| 取引所 | 公式公開入口 | 確認するアーキテクチャ範囲 |
|---|---|---|
| **dYdX** | https://dydx.exchange/ | dYdX Chain の取引アーキテクチャ |
| **Hyperliquid** | https://app.hyperliquid.xyz/ | 専用チェーンと板取引 |
| **Vertex** | https://vertexprotocol.com/ | 現物・無期限先物の統合取引 |
| **Drift** | https://drift.trade/ | Solana ベースの取引プロトコル |
| **GMX** | https://gmx.io/ | プール型無期限先物商品 |
| **Synthetix** | https://synthetix.io/ | デリバティブ流動性基盤 |
| **Kwenta** | https://kwenta.io/ | 取引フロントエンドと対応市場 |
| **Aark Digital** | https://aark.digital/ | 無期限先物取引商品 |
| **Aevo** | https://www.aevo.xyz/ | オプション・無期限先物取引 |
| **ApeX** | https://pro.apex.exchange/ | 板取引型無期限先物 |

現在のレバレッジ、市場、手数料、決済資産はライブの公式資料で確認する。DefiLlama は時点付き外部ダッシュボードとして使い、固定ランキングには使わない。

## アーキテクチャ横断軸: CLOB vs vAMM vs hybrid

上のマトリクスには11 の取引所が並ぶが、手数料プロファイル、MEV 耐性、LP 経済性を決める**3つのアーキテクチャ・ファミリー**に整理できる。

### CLOB ファミリー（完全オンチェーンまたはハイブリッド match）

- **Hyperliquid**: カスタム L1
- **dYdX v4**: Cosmos appchain 上の完全オンチェーン CLOB（validator-matched）
- **dYdX v3**: オフチェーン match + オンチェーン決済（StarkEx）
- **Apex**: オフチェーン match + オンチェーン決済（StarkEx）
- **Aevo**: オフチェーン match + オンチェーン決済（OP Stack appchain）
- **Vertex**: ハイブリッド CLOB + AMM fallback

**CLOB に合うトレーダー**: order-book execution や特定の order type が必要な利用者は、各取引所の現行 order type、matching location、depth、fee schedule、法域上の利用資格を確認する。この architecture family は market-share ranking ではない。

### vAMM / プール・カウンターパーティ・ファミリー

- **GMX v1**: GLP 単一マルチアセット pool
- **GMX v2**: per-market GM pools
- **Aark Digital**: LP-vault counterparty（GMX 系譜）
- **Drift**: vAMM + JIT auction（Solana）
- **Synthetix Perps**: synth-debt-pool

**vAMM に合うトレーダー**: oracle-pricing slippage models に慣れたトレーダー、「全員が oracle mid で取引する」semantics を好むトレーダー、CLOB depth が制約になりにくい小規模トレーダー。**LP 側の経済性が支配的**であり、LP / debt-pool holder がすべての trader PnL の構造的な相手方になる。これは spot AMM における受動的 LP'ing とは異なる risk-return profile を作る。このモデルには構造的な toxic-flow 脆弱性があり、v2 世代（GMX v2,、Drift v2）はその緩和に注力している。

### 共有 backend 上の front-end ファミリー

- **Kwenta**: Synthetix Perps backend 上の front-end

**重要性**: front-end / backend 分離は、Synthetix v3 が意図的な platform play として設計したものである。他のプロトコル（Polynomial、Lyra 隣接）も同じモデルを追う。front-end-only DEX は、同じ underlying liquidity pool を共有しながら、UX、fee-share、trader segment targeting で競争する。

## トレーダー要件との適合

アーキテクチャに加えて、必要な注文種別、担保、決済チェーン、リスク管理を確認する。

出典: 上の主マトリクスから到達できる各取引所の現行公式製品資料。

| トレーダー要件 | 選定前に確認する事項 |
|---|---|
| 板取引 | 対応注文種別、マッチング場所、決済経路 |
| レバレッジ | 市場別の現行上限、証拠金方式、清算規則 |
| 担保 | 受入資産、掛目、出金制約 |
| クロスプロダクト証拠金 | 現物・無期限先物・オプションが担保を共有するか |
| チェーンアクセス | 入金経路、ブリッジ前提、ネットワーク費用 |
| 機関向け管理 | API、サブアカウント、権限、報告、法域上の利用資格 |

LST / restaking collateral の行は、取引所横断の LST-as-collateral mechanics について[[exchanges/liquid-staking-restaking-cex-exposure|liquid-staking / restaking CEX exposure]]につながる。

## 境界事例

- **CEX equivalent かどうか**: order-book UX だけでは latency、depth、KYC、licensing、customer protection の同等性を示せない。現行 product terms、計測、公式 register で各項目を独立確認する。
- **dYdX v3 対 v4 を1つのプロダクトとして読むか、2つとして読むか**: アーキテクチャ再構築は十分に大規模（異なるチェーン、異なる consensus、異なる token utility）だったため、バージョンをまたぐ1つのプロダクトというより、**同じチームによる2つのプロダクト**として読むのが最も適切である。マトリクスではそれぞれに独立した行を与えている。
- **GMX v1 対 v2 を1つのプロダクトとして読むか、2つとして読むか**: GMX v1 （GLP single-pool）と v2 （per-market pool + funding）は構造的に異なるため、別行にする。各 version の live status は現行 documentation で確認する。
- **Synthetix Perps と Kwenta の二重計上**: Kwenta は Synthetix infrastructure 上の front end なので、外部 activity dataset が重複する可能性がある。集計前に provider methodology を確認し、本マトリクスは combined volume を掲載しない。
- **Solana 上の Drift と EVM 上の他取引所**: Solana の account-model と block-leader architecture は、MEV dynamics、slot-time guarantees、gas economics を EVM 類推とはきれいに対応しない形で変える。Drift の MEV protection と EVM peers の比較には、MEV 保護を単一軸として扱うのではなく、Solana 固有の JIT-auction model を読む必要がある。
- **「perp DEX」ではなく「options + perps」としての Aevo**: Aevo の経済的アイデンティティは integrated options-and-perp venue である。純粋な perp DEX として扱うと、同じ margin account を使う options 側の flow を過小評価する。マトリクスには Aevo を含めるが、options book が主要な差別化要素であることを明示している。
- **Token economics**: token issuance、allocation、fee linkage、governance は本マトリクスの対象外。比較には日付付き issuer / governance material を使う。
- **Cross-chain 決済 on/off-ramp**: 複数の perp DEX は USDC を決済資産に使うが、オンランプ route は異なる（Arbitrum-native、Solana-native、Cosmos appchain、OP Stack）。マトリクスの 決済-asset 行は canonical asset を記録するが、実際の on-ramp UX は別次元である。bridge 側の詳細については[[exchanges/cross-chain-bridge-cex-deposit-withdrawal|cross-chain bridge × CEX deposit/withdrawal]]を参照。
- **出来高 methodology**: 本マトリクスは固定 volume range と ranking を除外する。[DefiLlama derivatives](https://defillama.com/derivatives) を使う場合は timestamp、venue / version mapping、aggregation method を記録する。
- **日本と米国の規制エクスポージャー**: token-list status、product eligibility、geo-restriction、provider registration は現行公式一覧と terms で別々に確認する。[[exchanges/jvcea-whitelist-token-listing|JVCEA WhiteList]] と [[exchanges/japan-cex-parent-fg-adjacency-matrix|JP CEX parent FG adjacency matrix]] も参照する。

## 決済資産の横比較

出典: 上の主マトリクスから到達できる各取引所の現行公式製品資料。

| 決済設計 | 確認する事項 |
|---|---|
| ステーブルコイン証拠金 | 発行者、ネイティブ／ブリッジ版、償還経路、デペッグ管理 |
| プロトコル固有の合成資産 | 担保モデル、オラクル、債務プール、償還 |
| プール資産決済 | プール構成、トレーダーと LP の相手方関係、出金規則 |
| 市場別裏付資産 | リスク隔離境界、適格裏付資産、資金調達方式 |

旧バージョンから現在の取引所エクスポージャーを推定せず、利用時点の稼働市場とチェーンを確認する。

## チェーン基盤フットプリント要約

出典: 上の主マトリクスにある公式取引所ページ。

| デプロイ形態 | 現行資料で確認する例 | 主な運用上の質問 |
|---|---|---|
| 専用チェーン | Hyperliquid、dYdX Chain | バリデータ、シーケンシング、ブリッジ前提 |
| 共有 L1 / L2 | Arbitrum、Avalanche、Solana、Optimism、Base | 混雑、オラクル、決済への共有依存 |
| appchain / validity system | OP Stack appchain、StarkEx、zkLink | 運営者、データ可用性、退出経路 |

これはアーキテクチャ地図であり、市場シェアランキングではない。

## アーキテクチャ進化タイムライン

出典: 主マトリクスの各公式取引所リンクから確認できる日付付きリリースまたは資料。

| 変更種別 | 出来事を追加する前に必要な証拠 |
|---|---|
| メインネット／製品ローンチ | 日付付き公式発表と稼働中の資料 |
| バージョン移行 | 旧・新アーキテクチャの境界と移行状態 |
| チェーン展開 | 公式展開発表とライブ製品経路 |
| トークン／ガバナンス変更 | 公式提案または発行者発表 |

限定された比較根拠なしに「初」などの序列や次のアーキテクチャ予測を記載しない。

## 手数料経済性の確認

出典: 主マトリクスの各公式リンクから到達できるライブ手数料表と市場規則。

| コスト項目 | 見積時に記録する事項 |
|---|---|
| Maker / taker 手数料 | アカウント階層、市場、リベート資格 |
| Funding | 現行レート、間隔、方向、計算基礎 |
| Borrow / pool 手数料 | 稼働率または偏りの算式、計上間隔 |
| Gas / execution | チェーン費用、keeper 費用、ブリッジ費用 |
| 清算 | 維持証拠金、ペナルティ、保険基金の仕組み |

ポジション、保有期間、funding 経路、時刻を示さずに固定の年率コスト順位を公開しない。

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
- 時点付き出来高を任意確認する外部 dashboard: https://defillama.com/derivatives
