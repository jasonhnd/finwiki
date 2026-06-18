---
source: fintech/japan-ecisb-license
source_hash: 289d320f91401278
lang: en
status: machine
fidelity: ok
title: "Japan ECISB license"
translated_at: 2026-06-18T23:59:13.062Z
---

# Japan ECISB license


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> ⚠️ **Unverified**: the enforcement date of 2026 年 6 月 is a conjecture from the in-conversation discussion and has not been confirmed against an official source from the FSA / the Payment Services Act amendment notice. Confirm before use.

Through the amendment to the "Payment Services Act" that was enacted in 2025 年 6 月 and **takes full effect in 2026 年 6 月 (unverified)**, the "Electronic Payment Instruments and Crypto-Asset Intermediary Business" (ECISB) license was introduced.

## Positioning


## Red line

**Receiving / custodying user funds is absolutely prohibited.** If the business involves the temporary holding of user funds (including a provisional pool during the netting process), it has crossed the red line, and a full license is required.

## Core obligations

- Information-security management
- Supervision of subcontractors
- User protection
- Not touching user funds

## AML obligations

An ECISBO does not bear direct KYC/AML obligations under the "Act on Prevention of Transfer of Criminal Proceeds" (APTCP). These responsibilities are borne by the "affiliated party" (the holder of the main license, such as an EPIESP or a bank). For the full picture of Japanese VASP regulation, see [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 規制タイムテーブル]].

## Application process and timeline

1. **Preliminary interview** (3-4  months): gap analysis + review of the business model
2. **Formal interview**: document review
3. **Formal application**

### Timeline bridge

| Point | Action |
|---------|------|
| 2026  Q2 | The amendment takes full effect (in month 6 ). At the same time, the ECISB preliminary investigation begins |
| 2026  Q2-Q3 | Preliminary interview (3-4  months) |
| 2026  Q3-Q4 | Formal application |
| 2027  Q1 | Target for acquisition |

As of 2026 年 4 月 there are no successful cases (the amendment awaits the full enforcement of 2026 年 6 月). The first acquisition = a first-mover compliance advantage.

## Fit for payment-type apps

The 3 -layer fit of a non-custodial payment-type app:

1. **Gateway** (collection connection): constructs only unsigned transaction instructions and does not touch funds → falls within the scope of ECISB information routing
2. **Clearing**: aggregates invoices, calculates net offset amounts, generates smart-contract call instructions, and settles with the signature of a self-custody wallet → falls within the scope of ECISB information routing

The self-custody principle (not touching the private key, not custodying funds) is not only a design philosophy but also a precondition for using the lightweight ECISB license.

## Affiliated-party requirement

An ECISBO requires, as an "affiliated party," an entity that holds an EPIESP or CAESP license.

**Candidate: a registered CEX** (a registered exchange holding a crypto-asset exchange business registration has CAESP qualification and satisfies the affiliated-party condition) — for the detailed registration system see [[exchanges/fsa-vasp-registration-system|FSA VASP 登録制度]], and for the self-regulatory rules see [[exchanges/jvcea-self-regulatory-overview|JVCEA 自律規則概要]]. The comprehensive index of the Japanese license system is [[financial-licenses/INDEX|日本金融ライセンス・インデックス]].

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/usd-stablecoin-interchange|USD ステーブルコイン相互換市場 —— $33 兆軌道上の 0.01% ビジネス]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]
<!-- /wiki-links:managed -->
