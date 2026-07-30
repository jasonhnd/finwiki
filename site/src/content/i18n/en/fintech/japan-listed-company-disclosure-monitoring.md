---
source: fintech/japan-listed-company-disclosure-monitoring
source_hash: 5bdafa61b1914287
lang: en
status: machine
fidelity: ok
title: "Japan Listed Company Disclosure Monitoring SOP (17  Channels)"
translated_at: 2026-07-30T02:03:00+09:00
---

# Japan Listed Company Disclosure Monitoring SOP (17  Channels)

> [!info] Core insight
> A **three-tier monitoring channel map — official + aggregator + overseas** — for real-time monitoring of Japan listed company timely disclosures ([[fintech/japan-third-party-allotment-5-step-flow|第三者割当]] · earnings · acquisitions · IR, etc.).

TDnet is updated as disclosure events occur; there is no company-wide fixed “15:00 announcement” time. The Tokyo Stock Exchange cash market has closed at 15:30 since 2024-11-05, so monitoring should follow the target company's schedule and actual disclosure events rather than a fixed time. ^[https://www.jpx.co.jp/equities/listing/disclosure/tdnet/; https://www.jpx.co.jp/english/corporate/news/news-releases/0060/20241009-01.html]

## Three-Tier Structure

### Tier 1: Official Sources (Primary · Highest Authority)

The following table covers public disclosure and search services used by issuers and filers. TDnet makes documents available when they are disclosed, and its free viewing service covers 31 days including the disclosure date. Older material is available through the Tokyo Stock Exchange Listed Company Search service (past ten years) or the paid TDnet database. For EDINET and JPX, rely on each service's displayed update time and coverage. ^[https://www.jpx.co.jp/equities/listing/disclosure/tdnet/index.html; https://www.jpx.co.jp/listing/co-search/index.html]

| # | Channel | URL search pattern | Purpose |
|---|---------|---------------|-----|
| 1 | [TDnet Timely Disclosure Information Viewing Service](https://www.release.tdnet.info/inbs/I_main_00.html) | `release.tdnet.info/inbs/I_main_00.html` | Exchange timely disclosures; available when disclosed, with 31 days including the disclosure date on the free service |
| 2 | [EDINET (FSA)](https://disclosure2.edinet-fsa.go.jp/) | `disclosure2.edinet-fsa.go.jp/` | Securities registration statements, extraordinary reports, large-shareholding reports, and other FIEA filings |
| 3 | [Tokyo Stock Exchange Listed Company Search](https://www2.jpx.co.jp/tseHpFront/JJK010010Action.do) | `www2.jpx.co.jp/tseHpFront/JJK010010Action.do` | Listed-company basics, timely disclosures and filings, and corporate-governance information |

### Tier 2: Aggregators (Secondary · Ease of Use)

The services below supplement the primary sources with search, history, visualisation, or presentation transcripts; they are not substitutes for a primary filing. Verify figures, dates, legal entities, and legal status against TDnet, EDINET, JPX, or the issuer's own materials.

| # | Channel | URL pattern | Features |
|---|---------|------------|-----|
| 4 | [Yahoo! Finance Japan](https://finance.yahoo.co.jp/) | `finance.yahoo.co.jp/quote/{code}.T/disclosure` | Security-level disclosure and news browsing |
| 5 | [Nikkei Company Information DIGITAL](https://www.nikkei.com/nkd/) | `nikkei.com/nkd/company/disclose/?scode={code}` | Categorised company information and disclosure documents |
| 6 | [Kabutan (株探)](https://kabutan.jp/) | `kabutan.jp/stock/?code={code}` | Aggregated security news, disclosures, and market data |
| 7 | [Minkabu (みんかぶ)](https://minkabu.jp/) | `minkabu.jp/stock/{code}` | Aggregated security information and user forecasts |
| 8 | [Kaisha Shikiho Online](https://shikiho.toyokeizai.net/) | `shikiho.toyokeizai.net/stocks/{code}/corporate` | Company information, performance data, and Shikiho articles, subject to access terms |
| 9 | [Buffett Code](https://www.buffett-code.com/) | `buffett-code.com/company/{code}/` | Financial-data visualisation and comparison |
| 10 | [FISCO Corporate Information](https://web.fisco.jp/) | `web.fisco.jp/platform/companies/{code}` | Corporate news and market analysis |
| 11 | [Logmi Finance](https://finance.logmi.jp/) | `finance.logmi.jp/companies/{id}` | Transcripts of publicly available earnings presentations and similar events |
| 12 | [Shareholder Benefits Guide (Daiwa IR)](https://yutai-guide.daiwair.co.jp/) | `yutai-guide.daiwair.co.jp/stock/detail/{code}` | Shareholder-benefit information for participating companies |
| 13 | [Ullet](https://www.ullet.com/) | `ullet.com/{code}/EDINET/ranking/stock` | Aggregated major-shareholder and financial data based on EDINET and other sources |

### Tier 3: Overseas Channels (Tertiary · Offshore Reference)

This tier supplements English-language and overseas-investor search routes; it does not guarantee the accuracy or completeness of primary disclosures.

| # | Channel | URL pattern |
|---|---------|------------|
| 14 | CNBC | `cnbc.com/quotes/{code}.T-JP` |
| 15 | Bloomberg Terminal / Web | `bloomberg.com/quote/{code}:JP` |
| 16 | Google Finance | `google.com/finance/quote/{code}:TYO` |
| 17 | Yahoo Finance (US version) | `finance.yahoo.com/quote/{code}.T/` |

## Time-Series SOP (Major Disclosure Day)

### T-1  (Day Before)

- [ ] Create browser bookmark folder "{code} disclosure monitoring"
- [ ] Save 3  core links: TDnet + Yahoo! Japan timely disclosure + EDINET
- [ ] Organise advance information (allocation ratio · issue price, etc.)

### Day of (T=0)

1. **Before market open 8:00**: Check updates and the day's schedule on TDnet, the issuer's IR site, and EDINET
2. **During trading hours (9:00–11:30, 12:30–15:30)**: Continue monitoring TDnet for decisions and facts arising at the target company
3. **Immediately after disclosure**:
   - Search TDnet by company code or name → save original PDF
   - Cross-check advance information against announcement content (allocation ratio · price · purpose)
4. **After disclosure**: Check EDINET for a securities registration statement, extraordinary report, or other filing only when a statutory filing trigger applies
5. **Same-day evening**: Review summaries and message-board reactions on third-party services, then return to primary documents to verify facts

An extraordinary report is a statutory filing required only when a trigger under Article 24-5 of the Financial Instruments and Exchange Act and the Cabinet Office Ordinance on Disclosure of Corporate Affairs applies. TDnet timely-disclosure rules and statutory filing requirements are not identical, so not every timely disclosure is accompanied by an extraordinary report. ^[https://www.jpx.co.jp/glossary/ra/566.html; https://faq.jpx.co.jp/disclo/tse/web/knowledge6736.html]

### T+1  to T+3 

- Check share-price and trading-volume reactions on the Tokyo Stock Exchange
- If the issuer publishes an English disclosure, compare its timing and summary scope with the Japanese original
- Large shareholding report updates → check Ullet

### T+7  to T+30 

- Payment completion report
- Corporate registration amendment announcement
- Share price 30 -day VWAP trend

## File Storage Recommendations

Items to save on disclosure day:
- `research/{date}_disclosure-tdnet-original.pdf` — TDnet original document
- `research/{date}_disclosure-edinet-filing.pdf` — EDINET filing
- `research/{date}_price-reaction.md` — Same-day · T+1 · T+3  price reaction record

## Applicable Scenarios

1. **Tracking portfolio company disclosures**: Third-party allotments · capital increases · mergers · earnings forecast revisions
2. **Obtaining competitor information**: Earnings and strategy announcements from peers
3. **M&A due diligence**: Past 5 -year disclosure history of acquisition candidates — see [[finance/japan-tender-offer-process|日本公開買付プロセス]] for connection to TOB regulation
4. **IR compliance**: Pre-simulation before issuance announcements
5. **Large shareholding report monitoring**: 5% rule specialist — [[finance/japan-large-shareholding-disclosure|日本大量保有報告制度]]

## Notes

1. **TDnet stores only 31  days** (paid search services required after that)
2. **EDINET contains submitted documents only** (internal minutes etc. not included)
3. **Third-party services and message boards are not primary disclosures** (recheck figures, times, and legal status in official documents)
4. **Do not assume a fixed disclosure time** (TDnet posts at the disclosure time, and afternoon cash-market trading runs until 15:30)

## Related

- [[fintech/japan-third-party-allotment-5-step-flow|第三者割当 5 段階フロー]] — Process providing context before and after disclosures
- [[fintech/japan-financial-regulation|日本金融規制]] — Payment Services Act · FIEA · Trust Business Act

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-third-party-allotment-5-step-flow|日本上場会社 第三者割当増資の 5 段階フロー]]
- [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]
<!-- /wiki-links:managed -->

## Sources

- [JPX — Overview of TDnet](https://www.jpx.co.jp/equities/listing/disclosure/tdnet/)
- [JPX — Cash-equity trading hours](https://www.jpx.co.jp/english/equities/trading/domestic/01.html)
- [JPX — 2024-11-05 arrowhead upgrade and trading-hours extension](https://www.jpx.co.jp/english/corporate/news/news-releases/0060/20241009-01.html)
- [JPX — Statutory scope of extraordinary reports](https://www.jpx.co.jp/glossary/ra/566.html)
- [TDnet Timely Disclosure Information Viewing Service](https://www.release.tdnet.info/inbs/I_main_00.html)
- [EDINET](https://disclosure2.edinet-fsa.go.jp/)
- [Tokyo Stock Exchange Listed Company Search](https://www2.jpx.co.jp/tseHpFront/JJK010010Action.do)
