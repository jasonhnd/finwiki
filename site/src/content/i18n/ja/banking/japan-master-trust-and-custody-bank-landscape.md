---
source: banking/japan-master-trust-and-custody-bank-landscape
source_hash: 6b2756a797635b30
lang: ja
status: machine
fidelity: ok
title: "日本のマスタートラスト・カストディ銀行の状況"
translated_at: 2026-06-02T11:47:37.280Z
---

# 日本のマスタートラスト・カストディ銀行の状況

## 概観

日本のマスタートラスト / カストディ銀行の状況は、二つのアンカーを持つ国内インフラ層である:[[JapanFG/master-trust-bank|Master Trust Bank of Japan]] と [[JapanFG/custody-bank|Custody Bank of Japan]]。これらは通常の意味での「投資家」ではなく、年金、投資信託、保険会社、資産運用会社、機関投資家のための資産管理銀行である。

このページは [[banking/japan-trust-bank-custody-map|trust-bank custody map]]、[[securities/japan-stock-lending-market-route|stock lending market route]]、[[securities/japan-market-infrastructure-map|market infrastructure map]]、[[JapanFG/bny-mellon-japan|BNY Mellon Japan]]、[[JapanFG/state-street-japan|State Street Japan]] と併せて使うこと。

## 状況マップ

| 機関 | 株主 / グループの論理 | 機能的な読み解き |
|---|---|---|
| [[JapanFG/master-trust-bank|Master Trust Bank of Japan]] | MUFG 信託 + 主要生保 / 協同組織金融の株主。 | 資産管理の専門家であり、主要な「信託口」名義人。 |
| [[JapanFG/custody-bank|Custody Bank of Japan]] | 三井住友トラスト / みずほ / 保険会社系のカストディ統合経路。 | 資産管理の専門家であり、主要な「信託口」名義人。 |
| [[JapanFG/bny-mellon-japan|BNY Mellon Japan]] | グローバルカストディ / 証券サービスグループ。 | グローバルカストディ、資産サービシング、外国人投資家のブリッジ。 |
| [[JapanFG/state-street-japan|State Street Japan]] | グローバルカストディ / 資産サービシンググループ。 | グローバルカストディと機関投資家サービスのブリッジ。 |
| フルサービス信託銀行 | MUFG 信託、みずほ信託、SMTB、SMBC 信託。 | より広範な信託 / 相続 / 不動産 / 年金 / 証券代行機能。 |

## 実際に何をするのか

| ワークストリーム | 説明 |
|---|---|
| 保管・決済 | 顧客の指図の下、株式、債券、ファンド、外国資産を保管・決済する。 |
| コーポレートアクション | 配当、分割、転換、償還、選択、通知を処理する。 |
| ファンド / 年金会計 | 保有、評価、報告、資産所有者の記録を算定する。 |
| グローバルカストディの調整 | 国内顧客を海外カストディアンおよび海外資産につなぐ。 |
| 証券貸借サポート | 該当する場合、貸借プログラムおよび担保 / リコールプロセスを管理する。 |
| ミドル / バックオフィスのアウトソーシング | 運用上のサービスで資産運用会社・機関投資家を支援する。 |

## なぜ開示書類に名前が出るのか

大株主表には、しばしば「日本マスタートラスト信託銀行株式会社(信託口)」や「日本カストディ銀行株式会社(信託口)」といった名前が記載される。それは通常、次を意味する:

1. 信託 / カストディ銀行は法的 / 記録上の名義である;
2. 経済的実質保有者は年金、ファンド、保険会社、資産運用会社、その他の顧客である;
3. 議決権と投資の意思決定は通常、顧客 / 運用会社の指図に従う;
4. 信託銀行の AUC / AuA は自己資本ではない。

このルールは、[[JapanFG/INDEX|JapanFG entity pages]]、発行体開示書類、株式持ち合い分析、ガバナンスページを読む際に決定的に重要である。

## 公開リサーチの論点

| 問い | 公開上の関連性 |
|---|---|
| 国内の二つの専門銀行は NISA / 年金 / ファンドフローの成長とともにスケールを続けられるか? | カストディとファンド管理の量は、時価と投資の普及とともに増える。 |
| バックオフィスのアウトソーシングはどれだけ資産運用会社からカストディ銀行へ移るか? | コスト構造と運用上の集中度を変える。 |
| グローバルカストディアンと国内カストディ銀行はどう仕事を分けるか? | 外国資産、日本のサブカストディ、グローバル投資家フローには調整が必要である。 |
| 証券貸借はより大きな収益 / 流動性層になるか? | カストディを [[securities/japan-stock-lending-market-route|stock lending]] および空売り分析に結びつける。 |
| トークン化証券やステーブルコイン決済はカストディにどう影響するか? | [[fintech/INDEX|fintech]] および [[securities/japan-market-infrastructure-map|market infrastructure]] への将来的なつながり。 |

## リサーチチェックリスト

1. カストディ銀行への言及がエンティティページなのか、株主名義人名なのか、資産サービシングのマンデートなのかを確認する。
2. 現在の事業ラインと AUC / AuA の数値には公式の会社ページを使う。
3. 信託協会の統計は、明確に記載されていない限り、会社固有のシェアではなくドメインレベルの背景として扱う。
4. 証券貸借、議決権、コーポレートアクションの論点を正しい専門ページにリンクする。
5. 名義人名の出現だけから実質保有を主張することを避ける。

## 関連項目

- [[banking/INDEX]]
- [[banking/japan-trust-bank-custody-map]]
- [[JapanFG/master-trust-bank]]
- [[JapanFG/custody-bank]]
- [[JapanFG/bny-mellon-japan]]
- [[JapanFG/state-street-japan]]
- [[securities/japan-stock-lending-market-route]]
- [[securities/japan-short-selling-and-stock-loan-controls]]
- [[securities/japan-market-infrastructure-map]]
- [[INDEX|FinWiki index]]

## 出典

- 日本マスタートラスト信託銀行:公式の事業概要および会社情報。
- 日本カストディ銀行:公式の会社 / 事業説明。
- 一般社団法人信託協会:信託財産運用残高統計。
- FSA:信託業務金融機関一覧。
