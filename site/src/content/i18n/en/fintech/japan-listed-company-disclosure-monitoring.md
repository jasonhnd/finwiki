---
source: fintech/japan-listed-company-disclosure-monitoring
source_hash: 8d3febcdcd38c2f1
lang: en
status: machine
fidelity: ok
title: "Japan Listed Company Disclosure Monitoring SOP (17  Channels)"
translated_at: 2026-05-31T06:16:15.735Z
---

# Japan Listed Company Disclosure Monitoring SOP (17  Channels)

> [!info] Core insight
> A **three-tier monitoring channel map — official + aggregator + overseas** — for real-time monitoring of Japan listed company timely disclosures ([[fintech/japan-third-party-allotment-5-step-flow|第三者割当]] · earnings · acquisitions · IR, etc.).

With appropriate channel selection, it is possible to efficiently cover **supplementary information within minutes of a 15:00  announcement + next-day market sentiment tracking**.

## Three-Tier Structure

### Tier 1: Official Sources (Primary · Highest Authority)

**Reliability 100% · Same-day real-time**

| # | Channel | URL search pattern | Purpose |
|---|---------|---------------|-----|
| 1 | TDnet Timely Disclosure Information Viewing Service | `release.tdnet.info/inbs/I_main_00.html` | JPX official · published immediately after 15:00  · stored 31  days |
| 2 | EDINET (FSA) | `disclosure2.edinet-fsa.go.jp/` | Securities registration statements · interim reports · large shareholding reports |
| 3 | JPX listed company search | `www2.jpx.co.jp/tseHpFront/JJK010010Action.do` | Listing category · shares issued · basic information |

### Tier 2: Aggregators (Secondary · Ease of Use)

**Reliability 95% · Retail perspective · includes sentiment**

| # | Channel | URL pattern | Features |
|---|---------|------------|-----|
| 4 | Yahoo! Finance Japan timely disclosure | `finance.yahoo.co.jp/quote/{code}.T/disclosure` | Most used by retail investors · long history |
| 5 | Nikkei Company Information DIGITAL disclosure | `nikkei.com/nkd/company/disclose/?scode={code}` | Categorised articles, charter, shareholder meetings, etc. |
| 6 | Kabutan (株探) | `kabutan.jp/stock/?code={code}` | Retail news alerts · comment-board sentiment |
| 7 | Minkabu (みんかぶ) | `minkabu.jp/stock/{code}` | Buy/sell forecast ratio |
| 8 | Kaisha Shikiho Online | `shikiho.toyokeizai.net/stocks/{code}/corporate` | Qualitative assessment from Shikiho perspective |
| 9 | Buffett Code | `buffett-code.com/company/{code}/` | Financial visualisation · earnings comparison |
| 10 | FISCO Corporate Information | `web.fisco.jp/platform/companies/{code}` | Japanese financial analysis specialist |
| 11 | Logmi Finance | `finance.logmi.jp/companies/{id}` | Transcripts of earnings presentations |
| 12 | Shareholder Benefits Guide (Daiwa IR) | `yutai-guide.daiwair.co.jp/stock/detail/{code}` | Valid only when benefits are issued |
| 13 | Ullet (large shareholding reports) | `ullet.com/{code}/EDINET/ranking/stock` | 5% rule specialist |

### Tier 3: Overseas Channels (Tertiary · Offshore Reference)

**Reliability 80% · English information · foreign investor perspective**

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

1. **Before market open 8:00**: Check Yahoo! and Kabutan for overnight news
2. **Before 15:00 **: Stand by on TDnet main page · prepare to refresh
3. **After 15:00 **:
   - Search TDnet by company code or name → save original PDF
   - Cross-check advance information against announcement content (allocation ratio · price · purpose)
4. **Same day before 17:00 **: Check EDINET for filings (whether an interim report has been submitted)
5. **Same-day evening**: Sweep Yahoo · Kabutan · Minkabu comment-board sentiment

### T+1  to T+3 

- Monitor share price reaction (Japan secondary market)
- Overseas market reaction (Hong Kong · Singapore after-hours)
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
3. **Retail sentiment is subject to bias** (Kabutan comment boards tend toward pessimism)
4. **Overseas market information has a lag** (Japan time 15:00  → 1-3 hours until immediate overseas reflection)

## Related

- [[fintech/japan-third-party-allotment-5-step-flow|第三者割当 5 段階フロー]] — Process providing context before and after disclosures
- [[fintech/japan-financial-regulation|日本金融規制]] — Payment Services Act · FIEA · Trust Business Act

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-third-party-allotment-5-step-flow|日本上場会社 第三者割当増資の 5 段階フロー]]
- [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]
<!-- /wiki-links:managed -->
