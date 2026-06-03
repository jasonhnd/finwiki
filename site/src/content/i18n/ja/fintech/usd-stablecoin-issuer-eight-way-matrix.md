---
source: fintech/usd-stablecoin-issuer-eight-way-matrix
source_hash: 97106643e41ed0bb
lang: ja
status: machine
fidelity: ok
title: "USDステーブルコイン発行体10者比較マトリクス — USDT / USDC / PYUSD / RLUSD / USD1 / FDUSD / USDS / USDe / M / USDB"
translated_at: 2026-06-02T14:01:20.935Z
---

# USDステーブルコイン発行体10者比較マトリクス — USDT / USDC / PYUSD / RLUSD / USD1 / FDUSD / USDS / USDe / M / USDB

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] 配下に置き、2026-Q2 データセットで最も頻繁に引用される米ドル建てステーブルコイン商品・発行体10者を横並びで比較するマトリクスである。発行体別の深掘りである [[fintech/tether-business-model-short-treasury-yield|Tether USDT]]、[[fintech/circle-usdc-stablecoin|Circle USDC]]、[[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]、[[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]、[[fintech/world-liberty-usd1-political-stablecoin|World Liberty USD1]]、[[fintech/first-digital-fdusd-hk-stablecoin|First Digital FDUSD]]、[[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]、[[fintech/m-network-m0-neutral-infrastructure|M^0 / M Network]]、[[fintech/stripe-usdb-bridge-stablecoin|Stripe USDB]] を補完する。規制文脈は [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]、[[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole regulatory matrix]]、[[fintech/three-circles-stablecoin-mra-framework|三圆 MRA framework]]、より広い統合の流れは [[fintech/stablecoin-issuer-2025-2026-market-consolidation|2025-2026 market consolidation]] を参照する。

> [!info] 要約
> 10のUSDステーブルコイン発行体が 2026-Q2 データセットの軸となる: **USDT** (Tether, ~$145B, グレーサークル優位), **USDC** (Circle, ~$65B, ホワイトサークル優位), **USDS** (Sky / ex-MakerDAO, ~$8.5B + DAI $4B legacy, 分散型RWA裏付け), **USDe** (Ethena, ~$5.2B, 合成デルタニュートラル), **FDUSD** (First Digital, ~$3B, Binance取引ペア中心), **USD1** (WLFI, ~$2.1B, 政治ブランド型), **PYUSD** (PayPal, ~$1B+, 決済会社ブランド型), **USDB** (Stripe Bridge, ~$800M, 垂直統合型), **RLUSD** (Ripple, ~$700M+, 銀行級コンプライアンス), **M** (M0 Foundation managed across 8+ 発行体s, ~$300M 合計, 中立インフラ). USDステーブルコイン供給総額は約$235Bで、挑戦者が伸びてもUSDT + USDCに約85%が集中する。 マトリクスを横断して読むと、 **準備金モデル**はUST + 現金（コンプライアンス型）と混合担保 / 合成型（Tether、Ethena）に二分される。 **規制上の本拠地**はGENIUS準拠の米国発行体（Circle、Paxos、BitGo、Standard Custody）とオフショア / 非米国（Tether、First Digital、Sky）に二分される。 **移転メカニズム**はミント/バーン（中央集権型発行体）とスワップ（分散型USDS）に二分される。 **GENIUS §501 準拠状況**は、米国機関投資家向け流通アクセスを決める拘束的な規制変数になっている。

## 10者比較を行う理由

単一発行体の物語（「USDTはEMを支配する」「USDCはコンプライアンス標準である」）は真実の別々の側面を捉えるが、GENIUS Act §501 が導入した**構造的二分化**を隠してしまう。10商品を**供給量 / 準備金モデル / 規制上の本拠地 / カストディアン / 監査法人 / 移転メカニズム / 利回り配分 / チェーン対応範囲 / GENIUS §501 準拠**で横並びに置くと、§501 後の市場構造が見える。このマトリクスは結晶化した**3つのカテゴリ**も示す。(a) **決済ステーブルコイン**（USDT、USDC、PYUSD、RLUSD、USDB、FDUSD、USD1  — 1:1, でペッグされ償還可能）、(b) **合成 / 分散型ドル**（USDS、USDe — 準備金モデルも規制上の本拠地も異なる）、(c) **中立インフラ**（M^0  — ブランドではなくホワイトラベル発行レイヤー）。発行体 × 流通業者のインセンティブ分割は [[fintech/issuer-distributor-incentive-realignment-50-50-model|50-50 model]] と [[fintech/stablecoin-revenue-split-economics|stablecoin revenue split economics]] を参照する。

## Matrix A · 供給量, market cap, inception

| 発行体 / トークン | 供給量（2026-Q2） | 開始時期 | 発行主体 |
|---|---|---|---|
| **[[fintech/tether-business-model-short-treasury-yield\|Tether USDT]]** | **~$145B** | 2014 | Tether 限定的 (BVI / El Salvador) |
| **[[fintech/circle-usdc-stablecoin\|Circle USDC]]** | **~$65B** | 2018-10 | Circle Internet Financial Inc. (Boston; NYSE: CRCL since 2025-06) |
| **[[fintech/sky-usds-decentralized-stablecoin\|Sky USDS]]** + DAIレガシー | **~$8.5B USDS + $4B DAI** = $12.5B 合計 | USDS 2024-09 (DAI/MakerDAOからのリブランド) | Sky / MakerDAO (DAOガバナンス) |
| **Ethena USDe** + sUSDe | **~$5.2B** | 2024-02 | Ethena Labs (BVI) |
| **[[fintech/first-digital-fdusd-hk-stablecoin\|First Digital FDUSD]]** | **~$3B** | 2023-06 | First Digital Trust (Hong Kong) |
| **[[fintech/world-liberty-usd1-political-stablecoin\|WLFI USD1]]** | **~$2.1B** | 2025-Q1 デプロイ (2024-09 ローンチ) | World Liberty Financial; BitGo Trust Company (SD State Trust) が発行 |
| **[[fintech/paypal-pyusd-stablecoin\|PayPal PYUSD]]** | **~$1B+** | 2023-08-07 | Paxos Trust Company (NY DFS Trust) |
| **[[fintech/stripe-usdb-bridge-stablecoin\|Stripe USDB]]** | **~$800M+** | 2024-Q1 (USDB) | Bridge Inc. (Stripe 以降の完全子会社 2024-10) |
| **[[fintech/ripple-rlusd-stablecoin\|Ripple RLUSD]]** | **~$700M+** | 2024-12-17 | Standard Custody (Ripple subsidiary; NY DFS Trust) |
| **[[fintech/m-network-m0-neutral-infrastructure\|M0 Network M]]** | **~$300M 合計** (across 8+ ホワイトラベル発行体) | 2024-10 メインネット | M^0 Foundation; 複数のフロントエンド発行体 |

見出しとなるパターンは、**二重大寡占の固定化**である。USDT + USDC は約$210B、USDステーブルコイン供給全体の約85%を占める。一方、8つの挑戦者 + M^0 の合計は約$30B、約15%にとどまる。この集中度は、挑戦者の参入が続いたにもかかわらず、2023 （当時約70%）以降**低下ではなく上昇**している。GENIUS Act と MiCA が弱いロングテール（BUSD、TUSD、GUSD、リテールUSDP）を退場させ、小さいが正統性のある第2階層を固定化したためである。

## Matrix B · 準備金 model

| 発行体 | 準備金構成 | 準備金の分別 | 利回り源泉 |
|---|---|---|---|
| USDT | 混合型: ~75% UST + 担保付き貸付 + BTC + 金 + その他; 四半期アテステーション (BDO) | ナローリザーブではなく、混合資産の商業ポートフォリオ | UST 利回り + 米国債以外の収益資産 |
| USDC | **100% 短期UST + 現金** in Circle Reserve Fund (SEC登録MMF、BlackRock運用) | BNY Mellonカストディ、分別MMFラッパー | UST利回りのみ |
| USDS / DAI | **RWA裏付け**: ~$1.5B RWA担保を含む ~$300M BlackRock BUIDL (vault経由で間接保有) + ETH担保CDP + その他 crypto + USDC | スマートコントラクト担保vault | UST 利回り (via BUIDL) + RWA 利回り + プロトコル手数料 |
| USDe | **ETHデルタニュートラル・ベーシストレード** (ETH現物ロング + ETH perpショート) + トークン化UST | オフチェーンperpポジション + オンチェーンUST | ETH perp資金調達率 + UST 利回り |
| FDUSD | 85% UST + 12% 現金 + 3% MMF | First Digital Trust HK カストディ; **準備金カストディをめぐる争点** (2024-12 The Block 調査) | UST 利回り |
| USD1 | **100% UST + 現金 via BitGo Trust** | BitGo カストディ | UST 利回り (USD1 保有者ではなくWLFIトークン保有者へ流れる) |
| PYUSD | **100% UST + 現金 via Paxos** | Paxos NY DFS Trust segregation | UST 利回り (80-90% to PayPal as 流通インセンティブ) |
| USDB | **100% short UST + overnight repo**; partial via BUIDL holding | Bridge / Stripe カストディ | UST 利回り (100% Stripeが保持) |
| RLUSD | **100% short UST 1-3M + 現金 via Standard Custody** | Standard Custody NY DFS Trust | UST 利回り |
| M | **BUIDL + UST + 現金** (M^0 統一テンプレート); 個別発行体の柔軟性 | M^0 スマートコントラクト・テンプレート + 発行体別のSecuritize型分別 | UST 利回り (via BUIDL); ホワイトラベル発行体と共有 |

準備金の二分化は明確である。 **narrow UST + 現金** (USDC, PYUSD, RLUSD, USDB, USD1, M^0) vs **混合担保または合成型** (USDT, USDS, USDe). FDUSDは境界上にあり、書面上はナローだがカストディ構造に争点がある。 ナローリザーブ群は、GENIUS §501 準拠状況（下のマトリクスI参照）と**ほぼ完全に**対応する。

## Matrix C · 規制上の本拠地 and licensure

| 発行体 | 発行主体の法域 | 営業免許 / チャーター |
|---|---|---|
| Tether USDT | BVI + El Salvador (since 2025); 米国免許なし | 米国免許なし; El Salvador Digital Asset Service Provider; オフショア優先 |
| Circle USDC | Boston, US (NYSE上場 CRCL) | US MTL 全州 + NY DFS BitLicense + EU MiCA EMT + Singapore MPI |
| Sky USDS | DAOガバナンス (単一の法主体なし) | DAO; プロトコルレベル運営。法的構造は意図的に分散 |
| Ethena USDe | BVI | オフショア。「合成型」としてGENIUSの決済ステーブルコイン範囲から明示的に切り出される |
| First Digital FDUSD | Hong Kong | 香港信託; **HKMAステーブルコイン免許は保留中** (2026-Q3 予定。Sun関連会社をめぐる争点によりQ2 から遅延) |
| WLFI USD1 | US (BitGo SD State Trust が発行体) | BitGo SD State Trust charter |
| PayPal PYUSD | US (Paxos NY DFS Trust が発行体) | Paxos NY DFS Trust |
| Stripe USDB | US (Bridge as Stripe subsidiary) | Bridge MTL + 州チャーター; EU + 日本の免許は保留中 |
| Ripple RLUSD | US (Standard Custody NY DFS Trust が発行体) | Standard Custody NY DFS Trust; **Ripple OCC National Bank Charter申請 2026-Q1 (保留中)** |
| M0 M | US foundation + multi-発行体 (decentralised governance) | $M DAO token + 複数法域の発行体コンプライアンス |

規制上の本拠地のパターンは、**4つのカテゴリ構造**を示す。 (a) **US trust-発行体** (PYUSD, RLUSD, USD1, partially USDC) — 最も規制当局に受け入れられやすい経路; (b) **US operating company** (USDC, USDB) — 完全な決済サービス免許; (c) **offshore** (USDT, USDe) — GENIUSの決済ステーブルコイン範囲の明確な外側; (d) **DAO / multi-発行体** (USDS, M) — 意図的に分散. The **香港信託** route (FDUSD) is a fifth category — GENIUSではなくHKMAを通じたアジア太平洋コンプライアンス向けに設計.

## Matrix D · カストディアン and audit firm

| 発行体 | カストディアン | 監査 / アテステーション法人 | 頻度 |
|---|---|---|---|
| USDT | 複数銀行との関係（公開情報は網羅的ではない） | BDO Italia (Cantor Fitzgerald 確認 2024) | 四半期 |
| USDC | **BNY Mellon** (Circle Reserve Fund) | **Deloitte** + Circle Reserve Fund SEC reporting | 月次 + SEC提出書類 |
| USDS | 複数vaultのスマートコントラクト構造 | オンチェーン透明性 + RWA vaultアテステーション | オンチェーン常時 + vault別 |
| USDe | オフチェーンperpカストディ (Copper, Ceffu, その他s) + on-chain UST | **Chaos Labs** + 複数のアテステーションパートナー | 月次 |
| FDUSD | First Digital Trust HK | **Prescient Assurance** | 月次 |
| USD1 | BitGo Trust Company | BitGo内部アテステーション（開示は限定的） | 月次 |
| PYUSD | Paxos内部 + 銀行預金 | **WithumSmith+Brown** | 月次 |
| USDB | Bridge カストディ; partial BUIDL via BNY (through BUIDL underlying) | **BPM LLP** | 月次 |
| RLUSD | Standard Custody (NY DFS Trust) | **BDO USA** | 月次 |
| M | M^0 スマートコントラクト・テンプレート + Securitize | OpenZeppelin + Trail of Bits + Certora スマートコントラクト監査 | 継続的 + 発行体別監査 |

**監査法人の階層**は明確である。 Deloitte (USDC) > WithumSmith+Brown (PYUSD) > BDO USA (RLUSD) > Withum (PYUSD) > BPM LLP (USDB) > Prescient Assurance (FDUSD) > BitGo internal (USD1) > BDO Italia (USDT quarterly). **カストディアンの階層**も同様に層化している。 BNY Mellon (USDC) > Paxos NY DFS Trust (PYUSD) > Standard Custody (RLUSD) > BitGo (USD1) > Bridge カストディ (USDB) > FDT HK (FDUSD) > Tether mixed bank relationships (USDT). USDC + BUIDL + 間接的なUSDB（BUIDL経路）+ 間接的なUSDS（BUIDL RWA vault）を支える**BNY Mellonカストディアン集中**は、USDステーブルコインの供給網で最大の単一カストディ集中となっている。

## Matrix E · 移転メカニズム (mint/burn vs swap vs hybrid)

| 発行体 | 移転メカニズム | クロスチェーンメカニズム |
|---|---|---|
| USDT | 発行体レベルでミント/バーン。チェーンごとにwrapped USDT | マルチチェーンネイティブ + Tetherブリッジ |
| USDC | **Circleでミント/バーン。対応各チェーンでネイティブ** | **CCTP V2 バーン・アンド・ミント** across 18+ chains (wrapped版なし) |
| USDS | **担保に対するvaultベースのミント/バーン**; DAO統治 | ネイティブ対応: Ethereum, Base, Solana (2026-Q1) |
| USDe | **担保預託によりミント (ETH spot + perp short)**; ポジション解消で償還 | Ethereumのみ (delta-neutral ベーシスには深いETH perp市場が必要) |
| FDUSD | Mint/burn at First Digital Trust | マルチチェーンwrapping; **Justin Sun reserve dispute** affects custody-chain trust |
| USD1 | Mint/burn at BitGo | マルチチェーンwrapping |
| PYUSD | Mint/burn at Paxos | マルチチェーンwrapping; Solana中心 (~80%) |
| USDB | Mint/burn at Bridge | マルチチェーンwrapping; Tempo L1 開発中 |
| RLUSD | Mint/burn at Standard Custody | Dual-ローンチ XRPL + Ethereum native; expansion 予定 |
| M | **Mint/burn via M^0 unified contract template**; 発行体別ホワイトラベル | M^0 マルチチェーン・テンプレート |

移転メカニズムの二分化は、 **centralised mint/burn** （表中のUSDSとUSDeを除くすべての発行体）と **DAO / collateral-vault-based mechanisms** (USDS, USDe). USDeは独自に**合成型**であり、 $1 あたりのUSTを $1 発行USDeごとに保有するのではなく、ネットのデルタニュートラル・ポジションが概ね $1. USDSは独自に**分散型担保型**であり、 1:1 準備金ではなく複数資産vaultに対してミントする。 USDCの**CCTP V2 バーン・アンド・ミント構造**は、最もクリーンなクロスチェーンメカニズムである。各チェーンのUSDCはwrapped版ではなく、Circle発行のネイティブである。

## Matrix F · 利回り配分 and economics

| 発行体 | 発行体の準備金利回り | 保有者は利回りを受け取るか | 流通業者の取り分 |
|---|---|---|---|
| USDT | Tether UST/貸付利回りのほぼ全てを保持; ~$1.5T/年利益 | **いいえ** | 該当なし（正式な流通業者取り分なし） |
| USDC | Circleが保持し、 50-50 をCoinbaseと分配 | **いいえ** (GENIUS §501 SC発行体による利回り支払いを禁止) | Coinbase 50% 取り分 (~$1B/year 2025) |
| USDS / sUSDS | Sky retains プロトコル手数料; **sUSDS ステーキング版が 5-8% APY** (Spark SSR rate) | **sUSDSステーキング経由であり** (routes around §501) | DAOガバナンス |
| USDe / sUSDe | Ethena Labsが一部を保持; **sUSDe ステーキング版が 12-18% APY in 強気サイクル** | **sUSDeステーキング経由であり** | n/a (DeFiプロトコルと流通業者の混合) |
| FDUSD | First Digitalが保持。Binanceは非公開の非利回りインセンティブを受ける (マーケットメーカー優遇) | いいえ | Binance (informal) |
| USD1 | WLFI / BitGoがUST利回りを保持; **channelled to WLFI token holders** | **いいえ** (USD1 保有者は受け取らない; 利回り routes to WLFI token) | WLFIトークン配分メカニズム |
| PYUSD | Paxosが名目上保持; **80-90% の利回りをPayPalへ** | いいえ | PayPal 80-90% 取り分 |
| USDB | **Stripeが保持 100% of 利回り** (流通業者との分配なし。Stripeが発行体かつ流通業者) | いいえ | n/a (垂直統合) |
| RLUSD | Standard Custody / Ripple retains | いいえ | Ripple内部の経済性 |
| M | M^0 bp手数料を課し、ホワイトラベル発行体が利回りの大半を獲得 | いいえ (white-label 発行体 determines) | 発行体別モデル |

**利回り配分の経済性**は [[fintech/issuer-distributor-incentive-realignment-50-50-model|50-50 distributor-realignment model]] の典型例である。 **distributors capture 50-90% of USD ステーブルコイン economics** 消費者への到達を支配しているためである。 USDB は unique exception — Stripeが保持 100% because Stripe **is** both 発行体 and distributor (垂直統合). USDeとUSDSだけが、 **SC保有者が直接利回りを受け取る商品である** (ステーキング版を通じて) — どちらもGENIUS §501 を、直接のSC利息ではなく別商品のステーキング機会として構成することで迂回する。 USD1 が最も異例で、利回りは **WLFI token holders (政治支持者への経済的報酬)** USD1 保有者ではなく

## Matrix G · チェーン対応範囲

| 発行体 | 主要チェーン | 稼働中の総チェーン数 |
|---|---|---|
| USDT | **Tron (~58%) + Ethereum + BSC + Solana** | 12+ |
| USDC | **Ethereum + Base + Solana + 18 CCTP経由でさらに** | 18+ native (all via CCTP) |
| USDS | **Ethereum + Base + Solana (2026-Q1)** | 3 主要 |
| USDe | **Ethereumのみ** | 1 (basis trade requires ETH perp depth) |
| FDUSD | **BNB Chain (~55%) + Ethereum (~40%) + Solana (5%)** | 3 |
| USD1 | **BNB Chain + Tron + Ethereum + Solana** | 4 |
| PYUSD | **Solana (~80%) + Ethereum + Arbitrum** | 3 |
| USDB | **Ethereum + Base + Tempo L1 (予定 2026-Q3)** | 2 (3 予定) |
| RLUSD | **XRPL + Ethereum** | 2 |
| M | **Ethereum + Base + Arbitrum + Solana (予定)** | 3 (4 予定) |

**チェーン展開の特化**それ自体が統合のシグナルである。各発行体は 1-3  の主要チェーンに集中して賭けている。USDCのCCTP V2 は最も広い到達範囲（18+チェーン）を持ち、USDeは最も集中している（Ethereumのみ）。FDUSDとUSDTはBSC/Tronに傾き（それぞれBinanceとEM送金チェーン）、PYUSDは**2024-05 にSolana中心への戦略的転換**を行った。これは他の上位10 ステーブルコインには前例がない。USDB / Tempo L1 は、Stripe + Paradigmがステーブルコインとチェーンの両方を構築する**初の垂直統合型スタック**である。

## マトリクスH・流通チャネル

| 発行体 | 主要流通チャネル |
|---|---|
| USDT | グローバルなグレーサークル取引所 (Binance, OKX, Bybit) + EM送金 (LATAM, Africa, MENA) |
| USDC | Coinbase + Binance + グローバルCEX + 機関投資家のトレジャリー + DeFi (Aave, Compound, Morpho) |
| USDS | DeFiネイティブ (Spark Protocol, MakerDAO系譜のプロトコル); USDS Solana for 新規ユーザー到達 |
| USDe | DeFi perp + デルタニュートラルファンド + crypto-degenウォレット |
| FDUSD | **Binance主要ペアのみ** (BTC/FDUSD ~$1.5B/day); 単一流通業者リスク |
| USD1 | Bridge (Stripe) + 政治ネットワーク流通 + ソブリン・トレジャリー配分 |
| PYUSD | PayPal (~400M アクティブアカウント) + Venmo + PayPal World cross-border P2P |
| USDB | **Stripe 5M+ マーチャント** (垂直統合; B2Bマーチャントのデフォルト) |
| RLUSD | RippleNet 200+ 銀行 + ODL corridor + Bitstamp (Robinhood買収後) |
| M | 8+ ホワイトラベル発行体 (ロングテールのステーブルコイン運営者) |

流通チャネルのパターンは、**直接重なる競争ではなく補完的なニッチ**を示す。 USDT はグレーサークルEMを押さえる; USDC はコンプライアンス型機関投資家 + DeFiを押さえる; PYUSD は消費者P2Pリテールを押さえる; RLUSD は銀行間クロスボーダーを押さえる; FDUSD はBinance取引ペア市場を押さえる; USDB はB2Bマーチャントレールを押さえる; USDS / USDe はDeFi degen + ネイティブ利回り志向層を押さえる; USD1 は政治ネットワークのニッチを押さえる; M^0 は「自社SCは欲しいが準備金運営はできない」ロングテール市場を押さえる. これは直接の正面競争ではなく、**ニッチ分化を伴う二峰性競争の姿**である。

## マトリクスI・GENIUS Act §501 準拠状況

| 発行体 | §501 準備金品質準拠 | §501 発行体免許準拠 | 米国機関投資家向け流通アクセス |
|---|---|---|---|
| USDT | **不合格** (mixed reserves; BTC/Gold) | **不合格** (no US trust / 発行体 license) | **ブロック** — international gray-circle continues |
| USDC | **合格** | **合格** (Circle MTL + NY DFS BitLicense) | **完全アクセス** — white-circle benchmark |
| USDS | 境界線上 (RWA vault + BUIDL indirect); 分散型ガバナンスは「免許対象の発行体がない」と主張 | Decentralised governance argues out-of-scope; **裁判所では未検証** | **不安定** — Treasury / SECの解釈に依存 2027-2028 |
| USDe | 分類は **合成型; 決済SC範囲から明示的に切り出される** | 決済SC範囲外 | **範囲外** — 異なる規制カテゴリ |
| FDUSD | 合格 on paper (UST + 現金 + MMF); 準備金カストディに争点 | **いいえ US license** (香港信託); 外国発行体承認経路を通じる場合のみGENIUS準拠 | **ブロック from US institutional** — アジア太平洋市場 |
| USD1 | 合格 (UST + 現金 via BitGo Trust) | 合格 (BitGo SD State Trust) | 完全アクセス; **GENIUSに対する政治的信用リスク §501 中立性** |
| PYUSD | **合格** | **合格** (Paxos NY DFS Trust) | **完全アクセス** |
| USDB | **合格** | **合格** (Bridge subsidiary; Stripe US licenses) | **完全アクセス** |
| RLUSD | **合格** | **合格** (Standard Custody NY DFS Trust); OCC National Bank Charter 保留中 | **完全アクセス** |
| M | M^0 テンプレートは発行体別に合格。ホワイトラベルごとに異なる | 発行体別 | 発行体別 |

GENIUS §501 準拠状況は市場を次のように**二分**する。
- **合格**: USDC, PYUSD, RLUSD, USD1, USDB, M^0 (per 発行体) — 米国機関投資家向け完全アクセス
- **準備金で不合格**: USDT (混合準備金。オフショア戦略)
- **免許で不合格**: FDUSD (香港信託 without US recognition)
- **範囲外**: USDe (合成型), USDS (分散型。法的には争点あり)

This matrix は single most consequential dimension because it determines which 発行体s can offer **機関投資家向けサービス** (トレジャリー管理、資産運用カストディ、トークン化証券の決済) を米国で提供できるかを決めるためである。 5つの「合格」発行体は、2028までに機関投資家向けUSDオンチェーン市場を共同で定義する。 「不合格」発行体は継続するが、グレーサークルEM（USDT）またはアジア太平洋（FDUSD）市場にとどまる。

## これらの軸を使う理由

9つのマトリクス軸 (supply, reserves, regulatory home, custodian, audit firm, transfer mechanism, 利回り distribution, chain coverage, GENIUS §501 compliance) は、 **GENIUS後のUSDステーブルコイン市場構造におけるゲート変数**:

1. **供給量** — 実現済み規模を測る (LPが重視する唯一の指標).
2. **準備金** — GENIUS §501 準備金品質準拠を決める (binary).
3. **規制上の本拠地** — GENIUS §501 発行体免許準拠を決める.
4. **カストディアン** — BNY集中リスクと供給網依存を決める.
5. **監査法人** — 透明性階層と機関投資家の受容性を決める.
6. **移転メカニズム** — クロスチェーン到達範囲と運用構造を決める.
7. **利回り配分** — 発行体と流通業者の経済的分割を決める (拘束的なビジネスモデル変数).
8. **チェーン対応範囲** — アクセス可能なTAMを決める.
9. **GENIUS §501 準拠状況** — 米国機関投資家向け流通アクセスを決める (binary).

これら9変数を合わせると、 **USDT and USDC の合計供給が$210Bに達する理由** (集中), why **PYUSD/RLUSD/USDB/USD1 が新たな「合格」参入者である理由** (規制上の幾何学), why **USDS and USDe が構造的に異なる商品である理由** (準備金モデルも規制分類も異なる), and why **M^0 が統合されるロングテール層を代表する理由** (中立インフラ for niche 発行体s). マトリクス表示は、発行体別の物語が見えにくくする構造地図を明らかにする。

## マトリクスの読み方

- **GENIUS後の市場は二峰性である**: USDT and USDC が約85%を押さえる; the remaining ~15% は8つの正統な挑戦者に分かれる + M^0. 挑戦者の波は **ではない** USDT/USDCを希薄化しなかった — 弱いロングテールを退場させた (BUSD, TUSD, GUSD, USDP) and 小さいが正統性のある第2階層を結晶化した.
- **The economic value sits with distributors, ではない 発行体s** — これは Coinbase 50% of USDC, PayPal 80-90% of PYUSD, Binance マーケットメーカー優遇 in FDUSD, およびStripeの 100% retention as the only 垂直統合 case (USDB). 流通ロックインを持たない純粋発行体では (Paxos ブランド単体の USDP, Gemini GUSD), 事業は縮小している.
- **Reserve-asset quality は regulatory moat** — ナローUST準備金を運営できる発行体はGENIUS準拠の機関投資家アクセスを得る; 発行体s that canではない get the international gray market. USDT's 混合準備金はより高い利回りを生む (~$1.5T 年利益) しかし米国機関投資家アクセスを妨げる.
- **「カテゴリとして異なる」3商品はUSDS、USDe、Mである**. USDS is decentralised-collateralised (vault model, ではない 1:1 UST); USDe is 合成デルタニュートラル (no UST per token); M is 中立インフラ (ではない a brand). These three should ではない be directly volume-compared to PYUSD or USDC — 根本的に異なる市場と規制枠組みに対応しているためである.
- **The BNY Mellon 集中 is now systemic**: のカストディアン Circle Reserve Fund (USDC) + BlackRock BUIDL (が裏付ける USDB, USDS RWA vault indirectly, OUSG via Ondo). BNYの運用障害は、コンプライアンス型USDオンチェーン・スタック全体へ波及する。
- **PYUSDの 2024-05  Solana中心移行** は、上位10 ステーブルコインがSolanaを副次ではなく主要チェーンとして扱った初の例である。USDCのCCTP V2 による広範な到達範囲、PYUSDのSolana移行、USDBのTempo L1 発表は、合わせて**マルチチェーン・ネイティブ展開が今や最低条件のアーキテクチャである**ことを意味する。
- **USD1's 政治ブランド型 model is unique** 準備金利回りをWLFIトークン保有者へ流す点で (政治支持者への経済的報酬) USD1 保有者ではなく. This は cleanest GENIUS §501 迂回策 (利回り goes to a separate token, ではない the SC), ただし、 §501 "中立性" および [[fintech/three-circles-stablecoin-mra-framework|three-circles MRA framework]].
- **FDUSDのHKMA免許遅延**（当初Q2, 、現在Q3 2026）と **Justin Sun をめぐる準備金カストディ争点**により、FDUSDは上位層で最も脆弱である。$3BのMCapは大きいが、単一流通業者 + カストディ争点というリスクプロファイルはPYUSD/RLUSDにはない。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/tether-business-model-short-treasury-yield|Tether USDT business model]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]
- [[fintech/world-liberty-usd1-political-stablecoin|WLFI USD1]]
- [[fintech/first-digital-fdusd-hk-stablecoin|First Digital FDUSD]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]
- [[fintech/m-network-m0-neutral-infrastructure|M^0 / M Network neutral infrastructure]]
- [[fintech/stripe-usdb-bridge-stablecoin|Stripe USDB]]
- [[fintech/stablecoin-issuer-2025-2026-market-consolidation|stablecoin issuer 2025-2026 consolidation]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 denylist]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|stablecoin five-pole regulatory matrix]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA framework]]
- [[fintech/stablecoin-revenue-split-economics|stablecoin revenue split economics]]
- [[fintech/issuer-distributor-incentive-realignment-50-50-model|50-50 issuer-distributor model]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/tether-usat-anchorage|Tether USAT (Anchorage)]]
- [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]]
<!-- /wiki-links:managed -->

## 出典

- Tether 透明性: https://tether.to/en/transparency/
- Circle 透明性: https://www.circle.com/transparency
- PayPal PYUSD 商品: https://www.paypal.com/us/digital-wallet/manage-money/crypto/pyusd
- Ripple RLUSD: https://ripple.com/insights/ripple-ローンチes-rlusd-ステーブルコイン/
- World Liberty Financial: https://www.worldlibertyfinancial.com/
- First Digital Labs: https://firstdigitallabs.com/
- Sky / MakerDAO: https://sky.money/
- Ethena: https://ethena.fi/
- M^0 Foundation: https://m0.org/
- Stripe ステーブルコイン・ユースケース: https://stripe.com/use-cases/ステーブルコインs
- DefiLlama ステーブルコイン・ダッシュボード: https://defillama.com/ステーブルコインs
- 米国Treasury — デジタル資産政策: https://home.treasury.gov/policy-が発行/financial-markets-financial-institutions-and-fiscal-service/digital-assets
- GENIUS Act §501 公開テキスト (US Treasury / Congress.gov)
