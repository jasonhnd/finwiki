---
source: financial-licenses/insurance-license-and-solvency
source_hash: 7723f65c094783cb
lang: ja
status: machine
fidelity: ok
title: "日本の保険免許とソルベンシーのルート"
translated_at: 2026-06-15T03:48:21.815Z
---

# 日本の保険免許とソルベンシーのルート

## 概要日本の保険規制は、**リスクを引き受ける保険会社 (risk-bearing insurers)** と **販売仲介者 (distribution intermediaries)** を区別する。生命保険会社、損害保険会社、保険持株会社、少額短期保険業者、保険代理店、保険ブローカーは、それぞれ別個の公的規制カテゴリーである。引受主体は保険負債とソルベンシー監督を担い、代理店 / ブローカーのルートは募集・媒介・顧客説明・行為を規律する。

このページは [[insurance/INDEX|insurance domain]] ページの legal-control layer として用いること。[[insurance/economic-value-based-solvency|economic value-based ソルベンシー regulation]]、[[insurance/esr-economic-value-solvency|ESR]]、[[insurance/insurance-agency-and-brokerage-japan|insurance agency and 証券仲介 Japan]]、[[insurance/japan-life-insurance-big-four|Japan life insurance big four]]、[[insurance/japan-nonlife-big-three|Japan non-life big three]]、および [[life-insurers/nippon-life|Nippon Life]]、[[life-insurers/dai-ichi-life|Dai-ichi Life]]、[[non-life-insurers/tokio-marine|Tokio Marine]]、[[non-life-insurers/msad|MS&AD]]、[[non-life-insurers/sompo|Sompo]] のような保険会社エンティティのページと併せて読むこと。

出典の階層: FSA の免許リストが法的カテゴリーを特定し、保険業法と FSA 監督指針が規制の文言を提供し、保険会社の開示が会社レベルの資本 / ESR の事実を提供する。

## 規制マップ (Regime Map)

| Layer | Public source of truth | What it answers | Typical page linkage |
|---|---|---|---|
| Life insurer | FSA licensed 事業者 list for life insurance companies | Which legal entity is licensed to underwrite life insurance | [[life-insurers/nippon-life]], [[life-insurers/dai-ichi-life]], [[life-insurers/meiji-yasuda]], [[life-insurers/sumitomo-life]] |
| Non-life insurer | FSA licensed 事業者 list for non-life insurance companies | Which legal entity is licensed to underwrite property / casualty insurance | [[non-life-insurers/tokio-marine-nichido-fire]], [[non-life-insurers/mitsui-sumitomo-insurance]], [[non-life-insurers/aioi-nissay-dowa-insurance]], [[non-life-insurers/sompo-japan-insurance]] |
| Insurance holding company | FSA insurance holding-company list | Which group is regulated at the holding-company layer | [[life-insurers/dai-ichi-life]], [[non-life-insurers/tokio-marine]], [[non-life-insurers/msad]], [[non-life-insurers/sompo]] |
| Small-amount short-term insurer | FSA registered 事業者 list | Narrower 引受 route for small-ticket, short-term products | Specialty / embedded-insurance adjacency |
| Insurance agent / solicitor | Insurance Business Act / FSA guideline / company disclosures | Who solicits or explains insurance for an insurer | [[insurance/life-insurance-channel-mix]], bank / retailer / direct channels |
| Insurance broker | FSA insurance broker list and FSA guideline | Who mediates insurance contracts as a broker rather than acting as insurer-side agency | [[insurance/insurance-agency-and-brokerage-japan]] |
| ソルベンシー / ESR | FSA economic-value ソルベンシー hub plus company disclosure | How insurer capital adequacy is measured and disclosed | [[insurance/economic-value-based-solvency]], [[insurance/esr-economic-value-solvency]] |

## 引受と販売 (引受 And Distribution)

日本では、銀行の窓口、オンラインブローカー、小売業者、通信グループ、決済アプリ、旅行プラットフォームが保険を販売しつつ、保険リスクは免許を受けた保険会社のバランスシートに残ることがある。

リスクを引き受ける保険会社は、契約者負債、引受リスク、資産負債管理、保険金支払い、責任準備金、ソルベンシー・マージン / ESR 監督、商品認可 / 保険数理の統制を担う。販売者は顧客接点とブランド体験を保有し得るが、法的契約と資本リスクは依然として別のエンティティに置かれ得る。

同じバランスシート / 販売の分離は、[[banking/japan-baas-operating-models|BaaS operating models]] および [[financial-licenses/payment-license-stack|Japan payment license stack]] にも現れ、そこでは指図 / 販売の層が、規制対象のバランスシート保有者から切り離されている。Embedded finance と embedded insurance は、顧客インターフェースをプラットフォームに置きつつ、規制対象のバランスシートを銀行や保険会社に帰属させ得る。公の商品マッピングは、開示されている場合、契約主体、保険料受領者、保険金負担主体、免許カテゴリー、募集主体を記録する。

## ソルベンシーのルート (ソルベンシー Route)

日本の保険会社の資本枠組みは、今や二通りの読み方を要する:

| Topic | Reading rule |
|---|---|
| ソルベンシー margin | Legacy / statutory capital adequacy vocabulary that still appears in disclosures and regulatory materials. |
| Economic value-based ソルベンシー | FSA framework built around economic valuation, policyholder protection, risk management, and disclosure. |
| ESR | Company-level economic ソルベンシー ratio disclosed by insurers under their own reporting dates and definitions. |
| Pillar structure | FSA frames the economic-value regime around ソルベンシー regulation, internal management / supervisory review, and disclosure. |
| Source date | FSA notices, field-test materials, company disclosures, and implementation materials are date-specific. |

会社レベルの資本に関する記述は、名指しされた指標と出典日付に紐づく。[[life-insurers/dai-ichi-life|Dai-ichi Life]] や [[non-life-insurers/tokio-marine|Tokio Marine]] のような上場グループは、統合報告書 / 決算開示資料を公表する。[[life-insurers/nippon-life|Nippon Life]]、[[life-insurers/meiji-yasuda|Meiji Yasuda]]、[[life-insurers/sumitomo-life|Sumitomo Life]] のような相互会社は、ソルベンシー、ガバナンス形態、剰余金還元の情報を、それぞれ独自の開示ルートを通じて公表する。

## エンティティ・クロスウォーク (Entity Crosswalk)

| Question | Do not answer with | Better route |
|---|---|---|
| "Is this an insurer?" | Brand name alone | Check FSA life / non-life / small-amount short-term lists and entity disclosure. |
| "Is this an insurance group?" | Product website alone | Check whether the group has an insurance holding-company layer or only insurer subsidiaries. |
| "Can this platform sell insurance?" | App UI alone | Check agency / broker / financial-service intermediary / partner insurer structure. |
| "Is ESR high or low?" | A single ratio copied without date | Compare source date, product mix, market sensitivity, and disclosed target range. |
| "Is this a broker?" | Colloquial English "broker" wording | Check Japanese legal status: agent / solicitor / insurance broker / intermediary. |

## JapanFG との関連 (JapanFG Relevance)

このページは、免許の表層を会社ページと接続し続ける:

- 大手生命保険会社: [[life-insurers/nippon-life]]、[[life-insurers/dai-ichi-life]]、[[life-insurers/meiji-yasuda]]、[[life-insurers/sumitomo-life]]、[[life-insurers/kampo-life]]。
- 主要損害保険グループ: [[non-life-insurers/tokio-marine]]、[[non-life-insurers/msad]]、[[non-life-insurers/sompo]]。
- 営業中の損害保険会社: [[non-life-insurers/tokio-marine-nichido-fire]]、[[non-life-insurers/mitsui-sumitomo-insurance]]、[[non-life-insurers/aioi-nissay-dowa-insurance]]、[[non-life-insurers/sompo-japan-insurance]]。
- ダイレクト / プラットフォーム保険会社: [[non-life-insurers/sony-insurance]]、[[non-life-insurers/sbi-insurance]]、[[non-life-insurers/au-insurance]]、[[life-insurers/lifenet]]、[[non-life-insurers/rakuten-general-insurance]]。
- 再保険 / 官民の巨大災害スキーム: [[non-life-insurers/toa-reinsurance]]、[[non-life-insurers/japan-earthquake-reinsurance]]、[[insurance/earthquake-insurance-public-private-scheme]]。

## 出典フィールド (Source Fields)

1. 正確な法的エンティティと日本語の登録名を特定する。
2. FSA の免許 / 登録業者リスト。
3. そのページが引受、持株会社による支配、代理店販売、ブローカー媒介、資本充足性のいずれに関するものかを決定する。
4. ソルベンシーの事実については、FSA の経済価値ベース・ソルベンシー資料と会社の開示日付。
5. チャネルの事実については [[insurance/life-insurance-channel-mix|Life-insurance channel mix]] または [[insurance/insurance-agency-and-brokerage-japan|insurance agency and 証券仲介 Japan]]。
6. 官民の巨大災害の事実については [[insurance/earthquake-insurance-public-private-scheme|Earthquake insurance public-private scheme]] と [[insurance/natcat-reinsurance-japan|nat-cat reinsurance Japan]]。
7. registry の確認が否定的だが規制当局の言明が引用されていない場合は「Not found in checked public list as of date」の文言。

## 関連

- [[financial-licenses/INDEX]]
- [[insurance/INDEX]]
- [[insurance/economic-value-based-solvency]]
- [[insurance/esr-economic-value-solvency]]
- [[insurance/insurance-agency-and-brokerage-japan]]
- [[insurance/japan-life-insurance-big-four]]
- [[insurance/japan-nonlife-big-three]]
- [[INDEX|FinWiki index]]

## 出典

- FSA: licensed / registered 事業者 lists.
- FSA: economic value-based ソルベンシー regulation hub.
- FSA: comprehensive supervision guideline for insurance companies.
- e-Gov: Insurance Business Act.
- FSA: insurance broker supervision-guideline section.
