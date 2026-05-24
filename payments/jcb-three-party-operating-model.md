---
title: "JCB three-party brand operating model"
aliases:
  - "jcb-three-party-operating-model"
  - "JCB 3-party scheme Japan"
  - "JCB brand acquirer issuer model"
  - "JCB Co JCB International role split"
  - "JCB スキーム 3者方式"
domain: payments
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [payments, card, scheme, jcb, brand, acquirer, issuer-licensing]
status: active
sources:
  - "https://www.global.jcb/ja/about-us/business-area/brand/"
  - "https://www.global.jcb/ja/about-us/business-area/issuer/"
  - "https://www.global.jcb/ja/about-us/business-area/acquirer/"
  - "https://www.jcb.co.jp/merchant/regulation/"
  - "https://www.jcb.co.jp/company/about/group/index.html"
  - "https://www.meti.go.jp/press/2023/06/20230601003/20230601003.html"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html"
  - "https://www.jftc.go.jp/houdou/pressrelease/2022/apr/220408.html"
  - "https://paymentsjapan.or.jp/wp-content/uploads/2023/08/roadmap2023.pdf"
---

# JCB three-party brand operating model

## Wiki route

This entry sits under [[payments/INDEX|payments index]] as the JCB-specific operating-model page that pairs with [[payments/japan-card-issuer-acquirer-processor-split|Japan card issuer / acquirer / processor split]] for the cross-brand role map and with [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] for the four-class comparison view. JCB is the only domestic brand that consistently combines brand-network, principal acquirer, and issuer-licensing functions in one corporate group, which is why the role split is materially different from Visa / Mastercard 4-party scheme behavior — read alongside [[payments/japan-interchange-and-merchant-fee-stack|interchange and merchant fee stack]] for the fee-flow consequences and [[payments/japan-card-security-authentication-controls|card security and authentication controls]] for the J-CSC / EMV 3-DS layer. Corporate anchors are [[JapanFG/jcb|JCB Co Ltd]] and [[JapanFG/jcb-international|JCB International]]; key partner issuers include [[JapanFG/mufg-nicos|MUFG NICOS]], [[JapanFG/aeon-financial-service|AEON Financial Service]], and [[JapanFG/rakuten-card|Rakuten Card]]; brand peers are [[JapanFG/visa-worldwide-japan|Visa Worldwide Japan]], [[JapanFG/mastercard-japan|Mastercard Japan]], and [[JapanFG/american-express-international-japan|American Express International Japan]].

## TL;DR

JCB operates a **three-party brand model** in which JCB Co Ltd simultaneously owns the brand-network rules, runs principal acquirer operations, and licenses issuer rights to partner card companies. This is a structurally different operating model from the Visa / Mastercard **four-party scheme**, where the brand-network entity is separate from both issuer and acquirer and earns scheme / interchange fees from each. JCB's combined-role model means there is no economic interchange paid between JCB-as-acquirer and JCB-as-issuer on on-us transactions, the brand controls merchant-rule enforcement directly, and issuer-licensing partners (MUFG NICOS, AEON, Rakuten Card, and ~30 others) plug into JCB's network without becoming brand peers. JCB's 2023 disclosure of issuer / acquirer fee allocation rates — the first by a major Japan brand — was visible specifically because JCB controls both sides of the split.

## Three-party vs four-party scheme distinction

The distinction is about whether the brand-network entity is separate from the issuer and acquirer roles, not about how many parties touch a single transaction.

| Scheme type | Brand-network entity | Issuer entity | Acquirer entity | Examples |
|---|---|---|---|---|
| Four-party (open) | Separate | Multiple licensed issuers | Multiple licensed acquirers | Visa, Mastercard, UnionPay |
| Three-party (closed / combined) | Same group as principal issuer + acquirer | Brand entity itself + partner issuers under license | Brand entity itself (and select partners) | American Express, Diners Club, JCB (with hybrid layer) |

JCB sits in a hybrid position: it operates the **three-party scheme** as its primary architecture (brand = principal acquirer = issuer-licensor) but additionally licenses issuer rights to ~30 partner card companies, which creates a partial four-party-like layer on top of the three-party base. The 共同発行 (joint-issuer) model means a partner issues a JCB card under license without being a brand peer to JCB Co Ltd itself.

## Corporate split: JCB Co Ltd vs JCB International

JCB Co Ltd and JCB International are not interchangeable corporate identities — they handle different business surfaces under the same brand:

| Entity | Scope | Primary role |
|---|---|---|
| JCB Co Ltd (株式会社ジェーシービー) | Japan-domestic | Brand operator + principal Japan acquirer + Japan-side issuer + issuer-licensing administration for partner companies |
| JCB International Co Ltd (株式会社ジェーシービー・インターナショナル) | International (outside Japan) | International acquirer / merchant network + international issuer-licensing + cross-border settlement |

A merchant in Japan that "accepts JCB" contracts with JCB Co Ltd (or one of its acquirer-partner companies); a merchant in Singapore or Korea that "accepts JCB" contracts with JCB International (or its international acquirer-partners). A cardholder who carries a JCB card issued by [[JapanFG/mufg-nicos|MUFG NICOS]] in Japan and uses it overseas is touching JCB Co Ltd as issuer and JCB International as the international acquiring-network counterparty. This split matters for merchant-fee economics because the international acquirer-side cost structure differs from the Japan-domestic one, and for chargeback / dispute routing because cross-border disputes flow through JCB International's rules.

## Issuer ecosystem under JCB licensing

JCB Co Ltd licenses issuer rights to ~30 partner card companies in Japan that issue JCB-brand cards alongside (or instead of) their own Visa / Mastercard issuance. This is one of the principal Japan-specific features of the JCB scheme — partner issuers are not brand peers and do not have brand-network voting rights, but they do hold issuer credit risk on the cardholder relationship.

Major JCB-brand partner issuers include:

| Partner issuer | Group anchor | Product profile |
|---|---|---|
| [[JapanFG/mufg-nicos\|MUFG NICOS]] | MUFG | Co-branded MUFG / NICOS / DC JCB cards; also major acquirer |
| [[JapanFG/aeon-financial-service\|AEON Financial Service]] | AEON | AEON JCB / AEON CARD Select JCB |
| [[JapanFG/rakuten-card\|Rakuten Card]] | Rakuten | Rakuten Card (JCB option) |
| JR-related issuers | JR East, JR West, etc. | VIEW JCB, J-WEST JCB |
| Credit Saison | Saison HD | SAISON JCB cards |
| Orient Corporation (Orico) | Orico | Orico JCB cards |
| JACCS | JACCS | JACCS JCB cards |
| FFG Card, Hokkoku Credit, regional bank affiliates | Regional banks | Bank-channel JCB cards |
| Lifecard | Aiful group | Lifecard JCB |

A partner issuer pays JCB Co Ltd issuer-licensing / network fees on its issued portfolio, conducts its own cardholder credit screening under [[payments/japan-consumer-credit-operator-comparison-matrix|consumer credit operator]] obligations, books receivables on its own balance sheet, and bears chargeback / fraud loss as economic issuer. JCB Co Ltd as principal issuer carries its own direct-issued portfolio in parallel.

## Merchant-acquiring control vs four-party scheme

Because JCB combines brand and principal-acquirer functions, merchant-rule enforcement is structurally different from Visa / Mastercard 4-party schemes:

| Dimension | JCB 3-party | Visa / Mastercard 4-party |
|---|---|---|
| Merchant rule-setter | JCB Co Ltd (brand = principal acquirer) | Visa / Mastercard rule-set; each licensed acquirer enforces |
| Merchant choice of acquirer | Limited — typically JCB Co Ltd direct; some 共同加盟店 arrangement with partners (MUFG NICOS etc.) | Wide — merchant picks from multiple licensed acquirers |
| Acquirer competition | Low for direct JCB merchants | High between licensed acquirers |
| Merchant fee discipline | Negotiated bilaterally with JCB | Disciplined by acquirer-side competition |
| Brand fee | Embedded — no separate scheme fee to acquirer | Explicit — acquirer pays brand scheme fee |
| Interchange fee | None on on-us (issuer = acquirer); applies on partner-issued cards | Always applies between issuer and acquirer |

The "no interchange on on-us" feature means a JCB-direct cardholder paying a JCB-direct merchant generates a single internal accounting entry within JCB Co Ltd rather than an interchange-and-scheme-fee allocation between separate entities. For partner-issued JCB cards (cardholder has e.g. MUFG NICOS-issued JCB card paying at JCB-direct merchant), interchange does flow from JCB Co Ltd-as-acquirer to MUFG NICOS-as-issuer.

## 2023 fee-allocation disclosure

The 2023-06-01 METI / JFTC joint release on JCB's disclosure of merchant-fee allocation rates between issuer-side and acquirer-side is a direct consequence of the three-party model: because JCB Co Ltd controls both ends, it is the only Japan brand that can mechanically disclose the split without coordinating across multiple legally independent acquirer entities. Visa / Mastercard published Japan-standard interchange rates in the 2023 Payments Japan roadmap, but the issuer / acquirer fee split for individual acquirers is not centrally publishable in their four-party model. JFTC's 2022 merchant-fee report cited the lack of issuer / acquirer split transparency as one of the main competition concerns in Japan card payments, and JCB's disclosure became the early benchmark.

## Why three-party persists when four-party dominates globally

The persistence of three-party schemes (Amex, Diners, JCB) in a world where four-party (Visa, Mastercard) dominates global cashless volume is not an accident. The three-party model has structural advantages in specific use cases:

| Advantage | How it shows up |
|---|---|
| End-to-end control of cardholder + merchant relationship | Brand can position cards as premium / status products and manage merchant experience as a coordinated whole |
| No issuer / acquirer political coordination required for rule changes | New product features and fee changes can be deployed without multi-acquirer ratification |
| Direct merchant relationship at premium / strategic accounts | Brand can negotiate bilateral terms and protect strategic accounts from acquirer churn |
| Loyalty / point program runs cleanly within one entity | No issuer-side fragmentation of cardholder rewards |
| Cross-subsidization between issuer and acquirer P&L | Brand can absorb acquirer-side margin compression to support issuer-side credit / reward economics |

The structural disadvantages — limited merchant acceptance footprint relative to Visa / Mastercard, limited issuer ecosystem outside in-house issuance — are the principal reasons three-party brands are typically positioned as premium / specialized rather than universal payment networks. JCB's response to this challenge has been the **partner-issuer model** described above, which gives JCB significantly larger issuer footprint than Amex / Diners while retaining three-party control architecture.

## Domestic-brand vs international-brand dimension

JCB occupies a particular position in the Japan market that no other brand fully shares: it is **both a domestic-Japan brand and an international card brand**. Visa / Mastercard / Amex / Diners are all international brands with Japan-domestic operations; UnionPay is a foreign-domestic-PRC brand with Japan acceptance. JCB is the only brand whose **headquarters, brand identity, and primary rule-making authority sit in Japan** while also operating an international acceptance network through JCB International.

This affects several dimensions:

| Dimension | How JCB's dual-positioning matters |
|---|---|
| Inbound tourist acceptance | JCB is meaningfully better-accepted in Korea, Taiwan, Hong Kong, and parts of Southeast Asia than other Japan-issued cards, reflecting JCB International's regional acquirer build |
| Domestic regulatory dialogue | METI / JFTC engagement with JCB is direct; for international brands the dialogue runs through Japan-domestic representative offices |
| Domestic merchant fee disclosure | JCB can make domestic-Japan disclosure decisions unilaterally; international brands coordinate with global headquarters |
| Premium positioning vs universality | JCB's premium positioning in Japan and Asia rests partly on the dual-brand-and-acquirer architecture |
| Issuer co-brand partnerships | Japan-issuing partners (MUFG NICOS, AEON, Rakuten Card, etc.) often issue dual-network JCB + Visa / JCB + Mastercard cards, leveraging JCB's domestic strength and Visa / Mastercard's international universality |

## Cross-border acquiring partnerships

JCB International has historically grown international acquiring footprint through partnerships rather than building direct merchant networks in every market:

| Region | Acquiring partner model |
|---|---|
| North America | Discover Global Network (alliance — JCB cards accepted at Discover merchants and vice versa) |
| Europe | UnionPay International and bilateral acquirer partnerships |
| Asia (ex-Japan) | Direct JCB International merchant onboarding + local-acquirer partnerships (e.g. CTBC in Taiwan, KB Kookmin in Korea) |
| China | UnionPay and direct partnerships |

The Discover alliance is particularly notable because it gives JCB International effective US acceptance without JCB International having to underwrite individual US merchants. For inbound-tourist purposes (Chinese, Korean, Taiwanese visitors using JCB cards in Japan), JCB Co Ltd is the principal acquirer on the Japan side; for outbound-Japan-tourist purposes, JCB International routes the transaction through the partnership network in the destination country.

## Chargeback / dispute under three-party operating model

Cardholder disputes under JCB's three-party model flow through a structurally simpler path than four-party-scheme disputes:

| Dispute step | JCB three-party | Visa / Mastercard four-party |
|---|---|---|
| Cardholder reports dispute | To issuer (JCB Co Ltd direct or partner issuer) | To issuer |
| Issuer investigation | Issuer assesses against JCB dispute rules | Issuer assesses against brand chargeback rules |
| Acquirer notification | Direct internal route (on-us); inter-entity for partner-issued | Acquirer notified through brand network |
| Merchant notification | Through JCB-direct acquiring or partner acquirer | Through licensed acquirer |
| Resolution | Internal arbitration within JCB rules for on-us; partner-cooperation for partner-issued | Brand-arbitration tier escalation available |

The simpler path is a structural advantage in resolution speed for on-us cases, but the absence of independent brand arbitration is a constraint when cardholder and issuer-internal acquirer have conflicting interpretations of disputed transactions. In practice, JCB has built its own dispute-handling infrastructure that approximates the brand-arbitration tier within an internal governance structure.

## Counterpoints

- "JCB is just another card brand." JCB's three-party operating model means JCB-card economics, merchant relationships, and fee disclosure work fundamentally differently from Visa / Mastercard in Japan. Treating it as interchangeable misses the role-combination.
- "JCB partner issuers are equivalent to Visa-licensed issuers." Partner issuers under JCB license carry issuer credit risk but do not have brand-network rule-setting rights and pay JCB Co Ltd network fees that differ from Visa / Mastercard scheme fees.
- "JCB International is the same as JCB Co Ltd overseas." The two are separate legal entities with different acquirer footprints, merchant-contract counterparties, and dispute-routing rules.
- "Three-party schemes are obsolete." American Express, Diners Club, and JCB all operate three-party models successfully in 2026; the model has different cost economics rather than being structurally inferior.

## Research checklist for JCB-touched transactions

When analyzing a Japan card transaction or merchant relationship that involves JCB acceptance, the role-combination requires distinguishing several layers before drawing conclusions about fee economics, dispute liability, or competitive positioning:

1. Is the issuer JCB Co Ltd direct, or a partner issuer ([[JapanFG/mufg-nicos|MUFG NICOS]], [[JapanFG/aeon-financial-service|AEON Financial Service]], [[JapanFG/rakuten-card|Rakuten Card]], etc.)?
2. Is the acquirer JCB Co Ltd direct, or a partner-acquirer cooperating with JCB?
3. Is the transaction on-us (same issuer / acquirer / brand) or off-us (different issuer and acquirer)?
4. Is the merchant relationship under JCB Co Ltd contract or under a partner-acquirer contract?
5. Is the transaction domestic (handled by JCB Co Ltd) or international (handled by JCB International + foreign acquirer-partner)?
6. Does the product include installment / revolving / BNPL features that trigger [[payments/japan-bnpl-credit-purchase-boundary|BNPL / credit-purchase boundary]] questions separately from the brand-network treatment?

The answers determine fee economics, chargeback flow, regulatory disclosure, and dispute resolution path — none of which can be inferred from the JCB brand mark alone.

## Open questions

- Will JFTC merchant-fee disclosure pressure push Visa / Mastercard licensed acquirers in Japan to disclose individual issuer / acquirer fee allocations comparable to JCB's 2023 disclosure?
- How will the Discover Global Network alliance evolve given Capital One's 2024 announcement to acquire Discover and Capital One's existing relationships with Visa / Mastercard?
- Will JCB Co Ltd extend co-acquirer arrangements with partner-issuer companies beyond MUFG NICOS to dilute the single-acquirer concentration?
- How does JCB's three-party model affect EMV 3-DS / J-CSC enforcement timelines compared to brands that must coordinate across multiple acquirers?
- Will partner-issued JCB cards continue to use JCB as a co-brand (alongside Visa / Mastercard) or migrate toward single-brand JCB issuance for groups with strong JCB economics?

## Related

- [[payments/INDEX]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/japan-consumer-credit-operator-comparison-matrix]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[JapanFG/jcb]]
- [[JapanFG/jcb-international]]
- [[JapanFG/mufg-nicos]]
- [[JapanFG/aeon-financial-service]]
- [[JapanFG/rakuten-card]]
- [[JapanFG/visa-worldwide-japan]]
- [[JapanFG/mastercard-japan]]
- [[JapanFG/american-express-international-japan]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## Sources

- JCB Co Ltd: brand, issuer, acquirer business-area public pages.
- JCB Co Ltd: merchant rules public page.
- JCB Co Ltd: corporate group structure page.
- METI / JFTC: 2023-06-01 joint release on JCB merchant-fee allocation-rate disclosure.
- METI: Installment Sales Act registration list (115条) — JCB Co Ltd, JCB International, and partner issuers.
- JFTC: 2022 credit-card merchant-fee report.
- Payments Japan Association: 2023 cashless roadmap (interchange disclosure section).
