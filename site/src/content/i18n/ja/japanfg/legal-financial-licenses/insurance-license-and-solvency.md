---
source: japanfg/legal-financial-licenses/insurance-license-and-solvency
source_hash: d24fec4b17cee6d7
lang: ja
status: machine
fidelity: ok
title: "日本の保険免許とソルベンシーのルート"
translated_at: 2026-06-02T14:54:39.038Z
---

# 日本の保険免許とソルベンシーのルート

## 概要

日本の保険規制は、**リスクを引き受ける保険会社** と **販売仲介者** を分けて扱う。生命保険会社、損害保険会社、保険持株会社、少額短期保険業者、保険代理店、保険仲立人は、それぞれ公開規制上の別カテゴリである。引受主体は保険負債とソルベンシー監督を負い、代理店・仲立人のルートは募集、媒介、顧客説明、行為規制を扱う。

このページは、[[insurance/INDEX|insurance domain]] 関連ページの法的コントロールレイヤーとして使う。[[insurance/economic-value-based-solvency|economic value-based solvency regulation]]、[[insurance/esr-economic-value-solvency|ESR]]、[[insurance/insurance-agency-and-brokerage-japan|insurance agency and brokerage Japan]]、[[insurance/japan-life-insurance-big-four|Japan life insurance big four]]、[[insurance/japan-nonlife-big-three|Japan non-life big three]]、および [[JapanFG/nippon-life|Nippon Life]]、[[JapanFG/dai-ichi-life|Dai-ichi Life]]、[[JapanFG/tokio-marine|Tokio Marine]]、[[JapanFG/msad|MS&AD]]、[[JapanFG/sompo|Sompo]] のような保険会社ページと合わせて読む。

出典階層としては、FSA の免許一覧が法的カテゴリを特定し、保険業法と FSA 監督指針が制度上の用語を与え、各保険会社の開示が会社別の資本・ESR 事実を与える。

## 制度マップ

| レイヤー | 公開上の基準出典 | 確認できること | 典型的なページ連携 |
|---|---|---|---|
| 生命保険会社 | FSA 生命保険会社免許一覧 | どの法人が生命保険を引き受ける免許を持つか | [[JapanFG/nippon-life]]、[[JapanFG/dai-ichi-life]]、[[JapanFG/meiji-yasuda]]、[[JapanFG/sumitomo-life]] |
| 損害保険会社 | FSA 損害保険会社免許一覧 | どの法人が損害保険を引き受ける免許を持つか | [[JapanFG/tokio-marine-nichido-fire]]、[[JapanFG/mitsui-sumitomo-insurance]]、[[JapanFG/aioi-nissay-dowa-insurance]]、[[JapanFG/sompo-japan-insurance]] |
| 保険持株会社 | FSA 保険持株会社一覧 | どのグループが持株会社レイヤーで規制されるか | [[JapanFG/dai-ichi-life]]、[[JapanFG/tokio-marine]]、[[JapanFG/msad]]、[[JapanFG/sompo]] |
| 少額短期保険業者 | FSA 登録業者一覧 | 少額・短期商品のための、より限定された引受ルート | 専門・組込保険との隣接領域 |
| 保険代理店・募集人 | 保険業法 / FSA 監督指針 / 会社開示 | 保険会社のために誰が募集または説明を行うか | [[insurance/life-insurance-channel-mix]]、銀行 / 小売 / ダイレクトチャネル |
| 保険仲立人 | FSA 保険仲立人一覧および FSA 監督指針 | 保険会社側の代理店ではなく、仲立人として誰が保険契約を媒介するか | [[insurance/insurance-agency-and-brokerage-japan]] |
| ソルベンシー / ESR | FSA の経済価値ベースのソルベンシー関連情報と会社開示 | 保険会社の資本十分性がどのように測定・開示されるか | [[insurance/economic-value-based-solvency]]、[[insurance/esr-economic-value-solvency]] |

## 引受と販売

日本では、銀行窓口、オンラインブローカー、小売事業者、通信グループ、決済アプリ、旅行プラットフォームが保険を販売していても、保険リスクは免許を持つ保険会社のバランスシートに残る場合がある。

リスクを引き受ける保険会社は、契約者に対する負債、引受リスク、ALM、保険金支払い、責任準備金、ソルベンシー・マージン / ESR 監督、商品認可・数理管理を担う。販売者は顧客接点やブランド体験を持つことがあるが、法的契約と資本リスクは別法人に残り得る。

同じバランスシートと販売の分離は [[banking/japan-baas-operating-models|BaaS operating models]] にも現れる。組込金融や組込保険では、顧客インターフェースがプラットフォーム側に置かれても、規制対象のバランスシートは銀行または保険会社に属することがある。公開された商品マッピングでは、契約主体、保険料の受領者、保険金支払いを負う主体、免許カテゴリ、募集主体を、開示されている範囲で記録する。

## ソルベンシー上の位置づけ

日本の保険会社の資本フレームワークは、現在は二つの読み方が必要である。

| 論点 | 読み方 |
|---|---|
| ソルベンシー・マージン | 開示や規制資料に残る、従来型・法定ベースの資本十分性の語彙。 |
| 経済価値ベースのソルベンシー | 経済価値評価、契約者保護、リスク管理、開示を中心に構成される FSA の枠組み。 |
| ESR | 各保険会社が自社の報告日と定義に基づいて開示する、会社別の経済価値ベースのソルベンシー比率。 |
| 柱立て | FSA は経済価値ベースの制度を、ソルベンシー規制、内部管理・監督上のレビュー、開示を軸に整理している。 |
| 出典日 | FSA の告知、フィールドテスト資料、会社開示、実施関連資料は日付に依存する。 |

会社別の資本に関する記述は、指標名と出典日に紐づける。[[JapanFG/dai-ichi-life|Dai-ichi Life]] や [[JapanFG/tokio-marine|Tokio Marine]] のような上場グループは統合報告書や決算開示資料を公表する。[[JapanFG/nippon-life|Nippon Life]]、[[JapanFG/meiji-yasuda|Meiji Yasuda]]、[[JapanFG/sumitomo-life|Sumitomo Life]] のような相互会社は、自社の開示ルートを通じてソルベンシー、ガバナンス形態、剰余還元の情報を公表する。

## 法人確認の早見表

| 問い | 避ける回答 | よりよい確認ルート |
|---|---|---|
| 「これは保険会社か」 | ブランド名だけで判断する | FSA の生命保険 / 損害保険 / 少額短期保険リストと法人開示を確認する。 |
| 「これは保険グループか」 | 商品サイトだけで判断する | 保険持株会社レイヤーがあるか、保険会社子会社だけなのかを確認する。 |
| 「このプラットフォームは保険を売れるか」 | アプリ画面だけで判断する | 代理店 / 仲立人 / 金融サービス仲介業 / 提携保険会社の構造を確認する。 |
| 「ESR は高いか低いか」 | 日付のない単一比率をコピーする | 出典日、商品構成、市場感応度、開示された目標レンジを比較する。 |
| 「これはブローカーか」 | 英語の一般的な broker 表現だけで判断する | 日本法上の地位、すなわち代理店 / 募集人 / 保険仲立人 / 仲介業者を確認する。 |

## JapanFG での重要性

このページは、免許面を会社ページと接続したままにするためのものである。

- 大手生命保険会社: [[JapanFG/nippon-life]]、[[JapanFG/dai-ichi-life]]、[[JapanFG/meiji-yasuda]]、[[JapanFG/sumitomo-life]]、[[JapanFG/kampo-life]]。
- 主要損害保険グループ: [[JapanFG/tokio-marine]]、[[JapanFG/msad]]、[[JapanFG/sompo]]。
- 損害保険の事業会社: [[JapanFG/tokio-marine-nichido-fire]]、[[JapanFG/mitsui-sumitomo-insurance]]、[[JapanFG/aioi-nissay-dowa-insurance]]、[[JapanFG/sompo-japan-insurance]]。
- ダイレクト / プラットフォーム型保険会社: [[JapanFG/sony-insurance]]、[[JapanFG/sbi-insurance]]、[[JapanFG/au-insurance]]、[[JapanFG/lifenet]]、[[JapanFG/rakuten-general-insurance]]。
- 再保険 / 官民の災害スキーム: [[JapanFG/toa-reinsurance]]、[[JapanFG/japan-earthquake-reinsurance]]、[[insurance/earthquake-insurance-public-private-scheme]]。

## 確認すべき出典項目

1. 正確な法人と日本語の登録名称を特定する。
2. FSA の免許・登録業者一覧を確認する。
3. ページの対象が、引受、持株会社管理、代理店販売、仲立人による媒介、資本十分性のどれかを判断する。
4. ソルベンシー事実について、FSA の経済価値ベースのソルベンシー資料と会社開示日を確認する。
5. チャネル事実については [[insurance/life-insurance-channel-mix|Life-insurance channel mix]] または [[insurance/insurance-agency-and-brokerage-japan|insurance agency and brokerage Japan]] を確認する。
6. 官民災害スキームの事実については [[insurance/earthquake-insurance-public-private-scheme|Earthquake insurance public-private scheme]] と [[insurance/natcat-reinsurance-japan|nat-cat reinsurance Japan]] を確認する。
7. 登録簿確認が否定的で、規制当局の明示的な記述を引用していない場合は、「確認した公開リストでは当該日現在見つからない」という表現を使う。

## 関連項目

- [[JapanFG/legal-financial-licenses/INDEX]]
- [[insurance/INDEX]]
- [[insurance/economic-value-based-solvency]]
- [[insurance/esr-economic-value-solvency]]
- [[insurance/insurance-agency-and-brokerage-japan]]
- [[insurance/japan-life-insurance-big-four]]
- [[insurance/japan-nonlife-big-three]]
- [[INDEX|FinWiki index]]

## 出典

- FSA: 免許・登録業者一覧。
- FSA: 経済価値ベースのソルベンシー規制関連情報。
- FSA: 保険会社向けの総合的な監督指針。
- e-Gov: 保険業法。
- FSA: 保険仲立人に関する監督指針セクション。
