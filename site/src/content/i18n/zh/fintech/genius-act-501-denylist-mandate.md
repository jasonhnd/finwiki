---
source: fintech/genius-act-501-denylist-mandate
source_hash: 8a11d3489b548b67
lang: zh
status: machine
fidelity: ok
title: "GENIUS Act §501 链级 Denylist 合法化"
translated_at: 2026-06-18T23:59:13.043Z
---

# GENIUS Act §501 链级 Denylist 合法化


## Wiki 路由

本条目归属于 [[fintech/INDEX|fintech index]]。请结合 [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] 以了解邻接脉络，并结合 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] 了解更广泛的系统边界。

> [!info] 要点
> 美国 GENIUS Act §501(**经 2025-07-18 总统签署生效**；参议院通过于 2025-06-17、众议院通过于 2025-07-17) 明文要求合规稳定币发行体具备**链级地址封锁能力**(chain-level Denylist)。该条款反过来恰好解释了 [[fintech/circle-usdc-stablecoin|Circle]] 为何不得不自建 L1(Arc) 的根本原因:**唯有自有链才能同时控制 token 与 consensus 层，从而实现端到端的合规执行**。链级 Denylist 已从「商业妥协」升格为「法律明文要求」。

**条款的核心要求**:

- 合规稳定币发行体必须具备对特定地址执行 **freeze／ burn／ blacklist** 的能力
- 在通用 EVM 链上的实现路径，是发行体为 token contract 添加相应权限（例如 USDC 的 `blacklisted` mapping）
- 但发行体**无法控制链本身**（Ethereum／ Solana／各 L2 的 sequencer 自主运行），故仍残留抗审查 fork 这一潜在风险
- 自有 L1 ＝同时掌控 token、consensus 层、sequencer → **端到端 enforce**

**Arc 的实现**:

- 链级 Denylist precompile（5 个 stateful precompile 之一）
- PermissionedValidatorManager 的三层架构
- AWS Nitro Enclaves Remote Signer
- KYB-only StableFX

**通用模式**:「**自建合规链**」对于 GENIUS Act 通过后的稳定币发行体而言是**结构性选择**，而非商业偏好:

- Circle Arc(USDC):在 GENIUS Act 起草阶段主动游说＋自建 L1 
- Stripe Tempo(Bridge 稳定币):OCC trust bank charter ＋ Tempo validator 多元化
- Tether 未来路径:USAT(Anchorage) 等合规版＋自有 USDT0 ／ Plasma／ Stable 链推测

**反例／例外**:

- 算法稳定币(GENIUS Act 明文禁止)→ 直接淘汰
- 完全去中心化稳定币(DAI 等)→ 无法执行 Denylist，市场份额受限
- 灰色稳定币(USDT on Tron)→ 不进入美国市场，规避法案

**地缘政治含义**:法案促使美国稳定币阵营(USDC／ USD1 ／ PYUSD) 与非美国稳定币(USDT 灰色路线／各国主权稳定币／算法稳定币) 形成结构性对立。详见 [[fintech/stablecoin-chain-sovereign-currency-divide]]。

**与日本立法的并行关系**:日本《资金结算法》中的对应条款(第 1 号电子支付手段) 同样要求发行体具备类似能力(信托型／银行型／资金移动业者型，详见 [[fintech/japan-epi-three-types-overview|日本 EPI 三型アーキテクチャ]])。GENIUS Act 与日本立法同属**并行立法趋势**，并非孤立现象。

**先例与跨境扩展**:链级冻结的实际运用先例已在 USDC／ USDT 多链上发生，详见 [[fintech/chain-level-ofac-freeze-precedent|チェーンレベル OFAC freeze 先例]]。与 VASP 一侧 [[fintech/fatf-travel-rule-overview|FATF Travel Rule]] 部署的 BTS 协议层相结合，构成「信息层＋资产层」双重合规栈。全球 VASP 监管的横轴矩阵参见 [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリクス]]。


## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]
- [[fintech/japan-financial-regulation|日本金融規制]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号ネイティブ分流]]
- [[fintech/circle-usdc-stablecoin|Circle USDC · §501 ホワイト圏リーダー]]
- [[fintech/eu-mica-implementation-status-2026|EU MiCA 実装状況 · §501 対応物]]
<!-- /wiki-links:managed -->

---

**Last refresh** (2026-05-26): 在正文内固定 2025-07-18 签署日期（替换含糊的「2025 年」）；补充参议院／众议院通过日期；补充 Circle USDC 与 MiCA 实施的交叉链接。
