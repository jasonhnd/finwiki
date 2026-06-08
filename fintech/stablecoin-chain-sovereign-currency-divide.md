---
title: ステーブルコイン地政学通貨対立フレームワーク（米 / 欧 / 日 / 中 / グレーの 5 極構図）
aliases: [stablecoin sovereign currency divide, geo-political stablecoin, 5 極ステーブルコイン]
domain: fintech
kind: framework
topic: stablecoin-chain-sovereign-currency-divide
created: 2026-05-13
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-13
confidence: likely
tags: [fintech, stablecoin, geopolitics, sovereign-currency, framework]
status: candidate
sources:
  - https://www.congress.gov/bill/119th-congress/senate-bill/394
  - https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1114
  - https://www.fsa.go.jp/en/policy/sftl/index.html
  - https://www.pbc.gov.cn/en/3688110/3688172/4437084/index.html
  - https://www.bis.org/cpmi/publ/d215.htm
---

# ステーブルコイン地政学通貨対立フレームワーク


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/three-circles-stablecoin-mra-framework|米 / 欧 / 日 「三大円」ステーブルコイングローバルコンプライアンスアーキテクチャ（MRA 相互認証）]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

> [!info] TL;DR
> 2026-2030 年のステーブルコイン戦争は、単純な「USDC vs USDT」のゼロサム競争ではなく、**5 極の地政学的通貨対立**へ進化する：①米国コンプライアンス陣営（USDC / USD1 / PYUSD on Arc / Tempo / Base）②EU 陣営（EURC + EUR-stable on MiCA-compliant chains）③日本陣営（JPYC / XJPY on Progmat / Arc-Japan-channel）④中国 / 香港陣営（e-CNY オフチェーン + HKD-stable）⑤グレー市場（USDT on Tron + Lightning + 新興地下チャネル）。

**5 極構図**：

| 極 | 主導通貨 | 主導チェーン | 主導規制 | キープレイヤー |
|---|---|---|---|---|
| 🇺🇸 米国コンプライアンス | USDC / USD1 / PYUSD / EURC | Arc / Tempo / Base / Ethereum | [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] | Circle / Stripe / Coinbase / PayPal |
| 🇪🇺 EU | EURC / EUR-stable | MiCA-compliant chains | [[fintech/mica-overview|MiCA]] ART / EMT | Circle Ireland / Société Générale Forge / Mastercard MTN |
| 🇯🇵 日本 | JPYC / XJPY / DCJPY | Progmat / Arc-channel / JPYC EPI | [[fintech/japan-epi-three-types-overview|改正資金決済法（EPI 三型）]] | [[megabanks/mufg|三菱 UFJ]] / SBI / [[payment-firms/jpyc|JPYC]]（[[fintech/stablecoin-channel-japan-sbi-jpyc-ring]]）|
| 🇨🇳🇭🇰 中港 | e-CNY（オフチェーン）+ HKD-stable | 香港 sandbox + 円幣科技 First Digital Trust | [[fintech/hkma-stablecoin-licensing-overview|HKMA 立法（2025-08）]] + PBoC | アント国際 / 京東 / スタンチャート香港 |
| 🌍 グレー | USDT | Tron + Lightning + 新チャネル | 各国規制回避 | Tether（Lugano）/ Tron / グレー決済業者 |

**進化のドライバー**：

- **米国 GENIUS Act** 施行 → 非コンプライアンスステーブルコインの米国市場からの強制撤退
- **EU MiCA** → 非コンプライアンスステーブルコインの EU 市場からの強制撤退（USDT は一部取引所で既に上場廃止）
- **日本 EPI 三型** → ライセンス保有発行体構造の確立
- **香港ステーブルコイン立法** → オフショアチャネルの構造化
- **Tether** が能動的にコンプライアンス市場へ進出しない選択 → グレー市場における覇権を固守

**キー含意**：

1. **ゼロサム確率が顕著に低下**：各極が自身の「主戦場」を有し、極間競争のコストは高い
2. **極間ブリッジングが新インフラに**：たとえば [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環状持株]] が JPY ↔ USDC チャネルを提供
3. **Visa 等大型機関のネットワーク中立戦略**（[[fintech/wall-street-crypto-network-neutrality]] 参照）により極を跨いで手数料徴収が可能
4. **規制アービトラージの余地が継続的に縮小**：各極が厳格な立法を保有し、極を跨ぐコンプライアンス要求が累積

**不確実要因**：

- 中国本土が最終的に海外ステーブルコインを許可するか（HK パイロットを先行案件として）
- インド / ブラジル / アフリカ市場が最終的にどの極に帰属するか（現状は米国陣営とグレー市場の間）
- AI agent 経済の決済プロトコルが地政学分断を突破するか（[[fintech/protocol-hedge-strategy-stripe-pattern|マルチプロトコル hedge]] には極を跨ぐポテンシャル）

**戦略的観察**：

- 投資視点：いずれかの極へのシングルベットは地政学リスクを抱える、マルチ極配分（USDC + JPYC + EURC）の方が頑健
- 市場構造視点：日本極における米国極チャネル上の重要ノード（USDC 直結 / Arc チャネル）は重要な戦略拠点となる


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 チェーン級 Denylist]]
- [[fintech/wall-street-crypto-network-neutrality|Wall Street ネットワーク中立投資]]
- [[fintech/tether-business-model-short-treasury-yield|Tether ビジネスモデル]]
<!-- /wiki-links:managed -->
