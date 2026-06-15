---
source: securities/japan-fiea-operator-registry-segment-matrix
source_hash: a0256b53cee7ac10
lang: en
status: machine
fidelity: ok
title: "Japan FIEA operator registry segment matrix"
translated_at: 2026-06-15T04:09:41.169Z
---

# Japan FIEA operator registry segment matrix

## TL;DR

Japan's Financial Instruments and Exchange Act (FIEA / 金融商品取引法) administers a single registry of **1,945 financial instruments business operators (金融商品取引業者) as of 2026-04-30**, but that single registry hides nine functionally distinct segments with very different capital floors, permitted-activity envelopes, supervisory bureau routing, self-regulatory-organization membership, and operator profiles. This matrix decomposes the FIBO registry into the nine working segments — **Type I 金商業者, Type II 金商業者, 投資助言・代理業, 投資運用業, 第一種少額電子募集取扱業, 電子取引基盤運営業, 適格機関投資家等特例業務 (Article 63), 暗号資産関連業務, PTS approvals**, plus the **適格機関投資家 (QII)** notification-only counterparty layer — so that a wiki entry mentioning "金融商品取引業者" can be routed to the correct segment before strategy, capital, or governance questions get asked.

## Wiki route

This page sits under [[securities/INDEX|securities index]] as the segment-decomposition route for [[securities/financial-instruments-business-operators-japan-index|FIEA operator registry index]]. Read it with [[financial-licenses/securities-license-stack|securities license stack]] for the legal-stack mapping, [[securities/japan-asset-manager-landscape-matrix|Japan asset manager landscape matrix]] for the 投資運用業 lane, [[securities/japan-online-brokerage-competition|Japan online brokerage competition]] for the Type I retail-broker lane, and [[securities/japan-prime-brokerage-and-institutional-financing|Japan prime brokerage and institutional financing]] for the Type I institutional-wholesale lane. The exchange / PTS / clearing infrastructure that sits underneath is in [[securities/japan-market-infrastructure-map|Japan market infrastructure map]].

## Why this matrix matters

A blanket reference to "FSA-registered financial instruments business operator" elides differences that drive almost every public-surface field:

- which **statute clause** the operator is registered under (FIEA Article 28 paragraphs 1, 2, 3, or 4; or Articles 33, 63, 63-9, etc.);
- which **minimum paid-in capital** floor applies (¥50 million up to ¥500 million depending on segment);
- which **JSDA, JIAA, JITA, or 暗号資産取引業協会** self-regulatory organization the operator must or may join;
- which **FSA bureau or Local Finance Bureau** supervises;
- which **investor protection regime** applies (the [[JapanFG/jiipf|Japan Investor Protection Fund]] segregation route covers Type I but not Type II);
- whether the operator can solicit retail investors, only 適格機関投資家, or only specified-investor counterparties;
- whether the operator can hold customer assets, only intermediate, or only advise.

Without segment-level decomposition, a 10-person 投資助言・代理業 shop and a 5,000-person Type I megabank securities arm look like the same FIBO registry row. They are not the same business.

## Registry-wide snapshot

| Metric (as of FSA 2026-04-30 workbook) | Reading |
|---|---:|
| Total FIBO operators | 1,945 |
| Type I 金商業者 (第一種金融商品取引業) | 291 |
| Type II 金商業者 (第二種金融商品取引業) | 1,223 |
| 投資助言・代理業 (investment advisory / agency) | 994 |
| 投資運用業 (investment management) | 463 |
| 第一種少額電子募集取扱業 (Type I small e-offering) | 70 |
| 電子取引基盤運営業 (PTS-equivalent electronic trading) | 6 |
| 適格機関投資家等特例業務 (Article 63 notifications) | thousands (notification, not registration) |
| 暗号資産関連業務 (crypto-asset derivatives etc.) | overlap segment, varies |
| PTS approval rows (separate authorization) | 11 |
| 適格機関投資家 (QII) | special notification-only counterparty layer |

FSA explicitly notes that one operator may carry multiple registrations, so segment subtotals do not add up to the total operator count. A megabank securities arm typically carries Type I + Type II + 投資助言・代理業 + 投資運用業 inside one legal entity, for example.

Jurisdiction routing (1,945 total): **金融庁 413, 北海道財務局 21, 東北財務局 14, 関東財務局 1,192, 東海財務局 56, 北陸財務局 10, 近畿財務局 152, 中国財務局 22, 四国財務局 14, 九州財務局 8, 福岡財務支局 41, 沖縄総合事務局 2**. The 関東財務局 concentration is the structural Tokyo / Kanto-headquarters bias of the financial-services population.

## Segment 1 — Type I 金商業者 (第一種金融商品取引業)

- **Statute.** FIEA Article 28 paragraph 1; registered under Article 29; capital-floor and conduct rules in FIEA Chapter III.
- **Operator count.** 291 registered Type I operators on the FSA workbook.
- **Capital floor.** ¥50 million minimum paid-in capital baseline under FIEA cabinet office order, with **higher floors for specific activities**: PTS-equivalent operators ¥300 million; underwriting-eligible Type I firms higher still by activity scope; net capital adequacy ratio (自己資本規制比率) must remain ≥ 120% (¥150% supervisory trigger, ≥ 200% target).
- **Permitted activities.** Securities dealing, brokerage, intermediation, agency, and underwriting of **highly liquid securities** (listed equities, bonds, ETFs, ETNs, REITs, listed derivatives, FX margin trading, CFDs, security tokens issued under STO scheme). Custody of customer assets is permitted (segregated). Underwriting of securities is reserved to Type I.
- **Supervisory bureau.** Local Finance Bureau corresponding to head-office prefecture (大半 関東財務局 = Tokyo); large megabank / global IB Type I operators sit under 金融庁 direct supervision.
- **Self-regulatory membership.** [[financial-regulators/jsda|JSDA (日本証券業協会)]] is the dominant SRO; FX-margin focused firms join 金融先物取引業協会 (FFAJ); some join both. JSDA membership is mandatory in practice for retail-securities Type I operators.
- **Investor protection.** [[JapanFG/jiipf|Japan Investor Protection Fund (JIPF)]] coverage applies — segregated customer assets are protected up to ¥10 million per customer in JSDA-member Type I failure events.
- **Typical operator profile.** All-purpose securities firms — megabank securities arms ([[securities-firms/smbc-nikko|SMBC Nikko]], [[securities-firms/mizuho-securities|Mizuho Securities]], [[securities-firms/mufg-mums|MUMSS]]), independent IBs ([[securities-firms/nomura-hd|Nomura]], [[securities-firms/daiwa-sg|Daiwa SG]]), online brokers ([[securities-firms/sbi-securities|SBI Securities]], [[securities-firms/rakuten-securities|Rakuten Securities]], [[securities-firms/monex-group|Monex]], [[securities-firms/gmo-click-securities|GMO Click]], [[securities-firms/dmm-com-securities|DMM.com]], [[securities-firms/paypay-securities|PayPay Securities]]), foreign IBs ([[securities-firms/goldman-sachs-japan|GS Japan]], [[securities-firms/morgan-stanley-japan|MS Japan]], [[foreign-financial-institutions/jpmorgan-japan|JPM Japan]], [[foreign-financial-institutions/citigroup-japan|Citi Japan]], [[foreign-financial-institutions/bank-of-america-japan|BofA Japan]], [[foreign-financial-institutions/ubs-japan|UBS Japan]], [[foreign-financial-institutions/barclays-japan|Barclays Japan]], [[foreign-financial-institutions/bnp-paribas-japan|BNP Paribas Japan]], [[foreign-financial-institutions/deutsche-japan|Deutsche Japan]], [[foreign-financial-institutions/socgen-japan|SocGen Japan]]), FX/derivatives shops ([[securities-firms/traders-securities|Traders Securities]], [[securities-firms/saxo-bank-securities|Saxo Bank Securities]], [[securities-firms/sbi-fx-trade|SBI FX Trade]]).

Type I is the broadest envelope — the gate to listed-market brokerage, underwriting, and most retail securities distribution.

## Segment 2 — Type II 金商業者 (第二種金融商品取引業)

- **Statute.** FIEA Article 28 paragraph 2; registered under Article 29; conduct rules in Chapter III.
- **Operator count.** 1,223 Type II operators — by far the largest single segment.
- **Capital floor.** ¥10 million minimum paid-in capital for ordinary Type II; **¥50 million minimum** for "self-offering" (自己募集 / 自己私募) handlers of fund interests under Article 2 paragraph 2; FX-margin handlers carry separate cabinet-office-order floors.
- **Permitted activities.** Solicitation, brokerage, intermediation, agency, and self-offering of **paragraph 2 securities** — collective investment scheme interests (fund interests under FIEA Article 2 paragraph 2 item 5 and item 6), beneficiary certificates of foreign trusts, mortgage backed certificates, unlisted equity, security tokens for fund interests, and similar interests in collective investment schemes. **Cannot handle listed securities or underwriting** (those require Type I).
- **Supervisory bureau.** Local Finance Bureau by head-office prefecture; high concentration in 関東財務局.
- **Self-regulatory membership.** [[JapanFG/jiaa|Type II Financial Instruments Firms Association (第二種金融商品取引業協会, JIAA)]] is the SRO for Type II operators; membership is **effectively mandatory** for self-offering and equity-crowdfunding-adjacent activities under FSA supervisory practice.
- **Investor protection.** JIPF does not extend to Type II in the same way as Type I; segregation rules apply but the safety net is structurally weaker.
- **Typical operator profile.** Fund GPs and management-company affiliates that self-offer LP interests in private real-estate funds, infrastructure funds, private-equity funds, hedge funds, agricultural funds, anime / content funds, solar / renewable energy funds, equity-crowdfunding platforms ([[JapanFG/funds-incorporated|Funds]], [[JapanFG/crowdcredit-incorporated|Crowd Credit]]-adjacent), trust-beneficiary-right intermediaries, and security-token-offering distribution platforms.

The 1,223 Type II population is the **long tail of Japanese private-securities activity** — small GP / fund-management shops, real-estate AM affiliates, and specialty distribution platforms.

## Segment 3 — 投資助言・代理業 (Investment Advisory / Agency Business)

- **Statute.** FIEA Article 28 paragraph 3; registered under Article 29; conduct rules in FIEA Chapter III sub-section on investment advice / agency.
- **Operator count.** 994 投資助言・代理業 operators.
- **Capital floor.** ¥5 million minimum paid-in capital — the **lowest capital floor in the FIEA universe** because the operator never holds customer assets.
- **Permitted activities.** Investment advice (投資助言業) — paid advice on securities, derivatives, and investment decisions delivered through reports, newsletters, model portfolios, or one-on-one consultation; **and** agency / intermediation (代理・媒介) on behalf of 投資運用業 operators (i.e. acting as IFA-equivalent introducer for discretionary investment management contracts). **Cannot manage customer assets or hold customer money / securities** — those activities require 投資運用業 (segment 4) or Type I (segment 1).
- **Supervisory bureau.** Local Finance Bureau by head-office; small operators are widely distributed across regional LFBs but Tokyo remains dominant.
- **Self-regulatory membership.** [[JapanFG/jiaa-advisory|Japan Investment Advisers Association (日本投資顧問業協会, JIAA)]] — note the same JIAA abbreviation can be confused with the Type II SRO; the advisory JIAA covers 投資助言業 and 投資一任 / 投資運用業 advisory and agency. Membership is the operating norm for material advisers.
- **Investor protection.** No JIPF coverage — the operator does not hold customer assets so there are no assets to segregate. Risk is misadvice / suitability / fiduciary-duty risk.
- **Typical operator profile.** **IFA platforms** (Independent Financial Advisors — increasingly material via online-broker tie-ups), boutique investment-newsletter publishers, robo-advice intermediaries (when they advise rather than manage), pension consultants advising on plan asset allocation, small hedge-fund-research shops, foreign-AM Japan introducer offices that introduce 投資一任 mandates without managing them, and one-person 投資助言 sole proprietors.

This is the **regulatory entry-point segment** — many securities entrepreneurs start here because the capital floor is light and the activity envelope is well-defined.

## Segment 4 — 投資運用業 (Investment Management Business)

- **Statute.** FIEA Article 28 paragraph 4; registered under Article 29 with additional Article 29-4-2 prudential requirements; conduct rules in FIEA Chapter III sub-section on investment management.
- **Operator count.** 463 投資運用業 operators.
- **Capital floor.** ¥50 million minimum paid-in capital baseline under FIEA cabinet office order; with net asset requirements layered on top. Larger 投資運用業 operators managing mass-market 公募投信 carry additional disclosure and risk-management requirements.
- **Permitted activities.** Discretionary investment management (投資一任業), investment trust management (投資信託委託業), and management of fund assets (ファンド運用業) — the operator **takes investment discretion** over customer money / securities. Asset custody is generally separated to a trust bank (信託受託).
- **Supervisory bureau.** Larger AMs (the Lane 1 megabank-AM cluster — [[asset-managers/nomura-asset-management|Nomura AM]], [[asset-managers/asset-management-one|AM-One]], [[asset-managers/mufg-asset-management|MUFG AM]], [[asset-managers/smd-am|SMD AM]], [[asset-managers/daiwa-asset-management|Daiwa AM]], [[asset-managers/nikko-asset-management|Nikko AM]]) and global parents (BlackRock Japan, JPMAM Japan, Fidelity Japan) tend toward direct FSA supervision; smaller domestic AMs sit under 関東財務局.
- **Self-regulatory membership.** [[JapanFG/jita|Japan Investment Trusts Association (投資信託協会, JITA)]] for AMs running 公募投信 / 私募投信; JIAA for 投資一任業. Membership is mandatory in practice for retail public-fund AMs.
- **Investor protection.** No JIPF — customer assets sit at the trust-bank custodian rather than the AM, so segregation flows through trust-banking law (信託業法) rather than securities investor protection.
- **Typical operator profile.** Asset managers — megabank-affiliated AMs, insurance-affiliated AMs (Lane 2 in [[securities/japan-asset-manager-landscape-matrix|Japan asset manager landscape matrix]]), independent / online AMs ([[asset-managers/sbi-asset-management|SBI AM]], 楽天投信投資顧問, スパークス・グループ), foreign-affiliated AMs (BlackRock Japan, JPMAM Japan, Fidelity Japan, Schroders Japan, T. Rowe Price Japan, Pictet Japan), pension / endowment discretionary managers, hedge-fund GPs running 投資一任 mandates inside Japan.

Reflects the full 463-operator population that runs the Japanese investment-management book.

## Segment 5 — 第一種少額電子募集取扱業 (Type I Small Electronic Offering Handling Business)

- **Statute.** FIEA Article 29-4-2 (registered under Article 29 with sub-paragraph designation); equity-crowdfunding regulation added by the 2014 FIEA amendment.
- **Operator count.** 70 第一種少額電子募集取扱業 operators per FSA workbook.
- **Capital floor.** ¥10 million minimum paid-in capital (lower than ordinary Type I because activity is narrow); offering size caps cabinet-office-order regulated.
- **Permitted activities.** Equity-crowdfunding-style **online intermediation of small public offerings** of unlisted-equity securities — issuer fundraising **capped at ¥100 million per fundraising round, and per investor ¥500,000 per issuer per year**. The narrowed activity envelope is the trade-off for the lower capital floor and lighter prudential treatment versus full Type I.
- **Supervisory bureau.** 関東財務局 dominance; FSA direct supervision rare.
- **Self-regulatory membership.** [[financial-regulators/jsda|JSDA]] equity-crowdfunding sub-SRO regime; Type I rules apply to the relevant slice of activity.
- **Investor protection.** JIPF coverage applies to the extent the operator is a Type I registrant; customer-asset segregation rules apply.
- **Typical operator profile.** Equity-crowdfunding platforms — [[JapanFG/funds-incorporated|FUNDINNO]], [[JapanFG/securite-crowdfunding|Securite]] (when within equity-crowdfunding scope), 日本クラウドキャピタル legacy entity, [[securities-firms/sbi-securities|SBI Securities]] equity-crowdfunding desk (SBI Issuance Market), CAMPFIRE Angels, Ichigon Cloud Funding, FUEL Online and similar issuer-funding intermediaries. Distinct from non-FIEA "donation" / "perks" reward crowdfunding which is not securities activity.

A small but strategically important segment — it is the legal scaffolding for the Japanese equity-crowdfunding industry.

## Segment 6 — 電子取引基盤運営業 (Electronic Trading Platform Operation)

- **Statute.** FIEA Article 28 paragraph 8 item 4 (electronic trading platform operation business added by the 2016 amendment); conduct rules in cabinet-office-order on electronic trading platforms.
- **Operator count.** 6 電子取引基盤運営業 rows per the FSA workbook.
- **Capital floor.** Cabinet-office-order capital floor higher than ordinary Type II because the operator runs market-infrastructure plumbing; net-capital-adequacy ratio applies.
- **Permitted activities.** Operation of **electronic trading platforms** for certain OTC derivatives — credit-default-swap reference indices, OTC interest-rate products in scope of mandatory electronic trading under Article 40-7, and similar OTC products designated by cabinet-office-order. This is a **distinct license from PTS** (which is for equity-like instruments under Article 30) — see segment 9.
- **Supervisory bureau.** FSA direct supervision (market-infrastructure activity).
- **Self-regulatory membership.** No single SRO mapping; JSDA wholesale-bond rules apply where bonds traded.
- **Investor protection.** Counterparty-level rather than retail-protection framework — participants are 適格機関投資家 / 特定投資家 institutional only.
- **Typical operator profile.** Wholesale OTC-derivatives electronic-trading platform operators — global IDB / wholesale-broker subsidiaries (Tradeweb Japan, MarketAxess Japan, BGC Partners Japan, Tullett Prebon Japan equivalents, Bloomberg L.P. trading-services Japan affiliate where licensed). Very small operator population, infrastructure-critical.

A high-leverage segment for OTC-derivatives transparency.

## Segment 7 — 適格機関投資家等特例業務 (Article 63 QII-only Special Notification Business)

- **Statute.** FIEA Article 63; **notification regime, not full registration** — operator notifies FSA rather than being registered as a 金融商品取引業者.
- **Operator count.** **Notifications run into the thousands** historically — FSA periodically reports the notification book; many shell GPs and fund-management vehicles use this regime. The notification population is not part of the 1,945 FIBO registrant count.
- **Capital floor.** No capital floor under FIEA Article 63 itself, but **investor-side restrictions** are strict: at least one investor must be a 適格機関投資家 (QII), and non-QII investors in the fund are capped at 49 specified persons (各種制限).
- **Permitted activities.** Self-offering and management of **collective investment scheme interests** by a GP that operates as a 業務 outside formal Type II / 投資運用業 registration, subject to the QII-anchor and 49-non-QII-cap rules. **Cannot freely solicit retail**.
- **Supervisory bureau.** 関東財務局 receives most notifications; FSA monitors aggregated statistics.
- **Self-regulatory membership.** No mandatory SRO membership under Article 63 itself.
- **Investor protection.** Limited — investors must be QII or fit-and-proper specified persons; the regime relies on professional-investor sophistication rather than retail-protection rules.
- **Typical operator profile.** Single-mandate private-equity GP vehicles, single-fund hedge-fund GPs, real-estate fund SPVs, asset-backed-financing SPVs, family-office investment vehicles, foreign GP Japan-distribution intermediaries (where structured around QII anchors). FSA tightened the regime materially in 2015–2016 after retail-investor losses on supposedly QII-only funds; further tightening since then has narrowed misuse.

The largest **notification-only** segment by raw count — but smallest in retail-investor exposure because the regime is structurally institutional.

## Segment 8 — 暗号資産関連業務 (Crypto-Asset-Related FIEA Business)

- **Statute.** FIEA crypto-asset-derivatives rules added by the 2019 FIEA amendment (effective May 2020); crypto-asset spot trading is regulated separately under the Payment Services Act 暗号資産交換業 license, not FIEA.
- **Operator count.** **Overlap segment** — varies; specific Type I and Type II operators register an additional crypto-asset-derivatives sub-license to handle crypto-asset margin trading or crypto-asset CFDs.
- **Capital floor.** Underlying Type I / Type II floor applies; conduct rules layered on top (no separate independent capital floor under crypto sub-license itself).
- **Permitted activities.** Crypto-asset derivatives — margin trading, CFDs, futures-like products on Bitcoin / Ethereum and other designated crypto-assets. Spot crypto trading remains under the [[fintech/japan-stablecoin-and-crypto-regulation|PSA 暗号資産交換業]] regime; STO / security-token activity is regulated separately under FIEA Type I (segment 1) when the token represents securities under Article 2 paragraph 3.
- **Supervisory bureau.** FSA direct supervision dominates given systemic-risk concern.
- **Self-regulatory membership.** [[JapanFG/jvcea|Japan Virtual and Crypto-Assets Exchange Association (JVCEA)]] is the PSA-side SRO; FIEA crypto-derivatives operators interact with JVCEA on overlapping conduct rules.
- **Investor protection.** Type I JIPF coverage applies; crypto-asset-specific customer-asset segregation rules (cold-wallet ratios, hot-wallet exposure caps) layered on.
- **Typical operator profile.** [[securities-firms/sbi-securities|SBI Securities]] (limited crypto-derivative sleeve), [[securities-firms/gmo-click-securities|GMO Click Securities]] (crypto-CFD product), [[securities-firms/dmm-com-securities|DMM.com Securities]] adjacency to DMM Bitcoin, and a small handful of FX-margin firms that added crypto-CFD lines.

A small but strategically watched segment — sits at the interface between FIEA and PSA.

## Segment 9 — PTS approval and 適格機関投資家 (QII) notification layer

- **Statute.** **PTS approval** under FIEA Article 30 paragraph 1 — granted as an **additional sub-authorization on top of Type I 金商業者 registration**, not a standalone FIBO segment. **適格機関投資家 (QII)** notification under FIEA Article 2 paragraph 3 item 1 — not a license at all but a counterparty-status notification.
- **PTS operator count.** 11 PTS approval rows on the FSA workbook. Operating PTS venues include [[securities/japannext-securities|Japannext Securities]] (and its J-Market / Cboe Japan / Chi-X Japan history), [[securities/osaka-digital-exchange|Osaka Digital Exchange (ODX)]], SBI Japannext-adjacent venues, and the small number of additional licensed PTS operators (some are inactive / wound-down approvals retained on register).
- **QII population.** Several thousand QII-notified entities — life insurers, nonlife insurers, banks, securities companies, trust banks, investment trusts, pension funds, large endowments, and qualifying corporate entities that meet asset-size / professional-investor thresholds. The QII population anchors Article 63 (segment 7), 私募 fund distribution, and institutional investor protection carve-outs.
- **Capital floor.** PTS approval requires the underlying Type I (¥300 million for PTS-equivalent operation by cabinet-office-order). QII status is asset-size and qualifying-entity-status based, not a capital floor.
- **Permitted activities.** PTS — operation of a proprietary trading system for listed equities, ETFs, REITs, and listed corporate bonds, with execution and price-formation rules under FIEA. QII — counterparty status that exempts the counterparty from certain retail-investor-protection rules and enables Article 63 fund anchoring.
- **Supervisory bureau.** FSA direct supervision for PTS (market-infrastructure systemic-risk concern); 関東財務局 for QII notifications.
- **Self-regulatory membership.** PTS operators are JSDA members through their Type I parent license; QII status does not carry SRO membership obligations.
- **Investor protection.** PTS counterparties are mostly institutional; PTS operator JIPF coverage flows from the underlying Type I parent registration. QII status removes retail-protection coverage on the QII counterparty side.
- **Typical operator profile.** PTS — [[securities/japannext-securities|Japannext PTS]], [[securities/osaka-digital-exchange|ODX]], and the small number of additional licensed PTS operators. QII — life / nonlife insurers (Nippon Life, Dai-ichi Life, Tokio Marine, Sompo, MS&AD), megabanks (SMBC, MUFG, Mizuho), megabank securities arms ([[securities-firms/smbc-nikko|SMBC Nikko]], [[securities-firms/mizuho-securities|Mizuho Securities]], [[securities-firms/mufg-mums|MUMSS]]), trust banks (MUTB, SMTB), AMs ([[asset-managers/nomura-asset-management|Nomura AM]], [[asset-managers/asset-management-one|AM-One]]), public pension funds (GPIF, KKR), and the broader institutional investor universe.

## Cross-segment comparison table

| Dimension | Type I 金商業者 | Type II 金商業者 | 投資助言・代理業 | 投資運用業 | 第一種少額電子募集取扱業 | 電子取引基盤運営業 | 適格機関投資家等特例業務 (Art. 63) | 暗号資産関連 (overlay) | PTS approval (sub-license) | 適格機関投資家 (QII notification) |
|---|---|---|---|---|---|---|---|---|---|---|
| **FIEA clause** | Art. 28 ¶1 / Art. 29 | Art. 28 ¶2 / Art. 29 | Art. 28 ¶3 / Art. 29 | Art. 28 ¶4 / Art. 29 + Art. 29-4-2 | Art. 29-4-2 sub-paragraph | Art. 28 ¶8-4 | Art. 63 (notification) | FIEA derivatives + crypto sub-rules | Art. 30 sub-authorization | Art. 2 ¶3 item 1 (notification) |
| **Operator count** | 291 | 1,223 | 994 | 463 | 70 | 6 | Thousands (notifications) | Overlay; varies | 11 | Thousands (notifications) |
| **Minimum capital floor** | ¥50m baseline; ¥300m PTS; higher by activity | ¥10m baseline; ¥50m self-offering | ¥5m (no asset custody) | ¥50m + net asset requirements | ¥10m | Cabinet-office-order > Type II | None (notification regime) | Underlying Type I/II floor | Underlying Type I ¥300m | N/A (asset-size status) |
| **Net capital adequacy ratio** | ≥ 120% (200% target) | Lighter | None | Net-asset requirement | Applies via Type I | Applies | None | Per parent license | Per parent Type I | N/A |
| **Permitted activities** | Listed-security dealing, brokerage, underwriting, custody, FX margin, derivatives | Fund-interest self-offering, paragraph 2 securities solicitation | Investment advice + agency / 媒介 only | Discretionary investment management, fund management, investment-trust management | Equity crowdfunding (≤¥100m raise, ≤¥500k/investor) | OTC-derivatives e-trading platform operation | Self-offering + management when QII-anchored, 49-non-QII cap | Crypto-derivatives sub-line | Operation of PTS for listed equities/bonds | Counterparty status only |
| **Customer asset custody** | Yes (segregated) | Limited / structured | **No** | Generally no (trust-bank custodian) | Yes (Type I segregation) | No (counterparty-level) | Indirect via fund | Per parent license | Yes (via Type I parent) | N/A |
| **Supervisory bureau** | LFB by HQ; FSA for systemic | LFB by HQ; 関東 dominant | LFB by HQ; widely distributed | FSA + LFB; FSA direct for large AMs | 関東財務局 dominant | FSA direct | 関東財務局 receives most | FSA direct | FSA direct | 関東財務局 |
| **JSDA membership** | Mandatory in practice | Not applicable (JIAA member) | Not applicable (JIAA-advisory member) | Not applicable (JITA + JIAA-advisory) | Through Type I parent | Through Type I parent if applicable | Not applicable | Through parent | Through Type I parent | Not applicable |
| **Other SRO** | FFAJ for FX margin | [[JapanFG/jiaa\|JIAA Type II]] | [[JapanFG/jiaa-advisory\|JIAA advisory]] | [[JapanFG/jita\|JITA]] + JIAA-advisory | JSDA equity-crowdfunding sub-SRO | None mandatory | None mandatory | JVCEA overlap | JSDA via parent | None mandatory |
| **JIPF investor protection** | Yes (¥10m segregation) | No / limited | No (no assets) | No (trust-bank custody) | Yes via Type I | No (institutional only) | No | Yes via Type I | Yes via parent | N/A |
| **Retail solicitation** | Yes | Yes (paragraph 2 securities) | Yes (advice) | Yes (公募 funds) | Yes (within caps) | No (institutional only) | No (QII + ≤49 specified) | Yes (where Type I parent allows) | Indirect (via Type I venues) | N/A |
| **Typical operator profile** | Megabank securities arms, IBs, online brokers, FX brokers | Private-fund GPs, RE-AM affiliates, crowdfunding-adjacent | IFA platforms, advice publishers, robo-advice intermediaries | Asset managers (megabank, insurance, independent, foreign) | Equity-crowdfunding platforms | Wholesale OTC e-trading platforms | Single-mandate PE/HF/RE/family-office GPs | FIEA-side crypto-derivative desks | [[securities/japannext-securities\|Japannext]], [[securities/osaka-digital-exchange\|ODX]] | Insurers, banks, AMs, pension funds, large corporates |
| **Cross-domain link** | [[securities/japan-prime-brokerage-and-institutional-financing-matrix\|prime brokerage matrix]], [[securities/japan-online-brokerage-competition\|online brokerage competition]] | [[securities/japan-underwriting-market-structure\|underwriting market]] private-fund flows | IFA / robo-advice channel | [[securities/japan-asset-manager-landscape-matrix\|AM landscape matrix]] | NISA-adjacent retail-issuer channel | [[securities/japan-best-execution-sor-pts\|best-execution / SOR / PTS]] OTC layer | [[securities/japan-underwriting-market-structure\|private placement]] anchor | [[fintech/japan-stablecoin-and-crypto-regulation\|PSA crypto regulation]] adjacency | [[securities/japan-pts-liquidity-data-guide\|PTS liquidity data guide]] | [[securities/japan-asset-manager-landscape-matrix\|AM landscape matrix]] institutional counterparties |

## Top 30 operators by segment (illustrative anchor)

This is a public-anchor list — institution names that materially anchor each segment for FinWiki cross-linking. It is not a row-level ranking and should be read alongside FSA's primary workbook for current registration status.

| Segment | Anchor operators (illustrative, not ranked) |
|---|---|
| **Type I — independent IB** | [[securities-firms/nomura-hd\|Nomura]], [[securities-firms/daiwa-sg\|Daiwa Securities Group]] |
| **Type I — megabank arm** | [[securities-firms/smbc-nikko\|SMBC Nikko]], [[securities-firms/mizuho-securities\|Mizuho Securities]], [[securities-firms/mufg-mums\|MUMSS]] |
| **Type I — online broker** | [[securities-firms/sbi-securities\|SBI Securities]], [[securities-firms/rakuten-securities\|Rakuten Securities]], [[securities-firms/monex-group\|Monex]], [[securities-firms/mufg-esmart-securities\|au Kabucom (MUFG eSmart)]], [[securities-firms/paypay-securities\|PayPay Securities]], [[securities-firms/gmo-click-securities\|GMO Click]], [[securities-firms/dmm-com-securities\|DMM.com]] |
| **Type I — foreign IB** | [[securities-firms/goldman-sachs-japan\|GS Japan]], [[securities-firms/morgan-stanley-japan\|MS Japan]], [[foreign-financial-institutions/jpmorgan-japan\|JPM Japan]], [[foreign-financial-institutions/citigroup-japan\|Citi Japan]], [[foreign-financial-institutions/bank-of-america-japan\|BofA Japan]], [[foreign-financial-institutions/ubs-japan\|UBS Japan]], [[foreign-financial-institutions/barclays-japan\|Barclays Japan]], [[foreign-financial-institutions/bnp-paribas-japan\|BNP Paribas Japan]], [[foreign-financial-institutions/deutsche-japan\|Deutsche Japan]], [[foreign-financial-institutions/socgen-japan\|SocGen Japan]] |
| **Type I — FX / derivatives broker** | [[securities-firms/traders-securities\|Traders Securities]], [[securities-firms/saxo-bank-securities\|Saxo Bank Securities]], [[securities-firms/sbi-fx-trade\|SBI FX Trade]] |
| **Type II — fund GPs / RE-AM** | Real-estate fund GPs, infrastructure fund GPs, anime / content fund GPs, agricultural fund GPs, renewable-energy fund GPs (long tail of 1,223) |
| **投資助言・代理業 — IFA / advisory** | IFA platform operators ([[securities-firms/sbi-securities\|SBI Securities]]-IFA tie-ups, [[securities-firms/rakuten-securities\|Rakuten Securities]]-IFA tie-ups), 投資助言 newsletter publishers, foreign-AM Japan introducer offices |
| **投資運用業 — megabank-AM** | [[asset-managers/nomura-asset-management\|Nomura AM]], [[asset-managers/asset-management-one\|AM-One]], [[asset-managers/mufg-asset-management\|MUFG AM]], [[asset-managers/smd-am\|SMD AM]], [[asset-managers/daiwa-asset-management\|Daiwa AM]], [[asset-managers/nikko-asset-management\|Nikko AM]] |
| **投資運用業 — independent / online** | [[asset-managers/sbi-asset-management\|SBI AM]], 楽天投信投資顧問, スパークス・グループ |
| **投資運用業 — foreign-affiliated** | BlackRock Japan, JPMorgan AM Japan, Fidelity Investments Japan, Schroders Japan, T. Rowe Price Japan, Pictet AM Japan |
| **第一種少額電子募集取扱業** | [[JapanFG/funds-incorporated\|FUNDINNO / Funds]], 日本クラウドキャピタル legacy entity, equity-crowdfunding-platform operators |
| **電子取引基盤運営業** | Wholesale OTC e-trading platform operators (≈6 rows) |
| **適格機関投資家等特例業務** | Thousands of single-mandate PE / HF / RE / family-office GP vehicles |
| **暗号資産関連 (overlay)** | [[securities-firms/sbi-securities\|SBI Securities]] (crypto-derivative sleeve), [[securities-firms/gmo-click-securities\|GMO Click Securities]] (crypto-CFD), [[securities-firms/dmm-com-securities\|DMM.com Securities]] (DMM Bitcoin adjacency) |
| **PTS approval** | [[securities/japannext-securities\|Japannext PTS]], [[securities/osaka-digital-exchange\|ODX]] |
| **QII notification** | Life insurers, nonlife insurers, megabanks, securities arms, trust banks, AMs, pension funds (GPIF, KKR, PFA) |

For row-level operator ranking by AUM / market share, route to [[securities/japan-asset-manager-landscape-matrix|Japan asset manager landscape matrix]] (investment management) and [[securities/japan-online-brokerage-competition|Japan online brokerage competition]] (Type I retail) — those are the working competitive matrices.

## Multi-license stacking

A material share of large FIBO operators carry **multiple registrations inside one legal entity**. Common stacks:

| Operator type | Typical stack |
|---|---|
| Megabank securities arm ([[securities-firms/smbc-nikko\|SMBC Nikko]], [[securities-firms/mizuho-securities\|Mizuho Securities]], [[securities-firms/mufg-mums\|MUMSS]]) | Type I + Type II + 投資助言・代理業 + 投資運用業 |
| Independent IB ([[securities-firms/nomura-hd\|Nomura]], [[securities-firms/daiwa-sg\|Daiwa SG]]) | Type I + Type II + 投資助言・代理業 + 投資運用業 (often in subsidiary AMs) |
| Online broker ([[securities-firms/sbi-securities\|SBI Securities]], [[securities-firms/rakuten-securities\|Rakuten Securities]], [[securities-firms/monex-group\|Monex]]) | Type I + Type II + 投資助言・代理業 (some hold 投資運用業 in subsidiary AMs) |
| Foreign IB ([[securities-firms/goldman-sachs-japan\|GS Japan]], [[foreign-financial-institutions/jpmorgan-japan\|JPM Japan]], [[securities-firms/morgan-stanley-japan\|MS Japan]]) | Type I + Type II + 投資運用業 (in subsidiary AM); separate FX / commodity entities |
| Standalone AM ([[asset-managers/nomura-asset-management\|Nomura AM]], [[asset-managers/asset-management-one\|AM-One]]) | 投資運用業 + 投資助言・代理業 + Type II (for fund self-offering) |
| Equity-crowdfunding platform | 第一種少額電子募集取扱業 + Type I (for narrow brokerage segment) |
| PTS operator | Type I + PTS sub-authorization |
| Crypto-derivatives operator | Underlying Type I + 暗号資産関連 sub-line |

This multi-license stacking is why the segment subtotals (291 + 1,223 + 994 + 463 + 70 + 6 = 3,047) far exceed the 1,945 unique operator total. The 1.57× overcount is the structural reality of FIEA's flexible-stacking design.

## Cross-segment SRO map

| Self-regulatory organization | Coverage |
|---|---|
| [[financial-regulators/jsda\|JSDA (日本証券業協会)]] | Type I 金商業者 (mandatory in practice); PTS-operator parents; equity-crowdfunding sub-SRO |
| [[JapanFG/jiaa\|JIAA Type II (第二種金融商品取引業協会)]] | Type II 金商業者 (effectively mandatory for self-offering and crowdfunding-adjacent activity) |
| [[JapanFG/jiaa-advisory\|JIAA advisory (日本投資顧問業協会)]] | 投資助言・代理業 + 投資一任 / 投資運用業 advisory and agency |
| [[JapanFG/jita\|JITA (投資信託協会)]] | 投資運用業 operators running 公募投信 / 私募投信 |
| FFAJ (金融先物取引業協会) | Type I operators in FX-margin and listed-financial-futures |
| [[JapanFG/jvcea\|JVCEA (Japan Virtual and Crypto-Assets Exchange Association)]] | PSA-side crypto-exchange operators; FIEA crypto-derivatives operators interact on overlap |

## Boundary cases and caveats

- **Multi-license overcount.** The 1,945 unique operators carry far more than 1,945 registrations. A single megabank securities arm can hold Type I + Type II + 投資助言・代理業 + 投資運用業 inside one entity. Never sum segment subtotals to estimate operator population.
- **Type I vs Type II.** The split is by **product type** (Type I = highly liquid listed-market; Type II = paragraph 2 fund-interest / unlisted), not by operator size. A large unlisted-fund AM can be Type II only; a small online-broker can be Type I.
- **投資助言・代理業 vs 投資運用業.** Advice and intermediation only (segment 3) ≠ discretionary management (segment 4). Many regulatory enforcement actions hinge on whether an operator crossed the line into de-facto discretionary management without segment-4 registration.
- **第一種少額電子募集取扱業 vs ordinary Type I.** Lower capital floor in exchange for narrow activity envelope; not a "lighter Type I" — the activity boundary (¥100m issuer cap, ¥500k investor cap) is hard.
- **電子取引基盤運営業 vs PTS approval.** PTS (Article 30, segment 9) handles **listed equities and bonds** under exchange-like price-formation rules; 電子取引基盤運営業 (Article 28 paragraph 8 item 4, segment 6) handles **OTC derivatives** under different transparency rules. Not interchangeable.
- **適格機関投資家等特例業務 (Article 63) ≠ registration.** The Article 63 regime is a **notification**, not registration; operator does not appear in the 1,945 FIBO registrant count. FSA tightened the regime after 2015 retail-investor-loss cases — current rules limit non-QII investors to ≤49 specified persons.
- **暗号資産 spot vs derivatives.** Crypto-asset **spot trading** is regulated under the [[fintech/japan-stablecoin-and-crypto-regulation|PSA 暗号資産交換業]] license (not FIEA). Crypto-asset **derivatives** sit under FIEA Article 2 paragraph 24-style derivative rules (this segment 8). A single corporate group can hold both licenses in separate legal entities.
- **STO / security-token activity.** When a token represents a security under FIEA Article 2 paragraph 3 (e.g. paragraph 3 "tokenized rights"), the activity is regulated under **Type I (segment 1)** with cabinet-office-order security-token rules. Not a separate segment.
- **QII notification ≠ FIBO registration.** QII status (Article 2 paragraph 3 item 1) is a counterparty status, not a license to operate financial-instruments business. A QII can be a financial-instruments business operator and frequently is (insurers, banks, AMs, pension funds), but the two registrations are independent.
- **Investor protection asymmetry.** [[JapanFG/jiipf|JIPF]] coverage is structurally Type I; Type II / 投資助言・代理業 / 投資運用業 / Article 63 do not have the same protection floor. This asymmetry is one of the most important distinctions for a retail investor to understand about FIEA-segment classification.
- **Registry as-of-date drift.** The 1,945 number is from the FSA workbook as of 2026-04-30. Monthly updates can shift segment subtotals by ±1–2% from new registrations, deregistrations, and license-status changes. Always re-verify against the current `kinyushohin.xlsx` for any operator-level claim.

## Related

- [[securities/INDEX]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[securities/japan-online-brokerage-competition]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[securities/japan-prime-brokerage-and-institutional-financing-matrix]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japannext-securities]]
- [[securities/osaka-digital-exchange]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-underwriting-market-structure]]
- [[securities/japan-market-maker-and-liquidity-provider-landscape]]
- [[financial-licenses/securities-license-stack]]
- [[financial-licenses/INDEX]]
- [[financial-regulators/jsda]]
- [[financial-regulators/japan-exchange-group]]
- [[financial-regulators/japan-securities-finance]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/mizuho-securities]]
- [[securities-firms/mufg-mums]]
- [[securities-firms/sbi-securities]]
- [[securities-firms/rakuten-securities]]
- [[securities-firms/monex-group]]
- [[securities-firms/goldman-sachs-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[foreign-financial-institutions/bank-of-america-japan]]
- [[asset-managers/nomura-asset-management]]
- [[asset-managers/asset-management-one]]
- [[asset-managers/mufg-asset-management]]
- [[asset-managers/sbi-asset-management]]
- [[INDEX|FinWiki index]]

## Sources

- FSA, 金融商品取引業者登録一覧, `kinyushohin.xlsx`, as of 2026-04-30.
- FSA English, "Financial Instruments Business Operators (FIBO)" registry `fibo.xlsx` / `fibo.pdf`.
- FSA, "金融商品取引法のあらまし" (FIEA outline) and English FIEA translation.
- FSA, FAQ on FIEA section 06 (financial instruments business operators).
- FSA, 金融商品取引業者登録規則 cabinet office order (registration rules).
- FSA, 主要行等向けの総合的な監督指針, 金融商品取引業者等向けの総合的な監督指針.
- JSDA (日本証券業協会), member-firm directory and self-regulatory rule pages.
- JIAA (第二種金融商品取引業協会), member directory.
- JIAA-advisory (日本投資顧問業協会), member directory and 投資一任 / 投資助言 statistical aggregates.
- JITA (投資信託協会), member directory and industry statistics.
- JVCEA (Japan Virtual and Crypto-Assets Exchange Association), member-firm overlap with FIEA crypto-derivatives operators.
- Japanese Law Translation portal (japaneselawtranslation.go.jp), Financial Instruments and Exchange Act English translation.
