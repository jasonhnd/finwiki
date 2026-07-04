---
source: agent-economy/openai-stripe-agentic-commerce-protocol
source_hash: 1d4b9c0b692975b6
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "OpenAI + Stripe Agentic Commerce Protocol · ChatGPT Instant Checkout"
translated_at: 2026-07-04T00:00:00.000Z
---

# OpenAI + Stripe Agentic Commerce Protocol · ChatGPT Instant Checkout

## ウィキ上の位置づけ

このエントリは、ChatGPT ネイティブな checkout rail として [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]] の配下に置く。競合する mandate、HTTP payment、PSP、AI lab、card-network レイヤーを見るには [[agent-economy/ap2-overview|AP2]]、[[agent-economy/x402-http-payment-overview|x402]]、[[agent-economy/stripe-agent-toolkit-position|Stripe Agent Toolkit]]、[[agent-economy/ai-company-payment-landscape|AI-company payment landscape]]、[[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]] と併せて読むこと。より広い system / regulatory boundary は [[payments/INDEX|payments index]] を参照。

## 主要事実

- OpenAI は 2025-09-29 に ChatGPT の Instant Checkout を発表し、Stripe と構築した Agentic Commerce Protocol によって動作すると説明した。^[extracted]
- 初期の公開フローでは、米国の ChatGPT ユーザーが米国 Etsy seller から直接購入でき、OpenAI と Stripe は 100 万超の Shopify merchants が続く予定だと説明した。^[extracted]
- Stripe は ACP を OpenAI と共同開発した open standard と説明し、公開 ACP repository は OpenAI と Stripe が date-based spec version で維持している。^[extracted]
- ACP では merchant が merchant of record のままであり、settlement、refund、chargeback、compliance は OpenAI ではなく merchant と PSP が処理する。^[extracted]
- OpenAI の Delegated Payment Spec は、buyer flow から merchant / PSP に制約付き single-use payment token を渡す。Stripe の Shared Payment Token は最初の compatible implementation である。^[extracted]
- Stripe の 2026 年 SPT 拡張は、同じ seller-facing primitive の裏側で Mastercard Agent Pay と Visa Intelligent Commerce などの network-led agentic payment capabilities を支援するようになった。^[extracted]
- ACP は、agentic checkout を既存 merchant PSP stack に接続するため、verifiable mandate や HTTP 402 settlement から出発する [[agent-economy/ap2-overview|AP2]] / [[agent-economy/x402-http-payment-overview|x402]] に対する実務的な counterweight である。^[inferred]

## 仕組み / 動作原理

ACP は、OpenAI を merchant of record にせず、ChatGPT を agentic storefront に変える。Merchant は ACP の product-feed mechanism で商品データを共有し、ChatGPT は会話内で関連商品を表示し、ユーザーは ChatGPT UI で checkout を確認する。その後 merchant は ACP checkout call を受け取り、在庫、fulfillment、税、risk を自社 stack で検証し、既存の commerce backend で注文を承認または拒否する。

重要なのは payment path の設計である。OpenAI は maximum chargeable amount と expiry を持つ one-time delegated payment request を作る。Merchant の trusted PSP / vault はその payload を受け取り、scoped payment token を返す。OpenAI は checkout completion 時に token を転送し、merchant は既存 PSP setup で charge する。Stripe implementation ではこの token が Shared Payment Token (SPT) であり、buyer の承認済み payment credentials を表すが、raw card details を ChatGPT や新しい merchant-specific card-entry flow に露出しない。

この設計は、resource server が HTTP 402 を返し、resource 提供前に payment proof を求める [[agent-economy/x402-http-payment-overview|x402]] と異なる。また、agent が支出権限を持つことを verifiable mandate で証明する [[agent-economy/ap2-overview|AP2]] とも異なる。ACP の load-bearing object はより運用寄りで、agent checkout session、delegated payment token、merchant checkout endpoint、そして merchant が既に使う PSP rails である。

## 起源と進化

最初の public ACP moment は、2025-09-29 の "Buy it in ChatGPT" launch である。OpenAI は Instant Checkout を、ChatGPT が product discovery から purchase completion へ進む最初の step と位置付け、Etsy から開始し Shopify coverage を予定した。Stripe も同時に protocol を発表し、buyer が payment method を承認した後に Stripe が SPT を発行する chat 内 checkout と説明した。

その後 spec は launch artifact からより広い infrastructure に進化した。公開 ACP repository は dated spec snapshot を使い、2025-09-29 から 2026-04-17 までの visible release で checkout、delegated payment、cart、feed、order、authentication、MCP 関連追加を扱う。Stripe の 2026 年 docs でも、seller 側では ACP / UCP、agent 側では MPP / x402 などの machine-payment protocol と並置され、ACP は ChatGPT checkout feature だけでなく agent-commerce routing layer の一部になっている。

戦略的には、ACP は OpenAI に native commerce path を与え、各 merchant が crypto merchant になったり、stablecoin を受け入れたり、AP2-style mandate adoption を待つ必要を減らす。Stripe にとっては、agent が discover / initiate しても既存 payment processor が economic / compliance layer に残るため、PSP relevance を保つ。Visa Intelligent Commerce と Mastercard Agent Pay に向かう 2026 年 SPT 拡張はこの姿勢を補強しており、Stripe は複数の network-token / agent-token system を単一の SPT interface の裏側で抽象化できる。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ap2-overview|AP2 overview]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
- [[agent-economy/stripe-agent-toolkit-position|Stripe Agent Toolkit position]]
- [[agent-economy/ai-company-payment-landscape|AI-company payment landscape]]
- [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]]
<!-- /wiki-links:managed -->

## 出典

- OpenAI, "Buy it in ChatGPT: Instant Checkout and the Agentic Commerce Protocol" — https://openai.com/index/buy-it-in-chatgpt/
- Stripe newsroom, "Stripe powers Instant Checkout in ChatGPT and releases Agentic Commerce Protocol co-developed with OpenAI" — https://stripe.com/newsroom/news/stripe-openai-instant-checkout
- Agentic Commerce Protocol repository — https://github.com/agentic-commerce-protocol/agentic-commerce-protocol
- OpenAI Developers, Delegated Payment Spec — https://developers.openai.com/commerce/specs/payment
- Stripe Docs, Shared Payment Tokens — https://docs.stripe.com/agentic-commerce/concepts/shared-payment-tokens
- Stripe blog, "Supporting additional payment methods for agentic commerce" — https://stripe.com/blog/supporting-additional-payment-methods-for-agentic-commerce
