---
source: financial-licenses/japan-trust-business-license-stack
source_hash: a96a09e5d8bdb73e
lang: en
status: machine
fidelity: ok
title: "Japan trust business license stack"
translated_at: 2026-06-15T13:28:35.934Z
---

# Japan trust business license stack

## Overview

Japanese trust activity is not controlled by one generic "trust license." The practical stack is assembled from three statutes and several registration routes: the **Trust Act (信託法)** sets the private-law relationship; the **Trust Business Act (信託業法, Act No. 154 of 2004)** governs who may act as a trustee **as a business**; and the **Act on Concurrent Operation of Trust Business by Financial Institutions (兼営法 / 金融機関の信託業務の兼営等に関する法律, Act No. 43 of 1943)** lets banks conduct trust business with FSA authorization. On top sit the trust-agency and beneficiary-right sale routes, where the latter crosses into the Financial Instruments and Exchange Act.

Use this page with [[financial-licenses/INDEX|JapanFG legal / financial licenses]], the sibling [[financial-licenses/bank-license-and-baas-boundary|bank-license / BaaS boundary]], [[financial-licenses/securities-license-stack|securities license stack]] (for the beneficiary-right route), [[financial-licenses/insurance-license-and-solvency|insurance license and solvency route]], and the trust-bank entity pages [[trust-banks/sumitomo-mitsui-trust|SMTH]], [[trust-banks/custody-bank|Custody Bank]], and [[trust-banks/master-trust-bank|Master Trust Bank]] when a company page needs to say what kind of regulated trust role it is actually playing.

This page is a public-source research route, not legal advice. A live product or transaction must still be checked against the latest FSA list, e-Gov law text, the FSA trust-company supervisory guideline, and counsel / regulator confirmation.

## The three-statute foundation

| Statute | Question it answers | FinWiki reading |
|---|---|---|
| Trust Act (信託法) | What is the private-law trust relationship between settlor, trustee, and beneficiary? | The substantive law of the trust itself; it does not by itself license anyone to act as a trustee as a business. |
| Trust Business Act (信託業法, 2004) | Who may accept trusts **as a business**, and under what entry control? | The licensing / registration spine: operating-type vs management-type trust companies, agency, and conduct rules. |
| Concurrent Operation Act (兼営法, 1943) | How may a bank or other financial institution **also** run trust business? | The route by which "trust banks" exist; a bank obtains authorization to operate trust + concurrent businesses. |

The trichotomy (信託法 / 信託業法 / 兼営法) is the standard framing used by the Trust Companies Association of Japan; keep them separate when reading a page.

## Regime Map

| Activity / role | Primary license or registration | Legal anchor | Typical entities | Verification source |
|---|---|---|---|---|
| Accept trusts as a business, with **discretionary management** of trust assets | Operating-type trust company — **license (免許)** | Trust Business Act | Independent operating-type trust companies | FSA "信託会社" list; FSA trust supervisory guideline |
| Accept trusts as a business, **administration only** (no discretionary management) | Management-type trust company — **registration (登録)** | Trust Business Act | Real-estate / asset-administration management-type trust companies | FSA "信託会社（管理型）" list; supervisory guideline §5 |
| Bank or other financial institution running trust business concurrently | **Authorization (認可)** to conduct trust business + concurrent businesses | Concurrent Operation Act (兼営法) | Trust banks: [[trust-banks/sumitomo-mitsui-trust|SMTH]], megabank trust arms, [[trust-banks/custody-bank|Custody Bank]], [[trust-banks/master-trust-bank|Master Trust Bank]] | FSA "信託兼営金融機関" list; supervisory guideline §11 |
| Act as agent / intermediary to conclude trust contracts for a trust company | Trust contract agency business — **registration (登録)** | Trust Business Act | Banks, brokers, and distributors acting for a trust company | Local Finance Bureau "信託契約代理店" registry |
| Sell or intermediate **trust beneficiary rights** | **Type II Financial Instruments Business** (beneficiary rights are deemed securities) | Financial Instruments and Exchange Act | Real-estate beneficiary-right dealers, fund distributors | [[financial-licenses/securities-license-stack|securities license stack]]; FSA FIBO list |
| Custody / asset-administration trust at scale | Trust-bank route under 兼営法 (administration / custody / fund servicing) | Concurrent Operation Act + Trust Business Act | [[trust-banks/custody-bank|Custody Bank]], [[trust-banks/master-trust-bank|Master Trust Bank]] | FSA "信託兼営金融機関" list; entity disclosure |

## The operating-type vs management-type split

The decisive line inside the Trust Business Act is **whether the trustee exercises discretionary management** of the trust property:

- **Operating-type trust company (運用型信託会社)** — manages / invests trust assets at its own discretion. Higher risk to settlors / beneficiaries, so entry is by **license (免許)**, with capital, fit-and-proper, and business-method scrutiny.
- **Management-type trust company (管理型信託会社)** — only administers assets under the settlor's or a third party's instruction, with **no discretionary management**. Lower risk, so entry is by **registration (登録)** rather than license.

A bank that wants the full trust toolkit does not become a trust company at all — it obtains **兼営法 authorization** and operates as a trust bank, which is why "trust bank" is an entity / operating-company concept while "trust company" is the standalone Trust-Business-Act licensee.

## Source-of-Truth Stack

| Layer | Primary source | What it proves | What it does not prove |
|---|---|---|---|
| Statute | e-Gov law text for the Trust Act, Trust Business Act, and Concurrent Operation Act | The current legal category and defined terms. | Whether a named company holds the status today. |
| Registration | FSA "免許・許可・登録等を受けている事業者一覧" (信託会社 / 信託兼営金融機関) and Local Finance Bureau trust-agency registries | Whether a firm appears in the checked official registry category and the as-of date. | Full product scope or scale. |
| Supervisory view | FSA "信託会社等に関する総合的な監督指針" | Public supervisory expectations for entry review, management-type companies, and concurrent-operation banks. | A private regulator opinion on a specific product. |
| Self-regulation / industry | Trust Companies Association of Japan (信託協会) | The 信託法 / 信託業法 / 兼営法 framing and industry practice. | Statutory licensing by itself. |
| Product disclosure | Entity pages, trust-agreement documents, EDINET / official product pages | Whether the firm currently offers the trust product and what disclosures attach. | A general license conclusion. |

## Practical Decision Tree

| Question | First place to check | Second check |
|---|---|---|
| Is this a bank doing trust, or a standalone trust company? | Is the entity a 信託兼営金融機関 (兼営法 認可) or a 信託会社 (信託業法)? | FSA 信託兼営金融機関 list vs 信託会社 list. |
| Does the trustee manage assets at its discretion? | Operating-type (免許) vs management-type (登録) classification. | FSA 信託会社 list category; supervisory guideline. |
| Is this firm only arranging trust contracts? | Trust contract agency registration. | Local Finance Bureau 信託契約代理店 registry; which trust company it represents. |
| Is this the sale of a trust beneficiary right? | FIEA Type II Financial Instruments Business, not the Trust Business Act. | [[financial-licenses/securities-license-stack|securities license stack]] and FSA FIBO list. |
| Is this an investment-style "specified trust contract"? | FIEA conduct rules layered on top of the trust route. | Whether 特定信託契約 conduct / suitability rules apply. |

## JapanFG Relevance

- [[trust-banks/sumitomo-mitsui-trust|Sumitomo Mitsui Trust]] is the largest dedicated trust-bank group; its trust business runs under the 兼営法 route, not as a standalone 信託会社.
- Megabank groups ([[megabanks/mufg|MUFG]], [[megabanks/smfg|SMFG]], [[megabanks/mizuho-fg|Mizuho FG]]) hold trust-bank subsidiaries that operate concurrent trust business under the same 兼営法 authorization route.
- [[trust-banks/custody-bank|Custody Bank of Japan]] and [[trust-banks/master-trust-bank|Master Trust Bank of Japan]] are asset-administration / master-trust specialists — trust banks scoped to custody and fund servicing rather than retail trust products.
- Real-estate beneficiary-right activity routes through the FIEA Type II layer, so a real-estate "trust" deal often touches both this stack and the [[financial-licenses/securities-license-stack|securities license stack]].

## Boundary Cases

| Boundary | Why it is easy to misread | FinWiki treatment |
|---|---|---|
| Trust company vs trust bank | Both "do trust," but one is a 信託業法 licensee and the other a 兼営法-authorized bank. | Record which statute the entity sits under; link the entity page separately. |
| Operating-type vs management-type | A "trust company" label hides the discretionary-management line that decides license vs registration. | State 運用型 (免許) or 管理型 (登録) explicitly. |
| Trust business vs beneficiary-right sale | Selling a trust beneficiary right is a securities (FIEA Type II) act, not Trust-Business-Act trustee activity. | Route beneficiary-right sale to the [[financial-licenses/securities-license-stack|securities license stack]]. |
| 信託法 vs 信託業法 | The private-law trust relationship is not the business-entry regime. | Separate the substantive trust from the licence to act as trustee as a business. |
| "Not found" vs "unlicensed" | Missing from one list may mean wrong category or stale spelling. | Record "not found in checked source as of date" rather than asserting unlicensed status. |

## Research Checklist

1. Start from the entity legal name and corporate number where available.
2. Decide whether the entity is a bank (兼営法) or a standalone trust company (信託業法).
3. For a trust company, identify operating-type (免許) vs management-type (登録).
4. Check the matching FSA list (信託会社 / 信託兼営金融機関) and record the as-of date.
5. For agency, check the Local Finance Bureau 信託契約代理店 registry and which trust company is represented.
6. If beneficiary rights are sold, switch to the FIEA Type II route and check the FSA FIBO list.
7. Write the conclusion with the as-of date and source category; use negative-finding wording when a registration is not found.

## Related

- [[financial-licenses/INDEX|financial-licenses INDEX]]
- [[financial-licenses/bank-license-and-baas-boundary|bank license and BaaS boundary]]
- [[financial-licenses/securities-license-stack|Japan securities license stack]]
- [[financial-licenses/payment-license-stack|Japan payment license stack]]
- [[financial-licenses/insurance-license-and-solvency|insurance license and solvency route]]
- [[trust-banks/sumitomo-mitsui-trust|Sumitomo Mitsui Trust]]
- [[trust-banks/custody-bank|Custody Bank of Japan]]
- [[trust-banks/master-trust-bank|Master Trust Bank of Japan]]
- [[financial-regulators/INDEX|financial-regulators INDEX]]
- [[securities/INDEX|securities INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- 金融庁: 改正信託業法 (信託業法, 平成16年法律第154号) 関連ページ.
- 金融庁: 信託会社等に関する総合的な監督指針 (令和6年11月) — 全体・管理型信託会社 (§5)・信託兼営金融機関 (§11).
- 金融庁: 免許・許可・登録等を受けている事業者一覧 (信託会社 / 信託兼営金融機関).
- 信託協会: 信託法・信託業法・兼営法の関係.
- 財務省 地方財務局: 信託契約代理店 登録.
- e-Gov 法令検索: 信託業法 / 金融機関の信託業務の兼営等に関する法律 / 信託法.
