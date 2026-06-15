---
source: manufacturer-finance/floorplan-finance-mechanism
source_hash: 8e95169052f1063a
lang: zh
model: claude-opus-4-8
status: machine
fidelity: ok
title: "底盘计划 / 库存批发金融机制 (Floorplan / Wholesale Finance Mechanism)"
translated_at: 2026-06-05T00:00:00.000Z
---

# Floorplan / Wholesale Finance Mechanism (フロアプラン・在庫金融の仕組み)

## Wiki route

This entry sits under [[manufacturer-finance/INDEX|manufacturing index]] as a **mechanism page**, focused on the *upstream* (dealer-inventory) half of manufacturer finance. It is the wholesale-side complement to the *downstream* (consumer) [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]], and a sibling to [[manufacturer-finance/export-finance-mechanism|export finance mechanism]]. The OEM finance arms that run floorplan programs are documented in [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]], [[manufacturer-finance/honda-finance|Honda Finance]], [[manufacturer-finance/nissan-financial-services|Nissan Financial Services]], and — for heavy equipment — [[manufacturer-finance/komatsu-captive-finance|Komatsu 顧客金融]]. The bank-affiliated leasing companies that compete on wholesale credit are [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] / [[leasing-firms/orix-corp|オリックス]] / [[leasing-firms/tokyo-century|東京センチュリー]]. Pair with [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] for the regulatory boundary.

## TL;DR

**Floorplan finance (底盘计划 / 库存金融，也称 wholesale finance)** 指的是，由制造商 captive 或金融机构以承诺额度，支撑经销商 (销售店) 在 **采购库存 (新车、二手车、工程机械、船舶等) 阶段的授信** 的机制。它处于 captive 向消费者放贷的 retail finance ([[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]]) 的 **上游 (流通阶段)**。其本质是 **在「制造商 → 经销商 → 消费者」的流通库存售出之前，由 lender 先行垫付**。lender 直接向制造商/拍卖支付货款，并以 **库存本身作为担保 (collateral)**。还款以 **pay-as-sold (售出即还)** 为基础，对长期滞留库存则课以 **curtailment (本金的部分提前偿还)**。从 manufacturing 视角看，核心在于 captive 同时掌握 retail 与 wholesale，从而能 **从上游支配销售渠道**。

## 1. floorplan finance とは何か

| 视角 | 内容 |
|---|---|
| 授信对象 | 经销商 (流通阶段)。并非消费者 |
| 担保 | 库存资产本身 (车辆、工程机械、船舶等)，往往为动产担保 |
| 资金流向 | lender 直接向制造商/拍卖支付，经销商收取库存 |
| 还款模式 | **pay-as-sold (以售出的单件库存货款偿还该笔授信)** + 应计利息 |
| 滞留应对 | **curtailment**: 每隔一定期间提前偿还部分本金 |
| 审计 | lender 定期进行 **库存实查 (floor check / audit)** |
| 提供主体 | 制造商 captive、银行、独立系 wholesale lender |

floorplan 与 retail (面向消费者) 是一对相对的概念，二者合起来由 captive 从金融层面控制整个流通。retail 侧的机制参见 [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]]。

## 2. なぜ floorplan が必要か (ディーラー視点 / メーカー視点)

- **经销商视角**: 若以现金采购库存，则巨额营运资金被占用。借助 floorplan，可 **零首付 / 以少量资金确保库存**，并将货款支付递延至售出之前。流动性与采购余力提升，备货与需求响应更快。
- **制造商视角**: 当 captive 提供 floorplan 时，**制造商可在出货时点计入销售额** (因为经销商已提走库存)。这有助于生产、出货的平滑化，确保经销商忠诚度，维持销售网。当 captive 一体化运营 retail 与 wholesale 时，便能从上游到下游掌握引流与授信。
- **权衡**: 对制造商 captive 而言，floorplan 是一项承担经销商信用风险、库存滞留风险、欺诈 (sold-out-of-trust = 已售出却不偿还) 风险的业务。这些以 curtailment 与 audit 来管理。

## 3. curtailment と audit (滞留・不正の管理)

floorplan 的核心风险是 **库存长期滞销** 和 **售出却不偿还**。lender 以下列方式管理。

- **Curtailment (削减 / 本金部分偿还)**: 当库存滞销达一定期间 (例: 30 / 60 / 90 / 120 天) 时，经销商提前偿还部分本金 (通常约为原授信额的 5〜20% 左右)。这使滞留库存的授信余额递减，抑制陈旧化、价格下跌风险。curtailment 计划因 lender / 产品而异。
- **Floor check / audit (库存实查)**: lender 定期、不定期地核查实物库存，与台账核对。验证担保是否现存、是否已售出 (sold)，以防 **sold-out-of-trust** (已售出却不偿还 floorplan 的欺诈)。
- **利息、手续费**: 按库存持有期间产生利息，可能因制造商的促销活动 (在一定期间补贴利息 = floorplan subvention) 而减轻。这与 retail 侧的 lease subvention 是同型的促销手段。

## 4. 主体別の floorplan 提供パターン

| 提供主体 | 例 | 特征 |
|---|---|---|
| **OEM captive (汽车)** | [[manufacturer-finance/toyota-financial-services|TFS]] / [[manufacturer-finance/honda-finance|AHFC]] / [[manufacturer-finance/nissan-financial-services|NMAC]] | 由 captive 对自家经销商网的库存提供 wholesale 授信。与 retail 一体化运营 |
| **OEM captive (工程机械、重型机械)** | [[manufacturer-finance/komatsu-captive-finance|Komatsu Financial]] | 向 30+ 经销商与客户提供 wholesale / retail / lease |
| **银行 / 独立系 wholesale lender** | 银行、专营 wholesale finance | 为不持有/补充 captive 的制造商的经销商库存授信 |
| **银行系租赁公司** | [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] / [[leasing-firms/orix-corp|オリックス]] / [[leasing-firms/tokyo-century|東京センチュリー]] | 以租赁、库存金融与 captive 竞争 / 合作 |

「captive 自营运转 floorplan 型」(Toyota / Honda / Nissan / Komatsu) 与「委托银行系、独立系型」的对比，是本领域的分析主轴之一。关于不持有 captive 的类型，参见 [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]]。

## 5. 規制・政策・funding

- **动产担保、登记 (国内)**: 因以库存 (动产) 作为担保，故涉及动产转让登记等担保法制。在分期销售、贷金的层面，可能成为分期付款销售法、贷金业法的对象。
- **监管 (美国)**: floorplan lending 在银行监管上作为一类贷款类别接受审查 (FDIC 的检查方针中有 floor plan lending 的项目)。captive 成为证券化披露的对象。
- **funding (证券化)**: wholesale (floorplan) 债权也可能通过 dealer floorplan ABS / master trust 结构进行证券化，是 captive 的 funding 手段之一。与 retail auto ABS 的关系参见 [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan]] 与 [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]。
- **会计**: 制造商能否在向经销商出货时计入销售额，取决于库存控制权转移 (收入确认准则) 的判断。

## Related

- [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]] (downstream / retail sibling) · [[manufacturer-finance/export-finance-mechanism|export finance mechanism]]
- [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] · [[manufacturer-finance/honda-finance|Honda Finance]] · [[manufacturer-finance/nissan-financial-services|Nissan Financial Services]] · [[manufacturer-finance/komatsu-captive-finance|Komatsu 顧客金融]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan]] · [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]
- [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] · [[leasing-firms/orix-corp|オリックス]] · [[leasing-firms/tokyo-century|東京センチュリー]]
- [[manufacturer-finance/INDEX|manufacturing INDEX]] · [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] · [[INDEX|FinWiki index]]

## Sources

- FDIC「Floor Plan Lending」(検査方針): https://www.fdic.gov/risk-management-manual-examination-policies/floor-plan-lending
- DLL「Floor plan financing in the construction, transportation and industrial sectors」: https://www.dllgroup.com/us/en-us/blog/latest/Floor-plan-financing-in-the-construction-transportation-and-industrial-sectors
- AutoFinance「What is Dealer Floor Plan Financing?」: https://www.autofinance.com/insights/floorplan-financing/
- EDINET (メーカー / captive のセグメント開示): https://disclosure2.edinet-fsa.go.jp/

---

> [!info] 校对状态
> confidence: **likely**。floorplan / wholesale finance、pay-as-sold、curtailment、floor check (audit)、sold-out-of-trust 各机制，均为基于公开的行业解说 (DLL / AutoFinance)、FDIC 检查方针、OEM captive 的一般运营的机制记述。curtailment 比率 (5〜20% / 30・60・90・120 天) 为行业一般参考值，实际条件因 lender / 产品而异。特定公司的 floorplan 余额、利率本页不涉及，留待企业别条目。优先 mechanism 知识，而非脆弱的 financial figures。
