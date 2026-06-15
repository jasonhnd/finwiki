---
source: corporate-strategy/japan-group-tsusan-consolidated-tax-regime
source_hash: e67e19b3f08e6b7f
lang: ja
status: machine
fidelity: ok
title: "グループ通算制度 (Japan group tax-sharing regime) — 連結納税の 2022 後継制度、完全支配グループ内の損益通算、および組織再編との相互作用"
translated_at: 2026-06-15T03:48:21.933Z
---

# グループ通算制度 (Japan group tax-sharing regime) — 連結納税の 2022 後継制度、完全支配グループ内の損益通算、および組織再編との相互作用

## Wiki ルート

本項目は [[corporate-strategy/INDEX|corporate-strategy INDEX]] に属し、グループ資本のオーバーレイについては [[finance/INDEX|finance INDEX]] につながる。これは、グループが親会社の下に置かれた瞬間に設計上の生きた要因となる **継続的なグループ税制** を扱う — したがって、この制度が課税する親子関係構造を作り出す [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]] の直後に読み、繰越欠損金ルールが分割とどう相互作用するかについては [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]] と並べて、合併で損失がどう移転するかについては [[corporate-strategy/japan-gappei-merger-regime|合併 merger regime]] と併せて読むこと。

## TL;DR

**グループ通算制度 (group tsūsan seido, group tax-sharing system)** は、**完全支配の企業グループ**を経済的単位として課税しつつ、各社を**別個の納税者**として維持する日本の制度である。これは旧 **連結納税制度 (consolidated-tax system)** の **後継**であり、連結納税制度は **1 年 2022月以後に開始する事業年度から廃止・置換**された。

最も重要な特徴は **損益通算 (loss-offsetting)** である：あるグループ会社の利益を、同じ完全支配グループ内の別の会社の損失と相殺できるため、グループは勝者に課税して敗者の損失を取り残すのではなく、**ネット**のポジションに対して課税される。

旧制度からの主な変更点：

- **連結納税 (旧、2022以前)** — **親会社がグループ全体について一つの連結申告**を行った；いずれかの子会社での更正がグループ全体の再計算を強制し、親会社に重い事務負担を生じさせた。
- **グループ通算 (新、2022から)** — **各社が自社の申告を行い**、自社の税額を計算し、損益通算および一定の項目はグループを*横断して*調整される。ある一社における事後の更正は、おおむねその会社に **遮断 (ring-fenced)** され、他社が完全な再申告を免れる。

混同してはならない二つの異なる概念がある — 日本には並行して走る **二つの** グループ税制の枠組みがある：

1. **グループ法人税制 (group corporation-tax rules)** — *すべての* 100%グループに対して **強制かつ自動的** で、グループ内資産の非課税移転や全額の受取配当益金不算入などを対象とする。選択はない。
2. **グループ通算制度 (group tax-sharing)** — **選択制** で、完全支配グループを横断する利益と損失の **損益通算** を加える。任意で選択加入する。

## 1. なぜグループ税制が存在するのか

いかなるグループ税制もなければ、各社は単独で課税される：¥100 の利益を得た親会社は、同じ年に姉妹子会社が ¥100 の損失を出したとしても ¥100 に対して税を払う — グループ全体としては何も儲けていないのに、税を払うのである。グループ税制は、損失が利益を **相殺** できるようにすることでこれを是正する。これこそが [[corporate-strategy/japan-holding-company-conversion|holding-company structure]] を tax-efficient にするレバーである：事業が親会社の下に子会社として置かれれば、グループは別々の法人に勝者と敗者を抱えることでペナルティを受ける代わりに、それらの業績を相殺できる。

トレードオフは複雑さとコミットメントである — だからこそこの制度は **選択制** で、**完全支配関係 (100%所有) グループのみ** にスコープが限定され、グループが損失を機会主義的に cherry-pick できないよう濫用防止ルールでヘッジされている。

## 2. 連結納税 → グループ通算 — 2022 改正が何を変えたか

| 特徴 | 連結納税制度 (2022以前) | グループ通算制度 (2022から) |
|---|---|---|
| 申告単位 | **親会社が一つの**連結申告を行う | **各社が自社の**申告を行う |
| 税額計算 | グループを単一の主体として計算 | 個別計算 + グループ横断調整 |
| 事後の更正の効果 | グループ全体の再計算 | 多くの場合、当該会社に **遮断 (ring-fenced)** |
| 損益通算 (損益通算) | あり | **あり — 維持**（コアのベネフィットは存続） |
| 事務負担 | 親会社に重い | 分散；電子申告が義務化 |
| スコープ | 100%グループ | 100%グループ (完全支配関係) |

この改正の目的は、単一申告の連結が抱える **事務的な足かせを排しつつ損益通算のベネフィットを維持する**ことであった。既に連結納税にあったグループは、1 年 2022月以後に開始する最初の事業年度の前に脱退の届出を行わない限り、おおむね自動的にグループ通算へ移行した。

## 3. グループ法人税制 vs グループ通算制度 — 二つのレイヤー、混同するな

これはこの制度の最も一般的な混同点であり、[[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|株式分配 regime]] の項目がスピンオフ側で決着させる 株式分配-vs-パーシャルスピンオフ の混同を映している：

| | グループ法人税制 (group corp-tax rules) | グループ通算制度 (group tax-sharing) |
|---|---|---|
| 選択 | **強制 / 自動** | **選択制**（選択加入） |
| スコープ | すべての 100%グループ | 選択した 100%グループ |
| コア内容 | 課税繰延のグループ内資産移転 (譲渡損益の繰延)；グループ構成員間の **100% 受取配当益金不算入**；寄附 / 受贈調整 | グループを横断する利益と損失の **損益通算**；一定の税額控除のグループレベルでの利用 |
| メンタルモデル | 好むと好まざるとにかかわらず *あらゆる* 完全支配グループに適用される **ベースライン** ルール | グループの課税所得をネットする **アドオン** |

したがって 100%グループは **常に** グループ法人税制のベースラインを得る（例：構成員間で利得を生じさせずに資産を移し替えできる）一方で、利益と損失をネットするために **追加的にグループ通算を選択できる**。両者は併存する。

## 4. 損益通算の仕組み（ハイレベル）

グループ通算の下では、ある事業年度において：

- 各社が自社の所得または損失を計算する。
- 損失計上会社の **損失** は、利益計上会社の所得に対して、それぞれの所得に比例して (按分) **配分される**ことで、グループ合計の課税ベースを引き下げる。
- ある一社における事後の更正は、多くの場合、他社の計算をかき乱すことから **遮断 (blocked)** される — 旧来の単一申告モデルに対する主たる事務上の改善点である。

そのベネフィットは実際のキャッシュである：[[corporate-strategy/japan-holding-company-conversion|HoldCo structure]] における利益の出る親会社は、投資子会社の立ち上げ期の損失を吸収し、build-out フェーズ中のグループ税を繰り延べたり減らしたりできる — これがこの制度が組織再編戦略とこれほど密接に相互作用する理由の一つである。

## 5. 組織再編との相互作用 — このドメインが関心を持つところ

グループ通算は単なる会計上の選択ではない；組織再編が tax-efficient で **あるかどうか、いつそうなるか** を形づくる：

- **持株会社化** — [[corporate-strategy/japan-holding-company-conversion|持株会社化]] の後、新しい HoldCo + 事業子会社はグループ通算の対象となる 100%グループを形成するため、その転換の（一回限りの 適格 取扱いだけでなく）*継続的な* 税効率はこの制度に依存する。転換の仕組みは [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式移転 / 株式交換]] を経由する。
- **会社分割と繰越欠損金** — 事業が [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]] によって切り出されるとき、**損失トラフィッキング防止** ルール（法人税法 57 条以下）は、通算 グループ内で 繰越欠損金 がどう使えるかと相互作用する；所有権の変動が、本来使えたはずの損失を制限しうる。
- **合併と引き継がれる損失** — [[corporate-strategy/japan-gappei-merger-regime|qualified merger]] は対象会社の 繰越欠損金 を存続会社に引き継ぎうるが、これも再びトラフィッキング防止テストに服する；それらの損失がその後グループ横断の相殺に供されるかどうかは、存続会社のグループの 通算 ステータスに依存する。
- **グループへの加入 / 離脱 (加入・離脱)** — 会社が [[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|株式分配]] を通じた取得やスピンオフなどで 100%グループに入ったり出たりするとき、この制度には **期間按分、加入 / 離脱時の資産時価評価、加入前損失の取扱い** に関する固有のルールがある — グループが構成員の境界を巡って損失を持ち込んだり剥ぎ取ったりするのを止めるよう設計されている。

これは [[corporate-strategy/INDEX|domain index]] が指し示す「繰り返し現れる税対構造の緊張」である：*法的* 構造（誰が誰を所有するか）と *税* 制度（グループがどうネットされるか）は、一緒に設計されなければならない。

## 6. なぜ税だけでなくコーポレート戦略に位置するのか

グループ税制は純粋なコンプライアンスのように見えるかもしれないが、**戦略的なストラクチャリングのインプット** である：

- グループが [[corporate-strategy/japan-holding-company-conversion|pure-HoldCo]] モデルを採用する主たる理由の一つである — ポートフォリオ横断で業績をネットできる、100%所有の事業子会社の上に立つ中立的な頂点。
- **損失の出る新規事業をどこに置くか**（その損失がグループ利益を相殺するよう 通算 グループ内に置くか、それとも外に置くか）に影響する。
- HoldCo の **配当フロー設計** と相互作用する（グループ法人税制の下での 100% グループ内受取配当益金不算入が、キャッシュを親会社まで非課税で吸い上げ続ける）。
- 規制下の金融グループにとっては、[[finance/japan-listed-financial-groups-investable-universe|the listed-financial-groups universe]] と [[corporate-strategy/INDEX|corporate-strategy INDEX]] の主体を組織する HoldCo 監督に重なる。

## 7. 反論と留意点

- **選択はコミットメントであり、トグルではない。** グループ通算はグループ単位で選択加入するもので、軽々しく覆されはしない；その判断は各構成員の損失ポジションと見通しに相互作用する。
- **遮断は「多くの場合」であり、絶対ではない。** 一定のグループレベル項目や濫用防止調整は依然として会社を横断して及びうる；リングフェンスは大きな改善であって、壁ではない。
- **二つの制度、一つのグループ。** 強制の グループ法人税制 ベースラインと選択制の グループ通算 アドオンを混同しないこと — それらは異なる問い（グループ内移転 / 配当 vs 損益のネット）に答える。
- **トラフィッキング防止ルールが損失の移動を律する。** 損失は組織再編を通じて自由には流れない；[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|splits]] と [[corporate-strategy/japan-gappei-merger-regime|mergers]] を制約するのと同じ 57条系列の制限が、通算 グループが最終的に使えるものを制約する。
- **ルールは毎年進化する。** グループ税制の詳細は度重なる 税制改正 によって調整される；具体に依拠する前に NTA のガイダンスに照らして現行の取扱いを確認すること。

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
- 国税庁 法人税法基本通達 1-4-5 (組織再編成): https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- METI 経済法制 policy portal: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/
- 法人税法 (Corporation Tax Act, Act No. 34 of 1965 — グループ通算 / 組織再編成 provisions): https://laws.e-gov.go.jp/document?lawid=340AC0000000034
- FSA English portal (group / holding-company supervision context): https://www.fsa.go.jp/en/

---

> [!info] 検証状況
> confidence: **likely**。1 年 2022, 月以後に開始する事業年度からの 連結納税制度 の グループ通算制度 による置換、損益通算 の維持、更正の 遮断 を伴う会社別申告への移行、完全支配関係 のスコープ、および強制の グループ法人税制 ベースラインとの区別は、NTA 資料に照らして確認済み。詳細な仕組み（損失配分、加入 / 離脱時の時価評価、トラフィッキング防止との相互作用）は技術的で、毎年の 税制改正 によって改められる — NTA のガイダンスと専門家の助言に従って現行の取扱いを確認すること。
