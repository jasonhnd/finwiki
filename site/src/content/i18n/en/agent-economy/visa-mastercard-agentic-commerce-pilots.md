---
source: agent-economy/visa-mastercard-agentic-commerce-pilots
source_hash: 566afa82411620e7
lang: en
status: machine
fidelity: ok
title: "Visa Intelligent Commerce + Mastercard Agent Pay · Card-Network Agentic Commerce Pilots"
translated_at: 2026-05-30T17:31:02.648Z
---

# Visa Intelligent Commerce + Mastercard Agent Pay · Card-Network Agentic Commerce Pilots

## TL;DR

Visa Intelligent Commerce (announced 2024-Q4, expanded with the Trusted Agent Protocol in 2025) and Mastercard Agent Pay (announced early 2025) are the card networks' answer to the same problem that [[agent-economy/x402-http-payment-overview|x402]], [[agent-economy/ap2-overview|AP2]], and [[agent-economy/erc-7715-overview|ERC-7715]] are answering from the open-protocol side: how does an AI agent pay on behalf of a user, with provable authorization, in a way that the merchant can actually accept? The card-network bet is that the **closed-loop rails they already operate** — tokenization, network-side risk scoring, chargeback / dispute mechanics, issuer fraud-liability shift — are exactly the missing pieces the open-protocol stack lacks, and that wrapping those rails in an agentic-commerce API is faster than waiting for stablecoin rails to grow chargeback infrastructure from scratch. The pilots route on existing card-on-file primitives extended with agent-specific token types, agent-attestation headers, and (in Visa's case) a public partnership with Google's AP2 to bridge open-protocol mandates into the closed-loop network. The competitive thesis: agentic commerce will not be one network; it will be a closed-loop card track (Visa + Mastercard, fast to ship, expensive, high consumer protections) running alongside an open-protocol track (x402 + AP2 + ERC-7715 + stablecoin, slower to ship, cheap, weak consumer protections), with most agents over time learning to route the right transaction to the right track.

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy index]] as the card-network reading of the agent-payment competitive landscape. Read it against [[agent-economy/ap2-overview|AP2]] (which Visa publicly partnered with), [[agent-economy/ap2-adoption|AP2 adoption landscape]] (which already flags the Visa angle), [[agent-economy/x402-http-payment-overview|x402]] (the open-protocol counterpart Visa Intelligent Commerce is explicitly competing against), and [[agent-economy/stripe-agent-toolkit-position|the Stripe Agent Toolkit position]] (which spans both camps via Stripe Issuing). For the broader system / regulatory boundary, [[fintech/INDEX|fintech index]] and [[payments/INDEX|payments index]].

## Mechanism · Visa Intelligent Commerce

Visa Intelligent Commerce is the umbrella program covering Visa's agent-commerce initiatives. The two load-bearing pieces:

**Visa Trusted Agent Protocol.** A signed-credential format for verifying that a transaction was authorized by an AI agent operating on behalf of a known cardholder. The protocol extends Visa's existing tokenization stack (the Visa Token Service that already replaces 16-digit PANs with merchant-specific tokens on Apple Pay, Google Pay, click-to-pay, etc.) to a new token type that carries:

- the underlying cardholder identity (via VTS),
- an agent attestation — which agent platform issued the request, what its scope is, when the user authorized it,
- a per-transaction risk signal Visa's network can score against its standard fraud models,
- an optional reference to an AP2 mandate (Visa publicly committed to AP2 interoperability in 2025).

The transaction flows over standard Visa rails — through issuer, network, acquirer, merchant — but every hop knows it is an agent transaction and can apply different rules (different velocity limits, different fraud thresholds, different dispute defaults).

**Public AP2 partnership.** Visa is one of the named partners in [[agent-economy/ap2-overview|Google's AP2]] launch, and Visa committed to making the Trusted Agent Protocol *bidirectionally interoperable* with AP2 mandates — an AP2 mandate from a Google/Gemini agent can be verified inside the Visa network as a Trusted Agent attestation, and a Visa-issued attestation can satisfy an AP2 mandate at a merchant that speaks AP2. This is the most concrete public bridge between the closed-loop card track and the open-protocol track.

## Mechanism · Mastercard Agent Pay

Mastercard Agent Pay is structurally similar but with different emphasis. The shape:

**Tokenization extension.** Like Visa, Mastercard extends its existing tokenization service (Mastercard Digital Enablement Service, MDES — the same engine that powers Apple Pay / Google Pay on Mastercards) with an agent-specific token type. The token can be issued for use by a specific agent, with merchant-category-code restrictions, per-transaction velocity caps, and an expiry. Like a single-use card, but with cryptographic agent attestation built in.

**Agentic Tokens + Smart Data.** Mastercard pairs the token with enriched transaction metadata (merchant identity, item-level descriptors where available, dispute-relevant context) so that disputes arising from agent transactions can be adjudicated with more context than a normal card transaction. The product framing: "the agent's reason for the transaction is part of the transaction record."

**Issuer-side controls.** Issuing banks integrate Agent Pay by adding agent-specific authorization rules to their existing card-management stack. A user can, via their bank app, see "the following AI agents have authorization to spend on this card," with per-agent scope and a kill switch.

**No public AP2 commitment as of mid-2026.** Mastercard's stated posture is that it will support multiple agent-attestation protocols (AP2 if it becomes dominant; alternatives if not), but it has not made a public AP2 partnership announcement at the same scale as Visa. This is the most visible difference between the two networks' strategic positioning.

## Mechanism · what the card-network rails bring to agents that open-protocol does not

The strategic logic of the card-network pilots is that the open-protocol stack ([[agent-economy/x402-http-payment-overview|x402]] + USDC, [[agent-economy/erc-7715-overview|ERC-7715]] + 4337, etc.) is missing four things that took the card networks decades to build:

**Chargebacks and dispute resolution.** When an agent transacts in error — wrong merchant, wrong amount, prompt-injected, victim of social-engineering — the user needs a way to claw back funds. Cards have a 50+-year-old chargeback infrastructure with codified reason codes, regulated timelines, issuer-side liability for fraud, and merchant-side documentation requirements. The on-chain stack has nothing equivalent. The card-network pitch: "let an agent transact on a card and you inherit all of that."

**Issuer-side fraud liability shift.** Under existing card-network rules, an issuer is on the hook for certain categories of fraudulent transactions, and the merchant is on the hook for others. Agent transactions create a new question — who is on the hook when an agent was prompt-injected? — and the card networks are using the pilots to write that answer, in their favor and in a way that protects the user. The on-chain stack will eventually need to answer the same question and currently does not.

**Network-side risk scoring.** Visa and Mastercard process every transaction through machine-learning fraud models that have seen tens of billions of transactions. An agent transaction routes through the same scoring; the network can deny suspicious agent activity at the authorization step, in real time, without involving the merchant or the user. On-chain there is no equivalent network actor; risk has to be enforced at the user's wallet or at the merchant, both of which see only their own slice.

**Acceptance.** Visa and Mastercard are accepted by tens of millions of merchants. USDC is accepted by a much smaller set today; growth is real but the gap is large. For agent transactions targeting traditional merchants (which is most of the addressable market for the next several years) the card networks are the only path that actually works at scale.

## Agent-specific scenarios

**Scenario A — agent books a restaurant reservation that requires a card hold.** Open-protocol can't do this today; almost no restaurant accepts USDC for a hold. Card-network pattern: agent calls the Trusted Agent / Agent Pay API to mint a single-use token scoped to the merchant ID, with a $200 cap, valid for 48 hours. The merchant places the hold against the token; if the user shows up, the merchant releases the hold and runs the actual charge; if the user no-shows, the merchant captures the hold. Dispute mechanics are standard card-network.

**Scenario B — agent subscribes to a streaming service that doesn't accept stablecoin.** Same pattern as above, but with a recurring authorization. The token is recurring, scoped to the merchant, with the user's monthly cap. If the streaming service raises prices, the network can decline the over-cap transaction at authorization without the agent needing to know.

**Scenario C — agent transacts in a category the user has flagged as restricted.** User configures, via the issuer app, "no gambling, no alcohol, no adult content via agents." Issuer-side controls enforce this at authorization regardless of what the agent thinks it's doing — declines happen on the network rail. No equivalent enforcement exists in the open-protocol stack without merchant-side cooperation.

**Scenario D — agent transaction is later disputed by the user.** User says "I never authorized my agent to spend $500 at this merchant." Card-network chargeback path: user files dispute with issuer; issuer pulls the Trusted Agent / Agent Pay attestation, the AP2 mandate (if one was attached), and the merchant's documentation; standard reason-code adjudication applies, with the agent attestation as a new evidence type. Open-protocol equivalent: there isn't one — the on-chain transaction is final. Some [[agent-economy/erc-7715-overview|ERC-7715]] proposals discuss optional escrow / reversibility windows but nothing is standardized.

**Scenario E — agent transacts internationally with currency conversion.** Card networks handle FX through Visa/Mastercard cross-border infrastructure with regulated FX disclosures and (in some jurisdictions) regulated maximum FX markups. Agent calls the API in USD, the merchant receives in local currency, the network handles the conversion and discloses the rate. On-chain equivalent: agent does stablecoin-to-stablecoin via an aggregator, but FX disclosures are the agent platform's responsibility and there is no regulatory baseline yet.

**Scenario F — agent splits a payment across multiple users (group buying, shared subscriptions).** Card-network pattern: agent issues multiple Trusted Agent tokens against multiple cards, each with the user's individual cap. Network settles each leg independently against the merchant of record. Open-protocol equivalent works on-chain but loses the per-leg dispute path.

## Regulatory framing · closed-loop network rules vs open-protocol freelancing

The card networks operate under a regulatory framing that the open-protocol stack genuinely does not have:

**Network rules are quasi-regulatory.** Visa Core Rules, Mastercard Rules, and the Reg E / PSD2 / equivalent frameworks they implement create a regulated commerce envelope. Every merchant in good standing has agreed to a set of obligations (dispute response timelines, evidence formats, prohibited categories) that the network enforces by threatening loss of acceptance. Wrapping agentic commerce inside this envelope inherits the envelope; the open-protocol stack has to build any equivalent enforcement from scratch.

**Issuing-bank liability.** Cards are issued by banks regulated as banks. Bank issuers have explicit obligations (Reg E in the US, PSD2 in the EU) to handle unauthorized transactions in defined ways. Agent transactions disputed as unauthorized inherit those obligations — *the bank* is the regulated party that has to make the user whole within defined timelines. This is meaningfully stronger consumer protection than "your wallet's smart contract has whatever logic the wallet vendor wrote."

**Cross-border regulatory continuity.** Card networks operate under bilateral and multilateral treaties (interchange regulation in the EU, AML/CFT rules everywhere) that translate cleanly across jurisdictions. Stablecoin agent transactions are still in a patchwork — MiCA in the EU, GENIUS Act and OCC interpretive letters in the US, the [[fintech/japan-stablecoin-regulatory-landscape|JFSA's three-layer framework in Japan]], and a much messier picture elsewhere. The card networks already cleared the cross-border legal work.

**The agent-attestation question.** Both networks have to answer "what does it legally mean for an AI agent to attest that a user authorized a transaction?" Neither has fully answered, but both are working with regulators (US OCC, EU Commission, UK FCA, Singapore MAS) to define the attestation as a recognized authorization artifact — somewhere between a CVV check and a strong-customer-authentication signal. This is a piece of public-law infrastructure the open-protocol stack will also eventually need; the card networks are building it first.

## Competitive position

**vs [[agent-economy/x402-http-payment-overview|x402]] — different cost / consumer-protection trade-off.** x402 is sub-cent per transaction, USDC-final, no chargebacks, weak fraud defense at the network layer. Visa Intelligent Commerce / Mastercard Agent Pay are tens of bps to ~3% per transaction, dispute-protected, fraud-scored at the network. For high-value or first-party-merchant transactions the card networks win on every dimension except cost. For infra-to-infra micropayments x402 dominates because card economics don't support sub-dollar transactions.

**vs [[agent-economy/ap2-overview|AP2]] — Visa is bridging in, Mastercard is hedging.** Visa's public AP2 partnership is the strongest signal that the closed-loop and open-protocol tracks will interoperate at the *authorization* layer (AP2 mandates) even if they remain separate at the *settlement* layer. Mastercard's multi-protocol posture suggests it expects multiple agent-attestation protocols rather than AP2 dominance. The interoperability story is the most important second-order question for agent-economy architects.

**vs [[agent-economy/stripe-agent-toolkit-position|Stripe Agent Toolkit]] — overlapping at Issuing.** Stripe Issuing already mints virtual cards for agents via the Toolkit, riding on the same Visa / Mastercard rails. The networks' Intelligent Commerce / Agent Pay layer sits *below* Stripe Issuing — Stripe is the issuer-program-manager that uses the networks' agent-token infrastructure. So in practice an agent transaction through the Stripe Agent Toolkit's Issuing path may well ride on the Trusted Agent Protocol / Agent Pay rails without the developer seeing it. Stripe wins distribution; the networks win infrastructure economics.

**vs [[agent-economy/privy-aws-agentcore-default-wallet|Privy / AWS AgentCore]] — orthogonal layers.** Privy is a wallet; AgentCore is an agent host; the card networks are a settlement rail. They compose: agent runs on AgentCore, holds funds in Privy for on-chain, and uses a Stripe-issued Visa for off-chain. No direct competition.

**vs JPMorgan Kinexys / institutional rails.** Institutional rails (deposit tokens, [[fintech/institutional-stablecoin-deposit-token-thesis|deposit-token thesis]], permissioned blockchains) are agnostic to whether the initiator is human or agent because they operate on a much smaller, much more vetted counterparty set. The card-network agentic pilots are aimed at retail and SMB, where counterparty vetting is impossible and rails must enforce protections at the network. Different markets, different products.

## Related

- [[agent-economy/INDEX|agent-economy index]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]]
- [[agent-economy/ai-agent-payment-protocols-seven-layers|Seven-protocol layer table]]
- [[agent-economy/ai-agent-payment-protocols-commoditization|Agent payment protocols commoditization]]
- [[agent-economy/ap2-overview|AP2 overview]]
- [[agent-economy/ap2-adoption|AP2 adoption landscape]]
- [[agent-economy/ap2-technical-spec|AP2 technical spec]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 Cloudflare / AWS edge integration]]
- [[agent-economy/stripe-agent-toolkit-position|Stripe Agent Toolkit position]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet overview]]
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS AgentCore default wallet]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/embedded-wallet-network-effects-moat|Embedded wallet network effects moat]]
- [[agent-economy/ai-company-payment-landscape|AI company payment landscape]]
- [[agent-economy/erc-7715-overview|ERC-7715 wallet permissions]]
- [[agent-economy/erc-4337-account-abstraction-primer-for-agents|ERC-4337 primer for agents]]
- [[agent-economy/erc-7702-eoa-delegation-primer-for-agents|ERC-7702 primer for agents]]

## Sources

- Visa corporate communications — `corporate.visa.com`.
- Mastercard newsroom — `mastercard.com/news`.
- Google AP2 spec repository (partner list includes Visa) — `github.com/google-agentic-commerce/AP2`.
- Visa Developer Center — `developer.visa.com`.
- Mastercard Developer — `developer.mastercard.com`.
