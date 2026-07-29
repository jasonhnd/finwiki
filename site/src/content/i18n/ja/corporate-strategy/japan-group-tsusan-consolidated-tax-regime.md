---
source: corporate-strategy/japan-group-tsusan-consolidated-tax-regime
source_hash: 7139207aec24dc38
lang: ja
model: qwen3-4b-instruct-2507-4bit-guarded-full-sync+manual-review
status: machine
fidelity: ok
title: "グループ通算制度 — 2022年施行、完全支配関係グループの損益通算と企業再編"
translated_at: 2026-07-29T05:13:34.783Z
---

# グループ通算制度 — 2022年施行、完全支配関係グループの損益通算と企業再編

## ウィキルート

この項目は[[corporate-strategy/INDEX|corporate-strategy INDEX]]の下に位置し、グループ資本オーバーレイに対して[[finance/INDEX|finance INDEX]]へルーティングされます。**継続的なグループ課税制度**をカバーしており、グループが親会社の下に設置された時点で実効的な設計要因となるため、[[corporate-strategy/japan-holding-company-conversion|holding-company conversion]]（この制度が課税対象となる親子会社構造を形成する）の直後で読む必要があります。また、分割とその際の損失繰越のルールとの関係については[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]、合併における損失の移動については[[corporate-strategy/japan-gappei-merger-regime|合併 merger regime]]を併せて参照してください。

## TL;DR

**グループ通算制度（group tsūsan seido, group tax-sharing system）**は、各社を**個別の納税単位**として維持しながら、企業グループを経済的一体として損益通算する制度である。**旧連結納税制度（consolidated-tax system）**の**後継制度**であり、**2022年4月1日以後に開始する事業年度**から旧制度に代わって適用される。

最も重要な特徴は**損益通算**である。同じ完全支配関係グループ内で、ある会社の利益を他社の損失と相殺し、グループの**純損益**を基礎に税負担を調整する。黒字会社だけが課税され、赤字会社の損失が利用されずに残る事態を避ける仕組みである。

旧制度からの主な変更は次のとおり。

- **連結納税（旧、2022以前）** — 事業グループ全体に対して、**母会社が一つの連結申告書を提出**した。そのグループ内のどの子会社でも修正が発生した場合、全グループに対して再計算が求められ、母会社に重い行政負担をもたらした。
- **グループ通算（新、2022年以降）** — **各社が個別に申告**し、自社の税額を計算する。損益通算や一定の項目のみグループ内で調整する。後日の修正は原則として**その会社に遮断**され、他社の全面的な再申告を要しない。

二つの異なる概念を混同してはならない — 日本には**二つの**グループ課税枠組みが並行して運営されている。

1. **グループ法人税制** — **強制適用かつ自動**で、すべての100%グループに適用される。グループ内資産譲渡の損益繰延べや受取配当等の全額益金不算入などを含み、選択制ではない。
2. **グループ通算制度** — **選択制**で、完全支配関係グループ内の損益を通算する。適用を選択して承認を受ける。

## 1. なぜグループ課税制度が存在するのか

グループ通算がなければ各社は独立して課税される。親会社が¥100の利益を計上すればその¥100が課税対象となり、同じ年に姉妹会社が¥100の損失を計上しても、グループ全体の純利益がゼロであるにもかかわらず親会社に税負担が生じる。グループ通算は損失を利益と**相殺**できるようにする。これが[[corporate-strategy/japan-holding-company-conversion|holding-company structure]]の税務効率を支える要素であり、別法人に分かれた黒字・赤字をグループ内で通算できる。

その代償は制度の複雑さと継続的な拘束である。このため制度は**選択制**で、**完全支配関係（100%所有）グループ**に限って適用され、濫用防止規定が設けられている。

## 2. 連結納税 → グループ通算 — 2022 改革が変更したこと

| 特徴 | 連結納税制度（pre-2022) | グループ通算制度（from 2022) |
|---|---|---|
| 提出単位 | **母会社が1つ**で統合申告を行う | **各会社が自ら**申告を行う |
| 税額計算 | グループ全体を一体として計算 | 個別計算＋グループ内調整 |
| その後の訂正の影響 | 全グループでの再計算 | **遮断（リングフェンス）** が大多数の場合に適用される |
| 損益通算 | あり | **あり — 継続**（中核的なメリットは維持） |
| 行政負担 | 母会社に重い負担 | 分散される；電子申告が義務化される |
| 対象範囲 | 100%グループ | 100%グループ（完全支配関係） |

情報源：効力発生日、独立会社の申告、損失の相殺および修正ブロッキングの概要は、NTAの現在のグループ課税資料に従っています。この表はシステムレベルの比較であり、選択肢、移行ルール、および例外を省略しています。^[Sources: https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/hojin/group_tsusan/index.htm; https://www.nta.go.jp/taxes/shiraberu/taxanswer/hojin/5900.htm.]

改革の目的は、損益通算のメリットを維持しながら、単一の連結申告に伴う事務負担を軽減することだった。旧連結納税制度を適用していたグループは、2022年4月1日以後に開始する最初の事業年度について離脱届を提出しない限り、自動的にグループ通算制度へ移行した。

## 3. グループ法人税制 vs グループ通算制度 — 二重構造、混同しないように

これは制度の最も一般的な混乱のポイントであり、[[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|株式分配 regime]]の項目がスピンオフ側に位置づけた株式分配とパーシャルスピンオフの混同を反映している。

| | グループ法人税制 (group corp-tax rules) | グループ通算制度 (group tax-sharing) |
|---|---|---|
| 選択 | **必須 / 自動** | **選択可能**（参加登録） |
| 対象範囲 | すべての 100%-グループ | 100%-グループが選択した場合に限る |
| 中核内容 | グループ内資産譲渡の**損益繰延べ**；**100%グループ**内の受取配当等の全額益金不算入；寄附・受贈益の調整 | グループ内の利益・損失の**損益通算**；一定の控除をグループ単位で利用 |
| メンタルモデル | どんな場合でも適用される**基本ルール**。完全子会社を持つグループに対しては、好ましくないとしても適用される | グループの課税所得を総合的に算出する**追加制度** |

出典：NTAのグループ課税要旨および法人税法に基づく。『メンタルモデル』は説明的略語に過ぎず、実際の適用範囲、除外事項、選択、承認および計算規則は現在の法律およびNTAのガイドラインに準拠している。^[Sources: https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/hojin/group_tsusan/index.htm; https://laws.e-gov.go.jp/document?lawid=340AC0000000034.]

よって、100%グループは常にグループ法人税制の基準（たとえば、各メンバー間で資産を移動させても利益の発生を引き起こさない）を適用し、さらに**選択的に**グループ通算を適用して、利益と損失を繰り合わせることができる。両者は共存する。

## 4. 損益通算がどのように機能するか（概要）

グループ通算制度において、ある会計年度には：

- 各会社は自らの収益または損失を計算する。
- 損失を被る会社の損失は、利益を上げる会社の収益に対して、それぞれの収益に応じた割合（按分）で配分され、グループ全体の課税対象額を低下させる。
- ある会社における後の修正は、ほとんどの場合、他の会社の計算を影響させない（遮断される）——これは旧来の単一申告モデルに比べた、重要な行政的改善点である。

便益は実際のキャッシュフローに表れる。[[corporate-strategy/japan-holding-company-conversion|HoldCo structure]]では、黒字の親会社が投資子会社の立上げ損失を通算し、事業構築期のグループ税負担を繰り延べ、または軽減できる。これが、この制度と再編戦略が密接に関係する理由の一つである。

## 5. 再編との関係 — 本ドメインが関心を持つ場面

グループ通算は単なる会計選択にとどまらず、**再編が税務上効率的かどうか、そしてそのタイミング**を決定する。

- **持株会社化** — [[corporate-strategy/japan-holding-company-conversion|持株会社化]]後、新しい持株会社と事業子会社はグループ通算の対象になり得る100%グループを形成する。このため、一時的な適格税制だけでなく、持株会社化後の継続的な税務効率も本制度に左右される。転換手法は[[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式移転 / 株式交換]]を参照。
- **会社分割と繰越欠損金** — [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]]で事業を切り出す場合、法人税法第57条以下の**欠損金の濫用防止規定**が、通算グループ内の繰越欠損金の利用と関係する。所有権変更により、本来利用できる欠損金が制限される場合がある。
- **合併と引継欠損金** — [[corporate-strategy/japan-gappei-merger-regime|qualified merger]]では対象会社の繰越欠損金を存続会社へ引き継げる場合があるが、濫用防止の判定を受ける。その欠損金をグループ全体の損益通算に利用できるかは、存続会社グループの通算制度適用状況による。
- **グループへの加入・離脱** — 企業が100%グループ（例：取得または[[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|株式分配]]を経て発生したスピンオフを介して）に参加または離脱した場合、この規制では**時間的配分、加入・離脱時の資産の市場価格への評価、および加入前の損失の扱い**について特定のルールが定められている。これらのルールは、グループ境界において損失を輸入または剥離するのを防ぐ目的で設けられている。

これは[[corporate-strategy/INDEX|domain index]]が指摘する「再発的な税制と構造の緊張」である。法的構造（誰が誰を所有しているか）と税制（グループの総合計算方法）は、両者を同時に設計しなければならない。

## 6. なぜ企業戦略に位置づけられるのか、税務だけではないのか

グループ課税制度は純粋な遵守に見えるかもしれないが、それは**戦略的構造設計の要素**である。

- グループが[[corporate-strategy/japan-holding-company-conversion|pure-HoldCo]]モデルを採用する主な理由の一つである。中立的な持株会社の下に100%子会社として事業を置けば、ポートフォリオ全体の損益を通算できる。
- 赤字の新規事業を**どこに置くか**に影響する。通算グループ内ならその損失をグループ利益と相殺できるが、グループ外では相殺できない。
- 保有会社（HoldCo）の**配当フロー設計**と相互に作用する。 100% グループ法人税制による内部グループ配当除外は、キャッシュを親会社へ移動させ、課税を回避するものである。
- 規制金融グループについては、HoldCoの監督がその構造を整えるものと重ねられる。 [[finance/japan-listed-financial-groups-investable-universe|the listed-financial-groups universe]] そして [[corporate-strategy/INDEX|corporate-strategy INDEX]]。

## 7. 反論と注意点

- **制度選択は継続的なコミットメントであり、気軽に切り替えるものではない。** グループ通算はグループ全体で選択し、任意に撤回できるものではない。判断には各社の欠損金残高と業績予測が関係する。
- **遮断は「ほとんどの場合」であり、絶対的ではない。** 一定のグループレベルの項目や反悪用調整は、各会社間を越えて依然として適用される可能性がある。リングフェンスは大きな改善をもたらすが、壁とは言えない。
- **二つの制度、一つのグループ。** 必須的な「グループ法人税制」基盤と選択的な「グループ通算」追加項目を混同しないでください。両者は異なる問題に答えるもの（グループ内移転・配当 vs 損益通算）である。
- **欠損金の移動は濫用防止規定に制約される。** 欠損金は再編によって自由に移せるものではない。[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|splits]]や[[corporate-strategy/japan-gappei-merger-regime|mergers]]を制約する法人税法第57条系列の規定は、通算グループが最終的に利用できる欠損金にも作用する。
- **規則は年次で進化する。** グループ税の詳細は、継続的な税制改正によって調整される。具体的な適用を信頼する前に、現在の扱いをNTAガイドラインと照らし合わせて確認する。

## 関連

- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]]
- [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転 regime]]
- [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]
- [[corporate-strategy/japan-gappei-merger-regime|合併 merger regime]]
- [[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|株式分配 spin-off regime]]
- [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]]
- [[finance/japan-listed-financial-groups-investable-universe|Japan listed-financial-groups investable universe]]
- [[finance/INDEX|finance INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- 国税庁「グループ通算制度」: https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/hojin/group_tsusan/index.htm
- 国税庁 No.5900「グループ通算制度の概要」: https://www.nta.go.jp/taxes/shiraberu/taxanswer/hojin/5900.htm
- 国税庁 法人税法基本通達 1-4-5 (組織再編成): https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- METI 経済法制 policy portal: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/
- 法人税法 (Corporation Tax Act, Act No. 34 of 1965 — グループ通算 / 組織再編成 provisions): https://laws.e-gov.go.jp/document?lawid=340AC0000000034
- FSA English portal (group / holding-company supervision context): https://www.fsa.go.jp/en/

---

> [!info] 校核状态
> confidence: **likely**. The replacement of 連結納税制度 by グループ通算制度 effective for fiscal years beginning on/after 1 April 2022, the retention of 損益通算, the shift to per-company filing with 遮断 of corrections, the 完全支配関係 scope, and the distinction from the mandatory グループ法人税制 baseline are confirmed against NTA materials. Detailed mechanics (loss-allocation, entry/exit mark-to-market, anti-trafficking interaction) are technical and revised by annual 税制改正 — confirm current treatment per NTA guidance and specialist advice.
