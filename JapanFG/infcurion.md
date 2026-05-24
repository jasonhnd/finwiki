---
title: "インフキュリオン (Infcurion)"
aliases:
  - "Infcurion"
  - "インフキュリオン"
  - "Infcurion Inc."
  - "株式会社インフキュリオン"
domain: JapanFG
created: 2026-05-24
last_updated: 2026-05-24
last_tended: 2026-05-24
review_by: 2026-11-20
confidence: likely
tags: [JapanFG, fintech, payments, wallet, white-label, card-issuing, embedded-finance]
status: active
sources:
  - "https://infcurion.com/"
  - "https://infcurion.com/company/"
  - "https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html"
---

# インフキュリオン (Infcurion)

## Wiki route

This entry sits under the [[JapanFG/INDEX|JapanFG index]] as a **white-label fintech** vendor that sits one layer below the consumer-facing wallets. Read it together with the [[JapanFG/bnpl-landscape|Japan BNPL landscape]] for the BNPL-adjacent payment context, the [[JapanFG/dg-financial-technology|DG Financial Technology]] and [[JapanFG/famima-digital-one|FamiMa Digital One]] peers for white-label / merchant-side fintech comparators, and the [[payments/japan-bnpl-credit-purchase-boundary|BNPL and credit-purchase boundary]] for where issuer / acquirer license edges land. The [[payments/credit-purchase-card-operators-japan-index|METI credit-purchase registry]] and [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] are the registration and economics anchors.

## TL;DR

インフキュリオン は **white-label fintech 基盤** ベンダー。コンサルティング + プロセッシング + カード / ウォレット プロダクトを **企業向けに OEM 提供** することで、銀行 / 流通 / 通信 / 自治体が自社ブランドで決済サービスを立ち上げることを可能にする。コンシューマー BNPL ([[JapanFG/paidy|Paidy]] / [[JapanFG/net-protections-hd|Net Protections HD]]) や ウォレット ([[JapanFG/merpay|メルペイ]] / [[JapanFG/kyash|Kyash]] / [[JapanFG/smartbank|SmartBank]]) と異なり、表に出ない **裏方のプラットフォーマー** として fintech 残量に位置付けられる。

## 1. 法人・ライセンス境界

| Item | Reading |
|---|---|
| Legal entity | 株式会社インフキュリオン (Infcurion, Inc.) |
| Group | 独立 fintech 専業（プライベートカンパニー）|
| Main lanes | 決済コンサルティング / カード発行プロセッシング / ウォレット白ラベル提供 / EC 周辺決済 SaaS |
| 規制ルート | 直接の銀行業 / 資金移動業ライセンスは保有しない設計が中心。提携先の金融機関ライセンスを後背とする **embedded finance** モデル。^[inferred] |

## 2. Business role

- 銀行 / 流通 / 通信 / 自治体 が自社ブランドで「**ペイ**」「**カード**」「**ウォレット**」を出すための裏方として、プロセッシング・コンサル・プロダクト提供を行う。^[extracted]
- 直接の消費者ブランドではなく、**B2B2C 決済プラットフォーマー** として fintech のインフラ層に位置する。
- 既存銀行・カード会社の DX 案件 (BaaS / Card-as-a-Service) と並走することが多い。^[inferred]

## 3. Why this standalone page matters

[[JapanFG/freee|freee]] / [[JapanFG/money-forward|Money Forward]] のような SaaS と異なり、Infcurion は **エンドユーザー向けプロダクトを持たない fintech 基盤事業者** という JapanFG 上の独自カテゴリ。BNPL / ウォレット / 決済 PSP の各エコシステム横断で言及される common dependency を独立化して扱う必要がある。

## 4. 监管与政策

- **直接ライセンス保有 vs 提携モデル**: Infcurion 自身は金融業ライセンスを最小化し、提携先の銀行・カード会社・資金移動業者ライセンスを利用する設計が中核。^[inferred]
- **個人情報保護法**: B2B2C モデルゆえ、エンドユーザーデータの「データ主体は誰か」が契約上重要。
- **割賦販売法 / 資金決済法**: 提供先パートナーの登録要件に従う立て付け（自社直接登録は限定的）。
- **2025〜 embedded finance 議論**: 銀行法上の **電子決済等代行業** / API 開示義務との接続論点が継続。^[inferred]

## Counterpoints

- 「白ラベル fintech の収益化限界」: プラットフォーマーの取り分は B2C ブランドより薄くなりやすい。スケールしないとフロー収益が伸びにくい構造。^[inferred]
- 「[[JapanFG/freee|freee]] / [[JapanFG/money-forward|Money Forward]] / [[JapanFG/dg-financial-technology|DG Financial Technology]] との領域競合」: SaaS / 集金代行 / 決済代行 各社が embedded finance 領域に進出するにつれ、専業 white-label の差別化が問われる。^[inferred]
- 「公開情報の限定性」: 非上場企業ゆえ、案件数 / 収益 / 顧客名簿の開示が限定的で、規模把握が難しい。^[ambiguous]

## Open questions

- 主要顧客（提携銀行・カード会社・流通）の名簿はどの程度公開されているか?
- BNPL ([[JapanFG/atone|atone]] / [[JapanFG/paidy|Paidy]]) や ウォレット ([[JapanFG/merpay|メルペイ]]) のような直接プレイヤーとの提携領域 / 競合領域はどう線引きされているか?
- 海外 white-label fintech (Marqeta / Galileo / Stripe Issuing 等) の日本展開に対するポジショニングは?

## Related

- [[JapanFG/freee]]
- [[JapanFG/money-forward]]
- [[JapanFG/dg-financial-technology]]
- [[JapanFG/famima-digital-one]]
- [[JapanFG/merpay]]
- [[JapanFG/kyash]]
- [[JapanFG/smartbank]]
- [[JapanFG/bnpl-landscape]]
- [[payments/japan-bnpl-credit-purchase-boundary]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/japan-payment-scheme-economics-matrix]]

## Sources

- Infcurion corporate site: https://infcurion.com/
- Infcurion company profile: https://infcurion.com/company/
- METI registered operators under the Installment Sales Act (reference baseline): https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
