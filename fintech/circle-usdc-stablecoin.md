---
title: Circle USDC · 合规白圈基准品 · NYSE 上市发行人 · CCTP / BUIDL 互锁
aliases: [circle-usdc-stablecoin, USDC, Circle Internet Financial, USDC stablecoin, EURC]
domain: fintech
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: certain
tags: [fintech, stablecoin, circle, usdc, eurc, nyse, cctp, buidl, genius-501, compliance-first]
status: active
sources:
  - https://www.circle.com/
  - https://www.circle.com/transparency
  - https://www.circle.com/usdc
  - https://developers.circle.com/stablecoins/cctp-getting-started
  - https://investor.circle.com/
  - https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=circle
  - https://www.bnymellon.com/us/en/insights/all-insights/circle-reserve-fund.html
---

# Circle USDC · 合规白圈基准品 · NYSE 上市发行人 · CCTP / BUIDL 互锁

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]] and [[fintech/tether-business-model-short-treasury-yield|Tether USDT 经济学]] for the white-circle / grey-circle contrast, and with [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] for the regulatory frame in which USDC has become the de facto white-circle benchmark.

> [!info] TL;DR
> Circle Internet Financial 是 USDC 与 EURC 的唯一发行人,2026-Q2 USDC 流通量 **$65B+** (全市场第二大,USDT 之下),EURC ~ €350M。Circle 2025-06 完成 **NYSE IPO** (ticker CRCL),发行价 $31,IPO 首日上涨 ~170%,2026-05 市值约 $30-40B 区间波动。储备 100% 短期美债 + 现金,主体为 **Circle Reserve Fund (CRCL)**,由 BlackRock 子顾问 + BNY Mellon 托管。USDC 是 GENIUS Act §501 合规白圈的"基准实现":CCTP V2 跨 18+ 链原生 burn-and-mint、BUIDL 互锁吸收 yield、Coinbase 分润 50-50。EURC 是欧元侧 MiCA EMT 牌照下唯一具有规模的非银行欧元稳定币。

## Key facts

- USDC 流通 **$65B+** (2026-Q2 单月平均) · 全球第二大稳定币,占公链美元稳定币流通 ~30% ^[extracted]
- EURC 流通 ~ **€350M** (2026-Q2) · MiCA EMT 持牌,主链 Ethereum / Solana / Stellar / Avalanche / Base ^[extracted]
- 发行实体: Circle Internet Financial Inc. (Boston) · 2013 创立 (Jeremy Allaire / Sean Neville) ^[extracted]
- **NYSE IPO 2025-06** · ticker **CRCL** · IPO 募资 ~$1.1B · 估值 IPO 后约 $24B → 2026-05 市值 $30-40B 区间 ^[extracted]
- 储备 100% 短期美债 + 现金 · 主体 **Circle Reserve Fund** (USDXX) BlackRock 管理 · BNY Mellon 托管 ^[extracted]
- 储备月度透明度报告 + Deloitte attestation · 公开 CUSIP-by-CUSIP 持仓 ^[extracted]
- **CCTP V2** 支持 18+ 链原生 burn-and-mint (Ethereum / Solana / Base / Arbitrum / Avalanche / Optimism / Polygon / Noble / Arc 等) ^[extracted]
- Coinbase 分润协议: USDC 储备 yield **50-50 分账** (Coinbase 2025 USDC 收入贡献 ~$1B) ^[extracted]
- 监管: 美国 MTL 全州持牌 + NY DFS BitLicense + EU MiCA EMT + Singapore MPI + Japan SBI VC Trade 上线 ^[extracted]

## Mechanism / How it works

USDC 的核心模型 = **"白圈合规基准品"**: 100% 短期美债储备 + 月度审计 + Reserve Fund 隔离 + 月度公开 CUSIP-level 报告。这与 [[fintech/tether-business-model-short-treasury-yield|Tether USDT (40 人 / 灰圈)]] 形成对照——Circle 是公开实体、上市公司、所有储备公开;Tether 是私人公司、储备只做季度 attestation、不可强制赎回散户。USDC 经济模型与 [[fintech/stablecoin-revenue-split-economics|稳定币利息分润经济学]] 直接对应:发行人 (Circle) 只赚 ~50% 储备 yield,**另一半给 Coinbase 作为分销激励**,这是 [[fintech/issuer-distributor-incentive-realignment-50-50-model|50-50 重排范式]] 的样本案例,与 PayPal × Paxos PYUSD (Paxos 让出 80-90%) 形成强度差异。

跨链架构上 USDC 通过 [[systems/cctp-v2-overview|CCTP V2]] 实现"一个 USDC、多条链":所有公链上的 USDC 都是 Circle 直接 mint 的 native asset,没有 wrapped 版本,跨链时源链 burn + Circle Attestation Service 签名 + 目标链 mint,V2 fast transfer 延迟 <1 秒。**储备-应用互锁**: Circle 是 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] 公开承认的早期最大机构 LP 之一,USDC 储备的一部分通过 BUIDL 持有获得 MMF yield,形成"USDC ↔ BUIDL ↔ UST" [[fintech/circular-reserve-asset-flywheel-overview|储备金互锁飞轮]] 的关键节点。

## Origin & evolution

2013 Circle 创立 (做 BTC 钱包/汇款). 2015-2018 转型 → 2018-10 USDC 与 Coinbase 通过 **Centre Consortium** 共同发行 (Centre 是合资治理实体). **2020-2023 USDC 第一波规模化**: 2021-09 流通量首破 $30B; 2022 Terra/LUNA 崩溃后 USDC 短暂吸纳 USDT 抛压. **2023-03 SVB 危机**: Circle 在硅谷银行有 $3.3B 储备暴露,USDC 短暂脱锚至 $0.87,3 天内恢复,**事件后 Circle 大幅收缩银行端,把储备完全集中至 Circle Reserve Fund + BNY Mellon 托管**. 2023-08 Circle 收购 Centre 全部股权 → USDC 治理独立,Coinbase 转为 Circle 战略股东 + 分润合作伙伴. **2024 EU MiCA EMT 获批 → EURC 成为 MiCA 框架下首批欧元 EMT**. **2025-06 NYSE IPO**: Circle 直接 IPO 而非 SPAC (2022 SPAC 路径流产),首日 ~$31 → 收盘 ~$84,是 [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 分流]] 中"合规优先"路线获得资本市场背书的关键事件. 2025-09 [[fintech/genius-act-501-denylist-mandate|GENIUS Act 实施]] → USDC 直接符合 §501 资格,无需结构调整. 2026-Q1 [[systems/cctp-v2-overview|CCTP V2]] 扩展到 Arc / Solana fast finality + Hooks (跨链 + 自动合约调用). 2026-Q2 USDC 流通量 $65B+,与 USDT $145B 差距从 5× 缩窄到 2.3×。

## Counterpoints

USDC 在 GENIUS Act 框架下是"合规白圈"基准但**仍非全球流通量第一**——USDT $145B 仍是 USDC 2.3 倍,且 USDT 在新兴市场零售场景 (LATAM / Sub-Saharan Africa / 东南亚) 渗透深得多 ([[fintech/em-market-crypto-dollarization-pattern|EM 市场加密美元化模式]])。Circle 的 50-50 分润让 Coinbase 拿走绝大部分经济价值,Circle 2024 年 Net income margin ~5% — 上市后股价的高估值 (P/E 60+) 依赖**未来储备规模 3-5×** 的预期,若 [[fintech/stablecoin-issuer-2025-2026-market-consolidation|2025-2026 市场整合]] 让头部之外新发行人 (USDB / RLUSD / USAT / JPMD) 切走部分份额,EPS 难以撑住估值。CCTP 是中心化基础设施 — Circle Attestation Service 单点风险 + Circle 可拒绝签名 ([[systems/chain-abstraction-pattern-value-capture|chain-abstraction 价值捕获]] 的 Circle 节点),GENIUS §501 Denylist 在 CCTP-level 的执行通道使 USDC 的"中立性"是有条件的。EURC 流通 €350M 与 €/$ 7.5% 比远低于市场份额 — MiCA 下欧元 EMT 没有出现 USDT/USDC 那样的赢家全得格局,EURC 长期可能被欧元区银行联合发行体压制。

## Open questions

CRCL 股价能否在 2027 之前突破 $50B 市值,反映 USDC 流通量从 $65B → $150B 的乐观情景?Coinbase × Circle 50-50 协议在 2028 续约时是否会被压缩 (Coinbase 此时已自营 cbBTC + Base + Smart Wallet)?USDC 在 [[fintech/three-circles-mra-2030-economic-scale|三圆 MRA 2030]] 框架下能否同时获得美国 §501 + EU MiCA EMT + Japan ECISB 三圆白圈完整资格 (目前 Japan 经 SBI VC Trade 已上线但 ECISB 直接发行未启)?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/tether-business-model-short-treasury-yield|Tether 灰圈]]
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/stablecoin-revenue-split-economics|稳定币利息分润经济学]]
- [[fintech/issuer-distributor-incentive-realignment-50-50-model|50-50 重排范式]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[systems/cctp-v2-overview|CCTP V2]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA 框架]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART]]
<!-- /wiki-links:managed -->

## Sources

- https://www.circle.com/transparency — Circle Reserve Fund monthly transparency + Deloitte attestation
- https://www.circle.com/usdc — USDC product / supply page
- https://developers.circle.com/stablecoins/cctp-getting-started — CCTP V2 developer docs
- https://investor.circle.com/ — Circle Internet Group investor relations (post-IPO)
- https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=circle — Circle SEC EDGAR filings
- https://www.bnymellon.com/us/en/insights/all-insights/circle-reserve-fund.html — BNY Mellon custodial role
