---
source: manufacturer-finance/export-finance-mechanism
source_hash: 5854cd873c4393cd
lang: zh
status: machine
fidelity: ok
title: "Export Finance Mechanism (輸出金融の仕組み — buyer credit / supplier credit / ECA)"
translated_at: 2026-06-19T06:09:18.191Z
---

# Export Finance Mechanism (輸出金融の仕組み — buyer credit / supplier credit / ECA)

## Wiki route

This entry sits under [[manufacturer-finance/INDEX|manufacturing index]] as the **mechanism page** behind export-oriented manufacturer finance. The Japanese manufacturer that runs this mechanism most visibly is documented in [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]]; [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]] uses the same ECA stack for rail and energy exports. It is the cross-border sibling of the domestic [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]]. The Japanese policy-finance institutions that supply the official support are [[financial-regulators/jbic|JBIC (国際協力銀行)]] and [[policy-finance/nexi|NEXI (日本貿易保険)]]; the international rulebook is [[policy-finance/oecd-export-credit-arrangement|OECD Arrangement on Officially Supported Export Credits]]. For how Japan's three export-support pillars compare, see [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]]. Pair with [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] for the broader regulatory boundary.

## TL;DR

**Export finance（輸出金融）** 是指制造商将资本货物（成套设备、发电设备、铁道车辆、飞机、船舶、工业机械）**附带长期信用出口给海外买家** 的金融机制。与 captive（对自家产品的消费金融）不同，出口金融的核心在于 **组合政府系出口信贷机构（ECA）的「官方支持」**。在日本，**由 [[financial-regulators/jbic|JBIC]] 负责融资（financing），[[policy-finance/nexi|NEXI]] 负责贸易保险（pure cover），并与大型银行的银团共同组建**。信用形态分为 **(1) buyer credit（向买方／买方的银行放贷）** 与 **(2) supplier credit（出口制造商直接向买方提供信用，再由 ECA 保险覆盖／银行买断）** 两个 2 系统。这些官方支持的条件（首付、还款期限、最低利率）由 **[[policy-finance/oecd-export-credit-arrangement|OECD Arrangement]]** 进行国际管控，以抑制各国的补贴竞争。从 manufacturing 视角看，这是「不拥有 captive 的重工业制造商，通过组合 ECA + 商业银行而实际运营一个出口金融平台」的模式（以 [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI]] 为典型）。

## 1. buyer credit 与 supplier credit

| 信用形态 | 放贷方 | 借款方 | 制造商的位置 |
|---|---|---|---|
| **Buyer credit（买方信贷）** | 出口侧的银行 / ECA | 海外买方（或其银行） | 制造商收回现金。信用存在于买方与银行/ECA 之间 |
| **Supplier credit（供方信贷）** | 出口制造商自身（→ 银行买断债权） | 海外买方 | 制造商先行提供信用，以 ECA 保险覆盖风险并由银行买断 |

- **buyer credit** 对制造商而言最为干净，可实质性地以预付方式收回出口货款。在成套设备、基础设施大型项目中为主流。
- **supplier credit** 中制造商暂时承担信用风险，但以 NEXI 等贸易保险覆盖后，将债权出售给银行即可变现。
- 期间划分：**短期（通常不足 2  年）／中期（2〜5  年）／长期（超过 5  年）**。资本货物以中长期为主。

## 2. ECA「官方支持」的 3  种形态

出口信贷机构（ECA）的支持，大致分为以下 3  类。

| 支持形态 | 内容 | 日本的承担方 |
|---|---|---|
| **Pure cover（纯粹覆盖）** | 不提供融资，向出口者/放贷方提供针对国别风险、信用风险的**保险・保证** | [[policy-finance/nexi|NEXI]]（贸易保险） |
| **Financing support（融资支持）** | 提供直接融资、再融资、利率支持 | [[financial-regulators/jbic|JBIC]]（出口金融・投资金融） |
| **Aid financing（援助金融）** | 让步性的信贷・赠款（含 tied aid） | 与 JICA / 政府 ODA 的联动 |

日本的典型模式是 **JBIC 融资、NEXI 保险、大型银行参与银团** 这一三方组建。详细的角色比较参见 [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]]。

## 3. OECD Arrangement（国际规则）

**[[policy-finance/oecd-export-credit-arrangement|OECD Arrangement on Officially Supported Export Credits]]** 是参加国就「可由官方支持的出口信用的最宽松条件」（最低首付、最长还款期限、最低利率 = CIRR、最低保险费率）所约定的君子协定。其目的在于确保 **level playing field** —— 抑制各国 ECA 的补贴竞争与贸易扭曲。

- 从制造商视角看，这意味着能与对手国制造商（德、法、韩、中的竞争者）在相同条件的舞台上竞争。
- 存在分行业的特别规则（飞机、船舶、核能、可再生能源、climate-related 等），左右项目的还款期限与条件。
- 中国等非参加国的 ECA 在 Arrangement 的纪律之外行动，因而成为竞争上的论点。

## 4. 项目组建的流程（典型示例）

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

制造商本体的公司财务与项目总部，逐个项目地设计这一 ECA + 商业银行的银团。这就是「不拥有 captive 的重工业制造商之实际 finance arm」的实态（[[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]] / [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]]）。

## 5. 监管・政策

- **OECD Arrangement**：对官方支持条件的上限纪律（如上）。
- **外汇法 / 安全保障贸易管理（METI）**：防卫、核能、双用途品目的出口许可。
- **核能**：IAEA 保障措施、出口对象国的核能监管、双边核能协定（123 协定型）。
- **环境・人权**：ECA 的环境社会考量准则（JBIC / NEXI 准则）、OECD Common Approaches。
- **GX / 气候**：在绿色领域，运用 JBIC GX 额度、OECD Arrangement 的 climate-related 特别规则的余地在扩大。
- **政策金融的作用**：日本的出口金融作为 [[policy-finance/japan-policy-finance-system|日本の政策金融システム]] 的一部分，设计为补充那些在商业基础上难以承接的长期、大型、新兴国项目。

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

> [!info] 校正状态
> confidence: **likely**。buyer credit / supplier credit、ECA 的 3  种支持形态（pure cover / financing / aid）、OECD Arrangement 的纪律，均为基于 OECD 官方、JBIC / NEXI 官方、行业解说（Clifford Chance 等）的一般机制描述。特定项目的金额、条件保密性高且多变，本页不予处理，留待企业别条目（[[manufacturer-finance/mitsubishi-heavy-export-finance|MHI]] 等）与政策金融条目。相较脆弱的 financial figures，优先 mechanism 知识。
