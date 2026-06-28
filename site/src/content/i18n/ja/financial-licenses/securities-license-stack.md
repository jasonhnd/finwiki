---
source: financial-licenses/securities-license-stack
source_hash: 78a48826b9016dd6
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本証券ライセンス・スタック"
translated_at: 2026-06-26T08:32:07.547Z
---

# 日本証券ライセンス・スタック

## 概要日本の証券業務は、単一の汎用的な「ブローカー・ライセンス」によって統制されているわけではない。実務上のスタックは、金融商品取引法（FIEA）、FSA / 財務局の登録一覧、JSDA の自主規制、取引所 / PTS の参加規則、清算・決済へのアクセス、そして顧客保護義務から構築される。

ある会社ページが、実際に演じている規制対象の証券上の役割がどの種類なのかを述べる必要があるときは、本ページを [[financial-licenses/INDEX|JapanFG legal / financial licenses]]、姉妹ページ [[financial-licenses/payment-license-stack|payment license stack]] と [[financial-licenses/bank-license-and-baas-boundary|bank-license / BaaS boundary]]、[[securities/INDEX|securities domain]]、[[securities/financial-instruments-business-operators-japan-index|FIEA 事業者 registry index]]、および [[financial-regulators/jsda|JSDA]] と併せて用いること。

本ページは公開ソースのリサーチ・ルートであり、法的助言ではない。実際に稼働する商品や取引は、なお最新の FSA 一覧、e-Gov 法令本文、JSDA 規則、監督指針、および弁護士 / 規制当局の確認に照らして確認すること。

## 真実の情報源スタック

| Layer | Primary source | What it proves | What it does not prove |
|---|---|---|---|
| Statute | FIEA および関連政省令の e-Gov 法令本文 | 現行の法的カテゴリと定義された用語。 | 名指しされた会社が現時点で登録されているか。 |
| Registration | FSA "免許・許可・登録等を受けている事業者一覧" | ある会社が確認した公式登録カテゴリに掲載されているか、および登録の as-of 日付。 | 完全な商品範囲または商業規模。 |
| Supervisory view | 金融商品取引業者向けの FSA 監督指針 | 業務行為・内部管理・モニタリング・顧客保護・市場仲介者の行動に関する公開された監督上の期待。 | 特定の商品に関する規制当局の私的見解。 |
| Self-regulation | [[financial-regulators/jsda|JSDA]] 会員一覧と規則 | その会社がディーラー自主規制ルートにあるか、およびどの行為 / 引受 / 勧誘規則が関連しうるか。 | 法定のライセンスそれ自体。 |
| Venue / infrastructure | [[securities/tokyo-stock-exchange|TSE]], [[securities/japannext-securities|Japannext]], [[securities/osaka-digital-exchange|ODX]], [[securities/japan-securities-clearing-corp|JSCC]], [[securities/japan-securities-depository-center|JASDEC]] | 取引・清算・決済・PTS ルート。 | ブローカー登録または適合性。 |
| Product disclosure | 会社ページ、目論見書、EDINET / TDnet、公式商品ページ | その会社が現在その商品を販売しているか、およびどの開示が付随するか。 | 一般的なライセンスの結論。 |

2026-05-22 に確認した FSA のライセンス・ポータルは、金融商品取引業者、登録金融機関、金融商品仲介業者、証券金融会社、清算、保管、および関連する登録ルートを、現行の as-of 日付付きで掲載していた。専用の FinWiki 登録管理ページは、1,945 行の FSA 金融商品取引業者の母集団を、公式ワークブックを複製するのではなく要約レベルで保持している。

## レジーム・マップ

| Activity | Typical legal route | FinWiki reading |
|---|---|---|
| 証券のブローカー業 / ディーリング / 引受 | 第一種金融商品取引業者 | [[securities-firms/nomura-hd|Nomura]]、[[securities-firms/daiwa-sg|Daiwa Securities Group]]、[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]]、および [[securities-firms/mufg-mums|MUMSS]] などの主要証券会社の中核ルート。 |
| ファンド持分 / 一定の私募 / 第二種商品 | 第二種金融商品取引業者 | ファンド分売、私募、クラウドファンディング、仕組み投資のルートにしばしば現れる; これを完全なリテール株式ブローカー業と同一視しないこと。 |
| 投資助言 / 代理 | 投資助言・代理業 | 助言、ファンド選定、ウェルス・アドバイスの境界を説明する; 商品の執行にはなお別のルートが必要となりうる。 |
| 投資運用 | 投資運用業 | [[asset-managers/nomura-asset-management|Nomura Asset Management]]、[[asset-managers/asset-management-one|Asset Management One]]、および [[asset-managers/mufg-asset-management|MUFG Asset Management]] などのアセットマネージャーの中核ルート。 |
| 銀行または信託銀行の証券業務 | 登録金融機関 | 銀行は登録を通じて特定の証券関連業務を行うことができるが、その読み方は証券子会社の第一種ルートとは異なる。 |
| アプリ / プラットフォームの紹介・勧誘サポート | 金融商品仲介または金融サービス仲介ルート | 組込型金融とアプリ分売に有用。主たる金融商品業者と商品範囲を確認すること。 |
| PTS / 取引所外取引の場 | PTS 認可および第一種 / 場固有のルート | [[securities/japannext-securities|Japannext]] および [[securities/osaka-digital-exchange|ODX]] に関連。 |
| 電子公募 / セキュリティ・トークンの取扱い | 該当する場合の FIEA 電子募集およびトークン化証券の行 | fintech の UX 問題だけでなく、証券登録および商品開示の問題として扱うこと。 |
| 証券金融 | 証券金融会社 | [[financial-regulators/japan-securities-finance|Japan Securities Finance]] および信用 / 貸付の配管に関連。 |
| 清算 / 保管 | 清算機関 / 保管機関 | [[securities/japan-securities-clearing-corp|JSCC]] および [[securities/japan-securities-depository-center|JASDEC]] に関連。 |

## 実務上の決定木

| Question | First place to check | Second check |
|---|---|---|
| この会社は証券会社か？ | FSA 金融商品取引業者一覧。 | JSDA 会員一覧と会社開示。 |
| これは投資商品を販売している銀行か？ | FSA 登録金融機関一覧。 | 銀行開示、JSDA 特別会員ルート、商品文書。 |
| これは単なるアプリのフロントエンドか？ | 仲介 / 金融サービス仲介の登録。 | 主たる業者、資産の保管、指図フロー。 |
| これは引受会社か？ | 第一種 FIBO の地位と JSDA 引受規則。 | 目論見書 / EDINET / JPX 上場文書。 |
| これは投資助言か？ | 投資助言 / 代理の登録。 | 契約形態、報酬、および投資一任が提供されるか。 |
| これは投資運用か？ | 投資運用の登録。 | ファンド文書、受託者 / カストディアン構造、商品開示。 |
| これは PTS か？ | FSA の登録と場の認可。 | 場のルールブック、JSDA / 取引所データ、清算 / 決済ルート。 |
| これはセキュリティ・トークン関連か？ | FIEA トークン化証券の行と商品分類。 | そのトークンが電子決済手段か、暗号資産か、FIEA 上の証券か。 |

## JapanFG との関連性同一のカスタマー・ジャーニーが複数の規制対象の役割を含みうる：

- [[securities-firms/sbi-securities|SBI Securities]] と [[securities-firms/rakuten-securities|Rakuten Securities]] は、オンライン・ブローカー業、NISA 獲得、ポイント / 経済圏連携、SOR / PTS 執行ポリシーを競争レバーとして用いる。
- [[securities-firms/mizuho-securities|Mizuho Securities]]、[[securities-firms/mufg-mums|MUMSS]]、および [[securities-firms/smbc-nikko|SMBC Nikko]] はメガバンク・グループの内部に位置するため、エンティティ分析は銀行のバランスシート活動を証券子会社の活動から分離する。
- [[securities-firms/paypay-securities|PayPay Securities]] およびアプリ組込型ブローカーは、そのアプリがブローカーなのか、仲介者なのか、ブローカーに接続された分売サーフェスなのかに、追加の注意を要する。
- [[securities-firms/monex-group|Monex Group]]、[[securities-firms/gmo-click-securities|GMO Click Securities]]、および [[securities-firms/dmm-com-securities|DMM.com Securities]] は、しばしば暗号資産・FX・CFD・デリバティブの境界付近に位置する。その商品が現物証券か、デリバティブか、暗号資産か、別の規制カテゴリかを確認すること。
- [[financial-regulators/jsda|JSDA]] は、勧誘・引受・広告・顧客管理・取引所外の実務の背後にある自主規制層である。

## 境界事例

| Boundary | Why it is easy to misread | FinWiki treatment |
|---|---|---|
| ライセンス vs 商品提供 | ある会社があるカテゴリで登録されていても、特定の商品を積極的に販売していないことがある。 | 登録カテゴリと、実際に公開されている商品とを別々に記録する。 |
| 銀行 vs 証券子会社 | あるグループ・ブランドが銀行と証券の両サービスを示すことがある。 | グループ・ページ、銀行ページ、証券ページを別々にリンクする。 |
| 助言 vs 執行 | Robo / アドバイザリーの UX は、助言・代理・投資一任を曖昧にしうる。 | 助言 / 代理と投資運用の登録を別々に確認する。 |
| PTS vs ブローカー SOR | 顧客は 1 枚の注文票を見るが、執行は TSE、PTS、または内部化された OTC フローへ回送されうる。 | [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] と場のページへリンクする。 |
| セキュリティ・トークン vs 暗号資産 | トークンはデジタルとして販売されうるが、法的分類はレジームを変える。 | 証券上の権利を表す場合はまず FIEA へ回送する; 暗号資産交換業の地位については [[exchanges/INDEX|exchanges]] へ、証券ではなく電子決済手段または stablecoin である場合は [[financial-licenses/payment-license-stack|Japan payment license stack]] へ回送する。 |
| 「未上場」vs「無免許」 | ある一覧で会社が見つからないことは、カテゴリ違いまたは表記の陳腐化を意味しうる。 | 無免許の状態を主張するのではなく、「確認したソースにその日付時点で見つからない」と記録する。 |

## リサーチ・チェックリスト

1. 会社の法人名と、可能な場合は法人番号から始める。
2. その活動に合致する FSA ライセンス・ポータルのカテゴリを確認する。
3. 証券関連であれば、FSA 金融商品取引業者一覧と登録金融機関一覧を確認する。
4. ディーラー自主規制が問題となる場合は、JSDA の会員カテゴリを確認する。
5. 登録番号、主たる業者、顧客資産の分別、サービス範囲について会社開示を確認する。
6. 引受については、JPX 上場資料、EDINET / 目論見書資料、JSDA 引受規則を確認する。
7. PTS / SOR については、手数料のマーケティングだけでなく、場のルールと執行ポリシーを確認する。
8. 結論は as-of 日付とソース・カテゴリを付して記述する。

## 関連

- [[financial-licenses/INDEX]]
- [[securities/INDEX]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[securities/japan-online-brokerage-competition]]
- [[securities/japan-underwriting-market-structure]]
- [[securities/japan-market-infrastructure-map]]
- [[financial-regulators/jsda]]
- [[securities-firms/sbi-securities]]
- [[securities-firms/rakuten-securities]]
- [[securities-firms/mizuho-securities]]
- [[INDEX|FinWiki index]]

## 出典

- FSA: "免許・許可・登録等を受けている事業者一覧".
- FSA: "金融商品取引業者登録一覧", as of 2026-04-30 on the checked FSA portal.
- FSA: comprehensive supervisory guidelines for financial instruments business operators.
- JSDA: organization overview, member list, and rules pages.
- e-Gov law search.
