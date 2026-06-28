---
source: financial-licenses/bank-license-and-baas-boundary
source_hash: a76144a83ecededb
lang: ja
status: machine
fidelity: ok
title: "日本の銀行免許と BaaS 境界"
translated_at: 2026-06-02T14:54:39.079Z
---

# 日本の銀行免許と BaaS 境界

## 概要

日本の BaaS と組込型銀行サービスの記録では、**免許を持つ銀行レイヤー** と **顧客インターフェースレイヤー** を分ける。 預金受入れを支配する公開上の分類は銀行法上の銀行免許ルートである。一方、パートナーブランドのアプリ、口座情報サービス、支払指図サービス、銀行代理チャネルは別の規制ルートを使う場合がある。

本ページは [[financial-licenses/INDEX|JapanFG の法務・金融免許]] に属し、規制境界を [[banking/INDEX|銀行ドメイン]]、[[banking/japan-baas-operating-models|日本の BaaS 運営モデル]]、[[banking/baas-japan-landscape|日本の BaaS ランドスケープ]]、[[payments/japan-bank-api-payment-agency-route|銀行 API・電子決済等代行業ルート]]、[[payments/account-to-account-payment-japan|日本の口座間決済]]、[[payments/merchant-bank-pay-account-direct-acquiring|加盟店の銀行口座直接アクワイアリング]]、[[payments/funds-transfer-vs-prepaid-boundary|資金移動と前払式の境界]]、[[fintech/japan-financial-regulation|日本の金融規制]] に結びつける。

## 制度マップ

| レイヤー | 公開上の分類 | 認可・登録の形態 | 公開上の機能 |
|---|---|---|---|
| 預金取扱銀行 | 銀行法上の `銀行` | 免許 | 銀行側の預金、貸出、為替、決済機能。 |
| 銀行持株会社 | 銀行持株会社ルート | 認可／FSA 一覧ルート | 銀行子会社を支配する持株会社機能。 |
| 銀行代理業 | `銀行代理業者` | 許可 | 銀行の預金・貸出・為替契約に関する代理または媒介。 |
| 電子決済等代行業 | `電子決済等代行業者` | 登録 | 銀行 API・オープンバンキング経由での口座情報および支払指図の媒介。 |
| 電子決済等取扱業 | `電子決済等取扱業` | 登録 | 銀行から委託された、銀行預金債権の電子的な増減と関連する預金契約媒介。 |
| パートナーブランドの BaaS 表面 | パートナーアプリ、支店、UI、または商品ブランド | 役割による | 残高が免許銀行の銀行預金として残る場合がある顧客向けインターフェース。 |
| ウォレット・前払式支払手段レイヤー | 該当する場合の資金移動または前払式ルート | 登録／届出ルート | 非銀行の決済残高、送金債権、前払残高、加盟店決済ルート。 |

## 銀行免許レイヤー

FSA の免許・登録金融機関ポータルは、銀行一覧を `預金取扱等金融機関` の下で公開している。同じポータルには、銀行持株会社、銀行代理業者、外国銀行代理銀行、電子決済等代行業者、その他の規制対象カテゴリも掲載される。2026-05-22 に開いたポータルのスナップショットでは、銀行一覧の基準日は 2026-05-13、電子決済等代行業者一覧の基準日は 2026-04-30 と表示されていた。

BaaS 記録では、銀行免許フィールドは預金債務を負う法的主体を特定する。公開上の根拠は通常、FSA の銀行一覧、銀行の口座規定、サービス規約、パートナー支店または BaaS ページから確認する。銀行運営会社ページは [[financial-licenses/INDEX|financial-licenses INDEX]] の下に置き、[[regional-banks/ssnb|SSNB]]、[[payment-firms/gmo-aozora-net|GMO Aozora Net Bank]]、[[regional-banks/sony-bank|Sony Bank]]、[[regional-banks/ui-bank|UI Bank]]、[[regional-banks/01-bank|01 Bank]] などを含む。

## 銀行代理業ルート

銀行代理業ルートは、許可を受けた仲介ルートである。FSA の監督資料では、銀行代理業務は預金、貸付、為替関連契約を含む銀行契約締結の代理または媒介として説明される。確認すべき公開情報は、所属銀行、銀行代理業者の法的主体、サービス規約、FSA の `銀行代理業者` 一覧である。

銀行代理業は、別個の銀行免許として記録しない。これは所属銀行に結びつく販売・媒介レイヤーである。このルートは [[financial-licenses/foreign-bank-agency-business-route|日本の外国銀行代理業ルート]]、およびフロントエンドブランドと免許銀行が同じ法的レイヤーではないデジタル銀行の販売事例に隣接する。

## 電子決済等代行業ルート

電子決済等代行業ルートは、銀行法上の登録ルートである。銀行との間で口座情報または支払指図を媒介する、オープンバンキング / 銀行 API 型サービスを対象にする。公開情報での検証には、FSA の電子決済等代行業ページと `電子決済等代行業者` 登録簿を用いる。

このルートは [[payments/japan-bank-api-payment-agency-route|日本の銀行 API・電子決済等代行業ルート]]、[[payments/japan-bank-api-incident-and-fraud-control|日本の銀行 API インシデント・不正対策マップ]]、[[payments/account-to-account-payment-japan|日本の口座間決済ルート]] に接続する。登録は API / 媒介レイヤーを示すものであり、それ自体が銀行預金免許や資金移動業登録を示すわけではない。

## 電子決済等取扱業ルート

FSA の電子決済等取扱業ページと関連する監督ルートは、通常の電子決済等代行業登録簿とは別である。このルートは、銀行から委託された銀行預金債権の電子的な増減の媒介に結びつき、その行為に関連する預金契約締結の媒介を含み得る。

このルートは、預金トークン / 銀行発行デジタルマネー媒介における銀行法側の整理である。資金決済法側の電子決済手段等取引業とは区別される。隣接する決済免許ルートは [[financial-licenses/payment-license-stack|Japan payment license stack]] である。

## BaaS 境界フィールド

| フィールド | 公開情報での確認ルート |
|---|---|
| 法的残高保有者 | 銀行口座規定、預金規定、ウォレット規約、FSA 銀行一覧、資金移動業者一覧、前払式支払手段発行者一覧。 |
| 預金債権の状態 | 銀行規定と銀行法上の銀行免許ルート。 |
| フロントエンド運営者 | パートナーサービスページ、アプリ規約、BaaS ページ、銀行代理業開示、電子決済等代行業登録簿。 |
| 所属銀行 | 銀行代理業開示、BaaS パートナー規約、銀行支店 / パートナーページ。 |
| API アクセスルート | FSA 電子決済等代行業者一覧、銀行 API 資料、サービス規約。 |
| 預金トークン / 銀行発行デジタルマネールート | FSA 電子決済等取扱業ページと銀行法上の監督ルート。 |
| 非銀行ウォレットルート | FSA 資金移動業者一覧、前払式支払手段発行者一覧、商品規約。 |
| 利用者向けブランド | パートナー支店ページ、NEOBANK ページ、BaaS ページ、アプリページ。 |

## BaaS の運営レイヤー

| BaaS モデル | 銀行免許の保有者 | パートナー・インターフェース層 | 関連する FinWiki ルート |
|---|---|---|---|
| NEOBANK／パートナーブランド型銀行 | 免許銀行 | パートナーブランドと口座提案 | [[regional-banks/ssnb]], [[banking/japan-baas-operating-models]] |
| パートナー支店型 | 免許銀行 | パートナー支店、アプリ、ブランド口座ルート | [[banking/minna-bank-baas-model]] |
| API 提供型銀行 | 免許銀行（該当する場合は API／電子決済等代行業レイヤーを追加） | 外部アプリ、SaaS、会計、ウォレットサービス | [[payments/japan-bank-api-payment-agency-route]] |
| 法人 API 銀行 | 免許銀行 | 法人銀行 API、財務、会計、プラットフォーム業務フロー | [[payment-firms/gmo-aozora-net]] |
| 銀行代理業ルート | 所属銀行と許可を受けた銀行代理業者 | 代理チャネル／アプリルート | [[regional-banks/ui-bank]] |
| ウォレットと銀行連携 | 銀行口座に加え、資金移動・前払式支払手段・口座連携ルート | ウォレットまたは加盟店決済サービス | [[payments/funds-transfer-vs-prepaid-boundary]] |

## 公開情報による検証チェックリスト

| 確認事項 | 参照する情報欄 |
|---|---|
| 残高は銀行預金か。 | 銀行の口座規定および FSA の `銀行` 一覧。 |
| 顧客残高を負う法的主体はどこか。 | 預金規定、ウォレット規約、発行会社開示、規制対象事業者一覧。 |
| フロントエンドは銀行代理業者か。 | FSA の `銀行代理業者` 一覧およびサービス開示。 |
| フロントエンドは電子決済等代行業者か。 | FSA の `電子決済等代行業者` 登録簿および銀行 API 規約。 |
| 預金トークン／電子的な預金債権ルートを用いているか。 | FSA の `電子決済等取扱業` ページおよび監督ルート。 |
| 資金移動または前払式レイヤーはあるか。 | FSA の `資金移動業者` 一覧、FSA の前払式支払手段発行会社一覧、および商品規約。 |
| 公開ページは所属銀行を特定しているか。 | パートナー支店、NEOBANK、銀行代理業、BaaS のサービスページ。 |

## 関連項目

- [[financial-licenses/INDEX]]
- [[financial-licenses/payment-license-stack]]
- [[financial-licenses/foreign-bank-branch-license-route]]
- [[financial-licenses/foreign-bank-agency-business-route]]
- [[banking/INDEX]]
- [[banking/japan-baas-operating-models]]
- [[banking/japan-net-bank-competition-map]]
- [[payments/japan-bank-api-payment-agency-route]]
- [[payments/account-to-account-payment-japan]]
- [[payments/merchant-bank-pay-account-direct-acquiring]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[fintech/japan-financial-regulation]]
- [[INDEX|FinWiki index]]

## 出典

- FSA: licensed / registered operator portal and bank list.
- FSA: bank supervision page for new bank entry.
- FSA: bank agency supervision page and bank-agent list.
- FSA: electronic payment agency page and registry.
- FSA: electronic payment handling business page and supervisory route.
- e-Gov: Banking Act.
- Japanese Bankers Association: Open API council materials.
