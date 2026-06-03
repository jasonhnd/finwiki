---
source: agent-economy/2026-04-08_agent-payment-infrastructure-research
source_hash: d0e891a76a2dd092
lang: ja
status: machine
fidelity: ok
title: "Agent 決済インフラ調査レポート"
translated_at: 2026-06-02T11:47:37.252Z
---

# Agent 決済インフラ調査レポート


## ウィキ上の位置づけ

本エントリは [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]] の配下に位置する。同位・対照の文脈としては [[agent-economy/skill-market-monetization|Skill マーケット有料化]] と、より広いシステム・規制境界としては [[payments/INDEX|payments index]] と併せて読むこと。

> [!info] 要約
> 公開ソースに基づくプロトコルのスナップショット | 2026-04-08

## 一、プロトコル標準の構図

現在の Agent 決済領域は既に **4 大プロトコル並立** の構図を形成している:

1. **ACP (Agentic Commerce Protocol)** — Stripe と OpenAI が共同開発、Apache 2.0 オープンソース。中核イノベーションは Shared Payment Token (SPT) で、ChatGPT 等のアプリがユーザーの決済資格情報を露出せずに取引を開始できる。既に ChatGPT で Instant Checkout がローンチされ、Etsy 出店者と数百万の Shopify マーチャントをサポート。現在は Beta 段階。([出典](https://stripe.com/blog/developing-an-open-standard-for-agentic-commerce))

2. **x402 プロトコル** — Coinbase 主導、2026 年 4 月に Linux Foundation 内で x402 Foundation を設立。HTTP 402 ステータスコードをネイティブ決済層として復活させ、AI Agent が USDC ステーブルコインで HTTP リクエスト内で直接決済する。Base と Solana でローンチ済み、Cloudflare Agent SDK が統合済み。ただし実際の日次取引量は約 $28,000 にとどまり、大半がテスト取引である。([出典](https://www.x402.org/))

3. **AP2 (Agent Payments Protocol)** — Google が発起、60+ の提携先には Adyen、American Express、Mastercard、PayPal、Coinbase 等が含まれる。決済手段非依存に設計(クレジットカード、銀行送金、暗号通貨をサポート)。既に A2A x402 Extension をリリースしオンチェーン暗号決済をサポート。([出典](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol))

4. **MPP (Machine Payments Protocol)** — Stripe と Tempo が共同開発、2026 年 3 月にローンチ、既に 50+ のサービスで実装(OpenAI、Anthropic、Google Gemini を含む)。プリペイド Tab モデルを採用:Agent が資金をエスクローコントラクトに事前デポジットし、セッション開始後 Voucher 経由で逐次控除する。高頻度マイクロトランザクションに適する。([出典](https://getblock.io/blog/what-is-a-machine-payments-protocol-mpp/))

## 二、主要プレイヤー

| プレイヤー | プロダクト | 状況 | 特徴 |
|------|------|------|------|
| **Coinbase** | Agentic Wallets + x402 | ローンチ済(2026.2) | 50M+ の取引量、Base L2 優先、USDC/ETH/BTC をサポート |
| **Crossmint** | Embedded Agent Wallets | ローンチ済 | デュアル鍵モデル(TEE)、ステーブルコインとバーチャル Visa/MC カードの両方をサポート、10 億+ の商品をカバー |
| **Skyfire** | KYAPay | ローンチ済 | 法定通貨と USDC チャージをサポート、Agent 信用層を構築 |
| **Nevermined** | Agent 決済インフラ | ローンチ済 | メータリング、課金、カードエージェントを内蔵、x402 と統合 |
| **Human.tech** | Agentic WaaP | 2026 リリース | Wallet as a Protocol、暗号学で人間の監督を強制 |
| **Circle** | Gateway + CCTP + x402 | ローンチ済 | USDC は 30 チェーンをカバー、CCTP は 19 チェーンを接続、$1260 億の総処理量 |

## 三、ID と信頼レイヤー

- **ERC-8004**:Ethereum AI Agent ID 標準。ID 登録 · 信用登録 · 検証登録の 3 大モジュールを含む。BNB Chain は既にメインネットにデプロイ済み。([出典](https://eips.ethereum.org/EIPS/eip-8004))
- **KYA (Know Your Agent)**:KYC に類比される Agent 検証フレームワーク。Mastercard は 2026 年 3 月にオーストラリアで初の Agent 決済を完了し、Verifiable Intent で改竄防止監査チェーンを生成。Sumsub 等の検証プラットフォームも追随。EU AI Act の高リスク条項が 2026 年 8 月に発効し、実質的に KYA 能力を要求する。([出典](https://sumsub.com/blog/know-your-agent/))
- **ERC-4337 + EIP-7702**:アカウント抽象化が Agent ウォレットに基盤機能を提供 — Session Key、委任支出、Guardian メカニズム。既に 4000 万+ のスマートアカウントがデプロイ済み。

## 四、市場データ

- 2025 年に AI Agent が **1.4 億件の決済** を完了、平均値はわずか $0.31/件 ([出典](https://nevermined.ai/blog/ai-agent-payment-statistics))
- ステーブルコインの 2025 年取引量は [[fintech/usd-stablecoin-interchange|**$33 兆**]] に到達、Agent 決済の 98.6% が USDC で決済された
- AI Agent 市場は 2025 年 $78.4 億 → 2030 年 $526.2 億(CAGR 46.3%)と予測される
- a16z の予測:価格設定は「席数ベース」から「成果ベース」へ転換し、暗号マイクロペイメントが [[agent-economy/skill-market-monetization|Agent 間リアルタイム決済ツール]] となる ([出典](https://a16z.com/newsletter/big-ideas-2026-part-2/))

## 五、Agent 決済プロジェクトへの示唆

1. **タイミングウィンドウは存在するが縮小中**:4 大プロトコルは既に確立され、Crossmint/Skyfire 等が先手を取っているが、日次アクティブ取引量は極めて低い(x402 はわずか $28K/日)ことが市場がまだ初期段階にあることを示している。
2. **差別化の方向**:既存の解決策の多くは crypto-native シナリオに集中している。[[fintech/ai-payment-two-tracks|法定通貨 - ステーブルコインのブリッジ]]、コンプラ KYA 統合、中国/アジア市場の決済手段(Alipay/WeChat → ステーブルコイン)は依然として空白である。
3. **プロトコル互換であり再発明ではない**:x402/ACP/AP2/MPP をサポートし、自前で打ち立てるのではなく、その上に付加価値層を構築すべきである。
4. **マイクロトランザクションの経済性**:Agent 決済の平均値は $0.31 で、極めて低い手数料を要求する。Base/Solana の sub-cent fee は既に要件を満たすが、鍵は決済効率とバッチ処理にある。
5. **ID + 決済の抱き合わせ**:ERC-8004 + KYA がコンプラのボトムラインとなりつつあり、決済ソリューションが ID 層を内蔵すれば規制上の優位を持つ。

---

出典:
- [Google AP2](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol)
- [A2A x402 Extension](https://github.com/google-agentic-commerce/a2a-x402)
- [Stripe ACP](https://stripe.com/blog/developing-an-open-standard-for-agentic-commerce)
- [x402 Foundation](https://www.x402.org/)
- [Coinbase Agentic Wallets](https://www.coinbase.com/developer-platform/discover/launches/agentic-wallets)
- [Crossmint Agent Payments](https://www.crossmint.com/solutions/agentic-payments)
- [Skyfire KYAPay](https://skyfire.xyz/product/)
- [Nevermined](https://nevermined.ai/)
- [Circle Gateway x402](https://www.circle.com/blog/building-the-internet-financial-system-circles-product-vision-for-2026)
- [ERC-8004](https://eips.ethereum.org/EIPS/eip-8004)
- [KYA Framework](https://sumsub.com/blog/know-your-agent/)
- [MPP by Stripe & Tempo](https://getblock.io/blog/what-is-a-machine-payments-protocol-mpp/)
- [AI Agent Payment Stats](https://nevermined.ai/blog/ai-agent-payment-statistics)
- [a16z Big Ideas 2026](https://a16z.com/newsletter/big-ideas-2026-part-2/)
- [Agentic Protocol Landscape](https://www.tryellmo.ai/blog/agentic-commerce-protocol-landscape-2025-2026)
- [CoinDesk x402 Adoption](https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet)

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/agent-actorship-debate|Agent 主体性論争:4つの陣営]]
- [[agent-economy/claude-code-extension-architecture|Claude Code 拡張コンポーネントアーキテクチャ — Agent エコシステムのインフラ階層]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造(JPYC・USDC・Project Pax)]]
- [[fintech/ai-payment-two-tracks|AI 産業の二つの決済軌道:Stripe モデル vs ステーブルコインモデル]]
<!-- /wiki-links:managed -->
