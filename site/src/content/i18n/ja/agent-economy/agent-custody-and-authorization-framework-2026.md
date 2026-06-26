---
source: agent-economy/agent-custody-and-authorization-framework-2026
source_hash: 61c64e87c0aa20a8
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "エージェントのカストディおよび権限付与フレームワーク · 2026-05 リファレンスアーキテクチャ"
translated_at: 2026-06-26T08:27:56.294Z
---
# エージェントのカストディおよび権限付与フレームワーク · 2026-05 リファレンスアーキテクチャ

## 要約

2026 におけるエージェントのカストディと権限付与は、**三軸の設計空間**へと収束した。(1) **カストディモデル** — 完全セルフカストディ（ユーザーが鍵を保持し、エージェントは独立した制御権を持たない）、ハイブリッド（Lit PKP の閾値方式、またはポリシーコード付きセッションキー）、または完全カストディアル（Privy / Magic / Coinbase CDP / Skyfire）。(2) **権限付与の粒度** — 単一取引（エージェントは行動ごとにユーザー承認を要求しなければならない）、時間制限（有効期限まで有効なスコープ）、金額制限（ローリングウィンドウ付きの支出上限）、支出ルール制限（許可されたマーチャント / カテゴリ / パターン）。(3) **失効メカニズム** — オンチェーン即時（権限 NFT のバーン、ERC-7715 グラントの失効）、オフチェーンのウォレット仲介（Privy 管理者による失効）、法的 / 契約上（Skyfire 発行体台帳のエントリ）。**伝統的な証券会社の限定的委任状（LPOA）** が教義上のアナログを提供する — 数十年にわたり、証券会社は投資顧問に対し、スコープ（資産クラス）、金額（規模上限）、失効（書面通知）、監査証跡（取引報告書）を伴って顧客口座への裁量権限を付与してきた。2026 のエージェントカストディアーキテクチャは、**デジタルネイティブな LPOA** に **オンチェーンの失効プリミティブ** を加えたものである。マルチ署名 / 閾値制御は、ダブルチェックのパターンを追加する。すなわち、取引にはエージェントの署名と共同署名者（Lit Action ポリシー、人間の承認者、またはオラクルとして機能する第二のエージェント）の署名の両方が必要となる。カストディ + 権限付与 + 失効 + マルチ署名 + 監査証跡の構成こそが、エージェント主導のフローを監督する際に規制当局が精査するものであり、[[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]] および [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity DeFi and TradFi bridge]] を通じてマッピングされる。

## ウィキ上の位置づけ

このエントリは [[agent-economy/INDEX|agent-economy index]] の配下にある。対になる ID 認証については [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity DeFi and TradFi bridge]]、プロトコル層については [[agent-economy/agent-payment-protocol-four-way-comparison-2026|agent payment protocol four-way comparison]]、アプリケーションサーフェスについては [[agent-economy/llm-agent-finance-application-overview-2026|LLM agent finance application overview]]、トレーディング固有の規制当局オーバーレイについては [[agent-economy/ai-driven-trading-regulation-japan-2026|AI-driven trading regulation Japan 2026]]、ウォレット権限プリミティブについては [[agent-economy/erc-7715-overview|ERC-7715 overview]] + [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]]、ウォレット基盤については [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer]] + [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 primer]]、閾値カストディについては [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]]、組み込みウォレットカストディについては [[agent-economy/privy-embedded-wallet-overview|Privy]] + [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]、発行体レベルのカストディについては [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire]]、法的分離との対応については [[agent-economy/embedded-wallet-custody-bankruptcy-mechanics|embedded ウォレットカストディ bankruptcy mechanics]]、教義については [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]] と照らし合わせて読むこと。証券会社のアナログについては [[banking/custody-bank-operating-model|カストディ bank operating model]] と [[securities/japan-prime-brokerage-and-institutional-financing|Japan prime 証券仲介]] を参照のこと。

## 三軸の設計空間

### 軸 1 · カストディモデル

**完全セルフカストディ（ユーザーが鍵を保持し、エージェントは独立した制御権を持たない）**：
- ユーザーの EOA が資金を保持し、エージェントは署名能力を一切持たない
- エージェントは未署名トランザクションを組み立て、ユーザーがウォレットで各々を承認する
- 最大限のセキュリティ、最小限のエージェント自律性
- ユースケース：ユーザーがループ内にいる、高額 / 高リスクの単発トランザクション
- 例：MetaMask、OneKey、Ledger、Trezor でユーザーがレビューするためのトランザクションを構築する Claude / GPT エージェント

**ハイブリッド（Lit PKP の閾値方式、またはポリシーコード付きセッションキー）**：
- エージェントはセッションキー、または署名するためにポリシー評価を必要とする Lit PKP を保持する
- 資金はユーザー制御の SCW または EOA 委任アドレスに存在し、エージェントはスコープ内で署名する
- Lit Actions が実行時のポリシー強制（レート制限、スコープチェック、多要素）を提供する
- ユースケース：ユーザーがオフライン / 就寝中に行動する必要があるが、ハードコードされたポリシーガードレールを備えた自律エージェント
- 例：トレジャリー自動化のための Lit PKP 制御エージェント。AI エージェントのショッピング向けの ERC-7715 + ERC-4337 セッションキー

**完全カストディアル（Privy / Magic / Coinbase CDP / Skyfire）**：
- カストディアンが暗号鍵を保持する（多くは MPC 分割または HSM バックアップ）
- ユーザーはパスキー / OAuth / メール OTP でカストディアンに認証する
- エージェントは、カストディアンが発行し、カストディアンがスコープを強制する API キーを介して動作する
- 最大限の利便性。カストディアンとカストディアンの支払能力への信頼を要する
- ユースケース：消費者向けエージェント決済、エンタープライズのエージェント発行
- 例：Privy 組み込みウォレット、Coinbase CDP ウォレット、Magic 組み込みウォレット、Skyfire 発行のエージェント ID

カストディアンの市場構造については [[agent-economy/embedded-wallet-landscape-2026-consolidation|embedded ウォレット landscape 2026 consolidation]]、法的分離要件については [[agent-economy/embedded-wallet-custody-bankruptcy-mechanics|embedded ウォレットカストディ bankruptcy mechanics]] を参照のこと。

### 軸 2 · 権限付与の粒度

| 粒度 | 説明 | サポートされる場所 |
|---|---|---|
| **単一取引** | エージェントは行動ごとにユーザー承認を要求しなければならない | 任意のウォレット（デフォルト） |
| **時間制限** | `expiresAt` タイムスタンプまで有効なスコープ | ERC-7715 `expiry`；Skyfire 台帳；AP2 マンデートの有効性 |
| **金額制限** | ローリングウィンドウにわたる支出上限（例：$50/日、$500/月） | ERC-7715 `period` + `amount`；Skyfire 支出上限；Privy アプリレベル上限 |
| **支出ルール制限** | 許可されたマーチャント / カテゴリ / パターン | ERC-7715 `permissionsContext` 許可リスト；Skyfire マーチャントカテゴリ制限；AP2 マンデートスコープ |
| **リソース別制限** | 許可された特定資産（USDC のみ、ETH 不可；特定トークン） | ERC-7715 `permission.type`（例：特定トークン向けの `erc20-token-transfer`）；Skyfire カードレベル設定 |
| **構成** | 上記の組み合わせ（例：「.vercel.com のみへ $50/日、USDC のみ、7日有効期限」） | ほとんどの本番スタックは 3+ を構成する |

2026 の本番リファレンス：**構成が常態である**。単一の次元で十分なことはまれである。実際のエージェント権限は次のように見える：

```
GRANT to agent_id A1:
  type: erc20-token-transfer
  token: USDC@0xa0b86991c... (Base mainnet)
  amount_cap: 50 USDC
  period: 1 day (rolling)
  expiry: 2026-08-25T00:00:00Z
  allowed_targets:
    - merchant_domain: *.vercel.com
    - merchant_domain: *.cloudflare.com
    - merchant_address: 0x1234...
  required_attestation: AP2 mandate VC signed by user A's WebAuthn key
```

### 軸 3 · 失効メカニズム

**オンチェーン即時**：
- 権限 NFT をバーンする（一部の Coinbase Smart ウォレットパターンのようにスコープが NFT エンコードされている場合）
- ERC-7715対応ウォレットで `revokePermissions` を呼び出す（即時のブロックファイナリティ失効）
- ERC-4337 SCW 内の資金は、ユーザーが失効 UserOp に署名することでセッションキーを削除できる
- コスト：失効トランザクションのガス料金（L2では通常 $0.50 未満）

**オフチェーンのウォレット仲介**：
- Privy / Magic / Coinbase CDP 管理コンソール — ユーザーがログインしてエージェントの API キーを無効化する
- カストディアンが署名時に失効を強制する
- 速度：数秒（カストディアン API 呼び出し）

**法的 / 契約上**：
- Skyfire 発行のエージェント：ユーザーが Skyfire サポート / ポータルに連絡してカードを無効化する
- Stripe Issuing：ユーザーが Stripe Dashboard を呼び出してバーチャルカードを凍結する
- 速度：数秒～数分（発行体の処理に依存）

**ハイブリッドの時限有効期限**：
- 時間制限スコープは、能動的な失効アクションなしに自己失効する
- ユースケース：7日間のプロジェクトで動作するエージェント。ユーザーが失効を忘れても権限が自動失効する
- これは**最も安全なデフォルト**であり、推奨されるベースラインである

## マルチ署名 / 閾値エージェント制御高額または機関導入されるエージェントの場合、**単一署名のエージェント制御**は不十分である。マルチ署名 / 閾値パターン：

### パターン 1 · エージェント + 人間の共同署名者

- エージェントがトランザクションを構築し、人間（財務担当者、コンプライアンス責任者、取締役会メンバー）が共同署名しなければならない
- ユースケース：人間の承認のために $X を超えるトランザクションを提案しなければならない企業トレジャリーエージェント
- 実装：エージェントを提案者、N 人の人間を承認者とする Safe（Gnosis Safe）マルチシグ
- SCW 基盤については [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer]] を参照のこと

### パターン 2 · エージェント + Lit Action ポリシー

- エージェントの PKP 署名は Lit Action ポリシー評価を必要とする
- Lit Action が実行時チェック（レート制限、スコープ、多要素）を強制する
- 人間はループ内にいないが、監査可能な JavaScript ポリシーによるコードがループ内にある
- [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]] を参照のこと

### パターン 3 · エージェント + 第二のエージェント（オラクル）

- 2 つのエージェントがトランザクションに合意しなければならず、両方が署名しなければならない
- ユースケース：一方のエージェントが提案者として機能し、第二のエージェントが検証者として機能する（多くは LLM 主導の検証）
- リスク：両エージェントがモデルの欠陥を共有している場合の相関的障害
- 緩和策：多様性のために異なるモデルプロバイダ（一方のエージェントは Claude、第二は GPT）を使用する

### パターン 4 · m-of-n 閾値

- トランザクションには n の総署名者のうち m の署名が必要である
- 署名者は人間、エージェント、ハードウェアキー、HSM の混合とすることができる
- ユースケース：エージェントと人間の両方が署名者として適格となる 2-of-3 または 3-of-5 マルチシグを備えた企業トレジャリー
- 実装：Safe + 閾値 ECDSA、または特定チェーン上の BLS マルチシグ

## 伝統的な証券会社の限定的委任状（LPOA）との比較伝統的金融からの教義上のアナログは、顧客が限定的委任状（LPOA）を通じて投資顧問に付与する**裁量取引権限**である。この構造は約 50 年間安定している：

| 次元 | 証券会社 LPOA | エージェント ERC-7715 / Skyfire の同等物 |
|---|---|---|
| **スコープ** | 資産クラス（株式、債券、FX） | `permission.type`（トークン、転送、スワップ） |
| **金額** | ポジションサイズ上限、時に想定元本 | `amount_cap` + `period` |
| **時間** | 失効権付きの無期限。一部は時間制限 | `expiry` タイムスタンプ |
| **承認された取引相手** | 証券会社の執行会場 | `allowed_targets` 許可リスト |
| **失効** | 書面通知。通常 T+1 で発効 | オンチェーン即時、またはウォレット仲介で数秒 |
| **監査** | 月次取引報告書 + Form 8949 / 法定調書 | オンチェーン台帳 + 署名済みレシート + 監査ログ |
| **責任** | 顧客が責任を負う。顧問は受託者義務を負う | デプロイヤーが責任を負う。エージェントプロバイダは契約上の責任を負う場合がある |
| **規制当局** | SEC IA / BD 監督、FINRA、FSA 第1 種 / 第2 種 FIBO | デプロイヤーの規制対象活動を介して間接的 |

構造的な並行関係は意図的なものである。エージェントのカストディ / 権限付与は、**より強力な失効プリミティブ** と **より細かい粒度のスコープ表現** を備えた**デジタルネイティブな LPOA** である。法的教義はほとんど変わらず適用される。すなわち、本人（ユーザー / デプロイヤー）が責任を保持し、エージェントは付与されたスコープ内で限定的な権限を持ち、失効は本人の一方的な権利である。完全な教義マッピングについては [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]]、証券会社 LPOA のフレーミングについては [[securities/japan-prime-brokerage-and-institutional-financing|Japan prime 証券仲介]] を参照のこと。

## カストディ x 権限付与 x 失効マトリクス · 本番パターン

| パターン | カストディ | 権限付与 | 失効 | ユースケース |
|---|---|---|---|---|
| **消費者チャットエージェント** | 完全カストディアル（Privy / Coinbase CDP / Magic） | 支出ルール + 金額制限 + 時間制限 | オフチェーン管理コンソール | カジュアルな AI エージェントのショッピング |
| **エンタープライズトレジャリーエージェント** | ハイブリッド（Safe マルチシグ + 人間の共同署名者） | リソース別 + 金額制限；m-of-n 閾値 | Safe 管理者経由のオンチェーン即時 | B2B 調達 / サプライヤー支払 |
| **自律リサーチエージェント** | ハイブリッド（Lit Action ポリシー付き Lit PKP） | 時間制限 + ポリシーコード化 | PKP NFT 転送経由のオンチェーン | 長時間稼働のデータ収集エージェント |
| **発行体仲介型エージェントコマース** | 完全カストディアル（Skyfire / Stripe Issuing） | マーチャントカテゴリ + 金額制限 + 時間制限 | 発行体コンソール（数秒） | Visa レールのマーチャントショッピング |
| **高額機関エージェント** | 完全セルフカストディ + エージェントは提案のみ | 単一取引（ユーザーが各々を承認） | 該当なし（自律的権限なし） | $1M+ のトランザクション。エージェントは助言のみ |
| **クロス管轄の自律エージェント** | ハイブリッド（異なる管轄のノードにまたがる Lit PKP 閾値） | 管轄固有ルール付きのポリシーコード化 | PKP NFT 経由のオンチェーン | 検閲耐性のあるエージェント運用 |

## 失効レイテンシ · 運用上実際に重要なこと

異なる失効メカニズムは、実質的に異なるレイテンシを持つ。2026-05 のリファレンス数値：

| メカニズム | 典型的なレイテンシ | 障害モード |
|---|---|---|
| **オンチェーン即時（ERC-7715 失効）** | 1-15 秒（L2 ファイナリティ） | RPC 伝播；バンドラー遅延 |
| **オフチェーンのウォレット仲介（Privy 管理者）** | 1-5 秒 | カストディアン API；キャッシュされた署名鍵 |
| **発行体台帳（Skyfire / Stripe Issuing）** | 5-30 秒 | 発行体のカードネットワークへの下流伝播 |
| **法的 / 契約上（書面通知）** | 数時間～数日 | 顧問が処理しなければならない。T+1 で発効 |
| **時限有効期限** | 0 秒（自動） | 正確なクロックを要する。クロックドリフト攻撃 |

運用上の含意：**ベースラインのデフォルトとしてのオンチェーン即時 + 時限有効期限**が、最も強力な失効プロファイルを与える。オフチェーン仲介はカストディアンが信頼されている場合に許容される。法的 / 契約上の失効は、高頻度のエージェント運用には遅すぎる。

## クロススタック構成チェックリスト本番グレードのエージェントカストディ + 権限付与のデプロイは、以下を指定すべきである：

- [ ] **カストディモデル** — セルフ / ハイブリッド / カストディアル（カストディアルの場合はベンダー名も）
- [ ] **鍵素材の所在** — ローカル TEE / クラウド TEE / 閾値ネットワーク / HSM
- [ ] **権限付与の粒度** — 構成される粒度のリスト（時間 + 金額 + スコープ + リソース）
- [ ] **失効メカニズム** — オンチェーン / オフチェーン / 法的、レイテンシ目標付き
- [ ] **マルチ署名 / 閾値** — 該当する場合、署名者の構成（m-of-n）
- [ ] **監査証跡** — 何がどこに記録されるか、保持期間
- [ ] **障害モード** — カストディアン / Lit ネットワーク / バンドラーがダウンした場合に何が起こるか
- [ ] **リカバリー** — ユーザーがパスキー / デバイスを失った場合に何が起こるか
- [ ] **保険 / 保証** — カストディアンは保証されているか。どの破産分離が適用されるか（[[agent-economy/embedded-wallet-custody-bankruptcy-mechanics|embedded ウォレットカストディ bankruptcy mechanics]] を参照）
- [ ] **ID 認証** — 何がエージェントの鍵をデプロイヤーに紐付けるか（[[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity DeFi and TradFi bridge]] を参照）

これらすべてを指定しない本番設計は不完全であり、監督検査に失敗する。

## 出典

- Privy ドキュメント（docs.privy.io）
- Magic ドキュメント（docs.magic.link）
- Coinbase CDP ドキュメント（docs.cdp.coinbase.com）
- Skyfire ドキュメント（docs.skyfire.xyz）
- Lit Protocol 開発者ドキュメント（developer.litprotocol.com）
- ERC-7715 EIP ドラフト（eips.ethereum.org/EIPS/eip-7715）
- ERC-4337 EIP 最終版（eips.ethereum.org/EIPS/eip-4337）
- ERC-7702 EIP 最終版（eips.ethereum.org/EIPS/eip-7702）
- Safe（Gnosis Safe）ドキュメント（docs.safe.global）
- 裁量権限と LPOA に関する FINRA Notice 12-25 （finra.org）
- SEC 投資顧問の裁量権限ガイダンス（sec.gov）
- 日本 FSA 金融商品取引法（fsa.go.jp）
- 顧問登録に関する CFTC プレスリリース（cftc.gov）

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity DeFi and TradFi bridge]]
- [[agent-economy/agent-payment-protocol-four-way-comparison-2026|agent payment protocol four-way comparison]]
- [[agent-economy/agent-protocol-mainnet-adoption-2026|agent protocol mainnet adoption 2026]]
- [[agent-economy/llm-agent-finance-application-overview-2026|LLM agent finance application overview]]
- [[agent-economy/ai-driven-trading-regulation-japan-2026|AI-driven trading regulation Japan 2026]]
- [[agent-economy/agent-driven-market-data-interpretation-pipeline|agent-driven market data interpretation pipeline]]
- [[agent-economy/agent-legal-tax-liability-framework|agent legal and tax liability framework]]
- [[agent-economy/erc-7715-overview|ERC-7715 overview]]
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]]
- [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer for agents]]
- [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 EOA delegation primer]]
- [[agent-economy/lit-protocol-pkp-agent-keys|Lit Protocol PKP agent keys]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS Bedrock AgentCore]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]
- [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop issuer]]
- [[agent-economy/embedded-wallet-landscape-2026-consolidation|embedded wallet landscape 2026 consolidation]]
- [[agent-economy/embedded-wallet-custody-bankruptcy-mechanics|embedded wallet custody bankruptcy mechanics]]
- [[agent-economy/stripe-agent-toolkit-position|Stripe agent toolkit position]]
- [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]]
- [[systems/erc-4337-overview|ERC-4337 overview]]
- [[systems/erc-7702-overview|ERC-7702 overview]]
- [[banking/custody-bank-operating-model|custody bank operating model]]
- [[securities/japan-prime-brokerage-and-institutional-financing|Japan prime brokerage]]
<!-- /wiki-links:managed -->
