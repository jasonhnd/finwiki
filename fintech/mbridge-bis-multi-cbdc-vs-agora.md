---
title: mBridge vs Agora · BIS 2025 同年切替の二軌対比
aliases: [mbridge-bis-multi-cbdc-vs-agora, mbridge-vs-agora, bis-cbdc-twin-tracks]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [fintech, cbdc, mbridge, agora, bis, geopolitics, dollar, non-dollar]
sources:
  - https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm
  - https://www.bis.org/about/bisih/topics/fmis/agora.htm
  - https://www.bis.org/publ/othp59.htm
  - https://www.newyorkfed.org/aboutthefed/nyic
  - https://www.bis.org/cpmi/publ/d215.htm
status: candidate
---

# mBridge vs Agora · BIS 2025 同年切替の二軌対比


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 2025 年は BIS が CBDC クロスボーダー決済戦略で「軌道切替」を行った重要な年:10 月に mBridge(BRICS+ マルチ CBDC)を撤退 + 通年 Agora(7 中央銀行 + 民間銀行の tokenized correspondent banking)の推進を加速。2 プロジェクトは「中立橋」と「米ドル友好橋」の二軌から、「中国主導」vs「米欧主導」の二元構造へ変化。

## Key facts

- BIS 2025-10 mBridge 撤退 · 同年 Agora 推進加速 ^[extracted]
- mBridge 中央銀行メンバー 5(PBoC / HKMA / BoT / CBUAE / SAMA)· 全て非 G7 ^[extracted]
- Agora 中央銀行 7 行:Fed / BoE / BoJ / SNB / Banque de France / Bank of Korea / Banco de México ^[extracted]
- Agora は「tokenized correspondent banking」モデル · 中央銀行 + 商業銀行が共同で検証 ^[extracted]
- mBridge 100% 中央銀行検証 · Agora は中央銀行 + 民間銀行共同検証 ^[inferred]
- BIS 切替の公式理由は「地政学的リスク」 · 実質は陣営選択 ^[inferred]

## Mechanism / How it works

mBridge と Agora は技術層では permissioned DLT + BFT コンセンサスを共に採用するが、ガバナンスと参加構造が根本的に異なる。**mBridge** は中央銀行ノード + 商業銀行 sub-participants の二層構造で、SWIFT + Fedwire を迂回し各国 CBDC で直接決済する。**Agora** は「tokenized correspondent banking」 —— 中央銀行は tokenized reserve を発行 · 商業銀行は tokenized deposit を発行 · 統一 ledger 上で共同決済、実質は「既存の SWIFT/Fedwire correspondent banking のオンチェーン化」であり、米ドル体系を覆すものではない(deposit token 論題は [[fintech/institutional-stablecoin-deposit-token-thesis|機関 SC vs deposit token 論題]] を参照)。BIS 2025 の切替は、BIS が「代替体系」ではなく「オンチェーンパッチ」のルートを選択したことを意味する —— 米ドル側に tokenization を抱擁させ、mBridge を非米ドル側の自治に委ねる。

## Origin & evolution

2021 年 mBridge 始動 · 同時期 Agora は BIS 内部 ideation のみ。2023-2024 年 mBridge は MVP に入り、Agora は依然準備段階。2024-04 Agora 正式公表 · 7 中央銀行 + 41 商業銀行加入(JPM / Citi / HSBC / [[JapanFG/mufg|三菱 UFJ]] 等)。2025-Q1-Q3 Agora 初回 atomic settlement PoC 完了 · mBridge は同時期に G7 政治圧力に包囲される。2025-10 BIS が mBridge 運営撤退を発表 —— 同時に Agora の進捗を継続的に宣伝。2026-Q2 mBridge とブラジル DREX の相互運用テスト · Agora は中央銀行拡大募集段階へ。両プロジェクトは「BIS 二軌」から「対立する 2 通貨陣営の技術スタック」へ変化。

## Counterpoints

- BIS の mBridge 撤退は本当に政治圧力か · 技術 / ガバナンス失敗の可能性も(未公開データ)
- Agora の「tokenized correspondent banking」は実際には mBridge より遅い可能性 —— 41 民間銀行の調整を要するため
- 中国 PBoC は逆に BIS 撤退を歓迎する可能性 · e-CNY 国際化をより自主的に推進可能
- 2 プロジェクトは必ずしも排他的ではなく、長期的には特定シナリオ(多国間貿易等)で連携可能

## Open questions

- 2027-2030 年に mBridge と Agora のどちらが先に $100B 年間決済規模に達するか?
- インド / ブラジル / サウジは地政学ヘッジのため両プロジェクトに同時参加するか?
- 中国は mBridge で人民元 SDR バスケット地位を加速させるか · それとも先に二国間ルートを進めるか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge 概要]]
- [[fintech/bis-project-agora-overview|Agora 概要]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
- [[fintech/jurisdiction-list-monetary-protectionism|司法管轄区リスト = 貨幣保護主義]]
<!-- /wiki-links:managed -->

## Sources

