---
source: securities/japan-prime-brokerage-and-institutional-financing
source_hash: 5abc833537c55687
lang: ja
status: machine
fidelity: ok
title: "日本のプライムブローカレッジと機関投資家向けファイナンス"
translated_at: 2026-06-03T00:53:08.291Z
---
# 日本のプライムブローカレッジと機関投資家向けファイナンス

## ウィキ上の位置づけ

このページは [[securities/INDEX|securities domain]] 配下にある。プライムブローカレッジが免許、カストディ、担保、資金調達の問題になる場合は、[[financial-licenses/INDEX|JapanFG legal / financial licenses]]、[[securities/financial-instruments-business-operators-japan-index|FIEA operator registry]]、[[banking/INDEX|banking domain]]、[[money-market/INDEX|money-market domain]] とあわせて読む。

## 概観

日本のプライムブローカレッジは、単一の免許ラベルではない。第一種金融商品取引業、ブローカーディーラー執行、信用取引金融、証券貸借、株券借入、デリバティブ、レポ / 担保業務、カストディ、清算、決済から構成されるホールセール向けサービススタックである。

このページは [[securities/japan-margin-trading-and-securities-finance|margin trading and securities finance]]、[[securities/japan-stock-lending-market-route|stock lending market route]]、[[securities/japan-short-selling-and-stock-loan-controls|short-selling and stock-loan controls]]、[[securities/japan-market-infrastructure-map|market infrastructure map]]、[[financial-licenses/securities-license-stack|securities license stack]] とともに使う。

## 機能スタック

| 機能 | 法的 / 規制上のアンカー | インフラ経路 | 主なリスク |
|---|---|---|---|
| 執行 | 第一種金融商品取引業者 / ブローカーディーラー経路。 | 取引所、PTS、ブローカーのルーティング、SOR。 | 最良執行、注文表示、相場操縦。 |
| 現金融資 | 信用取引 / 貸借取引および相対の与信枠。 | ブローカーのバランスシート、JSF、担保口座。 | レバレッジ、追証、清算。 |
| 証券借入 | 株式貸借、借株、ロケート / カバー手配。 | カストディアン、貸し手、借り手、JSF、JASDEC。 | フェイル、リコール、希少性、空売り規制対応。 |
| 合成エクスポージャー | 免許範囲内のデリバティブ / スワップ / CFD類似エクスポージャー。 | ディーラーのリスクブック、マージン、担保、ドキュメンテーション。 | カウンターパーティ、評価、クローズアウト、適合性。 |
| カストディ / 決済 | 顧客資産分別管理、DVP、JASDEC / JSCC 経路。 | カストディアン、ブローカー、CCP、CSD。 | 資産分別、決済フェイル、オペレーショナルリスク。 |
| 担保業務 | 現金 / 証券担保とマージニング。 | カストディアン、ブローカー、CCP、トレジャリー。 | 再利用 / 再担保類似エクスポージャー、集中、流動性。 |

## アクターマップ

| アクター | 役割 |
|---|---|
| プライムブローカー | 機関投資家顧客に対して、資金調達、株券借入、執行アクセス、レポーティング、担保業務を提供する。 |
| 執行ブローカー | 注文をルーティングし執行する。資金提供ブローカーと同一の場合も別の場合もある。 |
| カストディアン | 資産を保管し、コーポレートアクションを処理し、資産分別 / 貸株プログラムを支援する。 |
| 証券金融会社 | [[financial-regulators/japan-securities-finance|Japan Securities Finance]] が標準化された信用取引および証券金融経路を支える。 |
| CCP / CSD | [[securities/japan-securities-clearing-corp|JSCC]] が清算し、[[securities/japan-securities-depository-center|JASDEC]] が振替 / 決済経路を支える。 |
| 顧客 | ヘッジファンド、アセットマネージャー、自己勘定、マーケットメーカー、その他の機関投資家。 |

## リテール信用取引はプライムブローカレッジではない

[[securities/japan-margin-trading-and-securities-finance|Retail margin trading]] は重要なインフラであるが、機関投資家向けプライムブローカレッジと同じではない。リテール信用取引は、制度信用 / 一般信用、ブローカー与信、JSF、貸株管理を説明する。プライムブローカレッジは、それに加えて、より広い機関投資家向けファイナンス、ポートフォリオ単位の担保、ショートアクセス、合成エクスポージャー、カストディ / レポーティング、複数市場での執行を含む。

## 資金調達経路マップ

| 経路 | 読み方 | 開くページ |
|---|---|---|
| 現金信用 | 顧客が担保を差し入れて資金または証券を借りる。 | [[securities/japan-margin-trading-and-securities-finance|margin trading route]] |
| 株券借入 | 空売り、ヘッジ、マーケットメイク、決済カバーのために証券を借りる。 | [[securities/japan-stock-lending-market-route|stock lending route]] |
| 空売り管理 | 注文表示、価格規制、ポジション開示、銘柄別措置。 | [[securities/japan-short-selling-and-stock-loan-controls|short-selling controls]] |
| レポ / 担保 | JGB または証券担保が資金調達と流動性を支える。 | [[money-market/jgb-repo-market-japan|JGB repo market]] |
| DVP / 決済 | 現金と証券が CCP / CSD 決済経路を通じて移動する。 | [[securities/japan-market-infrastructure-map|market infrastructure map]] |

## JapanFG 企業ルーティング

| 企業ページ | 想定されるウィキ上の役割 |
|---|---|
| [[securities-firms/nomura-hd|Nomura]], [[securities-firms/daiwa-sg|Daiwa Securities Group]] | 国内ホールセール証券 / プライムファイナンス / 機関投資家向けブローカレッジのアンカー。 |
| [[securities-firms/smbc-nikko|SMBC Nikko]], [[securities-firms/mizuho-securities|Mizuho Securities]], [[securities-firms/mufg-mums|MUMSS]] | 機関投資家向けファイナンス / ブローカレッジ文脈を持つメガバンク系証券会社。 |
| [[securities-firms/goldman-sachs-japan|Goldman Sachs Japan]], [[foreign-financial-institutions/jpmorgan-japan|J.P. Morgan Japan]], [[securities-firms/morgan-stanley-japan|Morgan Stanley Japan]], [[foreign-financial-institutions/ubs-japan|UBS Japan]] | グローバルなプライムブローカレッジ / 市場部門 / 機関投資家向けファイナンスの比較対象。 |
| [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]], [[foreign-financial-institutions/state-street-japan|State Street Japan]], [[foreign-financial-institutions/euroclear-bank-japan|Euroclear Bank Japan]], [[foreign-financial-institutions/clearstream-banking-japan|Clearstream Banking Japan]] | カストディ、決済、グローバル担保の文脈。 |

## 管理上の問い

| 問い | 公開情報上の関連性 |
|---|---|
| 法的な取引相手は誰か。 | プライムブローカー、執行ブローカー、カストディアン、貸し手が異なる場合がある。 |
| 資産は分別管理されているか。 | 顧客資産保護と破綻時の帰結は、法的 / 運用上の設定に依存する。 |
| どの担保が差し入れられているか。 | 現金、JGB、株式、その他担保は、流動性とヘアカットリスクが異なる。 |
| 証券はリコール可能か。 | 借入可能性はコーポレートアクション、議決権、希少性の周辺で変化し得る。 |
| エクスポージャーは現物か合成か。 | ドキュメンテーション、マージニング、税務、クローズアウトリスクが異なる。 |
| どのインフラ経路で決済されるか。 | JSCC / JASDEC / カストディアン経路は、DVP、フェイル、照合管理に影響する。 |

## 調査チェックリスト

1. まず活動を特定する。執行、信用取引、株券借入、デリバティブ、カストディ、担保、レポーティングのどれか。
2. 該当する場合、FSA の金融商品取引業者リストと JSDA 会員資格で法的地位を確認する。
3. 顧客向け商品ページと、実際の日本法人 / 登録を分ける。
4. 借入可能性を解釈する前に、空売り、貸株、銘柄別制限ページを確認する。
5. グローバル銀行については、法人に関する問いを [[financial-licenses/foreign-financial-group-adjacent-licenses|foreign financial group adjacent licenses]] 経由で整理する。

## 注意点

- プライムブローカレッジの条件は契約上かつ顧客別であることが多く、公開ページは通常、個別顧客条件ではなく機能を説明する。
- このページは、適合性、レバレッジ、投資推奨を記録しない。
- 現時点の免許状態は、実利用前に FSA / JSDA 情報源で更新確認する必要がある。

## 関連項目

- [[securities/INDEX]]
- [[securities/japan-margin-trading-and-securities-finance]]
- [[securities/japan-stock-lending-market-route]]
- [[securities/japan-short-selling-and-stock-loan-controls]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-securities-depository-center]]
- [[financial-licenses/securities-license-stack]]
- [[financial-regulators/japan-securities-finance]]
- [[INDEX|FinWiki index]]

## 出典

- FSA: FIBO list, FIEA FAQ, and supervisory guidelines for financial instruments business operators.
- JSDA: member list and borrowing / lending transaction guidelines for share certificates.
- JPX / JSCC / JASDEC: margin trading, DVP settlement, and institutional settlement public pages.
- JSF: public restriction / loan information for margin transactions.
- Nomura and J.P. Morgan: public prime finance / prime services pages.
