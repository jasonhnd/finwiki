---
source: payments/cashless-jp-landscape
source_hash: afc46eac83ae193f
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本のキャッシュレス決済ランドスケープ"
translated_at: 2026-06-26T08:32:07.537Z
---

# 日本のキャッシュレス決済ランドスケープ

## Wiki ルート

このエントリは [[payments/INDEX|payments index]] の配下にある。ピア／対比の文脈については [[payments/funds-transfer-vs-prepaid-boundary|Funds transfer vs prepaid boundary in Japan]] と、より広いシステム／規制の境界については [[payments/card-acquiring-japan-stack|Japan card acquiring stack]] と照らし合わせて読むこと。

## TL;DR

日本のキャッシュレス市場はもはや「将来の普及」というテーマではない。METI の最新の公開リリースによれば、**2025  キャッシュレス決済比率は 58.0%／ 162.7  兆円に達した**。これは 2024  の比率がすでに古い 40% の目標を上回った後のことである。クレジットカードは依然として取引金額で支配的であり、一方でコード決済は最も速い戦略的な主戦場である。なぜならそれは決済、ポイント、BNPL、銀行口座、プリペイド残高、プラットフォーム広告を結びつけるからである。

有用な FinWiki のレンズは「キャッシュレス対現金」ではない。それは **どの法的残高レイヤーと流通レイヤーが顧客関係を所有するか** である：

1. カードのアクワイアリング／イシュイングおよび割賦販売規制。
2. 資金移動／ウォレット残高。
3. 前払式電子マネー。
4. 銀行口座／デビット／BaaS レール。
5. ロイヤルティポイントおよびデータマーケティング。
6. ステーブルコイン／EPI 隣接性。

## 市場構造

| レイヤー | 何をするか | 主な例 | FinWiki ルート |
|---|---|---|---|
| クレジットカード | 最大のキャッシュレス価値プール；イシュアー／アクワイアラーの経済性；リボルビングおよび割賦の隣接性 | [[card-issuers/jcb|JCB]]、SMBC カード、MUFG ニコス、楽天カード、PayPay カード、イオンカード | [[financial-licenses/INDEX|legal / financial licenses]] |
| コード決済 | スマートフォンの QR／バーコード決済、キャンペーン補助、アプリトラフィック、P2P 送金の隣接性 | PayPay、楽天ペイ、d払い、au PAY、メルペイ | [[megabanks/paypay-fg|PayPay FG]]、[[payment-firms/rakuten-fg|Rakuten FG]]、[[payment-firms/mercari-hd|Mercari HD]] |
| 電子マネー／プリペイド | 購入前または購入時のストアドバリュー決済；交通／小売／モールのユースケース | WAON、nanaco、Suica/PASMO、楽天 Edy | [[retail/aeon-group|Aeon Group]]、[[retail/seven-and-i-hd|Seven & i]] |
| 銀行連動決済 | デビット、銀行振込、口座間、BaaS、組込型口座開設 | GMO あおぞら、みんなの銀行、J-Coin、Bank Pay、アプリ銀行連携 | [[banking/baas-japan-landscape|BaaS Japan landscape]] |
| PSP／アクワイアリング | 加盟店アクセプタンス、決済、不正対策、PCI DSS、マルチメソッドチェックアウト | [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]、SB ペイメントサービス、DGFT、Stripe、Adyen | [[business/gmo-internet-group|GMO Internet Group]] |
| ロイヤルティレイヤー | ポイント発行、交換、キャンペーンの経済性、ID グラフおよび加盟店 CRM | 楽天ポイント、V ポイント、d ポイント、PayPay ポイント、WAON POINT、nanaco ポイント | [[loyalty/japan-points-landscape|Japan points landscape]] |
| トークン化マネー | ステーブルコイン／電子決済手段／暗号資産決済の境界 | JPYC、EPI ルート経由の USDC、Progmat、DCJPY | [[fintech/japan-stablecoin-regulatory-landscape|Japan stablecoin regulatory landscape]] |

## 2025  ベースライン

METI の 2025  の算定は議論を変えた。なぜなら日本は「40% へのキャッチアップ」から、より高い普及の体制へと移行したからである：

| 指標 | 最新の公開アンカー | なぜ重要か |
|---|---:|---|
| キャッシュレス決済比率 | 2025  における 58.0%| 古い 2025  の目標はすでに上回られた；政策のフロンティアは 2030  までの 65%、そしてより長期の 80% の野心へとシフトしている。 |
| キャッシュレス決済金額 | 2025  における 162.7  兆円 | 決済レールは今や、狭いフィンテックのカテゴリではなく、中核的な消費者金融インフラ市場である。 |
| キャッシュレス金額に占めるクレジットカードのシェア | 2025  における 82.7%| コード決済が消費者の注目を支配しても、カードの経済性は依然として価値プールであり続ける。 |
| キャッシュレス金額に占めるコード決済のシェア | 2025  における 10.2%| 金額では小さいが、アプリの行動、クーポン、P2P 送金、ポイントを所有するため戦略的に強力である。 |

## 競争マップ

| 陣営 | 中核的な優位 | 制約 |
|---|---|---|
| PayPay／ソフトバンク／LY | 最大のコード決済のマインドシェア、高いアプリ頻度、カード／銀行／証券の隣接性 | プロモーションコスト、収益化の圧力、銀行／証券統合の複雑さ |
| 楽天 | 統合された EC、カード、銀行、証券、モバイル、楽天ポイントのフライホイール | モバイルの収益性とエコシステムの疲弊がフライホイールを弱めうる |
| NTT ドコモ／d | 通信 ID、d ポイント、d払い、計画中の [[megabanks/ndfg|NDFG]] 金融グループ統合 | より緊密な銀行／証券／保険商品の統合が必要 |
| au／KDDI | au PAY、au じぶん銀行、保険／証券、ローソンの隣接性 | 小売のフットプリントと決済のマインドシェアが多くの文脈で PayPay／楽天に後れを取る |
| イオン | モールおよびスーパーマーケットのトラフィック、イオンカード、WAON、[[card-issuers/aeon-bank|Aeon Bank]] | イオンの日常生活ゾーンでは強いが、グループ外では普遍性に欠ける |
| セブン＆アイ | コンビニエンスストアのトラフィック、nanaco、[[regional-banks/seven-bank|Seven Bank]] ATM プラットフォーム | nanaco はグループの文脈では強力だが、コード決済のシェアは全国の主戦場ではない |
| GMO／PSP レイヤー | 加盟店アクセプタンス、EC チェックアウト、マルチ決済オーケストレーション、B2B 決済データ | 主に加盟店側のインフラであり、消費者ブランドのコントロールは少ない |

## 法的スタックキャッシュレス商品は、アプリブランドではなく法的機能によって分解されるべきである：

| 機能 | 最初の法的問い | 典型的なルート |
|---|---|---|
| 顧客の価値を保管する | それは銀行預金、資金移動残高、前払式支払手段、ポイント負債のいずれか？ | 銀行法／資金決済法／前払式ルール |
| 価値を他者に移転する | それは外国為替取引／資金移動か？ | 資金移動業者または銀行ルート |
| ストアドバリューで加盟店に支払う | 残高は払い戻し可能か、それとも商品・サービスにのみ使用可能か？ | 前払式支払手段または資金移動残高 |
| 銀行口座から口座の移動を開始する | 誰が指図を受け、誰が口座を保有するか？ | 電子決済代行業／銀行 API／BaaS スタック |
| クレジットカードのアクワイアリングを行う、またはカードを発行する | 誰がイシュアー、アクワイアラー、加盟店契約当事者、信用供与者か？ | 割賦販売法、カードネットワークルール、PCI DSS、関連登録 |
| ユーザーにポイントで報いる | ポイントは購入されたものか、報酬として付与されたものか、譲渡可能か、現金等価物か？ | ロイヤルティプログラム会計に加え、前払式／資金移動の境界分析の可能性 |
| ステーブルコインレールを使用する | トークンは EPI、暗号資産、信託受益権、預金トークン、前払式価値のいずれか？ | [[fintech/japan-epi-three-types-overview|Japan EPI three types]]／[[fintech/japan-ecisb-license|ECISB]]／VASP ルート |

## なぜこれが JapanFG にとって重要か

日本のリテールファイナンスは **流通のくさびとしての決済頻度** を中心に収束しつつある：

- [[megabanks/paypay-fg|PayPay FG]] は日常の決済ユーザーをカード、銀行、証券、保険へとルーティングできる。
- [[payment-firms/rakuten-fg|Rakuten FG]] はショッピングおよびカードの報酬を銀行／証券／モバイルのリテンションへと変換する。
- [[card-issuers/aeon-bank|Aeon Bank]] は小売店舗、WAON、イオンカードを用いて、バンキングをショッピングフローの一部にする。
- [[regional-banks/seven-bank|Seven Bank]] は ATM を現金マシンからより広い認証／決済インフラへと再定義しつつある。
- [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] は加盟店側の関所である：消費者には見えにくいが、EC 決済に深く組み込まれている。

## 関連

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

- METI：2025  キャッシュレス決済比率リリース、2026-03-31。
- METI：2024  キャッシュレス決済比率リリース、2025-03-31。
- キャッシュレス推進協議会（Payments Japan Association）：コード決済およびキャッシュレスの刊行物。
- FSA：電子決済手段／電子決済等取扱業の登録情報。
- FSA：前払式支払手段の払い戻しおよび資金決済法の説明。
