---
source: corporate-strategy/japan-gappei-merger-regime
source_hash: 7e883cd762e70707
lang: ja
model: claude-opus-4-8
status: machine
fidelity: ok
title: "合併 (Japan corporate merger) — 吸収合併 / 新設合併 のメカニズム、適格合併 の税務上の取扱い、および三角合併のバリアント"
translated_at: 2026-06-05T00:00:00.000Z
---

# 合併 (Japan corporate merger) — 吸収合併 / 新設合併 のメカニズム、適格合併 の税務上の取扱い、および三角合併のバリアント

## ウィキ上の位置づけ

このエントリは [[corporate-strategy/INDEX|corporate-strategy INDEX]] の下に位置し、ディールファイナンスのオーバーレイのために [[finance/INDEX|finance INDEX]] へとルーティングする。合併は分離側の [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 (company split)]] に対する**結合側**の対応物である。両者は同じ 適格 / 非適格 の税務軸の上で動く。対象会社を解散させずに 100% 支配へ至る株式側のルートについては [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転 regime]] とともに、そしてあらゆる相当規模の合併が通過しなければならない独占禁止のクリアランスについては [[finance/jftc-merger-control-process|the JFTC merger-control process]] とともに読むこと。

## TL;DR

**合併 (gappei, merger)** は、**2 社以上の会社を 1 つの法人へと融合させる**日本の会社法上のメカニズムである。[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]] (事業を切り出す) や [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換]] (両社を親子会社のスタックの中で存続させる) とは異なり、合併は少なくとも 1 社を**解散させる**。その資産、負債、契約、従業員は**包括承継 (包括承継)** によって存続会社へ承継され、消滅会社は別途の清算を経ずに存在を消滅させる。

2 つの構造軸がこのレジームを規定する — すべての日本の 組織再編成 と同じ二重構造である:

1. **形態軸** — **既存の**会社が存続し他社を吸収する **吸収合併 (absorption merger)** か、**まったく新しい**会社が設立され*すべての*結合会社がその中へ消滅する **新設合併 (consolidation merger)** か。
2. **税務軸** — **適格合併 (qualified, 税制適格・簿価引継ぎ)** か **非適格合併 (non-qualified, 課税・時価評価)** か。

法定のレイヤー:

- **会社法第 748〜756 条** が合併手続を規律する。**第 749 条** が 吸収合併契約 (absorption-merger agreement) の内容を、**第 753 条** が 新設合併契約 を定める。**第 754 条第 1 項** が 新設合併 の効力発生日を存続会社の設立登記時に固定する。
- **法人税法第 2 条第 12 号の 8、第 62 条、第 62 条の 2** が 適格 / 非適格 の区別と属性の引継ぎを規律する。
- いずれの形態も**取得会社 / 結合会社の株主特別決議** (2/3 のしきい値) に加え、**債権者保護 (債権者保護手続)** および**反対株主の評価 (反対株主の株式買取請求)** の手続を要する。

## 1. 吸収合併 vs 新設合併 — 2 つの形態

| | 吸収合併 (absorption) | 新設合併 (consolidation) |
|---|---|---|
| 存続法人 | **既存の**会社 (存続会社) | **新たに設立される**会社 (新設会社) |
| 消滅法人 | 吸収される会社 (消滅会社) | **すべての**結合会社が消滅 |
| 対象会社株主への対価 | 存続会社の株式、現金、またはその他の財産 | 新会社の株式 |
| ライセンス / 上場 | 存続会社は自社のものを保持。吸収された会社のものは失効しうる | すべての元のものが失効。新会社は再取得 / 再上場しなければならない |
| 効力発生日 | 合併契約で定める日 | 新会社の設立登記の日 (第 754 条第 1 項) |
| 会社法の条文 | 749, 750, 783〜802 | 753, 754, 804〜816 |

直観的には: **吸収合併は 1 社を立たせたまま他社をその中に畳み込む。新設合併は全員を取り壊し、その瓦礫の上に単一の新会社を建てる。** 実務上は **吸収合併が支配的**である。なぜなら 新設合併 は新法人に対し、前身が保有していたすべての事業ライセンス、許認可、証券取引所上場を再取得させるためであり — めったに支払う価値のない事務的ペナルティである。新設合併 は主に、いずれの側も「吸収された」と見られたくない「対等合併」の体裁のために留保されている。

## 2. 包括承継 (包括承継) — なぜ合併は「クリーン」なのか

合併はすべてを**法律の作用により、単一のパッケージとして**承継する。資産ごとの権利移転は存在せず、決定的に、**個々の相手方や従業員の同意は不要**である:

- **契約**は存続会社へ自動的に承継される (契約自体に含まれるチェンジ・オブ・コントロール条項に服する)。
- **雇用契約**は自動的に承継される — そして [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]] とは異なり、合併は 労働契約承継法 の協議機構すら発動させない。なぜなら切り出された一部ではなく*会社全体*が移るからである。
- **債務と負債**は全額承継される — これがまさに**債権者保護手続**が必須である理由である (債権者は元の債務者を失う)。

この包括承継こそが、合併を 事業譲渡 (business transfer) — 各契約を個別に譲渡し各従業員を個別に同意させなければならない — と区別する特徴である。[[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|the 会社分割 regime]] の対比表は合併にいっそう強く当てはまる。

## 3. 税務軸 — 適格合併 vs 非適格合併

適格合併 の問いは、精神において [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割]] のテストと同一である。すなわち合併は**税制適格・簿価引継ぎ**の取扱いを得るのか、それとも**時価評価**となるのか。

### 適格合併 のテストシナリオ

1. **100% グループ (完全支配関係)** — 完全子会社グループ内の合併: 最も軽いテストセット。完全支配関係の継続が本質的に十分である。
2. **>50% グループ (支配関係)** — 過半数支配グループ内の合併: **従業員引継ぎ (≈80%)** と**事業継続**のテストを加える。
3. **共同事業 (共同事業要件)** — 無関係な当事者間の合併: 完全な一式を加える — **事業関連性** (business relatedness)、**事業規模 OR 経営参画** (comparable scale OR specified-officer participation)、**従業者引継ぎ** (employee retention)、**事業継続** (business continuation)、および対価株式に対する**継続保有 (continued-holding)** の要件。

いずれのシナリオでも同じ断層線が当てはまる: **株式対価は 適格 を維持する。現金対価は一般にそれを破る** — [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転]] の株式側レジーム全体にくり返し現れるルール。

### 帰結

| | 適格合併 (qualified) | 非適格合併 (non-qualified) |
|---|---|---|
| 消滅会社の資産 | **簿価**で承継。利益は認識されない | **時価**で評価。含み益が顕在化する |
| 対象会社の株主 | 株式対株式の交換に対する即時のキャピタルゲイン課税なし | キャピタルゲイン / **みなし配当 (みなし配当)** が生じうる |
| 繰越欠損金 (繰越欠損金) | 存続会社へ承継されうるが、**濫用防止の制限に服する** (法人税法第 57 条以下) | 一般に承継**されない** |
| 正味の効果 | 税務中立の結合 | 二重層の税務エクスポージャー |

**繰越欠損金の承継**は合併に固有の最も重要な税務上の特徴である: 赤字の対象会社を吸収する黒字の存続会社は、使用可能な 繰越欠損金 を引き継ぎうる — しかし**欠損金濫用防止ルール** (特定の支配関係変更および事業継続のテスト) は、まさに「欠損金の購入」を阻止するために存在し、ディストレスト案件において強く効いてくる。これは多くの救済合併の背後にある静かな税務レバーである。

## 4. 三角合併 (三角合併) のバリアント

会社法の対価柔軟化 (対価の柔軟化) 規定の 2007 年施行以降、吸収合併 は存続会社自身の株式の代わりに対価として**存続会社の*親*会社の株式**を支払うことができる。この **三角合併 (triangular merger)** は、親会社が日本の子会社を*通じて*対象会社を取得し、その一方で親会社の (しばしば海外上場の) 株式を対象会社株主へ交付することを可能にする:

- 日本の**子会社**が対象会社を吸収する法律上の存続会社である。
- 対象会社の株主は**親会社**の株式を受け取る。
- これは日本への**インバウンドのクロスボーダー株式合併**のために想定された主要なメカニズムとなった — もっとも外国親会社株式を用いるための厳格な 適格 条件が、実務上は非課税での利用を制限している。クロスボーダーのシークエンシングは [[finance/cross-border-m-a-japan|cross-border M&A Japan]] に位置する。

## 5. 再編ツールの中で合併が占める位置

日本の 組織再編成 はメニューを提供する。その中から選ぶことは、**法人に何が起きてほしいか**についての判断である:

| ツール | 法人への効果 | 標準的な用途 |
|---|---|---|
| **合併 (merger)** | 1 つの法人が存続し、残りは**解散**する | 完全な結合 / 統合。破綻会社の救済 |
| **会社分割 (split)** | **事業**が別の法人へ移り、両者が存続する | カーブアウト、スピンオフ前段階、持株会社設立 — [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 regime]] を参照 |
| **株式交換 (share exchange)** | 両者が **100% 親子会社**スタックの中で存続する | 株式で対象を完全子会社化する — [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転]] を参照 |
| **株式交付 (share delivery)** | 両者が存続。**部分的** (>50%, <100%) 支配 | 株式での友好的部分取得 — [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]] を参照 |

決定的な相違: **合併だけが法人を消滅させる。** 当事者が両社を別個の法人格として運営し続けることを望む場合には、代わりに株式側レジームに手を伸ばす。完全なオプションセットは分離側について [[corporate-strategy/spinoff-decision-tree-japan|the spinoff decision tree]] に図示されている。合併はその結合側の鏡像である。

## 6. 手続のタイムライン

合併 は標準的な会社法再編のタイムラインに従う。これがスピードの現実的な下限を定める:

| ステップ | 法定最低期間 | 注記 |
|---|---|---|
| 合併契約 / 合併計画 の取締役会承認 | — | 当日可能 |
| 本店における合併書類の事前開示 | 株主総会の 2 週間以上前 | 株主 / 債権者の閲覧のため |
| 株主総会特別決議 | — | 2/3 の特別決議しきい値 |
| 債権者保護手続 (creditor objection) | 1 か月以上の異議申述期間 | **常に必要** (債権者は元の債務者を失う) |
| 反対株主の株式買取請求 (appraisal demand window) | 効力発生日前後の法定期間 | 反対株主は「公正な価格」で買い取られ、判例上シナジーを含むと読まれる (会社法 785/797/806) |
| 効力発生日 | 契約による (吸収) / 設立登記 (新設, 第 754 条第 1 項) | — |
| 登記 (変更登記 / 設立登記) | 2 週間以内に申請 | 新設合併 は新会社も登記する |

争いのない合併は取締役会承認から通常 **2〜3 か月**で進行するが、2 つの外部ゲートがしばしばカレンダーを支配する: 届出しきい値を超える取引について [[finance/jftc-merger-control-process|the merger-control process]] の下での **JFTC 合併クリアランス**、そして [[finance/japan-large-shareholding-disclosure|large-shareholding disclosure]] や [[securities/japan-ipo-listing-disclosure-route|the IPO listing / disclosure route]] の上場規則と相互作用する上場会社の FSA / TSE 開示オーバーヘッドである。

## 7. 戦略的読み解き

- **合併は唯一の「法人消滅型」再編である。** これは、持株スタックではなく真の融合 (共有システム、単一の労働力、1 つのバランスシート) が目標である場合に正しいツールとなる。当事者が別個の法人を保全したい場合 — リスクのリングフェンス、ブランド、規制ライセンスのため — には、代わりに [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転]] または [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]] を用いる。
- **繰越欠損金の承継は隠れた賞品であり隠れた罠である。** 適格合併は 繰越欠損金 を存続会社へ承継しうるが、濫用防止テストは、ディールが欠損金ショッピングのように見える場合にそれを否認するよう設計されている。
- **吸収はほぼ常に新設に勝る。** 新設合併 の後にライセンスを再取得し再上場することは自ら招いたコストである。統合合併は主に対等合併の象徴性のために生き残っている。
- **独占禁止は形式ではなく現実のゲートである。** 大規模合併は [[finance/jftc-merger-control-process|the JFTC merger-control process]] をクリアしなければならない。集中した市場では、是正措置や禁止が現実の帰結となりうる。

## 8. 反論と留意点

- **適格 は事実依存である。** 適格テストは技術的であり、NTA はエッジケースが一般的であるため個別照会の事例を公表している。取引ごとに 適格 ステータスを確認すること。
- **三角合併の税務上の救済は狭い。** 三角合併 で外国親会社株式を用いることがクリーンな 適格 取扱いを達成することはまれである。ほとんどのインバウンド株式結合は [[finance/cross-border-m-a-japan|cross-border M&A Japan]] の構造を経由する。
- **債権者保護はスキップできない。** 負債が包括承継によって移転するため、1 か月以上の異議申述手続は必須であり、クロージングがずれ込む一般的な理由である。
- **評価訴訟リスク。** 反対株主による「公正な価格」買取請求 — 合併シナジーの一部を含むと読まれる — は争いになりうる。[[finance/japan-mbo-and-squeeze-out-process|the MBO / squeeze-out process]] のスクイーズアウト公正性の紛争と並行する。

## 関連項目

- [[corporate-strategy/INDEX|corporate-strategy INDEX]]
- [[corporate-strategy/japan-kaisha-bunkatsu-tax-regime|会社分割 tax regime]]
- [[corporate-strategy/japan-kabushiki-koukan-iten-regime|株式交換 / 株式移転 regime]]
- [[corporate-strategy/kabushiki-koufu-stock-distribution-regime|株式交付 regime]]
- [[corporate-strategy/japan-holding-company-conversion|holding-company conversion]]
- [[corporate-strategy/spinoff-decision-tree-japan|spinoff decision tree Japan]]
- [[finance/jftc-merger-control-process|JFTC merger-control process]]
- [[finance/japan-mbo-and-squeeze-out-process|Japan MBO / squeeze-out process]]
- [[finance/cross-border-m-a-japan|cross-border M&A Japan]]
- [[finance/japan-large-shareholding-disclosure|Japan large-shareholding disclosure]]
- [[securities/japan-ipo-listing-disclosure-route|Japan IPO listing / disclosure route]]
- [[finance/INDEX|finance INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- 会社法 (会社法) の 合併 (第 748〜756 条、749 / 753 / 754 を含む): https://laws.e-gov.go.jp/document?lawid=417AC0000000086
- 国税庁 法人税法基本通達 1-4-5 (組織再編成 — 適格合併ほか): https://www.nta.go.jp/law/tsutatsu/kihon/hojin/01/01_04_05.htm
- METI 経済法制 ポリシーポータル (組織再編成 / 対価柔軟化): https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/
- 公正取引委員会 (JFTC) — 合併審査 (英語): https://www.jftc.go.jp/en/
- FSA 英語ポータル (合併と相互作用する開示ルール): https://www.fsa.go.jp/en/

---

> [!info] 校核状态
> confidence: **likely**。吸収合併 / 新設合併 のメカニズム (会社法第 748〜756 条、効力発生日ルール第 754 条第 1 項)、包括承継、必須の債権者保護・評価手続、適格 / 非適格 軸、濫用防止の制限を伴う繰越欠損金の承継、および 2007 年以降の 三角合併 バリアントは確定した公知の事実である。適格テストと三角合併の税務条件は技術的かつ事実依存である — 取引ごとに 適格 ステータスと独占禁止クリアランスを確認すること。
