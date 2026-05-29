---
title: "みんなの銀行 BaaS model"
aliases:
  - "minna-bank-baas-model"
  - "みんなの銀行 BaaS モデル"
  - "Minna Bank BaaS"
domain: "banking"
kind: knowledge
created: 2026-04-18
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2026-11-15
confidence: likely
tags: [banking, baas, embedded-finance, minna-bank]
status: active
sources:
  - "https://baas.minna-no-ginko.com/"
  - "https://baas.minna-no-ginko.com/service/branches/"
  - "https://www.minna-no-ginko.com/alliance-service/"
  - "https://www.fukuoka-fg.com/investorimage/data/20250908_irday_2.pdf"
  - "https://corporate.minna-no-ginko.com/common/pdf/news/2025/12/18/newsrelease_media_1218_01.pdf"
---

# みんなの銀行 BaaS model

## Wiki route

This entry sits under [[banking/INDEX|banking index]]. Read it against [[banking/mercari-bank-license-stack|メルカリバンク license stack]] for peer / contrast context and [[banking/cooperative-banking-japan|Cooperative banking in Japan]] for the broader system / regulatory boundary.

## TL;DR

みんなの銀行の BaaS は、銀行機能を外部アプリへ埋め込む **API提供モデル** と、パートナー企業のブランドを持つ **パートナー支店モデル** の組み合わせで動く。重要なのは、差分が「銀行ライセンスの有無」ではなく、ユーザー接点・ブランド・API連携の深さにある点。[[banking/mercari-bank|Mercari Bank]] は、メルカリの強い生活導線にこの BaaS を載せた代表例。

## Model map

| Model | What changes | User experience | Representative links |
|---|---|---|---|
| API提供モデル | Partner app connects to Minna Bank functions through APIs | Bank account / payment / balance functions appear inside the partner service | [[banking/quick-deposit-four-methods|Quick deposit four methods]], [[banking/mercari-bank-license-stack|Mercari Bank license stack]] |
| パートナー支店モデル | A branch with partner branding is created inside Minna Bank's banking structure | The partner's users see a branded banking front, such as メルカリ支店 | [[banking/mercari-bank|Mercari Bank]], pixiv / DMM / ignica / and ST cases |
| Hybrid | Partner branch plus API integration | Branded branch + seamless fund movement / account information inside the partner app | Mercari / Merpay × Minna Bank |

## Strategic read

みんなの銀行の BaaS は、ネット銀行の「口座獲得」を自社アプリ単独ではなく、非金融サービスの顧客基盤へ外部化する戦略。FFG / みんなの銀行側の資料では、BaaS パートナー経由の口座獲得を増やし、B2C 口座と BaaS 口座の比率を将来的に反転させる方向性が示されている。

このモデルの強みは、銀行が単に API を売るのではなく、パートナー企業の生活接点を銀行接点に変換する点にある。メルカリなら売上金、外為どっとコムなら入金、イグニカなら買い物、pixiv ならクリエイター決済というように、既存の利用文脈に銀行機能を差し込む。

## License boundary

「BaaS partner = 銀行業者」ではない。預金口座・銀行機能の主体はみんなの銀行であり、パートナー側は API 接続、電子決済等代行業、資金移動業、前払式支払手段、銀行代理業など、提供機能に応じた別のライセンス境界を持つ。

そのため、BaaS の設計で見るべき軸は次の 3 つ。

| Axis | Question |
|---|---|
| Account | 誰が預金契約の主体か |
| Instruction | 誰が資金移動や口座操作の指図を受けるか |
| Interface | どのアプリ / ブランドがユーザー接点になるか |

## Mercari case

[[banking/mercari-bank|メルカリバンク]] は、みんなの銀行口座をメルカリアプリからメルペイと API 連携して使うサービスとして開始された。売上金を即時かつ手数料無料でみんなの銀行普通預金口座に送れることが中核 UX で、みんなの銀行のパートナー支店「メルカリ支店」を使う。

ここでの要点は、メルペイが銀行になったわけではないこと。メルペイは電子決済等代行業者として、みんなの銀行との API 接続を通じて口座情報の表示や資金移動指図を扱う。

## Related

- [[banking/mercari-bank]]
- [[banking/mercari-bank-license-stack]]
- [[banking/baas-japan-landscape]]
- [[banking/quick-deposit-four-methods]]
- [[JapanFG/fukuoka-fg]]
- [[JapanFG/ssnb]]
- [[JapanFG/gmo-aozora-net]]

## Sources

- みんなの銀行: みんなのBaaS official service page.
- みんなの銀行: パートナー支店モデル official page.
- みんなの銀行: 提携サービス / BaaS overview.
- FFG IR Day, 2025-09-08: みんなの銀行の事業戦略.
- みんなの銀行 / メルペイ, 2025-12-18: メルカリバンク service launch release.
