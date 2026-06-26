---
source: agent-economy/agent-payment-protocol-four-way-comparison-2026
source_hash: 48a01f3fdc6893ba
lang: ja
status: machine
fidelity: ok
title: "エージェント決済 Protocol 四者比較マトリクス 2026 · AP2 / x402 / Skyfire / Nevermined plus ERC-7715 + Lit PKP"
translated_at: 2026-06-02T11:47:37.299Z
---

# エージェント決済 Protocol 四者比較マトリクス 2026 · AP2 / x402 / Skyfire / Nevermined plus ERC-7715 + Lit PKP

## 要約

- 2026 年中盤、エージェント経済の決済プロトコル構図は「7プロトコル混戦」([[agent-economy/ai-agent-payment-protocols-overview|seven-protocol overview]])から 4 つの主軸 — **AP2**(Google + FIDO/AAIF 連盟)・**x402**(Coinbase + Cloudflare + AWS edge)・**Skyfire**(クローズドループ card-network 発行会社 + Visa Trusted Agent)・**Nevermined**(compute / inference marketplace)に収束した
- 4 プロトコルは **transport / 決済 asset / authorization / mainnet adoption / 加盟店 target / 規制モデル** の 6 軸で差別化されており、winner-takes-all の命題はない — 各々が異なるレイヤの課題を解決する(transport vs identity vs issuance vs metering)
- **補助層**:**ERC-7715** が ウォレット側の `wallet_grantPermissions` scope セマンティクスを提供し、**Lit Protocol PKP** が threshold-cryptography による key カストディ を提供する。両者は独立した rail ではなく横断的な plug-in である
- 2026 mainnet の実需画像:**x402 月間 single-digit billion req**(Cloudflare + AWS facilitator GA)・**AP2 ~4 production pilots**(60+ consortium だが production は sparse)・**Skyfire Series A 後 ~$X00M annualized**(visa + card-network closed loop)・**Nevermined niche compute marketplace**
- ルート:[[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption 2026]](production readiness)・[[agent-economy/ai-agent-payment-protocols-commoditization|プロトコル commoditization と価値の上方移動]](long-term thesis)・本マトリクスは four-way feature comparison に専念

## ウィキ上の位置づけ

この項目は [[agent-economy/INDEX|agent-economy index]] の下に位置する。より広範な七つのプロトコルのランドスケープについては [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]] と、production readiness の差分については [[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption 2026]] と、value-capture の軌道については [[agent-economy/ai-agent-payment-protocols-commoditization|commoditization thesis]] と対照して参照のこと。プロトコル固有の詳細な掘り下げについては [[agent-economy/x402-http-payment-overview|x402 overview]] · [[agent-economy/x402-cloudflare-aws-edge-integration|x402 edge integration]] · [[agent-economy/ap2-overview|AP2 overview]] · [[agent-economy/ap2-adoption|AP2 adoption]] · [[agent-economy/ap2-technical-spec|AP2 technical spec]] · [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop 発行会社]] · [[agent-economy/nevermined-compute-payment-protocol|Nevermined compute payment protocol]] · [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]] · [[agent-economy/erc-7715-overview|ERC-7715 overview]] · [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 エージェント決済 stack]] を参照。ウォレット substrate については [[systems/erc-4337-overview|ERC-4337 overview]] · [[systems/erc-7702-overview|ERC-7702 overview]] · [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer for agents]] を参照。規制上の枠組みについては [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic pilots]] および [[agent-economy/agent-legal-tax-liability-framework|agent legal-tax liability framework]] を参照。

## なぜこのマトリクスが重要か

2026 に エージェント決済 rail を選定することは「最良のプロトコルを選ぶ」ことではない ── それは「マーチャントが受け入れ、ウォレット が授権し、規制当局がブロックしないようにレイヤーケーキを正しく構成する」ことである。四つのプロトコルのそれぞれが異なる問いに答える:

- **x402** は「API edge で HTTP リクエストはどのように決済メタデータを運ぶのか」に答える
- **AP2** は「マーチャントはどのように agent が verifiable credentials によってユーザーの授権を実際に持つことを検証するのか」に答える
- **Skyfire** は「crypto 統合のない既存のマーチャントが依然として支払いを受けられるよう、agent に実際に資金供給可能な card-network identity をどのように与えるのか」に答える
- **Nevermined** は「compute / inference プロバイダはどのように顧客ごとのアカウントなしに per-call の使用量を計測し stablecoin で決済するのか」に答える

横断的なビルディングブロックとして **ERC-7715**(ウォレット permission scope)と **Lit PKP**(threshold key カストディ)を加えると、production の エージェント決済スタックは構成するためにこれらの 2-4 を選ぶ。このマトリクスは六軸の比較を露わにし、チームが過剰設計するのではなく minimum-viable なスタックを選べるようにする。

この分岐が重要なのは、2026-Q4 に FIDO Alliance による AP2 の **AAIF**(Agentic AI Identity Federation)への引き渡しが起こるからである。これは AP2 をコモディティ化する(経済圏にとって良い)か、さらに断片化させる(production チームにとって悪い)かのいずれかになりうる ── タイムラインについては [[agent-economy/agent-protocol-mainnet-adoption-2026|mainnet adoption snapshot]] を参照。

## プロトコル別のセクション

### AP2 (Google + FIDO/AAIF)

**Transport**:W3C Verifiable Credentials を伴う HTTPS。ユーザーの ウォレット によって署名され、検証のためマーチャントに提示される三段階のマンデートチェーン(Intent → Cart → Payment)。HTTP ステータスコードに束縛されない ── agent は AP2 マンデート検証をサポートする任意の RPC / GraphQL / REST エンドポイントで VC を提示する。

**決済 asset**:アセット非依存。決済 rail は Google Pay、card networks(Mastercard / Amex のパイロット)、Base 上の USDC(Coinbase Pay 経由)、または銀行の即時 rail(FedNow / RTP)になりうる。VC チェーンが授権を証明する;決済はマーチャントが好む rail を通じて行われる。

**認可モデル**:**OAuth ライク** ── ユーザーが自身の ウォレット の認証鍵で署名されたスコープ(加盟店 categories、spend cap、time window)を持つマンデート VC を事前付与する。マーチャントは取引を実行する前に VC チェーンを検証する。ウォレット側のスコープ強制について [[agent-economy/erc-7715-overview|ERC-7715]] とよく組み合わさる。

**Q1-Q2 2026 mainnet adoption**:60+ のコンソーシアムパートナー(Coinbase、MetaMask、Salesforce、Amex など)だが ~4 の開示された production pilots(Mastercard agentic commerce、Salesforce Commerce)。FIDO Alliance の引き渡しが発表され、2026-Q2, に **AAIF** へ改称。Apple と Microsoft は引き渡し後に参加。Production は sparse ── 大半の「AP2-enabled」パートナーはテスト環境で spec 準拠であり、ボリュームを取引してはいない。

**Target 加盟店**:Web2 のエンタープライズ SaaS(CRM / ERP / commerce platforms)、card-network 統合の小売業者、audit-grade な授権の trail を必要とする金融機関。主に DeFi ではない。

**規制モデル**:**Open-loop フレンドリー** ── 既存の決済ネットワーク(card / bank / stablecoin)に差し込むよう設計されている。マーチャントの既存の PCI / KYC / AML 義務は変わらない。AAIF の引き渡しはこれを WebAuthn 相当のオープンスタンダードとして位置付ける。

### x402 (Coinbase + Cloudflare + AWS)

**Transport**:HTTP ネイティブ。HTTP ステータスコード **402 Payment Required**(1996 以来 RFC 7231 で定義されているが ~30 年間未使用)に加え `X-Payment-Required`(server → client)および `X-Payment`(client → server)ヘッダを用いる。このパターンは新たなワイヤフォーマットなしに既存の edge middleware、API gateways、reverse proxies と構成される。

**決済 asset**:デフォルトで **USDC stablecoin**(Base 上の USDC = デフォルト;Solana USDC、Ethereum L1, その他の L2がサポートされる)。Facilitator(Coinbase / Cloudflare / community facilitators)が `X-Payment` proof をオンチェーンで検証する。アセットは構造的にパブリックチェーンの stablecoin に結びついている ── fiat / card はネイティブにサポートされない。

**認可モデル**:**Delegated key** ── agent はユーザーの ウォレット に結びついた session key を用いる(多くは [[systems/erc-4337-overview|ERC-4337]] SCW 上の [[agent-economy/erc-7715-overview|ERC-7715]] permission scope または [[systems/erc-7702-overview|ERC-7702]] delegated EOA 経由)。リクエストごとのユーザー承認は不要;spend cap は ウォレット層で強制される。

**Q1-Q2 2026 mainnet adoption**:**Cloudflare Workers x402 が production tier で GA(2026-Q1)** + **AWS API Gateway + Bedrock AgentCore GA(2026-Q2)**。Vercel AI SDK が first-party の x402 client を提供。Anthropic Claude Code + OpenAI Agents SDK には community が維持する wrapper がある。dev-talk の開示から推論される **月間 single-digit billion requests** ── 四つのプロトコルの中で最も検証された production volume。x402 Bazaar MCP は 10,000+ の有料エンドポイントをインデックスする。

**Target 加盟店**:**AI compute / API プロバイダ**(model APIs、scraping APIs、vector DBs、RAG services)・DeFi ネイティブのサービス・per-call の micropayment を望む任意の HTTP API。card-network のマーチャントではない。

**規制モデル**:**Open-loop crypto** ── facilitator(Coinbase、Cloudflare)は大半の管轄で規制された payment processor ではなく、単なる stablecoin 決済の検証者である。EU MiCA の stablecoin 分類は facilitator ではなく USDC の発行者(Circle)に適用される。米国 GENIUS Act の 2026 最終ルールが facilitator のステータスを明確化すると予想される。

### Skyfire(Visa + closed-loop card-network 発行会社)

**Transport**:**Card-rail API**(Stripe Issuing / Marqeta に類似)。agent は agent identity + 加盟店 URL + amount を伴って Skyfire の REST API を呼び出す;Skyfire は仮想カードの auth を発行し、OFAC / 加盟店-category / spend-cap のチェックを実行し、承認された取引を返す。カード自体は Visa rails に乗ってマーチャントに届く。

**決済 asset**:**Fiat 仮想カード**(主に USD、Visa rails 経由でマルチ通貨)。ユーザーのプリペイド残高、法人 ACH のトップアップ、または ── パイロットでは ── on-ramp 経由で USD にブリッジされた USDC によって資金供給される。マーチャントは既存の PCI-DSS 決済プロセッサで通常の Visa カード取引を見るだけで、crypto 統合は不要である。

**認可モデル**:**Card issuance** ── Skyfire は agent identity を発行し、それを仮想カードに紐付け、自身の台帳で spend caps + 加盟店 categories + time windows を強制する。ユーザーは Skyfire の web UX を通じて授権する(Amex でデリゲートカードを発行するのに類似)。Visa Trusted Agent Protocol との整合性が、authorization 時に cryptographic な agent attestation を提供する。

**Q1-Q2 2026 mainnet adoption**:Series A が 2024-2025に資金調達。Visa パートナーシップがアクティブ。Stripe / Visa 仮想カード統合がライブ。**Production の取引量は annualized で low-tens-of-millions USD**(press から推論;公式には非開示)。x402 のリクエスト数を大きく下回るが、各 Skyfire 取引が human-economy のマーチャント(SaaS subscriptions、travel、marketplaces)を対象とするため、**取引あたりのドル量は実質的により高い**。

**Target 加盟店**:**任意の Visa 受容マーチャント** ── 設計上、マーチャントはそれが agent 取引であることを知る必要はない。これは明示的な go-to-market のくさびである:agent が crypto を一度も統合していないマーチャントで買い物をする。パイロットには AI agent の旅行予約、SaaS 調達、B2B 供給が含まれる。

**規制モデル**:**Closed-loop card issuance** ── Skyfire(またはその BIN スポンサー銀行)が規制された事体である。agent 所有者の KYC、取引の AML モニタリング、OFAC スクリーニング、カードデータの PCI コンプライアンス。agent は銀行スポンサーのカード発行プログラムのライセンスのもとで運営される。EU PSD2 / 米国 OCC の枠組みがすでに rail をカバーする。

### Nevermined(compute / inference marketplace)

**Transport**:**Smart-contract escrow + token-gated API**。compute プロバイダは Nevermined が発行した NFT または subscription token の背後に model / GPU / dataset のエンドポイントを公開する。agent コンシューマがアクセストークンを保持する;エンドポイントを呼び出す;プロバイダがトークンを検証する;smart-contract escrow のリリースを通じて per-call で決済する。

**決済 asset**:**Stablecoin compute credit**(デフォルトで Polygon / Base / その他 EVM 上の USDC;ラッパーとしての Nevermined credit token)。per-inference、per-dataset-byte、または subscription-tier の計測。agent が単一の inference ごとに支払う場合、HTTP-layer の決済オプションとして x402 と統合できる。

**認可モデル**:**Token-gated access + escrow** ── agent が subscription または per-use の支払いを通じてアクセスを購入し、トークン(NFT または ERC-20)を受け取り、エンドポイントがトークンの存在 + スコープを検証する。資金はプロバイダが提供する(または dispute 経由で返金される)まで escrow に保持される。x402の即時決済とは異なるセキュリティモデル。

**Q1-Q2 2026 mainnet adoption**:ニッチだが **AI compute marketplace** セグメントでアクティブ ── fine-tuned model、GPU レンタル、custom datasets を公開するプロバイダ。x402 より mainnet volume は低いが **取引あたりの価値はより高い**(compute jobs は $0.10-$10 に対し x402は sub-cent の呼び出し)。一つの決済オプションとしての [[agent-economy/x402-http-payment-overview|x402]] との統合により、Nevermined は大口 jobs について escrow + dispute のロジックを保ちつつ、小口 jobs の高速決済のために x402の HTTP rail の内側に収まることができる。

**Target 加盟店**:具体的に **AI compute プロバイダ** ── model inference エンドポイント、GPU レンタル、dataset アクセス、agent 間 compute 市場([[agent-economy/skill-market-monetization|skill market monetization]])。汎用のマーチャントではない。

**規制モデル**:**Crypto ネイティブの marketplace** ── 規制された payment processor としてではなく、smart-contract プラットフォームとして運営される。プロバイダ / コンシューマの関係は smart contract によって統治される;dispute は DAO 仲裁経由。KYC は compute プロバイダ自身のプログラムに依存する(例:プロバイダが米国企業なら OFAC が適用される)。

### ERC-7715 (subscription / permission scope, 補助)

**それが何か**:ユーザーが agent に **type**(例:`erc20-token-transfer`)、**amount cap**、**period**(例:$50/day)、**allowed targets**(加盟店 address の allowlist または domain pattern)を持つスコープ付きの支出 permission を事前付与できるようにする ウォレット RPC メソッド `wallet_grantPermissions`。

**Mainnet ステータス(2026-Q2)**:**MetaMask**(mobile + Snaps)、**Coinbase Smart ウォレット**(Base mainnet)、**Safe**(v1.4+ module)でライブ。Rabby / Phantom / Trust ウォレット にはまだない。ウォレット をまたぐ portability のギャップが残る ── permission schemas が分岐する。

**スタックでの役割**:x402 または AP2の下の **横断的な plug-in**。ユーザーは ERC-7715経由で一度スコープを付与する;その後 agent は再プロンプトなしに多数の x402 呼び出しまたは AP2 マンデートにわたってそのスコープを用いる。構成パターンについては [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 エージェント決済 stack]] を参照。

### Lit Protocol PKP(threshold key カストディ, 補助)

**それが何か**:**Programmable Key Pair** ── 秘密鍵が Lit Protocol の threshold ネットワーク全体で分割される ウォレット(いかなる単一ノードも完全な鍵を見ることはない)。署名は secure enclaves の内部で動作する **Lit Actions**(JavaScript コード)によってゲートされる;コードは署名を承認する前に rate limits、scope、multi-factor、または任意のポリシーをチェックできる。

**Mainnet ステータス(2026-Q2)**:Lit mainnet で何年もライブ;[[agent-economy/lit-protocol-pkp-agent-keys|agent key カストディ]] シナリオでの成熟した production 利用。特に agent が自身の鍵を保持しなければならない(長時間稼働タスクの自律 agent)が、ユーザーが Privy / Magic のような単一のカストディアンを信頼せずにポリシー強制を望む場合に用いられる。

**スタックでの役割**:**key カストディ** 層のための Privy / Magic / Coinbase CDP に代わる **横断的な plug-in**。PKP の上には ERC-7715 (scope)、x402 / AP2 (transport)、stablecoin(決済)が位置する。

## 大比較マトリクス表

**四つの主要プロトコル + 二つの補助層にわたる六軸比較**(2026-Q2 ステータス):

| 観点 | **AP2 (Google → AAIF)** | **x402 (Coinbase / CF / AWS)** | **Skyfire (Visa closed-loop)** | **Nevermined (compute mp)** | **ERC-7715 (補助)** | **Lit PKP (補助)** |
|---|---|---|---|---|---|---|
| **Transport** | HTTPS + W3C Verifiable Credential mandate chain | HTTP 402 + `X-Payment` headers | Card-rail REST API (Visa) | Smart-contract escrow + token-gated endpoint | ウォレット RPC `wallet_grantPermissions` | Lit-network threshold sign + Lit Actions JS |
| **決済 asset** | アセット非依存 (Google Pay / card / USDC / bank rails) | **USDC stablecoin** on Base / Solana / EVM L2 | **Fiat 仮想カード** (主に USD;USDC トップアップ可能) | **Stablecoin compute credit** (USDC / Nevermined credit) | 該当なし (他の rail をゲートする) | 該当なし (任意のチェーンに署名する) |
| **認可モデル** | OAuth ライクの VC mandate (Intent → Cart → Payment) | Delegated session key (ERC-7715 / 4337 / 7702) | Card issuance + bank-sponsored BIN | Token-gated escrow (NFT または ERC-20 access token) | ウォレット事前付与スコープ (cap + period + targets 付き) | Threshold MPC + Lit Action 内の runtime policy |
| **Q1-Q2 2026 mainnet** | 60+ consortium · ~4 production pilots · AAIF 引き渡し 2026-Q2 | **Cloudflare GA Q1 + AWS GA Q2 · single-digit B req/mo · Vercel SDK · 10k+ Bazaar endpoints** | Series A · Visa パートナーシップライブ · low-tens-M USD annualized | ニッチな AI compute marketplace · 即時決済のため x402 を統合 | MetaMask + Coinbase Smart ウォレット + Safe ライブ · portability ギャップ | 成熟した mainnet · 自律 agent 向けの production key カストディ |
| **Target 加盟店** | Web2 のエンタープライズ SaaS · card-network 小売業者 · 金融機関 | AI compute / API プロバイダ · DeFi ネイティブ · per-call HTTP サービス | **任意の Visa 受容マーチャント** (マーチャントは agent identity を認識しない) | AI compute プロバイダ · model inference · GPU レンタル · dataset アクセス | (任意) — ウォレット scope 層 | (任意) — key カストディ層 |
| **規制モデル** | **Open-loop interop** — プラグ可能な決済、標準としての AAIF | **Open-loop crypto** — facilitator は大半の管轄で非規制 · 発行者に MiCA · GENIUS Act 保留中 | **Closed-loop card issuance** — bank-sponsored BIN · KYC / AML / PCI すべて対象 | **Crypto ネイティブの marketplace** — smart-contract プラットフォーム · DAO dispute | (なし — ウォレット機能) | (なし — key カストディ) |

**マトリクスの読み方**:
- 横にひとつのプロトコルの 6 軸プロフィールを見る · 縦に同じ軸での 4 プロトコルの差別化を見る
- AP2 vs x402 は 決済 asset で最も分岐する — AP2 は multi rail · x402 は single rail(USDC) · これが 加盟店 adoption 曲線の違いを決定する(AP2 は遅いが広い · x402 は速いが狭い)
- Skyfire は唯一の closed-loop · 加盟店 に crypto / agent 統合を一切要求しない · ゆえに「今すぐ、任意のマーチャント」が可能 · ただし KYC + bank sponsorship のコストは高い
- Nevermined は vertical(compute marketplace) · 汎用 rail ではない · 市場容量は小さいが単発金額は高い
- ERC-7715 + Lit PKP は rail ではなく · 上記 4 rail に ウォレット substrate を提供する · 実装上ほぼすべての production stack がいずれかを使う

## production で観測された構成パターン

**Pattern A — "AI ネイティブ API marketplace"**:
- ERC-7715 (scope) + ERC-7702 / 4337 ウォレット + x402 transport + USDC on Base
- 2026 年に agent-payment を出荷したスタートアップの ~70%([[agent-economy/agent-protocol-mainnet-adoption-2026|mainnet adoption snapshot]] 参照)
- 主な実装:Vercel AI SDK + Cloudflare Workers + AWS Bedrock AgentCore stacks

**Pattern B — "エンタープライズ commerce agent"**:
- AP2 mandate VC + ERC-7715 (scope) + card or USDC 決済
- ~20%、エンタープライズ pilot(Mastercard / Salesforce / Amex)
- 強み:マーチャント側に既に PCI / KYC フローがある · agent は VC を提示するだけでよい

**Pattern C — "Skyfire-issued agent card"**:
- Skyfire identity + virtual card + bank-sponsored BIN
- トランザクション件数では小さい割合だが **取引あたりの金額が最も高い**
- 主な実装:任意の Visa 加盟店 · agent は相手側の統合を必要としない

**Pattern D — "Compute marketplace"**:
- Nevermined escrow + access token + (optional x402 inner 決済)
- ニッチだが成長中 — AI compute プロバイダがファインチューンモデルをマネタイズ
- 重なるシナリオ:agent が fine-tuned model を呼び出すのは Nevermined · その model が上流 API を呼び出すのは x402

**Pattern E — "policy-bound key を持つ自律 agent"**:
- Lit PKP (カストディ + runtime policy) + ERC-7715 (scope) + x402 (transport)
- 長時間自律稼働する agent に適する · ユーザーが不在でも phish で key を奪われない
- Privy / Magic / Coinbase CDP の中央集権カストディ が受け入れられない場合(adversarial / cross-jurisdictional / open-source agent)

## 境界事例 / 将来の軌道

**AP2 vs x402 の収斂路**:
- 短期(2026-2027):AP2 の mandate VC は x402 `X-Payment` ヘッダの inner attestation として機能し得る — これによりマーチャントは「agent に授権がある」(AP2) + 「USDC が決済済み」(x402)の二重保証を同時に得る。OpenAI の SDK ヘッジが賭けているのはこの収斂路である([[agent-economy/agent-protocol-mainnet-adoption-2026|mainnet adoption]] 参照)
- 長期(2028+):AAIF 標準化後、x402 facilitator が AAIF 検証を内蔵し得る — AP2 vs x402 はもはや「どちらを選ぶ」ではなく「両方使う」になる

**Skyfire クローズドループ vs オープンループの緊張**:
- クローズドループの強み:今日から使える · グローバル 60M+ Visa マーチャントが受け入れる · KYC / AML フレームワークが成熟
- クローズドループの弱み:Skyfire は単一発行会社 · 取引ごとに Visa interchange ~1.5-2.5% · 長期的に x402 のニアゼロ fee と比べて非対称
- 実際の戦略:Skyfire 自身も USDC を backing asset として評価中 · 将来は「Skyfire issuance + USDC 決済」もあり得る([[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]] 参照)

**Nevermined と x402 の食う/食われる関係**:
- x402 が transport 層を標準化した後 · Nevermined の「per-call HTTP 課金」ユースケースは x402 に直接置き換えられる
- しかし Nevermined の「escrow + dispute + 大口 compute job」ユースケース(単発 $1+ · SLA 保証が必要)は x402 では代替不可 · x402 はデフォルト fire-and-forget で dispute 機構がないため
- 長期的分業:**x402 は < $0.10 の fast 決済** · **Nevermined は $0.10+ の大口 + SLA**

**ERC-7715 portability gap の解消パス**:
- 2026-Q3 提案中の permission-type registry が鍵 · スキーマを統一できなければ · agent は「MetaMask-agents vs Coinbase-agents vs Safe-agents」に断片化を強いられる
- Lit PKP は別ルートを提供する:permission policy を Lit Action JavaScript として記述する · ウォレット-agnostic · ただし throughput が代償(Lit network MPC sign はローカル sign より 100-500ms 遅い)

**FIDO Alliance / AAIF のコンプライアンス化**:
- AAIF が 18-24 ヶ月の ratification track(WebAuthn の歴史に類似)を完走すれば · 2027-Q4 標準化の可能性
- それまでのウィンドウは「Google + 60 partners 寡頭連盟」vs「x402 + Cloudflare/AWS edge dominance」の市場拮抗
- 真のリスク:AAIF が stall する(WebAuthn 2014-2016 のように) · その間に x402 + ERC-7715 が事実上の標準化を完成させ · ロックインを形成する

**Lit PKP と institutional adoption**:
- 機関(銀行 / 資産運用)は HSM / SOC2 カストディ を選好 · Lit PKP の「code-defined policy」は SOC2 audit で説明しにくい
- ただし規制要件(MiCA の第三者託管)が multi-party カストディ を後押し · Lit PKP の threshold + transparent code モデルはむしろ復審で優位を得る — 2027-2028 で逆転の可能性

**Visa Trusted Agent Protocol と Skyfire**:
- Visa が 2025-2026 に Trusted Agent Protocol(VTAP)を発表 — agent に cryptographic identity attestation を付与し · 加盟店 が authorization 時に検証
- Skyfire は VTAP の早期発行会社 · Visa と深く結合
- ただし VTAP 自体はオープンスタンダード · つまり Stripe Issuing / Marqeta / Adyen Issuing 等の競合も 発行会社 になり得る · Skyfire の先行優位は 18-24 ヶ月以内に希薄化する可能性

**Regulatory wildcard — 2026-Q3 GENIUS Act**:
- 米国 GENIUS Act の stablecoin 最終ルールは 2026-Q3 着地予定 · 「stablecoin facilitator」(x402 における Coinbase の役割等)が money transmitter とみなされるかを明確化する
- facilitator が money transmitter に分類されれば · x402 の米国市場 cost structure は激変 — facilitator は 50 州 MTL ライセンスが必要になる
- AP2 は 決済 rail-agnostic ゆえ影響が比較的小さい · Skyfire は既に bank-sponsored BIN 経由ゆえ影響が最小

**MCP layer との関係**:
- Anthropic MCP は tool-invocation 層であり · payment 層ではない · ただし MCP は任意の payment protocol を tool としてラップ可能
- 実プロダクション:**MCP tool が x402 client をラップ** が Claude Code / agent SDK 統合で最も一般的なパターン
- これは Anthropic が AP2 vs x402 のいずれかを first-party 統合する必要がないことを意味する — MCP が abstraction layer として 4 プロトコルすべてに互換

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI エージェント決済 protocols overview]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|AI エージェント決済 seven layers]]
- [[agent-economy/ai-agent-payment-protocols-commoditization|payment protocol commoditization]]
- [[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption 2026]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 Cloudflare / AWS edge integration]]
- [[agent-economy/ap2-overview|AP2 overview]]
- [[agent-economy/ap2-adoption|AP2 adoption]]
- [[agent-economy/ap2-technical-spec|AP2 technical spec]]
- [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop 発行会社]]
- [[agent-economy/nevermined-compute-payment-protocol|Nevermined compute payment protocol]]
- [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]]
- [[agent-economy/erc-7715-overview|ERC-7715 overview]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 エージェント決済 stack]]
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

## 出典

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
