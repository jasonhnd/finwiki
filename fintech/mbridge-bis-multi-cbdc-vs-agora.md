---
title: mBridge vs Agora · BIS 2025 同年切换的双轨对照
aliases: [mbridge-bis-multi-cbdc-vs-agora, mbridge-vs-agora, bis-cbdc-twin-tracks]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [fintech, cbdc, mbridge, agora, bis, geopolitics, dollar, non-dollar]
sources:
  - https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm
  - https://www.bis.org/about/bisih/topics/fmis/agora.htm
  - https://www.bis.org/publ/othp59.htm
  - https://www.newyorkfed.org/aboutthefed/nyic
  - https://www.bis.org/cpmi/publ/d215.htm
status: candidate
---

# mBridge vs Agora · BIS 2025 同年切换的双轨对照


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 2025 是 BIS 在 CBDC 跨境结算战略上 "切换跑道" 的关键一年:10 月退出 mBridge(BRICS+ 多 CBDC)+ 全年加速推进 Agora(7 大央行 + 私营银行的 tokenized correspondent banking)。两个项目从 "中立桥" 与 "美元友好桥" 的双轨变成 "中国主导" vs "美欧主导" 的二元结构。

## Key facts

- BIS 2025-10 退出 mBridge · 同年加速 Agora 推进 ^[extracted]
- mBridge 央行成员 5 个(PBoC / HKMA / BoT / CBUAE / SAMA)· 全部非 G7 ^[extracted]
- Agora 央行 7 家:Fed / BoE / BoJ / SNB / Banque de France / Bank of Korea / Banco de México ^[extracted]
- Agora 是 "tokenized correspondent banking" 模式 · 央行 + 商业银行共同验证 ^[extracted]
- mBridge 100% 央行验证 · Agora 央行 + 私营银行共同验证 ^[inferred]
- BIS 切换的官方理由是 "地缘政治风险" · 实质是阵营选择 ^[inferred]

## Mechanism / How it works

mBridge 与 Agora 在技术层都用 permissioned DLT + BFT 共识,但治理与参与结构根本不同。**mBridge** 是央行节点 + 商业银行 sub-participants 的两层结构,绕开 SWIFT + Fedwire 走各国 CBDC 直接结算。**Agora** 是 "tokenized correspondent banking" —— 央行发 tokenized reserve · 商业银行发 tokenized deposit · 共同在统一 ledger 上结算,实质是 "把现有 SWIFT/Fedwire correspondent banking 上链",而非颠覆美元体系(deposit token 论题见 [[fintech/institutional-stablecoin-deposit-token-thesis|机构 SC 与 deposit token 论题]])。BIS 2025 的切换意味着 BIS 选择了 "上链补丁" 而非 "替代体系" 的路线 —— 让美元侧拥抱 tokenization 而留下 mBridge 给非美元侧自治。

## Origin & evolution

2021 mBridge 启动 · 同期 Agora 仅是 BIS 内部 ideation。2023-2024 mBridge 进入 MVP · Agora 仍在筹备。2024-04 Agora 正式公布 · 7 央行 + 41 商业银行加入(JPM / Citi / HSBC / [[JapanFG/mufg|三菱 UFJ]] 等)。2025-Q1-Q3 Agora 完成首轮 atomic settlement PoC · mBridge 同期被 G7 政治压力包围。2025-10 BIS 宣布退出 mBridge 运营 —— 同时持续宣传 Agora 进展。2026-Q2 起 mBridge 与巴西 DREX 互操作测试 · Agora 进入扩展央行招募阶段。两个项目从 "BIS 双轨" 变成 "对立的两个货币阵营技术栈"。

## Counterpoints

- BIS 退出 mBridge 是否真是政治压力 · 也可能是技术 / 治理失败(尚未公开数据)
- Agora 的 "tokenized correspondent banking" 实际可能比 mBridge 更慢 —— 因为要协调 41 家私营银行
- 中国 PBoC 可能反而欢迎 BIS 退出 · 因为可以更自主地推 e-CNY 国际化
- 两个项目未必互斥 · 长期可能在某些场景(如多边贸易)对接

## Open questions

- 2027-2030 mBridge 与 Agora 谁先达到 $100B 年结算规模?
- 印度 / 巴西 / 沙特是否会同时参与两个项目以做地缘对冲?
- 中国是否会在 mBridge 上加速人民币 SDR 篮子地位 · 还是先做双边路径?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge 总览]]
- [[fintech/bis-project-agora-overview|Agora 总览]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA 框架]]
- [[fintech/jurisdiction-list-monetary-protectionism|司法管辖列表 = 货币保护主义]]
<!-- /wiki-links:managed -->

## Sources

