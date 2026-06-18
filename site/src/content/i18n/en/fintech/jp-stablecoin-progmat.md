---
source: fintech/jp-stablecoin-progmat
source_hash: 6b58087deca62613
lang: en
status: machine
fidelity: ok
title: "Progmat, Inc. — Digital-asset platform overview"
translated_at: 2026-06-18T23:59:13.112Z
---

# Progmat, Inc. — Digital-asset platform overview


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> Not a JVCEA member · not a crypto-asset exchange operator · a provider of a digital-asset issuance platform · established 2023-10-02 · Marunouchi, Chiyoda-ku, Tokyo

## 1. Corporate entity / shareholders

- **Trade name**: 株式会社Progmat (English: Progmat, Inc.)
- **Date of establishment**: 2023年10月2日
- **Head office location**: 〒100-0005 Marunouchi 1-6-5 , Chiyoda-ku, Tokyo, Marunouchi Kitaguchi Building 9F (inside WeWork)
- **Representative Director, Founder and CEO**: Tatsuya Saito (齊藤 達哉)

**Shareholder composition** (disclosed portion · approximate):

| Shareholder | Shareholding ratio (approximate) | Role |
|---|---|---|
| Mitsubishi UFJ Trust and Banking (MUTB) | **approx. 49%** | sole largest shareholder · trust trustee |
| SMBC Group | approx. 15% | co-entrusting bank |
| Mizuho Trust & Banking | approx. 15% | co-entrusting bank |
| NTT Data | approx. 10% | technology partner |
| JPX (Japan Exchange Group) | approx. 5% | exchange partner |
| Datachain | approx. 3% | cross-chain technology |

> **Design intent**: MUTB 49%is intentional (FSA guidance). The three megabanks hold equal positions while avoiding sole MUFG control. The fact that SMBC and Mizuho can be used as independent corporations rather than as "MUFG subsidiaries" provides the rationale for decentralized infrastructure (→ see [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]]).

**Board composition (disclosed portion · summarized by role only)**:
- Representative Directors (part-time) × 1名
- Directors (part-time) × 4名 (seconded from shareholder banks / partner entities)
- CFO & CRO × 1名
- CTO × 1名

> Individual names are based on public information and may change. Confirm profile details each time in [[payment-firms/progmat|JapanFG / progmat company anchor]] and official IR.

---

## 2. License / registration status

- **Not a JVCEA member**: no crypto-asset exchange registration. Progmat itself is not a token "issuer" but a "provider" of the issuance platform.
- **No direct FSA registration**: operates as a provider of a digital-asset platform (the subjects of regulation are the issuer side, namely the respective trust banks / banks).
- **Related to Electronic Payment Instruments Business (EPI)**: SCs (stablecoins) issued on Progmat are classified under the amended Payment Services Act as "specified trust beneficiary rights (第3号EPI)." The issuers are trust companies such as Mitsubishi UFJ Trust and Banking and Mizuho Trust & Banking.
- **Predecessor**: began activity around 2019年 as an internal project within Mitsubishi UFJ Trust and Banking. Spun off into an independent corporation in 2023年10月.

---

## 3. Currencies handled (types of digital assets whose issuance is supported)

Progmat is not a token issuer but provides a platform that supports the issuance of the following 3 types of tokens:

### ST (security tokens / digital securities)
- **Domestic overall** 87件 / **Progmat** 45件 (assets under management, Progmat portion **over 4,522億円**, overall **over 6,674億円**)
- Main issuance track record: real-estate / hotel / office ST, MUFG subordinated-bond ST (the 2025-10  first deal), NTT Leasing ST (2026-03)
- Issuance trustees: Mitsubishi UFJ Trust and Banking (mainstay), Mizuho Trust & Banking, Alterna Trust, etc.

### SC (stablecoin / Progmat Coin)
- **Trust type (第3号EPI)**: the three megabanks MUFG, SMBC, and Mizuho are co-entrustors, with Mitsubishi UFJ Trust and Banking as the single trustee
- 2023-09: announcement of the cross-institutional study "Progmat Coin Joint Study Across Financial Institutions" (6社 participating)
- 2024-09: launch of Project Pax (a Datachain-linked, cross-border SC-transfer pilot)
- 2024-08: announcement of a licensed-SC issuance plan with DMM Group
- 2024-09: transition to an expanded-implementation phase for domestic and P2P remittance support
- SC issuance planned: **Progmat Coin (XJPY / XUSD, etc.)** — issuers are the respective trust banks, Progmat provides the platform

### UT (utility tokens / digital rights certificates)
- **over 2,804件** (cumulative from 2022年7月〜 to the latest point in time)
- Main uses: shareholder benefits, digital gifts, memberships, etc.

---

## 4. Scope of business

### Progmat's position = platform provider (≠ issuer)

```
[Issuer (trust bank / bank)]
    │ entrustment contract
    ▼
[Progmat] ← platform provision (SaaS + implementation support)
    │ token technology
    ▼
[Blockchain infrastructure]
    │ issuance
    ▼
[Investors / settlement participants]
```

**Main services (the "Progmat SaaS" announced 2024-11 )**:
- SaaS provision of a token-issuance / management infrastructure (for financial institutions)
- Implementation-support services (service design / regulatory response / technical implementation)
- Secretariat operation of the DCC (Digital-asset Co-creation Consortium): participating companies **331社** (as of 2026-05)

**Out of scope**: crypto-asset trading / exchange / custody by the company itself (because it is not a JVCEA member)

**Project Pax (cross-border)** — for details on the SWIFT-API-compatible corridor, see [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]:
- 2024-09: launch of a Japan-Korea SC-transfer pilot in coordination with Datachain / TOKI
- 2025-02: conclusion of an MOU with a Korean financial institution
- 2025-03: a Hong Kong – Japan trade-settlement proof of concept (in coordination with IDA / Datachain / TOKI)
- 2026-02: Ava Labs / Datachain strategic partnership (accelerating public-chain financial infrastructure)

**Latest developments (2026)**:
- 2026-04: publication of the interim summary on tokenized stocks / the "Tokenization Act"
- 2026-05: start of joint study on tokenized-JGB "on-chain repo transactions"

---

## 5. Market share / transaction volume

**ST digital-securities market (approximate, as of 2026-01 )**:
- Of the 87件 domestic-overall ST issuances, the Progmat-platform portion is **45件 (approx. 52%)**
- Of the 6,674億円 domestic ST assets under management, the Progmat portion is **4,522億円 (approx. 68%)**

→ In Japan's ST (digital-securities) market, Progmat is **effectively the de facto market-standard platform**.

**SC (stablecoin) market**:
- Official issuance track record is zero as of 2026-05 (in transition to the implementation phase, preparing for issuance)
- Competitors: JPYC (funds-transfer-operator type), DCJPY (GMO Aozora Net Bank), Minna no Bank's Solana linkage, etc.
- As a trust-type SC, a one-of-a-kind position in the **B2B large-lot settlement segment**, backed by the three megabanks' infrastructure

**Customer base**: mainly major financial institutions, securities firms, and AM companies (retail is via ST public offerings)

---

## 6. History / major events

| Year/Month | Event |
|---|---|
| Around 2019年 | Start of ST-platform development within Mitsubishi UFJ Trust and Banking (predecessor) |
| 2022-02 | Mitsubishi UFJ Trust and Banking announces the start of development of the NFT "Progmat UT" and a digital-asset wallet |
| 2023-09 | Announcement of joint study of "Progmat Coin" by multiple financial institutions (6 financial institutions participating) |
| **2023-10-02** | **Spun off into an independent corporation as Progmat, Inc.** |
| 2024-08 | Announcement of a licensed-SC issuance plan for DMM Group |
| 2024-09 | Launch of Project Pax (Datachain-linked cross-border SC pilot) |
| 2024-11 | Launch of "Progmat SaaS" and "implementation-support services" (declaration of becoming "national infrastructure") |
| 2025-10 | Japan's first ST of a retail bank subordinated bond (MUFG 100億円) |
| 2026-02 | Conclusion of the Ava Labs / Datachain strategic partnership (accelerating public-chain expansion) |
| 2026-03 | Start of real-estate-ST business-entry support with TMI Associates |
| 2026-04 | Publication of the "interim summary" on tokenized stocks / commencement of study of the Tokenization Act |
| 2026-05 | Start of joint study of on-chain repo transactions of tokenized JGBs |

**Administrative dispositions / major incidents**: none disclosed (as of 2026-05)

---

## 7. Strategic trends

**Main trends of 2025-2026**:

1. **Platform expansion from SC to ST**: initially ST-centered, but now a full-line rollout toward SC (第3号EPI), UT, and public chains
2. **Declaration of becoming national infrastructure (2024-11)**: clarified, as "Progmat SaaS," a horizontal expansion to mid-tier financial institutions beyond the major financial institutions
3. **Full-scale cross-border push (Project Pax)**: from the Japan-Korea / Japan-Hong Kong proofs of concept, toward global expansion from 2025年 onward. Coordination with Ava Labs / Datachain / TOKI / IDA
4. **Entry into tokenized stocks (from 2025-11〜)**: legal-system development and proof of concept toward realizing 24-hour, 1円-unit trading of "tokenized stocks"
5. **Mention of the public market (appearance on Nikkei CNBC's "Eggs of IPO" on 2026-04 )**: a mention of an IPO has been made in a public setting, but there is no official announcement of a specific schedule
6. **DCC participating companies 331社**: the cross-industry consortium functions as a public-private ecosystem

---

## 8. Related figures

| Name / position | Title | Notes |
|---|---|---|
| Tatsuya Saito (齊藤 達哉) | Representative Director, Founder and CEO | from Mitsubishi UFJ Trust and Banking. Led the predecessor project → CEO upon spin-off |
| Representative Directors (part-time) × 1名 | — | seconded from shareholder banks |
| Directors (part-time) × 4名 | — | seconded from shareholder banks / partner entities |
| Auditors (part-time) × 1名 | — | |
| CFO & CRO | — | |
| CTO | — | |
| VP, Japan Business Development | — | |

> Apart from the CEO, individual names are highly likely to change, so they are summarized by position only. Confirm details in [[payment-firms/progmat|JapanFG / progmat]] and official IR.

---

## Related

- [[payment-firms/progmat|株式会社Progmat]] — JapanFG company anchor
- [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] — regulated trust-bank boundary
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架構]] — detailed explanation of the legal basis of Progmat Coin (第3号EPI · specified trust beneficiary rights)
- [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]] — the design intent of MUTB 49% and the three-megabank governance structure
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度三層構造]] — comparison of the institutional positioning of JPYC, DCJPY, and Progmat Coin
- [[fintech/jp-stablecoin-dcjpy|DCJPY]] — a comparison target with the GMO Aozora Net Bank-issued, bank type (第1号EPI)
- [[exchanges/jp-exchange-jpyc|JPYC]] — a comparison target with the funds-transfer-operator type (Type 2)

---

## Sources

- [Progmat company overview (About Us)](https://progmat.co.jp/about/) (retrieved 2026-05-18)
- [Progmat Concept (ST/UT/SC track record)](https://progmat.co.jp/concept/) (retrieved 2026-05-18)
- [Progmat Consortium (DCC)](https://progmat.co.jp/consortium/) (retrieved 2026-05-18)
- [Progmat News Archive](https://progmat.co.jp/news/) (retrieved 2026-05-18)
- [Progmat EN News Archive](https://progmat.co.jp/en/news/) (retrieved 2026-05-18)
- [Progmat Blog Archive](https://progmat.co.jp/blog/) (retrieved 2026-05-18)
- [Progmat Coin Joint Study Press Release (2023-09-11)](https://progmat.co.jp/en/news/2023-09-11-press/) (retrieved 2026-05-18)
- [wiki/fintech/multi-megabank-consortium-governance] (source of the shareholder-composition estimate)
- [wiki/fintech/jp-trust-type-sc-architecture] (details of the institutional positioning)

---

**Last refresh** (2026-05-25): tightened board personnel listing per audit (replaced 5+ named non-executive directors with roles-only summary; kept CEO name only); refreshed dates.
