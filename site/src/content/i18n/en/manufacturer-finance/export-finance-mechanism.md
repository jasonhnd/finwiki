---
source: manufacturer-finance/export-finance-mechanism
source_hash: 975ebc84f2626f37
lang: en
model: claude-opus-4-8
status: machine
fidelity: ok
title: "Export Finance Mechanism (export finance — buyer credit / supplier credit / ECA)"
translated_at: 2026-06-05T00:00:00.000Z
---

# Export Finance Mechanism (輸出金融の仕組み — buyer credit / supplier credit / ECA)

## Wiki route

This entry sits under [[manufacturer-finance/INDEX|manufacturing index]] as the **mechanism page** behind export-oriented manufacturer finance. The Japanese manufacturer that runs this mechanism most visibly is documented in [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]]; [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]] uses the same ECA stack for rail and energy exports. It is the cross-border sibling of the domestic [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]]. The Japanese policy-finance institutions that supply the official support are [[financial-regulators/jbic|JBIC (国際協力銀行)]] and [[policy-finance/nexi|NEXI (日本貿易保険)]]; the international rulebook is [[policy-finance/oecd-export-credit-arrangement|OECD Arrangement on Officially Supported Export Credits]]. For how Japan's three export-support pillars compare, see [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]]. Pair with [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] for the broader regulatory boundary.

## TL;DR

**Export finance (輸出金融)** is the financing mechanism by which a manufacturer **exports capital goods (plants, power-generation equipment, rail cars, aircraft, ships, industrial equipment) to overseas buyers with long-term credit attached**. Unlike a captive (consumer finance for one's own products), the core of export finance is to **combine the "official support" of a government-affiliated export credit agency (ECA)**. In Japan, **[[financial-regulators/jbic|JBIC]] provides the financing, [[policy-finance/nexi|NEXI]] provides the trade insurance (pure cover), and the deal is arranged together with a megabank syndicate**. There are two credit forms: **(1) buyer credit (lending to the buyer / the buyer's bank)** and **(2) supplier credit (the exporting manufacturer extends credit directly to the buyer, covered by ECA insurance / bought out by a bank)**. The terms of this official support (down payment, repayment period, minimum interest rate) are governed internationally by the **[[policy-finance/oecd-export-credit-arrangement|OECD Arrangement]]**, which restrains each country's subsidy competition. From a manufacturing standpoint, it is the model in which "a heavy-industry manufacturer without a captive operates what is effectively an export-finance platform by combining an ECA + commercial banks" ([[manufacturer-finance/mitsubishi-heavy-export-finance|MHI]] is the archetype).

## 1. buyer credit and supplier credit

| Credit form | Lender | Borrower | The manufacturer's position |
|---|---|---|---|
| **Buyer credit (buyer's credit)** | Bank on the export side / ECA | Overseas buyer (or its bank) | The manufacturer collects cash. The credit sits between the buyer and the bank/ECA |
| **Supplier credit (supplier's credit)** | The exporting manufacturer itself (→ the bank buys the receivable) | Overseas buyer | The manufacturer extends credit at first, covers the risk with ECA insurance, and the bank buys the receivable |

- **buyer credit** is the cleanest for the manufacturer, allowing it to collect the export price effectively as a prepayment. It is mainstream in large plant and infrastructure deals.
- **supplier credit** has the manufacturer bear the credit risk temporarily, but it can cover this with trade insurance such as NEXI's and monetize it by selling the receivable to a bank.
- Term classification: **short-term (usually under 2 years) / medium-term (2–5 years) / long-term (over 5 years)**. Capital goods are centered on the medium-to-long term.

## 2. The three forms of "official support" by an ECA

The support of an export credit agency (ECA) is broadly classified into the following three.

| Support form | Details | Japan's provider |
|---|---|---|
| **Pure cover** | No financing; provides **insurance / guarantees** for country risk and credit risk to the exporter/lender | [[policy-finance/nexi|NEXI]] (trade insurance) |
| **Financing support** | Provides direct loans, refinancing, interest-rate support | [[financial-regulators/jbic|JBIC]] (export finance, investment finance) |
| **Aid financing** | Concessional credit and grants (including tied aid) | In coordination with JICA / government ODA |

Japan's typical pattern is the three-party arrangement of **JBIC providing the loan, NEXI providing the insurance, and megabanks joining the syndicate**. For a detailed role comparison, see [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]].

## 3. OECD Arrangement (the international rules)

The **[[policy-finance/oecd-export-credit-arrangement|OECD Arrangement on Officially Supported Export Credits]]** is a gentlemen's agreement in which participating countries set the "most generous terms for officially supportable export credits" (minimum down payment, maximum repayment period, minimum interest rate = CIRR, minimum premium rate). Its purpose is to secure a **level playing field**—to restrain the subsidy competition and trade distortion of each country's ECA.

- From a manufacturer's standpoint, this means being able to compete on the same terms playing field as rival-country manufacturers (German, French, Korean, Chinese competitors).
- There are sector-specific special rules (aircraft, ships, nuclear power, renewable energy, climate-related, etc.) that govern a deal's repayment period and terms.
- ECAs of non-participating countries such as China operate outside the Arrangement's discipline, so this becomes a competitive issue.

## 4. The flow of structuring a deal (typical example)

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

The manufacturer's own corporate finance department and project headquarters design this ECA + commercial-bank syndicate on a deal-by-deal basis. This is the reality of "the effective finance arm of a heavy-industry manufacturer without a captive" ([[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]] / [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]]).

## 5. Regulation and policy

- **OECD Arrangement**: the ceiling discipline on official-support terms (above).
- **Foreign Exchange Act / security export control (METI)**: export permits for defense, nuclear, and dual-use items.
- **Nuclear**: IAEA safeguards, the nuclear regulation of the destination country, bilateral nuclear agreements (123-agreement type).
- **Environment and human rights**: the ECA's environmental and social consideration guidelines (JBIC / NEXI guidelines), the OECD Common Approaches.
- **GX / climate**: in the green field, the use of the JBIC GX facility and the climate-related special rules of the OECD Arrangement is expanding.
- **The role of policy finance**: as part of [[policy-finance/japan-policy-finance-system|日本の政策金融システム]], Japan's export finance is designed to complement long-term, large, and emerging-market deals that are hard to take on a commercial basis.

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
> confidence: **likely**. The discipline of buyer credit / supplier credit, the three ECA support forms (pure cover / financing / aid), and the OECD Arrangement is a description of the general mechanism based on the OECD official source, JBIC / NEXI official sources, and industry commentary (Clifford Chance, etc.). Because the amounts and terms of specific deals are highly confidential and volatile, they are not covered on this page and are left to company-specific entries ([[manufacturer-finance/mitsubishi-heavy-export-finance|MHI]], etc.) and policy-finance entries. Prioritizing mechanism knowledge over fragile financial figures.
