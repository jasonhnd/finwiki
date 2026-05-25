---
title: Tether USAT · Anchorage 合作的美国合规分支 · USDT 国际/国内双线分离
aliases: [tether-usat-anchorage, USAT, Tether USA, Tether USAT stablecoin, Anchorage USAT]
domain: fintech
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: possible
tags: [fintech, stablecoin, tether, usat, anchorage, genius-501, us-compliance, usdt-bifurcation, federal-charter]
status: candidate
sources:
  - https://tether.to/en/
  - https://tether.to/en/transparency
  - https://www.anchorage.com/
  - https://www.coindesk.com/policy/2024/tether-anchorage-usat-announcement
  - https://www.theblock.co/post/tether-usat-anchorage-genius-act
  - https://www.occ.gov/topics/charters-and-licensing/interpretations-and-actions/
---

# Tether USAT · Anchorage 合作的美国合规分支 · USDT 国际/国内双线分离

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/tether-business-model-short-treasury-yield|Tether USDT 经济学]] for the parent product whose bifurcation USAT represents, and with [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] for the U.S. regulatory framework that forced Tether to design a separate U.S.-compliant entity.

> [!info] TL;DR
> **USAT** 是 Tether 在 2024-2025 年宣布的美国合规分支稳定币, 通过与 **Anchorage Digital** (美国首家联邦持牌加密银行, OCC 2021 颁发 conditional national trust charter) 合作发行, 目标是在 [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] 框架下取得美国合规白圈资格。这把 USDT 从"单一全球离岸品" → "USDT (国际离岸) + USAT (美国合规)" 双线分离。USAT 储备走 Anchorage 美国托管 + Cantor Fitzgerald 投组管理, **与 USDT 国际版资产隔离**。截至 2026-05 USAT 仍处于产品上线初期 (mainnet 上线时间未确定), 但宣布本身已是 Tether 应对美国监管压力的战略级动作 —— 也使 USAT 与 USDC / USDB / PYUSD 形成"四角白圈"格局。

## Key facts

- 公告: 2024-Q4 Tether 与 Anchorage Digital 共同宣布 USAT, 目标 GENIUS Act 合规发行 ^[extracted]
- 发行结构: Anchorage Digital Bank N.A. (OCC 联邦国家信託银行) 作为 issuer of record · Tether 提供品牌 + 技术 ^[extracted]
- 投组管理: **Cantor Fitzgerald** (Tether 历史储备 Custodian, 也是 USDT 主要 UST 经纪商) ^[extracted]
- 储备: 100% 短期美债 + 现金 · Anchorage 直接托管 · **与 USDT 国际版资产完全隔离** ^[extracted]
- USDT 国际版 (legacy): 流通 **$145B+** (2026-Q2 全球第一) · 注册地英属维京群岛 / El Salvador (2024 总部迁至 SV) ^[extracted]
- USAT 与 USDT 国际版的"二选一"用户分发: 美国 KYC 用户 → USAT, 非美国 / permissionless 用户 → USDT ^[extracted]
- Anchorage Digital: OCC 2021-01 颁发 conditional national trust charter, 美国首家联邦持牌加密银行 ^[extracted]
- Tether 战略合作伙伴扩张 2024-2025: SoftBank (CEO Masayoshi Son), Howard Lutnick (Cantor Fitzgerald, 后入特朗普政府商务部长) ^[extracted]

## Mechanism / How it works

USAT 的核心模型 = **"Tether 通过美国联邦银行获取合规白圈资格"**——Tether 自己作为非美国实体无法直接取得 GENIUS §501 资格 ([[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] 明确要求"合资格发行人"是美国注册的银行 / 联邦特许 PSP / OCC 信託银行), 通过 **Anchorage 作为 issuer of record** 借壳美国联邦牌照。这与 [[fintech/circle-usdc-stablecoin|Circle USDC]] (自己取得 NY DFS BitLicense + IPO 路径) 形成对照: Circle 是"自营美国合规", Tether USAT 是"借壳美国合规"。

经济模型上 USAT 与 USDT 国际版的关键差异:
- **储备完全隔离**: USAT 储备在 Anchorage 美国托管, USDT 储备在 Cantor 多个司法管辖区 → **避免 USDT 国际版的法律风险 / 政治风险传染到 USAT**
- **赎回路径**: USAT 用户 (美国 KYC) 可直接向 Anchorage 赎回; USDT 用户 (非美国 / permissionless) 走 Tether 原有赎回路径
- **流通通道**: USAT 设计为符合美国 KYC/AML 的链上美元, 主要面向美国持牌 CEX / 持牌 fintech; USDT 国际版继续作为全球离岸 + 新兴市场零售工具
- **OFAC 合规**: USAT 必须实施 OFAC 严格冻结, [[fintech/chain-level-ofac-freeze-precedent|chain-level OFAC freeze]] 在 USAT 上比 USDT 国际版更严

战略上 USAT 是 Tether 对 [[fintech/genius-act-501-denylist-mandate|GENIUS §501 denylist mandate]] 的针对性回应 —— **如果不做 USAT, USDT 国际版可能在美国持牌 CEX / fintech 完全下架**, 触发 Tether 在美元市场的结构性丢失。与 [[fintech/regulatory-reset-2025-usa-crypto-policy|2025 美国加密政策 reset]] 时间线吻合。

## Origin & evolution

2014 Tether 创立 (Bitfinex 关联实体) → 长期作为离岸稳定币运营. 2017-2023 多次监管摩擦 (NY AG 调查 / 储备充分性争议) → 但流通量仍从 $1B → $90B+. **2023-09 Tether 把总部正式迁至 El Salvador** (Bukele 政府提供 monetary openness 监管环境). 2024-Q1 Cantor Fitzgerald (Howard Lutnick) 公开确认是 Tether 储备主要管理方 + UST 经纪商. **2024-Q4 Tether 与 Anchorage Digital 共同宣布 USAT** = 美国合规分支战略. 2025-01 Howard Lutnick 出任特朗普政府商务部长 → Tether 在美国的政治关系达历史峰值. 2025-09 [[fintech/genius-act-501-denylist-mandate|GENIUS Act 实施]] → USAT 设计需符合 §501 资格要求. 2026 USAT mainnet 上线时间仍未确定 (Tether 官方多次推迟). 与 [[fintech/jpmorgan-jpmd-coin|JPMD]] / [[fintech/stripe-usdb-bridge-stablecoin|USDB]] 在美国合规白圈市场形成"四角格局": **USDC (老牌) + JPMD (银行 TD) + USDB (支付公司) + USAT (借 Anchorage 合规)**, 都试图争夺 GENIUS §501 后的美国合规白圈市场份额。

## Counterpoints

USAT 仍处于"公告 + 路径设计" 阶段, **mainnet 上线时间反复推迟** (Tether 公开口径多次称 "soon"), 实际产品规模 2026-Q2 仍接近零。Anchorage 作为 issuer of record 让 USAT 实际控制权部分让出, **与 Tether 历史上"高度集中决策 / 不透明"的风格不一致** → 治理摩擦可能让 USAT 设计反复. USAT 储备投组管理由 Cantor Fitzgerald 负责 → Howard Lutnick 入政府后的利益冲突审查可能成为 USAT 合规上线的延迟变量。USDT 国际版与 USAT 的"双线分离"在用户体验上复杂 (用户必须先 KYC 判断走哪条线), 与 USDC "单一品牌"在美国持牌 CEX 体验差距大。**Circle USDC 已先发占据美国合规白圈基准品地位 + Coinbase 强分销**, USAT 即便顺利上线也面临基准品/挑战者格局。

## Open questions

USAT mainnet 是否会在 2026 内真正上线 (Tether 公开口径多次推迟)?USAT 是否会取代 USDT 国际版在美国持牌 CEX 的全部流通, 还是会出现"USDT 仍可在部分 CEX 上市但 USAT 是合规推荐版"二元格局?Tether 历史上的法律风险 (NY AG settlement / CFTC fine) 是否会成为 USAT 申请 §501 资格时的实质性障碍?Anchorage 是否会因 USAT 项目巨大获 Tether 战略入股?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/tether-business-model-short-treasury-yield|Tether 灰圈 / USDT 经济学]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
- [[fintech/stripe-usdb-bridge-stablecoin|Stripe USDB]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC 信託银行联邦套利]]
- [[fintech/chain-level-ofac-freeze-precedent|chain-level OFAC freeze 先例]]
- [[fintech/regulatory-reset-2025-usa-crypto-policy|2025 美国加密政策 reset]]
- [[fintech/em-market-crypto-dollarization-pattern|EM 市场加密美元化模式]]
<!-- /wiki-links:managed -->

## Sources

- https://tether.to/en/ — Tether 官方主页
- https://tether.to/en/transparency — Tether transparency / reserve attestations
- https://www.anchorage.com/ — Anchorage Digital 主页
- https://www.coindesk.com/policy/2024/tether-anchorage-usat-announcement — CoinDesk USAT 公告报道
- https://www.theblock.co/post/tether-usat-anchorage-genius-act — The Block GENIUS Act 与 USAT 分析
- https://www.occ.gov/topics/charters-and-licensing/interpretations-and-actions/ — OCC charter actions (Anchorage charter 在内)
