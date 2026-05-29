---
title: JPMorgan JPMD · トークン化預金 · GENIUS §501 法的分類下の TD パラダイム
aliases: [jpmorgan-jpmd-coin, JPMD, JPM Coin Deposit Token, JPMorgan tokenized deposit]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [fintech, tokenized-deposit, jpmorgan, kinexys, td-vs-sc, genius-501, base, canton]
sources:
  - https://www.jpmorgan.com/kinexys
  - https://www.jpmorgan.com/onyx/coin-system
  - https://www.jpmorgan.com/insights/global-research/payments/digital-assets
  - https://www.base.org/ecosystem
status: candidate
---

# JPMorgan JPMD · トークン化預金 · GENIUS §501 法的分類下の TD パラダイム

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> JPMD(JPM Coin Deposit Token)は JPMorgan 商業銀行預金のオンチェーン 1:1 表現であり、Kinexys プライベートチェーン + Base + Canton 移行予定で稼働。GENIUS Act §501 の法的分類下では**トークン化預金(TD)**であり、ステーブルコイン(SC)ではない —— **利息支払が可能、FDIC 保険適用、B/S 連動を含む**、§501 SC 規制制約を一切受けない。Kinexys は日次 **$5B+**、累計 **$1.5T+**、顧客 **180+ 機関**を処理する、**世界第 2 位のデジタル米ドル・インフラ**。JPMD は JPM が第 4 主役として機関 / 大企業顧客層へ延伸するコア・プロダクト。

## Key facts

- Kinexys 日次処理量 **$5B+** ≈ USDC グローバル日次の 30-40%(2026-Q1)^[extracted]
- 累計処理量 **$1.5T+** = USDT 流通量の 8 倍(2024-11 改名以来)^[extracted]
- 複数通貨 USD / EUR / GBP + 2026-Q2 SGD 追加 · 7×24 決済 ^[extracted]
- 2025-11 **JPMD on Base** 稼働 = 世界初の TD 公開 L2 展開(OCC は反対せず)^[extracted]
- 2026-01 Canton Network へ移行(プライバシー + Coinbase デカップリング)^[extracted]
- 2026-05-13 **JLTXX** 稼働(Anchorage 追加投資 → USAT 路線)^[extracted]
- 顧客 180+ 機関(2026-Q1)^[extracted]
- 法的分類:TD ≠ SC · §501 資格不要 · 利息 + FDIC + 信用創造を保持 ^[extracted]

## Mechanism / How it works

JPMD の中核的法的地位 = **銀行預金のトークン化**であり、ステーブルコインではない。Jamie Dimon の公式立場:「stablecoins are not banks, and not regulated as banks」(SC は一時的現象) vs 「tokenized deposits are bank deposits with new technology」(TD こそ未来) —— GENIUS Act §501 の法的分類と**完全に一致**。これは JPM が **§501 SC 資格不要**でオンチェーン米ドル・サービスを提供できることを意味し、逆に SC プレイヤーが享受できない優位性を保持する:**利息支払能力 + FDIC 保険 + 信用創造(B/S 連動)**。運用スタック:Kinexys プライベートチェーン(Quorum)を主体 + Base で公開チェーン流動性に接続 + Canton 連邦でプライバシー提供 + クロスボーダーは Liink 銀行間メッセージング(1100+ 銀行接続)経由。[[fintech/tokenized-deposit-cumulative-volume-scale|トークン化預金累計規模]] と合わせ、TD が既に事実上の主戦場であることを示す。

## Origin & evolution

2019-02 JPM Coin 公開(内部テストで $300B+ 累計)。2024-11 [[fintech/jpm-onyx-wholesale-network|Onyx]] → **Kinexys** に改名(TD「ホワイトラベル」の準備;Onyx ネットワークのホールセール/機関間ミッションとリテール到達可能な JPMD は 2 つの異なるプロダクトラインだが、同一の下層スタックを共有)。2025-11 JPMD on Base = TD の public L2 初投入。2026-01 [[systems/canton-overview|Canton]] へ移行(Coinbase デカップリング + プライバシー)。2026-03 Kinexys × BUIDL 統合 = TD 側で MMF yield 接続。2026-05-13 JLTXX 稼働 + Anchorage 追加投資 → USAT(US Anchorage TD)路線を示唆、JPM が Anchorage 経由で Tether USDT 準備金体系に切り込むためのキー・プロダクトとなる可能性がある。**v1 で JPM を「並行競争 / 観望」と分類したのは分析誤り** —— JPM は中央銀行機能 5 層フレームワークで**全層を主権 close** し、100 年の歴史を持つ唯一のプレイヤーである。本研究 v2 で第 4 主役に格上げ。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL トークン化 MMF]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関 SC vs TD 論点]]
- [[fintech/central-banking-function-unbundling|中央銀行機能の解体 5 層]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/multi-megabank-consortium-governance|複数大手銀行の連邦ガバナンス]]
- [[fintech/jpm-onyx-wholesale-network|JPM Onyx ホールセール・ネットワーク · TD 前身]]
- [[fintech/circle-usdc-stablecoin|Circle USDC · SC vs TD 法的分類対比]]
<!-- /wiki-links:managed -->

## Sources

---

**Last refresh** (2026-05-26): refreshed dates; added JPM Onyx (wholesale/predecessor) peer wikilink to disambiguate from retail-touchable JPMD; added Circle USDC for SC-vs-TD law contrast.
