---
source: fintech/blackrock-buidl-tokenized-mmf-overview
source_hash: 718e91b743999e18
lang: ja
status: machine
fidelity: ok
title: "BlackRock BUIDL · トークン化 MMF のベンチマーク · 「stablecoin yield インフラ」"
translated_at: 2026-06-02T13:21:55.053Z
---

# BlackRock BUIDL · トークン化 MMF のベンチマーク · 「stablecoin yield インフラ」

## ウィキ上の位置づけ

このエントリは [[fintech/INDEX|fintech index]] の配下に位置づけられる。隣接する文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム / 規制上の境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] と併せて読む。

> [!info] 要約
> BlackRock USD Institutional Digital Liquidity Fund (BUIDL) は Securitize が発行、2024-03 にイーサリアム上でローンチ、2026-05 時点で **8 チェーン** にまたがり、AUM **$2.58B**、Moody's の **Aaa-mf** 最高格付を取得。BUIDL は単なる「onchain 理財商品」ではなく、**stablecoin 準備の yield インフラ** へとアップグレードされた — USDB / Frax / Ondo OUSG / Ethena USDtb / Spark sUSDS などほぼすべての大型 SC/DeFi プロトコルに販売され、JPMorgan Kinexys MONY/JLTXX と並んでトークン化 MMF の **デュアル・コア** を構成する。

## 主要事実

- AUM **$2.58B** (2026-05) · **8 chains** にまたがる (Ethereum, Solana, BNB, Avalanche, Aptos, Arbitrum, Optimism, Polygon) ^[extracted]
- 格付 **Moody's Aaa-mf** (2026-05-13 Fidelity FYHXX と同日に付与) ^[extracted]
- 規制経路 Reg D 506(c) 私募 / BVI · 最小投資 $5M · 運用報酬 ~20bps ^[extracted]
- ポートフォリオ 75% UST (1-3M) + 15% オーバーナイト・レポ + 10% 現金 · WAM <60 日 · 2a-7 基準 ^[extracted]
- 移転代理人 Securitize（BlackRock が $100M 出資 + 取締役会席） ^[extracted]
- 2026-05-08 SEC に **BSTBL** + **BRSRV**（SC 準備専用に設計された 2a-7 登録公募）申請 ^[extracted]
- 2026-05-14 Goldman/DTCC/Janus と共同で **$1B 即時償還ファシリティ** を構築（T+0 ボトルネック突破） ^[extracted]

## 仕組み / 作動原理

BUIDL の「yield インフラ」モデル = SC issuer が BUIDL を準備として保有 → BUIDL の 4.3% APY が issuer の純利息収入に流入 → issuer がそれを元手に SC 流通を拡大 → 流通拡大により再度 BUIDL 購入。**主要なイノベーション**: BUIDL は同時に CME / Binance / Deribit / Crypto.com からデリバティブの IM 担保として受け入れられ、[[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]] は BUIDL を償還流動性として活用 — BUIDL の実質的な経済規模 ≠ AUM、繰り返し **梃子化されて利用されている**。これは [[fintech/circular-reserve-asset-flywheel-overview|準備資産インターロック・フライホイール]] と直接結合する（詳細は姉妹エントリ参照）。

## 起源と発展

2024-03 BUIDL ローンチ（イーサリアム単一チェーン） · 2024-2025 で 8 チェーンに展開 + AUM 4-5× 成長 · 2025-04 Circle が公式に BUIDL の初期最大級機関 LP の 1 つであることを認める · 2025-12 累計分配 $100M+ · 2026-05-13 Moody's Aaa-mf · 2026-05-14 $1B 即時償還ファシリティ · 2026-05-08 新発 BSTBL/BRSRV により [[fintech/genius-act-501-denylist-mandate|GENIUS §501]] 後の「SC 準備」領域を商品化。BlackRock のデジタル資産 AUM は 2026-Q1 時点で **$60.67B**（5 月に $70B 突破）、BUIDL はこのポートフォリオで **最も梃子化された中心ノード** であり、[[exchanges/rwa-tokenization-cex-integration|CEX RWA 統合]] と同じカテゴリーの機関顧客を共有する。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/circular-reserve-asset-flywheel-overview|準備資産インターロック・フライホイール · BUIDL ↔ USDC]]
- [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD · トークン化預金]]
- [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED · プライベートクレジット・トークン化]]
- [[fintech/stablecoin-revenue-split-economics|stablecoin 金利分配エコノミクス]]
- [[fintech/portfolio-winner-structure-arm-analog|ポートフォリオ・ウィナー構造]]
- [[fintech/tokenized-mmf-wisdomtree-hashnote|トークン化 MMF マトリックス · WisdomTree / Hashnote]]
- [[fintech/circle-usdc-stablecoin|Circle USDC · BUIDL 初期最大級機関 LP の 1 つ]]
<!-- /wiki-links:managed -->

## 出典

---

**最終更新** (2026-05-26): JP 化、日付更新。トークン化 MMF マトリックス wikilink（WisdomTree/Hashnote）および Circle USDC リザーブ LP wikilink を追加。
