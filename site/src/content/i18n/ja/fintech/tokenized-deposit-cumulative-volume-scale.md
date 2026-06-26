---
source: fintech/tokenized-deposit-cumulative-volume-scale
source_hash: 7c9f5e063810d5af
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "トークン化預金の累計取引規模パターン：Kinexys $1.5T を銀行預金トークンセクターのアンカーとして"
translated_at: 2026-06-26T08:29:33.012Z
---
# トークン化預金の累計取引規模パターン：Kinexys $1.5T を銀行預金トークンセクターのアンカーとして

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の下に位置する。隣接文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読む。

> [!info] 要約
> 銀行預金トークン（deposit token）セクターとステーブルコインセクターは、**相互に重なり合わない 2 つの市場**である。Kinexys（JPMD）の累計取引額は $1.5T（2026-05）、日平均 $5B+、**100% の機関顧客**に達する。ただし、この規模を USDC / USDT の累計フローと直接比較することはできない。顧客層、規制層、清算層が完全に異なるためである。$1.5T は「トークン化預金セクターの浸透率」を測る中核アンカーであり、2 番目のデジタル USD インフラだが、サービス対象は 80 のグローバル機関（6 中央銀行を含む）であって、リテール / DeFi ユーザーではない。

## 主要事実

- Kinexys 累計取引額 $1.5T（2019 開始以来）、日平均 $5B+、月平均 $150B+ ^[extracted]
- 顧客 100% 機関、約 80 社（Visa / Mastercard / Ant / 6 中央銀行を含む）^[extracted]
- JPMD = JPM Deposit Token（EUR/USD/GBP）。OCC US National Bank Charter に基づき、**§501 のステーブルコインには該当しない** ^[extracted]
- グローバルデジタル USD インフラランキング（累計）：USDT $20T+（リテール / グレーゾーン）> Kinexys $1.5T（機関）> USDC $1.2T（ミックス）^[extracted]
- 2026-04、JPMD が Coinbase Base 公開チェーンに上線。銀行預金トークンセクターとステーブルコインセクターを結ぶ初のブリッジとなった ^[extracted]

## 仕組み

預金トークンとステーブルコインは、2 つの規制セクター、2 つの顧客層に分かれる。

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

JPMorgan は預金トークンを使い、§501 の「100% 国債 + 利息支払い不可」という制約を回避する。JPMD 保有者は本質的に JPM 預金者であり、銀行預金利息と FDIC 保護を享受する。Kinexys の $1.5T という数値は、機関限定セクターの実規模を示している。今後 5 年も、この領域は銀行（JPM / Citi / BNY）が連合で主導し、暗号ネイティブ企業が主導する領域ではない。

## 起源と発展

2019 JPM Coin が始動（Onyx Coin System プライベートチェーン / Quorum 派生）。2024 Kinexys へ改名。2025-12 に顧客数 80 社到達。2026-04、[[fintech/jpmorgan-jpmd-coin|JPMD]] が Coinbase Base 公開チェーンへ上線し、公開チェーンへの初ブリッジとなった。[[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]] とあわせて**トークン化資産インフラのデュアルコア**を形成する。BlackRock は中立的なインフラ提供者として BUIDL を全 SC 発行会社 に販売する路線、JPMorgan はクローズドループの銀行路線として JPMD を JPM 顧客に提供する路線である。

## 関連
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家 SC = 預金トークン thesis]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン分配経済学]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号ネイティブの分離]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]]
<!-- /wiki-links:managed -->

## 出典

- JPMorgan Kinexys 2025 公的開示、OCC bank charter 規制文書
