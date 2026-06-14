---
source: financial-licenses/bank-license-and-baas-boundary
source_hash: 4e96ba905ac9d912
lang: ja
status: machine
fidelity: ok
title: "日本の銀行免許と BaaS 境界"
translated_at: 2026-06-02T14:54:39.079Z
---

# 日本の銀行免許と BaaS 境界

## 概要

日本の BaaS と組込型銀行サービスの記録では、**免許を持つ銀行レイヤー** と **顧客インターフェースレイヤー** を分ける。 預金受入れを支配する公開上の分類は銀行法上の銀行免許ルートである。一方、パートナーブランドのアプリ、口座情報サービス、支払指図サービス、銀行代理チャネルは別の規制ルートを使う場合がある。

This page belongs to [[financial-licenses/INDEX|JapanFG legal / financial licenses]] and links the 規制境界 to [[banking/INDEX|banking domain]], [[banking/japan-baas-operating-models|Japan BaaS operating models]], [[banking/baas-japan-landscape|Japan BaaS landscape]], [[payments/japan-bank-api-payment-agency-route|bank API and electronic payment agency route]], [[payments/account-to-account-payment-japan|account-to-account payment Japan]], [[payments/merchant-bank-pay-account-direct-acquiring|merchant bank-account direct acquiring]], [[payments/funds-transfer-vs-prepaid-boundary|funds transfer vs prepaid boundary]], and [[fintech/japan-financial-regulation|Japan financial regulation]].

## 制度マップ

| レイヤー | 公開上の分類 | 認可・登録の形態 | 公開上の機能 |
|---|---|---|---|
| 預金取扱銀行 | `銀行` under the Banking Act | 免許 | 銀行側の預金、貸出、為替、決済機能。 |
| 銀行持株会社 | Bank holding-company route | Approval / FSA list route | 銀行子会社を支配する持株会社機能。 |
| 銀行代理業 | `銀行代理業者` | 許可 | 銀行の預金・貸出・為替契約に関する代理または媒介。 |
| 電子決済等代行業 | `電子決済等代行業者` | 登録 | 銀行 API・オープンバンキング経由での口座情報および支払指図の媒介。 |
| 電子決済等取扱業 | `電子決済等取扱業` | 登録 | 銀行から委託された、銀行預金債権の電子的な増減と関連する預金契約媒介。 |
| パートナーブランドの BaaS 表面 | Partner app, branch, UI, or product brand | 役割による | 残高が免許銀行の銀行預金として残る場合がある顧客向けインターフェース。 |
| ウォレット・前払式支払手段レイヤー | Funds transfer or prepaid route where applicable | 登録 / filing route | 非銀行の決済残高、送金債権、前払残高、加盟店決済ルート。 |

## 銀行免許レイヤー

FSA の免許・登録金融機関ポータルは、銀行一覧を `預金取扱等金融機関` の下で公開している。同じポータルには、銀行持株会社、銀行代理業者、外国銀行代理銀行、電子決済等代行業者、その他の規制対象カテゴリも掲載される。2026-05-22 に開いたポータルのスナップショットでは、銀行一覧の基準日は 2026-05-13、電子決済等代行業者一覧の基準日は 2026-04-30 と表示されていた。

BaaS 記録では、銀行免許フィールドは預金債務を負う法的主体を特定する。公開上の根拠は通常、FSA の銀行一覧、銀行の口座規定、サービス規約、パートナー支店または BaaS ページから確認する。銀行運営会社ページは [[financial-licenses/INDEX|financial-licenses INDEX]] の下に置き、[[regional-banks/ssnb|SSNB]]、[[payment-firms/gmo-aozora-net|GMO Aozora Net Bank]]、[[regional-banks/sony-bank|Sony Bank]]、[[regional-banks/ui-bank|UI Bank]]、[[regional-banks/01-bank|01 Bank]] などを含む。

## 銀行代理業ルート

銀行代理業ルートは、許可を受けた仲介ルートである。FSA の監督資料では、銀行代理業務は預金、貸付、為替関連契約を含む銀行契約締結の代理または媒介として説明される。確認すべき公開情報は、所属銀行、銀行代理業者の法的主体、サービス規約、FSA の `銀行代理業者` 一覧である。

銀行代理業は、別個の銀行免許として記録しない。これは所属銀行に結びつく販売・媒介レイヤーである。このルートは [[financial-licenses/foreign-bank-agency-business-route|Japan foreign bank agency business route]]、およびフロントエンドブランドと免許銀行が同じ法的レイヤーではないデジタル銀行の販売事例に隣接する。

## 電子決済等代行業ルート

電子決済等代行業ルートは、銀行法上の登録ルートである。銀行との間で口座情報または支払指図を媒介する、オープンバンキング / 銀行 API 型サービスを対象にする。公開情報での検証には、FSA の電子決済等代行業ページと `電子決済等代行業者` 登録簿を用いる。

このルートは [[payments/japan-bank-api-payment-agency-route|Japan bank API and electronic payment agency route]]、[[payments/japan-bank-api-incident-and-fraud-control|Japan bank API incident and fraud-control map]]、[[payments/account-to-account-payment-japan|Japan account-to-account payment route]] に接続する。登録は API / 媒介レイヤーを示すものであり、それ自体が銀行預金免許や資金移動業登録を示すわけではない。

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
| NEOBANK / partner-branded banking | 免許d bank | パートナーブランドと口座提案 | [[regional-banks/ssnb]], [[banking/japan-baas-operating-models]] |
| Partner branch | 免許d bank | パートナー支店、アプリ、ブランド口座ルート | [[banking/minna-bank-baas-model]] |
| API-provided banking | 免許d bank plus API / electronic payment agency layer where applicable | 外部アプリ、SaaS、会計、ウォレットサービス | [[payments/japan-bank-api-payment-agency-route]] |
| Corporate API bank | 免許d bank | 法人銀行 API、財務、会計、プラットフォーム業務フロー | [[payment-firms/gmo-aozora-net]] |
| Bank-agent route | 所属銀行と許可を受けた銀行代理業者 | 代理チャネル / アプリルート | [[regional-banks/ui-bank]] |
| ウォレットと銀行連携 | 銀行口座に加え、資金移動・前払式支払手段・口座連携ルート | ウォレットまたは加盟店決済サービス | [[payments/funds-transfer-vs-prepaid-boundary]] |

## 公開情報による検証チェックリスト

| 確認事項 | 参照する情報欄 |
|---|---|
| Is the balance a bank deposit? | Bank account terms and FSA `銀行` list. |
| 顧客残高を負う法的主体はどこか。 | 預金規定、ウォレット規約、発行者開示、規制対象事業者一覧。 |
| Is the front-end a bank agent? | FSA `銀行代理業者` list and service disclosure. |
| Is the front-end an electronic payment agency? | FSA `電子決済等代行業者` registry and bank API terms. |
| Is a deposit-token / electronic deposit-claim route used? | FSA `電子決済等取扱業` page and supervisory route. |
| Is there a funds-transfer or prepaid layer? | FSA `資金移動業者` list, FSA prepaid issuer list, and product terms. |
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
