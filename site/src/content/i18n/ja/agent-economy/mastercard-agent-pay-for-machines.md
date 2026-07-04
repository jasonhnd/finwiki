---
source: agent-economy/mastercard-agent-pay-for-machines
source_hash: 7ce63d815887839e
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Mastercard Agent Pay for Machines · AP4M machine-speed agent settlement"
translated_at: 2026-07-04T00:00:00.000Z
---

# Mastercard Agent Pay for Machines · AP4M machine-speed agent settlement

## ウィキ上の位置づけ

このエントリは、consumer-facing Agent Pay program を補完する Mastercard の machine-to-machine layer として [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]] の配下に置く。Card-network pilot layer は [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]]、mandate-style authorization は [[agent-economy/ap2-overview|AP2]]、HTTP-native micropayment は [[agent-economy/x402-http-payment-overview|x402]]、multi-rail settlement の観点は [[agent-economy/stablecoin-routing-agent-transactions|stablecoin routing for agent transactions]] と併せて読む。

## 主要事実

- Mastercard は 2026-06-10 に Agent Pay for Machines (AP4M) を発表し、always-on / machine-speed な agent / machine payment service と説明した。^[extracted]
- Mastercard は AP4M を high-frequency、low-latency、low-value payments 向けとし、fractions of a cent の支払いも含むと説明した。^[extracted]
- この service は 2025 年に導入された Mastercard Agent Pay を基盤にするが、継続的に背景で実行される automated micro- / machine-driven transactions を対象にする。^[extracted]
- AP4M は credentialing、permissioning、transacting、cards / accounts / stablecoins にまたがる guaranteed multi-rail settlement を支援する。^[extracted]
- Mastercard は Adyen、Ant International、Checkout.com、Cloudflare、Coinbase、Global Payments、OKX、Polygon、Solana Foundation、Stripe、Tempo、Turnkey、Utila など 30 社超の initial participants / supporters を挙げた。^[extracted]
- Mastercard の product page は、upfront spending limits、on-chain smart-contract authorization、off-chain verifiable vouchers、fiat / stablecoin での provider settlement を説明している。^[extracted]
- CoinDesk は、agent permissions / credentials が当初 Polygon、Solana、Base blockchains に記録されると報じた。^[extracted]
- AP4M は [[agent-economy/visa-mastercard-agentic-commerce-pilots|Mastercard Agent Pay pilots]] と異なり、consumer agents が merchant から買うだけでなく、agent-to-agent / machine-to-machine economic activity を中心に置く。^[inferred]

## 仕組み / 動作原理

AP4M は machine commerce を settlement と trust の問題として扱う。Business は agent に明確な task と funding method を与え、permissions と spending limits を設定し、authorization を記録する。Agent は provider を発見し、task を実行し、high-frequency micro / macro payments のために verifiable off-chain credentials や vouchers を使う。Service providers はそれらの支払いを aggregate し、settlement に提出し、fiat または stablecoin で preferred payout を受け取る。

4 つの operating capabilities は Mastercard の既存 network strengths に対応する。Credentialing は counterparties が verified agents を認識できるようにする。Permissioning は事前設定された limit 内に spending を保つ。Transacting は verified participants が providers 間で接続し、continuous commerce を実行できるようにする。Settlement は cards、bank accounts、stablecoins にまたがる Mastercard-backed payment assurance で flow を包む。これにより AP4M は [[agent-economy/x402-http-payment-overview|x402]] への card-network answer になる。両者は small automated payments を狙うが、x402 は HTTP 402 と stablecoin proof から始まり、AP4M は network credentials、spend controls、guaranteed settlement から始まる。

On-chain component は payment rail 全体ではない。Public reporting と Mastercard 自身の例は on-chain authorization / credential state を示す一方、high-frequency execution は off-chain cryptographic verification と aggregated settlement を使える。この hybrid design のため、AP4M は単一 chain の stablecoin protocol ではなく [[agent-economy/stablecoin-routing-agent-transactions|stablecoin routing]] の隣に置くべきである。

## 起源と進化

Mastercard は 2025 年、consumer を代理する trusted AI agents の payment participation に向けて Agent Pay を導入した。2026-06-10 に発表された AP4M は、同じ agent-trust thesis を background machine commerce に拡張する。つまり、人間が各 checkout を click しなくても、agent が compute、content、logistics resources、hosting、imagery、data などに支払う世界である。

Timing も重要である。2026 年半ばまでに [[agent-economy/x402-http-payment-overview|x402]] は HTTP-level paywall と per-call API settlement を agent-native pattern として提示し、[[agent-economy/ap2-overview|AP2]] は verifiable mandates を authorization layer として提示していた。AP4M は、同じ machine-speed space に card-network / bank-account universe を残す Mastercard の試みである。Microtransactions を stablecoins だけに任せるのではなく、Mastercard は stablecoins、accounts、cards を credentialed multi-rail service の中に包み込む。

Launch partner list も、意図的に mixed ecosystem を示している。Coinbase、Polygon、Solana Foundation、OKX、MoonPay、Rain、Ripple、Skyfire など crypto-native participants が、Adyen、Checkout.com、Global Payments、Getnet by Santander、Stripe など PSP / acquirer と並ぶ。この組み合わせは、AP4M が純粋な card product ではなく、複数 rail で settle し得る agent transactions の network-governed routing layer だという解釈を支える。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/visa-mastercard-agentic-commerce-pilots|Visa / Mastercard agentic commerce pilots]]
- [[agent-economy/ap2-overview|AP2 overview]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
- [[agent-economy/stablecoin-routing-agent-transactions|Stablecoin routing for agent transactions]]
- [[agent-economy/stripe-agent-toolkit-position|Stripe Agent Toolkit position]]
<!-- /wiki-links:managed -->

## 出典

- Mastercard press release, "Mastercard launches Agent Pay for Machines to unlock super-fast, always-on payments" — https://www.mastercard.com/us/en/news-and-trends/press/2026/june/mastercard-launches-agent-pay-for-machines.html
- Mastercard product page, "Mastercard Agent Pay for Machines" — https://www.mastercard.com/us/en/business/artificial-intelligence/mastercard-agent-pay/agent-pay-for-machines.html
- CoinDesk, "Mastercard prepares agentic commerce platform for a future where AI agents make payments" — https://www.coindesk.com/business/2026/06/10/mastercard-prepares-for-a-future-where-ai-agents-make-payments-with-latest-introduction
