---
source: fintech/boe-digital-pound-consultation
source_hash: 1e1dc5dbeebe0932
lang: ja
status: machine
fidelity: ok
title: "イングランド銀行のデジタルポンド協議 — 2023-2026 設計段階、民間ウォレット、ECB との比較"
translated_at: 2026-06-02T13:21:55.061Z
---
# イングランド銀行のデジタルポンド協議 — 2023-2026 設計段階、民間ウォレット、ECB との比較

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下にあり、英国のリテール CBDC トラックである **イングランド銀行（BoE）と HM Treasury（HMT）のデジタルポンド**協議および設計段階を法域別に深掘りする。類似した設計選択を持つ EU 並行プログラムは [[fintech/e-euro-retail-rollout|ECB digital euro retail rollout]]、法域横断の位置づけは [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]、稼働中の小規模経済圏リテール CBDC の比較事例は [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]] / [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]] / [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]、3 パラダイム分類は [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC three active paradigms]] とあわせて読む。英国の民間レール競争環境は [[fintech/hkma-stablecoin-licensing-overview|HKMA stablecoin licensing]]（比較制度）と [[fintech/mica-overview|MiCA overview]]（EU 規制隣接性）を参照。

> [!info] 要約
> BoE と HMT は **2023-02-07** に **digital pound** の共同協議文書を公表し、**2023-06** まで公開協議を行い、**2024-01-25** に協議回答を公表した。結論は「デジタルポンドを導入するかを決めるには時期尚早である。そのため設計段階に進む」というものだった。設計段階は 2024-2026 を通じて進み、現在は複数年の準備作業の **Phase 2** にある。2026-05 時点で**開始決定は行われていない**。BoE は設計段階を準備作業であり、発行へのコミットメントではないと明確に位置づけている。BoE / HMT が選好する設計は、ECB の digital euro と非常によく似ている。すなわち、**二層仲介型**、**民間ウォレット**（BoE が消費者へ直接配布しないことを明示）、**1 人当たり £10,000-£20,000 の保有限度額**（提案段階、未確定）、**無利息**、そしてプライバシー面では digital euro を上回る**強いプライバシー保護**である。ECB との構造比較は、同じ建築ファミリー、より高い提案保有限度額、英国側のより明示的に慎重な政治姿勢を示す最も明瞭な比較事例である。

## プログラム構造

```
                BoE + HMT Digital Pound プログラム
                              │
       ┌──────────────────────┴──────────────────────┐
       ▼                                              ▼
   協議段階                          設計段階
   (2023-02-07 → 2023-06)                      (2024-01 → 2026+)
       │                                              │
   公開協議                         詳細設計、
   paper + 50,000+                             ベンダー選定
   回答を受領                          (private-sector wallet
                                                提供者）、PoC 作業、
                                                ステークホルダー・エンゲージメント
       │                                              │
   回答公表                          （未到来）決定段階
   2024-01-25 with                             導入するかの決定は
   結論は「設計段階は                    立法と政治的
   発行コミットメントではない」                    合意を条件とする

                                                       │
                                                       ▼
                                                 実発行（未指定。
                                                 現実的な最速は
                                                 2020年代後半）
```

## マトリクス A · 法令、規制当局、段階ステータス

| 項目 | 詳細 |
|---|---|
| 主管当局 | **イングランド銀行（BoE）** + **HM Treasury（HMT）** — 共同プログラム |
| 法的根拠 | 既存の BoE 関連法。発行前には新たな一次立法が**必要**とされる。2024 協議回答で明記 |
| 協議文書 | 「The digital pound: a new form of money for households and businesses?」（2023-02-07） |
| 協議期間 | 2023-02-07 → 2023-06-30 |
| 協議回答 | 2024-01-25 — BoE / HMT 共同回答 |
| **決定状況** | **開始決定なし**。設計段階が継続中 |
| 設計段階 1 | 2024-01 onward |
| 設計段階 2 | 2025-2026+ (ongoing) |
| 現実的な最速発行 | 2020年代後半（2027-2028 が下限、より遅い可能性が高い） |
| ホールセール CBDC | 別枠で扱われる。BoE は DLT ベースのホールセール決済実験に参加するが、digital pound のリテール・トラックには含まれない |
| クロスボーダー CBDC | リテール水準での計画はない。英国はホールセール側で [[fintech/bis-project-agora-overview|BIS Project Agorá]] に参加 |

BoE / HMT は 2024 回答で、**設計段階に入ることは開始決定ではない**と明確にしている。発行には、(i) 新たな一次立法、(ii) BoE / HMT による別個の開始決定、(iii) 現在よりかなり高い政治・政策上の合意が必要となる。2024 回答は、慎重さの構造において ECB digital euro Preparation Phase の位置づけと似ている。

## マトリクス B · 設計選択 — EU digital euro アーキテクチャを明示的に反映

| 設計選択 | 英国 digital pound（提案） | EU digital euro（提案） | 注記 |
|---|---|---|---|
| **階層モデル** | 民間 PSP 経由の二層仲介型 | 監督対象 PSP 経由の二層仲介型 | 同じアーキテクチャ・ファミリー |
| **BoE / ECB の直接配布** | **なし** — BoE は消費者に直接配布しないと明示 | **なし** — ECB も直接配布しないと明示 | 同じ反ディスインターミディエーション姿勢 |
| **ウォレット提供者** | **民間 PIP（Payment Interface Providers）** + ESIP（External Service Interface Providers） | 監督対象 PSP（銀行、EMI、決済機関） | 英国は独自の PIP/ESIP 用語を使うが、機能的には同等 |
| **1 人当たり保有限度額** | **£10,000-£20,000  の提案レンジ**（協議文書、未確定） | **€3,000-€4,000  の提案レンジ** | 英国案の上限は EU より**かなり高い** |
| **付利** | なし | なし | 同じ |
| **プログラマビリティ** | 限定的。BoE は国家によるプログラマビリティ強制に明確に慎重 | 限定的。ECB も同様に慎重 | 同じ |
| **プライバシー姿勢** | **強い** — BoE は個別取引データを見ず保持もしないと明示。BoE からは仮名化、PIP が KYC を保持 | 強い（オンラインは監督型、オフラインは現金類似） | 英国はより厳格な BoE ブラインドネス・モデルを提案 |
| **オンライン + オフライン・モード** | 両方を想定。協議ではオンラインが主 | 両方 | 同じ |
| **法定通貨としての地位** | 想定されるが、一次立法が必要 | 規則案の下で想定 | 同じ |
| **リバース・ウォーターフォール** | EU の仕組みとして明示はしない。英国案は上限超過分を「連携銀行口座」へルーティング | 連携商業銀行口座へのリバース・ウォーターフォール | 機能的に類似 |
| **条件付き支払い／プログラマブルマネー** | BoE は明確に慎重。初期設計の機能にはしない | 同じ慎重姿勢 | 同じ |

この反映は意図的である。BoE と ECB は技術レベル（BIS および中央銀行間対話）で広く連携しており、英国プログラムは EU の設計選択を明示的に参照している。主要な違いは**提案保有限度額レンジ**であり、£10K-£20K は €3K-€4K よりかなり高い。これは商業銀行預金基盤への懸念と消費者効用の前提が異なることを一部反映している。

## マトリクス C · 2024 協議回答 — 実質的な所見

2024-01-25の BoE / HMT 共同回答は、digital pound に関する最重要の公開文書である。50,000+ 件の回答から得られた主な所見は次のとおり。

1. **プライバシーに対する公衆の懸念**が回答全体を支配した。個別懸念として最も多く引用されたのは、**個人取引を国家が見られること**だった。
2. **プログラマビリティへの懸念** — 多くの回答者は、「プログラマブルマネー」が国家による有効期限、支出制限、社会信用型の統制に使われることを恐れた。
3. **商業銀行のディスインターミディエーションへの懸念** — UK Finance など銀行業界の回答者は、高い保有限度額がもたらすシステミックリスク上の含意を強調した。
4. **現金利用可能性への懸念** — 多くの回答者は物理的現金を重視し、digital pound が現金の衰退を加速させることを恐れた。
5. **限定的な消費者需要** — 多くの消費者回答者は、既存の決済レール（Faster Payments、非接触カード、モバイルウォレット、口座間決済）がまだ満たしていないユースケースを示せなかった。

BoE / HMT の回答は次を約束した。

- **強いプライバシー保護** — BoE は個別取引データを見ず保持もしない。本人情報は規制対象 PIP が保持し、BoE は仮名化ウォレット識別子のみを持つ。
- **国家によるプログラマビリティ強制なし** — プログラマブル機能は利用者／PIP 起点に限られ、中央銀行起点ではない。
- **現金は残る** — digital pound は物理的現金と共存し、代替ではないと明示的にコミット。
- **ECB より高い保有限度額** — 提案された £10K-£20K は、英国固有の銀行資金調達分析と、より高い消費者効用の見方を反映する。
- **開始前に一次立法が必要** — 慎重姿勢を制度上正式に組み込む。

これは、比較可能なリテール CBDC 協議の中で最も詳細に文書化された公開回答である。2024 回答文書は現在、BIS／IMF／学術文献で広く引用されている。

## マトリクス D · 民間ウォレット・モデル（PIP + ESIP）

英国モデルは 2 つの異なる民間セクターの役割を使う。

```
   イングランド銀行（digital pound の発行者）
              │
              ▼
   PIP（Payment Interface Provider）— 規制対象ウォレット運営者
              │
              ▼
   PIP ウォレット経由の消費者 + 加盟店インタラクション
              │
              ▼
   任意の ESIP（External Service Interface Provider）— 付加価値サービス
   （例: 経費管理、事業会計、他アプリとの連携）
```

- **PIP（Payment Interface Provider）** — 主ウォレット提供者。消費者向けで、KYC を保持し、BoE の中央台帳と統合する。
- **ESIP（External Service Interface Provider）** — 二次サービス層。PIP 管理ウォレットと統合する任意レイヤー。

これが重要な理由:

- **民間ウォレットに限定** — BoE は消費者向けアプリを運営しない。これは、同じく PSP に依存しつつ ECB 監督下の配布チャネルを想定する EU digital euro 設計より制約的である。
- **商業銀行の役割を維持** — 英国銀行は PIP 適格となるが、ノンバンク fintech 企業も対象となる。設計は商業銀行による配布独占を避けている。
- **ESIP のイノベーション余地** — digital pound レール上で第三者イノベーションを可能にすることが明示的な政策目標。
- **プライバシー・バイ・デザイン** — BoE は仮名化ウォレット ID を見る。PIP が本人情報を保持し、ESIP は利用者が許可した情報のみを見る。

PIP/ESIP という用語と構造は、公開 CBDC 用語における英国の革新である。機能的には ECB の「監督対象 PSP」モデルに近いが、消費者向けレイヤー（PIP）と付加価値サービス（ESIP）をより明確に分離している。

## マトリクス E · 保有限度額をめぐる議論 — £10,000-£20,000  と €3,000-€4,000



英国の提案保有限度額レンジは EU より**かなり高い**。理由は次のとおり。

| 論点 | 詳細 |
|---|---|
| **より高い効用上限** | £10K-£20K のウォレットは英国消費者のカード支出を実質的に代替し得る。€3K-€4K は週次の食料品支出に近い |
| **1 人当たり GDP 調整後の上限が高い** | 英国の所得／支出ベースラインはより高い上限を支える |
| **銀行利用者比率が高い人口** | 銀行利用者比率が高いほど、消費者が商業銀行の主流預金残高を維持するとの見方が強まる |
| **英国固有のディスインターミディエーション分析** | BoE / HMT 分析は、£10K-£20K の上限での英国銀行資金調達への影響は管理可能と示唆する |
| **開始前に上限が下がる可能性** | 銀行業界の回答者はより低い上限を主張しており、最終上限は政治的に交渉される |
| **上限が可変となる可能性** | 一部回答は、初期開始時は低い上限とし、段階的に引き上げる案を示した |

この上限は最も議論の多い単一の設計パラメータであり、最終的な数値は commercial-bank deposits および民間ステーブルコインに対する digital pound の競争上の位置を大きく左右する。

## マトリクス F · 比較対象プログラムとの比較

| 項目 | 英国 digital pound | [[fintech/e-euro-retail-rollout\|EU digital euro]] | スウェーデン e-krona | [[fintech/jamaica-jam-dex-cbdc\|Jamaica JAM-DEX]] | 中国 e-CNY |
|---|---|---|---|---|---|
| 主管当局 | BoE + HMT | ECB | Riksbank | 銀行 of Jamaica | PBoC |
| 段階（2026-05） | 設計段階（協議後） | Preparation Phase（延長） | 事実上停止 | 2022 から稼働 | 稼働中、大規模展開 |
| リテール稼働 | なし | なし | なし | あり | あり |
| 立法状況 | 一次立法が必要、未提出 | EU 共同決定の Regulation が pending | 議会マンデートは未請求 | BoJ Act 改正 2022  が成立 | PBoC Law 2020 改正 |
| 提案保有限度額 | £10K-£20K | €3K-€4K | n/a（停止中） | n/a（小規模経済圏） | オペレーター階層別上限 |
| プライバシー姿勢 | 最強（PIP 経由で BoE ブラインド） | 強い（オンライン／オフライン・モード） | n/a | KYC 階層モデル | 制御可能な匿名性 |
| 最速発行 | 2020年代後半 | 最速 2027-2028  | n/a | すでに稼働 | すでに稼働 |
| 状態の位置づけ | 設計段階はコミットメントではないと明示 | Preparation Phase はコミットメントではないと明示 | 事実上停止 | 運用中 | 大規模展開中 |

英国と EU のプログラムは明らかに**同じファミリー**に属する。アーキテクチャ選択、慎重姿勢、立法依存、開始までの複数年の時間軸が同じである。構造的な違いは、英国には（Brexit 後で EU 共同決定制約がないため）独自の立法タイムラインを選ぶ自由がより大きい一方、その自由を迅速な開始ではなく**より慎重な**順序づけに使っている点である。

## 起源と展開

```
2014-2020    BoE 初期 CBDC 研究、複数の討議文書・作業文書
2020-03      BoE 討議文書「中央銀行デジタル通貨 — 機会、課題、設計」
2021-04      財務大臣が英国リテール CBDC に関する BoE / HMT 共同 Taskforce を発表（メディア上の「Britcoin」タグ）
2022         CBDC エンゲージメント・フォーラムと CBDC 技術フォーラムを開催
2023-02-07   BoE + HMT 協議文書「The digital pound: a new form of money for households and businesses?」公表
2023-06-30   協議期間が終了し、50,000件超の回答を受領
2024-01-25   BoE + HMT 回答公表 — 設計段階を確認、開始決定なし
2024         設計段階 1 開始。民間部門 PIP / ESIP の枠組みを具体化
2025         BoE 総裁の公開発言が「設計であり開始ではない」という位置づけを強調。政治的慎重論が高まる
2025-2026    設計段階 2 継続。ベンダー評価と技術評価が進行中
2026-05      発行決定なし。設計段階が継続し、一次立法は未提出
2026-2027    （想定）立法日程と政治判断を条件に、意思決定段階へ移行
2020年代後半   （現実的な最速時期）複数の関門判断を条件にリテール発行が稼働
```

**パターン**: 英国は開始を約束せず、準備を段階的に進めている。政治・政策姿勢は ECB より**慎重**である。その一因は、英国の消費者向け決済レール（Faster Payments、非接触決済、Open Banking）がすでに世界でも効率的なため、リテール CBDC の限界的な便益を示しにくいことにある。

## 英国の民間決済レールとの比較

デジタルポンドが参入する競争環境は次のとおり。

- **Faster Payments Service（FPS）** — 2008, から稼働する英国の即時決済レール。広く普及し、リテール手数料はほぼゼロ。
- **非接触カード + Apple Pay / Google Pay** — 採用はすでに飽和水準。
- **Open Banking（PSD2由来）** — 英国は Open Banking 実装の世界的先行国で、口座間決済レールが稼働している。
- **GBP 民間ステーブルコイン** — 限定的。FCA 制度は EMT に関して EU MiCA より制約が強い。
- **CHAPS / RTGS** — ホールセール決済。BoE 既存の大口決済レールは RTGS Renewal プログラムで並行して近代化中。

含意は、英国の消費者にはリテール CBDC が自然に解決するような**決済上の痛点が EU 消費者より少ない**ということだ。したがって、決済レールが未発達な法域（Pix 以前のブラジル、UPI 以前のインド、アフリカ一般）に比べ、消費者需要に基づく導入論は弱い。BoE の慎重姿勢はこの事情を反映しており、デジタルポンドが解くべき明白な問題は見えにくい。

ホールセール側は異なる。BoE は次の分野に積極的に関与している。

- **[[fintech/bis-project-agora-overview|BIS Project Agorá]]** — 英国は BoE を通じて参加しており、関与する G10 中央銀行 7 行の一つである。
- **RTGS Renewal プログラム** — 将来の同期決済と DLT 統合を可能にするため、BoE の RTGS インフラを近代化している。
- **ホールセール決済実験** — トークン化された中央銀行マネーをホールセール用途に提供すべきかについて、BoE が明示的に検討している。

ホールセール版デジタルポンドの検討はリテール版より**先行**しており、仮にリテール版が開始されるとしても、それに先立って価値を生む可能性がある。

## 関連項目

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/e-euro-retail-rollout|ECB digital euro retail rollout]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture overview]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC three active paradigms]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|Four core trade-offs in CBDC architecture selection]]
- [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]
- [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]
- [[fintech/jamaica-jam-dex-cbdc|Jamaica JAM-DEX]]
- [[fintech/mica-overview|MiCA overview]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA stablecoin licensing]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC bridge]]
- [[fintech/central-banking-function-unbundling|central-banking function unbundling]]

## 出典

- イングランド銀行 — digital pound landing: https://www.bankofengland.co.uk/the-digital-pound
- BoE + HMT — "The digital pound: a new form of money for households and businesses?" 協議文書 (2023-02-07): https://www.bankofengland.co.uk/-/media/boe/files/paper/2023/the-digital-pound-consultation-paper.pdf
- HM Treasury — digital pound 協議ページ: https://www.gov.uk/government/consultations/the-digital-pound
- BoE + HMT — Response to the consultation (2024-01-25): https://www.bankofengland.co.uk/news/2024/january/response-to-the-digital-pound-consultation-paper
- BoE 討議文書「中央銀行デジタル通貨 — 機会、課題、設計」（2020-03）
- 欧州中央銀行 — Digital euro project page (比較対象): https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html
- BIS Working Paper No. 1116 — "The next-generation monetary system — a blueprint" (2024)
- BIS Innovation Hub — Project Agorá 公開資料 (UK / BoE participation)
- BoE RTGS Renewal プログラム public materials (並行するホールセール側の近代化)
