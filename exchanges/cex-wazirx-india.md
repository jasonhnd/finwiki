---
title: WazirX — インド CEX / 2024-07 Liminal hack ~$235M 被害
aliases:
  - WazirX
  - Zanmai Labs
  - वज़ीरएक्स
domain: exchanges
slug: cex-wazirx-india
created: 2026-05-25
last_updated: 2026-05-25
last_tended: 2026-05-25
review_by: 2027-05-25
confidence: likely
tags:
  - exchanges
  - cex
  - india
  - inr-spot
  - liminal-hack
  - binance
  - restructuring
status: borderline
sources:
  - 公開情報整理 (WazirX 公式 IR / About / Hack response, wazirx.com)
  - 公開情報整理 (Binance 2019-11 WazirX 買収発表 / 2023 dissociation 公式声明, binance.com Blog)
  - 公開情報整理 (FIU-IND 2024-03 Show Cause Notice 公開情報)
  - 公開情報整理 (Liminal Custody 2024-07 multi-sig wallet incident 公式声明)
  - 公開情報整理 (Zettai Pte. Ltd. シンガポール High Court Moratorium / Scheme of Arrangement 公開資料)
  - 公開情報整理 (WazirX restructuring proposal 2024-10 / 2025 報道 Reuters / CoinDesk / The Block)
---

# WazirX — インド CEX / 2024-07 Liminal hack ~$235M 被害 overview

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/cex-coindcx-india|CoinDCX]] for the closest India peer / contrast context, [[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus hack]] for parallel North Korean attribution pattern, and [[exchanges/global-crypto-exchange-bankruptcy-comparison|グローバル CEX 破綻比較]] for the restructuring / scheme-of-arrangement framework.

> 2018-03 設立 · インド INR spot 旧最大手 · Binance 2019-11 買収 → 2023 dissociation 公開対立 · **2024-07-18 Liminal hot wallet hack ~$235M（インド史上最大の暗号資産流出）** · シンガポール Scheme of Arrangement で restructuring 進行中

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
- 2024-07 Liminal hack 以降、restructuring プロセス下で株主構造が再編対象に

## 2. 登録・牌照状況（インド制度）

- **FIU-IND PMLA reporting entity**：登録済（2024 年期）
- **2024-03 FIU-IND Show Cause Notice**：インド居住者向けにサービス提供する **9 つの offshore CEX**（Binance, Kucoin, OKX, MEXC 等）と並んで WazirX も対象に含まれ、PMLA コンプライアンス審査を受けた経緯
- **1% TDS / 30% capital gains**：[[exchanges/cex-coindcx-india|CoinDCX]] 同様に課税義務遵守
- **シンガポール側**：Zettai Pte. Ltd. として **Singapore High Court** に Moratorium 申請（2024-08）→ **Scheme of Arrangement** プロセス進行中

## 3. 取扱通貨

- INR spot 市場（2024-07 hack 前は印度市場最大手の 1 つ）
- 取扱銘柄数：250+（hack 前ピーク時）
- USDT market 併設
- **2024-07 hack 後**：引出停止 → 部分再開 → 各種ペア取引制限の状態が継続

## 4. 業務範囲

- 現物 spot 取引（INR / USDT pair）
- P2P 取引（インド国内ユーザー向け）
- staking：限定的
- 法定通貨入金：インド国内銀行口座経由（IMPS / UPI / NEFT、銀行側姿勢により制限あり）
- **2024-07 hack 以降**：取引機能 / 入出金機能の段階的停止 / 部分再開、restructuring 完了まで normal operation 不可

## 5. 市占・取引高

- **インド spot 市場シェア**：2024-07 hack 以前は [[exchanges/cex-coindcx-india|CoinDCX]] と並ぶ二強の一角（インド市場 #1 とされる時期もあり）
- 2024-07 hack 以降：実質的に [[exchanges/cex-coindcx-india|CoinDCX]] に市場 #1 ポジションを譲渡
- ユーザー数：1,500 万人超（hack 前公表ベース）
- 24h volume：hack 前 $50–200M、hack 後は大幅縮小

## 6. 沿革・重大事件

| 時期 | 事項 |
|------|------|
| 2018-03 | WazirX 設立（Mumbai, Nischal Shetty 共同創業） |
| 2019-11 | **Binance による WazirX 買収発表**（取得範囲は後に争点化） |
| 2020-03 | インド最高裁 RBI サーキュラー違憲判決、業界再活性化 |
| 2021–2022 | インド市場最大手として急成長、ユーザー数 1,000 万人超 |
| 2022-07 | インド 1% TDS / 30% capital gains 課税施行、取引量縮小 |
| 2022-08 | Enforcement Directorate（ED）による $8M 関連口座凍結事案 |
| 2023 | **Binance / WazirX 公開対立** — Binance blog で operating entity 関係性を明示否認 |
| 2024-03 | FIU-IND Show Cause Notice 受領、PMLA コンプライアンス審査 |
| 2024-03 | FIU-IND PMLA reporting entity 登録完了 |
| **2024-07-18** | **Liminal custody multi-sig wallet を経由した hot wallet 攻撃で約 $235M 相当の暗号資産流出**。インド史上最大、グローバル top 5 級の流出事案 |
| 2024-07–08 | 引出停止、socialized loss モデルでの債務再構築方針発表 |
| 2024-08 | Zettai Pte. Ltd. が **Singapore High Court に Moratorium 申請** |
| 2024-10 | **Scheme of Arrangement** 提案、債権者投票プロセス開始 |
| 2025 | Scheme of Arrangement 承認 / 異議申立てプロセス継続、部分的 distribution 開始 |
| 2026 | restructuring 継続、normal operation 完全回復は未完了 |

## 7. 戦略動向

- **Liminal hack 原因論争**：WazirX 側は **Liminal Custody（[[exchanges/global-crypto-forensics-vendor-layer|crypto custody / forensics vendor layer]]）のマルチシグウォレットの問題** を主張。Liminal 側は **WazirX 側のキーマネジメントの問題** を主張。両社の公式声明が対立し、責任所在は完全には確定していない
- **北朝鮮 Lazarus グループ関与説**：流出資金の onchain フォレンジック（[[exchanges/global-crypto-forensics-vendor-layer|Chainalysis / Elliptic / TRM Labs]]）により Lazarus 関与が示唆された。[[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit hack]] と同じ攻撃パターン
- **socialized loss 提案**：流出資金を全顧客で按分負担する restructuring 案 → 顧客から強い反発、訴訟複数提起
- **Scheme of Arrangement**：シンガポール会社法下での債務再構築フレームワーク。インド国内債権者と offshore 構造の整合性が論点
- **Binance 関係**：dissociation 後も法的 / 経済的責任を Binance が負うかどうかが訴訟争点
- **規制対応**：FIU-IND / Singapore MAS / インド ED の複数当局との並列対応負担

## 8. 業界での位置付け

WazirX は **インド暗号通貨業界最大級のセキュリティ事故 ＋ クロスボーダー restructuring の象徴的事案** として、グローバル CEX レジリエンスの参照事例となった。[[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus hack]]（2025-02、$1.5B）に先立つ大規模 hack として、**custody provider のマルチシグ実装 / キーマネジメント / 攻撃検知** のベストプラクティス再評価の契機となった。

[[exchanges/global-crypto-exchange-bankruptcy-comparison|グローバル CEX 破綻比較]] の文脈では、**FTX 破綻型（fraud + co-mingling）** とは異なり、**hack 起因 ＋ クロスボーダー restructuring** という [[exchanges/coincheck-nem-hack-detailed-analysis|Coincheck]] / [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin]] 型に近い破綻パターン。ただしシンガポール法人を媒介する点で、純粋な国内事案ではなく **アジア跨境 restructuring** の典型例となる。

## Related

- [[exchanges/cex-coindcx-india]] — インド最大手 #1（市場ポジション移転先、最重要 cross-link）
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
- 公開情報整理 (FIU-IND 2024-03 Show Cause Notice 公開情報)
- 公開情報整理 (Liminal Custody 2024-07 multi-sig wallet incident 公式声明)
- 公開情報整理 (Zettai Pte. Ltd. シンガポール High Court Moratorium / Scheme of Arrangement 公開資料)
- 公開情報整理 (WazirX restructuring proposal 2024-10 / 2025 報道 Reuters / CoinDesk / The Block)
- 公開情報整理 (北朝鮮 Lazarus 関連 onchain forensics 分析 Chainalysis / Elliptic / TRM Labs 公開レポート)
- 公開情報整理 (India Enforcement Directorate WazirX 関連口座凍結 2022-08 報道)
