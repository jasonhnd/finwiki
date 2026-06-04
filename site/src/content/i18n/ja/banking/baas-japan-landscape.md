---
source: banking/baas-japan-landscape
source_hash: 59004eaed7a6ecaf
lang: ja
status: machine
fidelity: ok
title: "日本の BaaS の全体像"
translated_at: 2026-06-02T11:47:37.263Z
---

# 日本の BaaS の全体像

## ウィキ上の位置づけ

本項目は [[banking/INDEX|banking index]] の下に位置する。ピア / 対比の文脈については [[banking/minna-bank-baas-model|みんなの銀行 BaaS model]]、より広いシステム / 規制境界については [[banking/cooperative-banking-japan|Cooperative banking in Japan]] と対照して読むこと。

## 要約

日本の BaaS は、単一の「銀行 API 商品」ではない。少なくとも 4 類型に分かれる: API 提供、パートナー支店、銀行代理 / white-label 的な口座獲得、そして決済・口座振替・即時入金に特化した narrow BaaS。[[banking/minna-bank-baas-model|みんなの銀行]] は B2C アプリへの埋め込み型 BaaS、[[payment-firms/gmo-aozora-net|GMO あおぞらネット銀行]] は法人 / API / 組込金融寄り、[[regional-banks/ssnb|住信SBIネット銀行]] は NEOBANK 型で比較される。

## 全体像のマップ

| 類型 | 埋め込まれるもの | 主な価値 | 代表的な例 |
|---|---|---|---|
| API 提供型バンキング | 口座情報、口座振替、決済指図 | 外部アプリの UX 改善 | みんなの銀行 API提供モデル, [[banking/quick-deposit-four-methods|OAuth quick deposit]] |
| パートナー支店 | ブランド付き支店 / 口座体験 | パートナーブランド + 銀行リレーション | [[banking/mercari-bank|Mercari Bank]], pixiv 支店, DMM 支店 |
| NEOBANK / white-label 銀行 | パートナーの訴求のもとで開設される銀行口座 | より完全な組込バンキング | [[regional-banks/ssnb|SSNB]] / NEOBANK 型モデル |
| 法人 API 銀行 | 法人口座、決済、振替、会計連携 | 中小企業 / SaaS / プラットフォーム運営 | [[payment-firms/gmo-aozora-net|GMO Aozora Net Bank]] 隣接領域 |

## 戦略的な読み解き

BaaS は銀行にとっては顧客獲得戦略であり、プラットフォームにとってはライセンス・レバレッジ戦略である。銀行は高頻度の非銀行アプリを通じて販路を得る;プラットフォームは預金受入銀行になることなく銀行機能を獲得する。

日本特有の制約は、UX と法的地位が一体で動かないことにある。ユーザーは、マーケットプレイス、証券アプリ、リテールアプリが銀行になったように感じても、実際のバンキング層はライセンスを持つ銀行に留まっている。フロントエンドのブランド、API コネクター、決済ライセンス、預金契約はすべて異なる主体に属しうる。

## みんなの銀行が重要な理由

みんなの銀行は、BaaS を公に「+金融」として位置づけ、API提供モデルとパートナー支店モデルを分離している点で、明快なケースである。その提携先一覧は、BaaS が純粋な金融を超えて、クリエイティブ・マーケットプレイス、人事、リテール、保険、FX、エンターテインメント、C2C コマースへと広がっていることも示している。

2025-12 のメルカリのローンチは、メルカリが大きなウォレット / 売上金のコンテキストを持つため、とりわけ重要である。BaaS が低摩擦で非銀行残高を銀行預金に転換できれば、BaaS は単なる紹介チャネル以上のものになる。

## 規制・運用上の制約

| 制約 | 意味 |
|---|---|
| 銀行免許 | 預金受入および銀行口座の運営はライセンスを持つ銀行に留まる |
| 電子決済代行業 | API ベースの口座情報および決済指図には登録が必要となる場合がある |
| 資金移動 / 前払式支払手段 | ウォレット残高および決済フローは預金銀行の外に置かれうる |
| AML / 不正監視 | 組込 UX は銀行水準の監視義務を取り除くものではない |
| 責任境界 | ユーザーに見えるブランドと、規制対象のサービス提供者は異なりうる |

## 関連項目

- [[banking/minna-bank-baas-model]]
- [[banking/mercari-bank]]
- [[banking/mercari-bank-license-stack]]
- [[banking/quick-deposit-four-methods]]
- [[payment-firms/gmo-aozora-net]]
- [[regional-banks/ssnb]]
- [[fintech/japan-financial-regulation]]

## 出典

- みんなの銀行: みんなのBaaS 公式サービスページ。
- FFG IR Day, 2025-09-08: みんなの銀行の事業戦略。
- みんなの銀行: 提携サービス / BaaS 概要。
- 金融庁: 免許・許可・登録等を受けている事業者一覧。
