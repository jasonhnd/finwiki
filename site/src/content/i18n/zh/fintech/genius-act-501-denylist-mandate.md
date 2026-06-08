---
source: fintech/genius-act-501-denylist-mandate
source_hash: 22b16508f124ab05
lang: zh
status: machine
fidelity: ok
title: "GENIUS Act §501  链级黑名单合法化"
translated_at: 2026-05-31T06:16:15.734Z
---

# GENIUS Act §501  链级黑名单合法化


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 美国 GENIUS Act §501（**2025-07-18总统签署生效**；参议院通过2025-06-17，众议院通过2025-07-17）明文要求合规稳定币发行方须具备**链级地址封锁能力**（chain-level Denylist）。本条款从反面阐释了[[fintech/circle-usdc-stablecoin|Circle]]不得不自建 L1（Arc）的根本原因：**只有自建链才能同时控制代币层与共识层，实现端到端的合规执行**。链级黑名单已从"商业妥协"升格为"法律明文要求"。

**条款核心要求**：

- 合规稳定币发行方须具备对特定地址执行 **freeze / burn / blacklist** 的能力
- 在通用 EVM 链上的实现路径：发行方在代币合约中添加相应权限（例如 USDC 的 `blacklisted` mapping）
- 但发行方**无法控制链本身**（以太坊 / Solana / 各 L2 的排序器自主运行），因此仍存在抗审查分叉的潜在风险
- 自建 L1 = 同时掌握代币层、共识层、排序器 → **端到端强制执行**

**Arc 的实现**：

- 链级黑名单预编译（5 个有状态预编译之一）
- PermissionedValidatorManager 三层架构
- AWS Nitro Enclaves 远程签名器
- 仅面向企业（KYB-only）的 StableFX

**通用范式**："**自建合规链**"是 GENIUS Act 通过后稳定币发行方面临的**结构性选择**，而非商业偏好：

- Circle Arc（USDC）：在 GENIUS Act 起草阶段主动游说+自建 L1 
- Stripe Tempo（Bridge 稳定币）：OCC 信托银行特许证+Tempo 验证方多元化
- Tether 未来路径：USAT（Anchorage）等合规版本+自建 USDT0 /Plasma/Stable 链（推测）

**反例 / 例外**：

- 算法稳定币（GENIUS Act 明文禁止）→ 直接淘汰
- 完全去中心化稳定币（DAI 等）→ 无法执行黑名单，市场份额受限
- 灰色稳定币（Tron 链上 USDT）→ 不进入美国市场，规避法案

**地缘政治含义**：法案将使美国稳定币阵营（USDC / USD1  / PYUSD）与非美国稳定币（USDT 灰色路径/各国主权稳定币/算法稳定币）形成结构性对立。详见[[fintech/stablecoin-chain-sovereign-currency-divide]]。

**与日本立法的并行关系**：日本《资金结算法》中的对应条款（第 1 号电子支付手段）同样要求发行方具备类似能力（信托型/银行型/资金转移业者型，详见[[fintech/japan-epi-three-types-overview|日本 EPI 三型アーキテクチャ]]）。GENIUS Act 与日本立法属于**并行立法趋势**，而非孤立现象。

**先例与跨境扩展**：链级冻结的实际操作先例已在 USDC / USDT 多链上发生，详见[[fintech/chain-level-ofac-freeze-precedent|チェーンレベル OFAC freeze 先例]]。结合 VASP 侧[[fintech/fatf-travel-rule-overview|FATF Travel Rule]]部署的 BTS 协议层，构成"信息层+资产层"双重合规栈。全球 VASP 监管横向比较矩阵参见[[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリクス]]。


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]
- [[fintech/japan-financial-regulation|日本金融規制]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号ネイティブ分流]]
- [[fintech/circle-usdc-stablecoin|Circle USDC · §501 ホワイト圏リーダー]]
- [[fintech/eu-mica-implementation-status-2026|EU MiCA 実装状況 · §501 対応物]]
<!-- /wiki-links:managed -->

---

**最后更新**（2026-05-26）：内联固定2025-07-18签署日期（替换原模糊表述"2025 年"）；补充参议院/众议院通过日期；新增 Circle USDC 及 MiCA 实施交叉链接。
