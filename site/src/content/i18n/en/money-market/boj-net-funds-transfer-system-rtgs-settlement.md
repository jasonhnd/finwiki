---
source: money-market/boj-net-funds-transfer-system-rtgs-settlement
source_hash: c387fc73ac1d4331
lang: en
model: claude-opus-4-8
status: machine
fidelity: ok
title: "BOJ-NET Funds Transfer System and RTGS settlement"
translated_at: 2026-06-05T00:00:00.000Z
---
# BOJ-NET Funds Transfer System and RTGS settlement

## Wiki route

This entry sits under [[money-market/INDEX|money-market index]]. Read it against [[money-market/call-market-structure|Call market structure]] and [[money-market/japan-repo-transaction-structures-gensaki-cash-collateralized-securities-lending|repo transaction structures]] for the markets whose cash legs settle across this rail, and [[money-market/boj-open-market-operations|BoJ open market operations]] for how the central bank supplies and absorbs the reserves that flow through it. The institutional owner is [[financial-regulators/boj-payment-settlement-dept|the BoJ Payment and Settlement Systems Department]].

## TL;DR

The **BOJ-NET Funds Transfer System (BOJ-NET FTS)** is the Bank of Japan's online network for settling yen payments across **current accounts (当座預金) held at the BoJ**. It is the settlement floor under Japan's money market: when a call loan is repaid, a repo cash leg moves, or a BoJ operation injects funds, the cash ultimately moves as a transfer between BoJ current accounts over BOJ-NET.

Two structural facts define it:

- **RTGS is the sole settlement mode.** Payment instructions are processed immediately and individually (real-time gross settlement) provided sufficient funds are available — there is no end-of-day net settlement of these flows.
- **BoJ current accounts are the settlement asset.** The same accounts hold the **reserves / excess balances** that the [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|complementary deposit facility]] pays interest on, linking the *plumbing* (settlement) to the *price* (the rate floor).

For FinWiki, this is the page that answers "where does the cash actually go" for every money-market transaction, and it fills the INDEX backlog note on BoJ current-account access.

## What BOJ-NET Settles

| Flow | Settles across BOJ-NET because… |
|---|---|
| [[money-market/call-market-structure|Call loans]] | The uncollateralized call cash leg is a transfer between BoJ current accounts on the value date. |
| [[money-market/japan-repo-transaction-structures-gensaki-cash-collateralized-securities-lending|JGB repo]] cash legs | Repo / gensaki cash settles versus JGB delivery on a delivery-versus-payment (DVP) basis. |
| [[money-market/boj-open-market-operations|BoJ operations]] | Fund-supplying and fund-absorbing operations move reserves into / out of current accounts. |
| Interbank and large-value payments | High-value yen obligations between financial institutions. |
| Net positions from other systems | Net results from clearing systems (e.g. bill / cheque clearing) settle across BOJ-NET on an RTGS basis. |

The securities side has a companion service, **BOJ-NET JGB Services**, for JGB book-entry transfers; together they enable DVP so that JGB delivery and cash payment are linked, removing principal risk in repo and outright JGB settlement.

## Why RTGS, and the Liquidity Trade-off

RTGS removes settlement risk by settling each payment with finality the moment it is processed, rather than netting at day-end (which would leave large intraday exposures). The trade-off is **liquidity intensity**: gross settlement requires participants to have funds available throughout the day.

The BoJ manages that trade-off with two mechanisms:

- **Intraday overdraft facility**: the BoJ provides intraday credit (against collateral) so institutions can make payments before incoming funds arrive, smoothing intraday liquidity.
- **Liquidity-saving features**: queuing and offsetting mechanisms in BOJ-NET FTS that match opposing payments to economize on the liquidity each settlement consumes.

This is directly relevant to money-market timing: a tight intraday position can drive end-of-day [[money-market/call-market-structure|call-market]] activity as institutions square their BoJ current-account balances.

## Next-Generation RTGS (RTGS-XG)

The BoJ progressively moved Japan to RTGS and then enhanced it under the **next-generation RTGS (RTGS-XG)** project:

- Introduced **liquidity-saving features** into BOJ-NET FTS.
- Brought large-value payments previously handled by the private-sector Zengin Data Telecommunication System and the Foreign Exchange Yen Clearing System into the BOJ-NET FTS RTGS environment.

The effect was to concentrate systemically important large-value yen settlement on the central-bank RTGS rail with built-in liquidity economization — strengthening settlement safety while controlling the liquidity cost of gross settlement.

## Current Accounts: Plumbing Meets Price

BoJ current accounts do double duty, and conflating the two roles is a common error:

| Role | Meaning |
|---|---|
| Settlement asset | The balance used to settle payments over BOJ-NET FTS. |
| Reserve / policy balance | The same balances are reserves; under the [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|post-2024 floor system]] their tiers earn the complementary-deposit-facility rate, anchoring the call rate. |

So the *settlement system* (BOJ-NET) and the *rate floor* (interest on reserves) operate on the **same account balances**. A bank deciding whether to lend in the call market, hold reserves, or fund via repo is optimizing across settlement need, the reserve rate, and market funding cost simultaneously.

## Reading Checklist

1. Treat BOJ-NET FTS as the cash-settlement rail and BOJ-NET JGB Services as the securities rail; together they give DVP.
2. Remember RTGS means gross, immediate, final settlement — not net end-of-day.
3. Distinguish a BoJ current account's *settlement* role from its *reserve / policy* role; they share one balance.
4. Read intraday-liquidity tightness as a driver of end-of-day call-market activity, not a standalone signal.
5. For large-value yen settlement, recall RTGS-XG concentrated previously private-sector flows onto BOJ-NET FTS.

## JapanFG Relevance

- [[financial-regulators/boj-payment-settlement-dept|BoJ Payment and Settlement Systems Department]] operates and oversees BOJ-NET.
- [[financial-regulators/boj-monetary-policy|BoJ monetary policy]] supplies and absorbs the reserves that move across the rail and sets the reserve-rate floor.
- [[financial-regulators/boj-financial-markets-dept|BoJ Financial Markets Department]] conducts the market operations whose cash settles here.
- Megabanks [[megabanks/mufg]], [[megabanks/smfg]], and [[megabanks/mizuho-fg]] are direct current-account holders settling their own and clients' large-value yen flows.
- [[financial-regulators/tokyo-tanshi]], [[financial-regulators/central-tanshi]], and [[financial-regulators/ueda-yagi-tanshi]] intermediate the call and repo trades whose cash legs settle across BOJ-NET.

## Boundary Cases

- **BOJ-NET FTS vs BOJ-NET JGB Services**: cash-transfer rail vs JGB book-entry rail; both are needed for DVP repo / JGB settlement.
- **RTGS vs net settlement**: BOJ-NET settles gross and immediately; private retail systems net before their net positions settle across BOJ-NET.
- **Current account vs reserves**: same balance, two roles (settlement asset and policy / reserve balance).
- **BOJ-NET vs Zengin**: the Zengin Data Telecommunication System is the private-sector domestic funds-transfer network; large-value flows were brought onto BOJ-NET FTS under RTGS-XG, but Zengin remains the retail / mass-payment layer.

## Related

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/japan-repo-transaction-structures-gensaki-cash-collateralized-securities-lending]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/boj-post-2024-floor-system-complementary-deposit-facility]]
- [[money-market/tanshi-company-business-model]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[financial-regulators/boj-payment-settlement-dept]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/boj-financial-markets-dept]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: Outline of Payment and Settlement Systems (BoJ current accounts, BOJ-NET, settlement roles).
- Bank of Japan: RTGS (Real-Time Gross Settlement) page (RTGS as sole settlement mode, intraday overdraft, liquidity-saving features).
- Bank of Japan: The BOJ-NET Funds Transfer System overview (RTGS-XG, scope of payments brought onto BOJ-NET FTS).
- Bank of Japan: Money Market overview surface.
- BIS CPMI: Payment systems in Japan (BOJ-NET, RTGS, current-account settlement context).
