---
source: finance/fire-math-reverse-derivation
source_hash: 3729e7acd42627be
lang: en
status: machine
fidelity: ok
title: "FIRE Mathematics Reverse-Derivation Framework"
translated_at: 2026-05-31T06:16:15.720Z
---

# FIRE Mathematics Reverse-Derivation Framework


## Wiki route

This entry sits under [[finance/INDEX|finance index]]. Read it against [[finance/japan-ib-league-table|Japan IB league table]] for peer / contrast context and [[securities/INDEX|securities index]] for the broader system / regulatory boundary.

## Core Proposition

**Target principal = Annual post-retirement expenditure ÷ Safe Withdrawal Rate (SWR)**

This reverse-derivation relationship is the foundational formula of the FIRE (Financial Independence, Retire Early) community and originates from the Trinity Study of 1998年.

### Standard Parameters

| Parameter | Standard value | Description |
|------|--------|------|
| SWR (Safe Withdrawal Rate) | 4% | The original conclusion of the Trinity Study (30-year retirement horizon, stock/bond 60/40 split, inflation-adjusted) |
| Required principal multiple | 25× annual expenditure | Reciprocal of 4% (`1 / 0.04 = 25`) |
| Aggressive SWR | 3–3.3% | Early retirement (40+ years) or more conservative assumptions (corresponding to 30× – 33× multiples) |
| Conservative SWR | 5% | Semi-retirement (with ongoing cash flow generation) or under an optimistic market assumption (corresponding to 20× multiple) |

## 4-Step Reverse-Derivation Flow

1. **Determine the final monthly expenditure** (consumption level after future inflation)
2. **× 12  → Annual expenditure**
3. **÷ SWR → Target principal**
4. **Reverse-derive whether the target is achievable from current net assets + monthly contributions + time horizon + expected annual return**

### Mathematical Verification Formula

`Principal growth ≈ Current principal × (1 + r)^n + Monthly contribution × 12 × [((1+r)^n - 1) / r]`

Where r = annual return rate, n = number of years.

## Gap Analysis

Reverse-derivation results typically reveal **3 types of gaps**:

| Gap type | Symptom | Response |
|---------|------|------|
| Insufficient time | Retirement age unchanged · principal on track is insufficient | Push FIRE later · increase monthly contributions · introduce other cash flows |
| Insufficient monthly contributions | Small gap between income and expenditure | Increase income (side work / promotion) · reduce expenses · lower target consumption level |
| Assumptions too optimistic | Annual return 10%+, time horizon 25+ years | Reduce to 7–8% · expand safety margin · ensure "black-swan buffer" |

## Essential Difference from the "Simple Savings" Model

- Savings model: Starts from the starting point (current income/expenditure) with the endpoint unknown
- FIRE reverse-derivation: Starts from the endpoint (target principal) and reverse-derives what should be done now

→ **Different psychological anchors → Different decision-making priorities**

From the reverse-derivation perspective, the pain of "investing 10万円 more per month now" is diluted by the concrete figure of "10万円 less means a ¥X-hundred-million shortfall 11 years later."

## Safety-Margin Awareness

Serious FIRE reverse-derivation does not stop at calculating "just reaching ¥X hundred million" but **retains a safety margin**:

- Light: Target × 1.05 (5% buffer)
- Standard: Target × 1.2 (20% buffer)
- Conservative: Target × 1.5 (50% buffer)

The safety margin hedges 3-fold uncertainty: **annual return falling short of assumptions / inflation exceeding expectations / unexpected expenditures (medical / family)**.

## Applicability Boundaries

- Suitable for individuals with stable long-term investment habits + predictable future income
- Not suitable for those in a state of tight short-term cash flow / highly volatile income (freelance / startup phase)
- In a semi-FIRE model where "business income continues after retirement", apply the 4% rule only to the portion of monthly expenditure that "must be covered by principal"; the remainder can be covered by business cash flow

## Relationship with Other Financial Planning Frameworks

- **Target principal**: The "how much" question that FIRE answers (linking with [[finance/multi-jurisdiction-identity-tax-leverage|クロスボーダー身分組合せの税務レバレッジ]] can reduce the effective target principal)
- **Time value of money**: The time value of money is the tool for reverse-derivation
- **SWR**: The empirical foundation of the Trinity Study (reused as the core axis of [[finance/INDEX|finance index]] and the asset allocation framework of [[securities/INDEX|securities index]])

## References

- Trinity Study (Cooley, Hubbard, Walz 1998)
- [Wiki: Trinity study]
- FIRE community methodology (Mr. Money Mustache, etc.)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[finance/multi-jurisdiction-identity-tax-leverage|クロスボーダー身分組合せの税務レバレッジ]]
<!-- /wiki-links:managed -->
