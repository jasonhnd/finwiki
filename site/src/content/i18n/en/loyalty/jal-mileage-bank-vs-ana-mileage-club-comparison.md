---
source: loyalty/jal-mileage-bank-vs-ana-mileage-club-comparison
source_hash: 2482dd8a91e6f522
lang: en
status: machine
fidelity: ok
title: "JAL Mileage Bank vs ANA Mileage Club — accrual, redemption, partner network, status tier, deferred-revenue accounting"
translated_at: 2026-05-30T14:48:27.664Z
---

# JAL Mileage Bank vs ANA Mileage Club — accrual, redemption, partner network, status tier, deferred-revenue accounting

## Wiki route

This entry sits under [[loyalty/INDEX|loyalty index]] as the **frequent-flyer-program comparison page** for the two anchor Japanese airline loyalty programs. Pair it with [[loyalty/japan-points-landscape|Japan points landscape]] for cross-loyalty-ecosystem context, [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] for IFRS 15 contract-liability treatment, [[loyalty/ponta-points-deep-dive|Ponta points deep dive]] for the JAL Mileage Bank to Ponta Points bilateral-exchange relationship, [[loyalty/d-point-detailed-ecosystem|d Point detailed ecosystem]] and [[loyalty/v-point-smbc-ccc-case|V Point case]] for common-point peers that interconvert with airline miles, [[JapanFG/jal-card|JAL Card]] and [[JapanFG/jal-payment-port|JAL Payment Port]] for the JAL-side card-issuance and payment-infrastructure stack, and [[payments/japan-code-payment-operator-2025-market-share-matrix|Japan code-payment operator 2025 market share matrix]] for wallet-adjacent context.

## TL;DR

**JAL Mileage Bank (JMB)** and **ANA Mileage Club (AMC)** are the two dominant Japanese airline frequent-flyer programs. Both are **mileage-based deferred-revenue loyalty programs** under IFRS 15 / ASBJ Statement No. 29, with contract liability recognized under the material-right framework. They differ structurally from common-point programs such as d Point, Ponta Points, V Point, PayPay Points, and Rakuten Points in three respects: 1. **mile-denominated currency** redeemed primarily against airline-seat inventory rather than retail purchase value; 2. **status-tier dynamics** based on flown-revenue-mile thresholds such as FOP and premium points; 3. **alliance interoperability**, with JAL tied to oneworld and ANA tied to Star Alliance. Both programs have materially expanded non-flight earning through co-branded credit cards, partner-merchant campaigns, and bilateral exchange with common-point programs. Under IFRS 15, airlines allocate part of ticket revenue to granted miles using the standalone selling price of the redemption award, then release revenue as miles are redeemed or recognized as breakage. This produces large, persistent contract-liability balances on airline balance sheets, typically at the multi-hundred-billion-yen scale for JAL and ANA combined.

## Program scale and identity layer

| Item | JAL Mileage Bank (JMB) | ANA Mileage Club (AMC) |
|---|---|---|
| Operator | [[JapanFG/jal-card|Japan Airlines (JAL)]] | ANA Holdings / All Nippon Airways (ANA) |
| Alliance | **oneworld** (founding member) | **Star Alliance** (founding member) |
| Mileage validity | 36 months from accrual month (legacy default) | 36 months from accrual month |
| Status-tier metric | **FLY ON POINT (FOP)** based on flown revenue miles | **PREMIUM POINT (PP)** based on flown revenue miles |
| Member base (Japan + global) | Tens of millions of accounts (combined JMB + JGC) | Tens of millions of accounts (combined AMC + SFC) |
| Lifetime-status equivalent | **JAL Global Club (JGC)** — perpetual recognition tier obtained by meeting FOP threshold once and holding a JGC-eligible JAL Card | **Super Flyers Club (SFC)** — same model, perpetual recognition by meeting PP threshold once and holding an SFC-eligible ANA Card |
| Premium status tier | **JMB Diamond** (top-tier annual qualifier; FOP threshold) | **AMC Diamond** (top-tier annual qualifier; PP threshold) |
| Anchor co-branded card issuer | [[JapanFG/jal-card|JAL Card]], a wholly owned JAL subsidiary | ANA Card series, issued by partner card companies under JCB, Visa, Mastercard, Amex, and Diners co-brand arrangements |
| Mileage program operator | JAL internal (no separate operating company) | ANA internal (no separate operating company) |

The **JGC / SFC perpetual-status mechanism** is a Japanese FFP-specific feature: once a member meets the FOP / PP threshold in a single calendar year, they can apply for a JAL Global Club or Super Flyers Club credit card (the "lifetime ticket" pattern), and as long as they continue to hold that card and pay the annual fee, they retain a service tier (Sapphire / Gold equivalent) regardless of subsequent-year flight activity. This creates a structurally large "former-flyer" status-holder base that does not exist in the same scale at non-Japanese FFPs.

### Flight accrual

| Cabin / fare | JMB accrual rate | AMC accrual rate |
|---|---|---|
| First / J-class / Business (paid premium fare) | 100-150% of distance flown | 100-150% of distance flown |
| Economy (paid published fare) | 70-100% of distance flown | 70-100% of distance flown |
| Discount economy | 30-70% of distance flown | 30-70% of distance flown |
| Award ticket | 0% | 0% |
| Partner-airline flight (oneworld / Star Alliance) | Variable per partner, fare-bucket-dependent | Variable per partner, fare-bucket-dependent |

Both programs publish detailed fare-class-to-accrual-rate tables; the structural pattern is similar (higher fare bucket = higher accrual %), with bonuses for status holders.

### Non-flight accrual

The materially larger volume of mile-issuance now comes from non-flight sources, primarily co-branded credit cards and partner exchanges:

| Non-flight source | JMB | AMC |
|---|---|---|
| **Co-branded card** | [[JapanFG/jal-card|JAL Card]] (JCB / VISA / Master / AmEx / Diners, all 5 international brands) | ANA Card series (JCB / VISA / Master / AmEx / Diners, partner-issued) |
| **Card spend accrual** | Standard 0.5-1.0 miles per JPY 100 depending on card tier; the Shopping Mile Premium add-on doubles accrual to 1.0 mile per JPY 100 | Standard 0.5-1.0 miles per JPY 100; the optional 10-mile course doubles accrual |
| **Premium card tier** | JAL Card CLUB-A Gold, JAL Card Platinum, JAL American Express Card CLUB-A Gold | ANA Wide Gold Card, ANA Card Premium, ANA American Express Premium Card |
| **Common-point bilateral exchange** | **Ponta Points to JMB**, including 2 Ponta Points to 1 mile for the Ponta-to-mile direction; **d Point to JMB** and other historical partners | **Rakuten Points to AMC**, legacy **T-Point to AMC**, no standard direct Ponta-to-AMC route, and various partner-point conversions |
| **Mall-shopping portal** | JAL Shopping Mile Program and JAL Mall | ANA Mall and ANA Mileage Mall |
| **Hotel partner accrual** | JAL ABC, JAL Hotels, and partner global hotel chains | ANA InterContinental, ANA Crowne Plaza, and partner global hotel chains |
| **Other** | Car rental, restaurant, leisure partner programs | Car rental, restaurant, leisure partner programs |

The **deepest structural difference** lies in **common-point bilateral exchange**. **JAL Mileage Bank has a particularly strong relationship with Ponta Points**, operated by Loyalty Marketing and linked with the Mitsubishi group, reinforced by JAL's status as a Ponta Points alliance member. **ANA Mileage Club has a stronger relationship with Rakuten Points and historically T-Point**, reflecting different commercial partner negotiations. Under the [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|2024 Lawson + Mitsubishi take-private]], the JAL to Ponta Points to Lawson cross-ecosystem becomes a more coherent triangle.

## Mileage redemption — seat inventory dominant

The dominant redemption mode for both programs is **award airline tickets** against carrier-controlled award-seat inventory:

| Award type | JMB pattern | AMC pattern |
|---|---|---|
| **Domestic round-trip award** | ~12,000-20,000 miles depending on season / route | ~12,000-21,000 miles depending on season / route |
| **International economy award (Asia)** | ~30,000-50,000 miles depending on season / route | ~30,000-50,000 miles depending on season / route |
| **International economy award (Trans-Pacific)** | ~50,000-80,000 miles | ~50,000-90,000 miles |
| **International business award (Trans-Pacific)** | ~80,000-150,000 miles | ~85,000-165,000 miles |
| **Upgrade award** | Available; mile cost varies | Available; mile cost varies |
| **Partner-airline award (alliance)** | oneworld partners (BA, AA, QF, CX, JL, IB, etc.) | Star Alliance partners (UA, LH, SQ, AC, NH, OZ, etc.) |
| **Non-flight redemption** | Limited (electronic money / partner products) | Limited (electronic money / partner products) |
| **Convert mile to e-money** | **JAL Pay**, conversion of miles into JAL Pay balance via ePay | **ANA Pay**, conversion of miles into ANA Pay balance |

The redemption-economics rule of thumb is **2-3¥ per mile equivalent value** for international premium-cabin redemption (typical "sweet spot" for both programs), vs **~1¥/mile** for low-season domestic economy. This is materially higher than common-point redemption value (~1¥/point), which is the economic justification for accumulating miles rather than converting to common points or cash.

The **mile → e-money conversion** route (JAL Pay, ANA Pay) provides a cash-like exit but typically at a less-favorable conversion ratio than premium-cabin award redemption — economically, it functions as a "soft floor" rather than a primary redemption target.

## Status-tier dynamics — FOP / PP and JGC / SFC

| Status tier | JMB (FOP threshold) | AMC (PP threshold) | Service tier equivalent |
|---|---|---|---|
| Top (Diamond / Premier) | JMB Diamond (~100,000 FOP) | AMC Diamond (~100,000 PP) | First-class lounge, top-priority everything |
| Premium (Sapphire) | JMB Sapphire (~50,000 FOP) | AMC Platinum (~50,000 PP) | Business-class lounge, oneworld Sapphire / Star Gold |
| Crystal / Bronze | JMB Crystal (~30,000 FOP) | AMC Bronze (~30,000 PP) | Ruby / Silver equivalent |
| Lifetime-perpetual via card | **JGC (JAL Global Club)** — card-anchored Sapphire-equivalent recognition | **SFC (Super Flyers Club)** — card-anchored Platinum-equivalent recognition | Perpetual once card-anchored |

Both programs reset annually (calendar year basis), but the **JGC / SFC perpetual-status mechanism** is the most important Japan-specific feature. The economic implication is that **JGC / SFC card-holders represent a long-tail of perpetual-loyalty members** whose deferred-mileage liability persists even when they fly less, and whose card-spend produces a steady mile-issuance flow that the airline must accrue against contract liability.

## Deferred-revenue accounting — IFRS 15 contract liability

Both JAL and ANA report under IFRS / J-GAAP-aligned standards, and treat **unredeemed mileage as contract liability (deferred revenue)** under the IFRS 15 "material right" framework:

| Event | Accounting treatment |
|---|---|
| **Customer purchases ticket that earns miles** | Allocate transaction price between the ticket-service obligation and the mileage-grant obligation, using standalone selling prices (SSPs); recognise ticket-service portion as revenue at flight completion; recognise mileage portion as contract liability |
| **Customer purchases ticket-related ancillary that earns miles** (e.g., paid seat upgrade) | Same treatment — split transaction price by SSP |
| **Customer earns miles from co-branded card spend or partner-merchant accrual** | The mile-issuer (JAL / ANA) receives cash from the card-issuer or partner for the miles purchased; recognise as contract liability at the cash-received amount |
| **Customer redeems miles for award ticket** | Release the corresponding contract liability into recognised revenue at the date of redemption (or flight, depending on the carrier's recognition policy) |
| **Mileage expires unredeemed** | Release the contract liability based on the breakage assumption (typically estimated via historical redemption-pattern statistical model); breakage is recognised in proportion to actual redemption pattern under IFRS 15 |

The **contract-liability balance** for both JAL and ANA is in the **multi-hundred-billion-yen scale** based on public IR disclosures (the exact balance varies year-to-year and is disclosed in the consolidated balance sheet's "other liabilities" / "contract liabilities" line). The breakage assumption is reviewed annually, and JAL's COVID-period and post-COVID disclosures show how pandemic-era recognition policies (mile-validity extensions, special breakage assumptions) materially affected reported revenue.

The contrast with **[[loyalty/d-point-detailed-ecosystem|d Point]]** is that NTT docomo's contract-liability disclosure combines d Point with telecom-revenue deferred amounts, while **JAL and ANA disclose mileage liability in clearly identifiable contract-liability line items** because mileage is the dominant non-flight deferred-revenue obligation for an airline. The broader framework is documented in [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]].

## Partner-network depth — beyond alliance

The **oneworld vs Star Alliance** allocation determines the cross-airline accrual / redemption surface, but both programs have built materially broader partner networks beyond their alliance:

| Partner category | JMB depth | AMC depth |
|---|---|---|
| **Alliance carriers** | oneworld (BA, AA, QF, CX, IB, MH, S7, etc.) | Star Alliance (UA, LH, SQ, AC, OZ, EVA, TG, etc.) |
| **Codeshare-only partner airlines (non-alliance)** | Emirates (codeshare), various regional | TUI, etc. |
| **Hotel** | JAL hotel chains + partner chains (Hilton, IHG, Marriott via mile conversion) | InterContinental Hotels Group, Hilton, Marriott |
| **Car rental** | Hertz, Avis, etc. | Hertz, Avis, etc. |
| **Common-point bilateral exchange** | **Ponta Points** as anchor, d Point, others | **Rakuten Points** as anchor, T-Point legacy, others |
| **Co-branded card** | [[JapanFG/jal-card|JAL Card]] (5 international brands) | ANA Card series (5 international brands via partner issuers) |
| **Department store / e-money** | JR-East ViewCard (limited), various retail | au PAY (limited), various retail |
| **Charity donation** | JMB charity programs | AMC charity programs |

## Competitive positioning

| FFP | Anchor airline | Alliance | Member scale | Anchor common-point partner | Co-branded card |
|---|---|---|---|---|---|
| **JMB** | JAL | oneworld | Tens of millions | Ponta Points | [[JapanFG/jal-card|JAL Card]] |
| **AMC** | ANA | Star Alliance | Tens of millions | Rakuten Points as anchor, historic T-Point | ANA Card |
| Skywards (Emirates) | Emirates | None (independent) | Global | None Japan | EK Emirates |
| MileagePlus (UA) | United | Star Alliance | Global | None Japan | UA partner cards |
| AAdvantage (American) | AA | oneworld | Global | None Japan | AA partner cards |
| BAEC (BA) | BA | oneworld | Global | None Japan | BA partner cards |

The structural strength of JMB and AMC relative to non-Japanese FFPs is the **Japanese common-point bilateral-exchange network**, which does not exist in foreign markets at the same scale. Ponta Points and Rakuten Points materially expand the non-flight earning footprint for Japanese-resident members.

## Related

- [[loyalty/INDEX|loyalty index]]
- [[loyalty/japan-points-landscape|Japan points landscape]]
- [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]
- [[loyalty/ponta-points-deep-dive|Ponta points deep dive]]
- [[loyalty/d-point-detailed-ecosystem|d Point detailed ecosystem]]
- [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]
- [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation|d Point / au telco-point consolidation case]]
- [[loyalty/t-point-v-point-post-2024-merger|T Point + V Point post-2024 merger detail]]
- [[loyalty/jre-point-and-jre-bank-ecosystem|JRE Point + JRE Bank ecosystem]]
- [[loyalty/au-pay-loyalty-ecosystem-deep|au PAY loyalty ecosystem deep]]
- [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|SB / Yahoo / PayPay unified points]]
- [[JapanFG/jal-card|JAL Card]]
- [[JapanFG/jal-payment-port|JAL Payment Port]]
- [[JapanFG/jr-east-financial|JR-East Financial Subsidiaries]]
- [[JapanFG/au-fh|au Financial Holdings]]
- [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|Lawson + Mitsubishi 2024 deep tie-up]]
- [[payments/japan-code-payment-operator-2025-market-share-matrix|Japan code-payment operator 2025 market share matrix]]
- [[INDEX|FinWiki index]]

## Sources

- JAL Mileage Bank official site: https://www.jal.co.jp/jp/ja/jalmile/
- JAL Mileage Bank (English): https://www.jal.co.jp/jp/en/jmb/
- ANA Mileage Club official site: https://www.ana.co.jp/ja/jp/amc/
- ANA Mileage Club (English): https://www.ana.co.jp/en/us/amc/
- JAL Card official site: https://www.jal.co.jp/jp/ja/jalcard/
- ANA Card official site: https://www.ana.co.jp/ja/jp/amc/anacard/
- JAL Investor Relations: https://www.jal.com/ja/investor/
- ANA Investor Relations: https://www.ana.co.jp/group/investors/
- oneworld alliance official site: https://www.oneworld.com/
- Star Alliance official site: https://www.staralliance.com/
