---
source: banking/quick-deposit-four-methods
source_hash: d0d419a5eb522691
lang: en
status: machine
fidelity: ok
title: "Quick-deposit 4-method decomposition framework"
translated_at: 2026-05-31T03:19:56.418Z
---

# Quick-deposit 4-method decomposition framework


## Wiki route

This entry sits under [[banking/INDEX|banking index]]. Read it against [[banking/regional-bank-consolidation-pattern|Regional bank consolidation pattern]] for peer / contrast context and [[banking/cooperative-banking-japan|Cooperative banking in Japan]] for the broader system / regulatory boundary.

> [!info] TL;DR
> "What determines the instant-deposit UX is the underlying bank-connection method."

## Core thesis

Japan's instant deposit (quick deposit) looks similar on the surface, but can be decomposed into **4  methods whose contractual premises, authentication burden, and liability boundaries are entirely different**. This classification is essential for diagnosing the current state of adopting firms and proposing UX improvements.

## Comparison of the 4 methods

| Method | Contractual premise | Initial auth | Per-transaction auth | UX burden | Representative case |
|------|---------|---------|---------|--------|---------|
| **1. Bank-login type** | Operator × bank (not a collection institution) | None | Login + OTP every time | High | Rakuten Securities, SBI Net Bank |
| **2. Account-linkage type (OAuth)** | Operator × bank (EPSP registration required) | OAuth consent | **Not needed** | **Minimal** | **Daiwa Connect Securities × Minna Bank**, Merpay × Sumishin SBI, Revolut × Minna Bank |
| **3. Pay-easy/MPN type** | Operator × collection-institution number | None | Login + 3 number every time | High | Coincheck, GMO Coin, SBI VC Trade |
| **4. Payment-gateway-routed type** | Operator × payment gateway × bank | None | Login every time | Medium | GMO-PG "PG Multi Payment Service" |

## Points for method selection

### From the operator's perspective

- **Structural reduction of authentication burden** → Method 2 (OAuth) is almost the only choice
- **Lightness of initial investment** → Method 3 (Pay-easy) is low (no EPSP registration needed)
- **Avoiding dependence on payment gateways** → Method 1  or 2 (Method 4  depends on an intermediary)
- **A formal relationship to capture account share** → Method 2 (the OAuth token is the implementation of a continuing relationship)

### From the user's perspective

- **Authenticate only the first time, then one-tap thereafter** → Method 2  only
- **Trust in the bank brand** → Also assured by Method 1  / 3 
- **Transparency of statements** → Recorded on the bank-side statement under any method

### By-product: Pay-easy 7-day transfer restriction

Many crypto-asset operators using Method 3 (Pay-easy) **restrict external transfers for 7 days** after deposit (anti-money-laundering measure).
Switching to Method 2 (OAuth) can, in some cases, ease this restriction. **A large UX differentiator.**

## Meaning of Electronic Payment Service Provider registration

- Newly established in the 2017 年 Banking Act amendment
- **When fully offering Method 2 (account-linkage type), the operator normally needs EPSP registration**
- Methods 1  / 3  / 4  can be operated without EPSP registration (relying on the bank's net banking)
- **EPSP registration = the de-facto threshold for "operator qualification to invoke the bank API's write/update endpoints"**

## Read APIs vs Write APIs

| Category | Read | Write |
|------|-------|-------|
| Operation | Balance inquiry / transaction history | Remittance / transfer |
| Use | Displaying bank balance in the operator app | The foundation of quick deposit |
| Auth | OAuth 2.0 | OAuth + electronic signature |

Adopting Method 2  **creates room to also provide read APIs, enabling the UX evolution of "integrated display of bank balances inside the operator app."**

## Applicable cases

- **Deposit-flow design for crypto-asset exchange operators** — if the current state is Method 1/3 , upgrading to Method 2  is the first UX-improvement candidate
- **Bank-linkage selection for fintech startups** — weighing the EPSP-registration hurdle of Method 2  against the UX improvement
- **Strategic design of a bank-side BaaS business** — for a bank offering Method 2 , the "relationship structure with operators" itself is the differentiator
- **The current-state analysis section of internal strategy material** — a framework for posing the question "which method are we currently operating on"

## Related

- [[banking/minna-bank-baas-model|minna-bank-baas-model]] — the framework of Minna Bank BaaS's 2  model (API-provision type × partner-branch type)
- [[fintech/japan-financial-regulation|japan-financial-regulation]] — the legal basis for EPSP registration (Payment Services Act / Banking Act)
- [[banking/mercari-bank-license-stack|mercari-bank-license-stack]] — a concrete example of the license ladder including EPSP

来源: 公開情報整理 (各 BaaS 提供銀行公式サイト・FSA 電代業登録一覧・全国銀行協会発表資料)

## Sources

- FSA "Points to note when applying for registration as an Electronic Payment Service Provider" (introduction of the registration system through the 2017年 Banking Act amendment; distinction between 第1号 payment instruction / write under Banking Act Article 2 Paragraph 21 and 第2号 account-information retrieval / read) — https://www.fsa.go.jp/common/shinsei/dendai/01.pdf
- FSA "Overview of the Electronic Payment Service Provider system" pamphlet (purpose of the system / open innovation) — https://www.fsa.go.jp/common/about/pamphlet/dendaigyo_start.pdf

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[banking/minna-bank-baas-model|みんなの銀行 BaaS モデル]]
- [[banking/mercari-bank-license-stack|メルカリバンクのライセンス三層構造]]
<!-- /wiki-links:managed -->
