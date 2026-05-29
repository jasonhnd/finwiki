---
title: "[opinion] Visa Intelligent Commerce + Mastercard Agent Pay · Card-Network Agentic Commerce Pilots"
source_entry: agent-economy/visa-mastercard-agentic-commerce-pilots.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Visa Intelligent Commerce + Mastercard Agent Pay · Card-Network Agentic Commerce Pilots

> 出典エントリー: `agent-economy/visa-mastercard-agentic-commerce-pilots.md`

## Counterpoints

**"Closed-loop wins" assumes agents care about chargebacks.** For autonomous agents that transact thousands of times per day, the per-transaction chargeback infrastructure is operationally too slow to matter — the agent has already moved on. The card networks' consumer-protection advantage is real for *retail-substituting* agent flows (the agent buys things a human would have bought) and weak for *infrastructure-consuming* agent flows (the agent calls APIs). The market will split accordingly.

**Network economics may not work for agent micropayments.** A Visa transaction has a per-transaction cost floor (interchange + scheme fee + acquirer markup) that makes it uneconomic below a few dollars. Agent transactions tend to skew small; either networks dramatically restructure fees for agent traffic or agents route small transactions off-network and large transactions on-network.

**Agent attestation is new attack surface for the networks.** Today the networks fraud-score against "is this card-not-present transaction consistent with the cardholder's history?" Adding "is this agent attestation forged?" expands the attack surface. Early evidence from the pilots (network-published fraud rates per attestation type) is not yet public.

**Issuer adoption is the gating factor.** Network protocols are useless if issuing banks haven't integrated them into their card-management apps. Major issuers (Chase, Capital One, Citi, the European retail banks) have committed publicly to Visa Intelligent Commerce / Mastercard Agent Pay support, but coverage outside the largest issuers is partial and uneven. For an agent to actually use a Trusted Agent / Agent Pay token, the user's specific issuer has to support the API.

**Two-network duopoly entrenchment.** A successful agent-commerce play that runs primarily on Visa + Mastercard tokens further entrenches the two-network duopoly that competition authorities have been trying to constrain for two decades. The EU's Digital Markets Act and the US Durbin Amendment 2.0 debates may interact with the agentic-commerce roll-out in ways neither network has fully publicly addressed.

**The on-chain track gets better, fast.** Several proposals to add reversibility / dispute windows to on-chain payments ([[agent-economy/erc-7715-overview|ERC-7715]] escrow extensions, retail-CBDC-style designs, application-layer escrow protocols) could erode the card networks' chargeback advantage over 24–36 months. The competitive window for "closed-loop wins because chargebacks" is real but not unlimited.

## Open questions

- How will the Visa AP2 partnership land technically — will Visa publish an open spec for AP2-to-Trusted-Agent attestation translation, or keep it as a Visa-internal mapping?
- Will Mastercard make an AP2 partnership announcement comparable to Visa's, or commit to an alternative attestation framework?
- What is the per-transaction fee structure for agent transactions on the closed-loop rails? Public schedules are partial.
- Does either network publish per-attestation-type fraud-rate data in a way that lets the market price the agent-attestation surface?
- Do major issuers (Chase, Capital One, EU retail banks) ship consumer-facing agent-authorization UI consistently, or does fragmentation kill the user-side scope-management story?
- Does the EU's DMA / PSD3 review treat agentic-commerce-token issuance as a regulated payment activity in its own right?
- Does Apple Pay / Google Pay add a first-party agent-authorization layer that piggybacks on the networks' tokens, becoming the consumer-facing surface for managing agent scopes across cards?
- Does a third path emerge — a real-time payments rail (FedNow, SEPA Instant, UPI-style) with agent-attestation built in — that competes with both card networks and open-protocol stacks?
