---
source: exchanges/cex-coindcx-india
source_hash: 9d89b31ce00cab65
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "CoinDCX — インド CEX / FIU-IND PMLA 報告主体の概要"
translated_at: 2026-07-29T12:03:55.000Z
---
# CoinDCX — インド CEX / FIU-IND PMLA 報告主体の概要

## ウィキ上の位置づけ

本項目は [[exchanges/INDEX|exchanges index]] 配下に位置する。インドにおける最も近い同業比較・対照の文脈では [[exchanges/cex-wazirx-india|WazirX]]、より広いグローバル・ベンチマークでは [[exchanges/global-cex-top10-comparison|global CEX top 10 comparison]]、規制境界の見方では [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較]] と併読する。

> 2018-04 設立 · インド INR 現物 CEX · B Capital / Pantera 出資 · FIU-IND PMLA 登録報告主体 · 2022-04 Series D（評価額約 $2.15B）

## 1. 法人・株主

- 商号：Neblio Technologies Private Limited（ブランド名 **CoinDCX**）
- 設立：2018-04
- 本店所在地：Mumbai, Maharashtra, India（インド・ムンバイ）
- 創業者：Sumit Gupta（CEO）, Neeraj Khandelwal（CTO）
- 主要株主・資金調達ラウンド：
  - **Bain Capital Ventures** — Series A
  - **B Capital Group**（Eduardo Saverin 共同設立）— Series B / Series C / Series D 連続
  - **Pantera Capital** — Series A / Series B
  - **Polychain Capital** — 早期投資
  - **Coinbase Ventures** — 戦略出資
  - **Block.one** — Series A 期出資
  - **Jump Crypto** — Series D 出資
  - **Kingsway Capital** — Series D
  - **Steadview Capital** — Series D
- **2022-04 Series D 資金調達**：$135M、$2.15B valuation で **インド暗号通貨業界初の Unicorn** に

## 2. 登録・牌照状況（インド制度）

- **FIU-IND（Financial Intelligence Unit – India）登録**：**PMLA（Prevention of Money Laundering Act, 2002）報告主体** として 2023 年に登録を公表
  - インド政府が 2023-03 に PMLA を拡張し VASP を **報告主体** に指定したことを受けた登録
  - 国内 VDA（Virtual Digital Asset）プラットフォームに対する初の本格的 AML/CFT 規制適用
- **GST 登録**：取引手数料に 18% GST 課税
- **1% TDS（Tax Deducted at Source）**：2022-07-01 施行、すべての VDA 取引に源泉徴収（インド居住者）
- **30% capital gains 課税**：VDA 売却益への一律 30% 課税（2022-04 施行、損失通算不可）
- **RBI / SEBI**：直接的な VASP 認可制度は 2026 年時点で未整備（FIU-IND 登録が事実上の最高位ライセンス）

## 3. 取扱通貨

- INR 現物市場（PMLA 報告主体 として合法）
- INR 建てと stablecoin 建ての現物商品を扱う。個別の取扱銘柄は随時変わるため、本項では固定件数を置かない
- USDT / USDC 市場併設
- CoinDCX Pro / CoinDCX Go の 2 アプリ並立構造（プロ向け / 初心者向けの UX 分離）

## 4. 業務範囲

- 現物現物取引（INR pair 中心）
- 派生：先物取引（**国際版 CoinDCX International** として オフショア経由提供、インド国内ユーザー向けは規制リスクで縮小）
- staking：限定的サービス（DC X Earn 商品）
- 法定通貨入金：インド国内銀行口座経由（IMPS / UPI / NEFT）。**UPI ルート**は銀行側の暗号通貨対応姿勢により断続的に制限あり
- B2B / 機関向け：DCX Insurance、カストディ は CoinDCX カストディ（一部機関投資家向け）

## 5. 規模情報の読み方

- 市場シェア、24h volume、順位、取扱銘柄数は観測時点と集計対象で変わるため、本項では固定値を採用しない
- 同業比較では、インド国内サービスと国際版を混在させず、同一の基準日・市場・通貨ペアで照合する
- 静的な企業規模の参照点として、2022-04 Series D の $135M 調達と約 $2.15B valuation を区別して扱う

## 6. 沿革・重大事件

出典: 表全体は [CoinDCX 公式会社紹介](https://coindcx.com/about-us/) と [CoinDCX 自社による FIU-IND 登録発表](https://coindcx.com/blog/announcements/coindcx-is-now-fiu-registered/)（2026-07-29 確認）に基づく。

| 時期 | 事項 |
|------|------|
| 2018 | CoinDCX を設立 |
| 2023-12-08 | CoinDCX が FIU-IND 登録報告主体であることを公式発表 |

## 7. 戦略動向

- **規制対話戦略**：インド政府（財務省 / FIU-IND / RBI / SEBI）との継続的対話、業界団体 **Bharat Web3 Association (BWA)** の主要メンバーとして規制整備を推進
- **レジリエンス開示**：[[exchanges/cex-wazirx-india|WazirX]] の 2024-07 incident は地域の custody risk を比較する文脈に限定し、CoinDCX への市場シェア移転は推定しない
- **CoinDCX Ventures**：Web3 / インド系 Web3 プロジェクトへの投資ファンド、エコシステム拡張戦略
- **国際展開**：CoinDCX International（オフショア法人）経由で先物 / レバレッジ取引、ただしインド国内ユーザーへの提供は規制リスク管理下
- **1% TDS 対応**：インド独自の源泉徴収制度に対する自動計算 / 報告システム実装、海外 CEX（[[exchanges/jp-foreign-exchange-bybit|Bybit]] / [[exchanges/jp-foreign-exchange-bitget|Bitget]] 等の オフショア）への顧客流出に対抗
- **proof-of-reserves**：定期的な PoR 公表で透明性アピール、グローバル CEX のベストプラクティスに準拠

## 8. 業界での位置付け

CoinDCX は、FIU-IND 登録、機関投資家からの資金調達、2022-04 Series D valuation を併せて確認できるインド CEX の事例である。本項は変動する市場順位や地域支配性を固定せず、規制・企業・商品情報を分けて扱う。

インド市場の構造的特徴は **(a) 1% TDS による取引量縮小**、**(b) 30% capital gains の loss-offset 不可**、**(c) FIU-IND PMLA 登録による国内 KYC/AML 統制**、**(d) UPI 銀行アクセスの不安定性** — これらが [[exchanges/cex-wazirx-india|WazirX]] / CoinDCX / ZebPay 等の国内 CEX の業績ボラティリティを大きく規定する。

## 関連項目

- [[exchanges/cex-wazirx-india]] — インド CEX / 2024-07 cyberattack 比較（最重要クロスリンク）
- [[exchanges/global-cex-top10-comparison]] — グローバル CEX top 10
- [[exchanges/global-vasp-regulatory-comparison-matrix]] — グローバル VASP 規制比較
- [[exchanges/INDEX]] — 取引所ドメインインデックス
- [[exchanges/global-crypto-forensics-vendor-layer]] — Liminal 等カストディ/forensics 層
- [[exchanges/jp-foreign-exchange-bybit]] — インド居住者の オフショア流出先比較
- [[exchanges/cex-bithumb-korea]] — アジア地域 CEX 比較対照

## 出典

- 公開情報整理 (CoinDCX 公式 IR / About ページ, coindcx.com)
- 公開情報整理 (FIU-IND PMLA Reporting Entity 登録公示, fiuindia.gov.in)
- 公開情報整理 (B Capital / Pantera Capital / Steadview Capital 投資ラウンド発表)
- 公開情報整理 (Reserve Bank of India / SEBI / 財務省 仮想通貨関連声明・通達)
- 公開情報整理 (CoinDCX Series D 資金調達 2022-04 Unicorn 評価 報道, TechCrunch / Economic Times)
- 公開情報整理 (India 1% TDS 課税制度 2022-07 施行関連 Indian Express / Economic Times 報道)
- 公開情報整理 (Bharat Web3 Association メンバーリスト / 公式声明)
- 公開情報整理 (2024-07 WazirX Liminal hack 後の業界動向 報道, CoinDesk / Decrypt / The Block)
