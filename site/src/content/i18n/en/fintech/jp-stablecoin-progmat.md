---
source: fintech/jp-stablecoin-progmat
source_hash: 7ea5036bdc325cba
lang: en
status: machine
fidelity: ok
title: "Progmat, Inc. — Digital-asset platform overview"
translated_at: 2026-05-31T07:28:06.112Z
---
# Progmat, Inc. — Digital-asset platform overview

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> Not a JVCEA member · not a crypto-asset exchange operator · digital-asset issuance-platform provider · established 2023-10-02 · Marunouchi, Chiyoda-ku, Tokyo

## 1. Corporate entity and shareholders

- **Corporate name**: Progmat, Inc. (Japanese: 株式会社Progmat)
- **Date established**: 2023年10月2日
- **Head office**: Marunouchi Kitaguchi Building, Floor 9 (inside WeWork), 1-6-5  Marunouchi, Chiyoda-ku, Tokyo 〒100-0005 
- **Representative Director, Founder and CEO**: Tatsuya Saito

**Shareholder structure** (disclosed / approximate):

| Shareholder | Approximate stake | Role |
|---|---|---|
| Mitsubishi UFJ Trust and Banking (MUTB) | **about 49%** | Largest single shareholder; trust trustee institution |
| SMBC Group | about 15% | Co-entrusting bank |
| Mizuho Trust & Banking | about 15% | Co-entrusting bank |
| NTT Data | about 10% | Technology partner |
| JPX (Japan Exchange Group) | about 5% | Exchange partner |
| Datachain | about 3% | Cross-chain technology |

> **Design intent**: MUTB being below 49% is deliberate (per FSA guidance). The three mega-bank groups hold peer positions while avoiding sole MUFG control. The fact that SMBC and Mizuho can be used as independent entities rather than “MUFG subsidiaries” is the basis for the decentralized-infrastructure logic (see [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]]).

**Board composition** (publicly disclosed, summarized by role only):
- Representative Director (part-time) × 1名
- Director (part-time) × 4名 (seconded from shareholder banks and partner corporations)
- CFO & CRO × 1名
- CTO × 1名

> Individual names are based on public information and may change. For detailed profiles, confirm against [[JapanFG/progmat|JapanFG / progmat company anchor]] and official IR materials.

---

## 2. Licenses and registration status

- **Not a JVCEA member**: no registration as a crypto-asset exchange business. Progmat itself is not a token “issuer,” but a “provider” of an issuance platform.
- **No direct FSA registration**: operates as a digital-asset platform provider; the regulated entities are the issuing trust banks and banks on the issuer side.
- **Electronic Payment Instruments Business (EPI) relevance**: stablecoins issued on Progmat are classified under the amended Payment Services Act as “specified trust beneficiary rights” (第3号EPI). The issuers are trust companies such as Mitsubishi UFJ Trust and Mizuho Trust.
- **Predecessor**: activity began around 2019年 as an internal project within Mitsubishi UFJ Trust and Banking. It was spun out into an independent company in 2023年10月.

---

## 3. Asset types handled (digital-asset categories whose issuance it supports)

Progmat is not a token issuer. It provides a platform supporting issuance across the following 3 token categories:

### ST (security tokens / digital securities)
- **Japan total** 87件 / **Progmat** 45件 (assets under management on Progmat **over 4,522億円**, total market **over 6,674億円**)
- Main issuance track record: real-estate, hotel, and office STs; MUFG subordinated-bond ST (first case in 2025-10 ); NTT Lease ST (2026-03)
- Issuance trustees: Mitsubishi UFJ Trust and Banking (main), Mizuho Trust, Alterna Trust, and others

### SC (stablecoins / Progmat Coin)
- **Trust-type (第3号EPI)**: the three megabanks MUFG, SMBC, and Mizuho act as joint settlors, with Mitsubishi UFJ Trust and Banking as the sole trustee
- 2023-09: announcement of the cross-institution study “Progmat Coin Joint Study Across Financial Institutions” (6社 participants)
- 2024-09: start of Project Pax (pilot for cross-border SC transfer in coordination with Datachain)
- 2024-08: announcement of a licensed SC issuance plan with DMM Group
- 2024-09: transition into implementation phase for domestic and P2P transfer support
- Planned SC issuance: **Progmat Coin (XJPY / XUSD, etc.)** — the issuers are the trust banks; Progmat provides the platform

### UT (utility tokens / digital certificates of rights)
- **Over 2,804件** (cumulative from 2022年7月 to the latest point)
- Main uses: shareholder benefits, digital gifts, membership rights, etc.

---

## 4. Business scope

### Progmat's position = platform provider (≠ issuer)

```
[Issuers (trust banks / banks)]
    │ Outsourcing agreement
    ▼
[Progmat] ← Provides platform (SaaS + implementation support)
    │ Token technology
    ▼
[Blockchain infrastructure]
    │ Issuance
    ▼
[Investors / payment participants]
```

**Main services** (announced as "Progmat SaaS" in 2024-11 ):
- SaaS provision of token issuance and management infrastructure for financial institutions
- Implementation-support services (service design, regulatory response, technical implementation)
- Secretariat operation for the DCC (Digital Asset Co-Creation Consortium): participating companies **331社** (as of 2026-05)

**Outside scope**: proprietary crypto-asset trading, exchange, or custody by Progmat itself (because it is not a JVCEA member)

**Project Pax (cross-border)** — for details of the SWIFT API-compatible corridor, see [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]:
- 2024-09: start of a Japan-Korea SC transfer pilot with Datachain and TOKI
- 2025-02: MOU signed with Korean financial institutions
- 2025-03: Hong Kong-Japan trade-settlement proof of concept (with IDA, Datachain, and TOKI)
- 2026-02: strategic partnership with Ava Labs and Datachain (accelerating public-chain financial infrastructure)

**Latest developments (2026)**:
- 2026-04: publication of an interim整理 on tokenized equities and “tokenized-law” issues
- 2026-05: launch of joint study on on-chain repo transactions for tokenized government bonds

---

## 5. Market share and transaction volume

**ST digital-securities market (approximate as of 2026-01 )**:
- Of total domestic ST issuance cases 87件, the Progmat platform accounts for **45件 (about 52%)**  
- Of total domestic ST assets under management 6,674億円, Progmat accounts for **4,522億円 (about 68%)**  

→ In Japan's ST (digital-securities) market, Progmat is **effectively the market-standard platform**.

**SC (stablecoin) market**:
- Official issuance track record was zero as of 2026-05 (still in implementation transition / issuance preparation)
- Competitors: JPYC (funds-transfer-operator type), DCJPY (GMO Aozora Net Bank), Minna no Ginko's Solana linkage, etc.
- As a trust-type SC backed by megabank infrastructure, it holds a unique position in the **B2B large-value settlement segment**

**Customer base**: mainly large financial institutions, securities firms, and asset managers (retail access is mainly through public ST offerings)

---

## 6. History and major events

| Date | Event |
|---|---|
| Around 2019年 | Start of ST platform development within Mitsubishi UFJ Trust and Banking (predecessor) |
| 2022-02  | Mitsubishi UFJ Trust and Banking announces development launch for the NFT “Progmat UT” and a digital-asset wallet |
| 2023-09  | Announcement of joint consideration of “Progmat Coin” by multiple financial institutions (6 institutions participating) |
| **2023-10-02** | **Spun out as an independent company, Progmat, Inc.** |
| 2024-08  | Announcement of a licensed SC issuance plan for DMM Group |
| 2024-09  | Launch of Project Pax (cross-border SC pilot with Datachain) |
| 2024-11  | Launch of “Progmat SaaS” and “implementation support services” (“national infrastructure” declaration) |
| 2025-10  | First domestic ST for retail-subordinated bank bonds (MUFG 100億円) |
| 2026-02  | Strategic partnership signed with Ava Labs and Datachain (accelerating public-chain rollout) |
| 2026-03  | Start of support for entry into real-estate ST business with TMI Associates |
| 2026-04  | Publication of an interim整理 on tokenized equities; launch of study on tokenized-law issues |
| 2026-05  | Start of joint study on on-chain repo transactions for tokenized government bonds |

**Administrative sanctions / major incidents**: none publicly disclosed (as of 2026-05)

---

## 7. Strategic direction

**Main trends in 2025-2026**:

1. **Platform expansion from ST into SC**: initially centered on ST, now expanding to SC (第3号EPI), UT, and public-chain use cases as a full-line platform
2. **Declaration of becoming national infrastructure (2024-11)**: under the “Progmat SaaS” brand, clearly extending horizontally beyond major institutions to mid-sized financial institutions
3. **Full-scale cross-border push (Project Pax)**: from Japan-Korea and Japan-Hong Kong proofs of concept toward global rollout from 2025年 onward, in partnership with Ava Labs, Datachain, TOKI, and IDA
4. **Entry into tokenized equities (from 2025-11 onward)**: legal-system preparation and demonstration toward enabling 24-hour and 1円-unit trading in “tokenized equities”
5. **Mention of public markets (appearance on Nikkei CNBC “IPO no Tamago” in 2026-04 )**: IPO has been discussed publicly, but there is no official announcement of a concrete schedule
6. **DCC participating companies 331社**: the cross-industry consortium is functioning as a public-private ecosystem

---

## 8. Related people

| Name / role | Title | Notes |
|---|---|---|
| Tatsuya Saito | Representative Director, Founder and CEO | Formerly of Mitsubishi UFJ Trust and Banking. Led the predecessor project, then became CEO upon spin-out |
| Representative Director (part-time) × 1名 | — | Dispatched from shareholder banks |
| Director (part-time) × 4名 | — | Dispatched from shareholder banks and partner corporations |
| Corporate auditor (part-time) × 1名 | — | |
| CFO & CRO | — | |
| CTO | — | |
| VP, Japan Business Development | — | |

> Except for the CEO, personal names have a high probability of changing, so this section summarizes by role only. For details, confirm against [[JapanFG/progmat|JapanFG / progmat]] and official IR materials.

---

## Related

- [[JapanFG/progmat|株式会社Progmat]] — JapanFG company anchor
- [[JapanFG/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] — regulated trust-bank boundary
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架構]] — detailed explanation of the legal basis of Progmat Coin (第3号EPI / specified trust beneficiary rights)
- [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]] — intent of the MUTB 49% design and the governance structure among the three mega-banks
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度三層構造]] — institutional positioning comparison of JPYC, DCJPY, and Progmat Coin
- [[fintech/jp-stablecoin-dcjpy|DCJPY]] — comparison target with GMO Aozora Bank issuance and the bank-type (第1号EPI)
- [[exchanges/jp-exchange-jpyc|JPYC]] — comparison target with the funds-transfer-operator type (Class 2)

---

## Sources

- [Progmat company overview (About Us)](https://progmat.co.jp/about/) (retrieved 2026-05-18)
- [Progmat Concept (ST/UT/SC track record)](https://progmat.co.jp/concept/) (retrieved 2026-05-18)
- [Progmat Consortium (DCC)](https://progmat.co.jp/consortium/) (retrieved 2026-05-18)
- [Progmat News Archive](https://progmat.co.jp/news/) (retrieved 2026-05-18)
- [Progmat EN News Archive](https://progmat.co.jp/en/news/) (retrieved 2026-05-18)
- [Progmat Blog Archive](https://progmat.co.jp/blog/) (retrieved 2026-05-18)
- [Progmat Coin Joint Study Press Release (2023-09-11)](https://progmat.co.jp/en/news/2023-09-11-press/) (retrieved 2026-05-18)
- [wiki/fintech/multi-megabank-consortium-governance] (source for shareholder-structure estimate)
- [wiki/fintech/jp-trust-type-sc-architecture] (details of institutional positioning)

---

**Last refresh** (2026-05-25): tightened board personnel listing per audit (replaced 5+ named non-executive directors with a roles-only summary; kept CEO name only); refreshed dates.
