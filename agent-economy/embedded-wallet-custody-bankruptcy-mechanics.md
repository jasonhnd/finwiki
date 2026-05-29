---
title: Embedded-wallet custody bankruptcy mechanics · what happens to end-user funds if Privy / Stripe / Coinbase CDP / AWS Bedrock fails
aliases:
  - embedded wallet custody bankruptcy mechanics
  - embedded wallet provider failure end-user funds
  - MPC key reconstruction custody bankruptcy
  - Stripe Treasury custody chain
  - SIPC FDIC pass-through analog embedded wallet
  - Privy bankruptcy MPC shard recovery
  - Coinbase CDP failure user wallet survival
  - AWS Bedrock TEE failure wallet impact
domain: agent-economy
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [agent-economy, embedded-wallet, custody, bankruptcy, mpc, tee, key-reconstruction, social-recovery, multisig, sipc, fdic, stripe-treasury, regulatory-protection]
status: active
sources:
  - https://docs.privy.io/security
  - https://docs.cdp.coinbase.com/get-started/security
  - https://magic.link/docs/wallets/security
  - https://stripe.com/treasury
  - https://www.fdic.gov/
  - https://www.sipc.org/
  - https://www.sec.gov/divisions/marketreg/sipc-protection.htm
  - https://www.sec.gov/news/statement/staff-statement-on-sab-121
  - https://www.fca.org.uk/firms/cryptoassets
  - https://www.fsa.go.jp/en/news/2023/20230630/01.pdf
  - https://www.fsa.go.jp/en/policy/payments/index.html
  - https://www.mas.gov.sg/regulation/payments
  - https://www.uncitral.org/
  - https://www.ssrn.com/
---

# Embedded-wallet custody bankruptcy mechanics · what happens to end-user funds if Privy / Stripe / Coinbase CDP / AWS Bedrock fails

## TL;DR

End-user funds in an embedded wallet are **on-chain at an address the user controls jointly with the provider**, not on the provider's balance sheet. If Privy, Stripe (the Privy parent), Coinbase CDP, or the underlying AWS Bedrock TEE infrastructure fails, the **legal-bankruptcy claim** on the cash a user might be owed is small (because the provider holds little or no user cash), but the **operational-recovery question** — can the user reconstruct their MPC key shards and move their on-chain assets to a new wallet — is the real risk. The category has converged on three protective primitives: (1) **MPC sharding** (no single party can sign alone), (2) **social-recovery + Passkey on-device shards** (the user side survives provider failure), and (3) **multisig-backed escape hatches** for higher-value institutional users. Embedded-wallet failure is structurally **closer to MetaMask losing its seed-phrase recovery UI than to FTX losing its customers' coins**, but the protection only holds if the user actually has a recoverable on-device or cloud shard. See [[agent-economy/embedded-wallet-network-effects-moat|integrator moat]] for the §501-friendly custody design, [[agent-economy/privy-embedded-wallet-overview|Privy overview]] for the canonical MPC + TEE model, and [[fintech/embedded-wallet-fintech-disintermediation-overview|fintech disintermediation overview]] for the broader UX framing.

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy index]]. Read it with [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet overview]] for the MPC + TEE primitive, [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]] for the alternative architecture, [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet network effects · integrator moat]] for the regulatory framing, and [[fintech/INDEX|fintech index]] for the deposit-protection and SIPC / FDIC analog framing.

## Four failure scenarios

| Scenario | What fails | Direct effect on user funds | Operational recovery question |
|---|---|---|---|
| 1. Privy / Magic / CDP becomes insolvent | The SDK vendor's company-level operations halt | None on the underlying chain balance | Can the user reconstruct an MPC signature without the provider's server-side shard? |
| 2. Stripe (the Privy parent) enters Ch. 11 | The corporate parent is in bankruptcy | None directly on the wallet address; the wallet does not custody fiat at Stripe (in most product configurations) | Does the Privy TEE remain operational under DIP financing, or does a bankruptcy court force a sale? |
| 3. Coinbase enters Ch. 11 | CDP's parent fails; Coinbase Wallet (consumer) and CDP (SDK) operations affected differently | Coinbase Wallet (consumer) is self-custody — addresses on chain are not affected. Coinbase Custody / Coinbase Prime (institutional custody) is in a separate qualified-custodian entity — also legally separated. The user-funds-at-risk question is largest for **Coinbase Exchange** balances, which are not the embedded-wallet category | For CDP-managed Smart Wallets, can the user sign without the CDP-side server shard? |
| 4. AWS Bedrock / AWS TEE outage or shutdown | The underlying TEE infrastructure that holds one MPC shard becomes unavailable | If outage is temporary, user signs once TEE recovers. If permanent (which has no precedent for AWS), users with recoverable on-device or cloud shards survive | Does the provider maintain a TEE-portability plan to migrate the server-side shard to a different cloud / hardware enclave? |

In all four scenarios the **on-chain wallet address persists** — it is a deterministic public-key-derived string that does not care about the corporate status of the SDK vendor. What can fail is **the ability to assemble a valid signature**, which depends on the surviving shards.

## MPC sharding · the structural protection

The embedded-wallet category converged on an [n / m] MPC threshold-signature design across most major providers. The canonical Privy split (documented at docs.privy.io/security):

- **Shard 1 (user-device).** Stored on the user's device, protected by Passkey / WebAuthn / Secure Enclave on iOS / Android, or by browser-credential APIs on desktop.
- **Shard 2 (provider TEE).** Stored inside a Trusted Execution Environment operated by the provider — AWS Nitro Enclaves or equivalent on Privy, Coinbase-managed enclaves on CDP, etc.
- **Optional shard 3 (user backup).** Cloud backup encrypted under the user's social-recovery key (Google / Apple ID-bound) or an explicit user-held backup.

A valid signature requires t-of-n shards (typically 2-of-2 or 2-of-3). The provider's TEE alone cannot sign — it lacks the user-device shard. The user-device alone cannot sign — it lacks the TEE shard. **The provider's bankruptcy by itself does not unlock or steal user funds.**

The failure mode that matters in a 2-of-2 design is the provider's TEE being **destroyed** (not stolen — destroyed). In a 2-of-3 design with a user cloud backup, the user can reconstruct using shard 1 + shard 3 even if shard 2 disappears entirely. This is why **2-of-3 with a recoverable user-side backup is the regulator-resilient configuration** and the default in most mid-2026 provider docs.

## Social-recovery + Passkey on-device shards

The user-side primitive has standardized around two patterns:

**Pattern A · Passkey + WebAuthn.** The user-device shard is held in the Secure Enclave (iPhone), TEE (Android), or platform credential store (browser), and unlocked by FaceID / TouchID / Windows Hello. The shard is never exported in plaintext. Risk: lost device with no cloud-synced Passkey = lost shard. Apple iCloud Keychain sync and Google Password Manager sync mitigate this; both sync Passkeys across the user's devices in the same Apple ID / Google account.

**Pattern B · Social recovery.** The user designates 3-5 "guardians" (trusted contacts, additional devices, hardware key) that can collectively (k-of-n) reconstruct the user-side shard. This is the ERC-4337 social-recovery primitive native to Argent and adopted in CDP Smart Wallets and other ERC-4337 wallets. Risk: collusion among guardians; UX cost of designation.

Embedded-wallet providers typically offer Pattern A as the default and Pattern B as an opt-in for higher-value users.

## Multisig escape hatches for institutional users

Higher-value institutional users (treasury, AI-agent operators with large stablecoin float, tokenization issuers) typically do not use 2-of-2 MPC alone. The patterns:

- **2-of-3 with one Safe multisig signer.** The user-side controls one signer, the provider's MPC system is a second, and a Gnosis Safe (or Safe{Wallet}) multisig under the user's institutional governance is the third. Provider failure = the user signs from device + Safe and recovers.
- **Smart account with timelock.** ERC-4337 / ERC-7702 smart accounts with a timelocked "recovery owner" — typically a hardware wallet or a Safe multisig — that can take over the account after a notice period.
- **Off-chain hot/cold sweep policy.** A scheduled sweep that periodically moves funds above a threshold from the embedded wallet to a separately-custodied [[fintech/onchain-finance-vs-crypto-bifurcation|cold storage]] or Anchorage / BitGo / Fireblocks qualified-custodian wallet. The embedded wallet is treated as a hot wallet, not a custody surface.

The pattern parallels the way the [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] documentation distinguishes between consumer self-custody, Smart Wallets, and Coinbase Prime / Custody (a regulated qualified-custodian entity under a New York limited-purpose trust charter, legally separated from Coinbase Exchange).

## Stripe Treasury · the fiat-side custody chain

When the embedded wallet is fed by fiat — for example, a Stripe Connect merchant accepting USD and converting to USDC via Privy + Bridge — the fiat side touches the **Stripe Treasury** custody chain before the on-chain leg begins. The chain (documented at stripe.com/treasury):

- **Stripe Payments Inc.** (a non-bank money transmitter in many US states, FCA-regulated in the UK, and operating under regional licenses elsewhere) holds the receivable from the card networks.
- **Stripe Treasury partner banks** (publicly Goldman Sachs and Evolve Bank & Trust historically) hold the actual cash deposits in segregated FBO ("for benefit of") accounts.
- **FDIC pass-through insurance** applies to the underlying partner-bank accounts on a per-end-customer basis, subject to the $250,000 standard maximum deposit insurance amount and the FDIC's recordkeeping requirements (12 CFR Part 370).
- **On the on-chain leg**, after conversion to USDC / USDB / etc., the fiat → stablecoin conversion is operationally inside Bridge (Stripe subsidiary, since 2025-06) or Circle / Tempo. Once the asset is stablecoin on chain, FDIC insurance no longer applies — stablecoin reserve protection is a different regime (Circle's reserve disclosure, GENIUS Act §501 design, etc.).

The bankruptcy question therefore splits into **two halves**:

1. **Pre-conversion fiat side.** Protected by FBO segregation + FDIC pass-through (where the partner bank meets the recordkeeping requirements). Stripe Ch. 11 alone does not lose user funds, because user funds are not on Stripe's balance sheet — they are at the FDIC-insured partner bank. Risk: failure of a partner bank, gap between Stripe Treasury recordkeeping and the FBO bank's recordkeeping, or a customer-facing "available balance" UI that misleads about insurance status.
2. **Post-conversion stablecoin side.** Protected by the issuer's reserve regime, not Stripe / Privy. USDC reserves are at BlackRock-managed money-market funds + Bank of New York Mellon cash + selected partner banks. USDB reserves are disclosed under Bridge / Stripe's chosen attestation regime. The user has an unsecured claim against the issuer in a reserve-failure scenario, not against Stripe / Privy.

## SIPC / FDIC pass-through analog · the regulatory question

There is no SIPC-equivalent regime for embedded-wallet end-user funds in any major jurisdiction as of mid-2026. The closest analogs:

| Regime | What it covers | Whether embedded wallets are inside scope |
|---|---|---|
| FDIC ($250K standard maximum deposit insurance per depositor per insured bank) | Bank deposits | Yes, on the **fiat-side leg** through partner-bank FBO accounts with pass-through |
| FDIC pass-through (12 CFR Part 370) | Banked balances held by a non-bank for the benefit of identifiable customers | Yes, conditional on the recordkeeping requirements being met by the non-bank intermediary (Stripe, etc.) |
| SIPC ($500K coverage, of which $250K may be cash) | Brokerage securities and cash held at a SIPC-member broker-dealer in a securities transaction | No, embedded wallets are not broker-dealer accounts |
| Coinbase NY Limited Purpose Trust charter (NYDFS) | Coinbase Custody Trust's institutional custody | Partial — applies to Coinbase Custody, not to CDP's embedded wallets |
| US OCC / SAB 121 (rescinded SAB 121 January 2025 via SAB 122) | Custody of crypto assets on bank balance sheets | Relevant to banks offering custody; not direct end-user protection |
| GENIUS Act §501 (US) | Stablecoin issuer reserves and segregation | Applies to USDC / USDB / equivalent reserves, not to wallet provider |
| FCA Cryptoasset register + safeguarding rules (UK) | Custodial wallet providers and stablecoin firms under the upcoming UK regime | Will apply to UK-domiciled wallet providers; embedded-wallet vendors typically design out of custody to avoid these |
| FSA Japan 暗号資産交換業 (Crypto Asset Exchange) | VASPs holding customer crypto | Embedded wallet designed not to "hold" customer crypto avoids classification — see [[exchanges/jp-cex-deposit-token-stablecoin-integration|JP CEX integration]] |
| MAS Singapore Payment Services Act | DPT (digital payment token) service providers | Embedded wallet vendors that hold or transmit DPTs are inside scope; pure SDK vendors that never touch keys may be outside |

The pattern is consistent: **none of the major jurisdictions has built a SIPC-style insurance scheme specifically for embedded-wallet end-user funds**. The regulatory bet is that the embedded-wallet design intrinsically avoids the problem (the user always controls one shard; the provider never holds the asset).

## What actually happens in each scenario · step-by-step

**Scenario 1 · Privy insolvent, Stripe still solvent.** Stripe's most plausible response is to keep Privy operating as an internal Stripe service under DIP financing or simple parent-funded continuation. If Privy is wound down anyway, Stripe issues migration tools that walk users through reconstructing their MPC signature using shard 1 + the user-side recoverable shard 3 (cloud backup), exporting the private key, and importing into MetaMask or any other wallet. **Outcome: no fund loss for users with recoverable backups; full loss for users with no backup and no working device.**

**Scenario 2 · Stripe in Ch. 11.** Stripe's USA business is a money transmitter and FCA-authorized firm in many other jurisdictions. Under Ch. 11, customer fiat in Stripe Treasury FBO accounts is segregated and (subject to FDIC recordkeeping compliance) protected by pass-through insurance. The Privy product continues operating as a debtor-in-possession service, likely sold to a successor operator. **Outcome: fiat-side funds protected via FBO segregation; on-chain wallet keys recoverable through MPC + on-device + cloud shards.**

**Scenario 3 · Coinbase in Ch. 11.** Coinbase's qualified-custodian entities (Coinbase Custody Trust under NYDFS, Coinbase Prime) are separately licensed and capitalized — the segregation is the explicit point of the trust-charter structure. CDP's embedded wallets are operationally Smart Wallets on chain, not custody balances on Coinbase's balance sheet. Coinbase Exchange spot balances are a separate category and are the largest fund-loss risk in a Coinbase Ch. 11 (this is why the question of whether exchange customer balances are bankruptcy-remote remained legally contested through the early 2020s; see SDNY docket on the FTX matter for comparable analysis). **Outcome for CDP-embedded-wallet users: MPC + on-device shard plus social recovery — fund-loss risk small.**

**Scenario 4 · AWS Bedrock TEE outage / shutdown.** AWS Nitro Enclaves run inside AWS regions. A regional outage = temporary signing unavailability for the affected region; cross-region MPC shard replication is the provider's standard mitigation. A full AWS Nitro shutdown has no precedent and would trigger industry-wide rebuild. **Outcome: temporary outages survivable; permanent infrastructure failure requires provider TEE-portability plan.**

## Legal-theoretic analysis · who actually owns the MPC shards

The legal characterization of an MPC shard in bankruptcy is unsettled and matters in proportion to how much weight the design puts on the server-side shard. Three plausible characterizations:

**Characterization 1 · The shard is the provider's property, but the user's signature right is a contractual right.** Under this view, in a Ch. 7 liquidation, the trustee inherits the shard and can theoretically refuse to participate in signature reconstruction. The user's remedy is a contract-damages claim, not a property claim. This is the worst case for the user and would make MPC-only designs effectively custodial from a bankruptcy perspective.

**Characterization 2 · The shard is constructively the user's property held by the provider as bailee or custodian.** Under this view, the shard is part of the user's bankruptcy-remote property and the trustee has no claim. This is the user-friendly view and tracks the way safe-deposit-box contents and trust-account assets are treated. The legal characterization in most major jurisdictions has not been definitively litigated; the closest analog is the treatment of stored encryption keys at custodian crypto exchanges, which the SDNY in the FTX matter treated as customer property after extensive litigation.

**Characterization 3 · The shard alone is non-functional and has no independent legal status.** Under this view, the shard cannot sign and therefore has no value as bankruptcy estate property; the question of whether to participate in reconstruction is a contract question between the user and the trustee. This is the most analytically clean view and aligns with the technical fact that no party can sign alone.

The mid-2026 industry practice is to design for characterization 2 or 3 (user-friendly), and to publish security documentation that makes the design intent explicit. Whether that intent survives bankruptcy litigation is untested.

## UNCITRAL and Uniform Law Commission guidance

UNCITRAL's Model Law on the Use and Cross-border Recognition of Identity Management and Trust Services (2022, with 2024-2025 supplements addressing electronic transferable records and AI-related considerations) and the US Uniform Law Commission's Uniform Electronic Transactions Act (UETA) and Revised Article 12 of the UCC (controllable electronic records, adopted in many US states in 2024-2026) supply some structural support for the user-friendly characterization. Key public-text features:

- **UCC Article 12** explicitly contemplates "controllable electronic records" — assets where control is established by the practical ability to derive economic benefit. An MPC shard that the user can use to participate in signature reconstruction is plausibly controlled by the user, even where physical possession is split.
- **UETA** treats electronic records and signatures as legally equivalent to paper, supporting the operational treatment of MPC-signed transactions as the user's transactions.
- **UNCITRAL Model Law on Electronic Transferable Records (MLETR)** supports the bankruptcy-remote treatment of electronic records held under appropriate technical controls.

None of these instruments has been definitively interpreted to cover embedded-wallet MPC shards. They supply the doctrinal scaffolding for arguments in the user-friendly direction, not a final answer.

## Agent-as-principal · the AI-side variant

A subtler bankruptcy question appears when the wallet's principal is an **AI agent operating under a user-issued [[agent-economy/erc-7715-overview|ERC-7715 wallet permission]]**, not a human end-user. The variant:

- The user has authorized an AI agent (running on AgentCore / Foundry / Vertex) to spend up to X USDC per period for specified purposes.
- The AI agent's wallet is the user's wallet, with permissions delegated to a session key controlled by the agent.
- The wallet provider (Privy, CDP) fails. The user's MPC shard survives. The agent's session key is also recoverable.

The structural answer is the same: the on-chain wallet address persists, the user can rotate the session key, and the AI agent simply resumes operation under a new session key. But the operational layer adds complexity — the agent's runtime is on a hyperscaler (AWS Bedrock, Azure AI Foundry, GCP Vertex), and if the hyperscaler's agent platform also fails in the same window, the agent cannot resume autonomously until the user manually intervenes. The dependency stack is: chain (resilient) → wallet provider (provider failure scenario) → agent runtime (hyperscaler failure scenario) → user (always available as fallback principal). See [[agent-economy/agent-actorship-debate|agent actorship debate]] for the deeper question of whether the agent has any independent legal status here.

## Comparative precedents from non-wallet custody failures

Three public custody-failure precedents inform reasonable expectations:

- **Mt. Gox (Tokyo District Court civil rehabilitation, 2014→).** A custodial exchange collapse where on-chain assets were lost / stolen and customer claims took a decade to begin distribution. Embedded-wallet design is structurally different (the provider does not hold the assets) but Mt. Gox set the expectation that custody-failure recovery is slow and bumpy.
- **FTX (SDNY Chapter 11, 2022→).** A custodial exchange collapse where the key litigated question — whether customer balances were customer property or estate property — took 18+ months to resolve. Recovery for customers ultimately exceeded petition-date USD values, but the time-to-distribution was long. Embedded-wallet design avoids the customer-property characterization risk entirely, but the comparison underscores why design-level avoidance of custody is preferable to litigated recovery.
- **Synapse (Delaware Ch. 11, 2024).** A non-bank intermediary failure where the FDIC pass-through depended on partner-bank recordkeeping that turned out to be incomplete. Customer funds were available in aggregate at the partner banks but could not be promptly disbursed to individual customers because the per-customer ledger could not be reconstructed. The relevant cautionary lesson for embedded-wallet providers is that recordkeeping discipline matters as much as legal characterization.

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|Agent economy index]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet overview]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/embedded-wallet-network-effects-moat|Embedded wallet integrator moat]]
- [[agent-economy/embedded-wallet-landscape-2026-consolidation|Embedded-wallet landscape 2026 consolidation]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded wallet fintech disintermediation overview]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe five-layer Trojan horse]]
- [[fintech/INDEX|Fintech index]]
<!-- /wiki-links:managed -->

## Sources

- Privy Security documentation (docs.privy.io/security)
- Coinbase Developer Platform Security documentation (docs.cdp.coinbase.com)
- Magic Security documentation (magic.link/docs/wallets/security)
- Stripe Treasury public documentation (stripe.com/treasury)
- FDIC public materials on pass-through insurance and 12 CFR Part 370
- SEC public materials including SAB 121 history and SAB 122 (January 2025)
- SIPC public materials on coverage scope
- FCA UK cryptoasset register and safeguarding rules consultation papers
- FSA Japan public materials on 暗号資産交換業 and 電子決済手段
- MAS Singapore Payment Services Act and DPT service-provider register
- US Bankruptcy Code Chapter 11 and Chapter 7 public statutes
- Public docket materials from FTX SDNY proceedings on customer-property characterization (for comparative custody analysis)
