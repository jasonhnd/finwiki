---
source: exchanges/fsa-snapshot-delta-log
source_hash: ee8dd412b6b9e3a3
lang: zh
status: machine
fidelity: ok
title: "FSA crypto operator registry — snapshot delta log"
translated_at: 2026-05-31T03:19:56.410Z
---

# FSA crypto operator registry — snapshot delta log

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度]] for the registration framework, [[exchanges/jp-vasp-ma-consolidation-history|JP VASP M&A 史]] for entity consolidation context, and [[exchanges/fsa-foreign-exchange-warning-system|FSA 海外無登録警告書制度]] for the unregistered foreign-operator side.

## 目的

FSA「加密资产交换业者登录一览」(`kasoutuka.xlsx`) 与 JVCEA 会员一览，因新规登录、停业、社名变更、登录号码重新付与等而**持续变动的一次注册表（primary registry）**。本页作为按时间序列记录其差分的模板 / 日志而运作。

各 VASP entity 页面（[[exchanges/jp-exchange-bitbank|bitbank]] / [[exchanges/jp-exchange-line-xenesis|LINE Xenesis]] 等）记录时点 snapshot，但**「何时发生了什么变化」**的俯瞰汇集于本页。

## 记录模板（snapshot 单位）

每次 FSA 公表更新时，追记以下区块：

```
## YYYY-MM-DD snapshot delta

- **基准 snapshot**: 令和X年Y月Z日付 FSA kasoutuka.xlsx
- **总登录社数**: NN 社（前次 MM 社，差分 ±N）
- **新规登录**:
  - 关东财务局 第NNNNN号 — 〇〇株式会社（YYYY-MM-DD 登录）
- **停业 / 登录注销**:
  - 关东财务局 第NNNNN号 — 〇〇株式会社（YYYY-MM-DD 停业）
- **社名变更**:
  - 关东财务局 第NNNNN号 — 旧 △△株式会社 → 新 □□株式会社（YYYY-MM-DD）
- **吸收合并**:
  - △△株式会社 → 被 □□株式会社吸收（YYYY-MM-DD）
- **总店所在地变更**（仅重要案件）:
  - 〇〇株式会社 — 旧 ××都港区 → 新 ××都中央区（YYYY-MM-DD）
- **JVCEA 会员状态变动**:
  - 第一种 → 第一种 + 第二种（取得加密资产衍生品交易业）
- **本页 entity 影响**:
  - [[exchanges/jp-exchange-XXX]] — 需更新 last_tended
- **行业话题**:
  - （特记事项：制度变更・大型 M&A・大手新规参入等）
```

## 已知主要 snapshot 变动履历（过去 2 年）

| Snapshot 时点 | 主要变动 | 参考 entity wiki |
|---|---|---|
| 令和6年4月1日（2024-04-01） | FTX Japan(旧 QUOINE) 在该时点仍以「FTX Japan」名义维持登录（客户资产 100% 返还已于 2023-02 完成）。**旧记载「bitbank 吸收完成」有误** —— 取得 FTX Japan 的并非 bitbank 而是 bitFlyer Holdings（完全子公司化 2024-07・改商号为 Custodiem 2024-08，详见后述 2024-10-01 行）。该 snapshot 的其他全面差分由公开一次源难以重构。 | [[exchanges/ftx-japan-100pct-return-case-study]] / [[exchanges/jp-exchange-custodiem]] |
| 令和6年10月1日（2024-10-01） | **社名变更**: FTX Japan 株式会社 → 株式会社 Custodiem（伴随 bitFlyer HD 完全子公司化于 2024-07-26 公表，2024 年夏施行商号变更）。总登录社数在 29 社持平（Wayback 的 2024-08-20 付 FSA xlsx 收载「FTX Japan」，2025-01-15 付则消失＝已改称为 Custodiem）。另外 DMM Bitcoin 的停业意向于 2024-12-01 公表，但在此时点尚未反映登录注销。〔出处: Custodiem 商号变更告知 / FSA xlsx Wayback 2024-08-20〕 | [[exchanges/jp-exchange-custodiem]] |
| 令和7年4月1日（2025-04-01） | **登录注销（停业）**: 株式会社DMM Bitcoin（关东财务局长 第00010号，平成29年12月1日登录）—— 因 2024-05 约 482億円 BTC 流出，于 2025-03-08 将账户・托管资产移管至 SBI VC 交易并终止服务，注销登录。**社名变更**: CoinBest 株式会社 → OSL Japan 株式会社（香港上市 OSL Group 旗下，2025-02 改称。登录号码・法人号码 3010001185935 被承继）。总登录社数 29 → 28 社（在 令和7年6月30日付 FSA 一览中 28 社确认）。与 FSA xlsx 的 2025-02-06 付（29社・第00010号收载）→ 2025-09-07 付（28社・第00010号消失）diff 一致。〔出处: ITmedia / SBI HD 移管发布 / DMM Bitcoin Wikipedia（第00010号）/ 赤坂经济新闻（OSL 改称）/ FSA xlsx Wayback 2025-02-06・2025-09-07〕 | [[exchanges/jp-exchange-dmm-bitcoin]] / [[exchanges/jp-exchange-sbi-vc-trade]] |
| 令和7年10月1日（2025-10-01） | 该时点的新规登录・停业由公开一次源无法确定（因 FSA 不常设公开过去版一览，严格 diff 难以重构）。总登录社数在 **28 社持平**（与「截至 2025 年 10 月末时点为 28 业者」的公开记述以及 令和7年6月30日付 28 社 一致）。未确认到值得特记的新规参入・停业公开报道。〔出处: FSA xlsx Wayback 2025-09-07（28社）〕 | — |
| **令和8年4月1日（2026-04-01）** | 最新 snapshot 基准（[[exchanges/jp-exchange-bitbank]] / [[exchanges/jp-exchange-line-xenesis]] 等引用元） | 参照个别页面 |
| 令和8年10月1日（2026-10-01）预定 | **LINE Xenesis 停业反映预定**（2026-06-01 服务终止） | [[exchanges/jp-exchange-line-xenesis]] |

## 更新工作流

1. **FSA 公表确认** — 直接 download `kasoutuka.xlsx` 的更新（通常半期基础：4月/10月，有随时更新）
2. **与前次 snapshot 的 diff** — 机械性比较登录号码列 / 商号列 / 总店所在地列
3. **在本页追记 snapshot delta 区块**
4. **更新受影响 entity wiki 的 `last_tended`**
5. **新规登录社的 wiki 未整备** → 在 [[JapanFG/missing-financial-institutions-backlog|missing-financial-institutions-backlog]] 记载为追加候选
6. **停业社的 entity wiki** → 变更为 `status: deprecated`，追记停业日
7. **反映 CHANGELOG**（在 domain INDEX 记录 snapshot 反映日）

## 与 JVCEA 会员一览的核对

FSA 登录社与 JVCEA 会员社存在**不完全一致**的情况（登录后不久正在办理 JVCEA 加盟手续 / 加盟拒绝事例等）。本日志中亦并记差分：

- **FSA 登录 + JVCEA 已加盟**：标准形
- **FSA 登录 + JVCEA 未加盟**：需注视（自主规制非加盟状态属异例）
- **FSA 登录注销 + JVCEA 残存**：典型的停业延迟模式

## 关联

- [[exchanges/INDEX]] — exchanges domain INDEX
- [[exchanges/fsa-vasp-registration-system]] — 登录制度・号码体系
- [[exchanges/jp-vasp-regulatory-timeline]] — 监管年表
- [[exchanges/jp-vasp-ma-consolidation-history]] — JP VASP M&A 史
- [[exchanges/jp-vasp-parent-company-map]] — 母公司地图
- [[exchanges/fsa-foreign-exchange-warning-system]] — 海外无登录警告书制度（补充信息）
- [[exchanges/jvcea-spot-volume-statistics-analysis]] — JVCEA 现货统计

## Sources

- [FSA 加密资产交换业者登录一览 Excel](https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx) — 一次源（仅公开现行版）（访问 2026-05-30）
- [JVCEA 会员一览](https://jvcea.or.jp/member/) — 自主规制侧核对源（访问 2026-05-30）
- [金融厅 加密资产相关告示・行政处分公表页面](https://www.fsa.go.jp/) — 停业・行政处分侧源（访问 2026-05-30）
- [FSA kasoutuka.xlsx Wayback 2024-08-20](https://web.archive.org/web/20240820011719/https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx) — 全业者数 29，收载「FTX Japan」。2024-10-01 行的改称前 snapshot（访问 2026-05-30）
- [FSA kasoutuka.xlsx Wayback 2025-02-06](https://web.archive.org/web/20250206070223/https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx) — 全业者数 29，收载 第00010号（DMM Bitcoin）・CoinBest。2025-04-01 diff 的基准前 snapshot（访问 2026-05-30）
- [FSA kasoutuka.xlsx Wayback 2025-09-07](https://web.archive.org/web/20250907103139/https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx) — 全业者数 28，第00010号消失・收载 OSL Japan。反映 DMM Bitcoin 注销与 CoinBest→OSL 改称（访问 2026-05-30）
- [Custodiem「FTX Japan 株式会社的商号变更通知」](https://support.custodiem.com/hc/ja/articles/29710664413709-FTX-Japan-%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%81%AE%E5%95%86%E5%8F%B7%E5%A4%89%E6%9B%B4%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B) — FTX Japan→Custodiem 改称（bitFlyer HD 完全子公司化，2024-07-26 公表）（访问 2026-05-30，正文取得经由搜索摘要）
- [赤坂经济新闻「OSL Group Limited 旗下的 CoinBest 改名为『OSL Japan 株式会社』」](https://akasaka.keizai.biz/release/377391/) — CoinBest→OSL Japan 改称（2025-02）（访问 2026-05-30）
- [ITmedia NEWS「『DMMビットコイン』将停业」](https://www.itmedia.co.jp/news/articles/2412/02/news093.html) — DMM Bitcoin 停业意向 2024-12-01 公表，资产移管 SBI VC 交易（访问 2026-05-30）
- [SBI HD 新闻发布（DMM Bitcoin 移管 14 币种开始经办）](https://www.sbigroup.co.jp/news/2025/0226_15274.html) — 向 SBI VC 交易的账户・资产移管（2025-03）（访问 2026-05-30）
- [DMM Bitcoin — Wikipedia](https://ja.wikipedia.org/wiki/DMM_Bitcoin) — 关东财务局长 第00010号（平成29年12月1日登录），2025-03-08 服务终止（访问 2026-05-30）

---

> [!info] 校核状态
> confidence: **likely**（v1.0 模板页面，2026-05-25 新规创建）。本页是持续追记・更新的日志性 wiki，在每次添加 snapshot delta 区块时，应以 FSA 一次源确认 diff 的真实性。模板结构本身适于稳定运营。
