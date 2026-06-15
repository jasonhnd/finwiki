---
source: manufacturer-finance/vendor-finance-mechanism
source_hash: a73fdf3db2a09c99
lang: zh
model: claude-opus-4-8
status: machine
fidelity: ok
title: "captive・vendor finance 机制 (Captive / Vendor Finance Mechanism)"
translated_at: 2026-06-05T00:00:00.000Z
---

# Captive / Vendor Finance Mechanism (captive・vendor finance の仕組み)

## Wiki route

This entry sits under [[manufacturer-finance/INDEX|manufacturing index]] as the **mechanism page** behind the domain's company profiles. The OEM finance arms that *run* this mechanism are documented in [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]], [[manufacturer-finance/honda-finance|Honda Finance]], [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]], and [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]]. For the cross-border variant — exporting capital goods with ECA support — see the sibling mechanism page [[manufacturer-finance/export-finance-mechanism|export finance mechanism]]. The funding layer that captives rely on is securitization: [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan (Toyota / Honda / Nissan)]] and [[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS (residual-value, true-lease vs finance-lease)]]. Pair with [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] / [[leasing-firms/orix-corp|オリックス]] for the bank-affiliated leasing companies that compete with — and partner with — captives, and [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] for the regulatory boundary.

## TL;DR

**Captive finance** 指的是制造商 (OEM / 供应商) **将面向自家产品购买者的金融，由本体之外的并表金融子公司 (captive) 来提供的机制**。**Vendor finance** 是其 B2B 版本，设备、机器供应商以分期、租赁、订阅支撑客户 (法人) 的购买。两者的本质都是 **在同一集团内将「卖产品」与「贷出/出租其货款」垂直整合**。由此 OEM 可一体化设计 (1) 销售渠道的维持、引流力，(2) 残值风险 (residual value) 的集团内汇集，(3) 与客户的长期关系及数据获取，(4) 通过 ABS 将债权表外化。FinWiki 的 manufacturer-finance 领域，按企业别记述 **谁、如何运营** 这套机制。本页作为其共通的 **mechanism 定义**，整理 captive / vendor / floorplan / residual value / ABS funding 各部件。

## 1. captive と vendor finance の定義

| 术语 | 主体 | 客户 | 典型产品 |
|---|---|---|---|
| **Captive finance** | OEM 直系的金融子公司 (例: [[manufacturer-finance/toyota-financial-services|TFS]], [[manufacturer-finance/honda-finance|AHFC]]) | 主要为个人 (B2C) + 经销商 | 汽车贷款、残值贷款、租赁、信用卡 |
| **Vendor finance** | 机器、设备供应商 (+ 合作租赁公司) | 主要为法人 (B2B) | 设备租赁、分期付款、SaaS 订阅 |
| **Floorplan / 库存金融** | captive 或合作金融 | 经销商 (流通阶段) | 库存车、库存机器的短期周转授信 |
| **Bank-affiliated leasing** | 银行系、独立系租赁公司 | 法人、个人 | 租赁整体 (captive 的竞争 / 补充) |

「持有 captive 型」(Toyota / Honda) 与「不持有 captive、以银行系、合作运转型」(Panasonic / MHI) 的对比，是本领域的主要分析主轴。后者参见 [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]] 与 [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]]。

## 2. なぜメーカーは captive を持つのか (4 つの動機)

1. **销售渠道的支配与引流力**: 可在新车、新设备购买现场一揽子提案「产品 + 贷款 + 租赁 + 保险」，相对银行系汽车贷款的优势在于 **销售现场的即时授信**。captive 从金融层面强化 OEM 的品牌忠诚度。
2. **残值风险的集团内汇集 (residual value)**: 如后所述，租赁、残值贷款是押注二手车/二手设备未来价格的产品。OEM 本体先行确定新车销售利润，而价格变动风险汇集到 captive 的 B/S，这是一般性设计。
3. **与客户的长期关系与数据**: 通过贷款、租赁、信用卡获取购买、使用数据，运用于换购周期与交叉销售。
4. **资本效率与 ABS funding**: 将堆积的应收、分期、租赁债权以 ABS 证券化、表外化，抑制集团整体杠杆 (与 [[structured-finance/auto-loan-abs-japan-toyota-honda|auto-loan ABS]] / [[structured-finance/japan-equipment-lease-abs|equipment lease ABS]] 相衔接)。

## 3. Residual Value (残值) リスクの仕組み

租赁、设定残值型贷款的核心是 **residual value (RV) = 租赁到期时的预计残存价值**。机制如下。

- captive 在签约时估计 **到期时的二手价格 (RV)**，并将该部分从月供中扣除。RV 设定得越高，月供越低，租赁越容易售出。
- 若到期时实际的二手价格 **低于 RV**，captive 便产生 **残值损失 (residual loss)**。反之高于则为收益。
- OEM captive 往往 **有意将 RV 设定得略高 (lease subvention)** 以降低月供，从而推动库存并维持品牌忠诚度。这是促销与残值风险之间的权衡。
- **BEV / EV 的风险**: 由于技术更新之快 (电池劣化、世代交替)，二手价格难以预测，RV 模型的精细化成为课题。EV 租赁返还车的残值动向是行业的重要议题 (Deloitte 等有分析)。
- 设备、机器的 vendor finance 也有同型的 RV 风险，**true-lease (经营性租赁，残值风险由供应商方承担) 与 finance-lease (融资租赁，实质分期) 的区别** 会划分会计、风险分配。详见 [[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS (residual-value, true-lease vs finance-lease)]]。

## 4. Funding: captive はどう資金を調達するか

captive 本身不持有存款 (持有银行牌照的一部分除外)，故须从市场筹集放贷资金。主要手段如下。

| funding 手段 | 内容 |
|---|---|
| **ABS (证券化)** | 将汽车贷款、租赁、分期债权转让给 SPV 并以 ABS 出售。同时实现表外化与资金回收。美国 captive 以 SEC 注册的 owner trust 系列定期发行。 |
| **公司债 / CP** | captive 名义的公司债、商业票据。借助母公司的信用补强 (Keepwell Agreement 等) 降低筹资成本。 |
| **母公司保证 / Keepwell** | 母 OEM 承诺维持 captive 的流动性、净资产，赋予高于 captive 单独的信用力 (多数情况下并非法律保证)。[[manufacturer-finance/honda-finance|Honda Finance]] 的 AHFC 为典型例。 |
| **银团贷款 / 银团** | 大型银行、地方银行的承诺额度。 |
| **经由合作租赁公司** | 让自营 captive 轻量化，将租赁组建委托给 [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] / [[leasing-firms/orix-corp|オリックス]] / [[leasing-firms/tokyo-century|東京センチュリー]] 等的类型 (Panasonic / Hitachi 的一部分)。 |

## 5. 規制・政策

- **分期付款销售法、贷金业法 (国内)**: 分期付款、贷款的授信是分期付款销售法、贷金业登记的对象。
- **保险业法、银行法**: 当 captive 集团内持有保险、银行时 (Sony / Toyota 的一部分)，处于各业法的监管之下。
- **证券化规制**: ABS funding 是风险自留 (自我保有义务) 等各国证券化规制的对象。
- **消费者保护**: 残值评估模型的透明化、APR (年率) 披露 (美 CFPB 等)、EV 残值的说明责任为近期议题。
- **会计准则**: 租赁会计 (IFRS 16 / 日本的新租赁准则) 左右 true-lease / finance-lease 的区分以及表内/表外，直接关系到 vendor finance 的设计。

## Related

- [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] · [[manufacturer-finance/honda-finance|Honda Finance]] · [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]] · [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]]
- [[manufacturer-finance/export-finance-mechanism|export finance mechanism]] (cross-border sibling mechanism)
- [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan]] · [[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS]] · [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]
- [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]] · [[leasing-firms/orix-corp|オリックス]] · [[leasing-firms/tokyo-century|東京センチュリー]]
- [[manufacturer-finance/toyota-motor|Toyota Motor]] · [[manufacturer-finance/seiko-epson|Seiko Epson]]
- [[manufacturer-finance/INDEX|manufacturing INDEX]] · [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] · [[INDEX|FinWiki index]]

## Sources

- OECD「Export credits」(captive / vendor finance の国際枠組み文脈): https://www.oecd.org/en/topics/export-credits.html
- Deloitte「Electric Vehicle Lease Returns: Market Analysis」(EV 残価リスク): https://www.deloitte.com/us/en/Industries/consumer/articles/electric-vehicle-lease-returns-market-analysis.html
- J.D. Power「OEMs and Captive Finance Solutions」: https://www.jdpowervalues.com/oems-and-captive-finance-solutions
- EDINET (各社「金融サービス事業」セグメント開示): https://disclosure2.edinet-fsa.go.jp/

---

> [!info] 校对状态
> confidence: **likely**。captive / vendor finance、residual value、floorplan、ABS funding 各机制，均为基于公开的 OEM IR 分部披露、行业分析 (Deloitte / J.D. Power)、OECD 框架的一般机制记述。特定公司的财务数字本页不涉及，留待企业别条目 ([[manufacturer-finance/toyota-financial-services|TFS]] / [[manufacturer-finance/honda-finance|Honda Finance]] 等)。秉持优先 mechanism 知识、而非脆弱的 financial figures 的方针。
