---
source: foreign-financial-institutions/euroclear-bank-japan
source_hash: 4d485c19c3b2d2ec
lang: ja
status: machine
fidelity: ok
title: "ユーロクリア・バンク日本 (Euroclear Bank Japan)"
translated_at: 2026-06-02T14:25:12.383Z
---
# ユーロクリア・バンク日本 (Euroclear Bank Japan)

## ウィキ上の位置づけ

この項目は [[foreign-financial-institutions/INDEX|foreign-financial-institutions INDEX]] の配下にあり、[[foreign-financial-institutions/foreign-bank-branches-japan-index|foreign-bank branch registry]] 内の Euroclear 行を登録一覧だけの扱いから、独立した ICSD / 担保ルートへ引き上げる。[[foreign-financial-institutions/clearstream-banking-japan|Clearstream Banking Japan]]、[[securities/japan-market-infrastructure-map|Japan market infrastructure map]]、[[money-market/jgb-repo-market-japan|JGB repo market]] とあわせて読む。

## 概要

Euroclear Bank SA/NV Japan Branch は日本の外国銀行支店だが、分析上の役割は通常の預金 / 融資銀行ではない。この支店は、日本証券、JGB 担保、クロスボーダー決済、グローバルカストディ、ポストトレードのリスク管理をつなぐ国際証券集中保管機関 (ICSD) の、日本における法務・業務上の拠点である。

登録は、確認済みの金融庁ソースで 2026-05-13 時点のものとして観測される。本ページは、引用した公開ソースを超えて現在のライセンス状態を独自に判断しない。

## 登録一覧だけで済まない理由

Euroclear は市場インフラに隣接する存在である。ロングテールの外国銀行なら [[foreign-financial-institutions/foreign-bank-branches-japan-index|the registry index]] に残してよい場合もあるが、日本に関する論点は次の要素に依存しやすいため、Euroclear は独立ページに置くべきである。

- 日本国外の機関投資家口座による日本証券へのアクセス。
- クロスボーダー担保としての JGB 利用。
- DVP と決済リスク削減。
- 発行体名簿を読む際のカストディ / 名義人名義の解釈。
- 国内銀行免許とグローバルなポストトレードサービスの境界。

そのため本ページは、通常の商業銀行支店ページではなく、[[foreign-financial-institutions/clearstream-banking-japan|Clearstream]]、[[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]]、[[foreign-financial-institutions/state-street-japan|State Street Japan]]、[[foreign-financial-institutions/deutsche-japan|Deutsche Japan]] のピアにあたる。

## 機能スタック

| レイヤー | 日本での関連性 | 主な根拠ルート |
|---|---|---|
| 外国銀行支店 | 金融庁の銀行免許一覧が日本支店の行を特定する。 | 金融庁の免許・登録金融機関一覧 / 都市銀行等・外国銀行支店 PDF。 |
| ICSD アクセス | Euroclear はグローバル投資家を証券決済・カストディルートにつなぐ。 | Euroclear の公開開示と市場サービスページ。 |
| JGB 担保 | JGB はクロスボーダーの担保最適化と流動性管理の一部になり得る。 | Euroclear の JGB 担保 / リスク事例資料。 |
| カストディ / 資産管理サービス | カストディ、コーポレートアクション、決済指図は、投資家向け証券口座の背後に位置する。 | Euroclear の開示と証券サービス資料。 |
| システムマップ | Euroclear 分析は、JASDEC、JSCC、JGB レポ、株券貸借ルートと結びつく。 | [[securities/japan-securities-depository-center|JASDEC]]、[[securities/japan-securities-clearing-corp|JSCC]]、[[money-market/jgb-repo-market-japan|JGB repo]]。 |

## 日本資産ルート

| 論点 | 読み方 |
|---|---|
| これは日本のリテール銀行か。 | いいえ。消費者向け銀行ではなく、ホールセールのポストトレード・インフラとして扱う。 |
| 日本支店が事業全体なのか。 | いいえ。日本支店は Euroclear Bank のグローバル ICSD ネットワーク内にある、国内の法務 / サービス上の拠点である。 |
| 金融庁上の銀行ステータスはなぜ重要か。 | 外国 ICSD 銀行が、クロスボーダーのポストトレードサービスを提供しながら、免許を持つ日本支店を維持する仕組みを説明する助けになる。 |
| 取引や市場メモで何を確認すべきか。 | 証券種別、カストディチェーン、決済場所、担保適格性、口座名、業務依存関係。 |
| 次に開くべきページはどれか。 | [[securities/japan-market-infrastructure-map|market infrastructure map]]、[[banking/japan-trust-bank-custody-map|trust-bank custody map]]、[[securities/japan-stock-lending-market-route|stock lending route]]。 |

## ピア / 対照マップ

| ピア | 対照点 |
|---|---|
| [[foreign-financial-institutions/clearstream-banking-japan|Clearstream Banking Japan]] | 最も近い ICSD ピアであり、日本の決済・カストディルートのクロスチェックに有用。 |
| [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]] | 日本の信託 / 支店プレゼンスを持つグローバルカストディアン / 資産管理サービス銀行。 |
| [[foreign-financial-institutions/state-street-japan|State Street Japan]] | グローバルカストディアンかつ資産運用会社で、外国投資家および ETF / ファンドルートに重要。 |
| [[foreign-financial-institutions/deutsche-japan|Deutsche Japan]] | Deutsche Boerse / Clearstream との隣接性に加え、より広い投資銀行・カストディ文脈を持つ。 |
| [[financial-regulators/japan-securities-finance|Japan Securities Finance]] | 国内証券金融のアンカーであり、ICSD 担保と国内株券貸借ルートが交差する場面で有用。 |

## 調査チェックリスト

1. 問いがライセンス、カストディ、決済、担保、市場アクセスのどれに関するものかを確認する。
2. 金融庁一覧は日本支店登録のアンカーに限定して使い、サービス範囲の主張には Euroclear の公開開示を使う。
3. Euroclear の ICSD 役割を、[[securities/japan-securities-depository-center|JASDEC]] と [[securities/japan-securities-clearing-corp|JSCC]] が担う日本国内の CSD / CCP 機能から切り分ける。
4. 株主名簿や名義人名義を読む際は、追加証拠なしにカストディアン / ICSD 口座を経済的所有者と見なさないよう切り分ける。
5. JGB 担保の論点は [[money-market/jgb-repo-market-japan|JGB repo market]] に、証券借入の論点は [[securities/japan-stock-lending-market-route|stock lending route]] にリンクする。

## 注意点

- Euroclear のサービス範囲はグローバルであり、市場、証券種別、口座設定、ルールブックによって変わり得る。日本支店の存在だけから、特定商品の利用可能性を推定してはいけない。
- 公開登録行は一時点のスナップショットである。現在のライセンス確認に本ページを使う場合は、金融庁ソースを更新確認する。
- 本項目はインフラ分析であり、法的助言、投資助言、特定投資家口座に関する表明ではない。

## 関連項目

- [[foreign-financial-institutions/INDEX]]
- [[foreign-financial-institutions/foreign-bank-branches-japan-index]]
- [[foreign-financial-institutions/clearstream-banking-japan]]
- [[foreign-financial-institutions/bny-mellon-japan]]
- [[foreign-financial-institutions/state-street-japan]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[money-market/jgb-repo-market-japan]]
- [[INDEX|FinWiki index]]

## 出典

- 金融庁：免許・登録金融機関一覧および外国銀行支店一覧。
- 金融庁：外国銀行代理業者一覧。
- Euroclear：日本支店ライセンス発表および公開開示 / 質問票。
- Euroclear：JGB 担保最適化とリスク削減に関する公開資料。
