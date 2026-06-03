---
source: exchanges/jp-crypto-staking-as-a-service-operators
source_hash: f43328f5505d7180
lang: ja
status: machine
fidelity: ok
title: "国内向けステーキング・アズ・ア・サービス (StaaS) 事業者層"
translated_at: 2026-06-02T12:19:04.221Z
---

# 国内向けステーキング・アズ・ア・サービス (StaaS) 事業者層

## ウィキ上の位置づけ

本項目は [[exchanges/INDEX|exchanges index]] 配下に位置づける。同業比較・対照文脈は [[exchanges/jp-institutional-custody-three-pillars|国内機関カストディ三本柱]]、より広い制度・規制境界は [[exchanges/jvcea-self-regulatory-overview|JVCEA 自主規制]] と併読する。

## 概要

PoS 系チェーン (Ethereum / Solana / Cardano / Polkadot / Cosmos / Tezos / Avalanche 等) のバリデータ運用を専門会社に委託する**ステーキング・アズ・ア・サービス (StaaS)** 市場は、Ethereum The Merge (2022-09) 以降、機関投資家向けで急成長。国内では**国内 VASP のリテール・サービス**と**海外 StaaS 事業者の機関向け B2B 提供**の二層構造が存在する。FSA は「カストディアンによる委託ステーキング = 暗号資産交換業の範囲内」とする運用解釈で、リテール向け委託ステーキングは VASP ライセンス保有者に限定。

## 国内 VASP のリテールステーキングサービス

国内 FSA 登録 VASP 各社が自社カストディ顧客向けに提供:

- **[[exchanges/jp-exchange-bitflyer|bitFlyer]] (旧 SBI VC Trade 系)** — ETH / SOL / DOT 等のステーキング報酬を顧客に分配 (公式 "ステーキング" ページ参照)
- **[[exchanges/jp-exchange-gmo-coin|GMO コイン]]** — DOT / TEZ / XTZ / ATOM 等の対象通貨を順次拡大
- **[[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]** — ETH / SOL / DOT / ADA / ATOM 等の幅広いカバー
- **[[exchanges/jp-exchange-coincheck|Coincheck]]** — レンディング + ステーキング双方を提供
- **[[exchanges/jp-exchange-bitbank|bitbank]]** — XTZ / DOT 等を提供
- **[[exchanges/jp-exchange-bittrade|BitTrade]] (HUOBI 系)** — グローバル HUOBI のステーキング商品の国内展開

報酬率は通貨により年率 1-10% 程度、VASP の手数料控除後に顧客に分配。**法的性質は「暗号資産の貸借 / 預け入れ」相当**として、預けた数量分だけ報酬を後日返却するスキーム。

## 海外 StaaS 事業者の対日 B2B 提供

機関投資家向け StaaS は海外専門事業者が支配。国内法人不在のため、**国内機関は海外契約 + KYC + Travel Rule 経由でアクセス**:

- **Kiln (旧 SkillZ・パリ本拠 2018-)** — 機関グレード非カストディアル StaaS。**B2B API + ダッシュボード**。Komainu と提携、Crypto.com・Ledger Live・Stakewise 等 100+ 統合
- **Figment (カナダ・トロント 2018-)** — Coinbase Custody・Anchorage Digital・BitGo 等北米機関カストディアンと深い統合。**多チェーン対応 (40+ チェーン)**
- **Allnodes / Stakefish / Chorus One / P2P.org / Blockdaemon** — それぞれ独立系で機関 + リテール混合
- **Coinbase Cloud (旧 Bison Trails)** — グローバル機関向け、Coinbase 系プロダクトと統合
- **Lido (DAO ベース)** — 非中央集権 Liquid Staking プロトコル。**機関向け Lido Institutional (DSL)** ストリームを 2024 開始

### 国内機関の利用パターン

国内機関 (生保 / 信託 / FoF) が ETH ステーキング露出を取る場合の典型ルート:

1. **[[exchanges/jp-custody-komainu|Komainu]] (野村 HD + CoinShares + Ledger JV) + Kiln** — 直接バリデータ + 報告書一体提供
2. **[[exchanges/jp-custody-fireblocks-japan|Fireblocks Japan]] + 海外バリデータ (Figment / Chorus One)** — Fireblocks MPC ウォレットを介した非カストディアル委託
3. **国内 VASP の機関向け OTC + ステーキング組合せ** — [[exchanges/jp-crypto-market-maker-otc-layer|国内 MM / OTC 層]] 経由

## 規制論点

- **資金決済法**：委託ステーキング = 暗号資産の管理業務 → VASP 登録必要 (FSA 運用解釈)
- **金商法上の有価証券該当性**：Lido stETH / リキッドステーキングトークン (LST) の有価証券性は未確定
- **税務**：ステーキング報酬 = 受領時の時価で課税 (個人=雑所得・法人=益金) → [[exchanges/jp-crypto-asset-taxation-detailed|暗号資産税制]]
- **会計**：JICPA 業種別委員会実務指針 (報酬認識タイミング・帳簿価額) は議論継続中
- **AML / Travel Rule**：[[exchanges/jp-vasp-aml-travel-rule-implementation|犯収法 + FATF Travel Rule]] の対象範囲解釈
- **JVCEA 規則**：[[exchanges/jvcea-self-regulatory-overview|JVCEA]] が「暗号資産の貸借に関する規則」でステーキング含む貸借取引の上限規制を運用

## Liquid Staking Token (LST) と国内取り扱い

stETH (Lido) / rETH (Rocket Pool) / cbETH (Coinbase) 等の LST は、国内 JVCEA WhiteList 上場は未だ限定的。**ETH 直接 + 国内 VASP 委託ステーキング**が主流。今後 LST の国内取扱可否は規制 + JVCEA WhiteList の進展次第。

## 監査 + 法務との連携

StaaS 利用機関は **[[exchanges/japan-crypto-audit-firm-landscape|監査法人]]** と **[[exchanges/japan-crypto-law-firm-landscape|法律事務所]]** に並行助言を求める。バリデータスラッシング・MEV (Maximum Extractable Value) ガバナンス・複数バリデータ分散ポリシー等が論点。

## 関連項目

- [[exchanges/jp-institutional-custody-three-pillars]] — 機関カストディ
- [[exchanges/jp-custody-komainu]] — Komainu
- [[exchanges/jp-custody-fireblocks-japan]] — Fireblocks Japan
- [[exchanges/jp-custody-ginco]] — Ginco
- [[exchanges/jp-crypto-market-maker-otc-layer]] — MM / OTC 層
- [[exchanges/jvcea-self-regulatory-overview]] — JVCEA
- [[exchanges/fsa-vasp-registration-system]] — FSA 登録制度
- [[fintech/japan-financial-regulation]] — 上位金融規制

## 出典

- Kiln 公式: https://www.kiln.fi/
- Figment 公式: https://www.figment.io/
- bitFlyer ステーキング: https://www.bitflyer.com/ja-jp/staking
- GMO コイン: https://coin.z.com/jp/
- SBI VC Trade: https://www.sbivc.co.jp/
- JVCEA 公式 (規則類): https://jvcea.or.jp/
