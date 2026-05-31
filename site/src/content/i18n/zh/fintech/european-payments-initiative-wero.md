---
source: fintech/european-payments-initiative-wero
source_hash: 2669900e4bf06bee
lang: zh
status: machine
fidelity: ok
title: "欧洲支付倡议 · Wero · 欧洲银行联合的零售支付钱包 · 对抗 PayPal / Apple Pay"
translated_at: 2026-05-31T06:16:15.733Z
---

# 欧洲支付倡议 · Wero · 欧洲银行联合的零售支付钱包 · 对抗 PayPal / Apple Pay

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/e-euro-retail-rollout|digital euro retail rollout]] for the ECB-issued retail money parallel track, and with [[fintech/fnality-wholesale-settlement|Fnality]] for the wholesale-side European bank-consortium pattern (Wero is the retail mirror).

> [!info] TL;DR
> 欧洲支付倡议（EPI Company SE，比利时注册）是2020 年年由欧洲主要银行14 行家+Worldline+Nexi 共同设立的零售支付联盟，旗舰产品 **Wero 钱包**于**2024 年 7 月起在 DE/FR/BE/NL 4 个国家分阶段上线**，先行推出 P2P 转账，其后逐步发布商户支付和线上结账功能。Wero 的根本目的 = 欧洲银行**夺回零售支付主权**，对抗 PayPal / Apple Pay / Google Pay / Visa-Mastercard 等非欧系平台。底层基础设施为 **SEPA 即时信贷转账（SCT Inst）**，与欧洲央行计划中的[[fintech/e-euro-retail-rollout|digital euro]]构成"银行联盟 vs 央行直发"的二元选择/并行格局。

## Key facts

- 注册法人：EPI Company SE · 布鲁塞尔 · 2020-Q3 成立 ^[extracted]
- 股东/成员银行：法国巴黎银行、法国存款信贷联合银行(BPCE)、Crédit Mutuel、德意志银行、DZ Bank、荷兰国际集团(ING)、KBC、法国邮政银行(La Banque Postale)、荷兰国民银行(Nationale-Nederlanden)、荷兰合作银行(Rabobank)、桑坦德银行(Santander)、法国兴业银行、储蓄银行金融集团(Sparkassen-Finanzgruppe)、裕信银行(UniCredit)+Worldline+Nexi ^[extracted]
- Wero 上线：2024-07 （DE/FR 首发，P2P）→ 2024-Q4 （BE/NL P2P）→ 2025-Q2 （线上商户结账）→ 2026-Q1 （NFC 实体店，向欧盟其他国家扩展） ^[extracted]
- 用户数：约 **30M+** Wero 注册用户（2026-Q1 联盟公布） ^[extracted]
- 底层支付：SEPA 即时信贷转账（SCT Inst，10 秒内最终结算） ^[extracted]
- 累计股权/开发投资：约€1.5B+（2020-2024 多轮注资） ^[extracted]
- 退出/撤资：西班牙对外银行(BBVA)、意大利联合圣保罗银行(Intesa Sanpaolo)等于2022-2023 退出 → 联盟从31 行家缩减至14 行家 ^[extracted]
- 与 EBA Clearing / SCT Inst 的互操作性：Wero 转账通过 RT1 /TIPS 轨道（欧元体系 TARGET 即时支付结算）运行 ^[extracted]

## Mechanism / How it works

Wero 的核心模式 = **"欧洲银行联合的零售支付钱包"**，用户在14 行家成员银行的应用内可直接进行 **P2P 转账（使用电话号码或电子邮件地址）+商户结账+NFC 实体店支付**，全部通过 SCT Inst 在10 秒内完成。**关键差异**：PayPal / Apple Pay 将欧洲消费者的支付数据和交换收入留在美国；Wero 则将这些价值留在欧洲银行体系内。这是[[fintech/jurisdiction-list-monetary-protectionism|管轄区域通貨保護主義]]的欧洲案例——并非封堵外资，而是构建并行体系。

技术/监管栈：底层为[[systems/sepa-instant-overview|SEPA Instant Credit Transfer]]（10 秒内最终结算，EBA Clearing RT1 +欧元体系 TIPS 双轨）；Wero 是 SCT Inst 之上的用户体验/地址层（用户使用电话号码/电子邮件地址代替 IBAN）。**未引入稳定币/代币/区块链**，完全在 SEPA 内运营的"传统支付现代化"路径，与[[fintech/circle-usdc-stablecoin|USDC]]/[[fintech/stripe-usdb-bridge-stablecoin|USDB]]的"链上美元"路径形成根本对比。

与[[fintech/e-euro-retail-rollout|digital euro]]的关系：**两者目标重叠度80%**——同为欧洲零售支付主权方案。欧洲央行数字欧元是央行直发的零售货币（CBDC），Wero 是银行联盟的商业方案。**欧洲央行的实际战略 = 将数字欧元设计为"通过银行+Wero 等钱包分发"而非完全替代** → 这将 Wero 固定为数字欧元重要零售分发渠道之一，与[[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ]]中的"二层分发"模式一致。

## Origin & evolution

2020-Q3 ：EPI Company SE 成立 = 欧洲31 行家银行+2 家 PSP（Worldline/Nexi）共同发起，目标为"泛欧支付方案 = 卡+钱包+即时支付"。2021-2022 ：战略调整——放弃自建卡支付网络（与 Visa/Mastercard 正面竞争成本过高）→ 专注钱包+SCT Inst。**2022 西班牙对外银行/意大利联合圣保罗/德国商业银行等退出**，联盟从31 行家缩减至约16 行家（后在14 行稳定），这是[[fintech/multi-megabank-consortium-governance|多大銀行連邦ガバナンス]]的典型治理摩擦。2023-Q4 ：收购法国 **Payconiq International**（BE/NL/LU 现有 P2P 钱包）= Wero 原型成形。**2024-07 ：Wero 首发**：DE（德意志银行/储蓄银行集团）+FR（法国存款信贷联合银行/法兴/Crédit Mutuel），P2P 转账先行。2024-Q4 ：BE/NL 加入。2025-Q2 ：线上结账阶段。2026-Q1 ：NFC 实体店+欧盟其他国家扩展计划。**重要事件**：2025 欧盟**即时支付法规**强制要求欧元区所有银行支持 SCT Inst（10 秒+不得加收费用）→ Wero 直接受益，因 Wero 用户体验正是 SCT Inst 上的钱包层。2026-Q2 ：Wero 用户30M+，与[[fintech/circle-usdc-stablecoin|USDC]]欧洲零售覆盖几乎不重叠（USDC 主要面向加密原生用户）。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/e-euro-retail-rollout|digital euro retail rollout]]
- [[fintech/fnality-wholesale-settlement|Fnality]]
- [[fintech/multi-megabank-consortium-governance|多大銀行連邦ガバナンス]]
- [[fintech/mica-overview|MiCA]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ]]
- [[fintech/jurisdiction-list-monetary-protectionism|管轄区域通貨保護主義]]
- [[fintech/circle-usdc-stablecoin|Circle USDC / EURC]]
- [[fintech/stripe-usdb-bridge-stablecoin|Stripe USDB]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC 採用カーブ]]
<!-- /wiki-links:managed -->

## Sources

- https://www.epicompany.eu/ — 欧洲支付倡议 SE 官方主页
- https://www.wero-wallet.eu/ — Wero 钱包官方主页
- https://www.epicompany.eu/news — EPI 新闻发布
- https://www.ecb.europa.eu/paym/intro/news/html/index.en.html — 欧洲央行支付系统新闻
- https://www.bundesbank.de/en/tasks/payment-systems — 德意志联邦银行支付系统页面（EPI/Wero 德国侧）
