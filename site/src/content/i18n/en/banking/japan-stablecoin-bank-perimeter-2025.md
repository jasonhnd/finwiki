---
source: banking/japan-stablecoin-bank-perimeter-2025
source_hash: 7735502744a0ba8e
lang: en
model: source-language-sync
status: machine
fidelity: ok
title: "Japan stablecoin / BaaS bank perimeter (2025–2026)"
translated_at: 2026-07-29T03:30:48.110Z
---

# Japan stablecoin / BaaS bank perimeter (2025–2026)

## Wiki route

This entry sits under [[banking/INDEX|banking index]] as the bank-side perimeter view of the Japan stablecoin / electronic-payment-instrument (EPI) regulatory architecture. Read it with [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]] for the fintech-side perimeter view, with the platform anchor [[payment-firms/progmat|Progmat]] and the issuer anchors [[payment-firms/jpyc|JPYC]] · [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade USDC distribution]], with [[fintech/jp-stablecoin-progmat|jp-stablecoin-progmat detailed]] · [[fintech/jp-trust-type-sc-architecture|jp trust-type SC architecture]] · [[fintech/jp-stablecoin-dcjpy|jp-stablecoin-dcjpy]] · [[fintech/japan-stablecoin-2026-event-tracker|Japan stablecoin 2026 event tracker]] · [[fintech/japan-epi-three-types-overview|Japan EPI three types overview]] · [[fintech/japan-epi-four-camps-comparison|Japan EPI four camps comparison]] · [[fintech/institutional-stablecoin-deposit-token-thesis|institutional stablecoin deposit-token thesis]], and with the BaaS framework at [[banking/baas-japan-landscape|BaaS Japan landscape]] · [[banking/japan-baas-operating-models|Japan BaaS operating models]]. For license-stack context route through [[financial-licenses/payment-license-stack|payment license stack]] · [[financial-licenses/bank-license-and-baas-boundary|bank license / BaaS boundary]].

## TL;DR

Japan's public-source perimeter distinguishes bank deposit tokens from electronic payment instruments (電子決済手段) under the Payment Services Act. The FSA explains that a category-1 EPI issuer may use the funds-transfer-business route, while a category-3 trust-beneficiary-right EPI may be issued by a licensed or registered trust company **or** an authorised trust financial institution; the trust route is therefore not limited to trust banks. Distribution or exchange requires separate electronic-payment-instrument service-provider registration. The FSA workbook dated 2026-06-24 lists one such operator, SBI VC Trade, and identifies USDC, RLUSD, and JPYSC in its handled-instrument field. Progmat supplies institutional tokenisation infrastructure rather than replacing the legal issuer, and Hokkokubank's official release records the 2024-04-01 launch of the deposit-based 「トチカ」 service. ^[Sources: https://www.fsa.go.jp/news/27/sonota/20151214-2.html; https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx; https://progmat.co.jp/about/; https://www.hokkokubank.co.jp/other/news/2024/pdf/20240401a.pdf.]

## 1. The three-layer perimeter

| Layer | Official route | Confirmed perimeter | Required current check |
|---|---|---|---|
| Deposit-based token / payment service | Banking Act and product-specific legal analysis | A service may represent a bank deposit on a digital rail while the underlying claim remains a deposit | Product terms, deposit status, transfer conditions, and deposit-insurance treatment |
| Category-1 EPI issuance | Funds-transfer-business registration is one example identified by the FSA | Issuance and funds-transfer obligations sit with the registered issuer | Current issuer registration and instrument terms |
| Category-3 trust-beneficiary-right EPI issuance | Licensed / registered trust company plus filing, or authorised trust financial institution plus filing | The FSA route is not limited to trust banks | Exact issuer, trust authorisation, filing, and trust terms |
| EPI sale, exchange, intermediation, or management | Electronic-payment-instrument service-provider registration | Registration is activity-specific and separate from issuance | Current FSA register and handled-instrument field |
| EPI / crypto-asset service intermediary | New regime effective 2026-06-01 | A registered intermediary may mediate specified transactions for an affiliated registered operator | Affiliated operator, permitted activity, and current registration |

Sources: ^[FSA FinTech FAQ Q9-1 to Q9-6, https://www.fsa.go.jp/news/27/sonota/20151214-2.html; FSA service-intermediary regime, https://www.fsa.go.jp/common/shinsei/denanchuukai/index.html; Payment Services Act, https://elaws.e-gov.go.jp/document?lawid=421AC0000000059.]

### Deposit token — within the standard bank deposit regime

“Deposit token” is a product / architecture label, not enough by itself to determine legal treatment. Confirm from the bank's terms whether the customer claim remains a deposit, who may transfer it, how it is redeemed, and which protections apply.

| Verification question | Primary evidence |
|---|---|
| Is the customer's legal claim a bank deposit? | Bank product terms and applicable Banking Act disclosure |
| Who may hold and transfer the token? | Current product terms and system rules |
| Does deposit insurance apply? | Product terms and Deposit Insurance Corporation / regulator guidance |
| Is another registration required for an intermediary? | FSA register and activity-specific legal analysis |

Sources: ^[FSA licensed-bank register, https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx; issuer product terms; Deposit Insurance Corporation guidance where applicable.]

### Category-1 EPI issuance route

The FSA FAQ gives funds-transfer-business registration as an example of the procedure for issuing a category-1 EPI. Do not relabel the category as a generic “bank-issued deposit EPI” without instrument-specific legal documentation.

| Verification question | Primary evidence |
|---|---|
| Which statutory EPI category applies? | Issuer legal documents and FSA guidance |
| Which entity is the issuer? | Current register, filing, and instrument terms |
| Which entity sells, exchanges, mediates, or manages it? | FSA EPI service-provider register |
| What redemption and safeguarding terms apply? | Instrument terms and statutory disclosure |

Sources: ^[FSA FinTech FAQ Q9, https://www.fsa.go.jp/news/27/sonota/20151214-2.html; current FSA EPI service-provider register.]

### Trust-type EPI (信託型) — the institutional-platform lane

For a category-3 trust-beneficiary-right EPI, the FSA identifies two possible issuer routes: a licensed / registered trust company with the required filing, or an authorised trust financial institution with the required filing. A technology platform is not automatically the legal issuer.

| Verification question | Primary evidence |
|---|---|
| Is the issuer a trust company or authorised trust financial institution? | FSA route, licence / authorisation, and required filing |
| What is the trust property and holder right? | Trust deed and instrument terms |
| Who operates the technical platform? | Platform and issuer contracts / announcements |
| Who performs distribution or management? | Current FSA EPI service-provider register |

Sources: ^[FSA FinTech FAQ Q9-1, https://www.fsa.go.jp/news/27/sonota/20151214-2.html; instrument-specific trust and issuer disclosures.]

## 3. Issuer / distributor anchor map (2025–2026)

| Initiative / registry surface | Confirmed public fact | Status source | Do not infer |
|---|---|---|---|
| FSA EPI service-provider register | The 2026-06-24 workbook lists SBI VC Trade and handled instruments USDC, RLUSD, and JPYSC | Current FSA workbook | That the count or handled-instrument list is unchanged after the retrieval date |
| FSA service-intermediary regime | New intermediary regime began on 2026-06-01 | FSA regime page and future register | That an intermediary is an issuer, principal dealer, or custodian |
| [[payment-firms/progmat|Progmat]] | Official materials describe a tokenisation platform and concept | Progmat company / dated project announcement | Issuance, launch, issuer, or distribution status without an instrument-specific announcement |
| [[payment-firms/jpyc|JPYC]] | Corporate and product facts shown on its current official pages | FSA registers plus issuer documents | A historic or planned legal status as current |
| 北國銀行「トチカ」 | Official bank release records service launch on 2024-04-01 | Bank release and current product terms | That every deposit token has the same legal or transfer design |
| [[fintech/jp-stablecoin-dcjpy|DCJPY]] | Initiative facts shown in dated official project materials | Current issuer / operator announcement | A live multi-bank product or participant list without current confirmation |

Sources: ^[FSA EPI service-provider workbook, https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx; FSA intermediary regime, https://www.fsa.go.jp/common/shinsei/denanchuukai/index.html; Progmat official pages; 北國銀行 launch release, https://www.hokkokubank.co.jp/other/news/2024/pdf/20240401a.pdf.]

### Why platform-provider ≠ issuer

- Progmat's regulatory burden is that of a technology and operating-platform provider, not a regulated financial institution.
- Issuer status (and the corresponding 改正資金決済法 obligations) sits with the trust bank — keeping the consumer-protection and SC-redemption obligations on a regulated bank balance sheet.
- Multiple trust banks can act as issuers on the same Progmat platform, enabling broader institutional adoption without bottlenecking on a single issuer.

This pattern mirrors the way [[banking/baas-japan-landscape|BaaS]] separates the **partner brand** (UX layer) from the **bank** (license + balance sheet); Progmat separates the **platform** (technology) from the **issuer** (license + backing assets).

### What regional banks can and cannot do

- For a deposit-based product, confirm the bank, customer claim, product terms, and every participating intermediary.
- For category-1 EPI issuance, confirm the funds-transfer or other applicable issuer route identified in official documents.
- For category-3 EPI issuance, confirm whether the issuer is a licensed / registered trust company or an authorised trust financial institution and whether the required filing was made.
- A bank's participation in a consortium or technology pilot does not prove that it is an issuer or that a product is live.

### BaaS partner-channel distribution

1. **EPI activity check.** Selling, exchanging, mediating, or managing EPI may require electronic-payment-instrument service-provider registration; from 2026-06-01, specified mediation for an affiliated operator may use the new intermediary route. Determine the actual activity and legal entity. ^[Sources: https://www.fsa.go.jp/news/27/sonota/20151214-2.html; https://www.fsa.go.jp/common/shinsei/denanchuukai/index.html; https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx.]
2. **Deposit-token integration.** Confirm the underlying bank-deposit terms, legal entities, and intermediary roles for each implementation. 北國銀行's official release confirms the 2024-04-01 launch of 「トチカ」; it does not establish the status of other initiatives.

## 6. Deposit-token vs stablecoin — the operational boundary

| Dimension | Deposit-based token / service | EPI |
|---|---|---|
| Legal claim | Verify that the customer claim remains a bank deposit | Verify the applicable statutory EPI category and instrument terms |
| Issuer | Bank identified in the product terms | Category-1 or category-3 route identified in the issuer documents |
| Distribution / management | Activity-specific analysis; a third party may need its own permission | EPI service-provider registration generally applies to covered sale, exchange, intermediation, or management |
| Intermediary route | Check banking / payment permissions for the actual activity | 2026 service-intermediary route may apply to specified mediation for an affiliated operator |
| Deposit insurance | Confirm from deposit terms and applicable official guidance | Do not assume deposit insurance; use the instrument's statutory safeguarding structure |
| Transfer and redemption | Product-specific | Instrument-specific |

Sources: ^[FSA FinTech FAQ Q9, https://www.fsa.go.jp/news/27/sonota/20151214-2.html; Payment Services Act; FSA service-intermediary regime page.]

## 7. The four EPI camps (cross-cutting summary)

| Research lane | Authoritative status check | Key distinction |
|---|---|---|
| Category-1 EPI issuer | FSA funds-transfer register plus issuer terms | Issuance is distinct from distribution |
| Category-3 trust EPI issuer | Trust licence / authorisation, filing, and instrument terms | Trust company route is not limited to trust banks |
| EPI service provider | Current FSA register and handled-instrument field | Registered activity is distinct from issuance |
| EPI / crypto service intermediary | New-regime register and affiliated operator | Mediation for an operator is distinct from principal dealing or custody |
| Deposit-based token | Bank product terms, FSA bank register, and official launch notice | Deposit status and transfer design are product-specific |
| Technology platform | Platform and instrument-specific announcements | Platform operator is not automatically issuer or distributor |

Sources: ^[FSA registers and FinTech FAQ; FSA 2026 intermediary-regime page; official issuer and platform materials.]

For deeper comparison of the four camps and three issuer types, see [[fintech/japan-epi-four-camps-comparison|Japan EPI four camps comparison]] and [[fintech/japan-epi-three-types-overview|Japan EPI three types overview]].

## Related

- [[banking/INDEX]]
- [[banking/baas-japan-landscape]]
- [[banking/japan-baas-operating-models]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/minna-bank-baas-model]]
- [[banking/mercari-bank-license-stack]]
- [[banking/gmo-aozora-net-bank]]
- [[banking/japan-net-bank-competition-map]]
- [[banking/post-megabank-positioning]]
- [[payment-firms/progmat]]
- [[payment-firms/jpyc]]
- [[megabanks/mufg]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[financial-licenses/payment-license-stack]]
- [[financial-licenses/bank-license-and-baas-boundary]]
- [[fintech/japan-stablecoin-regulatory-landscape]]
- [[fintech/jp-stablecoin-progmat]]
- [[fintech/jp-trust-type-sc-architecture]]
- [[fintech/jp-stablecoin-dcjpy]]
- [[fintech/japan-stablecoin-2026-event-tracker]]
- [[fintech/japan-epi-three-types-overview]]
- [[fintech/japan-epi-four-camps-comparison]]
- [[fintech/institutional-stablecoin-deposit-token-thesis]]
- [[fintech/stablecoin-channel-japan-sbi-jpyc-ring]]
- [[exchanges/jp-exchange-jpyc]]
- [[exchanges/jp-exchange-sbi-vc-trade]]

## Sources

- FSA registered EPI service providers list (https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx).
- FSA registered funds-transfer service providers list (https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf).
- FSA licensed bank list (https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx).
- 資金決済に関する法律 — 改正資金決済法 (e-Gov 法令検索: https://elaws.e-gov.go.jp/document?lawid=421AC0000000059).
- Progmat company outline / concept / press releases (https://progmat.co.jp/about/, https://progmat.co.jp/concept/, https://progmat.co.jp/en/news/2023-09-11-press/).
- JPYC corporate site (https://jpyc.co.jp/).
- SBI VC Trade USDC product page (https://www.sbivc.co.jp/usdc).
- 北國銀行 news release「日本初、預金型ステーブルコイン『トチカ』のサービス開始について」(2024-04-01, https://www.hokkokubank.co.jp/other/news/2024/pdf/20240401a.pdf) — 地銀預金トークン先行事例。
- FSA「電子決済手段・暗号資産サービス仲介業を行うみなさまへ」(https://www.fsa.go.jp/common/shinsei/denanchuukai/index.html) — 2026-06-01開始の新制度。
