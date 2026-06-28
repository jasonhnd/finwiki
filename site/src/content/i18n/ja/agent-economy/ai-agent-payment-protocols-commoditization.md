---
source: agent-economy/ai-agent-payment-protocols-commoditization
source_hash: 49438a71ac5ef654
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Agent 決済プロトコル commoditization と価値の上方移動"
translated_at: 2026-06-26T08:28:46.035Z
---

# Agent 決済プロトコル commoditization と価値の上方移動

## ウィキ上の位置づけ

本項目は [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]] の下に位置する。同類・対照の文脈については [[payments/INDEX|payments index]] を、より広いシステム・規制境界については [[systems/INDEX|systems index]] を併せて参照のこと。

## 主要事実

- Stripe 5層 = Tempo(L1)+ Privy(ウォレット)+ USDB / Bridge(ステーブルコイン)+ Stripe Checkout(SDK)+ 5M+ マーチャント(トラフィック) ^[extracted]
- Privy は 2025 に Stripe に買収され · 埋込ウォレットのデフォルトとして位置付けられた ^[extracted]
- Coinbase は対照路線:Base(L1)+ CDP(ウォレット)+ USDC(通貨)+ Commerce(SDK) ^[extracted]

## 仕組み / どのように機能するか

プロトコルの commoditization 後、take rate はオープンソース standard からは取れない(HTTP プロトコル料は徴収できない)。価値捕捉は **縦型 distribution コントロールポイント** へ上方移動せざるを得ない:ユーザーログインの [[fintech/embedded-wallet-fintech-disintermediation-overview|ウォレット中抜き]] を制する者 → agent のデフォルト決済経路を制する → transaction fee を徴収する。

Stripe 5層フルスタックのロジック:
1. **L1 チェーン**(Tempo · Stripe + Paradigm)— 決済最適化チェーン、7-10 validator、機関グレードの資格
2. **L2 / ウォレット**(Privy · Stripe 買収)— [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|埋込ウォレットデフォルト]]、5M+ Stripe マーチャントの checkout に組み込まれている
3. **ステーブルコイン**(USDB / Bridge · Stripe 傘下)— ネイティブ決済通貨([[fintech/stablecoin-chain-token-strategy-trilemma|チェーン × トークン × 戦略のトリレンマ]] 参照)
4. **SDK**(Stripe Checkout / Connect)— マーチャント側のゼロコード組込
5. **マーチャントトラフィック**(5M+ マーチャント)— 末端 distribution の実支配各層を追加するごとに縦型支配が深まる — プロトコルという公共財が大きいほど、Stripe の私有財ネットワーク効果は強くなる。

## 起源と進化

2024 Stripe が Bridge(USDB 発行体)を買収 → ステーブルコイン層に進出。2025.04 Stripe + Paradigm が Tempo(決済 L1)を合弁設立 → チェーン層を占有。2025.07 Stripe が Privy を買収 → ウォレット層を占有。2025.09 AP2 発表時に Stripe は 60+ パートナー名簿に存在せず — Stripe の戦略は「プロトコル覇権争いに参加せず、distribution のみを占有する」と明確である。2026 年中盤 FIDO が AP2 を引き継ぎ → AAIF となった後、Stripe 5層フルスタックの位置は基本的に挑戦不能となる。

類比:Visa / Mastercard も ISO 8583 プロトコル仕様を書かないが、主要な決済価値を依然捕捉している — **プロトコルは公共財、distribution は私有財**([[fintech/protocol-hedge-strategy-stripe-pattern|Stripe プロトコルヘッジ戦略]] 参照)。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ai-agent-payment-protocols-overview|7プロトコル総覧]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|プロトコル分層表]]
- [[fintech/central-banking-function-unbundling|中央銀行機能の解体5層]]
<!-- /wiki-links:managed -->

## 出典

- Privy「Privy and Stripe: Bringing crypto to everyone」（Stripe による wallet 層買収）— https://privy.io/blog/announcing-our-acquisition-by-stripe
- Tempo 公式サイト（Stripe + Paradigm の決済 L1 · チェーン層）— https://tempo.xyz/
- Coinbase Developer Platform（対照路線 Base + CDP + USDC + Commerce）— https://docs.cdp.coinbase.com/
- Coinbase x402（プロトコル層の公共財 commoditization）— https://github.com/coinbase/x402
- Google AP2（プロトコル覇権の対照 · Stripe は不参加）— https://github.com/google-agentic-commerce/AP2
