---
source: manufacturer-finance/export-finance-mechanism
source_hash: 975ebc84f2626f37
lang: zh
model: claude-opus-4-8
status: machine
fidelity: ok
title: "出口金融机制 (Export Finance Mechanism — buyer credit / supplier credit / ECA)"
translated_at: 2026-06-05T00:00:00.000Z
---

# Export Finance Mechanism (輸出金融の仕組み — buyer credit / supplier credit / ECA)

## Wiki route

This entry sits under [[manufacturer-finance/INDEX|manufacturing index]] as the **mechanism page** behind export-oriented manufacturer finance. The Japanese manufacturer that runs this mechanism most visibly is documented in [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]]; [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]] uses the same ECA stack for rail and energy exports. It is the cross-border sibling of the domestic [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]]. The Japanese policy-finance institutions that supply the official support are [[financial-regulators/jbic|JBIC (国際協力銀行)]] and [[policy-finance/nexi|NEXI (日本貿易保険)]]; the international rulebook is [[policy-finance/oecd-export-credit-arrangement|OECD Arrangement on Officially Supported Export Credits]]. For how Japan's three export-support pillars compare, see [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]]. Pair with [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] for the broader regulatory boundary.

## TL;DR

**Export finance (输出金融)** 指的是制造商将资本品 (成套设备、发电设备、铁路车辆、飞机、船舶、产业机器) **附带长期授信地出口给海外买方** 的金融机制。与 captive (面向自家产品消费者的金融) 不同，输出金融的核心在于 **组合政府系出口信贷机构 (export credit agency, ECA) 的「官方支持」**。在日本，**由 [[financial-regulators/jbic|JBIC]] 承担融资 (financing)，由 [[policy-finance/nexi|NEXI]] 承担贸易保险 (pure cover)，并与大型银行的银团一同组建**。授信形态分为 **(1) buyer credit (向买方/买方的银行放贷)** 与 **(2) supplier credit (出口制造商直接向买方提供信用，再由 ECA 保险覆盖/银行买断)** 两个系统。这些官方支持的条件 (首付、还款期限、最低利率) 由 **[[policy-finance/oecd-export-credit-arrangement|OECD Arrangement]]** 在国际层面统一管控，抑制各国的补贴竞争。从 manufacturing 视角看，这是「不持有 captive 的重工业制造商，通过组合 ECA + 商业银行来实际上运营出口金融平台」的模式 ([[manufacturer-finance/mitsubishi-heavy-export-finance|MHI]] 为典型)。

## 1. buyer credit と supplier credit

| 授信形态 | 放贷方 | 借款方 | 制造商的位置 |
|---|---|---|---|
| **Buyer credit (买方信贷)** | 出口侧的银行 / ECA | 海外买方 (或其银行) | 制造商收取现金。授信发生在买方与银行/ECA 之间 |
| **Supplier credit (供应商信贷)** | 出口制造商自身 (→ 银行买断债权) | 海外买方 | 制造商先行提供信用，由 ECA 保险覆盖风险后银行买断 |

- **buyer credit** 对制造商而言最为干净，可实质上以预付方式收回出口货款。在成套设备、基础设施大型案件中为主流。
- **supplier credit** 中制造商暂时承担授信风险，但以 NEXI 等贸易保险覆盖，并将债权出售给银行即可变现。
- 期限划分: **短期 (通常不满 2 年) / 中期 (2〜5 年) / 长期 (超过 5 年)**。资本品以中长期为主。

## 2. ECA の「公的支援」3 形態

出口信贷机构 (ECA) 的支持大致分为以下 3 类。

| 支持形态 | 内容 | 日本的承担方 |
|---|---|---|
| **Pure cover (纯保险)** | 不提供融资，而向出口方/放贷方提供国家风险、信用风险的**保险、保证** | [[policy-finance/nexi|NEXI]] (贸易保险) |
| **Financing support (融资支持)** | 提供直接融资、再融资、利率支持 | [[financial-regulators/jbic|JBIC]] (输出金融、投资金融) |
| **Aid financing (援助金融)** | 优惠性的信贷、赠款 (含 tied aid) | 与 JICA / 政府 ODA 联动 |

日本的典型模式是 **JBIC 提供融资、NEXI 提供保险、大型银行参与银团** 的三方组建。详细的角色比较参见 [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]]。

## 3. OECD Arrangement (国際ルール)

**[[policy-finance/oecd-export-credit-arrangement|OECD Arrangement on Officially Supported Export Credits]]** 是参加国就「可由官方支持的出口授信的最宽松条件」(最低首付、最长还款期限、最低利率 = CIRR、最低保费率) 所制定的君子协定。其目的是确保 **level playing field**——抑制各国 ECA 的补贴竞争与贸易扭曲。

- 从制造商视角看，这意味着能与对手国制造商 (德、法、韩、中的竞争对手) 在相同条件的赛场上竞争。
- 存在分行业的特别规则 (飞机、船舶、核能、可再生能源、climate-related 等)，会左右案件的还款期限与条件。
- 中国等非参加国的 ECA 在 Arrangement 的纪律之外运作，因而成为竞争上的议题。

## 4. 案件組成の流れ (典型例)

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

由制造商本体的公司财务部门与项目本部，按案件逐一设计这套 ECA + 商业银行的银团。这就是「不持有 captive 的重工业制造商的实际上的 finance arm」的实态 ([[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]] / [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]])。

## 5. 規制・政策

- **OECD Arrangement**: 官方支持条件的上限纪律 (如上)。
- **外汇法 / 安全保障贸易管理 (METI)**: 国防、核能、双用途品目的出口许可。
- **核能**: IAEA 保障监督、出口目的国的核能规制、双边核能协定 (123 协定型)。
- **环境、人权**: ECA 的环境社会考量指南 (JBIC / NEXI 的指南)、OECD 共同方针 (Common Approaches)。
- **GX / 气候**: 在绿色领域，JBIC GX 框额、OECD Arrangement 的 climate-related 特别规则的运用空间正在扩大。
- **政策金融的角色**: 日本的输出金融作为 [[policy-finance/japan-policy-finance-system|日本の政策金融システム]] 的一部分，设计为补充商业层面难以承接的长期、大型、新兴国案件。

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

> [!info] 校对状态
> confidence: **likely**。buyer credit / supplier credit、ECA 的 3 种支持形态 (pure cover / financing / aid)、OECD Arrangement 的纪律，均为基于 OECD 官方、JBIC / NEXI 官方、行业解说 (Clifford Chance 等) 的一般机制记述。特定案件的金额、条件保密性高且波动较大，故本页不涉及，留待企业别条目 ([[manufacturer-finance/mitsubishi-heavy-export-finance|MHI]] 等) 与政策金融条目。优先 mechanism 知识，而非脆弱的 financial figures。
