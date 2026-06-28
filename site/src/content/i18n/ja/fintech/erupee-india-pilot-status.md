---
source: fintech/erupee-india-pilot-status
source_hash: cc40eabaa2d26659
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "インド eRupee パイロット状況 2026  — リテール + ホールセール二重トラック、UPI 相互運用、プログラマブルマネー用途"
translated_at: 2026-06-26T08:32:15.201Z
---

# インド eRupee パイロット状況 2026  — リテール + ホールセール二重トラック、UPI 相互運用、プログラマブルマネー用途

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] に位置づけられ、2026 パイロット拡張段階におけるインド eRupee（Digital Rupee、e₹）の国別深掘りである。4カ国比較は [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]、インドのデジタル決済スタック地政学は [[fintech/india-anti-dollar-dpi-alliance|印度反美元 DPI 联盟]]、アーキテクチャ文脈は [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]] と併読する。アーキテクチャ上のピアは [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]、クロスボーダー・ホールセール文脈は [[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] と [[fintech/bis-project-agora-overview|BIS Project Agorá]] を参照。

> [!info] 要約
> 2026 年半ばまでに、eRupee は RBI 監督下で **2つの並行パイロット・トラック**として稼働している。**ホールセール CBDC（2022-11から稼働）** はプライマリーディーラーが流通市場 G-sec 決済に使い、**リテール CBDC（2022-12から稼働）** は 5M+ エンドユーザーが 20+ 都市で 17 参加銀行を通じて使う。インドを特徴づける構造要素は、(a) 2023, 以降の QR ブリッジによる UPI 相互運用、(b) 農業・福祉給付向けプログラマブルマネー・パイロット、(c) 低接続地域向けオフライン CBDC 技術テストの3点。支配的な制約は技術ではなく、**UPI 自体の規模**（NPCI ベースで月間 22B+ 件）であり、消費者にはウォレットを eRupee に切り替える体感メリットが乏しい。

## プログラム・アーキテクチャ

```
                       RBI Digital Rupee Programme
                                  │
              ┌───────────────────┴────────────────────┐
              ▼                                        ▼
         e₹-Wholesale                              e₹-Retail
        (CBDC-W, 2022-11)                       (CBDC-R, 2022-12)
              │                                        │
   参加: 約9 行                         参加: 17 行
   用途: 流通市場 G-sec                   用途: P2P、P2M、政府移転
        settlement (live)                       (pilot)
              │                                        │
   決済: T+0 原子的                       ウォレット: 銀行アプリ
   on RBI ledger                          Tokens: ₹0.50, ₹1, ₹2, ₹5,
                                          ₹10, ₹20, ₹50, ₹100, ₹200,
                                          ₹500, ₹2000 denominations
              │                                        │
   相互運用ブリッジ: まだなし              UPI QR 相互運用: 2023
   から稼働（任意の UPI QR → eRupee 支払い）
   （越境 MoU）
   under discussion)
```

2つのトラックは意図的に5週間ずらして開始された。ホールセール側は、低参加者数・高価値の環境（約 9 のプライマリーディーラー銀行による G-sec 決済）で中央銀行台帳の配管を検証し、その後リテール側が同じアーキテクチャを人口規模・低価値の環境へ拡張した。2026 までに両トラックは技術的に安定したが、採用深度は大きく異なる。二層型の選択（RBI → 参加銀行 → ユーザー）により、eRupee は中国 e-CNY と EU の仲介型デジタルユーロと同じアーキテクチャ・パラダイムに置かれる。パラダイム横断のトレードオフは [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]] を参照。

## マトリクス A · トラック別状況（最新公開情報）

| トラック | プログラム名 | 開始 | カバレッジ（2026-05） | アクティブ参加者 |
|---|---|---|---|---|
| ホールセール | e₹-W（CBDC-W） | 2022-11 | 参加プライマリーディーラー向けに全インド。流通市場 G-sec 決済が稼働し、2023-2024 以降はコールマネー / レポの拡張用途をパイロット中 | 約 9 行: SBI、BoB、ICICI、IDFC First、HDFC、Yes、Kotak、IndusInd、HSBC India |
| リテール | e₹-R（CBDC-R） | 2022-12 | 20+ 都市、4 のリテール・パイロット段階にまたがる。参加銀行側では全国的な銀行カバレッジ | SBI、ICICI、HDFC、IDFC First、Yes、Kotak、Canara、Union Bank、BoB、BoI、IndusInd、Federal、HSBC、Bandhan、Karnataka Bank、IDBI を含む 17 行、さらに決済アプリ統合 |
| プログラマブル | e₹-R ウォレット経由の使途指定 / 条件付き支払い | 2023+ | パイロット範囲: 農業補助金、福祉現金給付、政府サービス手数料 | 選定スキーム上の e₹-R 参加者の一部 |
| オフライン | オフライン CBDC NFC / 近接技術テスト | 2024+ | パイロットのみ。別個に開始された公開商品ではない | RBI 主導、銀行パートナー参加 |
| クロスボーダー | 選定相手先との MoU 段階（公開議論では UAE、シンガポールに言及） | 2026-05 時点で稼働なし | なし | 運用中なし |

eRupee は、**ホールセールとリテールを同時に開始した唯一の主要経済圏 CBDC プログラム**である。RBI がこの設計を選んだのは、インドの決済レール文脈が特殊だからである。UPI はすでに NPCI 経由で人口規模のリテール取引を処理しているため、e₹-R は UPI の機能を単に複製するのではなく、オフライン、プログラマビリティ、中央銀行マネー性といった限界的メリットを示す必要がある。この点でインドはピアと異なる。中国のリテール出来高主導姿勢は [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]]、EU の反ディスインターミディエーション優先姿勢は [[fintech/e-euro-retail-rollout|digital euro retail rollout]] を参照。

## マトリクス B · 採用指標（最新公開情報）

| 指標 | 最新公開数値 | 出所 |
|---|---|---|
| e₹-R リテール利用者（累計） | **5M+、2024 報告時点**（RBI 年次開示 + 銀行報告） | RBI Annual Report 2023-24、2024-25 開示 |
| e₹-R 累計リテール取引額 | **累計 INR 10B+** 程度（参加銀行合算。RBI が月次で公式集計しているわけではない） | 銀行開示 + RBI プレス資料 |
| e₹-W 日次取引 | 銀行間 G-sec 決済レグは日次稼働。詳細な日次出来高は非公表 | ホールセール CBDC パイロットに関する RBI プレスリリース |
| 対象都市（リテール） | 4つのリテール・パイロット段階を通じ 20+（Mumbai、Delhi、Bengaluru、Bhubaneswar など） | RBI プレスリリース（2022-12 開始 + 段階拡大） |
| 参加銀行（リテール） | 17 | RBI プレスリリース |
| 参加銀行（ホールセール） | 約 9 プライマリーディーラー | RBI プレスリリース |
| UPI QR 相互運用 | 2023 から稼働 | RBI + NPCI 共同発表 |
| オフライン CBDC テスト | 複数のパイロット（2024-2025）。大規模展開なし | RBI プレス資料 |

「5M+」のリテール利用者数は最も引用される数値だが、これは **累計ウォレット数**であり、月間アクティブ利用者数ではない。対照的に UPI 自体は **月間 22B+ 件**を 2025-2026 の NPCI ランレートで処理しており、4桁の差がある。この差が、2025 の間に RBI のリテール eRupee のペースが明らかに鈍化し、プログラムの戦略重点が eRupee の差別化価値がより明確な **ホールセール + プログラマブル**用途へ移った理由を説明する。同じ価値提案の力学は、より広い DPI 輸出ストーリーも形作る。UPI、MOSIP、ARC が国外で見えるインド決済スタックを構成する一方、eRupee は静かに構築される中央銀行マネーの補完物である点は [[fintech/india-anti-dollar-dpi-alliance|印度反美元 DPI 联盟]] を参照。

## マトリクス C · アーキテクチャと設計選択

| 設計選択 | 内容 | RBI の理由 |
|---|---|---|
| 二層型 | RBI → 参加銀行 → ユーザー | 商業銀行の役割、預金基盤、既存流通チャネルを維持 |
| トークンベース（額面別デジタルトークン） | e₹-R は通常の通貨額面（₹0.50 から ₹2000）で発行 | 「通貨らしい」感覚を再現し、現金のメンタルモデルと整合 |
| QR ブリッジ経由の UPI 相互運用性 | eRupee ウォレットは任意の UPI QR に支払え、UPI 利用者は同じ QR 経由で eRupee を受け取れる | UPI の配布網を活用し、並行する加盟店受入ネットワークをゼロから作らない |
| プログラマブルマネー・パイロット | 選定用途（農業投入補助、福祉給付）向けのスマートコントラクト型使途指定 | UPI と差別化し、政府の現金給付政策に接続 |
| オフライン CBDC テスト | アクティブなインターネットなしの NFC / 近接決済 | 農村インドのラストマイル接続性に対応 |
| リテールウォレット無利息 | e₹-R 残高への利息はゼロ | 預金流出を防ぎ、グローバル CBDC コンセンサスと整合 |
| 公表された厳格な保有限度なし | アプリ設定による日次取引上限 | 用途調整の柔軟性。明示的上限は成文化されていない |
| ホールセール RBI 台帳 | G-sec の T+0 アトミック決済 | 流通市場での業務効率 |

最も特徴的なアーキテクチャ判断は、**2023からの QR ブリッジによる UPI 相互運用**である。既存の即時決済レールと同程度に統合された主要経済圏 CBDC プログラムは他にない。トレードオフは、相互運用が eRupee を使う必要性の体感も下げることにある。UPI が機能するなら、なぜ切り替えるのか、という問題である。

## マトリクス D · ユースケースとパイロット区分

| ユースケース | 状況（2026-05） | 注記 |
|---|---|---|
| P2P リテール決済 | 稼働中。20+ 都市で 17 参加銀行経由で利用可能 | 最も一般的なパイロット用途 |
| P2M リテール（加盟店） | 稼働中。小規模加盟店パイロットが多数。UPI QR 相互運用が受入を支援 | 加盟店採用は不均一 |
| 政府現金給付（福祉 / 補助金） | パイロット。プログラマブルマネー・レール | UPI との差別化に向けた戦略優先事項 |
| 農業補助金（例: 肥料投入補助） | パイロット。プログラマブルな使途指定 | 特定の投入財用途を対象 |
| 銀行間 G-sec 決済（ホールセール） | 2022-11から稼働。定常化 | ホールセールのアンカー用途 |
| コールマネー / レポ決済 | 2023-2024 にパイロット拡張 | ホールセール用途の拡張 |
| クロスボーダー CBDC 決済 | 稼働なし。MoU 議論のみ | 将来状態 |
| オフライン決済（低接続） | パイロットのみのテスト | 大規模化なし |
| CBDC 間連携（例: 他国 CBDC とのブリッジ） | 稼働なし。mBridge 議論のオブザーバー | 将来状態 |
| 非 CBDC 相手先とのクロスボーダー | 政策議論上のみ（UAE、Singapore など） | まだ運用されていない |

戦略的重点は、2024 から 2026 にかけて、**「リテール eRupee は UPI と現金に次ぐ第3の主要決済レールになる」**から、**「eRupee は UPI の補完であり、中央銀行マネー性とプログラマビリティが重要な用途に焦点を置く」**へ明確に移った。2026-Q1 の RBI によるホールセール / リテール相互運用テストは、リテール出来高押し上げではなく、統一 CBDC スタックの技術的下地である。

## UPI 優位との比較

| 指標 | UPI（2025-2026） | eRupee リテール（2024-2026） |
|---|---|---|
| 月間取引件数 | **22B+**（NPCI ランレート） | パイロット出来高。大規模な公開集計なし |
| 月間取引額 | NPCI ベースで **₹29.5 trillion+** | INR 10B+、2022-2026 全体の累計 |
| 都市 / カバレッジ | 全インド（UAE / Singapore / France などへの国際展開あり） | 20+ パイロット都市 |
| ウォレット基盤 | 350M+ アクティブユーザー | 5M+ 累計ウォレット |
| 加盟店受入 | ユニバーサル（60M+ QR） | パイロット加盟店群 |
| クロスボーダー | 稼働中: UAE、Singapore、Bhutan、Nepal、Maldives、Mauritius、France、Sri Lanka | 稼働なし |
| 基礎マネー | VPA 経由の商業銀行マネー | 中央銀行マネー |
| プログラマビリティ | ネイティブではなし | パイロットでプログラマブル |

UPI の支配的地位は、eRupee のリテール採用が遅い最大の理由である。消費者の視点では、eRupee は中央銀行マネー性とプログラマビリティを提供するが、典型的な利用者は P2P や P2M 取引でそのどちらにも大きな価値を見いださない。UPI は普遍性と摩擦ゼロの受入を提供し、利用者はそれを強く評価する。RBI にとっての戦略的問いは、**プログラマブルマネーによる福祉給付 + オフライン CBDC + 将来のクロスボーダー利用が意味のある採用牽引力を生み出せるか**、それとも eRupee は戦略的に重要だが出来高面では周辺的な補完物にとどまるかである。

より広いインドのデジタルスタック（UPI + MOSIP + ARC + JioCoin）のストーリーは [[fintech/india-anti-dollar-dpi-alliance|印度反美元 DPI 联盟]] を参照。eRupee は同じ広範なスタックに収まるが、レール代替ではなく中央銀行マネーのレールである。

## クロスボーダーと国際連携

| チャネル | 状況 | 注記 |
|---|---|---|
| RBI ↔ UAE 中央銀行 MoU（協議） | 協議段階。稼働中の CBDC 決済はない | UPI ↔ AANI は別途稼働 |
| RBI ↔ MAS Singapore（協議） | 協議段階 | UPI ↔ PayNow は別途稼働 |
| RBI ↔ mBridge オブザーバー | 協議段階 | 2026-05 時点で正式参加なし |
| RBI ↔ BIS Project Agorá | インドは Project Agorá 参加国ではない（Agorá は 7 の G10 中央銀行プロジェクト）。RBI は BIS のより広い CBDC 作業部会に関与 | [[fintech/bis-project-agora-overview|BIS Project Agorá]] を参照 |
| RBI ↔ Bhutan / Nepal クロスボーダー | UPI 統合が稼働中。CBDC 固有チャネルはない | UPI が処理 |
| RBI ↔ BIS CBDC 作業部会 | 積極参加 | RBI は BIS 加盟中央銀行であり、CBDC は BIS の議題に含まれる |

インドのクロスボーダー CBDC 姿勢は、中国の mBridge アンカー役とは異なり、新たな多国間ブロックを主導することではなく、案件ごとに二国間で関与することである。UPI の越境フットプリントが自然な拡張チャネルであり、CBDC 固有の越境アレンジは遅れている。

## 起源と展開

```
2017-2020      RBI 内部研究 + IDRBT の CBDC 作業部会
2021-01        RBI 総裁が CBDC パイロットへのコミットメントを公表
2022           Finance Act 2022  が RBI Act を改正し CBDC 発行を可能化
2022-10        RBI が CBDC に関する Concept Note を公表
2022-11        e₹-W（ホールセール）パイロット開始（9 行、流通市場 G-sec 決済）
2022-12        e₹-R（リテール）パイロット開始（まず 4 都市、4 行）
2023           リテール・パイロット拡大 + UPI QR 相互運用ブリッジ稼働
2023-2024      プログラマブルマネー・パイロット開始（農業補助、福祉）
2024           オフライン CBDC 技術テスト
2024-2025      リテール利用者基盤が累計 5M+ に到達。出来高成長は鈍化
2025           ホールセール CBDC の用途をコールマネー / レポへ拡張
2026-Q1        RBI がホールセール ↔ リテール相互運用テストを実施
2026-Q2+      クロスボーダー MoU 議論（UAE、Singapore）が継続
```

**パターン**: インドの eRupee プログラムは、RBI の制度的管理下で着実かつ慎重なペースで進む。財務省からリテールを加速する大規模な圧力はなく、公開ナラティブは UPI の圧倒的成功との対比で形成される。ホールセール側の方が明確な成功例であり、業務上は定常化し、UPI と競合せず実際の決済ニーズに応えている。

## 関連項目

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/india-anti-dollar-dpi-alliance|印度反美元 DPI 联盟]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC 跨境结算桥]]
- [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agorá]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge strategic comparison]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/bis-project-guardian-overview|MAS Project Guardian]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]]
- [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]]
- [[fintech/e-euro-retail-rollout|digital euro retail rollout]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]

## 出典

- Reserve Bank of India — 中央銀行デジタル通貨に関するコンセプトノート（2022年10月）: https://www.rbi.org.in/Scripts/PublicationReportDetails.aspx?ID=1218

- RBI プレスリリース: ホールセール CBDC パイロット開始（2022-11-01）およびリテール CBDC パイロット開始（2022-12-01）: https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx
- RBI 年次報告書 2023-24 および 2024-25  — 決済システム章
- RBI Bulletin の Digital Rupee 進捗記事（2023-2025）
- NPCI — UPI Product Statistics: https://www.npci.org.in/what-we-do/upi/product-statistics
- BIS Innovation Hub — CBDC トピックページ: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Working Paper No. 1116  — 「次世代通貨システム — ブループリント」
- BIS Project mBridge MVP レポートと公開資料
- BIS Project Agorá 公開資料: https://www.bis.org/about/bisih/topics/cbdc/agora.htm
