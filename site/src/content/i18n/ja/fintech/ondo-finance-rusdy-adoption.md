---
source: fintech/ondo-finance-rusdy-adoption
source_hash: e56ce93f3f1b995d
lang: ja
status: machine
fidelity: ok
title: "Ondo Finance · OUSG / USDY / rUSDY / Ondo Chain · 機関化 RWA フルスタック・プレイヤー"
translated_at: 2026-06-02T13:21:55.035Z
---
# Ondo Finance · OUSG / USDY / rUSDY / Ondo Chain · 機関化 RWA フルスタック・プレイヤー

## 要約

Ondo Finance は 2021 年創設、2023 年から単一のトークン化米国債プロダクト（OUSG）を **RWA フルスタック**へ拡張した。構成は OUSG（適格投資家向けトークン化国債）+ USDY（リテール保有可能な利回りトークン）+ rUSDY（リベース型コンプライアンス・バリアント）+ Ondo Chain（RWA 最適化 L1、2025 公表）。**OUSG と [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] は深い共生関係**にあり、Ondo は OUSG 後端準備金の相当部分を BUIDL に置換し、BUIDL の DeFi プロトコル層における最大のリテール分配端として機能する。2026-05 時点で Ondo 系列プロダクトの TVL は **~$1.5B+**、顧客は**アジア（シンガポール / 香港 / 韓国 / 日本）+ 中南米（アルゼンチン / ブラジル / メキシコ）の適格投資家**中心。Ondo は **「トークン化 MMF + リテール利回りトークン + コンプライアンス L1」の三点セットを全て実装した初の独立 RWA プレイヤー**である。

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下に位置する。OUSG の経済性を決める上流 MMF パートナーシップは [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]、第二梯団 RWA ピアとの差別化は [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]、Ondo が「DeFi ネイティブ」ではなく「機関向け」と位置付けられる戦略的文脈は [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto bifurcation]] とあわせて読む。

## プロダクトスタック — 各 token の実体

| プロダクト | 種別 | 適格購入者 | 裏付け資産 | APY（目標） | チェーン |
|---|---|---|---|---|---|
| OUSG | Ondo Short-Term Government Treasuries Fund のトークン化持分 | 米国適格購入者（Reg D）+ 選定された非米国機関 | BlackRock BUIDL + 短期 UST | ~4.8%（SOFR 連動） | Ethereum, Solana, Polygon, Mantle, Sui, Aptos, XRPL |
| USDY | 短期 UST + 銀行預金を裏付けとするトークン化ノート | 非米国個人 / 機関（米国人を除く） | 短期 UST + 現金 | ~4.7% リベース | Ethereum, Solana, Mantle, Sui, Aptos, Cosmos, Noble, Arbitrum |
| rUSDY | USDY のリベース型バリアント | USDY と同じ。価格リベースではなく供給量リベースで利回りを反映 | USDY と同じ | リベース経由で ~4.7% | Ethereum, Solana, Mantle, Sui, Aptos |
| Ondo Chain（公表 2025） | RWA 最適化 L1  | Ondo 全プロダクト + 第三者 RWA 発行体 | 該当なし（チェーン） | 該当なし | ブリッジ付き独立 L1  |
| Flux Finance（DeFi プロトコル） | OUSG 向けレンディング市場 | KYC 済みウォレット | OUSG / USDC | 変動 | Ethereum |

出典: Ondo Finance docs、2026-05  スナップショット。

**重要な区別**: USDY / rUSDY は **GENIUS の意味でのステーブルコインではない**。それらは偶然 $1 に連動する SEC 登録証券（ノート）であり、米国ライセンス下の決済文脈で「ステーブルコイン」として販売できない。これは BUIDL の分類ロジックと同一で、意図的な設計である。[[fintech/three-circles-stablecoin-mra-framework|three-circles MRA framework]] では、これらを第 4 圏、すなわち「決済ステーブルコインとは別のトークン化利回り商品」として扱う。

## OUSG ↔ BUIDL パートナーシップ — 鍵となる構造的事実

**2024-Q2** に Ondo は、直接短期 UST を保有する代わりに、OUSG 準備金の大半を **[[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]** へ振り向けると発表した。この時点で Ondo は **最大の外部 BUIDL 保有者**となり、一部の推計では BUIDL の当時 AUM の約 40% を 2024半ばに占めた。経済ロジックは次の通り。

1. BUIDL は BlackRock × Circle × Goldman / Anchorage の即時償還ファシリティ（USDC 建て）を通じて OUSG に **T+0  のミント / 償還**を与え、純粋な UST 保有に伴う T+2  決済摩擦を取り除く。
2. BlackRock はファンド管理報酬として約 20bps、Ondo は OUSG スポンサー報酬として約 15bps を取る。OUSG 保有者のネット APY は階層に応じて SOFR-25  から SOFR-40 bps となる。
3. Ondo は自社で UST トレーディングデスク、カストディ、マネーマーケット・ポートフォリオを運営する業務負担を回避し、それを BlackRock に外部委託する。
4. BlackRock は、私募ファンドである BUIDL 自体では直接アクセスできない **DeFi プロトコルへの分配チャネル**（Flux、Pendle、Morpho、Aave RWA 上場）を得る。

これは RWA 領域で最も明快な **発行体 × インフラ提携**である。この取引は、Apollo ACRED が構造的に分離している理由も説明する。Apollo は自社のプライベートクレジット準備金を運用しており、OUSG と同じ形で BUIDL に接続する必要がない。

## USDY / rUSDY — 「非米国個人向け yieldcoin」

USDY（2023-08ローンチ）は、**非米国リテール個人向けに明示的に構築された唯一の大規模な利回り付きトークン**である。裏付けは短期 UST + 銀行預金、Ankura による月次証明、Ankura Trust でのカストディ。保有者は価格リベース（USDY）または供給量リベース（rUSDY）で利回りを受け取る。2026-05 時点の USDY 時価総額は **~$580M** で、集中が強い地域は次の通り。

- **中南米**（アルゼンチン ~22%、ブラジル ~14%、メキシコ ~8%）— 米国証券口座なしで LatAm リテールが利用できる、最も明快なドル利回り商品。
- **アジア**（シンガポール ~12%、香港 ~9%、日本 ~6%）— 富裕層がオンチェーン・レールで UST 利回りへ直接アクセスする。
- **アフリカ / 中東**（~10%）— UAE 拠点の富裕層、ナイジェリア / ケニアのドルヘッジ需要。

USDY の成長パターンは PYUSD の逆である。PYUSD は「利回りのないブランド付き決済レール」、USDY は「装飾のない利回り付き USD」である。両者は競合せず、異なる需要機能に応える。USDY に最も近い代替は **Frax sFRAX**、**Sky sUSDS**、**Ethena sUSDe** で、差別化要因は **規制上の形**（USDY は最も明確な Reg S ノート構造）と **チェーン到達範囲**（USDY は 7+ チェーン展開、sUSDe は Ethereum のみ）である。

## マルチチェーン展開 — 「重要な全チェーンに RWA を置く」テーゼ

2026-05 時点で OUSG は **Ethereum、Solana、Polygon、Mantle、Sui、Aptos、XRPL** で稼働し、USDY は **Ethereum、Solana、Mantle、Sui、Aptos、Cosmos、Noble、Arbitrum** で稼働する。狙いは、**機関投資家資本が存在するあらゆるチェーン**に Ondo プロダクトを置き、「チェーン違い」の摩擦を取り除くこと。Ondo はクロスチェーン移動に Axelar + LayerZero + Wormhole + Noble のネイティブ USDC 発行を使う。この戦略は USDC のマルチチェーン化（現在 20+ チェーン、[[fintech/cbbtc-institutional-btc-wrapper|Circle CCTP]] 相当レール経由）を反映しており、Ondo の到達範囲は現在 ~7-8  チェーンへ広がりつつある。

## Ondo Chain — L1  テーゼ

Ondo Summit で **2025-01** に発表された **Ondo Chain** は、RWA 発行と取引に特化した EVM 互換 L1 である。公開資料上の差別化要素は次の通り。

- **Validator set composed of regulated financial institutions** (Franklin Templeton, McKinsey, ICE, Aon, Wellington, Wisdom Tree, ABN AMRO publicly disclosed as design パートナーs).
- **ネイティブ KYC レイヤー** — 制限付きトークンの移転権限にウォレット単位の本人確認を紐づける。
- **Built-in support for トークン化証券** with on-chain transfer-agent functionality.
- ローンチ時点で **Ethereum、Solana、主要な機関向けチェーンへのブリッジ**を備える。

2026-05 時点で Ondo Chain はメインネット未ローンチ（テストネット段階）。戦略的意図は、Ondo を **トークン化リアルワールド資産の標準発行チェーン**にし、手数料収入と決済レイヤー上の地位の両方を獲得することにある。最も近い類似例は **Circle Arc**（2025 発表）で、発行体側から同じ RWA L1  の入り口を狙う。両者はいずれも Stripe Tempo、Coinbase Base、Ripple XRPL に見られるより広い [[fintech/protocol-hedge-strategy-stripe-pattern|protocol hedge strategy]] の一部である。

## 採用指標 2024-2026


| 指標 | 2024-Q1 | 2025-Q1 | 2026-Q1 | 2026-05 |
|---|---|---|---|---|
| OUSG TVL | $130M | $400M | $750M | $830M |
| USDY 時価総額 | $50M | $260M | $510M | $580M |
| RWA 合算 TVL | $200M | $680M | $1.3B | $1.5B+ |
| チェーン対応（OUSG） | 1 （Ethereum） | 5 | 7 | 7 |
| 機関パートナー（開示済み） | 3 | 7 | 18 | ~25 |
| バリデーターパートナー（Ondo Chain） | — | 6 （発表済み） | 12+ | 14 |

出典: Ondo の公開証明レポート + DefiLlama Ondo プロトコルページ、スナップショット 2026-05-15。

## Flux Finance と DeFi composability

Ondo の DeFi コンポーザビリティ・レイヤーは **Flux Finance** で、OUSG を担保として使える Compound v2  フォークである。Flux は 2023  にローンチし、OUSG を保有する機関が **米国債ポジションを解消せずに USDC 流動性へアクセスしたい**という具体的な問題を解いた。Flux の仕組みは次の通り。

1. KYC 済みの機関ウォレットが OUSG を Flux に担保として預け入れる。
2. ウォレットは OUSG を担保に LTV ~85-90% で USDC を借り入れる。
3. 借入金利は Compound 型の需給カーブに応じて変動し、通常は SOFR + 30-80 bps。
4. Flux に USDC を貸し出す貸し手は、借り手からの利回りと利払いを受け取る。通常は OUSG の裏付け米国債利回りを下回る。

これにより OUSG は **運用上マネーマーケットのスイープ口座に近くなる**。利回り商品を保有し、それを担保に短期流動性を借り入れ、流動現金が入った時点で返済する。Flux TVL は ~$60M で 2025-Q3,  に到達し、~$110M へ 2026-05 までに成長した。Flux はニッチなプロダクトだが、機関投資家の **「USDC ではなくトークン化 MMF をなぜ保有するのか」**という問いに具体的に答える。比較として、BUIDL には同等の流動性ソリューションとして BlackRock × Circle の T+0  ファシリティがある。構造は異なるが結果は同じである。

## 戦略的関係マトリクス

| 相手方 | 関係の種類 | 戦略的機能 |
|---|---|---|
| BlackRock | サブファンド助言者（OUSG 準備金としての BUIDL） | 外部委託された米国債管理、BUIDL インフラ経由の T+0  償還 |
| Securitize | トークン化プラットフォーム（BUIDL、ACRED と共通） | 発行および名義書換代理レイヤー |
| Coinbase Asset Management | 分配 + 投資家 | OUSG / USDY の米国機関チャネル |
| Kraken | 分配（USDY） | KYC 済み非米国リテールユーザー |
| Mantle Foundation | チェーン展開 + DeFi パートナー | Mantle Treasury が OUSG を保有し、チェーン上のコンポーザビリティを提供 |
| Sui Foundation | チェーン展開 + エコシステムパートナー | Sui のアジア太平洋リーチ |
| Aptos Labs | チェーン展開 + エコシステムパートナー | Aptos のアジア太平洋における機関投資家リーチ |
| Wisdom Tree | 共同開示された Ondo Chain バリデーターパートナー | TradFi RWA チェーンのバリデーター |
| Wellington Management | Ondo Chain バリデーターパートナー | 機関グレードのバリデーター |
| ABN AMRO | Ondo Chain バリデーターパートナー | 欧州銀行の参加 |
| Franklin Templeton | Ondo Chain バリデーターパートナー | 姉妹的なトークン化 MMF プレイヤーとしてのバリデーター |
| Pantera Capital | 投資家 + エコシステムパートナー | 初期段階 RWA インフラ資本 |

このカウンターパーティ一覧は、**BlackRock 以外のトークン化利回りカテゴリーで最も強い**。Apollo ACRED には Coinbase + Kraken があるが、Franklin Templeton や ABN AMRO はない。バリデーター一覧は実質的に BUIDL の「設計パートナー」一覧をリブランドしたもので、BlackRock 寄りのポジショニングを強調している。

## 創業者と governance の文脈

Ondo Finance は **Nathan Allman**（CEO、元 Goldman デジタル資産チーム）と **Pinku Surana**（CTO）が共同創業した。創業時のテーゼ（2021  ホワイトペーパーによる）は、DeFi 最大の空白が **規制対応済みの利回りプリミティブ**であるというもの。DeFi ネイティブのユーザーは利回りを求めるが、利用可能な利回りは投機（レンディング、永久先物、LP ポジション）由来に限られていた。トークン化米国債利回りがこの空白を埋める。

2024  の **Ondo Foundation**（DAO ガバナンスの器）の設立は、意図的な分離を反映している。

1. **Ondo Finance Inc.** — 営利事業会社。OUSG / USDY スポンサーシップから手数料収入を得る。
2. **Ondo Foundation** — 非営利 DAO。将来の Ondo Chain バリデーター調整と公共財インフラのガバナンスを担う。

この「事業会社 + 財団」というパターンは、Compound、Uniswap、Solana が営利機能とプロトコル・ガバナンス機能を分けた形に似ている。それが単なるブランド上の分割ではなく、Ondo の戦略的方向性を実質的に分散化するかは未解決の論点である。

## 地域別採用内訳

USDY（Ondo プロダクトの中で最もリテールがアクセスしやすい）は、他のトークン化利回り商品にはない特徴的な地域集中を持つ。Ondo の公開開示と DefiLlama のオンチェーン分析によれば、次の通りである。

| 地域 | USDY 保有者比率 | 推定時価総額集中 | 需要ドライバー |
|---|---|---|---|
| 中南米（AR, BR, MX, CL, CO） | ~32% | ~$185M | ARS、BRL 下落に対するドルヘッジ。米国証券口座なしで UST 利回りへアクセス |
| 日本除くアジア（SG, HK, KR, TW） | ~27% | ~$155M | 富裕層のオンチェーン利回りアクセス。0.5-1% の銀行預金の代替 |
| 日本 | ~6% | ~$35M | ニッチ。利回り付き外国商品に対する JFSA の姿勢に制約される |
| 中東（UAE, KSA, Bahrain） | ~9% | ~$50M | 暗号資産ネイティブの富裕層資産。ADGM / DIFC の規制安心感 |
| アフリカ（NG, KE, ZA） | ~7% | ~$40M | NGN、KES、ZAR 下落に対するドルヘッジ |
| 欧州（スイス、英国 ex-EU、東欧） | ~13% | ~$75M | 非 EU ポジション、東欧のドルヘッジ |
| 北米非米国（CA, MX） | ~3% | ~$18M | カナダ利用者によるオンチェーン・レール利用 |
| その他 / 不明 | ~3% | ~$20M | 各種 |

中南米 + アジア + 中東の集中は USDY 保有者の約 68% に達する。これにより USDY は、明示的に **非米国リテールが中心**となる数少ないトークン化利回り商品の一つになっている。同時に USDY は **地域ごとの規制強化**に敏感である。2025-Q3  のアルゼンチン資本規制改革は、ペソをオンチェーン・ドルへ移して利回りを得る需要を生み、USDY 採用をむしろ増やした。一方、2025-Q4  のブラジル Pix ステーブルコイン規則は、日常利用向けにより明確な現地通貨レールをユーザーに与えたため、成長をやや鈍化させた。

## スポンサー付き / 非スポンサー型 DeFi コンポーザビリティ

微妙だが戦略上重要なパターンとして、**Ondo の DeFi コンポーザビリティはスポンサー仲介型**であり、パーミッションレスではない。OUSG トークン契約の移転権限に KYC 制約が組み込まれているため、**Ondo の明示的な支援**なしに Aave、Morpho、Compound、Spark へ担保として追加することはできない。これは USDC のパーミッションレスな DeFi コンポーザビリティとは**逆**で、BUIDL のモデルに近い。

Implications:

1. Ondo はどの DeFi プロトコルに OUSG アクセスを与えるかを決める。現在は Flux Finance（Ondo 自社フォーク）、Morpho（一部 vault）、Pendle（PT-OUSG 市場）、Mantle の Mantle Treasury、Sui ネイティブのレンディング・プロトコル。
2. パーミッションレス DeFi プロトコル（Uniswap、Curve、汎用 Aave 市場）は、Ondo のホワイトリスト登録なしに **OUSG を上場できない**。
3. USDY のコンポーザビリティはやや緩い。非米国リテールウォレットは、非米国リテールをサポートする DeFi 取引場所で USDY と相互作用できるが、ウォレットは Ondo の KYC レイヤーを通過する必要がある。
4. rUSDY（リベース型バリアント）は、標準 USDY の日次価格ドリフトが一部 DeFi プロトコル統合を壊したため、特にローンチされた。rUSDY の供給量リベースは $1  の一定価格を保ち、DeFi 構成をより扱いやすくする。

このスポンサー仲介型コンポーザビリティは、**規制対象トークン化ファンドの標準モデル**である。これにより OUSG / USDY / BENJI は、SEC の未登録販売懸念を誘発せずに、USDC と同じマルチチェーン DeFi 環境に存在できる。

## 関連項目

- [[fintech/INDEX|fintech index]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL stablecoin-issuer adoption matrix]]
- [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]
- [[fintech/tether-business-model-short-treasury-yield|Tether business model]]
- [[fintech/m-network-m0-neutral-infrastructure|M^0 neutral infrastructure]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|Global stablecoin five-pole matrix]]
- [[fintech/three-circles-stablecoin-mra-framework|Three circles SC MRA]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|Institutional deposit-token thesis]]
- [[fintech/protocol-hedge-strategy-stripe-pattern|Protocol hedge strategy · Stripe pattern]]
- [[fintech/cbbtc-institutional-btc-wrapper|cbBTC institutional wrapper]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|Onchain finance vs crypto bifurcation]]
- [[fintech/issuer-distributor-incentive-realignment-arc-strategy|Issuer-distributor realignment · Arc strategy]]
- [[exchanges/jp-cex-deposit-token-stablecoin-integration|JP CEX deposit-token integration]]
- [[exchanges/INDEX|exchanges index]]
- [[business/larry-fink-blackrock-digital-asset-template|Larry Fink BlackRock digital-asset template]]

## 出典

- Ondo Finance 公式ページ (ondo.finance)
- Ondo Foundation ガバナンスページ (ondo.foundation)
- Ondo Finance プロトコル文書 (docs.ondo.finance)
- DefiLlama Ondo Finance ダッシュボード (defillama.com/protocol/ondo-finance)
- BlackRock BUIDL ファンドページ (blackrock.com)
- OUSG と USDY に関連する SEC EDGAR 公開提出書類 (sec.gov/edgar)
- Ondo Summit 2025  の公開発表（Ondo Chain 開示）
- Ankura Trust 月次 USDY 透明性レポート（公開）
