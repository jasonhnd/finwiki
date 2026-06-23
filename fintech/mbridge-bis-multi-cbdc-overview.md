---
title: mBridge · BIS マルチ CBDC クロスボーダー決済ブリッジ(概要)
aliases: [mbridge-bis-multi-cbdc-overview, mbridge, m-bridge, multi-cbdc-bridge, BIS multi-CBDC platform]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-06-23
review_by: 2026-09-21
confidence: likely
tags: [fintech, cbdc, bridge, mbridge, bis, china, brics, non-dollar]
sources:
  - https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm
  - https://www.bis.org/publ/othp59.htm
  - https://www.hkma.gov.hk/eng/news-and-media/press-releases/2024/06/20240605-4/
  - https://www.pbc.gov.cn/en/3688110/3688172/4437084/index.html
  - https://www.bis.org/about/bisih/locations/hong_kong_sar.htm
status: active
---

# mBridge · BIS マルチ CBDC クロスボーダー決済ブリッジ(概要)

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> mBridge は中央銀行間で直接決済するホールセール型 CBDC ネットワークで、HotStuff BFT + DLT permissioned ledger をベースとし、SWIFT + Fedwire を迂回して各国自国通貨 CBDC でポイントツーポイントの PvP atomic settlement を行う。2025-10 の BIS 撤退により中国主導の自由度が解放され、三円 MRA 米ドル体系と二極構造を形成。

## Key facts

- 2021 年に BIS Innovation Hub + PBoC + HKMA + BoT + CBUAE が共同で孵化 ^[extracted]
- 2024-06 サウジ SAMA 加入で 5 中銀に拡大 · 2024 MVP 段階 ^[extracted]
- 2025-10 BIS は「地政学的リスク」を理由に運営から撤退 ^[extracted]
- コンセンサスは HotStuff BFT · 中央銀行 100% バリデーター · 商業銀行は sub-participants ^[extracted]
- 決済モデルは PvP(Payment-versus-Payment)atomic · テストネット < 10 秒 ^[extracted]
- カバー国 GDP 合計約 35% ^[extracted]
- 2030 予測処理量 $35-75B/年 · SWIFT クロスボーダーの 0.5-1% に相当 ^[extracted]

## Mechanism / How it works

各中央銀行は mBridge バリデーターノード 1 つ + 自国 CBDC ledger を運営し、mBridge ledger を共有してクロス通貨決済を行う。PvP モデルにより、2 件の CBDC 送金が同時成功または同時ロールバックすることが保証され、Herstatt risk(時差決済リスク)が排除される。商業銀行は sub-participants として各国中央銀行経由で接続 —— プライベートノードは存在しない。HotStuff BFT は < 10 秒 finality を提供し、SWIFT MT クロスボーダーの 1-3 日と対照される。BIS 撤退(2025-10)はむしろ中国 PBoC が同プロトコルを主導する自由度を解放した —— BIS の中立性制約がなくなったため、mBridge は BRICS+ 通貨と商品貿易シナリオへの拡大をより積極的に進められる。SWIFT API チャネルとの対比は [[fintech/cross-border-sc-via-swift-api|クロスボーダー SC via SWIFT API]] を参照。

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
