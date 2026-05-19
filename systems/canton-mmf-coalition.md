---
title: Canton MMF 联盟 · JPM + GS + BNY + DTCC 反 BlackRock 公链路线
aliases: [canton-mmf-coalition, gs-dap, bny-liquiditydirect, dtcc-project-ion]
domain: systems
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: certain
tags: [systems, dlt, canton, mmf, tokenization, jpm, goldman, bny, dtcc]
sources: []
status: candidate
---

# Canton MMF 联盟 · JPM + GS + BNY + DTCC 反 BlackRock 公链路线

> [!info] TL;DR
> Canton 联盟围绕 MMF tokenization 形成一套完整 stack:**JPM JPMD(cash leg)+ GS DAP(MMF leg)+ BNY LiquidityDirect(custody/客户入口)+ DTCC Project Ion(Treasury underlying)** 全覆盖机构 MMF 全生命周期,**且没有 BlackRock 直接参与的环节**——BlackRock 只是被动入驻的资产管理人之一。这是 Canton 联盟对 BlackRock BUIDL 公链路线最强的结构性反击。

## Key facts

- JPM:JPMD(cash leg)+ MONY/JLTXX MMF 部署在 Canton ^[extracted]
- GS:GS DAP 平台 + 5 家 MMF 入驻(BlackRock / BNY Dreyfus / Federated / Fidelity / GSAM) ^[extracted]
- BNY:LiquidityDirect(custody + 客户接口)+ Dreyfus MMF ^[extracted]
- DTCC:Project Ion(Treasury tokenization on Canton)2026-10 全平台 launch ^[extracted]
- BlackRock / Fidelity / Federated 只是被动入驻 GS DAP 的资产管理人 ^[extracted]

## Mechanism / How it works

机构 tokenization "两条路线"对峙:

| 路线 | 公链路线(BlackRock BUIDL) | 私链路线(Canton 联盟) |
|---|---|---|
| 平台 | Ethereum + 7+ 公链 | Canton Network |
| 入口 | Securitize(中立 platform) | BNY LiquidityDirect(银行渠道) |
| 隐私 | 公开 + Securitize KYC | Sub-transaction privacy |
| 价值归属 | 资产管理人 + 公链生态 | 银行(GS/BNY/JPM/DTCC) |
| 客户类型 | DeFi + 加密原生 + 机构混合 | 纯机构 + 传统 collateral mgmt |

**关键洞察**:Canton 联盟的设计让"机构 MMF 全生命周期"的每个环节都由联盟成员控制——cash(JPM)+ 资产(GS DAP)+ custody(BNY)+ underlying Treasury(DTCC)。BlackRock 作为 BUIDL 发行人,在 Canton 上只是 GS DAP 上的一个 MMF 选项,**价值归属和客户关系都不在 BlackRock 手里**。这与公链路线下 BlackRock 直接面客户、与 Securitize 分润形成鲜明对比。

## Origin & evolution

2024-2025 间机构 tokenization 进入"路线选择"窗口期。BlackRock 通过 BUIDL(2024-03 launch)抢占公链路线先发,2025 中 BUIDL TVL 突破 $1B。Canton 联盟反应:GS DAP 2024-2025 间陆续上线 MMF 入驻 → BNY LiquidityDirect 2025 开放给银行客户 → JPM Kinexys 2026-01 宣布 JPMD 主战场迁 Canton → DTCC Project Ion 2026-10 全平台 launch。

时间线上,这是一个**应对性策略**——Canton 联盟在 BlackRock 占据公链高地后,反向构建闭环 stack 把价值锁回银行体系。

## Counterpoints

Canton 联盟的弱点:**缺少零售/DeFi 入口**。机构客户的 collateral management 体量大但用户基数小;BlackRock BUIDL 通过 Securitize 至少触达加密原生用户和未来潜在的 DeFi 集成场景。长期看,谁占据下一代金融的"用户心智"是关键。另外 Canton 联盟内部利益分配未公开,JPM/GS/BNY/DTCC 间的协调成本可能高于联盟描述的"无缝"。

## Open questions

- DTCC Project Ion 2026-10 launch 后的实际 Treasury tokenization 体量?
- BlackRock 是否会做出反击——例如在 Securitize 上线"BlackRock 自营 custody"?
- Canton 联盟会不会扩张到 EU 银行(Deutsche Bank / BNP)?
- 长期 5-10 年视角下,机构 MMF 中私链 vs 公链路线的市场份额?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/canton-overview|Canton Overview]]
- [[systems/canton-daml-technical-spec|DAML Technical Spec]]
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton]]
<!-- /wiki-links:managed -->

## Sources

- DTCC Project Ion announcements
