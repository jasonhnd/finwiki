---
title: 日本金融規制 — トークン・暗号資産・決済に関する法体系
aliases:
  - "financial-regulators/financial-laws-stack"
domain: fintech
kind: knowledge
topic: japan-financial-regulation
created: 2026-04-15
last_updated: 2026-05-25
last_tended: 2026-06-23
review_by: 2026-08-07
confidence: likely
tags: [fintech]
status: active
sources:
  - https://www.fsa.go.jp/en/
  - https://www.fsa.go.jp/en/policy/sftl/index.html
  - https://www.fsa.go.jp/common/law/index.html
  - https://elaws.e-gov.go.jp/
  - https://www.boj.or.jp/en/paym/digital/index.htm
evidence_count: 2
challenges: 0
---

# 日本金融規制 — トークン・暗号資産・決済に関する法体系

> [!info] TL;DR
> 日本でトークン発行・暗号資産・決済事業を行う場合、資金決済法・金商法・信託業法の三法が適用軸となり、スキーム選択によって必要ライセンスと規制負荷が大きく異なる。

## Reasoning (法体系の三本柱)

- 暗号資産型 → 資金決済法（暗号資産交換業登録・関東財務局長） — [[exchanges/fsa-vasp-registration-system|FSA VASP 登録制度]]
- ST 型 → 金商法（電子記録移転有価証券表示権利等・第一種金商業 or PTS）
- 信託型 → 信託業法（信託銀行連携・受益権トークン化） — [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架構]]
- スキーム選択の比較は [[fintech/gold-tokenization-scheme-comparison|日本におけるトークン発行スキーム比較]] 参照
- クロスボーダー決済 → 資金移動業 or 暗号資産交換業の併用
- ステーブルコイン制度 → [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]（電子決済手段等取引業）· 銀行ペリメータ視点は [[banking/japan-stablecoin-bank-perimeter-2025|日本 Stablecoin 銀行ペリメータ 2025]]
- 軽量牌照 → [[fintech/japan-ecisb-license|ECISB]]（資金を持たない仲介業向け 2026 年新設）
- 100 万円問題（JPOC）：暗号資産送金の上限議論が進行中
- VASP 自律規則 → [[exchanges/jvcea-self-regulatory-overview|JVCEA 自律規則概览]]
- KYC 済みアカウント限定 + ホワイトリスト運用は全スキーム共通の実務要件

## Applicable When

- トークン発行事業の法的スキーム選択時
- CEX 案件（Tokenized Gold / 海外進出）の規制評価時
- 新規 fintech プロジェクトの法務リスク初期評価時

## Source

- 公開: 資金決済法 / 金商法 / 暗号資産規制関連条文
- 業界一般: トークン発行スキーム比較資料

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-listed-company-disclosure-monitoring|日本上場会社 開示情報モニタリング SOP（17 チャネル）]]
- [[fintech/ai-payment-two-tracks|AI 产业的两条支付轨道：Stripe 模式 vs 稳定币模式]]
- [[fintech/japan-ecisb-license|日本 ECISB 牌照——专为"不碰资金的交易路由中介"设计的轻量牌照]]
- [[banking/japan-stablecoin-bank-perimeter-2025|日本 Stablecoin 銀行ペリメータ 2025]]
<!-- /wiki-links:managed -->

---

**Last refresh** (2026-05-25): refreshed dates; added banking-domain `japan-stablecoin-bank-perimeter-2025` cross-link for SC perimeter context.
