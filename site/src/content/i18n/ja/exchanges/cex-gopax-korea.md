---
source: exchanges/cex-gopax-korea
source_hash: 74261e82046debf2
lang: ja
status: machine
fidelity: ok
title: "GOPAX（고팍스）— 韓国 CEX / Binance 出資の概要"
translated_at: 2026-07-29T12:03:55.000Z
---
# GOPAX（고팍스）— 韓国 CEX / Binance 出資の概要

## ウィキ上の位置づけ

この項目は [[exchanges/INDEX|exchanges index]] に属する。韓国の peer / 規制文脈として [[exchanges/korea-cex-five-pillars-comparison|韓国 5 大 CEX 制度比較]]、最も近い top-tier peers として [[exchanges/cex-upbit-korea|Upbit]] / [[exchanges/cex-bithumb-korea|Bithumb]]、より広いシステム / 市場境界として [[exchanges/global-cex-top10-comparison|global CEX top 10 comparison]] と併読する。

> 2017-11 ローンチ · Streami（스트리미）が運営 · **Binance が 2023-02-03 に GOPAX への投資を発表** · GoFi（GOPAX Earn）は Genesis Global の流動性停止の影響を受けた

## 1. 法人・株主

- 商号：주식회사 스트리미（Streami Inc.）— 持株 / 事業会社
- 設立：2015-04（Streami 設立）/ 2017-11（GOPAX 取引所ローンチ）
- 本店所在地：ソウル特別市江南区
- 創業者：이준행（Lee Joon-haeng）— Streami 創業者、ブロックチェーン送金事業を出発点とする
- **投資開示の境界**：
  - **Binance** は **2023-02-03** に Industry Recovery Initiative を通じた GOPAX への投資を発表した
  - Binance の公式発表は投資目的を GoFi 利用者支援と説明する一方、持株比率を記載していない
  - 本項では、報道上の持株比率や未完了の規制手続から現在の支配関係を推定しない

## 2. 登録・牌照状況（韓国制度）

- **가상자산사업자 (VASP)** 登録：FIU 登録済（2021-09 韓国第 1 期登録クラス）
- **ISMS / ISMS-P 認証**：KISA ISMS-P 保有
- **실명확인 입출금 계정**（実名確認入出金口座）：**전북은행（Jeonbuk Bank、JB금융그룹）** との契約
  - 전북은행は地方銀行（regional bank）であり、GOPAX の法定通貨導線はこの実名口座契約を前提とする
  - 銀行側の AML/CFT 確認と取引所側の VASP 義務を分けて扱う
- **Binance 投資**：2023-02-03 の公式発表と KoFIU の届出状況を別々の証拠として扱い、投資発表だけから変更届の処理結果を推定しない
- 詳細制度は [[exchanges/korea-cex-five-pillars-comparison|韓国 5 大 CEX 制度比較]] 参照

## 3. 取扱通貨

- KRW spot 市場（韓国 5 大 CEX の 1 つとして合法）
- 取扱銘柄は随時変わるため、本項では固定件数や同業間の多寡を置かない
- BTC / ETH / 主要アルトコイン中心
- 上場審査：DAXA 共通基準 + GOPAX 独自基準

## 4. 業務範囲

- 現物 spot 取引（KRW pair 中心）
- 派生・margin 取引：**韓国 VASP 規制下では非提供**
- **GoFi（GOPAX Earn）**：lending 商品、2022 末に **Genesis Global 破産エクスポージャー事故**（Genesis Capital などグローバル lending 事業者の破産影響により GoFi 出金停止事態が発生）
- staking：限定的サービス
- 法定通貨入金：전북은행 実名口座経由のみ
- B2B / 機関向け：API 取引、OTC

## 5. 規模情報の読み方

- 市場シェア、24h volume、順位は観測時点とデータ提供者で変わるため、本項では固定値を採用しない
- 韓国 CEX の比較では、KRW market、同一基準日、実名口座の有無を揃えて照合する
- GOPAX は KoFIU の仮想資産事業者届出状況に掲載されており、顧客向け KYC / AML の制度境界は登録情報と分けて確認する

## 6. 沿革・重大事件

出典: 表全体は [Binance の GOPAX 投資発表](https://www.binance.com/en/blog/ecosystem/2331858048818231109) と [KoFIU の仮想資産事業者届出状況](https://www.kofiu.go.kr/kor/notification/notice.do)（2026-07-29 確認）に基づく。

| 時期 | 事項 |
|------|------|
| 2023-02-03 | Binance が GOPAX への投資と株式取得を発表 |
| 2026-06-30 基準 | KoFIU の仮想資産事業者届出状況に GOPAX が掲載 |

## 7. 戦略動向

- **Binance 投資の開示境界**：2023-02-03 の公式発表で確認できるのは投資と GoFi 利用者支援であり、現在の持株比率や規制上の承認状態は同発表から推定しない
- **GoFi 対応**：Genesis Global の流動性停止が GoFi に波及した事例として、外部 lending counterparty への依存と利用者保護を分けて検証する
- **전북은행 関係**：実名口座契約を法定通貨導線として確認し、銀行側と VASP 側の AML/CFT 責任を分けて検証する
- **DAXA 参加**：[[exchanges/cex-upbit-korea|Upbit]] / [[exchanges/cex-bithumb-korea|Bithumb]] / [[exchanges/cex-coinone-korea|Coinone]] / [[exchanges/cex-korbit-korea|Korbit]] とともに DAXA で上場基準を共通化
- **2024 利用者保護法対応**：利用者保護基金拠出、不公正取引監視強化、内部統制再構築
- **Binance との関係**：将来の流動性・銘柄・技術統合を実装済みとは扱わず、公式に確認できる投資開示の範囲に限定する

## 8. 業界での位置付け

GOPAX は、韓国で届出された VASP にグローバル CEX が投資した事例として、規制当局・投資家・国内事業者の開示境界を検討するケースである。

[[exchanges/korea-cex-five-pillars-comparison|韓国 5 大 CEX 制度比較]] では、KoFIU の届出状況、実名口座、投資開示を別々の証拠として扱う。本項は報道上の順位・持株比率・規制交渉の将来結果を固定しない。

GoFi 事態はまた、[[exchanges/global-crypto-exchange-bankruptcy-comparison|글로벌 CEX 파산 비교]] の文脈で **グローバル lending 事業者の倒産が韓国 CEX の子会社 lending 商品へ波及するパターン** の事例として重要である。

## 関連項目

- [[exchanges/cex-upbit-korea]] — 韓国 CEX comparison

- [[exchanges/cex-bithumb-korea]] — 韓国 CEX comparison

- [[exchanges/cex-coinone-korea]] — 韓国 CEX peer
- [[exchanges/cex-korbit-korea]] — 韓国 CEX peer
- [[exchanges/korea-cex-five-pillars-comparison]] — 韓国 5 大 CEX 制度比較
- [[exchanges/global-cex-top10-comparison]] — グローバル CEX top 10（Binance 関連）
- [[exchanges/global-crypto-exchange-bankruptcy-comparison]] — グローバル CEX 破綻比較（GoFi / Genesis 関連）
- [[exchanges/global-vasp-regulatory-comparison-matrix]] — グローバル VASP 規制比較
- [[exchanges/INDEX]] — 取引所ドメインインデックス

## 出典

- 公開情報整理 (GOPAX / Streami 公式 IR, gopax.co.kr / streami.io)
- 公開情報整理 (Binance 2023-02 GOPAX 持分取得発表, binance.com Blog)
- 公開情報整理 (FSC / FIU 仮想資産事業者登録変更関連情報)
- 公開情報整理 (전북은행 / Jeonbuk Bank 実名確認入出金口座報道)
- 公開情報整理 (GoFi GOPAX Earn 事態 / Genesis Global 破産エクスポージャー報道, コインデスクコリア / Korea Herald)
- 公開情報整理 (Binance グローバル米国 SEC / DOJ 合意 2023-11 $4.3B 罰金 / CZ 退任報道, Reuters / CoinDesk / The Block)
- 公開情報整理 (DAXA 自主規制協議体発表)
- 公開情報整理 (仮想資産利用者保護法 2024-07 施行関連報道)
- 公開情報整理 (Binance 韓国 FIU 変更届交渉停滞関連報道 2023–2025)
