---
source: exchanges/jp-crypto-asset-taxation-detailed
source_hash: 29fee0be75fa0a0a
lang: zh
status: machine
fidelity: ok
title: "境内加密资产 税制 详情 —— 杂项所得 vs 申报分离 + 个人 vs 法人"
translated_at: 2026-05-31T03:19:56.506Z
---

# 境内加密资产 税制 详情 —— 杂项所得 vs 申报分离 + 个人 vs 法人


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

## 1. 概述

境内加密资产在所得税法上作为「杂项所得」课税（2017- 配合虚拟货币法施行，国税厅整备 Q&A）。个人最高 **55%（45% 所得税 + 10% 住民税）累进**。另一方面，股票・外汇・加密资产 ETF（经美国）为申报分离 20%（15% 所得税 + 5% 住民税）—— **35 个百分点（percentage point）差**是扭曲 retail 投资者持有・买卖行为的最大因素。即便在 OECD 主要国中，税率也突出地重。

## 2. 个人课税的详情

- **杂项所得 累进**：课税所得 4M JPY 超 33%、9M 40%、18M 45%（+住民税 10% = 最高 55%）
- **不可损益通算**：与其他杂项所得的通算可行，但与工资所得・事业所得・股票转让益不可通算
- **不可结转扣除**：损失不向次年及以后结转（股票可结转 3 年 —— 巨大的不对称）
- **转让/交换 课税**：BTC → ETH 交换亦为课税事件（需各时点的法币换算，取得价额追踪繁琐）
- **使用课税**：以加密资产购买商品・服务亦为课税事件（Lightning 结算等发展的阻碍因素）

## 3. 法人课税

- **法人税 23.2%**（实效税率 ~30%）
- **期末时价评估义务（2024 修订下放宽）**：以往须将持有 token 期末时价评估并对含益课税。2024 修订下，若申报「持有目的 = 非买卖目的而长期持有」则免于时价评估
- **可损益通算**：与其他事业所得的通算
- **法人 vs 个人 间 25 个百分点差** + 可通算性 + 结转扣除 = 法人化优势大（HNW 投资者设立合同会社激增）

## 4. 对投资者行为的影响

- **HODL 战略**：短期买卖的已实现利益成本过大 → 偏向长期 hodl（交易额低迷的结构因素）
- **法人化**：high-net-worth investor 的法人化（合同会社/资产管理公司）
- **经美 ETF（IBIT/FBTC）的间接 exposure**：美国 ETF 为申报分离 20% + 可结转三年 —— 较境内 spot 更优惠 → 加速经美 ETF 的外流 [[exchanges/btc-spot-etf-japan-impact]]
- **向海外（新加坡/UAE/葡萄牙）移居**：富裕层外流问题 —— 应对 5 年居住要件等出国税的情形亦增加

## 5. 2026 修订动向

- **截至 2026 ** 行业团体（JBA / [[exchanges/jvcea-self-regulatory-overview]] + 自民党金融调查会）正在提议 **申报分离 20% 化**
- **2027 修订案** 中设想 BTC/ETH 等主要 token 申报分离化（未确定，财务省态度审慎）
- 部分议员主张完全废除（与股票同等对待）—— 与 Web3 政策提议联动
- 修订实现 ⇒ retail 交易额激增 + 法人化优势缩小 + ETF/spot 的偏好变化

## Cross-links

- [[exchanges/btc-spot-etf-japan-impact]] —— 经美 ETF 的间接 exposure
- [[exchanges/jvcea-self-regulatory-overview]]
- [[exchanges/jp-vasp-regulatory-timeline]]
- [[exchanges/jvcea-spot-volume-statistics-analysis]]
- [[exchanges/jp-listed-cex-related-companies-matrix]]
- [[finance/multi-jurisdiction-identity-tax-leverage]]
- [[exchanges/jp-cex-staking-lending-regulation]] —— JP CEX 质押・借贷监管
- [[fintech/japan-financial-regulation]] —— 日本金融监管全貌

## Sources

国税厅（NTA）公告 + 关于虚拟货币的税务上处理 Q&A，所得税法令，JBA / JVCEA 提议公开资料，日经/ITmedia 解说文章。
