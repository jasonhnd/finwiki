---
title: "ODX START security token secondary market"
aliases:
  - "odx-start-stb-secondary-market"
  - "ODX START secondary market"
  - "START security token PTS"
  - "Osaka Digital Exchange security token route"
  - "STB Japan secondary market"
  - "ODX 株主構成 START"
  - "大阪デジタルエクスチェンジ START"
  - "tokenized equity secondary Japan"
domain: securities
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [securities, market-structure, security-token, ODX, START, PTS, FIEA]
status: active
sources:
  - "https://www.odx.co.jp/"
  - "https://www.odx.co.jp/en/company/about/"
  - "https://www.odx.co.jp/en/news/article/5s13s3n0vcms/"
  - "https://www.odx.co.jp/equity/en/market_info/daily_report/"
  - "https://www.odx.co.jp/equity/en/market_info/historical_data/"
  - "https://www.fsa.go.jp/menkyo/menkyoj/kinyushohin.xlsx"
  - "https://www.jsda.or.jp/shijyo/seido/jishukisei/web-handbook/106_saiken/index.html"
  - "https://www.jsda.or.jp/shijyo/seido/jishukisei/words/0346.html"
  - "https://www.fsa.go.jp/singi/singi_kinyu/tosin/20220622/houkoku.pdf"
  - "https://www.jpx.co.jp/english/equities/clearing-settlement/outline/index.html"
---

# ODX START security token secondary market

## Wiki route

This page belongs in [[securities/INDEX|securities index]] as the venue-mechanics deepening of [[securities/osaka-digital-exchange|Osaka Digital Exchange]] and as the secondary-market sibling of [[securities/japan-security-token-secondary-market-route|Japan security token secondary market route]]. Read it with [[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]] for the venue / participant separation logic, [[securities/japan-best-execution-sor-pts|best execution / SOR / PTS]] for the routing-policy context, and [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] for where ODX sits between TSE / Japannext PTS and JSCC / JASDEC. The cross-domain bridge is [[fintech/jp-stablecoin-progmat|Progmat stablecoin route]], because tokenized cash-leg payment infrastructure is the missing rail for full atomic DvP in Japanese ST secondary markets.

## TL;DR

ODX (大阪デジタルエクスチェンジ, Osaka Digital Exchange) is a Japanese FIEA-registered PTS operator founded as a joint venture led by SBI HD, Sumitomo Mitsui Trust Holdings (SuMi TRUST / Sumishin), and Nomura HD, with additional securities-industry participation. Its START market, launched on 2023-12-25, is publicly described as Japan's first secondary trading PTS for security tokens (ST / セキュリティトークン), covering tokenized equity, tokenized bonds, and tokenized real-estate beneficial interests issued under the FIEA electronically recorded transferable rights framework. Trading on START is intermediated exclusively through accepted securities-firm trading participants; ODX itself does not face retail investors directly. Settlement integrates with [[securities/japan-securities-clearing-corp|JSCC]] and [[securities/japan-securities-depository-center|JASDEC]] for the listed-securities adjacency and with token-platform infrastructure (e.g. [[JapanFG/progmat|Progmat]], BOOSTRY / ibet) for the on-token transfer leg. New issue listings on START go through an Approval to Register (ATR) gating process operated by ODX before secondary trading is enabled.

## Venue identity

| Field | Public reading |
|---|---|
| Legal entity | 株式会社大阪デジタルエクスチェンジ (Osaka Digital Exchange Co., Ltd.) |
| FIEA registration | Type I Financial Instruments Business Operator with PTS operating authorization; verify via [[securities/financial-instruments-business-operators-japan-index|FIBO registry]]. |
| Ownership lineage | Founded with [[JapanFG/sbi-hd|SBI HD]] as lead anchor, [[JapanFG/nomura-hd|Nomura HD]], Sumitomo Mitsui Trust Holdings / SBI Sumishin partnership lineage. Verify current cap table via ODX corporate page. |
| Self-regulatory | [[JapanFG/jsda|JSDA]] member; unlisted-PTS rules created post-FSA 2022 Market System Working Group output cover the security-token segment. |
| Markets operated | Equity PTS (general cash equity scope, narrower than Japannext); START security-token PTS (launched 2023-12-25). |
| Investor access | Through accepted securities-firm trading participants; ODX does not serve non-professional investors directly. |
| Clearing / settlement | Cash-equity PTS trades clear through [[securities/japan-securities-clearing-corp|JSCC]] and settle via [[securities/japan-securities-depository-center|JASDEC]]; ST transfers route through the token platform's transfer mechanics with custody recordkeeping handled by the trust or platform party. |

Always read the venue's About / News pages for current participant list, market scope, and operational notices before publishing time-sensitive material.

## Ownership and strategic alignment

ODX's founding capital structure is a deliberate cross-sector coalition rather than a single-house product:

| Anchor | Strategic interest |
|---|---|
| [[JapanFG/sbi-hd|SBI HD]] (and SBI group entities) | PTS / digital-asset / online-broker franchise extension; SBI Securities retail distribution; Progmat / digital-asset platform thesis. |
| [[JapanFG/nomura-hd|Nomura HD]] | Securities-industry leadership stake; BOOSTRY (Nomura-led ST issuance platform) issuer-side alignment; institutional STO distribution. |
| Sumitomo Mitsui Trust Group / SBI Sumishin Net Bank lineage | Trust-bank custody / recordkeeping role for tokenized trust-beneficial-interest products; cash-leg infrastructure. |
| Other securities firms (joining as participants and / or shareholders over time) | Distribution breadth for ST issuer market; participation in the only Japanese ST secondary venue. |

The coalition design is a feature, not a bug: a single-firm-owned ST PTS would lack the issuer- and distribution-side breadth needed to bootstrap a market. The trade-off is governance friction common to JV venues.

## What is a "security token" in this venue context

A security token in the Japanese regulatory frame is most commonly:

- An electronically recorded transferable right (電子記録移転権利) under FIEA, typically a Type II beneficial interest segment that has been "electronically recorded" using DLT / blockchain infrastructure;
- Or other instruments fitted into the FIEA "tokenized security" treatment via FSA notice / cabinet office order.

In practice, the ST issues that reach START's secondary market include:

| Asset type | Example structure | Issuance platform |
|---|---|---|
| Tokenized real-estate beneficial interests | Trust-beneficial-interest in real-estate-holding trust, tokenized for DLT recordkeeping | [[JapanFG/progmat|Progmat]], BOOSTRY, ibet for FIN |
| Tokenized bonds | Digital bond issued as electronically recorded right | BOOSTRY (Nomura group), [[JapanFG/progmat|Progmat]] |
| Tokenized equity / private-equity beneficial interests | Tokenized fund / SPC equity interests where allowed by FIEA scope | Platform varies |

The token platform handles issuance, transfer, and recordkeeping; ODX provides the secondary-market venue function; the securities firm is the customer-facing intermediary; the trust bank or custodian holds the underlying asset rights. This is a five-party architecture rather than the three-party (issuer / exchange / broker) cash equity architecture.

## ATR — Approval to Register

ATR (Approval to Register) is the gating step ODX runs before an issue is enabled for secondary trading on START. The conceptual sequence:

1. **Issuer requests registration** through a sponsoring securities firm (trading participant).
2. **ODX evaluates** issuer disclosure, token platform integration, custody / trustee arrangement, transfer mechanics, and rule compliance with JSDA unlisted-PTS rules and ODX's own market rules.
3. **ODX issues an ATR** for issues that meet eligibility criteria.
4. **Issue is enabled for trading** under START's rules.
5. **Ongoing monitoring** verifies disclosure, market-integrity, and operational continuity.

ATR is not equivalent to a TSE listing examination. TSE listing is a public-market admission with full continuous disclosure obligations and broad retail accessibility. ATR is a PTS admission for ST issues that are typically restricted to specified investor categories with constrained disclosure intensity.

## JSCC and JASDEC integration

The settlement question for ODX has two answers because there are two market scopes:

**Cash-equity PTS scope.** When ODX operates as a conventional cash-equity PTS for listed equities (a narrower function than Japannext), trades clear through [[securities/japan-securities-clearing-corp|JSCC]] under the PTS clearing arrangement and settle via [[securities/japan-securities-depository-center|JASDEC]] book-entry on the standard cash-equity cycle.

**Security-token (START) scope.** Tokenized securities clear and settle differently because the underlying asset rights are recorded on the token platform (Progmat / BOOSTRY / ibet) rather than at JASDEC for the token leg. Cash leg settlement uses standard yen settlement rails (trust-bank or bank wire); the token-leg transfer uses the platform's transfer mechanics. True atomic DvP between cash leg and token leg has been the subject of multiple Japanese bank / market-infrastructure experiments (e.g. DCJPY, tokenized deposit prototypes) and remains in development as a market-infrastructure thesis rather than a fully deployed standard at ST PTS scale.

For an analyst, the right framing is:
- Listed cash equity = TSE / JSCC / JASDEC, mature.
- Listed cash equity PTS (Japannext / Cboe Japan / ODX equity PTS) = Same JSCC / JASDEC settlement, mature.
- ST PTS (START) = Token-platform transfer + parallel cash-leg payment; DvP design varies; tokenized-cash-leg integration still maturing.

## Trade flow walkthrough

A simplified trade-flow walkthrough for a tokenized real-estate beneficial interest traded on START:

```text
Investor (specified-investor scope)
  -> Securities firm (ODX trading participant, FIEA Type I + tokenized-security distribution scope)
    -> Order entry to ODX START matching engine
      -> Match against counterparty order
        -> Trade confirmation to both participants
          -> Token transfer leg via token platform (Progmat / BOOSTRY / ibet)
          -> Cash leg via trust-bank / bank settlement
            -> Custody / recordkeeping update at trustee / platform
              -> Investor statement update at securities firm
```

The contrast with cash-equity flow ([[securities/japan-market-infrastructure-map|see infrastructure map]]) is that the token leg replaces the JASDEC book-entry transfer with the token-platform transfer, and the cash leg may use specialized tokenized-deposit / stablecoin experiments where available rather than only conventional Zengin / BOJ-NET rails.

## Investor eligibility and scope

START operates under the JSDA unlisted-PTS framework, which constrains the investor scope for many ST issues to specified investor (特定投資家) categories or otherwise narrower-than-retail audiences. The practical reading:

- Many ST issues are not available to ordinary retail investors at retail online brokers in the same way listed equities are.
- The investor-eligibility check is run at the securities firm trading-participant level.
- Disclosure intensity is lower than for TSE-listed equities; investor protection relies on the specified-investor framework, issuer-level disclosure, and trading-participant suitability checks.
- Cross-border distribution into Japan via ODX trading participants for non-Japanese investors is constrained by both FIEA and the participant's own customer-acceptance policy.

For [[securities/japan-asset-manager-landscape-matrix|asset managers]] and institutional allocators, this means ST exposure typically requires either direct ST PTS access through a participant, or wrapping inside a 公募投信 / 私募投信 structure that itself holds ST instruments.

## Comparison vs Japannext PTS

| Dimension | Japannext PTS | ODX equity PTS | ODX START |
|---|---|---|---|
| Primary product | Cash-equity lit PTS (J-Market, X-Market) | Cash-equity PTS (narrower scope) | Security-token secondary venue |
| Investor scope | Retail and institutional via brokers | Retail and institutional via brokers | Specified-investor heavy; intermediated by participants |
| Session structure | Daytime + night session | Standard window | Standard window |
| Settlement | JSCC / JASDEC standard | JSCC / JASDEC standard | Token platform + cash leg; mixed DvP designs |
| SOR relevance | Very high; mainstream broker SOR includes it | Lower than Japannext in cash equity SOR | Not part of standard cash-equity SOR; separate STO product distribution |
| Founding lineage | SBI / multi-party | SBI / Nomura / SuMi TRUST | SBI / Nomura / SuMi TRUST |

For SOR context on Japannext specifically, see [[securities/japannext-sor-routing-deep-dive|Japannext PTS SOR routing deep dive]].

## Regulatory and self-regulatory framework

| Layer | Role |
|---|---|
| FSA | Authorizes Type I FIBO with PTS scope; supervises the unlisted-PTS framework; published 2022-06-22 Market System Working Group interim report addressing ST circulation via PTS. |
| JSDA | Self-regulatory body; created rules for PTS trading of unlisted securities including tokenized securities after the FSA 2022 interim report; defines `unlisted approved PTS issue` scope. |
| Japan STO Association | Industry discussion forum on STO market development; not a primary regulator but feeds into JSDA / FSA rule-design context. |
| JSCC / JASDEC | Settlement infrastructure for the cash-equity scope of ODX. |
| Token platforms | Operate transfer / lifecycle mechanics under their own platform rules; subject to trust-bank / custody supervision where relevant. |

## History sketch

- **2020-2022** — Working-group discussions on ST market development, JSDA self-regulatory rule design for unlisted PTS, and Progmat / BOOSTRY platform launches.
- **2022-06-22** — FSA Market System Working Group interim report on smoother circulation of unlisted securities including security tokens via PTS.
- **2023** — ODX foundational launch and pre-START operational preparation.
- **2023-12-25** — START secondary-market launch; described as Japan's first ST PTS.
- **2024-2026** — Issuer growth on Progmat / BOOSTRY / ibet platforms; cumulative ST issuance growing alongside START secondary trading.
- **Ongoing** — Integration of tokenized cash-leg payment infrastructure (Progmat Coin / DCJPY / private bank tokenized deposits) into ST PTS settlement is a watchlist item; see [[fintech/jp-stablecoin-progmat|Progmat stablecoin route]].

## Related

- [[securities/INDEX]]
- [[securities/osaka-digital-exchange]]
- [[securities/japan-security-token-secondary-market-route]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japannext-securities]]
- [[securities/japannext-sor-routing-deep-dive]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[JapanFG/sbi-hd]]
- [[JapanFG/nomura-hd]]
- [[JapanFG/progmat]]
- [[JapanFG/jsda]]
- [[JapanFG/japan-exchange-group]]
- [[fintech/jp-stablecoin-progmat]]
- [[INDEX|FinWiki index]]

## Sources

- ODX (Osaka Digital Exchange) official site, About page, news (START launch announcement 2023-12-25), market information daily report and historical data pages.
- FSA, financial instruments business operator list (kinyushohin.xlsx); Market System Working Group 2022-06-22 interim report.
- JSDA, unlisted-securities PTS self-regulatory rules and `unlisted approved PTS issue` term definition.
- JPX, equity clearing / settlement outline pages.
- Progmat public concept and platform pages.
