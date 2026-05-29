---
title: Agent 決済プロトコル commoditization と価値の上方移動 · Stripe 5層 + Privy デュアルデフォルト
aliases: [agent-payment-commoditization, agent payment value capture, Stripe 5層 Privy デュアルデフォルト]
domain: agent-economy
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [agent-economy, ai-agent, payments, commoditization, stripe, privy, value-capture]
sources:
  - https://privy.io/blog/announcing-our-acquisition-by-stripe
  - https://tempo.xyz/
  - https://docs.cdp.coinbase.com/
  - https://github.com/coinbase/x402
  - https://github.com/google-agentic-commerce/AP2
status: candidate
---

# Agent 決済プロトコル commoditization と価値の上方移動


## Wiki route

This entry sits under [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル全体図 · 7プロトコル俯瞰]]. Read it against [[payments/INDEX|payments index]] for peer / contrast context and [[systems/INDEX|systems index]] for the broader system / regulatory boundary.

## Key facts

- プロトコル層の commoditization は WebAuthn / OAuth / OpenID Connect の経路に類比される ^[inferred]
- Stripe 5層 = Tempo(L1)+ Privy(wallet)+ USDB / Bridge(ステーブルコイン)+ Stripe Checkout(SDK)+ 5M+ マーチャント(トラフィック) ^[extracted]
- Privy は 2025 に Stripe に買収され · 埋込ウォレットのデフォルトとして位置付けられた ^[extracted]
- Coinbase は対照路線:Base(L1)+ CDP(wallet)+ USDC(通貨)+ Commerce(SDK) ^[extracted]
- プロトコル層に take rate はなく、アプリケーション層が SaaS / transaction fee / platform fee を取る ^[inferred]

## Mechanism / How it works

プロトコルの commoditization 後、take rate はオープンソース standard からは取れない(HTTP プロトコル料は徴収できない)。価値捕捉は **縦型 distribution コントロールポイント** へ上方移動せざるを得ない:ユーザーログインの [[fintech/embedded-wallet-fintech-disintermediation-overview|wallet 中抜き]] を制する者 → agent のデフォルト決済経路を制する → transaction fee を徴収する。

Stripe 5層フルスタックのロジック:
1. **L1 チェーン**(Tempo · Stripe + Paradigm)— 決済最適化チェーン、7-10 validator、機関グレードの資格
2. **L2 / wallet**(Privy · Stripe 買収)— [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|埋込 wallet デフォルト]]、5M+ Stripe マーチャントの checkout に組み込まれている
3. **ステーブルコイン**(USDB / Bridge · Stripe 傘下)— ネイティブ決済通貨([[fintech/stablecoin-chain-token-strategy-trilemma|チェーン × トークン × 戦略のトリレンマ]] 参照)
4. **SDK**(Stripe Checkout / Connect)— マーチャント側のゼロコード組込
5. **マーチャントトラフィック**(5M+ マーチャント)— 末端 distribution の実支配

各層を追加するごとに縦型支配が深まる — プロトコルという公共財が大きいほど、Stripe の私有財ネットワーク効果は強くなる。

## Origin & evolution

2024 Stripe が Bridge(USDB 発行体)を買収 → ステーブルコイン層に進出。2025.04 Stripe + Paradigm が Tempo(決済 L1)を合弁設立 → チェーン層を占有。2025.07 Stripe が Privy を買収 → wallet 層を占有。2025.09 AP2 発表時に Stripe は 60+ パートナー名簿に存在せず — Stripe の戦略は「プロトコル覇権争いに参加せず、distribution のみを占有する」と明確である。2026 年中盤 FIDO が AP2 を引き継ぎ → AAIF となった後、Stripe 5層フルスタックの位置は基本的に挑戦不能となる。

類比:Visa / Mastercard も ISO 8583 プロトコル仕様を書かないが、主要な決済価値を依然捕捉している — **プロトコルは公共財、distribution は私有財**([[fintech/protocol-hedge-strategy-stripe-pattern|Stripe プロトコルヘッジ戦略]] 参照)。

## Counterpoints

- 「Stripe 5層フルスタック」は垂直統合が横型開放より優位という前提に立つ — 歴史的に AOL のフルスタックはオープン Web に敗北しており、垂直統合は逆に stall する可能性がある
- Privy / Bridge 買収統合のリスクはまだ完全には検証されていない(2026.05 時点でまだ 18 ヶ月以内)
- Coinbase フルスタック(Base + CDP + USDC + Commerce)は同等の代替案 · 勝敗未定
- 規制が wallet portability を強制する可能性(OPEN BANKING の類比)→ wallet デフォルト位置が無効化される

## Open questions

- 中国の Alipay / WeChat Pay は対応する agent 決済 5 層フルスタックを打ち出すか?
- インドの UPI は agent 決済層に拡張するか?
- 規制(OCC / FinCEN / EU)の wallet デフォルト位置に対する反トラスト姿勢はいつ顕在化するか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ai-agent-payment-protocols-overview|7プロトコル総覧]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|プロトコル分層表]]
- [[fintech/central-banking-function-unbundling|中央銀行機能の解体5層]]
<!-- /wiki-links:managed -->

## Sources

- Privy「Privy and Stripe: Bringing crypto to everyone」（Stripe による wallet 層買収）— https://privy.io/blog/announcing-our-acquisition-by-stripe
- Tempo 公式サイト（Stripe + Paradigm の決済 L1 · チェーン層）— https://tempo.xyz/
- Coinbase Developer Platform（対照路線 Base + CDP + USDC + Commerce）— https://docs.cdp.coinbase.com/
- Coinbase x402（プロトコル層の公共財 commoditization）— https://github.com/coinbase/x402
- Google AP2（プロトコル覇権の対照 · Stripe は不参加）— https://github.com/google-agentic-commerce/AP2

