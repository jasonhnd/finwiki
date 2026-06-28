---
source: agent-economy/visa-mastercard-agentic-commerce-pilots
source_hash: 327072d84be53b5f
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Visa Intelligent Commerce + Mastercard Agent Pay · カードネットワークのエージェンティックコマースパイロット"
translated_at: 2026-06-26T08:28:46.040Z
---

# Visa Intelligent Commerce + Mastercard Agent Pay · カードネットワークのエージェンティックコマースパイロット

## 要約

Visa Intelligent Commerce(2024年Q4, 発表、2025年に Trusted Agent Protocol で拡張)と Mastercard Agent Pay(2025年初頭発表)は、[[agent-economy/x402-http-payment-overview|x402]]、[[agent-economy/ap2-overview|AP2]]、[[agent-economy/erc-7715-overview|ERC-7715]] がオープンプロトコル側から答えているのと同じ問題に対するカードネットワークの回答である:AI エージェントは、証明可能な認可を伴い、マーチャントが実際に受け入れられる形で、どうやってユーザーに代わって支払うのか? カードネットワークの賭けは、**彼らが既に運営している閉ループレール** — トークン化、ネットワーク側のリスクスコアリング、チャージバック／紛争の仕組み、発行体の不正責任シフト — こそがオープンプロトコルスタックに欠けている要素そのものであり、それらのレールをエージェンティックコマース API でラップするほうが、ステーブルコインレールがチャージバックインフラをゼロから育てるのを待つより速い、というものである。パイロットは、エージェント固有のトークンタイプ、エージェント証明ヘッダー、そして(Visa の場合)オープンプロトコルのマンデートを閉ループネットワークに橋渡しする Google の AP2 との公開パートナーシップで拡張された既存のカードオンファイルプリミティブ上でルーティングする。競争上のテーゼ:エージェンティックコマースは1つのネットワークにはならない。それは、オープンプロトコルトラック(x402 + AP2 + ERC-7715 + ステーブルコイン、出荷は遅く、安価で、消費者保護は弱い)と並走する閉ループカードトラック(Visa + Mastercard、出荷は速く、高価で、消費者保護は高い)であり、時間とともにほとんどのエージェントが正しい取引を正しいトラックにルーティングすることを学ぶだろう。

## ウィキ上の位置づけ

このエントリは、エージェント決済の競争環境のカードネットワーク的読み解きとして [[agent-economy/INDEX|agent-economy index]] の下に位置する。[[agent-economy/ap2-overview|AP2]](Visa が公にパートナーシップを結んだ)、[[agent-economy/ap2-adoption|AP2 adoption landscape]](既に Visa の角度をフラグしている)、[[agent-economy/x402-http-payment-overview|x402]](Visa Intelligent Commerce が明示的に競合しているオープンプロトコルの相手方)、[[agent-economy/stripe-agent-toolkit-position|the Stripe Agent Toolkit position]](Stripe Issuing を介して両陣営にまたがる)と照らし合わせて読むこと。より広範なシステム／規制境界については [[fintech/INDEX|fintech index]] と [[payments/INDEX|payments index]]。

## 仕組み · Visa Intelligent Commerce

Visa Intelligent Commerce は Visa のエージェントコマースイニシアチブをカバーする包括的プログラムである。2つの中核要素:

**Visa Trusted Agent Protocol。** 取引が既知のカード保有者に代わって動作する AI エージェントによって認可されたことを検証するための署名済みクレデンシャル形式。このプロトコルは、Visa の既存のトークン化スタック(Apple Pay, Google Pay, click-to-pay などで既に16桁の PAN をマーチャント固有のトークンに置き換える Visa Token Service)を、以下を運ぶ新しいトークンタイプに拡張する:

- 基盤となるカード保有者のアイデンティティ(VTS 経由)、
- エージェント証明 — どのエージェントプラットフォームがリクエストを発行したか、そのスコープは何か、ユーザーがいつ認可したか、
- Visa のネットワークが標準の不正モデルに対してスコアリングできる取引単位のリスクシグナル、
- AP2 マンデートへのオプションの参照(Visa は2025年に AP2 相互運用性を公にコミットした)。

取引は標準の Visa レール上を流れる — 発行体、ネットワーク、アクワイアラー、マーチャントを経由する — が、すべてのホップがそれがエージェント取引であることを知っており、異なるルール(異なるベロシティ制限、異なる不正しきい値、異なる紛争デフォルト)を適用できる。

**公開 AP2 パートナーシップ。** Visa は [[agent-economy/ap2-overview|Google's AP2]] のローンチにおける指名パートナーの1つであり、Visa は Trusted Agent Protocol を AP2 マンデートと*双方向に相互運用可能*にすることをコミットした — Google/Gemini エージェントからの AP2 マンデートは Visa ネットワーク内で Trusted Agent 証明として検証でき、Visa 発行の証明は AP2を話すマーチャントで AP2 マンデートを満たすことができる。これは閉ループカードトラックとオープンプロトコルトラックの間の最も具体的な公開ブリッジである。

## 仕組み · Mastercard Agent Pay

Mastercard Agent Pay は構造的に類似しているが、異なる強調点を持つ。その形:

**トークン化拡張。** Visa と同様、Mastercard は既存のトークン化サービス(Mastercard Digital Enablement Service、MDES — Mastercard 上の Apple Pay / Google Pay を駆動するのと同じエンジン)をエージェント固有のトークンタイプで拡張する。トークンは特定のエージェントによる使用のために発行でき、マーチャントカテゴリコード制限、取引単位のベロシティ上限、有効期限を持つ。単回使用カードのようだが、暗号的なエージェント証明が組み込まれている。

**Agentic Tokens + Smart Data。** Mastercard はトークンを豊かな取引メタデータ(マーチャントアイデンティティ、利用可能な場合はアイテムレベルの記述子、紛争に関連するコンテキスト)とペアにし、エージェント取引から生じる紛争が通常のカード取引よりも多くのコンテキストで裁定できるようにする。製品のフレーミング:「エージェントの取引理由は取引記録の一部である」。

**発行体側の統制。** 発行銀行は、既存のカード管理スタックにエージェント固有の認可ルールを追加することで Agent Pay を統合する。ユーザーは銀行アプリ経由で「以下の AI エージェントがこのカードで支出する認可を持っている」を、エージェント単位のスコープとキルスイッチとともに確認できる。

**2026年半ば時点で公開 AP2 コミットメントなし。** Mastercard の表明された姿勢は、複数のエージェント証明プロトコル(支配的になれば AP2、そうでなければ代替)をサポートするというものだが、Visa と同じ規模の公開 AP2 パートナーシップ発表は行っていない。これは2つのネットワークの戦略的ポジショニングの最も目に見える違いである。

## 仕組み · カードネットワークレールがオープンプロトコルにはないものをエージェントにもたらすもの

カードネットワークのパイロットの戦略的論理は、オープンプロトコルスタック([[agent-economy/x402-http-payment-overview|x402]] + USDC、[[agent-economy/erc-7715-overview|ERC-7715]] + 4337, など)が、カードネットワークが構築するのに数十年かかった4つの制度的能力を欠いているというものである:

**チャージバックと紛争解決。** エージェントが誤って取引した場合 — 誤ったマーチャント、誤った金額、プロンプトインジェクション、ソーシャルエンジニアリングの被害 — ユーザーには資金を取り戻す方法が必要である。カードには、成文化された理由コード、規制されたタイムライン、不正に対する発行体側の責任、マーチャント側の文書化要件を備えた50年超のチャージバックインフラがある。オンチェーンスタックには同等のものがない。カードネットワークの売り込み:「エージェントにカードで取引させれば、そのすべてを継承する」。

**発行体側の不正責任シフト。** 既存のカードネットワークルールのもとでは、発行体は特定カテゴリの不正取引に責任を負い、マーチャントは他のカテゴリに責任を負う。エージェント取引は新しい問い — エージェントがプロンプトインジェクションされたとき誰が責任を負うのか? — を生み、カードネットワークはパイロットを使ってその答えを、自らに有利でユーザーを保護する形で書こうとしている。オンチェーンスタックはいずれ同じ問いに答える必要があるが、現在は答えていない。

**ネットワーク側のリスクスコアリング。** Visa と Mastercard は、数百億件の取引を見てきた機械学習不正モデルを通じてすべての取引を処理する。エージェント取引は同じスコアリングを通過する。ネットワークは、マーチャントやユーザーを巻き込まずに、認可ステップでリアルタイムに疑わしいエージェントアクティビティを拒否できる。オンチェーンには同等のネットワークアクターがいない。リスクはユーザーのウォレットかマーチャントで強制されなければならず、いずれも自分の一部しか見ない。

**受容性。** Visa と Mastercard は数千万のマーチャントに受け入れられている。USDC は今日ずっと小さなセットに受け入れられている。成長は本物だがギャップは大きい。従来のマーチャントを対象とするエージェント取引(これが今後数年間の対応可能市場の大半である)にとって、カードネットワークは実際に大規模に機能する唯一の経路である。

## エージェント固有のシナリオ

**シナリオ A — エージェントがカードホールドを要求するレストラン予約を行う。** オープンプロトコルは今日これができない。ホールドのために USDC を受け入れるレストランはほぼない。カードネットワークパターン:エージェントが Trusted Agent / Agent Pay API を呼び出し、マーチャント ID にスコープされ、$200 の上限を持ち、48 時間有効な単回使用トークンをミントする。マーチャントはトークンに対してホールドを行う。ユーザーが現れればマーチャントはホールドを解除して実際の請求を実行する。ユーザーがノーショーならマーチャントはホールドをキャプチャする。紛争の仕組みは標準のカードネットワークである。

**シナリオ B — エージェントがステーブルコインを受け入れないストリーミングサービスに加入する。** 上記と同じパターンだが、経常認可を伴う。トークンは経常的で、マーチャントにスコープされ、ユーザーの月次上限を持つ。ストリーミングサービスが価格を引き上げた場合、ネットワークはエージェントが知る必要なく認可時に上限超過取引を拒否できる。

**シナリオ C — エージェントがユーザーが制限としてフラグしたカテゴリで取引する。** ユーザーは発行体アプリ経由で「エージェント経由のギャンブル、アルコール、アダルトコンテンツは不可」を設定する。発行体側の統制は、エージェントが自分が何をしていると思っているかにかかわらず認可時にこれを強制する — 拒否はネットワークレール上で起こる。マーチャント側の協力なしには、オープンプロトコルスタックに同等の強制は存在しない。

**シナリオ D — エージェント取引が後でユーザーによって争われる。** ユーザーが「このマーチャントで$500 を支出することをエージェントに認可した覚えはない」と言う。カードネットワークのチャージバック経路:ユーザーが発行体に紛争を申し立て、発行体が Trusted Agent / Agent Pay 証明、(添付されていれば)AP2 マンデート、マーチャントの文書を引き出す。エージェント証明を新しい証拠タイプとして、標準の理由コード裁定が適用される。オープンプロトコルの同等物:存在しない — オンチェーン取引は最終的である。一部の [[agent-economy/erc-7715-overview|ERC-7715]] 提案はオプションのエスクロー／可逆性ウィンドウを議論しているが、何も標準化されていない。

**シナリオ E — エージェントが通貨換算を伴い国際的に取引する。** カードネットワークは、規制された FX 開示と(一部の法域では)規制された最大 FX マークアップを備えた Visa/Mastercard クロスボーダーインフラを通じて FX を処理する。エージェントは USD で API を呼び出し、マーチャントは現地通貨で受け取り、ネットワークが換算を処理してレートを開示する。オンチェーンの同等物:エージェントはアグリゲーター経由でステーブルコイン間を行うが、FX 開示はエージェントプラットフォームの責任であり、まだ規制上のベースラインはない。

**シナリオ F — エージェントが複数ユーザーにわたって支払いを分割する(共同購入、共有サブスクリプション)。** カードネットワークパターン:エージェントが複数のカードに対して複数の Trusted Agent トークンを発行し、それぞれがユーザー個別の上限を持つ。ネットワークは各レグを記録上のマーチャントに対して独立に決済する。オープンプロトコルの同等物はオンチェーンで機能するが、レグ単位の紛争経路を失う。

## 規制のフレーミング · 閉ループネットワークルール vs オープンプロトコルのフリーランスカードネットワークは、オープンプロトコルスタックが本当に持っていない規制のフレーミングのもとで運営されている:

**ネットワークルールは準規制的である。** Visa Core Rules、Mastercard Rules、およびそれらが実装する Reg E / PSD2 / 同等のフレームワークは、規制されたコマースのエンベロープを作る。良好な状態にあるすべてのマーチャントは、ネットワークが受容性の喪失をちらつかせて強制する一連の義務(紛争対応タイムライン、証拠形式、禁止カテゴリ)に同意している。エージェンティックコマースをこのエンベロープ内にラップすればエンベロープを継承する。オープンプロトコルスタックは同等の強制をゼロから構築しなければならない。

**発行銀行の責任。** カードは銀行として規制される銀行によって発行される。銀行発行体は、定義された方法で不正取引を処理する明示的な義務(米国の Reg E、EU の PSD2 )を持つ。不正として争われるエージェント取引はそれらの義務を継承する — *銀行*が、定義されたタイムライン内でユーザーを補償しなければならない規制対象当事者である。これは「あなたのウォレットのスマートコントラクトはウォレットベンダーが書いたロジックを持つ」よりも意味のある強力な消費者保護である。

**クロスボーダーの規制連続性。** カードネットワークは、法域横断的にきれいに翻訳される二国間および多国間条約(EU のインターチェンジ規制、どこでも AML/CFT ルール)のもとで運営される。ステーブルコインのエージェント取引はまだパッチワークの中にある — EU の MiCA、米国の GENIUS Act と OCC 解釈レター、[[fintech/japan-stablecoin-regulatory-landscape|JFSA's three-layer framework in Japan]]、そして他の場所ではずっと乱雑な状況。カードネットワークは既にクロスボーダーの法的作業をクリアしている。

**エージェント証明の問い。** 両ネットワークは「AI エージェントがユーザーが取引を認可したと証明することは法的に何を意味するのか?」に答えなければならない。どちらも完全には答えていないが、両者は規制当局(米 OCC、EU 委員会、英 FCA、シンガポール MAS)と協力して、証明を CVV チェックと強力な顧客認証シグナルの間のどこかにある認知された認可アーティファクトとして定義しようとしている。これはオープンプロトコルスタックもいずれ必要とする公法インフラの一部である。カードネットワークが先に構築している。

## 競争上のポジション

**vs [[agent-economy/x402-http-payment-overview|x402]] — 異なるコスト／消費者保護のトレードオフ。** x402 は取引あたり1セント未満、USDC 最終決済、チャージバックなし、ネットワーク層での不正防御は弱い。Visa Intelligent Commerce / Mastercard Agent Pay は取引あたり数十 bps から約3%で、紛争保護され、ネットワークで不正スコアリングされる。高額または記録上マーチャントの取引では、カードネットワークはコスト以外のあらゆる次元で勝つ。インフラ間のマイクロペイメントでは、カードの経済性が1ドル未満の取引をサポートしないため x402 が支配する。

**vs [[agent-economy/ap2-overview|AP2]] — Visa は橋渡しし、Mastercard はヘッジしている。** Visa の公開 AP2 パートナーシップは、閉ループとオープンプロトコルのトラックが*決済*層で分離したままでも*認可*層(AP2 マンデート)で相互運用するという最も強いシグナルである。Mastercard のマルチプロトコル姿勢は、AP2 の支配ではなく複数のエージェント証明プロトコルを予想していることを示唆する。相互運用性の物語は、エージェントエコノミーのアーキテクトにとって最も重要な二次的な問いである。

**vs [[agent-economy/stripe-agent-toolkit-position|Stripe Agent Toolkit]] — Issuing で重複。** Stripe Issuing は既に Toolkit 経由でエージェント向けの仮想カードをミントし、同じ Visa / Mastercard レールに乗っている。ネットワークの Intelligent Commerce / Agent Pay 層は Stripe Issuing の*下*に位置する — Stripe はネットワークのエージェントトークンインフラを使用する発行プログラムマネージャーである。したがって実際には、Stripe Agent Toolkit の Issuing 経路を通じたエージェント取引は、開発者がそれを見ることなく Trusted Agent Protocol / Agent Pay レールに乗っている可能性が十分にある。Stripe はディストリビューションで勝ち、ネットワークはインフラの経済性で勝つ。

**vs [[agent-economy/privy-aws-agentcore-default-wallet|Privy / AWS AgentCore]] — 直交する層。** Privy はウォレットである。AgentCore はエージェントホストである。カードネットワークは決済レールである。これらは構成される:エージェントは AgentCore 上で動作し、オンチェーンのために資金を Privy に保持し、オフチェーンのために Stripe 発行の Visa を使用する。直接の競争はない。

**vs JPMorgan Kinexys / 機関投資家向けレール。** 機関投資家向けレール(預金トークン、[[fintech/institutional-stablecoin-deposit-token-thesis|deposit-token thesis]]、許可型ブロックチェーン)は、開始者が人間かエージェントかに非依存である。なぜならそれらはずっと小さく、ずっと精査されたカウンターパーティセット上で運営されるからである。カードネットワークのエージェンティックパイロットは、カウンターパーティ精査が不可能でレールがネットワークで保護を強制しなければならないリテールと SMB を狙っている。異なる市場、異なる製品。

## 関連項目

- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|Seven-protocol layer table]]
- [[agent-economy/ai-agent-payment-protocols-commoditization|Agent payment protocols commoditization]]
- [[agent-economy/ap2-overview|AP2 overview]]
- [[agent-economy/ap2-adoption|AP2 adoption landscape]]
- [[agent-economy/ap2-technical-spec|AP2 technical spec]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 Cloudflare / AWS edge integration]]
- [[agent-economy/stripe-agent-toolkit-position|Stripe Agent Toolkit position]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded ウォレット overview]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore default ウォレット]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/embedded-wallet-network-effects-moat|Embedded ウォレット network effects moat]]
- [[agent-economy/ai-company-payment-landscape|AI company payment landscape]]
- [[agent-economy/erc-7715-overview|ERC-7715 ウォレット permissions]]
- [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer for agents]]
- [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 primer for agents]]

## 出典

- Visa コーポレートコミュニケーション — `corporate.visa.com`。
- Mastercard ニュースルーム — `mastercard.com/news`。
- Google AP2 仕様リポジトリ(パートナーリストに Visa を含む) — `github.com/google-agentic-commerce/AP2`。
- Visa Developer Center — `developer.visa.com`。
- Mastercard Developer — `developer.mastercard.com`。
