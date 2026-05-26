---
title: クロスチェーンブリッジ 8 極対照マトリクス · IBC / CCTP / CCIP / Wormhole / Hyperlane / LayerZero / Axelar / XCM
aliases:
  - cross-chain-bridge-eight-pole-comparison
  - cross-chain bridge eight-pole comparison
  - bridge eight comparison ibc cctp ccip wormhole hyperlane layerzero axelar xcm
  - cross-chain messaging eight-protocol matrix
domain: systems
created: 2026-05-25
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-25
confidence: likely
tags: [systems, matrix, bridge, cross-chain, ibc, cctp, ccip, wormhole, hyperlane, layerzero, axelar, polkadot, xcm]
status: active
sources:
  - https://ibc.cosmos.network/
  - https://github.com/cosmos/ibc
  - https://developers.circle.com/stablecoins/docs/cctp-getting-started
  - https://docs.chain.link/ccip
  - https://docs.wormhole.com/
  - https://docs.hyperlane.xyz/
  - https://docs.layerzero.network/v2
  - https://docs.axelar.dev/
  - https://wiki.polkadot.network/
  - https://github.com/paritytech/xcm-format
  - https://defillama.com/bridges
  - https://l2beat.com/bridges/summary
  - https://rekt.news/leaderboard/
  - https://defiyield.app/rekt-database
---

# クロスチェーンブリッジ 8 極対照マトリクス · IBC / CCTP / CCIP / Wormhole / Hyperlane / LayerZero / Axelar / XCM

## TL;DR

- 8 大主流 cross-chain interop プロトコルの 2026-Q2 時点での trust model · TVL · chains supported · message-passing · latency · fee · native asset · security · institutional pilot の 9 次元対照
- **Trust model 4 象限**: **light-client / shared security** (IBC, XCM) · **oracle network** (CCIP, LayerZero DVN) · **threshold-sig multisig** (Wormhole Guardian) · **permissionless modular** (Hyperlane ISM) · および **native burn-mint** (CCTP) という独立カテゴリ
- **汎用ブリッジ次元での TVL**(defillama 2026-Q2 推定): LayerZero ~$8B · Axelar ~$3.5B · IBC stack ~$2-3B · Hyperlane ~$2B · Wormhole ~$1.5B · CCIP ~$1B · XCM 内部 ~$1B · CCTP V2 は「ブリッジ TVL」に計上しない(burn-mint モデルでロックなし)
- **真の差別化軸**: **(a) チェーンカバレッジ** — LayerZero / Wormhole / Hyperlane は 70+ chains · CCIP は 30+ · Axelar は 60+ · IBC は ~100 個の Cosmos appchain · XCM は ~50 個の parachain · CCTP V2 は ~18 chains
- **(b) セキュリティ事件**: Wormhole 2022 $325M (Jump が全額補填) · その他 7 プロトコルは 2026-Q2 まで protocol-level の major hack なし(ただし [[systems/cross-chain-bridge-security-insurance-matrix-2026|bridge security insurance matrix]] の individual app misconfig 損失参照)
- **(c) Institutional pilot**: CCIP(SWIFT / DTCC / J.P. Morgan Kinexys)· CCTP V2(Mastercard / Visa ステーブルコインパイロット · Stripe)· XCM(英国中銀 RTGS パイロット · 中央保管所相互運用)· その他のプロトコルは DeFi-native 寄り
- 経路: [[systems/cross-chain-bridge-security-insurance-matrix-2026|bridge security + insurance matrix]] (security 深度) · [[systems/cross-chain-five-pole-comparison-matrix|five-pole comparison]] (general 9-axis) · [[systems/cross-chain-four-poles-overview|four-poles architecture]] (taxonomy) · 本マトリクスは 8 プロトコル横断 institutional 次元に特化

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-bridge-security-insurance-matrix-2026|bridge security + insurance matrix]] for the security forensics view, [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] for the general 9-axis comparison, [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]] for the architecture taxonomy, and [[systems/cross-chain-four-poles-selection-decision|selection decision tree]] for which trust model to pick. For protocol-specific deep dives see [[systems/ibc-cosmos-cross-chain|IBC overview]] · [[systems/cctp-v2-overview|CCTP V2 overview]] · [[systems/cctp-v2-technical-spec|CCTP V2 technical spec]] · [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP institutional]] · [[systems/hyperlane-overview|Hyperlane overview]] · [[systems/hyperlane-ism-modular-security|Hyperlane ISM modular security]] · [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero / CCIP]] · [[systems/layerzero-v2-omnichain-messaging|LayerZero v2 omnichain messaging]] · [[systems/polkadot-xcm-parachain-messaging|Polkadot XCM]] · [[systems/chain-abstraction-pattern-overview|chain abstraction pattern]]. For institutional framing see [[systems/cross-chain-four-poles-ccip-institutional|CCIP institutional default]] and [[systems/institutional-dlt-adoption-comparison-2026|institutional DLT adoption]]. For shared-security alternatives see [[systems/eigenlayer-overview|EigenLayer]] and [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape]].

## Why this matrix matters

クロスチェーン interop は 2026 までに「汎用ブリッジ単一中核戦争」(2021-2023)から「trust model 多核 + ユースケース分化」へと進化した。機関顧客(SWIFT / DTCC / Mastercard / 中央銀行)は institutional pilot 経験のあるプロトコル(CCIP / CCTP V2 / XCM)を優先 · DeFi-native 資金は TVL + chains supported(LayerZero / Wormhole / Hyperlane)を優先 · Cosmos-native アプリは IBC · Polkadot 内部は XCM を使う。

しかし選定意思決定は極めて分散化している — 各プロトコルの公式ドキュメントは自身の優位性を強調し · L2Beat / DefiLlama は TVL を提供するが institutional pilot 次元は提供せず · Rekt leaderboard は hack を提供するが trust model 横断対照は提供しない。**本マトリクスの価値は 8 プロトコル × 9 次元を 1 枚の表に横展開し · 「どのプロトコルが institutional cross-border settlement / DeFi yield routing / Cosmos appchain interop に適するか」を明確にすること**にある。

注意:本マトリクス ≠ [[systems/cross-chain-bridge-security-insurance-matrix-2026|security + insurance matrix]]。後者は 14 プロトコル × security/insurance の深度;本マトリクスは 8 プロトコル × institutional/general 次元。両者は相補的。Synapse / Connext / Stargate / Across などの「二次ブリッジ / liquidity bridge」は本マトリクスに含まれない — それらの messaging 層は多くの場合 LayerZero / Wormhole / IBC の上に構築されており · 独立した trust-model peer ではないため。

## Per-protocol sections

### IBC (Cosmos Inter-Blockchain Communication)

**Trust model**: **Light-client based** — チェーン A はチェーン B 上でチェーン B の light client(Tendermint consensus proof verification)を実行 · チェーン B はチェーン A 上で逆方向に実行 · 両端で相互検証。**No third-party validator / oracle** — 信頼前提は両チェーンそれぞれのコンセンサス前提と等価。これは 2026 で唯一普及した light-client interop 標準。

**TVL**: ~$2-3B IBC 横断資産(defillama 2026-Q2)。Cosmos hub-and-spoke 構造 · ATOM / OSMO / TIA / INJ 等の主流 token がマルチチェーン分布。

**Chains supported**: **~100 Cosmos appchain** + IBC-go bridges 経由で Ethereum / Solana に(IBC v2 + Polymer / Wormhole IBC adapter)· ただしクロスエコシステム IBC は依然初期段階。

**Message-passing model**: **Channel-based** — チェーン A とチェーン B が channel + connection を確立 · relayer(信頼前提なし · packet を運搬するのみ)経由で packet を渡す · 受信側 light-client が検証。

**Validation latency**: source chain finality + relayer 運搬 + destination 検証と等しい · 一般に 6-30 秒。Tendermint finality は通常 6 秒 · channel relay 数秒 · destination 検証 sub-second。

**Fee model**: **Free at protocol layer** — relayer が gas を自己負担 · ただし IBC fee middleware は relayer reimbursement の徴収を許可(一部チェーンで有効化)。エンドユーザー体験はほぼゼロコスト。

**Native asset**: プロトコル token なし · Cosmos hub / 各 appchain 自身の token を借用。ATOM は hub security として使用 · IBC プロトコル token ではない。

**Security incidents (2026-Q2)**: **None at IBC protocol layer** since launch(2021)。光クライアント実装のバグが数回(Tendermint バグ)パッチされたが · 資金損失なし。CCTP に次いで record が最もクリーンなブリッジ。

**Institutional pilots**: 直接 institutional pilot は少ない · しかし Cosmos エコシステム内 dYdX v4 · Injective · Berachain 等の高 TVL appchain 間ルーティングは IBC に依存。Noble(USDC native issuer chain)は IBC + CCTP の双ブリッジに接続 · 機関ステーブルコインにサービス提供。

### CCTP V2 (Circle USDC native burn-mint)

**Trust model**: **Native burn-mint** — USDC は source で焼却 · Circle のオフチェーン attester が attestation に署名 · destination で鋳造。Circle 中央集権 attester の単一信頼 · しかし OFAC + コンプライアンス backstop あり。**Not a general messaging protocol** — USDC しか転送できない(CCTP V2 Hooks は piggyback callback を許容するが汎用 message ではない)。

**TVL**: **Not applicable** — burn-mint モデルでロック TVL なし · ただし CCTP V2 月次転送量 ~$50B+(2026-Q2 推定 · 機関 + DeFi 含む)。

**Chains supported**: **18+ chains** — Ethereum + Arbitrum + Base + Optimism + Polygon + Avalanche + Solana + Noble + Arc + Aptos 等。2026 引き続き拡大。

**Message-passing model**: **Burn → attest → mint**。Source contract で USDC を burn · event を発出 · Circle attester が監視 + attestation に署名(EIP-712 フォーマット)· destination contract が attestation で mint を解除。V2 Hooks は attestation で任意の callback をトリガー可能(汎用 messaging の receive() に類似)。

**Validation latency**: **V2 Fast Transfer 8-20 秒**(V1 は 10-20 分 · ~30x 改善)。Fast Transfer モードでは Circle が即時署名 · standard モードは finality を待つ。

**Fee model**: V1 free(Circle が自己負担)· V2 Fast Transfer は少額 fee を徴収(~0.01-0.05% · チェーンにより異なる · attester operating cost 用)· Hooks は追加 callback gas を徴収。

**Native asset**: **USDC only**(プロトコル token なし · ガバナンスなし · Circle 社が運営)。

**Security incidents (2026-Q2)**: **None** since CCTP V1 launch(2023-01)。2024 attestation service の一時的な 6 時間 outage 1 回(資金損失なし · attestation 再試行メカニズムが吸収)。

**Institutional pilots**: **極めて活発** — Mastercard / Visa ステーブルコインパイロットが CCTP を基盤 settlement に使用 · Stripe 国際送金は CCTP を使用 · Coinbase Institutional cross-chain · 大量の fintech merchant USDC settlement が CCTP V2 で V1 を置換。

### Chainlink CCIP

**Trust model**: **Oracle DON + Risk Management Network 双層** — DON(Decentralized Oracle Network · 通常 16-of-31 multi-party node)が message に署名 · 独立した RMN(2-of-N veto 委員会 · 異なるコードベース · ソフトウェアバグ + 結託防止)が任意の疑わしい message を凍結可能。**Institutional grade**([[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP institutional]] 参照)。

**TVL**: ~$1B CCIP 横断資産 + 数十億の message-only volume(defillama 2026-Q2)。institutional フローは全て disclose されないため · 実際の throughput はより高い可能性。

**Chains supported**: **30+ chains** — 主流 EVM + Solana + Avalanche subnet + Polygon CDK rollup。数より質に集中。institutional パートナーチェーン(Canton / Arc / 銀行プライベートチェーン)が優先接続。

**Message-passing model**: **Lane-based** — 各 source-destination ペアは独立した lane で · 自身の token pool / rate limit / risk parameters を持つ。General Messaging + Programmable Token Transfer の 2 種類のプリミティブ。

**Validation latency**: ~10-30 分(source finality + DON consensus + RMN risk check + destination delivery を含む)。institutional シナリオでは latency は最適化重点ではなく · finality + audit trail が重要。

**Fee model**: LINK または native gas で message fee を徴収。Fee には DON gas + RMN cost + destination gas 前払いが含まれる。

**Native asset**: LINK(2026-Q2 staking ~$2B · v0.2)。staked LINK がプロトコル経済セキュリティを提供。

**Security incidents (2026-Q2)**: **None** since CCIP mainnet launch(2023-07)。CCIP v1.5 で 1 回 risk window false positive(資金損失なし · 遅延のみ)。

**Institutional pilots**: **最も豊富** — **SWIFT** クロスボーダー CCIP パイロット(2024-2025)· **DTCC** Smart NAV / Project Ion settlement パイロット · **J.P. Morgan Kinexys** + Chainlink アトミック settlement · Mastercard CBDC interop · ANZ / BNP Paribas / Lloyd's 銀行パイロット · 多数の G-SIB が CCIP を internal cross-chain ルーティングに使用。

### Wormhole

**Trust model**: **19-of-19 Guardian set マルチシグ** — 19 個の機関ノード(Jump Crypto · Everstake · Forbole · Chorus One · Staked.us · Figment 等)が VAA(Verifiable Action Approval)に署名。2024 に **ZK Verifier** を第二層 fail-safe として追加(Guardian 結託 + ソフトウェアバグ防止)。NTT(Native Token Transfers)+ CCTP integration で USDC は Circle attester を借用。

**TVL**: ~$1.5B(defillama 2026-Q2)。2022 hack 後に市場シェアが下落 · 2024 ZK Verifier 稼働後一部回復。

**Chains supported**: **35+ chains** — Solana(Wormhole ネイティブ)+ Ethereum + 主流 EVM + Aptos + Sui + Cosmos via IBC adapter + Bitcoin testnet。初期の Solana-Ethereum-only ラベルは既に不正確。

**Message-passing model**: **Generic Message Passing**(GMP)— source contract が message を emit · Guardian が観測後に VAA に署名 · destination contract が VAA で action を解除。NTT は token-specific アプリケーション層。

**Validation latency**: Solana ↔ Ethereum ~15 分(Solana finality が比較的遅い)· EVM ↔ EVM ~5 分。ZK Verifier が zk proof 経路を取る時の latency も同じだが安全性は高い。

**Fee model**: destination gas relay fee を徴収(sender が前払いまたは receiver が自己負担)· Guardian network 自身は message 層で free(W token treasury が Guardian operating cost を補助)。

**Native asset**: W token(2024 ローンチ)· slashing メカニズムは 2024 以降議論されているが未起動。Guardian 経済インセンティブは依然主に reputation + W treasury 補助に依存。

**Security incidents (2026-Q2)**: **2022.02.02 Solana ブリッジで $325M 盗難**(signature verification bypass · 攻撃者が 120k wETH を mint したが ETH を入金していない)· Jump Crypto が 24 時間以内に backstop · ユーザー損失ゼロ。2024 ZK Verifier 稼働後に当該 attack class は暗号学的に防御。その他の incident は [[systems/cross-chain-bridge-security-insurance-matrix-2026|security matrix]] 参照。

**Institutional pilots**: 中程度 — Wormhole は institutional asset issuance(Securitize · Backed Finance トークン化 treasury)に使用 · 一部 RWA クロスチェーン。機関 pilot は CCIP より少ないが · Hyperlane / LayerZero より多い。

### Hyperlane

**Trust model**: **Permissionless modular** — 各アプリは自身の Interchain Security Module(ISM)を選択: multisig default / EigenLayer restaking / ZK / optimistic / PoS。**「Hyperlane validators」は存在しない** — セキュリティはアプリ自身で configure([[systems/hyperlane-ism-modular-security|Hyperlane ISM modular security]] 参照)。

**TVL**: ~$2B(defillama 2026-Q2 · Eclipse / Celestia / Berachain rollup interop フローを含む)。

**Chains supported**: **70+ chains** — 主流 EVM + Solana + Cosmos SDK + Eclipse + 大量の long-tail rollup。permissionless deploy により任意のチェーンが Hyperlane stack を自己デプロイ可能。

**Message-passing model**: **Mailbox + ISM** — source chain Mailbox が message を dispatch · validator(ISM に依存)が観測 · destination ISM が verify · destination Mailbox が deliver。

**Validation latency**: ISM に依存。Multisig ISM ~30 秒-2 分 · ZK ISM ~5-10 分(proving time)· optimistic ISM ~ challenge window(7-30 分 default)。

**Fee model**: Source chain gas + destination relay fee(sender が支払い)。ISM-specific cost はアプリが選択(EigenLayer restaking ISM は AVS operator に追加 fee あり)。

**Native asset**: 2024 HYP token ガバナンス起動 · staking 強制なし · 主にガバナンス + grants に使用。

**Security incidents (2026-Q2)**: **None at protocol level**(Eclipse mainnet launch 2024-07)。2024.11 long-tail アプリが ISM(1-of-3 multisig)の設定ミスで攻撃を受け ~$1.2M · Hyperlane の core 責任範囲外 — これは modular ISM モデルの固有 trade-off。

**Institutional pilots**: institutional pilot は少ない — Hyperlane は主に modular rollup ecosystem(Celestia DA + EVM execution · Eclipse SVM-on-Ethereum 等)にサービス。institutional 顧客は CCIP / CCTP を好む。

### LayerZero v2

**Trust model**: **DVN(Decentralized Verifier Network)M-of-N · アプリがカスタム集合を定義**。Default = LayerZero Labs + Google Cloud + Polyhedra ZK の 3 社 DVN。Lightweight ULN(Ultra Light Node)が destination chain で検証([[systems/layerzero-v2-omnichain-messaging|LayerZero v2 omnichain messaging]] 参照)。

**TVL**: ~$8B(defillama 2026-Q2)— LayerZero アプリ層は Stargate · TapiocaDAO · Radiant 等を含む · TVL 最高の汎用 messaging。

**Chains supported**: **70+ chains** — 主流 EVM + Aptos + Solana + TON + 大量の EVM L2 / sidechain。chain coverage は Wormhole / Hyperlane と同等。

**Message-passing model**: **Endpoint + DVN + Executor** — source Endpoint が message を emit · 複数 DVN(アプリが設定)が各自 attest · destination Endpoint が要求 quorum を待った後 deliver · Executor が callback をトリガー。

**Validation latency**: DVN 集合に依存。Default 設定 ~2-5 分。single DVN を設定可能 · ~30 秒まで加速(セキュリティを犠牲)。

**Fee model**: Source で native fee を徴収 · destination gas + DVN fee + Executor fee を含む。各 DVN が独立に見積もる。

**Native asset**: ZRO(2024 ローンチ)· 現時点では主にガバナンス · slashing メカニズム議論中だが未起動。

**Security incidents (2026-Q2)**: **None protocol-level**(2022 ローンチ以来)。2024.01 で 1 回 DVN 設定バグ、資金損失なし(即時ロールバック)。Stargate 上層アプリは歴史的に 2023 で 1 回バグ修正、損失なし。

**Institutional pilots**: 中程度 — Google Cloud が default DVN オペレータとして · LayerZero と enterprise 統合の重要 anchor。一部銀行 pilot は LayerZero を経由。しかし CCIP institutional pilot 数は依然 LayerZero を上回る。

### Axelar

**Trust model**: **75-validator PoS ネットワーク**(CosmosSDK + Tendermint ベース)· クロスチェーン message は 2/3 validator quorum 署名。**General Message Passing (GMP)** + **Interchain Token Service (ITS)** の 2 大プリミティブ。Validator は公開 · Binance · Coinbase Custody · Imperator · DSRV 等の機関を含む。

**TVL**: ~$3.5B(defillama 2026-Q2)。Squid Router(swap aggregator)が Axelar 上で大量のリテールフローを貢献。

**Chains supported**: **60+ chains** — 主流 EVM + Cosmos SDK(ネイティブ)+ Solana + Aptos + Sui。Cosmos chain が EVM に接続する主要経路の 1 つ。

**Message-passing model**: GMP message は Axelar チェーンを message hub として中継 — source chain → Axelar validator quorum sign → destination chain。ITS は token-specific deployment テンプレート(canonical token + interchain token)を提供。

**Validation latency**: ~30 秒-2 分(source chain finality と Axelar block confirmation に依存)。

**Fee model**: AXL または destination native gas で message fee を徴収。fee には validator operating cost + destination gas relay が含まれる。

**Native asset**: **AXL token**(staking ~$300M 2026-Q2)· validator の staking + slashing が経済セキュリティを提供。

**Security incidents (2026-Q2)**: **None at protocol layer**(2022 launch 以来)。2024 で 1 回 ITS 設定バグが white hat により発見 · $200K bug bounty payout · ユーザー損失なし。

**Institutional pilots**: 中程度 — Axelar は Centrifuge(RWA)· Microsoft Azure · 一部 Cosmos appchain institutional adoption と統合。institutional pilot 数は CCIP / CCTP より少ないが Hyperlane より多い。

### Polkadot XCM

**Trust model**: **Shared-security relay chain** — Polkadot relay chain が全 parachain state transition を検証 · parachain 間は XCM message で相互運用 · **第三者検証は不要** — セキュリティは relay chain validator(Nominated PoS · ~300 validator)が統一提供([[systems/polkadot-xcm-parachain-messaging|Polkadot XCM]] 参照)。

**TVL**: ~$1B parachain 横断(2026-Q2)。Polkadot エコシステム TVL は Ethereum + L2 より小さいが · XCM 内部相互運用の成熟度は高い。

**Chains supported**: **~50 parachain**(Acala · Moonbeam · Astar · Bifrost · Hydration 等)+ XCM v3+ 起動後 bridge を経由して Kusama / Ethereum / Cosmos へ(初期段階)。

**Message-passing model**: **XCM (Cross-Consensus Messaging)** — UMP(parachain → relay)· DMP(relay → parachain)· HRMP(parachain → parachain via relay)· XCMP(future · parachain ↔ parachain direct)。Relay chain が message router。

**Validation latency**: ~12 秒(relay chain block 1 つ) HRMP 1 hop;XCMP planned future ~6 秒。多くの汎用ブリッジより低い。

**Fee model**: Parachain が自身で fee を定義(DOT または parachain native token)。Asset Hub が canonical asset issuance(USDT / USDC native on Polkadot)を提供 · cross-chain bridge 不要。

**Native asset**: **DOT**(relay chain staking + governance)。Asset Hub 上の USDT / USDC は native issued(Tether / Circle が直接 Polkadot 上で発行)· wrapped asset に依存しない。

**Security incidents (2026-Q2)**: **None** at XCM protocol layer(XCM v2 2022 デプロイから 2026-Q2 まで)。Acala 2022 aUSD depeg は parachain アプリ層バグ · XCM プロトコルとは無関係。

**Institutional pilots**: institutional 接続多い — **英国中銀 RTGS パイロット** が Polkadot で wholesale CBDC 相互運用をテスト · **欧州中央保管所(Euroclear)** 等の RWA パイロット · **JAM(Join-Accumulate Machine)** 2024 announcement 後 institutional settlement narrative が強化。しかし institutional pilot 数は CCIP より少ない。

## Big comparison matrix table

**8 プロトコル × 9 次元対照**(2026-Q2 状態):

| プロトコル | Trust model | TVL (defillama) | Chains | Message model | Validation latency | Fee model | Native asset | Security incidents | Institutional pilots |
|---|---|---|---|---|---|---|---|---|---|
| **IBC (Cosmos)** | Light-client (chain ↔ chain 相互検証) | ~$2-3B | ~100 Cosmos appchain + クロスエコシステム v2 | Channel + Connection + relayer 運搬 | 6-30s | プロトコルで Free · fee middleware optional | n/a (hub / appchain token を借用) | None (2021+) | 直接は少ない · 内部 dYdX v4 / INJ / Noble |
| **CCTP V2 (Circle)** | Native burn-mint · Circle attester | n/a (ロックなし) · ~$50B/mo throughput | 18+ chains | Burn → attest → mint + Hooks callback | Fast Transfer 8-20s · V1 was 10-20min | V2 小額 fast-transfer fee + Hooks gas | n/a (USDC のみ) | None (2023+) · 2024 6h outage 0 loss | Mastercard · Visa · Stripe · Coinbase Inst. |
| **Chainlink CCIP** | Oracle DON (16-of-31) + RMN independent veto | ~$1B + msg-only volume | 30+ chains (質 > 数) | Lane-based · GMP + Programmable Token Transfer | 10-30min | LINK or native · DON + RMN + dest gas | LINK (~$2B staked) | None (2023+) · v1.5 false positive no loss | SWIFT · DTCC · J.P. Morgan Kinexys · Mastercard CBDC |
| **Wormhole** | 19-of-19 Guardian + 2024 ZK Verifier · NTT/CCTP integ | ~$1.5B | 35+ chains | GMP (VAA Verifiable Action Approval) | 5-15min (Solana ↔ ETH 遅め) | Destination gas relay · Guardian free at msg | W token (2024) · slashing TBD | **2022 $325M Solana (Jump backstop)** · 2024 ZK 修正 | 中 — Securitize · Backed Finance RWA |
| **Hyperlane** | Permissionless ISM (multisig/EL/ZK/opt) | ~$2B | 70+ chains · permissionless deploy | Mailbox + ISM verify + Mailbox deliver | 30s-2min (multisig) · 5-10min (ZK) | Source gas + dest relay + ISM-specific | HYP (2024 · ガバナンス) | None protocol · 2024 long-tail misconf $1.2M | 少 · 主に modular rollup eco |
| **LayerZero v2** | DVN M-of-N (LZ Labs/Google/Polyhedra default) | ~$8B | 70+ chains | Endpoint + DVN + Executor · ULN dest verify | 2-5min default · 30s single DVN | Native fee · DVN + Executor 独立 | ZRO (2024 · ガバナンス) | None protocol (2022+) · 2024 DVN bug 0 loss | 中 · Google DVN は enterprise anchor |
| **Axelar** | 75-validator PoS (Tendermint) · 2/3 quorum · GMP+ITS | ~$3.5B | 60+ chains | GMP via Axelar hub · ITS canonical token | 30s-2min | AXL or dest native · validator + dest gas | AXL (~$300M staked) | None (2022+) · 2024 ITS bug $200K bounty | 中 · Centrifuge · Azure · Cosmos institutional |
| **Polkadot XCM** | Shared-security relay (~300 NPoS validators) | ~$1B intra-eco | ~50 parachain + early cross-eco | UMP / DMP / HRMP via relay chain | ~12s HRMP · XCMP future 6s | Parachain-defined (DOT or token) · Asset Hub canonical | DOT (relay staking) · USDT/USDC native | None XCM protocol (2022+) · Acala app-level not XCM | UK RTGS pilot · Euroclear · JAM settlement narrative |

**マトリクスの読み方**:
- 横方向で 1 プロトコルの 9 次元 institutional プロファイル · 縦方向で 8 プロトコルの同一次元差を見る
- **Trust model 次元**: IBC + XCM は「math + shared security」(最も trust-minimized);CCIP + Wormhole + LayerZero + Axelar は「validator / oracle network」(institutional 監査可能);Hyperlane は「アプリ自選」(柔軟だがアプリに責任移転);CCTP は「Circle 単一 + コンプライアンス背書」(institutional フレンドリーだが single point of trust)
- **Chains supported 次元**: LayerZero / Hyperlane / Wormhole / Axelar 70+ chains が DeFi 汎用ブリッジ標準;CCIP 30+ chains が institutional grade(数では競争せず · 質に集中);IBC ~100 chains だが全て Cosmos eco;XCM ~50 chains 全て Polkadot eco
- **Institutional pilots 次元**: CCIP > CCTP > XCM > Axelar > Wormhole > LayerZero > Hyperlane > IBC(institutional density 降順)
- **Security incidents 次元**: 8 プロトコル中で Wormhole のみ protocol-level major hack あり($325M Solana 2022)· しかし Jump backstop でユーザー損失ゼロ · 2024 ZK Verifier で当該 attack class を修正。他 7 プロトコルは protocol-level クリーン · ただし Hyperlane の app-level misconfig は modular ISM モデルの固有 trade-off

## Boundary cases / future trajectory

**Shared-security パラダイム vs Validator-set パラダイム**:
- IBC + XCM は shared-security の代表 — trust assumption は source chain consensus と等価 · "no extra trust" · ただし chain coverage は同一エコシステム内に制限
- CCIP / LayerZero / Wormhole / Axelar / Hyperlane は validator-set / oracle network の代表 — chain coverage 柔軟 · ただし追加の trust assumption(validator collusion リスク)
- **EigenLayer / Symbiotic restaking** が新パラダイムを導入:Ethereum コンセンサスの stake を validator network に「貸す」([[systems/eigenlayer-overview|EigenLayer overview]] / [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape]] 参照)· Hyperlane EigenLayer ISM は初期 production 例
- 2027-2028: ZK light client(Hyperlane ZK ISM · LayerZero Polyhedra DVN · Wormhole ZK Verifier)により validator-set ブリッジも shared-security の trust-minimization を享受可能 · パラダイムが融合する可能性

**Native USDC issuance(Polkadot Asset Hub · Noble · Arc)が CCTP に与える影響**:
- Asset Hub / Noble / Arc は Tether / Circle が直接 native USDT/USDC を発行 · クロスチェーン需要を削減(同一エコシステム内で free transfer)
- ただしクロスエコシステム(Polkadot ↔ Ethereum)は依然 CCTP / 汎用ブリッジが必要
- 長期:**USDC native issuance チェーンが増えるほど · CCTP V2 は「エコシステム間ブリッジ」として位置付け** · 「ETH ↔ Solana 主流ブリッジ」ではなく

**SWIFT / DTCC / 中銀 pilot の影響**:
- CCIP と SWIFT (2024-2025) · DTCC (2025) パイロットは institutional credibility のアンカー
- XCM と英国中銀 RTGS · Euroclear 等の institutional 接触
- CCTP V2 と Visa / Mastercard / Stripe はステーブルコイン決済 institutional アンカー
- 8 プロトコルで institutional pilot が多いほど · regulator は認可しやすい傾向 · 将来 G-SIB コンプライアンス cross-chain 需要は CCIP / CCTP / XCM に集中

**Wormhole 2022 hack の長期プライシング**:
- Jump Crypto $325M backstop は historic precedent · ただし Jump は repeat を約束しない
- 2024 ZK Verifier 修正後に attack class は閉じた · しかし Guardian collusion(13-of-19)の理論リスクは依然
- Nexus Mutual は 2022 後に Wormhole の引受を拒否 · 2024 ZK 後に一部 cover availability が回復([[systems/cross-chain-bridge-security-insurance-matrix-2026|security + insurance matrix]] 参照)
- Wormhole 市場シェア(2022 ~$1B → 2026 ~$1.5B)の回復は遅い · 「hack history」が institutional 選定時の長期負担であることを示す

**Hyperlane ISM モデルの拡散影響**:
- 「Permissionless deploy + 自選 ISM」により Hyperlane は modular rollup ecosystem(Celestia / Eclipse / Berachain)で default messaging の地位を占める
- ただし ISM misconfigure リスクにより Hyperlane は institutional ユースケースで dominate しにくい — institutional は「唯一の監査可能 trust model」を好む
- **trade-off**: Hyperlane は flexibility で市場シェアを取り · CCIP は institutional grade で audit-ability を取る · universal winner は存在しない

**XCM 2.0 / JAM と Polkadot 復興**:
- JAM(Join-Accumulate Machine)は Polkadot 2.0 の settlement layer 再設計 · 「relay chain が全てを検証」を「polkadot が generic execution を提供」へアップグレード — 任意のチェーンが shared security に接続可能 · parachain slot 競売に限定されない
- もし JAM が 2026-2027 メインネットローンチすれば · Polkadot XCM は「Polkadot 内部相互運用」から「汎用 shared-security interop」へ拡張可能 · Cosmos IBC と直接競争
- institutional pilot(英国中銀)が JAM の G-SIB compliant 設計優先を推進する可能性

**汎用ブリッジ vs アプリケーション層ブリッジの階層化**:
- 汎用 messaging(CCIP / Wormhole / Hyperlane / LayerZero / Axelar)+ アプリケーション層 liquidity bridge(Stargate / Across / Squid / Synapse)の分業は既に安定
- ただしアプリケーション層ブリッジ([[systems/cross-chain-bridge-security-insurance-matrix-2026|security matrix]] に詳述)は整理段階 — Synapse / Connext は sunset に近い · Across + Squid + Stargate が主導
- 長期可能性:**汎用ブリッジ + 極少数のアプリケーション層 liquidity layer** · アプリケーション層ブリッジの TVL がさらに集中

**Solana エコシステムのブリッジ特殊需要**:
- Solana は high-throughput + 独立 SVM のため · cross-chain ブリッジ需要が非常に高い(non-EVM ↔ EVM)
- Wormhole は Solana ネイティブサポート · CCTP V2 / LayerZero / Hyperlane も全てサポート
- Jupiter / Raydium 等の Solana DEX([[exchanges/solana-ecosystem-dex-comparison|Solana DEX comparison]] 参照)が cross-chain liquidity routing の需要を駆動し Wormhole / CCTP V2 Solana volume を促進
- 2026-2027 Solana エコシステムブリッジ競争は Wormhole vs CCTP V2 vs LayerZero の 3 社(IBC / XCM は当面 Solana をネイティブカバーしない)

**Bitcoin scaling のブリッジ需要**:
- 2025-2026 Bitcoin scaling 復興([[systems/bitcoin-scaling-2026-stacks-lightning-bitvm|Bitcoin scaling 2026]])により BTC クロスチェーン需要が成長 — Wormhole Solana ↔ BTC adapter · CCIP が BTC L2 接続計画 · Hyperlane が初期 BTC L2 探索
- BitVM / Stacks / Lightning 各々の messaging モデルは未だ汎用ブリッジと融合しておらず · これは 2027-2028 の frontier
- institutional BTC custody(Coinbase Custody · Fireblocks · BitGo)が CCIP に接続すれば · BTC-as-collateral institutional cross-chain DeFi が開く可能性

**Post-quantum migration スケジュール**:
- 8 プロトコルの ECDSA / Ed25519 / BLS は全て post-quantum vulnerable
- 2030+ NIST Hybrid Mode 要件 · ブリッジプロトコルは signature scheme アップグレードが必要
- 現在 CCIP / Wormhole / Axelar の internal roadmap で post-quantum study に言及 · ただし公開タイムラインなし。全体フレームについては [[systems/post-quantum-blockchain-day1-integration|post-quantum blockchain]] 参照

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/INDEX|systems index]]
- [[systems/cross-chain-bridge-security-insurance-matrix-2026|cross-chain bridge security + insurance matrix]]
- [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]
- [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]]
- [[systems/cross-chain-four-poles-selection-decision|cross-chain selection decision tree]]
- [[systems/cross-chain-four-poles-ccip-institutional|CCIP institutional default]]
- [[systems/ibc-cosmos-cross-chain|IBC · Cosmos]]
- [[systems/cctp-v2-overview|CCTP V2 overview]]
- [[systems/cctp-v2-technical-spec|CCTP V2 technical spec]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton]]
- [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP institutional messaging]]
- [[systems/hyperlane-overview|Hyperlane overview]]
- [[systems/hyperlane-ism-modular-security|Hyperlane ISM modular security]]
- [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero / CCIP]]
- [[systems/layerzero-v2-omnichain-messaging|LayerZero v2 omnichain messaging]]
- [[systems/polkadot-xcm-parachain-messaging|Polkadot XCM · parachain messaging]]
- [[systems/chain-abstraction-pattern-overview|chain abstraction pattern overview]]
- [[systems/chain-abstraction-pattern-three-solutions|chain abstraction three solutions]]
- [[systems/eigenlayer-overview|EigenLayer overview]]
- [[systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic|restaking AVS landscape]]
- [[systems/bitcoin-scaling-2026-stacks-lightning-bitvm|Bitcoin scaling 2026]]
- [[systems/institutional-dlt-adoption-comparison-2026|institutional DLT adoption]]
- [[systems/post-quantum-blockchain-day1-integration|post-quantum blockchain day 1 integration]]
- [[exchanges/solana-ecosystem-dex-comparison|Solana ecosystem DEX comparison]]
<!-- /wiki-links:managed -->

## Sources

- IBC Cosmos docs · https://ibc.cosmos.network/
- IBC GitHub · https://github.com/cosmos/ibc
- Circle CCTP V2 docs · https://developers.circle.com/stablecoins/docs/cctp-getting-started
- Chainlink CCIP docs · https://docs.chain.link/ccip
- Wormhole docs · https://docs.wormhole.com/
- Hyperlane docs · https://docs.hyperlane.xyz/
- LayerZero v2 docs · https://docs.layerzero.network/v2
- Axelar docs · https://docs.axelar.dev/
- Polkadot wiki · https://wiki.polkadot.network/
- XCM format · https://github.com/paritytech/xcm-format
- DefiLlama bridges analytics · https://defillama.com/bridges
- L2Beat bridges risk summary · https://l2beat.com/bridges/summary
- Rekt leaderboard · https://rekt.news/leaderboard/
- DeFiYield Rekt database · https://defiyield.app/rekt-database
