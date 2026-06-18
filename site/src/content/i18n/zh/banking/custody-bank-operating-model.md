---
source: banking/custody-bank-operating-model
source_hash: 8fd126f0e8af4bbe
lang: zh
status: machine
fidelity: ok
title: "日本托管银行运营模式"
translated_at: 2026-06-18T23:33:48.337Z
---

# 日本托管银行运营模式

## Wiki 路径

本条目归属于 [[banking/INDEX|banking index]]。请结合实体锚点 [[trust-banks/custody-bank|日本カストディ銀行 (CBJ)]]、运营同业 [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]] 与实体 [[trust-banks/master-trust-bank|MTBJ]]、格局概览 [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]]、跨阵营矩阵 [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]] 以及运营对比 [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]] 一并阅读。结算基础设施侧请配合 [[securities/japan-securities-depository-center|JASDEC]] 与 [[securities/japan-securities-clearing-corp|JSCC]]，监管层级请配合 [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]]，股东侧信托银行页面请配合 [[trust-banks/sumitomo-mitsui-trust|SMTB]] 与 [[trust-banks/mizuho-trust-bank|Mizuho Trust]]，机构背景请配合 [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]] 阅读。

## TL;DR

日本托管银行（CBJ — 日本カストディ銀行）是日本两强资产管理基础设施中的另一半，由 JTSB（日本トラスティ・サービス信託銀行）与 TCSB（資産管理サービス信託銀行）于 2020-07-27 合并而成立。其股东阵营为三井住友信托集团（33.3%）＋ 瑞穗 FG（27.0%）＋ 理索那银行（16.7%）＋ 第一生命（8.0%）＋ 寿险公司（朝日／明治安田／簡保生命／富国）轴心——与 MTBJ 的 MUFG 信托 ＋ 日本生命 ＋ 明治安田 ＋ 农林中金阵营相区别。在运营上，CBJ 从事与 MTBJ 相同的业务：养老金信托管理、证券投资信托管理以及证券托管——遵循银行法 ＋ 信托业法的双重牌照路径，并直接参与 JASDEC ＋ 日本银行 JGB 结算。其「日本カストディ銀行（信託口）」名义人名称，与 MTBJ 的「信託口」并列出现在每一家 TOPIX 发行人股东名册的最上方。2020  合并将两套重复系统整合为单一委托基础，其推动力与催生 MTBJ 的被动型基金增长及养老金资产规模相同。CBJ ＋ MTBJ 合计占日本机构托管量的大部分。

## 1. 机构定位

| Field | CBJ |
|---|---|
| Legal name (JA) | 株式会社日本カストディ銀行 |
| Legal name (EN) | Custody Bank of Japan, Ltd. |
| Established | 2020-07-27 (JTSB + TCSB merger) |
| HQ | 東京都中央区晴海 1-8-12 晴海アイランドトリトンスクエア オフィスタワー Z |
| License route | 銀行法 + 信託業法 (custody-only 信託銀行 / 信託兼営銀行) |
| Listing | Non-listed (multi-FG joint venture) |
| Primary regulator | 金融庁 (FSA) |
| Industry body | 信託協会 (Trust Companies Association of Japan) |
| Functional position | Asset-administration specialist (no loans, no PB, no real-estate trust, no inheritance trust) |
| Public AUC anchor | 受托信托财产总额约 ¥696 万亿日元（受託信託財産 + 常任代理契約等に基づく預り資産; 其中 信託財産 ¥476万亿日元），截至 2025-03-31 |
| Peer | [[trust-banks/master-trust-bank|Master Trust Bank of Japan (MTBJ)]] |

### 股东结构（公开披露，截至 2020-07-27）

| Shareholder | Stake | Reading |
|---|---|---|
| [[trust-banks/sumitomo-mitsui-trust|三井住友トラストグループ (SMTH)]] | 33.3% | 主导信托银行股东; 提供来自 SMTB 养老金／投信客户群的委托流; 旧 JTSB 血统 |
| [[megabanks/mizuho-fg|みずほフィナンシャルグループ (Mizuho FG)]] | 27.0% | 第二大信托银行股东（经由瑞穗信托）; 旧 TCSB 血统 |
| りそな銀行 (Resona Bank) | 16.7% | 第三大股东; TCSB 阵营中的旧大和／朝日信托血统 |
| [[life-insurers/dai-ichi-life|第一生命保険]] | 8.0% | 寿险股东; 提供专户托管及企业年金委托流 |
| 朝日生命保険 | 5.0% | 寿险股东（旧 TCSB） |
| 明治安田生命保険 | 4.5% | 寿险股东 |
| かんぽ生命保険 | 3.5% | 寿险股东 |
| 富国生命保険 | 2.0% | 寿险股东（旧 TCSB） |

### 为何是两家专业托管行而非一家

2020-07 合并整合了 JTSB 与 TCSB，但止步于未与 MTBJ 合并。公开的解读是：

1. 股东政治——MUFG／寿险轴心与 SMTB／瑞穗／理索那／寿险轴心，若不让渡控制权便难以轻易整合；
2. 风险集中——日本的机构资产管理不能依赖单一基础设施（运营风险 ＋ 交易对手风险 ＋ 表决权集中）；
4. 成本套利——各阵营内部的重复系统（SMTB／瑞穗阵营内 JTSB 对 TCSB）属冗余，但阵营之间的重复产生了竞争制衡。

2020 合并实现了**阵营内**整合。阵营间整合（CBJ ＋ MTBJ）仍是一个悬而未决的问题。

### 血统图

```
SMTB / 第一生命 lineage
  日本トラスティ・サービス信託銀行 (JTSB) — 2000 設立
    ├── 旧中央三井信託 → SMTB
    ├── 旧住友信託 → SMTB
    └── 第一生命

Mizuho / Resona / 生保 lineage
  資産管理サービス信託銀行 (TCSB) — 2004 設立
    ├── みずほ信託 (Mizuho Trust)
    ├── りそな銀行 (旧 大和 / あさひ信託 系統)
    ├── Asahi Life, Meiji Yasuda, Japan Post Insurance, Fukoku Life
    └── 旧第一勧業富士 / 安田信託 系統

  ↓ 2020-07-27 merger

  日本カストディ銀行 (CBJ) — 株主 (2020-07-27 現在)
    ├── 三井住友トラストグループ (SMTH) 33.3%
    ├── みずほ FG (Mizuho FG) 27.0%
    ├── りそな銀行 (Resona) 16.7%
    ├── 第一生命 8.0%
    └── 朝日生命 5.0% / 明治安田 4.5% / かんぽ生命 3.5% / 富国生命 2.0%
```

### 业务线地图

| Segment | Core function | Typical client base | What it is not |
|---|---|---|---|
| **信託カストディ (Securities custody)** | 股票、JGB、公司债、外国证券的保管; 记账登记; 公司行动处理; 股息／利息收取; 退税操作 | 养老金计划、资产管理人、寿险公司、需要日本次托管行的外国全球托管行 | 并非自营投资者; 「信託口」名义人标签是一种记账构造 |
| **年金信託 (Pension trust administration)** | 厚生年金基金、DB、DC 计划的信托合同——记账、资产所有者报告、给付支付操作 | GPIF、大型企业 DB 计划、DC 计划管理人 | 并非投资管理人 |
| **投信受託 (Securities-investment-trust admin)** | 公募投信／私募投信的信托合同——基金会计、NAV 计算、持仓登记、分配处理 | 以 CBJ 为受託会社的资产管理人（尤其是 SMTB AM 关联公司、瑞穗 AM、理索那 AM 关联公司） | 并非基金管理人或销售机构 |
| **特定金銭信託 (特金) ops** | 面向机构／法人投资者的特金载体 | 保险公司、法人、地方银行 | 并非全权委托资产管理人 |
| **資産管理サービス (Master custody)** | 机构主托管、多委托整合、运用指令处理 | 大型多委托资产所有者 | 并非发起人 |

### 运营职能分解

| Function | Description |
|---|---|
| Safekeeping & book-entry admin | 直接连接 [[securities/japan-securities-depository-center|JASDEC]]记账转账; 日本银行 JGB 直接账户持有人; 资金结算账户运营 |
| Settlement (cash equity) | 经由 JASDEC + JSCC 清算的 DVP-X1 / DVP-X2 / DVP-X3 结算 |
| Settlement (JGB) | 直接参与日本银行 JGB 记账系统 |
| Settlement (corporate bond / CP) | 经由 JASDEC 对社债与 CP 进行记账转账 |
| Fund accounting / NAV calculation | 投信委托的每日 NAV 计算; 投信协会标准 |
| Corporate actions | 股息／利息收取、拆股、配股、转换; 经由全球托管行次网络处理外国资产 CA |
| Voting operations | 机械执行资产所有者／管理人指令; ICJ 电子投票转发 |
| Sub-custody for foreign assets | 非日本资产经由 [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon]] / [[foreign-financial-institutions/state-street-japan|State Street]] / [[foreign-financial-institutions/jpmorgan-japan|JP Morgan]] / [[foreign-financial-institutions/citigroup-japan|Citi]] 重新路由 |
| Member / participant ops | 养老金成员余额报告（DB／DC）、给付支付操作 |
| Securities-lending support | 借券计划管理（客户选择加入时）; 担保缴纳; 召回管理 |

### 「信託口」名义人界面 — CBJ 特有

CBJ 的名义人名称「日本カストディ銀行（信託口）」出现在实质上每一家 TOPIX-100 发行人的大股东行中，常常排在 MTBJ 的「信託口」之后位列第 2位或第 3位。其模式如下：

| Reading | Interpretation |
|---|---|
| Legal record name | CBJ |
| Beneficial owners | SMTB 侧资产管理人、瑞穗侧资产管理人、理索那侧资产管理人、第一生命专户、朝日／明治安田／富国生命账户、CBJ 的外国次托管客户 |
| Voting instruction source | 上游资产管理人或资产所有者——并非 CBJ |
| Underlying exposure type | 大部分为被动指数 + 主动养老金委托 + 投信持仓 |

### vs MTBJ — 运营细节对比

| Field | CBJ | MTBJ |
|---|---|---|
| Established | 2020-07-27 (JTSB+TCSB merger) | 2000-05 (greenfield) |
| Shareholder camp | SMTH 33.3% + 瑞穗 FG 27.0% + 理索那 16.7% + 第一生命 8.0% + 朝日 / 明治安田 / かんぽ / 富国 寿险 | MUFG Trust + Nippon Life + Meiji Yasuda + Norinchukin |
| Lead shareholder stake | 三井住友トラストグループ (SMTH) 33.3% | MUFG Trust 46.5% |
| Public AUC anchor | ~¥696万亿日元 (2025-03-31; 受托信托财产总额) | ~¥770万亿日元 (2025-03-31; 管理資産残高) |
| HQ location | 東京都中央区晴海 | 東京都港区浜松町 |
| Legal-structure license | 銀行法 + 信託業法 (custody-only) | 銀行法 + 信託業法 (custody-only) |
| Loans / deposits | None / minimal | None / minimal |
| 不動産信託 | No | No |
| Inheritance / 相続 trust | No | No |
| PB / wealth | No | No |
| Real-estate trust | No | No |
| JASDEC direct | Yes (high volume) | Yes (high volume) |
| BoJ JGB direct | Yes | Yes |
| JSCC direct | Yes | Yes |
| ICSD (Euroclear / Clearstream) direct | No (re-routed via globals) | No (re-routed via globals) |
| GPIF custodian use | Yes (one of the resource pool) | Yes (one of the resource pool) |
| Listing | Non-listed | Non-listed |

### vs 全方位服务信托银行

| Dimension | CBJ | Megabank full-service trust banks (MUFG Trust / SMTB / Mizuho Trust) |
|---|---|---|
| Custody / 投信受託 | 核心职能（公用事业规模） | 内部运营 + 常将处理委托给 CBJ / MTBJ |
| Real-estate trust | No | 主要业务线（不动产证券化、J-REIT） |
| 相続 / 遺言 / PB | No | Yes — 可观的财富管理收入 |
| 不動産信託 + 信託受益権 (J-REIT) | No | Yes — 完整处理 |
| Securities agency (株式事務代行) | No | Yes |
| Pension front-office (運用提案) | No | Yes |
| DC service window | 有限（仅管理） | 前台 + 管理 |

CBJ 承担**处理**，而其信托银行股东承担**客户关系 + 前台委托**。这种纵向分工是有意为之，也正是信托银行股东未将 CBJ 重新并入其并表业务的原因。

### vs 全球托管行

| Dimension | CBJ | Global custodians (BNY Mellon / State Street / JPM / Citi Japan) |
|---|---|---|
| Primary asset universe | 日本国内资产 | 跨境 + 外国投资者日本次托管 |
| ICSD connectivity | 间接（经由全球托管行） | 直接 |
| Voting administration | Yes（机械式、ICJ 联动） | Yes（经由 Broadridge 等） |
| Pricing power on JP custody | 高（公用事业规模） | 中（次托管溢价） |
| Pricing power on foreign custody | 低（转交全球托管行） | 高 |
| Regulatory base | 仅 FSA | FSA + 母国监管当局（FRB / OCC / ECB / PRA） |
| G-SIB status | No | 四家母公司均为 G-SIB |

## 4. 手续费・收益结构

CBJ 不公开披露详细的费率表。公开领域的解读如下：

| Revenue line | Pricing basis | Public visibility |
|---|---|---|
| 养老金信托管理费 | AUC bps（在 GPIF／大型 DB 规模下极低） | 不在逐项层面披露（CBJ 不公布详细费率表） |
| 投信受託 admin fee | AUC bps — 通常为 NAV 的年 0.01-0.05% | 按基金在信托约款中披露 |
| Securities custody fee | 按资产类别的 AUC bps + 每笔结算费 | 未公开披露 |
| Voting / CA admin | 通常并入托管费 | 不单独披露 |
| Securities-lending agent fee | 与受益所有人收入分成 | 不单独披露 |
| Cash-balance interest income | 低 | 不单独披露 |

### 为何 CBJ 的费用经济性与 MTBJ 高度相似

两家以相似的委托规模运营同一套产品集。其费用定价由以下因素锚定：

2. **GPIF 招标压力** — GPIF 定期举行资产管理机构遴选，CBJ 与 MTBJ 均在其中竞争；两家既有在位者定价亦有挑战者定价。
3. **被动型基金 AUM 增长** — 被动指数基金推高了 CBJ 管理的 AUC，同时压低了每 bp 的费用，形成了量增／利润率降的动态。

### 跨银行费用经济性解读

关于 MTBJ + CBJ + 大型银行信托部门 + 全球托管行的细化费用对比，参见 [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]]。

| Aspect | CBJ | MTBJ |
|---|---|---|
| 对资产管理人的定价权 | 高（公用事业规模） | 高（公用事业规模） |
| 养老金信托管理费趋势 | 大型委托上稳定至略有压缩 | 相同 |
| 外国资产托管 | 来自全球托管行的转嫁成本 | 来自全球托管行的转嫁成本 |
| 成本侧规模 | 高固定 IT 成本; 每委托边际成本极低 | 相同 — 两家均以公用事业经济性运营 |

### 监管栈

| Layer | Statute / regulator | CBJ implication |
|---|---|---|
| 银行监督 | 銀行法 + 金融庁 監督指針 (信託兼営銀行 section) | 资本充足 + 治理 + IT 风险; CBJ 运营一本较轻的信贷簿，因而相对于 AUC 而言资本比率较轻 |
| 信托业监督 | 信託業法 + 金融庁 監督指針 (信託業 section) | 信托账户分别管理、受信义务、利益冲突控制 |
| 证券法叠加 | 金融商品取引法 — 投信受託会社 / カストディ ops | NAV 计算、托管标准、投信协会合规 |
| 养老金监管 | 厚生年金保険法, 確定給付企業年金法, 確定拠出年金法 | DB / DC 管理、受信报告 |
| 存款保险 | 預金保険機構加盟 | 法定加盟; 鉴于存款基础较小，相关性轻微 |
| AML / CFT | 金融庁 + 警察庁 + 国税庁 reporting | 托管侧 AML 在底层客户层面适用 |
| 尽责管理 / 治理 | スチュワードシップ・コード (voluntary) | 表决权管理透明度; CBJ 按客户指令执行 |
| 数据 / 个人信息 | 個人情報保護法, 金融分野ガイドライン | 养老金成员数据、NISA 数据 |

### 会计处理

| Item | Treatment |
|---|---|
| 信托资产 (信託財産) | 在 CBJ 表外; 在受益所有人表内 |
| 托管／管理费 | 在损益表中确认为手续费收入 |
| 自营存款 | 表内 — 规模较小 |
| 结算账户残余 | 短久期; 现金 + 同业存放 |
| 商誉／合并会计 (2020) | 在 JTSB + TCSB 合并时确认; 细节见股东并表披露 |

### 合并会计说明

2020-07-27 的 JTSB + TCSB 合并涉及历时多年的系统整合; 整合成本流经 CBJ 损益表，并由股东母公司在其并表信托银行运营分部中吸收。细化的成本回收及 IT 减记情况未公开披露（CBJ 为非上市，仅报告汇总数字; 合并商誉细节存在于股东母公司并表披露中）。

## 6. JASDEC / 清算基础设施连接

```
┌─────────────────────────────────────────────────────────────────┐
│ Beneficial owners (GPIF / corporate pensions / 投信 / insurers)  │
└─────────────────────────────┬───────────────────────────────────┘
                              │  mandate
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ Asset managers (front-office discretion + voting opinion)        │
│ — SMTB AM affiliates, Mizuho AM, Resona AM, etc.                 │
└─────────────────────────────┬───────────────────────────────────┘
                              │  instruction
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ Custody Bank of Japan (trust account / nominee)                  │
│ — recordkeeping, NAV, CA processing, voting admin                │
└─┬────────────┬────────────┬───────────────┬────────────────────┬─┘
  │            │            │               │                    │
  ▼            ▼            ▼               ▼                    ▼
┌───────────┐┌─────────────┐┌──────────────┐┌──────────────────┐┌─────────────────┐
│ JASDEC    ││ JSCC        ││ BoJ JGB      ││ Global custodians│ │ ICJ voting plat.│
│ (equities,││ (CCP for    ││ book-entry   ││ for foreign sub- │ │ (electronic     │
│ 社債, CP, ││ cash equity)││ (JGB         ││ custody          │ │ proxy voting)   │
│ 投信)     ││             ││ settlement)  ││                  │ │                 │
└───────────┘└─────────────┘└──────────────┘└──────────────────┘└─────────────────┘
```

### 直接参与 JASDEC

CBJ 直接参与以下制度：

- 株式振替制度 (dematerialized listed shares)
- 一般債振替制度 (corporate bonds: 普通社債, 転換社債)
- 短期社債振替制度 (CP)
- 投資信託振替制度 (publicly offered 投信 units)

### JSCC + DVP

CBJ 的现金股票结算经由 [[securities/japan-securities-clearing-corp|JSCC]] 作为中央交易对手，产生 DVP-X1 / X2 / X3 品质的结算。JSCC 还为回购和场外衍生品运营 CCP 服务——CBJ 对这些层面的敞口取决于各客户的委托范围。

### 日本银行 JGB 记账

CBJ 在日本银行 JGB 记账系统中持有直接账户，支持养老金与投信委托的 DVP JGB 结算，无需中间次托管。

### 外国资产次托管链

对于 CBJ 管理委托中的非日本资产：

```
CBJ (record-name trust-account)
  → Global custodian (BNY / State Street / JPM / Citi)
    → Local sub-custodian in foreign market
      → Local CSD
```

## Related

- [[banking/INDEX]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/master-trust-bank-operating-model]]
- [[banking/jasdec-settlement-operations]]
- [[banking/trust-bank-fee-structure-comparison]]
- [[banking/pension-trust-mandate-allocation-japan]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[trust-banks/custody-bank]]
- [[trust-banks/master-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[life-insurers/dai-ichi-life]]
- [[foreign-financial-institutions/bny-mellon-japan]]
- [[foreign-financial-institutions/state-street-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## Sources

- Custody Bank of Japan: official site, about us, business explanation, corporate information page, English corporate page.
- 三井住友信託銀行「スケールメリットの追求」資産管理業務ページ（CBJ AUC: 総預かり資産 約696兆円 / 信託財産 476兆円、2025-03-31）— https://www.smtb.jp/business/instrument/management/scale
- 日本マスタートラスト信託銀行 2024 年度決算（MTBJ 管理資産残高 約770兆円、2025-03-31）— https://www.mastertrust.co.jp/assets/pdf/financial/zm20250521.pdf
- Trust Companies Association of Japan: trust-assets-under-management statistics.
- FSA: trust-business financial institution list, bank license list.
- JASDEC: securities book-entry and depository system materials.
- JSCC: clearing and DVP cash-equity materials.
- BoJ: JGB book-entry settlement system materials.
- Wikipedia (cross-reference): 株式会社日本カストディ銀行, JTSB, TCSB historical entries. — CBJ 株主構成（2020-07-27 現在）：三井住友トラストグループ 33.3% / みずほ FG 27.0% / りそな銀行 16.7% / 第一生命 8.0% / 朝日生命 5.0% / 明治安田生命 4.5% / かんぽ生命 3.5% / 富国生命 2.0%。https://ja.wikipedia.org/wiki/日本カストディ銀行 （2026-05-30 確認。旧版の「SMTB ~46.5% / Mizuho ~27% / Daiwa-affiliated」の出資者表記を訂正。46.5% は日本マスタートラスト信託における MUFG 信託の比率の誤転記、Daiwa Securities は CBJ の株主ではなく正しくは りそな銀行 16.7%）
