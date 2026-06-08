---
source: fintech/jp-trust-type-sc-architecture
source_hash: 92e0976b5167f48f
lang: en
status: machine
fidelity: ok
title: "Japan Trust-Type SC Architecture"
translated_at: 2026-05-31T07:28:06.122Z
---

# Japan Trust-Type SC Architecture


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/multi-megabank-consortium-governance|多巨行联合体治理 —— 复数 megabank 共同持有 fintech 基础设施的治理模式]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

> [!info] TL;DR
> Japan's amended Payment Services Act divides SC issuance into **three types**: **trust-type (第 3 号 EPI) / bank-type (第 1 号 EPI) / funds-transfer-operator type (第 1 号 EPI)**, each with different legal basis, bankruptcy-remoteness strength, and transfer limits. **The trust type is the only viable path for B2B large-ticket settlement** (no transfer cap + 100% bankruptcy remoteness through a trust structure), and it is also the legal foundation for Progmat Coin and the stablecoin initiatives jointly pursued by the three megabanks. It is structurally advantaged in the interoperability scenarios of §501(d), while cross-border channels remain open.

## Three-type structural comparison

| Dimension | Trust-type (Progmat Coin) | Bank-type (GMO Aozora Net Bank DCJPY) | Funds-transfer-operator type (JPYC) |
|---|---|---|---|
| Legal basis | Payment Services Act Article 2  Paragraph 9 , "specified trust beneficiary rights" | Deposit-style token based on the Banking Act | Class II funds transfer business under the Payment Services Act |
| EPI number | **第 3 号** | 第 1 号 (bank-issued) | 第 1 号 (issued by a funds transfer operator) |
| Issuer | Trust bank (trustee) | Bank | Funds transfer operator |
| Collateral | **Segregated management of trust property 100%** (cash) | Bank equity + Deposit Insurance Corporation | 100% fiat currency held in trust or via performance guarantee |
| Bankruptcy remoteness | **Legally assured** (trust mechanism) | Up to deposit insurance 1,000 万円 | Protected via performance guarantee at 100% |
| Transfer limit | **None** | Follows general banking operations | **1  per transfer 100 万円** |
| Attribution of interest | **Belongs to the issuer** (as trust compensation) | Deposit interest belongs to the depositor | Interest on entrusted assets is treated like security deposit funds |
| Main users | B2B large corporates | Retail individuals / Web3  natives | Retail individuals / SMEs |
| KYC duality | Mandating bank + trust bank, double-layered | Bank only | Funds transfer operator only |

## Structural advantages of the trust type

**(a) Strength of bankruptcy remoteness**: In the trust type, even if the trustee bank fails, the trust property remains attributable to the settlor/beneficiaries. This is Japan's version of the USDC model (Circle bankruptcy risk → protected by trustee BNY Mellon), but **with even higher legal certainty because it is expressly provided for under trust law**.

**(b) The disruptive force of having no transfer cap**: Funds-transfer-operator models such as JPYC are constrained by 1  transfers / 100 万円, which effectively limits them to **retail use**. The trust type can support **B2B large-value settlement (10 億円 to hundreds of billions of yen per 1  transfer)**. This is the core reason Progmat chose the trust-type route.

**(c) Meaning of multi-bank joint entrustment**: In the trust scheme of [[payment-firms/progmat|Progmat Coin]], **multiple banks ([[megabanks/mufg|MUFG]], [[megabanks/smfg|SMFG/SMBC]], Mizuho)** act as joint settlors, and **Mitsubishi UFJ Trust 1 社 acts as trustee**. This makes it legally possible to **support customer deposits from 3  megabanks with one unified common stablecoin**, which is the legal foundation of [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]].

## Relationship with §501(d)

GENIUS Act §501(d) requires both an "interoperable jurisdiction" and a "trusted issuer" for cross-border interoperability. The trust type's **legal bankruptcy remoteness + layered regulatory structure** fits well with §501(d) recognition. However:

- Even for the trust type, **the §501(d) tier still has to be obtained separately**; it is not automatic.
- Progmat Coin has not yet established a §501(d) channel, so [[fintech/cross-border-sc-via-swift-api|Project Pax via SWIFT API]] remains the mainstream route today for cross-border use.
- If the trust type were to obtain a **§501(d) tier** in the future, its legal strength through the trust structure could give it a structural edge in interoperability with USDC.

## Market split among the three types (current 2026)

| Segment | 1 位 | Structural reason |
|---|---|---|
| B2B large-value settlement | **Trust type (Progmat)** | No transfer cap + customer base of the three megabanks |
| Retail payments | Funds-transfer-operator type (JPYC) | Brand recognition + UX + §501(d) compatibility (via SBI) |
| Retail linked to bank accounts | Bank type (Minna no Ginko Solana) | Existing account linkage at 1:1  |
| Cross-border large-value | Trust type (Progmat) | Legal strength of the trust |

## Applications

- Can instantly pull a structural comparison in any SC design discussion around "trust vs bank issuance"
- Serves as the benchmark frame when evaluating Japan's 4  camp under §501(d) interoperability
- Helps understand patterns where cross-border compliance channels (SWIFT API / IBC) are built on top of the trust type → [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]
- Functions as the Japan-side implementation answer for [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家市場 = 預金トークン唯一解]]

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
