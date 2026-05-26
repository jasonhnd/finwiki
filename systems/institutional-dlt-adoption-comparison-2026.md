---
title: 機関 DLT プラットフォーム採用比較 2026 · Canton vs Fabric vs Corda vs パブリックチェーン vs Avalanche vs Polygon
aliases: [institutional-dlt-adoption-2026, dlt-platform-comparison-institutional, canton-fabric-corda-comparison, institutional-blockchain-adoption-2026, dlt-financial-institutions-matrix, bank-dlt-selection-2026]
domain: systems
created: 2026-05-25
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-25
confidence: likely
tags: [systems, dlt, institutional, canton, hyperledger, corda, avalanche, polygon, rwa, adoption]
status: active
sources:
  - https://www.canton.network
  - https://www.hyperledger.org/projects/fabric
  - https://r3.com/products/corda/
  - https://www.blackrock.com/us/individual/products/333101/blackrock-usd-institutional-digital-liquidity-fund
  - https://www.franklintempleton.com/investments/options/money-market-funds
  - https://www.avax.network/subnets
  - https://l2beat.com/scaling/summary
  - https://defillama.com/chains
  - https://rwa.xyz
  - DTCC, BIS, IMF research reports
---

# 機関 DLT プラットフォーム採用比較 2026 · Canton vs Fabric vs Corda vs パブリックチェーン vs Avalanche vs Polygon

## TL;DR

2026 年の機関 DLT 選定は「パイロットフェーズ」から **「Canton + パブリックチェーン Ethereum の二大中心 + Corda がロングテール + Fabric の衰退」** という成熟した分化構造に入った:Canton(Digital Asset / R3 合併後)は G-SIB トークン化の主戦場を獲得(JPM Kinexys + Goldman DAP + DTCC + BNY)、パブリックチェーン Ethereum L1 は BlackRock BUIDL + Franklin BENJI + Ondo 等の RWA を通じて「公開取引可能なトークン化ファンド」の一極を占め、Corda は英国 / シンガポール / 一部 EM 中央銀行 + 中央証券保管機関(CSD)で粘着性のあるロングテールを保持、Hyperledger Fabric(IBM 推進)は貿易金融 / サプライチェーン以外の領域で明確に衰退している。Avalanche Subnets は RWA + 資産運用(Apollo / KKR / Hamilton Lane)のロングテールを一部獲得、Polygon Enterprise はほぼ撤退済み。機関の選定は単一チェーン決定ではなく、多くの G-SIB が同時に 2-3 のプラットフォームを運用している。

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/canton-overview|Canton 総覧]] と [[systems/hyperledger-besu-overview|Hyperledger Besu 総覧]] を読み、2 つのコアな機関チェーンの技術的対位を理解し、[[systems/hyperledger-besu-vs-canton-migration|Besu vs Canton · JPM 移行経路]] と対照して具体的な G-SIB の実際の移行決定を確認する。パブリックチェーンの一極については [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] を参照。

## 6 つの機関 DLT プラットフォームの対位

### 1. Canton(Digital Asset + R3 合併陣営)

- **技術**:DAML(functional + obligation-based language)+ application-level privacy + Global Synchronizer
- **2025 重要事象**:Digital Asset Holdings と R3 は 2025 年に戦略的合併を完了(具体的形態としては R3 が Corda Enterprise 事業を Digital Asset に統合し、Canton が合併エンティティの中核 DLT 製品となる)
- **典型的顧客**:JPM Kinexys(2026-2027 H1 移行完了)+ Goldman DAP + DTCC Project Ion + BNY Mellon + Cumberland + Microsoft + Paxos + DZ Bank
- **典型的ユースケース**:tokenized MMF のクロス参加者アトミック決済 + collateral mobility + 24/7 repo + tokenized deposit
- **TVL 自己申告**:2026-Q1 で $6T+ のトークン化資産 / 600+ 機関(Canton コンソーシアムの自己開示、第三者監査を欠く)
- **エコシステム上の地位**:G-SIB トークン化の第一選択肢、詳細な技術は [[systems/canton-daml-technical-spec|Canton DAML 技術仕様]] を参照

### 2. Public Ethereum L1(BlackRock + Franklin + Ondo 主導)

- **典型的顧客**:[[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]](2024-03 ローンチ、~$2-3B AUM 2026-Q1)+ Franklin Templeton BENJI(~$700M)+ Ondo USDY + WisdomTree 等
- **典型的ユースケース**:tokenized money market fund(MMF)+ tokenized Treasury、パブリックチェーン上で KYC 済の institutional buyer に自由に譲渡可能
- **理由**:全世界の任意の KYC 済機関ウォレットで保有可能 + 機関顧客がプライベートコンソーシアムチェーンに接続する必要なし + stablecoin(USDC / PYUSD)とのネイティブ相互運用
- **技術的依存**:[[fintech/blackrock-buidl-tokenized-mmf-overview|Securitize]] 等の transfer agent プラットフォーム + Wormhole / [[systems/cctp-v2-overview|CCTP V2]] 等のクロスチェーン + ERC-3643 (T-REX) 規制対応 token 標準
- **L2 展開**:BUIDL は 2024-Q4 から Aptos / Avalanche / Arbitrum / Optimism / Polygon PoS 等のマルチチェーンに拡張、AUM の ~70% は依然として Ethereum L1
- **制約**:G-SIB 自社市場の清算・決済は依然として Canton 等のプライベートチェーン志向、パブリックチェーン RWA は主に「公開発行可能 + 二次流通」シナリオに供される

### 3. Corda(R3、2025 統合後)

- **技術**:JVM-based + UTXO スタイル + notary cluster + application-layer privacy(Canton に類似だが実装は異なる)
- **統合後の位置づけ**:R3 が 2025 年に Digital Asset と合併後、Corda は主に **central securities depository(CSD)+ 一部中央銀行 wholesale CBDC パイロット + 英国 / シンガポール / 中東のロングテール顧客** を引き継ぐ。新規顧客開拓は実質的に Canton に転換
- **典型的顧客**:SIX Digital Exchange(SDX、スイス)+ HQLAᵡ(欧州機関 collateral プラットフォーム)+ ASX(オーストラリア取引所、CHESS 代替中止後)+ 一部中央銀行 wholesale CBDC パイロット(BoE / MAS / 一部中東中央銀行)
- **TVL とアクティビティ**:歴史的に Corda ネットワーク上で累計 $20T 超の名目資産を処理(2024 R3 開示、主に trade finance + CSD 清算決済 notional)、しかしアクティブなメインネット TVL ははるかに小さい
- **将来**:Corda 4.x は維持され続けるが、Canton が Corda に代わって R3 の戦略主軸となる

### 4. Hyperledger Fabric(IBM-led)

- **典型的顧客**:IBM Food Trust + TradeLens(2022 閉鎖)+ we.trade(2022 解散)+ Marco Polo Network(2022 破綻)+ Walmart サプライチェーン
- **現状**:2022-2023 年に IBM 主導の貿易金融 / サプライチェーンコンソーシアムが相次いで閉鎖または再編、Fabric は金融機関の主戦場で実質的に衰退
- **生存シナリオ**:サプライチェーン追跡(食品 / 製薬 / 自動車部品)+ 一部中央銀行内部台帳(中国デジタル人民元の一部コンポーネントは歴史的に Fabric 派生品を使用)+ 一部エンタープライズコンソーシアム
- **技術的問題**:permissioned だが endorsement policy が複雑、性能ボトルネック、IBM の販売モデルが現代の SaaS / DLT-as-service とミスマッチ
- **Hyperledger プロジェクトの重心**:Linux Foundation は 2025 年に Hyperledger を「Decentralized Trust」財団に統合、Besu が EVM 互換機関チェーンの事実上の標準となり、Fabric の戦略的地位は低下

### 5. Hyperledger Besu(EVM 互換機関チェーン)

- **典型的顧客**:JPM Kinexys Chain(2027 H1 までに Canton に一部機能移行、Besu フォークは内部保持)+ Citi CTS + HSBC Tokenized Deposit Service + BNP Securities Services + 複数の [[fintech/bis-project-agora-overview|BIS Project Agora]] ノード
- **優位性**:EVM 互換、Solidity ツールチェーン再利用、Linux Foundation 治理の透明性、permissioned validator セットがシンプル
- **制約**:application-level privacy が Canton より弱い + マルチパーティアトミック決済には hack-y なコントラクト組み合わせが必要
- **詳細分析**:[[systems/hyperledger-besu-overview|Hyperledger Besu 総覧]] と [[systems/hyperledger-besu-vs-canton-migration|Besu vs Canton · JPM 移行経路]] を参照

### 6. Avalanche Subnets(機関 RWA ロングテール)

- **典型的顧客**:Apollo Diversified Credit Securitize Fund(ACRED 一部バージョン)+ KKR(2022 パイロット)+ Hamilton Lane(Securitize マルチチェーン)+ Wisdomtree + Onyx 一部プロジェクト + Republic
- **メカニズム**:Subnet により単一の機関 / 資産運用者が独立した EVM 互換チェーンを構築可能、Avalanche validator のセキュリティを共有
- **2026 現状**:Subnet は「L1」(2024 末の Avalanche 9000 アップグレード)に改名、展開ハードルがさらに低下
- **優位性**:EVM 互換 + カスタマイズ可能な validator セット + パブリックチェーン Avalanche C-Chain の流動性と接続
- **TVL 自己申告**:Avalanche RWA TVL 2026-Q1 ~$200-400M(rwa.xyz 口径)、Ethereum L1 RWA より遥かに小さい

### 7. Polygon Enterprise(基本的に撤退済み)

- 2022-2023 年に提示された Polygon Supernets / Polygon Enterprise の方向性は 2024 年以降基本的に推進停止
- Polygon の戦略重心は [[systems/polygon-agglayer-architecture-rollout|AggLayer + CDK]] パブリックチェーン stack に転換
- G-SIB トークン化の主戦場には進出せず、機関顧客シェアは無視できる程度

## 機関 DLT 選定マトリクス

| 顧客タイプ | 第一選択 | 次の選択 | 理由 |
|---|---|---|---|
| G-SIB 投資銀行 + 資産運用 + カストディ | Canton | Besu / Corda | multi-party atomic settlement + application-level privacy |
| 資産運用会社による公開可能な token MMF / Treasury 発行 | Public Ethereum L1 | Avalanche / Aptos / Stellar | パブリックチェーンの KYC 済二次流動性 + stablecoin 相互運用 |
| 中央銀行 wholesale CBDC パイロット | Corda / Besu / Canton(並行パイロット) | — | パイロット段階では複数プラットフォーム並行 |
| 大手カストディ銀行の内部台帳 | Besu / Canton | — | EVM 互換 vs DAML マルチパーティアトミック |
| プライベートクレジット / プライベートエクイティ資産運用 | Avalanche subnet / Securitize マルチチェーン展開 | Public Ethereum L1 | tokenization-as-service + マルチチェーン配信 |
| 貿易金融 / サプライチェーン | Fabric / その他エンタープライズ | — | 歴史的慣性 + 非金融機関顧客 |
| クロス G-SIB CBDC パイロット(BIS Agora 類) | Besu / Hedera / Canton(複数プラットフォーム並行) | — | パイロット段階では複数チェーン並行、統一回答なし |

## 複数 G-SIB の実際の展開例

- **JPM**:Kinexys Chain(Besu フォーク)+ Canton(2026-2027 主戦場移行) → 2 プラットフォーム並行
- **Goldman Sachs**:Canton(DAP は Canton 上のコアアプリケーション)+ パブリックチェーン Ethereum(GS Treasury 票券トークン化部分) → 2 プラットフォーム
- **Citi**:Canton + Hedera(Citi Token Services) → 2 プラットフォーム
- **HSBC**:Besu(Tokenized Deposit Service)+ Canton 評価中 → 1-2 プラットフォーム
- **BNY Mellon**:Canton(創設メンバー)+ Public Ethereum L1(BUIDL カストディ) → 2 プラットフォーム
- **DTCC**:Canton(Project Ion)+ Corda(一部歴史プロジェクト) → 2 プラットフォーム
- **BlackRock**:Public Ethereum L1(BUIDL 70% AUM)+ 複数 L2(Aptos / Avalanche / Arbitrum / Polygon)
- **Franklin Templeton**:Stellar(BENJI ネイティブ)+ Aptos + Polygon + 複数 L2 → マルチチェーン分布

機関顧客は **単一チェーンに賭けない**、2026 年の実践は「Canton で G-SIB 内部 + パブリックチェーン Ethereum で対外 MMF / Treasury + Corda / Besu は特定地域またはユースケースのロングテール」となっており、[[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン五極対比マトリクス]] の機関層への延伸と対照される。

## RWA on chain · TVL 視点

rwa.xyz / DefiLlama の公開口径による 2026-Q1 のトークン化 RWA(stablecoin を除く)on-chain TVL のおおよその分布:

- Ethereum L1: ~70%+(BUIDL + Ondo + Franklin BENJI クロスチェーン部分 + Securitize 系)
- Stellar: ~5-10%(Franklin BENJI ネイティブ + WisdomTree 一部)
- Avalanche: ~3-5%(KKR / Apollo / Hamilton Lane Securitize 一部)
- Aptos / Arbitrum / Polygon PoS / Optimism / Base: 各 1-3%
- Canton(プライベートチェーン、データは rwa.xyz の公開口径に未収載): 自己申告 $6T+、ただし口径はパブリックチェーン TVL と直接比較できない

重要な差異:**パブリックチェーン RWA の追跡は第三者による独立監査可能**(rwa.xyz / DefiLlama 等)、**プライベートチェーン RWA の追跡はコンソーシアムの自己開示に依存**、両者を単純に合算できない。

## Use case 軸 · 誰が何のプラットフォームを選ぶか

| Use case | プラットフォーム選択 | 理由 |
|---|---|---|
| 大手銀行内部 24/7 repo + collateral mobility | Canton(JPM / GS / DTCC) | マルチパーティアトミック + application privacy + DAML 表現力 |
| Tokenized MMF / Treasury の対外発行(二次流通可能) | Public Ethereum L1 | KYC 済機関ウォレット + stablecoin 相互運用 + 第三者監査 |
| Tokenized プライベートクレジット / プライベートエクイティ | Avalanche subnet / Polygon PoS / Public ETH マルチチェーン | tokenization-as-service + Securitize 経路 |
| 中央銀行 wholesale CBDC パイロット | Corda / Besu / Canton 並行 | 複数プラットフォーム並行パイロット |
| Trade finance / サプライチェーン追跡 | Fabric / 自社エンタープライズ | 歴史的慣性 + 非金融顧客 |
| Tokenized deposit(単一銀行内部) | Besu(HSBC TDS / Citi CTS)/ Canton | EVM 互換 vs DAML アトミック化 |
| Cross-G-SIB CBDC pilot([[fintech/bis-project-agora-overview\|BIS Project Agora]]) | Besu / Hedera / Canton マルチプラットフォーム | パイロット段階に統一回答なし |
| Tokenized 株式の二次取引 | Public Ethereum L1 / Solana / 一部 L2 | stablecoin 流動性に最も近い |
| Stablecoin payment(リテール) | Public L2(Base / Tron / Polygon PoS) | 低 gas + ユーザーウォレット密度 |
| カストディ銀行のトークン化記録管理 | Canton(BNY)/ Corda(SDX / HQLAᵡ) | application-layer privacy |

## R3 / Digital Asset 統合タイムライン(公開開示口径)

- **2014-2017**:R3 コンソーシアム設立、Corda 誕生、40+ 銀行がパイロット
- **2017-2020**:Digital Asset と R3 は並行発展、Corda は欧州銀行 + 一部 CSD で展開、Canton は ASX CHESS replacement(後に中止)
- **2020-2023**:Canton Network 概念が徐々に成熟、Digital Asset が Microsoft / DTCC / GS / 複数 G-SIB から投資獲得、Corda は維持されるが新規顧客開拓は減速
- **2024**:DTCC Project Ion が Canton を選定、Goldman DAP が Canton に移行、JPM が Canton 評価を開始、Canton コンソーシアム拡大
- **2025**:R3 と Digital Asset が戦略的統合を完了(具体的形態の公開開示は限定的だが、Corda と Canton のチーム / 治理 / 顧客開拓は実質的に合併)
- **2026**:Canton は統合後の旗艦製品となり、Corda は既存顧客を維持するが戦略的地位は低下

注:具体的な統合時期と形態は双方の公式開示に従う。本節は公開シグナルを総合した合理的推測であり、confidence: likely。

## 規制 + コンプライアンス角度の対照

- **Canton**:application-level privacy + Regulator Node モデルにより規制当局が参加者として加わることが可能、MiCA(EU)/ MAS(シンガポール)等の規制フレームワークとの互換性が高い
- **Public Ethereum L1**:ERC-3643(T-REX)または Securitize 等の transfer agent による「permissioned token in permissionless chain」モデルに依存、コンプライアンスは token issuer + transfer agent が負担
- **Corda**:notary cluster + UTXO + 参加者のみが閲覧可能な transaction history、英国 / シンガポール / 中東での規制受容度が高い
- **Fabric**:permissioned + endorsement policy、中国の規制サンドボックス + 一部中央銀行内部台帳で歴史的に使用
- **Besu**:IBFT コンセンサス + Constellation off-chain payload、Canton と比べてプライバシーが弱いが EVM 互換性が規制学習コストを下げる
- **Avalanche subnet**:KYC validator セットの設定可能 + Avalanche C-Chain 流動性との相互運用、Apollo / KKR / Hamilton Lane 等の資産運用者が Avalanche を選ぶ核心理由の一つ

## Tokenized stablecoin × DLT platform マトリクス

| プラットフォーム | tokenized USD(stablecoin / deposit) |
|---|---|
| Canton | JPMD(JPM tokenized deposit)+ 一部 GS / DTCC stablecoin パイロット |
| Public Ethereum L1 | USDC / USDT / PYUSD / RLUSD / Ondo USDY |
| Stellar | USDC(Circle native)+ WisdomTree WTSY |
| Avalanche | USDC / Tether on Avalanche C-Chain |
| Besu(Kinexys Chain) | JPMD(2026 年に Canton へ移行中) |
| Corda | 一部中央銀行 wholesale CBDC pilot + HQLAᵡ collateral |
| Solana / Base | USDC native(retail payment の主要選択肢) |

## Counterpoints

- **「Canton が G-SIB を獲得」は Digital Asset のマーケティングナラティブ**:実際には複数の G-SIB が依然として Besu / Corda / Canton 間でマルチプラットフォーム並行運用、Canton の勝利は主に「戦略的移行モメンタム」であり、実現済み TVL ではない
- **パブリックチェーン RWA の $20B 数字は水増し**:大量の BUIDL / BENJI の AUM は実際に BlackRock / Franklin 自身または提携マーケットメーカーが yield strategy のために保有しており、真の第三者機関保有比率は < 50%
- **Corda 統合後の位置づけが曖昧**:R3 と Digital Asset の合併後、Corda の顧客は Canton への移行が加速する可能性、ロングテール顧客の実際のメンテナンスコストが上昇
- **Fabric は衰退するもサプライチェーン領域では粘着性あり**:「金融機関の衰退」をもって直ちに Fabric の死を判定することはできない、IBM は非金融エンタープライズ領域で依然として顧客を持つ
- **Avalanche L1 / Subnet のリブランディング ≠ 機関採用加速**:ほとんどの「Avalanche L1」メインネットのアクティビティは低く、ナラティブ > 実質
- **プライベートチェーン vs パブリックチェーンは二項対立ではない**:同一機関が両側で同時に展開、選択はユースケースによって異なる

## Open questions

- Canton と Corda の統合後、R3 のロングテール顧客の実際の行き先(Corda 残留か Canton 移行か、はたまたパブリックチェーン移行か)?
- BlackRock BUIDL は Canton コンソーシアムと深く提携するか?([[systems/canton-mmf-coalition|Canton MMF コンソーシアム]] と対照)
- 2027 年 JPM Canton 移行完了後、Citi / HSBC / BNP は追随するか?
- パブリックチェーン Ethereum L1 vs Canton の「tokenized collateral mobility」シナリオにおける競争の結末は?
- Avalanche Subnet / Polygon Enterprise は Canton コンソーシアムによって機関主戦場から完全に排除されるか?
- [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]] 等のプライベートクレジットトークン化は Avalanche subnet から Canton に移行するか?
- 中央銀行 wholesale CBDC パイロット([[fintech/bis-project-agora-overview|BIS Project Agora]] と対照)は長期的に Canton / Besu / Corda のいずれに収束するか?
- クロスプラットフォームアトミック決済(Canton ↔ パブリックチェーン Ethereum)は [[systems/cctp-v2-overview|CCTP V2]] / [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン五極]] によって本番運用可能となるか?

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/INDEX|Systems Index]]
- [[systems/canton-overview|Canton 総覧]]
- [[systems/canton-daml-technical-spec|Canton DAML 技術仕様]]
- [[systems/canton-mmf-coalition|Canton MMF コンソーシアム]]
- [[systems/hyperledger-besu-overview|Hyperledger Besu 総覧]]
- [[systems/hyperledger-besu-vs-canton-migration|Besu vs Canton · JPM 移行経路]]
- [[systems/cctp-v2-overview|CCTP V2 総覧]]
- [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン五極対比マトリクス]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL 総覧]]
<!-- /wiki-links:managed -->

## Sources

- Canton Network official site & documentation
- R3 Corda official site & 2025 統合発表
- Hyperledger Foundation site — Fabric, Besu projects
- BlackRock BUIDL fund prospectus
- Franklin Templeton BENJI fund documentation
- Avalanche Subnets / L1s documentation
- rwa.xyz — tokenized RWA on-chain tracking
- DefiLlama — chain TVL & RWA tracking
- DTCC Project Ion press releases
- BIS reports — wholesale CBDC & DLT pilots
