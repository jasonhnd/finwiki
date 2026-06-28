---
source: banking/japan-trust-bank-custody-map
source_hash: 0102eb37e5bd1684
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本の信託銀行・カストディマップ"
translated_at: 2026-06-26T08:32:07.529Z
---

# 日本の信託銀行・カストディマップ

## 概要日本の信託銀行 / カストディ層は、法的名義、受益者、資産管理、運用指図、コーポレートアクション、議決権行使、貸株、ファンド会計を分離している。よくある誤りは、開示書類に現れる「信託口」の名義名を、信託銀行そのものが経済的な投資家であるかのように読み取ることである。

このページは [[banking/INDEX|banking domain]]、[[banking/japan-master-trust-and-custody-bank-landscape|master trust / カストディ bank landscape]]、[[trust-banks/master-trust-bank|Master Trust Bank of Japan]]、[[trust-banks/custody-bank|Custody Bank of Japan]]、[[trust-banks/sumitomo-mitsui-trust|Sumitomo Mitsui Trust]]、[[trust-banks/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust Bank]]、[[securities/japan-stock-lending-market-route|stock lending route]]、[[securities/japan-market-infrastructure-map|securities market infrastructure]] と併せて用いる。

## 機能マップ

| 機能 | その意味 |
|---|---|
| 信託銀行業務 | 信託 / 銀行の規制経路のもとでの、銀行業務に信託業務機能を加えたもの。 |
| 資産管理 | 保管、決済、コーポレートアクション、収益の取立て、ファンド会計、報告、記録保持。 |
| マスターカストディ | 機関投資家 / ファンド向けの集中型資産管理サービス。 |
| 名義名 | 受益者と異なりうる、法的名義 / 振替名義。 |
| 運用指図 | 通常、カストディアン自身ではなく、資産所有者、運用受託者、またはファンドストラクチャーから来る。 |
| 貸株サポート | 指図および管理の取決めのもとで証券が貸し出されることがあり、証券金融のリンクを生む。 |

## 主要な機関類型

| 類型 | 例 | 典型的な役割 |
|---|---|---|
| フルサービス信託銀行 | [[trust-banks/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust Bank]]、[[trust-banks/mizuho-trust-bank|Mizuho Trust]]、[[trust-banks/smtb|SMTB]] | 信託、不動産、年金、証券代行、資産運用 / 管理。 |
| 資産管理専門 | [[trust-banks/master-trust-bank|Master Trust Bank of Japan]]、[[trust-banks/custody-bank|Custody Bank of Japan]] | 大規模な機関カストディおよびファンド / 年金の資産管理。 |
| 日本におけるグローバルカストディアン / ICSD | [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]]、[[foreign-financial-institutions/state-street-japan|State Street Japan]]、[[foreign-financial-institutions/euroclear-bank-japan|Euroclear Bank Japan]]、[[foreign-financial-institutions/clearstream-banking-japan|Clearstream Banking Japan]] | 外国投資家 / グローバルな資産サービシング、決済、開示、担保のブリッジ。 |
| 証券保管振替 / 決済インフラ | [[securities/japan-securities-depository-center|JASDEC]]、[[securities/japan-securities-clearing-corp|JSCC]] | 振替、DVP、清算・決済の基盤。 |

## 解釈ルール

| 公開資料 | その読み方 |
|---|---|
| 「信託口」の大株主名 | 名義 / 信託口の名称。信託銀行による自己保有を推定しない。 |
| カストディアンの残高 / 預り資産 | 銀行自身の投資ポートフォリオではなく、管理下にある顧客資産。 |
| 議決権の開示 | 議決権の指図は通常、資産所有者 / 運用者に帰属する。カストディアンは機械的に執行することがある。 |
| 貸株収益 | 貸株プログラムの条件によっては、一部が受益者に帰属することがある。 |
| ファンド会計 / NAV 業務 | 投資判断そのものではなく、運営面の資産サービシング層。 |

## 資本市場とのリンク信託銀行のカストディは、銀行業を証券市場インフラに結びつける:

- [[securities/japan-securities-depository-center|JASDEC]] および市場インフラを通じた決済とコーポレートアクション;
- [[foreign-financial-institutions/euroclear-bank-japan|Euroclear Bank Japan]] および [[foreign-financial-institutions/clearstream-banking-japan|Clearstream Banking Japan]] を通じた ICSD / クロスボーダーカストディ;
- [[securities/japan-stock-lending-market-route|stock lending route]] および [[financial-regulators/japan-securities-finance|JSF]] を通じた証拠金 / 貸株;
- [[securities/nisa-2024-flow|NISA / household asset-building]] および資産運用ページを通じた投資信託・年金フロー;
- [[securities/tokyo-stock-exchange|TSE]] の開示書類および大株主表を通じた発行体の株主分析。

## 調査チェックリスト

1. 信託銀行が、受託者、カストディアン、ファンドアドミニストレーター、トランスファーエージェント、証券代行、または自己勘定のバランスシート主体のいずれとして行動しているかを特定する。
2. 所有に関する結論を導く前に、名義名を受益者から分離する。
3. FSA の信託銀行 / 信託会社のリストおよび信託協会の説明を確認する。
4. 貸株および空売りの論点は、カストディ残高を空売りシグナルとして扱うのではなく、[[securities/japan-stock-lending-market-route|stock lending]] に結びつける。
5. 現在の AUC / AuA の数値については、カストディ残高が市場価格や新規マンデートとともに変動するため、出典の日付を記録する。

## 関連項目

- [[banking/INDEX]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[trust-banks/master-trust-bank]]
- [[trust-banks/custody-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/mizuho-trust-bank]]
- [[foreign-financial-institutions/euroclear-bank-japan]]
- [[foreign-financial-institutions/clearstream-banking-japan]]
- [[securities/japan-stock-lending-market-route]]
- [[securities/japan-market-infrastructure-map]]
- [[INDEX|FinWiki index]]

## 出典

- FSA:信託業務を営む金融機関のリスト。
- FSA:信託業務を営む金融機関に関する信託会社等の監督指針セクション。
- 一般社団法人 信託協会:信託銀行の説明および会員会社リスト。
- JASDEC / JSCC / 日本銀行:証券決済、DVP、JGB 振替の公開資料。
- 日本マスタートラスト信託銀行:公式の業務概要。
- 日本カストディ銀行:公式の会社 / 業務説明。
