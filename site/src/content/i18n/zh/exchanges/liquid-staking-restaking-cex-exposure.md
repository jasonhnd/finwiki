---
source: exchanges/liquid-staking-restaking-cex-exposure
source_hash: cfb062419e573e58
lang: zh
status: machine
fidelity: ok
title: "流动性质押 + 再质押生态系统 + CEX 敞口"
translated_at: 2026-05-31T06:16:15.678Z
---

# 流动性质押 + 再质押生态系统 + CEX 敞口

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/global-dex-major-five-comparison|global dex major five comparison]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 概要

**流动性质押（Liquid Staking）**= 发行使已质押 ETH 再流动化的 LST（流动性质押代币），使质押期间也能继续使用 DeFi 的机制。**再质押（Restaking）**= 将已质押的 ETH 进一步再质押至 AVS（主动验证服务），从而提供额外经济安全的机制。EigenLayer 于 2024 年 确立了再质押的标准，并与 LRT（流动性再质押代币）结合，构建了 2  层叠加的杠杆结构。机构与 CEX 正在两个层面持续增加敞口。

## 流动性质押主要参与者

- **Lido**（stETH）— 以太坊 LST 最大，TVL ~$30B，DAO 治理，32  ETH 以下亦可质押
- **Rocket Pool**（rETH）— 去中心化、无许可验证节点，16  ETH 起可参与运营
- **Coinbase（cbETH）** — Coinbase 子公司质押，应对美国 SEC 监管，面向机构的入口
- **Binance（BETH/WBETH）** — Binance LST，部分地区有限制，挂钩机制
- **Mantle（mETH）** — Mantle L2  生态系统，与 Bybit 联动
- **Lido + Rocket Pool 合计覆盖 ETH 全质押量的 ~40%**（中心化风险担忧的核心）

## 再质押生态系统

- **EigenLayer** — Layr Labs 开发，2024-04  主网，ETH/LST 再质押，为 AVS 提供信任基础，数据可用性、预言机、跨链桥等 AVS 已在运行
- **Symbiotic** — Cyber Fund 系，多资产再质押，模块化框架
- **Karak** — Andalusia Labs，多链再质押，跨链 DSS
- **Renzo / EtherFi / Puffer** — LRT（流动性再质押代币）协议，发行 ezETH / weETH / pufETH
- 2024-2026  LRT 泡沫 + 空投挖矿推动 $30B+ TVL 急速增长，基于积分系统的元博弈

## CEX 交易情况

- **国内（日本）**：stETH / cbETH 无直接现货交易，国内 VASP 的 ETH 质押服务（bitFlyer / GMO / SBI VC）采用不同结构（CEX 内质押，不发行 LST 代币）
- **海外（美国）**：Coinbase 提供 cbETH 现货，Kraken（美国质押服务停止 2023-），Binance BETH（部分地区受限）
- **监管风险**：SEC 将 LST/LRT 作为"未注册证券"进行监控，MiCA 要求 CASP 牌照并对质押即服务采取限制性许可

## 风险与系统性含义

- **Lido 集中度风险**：ETH 30%+ 质押集中于 1  个协议 → 以太坊共识风险，自我限制讨论持续
- **罚没连锁**：经 EigenLayer AVS 违规导致基础质押遭罚没，再抵押的脆弱性
- **流动性崩溃**：2022-06  stETH 脱锚（Celsius 相关）再发风险，尤其是 LRT 挂钩
- **美国 SEC 诉讼**：2023  Kraken 质押诉讼和解后 Coinbase 案件悬而未决，LST/LRT 是证券性争议的核心

## 相关

- [[exchanges/jp-cex-staking-lending-regulation]]
- [[exchanges/global-dex-major-five-comparison]]
- [[exchanges/amm-design-evolution]]
- [[exchanges/ve33-governance-mechanism]]
- [[exchanges/global-perp-dex-five-comparison]]
- [[exchanges/eu-mica-casp-regime-overview]]
- [[exchanges/us-crypto-licensing-multi-layer-system]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview]]
- [[exchanges/global-vasp-regulatory-comparison-matrix]] — 全球 VASP 监管比较矩阵
- [[exchanges/rwa-tokenization-cex-integration]] — RWA 代币化 × CEX 整合
- [[exchanges/vetoken-host-protocol-flywheel]] — veToken 宿主协议飞轮
