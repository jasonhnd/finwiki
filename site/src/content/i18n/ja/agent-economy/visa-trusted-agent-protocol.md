---
source: agent-economy/visa-trusted-agent-protocol
source_hash: 7c651fcd9eefc1d8
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Visa Trusted Agent Protocol · signed-agent authentication for commerce"
translated_at: 2026-07-04T00:00:00.000Z
---

# Visa Trusted Agent Protocol · signed-agent authentication for commerce

## ウィキ上の位置づけ

このエントリは、merchant traffic に対する Visa の signed-agent authentication layer として [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]] の配下に置く。TAP は standalone settlement rail というより identity、intent、payment-context headers の層であるため、[[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]]、[[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity bridge]]、[[agent-economy/x402-cloudflare-aws-edge-integration|x402 Cloudflare / AWS edge integration]] と併せて読む。より広い payment-system context は [[payments/INDEX|payments index]] を参照。

## 主要事実

- Visa は 2025-10-14 に Trusted Agent Protocol (TAP) を発表し、safer agent-driven checkout のための ecosystem-led framework と位置付けた。^[extracted]
- Visa は TAP を Cloudflare と共同開発し、Visa Developer Center と GitHub で利用可能にしたと説明した。^[extracted]
- Visa は TAP を、AI-led shopping and payments に向けた broader Visa Intelligent Commerce initiative の一部として位置付けた。^[extracted]
- TAP は agent-specific cryptographic signatures を使い、merchant が commerce intent を持つ trusted agents と malicious automation / ordinary bots を区別できるようにする。^[extracted]
- Visa Developer specification は `agent-browser-auth` と `agent-payer-auth` の `Signature-Input` tag を認識し、timestamp、nonce、key identifier、signature validation checks を要求する。^[extracted]
- Cloudflare は TAP と Mastercard Agent Pay が Web Bot Auth、HTTP Message Signatures、public-key cryptography、registered agent public-key directories を活用すると説明し、その例では `alg="Ed25519"` を使っている。^[extracted]
- Visa は Adyen、Ant International、Checkout.com、Coinbase、CyberSource、Elavon、Fiserv、Microsoft、Nuvei、Shopify、Stripe、Worldpay の 12 社を early feedback partners として挙げた。^[extracted]
- TAP は [[agent-economy/x402-http-payment-overview|x402]] や card-network tokens を置き換えるのではなく補完する。Agent interaction を認証し、payment context を運べるが、settlement は merchant が選ぶ rail で行われる。^[inferred]

## 仕組み / 動作原理

TAP は agent の merchant への HTTP interaction に署名する。Trusted agent は target authority、path、timestamps、nonce、key identifier、algorithm、agent が browsing か payment かを示す tag に request を bind する HTTP Message Signature fields を含める。Merchant、CDN、network validator は、signature が存在し、fresh で、nonce が再利用されておらず、trusted public key で検証可能で、`agent-browser-auth` や `agent-payer-auth` などの interaction tag を持つことを確認する。

これにより TAP は authentication and intent layer になる。Browsing 時、merchant は request が scraper / fraud traffic ではなく legitimate commerce agent かを判断できる。Payment 時、agent は payment data を同じ interaction context に結び付ける signature を持つ Agentic Payment Container を含められる。Visa specification は card metadata、credential hashes、encrypted payment payloads、402-style access patterns に向けた browsing IOUs の fields を説明している。Merchant は、続行、payment request、checkout completion の判断に足る trusted context を受け取れる。

Cloudflare connection は運用上重要である。Cloudflare の Web Bot Auth は、request が merchant application に届く前に web-infrastructure layer が signatures と agent keys を validate する方法を与える。これにより TAP は [[agent-economy/x402-cloudflare-aws-edge-integration|edge-based payment and agent routing]] と組み合わせやすい。Merchant は infrastructure に agent classification を任せ、その後に既存 checkout stack、Visa Intelligent Commerce token flows、その他 rails を使って payment を完了できる。

## 起源と進化

Visa は 2025 年 10 月、具体的な merchant problem に対して TAP を発表した。AI-driven retail traffic は急増していたが、bot detection systems は legitimate shopping agents と malicious automation を安定して区別できなかった。Visa の発表は、legitimate agents を誤って block しないこと、guest / logged-in agent checkout を支援すること、agent の背後にある consumer と payment data への visibility を保つことを merchant needs として強調した。

この protocol は open agent-payment systems への strategic response でもある。[[agent-economy/ap2-overview|AP2]] は mandate による user authorization の証明に注力し、[[agent-economy/x402-http-payment-overview|x402]] は HTTP-native payment challenge / proof に注力する。TAP は一層手前で、「この HTTP request は recognized agent から来ており、current authorization と usable payment context を持つと merchant が信頼できるか」を問う。このため TAP は payments だけでなく [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity]] の隣にも置くべきである。

2026 年までに、Visa Intelligent Commerce、TAP、Stripe の SPT expansion は card-network-friendly agentic commerce stack に収束しつつあった。Agent は TAP で認識され、payment context や network token を運び、Stripe などの PSP が transaction を処理できる。Merchant は新しい settlement protocol のために checkout を作り直す必要がない。その trade-off は、TAP が card-network trust and acceptance を継承する一方、x402-style rails はより internet-native な micropayment economics を保つことである。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]]
- [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|Agent identity bridge]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 Cloudflare / AWS edge integration]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
- [[agent-economy/openai-stripe-agentic-commerce-protocol|OpenAI + Stripe ACP]]
<!-- /wiki-links:managed -->

## 出典

- Visa press release, "Visa Introduces Trusted Agent Protocol" — https://usa.visa.com/about-visa/newsroom/press-releases.releaseId.21716.html
- Visa Developer Center, Trusted Agent Protocol specifications — https://developer.visa.com/capabilities/trusted-agent-protocol/trusted-agent-protocol-specifications
- Visa Trusted Agent Protocol GitHub repository — https://github.com/visa/trusted-agent-protocol
- Cloudflare blog, "Securing agentic commerce: helping AI Agents transact with Visa and Mastercard" — https://blog.cloudflare.com/secure-agentic-commerce/
- Cloudflare press release, payments companies collaboration for agentic commerce — https://www.cloudflare.com/press/press-releases/2025/cloudflare-collaborates-with-leading-payments-companies-to-secure-and-enable-agentic-commerce/
- Visa Intelligent Commerce — https://www.visa.com/en-us/solutions/intelligent-commerce
