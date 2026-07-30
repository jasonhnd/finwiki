---
source: fintech/bahamas-sand-dollar-cbdc
source_hash: 45f9f516326beb64
lang: ja
status: machine
fidelity: ok
title: "バハマ Sand Dollar — 2020-10-20 全国展開のリテール CBDC、AFI 分配、2024 年末時点の証拠"
translated_at: 2026-07-30T03:06:00+09:00
---

# バハマ Sand Dollar — 2020-10-20 全国展開のリテール CBDC、AFI 分配、2024 年末時点の証拠

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の下に位置づけられる、**Sand Dollar** の日付を限定した法域別ケーススタディである。**2020-10-20** に始まった全国展開、規制対象のウォレット提供者モデル、2024 年末時点の採用スナップショットを記録する。タイトルは日付で範囲を限定しており、Sand Dollar が現在「最長稼働」のリテール CBDC だとは主張しない。他法域については [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]、[[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]、[[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]] の各項目を参照。本項目は、それらとの比較から共通の設計系譜や採用順位を推論しない。[CBOB の全国展開告知](https://www.sanddollar.bs/publicupdates/public-update-gradual-national-release-to-the-bahamas-in-october-2020)が展開日を示す。

> [!info] 要約
> Central Bank of The Bahamas は、Exuma と Abaco のパイロット地域外における Sand Dollar の全国展開を authorised financial institutions（AFIs）経由で **2020-10-20** に開始すると発表した。2021 年規則は、このデジタル通貨を全額準備で裏付けられた中央銀行への直接請求権と定義し、個人ウォレットの公式ページは中央銀行が発行する法定通貨のデジタル版と説明する。IMF が報告した日付付きの 2024 年末スナップショットは、流通通貨の約 **0.4%**、**消費者ウォレット 133,481 件**、**加盟店ウォレット 2,034 件**だった。これらのウォレット総数は登録数であり、アクティブ利用の指標ではない。[全国展開告知](https://www.sanddollar.bs/publicupdates/public-update-gradual-national-release-to-the-bahamas-in-october-2020)、[2021 年規則](https://www.centralbankbahamas.com/viewPDF/documents/2022-02-11-11-53-25-Bahamian-Dollar-Digital-Currency-Regulations-2021-Final-Gazetted.pdf)、[個人ウォレット公式ページ](https://www.sanddollar.bs/individual)、[IMF Country Report No. 26/31](https://www.imf.org/-/media/files/publications/cr/2026/english/1bhsea2026001-source-pdf.pdf)。 ^[source: CBOB national-release notice; 2021 Regulations; official individual-wallet page; IMF Country Report No. 26/31]

## プログラム構造

```
                  Central Bank of The Bahamas
                  Bahamian Dollar Digital Currency を発行
                              │
                              ▼
               全額準備で裏付けられた中央銀行への直接請求権
                              │
                              ▼
       登録ウォレット提供者 / 認可金融機関
       銀行 · 信用組合 · 送金事業者 · 決済機関
                              │
                              ▼
                個人および非個人ウォレット
                  Tier I · Tier II · その他の階層
```

この図は、[2021 年規則](https://www.centralbankbahamas.com/viewPDF/documents/2022-02-11-11-53-25-Bahamian-Dollar-Digital-Currency-Regulations-2021-Final-Gazetted.pdf)と[全国展開告知](https://www.sanddollar.bs/publicupdates/public-update-gradual-national-release-to-the-bahamas-in-october-2020)に記載された役割だけを示す。ある提供者のウォレット残高を、償還、送金、再登録の手順なしに別の提供者へ移せるとは主張しない。

## マトリクス A · 法的形態、当局、日付付き展開

| 項目 | 直接裏付けられる詳細 |
|---|---|
| 主務当局 | **Central Bank of The Bahamas（CBOB）**が Bahamian Dollar Digital Currency を発行 |
| 法的形態 | 2021 年規則は、これを Bahamian dollar の電子版であり、中央銀行の準備で全額裏付けられ、中央銀行への直接請求権を表すものと定義 |
| 法定通貨の説明 | 個人ウォレットの公式ページは、Sand Dollar を CBOB が発行する法定通貨のデジタル版と説明 |
| 全国展開 | CBOB は Exuma と Abaco 以外への AFI 経由の展開を **2020-10-20** に開始すると発表 |
| 歴史的な初回の表現 | BIS Papers No. 114 は **2020-10-20** のローンチを、稼働する汎用 CBDC の登場と説明。本項目は現在の稼働期間順位を示さない |
| 国内利用の境界 | 公式設計ページは CBDC を国内利用に限定し、国外受取人による受領を禁止 |

出典: [2021 年規則](https://www.centralbankbahamas.com/viewPDF/documents/2022-02-11-11-53-25-Bahamian-Dollar-Digital-Currency-Regulations-2021-Final-Gazetted.pdf)、[個人ウォレット公式ページ](https://www.sanddollar.bs/individual)、[全国展開告知](https://www.sanddollar.bs/publicupdates/public-update-gradual-national-release-to-the-bahamas-in-october-2020)、[BIS Papers No. 114](https://www.bis.org/publ/bispap114.pdf)、[公式設計ページ](https://www.sanddollar.bs/about)が、上記の範囲を限定した記述を直接裏付ける。

## マトリクス B · 文書化された設計機能と証拠の境界

| 機能 | 直接資料の記載 | 証拠の境界 |
|---|---|---|
| **中央銀行への請求権** | BDDC は準備で全額裏付けられ、CBOB への直接請求権である | これは法的形態を立証するが、採用や安全性の成果は立証しない |
| **仲介型の分配** | 登録ウォレット提供者には、商業銀行、信用組合、送金事業者または代理人、決済機関が含まれる | 引用資料は、この役割分担がオンボーディングや競争に与える効果を定量化していない |
| **相互運用標準** | 提供者は、提供者のドメインから独立した利用者エイリアス、標準口座番号、QR コードによる送受金に対応しなければならない | これは提供者をまたぐ決済アドレス指定を裏付けるが、損失なしの提供者切替を裏付けない |
| **リスクベースの階層** | 全国展開告知は、異なる顧客確認要件と上限を持つ低額個人、通常個人、事業者または企業の階層を説明 | 実際の金融包摂成果には利用データが必要 |
| **非匿名取引** | 全国展開告知は、現金の匿名性を再現せず、取引を AML/CFT 管理に接続すると説明 | 引用資料はプライバシーに対する利用者認識を立証しない |
| **オフライン仕様** | 公式設計ページは、通信途絶時の事前設定額の決済と、通信復旧後のネットワーク更新を説明 | これは文書化された仕様であり、実地での提供、範囲、性能の証拠ではない |
| **個人向け手数料** | 個人ウォレットの公式ページは、個人の取引手数料をゼロと記載 | これは全提供者の手数料や加盟店価格を立証しない |
| **国内利用** | 公式設計ページは CBDC を国内利用に限定 | 国境を越える機能は推論しない |

出典: [2021 年規則](https://www.centralbankbahamas.com/viewPDF/documents/2022-02-11-11-53-25-Bahamian-Dollar-Digital-Currency-Regulations-2021-Final-Gazetted.pdf)、[全国展開告知](https://www.sanddollar.bs/publicupdates/public-update-gradual-national-release-to-the-bahamas-in-october-2020)、[公式設計ページ](https://www.sanddollar.bs/about)、[個人ウォレット公式ページ](https://www.sanddollar.bs/individual)。

直接資料はこれらの機能を文書化する。Sand Dollar が「囲い込み」を回避したこと、e-CNY や提案中のデジタルユーロがこのモデルを模倣したこと、このモデルが「標準的」または優位であることは立証しない。

## マトリクス C · IMF が報告した 2024 年末の採用スナップショット

| 指標 | 日付付き数値 |
|---|---|
| 流通通貨総額に占める比率 | 約 **0.4%（2024 年末）** |
| 消費者ウォレット | **133,481 件（December 2024 時点）**、前年比 **12.2%** 増 |
| 加盟店ウォレット | **2,034 件（December 2024 時点）**、前年比 **3.2%** 増 |
| 人口との比較 | IMF は消費者ウォレット総数を同国人口のおよそ三分の一と説明 |
| アクティブウォレット率または取引率 | 引用した IMF の記述には含まれず、アクティブ利用率を推論しない |

出典: 脚注 11 と第 24 段落の [IMF Country Report No. 26/31](https://www.imf.org/-/media/files/publications/cr/2026/english/1bhsea2026001-source-pdf.pdf) が、2024 年末の数値を報告する。

ウォレット数は登録のスナップショットである。複数ウォレットを持つ別々の人数、アクティブだったウォレット数、Sand Dollar の利用強度は示さない。

## マトリクス D · AFI とウォレット提供者の役割

```
                 中央銀行の発行者
                         │
                         ▼
             登録ウォレット提供者
                         │
        ┌────────────────┼─────────────────┐
        ▼                ▼                 ▼
 銀行 / 信用組合     送金事業者            決済
                    / 代理人               機関
        └────────────────┼─────────────────┘
                         ▼
              消費者および加盟店ウォレット
```

| 提供者区分 | 直接資料に記載された役割 |
|---|---|
| 商業銀行と信用組合 | 適格な金融仲介機関。2020 年告知は、顧客確認と預金口座・ウォレット間の接続を支援すると見込まれていたと記載 |
| 送金事業者と決済サービス提供者 | 適格な仲介機関。2020 年告知は、参加済み事業者が承認済み独自アプリまたは汎用 Sand Dollar アプリを通じてサービスを提供できると記載 |
| 登録ウォレット提供者全般 | CBOB の登録、および提供者から独立したエイリアス、口座番号、QR コード決済に関する相互運用標準の対象 |

出典: [CBOB の全国展開告知](https://www.sanddollar.bs/publicupdates/public-update-gradual-national-release-to-the-bahamas-in-october-2020)は仲介機関の区分と 2020 年の展開時の役割を説明し、規則 4～9 に相当する [2021 年規則](https://www.centralbankbahamas.com/viewPDF/documents/2022-02-11-11-53-25-Bahamian-Dollar-Digital-Currency-Regulations-2021-Final-Gazetted.pdf) はウォレット提供者と相互運用標準を規律する。

個人向け公式ページは、利用者に対応 AFI を選び、その AFI の独自ウォレットをダウンロードするよう案内する。運用上の送金手順なしに、同じウォレットや残高を維持したまま AFI を切り替えられるとは記載していない。[個人ウォレット公式ページ](https://www.sanddollar.bs/individual)。

## マトリクス E · Tier I と Tier II の個人ウォレット公式上限

| 個人階層 | 個人向け公式ページの本人確認・銀行接続ルール | 保有上限 | 個人向け公式ページの取引上限 | 2022 年官報告示の上限 |
|---|---|---|---|---|
| **Tier I** | 政府発行 ID は不要。銀行口座と接続不可 | **B$500** | **月間 B$1,500** | **月間 B$1,500** |
| **Tier II** | 政府発行 ID が必要。銀行口座と接続可能 | **B$8,000** | **月間 B$10,000** | **年間 B$100,000** |

出典: [個人ウォレット公式ページ](https://www.sanddollar.bs/individual)は、本人確認、銀行接続、保有、月間の各上限を記載する。[Bahamian Dollar Digital Currency (Holding and Transactional Limits) Notice, 2022](https://www.centralbankbahamas.com/viewPDF/documents/2022-08-02-16-38-17-Bahamian-Dollar-Digital-Currency-Holding-and-Transactional-Limits-Notice-2022.pdf)は、官報上の保有上限と取引期間を記載する。Tier II の月間値と年間値は、換算せず、同一とも扱わずに分けて記載する。

これらの公式上限は、利用者の大半がどの階層を保有するか、金融包摂の目的が成功または失敗したか、階層設計が eNaira、JAM-DEX、e-CNY と同じ原因または効果を持つかを立証しない。

## 起源と日付付きの展開

| 日付 | 直接文書化された出来事 |
|---|---|
| **2019-12-24** | CBOB のプロジェクト更新は、Exuma パイロットを December 2019 に開始し、2020 年前半に Abaco へ拡張する計画だと記載 |
| **2020-09-25** | CBOB は AFI 経由の段階的全国展開を **2020-10-20** に開始すると発表 |
| **2020-10-20** | 発表された全国展開の開始日 |
| **2021-08-23** | Bahamian Dollar Digital Currency Regulations, 2021 が官報に掲載 |
| **2022-05-25** | 保有・取引上限告示を制定。官報の発行日は **2022-05-30** |
| **2024-12** | 後続の IMF 国別報告が、2024 年末の流通比率とウォレット総数を記録 |

出典: [2019 年プロジェクト更新](https://www.sanddollar.bs/publicupdates/a-bahamian-payments-system-modernization-initiative)、[2020 年全国展開告知](https://www.sanddollar.bs/publicupdates/public-update-gradual-national-release-to-the-bahamas-in-october-2020)、[2021 年規則](https://www.centralbankbahamas.com/viewPDF/documents/2022-02-11-11-53-25-Bahamian-Dollar-Digital-Currency-Regulations-2021-Final-Gazetted.pdf)、[2022 年上限告示](https://www.centralbankbahamas.com/viewPDF/documents/2022-08-02-16-38-17-Bahamian-Dollar-Digital-Currency-Holding-and-Transactional-Limits-Notice-2022.pdf)、[IMF Country Report No. 26/31](https://www.imf.org/-/media/files/publications/cr/2026/english/1bhsea2026001-source-pdf.pdf)。

タイムラインは、本項目で用いる最新の日付付き事実で終える。取引の緩やかな成長、2025–2026 年に設計変更がなかったこと、中断のない運用、「最長稼働」の順位、後発 CBDC の設計が Sand Dollar を借用したことは主張しない。

## 採用解釈に関する証拠の境界

公式資料は The Bahamas 全土での金融包摂とアクセスをプログラムの目的として説明し、IMF の 2026 年報告は、Sand Dollar が一部の小島嶼を含むサービス不足地域で金融サービスへのアクセスを徐々に拡大していたと記載する。[CBOB 全国展開告知](https://www.sanddollar.bs/publicupdates/public-update-gradual-national-release-to-the-bahamas-in-october-2020)、[IMF Country Report No. 26/31](https://www.imf.org/-/media/files/publications/cr/2026/english/1bhsea2026001-source-pdf.pdf)。

引用した証拠は、民間決済レールが緩やかな採用を引き起こしたこと、銀行口座を持つ人口の多数派に切替理由がほとんどなかったこと、スマートフォンへのアクセスや代理店密度が決定的な制約だったこと、ウォレット設計が構造的に最適だったことを**立証しない**。また、名称を挙げた民間提供者の現在の市場全景も示さない。そのため、従前の因果・人口構成に関する主張は、調査結果として示さず削除した。

## 関連項目

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]
- [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層構造の概要]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC の三つの現役パラダイム]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 構造選択の 4 つの主要トレードオフ]]

## Sources

- CBOB — [A Bahamian Payments System Modernization Initiative, 2019-12-24](https://www.sanddollar.bs/publicupdates/a-bahamian-payments-system-modernization-initiative)
- CBOB — [Gradual National Release to The Bahamas in October 2020, 2020-09-25](https://www.sanddollar.bs/publicupdates/public-update-gradual-national-release-to-the-bahamas-in-october-2020)
- CBOB — [Sand Dollar official design description](https://www.sanddollar.bs/about)
- CBOB — [Sand Dollar individual-wallet page](https://www.sanddollar.bs/individual)
- Government of The Bahamas / CBOB — [Bahamian Dollar Digital Currency Regulations, 2021](https://www.centralbankbahamas.com/viewPDF/documents/2022-02-11-11-53-25-Bahamian-Dollar-Digital-Currency-Regulations-2021-Final-Gazetted.pdf)
- Government of The Bahamas / CBOB — [Bahamian Dollar Digital Currency (Holding and Transactional Limits) Notice, 2022](https://www.centralbankbahamas.com/viewPDF/documents/2022-08-02-16-38-17-Bahamian-Dollar-Digital-Currency-Holding-and-Transactional-Limits-Notice-2022.pdf)
- BIS — [Ready, steady, go? Results of the third BIS survey on central bank digital currency, BIS Papers No. 114](https://www.bis.org/publ/bispap114.pdf)
- IMF — [The Bahamas: 2025 Article IV Consultation, IMF Country Report No. 26/31](https://www.imf.org/-/media/files/publications/cr/2026/english/1bhsea2026001-source-pdf.pdf)
