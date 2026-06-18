---
source: fintech/mbridge-bis-multi-cbdc-vs-agora
source_hash: d82f8ecab24db590
lang: zh
status: machine
fidelity: ok
title: "mBridge vs Agora · BIS 2025 同年切换的双轨对比"
translated_at: 2026-06-18T23:59:13.044Z
---

# mBridge vs Agora · BIS 2025 同年切换的双轨对比

## Wiki 路由

本条目归属于 [[fintech/INDEX|fintech index]]。请结合 [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] 以了解邻接脉络，并结合 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] 了解更广泛的系统边界。

> [!info] 要点
> 2025 年是 BIS 在 CBDC 跨境支付战略中进行「轨道切换」的关键年份:于 10 月退出 mBridge(BRICS+ 多 CBDC)＋全年加速推进 Agora(7 家中央银行＋民间银行的 tokenized correspondent banking)。2 个项目从「中立桥」与「美元友好桥」的双轨，转变为「中国主导」vs「美欧主导」的二元结构。

## Key facts

- BIS 2025-10 退出 mBridge · 同年加速推进 Agora ^[extracted]
- mBridge 中央银行成员 5(PBoC／ HKMA／ BoT／ CBUAE／ SAMA)· 全部为非 G7  ^[extracted]
- Agora 中央银行 7 行:Fed／ BoE／ BoJ／ SNB／ Banque de France／ Bank of Korea／ Banco de México ^[extracted]
- Agora 为「tokenized correspondent banking」模式 · 中央银行＋商业银行共同验证 ^[extracted]

## Mechanism / How it works

mBridge 与 Agora 在技术层面同样采用 permissioned DLT ＋ BFT 共识，但治理与参与结构根本不同。**mBridge** 是中央银行节点＋商业银行 sub-participants 的双层结构，绕过 SWIFT ＋ Fedwire，以各国 CBDC 直接结算。**Agora** 则是「tokenized correspondent banking」—— 中央银行发行 tokenized reserve · 商业银行发行 tokenized deposit · 在统一 ledger 上共同结算，实质是「将既有的 SWIFT/Fedwire correspondent banking 上链」，并不颠覆美元体系(deposit token 论题参见 [[fintech/institutional-stablecoin-deposit-token-thesis|機関 SC vs deposit token 論題]])。BIS 2025 的切换，意味着 BIS 选择了「上链补丁」而非「替代体系」的路线 —— 让美元一侧拥抱 tokenization，并将 mBridge 交由非美元一侧自治。

## Origin & evolution

2021 年 mBridge 启动 · 同期 Agora 仅停留于 BIS 内部 ideation。2023-2024 年 mBridge 进入 MVP，Agora 仍处于筹备阶段。2024-04 Agora 正式公布 · 7 家中央银行＋ 41 家商业银行加入(JPM／ Citi／ HSBC／ [[megabanks/mufg|三菱 UFJ]] 等)。2025-Q1-Q3 Agora 完成首次 atomic settlement PoC · mBridge 同期被 G7 政治压力包围。2025-10 BIS 宣布退出 mBridge 运营 —— 同时持续宣传 Agora 的进展。2026-Q2 mBridge 与巴西 DREX 的互操作测试 · Agora 进入中央银行扩容招募阶段。两个项目从「BIS 双轨」转变为「对立的 2 货币阵营的技术栈」。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge 概要]]
- [[fintech/bis-project-agora-overview|Agora 概要]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
- [[fintech/jurisdiction-list-monetary-protectionism|司法管轄区リスト = 貨幣保護主義]]
<!-- /wiki-links:managed -->

## 来源
