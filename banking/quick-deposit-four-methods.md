---
title: クイック入金の4方式分解フレーム
aliases: []
domain: banking
kind: knowledge
topic: quick-deposit-four-methods
created: 2026-04-20
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2026-10-27
confidence: certain
tags: [banking, fintech, crypto-exchange, oauth, payment-ux, integration]
status: confirmed
sources:
  - https://www.fsa.go.jp/common/shinsei/dendai/01.pdf
  - https://www.fsa.go.jp/common/about/pamphlet/dendaigyo_start.pdf
evidence_count: 2
type: wiki
---

# クイック入金の4方式分解フレーム


## Wiki route

This entry sits under [[banking/INDEX|banking index]]. Read it against [[banking/regional-bank-consolidation-pattern|Regional bank consolidation pattern]] for peer / contrast context and [[banking/cooperative-banking-japan|Cooperative banking in Japan]] for the broader system / regulatory boundary.

> [!info] TL;DR
> 「即時入金の UX を決めるのは、裏側の銀行接続方式である」

## 核心命題

日本の即時入金（クイック入金）は、画面上の名称だけでは法的・技術的な接続方式を判定できない。本ページの4分類は、公開資料を確認するための**分析フレーム**であり、金融庁が定めた公式分類や、個別サービスの現行仕様一覧ではない。

## 4方式の比較

| 分析上の方式 | 公開資料で確認する事項 | 認証・責任分界の確認先 | このフレームで断定しない事項 |
|---|---|---|---|
| 銀行サイト遷移型 | 遷移先、振込指図主体、銀行との契約関係 | 銀行・事業者の利用規約と認証説明 | OTP の有無や回数 |
| API 口座連携型 | 参照系 / 更新系の別、同意画面、登録・契約主体 | 金融庁の電子決済等代行業者登録一覧、銀行 API 仕様、当事者発表 | OAuth 採用だけを理由とする「最小負荷」評価 |
| 収納 / Pay-easy 型 | 収納機関番号、払込番号、入金反映条件 | 収納機関・銀行・事業者の現行手順 | すべての事業者に共通する認証回数 |
| 決済代行経由型 | 代行事業者、接続銀行、資金・情報の流れ | 代行事業者と導入企業の契約・サービス仕様 | 中間事業者の存在だけを理由とする UX 優劣 |

Sources: ^[金融庁「電子決済等代行業者の登録申請時の留意事項等」https://www.fsa.go.jp/common/shinsei/dendai/01.pdf; 金融庁「電子決済等代行業制度の概要」https://www.fsa.go.jp/common/about/pamphlet/dendaigyo_start.pdf.]

## 方式選択の論点

### 事業者側の観点

- 接続方式だけでなく、登録要否、銀行との契約、認証方式、資金移動の法的主体を個別に確認する。
- 導入コストや認証負荷は各社仕様に依存するため、方式名だけで順位付けしない。
- API を用いる場合も、参照系と更新系を分け、利用者同意と認証の実装を確認する。

### ユーザ側の観点

- 認証回数、画面遷移、入金反映時間、取消・誤操作時の責任分界を現行手順で確認する。
- 銀行明細の表示名と、事業者側の入金履歴が照合できるかを確認する。

### 入金後の利用制限

暗号資産交換業者などが設ける入金後の送付・出金制限は、事業者の現行規約とリスク管理により異なる。接続方式だけから制限日数や緩和可否を推定せず、対象事業者の公式案内を確認する。

## 電子決済等代行業登録の意味

- 2017 年銀行法改正で新設
- 登録要否は、銀行法上の電子決済等代行業に該当する行為を誰が行うかで判断される。
- API や OAuth という技術名称だけでは登録要否を確定できない。
- 個別事業者の登録状況は金融庁の現行登録一覧で確認する。

## 参照系 API と 更新系 API

| 区分 | 金融庁資料上の代表的な行為 | 個別確認が必要な事項 |
|---|---|---|
| 参照系（銀行法第2条第21項第2号の類型） | 口座情報を取得し、利用者に提供する | 対象情報、同意、認証、保存期間 |
| 更新系（同項第1号の類型） | 利用者の委託を受け、銀行に為替取引の指図を伝達する | 指図主体、認証、取消、責任分界 |

Sources: ^[金融庁「電子決済等代行業者の登録申請時の留意事項等」https://www.fsa.go.jp/common/shinsei/dendai/01.pdf.]

参照系と更新系は法的な行為類型が異なるため、一方の導入から他方の提供を当然には推定しない。

## 適用ケース

- **暗号資産交換業者の入金導線設計** — 現状が方式 1/3 なら、方式 2 への昇格が第一の UX 改善候補
- **Fintech スタートアップの銀行連携選定** — 方式 2 の電代業登録ハードルと UX 向上を天秤に掛ける
- **銀行側 BaaS 事業の戦略設計** — 方式 2 を提供する銀行は「事業者との関係構造」そのものが差別化要素
- **社内戦略検討資料の現状分析セクション** — 「我々は今どの方式で動いているのか」の問いを立てる際のフレーム

## 関連

- [[banking/minna-bank-baas-model|minna-bank-baas-model]] — みんなの銀行 BaaS の 2 モデル（API 提供型 × パートナー支店型）の枠組み
- [[fintech/japan-financial-regulation|japan-financial-regulation]] — 電代業登録の法的根拠（資金決済法/銀行法）
- [[banking/mercari-bank-license-stack|mercari-bank-license-stack]] — 電代業を含むライセンス階段の具体例

来源: 公開情報整理 (各 BaaS 提供銀行公式サイト・FSA 電代業登録一覧・全国銀行協会発表資料)

## Sources

- 金融庁「電子決済等代行業者の登録申請時の留意事項等」（2017年銀行法改正による登録制の導入・銀行法第2条第21項第1号 為替指図/更新系 と 第2号 口座情報取得/参照系 の区別） — https://www.fsa.go.jp/common/shinsei/dendai/01.pdf
- 金融庁「電子決済等代行業制度の概要」パンフレット（制度趣旨・オープンイノベーション） — https://www.fsa.go.jp/common/about/pamphlet/dendaigyo_start.pdf

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[banking/minna-bank-baas-model|みんなの銀行 BaaS モデル]]
- [[banking/mercari-bank-license-stack|メルカリバンクのライセンス三層構造]]
<!-- /wiki-links:managed -->
