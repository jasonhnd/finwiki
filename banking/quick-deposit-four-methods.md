---
title: クイック入金の4方式分解フレーム
aliases: []
domain: banking
kind: knowledge
topic: quick-deposit-four-methods
created: 2026-04-20
last_updated: 2026-05-18
last_tended: 2026-05-05
review_by: 2026-10-30
confidence: certain
tags: [banking, fintech, crypto-exchange, oauth, payment-ux, integration]
status: confirmed
sources: []
evidence_count: 2
type: wiki
---

# クイック入金の4方式分解フレーム


## Wiki route

This entry sits under [[banking/INDEX|banking index]]. Read it against [[banking/regional-bank-consolidation-pattern|Regional bank consolidation pattern]] for peer / contrast context and [[banking/cooperative-banking-japan|Cooperative banking in Japan]] for the broader system / regulatory boundary.

> [!info] TL;DR
> 「即時入金の UX を決めるのは、裏側の銀行接続方式である」

## 核心命題

日本の即時入金（クイック入金）は見た目似ているが、**契約前提・認証負荷・責任分界が全く異なる 4 方式**に分解できる。導入企業の現状診断と UX 改善提案には、この分類が必須。

## 4方式の比較

| 方式 | 契約前提 | 初回認証 | 都度認証 | UX負荷 | 代表事例 |
|------|---------|---------|---------|--------|---------|
| **1. 銀行ログイン型** | 事業者 × 銀行（収納機関ではない） | なし | 毎回ログイン+OTP | 高 | 楽天証券、SBIネット銀行 |
| **2. 口座連携型（OAuth）** | 事業者 × 銀行（電代業登録要） | OAuth同意 | **不要** | **最小** | **大和コネクト証券×みんなの銀行**、メルペイ×住信SBI、Revolut×みんなの銀行 |
| **3. Pay-easy/MPN型** | 事業者 × 収納機関番号 | なし | 毎回ログイン+3番号 | 高 | Coincheck、GMOコイン、SBI VCトレード |
| **4. 決済代行経由型** | 事業者 × 決済代行 × 銀行 | なし | 毎回ログイン | 中 | GMO-PG「PGマルチペイメントサービス」 |

## 方式選択の論点

### 事業者側の観点

- **認証負荷の構造的削減** → 方式 2（OAuth）がほぼ一択
- **初期投資の軽さ** → 方式 3（Pay-easy）が低い（電代業登録不要）
- **決済代行依存の回避** → 方式 1 or 2（方式 4 は中間業者依存）
- **口座シェア獲得の正式関係** → 方式 2（OAuth トークンは継続関係の実装）

### ユーザ側の観点

- **初回のみ認証・以降はワンタップ** → 方式 2 のみ
- **銀行ブランドへの信頼感** → 方式 1 / 3 でも担保される
- **明細の透明性** → どの方式でも銀行側明細に記録

### 副産物：Pay-easy 7日送金制限

方式 3（Pay-easy）を使う多くの暗号資産事業者が、入金後 **7日間、外部送金を制限** している（マネロン対策）。
方式 2（OAuth）に切り替えると、この制限の緩和が可能な場合がある。**UX 上の大きな差分**。

## 電子決済等代行業登録の意味

- 2017 年銀行法改正で新設
- **方式 2（口座連携型）を本格提供する場合、事業者側の電代業登録が通常必要**
- 方式 1 / 3 / 4 は電代業登録なしで運用可能（銀行側ネットバンキングに依存）
- **電代業登録 = 「銀行API の更新系を叩ける業者資格」の事実上の閾値**

## 参照系 API と 更新系 API

| 区分 | 参照系 | 更新系 |
|------|-------|-------|
| 操作 | 残高照会・取引明細 | 振込・振替 |
| 用途 | 事業者アプリで銀行残高表示 | クイック入金の基盤 |
| 認証 | OAuth 2.0 | OAuth + 電子署名 |

方式 2 を採用すると、**参照系 API 同時提供の余地が生まれ、「事業者アプリ内に銀行残高統合表示」という UX 進化が可能**になる。

## 適用ケース

- **暗号資産交換業者の入金導線設計** — 現状が方式 1/3 なら、方式 2 への昇格が第一の UX 改善候補
- **Fintech スタートアップの銀行連携選定** — 方式 2 の電代業登録ハードルと UX 向上を天秤に掛ける
- **銀行側 BaaS 事業の戦略設計** — 方式 2 を提供する銀行は「事業者との関係構造」そのものが差別化要素
- **社内戦略検討資料の現状分析セクション** — 「我々は今どの方式で動いているのか」の問いを立てる際のフレーム

## 関連

- [[banking/minna-bank-baas-model|minna-bank-baas-model]] — みんなの銀行 BaaS の 2 モデル（API 提供型 × パートナー支店型）の枠組み
- [[fintech/japan-financial-regulation|japan-financial-regulation]] — 電代業登録の法的根拠（資金決済法/銀行法）
- [[banking/mercari-bank-license-stack|mercari-bank-license-stack]] — 電代業を含むライセンス階段の具体例

来源: specific deal case research notes

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[banking/minna-bank-baas-model|みんなの銀行 BaaS モデル]]
- [[banking/mercari-bank-license-stack|メルカリバンクのライセンス三層構造]]
<!-- /wiki-links:managed -->
