---
title: "Fitch / Moody's / S&P Japan structured-finance criteria — global agencies vs JCR / R&I"
aliases:
  - "Global rating agency Japan structured finance criteria"
  - "Fitch Japan structured finance"
  - "Moody's Japan ABS criteria"
  - "S&P Japan securitization criteria"
  - "Global vs domestic agency split rating Japan"
  - "Sovereign rating cap Japan ABS"
  - "structured-finance/fitch-moody-sp-japan-criteria"
domain: structured-finance
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [structured-finance, rating-agency, fitch, moodys, sp, jcr, ri, japan, criteria]
status: active
sources:
  - "JCR official methodology — https://www.jcr.co.jp/en/"
  - "R&I official methodology — https://www.r-i.co.jp/en/"
  - "JSDA structured-finance statistics — https://www.jsda.or.jp/en/"
  - "Megabank IR (MUFG / SMBC / Mizuho securitization disclosures)"
  - "Moody's / Fitch / S&P public methodology documents (Japan ABS / RMBS)"
---

# Fitch / Moody's / S&P Japan structured-finance criteria — global agencies vs JCR / R&I

## TL;DR

Japanese securitisations are dual-rated: the domestic agencies [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR and R&I]] cover the yen-denominated investor base (life insurers, regional banks, [[JapanFG/japan-post-bank|Japan Post Bank]]), while Moody's, S&P, and Fitch are added when the deal targets foreign investors or USD-denominated tranches. The split-rating gap can be 1–3 notches at the senior layer, driven by (i) the **sovereign-rating cap** — global agencies cap Japanese structured tranches at or below the Japan sovereign rating (currently A+/A1), whereas JCR and R&I rate the sovereign AAA / AA+ domestically; (ii) differences in **recovery assumptions** on Japanese mortgage and auto pools (global agencies are typically more conservative on residential foreclosure timing and rural-collateral resale value); (iii) tighter **transition matrices** at the global agencies that produce higher modelled default frequencies for the same pool. The result is that a senior auto-ABS tranche rated AAA by JCR is often rated A or AA by S&P, which then determines whether a foreign asset manager can hold it in a global IG mandate.

## Wiki route

This entry sits under [[structured-finance/INDEX|structured-finance index]] as the **agency-criteria comparison** node. Read against [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]] for the domestic-agency view, [[structured-finance/japan-abs-market-overview|Japan ABS market overview]] for the investor demand side, and [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]] for the legal-entity layer that the rating sits on. Related cross-border angle: [[real-estate-finance/INDEX|real-estate-finance index]] (RMBS / J-REIT debt) and [[finance/INDEX|finance index]] for the broader credit-spread context.

## 1. The three global agencies — Japan structured-finance footprint

| Agency | Japan SF focus | Office | Typical mandates |
|---|---|---|---|
| **Moody's Japan K.K.** | RMBS, auto ABS, CMBS, consumer ABS, repackaging notes | Tokyo | Cross-border tranches, foreign-investor-marketed deals |
| **S&P Global Ratings Japan** | RMBS, ABCP conduits, auto ABS, CLO investor analysis | Tokyo | Megabank-sponsored deals, USD-denominated tranches |
| **Fitch Ratings Japan** | RMBS, auto ABS, repackaging, occasional CMBS | Tokyo | Foreign-investor demand-driven mandates |

All three are registered as **credit rating agencies** under the FSA's [[JapanFG/japan-exchange-group|JPX]]-adjacent regulatory regime (originally the 2010 amendments to the Financial Instruments and Exchange Act that imposed registration and conduct rules after the 2008 crisis).

## 2. Sovereign-rating cap — the structural ceiling

Global agencies apply a **sovereign-rating cap (or "country ceiling")** to structured-finance issuances. The mechanism:

| Step | Rule |
|---|---|
| Country ceiling | The cap on any structured-finance tranche issued out of a given jurisdiction, anchored to the sovereign rating |
| Japan sovereign rating | S&P: A+ / Moody's: A1 / Fitch: A (as of recent cycle, historically downgraded from AA / Aa during the 2010s) |
| Tranche ceiling | Typically equal to or one notch above the sovereign ceiling for highly-rated structured-finance instruments meeting "rated above sovereign" criteria |
| Result | A Japanese RMBS senior tranche cannot easily be rated AAA by S&P, even if the underlying pool would otherwise qualify — typical ceiling AA+ / AA |

By contrast, **JCR and R&I rate the Japan sovereign AAA (or AA+)** on the domestic scale, which has no country ceiling problem. So a senior tranche that earns AAA from JCR routinely lands at AA / AA- from S&P — a 2-notch split at the senior layer.

## 3. Differences in modelling assumptions

### 3a. Default frequency / transition matrix

Global agencies use long-horizon **transition matrices** derived from multi-jurisdiction default datasets (largely US, EU, UK). Applied to a Japanese pool, this produces higher modelled default frequencies than the JCR / R&I domestic-experience-based matrices, which reflect (i) lower Japanese consumer-default rates historically, (ii) cultural payment discipline, and (iii) lower foreclosure rates on residential mortgages even during the 1997–2003 banking crisis.

### 3b. Recovery assumption

| Asset class | JCR / R&I assumption | Global-agency assumption | Gap |
|---|---|---|---|
| Residential mortgage (urban) | 60–75% LGD-adjusted recovery over 18–24 months | 50–65% over 24–36 months | Modest |
| Residential mortgage (rural / regional) | 50–65% recovery | 35–50% (foreclosure liquidity / resale value haircut) | Material |
| Auto loan | 35–45% recovery (used-car wholesale value) | 25–40% | Modest |
| Consumer unsecured | 0–5% recovery | 0–5% | Negligible |
| CMBS (Tokyo CBD office) | 65–80% recovery | 55–75% | Modest |
| CMBS (regional retail / hotel) | 45–60% recovery | 30–50% | Material |

The rural-collateral recovery gap is the largest driver of split ratings in regional-pool deals.

### 3c. Cash-flow stress

Global agencies layer additional stress scenarios — interest-rate shocks, prepayment-rate stresses, servicer-disruption tail risk — that JCR / R&I either model less aggressively or treat as qualitative considerations.

## 4. Transition matrix differences — empirical observation

JCR-rated SF tranches historically show very low transition rates (downgrades) compared to global-agency-rated tranches with the same nominal letter rating. The gap reflects (i) different modelling philosophies, (ii) different sample populations (JCR sample is overwhelmingly Japanese, global-agency sample is multi-jurisdiction), and (iii) JCR's stronger weighting of qualitative considerations (servicer strength, originator track record, [[JapanFG/mufg|MUFG]] / [[JapanFG/smfg|SMFG]] / [[JapanFG/mizuho-fg|Mizuho FG]] sponsor support).

This is a contested point — JCR argues its domestic-anchored methodology better reflects actual Japanese pool performance; global agencies argue their methodologies are more conservative and globally-comparable.

## 5. Recent JCR / S&P split-rating cases — illustrative pattern

Without naming specific transactions, the recurring pattern in publicly-disclosed JSDA SF statistics shows:

| Deal type | JCR typical | S&P / Moody's typical | Spread implication |
|---|---|---|---|
| Megabank-sponsored auto ABS (senior) | AAA | AA / AA+ | 5–15 bp pickup for foreign investors |
| Regional-bank RMBS (senior) | AAA | A+ / AA- | 20–40 bp pickup |
| CMBS senior (Tokyo CBD) | AAA | AA- / AA | 15–25 bp pickup |
| CMBS senior (regional) | AA / AA+ | A / A+ | 30–60 bp pickup |
| ABCP (megabank conduit) | A-1+ / J-1+ | A-1+ | Minimal |

The 2010s saw periodic episodes where S&P or Moody's downgraded Japanese SF tranches that JCR continued to affirm, generating commentary from issuers and investors about methodology divergence.

## 6. Why dual-rating still happens

Despite the split-rating cost, dual or triple rating remains common because:

1. **Foreign investor base** — global asset managers running global IG mandates require a global-agency rating to hold the bond; JCR-only is insufficient
2. **Repo eligibility** — for cross-border repo (e.g., ECB collateral framework, US tri-party repo), only global-agency ratings count
3. **Bank capital treatment** — under Basel III standardised approach, only ratings from recognised ECAIs count; in some jurisdictions JCR / R&I are not recognised
4. **Marketing optics** — a global-agency rating signals "investable for foreign account" even if the pricing is set off JCR

The dealer ([[JapanFG/mufg-securities|MUFG MS]] / [[JapanFG/smbc-nikko|SMBC Nikko]] / [[JapanFG/mizuho-securities|Mizuho Securities]]) chooses which agencies to engage based on the target investor list.

## 7. Counterpoints

- **"Sovereign-cap mechanical"** — Critics argue the country ceiling is overly mechanical and does not reflect that a domestic-currency JGB has never defaulted; well-structured Japanese SF tranches arguably deserve to be uncapped. Global agencies maintain the cap on transfer-and-convertibility-risk grounds even though Japan has no such restrictions
- **"JCR / R&I too lenient"** — Foreign investors sometimes view JCR / R&I AAA ratings as inflated relative to S&P's AA-, and price closer to the global-agency level even when only the domestic rating is available
- **"Transition-matrix sampling bias"** — JCR's defence that its sample better reflects Japan-specific behaviour is valid but creates a forward-looking blind spot if Japanese credit conditions converge with global norms (e.g., rising household leverage, mortgage stress under [[JapanFG/boj|BOJ]] rate normalisation)
- **"Tokyo-office staffing constraints"** — Global agencies cover Japan SF with smaller teams than the domestic agencies; some issuers report longer rating turnaround and less granular issuer engagement
- **"Methodology updates create cliff risk"** — When global agencies update their structured-finance criteria, mass rating reviews can produce simultaneous downgrades across the Japanese SF universe, generating spread widening that JCR-only deals avoid

## 8. Open questions

- How much of the split-rating gap closes if [[JapanFG/boj|BOJ]] normalises rates and Japanese household default rates rise toward global averages
- Whether FSA will eventually pressure global agencies to lift the sovereign-cap mechanism for high-quality Japanese SF
- Whether new Japanese SF asset classes (ESG-linked auto ABS, green RMBS) will be rated by all five agencies or split by jurisdiction
- The competitive position of [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I]] if more foreign investors enter the Japan SF market and demand global-agency ratings as default
- Whether China-based agencies (Dagong, etc.) will gain footprint in Japan SF for cross-border-deal coverage

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]
- [[real-estate-finance/INDEX|real-estate-finance index]]
- [[finance/INDEX|finance index]]
- [[derivatives/japan-cds-market-overview|Japan CDS market overview]]
- [[JapanFG/mufg|MUFG]] · [[JapanFG/smfg|SMFG]] · [[JapanFG/mizuho-fg|Mizuho FG]]
- [[JapanFG/japan-exchange-group|JPX]] · [[JapanFG/norinchukin|Norinchukin]]

## Sources

- JCR official methodology — https://www.jcr.co.jp/en/
- R&I official methodology — https://www.r-i.co.jp/en/
- JSDA structured-finance statistics — https://www.jsda.or.jp/en/
- Moody's Japan K.K. methodology library (public)
- S&P Global Ratings Japan structured-finance criteria (public)
- Fitch Ratings Japan structured-finance criteria (public)
- FSA registered credit rating agencies list (public)

---

> [!info] 校核状态
> confidence: **likely**. Sovereign-cap mechanism and split-rating dynamics are well-documented in public methodology papers from all three global agencies and in JCR / R&I commentary. Specific recent split-rating cases are abstracted to avoid naming individual transactions. Transition-matrix numbers are illustrative and reflect typical industry-discussed gaps, not single-source claims.
