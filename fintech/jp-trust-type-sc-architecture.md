---
title: 日本信託型 SC 架構 —— 三型分化下的第 3 号 EPI 結構解剖
aliases: [信託型 SC, JP trust-type stablecoin, 第 3 号 EPI, trust-type EPI architecture]
domain: fintech
created: 2026-05-18
last_updated: 2026-07-30
last_tended: 2026-07-30
review_by: 2026-09-21
confidence: likely
tags: [fintech, stablecoin, japan, regulation, trust-banking, progmat, td]
status: active
sources:
  - https://www.fsa.go.jp/singi/kessaiseido_wg/siryou/20241121/1.pdf
  - https://www.fsa.go.jp/news/r7/sonota/20260522/20260522.html
  - https://www.fsa.go.jp/common/shinsei/dendai/dentori.html
  - https://elaws.e-gov.go.jp/document?lawid=421AC0000000059
  - https://elaws.e-gov.go.jp/document?lawid=418AC0000000108
  - https://elaws.e-gov.go.jp/document?lawid=416AC0000000154
  - https://progmat.co.jp/press/pdf/press231106_01.pdf
---

# 日本信託型 SC 架構


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/multi-megabank-consortium-governance|多巨行联合体治理 —— 复数 megabank 共同持有 fintech 基础设施的治理模式]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

> [!info] TL;DR
> 日本の資金決済法上、信託型 stablecoin は **第 3 号電子決済手段（特定信託受益権）**として扱われる。ただし、「第 3 号」であることだけから送金上限なし、全額現金、B2B 市場首位、または越境認可を導くことはできない。金融庁資料では、信託会社ルートと信託銀行ルートで送金上限の扱いが異なり、2026-06-01 施行の改正後は、裏付け資産の一部を所定の短期国債・定期預金で管理できる。^[source:FSA Payment Services WG material 2024-11-21; FSA 2026 implementing rules; Payment Services Act; Trust Act]

## 発行ルート比較（金融庁資料の範囲）

| 観点 | 第 1 号 EPI：第二種資金移動業者 | 第 3 号 EPI：信託会社 | 第 3 号 EPI：信託銀行 |
|---|---|---|---|
| 法的分類 | 第 1 号電子決済手段 | 特定信託受益権（第 3 号電子決済手段） | 特定信託受益権（第 3 号電子決済手段） |
| 参入形態 | 資金移動業登録。金融庁の比較資料は第二種を現実的な発行ルートとして例示 | 信託会社の免許または登録に加え、資金決済法上の事前届出 | 銀行業免許、兼営法上の認可および事前届出 |
| 資産保全 | 供託等。信託による保全の場合は安全資産による運用も可能 | 信託財産として管理。2026-06-01 以後、所定の要求払預金に加え、発行額の 50% を上限に一定の短期国債・中途解約可能な定期預金を組入可能 | 信託財産として管理。裏付け資産の現行範囲は左記と同じ |
| 送金上限 | 金融庁資料では 1 回 100 万円 | 原則 1 回 100 万円。100 万円超には業務実施計画の認可が必要 | 金融庁資料では上限なし |
| この表から言える範囲 | 発行ルートの規制比較 | 信託会社ルートの規制比較 | 信託銀行ルートの規制比較 |

Source note: [金融庁 資金決済制度等 WG 資料（2024-11-21、16 頁）](https://www.fsa.go.jp/singi/kessaiseido_wg/siryou/20241121/1.pdf)の発行主体・参入形態・資産保全・送金上限比較と、[2026 年施行規則の公布ページ](https://www.fsa.go.jp/news/r7/sonota/20260522/20260522.html)を使用した。後者は改正法・関連府令等が 2026-06-01 から施行・適用されたことを示す。

## 信託型について確認できる構造

**(a) 信託財産と償還**: 信託法 25 条は、受託者の破産手続開始が信託財産に属する財産へ及ぼす効果を制限する。一方、金融庁資料は、第 3 号 EPI の償還原資が信託財産であり、信託財産が減少すれば償還可能額も減少し得ると説明する。したがって、「倒産隔離」と「額面償還が無条件に保証されること」は分けて評価する必要がある。^[source:Trust Act Article 25; FSA Payment Services WG material]

**(b) 送金上限は発行ルート依存**: 第 3 号 EPI だから一律に上限がなくなるわけではない。金融庁の比較では、信託会社ルートは原則 100 万円で、超過には業務実施計画認可が必要である一方、信託銀行ルートは上限なしとされる。これだけでは、個別商品が大口 B2B 決済を提供していることや取引可能額を証明しない。

**(c) Progmat は基盤と個別発行計画を区別する**: 2023-11-06 の Progmat / Ginco / 三菱 UFJ 信託銀行の共同発表は、XJPY・XUSD の検討スキームについて、Ginco を発行依頼者、三菱 UFJ 信託銀行を発行者（受託者）、Progmat Coin をプラットフォームとして記載した。これは特定案件の計画資料であり、三大銀行が共同委託者であること、2024 年の発行目標が実現したこと、または現行市場シェアを証明しない。^[source:Progmat/Ginco/MUFG Trust joint release 2023-11-06]

## 越境利用の証拠境界

日本法上の第 3 号 EPI 該当性は、外国法域での発行・販売・仲介許可や、特定の相互承認 tier を自動的に与えない。本項目が引用する金融庁・e-Gov・Progmat 資料は、米国での認定、USDC との相互運用上の優位、または [[fintech/cross-border-sc-via-swift-api|Project Pax via SWIFT API]] が現行の主流ルートであることを確立しない。越境主張は、対象法域の現行法、発行者、仲介業者、ネットワークの各資料で別々に検証する。

## 商品・市場主張の確認マップ

| 主張 | 必要な確認先 | この項目の結論 |
|---|---|---|
| 法的分類・発行者資格 | 資金決済法、信託法、金融庁の現行府令・監督資料 | 第 1 号 / 第 3 号の分類と発行ルートを確認できる |
| 個別商品の発行・流通開始 | 発行者・受託者の発行条件、金融庁登録簿、取扱事業者の現行開示 | 過去の共同検討や目標日だけでは current/live と扱わない |
| 送金上限 | 発行ルート、業務実施計画認可、商品規約 | 「信託型」だけから一律の上限を推定しない |
| B2B / retail / cross-border の首位 | 比較可能な日付付き取引データと対象範囲 | 本項目の一次資料には市場順位データがないため首位を付さない |
| 外国法上の適格性 | 対象国の当局登録・認定と現地法人 | 日本の EPI 分類から推定しない |

Source note: legal-status claims should be checked against the [FSA EPI registration page](https://www.fsa.go.jp/common/shinsei/dendai/dentori.html), the current [Payment Services Act](https://elaws.e-gov.go.jp/document?lawid=421AC0000000059) and [Trust Act](https://elaws.e-gov.go.jp/document?lawid=418AC0000000108) on e-Gov, and the relevant issuer/trustee disclosure. The [2023 Progmat joint release](https://progmat.co.jp/press/pdf/press231106_01.pdf) is historical project evidence, not proof of present issuance or market leadership.

## 応用

- 「信託会社発行」と「信託銀行発行」の規制差を確認する
- 裏付け資産、償還、倒産隔離、送金上限を別々の検証軸にする
- [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]] の議論で、国内法上の発行資格と越境ネットワーク接続を混同しない
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関向け stablecoin / deposit-token architecture]] の仮説を、日本の個別商品データと照合するための法的ベースラインとして使う

---


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度三層構造]]
- [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]]
- [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関向け stablecoin / deposit-token architecture]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act の実施状況]]
<!-- /wiki-links:managed -->
