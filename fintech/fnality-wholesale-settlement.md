---
title: Fnality International · 銀行連合のホールセール決済トークン · BoE ライセンス取得 GBP は既稼働
aliases:
  - "fnality-wholesale-settlement"
  - "Fnality"
  - "FnPS"
  - "Fnality Payment System"
  - "USC"
  - "Utility Settlement Coin"
  - "systems/cls-bank-overview"
domain: fintech
created: 2026-05-25
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-25
confidence: likely
tags: [fintech, wholesale-settlement, fnality, central-bank-money, gbp-fnps, boe, multi-bank-consortium, tokenized-deposit]
status: candidate
sources:
  - https://www.fnality.org/
  - https://www.fnality.org/news-views
  - https://www.bankofengland.co.uk/news/2023/november/boe-statement-on-fnality
  - https://www.fnality.org/governance
  - https://www.swift.com/news-events/news/swift-fnality-collaboration
---

# Fnality International · 銀行連合のホールセール決済トークン · BoE ライセンス取得 GBP は既稼働

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/partior-jpm-dbs-temasek-consortium|Partior]] and [[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]] for the wholesale-settlement consortium triangle, and with [[fintech/multi-megabank-consortium-governance|多大銀行連邦ガバナンス]] for the governance pattern that gives Fnality its multi-bank shape (vs. JPM single-issuer model).

> [!info] TL;DR
> Fnality International は英国登記のホールセール決済インフラ企業で、各加盟銀行が中央銀行に保有する準備金 (CB money) を 1:1 でオンチェーン token (**Fnality Payment System token、fnPS**) にマッピングし、銀行間 7×24 即時自国通貨決済を実現する。**Sterling Fnality Payment System (£ fnPS) は 2023-12 に Bank of England の承認を取得、2024-Q2 に正式ローンチ**、グローバルで初めて中銀認可 + 中銀準備金 100% 裏付けのホールセール決済 token システム。株主には **Lloyds, Santander, UBS, BNY Mellon, Barclays, Goldman, MUFG, ING, State Street, Nasdaq Ventures, DTCC** 等 20+ のグローバル大銀行/インフラが含まれ、USD / EUR システムは Fed / ECB との監督交渉中。Fnality は [[fintech/jpm-onyx-wholesale-network|JPM Onyx]] の単一発行人経路に対する「多銀行連邦」対照サンプル。

## Key facts

- 登記地: 英国 (London) · 2019 設立 (前身 USC Utility Settlement Coin プロジェクトは 2015~) ^[extracted]
- 重要マイルストーン: BoE 2023-11-21 公式声明により FnPS GBP システムが systemically important payment system として BoE 監督下のライセンスを取得することを確認 ^[extracted]
- £ fnPS **2024-Q2 ローンチ** · 初の商業生産取引は Lloyds × Santander × UBS ^[extracted]
- USD / EUR / JPY システムは 2026 監督交渉中 (Fed / ECB / BoJ) · 2026-2027 にそれぞれローンチ予定 ^[extracted]
- 株主 20+ 大銀行 + インフラ: Lloyds, Santander, UBS, BNY Mellon, Barclays, Goldman, MUFG, ING, Sumitomo Mitsui, State Street, Nasdaq Ventures, DTCC, Euroclear 等 ^[extracted]
- 累計株式調達 ~ **£325M** (複数ラウンドにわたる) · CEO Rhomaios Ram (元 Deutsche Bank) ^[extracted]
- 技術スタック: Enterprise Ethereum (Quorum / 現 Hyperledger Besu へ移行) + DvP / PvP モジュラー ^[extracted]
- 用途: 銀行間 RTGS 7×24 即時 · クロスカレンシー PvP · 証券 DvP · [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] tokenized MMF と連動して IM として活用 ^[extracted]

## Mechanism / How it works

Fnality のコアモデル = **「オンチェーンの中銀準備金」** (vs. JPM Coin / JPMD = 「オンチェーンの商業銀行預金」TD)。各加盟銀行が BoE / Fed / ECB / BoJ に **Omnibus account** (集約口座) を開設し、準備金を預け入れた後、Fnality がブロックチェーン上で等額の fnPS token を mint する。決済時の銀行間 fnPS 送金 = 中銀準備金所有権のオンチェーン変更であり、**T+0 finality は RTGS final settlement と同等**であり、商業銀行 TD の「与信引受」ではない。これは [[fintech/central-banking-function-unbundling|中央銀行機能の解体 5 層]] における「ホールセール決済通貨 (wholesale CBDC)」の民間経路である —— 中銀が自ら token を発行せず、Fnality が監督下の PSP として omnibus reserve をトークン化する。

技術スタックは Enterprise Ethereum (Quorum で開始、後に Hyperledger Besu へ移行)、[[systems/canton-overview|Canton]] (Goldman/DTCC 経路) や [[fintech/jpm-onyx-wholesale-network|JPM Kinexys]] (Quorum 単一銀行) と相まって「3 種類のホールセール決済技術スタック」を形成。Fnality は 2024-Q4 に [[systems/swift-iso-20022-overview|SWIFT]] と公式に提携を発表: SWIFT がクロスボーダーメッセージ層を提供 + Fnality が決済 token を提供、[[fintech/bis-project-agora-overview|BIS Agora]] 公私混合アーキテクチャの具体実装サンプルを模倣する。

クロスカレンシー PvP (Payment vs Payment) は Fnality の次のキラー用途:£ fnPS × $ fnPS が同一の原子取引で交換、**Herstatt risk (クロスタイムゾーン決済失敗リスク) を解消**。FX スポット市場では日次 ~$7.5T のうち ~30% が依然 Herstatt risk を負っており、Fnality PvP は [[systems/cls-bank-overview|CLS Bank]] のオンチェーンアップグレード版。

## Origin & evolution

2015-2018 USC (Utility Settlement Coin) 研究プロジェクト = UBS 主導、16 行の大銀行が参加、概念実証。**2019 USC → Fnality International** (商業化)、初回調達 £63M (15 行)。**2023-11-21** BoE 公式声明により Fnality が systemic payment system として BoE 監督認可を取得、グローバル初の中銀承認ホールセール決済 token となる。**2024-Q2 £ fnPS ローンチ**、初の商業取引 Lloyds × Santander。2024-Q4 SWIFT との公式提携 (SWIFT メッセージ + Fnality token によるクロスボーダー)。2025 USD/EUR 交渉が実質的段階に入るも、Fed は GENIUS Act の下で延期 (「$ fnPS が USDC/USDT 流通に影響することを避けるため」)。2025-09 [[fintech/genius-act-501-denylist-mandate|GENIUS Act 施行]] → wholesale settlement token は §501 SC 監督範囲外 (100% 中銀準備金 + 銀行間流通のみのため)、$ fnPS の立法余地を確保。2026-Q1 [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] tokenized MMF と連動 = fnPS が IM collateral として CME / DTCC デリバティブシナリオでテスト。**Fnality は「ホールセール決済の国際公共財」経路**:[[fintech/jpm-onyx-wholesale-network|JPM Onyx]] の単一銀行経路と対照、[[fintech/partior-jpm-dbs-temasek-consortium|Partior]] のシンガポール 4 行経路と地域分業を形成。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]]
- [[fintech/partior-jpm-dbs-temasek-consortium|Partior]]
- [[fintech/multi-megabank-consortium-governance|多大銀行連邦ガバナンス]]
- [[fintech/central-banking-function-unbundling|中央銀行機能の解体 5 層]]
- [[fintech/bis-project-agora-overview|BIS Project Agora]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関 SC vs TD 論点]]
- [[fintech/tokenized-deposit-cumulative-volume-scale|TD 累計量級]]
- [[systems/canton-overview|Canton Network]]
<!-- /wiki-links:managed -->

## Sources

- https://www.fnality.org/ — Fnality 公式トップページ
- https://www.fnality.org/news-views — Fnality ニュースリリース
- https://www.bankofengland.co.uk/news/2023/november/boe-statement-on-fnality — BoE 2023-11 Fnality 関連公式声明
- https://www.fnality.org/governance — Fnality 株主とガバナンス構造
- https://www.swift.com/news-events/news/swift-fnality-collaboration — SWIFT × Fnality 提携告知
