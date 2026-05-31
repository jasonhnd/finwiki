---
source: fintech/institutional-stablecoin-deposit-token-thesis
source_hash: 6d160073086b09c7
lang: zh
status: machine
fidelity: ok
title: "机构投资者市场的稳定币 = 仅有银行发行的存款代币在结构上可行"
translated_at: 2026-05-31T06:16:15.734Z
---

# 机构投资者市场的稳定币 = 仅有银行发行的存款代币在结构上可行


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 在200-300 億円规模的机构结算中，稳定币的 KYC 及监管水准必须与结算对手方的水准相匹配，否则无法运作。无许可的 USDC/USDT 在结构上无法进入这一市场。**摩根大通、三菱 UFJ、三井住友等银行发行的存款代币，是机构投资者级稳定币的唯一解**。

## 结论

机构投资者市场的稳定币与加密资产市场是完全独立的两个市场，参与者也截然不同。

| 视角 | 零售稳定币（USDC 等） | 机构稳定币（存款代币） |
|---|---|---|
| 发行方 | 加密企业 | 银行（[[fintech/jpmorgan-jpmd-coin|JPM]]·[[JapanFG/mufg|三菱 UFJ]]·[[JapanFG/smfg|三井住友]]等） |
| KYC | 无许可 | 银行账户 KYC = 机构投资者级别 |
| 规模 | 小额 | 200-300 億円单位/笔 |
| 结算对象 | 零售转账·加密资产交易 | 美国国债、公司债、回购市场、有价证券、外汇 |
| 平台 | 以太坊/Solana 等公链 | [[systems/canton-overview|Canton Network]]、Arc Network 等机构专属平台 |

## 推理

- 以200 億円购买美国国债的机构投资者不可能对每一笔稳定币代币单独核查"KYC 是否合规" → 发行方须处于同一 KYC 层级
- 伊朗人不得持有美国国债代币（受美国证券交易委员会监管）→ 只能通过发行方已完成 KYC 的存款代币进行结算
- 摩根大通 Coin / [[fintech/jp-stablecoin-progmat|Project Pax]]等"银行发行的存款代币"是技术和监管层面唯一匹配的形式
- 美国证券托管结算公司(DTCC)·纳斯达克·Broadridge 正推进美国国债·股票链上化协议 → 这些均面向机构方，零售稳定币无法接入
- "USDC 能否用于机构市场？"答案在结构上是"否"——因为参与者不同（机构侧实际规模可在[[fintech/tokenized-deposit-cumulative-volume-scale|TD 累計量級]]中核实）

## 适用场景

- 机构投资者稳定币设计讨论（商业设计、机构业务提案等）
- 看到试图一次性设计"零售稳定币+机构稳定币"的方案时 → 结构上不可能，即刻否定
- 监管讨论中将"稳定币"一概而论时 → 明确区分两个独立市场分开讨论
- 讨论存款代币的场合（[[banking/minna-bank-baas-model|TD/SC]]等）

## Source

- 对照：[[fintech/japan-stablecoin-regulatory-landscape|Project Pax]]（三菱 UFJ×三井住友×瑞穗 机构级 B2B 稳定币）
- 公开：Broadridge / DTCC / Nasdaq 链上化协议（2024-2025）
- 对照：[[banking/minna-bank-baas-model|みんなの銀行 TD 戦略]]（TD = 代币化存款同系谱）

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーンファイナンスとクリプトの DNA 分離]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 三層構造]]
- [[fintech/retail-stablecoin-dual-bind|リテール SC 二律背反]]
- [[banking/minna-bank-baas-model|みんなの銀行 BaaS モデル]]
<!-- /wiki-links:managed -->
