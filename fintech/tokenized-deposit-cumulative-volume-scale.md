---
title: トークン化預金累計取引規模パターン · Kinexys $1.5T を銀行預金トークンセクターのアンカーとして
aliases: [tokenized deposit cumulative volume scale, $1.5T Kinexys cumulative, JPMD volume anchor, トークン化預金規模パターン]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [fintech, number, economic-pattern, tokenized-deposit, kinexys, jpmd, jpmorgan, institutional-only]
sources:
  - https://www.jpmorgan.com/kinexys
  - https://www.jpmorgan.com/onyx/index
  - https://www.jpmorgan.com/insights/payments/payments-trends
  - https://www.jpmorganchase.com/ir/news
  - https://www.bis.org/cpmi/publ/d215.htm
status: candidate
---

# トークン化預金累計取引規模パターン · Kinexys $1.5T を銀行預金トークンセクターのアンカーとして


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 銀行預金トークン（deposit token）セクターとステーブルコインセクターは**相互に重なり合わない 2 つの市場**である。Kinexys（JPMD）累計取引額 $1.5T（2026-05）· 日平均 $5B+ · **100% 機関顧客** —— この規模を USDC / USDT の累計フローと直接比較することはできない。なぜなら顧客層、規制層、清算層が完全に異なるからである。$1.5T は「トークン化預金セクター浸透率」を測る中核アンカー —— 2 番目のデジタル USD インフラだが、サービス対象は 80 のグローバル機関（6 中央銀行を含む）であり、リテール / DeFi ユーザーではない。

## Key facts

- Kinexys 累計取引額 $1.5T（2019 開始以来）、日平均 $5B+、月平均 $150B+ ^[extracted]
- 顧客 100% 機関 · ~80 社（Visa / Mastercard / Ant / 6 中央銀行を含む）^[extracted]
- JPMD = JPM Deposit Token（EUR/USD/GBP）· OCC US National Bank Charter を辿る、**§501 ステーブルコインに該当しない** ^[extracted]
- グローバルデジタル USD インフラランキング（累計）：USDT $20T+（リテール/グレーゾーン）> Kinexys $1.5T（機関）> USDC $1.2T（ミックス）^[extracted]
- 2026-04 JPMD が Coinbase Base 公開チェーンに上線 = 銀行預金トークン ↔ ステーブルコインセクターの初のブリッジ ^[extracted]

## Mechanism / How it works

預金トークン vs ステーブルコイン = 2 つの規制セクター、2 つの顧客層：

```
                  ステーブルコイン(§501)        銀行預金トークン
                  ─────────────                ─────────────────────
発行体            Circle / Stripe / Tether    JPMorgan / Citi / BNY
準備金            国債 / 現金                  銀行預金（FDIC 保護）
規制              GENIUS §501 / MiCA           OCC bank charter / Reg E
顧客              リテール + 機関 + DeFi       機関のみ
利息              保有者への支払い不可         可（銀行預金利息）
代表              USDC / USDT / USDB           JPMD (Kinexys) / Citi TS
```

JPMorgan は deposit token を使用して §501 の「100% 国債 + 利息支払い不可」制約を回避：JPMD 保有者は本質的に JPM 預金者であり、銀行預金利息 + FDIC 保護を享受する。Kinexys $1.5T 数字は institutional-only セクターの実規模を証明し、今後 5 年も銀行（JPM / Citi / BNY）が連合で主導し、暗号ネイティブ企業ではない。

## Origin & evolution

2019 JPM Coin 始動（Onyx Coin System プライベートチェーン / Quorum 派生）· 2024 Kinexys へ改名 · 2025-12 顧客数 80 社到達 · 2026-04 [[fintech/jpmorgan-jpmd-coin|JPMD]] が Coinbase Base 公開チェーンへ上線（公開チェーンへの初ブリッジ）· [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] と**トークン化資産インフラのデュアルコア**を形成 —— BlackRock は中立武器商人路線（BUIDL を全 SC issuer に販売）、JPMorgan はクローズドループ銀行路線（JPMD は JPM 顧客へサービス）。

## Counterpoints

$1.5T 累計 / 日平均 $5B 数字は JPMorgan 自社報告 · 第三者独立検証は限定的。Kinexys プライベートチェーン（Quorum）の対外的観察性は低く、日平均 $5B の相当割合が「内部 netting」（JPM 内部口座振替）で真のクロス機関清算ではない可能性。[[fintech/tether-business-model-short-treasury-yield|USDT]] $20T+ との直接比較は誤誘導 —— グレーゾーンフローと機関清算規模は同等比較できない。Citi Token Services 等の競合が急速拡張、Kinexys「2 位」位置は 2027-2028 に超えられる可能性。同様の複数メガバンク競争 / 協業は [[fintech/multi-megabank-consortium-governance|複数メガバンク連邦ガバナンス]] 参照。

## Open questions

Kinexys $1.5T のうち真の「クロス機関清算」vs「JPM 内部 netting」の比率は？JPMD の Base 公開チェーン上のオンチェーン観察可能フローとプライベートチェーンフローの真の分布は？Citi Token Services / BNY Mellon deposit token 累計規模（非公開）は？$130B 三円 MRA と deposit token セクターの潜在的ブリッジ（JPMD は三円 MRA 相互認証に接続するか）？

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家 SC = 預金トークン thesis]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン分配経済学]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号ネイティブの分離]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]]
<!-- /wiki-links:managed -->

## Sources

- JPMorgan Kinexys 2025 公的開示 · OCC bank charter 規制文書
