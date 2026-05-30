---
source: banking/custody-bank-operating-model
source_hash: 667beca79830e97d
lang: zh
status: machine
fidelity: ok
title: "日本托管银行运营模式"
translated_at: 2026-05-30T18:10:53.983Z
---

# 日本托管银行运营模式

## Wiki route

This entry sits under [[banking/INDEX|banking index]]. Read it with the entity anchor [[JapanFG/custody-bank|日本カストディ銀行 (CBJ)]], the operating peer [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]] and entity [[JapanFG/master-trust-bank|MTBJ]], the landscape summary [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]], the cross-camp matrix [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]], and the operating comparison [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]]. Pair it with [[securities/japan-securities-depository-center|JASDEC]] and [[securities/japan-securities-clearing-corp|JSCC]] for the settlement-infrastructure side, with [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] for the regulatory tier, with the shareholder-side trust-bank pages [[JapanFG/sumitomo-mitsui-trust|SMTB]] and [[JapanFG/mizuho-trust-bank|Mizuho Trust]], and with [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]] for the institutional context.

## TL;DR

日本托管银行(CBJ — 日本カストディ銀行)是日本两强资产管理公用事业的另一半,由 JTSB(日本トラスティ・サービス信託銀行)与 TCSB(資産管理サービス信託銀行)经 2020-07-27 合并而成。其股东阵营是三井住友信托集团(33.3%)+ 瑞穗 FG(27.0%)+ りそな银行(16.7%)+ 第一生命(8.0%)+ 寿险公司(朝日 / 明治安田 / 简保 / 富国)轴心 —— 区别于 MTBJ 的 MUFG 信托 + 日本生命 + 明治安田 + 农林中金阵营。在运营上,CBJ 与 MTBJ 做相同的工作:养老金信托管理、证券投资信托管理及证券托管 —— 在 银行法 + 信託業法 的双牌照路径下,直接参与 JASDEC + 日本银行 JGB 结算。其「日本カストディ銀行(信託口)」名义持有人名称与 MTBJ 的并列出现在每一家 TOPIX 发行人股东名册的顶部。2020 合并将两套重复系统整合为一个委托基础,其驱动力与催生 MTBJ 的被动型基金增长及养老金资产规模相同。CBJ + MTBJ 合计占据日本机构托管量的大部分。

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
| Public AUC anchor | Approximately ¥696 trillion total assets under custody (受託信託財産 + 常任代理契約等に基づく預り資産; of which 信託財産 ¥476tn) as of 2025-03-31 |
| Peer | [[JapanFG/master-trust-bank|Master Trust Bank of Japan (MTBJ)]] |

### 股东结构(公开披露,截至 2020-07-27)

| Shareholder | Stake | Reading |
|---|---|---|
| [[JapanFG/sumitomo-mitsui-trust|三井住友トラストグループ (SMTH)]] | 33.3% | Lead trust-bank shareholder; provides mandate flow from the SMTB pension / 投信 client base; legacy JTSB lineage |
| [[JapanFG/mizuho-fg|みずほフィナンシャルグループ (Mizuho FG)]] | 27.0% | Second trust-bank shareholder (via Mizuho Trust); legacy TCSB lineage |
| りそな銀行 (Resona Bank) | 16.7% | Third-largest shareholder; legacy 大和 / あさひ信託 trust lineage in TCSB camp |
| [[JapanFG/dai-ichi-life|第一生命保険]] | 8.0% | Life-insurer shareholder; provides separate-account custody and corporate-pension mandate flow |
| 朝日生命保険 | 5.0% | Life-insurer shareholder (legacy TCSB) |
| 明治安田生命保険 | 4.5% | Life-insurer shareholder |
| かんぽ生命保険 | 3.5% | Life-insurer shareholder |
| 富国生命保険 | 2.0% | Life-insurer shareholder (legacy TCSB) |

### 为何是两家专业托管行,而非一家

2020-07 合并整合了 JTSB 与 TCSB,但并未走到与 MTBJ 合并的地步。公开解读为:

1. 股东政治 —— MUFG / 生保 轴心与 SMTB / 瑞穗 / りそな / 生保 轴心,若不让渡控制权便难以轻易整合;
2. 风险集中 —— 日本机构资产管理不能依赖单一公用事业(运营风险 + 交易对手风险 + 表决权集中);
4. 成本套利 —— 各阵营内部的重复系统(SMTB / 瑞穗 阵营内的 JTSB 与 TCSB)是冗余的,但阵营间的重复则形成竞争制衡。

2020 合并实现了**阵营内**整合。阵营间整合(CBJ + MTBJ)仍是悬而未决的问题。

### 谱系图

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

### 业务条线图

| Segment | Core function | Typical client base | What it is not |
|---|---|---|---|
| **信託カストディ (Securities custody)** | Safekeeping of equities, JGB, corporate bonds, foreign securities; book-entry registration; corporate-actions processing; dividend / interest receipt; tax reclaim ops | Pension plans, asset managers, life insurers, foreign global custodians needing a Japan sub-custodian | Not a proprietary investor; 「信託口」 nominee label is a recordkeeping construct |
| **年金信託 (Pension trust administration)** | Trust contract for 厚生年金基金, DB, DC plans — recordkeeping, asset-owner reports, benefit-payment ops | GPIF, large corporate DB plans, DC plan administrators | Not the investment manager |
| **投信受託 (Securities-investment-trust admin)** | Trust contract for 公募投信 / 私募投信 — fund accounting, NAV calc, holdings register, distribution processing | Asset managers using CBJ as 受託会社 (notably SMTB AM affiliates, Mizuho AM, Resona AM affiliates) | Not the fund manager or distributor |
| **特定金銭信託 (特金) ops** | 特金 vehicles for institutional / corporate investors | Insurers, corporates, regional banks | Not a discretionary asset manager |
| **資産管理サービス (Master custody)** | Institutional master-custody, multi-mandate consolidation, investment-instruction processing | Large multi-mandate asset owners | Not the sponsor |

### 运营职能分解

| Function | Description |
|---|---|
| Safekeeping & book-entry admin | Direct connection to [[securities/japan-securities-depository-center|JASDEC]] book-entry transfer; BoJ JGB direct-account holder; cash-settlement-account operation |
| Settlement (cash equity) | DVP-X1 / DVP-X2 / DVP-X3 settlement via JASDEC + JSCC clearing |
| Settlement (JGB) | Direct participation in BoJ JGB book-entry system |
| Settlement (corporate bond / CP) | Book-entry transfer via JASDEC for 社債 and CP |
| Fund accounting / NAV calculation | Daily NAV calculation for 投信 mandates; 投信協会 standards |
| Corporate actions | Dividend / interest receipt, splits, rights offerings, conversions; foreign-asset CA via global custodian sub-network |
| Voting operations | Mechanical execution of asset-owner / manager instructions; ICJ electronic-voting forwarding |
| Sub-custody for foreign assets | Re-routing via [[JapanFG/bny-mellon-japan|BNY Mellon]] / [[JapanFG/state-street-japan|State Street]] / [[JapanFG/jpmorgan-japan|JP Morgan]] / [[JapanFG/citigroup-japan|Citi]] for non-JP assets |
| Member / participant ops | Pension member balance reporting (DB / DC), benefit-payment ops |
| Securities-lending support | Lending program admin (when client opts in); collateral posting; recall management |

### 「信託口」名义持有人界面 —— CBJ 特定

CBJ 的名义持有人名称「日本カストディ銀行(信託口)」几乎出现在每一家 TOPIX-100 发行人的大股东行中,通常排在 MTBJ「信託口」之后,位列第 2位 或第 3位。其模式为:

| Reading | Interpretation |
|---|---|
| Legal record name | CBJ |
| Beneficial owners | SMTB-side asset managers, Mizuho-side asset managers, Resona-side asset managers, 第一生命 separate accounts, Asahi / Meiji Yasuda / Fukoku Life accounts, foreign sub-custody clients of CBJ |
| Voting instruction source | Upstream asset manager or asset owner — not CBJ |
| Underlying exposure type | Largely passive index + active pension mandates + 投信 holdings |

### 对比 MTBJ —— 运营细节比较

| Field | CBJ | MTBJ |
|---|---|---|
| Established | 2020-07-27 (JTSB+TCSB merger) | 2000-05 (greenfield) |
| Shareholder camp | SMTH 33.3% + Mizuho FG 27.0% + Resona 16.7% + 第一生命 8.0% + 朝日 / 明治安田 / かんぽ / 富国 生保 | MUFG Trust + Nippon Life + Meiji Yasuda + Norinchukin |
| Lead shareholder stake | 三井住友トラストグループ (SMTH) 33.3% | MUFG Trust 46.5% |
| Public AUC anchor | ~¥696tn (2025-03-31; total assets under custody) | ~¥770tn (2025-03-31; 管理資産残高) |
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

### 对比全能型信托银行

| Dimension | CBJ | Megabank full-service trust banks (MUFG Trust / SMTB / Mizuho Trust) |
|---|---|---|
| Custody / 投信受託 | Core function (utility-scale) | Run internally + often delegate processing to CBJ / MTBJ |
| Real-estate trust | No | Major business line (RE securitization, J-REIT) |
| 相続 / 遺言 / PB | No | Yes — significant wealth-management revenue |
| 不動産信託 + 信託受益権 (J-REIT) | No | Yes — full processing |
| Securities agency (株式事務代行) | No | Yes |
| Pension front-office (運用提案) | No | Yes |
| DC service window | Limited (admin only) | Front office + admin |

CBJ 负责**处理**,而其信托银行股东负责**客户关系 + 前台委托**。这种纵向分工是有意为之,也正是信托银行股东未将 CBJ 重新并入其合并运营的原因。

### 对比全球托管行

| Dimension | CBJ | Global custodians (BNY Mellon / State Street / JPM / Citi Japan) |
|---|---|---|
| Primary asset universe | Domestic Japan assets | Cross-border + foreign-investor JP sub-custody |
| ICSD connectivity | Indirect (via globals) | Direct |
| Voting administration | Yes (mechanical, ICJ-linked) | Yes (via Broadridge etc.) |
| Pricing power on JP custody | High (utility scale) | Medium (sub-custody premium) |
| Pricing power on foreign custody | Low (sub-rolled to globals) | High |
| Regulatory base | FSA only | FSA + home-country regulator (FRB / OCC / ECB / PRA) |
| G-SIB status | No | All four parents are G-SIBs |

## 4. 手续费与收益结构

CBJ 未公开披露详细的费率表。公开领域的解读为:

| Revenue line | Pricing basis | Public visibility |
|---|---|---|
| Pension trust administration fee | AUC bps (very low at GPIF / large-DB scale) | Not disclosed at line-item level (CBJ publishes no detailed fee schedule) |
| 投信受託 admin fee | AUC bps — 0.01-0.05% / year of NAV typical | Disclosed per fund in 信託約款 |
| Securities custody fee | AUC bps per asset class + per-ticket settlement fees | Not publicly disclosed |
| Voting / CA admin | Typically bundled into custody fee | Not separately disclosed |
| Securities-lending agent fee | Revenue share with beneficial owner | Not separately disclosed |
| Cash-balance interest income | Low | Not separately disclosed |

### 为何 CBJ 的费用经济学与 MTBJ 高度相似

两者针对相似的委托规模运营相同的产品集合。其费用定价锚定于:

2. **GPIF 招标压力** —— GPIF 定期开展 資産管理機関 评选,CBJ 与 MTBJ 均参与竞争;既有在位定价,也有挑战者定价。
3. **被动型基金 AUM 增长** —— 被动指数基金推高了 CBJ 管理的 AUC,同时压低了每个基点的费用,形成量升 / 利降的态势。

### 跨行费用经济学解读

如需 MTBJ + CBJ + 大型银行信托部门 + 全球托管行的细粒度费用比较,参见 [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]]。

| Aspect | CBJ | MTBJ |
|---|---|---|
| Pricing power vs asset managers | High (utility scale) | High (utility scale) |
| Pension trust admin fees trend | Stable to slightly compressing on large mandates | Same |
| Foreign-asset custody | Pass-through cost from globals | Pass-through cost from globals |
| Cost-side scale | High fixed-IT cost; per-mandate marginal cost very low | Same — both run utility economics |

### 监管堆栈

| Layer | Statute / regulator | CBJ implication |
|---|---|---|
| Bank supervision | 銀行法 + 金融庁 監督指針 (信託兼営銀行 section) | Capital adequacy + governance + IT-risk; CBJ runs a light credit book and consequently a light capital ratio relative to AUC |
| Trust-business supervision | 信託業法 + 金融庁 監督指針 (信託業 section) | Trust account separation, fiduciary duty, conflict-of-interest controls |
| Securities-law overlay | 金融商品取引法 — 投信受託会社 / カストディ ops | NAV calc, custody standards, 投信協会 compliance |
| Pension regulation | 厚生年金保険法, 確定給付企業年金法, 確定拠出年金法 | DB / DC administration, fiduciary reporting |
| Deposit insurance | 預金保険機構加盟 | Statutory membership; minor relevance given small deposit base |
| AML / CFT | 金融庁 + 警察庁 + 国税庁 reporting | Custody-side AML applied at underlying client level |
| Stewardship / governance | スチュワードシップ・コード (voluntary) | Voting-admin transparency; CBJ executes per client instruction |
| Data / personal info | 個人情報保護法, 金融分野ガイドライン | Pension member data, NISA data |

### 会计处理

| Item | Treatment |
|---|---|
| Trust assets (信託財産) | Off-balance-sheet at CBJ; on-balance at beneficial owner |
| Custody / admin fees | Recognized as fee income in P&L |
| Own-account deposits | On-balance-sheet — small |
| Settlement-account residuals | Short-duration; cash + due-from-banks |
| Goodwill / merger accounting (2020) | Recognized on JTSB + TCSB merger; specifics in shareholder consolidated disclosure |

### 合并会计说明

2020-07-27 JTSB + TCSB 合并涉及跨越数年的系统整合;整合成本经由 CBJ 损益表流转,并由股东母公司在其合并信托银行经营分部中吸收。细粒度的成本回收与 IT 减记状况未公开披露(CBJ 非上市,仅报告汇总数字;合并商誉的具体内容位于股东母公司的合并披露中)。

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

CBJ 是以下制度的直接参与者:

- 株式振替制度 (dematerialized listed shares)
- 一般債振替制度 (corporate bonds: 普通社債, 転換社債)
- 短期社債振替制度 (CP)
- 投資信託振替制度 (publicly offered 投信 units)

### JSCC + DVP

CBJ 的现货股票结算通过 [[securities/japan-securities-clearing-corp|JSCC]] 作为中央对手方进行,产生 DVP-X1 / X2 / X3 质量的结算。JSCC 还为回购及场外衍生品运营 CCP 服务 —— CBJ 对这些层面的敞口取决于各个客户的委托范围。

### 日本银行 JGB 账簿登记

CBJ 在日本银行 JGB 账簿登记系统中持有直接账户,为养老金及 投信 委托提供 DVP JGB 结算,无需中间分托管。

### 境外资产分托管链条

对于 CBJ 管理委托中的非日本资产:

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
- [[JapanFG/custody-bank]]
- [[JapanFG/master-trust-bank]]
- [[JapanFG/sumitomo-mitsui-trust]]
- [[JapanFG/mizuho-trust-bank]]
- [[JapanFG/mitsubishi-ufj-trust-bank]]
- [[JapanFG/dai-ichi-life]]
- [[JapanFG/bny-mellon-japan]]
- [[JapanFG/state-street-japan]]
- [[JapanFG/jpmorgan-japan]]
- [[JapanFG/citigroup-japan]]
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
