---
title: Bitcoin Scaling 2026 · Stacks + Lightning + BitVM + Babylon 並列スタック
aliases: [bitcoin-scaling-2026, btc-l2-stack, stacks-lightning-bitvm-babylon, bitcoin-scaling-stack, btc-layer2-2026, sbtc-bitvm-babylon, bitcoin-scaling-post-2024]
domain: systems
created: 2026-05-25
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-25
confidence: likely
tags: [systems, bitcoin, scaling, layer2, stacks, lightning, bitvm, babylon, sbtc]
status: active
sources:
  - https://docs.stacks.co
  - https://lightning.network/lightning-network-paper.pdf
  - https://bitvm.org/bitvm.pdf
  - https://babylonchain.io/papers
  - https://l2beat.com/scaling/summary
  - https://defillama.com/chain/Bitcoin
  - Bitcoin Optech newsletter archives
  - Galaxy Research "State of Bitcoin Layers 2026"
---

# Bitcoin Scaling 2026 · Stacks + Lightning + BitVM + Babylon 並列スタック

## TL;DR

Bitcoin 2026 の scaling は「L2 を 1 つ選ぶ」ものではなく、**4 つの並列スタックがそれぞれ異なる需要を取り込む**:Lightning はマイクロペイメント + 国際送金、Stacks は BTC ネイティブ DeFi + sBTC 1:1 アンカー、BitVM は trust-minimized な汎用計算(EVM 風 L2 を含む)、Babylon は Bitcoin staking による PoS チェーンへの安全共有を担う。Ordinals/Inscriptions や Runes 等のメタプロトコルは従来の「scaling」範疇には属さないが、L1 fee の基準線を顕著に押し上げている。CTV(BIP-119)+ CSFS(BIP-348)等の covenant ソフトフォークは 2024-2025 に活発な議論が再開したが未だ非アクティブ、drivechain(BIP-300/301)は冷遇期に入った。post-2024 の Bitcoin L2 TVL は ~$1B から 2026-Q1 の ~$8-10B 域に増加、主に sBTC(Stacks Nakamoto)+ Babylon + 数本の BitVM-based EVM rollup から来ている。

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/cross-chain-five-pole-comparison-matrix|cross-chain 5 極対照マトリクス]] for Bitcoin と Ethereum L2 / Canton / クロスチェーンブリッジの対照を、また [[systems/eigenlayer-overview|EigenLayer 総覧]] と対照して Babylon が「Bitcoin 版 restaking」としての対位関係にあることを理解。背景として [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 戦略アンカー]] を参照し、Bitcoin と Ethereum の L1 vs L2 における根本的な路線分岐を見る。

## Bitcoin scaling 4 スタック対照

Bitcoin と Ethereum の最大の差異は **チューリング完全な L1 がないこと**:Bitcoin Script は covenant、recursive proof、generalized rollup 等の L2 重要プリミティブを制限しており、2024-2026 の scaling は 4 つの並列スタックに分けて進化せざるを得ない。

### Stack 1: Lightning Network

- **位置付け**:高頻度マイクロペイメント + 国際送金
- **アーキテクチャ**:payment channel + HTLC + onion routing(Tor 風)
- **キャパシティ**:2026-Q1 ネットワーク容量 ~5,500 BTC(~$550M @ $100k/BTC)、2021-Q4 ピーク ~5,400 BTC 以降ほぼ横ばい
- **ノードトポロジ**:~17k 公開ノード + ~50k+ プライベートノード(LSP、Strike、Cash App 等 custodial routing)
- **LSP 層**:Lightning Service Provider(Voltage、LNbits、Strike、Galoy、OpenNode)がリテールウォレットの標準接続方式となり、実質的に Lightning を「顧客カストディ / プロバイダ運営」モデルに変えた
- **2024-2026 進捗**:Taproot Assets(Lightning Labs)が USDT/USDC の Lightning 横断送金を商業化、2026 国際送金(ナイジェリア / アルゼンチン / エルサルバドル)で実際の GMV が登場

### Stack 2: Stacks(sBTC + Nakamoto Release)

- **位置付け**:BTC ネイティブ DeFi + スマートコントラクト + NFT
- **コンセンサス**:PoX(Proof of Transfer)+ Nakamoto Release(2024-10)で Bitcoin finality を導入
- **sBTC**:1:1 BTC-pegged、2024-12 メインネットローンチ、~15 個の Signer が threshold-schnorr で実際の BTC を共同保有し、Stacks チェーン上で sBTC token を発行
- **TVL**:Stacks 2026-Q1 ~$300M TVL(sBTC + ALEX + Arkadiko)、sBTC 流通 ~3,000 BTC
- **Subnets**:Stacks Subnets は Polygon Supernets に類似、app-chain の独立デプロイを許容
- **Clarity 言語**:non-Turing-complete な決定可能スマートコントラクト言語、EVM 風 reentrancy attack を回避するが一部の組み合わせ可能性を制限

### Stack 3: BitVM / BitVM2

- **位置付け**:Bitcoin 対応の汎用計算、ソフトフォーク不要で Bitcoin L1 上で任意計算を検証
- **メカニズム**:Bitcoin Script + 多段 challenge-response で fraud proof を模倣、1-of-N の honesty assumption
- **BitVM2(2024)**:prover-verifier から permissionless challenger へ簡素化、ハードルが大幅に低下
- **エコシステム**:Citrea(EVM-based zk-rollup、BitVM bridge)、BOB(Build on Bitcoin、hybrid Ethereum L2)、Bitlayer、Merlin、Bsquared、GOAT Network
- **TVL**:2026-Q1 BitVM-related L2 の総 TVL ~$2-3B(L2Beat 自己申告ベース、注意要)、Citrea + BOB が大半
- **課題**:challenge period が長い(7-14 日)+ liveness assumption + Bitcoin L1 fee 上昇時に fraud proof コストが急増

### Stack 4: Babylon(Bitcoin Staking)

- **位置付け**:Bitcoin holder が L1 を離れずに PoS チェーンに経済的安全を提供する([[systems/eigenlayer-overview|EigenLayer]] に類似するが原資が BTC)
- **メカニズム**:Bitcoin timestamping を利用して BTC stake に検証可能な slashing メカニズムを作り、BTC の wrap / bridge は不要
- **Phase-1(2024-08)** :staking + タイムスタンプのみ、yield なし
- **Phase-2(2025)**:Babylon Genesis L1 + サードパーティ PoS チェーン(Cosmos 系 + 一部 L1)に接続
- **規模**:2026-Q1 staked ~50,000-60,000 BTC(~$5-6B)、Bitcoin 上で最大の単一 TVL カテゴリ
- **AVS / BSN 類比**:Babylon Secured Network(BSN)は EigenLayer の AVS に相当、Cosmos appchain / Babylon Genesis / 一部 EVM L1 が初期コンシューマー

## ソフトフォークの状況:CTV / CSFS / drivechain

Bitcoin の scaling 路線は長らくソフトフォーク議題で滞っており、2024-2026 の重要提案は:

- **CTV(BIP-119, OP_CHECKTEMPLATEVERIFY)**:Jeremy Rubin が 2019 に提案、covenant(事前にコミットされた出力スクリプト)を可能にし、vault / payment pool / より効率的な Lightning channel を実現。2024 に議論が再開したがコミュニティ内の意見対立が明白
- **CSFS(BIP-348, OP_CHECKSIGFROMSTACK)**:スタックから署名を検証、CTV と組み合わせて BitVM2 のより効率的な証明圧縮を実現可能
- **APO / SIGHASH_ANYPREVOUT(BIP-118)**:Eltoo 路線、Lightning プロトコルを簡素化、議論中
- **drivechain(BIP-300/301)** :Paul Sztorc が長年推進する BIP-300 サイドチェーン miner-secured bridge、2024-2026 に Bitcoin Core 主流開発者から基本的に拒否、理由は miner-bridge が Bitcoin の経済インセンティブを変えるため
- **OP_CAT(BIP-347)** :2024-2025 に一時話題に、covenant 模擬を可能にするが同様に未アクティブ
- **ソフトフォーク timeline**:Bitcoin Core には ETH 風の EIP roadmap がなく、アクティベートは完全にコミュニティ合意 + miner signaling + UASF リスクに依存、2026 内にいずれかの重要ソフトフォークがアクティベートされる確率は依然 < 30%

ソフトフォークアクティベートの停滞が直接 **BitVM 路線を「fork 不要な covenant 代替」とした** — これが 2024-2026 BitVM エコシステム爆発の根本的な原動力。

## Post-2024 Bitcoin L2 TVL 分布

2026-Q1 各スタック TVL のおおよその分布(数字は L2Beat + DefiLlama + プロジェクト自己開示、注意要):

- Babylon staking: ~$5-6B(単一最大カテゴリ)
- BitVM-based L2(Citrea / BOB / Bitlayer / Merlin / Bsquared / GOAT): 合計 ~$2-3B
- Stacks(sBTC + ALEX + Arkadiko): ~$300M
- Lightning Network 総容量: ~$550M(~5,500 BTC)
- Ordinals / Runes / BRC-20 流通時価総額: 単独カテゴリ、~$2-4B 変動激しい、scaling には属さない

合計 ~$8-10B 規模、vs Bitcoin 流通時価総額 ~$2T、浸透率はわずか ~0.4-0.5%、Ethereum L2 の ~10-15% 浸透率([[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 拡張]] 後も Ethereum L2 が主導)より大きく低い。

## Bitcoin scaling vs Ethereum L2 路線対照

| 次元 | Bitcoin scaling | Ethereum L2 |
|---|---|---|
| L1 プログラマビリティ | Bitcoin Script で制限 | EVM チューリング完全 |
| 主流 L2 タイプ | 4 カテゴリ並列(Lightning/Stacks/BitVM/Babylon) | rollup に収斂(optimistic + zk) |
| セキュリティアンカー | PoW + L1 finality | PoS + EigenDA / blob |
| Bridge 信頼 | 大半は trust-assumption-heavy(sBTC = 15 multisig、BitVM = 1-of-N) | rollup canonical bridge は trustless 化 |
| ソフトフォーク経路 | 極めて遅い、コミュニティ合意の閾値が高い | EIP roadmap 半年単位 |
| クロスチェーンツール | EVM ツールチェーンをほぼ再利用しない | [[systems/cctp-v2-overview|CCTP V2]] / [[systems/chain-abstraction-pattern-overview|chain abstraction]] 等 |

詳細な対比は [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極対照マトリクス]] を参照。

## Stack 1 深掘り · Lightning 経済モデルと LSP 化

Lightning 2026 の実態は「**デフォルト custodial + self-custody は例外**」:

- **LSP モデルが主導**:Phoenix(ACINQ)、Breez(Greenlight)、Cash App / Strike(custodial)、Galoy(Bitcoin Beach)、Voltage(エンタープライズ LSP)がリテールユーザー向けに channel の開閉 + inbound liquidity 管理 + routing を担い、ユーザーは channel という概念を意識しない
- **inbound liquidity オークション**:Lightning Pool / Magma / Amboss 等のマーケットプレイスで routing node が inbound channel をオークション、小規模ルーティングノードはビジネスモデルを失った
- **国際送金の実ユースケース**:Strike-El Salvador / Bitnob-Nigeria / Tropykus-LATAM 等の LSP が USD ↔ Lightning ↔ NGN/ARS/MXN 経路を商業化、2026 月次 GMV $200M-500M 規模(業界開示ベース、注意要)
- **Taproot Assets**:Lightning Labs がステーブルコイン(USDT / USDC モック)を Lightning channel 内で送金可能とし、実質的に Lightning をマルチアセット決済ネットワークに変えた、2025-2026 メインネットで一部ステーブルコイン統合が稼働
- **Lightning vs Base USDC 競争**:同じ「ステーブルコイン決済 rail」でも、Base + USDC + [[systems/erc-4337-overview|ERC-4337]] の開発者体験は Lightning より遥かに優れており、Lightning の優位性は「BTC ネイティブ + 究極の final settlement」に縮小
- **Liquid Network 並列スタック**:Blockstream の federated sidechain Liquid 上の L-BTC + USDT-Liquid も Bitcoin エコシステムの決済オプション、機関カストディ向けに使用されるがユーザー認知度は低い

## Stack 2 深掘り · Stacks Nakamoto + sBTC

Stacks は Bitcoin scaling において **完全なスマートコントラクトプラットフォーム + BTC 1:1 アンカー token + 公開チェーンガバナンスを備えた唯一のスタック**:

- **Nakamoto Release(2024-10)** :「PoX 独立ブロック」から「Bitcoin finality」へ切り替え、Stacks ブロックは Bitcoin ブロックに anchored された時点で Bitcoin レベルの finality を獲得
- **sBTC メカニズム**:ユーザーが BTC を sBTC peg-in アドレスに送信 → ~15 個の Signer(~150 Stackers から選出)が threshold-schnorr で BTC を共同保有 → Stacks チェーン上で同量の sBTC を mint、Burn 時は逆方向で multisig を経て解放
- **Signer 経済モデル**:Signer は STX を担保(stack)に出して Signer 権を得る、不手際 / 悪意ある行為では STX が slashed される
- **Clarity 言語の特徴**:non-Turing-complete(unbounded loop なし)、decidable(静的検証可能)、トレードオフは複雑な DeFi が書けないこと(一部 yield プロトコルは迂回が必要)
- **エコシステム**:ALEX(DEX + Bitcoin pool)、Arkadiko(stablecoin USDA)、Bitflow、Velar、StackingDAO、2026 DeFi の規模は小さいが安定成長
- **Subnets**:Polygon Supernets / [[systems/polygon-agglayer-architecture-rollout|AggLayer CDK]] に類似する Stacks 版、app-chain の独立 finality を許容、2024-2026 メインネット稼働
- **2026 Stacks 戦略**:「BTC 上のスマートコントラクト」から「Bitcoin DeFi hub」へ進化、目標は [[systems/eigenlayer-overview|EigenLayer]] が ETH エコシステムで占める位置に類似するが対象範囲は BTC

## Stack 3 深掘り · BitVM 系 EVM L2 リスト

2024-2026 BitVM 路線は急速に複数の EVM-compatible Bitcoin L2 に分化:

- **Citrea**:Chainway チームが主導、EVM-based zk-rollup、2024-Q1 testnet、2024-Q4 メインネット beta、BitVM bridge を trust-minimized BTC peg に使用
- **BOB(Build on Bitcoin)** :hybrid L2、Bitcoin + Ethereum 両方に settle、デフォルト OP Stack + BitVM bridge
- **Bitlayer**:OP Stack ライク + BitVM bridge、2024-Q2 メインネット、シンガポール / 中国エコシステムが活発
- **Merlin Chain**:OKX 系エコシステム、2024-Q1 メインネット、BRC-20 + Ordinals エコシステムを主軸
- **Bsquared(B² Network)** :ZK-based rollup、2024 メインネット
- **GOAT Network**:2024-2025 BitVM2 初期実装、「sequencer-decentralized BitVM2」を主軸
- **Citrea vs BOB vs Bitlayer のトラフィック比較**:2026-Q1 daily active address 順位は概ね BOB > Bitlayer ≈ Merlin > Citrea > Bsquared > GOAT、変動は激しい
- **共通の弱点**:BitVM bridge は実装エンジニアリング複雑度が極めて高く、2026 主流デプロイの大半は依然 **multisig federation + BitVM-style verification proof-of-concept**、純粋な trust-minimized BitVM bridge メインネット数は一桁
- **Ethereum L2 との対照**:BitVM-EVM 路線は本質的に「**Bitcoin を settlement、EVM を execution として使う**」 — これは [[systems/eigenlayer-overview|EigenLayer]] が ETH に economic security を提供させるロジックに類似するが、Bitcoin が提供するのは PoW finality であり stake-slashing ではない

## Stack 4 深掘り · Babylon staking メカニズム

Babylon は **「Bitcoin 版 EigenLayer」** だが wrap / bridge に依存しない:

- **核心技術**:Bitcoin timestamping + 特殊 UTXO スクリプト(CHECKLOCKTIMEVERIFY + multisig)を利用して「Bitcoin slashable stake」を作る
- **Phase-1(2024-08 メインネット)** :ユーザーが BTC を Babylon-managed UTXO に lock、「staking position」を獲得するが yield なし(後続の PoS チェーン安全共有の準備のみ)
- **Phase-2(2025)** :Babylon Genesis L1(自身の PoS Cosmos chain)+ サードパーティ Babylon Secured Network(BSN)接続、BTC stake が yield を生み始める(BSN token + Babylon ネットワーク報酬)
- **slashing メカニズム**:PoS チェーンの validator(同時に BTC staker)が二重署名や悪意ある行為を行えば、Bitcoin UTXO は事前署名 transaction によって強制的に破棄される
- **規模**:2026-Q1 staked ~50,000-60,000 BTC(~$5-6B)、BSN に接続 ~20-30 個の PoS chain(主に Cosmos 系 + 一部 EVM L1)
- **EigenLayer との対照**:EigenLayer は ETH 上で ~$15-20B restaked TVL を提供、Babylon は BTC 上で ~$5-6B を提供、両者は並列して「新世代 cryptoeconomic security marketplace」の双極となった
- **BTC ETF 保有者の参加**:理論的には BlackRock / Fidelity 等の ETF が保有する ~$50-80B BTC の一部を Babylon に接続して staking yield を獲得可能だが、2026 内に正式発表はなく、コンプライアンス経路(staking が証券化 ETF 保有変更に該当するか)は不明

## Counterpoints

- **TVL の計算基準が不統一**:L2Beat と DefiLlama は BitVM-based L2 の「BTC TVL」の計算法が異なり、一部プロジェクトは wrapped BTC とネイティブ BTC を混算、真の trust-minimized TVL は自己申告数字を大きく下回る可能性
- **Lightning 容量のボトルネック**:5 年間ほぼ横ばい、LSP モデルにより実質的に Lightning は「銀行型カストディネットワーク」に変質、初期の self-custodial ビジョンを denies
- **Stacks Signer の集中度**:sBTC の 15 Signer 集合は理論上依然として multisig 信頼前提であり、「BTC ネイティブ」を標榜する trustless 化からは距離がある
- **BitVM challenge period が実用的でない**:7-14 日の challenge window はリテールユーザーには事実上受け入れ難く、liquidity provider が事前に肩代わりする必要がある(Optimism 初期に類似)、手数料がそのため高止まり
- **Babylon の経済安全は BTC 価格に循環依存**:slashing 価値は BTC スポット価格と正相関、ベアマーケットでは PoS チェーンへの安全共有の実際価値が大幅に縮小
- **Ordinals / Runes 逆風論**:Inscription / Runes が Bitcoin L1 fee を押し上げた結果、channel open/close を必要とする Lightning 等の L2 が逆に周縁化される

## Open questions

- CTV / CSFS / OP_CAT のうち少なくとも 1 つは 2027 前にアクティベートできるか?もし不可なら、BitVM 路線は長期主流となるか?
- sBTC Signer 集合は 15 から 100+ に拡大し、[[systems/eigenlayer-overview|EigenLayer]] 風の economic security を導入できるか?
- Babylon Genesis L1 vs Babylon を pure infrastructure として位置付ける戦略選択はどう展開されるか?
- BlackRock / Fidelity 等の BTC ETF 保有者は BTC を Babylon にデプロイして staking yield を獲得するか?[[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] の Ethereum 上でのデプロイ経験と対照
- BitVM-based EVM L2 と Ethereum L2 の AI agent payment シナリオでの競争結果は?[[agent-economy/x402-cloudflare-aws-edge-integration|x402 エッジ統合]] の settlement 選定と対照
- Lightning Network は [[agent-economy/INDEX|agent economy]] でマイクロペイメント rail として復活するか、それとも ERC-4337 / x402 に完全に置換されるか?

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/INDEX|Systems Index]]
- [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極対照マトリクス]]
- [[systems/eigenlayer-overview|EigenLayer 総覧]]
- [[systems/vitalik-l1-l2-strategy-anchor|Vitalik L1/L2 戦略アンカー]]
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 blob 拡張]]
- [[systems/cctp-v2-overview|CCTP V2 総覧]]
- [[systems/chain-abstraction-pattern-overview|chain abstraction モデル総覧]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 エッジ統合]]
<!-- /wiki-links:managed -->

## Sources

- Stacks Documentation — sBTC, Nakamoto Release, Clarity
- Lightning Network Paper(Poon & Dryja, 2016)
- BitVM Whitepaper(Robin Linus, 2023)+ BitVM2(2024)
- Babylon Whitepaper · Babylon Chain documentation
- L2Beat — Bitcoin L2 tracking
- DefiLlama — Bitcoin chain category, sBTC TVL
- Bitcoin Optech newsletter — CTV / CSFS / OP_CAT discussion archive
- Galaxy Research "State of Bitcoin Layers 2026"
- Lightning Labs Taproot Assets documentation
