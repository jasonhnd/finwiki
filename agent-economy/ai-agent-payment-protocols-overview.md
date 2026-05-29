---
title: AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰
aliases: [ai-agent-payment-protocols-overview, agent payment seven protocols, AI agent 決済7プロトコル]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [agent-economy, ai-agent, payments, protocol, ap2, x402, mcp]
sources:
  - https://github.com/google-agentic-commerce/AP2
  - https://github.com/coinbase/x402
  - https://github.com/modelcontextprotocol/modelcontextprotocol
  - https://github.com/a2aproject/A2A
  - https://www.agentcommercekit.com/overview/concepts
  - https://www.bis.org/about/bisih/topics/fmis/agora.htm
status: candidate
---

# AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰


## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy INDEX]]. Read it against [[agent-economy/ai-agent-payment-protocols-seven-layers|AI Agent 決済7プロトコル分層表 · 意図 / 伝送 / 文脈]] for peer / contrast context and [[payments/INDEX|payments index]] for the broader system / regulatory boundary.

## Key facts

- 業界の略称「4プロトコル」とは AP2 + x402 + MCP + A2A を指し、引用頻度が最も高い4つである ^[extracted]
- AP2 リリース時(2025.09)に既に 60+ パートナー(Coinbase / MetaMask / Salesforce / American Express) ^[extracted]
- x402 は chain-specific ではなく HTTP 標準に乗る — 任意の stablecoin、任意のチェーンが接続可能 ^[extracted]
- MCP は Anthropic が 2024.11 にリリースした LLM ↔ tools プロトコルで、OpenAI が 2025 にフォロー ^[extracted]
- 2026 年中盤に FIDO Alliance が AP2 を引き継ぎ、AAIF(Agentic AI Identity Federation)に改名 ^[extracted]
- BIS Agorá はプロトコル層に対する公式な裏書きである ^[inferred]

## Mechanism / How it works

7プロトコルは階層ごとに分業する。**意図層**(ユーザーが「X 円で Y を買いたい」と表明する)は AP2 / SPT / ACP が mandate の3層信頼チェーン(Intent → Cart → Payment)を処理し、VC + DPK 署名で固定化する。**伝送層**(実際の送金)は x402 が HTTP 402 Payment Required ヘッダを復活させ、per-call の USDC マイクロペイメントを実現、Lite 版は既に Cloudflare Agents / Vercel AI SDK に着地している。**文脈層**(LLM がどのようにツールを呼び出すか)は MCP が LLM ↔ tools / data sources のインタフェースを標準化し、A2A が agent 間通信を扱う。3層は補完関係にあり排他ではない。完成された agent 決済フローは通常 AP2(意図)+ x402(伝送)+ MCP(文脈)を同時に呼び出す。下層は [[systems/erc-4337-overview|ERC-4337 アカウント抽象化]] と [[systems/erc-7702-overview|ERC-7702 EOA アップグレード]] に依存し、プログラマブルな wallet 能力を提供する。

## Origin & evolution

2024.11 MCP がデビューし、「LLM インタフェース」の事実上の標準を確立した。2025.05 Coinbase が x402 を発表し、30年前の HTTP 402 ステータスコードを復活させ USDC とバインドした(USDC の役割は [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互交換層]] を参照)。2025.09 Google が 60+ パートナーと共に AP2 を発表し、「agent 決済意図の標準」として位置付けた。2025 年内に SPT(Skyfire)/ ACP(Catena Labs · Sequoia 出資)/ TAP(xpay)等の二次的競合プロトコルが続々登場。2026 年中盤に FIDO が AP2 を引き継ぎ AAIF に改名、Apple / Microsoft / Mastercard が加わり連盟は 100+ に拡大 — プロトコル層は commoditization のチャネルに突入し、WebAuthn / OAuth / OpenID Connect に類比される(詳細は [[agent-economy/ai-agent-payment-protocols-commoditization|プロトコル commoditization と価値の上方移動]] 参照)。

## Counterpoints

- 「プロトコル層は commoditization が必然」という命題は standardization の必然的成功を前提としている — FIDO の引き継ぎが失敗すれば(WebAuthn は初期に3年 stall した)、AP2/AAIF は長期的に分裂する可能性がある
- 文脈層 MCP と A2A が真に補完的かは未検証 — OpenAI / Anthropic は競合 stack に分裂する可能性がある
- 「二次プロトコル」(SPT/ACP/TAP)は大手に買収されれば逆転もあり得る

## Open questions

- AAIF は本当に 2026-2027 内に ratify され、実装されるのか?
- 中国 / EU / インドは地政学的に競合する agent 決済標準を打ち出すか(UPI vs Visa の類比)?
- 規制(EU AI Act / 米 OCC)は agent autonomous payment のコンプラ枠組みにいつ介入するのか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|7プロトコル分層表]]
- [[agent-economy/ai-agent-payment-protocols-commoditization|プロトコル commoditization と価値の上方移動]]
- [[fintech/central-banking-function-unbundling|中央銀行機能の解体5層]]
<!-- /wiki-links:managed -->

## Sources

- Google AP2（Agent Payments Protocol · 意図層 mandate）— https://github.com/google-agentic-commerce/AP2
- Coinbase x402（HTTP 402 ネイティブ決済 · 伝送層）— https://github.com/coinbase/x402
- Model Context Protocol（Anthropic · LLM ↔ tools · 文脈層）— https://github.com/modelcontextprotocol/modelcontextprotocol
- Agent2Agent (A2A) Protocol（agent 間通信）— https://github.com/a2aproject/A2A
- Agent Commerce Kit（Catena Labs · ACK-ID / ACK-Pay）— https://www.agentcommercekit.com/overview/concepts
- BIS Project Agorá（プロトコル層への公式裏書き）— https://www.bis.org/about/bisih/topics/fmis/agora.htm

