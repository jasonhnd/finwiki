---
source: trust-banks/alterna-trust
source_hash: 22f949f4ccb1cd6f
lang: zh
status: machine
fidelity: ok
title: "Alterna Trust"
translated_at: 2026-06-24T09:30:00.000Z
---
# Alterna Trust

## Wiki 路由

Alterna Trust 是 [[trust-banks/INDEX|trust-banks INDEX]] 下的独立信托公司路由，并从 [[trust-banks/trust-companies-japan-index|Japan trust companies registry index]] 提升为单页。阅读时应同时参照 [[payment-firms/progmat|Progmat]]、[[fintech/jp-stablecoin-progmat|Progmat stablecoin / digital asset route]]、[[securities/osaka-digital-exchange|ODX]] 和 [[trust-banks/smtb|SMTB]]。

本页用于 digital securities、security-token trust、beneficiary-certificate issuing trust 和 trust-company platform 问题。

## TL;DR

Alterna Trust 是由 Mitsui & Co. Digital Asset Management (MDM) 与 [[trust-banks/smtb|Sumitomo Mitsui Trust Bank]] 设立、聚焦 digital securities 的信托公司。SMTG 英文 release 将 Alterna Trust 描述为 specializing in digital securities 的 trust company，并说明 beneficiary-certificate issuing trust 的 administration 在 ST issuance 中发挥关键作用。^[source:smtg-alterna-release-2025] MDM release 表示，MDM 在 ALTERNA brand 下建立了端到端提供 ST 取得、运用、受托和销售的体制，[[payment-firms/progmat|Progmat]] 向 MDM 与 Alterna Trust 提供 Progmat SaaS。^[source:mdm-alterna-release-2025] FSA trust-company workbook 列示 オルタナ信託株式会社，免许日 2025-07-03，法人番号 9010001253166，所在地为東京都中央区日本橋堀留町1-9-8。^[source:fsa-trust-list-2026]

## 实体边界

| 项目 | 解读 |
|---|---|
| 法定名称 | オルタナ信託株式会社 / Alterna Trust Co., Ltd.。^[source:mdm-alterna-release-2025][source:smtg-alterna-release-2025] |
| 牌照 / 登记 | FSA `sintaku01.xlsx` 在 trust-company list 中列示 オルタナ信託株式会社，免许日为 2025-07-03。^[source:fsa-trust-list-2026] |
| 地址 | 東京都中央区日本橋堀留町1-9-8；SMTG release 具体写明 Ningyo-cho PREX 3F。^[source:fsa-trust-list-2026][source:smtg-alterna-release-2025] |
| 代表人 | MDM 与 SMTG releases 将 Shosaku Ikeda / 池田匠作列为 representative president / CEO。^[source:mdm-alterna-release-2025][source:smtg-alterna-release-2025] |
| 资本 / 所有权 | SMTG release 给出 capital including capital reserves JPY 665mn，investment ratio 为 MDM 85.1%、SuMiTB 14.9%。^[source:smtg-alterna-release-2025] |

这不是证券经纪、交易所或稳定币发行方页面。有用边界是 security-token fund structures 中的 **trustee / trust-administration role**。

## Digital securities trust role

| 功能 | FinWiki relevance |
|---|---|
| Beneficiary-certificate issuing trust | SMTG release 表示 Alterna Trust 专注于 administration of a trust with certificates of beneficial interest，这是 digital securities issuance 中的关键角色。^[source:smtg-alterna-release-2025] |
| ST issuance schemes 的 trustee | SMTG release 表示 Alterna Trust 作为 digital securities 发行方案中的 trustee，与 asset managers、securities firms 等协作。^[source:smtg-alterna-release-2025] |
| ALTERNA integration | MDM release 表示 MDM 与 Alterna Trust 在 ALTERNA brand 下建立 ST 的取得、运用、受托和销售体制。^[source:mdm-alterna-release-2025] |
| Progmat SaaS | MDM release 表示 Progmat 向 MDM 与 Alterna Trust 提供 Progmat SaaS，支持 digital asset issuance / management infrastructure。^[source:mdm-alterna-release-2025] |
| 资产类别范围 | SMTG release 表示 Alterna Trust initially focuses on real estate，之后计划加入其他 alternative assets、corporate bonds 和 SuMiTB 持有的 claims。^[source:smtg-alterna-release-2025] |

## 集团 / 联盟关系

### MDM side

MDM 是该结构中的 platform / asset-management side。其 release 表示 MDM 为个人投资者建立 ALTERNA service，并运营 ST fund formation / management / sale。release 还表示，使用 Progmat SaaS 使 MDM 可以自行完成 ST management，从而降低 scheme costs，并力求最大化 investor returns。^[source:mdm-alterna-release-2025]

### Sumitomo Mitsui Trust side

[[trust-banks/smtb|SuMiTB]] 提供 trust know-how 和 trust-bank group route。SMTG release 表示 SuMiTB 与 MDM 就 digital securities 进入 business alliance，包括共同经营 Alterna Trust、派遣专家 / 共享 know-how、使用 ALTERNA 组建产品、介绍包括银行持有或 sourced claims 在内的资产，以及 SuMiTB 向 MDM 提供资金而 MDM 使用 SuMiTB 的销售网络。^[source:smtg-alterna-release-2025]

### Progmat boundary

[[payment-firms/progmat|Progmat]] 是基础设施，不是信托公司。MDM release 将 Progmat SaaS 描述为一种产品，使金融机构无需自建 blockchain / DLT nodes 即可开展 ledger-management 和 custody functions 等 digital-asset-related businesses。^[source:mdm-alterna-release-2025]

## 为什么需要独立页面

1. **信托层被显性化**：许多 ST 页面过度强调 platform 或 exchange。Alterna Trust 为 FinWiki 提供 trustee / beneficiary-certificate issuing trust anchor。
2. **连接 trust banking 与 fintech**：本页桥接 [[trust-banks/smtb]]、[[payment-firms/progmat]]、ALTERNA 和 security-token fund issuance。
3. **不是软性合作说明**：FSA list 和公司 releases 支持一个具体受监管实体，而不仅是概念。
4. **限制角色混淆**：market venue 使用 [[securities/osaka-digital-exchange|ODX]]，infrastructure 使用 [[payment-firms/progmat|Progmat]]，trust administration 使用本页。

## 关联

- [[trust-banks/INDEX]]
- [[trust-banks/trust-companies-japan-index]]
- [[trust-banks/smtb]]
- [[payment-firms/progmat]]
- [[fintech/jp-stablecoin-progmat]]
- [[securities/osaka-digital-exchange]]
- [[financial-licenses/securities-license-stack]]
- [[INDEX|FinWiki index]]

## 来源

- **FSA**: Trust-company list `sintaku01.xlsx`（オルタナ信託株式会社，2025-07-03 免许日，2026-06-24 确认）https://www.fsa.go.jp/menkyo/menkyoj/sintaku01.xlsx
- **Mitsui & Co. Digital Asset Management**: Establishment of Alterna Trust and deepening of Progmat / ALTERNA cooperation (2025-07-03) https://corp.mitsui-x.com/news/2025/07/03/pr20250703_2.html
- **Sumitomo Mitsui Trust Group**: Establishment of "Alterna Trust," a New Company that Specializes in Digital Securities (2025-07-03) https://www.smtg.jp/english/-/media/tg/english/news/2025/E250703.pdf

---

> [!info] 验证状态
> confidence: **likely**（2026-06-24）。已直接确认 FSA trust-company workbook，并用 MDM / SMTG releases 校验设立、所有权、trustee role、Progmat / ALTERNA relationship。Broker / exchange / platform 角色已与该 trust-company role 分离。
