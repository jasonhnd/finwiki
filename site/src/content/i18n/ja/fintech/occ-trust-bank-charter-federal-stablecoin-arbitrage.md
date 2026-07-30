---
source: fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage
source_hash: 88d7582b00ca3d1a
lang: ja
status: machine
fidelity: ok
title: "OCC ナショナル・トラスト・バンク経路"
translated_at: 2026-07-30T00:00:00+09:00
---

# OCC ナショナル・トラスト・バンク経路 · Bridge の予備的条件付き承認


## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下に位置づけられる。隣接する文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読む。

> [!info] 要約
> OCC Corporate Decision 1365 は、2026-02-12 に proposed Bridge National Trust Bank へ **予備的条件付き承認**を与えた。これは最終チャーターや営業開始許可ではない。OCC は、開業前要件が満たされるまで最終承認を与えず、Bridge はそれまで銀行業を開始できないと明記する。決定書は、ステーブルコイン発行、カストディ、オーケストレーション、準備資産管理、担保受託サービスという計画事業と詳細な条件を記載するが、50 州すべての MTL が一律不要になること、Federal Reserve マスターアカウント / Fedwire / FedNow へ直接接続できること、または評価額プレミアムを保証しない。^[source:OCC Corporate Decision 1365, 2026-02-12]

## Bridge 決定の確認可能な状況

| 項目 | OCC 決定が記載する内容 | 証拠上の境界 |
|---|---|---|
| 承認段階 | 予備的条件付き承認 | 最終承認でも営業開始許可でもない |
| 計画上の所有者 | Bridge Ventures LLC の完全子会社。Bridge Ventures は Stripe の完全子会社 | 親会社関係は許可条件や個別法人の義務を消さない |
| 計画事業 | USD ステーブルコイン発行、デジタル資産カストディ、オーケストレーション、準備資産管理、担保受託 | 計画であり、現在すべてを提供中という意味ではない |
| チャーター範囲 | 信託会社の業務および関連業務 | フルサービスの預金保険対象銀行と同一ではない |
| GENIUS Act | 同法と実施規則に適合するため、必要に応じて事業を適合・停止・売却する必要がある | 条件付き承認は後続規則からの包括免除ではない |
| 開業ゲート | 開業前検査と OCC の最終承認が必要 | OCC は最終承認前に変更、停止、取消しができる |

出典注記：全行は [OCC Corporate Decision 1365](https://www.occ.gov/topics/charters-and-licensing/interpretations-and-decisions/2026/cd1365.pdf)、特に 1-2 頁と 8-13 頁に基づく。

## 重要な条件

- 最低 **USD 45 million** の tier 1 capital。
- tier 1 capital の少なくとも 50% または **USD 27.5 million** のいずれか大きい額を Eligible Liquid Assets で保有する。
- 180 日分の営業費用を別途 Eligible Liquid Assets で維持する。
- 重要な事業計画変更には事前通知と OCC の書面による異議なしが必要。
- 銀行は Bank Holding Company Act section 2(c)(1)-(2) の「bank」定義に該当してはならない。
- 12 か月以内に資本を調達しない、または 18 か月以内に開業しない場合、例外的救済がない限り予備承認は失効する。

これらは決定書で公開された Bridge 固有の条件である。従来の出典のない USD 5-20 million という資本推定、一般的な 12-24 か月という期間、州別コスト削減額に代わる。

## 州 MTL の専占：事実関係ごとの判断であり、包括的ではない

OCC Interpretive Letter 1167 は、記載された連邦法上認められる**信託**業務を行う national bank は、その業務について州の money-transmitter licence を必要としないと結論づけた。同書簡は、事実、法律、規則が異なれば結論も異なり得ると明記する。Bridge の決定には、信託業務と非信託業務の双方の計画が含まれる。したがって同書簡は、特定の信託権限についての法的経路を支持するが、すべてのステーブルコイン、オーケストレーション、関連会社、または非銀行業務があらゆる州要件から免除されるとは示さない。^[source:OCC Interpretive Letter 1167, 2020-05-20]

## Federal Reserve と決済システムの境界

OCC 決定は Bridge National Trust Bank が 12 USC 222 に基づき Federal Reserve Bank 株式を申請すると記載する。Bridge が Federal Reserve マスターアカウントまたは Fedwire / FedNow への直接アクセスを持つとは記載していない。Federal Reserve 資料は、口座関係と適用契約を通じた Fedwire 参加を説明している。適格性とアクセスは OCC チャーター段階から推測せず、Federal Reserve の記録で確認する。^[source:OCC Corporate Decision 1365; Federal Reserve Fedwire assessment]

## 検証済みタイムライン

| 日付 | 公開記録 |
|---|---|
| 2025 | OCC の管理番号が de novo charter と waiver の申請を特定 |
| 2026-02-12 | OCC が Corporate Decision 1365 で予備的条件付き承認を付与 |
| 開業前 | 資本、ガバナンス、システム、コンプライアンス、開業前検査、その他要件を完了する必要がある |
| 予備承認から 18 か月以内 | OCC が記載する限定的な延長事情がない限り、銀行は開業しなければ承認が失効 |

出典注記：[Corporate Decision 1365](https://www.occ.gov/topics/charters-and-licensing/interpretations-and-decisions/2026/cd1365.pdf) が時点を支配する一次資料であり、後日の最終決定について OCC の [Interpretations & Decisions index](https://www.occ.gov/topics/charters-and-licensing/interpretations-and-decisions/index-interpretations-and-decisions.html) を確認する。

## 比較チェックリスト

州 MTL、NYDFS trust / BitLicense、industrial bank、credit union、offshore e-money の各経路と比較する場合、申請者の実際の業務を使い、次の項目を分けて報告する。

- 法人と規制当局
- 予備的、条件付き、最終、営業中という状況
- 業務ごとの州法専占分析
- 資本・流動性条件
- 預金保険の状況
- Federal Reserve 口座と決済システムの状況
- 申請の経過時間と開示されたコスト

公式資料に比較可能なデータセットがないため、本ページは経路間のコスト、時間、評価額の順位を示さない。

SEC / CFTC の管轄背景は [[fintech/cftc-sec-crypto-jurisdiction|CFTC と SEC の暗号資産管轄争い]] にある。法域横断のライセンス比較は [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリクス]] で扱い、状況と業務範囲を分ける。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act の実施状況]]
- [[fintech/three-circles-stablecoin-mra-framework|米国・EU・日本のステーブルコイン市場アクセス比較]]
- [[fintech/regulatory-window-strategic-acquisition|規制ウィンドウ前戦略買収]]
<!-- /wiki-links:managed -->
