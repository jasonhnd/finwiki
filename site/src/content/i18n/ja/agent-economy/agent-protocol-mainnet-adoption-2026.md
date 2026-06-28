---
source: agent-economy/agent-protocol-mainnet-adoption-2026
source_hash: 13e3df6d3724ae09
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "エージェントプロトコルのメインネット採用 · 2026-05 本番稼働準備状況スナップショット"
translated_at: 2026-06-26T08:27:56.296Z
---

# エージェントプロトコルのメインネット採用 · 2026-05 本番稼働準備状況スナップショット

## 要約

2026, 年5月時点で、エージェント決済プロトコルのスタックは**メインネット出荷済みインフラ**と**テストネット／コンソーシアム限定仕様**との間で鮮明に二極化している。本番稼働ティアを支配するのは **x402**(Cloudflare Workers + AWS API Gateway のエッジ統合)、**ERC-4337**(メインネット上で成熟した4年超)、および **ERC-7702**(2025年Q2に Pectra としてイーサリアムメインネットへ出荷)である。コンソーシアム仕様ティアには **AP2**(60社超のパートナーがいるが広く展開されたマーチャントフローはない)と **ERC-7715**(MetaMask／Coinbase Smart ウォレット／Safe で実装済みだが全主要ウォレットで標準化されていない)が含まれる。この分断が重要なのは、今日の本番グレードのエージェント決済を出荷するには x402 + ERC-4337/7702 を組み合わせなければならないからだ。AP2 と ERC-7715 は意味的な豊かさを加えるが、エッジでの実際のコール単位 USDC 決済を妨げるものではない。

## ウィキ上の位置づけ

このエントリは [[agent-economy/INDEX|agent-economy index]] の下に位置する。より広範な7プロトコルの全体像については [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]] と、各プロトコルの詳細解説については [[agent-economy/ap2-adoption|AP2 アダプション状況]] / [[agent-economy/x402-cloudflare-aws-edge-integration|x402 x Cloudflare / AWS エッジ統合]] と照らし合わせて読むこと。ウォレット層の依存関係については [[systems/erc-4337-overview|ERC-4337 総覧]] と [[systems/erc-7702-overview|ERC-7702 総覧]] を参照。

### x402  — Cloudflare + AWS エッジ稼働中(本番)

| サーフェス | ステータス | 日付 |
|---|---|---|
| Coinbase x402 仕様 v1.0 | 公開済み | 2025-05 |
| Cloudflare Workers ネイティブ統合 | 本番 Workers ティアで稼働中 | 2026-Q1 |
| AWS API Gateway / Bedrock AgentCore | 稼働中、us-east-1 / eu-west-1 で GA | 2026-Q2 |
| Vercel AI SDK x402 クライアント | 稼働中 | 2025-Q4 |
| Anthropic Claude Code x402 ツールラッパー | コミュニティ保守、ファーストパーティではない | 2026-Q1 |
| OpenAI Agents SDK x402 ヘルパー | コミュニティ保守 | 2026-Q1 |
| Google Gemini Agent x402 | 存在しない(Google は AP2経由でルーティング) | — |

**メインネットの証拠**:Cloudflare はエンドポイント単位の USDC 価格設定を宣言するための Workers 設定構文を公開ドキュメントで提供している。AWS は x402 ファシリテーター経由で API Gateway + Bedrock AgentCore を配線するチュートリアルを公開している。いずれもデフォルト決済資産として **Base メインネット USDC** で終端し、ファシリテーターのルーティング経由で Solana やその他のチェーンにも対応する。仕様の仕組みについては [[agent-economy/x402-http-payment-overview|x402 HTTP プロトコル総覧]] を、ファシリテーターの経済性については [[agent-economy/x402-cloudflare-aws-edge-integration|x402 edge layer integration]] を参照。

**本番ボリューム**:Cloudflare のファーストパーティ開示によれば、x402でファシリテートされたリクエストは最初の本番2四半期で「月あたり数十億件」のレンジにあり、AI エージェント + スクレイピングのユースケースが支配的である。これはプレスリリースではなく、Cloudflare の開発者デイトークと AWS re:Invent ブレイクアウトからの推定である。

**なぜ最初に出荷されたか**:x402 は単一の必須ヘッダー(`X-Payment`)と、プロトコルに1996年から既に存在していた HTTP ステータスコード(402)を持つ厳格な HTTP 層仕様である。ウォレット UX の変更を要求せずに既存のエッジ／API ゲートウェイミドルウェアと組み合わさる — エージェントはサービスキー経由で自律的に支払う。ユーザー向け UX 統合を要求する AP2の3段階 VC チェーン(Intent → Cart → Payment)と比較せよ。

### AP2  — Google + 60社超のパートナー(コンソーシアム稼働中、本番はまばら)

| サーフェス | ステータス | 日付 |
|---|---|---|
| AP2 仕様 v1 公開 | あり、リファレンス実装付き | 2025-09 |
| 初期パートナー数 | 60社超(Coinbase, MetaMask, Salesforce, American Express など) | 2025-09 |
| FIDO Alliance への移管 → AAIF への改称 | 発表済み | 2026-Q2 |
| 本番マーチャント展開 | 限定的(Mastercard パイロット、Salesforce Commerce パイロット) | 2026-Q1 |
| リファレンスウォレット統合数 | `wallet_grantPermissions` + AP2 マンデート UX を備えた約8 ウォレット | 2026-Q2 |
| エージェント SDK ファーストパーティ統合 | Google Gemini Agent(あり)、OpenAI Agents SDK(部分的)、Anthropic Claude Code(なし) | 2026-Q2 |

**本番の実態**:60社超のパートナー数はコンソーシアム会員数を数えたものであり、出荷済みの本番フローではない。公開報道では2026 年5月時点で AP2 本番パイロット4件を特定しているが、いずれもボリュームを開示していない。[[agent-economy/ap2-overview|AP2 overview]] にある「チャージバックを生き延びる VC マンデート署名済み Cart」というテーゼには、ほとんどの小売業者がまだ完了していないマーチャント台帳統合が必要である。[[agent-economy/ap2-adoption|AP2 アダプション状況]] が変動するパートナーリストを追跡している。

**FIDO Alliance への移管が重要な理由**:Google は当初 AP2 仕様を所有しており、これが非 Google エコシステムにとってベンダー囲い込みの懸念を生んでいた。2026年Q2 の FIDO Alliance への移管と **AAIF(Agentic AI Identity Federation)** への改称は、WebAuthn 流のコモディティ化の瞬間を意図したものである([[agent-economy/ai-agent-payment-protocols-commoditization|プロトコル commoditization と価値の上方移動]] と比較せよ)。Apple と Microsoft は移管後に参加した。FIDO が18-24 か月のトラックで仕様の批准に成功すれば、AAIF はエージェントアイデンティティの OAuth 相当物になる。

**本文リンク**:このエントリのステータスは、AAIF が2027年末までに「60社超の指名パートナー」から「AP2 マンデートを受け入れる100M件超のライブマーチャント SKU」へ移行するかどうかに依存する。

### ERC-7715  — テストネットで成熟、メインネットは部分的(テストネット → メインネット移行中)

| サーフェス | ステータス | 日付 |
|---|---|---|
| EIP-7715 ドラフト公開 | あり | 2024 |
| MetaMask `wallet_grantPermissions` 出荷 | MetaMask モバイル + Snaps で稼働中 | 2025-Q3 |
| Coinbase Smart ウォレット実装 | Base メインネットで稼働中 | 2025-Q3 |
| Safe(Gnosis Safe)実装 | Safe v1.4+ でモジュールとして稼働中 | 2025-Q4 |
| Rabby / Phantom / Trust ウォレット実装 | 未出荷 | — |
| ウォレット間の権限ポータビリティ | 標準化されていない。各ウォレットが権限タイプで分岐 | — |

**メインネットの証拠**:MetaMask + Base ETH を持つユーザーは今日、`wallet_grantPermissions` を実行して AI エージェントに `native-token-recurring-allowance` と Base 上の USDC 向け `erc20-token-transfer` 権限を付与でき、3つすべて(Base, Optimism, Arbitrum)がイーサリアムメインネットで決済される。この仕様は**特定のウォレットを通じてメインネットで稼働中**だが、[[agent-economy/erc-7715-overview|ERC-7715 総覧]] の「どのウォレットでも、どのチェーンでも」というポータビリティの約束はまだ実現されていない。

**断片化のギャップ**:MetaMask は `native-token-recurring-allowance` + `erc20-token-transfer` + MetaMask 独自の「delegation」タイプをサポートする。Coinbase Smart ウォレット は `native-token-recurring-allowance` + `erc20-token-transfer` + セッションキータイプをサポートする。Safe はカスタムのモジュール定義権限をサポートする。あるウォレットの権限スキーマに対して構築されたエージェントは、別のウォレットに対してポータブルに権限を付与できない。2026年Q3 のロードマップ目標は権限タイプレジストリだが、正式な提案は進行中ではない。

### ERC-4337  — 成熟したメインネット(本番、T+4 年)

ERC-4337 (EntryPoint 経由のアカウント抽象化)は2023-03年からイーサリアムメインネットで稼働している。2026 年までに、これは支配的なアカウント抽象化標準であり、以下を備える:

- EntryPoint v0.7 が Ethereum, Base, Optimism, Arbitrum, Polygon, Avalanche, BSC にわたってデプロイ済み。
- バンドラーインフラ(Pimlico, Stackup, Alchemy, Biconomy)が月あたり数億件の UserOp を処理する。
- Paymaster はアプリ開発者または AI エージェントプラットフォームがスポンサーするガスレストランザクションを可能にする。

エージェント決済に特化すると、ERC-4337 はエージェントの権限付きスコープを保持する基盤となる**スマートコントラクトウォレット**を提供する。本番アーキテクチャについては [[systems/erc-4337-overview|ERC-4337 総覧]] とより深い UserOp / バンドラーフローを参照。Coinbase Smart ウォレット, Safe, ZeroDev, Biconomy、および2026 のほとんどの「パスキー + AA」モバイルウォレットは ERC-4337  SCW である。

**本番ボリュームのコンテキスト**:Stackup の公開ダッシュボードは、2026年半ばまでに主要バンドラーネットワーク全体で累積100M件超の UserOp を処理したことを示している。

### ERC-7702  — Pectra でメインネットに出荷(本番、T+1 年)

ERC-7702 (トランザクションスコープの認可による EOA からスマートコントラクトコードへの委任)は、2025年Q2 (Prague-Electra フォーク有効化後)にイーサリアムの **Pectra アップグレード**の一部として出荷された。初めて、**大量にインストールされた EOA ウォレットベース**(MetaMask EOA、ハードウェアウォレット EOA)が、別個の SCW アカウントへ移行することなくトランザクション単位でスマートコントラクトの振る舞いにオプトインできるようになった。

| サーフェス | ステータス | 日付 |
|---|---|---|
| ERC-7702 EIP ファイナル / Pectra 有効化 | イーサリアムメインネットで稼働中 | 2025-Q2 |
| MetaMask EOA + 7702 委任 UX | 稼働中 | 2025-Q4 |
| Coinbase ウォレット EOA + 7702 | 稼働中 | 2025-Q4 |
| ウォレット側の7702 使い勝手(ワンクリック委任) | 部分的。多くのウォレットは依然としてパワーユーザーフローを要求 | 2026-Q2 |

**エージェントにとって重要な理由**:ERC-7702 は、約150Mの既存 EOA ユーザーが**ウォレットを切り替えずに**エージェントに1トランザクションスコープの委任を付与できることを意味する。ERC-7715の `wallet_grantPermissions` と組み合わせれば、既存の MetaMask ユーザーは今日(2026年Q2)、シードフレーズを放棄せずに Claude / Gemini / GPT エージェントに `erc20-token-transfer` USDC スコープを委任できる。委任の仕組みについては [[systems/erc-7702-overview|ERC-7702 総覧]] を参照。

## エージェント SDK 統合マトリクス

これは「理論が現実に出会う」決定的な表である — どの AI エージェントベンダーが**ファーストパーティ**の決済プロトコル統合を出荷するか、対してどれがコミュニティラッパーを必要とするか。

| ベンダー / SDK | x402 | AP2 | ERC-7715 | ERC-4337 | ERC-7702 |
|---|---|---|---|---|---|
| **Anthropic Claude Code** | コミュニティラッパー | 未統合 | コミュニティラッパー | MCP ツール経由 | MCP ツール経由 |
| **Anthropic Claude Agent SDK** | コミュニティラッパー | 未統合 | コミュニティラッパー | MCP ツール経由 | MCP ツール経由 |
| **OpenAI Agents SDK** | コミュニティラッパー | 部分的(早期統合) | コミュニティラッパー | ツールレジストリ経由 | ツールレジストリ経由 |
| **Google Gemini Agent** | 未統合 | ファーストパーティ | ファーストパーティ(Android ウォレットパイロット) | ファーストパーティ(Android ウォレット 4337 パス) | ファーストパーティ |
| **LangChain / LlamaIndex** | コミュニティラッパー | コミュニティラッパー | コミュニティラッパー | コミュニティラッパー | コミュニティラッパー |
| **Vercel AI SDK** | ファーストパーティクライアント | 未統合 | 未統合 | 未統合 | 未統合 |
| **CrewAI / AutoGen** | コミュニティラッパー | コミュニティラッパー | 未統合 | 未統合 | 未統合 |

**重要な推定**:Anthropic は意図的に決済についてプロトコル中立を保っており、いかなる決済プロトコル SDK もファーストパーティで統合せず、すべてを MCP ツール経由でルーティングしている。Google は垂直統合的に所有するスタックとして AP2 + 7715 に賭けた。OpenAI はヘッジしている。Vercel は純粋なインフラの賭けとして x402-on-edge に賭けた。

Claude Code のツールコールアーキテクチャについては [[agent-economy/claude-code-extension-architecture|Claude Code 拡張アーキテクチャ]] を参照。

## 本番デプロイパターン

2026 年5月の本番エージェント決済フローは典型的に以下を構成する:

1. **ウォレット層**:ユーザーは MetaMask EOA + ERC-7702 委任、または Coinbase Smart ウォレット(ERC-4337  SCW)を持つ。
2. **権限層**:ユーザーは `wallet_grantPermissions`(ERC-7715)経由でエージェントにスコープ付き権限を付与する。例:「1日あたり$50の USDC、ドメインが `.vercel.com` または `.cloudflare.com` で終わるマーチャントのみ」。
3. **決済資産**:Base 上の USDC(デフォルト)またはイーサリアム L1 上の USDC(高額)。
4. **トランスポート**:API エッジ(Cloudflare Workers または AWS API Gateway)での x402  HTTP 402 ダンス。
5. **アイデンティティ / マンデート**(オプション、プレミアムマーチャントのみ):AP2 マンデートチェーンが署名した Intent → Cart → Payment。

**本番スタックの頻度**(公開開発トークからの推定):
- 「x402 + 4337/7702 + Base 上の USDC」 — エージェント決済を出荷したスタートアップの約70%。
- 「AP2 + 7715 + USDC + Mastercard レール」 — 約20%、大半はエンタープライズパイロット。
- 「カスタム独自」 — 約10%、大半はフィンテックが所有するエンドツーエンド(Stripe Issuing, Coinbase CDP)。

組み合わせパターンは [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 + agent payment stack]] でより詳しく説明されている。

## メインネット vs ベイパーウェア — 明確な区別

| ティア | 主張 | 実態 |
|---|---|---|
| 本番 / メインネット稼働 | x402 エッジ統合 | Cloudflare + AWS がドキュメントを公開し、手数料を取り、ボリュームを処理 |
| 本番 / メインネット稼働 | ERC-4337  SCW | バンドラーネットワーク全体で累積100M件超の UserOp |
| 本番 / メインネット稼働 | ERC-7702  EOA 委任 | Pectra 出荷 + MetaMask / Coinbase ウォレット UX |
| 本番 / 部分的 | ERC-7715 権限スコープ | 主要3ウォレットが稼働中。ポータビリティのギャップあり |
| コンソーシアム / パイロット | AP2 60社超のパートナー | 実際のパートナー数、まばらな本番フロー |
| 仕様のみ | AAIF を超えた「エージェントアイデンティティフェデレーション」 | 批准前、出荷製品なし |

2026の核心的な結論:**少なくとも x402、ERC-4337/7702、またはエンタープライズレール(Mastercard / Visa Intelligent Commerce)**を名指ししない「エージェント決済インフラ」を主張するチームは、分断のベイパーウェア側にいる。

## 本番タイムライン(2025-2026 凝縮版)

| 四半期 | イベント |
|---|---|
| 2025-Q2 | Ethereum Pectra アップグレード出荷 → ERC-7702 メインネット稼働 |
| 2025-Q3 | MetaMask + Coinbase Smart ウォレット が ERC-7715 `wallet_grantPermissions` を出荷 |
| 2025-Q4 | Safe + Vercel AI SDK がサポート層を出荷 |
| 2025-Q4 | Cloudflare Workers x402 がプライベートベータに入る |
| 2026-Q1 | Cloudflare Workers x402 が本番ティアで GA |
| 2026-Q2 | AWS API Gateway + Bedrock AgentCore x402 が GA |
| 2026-Q2 | FIDO Alliance が AP2 移管、AAIF への改称を発表 |
| 2026-Q2 | Apple、Microsoft が AAIF ワーキンググループに参加 |
| 2026-Q3 (予定) | OpenAI Agents SDK ファーストパーティ AP2 統合 |
| 2026-Q4 (予定) | Google Cloud x402  GA |
| 2027-Q1 (目標) | AAIF v1.0 批准 |

## 避けるべき3つの運用上のアンチパターン(2026 教訓)

**アンチパターン1:AA 以前のウォレット設計**。2024-2025 年にエージェント決済 UX を構築したチームは、エージェント用の別個のホットウォレットが必要で、ユーザーが残高を補充する必要があると想定していた。これは UX の崩壊を生んだ — ユーザーは自分用とエージェント用の2つのウォレットを管理しなければならなかった。ERC-7715 + ERC-7702 はこのパターンを陳腐化させる。2026 のリファレンスアーキテクチャは「ユーザーウォレット + エージェントウォレット」ではなく、**エージェントへのスコープ付き委任を持つ1つのユーザーウォレット**である。

**アンチパターン2:チェーン固有のロックイン**。x402 を単一チェーンの USDC(例:Solana のみ、Ethereum のみ)に統合したチームは、対応可能なエージェント宇宙を縮小させた。x402のファシリテーターパターンは**明示的にチェーン非依存**である。本番リファレンスはデフォルトとして Base 上の USDC(低手数料、高速ファイナリティ、Coinbase ネイティブ)を選ぶが、マーチャントが受け入れる任意の資産へファシリテーター経由でルーティングする。単一チェーンへのロックインは、x402 が解決するために設計された断片化を再生してしまう。

**アンチパターン3:MCP と決済プロトコルの混同**。MCP(Model Context Protocol)はツール呼び出し標準であり、決済標準ではない。2025 年の一部のチームは MCP ツールを「別名のエージェント決済」として扱った。これは2つの意味層を崩壊させ、セキュリティホールを生む:MCP はエージェントにツールを**呼び出す**能力を与え、決済プロトコルはエージェントにコールに**支払う**能力を与える。これらは組み合わせなければならないが決して崩壊させてはならない。正しいパターン:MCP ツールが x402 クライアントをラップし、それがユーザー付与の ERC-7715 権限に署名し、それが ERC-4337 または ERC-7702 ウォレット上で実行され、USDC で決済される。それぞれ独自の脅威モデルを持つ5つの異なる層である。

## クロススタックのセキュリティ構成本番エージェント決済スタックは5つの異なるセキュリティ境界を構成する。2026 のリファレンスリスト:

| 層 | 脅威 | 2026 本番スタックでの緩和策 |
|---|---|---|
| エージェントプロンプトインジェクション | 攻撃者がエージェントを騙して誤ったマーチャントに支払わせる | ERC-7715 スコープがドメインまたはアドレス許可リストで許可マーチャントを制限 |
| エージェント暴走実行 | エージェントが有料 API コールでループしユーザー資金を焼く | ERC-7715 `period` + `amount` の経常上限が日次／週次の支出を制限 |
| ウォレット署名の窃取 | 攻撃者がエージェントのセッションキーを取得 | セッションキーはスコープが限定的。失効はオンチェーンだが安価 |
| マーチャント過大請求 | マーチャントが見積もりより多く請求する | x402 ファシリテーターが `X-Payment` 額が宣言価格と一致するか検証 |
| 決済チェーンのリオーグ | L2 のリオーグが USDC 決済に影響 | Base / Optimism のファイナリティ + ファシリテーターのクレジットバッファが短期リオーグを吸収 |

この構成こそが、真の「メインネット採用」チェックが単に「x402 が Cloudflare で稼働している」ことではない理由である — それは「本番デプロイの5つの層が実際に連動しているか」である。トップ5-10 エージェントプラットフォームに対する2026 の答えは、概ねイエスであり、プロンプトインジェクション層に監査可能なギャップがある(プロトコルレベルの緩和策はなく、アプリケーションレベルのプロンプト衛生のみ)。

## 重大インシデントが起きた場合に何が変わるか

2026 のメインネット稼働スタックは、**重大な公開エージェント決済エクスプロイト**をまだ生き延びていない。注視すべきインシデントのクラス:

1. **エージェントプロンプトインジェクションがスコープ付き許可額を枯渇させる**:エージェントがユーザーのスコープ内($50/日の上限)で悪意あるマーチャントに支払うよう騙され、日次上限を枯渇させ、連続する日にわたって繰り返す。緩和にはプロトコル変更ではなく UX レベルの許可リスト厳格化が必要。
2. **ファシリテーターのカウンターパーティ障害**:Cloudflare または AWS ファシリテーターが請求紛争を抱え、決済済み USDC のマーチャントへの転送を拒否する。緩和にはマーチャント側のファシリテーター多様化が必要。
3. **ERC-7715 クロスウォレットポータビリティバグ**:MetaMask で付与されたスコープが、資産が Safe 管理のマルチシグに移動したときに異なって解釈される。緩和にはまだ存在しない標準化が必要。
4. **エージェントフローの途中でのステーブルコインのデペッグ**:USDC が実行途中で一時的にデペッグし、エージェントが一貫しないマーチャント価格を見る。緩和には短期 USDC 変動に対して安定した勘定単位でのマーチャント側価格設定が必要。

公開報道は2025-2026 年の本番でこれらのいずれもまだ文書化していない。インシデントの不在は絶対ボリュームの低さの関数である。エージェント決済ボリュームが2027, 年までに10-100倍にスケールするにつれ、インシデント確率もそれに伴ってスケールする。

## 関連項目

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図]]
- [[agent-economy/ap2-adoption|AP2 adoption]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 x Cloudflare / AWS]]
- [[agent-economy/erc-7715-overview|ERC-7715 総覧]]
- [[agent-economy/claude-code-extension-architecture|Claude Code アーキテクチャ]]
- [[systems/erc-4337-overview|ERC-4337]]
- [[systems/erc-7702-overview|ERC-7702]]
<!-- /wiki-links:managed -->

## 出典

- Cloudflare Workers x402 リリースノート(developers.cloudflare.com, 2026-Q1)
- AWS API Gateway x402 統合発表(aws.amazon.com/blogs, 2026-Q2)
- Google AP2 ローンチコンソーシアムプレス(cloud.google.com, 2025-09)
- Ethereum Pectra アップグレードリリースノート(ethereum.org, 2025-Q2)
- Anthropic Claude Code SDK ドキュメント(anthropic.com, 2026)
- OpenAI Agents SDK ドキュメント(openai.com, 2026)
- Google Gemini Agent プラットフォームドキュメント(developers.google.com, 2026)
- FIDO Alliance AAIF 発表(fidoalliance.org, 2026-Q2)
- ERC-7715 EIP ドラフト(eips.ethereum.org)
- ERC-4337 EIP ファイナル(eips.ethereum.org)
- ERC-7702 EIP ファイナル(eips.ethereum.org)
- Coinbase x402 仕様 v1.0 (x402.org, 2025-05)
- Stackup / Pimlico / Alchemy 公開バンドラーダッシュボード(2026)
