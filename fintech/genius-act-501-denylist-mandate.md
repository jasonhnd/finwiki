---
title: GENIUS Act §501 によるチェーンレベル Denylist の合法化 —— ステーブルコイン・ネイティブ L1 のコンプライアンス的逆解釈
aliases: [GENIUS Act denylist, stablecoin chain regulation, チェーンレベル Denylist 合法化]
domain: fintech
kind: knowledge
topic: genius-act-501-denylist-mandate
created: 2026-05-13
last_updated: 2026-05-26
last_tended: 2026-06-23
review_by: 2026-09-21
confidence: likely
tags: [fintech, regulation, GENIUS-Act, stablecoin, US, compliance]
status: active
sources:
  - https://www.congress.gov/bill/119th-congress/senate-bill/919
  - https://home.treasury.gov/news/press-releases
  - https://www.federalreserve.gov/newsevents/pressreleases.htm
  - https://ofac.treasury.gov/sanctions-programs-and-country-information
---

# GENIUS Act §501 チェーンレベル Denylist 合法化


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 米国 GENIUS Act §501(**2025-07-18 大統領署名により発効**;上院通過 2025-06-17、下院通過 2025-07-17)は、コンプライアンス・ステーブルコイン発行体に**チェーンレベルのアドレス封鎖能力**(chain-level Denylist)を備えることを明文で要求する。本条項は [[fintech/circle-usdc-stablecoin|Circle]] が自前 L1(Arc)を構築せざるを得ない根本的理由を逆説的に説明する:**自前チェーンのみが token と consensus 層を同時に制御でき、エンドツーエンドのコンプライアンス執行を実現できる**。チェーンレベル Denylist は「商業的妥協」から「法的明文要求」に格上げされた。

**条項のコア要件**:

- コンプライアンス・ステーブルコイン発行体は、特定アドレスに対して **freeze / burn / blacklist** を実行する能力を備えねばならない
- 汎用 EVM チェーンでの実装パスは、発行体が token contract に対応する権限(例えば USDC の `blacklisted` mapping)を追加する形
- だが発行体は**チェーン自体を制御できない**(Ethereum / Solana / 各 L2 の sequencer は自律稼働)ため、検閲耐性 fork という潜在リスクが残る
- 自前 L1 = token、consensus 層、sequencer を同時掌握 → **エンドツーエンド enforce**

**Arc の実装**:

- チェーンレベル Denylist precompile(5 つの stateful precompile の一つ)
- PermissionedValidatorManager の三層アーキテクチャ
- AWS Nitro Enclaves Remote Signer
- KYB-only StableFX

**通用パターン**:「**自前コンプライアンス・チェーン構築**」は GENIUS Act 通過後のステーブルコイン発行体にとって**構造的選択**であり、商業的選好ではない:

- Circle Arc(USDC):GENIUS Act 起草段階で能動的ロビイング + 自前 L1 構築
- Stripe Tempo(Bridge ステーブルコイン):OCC trust bank charter + Tempo validator 多元化
- Tether 将来パス:USAT(Anchorage)等のコンプライアンス版 + 自前 USDT0 / Plasma / Stable チェーン推測

**反例 / 例外**:

- アルゴリズム・ステーブルコイン(GENIUS Act が明文禁止)→ 直接淘汰
- 完全分散型ステーブルコイン(DAI 等)→ Denylist を実行不可能、市場シェアが制限される
- グレー・ステーブルコイン(USDT on Tron)→ 米国市場に参入せず、法案を回避

**地政学的含意**:法案により米国ステーブルコイン陣営(USDC / USD1 / PYUSD)と非米国ステーブルコイン(USDT グレールート / 各国主権ステーブルコイン / アルゴリズム・ステーブルコイン)は構造的対立を形成する。詳細は [[fintech/stablecoin-chain-sovereign-currency-divide]] を参照。

**日本立法との並行関係**:日本資金決済法における対応条項(第 1 号電子決済手段)も発行体に同様の能力を要求する(信託型 / 銀行型 / 資金移動業者型、詳細は [[fintech/japan-epi-three-types-overview|日本 EPI 三型アーキテクチャ]])。GENIUS Act と日本立法は**並行立法トレンド**に属し、孤立した現象ではない。

**先例とクロスボーダー拡張**:チェーンレベル凍結の実運用先例は既に USDC / USDT 多チェーンで発生しており、詳細は [[fintech/chain-level-ofac-freeze-precedent|チェーンレベル OFAC freeze 先例]] を参照。VASP 側 [[fintech/fatf-travel-rule-overview|FATF Travel Rule]] 配備の BTS プロトコル層と相まって「情報層 + 資産層」二重コンプライアンス・スタックを構成する。グローバル VASP 規制の横軸マトリクスは [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリクス]] を参照。


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]
- [[fintech/japan-financial-regulation|日本金融規制]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号ネイティブ分流]]
- [[fintech/circle-usdc-stablecoin|Circle USDC · §501 ホワイト圏リーダー]]
- [[fintech/eu-mica-implementation-status-2026|EU MiCA 実装状況 · §501 対応物]]
<!-- /wiki-links:managed -->

---

**Last refresh** (2026-05-26): pinned 2025-07-18 signing date inline (replacing vague "2025 年"); added Senate/House passage dates; added Circle USDC and MiCA implementation cross-links.
