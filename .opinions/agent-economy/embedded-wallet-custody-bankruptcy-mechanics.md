---
title: "[opinion] Embedded-wallet custody bankruptcy mechanics · what happens to end-user funds if Privy / Stripe / Coinbase CDP / AWS Bedrock fails"
source_entry: agent-economy/embedded-wallet-custody-bankruptcy-mechanics.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Embedded-wallet custody bankruptcy mechanics · what happens to end-user funds if Privy / Stripe / Coinbase CDP / AWS Bedrock fails

> 出典エントリー: `agent-economy/embedded-wallet-custody-bankruptcy-mechanics.md`

## Counterpoints

- **"Self-custodial" is contested terminology.** MPC + TEE designs depend on the provider's server-side shard remaining accessible. Some custody attorneys argue this is substantively custodial regardless of how the marketing describes it. SAB 121 (now rescinded as SAB 122) had effectively pulled in this concern in 2022-2024. The legal characterization is jurisdiction-specific.
- **User backup discipline is the real failure mode.** Surveys of consumer wallet recovery suggest that a significant fraction of users have not actually verified that their cloud backup or Passkey sync works. Provider Ch. 11 + a non-functional user-side backup = total loss for that user.
- **The pre-conversion fiat-side protection is more fragile than commonly stated.** FDIC pass-through depends on the intermediary maintaining records that allow the FDIC to identify each end-customer. Synapse and similar 2024 failures showed that this recordkeeping is non-trivial in practice. See FDIC public materials on the Synapse receivership.
- **Anchorage / BitGo / Fireblocks are not embedded-wallet alternatives.** They are qualified-custodian alternatives, occupying a different layer of the stack. The institutional pattern is to use both — embedded for hot operational flow, qualified custodian for cold reserves.
- **Stablecoin issuer failure dominates wallet provider failure as a risk source.** If [[fintech/usd-stablecoin-interchange|USDC / USDT / USDB]] de-pegs or its reserves fail, the on-chain stablecoin balance loses value even if the wallet is fully recoverable. Wallet bankruptcy mechanics do not protect against issuer reserve failure.
- **Regulator-imposed wind-down can override design intent.** A regulator (NYDFS, FCA, FSA) can require a wind-down period during which the provider cannot ship new signatures or new shard reconstructions. Even an asset that is "yours" can be operationally frozen for weeks.

## Open questions

- Does any major jurisdiction propose a SIPC-style insurance scheme for embedded-wallet end-user funds in 2026-2027?
- Do FDIC + OCC issue formal guidance on bank-fronted embedded wallets after the SAB 121 → SAB 122 transition?
- Does Stripe / Privy publish a Resolution Plan equivalent for the Stripe + Privy + Bridge + Tempo stack as the regulated footprint grows?
- Does Coinbase publish a separate bankruptcy-remoteness opinion for CDP-managed wallets analogous to its Coinbase Custody opinion?
- Does a major embedded-wallet provider failure during 2026-2028 produce a litigated test case for whether MPC server-side shards are "customer property" in bankruptcy?
- Does the [[agent-economy/agent-actorship-debate|agent-actorship debate]] interact with bankruptcy law when the wallet's principal is an AI agent rather than a human?
