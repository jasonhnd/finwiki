---
source: exchanges/jp-cex-points-economy-integration
source_hash: 10eacf3f88af9b2e
lang: zh
status: machine
fidelity: ok
title: "国内 CEX × 积分经济统合模型"
translated_at: 2026-05-31T03:19:56.460Z
---

# 国内 CEX × 积分经济统合模型


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/jp-cex-sales-vs-exchange-model-economics|国内 CEX 販売所 vs 取引所 ビジネスモデル経済学]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 概要

日本国内独有的商业模式 — 将既有大型平台的积分/货币整合为加密资产购买通道，**同时实现新客获取 + 降低 KYC 成本 + 忠诚度锁定**。相对于海外 CEX（Binance / Coinbase）采取 pure-crypto 单一品牌战略，在日本"既有经济圈 × VASP"hybrid 是支配性结构。美国 Cash App / PayPal Crypto Hub 是类似结构，但与**积分经济**的直接统合是日本特有。

## 主要合作模型 4  种

- **Mercari → Mercoin（BTC/ETH/XRP）** — 可用 Mercari 销售款直接购买 BTC。2023-03  服务开始。二手交易销售款 → BTC 的 UX 在全球范围内也属独有。[[exchanges/jp-exchange-mercoin]]
- **乐天 → 乐天 Wallet** — 可用乐天积分购买加密资产 16  个币种。2018-10  将"大家的比特币"纳入乐天旗下。乐天经济圈（证券・银行・卡）锁定手段。[[exchanges/jp-exchange-rakuten-wallet]]
- **PayPay → Binance Japan** — 2025-10  PayPay 发布 40% 出资（基于报道）。软银系结算 × 加密资产的合作处于探索阶段，详细统合方案未公开。[[exchanges/jp-exchange-binance-japan]]
- **LINE → LINE Xenesis（BITMAX）** — 以 LINK → Finschia → KAIA token 联动为起点，但 2026-06  服务预计全面终止。LY Corp 战略撤退的象征。[[exchanges/jp-exchange-line-xenesis]]

## 商业模式分析

- **CAC（获客成本）削减** — 沿用既有平台 ID + KYC，把开户摩擦最小化
- **AUM（受托资产）增加** — 降低积分 → 加密资产转换的心理与操作摩擦
- **监管风险** — 积分（预付式支付手段）与加密资产（资金结算法）的边界是 FSA 监督指针的持续论点

## 海外比较

美国 Cash App（Bitcoin）、PayPal（Crypto Hub）、Revolut Crypto 为结算 App 统合型，但**与航空公司里程 / EC 积分的直接兑换模型是日本特有**。中国・韩国亦不允许类似结构。

## 战略含义

"金融 × 平台"hybrid 是国内 CEX 竞争轴。**LINE 撤退 vs PayPay 进入** = 软银系重组的信号。今后 d 积分・PayPay 积分是下一个统合候选。[[exchanges/jp-vasp-parent-company-map]] 母公司画像与 [[payment-firms/rakuten-fg|Rakuten FG]] 及 [[securities-firms/monex-group|Monex Group]] 对照阅读即可看出其关系。stablecoin 统合请并读 [[exchanges/jp-cex-deposit-token-stablecoin-integration|JP CEX × 預金トークン / EPI 統合]] 与 [[fintech/japan-stablecoin-regulatory-landscape|日本 stablecoin 規制ランドスケープ]]。

来源：公开信息整理（各 CEX/积分发行体 IR・使用条款，JVCEA 自律规则公示，乐天/SBI/PayPay/Mercari 各公司新闻稿）
