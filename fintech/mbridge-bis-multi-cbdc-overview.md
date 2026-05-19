---
title: mBridge · BIS 多 CBDC 跨境结算桥(总览)
aliases: [mbridge-bis-multi-cbdc-overview, mbridge, m-bridge, multi-cbdc-bridge, BIS multi-CBDC platform]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [fintech, cbdc, bridge, mbridge, bis, china, brics, non-dollar]
sources: []
status: candidate
---

# mBridge · BIS 多 CBDC 跨境结算桥(总览)

> [!info] TL;DR
> mBridge 是央行间直接结算的批发型 CBDC 网络,基于 HotStuff BFT + DLT permissioned ledger,绕开 SWIFT + Fedwire 用各国本币 CBDC 做点对点 PvP atomic settlement。2025-10 BIS 退出后释放了中国主导自由度,与三圆 MRA 美元体系形成两极结构。

## Key facts

- 2021 由 BIS Innovation Hub + PBoC + HKMA + BoT + CBUAE 共同孵化 ^[extracted]
- 2024-06 沙特 SAMA 加入扩至 5 央行 · 2024 MVP 阶段 ^[extracted]
- 2025-10 BIS 以 "地缘政治风险" 为由退出运营 ^[extracted]
- 共识 HotStuff BFT · 央行 100% 验证者 · 商业银行作 sub-participants ^[extracted]
- 结算模式 PvP(Payment-versus-Payment)原子化 · 测试网 < 10 秒 ^[extracted]
- 覆盖国 GDP 合计约 35% ^[extracted]
- 2030 预测处理量 $35-75B/年 · 相当于 SWIFT 跨境的 0.5-1% ^[extracted]

## Mechanism / How it works

每个央行运营 1 个 mBridge 验证节点 + 各自的 CBDC ledger,共享 mBridge ledger 做跨币种结算。PvP 模式确保两笔 CBDC 转账要么同时成功要么同时回滚,消除 Herstatt risk(时差结算风险)。商业银行作为 sub-participants 通过各国央行接入 —— 没有私营节点。HotStuff BFT 提供 < 10 秒 finality 对比 SWIFT MT 跨境 1-3 天。BIS 退出后(2025-10)反而释放了中国 PBoC 主导该协议的自由度 —— 没有 BIS 中立性约束后,mBridge 可以更激进地扩展 BRICS+ 货币与商品贸易场景。

## Origin & evolution

2021 BIS Innovation Hub Hong Kong Centre 启动 · 联合 PBoC / HKMA / BoT / CBUAE 4 央行。2022-2023 PoC 阶段完成跨币种实验。2024-06 沙特 SAMA 加入 · 升至 5 央行。2024 进入 MVP 商业可用阶段 · 与 Aramco 石油结算 / 中-巴大豆贸易 / 中-阿黄金交割接入测试。2025-10 BIS 退出运营 —— 表面 "地缘政治风险" · 实际是 美国/G7 政治压力 + 中国主导话语权过强。2026-Q2 起与巴西 BCB DREX 互操作性测试 → 跨大洲非美元结算闭环成型。

## Counterpoints

- 35% GDP 覆盖 vs 实际跨境结算量仍极小 · 大宗商品贸易转换需要数年
- BIS 退出可能反向削弱多央行政治平衡 · 让 mBridge 沦为 "中国 + 附庸网络" 失去对印度 / 欧盟非美元势力的吸引
- CBDC 本身的隐私 / 监管争议 · 部分央行(欧洲)可能始终不参与
- HotStuff BFT 在 100+ 央行规模下的实测性能未公开

## Open questions

- BIS 退出后 mBridge 治理结构如何重组 · PBoC 是否会公开成为主席?
- 巴西 BCB DREX 互操作之后是否会有印度 / 南非 / 俄罗斯加入?
- mBridge 是否会成为 BRICS Pay 的实际技术底座?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agora · BIS 同年切换对照]]
- [[fintech/mbridge-six-central-banks-roster|mBridge 6 央行清单与角色]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA 框架]]
- [[fintech/jurisdiction-list-monetary-protectionism|司法管辖列表 = 货币保护主义]]
<!-- /wiki-links:managed -->

## Sources

