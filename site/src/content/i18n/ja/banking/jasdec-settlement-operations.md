---
source: banking/jasdec-settlement-operations
source_hash: 339425f84cf749b0
lang: ja
model: google-translate-guarded-line-sync+manual-review
status: machine
fidelity: ok
title: "JASDEC 決済業務"
translated_at: 2026-07-29T03:30:48.112Z
---

# JASDEC 決済業務

## ウィキ上の位置づけ

本項目は [[banking/INDEX|banking index]] に属する決済インフラ項目であり、[[securities/japan-securities-depository-center|証券保管振替機構の法人ページ]]、[[securities/japan-securities-clearing-corp|JSCC の清算機関ページ]]と併読する。関連する業務モデルは [[banking/master-trust-bank-operating-model|マスタートラスト銀行の業務モデル]]、[[banking/custody-bank-operating-model|カストディ銀行の業務モデル]]、[[banking/japan-master-trust-and-custody-bank-landscape|日本のマスタートラスト / カストディ銀行の概観]]、[[banking/trust-bank-custody-operating-comparison|信託銀行・カストディ業務比較]]、[[securities/japan-market-infrastructure-map|日本の市場インフラ地図]]を参照する。

## TL;DR

JASDEC（株式会社証券保管振替機構 / Japan Securities Depository Center, Inc.）は、株式等、社債、短期社債、投資信託の振替制度、決済照合システム、対象外国株券の保管サービスなど、公式会社概要に掲げる決済関連業務を運営する。国債は別制度である日銀の国債振替決済制度を利用する。JASDEC と完全子会社 JDCC も区別が必要であり、JDCC は JASDEC の一般振替 DVP（NETD）に係る金融商品債務引受業を担う。 ^[Sources: https://www.jasdec.com/en/about/office/outline/; https://www.jasdec.com/en/about/jdcc/outline/; https://www.boj.or.jp/en/paym/jgb_bes/index.htm.]

## 1. 事業体と法的運営境界

| 分野 | 日付が記載された公式事実 |
|---|---|
| 正式名称 | 株式会社証券保管振替機構 / 株式会社証券保管振替機構 |
| 法人化 | 2002年1月4日; 2002年6月に旧非営利財団の事業を株式会社に譲渡 |
| 資本金 | ¥4.25bn |
| 本社 | 東京都中央区日本橋兜町7-1 |
| 主要事業を掲載 | 株式、CP、社債、投資信託の振替制度。 NETD DVP;決済前のマッチング。外国株券の保管。その他の事業 |
| DVP子会社 | JASDEC DVP Clearing Corporation (JDCC)、2003 年 6 月 6 日に設立され、JASDEC が 100％出資 |

出典: 身元、日付、資本金、住所、および事業目録は、現在の JASDEC および JDCC の会社概要に基づいています。歴史的継承は JASDEC の正式な歴史に基づいています。 ^[Sources: https://www.jasdec.com/en/about/office/outline/; https://www.jasdec.com/en/about/office/history/; https://www.jasdec.com/en/about/jdcc/outline/.]

## 2. システムマップ

| システム・サービス | 公式に記載されている範囲 | 守るべき境界線 |
|---|---|---|
| 株式等の振替制度 | 証券保管振替機構および口座管理機関の口座を通じた対象株式および関連商品の権利の電子発行、譲渡、消却 | 適格性と発行者の同意は商品ごとに異なります |
| 社債制度 | 適格社債、地方債、特定外債、適格外国債の電子化取扱い | 社債、CP、国債を一つのシステムにまとめないでください |
| 短期社債制度 | 対象となる CP の発行、譲渡、および引き換え。公式資料には日銀ネット連動のグロス・グロスDVPが記載されている | 製品の適格性と最小単位は現在の規則に基づいています |
| 投資信託制度 | 対象となる国内投資信託受益権の振替記録公式資料では、関連する購入/償還フローに関する日銀ネット連動 DVP について説明しています | ETFとREITは株式制度で扱われます。オフショアファンドとマザーファンドはこの制度の対象外です |
| 決済前マッチングシステム（PSMS） | 対象となるユーザーと取引の取引後、決済前のマッチング | マッチング自体は最終的な証券や資金の決済ではありません |
| NETD 向け DVP | 有価証券の受け渡しと対象外取引の受け渡しの決済を連携させるJDCCサービス | JDCC の CCP の役割は、JASDEC の CSD/振替の役割および JSCC とは異なります。 |
| 外国株券保管 | 国内取引所における対象外国商品の保管、振替決済、寄託・引渡し、権利処理、通知等 | 範囲は適格な機器と承認された参加者に限定されます |
| 国債振替制度 | 日本銀行が運営 | 保振振替制度ではありません |

ソース: 各行の範囲は、対応する公式システム ページに限定されます。国債分離は日本銀行独自のシステムページでサポートされています。 ^[Sources: https://www.jasdec.com/en/system/less/; https://www.jasdec.com/en/system/sb/; https://www.jasdec.com/en/system/cp/outline/feature/; https://www.jasdec.com/en/system/fund/outline/basic/index.html; https://www.jasdec.com/en/system/finance/outline/range/; https://www.jasdec.com/en/system/dvp/outline/; https://www.jasdec.com/en/system/foreign/outline/; https://www.boj.or.jp/en/paym/jgb_bes/index.htm.]

## 3. 参加者の語彙

| 正式な用語 | 研究読書 |
|---|---|
| 発行者 | 関連する JASDEC システムに受け入れられた証券の発行者 |
| 直接口座管理機関 | 機構が適用する制度に基づいて口座を開設している機関 |
| 間接口座管理機関 | 他の口座管理機関によって口座が開設されており、他人のために口座を開設する可能性がある機関 |
| 参加者 | ほふりまたは口座管理機関が振替口座を開設している個人または機関 |
| DVP 参加者 | NETD DVP サービスの別の JDCC 資格、運営、財務基準を満たす参加者 |

出典: 用語は、JASDEC の公式株式システム構造および NETD DVP 資格の説明に従います。銀行、信託銀行、証券会社、またはグローバルカストディアンは、現在のサービス固有のリストを確認することなく直接参加者と呼ばれてはなりません。 ^[Sources: https://www.jasdec.com/en/system/less/outline/organization/; https://www.jasdec.com/en/faq/.]

## 4.清算・照合・有価証券決済・現金決済

| 層 | オペレーター/証拠ルート | 層が確立するもの |
|---|---|---|
| 取引執行 | 関連する取引所、PTS、または相対取引会場 | 取引の実行;それ自体では清算や決済ではありません |
| 事前決済マッチング | 対象取引用の保振PSMS | 対象決済指図の照合 |
| 為替取引清算 | 公開範囲内の製品および市場に関する JSCC | JSCC 規則に基づく CCP の引き受けと純義務 |
| NETD DVP クリアリング | 適格な NETD の JDCC | JDCC の規定に基づく義務の引き受けとリスク管理 |
| 有価証券記帳 | 機器に適用される保振システム | 当該振替記録の増減又は振替 |
| ファンドレッグ | 公式システムページに記載されている日銀ネットを含む、サービス固有の現金決済取り決め | 現金の移動はサービスごとに調達する必要があります。単一の普遍的なキャッシュレッグの説明はありません |
| 国債振替 | 日本銀行 | 国債分離決済システム |

出典: この表は、古い概要では混同されがちな機能を分けています。正確な決済および資金ルートは、関連する商品および取引タイプに応じて、JSCC、JDCC、JASDEC、および日本銀行の資料から読み取る必要があります。 ^[Sources: https://www.jasdec.com/en/system/finance/outline/range/; https://www.jasdec.com/en/system/dvp/outline/; https://www.jasdec.com/en/about/jdcc/outline/; https://www.jpx.co.jp/jscc/en/cash/cash/assumption-obligation/dvp.html; https://www.boj.or.jp/en/paym/jgb_bes/index.htm.]

## 5. 避けるべき修正

| サポートされていないショートカット | 正しい公開ルール |
|---|---|
| 「JASDECは日本の証券取引をすべてクリアします」 | JASDEC振替機能、JSCC清算、JDCCのNETD DVP清算を区別する |
| 「機構が国債を決済」 | 国債の振替を日銀システムにルーティングする |
| 「指定された管理者は全員、JASDEC の直接の参加者です。」 | 特定の JASDEC サービスおよび法人については、現在のリストを確認してください。 |
| 「DVP-X1 / X2 / X3 は JASDEC の品質レベルです」 | 信頼できる情報源が主張に対してラベルを定義していない限り、これらのラベルを使用しないでください。 |
| 「すべての JASDEC 送金には 1 つの現金レッグが含まれます」 | 資産クラス、取引タイプ、および該当するDVP/資金取り決めを特定する |
| 「JASDEC手数料は規制された公共料金です」 | 該当する現在の JASDEC または JDCC の料金表を引用します。出版物だけでは価格統制の特徴を証明できない |
| 「和解は決して取り消せない」 | 適用される法令、規則、およびサービス固有の法的分析のみから最終的な状態を決定する |

ソース: 補正テーブルは、オペレーターの境界と現在のルール/手数料のインベントリから導出されます。これは、あるサービスのルールを別のサービスに拡張することを意図的に避けています。 ^[Sources: https://www.jasdec.com/en/rule/business-rules/index.html; https://www.jasdec.com/en/rule/dvp/whole/; https://www.jasdec.com/en/system/; https://www.boj.or.jp/en/paym/jgb_bes/index.htm.]

## 6. 信託銀行とカストディの調査境界

信託銀行およびその他の保管機関は、該当するサービスに基づいて認められている場合、口座管理機関または参加者として JASDEC とやり取りすることができます。正確なステータスは法人およびサービスによって異なります。したがって、発行体届出書の「信託口」名だけでは、信託銀行が受益投資家であることを証明するには不十分であり、保管権限は、ほふりの直接参加を証明するには十分ではありません。

監護権の請求の場合は、次のように記録します。

1. 法人。
2. JASDEC のシステムまたはサービス。
3. 直接的なアカウント管理と間接的なアカウント管理のステータス。
4. 商品と取引の種類。
5. 清算オペレーター (存在する場合)。
6. 現金決済ルート。そして
7. ソースの日付。

外国株式証券の保管も JASDEC の特有のサービスです。公式ページには、現地保管機関の利用、振替決済、権利処理、対象商品のコーポレートアクション通知について説明されています。これを、すべての日本または外国の証券に対する普遍的なユーロクリア/クリアストリーム リンクに一般化すべきではありません。 ^[Source: https://www.jasdec.com/en/system/foreign/outline/.]

## Related

- [[banking/INDEX]]
- [[banking/master-trust-bank-operating-model]]
- [[banking/custody-bank-operating-model]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/trust-bank-fee-structure-comparison]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/osaka-digital-exchange]]
- [[securities/japan-security-token-secondary-market-route]]
- [[trust-banks/master-trust-bank]]
- [[trust-banks/custody-bank]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[foreign-financial-institutions/bny-mellon-japan]]
- [[foreign-financial-institutions/state-street-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[foreign-financial-institutions/euroclear-bank-japan]]
- [[foreign-financial-institutions/clearstream-banking-japan]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## Sources

- 航空振替機構の会社概要と沿革をご紹介します。
- 株式、社債、CP、投資信託、PSMS、NETD DVP、外国株券保管に関するほふり公式システムページ。
- JASDEC / JDCC の現在の規制と手数料の一覧。
- JSCC公式清算およびDVP資料。
- 日本銀行国債振替制度資料。
