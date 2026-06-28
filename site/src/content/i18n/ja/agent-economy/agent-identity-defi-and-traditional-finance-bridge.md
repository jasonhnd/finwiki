---
source: agent-economy/agent-identity-defi-and-traditional-finance-bridge
source_hash: f384c0641014dbb1
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "DeFiと伝統的金融を橋渡しするエージェントアイデンティティ · KYA、Skyfire、Lit PKP、mDL、MiCA、GENIUS"
translated_at: 2026-06-26T08:27:56.295Z
---
# DeFiと伝統的金融を橋渡しするエージェントアイデンティティ · KYA、Skyfire、Lit PKP、mDL、MiCA、GENIUS

## 要約

2026 におけるエージェントアイデンティティは、**DeFiネイティブなプリミティブ**（スマートコントラクトウォレット、オンチェーンのアテステーション、Lit PKPのしきい値鍵またはセッション鍵で制御されるERC-4337 ／ERC-7702 ウォレット）と、**伝統的なデジタルアイデンティティのプリミティブ**（mDL ISO/IEC 18013-5 モバイル運転免許証、EU eIDAS 2.0 ＋ EUDI ウォレット、米国REAL ID＋州発行のモバイルID、WebAuthn／FIDO2 パスキー）との**橋渡しに位置する**。台頭しつつあるコンセンサスは**層状のアイデンティティモデル**である。**人間であるオーナー**は伝統的なeID（eIDAS／mDL／パスキー）を保持し、**エージェント**は、検証可能なクレデンシャルチェーンを通じて人間の主要なアイデンティティへとひも付く、派生した**暗号学的アテステーション**（Skyfire型のアイデンティティプロバイダによる発行者バインド、もしくはLit PKPによるしきい値署名、もしくはERC-7702 下でのEOA委任、もしくはERC-7715下でのスコープ付与）を携える。**「Know Your Agent」（KYA）フレームワーク**は、KYCの規制適応として提案されているものである。すなわち「人間の顧客が誰かを知る」のではなく、**誰がこのエージェントを、どのようなスコープで、どのような失効パスを伴ってデプロイしたか**を知る、というものである。**GENIUS Act**（米国、2025-2026 ステーブルコイン枠組み）と**MiCA**（EUステーブルコイン規制、2024-2025に完全施行）はいずれも直接的な含意を持つ。ステーブルコイン発行者および暗号資産サービスプロバイダは、エージェント駆動のフローにKYC/AMLを適用しなければならず、これがエージェントアイデンティティ標準化の問いを突きつける。Googleの AP2 から **AAIF（Agentic AI Identity Federation）** への 2026-Q2  FIDO Alliance の引き継ぎは、これらの糸が収束する業界標準の場となる可能性が高い。

## ウィキ上の位置づけ

このエントリは [[agent-economy/INDEX|agent-economy index]] の下にある。アイデンティティがはまり込むプロトコルスタックについては [[agent-economy/agent-payment-protocol-four-way-comparison-2026|agent payment protocol four-way comparison]] と、支出／失効のペアリングについては [[agent-economy/agent-custody-and-authorization-framework-2026|agent カストディ and authorization framework]] と、発行者レベルのアイデンティティの典型例については [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop 発行会社]] と、しきい値暗号によるカストディパターンについては [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]] と、ウォレット基盤については [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer]] および [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 primer]] と、ウォレットの権限スコープについては [[agent-economy/erc-7715-overview|ERC-7715 overview]] と、カードネットワークのTrusted Agent Protocolの文脈については [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]] と照らし合わせて読むこと。規制面の枠組みについては [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]] および [[fintech/genius-act-501-actual-implementation|GENIUS Act 501 implementation]] ＋ [[fintech/mica-overview|MiCA overview]] を参照。伝統的アイデンティティの文脈については [[security/forensic-identity-anchor-chain|forensic identity anchor chain]] を参照。

## 「エージェントアイデンティティ」が実際に意味するもの · 5つの層エージェントアイデンティティは5つの層からなる複合体であり、ベンダーのマーケティングではしばしば混同される。

1. **暗号鍵マテリアル** — エージェントがトランザクションに署名するために使う秘密鍵（またはしきい値シェア）。Lit PKP、Privy MPC、Magic埋め込み、Coinbase CDP上に存在することもあれば、ユーザーのEOAから委任されたセッション鍵として存在することもある。
2. **オンチェーンアドレス／スマートコントラクトアカウント** — エージェントの資金を保持し、スコープ付き権限の対象となる公開アドレスまたはスマートコントラクトアカウント。通常はERC-4337  SCWまたはERC-7702委任されたEOA。
3. **認可スコープ** — エージェントが何を、いつ、どのような支出上限で行ってよいか。ERC-7715 権限、AP2 mandate VC、またはSkyfire発行者の台帳エントリにエンコードされる。
4. **アイデンティティアテステーション** — エージェントの鍵／アドレスを現実世界のオーナー（人間ユーザー、企業、または機関デプロイヤー）にひも付ける、検証可能なクレデンシャルまたは署名済みクレーム。例：Skyfire発行のエージェントアイデンティティ、Visa Trusted Agent Protocolアテステーション、AP2 mandate VC、AAIFアサーション。
5. **規制バインディング** — アテステーションを規制対象エンティティへと結びつける、デプロイヤー／発行者レベルの法的／KYC／AML記録。ここがKYAフレームワークの動作する場所である。

各層は独立に実装できる。本番のエージェントアイデンティティスタックは**各層から1つずつ**を選んで組み合わせる。これらを混同するとアーキテクチャ上の混乱を生む。下記のマトリクスは設計空間を切り分ける。

## Know Your Agent（KYA）フレームワーク · KYCの規制適応

**KYAフレームワーク**は、自律エージェントへのKYCの規制適応を指す 2025-2026 業界用語である（いまだどこでも正式な規制ルールにはなっていない）。中核となる命題は以下のとおり。

| KYCの問い | KYAでの相当 |
|---|---|
| この口座を開設する自然人は誰か？ | このエージェントのデプロイヤー（人間／企業／機関）は誰か？ |
| どのような本人確認書類か？ | エージェントの鍵をデプロイヤーにひも付けるアイデンティティアテステーションチェーンは何か？ |
| 資金源は何か？ | デプロイヤーの資金源は何で、どのような支出上限／スコープが認可されたか？ |
| 口座の目的は何か？ | エージェントのスコープ（許可されたマーチャント、許可されたアクション、時間制限）は何か？ |
| 継続的モニタリング | エージェントの挙動の継続的モニタリング＋失効インフラ |

**KYA推進派**には、FIDO Alliance（AAIFフレームワーク経由）、Skyfire（アイデンティティ発行台帳を明示的にKYA互換システムとして構築した）、Mastercardのエージェント型コマースのパイロット、そしてFATF VASPガイダンス（2024-2025 の更新では、エージェントの制御者が規制対象当事者であるという原則を通じて「自動化エージェント」を間接的に論じている）が含まれる。

**KYA懐疑派**は、KYAはデプロイヤーのKYC＋通常の支出モニタリングにすぎず、新たな規制フレームワークは不要だと主張する。FSA、FCA、MASの公的声明からうかがえる 2026  兆候は次のとおりである。原則レベルでは懐疑派が優勢だが、運用上の要件（デプロイヤーを検証し、エージェントをデプロイヤーにバインドし、モニタリングする）こそ、実際には推進派が唱えているものである。両者は実質では一致し、ラベルで意見が割れている。

## Skyfire · 発行者レベルのエージェントアイデンティティ（典型例）

**Skyfireのモデル**：規制対象のカード発行プラットフォーム（Stripe IssuingやMarqetaに類似）として振る舞い、「カード保有者」が自律エージェントである、というもの。Skyfireは：

- 標準的な銀行スポンサーのBINプログラムライセンスの下で、**デプロイヤー（人間ユーザーまたは企業）のKYC**を行う
- 支出上限、マーチャントカテゴリ制限、時間ウィンドウを備えた仮想カードにひも付く**一意のエージェントアイデンティティを発行する**
- すべてのエージェントトランザクションを完全な監査証跡とともに記録する**台帳を運用する**
- PCI-DSS、AMLモニタリング、OFACスクリーニング、および銀行スポンサーの全体的なライセンスの下で**規制対象当事者として振る舞う**

Skyfireのアイデンティティは**発行者レベル**である。エージェントはSkyfireの名前空間内で安定したアイデンティティを持ち、Visaのレールを介してマーチャントにアテステーションされる。マーチャントは新たなアイデンティティスタックを統合する必要がない — 通常のVisa仮想カードトランザクションとして見える。KYA相当の検証は、カードに資金が供給される前にSkyfire側で行われる。

Skyfireは**Visa Trusted Agent Protocol（VTAP）の初期**発行者の一つであり、これは（匿名のカードフローとして扱うのではなく）検証を選んだマーチャントにエージェントアイデンティティが提示する暗号学的アテステーションを標準化するものである。完全な事例については [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop 発行会社]] を、VTAPの枠組みについては [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]] を参照。

## オンチェーンのエージェントアイデンティティ · 3つのパターン

### パターン 1  · Lit PKPしきい値鍵アイデンティティエージェントのアイデンティティ＝NFTで制御されるPKPで、そのしきい値鍵はLitネットワークノード全体に分散される。エージェントの権限はTEE内で動作する **Lit Actions**（JavaScriptポリシー）によってバインドされる。KYAバインディングは、PKP NFTのミントを、それ自体がKYC済みデプロイヤーにバインドされたアドレス（Privy／Magic／Coinbase CDP経由）によって制御させることで達成される。デプロイヤーはNFTを移転または焼却することで、PKP権限を付与または失効できる。

**利点**：単一サーバーのカストディリスクがない、オンチェーンの透明性、クロス管轄での耐性。
**欠点**：Litネットワークのスループット（100-500msの署名レイテンシ）、集中型カストディよりも難しいSOC 2 監査ストーリー。

[[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]] を参照。

### パターン 2  · EOA＋ERC-7702 ＋WebAuthnパスキー委任ユーザーの既存のEOA（MetaMask、ハードウェアウォレット）が、**ERC-7702**のトランザクションスコープ認可を介してエージェントに委任する。委任に対するユーザーの認証は **WebAuthnパスキー**（FIDO2 ／iOS／Android／Yubikey）に固定される。エージェントはその後、有効期限までは委任されたスコープ内で動作する。

**利点**：約 150M の既存EOAウォレット基盤を活用できる（Pectra後 2025-Q2）。銀行が顧客認証ですでに使っている既存のWebAuthn／FIDOインフラと組み合わせられる。
**欠点**：スコープの表現力がERC-7702 ＋ERC-7715によって制限される。鍵の失効はエージェント単位ではなく委任単位。

[[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 EOA delegation primer]] および [[agent-economy/erc-7715-overview|ERC-7715 overview]] を参照。

### パターン 3  · セッション鍵付きERC-4337  SCW

ユーザーがスマートコントラクトウォレット（Coinbase Smart ウォレット、Safe、Biconomy、ZeroDev）を持つ。エージェントは、限定された時間／金額／マーチャント集合に対して有効な、スコープ付き権限を持つ**セッション鍵**を取得する。セッション鍵はエージェント（ユーザーのデバイス上、またはクラウドTEE内で動作しうる）が保持する。

**利点**：最も成熟したオンチェーンパターン（ERC-4337 は 2023 から稼働中）。スコープの表現力が高い。失効はオンチェーンで安価。
**欠点**：ユーザーがSCWを持っている必要がある（今日では支配的なウォレット形態ではないが成長中）。ERC-4337 バンドラーインフラへの依存。

基盤については [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer]] および [[systems/erc-4337-overview|ERC-4337 overview]] を参照。

## 伝統的なデジタルアイデンティティのプリミティブ · エージェントが橋渡しする元

### eIDAS 2.0 ＋EUDI ウォレット（EU）

EUの **eIDAS 2.0  規則**（2024）は、すべてのEU加盟国が 2026 までに市民へ提供しなければならない **European Digital Identity ウォレット（EUDI ウォレット）** を義務付ける。EUDI ウォレットは検証可能なクレデンシャル（W3C VC）、モバイル運転免許証（mDL ISO/IEC 18013-5）、適格電子署名をサポートする。AP2 ／AAIF mandate VCは、EUDI ウォレットスタックと意図的に互換性を持つように設計されている — EU市民のEUDI署名されたエージェントmandateは、認可の証明としてマーチャントに提示できる。

### mDL（ISO/IEC 18013-5） · モバイル運転免許証モバイル運転免許証の国際標準であり、いくつかの米国州（アイオワ、アリゾナ、メリーランドなど）、オーストラリア、そしてますますEUで展開されている。検証者に提示できる**暗号学的アイデンティティ**を提供する。エージェントアイデンティティにとって、mDLは「アンカー」の候補である — 人間のデプロイヤーのmDLが、VCチェーンを通じてエージェントのアテステーションにひも付く。

### WebAuthn／FIDO2 パスキー

パスワードレス認証のためのブラウザ／OS標準。銀行やフィンテックは顧客認証にパスキーを広く使っている。エージェントアイデンティティにとって、FIDO2 パスキーは、ユーザーがエージェントにスコープを付与する際の**人間側の認証**として使われる（例：ERC-7715 権限を認可するにはユーザーがパスキーで確認する必要がある）。FIDO AllianceによるAP2 →AAIFの引き継ぎ（2026-Q2）は、この糸をエージェントアイデンティティ標準化へと直接拡張する。

### 米国REAL ID＋州モバイルID

米国にはEU型の中央集権的デジタルアイデンティティはないが、REAL IDコンプライアンスは連邦の検証目的のために 2025  5月から必須となる。いくつかの州（アリゾナ、メリーランド、アイオワ、ハワイ）はmDL互換の州モバイルIDを発行している。断片化した米国のアイデンティティ環境は、EUよりもエージェントアイデンティティの標準化を難しくしている。

### シンガポールSingPass、インドAadhaar／UPI、日本My Number／マイナンバー

さまざまなスコープを持つ国家デジタルアイデンティティプログラム。インドのAadhaar（1.3B人超が登録）＋UPIアカウントアグリゲーターフレームワークが最もエージェントフレンドリーである。アカウントアグリゲーターのアーキテクチャは本質的にエージェント駆動のアクセスと組み合わせられる。シンガポールのSingPassはFIDO互換。日本のマイナンバーはマイナポータルを通じてFIDO＋WebAuthn統合を拡大しているが、まだエージェント委任のユースケース向けには構成されていない。

## 規制上の含意 · GENIUS Act＋MiCA

### 米国GENIUS Act（2026 ステーブルコイン枠組み）

**GENIUS Act**（Guiding and Establishing National Innovation for U.S. Stablecoins）— 2025,  成立、実装ルールは 2025-2026  — は、ステーブルコイン発行者がすべてのフローにBSA/AMLコンプライアンスを適用することを求める。エージェントアイデンティティへの含意：

- ステーブルコイン発行者（Circle、Paxos、Tether-US）は、オンボードする当事者をKYCしなければならない
- エージェントがステーブルコイン残高を保持する場合、そのエージェントの制御者は発行者または発行者のカストディアンによってKYCされなければならない
- Skyfire発行者モデルはきれいに当てはまる（SkyfireがKYC済み当事者で、エージェントが継承する）
- オンチェーンのLit PKP／ERC-4337 モデルは、制御するEOA／デプロイヤーのKYCを要し、エージェントのトランザクションをモニタリングする必要がある

より広範な枠組みについては [[fintech/genius-act-501-actual-implementation|GENIUS Act 501 implementation]] および [[fintech/genius-act-501-denylist-mandate|GENIUS Act 501 denylist mandate]] を参照。

### EU MiCA（暗号資産市場規則、2024-2025に施行）

**MiCA**は、暗号資産サービスプロバイダ（CASP）とステーブルコイン発行者（EMT／ART発行者）を分類する。エージェントアイデンティティへのMiCAの含意：

- CASPは、エージェントによって開始されたものを含め、暗号資産の移転にトラベルルール＋KYCを適用しなければならない
- Ethereum上の自律的なEOAとして動作するエージェントは、MiCA規制対象CASPが関与するいかなるフローについても、KYC済みの制御者にリンクされなければならない
- **EUDI ウォレット**＋**mDL**＋**W3C VC**スタックは、制御者アテステーションチェーンのためのEUの推奨基盤である
- AAIF（FIDO Alliance）は、MiCA＋eIDAS 2.0  要件と互換になるよう設計されつつある

[[fintech/mica-overview|MiCA overview]] および [[fintech/mica-cross-border-implications|MiCA cross-border implications]] を参照。

### 日本FSA · 居住者境界のアイデンティティ日本のステーブルコイン規制（資金決済法、2023  6月改正）は、ステーブルコイン発行者と仲介者に保有者の特定を求める。エージェントについては、これはエージェントの制御者が標準的な犯罪収益移転防止法の下でKYCされなければならないことを意味する。FSAはエージェント固有のガイダンスを公表していないが、運用上の期待は**デプロイヤーのKYC＋エージェント活動のモニタリング**である。居住者境界については [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape]] を参照。

### FATFトラベルルール（グローバル）

FATF勧告 16  は、VASPに、しきい値を超える暗号資産移転について送金人＋受取人の情報を送信することを求める。エージェントについては、FATFガイダンスは、トラベルルール目的上、制御者が規制対象当事者である非自然人としてエージェントを扱う。[[fintech/fatf-travel-rule-overview|FATF travel rule overview]] および [[fintech/fatf-travel-rule-cross-border-stack|FATF travel rule cross-border stack]] を参照。

## アイデンティティアテステーションマトリクス · 各アプローチが規制スロットをどうマッピングするか

| アプローチ | 暗号鍵 | オンチェーンアドレス | 認可 | アテステーション | 規制バインディング | KYA適合 |
|---|---|---|---|---|---|---|
| **Skyfire（発行者モデル）** | Skyfire保持＋HSM | 仮想カードBIN | Skyfire台帳エントリ | Skyfire発行＋VTAP | 銀行スポンサーBINプログラム | 高（組み込み） |
| **Lit PKP＋KYC済み制御者** | Litしきい値 | PKP NFTがSCWを制御 | Lit Actionポリシー | KYCプロバイダからのオフチェーンVC | デプロイヤーが規制される対象 | 中（手動バインディング） |
| **ERC-7702 ＋WebAuthn＋AP2** | ユーザーEOA | ユーザーEOA＋委任 | ERC-7715 権限 | AP2 mandate VC＋AAIF | 発端CASP／銀行でのユーザーKYC | 高（AAIF成熟を前提に） |
| **ERC-4337  SCW＋セッション鍵** | ユーザーSCW＋セッション鍵 | SCWアドレス | セッション鍵スコープ | 該当する場合は発行者VC | 発端CASP／ウォレットでのユーザーKYC | 中〜高 |
| **Privy／Magic／CDP（集中型埋め込み）** | カストディアン保持MPC | ユーザーSCWアドレス | アプリレベルのスコープ | カストディアンKYC | カストディアンの規制ラッパー | 高（規制対象当事者としてのカストディアン） |

## 構成に関する推奨 · 2026



**コンシューマ向けエージェント決済**の場合：埋め込みウォレット（Privy／Coinbase CDP／Magic）の上にパターン 3 （ERC-4337  SCW＋セッション鍵）を載せるのが支配的な本番パターンである。KYAバインディングは埋め込みウォレットの既存KYCスタックを通じて達成される。明示的なエージェントアテステーションを望むマーチャント向けには、AAIF／AP2 mandate VCを重ねられる。[[agent-economy/privy-embedded-wallet-overview|Privy embedded ウォレット]] および [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] を参照。

**エンタープライズ／機関のエージェント決済**の場合：Skyfire（発行者モデル）またはStripe Agent Toolkit＋Stripe Issuingが支配的である。KYAバインディングは発行者の規制対象活動に組み込まれている。[[agent-economy/stripe-agent-toolkit-position|Stripe agent toolkit position]] を参照。

**ポリシーバインドのカストディを要する自律／長時間稼働エージェント**の場合：パターン 1 （Lit PKP＋しきい値）が本番で実証済みの選択肢である。KYAバインディングには明示的なデプロイヤーKYC＋PKP NFT制御者へのリンクが必要。

**eIDAS 2.0  コンプライアンスを要するEU居住者**の場合：パターン 2 （ERC-7702 ＋WebAuthn＋AP2 ／AAIF＋EUDI ウォレット統合）が方向性である。EUDI ウォレットの展開完了後 2027  に完全な成熟が見込まれる。

## 出典

- Skyfire ウェブサイトおよびドキュメント（skyfire.xyz）
- Lit Protocol ウェブサイトおよび開発者ドキュメント（litprotocol.com）
- ERC-4337  EIP最終版（eips.ethereum.org/EIPS/eip-4337）
- ERC-7702  EIP最終版（eips.ethereum.org/EIPS/eip-7702）
- FIDO Alliance ウェブサイトおよびAAIF発表（fidoalliance.org）
- W3C WebAuthn仕様（w3.org/TR/webauthn）
- ISO/IEC 18013-5  モバイル運転免許証標準（iso.org）
- EU Digital Identity Wallet ポリシーページ（digital-strategy.ec.europa.eu）
- EU MiCA規則 2023/1114 （eur-lex.europa.eu）
- 米国GENIUS Act（congress.gov H.R. 4763）
- Visa エージェント型コマースページ（visa.com）
- Mastercard プレスリリース（mastercard.com）

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/agent-payment-protocol-four-way-comparison-2026|agent payment protocol four-way comparison]]
- [[agent-economy/agent-custody-and-authorization-framework-2026|agent custody and authorization framework]]
- [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop issuer]]
- [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]]
- [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer for agents]]
- [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 EOA delegation primer]]
- [[agent-economy/erc-7715-overview|ERC-7715 overview]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]]
- [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]
- [[agent-economy/stripe-agent-toolkit-position|Stripe agent toolkit position]]
- [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]]
- [[agent-economy/llm-agent-finance-application-overview-2026|LLM agent finance application overview]]
- [[agent-economy/ai-driven-trading-regulation-japan-2026|AI-driven trading regulation Japan 2026]]
- [[fintech/genius-act-501-actual-implementation|GENIUS Act 501 implementation]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act 501 denylist mandate]]
- [[fintech/mica-overview|MiCA overview]]
- [[fintech/mica-cross-border-implications|MiCA cross-border implications]]
- [[fintech/fatf-travel-rule-overview|FATF travel rule overview]]
- [[fintech/fatf-travel-rule-cross-border-stack|FATF travel rule cross-border stack]]
- [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape]]
- [[security/forensic-identity-anchor-chain|forensic identity anchor chain]]
- [[systems/erc-4337-overview|ERC-4337 overview]]
- [[systems/erc-7702-overview|ERC-7702 overview]]
<!-- /wiki-links:managed -->
