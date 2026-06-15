---
source: banking/mercari-bank-license-stack
source_hash: 2a2686c6a3dc6811
lang: ja
status: machine
fidelity: ok
title: "メルカリバンク ライセンススタック"
translated_at: 2026-06-02T11:47:37.280Z
---

# メルカリバンク ライセンススタック


## ウィキ上の位置づけ

このエントリは [[banking/INDEX|banking index]] の下に位置する。隣接する文脈については [[banking/cooperative-banking-japan|Cooperative banking in Japan]] と、より広範なシステム境界については [[banking/regional-bank-consolidation-pattern|Regional bank consolidation pattern]] と併せて読むこと。

## 要約

メルカリバンクは「メルペイが銀行になった」案件ではない。銀行口座の主体は [[banking/minna-bank-baas-model|みんなの銀行]]、メルペイは電子決済等代行業者として API 接続・口座情報表示・資金移動指図のレイヤーを担う。つまり、サービス名は銀行的だが、法的には **banking layer / API instruction layer / Mercari app UX layer** の分業で成立している。

## スタック

| レイヤー | アクター | 役割 |
|---|---|---|
| Banking layer | みんなの銀行 | 普通預金口座、パートナー支店「メルカリ支店」、ATM / 預金関連機能 |
| API / instruction layer | メルペイ | 電子決済等代行業者として、口座情報取得と資金移動指図を扱う |
| Wallet / payment layer | メルペイ | 資金移動業、前払式支払手段、クレジット / 後払い関連登録を持つ決済事業者 |
| UX / marketplace layer | メルカリ app | 売上金、メルペイ残高、おさいふページ、銀行連携導線をユーザーに提示 |

## 電子決済等代行業が説明すること

メルペイの電子決済等代行業表示では、同社が契約済み金融機関の口座資金について、ユーザーから指図を受けて金融機関へ伝達すること、また API 接続で口座情報を取得しサービス上に表示することが開示されている。契約締結済み金融機関として、みんなの銀行が挙げられている。

これにより、メルカリバンクの主要 UX は次のように説明できる。

| UX | 基盤レイヤー |
|---|---|
| メルカリアプリで銀行残高を見る | 電代業 + みんなの銀行 API |
| 売上金 / メルペイ残高を銀行口座へ即時に送る | メルペイの指図 + みんなの銀行口座 |
| メルカリ支店を開く | みんなの銀行のパートナー支店 |
| ATM 出金優遇を見る | みんなの銀行側の優遇プログラム |

## 重要な訂正

旧メモでは「銀行代理業 + BaaS 連携」が必要条件のように書かれていたが、公開ソースだけではメルペイの銀行代理業登録を前提にできない。むしろメルペイの電代業表示は、同社が銀行等を代理して電子決済等代行業を行うものではない、と誤認防止の線引きを置いている。

したがって、このページでは次のように扱う。

- **confirmed**: メルペイは電子決済等代行業者としてみんなの銀行と契約している。
- **confirmed**: メルペイは資金移動業者、前払式支払手段発行者など複数の金融登録を持つ。
- **confirmed**: メルカリバンクはみんなの銀行口座をメルカリアプリからメルペイと API 連携して使うサービス。
- **not assumed**: メルペイが銀行業者または銀行代理業者であること。

## BaaS の設計上の教訓

メルカリバンクは、[[banking/baas-japan-landscape|BaaS 日本ランドスケープ]] の本質を「ライセンスを丸ごと取ること」ではなく「既存ライセンスと銀行 API をどこで接続するか」として示す案件。[[exchanges/jp-exchange-mercoin|メルコイン]] など同グループの暗号資産交換業者、証券アプリ、EC アプリが同じ UX を目指す場合、まず切り分けるべきは次の 4 点（親会社の最新像は [[payment-firms/mercari-hd|メルカリ HD]] 参照）。

1. 預金口座を誰が提供するか。
2. 口座情報表示と資金移動指図を誰が扱うか。
3. 自社残高 / ポイント / 売上金と銀行口座の間をどう動かすか。
4. ユーザーに銀行アプリを開かせるか、自社アプリ内で完結させるか。

## 関連項目

- [[banking/mercari-bank]]
- [[banking/minna-bank-baas-model]]
- [[banking/baas-japan-landscape]]
- [[banking/quick-deposit-four-methods]]
- [[fintech/japan-financial-regulation]]
- [[payments/cashless-jp-landscape]]

## 出典

- メルカリ: 電子決済等代行業に関する表示等.
- メルペイ: About / license and registration information.
- みんなの銀行 / メルペイ, 2025-12-18: メルカリバンク service launch release.
- 金融庁: 免許・許可・登録等を受けている事業者一覧.
