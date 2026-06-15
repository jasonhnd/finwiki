---
source: structured-finance/japan-securitization-product-matrix
source_hash: ff2e0b2bf28d5bb3
lang: en
status: machine
fidelity: ok
title: "Japan securitization product matrix"
translated_at: 2026-06-15T04:09:41.193Z
---

# Japan securitization product matrix

## TL;DR

This matrix compares the **major ABS-class securitization products** issued in Japan across a single set of dimensions: typical issuer / sponsor, originator asset pool, SPV vehicle choice (TMK / GK-TK / TK only / trust beneficial interest / none), typical AAA-tranche rating, rating-agency split (JCR / R&I / S&P / Moody's), tranche structure depth, typical annual issuance volume, governing regulatory regime (Banking Act / FIEA / Asset Securitization Act / specialty acts), and distributor channel (megabank securities arms / regional dealer firms / foreign investment banks / direct private placement).

Thirteen product classes are compared: **JHF MBS** (agency RMBS), **private RMBS** (megabank-originated jumbo deals), **CMBS** (single-borrower and conduit variants), **auto-loan ABS**, **consumer-loan ABS**, **credit-card receivable ABS**, **lease receivable ABS**, **CLO** (Japanese banks as investors in US/EU BSL CLO), **NPL securitization**, **project-finance SPV** (renewable energy), **aircraft-finance / ship-finance ABS**, **covered bond** (UCITS-compliant programs by MUFG / SMBC), and **synthetic securitization** (CLN / CDS for bank RWA relief).

These products differ by **how the originator transfers risk** (true sale vs synthetic, on-balance-sheet vs off-balance-sheet), **which legal vehicle holds the assets** (TMK under the Asset Securitization Act vs GK-TK under general corporate law vs trust beneficial interest under trust law vs no vehicle for covered bonds), **how the senior tranche is rated** (high investment-grade typical, but with notable differences in agency choice and tranche depth), and **who buys and distributes the paper** (megabank securities subsidiaries dominate domestic distribution; foreign investment banks dominate cross-border structures). Use this matrix as the single-table reference for the structured-finance domain — see [[structured-finance/japan-abs-market-overview|Japan ABS market overview]] for the market-shape narrative.

## Wiki route

This entry sits under [[structured-finance/INDEX|structured-finance index]] as the **single-table product-class master matrix** complementing the narrative overview in [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]. For per-product deep dives use: [[structured-finance/jhf-mbs-mechanics|JHF MBS mechanics]], [[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]], [[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]], [[structured-finance/auto-loan-abs-japan-toyota-honda|auto-loan ABS Japan]], [[structured-finance/consumer-loan-abs-japan-card-issuer|consumer-loan ABS Japan]], [[structured-finance/japan-clo-issuance-japanese-banks|Japanese banks as CLO investors]], [[structured-finance/npl-securitization-japan|NPL securitization Japan]], [[structured-finance/project-finance-spv-japan-renewable|project finance SPV Japan (renewable)]], [[structured-finance/aircraft-leasing-financing-japan-shosha|aircraft leasing financing Japan]], [[structured-finance/ship-financing-japan-megabank|ship financing Japan megabank]], [[structured-finance/japan-covered-bond-mufg-smbc|Japan covered bond MUFG SMBC]], [[structured-finance/synthetic-securitization-japan-bank-rwa-relief|synthetic securitization Japan bank RWA relief]], [[structured-finance/repackaging-note-japan|repackaging note Japan]].

For SPV-vehicle choice and tax treatment: [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK vehicle choice]], [[structured-finance/tmk-special-purpose-company-mechanics|TMK special-purpose-company mechanics]], [[structured-finance/japan-trust-beneficial-interest-vs-spv|Japan trust beneficial interest vs SPV]]. For rating-agency methodology: [[structured-finance/credit-rating-methodology-jcr-r-and-i|credit rating methodology JCR and R&I]], [[structured-finance/fitch-moody-sp-japan-criteria|Fitch / Moody's / S&P Japan criteria]]. For spread / pricing context: [[structured-finance/jhf-mbs-vs-private-rmbs-spread|JHF MBS vs private RMBS spread]]. System anchor: [[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency]] for the JHF program.

## 1. The product matrix — single-table master

| Product class | Typical issuer / sponsor | Originator pool | Vehicle | AAA-tranche typical | Rating-agency typical split | Tranche depth | Annual issuance (approx) | Regulatory home | Distributor |
|---|---|---|---|---|---|---|---|---|---|
| **JHF MBS (agency RMBS)** | [[policy-finance/japan-housing-finance-agency\|JHF (Japan Housing Finance Agency)]] | Flat-35 long-term fixed-rate residential mortgages purchased from originator banks | JHF trust scheme (statutory trust, JHF as trustee/issuer) | AAA-equivalent (government-supported senior class) | JCR / R&I (domestic); some Moody's / S&P coverage | Single senior class structure (no multi-tranche credit waterfall in the conventional sense; senior class is government-supported) | Several JPY trillion per year (largest yen-denominated structured paper class) | JHF Act (statutory) + FIEA disclosure | Megabank securities subsidiaries ([[securities-firms/mufg-securities\|MUFG MS]], [[securities-firms/smbc-nikko\|SMBC Nikko]], [[securities-firms/mizuho-securities\|Mizuho Securities]]) + life insurers / regional banks as buyers |
| **Private RMBS** | Megabanks ([[megabanks/mufg\|MUFG]], [[megabanks/smfg\|SMFG]], [[megabanks/mizuho-fg\|Mizuho FG]]), some trust banks ([[trust-banks/sumitomo-mitsui-trust\|SMTB]]) | Megabank-originated jumbo residential mortgages (Flat-35 alternatives, variable-rate, fixed-period mortgages) | Trust beneficial interest (信託受益権) primarily; occasionally GK-TK | AAA (with credit enhancement) | JCR / R&I (domestic); occasional S&P / Moody's for cross-border tranches | Senior / mezzanine / equity (typically 3-4 classes) | Modest — occasional public deals; mostly private placement | FIEA + trust law | Megabank securities arms; private placement to domestic institutional buyers |
| **CMBS — single-borrower** | Real-estate sponsors (Mitsui Fudosan, Mitsubishi Estate, Mori Trust, foreign sponsors); megabanks as arrangers | Single-asset or small-pool commercial real estate (office, logistics, hotel, retail) — one sponsor's specific portfolio | TMK (preferred for listed bonds) or GK-TK | AAA (with subordination); deal-specific | JCR / R&I; some S&P / Moody's coverage for cross-border deals | Senior / mezzanine / subordinated / equity (multi-class typical) | Small post-2008; reviving in 2020s (logistics-warehouse, office single-borrower) | Asset Securitization Act (for TMK) + FIEA | Megabank securities arms + foreign investment banks (Goldman, Morgan Stanley) |
| **CMBS — conduit** | Megabank-arranged pool of multiple unrelated CRE loans | Multiple uncorrelated commercial-mortgage loans across borrowers | TMK or GK-TK | AAA (with subordination); pool-diversification credit | JCR / R&I; some S&P / Moody's coverage | Senior / mezzanine / subordinated / equity (multi-class typical) | Very small — conduit structures have been rare in Japan since the post-2008 dislocation | Asset Securitization Act + FIEA | Megabank securities arms |
| **Auto-loan ABS** | Captive finance subsidiaries: [[card-issuers/toyota-finance\|Toyota Finance]], [[leasing-firms/toyota-financial\|Toyota Financial]] (cross-border), Honda Finance, Nissan Credit; bank-affiliated: Mitsubishi UFJ Capital Auto Loan ABS, SMBC Auto Service | Granular pools of consumer auto loans (tens of thousands of loans) | GK-TK | AAA (with subordination) | JCR / R&I; Toyota Financial cross-border deals use S&P / Moody's | Senior / mezzanine / equity (3 classes typical) | Repeat issuance from captives; cumulative annual issuance moderate JPY-trillion scale | FIEA + Installment Sales Act | Megabank securities arms; captive's own dealer network |
| **Consumer-loan ABS** | Consumer-finance companies: [[consumer-finance/acom\|Acom]], [[consumer-finance/aiful\|Aiful]], [[card-issuers/orico\|Orico]], [[card-issuers/jaccs\|JACCS]], [[card-issuers/aplus\|Aplus]] | Granular pools of unsecured consumer installment loans, shopping credit | GK-TK | AAA (with deep subordination given pool risk) | JCR / R&I (domestic dominant) | Senior / mezzanine / subordinated / equity (3-4 classes; deeper subordination than auto-ABS) | Modest; consumer-finance deleveraging post-Moneylending Business Act reform reduced issuance | Moneylending Business Act + FIEA + Installment Sales Act | Megabank securities arms |
| **Credit-card receivable ABS** | Card issuers: [[card-issuers/jcb\|JCB]], [[card-issuers/credit-saison\|Credit Saison]], [[card-issuers/mufg-nicos\|MUFG NICOS]], [[card-issuers/aeon-financial-service\|AEON Financial Service]], [[card-issuers/jaccs\|JACCS]] | Revolving credit-card receivables (shopping + revolving + cash advance) | GK-TK with revolving-pool structure | AAA (with subordination) | JCR / R&I (domestic) | Senior / mezzanine / equity; revolving-pool with controlled-amortization | Modest; smaller than auto-ABS | FIEA + Installment Sales Act | Megabank securities arms |
| **Lease-receivable ABS** | Leasing companies: [[leasing-firms/mitsubishi-hc-capital\|Mitsubishi HC Capital]], [[leasing-firms/fuyo-lease\|Fuyo Lease]], Tokyo Century, Sumitomo Mitsui Finance & Leasing, Orix | Equipment-lease and finance-lease receivables (industrial, IT, vehicle fleet); residual-value-exposed pools require additional structuring | GK-TK | AAA (with subordination; residual-value-exposed deals may have shallower senior class) | JCR / R&I (domestic dominant) | Senior / mezzanine / equity (3 classes typical); residual-value tranche separate when applicable | Modest; one of the smaller ABS sub-segments | FIEA | Megabank securities arms; leasing company's bank-group dealer |
| **CLO (Japanese banks as investors)** | Originators: US / EU broadly-syndicated-loan CLO managers (Carlyle, KKR, GSO, CIFC, Ares, etc.) — Japan is not a domestic CLO origination market | Underlying: US / EU broadly-syndicated leveraged loans | Cayman / Irish SPV (cross-border vehicle); not Japan-domiciled | AAA (US / EU CLO AAA tranches) | S&P / Moody's / Fitch (US/EU agencies) — JCR / R&I do not rate cross-border CLO typically | Senior AAA / AA / A / BBB / BB / equity (deep multi-tranche US / EU CLO structure) | JPY-equivalent investment by Japanese banks — [[cooperative-banks/norinchukin\|Norinchukin]], [[regional-banks/japan-post-bank\|Japan Post Bank]], regional banks; reflects investor demand, not Japan issuance | US CFTC / SEC / Dodd-Frank retention rules + BIS Basel framework | Foreign investment banks (Goldman, Morgan Stanley, JPM, Citi, BNP, etc.) sell to Japanese institutional buyers |
| **NPL securitization** | Megabank NPL transfers; servicers (Servicer companies, debt-collection firms, foreign distressed-debt buyers) | Defaulted / sub-performing loans purchased from originating banks | TMK or GK-TK | AAA possible only with deep subordination and external credit support; mezzanine / equity classes more typical | JCR / R&I; some S&P / Moody's for cross-border deals | Senior / mezzanine / equity with very deep subordination | Cyclical; spikes during NPL workouts (post-1997 banking crisis, post-2008 GFC) | Asset Securitization Act + FIEA + Servicer Act | Foreign distressed-debt buyers; megabank securities arms; private placement |
| **Project-finance SPV (renewable energy)** | Renewable-energy operators (Renova, Eurus Energy, foreign sponsors); megabanks and life insurers as lenders; [[policy-finance/dbj\|DBJ]] / JBIC as policy lenders | Renewable-energy project cash flows (solar PV under Feed-in-Tariff regime, onshore / offshore wind, biomass, geothermal) | GK-TK (most common); occasionally TMK | Project-finance loans typically not rated public AAA; rated where bonds are publicly issued | JCR / R&I where rated; megabank internal ratings | Senior project loan + subordinated; bond issuance occasionally tranched | Growing; FIT-driven solar boom 2012-2017, now off-shore wind and post-FIT corporate-PPA deals | FIEA + Electricity Business Act + Renewable Energy Special Measures Act | Megabank syndicated-loan desks; bond issuance through megabank securities arms |
| **Aircraft / ship-finance ABS** | Sogo shosha leasing arms ([[financial-conglomerates/mitsubishi-corp\|Mitsubishi Corp]], [[financial-conglomerates/sumitomo-corp\|Sumitomo Corp]], [[financial-conglomerates/mitsui-co\|Mitsui & Co]], Marubeni, Itochu); JOL / JOLCO sponsors; foreign lessors (AerCap, Avolon, etc.); megabank ship-finance desks | Aircraft operating-lease portfolios; ship mortgages / charter receivables | Cayman / Irish SPV (cross-border); occasionally GK-TK for Japan-domiciled JOLCO | Aircraft ABS: AAA possible with collateral diversification; ship ABS: typically rated lower given cyclical sector | S&P / Moody's / Fitch for cross-border deals; JCR / R&I rarely | Senior / mezzanine / equity for cross-border ABS; JOL / JOLCO are private tax-leveraged structures rather than rated ABS | Cross-border issuance, not Japan-domestic; JOL / JOLCO are tax-driven Japan investor products | FIEA (Japan investor side) + foreign-jurisdiction issuance regime | Foreign investment banks (cross-border); megabank securities arms + sogo shosha leasing arms (JOLCO distribution) |
| **Covered bond (UCITS-compliant)** | [[megabanks/mufg\|MUFG]] (MUFG Bank covered bond program), [[megabanks/smfg\|SMFG]] (SMBC covered bond program) | Cover pool of residential mortgages held on-balance-sheet (dual-recourse structure); no true sale | None — cover pool stays on issuer's balance sheet with statutory or contractual ring-fence | AAA (covered-bond rating uplift over issuer rating) | S&P / Moody's / Fitch (foreign-currency UCITS deals require foreign agency rating) | Single tranche per series (covered bonds are not tranched in the ABS sense; the cover pool provides recourse) | Modest; episodic EUR / USD issuance | UCITS (European) framework + Japan Banking Act (issuer-side regulation) | Foreign investment banks for EUR / USD distribution to European / global institutional investors |
| **Synthetic securitization** | Megabanks ([[megabanks/mufg\|MUFG]], [[megabanks/smfg\|SMFG]], [[megabanks/mizuho-fg\|Mizuho FG]]); originator retains underlying loans on-balance-sheet but transfers credit risk via CDS / CLN | Reference loan portfolios (typically large-corporate, SME, sometimes specialty pools); no asset transfer | No SPV asset-transfer; CDS / CLN structure with reference pool definition; CLN issuance via SPV (often Cayman) | AAA where applicable (typically senior reference tranche held; junior CLN sold) | JCR / R&I where Japan-domiciled CLN; S&P / Moody's for cross-border CLN | Senior reference / mezzanine reference (CLN sold) / junior reference (sometimes retained) | Episodic; capital-relief-driven; growing in 2020s as megabanks optimize Basel III RWA | FSA capital-adequacy framework + Basel III securitization framework (RWA treatment) + FIEA (CLN side) | Foreign investment banks (cross-border CLN distribution); megabank securities arms (Japan-domiciled CLN) |

**Caveats on the matrix**: Issuance volumes are approximate orders-of-magnitude described qualitatively (large / modest / small / cyclical) rather than precise JPY-trillion numbers. AAA-tranche labels reflect typical senior-class outcomes; actual ratings vary deal-by-deal and over time. Rating-agency splits reflect typical observed coverage patterns from public rating-action disclosures; some deals have additional agency coverage not captured here. Vehicle assignments reflect typical structure; some deals use multi-layer vehicle stacks (e.g., trust beneficial interest fed into a GK-TK; TMK with a beneficial interest layer). Distributor identification reflects the typical bookrunner / arranger profile; secondary distribution can be broader.

## 2. Vehicle-choice matrix — which SPV is used

| Vehicle | Typical product classes | Why chosen |
|---|---|---|
| **TMK** (Tokutei Mokuteki Kaisha, specified-purpose company under Asset Securitization Act) | CMBS (single-borrower preferred), some NPL securitization, project-finance bonds | Statutory tax-pass-through; regulated under Asset Securitization Act; preferred for listed-bond issuance; clearer disclosure regime |
| **GK-TK** (godo kaisha + tokumei kumiai silent partnership overlay) | Most ABS — auto, consumer, card, lease, project-finance, single-borrower CMBS variants, NPL | Standard private-placement structure; tax-pass-through via TK silent partnership; flexible; off-balance-sheet criteria typically met |
| **Trust beneficial interest (信託受益権)** | Private RMBS (primary), some auto / consumer ABS as upstream layer | Trust law provides separate-property treatment; trust bank as trustee; clean true-sale separation from originator |
| **None (on-balance-sheet cover pool)** | Covered bonds | Cover-pool structure relies on statutory or contractual ring-fence around residential mortgages held on-balance-sheet; no true sale to SPV |
| **Cayman / Irish SPV (cross-border)** | CLO (Japanese investors in US/EU CLO), aircraft / ship-finance ABS, cross-border CLN | Foreign-domiciled SPV used for non-Japan-domiciled asset pools; subject to issuer-jurisdiction regulation |
| **JHF trust scheme (statutory)** | JHF MBS | Statutory issuer / trustee scheme under JHF Act |

See [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK vehicle choice]], [[structured-finance/tmk-special-purpose-company-mechanics|TMK mechanics]], and [[structured-finance/japan-trust-beneficial-interest-vs-spv|trust beneficial interest vs SPV]] for the detailed legal-vehicle comparison.

## 3. Rating-agency split matrix

| Rating-agency cluster | Product coverage | Why |
|---|---|---|
| **JCR + R&I (domestic-dominant)** | JHF MBS, private RMBS, domestic auto-ABS, consumer-ABS, card-ABS, lease-ABS, domestic NPL securitization, domestic project-finance bonds, Japan-domiciled CLN | Domestic credit-rating agencies focused on yen-denominated structured paper sold to Japanese institutional investors; FSA-registered for Japanese credit-rating purposes |
| **JCR + R&I + selective S&P / Moody's** | Some single-borrower CMBS, cross-border NPL securitization, large repeat captive-finance auto-ABS (Toyota Financial cross-border) | Cross-border investors require an internationally-recognized agency rating in addition to domestic agency rating |
| **S&P / Moody's / Fitch (foreign-agency-dominant)** | Cross-border CLO investments by Japanese banks, aircraft / ship-finance ABS (cross-border), covered bonds (UCITS), cross-border CLN | Underlying issuer or vehicle is foreign-domiciled; investors require foreign-agency rating consistent with issuance jurisdiction |

The **JCR / R&I split** is a notable Japan-specific feature. Both are FSA-registered domestic credit-rating agencies; both rate the bulk of domestic structured paper; specific agency selection on individual deals reflects originator preference and dealer practice. See [[structured-finance/credit-rating-methodology-jcr-r-and-i|credit rating methodology JCR and R&I]] and [[structured-finance/fitch-moody-sp-japan-criteria|Fitch / Moody's / S&P Japan criteria]] for methodology depth.

## 4. Distributor channel matrix

| Distributor channel | Product coverage |
|---|---|
| **Megabank securities subsidiaries** ([[securities-firms/mufg-securities\|MUFG MS]], [[securities-firms/smbc-nikko\|SMBC Nikko]], [[securities-firms/mizuho-securities\|Mizuho Securities]]) | JHF MBS, private RMBS, CMBS, auto-ABS, consumer-ABS, card-ABS, lease-ABS, project-finance bonds, Japan-domiciled CLN, repackaging notes (institutional) |
| **Foreign investment banks** (Goldman, Morgan Stanley, JPM, Citi, BNP Paribas, Barclays, others) | Cross-border CLO sold to Japanese banks, aircraft / ship-finance ABS, covered bonds (EUR / USD), cross-border synthetic securitization CLN, single-borrower CMBS with foreign sponsor, NPL securitization with foreign distressed-debt buyer |
| **Retail securities firms** ([[securities-firms/nomura-securities\|Nomura]], [[securities-firms/daiwa-securities\|Daiwa]], regional securities firms) | Retail repackaging notes; some retail-distributed structured products |
| **Megabank syndicated-loan desks** | Project-finance SPV (renewable energy) loans, infrastructure-finance SPV loans (not bonds) |
| **Sogo shosha leasing arms + megabank securities** | Aircraft / ship-finance JOL / JOLCO distribution to Japanese investors (lessor-side); cross-border ABS bond distribution to global investors (debt-side) |

See [[structured-finance/repackaging-note-japan|repackaging note Japan]] for the dealer-franchise split between megabank securities subsidiaries and foreign investment banks on structured products generally.

## 5. Regulatory-home matrix

| Regulatory regime | Product coverage |
|---|---|
| **Asset Securitization Act + FIEA** | TMK-based deals: most single-borrower CMBS, some NPL securitization, project-finance bonds with TMK |
| **FIEA (general securities regulation) + trust law / corporate law** | GK-TK and trust-beneficial-interest deals: most auto-ABS, consumer-ABS, card-ABS, lease-ABS, private RMBS, conduit CMBS, project-finance bonds with GK-TK |
| **JHF Act (statutory)** | JHF MBS — the agency RMBS program with its own statutory framework |
| **Banking Act + Basel III + FSA capital-adequacy framework** | Synthetic securitization (RWA relief is the explicit driver; structure is regulated through bank-capital framework rather than securities-issuance framework alone) |
| **UCITS (European) + Banking Act (issuer side)** | Covered bonds: EUR / USD issuance under European covered-bond framework; issuer is regulated under Japan Banking Act |
| **Installment Sales Act + Moneylending Business Act** (in addition to FIEA) | Consumer-loan ABS, auto-loan ABS, card-receivable ABS — originator-side regulation of the underlying consumer-credit business |
| **Electricity Business Act + Renewable Energy Special Measures Act** (in addition to FIEA) | Project-finance SPV for renewable energy — the underlying project activity has its own regulatory regime |
| **Servicer Act** (in addition to FIEA) | NPL securitization — the servicer / debt-collection function has its own regulatory regime under the Servicer Act |
| **Foreign-jurisdiction issuance regime (US / EU / Cayman / Ireland)** | Cross-border CLO investments, aircraft / ship-finance ABS, cross-border CLN — vehicle is foreign-domiciled and subject to issuer-jurisdiction regime |

## 6. Risk-transfer-type matrix

A useful re-cut of the matrix is by **how risk moves from originator to investor**:

| Risk-transfer type | Product coverage | Notes |
|---|---|---|
| **True sale with full credit transfer** | JHF MBS, private RMBS, CMBS, auto-ABS, consumer-ABS, card-ABS, lease-ABS, NPL securitization, cross-border ABS | Assets move to SPV; originator's credit exposure removed (subject to retained-tranche and warranty exceptions). Standard ABS pattern. |
| **True sale with retained credit support** | Most domestic ABS classes retain originator-held subordinated tranche / equity for credit-support and skin-in-the-game compliance | Originator retains residual credit-loss exposure even after true sale; pattern reflects regulatory retention rules and rating-agency expectations. |
| **No transfer, dual-recourse structure** | Covered bonds (UCITS-compliant) | Cover pool stays on issuer's balance sheet; investor recourse to both issuer and ring-fenced cover pool. Funding-driven structure, not balance-sheet-relief structure. |
| **No transfer, synthetic credit transfer** | Synthetic securitization (CLN / CDS structures) | Underlying loans stay on originator's balance sheet; credit risk transferred via derivative reference structure. Capital-relief-driven, not funding-driven. |
| **Wrapping / restructuring of an underlying** | Repackaging notes | SPV purchases an existing bond / loan, applies derivative overlays, reissues notes with different currency / coupon / structure. Investor-product driven, not originator-driven. |

The risk-transfer-type cut is what most directly maps onto **why** an originator or issuer chooses each product class:
- Funding access drives true-sale ABS and covered bonds.
- Capital relief drives synthetic securitization.
- Investor product / yield-engineering drives repackaging notes.
- Specialty asset disposition drives NPL securitization.

### Investor-side appetite matrix

Pairing the issuer-side framing with **typical investor base** for each product class shows which Japan-domestic institutional pools absorb which securitization output:

| Investor cluster | Typical product holdings |
|---|---|
| Domestic life insurers ([[life-insurers/nippon-life\|Nippon Life]], [[life-insurers/dai-ichi-life\|Dai-ichi Life]], Meiji Yasuda Life, Sumitomo Life, others) | JHF MBS senior class, private RMBS senior class, project-finance bonds, covered bonds, occasional CMBS senior |
| Domestic regional banks (regional / second-tier banks) | JHF MBS, auto-ABS, consumer-ABS, card-ABS, lease-ABS, some private RMBS |
| Domestic pension funds (GPIF and corporate / public pension funds) | JHF MBS, private RMBS senior class, project-finance bonds; limited direct ABS exposure |
| Norinchukin Bank, Japan Post Bank | Cross-border CLO (AAA tranches), JHF MBS, repackaging notes |
| Domestic asset managers (Nomura AM, Daiwa AM, Asset Management One, etc.) | Diversified across ABS classes per fund mandate |
| Foreign institutional investors | Selective cross-border CMBS, aircraft-finance ABS, ship-finance ABS, covered bonds (EUR / USD), CLN |
| BoJ (legacy ETF / J-REIT program — no direct ABS program) | Not direct ABS holders |

This investor-cluster mapping explains why JHF MBS dominates by volume — it is the most-broadly-held domestic ABS class, with takedown across life insurers, regional banks, and pension funds.

## 7. Tranche-depth matrix

| Tranche depth | Product coverage |
|---|---|
| **Single-class (no waterfall)** | JHF MBS (government-supported senior class structure); covered bonds (single tranche per series; covered bonds are not waterfall-tranched in the ABS sense) |
| **3-class (senior / mezzanine / equity)** | Auto-loan ABS, lease-receivable ABS, card-receivable ABS (typical Japan-domestic structure) |
| **4-class (senior / mezzanine / subordinated / equity)** | Private RMBS, consumer-loan ABS (deeper subordination due to higher pool credit risk), some CMBS |
| **Deep multi-tranche (5+ classes)** | US / EU CLO held by Japanese banks (deep AAA / AA / A / BBB / BB / equity structure typical of US BSL CLO market); some single-borrower CMBS with complex sponsor structures |
| **Synthetic-credit tranching (reference-pool classes, not asset-transfer tranches)** | Synthetic securitization — senior / mezzanine / junior reference tranches; CLN typically issued on mezzanine class |

## 8. Issuance-volume rank summary

The qualitative volume bands in the master matrix translate to roughly the following relative rank ordering (representative; live data shifts year-to-year):

| Rank cluster | Product classes |
|---|---|
| Very large (multi-JPY-trillion annual issuance) | JHF MBS — dominant single class; the largest yen-denominated structured-paper issuer by a wide margin |
| Large (JPY-trillion-scale cumulative annual issuance) | Auto-loan ABS (cumulative from Toyota Finance, Honda Finance, Nissan Credit, bank-affiliated auto-finance companies); cross-border CLO holdings by Japanese banks (in JPY-equivalent terms, not Japan issuance) |
| Modest (hundreds-of-billions JPY annual issuance) | Private RMBS, lease-receivable ABS, card-receivable ABS, project-finance bonds (sector-cyclical) |
| Small (tens-of-billions JPY or episodic) | CMBS (reviving from very small post-2008 base), NPL securitization (cyclical), synthetic securitization (capital-relief-driven, episodic), covered bonds (episodic EUR / USD issuance) |
| Niche / cross-border-only | Aircraft / ship-finance ABS (cross-border issuance to global investors; JOL / JOLCO distribution to Japanese investors operates on a different mechanic) |

Note that **cross-border CLO holdings by Japanese banks** is a JPY-equivalent figure for buy-side investor holdings; this is not Japan-domestic issuance. Counting it on the same scale as JHF MBS or auto-ABS issuance is technically apples-to-oranges, but it reflects how much Japanese institutional capital is deployed into structured-credit products — and at certain points in the cycle (2018-2019 in particular) Japanese-bank CLO purchases represented a meaningful share of US BSL CLO AAA tranche absorption.

## 9. Pricing-and-yield-spread context

The pricing of these products relative to risk-free rates and to peer-product spreads is itself a thick topic that deserves a separate page (see [[structured-finance/jhf-mbs-vs-private-rmbs-spread|JHF MBS vs private RMBS spread]]). At a summary level:

| Product class | Typical pricing context |
|---|---|
| JHF MBS senior class | Tightest yen-denominated structured-paper spread; government-supported senior; pricing very near JGB-curve plus modest spread |
| Private RMBS senior class | Wider than JHF MBS; reflects credit-enhancement structure rather than government support |
| Auto / consumer / card / lease ABS senior class | Wider than private RMBS; reflects asset-class risk and pool-credit characteristics |
| CMBS senior class | Wider still; reflects commercial-real-estate cycle exposure and pool concentration |
| Cross-border CLO AAA tranche held by Japanese banks | USD / EUR pricing — wider than JPY structured paper in spread terms, but absolute yield in USD historically attractive to Japanese yield-seeking investors |
| Covered bond senior tranche | Tight; UCITS-compliant covered bonds price at issuer credit plus modest spread, often inside senior unsecured |
| Synthetic CLN mezzanine | Wide; reflects junior credit exposure in capital-relief structure |

The spread-relationship matrix is most useful for buy-side allocation decisions; sell-side pricing reflects the same hierarchy as the rating-and-structure features captured in the master matrix.

## Reading the matrix

This matrix is the **product-class reference** for the Japan securitization market. Several readings are most useful:

### True-sale vs synthetic is the first structural cut

The deepest structural split among these products is **how the originator transfers risk**:
- **True sale** (asset moves to SPV): JHF MBS, private RMBS, CMBS, auto / consumer / card / lease ABS, NPL securitization, project-finance bonds, cross-border ABS.
- **No true sale, no risk transfer** (on-balance-sheet cover pool): covered bonds.
- **No true sale, synthetic risk transfer** (CDS / CLN reference structure): synthetic securitization.

True sale is the textbook ABS structure. Covered bonds and synthetic structures evolved as alternatives serving specific regulatory or strategic purposes (covered bonds for stable funding access at issuer-credit-plus-pool rating; synthetic for capital relief without funding flow).

### Domestic vs cross-border is the second cut

The matrix separates **yen-denominated domestic-distribution** products (JHF MBS, private RMBS, most ABS sub-classes, Japan-domiciled CLN, domestic project-finance) from **cross-border foreign-currency** products (CLO investments by Japanese banks, aircraft / ship-finance ABS, covered bonds in EUR / USD, cross-border CLN). The domestic side is dominated by JCR / R&I rating, megabank-securities-arm distribution, and TMK / GK-TK / trust-beneficial-interest vehicles. The cross-border side relies on S&P / Moody's / Fitch ratings, foreign-investment-bank distribution, and Cayman / Irish vehicles.

### Vehicle choice tracks asset class and listing intent

TMK is preferred where formal listed-bond issuance under the Asset Securitization Act regime is desired (single-borrower CMBS most clearly). GK-TK is the default for private-placement deals across ABS classes. Trust beneficial interest is preferred for private RMBS where trust law's separate-property treatment is important. Choice of vehicle is rarely investor-driven; it is structurer / originator / arranger driven and reflects tax-pass-through, off-balance-sheet criteria, listing preference, and asset class. See [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK vehicle choice]].

### Rating-agency split is a venue choice

JCR / R&I dominate domestic structured-paper rating. S&P / Moody's / Fitch dominate cross-border structured-paper rating. The split is not about quality of rating but about venue and investor base. Japan-domestic investors (life insurers, regional banks, [[regional-banks/japan-post-bank|JPost]], pension funds) treat JCR / R&I ratings as authoritative for yen-denominated paper; global investors investing in cross-border CLO or covered bonds rely on the foreign agencies. Some large repeat issuers (Toyota Financial cross-border) seek multi-agency coverage to maximize investor reach.

### Distributor identity is a franchise question

Megabank securities subsidiaries hold the dominant share of domestic-distribution structured products. Foreign investment banks dominate cross-border structures and historically were the originators of synthetic / repackaging / cross-border CLO sales to Japan. The competitive landscape between these two channels has been stable for many years; the megabank-securities-arm franchise covers domestic distribution depth, the foreign-investment-bank franchise covers cross-border product origination and complex structuring. See [[structured-finance/repackaging-note-japan|repackaging note Japan]] for the same dealer-franchise split in repackaging notes.

### Issuance volume tells you sector activity

The matrix orders issuance volume qualitatively (large / modest / small / cyclical), but the **structural feature** to remember is that JHF MBS is the largest yen-denominated structured-paper class by a wide margin; private RMBS, auto-ABS, and CMBS sit in the modest-to-small range; CLO investments by Japanese banks are large in JPY-equivalent terms but represent buy-side activity not Japan-domestic issuance; NPL securitization and synthetic securitization are cyclical and event-driven. See [[structured-finance/jhf-mbs-vs-private-rmbs-spread|JHF MBS vs private RMBS spread]] for the pricing-relationship dimension.

### Originator-vs-investor framing matters more than product taxonomy

A useful re-framing: each row of the matrix represents either (a) an **originator-driven product** where a Japanese originator transfers an asset pool to gain funding, capital relief, or balance-sheet management — JHF MBS, private RMBS, auto-ABS, consumer-ABS, card-ABS, lease-ABS, project-finance, NPL securitization, synthetic securitization, covered bonds — or (b) an **investor-driven product** where Japanese institutional capital seeks structured-credit yield exposure, often in foreign assets — cross-border CLO holdings, aircraft / ship-finance ABS subscription, repackaging notes. The map of Japanese banks / life insurers / pension funds / [[regional-banks/japan-post-bank|Japan Post Bank]] as **buyers of cross-border structured credit** is at least as important as the map of Japan as **issuer of domestic structured credit** for understanding the country's overall securitization-market footprint.

### What this matrix does not tell you

- **Live issuance volume** for any specific quarter — pull from JSDA, JHF IR, and ASF Japan.
- **Specific deal pricing** or **specific deal performance** — pull from JCR / R&I rating actions, dealer secondary-market commentary, and BoJ Financial System Report periodic disclosure.
- **Sponsor-specific structural variations** — some sponsors structure deals with non-standard waterfall, reserve account, or excess-spread mechanics; deal-specific reading required.
- **Tax treatment specifics** — vehicle tax treatment is regime-driven but case-specific; consult [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK vehicle choice]] for the framework, deal-specific tax memos for actual treatment.

## 10. Source-control checklist

Reproducing the matrix elements requires the following public-surface sources:

| Question | Public surface |
|---|---|
| JHF MBS monthly issuance volume | JHF IR — monthly MBS issuance announcements |
| Private RMBS deal pipeline | Megabank IR + JCR / R&I rating-action announcements + JSDA structured-finance statistics |
| CMBS deal pipeline | JCR / R&I rating-action announcements; megabank securities IR for arranger-side disclosure |
| Auto / consumer / card / lease ABS issuance | JCR / R&I rating actions; captive-finance and consumer-finance company IR |
| Japanese-bank CLO holdings | Norinchukin IR, Japan Post Bank IR, regional bank securities disclosure; Pillar 3 disclosures |
| Synthetic securitization volume | Megabank Pillar 3 disclosures; BoJ Financial System Report periodic commentary |
| Covered-bond program issuance | MUFG / SMBC EUR / USD deal announcements; ECBC covered-bond yearbook |
| Project-finance bond issuance | JCR / R&I rating actions; megabank syndicated-loan league tables for the loan side |
| Aircraft / ship-finance ABS | S&P / Moody's / Fitch cross-border rating actions; foreign-investment-bank deal announcements |
| Vehicle-choice patterns | FSA / JSDA legal-vehicle guidance; case-by-case legal disclosure |
| Rating-agency coverage split | JCR / R&I / S&P / Moody's / Fitch public rating-action archives |

This checklist supports reproducible Japan-securitization-market analysis from public sources only.

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/jhf-mbs-mechanics|JHF MBS mechanics]]
- [[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]]
- [[structured-finance/japan-cmbs-issuance-structure|Japan CMBS issuance structure]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda|auto-loan ABS Japan]]
- [[structured-finance/consumer-loan-abs-japan-card-issuer|consumer-loan ABS Japan]]
- [[structured-finance/japan-clo-issuance-japanese-banks|Japanese banks as CLO investors]]
- [[structured-finance/npl-securitization-japan|NPL securitization Japan]]
- [[structured-finance/project-finance-spv-japan-renewable|project finance SPV Japan renewable]]
- [[structured-finance/aircraft-leasing-financing-japan-shosha|aircraft leasing financing Japan]]
- [[structured-finance/ship-financing-japan-megabank|ship financing Japan megabank]]
- [[structured-finance/japan-covered-bond-mufg-smbc|Japan covered bond MUFG SMBC]]
- [[structured-finance/synthetic-securitization-japan-bank-rwa-relief|synthetic securitization Japan bank RWA relief]]
- [[structured-finance/repackaging-note-japan|repackaging note Japan]]
- [[structured-finance/jhf-mbs-vs-private-rmbs-spread|JHF MBS vs private RMBS spread]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK vehicle choice]]
- [[structured-finance/tmk-special-purpose-company-mechanics|TMK special-purpose-company mechanics]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv|Japan trust beneficial interest vs SPV]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|credit rating methodology JCR and R&I]]
- [[structured-finance/fitch-moody-sp-japan-criteria|Fitch / Moody's / S&P Japan criteria]]
- [[structured-finance/abcp-conduit-japan-megabank|ABCP conduit Japan megabank]]
- [[structured-finance/infrastructure-finance-spv-japan|infrastructure finance SPV Japan]]
- [[structured-finance/japan-green-securitization|Japan green securitization]]
- [[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency]]
- [[policy-finance/INDEX|policy-finance index]]
- [[real-estate-finance/INDEX|real-estate-finance index]]
- [[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS/RMBS securitization]]
- [[banking/INDEX|banking index]]
- [[card-issuers/toyota-finance|Toyota Finance]]
- [[card-issuers/orico|Orico]]
- [[card-issuers/jaccs|JACCS]]
- [[card-issuers/jcb|JCB]]
- [[card-issuers/credit-saison|Credit Saison]]
- [[leasing-firms/mitsubishi-hc-capital|Mitsubishi HC Capital]]
- [[cooperative-banks/norinchukin|Norinchukin Bank]]
- [[regional-banks/japan-post-bank|Japan Post Bank]]
- [[trust-banks/sumitomo-mitsui-trust|SMTB]]
- [[INDEX|FinWiki index]]

## Sources

- JHF (Japan Housing Finance Agency) — IR and statutory disclosures.
- JCR (Japan Credit Rating Agency) — public rating actions on Japan-domiciled structured-finance deals.
- R&I (Rating and Investment Information) — public rating actions on Japan-domiciled structured-finance deals.
- JSDA (Japan Securities Dealers Association) — structured-finance issuance statistics.
- FSA — securities-disclosure framework, bank capital-adequacy framework, Servicer Act / Moneylending Business Act / Installment Sales Act references.
- BoJ Financial System Report — periodic synthetic-securitization and structured-finance commentary.
- Megabank IR / Pillar 3 disclosures (MUFG, SMFG, Mizuho FG).
- Norinchukin IR, Japan Post Bank IR — CLO and structured-paper holdings disclosures.
- Toyota Finance IR — auto-loan ABS issuance disclosures.
- ECBC (European Covered Bond Council) — UCITS covered-bond framework reference.
- ARES — for the real-estate-finance overlap on CMBS.
