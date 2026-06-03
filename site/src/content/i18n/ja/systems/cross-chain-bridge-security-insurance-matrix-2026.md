---
source: systems/cross-chain-bridge-security-insurance-matrix-2026
source_hash: 05c500e4a8257c20
lang: ja
status: machine
fidelity: ok
title: "クロスチェーンブリッジセキュリティ・保険マトリクス 2026 · 14 プロトコルの信頼モデル / ハック履歴 / カバレッジ全景"
translated_at: 2026-06-03T01:06:46.352Z
---

# クロスチェーンブリッジセキュリティ・保険マトリクス 2026 · 14 プロトコルの信頼モデル / ハック履歴 / カバレッジ全景

## 要約

- 14 のアクティブな cross-chain bridge / messaging プロトコルの 2026-Q2 時点での trust model · hack history · insurance · audit · recovery の 5 次元対照マトリクス
- Trust model 4 象限:**native**(CCTP V2 / IBC)· **light-client / ZK**(Wormhole ZK Verifier / Hyperlane ZK ISM)· **validator-set / multisig**(LayerZero v2 default · Wormhole Guardian · Axelar)· **optimistic / fraud-proof**(Across · Connext · Hyperlane optimistic ISM)
- 過去の hack 累計 ≥ $2.7B(2021-2025)· **Ronin $625M · Wormhole $325M · BNB Bridge $570M · Poly $611M · Nomad $190M · Multichain $126M(2023 逃亡)· Orbit Chain $81M(2024)· Wormhole は 2022.02 後に Jump Crypto が全額補填 + 2024 ZK Verifier で修正**
- Insurance 3 大プール:**Nexus Mutual**(~$120M capital · 主流ブリッジは cover available)· **InsurAce**(~$30M · 中小ブリッジをより深くカバー)· **Sherlock**(~$15M · audit + cover bundled · Hyperlane / LayerZero を一部カバー)
- 2026 で真に保険可能なブリッジは ~6 個のみ(CCTP V2 · LayerZero v2 · Wormhole NTT · Across · Hyperlane · Axelar)· 大半のブリッジは規模が小さすぎるか trust model が複雑すぎて insurer に引受拒否される
- 経路:[[systems/cross-chain-five-pole-comparison-matrix]](general comparison)· [[systems/cross-chain-four-poles-overview]](architecture)· 本マトリクスは security + insurance 次元に特化

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] 配下に位置する。一般的な 9軸のブリッジ比較は [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極対照マトリクス]] と照合し、基礎となるアーキテクチャ分類は [[systems/cross-chain-four-poles-overview|クロスチェーン 4 極アーキテクチャ概観]] を参照する。プロトコル別の詳細は [[systems/cctp-v2-overview|CCTP V2 overview]] · [[systems/cctp-v2-technical-spec|CCTP V2 technical spec]] · [[systems/hyperlane-overview|Hyperlane overview]] · [[systems/hyperlane-ism-modular-security|Hyperlane ISM modular security]] · [[systems/layerzero-v2-omnichain-messaging|LayerZero v2 omnichain messaging]] · [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP institutional messaging]] を参照。これらの信頼モデルを横断する選定ロジックには [[systems/cross-chain-four-poles-selection-decision|クロスチェーン選定意思決定ツリー]] を使う。ブリッジの上位にある UX レイヤーは [[systems/chain-abstraction-pattern-overview|chain abstraction overview]] と [[systems/chain-abstraction-pattern-three-solutions|chain abstraction three solutions]] と合わせて読む。ハック時系列を再構成するためのセキュリティ・フォレンジック手法は [[security/INDEX|security index]] と [[security/bytecode-forensic-three-tier-verify|bytecode forensic three-tier verify]] を参照。

## このマトリクスが重要な理由

クロスチェーンブリッジは 2021-2024 暗号エコシステムの単一最大の損失源 —— 累計被害 ≥ $2.7B · CEX hack 総計を大きく超える。機関資金が onchain finance に参入する([[systems/chainlink-ccip-institutional-messaging|CCIP institutional]] における SWIFT / DTCC パイロット参照)前の重要ゲートは「ブリッジは保険可能か · 事故時に recover 可能か · trust model が risk committee の要求を満たすか」である。

ただしブリッジのセキュリティ全体像は protocol docs · Rekt leaderboard · L2Beat bridge risk · Nexus Mutual cover terms · 個別 audit firm レポートに分散しており —— 統一対照ビューが存在しない。本マトリクスは **trust model · validator security budget · hack history · insurance coverage · audit firm · recovery process** の 5 大次元を横展開し · institutional / DeFi ユーザーがブリッジ選定時に TVL や latency だけでなく · 「今日攻撃を受けた場合 · 私の $1M はどれだけ recover できるか · どのプロセスで」を見られるようにする。

マトリクスは 2026-Q2 状態を対照しており · 既に sunset した Multichain / Nomad / cBridge V1 等は含まない。Synapse と Connext は TVL の大幅減少により sunset 寸前だが参考として保持。

## プロトコル別セクション

### CCTP V2 (Circle)

**信頼モデル**:Native burn-mint · USDC は source chain で焼却 · Circle のオフチェーン attester が attestation を発行 · destination chain で再鋳造。Circle 中央集権 attester の単一信頼 · ただし OFAC + §501 コンプライアンス背書付き。Fast Transfer V2 8-20 秒 finality(V1 は 10-20 分)。

**バリデータのセキュリティ予算**:Circle 社自身の reputation + compliance moat · チェーン上経済 stake ではない。理論上 attester 秘密鍵が侵害されれば = 任意に USDC mint 可能 · しかし Circle はコントラクトを即時凍結可能(2022 Tornado Cash 制裁の実戦で凍結能力を検証)。

**過去のハック**:重大 incident なし(2023-06 ローンチから 2026-Q2 まで)。2024 で 1 回 attestation service の一時的 6 時間 outage(資金損失なし)。

**保険**:Circle 自身の SOC2 + reserve attestation(Deloitte 四半期 audit)。Nexus Mutual は USDC depeg cover を提供(CCTP 専用ではない)。Lloyd's of London は Coincover 経由で一部 institutional 顧客の USDC 保有を間接カバー。

**監査カバレッジ**:OpenZeppelin · Halborn · ChainSecurity · 2025-Q4 SOC2 Type II 通過。

**復旧プロセス**:Circle は receiver アドレスを凍結可能 · source chain に返却。institutional 顧客は Circle Mint OTC チャネルで直接補償(2023 SVB 危機時の USDC depeg 後に backstop 能力を実証)。

### Hyperlane

**信頼モデル**:Permissionless · ISM(Interchain Security Module)はアプリが自選 —— multisig(default)· EigenLayer restaking · ZK · optimistic · POS。各アプリが自身のセキュリティ tradeoff を設定([[systems/hyperlane-ism-modular-security|Hyperlane ISM modular security]] 参照)。

**バリデータのセキュリティ予算**:ISM 選択に依存。Default multisig ~ 10-of-15 オペレータ;EigenLayer-backed ISM は $1B+ ETH restake に達する(2026-Q2);ZK ISM のセキュリティは ZK proving system の前提に等価。

**過去のハック**:2024.07 Eclipse メインネットローンチから 2026-Q2 まで protocol-level incident なし。ただし individual app が ISM misconfigure で零細な損失あり(2024.11 long-tail アプリが 1-of-3 multisig 設定で攻撃を受け · 損失 $1.2M · Hyperlane の core 責任範囲外)。

**保険**:Sherlock は audit + cover bundle を提供(~$5M cover for core Hyperlane contracts)。Nexus Mutual は一部カバー(アプリ自身が申請要)。

**監査カバレッジ**:Trail of Bits · Zellic · OpenZeppelin · CertiK。2024-Q4 Cantina 公開コンテスト。

**復旧プロセス**:Permissionless ということは Hyperlane Foundation に強制 recovery 責任なし。アプリ自身がガバナンスを定義 · ISM アップグレードまたはオフチェーン OTC 協議で対応可能。Eclipse / Celestia 等の大手顧客は Foundation 調整。

### LayerZero v2



**信頼モデル**:DVN(Decentralized Verifier Network)M-of-N · アプリ自身がカスタム集合を定義。Default 設定 = LayerZero Labs + Google Cloud + Polyhedra ZK の 3 社。Lightweight ULN(Ultra Light Node)が destination で検証([[systems/layerzero-v2-omnichain-messaging|LayerZero v2 omnichain messaging]] 参照)。

**バリデータのセキュリティ予算**:DVN 集合に依存。LayerZero Labs 自身は中央集権運営 · Google Cloud はエンタープライズ SLA · Polyhedra は ZK proof + economic stake。マルチ DVN 設定コストは N と共に増加。

**過去のハック**:2024.01 一時的 DVN 設定バグ · 資金損失なし(即時ロールバック)。2023 一度 Stargate(LayerZero 上層アプリ)バグ · 修正後損失なし。Protocol-level は 2022 ローンチから重大 incident なし。

**保険**:Nexus Mutual ~$15M cover available。Sherlock コンテスト複数回。InsurAce 中等カバー。Stargate(LayerZero 上の token bridge)は自身の insurance fund を保有(LP は 0.06% fee を insurance pool に納める)。

**監査カバレッジ**:Zellic · Trail of Bits · Spearbit · Code4rena 多回コンテスト。2024 ZRO token ローンチ前に Quantstamp + OpenZeppelin が再審査。

**復旧プロセス**:LayerZero Labs は提案可能だが強制アップグレードはしない。app-level recovery はアプリチームが決定。Stargate の過去 incident は insurance pool + LP haircut で解決。

### Wormhole

**信頼モデル**:19-of-19 Guardian set マルチシグ(Jump Crypto · Everstake · Forbole · Chorus One · Staked.us · Figment · 等の機関ノード)。2024 に ZK Verifier を第二層 fail-safe として追加。NTT(Native Token Transfers)+ CCTP integration で USDC クロスチェーンは Circle attester を借用([[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole matrix]] 参照)。

**バリデータのセキュリティ予算**:Guardian ノードは全て機関運営 · ただし明示的な経済 stake なし(2024 W token ローンチ後に slashing 議論開始)。理論上 13-of-19 collusion で任意 message に署名可能。

**過去のハック**:**2022.02.02 Solana ブリッジで $325M 盗難**(攻撃者が wormhole スマートコントラクトの signature verification bypass を利用 · 120,000 wETH を鋳造したが ETH を入金していない)· Jump Crypto が 24 時間以内に 120,000 ETH を全額補填 · ユーザー損失なし。これは暗号史上最大の単一 backstop の 1 つ。2024 ZK Verifier 稼働後にこのタイプの攻撃は暗号学的に防御。

**保険**:独立 cover なし · ただし W token treasury + Wormhole Foundation 保有 ~$200M が暗黙の backstop。Jump Crypto 2022 補填は先例とみなされる(ただし 2024 後に repeat 約束なし)。Nexus Mutual は歴史的に Wormhole 引受拒否(2022 hack 後)· 2024 ZK Verifier 後に一部 cover availability 回復。

**監査カバレッジ**:Trail of Bits · OtterSec · Halborn · Coinspect。NTT ローンチ前に複数回 audit。2024 ZK Verifier は Polyhedra が独立 audit。

**復旧プロセス**:2022 Jump Crypto 補填は ad hoc 決定。正式プロセスは Foundation + Guardian 投票で governance proposal を起動。institutional 顧客は Wormhole Foundation OTC を経由。

### Chainlink CCIP

**信頼モデル**:Oracle DON(Decentralized Oracle Network · 通常 16-of-31)+ Risk Management Network(RMN · 独立した 2-of-N veto 委員会)。二層冗長設計 · institutional grade([[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP institutional messaging]] 参照)。

**バリデータのセキュリティ予算**:Chainlink LINK token staking(v0.2 ~$2B staked 2026-Q2)+ RMN 独立 client(異なるコードベース · ソフトウェアバグ防止)。RMN veto は任意の疑わしい message を凍結可能。

**過去のハック**:重大 incident なし(2023-07 メインネット稼働から 2026-Q2 まで)。CCIP v1.5 で 1 回 risk window false positive(資金損失なし · 遅延のみ)。

**保険**:Chainlink Foundation が LINK treasury を暗黙の backstop として保有。Nexus Mutual は ~$8M cover を提供。institutional 顧客(SWIFT / DTCC / J.P. Morgan Kinexys)は自身の risk team + Lloyd's syndicate で自前 cover。

**監査カバレッジ**:Trail of Bits · CertiK · Sigma Prime · NCC Group。各 v アップグレードで独立 audit。

**復旧プロセス**:RMN は即時 veto 可能 · DON は lane を pause 可能。Chainlink Foundation が institutional 顧客 OTC settlement を調整。

### Across

**信頼モデル**:Optimistic · UMA Optimistic Oracle 検証。Relayer が destination 資金を先払い · 次に UMA 7200 秒 challenge window で source chain 担保を回収。Intent-based 設計(ユーザーが intent を提出 · relayer が入札)。

**バリデータのセキュリティ予算**:UMA OO bonding ~$50M 総 challenge pool · 単一 transaction の経済セキュリティは bonded amount に等しい。Relayer は自身の collateral を持ち込む。

**過去のハック**:protocol-level hack なし(2022 ローンチから 2026-Q2 まで)。2024 で 1 回 relayer バグがコミュニティに 5 分以内で識別され撤回。

**保険**:Sherlock は ~$3M cover を提供。Nexus Mutual 一部カバー。Across DAO は ACX treasury を emergency fund として保有。

**監査カバレッジ**:OpenZeppelin · Trail of Bits · Code4rena · Sherlock コンテスト。

**復旧プロセス**:challenge window 内 dispute · UMA 委員会が仲裁。challenge window 後はロールバック不可 · しかし relayer collateral は slash 可能。

### Stargate (LayerZero)

**信頼モデル**:LayerZero v2 messaging + Stargate 固有の liquidity pool モデル(unified liquidity · 単一チェーンロックなし)に基づく。LayerZero v2 DVN trust 前提を継承。

**バリデータのセキュリティ予算**:LayerZero DVN + Stargate LP collateral(単一プール TVL $50M-500M)。

**過去のハック**:2023.03 で 1 回 transfer バグ損失 ~$0(即時修正)。2024 で 1 回 Curve スタイル read-only reentrancy が white hat に発見され修正(payout $500K)。大規模損失なし。

**保険**:Stargate は自前の insurance fund を持つ(LP fee 0.06% を pool に納める · ~$2M 残高 2026-Q2)。Nexus Mutual 一部カバー。

**監査カバレッジ**:Zellic · Trail of Bits · Spearbit · Code4rena 複数回。

**復旧プロセス**:Insurance fund が先に賠償 · 不足分は LP haircut。LayerZero Labs が messaging-layer アップグレードを調整。

### Synapse

**信頼モデル**:Validator set ~ 10-of-15 マルチシグ(オペレータ全員は非公開)。Liquidity bridge モデル(AMM swap + cross-chain message)。2024-Q4 に optimistic モード追加だが採用率低い。

**バリデータのセキュリティ予算**:validator は自身の stake を持つが金額非公開。TVL は 2023 ピーク $400M から 2026-Q2 ~$30M に減少 · 攻撃面が縮小。

**過去のハック**:protocol-level hack なし · しかし 2024 で複数回 LP pool drain が oracle manipulation により損失累計 ~$3M。SYN token 価格はピークから -95% · 実際の経済セキュリティが大幅に縮小。

**保険**:独立 cover available なし(insurer は TVL 縮小 + ガバナンス不透明により引受拒否)。

**監査カバレッジ**:Quantstamp · Halborn(2022)。2025 以降の新 audit なし。

**復旧プロセス**:Synapse DAO ガバナンス · しかし quorum に達しないことが多い。実質 sunset 寸前状態。

### Connext

**信頼モデル**:Optimistic Rollup スタイル fraud proof + Sequencer モデル。Routers(relayer 類似)が流動性を提供 · 7-day challenge window。「xCall」は chain-abstraction messaging API。

**バリデータのセキュリティ予算**:Router collateral(総 ~$10M 2026-Q2 · ピークより大きく低下)。Sequencer 中央集権化(Connext Inc.)。

**過去のハック**:protocol-level hack なし · しかし 2024-Q3 で 1 回 router insolvency により $400K LP 損失(Connext Inc. が自前補填で解決)。

**保険**:Sherlock 初期 cover は期限切れ未更新。Nexus Mutual は引受拒否(ガバナンス不透明)。

**監査カバレッジ**:Spearbit · Code4rena(2023)。

**復旧プロセス**:challenge window 内 dispute · しかし実際にトリガーされることは稀。Connext Inc. が ad hoc recovery を主導。

### Squid

**信頼モデル**:Axelar 上の swap router + cross-chain UX 層。基盤として Axelar validator set(75 ノード PoS)を継承。Squid 自身は messaging を担当せず · aggregator。

**バリデータのセキュリティ予算**:Axelar AXL staking ~$300M を借用(2026-Q2)。

**過去のハック**:protocol-level hack なし。1 回 frontend XSS 攻撃 2023 で ~$50K ユーザー影響(修正済)。

**保険**:独立 cover なし · Axelar 層リスクを借用。Squid は reserve を emergency として保有。

**監査カバレッジ**:Halborn · Spearbit。

**復旧プロセス**:Axelar ネットワークガバナンスに依存 · Squid チームが frontend 層 incident を調整。

### Axelar

**信頼モデル**:75-validator PoS ネットワーク(CosmosSDK + Tendermint 基盤)· クロスチェーン message は 2/3 validator quorum 署名。General Message Passing(GMP)+ Interchain Token(ITS)モデル。

**バリデータのセキュリティ予算**:AXL token staking ~$300M(2026-Q2)。Validator set 公開 · Binance · Coinbase Custody · Imperator · DSRV 等の機関ノードを含む。

**過去のハック**:protocol-level hack なし(2022 ローンチから 2026-Q2 まで)。2024 で 1 回 ITS 設定バグが white hat に発見 · payout $200K · ユーザー損失なし。

**保険**:Nexus Mutual ~$5M cover。InsurAce 中等カバー。Axelar Foundation treasury を backstop に。

**監査カバレッジ**:Trail of Bits · ChainSecurity · Code4rena · Cantina。

**復旧プロセス**:Axelar governance(AXL token ベース)· 2/3 validator 合意で lane を凍結またはロールバック可能。機関顧客は Foundation OTC を経由。

### deBridge

**信頼モデル**:12 validator delegated PoS · Chainlink CCIP integration を fallback として。「DLN」(deBridge Liquidity Network)intent-based settlement layer。

**バリデータのセキュリティ予算**:DBR token staking ~$80M(2026-Q2 推定)。

**過去のハック**:protocol-level hack なし。2022 で 1 回 Lazarus フィッシング攻撃 frontend(deBridge チームが警告)· 実際の損失なし。

**保険**:主流 insurer cover available なし。deBridge DAO treasury を emergency に。

**監査カバレッジ**:Zokyo · Halborn · Ackee Blockchain。

**復旧プロセス**:Validator quorum で message を pause 可能。DAO 投票で recovery を決定。

### Symbiosis

**信頼モデル**:Relayer ネットワーク + threshold signature scheme(TSS)· 15-of-21 マルチシグ。Cross-chain swap aggregator 位置付け。

**バリデータのセキュリティ予算**:SIS token staking ~$15M(2026-Q2)。TVL ~$40M。

**過去のハック**:protocol-level hack なし。2023 で 1 回 frontend バグ影響 < $10K。

**保険**:cover available なし。

**監査カバレッジ**:Hacken · CertiK · Beosin。

**復旧プロセス**:Foundation 調整。

### Allbridge

**信頼モデル**:Allbridge Classic(liquidity bridge · 2/3 multisig)+ Allbridge Core(stablecoin AMM · 各チェーン独立 LP)。2 つの製品ラインで trust 前提が異なる。

**バリデータのセキュリティ予算**:小規模 multisig · 総 TVL ~$20M(2026-Q2)。

**過去のハック**:**2023.04.01 Allbridge Classic が flash loan 攻撃で $570K 損失**(BSC 上の BUSD/USDT pool drain)。Hacker が後に 60% 返却(20% bounty)。Classic はそれ以来非推奨化。Core 製品ラインは incident なし。

**保険**:cover available なし。

**監査カバレッジ**:Hacken · SmartState(2022)。Core は Halborn が audit。

**復旧プロセス**:Foundation 調整 · Classic は既に freeze。

## 大型比較マトリクス表

**14 プロトコル × 7 次元対照**(2026-Q2 状態):

| プロトコル | 信頼モデル | バリデータのセキュリティ予算 | 過去のハック | 保険 | 監査会社 | 復旧プロセス |
|---|---|---|---|---|---|---|
| **CCTP V2** | Native burn-mint · Circle attester | Circle reputation + compliance moat · チェーン上 stake なし | None(2023-06+ ~$0)| Lloyd's via Coincover · NM USDC depeg cover | OpenZeppelin · Halborn · ChainSecurity · SOC2 Type II | Circle 凍結 + Mint OTC 補償 |
| **Hyperlane** | Permissionless ISM(multisig/EigenLayer/ZK/optimistic)| ISM 依存 · EigenLayer ISM ~$1B+ | None(2024-07+ ~$0 protocol-level)| Sherlock ~$5M · NM 一部 | Trail of Bits · Zellic · OpenZeppelin · CertiK · Cantina | App 自定 · Foundation が大手顧客調整 |
| **LayerZero v2** | DVN M-of-N(LayerZero/Google/Polyhedra default)| DVN 設定コスト N 依存 · Polyhedra ZK stake | None protocol-level(2022+ ~$0)· 2024 DVN bug 損失なし | NM ~$15M · Sherlock · InsurAce · Stargate insurance fund | Zellic · Trail of Bits · Spearbit · Quantstamp · OpenZeppelin | App 自定 · Stargate insurance fund が先に賠償 |
| **Wormhole** | 19-of-19 Guardian + 2024 ZK Verifier · NTT/CCTP integration | Guardian 機関 reputation · 2024 W token slashing 議論中 | **2022.02 $325M Solana(Jump 全額補填)**· 2024 ZK Verifier 後なし | 独立 cover なし · W treasury ~$200M 暗黙 backstop · NM 2024 後一部回復 | Trail of Bits · OtterSec · Halborn · Coinspect · Polyhedra(ZK)| Foundation + Guardian 投票 · institutional OTC |
| **Chainlink CCIP** | Oracle DON 16-of-31 + RMN 独立 veto(2-of-N)| LINK staking ~$2B · RMN 独立 client | None(2023-07+ ~$0)| NM ~$8M · institutional は Lloyd's syndicate で自前 | Trail of Bits · CertiK · Sigma Prime · NCC Group | RMN veto + DON pause + Foundation OTC |
| **Across** | Optimistic · UMA OO 7200s challenge window + relayer collateral | UMA bonding ~$50M | None(2022+ ~$0)· 2024 relayer bug 5 分修正 | Sherlock ~$3M · NM 一部 · ACX treasury | OpenZeppelin · Trail of Bits · Code4rena · Sherlock | UMA dispute · challenge 後 relayer slash |
| **Stargate (LZ)** | LayerZero DVN + LP unified liquidity | LZ DVN + LP TVL $50M-500M | 2023.03 transfer bug 損失なし · 2024 white hat $500K payout | Self insurance fund ~$2M(LP 0.06% fee)· NM | Zellic · Trail of Bits · Spearbit · Code4rena | Insurance fund が先に賠償 · LP haircut |
| **Synapse** | Validator multisig ~10-of-15 · 2024 optimistic モード低採用 | SYN -95% from peak · 経済セキュリティ縮小 · TVL ~$30M | protocol hack なし · 2024 複数 LP drain 累計 $3M | cover なし(insurer 引受拒否)| Quantstamp · Halborn(2022)· 新 audit なし | DAO quorum 不達 · sunset 寸前 |
| **Connext** | Optimistic + Router collateral + Sequencer(中央集権化)| Router collateral ~$10M | protocol hack なし · 2024 router insolvency $400K(Connext Inc. 補填)| Sherlock 期限切れ未更新 · NM 引受拒否 | Spearbit · Code4rena(2023)| Connext Inc. ad hoc |
| **Squid** | Axelar 上 swap router · Axelar trust を借用 | Axelar AXL ~$300M を借用 | protocol hack なし · 2023 frontend XSS $50K | 独立 cover なし · Axelar 層を借用 | Halborn · Spearbit | Axelar ガバナンス + Squid frontend 調整 |
| **Axelar** | 75-validator PoS(Tendermint)· 2/3 quorum · GMP/ITS | AXL staking ~$300M | None(2022+ ~$0)· 2024 ITS bug white hat $200K payout | NM ~$5M · InsurAce · Foundation treasury | Trail of Bits · ChainSecurity · Code4rena · Cantina | Validator 合意で凍結 · Foundation OTC |
| **deBridge** | 12 validator delegated PoS + CCIP fallback · DLN intent-based | DBR staking ~$80M | None protocol-level · 2022 Lazarus フィッシング損失なし | 主流 cover なし · DAO treasury | Zokyo · Halborn · Ackee | Validator quorum pause · DAO 投票 |
| **Symbiosis** | Relayer + TSS 15-of-21 · cross-chain swap aggregator | SIS staking ~$15M · TVL ~$40M | None · 2023 frontend bug < $10K | cover なし | Hacken · CertiK · Beosin | Foundation 調整 |
| **Allbridge** | Classic multisig + Core stablecoin AMM(独立 LP)| Multisig 小規模 · TVL ~$20M | **2023.04 Classic $570K BSC flash loan**(60% 返却)· Classic 非推奨化 | cover なし | Hacken · SmartState(Classic)· Halborn(Core)| Classic freeze · Foundation 調整 |

**マトリクスの読み方**:
- 横方向で 1 プロトコルの 7 次元プロファイル · 縦方向で同一次元の 14 プロトコル差異を見る
- **Insurance availability** は最も厳格な淘汰フィルタ —— 14 プロトコル中で主流 insurer の真の cover を持つのは ~6 個のみ · その他は自前 treasury の暗黙 backstop のみ
- **Hack-free track record** ≠ 安全 —— Synapse / Connext は protocol-level hack なしだが経済セキュリティが既に引受困難なレベルに縮小
- **Trust model + validator security budget の組み合わせ** が真の attack cost を決定 · Wormhole 19 Guardian は明示的 stake なしだが機関 reputation moat あり · LayerZero default DVN も同様に economic stake ではなくエンタープライズ SLA に依存

## 境界事例 / 今後の展望

**Recovery process の 2 パラダイム**:
- **Centralized backstop**(CCTP V2 Circle / Wormhole Jump スタイル補填 / Connext Inc. ad hoc)—— recovery は速いが単一エンティティの reputation と資本に依存
- **Decentralized governance recovery**(Axelar PoS validator 合意 / Hyperlane DAO / Across UMA dispute)—— recovery は遅いが検閲耐性あり · 真の非中央集権

機関顧客(SWIFT / DTCC / J.P. Morgan Kinexys · [[systems/cross-chain-four-poles-ccip-institutional|CCIP institutional]] 参照)は centralized backstop を好み · DeFi-native ユーザーは decentralized governance を好む · one-size-fits-all は存在しない。

**Insurance pool 容量ボトルネック**:Nexus Mutual 全体 capital ~$120M · 全額をブリッジ cover に allocate しても $50B+ クロスチェーン TVL を引き受け不可。これは insurance が永遠に「tail risk top-up」に過ぎず · 主要 backstop は protocol treasury + foundation となることを意味する。Sherlock の「audit + cover bundle」モデルはインセンティブを変えようと試みているが · 2024-2025 で複数回索賠後に capital が逼迫。

**2027-2028 トレンド**:
- **ZK light client** の普及により trust model が「validator set」から「math + DA」へ進化 —— Hyperlane ZK ISM · Wormhole ZK Verifier · LayerZero Polyhedra DVN が先行者([[systems/multi-proof-aggregation-fault-prover|multi-proof aggregation fault prover]] 参照)
- **Restaking-backed bridge security**(EigenLayer / Symbiotic AVS モデル · [[systems/eigenlayer-overview|EigenLayer overview]] 参照)により validator set が ETH stake を借用可能 · ただし rehypothecation システミックリスクは未解
- **Native L2-to-L2 messaging**(Optimism Superchain · Polygon AggLayer · Arbitrum Orbit cross-chain)により同一エコシステム内のブリッジが第三者 trust 不要に · 直接 settlement layer を借用 · 長期的に汎用ブリッジ需要を侵食
- **Post-quantum bridge migration**([[systems/post-quantum-blockchain-day1-integration|post-quantum blockchain day 1 integration]] 参照)は 2030+ にすべてのブリッジに署名アルゴリズムアップグレードを要求 · 大半のブリッジは公開 roadmap なし

**形式的検証**:Hyperlane / LayerZero / Wormhole はいずれも formal spec を導入し始めたが([[systems/formal-spec-implementation-codesign|formal spec implementation codesign]] 参照)実際のカバレッジは < 30% codebase。CCIP は institutional-grade 形式検証を持つ少数派(NCC Group + Galois 共同 audit)。

**真の保険可能 vs 名目上の保険可能**:Nexus Mutual / InsurAce / Sherlock の cover terms では「smart contract failure」と「validator collusion」は別カバー · 大半のユーザーは前者しか購入しない · ただし過去 hack の 60%+ は後者。これは名目上の cover ≠ 真の支払いを意味し · ユーザーは policy を精読する必要がある。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/INDEX|systems index]]
- [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]
- [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]]
- [[systems/cross-chain-four-poles-ccip-institutional|CCIP institutional default]]
- [[systems/cross-chain-four-poles-selection-decision|cross-chain selection decision tree]]
- [[systems/cctp-v2-overview|CCTP V2 overview]]
- [[systems/cctp-v2-technical-spec|CCTP V2 technical spec]]
- [[systems/hyperlane-overview|Hyperlane overview]]
- [[systems/hyperlane-ism-modular-security|Hyperlane ISM modular security]]
- [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero/CCIP]]
- [[systems/layerzero-v2-omnichain-messaging|LayerZero v2 omnichain messaging]]
- [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP institutional messaging]]
- [[systems/chain-abstraction-pattern-overview|chain abstraction pattern overview]]
- [[systems/chain-abstraction-pattern-three-solutions|chain abstraction three solutions]]
- [[security/INDEX|security index]]
- [[security/bytecode-forensic-three-tier-verify|bytecode forensic three-tier verify]]
<!-- /wiki-links:managed -->

## 出典

- Circle CCTP V2 docs · https://developers.circle.com/stablecoins/docs/cctp-getting-started
- Hyperlane docs · https://docs.hyperlane.xyz/
- LayerZero v2 docs · https://docs.layerzero.network/v2
- Wormhole docs · https://docs.wormhole.com/
- Chainlink CCIP docs · https://docs.chain.link/ccip
- Across docs · https://docs.across.to/
- Stargate docs · https://stargateprotocol.gitbook.io/stargate/
- Synapse docs · https://docs.synapseprotocol.com/
- Connext docs · https://docs.connext.network/
- Squid docs · https://docs.squidrouter.com/
- Axelar docs · https://docs.axelar.dev/
- deBridge docs · https://docs.debridge.finance/
- Symbiosis docs · https://docs.symbiosis.finance/
- Allbridge docs · https://docs.allbridge.io/
- DefiLlama bridges analytics · https://defillama.com/bridges
- Rekt leaderboard · https://rekt.news/leaderboard/
- DeFiYield Rekt database · https://defiyield.app/rekt-database
- Nexus Mutual cover terms · https://nexusmutual.io/
- InsurAce coverage list · https://insurace.io/
- Sherlock audit + cover model · https://www.sherlock.xyz/
- L2Beat bridges risk summary · https://l2beat.com/bridges/summary
