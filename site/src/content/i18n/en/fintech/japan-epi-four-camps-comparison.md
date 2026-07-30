---
source: fintech/japan-epi-four-camps-comparison
source_hash: 4d48dbd1752ee1b9
lang: en
status: machine
fidelity: ok
title: "Four routes for Japanese stablecoins — issuer / distributor / platform / pilot"
translated_at: 2026-07-30T02:10:00+09:00
---

# Four routes for Japanese stablecoins — issuer / distributor / platform / pilot

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] and compares Japanese stablecoin projects by legal role and current implementation stage. Read [[fintech/japan-epi-three-types-overview|Japan's three EPI issuance routes]] for the statutory routes and [[fintech/japan-stablecoin-regulatory-landscape|the three-layer structure of Japan's stablecoin regime]] for the distinction among issuers, distributors, and platforms.

> [!info] TL;DR
> The “four camps” are not a statutory classification. As of July 30, 2026, the comparable routes are (1) JPYC issuance by a funds-transfer service provider, (2) distribution of registered electronic payment instruments by SBI VC Trade, (3) the Progmat / Project Pax platform and bank pilots, and (4) Minna Bank's joint study of stablecoin use on Solana. These routes differ in both role and implementation stage. SBI Circle Holdings is a joint venture for promoting USDC, while SBI VC Trade is the registered operator on the FSA list; they should not be treated as the same entity. The U.S. GENIUS Act does not automatically approve Japanese products, and no official ranking exists.

## Current map

| Route | Legal / operational role | Status established as of 2026-07-30 | Verification caution |
|---|---|---|---|
| **[[payment-firms/jpyc\|JPYC]]** | JPYC Inc. issues and redeems a yen-denominated electronic payment instrument under the funds-transfer-service-provider route | Kanto Local Finance Bureau registration No. 00099. JPYC and the JPYC EX issuance / redemption portal launched on 2025-10-27 | The former JPYC Prepaid was a prepaid payment instrument and is a different product from the electronic payment instrument JPYC |
| **SBI VC Trade / SBI Circle Holdings** | SBI VC Trade is an electronic payment instruments service provider. SBI Circle Holdings is a joint venture between SBI and Circle to promote USDC | The sole operator on the FSA list is SBI VC Trade (Kanto Local Finance Bureau registration No. 00001), and its handled-assets field lists USDC, RLUSD, and JPYSC. SBI Circle Holdings was established in 2025-08 | Distinguish the joint venture, the registered distributor, USDC issuer Circle, RLUSD issuer Standard Custody, and JPYSC issuer SBI Shinsei Trust Bank |
| **[[payment-firms/progmat\|Progmat]] / Project Pax** | Provides the Progmat Coin and cross-border remittance platform, while banks, trust banks, Datachain, and others take project-specific roles | The joint issuance and cross-border settlement project announced in 2025-11 is supported by the FSA FinTech Proof-of-Concept Hub. It is not blanket approval for commercial issuance | Progmat is a platform provider, not the legal issuer of every coin |
| **Minna Bank** | Studying use of its banking app, Web3 wallets, and stablecoins on Solana | Began a joint study toward commercialization with Solana Japan, Fireblocks, and TIS in 2025-07 | Do not treat technical validation and use-case research as an issued product or registered distribution service |

Sources: the FSA [list of electronic payment instruments service providers](https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx) and [list of funds-transfer service providers](https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf) (accessed 2026-07-30), [JPYC launch release](https://corporate.jpyc.co.jp/news/posts/jpyc-ex-launch), [establishment of SBI Circle Holdings](https://www.sbigroup.co.jp/news/2025/0822_15679.html), [SBI VC Trade pre-contract disclosure](https://www.sbivc.co.jp/assets/docs/manual_tt.pdf), [Progmat joint-pilot announcement](https://progmat.co.jp/wp-content/uploads/2025/11/20251106_%E3%83%97%E3%83%AC%E3%82%B9%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9_%E3%80%8C%E8%A4%87%E6%95%B0%E3%81%AE%E9%8A%80%E8%A1%8C%E3%81%AB%E3%82%88%E3%82%8B%E5%85%B1%E5%90%8C%E3%81%A7%E3%81%AE%E3%82%B9%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%82%B3%E3%82%A4%E3%83%B3%E7%99%BA%E8%A1%8C%E3%81%A8%E3%82%AF%E3%83%AD%E3%82%B9%E3%83%9C%E3%83%BC%E3%83%80%E3%83%BC%E6%B1%BA%E6%B8%88%E3%81%AE%E9%AB%98%E5%BA%A6%E5%8C%96%E3%81%AB%E4%BF%82%E3%82%8B%E3%80%8D.pdf), and [Minna Bank joint-study announcement](https://corporate.minna-no-ginko.com/information/corporate/2025/07/04/696/).

## Why there is no ranking

The four routes are not the same competitive unit. JPYC is an issuer and redeemer, SBI VC Trade is a registered distributor, Progmat is a platform provider, and the Minna Bank project is in a study / pilot stage. Combining circulation, targets, executive names, and chain choice into one score to select a “No. 1” would conflate regulatory role with implementation stage.

Inclusion on an FSA list also does not mean that the FSA guarantees or recommends an instrument's value. Registration numbers, handled assets, and issuers can change, so record the list's access date.

## U.S. law does not create an automatic Japan route

The U.S. GENIUS Act (Public Law 119-27) contains no “§501(d) listing.” Comparability determinations and registration procedures concerning foreign issuers and foreign regimes appear principally in section 18 and require a determination by the Treasury Secretary, OCC registration of a foreign issuer, and conditions concerning reserves, supervision, AML, and other matters. Bilateral arrangements also require public procedures. Distribution of USDC in Japan does not automatically approve JPYC or another yen-denominated product in the United States.

Source: [Public Law 119-27, sections 18 and 20](https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf).

## Verification sequence

1. Identify the issuer and its legal issuance basis.
2. Confirm the registered operator responsible for distribution, exchange, or custody on the FSA list.
3. Separate the roles of platform provider, trustee, bank, and wallet provider.
4. Record “study,” “pilot,” “issuance launch,” and “general availability” as different states.
5. For cross-border use, separately verify issuer, distribution, and registration requirements in the other country.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-epi-three-types-overview|Overview of Japan's three EPI types]]
- [[fintech/jp-trust-type-sc-architecture|Japan trust-type stablecoin architecture]]
- [[fintech/jurisdiction-list-monetary-protectionism|Jurisdiction lists and monetary protectionism]]
- [[fintech/three-circles-stablecoin-mra-framework|US/EU/Japan stablecoin market-access comparison]]
<!-- /wiki-links:managed -->

## Sources

- FSA list of electronic payment instruments service providers: https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx
- FSA list of funds-transfer service providers: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
- JPYC launch release: https://corporate.jpyc.co.jp/news/posts/jpyc-ex-launch
- Establishment of SBI Circle Holdings: https://www.sbigroup.co.jp/news/2025/0822_15679.html
- SBI VC Trade pre-contract disclosure: https://www.sbivc.co.jp/assets/docs/manual_tt.pdf
- Progmat joint pilot: https://progmat.co.jp/wp-content/uploads/2025/11/20251106_%E3%83%97%E3%83%AC%E3%82%B9%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9_%E3%80%8C%E8%A4%87%E6%95%B0%E3%81%AE%E9%8A%80%E8%A1%8C%E3%81%AB%E3%82%88%E3%82%8B%E5%85%B1%E5%90%8C%E3%81%A7%E3%81%AE%E3%82%B9%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%82%B3%E3%82%A4%E3%83%B3%E7%99%BA%E8%A1%8C%E3%81%A8%E3%82%AF%E3%83%AD%E3%82%B9%E3%83%9C%E3%83%BC%E3%83%80%E3%83%BC%E6%B1%BA%E6%B8%88%E3%81%AE%E9%AB%98%E5%BA%A6%E5%8C%96%E3%81%AB%E4%BF%82%E3%82%8B%E3%80%8D.pdf
- Minna Bank joint study: https://corporate.minna-no-ginko.com/information/corporate/2025/07/04/696/
- Public Law 119-27: https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf
