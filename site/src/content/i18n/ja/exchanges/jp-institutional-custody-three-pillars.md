---
source: exchanges/jp-institutional-custody-three-pillars
source_hash: d8215470acdc563c
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "国内機関カストディ三強構造 — Komainu / Ginco / Fireblocks Japan 比較"
translated_at: 2026-06-26T08:28:53.957Z
---
# 国内機関カストディ三強構造 — Komainu / Ginco / Fireblocks Japan 比較

## 概要国内機関向けカストディ市場は **技術 (cold vs MPC) × 親会社 (国内 vs 海外)** の二軸で分化している。VASP の自社カストディ (bitFlyer / Coincheck / bitbank 等) と並行して、B2B ベンダー層 (機関・他 VASP・金融機関向けインフラ供給) が形成されており、その中核に Komainu / Ginco / Fireblocks Japan の三社が位置する。

## 三社プロファイル

### Komainu Holdings (英国 Jersey)
- 2018 設立 · 野村 HD + CoinShares + Ledger 三者合弁による [[exchanges/jp-custody-komainu]]
- 機関・主権国家向け **cold カストディ + オフライン署名** 専業
- UAE 政府等を顧客に持ち、2024-10 Propine 買収でアジア展開加速
- Board に [[exchanges/jp-exchange-laser-digital-japan]] (Nomura 系) 幹部 + Blockstream の dual-anchor 構造

### 株式会社 Ginco (国内独立系)
- 2017 設立 · 創業者森川夢佑斗 · 2026-04 代表交代 → 坂根遼 [[exchanges/jp-custody-ginco]]
- **Ginco Enterprise ウォレット (MPC)** + Ginco Node 提供
- B2B SaaS · VASP / 銀行 / 信託 / 暗号資産交換業者向け
- 国内独立系で資本系列なし · 国内 VASP インフラの最大手

### Fireblocks Japan (海外 vendor 日本法人)
- グローバル親 Fireblocks Inc. (NY HQ · 2018 Israel ルーツ) [[exchanges/jp-custody-fireblocks-japan]]
- **MPC カストディ + policy engine + treasury workflow**
- 全世界 2,400+ 機関 · $10T+ 累積取引高 · Series E $550M ($8B valuation)
- 日本拠点 Tokyo 5 名規模 · 三井物産 MDC (Zipangcoin RWA) + SMBC/Ava Labs/TIS SC (2025-04) + みんなの銀行 + CoinTrade 等を支援

## 技術 / ビジネスモデル比較

| 軸 | Komainu | Ginco | Fireblocks |
|---|---|---|---|
| 技術 | Cold + オフライン署名 | MPC SaaS + ノード提供 | MPC + policy + workflow |
| 主顧客 | 機関・主権国家 | 国内 VASP / 金融機関 | 数千機関規模 (グローバル) |
| 課金 | 月額 / AUM ベース | ライセンス / 取引ごと | サブスクリプション |
| 親会社 | 野村 HD 系 (海外法人) | 国内独立系 | 海外 vendor (米 NY) |

## 規制位置づけ

三社いずれも **FSA 暗号資産交換業登録なし** (B2B インフラのため不要) · [[exchanges/fsa-vasp-registration-system|JVCEA 非加盟]] · 顧客側 VASP のライセンスに依存する ベンダー層として機能する。

## 競合層 (海外比較)

Anchorage / Coinbase カストディ / BitGo / Fidelity Digital Assets — いずれも国内未進出、または提携経由 (例: BitGo × Mitsui)。機関向け純カストディは依然として [[exchanges/jp-exchange-crypto-garage]] のような Daiwa / SBI 系 Securities Token 接続事業との重複領域でも展開している。

---
出典: 各社公式コーポレートサイト · 日経 / ITmedia · 各社 IR 報道
