---
source: fintech/jamaica-jam-dex-cbdc
source_hash: 7361ada5b10bd0d1
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "ジャマイカ JAM-DEX — 2025 年公式採用スナップショット、ウォレット提供者、インセンティブ"
translated_at: 2026-07-30T02:19:00+09:00
---

# ジャマイカ JAM-DEX — 2025 年公式採用スナップショット

## ウィキ上の位置づけ

この項目は、Bank of Jamaica のリテール CBDC である **JAM-DEX（Jamaica Digital Exchange）**の法域別ケーススタディとして [[fintech/INDEX|fintech index]] の下に位置する。[[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]、[[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]、[[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] とあわせて読むが、調整済みのアクティブ利用者・取引データなしに採用度を順位付けしない。アーキテクチャの文脈は [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]、[[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大現役范式]]、[[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架構選択 4 核心权衡]] を参照。

> [!info] 要約
> Bank of Jamaica は、eCurrency Mint を採用したパイロットを 2021 年5月から12月まで実施し、2022 年に段階的な全国展開へ移行した。2022 年6月14日の改正により CBDC は法定通貨となり、BoJ が唯一の発行者であることが確認された。現在公表されている最新の年次報告書によれば、**2025 年末の登録ウォレット利用者は 305,026 人**で前年比 8.1% 増、流通額は **J$260.1 million**、公開ウォレット提供者は Lynk と JN Pay の 2 社である。BoJ は 2025 年に利用と支出が増加したとも述べるが、報告書はアクティブウォレット数、取引件数、加盟店数、または国際比較可能な普及指標を公表していない。したがって本ページは、JAM-DEX を採用度が最も高い同種事例とは位置づけず、累積登録数からアクティブ利用を推計しない。^[source:Bank of Jamaica Annual Report 2025, pp. 66-67; BoJ pilot and phased-rollout releases]

## プログラム構造

```
          Bank of Jamaica
                 │ JAM-DEX を発行・償還
                 ▼
       承認済みウォレット提供者チャネル
          ┌──────┴──────┐
          ▼             ▼
   NCB + TFOB/Lynk   JN Bank/JN Pay
          │             │
          └──── 消費者／加盟店 ────┘
```

この図は 2025 年末時点で公開提供者として報告された主体を示す。すべての PSP／DTI が JAM-DEX ウォレット提供者であることも、Lynk が唯一のチャネルであり続けることも意味しない。

## マトリクス A · 法令、規制当局、段階状況 ^[source:BoJ pilot completion; BoJ CBDC solution; BoJ 2022 phased-rollout release; BoJ Annual Report 2025]

| 項目 | 詳細 |
|---|---|
| 主務当局 | **Bank of Jamaica（BoJ）** |
| 法的根拠 | Bank of Jamaica (Amendment) Act, Act 5 of 2022。2022 年6月14日に可決された改正は、通貨に関する規定を CBDC へ拡張し、法定通貨としたうえで BoJ を唯一の発行者と確認した |
| パイロット | 2021 年5月から12月31日まで。準備が整ったウォレット提供者として NCB が参加 |
| 全国展開 | 2022 年に段階的に展開。引用した公表資料で BoJ は単一の公式な `2022-07 launch` 日を示していない |
| 技術パートナー | パイロットと全国展開に eCurrency Mint Inc. を選定 |
| ソース層の技術 | BoJ は、採用した発行／mint／償還ソリューションを非ブロックチェーン方式と説明している。ウォレット提供者は自社ネットワークで別の技術を利用し得る |
| 商品範囲 | ウォレット提供者を通じて配布されるジャマイカドル建てリテール CBDC |
| 現在の公式状況 | BoJ Annual Report 2025 は、5 年間の National Roll-Out 計画の 4 年目と報告 |

この改正はジャマイカの法的根拠を明確に示すが、条文ごとの法的比較なしに Bahamas／Nigeria より「明瞭」または「先行」と順位付けすることはしない。

## マトリクス B · 文書化された設計と配布 ^[source:BoJ CBDC pages and FAQ; BoJ Annual Reports 2023-2025; JIS incentive notice]

| 設計要素 | 文書化された詳細 | 証拠の境界 |
|---|---|---|
| 発行 | BoJ が JAM-DEX を発行し、承認済みウォレット提供者へ供給 | 報告書はすべての PSP／DTI が JAM-DEX を配布すると述べていない |
| 2025 年末の公開ウォレット | NCB と TFOB が Lynk を通じて提供。JN Bank は 2025 年5月に JN Pay を開始 | 提供者数は年末時点のスナップショットであり、ウォレットの市場シェアではない |
| 消費者インセンティブ | GOJ は 2022 年4月1日以降に JAM-DEX ウォレットを開設した先着 100,000 人へ J$2,500 を提供し、6月末までに上限へ到達 | 登録インセンティブは、その後のアクティブ利用を立証しない |
| 2023 年の加盟店インセンティブ | 条件を満たす小規模加盟店の先着 10,000 店へ J$25,000、さらに定められた上限の下で消費者向け 2% キャッシュバックを実施 | BoJ Annual Report 2025 は因果効果の推計を公表していない |
| 通貨上の特徴 | JAM-DEX はジャマイカの紙幣・硬貨と 1:1 で交換でき、利息を支払わない | ウォレット提供者の条件と利用資格は実装ごとに異なる |
| 技術 | eCurrency Mint が中央発行ソリューションを支え、BoJ はソース層でブロックチェーンを使用しないと説明 | ベンダーの選択だけでは採用度を決定しない |

インセンティブ制度は累積登録数の増加の一部を説明し得るが、ここで利用できる公式なアクティブウォレット時系列はない。インセンティブが「見出し向けの数字を買った」、または持続的な需要を生んだという主張は、取引単位の継続率データを必要とする仮説である。

## マトリクス C · 採用と流通（2025 年末） ^[source:Bank of Jamaica Annual Report 2025, Payment System section]

| 指標 | 直近の公開値 |
|---|---|
| 登録ウォレット利用者 | **305,026 人**、2024 年末比 8.1% 増 |
| mint 総額 | **J$276.0 million** |
| 流通額 | **J$260.1 million** |
| 公衆保有額 | **J$144.4 million**（流通額の 55.5%） |
| ウォレット提供者のデジタル金庫内保有 | **J$115.7 million**（44.5%） |
| 公開ウォレット提供者 | **2** — Lynk と JN Pay |
| 利用の方向 | BoJ は全体的な利用と支出が 2024 年より増加したと説明 |
| アクティブウォレット／取引件数 | 引用した年次報告書では非開示 |
| 加盟店数 | 2025 年末の総数は非開示。2023 年末の報告書は登録 Lynk 加盟店が 3,900 店超と記録 |
| 政府利用 | 一部サービスを対象とした TAJ パイロットを 2025 年4月9日から5月22日まで実施。オンライン JAM-DEX 支払いは引き続き利用可能 |

公式データは登録数と流通額の増加を裏付けるが、JAM-DEX のアクティブ普及率が Sand Dollar や eNaira より高いとはいえない。国際比較には、同一の日付、アクティブ利用者の定義、加盟店の定義、取引期間、人口分母が必要である。

## マトリクス D · ウォレット提供者の変遷

```
2022        Lynk が最初の公開 JAM-DEX ウォレット
2023-2024   Lynk が引き続き、JAM-DEX を公衆に提供する唯一の事業者
2025-05     JN Bank が JN Pay を開始
2025 年末   公開提供者は 2 社。さらに 2 行が後日の開始を目標
```

この時系列は、2024 年末まで Lynk が唯一の公開配布チャネルであり、2025 年に提供者の多様性が増したことを示す。Lynk の現在の利用者シェア、定義済み指標に基づく NCB の「支配的」地位、または配布チャネルの所有が eNaira／Sand Dollar より良い結果を生んだことは立証しない。これらの比較には提供者別のアクティブ利用データが必要である。

## マトリクス E · 政府インセンティブの設計 ^[source:JIS 2022 wallet incentive; Jamaica 2023 budget presentation; BoJ Annual Report 2023]

以下のインセンティブは文書化された制度条件である。`観察された証拠` 列は、公開記録を超える因果関係を主張しない。^[source:JIS 2022 wallet incentive; Jamaica 2023 budget presentation; BoJ Annual Reports 2023 and 2025]

| 制度 | 条件 | 観察された証拠 |
|---|---|---|
| 2022 年消費者ウォレット・インセンティブ | 2022 年4月1日以降に開設された適格ウォレットの先着 100,000 件へ J$2,500 | 政府は 2022 年6月末までに 100% 利用されたと報告 |
| 2023 年小規模加盟店インセンティブ | オンボーディング／取引条件を満たす先着 10,000 加盟店へ J$25,000 | 制度は公表済みだが、引用資料に因果的な加盟店定着率の推計はない |
| 2023-24 年消費者ロイヤルティ | 制度の月間支出上限まで JAM-DEX 購入額の 2% をキャッシュバック | 制度条件は開示されたが、アクティブ利用への効果は個別に報告されていない |
| 2025 年 TAJ パイロット | 一部の固定資産税、fitness fee、交通違反金の支払い。パイロットは 4月9日から5月22日 | BoJ はオンライン支払い手段が引き続き利用可能と説明 |

Sand Dollar／eNaira は「何も」使わず、ジャマイカが最も積極的な同種制度だったという従来の比較は、調整済みの政策一覧を欠いていたため削除した。

## マトリクス F · 同種事例比較の証拠ゲート ^[method:compare primary central-bank datasets at a common snapshot]

| 指標 | 必要な共通定義 | ここで利用できる JAM-DEX の証拠 |
|---|---|---|
| 開始／状況 | パイロット、段階的展開、全国利用可能性、本番稼働を区別 | 2021 年5月から12月にパイロット、2022 年から段階的に全国展開、2025 年時点も 5 年間の展開計画中 |
| 登録 | 累積ユニーク人数とウォレット／アカウントを区別 | 2025 年末の登録ウォレット利用者 305,026 人 |
| アクティブ利用 | 日次／月次アクティブ、観察期間、重複処理 | 引用した報告書では非公表 |
| 取引活動 | 同一の年次／月次期間における件数と金額 | 増加方向は記載されるが、2025 年の正確な件数／金額はここでは非公表 |
| 加盟店受け入れ | 登録加盟店とアクティブ加盟店を区別 | 2025 年末総数は非公表。2023 年末の Lynk 加盟店は 3,900 店超 |
| 流通 | 公衆保有、提供者金庫、mint 総額を区別 | 公衆 J$144.4m、提供者金庫 J$115.7m、mint 総額 J$276.0m |
| インセンティブ | 資格、金額、期間、利用率、継続率 | 制度条件と初期利用率は利用可能だが、継続効果はない |

[[fintech/bahamas-sand-dollar-cbdc|Sand Dollar]]、[[fintech/nigeria-enaira-retail-cbdc|eNaira]]、e-CNY について同等の項目が得られるまで、従来の同種事例ランキング表は再現できない。ベンダーとの関連だけで `eCurrency Mint > Bitt` という因果的結果が確立するわけでもない。

## 起源と展開

```
2021-03       eCurrency Mint を選定
2021-05—12    8 か月のパイロット。12月31日に完了
2022-03       GOJ が J$2,500／先着 100,000 ウォレットのインセンティブを発表
2022-06-14    Act 5 of 2022 の改正を可決。CBDC が法定通貨となる
2022           段階的な全国展開
2023           第 2 のインセンティブ制度。年末登録数 263,341
2024           年末登録数 282,274。Lynk が引き続き唯一の公開提供者
2025-05        JN Pay が第 2 の公開提供者として開始
2025           年末登録数 305,026。TAJ ユースケースと POS 作業が進展
```

**パターン**: パイロット、法改正、インセンティブ、提供者展開は文書化されている。この順序が、より早く開始した事例や長く稼働する事例を上回ったかどうかは、上記の共通指標なしには結論づけられない。

## ジャマイカの民間決済手段との比較

JAM-DEX は銀行預金、カード／ATM レール、モバイルウォレット、現金、送金サービスと共存する。競争分析では、支払い受け入れ、手数料、稼働率、現金の入出金、本人確認要件、加盟店経済性、利用者活動を比較すべきである。ジャマイカは Nigeria より競争が少ない、Bahamas より成熟度が低い、または最も明瞭な採用構成を持つという従来の主張は、共通の市場データで裏付けられていなかったため削除した。

## 関連項目

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]
- [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/e-euro-retail-rollout|digital euro retail rollout]]
- [[fintech/boe-digital-pound-consultation|BoE digital pound consultation]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC bridge]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY / ディーカレット DCP]]

## 出典

- [Bank of Jamaica Annual Report 2025](https://boj.org.jm/wp-content/uploads/2026/03/2025-BOJ-Annual-Report-final.pdf) — 2025 年末のウォレット提供者、登録数、mint／流通残高、TAJ パイロット、POS 作業。
- [Bank of Jamaica Annual Report 2024](https://boj.org.jm/wp-content/uploads/2025/04/2024-BOJ-Annual-Report-final.pdf)／[Annual Report 2023](https://boj.org.jm/wp-content/uploads/2024/03/2023-BOJ-Annual-Report.pdf) — 比較可能な前年数値とインセンティブ制度の詳細。
- [BoJ — CBDC パイロット完了（2021-12-31）](https://boj.org.jm/bojs-cbdc-pilot-project-a-success/) — パイロット日程、参加者、mint／発行の節目。
- [BoJ — CBDC ソリューション](https://boj.org.jm/bank-of-jamaicas-cbdc-solution/)／[提供者選定](https://boj.org.jm/boj-announces-cbdc-provider/) — eCurrency の調達と非ブロックチェーン型ソース層の説明。
- [BoJ — JAM-DEX の段階的展開](https://boj.org.jm/jam-dex-phased-rollout-progresses/)／[法令ページ](https://boj.org.jm/about-boj/legislation/) — 2022 年6月14日の改正と、法定通貨／唯一の発行者という地位。
- [Jamaica Information Service — J$2,500 ウォレット・インセンティブ](https://jis.gov.jm/2500-incentive-for-jamaicans-to-get-digital-wallet/)／[利用状況の更新](https://jis.gov.jm/jamaicans-take-up-2500-incentive-to-sign-up-for-jam-dex/) — 資格と先着 100,000 人の上限。
- [BoJ — JAM-DEX CBDC ランディング](https://boj.org.jm/core-functions/currency/cbdc/)／[BIS Innovation Hub CBDC トピック](https://www.bis.org/about/bisih/topics/cbdc.htm) — 現在の公式ナビゲーションと、より広い CBDC の文脈。
