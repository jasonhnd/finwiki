---
source: banking/daiwa-next-bank
source_hash: 1f8e98718a685ef5
lang: ja
model: google-translate-guarded-line-sync+manual-review
status: machine
fidelity: ok
title: "大和ネクスト銀行事業プロファイル（大和ネクスト銀行）"
translated_at: 2026-07-29T03:30:48.099Z
---

# 大和ネクスト銀行事業プロファイル（大和ネクスト銀行）

## Wikiルート

このエントリは以下にあります [[banking/INDEX|銀行指数]] エンティティ アンカーのオペレーティング プロファイル コンパニオンとして [[regional-banks/daiwa-next-bank|大和ネクスト銀行 entity anchor]]。次のセグメント マップ内でそれを読み取ります。 [[banking/japan-net-bank-competition-map|ジャパンネット銀行競合マップ]]、親コンテキストは次のとおりです。 [[securities-firms/daiwa-sg|大和証券グループ]] そして統合されるべきもの [[trust-banks/orix-bank|オリックス銀行]] ページ、証券隣接ネットバンクピアに対して [[banking/sony-bank|ソニー銀行]] そして証券会社と銀行のコホート [[banking/rakuten-bank|楽天銀行]] (にリンクされています [[securities-firms/rakuten-securities|楽天証券]]) · [[banking/au-jibun-bank|auじぶん銀行]] (にリンクされています [[securities-firms/au-kabucom-securities|auカブコム]]) · [[regional-banks/ssnb|SSNB]] (にリンクされています [[securities-firms/sbi-securities|SBI証券]]）。ブローカー側コンパレーターのルートの場合 [[securities/INDEX|証券インデックス]] そして、MRF（マネーリザーブファンド）と銀行スイープ預金メカニズムの統合 [[securities/japan-online-brokerage-competition|日本オンライン証券コンテスト]].

## TL;DR

大和ネクスト銀行（Daiwa Next Bank, Ltd.）は [[securities-firms/daiwa-sg|Daiwa Securities Group, Inc.]]（東証プライム 8601）の完全子会社の銀行子会社である。大和側における**証券・銀行ハイブリッド**のアンカーであり、[[regional-banks/ssnb|SSNB]]（SBI）、[[banking/au-jibun-bank|au Jibun Bank]]（KDDI / 三菱UFJ）、[[banking/rakuten-bank|Rakuten Bank]]（楽天証券隣接）のアーキテクチャ・パターンを写し取っている。そのフランチャイズは**ブローカレッジのキャッシュフローを銀行業へ統合すること**を中心に構築されており、大和証券口座とのスイープ預金連携と、外貨建て投信の販売を補完する多通貨預金サポートを備える。

預金・口座の基準日：**2026-03-31**。預金基盤は約 5.06 兆円（2,288 千口座、円預金・外貨預金合計 5 兆 637 億円）で、主に大和証券の口座顧客から構築されている。

オリックス銀行取引発表日: **2026-04-27**。大和証券グループ本社と大和ネクスト銀行は、大和ネクスト銀行が同社の発行済株式の全株式を取得する取引を発表した。 [[trust-banks/orix-bank|オリックス銀行]]。発表には取引の根拠と条件が記載されています。それは完成を確立するものではありません。したがって、このページでは、発表された構造、決算状況、およびその後の連結財務上の影響を個別に扱います。 ^[Source: https://www.bank-daiwa.co.jp/info/2026/pdf/0427_02.pdf.]

## 1. アイデンティティとグループ内ポジション

| 項目 | 読み |
|---|---|
| 正式名称 | 株式会社大和ネクスト銀行 |
| 英語名称 | Daiwa Next Bank, Ltd. |
| 設立 | 2010-04-01 |
| オープニング | 2011-04-15 |
| 銀行免許区分 | 普通銀行（銀行法に基づく普通銀行）、FSA「その他の銀行」に分類 |
| 親会社 | [[securities-firms/daiwa-sg|Daiwa Securities Group, Inc. (TSE Prime 8601)]]（100%） |
| 発表された取引 | [[trust-banks/orix-bank|オリックス銀行]] — 大和ネクスト銀行による全株式取得は2026年4月27日に発表。完了は別途確認する必要があります |
| ブローカレッジ姉妹会社 | [[securities-firms/daiwa-securities|大和証券]] — グループ内の主たるブローカレッジ事業会社 |
| 本店 | 東京 |
| チャネル・アーキテクチャ | 大和証券の支店を通じたアプリ + ウェブ + ブローカレッジ窓口のクロスタッチ |
| 主管規制当局 | 金融庁（FSA） |

出典: 身元、設立/開設日、所有権、ライセンスカテゴリーは、それぞれ大和ネクスト銀行の会社概要と金融庁認可銀行ワークブックによって裏付けられています。オリックス銀行の行には発表された取引のみが記録されており、買収が完了したものとして読み取ってはなりません。 ^[Sources: https://www.bank-daiwa.co.jp/about/company/profile/; https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx; https://www.bank-daiwa.co.jp/info/2026/pdf/0427_02.pdf.]

### 証券グループがなぜ銀行を設立したのか

1. **MRF（マネー・リザーブ・ファンド）←→ 銀行預金の代替。** 2000年代以前、ブローカレッジ口座の余剰資金は MRF 投資信託商品に置かれていた。2000 年以後の改革により、ブローカレッジは顧客資金を系列銀行の預金へ振り向けること（スイープ）が可能になった。銀行を所有することで、従来は外部の MMF / MRF 運用会社へ流れていた預金スプレッドを取り込める。
2. **ブローカレッジ商品とのクロスセル。** すでに投資について大和証券を信頼している顧客は、世帯の預金残高を大和ブランドの銀行へ移し、統合された資産形成クロスセルを可能にする。
3. **エコシステム銀行による破壊への防衛。** [[banking/rakuten-bank|Rakuten Bank]]（[[securities-firms/rakuten-securities|Rakuten Securities]] にリンク）と [[regional-banks/ssnb|SSNB]]（[[securities-firms/sbi-securities|SBI Securities]] にリンク）は、銀行・ブローカー統合モデルを標準として確立した。自前の銀行を持たなければ、大和は自社顧客のブローカレッジ資金がそれらのエコシステムへ流出するリスクにさらされていただろう。

### オリックス銀行との取引が完了した場合のグループ体制を発表

```
Daiwa Securities Group, Inc. (TSE Prime 8601)
  ├── 大和証券 (Daiwa Securities, brokerage operating company)
  ├── 大和ネクスト銀行（本ページ — ネット銀行）
  │ └── (発表済み、ここには完了として記載されていません) [[trust-banks/orix-bank|オリックス銀行株式会社]]
  ├── [[asset-managers/daiwa-asset-management|Daiwa Asset Management]]
  ├── [[trust-banks/daiwa-living-trust|Daiwa Living Trust]]
  └── Other group subsidiaries (PB, IB, IT, etc.)
```

### ブローカレッジ連動の預金コア（MRF / スイープメカニズム）

決定的な商品軸は、大和証券のキャッシュマネジメントとの統合である。

| メカニズム | 機能 |
|---|---|
| スイープ預金 | 大和証券口座の資金は非取引期間中に大和ネクスト銀行の預金へスイープされ、一部期間では MRF より高い利息を稼ぐ |
| 取引決済キャッシュフロー | 証券売却の代金が連携した大和ネクスト銀行口座を通じて入金される |
| MRF の代替 | MRF の歴史的役割は、銀行・ブローカー統合モデルにおいてスイープ預金メカニズムに部分的に吸収される |
| 多通貨サポート | 大和証券における外貨建て投信 / 外貨建て債券の販売を補完する外貨預金商品 |

### 円・外貨預金

| 商品 | 役割 |
|---|---|
| 円普通預金 | コア口座；スイープフローとバランスをとる |
| 円定期預金 | ブローカレッジ顧客獲得サイクルに合わせたプロモーション金利 |
| 外貨預金 | USD、EUR、AUD その他の通貨 — 外貨建て投資商品を補完するよう設計 |
| 外貨定期預金 | 期間別にマッチした商品メニュー |

### 資産形成サポート本行のポジショニングは明示的に、決済頻度型バンキングではなく**資産形成サポート**である。

この銀行のポジショニングは、支払い頻度を重視したバンキングではなく、明らかに**資産形成のサポート**です。

- 自前の主要なクレジットカード・フランチャイズを持たない — 決済頻度型のプレーは戦略軸ではない。
- 限定的な消費者向け貸出の商品セット — 大和証券が対象とする富裕層 / マスアフルエント顧客セグメントに集中。

### チャネル・アーキテクチャ：証券・銀行ハイブリッド純粋なオンライン・ネット銀行とは異なり、大和ネクスト銀行は3つのチャネルを通じて顧客に接触できる。

純粋なオンラインネット銀行とは異なり、大和ネクスト銀行は次の 3 つのチャネルを通じて顧客と接触できます。

| チャネル | 役割 |
|---|---|
| モバイルアプリ + ウェブ | オンラインでの預金 / 振込 / FX / 定期預金の操作 |
| 大和証券支店窓口 | ブローカレッジの対面接点におけるクロス紹介 |
| 大和証券リレーションシップ・オフィサー | マスアフルエント顧客向けのウェルスマネジメント型紹介 |

### 何が発表されたか

**2026-04-27**、大和証券グループ本社と大和ネクスト銀行は、大和ネクスト銀行が当社の発行済株式の全てを取得する決定を発表しました。 [[trust-banks/orix-bank|オリックス銀行株式会社]]。リリースには条件と計画されたスケジュールが記載されています。このページでは、トランザクションを完了したグループ構造に移行する前に、後で完了を開示する必要があります。 ^[Source: https://www.bank-daiwa.co.jp/info/2026/pdf/0427_02.pdf.]

### なぜこのディールが重要か

取引リリースでは、当事者の既存のフランチャイズと意図された組み合わせが特定されます。ただし、完了およびクロージング後の開示が行われるまで、住宅ローン組成、信託活動、預金、収益および資本はそれぞれの法人に帰属したままになります。連結効果は、発表から予測するのではなく、決算後の日付入りの財務情報開示から取得する必要があります。

### 事業統合に関する論点

- **姉妹銀行構造** を二つの免許で（オリックス銀行を大和証券グループの別個の事業子会社として維持し、住宅ローンと不動産ローンに特化）。
- **姉妹銀行構造** 2 つのライセンスを持つ (オリックス銀行は、住宅ローンと不動産ローンに特化した大和証券グループの独立した事業子会社として存続)。
- **フランチャイズ分割** — 預金と証券資金の管理を大和ネクストで、住宅ローンと不動産ローンを同一持株会社下のオリックス銀行で。

この選択は公に確認されておらず、連結戦略にとって重要な未解決の論点である。

## 4. KPIの形状

大和ネクスト銀行は定期的なディスクロージャー誌（法銀行が要求する標準ディスクロージャー誌）を発行しており、KPI の更新は大和証券グループの四半期ごとの IR サイクルに掲載されます。

| メトリック | 日付が記載された公的証拠 | 出版境界 |
|---|---|---|
| 預金残高・口座 | 2026 年 3 月 31 日時点の ¥5,063.7bn および 2,288 thousand アカウント。円預金と外貨預金を組み合わせたシリーズであり、グループ会社の預金も含まれます | ソースの定義と日付を保存します。完了および統合の開示前にオリックス銀行を追加しないでください |
| 自己資本比率 | 2026 年 3 月 31 日の大統領メッセージでは約 21.9% | 開示された比率と測定日を引用します。ピア ランクには同じ日付、同じ定義のデータセットが必要です |
| 外貨預金 | 銀行の定期開示資料および預金履歴資料に掲載 | 調整された比較セットなしでピアランキングを推測しないでください |
| 借入金、ROE、収益の推移 | 大和ネクスト銀行開示資料、大和証券グループIRに掲載 | 単独の数値と将来の連結数値を分離してください |

出典: KPI 表は日付が記載された証拠マップであり、取引の影響を予測するものではありません。 ^[Sources: https://www.bank-daiwa.co.jp/about/disclosure/transition/; https://www.bank-daiwa.co.jp/about/company/message/; https://www.bank-daiwa.co.jp/about/disclosure/.]

### 証券・銀行ハイブリッドコホート

| グループ | Bank | 仲介 | 比較するための公的証拠 |
|---|---|---|---|
| **大和証券グループ** | **大和ネクスト銀行** | 大和証券 | グループ所有権、銀行と代理店の関係、アカウントリンク商品条件、日付セグメント開示 |
| 三井住友信託・SBI関連ルート | [[regional-banks/ssnb|SSNB / ネオバンク]] | [[securities-firms/sbi-securities|SBI証券]] | 現在の所有権、パートナー契約、アカウントリンク条件、および個別の法人の開示 |
| KDDI・MUFG関連路線 | [[banking/au-jibun-bank|auじぶん銀行]] | [[securities-firms/au-kabucom-securities|auカブコム証券]] | 現在の所有権、アカウントリンク条件、および開示日 |
| 楽天グループ路線 | [[banking/rakuten-bank|楽天銀行]] | [[securities-firms/rakuten-securities|楽天証券]] | 現在の所有権、アカウントリンク条件、および開示日 |

出典: このコホートは調査ルートであり、ランキングではありません。所有権と製品の関係は、公開前に各企業の現在の公式開示で再確認する必要があります。 ^[Sources: https://www.bank-daiwa.co.jp/about/company/profile/; https://www.daiwa-grp.jp/ir/; https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx.]

### 大和ネクストが競合しない領域

- **エコシステム・ポイントの決済頻度。** 楽天 / PayPay / au の規模のキャプティブなポイント経済を持たない。
- **純粋な SME / 法人 API。** そのアーキテクチャではない — それは [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] の領域である。
- **スマートフォン専業のマス獲得。** フランチャイズは既存の大和証券顧客を軸としており、広範なスマートフォンファーストの獲得を軸としていない。

## 6. 規制・政策の境界

| レイヤー | 法令 / 規制当局 | 含意 |
|---|---|---|
| 銀行監督 | 銀行法 + 金融庁監督指針 | 標準的な普通銀行監督 |
| 証券クロスセル | 金融商品取引法 — 投信販売およびブローカレッジ資金管理について | 標準的な適合性・開示義務；スイープ預金メカニズムは特定の FSA ガイダンスの下 |
| 持株グループ連結 | 金融商品取引法 + 銀行法持株会社ルール | 大和証券グループを通じた連結監督 |
| 外貨預金 | FSA + 日銀統計 + AML | クロスボーダー AML が適用される |
| 預金保険 | 預金保険機構 | 円預金の保護が適用される |
| オリックス銀行との取引を発表 | 取引の開示と該当する規制当局の承認 | ステータスと法人の境界は、後の正式な完了通知からのみ更新する必要があります |

出典: 規制表は法的アドバイスではなく、ナビゲーションの概要です。ライセンスの分類は FSA ワークブックに基づいています。取引固有の条件とステータスは当事者のリリースから得られます。 ^[Sources: https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx; https://www.bank-daiwa.co.jp/info/2026/pdf/0427_02.pdf; https://www.dic.go.jp/yokinsha/page_000134.html.]

## 関連

- [[banking/INDEX]]
- [[banking/japan-net-bank-competition-map]]
- [[banking/post-megabank-positioning]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/sony-bank]]
- [[banking/rakuten-bank]] · [[banking/paypay-bank]] · [[banking/au-jibun-bank]]
- [[banking/gmo-aozora-net-bank]]
- [[banking/ui-bank]]
- [[regional-banks/daiwa-next-bank]]
- [[securities-firms/daiwa-sg]]
- [[trust-banks/orix-bank]]
- [[asset-managers/daiwa-asset-management]]
- [[trust-banks/daiwa-living-trust]]
- [[regional-banks/ssnb]]
- [[securities-firms/sbi-securities]]
- [[securities-firms/au-kabucom-securities]]
- [[securities-firms/rakuten-securities]]
- [[securities/INDEX]]
- [[securities/japan-online-brokerage-competition]]

## 出典

- 大和ネクスト銀行 コーポレートサイト（https://www.bank-daiwa.co.jp/）。
- 大和ネクスト銀行 会社概要（https://www.bank-daiwa.co.jp/about/company/profile/）。
- 大和ネクスト銀行 ディスクロージャー / プレスページ（https://www.bank-daiwa.co.jp/info/）。
- 大和ネクスト銀行 口座数・預金残高の推移：2026-03-31 時点で預金 5 兆 637 億円 / 2,288 千口座、円預金 + 外貨預金の合計（グループ会社預金を含む）（https://www.bank-daiwa.co.jp/about/disclosure/transition/）。
- 大和ネクスト銀行 頭取メッセージ — 2026-03-31 預金・口座・自己資本比率スナップショット (https://www.bank-daiwa.co.jp/about/company/message/).
- 大和証券グループ コーポレート / IR サイト（https://www.daiwa-grp.jp/、https://www.daiwa-grp.jp/ir/）。
- 大和証券グループ本社・大和ネクスト銀行によるオリックス銀行買収計画に関するお知らせ（2026-04-27、 https://www.bank-daiwa.co.jp/info/2026/pdf/0427_02.pdf).
- FSA 免許銀行一覧（https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx）。
