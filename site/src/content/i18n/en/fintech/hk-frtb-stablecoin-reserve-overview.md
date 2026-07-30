---
source: fintech/hk-frtb-stablecoin-reserve-overview
source_hash: aace4bfa7feeb599
lang: en
status: machine
fidelity: ok
title: "HKMA Stablecoin Reserve Requirements · Boundary with FRTB"
translated_at: 2026-07-30T02:03:00+09:00
---

# HKMA Stablecoin Reserve Requirements · Boundary with FRTB

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/hkma-stablecoin-licensing-overview|HKMA stablecoin licensing overview]], [[fintech/basel-iii-frtb-crypto-exposure-overview|Basel III FRTB overview]], and [[fintech/global-stablecoin-regulatory-five-pole-matrix|five-pole comparison]].

> [!info] TL;DR
> Hong Kong's Stablecoins Ordinance took effect on 2025-08-01. The HKMA supervisory guideline requires full backing; high-quality, highly liquid reserve assets; management of currency mismatch; segregation and trust protection; periodic independent attestation; annual audit; and minimum paid-up capital of HK$25 million. These are stablecoin-issuer rules, not a direct application of FRTB, the market-risk framework for a bank's trading book, to issuer reserves. The guideline's reference to the Banking (Capital) Rules concerns conditions under which certain debt securities qualify for a 0% risk weight under the standardized approach to credit risk; it is not synonymous with “FRTB SA applies.” ^[https://www.hkma.gov.hk/media/eng/doc/key-functions/ifc/stablecoin-issuers/Guideline_on_supervision_of_licensed_stablecoin_issuers_eng.pdf] ^[https://www.bis.org/bcbs/publ/d457.htm]

## Verified reserve requirements

The following is based on the HKMA's final Supervisory Guideline, not a draft.

- The market value of each stablecoin reserve pool must at all times be at least equal to the par value of the stablecoins in circulation.
- An appropriate buffer above full backing must be maintained in light of the risks.
- Eligible assets include cash, bank deposits with a term of no more than three months, specified marketable debt securities, receivables from eligible collateralized overnight reverse repos, a dedicated investment fund, or assets approved by the HKMA.
- Marketable debt securities must satisfy conditions such as issuance or guarantee by governments or central banks, a remaining maturity of no more than one year, and high liquidity.
- As a rule, the reserve currency must match the reference currency. An exception requires the HKMA's prior written approval.
- Each reserve pool must be separated from other pools and the issuer's other assets and protected from claims by other creditors.

^[https://www.hkma.gov.hk/media/eng/doc/key-functions/ifc/stablecoin-issuers/Guideline_on_supervision_of_licensed_stablecoin_issuers_eng.pdf]

## Disclosure, audit, and capital

- The issuer must prepare daily statements of the par value in circulation and the market value and composition of reserve assets, ready for submission at the HKMA's request.
- Unless otherwise agreed with the HKMA, it must report the same information to the HKMA and update its website weekly.
- A qualified independent external auditor acceptable to the HKMA must conduct periodic attestations, with reports submitted to the HKMA and published. The frequency is one accepted by the HKMA and should not be described uniformly as “monthly.”
- The annual financial audit must cover the reserve assets.
- Minimum paid-up capital is HK$25 million, or equivalent financial resources accepted by the HKMA. Additional capital may be required by an individual licence condition.

^[https://www.hkma.gov.hk/media/eng/doc/key-functions/ifc/stablecoin-issuers/Guideline_on_supervision_of_licensed_stablecoin_issuers_eng.pdf]

## Requirements map

The table maps the final guideline's reserve, reporting, and capital provisions against the boundary of FRTB. ^[https://www.hkma.gov.hk/media/eng/doc/key-functions/ifc/stablecoin-issuers/Guideline_on_supervision_of_licensed_stablecoin_issuers_eng.pdf] ^[https://www.bis.org/bcbs/publ/d457.htm]

| Topic | HKMA stablecoin-issuer rule | Relationship to FRTB |
|---|---|---|
| Full backing | Maintain reserve market value at or above par value at all times | Not an application of FRTB to the issuer reserve itself |
| Marketable debt securities | Eligibility conditions include a remaining maturity of no more than one year and a 0% credit-risk weight | Do not confuse a credit-risk eligibility reference with an FRTB market-risk charge |
| Currency risk | As a rule, reserve currency and reference currency must match | A mismatch is an issuer risk-management issue |
| Independent assurance | Periodic attestation and annual audit | Separate from a bank trading-book capital calculation |
| Minimum capital | HK$25 million or equivalent, with possible additional conditions | The earlier HK$100 million claim was incorrect |

## Why this is not FRTB

FRTB is the Basel Committee's reform of trading-book market risk and governs banks' market-risk capital. The HKMA stablecoin guideline governs reserve quality, liquidity, custody, redemption, and governance for a licensed issuer. Prudential rules may separately apply to a bank acting as reserve custodian, deposit taker, or asset holder, but that does not make the entire issuer reserve regime an “FRTB framework.”

The earlier descriptions “Asia's first FRTB-aligned stablecoin reserve,” “HKMA treats reserves as a trading book,” and “April 2026 FRTB consultation” were withdrawn because the cited official sources did not establish them.

## Correction to the licensing date

The HKMA's 2025 Annual Report records that the regime took effect on 2025-08-01 and that the first two issuer licences were announced in April 2026. This entry does not use the earlier 2026-05-21 date or the claim that two of nine applications were approved. ^[https://www.hkma.gov.hk/media/eng/publication-and-research/annual-report/2025/16_International_Financial_Centre.pdf]

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA ステーブルコイン・ライセンス概観]]
- [[fintech/basel-iii-frtb-crypto-exposure-overview|Basel III FRTB 概観]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|五極比較]]
<!-- /wiki-links:managed -->

## Sources

- HKMA · Stablecoin issuers: https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/stablecoin-issuers/
- HKMA · Guideline on Supervision of Licensed Stablecoin Issuers: https://www.hkma.gov.hk/media/eng/doc/key-functions/ifc/stablecoin-issuers/Guideline_on_supervision_of_licensed_stablecoin_issuers_eng.pdf
- HKMA · Explanatory Note on Licensing: https://www.hkma.gov.hk/media/eng/doc/key-functions/ifc/stablecoin-issuers/Explanatory_Notes_on_Licensing_of_Stablecoin_Issuers_eng.pdf
- HKMA · 2025 Annual Report, International Financial Centre: https://www.hkma.gov.hk/media/eng/publication-and-research/annual-report/2025/16_International_Financial_Centre.pdf
- BCBS · Minimum capital requirements for market risk: https://www.bis.org/bcbs/publ/d457.htm
