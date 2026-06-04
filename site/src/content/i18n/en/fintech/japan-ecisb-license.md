---
source: fintech/japan-ecisb-license
source_hash: 0b05b363585f9afc
lang: en
status: machine
fidelity: ok
title: "Japan ECISB License"
translated_at: 2026-05-31T06:16:15.696Z
---

# Japan ECISB License


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> ⚠️ **Unverified**: The enforcement date of 2026 年 6 月 is an inference from discussion during conversation and has not been confirmed against the official source of the FSA / Payment Services Act amendment announcement. Verify before use.

An amendment to the Payment Services Act enacted in 2025 年 6 月 and **fully enforced 2026 年 6 月 (unverified)** introduced the "Electronic Payment Instruments and Crypto Asset Intermediary Business" (ECISB) license.

## Positioning


## Red line

**Acceptance and custody of user funds is strictly prohibited.** If operations involve the temporary holding of user funds (including transient pools during the netting process), the red line has been crossed and a full license is required.

## Core obligations

- Information security management
- Supervision of outsourced parties
- User protection
- No contact with user funds

## AML obligations

An ECISBO does not bear direct KYC/AML obligations under the Act on Prevention of Transfer of Criminal Proceeds (APTCP). These responsibilities are borne by the "affiliated party" (the main license holder, such as an EPIESP or bank). For the full picture of Japan VASP regulation see [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 規制タイムテーブル]].

## Application process and timeline

1. **Pre-consultation** (3-4  months): gap analysis + business model review
2. **Formal interview**: document review
3. **Formal application**

### Timeline bridge

| Point in time | Action |
|---------|------|
| 2026 Q2  | Full enforcement of the act (6  month). Begin ECISB preliminary investigation simultaneously |
| 2026 Q2-Q3  | Pre-consultation (3-4  months) |
| 2026 Q3-Q4  | Formal application |
| 2027 Q1  | Target license acquisition |

No successful cases as of 2026 年 4 月 (the act awaits full enforcement in 2026 年 6 月). First to obtain = first-mover compliance advantage.

## Fit for payment applications

3 -layer fit for non-custodial payment applications:

1. **Gateway (payment collection connection)**: builds only unsigned transaction instructions and does not touch funds → falls within the ECISB information routing category
2. **Clearing**: aggregates invoices, calculates net amounts, generates smart contract call instructions, settles via signature from self-custody wallets → falls within the ECISB information routing category

The self-custody principle (no contact with private keys, no custody of funds) is not only a design philosophy but also a prerequisite for using the lightweight ECISB license.

## Affiliated party requirement

An ECISBO requires an entity holding an EPIESP or CAESP license as its "affiliated party."

**Candidate: registered CEX** (a registered exchange holding a crypto asset exchange business registration qualifies as a CAESP and satisfies the affiliated-party condition) — for details on the registration system see [[exchanges/fsa-vasp-registration-system|FSA VASP 登録制度]]; for self-regulatory rules see [[exchanges/jvcea-self-regulatory-overview|JVCEA 自律規則概要]]. Comprehensive index of the Japan license system: [[financial-licenses/INDEX|日本金融ライセンス・インデックス]].

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互換市場 —— $33 兆軌道上の 0.01% ビジネス]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]
<!-- /wiki-links:managed -->
