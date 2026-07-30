---
title: Tether (USDT) の準備金運用モデル — 2025通期・2026年Q1開示
aliases: [tether-business-model, usdt-economics]
domain: fintech
kind: knowledge
topic: tether-business-model-short-treasury-yield
created: 2026-05-12
last_updated: 2026-07-30
last_tended: 2026-07-30
review_by: 2026-09-21
confidence: likely
evidence_count: 3
challenges: 0
status: confirmed
tags: [fintech, stablecoin, business-model]
sources:
  - "https://tether.io/en/transparency/"
  - "https://tether.io/news/tether-delivers-10b-profits-in-2025-6-3b-in-excess-reserves-and-record-141-billion-exposure-in-u-s-treasury-holdings/"
  - "https://tether.io/news/tether-posts-1-04b-q1-2026-profit-despite-highly-volatile-global-markets-reaches-all-time-highs-8-23b-reserve-buffer-and-maintains-u-s-treasury-heavy-backing/"
---

# Tether (USDT) の準備金運用モデル — 2025通期・2026年Q1開示


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Tether International の公開開示では、USD₮ のトークン債務を上回る準備資産を保有し、その大部分を短期米国債・レポ等の高流動性資産で運用する。2025通期の純利益は100億ドル超、2026年Q1は10.4億ドル。利益や独自投資と、トークンを裏付ける準備金は同じものとして扱わない。人員数や顧客別の採算は公表資料から確認できないため、本項では使用しない。

## Conclusion

以下は Tether の2025年通期開示と2026年3月31日時点のQ1開示に基づく。四半期 attestation は特定時点の経営者主張に対する保証業務であり、通期財務諸表監査と同義ではない。^[https://tether.io/news/tether-delivers-10b-profits-in-2025-6-3b-in-excess-reserves-and-record-141-billion-exposure-in-u-s-treasury-holdings/; https://tether.io/news/tether-posts-1-04b-q1-2026-profit-despite-highly-volatile-global-markets-reaches-all-time-highs-8-23b-reserve-buffer-and-maintains-u-s-treasury-heavy-backing/]

| 項目 | 開示値 / 仕組み |
|---|---|
| 基準日 | 2026年3月31日（Q1 attestation） |
| トークン関連債務 | 約1,834.4億ドル |
| 準備資産を含む総資産 | 約1,917.7億ドル |
| 資産超過額 | 約82.3億ドル |
| 2026年Q1純利益 | 約10.4億ドル |
| 米国債エクスポージャー | 直接・間接合計 約1,410億ドル |
| その他の準備資産 | 現物金 約200億ドル、Bitcoin 約70億ドル（いずれもQ1開示） |
| 2025通期純利益 | 100億ドル超（2026年1月30日公表） |
| 収益構造 | 準備資産の利息・レポ収益と市場価格変動が損益に寄与。独自投資は超過資本・利益から行い、発行済トークンの準備金とは分離すると説明 |

## Reasoning

- 準備資産のデュレーション、流動性、カウンターパーティー、金利水準が利益と償還耐性を左右する。短期金利の低下時には利息収益も縮小し得る。
- 2025年通期の100億ドル超と2026年Q1の10.4億ドルは同じ期間ではない。円換算値は為替で変わるため固定表示しない。
- USD₮ のオンチェーン移転は広く利用できる一方、Tether との直接発行・償還関係には本人確認・適格性・最低取引額等の条件がある。したがって「KYC がない」または「機関投資家は利用できない」と一括りにしない。
- Tether は四半期保証報告を公開しているが、2026年3月には初の完全な財務諸表監査に向け Big Four と契約したと発表した。attestation と audit の保証範囲を区別する。

## Applicable When

- ステーブルコイン経済性を議論するとき（円建て SC 発行設計 / 商業決済設計、参照 [[fintech/circular-reserve-asset-flywheel-overview|準備資産フライホイール]]）
- 「日本円 SC は儲かるのか？」議論 → 他の条件が同じなら、より低い日本円短期金利は準備資産から得られる粗利息収入を小さくする。ただし最終的な採算は発行残高、手数料、運用・コンプライアンス費用、流動性管理、信用・市場リスクなどにも依存し、低金利だけから成立可否を断定できない
- ユーザー資金の運用先設計議論 → 銀行発行の預金トークン型であれば預金債務と銀行の資産運用を基礎にする場合があるが、これはすべてのステーブルコイン法的類型に共通する構造ではない。信託型・資金移動業型などは発行主体、保全方法、償還請求権を個別に確認する
- USDT を組み込む提案を分析する際 → 発行・償還条件、準備資産、利用法域、カウンターパーティー、制裁・AML管理を個別に確認

## Source

- [Tether Transparency / assurance reports](https://tether.io/en/transparency/)
- [2025通期・Q4 2025 attestation（2026-01-30）](https://tether.io/news/tether-delivers-10b-profits-in-2025-6-3b-in-excess-reserves-and-record-141-billion-exposure-in-u-s-treasury-holdings/)
- [Q1 2026 attestation（2026-05-01）](https://tether.io/news/tether-posts-1-04b-q1-2026-profit-despite-highly-volatile-global-markets-reaches-all-time-highs-8-23b-reserve-buffer-and-maintains-u-s-treasury-heavy-backing/)
- [初の完全な財務諸表監査に向けた契約（2026-03-24）](https://tether.io/news/tether-signs-big-four-firm-to-complete-first-full-audit-setting-a-new-quality-standard-for-the-digital-asset-economy/)

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家 SC = 預金トークン]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|onchain-finance-vs-crypto-bifurcation]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 三層構造]]
<!-- /wiki-links:managed -->
