---
source: fintech/mbridge-bis-multi-cbdc-overview
source_hash: 66660eff115d0322
lang: zh
status: machine
fidelity: ok
title: "mBridge·BIS 多CBDC跨境支付桥（概述）"
translated_at: 2026-05-31T11:13:44.921Z
---

# mBridge·BIS 多CBDC跨境支付桥（概述）

## 维基路线

该条目位于[[fintech/INDEX|fintech index]]下。阅读它时，使用 [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] 表示相邻上下文，使用 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] 表示更广泛的系统边界。

> [!info] TL;DR
> mBridge 是一个直接在央行之间进行结算的批发 CBDC 网络。它基于 HotStuff BFT + DLT 许可账本，绕过 SWIFT + Fedwire，以各国本地货币 CBDC 进行点对点 PvP 原子结算。 BIS退出2025-10 释放了中国主导的自由，与3日元MRA-美元体系形成两极格局。

## 关键事实

- 2021 年に BIS Innovation Hub + PBoC + HKMA + BoT + CBUAE が共同で孵化 ^[extracted]
- 2024-06 通过加入沙特SAMA扩展到5 央行·2024 MVP阶段^[extracted]
- 2025-10 BIS因“地缘政治风险”退出运营^[extracted]
- 共识是HotStuff BFT · 央行100% 验证者 · 商业银行是次级参与者^[extracted]
- 支付模型是 PvP（支付与支付）原子 · 测试网 < 10  秒 ^[extracted]
- 所覆盖国家的 GDP 总量约为35% ^[extracted]
- 2030 预估处理量$35-75B/年 · 相当于SWIFT跨境0.5-1% ^[extracted]

## 机制/如何运作

每个央行都运行一个 mBridge 验证器节点1  + 自己的 CBDC 账本，并共享 mBridge 账本来进行跨币种支付。 PvP 模型确保2 件 的 CBDC 转账同时成功或同时回滚，消除 Herstatt 风险。商业银行作为子参与者通过每个国家的中央银行连接起来——没有私人节点。 HotStuff BFT 提供 < 10  秒的最终确定性，而 SWIFT MT 跨境 1-3  天。 BIS 的退出（2025-10）让中国央行得以自由地主导该协议——随着 BIS 中立性限制的消除，mBridge 可以更积极地扩展到金砖国家+货币和大宗商品贸易场景。与 SWIFT API 通道的比较请参见[[fintech/cross-border-sc-via-swift-api|クロスボーダー SC via SWIFT API]]。

## 起源与演变

2021 年に BIS Innovation Hub Hong Kong Centre 始動 · PBoC / HKMA / BoT / CBUAE の 4 中央銀行と連携。2022-2023 年 PoC 段階でクロス通貨実験を完了。2024-06 サウジ SAMA 加入 · 5 中銀へ拡大。2024 年 MVP 商用可能段階に入り、Aramco 石油決済(詳細は [[fintech/sovereign-capital-pool-aramco-anchor|Aramco 主権資金プール・アンカー]])/ 中-ブラジル大豆貿易 / 中-アラブ金引渡に接続テストを実施。2025-10 BIS 運営撤退 —— 表向きは「地政学的リスク」、実質は米国/G7 政治圧力 + 中国主導の発言権過大。2026-Q2 ブラジル BCB DREX との相互運用性テスト → 大陸跨ぎの非米ドル決済閉ループが形成、詳細規模は [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge 非米ドル決済リング規模]] を参照。

＃＃ 有关的
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agora · BIS 同年切替対比]]
- [[fintech/mbridge-six-central-banks-roster|mBridge 6 中央銀行リストと役割]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
- [[fintech/jurisdiction-list-monetary-protectionism|司法管轄区リスト = 貨幣保護主義]]
<!-- /wiki-links:managed -->

## 来源
