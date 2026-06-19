---
source: policy-finance/dbj-mandate-deep-dive
source_hash: c6636c8450b30084
lang: ja
status: machine
fidelity: ok
title: "DBJ マンデート深掘り — 特定投資業務 ¥3兆円の枠組み、GX/DX 基準、危機対応ファシリティ、対 JFC/JBIC/NEXI"
translated_at: 2026-06-19T06:09:18.080Z
---

# DBJ マンデート深掘り — 特定投資業務 ¥3兆円の枠組み、GX/DX 基準、危機対応ファシリティ、対 JFC/JBIC/NEXI

## Wiki ルート

本エントリは [[policy-finance/INDEX|policy-finance index]] の下に、[[financial-regulators/dbj|株式会社日本政策投資銀行 (DBJ)]] に関する **運用メカニクスの深掘り**として位置する。[[financial-regulators/dbj|JapanFG/dbj]] の元の DBJ プロファイルは法人構造・歴史・高レベルの事業ライン図に焦点を当てているが、本エントリは特定投資業務の枠組みの **運用メカニクス**、**リスクマネー／メザニンファイナンスのルール**、**GX/DX 投資基準**、**民間との共同投資パターン**、**危機対応融資ファシリティ**、そして **[[financial-regulators/jfc|JFC]] / [[financial-regulators/jbic|JBIC]] / [[policy-finance/nexi|NEXI]] との KPI／マンデート比較**へとさらに一段深く踏み込む。クロス機関のオーバーレイには [[policy-finance/japan-policy-finance-institution-mandate-matrix|Japan policy finance institution mandate matrix]]、JBIC の運用メカニクスとの並行には [[policy-finance/jbic-overseas-investment-underwriting-process|JBIC overseas investment underwriting process]]、JFC の運用メカニクスとの並行には [[policy-finance/jfc-sme-division-operating-model|JFC SME division operating model]]、全体システムのコンテキストには [[policy-finance/japan-policy-finance-system|Japan policy finance system]] と併せて読むこと。

## TL;DR

DBJ は、**民間補完原則**（「民間部門を補完する」）の政策マンデートの下、**長期シニア債務・メザニン・エクイティ・アドバイザリーを一つのバランスシート上で同時に組み合わせる唯一の日本の政策金融機関**であり、これは 株式会社日本政策投資銀行法（2007）に明記されている。決定的な運用層は **特定投資業務（Special Investment Operations, SIO）** の枠組み — 2015 に当初 ~¥1.5兆円の上限で設立され、累次の法的延長を通じて累計の授権投資能力が ~¥3兆円まで引き上げられ、**通常の商業銀行が値付けできない**プロジェクトに対し、エクイティ・優先株式・劣後ローン・メザニンの形で **リスクマネー（リスクマネー）**を供給する明示的な権限を持つ。SIO の枠組みは、**民間部門の共同投資を触媒する**というルール（特定の倍率目標 — 通常、公的資金 1 円あたり 1倍以上の民間資金を動員することを目指す）と、**期限付きの権限**（各延長は sunset 条項を伴う個別の立法行為）の下で運用される。現代のマンデートは 4 つの実質的な縦軸に支配されている：**GX（グリーントランスフォーメーション）** — 再エネ、水素、アンモニア、洋上風力、CCS、GX 経済移行債との整合；**DX（デジタルトランスフォーメーション）** — データセンター、半導体サプライチェーン、AI インフラ；**事業再生** — DIP／スポンサー型再生、メザニン；そして **危機対応業務** — 株式会社日本政策投資銀行法 + 危機対応業務指定に基づく指定危機対応融資。[[financial-regulators/jfc|JFC]]（中小企業／個人／農林水産の政策金融）、[[financial-regulators/jbic|JBIC]]（海外投資／輸出信用／資源安全保障）、[[policy-finance/nexi|NEXI]]（貿易・投資保険）と比較して、DBJ は、長期年限にわたり同一プロジェクトでシニア・メザニン・エクイティを組み合わせられる能力ゆえに、**最も柔軟な単一の日本の政策金融バランスシート**を保持する。

## 1. 株式会社 + 政策金融機関 のハイブリッド構造

| 項目 | 詳細 |
|---|---|
| Statutory basis | 株式会社日本政策投資銀行法（平成 19 年法律第 85 号）|
| Shareholder | 財務大臣 100%（完全民営化計画は震災 + コロナ + GX で延期継続中）|
| Supervisory | 財務省（主管 + 株主）；金融庁（業務監督）|
| Capital base | 株式 + 内部留保 + FILP 借入 + 政府保証付き債券 + 一般債券 + 外貨建調達 |
| 業務範囲 | 長期融資 / メザニン / エクイティ / アドバイザリー / 危機対応 / 特定投資業務 |
| Mandate | 民間金融機関が単独では取り得ないリスクを補完（民間補完原則）|
| Account structure | 一般勘定（基幹業務）+ 特定投資業務勘定（2015〜; ring-fenced）+ 危機対応業務関連 |

**株式会社 + 政策金融機関** のハイブリッドは構造的に稀である。DBJ は 政策金融 マンデートを持つ 100% 国有 株式会社 であり — [[policy-finance/jogmec|JOGMEC]] のような純粋な独立行政法人でも、2008 前の 日本政策投資銀行 のような完全国有化された主体でもない。このハイブリッドは、政策金融マンデートを保持しつつ、DBJ に法人形態の柔軟性（エクイティ発行、劣後債発行、市場レートの債務調達）へのアクセスを与える。

## 2. 特定投資業務（Special Investment Operations）の枠組み

### 2.1 法的構造と授権枠

| Item | Detail |
|---|---|
| 制度発足 | 2015 — 株式会社日本政策投資銀行法 改正により導入 |
| 初期授権枠 | 1.5 兆円程度（政府出資 + 政府保証債券 + 自己資本の組合せ）|
| 累計授権枠（改正後）| おおむね 3 兆円程度（複数回の法改正で段階的に拡大・延長）|
| 期限 | 各延長ごとに sunset 設定; 延長は法改正案件 |
| 勘定区分 | 特定投資業務勘定（ring-fenced; 一般勘定とは資金区分）|
| 投資手段 | 株式 / 優先株式 / 種類株式 / 劣後ローン / メザニンローン / 転換社債 / 一部senior loan |
| 政策目的 | リスクマネー供給; 民間投資の呼び水; 産業再編・GX・DX・地域活性化等 |

特定投資業務（SIO）は、現代の DBJ の **旗艦的な裁量資本権限**である。法的構造 — ring-fenced 勘定、期限付き授権、定義された投資手段メニュー — は、DBJ が標準的な政策金融の与信規律の下では **一般勘定 が値付けできない、よりハイリスクな投資**を取ることを可能にするよう設計されている。各延長は個別の立法行為であり、それが累計授権額の定期的な政治的レビューを強いる。

### 2.2 リスクマネー（risk money）の operating 定義

「リスクマネー」は DBJ 文脈で以下のいずれかを意味する：

1. **エクイティ / 優先株式 / 種類株式** — 完全な株主リスクを取る
2. **劣後ローン / 劣後社債** — 倒産時に senior に劣後する位置の負債
3. **メザニンローン** — senior と equity の間に位置するハイブリッド（転換オプション、ワラント、参加型条項を含む）
4. **転換社債型新株予約権付社債** — debt + 上昇 upside の equity option
5. **長期 senior loan で commercial banks が組成しない長期年限のもの** — 20 年超のテナーで commercial banks が単独で組成しないケース

この 4 階層の定義は意図的に広い。SIO 権限は、DBJ がシニア債務に固定されるのではなく、各プロジェクトに最も適した手段を選ぶことを可能にする。

### 2.3 投資選別基準

SIO 投資は以下の基準で原則的に選別される：

| 基準 | 詳細 |
|---|---|
| **民間補完性** | 民間金融機関 / 民間 PE / 民間 VC が単独では取り得ないリスクであること |
| **政策合致性** | GX / DX / 産業再編 / 地域活性化 / 危機対応 / 経済安全保障 などの政策テーマに合致すること |
| **収益性** | 経済的合理性があり、長期で投資収益を回収可能であること（補助金ではない）|
| **co-investment 呼び水効果** | 民間共同投資家を引き出す効果があること（典型的にはマッチング 1x 以上）|
| **環境・社会配慮** | DBJ Environmental Rating / DBJ Sustainability Linked Loan 等の枠組み準拠 |
| **規模感** | 1 件あたり数億円から数百億円規模が中心レンジ |
| **期間** | 通常 5〜20 年; 一部 30 年超 |

**co-investment 呼び水効果** の判定は運用上最も重要である。SIO 投資は単独ではなく、**どれだけ民間部門の共同投資を触媒するか**で評価される。暗黙の運用目標は 1:1 以上であり — SIO 投資の公的資金 1 円ごとに、同一プロジェクトへ少なくとも 1 円の民間資金を引き込むべきである。これは、SIO が **純粋な補助金ではなく**、**純粋な商業投資でもない**理由 — それは **触媒的リスク資本**である — の構造的正当化である。

### 2.4 投資先 vertical の現代分布

近年 SIO 投資先は以下の重点分野に集中：

1. **GX（Green Transformation）** — 再エネ（洋上風力、太陽光、地熱）、水素・アンモニア、CCS、グリーン水素、SAF（持続可能航空燃料）、EV / 電池サプライチェーン
2. **DX（Digital Transformation）** — データセンター、半導体製造・素材、半導体製造装置、量子コンピューティング、AI インフラ
3. **事業再生 / M&A** — DIP ファイナンス、スポンサー再生、メザニン買収ファイナンス、TOB ファイナンス
4. **地域活性化 / インフラ** — 地域 PFI、コンセッション、地方インフラ
5. **食料・農林水産** — 一部、政策テーマに合致する範囲で
6. **宇宙 / 防衛技術 / 経済安全保障** — 2023 以降ウェイト増

vertical のミックスは各中期計画サイクルで入れ替わり、内閣 / 経産省 / 経済産業省 / GX 実行会議の優先順位を反映する。

## 3. 民間補完原則（private-sector-complementing principle）

### 3.1 原則の condified 表現

民間補完原則は DBJ 法第 4 条等で明示され、運用上は次のように reduced されている：

1. **民間金融機関が単独で取り得ない長期 / 大型 / 高リスクの分野に DBJ が補完的に出る**
2. **DBJ の関与で民間金融機関の参加を呼び込む**
3. **同一案件で DBJ と民間が共同で組成する場合、DBJ の役割は anchor lender / cornerstone investor / mezzanine sponsor 等の補完的位置**

### 3.2 民間との competitive 緊張

民間補完原則は理念的に明確だが、実務では以下の緊張がある：

- **コスト優位**: DBJ は政府全額出資 + 政府保証付き調達ができるため funding cost が低く、市場でガチンコ競合になる場合がある
- **テナー優位**: 20 年超の長期テナーは民間銀行が単独では組成しないため、DBJ の独自領域
- **エクイティ領域**: SIO 経由のエクイティは民間 PE と機能重複する場合がある
- **危機対応時の crowd-out**: 危機対応融資は政府指定の指定金融機関として動くため、平時とは異なる役割

実務的な crowd-out 回避策:
- 1 件あたりの出資 / 融資シェアを民間と協調する範囲に抑える
- pricing は民間並みか若干上乗せ
- 議決権 / control rights は民間 anchor に譲る

### 3.3 民間補完原則 vs commercial banks (megabanks)

DBJ と [[megabanks/mufg|MUFG]] / [[megabanks/smfg|SMFG]] / [[megabanks/mizuho-fg|Mizuho FG]] の関係:

| Dimension | DBJ | Megabanks |
|---|---|---|
| 主な競合領域 | 20 年超超長期 / 大型エクイティ / 事業再生 / 危機対応 | 全領域（DBJ の領域含む）|
| 主な協調領域 | プロジェクトファイナンス / シンジケートローン / 事業再生 / インフラ | 同左 |
| 役割分担 | anchor / cornerstone / mezzanine | 短中期 senior / クラブ参加 |
| Funding cost | 低（政府全額出資 + 政府保証）| 預金 + 市場調達 |
| 規制 | 株式会社日本政策投資銀行法 + 金融庁監督 | 銀行法 + 金融庁監督 |

DBJ と megabanks の連携は構造的に補完的 — DBJ が anchor / mezzanine / 長期、megabanks が senior / 短中期 / シンジケート参加 が標準的なジオメトリ。

## 4. GX 投資 — 戦略テーマ

### 4.1 GX 経済移行債との連動

2023 年制定の GX 推進法に基づき、政府は 20 兆円超の **GX 経済移行債** を発行する方針。DBJ は GX 投資の主要な policy-finance institution として位置づけられ、以下のように関与：

- **GX 経済移行債で調達された政府資金 → GX 関連プロジェクトに DBJ 経由で disburse** されるルートの一部を担う
- **DBJ 独自の GX 投資（SIO 経由）→ GX 経済移行債と並行**して risk money 供給
- **DBJ Green Bond 発行** で市場から GX 資金を調達 → GX 関連プロジェクトに供与

### 4.2 GX 投資の運用基準

SIO + 一般勘定で GX 投資を行う際の基準：

- **DBJ Environmental Rating** — 環境配慮型企業の格付け（S / A / B / C）; 1996 年導入の老舗フレームワーク
- **DBJ Sustainability Linked Loan** — KPI 連動型融資; SBT, RE100, TCFD 等の枠組みと整合
- **GX 経済移行債整合性** — 政府の GX 経済移行債との整合性を運用上担保
- **TCFD 開示** — 投融資先の TCFD 整合性を評価
- **石炭火力からのフェードアウト** — 既存石炭火力への新規 financing は厳格に制限

### 4.3 GX 重点 sectors

- **洋上風力** — 浮体式 / 着床式; プロジェクトファイナンス + エクイティ
- **太陽光** — メガソーラー; プロジェクトファイナンス
- **水素・アンモニア** — 製造・輸送・受入インフラ; 早期 risk money
- **CCS / CCUS** — 早期 risk money
- **EV / 電池サプライチェーン** — 上流（原料）から下流（リサイクル）まで
- **SAF（持続可能航空燃料）** — early-stage commercial scale-up

## 5. DX 投資 — 戦略テーマ

### 5.1 DX 重点 sectors

- **データセンター** — クラウドハイパースケーラー需要 + 国内クラウド主権要請への対応
- **半導体製造** — Rapidus / TSMC 熊本 / SUMCO 等の周辺サプライチェーン
- **半導体製造装置** — 東京エレクトロン、SCREEN、アドバンテスト等の関連投資
- **半導体素材** — JSR、信越化学等の関連投資
- **AI インフラ** — GPU クラスター、AI スーパーコンピューター
- **量子コンピューティング** — 国産量子計算機関連
- **宇宙関連 DX** — 衛星通信、地球観測

### 5.2 DX 投資の運用基準

- **経済安全保障推進法整合性** — 特定重要物資の指定対象との整合
- **国内立地優先** — Japan-domiciled production capacity を優先
- **friend-shoring 配慮** — 海外案件の場合、同志国向け
- **co-investment** — JIC / 経産省 ファンド との協調

## 6. 危機対応業務 — designated crisis-response facility

### 6.1 制度構造

| Item | Detail |
|---|---|
| 法的根拠 | 株式会社日本政策投資銀行法 + 危機対応円滑化法 |
| 指定金融機関 | DBJ + [[financial-regulators/jfc|JFC]]（商工中金も含む期間あり）|
| 発動要件 | 政府が「危機事象」を指定（大規模災害 / 金融危機 / パンデミック 等）|
| 主な融資手段 | ツーステップ・ローン（政府指定金融機関 → 民間金融機関 → 最終貸付先）+ 直接融資 |
| 担保 / 信用補完 | 政府による損失補償 + 利子補給 等 |

### 6.2 発動の実績

- **2008-2009 リーマンショック** — 大企業向け危機対応融資
- **2011 東日本大震災** — 被災企業向け復興融資
- **2016 熊本地震** — 局地的危機対応
- **2020-2022 新型コロナ** — 大型企業向け緊急融資; 100 兆円規模の政府支援パッケージの一部
- **将来の災害 / 金融危機 / 地政学的危機** — 制度が常設

危機対応業務は DBJ の 「政策金融機関としての存在意義」 の最も明確な発現形態であり、平時には休眠状態だが指定発動時には極めて大きな fiscal impact を持つ。

## 7. 事業再生 / メザニン業務

### 7.1 主要産品

- **DIP ファイナンス** — 民事再生 / 会社更生手続中の融資
- **スポンサー型再生 mezzanine** — スポンサー（PE / 戦略投資家）との協調で再生案件に出資 / メザニン
- **TOB / MBO ファイナンス** — メザニン + senior の組合せ
- **再生 SPC への出資** — DBJ 子会社の DBJ アセットマネジメントを経由するファンド経由 等

### 7.2 運用上の特徴

- 民間 PE と協調する案件が中心
- DBJ 単独で control を取る案件は限定的
- mezzanine pricing は民間並み、senior pricing は民間より若干 tight な水準
- 再生案件特有の長期 commitment が可能（5-10 年超）

## 8. 公私官民協調ファンドの platform 化

DBJ 子会社 / 共同設立ファンドの構造：

```
DBJ 株式会社
  ├── DBJ アセットマネジメント（PE / 不動産 / インフラファンド運営）
  │     ├── 国内 PE ファンド
  │     ├── 国内インフラ / 再エネファンド
  │     └── 共同投資ファンド（民間 PE / 機関投資家との協調）
  ├── DBJ ベンチャーズ（ベンチャー投資）
  ├── 地域共同ファンド（地方銀行と協調; 北海道、東北、九州 等の地域ファンド）
  ├── 産業特化ファンド（海運、航空、化学、半導体 等）
  └── 共同投資 vehicle（民間 PE / JIC / 経産省ファンドとの共同）
```

これらは DBJ 直接投資ではなく、ファンド経由で民間資金との混合（blending）を実施する仕組み。**DBJ 自己資本 → ファンド GP / LP → 投資先** の流れで risk money を間接的に供給する。

## 9. KPI と DBJ 独自のフレームワーク

### 9.1 主要 KPI

| KPI 領域 | 詳細 |
|---|---|
| **投資 / 融資残高** | 期末投融資残高（一般勘定 + 特定投資業務勘定）|
| **特定投資業務 新規実行額** | 各年度の新規 SIO 実行額 |
| **民間共同投資マッチング倍率** | 1 円の SIO 投資が引き出す民間共同投資円数（目標 1x 以上）|
| **GX 投融資残高** | GX 関連投融資の累計残高 |
| **DX 投融資残高** | DX 関連投融資の累計残高 |
| **危機対応融資残高** | 危機指定期間中の実行残高 |
| **DBJ Environmental Rating 利用件数** | 環境格付け融資の累計 |
| **収益性** | ROE / 経常利益 / 純利益 — 政策金融機関ながら経済的合理性を維持 |

### 9.2 ESG / Sustainability フレームワーク

DBJ 独自の ESG フレームワーク：

- **DBJ Environmental Rating**（1996〜）— 環境配慮型企業を S/A/B/C で格付; 格付に応じて融資条件を優遇
- **DBJ BCM Rating**（2006〜）— 事業継続管理体制を評価; 災害レジリエンス重視
- **DBJ Health Management Rating**（2012〜）— 健康経営評価
- **DBJ Sustainability Linked Loan** — KPI 連動型融資
- **DBJ Green Bond** — Green Bond 発行で GX 投資を市場資金で fund

これらは政策金融機関ながら独自の評価フレームワークを民間に普及させる例として国際的にも引用される。

## 10. 政策金融機関 4 行 KPI / mandate 比較

| Dimension | DBJ | [[financial-regulators/jfc\|JFC]] | [[financial-regulators/jbic\|JBIC]] | [[policy-finance/nexi\|NEXI]] |
|---|---|---|---|---|
| 主対象 | 中堅・大企業 / インフラ / GX / DX | 中小企業 / 個人 / 農林水産 / 教育 | 海外投資 / 輸出 / 資源 / 経済安全保障 | 貿易・投資保険 |
| 主要 instrument | 長期融資 + メザニン + エクイティ + アドバイザリー | 中小企業融資 + 教育ローン + 危機対応 | 海外投資ローン + 輸出買入 + 出資 + 保証 | 貿易保険 + 投資保険 |
| Special Operations | 特定投資業務勘定（¥3兆円 枠）| (separate sub-divisions) | 特別業務勘定（2016〜）| (separate insurance lines) |
| Co-investment 倍率 | 民間 1x 以上目標 | n/a（融資中心）| 民間 1x 以上（大型 OIL）| (保険なのでマッチング指標は別) |
| 危機対応指定 | Yes | Yes（中小事業者向け）| (危機対応は別フレーム) | n/a |
| 海外案件 | 限定的（国内中心）| n/a | 全面的 | 全面的 |
| Funding 基盤 | FILP + 政府保証債 + 一般債 + 外貨建 | FILP + 政府保証債 | FILP + 政府保証債 + 外貨建（USD primary）| 政府勘定 + 保険料 |
| 監督 | 財務省 + 金融庁 | 財務省 + 主管省庁（経産省 / 農水省 / 文科省）| 財務省 + METI + MOFA | METI |
| 経済安全保障の対象 | 国内 GX / DX / 半導体 / 防衛サプライチェーン | (限定的) | 海外 GX / 重要鉱物 / 半導体 / friend-shoring | 経済安全保障関連保険 |

このマトリクスは DBJ を 4 機関の中で **最も instrument-flexible** として示している — シニア・メザニン・エクイティを一つのバランスシートで組み合わせるのは DBJ のみ。JBIC は Special Operations 経由でエクイティ能力を持つが、海外に焦点を当てている。JFC は中小企業 / 個人借入人向けのシニア債務に焦点を当てている。NEXI は直接の資金ではなく保険を提供する。

包括的なマルチ機関マトリクスは [[policy-finance/japan-policy-finance-institution-mandate-matrix|Japan policy finance institution mandate matrix]] を参照。

## 11. 民営化シナリオの構造的停滞

DBJ 法の sunset 規定では当初 2008 年株式会社化から数年後の完全民営化を想定していたが、以下のショックで延期が繰り返されている：

| 延期事由 | 年 | 結果 |
|---|---|---|
| 東日本大震災 | 2011 | 完全民営化 法改正で延期 |
| 危機対応業務継続 | 2012-2015 | sunset 延長 |
| 特定投資業務導入 | 2015 | 民営化議論 一旦凍結 |
| 新型コロナ | 2020 | 危機対応 + 民営化 さらに延期 |
| GX 投融資強化 | 2023〜 | 民営化議論 事実上凍結 |

実務的には、**GX 経済移行債 + 危機対応 + 経済安全保障対応**が DBJ の存在意義を強化し続けるため、完全民営化は近い将来には起こらないと見るのが現実的。

## 12. Counterpoints

- **「民間補完原則」 vs 実態**: 政府保証付き低コスト調達ができるため、市場の長期インフラ / 大型エクイティ領域で**民間に対し優位**になる場面がある。Crowd-out 回避は理念的明確だが運用上は曖昧な部分がある。
- **「co-investment 1x マッチング」 目標**: 案件ごとに測れない場合もあり、cumulative での計算になりがち。Vintage / sector-mix に偏りが出る場合の評価方法が未確立。
- **「特定投資業務 3 兆円」 規模感**: JIC（産業革新投資機構）/ JIC-VGI / 産業競争力強化法ファンド等と機能重複; 整理は政府事業レビューで periodic に議論される。
- **「完全民営化の凍結」 vs 政策金融機能拡大**: 政府全額出資のまま大規模 risk capital を出す構造の正当性は GX / 経済安全保障文脈で defendable だが、長期 sustainability は議論の余地。
- **GX 投資の climate alignment**: アンモニア混焼 / LNG transition fuel への DBJ 投融資は気候 NGO から批判される; パリ協定整合性の議論は continuous。
- **DBJ ベンチャーズの位置付け**: JIC-VGI / 各 CVC との競合 vs 補完バランスは未整理。
- **危機対応指定の発動頻度**: コロナ等で頻繁な発動が「常設的危機対応モード」に近づき、政策金融機関の規律という観点で議論を呼ぶ。

## 13. Open questions

- 特定投資業務の次フェーズ（2027〜）の規模・期限・対象範囲は?
- GX 経済移行債（20 兆円）実施における DBJ の具体的役割確定形は?
- 完全民営化の現実的タイミングは?（GX 投融資が一段落するまで凍結継続か）
- 半導体・データセンター・防衛サプライチェーン政策投資における DBJ / JIC（産業革新投資機構）/ 経産省ファンドの役割分担はどう整理されるか?
- DBJ Environmental Rating の海外展開・国際基準化はどこまで進むか?
- 地方銀行協調ファンドの cumulative AUM はどの程度まで成長するか?
- 危機対応業務指定の発動条件は今後どう設計されるか?（パンデミック以外の crisis category）
- AZEC（Asia Zero Emission Community）関連の海外案件で DBJ と JBIC の役割分担はどうなるか?

## Related

- [[policy-finance/INDEX|policy-finance index]]
- [[policy-finance/japan-policy-finance-system|Japan policy finance system]]
- [[policy-finance/japan-policy-finance-institution-mandate-matrix|Japan policy finance institution mandate matrix]]
- [[policy-finance/jbic-overseas-investment-underwriting-process|JBIC overseas investment underwriting process]]
- [[policy-finance/nexi-export-credit-insurance-products|NEXI export credit insurance products]]
- [[policy-finance/jfc-sme-division-operating-model|JFC SME division operating model]]
- [[policy-finance/jogmec-equity-and-offtake-mechanics|JOGMEC equity and offtake mechanics]]
- [[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack diagram]]
- [[financial-regulators/dbj|DBJ (株式会社日本政策投資銀行) — institutional profile]]
- [[financial-regulators/jfc|JFC]]
- [[financial-regulators/jbic|JBIC]]
- [[megabanks/mufg|MUFG]]
- [[megabanks/smfg|SMFG]]
- [[megabanks/mizuho-fg|Mizuho FG]]

## Sources

- DBJ 公式サイト 会社概要・principle・disclosure: https://www.dbj.jp/, https://www.dbj.jp/co/info/principle/, https://www.dbj.jp/co/info/disclo/
- DBJ 特定投資業務 紹介ページ: https://www.dbj.jp/service/finance/special_investment/
- DBJ 危機対応業務 紹介ページ: https://www.dbj.jp/service/finance/crisis_response/
- 株式会社日本政策投資銀行法（平成 19 年法律第 85 号）— 関連公開資料
- 金融庁 銀行業 / 政策金融機関監督関連: https://www.fsa.go.jp/
- 財務省 FILP（財政投融資）関連: https://www.mof.go.jp/policy/filp/index.htm
- GX 推進法（令和 5 年法律第 32 号）関連公開資料
- 株式会社日本政策投資銀行 ディスクロージャー誌 各年度版（公開資料）
- 経産省 GX 実行会議公開資料
- 政府 行政事業レビュー DBJ 関連項目（公開）

---

> [!info] 校核状态
> confidence: **likely**（2026-05-25）。特定投資業務の規模感（3 兆円程度の累計授権枠）と GX / DX / 危機対応 / 事業再生 / 民間補完原則は DBJ 公式公開資料および株式会社日本政策投資銀行法・GX 推進法等の公開法令ベース。具体的な KPI 数値・最新セグメント別残高は最新 DBJ ディスクロージャー誌を要参照。完全民営化の延期経緯は法改正履歴ベース。
