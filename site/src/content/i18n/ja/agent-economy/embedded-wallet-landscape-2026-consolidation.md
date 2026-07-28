---
source: agent-economy/embedded-wallet-landscape-2026-consolidation
source_hash: 55e2ebb37bf93e23
lang: ja
status: machine
fidelity: ok
title: "埋込型ウォレットの全体地図 2026 · 統合後のプロバイダーマップ"
translated_at: 2026-07-28T22:03:26.809Z
---

# 埋込型ウォレットの全体地図 2026 · 統合後のプロバイダーマップ

## 要約

2026 中盤までに、埋込型ウォレットのカテゴリは 20+ の SDK ベンダーが連なるロングテールから、**デフォルト層の複占**(Stripe 傘下の Privy、Coinbase CDP)と、ハイパースケーラーのデフォルトルーティングがカバーしないニッチを争う**二次層**(Magic、thirdweb、Dynamic、Web3Auth、Particle Network、Crossmint)へと圧縮された。その駆動要因はプロダクトの優位性ではなく、**ハイパースケーラーによるデフォルトウォレットの配置**である:AWS Bedrock AgentCore、Azure AI Foundry Agent Service、Google Cloud Vertex AI Agent Builder がそれぞれ「デフォルト」SDK を選定すると、選ばれたベンダーは AI エージェントのプロビジョニングのロングテールを流通コストゼロで獲得する。代表例については [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore default-ウォレット positioning]] を、その根底にあるフライホイールについては [[agent-economy/embedded-wallet-network-effects-moat|embedded ウォレット network effects · integrator moat]] を参照のこと。

## ウィキ上の位置づけ

本エントリは [[agent-economy/INDEX|agent-economy index]] の配下に位置する。Stripe 側の代表例として [[agent-economy/privy-embedded-wallet-overview|Privy · Stripe subsidiary embedded self-カストディウォレット]]、Coinbase 側の例として [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP · developer platform overview]]、堀の論点として [[agent-economy/embedded-wallet-network-effects-moat|embedded ウォレット integrator moat]]、フィンテック側のフレーミングとして [[fintech/embedded-wallet-fintech-disintermediation-overview|embedded ウォレット fintech disintermediation]] と併せて読むこと。

## デフォルト層と二次層の区分

2026中盤時点で公開ドキュメントとハイパースケーラーの発表から見えるカテゴリ区分:

| Provider | 公開 document 上の product surface | sourceable な corporate / integration fact | Live selection checks |
|---|---|---|---|
| **Privy** | Embedded / server wallet、authorization、recovery control | Privy は Stripe による acquisition を発表。AWS は Stripe Privy connector を文書化 | wallet ownership、signer / policy model、supported chain、export / recovery、pricing |
| **Coinbase CDP** | Developer / embedded wallet、policy、agent tooling | AWS は Coinbase CDP connector を文書化 | wallet type、key / policy ownership、supported network、onramp / off-ramp、limit |
| **Magic** | Authentication と wallet infrastructure | old funding report ではなく current Magic corporate / product documentation を使う | wallet architecture、chain support、recovery、server signing、pricing |
| **thirdweb** | In-app / smart wallet と developer infrastructure | product scope は current thirdweb portal が定義 | account type、paymaster / bundler、supported chain、key management |
| **Dynamic** | Wallet / identity orchestration と embedded wallet | product scope は current Dynamic docs が定義 | wallet ownership、external-wallet linking、chain、server / delegated signing |
| **Web3Auth** | Wallet infrastructure と key-management / recovery option | product scope は current Web3Auth docs が定義 | threshold / recovery design、hosting、chain adapter、export |
| **Particle Network** | Wallet abstraction と chain-abstraction product | product scope は current Particle docs が定義 | account model、bundler / paymaster、chain support、bridge / solver dependency |
| **Crossmint** | Wallet、payment / checkout、tokenization API | product scope は current Crossmint docs が定義 | custody / recovery、chain / product support、compliance role、payment terms |

Sources: ^[https://docs.privy.io/] ^[https://docs.cdp.coinbase.com/] ^[https://magic.link/docs] ^[https://portal.thirdweb.com/] ^[https://docs.dynamic.xyz/] ^[https://web3auth.io/docs/] ^[https://docs.particle.network/] ^[https://docs.crossmint.com/] ^[https://privy.io/blog/announcing-our-acquisition-by-stripe]


「デフォルト」とは、その SDK がハイパースケーラーのファーストクラスのエージェントオーケストレーション文書に推奨パスとして現れ、資格情報 / 課金 / IAM の配線が事前に組まれていることを意味する。開発者は他の任意の SDK に切り替え可能だが、ネット新規のエージェントの大半はデフォルトを継承する。

## 統合を駆動する5つの要因

**1. AWS Bedrock AgentCore のデフォルト選定(2025-Q3 GA)。** AWS は AgentCore Payments のデフォルトウォレットプロバイダー2社として Privy + Coinbase CDP を選んだ。Circle、Anchorage、Magic 等も利用可能だったがファーストクラスではなかった。この決定は構造的なものであり — Stripe は AWS のトップティアの収益顧客であり、Coinbase は主要な AWS リージョンのアンカーである — 数十万のネット新規 AgentCore エージェントがデフォルトで Privy か CDP のウォレットを継承するため、下流に波及した。[[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore default-ウォレット positioning]] 参照。

**2. Stripe による Privy 買収(2025年6月)。** Stripe は公表ベースで $300-500M(一部のソースはアーンアウトを含め最大 $1.1B と報じる)を支払い、Privy を Bridge($1.1B)、Tempo、USDB ステーブルコインと並ぶ Stripe ファミリーに組み込んだ。Stripe の視点では、Privy は [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|five-layer Trojan horse]] の内部にあるレイヤー 4 ウォレットである。埋込型ウォレットのカテゴリの視点では、これは最大の中立 SDK ベンダーを除去し、Stripe 寄りのデフォルトに置き換えた。

**3. Coinbase CDP の Base + USDC + Onramp との垂直統合。** CDP は単なる埋込型ウォレット SDK ではなく、Base と USDC にデフォルトでルーティングする [[agent-economy/coinbase-cdp-developer-platform|ウォレット + Onramp + Paymaster + AgentKit + Smart ウォレット]] のパッケージ化されたスタックである。これにより、Privy とは構造的に異なる経済性を持つ並行的なデフォルト層プロバイダーが生まれた(CDP はオンチェーンのフローから収益を得る、Privy は Stripe レールのインターチェンジ上振れを伴う SaaS 型の手数料から収益を得る)。

**4. ハイパースケーラーのエージェントオーケストレーションプラットフォーム(2025-2026)。** AWS Bedrock AgentCore Payments(2025)、Azure AI Foundry Agent Service(2025-Q4)、Google Cloud Vertex AI Agent Builder(2026-Q1)がそれぞれマネージドのエージェントオーケストレーション面を出荷した。各社がデフォルトウォレットプロバイダーを選定した。ハイパースケーラー・デフォルト戦争は、2026において埋込型ウォレットのシェアが決まる直接のチャネルである。公開ドキュメントで見える選定:AWS → Privy + CDP、Azure → Privy +(追加のデフォルトは公開ドキュメントでなお曖昧)、GCP → CDP 寄り(Coinbase は構造的提携、AP2 の共同執筆を持つ — [[agent-economy/ap2-overview|AP2 overview]] 参照)。

**5. ウォレットプリミティブ層における ERC-7715 + ERC-4337 のコモディティ化。** 埋込型ウォレットが上に乗るプリミティブ — [[agent-economy/erc-7715-overview|ERC-7715 ウォレット permissions]]、ERC-4337 アカウント抽象化、ERC-7702 EOA アップグレード — が標準化され実装が容易になり、小規模 SDK が独自の MPC / TEE 選択の周りに築いていた技術的な堀の一部を取り除いた。

### Privy(Stripe)

- **所有者。** Stripe(2025年6月買収、創業者 Henri Stern + Asta Li は Stripe Privy のリーダーシップとして残留)。
- **鍵カストディの基盤。** MPC + TEE シャードモデル。1つの鍵シャードはユーザーのデバイス(Passkey / WebAuthn / Secure Enclave)に、1つのシャードは Stripe が運用する TEE(AWS Nitro Enclaves または同等)の内部に置かれる。
- **ハイパースケーラーのデフォルト配置。** AWS Bedrock AgentCore Payments — Coinbase CDP と共同デフォルト。Azure AI Foundry Agent Service は Privy をサポート対象のデフォルトとして掲載。
- **公開フットプリント。** 約 110M ウォレット、約 1,000+ の開発者統合(OpenSea、Hyperliquid、Farcaster、Friend.tech、Pump.fun、Story、Zora、主要な Stripe Connect マーチャントを含む)。
- **戦略的役割。** [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe five-layer collapse]] のレイヤー 4。Stripe が、Bridge USDB / Tempo レール上のウォレットとしても機能するユーザー ID 面を必要とする場面で、Privy が選ばれた基盤となる。

### Coinbase CDP

- **所有者。** Coinbase(NASDAQ: COIN)。
- **鍵カストディの基盤。** MPC 分散鍵管理に加え、ガスレス USDC 送金のために Base Paymaster と統合されたパッケージ化された ERC-4337 Smart ウォレット。
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

## ハイパースケーラーのデフォルトウォレット戦争最も影響の大きい 2026 のダイナミクスは、**ハイパースケーラーのエージェントプラットフォーム**が、マネージドのエージェントランタイム内でウォレットプロバイダーをデフォルトとして事前選定する方法である。これが 2023-2024の dApp 採用よりも重要である3つの理由:

1. **プロビジョニングは暗黙的であり、明示的ではない。** 開発者が [[fintech/usd-stablecoin-interchange|USDC]] 決済を受け取る必要のある AWS Bedrock エージェントを立ち上げると、AgentCore Payments モジュールが裏で Privy か CDP のウォレットをプロビジョニングする。開発者はウォレットベンダーの判断を一度も下していない。
2. **ハイパースケーラーが流通コストを吸収する。** 二次層の SDK は今や、開発者にデフォルトをオプトアウトするよう説得せねばならない — 単一の選ばれた SDK にオプトインするよう説得するよりも摩擦の高い販売である。
3. **デフォルト層のプロバイダーは構造的な複利を得る。** デフォルトでプロビジョニングされるすべてのウォレットが Privy または CDP のインストールベースに積み上がり、それが Azure / GCP や後続の任意のハイパースケーラー・エージェントプラットフォームにとって次のデフォルト候補としての魅力を高める。

2026 中盤のハイパースケーラー公開ドキュメントで見えるデフォルト配置:

| Cloud platform | Public agent / payment surface | Public docs が支える wallet-provider statement | Provider を「default」と呼ぶ前に必要な evidence |
|---|---|---|---|
| **AWS Bedrock AgentCore** | AgentCore payments は x402 orchestration、spending limit、payment connector を文書化 | current AWS docs は Coinbase CDP と Stripe Privy connector type を列挙し、payment feature の release stage を示す | exact region / stage、connector type、template、service terms、current API reference |
| **Azure AI Foundry** | Public agent platform と tool / identity integration | platform landing page だけでは embedded-wallet default を確立しない | provider と lifecycle support を明記した current Microsoft connector page / API |
| **Google Cloud agent platform** | agent tooling と Google-led AP2 material | AP2 participation / co-authorship は wallet default を確立しない | wallet connector と supported flow を明記した current Google product document |
| **Cloudflare developer platform** | Workers / Agents と payment-protocol integration を組み合わせられる | x402 support だけでは wallet を provision / select しない | client / server integration、signer ownership、supported scheme の current Cloudflare docs |

Sources: ^[https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/payments.html] ^[https://azure.microsoft.com/en-us/products/ai-foundry] ^[https://cloud.google.com/agent-builder] ^[https://docs.x402.org/]


## Stripe による Privy 所有 — 戦略的含意

Stripe は 2025年6月に Privy を買収した。公開報道では取引額を $300-500M のレンジとし、一部のソースはアーンアウト構造を含め最大 $1.1B と報じる。カテゴリの視点では、その帰結は:

- **最大の中立な埋込型ウォレットベンダーがもはや中立ではない。** 非 Stripe のマーチャントや Stripe の競合(Adyen、Block、PayPal)は今や「競合のウォレットスタックを使うか、自前で構築するか」の判断に直面する。
- **Privy は Stripe レール対応になる。** [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|five-layer collapse]] の内部で、Privy は構造的設計により Bridge(USDB ステーブルコイン)と Tempo(決済チェーン)にルーティングする。
- **AWS AgentCore のデフォルト配置が複利化する。** Stripe 寄りの AgentCore エージェントは Stripe 寄りのウォレットを継承し、それが Stripe 寄りのステーブルコインとチェーンを継承する。垂直スタックがあらゆる層で収益化される。
- **独占禁止の問いは未決のままである。** 2026, 中盤時点で、米国・英国・EU・日本のいずれの競争当局も Privy 買収に公に介入していないが、このパターンは歴史的な Apple / Google のデフォルト検索エンジン事案と並行する([[agent-economy/embedded-wallet-network-effects-moat|integrator moat]] の反論セクション参照)。

## 2024

以降の M&A 活動

| 日付 | 確認済みの corporate event | Primary evidence | 記載可能な terms |
|---|---|---|---|
| **2025-02-04** | Stripe が Bridge acquisition completion を発表 | Stripe newsroom | completion は公開済み。引用 announcement は purchase price を示さない |
| **2025-06-11** | Privy が Stripe による acquisition を発表 | Privy announcement | acquisition と intended continued product operation は公開済み。引用 announcement では terms 非開示 |

Sources: ^[https://stripe.com/newsroom/news/stripe-completes-bridge-acquisition] ^[https://privy.io/blog/announcing-our-acquisition-by-stripe]


蓋然性で重み付けされるが未確認:ハイパースケーラーが Stripe-Privy と Coinbase-CDP に対抗するため二次層のプロバイダーを買収する可能性がある。公開ドキュメントと公開 M&A 届出は、2026中盤時点でこれを示していない。

## 関連項目

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|エージェント経済 index]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded ウォレット overview]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy × AWS AgentCore default-ウォレット positioning]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/embedded-wallet-network-effects-moat|Embedded ウォレット integrator moat]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded ウォレット fintech disintermediation overview]]
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
