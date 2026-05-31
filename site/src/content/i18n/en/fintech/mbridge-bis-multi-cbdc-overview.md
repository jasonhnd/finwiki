---
source: fintech/mbridge-bis-multi-cbdc-overview
source_hash: 66660eff115d0322
lang: en
status: machine
fidelity: ok
title: "mBridge · BIS Multi-CBDC Cross-Border Payment Bridge (Overview)"
translated_at: 2026-05-31T11:13:44.922Z
---

# mBridge · BIS Multi-CBDC Cross-Border Payment Bridge (Overview)

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> mBridge is a wholesale CBDC network that directly settles between central banks. It is based on HotStuff BFT + DLT permissioned ledger, bypasses SWIFT + Fedwire, and performs point-to-point PvP atomic settlements in each country's local currency CBDC. The withdrawal of BIS from 2025-10  freed China-led freedom, forming a bipolar structure with the 3-yen MRA-US dollar system.

## Key facts

- 2021 年に BIS Innovation Hub + PBoC + HKMA + BoT + CBUAE が共同で孵化 ^[extracted]
- 2024-06  Expanded to 5  central bank by joining Saudi SAMA · 2024 MVP stage ^[extracted]
- 2025-10 BIS withdraws from operations due to "geopolitical risks" ^[extracted]
- Consensus is HotStuff BFT · Central banks 100% Validators · Commercial banks are sub-participants ^[extracted]
- Payment model is PvP (Payment-versus-Payment) atomic · Testnet < 10  seconds ^[extracted]
- Total GDP of covered countries approx. 35% ^[extracted]
- 2030 Estimated processing volume $35-75B/year · Equivalent to SWIFT cross-border 0.5-1% ^[extracted]

## Mechanism / How it works

Each central bank operates an mBridge validator node 1  + its own CBDC ledger, and shares the mBridge ledger to perform cross-currency payments. The PvP model ensures that 2 件's CBDC transfers are simultaneous successes or simultaneous rollbacks, eliminating Herstatt risk. Commercial banks are connected via each country's central bank as sub-participants -- there are no private nodes. HotStuff BFT provides < 10  seconds finality, contrasted with SWIFT MT cross-border 1-3  days. The withdrawal of BIS (2025-10) has rather freed China's PBoC to lead the protocol — with the BIS neutrality constraint removed, mBridge can more aggressively expand into the BRICS+ currency and commodity trade scenario. See [[fintech/cross-border-sc-via-swift-api|クロスボーダー SC via SWIFT API]] for comparison with SWIFT API channel.

## Origin & evolution

2021 年に BIS Innovation Hub Hong Kong Centre 始動 · PBoC / HKMA / BoT / CBUAE の 4 中央銀行と連携。2022-2023 年 PoC 段階でクロス通貨実験を完了。2024-06 サウジ SAMA 加入 · 5 中銀へ拡大。2024 年 MVP 商用可能段階に入り、Aramco 石油決済(詳細は [[fintech/sovereign-capital-pool-aramco-anchor|Aramco 主権資金プール・アンカー]])/ 中-ブラジル大豆貿易 / 中-アラブ金引渡に接続テストを実施。2025-10 BIS 運営撤退 —— 表向きは「地政学的リスク」、実質は米国/G7 政治圧力 + 中国主導の発言権過大。2026-Q2 ブラジル BCB DREX との相互運用性テスト → 大陸跨ぎの非米ドル決済閉ループが形成、詳細規模は [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge 非米ドル決済リング規模]] を参照。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agora · BIS 同年切替対比]]
- [[fintech/mbridge-six-central-banks-roster|mBridge 6 中央銀行リストと役割]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
- [[fintech/jurisdiction-list-monetary-protectionism|司法管轄区リスト = 貨幣保護主義]]
<!-- /wiki-links:managed -->

## Sources
