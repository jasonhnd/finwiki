---
source: exchanges/cex-mercado-bitcoin-brazil
source_hash: ae0b04ee64890c63
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Mercado Bitcoin — ブラジル CEX / RWA トークン化の概要"
translated_at: 2026-07-29T12:03:55.000Z
---
﻿
# Mercado Bitcoin — ブラジル CEX / RWA トークン化の概要

## ウィキ上の位置づけ

このエントリは [[exchanges/INDEX|exchanges index]] 配下に位置する。ブラジルで最も近い比較対象・対照文脈については [[exchanges/cex-foxbit-brazil|Foxbit]]、より広いグローバル基準については [[exchanges/global-cex-top10-comparison|global CEX top 10 comparison]]、CEX 上の RWA 領域については [[exchanges/rwa-tokenization-cex-integration|RWA tokenization × CEX integration]] とあわせて読む。

> 2013-07 設立 · ブラジルの BRL 現物 CEX · 2TM Group 持株 · 2021-07 SoftBank Latin America Fund リード $200M · BCB / CVM 規制下 · RWA tokenization を展開

## 1. 法人・株主

- 商号（事業会社）：**Mercado Bitcoin Serviços Digitais Ltda.**
- 持株会社：**2TM Participações S.A.**（2TM Group）
- 設立：2013-07（São Paulo, Brazil）
- 創業者：Gustavo Chamati, Maurício Chamati, Mauro Andrade
- 主要株主・資金調達ラウンド：
  - **SoftBank Latin America Fund**：2021-07 リード Series B $200M、評価額 **$2.1B（南米暗号通貨業界初の Unicorn）**
  - **2X Capital**：南米暗号通貨専門 VC、複数ラウンド参加
  - **Tribe Capital** — Series B
  - **DST Global**（Yuri Milner 系）— Series B
  - **Coinbase Ventures** — 戦略出資
  - **Parallel Ventures** — 早期投資
  - **GP Investments**：ブラジル現地 PE 出資
- 子会社・グループ会社：
  - **Mercado Bitcoin Bank**（payment processor 関連）
  - **MB Tokens**（tokenization 子会社）
  - **Portal**（Web3 ウォレット / infrastructure）

## 2. 登録・牌照状況（ブラジル制度）

- **Banco Central do Brasil (BCB) 認可**：**Lei 14.478/2022（marco legal de criptoativos、暗号資産法、2022-12 公布、2023-06 施行）** 下で BCB が VASP（**Prestadores de Serviços de Ativos Virtuais, PSAV**）の認可・監督機関に指定
  - BCB は 2025 年に Resolutions 519 / 520 / 521 を公表し、主要な認可・業務ルールは 2026-02-02 に発効。既存事業者には移行手続が適用される
- **CVM（Comissão de Valores Mobiliários、ブラジル証券委員会）**：トークン化証券（tokenized securities）監督機関、**MB Tokens** の RWA tokenization は CVM 規制下
- **Receita Federal**：暗号通貨課税 / 取引報告義務（**月次取引 BRL 30,000 超は申告義務**）
- **AML/CFT**：COAF（Conselho de Controle de Atividades Financeiras、ブラジル版 FIU）への報告義務

## 3. 取扱通貨

- BRL 現物市場
- 主要暗号資産とブラジル関連商品を扱う。個別の取扱銘柄は随時変わるため、本項では固定件数を置かない
- USDT / USDC market 併設
- **MB Tokens（RWA tokenization）**：**precatórios（裁判所判決債権）**、不動産持分、農業 receivable 等のトークン化商品を販売（ブラジル独自の RWA ユースケース）

## 4. 業務範囲

- 現物取引（BRL pair 中心）
- 派生：先物・margin 取引は限定的、規制環境を慎重に観察
- staking：限定的（カスタディアル staking）
- **RWA tokenization**：MB Tokens 経由で precatórios / 不動産 / 農業 receivable / 中小企業債権 / 太陽光発電 receivable 等のトークン化商品提供（**ブラジルでは Lei 14.478/2022 + CVM ICVM 88 でユーティリティトークンと証券トークンの線引き運用**）
- 法定通貨入金：**PIX**（ブラジル中央銀行即時決済システム）統合、TED / DOC 経由
- 機関向け：MB Institutional、OTC desk

## 5. 規模情報の読み方

- 市場シェア、24h volume、順位、利用者数は観測時点と集計対象で変わるため、本項では固定値を採用しない
- ブラジル市場の同業比較では、BRL pair、対象期間、国内外プラットフォームの範囲を揃えて照合する
- 静的な企業規模の参照点として、2021-07 の $200M Series B と当時の公表 valuation を区別して扱う

## 6. 沿革・重大事件

出典: 表全体は [Mercado Bitcoin 公式会社紹介](https://www.mercadobitcoin.com.br/quem-somos)、[Lei 14.478/2022](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14478.htm)、[Banco Central do Brasil の規制発表](https://www.bcb.gov.br/detalhenoticia/20918/nota?s=08)（2026-07-29 確認）に基づく。

| 時期 | 事項 |
|------|------|
| 2013 | Mercado Bitcoin の事業を開始 |
| 2022-12 | Lei 14.478/2022 を公布 |
| 2025 | BCB が PSAV 向け Resolutions 519 / 520 / 521 を公表 |
| 2026-02-02 | BCB の主要な認可・業務ルールが発効し、既存事業者の移行期間が開始 |

## 7. 戦略動向

- **RWA tokenization 戦略**：precatórios / 農業 receivable 等のブラジル特有 RWA を商品化し、[[exchanges/rwa-tokenization-cex-integration|RWA × CEX integration]] の地域事例を構成
- **PIX 統合**：ブラジル中央銀行即時決済システム PIX を法定通貨導線として利用
- **BCB / CVM 規制対応**：Lei 14.478/2022 下の PSAV 制度と CVM の証券性判断を別々の規制境界として扱う
- **SoftBank との関係**：SoftBank Latin America Fund の継続的サポート、Latin America Fund のポートフォリオ企業との連携機会
- **地域比較**：アルゼンチン / コロンビア / メキシコ等の事業は、実際の法人・認可・商品提供が確認できる場合に限って記録する
- **Stablecoin 対応**：USDT / USDC market など、現行商品として確認できる範囲を記録する

## 8. 業界での位置付け

Mercado Bitcoin は、ブラジル現地規制（Lei 14.478/2022 と CVM の証券性判断）、RWA tokenization、機関投資家からの資金調達を併せて検討できる地域 CEX の事例である。

[[exchanges/cex-foxbit-brazil|Foxbit]] との比較では、RWA 商品、資金調達、PIX 導線、規制対応を個別に照合する。本項は変動する国内外の順位や優位性を固定しない。

## 関連項目

- [[exchanges/cex-foxbit-brazil]] — ブラジル BRL 現物 CEX 比較（最重要相互リンク）
- [[exchanges/global-cex-top10-comparison]] — グローバル CEX top 10
- [[exchanges/rwa-tokenization-cex-integration]] — RWA tokenization × CEX 統合
- [[exchanges/global-vasp-regulatory-comparison-matrix]] — グローバル VASP 規制比較
- [[exchanges/INDEX]] — 取引所ドメインインデックス
- [[exchanges/cex-coindcx-india]] — 新興国 CEX 比較対照
- [[exchanges/cex-bithumb-korea]] — アジア地域 CEX 比較対照

## 出典

- 公開情報整理 (Mercado Bitcoin / 2TM 公式 IR, mercadobitcoin.com.br / 2tm.io)
- 公開情報整理 (Banco Central do Brasil / CVM 仮想資産規制声明・通達)
- 公開情報整理 (Lei 14.478/2022 marco legal de criptoativos 官報資料)
- 公開情報整理 (SoftBank Latin America Fund 2021-07 $200M 投資ラウンド発表)
- 公開情報整理 (2X Capital / Tribe Capital / DST Global / Coinbase Ventures 投資ラウンド報道)
- 公開情報整理 (BCB ATIVOS VIRTUAIS regulação 2024-2025 公開資料)
- 公開情報整理 (MB Tokens precatórios tokenization 商品展開報道, Valor Econômico / Folha de S.Paulo / CoinDesk Brasil)
- 公開情報整理 (PIX 統合関連 Banco Central do Brasil 公開資料)
