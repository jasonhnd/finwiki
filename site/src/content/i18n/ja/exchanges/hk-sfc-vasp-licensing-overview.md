---
source: exchanges/hk-sfc-vasp-licensing-overview
source_hash: 1808430510a63e3c
lang: ja
status: machine
fidelity: ok
title: "香港 SFC VASP ライセンス制度 — VATP regime + 持牌 CEX 概要"
translated_at: 2026-06-02T12:19:04.227Z
---

# 香港 SFC VASP ライセンス制度 — VATP regime + 持牌 CEX 概要

## ウィキ上の位置づけ

本項目は [[exchanges/INDEX|exchanges index]] 配下に位置する。比較・対照の文脈では [[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP (Crypto-Asset Service Provider) regime]]、より広いシステム上・規制上の境界については [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] とあわせて読む。

## 制度概要

香港は 2023-06-01 に改正 AMLO (Anti-Money Laundering Ordinance) を施行し、新たに **VATP (Virtual Asset Trading Platform) 制度**を導入した。既存 SFC (Securities and Futures Commission, 証券及期貨事務監察委員會) 体制下の **Type 1 (証券売買業)** + **Type 7 (自動取引サービス提供業)** ライセンスをデジタル資産プラットフォームに適用する枠組みであり、SFC が単一規制当局として AML/CFT + 投資家保護の両面を管轄する。2023-08 にはリテール (零售) 取引が解禁され、機関専用から一般投資家アクセス可能な体制に転換した。

## ライセンス取得状況 (2026 時点)

- **HashKey Exchange** (HashKey Group) — 2023-08 香港初のリテール VATP として認可。中国本土系資本だが香港に拠点を置きアジア圏拡大。日本子会社 [[exchanges/jp-exchange-tokyo-hash]] 経由で日本にも進出。
- **OSL Exchange** (OSL Group, HKEX 上場 863.HK) — 2023-08 HashKey と同時にリテール認可取得。機関中心のビジネスモデル。日本では [[exchanges/jp-exchange-osl-japan]] が JVCEA Type 1 取得済。
- **パイプライン**: HKVAX, Bullish, Crypto.com HK, VDX 等多数が申請中。SFC は段階的認可方針で慎重姿勢。

## 主要規制要件

- **資本金**: HK$5M (約 1 億円) 以上 — 日本 (1,000 万円〜) より厳しい水準
- **顧客資産分別管理**: 信託会社 (trustee) 経由で資産分離保管必須
- **コールド保管比率**: **98% 以上** — 日本 JVCEA 自主規制 95% より厳格
- **保険義務**: ホット保管分には全額補償可能な保険必須 (日本は努力義務)
- **AML/CFT**: FATF Travel Rule 強化実装 (HK$8,000 以上送金)

## 取扱可能銘柄

リテール向けは SFC 厳格審査済の大型流動性 トークン のみ — BTC, ETH, USDT, USDC 等に限定。機関向けは追加銘柄取扱可能だが、ステーブルコインは別途 [[fintech/hkma-stablecoin-licensing-overview]] の HKMA 監督下にあり、SFC VATP との並行ライセンス構造になる。

## 国際比較

- **日本** FSA/JVCEA — 33 銘柄程度 (whitelist 制) · [[exchanges/jvcea-whitelist-token-listing]]
- **香港** SFC — 限定的 (大型流動性のみ)
- **シンガポール** MAS DPT (Digital Payment Token) — リテール厳格制限
- **UAE** VARA — Dubai 中心、より柔軟

日本企業の対香港進出は活発で、Tether HK 戦略や三井系統の参入観測あり。SFC VATP は [[exchanges/global-cex-top10-comparison]] における Tier 2 拠点として位置付けられる一方、[[fintech/three-circles-stablecoin-mra-framework]] のような相互承認の議論はまだ初期段階。香港 VATP 体制は [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリクス]] と [[fintech/global-stablecoin-regulatory-five-pole-matrix|グローバル stablecoin 規制 5 極比較]] の両軸で参照され、 [[fintech/hkma-stablecoin-licensing-implications|HKMA stablecoin licensing implications]] と並行して読む価値がある。

---

出典: 公開情報整理 (SFC 公告、HK AMLO 改正条文公開資料、HKMA stablecoin issuer 公告、各ライセンシー IR)
