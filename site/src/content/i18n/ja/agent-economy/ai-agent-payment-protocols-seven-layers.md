---
source: agent-economy/ai-agent-payment-protocols-seven-layers
source_hash: a9f1038c4510a942
lang: ja
status: machine
fidelity: ok
title: "AI Agent 決済7プロトコル分層表"
translated_at: 2026-06-02T11:47:37.253Z
---

# AI Agent 決済7プロトコル分層表

## ウィキ上の位置づけ

本エントリは [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]] の配下に位置する。同位・対照の文脈としては [[payments/INDEX|payments index]] と、より広いシステム・規制境界としては [[systems/INDEX|systems index]] と併せて読むこと。

## 主要事実

- 7 プロトコル = 意図 3 + 伝送 2 + 文脈 2 ^[extracted]
- AP2(Google 主導)+ x402(Coinbase 主導)+ MCP(Anthropic 主導)+ A2A(Google 主導)= 業界略称「4プロトコル」 ^[extracted]
- SPT(Skyfire)/ ACK(Catena Labs · a16z)/ TAP(xpay)は二次的競合 ^[extracted]
- AP2 は VC(Verifiable Credentials)+ DPK(Decentralized Public Key)で mandate に署名 ^[extracted]
- x402 は HTTP 標準、non-chain-specific ^[extracted]

## 仕組み / 動作原理

**意図層**は「ユーザーが何をしたいか」に応答する。AP2 は3層の信頼チェーン mandate を定義する:Intent(ユーザー ↦ agent · X の購入を認可する)→ Cart(agent ↦ 商家 · ユーザーを代理して発注する)→ Payment(商家 ↦ 決済ネットワーク · 受取指示)。各層が VC + DPK で署名され、チェーンとして改竄不能となる。SPT / ACP は類似設計の初期競合である。

**伝送層**は「金銭をどう A から B に移すか」に応答する。x402 は HTTP 402 Payment Required ステータスコードを復活させる。サーバがレスポンスに「X USDC を Y アドレスに支払え」を埋め込み · agent ウォレットが自動的に署名 · 送金する。per-call のマイクロペイメントが成立する。下層ウォレットは通常 [[systems/erc-4337-overview|ERC-4337 スマートアカウント]] または [[systems/erc-7702-overview|ERC-7702 一時アップグレード]] ベースで、クロスチェーン時は [[systems/chain-abstraction-pattern-overview|chain abstraction パターン]] により下層チェーンの差異を隠蔽する。TAP は類似の token-based auth 経路だがエコシステムは薄い。

**文脈層**は「LLM が利用可能なツール / データをどう知るか」に応答する。MCP はサーバ側 tool definitions + resources を標準化し · LLM client が自動的に発見して呼び出す。A2A は agent 間通信(ある agent が別の agent に委任する)を担い · MCP の server-tool に対して agent-agent という 2 つの方向で補完関係を成す。

## 起源と進化

2024.11 Anthropic が MCP をリリース · 6 ヶ月以内に OpenAI / Google が追随 · 事実上の標準となった。2025.04 Google が A2A をリリースし agent 間通信を補完。2025.05 Coinbase が x402 をリリースし「HTTP ネイティブ決済」の物語に火を点けた(USDC をデフォルト決済通貨とする詳細は [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]] 参照)。2025.09 Google が 60+ パートナーと AP2 をリリース · 意図層のトーンを決定した。2026 年中盤 FIDO が AP2 を引き継ぎ → AAIF へ · 意図層は中立標準へ向かう。二次プロトコル(SPT/ACP/TAP)は 2025 年内に登場したが · AP2 + FIDO の二重 commoditization 圧力により独立した堀を築きにくくなった — [[fintech/protocol-hedge-strategy-stripe-pattern|Stripe プロトコルヘッジ戦略]] と構造的対照を成す。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ai-agent-payment-protocols-overview|7プロトコル総覧]]
- [[agent-economy/ai-agent-payment-protocols-commoditization|プロトコル commoditization と価値の上方移動]]
<!-- /wiki-links:managed -->

## 出典

- Google AP2（意図層 · Intent / Cart / Payment mandate · VC + DPK 署名）— https://github.com/google-agentic-commerce/AP2
- Coinbase x402（伝送層 · HTTP 402 per-call マイクロペイメント）— https://github.com/coinbase/x402
- Model Context Protocol（文脈層 · server-tool インタフェース）— https://github.com/modelcontextprotocol/modelcontextprotocol
- Agent2Agent (A2A) Protocol（文脈層 · agent-agent 通信）— https://github.com/a2aproject/A2A
- Agent Commerce Kit（Catena Labs · ACP 系の意図 / 決済設計）— https://www.agentcommercekit.com/overview/concepts
- Skyfire Developer Docs（SPT 系 · Identity and Payments for AI）— https://docs.skyfire.xyz/
