---
source: exchanges/cex-matching-engine-wallet-architecture
source_hash: 4cb313ca28c39e4a
lang: zh
status: machine
fidelity: ok
title: "CEX 撮合引擎 + 冷/热钱包内部架构"
translated_at: 2026-05-31T03:19:56.456Z
---

# CEX 撮合引擎 + 冷/热钱包内部架构


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/jp-vasp-cold-storage-segregation-rules|国内 VASP コールド保管 95% + 分別管理制度]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for the broader system / regulatory boundary.

## 1. 撮合引擎概要

CEX 的核心 = **撮合引擎（matching engine，订单簿撮合引擎）**。设计思路大致分为 3  种：

- **CLOB（Central Limit Order Book，中央限价订单簿）** — 业界标准。按价格、时间撮合买单与卖单。从 NYSE / NASDAQ 沿用至 CEX
- **RFQ（Request for Quote，询价）** — 以机构 OTC 为主。请求 bid/ask 报价 → 个别成交
- **AMM-like** — DEX 系。AMM 是 CEX 撮合的替代设计（参见 [[exchanges/amm-design-evolution]]）

CEX（Binance / Coinbase / bitFlyer / 国内全部公司）以 CLOB 为基础。机构大额交易另行由 OTC desk 以 RFQ 处理。

## 2. CLOB 撮合引擎设计要素

| 要素 | 内容 |
|---|---|
| **FIFO（First-In First-Out，先进先出）** | 同价格按时间优先成交 |
| **price-time priority（价格-时间优先）** | 价格优先 + 时间优先的 2  段撮合 |
| **iceberg orders（冰山单）** | 将大单分拆显示以抑制 market impact |
| **post-only / IOC / FOK** | 订单类型（maker only / Immediate-or-Cancel / Fill-or-Kill） |
| **co-location** | 面向机构 HFT 的低延迟接入（NYSE / Binance VIP） |

代表性实现：**NYSE / Binance / Coinbase / dYdX v4 （Cosmos appchain）**。dYdX v4  将 CLOB 实现于链上 validator 之上，尝试融合 CEX 性能与 DEX 透明度。

## 3. RFQ / OTC 引擎

机构 OTC（**Cumberland / B2C2  / FalconX / Genesis（已破产）**）采用的不是 CLOB 而是 **RFQ 方式**：

- 客户提出"想买 BTC 100  枚"并请求报价
- 做市商提供 bid/ask
- 个别成交（不出现在订单簿）
- 在大额交易中控制 slippage + 隐匿价格

国内 OTC：bitFlyer / Coincheck 以"贩卖所"名义向一般客户提供类似功能（参见 [[exchanges/jp-cex-sales-vs-exchange-model-economics]]）。

## 4. 冷/热钱包内部架构

基于国内 VASP 义务（[[exchanges/jp-vasp-cold-storage-segregation-rules]]）的 3  层构成：

- **热钱包（≤ 5% 国内义务）** — 与撮合引擎直连 · 实时出入金处理 · maker/taker bot 联动 · 经 API 签名
- **温钱包** — 半离线 · 大额出金时的暂存 · 1  日多次从 cold 补充
- **冷钱包（≥ 95% 国内义务）** — 气隙签名 · multi-sig（2-of-3  以上）· 必须 HSM 或 MPC

Coincheck 2018  NEM 580 億円 事件是"实质热 100%"的结果（[[exchanges/coincheck-nem-hack-detailed-analysis]]）。该事件后的监管强化使 3  层分离在国内成为义务。

## 5. 主要技术栈

机构托管的 5  技术（[[exchanges/global-institutional-custody-five-pillars]] / [[exchanges/jp-institutional-custody-three-pillars]]）：

| 技术 | 代表供应商 | 角色 |
|---|---|---|
| **multi-sig** | Gnosis Safe（现 Safe） | 标准 2-of-3  签名阈值 · 智能合约基础 |
| **HSM** | Thales / Utimaco / Ledger Vault | 硬件加密模块 · FIPS 140-2/3  认证 |
| **MPC** | Fireblocks / Fordefi / Sepior | 密钥分散 · 排除 single point of failure |
| **air-gap signing（气隙签名）** | Casa / Anchorage | 完全离线签名 · 不连网 |
| **沙米尔秘密共享（Shamir's Secret Sharing）** | 众多 | 私钥的阈值分散（k-of-n） |

CEX 实现示例：
- **Coinbase Custody** — multi-sig + HSM 混合
- **Anchorage Digital** — 以 MPC 为中心（美国 OCC 国法银行牌照）
- **Komainu** — cold + air-gap（野村 JV）
- **Fireblocks** — MPC SaaS · 国内 GMO 币等采用

2025  Bybit Lazarus hack（[[exchanges/bybit-lazarus-hack-detailed-analysis]]）是以 **Safe UI 伪装**欺骗 multi-sig 签名者的社会工程攻击。技术本身运作正常，但 UI 层的脆弱性暴露，重新认识到 air-gap + 硬件确认的重要性。详细取证手法请并读 [[security/bytecode-forensic-three-tier-verify|bytecode forensic 3-tier verify]] 与 [[security/forensic-identity-anchor-chain|forensic identity anchor chain]]。供应链攻击的结构分析参见 [[security/module-path-confusion-supply-chain-attack|module path confusion supply chain attack]]。

---

来源：业界一般知识 + Binance / Coinbase tech blog + Gnosis Safe docs + Fireblocks whitepaper + Anchorage 公告。
