---
source: retail/japan-retail-financial-distribution-wedge-matrix
source_hash: e5bf2863e5c381a7
lang: ja
model: qwen3-4b-instruct-2507-4bit-guarded-full-sync+manual-review
status: machine
fidelity: ok
title: "日本の流通系金融比較マトリクス"
translated_at: 2026-07-29T05:13:34.783Z
---

# 日本の流通系金融比較マトリクス

## 目的

本ページでは、現在の公開情報に基づき、4つの日本国内の小売関連金融構造を比較している。

- イオン
- セブン&アイ / セブン銀行
- ファミリーマート / 伊藤忠
- ローソン / KDDI / 三菱商事

比較対象は事業体の境界と流通チャネルであり、規模、収益性、顧客価値、戦略の質の順位ではない。変動する件数や仮想シナリオは除外した。

[[retail/INDEX|retail INDEX]]からたどる。詳細は[[retail/aeon-group|AEON]]、[[retail/seven-i-holdings-finance-deep-dive|Seven & i / Seven Bank]]、[[retail/familymart-itochu-financial-integration|FamilyMart / ITOCHU]]、[[retail/lawson-kddi-retail-finance|Lawson / KDDI]]を参照する。

## 現在の所有権および支配

この表の情報源：[AEON Financial Service overview](https://www.aeonfinancial.co.jp/en/corp/about/)、[Seven Bank's 2026 shareholder list](https://www.sevenbank.co.jp/english/ir/stock/stock_info.html)、[ITOCHU's FamilyMart tie-up release](https://www.itochu.co.jp/en/news/press/2021/210316_2.html)、[KDDI's final Lawson ownership notice](https://news.kddi.com/kddi/corporate/english/ir-news/2024/08/20/pdf/press_20240820.pdf)。

| 小売グループ構成 | 現在の構造上の中核 | 公表資料で確認できる所有関係の境界 |
|---|---|---|
| イオン | イオングループに、上場会社のイオンフィナンシャルサービスとイオン銀行がある | イオンフィナンシャルサービスがグループの金融サービス事業を担うが、商品提供主体と許認可はそれぞれ別である |
| セブン&アイ / セブン銀行 | セブン銀行と金融子会社が、持分法の関係を通じてセブン&アイとつながる | セブン銀行はセブン&アイの連結子会社ではなくなった。2026-03-31の株主スナップショットでは、セブン‐イレブン・ジャパンが33.38%、伊藤忠が20.41%を保有 |
| ファミリーマート / 伊藤忠 | 伊藤忠の構造を通じて支配される非公開会社のファミリーマートに、JAグループの公表済み少数持分がある | ファミリーマートの傘下銀行は確認できない。決済、カード、ATMの各提携先を別々に特定する必要がある |
| ローソン / KDDI / 三菱商事 | 2024年の非公開化後、非公開会社のローソンを共同運営 | KDDIと三菱商事がローソン議決権を各50%保有 |

セブン銀行の行は基準日に注意が必要である。46.44%や39.92%といった過去の数値ではなく、現在の株主一覧を使う必要がある。

## 物理的な流通と銀行レイヤー

この表の情報源：[AEON Financial Service domestic operations](https://www.aeonfinancial.co.jp/en/corp/enterprise/)、[Seven Bank's operating overview](https://www.sevenbank.co.jp/english/corp/company/business.html)、[FamilyMart's Famima ATM launch](https://www.family.co.jp/company/news_releases/2026/20260601_01.html)、[Lawson Bank](https://www.lawsonbank.jp/)。

| 構成 | 金融サービスの物理的な顧客接点 | 銀行 / インフラ提供者 | 正しい境界 |
|---|---|---|---|
| イオン | ショッピングセンター内の銀行支店、保険ショップ、ATM、小売POS | イオン銀行その他のイオンフィナンシャルサービス事業体 | 銀行、代理業、カード、保険、前払式支払手段の全機能が1つの免許に含まれるわけではない |
| セブン&アイ / セブン銀行 | セブン‐イレブンや多数のグループ外施設にあるセブン銀行ATM | セブン銀行 | ATM網は銀行のプラットフォームであり、小売側の親会社は銀行を連結していない |
| ファミリーマート / 伊藤忠 | ファミマATMの展開、店舗レジ、アプリ | セブン銀行がファミマATMのインフラを運営 | ファミリーマートブランドのATMは、ファミリーマートの銀行免許を意味しない |
| ローソン / KDDI / 三菱商事 | ローソン銀行ATM、POS、Loppi、店頭サービス | 銀行サービスはローソン銀行、受け入れるその他の商品は各提供者 | KDDIの銀行・カード商品はKDDI側の商品である |

セブン銀行の役割は現在、従来の小売グループの境界を越えている。セブン&アイとの密接な関係を維持する一方、伊藤忠が大口持分を保有し、セブン銀行は2026年にファミマATMのインフラ提供を開始した。

## 支払い、クレジットカード、ロイヤルティ層

この表の情報源：[AEON Financial Service domestic operations](https://www.aeonfinancial.co.jp/en/corp/enterprise/)、[Seven Card Service](https://www.7card.co.jp/company/bs/)、[FamilyMart's payment directory](https://www.family.co.jp/services/payment.html)、[Lawson's point-card directory](https://www.lawson.co.jp/ponta/)。

| 構成 | グループに関連する決済 / カード | ロイヤルティまたはIDの接点 | 重要な制約 |
|---|---|---|---|
| イオン | イオンカード、WAON、AEON Pay | WAON POINTとイオンのアプリ・カードの関係 | 特典ごとに発行者、加盟店、商品、基準日を確認する |
| セブン&アイ / セブン銀行 | セブン・カードサービスを通じたセブンカード / セブンカード・プラスとnanaco | nanacoと7iDは関連するが、契約上は別である | セブン・カードサービスはセブン銀行の子会社 |
| ファミリーマート / 伊藤忠 | ファミマデジタルワンを通じたFamiPayと、ポケットカードと連携したファミマカード | FamiPayの特典に加え、dポイント、楽天ポイント、Vポイントを受け入れ | 複数ポイントの受け入れは、ファミリーマートが各プログラムを所有することを意味しない |
| ローソン / KDDI / 三菱商事 | ローソンはau PAYその他の決済手段を受け入れ、ローソン銀行はATMサービスを提供 | ローソンは現在、Pontaとdポイントの双方を案内 | au PAYとau PAY カードはローソン発行ではなく、Pontaもローソン専用ではない |

## エンティティ × プロダクト × チャネル マトリクス

この表の情報源：上記の現在の会社および製品ページ、[Seven Bank's subsidiary list](https://www.sevenbank.co.jp/english/corp/company/outline.html)、および[Famima Digital One's creation announcement](https://www.family.co.jp/company/news_releases/2019/20190701_01.html)。

| 商品または機能 | AEON | Seven & i / Seven Bank | FamilyMart / ITOCHU | Lawson / KDDI / Mitsubishi |
|---|---|---|---|---|
| 対象の小売構成における免許銀行 | イオン銀行 | セブン銀行 | ファミリーマート子会社として確認できるものはない | ローソン銀行 |
| カードレイヤー | イオンカード | セブン・カードサービス | ポケットカードと連携したファミマカード | KDDI側のau PAY カードは、別契約に基づき受け入れ・流通する可能性がある |
| 電子マネー / アプリウォレット | WAONとAEON Pay | nanaco | FamiPay | au PAYはKDDI側。ローソンは複数の決済手段を受け入れる |
| 主な小売チャネルのATM提供者 | イオン銀行と提携先 | セブン銀行 | ファミマATM契約に基づくセブン銀行 | ローソン銀行 |
| ポイントの関係 | WAON POINT | nanacoポイントと小売会員との連携 | FamiPay特典と、受け入れる複数の共通ポイント | 現在、Pontaとdポイントの双方を受け入れ |
| 保険の流通 | イオン保険サービスの代理店と銀行チャネル | 商品ごとに異なり、本比較の中核ではない | 将来商品・提携商品には別途根拠が必要 | KDDIとの提携で保険が検討分野として挙げられた |

## 所有、提携、受け入れの区別

「店舗で利用できる」ことは3種類の異なる関係を表し得る。これらの混同が、小売金融マッピングの誤りの多くを生む。

以下の分類表の情報源：[AEON Financial Service overview](https://www.aeonfinancial.co.jp/en/corp/about/), [Seven Bank's subsidiary list](https://www.sevenbank.co.jp/english/corp/company/outline.html), [FamilyMart's Famima ATM announcement](https://www.family.co.jp/company/news_releases/2026/20260601_01.html), [KDDI's Lawson partnership announcement](https://newsroom.kddi.com/english/news/detail/kddi_pr_secret-79.html)

| 関係 | 意味 | 例 |
|---|---|---|
| 自社所有／連結 | その事業は報告グループ内の子会社である | セブン銀行はセブンカードサービスおよびセブン・ペイメントサービスを子会社として所有している |
| 持分法適用関係 | 完全連結を伴わない重要な影響力 | セブン銀行とセブン&アイ、伊藤忠との現在の関係 |
| 提携 / 流通 | 別の提供者の商品が小売チャネルを利用 | セブン銀行がファミマATMを運営し、KDDIのサービスはローソンを通じて流通する可能性がある |
| POSでの受け入れ | 店舗が決済手段やポイント会員証を受け入れる | ファミリーマートは複数のコード決済・共通ポイントを受け入れ、ローソンはPontaとdポイントの双方を案内 |
| 計画 / 検討 | 会社が意向や例を発表 | ファミリーマートは銀行代理業の許可取得を検討し、ローソンとの提携は銀行・保険の流通可能性を例示 |

## 証拠に基づく差異

この表の情報源：[AEON Financial Service overview](https://www.aeonfinancial.co.jp/en/corp/about/)、[Seven Bank's operating overview](https://www.sevenbank.co.jp/english/corp/company/business.html)、[FamilyMart's Famima ATM launch](https://www.family.co.jp/company/news_releases/2026/20260601_01.html)、[KDDI's final Lawson ownership notice](https://news.kddi.com/kddi/corporate/english/ir-news/2024/08/20/pdf/press_20240820.pdf)。

| 比較軸 | イオン | セブン&アイ / セブン銀行 | ファミリーマート / 伊藤忠 | ローソン / KDDI / 三菱商事 |
|---|---|---|---|---|
| 中核となる物理チャネル | モール、スーパーマーケットその他の小売チャネル | コンビニと第三者施設のATM設置場所 | コンビニアプリ、POS、提携ATMの展開 | コンビニPOS、ATM、サービス端末 |
| 金融事業体の統合 | イオンの幅広い金融サービスグループ | カード・決済子会社を持つ銀行中心のグループ | ウォレットと提携カードのモデル。銀行インフラは提携先 | ローソン銀行と、共同所有関係の下にあるKDDI側商品 |
| ガバナンス上の事実 | 上場グループ構造 | セブン銀行は2025年にセブン&アイの連結から外れた | ファミリーマートは2020年に非公開化 | ローソンの最終的な50対50所有が2024年に完了 |
| グループをまたぐ依存 | イオン各社の間で商品ごとに依存 | セブン銀行はグループ内外の施設にサービスを提供 | 対象レイヤーでポケットカードとセブン銀行に依存 | ローソン各社とKDDI側のサービスの双方に依存 |

この表は構造上の比較に限られ、顧客獲得コストの低さ、転換率の高さ、利益プールの大きさ、データの優位性、競争上の堀の強さを示すものではない。

## 意図的に除外した主張

- 出典のない店舗滞在時間や客単価の範囲
- 年をまたいで検証せず転記したATM数・提携先数
- 独占ウォレットを想定した仮説上の交渉
- 事業体の財務諸表なしに行うポイント債務会計の推定
- 50対50の株主がすべての顧客データにアクセスできるという主張
- 計画中の銀行代理業許可申請が承認済みという主張
- キャッシュレス化が必ず特定グループに有利または不利に働くとの予測
- 日付と定義をそろえた比較指標なしでの「最大」「最良」「最も強固」といった順位付け

## 再利用可能なレビューワークフロー

以下のチェックリスト表の情報源：[Seven Bank's shareholder list](https://www.sevenbank.co.jp/english/ir/stock/stock_info.html)、[FamilyMart's current payment directory](https://www.family.co.jp/services/payment.html)、[KDDI's Lawson partnership announcement](https://newsroom.kddi.com/english/news/detail/kddi_pr_secret-79.html)。

| ステップ | 質問 | 最小証拠 |
|---|---|---|
| 1 | 商品を所有・運営する法人はどこか？ | 会社概要、子会社一覧、商品契約 |
| 2 | 連結、持分法、提携、単なる受け入れのどれか？ | 最新の年度決算と取引開示 |
| 3 | 開始済み、展開中、計画、検討段階のどれか？ | 日付のある実施発表 |
| 4 | どの許認可が適用されるか？ | 規制当局の登録簿または事業体の許認可開示 |
| 5 | 指標は現在も有効で比較可能か？ | 同じ基準日・定義による一次データ |
| 6 | 顧客データの利用を伴う主張か？ | 現在のプライバシー通知、同意、共同利用の開示 |

## 関連

- [[retail/INDEX|retail INDEX]]
- [[retail/aeon-group|AEON Group]]
- [[retail/seven-and-i-hd|Seven & i Holdings]]
- [[retail/seven-i-holdings-finance-deep-dive|Seven & i finance deep dive]]
- [[retail/familymart-itochu-financial-integration|FamilyMart + ITOCHU]]
- [[retail/lawson-kddi-retail-finance|Lawson + KDDI]]
- [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|Lawson 2024 take-private]]
- [[regional-banks/seven-bank|Seven Bank]]
- [[regional-banks/lawson-bank|Lawson Bank]]
- [[card-issuers/aeon-bank|AEON Bank]]
- [[loyalty/japan-points-landscape|Japan points landscape]]
- [[payments/cashless-jp-landscape|Japan cashless landscape]]
- [[INDEX|FinWiki index]]

## 出典

- AEON Financial Service overview: https://www.aeonfinancial.co.jp/en/corp/about/
- AEON Financial Service domestic operations: https://www.aeonfinancial.co.jp/en/corp/enterprise/
- Seven Bank operating overview: https://www.sevenbank.co.jp/english/corp/company/business.html
- Seven Bank shareholder list: https://www.sevenbank.co.jp/english/ir/stock/stock_info.html
- Seven Bank subsidiary list: https://www.sevenbank.co.jp/english/corp/company/outline.html
- FamilyMart FamiPay: https://www.family.co.jp/services/payment/famipay.html
- FamilyMart payment directory: https://www.family.co.jp/services/payment.html
- FamilyMart Famima ATM launch: https://www.family.co.jp/company/news_releases/2026/20260601_01.html
- KDDI / Mitsubishi Corporation / Lawson partnership: https://newsroom.kddi.com/english/news/detail/kddi_pr_secret-79.html
- KDDI final Lawson ownership notice: https://news.kddi.com/kddi/corporate/english/ir-news/2024/08/20/pdf/press_20240820.pdf
