---
source: agent-economy/erc-4337-account-abstraction-primer-for-agents
source_hash: 1f7df376ed72cad4
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "AI エージェントのための ERC-4337 アカウント抽象化入門"
translated_at: 2026-06-26T08:32:15.195Z
---

# AI エージェントのための ERC-4337 アカウント抽象化入門

## 要約

ERC-4337 は、Ethereum アドレスが単一の secp256k1 鍵ではなく任意のコードによって制御されることを可能にする、アプリケーション層のアカウント抽象化標準である。AI エージェントにとって、これは *「エージェントにユーザーのシードフレーズを渡さなければならない」*（安全でなく、取り消し不能）と *「エージェントは、スコープ付き・取り消し可能・スポンサー可能な実行権を持つスマートコントラクトウォレット上の署名者である」*（[[agent-economy/erc-7715-overview|ERC-7715 ウォレット permissions]] と [[agent-economy/erc-7715-agent-payment-stack|four-layer agent payment stack]] の基盤にある実際の構成要素）との違いである。4 つのプリミティブ — UserOperation、EntryPoint、Bundler、Paymaster — はそれぞれエージェント固有の読み方を持つ。UserOp はエージェントの *意図エンベロープ*、EntryPoint はエージェントができることを画定する *信頼の根*、Bundler はエージェントが ETH を保持せずに tx を提出できるようにする *実行リレー*、Paymaster はプラットフォーム（Stripe、AWS AgentCore、Vercel）がユーザーのエージェント予算ではなくガスを負担できるようにする *ガススポンサー* である。この入門は、そのマッピング、ほとんどのエージェント SDK が落ち着くセッションキーパターン、そして署名者がソフトウェアである場合の「記録上の署名者は誰か」という規制上のフレーミングをカバーする。

## ウィキ上の位置づけ

このエントリは [[agent-economy/INDEX|agent-economy index]] の配下にあり、[[systems/erc-4337-overview|ERC-4337]] のエージェント実行の読み方である。汎用的なプロトコルの視点については [[systems/erc-4337-userop-bundler-flow|the systems-side UserOp / Bundler flow]]、EOA 側の経路については [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|the ERC-7702 agent primer]]、その直上に位置する権限層については [[agent-economy/erc-7715-overview|ERC-7715]] と照らし合わせて読むこと。より広範なプロトコルマップは [[agent-economy/ai-agent-payment-protocols-overview|the seven-protocol overview]] と [[agent-economy/ai-agent-payment-protocols-seven-layers|the seven-layer table]] である。より広範なシステム / 規制境界については [[systems/INDEX|systems index]] を参照のこと。

## メカニズム · 4 つのプリミティブ、エージェント側の読み方

ERC-4337 は、Ethereum の標準メンプールと並行して動作する *代替トランザクションプール* を導入する。プロトコル層は何も変更されておらず、システム全体がユーザー空間のコントラクトとオフチェーンのリレーネットワークに存在する。各コンポーネントのエージェント側の読み方：

**エージェント意図エンベロープとしての UserOperation。** UserOp はトランザクションではなく構造体である。それは `sender`（エージェントが介して動作するスマートコントラクトウォレット）、`nonce`、`callData`（実際の操作 — 例：`USDC.transfer(merchant, amount)`）、3 つのガスフィールド、オプションの `paymasterAndData`、そして `signature` を運ぶ。AI エージェントにとって署名フィールドは load-bearing な部分である。それはユーザーのルート鍵ではない。それは *セッション署名者* — ユーザーがエージェントに使用を承認した鍵であり、多くはエージェントがアクセスできる TEE に保持された secp256r1 / WebAuthn / パスキー認証情報である。UserOp は「エージェントが X を行いたい、これがそれが許可されている証拠である」というワイヤ上の形式である。

**信頼の根としての EntryPoint。** EntryPoint は `0x0000000071727De22E5E9d8BAf0edAc6f37da032` にあるシングルトンコントラクトである。すべての UserOp はそれを経由しなければならず、UserOp を受け取りたいすべてのスマートコントラクトウォレットは、EntryPoint が呼び出す `validateUserOp(...)` コールバックを実装する。エージェントにとってそのコールバックは *ポリシー強制ポイント* である。そこで SCW は「このセッションキーはまだ有効か？レート制限を超過していないか？この calldata は許可されたスコープ内か？」をチェックする — すなわち、エージェントに対する契約上の拘束がコンセンサスで強制される場所である。したがって [[security/bytecode-forensic-three-tier-verify|bytecode of the SCW]] はエージェントの画定された実行サーフェスであり、エージェントの実行時プロンプトではない。

**エージェントの実行リレーとしての Bundler。** Bundler は、代替メンプールから UserOp を引き出し、それらをシミュレートし、N 個を単一の `EntryPoint.handleOps(...)` トランザクションにパックするパーミッションレスなオフチェーンアクターである。Bundler はネットワークに ETH ガスを支払い、SCW またはその Paymaster から（ETH または ERC-20で）払い戻される。エージェントにとってこれが重要なのは、*エージェントが ETH を保持する必要が一切ない* からである。ユーザーが資金を入れるウォレットは純粋に USDC 建ての SCW でありうる。Bundler はエージェントの意図を実際のオンチェーントランザクションに変換するエンティティである。完全なメカニズムの分解は [[systems/erc-4337-userop-bundler-flow|the UserOp / Bundler flow page]] にある。

**プラットフォーム側のガススポンサーとしての Paymaster。** Paymaster は「この UserOp のガスを私が支払う」と承認するオプションのコントラクトである。エージェントエコノミーの読み方では、Paymaster はほぼ常に *プラットフォーム* であり、ユーザーではない — Stripe の Privy スタックがガスを支払い、[[agent-economy/privy-aws-agentcore-default-wallet|AWS AgentCore]] エージェントがユーザーのウォレットがネイティブ ETH を必要とせずに [[agent-economy/x402-http-payment-overview|x402-priced API]] を呼び出せるようにする。Paymaster は ERC-20 （USDC）をガスとして受け入れることもでき、これが Coinbase Smart ウォレット、[[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]、Privy が今日「ETH 不要のエージェントウォレット」を出荷する方法である。

5 番目のオプションのプリミティブは Aggregator である — 多数の署名を一度にバッチ検証できるコントラクト（BLS など）。同じ署名スキームで署名するエージェントフリートにとってこれは興味深い。実際には個別エージェントの UserOp が依然として v0.7 トラフィックを支配している。

エージェントスタックへのマッピングを簡潔な形で再述する価値がある。ユーザーが SCW を所有し、エージェントの権限は `validateUserOp` のスコープチェック内で制御するセッション署名者であり、Paymaster がガスを支払うのでエージェントは ETH を保持する必要がなく、Bundler がノードを運用するのでエージェントはノードを運用する必要がない。4 つの 4337 プリミティブはすべて、エージェント運用モデルにおける個別の責任ラインに対応する — ウォレット、署名者、ガス、トランスポート。この層の上のすべて（ERC-7715 権限グラント、AP2 マンデート、x402 402 ハンドシェイク）はユーザー向けセマンティクスを標準化するものであり、この層のすべては実行を実際に Ethereum 上で起こすものである。

## メカニズム · validateUserOp ライフサイクル、エージェント側の読み方単一のエージェント UserOp の間に SCW の内部で何が起こるかを丁寧に追う価値がある。なぜなら、そこにポリシー境界全体が実際に存在するからである。

EntryPoint が Bundler から `handleOps(ops[], beneficiary)` を受け取ると、各 UserOp について、エージェント制御のコードが実行される前に、以下を順番に行う：

1. **アカウント作成** — `sender` にまだコードがない場合（「反事実的」SCW）、EntryPoint は UserOp の `initCode` フィールドのファクトリヒントを介してそれをデプロイする。エージェントフローにとってこれが「エージェントにウォレットを渡す」ことを安価にするものである。ウォレットはエージェントの最初の UserOp がトリガーするまで存在しない。
2. **`validateUserOp(userOp, userOpHash, missingAccountFunds)`** — EntryPoint が SCW を呼び出す。SCW は (a) 署名が有効かどうか、(b) `validAfter` / `validUntil` の時間窓、(c) オプションで aggregator アドレス、をエンコードしたパックされた整数 `validationData` を返す。ここで SCW は「この UserOp は、私が認識する署名者によって、ユーザーが許可したスコープ内・時間窓内で、私が実行を承認したものか？」を強制する。エージェントを担う SCW にとって、*すべての* ポリシーがここに存在する。すなわち、セッションキーモジュールのスコープチェック、期間ごとの支出上限、マーチャントホワイトリスト、calldata セレクタ制限である。
3. **`validatePaymasterUserOp(...)`** — Paymaster が存在する場合、EntryPoint は同等のゲーティングのためにそれを呼び出す。「私、Paymaster は、この特定の UserOp のガスを支払うことに同意するか？」プラットフォーム Paymaster はこのフックを用いて、ユーザーごと / エージェントごとのレート制限を強制し、プラットフォーム自身のスコープポリシーに失敗する UserOp を拒否する。
4. **実行** — 両方の検証が成功した後にのみ、EntryPoint は `callData` で SCW の実行経路を呼び出す。構造上、このステップで到達可能なものはすべて、検証中に SCW がすでに認証したものである。エージェントのプロンプト時の意思決定がこのブランチに直接入ることは決してない。それらはすでに起こった検証を介してのみ入る。
5. **ガス精算** — EntryPoint は実際に使用されたガスについて SCW（または Paymaster）から引き落とし、Bundler に支払う。

エージェント設計にとっての構造的ポイント：エージェントの挙動に関する *強制された* 不変条件はすべて、`validateUserOp` 内で表現可能でなければならない。エージェントのプロンプト内または SDK 内でのみチェックされるものはすべて助言的であり、拘束的ではない。「エージェントがこれに違反するかもしれない」と「エージェントはこれに違反できない」の境界は、ステップ 2 の境界である。

## メカニズム · 標準的なエージェントパターンとしてのセッションキー

セッションキーパターンは、ほとんどの組み込みウォレットプラットフォーム（[[agent-economy/privy-embedded-wallet-overview|Privy]]、[[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]、ZeroDev、Pimlico、Alchemy）がエージェント実行のために収束するものである。その形：

1. SCW はユーザーが制御する *ルート鍵* によって所有される — デバイス上のパスキー、Privy MPC シェア、ハードウェアウォレットなど。ルート鍵はオンボーディング後にはめったに使われない。
2. SCW には、第二の公開鍵 — エージェントの署名者 — を画定されたスコープ（例：「任意の `*.vercel.com` x402 受信者へ最大 $5/日まで `USDC.transfer` を呼び出せる、30 日間有効」）でホワイトリストに登録する *セッションキーモジュール* がインストールされている。
3. エージェントは対応する秘密鍵を堅牢化された環境（AWS Nitro Enclave、Apple Secure Enclave、Cloudflare Workers KV スロット、Bedrock AgentCore 署名者サービス）に保持する。
4. セッションキーで署名された UserOp は、ルートオーナーに対してではなく、モジュールのスコープルールに対して `validateUserOp` 内で検証される。
5. ルートオーナーは、単一のオンチェーン操作（通常それ自体が UserOp）でいつでもセッションキーを失効できる。

これが [[agent-economy/erc-7715-overview|ERC-7715]] が一層上で標準化するものである。すなわち、すべてのウォレットが独自のセッションキーモジュール ABI を発明する代わりに、`wallet_grantPermissions` がdapp に標準スコープを要求させ、ウォレットが正しいモジュール呼び出しをレンダリングする。内部では依然として、`validateUserOp` 内でスコープを強制するセッションキーモジュールを備えた 4337 SCW である。

セッションキー抽象化は、「AI エージェントがウォレットを持つ」ことを合理的な言明にする *その* 設計である。なぜなら、この抽象化が明確な法的 / 運用上の境界を引くからである。すなわち、ユーザーがウォレットを所有し、エージェントは拘束を持ち、拘束はプロンプト境界や SDK ガードレールではなくコンセンサス層で強制される。

## メカニズム · エージェントエコノミーのアンロックとしてのガススポンサーシップ

Paymaster がなければ、AI エージェントは 4337以前の人間ユーザーと同じ UX 問題に行き詰まる。ウォレットはネイティブガストークンを保持しなければならず、それはチャージアップ、残高の監視、枯渇時の補充を意味する。1 営業日に 200 の異なる API を呼び出すエージェントにとって、これは運用上敵対的である。

エージェントエコノミーの解決策は **プラットフォーム支払いガス** である：

- プラットフォーム（Stripe、AWS AgentCore、Vercel、Cloudflare）は独自の Paymaster コントラクトを運用し、関連チェーン上で ETH を事前資金供給し、ホストするエージェントから発生するすべての UserOp について `paymasterAndData` に署名する。
- プラットフォームは、ユーザーの請求プランに対してメータリングする（「今月 3,400 のスポンサー付き UserOp を使用しました」）か、ウォレット統合を勝ち取るためにガスをロスリーダーとして扱うことでコストを回収する。
- 純粋に暗号ネイティブなフローの場合、Paymaster は呼び出しの通貨建てで払い戻しを要求できる — 例：エージェントが転送したばかりの USDC の 0.5% をガスをカバーするために取る。

これが [[agent-economy/erc-7715-agent-payment-stack|four-layer stack]] を実際にエンドツーエンドで動作させるメカニズムである。Vercel エージェントが 402,、エージェントの SCW が $0.50 USDC を転送する UserOp に署名し、Privy 管理の Bundler がそれを拾い、Stripe の Paymaster がガスをカバーし、EntryPoint が検証・実行する — すべておよそ 2 秒で、ETH がエージェントの手に一切触れることなく。

## エージェント固有のシナリオ

**シナリオ A — 日次上限内での自律的 API 支出。** ユーザーが Claude エージェントに開発者 API へ最大 $20/日まで支出することを承認する。実装：エージェントの署名者をホワイトリスト登録し `validateUserOp` 内でローリングウィンドウ支出上限を強制するセッションキーモジュールを備えた 4337 SCW。各 x402 支払いは UserOp である。モジュールは署名を検証する前に上限をチェックする。エージェントが超過支出しようとすると、`validateUserOp` がリバートし、Bundler はメンプールから UserOp をドロップする。拘束がコントラクト層にあるため、プロンプトインジェクション由来の超過支出は不可能である。

**シナリオ B — サブエージェントフリートへの委任。** プライマリエージェント（「プランナー」）が N 個のワーカーエージェントにサブタスクを委任する。パターン：プランナーの SCW が N 個のセッションキーモジュール（ワーカーごとに 1 つ）をインストールし、それぞれが厳しい呼び出しごとの上限を持つ。EntryPoint は各ワーカーの UserOp をワーカー固有のモジュールに対して検証する。監査は単純である。すべてのワーカーの支出は独自の署名者の下でオンチェーンにあり、EntryPoint イベントから再構築できる。これは伝統的な支払い承認よりも AWS IAM ロール引き受けに形が近い。

**シナリオ C — Paymaster を介したスポンサー付き API トライアル。** マーチャントが、エージェントに月あたり / エージェントあたり N 回まで API を無料で試させたい。マーチャントは、`callData` がマーチャントの [[agent-economy/x402-http-payment-overview|x402 receiver contract]] をターゲットとし、`sender` が N 回未満しか見られていない UserOp をスポンサーする Paymaster を運用する。エージェント SCW はこれらの呼び出しのために USDC を保持する必要すらない — Paymaster がガスを支払い、マーチャントは自分自身に支払う。これは OAuth を介して発行される無料枠 API キーのオンチェーン版である。

**シナリオ D — エージェントのステーブルコインフロート向けの USDC ガス。** エージェント SCW は [[fintech/usd-stablecoin-interchange|USDC]] のみを保持する。Pimlico / Alchemy のパーミッションレス Paymaster は、掲示されたレートで USDC をガスとして受け入れる。各 UserOp は USDC でガスが支払われる。ETH 残高管理は不要。これはほとんどのパイロット（[[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore]]、Coinbase Smart ウォレットエージェントデモ）が落ち着く運用モードである。

**シナリオ E — パッシブユーザーのためのリレーヤーとして機能するエージェント。** ユーザーが SCW に $500 USDC を入れてオフラインになる。エージェントはスケジュールに従ってトレード / API 呼び出し / サブスクリプション補充を実行する。エージェントが UserOp に署名し、Bundler がそれらを自動的に拾うため、ユーザーは個々のトランザクションに居合わせる必要がない。ユーザーのルート鍵は、スコープを拡大または失効する必要があるときにのみ再登場する。

**シナリオ F — エージェントが API ごとのマイクロペイメントを 1 つの UserOp 内でバッチ処理する。** リサーチタスクを行うエージェントが、単一のタスク実行内で 12 個の異なる x402価格設定エンドポイントからデータを取得する。12 個の UserOp を提出し UserOp ごとの検証オーバーヘッドを 12 回支払う代わりに、エージェントの SCW はその実行ブランチ内で `multicall(operations[])` エントリポイントを公開する。エージェントは、`callData` が 12 個の `USDC.transfer` 呼び出しの `multicall` である 1 つの UserOp を構築する。SCW は 1 回検証し、1 回ガスを支払い、12 回実行する。これは標準的な SCW バッチ機能のエージェントエコノミーの読み方であり、4337 がエージェントボリュームで操作ごとのガスコストをサブセント以下に保つ *その* メカニズムである。

**シナリオ G — エージェントが x402 + 4337 を介して帯域外のオフチェーンアクションに支払う。** エージェントが有料 API を呼び出す。API は USDC 支払い指示とともに `HTTP 402` を返す。エージェントは必要な USDC を API 受信者に転送する UserOp を構築し、セッションキーで署名し、Bundler に提出し、オンチェーンの包含を待つ。API は [[agent-economy/x402-http-payment-overview|the x402 facilitator]] を介して支払いを検証し、再試行時にデータを返す。高速なファシリテーターを備えた Base 上のエンドツーエンドレイテンシは 1 秒を十分に下回る。エージェントは ETH を保持する必要がない。ユーザーの月次上限は検証時に強制される。これは 2026 の本番スタックにおける最も代表的なエージェント支払いフローである。

## 規制上のフレーミング · 記録上の署名者は誰か？

4337 アーキテクチャには微妙な規制上の帰結がある。EntryPoint コントラクトは、すべての UserOp で潜在的に異なる 3 つのアイデンティティを見る — *ルートオーナー*（SCW を制御するユーザー）、*セッション署名者*（この特定の UserOp に署名した鍵）、*Bundler / Paymaster*（それをオンチェーンに置き、支払ったエンティティ）である。ほとんどの管轄における既存の決済法および証券法は「1 人の人間、1 つの署名、1 つのトランザクション」を前提としており、この 3 アクターモデルにクリーンにマッピングするようには書かれていない。

組み込みウォレット運用者全体の現在のコンセンサスは、KYC/AML の目的では *ルートオーナー* を記録上の署名者として扱い、セッション署名者を OAuth スコープトークンに類似した内部権限アーティファクトとして扱うことである。それは、AP2のマンデート構造がユーザーを権限の源、エージェントを委任された執行者として扱う方法を反映している（[[agent-economy/ap2-overview|AP2 overview]] を参照）。それはまた、OCC の解釈レターと EU の MiCA がカストディアル vs セルフカストディアルなフローを扱う方法とも整合的である — それらは、誰が資金の無制約な移動を承認できるかを気にし、誰がスコープ付きのサブアクションに署名したかは気にしない。

未解決の問題は次のとおりである。セッションキーが誤ってトランザクションを行った場合のチャージバック / 紛争のメカニクス（[[agent-economy/visa-mastercard-agentic-commerce-pilots|the card networks address this differently]]）、Paymaster がユーザーではなくプラットフォームである場合の責任配分（ガスのスポンサーは代理関係を生むか？）、そして、チェーン A 上の Privy MPC ルートオーナーがチェーン B 上の Coinbase CDP ルートオーナーと同じ法人であるかどうかというクロスチェーンのアイデンティティ問題である。

より深い未解決問題は、セッション署名者の認証自体が規制対象アーティファクトになるかどうかである。AP2 マンデートは、規制当局または監査人が検査できる検証可能な認証情報として明示的に設計されている。4337 セッションキーはそうではない — それらは「このスコープはこのユーザー承認に対応する」という標準スキーマを持たない、バイトコードで強制される権限トークンである。落とし所として考えられるのは、上位層（AP2, ERC-7715）が規制対象の認証を運び、4337 は純粋な実行のまま留まるというものである。そのパターンは、OAuth スコープがユーザーに可視である一方で、その下の TLS セッションキーが運用上のものであり不可視である方法を反映する。規制当局が代わりにセッションキー層に直接手を伸ばそうとすると、組み込みウォレットスタックのコンプライアンスモデルは実質的に難しくなる。

## 競争上のポジション

ERC-4337 は基盤であり、製品ではない。競争マップはその上の層である：

- **ウォレット運用者**（[[agent-economy/privy-embedded-wallet-overview|Privy]]、[[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]、Alchemy、ZeroDev）は、UX、Bundler の信頼性、Paymaster の経済性で競争し、いずれも内部で 4337 を動作させている。[[agent-economy/embedded-wallet-network-effects-moat|The integrator moat]] が真の価値捕捉である。
- **Bundler 運用者**（Pimlico、Stackup、Alchemy、Etherspot）は薄く集中した市場である — 3 ～ 5 のプレーヤーがほとんどのボリュームを扱う。これは最も引用される中央集権化リスクである。4337 へのエージェントエコノミーの負荷はそれをさらに鋭くするだけである。
- **Paymaster 運用者** は今日 Bundler 運用者と大きく重複し、加えてプラットフォーム所有の Paymaster（Privy 経由の Stripe、AgentCore Payments モジュール経由の AWS、x402 受信者向けの Cloudflare）がある。
- **上位層プロトコル**（[[agent-economy/erc-7715-overview|ERC-7715]]、[[agent-economy/ap2-overview|AP2]]、[[agent-economy/x402-http-payment-overview|x402]]）は 4337 をコモディティインフラとして扱う。それらはユーザー向けセマンティクスを指定し、4337 は実行を指定する。

最も重要な戦略的事実：4337 はエージェントフレンドリーなアカウントへの *唯一の* 経路ではない。[[systems/erc-7702-overview|ERC-7702]]（Pectra 以降メインネットで稼働、2025-05）は、異なる経路で EOA を同じ場所に到達させる。両者は共存し、しばしば一緒に使われる — 多くの本番スタックは今や、同じ下流のエージェント実行セマンティクスを持つ「4337 SCW または 7702委任 EOA のいずれか」をユーザーの選択として出荷する。詳細な区分は [[systems/erc-7702-vs-erc-4337|the 7702 vs 4337 comparison]] にあり、7702 経路のエージェントの読み方は [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|the ERC-7702 agent primer]] にある。

## 関連項目

- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/erc-7715-overview|ERC-7715 · ウォレット Permissions overview]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 + agent payment stack]]
- [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 EOA delegation primer for agents]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|Seven-protocol layer table]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded ウォレット overview]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/embedded-wallet-network-effects-moat|Embedded ウォレット network effects moat]]
- [[systems/erc-4337-overview|ERC-4337 systems overview]]
- [[systems/erc-4337-userop-bundler-flow|UserOp / Bundler flow]]
- [[systems/erc-7702-vs-erc-4337|ERC-7702 vs ERC-4337]]
- [[systems/INDEX|systems index]]

## 出典

- ERC-4337 EIP — `eips.ethereum.org/EIPS/eip-4337`。
- ERC-4337 リファレンスサイト — `erc4337.io`。
- "ERC-4337: Account Abstraction Without Ethereum Protocol Changes" — オリジナルの ethresear.ch 提案スレッド。
- Privy 組み込みウォレットドキュメント — `docs.privy.io`。
- Coinbase CDP 開発者プラットフォームドキュメント — `docs.cdp.coinbase.com`。
