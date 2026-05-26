---
title: mBridge 非米ドル決済リング規模パターン · wholesale settlement 上限としての GDP カバー率
aliases: [mbridge non-usd settlement ring scale, $35T mBridge coverage, GDP coverage non-dollar settlement, mBridge vs SWIFT]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [fintech, number, economic-pattern, mbridge, cbdc, non-usd-settlement, gdp-coverage, brics]
sources:
  - https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm
  - https://www.bis.org/publ/othp59.htm
  - https://www.swift.com/about-us/discover-swift/messaging-standards
  - https://data.worldbank.org/indicator/NY.GDP.MKTP.CD
  - https://www.imf.org/external/datamapper/NGDPD@WEO/OEMDC/ADVEC/WEOWORLD
status: candidate
---

# mBridge 非米ドル決済リング規模パターン · wholesale settlement 上限としての GDP カバー率


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> クロスボーダー決済リングの規模はフロー(SWIFT GPI 過去の日平均)で評価できず、**メンバー国 GDP カバー率**を理論的上限として用いる。mBridge は 2026 H2 にブラジル DREX が加入すると、6 か国メンバー GDP $23.3T + オブザーバー $11.7T = **$35T の影響範囲(グローバル GDP の 33%)**となる。これは非米ドル wholesale 清算の「理論的天井」:完全に成熟すれば、SWIFT を迂回してグローバル貿易の 1/3 を処理可能。**$35T と三円 MRA $130B は鏡像関係** —— ホワイトサークルは民間コンプラ・リテール/機関、グリーンサークルは中央銀行レベルの wholesale 清算で、2 つの規模、2 つのインフラ、相互に代替不可。

## Key facts

- mBridge 正式 6 か国メンバー:中国 + 香港 + タイ + UAE + サウジ(2025 加入)+ ブラジル(2026 H2 DREX)合計 GDP $23.3T ^[extracted]
- オブザーバー含む(インド / ロシア / 南アフリカ / イラン)$11.7T、総影響範囲 $35T = グローバル GDP の 33% ^[extracted]
- 2025-09 BIS が mBridge の商用運用段階入り(End of MVP)を発表、PoC から production にアップグレード ^[extracted]
- 実際の 2030 mBridge 日次取引額予測 $50-200B、ブラジル / インドの参加深度に依存 ^[inferred]
- SWIFT は現在 ~90% のグローバル貿易($95T / $105T)をカバー · mBridge 33% は構造的 ceiling ^[extracted]

## Mechanism / How it works

清算リング規模アンカーとしての GDP カバー率の論理:

```
従来のフロー評価:    SWIFT GPI 日平均 $5-7T → 年間清算量を推計
                  (既存チャネルの粘性に制約 · 新規チャネル評価が困難)

GDP カバー率評価:  メンバー国 GDP 合計 × クロスボーダー貿易比率(~30%) × 浸透率上限
                  = 理論的 wholesale 清算 ceiling
                  $35T × 30% × 30% = $3.15T 年間(成熟時)
```

mBridge は民間ステーブルコイン三円(詳細は [[fintech/three-circles-stablecoin-mra-framework|三円 MRA アーキテクチャ]] を参照)と区別される:中央銀行レベル RTGS の直接相互接続、wholesale only、USDC / USDT とリテール/DeFi 市場を奪い合うのではなく、SWIFT が独占する「クロスボーダー貿易決済」領域を奪取する。これにより**二層並列清算構造**が構成される —— 米ドル域は SWIFT/FedNow、非米ドル域は mBridge を経由。中央銀行 wholesale とリテール/機関 deposit token の階層関係は [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ概要]] を参照。

## Origin & evolution

mBridge は 2021 年に BIS Innovation Hub + 4 中央銀行(中国 / 香港 / タイ / UAE)で創設、2024-10 にサウジが正式加入(中東が金 BRICS 清算リングに加入することを示す · 詳細は [[fintech/sovereign-capital-pool-aramco-anchor|Aramco 主権資金プール・アンカー]] を参照)、2025-09 MVP 完了で商用運用に入り、2026 H2 ブラジル DREX 加入が重要な転機(初の非アジア/非中東大国 · 「地域実験」から「グローバル清算リング」へのアップグレード)。

## Counterpoints

$35T は上限推定であり実際の清算量ではない · 2030 年現実の清算量予測 $200-500B 年間。BIS 自身が 2024-11 に一度 mBridge ガバナンスから撤退表明(米側政治圧力) · プロジェクト・ガバナンス構造は未安定。e-CNY / DREX / Sarama 内部で「米ドル決済から完全脱却するか」の立場は不一致 —— 一部メンバーは SWIFT 接続の保持を希望。GDP カバー率 ≠ 実際の浸透率 · 商業銀行の wholesale CBDC 採用速度は国内規制ペースに大きく制約される。

## Open questions

mBridge 2030 実際の日次取引額 $50B vs $200B 区間の重要変数(インド・デジタル・ルピーが加入するか / ブラジル DREX の真の商用化程度)?BIS 2024-11 ガバナンス撤退後の引継ぎ主体(IMF / G20 / BRICS Pay 直接引継)?三円 MRA との潜在的ブリッジ・チャネル(USDC / EURC は mBridge 上で決済可能か)?Project Agora(BIS 西側版)と mBridge の長期役割分担?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA アーキテクチャ]]
- [[fintech/stablecoin-chain-sovereign-currency-divide|ステーブルコイン地政学通貨 5 極対立]]
- [[fintech/cross-border-sc-via-swift-api|クロスボーダー SC via SWIFT API]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]]
<!-- /wiki-links:managed -->

## Sources

- BIS Innovation Hub mBridge 公開報告 · 2025-09 商用運用発表
