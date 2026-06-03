---
source: agent-economy/embedded-wallet-landscape-2026-consolidation
source_hash: cf919546a0d0d7ec
lang: ja
status: machine
fidelity: ok
title: "埋込型ウォレットの全体地図 2026 · 統合後のプロバイダーマップ"
translated_at: 2026-06-02T11:47:37.254Z
---

# 埋込型ウォレットの全体地図 2026 · 統合後のプロバイダーマップ

## 要約

2026 中盤までに、埋込型ウォレットのカテゴリは 20+ の SDK ベンダーが連なるロングテールから、**デフォルト層の複占**(Stripe 傘下の Privy、Coinbase CDP)と、ハイパースケーラーのデフォルトルーティングがカバーしないニッチを争う**二次層**(Magic、thirdweb、Dynamic、Web3Auth、Particle Network、Crossmint)へと圧縮された。その駆動要因はプロダクトの優位性ではなく、**ハイパースケーラーによるデフォルトウォレットの配置**である:AWS Bedrock AgentCore、Azure AI Foundry Agent Service、Google Cloud Vertex AI Agent Builder がそれぞれ「デフォルト」SDK を選定すると、選ばれたベンダーは AI エージェントのプロビジョニングのロングテールを流通コストゼロで獲得する。代表例については [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore default-wallet positioning]] を、その根底にあるフライホイールについては [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet network effects · integrator moat]] を参照のこと。

## ウィキ上の位置づけ

本エントリは [[agent-economy/INDEX|agent-economy index]] の配下に位置する。Stripe 側の代表例として [[agent-economy/privy-embedded-wallet-overview|Privy · Stripe subsidiary embedded self-custody wallet]]、Coinbase 側の例として [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP · developer platform overview]]、堀の論点として [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet integrator moat]]、フィンテック側のフレーミングとして [[fintech/embedded-wallet-fintech-disintermediation-overview|embedded wallet fintech disintermediation]] と併せて読むこと。

## デフォルト層と二次層の区分

2026中盤時点で公開ドキュメントとハイパースケーラーの発表から見えるカテゴリ区分:

| 層 | プロバイダー | 所有者 | ハイパースケーラーのデフォルト | 公開フットプリント | 備考 |
|---|---|---|---|---|---|
| デフォルト | Privy | Stripe(2025年6月買収) | AWS Bedrock AgentCore(デフォルト)、Azure AI Foundry(2つのデフォルトのうち1つ) | 110M+ ウォレット、1,000+ 統合 | Stripe Connect + Bridge USDB レール経由でルーティング([[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe five-layer Trojan horse]] 参照) |
| デフォルト | Coinbase CDP | Coinbase(NASDAQ: COIN) | AWS Bedrock AgentCore(Privy と共同デフォルト)、GCP Vertex AI Agent Builder(デフォルト) | 約 150K developer、約 8K dApp、約 5M MAU の埋込型ウォレット | Base + USDC + Onramp にデフォルトでバインド |
| 二次 | Magic | 独立系(Tiger / SV Angel) | ハイパースケーラーのデフォルトではない | ロングテールの Web3 SaaS クライアント | Magic Link / OAuth + DKLs MPC、MAU 当たりの階層型価格 |
| 二次 | thirdweb | 独立系 | ハイパースケーラーのデフォルトではない | NFT / ゲーム / コンシューマー dApp に厚い | InAppWallet + スマートアカウント SDK、チェーン非依存、部分的にオープンソース |
| 二次 | Dynamic | 独立系(a16z crypto) | ハイパースケーラーのデフォルトではない | DeFi / コンシューマーファイナンス志向 | マルチチェーンログイン、埋込型 + 外部ウォレットのブリッジ |
| 二次 | Web3Auth | 独立系(Torus Labs、BNB-Labs 出資) | ハイパースケーラーのデフォルトではない | ロングテールの Web3 + エンタープライズ | tKey + OAuth シェア再構成、オープンソース |
| 二次 | Particle Network | 独立系 | ハイパースケーラーのデフォルトではない | EVM + BTC + マルチチェーン | モジュラー SDK + 独自のチェーン抽象化層 |
| 二次 | Crossmint | 独立系 | ハイパースケーラーのデフォルトではない | NFT / コマース / RWA | 法定通貨でファンドするウォレット + レシートレールに特化 |

「デフォルト」とは、その SDK がハイパースケーラーのファーストクラスのエージェントオーケストレーション文書に推奨パスとして現れ、資格情報 / 課金 / IAM の配線が事前に組まれていることを意味する。開発者は他の任意の SDK に切り替え可能だが、ネット新規のエージェントの大半はデフォルトを継承する。

## 統合を駆動する5つの要因

**1. AWS Bedrock AgentCore のデフォルト選定(2025-Q3 GA)。** AWS は AgentCore Payments のデフォルトウォレットプロバイダー2社として Privy + Coinbase CDP を選んだ。Circle、Anchorage、Magic 等も利用可能だったがファーストクラスではなかった。この決定は構造的なものであり — Stripe は AWS のトップティアの収益顧客であり、Coinbase は主要な AWS リージョンのアンカーである — 数十万のネット新規 AgentCore エージェントがデフォルトで Privy か CDP のウォレットを継承するため、下流に波及した。[[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore default-wallet positioning]] 参照。

**2. Stripe による Privy 買収(2025年6月)。** Stripe は公表ベースで $300-500M(一部のソースはアーンアウトを含め最大 $1.1B と報じる)を支払い、Privy を Bridge($1.1B)、Tempo、USDB ステーブルコインと並ぶ Stripe ファミリーに組み込んだ。Stripe の視点では、Privy は [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|five-layer Trojan horse]] の内部にあるレイヤー 4 ウォレットである。埋込型ウォレットのカテゴリの視点では、これは最大の中立 SDK ベンダーを除去し、Stripe 寄りのデフォルトに置き換えた。

**3. Coinbase CDP の Base + USDC + Onramp との垂直統合。** CDP は単なる埋込型ウォレット SDK ではなく、Base と USDC にデフォルトでルーティングする [[agent-economy/coinbase-cdp-developer-platform|wallet + Onramp + Paymaster + AgentKit + Smart Wallets]] のパッケージ化されたスタックである。これにより、Privy とは構造的に異なる経済性を持つ並行的なデフォルト層プロバイダーが生まれた(CDP はオンチェーンのフローから収益を得る、Privy は Stripe レールのインターチェンジ上振れを伴う SaaS 型の手数料から収益を得る)。

**4. ハイパースケーラーのエージェントオーケストレーションプラットフォーム(2025-2026)。** AWS Bedrock AgentCore Payments(2025)、Azure AI Foundry Agent Service(2025-Q4)、Google Cloud Vertex AI Agent Builder(2026-Q1)がそれぞれマネージドのエージェントオーケストレーション面を出荷した。各社がデフォルトウォレットプロバイダーを選定した。ハイパースケーラー・デフォルト戦争は、2026において埋込型ウォレットのシェアが決まる直接のチャネルである。公開ドキュメントで見える選定:AWS → Privy + CDP、Azure → Privy +(追加のデフォルトは公開ドキュメントでなお曖昧)、GCP → CDP 寄り(Coinbase は構造的提携、AP2 の共同執筆を持つ — [[agent-economy/ap2-overview|AP2 overview]] 参照)。

**5. ウォレットプリミティブ層における ERC-7715 + ERC-4337 のコモディティ化。** 埋込型ウォレットが上に乗るプリミティブ — [[agent-economy/erc-7715-overview|ERC-7715 wallet permissions]]、ERC-4337 アカウント抽象化、ERC-7702 EOA アップグレード — が標準化され実装が容易になり、小規模 SDK が独自の MPC / TEE 選択の周りに築いていた技術的な堀の一部を取り除いた。

### Privy(Stripe)

- **所有者。** Stripe(2025年6月買収、創業者 Henri Stern + Asta Li は Stripe Privy のリーダーシップとして残留)。
- **鍵カストディの基盤。** MPC + TEE シャードモデル。1つの鍵シャードはユーザーのデバイス(Passkey / WebAuthn / Secure Enclave)に、1つのシャードは Stripe が運用する TEE(AWS Nitro Enclaves または同等)の内部に置かれる。
- **ハイパースケーラーのデフォルト配置。** AWS Bedrock AgentCore Payments — Coinbase CDP と共同デフォルト。Azure AI Foundry Agent Service は Privy をサポート対象のデフォルトとして掲載。
- **公開フットプリント。** 約 110M ウォレット、約 1,000+ の開発者統合(OpenSea、Hyperliquid、Farcaster、Friend.tech、Pump.fun、Story、Zora、主要な Stripe Connect マーチャントを含む)。
- **戦略的役割。** [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe five-layer collapse]] のレイヤー 4 。Stripe が、Bridge USDB / Tempo レール上のウォレットとしても機能するユーザー ID 面を必要とする場面で、Privy が選ばれた基盤となる。

### Coinbase CDP

- **所有者。** Coinbase(NASDAQ: COIN)。
- **鍵カストディの基盤。** MPC 分散鍵管理に加え、ガスレス USDC 送金のために Base Paymaster と統合されたパッケージ化された ERC-4337 Smart Wallet。
- **ハイパースケーラーのデフォルト配置。** AWS Bedrock AgentCore(Privy と共同デフォルト)。GCP Vertex AI Agent Builder は CDP 寄り(Coinbase は Google との AP2 共同執筆者)。
- **公開フットプリント。** CDP の公式発信によれば、約 150K developer、約 8K dApp、約 5M の月間アクティブ埋込型ウォレット。
- **戦略的役割。** Base + USDC にデフォルトでバインド、AgentKit モジュール(2025-04)はエージェント経済 SDK であり、ウォレットプリミティブを Coinbase が既に所有するチェーン経済に結びつける。

### Magic

- **所有者。** 独立系(Tiger / SV Angel 出資)。
- **鍵カストディの基盤。** Magic Link(email マジックリンク)に加え DKLs MPC 2/2。
- **ハイパースケーラーのデフォルト配置。** 2026 年中盤時点で、いずれの AgentCore / Foundry / Vertex の公開ドキュメントにおいてもハイパースケーラーのデフォルトではない。
- **公開フットプリント。** Web3 SaaS クライアントのロングテール、価格は MAU 当たりの階層型 SaaS 構造。
- **戦略的役割。** Privy 以前の市場リーダー、現在は中立性(フィンテックコングロマリットや取引所の親会社を持たない)で競う二次層のプロバイダー。

### thirdweb

- **所有者。** 独立系(Founders Fund、Coinbase Ventures、Polygon — マイノリティ出資)。
- **鍵カストディの基盤。** オプションの埋込型 MPC + スマートアカウント抽象化を備えた InAppWallet SDK。
- **ハイパースケーラーのデフォルト配置。** ハイパースケーラーのデフォルトではない。
- **公開フットプリント。** NFT、ゲーム、コンシューマー dApp に厚い、部分的なオープンソース姿勢。
- **戦略的役割。** コンシューマー / ゲーム dApp のニッチスペシャリスト、ウォレット単体ではなくフルスタックのツーリング(デプロイ + ウォレット + 決済を一体で)で競う。

### Particle Network

- **所有者。** 独立系。
- **鍵カストディの基盤。** MPC + ERC-4337 + 独自のチェーン抽象化層を備えたモジュラー SDK。
- **ハイパースケーラーのデフォルト配置。** ハイパースケーラーのデフォルトではない。
- **公開フットプリント。** EVM + BTC + マルチチェーンのカバレッジ、チェーンをまたぐ「ユニバーサルアカウント」モデルを強調。
- **戦略的役割。** フィンテックの流通ではなく、チェーン抽象化の深さで差別化する。

### Web3Auth

- **所有者。** 独立系(Torus Labs、BNB-Labs 出資)。
- **鍵カストディの基盤。** tKey + OAuth シェア再構成、オープンソースのコア。
- **ハイパースケーラーのデフォルト配置。** ハイパースケーラーのデフォルトではない。
- **公開フットプリント。** ロングテールの Web3 に加え、一部のエンタープライズ SSO 統合。
- **戦略的役割。** Stripe + Coinbase の商用デフォルトがますます支配する市場において、オープンソース姿勢が主要な差別化要因。

### Dynamic

- **所有者。** 独立系(a16z crypto 出資)。
- **鍵カストディの基盤。** 埋込型 + 外部ウォレットをブリッジするマルチチェーンログイン。
- **ハイパースケーラーのデフォルト配置。** ハイパースケーラーのデフォルトではない。
- **公開フットプリント。** 1つのセッション内で埋込型 + MetaMask ユーザーをブリッジする必要がある DeFi / コンシューマーファイナンス dApp。
- **戦略的役割。** 純粋な埋込型 SDK が対応しない、埋込型と外部ウォレットが交わる UX のギャップに特化する。

### Crossmint

- **所有者。** 独立系。
- **鍵カストディの基盤。** 法定通貨でファンドするウォレット作成、クレジットカードから NFT / RWA へのレシートレール。
- **ハイパースケーラーのデフォルト配置。** ハイパースケーラーのデフォルトではない。
- **公開フットプリント。** NFT、コマース、RWA トークン化の顧客、Visa / Mastercard レール統合。
- **戦略的役割。** 埋込型ウォレット市場の法定通貨ファンドのスライス — 暗号レールではなくカードネットワークを必要とするスライス — に特化しており、AI エージェントのボリュームで Privy / CDP と真っ向から競合しない。

## ハイパースケーラーのデフォルトウォレット戦争

最も影響の大きい 2026 のダイナミクスは、**ハイパースケーラーのエージェントプラットフォーム**が、マネージドのエージェントランタイム内でウォレットプロバイダーをデフォルトとして事前選定する方法である。これが 2023-2024の dApp 採用よりも重要である3つの理由:

1. **プロビジョニングは暗黙的であり、明示的ではない。** 開発者が [[fintech/usd-stablecoin-interchange|USDC]] 決済を受け取る必要のある AWS Bedrock エージェントを立ち上げると、AgentCore Payments モジュールが裏で Privy か CDP のウォレットをプロビジョニングする。開発者はウォレットベンダーの判断を一度も下していない。
2. **ハイパースケーラーが流通コストを吸収する。** 二次層の SDK は今や、開発者にデフォルトをオプトアウトするよう説得せねばならない — 単一の選ばれた SDK にオプトインするよう説得するよりも摩擦の高い販売である。
3. **デフォルト層のプロバイダーは構造的な複利を得る。** デフォルトでプロビジョニングされるすべてのウォレットが Privy または CDP のインストールベースに積み上がり、それが Azure / GCP や後続の任意のハイパースケーラー・エージェントプラットフォームにとって次のデフォルト候補としての魅力を高める。

2026 中盤のハイパースケーラー公開ドキュメントで見えるデフォルト配置:

| ハイパースケーラー | エージェントプラットフォーム | デフォルトウォレットプロバイダー | 備考 |
|---|---|---|---|
| AWS | Bedrock AgentCore Payments | Privy + Coinbase CDP | 2025-Q3 GA 以来公開、x402 + Bazaar MCP 統合、[[agent-economy/x402-http-payment-overview|x402 overview]] 参照 |
| Azure | AI Foundry Agent Service | Privy をサポート対象のデフォルトとして掲載、2つ目のデフォルトは公開ドキュメントで曖昧 | Microsoft の Stripe との関係が構造的アンカー |
| Google Cloud | Vertex AI Agent Builder | CDP 寄り、Coinbase との AP2 共同執筆が構造的アンカー | [[agent-economy/ap2-overview|AP2 overview]] 参照 |
| Cloudflare | Workers AI Agents | x402統合、ウォレットプロバイダーの選択はなお開発者側 | より低レイヤー:ID をプロビジョニングするのではなく決済をルーティングする |

## Stripe による Privy 所有 — 戦略的含意

Stripe は 2025年6月に Privy を買収した。公開報道では取引額を $300-500M のレンジとし、一部のソースはアーンアウト構造を含め最大 $1.1B と報じる。カテゴリの視点では、その帰結は:

- **最大の中立な埋込型ウォレットベンダーがもはや中立ではない。** 非 Stripe のマーチャントや Stripe の競合(Adyen、Block、PayPal)は今や「競合のウォレットスタックを使うか、自前で構築するか」の判断に直面する。
- **Privy は Stripe レール対応になる。** [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|five-layer collapse]] の内部で、Privy は構造的設計により Bridge(USDB ステーブルコイン)と Tempo(決済チェーン)にルーティングする。
- **AWS AgentCore のデフォルト配置が複利化する。** Stripe 寄りの AgentCore エージェントは Stripe 寄りのウォレットを継承し、それが Stripe 寄りのステーブルコインとチェーンを継承する。垂直スタックがあらゆる層で収益化される。
- **独占禁止の問いは未決のままである。** 2026, 中盤時点で、米国・英国・EU・日本のいずれの競争当局も Privy 買収に公に介入していないが、このパターンは歴史的な Apple / Google のデフォルト検索エンジン事案と並行する([[agent-economy/embedded-wallet-network-effects-moat|integrator moat]] の反論セクション参照)。

## 2024

以降の M&A 活動

| 日付 | イベント | 買い手 | 対象 | 公表価格 |
|---|---|---|---|---|
| 2025-06 | Stripe が Privy を買収 | Stripe | Privy | 約 $300-500M(一部のソースは最大 $1.1B) |
| 2025-06 | Stripe が Bridge を買収 | Stripe | Bridge | 約 $1.1B |
| 2024-Q3 | Coinbase が Wallet API + Cloud を CDP リブランドに統合 | Coinbase | (内部) | n/a |
| 2025-04 | Coinbase が CDP 上に AgentKit を出荷 | Coinbase | (内部) | n/a |
| 2025-Q3 | AWS が AgentCore のデフォルトとして Privy + CDP を選定 | AWS / Stripe / Coinbase | (プラットフォームデフォルト) | n/a |
| 未決 | thirdweb / Magic / Web3Auth / Dynamic の買収観測 | (各種) | (各種) | 確認なし |

蓋然性で重み付けされるが未確認:ハイパースケーラーが Stripe-Privy と Coinbase-CDP に対抗するため二次層のプロバイダーを買収する可能性がある。公開ドキュメントと公開 M&A 届出は、2026中盤時点でこれを示していない。

## 関連項目

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|Agent economy index]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet overview]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy × AWS AgentCore default-wallet positioning]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/embedded-wallet-network-effects-moat|Embedded wallet integrator moat]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded wallet fintech disintermediation overview]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe five-layer Trojan horse]]
- [[fintech/INDEX|Fintech index]]
<!-- /wiki-links:managed -->

## 出典

- Privy 公開ドキュメント: docs.privy.io
- Coinbase Developer Platform 公開ドキュメント: docs.cdp.coinbase.com
- Magic 公開ドキュメント: magic.link/docs
- thirdweb 公開ドキュメント: portal.thirdweb.com
- Particle Network 公開ドキュメント: docs.particle.network
- Web3Auth 公開ドキュメント: web3auth.io/docs
- Dynamic 公開ドキュメント: docs.dynamic.xyz
- Crossmint 公開ドキュメント: docs.crossmint.com
- AWS Bedrock AgentCore Payments の公開発表およびドキュメント(2025-Q3 GA)
- Azure AI Foundry Agent Service 公開ドキュメント(Microsoft Build 2025  / 2026)
- Google Cloud Vertex AI Agent Builder 公開ドキュメント(Google Cloud Next 2026)
- Privy および Bridge 買収に関する Stripe の公式発信(2025年6月)
- 埋込型ウォレットおよび電子マネー分類に関する FCA、SEC、金融庁、MAS の公開登録簿および協議文書
