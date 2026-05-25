---
title: CFTC vs SEC 加密管辖权之争 · FIT21/CLARITY Act 商品证券二分
aliases: [cftc-sec-jurisdiction, CFTC vs SEC, FIT21, CLARITY Act, Howey Test]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [fintech, law, regulation, us-regulation, cftc, sec, jurisdiction, fit21]
sources:
  - https://www.cftc.gov/digitalassets/index.htm
  - https://www.sec.gov/spotlight/cybersecurity-enforcement-actions
  - https://www.congress.gov/bill/118th-congress/house-bill/4763
  - https://www.congress.gov/bill/119th-congress/house-bill/3633
  - https://www.sec.gov/news/statement/gensler-crypto-2023-04-18
status: candidate
---

# CFTC vs SEC 加密管辖权之争 · 商品证券二分


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 美国加密监管核心问题:BTC/ETH = commodity(CFTC 管)vs SC/Token = security(SEC 管)。Gensler 时代(2021-2025-01)SEC 强硬扩张管辖至几乎所有 token;Atkins/Peirce 2025-02 撤诉 Coinbase/Kraken/Binance 标志 SEC 收缩。CLARITY Act(2026 重启)+ FIT21 立法预期完成商品/证券清晰划界。

## Key facts

- Howey Test 1946:SEC v. W.J. Howey Co., 328 U.S. 293 · investment contract 四要素 ^[extracted]
- 2025-02-27:SEC v. Coinbase 撤诉("not in public interest")^[extracted]
- 2025-03-03:SEC v. Kraken 撤诉 ^[extracted]
- 2025-03-15:SEC v. Binance(US)部分撤诉 ^[extracted]
- 2025-04-09:SEC Crypto Task Force 启动 · Hester Peirce 领导 ^[extracted]
- Atkins 接任 Chair 2025-04 · Mark Uyeda 任 Acting Chair(2025-01-20 ~ 2025-04-09)期间撤诉密集 ^[extracted]
- FIT21(H.R. 4763):2024-05 众议院通过 · 参议院 2025 未通过 · 2026 French Hill 推动 CLARITY Act 重启 ^[extracted]
- 撤诉 ≠ 判例 · SEC 未来仍可重新起诉 ^[inferred]

## Mechanism / How it works

**管辖权二分框架(演变中)**:
- **CFTC 管辖**:BTC(双方共识)· ETH(争议 → 倾向 commodity,2024 SEC 撤诉调查)· Derivatives(CME futures / options)· 未来 FIT21 "digital commodity" 类别
- **SEC 管辖**:ICO tokens(Howey Test)· Yield/staking 产品(Gemini Earn)· DeFi front-end 运营(Uniswap Labs 2025-02 撤诉前)· Stablecoin —— 2025 起转交 OCC/FRB/FinCEN(GENIUS PPSI)
- **灰区**:SOL / ADA / AVAX(撤诉后 ambiguous)· DeFi tokens(UNI/AAVE/CRV)· "decentralization test" token 从 SEC 转 CFTC 的路径

发行方影响:BTC/ETH ETF issuer(BlackRock / Fidelity)受益于 CFTC 路径清晰;新 token 发行不再必经 SEC 注册地狱 → Atkins "safe harbor rulemaking" 提供出路。SC 完全脱离 SEC,转入 GENIUS PPSI(OCC/FRB/FinCEN,详见 [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust bank charter]])。

## Origin & evolution

1946 Howey Test 奠基,2017 SEC DAO Report 把 Howey 移植加密。2021-2025 Gensler 时代 SEC 攻击性扩张,起诉 Coinbase / Kraken / Binance / Ripple 多线。2024-05 FIT21 众议院通过但参议院搁置。2025-01 Trump 2.0 上任后 SEC 立场 180 度转向,Acting Chair Uyeda 2025-02/03 密集撤诉,Atkins 4 月接任 + Peirce 主导 Crypto Task Force。2026 French Hill 推动 CLARITY Act 重启,目标完成 FIT21 未竟之路。VASP 全球横向对照见 [[exchanges/global-vasp-regulatory-comparison-matrix|全球 VASP 监管比较矩阵]]。

## Counterpoints

- 撤诉是政策转向 ≠ 法律判例 · SEC 未来仍可重新起诉造成 enforcement uncertainty
- Uniswap Labs 2025-05 启动自愿 KYC + transaction monitoring · 即使撤诉 DeFi 仍走向合规化
- "完全无 issuer" 的真正去中心化 SC(DAI / LUSD / FRAX)仍是无路可走 · SEC 不管但也无 PPSI 资格

## Open questions

- CLARITY Act 2026 通过概率 · 参议院 60 票门槛能否破?
- "decentralization test" 量化标准能否在 rulemaking 中明确?
- Aave GHO 走 GENIUS PPSI 路径是否会成为 DeFi SC "曲线合规"模板?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust bank charter]]
- [[fintech/chain-level-ofac-freeze-precedent|OFAC 链上 freeze]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA]]
<!-- /wiki-links:managed -->

## Sources

