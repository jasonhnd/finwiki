---
source: fintech/global-stablecoin-regulatory-five-pole-matrix
source_hash: 7baf14737caf3a76
lang: zh
status: machine
fidelity: ok
title: "全球稳定币监管五极比较矩阵"
translated_at: 2026-05-31T07:28:06.121Z
---

# 全球稳定币监管五极比较矩阵

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]] and is the cross-jurisdictional matrix view that sits above the per-regime overviews. It complements the geopolitical lens of [[fintech/three-circles-stablecoin-mra-framework]] (which collapses the world into three MRA circles), by instead enumerating **all five active stablecoin licensing regimes** on a feature-by-feature basis so a counsel or treasury team can pick a jurisdiction matrix-wise rather than narratively. For VASP / on-ramp adjacency see [[exchanges/INDEX|exchanges]].

> [!info] TL;DR
> 到 2026-05 ，全球已有 **五套投入运行的稳定币牌照制度** —— 美国 GENIUS Act、欧盟 MiCA（EMT/ART）、日本 EPI 三型、HKMA Stablecoin Ordinance，以及 MAS PSA + SCS —— 它们在**大约五项不可谈判的原则**上已经趋同（1:1  现金 / 短久期主权债准备金、隔离托管、月度鉴证、法定强制赎回权、禁止算法型 SC），但在 (a) 允许的发行体类型、(b) 跨境 / 第三国准入、(c) 资本门槛、(d) 准备金构成细则上仍存在**实质性分歧**。因此，在 MRA passporting 填平差距之前，存在一个 **18–24  个月的监管套利窗口**。

## Why a five-pole comparison

“USDC 到处都占主导”的单一发行体叙事，在跨过大西洋或太平洋之后就不成立了。依据 GENIUS 在美国合规发行的 payment stablecoin，并不会自动获得欧盟 EMT 身份、日本 EPI 上架、香港发行牌照或新加坡 SCS 认可。每个制度都施加各自的准备金、治理、资本、赎回和 AML/CFT 规则 —— 因而**同一枚锚定美元的代币**，会因为发行实体与提供地点不同，而对应五种不同的法律分类。下面的矩阵就是这一现实的工作界面。各极的单独深挖见 [[fintech/genius-act-501-denylist-mandate]]（美国）、[[fintech/mica-overview]]（欧盟）、[[fintech/japan-stablecoin-regulatory-landscape]]（日本）、[[fintech/hkma-stablecoin-licensing-overview]]（香港）、[[fintech/singapore-mas-payment-services-act-overview]]（新加坡）。

## Matrix A · 法规、监管者、日期

| Pole | Statute | Lead regulator | Effective | Transition window |
|---|---|---|---|---|
| 🇺🇸 US GENIUS | Payment Stablecoin Act (GENIUS) | OCC + Federal Reserve + state regulators（双轨） | 2025-07,  签署；规则定稿 2026-H2  | 不合规发行体有 18  个月退出美国市场 |
| 🇪🇺 EU MiCA | Regulation (EU) 2023/1114  | EBA（重大机构）+ ESMA + 各国 NCA | SC 部分于 2024-06-30 生效；完整 MiCA 于 2024-12-30 生效 | 18  个月祖父期于 2026-07  结束 |
| 🇯🇵 Japan EPI | 修订后的《支付服务法》（PSA 2022  revision） | FSA + 关东财务局 + 信托业协会 | 自 2023-06-01 起生效 | 无过渡期 —— 新制度围绕三种新牌照类型构建 |
| 🇭🇰 HK | Stablecoin Ordinance（Cap. 656） | HKMA | 自 2025-08-01 生效；首批牌照于 2026-05-21 发放 | 现有沙盒参与者有 6 个月从沙盒过渡到牌照 |
| 🇸🇬 SG | PS Act 2019  + SCS Framework 2023-08  + DTSP Regime 2024-04  | MAS | PSA 于 2020-01；SCS 于 2023 年 8 月；DTSP 于 2024  年 4 月 | DTSP 祖父期于 2025-06  关闭 |

最早起跑的是日本（2023-06），最新上线的是 HKMA（2025-08），而机构分量最重的是 GENIUS（2025-07）。MiCA 是唯一一个以单一 400 页法规写成的制度，而不是附着在支付法上的一种牌照类别。

## Matrix B · 范围与被排除的设计

| Pole | Pegged currency scope | Algorithmic SC | Multi-asset baskets | Bearer / unregistered |
|---|---|---|---|---|
| US GENIUS | 仅限 USD（payment stablecoin） | ❌ 禁止 | ❌ 不在范围内（按 commodity / security 处理） | ❌ |
| EU MiCA | 任一单一法币（EMT）或多资产 / 多法币（ART） | ❌ 禁止（Art. 19） | ✅ 存在 ART 类别，但采用度接近于零 | ❌ |
| Japan EPI | JPY + 外币法币（通过 SBI Circle 的 USD） | ❌ 默示禁止（必须按面值赎回） | ❌ 未被设想 | ❌ |
| HKMA | 任一单一法币（以 HKD + USD 为主） | ❌ 禁止 | ❌ 不在范围内 | ❌ |
| MAS SCS | SGD + 任意 G10  单一法币 | ❌ 禁止 | ❌ 不在范围内（由 DPT 而非 SCS 监管） | ❌ |

**趋同线**：**五极全部禁止算法稳定币**，直接回应了 2022  年 5 月 UST 崩盘。**分歧线**：只有 MiCA 创设了多资产类别（ART），而它在市场上基本失败 —— 尚未出现大型 ART 发行体，这再次印证了 [[fintech/genius-act-501-denylist-mandate]] 中所见的“监管塑造产品”动态。

## Matrix C · 允许的发行体类型

| Pole | Issuer types allowed |
|---|---|
| US GENIUS | (a) 联邦合格 payment stablecoin issuer（OCC charter），(b) 流通量不超过 $10B 的州级合格发行体，(c) 银行子公司 |
| EU MiCA | (a) Credit institution（欧盟银行），(b) 获授权的 e-money institution（EMI）用于 EMT，(c) 获授权 ART 发行体（单独牌照） |
| Japan EPI | (a) 信托型（由信托银行发行），(b) 银行型（由银行发行），(c) 资金移动业者型（注册资金移动业者） |
| HKMA | (a) 在香港注册设立的稳定币发行体（新的专用牌照），不能搭现有银行牌照便车 |
| MAS SCS | (a) 获 MAS 牌照的 SCS 发行体（PS Act 下的专用类别），须在新加坡注册并有本地管理层 |

**趋同线**：每一极现在都承认**专门的稳定币发行牌照**，而不是只允许银行。**分歧线**：只有日本把发行体拆成三种独立法律形态（信托 / 银行 / 资金移动），其运营边界存在实质性差异 —— 信托 vs 银行 vs 资金移动的拆分见 [[fintech/japan-epi-three-types-overview]]。

## Matrix D · 准备金构成、赎回、资本

| Pole | Reserve composition | Redemption right | Capital / liquidity minimum |
|---|---|---|---|
| US GENIUS | 100% 可持有 (i) 美元现金，(ii) 受保存款机构的活期存款，(iii) 期限不超过 93 天的国债，(iv) 国债支持的逆回购 | 法定按面值赎回，T+1  | 由主要联邦监管者决定；OCC charter 底线约 $50M |
| EU MiCA | EMT：30%+ 放在欧盟银行存款中（重大 EMT 为 60%）+ 其余为 HQLA；隔离且破产隔离 | 强制按面值赎回，T+1 （Art. 39） | EMI 最低资本 €350K + 随流通量扩张的自有资金要求 |
| Japan EPI | 信托型：100% 信托隔离；银行型：与银行资产负债表绑定 + 存款保险上限 ¥10M；资金移动型：通过存款 / 保证金完全隔离 | 按面值强制赎回，按类型为 T+0/T+1  | 信托型 ≥ ¥100M 实缴；银行型：银行法资本充足率；资金移动型：¥10M + 单笔上限 |
| HKMA | 100% 配置于 HKD / USD 短久期国债、央行准备金及隔离银行存款；每日盯市 | 强制按面值赎回，T+1；拒绝理由仅限 AML | 实缴资本 ≥ HK$25M，且持续资本 ≥ 已发行 SC 价值的 2% |
| MAS SCS | 100% 持有现金、现金等价物或期限不超过 3 个月、评级 AA− 的主权债；托管于 MAS 批准的隔离托管机构 | 在 5  个工作日内按面值赎回 | 基础资本 ≥ S$1M，且不得低于 S$1M 或年运营支出的 50% 两者中较高者 |

**最严格**的准备金制度是 **MAS SCS**（3 个月主权债、AA− 底线、每日鉴证），**最宽松**的是 **US GENIUS**（允许受保存款机构活期存款和逆回购）。EU MiCA 是唯一要求准备金中有**固定比例**必须放在欧盟银行的制度，不考虑信用质量，副作用是以发行体 NIM 为代价补贴欧盟银行。

## Matrix E · 跨境与第三国准入

| Pole | Foreign issuer access | Third-country regime |
|---|---|---|
| US GENIUS | 仅可通过美国注册的合格发行体，或财政部认可的“comparable foreign regulator”路径（§502） | “comparable foreign regulator”名单由财政部控制；以 MRA 驱动；日本已于 2026-02,  签署，欧盟预计于 2026-Q3  签署 |
| EU MiCA | 外国 EMT 发行体必须设立欧盟 CRR credit institution 或 EMI；无被动营销豁免 | 除反向招揽外，第三国提供被禁止；MiCA Level 1  内建中没有 equivalence regime |
| Japan EPI | 外国 SC 只能通过持牌 EPI 服务提供商分发（例如 SBI VC Trade 分发 USDC）；外国发行体不能直接提供 | 分销商模型 + 双边 MRA（美日 MRA 2026-02） |
| HKMA | 外锚定 SC（如锚定 USD）必须由持有香港牌照的本地实体发行；不接受离岸分支机构 | 无第三国 equivalence；仅有双边 MoU |
| MAS SCS | 外国发行体必须设立新加坡子公司并取得 SCS 牌照；现有 DPT 牌照不会自动升级 | DTSP 制度堵住了“新加坡枢纽服务全球客户”的漏洞；无 equivalence regime |

这是**最大的一处分歧**。美国设计了有意为之的 equivalence on-ramp（§502  + MRA）；欧盟建成了封闭花园，只有 reverse solicitation 这一逃生阀；日本采用分销商模型；香港和新加坡都要求本地设立。TL;DR 中提到的 18 个月套利窗口，来自双边 MRA 从签署（2026–2027）到完全可操作（2027–2028）之间的时间差。

## Matrix F · 披露、审计、AML、处置

| Pole | Attestation cadence | AML/CFT | Resolution regime |
|---|---|---|---|
| US GENIUS | 每月准备金构成披露 + 年度财务报表审计；CEO/CFO 认证 | BSA、OFAC SDN 筛查、通过 FinCEN 执行 Travel Rule | 州级合格发行体适用 FDIC 式接管；联邦发行体由 OCC 进行清盘 |
| EU MiCA | 每月准备金鉴证 + 季度披露 + 年度审计；白皮书 + 持续向 NCA 报送 | AMLD6  + Transfer-of-Funds Regulation（Travel Rule）+ 欧盟制裁 | BRRD 扩展适用于重大 EMT 发行体 |
| Japan EPI | 每月准备金披露（信托型通过信托业协会）；年度审计财务报表 | 《犯罪收益移转防止法》（AML）+ 通过行业协会执行 Travel Rule + 经产省制裁 | 《信托业法》的信托隔离确保持有人优先；银行型适用银行法处置 |
| HKMA | 由独立审计师进行月度准备金鉴证；季度公开披露 | AMLO + JFIU + UN/HKMA 制裁筛查；Travel Rule 适用于发行体流转 | 适用香港《金融机构（处置机制）条例》；必须有发行体专属恢复计划 |
| MAS SCS | 每日准备金披露 + 每月第三方鉴证；年度审计 | PS Act AML + MAS Notice PSN02  + Travel Rule + UN/MAS 制裁 | 发行体专属恢复与处置计划；MAS 拥有接管权 |

MAS 在**每日**披露方面独一无二地严格。五极都把**每月第三方鉴证**收敛为最低标准，并把 **Travel Rule + 制裁筛查**收敛为必需 AML 控制。处置制度仍然碎片化 —— 只有欧盟和香港明确把银行处置机制扩展到了 SC 发行体。

## Matrix G · 允许的用途、分发、互操作

| Pole | Retail use | Wholesale / institutional | Embedded wallet distribution |
|---|---|---|---|
| US GENIUS | 可以，无单笔上限；定位于支付用途 | 可以，包括 DvP 与 tokenized deposits | 允许；由 OCC 监管 |
| EU MiCA | EMT 可用于零售；重大 EMT（>€5B）面临额外交易量上限 | 可以；ART 主要用于 tokenized funds | 允许，但仅限欧盟持牌钱包运营商 |
| Japan EPI | 可以；资金移动业者型单笔约上限 ¥1M（不同子牌照有部分差异） | 信托型为 B2B 大额而设计 | 允许；CASP / 钱包提供商需单独取得 EPI 分销登记 |
| HKMA | 可以；入金端要求 KYC；未规定单笔上限 | 可以；主要用途是与内地锚定银行进行跨境贸易 | 允许；仅限 HKMA 持牌方 |
| MAS SCS | 可以；若经 DPT 场所提供，则受 DPT 分销商 KYC 约束 | 可以 | 允许；需 MAS 持牌 DPT 分销商 |

## 跨制度互操作与套利窗口

1. **MRA 桥梁是唯一合法护照。** 没有双边 MRA，在一个制度下合规的代币**不会**自动在另一制度下合规。美日 MRA（签于 2026-02）允许美国合规的 USDC 通过 SBI VC Trade 作为 EPI 在日本分发；美欧或美港之间仍不存在同等护照。见 [[fintech/three-circles-stablecoin-mra-framework]]。
2. **准备金套利。** 新加坡持牌 SCS 发行体必须持有 3 个月期、评级 AA− 的主权债；美国合规发行体则可持有 93 天期国债和活期存款。净息差差异约为 30–60  bps，取决于利率周期，这会把高流通量美元发行体推向美国 charter。
3. **资本套利。** 新加坡底线 S$1M，对比香港 HK$25M、OCC charter 实际约 ~$50M、以及欧盟 EMI 的 €350K —— 相差四个数量级。较小发行体趋向新加坡 / 欧盟，规模发行体趋向美国 / 香港。
4. **跨境待遇缺口。** 美国 §502  和日本分销商模型是开放的；欧盟 / 香港 / 新加坡是封闭的。在 equivalence treaty 落地前，同一代币将在每个封闭市场都需要单独的法律包装。
5. **算法型排除是普遍的。** UST 式设计在任何地方都**没有合规路径** —— 五极都已确认。这会把算法型 SC 容量推向无监管链上，并强化 [[fintech/genius-act-501-denylist-mandate]] 中展开的分化。
6. **钱包 / VASP 分发。** 每个制度都要求**分发者**（交易所、钱包、on-ramp）持有独立于发行体牌照之外的自身牌照 —— 这使 [[exchanges/INDEX|exchanges]] 这一层面成为各辖区 SC 采用的限速步骤。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA 框架]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/mica-overview|MiCA 概览]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 法制度の三層構造]]
- [[fintech/japan-epi-three-types-overview|日本 EPI 三型]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA 牌照概览]]
- [[fintech/singapore-mas-payment-services-act-overview|MAS PSA + SCS 概览]]
- [[exchanges/INDEX|Exchanges]]
<!-- /wiki-links:managed -->

## Sources

- US Treasury · Digital Assets policy hub: https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service/digital-assets
- OCC · Charters and licensing: https://occ.treas.gov/topics/charters-and-licensing/index-charters-and-licensing.html
- ESMA · Crypto-assets policy: https://www.esma.europa.eu/policy-activities/crypto-assets
- EBA · MiCA technical standards: https://www.eba.europa.eu/regulation-and-policy/markets-in-crypto-assets-mica
- FSA Japan · EPI / 电子支付手段: https://www.fsa.go.jp/policy/dem_dl/index.html
- HKMA · Stablecoin Ordinance press releases: https://www.hkma.gov.hk/eng/news-and-media/press-releases/
- MAS · Payments regulation: https://www.mas.gov.sg/regulation/payments
- MAS · Digital token offering guide: https://www.mas.gov.sg/regulation/explainers/a-guide-to-digital-token-offerings
