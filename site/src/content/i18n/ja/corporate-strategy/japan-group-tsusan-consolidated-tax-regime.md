---
source: corporate-strategy/japan-group-tsusan-consolidated-tax-regime
source_hash: 680dfe0d59619ad5
lang: ja
model: claude-opus-4-8
status: machine
fidelity: ok
title: "グループ通算制度 (Japan group tax-sharing regime) — 連結納税 の 2022 年の後継、完全子会社グループにおける損益通算、および再編との相互作用"
translated_at: 2026-06-05T00:00:00.000Z
---

# グループ通算制度 (Japan group tax-sharing regime) — 連結納税 の 2022 年の後継、完全子会社グループにおける損益通算、および再編との相互作用

## ウィキ上の位置づけ

このエントリは [[corporate-strategy/INDEX|corporate-strategy INDEX]] の下に位置し、グループ資本のオーバーレイのために [[finance/INDEX|finance INDEX]] へとルーティングする。これは、グループが親会社の下に位置した瞬間に現実的な設計要素となる**継続的なグループ税制**を扱う — したがって、このレジームが課税する親子会社構造を創設する [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]] の直後に、繰越欠損金ルールが分割とどう相互作用するかについて [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]] とともに、そして結合時に欠損金がどう移るかについて [[corporate-strategy/japan-gappei-merger-regime|合併 merger regime]] とともに読むこと。

## TL;DR

**グループ通算制度 (group tsūsan seido, group tax-sharing system)** は、**完全子会社グループ**を経済的単位として課税しつつ、各会社を**別個の納税者**として保つ日本のレジームである。これは、**2022 年 4 月 1 日以後に開始する事業年度について廃止・置換された**旧 **連結納税制度 (consolidated-tax system)** の**後継**である。

最も重要な特徴は **損益通算 (loss-offsetting)** である: あるグループ会社の利益を、同じ完全子会社グループ内の別の会社の損失と相殺でき、グループは勝者に課税し敗者の損失を取り残すのではなく、その**正味**のポジションに対して税を支払う。

旧レジームからの目玉の変更:

- **連結納税 (old, pre-2022)** — **親会社がグループ全体について 1 つの連結申告を提出**した。いずれかの子会社における更正がグループ全体の再計算を強制し、親会社に重い事務負担を生み出した。
- **グループ通算 (new, from 2022)** — **各会社が自社の申告を提出**し、自社の税を計算する。損益通算と一定の項目はグループを*横断して*調整される。ある会社での後の更正は、その会社に大きく**遮断 (遮断)** され、残りに完全な再提出を免れさせる。

混同してはならない 2 つの異なる概念がある — 日本には**2 つの**グループ税制フレームワークが並行して走っている:

1. **グループ法人税制 (group corporation-tax rules)** — *すべての* 100% グループについて**強制かつ自動**であり、グループ内の非課税資産移転や全額配当益金不算入のようなものをカバーする。選択なし。
2. **グループ通算制度 (group tax-sharing)** — **選択制**で、完全子会社グループを横断する利益と損失の **損益通算** を加える。オプトインする。

## 1. なぜグループ税制が存在するのか

いかなるグループレジームもなければ、各会社は単独で課税される: ¥100 の利益を稼ぐ親会社は、姉妹子会社が同年に ¥100 を失っても ¥100 に対して税を支払う — グループ全体としては何も生み出していないのに税を支払う。グループレジームは、損失が利益を**相殺**できるようにすることでこれを是正する。これはまさに [[corporate-strategy/japan-holding-company-conversion|holding-company structure]] を税務効率的にするレバーである: 事業が親会社の下に子会社として位置すると、グループは、勝者と敗者を別個の法人に収容したことで罰せられる代わりに、その結果をネットできる。

トレードオフは複雑さとコミットメントである — これがレジームが**選択制**であり、**完全支配関係 (100% 所有) グループのみ**にスコープが限定され、グループが日和見的に損失を選り好みできないよう濫用防止ルールでヘッジされている理由である。

## 2. 連結納税 → グループ通算 — 2022 年改正が変えたもの

| 特徴 | 連結納税制度 (pre-2022) | グループ通算制度 (from 2022) |
|---|---|---|
| 申告単位 | **親会社が 1 つを提出**する連結申告 | **各会社が自社のものを提出**する申告 |
| 税の計算 | グループを単一の主体として計算 | 個別計算 + グループ横断調整 |
| 後の更正の効果 | グループ全体の再計算 | ほとんどの場合、影響を受けた会社に **遮断 (ring-fenced)** |
| 損益通算 (損益通算) | あり | **あり — 維持** (中核の便益は存続) |
| 事務負担 | 親会社に重い | 分散。電子申告が義務化 |
| スコープ | 100% グループ | 100% グループ (完全支配関係) |

改正の目的は、**損益通算 の便益を保ちつつ、単一申告連結の事務的な足かせを取り除く**ことであった。すでに 連結納税 にあったグループは、2022 年 4 月 1 日以後に開始する最初の事業年度の前にオプトアウトの届出を提出しない限り、一般に自動的に グループ通算 へ移行した。

## 3. グループ法人税制 vs グループ通算制度 — 2 つのレイヤー、混同するな

これはレジームの最も一般的な混同の点であり、[[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|株式分配 regime]] のエントリがスピンオフ側で解決する 株式分配-対-パーシャルスピンオフ の混同を反映している:

| | グループ法人税制 (group corp-tax rules) | グループ通算制度 (group tax-sharing) |
|---|---|---|
| 選択 | **強制 / 自動** | **選択制** (オプトイン) |
| スコープ | すべての 100% グループ | 選択した 100% グループ |
| 中核の内容 | 税繰延のグループ内資産移転 (譲渡損益の繰延)。グループメンバー間の **100% 配当益金不算入**。寄附 / 受贈の調整 | グループを横断する利益と損失の **損益通算**。一定のクレジットのグループレベルでの使用 |
| メンタルモデル | 好むと好まざるとにかかわらず*あらゆる*完全子会社グループに適用される**ベースライン**ルール | グループの課税所得をネットする**アドオン** |

つまり、100% グループは**常に** グループ法人税制 のベースラインを得 (例: 利益を発動させることなくメンバー間で資産を移動できる)、利益を損失に対してネットするために グループ通算 を**追加的に選択しうる**。両者は共存する。

## 4. 損益通算 がどう機能するか (概要)

グループ通算 の下では、ある事業年度において:

- 各会社が自社の所得または損失を計算する。
- 赤字メンバーの**損失**が、黒字メンバーの**所得に対し**、それぞれの所得に比例して (按分) 配賦され、グループの総課税ベースを引き下げる。
- ある会社での後の更正は、ほとんどの場合、他社の計算を撹乱することから **遮断 (blocked)** される — 旧来の単一申告モデルに対する主要な事務的改善。

その便益は実際のキャッシュである: [[corporate-strategy/japan-holding-company-conversion|HoldCo structure]] における黒字の親会社は、投資子会社のスタートアップ損失を吸収でき、構築段階の間グループ税を繰延または軽減しうる — これがレジームが再編戦略とこれほど密接に相互作用する理由の 1 つである。

## 5. 再編との相互作用 — このドメインが関心を持つ場所

グループ通算 は単なる会計上の選択ではない。それは再編が税務効率的である**かどうか、いつ**かを形作る:

- **持株会社化** — [[corporate-strategy/japan-holding-company-conversion|持株会社化]] の後、新持株会社 + 事業子会社が グループ通算 の対象となる 100% グループを形成するため、転換の*継続的な*税務効率 (一度きりの 適格 取扱いだけでなく) はこのレジームに依存する。転換のメカニズムは [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式移転 / 株式交換]] を経由する。
- **会社分割 と繰越欠損金** — 事業が [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]] によって切り出されるとき、**欠損金濫用防止**ルール (法人税法第 57 条以下) が、繰越欠損金 が 通算 グループ内でどう使用されうるかと相互作用する。支配関係の変更が、本来使用可能な損失を制限しうる。
- **合併 と承継欠損金** — [[corporate-strategy/japan-gappei-merger-regime|qualified merger]] は対象会社の 繰越欠損金 を存続会社へ承継しうるが、再び濫用防止テストに服する。それらの損失がその後グループ全体の相殺に供されるかは、存続会社のグループの 通算 ステータスに依存する。
- **グループへの加入 / 離脱 (加入・離脱)** — 会社が 100% グループに加入または離脱するとき (例: 取得または [[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|株式分配]] によるスピンオフを通じて)、レジームには**期間按分、加入 / 離脱時の資産の時価評価、加入前損失の取扱い**に関する特定のルールがある — グループがメンバーシップの境界の周りで損失を持ち込んだり剥ぎ取ったりするのを止めるよう設計されている。

これは [[corporate-strategy/INDEX|domain index]] が指し示す「税対構造のくり返しの緊張関係」である: *法的*構造 (誰が誰を所有するか) と*税務*レジーム (グループがどうネットされるか) は一緒に設計されなければならない。

## 6. なぜそれが税務だけでなくコーポレートストラテジーに位置するのか

グループ税制は純粋なコンプライアンスのように見えるかもしれないが、それは**戦略的な構造化インプット**である:

- それは、ポートフォリオを横断して結果をネットできる 100% 所有の事業子会社の上の中立的な頂点 — [[corporate-strategy/japan-holding-company-conversion|pure-HoldCo]] モデルをグループが採用する主要な理由である。
- それは**赤字の新規ベンチャーをどこに収容するか** (その損失がグループ利益を相殺するよう 通算 グループ内に、対 その外に) に影響する。
- それは持株会社の**配当フロー設計**と相互作用する (グループ法人税制 の下での 100% グループ内配当益金不算入が、キャッシュを親会社へ非課税で上昇させ続ける)。
- 規制される金融グループについて、それは [[finance/japan-listed-financial-groups-investable-universe|the listed-financial-groups universe]] や [[JapanFG/INDEX|JapanFG INDEX]] の法人を組織する持株会社監督に重なる。

## 7. 反論と留意点

- **選択はトグルではなくコミットメントである。** グループ通算 はグループについてオプトインされ、軽々しく逆転されない。その判断は各メンバーの損失ポジションと予測と相互作用する。
- **遮断 は「ほとんどの場合」であり、絶対ではない。** 一定のグループレベルの項目や濫用防止調整は依然として会社を横断して及びうる。リングフェンスは大きな改善であって、壁ではない。
- **2 つのレジーム、1 つのグループ。** 強制の グループ法人税制 ベースラインと選択制の グループ通算 アドオンを混同してはならない — 両者は異なる問い (グループ内移転 / 配当 対 損益のネット) に答える。
- **濫用防止ルールが損失の移動を支配する。** 損失は再編を通じて自由には流れない。分割や合併を制約するのと同じ第 57 条系列の制限が、通算 グループが最終的に使用できるものを制約する。[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|splits]] と [[corporate-strategy/japan-gappei-merger-regime|mergers]] を参照。
- **ルールは毎年進化する。** グループ税制の詳細は相次ぐ 税制改正 によって調整される。具体的事項に依拠する前に NTA のガイダンスに対して現行の取扱いを確認すること。

## 関連項目

- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]]
- [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転 regime]]
- [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]
- [[corporate-strategy/japan-gappei-merger-regime|合併 merger regime]]
- [[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|株式分配 spin-off regime]]
- [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]]
- [[finance/japan-listed-financial-groups-investable-universe|Japan listed-financial-groups investable universe]]
- [[finance/INDEX|finance INDEX]]
- [[JapanFG/INDEX|JapanFG INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- 国税庁「グループ通算制度」: https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/hojin/group_tsusan/index.htm
- 国税庁 法人税法基本通達 1-4-5 (組織再編成): https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- METI 経済法制 ポリシーポータル: https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/
- 法人税法 (Corporation Tax Act, Act No. 34 of 1965 — グループ通算 / 組織再編成 provisions): https://laws.e-gov.go.jp/document?lawid=340AC0000000034
- FSA 英語ポータル (グループ / 持株会社監督のコンテキスト): https://www.fsa.go.jp/en/

---

> [!info] 校核状态
> confidence: **likely**。2022 年 4 月 1 日以後に開始する事業年度についての グループ通算制度 による 連結納税制度 の置換、損益通算 の維持、更正の 遮断 を伴う会社別申告への移行、完全支配関係 のスコープ、および強制の グループ法人税制 ベースラインとの区別は、NTA の資料に対して確認済みである。詳細なメカニズム (損失配賦、加入 / 離脱の時価評価、濫用防止の相互作用) は技術的であり毎年の 税制改正 によって改訂される — NTA のガイダンスと専門家の助言に従い、現行の取扱いを確認すること。
