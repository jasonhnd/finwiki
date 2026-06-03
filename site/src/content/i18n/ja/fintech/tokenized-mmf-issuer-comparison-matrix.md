---
source: fintech/tokenized-mmf-issuer-comparison-matrix
source_hash: dee64f9ae50e4ef7
lang: ja
status: machine
fidelity: ok
title: "トークン化 MMF 発行体比較マトリックス — BUIDL, BENJI, ACRED, WTGXX, USYC, USTB, OUSG"
translated_at: 2026-06-02T14:01:20.905Z
---

# トークン化 MMF 発行体比較マトリックス — BUIDL, BENJI, ACRED, WTGXX, USYC, USTB, OUSG

## ウィキ上の位置づけ

この項目は、トークン化マネーマーケットおよび利回り付き RWA ファンド発行体を 8 商品で横比較するマトリックスとして、[[fintech/INDEX|fintech index]] の配下にある。発行体別の深掘りである [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]、[[fintech/franklin-templeton-stablecoin-migration|Franklin BENJI / FOBXX]]、[[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]、[[fintech/tokenized-mmf-wisdomtree-hashnote|WisdomTree WTGXX + Hashnote USYC]]、[[fintech/ondo-finance-rusdy-adoption|Ondo OUSG / USDY / rUSDY]] を補完する。トークン化 MMF がステーブルコイン利回りインフラとして果たす制度的役割は [[fintech/circular-reserve-asset-flywheel-overview|準備金相互ロックフライホイール]] と [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC issuer adoption]] を、規制境界は [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] と [[fintech/three-circles-stablecoin-mra-framework|三円 MRA framework]] を参照。

> [!info] 要約
> 8 つのトークン化ファンド商品が 2026-Q2 データセットの中核である。**BUIDL**（BlackRock + Securitize、AUM 約 $2.58B、Reg D、8 チェーン、Aaa-mf）、**BENJI / FOBXX**（Franklin Templeton、約 $650M、1940 Act 2a-7, 、8 チェーン）、**ACRED**（Apollo、約 $100M+、Reg D、MMF ではないプライベートクレジット、7 チェーン）、**WTGXX**（WisdomTree、約 $200M、2a-7  リテール、自社 Prime ウォレット）、**USYC**（Hashnote → Circle 2024-12, 、ピーク約 $1B、Reg D、現在は USDC.YS 利回りエンジン）、**USTB**（Superstate、約 $150M、Reg D）、**OUSG**（Ondo、約 $650M、Reg D、**BUIDL 裏付け**、7 チェーン）、および **PYUSD-MMF 候補**トラック（Paxos shelf、未稼働）が並ぶ。トークン化ファンド市場全体は、**AUM $8B+** を 2026-Q2 に突破し、約 $1B だった 2024-Q1 から 8倍の成長を 24 か月で達成したが、なお <0.1%、約 $7T の米国 MMF 市場に対して小さい。マトリックスを横断して読むと、**規制ラッパー（Reg D vs 1940 Act 2a-7）が市場を二分し**、**Securitize + BNY Mellon への移管代理人・カストディアン集中が際立ち**、BUIDL の「利回りインフラ」ポジションと競う第二梯団商品にとって **Securitize / Ondo / Pendle / Morpho 経由のオンチェーン・コンポーザビリティが拘束的な競争上の堀**であることが分かる。

## 8 商品比較が必要な理由

単一発行体の物語（「BUIDL が支配する」「BENJI が最初だった」）は真実の異なる部分を捉えるが、構造パターンを隠してしまう。8 商品を **NAV / AUM / 決済チェーン / 移管代理人 / カストディアン / 規制ラッパー / 流通 / 対象投資家 / オンチェーン・コンポーザビリティ** で横並びに置くことで、競争上のポジショニングが見える。このマトリックスは、拘束的なコンプライアンス選択としての **Reg D vs 2a-7 分岐**（WTGXX と FOBXX だけが 2a-7 登録で、米国リテール配信が可能）、**Securitize 集中**（BUIDL + ACRED の移管代理人）、**BNY Mellon カストディアン集中**（BUIDL Reserve、BENJI/FOBXX、OUSG の裏付け UST、USDC Reserve Fund のカストディアン）も示す。より広い RWA トークン化景観は [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto bifurcation]] を参照。

## マトリックス A · 発行体、NAV、AUM、開始時期

| 商品 | 発行体 / スポンサー | NAV 目標 | AUM (2026-Q2) | 開始時期 |
|---|---|---|---|---|
| **BUIDL** | [[fintech/blackrock-buidl-tokenized-mmf-overview\|BlackRock USD Institutional Digital Liquidity Fund]] | $1.00 per share | **~$2.58B** | 2024-03 |
| **BENJI / FOBXX** | [[fintech/franklin-templeton-stablecoin-migration\|Franklin Templeton Franklin OnChain U.S. Government Money Fund]] | $1.00 per share | **~$650M** | 2021-04 |
| **ACRED** | [[fintech/apollo-acred-private-credit-tokenization\|Apollo Diversified Credit Securitize Fund]] | n/a (private credit; not pegged) | **~$100M+** | 2025-01-30 |
| **WTGXX** | WisdomTree Government Money Market Fund (Prime tokenized class) | $1.00 per share | **~$200M** (within Prime) | 2024-Q3 (tokenized share class) |
| **USYC** | Hashnote (acquired by Circle 2024-12); now Circle USDC.YS yield engine | $1.00 per share | **~$1B peak** (pre-acquisition); integrated post-2025-Q1 | 2023; Circle acq 2024-12 |
| **USTB** | Superstate Short Duration US Government Securities Fund | $1.00 per share | **~$150M** | 2024-Q2 |
| **OUSG** | [[fintech/ondo-finance-rusdy-adoption\|Ondo Short-Term US Government Treasuries Fund]] | $1.00 per share | **~$650M** | 2023 (re-routed to BUIDL backing 2024-Q2) |
| **PYUSD-MMF (Paxos shelf)** | Paxos shelf-registered MMF (not yet live) | $1.00 per share | n/a | Planned |

市場リーダーとの差は現実である。**BUIDL 単独で ~32%、約 $8B のトークン化 MMF 市場を占め**、第二梯団商品（BENJI + OUSG + USYC + WTGXX + USTB + ACRED）の合計は約 $2.5B+ である。Circle 買収後の **USYC のステータスはハイブリッド**であり、USYC AUM は現在、単独商品としてではなく USDC.YS 採用指標に反映される点に注意する。さらに **OUSG は構造的に BUIDL 流通ラッパー**である。Ondo は 2024-Q2 に、OUSG が準備金の大半を BUIDL に再ルーティングすると発表し、一部の見方では OUSG は **約 40%、BUIDL の 2024 中盤 AUM を持つ最大の外部 BUIDL 保有者**となっている。

## マトリックス B · 規制ラッパー

| 商品 | ラッパー | 適格投資家 | 米国リテールアクセス |
|---|---|---|---|
| BUIDL | **Reg D 506(c)** private placement (BVI structure) | US qualified purchaser + selected non-US institutions; **$5M minimum** | No (qualified purchaser only) |
| BENJI / FOBXX | **1940 Act 2a-7 registered MMF** | Retail US + institutional; **$0 minimum** in some channels | **Yes** (any accredited or non-accredited US investor) |
| ACRED | **Reg D** private placement | US qualified purchaser; institutional | No |
| WTGXX | **1940 Act 2a-7 登録 MMF**；WisdomTree Prime 経由のトークン化シェアクラス | 米国リテール（Prime ウォレット内） | **可** |
| USYC | **Reg D** private placement | Institutional | No |
| USTB | **Reg D** + Reg S | US qualified + non-US institutional | No |
| OUSG | **Reg D 506(c)** | US qualified purchaser + selected non-US institutions | No |
| USDY (Ondo retail) | **Reg S only**; not available to US persons | **Non-US individuals + institutions** | **No (explicitly forbidden to US persons)** |

規制上の分岐は拘束的である。**BENJI/FOBXX と WTGXX だけが 2a-7 登録**であり、これは米国リテール投資家が証券会社経由でアクセスできる標準ラッパーである。BUIDL、ACRED、USYC、USTB、OUSG はすべて Reg D で、機関投資家限定である。**USDY は独自**で、**非米国**リテール向けに明示的に設計された唯一の大規模トークン化商品（Reg S ノート構造）である。この分岐はマトリックス内で最大の単一差異であり、流通戦略の拘束要因である。

## マトリックス C · 裏付け資産、決済チェーン、移管代理人、カストディアン

| 商品 | 裏付け資産 | 稼働中の決済チェーン | 移管代理人 | カストディアン / トレジャリー |
|---|---|---|---|---|
| BUIDL | 75% UST (1-3M) + 15% overnight repo + 10% cash; WAM <60 days | **Ethereum, Solana, BNB, Avalanche, Aptos, Arbitrum, Optimism, Polygon** (8 chains) | **Securitize** (BlackRock invested $100M + board seat) | **BNY Mellon** (Reserve Fund) |
| BENJI / FOBXX | UST 証券 + 政府レポ + 現金 | **Stellar, Polygon, Arbitrum, Base, Avalanche, Aptos, Solana, Sui**（8 チェーン） | Franklin Templeton 自社（オンチェーン台帳 = 公式記録） | **BNY Mellon** |
| ACRED | Direct lending + asset-backed lending + structured credit (private credit, not UST) | Ethereum, Solana, Polygon, Avalanche, Aptos, Arbitrum, Sei (7 chains; Wormhole cross-chain) | **Securitize** (same as BUIDL) | Apollo administrator |
| WTGXX | UST + 政府レポ + 現金（標準 MMF ポートフォリオ） | Stellar + Ethereum（予定；Prime ウォレット内での配信が主） | WisdomTree 自社 | State Street カストディ |
| USYC | UST + 現金；買収前の Hashnote モデル | Ethereum, Solana, Canton（買収後の統合） | Hashnote / Circle | 買収後は Circle Reserve Fund カストディ（BNY Mellon） |
| USTB | Short UST + cash | Ethereum, Solana | Superstate in-house | UMB Bank custodial |
| OUSG | **BlackRock BUIDL + short UST** (mid-2024 onward) | Ethereum, Solana, Polygon, Mantle, Sui, Aptos, XRPL (7 chains) | Ondo + Securitize | BNY Mellon (via underlying BUIDL) |
| USDY (Ondo retail) | Short UST + bank deposits | Ethereum, Solana, Mantle, Sui, Aptos, Cosmos, Noble, Arbitrum (8 chains) | Ondo | Ankura Trust |

**集中パターン**:
- **Securitize** は BUIDL + ACRED + OUSG（再ルーティング経由）の移管代理人であり、**トークン化金融で最も重要な移管代理人集中**である。BlackRock は Securitize に $100M を投資し、取締役席を取得して関係を正式化した。
- **BNY Mellon** は BUIDL Reserve Fund、BENJI/FOBXX、OUSG（BUIDL 経由）、USDC Reserve Fund（Circle）、過去の USDP Reserve のカストディアンである。これはステーブルコインおよびトークン化ファンドのサプライチェーンにおける最大の単一カストディアン集中である。
- **Stellar** は、先行者ポジションを維持する唯一の非 EVM チェーンである（BENJI は 2021にそこでローンチし、FOBXX はマルチチェーン展開後も Stellar が主上場先である）。
- **Aaa-mf 格付け**（Moody's）: BUIDL + Fidelity FYHXX は同日（2026-05-13）に Aaa-mf を取得し、トークン化 MMF が従来型 MMF とフルスタックで同等のものとして機関投資家に受け入れられたことを示した。

## マトリックス D · 流通チャネルと対象投資家

| 商品 | 主要流通チャネル | 対象投資家セグメント |
|---|---|---|
| BUIDL | 機関投資家向け直接販売 + Securitize プラットフォーム + Coinbase Prime + Bitstamp institutional | ステーブルコイン発行体（USDC、USDB、RLUSD 準備金）、DeFi プロトコル（Aave RWA、Morpho）、機関投資家のトレジャリー（Siemens、Ondo） |
| BENJI / FOBXX | Franklin Templeton リテール証券 + Coinbase + Solana ウォレット | 米国リテール + 機関投資家（マルチチェーン命名戦略） |
| ACRED | Coinbase Asset Management + Kraken + Securitize | プライベートクレジット利回りを求める暗号資産ネイティブ機関 |
| WTGXX | WisdomTree Prime（自社リテールウォレット + 証券機能） | WisdomTree 自社流通スタック経由の米国リテール |
| USYC | 買収前: DeFi プロトコル（Frax、Ethena、Sky）；買収後: Circle USDC.YS へ統合 | 買収後: USDC 利回り付きラッパー利用者 |
| USTB | 暗号資産ネイティブの機関投資家デスク；Coinbase Asset Management | 機関投資家向け暗号資産デスク |
| OUSG | アジア + 中南米の適格機関；DeFi プロトコル（Flux、Pendle、Morpho） | 非米国適格機関；DeFi RWA 上場 |
| USDY (Ondo retail) | 非米国リテール証券 + アジア fintech + LatAm ウォレット | **非米国リテール**（中南米 ~44%、東南アジア、MENA） |

流通層は、第二梯団商品にとって**拘束的な競争上の堀**である。BUIDL は機関投資家のトレジャリー流通（BlackRock の既存顧客基盤）を持ち、**SC 発行体フライホイールのデフォルト準備資産**である。BENJI/FOBXX は Franklin Templeton の証券流通を活用する。WTGXX は WisdomTree Prime ウォレット内にロックされ、成長上限は Prime のリテールオンボーディング速度に依存する。OUSG と USDY は合わせて、他の発行体が持たない **リテール + 機関投資家向けのアジア / 中南米 2 商品スタック**を Ondo に与える。

## マトリックス E · オンチェーン・コンポーザビリティと DeFi 統合

| 商品 | DeFi 統合の深度 | 担保としての上場先 |
|---|---|---|
| BUIDL | **最高**: **CME / Binance / Deribit / Crypto.com** で IM 担保として受け入れ；Apollo ACRED が償還流動性に利用；Pendle の利回り取引と統合；Aave RWA 上場 | 主要デリバティブ市場 + DeFi レンディング |
| BENJI / FOBXX | 中程度: Solana DeFi（Kamino、Drift）にネイティブ；Pendle | 主に Solana 上の DeFi レンディング上場 |
| ACRED | sACRED（2025-06, 、RedStone + Securitize）は**オンチェーン DeFi 利回りを得た初のプライベートクレジットファンド** | RedStone オラクル裏付け上場 |
| WTGXX | 低い: WisdomTree Prime ウォレットエコシステムに限定 | 外部 DeFi 統合は限定的 |
| USYC | 買収前: 深い DeFi（Frax、Ethena USDtb 裏付け、Sky USDS RWA vault）；買収後: USDC.YS 利回り付きラッパー商品へ統合 | DeFi レンディング + 利回りプロトコル |
| USTB | 中程度: 暗号資産ネイティブ機関向け DeFi | 初期 DeFi 上場 |
| OUSG | **深い**: Flux Finance（Ondo 自社レンディング市場）、Pendle 利回り取引、Morpho RWA 上場、Aave RWA 候補 | DeFi レンディング + 利回り + アジア / 中南米ウォレット |
| USDY (Ondo retail) | Solana DeFi + Mantle / Sui エコシステム経由の高いリテール・コンポーザビリティ | リテール級 DeFi 上場（Kamino など） |

BUIDL の DeFi 統合の深度は構造的である。デリバティブ市場と DeFi プロトコルの双方が同時に利用できる、**T+0 償還可能な利回り付き担保の最も安い供給源**である。2026-05-14に始まった **$1B の BlackRock × Goldman × DTCC × Janus 即時償還ファシリティ** は、BUIDL を T+0 流動性層としてさらに定着させた。競合商品は BUIDL を経由する（OUSG モデル）か、T+1/T+2 償還ギャップを受け入れる必要がある。

## マトリックス F · 利回りメカニズムと経済性

| 商品 | APY（2026-05 代表値） | スポンサー手数料 | 利回り分配メカニズム |
|---|---|---|---|
| BUIDL | ~4.3% | ~20bps | 日次で配当として分配；オンチェーンでリベース |
| BENJI / FOBXX | ~4.7%（7日 SEC 利回り） | 20bps | 日次で配当として分配；オンチェーン・リベース |
| ACRED | 変動（プライベートクレジット；SOFR + スプレッド） | ~75-150bps（典型的なプライベートクレジット） | 四半期分配；プライベートクレジットファンドの仕組み |
| WTGXX | ~4.7%（7日 SEC 利回り） | ~20bps | Prime ウォレット経由の日次分配 |
| USYC（買収後） | USDC.YS パッケージとして ~4.5% を提供 | 該当なし（USDC.YS に統合） | USDC + USYC 持分の商品パッケージ |
| USTB | ~4.5% | ~15bps | 日次分配 |
| OUSG | ~4.8%（SOFR 連動；SOFR-25 〜SOFR-40bps 純額） | ~15bps Ondo + 20bps BlackRock（BUIDL 裏付け経由） | 日次分配；BUIDL 経由でルーティング |
| USDY (Ondo retail) | リベース経由で ~4.7% | ~20bps | 価格リベース（USDY）または供給量リベース（rUSDY） |

経済モデルは例外的に収斂している。UST 裏付け商品はすべて、~15-25bps のスポンサー手数料で SOFR 近傍の利回りを提供する。**OUSG の純 APY は構造的に BUIDL を ~20bps 下回る**（BlackRock 20bps 手数料 + Ondo 15bps 手数料を複利控除後で反映）ためであり、OUSG が価値連鎖上 BUIDL の下流に位置するからである。ACRED は、構造的に異なる利回り（プライベートクレジット、長いデュレーション、低い流動性）と構造的に高い手数料を持つ唯一の商品である。USDY/rUSDY は、**非米国リテールが米国適格購入者ゲートを通らずに直接利回りへアクセスできる**唯一の商品である。

## マトリックス G · GENIUS Act §501 適合ステータス

| 商品 | GENIUS §501 分類 | 注記 |
|---|---|---|
| BUIDL | §501 の範囲外（登録証券；決済ステーブルコインではない） | 米国決済文脈では「ステーブルコイン」として販売できない |
| BENJI / FOBXX | §501 の範囲外（SEC 登録 2a-7 MMF） | BUIDL と同じ論理 |
| ACRED | §501 の範囲外（プライベートクレジット；ペッグではない） | カテゴリとしてステーブルコインではない |
| WTGXX | §501 の範囲外（SEC 登録 2a-7 MMF） | BENJI と同じ論理 |
| USYC | §501 の範囲外（Reg D ファンド）；ただし、許可された GENIUS 適合の利回り付きラッパー商品である **USDC.YS に統合** | Circle の USDC.YS は USDC（GENIUS 適合 SC）+ USYC（登録ファンド）を束ね、**§501 の SC 利息支払い禁止**を回避する |
| USTB | §501 の範囲外 | Reg D ファンド |
| OUSG | §501 の範囲外（Reg D ファンド） | Reg D ファンド |
| USDY / rUSDY | §501 の下で SC として販売することは明示的に不可（登録ノート；非米国のみ） | [[fintech/three-circles-stablecoin-mra-framework\|MRA framework]] における独自の第 4 サークル |

GENIUS Act §501 によるステーブルコイン発行体の利息支払い禁止は、**トークン化 MMF 成長の追い風を直接生み出した**。利回り付きドルは米国決済レール上で法的に SC にはなれないが、トークン化 MMF 持分にはなれる。Circle × Hashnote の買収とその後の USDC.YS ローンチは最も明確な実例である。Circle は SC 発行体（USDC）と利回りエンジン（USYC）を保有し、それらを商品パッケージとして束ねることで、技術的な適合性を維持しながら **§501 を迂回する**。すべての第二梯団トークン化 MMF は、この規制上の幾何から恩恵を受ける。

## これらの次元を使う理由

9 つのマトリックス軸（NAV、AUM、決済チェーン、移管代理人、カストディアン、規制ラッパー、流通、対象投資家、オンチェーン・コンポーザビリティ）は、**機関投資家の採用判断におけるゲート変数**に対応するため選ばれている。

1. **NAV / AUM** — 実現済みスケールを測る（ローンチ後に LP が気にする唯一の指標）。
2. **決済チェーン** — オンチェーン・コンポーザビリティの上限を決める（Solana DeFi vs Ethereum DeFi vs 両方）。
3. **移管代理人** — 運用リスクと規制上の chain-of-custody を決める（Securitize 集中は構造的）。
4. **カストディアン** — 裏付け資産の安全性を決める（BNY Mellon 集中は構造的）。
5. **規制ラッパー** — 適格投資家ベースを二分する（Reg D vs 2a-7  vs Reg S）。
6. **流通チャネル** — 採用速度を予測する（拘束的な競争上の堀）。
7. **対象投資家** — TAM を決める（適格購入者 vs リテール vs 非米国）。
8. **オンチェーン・コンポーザビリティ** — DeFi 統合の深度を決める（BUIDL の IM 担保受け入れは構造的な堀）。
9. **GENIUS §501 適合** — 商品を利回り付き SC ラッパーに組み込めるかを決める（USDC.YS パターン）。

これら 9 つの変数を合わせると、**BUIDL がゼロから 32%の市場シェアを 24 か月で獲得した理由**（機関投資家向け流通 + Securitize + BNY Mellon + Reg D + IM 担保 + 8 チェーン）と、**WTGXX が Prime ウォレットの成長上限に構造的に制約される理由**（有利な 2a-7 ラッパーにもかかわらず単一流通チャネルにロックイン）を説明できる。マトリックス表示は、これらのパターンを横並びで明らかにする。

## マトリックスの読み方

- **BUIDL は単なる商品ではなく「利回りインフラ」である**: BUIDL は Apollo ACRED に担保として利用され、Circle USDC に準備資産として統合され、CME/Binance/Deribit に IM として受け入れられ、Ondo OUSG を通じて再ルーティングされる。実際の経済的フットプリントは AUM を何倍も上回る。
- **第二梯団は BUIDL に収斂しているのではなく、差別化している**: BENJI はリテール証券、OUSG はアジア / 中南米流通、ACRED はプライベートクレジット、USDY は非米国リテール、WTGXX は自社 Prime ウォレット、USYC は USDC.YS 統合に寄せている。BUIDL の機関投資家向け Reg D の堀を直接攻撃するものはない。
- **Securitize 集中は最も過小評価されているリスクである**: BUIDL + ACRED +（再ルーティング経由の）OUSG の移管代理人であるため、Securitize の運用障害は第二梯団全体へ波及する。BlackRock の $100M 投資 + 取締役席は、部分的にはリスク軽減策である。
- **BNY Mellon カストディアン集中はさらに大きい**: BUIDL Reserve + BENJI/FOBXX + USDC Reserve + USDY 裏付けのカストディアンである。BNY の運用問題は、適合 USD オンチェーンスタック全体に波及する。
- **OUSG の BUIDL への構造的依存** は、OUSG が実質的には独立商品ではなく、非米国の機関投資家向けアジア / 中南米顧客のための BUIDL 流通ラッパーであることを意味する。BUIDL との純粋な代替競争は構造的に難しい。
- **GENIUS §501 が追い風を生んだ**: Circle の USDC.YS（USDC + USYC バンドル）は、トークン化 MMF + GENIUS 適合 SC が許可された利回り付き USD ラッパーであることを示す最も明確な実例であり、第二梯団 MMF 戦略を裏付ける。
- **市場はまだ米国 MMF TAM の ~0.1%にすぎない** — $8B vs $7T。10倍成長しても、追加発行体の余地はなお大きい。

## 関連
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC issuer adoption]]
- [[fintech/franklin-templeton-stablecoin-migration|Franklin Templeton BENJI / FOBXX]]
- [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]
- [[fintech/tokenized-mmf-wisdomtree-hashnote|WisdomTree WTGXX + Hashnote USYC]]
- [[fintech/ondo-finance-rusdy-adoption|Ondo OUSG / USDY / rUSDY]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
- [[fintech/circular-reserve-asset-flywheel-overview|準備金相互ロックフライホイール]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン利息分配経済学]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS / sUSDS]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA framework]]
- [[fintech/m-network-m0-neutral-infrastructure|M^0 / M Network neutral infrastructure]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto bifurcation]]
<!-- /wiki-links:managed -->

## 出典

- BlackRock — BUIDL fund page: https://www.blackrock.com/us/individual/products/422581/
- Franklin Templeton — FOBXX fund page: https://www.franklintempleton.com/investments/options/money-market-funds/products/29386/SINGLCLASS/franklin-on-chain-u-s-government-money-fund/FOBXX
- Apollo + Securitize ACRED page: https://apolloacademy.com/securitize/
- WisdomTree — WTGXX fund page: https://www.wisdomtree.com/investments/etfs/fixed-income/wtgxx
- Hashnote USYC: https://www.usyc.com/
- Superstate USTB: https://superstate.com/
- Ondo Finance — OUSG / USDY / rUSDY product docs: https://ondo.finance/
- SEC EDGAR — registered MMF + 2a-7 filings: https://www.sec.gov/edgar
- Circle blog — Circle acquires Hashnote (2024-12): https://www.circle.com/blog/circle-acquires-hashnote
- DefiLlama BENJI protocol page: https://defillama.com/protocol/franklin-templeton-benji
- Moody's public rating action — Aaa-mf for BUIDL + FYHXX (2026-05-13)
- Public BlackRock × Goldman × DTCC × Janus $1B instant-redemption facility announcement (2026-05-14)
