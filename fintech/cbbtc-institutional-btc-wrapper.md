---
title: cbBTC · Coinbase ラップ BTC · 機関信頼の WBTC 代替・ウィンドウ・プロダクト
aliases: [cbbtc-institutional-btc-wrapper, cbBTC, Coinbase Wrapped BTC]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: certain
tags: [fintech, wrapped-asset, bitcoin, coinbase, base, defi, custody]
sources:
  - https://www.coinbase.com/cbbtc
  - https://www.coinbase.com/blog/introducing-coinbase-wrapped-btc-cbbtc
  - https://base.org/
  - https://www.coinbase.com/legal/cbbtc
  - https://wbtc.network/
status: candidate
---

# cbBTC · Coinbase ラップ BTC · 機関信頼の WBTC 代替・ウィンドウ・プロダクト


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> cbBTC は Coinbase がカストディする ERC-20 ラップド BTC（2024-09-12 ローンチ）、1:1 BTC 準備 · 2026-03 時点で流通量 ~**89,000 cbBTC** / 時価総額 **$6.1B** / Base 上 TVL **$839M**。2024 年の BitGo WBTC ガバナンス騒動後、cbBTC は「機関 BTC-DeFi ポジション移行」ウィンドウを捉え代替地位を確立、Coinbase の **veToken host protocol flywheel** における host 資産レイヤーを構成し、BTC を CEX カストディ資産から「オンチェーン自己循環キャッシュフロー・エンジン」へとアップグレードした。

## Key facts

- 流通量 **~89,000 cbBTC** · 時価総額 **$6.1B** · Base TVL **$839M** (2026-03) ^[extracted]
- 1:1 BTC 準備 · Coinbase カストディ · オンチェーン attestation ^[extracted]
- ローンチ日 2024-09-12 · ERC-20 マルチチェーン（主に Base + Ethereum） ^[extracted]
- 流動性中核会場 Aerodrome / Curve トレーディングペア ^[extracted]
- 同一インフラが同時に BlackRock IBIT をカストディ（Coinbase は IBIT の主要カストディアン） ^[extracted]
- WBTC（BitGo）2024 年に準備マルチシグを Justin Sun 関連エンティティに移管 → 機関信頼の移行 → cbBTC が受益 ^[extracted]

## Mechanism / How it works

cbBTC は Coinbase の 4 層クローズドループにおいて host 資産として機能する: **Coinbase CEX → cbBTC を mint（host 資産） → Base に進出（host プラットフォーム） → Aerodrome swap（host DEX） → veAERO bribe（host token）**。Coinbase は CEX カストディ BTC の custody fee + spread を保持しつつ、その BTC 部分が DeFi で 2 層目の流動性収益を生む構造を実現。クローズドループ全体の年換算は **$130-250M** と推定（詳細は [[exchanges/vetoken-host-protocol-flywheel|veToken host protocol flywheel]]）。これは Circle Arc メインネットが機関 USDC を吸収して Base のバリュエーションが $20-25B 毀損するリスクに対する **オンチェーン自給自足型防御** である。

## Origin & evolution

2024-09-12 cbBTC ローンチ（Coinbase 内部 BTC 事業部 + Base チームが連名で公表）。2024-Q4 BitGo ガバナンス騒動（WBTC 準備マルチシグを Sun 関連エンティティに移管）が機関信頼危機を引き起こし、Coinbase は「米国上場企業 + OCC 規制下 + 透明な準備」の 3 点セットを掲げて能動的に移行を受け入れた。2025-Q1 cbBTC は Aerodrome 流動性の深さで WBTC を逆転。2025-Q3 Aerodrome+Velodrome が合併（94.5% : 5.5%）し Ethereum L1 + Circle Arc に進出、cbBTC のクロスチェーン複製経路を開始。2026-03 流通量は 89,000 BTC = WBTC 過去ピークの ~60% に到達。**機関移行ウィンドウは約 18-24 か月**、いったんポジションが固定化すると移行コストが極めて高くなる現象は、[[fintech/regulatory-window-strategic-acquisition|規制ウィンドウ × 戦略的買収]] における「ウィンドウ期間の対戦相手不可逆移行」ロジックと同型構造。

## Counterpoints

cbBTC の単一障害点 + 利益相反: Coinbase は同時にカストディアン + チェーン提供者 + Aerodrome 大株主 + cbBTC mint/burn コントロール + オンチェーン attestation 提供者である。SEC は Coinbase v SEC 訴訟でこの種の複数役割の複雑性をすでに示唆しており、これは [[fintech/issuer-distributor-incentive-realignment-arc-strategy|発行/分配 ARC 戦略]] において Circle が issuer / chain / distributor を同一エンティティに内部化する「フルスタック逆統合」経路と鏡像をなす。Threshold tBTC はリテール経路で依然代替的役割を持ち、ラップド資産領域は winner-takes-all ではない。**反例**: OCC が Coinbase に IBIT + cbBTC + USDC 準備の同時カストディを禁止した場合、Coinbase は事業を分離せざるを得ず、cbBTC フライホイールは直接打撃を受ける。

## Open questions

cbBTC が Solana / 非 EVM チェーンにクロスチェーンする際、1:1 準備監査をどう処理するか? Coinbase 2026 IPO のバリュエーション・モデルは cbBTC クローズドループのキャッシュフローを個別に開示するか? 機関 BTC-DeFi ポジションの固定化ウィンドウ終了後、cbBTC の成長曲線はボトルネックに入るか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[exchanges/vetoken-host-protocol-flywheel|veToken × 主導者 DEX 自己循環フライホイール]]
- [[exchanges/native-dex-flip-incumbent-pattern|L2 ネイティブ DEX が incumbent を逆転]]
- [[fintech/wall-street-crypto-network-neutrality|Wall Street 暗号ネットワーク中立性]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP 開発者プラットフォーム]]
<!-- /wiki-links:managed -->

## Sources

