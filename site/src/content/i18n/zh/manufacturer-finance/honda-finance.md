---
source: manufacturer-finance/honda-finance
source_hash: d462fdf7edbef00b
lang: zh
model: claude-opus-4-8
status: machine
fidelity: ok
title: "本田金融 (Honda captive auto-finance arm / American Honda Finance Corporation)"
translated_at: 2026-06-05T00:00:00.000Z
---

# Honda Finance (ホンダ captive auto-finance arm / American Honda Finance Corporation)

## Wiki route

This entry sits under [[manufacturer-finance/INDEX|manufacturing index]] and is the Honda-side complement to [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] — the two largest Japanese-OEM auto captives. Read it against [[manufacturer-finance/toyota-motor|Toyota Motor]] for the parent-OEM contrast, and against [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]], [[manufacturer-finance/sony-group-finance-arm|Sony FG]], [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]], [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]] for peer industrial-conglomerate finance arms. For the captive-finance mechanism itself see [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]]; for the securitization layer Honda funds through, see [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan (Toyota Finance, Honda Finance, Nissan Credit)]] and [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]. Pair with [[JapanFG/INDEX|JapanFG index]] for the broader regulatory boundary.

## TL;DR

本田的自有汽车金融 (captive auto-finance)，以 **美洲 American Honda Finance Corporation (AHFC)**、**国内 Honda Finance Co., Ltd. (本田金融)**、**加拿大 Honda Canada Finance Inc. (HCFI)** 为核心，是仅次于 Toyota Financial Services 规模的汽车 captive。从 manufacturing 视角应阅读的主轴是 **(1) Honda Motor (本田技研工业 7267) 将金融置于本体之外的并表子公司的意义；(2) 将残值风险 (residual value) 汇集到 captive 侧而非 OEM 本体的设计；(3) AHFC 在美国定期发行汽车贷款、租赁 ABS、作为 funding 机构这一点 (与 [[structured-finance/auto-loan-abs-japan-toyota-honda|Japan / US auto-loan ABS]] 相衔接)；(4) 名为 Keepwell Agreement 的母公司流动性保证机制**。AHFC 以 HFS (Honda Financial Services) 与 AFS (Acura Financial Services) 两个品牌 (DBA) 提供零售金融，与 Ford Motor Credit、Ally Financial、GM Financial、Toyota Motor Credit 并列，构成美国汽车 captive 的顶级梯队。

## 1. 会社構造と製造業視点

| 项目 | 内容 |
|---|---|
| 母公司 | 本田技研工业株式会社 / Honda Motor Co., Ltd. (HMC, 东证 PRIME 7267 / NYSE: HMC) |
| 美洲 captive | American Honda Finance Corporation (AHFC) |
| AHFC 设立 | 1980-02-06 (加利福尼亚州法人) |
| AHFC 母公司 | American Honda Motor Co., Inc. (AHM) 的 100% 子公司 (AHM 为 HMC 的 100% 子公司) |
| AHFC 品牌 | HFS (Honda Financial Services) / AFS (Acura Financial Services) — 均为 AHFC 的 DBA |
| 加拿大 | Honda Canada Finance Inc. (HCFI, AHFC 的过半数子公司，Honda Canada Inc. 持非控股权益) |
| 国内 captive | Honda Finance Co., Ltd. (本田金融，国内汽车贷款、租赁) |
| 母公司保证 | HMC 与 AHFC 签订 Keepwell Agreement (承诺维持流动性、净资产) |
| AHFC 披露 | 美国 SEC 注册发行体 (每年提交 Form 10-K，3 月期结算) |

### 製造業視点のグループ構造

```
Honda Motor Co., Ltd. (本田技研工業 7267, 製造業本体)
  ├── 二輪・四輪・パワープロダクツ・航空機 (HondaJet) 製造販売
  ├── R&D / 生産 / グローバル販売網
  ├── American Honda Motor Co., Inc. (AHM, 米州統括)
  │     └── American Honda Finance Corporation (AHFC, 1980-)
  │           ├── HFS (Honda Financial Services) ブランド
  │           ├── AFS (Acura Financial Services) ブランド
  │           └── Honda Canada Finance Inc. (HCFI, 過半数子会社)
  └── 国内: Honda Finance Co., Ltd. (ホンダファイナンス)
```

### Honda Motor 本体との関係

- AHFC、国内本田金融为并表子公司，故作为 Honda Motor 的 **「金融服务业务」分部**，在有价证券报告书、Form 20-F 中汇总披露。
- 在设定残值型贷款 (残值贷款) 与租赁中，Honda Motor 本体 **先行确定「新车销售利润」**，而二手车价格变动风险则集中到 captive 侧 (AHFC / 国内本田金融) 的资产负债表上。这是与 [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] 同型的 captive 设计。
- **Keepwell Agreement** 是当 AHFC 以 ABS 或公司债融资时，由母公司 HMC 承诺「维持 AHFC 的偿付能力与净资产」的机制。在法律上虽非保证 (guarantee)，但具有使 AHFC 的信用力贴近母公司评级的效果。是降低 captive 的 funding 成本的核心。

## 2. 製品 / 事業ライン × 製造業視点での意義

| 业务线 | 内容 | Honda Motor 制造业视角下的意义 |
|---|---|---|
| 汽车贷款 (新车、二手车) | 美洲、国内、加拿大 | 维持新车销售渠道，经销商忠诚度 |
| 租赁 (个人残值贷款 + 法人车队) | 以美洲为主、国内 | 残值风险汇集、调控换购周期 |
| 动力运动 / 船艇 / 动力设备金融 | 美洲 (HFS 也覆盖二轮、舷外机、发电机等) | 四轮以外产品线的销售金融 |
| 经销商库存金融 (底盘计划) | 美洲、国内 | 支援经销商，调整生产、出货时点 |
| 附带汽车保险、延长保修 | 美洲 | 客户关系长期化 |

### 自動車 ABS との接続

AHFC 是美国汽车 captive 的主要 ABS 发行体之一，以 **Honda Auto Receivables Owner Trust** 系列定期对汽车贷款、租赁债权进行证券化。国内本田金融也成为日本汽车贷款 ABS 市场的发行体。本应堆积在 Honda Motor 本体 B/S 上的 auto receivables，由 captive 以 ABS 表外化，从而抑制集团整体杠杆，这一结构与 Toyota / Nissan 系共通。详见 [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan (Toyota Finance, Honda Finance, Nissan Credit)]] 与 [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]。

## 3. 主要指標 (定性 + 公開ベース)

| 指标 | 内容 | 出处 |
|---|---|---|
| AHFC 法人形态 | 加利福尼亚州法人 (1980-02-06 设立) | AHFC 会社概要 / SEC Form 10-K |
| AHFC 结算期 | 3 月期 (与母公司 HMC 一致) | AHFC Form 10-K |
| AHFC 披露 | SEC 注册发行体，每年提交 Form 10-K | SEC EDGAR |
| 母公司保证 | Keepwell Agreement (HMC ↔ AHFC) | AHFC Form 10-K |
| 主要竞争 (美国) | Ford Motor Credit, Ally Financial, GM Financial, Toyota Motor Credit | 行业报告 |
| 国内 captive | Honda Finance Co., Ltd. (汽车贷款、租赁) | EDINET / Honda IR |

> 具体的并表总资产、债权余额、ABS 发行额，会在 Honda Motor「金融服务业务」分部披露及 AHFC 的 SEC Form 10-K 中按季度、年度披露。本条目以会社结构、captive 设计、funding 机制为中心进行记述，对波动较大的财务数字采取参照一手资料的方针 (优先 mechanism 知识，而非脆弱的 financial figures)。

## 4. 戦略 (Residual Value + EV + Brand-Split)

- **残值风险管理**: 残值贷款、租赁与二手车市场价格直接挂钩，BEV 的技术更新 (电池劣化、世代交替) 使残值评估变得困难。captive 利用二手车价格数据更新残值模型。机制的一般论参见 [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]] 的 residual-value 一节。
- **Acura 品牌的金融分离**: 面向高端品牌 Acura，将 **Acura Financial Services (AFS)** 设为 AHFC 的 DBA，与 Honda 大众品牌在授信、产品设计上加以差异化。
- **美国 captive 的规模**: 在美国市场，规模与 Ford Motor Credit / Ally Financial 并肩，是美国汽车 ABS 市场的主要发行体。以 SEC 注册、Form 10-K 进行详细披露这一点也与 Toyota Motor Credit 共通。
- **新兴国拓展**: 本田采取与销售公司联动、在各国设立零售金融子公司的战略，正在扩大四轮、二轮两方面的销售金融网。
- **EV / 出行时代的 captive**: 顺应从拥有向使用的转变 (订阅、租赁) 而重新设计 captive 产品的潮流，与 Toyota 的 KINTO 同向。

## 5. 規制・政策

- **国内**: 金融厅 (FSA)、贷金业法、分期付款销售法、保险业法。国内本田金融处于这些监管之下。
- **美国**: 联邦消费者金融保护局 (CFPB)、各州金融监管。AHFC 作为 SEC 注册发行体负有持续披露义务。
- **加拿大**: 联邦、州金融监管 (HCFI)。
- **近期政策议题**:
  - 2024〜 EV 残值评估模型的透明化 (消费者保护)
  - 2025〜 美国 CFPB 强化汽车金融 APR 披露的动向
  - 2024〜 网联汽车数据 × 金融的个人信息保护
  - captive 的 funding 中 ABS 市场 (证券化规制) 的动向

## Related

- [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] · [[manufacturer-finance/toyota-motor|Toyota Motor]]
- [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]] · [[manufacturer-finance/export-finance-mechanism|export finance mechanism]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan (Toyota / Honda / Nissan)]] · [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]
- [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]] · [[manufacturer-finance/sony-group-finance-arm|Sony FG]] · [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]] · [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]]
- [[manufacturer-finance/INDEX|manufacturing INDEX]] · [[JapanFG/INDEX|JapanFG INDEX]] · [[INDEX|FinWiki index]]

## Sources

- Honda Motor Co., Ltd.「Investor Relations」: https://global.honda/en/investors/
- American Honda Finance Corporation「Investor Relations」: https://ir.americanhondafinance.com/
- AHFC「Form 10-K (FY ended Mar. 2025)」: https://ir.americanhondafinance.com/IR_DCTM/quarterly_reports/Form%2010K%20FY2025%20Year%20ended%20Mar.%202025.pdf
- AHFC「About Us」: https://my.americanhondafinance.com/s/about-us-pre-login
- Honda News「Dedicated Acura Financial Services Launched」: https://hondanews.com/en-US/releases/release-f20318eb27d18d74308003004c34bb7d-dedicated-acura-financial-services-launched
- EDINET (有価証券報告書): https://disclosure2.edinet-fsa.go.jp/

---

> [!info] 校对状态
> confidence: **likely**。基于 AHFC 的 SEC Form 10-K、会社概要、Honda Motor IR、Honda News，以公开信息构成。AHFC 为 AHM 的 100% 子公司 (AHM 为 HMC 的 100% 子公司)、1980-02-06 于加利福尼亚州设立、HFS / AFS 的 DBA 运营、对 Honda Canada Finance 的过半数持股、与 HMC 的 Keepwell Agreement，均经一手资料确认。并表财务数字、ABS 发行额波动较大，故参照一手资料，本文以 captive 结构与 funding 机制为中心进行记述。
