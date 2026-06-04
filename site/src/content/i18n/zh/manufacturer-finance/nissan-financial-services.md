---
source: manufacturer-finance/nissan-financial-services
source_hash: c23b8db8ceb7a6d1
lang: zh
model: claude-opus-4-8
status: machine
fidelity: ok
title: "日产金融服务 (Nissan captive auto-finance arm / Nissan Motor Acceptance Company)"
translated_at: 2026-06-05T00:00:00.000Z
---

# Nissan Financial Services (日産系 captive auto-finance arm / Nissan Motor Acceptance Company)

## Wiki route

This entry sits under [[manufacturer-finance/INDEX|manufacturing index]] and is the third pillar of the Japanese-OEM auto-captive trio alongside [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] and [[manufacturer-finance/honda-finance|Honda Finance]]. Read it against [[manufacturer-finance/toyota-motor|Toyota Motor]] for the parent-OEM contrast, and against [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]], [[manufacturer-finance/sony-group-finance-arm|Sony FG]], [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]] for peer industrial-conglomerate finance arms. For the captive-finance mechanism itself see [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]], and for the dealer-inventory side see [[manufacturer-finance/floorplan-finance-mechanism|floorplan / wholesale finance mechanism]]. The securitization layer Nissan's captive funds through is documented in [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan (Toyota Finance, Honda Finance, Nissan Credit)]] and [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]. Pair with [[JapanFG/INDEX|JapanFG index]] for the broader regulatory boundary.

## TL;DR

日产系的自有汽车金融 (captive auto-finance)，以 **美洲 Nissan Motor Acceptance Company LLC (NMAC)**、**国内的日产系汽车信贷/租赁** 为核心，是仅次于 Toyota / Honda captive 规模的汽车 captive。从 manufacturing 视角应阅读的主轴是 **(1) Nissan Motor (日产汽车 7201) 将金融置于本体之外的并表子公司的意义；(2) 将残值风险 (residual value) 汇集到 captive 侧而非 OEM 本体的设计；(3) NMAC 在美国定期发行汽车贷款、租赁 ABS、作为 funding 机构这一点 (与 [[structured-finance/auto-loan-abs-japan-toyota-honda|US / Japan auto-loan ABS]] 相衔接)；(4) 由 captive 承担经销商库存的 floorplan (wholesale) 授信这一点**。NMAC 将 **Infiniti Financial Services (IFS)** 作为面向高端品牌的部门持有，与 Ford Motor Credit、Ally Financial、GM Financial、Toyota Motor Credit、American Honda Finance 并列，构成美国汽车 captive 的顶级梯队。

## 1. 会社構造と製造業視点

| 项目 | 内容 |
|---|---|
| 母公司 | 日产汽车株式会社 / Nissan Motor Co., Ltd. (东证 PRIME 7201) |
| 美洲 captive | Nissan Motor Acceptance Company LLC (NMAC) |
| 旧称、改组 | Nissan Motor Acceptance Corporation → 于 2022-04-01 改组、更名为特拉华州 LLC「Nissan Motor Acceptance Company LLC」(旧据点在加利福尼亚) |
| 高端品牌部门 | Infiniti Financial Services (IFS) — NMAC 的 DBA / 部门 |
| 美洲统辖 | 隶属 Nissan North America, Inc. (NNA)，从金融层面支撑 NNA 的销售活动 |
| 证券化子公司 | Nissan Auto Receivables 系的 SPV (NARC=1991, NARC II=2000, NARF=2002 设立，均为 NMAC 的直接、间接 100% 子公司) |
| 国内 captive | 日产系的汽车信贷、租赁 (与国内销售公司网联动) |
| 主要业务 | 零售分期 (retail installment)、租赁、经销商库存金融 (floorplan / wholesale) |

### 製造業視点のグループ構造

```
Nissan Motor Co., Ltd. (日産自動車 7201, 製造業本体)
  ├── 四輪 (Nissan / Infiniti ブランド) 製造販売
  ├── R&D / 生産 / グローバル販売網
  ├── Nissan North America, Inc. (NNA, 米州統括)
  │     └── Nissan Motor Acceptance Company LLC (NMAC)
  │           ├── 小売割賦・リース (Nissan ブランド)
  │           ├── Infiniti Financial Services (IFS, 高級ブランド部門)
  │           ├── ディーラー floorplan (wholesale) 与信
  │           └── 証券化子会社 (NARC / NARC II / NARF)
  └── 国内: 日産系オートクレジット・リース
```

### Nissan Motor 本体との関係

- NMAC、国内日产系金融为并表子公司，故作为 Nissan Motor 的 **「销售金融业务 (Sales Financing)」分部**，在有价证券报告书中汇总披露。
- 在设定残值型贷款 (残值贷款) 与租赁中，Nissan Motor 本体 **先行确定「新车销售利润」**，而二手车价格变动风险则集中到 captive (NMAC / 国内日产系) 的资产负债表上。这是与 [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] / [[manufacturer-finance/honda-finance|Honda Finance]] 同型的 captive 设计。
- NMAC 从经销商买入新车、二手车的 retail installment 合同与租赁合同，同时也对 **经销商的库存本身 (floorplan)** 授信。captive 同时掌握销售的上游 (库存) 与下游 (消费者) 的结构，是 OEM 销售渠道支配力的核心。机制的一般论参见 [[manufacturer-finance/floorplan-finance-mechanism|floorplan / wholesale finance mechanism]]。

## 2. 製品 / 事業ライン × 製造業視点での意義

| 业务线 | 内容 | Nissan Motor 制造业视角下的意义 |
|---|---|---|
| 汽车贷款 (新车、二手车) | 美洲、国内 | 维持新车销售渠道，经销商忠诚度 |
| 租赁 (个人残值贷款 + 法人车队) | 以美洲为主、国内 | 残值风险汇集、调控换购周期 |
| Infiniti Financial Services (IFS) | 美洲 (高端品牌) | 面向 Infiniti 客户的授信、产品差异化 |
| 经销商库存金融 (floorplan / wholesale) | 美洲、国内 | 支援经销商，调整生产、出货时点 |
| 附带汽车保险、延长保修 | 美洲 | 客户关系长期化 |

### 自動車 ABS との接続

NMAC 是美国汽车 captive 的主要 ABS 发行体之一，经由 SPV (NARC / NARC II / NARF 系) 对 Nissan 的汽车贷款、租赁债权进行证券化。本应堆积在 Nissan Motor 本体 B/S 上的 auto receivables，由 captive 以 ABS 表外化，从而抑制集团整体杠杆，这一结构与 Toyota / Honda 系共通。在日本国内，日产系也成为汽车贷款 ABS 市场的发行体。详见 [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan (Toyota / Honda / Nissan)]] 与 [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]。

## 3. 主要指標 (定性 + 公開ベース)

| 指标 | 内容 | 出处 |
|---|---|---|
| NMAC 法人形态 | 特拉华州 LLC (2022-04-01 改组) | NMAC 会社概要 |
| 高端品牌部门 | Infiniti Financial Services (IFS) | Nissan USA / NMAC |
| 证券化子公司 | NARC (1991) / NARC II (2000) / NARF (2002) | Nissan EMTN program 披露 |
| 美洲统辖 | Nissan North America, Inc. (NNA) | Nissan IR |
| 主要竞争 (美国) | Ford Motor Credit, Ally Financial, GM Financial, Toyota Motor Credit, American Honda Finance | 行业报告 |
| 国内 | 日产系汽车信贷、租赁 | EDINET / Nissan IR |

> 具体的并表总资产、债权余额、ABS 发行额，会在 Nissan Motor「销售金融业务」分部披露及 NMAC / SPV 的证券化披露中按季度、年度披露。本条目以会社结构、captive 设计、funding 机制为中心进行记述，对波动较大的财务数字采取参照一手资料的方针 (优先 mechanism 知识，而非脆弱的 financial figures)。

## 4. 戦略 (Residual Value + EV + Brand-Split + Wholesale)

- **残值风险管理**: 残值贷款、租赁与二手车市场价格直接挂钩，BEV (Leaf / Ariya 等) 的技术更新 (电池劣化、世代交替) 使残值评估变得困难。captive 利用二手车价格数据更新残值模型。机制的一般论参见 [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]] 的 residual-value 一节。
- **Infiniti 品牌的金融分离**: 面向高端品牌 Infiniti，将 **Infiniti Financial Services (IFS)** 设为 NMAC 的部门，与 Nissan 大众品牌在授信、产品设计上加以差异化。这与 Honda 的 Acura Financial Services 是同型的 brand-split。
- **美洲 captive 的规模**: 在美国市场，规模与 Ford Motor Credit / Ally Financial 并肩，是美国汽车 ABS 市场的发行体。以专用 SPV 运营证券化这一点也与 Toyota / Honda captive 共通。
- **重视 Wholesale (floorplan)**: NMAC 不仅承担面向消费者的 retail，还承担经销商库存的 wholesale 授信，从金融层面支撑整个销售网。详见 [[manufacturer-finance/floorplan-finance-mechanism|floorplan / wholesale finance mechanism]]。
- **EV / 出行时代的 captive**: 顺应从拥有向使用的转变 (订阅、租赁) 而重新设计 captive 产品的潮流，与 Toyota 的 KINTO、Honda 同向。

## 5. 規制・政策

- **国内**: 金融厅 (FSA)、贷金业法、分期付款销售法、保险业法。国内日产系金融处于这些监管之下。
- **美国**: 联邦消费者金融保护局 (CFPB)、各州金融监管。NMAC 作为以 ABS / 公司债融资的注册发行体进行证券化披露。
- **近期政策议题**:
  - 2024〜 EV 残值评估模型的透明化 (消费者保护)
  - 2025〜 美国 CFPB 强化汽车金融 APR 披露的动向
  - 2024〜 网联汽车数据 × 金融的个人信息保护
  - captive 的 funding 中 ABS 市场 (证券化规制) 的动向

## Related

- [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] · [[manufacturer-finance/honda-finance|Honda Finance]] · [[manufacturer-finance/toyota-motor|Toyota Motor]]
- [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]] · [[manufacturer-finance/floorplan-finance-mechanism|floorplan / wholesale finance mechanism]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan (Toyota / Honda / Nissan)]] · [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]
- [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]] · [[manufacturer-finance/sony-group-finance-arm|Sony FG]] · [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]] · [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]]
- [[manufacturer-finance/INDEX|manufacturing INDEX]] · [[JapanFG/INDEX|JapanFG INDEX]] · [[INDEX|FinWiki index]]

## Sources

- Nissan Motor Co., Ltd.「Investor Relations」: https://www.nissan-global.com/EN/IR/
- Nissan USA「Finance & Online Payment Options」: https://www.nissanusa.com/finance/financing-online-bill-payment-options.html
- NMAC (Nissan Finance) アカウント管理ポータル: https://www.nissanfinance.com/s/
- Nissan「EMTN Program」開示 (NMAC / NARC / NARC II / NARF 記載): https://www.nissan-global.com/EN/DOCUMENT/PDF/emtn_program_06.pdf
- EDINET (有価証券報告書): https://disclosure2.edinet-fsa.go.jp/

---

> [!info] 校对状态
> confidence: **likely**。基于 NMAC 的会社概要、Nissan IR / EMTN program 披露、Nissan USA，以公开信息构成。NMAC 于 2022-04-01 改组、更名为特拉华州 LLC (Nissan Motor Acceptance Company LLC)、将 Infiniti Financial Services 作为高端品牌部门运营、持有证券化子公司 NARC (1991) / NARC II (2000) / NARF (2002)、隶属 Nissan North America，均经公开资料确认。并表财务数字、ABS 发行额波动较大，故参照一手资料，本文以 captive 结构、floorplan、funding 机制为中心进行记述。
