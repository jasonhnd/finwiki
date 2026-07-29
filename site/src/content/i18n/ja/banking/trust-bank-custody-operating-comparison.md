---
source: banking/trust-bank-custody-operating-comparison
source_hash: 0c236f7ee0c557e1
lang: ja
model: google-translate-guarded-line-sync+manual-review
status: machine
fidelity: ok
title: "日本の信託銀行カストディ業務比較"
translated_at: 2026-07-29T03:30:48.121Z
---

# 日本の信託銀行カストディ業務比較

## 概要

日本の監護権分析では、主要フィールドとして機関タイプが使用されます。フルサービスの信託銀行、資産管理スペシャリスト、グローバルカストディアン/ICSD支店、決済インフラストラクチャがさまざまな仕事を行っています。株主表の「信託口座」またはカストディアン名は通常、指名者/管理面であり、信託銀行が経済的投資家であることを証明するものではありません。

このページは [[banking/INDEX|banking domain]] の下に位置し、信託銀行カストディの背後にある業務層を比較する。[[banking/japan-trust-bank-custody-map|Japan trust bank and custody map]]、[[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]]、[[trust-banks/master-trust-bank|Master Trust Bank of Japan]]、[[trust-banks/custody-bank|Custody Bank of Japan]]、[[trust-banks/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust Bank]]、[[trust-banks/smtb|SMTB]]、[[trust-banks/mizuho-trust-bank|Mizuho Trust]]、[[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]]、[[foreign-financial-institutions/state-street-japan|State Street Japan]]、[[foreign-financial-institutions/euroclear-bank-japan|Euroclear Bank Japan]]、[[foreign-financial-institutions/clearstream-banking-japan|Clearstream Banking Japan]]、[[securities/japan-market-infrastructure-map|securities market infrastructure]]、[[securities/japan-stock-lending-market-route|stock lending market route]] とあわせて用いること。

## 機関類型の比較

| 類型 | 例 | 中核機能 | 推論してはならないこと |
|---|---|---|---|
| フルサービス信託銀行 | [[trust-banks/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust]], [[trust-banks/smtb|SMTB]], [[trust-banks/mizuho-trust-bank|Mizuho Trust]] | 信託、年金、不動産、証券代行、資産管理、ひとつの事業ラインとしてのカストディ | カストディが事業の全体だと仮定してはならない。 |
| 資産管理専門会社 | [[trust-banks/master-trust-bank|Master Trust Bank of Japan]], [[trust-banks/custody-bank|Custody Bank of Japan]] | 機関投資家向けカストディ、年金 / 投資信託の管理、ファンド会計、コーポレートアクション | ノミニー保有を自己勘定投資として扱ってはならない。 |
| グローバルカストディアン / サブカストディアン | [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]], [[foreign-financial-institutions/state-street-japan|State Street Japan]] | クロスボーダーの資産サービシング、機関投資家向けカストディ、ファンドサービス、証券サービス | カストディの役割だけからローカル銀行のバランスシートエクスポージャーを推論してはならない。 |
| ICSD / 担保インフラ | [[foreign-financial-institutions/euroclear-bank-japan|Euroclear Bank Japan]], [[foreign-financial-institutions/clearstream-banking-japan|Clearstream Banking Japan]] | 国際決済、担保、クロスボーダーカストディ | ICSD 支店の存在を国内リテール銀行の経路として扱ってはならない。 |
| 市場インフラ | [[securities/japan-securities-depository-center|JASDEC]], [[securities/japan-securities-clearing-corp|JSCC]], 日銀 JGB 振替決済 | 振替、清算、DVP、JGB 決済 | インフラは運用機関ではない。 |

出典：金融庁の信託業務リスト、信託会社協会の説明、MTBJ/CBJの業務ページ、JASDEC、JSCC、日本銀行のシステムページから金融機関のカテゴリと機能をマッピング。この例は市場シェアを確立するものではありません。 ^[Sources: https://www.fsa.go.jp/menkyo/menkyoj/kenei.pdf; https://www.shintaku-kyokai.or.jp/trust/trustbanks/; https://www.mastertrust.co.jp/about/overview.html; https://www.custody.jp/corporate/information/index.html; https://www.jasdec.com/en/system/; https://www.boj.or.jp/en/paym/jgb_bes/index.htm.]

## 業務機能

| 機能 | 通常担当する主体 | 分析上の注記 |
|---|---|---|
| 保管 / 振替管理 | カストディアン / 信託銀行 / 預託層 | 法的 / 記録管理機能であり、投資判断ではない。 |
| 決済 | カストディアンに市場インフラを加えたもの | JASDEC、JSCC、日銀 JGB システムに接続する。 |
| コーポレートアクション | カストディアン / 資産管理者 | 原受益者のために権利イベントや通知を執行する。 |
| 議決権行使業務 | カストディアンが指図を執行または補助 | 経済的な議決権は通常、受益者 / 運用者に帰属する。 |
| ファンド会計 / NAV | 資産管理専門会社 | 投資信託および年金にとって業務上きわめて重要。 |
| 証券貸借サポート | カストディアン、エージェントレンダー、受益者、借手 | [[securities/japan-stock-lending-market-route|stock lending market route]] にリンク。 |
| クロスボーダーカストディ | グローバルカストディアン / ICSD / サブカストディアン | 税務、決済、開示、担保チェーンに注意。 |

## マスタートラスト対カストディ銀行

[[trust-banks/master-trust-bank|Master Trust Bank of Japan]] と [[trust-banks/custody-bank|Custody Bank of Japan]] は国内の資産管理専門会社である。いずれも機関投資家向けの事業体であり、投資信託、年金、機関投資家向け資産管理の役割を担う。これらが株主リストに現れる場合、自己勘定での所有が別途開示されない限り、信託 / ノミニー / 管理構造として記録される。

公開比較フィールドには、所有関係、顧客基盤、受託・管理資産、ファンド会計の役割、年金 / 投資信託のカバレッジ、コーポレートアクション業務、証券貸借サポート、JASDEC / JSCC / 日銀との接続が含まれる。AUC / AuA の数値的主張は出典の日付に依存する。

## フルサービス信託銀行

[[trust-banks/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust Bank]]、[[trust-banks/smtb|SMTB]]、[[trust-banks/mizuho-trust-bank|Mizuho Trust]] はより広範な信託銀行事業者である。これらはカストディ / 管理を、不動産、年金、証券代行、資産運用、相続 / ウェルス、銀行グループサービスと組み合わせることができる。

## 公開開示書類の解釈

| 開示上の表記 | より適切な読み方 |
|---|---|
| 大株主表の「信託口」 | 通常はノミニー / 信託口のラベル。支配に関する結論を導く前に、受益者または信託構造を特定すること。 |
| カストディアンが筆頭株主として現れる | 開示で自己勘定保有とされない限り、カストディ / 管理の経路である。 |
| 投資信託の保有 | ファンド、運用者、受益者の経済性まで見通すこと。 |
| 証券貸借残高 | 方向性のあるショートの仮説ではなく、貸借プログラム、担保、市場のプランビングを反映している場合がある。 |
| 外国カストディアン名 | 外国投資家のためのサブカストディまたはグローバルカストディの可能性がある。ローカルでの支配意図を仮定してはならない。 |

出典: この表は解釈プロトコルです。受益権と議決権は、候補者の名前だけからではなく、発行者の届出と該当する信託/ファンドの開示から確立されなければなりません。 ^[Sources: https://www.shintaku-kyokai.or.jp/trust/trustbanks/; https://www.mastertrust.co.jp/about/overview.html; https://www.custody.jp/corporate/information/index.html.]

## ソースフィールド

1. 機関類型。
2. 受託者、カストディアン、ファンドアドミニストレーター、運用者、証券代行、自己勘定投資家の各役割。
3. AUC / AuA / 信託資産の出典日付。
4. [[securities/japan-market-infrastructure-map|market infrastructure]] にリンクした振替 / DVP の経路。
5. [[securities/japan-stock-lending-market-route|stock lending]] にリンクした証券貸借および空売りの経路。
6. 所有データにカストディ名が現れる場合の受益者確認。

## 関連項目

- [[banking/INDEX]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[trust-banks/master-trust-bank]]
- [[trust-banks/custody-bank]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/smtb]]
- [[trust-banks/mizuho-trust-bank]]
- [[foreign-financial-institutions/bny-mellon-japan]]
- [[foreign-financial-institutions/state-street-japan]]
- [[foreign-financial-institutions/euroclear-bank-japan]]
- [[foreign-financial-institutions/clearstream-banking-japan]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-stock-lending-market-route]]
- [[INDEX|FinWiki index]]

## 出典

- FSA:信託業金融機関一覧および監督上の指針。
- 一般社団法人信託協会:信託銀行の説明、会員会社、信託財産統計。
- 日本マスタートラスト信託銀行:会社 / 事業概要。
- 日本カストディ銀行:会社 / 事業概要。
- JASDEC、JSCC、日銀:証券決済、DVP、JGB 振替決済の各資料。
