---
title: "Visa Mastercard AMEX JCB Japan operating comparison"
aliases:
  - "payments/visa-mastercard-amex-jcb-japan-operating-comparison"
  - "visa-mastercard-amex-jcb-japan-operating-comparison"
  - "Japan four-brand card scheme comparison"
  - "Visa Japan vs Mastercard Japan vs AMEX Japan vs JCB"
  - "Japan card brand operating-model matrix"
  - "Japan four-party three-party scheme split"
  - "Japan card brand JV with banks comparison"
  - "Visa Direct Mastercard Send JCB QR overlay Japan"
  - "日本国際ブランド四社比較マトリクス"
domain: payments
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [payments, card, scheme, brand, visa, mastercard, amex, jcb, matrix, Japan, four-party, three-party]
status: active
sources:
  - "https://www.visa.co.jp/"
  - "https://www.visa.co.jp/about-visa.html"
  - "https://www.visa.co.jp/visa-everywhere/japan/visa-japan.html"
  - "https://www.mastercard.co.jp/"
  - "https://www.mastercard.co.jp/ja-jp/business/about-mastercard.html"
  - "https://www.americanexpress.com/jp/"
  - "https://www.americanexpress.com/ja-jp/company/"
  - "https://www.global.jcb/ja/"
  - "https://www.global.jcb/ja/about-us/business-area/brand/"
  - "https://www.jcb.co.jp/"
  - "https://www.meti.go.jp/press/2023/06/20230601003/20230601003.html"
  - "https://www.meti.go.jp/press/2025/03/20260331006/20260331006.html"
  - "https://www.meti.go.jp/policy/mono_info_service/cashless/index.html"
  - "https://paymentsjapan.or.jp/wp-content/uploads/2023/08/roadmap2023.pdf"
  - "https://paymentsjapan.or.jp/category/publications/"
  - "https://www.j-credit.or.jp/"
  - "https://www.jftc.go.jp/houdou/pressrelease/2022/apr/220408.html"
  - "https://www.saisoncard.co.jp/company/persona/"
  - "https://www.cr.mufg.jp/corporate/"
---

# Visa Mastercard AMEX JCB Japan operating comparison

## Wiki route

This entry sits under [[payments/INDEX|payments index]] as the **four-brand cross-comparison page** that pairs with [[payments/jcb-three-party-operating-model|JCB three-party operating model]] for the JCB-specific deep dive, [[payments/japan-card-issuer-acquirer-processor-split|Japan card issuer / acquirer / processor split]] for the role-separation framework, [[payments/japan-interchange-and-merchant-fee-stack|Japan interchange and merchant fee stack]] for the fee-flow consequences, [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] for the cross-scheme economics view, and [[payments/japan-card-security-authentication-controls|Japan card security and authentication controls]] for the EMV 3-DS / J-CSC mandate landing on all four brands simultaneously. Brand anchors are [[JapanFG/visa-worldwide-japan|Visa Worldwide Japan]], [[JapanFG/mastercard-japan|Mastercard Japan]], [[JapanFG/american-express-international-japan|American Express International Japan]], and [[JapanFG/jcb|JCB Co Ltd]] / [[JapanFG/jcb-international|JCB International]]. Major issuer / acquirer counterparties referenced include [[JapanFG/mufg-nicos|MUFG NICOS]], [[JapanFG/smbc-card|SMBC Card]], [[JapanFG/credit-saison|Credit Saison]], [[JapanFG/rakuten-card|Rakuten Card]], [[JapanFG/aeon-financial-service|AEON Financial Service]], [[JapanFG/jaccs|JACCS]], [[JapanFG/orico|Orico]], [[JapanFG/epos-card|Epos Card]], and [[JapanFG/paypay-card|PayPay Card]].

## TL;DR

The four international brands operating in Japan — **Visa, Mastercard, American Express, JCB** — are commonly treated as interchangeable "credit-card brands," but they sit in **structurally different operating positions**. Visa and Mastercard run **four-party schemes** with separate licensed issuers and acquirers, principally distributed in Japan via [[JapanFG/mufg-nicos|MUFG NICOS]], [[JapanFG/smbc-card|SMBC Card]], [[JapanFG/credit-saison|Credit Saison]], [[JapanFG/rakuten-card|Rakuten Card]], [[JapanFG/aeon-financial-service|AEON Financial Service]], [[JapanFG/jaccs|JACCS]], [[JapanFG/orico|Orico]] and other licensees. American Express runs a **three-party closed-loop scheme** centered on its own Japan entity, with **Credit Saison via the Saison-AMEX Persona partnership** as the principal external issuer-partner. JCB runs a **three-party brand model with a hybrid issuer-licensing layer**, combining JCB Co Ltd's brand / acquirer / issuer roles with ~30 partner-issuer companies in Japan. The four brands also differ on legal entity, JP merchant-acceptance share (JCB and Visa lead acceptance; AMEX trails), bank-JV structure (MUFG NICOS for V/MC; AMEX-Saison Persona for AMEX), and the **2025-2026 agent-payment / push-to-card overlays** (Visa Direct, Mastercard Send, JCB-Pay overlays) where each brand's strategy diverges. This matrix puts the four side-by-side along the operating dimensions that actually determine fee economics, merchant choice, issuer relationships, and competitive position in Japan.

## Why this comparison matters

Three claims commonly muddle four-brand analysis. First, "they're all just card brands" — flattening the four-party vs three-party distinction (see [[payments/jcb-three-party-operating-model|JCB three-party operating model]]) hides the interchange-vs-no-interchange divergence that drives merchant fee economics. Second, "JCB only matters domestically" — JCB International's global acquirer-partnerships (Discover Global Network, CTBC, KB Kookmin etc.) and JCB's inbound-tourist acceptance role in Korea / Taiwan / SE Asia make JCB more globally relevant than headline acceptance footprint suggests. Third, "AMEX is just premium" — the **Credit Saison Persona JV** issuance line means AMEX has materially broader Japan issuer footprint than its closed-loop reputation implies. This matrix surfaces all three for direct read.

## Big four-brand comparison matrix

| Dimension | Visa | Mastercard | American Express | JCB |
|---|---|---|---|---|
| **Japan legal entity (primary)** | Visa Worldwide Pte Ltd (Japan branch) ([[JapanFG/visa-worldwide-japan\|Visa Worldwide Japan]]) | Mastercard Japan K.K. ([[JapanFG/mastercard-japan\|Mastercard Japan]]) | American Express International Inc. (Japan branch) ([[JapanFG/american-express-international-japan\|AMEX International Japan]]) | JCB Co Ltd ([[JapanFG/jcb\|JCB]]) + JCB International Co Ltd ([[JapanFG/jcb-international\|JCB International]]) |
| **Group parent** | Visa Inc. (NYSE: V, US-listed) | Mastercard Inc. (NYSE: MA, US-listed) | American Express Co. (NYSE: AXP, US-listed) | Private (major shareholders include MUFG, SMFG, Mizuho, Nippon Life, Tokio Marine, NTT Data and others) |
| **Scheme type** | Four-party (open) | Four-party (open) | Three-party (closed-loop core) + partner-issuer layer | Three-party (hybrid) with extensive partner-issuer ecosystem |
| **Brand role in Japan** | Pure brand / network operator; does not issue or acquire directly | Pure brand / network operator; does not issue or acquire directly | Brand + principal issuer + principal acquirer (closed-loop) | Brand + principal issuer + principal acquirer + issuer-licensor to ~30 partners |
| **Principal Japan issuers** | [[JapanFG/mufg-nicos\|MUFG NICOS]], [[JapanFG/smbc-card\|SMBC Card]], [[JapanFG/rakuten-card\|Rakuten Card]], [[JapanFG/credit-saison\|Credit Saison]], [[JapanFG/aeon-financial-service\|AEON Financial Service]], [[JapanFG/jaccs\|JACCS]], [[JapanFG/orico\|Orico]], [[JapanFG/epos-card\|Epos Card]], [[JapanFG/paypay-card\|PayPay Card]], View Card (JR East) | Same multi-issuer Japan footprint as Visa: [[JapanFG/mufg-nicos\|MUFG NICOS]], [[JapanFG/smbc-card\|SMBC Card]], [[JapanFG/rakuten-card\|Rakuten Card]], [[JapanFG/credit-saison\|Credit Saison]], [[JapanFG/aeon-financial-service\|AEON Financial Service]], [[JapanFG/jaccs\|JACCS]], [[JapanFG/orico\|Orico]] | AMEX direct (premium proprietary lineup); [[JapanFG/credit-saison\|Credit Saison]] via Persona JV; [[JapanFG/mufg-nicos\|MUFG]] for select cobrand | JCB Co Ltd direct; [[JapanFG/mufg-nicos\|MUFG NICOS]], [[JapanFG/aeon-financial-service\|AEON Financial Service]], [[JapanFG/rakuten-card\|Rakuten Card]], [[JapanFG/credit-saison\|Credit Saison]], [[JapanFG/jaccs\|JACCS]], [[JapanFG/orico\|Orico]], JR (View), Lifecard and ~25 others |
| **Principal Japan acquirers** | [[JapanFG/mufg-nicos\|MUFG NICOS]], [[JapanFG/smbc-card\|SMBC Card]], [[JapanFG/jcb\|JCB Co]] (cross-licensed acquirer), [[JapanFG/credit-saison\|Credit Saison]] line, plus PSP-routed acquiring through [[JapanFG/gmo-payment-gateway\|GMO-PG]] / [[JapanFG/sb-payment-service\|SBPS]] / [[JapanFG/dg-financial-technology\|DGFT]] | Same set: [[JapanFG/mufg-nicos\|MUFG NICOS]], [[JapanFG/smbc-card\|SMBC Card]], [[JapanFG/jcb\|JCB Co]], [[JapanFG/credit-saison\|Credit Saison]], routed through major PSPs | AMEX direct merchant acquirer (closed-loop core); some acquirer-partnership for low-end merchant breadth | JCB Co Ltd direct (principal acquirer); [[JapanFG/mufg-nicos\|MUFG NICOS]] as cooperating acquirer for 共同加盟店; partner-routed via PSPs |
| **Acceptance share (CPC / Visa-MC data, indicative)** | Largest international-brand acceptance in Japan; majority of cashless card volume ^[ambiguous] | Second-largest international brand acceptance; close to Visa at merchant location footprint | Narrower acceptance vs V/MC/JCB historically; broader since AMEX-JCB cross-acceptance + Saison Persona expansion | Strongest domestic Japan acceptance among premium brands; near-universal at large merchants; weaker at micro-merchants vs V/MC |
| **Interchange / scheme fee structure** | Brand-set published interchange rates (Japan-standard, disclosed since 2023 roadmap); explicit acquirer scheme fee | Same structure as Visa; published Japan-standard interchange since 2023 roadmap; explicit acquirer scheme fee | Closed-loop merchant discount rate set bilaterally by AMEX (no interchange split with separate issuer because issuer = acquirer in closed-loop core); partner-issued cards (Saison etc.) have internal allocation | JCB Co Ltd direct merchants: no interchange split (issuer = acquirer); partner-issued cards: interchange between JCB-acquirer and partner-issuer disclosed 2023-06 (first major Japan brand) |
| **Bank JV structure (Japan)** | [[JapanFG/mufg-nicos\|MUFG NICOS]] (MUFG-anchored, dual-brand V/MC); SMBC GMO PAYMENT JV with [[JapanFG/smbc-card\|SMBC Card]] for acquiring | [[JapanFG/mufg-nicos\|MUFG NICOS]] (dual-brand with Visa); SMBC GMO PAYMENT JV with [[JapanFG/smbc-card\|SMBC Card]] | **AMEX-Saison Persona partnership** ([[JapanFG/credit-saison\|Credit Saison]] issuer JV, dating to 2000); [[JapanFG/mufg-nicos\|MUFG]] cobrand cards | Shareholder structure spans bank-FGs (MUFG, SMFG, Mizuho); JCB Co Ltd itself functions as brand-bank-issuer hybrid; partner-issuer JVs with most major card cos |
| **Issuer-side liability for chargebacks** | Issuer bears chargeback risk; brand-arbitration tier available | Issuer bears chargeback risk; brand-arbitration tier available | AMEX direct: closed-loop internal handling; Saison-issued: Saison bears issuer chargeback risk under Persona terms | JCB direct: internal handling (issuer = acquirer); partner-issued: partner bears issuer chargeback risk |
| **EMV 3-DS / J-CSC 6.0 mandate compliance (2025-03)** | Mandatory; Visa Secure (3-DS 2.x) deployed broadly | Mandatory; Mastercard Identity Check (3-DS 2.x) deployed broadly | Mandatory; AMEX SafeKey 3-DS deployed | Mandatory; J/Secure 3-DS deployed; brand controls compliance directly through three-party rules |
| **QR / code-payment overlay** | **Visa Direct** push-to-card rails; Tap-to-Pay / NFC contactless on Visa cards | **Mastercard Send** push-to-card; Tap-to-Pay / NFC contactless on Mastercard cards | AMEX contactless / NFC standard; no major QR-overlay product | JCB Tap (contactless); JCB Pay code-payment product in select markets |
| **Agent-payment / tokenization roadmap (2025-2026)** | **Visa Agentic Commerce** / **Visa Intelligent Commerce** for agent-initiated payments; Visa Token Service network tokens | **Mastercard Agent Pay** / **Mastercard Agentic Tokens** for agent-initiated payments; Mastercard Digital Enablement Service (MDES) | AMEX agentic-pay roadmap in development; SafeKey adapts to agentic flows | JCB roadmap less publicly disclosed; J/Secure adapts to agentic flows on partner-issued portfolios |
| **Inbound-tourist acceptance (foreign issued cards in Japan)** | Largest inbound acceptance footprint among Japan merchants | Second-largest inbound acceptance footprint; near-parity with Visa | Narrower vs V/MC at small merchants; broader at hotels / premium / inbound-targeted retail | JCB cards from Korea / Taiwan / China meaningful inbound segment; JCB International acquirer-side |
| **Outbound-tourist acceptance (Japan-issued cards abroad)** | Universal global acceptance | Universal global acceptance | Global premium acceptance; weaker at micro-merchants abroad | Strong in Korea / Taiwan / Hong Kong / SE Asia; Discover-alliance gives US footprint; weaker in Europe |
| **Domestic regulatory dialogue (METI / JFTC)** | Through Japan rep office; coordinates with global HQ | Through Japan rep office; coordinates with global HQ | Through Japan rep office; coordinates with US HQ | Direct domestic engagement (HQ in Japan); responded first to 2023 fee-disclosure request |
| **Brand fee disclosed?** | Published Japan-standard interchange 2023-08 (Payments Japan roadmap) | Published Japan-standard interchange 2023-08 (Payments Japan roadmap) | Not separately disclosed (closed-loop merchant discount internal) | Issuer / acquirer split disclosed 2023-06 (first among major Japan brands) |

### Visa (Visa Worldwide Pte Ltd Japan branch)

[[JapanFG/visa-worldwide-japan|Visa Worldwide Japan]] is the principal Japan presence of Visa Inc. (NYSE: V). Operates a **pure four-party scheme**: Visa does not issue cards or acquire merchants directly in Japan — instead it licenses issuance and acquiring to Japan-domestic operators. Principal Japan issuers span the bank-FG card lines ([[JapanFG/mufg-nicos|MUFG NICOS]], [[JapanFG/smbc-card|SMBC Card]]), independent card cos ([[JapanFG/credit-saison|Credit Saison]], [[JapanFG/jaccs|JACCS]], [[JapanFG/orico|Orico]]), EC-ecosystem cards ([[JapanFG/rakuten-card|Rakuten Card]], [[JapanFG/paypay-card|PayPay Card]]), retail-anchored cards ([[JapanFG/aeon-financial-service|AEON Financial Service]], [[JapanFG/epos-card|Epos Card]]), and transit-anchored cards (View Card via JR East). Acquiring is similarly distributed across bank-FG acquirers and PSPs ([[JapanFG/gmo-payment-gateway|GMO-PG]], [[JapanFG/sb-payment-service|SBPS]], [[JapanFG/dg-financial-technology|DGFT]]).

Visa's distinctive Japan positioning: **largest international-brand acceptance footprint + universal issuer-coverage via dual-brand cards with JCB**. Most Japan-issued credit cards carry Visa or Mastercard as the international brand on a JCB-domestic base, giving Visa effective near-universal Japan issuance reach despite not issuing directly. The 2025-2026 **Visa Direct push-to-card** overlay and **Visa Agentic Commerce** / **Visa Intelligent Commerce** rollouts position Visa as the principal infrastructure for agent-initiated card payments in Japan.

### Mastercard (Mastercard Japan K.K.)

[[JapanFG/mastercard-japan|Mastercard Japan]] is the principal Japan presence of Mastercard Inc. (NYSE: MA). Structurally identical to Visa in scheme type (four-party), licensed-issuer model, and acquirer relationships. The principal Japan issuers and acquirers overlap almost completely with Visa's set — [[JapanFG/mufg-nicos|MUFG NICOS]] (dual-brand V/MC issuance), [[JapanFG/smbc-card|SMBC Card]], [[JapanFG/credit-saison|Credit Saison]], [[JapanFG/jaccs|JACCS]], [[JapanFG/orico|Orico]] and others typically issue both brands.

Mastercard's distinctive Japan positioning: **slight tilt toward premium-segment co-brand** and **2025-2026 Mastercard Send / Mastercard Agent Pay** overlays. Mastercard has historically been positioned as a strong number-two to Visa in Japan international-brand acceptance, but the gap is narrow at the merchant-acceptance footprint level. The **Mastercard Digital Enablement Service (MDES)** network-tokenization layer underpins Mastercard's agentic-commerce roadmap and is functionally parallel to Visa Token Service.

### American Express (American Express International Inc. Japan)

[[JapanFG/american-express-international-japan|AMEX International Japan]] operates the AMEX brand in Japan as a **three-party closed-loop scheme** at its core. AMEX issues its own premium cards (Platinum, Gold, Green, etc.) directly to Japanese cardholders and contracts directly with merchants for acceptance. Historically this narrow closed-loop limited Japan acceptance breadth, but two structural developments expanded AMEX footprint meaningfully:

1. **Credit Saison Persona JV** (saisoncard.co.jp/company/persona/): Credit Saison ([[JapanFG/credit-saison|Credit Saison]]) issues AMEX-brand cards in Japan under the **Persona** brand partnership, dating to 2000. This gives AMEX a Japan issuer-partnership footprint that materially exceeds its closed-loop reputation and means many "AMEX cards in Japan" are actually Saison-issued AMEX-brand cards under the Persona JV — a partner-issuer arrangement structurally similar to JCB's partner-issuer model.
2. **AMEX-JCB cross-acceptance**: AMEX cards are accepted at JCB-acquired merchants in Japan via the AMEX-JCB cross-acceptance alliance, effectively giving AMEX use of JCB's broader Japan acceptance footprint without AMEX having to acquire those merchants directly.

AMEX's distinctive Japan positioning: **closed-loop premium core + Persona partner-issuance + JCB cross-acceptance**. The result is a three-party scheme with significantly broader Japan footprint than the AMEX scheme has in many other markets. AMEX's agentic-commerce roadmap (SafeKey-adapted) is at an earlier development stage than Visa's / Mastercard's public-side disclosures.

### JCB (JCB Co Ltd + JCB International Co Ltd)

JCB operates a **three-party brand model with a hybrid issuer-licensing layer** — covered in depth in [[payments/jcb-three-party-operating-model|JCB three-party operating model]]. The corporate split between [[JapanFG/jcb|JCB Co Ltd]] (Japan-domestic brand + principal acquirer + issuer + issuer-licensor) and [[JapanFG/jcb-international|JCB International]] (international acquirer-partnerships + cross-border settlement) is foundational to JCB's operating model. The ~30 partner-issuer footprint in Japan (MUFG NICOS, AEON, Rakuten Card, Saison, JACCS, Orico, JR View, regional banks, Lifecard, etc.) gives JCB significantly larger Japan issuer reach than AMEX's Persona-anchored partner-issuance.

JCB's distinctive Japan positioning: **only domestic-Japan international brand**, premium domestic acceptance, **Discover Global Network alliance** for US acceptance, regional acquirer-partnerships in Korea / Taiwan / SE Asia. JCB was the first major Japan brand to publicly disclose its issuer / acquirer fee allocation rates (2023-06-01 METI / JFTC joint release), reflecting JCB's control of both ends of the merchant-fee split under the three-party model.

## Issuer / acquirer cross-ownership matrix

Most major Japan card issuers issue more than one brand. The cross-ownership pattern is structurally important for understanding why issuer competition in Japan is **brand-overlapping rather than brand-segmented**:

| Issuer | Issues Visa? | Issues Mastercard? | Issues AMEX? | Issues JCB? | Notes |
|---|---|---|---|---|---|
| [[JapanFG/mufg-nicos\|MUFG NICOS]] | Yes (anchor) | Yes (anchor) | Yes (cobrand select) | Yes (anchor partner) | Dual / triple-brand cards common |
| [[JapanFG/smbc-card\|SMBC Card]] | Yes (anchor) | Yes (anchor) | Yes (cobrand select) | Yes (select) | Triple-brand SMBC Olive cards |
| [[JapanFG/credit-saison\|Credit Saison]] | Yes | Yes | Yes (Persona JV) | Yes | Quad-brand issuer footprint |
| [[JapanFG/rakuten-card\|Rakuten Card]] | Yes | Yes | Yes (Rakuten Premium Card) | Yes | Quad-brand on consumer base |
| [[JapanFG/aeon-financial-service\|AEON Financial Service]] | Yes | Yes | Yes (select) | Yes (anchor partner) | AEON CARD Select multi-brand |
| [[JapanFG/jaccs\|JACCS]] | Yes | Yes | Yes (select) | Yes | Multi-brand cobrand |
| [[JapanFG/orico\|Orico]] | Yes | Yes | Yes (select) | Yes | Multi-brand cobrand |
| [[JapanFG/epos-card\|Epos Card]] | Yes (anchor) | — | — | — | Visa-monobrand cobrand |
| [[JapanFG/paypay-card\|PayPay Card]] | Yes (anchor) | Yes | — | Yes | PayPay-anchored issuer |
| View Card (JR East) | Yes | Yes | — | Yes (VIEW JCB) | JR-channel cards |

The pattern: **at the consumer-issuer level, brand choice is typically a product-line decision rather than a competitive choice between issuers**. A consumer choosing between MUFG-NICOS cards picks Visa or Mastercard or JCB as a brand variant of the same issuer, not as a choice between different issuers.

## Acceptance share at Japan merchants (indicative)

Public Cashless Promotion Council and METI data do not consistently break out per-brand acceptance share with the precision that this section ideally requires; the figures below are indicative based on public disclosures and operator-side communications. Hedge any specific share number as `^[ambiguous]` until confirmed against the most recent CPC publication.

| Brand | Acceptance breadth (Japan merchants) | Indicative share characterization | Notes |
|---|---|---|---|
| Visa | Largest international-brand footprint; near-universal at chain merchants and online | ~majority of international-brand card transaction value ^[ambiguous] | Universal at brand acceptance |
| Mastercard | Near-parity with Visa at chain merchants and online | Strong second international-brand share ^[ambiguous] | Universal at brand acceptance |
| AMEX | Narrower at micro-merchants; broader via JCB cross-acceptance | Smaller international-brand share than V/MC ^[ambiguous] | Premium-tilt acceptance |
| JCB | Largest domestic-brand footprint; strong at large merchants; universal at major retailers | Largest single-brand acceptance footprint at large-merchant level ^[ambiguous] | Domestic-leading acceptance |

Verifiable data sources: METI 2025 cashless data release (https://www.meti.go.jp/press/2025/03/20260331006/20260331006.html), Cashless Promotion Council code-payment surveys (https://paymentsjapan.or.jp/category/publications/), and Japan Credit Association (https://www.j-credit.or.jp/) industry statistics.

## QR / code-payment overlay strategy comparison

The four brands diverge meaningfully on whether and how they participate in the QR / code-payment lane that has emerged in Japan alongside card payment (covered in [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]]):

| Brand | Push-to-card / instant-payment product | Code-payment direct product | Wallet-issued card economics |
|---|---|---|---|
| Visa | **Visa Direct** (push-to-card; person-to-person, business-to-consumer, cross-border) | None direct; Visa cards consumed by PayPay / Rakuten / 各 wallets as funding source | Universal — most Japan wallets accept Visa card funding |
| Mastercard | **Mastercard Send** (functionally parallel to Visa Direct) | None direct; Mastercard cards consumed by Japan wallets as funding source | Universal — most Japan wallets accept Mastercard card funding |
| AMEX | AMEX Send (push-to-card; more limited Japan footprint) | None direct; AMEX cards consumed by Japan wallets is more limited than V/MC | Narrower — fewer Japan wallets accept AMEX card funding due to MDR economics |
| JCB | J-RPay / domestic-overlay products in select markets | Limited; JCB-brand wallets in select markets | Universal — most Japan wallets accept JCB card funding |

The structural pattern: **Visa Direct and Mastercard Send are the two principal global push-to-card rails** that Japan wallets and remittance products increasingly route over. AMEX Send is functionally similar but with narrower Japan footprint. JCB has not built a directly-competing push-to-card product at the same scale, reflecting JCB's domestic-Japan focus.

## Agent-payment overlay roadmap comparison

The 2025-2026 emergence of AI-agent-initiated commerce (covered in payments-side at [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]) creates a parallel race among the four brands to position their tokenization / authentication / authorization infrastructure as the standard rail for agentic payments:

| Brand | Agentic-pay product / framework | Tokenization layer | Authentication adaptation |
|---|---|---|---|
| Visa | **Visa Intelligent Commerce** / **Visa Agentic Commerce** | Visa Token Service (network tokens, single-use tokens) | Visa Secure (3-DS 2.x) extended with delegated-authentication for agent flows |
| Mastercard | **Mastercard Agent Pay** / **Mastercard Agentic Tokens** | Mastercard Digital Enablement Service (MDES) | Mastercard Identity Check (3-DS 2.x) extended with delegated-authentication for agent flows |
| AMEX | Agentic-pay roadmap less publicly disclosed | AMEX-internal tokenization | AMEX SafeKey 3-DS adapted for agent flows |
| JCB | Agentic-pay roadmap less publicly disclosed; partner-issuer dependency | J/Secure tokenization | J/Secure 3-DS adapted for agent flows |

Visa and Mastercard have the most advanced public-side disclosure of agentic-pay infrastructure; AMEX and JCB are at earlier roadmap-disclosure stages. Whether the Japan-domestic agentic-commerce market converges on Visa / Mastercard's global rails or develops Japan-specific overlays through the wallet-PSP layer is an open question — see [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]].

## Bank-JV and partnership structure comparison

The four brands have structurally different relationships with Japan banks and bank-FGs:

| Brand | Bank-FG anchor relationships | JV / partnership structure | Distribution channel |
|---|---|---|---|
| Visa | MUFG (via [[JapanFG/mufg-nicos\|MUFG NICOS]]), SMFG (via [[JapanFG/smbc-card\|SMBC Card]] + SMBC GMO PAYMENT JV) | License relationships; no equity JV | Bank-FG card lines + multi-brand cobrand cards |
| Mastercard | Same bank-FG anchors as Visa | License relationships; no equity JV | Bank-FG card lines + multi-brand cobrand cards |
| AMEX | **Saison Persona JV** ([[JapanFG/credit-saison\|Credit Saison]], since 2000) | Issuer-partnership JV with revenue-sharing | Persona-issued cards + AMEX direct-issued premium |
| JCB | JCB Co Ltd shareholder structure includes MUFG, SMFG, Mizuho, Nippon Life, Tokio Marine, NTT Data as significant shareholders | Brand-and-shareholder hybrid | JCB-direct + 30+ partner-issuer cards |

The **AMEX-Saison Persona** partnership and **JCB's shareholder structure** are the two most structurally distinctive bank-relationship arrangements. AMEX's reliance on Saison for broad Japan issuance under Persona effectively converts AMEX from a pure closed-loop into a hybrid scheme; JCB's bank-FG shareholding gives JCB a structural alignment with Japan's banking sector that international brands don't replicate.

## Fee disclosure and JFTC pressure landing

The 2022-04-08 JFTC credit-card merchant-fee report and the 2023-06-01 METI / JFTC joint release on JCB's fee-disclosure represent significant ongoing regulatory pressure on Japan card brand operating economics:

| Brand | Fee disclosure status (Japan, 2026-05) | JFTC engagement |
|---|---|---|
| Visa | Japan-standard interchange published 2023-08 (Payments Japan roadmap); per-acquirer split not disclosed | License relationships limit central disclosure |
| Mastercard | Japan-standard interchange published 2023-08 (Payments Japan roadmap); per-acquirer split not disclosed | License relationships limit central disclosure |
| AMEX | Closed-loop merchant discount: not separately disclosed; Persona-side allocation: internal | Closed-loop reduces JFTC scope on per-transaction interchange |
| JCB | Issuer / acquirer fee allocation split disclosed 2023-06 (first major Japan brand) | Direct engagement; first-mover on disclosure |

JCB's first-mover position on fee disclosure reflects the three-party model: JCB Co Ltd controls both ends of the fee split and can disclose unilaterally, while Visa and Mastercard must coordinate across multiple licensed acquirers (see [[payments/jcb-three-party-operating-model|JCB three-party operating model]] for the structural explanation).

## Cross-references with other matrices

- vs **[[payments/jcb-three-party-operating-model|JCB three-party operating model]]**: That entry deep-dives JCB's three-party architecture; this matrix puts JCB in cross-brand context.
- vs **[[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]]**: That entry establishes the role-separation framework; this matrix names brands and how each brand combines or separates roles.
- vs **[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]**: That matrix covers card vs code vs A2A vs prepaid at the scheme class level; this matrix decomposes the card class into its four-brand operators.
- vs **[[payments/japan-interchange-and-merchant-fee-stack|Japan interchange and merchant fee stack]]**: That entry covers interchange / scheme / acquirer fee structure; this matrix maps brand-specific fee architecture.
- vs **[[payments/japan-merchant-psp-competitive-scorecard|Japan merchant PSP competitive scorecard]]**: That matrix covers the PSP / gateway layer that sits between merchants and brands; this matrix covers the brand layer above PSPs.
- vs **[[payments/japan-jcb-issuer-ecosystem-positioning-matrix|Japan JCB issuer ecosystem positioning matrix]]**: That matrix decomposes the JCB partner-issuer set; this matrix puts the brand-comparison frame around it.

## Related

- [[payments/INDEX]]
- [[payments/jcb-three-party-operating-model]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/japan-merchant-psp-competitive-scorecard]]
- [[payments/japan-jcb-issuer-ecosystem-positioning-matrix]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/cashless-jp-landscape]]
- [[JapanFG/visa-worldwide-japan]]
- [[JapanFG/mastercard-japan]]
- [[JapanFG/american-express-international-japan]]
- [[JapanFG/jcb]]
- [[JapanFG/jcb-international]]
- [[JapanFG/mufg-nicos]]
- [[JapanFG/smbc-card]]
- [[JapanFG/credit-saison]]
- [[JapanFG/rakuten-card]]
- [[JapanFG/aeon-financial-service]]
- [[JapanFG/jaccs]]
- [[JapanFG/orico]]
- [[JapanFG/epos-card]]
- [[JapanFG/paypay-card]]
- [[INDEX|FinWiki index]]

## Sources

- Visa Japan corporate site: https://www.visa.co.jp/
- Visa Japan about page: https://www.visa.co.jp/about-visa.html
- Mastercard Japan corporate site: https://www.mastercard.co.jp/
- Mastercard Japan about page: https://www.mastercard.co.jp/ja-jp/business/about-mastercard.html
- American Express Japan: https://www.americanexpress.com/jp/
- American Express Japan corporate: https://www.americanexpress.com/ja-jp/company/
- JCB global site (Japanese): https://www.global.jcb/ja/
- JCB business area / brand: https://www.global.jcb/ja/about-us/business-area/brand/
- JCB Japan: https://www.jcb.co.jp/
- Credit Saison Persona partnership: https://www.saisoncard.co.jp/company/persona/
- MUFG NICOS corporate: https://www.cr.mufg.jp/corporate/
- METI 2023-06-01 release on JCB fee disclosure: https://www.meti.go.jp/press/2023/06/20230601003/20230601003.html
- METI 2025 cashless payment ratio release: https://www.meti.go.jp/press/2025/03/20260331006/20260331006.html
- METI cashless policy portal: https://www.meti.go.jp/policy/mono_info_service/cashless/index.html
- Payments Japan Association 2023 cashless roadmap: https://paymentsjapan.or.jp/wp-content/uploads/2023/08/roadmap2023.pdf
- Payments Japan Association publications: https://paymentsjapan.or.jp/category/publications/
- Japan Credit Association: https://www.j-credit.or.jp/
- JFTC 2022-04-08 credit-card merchant-fee report: https://www.jftc.go.jp/houdou/pressrelease/2022/apr/220408.html
