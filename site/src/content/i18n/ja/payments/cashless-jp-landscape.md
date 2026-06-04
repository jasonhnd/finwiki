---
source: payments/cashless-jp-landscape
source_hash: 5aa93f96471e5259
lang: ja
status: machine
fidelity: ok
title: "日本のキャッシュレス決済ランドスケープ"
translated_at: 2026-06-02T16:33:58.505Z
---

# 日本のキャッシュレス決済ランドスケープ

## ウィキ上の位置づけ

この項目は [[payments/INDEX|payments index]] の下に位置づける。比較・対照の文脈では [[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]] とあわせて読み、より広い制度・規制上の境界については [[payments/card-acquiring-japan-stack|Japan card acquiring stack]] を参照する。

## 要約

日本のキャッシュレス市場は、もはや「将来の普及」を待つテーマではない。経済産業省の最新公表によれば、**2025 キャッシュレス決済比率は 58.0% / JPY 162.7 兆円に達した**。すでに 2024 比率が従来の 40%目標を上回った後の段階である。取引金額ではクレジットカードがなお支配的だが、コード決済は、決済、ポイント、BNPL、銀行口座、プリペイド残高、プラットフォーム広告を接続するため、最も速く動く戦略上の主戦場になっている。

FinWiki で有用な視点は、「キャッシュレス対現金」ではない。**どの法的な残高レイヤーと流通レイヤーが顧客関係を握るのか**である。

1. カードの加盟店契約 / 発行と割賦販売法規制。
2. 資金移動 / ウォレット残高。
3. 前払式電子マネー。
4. 銀行口座 / デビット / BaaS レール。
5. ロイヤルティポイントとデータマーケティング。
6. ステーブルコイン / EPI 隣接領域。

## 市場構造

| レイヤー | 役割 | 主な例 | FinWiki ルート |
|---|---|---|---|
| クレジットカード | 最大のキャッシュレス金額プール。issuer / acquirer 収益、リボ・分割払い隣接 | [[card-issuers/jcb|JCB]], SMBC Card, MUFG NICOS, Rakuten Card, PayPay Card, AEON Card | [[financial-licenses/INDEX|legal / financial licenses]] |
| コード決済 | スマートフォン QR / バーコード決済、キャンペーン補助、アプリ流量、P2P 送金隣接 | PayPay, Rakuten Pay, d払い, au PAY, Merpay | [[megabanks/paypay-fg|PayPay FG]], [[payment-firms/rakuten-fg|Rakuten FG]], [[payment-firms/mercari-hd|Mercari HD]] |
| 電子マネー / プリペイド | 購入前または購入時に蓄積価値で支払う仕組み。交通 / 小売 / モール用途 | WAON, nanaco, Suica/PASMO, Rakuten Edy | [[retail/aeon-group|Aeon Group]], [[retail/seven-and-i-hd|Seven & i]] |
| 銀行連携決済 | デビット、銀行振込、口座間送金、BaaS、組み込み口座開設 | GMO Aozora, Minna Bank, J-Coin, Bank Pay, アプリ銀行連携 | [[banking/baas-japan-landscape|BaaS Japan landscape]] |
| PSP / 加盟店契約 | 加盟店受入、決済、 fraud controls、PCI DSS、複数手段チェックアウト | [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]], SB Payment Service, DGFT, Stripe, Adyen | [[business/gmo-internet-group|GMO Internet Group]] |
| ロイヤルティ層 | ポイント発行・利用、キャンペーン経済性、ID グラフ、加盟店 CRM | Rakuten Point, V Point, d Point, PayPay Point, WAON POINT, nanaco point | [[loyalty/japan-points-landscape|Japan points landscape]] |
| トークン化マネー | ステーブルコイン / 電子決済手段 / 暗号資産決済境界 | JPYC, USDC via EPI route, Progmat, DCJPY | [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape]] |

## 2025 ベースライン

経済産業省の 2025 算定は、日本が「40%への追いつき」段階から、より高い普及段階へ移ったことを示し、議論を変えた。

| 指標 | 最新の公開アンカー | 重要性 |
|---|---:|---|
| キャッシュレス決済比率 | 58.0% in 2025 | 従来の 2025 目標はすでに超過しており、政策の焦点は 65%を 2030 までに達成すること、さらに長期的な 80%志向へ移る。 |
| キャッシュレス決済金額 | JPY 162.7 兆 in 2025 | 決済レールは、狭い fintech カテゴリではなく、消費者金融インフラの中核市場になっている。 |
| キャッシュレス金額に占めるクレジットカード比率 | 82.7% in 2025 | コード決済が消費者の注目を集めても、カード収益はなお価値プールであり続ける。 |
| キャッシュレス金額に占めるコード決済比率 | 10.2% in 2025 | 金額では小さいが、アプリ行動、クーポン、P2P 送金、ポイントを握るため戦略的に強い。 |

## 競争マップ

| 陣営 | 中核的な強み | 制約 |
|---|---|---|
| PayPay / SoftBank / LY | 最大級のコード決済認知、高いアプリ利用頻度、カード / 銀行 / 証券隣接 | プロモーション費用、収益化圧力、銀行 / 証券統合の複雑さ |
| Rakuten | EC、カード、銀行、証券、モバイル、Rakuten Point の統合フライホイール | モバイル収益性とエコシステム疲れがフライホイールを弱め得る |
| NTT docomo / d | 通信 ID、d Point、d払い、予定される [[megabanks/ndfg|NDFG]] 金融グループ統合 | 銀行 / 証券 / 保険商品のより強い統合が必要 |
| au / KDDI | au PAY、au Jibun Bank、保険 / 証券、Lawson 隣接 | 小売接点と決済認知では、多くの文脈で PayPay / Rakuten を追う |
| AEON | モール・スーパーの来店頻度、AEON Card、WAON、[[card-issuers/aeon-bank|Aeon Bank]] | AEON の生活圏では強いが、グループ外での汎用性は相対的に低い |
| Seven & i | コンビニ来店頻度、nanaco、[[regional-banks/seven-bank|Seven Bank]] ATM プラットフォーム | nanaco はグループ内では強力だが、コード決済シェアは全国的な主戦場ではない |
| GMO / PSP レイヤー | 加盟店受入、EC チェックアウト、複数決済手段のオーケストレーション、B2B 決済データ | 主に加盟店側インフラであり、消費者ブランド支配は弱い |

## 法的スタック

キャッシュレス製品は、アプリブランドではなく法的機能ごとに分解すべきである。

| 機能 | 最初の法的な問い | 典型的なルート |
|---|---|---|
| 顧客価値を保管する | それは銀行預金、資金移動残高、前払式支払手段、ポイント債務のどれか。 | 銀行法 / 資金決済法 / 前払式支払手段ルール |
| 他者へ価値を移転する | 為替取引 / 資金移動に該当するか。 | 資金移動業者または銀行ルート |
| 蓄積価値で加盟店へ支払う | 残高は換金可能か、商品・サービスにのみ使えるのか。 | 前払式支払手段または資金移動残高 |
| 銀行口座からの移動を開始する | 誰が指図を受け取り、誰が口座を保有しているのか。 | 電子決済等代行業 / 銀行 API / BaaS スタック |
| クレジットカードの加盟店契約または発行を行う | issuer、acquirer、加盟店契約当事者、与信提供者は誰か。 | 割賦販売法、カードネットワーク規則、PCI DSS、関連登録 |
| ユーザーにポイントを付与する | ポイントは購入されたものか、報酬として付与されたものか、譲渡可能か、現金同等か。 | ロイヤルティプログラム会計に加え、前払 / 資金移動境界の分析 |
| ステーブルコインレールを使う | トークンは EPI、暗号資産、信託受益権、預金トークン、プリペイド価値のどれか。 | [[fintech/japan-epi-three-types-overview|Japan EPI three types]] / [[fintech/japan-ecisb-license|ECISB]] / VASP ルート |

## JapanFG にとって重要な理由

日本のリテール金融は、**決済頻度を流通のくさびにする構造**へ収れんしている。

- [[megabanks/paypay-fg|PayPay FG]] は日常決済ユーザーをカード、銀行、証券、保険へ誘導できる。
- [[payment-firms/rakuten-fg|Rakuten FG]] は買い物とカード還元を、銀行 / 証券 / モバイルの継続利用へ変換する。
- [[card-issuers/aeon-bank|Aeon Bank]] は小売店舗、WAON、AEON Card を使い、銀行を買い物流れの一部にする。
- [[regional-banks/seven-bank|Seven Bank]] は ATM を現金機械から、より広い認証 / 決済インフラへ再定義している。
- [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] は加盟店側の通行料ゲートである。消費者からは見えにくいが、EC 決済に深く組み込まれている。

## 関連項目

- [[payments/INDEX|payments INDEX]]
- [[financial-licenses/INDEX|JapanFG legal / financial licenses]]
- [[loyalty/japan-points-landscape|Japan points landscape]]
- [[retail/aeon-group|Aeon Group]]
- [[retail/seven-and-i-hd|Seven & i]]
- [[card-issuers/aeon-bank|Aeon Bank / AFS]]
- [[regional-banks/seven-bank|Seven Bank]]
- [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]
- [[fintech/japan-financial-regulation|Japan financial regulation]]
- [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape]]
- [[INDEX|FinWiki index]]

## 出典

- 経済産業省: 2025 cashless payment ratio release, 2026-03-31.
- 経済産業省: 2024 cashless payment ratio release, 2025-03-31.
- Payments Japan Association: コード決済およびキャッシュレス関連公表物。
- 金融庁: 電子決済手段 / 電子決済等取扱業者の登録情報。
- 金融庁: 前払式支払手段の払戻しおよび資金決済法の説明。
