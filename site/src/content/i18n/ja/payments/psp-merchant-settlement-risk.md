---
source: payments/psp-merchant-settlement-risk
source_hash: 524c378f13b20d54
lang: ja
status: machine
fidelity: ok
title: "PSP の加盟店精算リスク"
translated_at: 2026-06-02T16:33:58.499Z
---
# PSP の加盟店精算リスク

## 概要

加盟店 PSP リスクとは、チェックアウト成功と最終的な資金移動の間にあるリスクである。加盟店オンボーディング、カード番号取扱い、不正監視、チャージバック、リザーブ、精算タイミング、返金、プラットフォームまたはウォレット障害が含まれる。日本では、分析に METI のカード番号取扱 / 加盟店契約ルート、FSA 資金移動業登録、前払式支払手段ルール、決済ブランド / ネットワーク契約を組み合わせる必要がある。

このページは [[payments/card-acquiring-japan-stack|Japan card acquiring stack]]、[[payments/funds-transfer-service-providers-japan-index|funds-transfer registry]]、[[payments/japan-code-payment-competitive-map|code-payment competitive map]] と併せて読む。[[payment-firms/gmo-payment-gateway|GMO-PG]]、[[payment-firms/sb-payment-service|SBPS]]、[[payment-firms/dg-financial-technology|DGFT]]、[[payment-firms/netstars|Netstars]] などの会社ページは、加盟店リスクが真の論点である場合にここへリンクする。

## リスクスタック

| レイヤー | リスク | 典型的な管理 |
|---|---|---|
| 加盟店オンボーディング | 不正加盟店、禁止商品、低品質な履行、チャージバックが多い事業モデル | KYC / KYB、加盟店審査、カテゴリ管理、継続監視 |
| カード番号取扱い | カードデータ漏えい、トークン化失敗、PCI DSS 非準拠 | 非保持、トークン化、PCI DSS、セキュリティ監査 |
| オーソリゼーション / 不正 | 盗難カード、アカウント乗っ取り、マネーミュール取引、フレンドリーフロード | 3-D Secure、速度チェック、デバイス / 行動監視 |
| 精算タイミング | PSP が最終的なネットワーク / ウォレット決済の確定前に加盟店へ支払う | リザーブ、精算遅延、エクスポージャー上限、ローリング残高 |
| 返金 / 取消 | 加盟店破綻またはイベント中止後の返金急増 | 契約上の留保、返金監視、加盟店集中管理 |
| ウォレット / コード決済ルーティング | 複数ブランドと資金源が運用および照合の複雑性を生む | ブランド照合、例外処理、SLA 監視 |
| 資金移動 | 引出可能または移転可能な残高が、法定保全と AML の懸念を生む | FSA 資金移動管理、AML/CFT 監視、保全措置 |

## 日本の規制ルート

| ルート | 公開上の関連性 |
|---|---|
| METI クレジットカード番号等取扱契約締結事業者 | 割賦販売法上、誰が加盟店契約 / カード番号取扱責任を負うかを決める。 |
| FSA 資金移動業者 | PSP / ウォレット機能が純粋なカード処理を超えて移転機能を含む場合に適用される。 |
| FSA 前払式支払手段発行者レジストリ | 第三者利用可能で払戻不能の stored value が発行される場合に適用される。 |
| カードネットワークと PCI DSS | 公開法的レジストリでなくても、運用上は重要である。 |
| キャッシュレス推進協議会の刊行物 | コード決済利用、加盟店受入動向、業界標準化作業の追跡に有用である。 |

## 会社を見る視点

| 事業者タイプ | 例 | 主な問い |
|---|---|---|
| 上場カード / PSP インフラ | [[payment-firms/gmo-payment-gateway|GMO-PG]] | ゲートウェイサービス、加盟店精算、貸付、付加価値ツールにどれだけリスクがあるか。 |
| 通信 / グループ PSP | [[payment-firms/sb-payment-service|SBPS]] | PayPay / SoftBank の流通力が加盟店獲得とリスク管理にどう影響するか。 |
| レガシー / エンタープライズ PSP | [[payment-firms/dg-financial-technology|DGFT]] | エンタープライズ加盟店の品質がチャージバックと精算エクスポージャーをどう変えるか。 |
| QR ゲートウェイ | [[payment-firms/netstars|Netstars]] | 複数のコード決済ブランドは加盟店端でどのように照合・管理されるか。 |
| ウォレット / 資金移動事業者 | [[payment-firms/paypay|PayPay]]、[[payment-firms/merpay|Merpay]]、[[payment-firms/recruit-mufg-business|Recruit MUFG Business]] | 事業者は残高 / 移転 / 決済リスクを持つのか、それとも受入をルートするだけか。 |

## 実務上の読み方

- 取引量だけから収益性を推定しない。加盟店ミックス、不正損失、補助金、精算タイミングが重要である。
- ブランド表示だけからリスク所有を推定しない。法的なアクワイアラ、登録済み加盟店契約締結主体、PSP、ウォレットは別の法人でありうる。
- 高リスク加盟店カテゴリ、クロスボーダー取引、サブスクリプション、デジタル商品、イベントチケットは、低単価の日常小売よりリスクが高いものとして扱う。
- カードおよび加盟店契約ルートには [[payments/credit-purchase-card-operators-japan-index|credit purchase / card registry]] を用い、価値移転または前払価値が関与する場合のみ FSA 登録を重ねる。

## 関連項目

- [[payments/INDEX]]
- [[payments/card-acquiring-japan-stack]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/funds-transfer-service-providers-japan-index]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/japan-code-payment-competitive-map]]
- [[payment-firms/netstars]]
- [[payment-firms/gmo-payment-gateway]]

## 出典

- METI 割賦販売法概要 / FAQ: https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html
- METI 登録事業者一覧: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- FSA 資金移動業者一覧: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
- キャッシュレス推進協議会 コード決済利用動向調査刊行物ページ: https://paymentsjapan.or.jp/publications/code-payments-20260330/
