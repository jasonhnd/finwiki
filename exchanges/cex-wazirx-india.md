---
title: WazirX — インド CEX / 2024-07 cyberattack
aliases:
  - WazirX
  - Zanmai Labs
  - वज़ीरएक्स
domain: exchanges
slug: cex-wazirx-india
created: 2026-05-25
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
confidence: likely
tags:
  - exchanges
  - cex
  - india
  - inr-spot
  - liminal-hack
  - binance
  - restructuring
status: active
sources:
  - https://wazirx.com/blog/important-update-cyber-attack-incident-and-measures-to-protect-your-assets/
  - https://wazirx.com/blog/singapore-court-sanctions-wazirx-restructuring-scheme/
  - https://wazirx.com/blog/the-scheme-of-arrangement-is-now-effective/
  - https://wazirx.com/blog/wazirx-integrates-fireblocks-to-enhance-digital-asset-custody/
  - https://wazirx.com/blog/wazirx-cyber-attack-key-insights-and-learnings/
  - 公開情報整理 (WazirX 公式 IR / About / Hack response, wazirx.com)
  - 公開情報整理 (Binance 2019-11 WazirX 買収発表 / 2023 dissociation 公式声明, binance.com Blog)
  - 公開情報整理 (Liminal Custody 2024-07 multi-sig wallet incident 公式声明)
  - 公開情報整理 (Zettai Pte. Ltd. シンガポール High Court Moratorium / Scheme of Arrangement 公開資料)
  - 公開情報整理 (WazirX restructuring proposal 2024-10 / 2025 報道 Reuters / CoinDesk / The Block)
---

# WazirX — インド CEX / 2024-07 cyberattack overview

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/cex-coindcx-india|CoinDCX]] for the closest India peer / contrast context, [[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus hack]] for parallel North Korean attribution pattern, and [[exchanges/global-crypto-exchange-bankruptcy-comparison|グローバル CEX 破綻比較]] for the restructuring / scheme-of-arrangement framework.

> 2018-03 設立 · インド INR spot CEX · **2024-07-18 に 1 つの multisig wallet が攻撃され 2.3 億米ドル超が流出** · 改訂 Scheme of Arrangement は 2025-10-15 に発効

## 1. 法人・株主

- 商号：**Zanmai Labs Private Limited**（インド事業会社）
- 親会社：**Zettai Pte. Ltd.**（シンガポール法人、グループ持株）
- 設立：2018-03（Mumbai, India）
- 創業者：Nischal Shetty（CEO）, Sameer Mhatre（CTO）, Siddharth Menon（COO）
- 株主構成：
  - **Binance**：2019-11 WazirX 買収発表 — ただし両社間で買収範囲をめぐる **公開対立**（Binance: 「IP / app / トレードマークのみ取得、operating entity 未取得」）
  - **Tiger Global** 等：早期投資家
  - Nischal Shetty / 共同創業者：継続的株式保有
- **Binance 関係の特異性**：2023 年期に Binance が公式 blog で「Zanmai Labs は WazirX を Binance とは独立して運営している」と明確化 → 業界では事実上の **dissociation** と理解された

## 2. 登録・牌照状況（インド制度）

- **FIU-IND PMLA reporting entity**：登録済（2024 年期）
- **1% TDS / 30% capital gains**：[[exchanges/cex-coindcx-india|CoinDCX]] 同様に課税義務遵守
- **シンガポール側**：Singapore High Court が改訂 Scheme of Arrangement を 2025-10-13 に認可し、Scheme は 2025-10-15 に発効

## 3. 取扱通貨

- INR spot 市場
- 取扱銘柄は incident と restructuring の前後で変わるため、本項では固定件数を置かない
- USDT market 併設
- **2024-07 incident 後**：商品・入出金の提供状態は変更されてきたため、WazirX の現行告知で基準日を付して確認する

## 4. 業務範囲

- 現物 spot 取引（INR / USDT pair）
- P2P 取引（インド国内ユーザー向け）
- staking：限定的
- 法定通貨入金：インド国内銀行口座経由（IMPS / UPI / NEFT、銀行側姿勢により制限あり）
- **2024-07 incident 以降**：取引機能 / 入出金機能は段階的に変更された。2025-10 の Scheme 発効後の状態は公式告知で個別に確認する

## 5. 規模情報の読み方

- 市場シェア、24h volume、順位、利用者数は incident 前後の基準日とサービス状態で大きく変わるため、本項では固定値を採用しない
- [[exchanges/cex-coindcx-india|CoinDCX]] との比較では、同一期間・同一 INR market・同一商品範囲を揃える
- 2024-07 incident から他社への市場シェア移転や現在順位を推定しない

## 6. 沿革・重大事件

出典: 表全体は WazirX 公式の [cyberattack 発表](https://wazirx.com/blog/important-update-cyber-attack-incident-and-measures-to-protect-your-assets/)、[裁判所認可発表](https://wazirx.com/blog/singapore-court-sanctions-wazirx-restructuring-scheme/)、[Scheme 発効発表](https://wazirx.com/blog/the-scheme-of-arrangement-is-now-effective/)、[Fireblocks 統合発表](https://wazirx.com/blog/wazirx-integrates-fireblocks-to-enhance-digital-asset-custody/)（2026-07-29 確認）に基づく。

| 時期 | 事項 |
|------|------|
| 2024-07-18 | 1 つの multisig wallet を狙った cyberattack で 2.3 億米ドル超の暗号資産が流出し、入出金と取引を一時停止 |
| 2025-10-13 | Singapore High Court が改訂 Scheme of Arrangement を認可 |
| 2025-10-15 | 改訂 Scheme of Arrangement が発効 |
| 2026-01 | デジタル資産 custody 基盤として Fireblocks を統合 |

## 7. 戦略動向

- **Liminal hack 原因論争**：WazirX 側は **Liminal Custody（[[exchanges/global-crypto-forensics-vendor-layer|crypto custody / forensics vendor layer]]）のマルチシグウォレットの問題** を主張。Liminal 側は **WazirX 側のキーマネジメントの問題** を主張。両社の公式声明が対立し、責任所在は完全には確定していない
- **attribution の境界**：onchain フォレンジック各社の分析と、公的機関による最終的な帰属判断を区別する。[[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit hack]] との同一性は推定しない
- **債権者対応**：回収・分配条件は裁判所認可済 Scheme の文書と WazirX の公式告知で確認する
- **Scheme of Arrangement**：Singapore High Court が改訂 Scheme を 2025-10-13 に認可し、2025-10-15 に発効
- **Binance 関係**：過去の買収発表と運営主体をめぐる公開声明を区別し、本項から現在の法的・経済的責任を推定しない
- **custody 再構築**：WazirX は 2026-01 に Fireblocks 統合を発表した

## 8. 業界での位置付け

WazirX は、1 つの multisig wallet を狙った 2024-07 incident、Singapore High Court の Scheme、custody 基盤の再構築を時系列で検討できる CEX resilience の事例である。比較では、**custody provider のマルチシグ実装 / キーマネジメント / 攻撃検知** を分けて確認する。

[[exchanges/global-crypto-exchange-bankruptcy-comparison|グローバル CEX 破綻比較]] の文脈では、**FTX 破綻型（fraud + co-mingling）** とは異なり、**hack 起因 ＋ クロスボーダー restructuring** という [[exchanges/coincheck-nem-hack-detailed-analysis|Coincheck]] / [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin]] 型に近い破綻パターン。ただしシンガポール法人を媒介する点で、純粋な国内事案ではなく **アジア跨境 restructuring** の典型例となる。

## Related

- [[exchanges/cex-coindcx-india]] — インド CEX / FIU-IND 登録比較（最重要 cross-link）
- [[exchanges/bybit-lazarus-hack-detailed-analysis]] — Lazarus 攻撃パターン比較
- [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis]] — 同 Lazarus 攻撃パターン比較
- [[exchanges/coincheck-nem-hack-detailed-analysis]] — 日本同規模 hack 事案比較
- [[exchanges/global-crypto-exchange-bankruptcy-comparison]] — グローバル CEX 破綻比較
- [[exchanges/global-crypto-forensics-vendor-layer]] — Liminal / Chainalysis / Elliptic 層
- [[exchanges/global-cex-top10-comparison]] — グローバル CEX top 10
- [[exchanges/INDEX]] — 取引所ドメインインデックス

## Sources

- 公開情報整理 (WazirX 公式 IR / About / Hack response, wazirx.com)
- 公開情報整理 (Binance 2019-11 WazirX 買収発表 / 2023 dissociation 公式声明, binance.com Blog)
- 公開情報整理 (Liminal Custody 2024-07 multi-sig wallet incident 公式声明)
- 公開情報整理 (Zettai Pte. Ltd. シンガポール High Court Moratorium / Scheme of Arrangement 公開資料)
- 公開情報整理 (WazirX restructuring proposal 2024-10 / 2025 報道 Reuters / CoinDesk / The Block)
- 公開情報整理 (北朝鮮 Lazarus 関連 onchain forensics 分析 Chainalysis / Elliptic / TRM Labs 公開レポート)
- 公開情報整理 (India Enforcement Directorate WazirX 関連口座凍結 2022-08 報道)
