---
source: exchanges/vetoken-host-protocol-flywheel
source_hash: b40eaddcd0ff17eb
lang: zh
status: machine
fidelity: ok
title: "veToken × 宿主协议 DEX 自我循环飞轮"
translated_at: 2026-05-31T06:16:15.656Z
---

# veToken × 宿主协议 DEX 自我循环飞轮


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it with [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for adjacent context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system boundary.

> [!info] TL;DR
> L1/L2的宿主方持有原生 DEX 的 ve 治理代币，将 emission 引导至自身核心资产池（wrapped BTC 等）→ 获取排他性流动性，同时以该资产的托管手续费**在链上形成闭环回流至主业**。Coinbase × Aerodrome × cbBTC 案例的年化收益为 **$130-250M**，是 EVM 多链史上首次经定量验证的"宿主侧-DEX"自我循环结构。

**核心机制**:

1. L1/L2的宿主方（运营公司或投资部门）持有原生 DEX 的 ve 治理代币
2. 利用治理票引导 emission → 流向自身核心资产配对池（cbBTC/USDC、cbBTC/ETH 等）
3. 排他性的深度流动性促使机构使用宿主方的 wrapped 资产，托管 AUM 扩大
4. 托管手续费 / 准备金收益 / 贷款利差**回流至主业财务报表**（同类逆向驱动逻辑参见 [[exchanges/native-dex-flip-incumbent-pattern|L2 原生 DEX による incumbent 逆転]] 和 [[exchanges/ve33-governance-mechanism|ve(3,3) governance メカニズム]]）
5. 主业现金流再度投入 ve 持仓或 emission 引导，飞轮自我加速

**典型规模（cbBTC × veAERO × Coinbase）**:

- cbBTC 的 Base TVL **$839M**，流通量 **89,000 BTC**，市值 $6.1B
- Aerodrome 在 Base 上的 DEX 成交量份额 **63%**，超越 Uniswap
- 自我循环年化估算 **$130-250M**（托管手续费 + 准备金收益 + 利差）
- Aerodrome + Velodrome 于2026年合并至 Aero（94.5%:5.5%），向 Ethereum L1 + Circle Arc 扩展，**飞轮跨链复制**

**触发条件**:

- 宿主方发行 wrapped / native 资产（cbBTC、cbETH、sUSDe、stETH 等）
- 链上 DEX 采用 ve（3,3）型 emission 引导治理
- 宿主方的 ve 持仓达到足以引导核心池的水平（一般 >10%）
- 宿主方 / DEX / 资产之间不存在监管层面禁止的关联方交易限制

**通用性 / 可横向拓展领域**:

- Lido × Curve × ETH 宿主方（历史上最早的范式）
- Coinbase × Aerodrome × cbBTC / cbETH（本案例）
- 未来的 Arc × Curve fork × USDC 配对池
- L2发布 wrapped BTC / native stablecoin，同时孵化 ve-DEX 的任意组合

**反例 / 边界条件**:

- 宿主方未发行 native wrapped 资产的情形（Optimism 初期等）—— 飞轮缺少资产腿
- DEX 未采用 ve emission 的情形（Uniswap v2/v3等）—— 无法引导
- 资产池被现有平台（Uniswap）锁定的情形 —— emission 引导效果递减
- 宿主方为上市公司 / 合规主体（Coinbase 等为 SEC reporting issuer）时，关联方交易信息披露为必要义务，飞轮收益将在财务报表中显现

**估值 / 决策含义**:

- 宿主方估值应单独增设"DEX 飞轮现金流"项目并予以个别折扣
- 反向逻辑：DEX 的 veToken 估值受宿主方"长期持有"承诺影响，集中度风险显著
- 飞轮可能遭受现有平台的反击（Uniswap 在 Base 上防御失败的案例是直接先例）
- 若监管方（SEC / OCC）认定为"未注册证券销售"，飞轮可能被切断


## Sources

- Aerodrome Finance 合约规范（veAERO 锁仓·每周 emission 引导治理即 ve(3,3) 核心机制的一手资料） — https://github.com/aerodrome-finance/contracts/blob/main/SPECIFICATION.md
- Coinbase 官方博客"Coinbase Wrapped BTC (cbBTC) is now live"（cbBTC 为 Coinbase 在 Base 上的 native wrapped BTC，支持包括 Aerodrome 在内的 DApp） — https://www.coinbase.com/blog/coinbase-wrapped-btc-cbbtc-is-now-live

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン金利分配の経済学]]
- [[fintech/wall-street-crypto-network-neutrality|Wall Street 暗号ネットワークの中立性]]
- [[exchanges/native-dex-flip-incumbent-pattern|L2 原生 DEX による incumbent 逆転]]
- [[exchanges/ve33-governance-mechanism|ve(3,3) governance メカニズム]]
- [[exchanges/global-dex-major-five-comparison|global DEX 主要 5 社比較]]
- [[fintech/portfolio-winner-structure-arm-analog|portfolio winner structure arm analog]]
<!-- /wiki-links:managed -->
