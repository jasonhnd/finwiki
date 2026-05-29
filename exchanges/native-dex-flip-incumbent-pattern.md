---
title: L2 原生 DEX による incumbent 逆転パターン
aliases: [Aerodrome flip Uniswap, native DEX flip, L2 incumbent flip pattern, ve33 host alignment flip]
domain: exchanges
kind: knowledge
topic: native-dex-flip-incumbent-pattern
created: 2026-05-16
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-16
confidence: likely
tags: [fintech, defi, dex, l2, aerodrome, uniswap, base, ve33]
status: candidate
sources:
  - https://github.com/aerodrome-finance/contracts/blob/main/SPECIFICATION.md
  - https://www.coinbase.com/blog/coinbase-wrapped-btc-cbbtc-is-now-live
  - https://github.com/Uniswap/v3-core
---

# L2 原生 DEX による incumbent 逆転パターン


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it with [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for adjacent context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system boundary.

> [!info] TL;DR
> EVMマルチチェーン史上、原生DEXがL2の本拠地でincumbent(通常はUniswap)を逆転した事例は極めて稀。**AerodromeがBase上でDEX出来高シェア63%まで逆転**した事例は、完全な振り返り分析が可能な最初のケース。メカニズムは ve(3,3) + L2 ホスト側の利益アラインメント + 中核 wrapped 資産ペアプール + クロスチェーン統合による複製 の組み合わせ。

**中核メカニズム**:

1. **ve(3,3) emission 誘導**:AerodromeはVelodrome (v2)アーキテクチャを採用、veAERO投票でemission流向を決定(基礎メカニズムは [[exchanges/ve33-governance-mechanism|ve(3,3) governance メカニズム]] 参照)
2. **L2 ホスト側の保有**:Coinbase Venturesが顕著な veAERO を保有し、emissionを指向的に誘導可能
3. **中核資産のお濠**:cbBTC / cbETH 等のBase原生 wrapped 資産が「Aerodromeで取引する必然性」を強化
4. **ステーブルコイン基軸ペア**:USDC主導プールがAerodromeに集中(CoinbaseとUSDC関係のシナジー)
5. **クロスチェーン統合による複製**:Aero + Veloが94.5:5.5で統合し、Ethereum L1 + Circle Arcへ拡張、単一チェーンに限定されずパターン複製を実施

**逆転 KPI(Aerodrome × Base)**:

- 2024-Q4:Aerodrome出来高シェア ~35% on Base
- 2025-Q2:50% on Base
- 2025-Q4:63% on Base、**初めてUniswapを安定的に上回る**
- 2026-Q1:統合Aeroを発表しEthereum + Arcへ拡張

**逆転条件チェックリスト(必要 + 十分)**:

| # | 条件 | Aerodrome | Uniswap反例(他チェーン) |
|---|---|---|---|
| 1 | ve emission 誘導治理 | veAERO あり | 無し(UNIにemission無し) |
| 2 | L2 ホスト側の保有 | Coinbase Ventures | ホスト側支持無し |
| 3 | 中核 wrapped 資産 | cbBTC / cbETH | 原生独占資産無し |
| 4 | ホスト側の利益アラインメント | Coinbase USDC + Base + Aeroの三角構造 | Uniswapはクロスチェーン中立 |
| 5 | Bribe market 効率 | Aeroは高bribe ROI | Uniswap v3にbribe機構無し |

**汎用性 / 横展開可能領域**:

- Solana:Orca / Raydiumが既に部分的に実現(Uniswapクロスチェーン版に対し)
- Polygon:QuickSwapが歴史的に試みたが失敗(ホスト側保有を欠く)
- 今後のArc:Curve fork + Circle Ventures保有 + USDCの本拠地で、**複製可能性は高い**
- 今後のTempo:Stripe + Paradigm共同支援のDEXがインキュベートされる可能性
- L1/L2のホスト側がve持分を保有する意思を持つチェーン + ve(3,3)型DEXの任意の組み合わせ(参照:[[exchanges/global-dex-major-five-comparison|global DEX 主要 5 社比較]] と [[exchanges/amm-design-evolution|AMM design evolution]] の設計ベースライン)

**反例 / 境界**:

- L2ホスト側が保有しないケースでは逆転は発生しない(Optimism初期)
- DEXがveモデルを採用しないケース(Uniswap v3集中流動性)ではemission誘導が不可能
- incumbentが原生L2チェーン版を発表したケース(Uniswap v4 + UniChain)では逆転される可能性

**評価額 / 意思決定上の含意**:

- veAERO評価額には「ホスト側保有コミットメント」プレミアムを含めるべき
- ホスト側(Coinbase)評価額には「DEXフライホイール」キャッシュフロー項を含めるべき(参照:[[exchanges/vetoken-host-protocol-flywheel|veToken フライホイール]])
- 投資判断:L2ホスト側がve持分を公的に保有する6ヶ月前に原生DEXへ参入 = 高alpha
- 規制リスク:逆転イベントがSECの「未登録証券販売」関心を惹起する可能性


## Sources

- Aerodrome Finance コントラクト仕様（Velodrome/Solidly 由来の ve(3,3) DEX・veAERO 投票による emission 誘導という逆転メカニズムの一次資料） — https://github.com/aerodrome-finance/contracts/blob/main/SPECIFICATION.md
- Coinbase 公式ブログ「Coinbase Wrapped BTC (cbBTC) is now live」（Base ネイティブ wrapped 資産 cbBTC と Aerodrome 統合） — https://www.coinbase.com/blog/coinbase-wrapped-btc-cbbtc-is-now-live
- Uniswap v3-core リポジトリ（incumbent 反例: emission/bribe 機構を持たない集中流動性 DEX） — https://github.com/Uniswap/v3-core

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[exchanges/vetoken-host-protocol-flywheel|veToken × ホスト側フライホイール]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン金利分配]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号資産ネイティブ]]
- [[exchanges/global-dex-major-five-comparison|global DEX 主要 5 社比較]]
- [[exchanges/amm-design-evolution|AMM design evolution]]
- [[exchanges/ve33-governance-mechanism|ve(3,3) governance メカニズム]]
- [[systems/cross-chain-four-poles-overview|cross-chain four poles overview]]
<!-- /wiki-links:managed -->
