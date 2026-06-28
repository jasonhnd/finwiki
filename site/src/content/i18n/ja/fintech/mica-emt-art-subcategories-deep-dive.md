---
source: fintech/mica-emt-art-subcategories-deep-dive
source_hash: bd833cc8af1e7cb7
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "MiCA EMT vs ART サブ分類の深掘り · 規制負担によるプロダクト形状づけ"
translated_at: 2026-06-26T08:29:09.716Z
---
# MiCA EMT vs ART サブ分類の深掘り · 規制負担によるプロダクト形状づけ

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の下に位置づけられる。隣接文脈として [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界として [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読む。

> [!info] 要約
> MiCA はステーブルコインを EMT(単一法定通貨ペッグ)と ART(マルチアセット/マルチ通貨ペッグ)に精緻に分類するが、表面的には分類技術、実際には**規制負担によるプロダクト形状づけ** —— 大多数のプロジェクトを EMT に追い込み、ART はほぼ採用されない。USDC/USDT は EMT に該当、BUIDL のようなマルチアセット・ファンド型は ART に該当する。**MiCA EMT の ≥ 30% 銀行預金要件は GENIUS Act の ≤ 50% 銀行預金 / ≤ 93 日 T-bill との重要な差異**であり、これは大西洋横断 MRA(2026-Q3)で必ず調整しなければならない技術的ギャップ。

## 主要事実

- MiCA 3 層:Regulation (EU) 2023/1114(L1)+ EBA/ESMA RTS/ITS(L2)+ Q&A/Guidelines(L3) ^[extracted]
- 2024-12-30:MiCA 全面施行 ^[extracted]
- 既存ライセンス EMT 発行会社(2026-05):Circle EU / Société Générale-Forge / Banking Circle / Membrane / Quantoz / Schuman / StablR / Crypto.com(計 8 社) ^[extracted]
- ART はほぼ皆無 · 規制負担が過大 · 市場が足で投票 ^[extracted]
- USDT の EU シェア:2024-12 ~28% → 2026-05 ~3% ^[extracted]
- Significant EMT/ART 閾値:Outstanding ≥ €700M · または 30 日日平均取引量 ≥ €500M · または holder ≥ 1M ^[extracted]
- USDC は 2025-09 以降 Significant EMT に指定 · EU で唯一 ^[extracted]
- Reserve 差異 vs GENIUS:MiCA ≥ 30% 銀行預金 · GENIUS は ≤ 50% 預金 + ≤ 93 日 T-bill 制限 ^[extracted]

## 仕組み / どのように機能するか

**EMT(E-Money Token · Article 3(1)(7))**:単一公式法定通貨ペッグ(1:1) · 発行会社 は EMI または credit institution ライセンス保有必須(EU Directive 2009/110/EC) · Reserve ≥ 30% 銀行預金(Article 36(1)(a))+ 残額は高流動性低リスク資産 · Bankruptcy-remote segregation · 代表例 USDC(Circle Europe)/ EURC / EURI / EURCV / EURØP。

**ART(Asset-Referenced Token · Article 3(1)(6))**:「any other value or right or combination thereof」(マルチ通貨バスケット / 商品バスケット / マルチアセット)にペッグ · EBA が直接規制(国家 NCA ではない) · Reserve composition は reference asset 比率で保持 · Quarterly audit + monthly reserve attestation · 代表例 XAUT(金) / 停止済みの Diem/Libra / 理論上 BUIDL 類のマルチアセット型。

**Significant EMT/ART 閾値**(EBA RTS 2025-01-22):Outstanding ≥ €700M、または 30 日日平均取引量 ≥ €500M、または holder ≥ 1M。いずれかで EBA 直接規制 + より厳しい資本要件 + stress testing。USDC は 2025-09 以降 Significant EMT に指定(EU で唯一)。

**Reserve の重要な差異 vs GENIUS Act**:MiCA ≥ 30% 銀行預金 + 長期国債を許容;GENIUS は ≤ 93 日 T-bill 制限 + 預金上限 50% → MRA で必ず相互認証が必要。これが USDC が USDT より評価プレミアムを持つ核心的構造理由(USDC が三円コンプラを同時に満たす)。EMT 流通の二次市場 CASP ライセンス関連要件は [[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP 制度概要]] を参照。

## 起源と変遷

MiCA の 2 種類設計は 2020-09 EU Commission Digital Finance Package に起源を持つ。2023-06 Regulation (EU) 2023/1114 通過で EMT / ART 二分が明確化。2024-12-30 全面施行後、市場は足で投票:8 社のライセンス EMT を持つ一方でほぼ ART なし → 規制負担によるプロダクト形状づけは成功。USDT は EMT でも(EMI ライセンスなし)ART でもなく(reserve composition 不適合)→ EU から撤退。Membrane Finance による Tether 買収交渉は 2025-08 決裂 = EU 参入路完全閉鎖。日本側の EPI 三型対応版は [[fintech/japan-epi-three-types-overview|日本 EPI 三型アーキテクチャ概要]] を参照。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/mica-overview|MiCA 概要]]
- [[fintech/mica-cross-border-implications|MiCA クロスボーダー含意]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
<!-- /wiki-links:managed -->

## 出典
