---
source: structured-finance/japan-abs-market-overview
source_hash: 2433adf2a6dee3a6
lang: zh
status: machine
fidelity: ok
title: "Japan ABS market overview"
translated_at: 2026-06-01T04:15:40.132Z
---

# Japan ABS market overview

## TL;DR

日本资产支持证券市场大致分为三层：规模很大的 JHF MBS 层（Japan Housing Finance Agency，政府支持的 senior class）、private RMBS 层（由 megabanks 和信托银行发起的 jumbo mortgage pools），以及通过 TK-GK SPVs 或指定目的公司发行的 consumer / auto / CMBS / project 层。2008 之后，CMBS 侧发行急剧下降；JHF MBS 引擎持续运行，现在主导日元计价结构化票据。请将本页作为 [[structured-finance/INDEX]] 的路由界面，并用于将 [[structured-finance/INDEX]] 中的 originator company pages 连接到本领域的结构机制。

## Wiki route

| 你想了解 | 前往 |
|---|---|
| JHF MBS 引擎 | [[structured-finance/jhf-mbs-mechanics]] |
| Private RMBS 结构 | [[structured-finance/japan-rmbs-issuance-structure]] |
| CMBS 结构 | [[structured-finance/japan-cmbs-issuance-structure]] |
| Auto-loan ABS | [[structured-finance/auto-loan-abs-japan-toyota-honda]] |
| Consumer / card ABS | [[structured-finance/consumer-loan-abs-japan-card-issuer]] |
| SPV vehicle choice | [[structured-finance/spv-tk-gk-vehicle-japan-tax]] |
| JHF vs private spread | [[structured-finance/jhf-mbs-vs-private-rmbs-spread]] |

## 1. Market layer map

| 层 | 典型发行人 | 载体 | 大致规模倾向 |
|---|---|---|---|
| JHF MBS | [[policy-finance/japan-housing-finance-agency]] | JHF Trust | 最大的日元结构化层 |
| Private RMBS | Megabanks（[[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]]）、信托银行 | 信托受益权 | 中等规模，偶有公开交易 |
| CMBS | 房地产 sponsors、megabanks | TMK 或 TK-GK | 2008, 之后规模小，在 2020年代增长 |
| Auto-loan ABS | [[card-issuers/toyota-finance]]、[[leasing-firms/toyota-financial]]、Honda Finance、Nissan Credit | TK-GK | 重复发行人，granular pools |
| Consumer / card ABS | [[card-issuers/orico]]、[[card-issuers/jaccs]]、[[card-issuers/aplus]]、[[card-issuers/mufg-nicos]] | TK-GK 或 trust | 循环结构常见 |
| Lease ABS | [[leasing-firms/mitsubishi-hc-capital]]、其他租赁公司 | Trust | 租赁池中存在 residual-value risk |
| Project / infra | Sponsor SPC | TMK 或 TK-GK | 小众，逐笔交易 |

## 2. Originator landscape

- **银行**：megabanks（[[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]]）和主要信托银行发起 jumbo mortgage 和 corporate-loan collateral。关于 originator 侧见 [[banking/INDEX]]。
- **汽车金融公司**：Toyota Finance、Toyota Financial Services、Honda Finance、Nissan Credit、SMBC Auto、MUFG Capital Auto Loan 将 auto-loan ABS 作为资产负债表管理工具发行。
- **Consumer / card issuers**：Aplus、Orico、JACCS、MUFG NICOS、[[card-issuers/jcb]]、[[card-issuers/credit-saison]] 使用 card-receivable ABS 作为与银行授信额度并行的融资工具。
- **公共部门**：JHF 是主导性的 public-credit issuer；见 [[policy-finance/japan-housing-finance-agency]] 和 [[structured-finance/jhf-mbs-mechanics]]。
- **Trust banks as trustees**：[[trust-banks/sumitomo-mitsui-trust]] 和其他信托银行担任信托受益权结构中的 trustee；信托银行角色是结构性的，不是 originator。

## 3. Dealer / arranger landscape

| 角色 | 典型机构 |
|---|---|
| Lead arranger | [[securities-firms/mizuho-securities]]、[[securities-firms/mufg-mums]]、Nomura、Daiwa SG（[[securities-firms/daiwa-sg]]）、SMBC Nikko |
| Trustee | [[trust-banks/sumitomo-mitsui-trust]]、Mitsubishi UFJ Trust、Mizuho Trust |
| Rating agency | JCR、R&I（见 [[structured-finance/credit-rating-methodology-jcr-r-and-i]]）；跨境为 S&P、Moody's、Fitch |
| Servicer | Originator 或关联 servicer；有时是 specialized special servicer |

## 4. Total market size signals

- JHF MBS program 按月发行，因此是日元中迄今最大的单一 structured-paper engine。
- Private RMBS 发行是间歇性的 —— megabanks 通常以 programmatic basis 发行 jumbo deals，但不是按月发行。
- CMBS 发行量在 2008 之后急剧下降，且仅部分恢复；见 [[structured-finance/japan-cmbs-issuance-structure]]。
- Auto-loan ABS 和 card-receivable ABS 规模有意义，但相对于 JHF MBS 引擎较小。

## 5. Rating-agency criteria

- JCR 和 R&I 是日本国内结构化交易的主导评级机构。
- 其 structured-finance methodology 覆盖 ABS、RMBS、CMBS 和 securitization SPCs。
- 两者在 FSA 指定下相当于 NRSRO。见 [[structured-finance/credit-rating-methodology-jcr-r-and-i]]。
- 对跨境交易，S&P、Moody's 和 Fitch 通常会与 JCR 或 R&I 一同评级。

## 6. Post-2008 evolution

| 时期 | 模式 |
|---|---|
| 2003-2007 | CMBS 和 RMBS 规模增长；激进结构化；conduit deals 常见。 |
| 2008-2010 | CMBS 市场基本关闭；2007-vintage 交易违约；评级下调。 |
| 2010-2015 | JHF MBS 引擎继续运行；private market 低迷；仅有保守结构。 |
| 2015-2020 | 选择性复苏；megabanks 发行 jumbo private RMBS；auto / consumer ABS 稳定。 |
| 2020s | 围绕物流仓库和办公单一借款人交易的 CMBS 复苏；consumer-finance ABS 活跃。 |

## 7. Why it matters

- 日本结构化金融市场是二分的：一个很大的 public-credit engine（JHF MBS）和一个更小、更保守的 private layer。
- JHF MBS 层驱动大部分日元 structured-paper 供给和定价；private deals 相对于它定价。
- 2008 之后的 reset 使日本拥有发达市场中最保守的结构化惯例之一 —— CMBS-specific story 见 [[structured-finance/japan-cmbs-issuance-structure]]。
- 投资者基础由寻求 JGB-plus yield 的寿险公司（[[life-insurers/daido-life]]、[[life-insurers/asahi-life]]等）、地方银行和资产管理公司主导。

## Related

- [[structured-finance/INDEX]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-cmbs-issuance-structure]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[policy-finance/japan-housing-finance-agency]]
- [[real-estate-finance/INDEX]]
- [[banking/INDEX]]

## Sources

- Japan Housing Finance Agency, public IR。
- JCR (Japan Credit Rating Agency), structured-finance criteria pages。
- R&I (Rating and Investment Information), structured-finance methodology。
- JSDA (Japan Securities Dealers Association)。
- ASF Japan (Asset Securitization Forum Japan)。
- Megabank IR (MUFG, SMFG, Mizuho FG)。
