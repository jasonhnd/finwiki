---
title: European Payments Initiative · Wero · 欧洲银行联营零售支付钱包 · 对抗 PayPal / Apple Pay
aliases: [european-payments-initiative-wero, EPI, Wero, EPI Wero, European Payments Initiative]
domain: fintech
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2026-11-25
confidence: likely
tags: [fintech, payments, epi, wero, european-bank-consortium, retail-wallet, sepa-instant, p2p, anti-paypal, digital-euro-prep]
status: candidate
sources:
  - https://www.epicompany.eu/
  - https://www.wero-wallet.eu/
  - https://www.epicompany.eu/news
  - https://www.ecb.europa.eu/paym/intro/news/html/index.en.html
  - https://www.bundesbank.de/en/tasks/payment-systems
---

# European Payments Initiative · Wero · 欧洲银行联营零售支付钱包 · 对抗 PayPal / Apple Pay

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/e-euro-retail-rollout|digital euro retail rollout]] for the ECB-issued retail money parallel track, and with [[fintech/fnality-wholesale-settlement|Fnality]] for the wholesale-side European bank-consortium pattern (Wero is the retail mirror).

> [!info] TL;DR
> European Payments Initiative (EPI Company SE, 注册地比利时) 是 2020 年由 14 家欧洲主要银行 + Worldline + Nexi 共同创立的零售支付联营,旗舰产品 **Wero wallet** 在 **2024 年 7 月起在 DE / FR / BE / NL 四国分阶段上线**,P2P 转账先行,商户支付与在线 checkout 阶段性推出。Wero 的根本目的 = 欧洲银行**夺回零售支付主权**, 对抗 PayPal / Apple Pay / Google Pay / Visa-Mastercard 的非欧体系。底层基于 **SEPA Instant Credit Transfer (SCT Inst)**, 与 ECB 计划的 [[fintech/e-euro-retail-rollout|digital euro]] 形成"银行联营 vs 央行直发"二选一/并行格局。

## Key facts

- 注册实体: EPI Company SE · Brussels · 2020-Q3 创立 ^[extracted]
- 股东 / 成员行: BNP Paribas, BPCE, Crédit Mutuel, Deutsche Bank, DZ Bank, ING, KBC, La Banque Postale, Nationale-Nederlanden, Rabobank, Santander, Société Générale, Sparkassen-Finanzgruppe, UniCredit + Worldline + Nexi ^[extracted]
- Wero 上线: 2024-07 (DE / FR 首发, P2P) → 2024-Q4 (BE / NL P2P) → 2025-Q2 (在线商户 checkout) → 2026-Q1 (NFC 实体店, EU 其他国家扩展) ^[extracted]
- 用户数: ~ **30M+** Wero registered users (2026-Q1 联营公布) ^[extracted]
- 底层结算: SEPA Instant Credit Transfer (SCT Inst, 10 秒内 final settlement) ^[extracted]
- 累计股权 / 开发投入: ~€1.5B+ (跨多轮注资 2020-2024) ^[extracted]
- 拒绝 / 退出方: 西班牙 BBVA, 意大利 Intesa Sanpaolo 等在 2022-2023 退出 → 联营从 31 家收缩到 14 家 ^[extracted]
- 与 EBA Clearing / SCT Inst 互通: Wero 转账走 RT1 / TIPS rails (Eurosystem TARGET Instant Payment Settlement) ^[extracted]

## Mechanism / How it works

Wero 的核心模型 = **"欧洲银行联营的零售支付钱包"**, 让用户在 14 家成员行 APP 内**直接 P2P 转账 (用手机号或邮箱) + 商户 checkout + NFC 实体店**, 全部走 SCT Inst 在 10 秒内完成。**关键差异**: PayPal / Apple Pay 把欧洲消费者的支付数据 + interchange 收入留在美国; Wero 把这些价值留在欧洲银行体系内。这是 [[fintech/jurisdiction-list-monetary-protectionism|管辖区货币保护主义]] 的欧洲样本——不是封堵外资,而是建立平行体系。

技术与监管栈: 底层走 [[systems/sepa-instant-overview|SEPA Instant Credit Transfer]] (10 秒内 final, EBA Clearing RT1 + Eurosystem TIPS 双 rails),Wero 是 SCT Inst 之上的 UX / addressing 层 (用户用手机号/邮箱代替 IBAN). **不引入 stablecoin / token / 区块链**,完全在 SEPA 内运作,是"传统支付现代化"路径,与 [[fintech/circle-usdc-stablecoin|USDC]] / [[fintech/stripe-usdb-bridge-stablecoin|USDB]] 的"链上美元"路径形成根本对照。

与 [[fintech/e-euro-retail-rollout|digital euro]] 的关系: **二者目标重合度 80%** —— 都是欧洲零售支付主权方案。ECB 的 digital euro 是央行直发零售货币 (CBDC), Wero 是银行联营的商业方案。**ECB 实际策略 = 把 digital euro 设计成"通过银行 + Wero 等钱包分发", 而非完全替代** → 这把 Wero 锁定为 digital euro 的关键零售分发通道之一,与 [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构]] 中"两层分发"模型一致。

## Origin & evolution

2020-Q3 EPI Company SE 创立 = 31 家欧洲银行 + 2 PSP (Worldline / Nexi) 共同发起, 目标 "欧洲泛欧支付方案 = card + wallet + 即时". 2021-2022 战略调整: 放弃自建 card scheme (与 Visa/MA 正面对抗成本过高) → 聚焦 wallet + SCT Inst. **2022 BBVA / Intesa / Commerzbank 等退出**, 联营从 31 家收缩到 ~16 家 (后稳定 14 家), 这是 [[fintech/multi-megabank-consortium-governance|多大银行联邦治理]] 的典型治理摩擦. 2023-Q4 收购法国 **Payconiq International** (BE/NL/LU 既有 P2P 钱包) = Wero 雏形. **2024-07 Wero 首发**: DE (Deutsche Bank / Sparkassen) + FR (BPCE / SocGen / Crédit Mutuel), P2P 转账先行. 2024-Q4 BE/NL 加入. 2025-Q2 在线 checkout 阶段. 2026-Q1 NFC 实体店 + EU 其他国家扩展计划. **关键事件**: 2025 EU **Instant Payments Regulation** 强制所有 EUR 区银行支持 SCT Inst (10 秒 + 无附加费用) → Wero 直接受益, 因为 Wero UX 就是 SCT Inst 之上的 wallet 层. 2026-Q2 Wero 用户 30M+, 与 [[fintech/circle-usdc-stablecoin|USDC]] 欧洲零售触达基本不重叠 (USDC 主要在 crypto-native 用户)。

## Counterpoints

Wero 的"银行联营"模式天然慢于 PayPal / Apple Pay 的"单一公司决策"——2020 启动到 2024 才上线 P2P, 期间多家成员行退出, **是 [[fintech/multi-megabank-consortium-governance|多大银行联邦治理]] 速度劣势的活体样本**。Apple Pay / Google Pay 在欧洲移动端 OS 层有结构性优势 (iOS 装机预装), Wero APP 需用户主动下载,**OS 层不开放给 Wero NFC 完全调用**(欧盟 DMA 要求 Apple 开放 NFC 后局部缓解, 但仍是 UX 摩擦). 与 [[fintech/e-euro-retail-rollout|digital euro]] 在最终零售流量上存在博弈——若 ECB digital euro 把 Wero 锁定为"分发通道之一" Wero 失去独立品牌, 若 ECB 直接发零售 wallet (不依赖商业银行) Wero 被边缘化。Wero 不涉链上 stablecoin, **在 [[agent-economy/x402-http-payment-overview|x402 agent 支付]] / [[agent-economy/ap2-overview|AP2]] 等链上 agent 经济场景几乎完全缺席** —— 欧洲 agent 经济若起来,Wero 与 USDC/USDB 路径会形成竞争。

## Open questions

Wero 在 2027 之前能否扩展到全部 27 个 EU 成员国 (目前 DE/FR/BE/NL 4 国)?ECB digital euro 2027-2028 上线后 Wero 是被锁定为"分发通道"还是被边缘化?Wero 是否会在某个阶段引入 EURC ([[fintech/circle-usdc-stablecoin|Circle EURC]]) 或欧元 TD 作为跨境 / agent 场景的链上结算 (突破纯 SEPA 边界)?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/e-euro-retail-rollout|digital euro retail rollout]]
- [[fintech/fnality-wholesale-settlement|Fnality]]
- [[fintech/multi-megabank-consortium-governance|多大银行联邦治理]]
- [[fintech/mica-overview|MiCA]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构]]
- [[fintech/jurisdiction-list-monetary-protectionism|管辖区货币保护主义]]
- [[fintech/circle-usdc-stablecoin|Circle USDC / EURC]]
- [[fintech/stripe-usdb-bridge-stablecoin|Stripe USDB]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC 采纳曲线]]
<!-- /wiki-links:managed -->

## Sources

- https://www.epicompany.eu/ — European Payments Initiative SE 官方主页
- https://www.wero-wallet.eu/ — Wero wallet 官方主页
- https://www.epicompany.eu/news — EPI 新闻发布
- https://www.ecb.europa.eu/paym/intro/news/html/index.en.html — ECB 支付系统新闻
- https://www.bundesbank.de/en/tasks/payment-systems — Bundesbank 支付系统页面 (EPI/Wero DE 侧)
