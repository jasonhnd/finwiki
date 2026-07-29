---
title: 国内機関カストディ三強構造 — Komainu / Ginco / Fireblocks Japan 比較
aliases:
  - JP institutional custody comparison
  - 国内機関カストディ三強
  - Komainu Ginco Fireblocks Japan
domain: exchanges
created: 2026-05-19
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
confidence: likely
tags:
  - exchanges
  - custody
  - institutional
  - mpc
  - cold-storage
  - jp-custody
sources:
  - https://komainu.com/about/
  - https://komainu.com/expertise/custody-technology/
  - https://www.ginco.co.jp/en/service/enterprise-wallet--en
  - https://developers.fireblocks.com/docs/what-is-fireblocks
status: active
---

# 国内機関カストディ三強構造 — Komainu / Ginco / Fireblocks Japan 比較

## 概要

本稿は、国内事業者から参照される機関向けカストディ／ウォレット基盤のうち Komainu、Ginco、Fireblocks の三者を、各社公式資料で確認できる技術方式と提供機能に限定して比較する。市場シェア、順位、顧客数の国内比較を示すものではなく、法的なカストディ主体と技術ベンダーも区別する。

## 三社プロファイル

### Komainu Holdings (英国 Jersey)
- 2018 設立 · 野村 HD + CoinShares + Ledger 三者合弁による [[exchanges/jp-custody-komainu]]
- 公式技術説明では HSM と MPC を組み合わせ、オフライン環境で QR コードを介した署名フローを採用
- 機関向けカストディを提供。具体的な顧客関係は各公表時点の一次資料を優先する

### 株式会社 Ginco (国内独立系)
- Ginco Enterprise Wallet と Ginco Node を提供 [[exchanges/jp-custody-ginco]]
- 公式説明では秘密鍵を HSM に分散し、専用のオフライン署名端末を利用する。MPC 方式とは記載しない
- 法人向けウォレット／ノード基盤として提供され、個別顧客や資本系列は公表資料ごとに確認する

### Fireblocks Japan (海外 vendor 日本法人)
- Fireblocks プラットフォームを日本で提供する法人／事業レイヤー [[exchanges/jp-custody-fireblocks-japan]]
- **MPC ベースのウォレット基盤 + Policy Engine + ワークフロー**
- グローバル顧客数は Fireblocks の公表時点で変動するため、国内順位や固定的な市場規模には用いない

## 技術 / ビジネスモデル比較

下表は各社公式の技術・サービス説明を 2026年7月29日に確認したスナップショットである。製品構成や実装は更新され得る。 ^[Sources: https://komainu.com/about/; https://komainu.com/expertise/custody-technology/; https://komainu.com/services/custody/; https://www.ginco.co.jp/en/service/enterprise-wallet--en; https://developers.fireblocks.com/docs/what-is-fireblocks.]

| 軸 | Komainu | Ginco | Fireblocks |
|---|---|---|---|
| 公式資料で確認できる鍵管理 | HSM + MPC、オフライン QR 署名 | HSM への分散保管、専用オフライン署名端末 | MPC ベースのウォレット基盤 |
| 主な提供機能 | 機関向けカストディ | Enterprise Wallet、ノード提供 | Policy Engine、送受信・トレジャリー等のワークフロー |
| 法人・出自 | Nomura / CoinShares / Ledger が 2018年に設立した Jersey 法人 | 日本法人 Ginco | Fireblocks のグローバル技術基盤 |

## 規制位置づけ

「B2B インフラであるため登録不要」と一律には判断できない。暗号資産を業として管理する主体、鍵への支配、契約構造によって規制上の評価が変わるため、[[exchanges/fsa-vasp-registration-system|金融庁の登録制度]]と各契約主体の現行登録を個別に確認する。本稿は三者の日本での免許要否を認定しない。

## 競合層 (海外比較)

Anchorage、Coinbase Custody、BitGo、Fidelity Digital Assets などの海外事業者との機能比較は本稿の対象外とする。日本での提供可否や提携状況は変動するため、各社の現行公式資料で確認する。

---
来源: Komainu / Ginco / Fireblocks 各社公式コーポレート・技術資料
