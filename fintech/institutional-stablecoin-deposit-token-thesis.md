---
title: 機関決済の digital money 選択 —— 預金トークン・stablecoin・tokenized reserves
aliases: [institutional-deposit-token, deposit-token-thesis]
domain: fintech
kind: knowledge
topic: institutional-stablecoin-deposit-token-thesis
created: 2026-05-12
last_updated: 2026-07-30
last_tended: 2026-07-30
review_by: 2026-09-21
confidence: likely
status: active
tags: [fintech, stablecoin, institutional]
sources:
  - "https://www.bis.org/about/bisih/topics/fmis/agora.htm"
  - "https://www.bis.org/publ/othp110.pdf"
  - "https://www.jpmorgan.com/kinexys/digital-payments/jpm-coin"
  - "https://www.jpmorgan.com/payments/newsroom/kinexys-milestones-2026"
  - "https://www.circle.com/pressroom/circle-announces-usdc-smart-contract-for-transfers-by-blackrocks-buidl-fund-investors"
  - "https://investors.securitize.io/news/news-details/2024/BlackRock-Launches-Its-First-Tokenized-Fund-BUIDL-on-the-Ethereum-Network-03-20-2024/default.aspx"
  - "https://www.bis.org/cpmi/publ/d215.htm"
---

# 機関決済の digital money 選択


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 機関決済では participant eligibility、issuer liability、redemption、settlement finality、sanctions / AML、DvP / PvP、liquidity を同時に満たす必要がある。銀行発行の預金トークンは有力な設計だが、唯一の解ではない。JPM Coin は bank-issued deposit token として機関向けに提供され、BIS Project Agorá は tokenized commercial bank deposits と tokenized central bank reserves の組合せを実証した。一方、BlackRock BUIDL の qualified investors 向け off-ramp に USDC が使われる例もあり、「public-chain stablecoin は機関市場に構造上入れない」とは言えない。^[source:J.P. Morgan JPM Coin; BIS Project Agorá report 2026-05-27; Circle BUIDL-USDC announcement 2024-04-11]

## Conclusion

機関市場と retail / crypto market は access control と legal wrapper が異なり得るが、同じ token や public chain が両方の workflow に現れる場合もある。分類は user label ではなく holder claim と operating controls で行う。

**Digital settlement asset comparison**: ^[source:J.P. Morgan JPM Coin; BIS Project Agorá; Circle and Securitize BUIDL announcements; BIS CPMI-IOSCO stablecoin guidance]

| 形態 | Holder claim / issuer | Access・control | 公開事例 | 主な境界 |
|---|---|---|---|---|
| Bank deposit token | commercial bank deposit に対する claim。発行銀行の balance sheet / credit risk | bank onboarding、approved counterparties、transaction monitoring | [[fintech/jpmorgan-jpmd-coin|JPM Coin]] は Base 上の deposit token として payment、collateral、settlement use case を案内 | 単一銀行 liquidity、interbank interoperability、deposit-law treatment を確認 |
| Tokenized commercial bank deposit + reserves | commercial bank deposit と central bank reserve を shared platform 上で連携 | participating central / commercial banks、embedded compliance | BIS Project Agorá prototype | production deployment、governance、legal finality は実装ごとに確認 |
| Regulated payment stablecoin | issuer に対する redemption claim と reserve arrangement | chain transfer は open でも mint / redeem、venue、application は KYC / allowlist を持ち得る | BUIDL holders が shares を Circle に transfer して USDC を受け取る smart-contract off-ramp | issuer / reserve risk、jurisdiction、wallet eligibility、settlement finality |
| Wholesale CBDC / tokenized reserves | central bank liability | 原則として eligible institutions | Project Agorá の settlement leg | end-user access は限定。commercial bank money との接続が必要 |
| Tokenized MMF share | fund / security に対する持分で、deposit や stablecoin ではない | securities eligibility、transfer restrictions、qualified investors | BlackRock BUIDL | NAV、redemption、market / liquidity risk。cash leg と区別 |

## Reasoning

- **KYC は token label だけで決まらない**。Issuer onboarding、wallet screening、venue rule、asset allowlist、counterparty eligibility を workflow 全体で確認する。
- **Public chain と permissionless access は同義ではない**。JPM Coin は Base 上にある一方、J.P. Morgan は vetted / approved counterparties のみが transact すると説明する。
- **預金トークンの利点**は、既存 bank deposit framework、bank balance sheet、on/off-ramp、treasury integration を一体化しやすいこと。欠点は issuer-specific liquidity と interoperability である。
- **stablecoin の機関利用は実在する**。BUIDL-USDC off-ramp は限定された workflow の evidence であり、すべての securities settlement に USDC が適格だという意味ではない。
- **wholesale settlement は複数形**。Project Agorá は commercial bank deposits と central bank reserves を組み合わせるため、「deposit token 単独のみ」という設計ではない。
- 旧版の「1 案件 200–300 億円」「DTCC / Nasdaq / Broadridge の全案件は retail stablecoin に接続しない」は、対象 transaction と一次資料が示されていなかったため削除した。規模比較には [[fintech/tokenized-deposit-cumulative-volume-scale|TD 累計量級]] の期間・定義を個別に検証する。

## Applicable When

- 機関向け payment / securities settlement の cash leg を比較するとき。
- deposit token、stablecoin、wholesale CBDC、tokenized MMF を同じ「デジタルドル」と一括りにしないため。
- public / private chain ではなく、participant control と legal claim を基準に architecture を選ぶとき。
- [[fintech/jp-stablecoin-progmat|Project Pax]] や [[banking/minna-bank-baas-model|TD/SC]] を評価するときは、proposal / pilot / production、issuer、legal form、chain、eligible user を分ける。

## Sources

- [J.P. Morgan — JPM Coin](https://www.jpmorgan.com/kinexys/digital-payments/jpm-coin) / [Kinexys 2026 milestones](https://www.jpmorgan.com/payments/newsroom/kinexys-milestones-2026) — deposit-token claim、access controls、institutional use cases、Base deployment。
- [BIS — Project Agorá](https://www.bis.org/about/bisih/topics/fmis/agora.htm) / [2026 report](https://www.bis.org/publ/othp110.pdf) — tokenized central bank reserves と commercial bank deposits の prototype。
- [Circle — BUIDL holders の USDC transfer](https://www.circle.com/pressroom/circle-announces-usdc-smart-contract-for-transfers-by-blackrocks-buidl-fund-investors) — institutional fund workflow における USDC off-ramp。
- [Securitize — BlackRock BUIDL launch](https://investors.securitize.io/news/news-details/2024/BlackRock-Launches-Its-First-Tokenized-Fund-BUIDL-on-the-Ethereum-Network-03-20-2024/default.aspx) — qualified investors、fund-share structure。
- [BIS CPMI-IOSCO — Application of PFMI to stablecoin arrangements](https://www.bis.org/cpmi/publ/d215.htm) — stablecoin arrangement の governance / settlement risk。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーンファイナンスとクリプトの DNA 分離]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 三層構造]]
- [[fintech/retail-stablecoin-dual-bind|リテール SC 二律背反]]
- [[banking/minna-bank-baas-model|みんなの銀行 BaaS モデル]]
<!-- /wiki-links:managed -->
