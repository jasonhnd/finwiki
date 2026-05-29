---
title: "[opinion] GENIUS Act §501 Denylist Mandate · 2025 Actual Implementation"
source_entry: fintech/genius-act-501-actual-implementation.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — GENIUS Act §501 Denylist Mandate · 2025 Actual Implementation

> 出典エントリー: `fintech/genius-act-501-actual-implementation.md`

## Counterpoints

- **The 24-hour window is operationally tight.** Multi-sig and timelocked-upgrade architectures may struggle to meet it consistently; the extension provision is therefore likely to be invoked frequently in the first 12–18 months.
- **The OFAC feed itself is the bottleneck.** Designations require investigation and inter-agency review; the freeze clock starts only on publication, but the upstream designation process can take weeks or months.
- **Smart-contract architecture creates centralization the broader crypto ethos rejects.** §501 is structurally incompatible with **fully decentralized stablecoins** (Sky USDS, Frax frxUSD, Liquity LUSD — see [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]] and [[fintech/frax-frxusd-defi-stablecoin|Frax]]), which is itself a policy choice with cultural implications.
- **Forks and copy tokens remain.** A denylisted balance can in principle be migrated to a fork or a copy token that does not implement §501; this is technically a separate token even if it shares a brand, and the enforcement reaches the **branded token**, not the user.
- **Privacy concerns.** The FinCEN reporting stream produces a granular surveillance dataset; its retention and access controls are a separate civil-liberties surface.
- **OFAC over-inclusion risk.** Mistaken or over-broad designations (the original Tornado Cash designation was eventually reversed) are now operationally consequential rather than merely advisory.
- **Compliance cost as moat.** Small issuers face a non-trivial fixed cost; the effect is to advantage incumbent issuers ([[fintech/paypal-pyusd-stablecoin|PYUSD]], Circle USDC, Tether USDT, Paxos USDG) and to reduce new-issuer entry — which may not be the policy intent.
- **Tether question remains open.** Tether's posture toward §501 is the single largest open variable; if Tether issues a US-PPSI version (USAT-style), it complies; if not, US off-ramp pressure continues to mount.

## Open questions

- Does **OFAC publish a separate GENIUS §501 channel** distinct from the SDN list, or are designations always co-published with SDN entries?
- What is the **early-2026 case count** of monthly FinCEN-reported freezes — high (≥1,000/month) suggests broad scope, low (≤100/month) suggests narrow targeting?
- Do **state regulators** add §501 conditions beyond the federal floor?
- How does **§501 interact with Section 4(d) of the GENIUS Act** (reserve requirements) when frozen balances complicate redemption guarantees?
- Is the **24-hour clock** measured from designation, publication, or issuer acknowledgement?
- Do **decentralized stablecoins** (USDS, frxUSD, LUSD) negotiate a sub-category or remain entirely outside the PPSI regime?
- Does the **Constitutional challenge to §501 issuance refusal** reach the Supreme Court — and if so, on what theory?
- Do **Wall Street custodians** (BNY Mellon, State Street) impose §501-equivalent controls on **non-stablecoin tokens** they custody as a self-defense measure, expanding the de facto scope of the regime?
