---
title: "[opinion] cbBTC · Coinbase ラップ BTC · 機関信頼の WBTC 代替・ウィンドウ・プロダクト"
source_entry: fintech/cbbtc-institutional-btc-wrapper.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — cbBTC · Coinbase ラップ BTC · 機関信頼の WBTC 代替・ウィンドウ・プロダクト

> 出典エントリー: `fintech/cbbtc-institutional-btc-wrapper.md`

## Counterpoints

cbBTC の単一障害点 + 利益相反: Coinbase は同時にカストディアン + チェーン提供者 + Aerodrome 大株主 + cbBTC mint/burn コントロール + オンチェーン attestation 提供者である。SEC は Coinbase v SEC 訴訟でこの種の複数役割の複雑性をすでに示唆しており、これは [[fintech/issuer-distributor-incentive-realignment-arc-strategy|発行/分配 ARC 戦略]] において Circle が issuer / chain / distributor を同一エンティティに内部化する「フルスタック逆統合」経路と鏡像をなす。Threshold tBTC はリテール経路で依然代替的役割を持ち、ラップド資産領域は winner-takes-all ではない。**反例**: OCC が Coinbase に IBIT + cbBTC + USDC 準備の同時カストディを禁止した場合、Coinbase は事業を分離せざるを得ず、cbBTC フライホイールは直接打撃を受ける。

## Open questions

cbBTC が Solana / 非 EVM チェーンにクロスチェーンする際、1:1 準備監査をどう処理するか? Coinbase 2026 IPO のバリュエーション・モデルは cbBTC クローズドループのキャッシュフローを個別に開示するか? 機関 BTC-DeFi ポジションの固定化ウィンドウ終了後、cbBTC の成長曲線はボトルネックに入るか?
