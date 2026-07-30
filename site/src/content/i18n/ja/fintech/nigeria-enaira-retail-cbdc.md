---
source: fintech/nigeria-enaira-retail-cbdc
source_hash: 33b2900d5049b04d
lang: ja
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "ナイジェリア eNaira — リテール CBDC の設計と導入初年度の証拠"
translated_at: 2026-07-29T17:01:04.835Z
---
# ナイジェリア eNaira — リテール CBDC の設計と導入初年度の証拠

## TL;DR

ナイジェリア中央銀行は、アフリカ初のリテール CBDC として eNaira を 2021 の十月に開始した。公式設計は口座型、二層型、無利息で、基盤に Hyperledger Fabric を使う。最も比較しやすい導入証拠は、今も IMF の初年度研究である。研究の基準時点でリテールウォレットは約 860,000 で、取引は週約 14,000 で、平均的な週の活動はウォレットの 1.5% 相当にすぎなかった。これらは初年度の過去指標であり、現在の 2026 導入数ではない。その後の導入停滞、「世界最低」、正確な 2026 ウォレット総数といった主張には、より新しく日付のある資料が必要である。

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|フィンテック索引]] の配下にある。[[fintech/bahamas-sand-dollar-cbdc|バハマ Sand Dollar]]、[[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC プログラムの状況]]、[[fintech/em-market-crypto-dollarization-pattern|新興市場の暗号資産によるドル化パターン]] とあわせて読む。

## プログラムとアーキテクチャ

下表は [eNaira Design Paper](https://enaira.gov.ng/design-paper/) と [IMF Working Paper 2023/104](https://www.imf.org/en/publications/wp/issues/2023/05/16/nigerias-enaira-one-year-after-533487) に基づく。

| 項目 | 検証済みの説明 |
|---|---|
| 発行者 | ナイジェリア中央銀行 |
| 開始 | 2021 の十月 |
| 法的 / 通貨上の形態 | ナイラ建ての中央銀行債務。1 eNaira = 1 naira |
| アーキテクチャ | 既存の金融機関 / 決済事業者を使う二層型プラットフォーム |
| アクセスモデル | 口座型で、国民識別制度に接続 |
| 技術 | Hyperledger Fabric を使う Bitt Digital Currency Management System |
| 利息 | なし |
| チャネル | 公式サイトが説明するウォレットアプリ、API、USSD アクセス |

## ウォレット階層と公開上限

以下の表は過去時点のもので、[公式設計文書ページ](https://enaira.gov.ng/design-paper/) に記載された 2021 の九月の上限を再掲する。実務利用前に現在のウォレット条件を確認する必要がある。

| 階層 | 記載された本人確認の基礎 | 日次取引上限 | 残高上限 |
|---|---|---:|---:|
| 0 | 電話番号 | ₦20,000 | ₦120,000 |
| 1 | 国民識別番号 | ₦50,000 | ₦300,000 |
| 2 | Bank Verification Number | ₦200,000 | ₦500,000 |
| 3 | Tier-2 の要件と公共料金の領収書 | ₦1,000,000 | ₦5,000,000 |
| 加盟店 | CBN の AML/CFT 規則に基づく完全な KYC | 2021 の表では無制限 | 2021 の表では無制限 |

以前のページは階層の値を上方へずらし、Tier 0 を日次 ₦120,000 / 残高 ₦300,000 と説明していた。これらの値は公式設計表と矛盾していたため修正した。

## 初年度の導入証拠

下表は [IMF Working Paper 2023/104](https://www.imf.org/-/media/files/publications/wp/2023/english/wpiea2023104-print-pdf.pdf) の初年度研究に限定する。現在の 2026 指標として再利用しない。

| 指標 | IMF の初年度所見 | 解釈上の境界 |
|---|---:|---|
| リテールウォレット | 約 860,000 | 研究時点のアクティブ銀行口座の約 0.8% |
| 加盟店ウォレット | 約 100,000 | POS 端末を持つ加盟店の約十一分の一 |
| 取引 | 平均で週約 14,000 | 平均的な週のウォレットの 1.5% 相当 |
| 取引額 | 平均で週約 ₦923M | 期間中の平均値の 0.0018%。対象指標は M3 |
| 開始以来の取引総数 | 約 802,000 | ウォレット数より少なく、一度だけ / 非アクティブのウォレットが多いことを示す |

IMF は、初期の波の後の導入を限定的と評価する一方、プロジェクトの成否を判断するには早すぎるとも指摘する。証拠が裏付けるのは「初年度の導入が低かった」ことであり、恒久的な「世界で最も導入率の低い CBDC」という呼称ではない。

## 流通とネットワーク効果

設計は、金融機関と決済事業者に段階的サービスを意図的に依存する。IMF の分析は、ネットワーク効果とモバイルマネーとの関係を中心課題として挙げる。ウォレットは、取引相手と加盟店が受け入れて初めて有用になる。これは、すべての結果を単一の出来事に帰したり、銀行、代理店、加盟店ごとの民間動機を断定したりするより、根拠のある診断である。

下表は、裏付けのない商業的インセンティブを割り当てるのではなく、[eNaira Design Paper](https://enaira.gov.ng/design-paper/) と [IMF Working Paper 2023/104](https://www.imf.org/en/publications/wp/issues/2023/05/16/nigerias-enaira-one-year-after-533487) に基づき、流通上の役割と未解決の証拠上の問いを要約する。

| 主体 | 公開上の役割 | 証拠上の問い |
|---|---|---|
| CBN | 発行者とプラットフォーム権限者 | 規則、アクセス、運営継続性 |
| 金融機関 | ウォレット / 交換 / サービス層 | 現在どの機関とチャネルが稼働しているか |
| 決済事業者 | 段階的なサービスを構築可能 | 単なる設計ではなく、どの統合が稼働しているか |
| 加盟店 | 受入れ先 | 稼働中の加盟店と取引頻度 |
| モバイルマネー事業者 | 補完または代替となる可能性 | 相互運用性が金融包摂を拡大するか |

## eNaira と民間ステーブルコインのフロー

[IMF の 2026 六月ナイジェリア・ステーブルコイン記事](https://www.imf.org/en/news/articles/2026/06/16/stablecoins-in-nigeria) は、ナイジェリアが約 $59B の暗号資産流入を受けたと報告し、対象期間を 2023 の七月から 2024 の六月までとして、ドル建てステーブルコインを重要なクロスボーダーチャネルと説明する。この推計は eNaira の指標ではなく、測定も完全ではない。それでも、現在のデジタルマネー比較では CBDC、銀行 / フィンテック決済、民間ステーブルコインを別々に検討すべき理由を示す。

## 比較上のガードレール

以下の表は、同種 CBDC 比較で揃えるべき項目を示す。このページでは [IMF study](https://www.imf.org/en/publications/wp/issues/2023/05/16/nigerias-enaira-one-year-after-533487) 以外の法域の値を推測しない。

| 項目 | eNaira の証拠 | 比較対象に必要な条件 |
|---|---|---|
| 開始状況 | 2021 の十月から稼働 | 発行済み CBDC と試験運用を区別 |
| ウォレット指標 | 過去のダウンロード数 | 同じ日付とアクティブ利用者の定義を使う |
| 活動 | 過去の週次取引 | 同じ期間を使う |
| 加盟店への到達 | 過去の加盟店ウォレットのダウンロード数 | 登録数ではなく、実際の受入れを使う |
| クロスボーダー | 設計目標。ここで確認した資料は稼働中の経路を示さない | 中央銀行 / 運営者の発表が必要 |

## 読み方の原則

1. すべての導入指標に日付を付す。
2. ダウンロード数とアクティブウォレットを分ける。
3. 2026 の傾向を 2022 の観察から推定しない。
4. 送金、金融包摂、相互運用性などの設計目標は、本番データが結果を確認するまで目標として扱う。
5. 民間ステーブルコインのフロー推計を eNaira の取引量と分ける。

## 関連項目

- [[fintech/INDEX|フィンテック索引]]
- [[fintech/bahamas-sand-dollar-cbdc|バハマ Sand Dollar]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC プログラムの状況]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC アーキテクチャ]]
- [[fintech/em-market-crypto-dollarization-pattern|新興市場の暗号資産によるドル化]]

## Sources

- eNaira — Design Paper: https://enaira.gov.ng/design-paper/
- IMF — Nigeria's eNaira, One Year After: https://www.imf.org/en/publications/wp/issues/2023/05/16/nigerias-enaira-one-year-after-533487
- IMF — Working paper PDF: https://www.imf.org/-/media/files/publications/wp/2023/english/wpiea2023104-print-pdf.pdf
- IMF — Stablecoins in Nigeria (2026): https://www.imf.org/en/news/articles/2026/06/16/stablecoins-in-nigeria
