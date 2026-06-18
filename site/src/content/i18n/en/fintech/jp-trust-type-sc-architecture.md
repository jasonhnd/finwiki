---
source: fintech/jp-trust-type-sc-architecture
source_hash: d631fd2ddde9935d
lang: en
status: machine
fidelity: ok
title: "Japan trust-type SC architecture"
translated_at: 2026-06-18T23:59:13.121Z
---

# Japan trust-type SC architecture


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/multi-megabank-consortium-governance|多巨行联合体治理 —— 复数 megabank 共同持有 fintech 基础设施的治理模式]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

> [!info] TL;DR
> Japan's amended Payment Services Act divides SC issuance into **three types** —— **trust type (第 3 号 EPI) / bank type (第 1 号 EPI) / funds-transfer-operator type (第 1 号 EPI)** —— each with a different legal basis / strength of bankruptcy isolation / remittance cap. **The trust type is the only viable path for B2B large-lot settlement** (no remittance cap + 100% bankruptcy isolation via a trust institution), and it is also the legal foundation of Progmat Coin / the three-megabank joint SC. It is structurally advantageous in the §501(d) interoperability scenario, but the cross-border channel remains open.

## Comparison of the three-type structure

| Dimension | Trust type (Progmat Coin) | Bank type (GMO Aozora Net Bank DCJPY) | Funds-transfer-operator type (JPYC) |
|---|---|---|---|
| Legal basis | Payment Services Act, Article 2 , paragraph 9 , "specified trust beneficiary right" | Deposit-type token under the Banking Act | Payment Services Act, Type II funds-transfer business |
| EPI number | **第 3 号** | 第 1 号 (bank issuance) | 第 1 号 (funds-transfer-operator issuance) |
| Issuer | Trust bank (trustee) | Bank | Funds-transfer operator |
| Collateral | **100% segregated management of trust property** (cash) | Bank's own capital + Deposit Insurance Corporation | 100% legal tender held in trust or a performance guarantee |
| Bankruptcy isolation | **Legally guaranteed** (trust institution) | Up to deposit insurance 1,000 万円 | 100% protection via a performance guarantee |
| Remittance cap | **None** | Conforms to banking operations generally | **1  times 100 万円** |
| Interest attribution | **Attributed to the issuer** (as trust-trustee remuneration) | Deposit interest to the depositor | Interest on entrusted assets treated as deposited money |
| Main user | B2B large-lot corporate | Individual retail / Web3 -native | Individual retail / SMEs |
| KYC duality | Dual: consigning bank + trust bank | Bank only | Funds-transfer operator only |

## Structural advantages of the trust type

**(a) Strength of bankruptcy isolation**: In the trust type, even if the trustee bank fails, the trust property is attributed to the consignor. This is the Japanese version of the USDC model (Circle bankruptcy risk → protected by trustee BNY Mellon), but **legal certainty is higher because of the express provisions of the Trust Act**.

**(b) The disruptive power of having no remittance cap**: Funds-transfer-operator types such as JPYC are **limited to individual retail** by the constraint of 1  times 100 万円. The trust type **can handle B2B large-lot settlement (transactions of 10 億円 up to several tens of billions of yen 1 )** —— this is the fundamental reason Progmat chose the trust type.

**(c) The meaning of multi-bank joint consignment**: In [[payment-firms/progmat|Progmat Coin]]'s trust scheme, **multiple banks ([[megabanks/mufg|MUFG]], [[megabanks/smfg|SMFG/SMBC]], Mizuho) become joint consignors**, and **Mitsubishi UFJ Trust 1 社 becomes the trustee**. This makes it legally possible to **back the customer deposits of 3  megabanks with a single unified joint SC** —— the legal foundation of [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]].

## Relationship to §501(d)

GENIUS Act §501(d) requires an "interoperable jurisdiction" and a "trustworthy issuer" for cross-border interoperability. The trust type's **legal bankruptcy isolation + regulatory layering** has a high affinity with §501(d) certification. However:

- Even for the trust type, **the §501(d) tier itself must be obtained separately** (it is not automatic)
- Progmat Coin has not established a §501(d) channel → for cross-border use, routing via [[fintech/cross-border-sc-via-swift-api|Project Pax via SWIFT API]] is currently the mainstream
- If the trust type **obtains a §501(d) tier** in the future, it may, backed by the legal strength of the trust institution, hold a structural advantage in interoperability with USDC

## Market split among the three types (current 2026)

| Segment | 1 位 | Structural reason |
|---|---|---|
| B2B large-lot settlement | **Trust type (Progmat)** | No remittance cap + three-megabank customer base |
| Retail settlement | Funds-transfer-operator type (JPYC) | Recognition + UX + §501(d) compat (via SBI) |
| Bank-account-linked retail | Bank type (Minna Bank, Solana) | 1:1  linkage to existing accounts |
| Cross-border large-lot | Trust type (Progmat) | Legal strength of the trust |

## Applications

- In any "trust vs bank issuance" SC design discussion, the structural comparison can be pulled up at once
- As a benchmark framework when comparing the Japan 4  camp in a §501(d) interoperability assessment
- Understanding the pattern of layering a cross-border compliance channel (SWIFT API / IBC) on top of the trust type → [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]
- As the Japan-side implementation solution for [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家市場 = 預金トークン唯一解]]

---


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度三層構造]]
- [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]
- [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家市場 = 預金トークン唯一解]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 denylist]]
<!-- /wiki-links:managed -->
