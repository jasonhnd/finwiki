---
source: exchanges/jp-cex-sales-vs-exchange-model-economics
source_hash: c25878f3236ce3fc
lang: zh
status: machine
fidelity: ok
title: "国内 CEX 销售所 vs 交易所 商业模式经济学"
translated_at: 2026-05-31T03:19:56.472Z
---

# 国内 CEX 销售所 vs 交易所 商业模式经济学

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/jp-cex-points-economy-integration|国内 CEX × ポイントエコノミー統合モデル]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 概要

国内 CEX 具有并行运营 2 种服务形态的独特结构。**销售所(はんばいじょ,hanbaijo)** = CEX 自身与客户相对交易的 OTC 价差模式 vs **交易所(とりひきじょ,torihikijo)** = 客户之间以限价委托盘成交的 maker/taker 手续费模式。两者在收益结构、监管上的定位、设想客户层面差异巨大,同一 CEX 并设两种服务的情况较多。

## 销售所模式(主流)

- **收益源**: bid/ask 价差(典型 2-5% · 因币种为 7-10%)
- **CEX 的头寸**: 做市商(market maker)· 持有库存风险 + 对冲义务
- **客户 UX**: 点击 1 次购买 · 直接指定数量/金额 · 市场价格难以看清
- **主要采用**: [[exchanges/jp-exchange-coincheck]](销售所主力)· [[exchanges/jp-exchange-gmo-coin]] · DMM Bitcoin(旧)· [[exchanges/jp-exchange-rakuten-wallet]] · [[exchanges/jp-exchange-mercoin]] · OKJ

## 交易所模式(面向行家)

- **收益源**: maker/taker 手续费(典型 0.01-0.20%)· 压倒性地薄
- **CEX 的头寸**: 仅运营撮合引擎(matching engine)· 不持库存头寸,中立
- **客户 UX**: 盘口信息 + 限价/市价委托 · 面向专业的 UI
- **主要采用**: [[exchanges/jp-exchange-bitflyer]] Lightning · [[exchanges/jp-exchange-bitbank]] · GMO 币交易所(与销售所并存)

## 经济学含义

- **销售所价差 ~3% 高于 MM([[exchanges/jp-crypto-market-maker-otc-layer]] B2C2 等)的批发价 ~0.5%** — CEX 利润 ~2.5% 为中间抽成结构
- 零售客户的"看不见的手续费"问题 — FSA 监督指针持续要求改善透明度
- **成交量为销售所 > 交易所**,但 **收益率为销售所 ≫ 交易所** — 国内 CEX 扭亏为盈的主要杠杆
- 海外 CEX([[exchanges/global-cex-top10-comparison]] Binance / Coinbase 等)基本为 maker/taker — 日本的销售所模式在国际上是特异结构
- 因加密资产 ETF 解禁([[exchanges/btc-spot-etf-japan-impact|BTC spot ETF 日本 impact]])、税制改革([[exchanges/jp-crypto-asset-taxation-detailed|JP crypto asset 税制詳細]])等,向交易所模式转移的压力持续。最佳执行参见 [[securities/japan-best-execution-sor-pts|japan best execution SOR/PTS]]。
