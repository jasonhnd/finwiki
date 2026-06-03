---
source: fintech/wholesale-settlement-network-matrix
source_hash: aaac3db83459d433
lang: ja
status: machine
fidelity: ok
title: "ホールセール決済ネットワーク比較マトリクス — Fnality / Partior / JPM Kinexys / mBridge / Agorá / Mariana"
translated_at: 2026-06-02T14:01:20.949Z
---

# ホールセール決済ネットワーク比較マトリクス — Fnality / Partior / JPM Kinexys / mBridge / Agorá / Mariana

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の下に置かれ、引用頻度の高いホールセール決済ネットワーク 6 件を横並びで比較するマトリクスである。各ネットワークの詳細ページである [[fintech/fnality-wholesale-settlement|Fnality fnPS]]、[[fintech/partior-jpm-dbs-temasek-consortium|Partior]]、[[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]]、[[fintech/mbridge-bis-multi-cbdc-overview|mBridge]]、[[fintech/bis-project-agora-overview|BIS Project Agorá]] を補完する。ガバナンス・パターンは [[fintech/multi-megabank-consortium-governance|多大银行联邦治理]]、中央銀行機能のアンバンドリング文脈は [[fintech/central-banking-function-unbundling|央行职能解体]]、ステーブルコインとの相互運用性は [[fintech/circle-usdc-stablecoin|Circle USDC]] と [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]] を参照。

> [!info] 要約
> 6 つのホールセール決済ネットワークが 2026-05  の公開データセットの軸となる。**Fnality fnPS**（BoE 免許を持つ中央銀行準備トークン、GBP は 2024-Q2,  に稼働、20+ の株主銀行）、**Partior**（4 行による Singapore MAS 免許コンソーシアム、USD/SGD/EUR/GBP/JPY が稼働、累計 $1.5T）、**JPM Kinexys**（単一銀行保有、日次 $5B、累計 $1.5T、JPM Coin + Liink + Onyx Digital Assets）、**mBridge**（BIS の multi-CBDC bridge。BIS 離脱 2025-10 後は PBoC/HKMA/BoT/CBUAE/SAMA）、**Project Agorá**（7 G10  の中央銀行 + 40 商業銀行、2024-04 以降は設計段階）、**Project Mariana**（BdF/MAS/SNB による BIS multi-CBDC FX swap PoC、2023 完了）である。マトリクス全体から見える構造は、**決済資産（中央銀行準備 vs 商業銀行預金 vs 合成）が規制上の拘束変数であること**、**コンソーシアム構成（単一銀行 vs 複数銀行 vs 中央銀行のみ）がガバナンス速度を決めること**、そして **Fnality だけがシステミック決済システムとして BoE の完全承認を受けた 100% の中央銀行準備裏付けを持つこと**である。

## 6 者比較を行う理由

単一ネットワークごとの説明（「Fnality はコンソーシアム型」「Kinexys は単一銀行型」など）は、それぞれ一部を捉える一方で、**各トークンをどの決済資産が裏付けるのか**という拘束的な構造変数を見えにくくする。 **決済資産 / コンソーシアム・メンバーシップ / 稼働中通貨 / 日次取扱高 / 規制上の地位 / 中央銀行の裏付け / ステーブルコインとの相互運用性**で 6 ネットワークを横並びにすると、規制アービトラージと競争上の位置取りが見える。 このマトリクスは、**Fnality が完全な RTGS 相当ファイナリティを持つ唯一の稼働中システムである理由**（中央銀行準備）、**Kinexys が単一銀行制約にもかかわらず取扱高で先行する理由**（複数株主調整を要しない意思決定速度）、**mBridge が BIS 離脱後も存続した理由**（運用基盤が既に動いており、BIS が担っていた政治調整問題も実質的に解けていた）も明確にする。 より広い機関向けステーブルコイン / 預金トークンの対比は [[fintech/institutional-stablecoin-deposit-token-thesis|机构 SC vs TD 论点]] を参照。

## マトリクス A · 決済資産とファイナリティ

| ネットワーク | 決済資産 | ファイナリティの種類 | 相当するもの |
|---|---|---|---|
| **[[fintech/fnality-wholesale-settlement\|Fnality fnPS]]** | **中央銀行準備**（BoE / Fed / ECB / BoJ のオムニバス口座。1:1  の準備裏付けトークン） | **RTGS 最終決済**（法的に最終） | トークン化された中央銀行準備 |
| **[[fintech/partior-jpm-dbs-temasek-consortium\|Partior]]** | **商業銀行預金**（4  の主要株主銀行のバランスシートが相互接続） | RTGS 近似（商業銀行預金ベースのアトミック PvP） | 複数銀行の商業銀行預金ネットワーク |
| **[[fintech/jpm-onyx-wholesale-network\|JPM Coin (Kinexys)]]** | **JPM 商業銀行預金**（単一銀行バランスシート） | JPM 顧客基盤内の内部 RTGS | 単一銀行のトークン化預金 |
| **[[fintech/mbridge-bis-multi-cbdc-overview\|mBridge]]** | **5+ の参加中央銀行によるホールセール CBDC**（PBoC / HKMA / BoT / CBUAE / SAMA） | **RTGS 最終決済**（アトミック PvP） | 多通貨ホールセール CBDC ブリッジ |
| **[[fintech/bis-project-agora-overview\|Project Agorá]]** | **混合型**: 共有プラットフォーム上のホールセール CBDC（M0  中央銀行マネー）+ トークン化商業銀行預金（M1） | 設計段階。ファイナリティ・モデルは未確定 | M0  + M1  のハイブリッド相互運用レイヤー |
| **Project Mariana** | 合成型 — ホールセール CBDC + 通貨間スワップ用 AMM | 2023 に PoC 完了。本番稼働なし | wCBDC + AMM を用いた FX スワップ実験 |

**中核的な違いは M0  vs M1  vs 合成型である**。Fnality と mBridge は **M0  中央銀行マネー**（トークン化準備預金 / ホールセール CBDC）を使う。Partior と Kinexys は **M1  商業銀行預金**を使う。Agorá は **両方のレイヤーを同時に** 実験対象にし、Mariana は研究設計として **合成 wCBDC + AMM** を使う。これは、(a) 法的ファイナリティ、(b) 規制上の地位、(c) システムが最終決済として機能するのか中間決済にとどまるのか、(d) 既存 RTGS レールと競合するのか補完するのかを決める、最も重要な単一の軸である。

## マトリクス B · コンソーシアム・メンバーシップ

| ネットワーク | メンバー構成 | メンバー数 | ガバナンスモデル |
|---|---|---|---|
| Fnality fnPS | **複数銀行コンソーシアム + インフラ** | **20+ の株主**: Lloyds, Santander, UBS, BNY Mellon, Barclays, Goldman, MUFG, ING, Sumitomo Mitsui, State Street, Nasdaq Ventures, DTCC, Euroclear | 複数株主ガバナンス。意思決定は遅く、£ fnPS は USC 構想からローンチまで 9  年を要した |
| Partior | **4  主要株主 + 30+ ネットワーク参加者** | **JPMorgan + DBS + Temasek + Standard Chartered (2024)** | シンガポールを軸にし、Fnality より速いが Kinexys より遅い |
| JPM Kinexys | **単一銀行** | **JPM のみ** | 意思決定速度が最速。Liink 経由で 180+ の機関投資家・金融機関顧客 |
| mBridge | **中央銀行コンソーシアム** | BIS 離脱後の **5  稼働中中央銀行**: PBoC + HKMA + BoT + CBUAE + SAMA | 2025-10  の BIS 離脱後は PBoC が運用を主導する複数中央銀行モデル |
| Project Agorá | **G10  中央銀行 + グローバル商業銀行** | **7  の G10  中央銀行**（FRBNY, BoE, BdF, BoJ, BoK, Banxico, SNB）+ **40+ の商業銀行** | BIS 調整の設計段階 |
| Project Mariana | **3  中央銀行**（PoC） | BdF + MAS + SNB | 期限付きの研究 PoC（2022-2023） |

**意思決定速度の序列**は **Kinexys（1  行）> Partior（4  行）> mBridge（5  中央銀行）> Fnality（20+ 行）> Agorá（47+ 機関）**である。Fnality がローンチまで 9 年を要した一方、Kinexys が 4 年で累計 $1.5T に到達した比較は、「複数株主ガバナンスは遅い」という典型例である。ただし Fnality は中央銀行準備の裏付けを持ち、Kinexys は構造上それを再現できない（商業銀行は他行の準備預金をトークン化できない）。したがって比較対象は単なる速度ではなく、**正統性の射程**である。

## マトリクス C · 稼働中の通貨 (2026-05)

| ネットワーク | 稼働中の通貨 | 準備中の通貨 |
|---|---|---|
| Fnality fnPS | **GBP**（£ fnPS は 2024-Q2 稼働。初の商用取引は Lloyds × Santander × UBS） | **USD / EUR / JPY** は規制当局と交渉中（Fed / ECB / BoJ）。2026-2027  見込み |
| Partior | **USD / SGD / EUR / GBP / JPY**（5  稼働） | **INR / IDR** は 2026-Q1  に計画 |
| JPM Kinexys | **USD / EUR / GBP**（3  稼働）。**SGD** は 2026-Q2  に計画 | SGD は提携経由。長期的には JPY |
| mBridge | **CNY / HKD / THB / AED / SAR**（5  通貨が参加中央銀行に紐づく） | Brazil DREX（BCB）の Q2 2026 H2  相互運用テスト |
| Project Agorá | 設計段階の試験通貨。本番稼働通貨はない | 該当なし（フェーズ 2  の設計が継続中） |
| Project Mariana | EUR / SGD / CHF（PoC） | 該当なし（PoC は 2023 完了） |

**通貨カバレッジのスコアボード**: Partior は本番稼働中の通貨数が最も多い（5）。Fnality は稼働通貨こそ 1 つだが、BoE 承認の中央銀行準備裏付けであり、通貨あたりの **規制上の重み**が最も大きい。mBridge は **非 USD カバレッジ**が最大で、Kinexys は単一通貨（USD）で最も深く浸透している。Agorá と Mariana は本番通貨カバレッジを持たない研究 / 設計プログラムである。

## マトリクス D · 日次取扱高と累計規模

| ネットワーク | 日次取扱高 (2026-Q1) | 累計処理額 | 相当するもの |
|---|---|---|---|
| Fnality fnPS | ローンチ後に増加中だが、意味のある定常状態には未達 | 累計 <£10B | 初期段階。商用稼働 1 年目 |
| Partior | 変動的。出典は 1 日あたり 1 桁十億ドル規模を示唆 | **累計 ~$1.5T**（2021-08  ローンチ以降） | 累計規模では Kinexys と比較可能 |
| JPM Kinexys | 平均 **1 日 $5B+**（USDC 日次の約 30-40%） | **累計 $1.5T+**（2024-11  リブランド以降） | 単一ネットワークとして最大の取扱高 |
| mBridge | 小規模だが成長中。具体的な 2026  日次取扱高は非公表 | 累計は <$100B と推定 | 限定的だが政治的に重要 |
| Project Agorá | 該当なし（設計段階） | 該当なし | 該当なし |
| Project Mariana | 該当なし（PoC 完了） | 該当なし | 該当なし |

**Kinexys は単一銀行制約にもかかわらず取扱高で先行する**。JPM は競合銀行との調整なしに展開できるためである。Partior は累計では比較可能だが、4 行による共同活動を表す。Fnality は初期段階にあるが、中央銀行準備の裏付けが長期的な堀となる。mBridge の取扱高は小さいものの、**構造的に異なる到達範囲**を持つ。他ネットワークがアクセスできない非 USD のクロスボーダー商品 / 石油決済をカバーするためである。

## マトリクス E · 規制上の地位と中央銀行の裏付け

| ネットワーク | 主な規制当局 | 中央銀行の承認状況 | 規制上の分類 |
|---|---|---|---|
| Fnality fnPS | **Bank of England** | **BoE 2023-11  声明**が £ fnPS をシステミックに重要な決済システムとして確認 | **免許を受けたシステミック決済システム**（世界初） |
| Partior | **MAS Singapore** | MAS 免許を持つホールセール決済ネットワーク運営者 | シンガポールを軸とする免許 PSP |
| JPM Kinexys | **OCC + Fed**（JPM の銀行免許を通じる） | JPM Coin はバランスシート上の商業銀行預金であり、法的には JPM の銀行免許の一部 | G-SIB 免許内のトークン化商業銀行預金 |
| mBridge | BIS 離脱後の **PBoC + HKMA + 参加中央銀行** | 中央銀行運営プラットフォーム。独立した商業規制カテゴリはない | 複数中央銀行間プラットフォーム |
| Project Agorá | **BIS 調整 + 7  の G10  中央銀行** | 研究・設計段階。免許は未取得 | BIS Innovation Hub の設計段階 |
| Project Mariana | BdF + MAS + SNB | PoC 完了 | 研究専用 |

規制上の分類は二分される。**Fnality は、本番稼働しており、かつ専用のシステミック決済システム免許を持つ唯一のシステム**である。Kinexys は、独立した免許システムというより JPM の銀行免許の一機能である。Partior は PSP として免許を受ける。mBridge は商業規制枠組みを持たない複数中央銀行間プラットフォームとして運営される。Agorá と Mariana は明示的に研究 / 設計段階である。

## マトリクス F · 技術スタック

| ネットワーク | DLT プラットフォーム | コンセンサス | クロスチェーン相互運用 |
|---|---|---|---|
| Fnality fnPS | Enterprise Ethereum（Quorum から **Hyperledger Besu** へ移行） | 許可型 BFT | SWIFT ブリッジ（2024-Q4  提携） |
| Partior | **Hyperledger Fabric** 派生 | 許可型 BFT | メンバー銀行内部システムとの二者間ブリッジ |
| JPM Kinexys | **Quorum**（JPM 開発の Ethereum フォーク。ConsenSys に寄贈） | 許可型 BFT | パブリックチェーンへの JPMD 拡張: Base（2025-11）→ **Canton**（2026-01） |
| mBridge | カスタム許可型 DLT | **HotStuff BFT** | 参加中央銀行ネットワーク以外への拡張計画はない |
| Project Agorá | 未確定。設計段階で複数プラットフォームを検討 | 引用された設計資料では公開特定なし | プラットフォーム非依存を前提に設計 |
| Project Mariana | AMM モジュール付き分散台帳 | PoC 台帳 | 該当なし（研究） |

技術スタックのパターンは次のとおり。**本番システムはいずれも許可型 BFT コンセンサスを使い**、パブリックチェーンのコンセンサスは使わない。**Quorum / Besu / Fabric** が中心で、**Canton は 2026 に JPMD のプライバシーとコンポーザビリティの対象として浮上**した。**HotStuff BFT** は mBridge に固有である。Agorá のプラットフォーム非依存性は意図的な設計選択であり、BIS が 7  の G10  中央銀行を横断して調整する以上、単一スタックを義務付けることはできない。

## マトリクス G · クロスボーダー PvP / DvP 能力

| ネットワーク | 通貨間 PvP | 証券 DvP | アトミック FX スワップ |
|---|---|---|---|
| Fnality fnPS | **fnPS GBP × fnPS USD による通貨間 PvP**（$ fnPS 稼働後の 2026-2027  に計画） | DvP モジュールを開発中 | ヘルシュタット・リスクを解消する設計 |
| Partior | **24×7  のアトミック FX スワップ**（2024-Q3 稼働） | トークン化証券向け DvP | **Fnality の通貨間 PvP に対する直接競合** |
| JPM Kinexys | Onyx Digital Assets 経由の Kinexys 内通貨間処理 | 日中 repo + トークン化米国債向け DvP（累計 $700B+） | JPM 顧客基盤内 |
| mBridge | 参加 CBDC 間の **PvP アトミック決済** | 証券 DvP は主対象ではない | mBridge 参加者間 |
| Project Agorá | **クロスボーダー PvP + DvP** はフェーズ 2  の明示的な設計目標 | DvP 設計段階 | 通貨間アトミック・スワップが設計目標 |
| Project Mariana | **AMM 経由の通貨間 wCBDC スワップ**（PoC 結果） | 該当なし | Mariana の中心的な PoC 所見 |

**ヘルシュタット・リスクの排除**は 6 ネットワークすべての明示的な目標である。ただし本番能力を主張できるのは、**Partior（稼働中）、Fnality（規制当局承認済み、$ fnPS は準備中）、mBridge（5  中央銀行をまたぐ PvP が稼働中）**に限られる。Kinexys の通貨間能力は内部利用に限定され、Agorá と Mariana は設計 / 研究段階である。Project Mariana の 2023  PoC は、wCBDC + AMM が通貨間 FX をアトミックに清算できることを検証した。これは Agorá の設計と mBridge のアーキテクチャの双方に影響した基礎的な結果である。

## マトリクス H · ステーブルコイン / トークン化資産との相互運用性

| ネットワーク | ステーブルコイン相互運用 | トークン化 MMF / RWA 相互運用 |
|---|---|---|
| Fnality fnPS | 直接ではない。fnPS は最終決済資産であり、ステーブルコインはメンバー銀行経由で fnPS に償還され得る | CME/DTCC デリバティブ・シナリオにおける **IM 担保としての BUIDL**（2026-Q1  テスト） |
| Partior | ステーブルコイン・ブリッジ構想（USDC）は議論済みだが未稼働 | トークン化資産 DvP 設計 |
| JPM Kinexys / JPMD | **JPMD は JPM の商業銀行預金を Base + Canton パブリックチェーン上にトークン化するもの**であり、ステーブルコインに近接する | **[[fintech/blackrock-buidl-tokenized-mmf-overview\|BUIDL]] IM 担保** + Onyx Digital Assets repo |
| mBridge | 対象外。mBridge は wCBDC 専用 | 対象外 |
| Project Agorá | **明示的な目標**: ステーブルコイン → 銀行預金 → wCBDC の 3 層パススルー | トークン化証券 + RWA 相互運用が設計目標 |
| Project Mariana | 該当なし | 該当なし |

この軸では **Agorá の戦略的位置づけが最も明確になる**。Agorá は、ステーブルコイン（民間）、トークン化預金（商業銀行 M1）、ホールセール CBDC（中央銀行 M0）の間の **相互運用レイヤー**になることを明示的に狙う。3 サークル MRA 枠組み（US GENIUS + EU MiCA + HK / SG / JP 相互承認）が固まれば、Agorá はコンプライアンス適合ステーブルコインが最終的に償還される自然な決済アンカーになり得る。Fnality と Kinexys もステーブルコイン隣接戦略を持つが、多層相互運用ファブリックとして設計されているわけではない。

## マトリクス I · SWIFT に対する戦略的位置づけ

| ネットワーク | SWIFT メッセージングを代替するか | SWIFT コルレス銀行業務を代替するか | SWIFT と共存するか |
|---|---|---|---|
| Fnality fnPS | 代替しない（2024-Q4  提携を通じて SWIFT メッセージングを使用） | 部分的。決済レグは Fnality 上で動く | **共存する。SWIFT × Fnality の公開協業がある** |
| Partior | 部分的（コルレス銀行の 2-3 日決済を代替） | メンバー銀行コリドーでは **代替する** | 非メンバー・コリドーでは共存 |
| JPM Kinexys / Liink | **Liink は SWIFT MT メッセージングを代替**（1100+ 行） | JPM 顧客基盤では部分的 | 一部セグメントでは SWIFT の直接競合 |
| mBridge | **代替する。非 USD クロスボーダー CBDC で SWIFT を迂回するよう明示的に設計** | **代替する** | 政治的には SWIFT 外部での共存を意図 |
| Project Agorá | SWIFT メッセージングとの相互運用を前提に設計 | コルレス銀行業務の決済レグを代替 | **共存。SWIFT が参加者** |
| Project Mariana | 該当なし | 該当なし | 該当なし |

SWIFT との関係パターンは次のとおり。**Fnality + Agorá は SWIFT と明示的に共存する**（Agorá は SWIFT を参加者に含み、Fnality は公開された協業を持つ）。**Partior + Kinexys は特定コリドーで SWIFT を部分的に代替する**。**mBridge は非 USD CBDC コリドーで SWIFT を明示的に迂回する**。2024-Q4  の SWIFT × Fnality 協業は、既存メッセージ・レールとトークン化決済資産がゼロサムではないことを示す最も明確なシグナルである。SWIFT はクロスボーダー・メッセージングを提供し、Fnality は台帳上決済を提供し、2 つのレイヤーが接続される。

## これらの軸を採用する理由

9 つのマトリクス軸（決済資産、コンソーシアム・メンバーシップ、稼働中通貨、日次取扱高、規制上の地位、中央銀行の裏付け、ステーブルコイン相互運用、技術スタック、SWIFT との関係）は、ホールセール決済採用における **ゲート変数**に対応するため採用した。

1. **決済資産** — 法的ファイナリティと規制分類を決める（M0  vs M1  vs 合成型）。
2. **コンソーシアム・メンバーシップ** — 意思決定速度とガバナンス複雑性を決める（単一銀行 vs 複数銀行 vs 中央銀行のみ）。
3. **稼働中通貨** — 実現済みの射程を測る（5  通貨 vs 1）。
4. **日次取扱高** — 実現済み採用を測る（ローンチ後に唯一重要な指標）。
5. **規制上の地位** — そのシステムが最終決済として機能できるかを決める（Fnality の BoE 免許は固有）。
6. **中央銀行の裏付け** — 正統性の上限を決める。
7. **ステーブルコイン相互運用性** — そのシステムが post-GENIUS の 3 サークル MRA 枠組みに適合するかを決める。
8. **技術スタック** — オペレーショナルリスクとクロスチェーン到達範囲を決める。
9. **SWIFT との関係** — 既存勢力に対する競争上の位置づけを決める。

これら 9 つの軸を合わせると、なぜ **Fnality だけが「トークン化中央銀行マネー」を商品カテゴリとして主張できるのか**、なぜ **Kinexys が単一銀行制約にもかかわらず実取扱高で先行するのか**、なぜ **Partior がアジア・コリドーの商業銀行預金型中間地帯を占めるのか**、なぜ **mBridge が BIS 離脱後も存続したのか**（運用機構が既に稼働していたため）、そしてなぜ **Agorá が稼働中システムの競合ではなく将来の相互運用レイヤーとして位置づけられるのか**が見える。マトリクス表示は、これらの構造パターンを横並びで明らかにする。

## マトリクスの読み方

- **Fnality は「トークン化中央銀行マネー」、Kinexys は「トークン化商業銀行預金」、mBridge は「ホールセール CBDC ブリッジ」、Partior は「複数銀行預金コンソーシアム」**である。これらはまとめて「ホールセール決済」と呼ばれがちだが、規制分類とファイナリティの性質がまったく異なる 4 種類の商品である。
- **Fnality のローンチまで 9 年という期間は、複数株主ガバナンスの摩擦を反映する**。Kinexys が 4 年で $1.5T に到達したことは、単一銀行の意思決定速度を示す。アーキテクチャ上の選択（コンソーシアム vs 単一銀行）が速度差を生む。ただし Fnality には、Kinexys が構造的に再現できない中央銀行準備の裏付けがある。
- **mBridge からの BIS 離脱（2025-10）は技術判断ではなく政治判断であった**。運用プラットフォームは PBoC 主導で継続した。むしろ BIS 離脱は運用を乱すのではなく、政治的な位置づけを明確にした。Agorá の開始（2024-04）は、西側主導の並行プロジェクトへ向かう BIS の転換であった。
- **Project Mariana の 2023 PoC** は、wCBDC + AMM が通貨間 FX をアトミックに清算できることを検証した。これは Agorá の設計と mBridge のアーキテクチャの双方に影響した基礎的な結果である。Agorá のフェーズ 2  設計目標の多くは Mariana の所見にさかのぼる。
- **ステーブルコイン相互運用性は次の 10 年の境界条件である**。3 サークル MRA 枠組み（GENIUS / MiCA / EPI）と Agorá の M0-M1-ステーブルコイン 3 層モデルは、コンプライアンス適合ステーブルコインが最終的にトークン化銀行預金を通じてホールセール CBDC に償還されるアーキテクチャを示唆する。Fnality と Kinexys はこのアーキテクチャに位置づけられるが、mBridge は設計上 wCBDC 専用である。
- **SWIFT × Fnality は「既存勢力 + トークン化」の典型的提携である**（2024-Q4）。これは、SWIFT の戦略的位置づけが、自社のコルレス銀行モデルを直接置き換えることではなく、**トークン化決済資産の上にクロスボーダー・メッセージングを提供すること**にあることを示唆する。
- **「20 のコンソーシアム」vs「単一銀行」vs「5 中央銀行」のガバナンス比較**は、[[fintech/multi-megabank-consortium-governance|multi-megabank consortium governance]] のトレードオフ、すなわち速度と正統性の範囲の典型例である。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/fnality-wholesale-settlement|Fnality fnPS]]
- [[fintech/partior-jpm-dbs-temasek-consortium|Partior JPM / DBS / StanChart / Temasek consortium]]
- [[fintech/jpm-onyx-wholesale-network|JPM Onyx / Kinexys]]
- [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC bridge]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/multi-megabank-consortium-governance|多大银行联邦治理]]
- [[fintech/central-banking-function-unbundling|央行职能解体 5 层]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|机构 SC vs TD 论点]]
- [[fintech/tokenized-deposit-cumulative-volume-scale|TD 累计量级]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA framework]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
<!-- /wiki-links:managed -->

## 出典

- Fnality International 公開資料: https://www.fnality.org/
- Bank of England — statement on Fnality (2023-11): https://www.bankofengland.co.uk/news/2023/november/boe-statement-on-fnality
- Partior 公開資料: https://www.partior.com/
- MAS — Partior launch announcement (2021): https://www.mas.gov.sg/news/media-releases/2021/partior-launch
- JPMorgan Kinexys 公開サイト: https://www.jpmorgan.com/kinexys
- JPMorgan Onyx legacy page: https://www.jpmorgan.com/onyx
- BIS Innovation Hub CBDC topic landing: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Project Agorá page: https://www.bis.org/about/bisih/topics/cbdc/agora.htm
- BIS Working Paper No. 1116  — 「次世代の通貨システム: ブループリント」（2024）: https://www.bis.org/publ/work1116.htm
- BIS Project Mariana — 公開研究報告書（2023）
- SWIFT × Fnality 協業発表（2024-Q4）: https://www.swift.com/news-events/news/swift-fnality-collaboration
