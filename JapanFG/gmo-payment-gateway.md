---
title: GMO ペイメントゲートウェイ
aliases: ["GMO-PG", "GMO Payment Gateway", "GMO ペイメントゲートウェイ", "3769"]
domain: JapanFG
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2026-11-15
confidence: likely
tags: [JapanFG, payment, fintech]
status: active
sources:
  - "Wikipedia: GMO ペイメントゲートウェイ (2026-05-19 抽出)"
  - GMO Payment Gateway 公式 IR (corp.gmo-pg.com, 2026-05-19 参照)
  - GMO インターネットグループ 有価証券報告書
---

# GMO ペイメントゲートウェイ


## Wiki route

This entry sits under [[JapanFG/INDEX|JapanFG index]]. Read it against [[JapanFG/famima-digital-one|ファミマデジタルワン (FamiMa Digital One)]] for peer / contrast context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system / regulatory boundary.

## TL;DR

国内最大級の決済代行 (PSP, Payment Service Provider)。EC 加盟店向けに Visa/Master/JCB/Amex 等のカード決済 + コンビニ決済 + 銀行振込 + 電子マネーをワンストップ提供。1995-03-25 「株式会社カードコマース」として設立、2000 改称、2005 東証マザーズ、2008 東証一部上場 (現 PRIME 3769)。GMO インターネットグループ連結子会社。三井住友カード ([[smfg]] 系) との戦略提携・アジア (ベトナム NextPay / 台湾 ECPay 等) 展開が中計の柱。^[extracted]

## 1. 公司结构

**正式名**:GMO ペイメントゲートウェイ株式会社 ^[extracted]
**英名**:GMO Payment Gateway, Inc.
**証券コード**:東証 PRIME 3769 ^[extracted]
**設立**:1995-03-25 (旧 株式会社カードコマース) ^[extracted]
**本社**:東京都渋谷区
**親会社**:[[business/gmo-internet-group|gmo-internet-group]] (連結子会社) ^[extracted]
**業態**:決済代行 (PSP, Payment Service Provider)

## 2. 业务线 map

| セグメント | 主要サービス | 特徴 |
|---|---|---|
| EC 決済代行 | クレカ (Visa/Master/JCB/Amex) + コンビニ決済 + 銀行振込 + 電子マネー | EC 加盟店 30 万店超 ^[ambiguous] |
| BtoB 決済 | 法人間請求書決済・後払い | 与信・回収一括代行 |
| 簡易決済 SDK | Pay.JP | 開発者向け・スタートアップ採用多い |
| 海外決済 | グローバル決済ゲートウェイ | Stripe / Adyen と競合 |
| アジア展開 | NextPay (ベトナム) / ECPay (台湾) / タイ | 出資・JV ベース |
| 周辺事業 | 金融サービス・送金・トランザクションレンディング | 加盟店データ活用融資 |

## 3. 重要历史

| 年月 | 事象 |
|---|---|
| 1995-03-25 | 株式会社カードコマース 設立 ^[extracted] |
| 2000 | GMO ペイメントゲートウェイ 改称 ^[extracted] |
| 2005 | 東証マザーズ 上場 ^[extracted] |
| 2008 | 東証一部 上場 ^[extracted] |
| 2010 年代 | EC ブームで急成長・加盟店急増 ^[inferred] |
| 2015〜 | 三井住友カード 戦略提携深化 ^[ambiguous] |
| 2010 年代後半〜 | アジア展開加速 (ベトナム・台湾・タイ) ^[ambiguous] |
| 2022 | 東証市場区分見直し → 東証 PRIME ^[inferred] |
| 2024〜 | 中期経営計画 (詳細は IR 参照) ^[ambiguous] |

## 4. 戦略与竞争

### 国内戦略

- **EC 加盟店ベース**:30 万店超 ^[ambiguous] の加盟店ネットワークが堀
- **三井住友カード 戦略提携**:[[smfg]] 系のカード会社との関係深化、SMBC GMO PAYMENT (SMBC との合弁) も展開 ^[ambiguous]
- **トランザクションレンディング**:加盟店の決済データを活用した融資 (BaaS 的展開) ^[inferred]
- **Pay.JP**:Stripe 対抗の開発者向け簡易決済 SDK

### 海外戦略

- **アジア集中**:ベトナム NextPay / 台湾 ECPay / タイ等への出資・JV
- ASEAN の EC 拡大に乗る形 ^[inferred]

### 競合マップ

| 競合 | 強み | 立ち位置 |
|---|---|---|
| SB ペイメントサービス | [[paypay-fg]] / SoftBank グループ・PayPay 連携 | 国内最大級、QR 決済親和性 |
| DG Financial Technology (旧 ベリトランス) | デジタルガレージ系・古参 PSP | EC 老舗加盟店 |
| SMBC GMO PAYMENT | SMBC × GMO-PG 合弁 | 銀行系チャネル |
| Stripe / Adyen | グローバル開発者ファースト | クロスボーダー EC |
| Square (Block) | POS + オンライン統合 | SMB 物販 |

## 5. 监管与政策

- **主管**:金融庁・経済産業省 (割賦販売法・資金決済法)
- **業態**:決済代行業 (登録制ではないが、加盟店契約・PCI DSS 準拠が実質的参入障壁)
- **規制論点**:
  - 2025〜 ステーブルコイン制度の導入で決済インフラ再編 ^[inferred]
  - 加盟店保護 (倒産時の預り金扱い・改正割販法対応) ^[inferred]
  - PCI DSS v4.0 移行 ^[inferred]

## 6. Counterpoints

- **「親会社 GMO インターネットグループ依存」**:連結子会社・グループブランド経由の信用補完 vs 独立性 ^[ambiguous]
- **「QR 決済波への対応」**:SB ペイメント (PayPay)・楽天ペイに対しカード決済軸の優位は維持可能か ^[inferred]
- **「アジア展開 ROI」**:NextPay / ECPay 等の出資効果は短期収益化困難 ^[inferred]
- **「Stripe / Adyen のクロスボーダー攻勢」**:グローバル SaaS 系 PSP の日本市場浸透リスク ^[inferred]
- **「SMBC GMO PAYMENT」二重展開**:本体 GMO-PG と合弁先 SMBC GMO PAYMENT との顧客カニバリ整理 ^[ambiguous]

## 7. Open questions

- 加盟店数 30 万店超の正確な内訳 (アクティブ vs 休眠) は?
- 2024 中計の数値目標 (売上・営業利益・海外比率) の詳細は?
- ステーブルコイン制度下での GMO-PG の位置付け (Progmat 等への対応) は?
- Stripe / Adyen との競合本格化シナリオは?
- 親会社 GMO インターネットグループとの株式持合・配当政策は?

## 8. Related

- [[smfg]] (三井住友カード 提携・SMBC GMO PAYMENT 合弁親)
- [[paypay-fg]] (SB ペイメントサービス 競合)
- [[jcb]] (カード国際ブランド)
- [[mufg]] (三菱 UFJ ニコス 経由カード業界)
- [[money-forward]] · [[freee]] (会計 SaaS 連携)
- [[paidy]] (後払い競合・補完)
- [[mercari-hd]] (EC 顧客層)

## Sources

- **Wikipedia: GMO ペイメントゲートウェイ** (https://ja.wikipedia.org/wiki/GMOペイメントゲートウェイ, 2026-05-19 抽出)
- **GMO Payment Gateway 公式 IR** (corp.gmo-pg.com, 2026-05-19 参照)
- GMO インターネットグループ 有価証券報告書 (連結子会社情報)

---

> [!info] 校核状态
> confidence: **likely** (公開情報ベース・2026-05-19 作成)。加盟店数・売上規模・アジア展開詳細は時点変動あり、最新は GMO-PG IR 四半期資料を要参照。設立年・上場履歴・親会社関係は公開情報で確定。
