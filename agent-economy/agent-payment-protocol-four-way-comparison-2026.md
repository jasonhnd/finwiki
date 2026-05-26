---
title: Agent Payment Protocol 四者比較マトリクス 2026 · AP2 / x402 / Skyfire / Nevermined plus ERC-7715 + Lit PKP
aliases:
  - agent-payment-protocol-four-way-comparison-2026
  - agent payment protocol four-way comparison 2026
  - ap2 x402 skyfire nevermined comparison
  - agent payment rail comparison 2026
  - agent payment six-axis matrix
domain: agent-economy
created: 2026-05-25
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-25
confidence: likely
tags: [agent-economy, matrix, payment, ap2, x402, skyfire, nevermined, erc-7715, lit-protocol, pkp, comparison]
status: active
sources:
  - https://x402.org/
  - https://github.com/coinbase/x402
  - https://cloud.google.com/blog/products/ai-machine-learning/announcing-agent-payments-protocol-ap2
  - https://www.skyfire.xyz/
  - https://docs.skyfire.xyz/
  - https://nevermined.io/
  - https://docs.nevermined.io/
  - https://eips.ethereum.org/EIPS/eip-7715
  - https://litprotocol.com/
  - https://developer.litprotocol.com/
  - https://developers.cloudflare.com/
  - https://aws.amazon.com/bedrock/agentcore/
  - https://stripe.com/newsroom
  - https://usa.visa.com/visa-everywhere/innovation/agentic-commerce.html
  - https://fidoalliance.org/
---

# Agent Payment Protocol 四者比較マトリクス 2026 · AP2 / x402 / Skyfire / Nevermined plus ERC-7715 + Lit PKP

## TL;DR

- 2026 年中盤、agent 経済の決済プロトコル構図は「7プロトコル混戦」([[agent-economy/ai-agent-payment-protocols-overview|seven-protocol overview]])から 4 つの主軸 — **AP2**(Google + FIDO/AAIF 連盟)・**x402**(Coinbase + Cloudflare + AWS edge)・**Skyfire**(クローズドループ card-network issuer + Visa Trusted Agent)・**Nevermined**(compute / inference marketplace)に収束した
- 4 プロトコルは **transport / settlement asset / authorization / mainnet adoption / merchant target / regulatory model** の 6 軸で差別化されており、winner-takes-all の命題はない — 各々が異なるレイヤの課題を解決する(transport vs identity vs issuance vs metering)
- **補助層**:**ERC-7715** が wallet 側の `wallet_grantPermissions` scope セマンティクスを提供し、**Lit Protocol PKP** が threshold-cryptography による key custody を提供する。両者は独立した rail ではなく横断的な plug-in である
- 2026 mainnet の実需画像:**x402 月間 single-digit billion req**(Cloudflare + AWS facilitator GA)・**AP2 ~4 production pilots**(60+ consortium だが production は sparse)・**Skyfire Series A 後 ~$X00M annualized**(visa + card-network closed loop)・**Nevermined niche compute marketplace**
- ルート:[[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption 2026]](production readiness)・[[agent-economy/ai-agent-payment-protocols-commoditization|プロトコル commoditization と価値の上方移動]](long-term thesis)・本マトリクスは four-way feature comparison に専念

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy index]]. Read it against [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]] for the broader seven-protocol landscape, [[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption 2026]] for production-readiness deltas, and [[agent-economy/ai-agent-payment-protocols-commoditization|commoditization thesis]] for the value-capture trajectory. For protocol-specific deep dives see [[agent-economy/x402-http-payment-overview|x402 overview]] · [[agent-economy/x402-cloudflare-aws-edge-integration|x402 edge integration]] · [[agent-economy/ap2-overview|AP2 overview]] · [[agent-economy/ap2-adoption|AP2 adoption]] · [[agent-economy/ap2-technical-spec|AP2 technical spec]] · [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop issuer]] · [[agent-economy/nevermined-compute-payment-protocol|Nevermined compute payment protocol]] · [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]] · [[agent-economy/erc-7715-overview|ERC-7715 overview]] · [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]]. For wallet substrate see [[systems/erc-4337-overview|ERC-4337 overview]] · [[systems/erc-7702-overview|ERC-7702 overview]] · [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer for agents]]. For regulatory framing see [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic pilots]] and [[agent-economy/agent-legal-tax-liability-framework|agent legal-tax liability framework]].

## Why this matrix matters

Selecting an agent payment rail in 2026 is not "pick the best protocol" — it is "compose the layer cake correctly so the merchant accepts, the wallet authorizes, and the regulator does not block." Each of the four protocols answers a different question:

- **x402** answers "how does an HTTP request carry payment metadata at the API edge?"
- **AP2** answers "how does a merchant verify the agent really has user authorization with verifiable credentials?"
- **Skyfire** answers "how do we give an agent an actual fundable card-network identity so existing merchants without crypto integration still get paid?"
- **Nevermined** answers "how do compute / inference providers meter per-call usage and settle in stablecoin without per-customer accounts?"

Add **ERC-7715** (wallet permission scope) and **Lit PKP** (threshold key custody) as horizontal building blocks, and a production agent payment stack picks 2-4 of these to compose. This matrix exposes the six-axis comparison so teams choose the minimum-viable stack rather than over-engineering.

The bifurcation matters because 2026-Q4 will see the FIDO Alliance handover of AP2 to **AAIF** (Agentic AI Identity Federation), which could either commoditize AP2 (good for ecosystem) or fragment it further (bad for production teams) — see [[agent-economy/agent-protocol-mainnet-adoption-2026|mainnet adoption snapshot]] for the timeline.

## Per-protocol sections

### AP2 (Google + FIDO/AAIF)

**Transport**: HTTPS with W3C Verifiable Credentials. Three-step mandate chain (Intent → Cart → Payment) signed by user wallet, presented to merchant for verification. Not bound to HTTP status code — agents present VC at any RPC / GraphQL / REST endpoint that supports AP2 mandate verification.

**Settlement asset**: Asset-agnostic. Settlement rail can be Google Pay, card networks (Mastercard / Amex pilot), USDC on Base (via Coinbase Pay), or bank instant rails (FedNow / RTP). The VC chain proves authorization; settlement happens via whatever rail the merchant prefers.

**Authorization model**: **OAuth-like** — user pre-grants a mandate VC with scope (merchant categories, spend cap, time window) signed by their wallet's authentication key. Merchant verifies VC chain before honoring transaction. Combines well with [[agent-economy/erc-7715-overview|ERC-7715]] for wallet-side scope enforcement.

**Q1-Q2 2026 mainnet adoption**: 60+ consortium partners (Coinbase, MetaMask, Salesforce, Amex, etc.) but ~4 disclosed production pilots (Mastercard agentic commerce, Salesforce Commerce). FIDO Alliance handover announced 2026-Q2, rename to **AAIF**. Apple and Microsoft joined post-handover. Production sparse — most "AP2-enabled" partners are spec-compliant in test environments, not transacting volume.

**Target merchant**: Web2 enterprise SaaS (CRM / ERP / commerce platforms), card-network-integrated retailers, financial institutions that need audit-grade authorization trail. Not primarily DeFi.

**Regulatory model**: **Open-loop friendly** — designed to plug into existing payment networks (card / bank / stablecoin). Merchant existing PCI / KYC / AML obligations unchanged. AAIF handover positions it as a WebAuthn-equivalent open standard.

### x402 (Coinbase + Cloudflare + AWS)

**Transport**: HTTP-native. Uses HTTP status code **402 Payment Required** (defined in RFC 7231 since 1996 but unused for ~30 years) plus `X-Payment-Required` (server → client) and `X-Payment` (client → server) headers. The pattern composes with existing edge middleware, API gateways, and reverse proxies without new wire formats.

**Settlement asset**: **USDC stablecoin** by default (USDC on Base = default; Solana USDC, Ethereum L1, other L2s supported). Facilitator (Coinbase / Cloudflare / community facilitators) validates the `X-Payment` proof on-chain. Asset is structurally tied to public chain stablecoins — fiat / card not supported natively.

**Authorization model**: **Delegated key** — agent uses a session key tied to the user wallet (often via [[agent-economy/erc-7715-overview|ERC-7715]] permission scope on an [[systems/erc-4337-overview|ERC-4337]] SCW or [[systems/erc-7702-overview|ERC-7702]] delegated EOA). No per-request user approval needed; spend cap enforced at wallet layer.

**Q1-Q2 2026 mainnet adoption**: **Cloudflare Workers x402 GA in production tier (2026-Q1)** + **AWS API Gateway + Bedrock AgentCore GA (2026-Q2)**. Vercel AI SDK ships first-party x402 client. Anthropic Claude Code + OpenAI Agents SDK have community-maintained wrappers. **Single-digit billion requests/month** inferred from dev-talk disclosures — the highest verified production volume of the four protocols. x402 Bazaar MCP indexes 10,000+ paid endpoints.

**Target merchant**: **AI compute / API providers**(model APIs, scraping APIs, vector DBs, RAG services)· DeFi-native services · any HTTP API that wants per-call micropayment. Not card-network merchants.

**Regulatory model**: **Open-loop crypto** — facilitator (Coinbase, Cloudflare) is not a regulated payment processor in most jurisdictions, just a stablecoin settlement verifier. EU MiCA stablecoin classification applies to USDC issuer (Circle), not to facilitator. US GENIUS Act 2026 final rules expected to clarify facilitator status.

### Skyfire (Visa + closed-loop card-network issuer)

**Transport**: **Card-rail API** (similar to Stripe Issuing / Marqeta). Agent calls Skyfire's REST API with agent identity + merchant URL + amount; Skyfire issues a virtual card auth, runs OFAC / merchant-category / spend-cap checks, returns approved transaction. The card itself rides Visa rails to the merchant.

**Settlement asset**: **Fiat virtual card** (USD primarily, multi-currency via Visa rails). Funded by user pre-paid balance, corporate ACH topup, or — in pilot — USDC bridged to USD via on-ramp. The merchant sees a normal Visa card transaction in their existing PCI-DSS payment processor, no crypto integration needed.

**Authorization model**: **Card issuance** — Skyfire mints an agent identity, binds it to a virtual card, enforces spend caps + merchant categories + time windows in its own ledger. User authorizes via Skyfire's web UX (similar to issuing a delegate card on an Amex). Visa Trusted Agent Protocol alignment provides cryptographic agent attestation at authorization time.

**Q1-Q2 2026 mainnet adoption**: Series A funded 2024-2025. Visa partnership active. Stripe / Visa virtual card integration live. **Production transaction volume in the low-tens-of-millions USD annualized** (inferred from press; not officially disclosed). Far below x402 request count but **dollar volume per transaction is materially higher** because each Skyfire transaction targets human-economy merchants (SaaS subscriptions, travel, marketplaces).

**Target merchant**: **Any Visa-accepting merchant** — by design, the merchant does not need to know it is an agent transaction. This is the explicit go-to-market wedge: agents shop at merchants that never integrated crypto. Pilots include AI agent travel booking, SaaS procurement, B2B supply.

**Regulatory model**: **Closed-loop card issuance** — Skyfire (or its BIN sponsor bank) is the regulated entity. KYC of the agent owner, AML monitoring of transactions, OFAC screening, PCI compliance for card data. The agent operates under bank-sponsored card-issuing program licensure. EU PSD2 / US OCC framework already covers the rail.

### Nevermined (compute / inference marketplace)

**Transport**: **Smart-contract escrow + token-gated API**. Compute provider exposes a model / GPU / dataset endpoint behind a Nevermined-issued NFT or subscription token. Agent consumer holds the access token; calls the endpoint; provider validates token; settles per-call via smart-contract escrow release.

**Settlement asset**: **Stablecoin compute credit** (USDC on Polygon / Base / other EVM by default; Nevermined credit token as wrapper). Per-inference, per-dataset-byte, or subscription-tier metering. Can integrate with x402 as the HTTP-layer settlement option when agents pay per single inference.

**Authorization model**: **Token-gated access + escrow** — agent purchases access via subscription or per-use payment, receives token (NFT or ERC-20), endpoint validates token presence + scope. Funds held in escrow until provider delivers (or refunded via dispute). Different security model from x402's instant settlement.

**Q1-Q2 2026 mainnet adoption**: Niche but **active in AI compute marketplace** segment — providers exposing fine-tuned models, GPU rental, custom datasets. Lower mainnet volume than x402 but **higher per-transaction value** (compute jobs are $0.10-$10 vs x402's sub-cent calls). Integration with [[agent-economy/x402-http-payment-overview|x402]] as one settlement option lets Nevermined fit inside x402's HTTP rail for fast settlement of small jobs while keeping escrow + dispute logic for large jobs.

**Target merchant**: **AI compute providers** specifically — model inference endpoints, GPU rental, dataset access, agent-to-agent compute markets ([[agent-economy/skill-market-monetization|skill market monetization]]). Not general-purpose merchants.

**Regulatory model**: **Crypto-native marketplace** — operates as a smart-contract platform, not as a regulated payment processor. Provider / consumer relationship is governed by smart contract; disputes via DAO arbitration. KYC depends on compute provider's own program (e.g. if provider is a US enterprise, OFAC applies).

### ERC-7715 (subscription / permission scope, supplementary)

**What it is**: Wallet RPC method `wallet_grantPermissions` that lets a user pre-grant an agent scoped spending permission with **type** (e.g. `erc20-token-transfer`), **amount cap**, **period** (e.g. $50/day), and **allowed targets** (merchant address allowlist or domain pattern).

**Mainnet status (2026-Q2)**: Live in **MetaMask** (mobile + Snaps), **Coinbase Smart Wallet** (Base mainnet), **Safe** (v1.4+ module). Not yet in Rabby / Phantom / Trust Wallet. Cross-wallet portability gap remains — permission schemas diverge.

**Role in stack**: **Horizontal plug-in** under x402 or AP2. The user grants scope once via ERC-7715; the agent then uses that scope across many x402 calls or AP2 mandates without re-prompting. See [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]] for the compose pattern.

### Lit Protocol PKP (threshold key custody, supplementary)

**What it is**: **Programmable Key Pair** — a wallet whose private key is split across Lit Protocol's threshold network (no single node ever sees the full key). Signing is gated by **Lit Actions** (JavaScript code) running inside secure enclaves; the code can check rate limits, scope, multi-factor, or arbitrary policy before authorizing signature.

**Mainnet status (2026-Q2)**: Live on Lit mainnet for years; mature production use in [[agent-economy/lit-protocol-pkp-agent-keys|agent key custody]] scenarios. Especially used where the agent must hold its own key (autonomous agents on long-running tasks) but the user wants policy enforcement without trusting a single custodian like Privy / Magic.

**Role in stack**: **Horizontal plug-in** alternative to Privy / Magic / Coinbase CDP for the **key custody** layer. Above PKP sits ERC-7715 (scope), x402 / AP2 (transport), and stablecoin (settlement).

## Big comparison matrix table

**Six-axis comparison across four primary protocols + two supplementary layers** (2026-Q2 status):

| 観点 | **AP2 (Google → AAIF)** | **x402 (Coinbase / CF / AWS)** | **Skyfire (Visa closed-loop)** | **Nevermined (compute mp)** | **ERC-7715 (supp.)** | **Lit PKP (supp.)** |
|---|---|---|---|---|---|---|
| **Transport** | HTTPS + W3C Verifiable Credential mandate chain | HTTP 402 + `X-Payment` headers | Card-rail REST API (Visa) | Smart-contract escrow + token-gated endpoint | Wallet RPC `wallet_grantPermissions` | Lit-network threshold sign + Lit Actions JS |
| **Settlement asset** | Asset-agnostic (Google Pay / card / USDC / bank rails) | **USDC stablecoin** on Base / Solana / EVM L2 | **Fiat virtual card** (USD primarily; USDC topup possible) | **Stablecoin compute credit** (USDC / Nevermined credit) | n/a (gates other rails) | n/a (signs any chain) |
| **Authorization model** | OAuth-like VC mandate (Intent → Cart → Payment) | Delegated session key (ERC-7715 / 4337 / 7702) | Card issuance + bank-sponsored BIN | Token-gated escrow (NFT or ERC-20 access token) | Wallet pre-grant scope w/ cap + period + targets | Threshold MPC + runtime policy in Lit Action |
| **Q1-Q2 2026 mainnet** | 60+ consortium · ~4 production pilots · AAIF handover 2026-Q2 | **Cloudflare GA Q1 + AWS GA Q2 · single-digit B req/mo · Vercel SDK · 10k+ Bazaar endpoints** | Series A · Visa partnership live · low-tens-M USD annualized | Niche AI compute marketplace · integrates x402 for inst. settlement | MetaMask + Coinbase Smart Wallet + Safe live · portability gap | Mature mainnet · production key custody for autonomous agents |
| **Target merchant** | Web2 enterprise SaaS · card-network retailers · financial institutions | AI compute / API providers · DeFi-native · per-call HTTP services | **Any Visa-accepting merchant** (merchant unaware of agent identity) | AI compute providers · model inference · GPU rental · dataset access | (any) — wallet scope layer | (any) — key custody layer |
| **Regulatory model** | **Open-loop interop** — pluggable settlement, AAIF as standard | **Open-loop crypto** — facilitator unregulated in most jdx · MiCA on issuer · GENIUS Act pending | **Closed-loop card issuance** — bank-sponsored BIN · KYC / AML / PCI all in scope | **Crypto-native marketplace** — smart-contract platform · DAO dispute | (none — wallet feature) | (none — key custody) |

**マトリクスの読み方**:
- 横にひとつのプロトコルの 6 軸プロフィールを見る · 縦に同じ軸での 4 プロトコルの差別化を見る
- AP2 vs x402 は settlement asset で最も分岐する — AP2 は multi rail · x402 は single rail(USDC) · これが merchant adoption 曲線の違いを決定する(AP2 は遅いが広い · x402 は速いが狭い)
- Skyfire は唯一の closed-loop · merchant に crypto / agent 統合を一切要求しない · ゆえに「今すぐ、任意のマーチャント」が可能 · ただし KYC + bank sponsorship のコストは高い
- Nevermined は vertical(compute marketplace) · 汎用 rail ではない · 市場容量は小さいが単発金額は高い
- ERC-7715 + Lit PKP は rail ではなく · 上記 4 rail に wallet substrate を提供する · 実装上ほぼすべての production stack がいずれかを使う

## Composition patterns observed in production

**Pattern A — "AI-native API marketplace"**:
- ERC-7715 (scope) + ERC-7702 / 4337 wallet + x402 transport + USDC on Base
- 2026 年に agent-payment を出荷したスタートアップの ~70%([[agent-economy/agent-protocol-mainnet-adoption-2026|mainnet adoption snapshot]] 参照)
- 主な実装:Vercel AI SDK + Cloudflare Workers + AWS Bedrock AgentCore stacks

**Pattern B — "Enterprise commerce agent"**:
- AP2 mandate VC + ERC-7715 (scope) + card or USDC settlement
- ~20%、エンタープライズ pilot(Mastercard / Salesforce / Amex)
- 強み:マーチャント側に既に PCI / KYC フローがある · agent は VC を提示するだけでよい

**Pattern C — "Skyfire-issued agent card"**:
- Skyfire identity + virtual card + bank-sponsored BIN
- トランザクション件数では小さい割合だが **取引あたりの金額が最も高い**
- 主な実装:任意の Visa merchant · agent は相手側の統合を必要としない

**Pattern D — "Compute marketplace"**:
- Nevermined escrow + access token + (optional x402 inner settlement)
- ニッチだが成長中 — AI compute プロバイダがファインチューンモデルをマネタイズ
- 重なるシナリオ:agent が fine-tuned model を呼び出すのは Nevermined · その model が上流 API を呼び出すのは x402

**Pattern E — "Autonomous agent with policy-bound key"**:
- Lit PKP (custody + runtime policy) + ERC-7715 (scope) + x402 (transport)
- 長時間自律稼働する agent に適する · ユーザーが不在でも phish で key を奪われない
- Privy / Magic / Coinbase CDP の中央集権 custody が受け入れられない場合(adversarial / cross-jurisdictional / open-source agent)

## Boundary cases / future trajectory

**AP2 vs x402 convergence path**:
- 短期(2026-2027):AP2 の mandate VC は x402 `X-Payment` ヘッダの inner attestation として機能し得る — これによりマーチャントは「agent に授権がある」(AP2) + 「USDC が決済済み」(x402)の二重保証を同時に得る。OpenAI の SDK ヘッジが賭けているのはこの収斂路である([[agent-economy/agent-protocol-mainnet-adoption-2026|mainnet adoption]] 参照)
- 長期(2028+):AAIF 標準化後、x402 facilitator が AAIF 検証を内蔵し得る — AP2 vs x402 はもはや「どちらを選ぶ」ではなく「両方使う」になる

**Skyfire クローズドループ vs オープンループの緊張**:
- クローズドループの強み:今日から使える · グローバル 60M+ Visa マーチャントが受け入れる · KYC / AML フレームワークが成熟
- クローズドループの弱み:Skyfire は単一 issuer · 取引ごとに Visa interchange ~1.5-2.5% · 長期的に x402 のニアゼロ fee と比べて非対称
- 実際の戦略:Skyfire 自身も USDC を backing asset として評価中 · 将来は「Skyfire issuance + USDC settlement」もあり得る([[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]] 参照)

**Nevermined と x402 の食う/食われる関係**:
- x402 が transport 層を標準化した後 · Nevermined の「per-call HTTP 課金」ユースケースは x402 に直接置き換えられる
- しかし Nevermined の「escrow + dispute + 大口 compute job」ユースケース(単発 $1+ · SLA 保証が必要)は x402 では代替不可 · x402 はデフォルト fire-and-forget で dispute 機構がないため
- 長期的分業:**x402 は < $0.10 の fast settlement** · **Nevermined は $0.10+ の大口 + SLA**

**ERC-7715 portability gap の解消パス**:
- 2026-Q3 提案中の permission-type registry が鍵 · スキーマを統一できなければ · agent は「MetaMask-agents vs Coinbase-agents vs Safe-agents」に断片化を強いられる
- Lit PKP は別ルートを提供する:permission policy を Lit Action JavaScript として記述する · wallet-agnostic · ただし throughput が代償(Lit network MPC sign はローカル sign より 100-500ms 遅い)

**FIDO Alliance / AAIF のコンプライアンス化**:
- AAIF が 18-24 ヶ月の ratification track(WebAuthn の歴史に類似)を完走すれば · 2027-Q4 標準化の可能性
- それまでのウィンドウは「Google + 60 partners 寡頭連盟」vs「x402 + Cloudflare/AWS edge dominance」の市場拮抗
- 真のリスク:AAIF が stall する(WebAuthn 2014-2016 のように) · その間に x402 + ERC-7715 が事実上の標準化を完成させ · ロックインを形成する

**Lit PKP と institutional adoption**:
- 機関(銀行 / 資産運用)は HSM / SOC2 custody を選好 · Lit PKP の「code-defined policy」は SOC2 audit で説明しにくい
- ただし規制要件(MiCA の第三者託管)が multi-party custody を後押し · Lit PKP の threshold + transparent code モデルはむしろ復審で優位を得る — 2027-2028 で逆転の可能性

**Visa Trusted Agent Protocol と Skyfire**:
- Visa が 2025-2026 に Trusted Agent Protocol(VTAP)を発表 — agent に cryptographic identity attestation を付与し · merchant が authorization 時に検証
- Skyfire は VTAP の早期 issuer · Visa と深く結合
- ただし VTAP 自体はオープンスタンダード · つまり Stripe Issuing / Marqeta / Adyen Issuing 等の競合も issuer になり得る · Skyfire の先行優位は 18-24 ヶ月以内に希薄化する可能性

**Regulatory wildcard — 2026-Q3 GENIUS Act**:
- 米国 GENIUS Act の stablecoin 最終ルールは 2026-Q3 着地予定 · 「stablecoin facilitator」(x402 における Coinbase の役割等)が money transmitter とみなされるかを明確化する
- facilitator が money transmitter に分類されれば · x402 の米国市場 cost structure は激変 — facilitator は 50 州 MTL ライセンスが必要になる
- AP2 は settlement rail-agnostic ゆえ影響が比較的小さい · Skyfire は既に bank-sponsored BIN 経由ゆえ影響が最小

**MCP layer との関係**:
- Anthropic MCP は tool-invocation 層であり · payment 層ではない · ただし MCP は任意の payment protocol を tool としてラップ可能
- 実プロダクション:**MCP tool が x402 client をラップ** が Claude Code / agent SDK 統合で最も一般的なパターン
- これは Anthropic が AP2 vs x402 のいずれかを first-party 統合する必要がないことを意味する — MCP が abstraction layer として 4 プロトコルすべてに互換

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|AI agent payment seven layers]]
- [[agent-economy/ai-agent-payment-protocols-commoditization|payment protocol commoditization]]
- [[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption 2026]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 Cloudflare / AWS edge integration]]
- [[agent-economy/ap2-overview|AP2 overview]]
- [[agent-economy/ap2-adoption|AP2 adoption]]
- [[agent-economy/ap2-technical-spec|AP2 technical spec]]
- [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop issuer]]
- [[agent-economy/nevermined-compute-payment-protocol|Nevermined compute payment protocol]]
- [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]]
- [[agent-economy/erc-7715-overview|ERC-7715 overview]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]]
- [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer for agents]]
- [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 EOA delegation primer]]
- [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic pilots]]
- [[agent-economy/agent-legal-tax-liability-framework|agent legal-tax liability]]
- [[agent-economy/skill-market-monetization|skill market monetization]]
- [[agent-economy/claude-code-extension-architecture|Claude Code extension architecture]]
- [[systems/erc-4337-overview|ERC-4337 overview]]
- [[systems/erc-7702-overview|ERC-7702 overview]]
- [[payments/INDEX|payments index]]
<!-- /wiki-links:managed -->

## Sources

- x402 protocol spec · https://x402.org/
- Coinbase x402 GitHub · https://github.com/coinbase/x402
- Google AP2 launch press · https://cloud.google.com/blog/products/ai-machine-learning/announcing-agent-payments-protocol-ap2
- Skyfire website · https://www.skyfire.xyz/
- Skyfire docs · https://docs.skyfire.xyz/
- Nevermined website · https://nevermined.io/
- Nevermined docs · https://docs.nevermined.io/
- ERC-7715 EIP draft · https://eips.ethereum.org/EIPS/eip-7715
- Lit Protocol website · https://litprotocol.com/
- Lit Protocol developer docs · https://developer.litprotocol.com/
- Cloudflare developer docs (x402 in Workers) · https://developers.cloudflare.com/
- AWS Bedrock AgentCore · https://aws.amazon.com/bedrock/agentcore/
- Stripe newsroom (Issuing + agent products) · https://stripe.com/newsroom
- Visa agentic commerce page · https://usa.visa.com/visa-everywhere/innovation/agentic-commerce.html
- FIDO Alliance · https://fidoalliance.org/
