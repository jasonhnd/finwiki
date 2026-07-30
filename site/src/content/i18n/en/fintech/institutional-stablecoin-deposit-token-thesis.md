---
source: fintech/institutional-stablecoin-deposit-token-thesis
source_hash: a2e5da9b41049716
lang: en
status: machine
fidelity: ok
title: "Choosing digital money for institutional settlement"
translated_at: 2026-07-30T00:00:00+09:00
---

# Choosing digital money for institutional settlement


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|Japan's financial-regulation framework for tokens, cryptoassets, and payments]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|the three-layer structure of Japan's stablecoin regime]] for the broader system boundary.

> [!info] TL;DR
> Institutional settlement must satisfy participant eligibility, issuer liability, redemption, settlement finality, sanctions / AML, DvP / PvP, and liquidity at the same time. A bank-issued deposit token is one strong design, but not the only solution. JPM Coin is offered to institutions as a bank-issued deposit token, while BIS Project Agorá tested a combination of tokenized commercial-bank deposits and tokenized central-bank reserves. USDC is also used as an off-ramp for qualified investors in BlackRock's BUIDL fund, so it is incorrect to say that public-chain stablecoins are structurally unable to enter institutional markets. ^[source:J.P. Morgan JPM Coin; BIS Project Agorá report 2026-05-27; Circle BUIDL-USDC announcement 2024-04-11]

## Conclusion

Institutional markets and retail / crypto markets may have different access controls and legal wrappers, but the same token or public chain can appear in both workflows. Classification should use the holder's claim and operating controls, not a user label.

**Digital settlement asset comparison**: ^[source:J.P. Morgan JPM Coin; BIS Project Agorá; Circle and Securitize BUIDL announcements; BIS CPMI-IOSCO stablecoin guidance]

| Form | Holder claim / issuer | Access and control | Public example | Main boundary |
|---|---|---|---|---|
| Bank deposit token | Claim on a commercial-bank deposit; issuing bank's balance sheet / credit risk | Bank onboarding, approved counterparties, transaction monitoring | [[fintech/jpmorgan-jpmd-coin|JPM Coin]] is described as a deposit token on Base for payment, collateral, and settlement use cases | Check single-bank liquidity, interbank interoperability, and deposit-law treatment |
| Tokenized commercial-bank deposit + reserves | Commercial-bank deposits connected with central-bank reserves on a shared platform | Participating central / commercial banks, embedded compliance | BIS Project Agorá prototype | Check production deployment, governance, and legal finality for each implementation |
| Regulated payment stablecoin | Redemption claim against an issuer plus a reserve arrangement | Even if chain transfer is open, mint / redeem, venues, and applications can have KYC / allowlists | BUIDL holders transfer shares to Circle and receive USDC through a smart-contract off-ramp | Issuer / reserve risk, jurisdiction, wallet eligibility, settlement finality |
| Wholesale CBDC / tokenized reserves | Central-bank liability | Generally eligible institutions | Settlement leg in Project Agorá | End-user access is limited; connection to commercial-bank money is required |
| Tokenized MMF share | Interest in a fund / security; neither a deposit nor a stablecoin | Securities eligibility, transfer restrictions, qualified investors | BlackRock BUIDL | NAV, redemption, market / liquidity risk; distinguish it from the cash leg |

## Reasoning

- **KYC is not determined by the token label alone**. Review issuer onboarding, wallet screening, venue rules, asset allowlists, and counterparty eligibility across the entire workflow.
- **Public chain is not synonymous with permissionless access**. JPM Coin is on Base, while J.P. Morgan says only vetted / approved counterparties may transact.
- **A deposit token's advantages** are that it can integrate the existing bank-deposit framework, bank balance sheet, on/off-ramp, and treasury operations. Its disadvantages include issuer-specific liquidity and interoperability.
- **Institutional stablecoin use exists**. The BUIDL-USDC off-ramp is evidence for a bounded workflow; it does not mean USDC is eligible for every securities settlement.
- **Wholesale settlement is plural**. Project Agorá combines commercial-bank deposits and central-bank reserves; it is not a "deposit-token-only" design.
- The prior claims that each transaction was JPY 20-30 billion and that every DTCC / Nasdaq / Broadridge project excludes retail stablecoins were removed because no covered transaction or primary source was identified. Any scale comparison must separately verify the period and definition in [[fintech/tokenized-deposit-cumulative-volume-scale|tokenized-deposit cumulative scale]].

## Applicable When

- Comparing the cash leg for institutional payment / securities settlement.
- Avoiding the treatment of deposit tokens, stablecoins, wholesale CBDCs, and tokenized MMFs as one generic "digital dollar."
- Selecting an architecture by participant controls and legal claims, rather than by public / private chain.
- When evaluating [[fintech/jp-stablecoin-progmat|Project Pax]] or [[banking/minna-bank-baas-model|TD/SC]], separate proposal / pilot / production, issuer, legal form, chain, and eligible user.

## Sources

- [J.P. Morgan — JPM Coin](https://www.jpmorgan.com/kinexys/digital-payments/jpm-coin) / [Kinexys 2026 milestones](https://www.jpmorgan.com/payments/newsroom/kinexys-milestones-2026) — deposit-token claim, access controls, institutional use cases, and Base deployment.
- [BIS — Project Agorá](https://www.bis.org/about/bisih/topics/fmis/agora.htm) / [2026 report](https://www.bis.org/publ/othp110.pdf) — prototype combining tokenized central-bank reserves and commercial-bank deposits.
- [Circle — USDC transfer for BUIDL holders](https://www.circle.com/pressroom/circle-announces-usdc-smart-contract-for-transfers-by-blackrocks-buidl-fund-investors) — a USDC off-ramp in an institutional fund workflow.
- [Securitize — BlackRock BUIDL launch](https://investors.securitize.io/news/news-details/2024/BlackRock-Launches-Its-First-Tokenized-Fund-BUIDL-on-the-Ethereum-Network-03-20-2024/default.aspx) — qualified investors and fund-share structure.
- [BIS CPMI-IOSCO — Application of PFMI to stablecoin arrangements](https://www.bis.org/cpmi/publ/d215.htm) — governance and settlement risk in stablecoin arrangements.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|DNA separation between on-chain finance and crypto]]
- [[fintech/japan-stablecoin-regulatory-landscape|Japan's three-layer stablecoin structure]]
- [[fintech/retail-stablecoin-dual-bind|Retail stablecoin dual bind]]
- [[banking/minna-bank-baas-model|Minna Bank BaaS model]]
<!-- /wiki-links:managed -->
