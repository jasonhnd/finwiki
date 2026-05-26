---
title: Restaking と AVS 全景マトリクス · EigenLayer vs Symbiotic vs Karak vs Mellow vs EtherFi vs Lido CSM
aliases: [restaking avs landscape matrix, eigenlayer vs symbiotic vs karak matrix, restaking infrastructure comparison 2026, avs landscape eigenda hyperlane espresso lagrange witness, lrt etherfi mellow lido csm comparison]
domain: systems
created: 2026-05-25
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-25
confidence: likely
tags: [systems, matrix, restaking, eigenlayer, symbiotic, karak, mellow, etherfi, lido, csm, avs, eigenda, hyperlane, espresso, lagrange, witness-chain, lrt]
status: active
sources:
  - https://docs.eigenlayer.xyz/
  - https://docs.symbiotic.fi/
  - https://docs.karak.network/
  - https://docs.mellow.finance/
  - https://docs.ether.fi/
  - https://docs.lido.fi/
  - https://docs.eigenda.xyz/
  - https://docs.hyperlane.xyz/
  - https://docs.espressosys.com/
  - https://docs.lagrange.dev/
  - https://docs.witnesschain.com/
  - https://defillama.com/protocols/Restaking
  - https://l2beat.com/data-availability/summary
---

# Restaking と AVS 全景マトリクス · EigenLayer vs Symbiotic vs Karak vs Mellow vs EtherFi vs Lido CSM

## TL;DR

- 6 つの restaking インフラを 2026-Q2 における **TVL · restaking model · slashing · AVS economics · correlation risk · operator concentration · governance · audit · Lido overlap · regulatory exposure** の 10 軸で比較
- **Restaking model の 3 象限**:**Operator-delegated**(EigenLayer · Karak · Symbiotic)· **LRT vault aggregator**(EtherFi · Mellow · Renzo)· **Native protocol restaking**(Lido CSM · LST 自身が restake hook を提供)
- **TVL 2026-Q2 推定**:EigenLayer ~$14B · Symbiotic ~$3.2B · EtherFi LRT(eETH)~$5.5B · Mellow LRT ~$1.8B · Karak ~$1.0B · Lido CSM ~$280M(early)
- **AVS landscape 5 大**:**EigenDA**(~$120M revenue 2026 estimate · 複数 ZK rollup ユーザー)· **Hyperlane**(ISM で EigenLayer/Symbiotic を借用)· **Espresso**(shared sequencer · Polygon/zkSync/Caldera 等が接続)· **Lagrange**(coprocessor + state proof)· **Witness Chain**(POI · 物理インフラ検証)
- 2025 年 EigenLayer slashing が正式有効化 · 実 slash イベント ≤ 5 件 · 累計 < $5M(早期懸念をはるかに下回る)· ただし correlation risk(rehypothecation)はいまだ十分に価格付けされていない
- **Lido stake 重複率**:EigenLayer の ~25% TVL が stETH restaking 由来 · Symbiotic では ~40% · Mellow は完全に LST 集合ベース —— Lido は restaking エコシステムの「基層流動性源」
- ルーティング:[[systems/eigenlayer-overview]](コア)· [[exchanges/liquid-staking-restaking-cex-exposure]](LRT CEX エクスポージャー)· [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 · 2048 ETH validator]](機関 staking 経路)

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/eigenlayer-overview|EigenLayer overview]] as the canonical anchor, [[systems/eigenlayer-avs-mechanism|EigenLayer AVS mechanism · Operator · Slashing · EIGEN 仲裁]] for the slashing + AVS economics depth, and [[systems/eigenlayer-l1-bootstrapping|EigenLayer L1 bootstrapping]] for how new chains use restaking to launch security. For the validator economics meta-context, see [[systems/bft-validator-economy-overview|BFT validator economics overview]] and [[systems/bft-validator-economy-four-variables|BFT validator economy four variables]]. For consensus models that restaking touches, see [[systems/threshold-bft-consensus-rust-implementations|threshold BFT consensus Rust implementations]] and [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT]]. For the EIP-7251 institutional staking lane that interacts with restaking economics, see [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 · institutional staking]]. For CEX exposure to LRT and the "liquid staking → restaking → CEX leverage" stack, see [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャー]]. Cross-link to [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] when reasoning about Hyperlane / LayerZero / Wormhole as AVS consumers.

## Why this matrix matters

Restaking は 2023-2024 年において EigenLayer 単独プレイヤーの「ETH crypto-economic security marketplace」概念だった。2024-2025 年に複数プロトコル競合へと進化 —— Symbiotic はマルチアセット restaking を提供(ETH のみならず)· Karak は開発者 UX + universal restaking を主軸 · Mellow は LRT vault aggregator · EtherFi は LRT(eETH)で LST 市場を引き継ぎ · Lido 自身も CSM(Community Staking Module)と stVaults 経由で参入。

開発者(AVS 構築者 · 例えば [[systems/hyperlane-overview|Hyperlane]] / EigenDA / Lagrange)にとって · どの restaking layer を選ぶかは:**operator pool の深さ · slashing の真の執行可能性 · TVL backing による経済セキュリティ規模 · 治理の予測可能性** を決定する。ユーザー(restake を検討する stETH 保有者)にとって · どの LRT(eETH · ezETH · pufETH · mevETH 等)を選ぶかは:**収益分配 · slashing リスクエクスポージャー · withdrawal 流動性 · CEX 上場の有無** を決定する。

規制(SEC / ESMA / FSA · [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャー]] を参照)にとって · restaking が「証券」/「投資契約」を構成するかは 2026 年に判決待ちの議題であり · プロトコルによって治理 + 収益構造が異なる規制エクスポージャーを持つ。

本マトリクスは 6 つの active restaking インフラを横断対照 · 10 軸 · 2026-Q2 データスナップショット。AVS landscape は独立した節 · 5 大 AVS の経済画像を列挙。Stand-alone LRT(Renzo / Puffer / Kelp / Swell)は対照に独立してリストせず · 一部は EtherFi / Mellow の分析中で言及。

## Per-protocol sections

### EigenLayer

**Restaking model**:Operator-delegated(質押人が operator を選び · operator が opt-in する AVS を選ぶ)。Native ETH restaking(EigenPod 経由)· LST restaking(stETH · rETH · cbETH 等 8 種類 strategy)· EIGEN token native restaking をサポート。

**TVL May 2026**:~$14B(推定 · 2025 高値で $20B+ に達した · 2026 は一部 LRT 退出 + 収益圧縮で穏やかな調整)。

**Slashing implementation**:2025-Q2 メインネット slashing を有効化。AVS がカスタム slashing 条件を定義([[systems/eigenlayer-avs-mechanism|EigenLayer AVS mechanism]] を参照)。実 slash イベント ≤ 5 件(2026-Q2)· 累計 slash 金額 < $5M(主に operator 設定ミス · 悪意ではない)。

**AVS economics**:~40 AVS active · EigenDA · Hyperlane · Espresso · Lagrange · Witness Chain · AltLayer · Brevis · 等を含む。Operator rewards は AVS 課金(EIGEN + 各 AVS native token)由来 · 年化 +1-3% を base ETH staking yield に上乗せ。

**Correlation risk**:Rehypothecation 係数 2.5-3x(1 単位の ETH が平均 2.5-3 個の AVS に opt-in)· Vitalik は「system-wide slashing cascade」リスクを複数回警告。EIGEN inter-subjective dispute は緩和メカニズムだが、それ自体は token holder vote に依存(資本操作されうる)。

**Operator concentration**:Top 5 operator が ~50% TVL を占有(Coinbase Cloud · Figment · P2P · Stakefish · DSRV)· 残りは ~200 operator に分散。

**Governance**:EigenLabs(チーム主導)· EIGEN token + Operating Token holders · Security Council 7-of-13。2025 EIGEN 投票ローンチ後、徐々に分権化。

**Audit**:Trail of Bits · ChainSecurity · OpenZeppelin · Sigma Prime · Code4rena · Cantina。slashing 有効化前に複数ラウンドの独立 audit。

**Lido stake overlap**:~25% EigenLayer TVL が stETH strategy 由来(残りは主に native ETH via EigenPod + cbETH · rETH)。

**Regulatory exposure**:SEC は EIGEN token が securities を構成するかどうかについて明確な表明をせず · 2024 年 EigenLayer は積極的に米国ユーザーへの EIGEN airdrop を延期。EU MiCA 下で restaking yield は「tokenized money market service」に分類される可能性 · 判決待ち。

### Symbiotic

**Restaking model**:**マルチアセット restaking**(ETH のみならず · 任意の ERC-20 をサポート · LST · ステーブルコイン · プロジェクト token を含む)。Modular vault アーキテクチャ · vault curator が collateral + AVS opt-in 戦略をカスタム定義。

**TVL May 2026**:~$3.2B(2024-09 alpha launch · 2025 fast growth · 2026-Q1 で第二位の restaking · 一部 TVL は非 ETH 資産のため EigenLayer との直接比較には調整が必要)。

**Slashing implementation**:day 1 から vault-level slashing をサポート(2025-Q1 メインネット有効化)。Operator slashed = vault collateral 全体が損害 · ただし vault curator が slashing 戦略(比率 · トリガー条件)をカスタム可能。

**AVS economics**:~15 AVS active(2026-Q2)· 主推は Ethena USDe / sUSDe restake · Hyperlane ISM の 1 つ · Mellow vault deep integration · GearBox credit account 等。Operator rewards は多様化(ステーブルコイン · vault token · AVS native)。

**Correlation risk**:理論上 EigenLayer より高い(マルチアセットクラス · slashing トリガー条件が複雑)· ただし実際には多元化資産が単一 ETH リスクを分散できる。Vault curator の選択がリスクアンカー。

**Operator concentration**:Top 5 operator ~60%(P2P · Kiln · Chorus One · Everstake · DSRV)· 集中度は EigenLayer より高い。

**Governance**:Symbiotic Labs チーム主導 · 2026-Q4 に token + DAO governance 予定。Vault curator は事実上の sub-governance(各 vault が独立)。

**Audit**:OpenZeppelin · Sigma Prime · Cantina contest · 初期段階 · audit カバレッジは EigenLayer より少ないが拡大継続。

**Lido stake overlap**:~40% TVL が LST vault 由来(stETH · rETH · wstETH · 等)。Mellow が Symbiotic の主要 vault curator として、LRT 資金を Symbiotic AVS にルーティング。

**Regulatory exposure**:マルチアセットにより Symbiotic の規制ポジショニングはより複雑になる(一部 vault がステーブルコインを含む = money market 規制に接近)· ただし単一資産の規制イベント影響は限定的になる。

### Karak

**Restaking model**:Universal restaking(ETH · BTC · USDC をサポート · K2 は Karak 自社の L2)· 開発者 UX を強調(「any asset can secure any service」)。

**TVL May 2026**:~$1.0B(2024 ローンチ · 2025 growth だが Symbiotic より遅い · 2026 は BTC restaking モジュール + K2 統合で上昇)。

**Slashing implementation**:2025-Q3 有効化 · ただし実際の AVS 数が少なく · slash イベント ≤ 2 件をトリガー。

**AVS economics**:~10 AVS active · 主に Karak チーム自身がインキュベートしたサービス(K2 L2 sequencer / DA)· サードパーティ AVS は少ない。

**Correlation risk**:マルチアセットモデル下で correlation は複雑 · ただし TVL 規模が小さく · システミックリスクは当面低い。

**Operator concentration**:Top 5 operator ~70%(Karak 自社運営 + 少数提携者)。

**Governance**:Karak Foundation 主導 · KAR token は 2026-Q3-Q4 にローンチ予定。

**Audit**:Sigma Prime · Halborn · Cantina(一部)。

**Lido stake overlap**:~20% TVL が stETH 由来(Karak は BTC + ステーブルコイン restaking がより大きな比率)。

**Regulatory exposure**:BTC restaking が SEC の「BTC yield product」への関心をトリガー。USDC restaking は money market 規制に接近。総合的に規制サーフェスは EigenLayer より広い。

### Mellow

**Restaking model**:LRT vault aggregator(基層 restaking ではなく · EigenLayer + Symbiotic の上に構築された vault layer)· Mellow vault ユーザーが stETH / wstETH を預け · vault が自動的に EigenLayer/Symbiotic AVS に restake · 収益分配 + slashing リスクが pooled。

**TVL May 2026**:~$1.8B(2024-Q4 launch · 2025-2026 fast growth · Symbiotic の最大 vault curator · 同時に一部 EigenLayer vault も deploy)。

**Slashing implementation**:Vault 層で slashing を socialize(1 つの AVS slash を vault 保有者全体がシェアに応じて負担)· ユーザーは暗黙的に portfolio slashing リスクを受け入れる。

**AVS economics**:Mellow vault が複数 AVS pool を選択して risk-adjusted yield を最適化 · ユーザーが得るのは「mixed AVS rewards」basket。

**Correlation risk**:最高の層 —— vault が複数 AVS を同時保有 · 単一 vault 内 slash cascade リスクが顕著。Mellow は vault 多元化(異なる AVS pool 異なる vault)で緩和。

**Operator concentration**:EigenLayer / Symbiotic operator 集合を借用 · 自身は新規集中度を持ち込まない。

**Governance**:Mellow DAO + MLW token(2025-Q2 ローンチ)· vault curator team が sub-governance。

**Audit**:Sigma Prime · Spearbit · Code4rena · Symbiotic と合同 audit。

**Lido stake overlap**:~100%(Mellow vault は基本的にすべて stETH / wstETH / LST 集合ベース)· Lido → restaking の最大単一経路。

**Regulatory exposure**:Vault 構造は「managed fund」に接近 · EU MiCA / SEC 下で集合投資 scheme に分類される可能性。Mellow は積極的に US ユーザーを回避。

### EtherFi LRT (eETH / weETH)

**Restaking model**:LST + restaking 一体化 —— ユーザーが ETH を預け · eETH(rebasing)または weETH(wrapped non-rebasing)を取得 · EtherFi が基層 ETH を同時に stake(beacon chain validator)+ restake(EigenLayer + Symbiotic + Karak partial)。LRT 市場のリーダー。

**TVL May 2026**:~$5.5B(2024 高値 $7B · 2026 穏やかな調整)· 最大の LRT。

**Slashing implementation**:EtherFi が自社でノード運営(ノード運営者ネットワーク · 厳格にスクリーニング)· slash リスクは EtherFi insurance fund + プロトコル reserve が負担。ユーザーは eETH 価格が slash 損失を反映する形で対峙。

**AVS economics**:EtherFi は ETH を主流 AVS(EigenDA · Hyperlane · Espresso · Lagrange)に restake することを選択 · 収益は eETH yield(年化 ~4-6% · base staking 3-4% + restaking premium 1-2% を含む)に反映。

**Correlation risk**:eETH 保有者は自然に EigenLayer + Symbiotic + Karak の 3 層 slash cascade に露出する。EtherFi insurance fund ~$50M が first-loss buffer。

**Operator concentration**:EtherFi ノードネットワーク ~200 operator · 一部は EtherFi が直接運営 · 一部はアウトソーシング(Pier Two · ChainSafe · Validation Cloud 等)。

**Governance**:EtherFi DAO + ETHFI token(2024-Q2 ローンチ)· Foundation + Security Council 7-of-15。

**Audit**:Spearbit · Halborn · Certora · Hats Finance bug bounty。

**Lido stake overlap**:EtherFi は Lido の直接競合(LST 市場シェア)· EtherFi は stETH を使用しない(自社で validator を運営)· ただし EtherFi の一部 stake が EigenLayer にされる際 stETH と同じ AVS pool 内に位置する。

**Regulatory exposure**:LRT は SEC の重点関心対象(2024 SEC 議長 Gensler が「staking + restaking = potential security」と公開言及)。EtherFi は積極的に米国リテールユーザーを geo-fence。

### Lido CSM (Community Staking Module)

**Restaking model**:Lido 自身は長期に restaking に参入せず(Lido v2 治理で複数回否決)· ただし 2024 年に CSM(Community Staking Module)を発表し、小規模 operator が Lido validator セットに参加可能とした · 同時に stVaults(2026 計画)を探索し stETH 保有者が opt-in restaking できるようにする。Lido v3(2026 roadmap)で正式に restaking hook を導入。

**TVL May 2026**:~$280M(CSM early adoption · 2026 Q3-Q4 stVaults ローンチ後急成長予想)。Lido stETH 全体 TVL ~$32B(restaking 部分 < 1%)。

**Slashing implementation**:CSM operator が自前 bond(2-4 ETH)を collateral として持参 · slash は bond を優先的に控除 · 不足分は Lido insurance fund が負担。stVaults restaking slash は vault ユーザーがシェアに応じて負担。

**AVS economics**:Lido stVaults は EigenLayer + Symbiotic 主流 AVS をサポート予定 · ただし Lido DAO が AVS ホワイトリストを厳格に管理(監査完備 + 治理安定したもののみ接続可)。

**Correlation risk**:Lido の設計哲学は「minimize correlation」· stVaults opt-in 後はユーザーが暗黙的に負担 · ただし Lido DAO が AVS ホワイトリスト + 浮動 cap で制限。

**Operator concentration**:Lido 主集合 ~30 operator(機関)+ CSM ~200 小 operator。CSM は分散化改善 · ロングテール home staker を導入。

**Governance**:Lido DAO + LDO token + 全民 referendum · 治理複雑度が最高(stVaults への任意 AVS 接続には LDO 投票通過が必要)。

**Audit**:Sigma Prime · ChainSecurity · OpenZeppelin · Certora · Statemind · MixBytes · audit カバレッジは業界最深。

**Lido stake overlap**:Lido が stETH 発行者 · ここでの「Lido stake overlap」= 100%。stETH の EigenLayer / Symbiotic / Mellow / EtherFi での二次 restaking が restaking エコシステム全体の 25-40% を占め · Lido は事実上の restaking 流動性源([[exchanges/liquid-staking-restaking-cex-exposure|liquid staking restaking CEX エクスポージャー]] を参照)。

**Regulatory exposure**:Lido DAO 治理構造は SEC 視点では「decentralized issuer」に接近 · ただし LDO token holder 投票 + 治理収益分配が securities を構成する可能性。EU MiCA 下で stETH が「asset-referenced token」を構成するかは判決待ち。

## AVS landscape — 5 大 AVS 経済画像

| AVS | タイプ | 主要 backing | 2026 収入推定 | TVL backing | 顧客 |
|---|---|---|---|---|---|
| **EigenDA** | Data Availability | EigenLayer | ~$120M ARR | ~$6B ETH | Mantle · Movement · Cyber · Rivalz · 複数 ZK Stack hyperchain |
| **Hyperlane** | Cross-chain messaging ISM | EigenLayer + Symbiotic + 自社 | ~$30M ARR(messaging fee 分配) | ~$1.5B ETH(EigenLayer ISM) + Symbiotic 一部 | Eclipse · Celestia · Renzo · 複数 app-chain |
| **Espresso** | Shared sequencer | EigenLayer | ~$15M ARR(early) | ~$800M ETH | Polygon zkEVM · zkSync ZK Stack · Caldera · AltLayer rollup-as-a-service |
| **Lagrange** | Coprocessor + state proof | EigenLayer | ~$8M ARR | ~$500M ETH | LayerZero · Polyhedra · 複数 DeFi protocol |
| **Witness Chain** | POI(Proof of Inference)/ DePIN 検証 | EigenLayer | ~$5M ARR(experimental) | ~$200M ETH | DePIN プロジェクト + AI inference verification |

**AVS 経済モデル 2 種類**:
- **Direct fee**:ユーザー / 顧客が課金(EigenDA 顧客が DA fee を支払う · Hyperlane 顧客が messaging fee を支払う)→ operator に分配
- **Token incentive**:AVS が自前 token を持つ · 初期 emission を operator に bootstrapping として供与(Espresso · Lagrange · Witness Chain)

**Rehypothecation 影響**:Top 3 AVS(EigenDA · Hyperlane · Espresso)はいずれも主に EigenLayer から backing を引く · 1 単位 ETH が 3 個の AVS を同時に secure するのが常態。Vitalik が警告する「cascade risk」は主にこの状況を指す。

## Big comparison matrix table

**6 つの restaking インフラ × 10 軸対照**(2026-Q2 状態):

| Protocol | Restaking Model | TVL May 2026 | Slashing | AVS Economics | Correlation Risk | Operator Concentration | Governance | Audit | Lido Overlap | Regulatory |
|---|---|---|---|---|---|---|---|---|---|---|
| **EigenLayer** | Operator-delegated · native ETH+LST+EIGEN | ~$14B | 2025-Q2 有効化 · ≤5 events · <$5M 累計 | ~40 AVS · EIGEN+AVS token rewards · base に +1-3% | Rehypothecation 2.5-3x · cascade 懸念 | Top 5 ~50% | EigenLabs+EIGEN+SC 7/13 | Trail of Bits · ChainSecurity · OZ · Sigma Prime · C4 · Cantina | ~25% stETH | SEC EIGEN security 未表明 · EU MiCA 判決待ち |
| **Symbiotic** | **マルチアセット**(ETH+LST+stablecoin+token)· modular vault | ~$3.2B | Day 1 design · 2025-Q1 有効化 · vault-level | ~15 AVS · stablecoin/vault/AVS token rewards | 複雑マルチアセット · vault curator アンカー | Top 5 ~60% | Symbiotic Labs · 2026 Q4 token+DAO | OZ · Sigma Prime · Cantina · 初期段階 | ~40% stETH(Mellow vault 主経路) | マルチアセット規制サーフェス複雑 |
| **Karak** | Universal(ETH+BTC+USDC)· K2 L2 統合 | ~$1.0B | 2025-Q3 有効化 · ≤2 events | ~10 AVS · Karak-incubated 中心 | マルチアセット複雑 · TVL 小 リスク当面低 | Top 5 ~70%(集中度高) | Karak Foundation · KAR 2026 Q3-Q4 | Sigma Prime · Halborn · Cantina 一部 | ~20% stETH | BTC restaking SEC 関心 · USDC は MM 規制に接近 |
| **Mellow** | **LRT vault aggregator**(EigenLayer+Symbiotic 上に)· socialize slashing | ~$1.8B | Vault-level socialize | マルチ AVS pool basket rewards | 最高(vault 内 cascade) | underlying 借用 · 新規集中なし | Mellow DAO+MLW 2025-Q2 · vault curator sub-gov | Sigma Prime · Spearbit · C4 · Symbiotic と合同 | ~100%(基本的に全 LST) | managed fund に接近 · 米国回避 |
| **EtherFi LRT** | **LST+restaking 一体化** · 自社ノード+マルチレイヤー restake | ~$5.5B(最大 LRT) | EtherFi ノード責任 · insurance fund first-loss | EigenDA+Hyperlane+Espresso+Lagrange · 年化 4-6% | 3 層 slash cascade · insurance ~$50M buffer | EtherFi ネットワーク ~200 operator | EtherFi DAO+ETHFI 2024 Q2 · SC 7/15 | Spearbit · Halborn · Certora · Hats bounty | Lido 競合 · 自社 validator · AVS pool 間接重複 | LRT は SEC 重点関心 · 米国リテール geo-fence |
| **Lido CSM / stVaults** | CSM home staker + stVaults restaking hook(2026 計画) | ~$280M CSM · stETH 全体 $32B | CSM operator bond first · insurance backup · stVaults ユーザー負担 | 厳格 AVS ホワイトリスト(DAO 投票) | Lido 哲学 minimize · AVS cap 制限 | CSM ~200 小 operator + 主集合 30 | Lido DAO+LDO+referendum(治理最重) | Sigma Prime · ChainSecurity · OZ · Certora · Statemind · MixBytes · 業界最深 | **100%(Lido 自身)** · stETH は restaking 流動性源 | LDO security 判決待ち · stETH MiCA ART 判決待ち |

**マトリクスの読み方**:
- **Restaking model 3 象限対照**:operator-delegated(EigenLayer · Karak · Symbiotic)→ 直接受託 · vault aggregator(Mellow)→ 他 restaking を包装 · LST+restaking 一体化(EtherFi · Lido stVaults)→ ユーザーが LRT token を受領
- **TVL vs operator concentration tradeoff**:EigenLayer TVL 最大 · operator 分散度最高 · Karak TVL 小 · 集中度高 · Mellow は他人の operator 借用で新規集中なし
- **Lido overlap が隠れたシステミックリスク** —— stETH の EigenLayer / Symbiotic / Mellow / EtherFi での二次 restaking · stETH 価格デペッグまたは Lido protocol incident が発生すれば · restaking エコシステム全体が同時に影響を受ける
- **Slashing の実状態**:有効化後 1+ 年経過しても実 slash イベント ≤ 10 件 · 累計金額 < $10M · Vitalik が警告した「$100M+ cascade」シナリオをはるかに下回る · ただし sample size が小さく · リスクが価格付けされたと結論づけられない

## Boundary cases / future trajectory

**Restaking と EIP-7251 の相互作用**([[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 · institutional staking]] を参照):
- EIP-7251 が validator max effective balance を 32 → 2048 ETH に拡大 · 大機関が validator を統合し運用コストを下げることを可能にする。
- 機関 validator は同時に大額 ETH を restake 可能 · operator concentration をさらに押し上げる。EigenLayer は 2025 年に top 5 operator 比率の小幅上昇を確認済み。
- 長期的に institutional staking(SWIFT カストディアン · BNY · Coinbase Custody · BlackRock · [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking restaking CEX エクスポージャー]] を参照)が restaking に参入し · TVL は 2026 年の $20B 級から 2027-2028 年に $50B+ へ押し上がる可能性。

**Lido v3 restaking 接続**:Lido DAO 2026-2027 stVaults 主線開発 · 接続されれば stETH が直接 restaking primitive となり · 二次包装が不要となる。これにより:
- Mellow / EtherFi の一部価値が吸収される(stETH 保有者が直接 opt-in · 仲介 vault が不要)
- ただし Lido の厳格な AVS ホワイトリストはロングテール AVS の bootstrapping も制限
- 長期に Lido + EigenLayer が事実上の duopoly を形成 · Symbiotic / Karak / Mellow / EtherFi が周縁細分を担う

**AVS ビジネスモデルの進化**:
- **2024-2025 段階**:大部分の AVS は token incentive bootstrapping(自前 token を operator に配布)に依存 · 実 fee revenue は少ない。
- **2026 段階**:ヘッド AVS(EigenDA · Hyperlane · Espresso)が実 fee revenue を持ち始めるが · AVS-to-operator 分配比率は一致しない(EigenDA は 90%+ を operator に · Hyperlane は 50/50 · Espresso は依然として bootstrapping 中)。
- **2027+ トレンド**:AVS market は「DA コモディティ化」(EigenDA / Celestia / Avail 価格戦)と「差別化サービス」(Espresso shared sequencer · Lagrange coprocessor · Witness Chain DePIN 検証)に分化する可能性。

**Rehypothecation システミックリスク**:
- Vitalik は 2024 年に EigenLayer の「アプリケーション層コンセンサス」への過度な拡張を複数回警告 —— 1 単位 ETH が 5+ AVS を同時に secure する際の slashing cascade を懸念。
- 実データ:2026-Q2 平均 rehypothecation 係数 2.5-3x · 理論最大値(任意の AVS 数)をはるかに下回る · 大部分の ETH は 2-3 個のヘッド AVS にのみ opt-in しているため。
- だが EtherFi / Mellow 等の LRT vault はデフォルトで複数 AVS に opt-in · ユーザーが暗黙的に cascade を負担。Mellow vault の内部多元化は緩和 · ただし cross-vault correlation は依然として存在(同じ operator が同時に複数 AVS を運用)。

**Symbiotic マルチアセット戦略 vs EigenLayer ETH-pure**:
- EigenLayer は ETH(+LST)純度を堅持 · Ethereum コミュニティのコンセンサス + ETH が最深の crypto-economic security pool であるため。
- Symbiotic は任意の資産(ステーブルコイン · プロジェクト token を含む)を受け入れ · AVS にリスクプロファイルを自選させる。
- 長期に Symbiotic は「non-ETH-native AVS」(BTC クロスチェーン · DePIN · AI inference)で EigenLayer が取得できない顧客を獲得する可能性;EigenLayer は「ETH-aligned AVS」(ETH-native dApp を顧客とする)で優位を保持。

**Slashing case study 収集中**:
- 2025-Q3 EigenLayer の operator(中規模ノード)1 件が validator key の誤設定で ~$200K slash をトリガー · operator が自己負担で補償。
- 2025-Q4 EigenDA 1 件で quorum 不足イベントが ~$80K の集団 slash をトリガー · AVS が自身で mitigation。
- 2026-Q1 Symbiotic 1 件で vault 設定バグが ~$1M slash を発生 · vault curator が insurance で補償。
- 実 slash 事例累計 < $5M · ただし各事例がコミュニティの警戒を喚起 · audit + insurance pool 強化を推進。

**Regulatory boundary**:
- SEC は 2024 年に「staking-as-a-service」が securities に接近すると複数回言及(すでに Coinbase · Kraken に対し措置)· restaking は staking の superset · 同等リスク。
- EU MiCA 下で LST は ART(asset-referenced token)に分類される可能性 · LRT はより複雑(基層が LST · 上層に restaking yield 重畳)· 規制経路が不明瞭。
- 日本 FSA 2025 公開表明 staking-as-a-service は「ERS(Electronic Recordable Securities)」参入対象 · restaking もこれに準じる。
- 機関顧客(BNY · BlackRock · J.P. Morgan)が restaking に参入する前に規制 clarity が必要 · 時間軸は少なくとも 2027+。

**形式検証 / エンジニアリング品質**:
- EigenLayer は restaking 中で audit が最完備(6+ 独立 audit firm + slashing 有効化前複数ラウンド)
- Lido CSM / stVaults は audit 深度で業界最高(7+ firm + Certora formal verification)
- Symbiotic / Karak / Mellow / EtherFi は audit カバレッジで追いつく途上 · 一部初期 audit が slashing logic を含まない

**Restaking と DAG-BFT / threshold consensus の関連**:Restaking により AVS は validator を新規募集せずに起動可能 · ただし AVS 自身のコンセンサスアルゴリズム選定は依然として重要([[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT]] と [[systems/threshold-bft-consensus-rust-implementations|threshold BFT consensus Rust implementations]] を参照)。Espresso shared sequencer は HotShot(DAG-BFT 変種)を使用 · Lagrange coprocessor は threshold signature モデル寄り。AVS のコンセンサス選択は operator の実作業量 + 収益構造に影響し · 逆方向にどの restaking layer が operator に歓迎されるかに影響。

**Validator 経済 4 変数の交差**:[[systems/bft-validator-economy-four-variables|BFT validator economy four variables]] を参照 —— security budget · stake mobility · validator count · slashing severity の 4 変数は restaking 層ですべて書き換えられる。Restaking は stake mobility を単一チェーンから multi-AVS に拡張 · validator count を新規募集ではなく再利用 · ただし slashing severity を複雑化(単一 ETH が複数 AVS で異なる slash 条件)。これが Vitalik が restaking を「アプリケーション層コンセンサス」に過度に拡張すべきでないと複数回警告する理由 —— AVS 数が operator の監視帯域を超えるとき · validator 経済変数は well-defined ではなくなる。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/INDEX|systems index]]
- [[systems/eigenlayer-overview|EigenLayer overview]]
- [[systems/eigenlayer-avs-mechanism|EigenLayer AVS mechanism]]
- [[systems/eigenlayer-l1-bootstrapping|EigenLayer L1 bootstrapping]]
- [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 institutional staking]]
- [[systems/bft-validator-economy-overview|BFT validator economics overview]]
- [[systems/bft-validator-economy-four-variables|BFT validator economy four variables]]
- [[systems/threshold-bft-consensus-rust-implementations|threshold BFT consensus Rust implementations]]
- [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT]]
- [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking restaking CEX エクスポージャー]]
- [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]
- [[systems/hyperlane-overview|Hyperlane overview]]
<!-- /wiki-links:managed -->

## Sources

- EigenLayer docs · https://docs.eigenlayer.xyz/
- Symbiotic docs · https://docs.symbiotic.fi/
- Karak docs · https://docs.karak.network/
- Mellow docs · https://docs.mellow.finance/
- EtherFi docs · https://docs.ether.fi/
- Lido docs · https://docs.lido.fi/
- EigenDA docs · https://docs.eigenda.xyz/
- Hyperlane docs · https://docs.hyperlane.xyz/
- Espresso docs · https://docs.espressosys.com/
- Lagrange docs · https://docs.lagrange.dev/
- Witness Chain docs · https://docs.witnesschain.com/
- DefiLlama restaking · https://defillama.com/protocols/Restaking
- L2Beat DA summary · https://l2beat.com/data-availability/summary
- Vitalik blog · "Don't overload Ethereum's consensus"(2023 公開 post)
