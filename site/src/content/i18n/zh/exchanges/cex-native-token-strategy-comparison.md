---
source: exchanges/cex-native-token-strategy-comparison
source_hash: 743ec65ea60ae75b
lang: zh
status: machine
fidelity: ok
title: "CEX 自有 token 战略比较 — BNB / OKB / HT / KCS / BGB 等的经济机制"
translated_at: 2026-05-31T03:19:56.482Z
---

# CEX 自有 token 战略比较 — BNB / OKB / HT / KCS / BGB 等的经济机制

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 ランキング比較 (2025-2026)]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 概要

海外大型 CEX 发行自有 token(exchange token),整合(a)**手续费折扣**(b)**利润回馈 buyback&burn**(c)**自有 L1 gas token** 这 3 重角色。这是同时实现交易所收益 token 化与客户锁定的设计,但 **FTX FTT 暴跌(2022-11)** 暴露了资产负债表抵押使用的风险。**Binance BNB** 作为市值 $80-100B 规模的主要 utility token 持续存在,但在 SEC 诉讼(2023-06)中引发了证券性争议(2025-02 撤诉)。

## 主要 CEX 自有 token 比较

| Token | 交易所 | 角色 | 市值规模 |
|---|---|---|---|
| **BNB** | Binance | BSC L1 gas + 手续费折扣 25% + quarterly burn(利润的 20%) | $80-100B |
| **OKB** | OKX | X Layer(L2)gas + 手续费折扣 + buyback burn | $3-5B |
| **HT** | Huobi → HTX | buyback burn + 手续费折扣(2022 下台后收缩) | 收缩 |
| **KCS** | KuCoin | bonus rewards + 手续费折扣 + KCC L1 gas | 中等规模 |
| **BGB** | Bitget | buyback burn + 手续费折扣 + Bitget Wallet 联动 | 扩大中 |
| **MX** | MEXC | 手续费折扣 + DAO 治理 | 小规模 |
| **FTT** | FTX | Alameda 自家护盘 + 抵押使用 → 2022-11 暴跌·触发 FTX 破产 | 消亡 |

## 经济机制的 trade-off

- **buyback&burn**:流通量减少 + 价格支撑 · SEC 证券认定风险(Howey test)
- **手续费折扣**:客户锁定 + 交易量扩大 · 直接收益减少
- **自有 L1 gas**:链价值捕获 + ecosystem 扩张 · L1 失败时 token 价值丧失
- **抵押使用(FTX FTT 模式)**:资产负债表扩张 · 暴跌时流动性危机 → 破产 trigger

## 监管风险(美 SEC + EU MiCA)

- **2023-06 SEC vs Binance/Coinbase**:将 BNB 起诉为未注册证券(适用 Howey test)· 诉讼系属中 → **2025-02 SEC 撤诉**(Trump 政权下方针转向)
- 许多自有 token 从 SEC 视角看有证券性嫌疑(利润预期 + 共同事业性)
- **MiCA(EU 2024-12 全面施行)**:自有 token 被分类为 **ART**(Asset-Referenced Token)或 **EMT**(E-Money Token)+ 需要牌照 · 许多尚未应对

## 国内 CEX 缺位的结构性原因

国内 CEX 没有自有 token —— **JVCEA WhiteList 制度**的监管约束(上市币种审查)+ **修订版资金结算法**上的**利益冲突问题**(禁止自家发行 token 在自家交易所上市)· 以不同于海外大型平台的商业模式(销售所价差 + 积分联动)替代

## 关联

- [[exchanges/global-cex-top10-comparison]]
- [[exchanges/jp-foreign-exchange-bitget]] (BGB)
- [[exchanges/jp-foreign-exchange-mexc]] (MX)
- [[exchanges/jp-foreign-exchange-kucoin]] (KCS)
- [[exchanges/jp-foreign-exchange-bybit]]
- [[exchanges/jp-exchange-binance-japan]]
- [[exchanges/jp-exchange-okcoin-japan]]
- [[exchanges/us-crypto-licensing-multi-layer-system]] (SEC 相关)
- [[exchanges/jvcea-whitelist-token-listing]]
- [[exchanges/ve33-governance-mechanism]] — ve(3,3) governance 机制
- [[exchanges/global-vasp-regulatory-comparison-matrix]] — 全球 VASP 监管比较矩阵
- [[fintech/portfolio-winner-structure-arm-analog]] — portfolio winner structure arm analog
