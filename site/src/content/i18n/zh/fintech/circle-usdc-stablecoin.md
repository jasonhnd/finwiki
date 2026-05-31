---
source: fintech/circle-usdc-stablecoin
source_hash: 16473a2c8a098dd7
lang: zh
status: machine
fidelity: needs_review
title: "Circle USDC · 合规白圈基准品 · NYSE 上市发行主体 · CCTP / BUIDL 互锁"
translated_at: 2026-05-31T06:16:15.683Z
---

# Circle USDC · 合规白圈基准品 · NYSE 上市发行主体 · CCTP / BUIDL 互锁

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]] and [[fintech/tether-business-model-short-treasury-yield|Tether USDT エコノミクス]] for the white-circle / grey-circle contrast, and with [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] for the regulatory frame in which USDC has become the de facto white-circle benchmark.

> [!info] TL;DR
> Circle Internet Financial 是 USDC 和 EURC 的唯一发行主体。截至 2026-Q2 ，USDC 流通量为 **$65B+**（全市场第 2 位，仅次于 USDT），EURC 约 €350M。Circle 于 2025-06 完成 **NYSE IPO**（股票代码 CRCL），IPO 价格 $31，首日涨幅约 170%，2026-05  市值在 $30-40B 区间波动。准备金为 100% 短期美国国债 + 现金，主体为 **Circle Reserve Fund（CRCL）**，由 BlackRock 子公司担任顾问 + BNY Mellon 托管。USDC 是 GENIUS Act §501 合规白圈的"基准实现"：CCTP V2 在 18+ 条链上支持原生 burn-and-mint，通过 BUIDL 互锁吸收收益，与 Coinbase 按 50-50 分配。EURC 是欧元侧持有 MiCA EMT 牌照的规模最大的非银行类欧元稳定币。

## 关键事实

- USDC 流通量 **$65B+**（2026-Q2 月均）· 全球第 2 位大稳定币，占公链上美元稳定币流通量的约 30% ^[extracted]
- EURC 流通量约 **€350M**（2026-Q2）· 已取得 MiCA EMT，主要链为 Ethereum / Solana / Stellar / Avalanche / Base ^[extracted]
- 发行实体：Circle Internet Financial Inc.（波士顿）· 2013 创立（Jeremy Allaire / Sean Neville）^[extracted]
- **NYSE IPO 2025-06** · 股票代码 **CRCL** · IPO 募资约 $1.1B · IPO 后估值约 $24B → 2026-05 市值 $30-40B 区间 ^[extracted]
- 准备金 100% 短期美国国债 + 现金 · 主体 **Circle Reserve Fund**（USDXX）BlackRock 管理 · BNY Mellon 托管 ^[extracted]
- 准备金月度透明度报告 + Deloitte 鉴证 · 按 CUSIP 单位公开持仓明细 ^[extracted]
- **CCTP V2** 在 18+ 条链上支持原生 burn-and-mint（Ethereum / Solana / Base / Arbitrum / Avalanche / Optimism / Polygon / Noble / Arc 等）^[extracted]
- Coinbase 分配协议：USDC 准备金收益按 **50-50  分配**（Coinbase 2025  USDC 收入贡献约 $1B）^[extracted]
- 监管：美国各州汇款牌照 + NY DFS BitLicense + 欧盟 MiCA EMT + 新加坡 MPI + 日本 SBI VC Trade 已开始办理 ^[extracted]

## 机制 / 运作方式

USDC 的核心模式 = **"白圈合规基准"**：100% 短期美国国债准备金 + 月度审计 + Reserve Fund 隔离 + 每月 CUSIP 层级公开报告。这与 [[fintech/tether-business-model-short-treasury-yield|Tether USDT（40 人 / グレーサークル）]] 形成对照——Circle 是公开实体、上市公司，所有准备金公开披露；Tether 是私人公司，准备金仅有季度鉴证，不可对散户强制赎回。USDC 的经济模型与 [[fintech/stablecoin-revenue-split-economics|stablecoin 金利分配エコノミクス]] 直接对应：发行方（Circle）仅赚取准备金收益的约 50%，**另一半作为分发激励支付给 Coinbase**，这是 [[fintech/issuer-distributor-incentive-realignment-50-50-model|50-50 再配置パラダイム]] 的样本案例，与 PayPal × Paxos PYUSD（Paxos 将 80-90% 转让）形成强度差异。

在跨链架构上，USDC 通过 [[systems/cctp-v2-overview|CCTP V2]] 实现"1 种 USDC，多条链"：所有公链上的 USDC 均为 Circle 直接 mint 的原生资产，不存在封装版本，跨链时在源链 burn + Circle 鉴证服务签名 + 目标链 mint，V2 快速转账的延迟 < 1 秒。**准备金—用途互锁**：Circle 是 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] 公开认可的初期最大机构 LP 之一，通过 BUIDL 持有部分 USDC 准备金并获取货币市场基金收益，构成"USDC ↔ BUIDL ↔ UST"[[fintech/circular-reserve-asset-flywheel-overview|準備資産インターロック・フライホイール]] 中的关键节点。

## 起源与演进

2013  Circle 成立（提供 BTC 钱包/汇款）。2015-2018  转型 → 2018-10  与 Coinbase 通过 **Centre Consortium** 联合发行 USDC（Centre 为合资治理实体）。**2020-2023  USDC 第 1  波规模化**：2021-09  流通量首次突破 $30B；2022  Terra/LUNA 崩溃后，USDC 短期吸收了部分 USDT 抛压。**2023-03  SVB 危机**：Circle 在硅谷银行的准备金敞口 $3.3B，USDC 一度短暂脱锚至 $0.87 ，3  天内恢复，**事件后 Circle 大幅缩减银行端敞口，将准备金完全集中于 Circle Reserve Fund + BNY Mellon 托管**。2023-08  Circle 收购 Centre 全部股权 → USDC 治理独立，Coinbase 转变为 Circle 的战略股东 + 分发合作伙伴。**2024  取得欧盟 MiCA EMT → EURC 成为 MiCA 框架下首个欧元 EMT**。**2025-06  NYSE IPO**：Circle 采用直接上市而非 SPAC（2022  SPAC 路径流产），首日约 $31  → 收盘约 $84，这是 [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 分流]] 中"合规优先"路线获得资本市场认可的里程碑事件。2025-09  [[fintech/genius-act-501-denylist-mandate|GENIUS Act 施行]] → USDC 直接符合 §501 资格，无需结构调整。2026-Q1  [[systems/cctp-v2-overview|CCTP V2]] 扩展至 Arc / Solana 快速最终确定性 + Hooks（跨链 + 自动合约调用）。2026-Q2  USDC 流通量 $65B+，与 USDT $145B 的差距从 5× 缩小至 2.3×。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/tether-business-model-short-treasury-yield|Tether グレーサークル]]
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/stablecoin-revenue-split-economics|stablecoin 金利分配エコノミクス]]
- [[fintech/issuer-distributor-incentive-realignment-50-50-model|50-50 再配置パラダイム]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[systems/cctp-v2-overview|CCTP V2]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART]]
<!-- /wiki-links:managed -->

## 来源

- https://www.circle.com/transparency — Circle Reserve Fund 月度透明度报告 + Deloitte 鉴证
- https://www.circle.com/usdc — USDC 产品/供应页面
- https://developers.circle.com/stablecoins/cctp-getting-started — CCTP V2  开发者文档
- https://investor.circle.com/ — Circle Internet Group 投资者关系（IPO 后）
- https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=circle — Circle SEC EDGAR 申报文件
- https://www.bnymellon.com/us/en/insights/all-insights/circle-reserve-fund.html — BNY Mellon 托管职能
