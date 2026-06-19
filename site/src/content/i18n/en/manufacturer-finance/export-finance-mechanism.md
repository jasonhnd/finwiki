---
source: manufacturer-finance/export-finance-mechanism
source_hash: 5854cd873c4393cd
lang: en
status: machine
fidelity: ok
title: "Export Finance Mechanism (輸出金融の仕組み — buyer credit / supplier credit / ECA)"
translated_at: 2026-06-19T06:09:18.191Z
---

# Export Finance Mechanism (輸出金融の仕組み — buyer credit / supplier credit / ECA)

## Wiki route

This entry sits under [[manufacturer-finance/INDEX|manufacturing index]] as the **mechanism page** behind export-oriented manufacturer finance. The Japanese manufacturer that runs this mechanism most visibly is documented in [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]]; [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]] uses the same ECA stack for rail and energy exports. It is the cross-border sibling of the domestic [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]]. The Japanese policy-finance institutions that supply the official support are [[financial-regulators/jbic|JBIC (国際協力銀行)]] and [[policy-finance/nexi|NEXI (日本貿易保険)]]; the international rulebook is [[policy-finance/oecd-export-credit-arrangement|OECD Arrangement on Officially Supported Export Credits]]. For how Japan's three export-support pillars compare, see [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]]. Pair with [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] for the broader regulatory boundary.

## TL;DR

**Export finance (輸出金融)** is the financial mechanism by which a manufacturer **exports capital goods (plants, power-generation equipment, rail rolling stock, aircraft, ships, industrial machinery) to overseas buyers with long-term credit attached**. Unlike captive (consumer finance for the company's own products), the core of export finance is to **combine the "official support" of a government-affiliated export credit agency (ECA)**. In Japan, **[[financial-regulators/jbic|JBIC]] provides financing while [[policy-finance/nexi|NEXI]] handles trade insurance (pure cover), arranged together with megabank syndicates**. The credit forms are the 2  types of **(1) buyer credit (lending to the buyer / the buyer's bank)** and **(2) supplier credit (the exporting manufacturer extends credit directly to the buyer, which is then covered by ECA insurance / purchased by a bank)**. The terms of this official support (down payment, repayment period, minimum interest rate) are internationally governed by **[[policy-finance/oecd-export-credit-arrangement|OECD Arrangement]]**, which restrains subsidy competition among countries. From a manufacturing perspective, the model is "a heavy-industry manufacturer without a captive operates a de facto export-finance platform by combining ECA + commercial banks" ([[manufacturer-finance/mitsubishi-heavy-export-finance|MHI]] being typical).

## 1. buyer credit and supplier credit

| Credit form | Lender | Borrower | Manufacturer's position |
|---|---|---|---|
| **Buyer credit (バイヤーズクレジット)** | Bank on the export side / ECA | Overseas buyer (or its bank) | Manufacturer collects cash. The credit is between the buyer and the bank/ECA |
| **Supplier credit (サプライヤーズクレジット)** | The exporting manufacturer itself (→ a bank purchases the receivable) | Overseas buyer | The manufacturer extends credit once, covers the risk with ECA insurance, and a bank purchases the receivable |

- **buyer credit** is the cleanest for the manufacturer, allowing it to collect the export proceeds effectively prepaid. It is the mainstream for large plant / infrastructure deals.
- **supplier credit** has the manufacturer temporarily bear the credit risk, but it can be monetized by covering it with trade insurance such as NEXI's and selling the receivable to a bank.
- Period classification: **short-term (usually under 2  years) / medium-term (2–5  years) / long-term (over 5  years)**. Capital goods are centered on the medium-to-long term.

## 2. The 3  forms of ECA "official support"

The support of an export credit agency (ECA) is broadly classified into the following 3  types.

| Support form | Content | Japan's provider |
|---|---|---|
| **Pure cover (純粋カバー)** | Does not lend; provides **insurance / guarantees** for country risk and credit risk to the exporter/lender | [[policy-finance/nexi|NEXI]] (trade insurance) |
| **Financing support (融資支援)** | Provides direct loans, refinancing, and interest-rate support | [[financial-regulators/jbic|JBIC]] (export finance / investment finance) |
| **Aid financing (援助金融)** | Concessional credits / grants (including tied aid) | Coordination with JICA / government ODA |

Japan's typical pattern is the three-party arrangement of **JBIC financing, NEXI insuring, and megabanks participating in the syndicate**. For a detailed role comparison, see [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]].

## 3. OECD Arrangement (international rules)

**[[policy-finance/oecd-export-credit-arrangement|OECD Arrangement on Officially Supported Export Credits]]** is a gentlemen's agreement under which participating countries set the "most generous terms of officially supported export credit" (minimum down payment, maximum repayment period, minimum interest rate = CIRR, minimum premium rate). Its purpose is to ensure a **level playing field** — to restrain subsidy competition and trade distortion among national ECAs.

- From the manufacturer's perspective, it means being able to compete on the same terms footing as rival-country manufacturers (German / French / Korean / Chinese competitors).
- There are sector-specific special rules (aircraft, ships, nuclear power, renewable energy, climate-related, etc.) that govern a deal's repayment period and terms.
- The ECAs of non-participating countries such as China operate outside the discipline of the Arrangement, so this becomes a point of competitive contention.

## 4. Flow of deal arrangement (typical example)

```
海外の買い手 (政府/事業会社) が日本メーカーの資本財を発注
   │
   ├─ メーカー (例: [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI]]) が EPC / 機器供給契約を締結
   │
   ├─ JBIC が buyer credit を組成 (買い手/買い手銀行へ融資)
   │     + メガバンク ([[financial-regulators/jbic|JBIC]] 協調融資にシンジケート参加)
   │
   ├─ NEXI が貿易保険でカントリー/信用リスクをカバー (pure cover)
   │
   ├─ OECD Arrangement の条件 (頭金・期間・金利・保険料) に準拠
   │
   └─ プロジェクトファイナンス (IPP・発電・洋上風力) では SPV を介在
         → [[structured-finance/infrastructure-finance-spv-japan|インフラ SPV]] 構造と接続
```

The manufacturer's own corporate finance and project headquarters design this ECA + commercial-bank syndicate deal by deal. This is the reality of "the de facto finance arm of a heavy-industry manufacturer without a captive" ([[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]] / [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]]).

## 5. Regulation and policy

- **OECD Arrangement**: ceiling discipline on official-support terms (above).
- **Foreign Exchange Act / security export control (METI)**: export licensing of defense, nuclear, and dual-use items.
- **Nuclear**: IAEA safeguards, the destination country's nuclear regulation, bilateral nuclear cooperation agreements (123 -agreement type).
- **Environment / human rights**: ECA environmental and social consideration guidelines (JBIC / NEXI guidelines), the OECD Common Approaches.
- **GX / climate**: in green fields, the scope to use the JBIC GX facility and the climate-related special rules of the OECD Arrangement is expanding.
- **Role of policy finance**: Japan's export finance is designed as part of [[policy-finance/japan-policy-finance-system|日本の政策金融システム]] to complement long-term, large-scale, emerging-market deals that are hard to take on a commercial basis.

## Related

- [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]] · [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]]
- [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]] (domestic sibling mechanism)
- [[financial-regulators/jbic|JBIC (国際協力銀行)]] · [[policy-finance/nexi|NEXI (日本貿易保険)]] · [[policy-finance/oecd-export-credit-arrangement|OECD Arrangement]]
- [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]] · [[policy-finance/japan-policy-finance-system|日本の政策金融システム]] · [[structured-finance/infrastructure-finance-spv-japan|インフラ SPV (project finance)]]
- [[manufacturer-finance/INDEX|manufacturing INDEX]] · [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] · [[INDEX|FinWiki index]]

## Sources

- OECD「Export credits」: https://www.oecd.org/en/topics/export-credits.html
- OECD「Arrangement on Officially Supported Export Credits」: https://legalinstruments.oecd.org/Instruments/instruments/OECD-LEGAL-5005
- JBIC (国際協力銀行): https://www.jbic.go.jp/en/
- NEXI (日本貿易保険): https://www.nexi.go.jp/en/
- EDINET (メーカー有価証券報告書 — 輸出案件の開示): https://disclosure2.edinet-fsa.go.jp/

---

> [!info] Proofreading status
> confidence: **likely**. The descriptions of buyer credit / supplier credit, the 3  forms of ECA support (pure cover / financing / aid), and the discipline of the OECD Arrangement are descriptions of the general mechanism based on OECD official sources, JBIC / NEXI official sources, and industry commentary (Clifford Chance, etc.). Because the amounts and terms of specific deals are highly confidential and variable, this page does not handle them, leaving them to per-company entries ([[manufacturer-finance/mitsubishi-heavy-export-finance|MHI]], etc.) and policy-finance entries. Prioritize mechanism knowledge over fragile financial figures.
