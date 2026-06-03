---
source: agent-economy/stripe-agent-toolkit-position
source_hash: 634d3c372156dde7
lang: ja
status: machine
fidelity: ok
title: "Stripe Agent Toolkit · Stripe のファーストパーティ Agent SDK と x402 / Privy / AWS AgentCore に対する位置付け"
translated_at: 2026-06-02T11:47:37.300Z
---

# Stripe Agent Toolkit · Stripe のファーストパーティ Agent SDK と x402 / Privy / AWS AgentCore に対する位置付け

## 要約

Stripe Agent Toolkit は、2024 後半にローンチされ 2025, を通じて大幅に拡張された、AI エージェントが既存の Stripe レール ── Issuing カード、ACH、電信送金、SEPA、ペイアウト、ビリング、Connect ── を通じて取引できるようにする Stripe のファーストパーティ SDK であり、新たなチェーンネイティブの決済層を発明する必要がない。それがカバーする他のエージェント決済の表層と対照すると、二つの戦略的ポジションを同時に占めている:それは [[agent-economy/x402-http-payment-overview|x402]] に対する *トランスポート層の競合相手* であり(Stripe ネイティブの HTTP/SDK 呼び出し対 HTTP 402  + USDC)、かつ [[agent-economy/privy-embedded-wallet-overview|Privy]](Stripe がすでに所有するウォレット)および [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]([[agent-economy/privy-aws-agentcore-default-wallet|AWS AgentCore]] のデフォルトウォレットのペアリングにおいてそれを下支えする)に対する *補完* である。規制上の枠組みが支配的な差別化要因である:Stripe は登録された MSB であり、米国の大半の州で資金移動業のライセンスを持ち、EU では EMI、世界の他の大半では PSP である。その姿勢により、エージェントは通常の Stripe 加盟店と同じコンプライアンスの負担で ── すなわち *いずれかをゼロから構築するよりはるかに少ない負担で* ── Stripe を通じて仮想カードを発行し、ACH プル、電信送金、返金を行える。トレードオフはキャプティブな経済性である:エージェントが Toolkit を通じて動かすドルはすべて Stripe に標準のレーキを支払い、エージェントの取引グラフは Stripe に完全に可視である。

## ウィキ上の位置づけ

この項目は [[agent-economy/INDEX|agent-economy index]] の下に、エージェント経済の集金・ペイアウト層の Stripe 側の読みとして位置する。Stripe の SDK トランスポートと競合するオープンプロトコルの HTTP トランスポートについては [[agent-economy/x402-http-payment-overview|x402]] と、Stripe-via-Privy がすでに勝っているウォレットのペアリングについては [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore]] と、主要 AI ラボがすでに Stripe を通じてどう集金しているかについては [[agent-economy/ai-company-payment-landscape|the AI-company payment landscape]] と、この Toolkit が収まる長い弧については [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|the Stripe Trojan-horse five-layer thesis]] と対照して参照のこと。より広範なシステム / 規制の境界については [[fintech/INDEX|fintech index]] および [[agent-economy/ai-agent-payment-protocols-overview|the seven-protocol overview]]。

## 仕組み · Toolkit が実際に何であるか

Stripe Agent Toolkit はオープンソースの SDK(Python と TypeScript)に加え、AI エージェントフレームワークが Stripe API をツールとして呼び出せるようにする薄い規約のセットとして提供される。その形:

- **Stripe REST API のためのツールラッパー。** 一般的なエージェントフレームワーク(LangChain、Vercel AI SDK、OpenAI Assistants API、Anthropic の MCP、CrewAI)向けのアダプタであり、エージェントが Stripe のプリミティブ ── `payment_intent.create`、`customer.create`、`invoice.create`、`payout.create`、`issuing.card.create` など ── を型付きのツール呼び出しとして起動できる。
- **制限付きキーの統合。** Toolkit の慣用的な姿勢は、エージェントが *制限付き* の Stripe API キー ── Stripe の既存のきめ細かいキースコープ機構 ── で動作することであり、エージェントはユーザー(または加盟店)が明示的に有効化した操作のみを実行できる。これは [[agent-economy/erc-7715-overview|ERC-7715]] のスコープ付き権限の Stripe-API 版であるが、チェーン上ではなく Stripe の IAM 表層に存在する。
- **エージェントの外向き支出のための Issuing プリミティブ。** Toolkit は `issuing.card.create` と `issuing.cardholder.create` をエージェント呼び出し可能なツールとして公開しており、エージェントは単一の加盟店、単一の金額、単一の時間枠にスコープした仮想カードを発行し ── そのカードを用いて、それ自体がカードしか受け付けない外部サービスに支払うことができる。これは「エージェントが Stripe 残高を持つ」から「エージェントが Stripe を話さない実世界の加盟店に支払える」への橋渡しである。
- **エージェントのペイアウトのための Connect + ペイアウトのプリミティブ。** 資金を支払う必要のあるエージェント ── 売手に支払うマーケットプレイスエージェント、業務委託者に支払う給与エージェント ── のために、Toolkit は Stripe Connect の `transfer.create` および `payout.create` のフローを公開し、管轄に応じて ACH、電信送金、SEPA、Faster Payments、即時ペイアウトのレールへのアクセスを与える。
- **Webhook 堅牢化の規約。** エージェントは webhook イベントによって不可逆な操作を実行するようトリガされうるため、Toolkit はべき等性キーと署名検証のヘルパーを「高度なトピック」としてではなく一級の関心事として提供する。

Toolkit が行うアーキテクチャ上の選択は、エージェント固有の新たな決済プリミティブを発明するのではなく、Stripe の *既存の* API 表層をエージェントツールとして公開することである。これは [[agent-economy/x402-http-payment-overview|x402]] の設計上の選択(新たな HTTP レベルのハンドシェイクを発明した)の逆であり、[[agent-economy/ap2-overview|AP2]] のマンデート構造(新たな認可クレデンシャルを発明した)の逆である。

## 仕組み · Privy および Stripe のステーブルコインスタックとどう構成されるか

Stripe の 2024–2025 の買収(組み込みウォレット層のための [[agent-economy/privy-embedded-wallet-overview|Privy]]、ステーブルコインの発行とオーケストレーションのための Bridge、そして Tempo の L1 の取り組み)は、Agent Toolkit をはるかに大きなスタックのアプリケーション側のエッジにした。その構成:

- **Stripe Agent Toolkit** が最上位に位置する。
- **Stripe API ゲートウェイ** が Toolkit の呼び出しと基礎となるレールの間を仲介する。
- **Privy** が、エージェントが自己管理アドレスを保持する必要のあるあらゆるフロー(Web3 のペイアウト、オンチェーン決済、エージェント間の暗号資産送金)のために組み込みウォレット層を提供する。
- **Bridge** がステーブルコインのオーケストレーション層 ── チェーン間およびオフチェーンの銀行レールへの USDC / USDB / EURC などのルーティング ── を提供し、オンチェーン側を Stripe の既存の加盟店が受け入れられるものに変える。
- **Stripe Issuing** がウォレット側と並行して位置し、エージェントが非 Stripe の加盟店に支払う必要のあるときにカードネットワークの出口を提供する。
- **Stripe Treasury**(ライセンスのある場合)がエージェント残高を保持するための銀行口座のようなプリミティブを提供する。

バンドルの経済的なロジック:Stripe 残高を持つエージェントは Stripe がルーティングする任意の加盟店(世界のオンライン加盟店の大半)に支払え、Visa/Mastercard を受け付ける任意の加盟店(残りの大半)に支払うために仮想カードを発行でき、任意のオンチェーンの取引相手(エージェント経済のネイティブなケース)にステーブルコインで決済できる。一つの IAM 表層、一つのコンプライアンス姿勢、三つの決済ドメイン。これは [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|the five-layer Trojan-horse thesis]] の業務上の形であり ── Toolkit はそのバンドルをエージェントに公開する層である。

## エージェント固有のシナリオ

**シナリオ A ── エージェントがタスクごとに仮想カードを発行する。** 自律的なリサーチエージェントが有料データソースに 1 か月間サブスクライブし、その後キャンセルする必要がある。パターン:エージェントが `spending_controls = { spending_limits: [{ amount: 5000, interval: "monthly" }], allowed_categories: ["computer_data_processing"] }` と明示的な `merchant` ホワイトリストとともに `issuing.card.create` を呼び出す。カードは即座にプロビジョニングされ使用可能になる。1 か月後、エージェントはカードをキャンセルする。Stripe の認可時のコントロールはスコープをプロンプト層ではなくカードネットワークのレールで強制する ── 過剰支出の試みはスワイプ時に拒否される。

**シナリオ B ── エージェントが顧客の認可した請求書のために ACH をプルする。** 経理エージェントが顧客の認可(検証済みマイクロデポジットまたは即時 ACH 検証を伴う Stripe の `payment_method` フローを通じて)を収集し、その後 `payment_intent.create` の呼び出しをスケジュールして顧客の銀行口座を定期的にプルする。顧客の ACH 認可が法的なアンカーであり;エージェントの制限付き API キーが業務上のアンカーである。紛争は ACH の標準的なリターンコード機構を通じてルーティングされる。

**シナリオ C ── エージェントが Connect を通じてマーケットプレイスの売手にペイアウトする。** 入ってくる収益を売手に配分するマーケットプレイスエージェントが売手の接続アカウントのために `transfer.create` を呼び出し、次いで `payout.create` で Stripe の標準ペイアウトスケジュールに従って売手の外部銀行口座に資金をプッシュする。クロスボーダーの分割は Stripe Cross-Border Payouts を通じて行われる;エージェントは SEPA / Faster Payments / SWIFT の詳細を知る必要はなく、仕向通貨だけを知ればよい。

**シナリオ D ── エージェントが Bridge 経由で USDC により B2B の請求書を決済する。** エージェントの取引相手が、USDC しか受け付けない非 Stripe スタック上のエージェントそのものである。Toolkit の Stripe + Bridge の統合により、エージェントは自身の Stripe 残高から USDC 送金に資金供給し、Base または Ethereum メインネット上で決済し、Stripe に通常の Stripe 支払いと同じ台帳上でその外向き送金を記録させることができる。これは Stripe の会計を通じて構成される [[fintech/usd-stablecoin-interchange|USD stablecoin interchange]] である。

**シナリオ E ── Stripe Connect を通じたエージェント間の決済。** いずれも Stripe Connect を通じてオンボードする異なるプラットフォームの二つのエージェントは、それらの接続アカウント間の `transfer.create` によって B2B の債務を決済でき、ペイアウトまで銀行レールは関与しない。これはカードネットワークの言葉で言えば [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa and Mastercard are building toward separately]] クローズドループのケースである。

## 規制上の枠組み · MSB / EMI / PSP としての Stripe

Stripe Agent Toolkit の最大の非技術的な差別化要因は規制である。Stripe は、オープンプロトコルのスタック ── x402, AP2, Privy 単体 ── がそうでない仕方で、資金を動かすライセンスを持っている。具体的には:

- **米国。** Stripe Payments Company は FinCEN に登録された Money Services Business であり、必要とされる事実上すべての州で資金移動業ライセンスを持つ。Stripe Issuing は発行銀行(Celtic Bank、Cross River、その他製品により異なる)とのパートナーシップのもとでカード発行プログラムマネージャーとして運営される。エージェントフローにとって、これは資金の規制された動かし手が *Stripe* であることを意味する ── 加盟店でも、エージェントプラットフォームでも、ユーザーでもない。
- **欧州連合。** Stripe は電子マネー機関ライセンス(アイルランドで)を持ち、これは EEA 全域でパスポートする。EU でエージェントが発行するカードは同じ EMI の足場の上で動く。
- **英国 / シンガポール / オーストラリア / 日本。** Stripe は現地の同等物(FCA EMI、MAS Major Payment Institution ライセンス、ASIC AFSL、日本の資金移動業 / 製品によりライセンスを持つ PSP との協業)を持つ。

エージェント統合にとっての実務的な帰結:Agent Toolkit をプロジェクトに導入する開発者は Stripe の規制された姿勢を継承する。開発者は MSB として登録する必要も、州ごとの資金移動業ライセンスを持つ必要も、カード発行プログラムマネージャーである必要もない。エージェントがカードを発行し、ACH をプルし、資金を電信送金できるのは、ライセンスを持つ事業体である Stripe が背後で実際の資金移動を行っているからである。

トレードオフは標準的なものである:規制された事業体がすべてを見る。Toolkit を通じたすべてのエージェントの取引グラフは、データ可用性の観点から、Stripe に完全に観測可能であり、要求に応じて規制当局に報告可能である。[[agent-economy/x402-http-payment-overview|x402]] 型のオンチェーンフローにとって観測可能性は構造的に異なる(オンチェーンで仮名、中央の報告者なし)が、これはまさに一部のエージェントプラットフォームが一部のフローをそこにルーティングし、他のフローを Stripe を通じてルーティングする理由である。

もう一つの規制上の微妙な点:Stripe のライセンスは(フローに応じて)*ユーザー*(または *加盟店*)を本人として紐付ける。エージェントはそれ自体が規制された取引相手としてではなく、業務上の統合として扱われる。これは未解決の [[agent-economy/agent-actorship-debate|agent-actorship]] の問いを、単にエージェントを法的なアクターにしないことで回避する ── ユーザーが Stripe アカウントを保持し、エージェントは単にユーザーの制限付きキーで API エンドポイントを呼び出すだけである。

## 競争上の位置付け

エージェント決済のランドスケープの残りに対して:

**[[agent-economy/x402-http-payment-overview|x402]](Coinbase / Cloudflare / AWS)に対して ── 異なるトランスポート、重なるユースケース。** x402 は HTTP ネイティブ、USDC デフォルト、秒単位の決済、Stripe のレーキなしだが、加盟店がステーブルコインを受け入れ 402 ハンドシェイクを統合することを要求する。Stripe Agent Toolkit は SDK ネイティブ、マルチレールで、加盟店が Stripe を受け入れること(大半のオンライン加盟店はすでにそうしている)を要求し、標準の Stripe 手数料を支払う。エージェント間のインフラ呼び出しについては両者は真に競合する;エージェント対伝統的加盟店のフローについては、加盟店がすでに Stripe の顧客であるため Stripe がデフォルトで勝つ。

**[[agent-economy/ap2-overview|AP2]](Google)に対して ── 異なる層、補完的。** AP2 は *マンデート*(「このエージェントはこのユーザーの代理として支出する権限を持つ」と述べるクレデンシャル)を標準化する。Stripe Agent Toolkit は実のところマンデートを話さない;それは「エージェントが制限付き API キーを持つ」を話す。時とともに両者は構成されうる ── AP2 マンデートがユーザーの認可を検証し、Stripe Toolkit が資金を動かす ── が、現時点では AP2 の決済アダプタのリストは Stripe 互換のフローを Connect 経由でのみ含み、Toolkit にネイティブではない。

**[[agent-economy/privy-embedded-wallet-overview|Privy]] に対して ── Stripe が Privy を所有するため、両者はペアになる。** Privy は組み込みウォレットの基盤であり;Toolkit はエージェントが Stripe 台帳を記録システムとして用いるときにその上に位置する SDK である。オンチェーンに留まる必要のあるエージェントフロー(非 Stripe の取引相手に USDC で決済する)には、エージェントは Privy を直接用いる;法定通貨レールに当たるフロー(カード、ACH、電信送金)には Toolkit を通じる。その構成は業務上のものにされた [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Trojan-horse strategy]] である。

**[[agent-economy/privy-aws-agentcore-default-wallet|AWS AgentCore]](AWS Bedrock Payments)に対して ── AWS は Privy + Coinbase CDP を通じてルーティングする。** AgentCore のデフォルトウォレット選択は、多くの AWS ホスト型エージェントがデフォルトで Privy ウォレットを保持することを意味する ── そして Privy は Stripe である。Toolkit はそれらのエージェントが法定通貨レールに到達する自然な方法になる。AWS は決済 API の選択について構造的に中立である;Stripe は構造的に非中立である(自社の SDK)。競争は *能力* のレベルではなく *デフォルト* のレベルにある。

**Coinbase CDP / Issuing に対して ── カード発行層で重なる。** [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] も(Coinbase 自身のカードプログラムを通じて)エージェント呼び出し可能なカード発行を提供するが、Stripe Issuing は加盟店受容が実質的により深く、加盟店カテゴリーコードのコントロールがより成熟している。CDP は暗号資産ネイティブのフローで勝つ;Stripe Issuing は実世界の商取引の出口で勝つ。

**伝統的な MSB(Wise、Adyen、PayPal)に対して ── Stripe が実際のエージェント SDK で先に到達した。** Adyen と Wise は API を持つが、いずれも同等のファーストパーティのエージェントツールキットを提供していない。PayPal/Braintree はいくつかの発表をしたが、2026半ばの時点で同等のオープンソース SDK はない。ここでの Stripe の先行者優位は意味がある。なぜなら AI ラボ自身がすでに消費者向けビリングで Stripe 上で動いており(OpenAI、Anthropic、および大半の主要 LLM プロバイダが Stripe を通じてルーティングする ── [[agent-economy/ai-company-payment-landscape|the AI-company payment landscape]] を参照)、Toolkit は内蔵された採用のはずみ車とともに提供されるからである。

## 関連項目

- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|Seven-protocol layer table]]
- [[agent-economy/ai-agent-payment-protocols-commoditization|Agent payment protocols commoditization]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 Cloudflare / AWS edge integration]]
- [[agent-economy/ap2-overview|AP2 overview]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet overview]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore default wallet]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/embedded-wallet-network-effects-moat|Embedded wallet network effects moat]]
- [[agent-economy/ai-company-payment-landscape|AI company payment landscape]]
- [[agent-economy/erc-7715-overview|ERC-7715 wallet permissions]]
- [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer for agents]]
- [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 primer for agents]]
- [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]]

## 出典

- Stripe コーポレートサイト ── `stripe.com`。
- Stripe ブログ「Adding payments to your agentic workflows」── `stripe.com/blog`。
- `github.com/stripe/agent-toolkit` ── オープンソースの Agent Toolkit リポジトリ(Python + TypeScript)。
- Stripe Issuing ドキュメント ── `docs.stripe.com/issuing`。
- Stripe 決済手段の統合ドキュメント ── `docs.stripe.com/payments/payment-methods`。
