---
title: CFTC vs SEC 暗号管轄権争い · FIT21/CLARITY Act によるコモディティ証券二分法
aliases: [cftc-sec-jurisdiction, CFTC vs SEC, FIT21, CLARITY Act, Howey Test]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [fintech, law, regulation, us-regulation, cftc, sec, jurisdiction, fit21]
sources:
  - https://www.cftc.gov/digitalassets/index.htm
  - https://www.sec.gov/spotlight/cybersecurity-enforcement-actions
  - https://www.congress.gov/bill/118th-congress/house-bill/4763
  - https://www.congress.gov/bill/119th-congress/house-bill/3633
  - https://www.sec.gov/news/statement/gensler-crypto-2023-04-18
status: candidate
---

# CFTC vs SEC 暗号管轄権争い · コモディティ証券二分法


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 米国における暗号規制の中核的問題: BTC/ETH = コモディティ（CFTC 管轄） vs SC/Token = セキュリティ（SEC 管轄）。Gensler 時代（2021-2025-01）に SEC はほぼすべての token に管轄を強硬に拡張;Atkins/Peirce が 2025-02 に Coinbase/Kraken/Binance への訴訟を取り下げたことが SEC 後退のマイルストーン。CLARITY Act（2026 年に再起動） + FIT21 立法により、コモディティ / セキュリティの明確な線引きが完成する見通し。

## Key facts

- Howey Test 1946: SEC v. W.J. Howey Co., 328 U.S. 293 · investment contract の 4 要件 ^[extracted]
- 2025-02-27: SEC v. Coinbase を取り下げ（"not in public interest"） ^[extracted]
- 2025-03-03: SEC v. Kraken を取り下げ ^[extracted]
- 2025-03-15: SEC v. Binance(US) を部分取り下げ ^[extracted]
- 2025-04-09: SEC Crypto Task Force 始動 · Hester Peirce が率いる ^[extracted]
- Atkins が 2025-04 に Chair 就任 · Mark Uyeda が Acting Chair（2025-01-20 ~ 2025-04-09）期間中に取り下げが集中 ^[extracted]
- FIT21（H.R. 4763）: 2024-05 下院通過 · 上院は 2025 年に未通過 · 2026 年に French Hill が CLARITY Act の再起動を推進 ^[extracted]
- 訴訟取り下げ ≠ 判例 · SEC は将来再起訴可能 ^[inferred]

## Mechanism / How it works

**管轄権二分フレームワーク（進化中）**:
- **CFTC 管轄**: BTC（両者共通認識） · ETH（係争中 → コモディティ寄り、2024 年 SEC 調査取り下げ） · デリバティブ（CME futures / options） · 将来の FIT21「digital commodity」カテゴリー
- **SEC 管轄**: ICO tokens（Howey Test） · Yield/staking 商品（Gemini Earn） · DeFi フロントエンド運営（Uniswap Labs 2025-02 取り下げ前） · Stablecoin — 2025 年以降 OCC/FRB/FinCEN（GENIUS PPSI）に移管
- **グレーゾーン**: SOL / ADA / AVAX（取り下げ後はあいまい） · DeFi tokens（UNI/AAVE/CRV） · 「decentralization test」に基づき token を SEC から CFTC に移す経路

発行体への影響: BTC/ETH ETF issuer（BlackRock / Fidelity）は CFTC 経路の明確化により恩恵を受ける;新 token 発行は SEC 登録地獄を必ずしも経由しなくなる → Atkins の「safe harbor rulemaking」が出口を提供。SC は SEC から完全に脱却し、GENIUS PPSI（OCC/FRB/FinCEN、詳細は [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust bank charter]]）に移管。

## Origin & evolution

1946 Howey Test 基礎確立、2017 SEC DAO Report で Howey を暗号領域に移植。2021-2025 Gensler 時代に SEC は攻撃的拡張、Coinbase / Kraken / Binance / Ripple へのマルチライン訴訟。2024-05 FIT21 下院通過するも上院で棚上げ。2025-01 Trump 2.0 就任後 SEC のスタンスが 180 度転換、Acting Chair Uyeda が 2025-02/03 に集中取り下げ、Atkins が 4 月就任 + Peirce 主導の Crypto Task Force。2026 French Hill が CLARITY Act の再起動を推進、FIT21 で未完の経路を完成させることを目標とする。VASP のグローバル横断対比は [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリックス]] 参照。

## Counterpoints

- 取り下げは政策転換 ≠ 判例 · SEC は将来再起訴可能で enforcement uncertainty を引き起こす
- Uniswap Labs は 2025-05 に任意 KYC + transaction monitoring を開始 · 取り下げを受けても DeFi はコンプライアンス化に向かう
- 「完全に issuer なし」の真の分散型 SC（DAI / LUSD / FRAX）は依然として行き場なし · SEC は管轄しないが PPSI 資格もない

## Open questions

- CLARITY Act 2026 通過確率 · 上院 60 票閾値を突破できるか?
- 「decentralization test」の定量基準は rulemaking で明確化できるか?
- Aave GHO が GENIUS PPSI 経路を歩むことは DeFi SC の「迂回的コンプライアンス化」テンプレートとなるか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust bank charter]]
- [[fintech/chain-level-ofac-freeze-precedent|OFAC オンチェーン freeze]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA]]
<!-- /wiki-links:managed -->

## Sources

