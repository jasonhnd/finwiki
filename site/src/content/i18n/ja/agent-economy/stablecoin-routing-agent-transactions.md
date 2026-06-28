---
source: agent-economy/stablecoin-routing-agent-transactions
source_hash: 31eb206b13602bcb
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "AIエージェント取引のためのステーブルコインのルーティング · エージェントの決済を実際に決済するのはどのステーブルコインか"
translated_at: 2026-06-26T08:28:46.037Z
---

# AIエージェント取引のためのステーブルコインのルーティング · エージェントの決済を実際に決済するのはどのステーブルコインか

## 要約

AIエージェントがAPIコール、ツール呼び出し、または下流のエージェントサービスに対して支払う際、2026 年半ばにおける実際にネットワーク上で決済される資産は、支配的なシェアでは **Base上のUSDC**、チェーン固有のユースケースでは **他のL2上のUSDC**(Arbitrum、Optimism、Polygon PoS、Solana)、新興市場および非公式なエージェントレールでは **Tron / Ethereum L1上のUSDT**、発行体に整合した垂直スタックでは **USDB / RLUSD / PYUSD / FDUSD** である。ルーティングは、大半のスタックにおいてエージェントの選択 **ではない** — それはウォレットプロバイダーおよび受け取り側の加盟店の選択である。**Privy + Coinbase CDPはUSDCをデフォルトとし**、**Stripe / BridgeはUSDBを経由してルーティングする** ため、デフォルト階層のウォレットの分布([[agent-economy/embedded-wallet-landscape-2026-consolidation|2026 embedded-ウォレット consolidation]] 参照)が、AIエージェントがどのステーブルコインで支払うかを実質的に決定する。ERC-4337 のペイマスターを通じたガスレス送金とCircle CCTP v2 (高速なクロスチェーン・ファイナリティ)が **マルチチェーンのエージェント決済のUX** を決定づけ、[[agent-economy/x402-http-payment-overview|x402 protocol]] がその選択を運ぶ支配的なHTTPレイヤーのメカニズムである。より広いステーブルコイン市場については [[fintech/usd-stablecoin-interchange|USD stablecoin interchange]]、発行体の戦略については [[fintech/stablecoin-chain-token-strategy-trilemma|chain × token × strategy trilemma]] を参照。

## ウィキ上の位置づけ

本項目は [[agent-economy/INDEX|agent-economy index]] の下に位置する。決済を運ぶプロトコルについては [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]、インテント / マンデートのレイヤーについては [[agent-economy/ap2-overview|AP2 overview]]、Base上のUSDCというデフォルトについては [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]、より広いステーブルコインのリザーブおよびインターチェンジの文脈については [[fintech/INDEX|fintech index]] と併せて読まれたい。

## どのステーブルコインか · 2026 年半ばの決済構成

2026年半ばに、エージェント決済のボリュームがステーブルコイン / チェーンの組み合わせ別に実際にどこへ着地するかについての、公開ソースに基づくおおまかな内訳:

| ステーブルコイン × チェーン | おおよそのルーティングシェア | ドライバー |
|---|---|---|
| Base上のUSDC | デフォルト階層の組込型ウォレットで支配的なシェア | Coinbase CDPのデフォルト + Base Paymaster + AgentKit |
| Ethereum L1 上のUSDC | エンタープライズ / 機関投資家のエージェントフロー | コンプライアンスの姿勢 + USDCの主要な発行 |
| Arbitrum上のUSDC | DeFi統合型のエージェントフロー | Arbitrumの厚いDeFi流動性 |
| Optimism上のUSDC | OP-Stack整合型のエージェントフロー | OP Superchainの協調 |
| Solana上のUSDC | 高スループットのエージェントフロー | Solanaの低レイテンシ決済;Privy + CDPのマルチチェーンサポート |
| Tron上のUSDT | 新興市場および非公式なエージェントレール | USDTの地域的優位、Tron上の低手数料 |
| Ethereum L1 上のUSDT | レガシーおよびCEX経由のフロー | USDTは浮動量で最大のステーブルコインであり続ける |
| Tempo上のUSDB | Stripe整合型のエージェントフロー | Stripeの垂直スタックのデフォルト |
| XRP Ledger + Ethereum上のRLUSD | Ripple整合型のフロー | Ripple回廊および法人財務の需要 |
| Ethereum + Solana上のPYUSD | PayPal整合型のフロー | PayPalの加盟店向け支払い |
| Ethereum + BNB上のFDUSD | アジアのCEX整合型のフロー | Binanceのルーティング |

2つの観察:

1. **Base上のUSDCが事実上のデフォルト** である。なぜなら、AWS AgentCoreのデフォルトウォレットの複占([[agent-economy/privy-aws-agentcore-default-wallet|Privy + CDP]])が、エージェントのプロビジョニングのロングテールをCoinbase整合のチェーン経済へと向かわせるからである。
2. **USDTは新興市場 / 非公式レールにとって構造的に重要** である。主要なハイパースケーラーのデフォルトのエージェントスタックのいずれも、それを推奨デフォルトとして選んでいないにもかかわらず、である。

## 決済ファイナリティの要件エージェント取引が決済ファイナリティの遅延をどれだけ許容できるかは、ユースケースに依存する:

| ユースケース | 許容度 | 典型的なチェーンの選択 |
|---|---|---|
| 公開エンドポイントに対するAPIコールごとのx402 マイクロペイメント | サブセカンドの体感ファイナリティ(確率的な受容で問題ない) | ブロックタイムの速いL2 ;Base、Solana |
| 数秒のツール呼び出しに対するエージェント間決済 | 数秒のファイナリティ | Base、Arbitrum、Optimism |
| カストディを保持する下流のエージェントへの支払い(エスクロー的) | ハードファイナリティが必須 | Ethereum L1,、またはL2 → L1 の不正証明ウィンドウの確認を待つ |
| 国境を越えるB2Bのエージェント決済 | ファイナリティ + コンプライアンス | Ethereum L1上のUSDC;CCTP v2 のクロスチェーン |
| 財務スイープ | ハードファイナリティ + 照合 | Ethereum L1;従来の会計へのオフチェーン照合 |

このカテゴリーのトレードオフは、決済ネットワークがオーソリゼーション(速い)とクリアリング(遅い)のバランスを取る方法を反映している。エージェントは通常 [[agent-economy/x402-http-payment-overview|x402 HTTP 402]] のセマンティクスに対して動作し、これは早期のオンチェーン取り込みをオーソリゼーションとして受容し、完全なファイナリティを分離可能な照合ステップとして扱う。

## クロスチェーンの抽象化 · マルチチェーンのエージェントUXがどのように動くか

大半のエージェントSDKは、基盤となるチェーンをエージェントの推論レイヤーに露出しない。チェーン抽象化のスタック:

1. **ウォレット残高API。** PrivyのMultichain Balances APIおよびCDPのウォレットAPIは、Ethereum、Base、Arbitrum、Optimism、Polygonにまたがる統一されたUSDC残高を返す。エージェントは、チェーンごとの残高ではなく「N USDCが利用可能である」と見る。
2. **ルーティングレイヤー。** ウォレットは、加盟店が受け入れる、最も手数料が低く最もファイナリティの速いチェーンへ、送金をルーティングする。エージェントはチェーンを選ばない。
3. **Circle CCTP v2 (Cross-Chain Transfer Protocol)。** サポートされるチェーン間でのUSDCのためのCircleのバーン・アンド・ミントのメカニズム。CCTP v2 (2025年リリース)は、ミント後のプログラム可能なアクションのためのフックモデルを伴い、L2間でより速いソフトファイナリティをサポートする。CCTPは、デフォルト階層のウォレット内のマルチチェーンUSDCルーティングの多くの基盤である。
4. **LayerZero / Wormhole / Hyperlane / Axelar。** 非USDCのステーブルコイン、よりロングテールのチェーン、クロススタックのトークンスワップに用いられる汎用のクロスチェーン・メッセージングレイヤー。これらは通常、ウォレットの抽象化の背後にラップされる。
5. **クロスチェーンのインテントレイヤー。** Across、Catalyst、Bungeeおよび類似のインテントベースのルーティングプロトコルは、エージェントのウォレットがインテント(「100 USDCをチェーンXへ移動する」)を公表し、ソルバーのネットワークがそれを競争的に充足することを可能にする。

デフォルト階層の組込型ウォレットにおけるパターンは、クロスチェーンのルーティングについて **USDC + CCTP v2をデフォルトとし**、対象チェーンがUSDC + CCTPのサポートを欠く場合にのみ汎用のメッセージングにフォールバックすることである。

## ガスレスのエージェント取引 · ペイマスターのメカニクスエージェントは、いかなる合理的な本番デプロイメントにおいても、ガスのためのETHを保持しない。ガスはERC-4337 のペイマスターを通じてスポンサーされる:

- **Coinbase Base Paymaster。** Base上のCDP発行のSmart ウォレット内の取引に対してガスをスポンサーし、USDCで支払うか、まるごとスポンサーされる。[[agent-economy/coinbase-cdp-developer-platform|CDP / AgentKit]] スタックの構造的なデフォルト。
- **Pimlico、Stackup、Biconomy、Alchemy AA paymaster。** あらゆるERC-4337 ウォレットが統合できるサードパーティのペイマスター。Privyおよび他のSDKで用いられる。
- **Stripe / Privyのカスタムペイマスター。** 加盟店のStripe Treasury残高からUSDCを計量する、Stripeレール対応のペイマスター。
- **EIP-7702 のハイブリッドモード。** EOAは単一の取引のために一時的にスマートアカウントへアップグレードでき([[agent-economy/erc-7715-overview|ERC-7715]] のパーミッションモデル参照)、恒久的な移行なしにペイマスターのスポンサーを可能にする。

1日に数千のマイクロペイメントを行うエージェントにとって、ペイマスターのガスコストモデルは主要な経済的インプットである。BaseのUSDCネイティブのガス + サブセント単位の取引手数料は、Baseがデフォルト階層のエージェント決済のルーティングを支配する構造的な理由である。

## Circle CCTP v2 · クロスチェーンのバックボーン

2025 年にリリースされたCCTP v2 (Circle Cross-Chain Transfer Protocolバージョン2)は、今年のエージェントスタックにおける最も重大なステーブルコイン・インフラの変化である。Circleの開発者向けドキュメントからの主要な特性:

- **バーン・アンド・ミントであり、ブリッジ・アンド・ラップではない。** USDCはソースチェーン上でバーンされ、Circleのアテステーションによってデスティネーションチェーン上でミントされる。ブリッジ版のUSDCのバリアントは存在しない — CCTPがサポートするすべてのチェーン上のすべてのUSDCはネイティブのUSDCである。
- **ソフトファイナリティの高速送金。** CCTP v2 は、ハードなL1 ファイナリティを待つのではなくファイナリティ閾値のアテステーションを用いる高速送金モードを導入し、一般的なケースについてサブミニッツのクロスチェーン決済をサポートする。
- **フック。** ミント後のフックは、USDCがミントされた後にデスティネーションチェーンがプログラム可能なアクションを実行することを可能にする。エージェント決済については、これがアトミックな「USDCを受け取る + 下流のツールを呼び出す」セマンティクスを可能にする。
- **サポートされるチェーン。** Ethereum L1,、Base、Arbitrum、Optimism、Avalanche、Polygon PoS、Solana、加えて2025-2026年を通じて追加されたチェーン。

ウォレットが現在USDCを保持しているのとは別のチェーン上のツールに対して支払う必要があるAIエージェントにとって、CCTP v2 は構造的なデフォルトである。ウォレットプロバイダーは、クロスチェーンの差分を数秒以内に透過的に解決できる。

## x402 + USDC · 支配的なエージェント決済のHTTPスタック

[[agent-economy/x402-http-payment-overview|x402 protocol]](Coinbase、2025-05)は、HTTP 402 「Payment Required」ステータスコードを復活させ、リファレンス実装についてはデフォルトでそれをBase上のUSDCにバインドする。エージェントのフロー:

1. エージェントがAPIエンドポイントを呼び出す。
2. サーバーがHTTP 402 と支払い指示(USDC金額 + 受取先チェーン + アドレス)で応答する。
3. エージェントのウォレット(Privy / CDP)がUSDC送金に署名し、提出する。
4. サーバーが送金を検証し(Circle CCTPのアテステーションまたはチェーンネイティブの確認)、要求されたリソースを返す。

このプロトコルは設計上、資産に依存しないが、リファレンス + AWS AgentCoreのデフォルト + Cloudflare Agentsの統合のデフォルトはいずれもUSDCを用いる。x402 のBazaar MCPカタログ(10,000年半ば時点で2026以上のエンドポイント)は、圧倒的にUSDC建てである。

## 発行体に整合した垂直スタックエージェント決済ボリュームのうち非USDC・非USDTのステーブルコインのスライスは、**発行体に整合した垂直スタック** によって牽引される:

- **USDB(Stripe / Bridge)。** [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe five-layer stack]](Connect → Privy → Bridge USDB → Tempo → AP2 / x402)の内部では、USDBがStripeレールのエージェント決済のデフォルト決済資産である。
- **RLUSD(Ripple)。** Ripple回廊の内部、およびRipple統合型の法人財務のエージェント決済に用いられる。
- **PYUSD(PayPal)。** Ethereum + Solana上のPayPal整合の加盟店向けエージェント支払いに用いられる。
- **FDUSD(First Digital)。** Binance / FDIC圏のアジアのCEXのエージェントルーティングに用いられる;BinanceのBNB / FDUSDペアがオンランプである場合に関連する。
- **JPYC / DCJPY / Progmat JPY(日本)。** JPY建ての商取引で動作するエージェントのための日本の [[exchanges/jp-cex-deposit-token-stablecoin-integration|deposit-token + EPI integration]] フローの内部で用いられる。

パターンは、**各垂直統合型の決済スタックがそのスタック内のデフォルトとして独自のステーブルコインを稼働させ**、CCTP式のクロスチェーン相互運用はUSDC内部に限られる、というものである。ステーブルコイン横断の流動性はDEX(Curve)およびCEXのマーケットメーカーに存在する — [[fintech/usd-stablecoin-interchange|USD stablecoin interchange]] 参照。

## エージェントのパーミッション · 誰がステーブルコインを選ぶか

典型的なエージェント決済における「誰が決めるか」の階層:

1. **ハイパースケーラーのデフォルト。** AgentCore Paymentsのデフォルト = PrivyまたはCDPのウォレット。これは、ウォレットがデフォルトとするチェーン上のUSDC(CDPの場合はBase、Privyの場合はマルチチェーン)を意味する。
2. **ウォレットプロバイダーのデフォルト。** そのウォレット内で、マルチチェーン残高APIがエージェントにUSDCを保有していると伝える;ウォレットがルーティング時にチェーンを選ぶ。
3. **加盟店の受容。** 受取側が、どのステーブルコイン / チェーンの組み合わせを受け入れるかを公表する。ウォレットがマッチングする。
4. **エージェントのインテント。** エージェント自体が選択について推論するのは、限定的なケースのみである — 例えば、ステーブルコイン横断でリバランスする財務エージェントなど。
5. **ERC-7715によるユーザーのマンデート。** ユーザーの [[agent-economy/erc-7715-overview|ERC-7715 ウォレット permission]] はステーブルコイン / チェーンの選択を制約できる(建値および取引場所の許可リスト)。

大半のエージェントランタイムにとって、エージェントは基盤となるステーブルコイン / チェーンを知らず、関心もない。その選択はウォレットスタックに構造的に組み込まれている。

## 関連項目

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|Agent economy index]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
- [[agent-economy/ap2-overview|AP2 overview]]
- [[agent-economy/erc-7715-overview|ERC-7715 overview]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded ウォレット overview]]
- [[agent-economy/embedded-wallet-landscape-2026-consolidation|Embedded-ウォレット landscape 2026 consolidation]]
- [[fintech/usd-stablecoin-interchange|USD stablecoin interchange]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe five-layer Trojan horse]]
- [[fintech/INDEX|Fintech index]]
<!-- /wiki-links:managed -->

## 出典

- x402 プロトコルの公開ドキュメント(x402.org)
- Coinbase Developer Platformの公開ドキュメント(docs.cdp.coinbase.com)
- Privyの公開ドキュメント(docs.privy.io)
- Circle Cross-Chain Transfer Protocolの公開ドキュメント(circle.com、developers.circle.com/cctp)
- Ethereum EIPs:EIP-4337 (アカウントアブストラクション)、EIP-7702 (EOAアップグレード)、EIP-7715 (ウォレットパーミッション)
- Base、Arbitrum、Optimismの公開チェーンドキュメント
- Google Agentic Commerce AP2 の公開リポジトリ(github.com/google-agentic-commerce/AP2)
- ステーブルコインの分類および決済に関する米連邦準備制度、日本のFSA、英FCA、シンガポールMASの公開資料
