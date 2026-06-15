---
source: money-market/japan-short-term-funding-instrument-matrix
source_hash: 0fea42c9d4c38bf2
lang: en
status: machine
fidelity: ok
title: "Japan short-term funding instrument matrix"
translated_at: 2026-05-30T14:13:23.430Z
---

# Japan short-term funding instrument matrix

## TL;DR

Japan's short-term funding market is not one product. The uncollateralized and collateralized call markets, the GC and SC repo legs of JGB securities financing, commercial paper (CP), negotiable certificates of deposit (NCD), Treasury Discount Bills (TBill / TDB), the BoJ complementary deposit facility (補完当座預金制度), and MRF / MMF money funds each carry distinct issuer types, tenor ranges, minimum lots, settlement cycles, credit profiles, BoJ collateral eligibility, participant mixes, and outstanding-size scales. This matrix gathers the publicly verifiable axes so that any single front-end instrument page can be placed in the broader funding architecture before a tenor, rate, or counterparty question gets asked.

## Wiki route

This entry sits under [[money-market/INDEX|money-market index]]. It pairs with [[money-market/japan-money-market|Japan money market]] as the domain overview, [[money-market/call-market-structure|call market structure]] for the interbank lane, [[money-market/jgb-repo-market-japan|JGB repo market in Japan]] for the secured-funding lane, [[money-market/japan-cp-commercial-paper-market|Japan CP market]] for the corporate / bank-affiliated CP lane, [[money-market/japan-ncd-negotiable-cd-market|Japan NCD market]] for the bank-issued deposit lane, [[money-market/japan-tbill-treasury-discount-bill|Japan TBill / TDB]] for the sovereign-issuance lane, [[money-market/japan-mmf-money-market-mutual-fund|Japan MRF / MMF]] for the buy-side cash-vehicle lane, and [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|BoJ post-2024 floor system and complementary deposit facility]] for the central-bank-deposit lane. The implementation rail is [[money-market/boj-open-market-operations|BoJ open market operations]]; the dealer-franchise side is [[banking/INDEX|banking index]] and the corporate end-user side is [[finance/japan-corporate-treasury-and-cash-management|corporate treasury and cash management]].

## Why a front-end instrument matrix matters

A single phrase like "short-term funding" hides the fact that the legal form, issuer, settlement plumbing, and BoJ counterparty role differ across instruments. Without classification:

- a [[money-market/call-market-structure|call money]] trade looks like a [[money-market/jgb-repo-market-japan|GC repo]] trade even though one is unsecured and the other is JGB-collateralized;
- a [[money-market/japan-cp-commercial-paper-market|CP]] note looks like an [[money-market/japan-ncd-negotiable-cd-market|NCD]] note even though the issuer base, FIEA disclosure regime, and depositary plumbing are different;
- a [[money-market/japan-tbill-treasury-discount-bill|TBill]] looks like just another short note even though it is a Ministry of Finance sovereign claim eligible across every BoJ operation;
- the BoJ [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|complementary deposit facility]] looks like a "deposit" even though it is the central-bank rail that anchors every other rate in the matrix.

The matrix exists so that any single short-end instrument page can be placed inside the post-March-2024 floor-system framework before any rate or strategy reading.

## Instrument 1 — Uncollateralized call money (無担保コール)

- **Legal form / market.** Uncollateralized interbank loan brokered through [[money-market/tanshi-company-business-model|tanshi companies]] or transacted directly; market venue is the uncollateralized call market governed by Japanese interbank market conventions.
- **Issuer type.** Banks, trust banks, foreign-bank branches, securities firms, and other financial institutions with [[banking/INDEX|banking index]] BoJ-account access; corporates do not participate directly.
- **Tenor range.** Overwhelmingly overnight (O/N); a tom-next strip and short term (TN, SN, 1W) trade as well; published BoJ call money statistics include term breakdowns.
- **Minimum lot.** Convention-driven in ¥100 million increments; large interbank tickets sized in the billions of yen.
- **Settlement.** Same-day funds via BoJ-NET current-account transfers, typically O/N rolling each business day.
- **Credit risk.** Unsecured counterparty credit only; no collateral. Defaults rely on direct interbank exposure and master-agreement enforcement.
- **BoJ collateral eligibility.** Not relevant — call money is the BoJ's reference short rate, not a BoJ-eligible collateral instrument. The traded overnight rate is the policy-transmission point referenced in BoJ market-operation guidelines.
- **Participants.** Megabank treasuries, regional bank treasuries, trust banks, securities firms (rate-takers and risk warehouses), tanshi brokers as intermediaries, foreign-bank branches with BoJ-net access.
- **Outstanding.** BoJ publishes daily volume statistics; volume normalized sharply higher post-March-2024 as positive overnight rates revived interbank activity that was suppressed during the negative-rate / ample-reserve era.
- **Post-2024 floor implications.** Uncollateralized overnight call rate trades close to (and usually slightly above) the [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|policy-rate-balance interest rate]]; the gap between the floor and the traded call rate is one of the most-watched signals of money-market functioning.

## Instrument 2 — Collateralized call money (有担保コール)

- **Legal form / market.** Secured interbank loan against eligible collateral (JGBs, other public-sector paper); separate market segment from uncollateralized call.
- **Issuer type.** Same banks and financial institutions as the uncollateralized lane; cooperative-finance central institutions ([[cooperative-banks/norinchukin|農林中央金庫]], [[cooperative-banks/shinkin-central|信金中央金庫]]) also active.
- **Tenor range.** O/N dominant, with some term activity; less dense than the uncollateralized lane.
- **Minimum lot.** ¥100 million convention with larger sizes typical.
- **Settlement.** Same-day funds via BoJ-NET; collateral pledged through standardized custody arrangements.
- **Credit risk.** Reduced by collateral haircuts; residual operational risk on collateral management.
- **BoJ collateral eligibility.** Not directly a BoJ instrument; collateral pool overlaps with BoJ-eligible collateral.
- **Participants.** Banks, cooperative-finance central institutions, trust banks, life insurers (occasional), tanshi brokers. Foreign participation is lighter than in the uncollateralized lane.
- **Outstanding.** Smaller than uncollateralized call by an order of magnitude in normal times; published in BoJ call money market statistics.
- **Post-2024 floor implications.** Trades very close to the policy-rate-balance floor with a small secured-vs-unsecured basis vs uncollateralized call; the gap reflects collateral demand and end-of-month / fiscal-year-end pressure.

## Instrument 3 — GC repo (general collateral)

- **Legal form / market.** Sale-and-repurchase agreement against general (substitutable) JGB collateral; technically a repurchase transaction (現先) or a 現金担保付債券貸借 (cash-collateralized bond lending) structure under Japanese practice. See [[money-market/jgb-repo-market-japan|JGB repo market]] for legal-form detail.
- **Issuer type.** Cash borrowers include securities firms, trust banks, foreign banks, hedge funds; cash lenders include banks, trust banks, life insurers, MMFs, foreign cash investors.
- **Tenor range.** O/N (T/N is the most-liquid point in JGB GC repo), 1W, 2W, 1M, 3M; longer term repo less common.
- **Minimum lot.** Practical minimums in the ¥1 billion range for institutional tickets; smaller sizes possible bilaterally.
- **Settlement.** T+0 / T+1 depending on convention; JGB delivery settled through BoJ-NET JGB Services with cash settlement via BoJ-NET.
- **Credit risk.** Low — collateralized by JGBs with daily mark-to-market and haircuts; counterparty risk on the collateralized residual.
- **BoJ collateral eligibility.** GC-repo is not a BoJ deposit instrument, but the underlying JGB collateral is BoJ-eligible at very low haircuts.
- **Participants.** Megabank treasuries, securities-firm financing desks, trust banks, life insurers as cash lenders, foreign banks and hedge funds as borrowers, [[financial-regulators/japan-securities-finance|JSF]] and tanshi-adjacent brokers as intermediaries.
- **Outstanding.** Largest single short-term-funding market in Japan by stock; daily turnover measured in tens of trillions of yen on a published BoJ / JSDA basis.
- **Post-2024 floor implications.** GC repo (T/N) trades slightly below the policy-rate-balance floor when JGB collateral is in plentiful supply, slightly above when collateral is scarce. The GC repo rate is the canonical secured short-rate benchmark complement to uncollateralized call.

## Instrument 4 — SC repo (special collateral)

- **Legal form / market.** Same legal form as GC repo but referenced to a specific JGB issue (an "on-the-run" or otherwise special bond); the cash leg is priced through a "specialness" premium.
- **Issuer type.** Same as GC repo, with hedge-fund and dealer demand for specific-issue borrowing dominating.
- **Tenor range.** O/N, T/N, term up to about 1 month; specials beyond 1 month rare.
- **Minimum lot.** Typically ¥1 billion-and-up tickets per CUSIP / ISIN.
- **Settlement.** Same as GC repo: T+0 / T+1 via BoJ-NET JGB Services.
- **Credit risk.** Same collateralized profile as GC repo.
- **BoJ collateral eligibility.** Same JGB-eligibility framework; specific issues with active BoJ purchase / lending activity influence specialness.
- **Participants.** Hedge funds (short-cover demand), securities firms (warehouse), trust banks (lend issues out of custody books), [[money-market/jgb-repo-market-japan|JGB repo]] dealers.
- **Outstanding.** Subset of total JGB repo; published JSDA statistics break out specials and GC volumes.
- **Post-2024 floor implications.** Specialness adjusts independently of the overall floor; intense BoJ purchases of specific issues historically created severe SC squeezes and steep negative specialness spreads.

## Instrument 5 — Commercial paper (CP)

- **Legal form / market.** Short-term corporate bond (短期社債) under the Book-Entry Transfer Act; fully dematerialized through [[securities/japan-securities-depository-center|JASDEC]] short-term corporate bond book-entry system. See [[money-market/japan-cp-commercial-paper-market|Japan CP market]].
- **Issuer type.** Corporates, banks (bank-holding-company and group entities), non-bank financial institutions (consumer credit, leasing), special-purpose vehicles for ABCP.
- **Tenor range.** 1 day to under 1 year; clustering at 1 month and 3 months; quarter-end-spanning maturities common.
- **Minimum lot.** ¥100 million typical issuance lot; secondary trades in smaller sizes possible.
- **Settlement.** T+0 / T+1 via JASDEC short-term corporate bond book-entry; BoJ-NET cash settlement.
- **Credit risk.** Issuer credit; ratings dominated by a-1 / J-1 tier (R&I, JCR, S&P Japan, Moody's Japan). ABCP carries structured-finance credit risk on the conduit's receivables pool.
- **BoJ collateral eligibility.** Yes — eligible CP is accepted for BoJ pooled-collateral loans; BoJ has historically conducted CP-repo and outright CP purchase operations as part of [[money-market/boj-open-market-operations|open market operation]] toolkits.
- **Participants.** Banks (treasury and trust accounts), MRFs / MMFs, asset managers, life and non-life insurers, foreign investors (selectively), corporate treasuries with surplus cash.
- **Outstanding.** Published by [[money-market/japan-cp-commercial-paper-market|Japan CP market]] page and JSDA CP statistics; stock measured in tens of trillions of yen on a recent monthly basis.
- **Post-2024 floor implications.** CP yields trade above the policy-rate-balance floor by issuer credit spread; the bank-affiliated tier prices near a tight spread to the floor, with corporate and non-bank tiers wider depending on rating and rollover frequency.

## Instrument 6 — Negotiable certificate of deposit (NCD)

- **Legal form / market.** Negotiable certificate of deposit issued by a bank under the Banking Act deposit framework; tradable in the secondary market through dealer intermediation. See [[money-market/japan-ncd-negotiable-cd-market|Japan NCD market]].
- **Issuer type.** Domestic banks (megabanks, regional banks, trust banks, net banks), foreign-bank Tokyo branches.
- **Tenor range.** 1 month to 1 year typical, with concentration in 3M / 6M; some longer-dated NCDs out to several years.
- **Minimum lot.** Wholesale ¥100 million typical issuance face; large institutional buyers take much larger tickets.
- **Settlement.** T+1 / T+2 typical; settlement through bank-to-bank conventions, not JASDEC.
- **Credit risk.** Issuing bank's senior unsecured credit; covered by [[financial-regulators/yokin-hoken-kiko|DICJ]] only up to the standard deposit-insurance ceiling (¥10 million principal plus interest), so wholesale NCDs depend on issuer credit beyond DICJ.
- **BoJ collateral eligibility.** Less central than CP for BoJ collateral operations; eligibility depends on issuer / form. Foreign-bank-branch NCDs treated differently from domestic-bank NCDs.
- **Participants.** Bank treasuries (issuer side), MMFs / MRFs, corporate treasuries, foreign cash investors (issuer-aware), trust banks for collective investment schemes.
- **Outstanding.** Tracked in BoJ short-term financial market statistics; the bank-issuance complement to corporate CP in similar tenor brackets.
- **Post-2024 floor implications.** NCD yields trade above the policy-rate-balance floor; bank-issuer tier and DICJ-uninsured nature of wholesale lots mean NCD pricing is more sensitive to bank-credit perception than CP corporates of similar rating.

## Instrument 7 — Treasury Discount Bill (TBill / TDB / 国庫短期証券)

- **Legal form / market.** Discount-basis short-term Japanese government bond issued under the Ministry of Finance JGB issuance framework; called 国庫短期証券 in Japanese, designated as Treasury Discount Bills (TDB) in MOF English materials. See [[money-market/japan-tbill-treasury-discount-bill|Japan TBill / TDB]].
- **Issuer type.** Ministry of Finance (Japan sovereign).
- **Tenor range.** 2 months, 3 months, 6 months, 1 year (the headline 1Y TDB is a key short-end JGB benchmark).
- **Minimum lot.** ¥100 million issuance lot at auction; secondary trades in smaller sizes for institutional investors.
- **Settlement.** T+1 / T+2 typical via BoJ-NET JGB Services; JGB book-entry system.
- **Credit risk.** Sovereign — Japan government credit.
- **BoJ collateral eligibility.** Fully eligible across BoJ operations at very low haircuts; the canonical risk-free collateral.
- **Participants.** Banks, life insurers, non-life insurers, trust banks, foreign central banks and reserve managers (heavy buyers of yen-denominated sovereign cash), foreign commercial banks, MMFs / MRFs, asset managers.
- **Outstanding.** Tracked in MOF debt statistics; stock measured in hundreds of trillions of yen at full TDB outstanding (combined across tenors).
- **Post-2024 floor implications.** TDB yields trade near the policy-rate-balance floor minus a small collateral-scarcity premium; negative TDB yields (yields below the floor and occasionally below zero) historically appeared when foreign-reserve-manager demand and BoJ purchases together compressed supply. Post-2024 the TDB curve is reading more like a conventional short JGB curve.

## Instrument 8 — BoJ complementary deposit facility (補完当座預金制度)

- **Legal form / market.** Interest paid by the Bank of Japan on commercial-bank current-account holdings under the BoJ Act and Policy Board decisions; the institutional rail is the complementary deposit facility (補完当座預金制度). See [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|BoJ post-2024 floor system]].
- **Issuer type.** Bank of Japan (central-bank liability).
- **Tenor range.** Effectively O/N with rolling daily balances; not a tradable instrument but a deposit facility.
- **Minimum lot.** None as such — balance held at BoJ-NET.
- **Settlement.** BoJ-NET current-account ledger; interest applied to balances per published BoJ MPM decision.
- **Credit risk.** Central-bank credit (zero by construction for yen-domestic counterparties).
- **BoJ collateral eligibility.** This is the BoJ side of the rail; no external collateral involved.
- **Participants.** Only direct BoJ-NET counterparties: banks, trust banks, foreign-bank branches with BoJ accounts, cooperative-finance central institutions ([[cooperative-banks/norinchukin|農中]], [[cooperative-banks/shinkin-central|信金中央金庫]], 全信組連, 労金連), [[money-market/tanshi-company-business-model|tanshi companies]], and securities firms admitted as BoJ counterparties.
- **Outstanding.** Outstanding current-account balances at BoJ measured in hundreds of trillions of yen post-QE legacy; the policy-rate-balance tier sets the headline short rate.
- **Post-2024 floor implications.** This is the floor itself — every other instrument in this matrix is priced off the policy-rate-balance interest rate. Reserve abundance keeps the floor binding rather than the corridor ceiling binding.

## Instrument 9 — MRF / MMF (money market funds)

- **Legal form / market.** Investment trust under the Investment Trust Act; MRF (Money Reserve Fund) is a regulated cash-management vehicle used inside securities-firm brokerage accounts, MMF (Money Market Fund) is a broader money-fund category. JSDA publishes statistics on both; in practice yen MMFs have largely disappeared, while MRFs remain widespread inside brokerage accounts. See [[money-market/japan-mmf-money-market-mutual-fund|Japan MRF / MMF]].
- **Issuer type.** Investment management companies offering an MRF / MMF under a designated regulated structure; the underlying instruments are TBill, CP, NCD, repo, and short-bond holdings.
- **Tenor range.** Daily-redemption (MRF) or short-redemption (MMF) cash vehicle; weighted-average maturity of the underlying portfolio is short (months).
- **Minimum lot.** Retail investors can hold tiny balances; institutional access through brokerage accounts.
- **Settlement.** Same-day for MRF redemption; trade ledger held inside brokerage system.
- **Credit risk.** Diversified portfolio of high-grade short instruments; principal stability subject to mark-to-market in the post-2001 regime.
- **BoJ collateral eligibility.** Funds themselves not BoJ-eligible; underlying portfolio holdings (TBill, CP, NCD) are eligible at varying levels.
- **Participants.** Retail investors with brokerage accounts (the dominant MRF base), corporates as a sub-segment, asset-management custody as the operational base.
- **Outstanding.** MRF stock measured in tens of trillions of yen across the brokerage industry; MMF stock collapsed post-2001 NAV-break crisis and post-2016 NIRP, with most MMFs closed.
- **Post-2024 floor implications.** Positive yen short rates have revived the MRF yield surface; underlying portfolio yields lift toward the policy-rate-balance floor minus management fees. The MRF survives as the default brokerage cash sleeve; MMF revival depends on persistent positive front-end rates and product-revival decisions.

## Cross-instrument comparison matrix

| Dimension | Uncoll. Call | Coll. Call | GC Repo | SC Repo | CP | NCD | TBill / TDB | BoJ CDF (補完当座預金) | MRF / MMF |
|---|---|---|---|---|---|---|---|---|---|
| **Legal form** | Unsecured interbank loan | Secured interbank loan | JGB sale-and-repurchase / 現先 / 現金担保付債券貸借 | JGB sale-and-repurchase on specific issue | 短期社債 under Book-Entry Transfer Act | Bank deposit / certificate | JGB (TBill) under MOF JGB framework | BoJ current account interest under BoJ Act | Investment trust under Investment Trust Act |
| **Issuer / counterparty** | Banks, securities firms | Banks, cooperative-finance central | Securities firms, banks, trust banks, hedge funds | Same as GC | Corporates, banks, non-bank FIs, SPV (ABCP) | Domestic banks, foreign-bank Tokyo branches | Ministry of Finance | Bank of Japan | Investment management company / underlying issuers |
| **Tenor (most liquid)** | O/N | O/N | T/N, 1W | O/N–1M | 1M, 3M | 3M, 6M | 3M, 6M, 1Y | O/N rolling balance | Daily-redemption (MRF) |
| **Minimum lot (convention)** | ¥100 million | ¥100 million | ¥1 billion | ¥1 billion | ¥100 million | ¥100 million | ¥100 million auction | N/A (balance) | Retail / institutional N/A |
| **Settlement** | Same-day BoJ-NET | Same-day BoJ-NET | T+0 / T+1 via BoJ-NET JGB | T+0 / T+1 via BoJ-NET JGB | T+0 / T+1 via JASDEC short-term corp bond | T+1 / T+2 bank conventions | T+1 / T+2 via BoJ-NET JGB | BoJ-NET ledger | Brokerage same-day redemption |
| **Credit risk** | Unsecured counterparty | Counterparty + collateral | Counterparty + collateral haircut | Counterparty + collateral haircut | Issuer credit | Issuer bank credit (DICJ only to ¥10m) | Sovereign | Central bank (zero) | Diversified short portfolio |
| **BoJ collateral eligibility** | N/A (reference rate) | N/A | N/A (collateral pool overlaps) | N/A | Yes (eligible CP) | Limited / form-dependent | Yes (very low haircut) | The BoJ side itself | Underlying holdings eligible |
| **Banks** | Heavy | Heavy | Heavy | Lighter | Issuer + investor | Issuer + investor | Investor | Counterparty | Underlying holder |
| **Insurers** | Light | Light | Cash-lender side | Light | Investor | Investor | Investor | N/A | Underlying holder |
| **Foreign participants** | Foreign-bank branches | Lighter | Heavy on borrower side | Heavy (hedge funds) | Selective | Foreign-bank branches issue | Heavy (reserve managers) | Foreign-bank branches | N/A |
| **Corporates** | None directly | None directly | Indirect via cash sweep | None directly | Heavy issuer | None as issuer; some as investor | Some treasury investor | None directly | Some treasury cash |
| **Typical outstanding scale** | Hundreds of billions to low trillions ¥ daily volume | Smaller than uncoll. | Tens of trillions ¥ daily turnover | Subset of GC | Tens of trillions ¥ stock | Tens of trillions ¥ stock | Hundreds of trillions ¥ stock (combined tenors) | Hundreds of trillions ¥ current-account balance | Tens of trillions ¥ stock (MRF) |
| **Post-2024 floor implication** | Trades just above floor | Trades very close to floor | Slightly below to slightly above floor | Specialness independent | Floor + issuer spread | Floor + issuer spread | Floor minus small premium | The floor itself | Floor − fees (MRF yield) |

## How to read this matrix

The instrument matrix is a public-surface tool, not a trading guide. When reading any single front-end instrument page:

1. **Start with legal form.** Whether an instrument is an interbank loan, a sale-and-repurchase agreement, a short-term corporate bond, a bank deposit, a sovereign bill, a central-bank deposit, or an investment trust determines almost every other field (regulator, settlement plumbing, disclosure, investor base, BoJ eligibility).
2. **Check who can be on each side.** Direct BoJ-NET counterparties dominate the unsecured / secured call markets and the complementary deposit facility; broader access opens at the repo, CP, NCD, and TBill layers; brokerage retail accesses the front end primarily through MRF.
3. **Check the BoJ-rail role.** [[money-market/boj-post-2024-floor-system-complementary-deposit-facility|Complementary deposit facility]] is the rail; [[money-market/boj-open-market-operations|open market operations]] use TBills, JGB repo, CP repo, and JGB outright as tool kits. Every other instrument is priced off the floor.
4. **Check post-2024 implications.** The shift to a positive-rate floor in March 2024 changed the gravitational center of the matrix: interbank trading is alive, repo is more active, CP / NCD now carry meaningful term spread, TBill yields are off zero, and MRF yields are a recognizable cash-vehicle yield.
5. **Use the participants column for second-order reading.** Foreign-reserve-manager demand for TBill, hedge-fund borrow demand in SC repo, MRF retail flows, and corporate CP rollover behavior are second-order drivers that show up in this column.

## Boundary cases and caveats

- **Call vs repo.** Uncollateralized call and collateralized call sit in the same call-market venue, with different secured / unsecured legal forms. GC and SC repo sit in the [[money-market/jgb-repo-market-japan|JGB repo market]] under different legal-form conventions (現先 vs 現金担保付債券貸借). Conflation is a common misreading.
- **CP vs short-term bond.** CP under the [[securities/japan-securities-depository-center|JASDEC]] short-term corporate bond book-entry system is treated as a 短期社債 — legally a bond, operationally short-term funding. Conventional corporate bonds longer than 1 year use a separate book-entry pathway.
- **NCD vs ordinary bank deposit.** A retail bank deposit covered by [[financial-regulators/yokin-hoken-kiko|DICJ]] up to ¥10 million and a wholesale NCD held above the DICJ ceiling are not the same product, even though both are bank liabilities under the Banking Act.
- **TBill vs short JGB.** TBill (国庫短期証券 / TDB) is its own short-end JGB instrument distinct from coupon JGBs with short remaining maturity; the issuance and settlement conventions are TBill-specific.
- **BoJ complementary deposit facility vs reserve requirement.** Reserve requirement (準備預金制度) is a separate framework; the complementary deposit facility is the interest-on-reserves rail. Both touch BoJ-NET balances, but they are not the same legal device.
- **MRF vs MMF.** MRF is a brokerage-account sweep vehicle with daily redemption; MMF is a broader investment-trust money-fund category that has largely disappeared from yen markets post-2001 NAV-break and post-2016 NIRP. The two are often grouped together but differ in regulatory framing.
- **JSCC clearing.** Repo clearing through JSCC ([[securities/japan-securities-clearing-corp|JSCC]]) covers a meaningful share of dealer-to-dealer JGB repo; call money does not flow through JSCC. CP / NCD / TBill secondary trades do not generally use a CCP for cash settlement.

## Related

- [[money-market/INDEX|money-market index]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/japan-cp-commercial-paper-market]]
- [[money-market/japan-ncd-negotiable-cd-market]]
- [[money-market/japan-tbill-treasury-discount-bill]]
- [[money-market/japan-mmf-money-market-mutual-fund]]
- [[money-market/boj-post-2024-floor-system-complementary-deposit-facility]]
- [[money-market/boj-open-market-operations]]
- [[money-market/tanshi-company-business-model]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[banking/INDEX]]
- [[finance/japan-corporate-treasury-and-cash-management]]
- [[financial-regulators/yokin-hoken-kiko]]
- [[financial-regulators/boj-monetary-policy]]
- [[cooperative-banks/norinchukin]]
- [[cooperative-banks/shinkin-central]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: Money Market (paym/market overview).
- Bank of Japan: short-term financial market statistics (statistics/market/short).
- Bank of Japan: Call Money Market Data (mutan series).
- Bank of Japan: market operations on Treasury Discount Bill purchases / sales (ope_t).
- Bank of Japan: market operations on CP / corporate paper (ope_b).
- Ministry of Finance: JGB auction calendar and TDB / TBill issuance schedule.
- Ministry of Finance: TBill auction calendar (tbills.html).
- Japan Securities Dealers Association (JSDA): statistics portal and CP issuance / outstanding tables.
- Japan Securities Dealers Association (JSDA): MMF investor-information page.
- Japan Securities Depository Center (JASDEC): short-term corporate bond book-entry transfer system outline.
- Japan Securities Clearing Corporation (JSCC): clearing scope and JGB OTC clearing rules.
- Financial Services Agency (FSA): FIEA framework reference.
