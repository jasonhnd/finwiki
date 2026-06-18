---
source: exchanges/jp-exchange-jpyc
source_hash: 572712ecf2c9b4cb
lang: zh
status: machine
fidelity: ok
title: "JPYC 株式会社 — 日元稳定币发行体（资金移动业者型）"
translated_at: 2026-06-18T23:33:48.366Z
---

# JPYC 株式会社 — 日元稳定币发行体（资金移动业者型）


## Wiki 路径

本条目位于 [[exchanges/INDEX|exchanges index]] 之下。请与 [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] 一并阅读以了解相邻语境，与 [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] 一并了解更广泛的系统边界。

> 资金移动业者登记 关东财务局 第00099号 · JVCEA 会员 #1042（资金移动业）· 设立 2019年11月

> Namespace note: JPYC 并非传统的加密资产交易所。出于历史性的稳定币路由原因，本详情页面仍保留在 `exchanges/` 下；运营公司锚点为 [[payment-firms/jpyc]]。

## 1. 法人・股东

- **商号**: JPYC 株式会社
- **英文名**: JPYC Inc.
- **设立**: 2019年11月
- **总部**: 〒100-0004 东京都千代田区大手町1丁目6番1号 大手町大厦4层 FINOLAB 内
- **资本金**: 1億円（100,000,000円）
- **母公司 / 上市**: 非上市。主要投资者（已公开部分）: 在 2026-04 追加轮中，Metaplanet（东证 Growth 3350）・住友生命保险相互会社等参加。2026-02 ，Asteria 株式会社（东证 Growth 3853）作为领投方参加 Series B 17.8億円并缔结资本业务合作。

## 2. 牌照・登记状况

**JPYC 株式会社并非加密资产交易业者**。该公司的主要牌照为以下 2 件:

| 类别 | 登记编号 | 依据法 |
|------|----------|--------|
| 资金移动业者 | 关东财务局 第00099号 | 资金结算法 第37条 |
| 预付式支付手段（第三方型）发行者 | 关东财务局 第00773号 | 资金结算法 第31条 |

- **JVCEA**: 第一类会员 #1042 — 仅登记区分「资金移动业（Funds transfer）」。未被授予加密资产交易业・衍生品・电子结算手段等取引业的 JVCEA 区分。
- 亦持有旧货商（东京都公安委员会：第304372004277号）・旧货市场主（同第304372004710号）（推测为应对 NFT 二次流通）。

**为何并非「加密资产交易业」**: JPYC 以日元锚定稳定币「JPYC」的发行・流通为业务核心，但该代币在法律上被分类为「电子结算手段（修订资金结算法 2 条 9 项）」，自修订法于 2023 年 6 月施行以来，该公司在其取得的资金移动业牌照框架下进行发行・赎回。从原「预付式支付手段」形态（JPYC v1）向「资金移动业者型稳定币」（JPYC v2）的制度迁移于 2025 年后半完成。

## 3. 取扱货币

- **取扱币种**: 仅 JPYC（日元锚定稳定币）1 种
- **发行网络**: 支持 Ethereum・Polygon・Avalanche・Gnosis Chain・Shiden Network・Astar Network 等多链（参见该公司官方 FAQ）
- **锚定比率**: 1 JPYC = 1 日元
- **流动性**: 可在 HashPort Wallet 等各类钱包中持有・转账・支付
- **无加密资产取扱**: 不提供 BTC・ETH 等加密资产的买卖服务

## 4. 业务范围

- **JPYC EX（交易所・发行平台）**: 存入日元并发行（购买）JPYC・赎回（出金为日元）的窗口。2025 年秋季开始面向个人的服务。
- **面向法人的服务**: 「JPYC 网关」（与 Asteria 公司共同开展）等企业 DX 支援・自动支付解决方案。
- **支付**: 在餐饮店（「千房」等）等各类加盟店逐步扩大 JPYC 支付支持（截至 2026-04 ）。
- **每1 次赎回上限**: 100 万円（截至 2025-12  → 有报道称在 2026-05 将发行上限修订为每 1 次 100 万円）。
- **法定货币入金渠道**: 银行转账。
- 不提供加密资产借贷・衍生品・NFT 市场等。

## 5. 市占・交易额

- **累计账户数**: 截至 2025-12 ，突破 1 万件（JPYC EX 开设账户数）。
- **累计发行额**: 截至 2025-12 ，突破 5 億円相当额。
- **客户层**: 个人零售（JPYC EX）＋ 法人（企业间结算・薪酬 DeFi 利用等）。
- **市占**: 日本国内唯一合规的**资金移动业者型**日元稳定币发行体。与 Progmat Coin（信托型）・DCJPY（银行型）并列为国内 3 大日元 SC 的一角。与加密资产交易业者的竞争轴不同。

## 6. 沿革・重大事件

| 时期 | 事件 |
|------|--------|
| 2019-11 | JPYC 株式会社 设立。冈部典孝就任代表董事 |
| 2021 | 在 Ethereum 上开始提供 JPYC（v1 预付型） |
| 2022 | 扩大多链部署（Polygon・Avalanche 等） |
| 2023-06 | 修订资金结算法施行。开始准备将 JPYC 的制度定位从「预付式支付手段」迁移至「电子结算手段（稳定币）」 |
| 2023 | 自关东财务局取得资金移动业者登记（第00099号） |
| 2025-Q3 | JPYC v2（资金移动业基础）服务开始。JPYC EX 面向个人提供 |
| 2025-12 | JPYC EX 累计账户突破 1 万件・累计发行额突破 5 億円 |
| 2026-02 | 宣布以 Asteria 株式会社为领投方的 Series B 募集 17.8 億円。缔结资本业务合作 |
| 2026-04-21 | 在 Series B 追加交割中募集 28 億円（Metaplanet・住友生命等参加） |
| 2026-04-28 | 金融厅官方资料首次将 JPYC 明示为「资金移动业」 |
| 2026-05-16 | 在 JPYC EX 将发行上限修订为每 1 次 100 万円的大型更新 |

※ 截至 2026-05 ，未有行政处分・遭黑客攻击・系统重大故障的公开报告。

## 7. 战略动向

- **Asteria 资本合作**（2026-02）: 与 IT 基础设施企业 Asteria 共同开展「JPYC 网关」，加速将 JPYC 嵌入法人的 API 汇款・自动结算。
- **Metaplanet・住友生命参加**（2026-04）: 以持有比特币而闻名的 Metaplanet 及大型寿险公司参与出资，提升机构投资者层的认知度。
- **加盟店扩大**（2026-04）: 在餐饮连锁「千房」等开始 JPYC 支付，扩展面向一般消费者的使用场景。
- **额度上调**（2026-05）: 将发行上限修订为每 1 次 100 万円以促进企业利用。
- 截至 2026-05 ，无法确认关于海外拓展・IPO 的公开计划。

## 8. 相关人物

- **冈部典孝**（おかべ のりたか）: 代表董事。JPYC 的创始人。一直推动在日本国内发行日元锚定稳定币的核心人物。
- 其他董事・股东构成的详情未公开（截至 2026-05 ）。

## 相关

- [[fintech/japan-stablecoin-regulatory-landscape]] — 日本稳定币三层法律制度（JPYC・USDC・信托型的定位）
- [[payment-firms/jpyc]] — JapanFG operating-company anchor
- [[fintech/jp-trust-type-sc-architecture]] — 三型 SC 比较（信托型・银行型・资金移动业者型）
- [[fintech/japan-financial-regulation]] — 日本金融监管全体
- [[exchanges/jp-exchange-sbi-vc-trade]] — SBI VC Trade（亦持有电子结算手段等取引业的交易业者的比较示例）
- [[fintech/global-stablecoin-regulatory-five-pole-matrix]] — 全球稳定币监管 5 极比较
- [[fintech/stablecoin-channel-japan-sbi-jpyc-ring]] — SBI × JPYC stablecoin 渠道
- [[exchanges/jp-cex-deposit-token-stablecoin-integration]] — JP CEX deposit token / stablecoin 整合

## Sources

- [JPYC 株式会社 公司概要](https://jpyc.co.jp/about)（取得 2026-05-18）
- [JPYC EX 首页](https://jpyc.co.jp/)（取得 2026-05-18）
- [JVCEA 会员一览](https://jvcea.or.jp/member/)（取得 2026-05-18）
- [CoinPost: JPYC 资金移动业 相关报道一览](https://coinpost.jp/?s=JPYC+%E8%B3%87%E9%87%91%E7%A7%BB%E5%8B%95%E6%A5%AD)（取得 2026-05-18）
